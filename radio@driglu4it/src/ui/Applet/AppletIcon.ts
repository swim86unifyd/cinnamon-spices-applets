import { RADIO_SYMBOLIC_ICON_NAME, LOADING_ICON_NAME } from "consts"
import { AdvancedPlaybackStatus, IconType } from "types"

const { Icon, IconType } = imports.gi.St
const { IconType: IconTypeEnum } = imports.gi.St


// TODO the AppletIcon shouldn't have access to this!
interface Arguments {
    // panel and location label are needed to calc the icon size
    panel: imports.ui.panel.Panel,
    locationLabel: 'left' | 'center' | 'right'
}


export function createAppletIcon(args: Arguments) {

    const {
        panel,
        locationLabel
    } = args

    let playbackStatus: AdvancedPlaybackStatus

    const playbackStatusStyleMap = new Map<AdvancedPlaybackStatus, string>([
        ['Stopped', ' '],
        ['Loading', ' ']
    ])

    const icon = new Icon({})

    let normalIconType: IconType


    // the icon type passed from outside is overriten when the playbackstatus is 'loading' 
    function setIconTypeInternal(iconTypeEnum: imports.gi.St.IconType, iconName: string) {
        icon.style_class = iconTypeEnum === IconTypeEnum.SYMBOLIC ?
            'system-status-icon' : 'applet-icon'

        icon.icon_name = iconName
        icon.icon_type = iconTypeEnum
        icon.icon_size = panel.getPanelZoneIconSize(locationLabel, iconTypeEnum)
    }


    function setIconType(iconType: IconType) {

        if (!iconType) return

        let iconTypeEnum: imports.gi.St.IconType
        let iconName: string
        normalIconType = iconType

        if (iconType === 'SYMBOLIC') {
            iconName = RADIO_SYMBOLIC_ICON_NAME
            iconTypeEnum = IconTypeEnum.SYMBOLIC
        } else {
            iconName = `radioapplet-${iconType.toLowerCase()}`
            iconTypeEnum = IconTypeEnum.FULLCOLOR
        }

        setIconTypeInternal(iconTypeEnum, iconName)
    }

    function updateIconSize() {
        const iconSize = panel.getPanelZoneIconSize(locationLabel, icon.icon_type)
        icon.icon_size = iconSize
    }

    function setColorWhenPaused(color: string) {
        playbackStatusStyleMap.set('Paused', `color: ${color}`)

        if (playbackStatus) setPlaybackStatus(playbackStatus)
    }

    function setColorWhenPlaying(color: string) {

        playbackStatusStyleMap.set('Playing', `color: ${color}`)

        if (playbackStatus) setPlaybackStatus(playbackStatus)
    }

    function setPlaybackStatus(newPlaybackStatus: AdvancedPlaybackStatus) {

        playbackStatus = newPlaybackStatus
        const style = playbackStatusStyleMap.get(playbackStatus)


        if (newPlaybackStatus === 'Loading') {
            setIconTypeInternal(IconTypeEnum.SYMBOLIC, LOADING_ICON_NAME)
        } else {
            setIconType(normalIconType)
        }

        if (!style) return

        icon.set_style(style)
    }

    return {
        actor: icon,
        setPlaybackStatus,
        setColorWhenPlaying,
        setColorWhenPaused,
        setIconType,
        updateIconSize
    }

}
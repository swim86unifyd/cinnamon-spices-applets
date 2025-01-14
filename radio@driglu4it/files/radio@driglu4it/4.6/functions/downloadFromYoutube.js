"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadSongFromYoutube = void 0;
const promiseHelpers_1 = require("functions/promiseHelpers");
const notify_1 = require("functions/notify");
const { MAX_LENGTH } = imports.misc.util;
const { get_home_dir } = imports.gi.GLib;
async function downloadSongFromYoutube(song, downloadDir) {
    if (!song)
        return;
    const music_dir_absolut = downloadDir.replace('~', get_home_dir()).replace('file://', '');
    const downloadCommand = `
        youtube-dl --output "${music_dir_absolut}/%(title)s.%(ext)s"  --extract-audio --audio-format mp3 ytsearch1:"${song.replace('"', '\"')}" --add-metadata --embed-thumbnail`;
    try {
        notify_1.notifySend(`Downloading ${song} ...`);
        const [error, stdout] = await promiseHelpers_1.spawnCommandLinePromise(downloadCommand);
        if (error)
            throw new Error(error);
        const arrayOfLines = stdout.match(/[^\r\n]+/g);
        const searchString = '[ffmpeg] Destination: ';
        const filePath = (arrayOfLines.find(line => line.includes(searchString))
            .split(searchString))[1];
        if (!filePath)
            throw new Error("couldn't download song");
        notify_1.notifySend(`Download finished. File saved to ${filePath}`);
        global.log(`used downloadCommand: ${downloadCommand}`);
    }
    catch (error) {
        const notifyMsg = ("Couldn't download song from Youtube due to an Error. Make Sure you have the newest version of youtube-dl installed. Visit the Radio Applet Site in the Cinnamon Store for installation instruction");
        notify_1.notifySend(notifyMsg);
        global.logError(`${notifyMsg} The following error occured: ${error}. The used download Command was: ${downloadCommand}`);
    }
}
exports.downloadSongFromYoutube = downloadSongFromYoutube;

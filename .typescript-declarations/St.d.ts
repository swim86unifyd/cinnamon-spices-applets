declare namespace imports.gi.St {

	// CLASSES

	export class Adjustment {
		set_value(value: number): void;
		/**
		 * @returns :
		 - value (Number) — the current value
		 - lower (Number) — the lower bound
		 - upper (Number) — the upper bound
		 - step_increment (Number) — the step increment
		 - page_increment (Number) — the page increment
		 - page_size (Number) — the page size
		 */
		get_values(): number[];
		get_value(): number;
	}
	export class Bin extends Widget {
		constructor(options?: any)
		get_child(): Widget;
		set_child(widget: Widget): void;
	}
	export class BorderImage {

	}

	export class BoxLayout extends Widget {
		constructor(options?: any)
		/** Deprecated, use add_child instead */
		add_actor(element: Widget): void;
		add_child(element: Widget): void;
		/** Works but I can't find where it comes from */
		add(element: Widget, options?: AddOptions): void;
		/** private function by default? */
	}
	interface IButton {
		reactive: boolean;
		label: string;
		url: string;
		child: any;
		connect(signal: 'clicked', callback: (actor: this, clicked_button: number) => void): number
	}

	type ButtonType = IButton & Widget
	interface Button extends ButtonType { }

	export class Button {
		constructor(options?: ButtonOptions);
	}
	export interface ButtonOptions {
		style?: string;
		reactive?: boolean;
		style_class?: string;
		can_focus?: boolean;
		label?: string;
		child?: Widget;
	}
	export class Clipboard {
		static get_default(): Clipboard;
		set_text(type: ClipboardType, text: string): void
	}
	export class DrawingArea extends Widget {
		constructor(options?: any)
		queue_repaint(): void;
		get_context(): any;
		get_surface_size(): number[];
		width: number;
	}
	export class Entry {

	}
	export class FocusManager extends gi.GObject.Object {
		public static get_for_stage(stage: gi.Clutter.Stage): FocusManager;
		public add_group(root: Widget): void;
		public get_group(widget: Widget): Widget;
		public navigate_from_event(event: Clutter.Event): boolean;
		public remove_group(root: Widget): void;
	}
	export class GenericAccessible {

	}
	export class Icon extends Widget {
		icon_type: IconType;
		icon_size: number;
		icon_name: string;
		constructor(options?: IconOptions);
	}
	interface IconOptions {
		icon_type?: IconType;
		icon_name?: string;
		icon_size?: number;
		style_class?: string;
		/** css string */
		style?: string;
	}
	export class ImageContent {

	}
	export class Label extends Widget {
		text: string;
		get_clutter_text(): gi.Clutter.Text;
		clutter_text: gi.Clutter.Text;
		constructor(options?: any);
	}
	export class PasswordEntry {

	}
	interface IScrollBar {
		get_adjustment(): Adjustment;
		set_adjustment(adjustment: Adjustment): void;
		connect(signal: 'scroll-start' | 'scroll-stop', callback: (actor: this) => void): number
	}

	type ScrollBarType = IScrollBar & Widget
	interface ScrollBar extends ScrollBarType { }

	export class ScrollBar {
		get_adjustment(): Adjustment;
		set_adjustment(adjustment: Adjustment): void;
	}
	export class ScrollView extends Widget {
		set_row_size(row_size: number): void;
		get_row_size(): number;
		set_policy(hscroll: any, vscroll: any): void;
		get_vscroll_bar(): ScrollBar;
		get_hscroll_bar(): ScrollBar;
		overlay_scrollbars: boolean;
		"hscrollbar-policy": Gtk.PolicyType;
		"vscrollbar-policy": Gtk.PolicyType;
		"hscrollbar-visible": boolean;
		"vscrollbar-visible": boolean;
		clip_to_allocation: boolean;
		constructor(options?: any);
	}
	export class ScrollViewFade {

	}
	export class Scrollable {

	}
	export class Settings {

	}
	export class TextureCache {

	}
	export class Theme {
		constructor();
		get_custom_stylesheets(): imports.gi.Gio.File[];
	}
	export class ThemeContext {

	}
	export class ThemeNode {
		constructor();
		get_length(property: string): number;
		get_foreground_color(): Clutter.Color;
		get_background_color(): Clutter.Color;
		geometry_equal(other: ThemeNode): boolean;
		get_background_gradient(): any;
		get_background_image(): imports.gi.Gio.File;
		get_background_image_shadow(): any //shadow;
		get_background_paint_box(allocation: any): any; //clutter.ActorBox
		get_border_color(side: Side): Clutter.Color;
		get_border_image(): any; //BorderImage
		get_border_radius(corner: any): number;
		get_border_width(side: Side): number;
		get_box_shadow(): any; //shadow
		get_color(property_name: string): Clutter.Color;
		/*get_content_box(allocation)
		get_double(property_name)
		get_element_classes()
		get_element_id()
		get_element_type()
		get_font()
		get_font_features()
		get_foreground_color()
		get_height()
		get_horizontal_padding()
		get_icon_colors()
		get_icon_style()
		get_length(property_name)
		get_letter_spacing()*/
		get_margin(side: Side): number;
		/*get_max_height()
		get_max_width()
		get_min_height()
		get_min_width()
		get_outline_color()
		get_outline_width()*/
		get_padding(side: Side): number;
		/*get_paint_box(allocation)
		get_parent()
		get_pseudo_classes()
		get_shadow(property_name)
		get_text_align()
		get_text_decoration()
		get_text_shadow()
		get_theme()
		get_transition_duration()
		get_url(property_name)
		get_vertical_padding()
		get_width()
		hash()
		invalidate_background_image()
		invalidate_border_image()
		lookup_color(property_name, inherit)
		lookup_double(property_name, inherit)
		lookup_length(property_name, inherit)
		lookup_shadow(property_name, inherit)
		lookup_time(property_name, inherit)
		lookup_url(property_name, inherit)
		paint_equal(other)*/
		to_string(): string;
	}
	export class Viewport {

	}
	interface IWidget {
		destroy(): void;
		style_class: string;
		add_style_class_name(style_class: string): void;
		add_style_pseudo_class(style_class: string): void;
		remove_style_pseudo_class(pseudo_class: string): void;
		get_style_class_name(): string;
		remove_style_class_name(style_class: string): void;
		get_style(): string;
		set_style(style: string): string;
		get_theme(): imports.gi.St.Theme;
		get_theme_node(): ThemeNode;
		show(): void;
		hide(): void;
		style: string;
		connect(signal: 'style-changed' | 'popup-menu', callback: (actor: this) => boolean | void): number;
	}

	// This is the only way we can extend a class when its bases has different signatures. 
	// See: https://github.com/linuxmint/cinnamon-spices-applets/pull/3766
	type WidgetType = IWidget & Clutter.Actor & Clutter.Container & Clutter.Scriptable & Clutter.Animatable;
	interface Widget extends WidgetType { }

	export class Widget {
		constructor(options?: any);
	}
	export class WidgetAccessible {

	}

	export class Table extends Widget {

	}

	export class Content {
		get_preferred_size(): any[];
		invalidate(): void;
		invalidate_size(): void;
	}

	interface IImage {
		get_texture(): any;
	}

	type ImageExtends = Content & gi.GObject.Object;
	interface Image extends ImageExtends { }
	export class Image {
		static new(): Image;
	}

	// ENUMS


	export enum Align {
		START,
		MIDDLE,
		END
	}
	export enum BackgroundSize {

	}
	export enum ClipboardType {
		CLIPBOARD,
		PRIMARY
	}
	export enum Corner {

	}
	/** Enumeration for focus direction. */
	export enum DirectionType {
		/** Move forward. */
		TAB_FORWARD = 0,
		/** Move backward. */
		TAB_BACKWARD = 1,
		/** Move up. */
		UP = 2,
		/** Move down. */
		DOWN = 3,
		/** Move left. */
		LEFT = 4,
		/** Move right. */
		RIGHT = 5
	}
	export enum GradientType {

	}
	export enum IconStyle {
		/** Lookup the style requested in the icon name. */
		REQUESTED = 0,
		/** Try to always load regular icons, even when symbolic
		icon names are given. */
		REGULAR = 1,
		/** Try to always load symbolic icons, even when regular
		icon names are given. */
		SYMBOLIC = 2
	}
	export enum IconType {
		SYMBOLIC,
		FULLCOLOR
	}
	export enum PolicyType {
		ALWAYS = 0,
		AUTOMATIC = 1,
		NEVER = 2,
		EXTERNAL = 3
	}
	export enum Side {
		TOP = 0,
		RIGHT = 1,
		BOTTOM = 2,
		LEFT = 3
	}
	/** Used to align text in a label. */
	export enum TextAlign {
		LEFT = 0,
		CENTER = 1,
		RIGHT = 2,
		JUSTIFY = 3
	}
	export enum TextureCachePolicy {

	}
	export enum TextDirection {

	}

	// INTERFACES

	export interface Shadow {

	}

	export interface AddOptions {
		x_fill?: boolean;
		x_align?: Align;
		y_align?: Align;
		y_fill?: boolean;
		expand?: boolean;
	}

	// FUNCTIONS
	/**
	 * Creates a string describing actor, for use in debugging. This
	 * includes the class name and actor name (if any), plus if actor
	 * is an St.Widget, its style class and pseudo class names.
	 * @param actor  a Clutter.Actor
	 * @returns the debug name.
	 */
	export function describe_actor(actor: Clutter.Actor): string;
}

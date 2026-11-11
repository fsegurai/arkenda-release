# Window effect on Linux (desktop)

**Appearance ▸ Window effect ▸ Blur** lets the desktop show, blurred, through Arkenda's chrome: the sidebar, the note
list, the inspector, the tab and toolbar rows, and the status bar. The note's text area always stays
opaque, so your writing never sits on top of a busy wallpaper. This page explains what works on Linux,
what you can set up on your side to get a real blur, and what no app can fix.

## What Arkenda does on Linux

- **Blur** asks your desktop for a native blur behind the window: KDE Plasma's KWin (on Wayland through
  `ext-background-effect-v1` or KWin's own blur protocol, on X11 through its blur property) blurs it
  while its Blur desktop effect is on. Where the desktop offers apps no blur (GNOME, for example), or
  blurs windows by its own rules (Hyprland, SwayFX, Wayfire), the window stays see-through without
  Arkenda's blur, and the setting says why. The chrome is drawn at the opacity you choose.
- The **Translucent** mode (a see-through window with no blur) was removed in 0.4.0: a device that had
  it chosen shows **None**; on the first launch the app turns the effect off as it starts (the window
  looks opaque), and every later launch opens an ordinary opaque window. A device that had **Blur**
  keeps it.
- **Glass on menus, peeks and the palette** (the redesigned desktop, phase 6.1 M3) is drawn by Arkenda
  itself, inside its own window, whenever Blur is on. It works the same on every Linux desktop, with or
  without a compositor blur. With the effect off, or when the system asks for reduced transparency,
  they stay opaque.

## Turning it on

1. **Settings ▸ Experimental ▸ Blurred window**: on.
2. **Settings ▸ Appearance ▸ Window effect**: **Blur**, and the opacity.
3. **Restart Arkenda.** The window is created transparent only at launch.

To turn it off, choose **None** and restart.

## Getting a real blur, desktop by desktop

| Desktop | See-through window | Blur behind the window | How |
| --- | --- | --- | --- |
| **KDE Plasma** (X11 or Wayland) | Yes | Yes | Arkenda asks KWin for its blur: turn on System Settings ▸ Desktop Effects ▸ **Blur**, then restart Arkenda. |
| **Hyprland** | Yes | Yes | Hyprland blurs every translucent window once blur is on: `decoration { blur { enabled = true } }` in `hyprland.conf`. Tune `size` and `passes` there. |
| **Sway** | Yes | Only with SwayFX | Upstream Sway has no blur. The SwayFX fork adds `blur enable` to the config. |
| **X11 with picom** (i3, Openbox, bspwm, XFCE, MATE, Cinnamon…) | Yes, with picom running | Yes | In `picom.conf`: `blur-background = true;` and `blur-method = "dual_kawase";` (picom 10 or later). Limit it to Arkenda with a rule on its window class if you don't want every translucent window blurred. On XFCE, MATE and Cinnamon, turn off the desktop's built-in compositor and run picom instead. |
| **GNOME** (Mutter) | Yes | Only through an extension | GNOME has no blur behind windows. The **Blur my Shell** extension has an *Applications* option, marked experimental by its authors, with a list of the windows to blur: add Arkenda's window class there. |
| **XFCE, MATE, Cinnamon** (built-in compositor) | Yes | No | Their compositors do transparency, not blur. Use picom (row above) for blur. |
| **X11 without a compositor** | No: the chrome shows black | No | Start a compositor (picom), or keep the effect off. |

### Finding Arkenda's window class

Compositor rules match windows by their class (X11) or app id (Wayland). Arkenda's is set from its
identifier, `dev.fsegurai.arkenda`, or its name, `arkenda`. Check which one your session reports:

- **X11:** run `xprop WM_CLASS` and click the Arkenda window.
- **Hyprland:** `hyprctl clients` lists the `class` of each window.
- **KDE Plasma:** System Settings ▸ Window Management ▸ Window Rules ▸ Add New ▸ **Detect Window
  Properties**, then click the Arkenda window.
- **Sway:** `swaymsg -t get_tree` shows each window's `app_id`.

## Troubleshooting

- **The chrome is black, not translucent.** Nothing composites the window. On X11, start a compositor
  (picom) or turn on your desktop's own. Wayland sessions always composite.
- **The window is black or blank after turning the effect on, often with an NVIDIA GPU.** This is a known
  WebKitGTK rendering issue. Set the effect back to **None** and restart. Arkenda never sets
  `WEBKIT_DISABLE_DMABUF_RENDERER`; setting it yourself can make the window disappear except the element
  under the pointer.
- **Text is hard to read on a busy wallpaper.** Raise the opacity under Window effect. Arkenda already
  raises it wherever text would fall below the WCAG AA contrast level, so if you still struggle, choose
  a quieter wallpaper or **None**.
- **Screenshots or screen sharing show black areas.** Some compositors and capture tools drop
  transparency. Choose **None** while you share your screen.

## Limits no app can fix

- **There is no cross-desktop blur on Linux.** Each compositor decides, and the table above is the whole
  map. GNOME without an extension, and XFCE, MATE or Cinnamon with their own compositors, cannot blur
  behind a window at all.
- **On Wayland, an app cannot force effects on itself.** Only compositors that offer a blur protocol
  (KDE's KWin today) blur behind Arkenda's window on request.
- **The blur's strength and tint are your compositor's**, not Arkenda's: Arkenda sets only how opaque its
  chrome is.
- **The web version has none of this**: a browser page cannot see through its own window, and it has no
  window effect, so its menus and peeks stay opaque.

---
label: "Maps"
description: "Write a map block with one place or several, a route and areas; pick places on a map; load a map with a click or automatically; what it sends to OpenStreetMap; maps in print and exports."
order: 12
tags: ["notes","markdown","maps","privacy","export"]
---

# Maps

A `map` block in a note shows places on an OpenStreetMap map in the preview. Maps are on by default; you can
turn them off in **Settings ▸ Editor ▸ Markdown extensions ▸ Maps**.

## Writing a map

Write a fenced block named `map`. The simplest one is a place's latitude and longitude:

````markdown
```map
9.9281, -84.0907
```
````

A place can also be written with its fields:

````markdown
```map
lat: 9.9281
lon: -84.0907
zoom: 13
label: San José, Costa Rica
marker: true
```
````

- `lat` (−90 to 90) and `lon` (−180 to 180) are required; `zoom` is 1 to 19 (12 by default); `label` is at most
  120 characters and shows when you click the place's marker; `marker: false` hides the marker.

Several places, one per line as `latitude, longitude, label` (the label is optional). The map fits all of them
unless you give a `zoom`:

````markdown
```map
9.9281, -84.0907, San José
9.8644, -83.9194, Cartago
route: true
circle: 9.93, -84.08, 2 km
polygon: 9.95, -84.10; 9.95, -84.05; 9.90, -84.07
height: 320
```
````

- `route: true` draws a line through the places in their order (two places at least).
- `circle: latitude, longitude, radius` draws an area; the radius is in metres, or in `km` (1 m to 1,000 km).
- `polygon:` draws an area through 3 to 100 points, separated by `;`.
- `height:` sets the map's height in pixels (120 to 800).

A block with a line Arkenda does not know, a key written twice or a value out of range is not a map: it stays a
code block, so you can see what to fix. A block holds at most 50 places, 10 circles and 10 polygons.

## Picking places

Choose **Map** from the insert menu (the toolbar, the **/** menu, the block **+** or the editor's context
menu). Click or tap the map to drop a place, or press **Enter** while the map has the focus to drop one at its
centre. Give each place a label if you like, remove the ones you don't want, add one by its coordinates, and
turn on **Join the places with a route**. **Insert** writes the block into the note.

The picker shows OpenStreetMap's map, so opening it loads map tiles from OpenStreetMap. Nothing you type is
sent anywhere: there is no place search.

## Using a map

- Drag to move the map, and use **+** and **−** to zoom. The mouse wheel zooms only after you click the map, so
  the note still scrolls past it.
- **⤢** puts the map over the whole window; press it again, or **Esc**, to go back.
- **↗** opens the same view on openstreetmap.org, in your browser.
- When the map tiles cannot load (you're offline, for example), the map says so and offers **Try again**; it
  also tries again by itself when you're back online.
- Screen readers read the map's places, its route and its areas as text.

## Loading maps: a click, or automatically

Loading a map requests its tiles from OpenStreetMap's tile server (`tile.openstreetmap.org`), which then sees
your device's IP address. So by default **a map waits for a click**: the block shows its places as text and a
**Load map** button, and nothing is requested until you press it. Each map loads on its own click.

To load maps without the click, turn on **Load maps automatically** under **Maps** in **Settings ▸ Editor ▸
Markdown extensions**. Maps then load as soon as they scroll into view. The choice is kept on this device only.

Either way Arkenda follows OpenStreetMap's tile policy: the map always credits OpenStreetMap, it loads only the
tiles of the view you see (never whole areas ahead of time), and nothing loads for a map you haven't loaded or
that isn't on screen. A note chooses places, never the server: maps only ever load from OpenStreetMap.

## Printing and exports

- **Printing the preview** prints a loaded map as it is on screen, without its buttons; a map you haven't
  loaded prints its places as text.
- **Exports** (a web page, plain text or PDF) show a map block's places as text: the map's name, its places as a
  list (each label, or the coordinates of a place without one), then its route and areas. A block that is not a
  map stays a code block.

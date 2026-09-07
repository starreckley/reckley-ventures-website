# Nivora Skye — Release Theme

## Theme name

**First Light**

Skye is the first major Nivora release. Its visual identity should feel like the first light reaching an island horizon: calm, premium, spacious, and quietly optimistic.

## Relationship to the master brand

Nivora's permanent master logo remains the mountain-horizon + halo mark with the `NIVORA` wordmark.

Skye adds a release atmosphere around the permanent brand. It does not replace or redesign the master logo.

Preferred lockup where a release name is needed:

```text
NIVORA
S K Y E
```

Minor releases remain within Skye, for example:

- Nivora Skye 1.0
- Nivora Skye 1.1
- Nivora Skye 1.2

A new island name is reserved for a genuinely major Nivora generation.

## Visual concept

**First Light Over Skye**

Primary motifs:

- island/mountain silhouettes
- wide horizons
- calm sea or mist
- first light / dawn halo
- open sky
- restrained reflected light

Avoid:

- literal macOS wallpaper copies
- busy alpine postcard imagery
- gaming-style neon landscapes
- cyberpunk visual noise
- excessive gradients
- heavy glass effects on constrained hardware

## Core palette

### Midnight
`#07101D`

Deep background for dark boot/login surfaces.

### Skye Navy
`#0C1C33`

Primary dark surface.

### Horizon Blue
`#6EB8FF`

Cool edge/accent light.

### Mist
`#DDEBFA`

Soft cool highlight and text support.

### Dawn
`#FFF0D1`

Small warm highlight for the halo/first-light motif.

### Slate
`#7F91A8`

Secondary text and muted controls.

The Dawn color should be used sparingly. Skye should remain cool, calm, and primarily blue/navy.

## Boot experience

The Skye boot composition should use:

- dark Midnight/Skye Navy background
- centered permanent Nivora mark
- `NIVORA` wordmark
- optional small `SKYE` release label
- a thin restrained horizontal progress line beneath the mark/wordmark

The progress line is **boot UI**, not part of the master logo.

The loading presentation should remain simple and quiet. No spinner, percentage counter, bouncing animation, or verbose text in the normal path.

Diagnostic/recovery access must remain available and must not be hidden behind branding.

## Login and lock screen

Use the same First Light visual family with less visual detail than the desktop wallpaper.

Preferred characteristics:

- dark atmospheric background
- faint horizon light
- permanent Nivora mark
- high readability
- minimal visual distraction around password and accessibility controls

## Desktop wallpaper family

Skye should ship with a small curated set rather than dozens of images.

Recommended set:

1. **First Light** — hero/default dark wallpaper, island silhouette at dawn.
2. **Blue Hour** — dark navy and misty blue, minimal horizon.
3. **Silver Coast** — cooler neutral light theme wallpaper.
4. **Open Skye** — brighter daytime option with spacious sky and distant island terrain.

Every wallpaper should have light/dark-safe variants or be proven legible with the Nivora shell.

## Adaptive visual behavior

The release identity is the same on every supported machine.

On constrained/software-rendered hardware:

- static wallpaper
- opaque/nearly opaque panels
- no blur
- reduced animation
- minimal glow

On capable hardware:

- restrained transparency
- subtle blur
- slightly richer shadows
- optional very subtle atmospheric motion only if later proven efficient

The user never selects a Skye performance or visual-quality mode.

## System sounds

Deferred. If introduced later, Skye sounds should be soft, brief, and low-attention. Silence should remain preferable to unnecessary feedback.

## Release artwork

Marketing/release artwork may use a more scenic version of the Skye island/horizon motif than the permanent logo.

The permanent logo itself should not change when a future island release replaces Skye.

## Brand phrase

Primary product statement:

> A computer that stays out of the way. Just use it. It works.

Release-theme concept phrase for internal/marketing use:

> First Light

Do not put either phrase on the normal boot screen.

# Media Guide

All portfolio media is controlled from one file:

`src/data/mediaConfig.ts`

## Background

```ts
BACKGROUND_VIDEO_CONFIG.enabled = true;
```

Set it to `false` to remove the background video.

To replace it, change only this import:

```ts
import backgroundVideo from '../assets/videos/portfolio-background.mp4';
```

## Portfolio videos

Change the files in `src/assets/videos/`, then update the matching entries in `LOCAL_PROJECT_VIDEOS`.

Remove an entry if you want that project to show its original built-in demo instead.

## Profile

Replace:

`src/assets/images/raghav_profile.jpg`

No component code needs to change.

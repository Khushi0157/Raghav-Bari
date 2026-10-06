<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/b1e59f85-2860-440e-b953-d4c0f6677e12

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Local portfolio media

The portfolio now uses local media files so the public site does not depend on browser uploads or rotating demo videos.

### Change the background video
Edit `src/data/mediaConfig.ts`. Replace the `backgroundVideo` import with another file from `src/assets/videos/`, or set `BACKGROUND_VIDEO_CONFIG.enabled` to `false`.

### Change a portfolio video
Edit `LOCAL_PROJECT_VIDEOS` in `src/data/mediaConfig.ts`. Each key is a project ID from `src/data/portfolioData.ts`. Remove a key to use the built-in motion demo for that project.

### Change the profile picture
Replace `src/assets/images/raghav_profile.jpg`. The image is imported by `src/assets/avatar.ts`.

### Design system
The default visual direction is premium **Obsidian + Burgundy/Crimson**, with **Sora** for display headings and **Manrope** for body/UI text.

# eBird Region Redirect Chrome Extension

Automatically redirect eBird region/hotspot pages from the default Overview page to the all-years species checklist version of the page.

For example:
- `https://ebird.org/region/US-CA` → `https://ebird.org/region/US-CA/bird-list`
- `https://ebird.org/hotspot/L851036` → `https://ebird.org/hotspot/L851036/bird-list`

## About

Currently, the eBird Overview page for regions/hotspots highlights only species eBirded in the current month. It also summarizes recent checklists and media.

Instead, this extension redirects to show the information that used to be the default: a list of all species eBirded in all years, sorted by most recently observed.

If you want to stop redirecting temporarily, you can do so by pinning the extension in your browser toolbar and toggling redirects on or off.

## Developer installation

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The extension should now be installed and active
6. If you modify the extension, reload it by clicking the refresh icon in `chrome://extensions/`

## Generative AI statement

This application was created by pair-coding with Cursor.

// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  // Only process main frame navigation
  if (details.frameId !== 0) return;

  // Check if redirects are enabled
  chrome.storage.sync.get(['redirectEnabled'], (result) => {
    // Default to enabled if not set
    if (result.redirectEnabled === false) return;

    const url = new URL(details.url);
    
    // Check if the URL matches our patterns
    if (url.hostname === 'ebird.org' && 
        (url.pathname.startsWith('/region/') || url.pathname.startsWith('/hotspot/')) &&
        !url.pathname.endsWith('/bird-list')) {
      
      // Get the path segments
      const segments = url.pathname.split('/').filter(s => s);
      
      // Only redirect if there are exactly 2 segments (e.g., ['hotspot', 'L190706'])
      // or 3 segments where the last one is empty (e.g., ['hotspot', 'L190706', ''])
      if (segments.length === 2 || (segments.length === 3 && segments[2] === '')) {
        // Remove trailing slash if present from the pathname
        const cleanPath = url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname;
        
        // Construct new URL with /bird-list and preserve query parameters
        url.pathname = cleanPath + '/bird-list';
        const newUrl = url.toString();
        
        // Redirect to the new URL
        chrome.tabs.update(details.tabId, { url: newUrl });
      }
    }
  });
}); 
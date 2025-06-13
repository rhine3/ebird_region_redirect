// Initialize the toggle state when popup opens
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('redirectToggle');
  
  // Load the current state
  chrome.storage.sync.get(['redirectEnabled'], (result) => {
    // Default to enabled if not set
    toggle.checked = result.redirectEnabled !== false;
  });
  
  // Save state when toggle changes
  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ redirectEnabled: toggle.checked });
  });
}); 
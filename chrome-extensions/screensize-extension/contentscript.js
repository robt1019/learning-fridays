'use strict';

window.addEventListener('resize', function() {
  chrome.runtime.sendMessage('resize')
});

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// Saves options to chrome.storage
const saveOptions = () => {
  const color = document.getElementById('color').value;
  const likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set(
    { favoriteColor: color, likesColor: likesColor },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { favoriteColor: 'red', likesColor: true },
    (items) => {
      document.getElementById('color').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUE4QztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0NBQXdDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhidXN0ZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dGhidXN0ZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0aGJ1c3RlcnMvLi9zcmMvb3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU2F2ZXMgb3B0aW9ucyB0byBjaHJvbWUuc3RvcmFnZVxyXG5jb25zdCBzYXZlT3B0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcicpLnZhbHVlO1xyXG4gIGNvbnN0IGxpa2VzQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlrZScpLmNoZWNrZWQ7XHJcblxyXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KFxyXG4gICAgeyBmYXZvcml0ZUNvbG9yOiBjb2xvciwgbGlrZXNDb2xvcjogbGlrZXNDb2xvciB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAvLyBVcGRhdGUgc3RhdHVzIHRvIGxldCB1c2VyIGtub3cgb3B0aW9ucyB3ZXJlIHNhdmVkLlxyXG4gICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XHJcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9ICdPcHRpb25zIHNhdmVkLic7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB9LCA3NTApO1xyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBSZXN0b3JlcyBzZWxlY3QgYm94IGFuZCBjaGVja2JveCBzdGF0ZSB1c2luZyB0aGUgcHJlZmVyZW5jZXNcclxuLy8gc3RvcmVkIGluIGNocm9tZS5zdG9yYWdlLlxyXG5jb25zdCByZXN0b3JlT3B0aW9ucyA9ICgpID0+IHtcclxuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcclxuICAgIHsgZmF2b3JpdGVDb2xvcjogJ3JlZCcsIGxpa2VzQ29sb3I6IHRydWUgfSxcclxuICAgIChpdGVtcykgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3InKS52YWx1ZSA9IGl0ZW1zLmZhdm9yaXRlQ29sb3I7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWtlJykuY2hlY2tlZCA9IGl0ZW1zLmxpa2VzQ29sb3I7XHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZXN0b3JlT3B0aW9ucyk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlT3B0aW9ucyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
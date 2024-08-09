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
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
const mediumHighlighter = document.createElement("medium-highlighter");
document.body.appendChild(mediumHighlighter);

const setMarkerPosition = (markerPosition) =>
  mediumHighlighter.setAttribute("markerPosition", JSON.stringify(markerPosition));

const getSelectedText = () => window.getSelection().toString();

document.addEventListener("click", () => {
  const selectedText = getSelectedText();
  if (selectedText.length > 0) {
    setMarkerPosition(getMarkerPosition());
    showPopup(getMarkerPosition(), selectedText);
  }
});

document.addEventListener("selectionchange", () => {
  if (getSelectedText().length === 0) {
    setMarkerPosition({ display: "none" });
    hidePopup();
  }
});

function getMarkerPosition() {
  const rangeBounds = window.getSelection().getRangeAt(0).getBoundingClientRect();
  return {
    left: rangeBounds.left + rangeBounds.width / 2 - 20, //fix the -20 to value width of the box / 2
    top: rangeBounds.top - 30,
    display: "flex",
  };
}

function showPopup(position, selectedText) {
  let popup = document.getElementById("textPopup");

  if (!popup) {
    popup = document.createElement("div");
    popup.id = "textPopup";
    popup.style.position = "absolute";
    popup.style.backgroundColor = "red";
    popup.style.border = "1px solid #ccc";
    popup.style.padding = "10px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    popup.style.borderRadius = "4px";
    popup.innerHTML = `<p>${selectedText}</p>`;
    document.body.appendChild(popup);
  }

  popup.style.left = `${position.left}px`;
  popup.style.top = `${position.top}px`;
  popup.style.display = "block";

}

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById("textPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRoYnVzdGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXRoYnVzdGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215dGhidXN0ZXJzLy4vc3JjL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IG1lZGl1bUhpZ2hsaWdodGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1lZGl1bS1oaWdobGlnaHRlclwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZWRpdW1IaWdobGlnaHRlcik7XHJcblxyXG5jb25zdCBzZXRNYXJrZXJQb3NpdGlvbiA9IChtYXJrZXJQb3NpdGlvbikgPT5cclxuICBtZWRpdW1IaWdobGlnaHRlci5zZXRBdHRyaWJ1dGUoXCJtYXJrZXJQb3NpdGlvblwiLCBKU09OLnN0cmluZ2lmeShtYXJrZXJQb3NpdGlvbikpO1xyXG5cclxuY29uc3QgZ2V0U2VsZWN0ZWRUZXh0ID0gKCkgPT4gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVGV4dCA9IGdldFNlbGVjdGVkVGV4dCgpO1xyXG4gIGlmIChzZWxlY3RlZFRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgc2V0TWFya2VyUG9zaXRpb24oZ2V0TWFya2VyUG9zaXRpb24oKSk7XHJcbiAgICBzaG93UG9wdXAoZ2V0TWFya2VyUG9zaXRpb24oKSwgc2VsZWN0ZWRUZXh0KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgaWYgKGdldFNlbGVjdGVkVGV4dCgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgc2V0TWFya2VyUG9zaXRpb24oeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcclxuICAgIGhpZGVQb3B1cCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRNYXJrZXJQb3NpdGlvbigpIHtcclxuICBjb25zdCByYW5nZUJvdW5kcyA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0OiByYW5nZUJvdW5kcy5sZWZ0ICsgcmFuZ2VCb3VuZHMud2lkdGggLyAyIC0gMjAsIC8vZml4IHRoZSAtMjAgdG8gdmFsdWUgd2lkdGggb2YgdGhlIGJveCAvIDJcclxuICAgIHRvcDogcmFuZ2VCb3VuZHMudG9wIC0gMzAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UG9wdXAocG9zaXRpb24sIHNlbGVjdGVkVGV4dCkge1xyXG4gIGxldCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFBvcHVwXCIpO1xyXG5cclxuICBpZiAoIXBvcHVwKSB7XHJcbiAgICBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwb3B1cC5pZCA9IFwidGV4dFBvcHVwXCI7XHJcbiAgICBwb3B1cC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICBwb3B1cC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjY2NjXCI7XHJcbiAgICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XHJcbiAgICBwb3B1cC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiO1xyXG4gICAgcG9wdXAuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI0cHhcIjtcclxuICAgIHBvcHVwLmlubmVySFRNTCA9IGA8cD4ke3NlbGVjdGVkVGV4dH08L3A+YDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gIH1cclxuXHJcbiAgcG9wdXAuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uLmxlZnR9cHhgO1xyXG4gIHBvcHVwLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLnRvcH1weGA7XHJcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGhpZGUgdGhlIHBvcHVwXHJcbmZ1bmN0aW9uIGhpZGVQb3B1cCgpIHtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFBvcHVwXCIpO1xyXG4gIGlmIChwb3B1cCkge1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
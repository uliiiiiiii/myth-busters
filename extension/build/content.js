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
const mediumHighlighter = document.createElement("mediumHighlighter");
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
  console.log(selectedText);
  chrome.runtime.sendMessage(
    {
      action: "classify",
      text: selectedText,
    },
    (response) => {
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
        document.body.appendChild(popup);
      }

      popup.innerHTML = `<p>${JSON.stringify(response)}</p>`;
      popup.style.left = `${position.left}px`;
      popup.style.top = `${position.top}px`;
      popup.style.display = "block";
    }
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZELDRCQUE0QixjQUFjO0FBQzFDLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhidXN0ZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dGhidXN0ZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0aGJ1c3RlcnMvLi9zcmMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbWVkaXVtSGlnaGxpZ2h0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVkaXVtSGlnaGxpZ2h0ZXJcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVkaXVtSGlnaGxpZ2h0ZXIpO1xyXG5cclxuY29uc3Qgc2V0TWFya2VyUG9zaXRpb24gPSAobWFya2VyUG9zaXRpb24pID0+XHJcbiAgbWVkaXVtSGlnaGxpZ2h0ZXIuc2V0QXR0cmlidXRlKFwibWFya2VyUG9zaXRpb25cIiwgSlNPTi5zdHJpbmdpZnkobWFya2VyUG9zaXRpb24pKTtcclxuXHJcbmNvbnN0IGdldFNlbGVjdGVkVGV4dCA9ICgpID0+IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFRleHQgPSBnZXRTZWxlY3RlZFRleHQoKTtcclxuICBpZiAoc2VsZWN0ZWRUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgIHNldE1hcmtlclBvc2l0aW9uKGdldE1hcmtlclBvc2l0aW9uKCkpO1xyXG4gICAgc2hvd1BvcHVwKGdldE1hcmtlclBvc2l0aW9uKCksIHNlbGVjdGVkVGV4dCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIGlmIChnZXRTZWxlY3RlZFRleHQoKS5sZW5ndGggPT09IDApIHtcclxuICAgIHNldE1hcmtlclBvc2l0aW9uKHsgZGlzcGxheTogXCJub25lXCIgfSk7XHJcbiAgICBoaWRlUG9wdXAoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWFya2VyUG9zaXRpb24oKSB7XHJcbiAgY29uc3QgcmFuZ2VCb3VuZHMgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICByZXR1cm4ge1xyXG4gICAgbGVmdDogcmFuZ2VCb3VuZHMubGVmdCArIHJhbmdlQm91bmRzLndpZHRoIC8gMiAtIDIwLCAvL2ZpeCB0aGUgLTIwIHRvIHZhbHVlIHdpZHRoIG9mIHRoZSBib3ggLyAyXHJcbiAgICB0b3A6IHJhbmdlQm91bmRzLnRvcCAtIDMwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1BvcHVwKHBvc2l0aW9uLCBzZWxlY3RlZFRleHQpIHtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZFRleHQpO1xyXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxyXG4gICAge1xyXG4gICAgICBhY3Rpb246IFwiY2xhc3NpZnlcIixcclxuICAgICAgdGV4dDogc2VsZWN0ZWRUZXh0LFxyXG4gICAgfSxcclxuICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRQb3B1cFwiKTtcclxuXHJcbiAgICAgIGlmICghcG9wdXApIHtcclxuICAgICAgICBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcG9wdXAuaWQgPSBcInRleHRQb3B1cFwiO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgcG9wdXAuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2NjY1wiO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcclxuICAgICAgICBwb3B1cC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNHB4XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBvcHVwLmlubmVySFRNTCA9IGA8cD4ke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX08L3A+YDtcclxuICAgICAgcG9wdXAuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uLmxlZnR9cHhgO1xyXG4gICAgICBwb3B1cC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi50b3B9cHhgO1xyXG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGhpZGUgdGhlIHBvcHVwXHJcbmZ1bmN0aW9uIGhpZGVQb3B1cCgpIHtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFBvcHVwXCIpO1xyXG4gIGlmIChwb3B1cCkge1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
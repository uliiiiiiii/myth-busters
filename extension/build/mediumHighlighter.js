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
/*!**********************************!*\
  !*** ./src/mediumHighlighter.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
const highlightColor = "rgb(255, 192, 0)";

const template = `
  <template id="highlightTemplate">
    <span class="highlight" style="background-color: ${highlightColor}; display: inline"></span>
  </template>

`;

const styled = ({ display = "none", left = 0, top = 0 }) => `
  #mediumHighlighter {
    align-items: center;
    background-color: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: ${display};
    justify-content: center;
    left: ${left}px;
    padding: 5px 10px;
    position: fixed;
    top: ${top}px;
    width: 40px;
    z-index: 9999;
  }
  .text-marker {
    fill: white;
  }
  .text-marker:hover {
    fill: ${highlightColor};
  }
`;

class MediumHighlighter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get markerPosition() {
    return JSON.parse(this.getAttribute("markerPosition") || "{}");
  }

  get styleElement() {
    return this.shadowRoot.querySelector("style");
  }

  get highlightTemplate() {
    return this.shadowRoot.getElementById("highlightTemplate");
  }

  static get observedAttributes() {
    return ["markerPosition"];
  }

  render() {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styled({});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.innerHTML += template;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "markerPosition") {
      this.styleElement.textContent = styled(this.markerPosition);
    }
  }

  highlightSelection() {
    var userSelection = window.getSelection();
    console.log(userSelection);
    for (let i = 0; i < userSelection.rangeCount; i++) {
      this.highlightRange(userSelection.getRangeAt(i));
    }
    window.getSelection().empty();
  }

  highlightRange(range) {
    const clone = this.highlightTemplate.cloneNode(true).content.firstElementChild;
    clone.appendChild(range.extractContents());
    range.insertNode(clone);
  }
}

window.customElements.define("mediumHighlighter", MediumHighlighter);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtSGlnaGxpZ2h0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsaUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhidXN0ZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dGhidXN0ZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0aGJ1c3RlcnMvLi9zcmMvbWVkaXVtSGlnaGxpZ2h0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGhpZ2hsaWdodENvbG9yID0gXCJyZ2IoMjU1LCAxOTIsIDApXCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGBcclxuICA8dGVtcGxhdGUgaWQ9XCJoaWdobGlnaHRUZW1wbGF0ZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7aGlnaGxpZ2h0Q29sb3J9OyBkaXNwbGF5OiBpbmxpbmVcIj48L3NwYW4+XHJcbiAgPC90ZW1wbGF0ZT5cclxuXHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZWQgPSAoeyBkaXNwbGF5ID0gXCJub25lXCIsIGxlZnQgPSAwLCB0b3AgPSAwIH0pID0+IGBcclxuICAjbWVkaXVtSGlnaGxpZ2h0ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogJHtkaXNwbGF5fTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGVmdDogJHtsZWZ0fXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6ICR7dG9wfXB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gIH1cclxuICAudGV4dC1tYXJrZXIge1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbiAgfVxyXG4gIC50ZXh0LW1hcmtlcjpob3ZlciB7XHJcbiAgICBmaWxsOiAke2hpZ2hsaWdodENvbG9yfTtcclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBNZWRpdW1IaWdobGlnaHRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hcmtlclBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRBdHRyaWJ1dGUoXCJtYXJrZXJQb3NpdGlvblwiKSB8fCBcInt9XCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0eWxlRWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZ2hsaWdodFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImhpZ2hsaWdodFRlbXBsYXRlXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gW1wibWFya2VyUG9zaXRpb25cIl07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlZCh7fSk7XHJcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgdGhpcy5zaGFkb3dSb290LmlubmVySFRNTCArPSB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuICAgIGlmIChuYW1lID09PSBcIm1hcmtlclBvc2l0aW9uXCIpIHtcclxuICAgICAgdGhpcy5zdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzdHlsZWQodGhpcy5tYXJrZXJQb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRTZWxlY3Rpb24oKSB7XHJcbiAgICB2YXIgdXNlclNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJTZWxlY3Rpb24pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyU2VsZWN0aW9uLnJhbmdlQ291bnQ7IGkrKykge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFJhbmdlKHVzZXJTZWxlY3Rpb24uZ2V0UmFuZ2VBdChpKSk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodFJhbmdlKHJhbmdlKSB7XHJcbiAgICBjb25zdCBjbG9uZSA9IHRoaXMuaGlnaGxpZ2h0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjbG9uZS5hcHBlbmRDaGlsZChyYW5nZS5leHRyYWN0Q29udGVudHMoKSk7XHJcbiAgICByYW5nZS5pbnNlcnROb2RlKGNsb25lKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtZWRpdW1IaWdobGlnaHRlclwiLCBNZWRpdW1IaWdobGlnaHRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
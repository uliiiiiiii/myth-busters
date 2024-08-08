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

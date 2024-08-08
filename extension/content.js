// const mediumHighlighter = document.createElement("medium-highlighter");
// document.body.appendChild(mediumHighlighter);

// const setMarkerPosition = (markerPosition) =>
//   mediumHighlighter.setAttribute("markerPosition", JSON.stringify(markerPosition));

// const getSelectedText = () => window.getSelection().toString();

// document.addEventListener("click", () => {
//   if (getSelectedText().length > 0) {
//     setMarkerPosition(getMarkerPosition());
//   }
// });

// document.addEventListener("selectionchange", () => {
//   if (getSelectedText().length === 0) {
//     setMarkerPosition({ display: "none" });
//     console.log(getSelectedText());
//   }
// });

// function getMarkerPosition() {
//   const rangeBounds = window.getSelection().getRangeAt(0).getBoundingClientRect();
//   return {
//     // Substract width of marker button -> 40px / 2 = 20
//     left: rangeBounds.left + rangeBounds.width / 2 - 20,
//     top: rangeBounds.top - 30,
//     display: "flex",
//   };
// }


const mediumHighlighter = document.createElement("medium-highlighter");
document.body.appendChild(mediumHighlighter);

const setMarkerPosition = (markerPosition) =>
  mediumHighlighter.setAttribute("markerPosition", JSON.stringify(markerPosition));

const getSelectedText = () => window.getSelection().toString();

document.addEventListener("click", () => {
  if (getSelectedText().length > 0) {
    //setMarkerPosition(getMarkerPosition());
    showPopup(getMarkerPosition());
  }
});

document.addEventListener("selectionchange", () => {
  if (getSelectedText().length === 0) {
    //rsetMarkerPosition({ display: "none" });
    hidePopup();
  }
});

function getMarkerPosition() {
  const rangeBounds = window.getSelection().getRangeAt(0).getBoundingClientRect();
  return {
    // Subtract width of marker button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 20,
    top: rangeBounds.top - 30,
    display: "flex",
  };
}

// Function to create and show the popup
function showPopup(position) {
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
    popup.innerHTML = "<p>Highlighted text action</p>";
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



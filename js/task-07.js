const inputSizeSlider = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputSizeSlider.addEventListener("input", sliding);

function sliding(event) {
  const sliderValue = event.currentTarget.value;

  spanRef.style.fontSize = sliderValue + "px";
}

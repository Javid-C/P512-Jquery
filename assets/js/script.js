let colors = document.querySelectorAll(".item");
let dropZone = document.querySelector(".dropZone");

colors.forEach((color) => {
  let red = color.getAttribute("data-red");
  let green = color.getAttribute("data-green");
  let blue = color.getAttribute("data-blue");

  let rgbColor = { red, green, blue };
  color.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", JSON.stringify(rgbColor));
  });
});

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropZone.addEventListener("drop", function (e) {
  let rgbColor = JSON.parse(e.dataTransfer.getData("text"));
  console.log(rgbColor);

  //   let red = rgbColor.red;
  //   let green = rgbColor.green;
  //   let blue = rgbColor.blue;

  let { red: qirmizi, green: yasil, blue: goy } = rgbColor;

  console.log(qirmizi, yasil, goy);

  dropZone.style.backgroundColor = `rgb(${qirmizi},${yasil},${goy})`;
});

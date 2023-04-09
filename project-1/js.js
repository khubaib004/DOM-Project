  // step 1 :: create onload habdeler
window.onload = () => {
   main();
};
function main() {
   const root = document.getElementById("root");
   const btn = document.getElementById("change-btn");

   btn.addEventListener("click", function () {
      const bgColor = randomColorChange();
      root.style.backgroundColor = bgColor;
   });
}

// step 2 :: random color genaretor

function randomColorChange() {
   const red = Math.floor(Math.random() * 255);
   const green = Math.floor(Math.random() * 255);
   const blue = Math.floor(Math.random() * 255);

   return `rgb(${red}, ${green}, ${blue})`;
}

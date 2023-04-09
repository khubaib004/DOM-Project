// step 1 :: create onload habdeler

// global
let div = null;

window.onload = () => {
   main();
};
function main() {
   const root = document.getElementById("root");
   const changeBtn = document.getElementById("btn");
   const output = document.getElementById("output");
   const copyBtn = document.getElementById("copy-btn");

   changeBtn.addEventListener("click", function () {
      const bgcolor = hexcode();
      root.style.backgroundColor = bgcolor;
      output.value = bgcolor;
   });

   copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(output.value);
      if (div !== null) {
         div.remove();
         div = null;
      }
      genarateToastMessage(`${output.value} copied`);
   });
}

// step 2 :: random color genaretor fundtion
function hexcode() {
   const red = Math.floor(Math.random() * 255);
   const green = Math.floor(Math.random() * 255);
   const blue = Math.floor(Math.random() * 255);

   return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function genarateToastMessage(mgs) {
   div = document.createElement("div");
   div.innerText = mgs;
   div.className = "toast-message toast-message-slide-in";

   div.addEventListener("click", function () {
      div.classList.remove("toast-message-slide-in");
      div.classList.add("toast-message-slide-out");

      div.addEventListener("animationend", function () {
         div.remove();
         div = null;
      });
   });

   document.body.appendChild(div);
}

// step 3 :: colect all nessary reference

// step 4 :: handle the change color buttoon click event

// step 5 :: handle copy button click event

// step 6 :: activate toast message

// step 7 :: create dymanic toast message

// step 8 :: remove toast message


function switchScreen(screen) {
         document.querySelector("#top").classList.add("invisible");
         document.querySelector("#abo").classList.add("invisible");
         document.querySelector("#exp").classList.add("invisible");
         document.querySelector("#ski").classList.add("invisible");
         document.querySelector("#pro").classList.add("invisible");
         document.querySelector("#con").classList.add("invisible");

        switch(screen)
        {
           case 1: document.querySelector("#top").classList.remove("invisible"); break;

           case 2: document.querySelector("#abo").classList.remove("invisible"); break;
            
           case 3: document.querySelector("#exp").classList.remove("invisible"); break;

           case 4: document.querySelector("#ski").classList.remove("invisible"); break;

           case 5: document.querySelector("#pro").classList.remove("invisible"); break;

           case 6: document.querySelector("#con").classList.remove("invisible"); break;
        }
        
}


document.querySelector(".btnHome").onclick = function() {switchScreen(1)};
document.querySelector(".btnAbo").onclick = function() {switchScreen(2)};
document.querySelector(".btnExp").onclick = function() {switchScreen(3)};
document.querySelector(".btnSki").onclick = function() {switchScreen(4)};
document.querySelector(".btnPro").onclick = function() {switchScreen(5)};
document.querySelector(".btnCon").onclick = function() {switchScreen(6)};
document.querySelector(".title-btn").onclick = function() {switchScreen(6)};
function switchScreen(screen) {
    
         $("#top").addClass("invisible");
         $("#abo").addClass("invisible");
         $("#exp").addClass("invisible");
         $("#ski").addClass("invisible");
         $("#pro").addClass("invisible");
         $("#con").addClass("invisible");

        switch(screen)
        {
           case 1: $("#top").removeClass("invisible"); break;

           case 2: $("#abo").removeClass("invisible"); break;
            
           case 3: $("#exp").removeClass("invisible"); break;

           case 4: $("#ski").removeClass("invisible"); break;

           case 5: $("#pro").removeClass("invisible"); break;

           case 6: $("#con").removeClass("invisible"); break;
        }
        
}


$(".btnHome").click(function() {switchScreen(1)});
$(".btnAbo").click(function() {switchScreen(2)});
$(".btnExp").click(function() {switchScreen(3)});
$(".btnSki").click(function() {switchScreen(4)});
$(".btnPro").click(function() {switchScreen(5)});
$(".btnCon").click(function() {switchScreen(6)});
$(".title-btn").click(function() {switchScreen(6)});
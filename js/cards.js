//FRIDGE COLOR
let white = "White";
let wetPavement = "Wet pavement";
let silver = "Silver";
let ruby = "Ruby"

//FRIDGE MODEL
let xm4608 = "4608";
let xm4609 = "4609";
let xm4610 = "4610";
let xm4611 = "4611";
let xm4613 = "4613";
let xm4613XX8 = "4313-XX8";
let xm4624 = "4624";
let xm4624XX8 = "4624-XX8";

//Thickness metal
let thickness05 = "0,5";

//Panel Front Fridge and Freezer Weight
let width725 = "725";

//Panel Front Fridge Length
let length753 = "753,5";
let length1101 = "1101,5"

//Panel Length Front Freezer
let length625 = "625";

//Panel Weight Side (left/right)
let width620 = "620";

//Panel Length Side (left/right)
let length1419 = "1419";



function Card () {
   //FRIDGE COLOR
   const fridgeWhite = document.querySelectorAll("#gradientWhite");
   for (let i=0; i < fridgeWhite.length; i++) {
      fridgeWhite[i].innerHTML = white;
   }

   const fridgeSilver = document.querySelectorAll("#gradientSilver");
   for (let i=0; i < fridgeSilver.length; i++) {
      fridgeSilver[i].innerHTML = silver;
   }

   const fridgeWetPavement = document.querySelectorAll("#gradientWetPavement");
   for (let i=0; i < fridgeWetPavement.length; i++) {
      fridgeWetPavement[i].innerHTML = wetPavement;
   }

   const fridgeRuby = document.querySelectorAll("#gradientRuby");
   for (let i=0; i < fridgeRuby.length; i++) {
      fridgeRuby[i].innerHTML = ruby;
   }

   //FRIDGE MODEL
   const fridgeModel4608 = document.querySelectorAll("#xm4608");
   for (let i=0; i < fridgeModel4608.length; i++) {
   fridgeModel4608[i].innerHTML = xm4608;
   }

   const fridgeModel4609 = document.querySelectorAll("#xm4609");
   for (let i=0; i < fridgeModel4609.length; i++) {
   fridgeModel4609[i].innerHTML = xm4609;
   }

   const fridgeModel4610 = document.querySelectorAll("#xm4610");
   for (let i=0; i < fridgeModel4610.length; i++) {
   fridgeModel4610[i].innerHTML = xm4610;
   }

   const fridgeModel4611 = document.querySelectorAll("#xm4611");
   for (let i=0; i < fridgeModel4611.length; i++) {
   fridgeModel4611[i].innerHTML = xm4611;
   }

   const fridgeModel4613 = document.querySelectorAll("#xm4613");
   for (let i=0; i < fridgeModel4613.length; i++) {
   fridgeModel4613[i].innerHTML = xm4613;
   }

   const fridgeModel4613XX8 = document.querySelectorAll("#xm4613XX8");
   for (let i=0; i < fridgeModel4613XX8.length; i++) {
   fridgeModel4613XX8[i].innerHTML = xm4613XX8;
   }

   const fridgeModel4624 = document.querySelectorAll("#xm4624");
   for (let i=0; i < fridgeModel4624.length; i++) {
   fridgeModel4624[i].innerHTML = xm4624;
   }

   const fridgeModel4624XX8 = document.querySelectorAll("#xm4624XX8");
   for (let i=0; i < fridgeModel4624XX8.length; i++) {
   fridgeModel4624XX8[i].innerHTML = xm4624XX8;
   }

   
   //PANEL FRONT FRIDGE
   // 753,5 х 725 х 0,5 мм
   const fridge4608fridge = document.querySelectorAll("#pos01");
   for (let i=0; i < fridge4608fridge.length; i++) {
   fridge4608fridge[i].innerHTML = length753 + " x " + width725 + " x " + thickness05;
   }

      //PANEL FRONT FRIDGE
   // 1101,5 х 725 х 0,5 мм
   const fridge4624fridge = document.querySelectorAll("#pos04");
   for (let i=0; i < fridge4624fridge.length; i++) {
   fridge4624fridge[i].innerHTML = length1101 + " x " + width725 + " x " + thickness05;
   }

   //PANEL FRONT FREEZER
   // 625 х 725 х 0,5 мм
   const fridge4608freezer = document.querySelectorAll("#pos02");
   for (let i=0; i < fridge4608freezer.length; i++) {
   fridge4608freezer[i].innerHTML = length625 + " x " + width725 + " x " + thickness05;
   }
   

   //PANEL SIDE (left/right)
   // 1419 х 620 х 0,5 мм
   const fridge4608panelside = document.querySelectorAll("#pos03");
   for (let i=0; i < fridge4608panelside.length; i++) {
   fridge4608panelside[i].innerHTML = length1419 + " x " + width620 + " x " + thickness05;
   }
}

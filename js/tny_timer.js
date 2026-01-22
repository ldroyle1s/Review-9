"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Louis Royle
   Date:   

*/

showClock();
//setInterval("showClock()", 1000);
function showClock() {
   // Stores the current date and time
   var thisDay = new Date("May 19, 2018 9:31:27");
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   // Displays the current date and time
   document.getElementById("currentTime").innerHTML ="<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";

   // Calls tje nextJuly4 function & sets the time to 9PM
   var j4Date = nextJuly4(); 
   j4Date.setHours(21);


   // Calculates the time until July 4th 
   var days = (j4Date - thisDay)/(1000*60*60*24);
   var hrs =  ((days - Math.floor(days))*24);
   var mins =  (hrs - Math.floor(hrs))*60;
   var secs =  (mins - Math.floor(mins))*60;


   // Displays the time left until July 4th
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);

}

function nextJuly4(currentDate) {
   //var cYear = currentDate.getFullYear();  //! Causing errors
   var jDate = new Date("July 4, 2018");
   //jDate.setFullYear(cYear); //! Causing errors
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1); //! Wont work without above lines that cause errors
   return jDate;
}
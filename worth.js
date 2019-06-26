// ==UserScript==
// @name         Worth!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Can I retire yet?
// @author       You
// @match        https://www.google.com/search?q=<ticker symbol>
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //////////////////////////////////////////////////
    // CHANGE THESE TO SUIT YOUR SITUATION:
    var vested = 0;
    var unvested = 0;
    var price = 0.00;
    //////////////////////////////////////////////////

    var spans = document.getElementsByTagName("span");
    price = spans[32].innerHTML; // MAGIC NUMBER THAT OFTEN NEEDS UPDATING
    //console.log("JCP: " + price);

    price = price.replace(/\,/g, '');

    var tables = document.getElementsByTagName("table");
    var myTable = tables[1];
    var numRows = myTable.rows.length;
    var newRow = myTable.insertRow(numRows);
    var labelCell = newRow.insertCell(0);
    var valueCell = newRow.insertCell(1);
    valueCell.style.opacity = "0.75"
    valueCell.style.textAlign = "left";
    labelCell.innerHTML = "Vested ";
    var vestedVal = (price * vested).toFixed(2);
    valueCell.innerHTML = vestedVal;

    newRow = myTable.insertRow(numRows+1);
    labelCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    valueCell.style.opacity = "0.75";
    valueCell.style.textAlign = "left";
    labelCell.innerHTML = "Unvested ";
    var unvestedVal = (price * unvested).toFixed(2);
    valueCell.innerHTML = unvestedVal;

    newRow = myTable.insertRow(numRows+2);
    labelCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    valueCell.style.opacity = "0.75";
    valueCell.style.textAlign = "left";
    labelCell.innerHTML = "Total ";
    var totalVal = (Number(vestedVal) + Number(unvestedVal)).toFixed(2);
    valueCell.innerHTML = totalVal;
})();

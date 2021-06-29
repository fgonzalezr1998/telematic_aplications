'use strict'

// Global variable:

let move =  {
  time: new Date(),
  nSides: null,
  result: 0,
}

function showButton(radioClass) {
  let butText;
  switch (radioClass) {
    case "flexRadioDefault1":
      move.nSides = 2;
      butText = "Lanzar Una Moneda";
      break;
    case "flexRadioDefault2":
      move.nSides = 6;
      butText = "Lanzar dado de 6 caras";
      break;
    case "flexRadioDefault3":
      move.nSides = 16;
      butText = "Lanzar dado de 16 caras";
      break;
    default:
      move.nSides = 20;
      butText = "Lanzar dado de 20 caras";
  }
  $("#but1").text(butText);
  $("#but1").show();
}

function radioListener() {
  let radioValue = $("input[name='flexRadioDefault']:checked").val();
  if (radioValue) {
    showButton(this.id);
  }
}

function butListener() {
  console.log("jajaj")
  let res;
  if (move.nSides == null)
    return;
  move.res = Math.floor(Math.random() * move.nSides) + 1
  $("#result").text(move.res);

  move.time = new Date();

  let row = "<tr><td>" + move.time + "</td><td>";
  row = row + move.nSides + "</td><td>";
  row = row + move.res + "</td></tr>";

  console.log(row);

  $("table tbody").append(row);
}

function butTabListener() {
  $("table tbody tr").remove();
}

function main() {
  // Hide the button by default
  $("#but1").hide();

  // Set the but1 tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Set the Radio Buttons default status
  $("input[type=radio]").prop("checked", false);
  // Set the Radio Buttons Handler
  $("input[type=radio]").click(radioListener);

  // Set the Button Handler
  $("#but1").click(butListener);

  // Set the Button Handler
  $("#but-table").click(butTabListener);
}

$(document).ready(main);

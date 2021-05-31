
// Global variable:

let nSides = null;

function showButton(radioClass) {
  let butText;
  switch (radioClass) {
    case "flexRadioDefault1":
      nSides = 2;
      butText = "Lanzar Una Moneda";
      break;
    case "flexRadioDefault2":
      nSides = 6;
      butText = "Lanzar dado de 6 caras";
      break;
    case "flexRadioDefault3":
      nSides = 16;
      butText = "Lanzar dado de 16 caras";
      break;
    default:
      nSides = 20;
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
  if (nSides == null)
    return;
  $("#result").text(Math.floor(Math.random() * nSides) + 1);
}

function main() {
  // Hide the button by default
  $("#but1").hide();

  // Set the Radio Buttons default status
  $("input[type=radio]").prop("checked", false);
  // Set the Radio Buttons Handler
  $("input[type=radio]").click(radioListener);

  // Set the Button Handler
  $("#but1").click(butListener);
}

$(document).ready(main);

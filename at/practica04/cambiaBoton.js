function main() {
  let butState = {
    timesPressed: 0,
  };

  $("#toggle").click(function() {
    let value = butState.timesPressed;
    if (value % 2 == 0) {
      $("#toggle").text("Ver foto");
      $("#linux-img").hide();
    } else {
      $("#toggle").text("Ocultar foto");
      $("#linux-img").show();
    }
    butState.timesPressed++;
  });
}

$(document).ready(main);

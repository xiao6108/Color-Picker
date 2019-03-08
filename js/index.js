$(document).ready(function(){
	
	$("#redui").slider();
  $("#greenui").slider();
  $("#blueui").slider();
	$("#redui, #greenui, #blueui").slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 0,
      slide: refreshSwatch,
    });
	
});
function refreshSwatch() {
      var red = $("#redui").slider("value"),
        green = $("#greenui").slider("value"),
        blue = $("#blueui").slider("value"),
        hex = rgbhex(red, green, blue );
			
			$("#rui").text("R("+red+")");
			$("#gui").text("G("+green+")");
			$("#bui").text("B("+blue+")");
			$("#hexui").text(hex);
      $("body").css( "background-color", "#" + hex );
}

function rgbhex(r,g,b){

	var redHex = ("0" + parseInt(r,10).toString(16)).slice(-2);
	var greenHex = ("0" + parseInt(g,10).toString(16)).slice(-2);
	var blueHex = ("0" + parseInt(b,10).toString(16)).slice(-2);

	return "#"+redHex+""+greenHex+""+blueHex;
}
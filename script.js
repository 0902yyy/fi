$(document).ready(function() {
  $("#flipbook").turn({
    width: "100%",
    height: "100%",
    autoCenter: true,
    responsive: true
  });

  $(window).resize(function() {
    $("#flipbook").turn("size", $("#flipbook").width(), $("#flipbook").height());
  });
});

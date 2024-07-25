$(document).ready(function() {
    $("#Rio").click(function() {
      let idBoton = $("#Rio").attr("id");
      $("#detalles" + idBoton).toggle();
    });

    $("#Baires").click(function() {
      let idBoton = $("#Baires").attr("id");
      $("#detalles" + idBoton).toggle();
    });

    $("#MachuPicchu").click(function() {
      let idBoton = $("#MachuPicchu").attr("id");
      $("#detalles" + idBoton).toggle();
    });

    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
  });
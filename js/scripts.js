$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var emailInput = $("input#email").val();
    var phoneInput = $("input#phone").val();


    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".email").text(emailInput);
    $(".phone").text(phoneInput);

    $("#receipt").show();

    event.preventDefault();

  });
});

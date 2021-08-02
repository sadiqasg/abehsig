$(function () {
  const url = "https://abehsignature-email.herokuapp.com/email";

  let contactForm = document.getElementById('contact-form');

  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    $("#sendMsg").val('sending...');

    let data = {
      name: $("#username").val(),
      email: $("#email").val(),
      message: $("#message").val()
    }

    if (!data.email || !data.message) {
      return alert("You can't submit an empty form!");
    }

    setTimeout(() => {
      $("#sendMsg").val('Send message');
      alert("Message Sent");
      $("#contact-form").trigger("reset");
    }, 3000);

    $.ajax({
      type: "POST",
      url: `${url}`,
      dataType: "json",
      data : data,
      success: result => {
        location.replace('./success.html');
      },
      error: err => alert("error", err)
    });
  })

});
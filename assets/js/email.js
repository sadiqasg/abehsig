$(function () {
  const url = "https://abehsignature-email.herokuapp.com/email";

  let contactForm = document.getElementById('contact-form');

  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    let data = {
      name: $("#username").val(),
      email: $("#email").val(),
      message: $("#message").val()
    }

    if (!data.email || !data.message) {
      return alert("You can't submit an empty form!");
    }

    $.ajax({
      type: "GET",
      url: `${url}`,
      dataType: "json",
      data : JSON.stringify(data),
      success: result => {
        console.log('Email sent!');
      },
      error: err => console.log("error", err)
    });
  })

});
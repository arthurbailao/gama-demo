(function(){

  function close() {
    $('.md-show .md-close').click();
  }

  function clean() {
    $('.md-show input[name="name"]').val(''),
    $('.md-show input[name="email"]').val(''),
    $('.md-show input[name="phone"]').val('');
  }

  $('.btn-modal').click(function() {
    var name = $('.md-show input[name="name"]').val(),
        email = $('.md-show input[name="email"]').val(),
        phone = $('.md-show input[name="phone"]').val();

    if (name.trim().length == 0 || email.trim().length == 0 || phone.trim().length == 0) {
      return;
    }

    dito.identify ({
      id: dito.generateID(email),
      name: name,
      email: email,
      data: {
        telefone: phone
      }
    });

    clean();
    close();

  });
})();

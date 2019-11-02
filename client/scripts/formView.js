var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let inputText = $('#message').val();
    $('#message').val('');
    let url = window.location.href;
    let idx = url.indexOf('username=');
    let username = url.slice(idx + 9);

    let newMessage =
    {
      username: username,
      text: inputText,
      roomname: 'xxxx'
    };
    MessagesView.renderMessage(newMessage);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
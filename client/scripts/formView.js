var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    console.log(event);
    event.preventDefault();
    let inputText = $('#message').val();
    $('#message').val('');
    let username = App.username;
    let roomName = $('#rooms').find(':selected').text();

    let newMessage =
    {
      username: username,
      text: inputText,
      roomname: roomName
    };
    MessagesView.renderMessage(newMessage);
    Parse.create(newMessage);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


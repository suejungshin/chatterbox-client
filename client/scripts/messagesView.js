var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    //console.log('Messages obj', Messages.results);
    $('#chats').on('click', '.username', Friends.toggleStatus);
  },

  renderMessage: function (message) {
    // Stop the browser from submitting the form
    //event.preventDefault();
    let newMessage = MessageView.render(message);
    MessagesView.$chats.prepend(newMessage);
  }

};
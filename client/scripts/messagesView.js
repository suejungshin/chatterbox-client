var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    //console.log('Messages obj', Messages.results);
   
  },

  renderMessage: function (message) {
    // Stop the browser from submitting the form
    //event.preventDefault();
    let newMessage = MessageView.render(message);
    MessagesView.$chats.prepend(newMessage);
  }

};
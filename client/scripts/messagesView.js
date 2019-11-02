var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    console.log(Messages.results);
    //FormView.$form.on('submit', MessagesView.renderMessage();
    console.log('i am doing something now');
  },

  renderMessage: function (message) {
    //debugger;
    // Stop the browser from submitting the form
    //event.preventDefault();

    // loop over the chats and run compiled on them, and then append
    /*let html = '';
    for (let i = 0; i < Messages.results.length; i++) {
      let compiled = MessageView.render();
      let messageObj = Messages.results[i];
      console.log('message', message);
      html += compiled({
        username: messageObj.username,
        text: messageObj.text,
        roomname: messageObj.roomname
      });
    }
    MessagesView.$chats.append(html);
*/
    console.log(Messages.results);
    let newMessage = MessageView.render(message);
    MessagesView.$chats.append(newMessage);
    console.log(message);
  }

};
var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    console.log('Messages obj', Messages.results);
    /*let obj = {
      createdAt: null,
      objectId: null,
      roomname: null,
      text: null,
      updatedAt: null,
      username: null
    };*/
    Messages.results.forEach(obj => {
      if (obj.hasOwnProperty('username') && obj.hasOwnProperty('roomname') && obj.hasOwnProperty('text') ) {
        MessagesView.renderMessage(obj);
      }
    });
    //FormView.$form.on('submit', ));
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

    let newMessage = MessageView.render(message);
    MessagesView.$chats.prepend(newMessage);
  }

};
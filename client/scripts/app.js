var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    //debugger;
    MessagesView.initialize();
    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    console.log(Parse);
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.results = data.results;
      Messages.results.forEach(obj => {
        if (obj.hasOwnProperty('username') && obj.hasOwnProperty('roomname') && obj.hasOwnProperty('text') ) {
          MessagesView.renderMessage(obj);
        }
        if (!Rooms.hasOwnProperty(obj.roomname)) {
          Rooms[obj.roomname] = [obj];
          RoomsView.renderRoom(obj.roomname);
        } else {
          Rooms[obj.roomname].push(obj);
        }
      });
      $('.username').on('click', Friends.toggleStatus);
      callback();
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

/*

*/
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    //debugger;



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
      console.log(Messages);
      MessagesView.initialize();
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

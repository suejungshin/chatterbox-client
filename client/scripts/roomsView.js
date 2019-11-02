var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    let option = '<option value="1">Mr</option>';
    let option2 = '<option value="2">somethingelse</option>';
    //RoomsView.$select.append(option);
    //RoomsView.$select.append(option2);
    console.log(option);
    console.log($('#rooms select :selected').text());

  },

  renderRoom: function(room) {
    let roomFunc = _.template(`
      <div class="chatroom"><%= room %></div>
    `);
    RoomsView.$select.append(roomFunc({room: room}));

    // make template to access the sel



  }

};

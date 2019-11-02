var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    let roomFunc = _.template(`
      <div class="chatroom"><%= room %></div>
    `);
    RoomsView.$select.append(roomFunc({room: room}));
    //$select.append(xxxx);
  }

};

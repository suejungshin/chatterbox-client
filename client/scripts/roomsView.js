var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.$select.change(RoomsView.roomSelectionHandler);
  },

  renderRoom: function (room) {
    console.log(room);
    let roomFunc = _.template(`
      <option><%- room %></option>
    `);
    RoomsView.$select.append(roomFunc({ room: room }));

    // make template to access the sel

  },

  roomSelectionHandler: function() {
    let roomName = $('#rooms').find(':selected').text();
    let messageDivs = document.querySelectorAll('.chat');
    messageDivs.forEach(div => {
      if (div.className.includes(roomName)) {
        $(div).show();
      } else {
        $(div).hide();
      }
    });
  }

  /*handleAddRoomClick: function (event) {
    //console.log(event);
    let newRoomName = $('#add-room-textfield').val();
    if (!Rooms.hasOwnProperty(newRoomName)) {
      Rooms[newRoomName] = [];
      RoomsView.renderRoom(newRoomName);
    } else {
      alert('Roomname already exists');
    }

    $('#add-room-textfield').val('');
  }*/

};

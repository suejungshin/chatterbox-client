var Rooms = {
  add: function (event) {
    //console.log(event);
    let newRoomName = $('#add-room-textfield').val();
    if (!Rooms.hasOwnProperty(newRoomName)) {
      Rooms[newRoomName] = [];
      RoomsView.renderRoom(newRoomName);
    } else {
      console.log('Roomname already exists');
    }

    $('#add-room-textfield').val('');
  }
};




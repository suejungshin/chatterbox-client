var Friends = {
  toggleStatus: function() {
    let friendName = event.srcElement.innerText;
    let messageDivs = document.querySelectorAll('.username');
    if (!Friends.storage.hasOwnProperty(friendName)) {
      Friends.storage[friendName] = true;
    } else {
      delete Friends.storage[friendName];
    }
    messageDivs.forEach(div => {
      if (Friends.storage.hasOwnProperty(friendName)) {
        if (div.className.includes(friendName)) {
          $(div).css('background-color', 'pink');
        }
      } else {
        $(div).css('background-color', '#eee');
      }
    });
  },
  storage: {}
};


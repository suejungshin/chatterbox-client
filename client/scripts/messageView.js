var MessageView = {

  render: _.template(`

      <div class="chat <%- roomname %>">
        <div class="username <%- username %>"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class=<%- roomname %>><%- roomname %></div>
        <div></div>
      </div>

    `)

};
var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
        "Hello, World!"
      )
    )
  }
});

var HelloUser = React.createClass({displayName: "HelloUser",
  getInitialState: function() {
    return {
      username: '@kalevrk'
    }
  },
  handleChange: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  render: function() {
    return (
      React.createElement("div", null, 
        "Hello ", this.state.username, " ", React.createElement("br", null), 
        "Change Name: ", React.createElement("input", {type: "text", value: this.state.username, onChange: this.handleChange})
      )
    )
  }
});

var FriendsContainer = React.createClass({displayName: "FriendsContainer",
  getInitialState: function() {
    return {
      name: 'Kalev Roomann-Kurrik',
      friends: ['Arne Roomann-Kurrik', 'Katrina Uychaco', 'Mauno Kork']
    }
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, " Name: ", this.state.name, " "), 
        React.createElement(ShowList, {names: this.state.friends})
      )
    )
  }
});

var ShowList = React.createClass({displayName: "ShowList",
  render: function() {
    var listItems = this.props.names.map(function(friend) {
      return React.createElement("li", null, " ", friend, " ");
    });
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, " Friends "), 
        React.createElement("ul", null, 
          listItems
        )
      )
    )
  }
});

React.render(React.createElement(FriendsContainer, null), document.getElementById('app'));

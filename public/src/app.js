var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello, World!
      </div>
    )
  }
});

var HelloUser = React.createClass({
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
      <div>
        Hello {this.state.username} <br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});

var FriendsContainer = React.createClass({
  getInitialState: function() {
    return {
      name: 'Kalev Roomann-Kurrik',
      friends: ['Arne Roomann-Kurrik', 'Katrina Uychaco', 'Mauno Kork']
    }
  },
  addFriend: function(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  },
  render: function() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

var AddFriend = React.createClass({
  getInitialState: function() {
    return {
      newFriend: ''
    }
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  updateNewFriend: function(e) {
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    );
  }
});

var ShowList = React.createClass({
  getDefaultProps: function() {
    return {
      names: []
    }
  },
  render: function() {
    var listItems = this.props.names.map(function(friend) {
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

React.render(<FriendsContainer />, document.getElementById('app'));

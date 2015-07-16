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
  render: function() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
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

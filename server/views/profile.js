var React = require('react');
var DefaultLayout = require('./layouts/default');

class profile extends React.Component {
  render() {
    var user = this.props.user
    console.log('--------------')
    console.log(user)
    return (
      <DefaultLayout title='Account'>
        <img src={user.twitch.logo}></img>
        <h3>{user.twitch.name}</h3>
        <h5>{user.twitch.bio}</h5>
        <hr></hr>
        <h3>Squad</h3>
        <ul>
          <li>Streaming with: </li>
          {user.isStreaming.with.map( teammate => {
            <li>teammate</li>
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = profile;
var React = require('react');
var DefaultLayout = require('./layouts/default');

class profile extends React.Component {
  render() {
    var squad = this.props.squad
    console.log('--------------')
    console.log(squad)
    return (
      <DefaultLayout title='Account'>
        <a>edit</a>
        <br></br>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg'></img>
        <h3>{squad.name}</h3>
        <h5>Squad Bio</h5>
        <hr></hr>
        <h3>Squad</h3>
        <ul>
          <li>Members: </li>
          <li>Members: </li>
          <li>Members: </li>
          <li>Members: </li>
          <li>Members: </li>
          <li>Members: </li>
          <li>Members: </li>
          <li>Members: </li>
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = profile;
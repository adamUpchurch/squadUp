var React = require('react');
import DefaultLayout from './layouts/default';
import CreateStream from './components/CreateStream';

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h3>It's time to squad up</h3>
        <p>A place to build your squad, recruit, compete, stream and share with the world.</p>
        <h5>form to quickly create squad stream.</h5>
        <img src='https://bit.ly/2vkSh8S' style={{height:'500px', width:'auto'}}></img>
        <hr></hr>
        <h3>Browse Squad Streams</h3>
        <hr></hr>
        <h3>Squad Up</h3>
        <uL>
          <li>Create a squad</li>
          <li>Join a Squad</li>
          <li>Compete</li>
          <li>Squad Stream</li>
          <li>Take Over the World</li>
        </uL>
        <hr></hr>
        <h3>Take over the world!</h3>
        <p>Social Media / Competition / Swag? / Squad Stuff?</p>
        <h5>Stay update with what we are doing: ________________ </h5>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
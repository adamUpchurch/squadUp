var React = require('react');
var DefaultLayout = require('../layouts/default');
var style = require('./profileStyle');

class profile extends React.Component {
  render() {
    var user = this.props.user
    console.log('--------------')
    console.log(user)
    return (
      <DefaultLayout title='Account'>
        <div style={style.wrapper}>
          <div style={{backgroundColor: 'blue'}}>
          </div>
          <div style={{backgroundColor: 'grey'}}>
          </div>
          <div style={{backgroundColor: 'black'}}>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = profile;
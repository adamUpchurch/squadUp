var React = require('react');
var DefaultLayout = require('../layouts/default');

var Input = props => (
    <div className={`input-field col ${props.colSize}`}>
    {/* id, type, className, label, colSize*/}
        <input id={props.id} type={props.type} className={props.className}></input>
        <label for={props.id}>{props.children}</label>
    </div>
)

class editProfile extends React.Component {
  render() {
    var user = this.props.user
    console.log('--------------')
    console.log(user)
    return (
      <DefaultLayout title='Account'>
        <div style={{margin: '20px'}}>
            <h4>Edit</h4>
            <div className="row">
                <div className='col l3 m2 s12'>
                    <ul>
                        <li>Profile</li>
                        <li>Squad</li>
                    </ul>
                </div>
                <form className="col s12 m8 l6">
                    <div className="row">
                        <Input id="first_streamer" type="text" className="validate" colSize='s12'>First Streamer</Input>
                        <Input id="second_streamer" type="text" className="validate" colSize='s12'>Second Streamer</Input>
                        <Input id="third_streamer" type="text" className="validate" colSize='s12'>Third Streamer</Input>
                    </div>
                </form>
            </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = editProfile;
var React = require('react');

{/*'repeat(2, 1fr) / repeat(2, 1fr)'*/}
const wrapper = {
  //border: '1px solid white',
  minHeight: '100vh',
  display: 'grid-inline',
  gridTemplateColumns: 'repeat(auto-fit, minmax(168px, 1fr))',
  gridTemplateRows: 'repeat(auto-fit, minmax(280px, 1fr))',
};

const singleStreamStyle = (tf) => {
  if (tf) {
    return {
      height: 'calc(100vw * .54)',
      width: '100vw'
    }
  }
}

class Stream extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log(this.props.squad)
    const streams = this.props.squad.map((streamer, index) => (  
      <iframe
        src= {`http://player.twitch.tv/?channel=${streamer}&muted=true`}
        scrolling="no"
        frameBorder="0"
        marginHeight='0'
        border='0'
        allowFullScreen="true"
        style={singleStreamStyle(this.props.squad.length === 1)}
        >
      </iframe>
    ))



    return (
      <div style={wrapper}>
        {streams}
      </div>
        )
  }
}

module.exports = Stream;
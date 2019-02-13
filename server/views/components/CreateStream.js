import React, { Component } from 'react';

const linkStyle = {
  position: 'relative',
  padding: '0',
  border: 'none',
  background: 'none',
  touchCallout: 'none',
  color: '#1b1b2b',
  outline: 'none',
  textAlign: 'center',
  display: 'none'

}

const formWrapper = {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center'
};

function ShareLink(props) {
  function handleClick(e) {
    /* Get the text field */
    let streamers = document.getElementById("streamerTags");

    /* Select the text field */
    streamers.style.display = '';
    streamers.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
    streamers.style.display = 'none';

    /* Alert the copied text */
    e.preventDefault();
  }

    return (
      <button type='button' value='Share link' onClick={handleClick}><img src='http://www.icon-park.com/imagefiles/link_icon_white.png' alt="copy link" height="32" width="32"/></button>
    );
}

function toggleHide(tag) {
    var x = document.getElementById(tag);
    if (x.style.display === "none") {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
}

class CreateStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      url: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value !== '') {
      this.state.url = `?streamers=${this.state.value}`;
      window.open(this.state.url);
      event.preventDefault();
    }
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={formWrapper}>
          <label>
            <input onChange={this.handleChange} placeHolder='Enter up to 4 streamers' className = 'streamerInput' type="text" value={this.state.value} />
            {/* <ShareLink value={this.state.value}/> */}
          </label>
          <input id = 'streamerTags' style={linkStyle} type="text" value={`squadup.gg/?streamers=${this.state.value}`} />
          <input type="submit" value="Let's go! 📺"/>
        </form>
      </div>
    );
  }
}

export default CreateStream;

import React from 'react'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'

const theme = {
  global: {
    colors: {
      brands: '#413567'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>SQUADUP.gg - Squad Stream</title>
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" 
          />
          <link
           rel="stylesheet"
           href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js" crossorigin="anonymous"></script>

        </head>
        <body>
          <AppBar title={this.props.title}></AppBar>
          {this.props.children}
          <hr></hr>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
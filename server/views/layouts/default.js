import React from 'react'
import AppBar from '../components/AppBar'

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
          <title>{this.props.title}</title>
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" 
          />
          <link
           rel="stylesheet"
           href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </head>
        <body style={{margin: '0'}}>
          <AppBar>
            SQUADUP.gg
          </AppBar>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
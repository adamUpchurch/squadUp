var React = require('react');
import Header from '../components/Header'

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <Header />
        <head><title>{this.props.title}</title></head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
const page = require('page');
const React = require('react');
const ReactDOM = require('react-dom');

const empty = require('empty-element');

const pageContent = document.getElementsByClassName('page-content')[0];

// Index
page('/', function(ctx, next) {

class MyComponent extends React.Component {
  render() {
    return <div>Hello World Strawberry</div>;
  }
}
ReactDOM.render(<MyComponent />, pageContent);

});

page('/peach.html', function(ctx, next) {
  class MyComponent extends React.Component {
    render() {
      return <div>Hello World Peach</div>;
    }
  }
  ReactDOM.render(<MyComponent />, pageContent);
});

page();





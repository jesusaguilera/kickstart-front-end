const page = require('page');
const React = require('react');
const ReactDOM = require('react-dom');

const empty = require('empty-element');

const pageContent = document.getElementsByClassName('page-content')[0];

 const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

// Index
page('/', function(ctx, next) {

class MyComponent extends React.Component {
  render() {
    return element; 
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





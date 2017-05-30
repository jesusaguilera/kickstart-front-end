const page = require('page');
const React = require('react');
const ReactDOM = require('react-dom');

const pageContent = document.getElementsByClassName('page-content')[0];

 const elementStrawberry = (
   <div className="container">
    <div className="row">
      <div className="col s6">
      <img src="images/strawberry.jpg" alt="strawberry"/>
      </div>
      <div className="col s6">
      <p>Morbi ac arcu sit amet justo auctor gravida ac ut eros. Ut nunc est, iaculis et sapien id, vulputate auctor ex. Cras vitae tincidunt erat. Curabitur sed mi pulvinar, congue urna ut, condimentum justo. Nulla viverra, sapien vel consectetur sagittis, lacus velit euismod erat, at commodo sapien mauris condimentum est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ligula nibh, ultrices id ullamcorper at, volutpat vel quam. Proin malesuada sed nisi eu feugiat. In varius blandit porttitor. Ut molestie rhoncus ante, vitae ultricies diam molestie sed.</p>
      </div>
    </div>
   </div>
 );
 const elementPeach = (
   <div className="container">
    <div className="row">
      <div className="col s6">
      <img src="images/peach.png" alt="peach"/>
      </div>
      <div className="col s6">
      <p>Morbi ac arcu sit amet justo auctor gravida ac ut eros. Ut nunc est, iaculis et sapien id, vulputate auctor ex. Cras vitae tincidunt erat. Curabitur sed mi pulvinar, congue urna ut, condimentum justo. Nulla viverra, sapien vel consectetur sagittis, lacus velit euismod erat, at commodo sapien mauris condimentum est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ligula nibh, ultrices id ullamcorper at, volutpat vel quam. Proin malesuada sed nisi eu feugiat. In varius blandit porttitor. Ut molestie rhoncus ante, vitae ultricies diam molestie sed.</p>
      </div>
    </div>
   </div>
 );

// Index
page('/', function(ctx, next) {

class MyComponent extends React.Component {
  render() {
    return elementStrawberry; 
  }
}
ReactDOM.render(<MyComponent />, pageContent);

});

page('/peach.html', function(ctx, next) {
  class MyComponent extends React.Component {
    render() {
      return elementPeach;
    }
  }
  ReactDOM.render(<MyComponent />, pageContent);
});

page();





const page = require('page');
const React = require('react');
const ReactDOM = require('react-dom');

const pageContent = document.getElementsByClassName('page-content')[0];

const Container = props => {
  return(
    <div className="container">
    <div className="row">
    <div className="col s6">
    <img src={props.img} alt={props.name} />
    </div>
    <div className="col s6">
    <p>{props.text}</p>
    </div>
    </div>
    </div>
  )
};

var miProps = [
  {
    imgSrc  :"images/strawberry.jpg",
    altName :"Strawberry",
    text :"Nulla viverra, sapien vel consectetur sagittis, lacus velit euismod erat, at commodo sapien mauris condimentum est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ligula nibh, ultrices id ullamcorper at, volutpat vel quam. Proin malesuada sed nisi eu feugiat. In varius blandit porttitor. Ut molestie rhoncus ante, vitae ultricies diam molestie sed.",
  },
  {
    imgSrc  :"images/peach.png",
    altName :"Peach",
    text :"Morbi ac arcu sit amet justo auctor gravida ac ut eros. Ut nunc est, iaculis et sapien id, vulputate auctor ex. Cras vitae tincidunt erat. Curabitur sed mi pulvinar, congue urna ut, condimentum justo. Nulla viverra, sapien vel consectetur sagittis, lacus velit euismod erat, at commodo sapien mauris condimentum est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ligula nibh, ultrices id ullamcorper at, volutpat vel quam. Proin malesuada sed nisi eu feugiat. In varius blandit porttitor. Ut molestie rhoncus ante, vitae ultricies diam molestie sed.",
  }
];

// Index
page('/', function(ctx, next) {
  ReactDOM.render(<Container img={miProps[0].imgSrc} name={miProps[0].altName} text={miProps[0].text} />, pageContent);
});

// About
page('/peach.html', function(ctx, next) {
  ReactDOM.render(<Container img={miProps[1].imgSrc} name={miProps[1].altName} text={miProps[1].text} />, pageContent);
});

page();





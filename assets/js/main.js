const page = require('page');
const yo = require('yo-yo');
const empty = require('empty-element');

const pageContent = document.getElementsByClassName('page-content')[0];

// Index
page('/', function(ctx, next) {

  let el = yo`<div class="container"><div class="row"><div class="col s6"><img src="images/strawberry.jpg" alt="strawberry" class="img-responsive"></div><div class="col s6"><p>Nullam et turpis sed lacus eleifend vestibulum vitae ut libero. Nam tincidunt tortor a nunc dictum dictum. Phasellus ac accumsan mauris. Nulla viverra et purus at lobortis. Aenean quis convallis justo, sed porta tortor.</p></div></div></div>`;

  empty(pageContent).appendChild(el);
});

page('/peach.html', function(ctx, next) {
  let el = yo`
      <div class="container">
        <div class="row">
          <div class="col s6">
            <img src="images/peach.png" alt="peach">
          </div>
          <div class="col s6">
            <p>Morbi ac arcu sit amet justo auctor gravida ac ut eros. Ut nunc est, iaculis et sapien id, vulputate auctor ex. Cras vitae tincidunt erat. Curabitur sed mi pulvinar, congue urna ut, condimentum justo. Nulla viverra, sapien vel consectetur sagittis, lacus velit euismod erat, at commodo sapien mauris condimentum est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ligula nibh, ultrices id ullamcorper at, volutpat vel quam. Proin malesuada sed nisi eu feugiat. In varius blandit porttitor. Ut molestie rhoncus ante, vitae ultricies diam molestie sed.</p>
          </div>
        </div>
      </div>`;
  empty(pageContent).appendChild(el);
});

page();





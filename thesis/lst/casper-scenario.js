var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
    this.click('#link-quickstart-full');
});

casper.then(function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();

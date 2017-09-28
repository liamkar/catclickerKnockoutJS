var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('images/cat1.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }
}

ko.applyBindings(new ViewModel());

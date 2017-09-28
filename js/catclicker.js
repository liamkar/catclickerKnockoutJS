var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('images/cat1.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }

  this.level = ko.computed(function() {
    let clickCount = this.clickCount();
    if (clickCount < 10) {
      return "NewBorn";
    } else if (clickCount >= 10 && clickCount < 100) {
      return "Infant";
    } else if (clickCount >= 100) {
      return "Teen";
    }
  }, this);
}

ko.applyBindings(new ViewModel());

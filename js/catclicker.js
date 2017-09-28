let Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('images/cat1.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com');
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

  this.nicknames = ko.observableArray([{
      nick: 'oboy'
    },
    {
      nick: 'furryous'
    },
    {
      nick: 'meanymai'
    }
  ]);
};


var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  }

}

ko.applyBindings(new ViewModel());

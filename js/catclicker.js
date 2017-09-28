let initialCats = [{
    clickCount: 0,
    name: 'Pekka',
    imgSrc: 'images/cat1.jpg',
    imgAttribution: 'https://flickr.com',
    nicknames: ['peksi', 'pera']
  },
  {
    clickCount: 0,
    name: 'Rontti',
    imgSrc: 'images/cat2.jpg',
    imgAttribution: 'https://flickr.com',
    nicknames: ['ron', 'ronni']
  },
  {
    clickCount: 0,
    name: 'Matti',
    imgSrc: 'images/cat3.jpg',
    imgAttribution: 'https://flickr.com',
    nicknames: ['matmat', 'mamam']
  },
  {
    clickCount: 0,
    name: 'Catt',
    imgSrc: 'images/cat4.jpg',
    imgAttribution: 'https://flickr.com',
    nicknames: ['cathy', 'cattye']
  },
  {
    clickCount: 0,
    name: 'Purry',
    imgSrc: 'images/cat5.jpg',
    imgAttribution: 'https://flickr.com',
    nicknames: ['pu pu', 'prprpr']
  }
];

let Cat = function(data) {
  //TODO:throws this.clickcount not a method error if no ko.observable defined.
  this.clickCount = ko.observable(data.clickCount);
  this.name = data.name;
  this.imgSrc = data.imgSrc;
  this.imgAttribution = data.imgAttribution;
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

  this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function() {
  self = this;

  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

  this.changeCurrentCat = function(item, event) {
    self.currentCat(item);
  }
}

ko.applyBindings(new ViewModel());

(function() {
  var app = angular.module('store',[]);
  app.controller('StoreController', function() {
    this.products = gems;
  });
  var gems =  [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A cool Dodecahedron',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 3.95,
      description: 'A cool Pentagonal',
      canPurchase: true,
      soldOut: false
    }
  ];
})();

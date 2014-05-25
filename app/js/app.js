function Place (name, address, rating, price) {
    this.name = name;
    this.address = address;
    this.rating = rating;
    this.price = price;
}

Place.prototype.sayInfo = function() {
    return (this.name +", "+ this.address +", "+ this.rating +", "+ this.price);
};
var examplePlace = new Place('UPS','123 Fake St.', 3, '$$' );

console.log(examplePlace.sayInfo());

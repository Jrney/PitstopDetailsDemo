define ( ["backbone"], function(Backbone) {
    var PlaceModel = Backbone.Model.extend({
    defaults: {
        name: "",
        address: "",
        rating: 0,
        price: ""
    }

    });
    return PlaceModel;
});

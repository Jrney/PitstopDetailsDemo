/*jslint node: true */
'use strict';

define([
    'jquery',
    'backbone',
    'isotope',
    'app/modelViews/PlacesView'
], function(
    $,
    Backbone,
    Isotope,
    PlacesView
    ) {

    //ISOTOPE
    var iso = new Isotope ("#container", {
        itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 25
        }
    });

    var placesView = new PlacesView ();

    placesView.render();

});

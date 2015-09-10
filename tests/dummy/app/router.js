import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('setup', function() {
    this.route('index');
    this.route('apiKey');
    this.route('libraries');
    this.route('misc');
  });
  this.route('basicUsage', { path: '/basic-usage' }, function() {
    this.route('index');
    // TODO Advanced google map events + properties
    this.route('markers');
    this.route('circles');
    this.route('polygons');
    this.route('polylines');
    this.route('rectangles');
    this.route('overlays');
  });
  this.route('service', function() {
    this.route('index');
  });
  this.route('selections', function() {
    this.route('index');
  });
  this.route('heatmap', function() {
    this.route('index');
  });
  this.route('performance', function() {
    this.route('index');
  });
});

export default Router;
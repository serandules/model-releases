var log = require('logger')('model-releases');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var release = Schema({
  type: {type: String, required: true, enum: ['serandules', 'serandomps']},
  name: {type: String, required: true},
  version: {type: String, required: true},
  revision: String
}, {collection: 'releases'});

module.exports = mongoose.model('releases', release);
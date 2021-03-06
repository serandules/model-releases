var log = require('logger')('model-releases');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
  type: {type: String, required: true, index: true, enum: ['serandules', 'serandomps']},
  name: {type: String, required: true, index: true},
  version: {type: String, required: true, index: true},
  revision: String
}, {collection: 'releases'});

module.exports = mongoose.model('releases', schema);

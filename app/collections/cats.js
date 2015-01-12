var Base = require('./base');
    Cat = require('../models/cat');

module.exports = Base.extend({
  model: Cat
});
module.exports.id = 'Cats';
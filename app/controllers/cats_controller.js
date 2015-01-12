module.exports = {

  index: function(params, callback) {
    
  	var spec = {
  		model: {model: 'Cat'}
  	};

  	this.app.fetch(spec, function(err, result){
  		callback(err, result);
  	});
    
  }

};
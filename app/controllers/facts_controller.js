module.exports = {

  index: function(params, callback) {
    
  	var spec = {
  		model: {model: 'Fact'}
  	};

  	this.app.fetch(spec, function(err, result){
  		callback(err, result);
  	});
    
  }

};
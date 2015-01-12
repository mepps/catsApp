module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Getting from Cat APIs</h1>\n\n<p>Find Cat Images and Facts here</p>\n<p>";
  if (stack1 = helpers.facts) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.facts; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<p>\n<p>Hopefully I will fix this later</p>\n\n\n";
  return buffer;
  });

return templates;

};
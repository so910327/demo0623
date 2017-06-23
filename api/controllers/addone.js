'use strict';

var util = require('util');


module.exports = {
  addone: addone
};


function addone(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var num = req.swagger.params.num.value || '0';
  var addone;
  if(!isNaN(num)){
    addone = util.format(num, 'after addone, now total:', parseInt(num)+1);
  }else{
    addone = util.format('Your input is not number! Please input a number!');
  }


  // this sends back a JSON response which is a single string
  res.json(addone);
}

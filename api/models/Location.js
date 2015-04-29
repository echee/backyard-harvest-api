/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  type: {
    is_country :  	function(country){
    	return country;
    },
    is_latitude : 	function(latitude){
    	return latitude;
    },
    is_longitude : 	function(longitude){
    	return longitude;
    }
  },

  attributes: {
  	street_address: {
  		type: 		'string',
  		required: 	true
  	},
  	city: {
  		type: 		'text',
  		required: 	true
  	},
  	state: {
  		type: 		'text',
  		required: 	true
  	},
  	postcode: {
  		type: 		'integer',
  		size: 		4,
  		required: 	true
  	},
  	country: {
  		type: 		'string',
  		required: 	true
  	},
  	latitude: {
  		type: 		'float',
  		required: 	true
  	},
  	longitude: {
  		type: 		'float',
  		required: 	true
  	}
  }
};


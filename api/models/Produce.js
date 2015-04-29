/**
* Produce.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	species: {
  		type: 		'string',
  		required: 	true,
  		unique: 	true
  	},
  	alternate_name: {
  		type: 		'string'
  	},
  	botanical_name: {
  		type: 		'string'
  	},
  	harvests: {
  		collection: 'harvest',
  		via: 		'produce'
  	}
  }
};


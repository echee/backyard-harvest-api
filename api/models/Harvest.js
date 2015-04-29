/**
 * Harvest.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        backyard: {
            model: 		"backyard",
            required: 	true
        },
        quantity: {
            type: 		"integer",
            required: 	true
        },
        produce: {
	  		collection: "produce",
	  		via: 		"harvests"
        }
    }
};
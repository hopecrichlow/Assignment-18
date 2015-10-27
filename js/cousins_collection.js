import Backbone from 'backbone';
import CousinModel from './cousin_model';

// Responsible for loading all the data and creating an instance of the model
// Url is the same as the model's

let CousinsCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/cousins',

  model: CousinModel,

  parse: function(data) {
    return data.results;
  }

});

export default CousinsCollection;
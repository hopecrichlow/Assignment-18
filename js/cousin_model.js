import Backbone from 'backbone';

let CousinModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/cousins',

  idAttribute: 'objectId'

});

export default CousinModel;
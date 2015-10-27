import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


const APP_ID = 'dw6jvy0aREIXSOaWzhUM3DwkjiXNwDdBGq5uNe8A';
const APP_KEY = '1d7eq9d6tB21WCmjMGcrDKxL5v6bkc1wT5K0b2qc';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-KEY': APP_KEY
  }
});

import CousinsCollection from './cousins_collection';
import CousinTemplate from './cousin_template';

let cousins = new CousinsCollection();

function renderCousins() {
  // Creating an empty dom node
  let $ul = $('<ul></ul>');

  // Iterate each of the models
  cousins.each(function(cousin){

    // Person is an instance of PersonModel

    //Grab raw data from model
    let data = cousin.toJSON();
    console.log('data', data);

    // Pass the data to our template
    let templateString = CousinTemplate(data);
    console.log('templateString', templateString);

    //use templateString to create an li dom node
    let $li = $(templateString);

    //append li to the ul
    $ul.append($li);
  });

  //set ul to the body
  $('body').html($ul);
}

// Load the data to be used and THEN run renderPeople
cousins.fetch().then(renderCousins);
console.log('Hello, World');

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require forem
//= require_tree .
$.restClient = {
  request: function() {
    console.log('Requesting products ...');

    $.ajax({
      url: "/products",
      type: "GET",
      success: function(data){
          console.log('Got items. Adding to the page ...');
          $.restClient.addItems(data);
      },
      error: function() {
        console.log('Uh oh something else happened..');
      }
    });
  },
  addItems: function(html) {
    $(document).find('.products')[0].innerHTML = '<p>Done !</p>'
    $(html).find('.product').appendTo($('body'));
    console.log('Items added successfully.');
  }
};

$(document).ready(function() {
  $.restClient.request();
});

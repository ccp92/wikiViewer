$(document).ready(function() {

var input = '';

function wiki () {
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=' + 'input' + '&prop=extracts&exlimit=10&exintro&exsentences=2&format=json&callback=?', function(response){
      var output = response.query.pages;
      console.log(output);
    })
  }

  wiki ();

})

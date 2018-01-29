$(document).ready(function() {

var input = '';

function wiki () {
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=' + 'input' + '&prop=extracts&exlimit=10&exintro&exsentences=2&format=json&callback=?', function(response){
      var output = response.query.pages;
      console.log(output);
    });
    // $.ajax('https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=' + 'input' + '&prop=extracts&exlimit=10&exintro&exsentences=2&format=json&callback=?',
    //   {
    //     dataType: 'json',
    //     success: function(data) {
    //       console.log(data.query.pages);
    //     }
    // });
    // The ajax method above matches what I've used previously in the quote project.
    // However, the getJSON method works as well due to the lack of an API key.
  }

  wiki ();

})

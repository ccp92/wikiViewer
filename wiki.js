$(document).ready(function() {

var input = '';
var urlPart1 = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch='
var urlPart2 = '&prop=extracts&exlimit=10&exintro&exsentences=2&format=json&callback=?'

function wiki (input) {
    $.getJSON(urlPart1 + input + urlPart2, function(response){
      var output = response.query.pages;
    });
    // $.ajax('https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=' + 'input' + '&prop=extracts&exlimit=10&exintro&exsentences=2&format=json&callback=?',
    //   {
    //     dataType: 'json',
    //     success: function(data) {
    //       console.log(data.query.pages);
    //     }
    // });
    // The ajax method above matches what I've used previously in the quote project.
    // However, the getJSON method works as well due to the lack of a required API key.
  }

  $('#submit').on('click', function() {
    // Should only run when the search button is clicked.
    let search = document.getElementById('search').value;
    // Here I am pulling the search field from the text input field.
    wiki(search);
    // Pushing the search variable into the function that's contacting the
    // Wikipedia API.
  });

})

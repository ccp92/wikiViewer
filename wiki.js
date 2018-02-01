$(document).ready(function() {

const urlPart1 = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch='
const urlPart2 = '&prop=extracts&exlimit=10&exintro&exsentences=2&format=json&callback=?'

function wiki (input) {
    $.getJSON(urlPart1 + input + urlPart2, function(response){
      let output = response.query.pages;
      console.log(output);
      let titles = [];
      let extract = [];
      let id = [];
      // Creating my arrays to hold the various elements of the object that I need.
      for (let key in output) {
        if (output.hasOwnProperty(key)) {
          titles.push(output[key]['title']);
          extract.push(output[key]['extract']);
          id.push(output[key]['pageid']);
        }
      }
      // Using the for loop to hold the values I want from the JSON object.
      $('#title1').text(titles[0]);
      $('#extract1').text(extract[0]);
      $('#link1').attr('href',"")
      // For now, I am just filling in one result from the search to confirm it's working as expected.
      // Will eventually iterate through my arrays of content to show all results.
      console.log(titles);
      console.log(extract);
    });
    // $.ajax('urlPart1' + input + urlPart2',
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
    console.log(search);
    if (search == '') {
      return
    }
    //Here I am escaping the function if there is no search entered.
    wiki(search);
    // Pushing the search variable into the function that's contacting the
    // Wikipedia API.
  });

})

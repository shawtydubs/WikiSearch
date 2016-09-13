function wikiSearch() {
  var searchTerm = document.getElementById('search').value;
  var searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm + '&callback=?';
  $.getJSON(searchUrl, function(json) {
    var html = '<h3>Results:</h3>'
    for (i = 0; i < json[1].length; i++) {
      var link = json[3][i];
      var title = json[1][i];
      var description = json[2][i];
      html += '<a href="' + link + '" target="_blank">';
      html += '<div class="searchResult">';
      html += '<h3>' + title + '</h3>';
      html += '<p>' + description + '</p>';
      html += '</div></a>';
    }
    
    $('#resultsBox').html(html);
  });
}

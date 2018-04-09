
$('docuent').ready( function() {
// Fetch Articles
    $('#btnFetch').on('click', () => {
      
      $.get('/api/fetch', data => {
        console.log(data);

      })
      .then( () => {
        location.reload();
        // $(".article-wrapper").load(" .article-wrapper > *");
      });

    });
// Save Article
    $('.btnSaveArticle').on('click', function(e) {
      e.preventDefault();
      let articleID = $(e.target).closest('.article-item').attr('id');

      // console.log(articleID);
      $.ajax({
        method: "POST",
        url: "/api/save/" + articleID,
        data: {
          isSaved: true
        }
      }).then( (data)=> {
        console.log(data);

        location.reload();
        // $(".stage").load(" .article-wrapper");
      });
    });

// Delete Saved
    $('.btnDelete').on('click', function(e) {
      e.preventDefault();
      let articleID = $(e.target).closest('.article-item').attr('id');

      // console.log(articleID);
      $.ajax({
        method: "POST",
        url: "/api/delete/" + articleID,
        data: {
          isSaved: false
        }
      }).then( (data)=> {

        console.log(data);
        location.reload();
        // $(".stage").load(" .article-wrapper");
      });
    });

    $('.btnSavenote').on('click', function(e) {
      e.preventDefault();
    });
});
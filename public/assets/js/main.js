
$('docuent').ready( function() {

    $('#btnFetch').on('click', () => {
      
      $.get('/api/fetch', data => {
        console.log(data);

      })
      .then( () => {
        location.reload();
        // $(".article-wrapper").load(" .article-wrapper > *");
      });

    });
    $('.btnSaveArticle').on('click', function(e) {
      e.preventDefault();
      let articleID = $(e.target).closest('.article-item').attr('id');

      // console.log(articleID);
      $.ajax({
        method: "POST",
        url: "/api/article/" + articleID,
        data: {
          _id: articleID,
          isSaved: true
        }
      }).then( (data)=> {

        console.log(data);
        $(".article-wrapper").load(" .article-wrapper > *");
      });
    });

});
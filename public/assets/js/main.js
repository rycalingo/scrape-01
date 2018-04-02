
$('docuent').ready( function() {

    $('#btnFetch').on('click', () => {
      
      $.get('/api/fetch', data => {
        console.log(data);

      })
      .then( () => {
        $(".article-wrapper").load(" .article-wrapper > *");
      });

    });
    $('.btnSaveArticle').on('click', () => {
      
      $.get("/api/save").then( data => {});

    });

});
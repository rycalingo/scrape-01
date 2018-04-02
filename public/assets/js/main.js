
$('docuent').ready( () => {

    $('#btnFetch').on('click', () => {
        $.get('/api/fetch', data => {
          console.log(data);
        }).then(location.reload());

      });

      $('#btnSaveArticle').on('click', () => {
        $.get("/api/save").then( data => {});

      });

});
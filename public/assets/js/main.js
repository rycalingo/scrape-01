
$('docuent').ready( () => {

    $('#btnFetch').on('click', () => {
        $.get('/fetch', data => {
          console.log(data);
        }).then(location.reload());

      });

      $('#btnSaveArticle').on('click', () => {
        $.get("/api/save").then( data => {});

      });

});
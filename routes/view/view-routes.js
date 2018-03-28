

module.exports = function(app) {

    app.get('/:path?', function (req, res) {
        var dir = req.params.path;
        console.log(dir);
        switch (dir) {
            case 'saved':
                res.render('saved',
                {
                    title: 'Saved', 
                    page: 'Saved Articles',
                });
                break;
            default:
                res.render('home',
                {
                    title: 'Home',
                    page: 'Home',

                });
                break;
        }
        
    });
};
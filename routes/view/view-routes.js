

module.exports = function(app) {

    app.get('/:path?', function (req, res) {
        let dir = req.params.path;
        console.log(dir);
        switch (dir) {
            case 'saved':
                res.render('saved',
                {
                    title: 'Saved', 
                    page: 'Saved Articles',
                    navSaved: 'active'
                });
                break;
            default:
                res.render('home',
                {
                    title: 'Home',
                    navHome: 'active'
                });
                break;
        }
        
    });
};
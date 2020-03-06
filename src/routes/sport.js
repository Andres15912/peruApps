let router = require('express').Router()

router.get("/", function(req, res ){
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    })
})

var sport = require('../controllers/sport');
// sport routes
router.route('/sport')
    .get(sport.index)
    .post(sport.new);

router.route('/sport/:sport_id')
    .get(sport.view)
    .patch(sport.update)
    .put(sport.update)
    .delete(sport.delete);
    
module.exports = router;
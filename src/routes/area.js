let router = require('express').Router()


var area = require('../controllers/area')

router.route('/area')
    .get(area.index)
    .post(area.new)

router.route('/area/:area_id')
    .get(area.view)
    .patch(area.update)
    .put(area.update)
    .delete(area.delete);

module.exports = router
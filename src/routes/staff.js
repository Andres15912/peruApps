let router = require('express').Router()

var staff = require('../controllers/staff');
// sport routes
router.route('/staff')
    .get(staff.index)
    .post(staff.new);

router.route('/staff/:staff_id')
    .get(staff.view)
    .patch(staff.update)
    .put(staff.update)
    .delete(staff.delete);
    
module.exports = router;
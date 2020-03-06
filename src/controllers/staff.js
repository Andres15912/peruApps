Staff = require('../models/staff')

exports.index = function(req, res){
    Staff.get(function(err, Staff){
        if(err){
            res.json({
                status: " error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Sport retrieved successfully",
            data: Staff
        })
    })
}

exports.new =function(req, res){
    var staff = new Staff();
    staff.name = req.body.name ? req.body.name : staff.name
    staff.lastName = req.body.lastName
    staff.email = req.body.email
    staff.commissar = req.body.commissar
    staff.judget = req.body.judget
    // staff.event = req.body.event
    staff.boss = req.body.boss
    staff.createdAt = req.body.createdAt
    staff.updatedAt = req.body.updatedAt

    staff.save(function(err){
        if(err){
            res.json(err)
        }
        else{
            res.json({
                message: 'New Staff created',
                data: staff
            })
        }
    })
}   

exports.view = function(req, res){
    Staff.findById(req.params.staff_id, function(err, Staff){
        if(err){
            res.json(err)
        }
        res.json({
            message: 'Staff details loandin',
            data: Staff
        })
    })
}

exports.update = function(req, res){
    Staff.findById(req.params.staff_id, function (err, staff) {
        if(err){
            res.send(err)
        staff.name = req.body,name ? req.body.name : staff.name
        staff.lastName = req.body.lastName
        staff.email = req.body.email
        staff.commissar =req.body.commissar
        staff.judget = req.body.judget
        // staff.event = req.body.event
        staff.boss = req.body.boss
        staff.createdAt = req.body.createdAt
        staff.updatedAt = req.body.updatedAt
        }
        staff.save(function(err){
            if(err){
                res.json(err)
            }
            res.json({
                message: 'Staff info update',
                data: staff
            })
        })
    })
}

exports.delete = function(req, res){
    staff.remove({
        _id:req.params.staff_id
    }),function(err, staff){
        if(err){
            res.send(err)
        }
        res.json({
            status: "Success",
            message: "Delete to staff  for database ",
        })
    }
}
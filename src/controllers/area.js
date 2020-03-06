Area = require('../models/area')

exports.index = function(req, res){
    Area.get(function(err, Area){
        if(err){
            res.Json({
                status:"error",
                message: err
            })
        }
        res.json({
            status: "success",
            message: "Sport retrieved successfully",
            data: Area
        })
    })
}

exports.new = function(req, res){
    var area = new Area();
    area.name= req.body.name ? req.body.name : area.name;
    area.createdAt = req.body.createdAt; 
    area.updatedAt = req.body.updatedAt;

    area.save(function(err){
        if(err){
            res.Json(err)
        }
        else{
            res.json({
                message: 'New area created!',
                data: area
            });
        }   
    });
}

exports.view = function(req, res){
    Area.findById(req.params.area_id, function(err, Area){
        if(err){
            res.Json(err)
        }
        else{
            res.Json({
                message: "Area details loanding",
                data: Area
            })
        }
    })
}
exports.update  = function(req, res){
    Area.findById(req.params.area_id, function(err, area){
        if(err){
            res.send(err)
        area.name =req.body.name? req.body.name : area.name;
        }

        area.save(function(err){
            if (err)
                res.json(err);
            res.json({
                message: 'sport Info updated',
                data: area
            });
        })
        
    })
}

exports.delete = function(req, res){
    Area.remove({
        _id:req.params.area_id
    }), function(err, area){
        if(err){
            res.send(err)
        }
        res.json({
            status: "Success",
            message: "Delete to sport for database"
        })        
    }
} 
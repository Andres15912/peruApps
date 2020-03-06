Sport = require('../models/sport')

exports.index = function(req, res){
    Sport.get(function(err, Sport){
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Sport retrieved successfully",
            data: Sport
        })
    })
}
exports.new = function (req, res) {
    var sport = new Sport();
    sport.name = req.body.name ? req.body.name : sport.name;
    sport.createdAt = req.body.createdAt;
    sport.updatedAt = req.body.updatedAt
   

    sport.save(function (err) {
        if (err){
            res.json(err);
        }
            
        else{
            res.json({
                message: 'New sport created!',
                data: sport
            });
        }     
    });
};

exports.view = function (req, res) {
    Sport.findById(req.params.sport_id, function (err, Sport) {
        if (err)
            res.send(err);
        res.json({
            message: 'Sport details loading..',
            data: Sport
        });
    });
};

exports.update = function (req, res) {
    Sport.findById(req.params.sport_id, function (err, sport) {
        if (err)
            res.send(err);
        sport.name = req.body.name ? req.body.name : sport.name;
// save the sport and check for errors
        sport.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'sport Info updated',
                data: sport
            });
        });
    });
};


exports.delete = function(req, res){
    Sport.remove({
        _id:req.params.sport_id
    }), function(err, sport){
        if(err){
            res.send(err)
        }
        res.json({
            status: "Success",
            message: "Delete to sport for database"
        })        
    }
} 
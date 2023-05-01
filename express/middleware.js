function agedetector(req,res,next)
{
    
    if(req.query.age>18)
    {
        res.send("you are gret can enter website")
    }
    else{
        res.send("you can access website");
    }
}

module.exports =agedetector();
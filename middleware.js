const jwt =require('jsonwebtoken');

module.exports = function(req,res,next){
    try{
        let token =req.header('x-token');
        if(!token) return res.status(401).send('Access Denied');

        let decode = jwt.verify(token,'jwtSecret');
        req.user = decode.user
        next();


    }
    catch(err){
        console.error(err);
        res.status(401).send( 'Invalid token');
    }
}
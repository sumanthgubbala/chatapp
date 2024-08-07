const express =require('express');
const mongoose =require('mongoose');
const Registeruser = require('./model');
const Msgmodel =require('./Msgmodel');
const jwt =require('jsonwebtoken');
const middleware =require('./middleware');
const cors =require('cors');


const app = express();

app.use(express.json());
app.use(cors({origin:"*"}));

mongoose.connect('mongodb+srv://reactapp:reactapp@react.wx9zack.mongodb.net/?retryWrites=true&w=majority&appName=react').then(
    () => console.log('Connected to MongoDB')
)

app.post('/register', async (req, res) => {
    try{
        const {username,email,password,confirmPassword} =req.body;
        let exist = await Registeruser.findOne({email})
        if(exist){
            return res.status(400).send('Email already exist')
        }
        if(password != confirmPassword){
            return res.status(400).send('password are not matchinh')
        }
        let newUser =new Registeruser({
            username,
            email,
            password,
            confirmPassword
        })

        await newUser.save();
        res.status(200).send('User created')

    }
    catch(err){
        console.log(err);
    }
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.post('/login', async(req,res)=>{
    try{
        const {email,password}= req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist){
            return res.status(400).send('user not found')
        }
        if(exist.password!=password){
            return res.status(400).send('password incorrect')

        }
        let payload ={
            user:{
                id:exist._id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token) =>{
                if(err) throw err;
                return res.json({token})

            }
        )

    }
    catch(err){
        console.log(err);
        res.status(500).send('server Error')
    }
})

app.get('/myprofile',middleware,async(req,res)=>{
    try{

        let exist = await Registeruser.findById(req.user.id)
        if(!exist){
            return res.status(400).send('user not found')
        }

        res.json(exist);


    }
    catch(err){
        console.log(err);
    }
})

app.listen(5000,()=>{
    console.log('listening on port');
})


app.post('/addmsg',middleware,async(req,res)=>{
    try{
        const{text} =req.body;
        const exist = await Registeruser.findById(req.user.id);
        let newmsg= new Msgmodel({
            user : req.user.id,
            username : exist.username,
            text:text
        })

        await newmsg.save();
        let allmsg =await Msgmodel.find();
        return res.json(allmsg)


    }
    catch(err){
        console.log(err);
    }
})

app.get('/getmsg',middleware,async(req,res)=>{
    try{

        let allmsg =await Msgmodel.find();
        return res.json(allmsg)
    }
    catch(err){
        console.log(err);
    }

});
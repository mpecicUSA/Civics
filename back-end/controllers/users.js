const knex = require("../db/knex.js");

const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || "shhhhhh";

module.exports = {
    register: (req, res) => {
        hasher.hash(req.body).then((user)=>{
            knex('user').insert(
                {
            first_name: user.first_name,
            last_name: user.last_name, 
            email: user.email,
            password: user.password
                }, 'id').then((results)=>{
            res.json({message: "Successfully registered, please log in", id:results[0]});
            }).catch((err)=>{
            res.status(400).send({message: err});
            })
        })
    },
    login: (req, res) => {
        knex('user')
        .where('email', req.query.email)
        .first()
        .then((user)=>{
        if(user){
            hasher.check(user, req.query).then((isMatch)=>{
            if(isMatch){
                const token = jwt.sign(user, secret);
                delete user.password;
                res.json({message: "Successfully signed in", token, user})
            }else{
                res.status(400).send({message: 'Invalid Email / Password'});
            }
            })
        }else{
            res.status(400).send({message: 'Invalid Email / Password'});
        }
        }).catch((err)=>{
        res.status(400).send({message: err});
        })
    },
}
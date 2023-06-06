import { Router } from 'express'
export const router = new Router()


router.get('/', function(req, res) {
    try{
        res.send('<h1>ЭДИКХУЙ<h1>')
    } catch(error){
        console.log(error.stack)
    }
})

router.get('/xyi', function(req, res) {
    try{
        res.send('post')
    } catch(error){
        console.log(error.stack)
    }
})
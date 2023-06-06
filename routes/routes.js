import { Router } from 'express'
export const router = new Router()


router.get('/', function(req, res) {
    try{
        res.send('ЭДИК ХУЙ')
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
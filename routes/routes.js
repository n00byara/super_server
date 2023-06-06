import { Router } from 'express'
export const router = new Router()


router.get('/', function(req, res) {
    try{
        res.send('get')
    } catch(error){
        console.log(error.stack)
    }
})

router.post('/', function(req, res) {
    try{
        res.send('post')
    } catch(error){
        console.log(error.stack)
    }
})
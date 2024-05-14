import { Router } from "express";

const router = Router();

router.get('/products', (req, res, next) => {
    console.log('TRAFIONY')
    res.json({message: 'yolo'})
})
router.get('/products/:id', () => {})
router.post('/products', () => {})
router.put('/products/:id', () => {})
router.delete('/products/:id', () => {})

router.get('/updates', () => {})
router.get('/updates/:id', () => {})
router.post('/updates', () => {})
router.put('/updates/:id', () => {})
router.delete('/updates/:id', () => {})


export default router;
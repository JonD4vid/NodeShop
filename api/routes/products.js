const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

//individual product

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'Correctly read paramater: discovered id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Id passed'
        });
    }
});


router.patch('/:productId', (req, res, next) => {
   res.status(200).json({
       message: 'Deleted product'
   })
});


module.exports = router;
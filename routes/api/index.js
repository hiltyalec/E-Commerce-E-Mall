//IMPORT EXPRESS ROUTER AND MODELS 
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//THE /API ENDPOINT
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

//EXPORT MODULE
module.exports = router;
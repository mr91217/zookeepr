const router = require('express').Router();
// const { route } = require('../apiRoutes/animalRoutes');
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');


router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;
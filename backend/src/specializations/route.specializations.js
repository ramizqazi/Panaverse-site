const express = require('express');

const specializationsController = require('./controller.specializations');

const router = express.Router();

router.get('/', specializationsController.getSpecializations);

router.get(
  '/:id',
  specializationsController.getSpecialization,
);

module.exports = router;

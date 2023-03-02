const express = require('express');

const CoreCoursesController = require('./controller.core-courses');

const router = express.Router();

router.get('/', CoreCoursesController.getCoreCourses);

router.get(
  '/:id',
  CoreCoursesController.getCoreCourse,
);

module.exports = router;

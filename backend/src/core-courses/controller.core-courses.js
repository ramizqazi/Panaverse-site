const { CoreCourse } = require('../modals');

/**
 * GET /core-courses
 */
exports.getCoreCourses = async (req, res, next) => {
  try {
    const response = await CoreCourse.find({});

    response.data = response.forEach((course) => course.toJSON());
    res.status(200).json(response);
  } catch (e) {
    next(e);
    res.status(404).json({ message: e.message });
  }
};

/**
 * GET /core-courses/:id
 */
exports.getCoreCourse = async (req, res, next) => {
  const { id } = req.params;

  // Get course
  CoreCourse.findById(id)
    .exec((err, course) => {
      if (err) {
        next();
      } else if (!course) {
        res.status(404).json({
          message: 'course not found',
        });
      } else {
        const response = course.toJSON();
        res.status(200).json(response);
      }
    });
};

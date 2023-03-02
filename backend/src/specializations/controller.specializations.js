const { Specialization } = require('../modals');

/**
 * GET /specializations
 */
exports.getSpecializations = async (req, res, next) => {
  try {
    const response = await Specialization.find({});

    response.data = response.forEach((specialization) => specialization.toJSON());
    res.status(200).json(response);
  } catch (e) {
    next(e);
    res.status(404).json({ message: e.message });
  }
};

/**
 * GET /specializations/:id
 */
exports.getSpecialization = async (req, res, next) => {
  const { id } = req.params;

  // Get specialization
  Specialization.findById(id)
    .exec((err, specialization) => {
      if (err) {
        next();
      } else if (!specialization) {
        res.status(404).json({
          message: 'specialization not found',
        });
      } else {
        const response = specialization.toJSON();
        res.status(200).json(response);
      }
    });
};

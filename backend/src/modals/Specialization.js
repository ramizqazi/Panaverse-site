const mongoose = require('mongoose');

const { Schema } = mongoose;

const Specialization = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
}, { timestamps: true });

Specialization.index({
  name: 'text',
});

// Specialization.index({
//   store: {
//     name: 1,
//   },
// });

Specialization.methods.toJSON = function toJSON() {
  return {
    id: this._id,
    name: this.name,
    image: this.image,
    description: this.description,
  };
};

module.exports = mongoose.model('specializations', Specialization);

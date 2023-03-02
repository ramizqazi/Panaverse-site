const mongoose = require('mongoose');

const { Schema } = mongoose;

const CoreCourse = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  about: {
    type: String,
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  outline: [{
    name: String,
  }],
}, { timestamps: true });

CoreCourse.index({
  name: 'text',
});

CoreCourse.methods.toJSON = function toJSON() {
  return {
    id: this._id,
    name: this.name,
    about: this.about,
    image: this.image,
    description: this.description,
    outline: this.outline,
  };
};

module.exports = mongoose.model('core-courses', CoreCourse);

const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  pageName: {
    type: String,
    required: [true, 'Page Name is Required']
  },
  pageTitle: {
    type: String,
    required: [true, 'Page Title is Required']
  },
  pageSummary: {
    type: String,
    required: [true, 'Page Summary is Required']
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Page', PageSchema);

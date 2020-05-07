const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  skills: [
    {
      name: {
        type: String,
        required: [true, 'SKill is Required']
      },
      rating: {
        type: Number,
        required: [true, 'Skill Rating is Required']
      },
      detail: {
        type: String
      },
      expLength: {
        type: Number
      }
    }
  ],
  projects: [
    {
      name: {
        type: String,
        required: [true, 'Project Name is Required']
      },
      tech: {
        type: [String],
        required: true
      },
      features: {
        type: [String],
        required: [true, 'Features is Required']
      },
      summary: {
        type: String,
        required: [true, 'Summary is Required']
      },
      detail: {
        type: String,
        required: [true, 'Detail is required']
      },
      link: {
        type: String,
        required: [true, 'Link to Project is required']
      }
    }
  ],
  experience: [
    {
      company: {
        type: String,
        required: [true, ' Company  is Required']
      },
      address: {
        type: String
      },
      position: {
        type: String,
        required: [true, 'Position is Required']
      },
      jobDescription: {
        type: String
      },
      companyLink: {
        type: String
      },
      expDate: {
        fromDate: {
          type: Date
        },
        toDate: {
          type: Date
        }
      }
    }
  ],
  interest: {
    type: [String]
  },
  summary: {
    type: String
  },
  social: {
    phoneNo: {
      type: String
    },
    email: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    github: {
      type: String
    }
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);

const mongoose = require("mongoose");

/* ---------------- Technical Questions ---------------- */

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical Question is Required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is Required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is Required"],
    },
  },
  {
    _id: false,
  },
);

/* ---------------- Behavioral Questions ---------------- */

const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Behavioral Question is Required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is Required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is Required"],
    },
  },
  {
    _id: false,
  },
);

/* ---------------- Skill Gap ---------------- */

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is Required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is Required"],
    },
  },
  {
    _id: false,
  },
);

/* ---------------- Preparation Plan ---------------- */

const preparationPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: [true, "Day is Required"],
    },
    focus: {
      type: String,
      required: [true, "Focus is Required"],
    },
    tasks: {
      type: String,
      required: [true, "Tasks are Required"],
    },
  },
  {
    _id: false,
  },
);

/* ---------------- Interview Report ---------------- */

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job Description is Required"],
    },

    resume: {
      type: String,
    },

    selfDescription: {
      type: String,
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    technicalQuestions: [technicalQuestionSchema],

    behavioralQuestions: [behavioralQuestionSchema],

    skillGaps: [skillGapSchema],

    preparationPlan: [preparationPlanSchema],
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema,
);

module.exports = interviewReportModel;

const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model")

async function generateInterviewReportController(req, res) {
  const resumeFile = req.file;

  const resumeContent = await (new pdfParse.PDFparse(Uint8Array.from(req.file.buffer))).getText();

  const { resumeDescription, jobDescription } = req.body;

  const interViewReportByAi = await generateInterviewReport({
    resume: resumeContent.text,
    resumeDescription,
    jobDescription,
  });

  const interviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
    ...interViewReportByAi
  })

  res.status(201).json({
    message: "Interview Report Generated Sucessfully"
  })
}

module.exports = { generateInterviewReportController };

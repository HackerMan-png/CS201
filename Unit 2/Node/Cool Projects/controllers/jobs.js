const Job = require('../models/jobSchema');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const NotFoundError = require('../errors/not-found');

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userID;

  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort('createdAt');
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const { userID } = req.user;
  const { id: jobID } = req.params;

  const job = await Job.findOne({ createdBy: userID, _id: jobID });

  if (!job) {
    throw new NotFoundError(`No job with an id of ${jobID}`);
  }
  res.status(StatusCode.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const { userID } = req.user;
  const { id: jobID } = req.params;

  const job = await Job.findByIdAndRemove({ _id: jobID, createdBy: userID });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobID}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const { company, position } = req.body;
  const { userID } = req.user;
  const { id: jobID } = req.params;

  if (!company || !position) {
    throw new BadRequestError('Company and position fields must be filled.');
  }

  const job = await Job.findByIdAndUpdate(
    { _id: jobID, createdBy: userID },
    req.body,
    // job will be saving the new document not the old one
    // also run validators
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new NotFoundError(`No job with id ${jobID}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

module.exports = { createJob, getAllJobs, getJob, deleteJob, updateJob };

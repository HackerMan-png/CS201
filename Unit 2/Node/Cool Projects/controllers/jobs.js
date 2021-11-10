const Job = require('../models/jobSchema');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

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
    // ! MAKE NOTFOUNDERROR
    // throw new NotFoundError(`No job with an id of ${jobID}`);
  }
  res.status(StatusCode.OK).json({ job });
};

const deleteJob = (req, res) => {
  res.json({
    status: 200,
    msg: 'Success!',
  });
};

const updateJob = (req, res) => {
  res.json({
    status: 200,
    msg: 'Success!',
  });
};

module.exports = { createJob, getAllJobs, getJob, deleteJob, updateJob };

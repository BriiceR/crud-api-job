const Job = require("../Model/job");

const getJobs = (req, res) => {
    Job.find()
        .then((Job) => {
            res.json(Job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


const createJob = (req, res) => {
    const job = new Job({
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        positionAt: req.body.positionAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: req.body.requirements,
        role: req.body.role,

    });

    job.save()
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const updateJob = (req, res) => {
    Job.findOneAndUpdate(
        { _id: req.params.jobID },
        {
            $set: {
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                positionAt: req.body.positionAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                requirements: req.body.requirements,
                role: req.body.role,
            },
        },
        { new: true },)
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params.jobID })
        .then(() => res.json({ message: "Job Deleted" }))
        .catch((err) => res.send(err));
};

const getJobID = (req, res) => {
    const IDFilter = req.params.jobID;
    Job.find({ _id: req.params.jobID })
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const getSearch = async (req, res) => {
    const { position, contract, location, company } = req.query;
    try {
        const query = {};
        if (position) {
            query.position = { $regex: position, $options: 'i' };
        }
        if (contract) {
            query.contract = contract;
        }
        if (location) {
            query.location = { $regex: location, $options: 'i' };
        }
        if (company) {
            query.company = { $regex: company, $options: 'i' };
        }
        const response = await Job.find(query);
        res.json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};



module.exports = {
    getJobs,
    createJob,
    updateJob,
    deleteJob,
    getJobID,
    getSearch,
};

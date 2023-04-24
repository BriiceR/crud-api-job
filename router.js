const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

const { getJobs, createJob, updateJob, deleteJob, getJobID } = require("./controllers/Job");
module.exports = router;

router.get("/jobs", getJobs);
router.get("/jobs/:jobID", getJobID);
router.post("/jobs", createJob);

router.put("/jobs/:jobID", updateJob);

router.delete("/jobs/:jobID", deleteJob);

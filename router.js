const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

const { getJobs, createJob, updateJob, deleteJob, getJobID, getSearch } = require("./controllers/Job");
module.exports = router;

router.get("/jobs", getJobs);
router.get("/jobs/:jobID", getJobID);
router.get("/jobs/search", getSearch);
router.post("/jobs", createJob);

router.put("/jobs/updatejob/:jobID", updateJob);

router.delete("/jobs/:jobID", deleteJob);

module.exports = router;
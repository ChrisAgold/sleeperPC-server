import express from 'express'
const router = express.Router()

export { createJob, deleteJob, getAllJobs, updateJob, showStats } from '../controllers/jobsController'

router.route('/').post(createJob).get(getAllJobs)
// remember about :id
router.route('/stats').get(showStats)
router.route('/id:').delete(deleteJob).patch(updateJob)

export default router



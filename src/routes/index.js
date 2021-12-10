const express = require('express')
const router = express.Router();

const AppointmentRoute = require('./appointment/appointment');

router.use(AppointmentRoute)

module.exports = router;
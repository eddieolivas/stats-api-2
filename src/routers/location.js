const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const Location = require('../models/location');

router.get('/locations/:locationId', auth, async (req, res) => {
  const locationId = req.params.locationId;

  try {
    const location = await Location.findOne({ locationId });

    if (!location) {
      return res.send(404).send();
    }

    $name = location.name;
    $dateUpdated = location.dateUpdated;
    $beds = location.beds;
    $pendingresidents = location.pendingresidents;
    $negativeresidents = location.negativeresidents;
    $positiveresidents = location.positiveresidents;
    $pendingstaff = location.pendingstaff;
    $negativestaff = location.negativestaff;
    $positivestaff = location.positivestaff;

    const response = '<div style="display: none;"><div id="covid-stats"><h3><strong>Current COVID-19 Testing Information for ' + $name + '</strong></h3><p>Data reflects current information as of ' + $dateUpdated + '.</p><ul><li>A positive test confirms evidence of the virus, but does not confirm the patient is experiencing symptoms.</li><li>A negative result indicates that a test has been administered and the result was negative for COVID-19.</li><li>Pending means that a test has been administered, but results have not been received prior to this information being published.</li><li>Staff members who are active positive are not working until cleared by the local department of health. Active positive staff cases reflect only staff members that are currently out of work due to COVID-positive status.</li><li>Mitigating Factors: restricting visitation, screening staff and essential vendors/visitors with temperature checks, routine symptom checks and temperature/oxygen saturation checks for patients, infection prevention and control procedures in place such as hand hygiene, mask use, social distancing, and routine cleaning/sanitizing.</li></ul></p><table><thead><tr><th></th><th>Operational Beds</th><th>Tests Pending</th><th>Tests Negative</th><th>Active Positives</th></tr></thead><tbody><tr><td>Residents</td><td>' + $beds + '</td><td>' + $pendingresidents + '</td><td>' + $negativeresidents + '</td><td>' + $positiveresidents + '</td></tr><tr><td>Staff</td><td>N/A</td><td>' + $pendingstaff + '</td><td>' + $negativestaff + '</td><td>' + $positivestaff + '</td></tr></tbody></table></div></div>';

    res.status(201).send(response);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
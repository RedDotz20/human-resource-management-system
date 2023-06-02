const express = require('express');
const {
	deleteEmployee,
	insertEmployee,
	searchEmployee,
	showEmployees,
	sortAgeASC,
	sortAgeDESC,
	sortFnameASC,
	sortFnameDESC,
	sortLnameASC,
	sortLnameDESC,
	updateEmployees,
} = require('./controller');

const router = express.Router();

router.delete('/delete/', deleteEmployee);
router.post('/insert/', insertEmployee);
router.get('/searchquery', searchEmployee);
router.get('/showemployees', showEmployees);
router.put('/update', updateEmployees);

router.get('/fnameASC', sortFnameASC);
router.get('/fnameDESC', sortFnameDESC);
router.get('/lnameASC', sortLnameASC);
router.get('/lnameDESC', sortLnameDESC);
router.get('/ageASC', sortAgeASC);
router.get('/ageDESC', sortAgeDESC);

module.exports = router;

import express, { Router } from 'express';
import {
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
} from './controller';

const router: Router = express.Router();

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

export default router;

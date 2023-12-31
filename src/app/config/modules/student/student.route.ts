import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControllers.createStudent);

router.get('/', studentControllers.getAllStudentsData);

router.get('/:studentId', studentControllers.getSingleStudentData);

export const studentRoutes = router;

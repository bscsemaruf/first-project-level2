import { Request, Response } from 'express';
import { studentServecies } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServecies.createStudentIntoDb(studentData);
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudentsData = async (req: Request, res: Response) => {
  try {
    const result = await studentServecies.getAllStudentsDataFromDB();

    res.status(200).json({
      success: true,
      message: 'Students all data are retrieved',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServecies.getSingleStudentDataFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Single Student data is retrieved',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudentsData,
  getSingleStudentData,
};

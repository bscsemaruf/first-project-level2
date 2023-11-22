import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsDataFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentDataFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServecies = {
  createStudentIntoDb,
  getAllStudentsDataFromDB,
  getSingleStudentDataFromDB,
};

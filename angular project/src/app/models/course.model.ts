import { Category } from "./category.model";

export class Course {
  id!: number;
  courseName?: string;
  category?: Category;
  numLessons?: number;
  startDate?: Date;
  syllabus?: string[] | null;
  learningMode?: number | undefined;
  lecturerId?: number;
  picture?: string | null;
}
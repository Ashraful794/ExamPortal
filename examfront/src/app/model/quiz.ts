import { Category } from "./category";

export class Quiz {
  id:string
  title:string;
  description:string;
  maxMarks:string;
  numberOfQuestions:string;
  active:boolean;
  category:Category;
}

export interface Exams {
 message:   string;
    questions: Question[];
}

export interface Question {
    answers:   Answer[];
    type:      string;
    _id:       string;
    question:  string;
    correct:  string;
    subject:   SubjectClass | null;
    exam:      Exam;
    createdAt: Date;
}

export interface Answer {
    answer: string;
    key:    string;
}



export interface Exam {
    _id:              string;
    title:            string;
    duration:          number;
    subject:         string;
    numberOfQuestions: number;
    active:            boolean;
    createdAt:         Date;
}



export interface SubjectClass {
    _id:      string;
    name:     string;
    icon:      string;
    createdAt: Date;
}





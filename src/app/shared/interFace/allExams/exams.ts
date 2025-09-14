export interface Exams {
 message:   string;
    questions: Question[];
}

export interface Question {
    answers:   Answer[];
    type:      Type;
    _id:       string;
    question:  string;
    correct:   Correct;
    subject:   SubjectClass | null;
    exam:      Exam;
    createdAt: Date;
}

export interface Answer {
    answer: string;
    key:    Correct;
}

export enum Correct {
    A1 = "A1",
    A2 = "A2",
    A3 = "A3",
    A4 = "A4",
    A5 = "A5",
}

export interface Exam {
    _id:               ID;
    title:             Title;
    duration:          number;
    subject:           SubjectEnum;
    numberOfQuestions: number;
    active:            boolean;
    createdAt:         Date;
}

export enum ID {
    The6700707030A3C3C1944A9C5D = "6700707030a3c3c1944a9c5d",
    The6700708D30A3C3C1944A9C60 = "6700708d30a3c3c1944a9c60",
    The670070A830A3C3C1944A9C63 = "670070a830a3c3c1944a9c63",
}

export enum SubjectEnum {
    The670037F6728C92B7Fdf434Fc = "670037f6728c92b7fdf434fc",
    The670038F7728C92B7Fdf43501 = "670038f7728c92b7fdf43501",
    The670039C3728C92B7Fdf43506 = "670039c3728c92b7fdf43506",
}

export enum Title {
    CSSQuiz = "CSS Quiz",
    HTMLQuiz = "HTML Quiz",
    JavaScriptQuiz = "JavaScript Quiz",
}

export interface SubjectClass {
    _id:       SubjectEnum;
    name:      Name;
    icon:      string;
    createdAt: Date;
}

export enum Name {
    CSS = "CSS",
    Javascript = "Javascript",
}

export enum Type {
    SingleChoice = "single_choice",
}


export interface Subjects {
  exams: any[];
      message:  string;
    metadata: Metadata;
    subjects: Subject[];
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
}

export interface Subject {
[x: string]: any;
    _id:       string;
    name:      string;
    icon:      string;
    createdAt: Date;
}
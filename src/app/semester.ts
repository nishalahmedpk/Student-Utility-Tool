export interface Subject {
    name: string;
    credits: number;
    grade: string;
}

export interface Semester {
    semName: string;
    subjects: Subject[];
}

export interface Ianswers{
    id: string;
    value: string;
    isChecked: boolean;
}

export interface IQuestionAndAnswers{
    id: string;
    question: string;
    listAnswers: Ianswers[]
}

export interface IBuilder{
    text : string;
    listQuestionAndAnswers: IQuestionAndAnswers[]
}
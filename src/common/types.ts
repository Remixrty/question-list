export interface IQuestionList {
    id: number | string;
    name: number | string;
    question?: string;
    is_passed: boolean;
}

export interface IActionList {
    icon: string;
    title: string;
    color: string;
}
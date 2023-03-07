import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const new_questions: Question[] = questions.filter(
        (q: Question): boolean => q.published
    );
    return new_questions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const new_questions: Question[] = questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0
    );
    return new_questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const new_questions: Question | undefined = questions.find(
        (q: Question): boolean => q.id === id
    );
    if (new_questions === undefined) {
        return null;
    }
    return new_questions;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const new_questions: Question[] = questions.filter(
        (q: Question): boolean => q.id !== id
    );
    return new_questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const just_names: string[] = questions.map((q: Question): string => q.name);
    return just_names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const just_points: number[] = questions.map(
        (q: Question): number => q.points
    );
    const sum: number = just_points.reduce(
        (val: number, sum: number): number => val + sum,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const just_published: Question[] = questions.filter(
        (q: Question): boolean => q.published === true
    );
    const just_points: number[] = just_published.map(
        (q: Question): number => q.points
    );
    const sum: number = just_points.reduce(
        (val: number, sum: number): number => val + sum,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const CSV_questions: string[] = questions.map(
        (q: Question): string =>
            q.id.toString() +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points.toString() +
            "," +
            q.published
    );
    const CSV_string: string = CSV_questions.join("\n");
    return "id,name,options,points,published\n" + CSV_string;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const q_answers: Answer[] = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return q_answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const all_qs_published: Question[] = questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
    return all_qs_published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const all_short_answer: boolean = questions.every(
        (q: Question): boolean => q.type === "short_answer_question"
    );
    const all_multiple_choice: boolean = questions.every(
        (q: Question): boolean => q.type === "multiple_choice_question"
    );
    return all_short_answer || all_multiple_choice;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const new_questions: Question[] = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    new_questions.push(makeBlankQuestion(id, name, type));
    return new_questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const new_questions: Question[] = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    const qs_with_new_name: Question[] = new_questions.map(
        (q: Question): Question => ({
            ...q,
            name: q.id === targetId ? newName : q.name
        })
    );
    return qs_with_new_name;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const new_questions: Question[] = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    const new_question_type: Question[] = new_questions.map(
        (q: Question): Question => ({
            ...q,
            type: q.id === targetId ? newQuestionType : q.type
        })
    );
    const new_question_options: Question[] = new_question_type.map(
        (q: Question): Question => ({
            ...q,
            options:
                q.id === targetId && q.type === "short_answer_question"
                    ? []
                    : q.options
        })
    );
    return new_question_options;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const addToIndex = (q: Question): string[] => {
        const options_array = [...q.options];
        options_array.splice(targetOptionIndex, 1, newOption);
        return options_array;
    };
    const new_questions: Question[] = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    if (targetOptionIndex === -1) {
        const option_end_of_list: Question[] = new_questions.map(
            (q: Question): Question => ({
                ...q,
                options:
                    q.id === targetId ? [...q.options, newOption] : q.options
            })
        );
        return option_end_of_list;
    } else {
        const option_middle_of_list: Question[] = questions.map(
            (q: Question): Question => ({
                ...q,
                options:
                    q.id === targetId && targetOptionIndex !== -1
                        ? addToIndex(q)
                        : q.options
            })
        );
        return option_middle_of_list;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copy: Question[] = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    const index_targetID: number = copy.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const newQ: Question = duplicateQuestion(newId, copy[index_targetID]);
    copy.splice(1 + index_targetID, 0, newQ);
    return copy;
}
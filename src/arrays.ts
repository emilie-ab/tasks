/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbers2: number[] = [];
    if (numbers.length === 0) {
        return numbers2;
    }
    const first: number = numbers[0];
    if (numbers.length === 1) {
        numbers2.push(first);
        numbers2.push(first);
    } else {
        const last: number = numbers[numbers.length - 1];
        numbers2.push(first);
        numbers2.push(last);
    }
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbers2: number[] = numbers.map((val: number): number => val * 3);
    return numbers2;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbers2: number[] = numbers.map((val: string): number =>
        isNaN(+val) ? 0 : +val
    );
    return numbers2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts2: number[] = amounts.map((val: string): number =>
        val.startsWith("$") ? +val.substring(1) : +val
    );
    const amounts3: number[] = amounts2.map((val: number): number =>
        isNaN(val) ? 0 : val
    );
    return amounts3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messages2: string[] = messages.filter(
        (val: string): boolean => !val.endsWith("?")
    );
    const messages3: string[] = messages2.map((val: string): string =>
        val.endsWith("!") ? val.toUpperCase() : val
    );
    return messages3;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const words2: string[] = words.filter(
        (val: string): boolean => val.length < 4
    );
    return words2.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colors2 = colors.every(
        (val: string): boolean =>
            val === "red" || val === "blue" || val === "green"
    );
    return colors2;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const add = addends.reduce(
            (val: number, sum: number): number => sum + val,
            0
        );
        const message: string = addends.join("+");
        return add.toString() + "=" + message;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const index_first_negative: number = values.findIndex(
        (val: number): boolean => val < 0
    );
    let pos_numbers: number[] = [];
    let end_numbers: number[] = [];
    if (index_first_negative === -1) {
        pos_numbers = values.filter(
            (val: number): boolean => values.indexOf(val) <= values.length
        );
    } else {
        pos_numbers = values.filter(
            (val: number): boolean => values.indexOf(val) < index_first_negative
        );
        end_numbers = values.filter(
            (val: number): boolean => values.indexOf(val) > index_first_negative
        );
    }
    if (pos_numbers.length === 0) {
        const zero = 0;
        if (index_first_negative !== -1) {
            pos_numbers.push(values[index_first_negative]);
        }
        pos_numbers.push(zero);
    } else {
        const add = pos_numbers.reduce(
            (val: number, sum: number): number => sum + val,
            0
        );
        if (index_first_negative === -1) {
            pos_numbers.push(add);
        } else {
            pos_numbers.push(values[index_first_negative]);
            pos_numbers.push(add);
        }
    }
    end_numbers.map((val: number): number => pos_numbers.push(val));
    return pos_numbers;
}

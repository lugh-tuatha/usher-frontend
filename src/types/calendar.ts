interface Sunday {
    week_no: number;
    date: string;
}

export interface CalendarResponseHttpData {
    [monthName: string]: Sunday[]; // Each month maps directly to an array of Sundays
}
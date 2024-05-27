export function convertDateString(inputDateString: string): string {
    const date: Date = new Date(inputDateString);

    const formattedDate: string = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(date);

    return formattedDate;
}


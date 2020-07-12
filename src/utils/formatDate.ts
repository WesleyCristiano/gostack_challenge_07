export default function formatDate(timestamp: string):string{
    const date = new Date(timestamp)
    const month = Number(date.getMonth()) + 1;

    return `${date.getDate().toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${date.getFullYear()}`
}
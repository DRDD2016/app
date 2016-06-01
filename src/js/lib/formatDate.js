export default function formatDate (date, full) {

    if (full) {

        return moment(date).format('dddd Do MMMM YYYY');
    } else {

        return moment(date).format('Do MMMM');
    }
}

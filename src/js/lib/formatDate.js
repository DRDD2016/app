export default function formatDate (date, full) {

    if (full ) {

        return moment(date).format('LL');
    } else {

        return moment(date).format('Do MMMM');
    }
}

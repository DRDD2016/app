import moment from 'moment';
moment.locale('en-gb');

export default function formatDate (date, full) {

    if (date === "") {
        return date;
    }
    if (full) {

        return moment(date).format('ddd Do MMMM YYYY');
    } else {

        return moment(date).format('Do MMM');
    }
}

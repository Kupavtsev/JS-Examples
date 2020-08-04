// 7:12

// dd.mm.yy 
// getMonth + 1 чтобы январь стал первым...
function formatDate(date) {
    let day = makeTwoDigit(date.getDate());
    let month = makeTwoDigit(date.getMonth() + 1);
    let year = date.getFullYear();
    let hours = makeTwoDigit(date.getHours());
    let minutes = makeTwoDigit(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function makeTwoDigit(value) {
    let newValue = value;
    if (value < 10) {
        newValue = '0' + value;
    }
    return newValue;
}

const date = new Date('2007-06-02T05:15');
console.log(formatDate(date));

// 12:44
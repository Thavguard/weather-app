export const useGetCurrentDate = (date) => {
    let dateNow = new Date();
    let dateToday = dateNow.getDate()
    let day = date.slice(8)
    let mouth = date.slice(5, 7)
    let year = date.slice(0, 4)
    let isToday = ""
    let mouthNow = ""
    let dateOfWeekNumber = dateNow.getDay()
    let dateOfWeek = ""

    if (day == dateToday) {
        isToday = "Сегодня"
    } else if (day - dateToday === 1) {
        isToday = "Завтра"
    } else {
        if (dateOfWeekNumber == 3) {
            isToday = "Вс"
        } else if (dateOfWeekNumber == 2) {
            isToday = "Пн"
        } else if (dateOfWeekNumber == 1) {
            isToday = "Вт"
        } else if (dateOfWeekNumber == 0) {
            isToday = "Ср"
        } else if (dateOfWeekNumber == 6) {
            isToday = "Чт"
        } else if (dateOfWeekNumber == 5) {
            isToday = "Пн"
        } else if (dateOfWeekNumber == 4) {
            isToday = "Сб"
        }
    }

    if (mouth == "01") {
        mouthNow = "Jan"
    } else if (mouth == "02") {
        mouthNow = "Feb"
    } else if (mouth == "03") {
        mouthNow = "March"
    } else if (mouth == "04") {
        mouthNow = "Apr"
    } else if (mouth == "05") {
        mouthNow = "May"
    } else if (mouth == "06") {
        mouthNow = "June"
    } else if (mouth == "07") {
        mouthNow = "July"
    } else if (mouth == "08") {
        mouthNow = "Aug"
    } else if (mouth == "09") {
        mouthNow = "Sep"
    } else if (mouth == "10") {
        mouthNow = "Oct"
    } else if (mouth == "11") {
        mouthNow = "Nov"
    } else if (mouth == "12") {
        mouthNow = "Dec"
    }





    return { dateToday, day, mouth, year, isToday, mouthNow, dateOfWeek, dateOfWeek }
}
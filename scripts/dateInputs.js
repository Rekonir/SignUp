const fieldDateOfBirth = document.getElementById('Date');
const isAndroid = true
const fieldStyle = window.getComputedStyle(fieldDateOfBirth);
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if (window.Intl && window.Intl.DateTimeFormat) {
    try {
        let formatter = new window.Intl.DateTimeFormat([], { month: 'long', timeZone: 'UTC' });
        let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
            let mm = month < 10 ? '0' + month : month;
            return new Date('0000-' + mm + '-01T00:00:00+00:00');
        });
        month_names = months.map(date => formatter.format(date));
    } catch (e) { }
}

if (isAndroid) {
    const dateWrapper = document.createElement('div');
    dateWrapper.id = 'date-select-wrapper';
    fieldDateOfBirth.parentNode.appendChild(dateWrapper);

    const dateFieldDay = document.createElement('select');
    const dateFieldMonth = document.createElement('select');
    const dateFieldYear = document.createElement('select');

    const dateFields = [dateFieldYear, dateFieldMonth, dateFieldDay];

    // copy over styles from text input
    if (fieldStyle) {
        let styleOptions = ['boxSizing', 'backgroundColor', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'height', 'font', 'verticalAlign'];
        styleOptions.forEach(function (s) {
            if (fieldStyle[s]) {
                dateFields.forEach(function (f) {
                    f.style[s] = fieldStyle[s];
                });
            }
        });
    }
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const emptyDayOption = document.createElement('option');
    emptyDayOption.value = '';
    emptyDayOption.textContent = currentDay;
    dateFieldDay.add(emptyDayOption);
    const emptyMonthOption = document.createElement('option');
    emptyMonthOption.value = '';
    emptyMonthOption.textContent = month_names[currentMonth];
    dateFieldMonth.add(emptyMonthOption);
    const emptyYearOption = document.createElement('option');
    emptyYearOption.value = '';
    emptyYearOption.textContent = currentYear;
    dateFieldYear.add(emptyYearOption);

    const dayOptions = [emptyDayOption];
    for (let i = 1; i <= 31; i++) {
        let newOption = document.createElement('option');
        newOption.value = (i < 10 ? '0' : '') + i;
        newOption.textContent = i;
        dayOptions.push(newOption);
        dateFieldDay.add(newOption);
    }

    const monthOptions = [emptyMonthOption];
    for (let i = 0; i < month_names.length; i++) {
        let newOption = document.createElement('option');
        newOption.value = (i < 9 ? '0' : '') + (i + 1);
        newOption.textContent = month_names[i];
        monthOptions.push(newOption);
        dateFieldMonth.add(newOption);
    }

    const yearEnd = new Date().getFullYear();
    const yearStart = yearEnd - 120;
    const yearOptions = [emptyYearOption];
    for (let i = yearEnd; i >= yearStart; i--) {
        let newOption = document.createElement('option');
        newOption.value = i;
        newOption.textContent = i;
        yearOptions.push(newOption);
        dateFieldYear.add(newOption);
    }

    dateWrapper.appendChild(dateFieldDay);
    dateWrapper.appendChild(dateFieldMonth);
    dateWrapper.appendChild(dateFieldYear);

    const dateChangeHandler = function () {
        const month = parseInt(dateFieldMonth.value, 10);
        const year = parseInt(dateFieldYear.value, 10);
        let maxDays = 31;

        if (month === 2) {
            const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
            maxDays = isLeapYear ? 29 : 28;
        } else if ([2, 4, 6, 9, 11].indexOf(month) >= 0) {
            maxDays = 30;
        }

        dayOptions.filter(function (o, i) {
            o.hidden = i > maxDays;
            if (o.hidden && o.selected) {
                emptyDayOption.selected = true;
            }
        });

        let allSet = true;
        dateFields.forEach(field => {
            const isEmpty = !field.value;
            if (isEmpty) {
                allSet = false;
            }
            field.classList[isEmpty ? 'add' : 'remove']('show-placeholder');
        });

        if (allSet) {
            fieldDateOfBirth.value = dateFields.map(function (field) {
                return field.value;
            }).join('-');
        } else {
            fieldDateOfBirth.value = '';
        }
    };

    if (fieldDateOfBirth.value) {
        const ymd = fieldDateOfBirth.value.split('-');
        yearOptions.filter(function (o) {
            if (o.value === ymd[0]) {
                o.selected = true;
            }
        });
        monthOptions[parseInt(ymd[1], 10)].selected = true;
        dayOptions[parseInt(ymd[2], 10)].selected = true;
    }


    dateFieldDay.value = (currentDay < 10 ? '0' : '') + currentDay;
    dateFieldMonth.value = (currentMonth < 9 ? '0' : '') + (currentMonth + 1);
    dateFieldYear.value = currentYear;

    dateFieldDay.options[0].disabled = true;
    dateFieldMonth.options[0].disabled = true;
    dateFieldYear.options[0].disabled = true;

    dateChangeHandler();
}

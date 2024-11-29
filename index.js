var moment = require('moment');
const moment = require("moment");

moment.locale('es'); // Configurando el lenguaje a español
moment.weekdays(true).forEach(function (dia) {
    console.log(dia);
});


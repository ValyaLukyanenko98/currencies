
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var requestURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

var volute;

request.onload = function() {
    volute = request.response;
    console.log(request.response);
   afterResponce();
};


function afterResponce () {
    var mas =  Object.values(volute.Valute);
    var table = document.getElementById('table');
    for(var i=0; i < mas.length; i++) {
        let tr = document.createElement('tr');
        let tdNumber = document.createElement('td');
        let tdName = document.createElement('td');
        let tdValue = document.createElement('td');
        let tdPrevious = document.createElement('td');
        tdName.innerText = mas[i].Name;
        tdValue.innerText = mas[i].Value;
        var difference = (mas[i].Value - mas[i].Previous).toFixed(2);
        tdPrevious.innerText = difference;
        if (difference < 0) {
            tdPrevious.style.background = "#99FF99";
        } else {
            tdPrevious.style.background = "#FF9999";
        }
        tdNumber.innerText = i + 1;
        tr.appendChild(tdNumber);
        tr.appendChild(tdName);
        tr.appendChild(tdValue);
        tr.appendChild(tdPrevious);
        table.appendChild(tr);
    };  
    var date = document.getElementById('date');
    date.innerText = "Дата " + volute.Date;
    date.innerText = date.innerText.substr(0, 15);
};

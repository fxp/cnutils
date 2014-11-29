var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", 'http://ip-api.com/json', false);
xmlHttp.send(null);
var result = JSON.parse(xmlHttp.responseText)
var fontSrc = (('China' === result.country) ?
        'http://fonts.useso.com' :
        'https://fonts.googleapis.com') +
    '/css?family=Open+Sans:300italic,400italic,600italic,400,300,600|Merriweather:700'
var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = fontSrc;
console.log(fontSrc)
document.head.appendChild(linkElement);

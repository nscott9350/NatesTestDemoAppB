$.ajax({
    url: 'http://appb.example.com:8080/RestWebService/rest/hello',
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function(data){
        alert('Application ' + data.application + ' is ALIVE!!');
    }
});
app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://SAG-FVDCSG3:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "27-08-2024 18:39:33 IST";
}
this.getPackageInfo = function(){
 return{"packageName":"OrderHistory","createdDate":"08-08-2024 15:29:27 IST","version":"1.0"};
}
});

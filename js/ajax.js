(function(global){
    var utils={};
    function getRequestObject(){
        if(window.XMLHttpRequest){
            return (new XMLHttpRequest);
        }
        else if(window.ActiveXObject){
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax is not supported");
            return (null);
        }
    }

    utils.sendGetRequest=function(requestUrl, responseHandler, isJsonReaponse){
        var request=getRequestObject();
        request.onreadystatechange=function(){
            handleResponse(request, responseHandler, isJsonReaponse);
        };
        request.open("GET",requestUrl,true);
        request.send(null);
    };

    function handleResponse(request,responseHandler){
        if((request.readyState==4) && (request.status==200)){
            responseHandler(request);
        }
    }

    global.$utils=utils;
    
})(window);
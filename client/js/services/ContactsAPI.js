app.factory("ContactsAPI", function($http,config){

    return {
        getContacts : function(){
            return $http.get(config.baseUrl + "?filter=contact_list");
        },
        saveContact : function(contact){
            return $http.post(config.baseUrl , contact);
        },
        removeContact : function(contact){
            return $http.delete(config.baseUrl  + "?id=" + contact.id );
        }
    };
    
});
var rootRef = firebase.database().ref().child('Gebruikers');
var friendRef = firebase.database().ref().child('Vrienden');
var urlRef = firebase.database().ref().child('VorigeURL');

var CreateAdmin = function(){
    
    var nameAccount = document.getElementById('naam').value;
    var e = document.getElementById('Permissions');
    var Rechten = e.options[e.selectedIndex].value;
    
    var Settings = {
        naam: nameAccount,
        rechten: Rechten,
        status: 'Online',    
    };

    var init = function() {
            AddUser();
    };
    return {
        init: init
    };
    
    function CreateID(){
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 1; i++)
        text += "Vriendtoevoegen";
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text; 
    };
    
    function UpdateURL(){
        urlRef.set({
           "URL": "/index.html"
        });
    };
    

    function AddUser(){

        rootRef.push({
               "Rechten": Settings.rechten,
               "Naam": Settings.naam,
                "ConnectID": CreateID(),
                "Status": Settings.status
            });
        UpdateURL();
        location.href = "main.html";
    }; 
}

var CreateExtra = function(){
    
    var nameAccount = document.getElementById('naam').value;
    var e = document.getElementById('Permissions');
    var Rechten = e.options[e.selectedIndex].value;
    var ConnectCode = document.getElementById('koppeling').value;
    
    var Settings = {
        naam: nameAccount,
        rechten: Rechten,
        status: 'Online', 
        ConnectFriend: ConnectCode
    };

    var init = function() {
            AddUser();
    };
    return {
        init: init
    };
    
    function CreateID(){
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text; 
    };
    
    function UpdateURL(){
        urlRef.set({
           "URL": "/add.html"
        });
    };
    

    function AddUser(){

        friendRef.push({
               "Connection": Settings.ConnectFriend,
               "Rechten": Settings.rechten,
               "Naam": Settings.naam,
                "Status": Settings.status,
            });
        UpdateURL();
        location.href = "main.html";
    }; 
    
}







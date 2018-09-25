/*
 fichier scritp JS de Rado
*/


function myFunction() {
    setTimeout(function(){  
                    //here is confirm box code only
                         var txt = ""; 
                         if (confirm("Press a button!")) {
                            txt = "You pressed OK!"; // ---> here we add Url and open new browser page
                         } 
                         else {
                            txt = "You pressed Cancel!"; // --> here nothing to do
                            }
                   // end of Confirm box
                         }, 3000);
       // end of setTimeout
}



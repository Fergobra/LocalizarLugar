        function registrar(){
            //usuario = document.getElementById('usuario').value;  //igualando el input usuario a variable usuario
            //contraseña = document.getElementById('contra').value; //igualando input contraseña a variable contraseña
            //localStorage.setItem('usuario', usuario);   //guardando usuario en almacenamiento local
            //localStorage.setItem('contra', contraseña); //guardando contraseña en almacenamiento local
            //alert('estás registrado');
            //window.location.assign('inicio.html');
            usuario = document.getElementById('usuario').value;  //igualando el input usuario a variable usuario
            contraseña = document.getElementById('contra').value; //igualando input contraseña a variable contraseña
            
            contador = 1;

           // localStorage.setItem('contador', 1);
            
            contador= localStorage.getItem('contador', contador);
            contador++; 
            localStorage.setItem('usuario'+contador,usuario);
            localStorage.setItem('contraseña'+contador,contraseña);
            
                       
            localStorage.setItem('contador',contador);
            
            alert('estás registrado');
            window.location.assign('inicio.html');
            
        }
            
        function mostrar(){
            mostrarcontra = localStorage.getItem('contraseña');
            mostrarusuario = localStorage.getItem('usuario');
            alert(mostrarcontra + mostrarusuario);
        }
        function iniciar(){
            contador = localStorage.getItem('contador');
            valusuario = localStorage.getItem('usuario'+ contador);
            valcontra = localStorage.getItem('contraseña'+ contador);
            usuario = document.getElementById('usuario').value;  //igualando el input usuario a variable usuario
            contraseña = document.getElementById('contraseña').value; //igualando input contraseña a variable contraseña
            if (usuario == valusuario && contraseña == valcontra){
                 window.location.assign('inicio.html');
            }
            else {
                alert('Usuario o contraseña incorrecta ):');
            }
        }
        
        function editar1(){
 //obtener la posición actual y llamar a la función  "localitation" cuando tiene éxito
            navigator.geolocation.getCurrentPosition(verPosicion); //le pido al navegador que me de la localización y ejecuto otra funcion
        }
        function verPosicion(posicion){
            contador = localStorage.getItem('contador');
            localStorage.setItem('long'+contador,posicion.coords.longitude); //guardo en localstorage la longitud
            localStorage.setItem('lat'+contador,posicion.coords.latitude)  // ¿guardo en localstorage la latitude
            nombrelu = document.getElementById('name').value;  //igualando el input usuario a variable usuario
            notalu = document.getElementById('nota').value;
            localStorage.setItem('name'+contador,nombrelu);
            localStorage.setItem('nota'+contador,notalu);
            contador ++;
            localStorage.setItem('contador',contador);
            alert("ha sido guardado correctamente")     //le digo al usuario que se guardo chido
            
        }
   
        
        function cargarnotas(){
            
          //  document.getElementById('lugares').innerHTML = "";
                cont = localStorage.getItem('contador');
            
            for(i=1; i<cont; i++){
                contenedorLugares = document.getElementById('lugares');
                
                latitud =   localStorage.getItem('lat'+i);
                longitud = localStorage.getItem('long'+i);
                nombre = localStorage.getItem('name'+i);
                notas = localStorage.getItem('nota'+i);
               
                
                contenedorLugares.innerHTML +="<div class='lugares-guardados'>" + "<img class='mapaa'src='http://maps.google.com/maps/api/staticmap?center="+latitud+","+longitud+"&zoom=15&markers="+latitud+","+longitud+"&size=325x175'>" +"<p>Lugar: "+nombre+"</p>"+"<p>Nota: "+notas+"</p></div>";
                
                

            }

        }
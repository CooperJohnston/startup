function display(){
        const user = document.getElementById("Usa");
        const name = localStorage.getItem("userName");
        user.textContent = 'Username: ' + name;}

display();
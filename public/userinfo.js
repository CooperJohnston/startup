function display(){
        const user = document.getElementById("Usa");
        const name = localStorage.getItem("userName");
        user.textContent = 'Username: ' + name;
        const facts = document.createElement("ul");
        const l = document.createElement('li');
        l.textContent = "I have given " + Object.keys(JSON.parse(localStorage.getItem("Reviews"))).length + " total ratings";
        facts.appendChild(l);
        user.appendChild(facts);}
function logout(){
        localStorage.clear();
        window.location.href = "index.html";
}
display();
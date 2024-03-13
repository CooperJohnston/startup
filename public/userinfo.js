function display(){
        fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
        const user = document.getElementById("Usa");
        const name = localStorage.getItem("userName");
        user.textContent = 'Username: ' + name;

        const facts = document.createElement("ul");
        const l = document.createElement('li');
        //saved to local storage at this time because users arent created yet
        l.textContent = "I have given " + Object.keys(JSON.parse(localStorage.getItem("Reviews"))).length + " total ratings";
        facts.appendChild(l);
        const b = document.createElement('li');
        b.textContent = "Comic book qoute of the day: " + "'" + data.content + "'";
        facts.appendChild(b);
        user.appendChild(facts);
    })}

function logout(){
        localStorage.clear();
        window.location.href = "index.html";
}
display();
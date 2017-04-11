
var socket = io("http://localhost:3000");

socket.on("disconnect", function () {
    setTitle("Disconnected");
});

socket.on("connect", function () {
    setTitle("Connected to Cyber Chat");
});

socket.on("message", function (message) {
    printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    var username = document.getElementById("username");
    if (username.value !== "") {
        printMessage('You: ' + input.value);
        socket.emit("chat", `${username.value}: ${input.value}`);
        input.value = '';
    } else {
        alert("Please Type Username");
    }
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}

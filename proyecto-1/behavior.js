const { spawn } = require("child_process");

NodeList.prototype.last = function() {
    return this[this.length -1];
}

const submitCallback = function(event) {
    event.preventDefault();
    const { document } = window;
    const command = event.target.lastElementChild.value.split(" ");

    const formElement = document
        .querySelectorAll("body > form")
        .last()
    ;

    formElement.insertAdjacentHTML("afterend", "<form><span>[project-1-terminal]$</span><input autofocus/></form>");

    if(command.length && command[0]) {
        const execution = spawn(command.shift(), command);
        const { stdout, stderr } = execution;
        stdout.setEncoding('utf8');
        stderr.setEncoding('utf8');
        
        stdout.on('data', data => formElement.lastElementChild.insertAdjacentHTML("afterend", `<pre>${data}</pre>`));
        stderr.on('data', data => formElement.lastElementChild.insertAdjacentHTML("afterend", `<pre>${data}</pre>`));
        execution.on('error', data => formElement.lastElementChild.insertAdjacentHTML("afterend", `<pre>${data.toString()}</pre>`));
    }

    document.querySelectorAll("body > form").last().onsubmit = submitCallback;

    document
        .querySelectorAll("body > form > input")
        .last()
        .focus()
    ;
}

window.document.querySelector("body > form").onsubmit = submitCallback;
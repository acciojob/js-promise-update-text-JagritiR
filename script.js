//your JS code here. If required.
function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello, world!');
        }, 1000);
    });
}

greet().then(message => {
    document.getElementById('output').innerText = message;
});

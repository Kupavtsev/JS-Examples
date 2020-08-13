function learnJS(lang, callback) {
    console.log("I'm learning " + lang);
    callback();
}

function done() {
    console.log("I have passed 3rd lesson")
}

learnJS("JavaScript", done );

// CB позволяют нам быть уверенными, что определенный код не будет вызван,
// пока другой код не завершит свое исполнение
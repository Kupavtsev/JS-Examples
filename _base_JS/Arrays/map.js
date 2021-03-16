["Dmitry", "Andrey", "Viktor", "Sveta", "Sasha"]

// Absolutly the same logic as in Python
let newArray = oldArray.map((el) => {
    if (isMaleName(el)) {
        return 1;
    }   else {
        return 0;
    }
});

[1, 1, 1, 0, 0]



// Ternar expression
let newArray = oldArray.map((el) => {
    return isMaleName(el) ? 1 : 0;
})

// If we have only one action in function, we can remove "return"
let newArray = oldArray.map( name  => isMaleName(name) ? 1 : 0);

// To make html tags. Concatanation of strings
let newArray = oldArray.map( name => {
    return "<li>" + name + "<li>";
})
// echo
// ["<li>Dmitry</li>", "<li>Andrey</li>", "<li>Viktor</li>", "<li>Sveta</li>", "<li>Sasha</li>",]

// String format
let newArray = oldArray.map( name => {
    return `<li>${name}</li>`;
});

// One string format (without "return")
let newArray = oldArray.map( name => `<li>${name}<il>`);


// Make an object with "map"
// ["blabla", "hello", "hi"]
let newArray = oldArray.map( el => {
    return {
        eng: el,
        ru: translateIntoRu(el)
    }
});
//[{eng: "blabla", ru: "БЛАБЛА"}, {eng: "hello", ru: "привет"}, {eng: "hi", ru: "здарова"}]

// The same in one string (without "return")
let newArray = oldArray.map((word) => ({
    eng: word,
    ru: translateIntoRu(word)
}));


// Array of objects to Array of JSX elements
//[{eng: "blabla", ru: "БЛАБЛА"}, {eng: "hello", ru: "привет"}, {eng: "hi", ru: "здарова"}]
let newArray = oldArray.map( el => (
    <Message eng={el.eng} ru={el.ru} /> ))
// [<Message eng="blabla" ru: "БЛАБЛА" />, <Message eng: "hello" ru: "привет" />,
// <Message eng: "hi" ru: "здарова" />]
function reverseStr(word) {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    return newWord;
};

console.log(reverseStr(process.argv[2]));


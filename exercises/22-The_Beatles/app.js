function sing(){
    let letter = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) letter += 'whisper words of wisdom, ';
        else if (i === 10) letter += 'there will be an answer, let it be';
        else letter += 'let it be, ';
    }
    return letter;
}
console.log(sing());
//Your code above ^^^
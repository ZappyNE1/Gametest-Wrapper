// converts string to rainbow text by char
export function toRainbow(text:string)
{
    let rainbowCode = ['§4', '§c', '§6', '§e', '§g', '§2', '§a', '§b', '§3', '§9', '§5', '§d']; // §r
    const letter = text.replace(/§./g, '').split('');
    let newMessage = '', rainbowIndex = 0;
    letter.forEach(letter => {
        if (letter !== ' ') {
            newMessage += `${rainbowCode[rainbowIndex]}${letter}`;
            rainbowIndex + 1 >= rainbowCode.length ? rainbowIndex = 0 : rainbowIndex++;
        }
        else
            newMessage += ' ';
    });
    return newMessage;
}

export function textToBinary(text:string) {
    return text.split('').map((char) => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

export function binaryToText(binary:string) 
{
    var newBin = binary.split(" ");
    var binCode = [];
    for (let i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}
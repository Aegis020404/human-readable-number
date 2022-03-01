module.exports = function toReadable (n) {
    if(!n) return 'zero'
    let simple = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenner = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    str = (n+'').split('')
    let hund = str[str.length-3] ? simple[str[str.length-3]] +' hundred' : ''
    let dec = +str.slice(-2).join('')
    if(n<20 || dec < 20) return (hund +' '+ simple[dec]).trim()
    return (hund +' '+ tenner[str[str.length-2]] +  ' ' + simple[str[str.length-1]]).trim()
}

// let codon = "TTACCACTTTAACGAAGATCTGCTAGTGGATCGAACATTAGT"
// let codon = "TTTTTTTTTTTTTTTTTTT"
// let rCodon = codon.split("").reverse().join("")

let translate = str => {
    let tStr = str.replace(/A/g, 'U')
    tStr = tStr.replace(/T/g, 'A')
    tStr = tStr.replace(/G/g, 'F')
    tStr = tStr.replace(/C/g, 'G')
    tStr = tStr.replace(/F/g, 'C')
    return tStr;
}

let exportRNA = str => {
    let tRNA = translate(str.split("").reverse().join(""))
    let startSearch = new RegExp("(AUG.+)")
    let endSearch = new RegExp("END$")
    let arr
    try {
        arr = startSearch.exec(tRNA)[0].split("")
    } catch (e) {
        console.log("개시코돈을 찾을 수 없습니다")
        return;
    }
    let result = ""
    for (let i = 0; i < arr.length - 2; i+=3) {
        if (arr[i] == 'U') {
            if (arr[i+1] == 'U')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "F - "
                else result += "L - "
            if (arr[i+1] == 'C') result += "S - "
            if (arr[i+1] == 'A')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "Y - "
                else { result += "END"; break; }
            if (arr[i+1] == 'G')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "C - "
                else if (arr[i+2] == 'A') { result += "END"; break; }
                else result += "W"
        }
        if (arr[i] == 'C') {
            if (arr[i+1] == 'U') result += "L - "
            if (arr[i+1] == 'C') result += "P - "
            if (arr[i+1] == 'A')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "H - "
                else result += "Q - "
            if (arr[i+1] == 'G') result += "R - "
        }
        if (arr[i] == 'A') {
            if (arr[i+1] == 'U')
                if (arr[i+2] == 'G') result += "M - "
                else result += "I - "
            if (arr[i+1] == 'C') result += "T - "
            if (arr[i+1] == 'A')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "N - "
                else result += "K - "
            if (arr[i+1] == 'G')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "S - "
                else result += "R - "
        }
        if (arr[i] == 'G') {
            if (arr[i+1] == 'U') result += "V - "
            if (arr[i+1] == 'C') result += "A - "
            if (arr[i+1] == 'A')
                if (arr[i+2] == 'U' || arr[i+2] == 'C') result += "D - "
                else result += "E - "
            if (arr[i+1] == 'G') result += "G - "
        }
    }
    if (endSearch.test(result)) {
        console.log(result)
        console.log(arr.join(""))
    } else console.log("종결코돈을 찾을 수 없습니다");
}

let a = "TTACCACTTTAACGAAGATCTGCTAGTGGATCGAACATTAGT"
let b = "TTTTTTTTTTTTTTT"
let rA = a.split("").reverse().join("")

exportRNA(a)
exportRNA(b)
exportRNA(rA)

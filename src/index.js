module.exports = function toReadable(number) {
    let res = ''
    let firstDec = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    let from20to100 = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }


    if (number < 20) {
        res = firstDec[number]
        return res
    }
    let stringNumber = number.toString()
    let arrNumber = [...stringNumber]

    if (number < 100) {
        arrNumber[0] = arrNumber[0] + '0';
        if (arrNumber[1] === '0') {
            res = from20to100[arrNumber[0]]
        } else {
            res = from20to100[arrNumber[0]] + ' ' + firstDec[arrNumber[1]]
        }
        return res
    }

    if (arrNumber[1] === '1') {
        let a = Number(arrNumber[1] + arrNumber[2])
        res = `${firstDec[arrNumber[0]]} hundred` + ' ' + firstDec[a]
    } else if (arrNumber[2] === '0') {
        arrNumber[1] = arrNumber[1] + '0';
        res = `${firstDec[arrNumber[0]]} hundred` + ' ' + from20to100[arrNumber[1]]
    } else {
        arrNumber[1] = arrNumber[1] + '0';
        res = `${firstDec[arrNumber[0]]} hundred` + ' ' + from20to100[arrNumber[1]] + ' ' + firstDec[arrNumber[2]]
    }
    let arr = res.split(' ')
    arr.forEach((item, index) => {
        if (item === 'undefined') {
            arr.splice(index, 1)
        }
    })
    res = arr.join(' ')
    return res
}

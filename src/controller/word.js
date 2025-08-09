
export const convert = (num) => {
const word = num.toString()


const number = [
    ["واحد","اثنين","ثلاثه","اربعه","خمسه","سته","سبعة","ثمانية","تسعة"],
    ["عشر","عشرون","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"],
]
    const number_2 = [
        ["مائة","مائتين","ثلاثمائه","أربعمائة","خمسمائه","ستمائه","سبعمائه","ثمانمائه","تسعمائه"],
        ["الف","الفين","ثلاث الالاف","أربع الالاف","خمس الالاف","ست الالاف","سبع الالاف","ثمان الالاف","تسع الالاف"]
    ]
    const number_3 = [
        ["مليون","مليونان","ثلاث ملايين","أربعة ملايين","خمسة ملايين","ستة ملايين","سبعة ملايين","ثمان ملايين","تسع ملايين"]
    ]

    let str = ""
    const words = Array.from(word)

    if (words.length > 6 ){
        const million = words.splice(0,1)
        million.forEach((item,index)=> {
            str = str + number[index][item - 1 ]+ " "
        })
        str = str + " مليون "
    }
    let changer = 0
    if (words.length > 5) {
        const hundred_thousand = words.splice(0,1)
        hundred_thousand.forEach((item,index)=> {
            if (number_2[index][item-1] !== undefined) {
                str = str + number_2[index][item - 1] + " "
                changer++
            }
        })
    }

    if (words.length > 4) {
        const thousands = words.splice(0, 2)

        if (thousands)
            thousands.reverse().forEach((item, index) => {
                if (number_2[index][item-1] !== undefined) {
                    str = str + number[index][item - 1] + " "
                    changer++
                }
            })
        if (changer != 0)
        str = str + " الف "
    }
        const last = words.splice(-2)
    console.log(last)
    let indexDown = words.length
    if (words)
        words.forEach((item, index) => {
            if (number_2[indexDown -1 ][item - 1 ] !== undefined) {
                str = str + number_2[indexDown - 1][item - 1] + " ";
                indexDown = indexDown - 1
            }
        })
    if (last){
        str = str + " و "
        last.reverse().forEach((item, index) => {
            if (number[index][item - 1])
            str = str + number[index][item - 1]+  " ";
        })
    }

    return str
}

// export default convert
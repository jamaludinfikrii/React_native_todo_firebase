
var obj = {
    1 : {
        todo : 'Makan',
    },
    2 : {
        todo : "Minum",
    },
    3 : {
        todo : "Mandi"
    }
}

// console.log(obj.index.todo);

Object.keys(obj).map((val) => {
    console.log(obj.[val].todo)
})

// for(var key in obj){
//     console.log(obj[key].todo)
// }

Object.keys(obj).map((val) => {
    console.log(obj[val].todo)
})



// var obj2 = {
//     nama : 'Fikri'
// }

// obj2.nama
// obj2['nama']



// obj3 = {
//     nama : "fikri",
//     pekerjaan : "karyawan"
// }
// for(var key in obj3){
//     console.log(obj3[key])

// }








var arr = []

arr.push('makanss')

let op = document.getElementById("output")
let btns = document.querySelectorAll('.btns');
let exp = document.querySelectorAll('.exp');
let t = document.getElementById("textbar")
let e = document.getElementById("btneq")
let c = document.getElementById("c-btn")
let x = document.getElementById("x-btn")

// let b=document.querySelector(".btns")
c.addEventListener("click", function () {
    op.value = ""
    // location.reload();
})
x.addEventListener("click", function () {
    let res = ""
    for (let index = 0; index < op.value.length - 1; index++) {
        res = res + op.value[index]

    }

    op.value = res
})
for (const i of btns) {

    i.addEventListener("click", function add() {
        op.value = op.value + i.textContent


    }
    )
}
for (const i2 of exp) {
    i2.addEventListener("click", function () {
        op.value = op.value + i2.textContent

    })
}
e.addEventListener("click", function () {
    op.value = eval(op.value)
})

// eval function is use  for ("4+5")=9







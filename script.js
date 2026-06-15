let a = null, b = null, result = null
let op = null
let digits = document.querySelectorAll(".key.digit")
let opers = document.querySelectorAll(".key.operator")
let output = document.querySelector(".output")

function reset() {
    a = null, b = null, result = null, op = null
}

function display(n) {
    if(n===""){
        output.innerText=""
    }else{
        output.innerText = Math.floor(n*100000)/100000}
}
function operate(o) {
    if (o === "%") {
        if (a !== null) {
            a = a / 100
            display(a)
            console.log(a)
            return
        } else {
            b = b / 100
            display(b)
            return
        }
    }
    if (b !== null) {
        switch (op) {
            case "+":
                result = a + b
                break

            case "-":
                result = a - b
                break

            case "*":
                result = a * b
                break

            case "/":
                if (b == 0) {
                    display("INVALID")
                    reset()
                    return
                }
                result = a / b
                break


            case "=":
                break
        }
        a = result, b = null
        display(result)
    }

    op = o

}




function input(n) {
    if (op !== null && op !== "=") {
        if (b === null) {
            b = Number(n)

        } else {
            b = b * 10 + Number(n)
        }
        display(b)
    } else {
        if (a === null || op === "=") {
            a = Number(n)

        } else {
            a = a * 10 + Number(n)
        }
        display(a)
    }

}

function backspace() {
    if (b === null && a!==null) {
        a = Math.floor(a / 10)
        if (a === 0) {
            display("")
        } else {
            display(a)
        }

    } else if(b!==null) {
        b = Math.floor(b / 10)
        if (b === 0) {
            display("")
        } else {
            display(b)
        }
    }
}

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        input(digit.dataset.value)
    })
})

opers.forEach(oper => {
    oper.addEventListener("click", () => {
        operate(oper.dataset.value);
    })
})

let ac = document.querySelector(".key.clear-btn.AC")
ac.addEventListener("click", () => {
    display("")
    reset()

})

let c = document.querySelector(".key.clear-btn.C")
c.addEventListener("click", () => {
    backspace()
})

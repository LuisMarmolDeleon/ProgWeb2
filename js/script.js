let txt = document.getElementById('txt')

function clickHandler() {
  console.log(this.value)

  const lastValue = txt.value[txt.value.length - 1]
  const operators = ['+', '-', '*', '/', '.']
  const thisIsOperator = operators.includes(this.value)

  if (this.value != '') {
    if (!operators.includes(lastValue) || !thisIsOperator) {
      txt.value += this.value
    }
  } else {
    try {
      txt.value = eval(txt.value)
    } catch (err) {
      txt.value = 'Error'
      console.log(err)
    }
  }
}

const buttons = document.getElementsByClassName('btn')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler)
}

document.getElementById('btnClear').addEventListener('click', function () {
  txt.value = ''
})

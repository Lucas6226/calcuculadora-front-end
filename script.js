var botoes = document.getElementById("botoes")


var value = '';
var value1 = '';
var operate = '';
var value2 = '';
function calculateValues(operate, n1, n2) {
   var number = 0
   switch (operate) {
      case '/': number = n1 / n2
         break;
      case '+': number = n1 + n2;
         break;
      case '-': number = n1 - n2;
         break;
      case 'x': number = n1 * n2;
         break;
      case '%': number = n1*(n2/100);
         default: console.log("erro");
   }

   return `${number}`
}

var energi = true

botoes.addEventListener("click", (event) => {

   console.log(value1, operate, value2);
   let clickedButton = event.target.innerText
   let screen = event.currentTarget.parentElement.children[0]


   if (energi == true) {
      if (clickedButton < 10) {
         value += clickedButton
         screen.value = value
   
      } else if (clickedButton == "del" && value.length > 0) {
         value = value.substring(0, (value.length - 1))
         screen.value = value
      } else if (['/', '+', '-', 'x', '%'].includes(clickedButton)) {
         if (value != '') {
            value1 = value
            value = ''
         } 
         operate = clickedButton
   
   
      } else if (clickedButton == '=' && ['/', '+', '-', 'x', '%'].includes(operate) && value != '') {
         value2 = value
         const result = calculateValues(operate, Number(value1), Number(value2))
         
         value = result
         screen.value = result
         operate = '' 
      }

   } 
   

   let led = document.getElementsByClassName("botao-4")[0]
   if (clickedButton == "On") {
      energi = true
      led.style.backgroundColor = "green"
   } else if (clickedButton == "Off") {
      energi = false
      led.style.backgroundColor = "red"

      value1 = value2 = value = operate = screen.value = ''
   }

})



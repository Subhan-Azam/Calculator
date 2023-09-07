function clearAll() {
  document.getElementById("display").value = "";
}

function cancel() {
  const cancelNum = document.getElementById("display").value;
  document.getElementById("display").value = cancelNum.slice(0, -1);
}

function number(num) {
  document.getElementById("display").value += num;
}

function operator(op) {
  document.getElementById("display").value += op;
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } 
  catch (error) {
    document.getElementById("display").value = 'Error';
  }

}

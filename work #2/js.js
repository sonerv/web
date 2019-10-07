let field = document.getElementById("field");
function isPrime(n) {
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

field.addEventListener("keydown", function(event) {
  if (event.which === 13) {
    debugger;
    let number = Number(field.value);
    alert(isPrime(number) ? "ЭЭЭЭЭ ПРОСТОЕ ЖЕ СКАЗАЛИ" : "ЭЭЭЭЭ СОСТАВНОЕ ЖЕ СКАЗАЛИ");
  }
});

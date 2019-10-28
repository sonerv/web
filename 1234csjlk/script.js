let qB = document.getElementById("quote");
let req = $.get("http://localhost:590/quote");
req.done(function(data){
  let quote = JSON.parse(data);
  document.title= "Цитата#"+quote.text;
  qB.innerHTML= quote.text;
  qB.style.display="block";
});

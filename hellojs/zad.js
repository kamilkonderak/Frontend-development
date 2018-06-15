
var VM = 4;
var AI = 1;
var values = [1,2,3,4];

var add = function (a,b)
{
  return (a+b)
}

number: val2 = [23,4];

console.log ()
console.log(Date());
console.log("VM + AI = " + add(VM,AI));

function add2(a,b)
{
  return add(a,b)
}

console.log(add2(VM.AI))

var counter = function()
{
  var i=0;

  function inc()
  {
    return i +=1;
  }

  return function()
  {
    return inc();
  };
};

var counter2 = counter();
console.log(counter2());
console.log(typeof counter2);
console.log(typeof counter);

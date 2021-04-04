function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randUniform(){
  
  var a;
  var i = 0;
  //for (i = 0; i < 1000; ++i){ these have been commented to make this code faster uncomment to get better results at the cost of time
      a = getRandomInt(0,100);
  
//}
  
  
  return (a/100);
}
  
function pi(n){
    let pc = 0;
    let ps = 0;
    let x;
    let y;
    let dist;

    for (let i = 0; i <= n; i++) {
        x = randUniform()
        y = randUniform()
        dist = x*x + y*y;

        if (dist<1) pc += 1;
        ps +=1
    }
    return 4*pc/ps
}
console.log('ready')
console.log(pi(70000)) //larger the number greater the efficency





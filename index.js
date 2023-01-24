import React from React;


var output = [] ;
var count = 1;
function fizzbuzz(){
   for (count = 1; count++; count<= 100) {
      if (count % 3 === 0){
         output.push("fizz");
      }
      else if (count % 5 === 0) {
         outpurt.push("buzz");
      }
      else if(count % (3*5) === 0){
         output.push("fizzbuzz");
      }
      else{
         output.push(count);
      }
   }
   console.log(output);
}

//alarm reminder

const alarm = {
    remind(aMessage) {
      alert(aMessage);
      this.timeoutID = undefined;
    },
  
    setup() {
      if (typeof this.timeoutID === '1000') {
        this.cancel();
      }
  
      this.timeoutID = setTimeout((msg) => {
        this.remind(msg);
      }, 1000, 'Wake up!');
    },
  
    cancel() {
      clearTimeout(this.timeoutID);
    }
  };
  window.addEventListener('click', () => alarm.setup());
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = ""; 



process.stdin.on("data", function (input) {
    stdin_input += input; 
                                // Reading input from STDIN
}); 


process.stdin.on("end", function () {  

   var arr = stdin_input.split('\n') 
 

   for (var k=1;k<=arr[0];k++){
   var res = 0 
   for (var i=1;i<= arr[k]/2 ;i++){

       if(arr[k]%i ===0){
          res = res +i 
    
       } 

       
   
   } 
    
      if(res===Number(arr[k]) && res!==0){
      main("YES")
   
        } else {
       main("NO")


    }    
   
   }
}); 

   
  
function main(input) {
    process.stdout.write(input + "\n" ); // Writing output to STDOUT
}




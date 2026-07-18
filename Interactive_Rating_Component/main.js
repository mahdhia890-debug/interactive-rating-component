
//my sollution
//  let container_1 = document.querySelector(".container_1");
//  let container_2 = document.querySelector(".container_2");

// let button = document.querySelector("#send");
// let message = document.querySelector(".message");

// let Parentratingnumbers = document.querySelectorAll(".rating_numbers > div");

// //gemini has added this variable

// let selectedDivText = "";


// Parentratingnumbers.forEach(
//     function(e){
//         e.addEventListener("click",(event)=>{
            

//                 //my solution
//              if(event.target.className === "first_number"){
//                 button.onclick = ()=>{
//                   document.styleSheets[0].rules[4].style.setProperty("display","none");
//                   document.styleSheets[0].rules[14].style.removeProperty("display");
//                   message.textContent = "you selected 1 out of 5";
        
//                 }
             
//              }
//              else if(event.target.className === "second_number"){
//                  button.onclick = ()=>{
//                       document.styleSheets[0].rules[4].style.setProperty("display","none");
//                   document.styleSheets[0].rules[14].style.removeProperty("display");
//                      message.textContent = "you selected 2 out of 5";
             
//                 }
//              }
//              else if(event.target.className === "third_number"){
//                  button.onclick = ()=>{
//                       document.styleSheets[0].rules[4].style.setProperty("display","none");
//                   document.styleSheets[0].rules[14].style.removeProperty("display");
        
//                    message.textContent = "you selected 3 out of 5";
              
             
//                 }
//              }
//              else if(event.target.className === "fourth_number"){
//                  button.onclick = ()=>{
//                      document.styleSheets[0].rules[4].style.setProperty("display","none");
//                   document.styleSheets[0].rules[14].style.removeProperty("display");
               
//                    message.textContent = "you selected 4 out of 5";
    
             
//                 }
//              }
//              else {
//                  button.onclick = ()=>{
//                       document.styleSheets[0].rules[4].style.setProperty("display","none");
//                   document.styleSheets[0].rules[14].style.removeProperty("display");
               
//                    message.textContent = "you selected 5 out of 5";
              
             
//                 }
              

        


         




          




    
//          }
      
//         }
//         )}
       
//     )


   









  let container_1 = document.querySelector(".container_1");
  let container_2 = document.querySelector(".container_2")
 let button = document.querySelector("#send");
 let message = document.querySelector(".message")
 let Parentratingnumbers = document.querySelectorAll(".rating_numbers > div")

 let selectedDivText = "";

Parentratingnumbers.forEach(
    (div)=>{
        div.addEventListener("click",(event)=>{

            Parentratingnumbers.forEach((e)=>{e.classList.remove("active")});
          
            event.target.classList.add("active");


           selectedDivText = event.target.textContent;




        })

//end of function inside foreach 1
    }
);


button.onclick = ()=>{
    if(selectedDivText !==""){
               document.styleSheets[0].rules[4].style.setProperty("display","none");
                 document.styleSheets[0].rules[14].style.removeProperty("display");
                 message.textContent = `you selected ${selectedDivText} out of 5`;
    }
}




























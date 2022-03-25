var timerid;
    let food=document.getElementById("food");
 let searchfood = async(url)=>{
       try{
    let input =document.getElementById("query").value;
        let res=await fetch(url);
     
    let data=await res.json();
    console.log(data);
    let array_of_food=data.meals;
    console.log(array_of_food);
    return array_of_food

}
catch(error){
 console.log("error:",error);
}
   }
   
   var appendfood= (array_of_food)=>{
       food.innerHTML='';
       if(array_of_food== undefined){
           return false;
       }
       array_of_food.forEach(({strMeal,idMeal,strCategory,strMealThumb})=>{

           let p =document.createElement('p');
           p.innerText=strMeal;
           p.addEventListener("click",function(){
               document.querySelector("#display").innerHTML=''
               var div= document.createElement('div');
               var p= document.createElement('p');
               p.innerText=idMeal;
               var p2= document.createElement('p');
               p2.innerText=strCategory;
               var p6= document.createElement('p');
               p6.innerText=strMeal;
               var poster=document.createElement('img');
               poster.setAttribute("src",strMealThumb);
            div.append(p,p2,p6,poster);
               document.querySelector("#display").append(div);
           })
           food.append(p);

       })
   }
   let  main=async()=>{
      try{
      let data= await  searchfood();

      if(data== undefined){
           return false;
       }
      appendfood(data);
   }
   catch (error) {
       console.log("error",error);
   }
}
var  debounce=()=>{
    console.log(timerid);
// sometime i do want to execute the function sometimes i dont want 
if(timerid){
    clearTimeout(timerid);
}
timerid = setTimeout(()=>{
   
    main();
    // still the main function 
},1000);
}
// function a (input){
//     console.log(input);
// }
export {searchfood,appendfood,debounce,main}
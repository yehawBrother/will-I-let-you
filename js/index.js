function myFunction(){
  o = "true"; 
   var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  
  var myArray = ['no u ugly, ', 'u gay, ', 'my cheeks are too good for ur clappin, ', 'nah, ', 'u a bitch, ', 'u a hobo, ', 'u broke as fuck, ', 'ur not 6ix9ine, ', 'that aint prada, ', 'no, ', 'fuck no, ', 'u fux with thots,', 'i dont want aids, ', ]; 
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  
  var myArray2 = ["and that's why ur gay", 'that is why your mother looks like a turtle', 'and you got a triple chin', 'but you look like a donald trump looking ass', 'and ur breath stink', 'but it ok; u still got lil tay', 'also u a homo', "and please don't hit my line ever again", "maybe" ]; 
  var rand2 = myArray2[Math.floor(Math.random() * myArray2.length)];
  
  var myArray3 = ['. Nut inside of me', ' <3 <3 <3 <3', '. plz respond i was up all night making this', ". plz don't think i'm weird", ". ima ride that dick like i ride my tractor, yee yee", ". plz", ". this how im shootin my shot", ". plz fam i really like u", ' these cheeks were made for clapping' ]; 
  
  var rand3 = myArray3[Math.floor(Math.random() * myArray3.length)];
  
  
 

  
if(input == "jack" || input == "Jack"){
  output.innerHTML = "yess daddy ;)" + rand3;
 
 
} else if (input != "jack"){
  output.innerHTML = rand + rand2;
   body.style.background = "linear-gradient(rgb(255, 105, 180), rgb(150, 244, 255))";
    body.style.color = "white";
     
    
  
}
  if(input == "macrina" || input =="Macrina"){
    output.innerHTML = 'u mega homo so no';
    
  }
  if(input == "6ix9ine"){
    output.innerHTML = 'no (i know u came here and checked it but fuck you cuz you still aint 6ix9ine) ';
     
  } 
  if(input == "big bird"){
    output.innerHTML = 'of course';
    
  } 
  if(input == "libby" || input == "Libby"){
    output.innerHTML = 'yee yee';
$(".form1").on("submit",function(){
  $("body").addClass("yee");
});
    
   
  } 
 if (o = "false"){
   return false; 
 }
 
}
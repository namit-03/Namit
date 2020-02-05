function getResult()
{
    var x=parseInt(form1.english.value);
    var y=parseInt(form1.gk.value);
    var z=parseInt(form1.maths.value);
    if(x==""||y==""||z=="")
    {
        alert("please enter a value");
       
    }
  else{
      var total=x+y+z;
      var percentage=((total/300)*100);
      var highest=Math.max(x,y,z);
  form1.totalMarks.value=total;
  form1.percentage.value=percentage;
  form1.highestMarks.value=highest;
return false;   
} 
}    
function fun1(){
    alert("this is the button");
       }
       function fun2()
       {
           alert("you just left the area");
       }
       function fun3(){
           alert("for office use only");
       }
       function fun4(){
         alert("welcome to our project !");
       }
       var x=document.getElementById("myform");
       
      x=addEventListener("focus",fun5(),true);
      x=addEventListener("blur",fun6(),true);
      function fun5(){
    document.getElementById("name1").style.backgroundColor="lightblue";
      
    }
     function fun6(){
         document.getElementById("email1").style.backgroundColor="grey";
     }
function fun7()
{
    alert("welcome to the quiz");
}


function result()
{
    var count=0;
    var x=form5.q1.value;
    var y=form5.q2.value;
   if(x==""||y=="")
   {
       alert("please enter your answers");
   }
   
    
}
function myFunction(){
    location.replace("https://www.google.co.in/images");
}
function myPrompt(){
var name=prompt("enter your name","Namit Pundir");

    if(name!=null){
    document.getElementById("yourname").innerHTML="your name is "+name;
}
}
function result()
{
    var count=0;
    var x=form5.q1.value;
    var y=form5.q2.value;
   if(x==""||y=="")
   {
       alert("please enter your answers");
   }
   var count=0;
    if(x=="a1" && y=="b2")
    {
    count=4;
    }
  else if(x=="a1"|| y=="b2")
  {
      count=2;
  }
else 
{
    count=0;
}
alert("your score is:"+count);
}
function checkName()
{
    document.getElementById("span1").innerHTML="please enter the name";
}

var inputDate = document.getElementById("date");
var inputContent = document.getElementById("content");
var submitButton = document.getElementById("submitBtn");


var $myData=JSON.parse(localStorage.getItem("myData"));
inputDate.addEventListener("change", () => {
    let date = inputDate.value;
     if($myData){
     for(let i=0;i<$myData.length;i++)
      if($myData[i].date_===date){
   var res=confirm("Data already exists, Do you wish to edit it?") 
   if(res==true){
  var existing=JSON.stringify($myData[i].content);
    inputContent.value=existing;  
 }else{
  console.log("no need to edit")
       }
       }
        }
        localStorage.setItem("myData",JSON.stringify($myData));
 });
     submitButton.addEventListener("click",()=>{ 
        let data = { 'date_' : inputDate.value , 'content' : inputContent.value };
        let date = inputDate.value;
        let content = inputContent.value;
    if(!$myData){
         $myData=[];
    }
    let $isavaliable = false
        for(let i=0;i<$myData.length;i++){
            if($myData[i].date_ === date){
                $isavaliable = true
            }
        }   
        if(!$isavaliable){
            $myData.push(data)
        }
        for(let i=0;i<$myData.length;i++){
            if($myData[i].date_=== date){
                $myData[i].content=inputContent.value;
            }
        }   
    localStorage.setItem("myData",JSON.stringify($myData));

    inputContent.value = ""
    inputDate.value = ""
});

var inputDate = document.getElementById("date");
var inputContent = document.getElementById("content");
var submitButton = document.getElementById("submitBtn");
var updateButton=document.getElementById("updatebtn");


submitButton.addEventListener("click", () => {
    var date = inputDate.value;
    var content = inputContent.value;
    var data = { 'date_' : date , 'content' : content };
    var $myData=JSON.parse(localStorage.getItem("myData"));
    let $ifAvaliable = false
    if(!$myData){
        $myData=[];
    }else{
        for (let i = 0; i < $myData.length ; i++) {
            if ($myData[i].date_ === date) {
            $ifAvaliable = true
            var existing=$myData[i];
        }
    }
    }
    if ($ifAvaliable ) {
    var res=confirm("Data already exists, Do you wish to edit it?") 
    if(res==true){
        
      inputContent.value =  existing.content
      updateButton.addEventListener("click", () => {
      
      for (let i = 0; i < $myData.length ; i++) {
        if ($myData[i].date_ === date) {
            var x = document.getElementById("content").value;
      $myData[i].content=x;
      break;
        }
    }
    localStorage.setItem("myData",JSON.stringify($myData));
            });

      localStorage.setItem()
     localStorage.clear(existing)
      localStorage.setItem("myData", JSON.stringify($myData));
    }else{
        console.log("no need to edit")
    }
    }     
    else{
        $myData.push(data)
    }
   
    localStorage.setItem("myData", JSON.stringify($myData));
});




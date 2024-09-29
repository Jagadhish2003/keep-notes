function addNotes(){
   var noteinput =document.getElementById("Note-input");
 var Notetext =noteinput.value.trim();
 if(Notetext !==""){
    var li=document.createElement("li");
    li.textContent=Notetext;
    var deletebutton=document.createElement("button");
    deletebutton.textContent="delete";
    deletebutton.classList.add("delete-btn");
    deletebutton.onclick=function(){
   li.remove();
    };
    li.appendChild(deletebutton);
    document.getElementById("Note-list").appendChild(li);

    noteinput.value="";
 }









}
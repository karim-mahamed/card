var employeeName=document.getElementById("employeeName");
var employeePhone=document.getElementById("employeePhone");
var employeeAge=document.getElementById("employeeAge");
var employeeTitle=document.getElementById("employeeTitle");
var employeecont=[];
btnClick.onclick=function(){
    add();
    display();
}

function add(){
   var employee={
    employeeName:employeeName.value,
    employeePhone:employeePhone.value,
    employeeAge:employeeAge.value,
    employeeTitle:employeeTitle.value, 
   }
   employeecont.push(employee);
   localStorage.setItem("employessList",JSON.stringify( employeecont))
}

function display(){
    var row=""
    for( var i=0;i<employeecon.length;i++){

        rows+=`<div class="col-md-3">
        <div class="data">
            <img src="images/bg-img/12.jpg " class="img-fluid">
            <h2>`+empolyeesCont[i].employeeName+`</h2>
            <h3>`+empolyeesCont[i].employeePhone+`</h3>
            <span>`+empolyeesCont[i].employeeAge+`</span>
            <span class="badge badge-primary">`+empolyeesCont[i].employeeTitle+`</span>
            <button onclick="deleteDate(`+i+`)" class="btn btn-danger"> delete</button>
             <button onclick="editDate(`+i+`)" class="btn  btn-info"> edit</button>
        </div>
    </div>`
    }
    document.getElementById("rowsData").innerHTML=rows
}
function deleteDate(i){
    employeecont.slice(i,1);  
    localStorage.setItem("employessList",JSON.stringify( employeecont));
    display();
}
function searchEmps(text){
    var rows='';
    for(var i=0;i<empolyeesCont.length;i++){
      if(empolyeesCont[i].employeeName.toLowerCase().includes(text.toLowerCase())){
      rows+=`<div class="col-md-3">
      <div class="data">
          <img src="images/bg-img/12.jpg " class="img-fluid">
          <h2>`+empolyeesCont[i].employeeName+`</h2>
          <h3>`+empolyeesCont[i].employeePhone+`</h3>
          <span>`+empolyeesCont[i].employeeAge+`</span>
          <span class="badge badge-primary">`+empolyeesCont[i].employeeTitle+`</span>
          <button onclick="deleteDate(`+i+`)" class="btn btn-danger"> delete</button>
      </div>
  </div>`
  document.getElementById("rowsData").innerHTML=rows
    }
   }}


   function validate(){
       var name=/^[A-Z][a-zA-Z]{2,8}$/;
   } var t;
   function edit(i){
    employeeName.value=empolyeesCont[i].employeeName
    t=i;
   }
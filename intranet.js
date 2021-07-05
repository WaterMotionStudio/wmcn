var objPeople = [
     {
          username:"admin",
          password:"testingadmin"
     }
]

function getInfo() {
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value
     
     for(i=0;i<objPeople.length;i++){
          if (username == objPeople[i].username && password == objPeople[i].password){
               console.log(username + "is logged in!");
               window.location.href="/https://watermotionstudio.github.io/wm/elements.html";
          }else{
               console.log("incorrect username or password")
               window.location.href="https://watermotionstudio.github.io/wm/intranet.html";
     }
}

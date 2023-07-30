const signup=document.getElementById("signup");

signup.addEventListener("click",()=>{  
    document.getElementById("signup").value="Close Curtain";
    fetch("/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
            email:document.getElementById("email").value,
            phone:document.getElementById("phone").value
        })
    }).then((res)=>{
        if (res.status===200){
            window.location.href="/";
        }
        else if(res.status===304){
            window.location.href="/signup";
        }
        else{
            alert('something weird happened');
        }
    });
});

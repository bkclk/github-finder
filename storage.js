class Storage{
    addToStorage(name){
        if(localStorage.getItem("users")===null){
            let users=[];
            users.push(name);
            localStorage.setItem("users",JSON.stringify(users));
        }else{
                let users=JSON.parse(localStorage.getItem("users"));
                 let a=0;
            
                users.forEach(user =>{if(user===name) {a=1; } });          
                if (a<1){
                users.push(name);
                localStorage.setItem("users",JSON.stringify(users));
                }
            } 
        }
    clearStorage(){
        
        localStorage.removeItem("users");
    }
}

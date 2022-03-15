class Hub{
    constructor(){
        this.name=null;
        this.url="https://api.github.com/users/";
    }

    gitHub(newName){
        return new Promise((resolve,reject)=>{
        this.name=newName;
       
        fetch(this.url+this.name)
        .then(response=>response.json())
        .then(response2=>resolve(response2))
        .catch(error=>reject(error));
        });
    }
    getRepo(newName){
        return new Promise((resolve,reject)=>{
            this.name=newName;
            
            fetch(this.url+this.name+"/repos")
            .then(response=>response.json())
            .then(response2=>resolve(response2))
            .catch(error=>reject(error));
            });
    }
}
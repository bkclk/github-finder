class UI{
    constructor(){
        this.pic=null;
        this.name=null;
        this.bio=null;
        this.followers=null;
        this.following=null;
        this.repos=null;
        this.company=null;
        this.location=null;
        this.mail=null;
        this.storage=null;
    }

    addToUI(info){
        
        this.pic=info.avatar_url;
        this.name=info.name;
        this.bio=info.bio;
        this.followers=info.followers;
        this.following=info.following;
        this.repos=info.public_repos;
        this.company=info.company;
        this.location=info.location;
        this.mail=info.email;

        const list=document.getElementById("profile");
        list.innerHTML =
        `<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="" target = "_blank">
             <img class="img-fluid mb-2" src=${this.pic}> </a>
             <hr>
             <div id="fullName"><strong> ${this.name}</strong></div>
             <hr>
             <div id="bio">${this.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${this.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${this.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${this.repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${this.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${this.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${this.mail}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>`;
        document.getElementById("githubname").value="";
    }
    addToRepos(inforepo){
        let reploList;
        reploList=document.getElementById("repos");
        reploList.innerHTML=``;
        for(let i=0;i<3;i++){
        reploList.innerHTML +=
        `<div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                 <span></span> 
                 <a href="https://github.com/${inforepo[i].full_name}" target = "_blank" id = "repoName">${inforepo[i].name}</a>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary">
                    Starlar  <span class="badge badge-light" id="repoStar">${inforepo[i].stargazers_count}</span>
                </button>

                <button class="btn btn-info">
                    Forklar  <span class="badge badge-light" id ="repoFork">${inforepo[i].forks_count}</span>
                </button>
        
            </div>
         </div>

        </div>`
        }
    }
    addToLastUsers(){
        this.storage=localStorage.getItem("users");
        this.storage=JSON.parse(this.storage);
        let lastUsers;
        lastUsers=document.getElementById("last-users");
        lastUsers.innerHTML=``;
        if (this.storage!=[])
        this.storage.forEach(user=>{
        lastUsers.innerHTML+=`<li class="list-group-item">${user}</li>`;
        });

    }
    clearUsers(){
        
        document.getElementById("last-users").innerHTML=``;
        document.getElementById("repos").innerHTML=``;
        document.getElementById("profile").innerHTML=``;

    }
}
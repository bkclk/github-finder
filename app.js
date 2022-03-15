const github=new Hub();
const ui=new UI();
const store=new Storage();
function eventListener(){
    document.getElementById("github-form").addEventListener("submit",gather);
    document.getElementById("clear-last-users").addEventListener("click",clear);

}

function gather(e){
    let name=(document.getElementById("githubname").value).trim();
    github.gitHub(name)
    .then(response=>{ui.addToUI(response);
    store.addToStorage(name);
    ui.addToLastUsers();})
    github.getRepo(name)
    .then(repos=>ui.addToRepos(repos));
    
    e.preventDefault();
}
function clear(){
    store.clearStorage();
    ui.clearUsers();
    
}
eventListener();

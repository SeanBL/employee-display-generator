
managerInfo = (manager) => {
let managerBox = 
`<div class="flex-item">
<div class="name">${manager.name}</div>
<div>Manager</div>
<div>
    <p>ID: ${manager.id}</P>
    <p>Email: <a href="mailto:${manager.email}"> ${manager.email} </a></span></P>
    <p>Office number: ${manager.officeNumber}</p>
</div>
</div>
`

 console.log(manager.name);
return managerBox;
}
module.exports = managerInfo;
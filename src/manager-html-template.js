
managerInfo = (manager) => {
let managerBox = 
`<div>${manager.name}</div>
<div>Manager</div>
<div>
    <p>ID: ${manager.id}</P>
    <p>Email: <a href="mailto:${manager.email}"> ${manager.email} </a></span></P>
    <p>Office number: ${manager.officeNumber}</p>
</div>
`

 console.log(manager.name);
return managerBox;
}
module.exports = managerInfo;
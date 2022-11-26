
managerInfo = (manager) => {
let managerBox = 
`<div class="flex-item">
    <div class="titles">
        <div class="name">${manager.name}</div>
        <p class="role"><i class='fas fa-coffee icon'></i>${manager.getRole()}</p>
    </div>
    <div class="e-info">
        <p class="id">ID: ${manager.id}</P>
        <p class="email">Email: <a href="mailto:${manager.email}"> ${manager.email} </a></P>
        <p class="last-info">Office number: ${manager.officeNumber}</p>
    </div>
</div>`
console.log(manager.name);
return managerBox;
}
module.exports = managerInfo;
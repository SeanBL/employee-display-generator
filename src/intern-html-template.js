internInfo = (intern) => {
    let internBox = ``;
    for (let i = 0; i < intern.length; i++) {
        let internTemp = 
        `
        <div class="flex-item">
            <div class="titles">
                <div class="name">${intern[i].name}</div>
                <p class="role"><i class='fas fa-user-graduate icon'></i>Intern</p>
            </div>
            <div class="e-info">
                <p class="id">ID: ${intern[i].id}</P>
                <p class="email">Email: <a href="mailto:${intern[i].email}"> ${intern[i].email} </a></P>
                <p class="last-info">School: ${intern[i].school}</p>
            </div>
        </div>
        `
    internBox += internTemp;
    }
    
    return internBox;
    }
    module.exports = internInfo;
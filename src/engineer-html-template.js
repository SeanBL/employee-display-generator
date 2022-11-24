engineerInfo = (engineer) => {
    let engineerBox = ``;
    for (let i = 0; i < engineer.length; i++) {
        console.log(engineer[0]);
        let engineerTemp = 
        `
        <div class="flex-item">
            <div class="titles">
                <div class="name">${engineer[i].name}</div>
                <p class="role"><i class='fas fa-glasses icon'></i>Engineer</p>
            </div>
            <div class="e-info">
                <p class="id">ID: ${engineer[i].id}</P>
                <p class="email">Email: <a href="mailto:${engineer[i].email}"> ${engineer[i].email} </a></P>
                <p class="last-info">GitHub: <a href="https://github.com/${engineer[i].github}"> ${engineer[i].github}</a></p>
            </div>
        </div>
        `
    engineerBox += engineerTemp;
    }
    
    return engineerBox;
    }
    module.exports = engineerInfo;
engineerInfo = (engineer) => {
    let engineerBox = ``;
    for (let i = 0; i < engineer.length; i++) {
        console.log(engineer[0]);
        let engineerTemp = 
    `<div>${engineer[i].name}</div>
    <div>Engineer</div>
    <div>
        <p>ID: ${engineer[i].id}</P>
        <p>Email: <a href="mailto:${engineer[i].email}"> ${engineer[i].email} </a></span></P>
        <p>GitHub: ${engineer[i].github}</p>
    </div>
    `
    engineerBox += engineerTemp;
    }
    
    return engineerBox;
    }
    module.exports = engineerInfo;
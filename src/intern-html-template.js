internInfo = (intern) => {
    let internBox = ``;
    for (let i = 0; i < intern.length; i++) {
        let internTemp = 
        `<div>${intern[i].name}</div>
        <div>Intern</div>
        <div>
            <p>ID: ${intern[i].id}</P>
            <p>Email: <a href="mailto:${intern[i].email}"> ${intern[i].email} </a></span></P>
            <p>School: ${intern[i].school}</p>
        </div>
        `
    internBox += internTemp;
    }
    
    return internBox;
    }
    module.exports = internInfo;
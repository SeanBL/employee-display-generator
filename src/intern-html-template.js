internInfo = (intern) => {
    let internBox = 
    `<div>${intern.name}</div>
    <div>Engineer</div>
    <div>
        <p>ID: ${intern.id}</P>
        <p>Email: <a href="mailto:${intern.email}"> ${intern.email} </a></span></P>
        <p>GitHub: ${intern.github}</p>
    </div>
    `
    
     console.log(intern.name);
    return internBox;
    }
    module.exports = internInfo;
engineerInfo = (engineer) => {
    let engineerBox = 
    `<div>${engineer.name}</div>
    <div>Engineer</div>
    <div>
        <p>ID: ${engineer.id}</P>
        <p>Email: <a href="mailto:${engineer.email}"> ${engineer.email} </a></span></P>
        <p>GitHub: ${engineer.github}</p>
    </div>
    `
    
     console.log(engineer.name);
    return engineerBox;
    }
    module.exports = engineerInfo;
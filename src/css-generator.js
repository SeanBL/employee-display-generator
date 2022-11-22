generateCss = () => {
    let cssPage = 
    `
    .header {
        margin: auto;
        color: rgb(255, 255, 255);
        background-color: rgb(255, 0, 0);
        text-align: center;
        padding: 40px;
    }

    .flex-container {
        display: flex;
        flex-direction: row;
        font-size: 30px;
    }

    .flex-item {
        border: 1px solid black;
        padding: 10px;
    }
    `
    return cssPage;
};

module.exports = generateCss;
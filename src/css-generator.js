generateCss = () => {
    let cssPage = 
    `
    .header {
        margin: auto;
        color: rgb(255, 255, 255);
        background-color: rgb(255, 0, 0);
        text-align: center;
        padding: 40px;
        margin-bottom: 10px;
    }

    .flex-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 200px;
        margin-right: 200px;
    }

    .flex-item {
        box-shadow: 3px 3px 5px 1px gray;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 25px;
    }

    .titles {
        color: white;
        background-color: rgb(4, 134, 255);
        padding-bottom: 10px;
        padding-left: 10px;
        padding-top: 2px;
        padding-right: 15px;
    }

    .name {
        font-size: 23px;
        margin-bottom: 5px;
    }

    .role {
        font-size: 17px;
        margin: 0px;
    }

    .icon{
        margin-right: 5px;
    }

    .e-info {
        padding: 10px;
        background-color: rgb(238, 238, 238);
    }

    .id {
        border: 1px solid rgb(172, 172, 172);
        padding: 7px;
        font-size: 12px;
        margin-bottom: 0px;
    }

    .email {
        border: 1px solid rgb(172, 172, 172);
        padding: 7px;
        font-size: 12px;
        margin: 0px;
    }

    a:link {
        text-decoration: none;
    }

    .last-info {
        border: 1px solid rgb(172, 172, 172);
        padding: 7px;
        font-size: 12px;
        margin-top: 0px;
    }
    `
    return cssPage;
};

module.exports = generateCss;
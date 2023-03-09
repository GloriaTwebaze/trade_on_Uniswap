import swaggerJSDoc from "swagger-jsdoc";

const docx = swaggerJSDoc()

const options = {
    swaggerDifinition:{
        info:{
            title:"Swap tokens on Uniswap",
            description: "A user is able to swap between eth token and uniswap token",
            contact: {
                name: "Ngeni labs"
            },
            server: ["http://localhost:2007"]
        },
        routes: ["../api/routes.ts"]
    }
}

export {docx}
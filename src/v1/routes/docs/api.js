import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Intranet API",
      description: "Intranet API Information",
      contact: {
        name: "Elvio Cepeda",
      },
      servers: [
        {
          url: "http://localhost:3005/api/v1/swagger",
          description: "API documentation",
        },
      ],
      version: "1.0.0",
    },
  },
  // [".routes/*.js"]
  apis: ["./src/v1/routes/docs/swagger/*.yaml"],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);

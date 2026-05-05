import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Film yang Ditonton",
      version: "1.0.0",
      description:
        "Api sederhana dari Express untuk film-film yang pernah ditonton",
    },
  },
  apis: ["app.js"],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
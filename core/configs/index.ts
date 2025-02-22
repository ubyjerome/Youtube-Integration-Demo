import { IConfigs } from "./types";

require("dotenv").config();
export const Configs: IConfigs = {
  project: {
    port: process.env.PORT,
    name: process.env.PROJECT_NAME || "Boiler",
    description: process.env.PROJECT_DESCRIPTION || "Boiler",
    url: {
      deployment: process.env.PROJECT_DEPLOYMENT_URL || "Boiler",
    },
  },
  mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`,
  organisation: {
    name: process.env.ORGANISATION_NAME,
  },
  website:{
    favicon:process.env.FAVICON || "Boiler",
    themeing:{
        primaryColor:process.env.COLOR_PRIMARY || "Boiler"
    },
    openGraphTemplateUrl:process.env.OPENGRAPH_TEMPLATE_URL || "Boiler",
    logo:{
        primary:process.env.LOGO || "Boiler"
    }
  }
};

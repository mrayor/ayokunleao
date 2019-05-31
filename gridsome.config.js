// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Adesanya Ayokunle | Personal Portfolio",
  icon: "./src/favicon.png",
  siteUrl: "https://www.ayokunleao.dev",
  siteDescription:
    "My name is Ayokunle Adesanya, I am a software developer and creative designer. Welcome to my portfolio",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {
          // remark options
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "portfolio/**/*.md",
        typeName: "Portfolio",
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
};

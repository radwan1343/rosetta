import { config } from "dotenv";

// Launch dot-env.
config();

const settings = {
  "name": "Rosetta",
  "state": {
    "frontity": {
      "url": process.env.WORDPRESS_APP_URL,
      "title": "Rosetta",
      "description": "hello hasan"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "autoPrefetch": "all",
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
            [
              "Arabic",
              "/category/ar/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": process.env.WORDPRESS_APP_URL 
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

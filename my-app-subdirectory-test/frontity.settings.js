const settings = [
  {
    name: "frontity",
    state: {
      frontity: {
        url: "https://test.frontity.org",
        title: "Test Frontity Blog",
        description: "WordPress installation for Frontity development"
      },
    },
    packages: [
      {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
      {
       "name": "@frontity/wp-source",
        state: {
          source: {
            "api": "https://test.frontity.org/wp-json",
            params: {
              lang: "en",
            },
          },
        },
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
    ],
  },
  {
    name: "frontity-cy",
    match: ["https?:\\/\\/[^/]+\\/cy([^-\\w]|$)"],
    state: {
      frontity: {
        url: "https://test.frontity.org",
        title: "Blog Blaenllaw Prawf",
        description: "Gosodiad WordPress ar gyfer datblygu Frontity"
      },
    },
    packages: [
      {      
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
      {
        "name": "@frontity/wp-source",
        state: {
          source: {
            "api": "https://test.frontity.org/wp-json",
            params: {
              lang: "cy",
            },
            subdirectory: "cy",
          },
        },
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
    ],
  },
];

export default settings;

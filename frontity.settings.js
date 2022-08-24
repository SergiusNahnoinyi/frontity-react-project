const settings = {
  name: "frontity-react-project",
  state: {
    frontity: {
      url: "https://sergiuswebdev.wordpress.com",
      title: "WordPress Website",
      description: "WordPress website using Frontity",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Shop", "/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://sergiuswebdev.wordpress.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;

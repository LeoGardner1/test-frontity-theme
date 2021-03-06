import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const postsHandler = {
  //Get a posts by lang
  name: "posts",
  priority: 10,
  pattern: "/wp/v2/posts/:lang",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { lang } = params;

    // 1. fetch the data you want from the endpoint page
    var response;
    if (lang == 'en' || lang == 'cy'){
      response = await api.get({
        endpoint: "/wp/v2/posts/",
        params: {
          lang: lang,
          per_page: 10 // To make sure we get all elements
        }
      });
    } else {
      response = await api.get({
        endpoint: "/wp/v2/posts/",
        params: {
          per_page: 10 // To make sure we get all elements
        }
      });
    }
    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      lang,
      items,
      isPostsHandler: true
    });
  }
};


const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/wp-api-menus/v2/menus/:id",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "/wp-api-menus/v2/menus/" + id,
      params: {
        menus: id,
        per_page: 100 // To make sure we get all elements
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items,
      isMenu: true
    });
  }
};

const twentyTwentyTheme = {
  name: "@frontity/twentytwenty-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      posts: [],
      menuRequest: '',
      menu: {},
      colors: {
        gray: {
          base: "#6D6D6D",
          light: "#DCD7CA",
          lighter: "#F5EFE0",
        },
        primary: "#cd2653",
        headerBg: "#ffffff",
        footerBg: "#ffffff",
        bodyBg: "#f5efe0",
      },
      // Whether to show the search button in page header
      showSearchInHeader: true,
      // Menu links to display in the header
      menu: [],
      // State for the menu on mobile
      isMobileMenuOpen: false,
      // State for the search modal on mobile
      isSearchModalOpen: false,
      // Whether to show all post content or only excerpt (summary) in archive view
      showAllContentOnArchive: false,
      // Settings for the featured media (image or video)
      featuredMedia: {
        // Whether to show it on archive view
        showOnArchive: true,
        // Whether to show it on post
        showOnPost: true,
      },
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPreFetch: "no",
      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "all",
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      beforeSSR: ({ actions, state }) => async () => {



        
        if(state.router.link.includes("/cy/")){

          await actions.source.fetch("/wp/v2/posts/en");
          state.theme.posts = state.source.get('/wp/v2/posts/en');
  
          state.theme.menuRequest = "/wp-api-menus/v2/menus/32";
          await actions.source.fetch(state.theme.menuRequest);
          state.theme.menu = state.source.get(state.theme.menuRequest);
  
        } else {

          await actions.source.fetch("/wp/v2/posts/cy");
          state.theme.posts = state.source.get('/wp/v2/posts/cy');
  
          state.theme.menuRequest = "/wp-api-menus/v2/menus/11"
          await actions.source.fetch(state.theme.menuRequest);
          state.theme.menu = state.source.get(state.theme.menuRequest);

        }

      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
    },
  },
  libraries: {
    source: {
      handlers: [postsHandler, menuHandler]
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image],
    },
  },
};

export default twentyTwentyTheme;

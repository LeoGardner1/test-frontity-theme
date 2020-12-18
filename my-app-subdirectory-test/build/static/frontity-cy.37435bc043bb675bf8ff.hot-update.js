webpackHotUpdate("frontity-cy",{

/***/ "./packages/twentytwenty-theme/src/index.js":
/*!**************************************************!*\
  !*** ./packages/twentytwenty-theme/src/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/twentytwenty-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var postsHandler={//Get a posts by lang\nname:\"posts\",priority:10,pattern:\"/wp/v2/posts/:lang\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,params,state,libraries}=_ref;var{api}=libraries.source;var{lang}=params;// 1. fetch the data you want from the endpoint page\nvar response;if(lang=='en'||lang=='cy'){response=yield api.get({endpoint:\"/wp/v2/posts/\",params:{lang:lang,per_page:10// To make sure we get all elements\n}});}else{response=yield api.get({endpoint:\"/wp/v2/posts/\",params:{per_page:10// To make sure we get all elements\n}});}// 2. get an array with each item in json format\nvar items=yield response.json();// 3. add data to source\nvar currentPageData=state.source.data[route];Object.assign(currentPageData,{lang,items,isPostsHandler:true});});function func(_x){return _func.apply(this,arguments);}return func;}()};var menuHandler={name:\"menus\",priority:10,pattern:\"/wp-api-menus/v2/menus/:id\",func:function(){var _func2=_asyncToGenerator(function*(_ref2){var{route,params,state,libraries}=_ref2;var{api}=libraries.source;var{id}=params;// 1. fetch the data you want from the endpoint page\nvar response=yield api.get({endpoint:\"/wp-api-menus/v2/menus/\"+id,params:{menus:id,per_page:100// To make sure we get all elements\n}});// 2. get an array with each item in json format\nvar items=yield response.json();// 3. add data to source\nvar currentPageData=state.source.data[route];Object.assign(currentPageData,{id,items,isMenu:true});});function func(_x2){return _func2.apply(this,arguments);}return func;}()};var twentyTwentyTheme={name:\"@frontity/twentytwenty-theme\",roots:{/**\n     *  In Frontity, any package can add React components to the site.\n     *  We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{posts:[],navRequest:'',nav:{},colors:{gray:{base:\"#6D6D6D\",light:\"#DCD7CA\",lighter:\"#F5EFE0\"},primary:\"#cd2653\",headerBg:\"#ffffff\",footerBg:\"#ffffff\",bodyBg:\"#f5efe0\"},// Whether to show the search button in page header\nshowSearchInHeader:true,// Menu links to display in the header\nmenu:[],// State for the menu on mobile\nisMobileMenuOpen:false,// State for the search modal on mobile\nisSearchModalOpen:false,// Whether to show all post content or only excerpt (summary) in archive view\nshowAllContentOnArchive:false,// Settings for the featured media (image or video)\nfeaturedMedia:{// Whether to show it on archive view\nshowOnArchive:true,// Whether to show it on post\nshowOnPost:true},// Whether to auto-fetch links on a page. Values can be \"no\" | \"all\" | \"in-view\" | \"hover\"\nautoPreFetch:\"no\",/**\n       * At the moment, we only include the ascii characters of Inter font.\n       * Values can be \"us-ascii\" | \"latin\" | \"all\"\n       */fontSets:\"all\"}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{beforeSSR:(_ref3)=>{var{actions,state}=_ref3;return/*#__PURE__*/_asyncToGenerator(function*(){if(state.router.link.includes(\"/cy/\")){yield actions.source.fetch(\"/wp/v2/posts/en\");state.theme.posts=state.source.get('/wp/v2/posts/en');state.theme.navRequest=\"/wp-api-menus/v2/menus/32\";yield actions.source.fetch(state.theme.navRequest);state.theme.nav=state.source.get(state.theme.navRequest);}else{yield actions.source.fetch(\"/wp/v2/posts/cy\");state.theme.posts=state.source.get('/wp/v2/posts/cy');state.theme.navRequest=\"/wp-api-menus/v2/menus/11\";yield actions.source.fetch(state.theme.navRequest);state.theme.nav=state.source.get(state.theme.navRequest);}});},openMobileMenu:(_ref5)=>{var{state}=_ref5;state.theme.isMobileMenuOpen=true;},closeMobileMenu:(_ref6)=>{var{state}=_ref6;state.theme.isMobileMenuOpen=false;},openSearchModal:(_ref7)=>{var{state}=_ref7;state.theme.isSearchModalOpen=true;},closeSearchModal:(_ref8)=>{var{state}=_ref8;state.theme.isSearchModalOpen=false;}}},libraries:{source:{handlers:[postsHandler,menuHandler]},html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * inside the content HTML. You can add your own processors too\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (twentyTwentyTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2luZGV4LmpzPzM1ZjUiXSwibmFtZXMiOlsicG9zdHNIYW5kbGVyIiwibmFtZSIsInByaW9yaXR5IiwicGF0dGVybiIsImZ1bmMiLCJyb3V0ZSIsInBhcmFtcyIsInN0YXRlIiwibGlicmFyaWVzIiwiYXBpIiwic291cmNlIiwibGFuZyIsInJlc3BvbnNlIiwiZ2V0IiwiZW5kcG9pbnQiLCJwZXJfcGFnZSIsIml0ZW1zIiwianNvbiIsImN1cnJlbnRQYWdlRGF0YSIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJpc1Bvc3RzSGFuZGxlciIsIm1lbnVIYW5kbGVyIiwiaWQiLCJtZW51cyIsImlzTWVudSIsInR3ZW50eVR3ZW50eVRoZW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwicG9zdHMiLCJuYXZSZXF1ZXN0IiwibmF2IiwiY29sb3JzIiwiZ3JheSIsImJhc2UiLCJsaWdodCIsImxpZ2h0ZXIiLCJwcmltYXJ5IiwiaGVhZGVyQmciLCJmb290ZXJCZyIsImJvZHlCZyIsInNob3dTZWFyY2hJbkhlYWRlciIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwiaXNTZWFyY2hNb2RhbE9wZW4iLCJzaG93QWxsQ29udGVudE9uQXJjaGl2ZSIsImZlYXR1cmVkTWVkaWEiLCJzaG93T25BcmNoaXZlIiwic2hvd09uUG9zdCIsImF1dG9QcmVGZXRjaCIsImZvbnRTZXRzIiwiYWN0aW9ucyIsImJlZm9yZVNTUiIsInJvdXRlciIsImxpbmsiLCJpbmNsdWRlcyIsImZldGNoIiwib3Blbk1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuU2VhcmNoTW9kYWwiLCJjbG9zZVNlYXJjaE1vZGFsIiwiaGFuZGxlcnMiLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7bWtCQUdBLEdBQU1BLGFBQVksQ0FBRyxDQUNuQjtBQUNBQyxJQUFJ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aUIsaUJBQVosQ0FBZ0MsS0FBaEMsQ0FDRCxDQXRDSSxDQURBLENBM0RlLENBcUd4QnRDLFNBQVMsQ0FBRSxDQUNURSxNQUFNLENBQUUsQ0FDTnFELFFBQVEsQ0FBRSxDQUFDL0QsWUFBRCxDQUFldUIsV0FBZixDQURKLENBREMsQ0FJVHlDLFVBQVUsQ0FBRSxDQUNWO0FBQ047QUFDQTtBQUNBLFNBQ01DLFVBQVUsQ0FBRSxDQUFDQyw2RUFBRCxDQUxGLENBSkgsQ0FyR2EsQ0FBMUIsQ0FtSGV2QyxnRkFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IGltYWdlIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2ltYWdlXCI7XG5cbmNvbnN0IHBvc3RzSGFuZGxlciA9IHtcbiAgLy9HZXQgYSBwb3N0cyBieSBsYW5nXG4gIG5hbWU6IFwicG9zdHNcIixcbiAgcHJpb3JpdHk6IDEwLFxuICBwYXR0ZXJuOiBcIi93cC92Mi9wb3N0cy86bGFuZ1wiLFxuICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcbiAgICBjb25zdCB7IGFwaSB9ID0gbGlicmFyaWVzLnNvdXJjZTtcbiAgICBjb25zdCB7IGxhbmcgfSA9IHBhcmFtcztcblxuICAgIC8vIDEuIGZldGNoIHRoZSBkYXRhIHlvdSB3YW50IGZyb20gdGhlIGVuZHBvaW50IHBhZ2VcbiAgICB2YXIgcmVzcG9uc2U7XG4gICAgaWYgKGxhbmcgPT0gJ2VuJyB8fCBsYW5nID09ICdjeScpe1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHtcbiAgICAgICAgZW5kcG9pbnQ6IFwiL3dwL3YyL3Bvc3RzL1wiLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYW5nOiBsYW5nLFxuICAgICAgICAgIHBlcl9wYWdlOiAxMCAvLyBUbyBtYWtlIHN1cmUgd2UgZ2V0IGFsbCBlbGVtZW50c1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHtcbiAgICAgICAgZW5kcG9pbnQ6IFwiL3dwL3YyL3Bvc3RzL1wiLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJfcGFnZTogMTAgLy8gVG8gbWFrZSBzdXJlIHdlIGdldCBhbGwgZWxlbWVudHNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIDIuIGdldCBhbiBhcnJheSB3aXRoIGVhY2ggaXRlbSBpbiBqc29uIGZvcm1hdFxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gMy4gYWRkIGRhdGEgdG8gc291cmNlXG4gICAgY29uc3QgY3VycmVudFBhZ2VEYXRhID0gc3RhdGUuc291cmNlLmRhdGFbcm91dGVdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjdXJyZW50UGFnZURhdGEsIHtcbiAgICAgIGxhbmcsXG4gICAgICBpdGVtcyxcbiAgICAgIGlzUG9zdHNIYW5kbGVyOiB0cnVlXG4gICAgfSk7XG4gIH1cbn07XG5cblxuY29uc3QgbWVudUhhbmRsZXIgPSB7XG4gIG5hbWU6IFwibWVudXNcIixcbiAgcHJpb3JpdHk6IDEwLFxuICBwYXR0ZXJuOiBcIi93cC1hcGktbWVudXMvdjIvbWVudXMvOmlkXCIsXG4gIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAgIGNvbnN0IHsgYXBpIH0gPSBsaWJyYXJpZXMuc291cmNlO1xuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcblxuICAgIC8vIDEuIGZldGNoIHRoZSBkYXRhIHlvdSB3YW50IGZyb20gdGhlIGVuZHBvaW50IHBhZ2VcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoe1xuICAgICAgZW5kcG9pbnQ6IFwiL3dwLWFwaS1tZW51cy92Mi9tZW51cy9cIiArIGlkLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1lbnVzOiBpZCxcbiAgICAgICAgcGVyX3BhZ2U6IDEwMCAvLyBUbyBtYWtlIHN1cmUgd2UgZ2V0IGFsbCBlbGVtZW50c1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIDIuIGdldCBhbiBhcnJheSB3aXRoIGVhY2ggaXRlbSBpbiBqc29uIGZvcm1hdFxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gMy4gYWRkIGRhdGEgdG8gc291cmNlXG4gICAgY29uc3QgY3VycmVudFBhZ2VEYXRhID0gc3RhdGUuc291cmNlLmRhdGFbcm91dGVdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjdXJyZW50UGFnZURhdGEsIHtcbiAgICAgIGlkLFxuICAgICAgaXRlbXMsXG4gICAgICBpc01lbnU6IHRydWVcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgdHdlbnR5VHdlbnR5VGhlbWUgPSB7XG4gIG5hbWU6IFwiQGZyb250aXR5L3R3ZW50eXR3ZW50eS10aGVtZVwiLFxuICByb290czoge1xuICAgIC8qKlxuICAgICAqICBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxuICAgICAqICBXZSB1c2Ugcm9vdHMgZm9yIHRoYXQsIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IFRoZW1lLFxuICB9LFxuICBzdGF0ZToge1xuICAgIC8qKlxuICAgICAqIFN0YXRlIGlzIHdoZXJlIHRoZSBwYWNrYWdlcyBzdG9yZSB0aGVpciBkZWZhdWx0IHNldHRpbmdzIGFuZCBvdGhlclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiB7XG4gICAgICBwb3N0czogW10sXG4gICAgICBuYXZSZXF1ZXN0OiAnJyxcbiAgICAgIG5hdjoge30sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgZ3JheToge1xuICAgICAgICAgIGJhc2U6IFwiIzZENkQ2RFwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNEQ0Q3Q0FcIixcbiAgICAgICAgICBsaWdodGVyOiBcIiNGNUVGRTBcIixcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbWFyeTogXCIjY2QyNjUzXCIsXG4gICAgICAgIGhlYWRlckJnOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZm9vdGVyQmc6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBib2R5Qmc6IFwiI2Y1ZWZlMFwiLFxuICAgICAgfSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoIGJ1dHRvbiBpbiBwYWdlIGhlYWRlclxuICAgICAgc2hvd1NlYXJjaEluSGVhZGVyOiB0cnVlLFxuICAgICAgLy8gTWVudSBsaW5rcyB0byBkaXNwbGF5IGluIHRoZSBoZWFkZXJcbiAgICAgIG1lbnU6IFtdLFxuICAgICAgLy8gU3RhdGUgZm9yIHRoZSBtZW51IG9uIG1vYmlsZVxuICAgICAgaXNNb2JpbGVNZW51T3BlbjogZmFsc2UsXG4gICAgICAvLyBTdGF0ZSBmb3IgdGhlIHNlYXJjaCBtb2RhbCBvbiBtb2JpbGVcbiAgICAgIGlzU2VhcmNoTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gc2hvdyBhbGwgcG9zdCBjb250ZW50IG9yIG9ubHkgZXhjZXJwdCAoc3VtbWFyeSkgaW4gYXJjaGl2ZSB2aWV3XG4gICAgICBzaG93QWxsQ29udGVudE9uQXJjaGl2ZTogZmFsc2UsXG4gICAgICAvLyBTZXR0aW5ncyBmb3IgdGhlIGZlYXR1cmVkIG1lZGlhIChpbWFnZSBvciB2aWRlbylcbiAgICAgIGZlYXR1cmVkTWVkaWE6IHtcbiAgICAgICAgLy8gV2hldGhlciB0byBzaG93IGl0IG9uIGFyY2hpdmUgdmlld1xuICAgICAgICBzaG93T25BcmNoaXZlOiB0cnVlLFxuICAgICAgICAvLyBXaGV0aGVyIHRvIHNob3cgaXQgb24gcG9zdFxuICAgICAgICBzaG93T25Qb3N0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gYXV0by1mZXRjaCBsaW5rcyBvbiBhIHBhZ2UuIFZhbHVlcyBjYW4gYmUgXCJub1wiIHwgXCJhbGxcIiB8IFwiaW4tdmlld1wiIHwgXCJob3ZlclwiXG4gICAgICBhdXRvUHJlRmV0Y2g6IFwibm9cIixcbiAgICAgIC8qKlxuICAgICAgICogQXQgdGhlIG1vbWVudCwgd2Ugb25seSBpbmNsdWRlIHRoZSBhc2NpaSBjaGFyYWN0ZXJzIG9mIEludGVyIGZvbnQuXG4gICAgICAgKiBWYWx1ZXMgY2FuIGJlIFwidXMtYXNjaWlcIiB8IFwibGF0aW5cIiB8IFwiYWxsXCJcbiAgICAgICAqL1xuICAgICAgZm9udFNldHM6IFwiYWxsXCIsXG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXG4gICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxuICAgKi9cbiAgYWN0aW9uczoge1xuICAgIHRoZW1lOiB7XG4gICAgICBiZWZvcmVTU1I6ICh7IGFjdGlvbnMsIHN0YXRlIH0pID0+IGFzeW5jICgpID0+IHtcblxuXG5cbiAgICAgICAgXG4gICAgICAgIGlmKHN0YXRlLnJvdXRlci5saW5rLmluY2x1ZGVzKFwiL2N5L1wiKSl7XG5cbiAgICAgICAgICBhd2FpdCBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi93cC92Mi9wb3N0cy9lblwiKTtcbiAgICAgICAgICBzdGF0ZS50aGVtZS5wb3N0cyA9IHN0YXRlLnNvdXJjZS5nZXQoJy93cC92Mi9wb3N0cy9lbicpO1xuICBcbiAgICAgICAgICBzdGF0ZS50aGVtZS5uYXZSZXF1ZXN0ID0gXCIvd3AtYXBpLW1lbnVzL3YyL21lbnVzLzMyXCI7XG4gICAgICAgICAgYXdhaXQgYWN0aW9ucy5zb3VyY2UuZmV0Y2goc3RhdGUudGhlbWUubmF2UmVxdWVzdCk7XG4gICAgICAgICAgc3RhdGUudGhlbWUubmF2ID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS50aGVtZS5uYXZSZXF1ZXN0KTtcbiAgXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBhd2FpdCBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi93cC92Mi9wb3N0cy9jeVwiKTtcbiAgICAgICAgICBzdGF0ZS50aGVtZS5wb3N0cyA9IHN0YXRlLnNvdXJjZS5nZXQoJy93cC92Mi9wb3N0cy9jeScpO1xuICBcbiAgICAgICAgICBzdGF0ZS50aGVtZS5uYXZSZXF1ZXN0ID0gXCIvd3AtYXBpLW1lbnVzL3YyL21lbnVzLzExXCJcbiAgICAgICAgICBhd2FpdCBhY3Rpb25zLnNvdXJjZS5mZXRjaChzdGF0ZS50aGVtZS5uYXZSZXF1ZXN0KTtcbiAgICAgICAgICBzdGF0ZS50aGVtZS5uYXYgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnRoZW1lLm5hdlJlcXVlc3QpO1xuXG4gICAgICAgIH1cblxuICAgICAgfSxcbiAgICAgIG9wZW5Nb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgb3BlblNlYXJjaE1vZGFsOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzU2VhcmNoTW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjbG9zZVNlYXJjaE1vZGFsOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzU2VhcmNoTW9kYWxPcGVuID0gZmFsc2U7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpYnJhcmllczoge1xuICAgIHNvdXJjZToge1xuICAgICAgaGFuZGxlcnM6IFtwb3N0c0hhbmRsZXIsIG1lbnVIYW5kbGVyXVxuICAgIH0sXG4gICAgaHRtbDJyZWFjdDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXG4gICAgICAgKiBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC4gWW91IGNhbiBhZGQgeW91ciBvd24gcHJvY2Vzc29ycyB0b29cbiAgICAgICAqL1xuICAgICAgcHJvY2Vzc29yczogW2ltYWdlXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHdlbnR5VHdlbnR5VGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/index.js\n");

/***/ })

})
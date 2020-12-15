webpackHotUpdate("frontity",{

/***/ "./packages/twentytwenty-theme/src/index.js":
/*!**************************************************!*\
  !*** ./packages/twentytwenty-theme/src/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/twentytwenty-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var postsHandler={//Get a posts by lang\nname:\"posts\",priority:10,pattern:\"/wp/v2/posts/\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,params,state,libraries}=_ref;var{api}=libraries.source;// 1. fetch the data you want from the endpoint page\nvar response;response=yield api.get({endpoint:\"/wp/v2/posts/\",params:{per_page:10// To make sure we get all elements\n}});// 2. get an array with each item in json format\nvar items=yield response.json();// 3. add data to source\nvar currentPageData=state.source.data[route];Object.assign(currentPageData,{lang,items,isPostsHandler:true});});function func(_x){return _func.apply(this,arguments);}return func;}()};var twentyTwentyTheme={name:\"@frontity/twentytwenty-theme\",roots:{/**\n     *  In Frontity, any package can add React components to the site.\n     *  We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{colors:{gray:{base:\"#6D6D6D\",light:\"#DCD7CA\",lighter:\"#F5EFE0\"},primary:\"#cd2653\",headerBg:\"#ffffff\",footerBg:\"#ffffff\",bodyBg:\"#f5efe0\"},// Whether to show the search button in page header\nshowSearchInHeader:true,// Menu links to display in the header\nmenu:[],// State for the menu on mobile\nisMobileMenuOpen:false,// State for the search modal on mobile\nisSearchModalOpen:false,// Whether to show all post content or only excerpt (summary) in archive view\nshowAllContentOnArchive:false,// Settings for the featured media (image or video)\nfeaturedMedia:{// Whether to show it on archive view\nshowOnArchive:true,// Whether to show it on post\nshowOnPost:true},// Whether to auto-fetch links on a page. Values can be \"no\" | \"all\" | \"in-view\" | \"hover\"\nautoPreFetch:\"no\",/**\n       * At the moment, we only include the ascii characters of Inter font.\n       * Values can be \"us-ascii\" | \"latin\" | \"all\"\n       */fontSets:\"all\"}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{beforeSSR:(_ref2)=>{var{actions,state}=_ref2;return/*#__PURE__*/_asyncToGenerator(function*(){yield actions.source.fetch(\"/wp/v2/posts/\");});},openMobileMenu:(_ref4)=>{var{state}=_ref4;state.theme.isMobileMenuOpen=true;},closeMobileMenu:(_ref5)=>{var{state}=_ref5;state.theme.isMobileMenuOpen=false;},openSearchModal:(_ref6)=>{var{state}=_ref6;state.theme.isSearchModalOpen=true;},closeSearchModal:(_ref7)=>{var{state}=_ref7;state.theme.isSearchModalOpen=false;}}},libraries:{source:{handlers:[postsHandler]},html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * inside the content HTML. You can add your own processors too\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (twentyTwentyTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2luZGV4LmpzPzM1ZjUiXSwibmFtZXMiOlsicG9zdHNIYW5kbGVyIiwibmFtZSIsInByaW9yaXR5IiwicGF0dGVybiIsImZ1bmMiLCJyb3V0ZSIsInBhcmFtcyIsInN0YXRlIiwibGlicmFyaWVzIiwiYXBpIiwic291cmNlIiwicmVzcG9uc2UiLCJnZXQiLCJlbmRwb2ludCIsInBlcl9wYWdlIiwiaXRlbXMiLCJqc29uIiwiY3VycmVudFBhZ2VEYXRhIiwiZGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImxhbmciLCJpc1Bvc3RzSGFuZGxlciIsInR3ZW50eVR3ZW50eVRoZW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwiY29sb3JzIiwiZ3JheSIsImJhc2UiLCJsaWdodCIsImxpZ2h0ZXIiLCJwcmltYXJ5IiwiaGVhZGVyQmciLCJmb290ZXJCZyIsImJvZHlCZyIsInNob3dTZWFyY2hJbkhlYWRlciIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwiaXNTZWFyY2hNb2RhbE9wZW4iLCJzaG93QWxsQ29udGVudE9uQXJjaGl2ZSIsImZlYXR1cmVkTWVkaWEiLCJzaG93T25BcmNoaXZlIiwic2hvd09uUG9zdCIsImF1dG9QcmVGZXRjaCIsImZvbnRTZXRzIiwiYWN0aW9ucyIsImJlZm9yZVNTUiIsImZldGNoIiwib3Blbk1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuU2VhcmNoTW9kYWwiLCJjbG9zZVNlYXJjaE1vZGFsIiwiaGFuZGxlcnMiLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7bWtCQUlBLEdBQU1BLGFBQVksQ0FBRyxDQUNuQjtBQUNBQyxJQUFJLENBQUUsT0FGYSxDQUduQkMsUUFBUSxDQUFFLEVBSFMsQ0FJbkJDLE9BQU8sQ0FBRSxlQUpVLENBS25CQyxJQUFJLHdDQUFFLGVBQStDLElBQXhDLENBQUVD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LENBQUNyRCxZQUFELENBREosQ0FEQyxDQUlUc0QsVUFBVSxDQUFFLENBQ1Y7QUFDTjtBQUNBO0FBQ0EsU0FDTUMsVUFBVSxDQUFFLENBQUNDLDZFQUFELENBTEYsQ0FKSCxDQTVFYSxDQUExQixDQTBGZWpDLGdGQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaW1hZ2VcIjtcblxuXG5jb25zdCBwb3N0c0hhbmRsZXIgPSB7XG4gIC8vR2V0IGEgcG9zdHMgYnkgbGFuZ1xuICBuYW1lOiBcInBvc3RzXCIsXG4gIHByaW9yaXR5OiAxMCxcbiAgcGF0dGVybjogXCIvd3AvdjIvcG9zdHMvXCIsXG4gIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAgIGNvbnN0IHsgYXBpIH0gPSBsaWJyYXJpZXMuc291cmNlO1xuXG4gICAgLy8gMS4gZmV0Y2ggdGhlIGRhdGEgeW91IHdhbnQgZnJvbSB0aGUgZW5kcG9pbnQgcGFnZVxuICAgIHZhciByZXNwb25zZTtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCh7XG4gICAgICAgIGVuZHBvaW50OiBcIi93cC92Mi9wb3N0cy9cIixcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyX3BhZ2U6IDEwIC8vIFRvIG1ha2Ugc3VyZSB3ZSBnZXQgYWxsIGVsZW1lbnRzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gMi4gZ2V0IGFuIGFycmF5IHdpdGggZWFjaCBpdGVtIGluIGpzb24gZm9ybWF0XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcbiAgICBjb25zdCBjdXJyZW50UGFnZURhdGEgPSBzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV07XG5cbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xuICAgICAgbGFuZyxcbiAgICAgIGl0ZW1zLFxuICAgICAgaXNQb3N0c0hhbmRsZXI6IHRydWVcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgdHdlbnR5VHdlbnR5VGhlbWUgPSB7XG4gIG5hbWU6IFwiQGZyb250aXR5L3R3ZW50eXR3ZW50eS10aGVtZVwiLFxuICByb290czoge1xuICAgIC8qKlxuICAgICAqICBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxuICAgICAqICBXZSB1c2Ugcm9vdHMgZm9yIHRoYXQsIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IFRoZW1lLFxuICB9LFxuICBzdGF0ZToge1xuICAgIC8qKlxuICAgICAqIFN0YXRlIGlzIHdoZXJlIHRoZSBwYWNrYWdlcyBzdG9yZSB0aGVpciBkZWZhdWx0IHNldHRpbmdzIGFuZCBvdGhlclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgZ3JheToge1xuICAgICAgICAgIGJhc2U6IFwiIzZENkQ2RFwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNEQ0Q3Q0FcIixcbiAgICAgICAgICBsaWdodGVyOiBcIiNGNUVGRTBcIixcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbWFyeTogXCIjY2QyNjUzXCIsXG4gICAgICAgIGhlYWRlckJnOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZm9vdGVyQmc6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBib2R5Qmc6IFwiI2Y1ZWZlMFwiLFxuICAgICAgfSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoIGJ1dHRvbiBpbiBwYWdlIGhlYWRlclxuICAgICAgc2hvd1NlYXJjaEluSGVhZGVyOiB0cnVlLFxuICAgICAgLy8gTWVudSBsaW5rcyB0byBkaXNwbGF5IGluIHRoZSBoZWFkZXJcbiAgICAgIG1lbnU6IFtdLFxuICAgICAgLy8gU3RhdGUgZm9yIHRoZSBtZW51IG9uIG1vYmlsZVxuICAgICAgaXNNb2JpbGVNZW51T3BlbjogZmFsc2UsXG4gICAgICAvLyBTdGF0ZSBmb3IgdGhlIHNlYXJjaCBtb2RhbCBvbiBtb2JpbGVcbiAgICAgIGlzU2VhcmNoTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gc2hvdyBhbGwgcG9zdCBjb250ZW50IG9yIG9ubHkgZXhjZXJwdCAoc3VtbWFyeSkgaW4gYXJjaGl2ZSB2aWV3XG4gICAgICBzaG93QWxsQ29udGVudE9uQXJjaGl2ZTogZmFsc2UsXG4gICAgICAvLyBTZXR0aW5ncyBmb3IgdGhlIGZlYXR1cmVkIG1lZGlhIChpbWFnZSBvciB2aWRlbylcbiAgICAgIGZlYXR1cmVkTWVkaWE6IHtcbiAgICAgICAgLy8gV2hldGhlciB0byBzaG93IGl0IG9uIGFyY2hpdmUgdmlld1xuICAgICAgICBzaG93T25BcmNoaXZlOiB0cnVlLFxuICAgICAgICAvLyBXaGV0aGVyIHRvIHNob3cgaXQgb24gcG9zdFxuICAgICAgICBzaG93T25Qb3N0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gYXV0by1mZXRjaCBsaW5rcyBvbiBhIHBhZ2UuIFZhbHVlcyBjYW4gYmUgXCJub1wiIHwgXCJhbGxcIiB8IFwiaW4tdmlld1wiIHwgXCJob3ZlclwiXG4gICAgICBhdXRvUHJlRmV0Y2g6IFwibm9cIixcbiAgICAgIC8qKlxuICAgICAgICogQXQgdGhlIG1vbWVudCwgd2Ugb25seSBpbmNsdWRlIHRoZSBhc2NpaSBjaGFyYWN0ZXJzIG9mIEludGVyIGZvbnQuXG4gICAgICAgKiBWYWx1ZXMgY2FuIGJlIFwidXMtYXNjaWlcIiB8IFwibGF0aW5cIiB8IFwiYWxsXCJcbiAgICAgICAqL1xuICAgICAgZm9udFNldHM6IFwiYWxsXCIsXG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXG4gICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxuICAgKi9cbiAgYWN0aW9uczoge1xuICAgIHRoZW1lOiB7XG4gICAgICBiZWZvcmVTU1I6ICh7IGFjdGlvbnMsIHN0YXRlIH0pID0+IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvd3AvdjIvcG9zdHMvXCIpO1xuXG4gICAgICB9LFxuICAgICAgb3Blbk1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9IHRydWU7XG4gICAgICB9LFxuICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBvcGVuU2VhcmNoTW9kYWw6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNTZWFyY2hNb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIGNsb3NlU2VhcmNoTW9kYWw6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNTZWFyY2hNb2RhbE9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlicmFyaWVzOiB7XG4gICAgc291cmNlOiB7XG4gICAgICBoYW5kbGVyczogW3Bvc3RzSGFuZGxlcl1cbiAgICB9LFxuICAgIGh0bWwycmVhY3Q6IHtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGEgcHJvY2Vzc29yIHRvIGBodG1sMnJlYWN0YCBzbyBpdCBwcm9jZXNzZXMgdGhlIGA8aW1nPmAgdGFnc1xuICAgICAgICogaW5zaWRlIHRoZSBjb250ZW50IEhUTUwuIFlvdSBjYW4gYWRkIHlvdXIgb3duIHByb2Nlc3NvcnMgdG9vXG4gICAgICAgKi9cbiAgICAgIHByb2Nlc3NvcnM6IFtpbWFnZV0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR3ZW50eVR3ZW50eVRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/index.js\n");

/***/ })

})
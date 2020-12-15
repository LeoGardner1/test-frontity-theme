webpackHotUpdate("frontity-cy",{

/***/ "./packages/twentytwenty-theme/src/index.js":
/*!**************************************************!*\
  !*** ./packages/twentytwenty-theme/src/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/twentytwenty-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var postsHandler={//Get a posts by lang\nname:\"posts\",priority:10,pattern:\"/wp/v2/posts/\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,state,libraries}=_ref;var{api}=libraries.source;// 1. fetch the data you want from the endpoint page\nvar response;response=yield api.get({endpoint:\"/wp/v2/posts/\",params:{per_page:10// To make sure we get all elements\n}});// 2. get an array with each item in json format\nvar items=yield response.json();// 3. add data to source\nvar currentPageData=state.source.data[route];Object.assign(currentPageData,{items,isPostsHandler:true});});function func(_x){return _func.apply(this,arguments);}return func;}()};var twentyTwentyTheme={name:\"@frontity/twentytwenty-theme\",roots:{/**\n     *  In Frontity, any package can add React components to the site.\n     *  We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{posts:[],colors:{gray:{base:\"#6D6D6D\",light:\"#DCD7CA\",lighter:\"#F5EFE0\"},primary:\"#cd2653\",headerBg:\"#ffffff\",footerBg:\"#ffffff\",bodyBg:\"#f5efe0\"},// Whether to show the search button in page header\nshowSearchInHeader:true,// Menu links to display in the header\nmenu:[],// State for the menu on mobile\nisMobileMenuOpen:false,// State for the search modal on mobile\nisSearchModalOpen:false,// Whether to show all post content or only excerpt (summary) in archive view\nshowAllContentOnArchive:false,// Settings for the featured media (image or video)\nfeaturedMedia:{// Whether to show it on archive view\nshowOnArchive:true,// Whether to show it on post\nshowOnPost:true},// Whether to auto-fetch links on a page. Values can be \"no\" | \"all\" | \"in-view\" | \"hover\"\nautoPreFetch:\"no\",/**\n       * At the moment, we only include the ascii characters of Inter font.\n       * Values can be \"us-ascii\" | \"latin\" | \"all\"\n       */fontSets:\"all\"}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{beforeSSR:(_ref2)=>{var{actions,state}=_ref2;return/*#__PURE__*/_asyncToGenerator(function*(){yield actions.source.fetch(\"/wp/v2/posts/\");state.theme.posts=state.source.get('/wp/v2/posts/');});},openMobileMenu:(_ref4)=>{var{state}=_ref4;state.theme.isMobileMenuOpen=true;},closeMobileMenu:(_ref5)=>{var{state}=_ref5;state.theme.isMobileMenuOpen=false;},openSearchModal:(_ref6)=>{var{state}=_ref6;state.theme.isSearchModalOpen=true;},closeSearchModal:(_ref7)=>{var{state}=_ref7;state.theme.isSearchModalOpen=false;}}},libraries:{source:{handlers:[postsHandler]},html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * inside the content HTML. You can add your own processors too\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (twentyTwentyTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2luZGV4LmpzPzM1ZjUiXSwibmFtZXMiOlsicG9zdHNIYW5kbGVyIiwibmFtZSIsInByaW9yaXR5IiwicGF0dGVybiIsImZ1bmMiLCJyb3V0ZSIsInN0YXRlIiwibGlicmFyaWVzIiwiYXBpIiwic291cmNlIiwicmVzcG9uc2UiLCJnZXQiLCJlbmRwb2ludCIsInBhcmFtcyIsInBlcl9wYWdlIiwiaXRlbXMiLCJqc29uIiwiY3VycmVudFBhZ2VEYXRhIiwiZGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImlzUG9zdHNIYW5kbGVyIiwidHdlbnR5VHdlbnR5VGhlbWUiLCJyb290cyIsInRoZW1lIiwiVGhlbWUiLCJwb3N0cyIsImNvbG9ycyIsImdyYXkiLCJiYXNlIiwibGlnaHQiLCJsaWdodGVyIiwicHJpbWFyeSIsImhlYWRlckJnIiwiZm9vdGVyQmciLCJib2R5QmciLCJzaG93U2VhcmNoSW5IZWFkZXIiLCJtZW51IiwiaXNNb2JpbGVNZW51T3BlbiIsImlzU2VhcmNoTW9kYWxPcGVuIiwic2hvd0FsbENvbnRlbnRPbkFyY2hpdmUiLCJmZWF0dXJlZE1lZGlhIiwic2hvd09uQXJjaGl2ZSIsInNob3dPblBvc3QiLCJhdXRvUHJlRmV0Y2giLCJmb250U2V0cyIsImFjdGlvbnMiLCJiZWZvcmVTU1IiLCJmZXRjaCIsIm9wZW5Nb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51Iiwib3BlblNlYXJjaE1vZGFsIiwiY2xvc2VTZWFyY2hNb2RhbCIsImhhbmRsZXJzIiwiaHRtbDJyZWFjdCIsInByb2Nlc3NvcnMiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7O21rQkFHQSxHQUFNQSxhQUFZLENBQUcsQ0FDbkI7QUFDQUMsSUFBSSxDQUFFLE9BRmEsQ0FHbkJDLFFBQVEsQ0FBRSxFQUhTLENBSW5CQyxPQUFPLENBQUUsZUFKVSxDQUtuQkMsSUFBSSx3Q0FBRSxlQUF1QyxJQUFoQyxDQUFF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LENBQWdDLEtBQWhDLENBQ0QsQ0FoQkksQ0FEQSxDQXpEZSxDQTZFeEJoQyxTQUFTLENBQUUsQ0FDVEUsTUFBTSxDQUFFLENBQ040QyxRQUFRLENBQUUsQ0FBQ3JELFlBQUQsQ0FESixDQURDLENBSVRzRCxVQUFVLENBQUUsQ0FDVjtBQUNOO0FBQ0E7QUFDQSxTQUNNQyxVQUFVLENBQUUsQ0FBQ0MsNkVBQUQsQ0FMRixDQUpILENBN0VhLENBQTFCLENBMkZlbEMsZ0ZBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBpbWFnZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pbWFnZVwiO1xuXG5jb25zdCBwb3N0c0hhbmRsZXIgPSB7XG4gIC8vR2V0IGEgcG9zdHMgYnkgbGFuZ1xuICBuYW1lOiBcInBvc3RzXCIsXG4gIHByaW9yaXR5OiAxMCxcbiAgcGF0dGVybjogXCIvd3AvdjIvcG9zdHMvXCIsXG4gIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcbiAgICBjb25zdCB7IGFwaSB9ID0gbGlicmFyaWVzLnNvdXJjZTtcblxuICAgIC8vIDEuIGZldGNoIHRoZSBkYXRhIHlvdSB3YW50IGZyb20gdGhlIGVuZHBvaW50IHBhZ2VcbiAgICB2YXIgcmVzcG9uc2U7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoe1xuICAgICAgICBlbmRwb2ludDogXCIvd3AvdjIvcG9zdHMvXCIsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBlcl9wYWdlOiAxMCAvLyBUbyBtYWtlIHN1cmUgd2UgZ2V0IGFsbCBlbGVtZW50c1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIDIuIGdldCBhbiBhcnJheSB3aXRoIGVhY2ggaXRlbSBpbiBqc29uIGZvcm1hdFxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gMy4gYWRkIGRhdGEgdG8gc291cmNlXG4gICAgY29uc3QgY3VycmVudFBhZ2VEYXRhID0gc3RhdGUuc291cmNlLmRhdGFbcm91dGVdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjdXJyZW50UGFnZURhdGEsIHtcbiAgICAgIGl0ZW1zLFxuICAgICAgaXNQb3N0c0hhbmRsZXI6IHRydWVcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgdHdlbnR5VHdlbnR5VGhlbWUgPSB7XG4gIG5hbWU6IFwiQGZyb250aXR5L3R3ZW50eXR3ZW50eS10aGVtZVwiLFxuICByb290czoge1xuICAgIC8qKlxuICAgICAqICBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxuICAgICAqICBXZSB1c2Ugcm9vdHMgZm9yIHRoYXQsIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IFRoZW1lLFxuICB9LFxuICBzdGF0ZToge1xuICAgIC8qKlxuICAgICAqIFN0YXRlIGlzIHdoZXJlIHRoZSBwYWNrYWdlcyBzdG9yZSB0aGVpciBkZWZhdWx0IHNldHRpbmdzIGFuZCBvdGhlclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiB7XG4gICAgICBwb3N0czogW10sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgZ3JheToge1xuICAgICAgICAgIGJhc2U6IFwiIzZENkQ2RFwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNEQ0Q3Q0FcIixcbiAgICAgICAgICBsaWdodGVyOiBcIiNGNUVGRTBcIixcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbWFyeTogXCIjY2QyNjUzXCIsXG4gICAgICAgIGhlYWRlckJnOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZm9vdGVyQmc6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBib2R5Qmc6IFwiI2Y1ZWZlMFwiLFxuICAgICAgfSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoIGJ1dHRvbiBpbiBwYWdlIGhlYWRlclxuICAgICAgc2hvd1NlYXJjaEluSGVhZGVyOiB0cnVlLFxuICAgICAgLy8gTWVudSBsaW5rcyB0byBkaXNwbGF5IGluIHRoZSBoZWFkZXJcbiAgICAgIG1lbnU6IFtdLFxuICAgICAgLy8gU3RhdGUgZm9yIHRoZSBtZW51IG9uIG1vYmlsZVxuICAgICAgaXNNb2JpbGVNZW51T3BlbjogZmFsc2UsXG4gICAgICAvLyBTdGF0ZSBmb3IgdGhlIHNlYXJjaCBtb2RhbCBvbiBtb2JpbGVcbiAgICAgIGlzU2VhcmNoTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gc2hvdyBhbGwgcG9zdCBjb250ZW50IG9yIG9ubHkgZXhjZXJwdCAoc3VtbWFyeSkgaW4gYXJjaGl2ZSB2aWV3XG4gICAgICBzaG93QWxsQ29udGVudE9uQXJjaGl2ZTogZmFsc2UsXG4gICAgICAvLyBTZXR0aW5ncyBmb3IgdGhlIGZlYXR1cmVkIG1lZGlhIChpbWFnZSBvciB2aWRlbylcbiAgICAgIGZlYXR1cmVkTWVkaWE6IHtcbiAgICAgICAgLy8gV2hldGhlciB0byBzaG93IGl0IG9uIGFyY2hpdmUgdmlld1xuICAgICAgICBzaG93T25BcmNoaXZlOiB0cnVlLFxuICAgICAgICAvLyBXaGV0aGVyIHRvIHNob3cgaXQgb24gcG9zdFxuICAgICAgICBzaG93T25Qb3N0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gYXV0by1mZXRjaCBsaW5rcyBvbiBhIHBhZ2UuIFZhbHVlcyBjYW4gYmUgXCJub1wiIHwgXCJhbGxcIiB8IFwiaW4tdmlld1wiIHwgXCJob3ZlclwiXG4gICAgICBhdXRvUHJlRmV0Y2g6IFwibm9cIixcbiAgICAgIC8qKlxuICAgICAgICogQXQgdGhlIG1vbWVudCwgd2Ugb25seSBpbmNsdWRlIHRoZSBhc2NpaSBjaGFyYWN0ZXJzIG9mIEludGVyIGZvbnQuXG4gICAgICAgKiBWYWx1ZXMgY2FuIGJlIFwidXMtYXNjaWlcIiB8IFwibGF0aW5cIiB8IFwiYWxsXCJcbiAgICAgICAqL1xuICAgICAgZm9udFNldHM6IFwiYWxsXCIsXG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXG4gICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxuICAgKi9cbiAgYWN0aW9uczoge1xuICAgIHRoZW1lOiB7XG4gICAgICBiZWZvcmVTU1I6ICh7IGFjdGlvbnMsIHN0YXRlIH0pID0+IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvd3AvdjIvcG9zdHMvXCIpO1xuICAgICAgICBzdGF0ZS50aGVtZS5wb3N0cyA9IHN0YXRlLnNvdXJjZS5nZXQoJy93cC92Mi9wb3N0cy8nKTtcbiAgICAgIH0sXG4gICAgICBvcGVuTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjbG9zZU1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIG9wZW5TZWFyY2hNb2RhbDogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc1NlYXJjaE1vZGFsT3BlbiA9IHRydWU7XG4gICAgICB9LFxuICAgICAgY2xvc2VTZWFyY2hNb2RhbDogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc1NlYXJjaE1vZGFsT3BlbiA9IGZhbHNlO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaWJyYXJpZXM6IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIGhhbmRsZXJzOiBbcG9zdHNIYW5kbGVyXVxuICAgIH0sXG4gICAgaHRtbDJyZWFjdDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXG4gICAgICAgKiBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC4gWW91IGNhbiBhZGQgeW91ciBvd24gcHJvY2Vzc29ycyB0b29cbiAgICAgICAqL1xuICAgICAgcHJvY2Vzc29yczogW2ltYWdlXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHdlbnR5VHdlbnR5VGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/index.js\n");

/***/ })

})
export function LanguageSwitcher({state}) {
    //get the id of the correct type's translation
    const data = state.source.get(state.router.link);
    const post = state.source.post[data.id];
    const category = state.source.category[data.id];
    var translatedId;
    var translatedObj;
    var translatedLink = "";
  
    if (typeof post !== 'undefined'){
      if(post.lang == "en"){
        translatedId = post.translations.cy;
        for (i in state.theme.posts.items){
          if(state.theme.posts.items[i].id == translatedId){
            translatedObj = state.theme.posts.items[i];
          }
        }
        if (typeof translatedObj !== "undefined"){
          translatedLink = "/" + translatedObj.lang + "/" + translatedObj.lang + "/" + translatedObj.slug
        }
      } else if (post.lang == "cy"){
        translatedId = post.translations.en;
        for (i in state.theme.posts.items){
          if(state.theme.posts.items[i].id == translatedId){
            translatedObj = state.theme.posts.items[i];
          }
        }
        if (typeof translatedObj !== "undefined"){
          translatedLink = "/" + translatedObj.slug
        }
      }
  
      // var translatedObj = state.source.post[translatedId];
  
    } else if (typeof category !== 'undefined'){
  
      if(category.lang == "en"){
        translatedId = category.translations.cy;
      } else if (category.lang == "cy"){
        translatedId = category.translations.en;
      }
      for(var i in state.theme.categories.items){
        if(state.theme.categories.items[i].id == translatedId){
          var translatedObj = state.theme.categories.items[i];
          break;
        }
      }
      console.log(translatedObj);
      if (typeof translatedObj !== "undefined"){
          translatedLink = "/" + translatedObj.slug
      }
    }
  
    var langSwitcherEnToCy;
    var langSwitcherCyToEn;
  
    if(typeof translatedObj !== 'undefined'){
      langSwitcherEnToCy = '<div class="nav-global-context ml-auto"> <a href="' + translatedLink + '" lang="cy" aria-label="Welsh version of this page" class="ga-event " data-action="click" data-category="nav-global" data-label="Cymraeg"> <span class="d-xs-none d-md-none d-lg-inline">Cymraeg</span> <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.9987 399.9657"> <title>cymraeg</title><path d="M316.99,163.84c-1.45,137.2-158.15,266.7-281.56,229.79-8.42-2.52,36-8.08,64.42-31.85,35.46-29.67,27.08-49.09,22.43-50.3C54.08,293.77,0,232.24,0,158.48A158.51,158.51,0,0,1,158.52.04C246.07.04,317.91,76.31,316.99,163.84Z" transform="translate(0 -0.04)"/> <path d="M191.47,182.04l25.37,3q-1.83,12.35-5,19.77a54.28,54.28,0,0,1-9.83,14.74q-16.25,17.77-42.79,17.77-27.66,0-42.51-19-18.49-23.04-18.49-59.61,0-35.65,16.91-57t45-21.37q23.09,0,37.71,13.82t19,40.11l-25.37,2.77q-3.88-16.22-9.37-23.76-7.77-10.74-21.71-10.75-15.54,0-24,14.52t-8.46,41q0,26.52,8.8,41.37t24.57,14.85a26.34,26.34,0,0,0,20.11-8.91Q189.64,196.42,191.47,182.04Z" transform="translate(0 -0.04)"/> </svg></a></div>';
      langSwitcherCyToEn = '<div class="nav-global-context ml-auto"><a href="' + translatedLink + '" lang="en" aria-label="Fersiwn Saesneg y dudalen hon" class="ga-event " data-action="click" data-category="nav-global" data-label="English"><span class="mr-lg-20 mr-xl-0">English</span></a></div>';
    } else {
      langSwitcherEnToCy = '<div class="nav-global-context ml-auto"> <a href="/cy" lang="cy" aria-label="Welsh version of this page" class="ga-event " data-action="click" data-category="nav-global" data-label="Cymraeg"> <span class="d-xs-none d-md-none d-lg-inline">Cymraeg</span> <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.9987 399.9657"> <title>cymraeg</title><path d="M316.99,163.84c-1.45,137.2-158.15,266.7-281.56,229.79-8.42-2.52,36-8.08,64.42-31.85,35.46-29.67,27.08-49.09,22.43-50.3C54.08,293.77,0,232.24,0,158.48A158.51,158.51,0,0,1,158.52.04C246.07.04,317.91,76.31,316.99,163.84Z" transform="translate(0 -0.04)"/> <path d="M191.47,182.04l25.37,3q-1.83,12.35-5,19.77a54.28,54.28,0,0,1-9.83,14.74q-16.25,17.77-42.79,17.77-27.66,0-42.51-19-18.49-23.04-18.49-59.61,0-35.65,16.91-57t45-21.37q23.09,0,37.71,13.82t19,40.11l-25.37,2.77q-3.88-16.22-9.37-23.76-7.77-10.74-21.71-10.75-15.54,0-24,14.52t-8.46,41q0,26.52,8.8,41.37t24.57,14.85a26.34,26.34,0,0,0,20.11-8.91Q189.64,196.42,191.47,182.04Z" transform="translate(0 -0.04)"/> </svg></a></div>';
      langSwitcherCyToEn = '<div class="nav-global-context ml-auto"><a href="/" lang="en" aria-label="Fersiwn Saesneg y dudalen hon" class="ga-event " data-action="click" data-category="nav-global" data-label="English"><span class="mr-lg-20 mr-xl-0">English</span></a></div>';
    }
    
    var langSwitcher;
  
    if(state.router.link.includes("/cy/")) {
      langSwitcher = langSwitcherCyToEn;
    } else {
      langSwitcher = langSwitcherEnToCy;
    }
      return langSwitcher
  };
  
import{i as w,a as E,S as I,l as S}from"./assets/vendor-890c8691.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(t,o,a="topRight",n=5e3){w.show({message:t,color:o,position:a,timeout:n})}function f(t){d(t,"red")}function $(t){d(t,"green")}const q="https://pixabay.com/api",H="41941972-0a3072545573ea3ac4c45ea8e";function m(t,o=1,a=40){return E.get(`${q}/?key=${H}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${a}&page=${o}`).catch(n=>(f(n.message),{totalHits:0,hits:[]})).then(n=>({hits:n.data.hits.map(({webformatURL:r,largeImageURL:s,tags:c,likes:y,views:b,comments:v,downloads:L})=>({webformatURL:r,largeImageURL:s,tags:c,likes:y,views:b,comments:v,downloads:L})),total:n.data.totalHits}))}const l=40;let i;function _(){const t=document.getElementById("search-form");t&&t.addEventListener("submit",async o=>{o.preventDefault();const a=[...t.elements].find(e=>e.name==="searchQuery");if(!a)return;const n=a.value;try{const e=await m(n,1,l);if(g({query:n,page:1,total:e.total}),h(e.hits,!0),!e.total){f("Sorry, there are no images matching your search query. Please try again.");return}$(`Hooray! We found ${e.total} images.`)}catch{}})}function g({query:t,page:o,total:a}){localStorage.setItem("query",t),localStorage.setItem("page",o),localStorage.setItem("total",a)}function p(){const t=localStorage.getItem("query"),o=+localStorage.getItem("page"),a=+localStorage.getItem("total");return{query:t,page:o,total:a}}function A(){window.addEventListener("scroll",S(async()=>{const{scrollTop:t,scrollHeight:o,clientHeight:a}=document.documentElement;if(t+a>=o&&P()){u();const{query:n,page:e}=p(),r=await m(n,e+1,l);u(!1),g({query:n,page:e+1,total:r.total}),h(r.hits,!1)}},400),{passive:!0})}function P(){const{page:t,total:o}=p();return o>t*l}function D(){_(),A(),i=R()}function M(t){const{webformatURL:o,largeImageURL:a,tags:n,likes:e,views:r,comments:s,downloads:c}=t;return`
  <div class="photo-card">
    <div class="image-container">
      <a href="${a}">
        <img src="${o}" alt="${n}" loading="lazy" />
      </a>
    </div>
    <div class="info">
        <p class="info-item">
          <b>Likes</b>
          <span>${e}</span>
        </p>
        <p class="info-item">
          <b>Views</b>
          <span>${r}</span>
        </p>
        <p class="info-item">
            <b>Comments</b>
            <span>${s}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <span>${c}</span>
        </p>
    </div>
   </div>
  `}function h(t,o=!0){const a=document.querySelector(".gallery");if(!a)return;const n=t.map(e=>M(e)).join("");o?a.innerHTML=n:a.insertAdjacentHTML("beforeend",n),i==null||i.refresh()}function u(t=!0){const o=document.querySelector(".loader");o&&(t?o.classList.remove("hidden"):o.classList.add("hidden"))}function R(){return new I(".gallery a",{captionDelay:250,captionsData:"alt"})}D();
//# sourceMappingURL=commonHelpers.js.map

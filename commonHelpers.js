import{a as E,i as I,S,l as $}from"./assets/vendor-b046366f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const P="https://pixabay.com/api",_="41941972-0a3072545573ea3ac4c45ea8e";async function A(e,t=1,n=40){const a=await E.get(`${P}/?key=${_}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${n}&page=${t}`);return{hits:a.data.hits.map(({webformatURL:r,largeImageURL:s,tags:l,likes:b,views:v,comments:w,downloads:L})=>({webformatURL:r,largeImageURL:s,tags:l,likes:b,views:v,comments:w,downloads:L})),total:a.data.totalHits}}function f(e,t,n="topRight",a=5e3){I.show({message:e,color:t,position:n,timeout:a})}function i(e){f(e,"red")}function H(e){f(e,"green")}const m=40;let c;function D(){const e=document.getElementById("search-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=[...e.elements].find(o=>o.name==="searchQuery");if(!n)return;const a=n.value;await g(a,1,!0)})}function M({query:e,page:t,total:n}){localStorage.setItem("query",e),localStorage.setItem("page",t),localStorage.setItem("total",n)}function p(){const e=localStorage.getItem("query"),t=+localStorage.getItem("page"),n=+localStorage.getItem("total");return{query:e,page:t,total:n}}function R(){window.addEventListener("scroll",$(async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;if(e+n>=t&&h()){const{query:a,page:o}=p();await g(a,o+1)}},400),{passive:!0})}async function g(e,t,n=!1){if(!(e!=null&&e.trim())){u(),i("Query should not be empty.");return}try{d();const a=await A(e,t,m);M({query:e,page:t,total:a.total}),y(a.hits,n),n&&(a.total?H(`Hooray! We found ${a.total} images.`):i("Sorry, there are no images matching your search query. Please try again.")),!h()&&a.total&&i("We're sorry, but you've reached the end of search results.")}catch{u(),i("Sorry, error occurred. Please try again.")}finally{d(!1)}}function u(){y([],!0)}function h(){const{page:e,total:t}=p();return t>e*m}function F(){D(),R(),c=Q()}function O(e){const{webformatURL:t,largeImageURL:n,tags:a,likes:o,views:r,comments:s,downloads:l}=e;return`
  <div class="photo-card">
    <div class="image-container">
      <a href="${n}">
        <img src="${t}" alt="${a}" loading="lazy" />
      </a>
    </div>
    <div class="info">
        <p class="info-item">
          <b>Likes</b>
          <span>${o}</span>
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
            <span>${l}</span>
        </p>
    </div>
   </div>
  `}function y(e,t=!0){const n=document.querySelector(".gallery");if(!n)return;const a=e.map(o=>O(o)).join("");t?n.innerHTML=a:n.insertAdjacentHTML("beforeend",a),c==null||c.refresh()}function d(e=!0){const t=document.querySelector(".loader");t&&(e?t.classList.remove("hidden"):t.classList.add("hidden"))}function Q(){return new S(".gallery a",{captionDelay:250,captionsData:"alt"})}F();
//# sourceMappingURL=commonHelpers.js.map

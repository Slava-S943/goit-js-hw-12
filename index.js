import{a as b,S as w,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const v="55035505-d007086afe7fccf69fbb70ec0",S="https://pixabay.com/api/";async function u(s,e=1){return(await b.get(S,{params:{key:v,q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const e=s.map(o=>`<li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img 
           class="gallery-image"
           src="${o.webformatURL}" 
           alt="${o.tags}" 
         />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
    </li>`).join("");f.insertAdjacentHTML("beforeend",e),q.refresh()}function R(){f.innerHTML=""}function y(){p.classList.remove("is-hidden")}function g(){p.classList.add("is-hidden")}function B(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}const E=document.querySelector(".form"),M=document.querySelector(".load-more");let i=1,a="",l=0;E.addEventListener("submit",$);M.addEventListener("click",x);async function $(s){if(s.preventDefault(),a=s.target.elements["search-text"].value.trim(),!a){n.error({message:"Enter search text!",position:"topRight"});return}i=1,R(),L(),y();try{const e=await u(a,i);if(e.hits.length===0){n.error({message:"No images found!",position:"topRight"});return}l=e.totalHits,h(e.hits),i*15<l&&B()}catch{n.error({message:"Error occurred!",position:"topRight"})}finally{g()}}async function x(){i+=1,y();try{const s=await u(a,i);h(s.hits);const e=document.querySelector(".gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}i*15>=l&&(L(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Error occurred!",position:"topRight"})}finally{g()}}
//# sourceMappingURL=index.js.map

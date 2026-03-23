import{a as v,S as w,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="55035505-d007086afe7fccf69fbb70ec0",R="https://pixabay.com/api/";async function u(r,t=1){return(await v.get(R,{params:{key:S,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){const t=r.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img 
           class="gallery-image"
           src="${s.webformatURL}" 
           alt="${s.tags}" 
         />
        </a>

        <div class="info">
          <p><b>Likes</b> ${s.likes}</p>
          <p><b>Views</b> ${s.views}</p>
          <p><b>Comments</b> ${s.comments}</p>
          <p><b>Downloads</b> ${s.downloads}</p>
        </div>
    </li>`).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function E(){f.innerHTML=""}function y(){p.classList.remove("is-hidden")}function g(){p.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}const B=document.querySelector(".form"),M=document.querySelector(".load-more");let n=1,a="",l=0;B.addEventListener("submit",$);M.addEventListener("click",x);async function $(r){if(r.preventDefault(),a=r.target.elements["search-text"].value.trim(),!a){i.error({message:"Enter search text!",position:"topRight"});return}n=1,E(),L(),y();try{const t=await u(a,n);if(t.hits.length===0){i.error({message:"No images found!",position:"topRight"});return}l=t.totalHits,m(t.hits),n*15<l?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Error occurred!",position:"topRight"})}finally{g()}}async function x(){n+=1,L(),y();try{const r=await u(a,n);m(r.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),n*15>=l?i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b()}catch{i.error({message:"Error occurred!",position:"topRight"})}finally{g()}}
//# sourceMappingURL=index.js.map

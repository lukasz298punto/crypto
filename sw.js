if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-17303861"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B9d0hRVi.js",revision:null},{url:"assets/index-D3Hj1JHr.css",revision:null},{url:"index.html",revision:"56d3445af7ce3eed9c5deb07ec19b147"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-1024x1024.png",revision:"8f6d8f56189ec5986afcf849c16eaac7"},{url:"icons/icon-192x192.png",revision:"a5e54ffc332e7f4b6f49fefa0e1d0cf2"},{url:"icons/icon-512x512.png",revision:"5d38d2766538d57b2d6f127c8e5a2831"},{url:"manifest.webmanifest",revision:"422bdeba191b5ff4989e8b5fd5bf13f0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET")}));

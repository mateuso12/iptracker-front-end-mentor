if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>n(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/41-8dccf4184f91f3ff.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/962.ce17a41cf3d9bf64.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/main-5628061fb0196fe6.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/pages/_app-1d0f6aa83976b914.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/pages/index-7e7e5fe4e7a62b73.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/chunks/webpack-feec1d72f3491aa1.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/f4DvA0j69irg9rkaRpHRI/_buildManifest.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/f4DvA0j69irg9rkaRpHRI/_middlewareManifest.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/_next/static/f4DvA0j69irg9rkaRpHRI/_ssgManifest.js",revision:"f4DvA0j69irg9rkaRpHRI"},{url:"/img/favicon-32x32.png",revision:"a07f423b8bbf4a50c2c449b96795fcb6"},{url:"/img/icon-arrow.svg",revision:"53ef8ed8ef4b92721f00cb8bfdc5c9b9"},{url:"/img/icon-location.svg",revision:"ff17146919959b508ee5dd9af2f9f9e5"},{url:"/img/pattern-bg.png",revision:"8d3f4ad64bf3a9320e172edf01e0c016"},{url:"/manifest.json",revision:"df3f8a74dbc198b02d395afab4ce7c8f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

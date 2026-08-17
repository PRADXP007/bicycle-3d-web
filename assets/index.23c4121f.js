var Zp=Object.defineProperty;var Jp=(a,e,t)=>e in a?Zp(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var yu=(a,e,t)=>(Jp(a,typeof e!="symbol"?e+"":e,t),t);const Qp=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Qp();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="142";const em=0,bu=1,tm=2,Vd=1,Gd=2,Js=3,vs=0,Gt=1,Ar=2,nm=1,Vi=0,us=1,Mu=2,wu=3,Su=4,im=5,is=100,rm=101,sm=102,Tu=103,Eu=104,om=200,am=201,lm=202,cm=203,Hd=204,Wd=205,um=206,hm=207,dm=208,fm=209,pm=210,mm=0,gm=1,_m=2,ac=3,xm=4,vm=5,ym=6,bm=7,Xd=0,Mm=1,wm=2,mi=0,Sm=1,Tm=2,Em=3,jd=4,Am=5,qd=300,ys=301,bs=302,lc=303,cc=304,Qa=306,Ms=1e3,En=1001,ka=1002,Ot=1003,uc=1004,hc=1005,ln=1006,Yd=1007,Is=1008,Lr=1009,Lm=1010,Cm=1011,$d=1012,Rm=1013,fr=1014,Fi=1015,vo=1016,Pm=1017,Dm=1018,hs=1020,Im=1021,Fm=1022,zn=1023,Om=1024,Nm=1025,vr=1026,ws=1027,km=1028,zm=1029,Bm=1030,Um=1031,Vm=1033,ul=33776,hl=33777,dl=33778,fl=33779,Au=35840,Lu=35841,Cu=35842,Ru=35843,Gm=36196,Pu=37492,Du=37496,Iu=37808,Fu=37809,Ou=37810,Nu=37811,ku=37812,zu=37813,Bu=37814,Uu=37815,Vu=37816,Gu=37817,Hu=37818,Wu=37819,Xu=37820,ju=37821,qu=36492,yo=2300,Ss=2301,pl=2302,Yu=2400,$u=2401,Ku=2402,Hm=2500,Wm=2501,Xm=1,Kd=2,Cr=3e3,tt=3001,jm=3200,qm=3201,Vc=0,Ym=1,ci="srgb",pr="srgb-linear",ml=7680,$m=519,dc=35044,Zu="300 es",fc=1035;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const oo=Math.PI/180,bo=180/Math.PI;function Un(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[a&255]+zt[a>>8&255]+zt[a>>16&255]+zt[a>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Kt(a,e,t){return Math.max(e,Math.min(t,a))}function Gc(a,e){return(a%e+e)%e}function Km(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Zm(a,e,t){return a!==e?(t-a)/(e-a):0}function ao(a,e,t){return(1-t)*a+t*e}function Jm(a,e,t,n){return ao(a,e,1-Math.exp(-t*n))}function Qm(a,e=1){return e-Math.abs(Gc(a,e*2)-e)}function eg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function tg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ng(a,e){return a+Math.floor(Math.random()*(e-a+1))}function ig(a,e){return a+Math.random()*(e-a)}function rg(a){return a*(.5-Math.random())}function sg(a){a!==void 0&&(Ju=a);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function og(a){return a*oo}function ag(a){return a*bo}function pc(a){return(a&a-1)===0&&a!==0}function Zd(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function za(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function lg(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*d,o*c);break;case"YZY":a.set(l*d,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*d,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cg(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ug(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var hg=Object.freeze({__proto__:null,DEG2RAD:oo,RAD2DEG:bo,generateUUID:Un,clamp:Kt,euclideanModulo:Gc,mapLinear:Km,inverseLerp:Zm,lerp:ao,damp:Jm,pingpong:Qm,smoothstep:eg,smootherstep:tg,randInt:ng,randFloat:ig,randFloatSpread:rg,seededRandom:sg,degToRad:og,radToDeg:ag,isPowerOfTwo:pc,ceilPowerOfTwo:Zd,floorPowerOfTwo:za,setQuaternionFromProperEuler:lg,normalize:ug,denormalize:cg});class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(){An.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],p=i[0],m=i[3],_=i[6],x=i[1],M=i[4],b=i[7],y=i[2],S=i[5],A=i[8];return r[0]=s*p+o*x+l*y,r[3]=s*m+o*M+l*S,r[6]=s*_+o*b+l*A,r[1]=c*p+u*x+h*y,r[4]=c*m+u*M+h*S,r[7]=c*_+u*b+h*A,r[2]=d*p+f*x+g*y,r[5]=d*m+f*M+g*S,r[8]=d*_+f*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*l-u*r,f=c*r-s*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*s)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(s*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function Mo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function yr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Sa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const gl={[ci]:{[pr]:yr},[pr]:{[ci]:Sa}},In={legacyMode:!0,get workingColorSpace(){return pr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(gl[e]&&gl[e][t]!==void 0){const n=gl[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={r:0,g:0,b:0},Fn={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function _l(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Wo(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pr){return this.r=e,this.g=t,this.b=n,In.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pr){if(e=Gc(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=_l(s,r,e+1/3),this.g=_l(s,r,e),this.b=_l(s,r,e-1/3)}return In.toWorkingColorSpace(this,i),this}setStyle(e,t=ci){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,In.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,In.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,In.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,In.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ci){const n=Qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return In.fromWorkingColorSpace(Wo(this,Tt),e),Kt(Tt.r*255,0,255)<<16^Kt(Tt.g*255,0,255)<<8^Kt(Tt.b*255,0,255)<<0}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pr){In.fromWorkingColorSpace(Wo(this,Tt),t);const n=Tt.r,i=Tt.g,r=Tt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pr){return In.fromWorkingColorSpace(Wo(this,Tt),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=ci){return In.fromWorkingColorSpace(Wo(this,Tt),e),e!==ci?`color(${e} ${Tt.r} ${Tt.g} ${Tt.b})`:`rgb(${Tt.r*255|0},${Tt.g*255|0},${Tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Fn),Fn.h+=e,Fn.s+=t,Fn.l+=n,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ho);const n=ao(Fn.h,Ho.h,t),i=ao(Fn.s,Ho.s,t),r=ao(Fn.l,Ho.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=Qd;let Ur;class ef{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=Mo("canvas")),Ur.width=e.width,Ur.height=e.height;const n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=yr(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tf{constructor(e=null){this.isSource=!0,this.uuid=Un(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(xl(i[s].image)):r.push(xl(i[s]))}else r=xl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xl(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?ef.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dg=0;class nn extends Fs{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=En,i=En,r=ln,s=Is,o=zn,l=Lr,c=1,u=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Un(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new An,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=qd;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(f+1)/2,y=(_+1)/2,S=(u+d)/4,A=(h+p)/4,v=(g+m)/4;return M>b&&M>y?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=A/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=v/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-p)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rr extends Fs{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nf extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fg extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],f=r[s+1],g=r[s+2],p=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==f||u!==g){let m=1-o;const _=l*d+c*f+u*g+h*p,x=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const y=Math.sqrt(M),S=Math.atan2(y,_*x);m=Math.sin(m*S)/y,o=Math.sin(o*S)/y}const b=o*x;if(l=l*m+d*b,c=c*m+f*b,u=u*m+g*b,h=h*m+p*b,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],f=r[s+2],g=r[s+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-o*i;return this.x=c*l+d*-r+u*-o-h*-s,this.y=u*l+d*-s+h*-r-c*-o,this.z=h*l+d*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new k,Qu=new yi;class Os{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>s&&(s=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>s&&(s=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,o=r.count;s<o;s++)Ji.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Ji)}else n.boundingBox===null&&n.computeBoundingBox(),yl.copy(n.boundingBox),yl.applyMatrix4(e.matrixWorld),this.union(yl);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Xo.subVectors(this.max,Gs),Vr.subVectors(e.a,Gs),Gr.subVectors(e.b,Gs),Hr.subVectors(e.c,Gs),Ti.subVectors(Gr,Vr),Ei.subVectors(Hr,Gr),Qi.subVectors(Vr,Hr);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Qi.z,Qi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Qi.z,0,-Qi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Qi.y,Qi.x,0];return!bl(t,Vr,Gr,Hr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Vr,Gr,Hr,Xo))?!1:(jo.crossVectors(Ti,Ei),t=[jo.x,jo.y,jo.z],bl(t,Vr,Gr,Hr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new k,new k,new k,new k,new k,new k,new k,new k],Ji=new k,yl=new Os,Vr=new k,Gr=new k,Hr=new k,Ti=new k,Ei=new k,Qi=new k,Gs=new k,Xo=new k,jo=new k,er=new k;function bl(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){er.fromArray(a,r);const o=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const pg=new Os,eh=new k,qo=new k,Ml=new k;class Ns{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ml.subVectors(e,this.center);const t=Ml.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ml.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?qo.set(0,0,1).multiplyScalar(e.radius):qo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(eh.copy(e.center).add(qo)),this.expandByPoint(eh.copy(e.center).sub(qo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new k,wl=new k,Yo=new k,Ai=new k,Sl=new k,$o=new k,Tl=new k;class Hc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.direction).multiplyScalar(t).add(this.origin),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wl.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(wl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Yo),o=Ai.dot(this.direction),l=-Ai.dot(Yo),c=Ai.lengthSq(),u=Math.abs(1-s*s);let h,d,f,g;if(u>0)if(h=s*l-o,d=s*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,f=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Yo).multiplyScalar(d).add(wl),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,r){Sl.subVectors(t,e),$o.subVectors(n,e),Tl.crossVectors(Sl,$o);let s=this.direction.dot(Tl),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot($o.crossVectors(Ai,$o));if(l<0)return null;const c=o*this.direction.dot(Sl.cross(Ai));if(c<0||l+c>s)return null;const u=-o*Ai.dot(Tl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,o,l,c,u,h,d,f,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),s=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,f=s*h,g=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,p=c*h;t[0]=d+p*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=p+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,p=c*h;t[0]=d-p*o,t[4]=-s*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=p-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,g=o*u,p=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+f,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=s*l,f=s*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=s*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,gg)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(n,fn),Li.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(n,fn)),Li.normalize(),Ko.crossVectors(fn,Li),i[0]=Li.x,i[4]=Ko.x,i[8]=fn.x,i[1]=Li.y,i[5]=Ko.y,i[9]=fn.y,i[2]=Li.z,i[6]=Ko.z,i[10]=fn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],x=n[3],M=n[7],b=n[11],y=n[15],S=i[0],A=i[4],v=i[8],E=i[12],F=i[1],O=i[5],Y=i[9],J=i[13],D=i[2],G=i[6],U=i[10],N=i[14],X=i[3],z=i[7],C=i[11],ne=i[15];return r[0]=s*S+o*F+l*D+c*X,r[4]=s*A+o*O+l*G+c*z,r[8]=s*v+o*Y+l*U+c*C,r[12]=s*E+o*J+l*N+c*ne,r[1]=u*S+h*F+d*D+f*X,r[5]=u*A+h*O+d*G+f*z,r[9]=u*v+h*Y+d*U+f*C,r[13]=u*E+h*J+d*N+f*ne,r[2]=g*S+p*F+m*D+_*X,r[6]=g*A+p*O+m*G+_*z,r[10]=g*v+p*Y+m*U+_*C,r[14]=g*E+p*J+m*N+_*ne,r[3]=x*S+M*F+b*D+y*X,r[7]=x*A+M*O+b*G+y*z,r[11]=x*v+M*Y+b*U+y*C,r[15]=x*E+M*J+b*N+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+p*(+t*l*f-t*c*d+r*s*d-i*s*f+i*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*s*h+n*s*f+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],p=e[13],m=e[14],_=e[15],x=h*m*c-p*d*c+p*l*f-o*m*f-h*l*_+o*d*_,M=g*d*c-u*m*c-g*l*f+s*m*f+u*l*_-s*d*_,b=u*p*c-g*h*c+g*o*f-s*p*f-u*o*_+s*h*_,y=g*h*l-u*p*l-g*o*d+s*p*d+u*o*m-s*h*m,S=t*x+n*M+i*b+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=x*A,e[1]=(p*d*r-h*m*r-p*i*f+n*m*f+h*i*_-n*d*_)*A,e[2]=(o*m*r-p*l*r+p*i*c-n*m*c-o*i*_+n*l*_)*A,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=M*A,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*_+t*d*_)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*A,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*f+t*l*f)*A,e[8]=b*A,e[9]=(g*h*r-u*p*r-g*n*f+t*p*f+u*n*_-t*h*_)*A,e[10]=(s*p*r-g*o*r+g*n*c-t*p*c-s*n*_+t*o*_)*A,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*f-t*o*f)*A,e[12]=y*A,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*m+t*h*m)*A,e[14]=(g*o*i-s*p*i-g*n*l+t*p*l+s*n*m-t*o*m)*A,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,d=r*c,f=r*u,g=r*h,p=s*u,m=s*h,_=o*h,x=l*c,M=l*u,b=l*h,y=n.x,S=n.y,A=n.z;return i[0]=(1-(p+_))*y,i[1]=(f+b)*y,i[2]=(g-M)*y,i[3]=0,i[4]=(f-b)*S,i[5]=(1-(d+_))*S,i[6]=(m+x)*S,i[7]=0,i[8]=(g+M)*A,i[9]=(m-x)*A,i[10]=(1-(d+p))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Wr.set(i[0],i[1],i[2]).length();const s=Wr.set(i[4],i[5],i[6]).length(),o=Wr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],On.copy(this);const c=1/r,u=1/s,h=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),f=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,d=(n+i)*c,f=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wr=new k,On=new et,mg=new k(0,0,0),gg=new k(1,1,1),Li=new k,Ko=new k,fn=new k,th=new et,nh=new yi;class Bo{constructor(e=0,t=0,n=0,i=Bo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bo.DefaultOrder="XYZ";Bo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _g=0;const ih=new k,Xr=new yi,ri=new et,Zo=new k,Hs=new k,xg=new k,vg=new yi,rh=new k(1,0,0),sh=new k(0,1,0),oh=new k(0,0,1),yg={type:"added"},ah={type:"removed"};class xt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DefaultUp.clone();const e=new k,t=new Bo,n=new yi,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new An}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=xt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Hs,Zo,this.up):ri.lookAt(Zo,Hs,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(ri),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ah)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ah)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DefaultUp=new k(0,1,0);xt.DefaultMatrixAutoUpdate=!0;const Nn=new k,si=new k,El=new k,oi=new k,jr=new k,qr=new k,lh=new k,Al=new k,Ll=new k,Cl=new k;class hi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),si.subVectors(n,t),El.subVectors(e,t);const s=Nn.dot(Nn),o=Nn.dot(si),l=Nn.dot(El),c=si.dot(si),u=si.dot(El),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,g=(s*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,oi),l.set(0,0),l.addScaledVector(r,oi.x),l.addScaledVector(s,oi.y),l.addScaledVector(o,oi.z),l}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),si.subVectors(e,t),Nn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return hi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;jr.subVectors(i,n),qr.subVectors(r,n),Al.subVectors(e,n);const l=jr.dot(Al),c=qr.dot(Al);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,i);const u=jr.dot(Ll),h=qr.dot(Ll);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(jr,s);Cl.subVectors(e,r);const f=jr.dot(Cl),g=qr.dot(Cl);if(g>=0&&f<=g)return t.copy(r);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(qr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return lh.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(lh,o);const _=1/(m+p+d);return s=p*_,o=d*_,t.copy(n).addScaledVector(jr,s).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bg=0;class Zn extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=us,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hd,this.blendDst=Wd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===nm;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new k,Jo=new Ze;class tn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=dc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ze),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new Ze),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new k),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new rt),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sf extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class of extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mg=0;const bn=new et,Rl=new xt,Yr=new k,pn=new Os,Ws=new Os,At=new k;class Gn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?of:sf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new An().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(pn.min,Ws.min),pn.expandByPoint(At),At.addVectors(pn.max,Ws.max),pn.expandByPoint(At)):(pn.expandByPoint(Ws.min),pn.expandByPoint(Ws.max))}pn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),At.add(Yr)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new k,u[F]=new k;const h=new k,d=new k,f=new k,g=new Ze,p=new Ze,m=new Ze,_=new k,x=new k;function M(F,O,Y){h.fromArray(i,F*3),d.fromArray(i,O*3),f.fromArray(i,Y*3),g.fromArray(s,F*2),p.fromArray(s,O*2),m.fromArray(s,Y*2),d.sub(h),f.sub(h),p.sub(g),m.sub(g);const J=1/(p.x*m.y-m.x*p.y);!isFinite(J)||(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(J),x.copy(f).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(J),c[F].add(_),c[O].add(_),c[Y].add(_),u[F].add(x),u[O].add(x),u[Y].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,O=b.length;F<O;++F){const Y=b[F],J=Y.start,D=Y.count;for(let G=J,U=J+D;G<U;G+=3)M(n[G+0],n[G+1],n[G+2])}const y=new k,S=new k,A=new k,v=new k;function E(F){A.fromArray(r,F*3),v.copy(A);const O=c[F];y.copy(O),y.sub(A.multiplyScalar(A.dot(O))).normalize(),S.crossVectors(v,O);const J=S.dot(u[F])<0?-1:1;l[F*4]=y.x,l[F*4+1]=y.y,l[F*4+2]=y.z,l[F*4+3]=J}for(let F=0,O=b.length;F<O;++F){const Y=b[F],J=Y.start,D=Y.count;for(let G=J,U=J+D;G<U;G+=3)E(n[G+0]),E(n[G+1]),E(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new k,r=new k,s=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,s.length-c);for(let h=0,d=c;h<u;h++,d++)s[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?f=l[p]*o.data.stride+o.offset:f=l[p]*u;for(let _=0;_<u;_++)d[g++]=c[f++]}return new tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new et,$r=new Hc,Pl=new Ns,Ci=new k,Ri=new k,Pi=new k,Dl=new k,Il=new k,Fl=new k,Qo=new k,ea=new k,ta=new k,na=new Ze,ia=new Ze,ra=new Ze,Ol=new k,sa=new k;class Qt extends xt{constructor(e=new Gn,t=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(r),e.ray.intersectsSphere(Pl)===!1)||(ch.copy(r).invert(),$r.copy(e.ray).applyMatrix4(ch),n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const _=f[p],x=i[_.materialIndex],M=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,S=b;y<S;y+=3){const A=o.getX(y),v=o.getX(y+1),E=o.getX(y+2);s=oa(this,x,e,$r,l,c,u,h,d,A,v,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let _=p,x=m;_<x;_+=3){const M=o.getX(_),b=o.getX(_+1),y=o.getX(_+2);s=oa(this,i,e,$r,l,c,u,h,d,M,b,y),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const _=f[p],x=i[_.materialIndex],M=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,S=b;y<S;y+=3){const A=y,v=y+1,E=y+2;s=oa(this,x,e,$r,l,c,u,h,d,A,v,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=p,x=m;_<x;_+=3){const M=_,b=_+1,y=_+2;s=oa(this,i,e,$r,l,c,u,h,d,M,b,y),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function wg(a,e,t,n,i,r,s,o){let l;if(e.side===Gt?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side!==Ar,o),l===null)return null;sa.copy(o),sa.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:a}}function oa(a,e,t,n,i,r,s,o,l,c,u,h){Ci.fromBufferAttribute(i,c),Ri.fromBufferAttribute(i,u),Pi.fromBufferAttribute(i,h);const d=a.morphTargetInfluences;if(r&&d){Qo.set(0,0,0),ea.set(0,0,0),ta.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const m=d[g],_=r[g];m!==0&&(Dl.fromBufferAttribute(_,c),Il.fromBufferAttribute(_,u),Fl.fromBufferAttribute(_,h),s?(Qo.addScaledVector(Dl,m),ea.addScaledVector(Il,m),ta.addScaledVector(Fl,m)):(Qo.addScaledVector(Dl.sub(Ci),m),ea.addScaledVector(Il.sub(Ri),m),ta.addScaledVector(Fl.sub(Pi),m)))}Ci.add(Qo),Ri.add(ea),Pi.add(ta)}a.isSkinnedMesh&&(a.boneTransform(c,Ci),a.boneTransform(u,Ri),a.boneTransform(h,Pi));const f=wg(a,e,t,n,Ci,Ri,Pi,Ol);if(f){o&&(na.fromBufferAttribute(o,c),ia.fromBufferAttribute(o,u),ra.fromBufferAttribute(o,h),f.uv=hi.getUV(Ol,Ci,Ri,Pi,na,ia,ra,new Ze)),l&&(na.fromBufferAttribute(l,c),ia.fromBufferAttribute(l,u),ra.fromBufferAttribute(l,h),f.uv2=hi.getUV(Ol,Ci,Ri,Pi,na,ia,ra,new Ze));const g={a:c,b:u,c:h,normal:new k,materialIndex:0};hi.getNormal(Ci,Ri,Pi,g.normal),f.face=g}return f}class Uo extends Gn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(h,2));function g(p,m,_,x,M,b,y,S,A,v,E){const F=b/A,O=y/v,Y=b/2,J=y/2,D=S/2,G=A+1,U=v+1;let N=0,X=0;const z=new k;for(let C=0;C<U;C++){const ne=C*O-J;for(let re=0;re<G;re++){const ie=re*F-Y;z[p]=ie*x,z[m]=ne*M,z[_]=D,c.push(z.x,z.y,z.z),z[p]=0,z[m]=0,z[_]=S>0?1:-1,u.push(z.x,z.y,z.z),h.push(re/A),h.push(1-C/v),N+=1}}for(let C=0;C<v;C++)for(let ne=0;ne<A;ne++){const re=d+ne+G*C,ie=d+ne+G*(C+1),fe=d+(ne+1)+G*(C+1),Me=d+(ne+1)+G*C;l.push(re,ie,Me),l.push(ie,fe,Me),X+=6}o.addGroup(f,X,E),f+=X,d+=N}}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(a){const e={};for(let t=0;t<a.length;t++){const n=Ts(a[t]);for(const i in n)e[i]=n[i]}return e}const Sg={clone:Ts,merge:Bt};var Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Tg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class af extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends af{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=90,Zr=1;class Ag extends xt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Zt(Kr,Zr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new k(1,0,0)),this.add(i);const r=new Zt(Kr,Zr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new k(-1,0,0)),this.add(r);const s=new Zt(Kr,Zr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new k(0,1,0)),this.add(s);const o=new Zt(Kr,Zr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new k(0,-1,0)),this.add(o);const l=new Zt(Kr,Zr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new Zt(Kr,Zr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Wc extends nn{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lg extends Rr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Uo(5,5,5),r=new Pr({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Vi});r.uniforms.tEquirect.value=t;const s=new Qt(i,r),o=t.minFilter;return t.minFilter===Is&&(t.minFilter=ln),new Ag(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Nl=new k,Cg=new k,Rg=new An;class ir{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Nl.subVectors(n,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rg.getNormalMatrix(e),i=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Ns,aa=new k;class Xc{constructor(e=new ir,t=new ir,n=new ir,i=new ir,r=new ir,s=new ir){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],p=n[11],m=n[12],_=n[13],x=n[14],M=n[15];return t[0].setComponents(o-i,h-l,p-d,M-m).normalize(),t[1].setComponents(o+i,h+l,p+d,M+m).normalize(),t[2].setComponents(o+r,h+c,p+f,M+_).normalize(),t[3].setComponents(o-r,h-c,p-f,M-_).normalize(),t[4].setComponents(o-s,h-u,p-g,M-x).normalize(),t[5].setComponents(o+s,h+u,p+g,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(aa.x=i.normal.x>0?e.max.x:e.min.x,aa.y=i.normal.y>0?e.max.y:e.min.y,aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Pg(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,f=u.updateRange;a.bindBuffer(h,c),f.count===-1?a.bufferSubData(h,0,d):(t?a.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class el extends Gn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const x=_*d-s;for(let M=0;M<c;M++){const b=M*h-r;g.push(b,-x,0),p.push(0,0,1),m.push(M/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){const M=x+c*_,b=x+c*(_+1),y=x+1+c*(_+1),S=x+1+c*_;f.push(M,b,S),f.push(b,y,S)}this.setIndex(f),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(m,2))}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg="vec3 transformed = vec3( position );",Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Vg=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,g_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,v_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,w_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,T_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,E_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,X_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,M0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,w0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,S0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,T0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,E0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,A0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,B0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:Dg,alphamap_pars_fragment:Ig,alphatest_fragment:Fg,alphatest_pars_fragment:Og,aomap_fragment:Ng,aomap_pars_fragment:kg,begin_vertex:zg,beginnormal_vertex:Bg,bsdfs:Ug,iridescence_fragment:Vg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:jg,color_fragment:qg,color_pars_fragment:Yg,color_pars_vertex:$g,color_vertex:Kg,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e_,displacementmap_vertex:t_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,encodings_fragment:r_,encodings_pars_fragment:s_,envmap_fragment:o_,envmap_common_pars_fragment:a_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:y_,envmap_vertex:u_,fog_vertex:h_,fog_pars_vertex:d_,fog_fragment:f_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_fragment:g_,lightmap_pars_fragment:__,lights_lambert_vertex:x_,lights_pars_begin:v_,lights_toon_fragment:b_,lights_toon_pars_fragment:M_,lights_phong_fragment:w_,lights_phong_pars_fragment:S_,lights_physical_fragment:T_,lights_physical_pars_fragment:E_,lights_fragment_begin:A_,lights_fragment_maps:L_,lights_fragment_end:C_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:I_,map_fragment:F_,map_pars_fragment:O_,map_particle_fragment:N_,map_particle_pars_fragment:k_,metalnessmap_fragment:z_,metalnessmap_pars_fragment:B_,morphcolor_vertex:U_,morphnormal_vertex:V_,morphtarget_pars_vertex:G_,morphtarget_vertex:H_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:j_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:Q_,output_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:r0,dithering_pars_fragment:s0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:u0,shadowmask_pars_fragment:h0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:v0,transmission_fragment:y0,transmission_pars_fragment:b0,uv_pars_fragment:M0,uv_pars_vertex:w0,uv_vertex:S0,uv2_pars_fragment:T0,uv2_pars_vertex:E0,uv2_vertex:A0,worldpos_vertex:L0,background_vert:C0,background_frag:R0,cube_vert:P0,cube_frag:D0,depth_vert:I0,depth_frag:F0,distanceRGBA_vert:O0,distanceRGBA_frag:N0,equirect_vert:k0,equirect_frag:z0,linedashed_vert:B0,linedashed_frag:U0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:H0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:j0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:$0,meshphong_frag:K0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:Q0,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:rx,sprite_vert:sx,sprite_frag:ox},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new An},uv2Transform:{value:new An},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}}},Yn={basic:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Bt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Bt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Bt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Bt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Bt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Bt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new An},t2D:{value:null}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},cube:{uniforms:Bt([me.envmap,{opacity:{value:1}}]),vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Bt([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Bt([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Yn.physical={uniforms:Bt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};function ax(a,e,t,n,i,r){const s=new ze(0);let o=i===!0?0:1,l,c,u=null,h=0,d=null;function f(p,m){let _=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=e.get(x));const M=a.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?g(s,o):x&&x.isColor&&(g(x,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qa)?(c===void 0&&(c=new Qt(new Uo(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:Ts(Yn.cube.uniforms),vertexShader:Yn.cube.vertexShader,fragmentShader:Yn.cube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Qt(new el(2,2),new Pr({name:"BackgroundMaterial",uniforms:Ts(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,r)}return{getClearColor:function(){return s},setClearColor:function(p,m=1){s.set(p),o=m,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(s,o)},render:f}}function lx(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(D,G,U,N,X){let z=!1;if(s){const C=p(N,U,G);c!==C&&(c=C,f(c.object)),z=_(D,N,U,X),z&&x(D,N,U,X)}else{const C=G.wireframe===!0;(c.geometry!==N.id||c.program!==U.id||c.wireframe!==C)&&(c.geometry=N.id,c.program=U.id,c.wireframe=C,z=!0)}X!==null&&t.update(X,34963),(z||u)&&(u=!1,v(D,G,U,N),X!==null&&a.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?a.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,G,U){const N=U.wireframe===!0;let X=o[D.id];X===void 0&&(X={},o[D.id]=X);let z=X[G.id];z===void 0&&(z={},X[G.id]=z);let C=z[N];return C===void 0&&(C=m(d()),z[N]=C),C}function m(D){const G=[],U=[],N=[];for(let X=0;X<i;X++)G[X]=0,U[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:U,attributeDivisors:N,object:D,attributes:{},index:null}}function _(D,G,U,N){const X=c.attributes,z=G.attributes;let C=0;const ne=U.getAttributes();for(const re in ne)if(ne[re].location>=0){const fe=X[re];let Me=z[re];if(Me===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;C++}return c.attributesNum!==C||c.index!==N}function x(D,G,U,N){const X={},z=G.attributes;let C=0;const ne=U.getAttributes();for(const re in ne)if(ne[re].location>=0){let fe=z[re];fe===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),X[re]=Me,C++}c.attributes=X,c.attributesNum=C,c.index=N}function M(){const D=c.newAttributes;for(let G=0,U=D.length;G<U;G++)D[G]=0}function b(D){y(D,0)}function y(D,G){const U=c.newAttributes,N=c.enabledAttributes,X=c.attributeDivisors;U[D]=1,N[D]===0&&(a.enableVertexAttribArray(D),N[D]=1),X[D]!==G&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),X[D]=G)}function S(){const D=c.newAttributes,G=c.enabledAttributes;for(let U=0,N=G.length;U<N;U++)G[U]!==D[U]&&(a.disableVertexAttribArray(U),G[U]=0)}function A(D,G,U,N,X,z){n.isWebGL2===!0&&(U===5124||U===5125)?a.vertexAttribIPointer(D,G,U,X,z):a.vertexAttribPointer(D,G,U,N,X,z)}function v(D,G,U,N){if(n.isWebGL2===!1&&(D.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=N.attributes,z=U.getAttributes(),C=G.defaultAttributeValues;for(const ne in z){const re=z[ne];if(re.location>=0){let ie=X[ne];if(ie===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const fe=ie.normalized,Me=ie.itemSize,j=t.get(ie);if(j===void 0)continue;const K=j.buffer,R=j.type,P=j.bytesPerElement;if(ie.isInterleavedBufferAttribute){const W=ie.data,ae=W.stride,Q=ie.offset;if(W.isInstancedInterleavedBuffer){for(let te=0;te<re.locationSize;te++)y(re.location+te,W.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let te=0;te<re.locationSize;te++)b(re.location+te);a.bindBuffer(34962,K);for(let te=0;te<re.locationSize;te++)A(re.location+te,Me/re.locationSize,R,fe,ae*P,(Q+Me/re.locationSize*te)*P)}else{if(ie.isInstancedBufferAttribute){for(let W=0;W<re.locationSize;W++)y(re.location+W,ie.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let W=0;W<re.locationSize;W++)b(re.location+W);a.bindBuffer(34962,K);for(let W=0;W<re.locationSize;W++)A(re.location+W,Me/re.locationSize,R,fe,Me*P,Me/re.locationSize*W*P)}}else if(C!==void 0){const fe=C[ne];if(fe!==void 0)switch(fe.length){case 2:a.vertexAttrib2fv(re.location,fe);break;case 3:a.vertexAttrib3fv(re.location,fe);break;case 4:a.vertexAttrib4fv(re.location,fe);break;default:a.vertexAttrib1fv(re.location,fe)}}}}S()}function E(){Y();for(const D in o){const G=o[D];for(const U in G){const N=G[U];for(const X in N)g(N[X].object),delete N[X];delete G[U]}delete o[D]}}function F(D){if(o[D.id]===void 0)return;const G=o[D.id];for(const U in G){const N=G[U];for(const X in N)g(N[X].object),delete N[X];delete G[U]}delete o[D.id]}function O(D){for(const G in o){const U=o[G];if(U[D.id]===void 0)continue;const N=U[D.id];for(const X in N)g(N[X].object),delete N[X];delete U[D.id]}}function Y(){J(),u=!0,c!==l&&(c=l,f(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:J,dispose:E,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:b,disableUnusedAttributes:S}}function cx(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=a,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function ux(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),d=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),x=a.getParameter(36349),M=d>0,b=s||e.has("OES_texture_float"),y=M&&b,S=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:S}}function hx(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new ir,o=new An,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,f,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,f){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,M=x*4;let b=_.clippingState||null;l.value=b,b=u(g,d,M,f);for(let y=0;y!==M;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=f+p*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let M=0,b=f;M!==p;++M,b+=4)s.copy(h[M]).applyMatrix4(x,o),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function dx(a){let e=new WeakMap;function t(s,o){return o===lc?s.mapping=ys:o===cc&&(s.mapping=bs),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===lc||o===cc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Lg(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class tl extends af{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,uh=[.125,.215,.35,.446,.526,.582],ur=20,kl=new tl,hh=new ze;let zl=null;const rr=(1+Math.sqrt(5))/2,Qr=1/rr,dh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,rr,Qr),new k(0,rr,-Qr),new k(Qr,0,rr),new k(-Qr,0,rr),new k(rr,Qr,0),new k(-rr,Qr,0)];class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:vo,format:zn,encoding:Cr,depthBuffer:!1},i=ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(r)),this._blurMaterial=px(r,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,n,i){const o=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hh),u.toneMapping=mi,u.autoClear=!1;const f=new mr({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Qt(new Uo,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(hh),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):x===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const M=this._cubeSize;la(i,x*M,_>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ys||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,kl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=dh[(i-1)%dh.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ur-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):ur;m>ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const _=[];let x=0;for(let A=0;A<ur;++A){const v=A/p,E=Math.exp(-v*v/2);_.push(E),A===0?x+=E:A<m&&(x+=2*E)}for(let A=0;A<_.length;A++)_[A]=_[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const b=this._sizeLods[i],y=3*b*(i>M-ss?i-M+ss:0),S=4*(this._cubeSize-b);la(t,y,S,3*b,2*b),l.setRenderTarget(t),l.render(h,kl)}}function fx(a){const e=[],t=[],n=[];let i=a;const r=a-ss+1+uh.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-ss?l=uh[s-a+ss-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,p=3,m=2,_=1,x=new Float32Array(p*g*f),M=new Float32Array(m*g*f),b=new Float32Array(_*g*f);for(let S=0;S<f;S++){const A=S%3*2/3-1,v=S>2?0:-1,E=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];x.set(E,p*g*S),M.set(d,m*g*S);const F=[S,S,S,S,S,S];b.set(F,_*g*S)}const y=new Gn;y.setAttribute("position",new tn(x,p)),y.setAttribute("uv",new tn(M,m)),y.setAttribute("faceIndex",new tn(b,_)),e.push(y),i>ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ph(a,e,t){const n=new Rr(a,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function px(a,e,t){const n=new Float32Array(ur),i=new k(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function mh(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gh(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mx(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===lc||l===cc,u=l===ys||l===bs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new fh(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new fh(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function gx(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _x(a,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const p=f[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let p=0;if(f!==null){const x=f.array;p=f.version;for(let M=0,b=x.length;M<b;M+=3){const y=x[M+0],S=x[M+1],A=x[M+2];d.push(y,S,S,A,A,y)}}else{const x=g.array;p=g.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const y=M+0,S=M+1,A=M+2;d.push(y,S,S,A,A,y)}}const m=new(Jd(d)?of:sf)(d,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xx(a,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){a.drawElements(r,f,o,d*l),t.update(f,r,1)}function h(d,f,g){if(g===0)return;let p,m;if(i)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,f,o,d*l,g),t.update(f,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function vx(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yx(a,e){return a[0]-e[0]}function bx(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Bl(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function Mx(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let U=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",U)};var g=U;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let F=0;b===!0&&(F=1),y===!0&&(F=2),S===!0&&(F=3);let O=u.attributes.position.count*F,Y=1;O>e.maxTextureSize&&(Y=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const J=new Float32Array(O*Y*4*m),D=new nf(J,O,Y,m);D.type=Fi,D.needsUpdate=!0;const G=F*4;for(let N=0;N<m;N++){const X=A[N],z=v[N],C=E[N],ne=O*Y*4*N;for(let re=0;re<X.count;re++){const ie=re*G;b===!0&&(s.fromBufferAttribute(X,re),X.normalized===!0&&Bl(s,X),J[ne+ie+0]=s.x,J[ne+ie+1]=s.y,J[ne+ie+2]=s.z,J[ne+ie+3]=0),y===!0&&(s.fromBufferAttribute(z,re),z.normalized===!0&&Bl(s,z),J[ne+ie+4]=s.x,J[ne+ie+5]=s.y,J[ne+ie+6]=s.z,J[ne+ie+7]=0),S===!0&&(s.fromBufferAttribute(C,re),C.normalized===!0&&Bl(s,C),J[ne+ie+8]=s.x,J[ne+ie+9]=s.y,J[ne+ie+10]=s.z,J[ne+ie+11]=C.itemSize===4?s.w:1)}}_={count:m,texture:D,size:new Ze(O,Y)},r.set(u,_),u.addEventListener("dispose",U)}let x=0;for(let b=0;b<f.length;b++)x+=f[b];const M=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",f),d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let y=0;y<p;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<p;y++){const S=m[y];S[0]=y,S[1]=f[y]}m.sort(bx);for(let y=0;y<8;y++)y<p&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(yx);const _=u.morphAttributes.position,x=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const S=o[y],A=S[0],v=S[1];A!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),x&&u.getAttribute("morphNormal"+y)!==x[A]&&u.setAttribute("morphNormal"+y,x[A]),i[y]=v,M+=v):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(a,"morphTargetBaseInfluence",b),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function wx(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const cf=new nn,uf=new nf,hf=new fg,df=new Wc,_h=[],xh=[],vh=new Float32Array(16),yh=new Float32Array(9),bh=new Float32Array(4);function ks(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=_h[i];if(r===void 0&&(r=new Float32Array(i),_h[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function rn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function sn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function nl(a,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Sx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Tx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;a.uniform2fv(this.addr,e),sn(t,e)}}function Ex(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;a.uniform3fv(this.addr,e),sn(t,e)}}function Ax(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;a.uniform4fv(this.addr,e),sn(t,e)}}function Lx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;bh.set(n),a.uniformMatrix2fv(this.addr,!1,bh),sn(t,n)}}function Cx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;yh.set(n),a.uniformMatrix3fv(this.addr,!1,yh),sn(t,n)}}function Rx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;vh.set(n),a.uniformMatrix4fv(this.addr,!1,vh),sn(t,n)}}function Px(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Dx(a,e){const t=this.cache;rn(t,e)||(a.uniform2iv(this.addr,e),sn(t,e))}function Ix(a,e){const t=this.cache;rn(t,e)||(a.uniform3iv(this.addr,e),sn(t,e))}function Fx(a,e){const t=this.cache;rn(t,e)||(a.uniform4iv(this.addr,e),sn(t,e))}function Ox(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Nx(a,e){const t=this.cache;rn(t,e)||(a.uniform2uiv(this.addr,e),sn(t,e))}function kx(a,e){const t=this.cache;rn(t,e)||(a.uniform3uiv(this.addr,e),sn(t,e))}function zx(a,e){const t=this.cache;rn(t,e)||(a.uniform4uiv(this.addr,e),sn(t,e))}function Bx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||cf,i)}function Ux(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hf,i)}function Vx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||df,i)}function Gx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uf,i)}function Hx(a){switch(a){case 5126:return Sx;case 35664:return Tx;case 35665:return Ex;case 35666:return Ax;case 35674:return Lx;case 35675:return Cx;case 35676:return Rx;case 5124:case 35670:return Px;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Nx;case 36295:return kx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Wx(a,e){a.uniform1fv(this.addr,e)}function Xx(a,e){const t=ks(e,this.size,2);a.uniform2fv(this.addr,t)}function jx(a,e){const t=ks(e,this.size,3);a.uniform3fv(this.addr,t)}function qx(a,e){const t=ks(e,this.size,4);a.uniform4fv(this.addr,t)}function Yx(a,e){const t=ks(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function $x(a,e){const t=ks(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Kx(a,e){const t=ks(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Zx(a,e){a.uniform1iv(this.addr,e)}function Jx(a,e){a.uniform2iv(this.addr,e)}function Qx(a,e){a.uniform3iv(this.addr,e)}function ev(a,e){a.uniform4iv(this.addr,e)}function tv(a,e){a.uniform1uiv(this.addr,e)}function nv(a,e){a.uniform2uiv(this.addr,e)}function iv(a,e){a.uniform3uiv(this.addr,e)}function rv(a,e){a.uniform4uiv(this.addr,e)}function sv(a,e,t){const n=e.length,i=nl(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||cf,i[r])}function ov(a,e,t){const n=e.length,i=nl(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||hf,i[r])}function av(a,e,t){const n=e.length,i=nl(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||df,i[r])}function lv(a,e,t){const n=e.length,i=nl(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||uf,i[r])}function cv(a){switch(a){case 5126:return Wx;case 35664:return Xx;case 35665:return jx;case 35666:return qx;case 35674:return Yx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}class uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Hx(t.type)}}class hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cv(t.type)}}class dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function Mh(a,e){a.seq.push(e),a.map[e.id]=e}function fv(a,e,t){const n=a.name,i=n.length;for(Ul.lastIndex=0;;){const r=Ul.exec(n),s=Ul.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Mh(t,c===void 0?new uv(o,a,e):new hv(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new dv(o),Mh(t,h)),t=h}}}class Ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);fv(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function wh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let pv=0;function mv(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function gv(a){switch(a){case Cr:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Sh(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+mv(a.getShaderSource(e),s)}else return i}function _v(a,e){const t=gv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xv(a,e){let t;switch(e){case Sm:t="Linear";break;case Tm:t="Reinhard";break;case Em:t="OptimizedCineon";break;case jd:t="ACESFilmic";break;case Am:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vv(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function yv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bv(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Qs(a){return a!==""}function Th(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(a){return a.replace(Mv,wv)}function wv(a,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return mc(t)}const Sv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(a){return a.replace(Tv,ff).replace(Sv,Ev)}function Ev(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ff(a,e,t,n)}function ff(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Av(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Js&&(e="SHADOWMAP_TYPE_VSM"),e}function Lv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ys:case bs:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cv(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Rv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case wm:e="ENVMAP_BLENDING_ADD";break}return e}function Pv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dv(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Av(t),c=Lv(t),u=Cv(t),h=Rv(t),d=Pv(t),f=t.isWebGL2?"":vv(t),g=yv(r),p=i.createProgram();let m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(Qs).join(`
`),_.length>0&&(_+=`
`)):(m=[Lh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),_=[f,Lh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==mi?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,_v("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),s=mc(s),s=Th(s,t),s=Eh(s,t),o=mc(o),o=Th(o,t),o=Eh(o,t),s=Ah(s),o=Ah(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+m+s,b=x+_+o,y=wh(i,35633,M),S=wh(i,35632,b);if(i.attachShader(p,y),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(y).trim(),O=i.getShaderInfoLog(S).trim();let Y=!0,J=!0;if(i.getProgramParameter(p,35714)===!1){Y=!1;const D=Sh(i,y,"vertex"),G=Sh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+D+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(F===""||O==="")&&(J=!1);J&&(this.diagnostics={runnable:Y,programLog:E,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:_}})}i.deleteShader(y),i.deleteShader(S);let A;this.getUniforms=function(){return A===void 0&&(A=new Ta(i,p)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=bv(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=S,this}let Iv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Ov(e);t.set(e,n)}return t.get(e)}}class Ov{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Nv(a,e,t,n,i,r,s){const o=new rf,l=new Fv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,F,O,Y){const J=O.fog,D=Y.geometry,G=v.isMeshStandardMaterial?O.environment:null,U=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),N=!!U&&U.mapping===Qa?U.image.height:null,X=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,C=z!==void 0?z.length:0;let ne=0;D.morphAttributes.position!==void 0&&(ne=1),D.morphAttributes.normal!==void 0&&(ne=2),D.morphAttributes.color!==void 0&&(ne=3);let re,ie,fe,Me;if(X){const ae=Yn[X];re=ae.vertexShader,ie=ae.fragmentShader}else re=v.vertexShader,ie=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),Me=l.getFragmentShaderID(v);const j=a.getRenderTarget(),K=v.alphaTest>0,R=v.clearcoat>0,P=v.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:v.type,vertexShader:re,fragmentShader:ie,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:j===null?a.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Cr,map:!!v.map,matcap:!!v.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:N,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ym,tangentSpaceNormalMap:v.normalMapType===Vc,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===tt,clearcoat:R,clearcoatMap:R&&!!v.clearcoatMap,clearcoatRoughnessMap:R&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:R&&!!v.clearcoatNormalMap,iridescence:P,iridescenceMap:P&&!!v.iridescenceMap,iridescenceThicknessMap:P&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===us,alphaMap:!!v.alphaMap,alphaTest:K,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!J,useFog:v.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:mi,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ar,flipSided:v.side===Gt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)E.push(F),E.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(_(E,v),x(E,v),E.push(a.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),E.fog&&o.enable(33),v.push(o.mask),o.disableAll(),E.useFog&&o.enable(0),E.flatShading&&o.enable(1),E.logarithmicDepthBuffer&&o.enable(2),E.skinning&&o.enable(3),E.morphTargets&&o.enable(4),E.morphNormals&&o.enable(5),E.morphColors&&o.enable(6),E.premultipliedAlpha&&o.enable(7),E.shadowMapEnabled&&o.enable(8),E.physicallyCorrectLights&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.specularIntensityMap&&o.enable(14),E.specularColorMap&&o.enable(15),E.transmission&&o.enable(16),E.transmissionMap&&o.enable(17),E.thicknessMap&&o.enable(18),E.sheen&&o.enable(19),E.sheenColorMap&&o.enable(20),E.sheenRoughnessMap&&o.enable(21),E.decodeVideoTexture&&o.enable(22),E.opaque&&o.enable(23),v.push(o.mask)}function M(v){const E=g[v.type];let F;if(E){const O=Yn[E];F=Sg.clone(O.uniforms)}else F=v.uniforms;return F}function b(v,E){let F;for(let O=0,Y=c.length;O<Y;O++){const J=c[O];if(J.cacheKey===E){F=J,++F.usedTimes;break}}return F===void 0&&(F=new Dv(a,E,v,r),c.push(F)),F}function y(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:A}}function kv(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Ch(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Rh(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,f,g,p,m){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},a[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function o(h,d,f,g,p,m){const _=s(h,d,f,g,p,m);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function l(h,d,f,g,p,m){const _=s(h,d,f,g,p,m);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||zv),n.length>1&&n.sort(d||Ch),i.length>1&&i.sort(d||Ch)}function u(){for(let h=e,d=a.length;h<d;h++){const f=a[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Bv(){let a=new WeakMap;function e(n,i){let r;return a.has(n)===!1?(r=new Rh,a.set(n,[r])):i>=a.get(n).length?(r=new Rh,a.get(n).push(r)):r=a.get(n)[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Uv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ze};break;case"SpotLight":t={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return a[e.id]=t,t}}}function Vv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Gv=0;function Hv(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function Wv(a,e){const t=new Uv,n=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new et,o=new et;function l(u,h){let d=0,f=0,g=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,m=0,_=0,x=0,M=0,b=0,y=0,S=0;u.sort(Hv);const A=h!==!0?Math.PI:1;for(let E=0,F=u.length;E<F;E++){const O=u[E],Y=O.color,J=O.intensity,D=O.distance,G=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=Y.r*J*A,f+=Y.g*J*A,g+=Y.b*J*A;else if(O.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(O.sh.coefficients[U],J);else if(O.isDirectionalLight){const U=t.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){const N=O.shadow,X=n.get(O);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=O.shadow.matrix,b++}i.directional[p]=U,p++}else if(O.isSpotLight){const U=t.get(O);if(U.position.setFromMatrixPosition(O.matrixWorld),U.color.copy(Y).multiplyScalar(J*A),U.distance=D,U.coneCos=Math.cos(O.angle),U.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),U.decay=O.decay,O.castShadow){const N=O.shadow,X=n.get(O);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=G,i.spotShadowMatrix[_]=O.shadow.matrix,S++}i.spot[_]=U,_++}else if(O.isRectAreaLight){const U=t.get(O);U.color.copy(Y).multiplyScalar(J),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),i.rectArea[x]=U,x++}else if(O.isPointLight){const U=t.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity*A),U.distance=O.distance,U.decay=O.decay,O.castShadow){const N=O.shadow,X=n.get(O);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,X.shadowCameraNear=N.camera.near,X.shadowCameraFar=N.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=O.shadow.matrix,y++}i.point[m]=U,m++}else if(O.isHemisphereLight){const U=t.get(O);U.skyColor.copy(O.color).multiplyScalar(J*A),U.groundColor.copy(O.groundColor).multiplyScalar(J*A),i.hemi[M]=U,M++}}x>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==p||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==x||v.hemiLength!==M||v.numDirectionalShadows!==b||v.numPointShadows!==y||v.numSpotShadows!==S)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=x,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=S,v.directionalLength=p,v.pointLength=m,v.spotLength=_,v.rectAreaLength=x,v.hemiLength=M,v.numDirectionalShadows=b,v.numPointShadows=y,v.numSpotShadows=S,i.version=Gv++)}function c(u,h){let d=0,f=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let x=0,M=u.length;x<M;x++){const b=u[x];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(b.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Ph(a,e){const t=new Wv(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Xv(a,e){let t=new WeakMap;function n(r,s=0){let o;return t.has(r)===!1?(o=new Ph(a,e),t.set(r,[o])):s>=t.get(r).length?(o=new Ph(a,e),t.get(r).push(o)):o=t.get(r)[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class jv extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qv extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kv(a,e,t){let n=new Xc;const i=new Ze,r=new Ze,s=new rt,o=new jv({depthPacking:qm}),l=new qv,c={},u=t.maxTextureSize,h={0:Gt,1:vs,2:Ar},d=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Yv,fragmentShader:$v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vd,this.render=function(b,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=a.getRenderTarget(),v=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),F=a.state;F.setBlending(Vi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let O=0,Y=b.length;O<Y;O++){const J=b[O],D=J.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const G=D.getFrameExtents();if(i.multiply(G),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,D.mapSize.y=r.y)),D.map===null){const N=this.type!==Js?{minFilter:Ot,magFilter:Ot}:{};D.map=new Rr(i.x,i.y,N),D.map.texture.name=J.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const U=D.getViewportCount();for(let N=0;N<U;N++){const X=D.getViewport(N);s.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),F.viewport(s),D.updateMatrices(J,N),n=D.getFrustum(),M(y,S,D.camera,J,this.type)}D.isPointLightShadow!==!0&&this.type===Js&&_(D,S),D.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,v,E)};function _(b,y){const S=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rr(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(y,null,S,d,p,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(y,null,S,f,p,null)}function x(b,y,S,A,v,E){let F=null;const O=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0?F=O:F=S.isPointLight===!0?l:o,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const Y=F.uuid,J=y.uuid;let D=c[Y];D===void 0&&(D={},c[Y]=D);let G=D[J];G===void 0&&(G=F.clone(),D[J]=G),F=G}return F.visible=y.visible,F.wireframe=y.wireframe,E===Js?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:h[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaTest,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,S.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(S.matrixWorld),F.nearDistance=A,F.farDistance=v),F}function M(b,y,S,A,v){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Js)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const O=e.update(b),Y=b.material;if(Array.isArray(Y)){const J=O.groups;for(let D=0,G=J.length;D<G;D++){const U=J[D],N=Y[U.materialIndex];if(N&&N.visible){const X=x(b,N,A,S.near,S.far,v);a.renderBufferDirect(S,null,O,X,b,U)}}}else if(Y.visible){const J=x(b,Y,A,S.near,S.far,v);a.renderBufferDirect(S,null,O,J,b,null)}}const F=b.children;for(let O=0,Y=F.length;O<Y;O++)M(F[O],y,S,A,v)}}function Zv(a,e,t){const n=t.isWebGL2;function i(){let I=!1;const he=new rt;let ue=null;const pe=new rt(0,0,0,0);return{setMask:function(_e){ue!==_e&&!I&&(a.colorMask(_e,_e,_e,_e),ue=_e)},setLocked:function(_e){I=_e},setClear:function(_e,Ce,ce,Pe,Ge){Ge===!0&&(_e*=Pe,Ce*=Pe,ce*=Pe),he.set(_e,Ce,ce,Pe),pe.equals(he)===!1&&(a.clearColor(_e,Ce,ce,Pe),pe.copy(he))},reset:function(){I=!1,ue=null,pe.set(-1,0,0,0)}}}function r(){let I=!1,he=null,ue=null,pe=null;return{setTest:function(_e){_e?Me(2929):j(2929)},setMask:function(_e){he!==_e&&!I&&(a.depthMask(_e),he=_e)},setFunc:function(_e){if(ue!==_e){if(_e)switch(_e){case mm:a.depthFunc(512);break;case gm:a.depthFunc(519);break;case _m:a.depthFunc(513);break;case ac:a.depthFunc(515);break;case xm:a.depthFunc(514);break;case vm:a.depthFunc(518);break;case ym:a.depthFunc(516);break;case bm:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);ue=_e}},setLocked:function(_e){I=_e},setClear:function(_e){pe!==_e&&(a.clearDepth(_e),pe=_e)},reset:function(){I=!1,he=null,ue=null,pe=null}}}function s(){let I=!1,he=null,ue=null,pe=null,_e=null,Ce=null,ce=null,Pe=null,Ge=null;return{setTest:function(We){I||(We?Me(2960):j(2960))},setMask:function(We){he!==We&&!I&&(a.stencilMask(We),he=We)},setFunc:function(We,ft,vt){(ue!==We||pe!==ft||_e!==vt)&&(a.stencilFunc(We,ft,vt),ue=We,pe=ft,_e=vt)},setOp:function(We,ft,vt){(Ce!==We||ce!==ft||Pe!==vt)&&(a.stencilOp(We,ft,vt),Ce=We,ce=ft,Pe=vt)},setLocked:function(We){I=We},setClear:function(We){Ge!==We&&(a.clearStencil(We),Ge=We)},reset:function(){I=!1,he=null,ue=null,pe=null,_e=null,Ce=null,ce=null,Pe=null,Ge=null}}}const o=new i,l=new r,c=new s;let u={},h={},d=new WeakMap,f=[],g=null,p=!1,m=null,_=null,x=null,M=null,b=null,y=null,S=null,A=!1,v=null,E=null,F=null,O=null,Y=null;const J=a.getParameter(35661);let D=!1,G=0;const U=a.getParameter(7938);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=G>=2);let N=null,X={};const z=a.getParameter(3088),C=a.getParameter(2978),ne=new rt().fromArray(z),re=new rt().fromArray(C);function ie(I,he,ue){const pe=new Uint8Array(4),_e=a.createTexture();a.bindTexture(I,_e),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let Ce=0;Ce<ue;Ce++)a.texImage2D(he+Ce,0,6408,1,1,0,6408,5121,pe);return _e}const fe={};fe[3553]=ie(3553,3553,1),fe[34067]=ie(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(ac),be(!1),Ae(bu),Me(2884),Q(Vi);function Me(I){u[I]!==!0&&(a.enable(I),u[I]=!0)}function j(I){u[I]!==!1&&(a.disable(I),u[I]=!1)}function K(I,he){return h[I]!==he?(a.bindFramebuffer(I,he),h[I]=he,n&&(I===36009&&(h[36160]=he),I===36160&&(h[36009]=he)),!0):!1}function R(I,he){let ue=f,pe=!1;if(I)if(ue=d.get(he),ue===void 0&&(ue=[],d.set(he,ue)),I.isWebGLMultipleRenderTargets){const _e=I.texture;if(ue.length!==_e.length||ue[0]!==36064){for(let Ce=0,ce=_e.length;Ce<ce;Ce++)ue[Ce]=36064+Ce;ue.length=_e.length,pe=!0}}else ue[0]!==36064&&(ue[0]=36064,pe=!0);else ue[0]!==1029&&(ue[0]=1029,pe=!0);pe&&(t.isWebGL2?a.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function P(I){return g!==I?(a.useProgram(I),g=I,!0):!1}const W={[is]:32774,[rm]:32778,[sm]:32779};if(n)W[Tu]=32775,W[Eu]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(W[Tu]=I.MIN_EXT,W[Eu]=I.MAX_EXT)}const ae={[om]:0,[am]:1,[lm]:768,[Hd]:770,[pm]:776,[dm]:774,[um]:772,[cm]:769,[Wd]:771,[fm]:775,[hm]:773};function Q(I,he,ue,pe,_e,Ce,ce,Pe){if(I===Vi){p===!0&&(j(3042),p=!1);return}if(p===!1&&(Me(3042),p=!0),I!==im){if(I!==m||Pe!==A){if((_!==is||b!==is)&&(a.blendEquation(32774),_=is,b=is),Pe)switch(I){case us:a.blendFuncSeparate(1,771,1,771);break;case Mu:a.blendFunc(1,1);break;case wu:a.blendFuncSeparate(0,769,0,1);break;case Su:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case us:a.blendFuncSeparate(770,771,1,771);break;case Mu:a.blendFunc(770,1);break;case wu:a.blendFuncSeparate(0,769,0,1);break;case Su:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,y=null,S=null,m=I,A=Pe}return}_e=_e||he,Ce=Ce||ue,ce=ce||pe,(he!==_||_e!==b)&&(a.blendEquationSeparate(W[he],W[_e]),_=he,b=_e),(ue!==x||pe!==M||Ce!==y||ce!==S)&&(a.blendFuncSeparate(ae[ue],ae[pe],ae[Ce],ae[ce]),x=ue,M=pe,y=Ce,S=ce),m=I,A=null}function te(I,he){I.side===Ar?j(2884):Me(2884);let ue=I.side===Gt;he&&(ue=!ue),be(ue),I.blending===us&&I.transparent===!1?Q(Vi):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const pe=I.stencilWrite;c.setTest(pe),pe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),H(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(32926):j(32926)}function be(I){v!==I&&(I?a.frontFace(2304):a.frontFace(2305),v=I)}function Ae(I){I!==em?(Me(2884),I!==E&&(I===bu?a.cullFace(1029):I===tm?a.cullFace(1028):a.cullFace(1032))):j(2884),E=I}function De(I){I!==F&&(D&&a.lineWidth(I),F=I)}function H(I,he,ue){I?(Me(32823),(O!==he||Y!==ue)&&(a.polygonOffset(he,ue),O=he,Y=ue)):j(32823)}function ke(I){I?Me(3089):j(3089)}function we(I){I===void 0&&(I=33984+J-1),N!==I&&(a.activeTexture(I),N=I)}function lt(I,he){N===null&&we();let ue=X[N];ue===void 0&&(ue={type:void 0,texture:void 0},X[N]=ue),(ue.type!==I||ue.texture!==he)&&(a.bindTexture(I,he||fe[I]),ue.type=I,ue.texture=he)}function ct(){const I=X[N];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function L(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function w(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){ne.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function ge(I){re.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function xe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},N=null,X={},h={},d=new WeakMap,f=[],g=null,p=!1,m=null,_=null,x=null,M=null,b=null,y=null,S=null,A=!1,v=null,E=null,F=null,O=null,Y=null,ne.set(0,0,a.canvas.width,a.canvas.height),re.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:j,bindFramebuffer:K,drawBuffers:R,useProgram:P,setBlending:Q,setMaterial:te,setFlipSided:be,setCullFace:Ae,setLineWidth:De,setPolygonOffset:H,setScissorTest:ke,activeTexture:we,bindTexture:lt,unbindTexture:ct,compressedTexImage2D:L,texImage2D:Le,texImage3D:$,texStorage2D:oe,texStorage3D:de,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:le,scissor:Se,viewport:ge,reset:xe}}function Jv(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return _?new OffscreenCanvas(L,w):Mo("canvas")}function M(L,w,Z,le){let oe=1;if((L.width>le||L.height>le)&&(oe=le/Math.max(L.width,L.height)),oe<1||w===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const de=w?za:Math.floor,Le=de(oe*L.width),$=de(oe*L.height);p===void 0&&(p=x(Le,$));const Se=Z?x(Le,$):p;return Se.width=Le,Se.height=$,Se.getContext("2d").drawImage(L,0,0,Le,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Le+"x"+$+")."),Se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return pc(L.width)&&pc(L.height)}function y(L){return o?!1:L.wrapS!==En||L.wrapT!==En||L.minFilter!==Ot&&L.minFilter!==ln}function S(L,w){return L.generateMipmaps&&w&&L.minFilter!==Ot&&L.minFilter!==ln}function A(L){a.generateMipmap(L)}function v(L,w,Z,le,oe=!1){if(o===!1)return w;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=w;return w===6403&&(Z===5126&&(de=33326),Z===5131&&(de=33325),Z===5121&&(de=33321)),w===33319&&(Z===5126&&(de=33328),Z===5131&&(de=33327),Z===5121&&(de=33323)),w===6408&&(Z===5126&&(de=34836),Z===5131&&(de=34842),Z===5121&&(de=le===tt&&oe===!1?35907:32856),Z===32819&&(de=32854),Z===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function E(L,w,Z){return S(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==Ot&&L.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){return L===Ot||L===uc||L===hc?9728:9729}function O(L){const w=L.target;w.removeEventListener("dispose",O),J(w),w.isVideoTexture&&g.delete(w)}function Y(L){const w=L.target;w.removeEventListener("dispose",Y),G(w)}function J(L){const w=n.get(L);if(w.__webglInit===void 0)return;const Z=L.source,le=m.get(Z);if(le){const oe=le[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&D(L),Object.keys(le).length===0&&m.delete(Z)}n.remove(L)}function D(L){const w=n.get(L);a.deleteTexture(w.__webglTexture);const Z=L.source,le=m.get(Z);delete le[w.__cacheKey],s.memory.textures--}function G(L){const w=L.texture,Z=n.get(L),le=n.get(w);if(le.__webglTexture!==void 0&&(a.deleteTexture(le.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)a.deleteFramebuffer(Z.__webglFramebuffer[oe]),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer[oe]);else{if(a.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let oe=0;oe<Z.__webglColorRenderbuffer.length;oe++)Z.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(Z.__webglColorRenderbuffer[oe]);Z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let oe=0,de=w.length;oe<de;oe++){const Le=n.get(w[oe]);Le.__webglTexture&&(a.deleteTexture(Le.__webglTexture),s.memory.textures--),n.remove(w[oe])}n.remove(w),n.remove(L)}let U=0;function N(){U=0}function X(){const L=U;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),U+=1,L}function z(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function C(L,w){const Z=n.get(L);if(L.isVideoTexture&&lt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const le=L.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(Z,L,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,Z.__webglTexture)}function ne(L,w){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){R(Z,L,w);return}t.activeTexture(33984+w),t.bindTexture(35866,Z.__webglTexture)}function re(L,w){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){R(Z,L,w);return}t.activeTexture(33984+w),t.bindTexture(32879,Z.__webglTexture)}function ie(L,w){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){P(Z,L,w);return}t.activeTexture(33984+w),t.bindTexture(34067,Z.__webglTexture)}const fe={[Ms]:10497,[En]:33071,[ka]:33648},Me={[Ot]:9728,[uc]:9984,[hc]:9986,[ln]:9729,[Yd]:9985,[Is]:9987};function j(L,w,Z){if(Z?(a.texParameteri(L,10242,fe[w.wrapS]),a.texParameteri(L,10243,fe[w.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,fe[w.wrapR]),a.texParameteri(L,10240,Me[w.magFilter]),a.texParameteri(L,10241,Me[w.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(w.wrapS!==En||w.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,F(w.magFilter)),a.texParameteri(L,10241,F(w.minFilter)),w.minFilter!==Ot&&w.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(w.type===Fi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===vo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(L,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function K(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",O));const le=w.source;let oe=m.get(le);oe===void 0&&(oe={},m.set(le,oe));const de=z(w);if(de!==L.__cacheKey){oe[de]===void 0&&(oe[de]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),oe[de].usedTimes++;const Le=oe[L.__cacheKey];Le!==void 0&&(oe[L.__cacheKey].usedTimes--,Le.usedTimes===0&&D(w)),L.__cacheKey=de,L.__webglTexture=oe[de].texture}return Z}function R(L,w,Z){let le=3553;w.isDataArrayTexture&&(le=35866),w.isData3DTexture&&(le=32879);const oe=K(L,w),de=w.source;if(t.activeTexture(33984+Z),t.bindTexture(le,L.__webglTexture),de.version!==de.__currentVersion||oe===!0){a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const Le=y(w)&&b(w.image)===!1;let $=M(w.image,Le,!1,u);$=ct(w,$);const Se=b($)||o,ge=r.convert(w.format,w.encoding);let xe=r.convert(w.type),I=v(w.internalFormat,ge,xe,w.encoding,w.isVideoTexture);j(le,w,Se);let he;const ue=w.mipmaps,pe=o&&w.isVideoTexture!==!0,_e=de.__currentVersion===void 0||oe===!0,Ce=E(w,$,Se);if(w.isDepthTexture)I=6402,o?w.type===Fi?I=36012:w.type===fr?I=33190:w.type===hs?I=35056:I=33189:w.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vr&&I===6402&&w.type!==$d&&w.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fr,xe=r.convert(w.type)),w.format===ws&&I===6402&&(I=34041,w.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=hs,xe=r.convert(w.type))),_e&&(pe?t.texStorage2D(3553,1,I,$.width,$.height):t.texImage2D(3553,0,I,$.width,$.height,0,ge,xe,null));else if(w.isDataTexture)if(ue.length>0&&Se){pe&&_e&&t.texStorage2D(3553,Ce,I,ue[0].width,ue[0].height);for(let ce=0,Pe=ue.length;ce<Pe;ce++)he=ue[ce],pe?t.texSubImage2D(3553,ce,0,0,he.width,he.height,ge,xe,he.data):t.texImage2D(3553,ce,I,he.width,he.height,0,ge,xe,he.data);w.generateMipmaps=!1}else pe?(_e&&t.texStorage2D(3553,Ce,I,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,ge,xe,$.data)):t.texImage2D(3553,0,I,$.width,$.height,0,ge,xe,$.data);else if(w.isCompressedTexture){pe&&_e&&t.texStorage2D(3553,Ce,I,ue[0].width,ue[0].height);for(let ce=0,Pe=ue.length;ce<Pe;ce++)he=ue[ce],w.format!==zn?ge!==null?pe?t.compressedTexSubImage2D(3553,ce,0,0,he.width,he.height,ge,he.data):t.compressedTexImage2D(3553,ce,I,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(3553,ce,0,0,he.width,he.height,ge,xe,he.data):t.texImage2D(3553,ce,I,he.width,he.height,0,ge,xe,he.data)}else if(w.isDataArrayTexture)pe?(_e&&t.texStorage3D(35866,Ce,I,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,ge,xe,$.data)):t.texImage3D(35866,0,I,$.width,$.height,$.depth,0,ge,xe,$.data);else if(w.isData3DTexture)pe?(_e&&t.texStorage3D(32879,Ce,I,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,ge,xe,$.data)):t.texImage3D(32879,0,I,$.width,$.height,$.depth,0,ge,xe,$.data);else if(w.isFramebufferTexture){if(_e)if(pe)t.texStorage2D(3553,Ce,I,$.width,$.height);else{let ce=$.width,Pe=$.height;for(let Ge=0;Ge<Ce;Ge++)t.texImage2D(3553,Ge,I,ce,Pe,0,ge,xe,null),ce>>=1,Pe>>=1}}else if(ue.length>0&&Se){pe&&_e&&t.texStorage2D(3553,Ce,I,ue[0].width,ue[0].height);for(let ce=0,Pe=ue.length;ce<Pe;ce++)he=ue[ce],pe?t.texSubImage2D(3553,ce,0,0,ge,xe,he):t.texImage2D(3553,ce,I,ge,xe,he);w.generateMipmaps=!1}else pe?(_e&&t.texStorage2D(3553,Ce,I,$.width,$.height),t.texSubImage2D(3553,0,0,0,ge,xe,$)):t.texImage2D(3553,0,I,ge,xe,$);S(w,Se)&&A(le),de.__currentVersion=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function P(L,w,Z){if(w.image.length!==6)return;const le=K(L,w),oe=w.source;if(t.activeTexture(33984+Z),t.bindTexture(34067,L.__webglTexture),oe.version!==oe.__currentVersion||le===!0){a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const de=w.isCompressedTexture||w.image[0].isCompressedTexture,Le=w.image[0]&&w.image[0].isDataTexture,$=[];for(let ce=0;ce<6;ce++)!de&&!Le?$[ce]=M(w.image[ce],!1,!0,c):$[ce]=Le?w.image[ce].image:w.image[ce],$[ce]=ct(w,$[ce]);const Se=$[0],ge=b(Se)||o,xe=r.convert(w.format,w.encoding),I=r.convert(w.type),he=v(w.internalFormat,xe,I,w.encoding),ue=o&&w.isVideoTexture!==!0,pe=oe.__currentVersion===void 0||le===!0;let _e=E(w,Se,ge);j(34067,w,ge);let Ce;if(de){ue&&pe&&t.texStorage2D(34067,_e,he,Se.width,Se.height);for(let ce=0;ce<6;ce++){Ce=$[ce].mipmaps;for(let Pe=0;Pe<Ce.length;Pe++){const Ge=Ce[Pe];w.format!==zn?xe!==null?ue?t.compressedTexSubImage2D(34069+ce,Pe,0,0,Ge.width,Ge.height,xe,Ge.data):t.compressedTexImage2D(34069+ce,Pe,he,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(34069+ce,Pe,0,0,Ge.width,Ge.height,xe,I,Ge.data):t.texImage2D(34069+ce,Pe,he,Ge.width,Ge.height,0,xe,I,Ge.data)}}}else{Ce=w.mipmaps,ue&&pe&&(Ce.length>0&&_e++,t.texStorage2D(34067,_e,he,$[0].width,$[0].height));for(let ce=0;ce<6;ce++)if(Le){ue?t.texSubImage2D(34069+ce,0,0,0,$[ce].width,$[ce].height,xe,I,$[ce].data):t.texImage2D(34069+ce,0,he,$[ce].width,$[ce].height,0,xe,I,$[ce].data);for(let Pe=0;Pe<Ce.length;Pe++){const We=Ce[Pe].image[ce].image;ue?t.texSubImage2D(34069+ce,Pe+1,0,0,We.width,We.height,xe,I,We.data):t.texImage2D(34069+ce,Pe+1,he,We.width,We.height,0,xe,I,We.data)}}else{ue?t.texSubImage2D(34069+ce,0,0,0,xe,I,$[ce]):t.texImage2D(34069+ce,0,he,xe,I,$[ce]);for(let Pe=0;Pe<Ce.length;Pe++){const Ge=Ce[Pe];ue?t.texSubImage2D(34069+ce,Pe+1,0,0,xe,I,Ge.image[ce]):t.texImage2D(34069+ce,Pe+1,he,xe,I,Ge.image[ce])}}}S(w,ge)&&A(34067),oe.__currentVersion=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function W(L,w,Z,le,oe){const de=r.convert(Z.format,Z.encoding),Le=r.convert(Z.type),$=v(Z.internalFormat,de,Le,Z.encoding);n.get(w).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,$,w.width,w.height,w.depth,0,de,Le,null):t.texImage2D(oe,0,$,w.width,w.height,0,de,Le,null)),t.bindFramebuffer(36160,L),we(w)?d.framebufferTexture2DMultisampleEXT(36160,le,oe,n.get(Z).__webglTexture,0,ke(w)):a.framebufferTexture2D(36160,le,oe,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function ae(L,w,Z){if(a.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let le=33189;if(Z||we(w)){const oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Fi?le=36012:oe.type===fr&&(le=33190));const de=ke(w);we(w)?d.renderbufferStorageMultisampleEXT(36161,de,le,w.width,w.height):a.renderbufferStorageMultisample(36161,de,le,w.width,w.height)}else a.renderbufferStorage(36161,le,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){const le=ke(w);Z&&we(w)===!1?a.renderbufferStorageMultisample(36161,le,35056,w.width,w.height):we(w)?d.renderbufferStorageMultisampleEXT(36161,le,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const le=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0;oe<le.length;oe++){const de=le[oe],Le=r.convert(de.format,de.encoding),$=r.convert(de.type),Se=v(de.internalFormat,Le,$,de.encoding),ge=ke(w);Z&&we(w)===!1?a.renderbufferStorageMultisample(36161,ge,Se,w.width,w.height):we(w)?d.renderbufferStorageMultisampleEXT(36161,ge,Se,w.width,w.height):a.renderbufferStorage(36161,Se,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function Q(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),C(w.depthTexture,0);const le=n.get(w.depthTexture).__webglTexture,oe=ke(w);if(w.depthTexture.format===vr)we(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,le,0,oe):a.framebufferTexture2D(36160,36096,3553,le,0);else if(w.depthTexture.format===ws)we(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,le,0,oe):a.framebufferTexture2D(36160,33306,3553,le,0);else throw new Error("Unknown depthTexture format")}function te(L){const w=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Q(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(36160,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]=a.createRenderbuffer(),ae(w.__webglDepthbuffer[le],L,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),ae(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function be(L,w,Z){const le=n.get(L);w!==void 0&&W(le.__webglFramebuffer,L,L.texture,36064,3553),Z!==void 0&&te(L)}function Ae(L){const w=L.texture,Z=n.get(L),le=n.get(w);L.addEventListener("dispose",Y),L.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=a.createTexture()),le.__version=w.version,s.memory.textures++);const oe=L.isWebGLCubeRenderTarget===!0,de=L.isWebGLMultipleRenderTargets===!0,Le=b(L)||o;if(oe){Z.__webglFramebuffer=[];for(let $=0;$<6;$++)Z.__webglFramebuffer[$]=a.createFramebuffer()}else{if(Z.__webglFramebuffer=a.createFramebuffer(),de)if(i.drawBuffers){const $=L.texture;for(let Se=0,ge=$.length;Se<ge;Se++){const xe=n.get($[Se]);xe.__webglTexture===void 0&&(xe.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&we(L)===!1){const $=de?w:[w];Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let Se=0;Se<$.length;Se++){const ge=$[Se];Z.__webglColorRenderbuffer[Se]=a.createRenderbuffer(),a.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[Se]);const xe=r.convert(ge.format,ge.encoding),I=r.convert(ge.type),he=v(ge.internalFormat,xe,I,ge.encoding),ue=ke(L);a.renderbufferStorageMultisample(36161,ue,he,L.width,L.height),a.framebufferRenderbuffer(36160,36064+Se,36161,Z.__webglColorRenderbuffer[Se])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),ae(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,le.__webglTexture),j(34067,w,Le);for(let $=0;$<6;$++)W(Z.__webglFramebuffer[$],L,w,36064,34069+$);S(w,Le)&&A(34067),t.unbindTexture()}else if(de){const $=L.texture;for(let Se=0,ge=$.length;Se<ge;Se++){const xe=$[Se],I=n.get(xe);t.bindTexture(3553,I.__webglTexture),j(3553,xe,Le),W(Z.__webglFramebuffer,L,xe,36064+Se,3553),S(xe,Le)&&A(3553)}t.unbindTexture()}else{let $=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?$=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,le.__webglTexture),j($,w,Le),W(Z.__webglFramebuffer,L,w,36064,$),S(w,Le)&&A($),t.unbindTexture()}L.depthBuffer&&te(L)}function De(L){const w=b(L)||o,Z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let le=0,oe=Z.length;le<oe;le++){const de=Z[le];if(S(de,w)){const Le=L.isWebGLCubeRenderTarget?34067:3553,$=n.get(de).__webglTexture;t.bindTexture(Le,$),A(Le),t.unbindTexture()}}}function H(L){if(o&&L.samples>0&&we(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Z=L.width,le=L.height;let oe=16384;const de=[],Le=L.stencilBuffer?33306:36096,$=n.get(L),Se=L.isWebGLMultipleRenderTargets===!0;if(Se)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){de.push(36064+ge),L.depthBuffer&&de.push(Le);const xe=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(xe===!1&&(L.depthBuffer&&(oe|=256),L.stencilBuffer&&(oe|=1024)),Se&&a.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[ge]),xe===!0&&(a.invalidateFramebuffer(36008,[Le]),a.invalidateFramebuffer(36009,[Le])),Se){const I=n.get(w[ge]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,I,0)}a.blitFramebuffer(0,0,Z,le,0,0,Z,le,oe,9728),f&&a.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Se)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ge,36161,$.__webglColorRenderbuffer[ge]);const xe=n.get(w[ge]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ge,3553,xe,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function ke(L){return Math.min(h,L.samples)}function we(L){const w=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function lt(L){const w=s.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function ct(L,w){const Z=L.encoding,le=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===fc||Z!==Cr&&(Z===tt?o===!1?e.has("EXT_sRGB")===!0&&le===zn?(L.format=fc,L.minFilter=ln,L.generateMipmaps=!1):w=ef.sRGBToLinear(w):(le!==zn||oe!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),w}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=C,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=be,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=W,this.useMultisampledRTT=we}function Qv(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===Lr)return 5121;if(r===Pm)return 32819;if(r===Dm)return 32820;if(r===Lm)return 5120;if(r===Cm)return 5122;if(r===$d)return 5123;if(r===Rm)return 5124;if(r===fr)return 5125;if(r===Fi)return 5126;if(r===vo)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Im)return 6406;if(r===zn)return 6408;if(r===Om)return 6409;if(r===Nm)return 6410;if(r===vr)return 6402;if(r===ws)return 34041;if(r===km)return 6403;if(r===Fm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===fc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zm)return 36244;if(r===Bm)return 33319;if(r===Um)return 33320;if(r===Vm)return 36249;if(r===ul||r===hl||r===dl||r===fl)if(s===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Au||r===Lu||r===Cu||r===Ru)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Au)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ru)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Pu||r===Du)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Pu)return s===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Du)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Iu||r===Fu||r===Ou||r===Nu||r===ku||r===zu||r===Bu||r===Uu||r===Vu||r===Gu||r===Hu||r===Wu||r===Xu||r===ju)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Iu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ou)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ku)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xu)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ju)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===qu)return s===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===hs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class ey extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oi extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const x=new Oi;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[p.jointName]=x,c.add(x)}const _=c.joints[p.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class ny extends nn{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=fr),n===void 0&&u===ws&&(n=hs),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class iy extends Fs{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,f=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],x=[],M=new Zt;M.layers.enable(1),M.viewport=new rt;const b=new Zt;b.layers.enable(2),b.viewport=new rt;const y=[M,b],S=new ey;S.layers.enable(1),S.layers.enable(2);let A=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let C=_[z];return C===void 0&&(C=new Vl,_[z]=C),C.getTargetRaySpace()},this.getControllerGrip=function(z){let C=_[z];return C===void 0&&(C=new Vl,_[z]=C),C.getGripSpace()},this.getHand=function(z){let C=_[z];return C===void 0&&(C=new Vl,_[z]=C),C.getHandSpace()};function E(z){const C=x.indexOf(z.inputSource);if(C===-1)return;const ne=_[C];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function F(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",O);for(let z=0;z<_.length;z++){const C=x[z];C!==null&&(x[z]=null,_[z].disconnect(C))}A=null,v=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,m=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",F),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const C={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,C),i.updateRenderState({baseLayer:d}),m=new Rr(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Lr,encoding:e.outputEncoding})}else{let C=null,ne=null,re=null;g.depth&&(re=g.stencil?35056:33190,C=g.stencil?ws:vr,ne=g.stencil?hs:fr);const ie={colorFormat:32856,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),m=new Rr(h.textureWidth,h.textureHeight,{format:zn,type:Lr,depthTexture:new ny(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const fe=e.properties.get(m);fe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(o),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(z){for(let C=0;C<z.removed.length;C++){const ne=z.removed[C],re=x.indexOf(ne);re>=0&&(x[re]=null,_[re].dispatchEvent({type:"disconnected",data:ne}))}for(let C=0;C<z.added.length;C++){const ne=z.added[C];let re=x.indexOf(ne);if(re===-1){for(let fe=0;fe<_.length;fe++)if(fe>=x.length){x.push(ne),re=fe;break}else if(x[fe]===null){x[fe]=ne,re=fe;break}if(re===-1)break}const ie=_[re];ie&&ie.dispatchEvent({type:"connected",data:ne})}}const Y=new k,J=new k;function D(z,C,ne){Y.setFromMatrixPosition(C.matrixWorld),J.setFromMatrixPosition(ne.matrixWorld);const re=Y.distanceTo(J),ie=C.projectionMatrix.elements,fe=ne.projectionMatrix.elements,Me=ie[14]/(ie[10]-1),j=ie[14]/(ie[10]+1),K=(ie[9]+1)/ie[5],R=(ie[9]-1)/ie[5],P=(ie[8]-1)/ie[0],W=(fe[8]+1)/fe[0],ae=Me*P,Q=Me*W,te=re/(-P+W),be=te*-P;C.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(be),z.translateZ(te),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ae=Me+te,De=j+te,H=ae-be,ke=Q+(re-be),we=K*j/De*Ae,lt=R*j/De*Ae;z.projectionMatrix.makePerspective(H,ke,we,lt,Ae,De)}function G(z,C){C===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(C.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;S.near=b.near=M.near=z.near,S.far=b.far=M.far=z.far,(A!==S.near||v!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,v=S.far);const C=z.parent,ne=S.cameras;G(S,C);for(let ie=0;ie<ne.length;ie++)G(ne[ie],C);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),z.position.copy(S.position),z.quaternion.copy(S.quaternion),z.scale.copy(S.scale),z.matrix.copy(S.matrix),z.matrixWorld.copy(S.matrixWorld);const re=z.children;for(let ie=0,fe=re.length;ie<fe;ie++)re[ie].updateMatrixWorld(!0);ne.length===2?D(S,M,b):S.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let U=null;function N(z,C){if(c=C.getViewerPose(l||s),f=C,c!==null){const ne=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let re=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let ie=0;ie<ne.length;ie++){const fe=ne[ie];let Me=null;if(d!==null)Me=d.getViewport(fe);else{const K=u.getViewSubImage(h,fe);Me=K.viewport,ie===0&&(e.setRenderTargetTextures(m,K.colorTexture,h.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(m))}let j=y[ie];j===void 0&&(j=new Zt,j.layers.enable(ie),j.viewport=new rt,y[ie]=j),j.matrix.fromArray(fe.transform.matrix),j.projectionMatrix.fromArray(fe.projectionMatrix),j.viewport.set(Me.x,Me.y,Me.width,Me.height),ie===0&&S.matrix.copy(j.matrix),re===!0&&S.cameras.push(j)}}for(let ne=0;ne<_.length;ne++){const re=x[ne],ie=_[ne];re!==null&&ie!==void 0&&ie.update(re,C,l||s)}U&&U(z,C),f=null}const X=new lf;X.setAnimationLoop(N),this.setAnimationLoop=function(z){U=z},this.dispose=function(){}}}function ry(a,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,_,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=x*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function sy(){const a=Mo("canvas");return a.style.display="block",a}function pf(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:sy(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cr,this.physicallyCorrectLights=!1,this.toneMapping=mi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,_=0,x=0,M=null,b=-1,y=null;const S=new rt,A=new rt;let v=null,E=e.width,F=e.height,O=1,Y=null,J=null;const D=new rt(0,0,E,F),G=new rt(0,0,E,F);let U=!1;const N=new Xc;let X=!1,z=!1,C=null;const ne=new et,re=new Ze,ie=new k,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return M===null?O:1}let j=t;function K(T,B){for(let q=0;q<T.length;q++){const V=T[q],ee=e.getContext(V,B);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uc}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",ue,!1),j===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),j=K(B,T),j===null)throw K(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let R,P,W,ae,Q,te,be,Ae,De,H,ke,we,lt,ct,L,w,Z,le,oe,de,Le,$,Se;function ge(){R=new gx(j),P=new ux(j,R,a),R.init(P),$=new Qv(j,R,P),W=new Zv(j,R,P),ae=new vx,Q=new kv,te=new Jv(j,R,W,Q,P,$,ae),be=new dx(p),Ae=new mx(p),De=new Pg(j,P),Se=new lx(j,R,De,P),H=new _x(j,De,ae,Se),ke=new wx(j,H,De,ae),oe=new Mx(j,P,te),w=new hx(Q),we=new Nv(p,be,Ae,R,P,Se,w),lt=new ry(p,Q),ct=new Bv,L=new Xv(R,P),le=new ax(p,be,W,ke,u,s),Z=new Kv(p,ke,P),de=new cx(j,R,ae,P),Le=new xx(j,R,ae,P),ae.programs=we.programs,p.capabilities=P,p.extensions=R,p.properties=Q,p.renderLists=ct,p.shadowMap=Z,p.state=W,p.info=ae}ge();const xe=new iy(p,j);this.xr=xe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=R.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=R.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(E,F,!1))},this.getSize=function(T){return T.set(E,F)},this.setSize=function(T,B,q){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,F=B,e.width=Math.floor(T*O),e.height=Math.floor(B*O),q!==!1&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(E*O,F*O).floor()},this.setDrawingBufferSize=function(T,B,q){E=T,F=B,O=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,B,q,V){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,B,q,V),W.viewport(S.copy(D).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(G)},this.setScissor=function(T,B,q,V){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,B,q,V),W.scissor(A.copy(G).multiplyScalar(O).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){W.setScissorTest(U=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(T=!0,B=!0,q=!0){let V=0;T&&(V|=16384),B&&(V|=256),q&&(V|=1024),j.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),ct.dispose(),L.dispose(),Q.dispose(),be.dispose(),Ae.dispose(),ke.dispose(),Se.dispose(),we.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ge),xe.removeEventListener("sessionend",We),C&&(C.dispose(),C=null),ft.stop()};function I(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=ae.autoReset,B=Z.enabled,q=Z.autoUpdate,V=Z.needsUpdate,ee=Z.type;ge(),ae.autoReset=T,Z.enabled=B,Z.autoUpdate=q,Z.needsUpdate=V,Z.type=ee}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const B=T.target;B.removeEventListener("dispose",pe),_e(B)}function _e(T){Ce(T),Q.remove(T)}function Ce(T){const B=Q.get(T).programs;B!==void 0&&(B.forEach(function(q){we.releaseProgram(q)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,V,ee,Re){B===null&&(B=fe);const ye=ee.isMesh&&ee.matrixWorld.determinant()<0,Te=Oe(T,B,q,V,ee);W.setMaterial(V,ye);let Ee=q.index;const qe=q.attributes.position;if(Ee===null){if(qe===void 0||qe.count===0)return}else if(Ee.count===0)return;let Ve=1;V.wireframe===!0&&(Ee=H.getWireframeAttribute(q),Ve=2),Se.setup(ee,V,Te,q,Ee);let Fe,Ue=de;Ee!==null&&(Fe=De.get(Ee),Ue=Le,Ue.setIndex(Fe));const Dt=Ee!==null?Ee.count:qe.count,Hn=q.drawRange.start*Ve,ti=q.drawRange.count*Ve,kt=Re!==null?Re.start*Ve:0,Qe=Re!==null?Re.count*Ve:1/0,Br=Math.max(Hn,kt),yt=Math.min(Dt,Hn+ti,kt+Qe)-1,Wn=Math.max(0,yt-Br+1);if(Wn!==0){if(ee.isMesh)V.wireframe===!0?(W.setLineWidth(V.wireframeLinewidth*Me()),Ue.setMode(1)):Ue.setMode(4);else if(ee.isLine){let Si=V.linewidth;Si===void 0&&(Si=1),W.setLineWidth(Si*Me()),ee.isLineSegments?Ue.setMode(1):ee.isLineLoop?Ue.setMode(2):Ue.setMode(3)}else ee.isPoints?Ue.setMode(0):ee.isSprite&&Ue.setMode(4);if(ee.isInstancedMesh)Ue.renderInstances(Br,Wn,ee.count);else if(q.isInstancedBufferGeometry){const Si=Math.min(q.instanceCount,q._maxInstanceCount);Ue.renderInstances(Br,Wn,Si)}else Ue.render(Br,Wn)}},this.compile=function(T,B){d=L.get(T),d.init(),g.push(d),T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(p.physicallyCorrectLights),T.traverse(function(q){const V=q.material;if(V)if(Array.isArray(V))for(let ee=0;ee<V.length;ee++){const Re=V[ee];ve(Re,T,q)}else ve(V,T,q)}),g.pop(),d=null};let ce=null;function Pe(T){ce&&ce(T)}function Ge(){ft.stop()}function We(){ft.start()}const ft=new lf;ft.setAnimationLoop(Pe),typeof self!="undefined"&&ft.setContext(self),this.setAnimationLoop=function(T){ce=T,xe.setAnimationLoop(T),T===null?ft.stop():ft.start()},xe.addEventListener("sessionstart",Ge),xe.addEventListener("sessionend",We),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(B),B=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,B,M),d=L.get(T,g.length),d.init(),g.push(d),ne.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),N.setFromProjectionMatrix(ne),z=this.localClippingEnabled,X=w.init(this.clippingPlanes,z,B),h=ct.get(T,f.length),h.init(),f.push(h),vt(T,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Y,J),X===!0&&w.beginShadows();const q=d.state.shadowsArray;if(Z.render(q,T,B),X===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(h,T),d.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const V=B.cameras;for(let ee=0,Re=V.length;ee<Re;ee++){const ye=V[ee];wi(h,T,ye,ye.viewport)}}else wi(h,T,B);M!==null&&(te.updateMultisampleRenderTarget(M),te.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,B),Se.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function vt(T,B,q,V){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||N.intersectsSprite(T)){V&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const ye=ke.update(T),Te=T.material;Te.visible&&h.push(T,ye,Te,q,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ae.render.frame&&(T.skeleton.update(),T.skeleton.frame=ae.render.frame),!T.frustumCulled||N.intersectsObject(T))){V&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const ye=ke.update(T),Te=T.material;if(Array.isArray(Te)){const Ee=ye.groups;for(let qe=0,Ve=Ee.length;qe<Ve;qe++){const Fe=Ee[qe],Ue=Te[Fe.materialIndex];Ue&&Ue.visible&&h.push(T,ye,Ue,q,ie.z,Fe)}}else Te.visible&&h.push(T,ye,Te,q,ie.z,null)}}const Re=T.children;for(let ye=0,Te=Re.length;ye<Te;ye++)vt(Re[ye],B,q,V)}function wi(T,B,q,V){const ee=T.opaque,Re=T.transmissive,ye=T.transparent;d.setupLightsView(q),Re.length>0&&Zi(ee,B,q),V&&W.viewport(S.copy(V)),ee.length>0&&He(ee,B,q),Re.length>0&&He(Re,B,q),ye.length>0&&He(ye,B,q),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Zi(T,B,q){const V=P.isWebGL2;C===null&&(C=new Rr(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")?vo:Lr,minFilter:Is,samples:V&&r===!0?4:0})),p.getDrawingBufferSize(re),V?C.setSize(re.x,re.y):C.setSize(za(re.x),za(re.y));const ee=p.getRenderTarget();p.setRenderTarget(C),p.clear();const Re=p.toneMapping;p.toneMapping=mi,He(T,B,q),p.toneMapping=Re,te.updateMultisampleRenderTarget(C),te.updateRenderTargetMipmap(C),p.setRenderTarget(ee)}function He(T,B,q){const V=B.isScene===!0?B.overrideMaterial:null;for(let ee=0,Re=T.length;ee<Re;ee++){const ye=T[ee],Te=ye.object,Ee=ye.geometry,qe=V===null?ye.material:V,Ve=ye.group;Te.layers.test(q.layers)&&se(Te,B,q,Ee,qe,Ve)}}function se(T,B,q,V,ee,Re){T.onBeforeRender(p,B,q,V,ee,Re),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(p,B,q,V,T,Re),ee.transparent===!0&&ee.side===Ar?(ee.side=Gt,ee.needsUpdate=!0,p.renderBufferDirect(q,B,V,ee,T,Re),ee.side=vs,ee.needsUpdate=!0,p.renderBufferDirect(q,B,V,ee,T,Re),ee.side=Ar):p.renderBufferDirect(q,B,V,ee,T,Re),T.onAfterRender(p,B,q,V,ee,Re)}function ve(T,B,q){B.isScene!==!0&&(B=fe);const V=Q.get(T),ee=d.state.lights,Re=d.state.shadowsArray,ye=ee.state.version,Te=we.getParameters(T,ee.state,Re,B,q),Ee=we.getProgramCacheKey(Te);let qe=V.programs;V.environment=T.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(T.isMeshStandardMaterial?Ae:be).get(T.envMap||V.environment),qe===void 0&&(T.addEventListener("dispose",pe),qe=new Map,V.programs=qe);let Ve=qe.get(Ee);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===ye)return Ie(T,Te),Ve}else Te.uniforms=we.getUniforms(T),T.onBuild(q,Te,p),T.onBeforeCompile(Te,p),Ve=we.acquireProgram(Te,Ee),qe.set(Ee,Ve),V.uniforms=Te.uniforms;const Fe=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=w.uniform),Ie(T,Te),V.needsLights=Be(T),V.lightsStateVersion=ye,V.needsLights&&(Fe.ambientLightColor.value=ee.state.ambient,Fe.lightProbe.value=ee.state.probe,Fe.directionalLights.value=ee.state.directional,Fe.directionalLightShadows.value=ee.state.directionalShadow,Fe.spotLights.value=ee.state.spot,Fe.spotLightShadows.value=ee.state.spotShadow,Fe.rectAreaLights.value=ee.state.rectArea,Fe.ltc_1.value=ee.state.rectAreaLTC1,Fe.ltc_2.value=ee.state.rectAreaLTC2,Fe.pointLights.value=ee.state.point,Fe.pointLightShadows.value=ee.state.pointShadow,Fe.hemisphereLights.value=ee.state.hemi,Fe.directionalShadowMap.value=ee.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Fe.spotShadowMap.value=ee.state.spotShadowMap,Fe.spotShadowMatrix.value=ee.state.spotShadowMatrix,Fe.pointShadowMap.value=ee.state.pointShadowMap,Fe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ue=Ve.getUniforms(),Dt=Ta.seqWithValue(Ue.seq,Fe);return V.currentProgram=Ve,V.uniformsList=Dt,Ve}function Ie(T,B){const q=Q.get(T);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Oe(T,B,q,V,ee){B.isScene!==!0&&(B=fe),te.resetTextureUnits();const Re=B.fog,ye=V.isMeshStandardMaterial?B.environment:null,Te=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Cr,Ee=(V.isMeshStandardMaterial?Ae:be).get(V.envMap||ye),qe=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!V.normalMap&&!!q.attributes.tangent,Fe=!!q.morphAttributes.position,Ue=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color,Hn=V.toneMapped?p.toneMapping:mi,ti=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,kt=ti!==void 0?ti.length:0,Qe=Q.get(V),Br=d.state.lights;if(X===!0&&(z===!0||T!==y)){const Xn=T===y&&V.id===b;w.setState(V,T,Xn)}let yt=!1;V.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Br.state.version||Qe.outputEncoding!==Te||ee.isInstancedMesh&&Qe.instancing===!1||!ee.isInstancedMesh&&Qe.instancing===!0||ee.isSkinnedMesh&&Qe.skinning===!1||!ee.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==Ee||V.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==w.numPlanes||Qe.numIntersection!==w.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Ve||Qe.morphTargets!==Fe||Qe.morphNormals!==Ue||Qe.morphColors!==Dt||Qe.toneMapping!==Hn||P.isWebGL2===!0&&Qe.morphTargetsCount!==kt)&&(yt=!0):(yt=!0,Qe.__version=V.version);let Wn=Qe.currentProgram;yt===!0&&(Wn=ve(V,B,ee));let Si=!1,Us=!1,ll=!1;const Wt=Wn.getUniforms(),Vs=Qe.uniforms;if(W.useProgram(Wn.program)&&(Si=!0,Us=!0,ll=!0),V.id!==b&&(b=V.id,Us=!0),Si||y!==T){if(Wt.setValue(j,"projectionMatrix",T.projectionMatrix),P.logarithmicDepthBuffer&&Wt.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,Us=!0,ll=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Xn=Wt.map.cameraPosition;Xn!==void 0&&Xn.setValue(j,ie.setFromMatrixPosition(T.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Wt.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ee.isSkinnedMesh)&&Wt.setValue(j,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){Wt.setOptional(j,ee,"bindMatrix"),Wt.setOptional(j,ee,"bindMatrixInverse");const Xn=ee.skeleton;Xn&&(P.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),Wt.setValue(j,"boneTexture",Xn.boneTexture,te),Wt.setValue(j,"boneTextureSize",Xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cl=q.morphAttributes;return(cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&P.isWebGL2===!0)&&oe.update(ee,q,V,Wn),(Us||Qe.receiveShadow!==ee.receiveShadow)&&(Qe.receiveShadow=ee.receiveShadow,Wt.setValue(j,"receiveShadow",ee.receiveShadow)),Us&&(Wt.setValue(j,"toneMappingExposure",p.toneMappingExposure),Qe.needsLights&&St(Vs,ll),Re&&V.fog===!0&&lt.refreshFogUniforms(Vs,Re),lt.refreshMaterialUniforms(Vs,V,O,F,C),Ta.upload(j,Qe.uniformsList,Vs,te)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ta.upload(j,Qe.uniformsList,Vs,te),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Wt.setValue(j,"center",ee.center),Wt.setValue(j,"modelViewMatrix",ee.modelViewMatrix),Wt.setValue(j,"normalMatrix",ee.normalMatrix),Wt.setValue(j,"modelMatrix",ee.matrixWorld),Wn}function St(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Be(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,B,q){Q.get(T.texture).__webglTexture=B,Q.get(T.depthTexture).__webglTexture=q;const V=Q.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=q===void 0,V.__autoAllocateDepthBuffer||R.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const q=Q.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){M=T,_=B,x=q;let V=!0;if(T){const Ee=Q.get(T);Ee.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(36160,null),V=!1):Ee.__webglFramebuffer===void 0?te.setupRenderTarget(T):Ee.__hasExternalTextures&&te.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture)}let ee=null,Re=!1,ye=!1;if(T){const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(ye=!0);const qe=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=qe[B],Re=!0):P.isWebGL2&&T.samples>0&&te.useMultisampledRTT(T)===!1?ee=Q.get(T).__webglMultisampledFramebuffer:ee=qe,S.copy(T.viewport),A.copy(T.scissor),v=T.scissorTest}else S.copy(D).multiplyScalar(O).floor(),A.copy(G).multiplyScalar(O).floor(),v=U;if(W.bindFramebuffer(36160,ee)&&P.drawBuffers&&V&&W.drawBuffers(T,ee),W.viewport(S),W.scissor(A),W.setScissorTest(v),Re){const Ee=Q.get(T.texture);j.framebufferTexture2D(36160,36064,34069+B,Ee.__webglTexture,q)}else if(ye){const Ee=Q.get(T.texture),qe=B||0;j.framebufferTextureLayer(36160,36064,Ee.__webglTexture,q||0,qe)}b=-1},this.readRenderTargetPixels=function(T,B,q,V,ee,Re,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){W.bindFramebuffer(36160,Te);try{const Ee=T.texture,qe=Ee.format,Ve=Ee.type;if(qe!==zn&&$.convert(qe)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ve===vo&&(R.has("EXT_color_buffer_half_float")||P.isWebGL2&&R.has("EXT_color_buffer_float"));if(Ve!==Lr&&$.convert(Ve)!==j.getParameter(35738)&&!(Ve===Fi&&(P.isWebGL2||R.has("OES_texture_float")||R.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-V&&q>=0&&q<=T.height-ee&&j.readPixels(B,q,V,ee,$.convert(qe),$.convert(Ve),Re)}finally{const Ee=M!==null?Q.get(M).__webglFramebuffer:null;W.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(T,B,q=0){const V=Math.pow(2,-q),ee=Math.floor(B.image.width*V),Re=Math.floor(B.image.height*V);te.setTexture2D(B,0),j.copyTexSubImage2D(3553,q,0,0,T.x,T.y,ee,Re),W.unbindTexture()},this.copyTextureToTexture=function(T,B,q,V=0){const ee=B.image.width,Re=B.image.height,ye=$.convert(q.format),Te=$.convert(q.type);te.setTexture2D(q,0),j.pixelStorei(37440,q.flipY),j.pixelStorei(37441,q.premultiplyAlpha),j.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?j.texSubImage2D(3553,V,T.x,T.y,ee,Re,ye,Te,B.image.data):B.isCompressedTexture?j.compressedTexSubImage2D(3553,V,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,ye,B.mipmaps[0].data):j.texSubImage2D(3553,V,T.x,T.y,ye,Te,B.image),V===0&&q.generateMipmaps&&j.generateMipmap(3553),W.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q,V,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ee=$.convert(V.format),qe=$.convert(V.type);let Ve;if(V.isData3DTexture)te.setTexture3D(V,0),Ve=32879;else if(V.isDataArrayTexture)te.setTexture2DArray(V,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,V.flipY),j.pixelStorei(37441,V.premultiplyAlpha),j.pixelStorei(3317,V.unpackAlignment);const Fe=j.getParameter(3314),Ue=j.getParameter(32878),Dt=j.getParameter(3316),Hn=j.getParameter(3315),ti=j.getParameter(32877),kt=q.isCompressedTexture?q.mipmaps[0]:q.image;j.pixelStorei(3314,kt.width),j.pixelStorei(32878,kt.height),j.pixelStorei(3316,T.min.x),j.pixelStorei(3315,T.min.y),j.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?j.texSubImage3D(Ve,ee,B.x,B.y,B.z,Re,ye,Te,Ee,qe,kt.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ve,ee,B.x,B.y,B.z,Re,ye,Te,Ee,kt.data)):j.texSubImage3D(Ve,ee,B.x,B.y,B.z,Re,ye,Te,Ee,qe,kt),j.pixelStorei(3314,Fe),j.pixelStorei(32878,Ue),j.pixelStorei(3316,Dt),j.pixelStorei(3315,Hn),j.pixelStorei(32877,ti),ee===0&&V.generateMipmaps&&j.generateMipmap(Ve),W.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,W.reset(),Se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class oy extends pf{}oy.prototype.isWebGL1Renderer=!0;class qc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class ay extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ly{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new k;class Yc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dh=new k,Ih=new rt,Fh=new rt,cy=new k,Oh=new et;class uy extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new et,this.bindMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ih.fromBufferAttribute(i.attributes.skinIndex,e),Fh.fromBufferAttribute(i.attributes.skinWeight,e),Dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Fh.getComponent(r);if(s!==0){const o=Ih.getComponent(r);Oh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cy.copy(Dh).applyMatrix4(Oh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mf extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hy extends nn{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Ot,u=Ot,h,d){super(null,s,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new et,dy=new et;class $c{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:dy;Nh.multiplyMatrices(o,t[r]),Nh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Zd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hy(t,e,e,zn,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new mf),this.bones.push(s),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class gf extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kh=new k,zh=new k,Bh=new et,Gl=new Hc,ca=new Ns;class Kc extends xt{constructor(e=new Gn,t=new gf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)kh.fromBufferAttribute(t,i-1),zh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kh.distanceTo(zh);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;Bh.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(Bh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,h=new k,d=new k,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),x=Math.min(g.count,s.start+s.count);for(let M=_,b=x-1;M<b;M+=f){const y=g.getX(M),S=g.getX(M+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,S),Gl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let M=_,b=x-1;M<b;M+=f){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),Gl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Uh=new k,Vh=new k;class fy extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Uh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uh.distanceTo(Vh);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class py extends Kc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _f extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new et,gc=new Hc,ua=new Ns,ha=new k;class my extends xt{constructor(e=new Gn,t=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Gh.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Gh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let g=d,p=f;g<p;g++){const m=c.getX(g);ha.fromBufferAttribute(h,m),Hh(ha,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let g=d,p=f;g<p;g++)ha.fromBufferAttribute(h,g),Hh(ha,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hh(a,e,t,n,i,r,s){const o=gc.distanceSqToPoint(a);if(o<t){const l=new k;gc.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class _i extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nr extends _i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const ht={arraySlice:function(a,e,t){return ht.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i},flattenJSON:function(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)},subclip:function(a,e,t,n,i=30){const r=a.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){h.push(c.times[f]);for(let p=0;p<u;++p)d.push(c.values[f*u+p])}}h.length!==0&&(c.times=ht.convertArray(h,c.times.constructor),c.values=ht.convertArray(d,c.values.constructor),s.push(c))}r.tracks=s;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(a,e=0,t=a,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(_){return _.name===o.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=o.times.length-1;let p;if(r<=o.times[0]){const _=u,x=h-u;p=ht.arraySlice(o.values,_,x)}else if(r>=o.times[g]){const _=g*h+u,x=_+h-u;p=ht.arraySlice(o.values,_,x)}else{const _=o.createInterpolant(),x=u,M=h-u;_.evaluate(r),p=ht.arraySlice(_.resultBuffer,x,M)}l==="quaternion"&&new yi().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let _=0;_<m;++_){const x=_*f+d;if(l==="quaternion")yi.multiplyQuaternionsFlat(c.values,x,p,0,c.values,x);else{const M=f-d*2;for(let b=0;b<M;++b)c.values[x+b]-=p[b]}}}return a.blendMode=Wm,a}};class Vo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gy extends Vo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yu,endingEnd:Yu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case $u:r=e,o=2*t-n;break;case Ku:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $u:s=e,l=2*n-t;break;case Ku:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-d*m+2*d*p-d*g,x=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*p+.5*g,b=f*m-f*p;for(let y=0;y!==o;++y)r[y]=_*s[u+y]+x*s[c+y]+M*s[l+y]+b*s[h+y];return r}}class _y extends Vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class xy extends Vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ht.convertArray(t,this.TimeBufferType),this.values=ht.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ht.convertArray(e.times,Array),values:ht.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ht.arraySlice(n,r,s),this.values=ht.arraySlice(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&ht.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ht.arraySlice(this.times),t=ht.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===pl,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=ht.arraySlice(e,0,s),this.values=ht.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ht.arraySlice(this.times,0),t=ht.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ss;class zs extends ei{}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=yo;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class xf extends ei{}xf.prototype.ValueTypeName="color";class wo extends ei{}wo.prototype.ValueTypeName="number";class vy extends Vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)yi.slerpFlat(r,0,s,c-o,s,c,l);return r}}class Dr extends ei{InterpolantFactoryMethodLinear(e){return new vy(this.times,this.values,this.getValueSize(),e)}}Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Ss;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends ei{}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=yo;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends ei{}So.prototype.ValueTypeName="vector";class yy{constructor(e,t=-1,n,i=Hm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(My(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=ht.getKeyframeOrder(l);l=ht.sortedArray(l,1,u),c=ht.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new wo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,p){if(f.length!==0){const m=[],_=[];ht.flattenJSON(f,m,_,g),m.length!==0&&p.push(new h(d,m,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const m=[],_=[];for(let x=0;x!==d[g].morphTargets.length;++x){const M=d[g];m.push(M.time),_.push(M.morphTarget===p?1:0)}i.push(new wo(".morphTargetInfluence["+p+"]",m,_))}l=f.length*s}else{const f=".bones["+t[h].name+"]";n(So,f+".position",d,"pos",i),n(Dr,f+".quaternion",d,"rot",i),n(So,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function by(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return xf;case"quaternion":return Dr;case"bool":case"boolean":return zs;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function My(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=by(a.type);if(a.times===void 0){const t=[],n=[];ht.flattenJSON(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Es={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class wy{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Sy=new wy;class kr{constructor(e){this.manager=e!==void 0?e:Sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ai={};class Ba extends kr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let p=0;const m=new ReadableStream({start(_){x();function x(){h.read().then(({done:M,value:b})=>{if(M)_.close();else{p+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let S=0,A=u.length;S<A;S++){const v=u[S];v.onProgress&&v.onProgress(y)}_.enqueue(b),x()}})}}});return new Response(m)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Es.add(e,c);const u=ai[e];delete ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vf extends kr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Es.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Mo("img");function l(){u(),Es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ty extends kr{constructor(e){super(e)}load(e,t,n,i){const r=new Wc,s=new vf(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Ey extends kr{constructor(e){super(e)}load(e,t,n,i){const r=new nn,s=new vf(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class il extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wh=new et,Xh=new k,jh=new k;class Zc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ay extends Zc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ly extends il{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DefaultUp),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new Ay}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qh=new et,Xs=new k,Hl=new k;class Cy extends Zc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),Hl.copy(n.position),Hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hl),n.updateMatrixWorld(),i.makeTranslation(-Xs.x,-Xs.y,-Xs.z),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh)}}class Ry extends il{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Py extends Zc{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eo extends il{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DefaultUp),this.updateMatrix(),this.target=new xt,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dy extends il{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class br{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Iy extends kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Es.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Es.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Jc="\\[\\]\\.:\\/",Fy=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",Oy="[^"+Jc.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Qc),ky=/(WCOD+)?/.source.replace("WCOD",Oy),zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Uy=new RegExp("^"+Ny+ky+zy+By+"$"),Vy=["material","materials","bones"];class Gy{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fy,"")}static parseTrackName(e){const t=Uy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Gy;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);function Hy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $i={exports:{}},ds=typeof Reflect=="object"?Reflect:null,Yh=ds&&typeof ds.apply=="function"?ds.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Ea;ds&&typeof ds.ownKeys=="function"?Ea=ds.ownKeys:Object.getOwnPropertySymbols?Ea=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ea=function(e){return Object.getOwnPropertyNames(e)};function Wy(a){console&&console.warn&&console.warn(a)}var yf=Number.isNaN||function(e){return e!==e};function st(){st.init.call(this)}$i.exports=st;$i.exports.once=Yy;st.EventEmitter=st;st.prototype._events=void 0;st.prototype._eventsCount=0;st.prototype._maxListeners=void 0;var $h=10;function rl(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(st,"defaultMaxListeners",{enumerable:!0,get:function(){return $h},set:function(a){if(typeof a!="number"||a<0||yf(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");$h=a}});st.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};st.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||yf(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function bf(a){return a._maxListeners===void 0?st.defaultMaxListeners:a._maxListeners}st.prototype.getMaxListeners=function(){return bf(this)};st.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var o=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw o.context=s,o}var l=r[e];if(l===void 0)return!1;if(typeof l=="function")Yh(l,this,t);else for(var c=l.length,u=Ef(l,c),n=0;n<c;++n)Yh(u[n],this,t);return!0};function Mf(a,e,t,n){var i,r,s;if(rl(t),r=a._events,r===void 0?(r=a._events=Object.create(null),a._eventsCount=0):(r.newListener!==void 0&&(a.emit("newListener",e,t.listener?t.listener:t),r=a._events),s=r[e]),s===void 0)s=r[e]=t,++a._eventsCount;else if(typeof s=="function"?s=r[e]=n?[t,s]:[s,t]:n?s.unshift(t):s.push(t),i=bf(a),i>0&&s.length>i&&!s.warned){s.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=a,o.type=e,o.count=s.length,Wy(o)}return a}st.prototype.addListener=function(e,t){return Mf(this,e,t,!1)};st.prototype.on=st.prototype.addListener;st.prototype.prependListener=function(e,t){return Mf(this,e,t,!0)};function Xy(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function wf(a,e,t){var n={fired:!1,wrapFn:void 0,target:a,type:e,listener:t},i=Xy.bind(n);return i.listener=t,n.wrapFn=i,i}st.prototype.once=function(e,t){return rl(t),this.on(e,wf(this,e,t)),this};st.prototype.prependOnceListener=function(e,t){return rl(t),this.prependListener(e,wf(this,e,t)),this};st.prototype.removeListener=function(e,t){var n,i,r,s,o;if(rl(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,r=s;break}if(r<0)return this;r===0?n.shift():jy(n,r),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,o||t)}return this};st.prototype.off=st.prototype.removeListener;st.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var r=Object.keys(n),s;for(i=0;i<r.length;++i)s=r[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function Sf(a,e,t){var n=a._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?qy(i):Ef(i,i.length)}st.prototype.listeners=function(e){return Sf(this,e,!0)};st.prototype.rawListeners=function(e){return Sf(this,e,!1)};st.listenerCount=function(a,e){return typeof a.listenerCount=="function"?a.listenerCount(e):Tf.call(a,e)};st.prototype.listenerCount=Tf;function Tf(a){var e=this._events;if(e!==void 0){var t=e[a];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}st.prototype.eventNames=function(){return this._eventsCount>0?Ea(this._events):[]};function Ef(a,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=a[n];return t}function jy(a,e){for(;e+1<a.length;e++)a[e]=a[e+1];a.pop()}function qy(a){for(var e=new Array(a.length),t=0;t<e.length;++t)e[t]=a[t].listener||a[t];return e}function Yy(a,e){return new Promise(function(t,n){function i(s){a.removeListener(e,r),n(s)}function r(){typeof a.removeListener=="function"&&a.removeListener("error",i),t([].slice.call(arguments))}Af(a,e,r,{once:!0}),e!=="error"&&$y(a,i,{once:!0})})}function $y(a,e,t){typeof a.on=="function"&&Af(a,"error",e,t)}function Af(a,e,t,n){if(typeof a.on=="function")n.once?a.once(e,t):a.on(e,t);else if(typeof a.addEventListener=="function")a.addEventListener(e,function i(r){n.once&&a.removeEventListener(e,i),t(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}class Ky extends $i.exports.EventEmitter{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.frustum=5,this.width<968?this.device="mobile":this.device="desktop",window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize"),this.width<968&&this.device!=="mobile"?(this.device="mobile",this.emit("switchdevice",this.device)):this.width>=968&&this.device!=="desktop"&&(this.device="desktop",this.emit("switchdevice",this.device))})}}class Zy extends $i.exports.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}class Jy extends kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ib(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new db(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=br.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ba(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={};if(typeof e=="string")r=e;else if(br.decodeText(new Uint8Array(e,0,4))===Lf){try{s[je.KHR_BINARY_GLTF]=new fb(e)}catch(h){i&&i(h);return}r=s[je.KHR_BINARY_GLTF].content}else r=br.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Eb(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:s[h]=new tb;break;case je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[h]=new gb;break;case je.KHR_DRACO_MESH_COMPRESSION:s[h]=new pb(l,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:s[h]=new mb;break;case je.KHR_MESH_QUANTIZATION:s[h]=new _b;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Qy(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class eb{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new eo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ry(u),c.distance=h;break;case"spot":c=new Ly(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class tb{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return mr}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}}class nb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ib{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}}class rb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,tt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class ob{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class ab{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new ze(o[0],o[1],o[2]),Promise.all(r)}}class lb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class cb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new ze(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,tt)),Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class hb{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class db{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,s.ready]).then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new ArrayBuffer(u*h),f=new Uint8Array(o[0],l,c);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})}else return null}}const Lf="glTF",js=12,Kh={JSON:1313821514,BIN:5130562};class fb{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js);if(this.header={magic:br.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-js,i=new DataView(e,js);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===Kh.JSON){const l=new Uint8Array(e,js+r,s);this.content=br.decodeText(l)}else if(o===Kh.BIN){const l=js+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=xc[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=xc[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=To[d.componentType];c[h]=f,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const g=d.attributes[f],p=l[f];p!==void 0&&(g.normalized=p)}h(d)},o,c)})})}}class mb{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _c extends _i{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new ze().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class gb{constructor(){this.name=je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return _c}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new ze(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const s=i.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,tt)),e.emissive=new ze(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ze(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const s=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",s)),r.push(n.assignTexture(e,"specularMap",s,tt))}return Promise.all(r)}createMaterial(e){const t=new _c(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Vc,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class _b{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Cf extends Vo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,p=g-c,m=-2*f+3*d,_=f-d,x=1-m,M=_-d+h;for(let b=0;b!==o;b++){const y=s[p+b+o],S=s[p+b+l]*u,A=s[g+b+o],v=s[g+b]*u;r[b]=x*y+M*S+m*A+_*v}return r}}const xb=new yi;class vb extends Cf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return xb.fromArray(r).normalize().toArray(r),r}}const li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zh={9728:Ot,9729:ln,9984:uc,9985:Yd,9986:hc,9987:Is},Jh={33071:En,33648:ka,10497:Ms},Qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yb={CUBICSPLINE:void 0,LINEAR:Ss,STEP:yo},Wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bb(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new _i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vs})),a.DefaultMaterial}function qs(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mb(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function wb(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sb(a){const e=a.extensions&&a.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ed(e.attributes):t=a.indices+":"+ed(a.attributes)+":"+a.mode,t}function ed(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function vc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tb(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Eb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qy,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new Ey(this.options.manager):this.textureLoader=new Iy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ba(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};qs(r,o,i),sr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(br.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=Qh[i.type],c=To[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(f&&f!==h){const _=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let M=t.cache.get(x);M||(p=new c(o,_*f,i.count*f/u),M=new ly(p,f/u),t.cache.add(x,M)),m=new Yc(M,l,d%f/u,g)}else o===null?p=new c(i.count*l):p=new c(o,d,i.count*l),m=new tn(p,l,g);if(i.sparse!==void 0){const _=Qh.SCALAR,x=To[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new x(s[1],M,i.sparse.count*_),S=new c(s[2],b,i.sparse.count*l);o!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,v=y.length;A<v;A++){const E=y[A];if(m.setX(E,S[A*l]),l>=2&&m.setY(E,S[A*l+1]),l>=3&&m.setZ(E,S[A*l+2]),l>=4&&m.setW(E,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,s.name&&(u.name=s.name);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=Zh[d.magFilter]||ln,u.minFilter=Zh[d.minFilter]||Is,u.wrapS=Jh[d.wrapS]||Ms,u.wrapT=Jh[d.wrapT]||Ms,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const m=new nn(p);m.needsUpdate=!0,d(m)}),t.load(br.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||Tb(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _f,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new gf,Zn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return _i}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,tt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ar);const u=r.alphaMode||Wl.OPAQUE;if(u===Wl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Wl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==mr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==mr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==mr&&(o.emissive=new ze().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==mr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,tt)),Promise.all(c).then(function(){let h;return s===_c?h=i[je.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new s(o),r.name&&(h.name=r.name),sr(h,r),t.associations.set(h,{materials:e}),r.extensions&&qs(i,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return td(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Sb(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=td(new Gn,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?bb(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const p=u[f],m=s[f];let _;const x=c[f];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new uy(p,x):new Qt(p,x),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?_.geometry=nd(_.geometry,Xm):m.mode===li.TRIANGLE_FAN&&(_.geometry=nd(_.geometry,Kd));else if(m.mode===li.LINES)_=new fy(p,x);else if(m.mode===li.LINE_STRIP)_=new Kc(p,x);else if(m.mode===li.LINE_LOOP)_=new py(p,x);else if(m.mode===li.POINTS)_=new my(p,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&wb(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),sr(_,r),m.extensions&&qs(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];const d=new Oi;t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(hg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],f=h.target,g=f.node!==void 0?f.node:f.id,p=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),s.push(this.getDependency("accessor",m)),o.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],f=c[3],g=c[4],p=[];for(let _=0,x=u.length;_<x;_++){const M=u[_],b=h[_],y=d[_],S=f[_],A=g[_];if(M===void 0)continue;M.updateMatrix(),M.matrixAutoUpdate=!0;let v;switch(Di[A.path]){case Di.weights:v=wo;break;case Di.rotation:v=Dr;break;case Di.position:case Di.scale:default:v=So;break}const E=M.name?M.name:M.uuid,F=S.interpolation!==void 0?yb[S.interpolation]:Ss,O=[];Di[A.path]===Di.weights?M.traverse(function(J){J.morphTargetInfluences&&O.push(J.name?J.name:J.uuid)}):O.push(E);let Y=y.array;if(y.normalized){const J=vc(Y.constructor),D=new Float32Array(Y.length);for(let G=0,U=Y.length;G<U;G++)D[G]=Y[G]*J;Y=D}for(let J=0,D=O.length;J<D;J++){const G=new v(O[J]+"."+Di[A.path],b.array,Y,F);S.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(N){const X=this instanceof Dr?vb:Cf;return new X(this.times,this.values,this.getValueSize()/3,N)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(G)}}const m=n.name?n.name:"animation_"+e;return new yy(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(r.isBone===!0?l=new mf:o.length>1?l=new Oi:o.length===1?l=o[0]:l=new xt,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(r.name&&(l.userData.name=r.name,l.name=s),sr(l,r),r.extensions&&qs(n,l,r),r.matrix!==void 0){const c=new et;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,s=new Oi;i.name&&(s.name=r.createUniqueName(i.name)),sr(s,i),i.extensions&&qs(n,s,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(Rf(o[c],s,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof Zn||d instanceof nn)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}}function Rf(a,e,t,n){const i=t.nodes[a];return n.getDependency("node",a).then(function(r){if(i.skin===void 0)return r;let s;return n.getDependency("skin",i.skin).then(function(o){s=o;const l=[];for(let c=0,u=s.joints.length;c<u;c++)l.push(n.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=o.length;h<d;h++){const f=o[h];if(f){c.push(f);const g=new et;s.inverseBindMatrices!==void 0&&g.fromArray(s.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[h])}l.bind(new $c(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const s=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];s.push(Rf(u,r,t,n))}}return Promise.all(s)})}function Ab(a,e,t){const n=e.attributes,i=new Os;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=vc(To[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const p=vc(To[d.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new Ns;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function td(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=xc[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return sr(a,e),Ab(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Mb(a,e.targets,t):a})}function nd(a,e){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Kd)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r}const Xl=new WeakMap;class Lb extends kr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Ba(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{const o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,o).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const c=t.attributeTypes[l];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=c.name)}const n=JSON.stringify(t);if(Xl.has(e)){const l=Xl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,o=this._getWorker(r,s).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Xl.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Gn;e.index&&t.setIndex(new tn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,o=i.itemSize;t.setAttribute(r,new tn(s,o))}return t}_loadLibrary(e,t){const n=new Ba(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Cb.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Cb(){let a,e;onmessage=function(s){const o=s.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(u){a.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder,f=new h.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(h,d,f,c),p=g.attributes.map(m=>m.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{h.destroy(f),h.destroy(d)}});break}};function t(s,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===s.TRIANGULAR_MESH)d=new s.Mesh,f=o.DecodeBufferToMesh(l,d);else if(g===s.POINT_CLOUD)d=new s.PointCloud,f=o.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const p={index:null,attributes:[]};for(const m in u){const _=self[h[m]];let x,M;if(c.useUniqueIDs)M=u[m],x=o.GetAttributeByUniqueId(d,M);else{if(M=o.GetAttributeId(d,s[u[m]]),M===-1)continue;x=o.GetAttribute(d,M)}p.attributes.push(i(s,o,d,m,_,x))}return g===s.TRIANGULAR_MESH&&(p.index=n(s,o,d)),s.destroy(d),p}function n(s,o,l){const u=l.num_faces()*3,h=u*4,d=s._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(s.HEAPF32.buffer,d,u).slice();return s._free(d),{array:f,itemSize:1}}function i(s,o,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,p=g*u.BYTES_PER_ELEMENT,m=r(s,u),_=s._malloc(p);o.GetAttributeDataArrayForAllPoints(l,h,m,p,_);const x=new u(s.HEAPF32.buffer,_,g).slice();return s._free(_),{name:c,array:x,itemSize:d}}function r(s,o){switch(o){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}class Rb extends $i.exports.EventEmitter{constructor(e){super(),this.experience=new vn,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new Jy,this.loaders.dracoLoader=new Lb,this.loaders.dracoLoader.setDecoderPath("draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader),this.loaders.cubeTextureLoader=new Ty}startLoading(){for(const e of this.assets)e.type==="glbModel"?this.loaders.gltfLoader.load(e.path,t=>{this.singleAssetLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.singleAssetLoaded(e,t)})}singleAssetLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.queue&&this.emit("ready")}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Jn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Jn.nextNameID=Jn.nextNameID||0,this.$name.id=`lil-gui-name-${++Jn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Pb extends Jn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function yc(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Db={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:yc,toHexString:yc},Eo={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Ib={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=Eo.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([a,e,t],n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Eo.toHexString(i)}},Fb={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=Eo.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:a,g:e,b:t},n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Eo.toHexString(i)}},Ob=[Db,Eo,Ib,Fb];function Nb(a){return Ob.find(e=>e.match(a))}class kb extends Jn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Nb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=yc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class jl extends Jn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class zb extends Jn{constructor(e,t,n,i,r,s){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},t=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},n=_=>{_.code==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),t(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),t(this._step*this._arrowKeyMultiplier(_)*-1))},i=_=>{this._inputFocused&&(_.preventDefault(),t(this._step*this._normalizeMouseWheel(_)))};let r=!1,s,o,l,c,u;const h=5,d=_=>{s=_.clientX,o=l=_.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",g)},f=_=>{if(r){const x=_.clientX-s,M=_.clientY-o;Math.abs(M)>h?(_.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>h&&g()}r||(u-=(_.clientY-l)*this._step*this._arrowKeyMultiplier(_),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)),l=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,x,M,b,y)=>(_-x)/(M-x)*(y-b)+b,t=_=>{const x=this.$slider.getBoundingClientRect();let M=e(_,x.left,x.right,this._min,this._max);this._snapClampSetValue(M)},n=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{t(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,o,l;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),s=!1},u=_=>{_.touches.length>1||(this._hasScrollBar?(o=_.touches[0].clientX,l=_.touches[0].clientY,s=!0):c(_),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=_=>{if(s){const x=_.touches[0].clientX-o,M=_.touches[0].clientY-l;Math.abs(x)>Math.abs(M)?c(_):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else _.preventDefault(),t(_.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let p;const m=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Bb extends Jn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Ub extends Jn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Vb=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Gb(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let id=!1;class eu{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!id&&s&&(Gb(Vb),id=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new Bb(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new zb(this,e,t,n,i,r);case"boolean":return new Pb(this,e,t);case"string":return new Ub(this,e,t);case"function":return new jl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new kb(this,e,t,n)}addFolder(e){return new eu({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof jl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof jl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class Hb{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new eu({container:document.querySelector(".debug")}))}}var Wb=[{name:"bike",type:"glbModel",path:"models/bike-model.glb"},{name:"environmentMapTexture",type:"cubeTexture",path:["textures/environmentMap/px.png","textures/environmentMap/nx.png","textures/environmentMap/py.png","textures/environmentMap/ny.png","textures/environmentMap/pz.png","textures/environmentMap/nz.png"]}];class Xb{constructor(){this.experience=new vn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("camera")),this.createPerspectiveCamera(),this.createOrthographicCamera()}createPerspectiveCamera(){this.perspectiveCamera=new Zt(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.y=.5,this.perspectiveCamera.position.z=4,this.perspectiveCamera.lookAt(0,.65,0),this.debug.active&&(this.debugFolder.add(this.perspectiveCamera.position,"x").name("camPosX").min(-30).max(30).step(.001),this.debugFolder.add(this.perspectiveCamera.position,"y").name("camPosY").min(-30).max(30).step(.001),this.debugFolder.add(this.perspectiveCamera.position,"z").name("camPosZ").min(-30).max(30).step(.001))}createOrthographicCamera(){this.orthographicCamera=new tl(-this.sizes.aspect*this.sizes.frustum/2,this.sizes.aspect*this.sizes.frustum/2,this.sizes.frustum/2,-this.sizes.frustum/2,-10,10),this.orthographicCamera.position.y=1.25,this.orthographicCamera.rotation.x=-Math.PI/24,this.scene.add(this.orthographicCamera)}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustum/2,this.orthographicCamera.top=this.sizes.frustum/2,this.orthographicCamera.bottom=-this.sizes.frustum/2,this.orthographicCamera.updateProjectionMatrix()}update(){}}class jb{constructor(){this.experience=new vn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new pf({canvas:this.canvas,antialias:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=tt,this.renderer.toneMapping=jd,this.renderer.toneMappingExposure=1.75,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gd,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.setViewport(0,0,this.sizes.width,this.sizes.height),this.renderer.render(this.scene,this.camera.perspectiveCamera)}}function ui(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Pf(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},As={duration:.5,overwrite:!1,delay:0},tu,Ln=1e8,at=1/Ln,bc=Math.PI*2,qb=bc/4,Yb=0,Df=Math.sqrt,$b=Math.cos,Kb=Math.sin,Pt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},bi=function(e){return typeof e=="number"},nu=function(e){return typeof e=="undefined"},Mi=function(e){return typeof e=="object"},un=function(e){return e!==!1},If=function(){return typeof window!="undefined"},da=function(e){return Rt(e)||Pt(e)},Ff=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Mc=/(?:-?\.?\d|\.)+/gi,Of=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nf=/[+-]=-?[.\d]+/,kf=/[^,'"\[\]\s]+/gi,Zb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,jn,wc,iu,yn={},Ua={},zf,Bf=function(e){return(Ua=Ir(e,yn))&&Vn},ru=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Va=function(e,t){return!t&&console.warn(e)},Uf=function(e,t){return e&&(yn[e]=t)&&Ua&&(Ua[e]=t)||yn},Ao=function(){return 0},su={},Gi=[],Sc={},Vf,mn={},Yl={},rd=30,Aa=[],ou="",au=function(e){var t=e[0],n,i;if(Mi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Aa.length;i--&&!Aa[i].targetTest(t););n=Aa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new cp(e[i],n)))||e.splice(i,1);return e},Mr=function(e){return e._gsap||au(Cn(e))[0]._gsap},Gf=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():nu(n)&&e.getAttribute&&e.getAttribute(t)||n},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Jb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ga=function(){var e=Gi.length,t=Gi.slice(0),n,i;for(Sc={},Gi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hf=function(e,t,n,i){Gi.length&&Ga(),e.render(t,n,i),Gi.length&&Ga()},Wf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kf).length<2?t:Pt(e)?e.trim():e},Xf=function(e){return e},Dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ir=function(e,t){for(var n in t)e[n]=t[n];return e},sd=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ha=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},lo=function(e){var t=e.parent||dt,n=e.keyframes?Qb(Ht(e.keyframes)):Dn;if(un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},wr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nM=function a(e){return!e||e._ts&&a(e.parent)},od=function(e){return e._repeat?Ls(e._tTime,e=e.duration()+e._rDelay)*e:0},Ls=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ol=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},lu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ol(e),n._dirty||wr(n,e)),e},qf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Wa(e.rawTime(),t),(!t._dur||Go(0,t.totalDuration(),n)-t._tTime>at)&&t.render(n,!0)),wr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-at}},$n=function(e,t,n,i){return t.parent&&xi(t),t._start=Ut((bi(n)?n:n||e!==dt?Mn(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jf(e,t,"_first","_last",e._sort?"_start":0),Tc(t)||(e._recent=t),i||qf(e,t),e},Yf=function(e,t){return(yn.ScrollTrigger||ru("scrollTrigger",t))&&yn.ScrollTrigger.create(t,e)},$f=function(e,t,n,i){if(uu(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vf!==gn.frame)return Gi.push(e),e._lazy=[t,i],1},iM=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Tc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rM=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&iM(e)&&!(!e._initted&&Tc(e))||(e._ts<0||e._dp._ts<0)&&!Tc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Go(0,e._tDur,t),u=Ls(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ls(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||i||e._zTime===at||!t&&e._zTime){if(!e._initted&&$f(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?at:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&xi(e,1),n||(Rn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Cs=function(e,t,n,i){var r=e._repeat,s=Ut(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Ut(s*(r+1)+e._rDelay*r):s,o>0&&!i?lu(e,e._tTime=e._tDur*o):e.parent&&ol(e),n||wr(e.parent,e),e},ad=function(e){return e instanceof cn?wr(e):Cs(e,e._dur)},oM={_start:0,endTime:Ao,totalDuration:Ao},Mn=function a(e,t,n){var i=e.labels,r=e._recent||oM,s=e.duration()>=Ln?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ht(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},co=function(e,t,n){var i=bi(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;s.immediateRender=un(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Ct(t[0],s,t[r+1])},Ki=function(e,t){return e||e===0?t(e):t},Go=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Pt(e)||!(t=Zb.exec(e))?"":t[1]},aM=function(e,t,n){return Ki(n,function(i){return Go(e,t,i)})},Ec=[].slice,Kf=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==jn},lM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Pt(i)&&!t||Kf(i,1)?(r=n).push.apply(r,Cn(i)):n.push(i)})||n},Cn=function(e,t,n){return Pt(e)&&!n&&(wc||!Rs())?Ec.call((t||iu).querySelectorAll(e),0):Ht(e)?lM(e,n):Kf(e)?Ec.call(e,0):e?[e]:[]},cM=function(e){return e=Cn(e)[0]||Va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Cn(t,n.querySelectorAll?n:n===e?Va("Invalid scope")||iu.createElement("div"):e)}},Zf=function(e){return e.sort(function(){return .5-Math.random()})},Jf=function(e){if(Rt(e))return e;var t=Mi(e)?e:{each:e},n=Sr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Pt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var p=(g||t).length,m=s[p],_,x,M,b,y,S,A,v,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!E){for(A=-Ln;A<(A=g[E++].getBoundingClientRect().left)&&E<p;);E--}for(m=s[p]=[],_=l?Math.min(E,p)*u-.5:i%E,x=E===Ln?0:l?p*h/E-.5:i/E|0,A=0,v=Ln,S=0;S<p;S++)M=S%E-_,b=x-(S/E|0),m[S]=y=c?Math.abs(c==="y"?b:M):Df(M*M+b*b),y>A&&(A=y),y<v&&(v=y);i==="random"&&Zf(m),m.max=A-v,m.min=v,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(E>p?p-1:c?c==="y"?p/E:E:Math.max(E,p/E))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=Vt(t.amount||t.each)||0,n=n&&p<0?op(n):n}return p=(m[d]-m.min)/m.max||0,Ut(m.b+(n?n(p):p)*m.v)+m.u}},Ac=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(bi(n)?0:Vt(n))}},Qf=function(e,t){var n=Ht(e),i,r;return!n&&Mi(e)&&(i=n=e.radius||Ln,e.values?(e=Cn(e.values),(r=!bi(e[0]))&&(i*=i)):e=Ac(e.increment)),Ki(t,n?Rt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Ln,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:s,r||u===s||bi(s)?u:u+Vt(s)}:Ac(e))},ep=function(e,t,n,i){return Ki(Ht(e)?!t:n===!0?!!(n=0):!i,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},uM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},hM=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},dM=function(e,t,n){return np(e,t,0,1,n)},tp=function(e,t,n){return Ki(n,function(i){return e[~~t(i)]})},fM=function a(e,t,n){var i=t-e;return Ht(e)?tp(e,a(0,e.length),t):Ki(n,function(r){return(i+(r-e)%i)%i+e})},pM=function a(e,t,n){var i=t-e,r=i*2;return Ht(e)?tp(e,a(0,e.length-1),t):Ki(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Lo=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?kf:Mc),n+=e.substr(t,i-t)+ep(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},np=function(e,t,n,i,r){var s=t-e,o=i-n;return Ki(r,function(l){return n+((l-e)/s*o||0)})},mM=function a(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var s=Pt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var p=Math.min(d,~~g);return u[p](g-p)},n=t}else i||(e=Ir(Ht(e)?[]:{},e));if(!u){for(l in t)cu.call(o,e,l,"get",t[l]);r=function(g){return fu(g,o)||(s?e.p:e)}}}return Ki(n,r)},ld=function(e,t,n){var i=e.labels,r=Ln,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Rn=function(e,t,n){var i=e.vars,r=i[t],s,o;if(!!r)return s=i[t+"Params"],o=i.callbackScope||e,n&&Gi.length&&Ga(),s?r.apply(o,s):r.call(o)},to=function(e){return xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Rn(e,"onInterrupt"),e},as,gM=function(e){e=!e.name&&e.default||e;var t=e.name,n=Rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ao,render:fu,add:cu,kill:DM,modifier:PM,rawVars:0},s={targetTest:0,get:0,getSetter:du,aliases:{},register:0};if(Rs(),e!==i){if(mn[t])return;Dn(i,Dn(Ha(e,r),s)),Ir(i.prototype,Ir(r,Ha(e,s))),mn[i.prop=t]=i,e.targetTest&&(Aa.push(i),su[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uf(t,i),e.register&&e.register(Vn,i,dn)},ot=255,no={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},$l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},ip=function(e,t,n){var i=e?bi(e)?[e>>16,e>>8&ot,e&ot]:0:no.black,r,s,o,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),no[e])i=no[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Mc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=$l(l+1/3,r,s),i[1]=$l(l,r,s),i[2]=$l(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(Of),n&&i.length<4&&(i[3]=1),i}else i=e.match(Mc)||no.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ot,s=i[1]/ot,o=i[2]/ot,h=Math.max(r,s,o),d=Math.min(r,s,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(s-o)/f+(s<o?6:0):h===s?(o-r)/f+2:(r-s)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rp=function(e){var t=[],n=[],i=-1;return e.split(Hi).forEach(function(r){var s=r.match(os)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},cd=function(e,t,n){var i="",r=(e+i).match(Hi),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=ip(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=rp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Hi,"1").split(os),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Hi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Hi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in no)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),_M=/hsl[a]?\(/,sp=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=_M.test(t),e[1]=cd(e[1],n),e[0]=cd(e[0],n,rp(e[1])),!0},Co,gn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,d,f,g=function p(m){var _=a()-i,x=m===!0,M,b,y,S;if(_>e&&(n+=_-t),i+=_,y=i-n,M=y-s,(M>0||x)&&(S=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,s+=M+(M>=r?4:r-M),b=1),x||(l=c(p)),b)for(f=0;f<o.length;f++)o[f](y,d,S,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){zf&&(!wc&&If()&&(jn=wc=window,iu=jn.document||{},yn.gsap=Vn,(jn.gsapVersions||(jn.gsapVersions=[])).push(Vn.version),Bf(Ua||jn.GreenSockGlobals||!jn.gsap&&jn||{}),u=jn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Co=1,g(2))},sleep:function(){(u?jn.cancelAnimationFrame:clearTimeout)(l),Co=0,c=Ao},lagSmoothing:function(m,_){e=m||1/at,t=Math.min(_,e,0)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,_,x){var M=_?function(b,y,S,A){m(b,y,S,A),h.remove(M)}:m;return h.remove(m),o[x?"unshift":"push"](M),Rs(),M},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},h}(),Rs=function(){return!Co&&gn.wake()},Ke={},xM=/^[\d.\-M][\d.\-,\s]/,vM=/["']/g,yM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(vM,"").trim():+c,i=l.substr(o+1).trim();return t},bM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},MM=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yM(t[1])]:bM(e).split(",").map(Wf)):Ke._CE&&xM.test(e)?Ke._CE("",e):n},op=function(e){return function(t){return 1-e(1-t)}},ap=function a(e,t){for(var n=e._first,i;n;)n instanceof cn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Sr=function(e,t){return e&&(Rt(e)?e:Ke[e]||MM(e))||t},zr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return hn(e,function(o){Ke[o]=yn[o]=r,Ke[s=o.toLowerCase()]=n;for(var l in r)Ke[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=r[l]}),r},lp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Kl=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/bc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Kb((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:lp(o);return r=bc/r,l.config=function(c,u){return a(e,c,u)},l},Zl=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:lp(n);return i.config=function(r){return a(e,r)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;zr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;zr("Elastic",Kl("in"),Kl("out"),Kl());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};zr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);zr("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});zr("Circ",function(a){return-(Df(1-a*a)-1)});zr("Sine",function(a){return a===1?1:-$b(a*qb)+1});zr("Back",Zl("in"),Zl("out"),Zl());Ke.SteppedEase=Ke.steps=yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-at;return function(o){return((i*Go(0,s,o)|0)+r)*n}}};As.ease=Ke["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ou+=a+","+a+"Params,"});var cp=function(e,t){this.id=Yb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gf,this.set=t?t.getSetter:du},Ro=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cs(this,+t.duration,1,1),this.data=t.data,Co||gn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Rs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(lu(this,n),!r._dp||r.parent||qf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===at||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+od(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+od(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ls(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-at?0:this._rts,this.totalTime(Go(-this._delay,this._tDur,i),!0),ol(this),tM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$n(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ad(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ad(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mn(this,n),un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,un(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-at)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Rt(n)?n:Xf,o=function(){var c=i.then;i.then=null,Rt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){to(this)},a}();Dn(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var cn=function(a){Pf(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=un(n.sortChildren),dt&&$n(n.parent||dt,ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Yf(ui(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return co(0,arguments,this),this},t.from=function(i,r,s){return co(1,arguments,this),this},t.fromTo=function(i,r,s,o){return co(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,lo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ct(i,r,Mn(this,s),1),this},t.call=function(i,r,s){return $n(this,Ct.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Ct(i,s,Mn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,lo(s).immediateRender=un(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,lo(o).immediateRender=un(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,p,m,_,x,M,b,y,S,A;if(this!==dt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,b=this._start,M=this._ts,_=!M,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(d=Ut(u%m),u===l?(p=this._repeat,d=c):(p=~~(u/m),p&&p===u/m&&(d=c,p--),d>c&&(d=c)),y=Ls(this._tTime,m),!o&&this._tTime&&y!==p&&(y=p),S&&p&1&&(d=c-d,A=1),p!==y&&!this._lock){var v=S&&y&1,E=v===(S&&p&1);if(p<y&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(A?0:Ut(p*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;ap(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sM(this,Ut(o),Ut(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&(Rn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,s),d!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=-at);break}}f=g}else{f=this._last;for(var F=i<0?i:d;f;){if(g=f._prev,(f._act||F<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(F-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(F-f._start)*f._ts,r,s),d!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=F?-at:at);break}}f=g}}if(x&&!r&&(this.pause(),x.render(d>=o?0:-at)._zTime=d>=o?1:-1,this._ts))return this._start=b,ol(this),this.render(i,r,s);this._onUpdate&&!r&&Rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(bi(r)||(r=Mn(this,r,i)),!(i instanceof Ro)){if(Ht(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Pt(i))return this.addLabel(i,r);if(Rt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?$n(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ct?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Pt(i)?this.removeLabel(i):Rt(i)?this.killTweensOf(i):(sl(this,i),i===this._recent&&(this._recent=this._last),wr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Mn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Ct.delayedCall(0,r||Ao,s);return o.data="isPause",this._hasPause=1,$n(this,o,Mn(this,i))},t.removePause=function(i){var r=this._first;for(i=Mn(this,i);r;)r._start===i&&r.data==="isPause"&&xi(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)Ni!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Cn(i),l=this._first,c=bi(r),u;l;)l instanceof Ct?Jb(l._targets,o)&&(c?(!Ni||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=Mn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Ct.to(s,Dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||at,onStart:function(){if(s.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&Cs(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Dn({startAt:{time:Mn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ld(this,Mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ld(this,Mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return wr(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return a.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Ln,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,$n(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Cs(s,s===dt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(dt._ts&&(Hf(dt,Wa(i,dt)),Vf=gn.frame),gn.frame>=rd){rd+=xn.autoSleep||120;var r=dt._first;if((!r||!r._ts)&&xn.autoSleep&&gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||gn.sleep()}}},e}(Ro);Dn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wM=function(e,t,n,i,r,s,o){var l=new dn(this._pt,e,t,0,1,mp,null,r),c=0,u=0,h,d,f,g,p,m,_,x;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Lo(i)),s&&(x=[n,i],s(x,e,t),n=x[0],i=x[1]),d=n.match(ql)||[];h=ql.exec(i);)g=h[0],p=i.substring(c,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?fs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Nf.test(i)||_)&&(l.e=0),this._pt=l,l},cu=function(e,t,n,i,r,s,o,l,c){Rt(i)&&(i=i(r||0,e,s));var u=e[t],h=n!=="get"?n:Rt(u)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Rt(u)?c?LM:fp:hu,f;if(Pt(i)&&(~i.indexOf("random(")&&(i=Lo(i)),i.charAt(1)==="="&&(f=fs(h,i)+(Vt(h)||0),(f||f===0)&&(i=f))),h!==i||Lc)return!isNaN(h*i)&&i!==""?(f=new dn(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?RM:pp,0,d),c&&(f.fp=c),o&&f.modifier(o,this,e),this._pt=f):(!u&&!(t in e)&&ru(t,i),wM.call(this,e,t,h,i,d,l||xn.stringFilter,c))},SM=function(e,t,n,i,r){if(Rt(e)&&(e=uo(e,r,t,n,i)),!Mi(e)||e.style&&e.nodeType||Ht(e)||Ff(e))return Pt(e)?uo(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=uo(e[o],r,t,n,i);return s},up=function(e,t,n,i,r,s){var o,l,c,u;if(mn[e]&&(o=new mn[e]).init(r,o.rawVars?t[e]:SM(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new dn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ni,Lc,uu=function a(e,t){var n=e.vars,i=n.ease,r=n.startAt,s=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,g=n.autoRevert,p=e._dur,m=e._startAt,_=e._targets,x=e.parent,M=x&&x.data==="nested"?x.parent._targets:_,b=e._overwrite==="auto"&&!tu,y=e.timeline,S,A,v,E,F,O,Y,J,D,G,U,N,X;if(y&&(!f||!i)&&(i="none"),e._ease=Sr(i,As.ease),e._yEase=d?op(Sr(d===!0?i:d,As.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!n.runBackwards,!y||f&&!n.stagger){if(J=_[0]?Mr(_[0]).harness:0,N=J&&n[J.prop],S=Ha(n,su),m&&(xi(m.render(-1,!0)),m._lazy=0),r)if(xi(e._startAt=Ct.set(_,Dn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:un(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&!s&&!g&&e._startAt.render(-1,!0),s){if(t>0&&!g&&(e._startAt=0),p&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&p){if(m)!g&&(e._startAt=0);else if(t&&(s=!1),v=Dn({overwrite:!1,data:"isFromStart",lazy:s&&un(o),immediateRender:s,stagger:0,parent:x},S),N&&(v[J.prop]=N),xi(e._startAt=Ct.set(_,v)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!s)a(e._startAt,at);else if(!t)return}for(e._pt=e._ptCache=0,o=p&&un(o)||o&&!p,A=0;A<_.length;A++){if(F=_[A],Y=F._gsap||au(_)[A]._gsap,e._ptLookup[A]=G={},Sc[Y.id]&&Gi.length&&Ga(),U=M===_?A:M.indexOf(F),J&&(D=new J).init(F,N||S,e,U,M)!==!1&&(e._pt=E=new dn(e._pt,F,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(z){G[z]=E}),D.priority&&(O=1)),!J||N)for(v in S)mn[v]&&(D=up(v,S,e,U,F,M))?D.priority&&(O=1):G[v]=E=cu.call(e,F,v,"get",S[v],U,M,0,n.stringFilter);e._op&&e._op[A]&&e.kill(F,e._op[A]),b&&e._pt&&(Ni=e,dt.killTweensOf(F,G,e.globalTime(t)),X=!e.parent,Ni=0),e._pt&&o&&(Sc[Y.id]=1)}O&&gp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(Ln,!0,!0)},TM=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(c=u[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t;)c=c._next;if(!c)return Lc=1,e.vars[t]="+=0",uu(e,o),Lc=0,1;l.push(c)}for(h=l.length;h--;)c=l[h],c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,c.e&&(c.e=_t(n)+Vt(c.e)),c.b&&(c.b=c.s+Vt(c.b))},EM=function(e,t){var n=e[0]?Mr(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Ir({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},AM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Ht(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},uo=function(e,t,n,i,r){return Rt(e)?e.call(t,n,i,r):Pt(e)&&~e.indexOf("random(")?Lo(e):e},hp=ou+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dp={};hn(hp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return dp[a]=1});var Ct=function(a){Pf(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:lo(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,x=i.parent||dt,M=(Ht(n)||Ff(n)?bi(n[0]):"length"in i)?[n]:Cn(n),b,y,S,A,v,E,F,O;if(o._targets=M.length?au(M):Va("GSAP target "+n+" not found. https://greensock.com",!xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||da(c)||da(u)){if(i=o.vars,b=o.timeline=new cn({data:"nested",defaults:p||{}}),b.kill(),b.parent=b._dp=ui(o),b._start=0,d||da(c)||da(u)){if(A=M.length,F=d&&Jf(d),Mi(d))for(v in d)~hp.indexOf(v)&&(O||(O={}),O[v]=d[v]);for(y=0;y<A;y++)S=Ha(i,dp),S.stagger=0,_&&(S.yoyoEase=_),O&&Ir(S,O),E=M[y],S.duration=+uo(c,ui(o),y,E,M),S.delay=(+uo(u,ui(o),y,E,M)||0)-o._delay,!d&&A===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),b.to(E,S,F?F(y,E,M):0),b._ease=Ke.none;b.duration()?c=u=0:o.timeline=0}else if(g){lo(Dn(b.vars.defaults,{ease:"none"})),b._ease=Sr(g.ease||i.ease||"none");var Y=0,J,D,G;if(Ht(g))g.forEach(function(U){return b.to(M,U,">")});else{S={};for(v in g)v==="ease"||v==="easeEach"||AM(v,g[v],S,g.easeEach);for(v in S)for(J=S[v].sort(function(U,N){return U.t-N.t}),Y=0,y=0;y<J.length;y++)D=J[y],G={ease:D.e,duration:(D.t-(y?J[y-1].t:0))/100*c},G[v]=D.v,b.to(M,G,Y),Y+=G.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!tu&&(Ni=ui(o),dt.killTweensOf(M),Ni=0),$n(x,ui(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ut(x._time)&&un(h)&&nM(ui(o))&&x.data!=="nested")&&(o._tTime=-at,o.render(Math.max(0,-u))),m&&Yf(ui(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i>l-at&&i>=0?l:i<at?0:i,h,d,f,g,p,m,_,x,M;if(!c)rM(this,i,r,s);else if(u!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,s);if(h=Ut(u%g),u===l?(f=this._repeat,h=c):(f=~~(u/g),f&&f===u/g&&(h=c,f--),h>c&&(h=c)),m=this._yoyo&&f&1,m&&(M=this._yEase,h=c-h),p=Ls(this._tTime,g),h===o&&!s&&this._initted)return this._tTime=u,this;f!==p&&(x&&this._yEase&&ap(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=s=1,this.render(Ut(g*f),!0).invalidate()._lock=0))}if(!this._initted){if($f(this,i<0?i:h,s,r))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(M||this._ease)(h/c),this._from&&(this.ratio=_=1-_),h&&!o&&!r&&(Rn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(_,d.d),d=d._next;x&&x.render(i<0?i:!h&&m?-at:x._dur*x._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,s),Rn(this,"onUpdate")),this._repeat&&f!==p&&this.vars.onRepeat&&!r&&this.parent&&Rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&xi(this,1),!r&&!(i<0&&!o)&&(u||o)&&(Rn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),a.prototype.invalidate.call(this)},t.resetTo=function(i,r,s,o){Co||gn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||uu(this,l),c=this._ease(l/this._dur),TM(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(lu(this,0),this.parent||jf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?to(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ni&&Ni.vars.overwrite!==!0)._first||to(this),this.parent&&s!==this.timeline.totalDuration()&&Cs(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Cn(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,p,m,_;if((!r||r==="all")&&eM(o,l))return r==="all"&&(this._pt=0),to(this);for(h=this._op=this._op||[],r!=="all"&&(Pt(r)&&(p={},hn(r,function(x){return p[x]=1}),r=p),r=EM(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){d=c[_],r==="all"?(h[_]=r,g=d,f={}):(f=h[_]=h[_]||{},g=r);for(p in g)m=d&&d[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&sl(this,m,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&to(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return co(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return co(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return dt.killTweensOf(i,r,s)},e}(Ro);Dn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(a){Ct[a]=function(){var e=new cn,t=Ec.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var hu=function(e,t,n){return e[t]=n},fp=function(e,t,n){return e[t](n)},LM=function(e,t,n,i){return e[t](i.fp,n)},CM=function(e,t,n){return e.setAttribute(t,n)},du=function(e,t){return Rt(e[t])?fp:nu(e[t])&&e.setAttribute?CM:hu},pp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},RM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},fu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},PM=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},DM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},IM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},gp=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},dn=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||pp,this.d=l||this,this.set=c||hu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=IM,this.m=n,this.mt=r,this.tween=i},a}();hn(ou+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return su[a]=1});yn.TweenMax=yn.TweenLite=Ct;yn.TimelineLite=yn.TimelineMax=cn;dt=new cn({sortChildren:!1,defaults:As,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=sp;var Xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return gM(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=Cn(e)[0]);var r=Mr(e||{}).get,s=n?Xf:Wf;return n==="native"&&(n=""),e&&(t?s((mn[t]&&mn[t].get||r)(e,t,n,i)):function(o,l,c){return s((mn[o]&&mn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Cn(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=mn[t],o=Mr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;as._pt=0,h.init(e,n?u+n:u,as,0,[e]),h.render(1,h),as._pt&&fu(1,as)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Vn.to(e,Ir((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Sr(e.ease,As.ease)),sd(As,e||{})},config:function(e){return sd(xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!mn[o]&&!yn[o]&&Va(t+" effect requires "+o+" plugin.")}),Yl[t]=function(o,l,c){return n(Cn(o),Dn(l||{},r),c)},s&&(cn.prototype[t]=function(o,l,c){return this.add(Yl[t](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Sr(t)},parseEase:function(e,t){return arguments.length?Sr(e,t):Ke},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,r;for(n.smoothChildTiming=un(e.smoothChildTiming),dt.remove(n),n._dp=0,n._time=n._tTime=dt._time,i=dt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&$n(n,i,i._start-i._delay),i=r;return $n(dt,n,0),n},utils:{wrap:fM,wrapYoyo:pM,distribute:Jf,random:ep,snap:Qf,normalize:dM,getUnit:Vt,clamp:aM,splitColor:ip,toArray:Cn,selector:cM,mapRange:np,pipe:uM,unitize:hM,interpolate:mM,shuffle:Zf},install:Bf,effects:Yl,ticker:gn,updateRoot:cn.updateRoot,plugins:mn,globalTimeline:dt,core:{PropTween:dn,globals:Uf,Tween:Ct,Timeline:cn,Animation:Ro,getCache:Mr,_removeLinkedListItem:sl,suppressOverwrites:function(e){return tu=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Xa[a]=Ct[a]});gn.add(cn.updateRoot);as=Xa.to({},{duration:0});var FM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OM=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=FM(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Jl=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Pt(r)&&(l={},hn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}OM(o,r)}}}},Vn=Xa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o;for(s in t)o=this.add(e,"setAttribute",(e.getAttribute(s)||0)+"",t[s],i,r,0,0,s),o&&(o.op=s),this._props.push(s)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},Jl("roundProps",Ac),Jl("modifiers"),Jl("snap",Qf))||Xa;Ct.version=cn.version=Vn.version="3.10.4";zf=1;If()&&Rs();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ud,ki,ps,pu,gr,hd,NM=function(){return typeof window!="undefined"},Xi={},or=180/Math.PI,ms=Math.PI/180,es=Math.atan2,dd=1e8,_p=/([A-Z])/g,kM=/(left|right|width|margin|padding|x)/i,zM=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},BM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},GM=function(e,t,n){return e.style[t]=n},HM=function(e,t,n){return e.style.setProperty(t,n)},WM=function(e,t,n){return e._gsap[t]=n},XM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jM=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},qM=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},Nt="transform",ji=Nt+"Origin",bp,Cc=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n.style?n:ki.createElement(e)},vi=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(_p,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Ps(t)||t,1)||""},fd="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,t,n){var i=t||gr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(fd[s]+e in r););return s<0?null:(s===3?"ms":s>=0?fd[s]:"")+e},Rc=function(){NM()&&window.document&&(ud=window,ki=ud.document,ps=ki.documentElement,gr=Cc("div")||{style:{}},Cc("div"),Nt=Ps(Nt),ji=Nt+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bp=!!Ps("perspective"),pu=1)},Ql=function a(e){var t=Cc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ps.removeChild(t),this.style.cssText=r,s},pd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Mp=function(e){var t;try{t=e.getBBox()}catch{t=Ql.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ql||(t=Ql.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+pd(e,["x","cx","x1"])||0,y:+pd(e,["y","cy","y1"])||0,width:0,height:0}:t},wp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mp(e))},Po=function(e,t){if(t){var n=e.style;t in Xi&&t!==ji&&(t=Nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(_p,"-$1").toLowerCase())):n.removeAttribute(t)}},Bi=function(e,t,n,i,r,s){var o=new dn(e._pt,t,n,0,1,s?yp:vp);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},md={deg:1,rad:1,turn:1},qi=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=gr.style,l=kM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,p,m,_;return i===s||!r||md[i]||md[s]?r:(s!=="px"&&!d&&(r=a(e,t,n,"px")),_=e.getCTM&&wp(e),(f||s==="%")&&(Xi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],_t(f?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(d?s:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ki||!p.appendChild)&&(p=ki.body),m=p._gsap,m&&f&&m.width&&l&&m.time===gn.time?_t(r/m.width*h):((f||s==="%")&&(o.position=vi(e,"position")),p===e&&(o.position="static"),p.appendChild(gr),g=gr[u],p.removeChild(gr),o.position="absolute",l&&f&&(m=Mr(p),m.time=gn.time,m.width=p[u]),_t(d?g*r/h:g&&r?h/g*r:0))))},ar=function(e,t,n,i){var r;return pu||Rc(),t in zi&&t!=="transform"&&(t=zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(r=Io(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:qa(vi(e,ji))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ja[t]&&ja[t](e,t,n)||vi(e,t)||Gf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qi(e,t,r,n)+n:r},YM=function(e,t,n,i){if(!n||n==="none"){var r=Ps(t,e,1),s=r&&vi(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=vi(e,"borderTopColor"))}var o=new dn(this._pt,e.style,t,0,1,mp),l=0,c=0,u,h,d,f,g,p,m,_,x,M,b,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=vi(e,t)||i,e.style[t]=n),u=[n,i],sp(u),n=u[0],i=u[1],d=n.match(os)||[],y=i.match(os)||[],y.length){for(;h=os.exec(i);)m=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(p=d[c++]||"")&&(f=parseFloat(p)||0,b=p.substr((f+"").length),m.charAt(1)==="="&&(m=fs(f,m)+b),_=parseFloat(m),M=m.substr((_+"").length),l=os.lastIndex-M.length,M||(M=M||xn.units[t]||b,l===i.length&&(i+=M,o.e+=M)),b!==M&&(f=qi(e,t,p,M)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?yp:vp;return Nf.test(i)&&(o.e=0),this._pt=o,o},gd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$M=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=gd[n]||n,t[1]=gd[i]||i,t.join(" ")},KM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Xi[o]&&(l=1,o=o==="transformOrigin"?ji:Nt),Po(n,o);l&&(Po(n,Nt),s&&(s.svg&&n.removeAttribute("transform"),Io(n,1),s.uncache=1))}},ja={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new dn(e._pt,t,n,0,0,KM);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Do=[1,0,0,1,0,0],Sp={},Tp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_d=function(e){var t=vi(e,Nt);return Tp(t)?Do:t.substr(7).match(Of).map(_t)},mu=function(e,t){var n=e._gsap||Mr(e),i=e.style,r=_d(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Do:r):(r===Do&&!e.offsetParent&&e!==ps&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextSibling,ps.appendChild(e)),r=_d(e),l?i.display=l:Po(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):ps.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Pc=function(e,t,n,i,r,s){var o=e._gsap,l=r||mu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],p=l[2],m=l[3],_=l[4],x=l[5],M=t.split(" "),b=parseFloat(M[0])||0,y=parseFloat(M[1])||0,S,A,v,E;n?l!==Do&&(A=f*m-g*p)&&(v=b*(m/A)+y*(-p/A)+(p*x-m*_)/A,E=b*(-g/A)+y*(f/A)-(f*x-g*_)/A,b=v,y=E):(S=Mp(e),b=S.x+(~M[0].indexOf("%")?b/100*S.width:b),y=S.y+(~(M[1]||M[0]).indexOf("%")?y/100*S.height:y)),i||i!==!1&&o.smooth?(_=b-c,x=y-u,o.xOffset=h+(_*f+x*p)-_,o.yOffset=d+(_*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ji]="0px 0px",s&&(Bi(s,o,"xOrigin",c,b),Bi(s,o,"yOrigin",u,y),Bi(s,o,"xOffset",h,o.xOffset),Bi(s,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},Io=function(e,t){var n=e._gsap||new cp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=vi(e,ji)||"0",c,u,h,d,f,g,p,m,_,x,M,b,y,S,A,v,E,F,O,Y,J,D,G,U,N,X,z,C,ne,re,ie,fe;return c=u=h=g=p=m=_=x=M=0,d=f=1,n.svg=!!(e.getCTM&&wp(e)),S=mu(e,n.svg),n.svg&&(U=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Pc(e,U||l,!!U||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,y=n.yOrigin||0,S!==Do&&(F=S[0],O=S[1],Y=S[2],J=S[3],c=D=S[4],u=G=S[5],S.length===6?(d=Math.sqrt(F*F+O*O),f=Math.sqrt(J*J+Y*Y),g=F||O?es(O,F)*or:0,_=Y||J?es(Y,J)*or+g:0,_&&(f*=Math.abs(Math.cos(_*ms))),n.svg&&(c-=b-(b*F+y*Y),u-=y-(b*O+y*J))):(fe=S[6],re=S[7],z=S[8],C=S[9],ne=S[10],ie=S[11],c=S[12],u=S[13],h=S[14],A=es(fe,ne),p=A*or,A&&(v=Math.cos(-A),E=Math.sin(-A),U=D*v+z*E,N=G*v+C*E,X=fe*v+ne*E,z=D*-E+z*v,C=G*-E+C*v,ne=fe*-E+ne*v,ie=re*-E+ie*v,D=U,G=N,fe=X),A=es(-Y,ne),m=A*or,A&&(v=Math.cos(-A),E=Math.sin(-A),U=F*v-z*E,N=O*v-C*E,X=Y*v-ne*E,ie=J*E+ie*v,F=U,O=N,Y=X),A=es(O,F),g=A*or,A&&(v=Math.cos(A),E=Math.sin(A),U=F*v+O*E,N=D*v+G*E,O=O*v-F*E,G=G*v-D*E,F=U,D=N),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=_t(Math.sqrt(F*F+O*O+Y*Y)),f=_t(Math.sqrt(G*G+fe*fe)),A=es(D,G),_=Math.abs(A)>2e-4?A*or:0,M=ie?1/(ie<0?-ie:ie):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Tp(vi(e,Nt)),U&&e.setAttribute("transform",U))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(d*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(f*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=_t(d),n.scaleY=_t(f),n.rotation=_t(g)+o,n.rotationX=_t(p)+o,n.rotationY=_t(m)+o,n.skewX=_+o,n.skewY=x+o,n.transformPerspective=M+s,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[ji]=qa(l)),n.xOffset=n.yOffset=0,n.force3D=xn.force3D,n.renderTransform=n.svg?JM:bp?Ep:ZM,n.uncache=0,n},qa=function(e){return(e=e.split(" "))[0]+" "+e[1]},ec=function(e,t,n){var i=Vt(t);return _t(parseFloat(t)+parseFloat(qi(e,"x",n+"px",i)))+i},ZM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ep(e,t)},tr="0deg",Ys="0px",nr=") ",Ep=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,x=n.target,M=n.zOrigin,b="",y=_==="auto"&&e&&e!==1||_===!0;if(M&&(h!==tr||u!==tr)){var S=parseFloat(u)*ms,A=Math.sin(S),v=Math.cos(S),E;S=parseFloat(h)*ms,E=Math.cos(S),s=ec(x,s,A*E*-M),o=ec(x,o,-Math.sin(S)*-M),l=ec(x,l,v*E*-M+M)}m!==Ys&&(b+="perspective("+m+nr),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(y||s!==Ys||o!==Ys||l!==Ys)&&(b+=l!==Ys||y?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+nr),c!==tr&&(b+="rotate("+c+nr),u!==tr&&(b+="rotateY("+u+nr),h!==tr&&(b+="rotateX("+h+nr),(d!==tr||f!==tr)&&(b+="skew("+d+", "+f+nr),(g!==1||p!==1)&&(b+="scale("+g+", "+p+nr),x.style[Nt]=b||"translate(0, 0)"},JM=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,x=n.forceCSS,M=parseFloat(s),b=parseFloat(o),y,S,A,v,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ms,c*=ms,y=Math.cos(l)*h,S=Math.sin(l)*h,A=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(u*=ms,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,v*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),y*=E,S*=E)),y=_t(y),S=_t(S),A=_t(A),v=_t(v)):(y=h,v=d,S=A=0),(M&&!~(s+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(M=qi(f,"x",s,"px"),b=qi(f,"y",o,"px")),(g||p||m||_)&&(M=_t(M+g-(g*y+p*A)+m),b=_t(b+p-(g*S+p*v)+_)),(i||r)&&(E=f.getBBox(),M=_t(M+i/100*E.width),b=_t(b+r/100*E.height)),E="matrix("+y+","+S+","+A+","+v+","+M+","+b+")",f.setAttribute("transform",E),x&&(f.style[Nt]=E)},QM=function(e,t,n,i,r){var s=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?or:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*dd)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*dd)%s-~~(c/s)*s)),e._pt=d=new dn(e._pt,t,n,i,c,BM),d.e=u,d.u="deg",e._props.push(n),d},xd=function(e,t){for(var n in t)e[n]=t[n];return e},ew=function(e,t,n){var i=xd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Nt]=t,o=Io(n,1),Po(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],s[Nt]=t,o=Io(n,1),s[Nt]=c);for(l in Xi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Vt(c),g=Vt(u),h=f!==g?qi(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new dn(e._pt,o,l,h,d-h,xp),e._pt.u=g||0,e._props.push(l));xd(o,i)};hn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});ja[e>1?"border"+a:a]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=s.map(function(g){return ar(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},s.forEach(function(g,p){return f[g]=d[p]=d[p]||d[(p-1)/2|0]}),o.init(l,f,h)}});var Ap={name:"css",register:Rc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,p,m,_,x,M,b,y,S,A;pu||Rc();for(p in t)if(p!=="autoRound"&&(u=t[p],!(mn[p]&&up(p,t,n,i,e,r)))){if(f=typeof u,g=ja[p],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Lo(u)),g)g(this,e,p,u,n)&&(A=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(m=Vt(c),_=Vt(u)),_?m!==_&&(c=qi(e,p,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,p),s.push(p);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],Pt(c)&&~c.indexOf("random(")&&(c=Lo(c)),Vt(c+"")||(c+=xn.units[p]||Vt(ar(e,p))||""),(c+"").charAt(1)==="="&&(c=ar(e,p))):c=ar(e,p),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),p in zi&&(p==="autoAlpha"&&(d===1&&ar(e,"visibility")==="hidden"&&h&&(d=0),Bi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=zi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),M=p in Xi,M){if(b||(y=e._gsap,y.renderTransform&&!t.parseTransform||Io(e,t.parseTransform),S=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new dn(this._pt,o,Nt,0,1,y.renderTransform,y,0,-1),b.dep=1),p==="scale")this._pt=new dn(this._pt,y,"scaleY",y.scaleY,(x?fs(y.scaleY,x+h):h)-y.scaleY||0),s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){u=$M(u),y.svg?Pc(e,u,0,S,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&Bi(this,y,"zOrigin",y.zOrigin,_),Bi(this,o,p,qa(c),qa(u)));continue}else if(p==="svgOrigin"){Pc(e,u,1,S,0,this);continue}else if(p in Sp){QM(this,y,p,d,x?fs(d,x+u):u);continue}else if(p==="smoothOrigin"){Bi(this,y,"smooth",y.smooth,u);continue}else if(p==="force3D"){y[p]=u;continue}else if(p==="transform"){ew(this,u,e);continue}}else p in o||(p=Ps(p)||p);if(M||(h||h===0)&&(d||d===0)&&!zM.test(u)&&p in o)m=(c+"").substr((d+"").length),h||(h=0),_=Vt(u)||(p in xn.units?xn.units[p]:m),m!==_&&(d=qi(e,p,c,_)),this._pt=new dn(this._pt,M?y:o,p,d,(x?fs(d,x+h):h)-d,!M&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?VM:xp),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=UM);else if(p in o)YM.call(this,e,p,c,x?x+u:u);else if(p in e)this.add(e,p,c||e[p],x?x+u:u,i,r);else{ru(p,u);continue}s.push(p)}}A&&gp(this)},get:ar,aliases:zi,getSetter:function(e,t,n){var i=zi[t];return i&&i.indexOf(",")<0&&(t=i),t in Xi&&t!==ji&&(e._gsap.x||ar(e,"x"))?n&&hd===n?t==="scale"?XM:WM:(hd=n||{})&&(t==="scale"?jM:qM):e.style&&!nu(e.style[t])?GM:~t.indexOf("-")?HM:du(e,t)},core:{_removeProperty:Po,_getMatrix:mu}};Vn.utils.checkPrefix=Ps;(function(a,e,t,n){var i=hn(a+","+e+","+t,function(r){Xi[r]=1});hn(e,function(r){xn.units[r]="deg",Sp[r]=1}),zi[i[13]]=a+","+e,hn(n,function(r){var s=r.split(":");zi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){xn.units[a]="px"});Vn.registerPlugin(Ap);var ut=Vn.registerPlugin(Ap)||Vn;ut.core.Tween;function $s(a){return a.style.overflow="hidden",a.innerHTML=a.innerText.split("").map(e=>e===" "?`<span>${e}</span>`:`<span class="animatethis">${e}</span>`).join(""),a}class tw extends $i.exports.EventEmitter{constructor(){super(),this.experience=new vn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.world=this.experience.world,this.device=this.sizes.device,this.sizes.on("switchdevice",e=>{this.device=e}),this.world.on("worldready",()=>{this.setAssets(),this.playIntro()})}setAssets(){$s(document.querySelector(".intro-text")),$s(document.querySelector(".hero-main-title")),$s(document.querySelector(".hero-main-description")),$s(document.querySelector(".hero-second-subheading")),$s(document.querySelector(".second-sub")),this.group=this.experience.world.bike.group,this.actualBike=this.experience.world.bike.actualBike,this.bikeChildren=this.experience.world.bike.bikeChildren}firstIntro(){return new Promise(e=>{this.timeline=new ut.timeline,this.timeline.set(".animatethis",{y:0,yPercent:100}),this.timeline.to(".preloader",{opacity:0,delay:1,onComplete:()=>{document.querySelector(".preloader").classList.add("hidden")}}),this.device==="desktop"?this.timeline.to(this.actualBike.scale,{x:.5,y:.5,z:.5,ease:"back.out(1.5)",duration:.7}):this.timeline.to(this.actualBike.scale,{x:.175,y:.175,z:.175,ease:"back.out(2.5)",duration:.7},"same").to(this.camera.perspectiveCamera.position,{y:.1},"same"),this.timeline.to(".intro-text .animatethis",{yPercent:0,stagger:.04,ease:"back.out(1.5)",onComplete:e}).to(".arrow-svg-wrapper",{opacity:1},"fadein").to(".navbar",{opacity:1,onComplete:e},"fadein")})}secondIntro(){return new Promise(e=>{this.secondTimeline=new ut.timeline,this.secondTimeline.to(".intro-text .animatethis",{yPercent:100,stagger:.04,ease:"back.in(1.5)"},"fadeout").to(".arrow-svg-wrapper",{opacity:0},"fadeout"),this.device==="desktop"?this.secondTimeline.to(this.actualBike.scale,{x:.65,y:.65,z:.65,stagger:2,ease:"power1.out"},"introtext"):this.secondTimeline.to(this.actualBike.scale,{x:.5,y:.5,z:.5,stagger:1,ease:"power1.out"},"introtext").to(this.actualBike.rotation,{y:-Math.PI*.5},"introtext").to(this.camera.perspectiveCamera.position,{y:.4},"introtext"),this.secondTimeline.to(this.bikeChildren.boxface1.rotation,{x:0,y:0,z:-Math.PI,duration:2},"introtext").to(this.bikeChildren.boxface2.rotation,{x:-Math.PI,y:0,z:0,duration:2},"introtext").to(this.bikeChildren.boxface3.rotation,{x:Math.PI,y:0,z:0,duration:2},"introtext").to(this.bikeChildren.boxface4.rotation,{x:0,y:0,z:Math.PI,duration:2},"introtext").to(".hero-main-title .animatethis",{yPercent:0,stagger:.02,ease:"back.out(1.5)"},"introtext").to(".hero-main-description .animatethis",{yPercent:0,stagger:.02,ease:"back.out(1.5)"},"introtext").to(".first-sub .animatethis",{yPercent:0,stagger:.02,ease:"back.out(1.5)"},"introtext").to(".second-sub .animatethis",{yPercent:0,stagger:.02,ease:"back.out(1.5)"},"introtext").to(".arrow-svg-wrapper",{opacity:1,onComplete:e})})}onScroll(e){e.deltaY>0&&(this.removeEventListeners(),this.playSecondIntro())}onTouch(e){this.initialY=e.touches[0].clientY}onTouchMove(e){let t=e.touches[0].clientY;this.initialY-t>0&&(console.log("swipped up"),this.removeEventListeners(),this.playSecondIntro()),this.initialY=null}removeEventListeners(){window.removeEventListener("wheel",this.scrollOnceEvent),window.removeEventListener("touchstart",this.touchStart),window.removeEventListener("touchmove",this.touchMove)}async playIntro(){await this.firstIntro(),this.moveFlag=!0,this.scrollOnceEvent=this.onScroll.bind(this),this.touchStart=this.onTouch.bind(this),this.touchMove=this.onTouchMove.bind(this),window.addEventListener("wheel",this.scrollOnceEvent),window.addEventListener("touchstart",this.touchStart),window.addEventListener("touchmove",this.touchMove)}async playSecondIntro(){this.moveFlag=!1,this.scaleFlag=!0,await this.secondIntro(),this.scaleFlag=!1,this.emit("enableControls")}move(){this.device==="desktop"?this.group.position.set(0,0,0):this.group.position.set(0,0,0)}scale(){this.device==="desktop"?this.group.scale.set(1,1,1):this.group.scale.set(1,1,1)}update(){this.moveFlag&&this.move(),this.scaleFlag&&this.scale()}}class nw extends $i.exports.EventEmitter{constructor(){super(),this.theme="dark",this.toggleButton=document.querySelector(".toggle-button"),this.toggleCircle=document.querySelector(".toggle-circle"),this.setEventListeners()}setEventListeners(){this.toggleButton.addEventListener("click",()=>{this.toggleCircle.classList.toggle("slide"),this.theme=this.theme==="dark"?"light":"dark",document.body.classList.toggle("dark-theme"),document.body.classList.toggle("light-theme"),this.emit("switch",this.theme)})}}class iw{constructor(){this.experience=new vn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("environment"),this.obj={colorObj:{r:0,g:0,b:0}}),this.setBackground(),this.setLights(),this.setEnvironmentMap()}setBackground(){this.bgColor=2236962,this.scene.background=new ze(this.bgColor),this.scene.fog=new qc(this.bgColor,5,20)}setLights(){this.sunLight=new eo("#222222",.2),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(3,7,3),this.scene.add(this.sunLight),this.ambientLight=new Dy("#222222",.2),this.scene.add(this.ambientLight);const e=16777215,t=1,n=new xt;n.position.set(0,.5,0),this.scene.add(n),this.directionalLight=new eo(e,t),this.directionalLight.position.set(0,1.5,3),this.directionalLight.target=n,this.scene.add(this.directionalLight),this.directionalLight2=new eo(e,t),this.directionalLight2.position.set(-2,2,3),this.directionalLight2.target=n,this.scene.add(this.directionalLight2),this.directionalLight3=new eo(e,t),this.directionalLight3.position.set(2,2,3),this.directionalLight3.target=n,this.directionalLight3.castShadow=!0,this.directionalLight3.shadow.camera.far=20,this.directionalLight3.shadow.mapSize.set(1024,1024),this.directionalLight3.shadow.normalBias=.05,this.scene.add(this.directionalLight3),this.debug.active&&(this.debugFolder.addColor(this.obj,"colorObj").name("lightsColor").onChange(()=>{this.sunLight.color.copy(this.obj.colorObj),this.ambientLight.color.copy(this.obj.colorObj),this.directionalLight.color.copy(this.obj.colorObj),this.directionalLight2.color.copy(this.obj.colorObj),this.directionalLight3.color.copy(this.obj.colorObj)}),this.debugFolder.add(this.sunLight,"intensity").name("sunLightIntensity").min(0).max(10).step(.001),this.debugFolder.add(this.sunLight.position,"x").name("sunLightX").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.position,"y").name("sunLightY").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.position,"z").name("sunLightZ").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.rotation,"x").name("sunRotationX").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.rotation,"y").name("sunRotationY").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.rotation,"z").name("sunRotationZ").min(-5).max(5).step(.001),this.debugFolder.add(this.ambientLight,"intensity").name("ambLightIntensity").min(0).max(10).step(.001),this.debugFolder.add(this.directionalLight,"intensity").name("directionalLightIntensity").min(0).max(10).step(.001),this.debugFolder.add(this.directionalLight.position,"x").name("directionalLightX").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight.position,"y").name("directionalLightY").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight.position,"z").name("directionalLightZ").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight.rotation,"x").name("directionalLightRotX").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight.rotation,"y").name("directionalLightRotY").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight.rotation,"z").name("directionalLightRotZ").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight2,"intensity").name("directionalLight2Intensity").min(0).max(10).step(.001),this.debugFolder.add(this.directionalLight2.position,"x").name("directionalLight2X").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight2.position,"y").name("directionalLight2Y").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight2.position,"z").name("directionalLight2Z").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight2.rotation,"x").name("directionalLight2RotX").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight2.rotation,"y").name("directionalLight2RotY").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight2.rotation,"z").name("directionalLight2RotZ").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight3,"intensity").name("directionalLight3Intensity").min(0).max(10).step(.001),this.debugFolder.add(this.directionalLight3.position,"x").name("directionalLight3X").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight3.position,"y").name("directionalLight3Y").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight3.position,"z").name("directionalLight3Z").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight3.rotation,"x").name("directionalLight3RotX").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight3.rotation,"y").name("directionalLight3RotY").min(-10).max(10).step(.001),this.debugFolder.add(this.directionalLight3.rotation,"z").name("directionalLight3RotZ").min(-10).max(10).step(.001))}setEnvironmentMap(){this.environmentMap={},this.environmentMap.intensity=1,this.environmentMap.texture=this.resources.items.environmentMapTexture,this.environmentMap.texture.encoding=tt,this.scene.environment=this.environmentMap.texture,this.environmentMap.updateMaterials=()=>{this.scene.traverse(e=>{e instanceof Qt&&e.material instanceof _i&&(e.material.envMap=this.environmentMap.texture,e.material.envMapIntensity=this.environmentMap.intensity,e.material.needsUpdate=!0)})},this.environmentMap.updateMaterials()}switchTheme(e){e==="dark"?this.toDarkTimeline=new ut.timeline().to(this.scene.background,{r:34/255,g:34/255,b:34/255},"same").to(this.scene.fog.color,{r:34/255,g:34/255,b:34/255},"same").to(this.sunLight.color,{r:34/255,g:34/255,b:34/255},"same").to(this.ambientLight.color,{r:34/255,g:34/255,b:34/255},"same").to(this.sunLight,{intensity:.2},"same").to(this.ambientLight,{intensity:.2},"same").to(this.directionalLight,{intensity:1},"same").to(this.directionalLight2,{intensity:1},"same").to(this.directionalLight3,{intensity:1},"same"):this.toLightTimeline=new ut.timeline().to(this.scene.background,{r:215/255,g:216/255,b:217/255},"same").to(this.scene.fog.color,{r:215/255,g:216/255,b:217/255},"same").to(this.sunLight.color,{r:215/255,g:216/255,b:217/255},"same").to(this.ambientLight.color,{r:215/255,g:216/255,b:217/255},"same").to(this.sunLight,{intensity:3},"same").to(this.ambientLight,{intensity:1},"same").to(this.directionalLight,{intensity:0},"same").to(this.directionalLight2,{intensity:0},"same").to(this.directionalLight3,{intensity:0},"same")}resize(){}update(){}}class rw{constructor(){this.experience=new vn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.bike=this.resources.items.bike,this.actualBike=this.bike.scene,this.bikeChildren={},this.lerp={current:0,target:0,ease:.1},this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("bike"),this.obj={colorObj:{r:0,g:0,b:0}}),this.setBikeModel(),this.onMouseMove(),this.setBikeGroup()}setBikeModel(){this.actualBike.scale.set(0,0,0),this.actualBike.traverse(e=>{e instanceof Qt&&(e.castShadow=!0,e.receiveShadow=!0,this.bikeMaterial=new _i({color:14145753,envMapIntensity:.1}),e.material=this.bikeMaterial),e.name==="BoxFace1"&&(e.material.side=Gt,e.material.color.set(1118481)),e.name==="BoxFace2"&&(e.material.side=Gt,e.material.color.set(1118481)),e.name==="BoxFace3"&&(e.material.side=Gt,e.material.color.set(1118481)),e.name==="BoxFace4"&&(e.material.side=Gt,e.material.color.set(1118481)),e.name==="BrakeF"&&e.material.color.set(328965),e.name==="BrakeB"&&e.material.color.set(328965),e.name==="BrakePadsF"&&e.material.color.set(328965),e.name==="BrakePadsB"&&e.material.color.set(328965),e.name==="BrakeCableF"&&e.material.color.set(16747520),e.name==="BrakeCableB"&&e.material.color.set(16747520),e.name==="BrakeDetailF"&&e.material.color.set(16747520),e.name==="BrakeDetailB"&&e.material.color.set(16747520),e.name==="Frame"&&(e.material.metalness=.9,e.material.roughness=0),e.name==="Chain1"&&(e.material.color.set(328965),e.material.metalness=.9,e.material.roughness=0),e.name==="Chain2"&&(e.material.color.set(328965),e.material.metalness=.9,e.material.roughness=0),e.name==="ChainringsCover"&&(e.material.color.set(328965),e.material.metalness=.9,e.material.roughness=0),e.name==="CrankArm"&&(e.material.metalness=.9,e.material.roughness=0),e.name==="Cassette"&&(e.material.metalness=.9,e.material.roughness=0),e.name==="PedalL"&&e.material.color.set(328965),e.name==="PedalR"&&e.material.color.set(328965),e.name==="PedalGripL"&&e.material.color.set(328965),e.name==="PedalGripR"&&e.material.color.set(328965),e.name==="CockpitStem"&&(e.material.color.set(328965),e.material.metalness=.5,e.material.roughness=0),e.name==="CockpitHandlebar"&&(e.material.color.set(328965),e.material.roughness=1),e.name==="TireF"&&(e.material.color.set(328965),e.material.roughness=1),e.name==="TireB"&&(e.material.color.set(328965),e.material.roughness=1),e.name==="RimF"&&(e.material.metalness=.5,e.material.roughness=0),e.name==="RimB"&&(e.material.metalness=.5,e.material.roughness=0),e.name==="RimInnerF"&&(e.material.color.set(16747520),e.material.roughness=0),e.name==="RimInnerB"&&(e.material.color.set(16747520),e.material.roughness=0),e.name==="SpokesF"&&(e.material.metalness=.9,e.material.roughness=0),e.name==="SpokesB"&&(e.material.metalness=.9,e.material.roughness=0),e.name==="FasteningF"&&(e.material.color.set(328965),e.material.metalness=.5,e.material.roughness=0),e.name==="FasteningB"&&(e.material.color.set(328965),e.material.metalness=.5,e.material.roughness=0),e.name==="HubF"&&(e.material.color.set(328965),e.material.metalness=.5,e.material.roughness=0),e.name==="HubB"&&(e.material.color.set(328965),e.material.metalness=.5,e.material.roughness=0),e.name==="Seat"&&(e.material.color.set(328965),e.material.roughness=1),this.bikeChildren[e.name.toLowerCase()]=e})}switchTheme(e){e==="dark"?(this.toDarkTimeline=new ut.timeline,this.actualBike.traverse(t=>{t instanceof Qt&&t.material instanceof _i&&this.toDarkTimeline.to(t.material,{envMapIntensity:.1},"same"),(t.name==="BoxFace1"||t.name==="BoxFace2"||t.name==="BoxFace3"||t.name==="BoxFace4")&&t.material.color.set(1118481)})):(this.toLightTimeline=new ut.timeline,this.actualBike.traverse(t=>{t instanceof Qt&&t.material instanceof _i&&this.toLightTimeline.to(t.material,{envMapIntensity:1},"same"),(t.name==="BoxFace1"||t.name==="BoxFace2"||t.name==="BoxFace3"||t.name==="BoxFace4")&&t.material.color.set(14145753)}))}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.3})}setBikeGroup(){this.group=new Oi,this.group.add(this.actualBike),this.scene.add(this.group)}resize(){}update(){this.lerp.current=ut.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.group.rotation.y=this.lerp.current}}class sw{constructor(){this.experience=new vn,this.scene=this.experience.scene,this.setFloor()}setFloor(){this.geometry=new el(100,100),this.material=new _i({color:131586,side:Gt}),this.plane=new Qt(this.geometry,this.material),this.plane.rotation.x=Math.PI/2,this.plane.receiveShadow=!0,this.scene.add(this.plane)}switchTheme(e){e==="dark"?ut.to(this.plane.material.color,{r:2/255,g:2/255,b:2/255}):ut.to(this.plane.material.color,{r:215/255,g:216/255,b:217/255})}resize(){}update(){}}class ow extends $i.exports.EventEmitter{constructor(){super(),this.experience=new vn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.resources=this.experience.resources,this.theme=this.experience.theme,this.resources.on("ready",()=>{this.environment=new iw,this.floor=new sw,this.bike=new rw,this.emit("worldready")}),this.theme.on("switch",e=>{e=this.theme.theme,this.switchTheme(e)})}switchTheme(e){this.environment&&this.environment.switchTheme(e),this.bike&&this.bike.switchTheme(e),this.floor&&this.floor.switchTheme(e)}resize(){}update(){this.bike&&this.bike.update(),this.controls&&this.controls.update()}}function vd(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function aw(a,e,t){return e&&vd(a.prototype,e),t&&vd(a,t),a}/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en,Dc,_n,_r,xr,gs,Lp,lr,ho,Cp,fi,kn,Rp=function(){return en||typeof window!="undefined"&&(en=window.gsap)&&en.registerPlugin&&en},Pp=1,ls=[],nt=[],Qn=[],fo=Date.now,Ic=function(e,t){return t},lw=function(){var e=ho.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Qn),nt=n,Qn=i,Ic=function(s,o){return t[s](o)}},Wi=function(e,t){return~Qn.indexOf(e)&&Qn[Qn.indexOf(e)+1][t]},La=function(e){return!!~Cp.indexOf(e)},on=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},fa="scrollLeft",pa="scrollTop",yd=function(){return fi&&fi.isPressed||nt.cache++},Ya=function(e,t){var n=function i(r){if(r||r===0){Pp&&(_n.history.scrollRestoration="manual");var s=fi&&fi.isPressed;r=i.v=Math.round(r)||(fi&&fi.iOS?1:0),e(r),i.cacheID=nt.cache,s&&Ic("ss",r)}else(t||nt.cache!==i.cacheID||Ic("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Jt={s:fa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ya(function(a){return arguments.length?_n.scrollTo(a,Et.sc()):_n.pageXOffset||_r[fa]||xr[fa]||gs[fa]||0})},Et={s:pa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Jt,sc:Ya(function(a){return arguments.length?_n.scrollTo(Jt.sc(),a):_n.pageYOffset||_r[pa]||xr[pa]||gs[pa]||0})},an=function(e){return en.utils.toArray(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Yi=function(e,t){var n=t.s,i=t.sc,r=nt.indexOf(e),s=i===Et.sc?1:2;return!~r&&(r=nt.push(e)-1),nt[r+s]||(nt[r+s]=Ya(Wi(e,n),!0)||(La(e)?i:Ya(function(o){return arguments.length?e[n]=o:e[n]})))},Fc=function(e,t,n){var i=e,r=e,s=fo(),o=s,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=fo();p||m-s>l?(r=i,i=g,o=s,s=m):n?i+=g:i=r+(g-r)/(m-o)*(s-o)},h=function(){r=i=n?0:i,o=s=0},d=function(g){var p=o,m=r,_=fo();return(g||g===0)&&g!==i&&u(g),s===o||_-o>c?0:(i+(n?m:-m))/((n?_:s)-p)*1e3};return{update:u,reset:h,getVelocity:d}},Ks=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Dp=function(){ho=en.core.globals().ScrollTrigger,ho&&ho.core&&lw()},Ip=function(e){return en=e||Rp(),en&&typeof document!="undefined"&&document.body&&(_n=window,_r=document,xr=_r.documentElement,gs=_r.body,Cp=[_n,_r,xr,gs],en.utils.clamp,lr="onpointerenter"in gs?"pointer":"mouse",Lp=wt.isTouch=_n.matchMedia&&_n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,kn=wt.eventTypes=("ontouchstart"in xr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pp=0},500),Dp(),Dc=1),Dc};Jt.op=Et;nt.cache=0;var wt=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){Dc||Ip(en)||console.warn("Please gsap.registerPlugin(Observer)"),ho||Dp();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,x=n.onDrag,M=n.onPress,b=n.onRelease,y=n.onRight,S=n.onLeft,A=n.onUp,v=n.onDown,E=n.onChangeX,F=n.onChangeY,O=n.onChange,Y=n.onToggleX,J=n.onToggleY,D=n.onHover,G=n.onHoverEnd,U=n.onMove,N=n.ignoreCheck,X=n.isNormalizer,z=n.onGestureStart,C=n.onGestureEnd,ne=n.onWheel,re=n.onEnable,ie=n.onDisable,fe=n.onClick,Me=n.scrollSpeed,j=n.capture,K=n.allowClicks,R=n.lockAxis,P=n.onLockAxis;this.target=o=an(o)||xr,this.vars=n,f&&(f=en.utils.toArray(f)),i=i||0,r=r||0,g=g||1,Me=Me||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_n.getComputedStyle(gs).lineHeight)||22);var W,ae,Q,te,be,Ae,De,H=this,ke=0,we=0,lt=Yi(o,Jt),ct=Yi(o,Et),L=lt(),w=ct(),Z=~s.indexOf("touch")&&!~s.indexOf("pointer")&&kn[0]==="pointerdown",le=La(o),oe=o.ownerDocument||_r,de=[0,0,0],Le=[0,0,0],$=0,Se=function(){return $=fo()},ge=function(se,ve){return(H.event=se)&&f&&~f.indexOf(se.target)||ve&&Z&&se.pointerType!=="touch"||N&&N(se,ve)},xe=function(){H._vx.reset(),H._vy.reset(),ae.pause(),h&&h(H)},I=function(){var se=H.deltaX=bd(de),ve=H.deltaY=bd(Le),Ie=Math.abs(se)>=i,Oe=Math.abs(ve)>=i;O&&(Ie||Oe)&&O(H,se,ve,de,Le),Ie&&(y&&H.deltaX>0&&y(H),S&&H.deltaX<0&&S(H),E&&E(H),Y&&H.deltaX<0!=ke<0&&Y(H),ke=H.deltaX,de[0]=de[1]=de[2]=0),Oe&&(v&&H.deltaY>0&&v(H),A&&H.deltaY<0&&A(H),F&&F(H),J&&H.deltaY<0!=we<0&&J(H),we=H.deltaY,Le[0]=Le[1]=Le[2]=0),(te||Q)&&(U&&U(H),P&&Ae&&P(H),Q&&(x(H),Q=!1),te=Ae=!1),be&&(ne(H),be=!1),W=0},he=function(se,ve,Ie){de[Ie]+=se,Le[Ie]+=ve,H._vx.update(se),H._vy.update(ve),c?W||(W=requestAnimationFrame(I)):I()},ue=function(se,ve){De!=="y"&&(de[2]+=se,H._vx.update(se,!0)),De!=="x"&&(Le[2]+=ve,H._vy.update(ve,!0)),R&&!De&&(H.axis=De=Math.abs(se)>Math.abs(ve)?"x":"y",Ae=!0),c?W||(W=requestAnimationFrame(I)):I()},pe=function(se){if(!ge(se,1)){se=Ks(se,u);var ve=se.clientX,Ie=se.clientY,Oe=ve-H.x,St=Ie-H.y,Be=H.isDragging;H.x=ve,H.y=Ie,(Be||Math.abs(H.startX-ve)>=r||Math.abs(H.startY-Ie)>=r)&&(x&&(Q=!0),Be||(H.isDragging=!0),ue(Oe,St),Be||m&&m(H))}},_e=H.onPress=function(He){ge(He,1)||(H.axis=De=null,ae.pause(),H.isPressed=!0,He=Ks(He),ke=we=0,H.startX=H.x=He.clientX,H.startY=H.y=He.clientY,H._vx.reset(),H._vy.reset(),on(X?o:oe,kn[1],pe,u,!0),H.deltaX=H.deltaY=0,M&&M(H))},Ce=function(se){if(!ge(se,1)){jt(X?o:oe,kn[1],pe,!0);var ve=H.isDragging&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ie=Ks(se);ve||(H._vx.reset(),H._vy.reset(),u&&K&&en.delayedCall(.08,function(){if(fo()-$>300&&!se.defaultPrevented){if(se.target.click)se.target.click();else if(oe.createEvent){var Oe=oe.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,_n,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),se.target.dispatchEvent(Oe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&!X&&ae.restart(!0),_&&ve&&_(H),b&&b(H,ve)}},ce=function(se){return se.touches&&se.touches.length>1&&(H.isGesturing=!0)&&z(se,H.isDragging)},Pe=function(){return(H.isGesturing=!1)||C(H)},Ge=function(se){if(!ge(se)){var ve=lt(),Ie=ct();he((ve-L)*Me,(Ie-w)*Me,1),L=ve,w=Ie,h&&ae.restart(!0)}},We=function(se){if(!ge(se)){se=Ks(se,u),ne&&(be=!0);var ve=(se.deltaMode===1?l:se.deltaMode===2?_n.innerHeight:1)*g;he(se.deltaX*ve,se.deltaY*ve,0),h&&!X&&ae.restart(!0)}},ft=function(se){if(!ge(se)){var ve=se.clientX,Ie=se.clientY,Oe=ve-H.x,St=Ie-H.y;H.x=ve,H.y=Ie,te=!0,(Oe||St)&&ue(Oe,St)}},vt=function(se){H.event=se,D(H)},wi=function(se){H.event=se,G(H)},Zi=function(se){return ge(se)||Ks(se,u)&&fe(H)};ae=H._dc=en.delayedCall(d||.25,xe).pause(),H.deltaX=H.deltaY=0,H._vx=Fc(0,50,!0),H._vy=Fc(0,50,!0),H.scrollX=lt,H.scrollY=ct,H.isDragging=H.isGesturing=H.isPressed=!1,H.enable=function(He){return H.isEnabled||(on(le?oe:o,"scroll",yd),s.indexOf("scroll")>=0&&on(le?oe:o,"scroll",Ge,u,j),s.indexOf("wheel")>=0&&on(o,"wheel",We,u,j),(s.indexOf("touch")>=0&&Lp||s.indexOf("pointer")>=0)&&(on(o,kn[0],_e,u,j),on(oe,kn[2],Ce),on(oe,kn[3],Ce),K&&on(o,"click",Se,!1,!0),fe&&on(o,"click",Zi),z&&on(oe,"gesturestart",ce),C&&on(oe,"gestureend",Pe),D&&on(o,lr+"enter",vt),G&&on(o,lr+"leave",wi),U&&on(o,lr+"move",ft)),H.isEnabled=!0,He&&He.type&&_e(He),re&&re(H)),H},H.disable=function(){H.isEnabled&&(ls.filter(function(He){return He!==H&&La(He.target)}).length||jt(le?oe:o,"scroll",yd),H.isPressed&&(H._vx.reset(),H._vy.reset(),jt(X?o:oe,kn[1],pe,!0)),jt(le?oe:o,"scroll",Ge,j),jt(o,"wheel",We,j),jt(o,kn[0],_e,j),jt(oe,kn[2],Ce),jt(oe,kn[3],Ce),jt(o,"click",Se,!0),jt(o,"click",Zi),jt(oe,"gesturestart",ce),jt(oe,"gestureend",Pe),jt(o,lr+"enter",vt),jt(o,lr+"leave",wi),jt(o,lr+"move",ft),H.isEnabled=H.isPressed=H.isDragging=!1,ie&&ie(H))},H.kill=function(){H.disable();var He=ls.indexOf(H);He>=0&&ls.splice(He,1),fi===H&&(fi=0)},ls.push(H),X&&La(o)&&(fi=H),H.enable(p)},aw(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();wt.version="3.10.4";wt.create=function(a){return new wt(a)};wt.register=Ip;wt.getAll=function(){return ls.slice()};wt.getById=function(a){return ls.filter(function(e){return e.vars.id===a})[0]};Rp()&&en.registerPlugin(wt);/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,hr,$e,pt,pi,mt,Fp,$a,Ka,cs,Ca,ma,It,al,Oc,Yt,Md,wd,rs,Op,tc,Np,wn,kp,zp,Bp,cr,nc,io=1,$t=Date.now,ic=$t(),Pn=0,ga=0,Sd=function(){return al=1},Td=function(){return al=0},Ii=function(e){return e},Fo=function(e){return Math.round(e*1e5)/1e5||0},Up=function(){return typeof window!="undefined"},Vp=function(){return Ne||Up()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},Fr=function(e){return!!~Fp.indexOf(e)},Gp=function(e){return Wi(e,"getBoundingClientRect")||(Fr(e)?function(){return Na.width=$e.innerWidth,Na.height=$e.innerHeight,Na}:function(){return di(e)})},cw=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=Wi(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?$e["inner"+r]:e["client"+r])||0}},uw=function(e,t){return!t||~Qn.indexOf(e)?Gp(e):function(){return Na}},Ui=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return(n="scroll"+i)&&(s=Wi(e,n))?s()-Gp(e)()[r]:Fr(e)?(pi[n]||mt[n])-($e["inner"+i]||pi["client"+i]||mt["client"+i]):e[n]-e["offset"+i]},_a=function(e,t){for(var n=0;n<rs.length;n+=3)(!t||~t.indexOf(rs[n+1]))&&e(rs[n],rs[n+1],rs[n+2])},qn=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},ro=function(e){return typeof e=="number"},Ra=function(e){return typeof e=="object"},xa=function(e){return Bn(e)&&e()},Ed=function(e,t){return function(){var n=xa(e),i=xa(t);return function(){xa(n),xa(i)}}},Zs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},rc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ts=Math.abs,Hp="left",Wp="top",gu="right",_u="bottom",Tr="width",Er="height",po="Right",mo="Left",go="Top",_o="Bottom",Mt="padding",Tn="margin",Ds="Width",xu="Height",qt="px",Kn=function(e){return $e.getComputedStyle(e)},hw=function(e){var t=Kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ad=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},di=function(e,t){var n=t&&Kn(e)[Oc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Nc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Xp=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},dw=function(e){return function(t){return Ne.utils.snap(Xp(e),t)}},vu=function(e){var t=Ne.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},fw=function(e){return function(t,n){return vu(Xp(e))(t,n.direction)}},va=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ft=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Lt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ya=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Ld={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ba={toggleActions:"play",anticipatePin:0},Za={top:0,left:0,center:.5,bottom:1,right:1},Pa=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Za?Za[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ma=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,g=pt.createElement("div"),p=Fr(n)||Wi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?mt:n,x=e.indexOf("start")!==-1,M=x?c:u,b="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(b+=(i===Et?gu:_u)+":"+(s+parseFloat(d))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Da(g,0,i,x),g},Da=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+Ds]=1,r["border"+o+Ds]=0,r[n.p]=t+"px",Ne.set(e,r)},Je=[],kc={},zc,Cd=function(){return $t()-Pn>34&&ko()},ns=function(){(!wn||!wn.isPressed||wn.startX>mt.clientWidth)&&(nt.cache++,zc||(zc=requestAnimationFrame(ko)),Pn||Or("scrollStart"),Pn=$t())},Rd=function(){Bp=$e.innerWidth,zp=$e.innerHeight},so=function(){nt.cache++,!It&&!Np&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!kp||Bp!==$e.innerWidth||Math.abs($e.innerHeight-zp)>$e.innerHeight*.25)&&$a.restart(!0)},Oo={},pw=[],gt=[],_s,Pd,Dd=function(e){var t=Ne.ticker.frame,n=[],i=0,r;if(Pd!==t||io){for(Ja();i<gt.length;i+=4)r=$e.matchMedia(gt[i]).matches,r!==gt[i+3]&&(gt[i+3]=r,r?n.push(i):Ja(1,gt[i])||Bn(gt[i+2])&&gt[i+2]());for(qp(),i=0;i<n.length;i++)r=n[i],_s=gt[r],gt[r+2]=gt[r+1](e);_s=0,hr&&xs(0,1),Pd=t,Or("matchMedia")}},jp=function a(){return Lt(Ye,"scrollEnd",a)||xs(!0)},Or=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||pw},Sn=[],qp=function(e){for(var t=0;t<Sn.length;t+=5)(!e||Sn[t+4]===e)&&(Sn[t].style.cssText=Sn[t+1],Sn[t].getBBox&&Sn[t].setAttribute("transform",Sn[t+2]||""),Sn[t+3].uncache=1)},Ja=function(e,t){var n;for(Yt=0;Yt<Je.length;Yt++)n=Je[Yt],(!t||n.media===t)&&(e?n.kill(1):n.revert());t&&qp(t),t||Or("revert")},Yp=function(){return nt.cache++&&nt.forEach(function(e){return typeof e=="function"&&(e.rec=0)})},No,Ia=0,xs=function(e,t){if(Pn&&!e){Ft(Ye,"scrollEnd",jp);return}No=!0;var n=Or("refreshInit");Op&&Ye.sort(),t||Ja(),Je.slice(0).forEach(function(i){return i.refresh()}),Je.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Ui(i.scroller,i._dir))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Yp(),$a.pause(),Ia++,No=!1,Or("refresh")},Id=0,Fa=1,dr,ko=function(){if(!No){Ye.isUpdating=!0,dr&&dr.update(0);var e=Je.length,t=$t(),n=t-ic>=50,i=e&&Je[0].scroll();if(Fa=Id>i?-1:1,Id=i,n&&(Pn&&!al&&t-Pn>200&&(Pn=0,Or("scrollEnd")),Ca=ic,ic=t),Fa<0){for(Yt=e;Yt-- >0;)Je[Yt]&&Je[Yt].update(0,n);Fa=1}else for(Yt=0;Yt<e;Yt++)Je[Yt]&&Je[Yt].update(0,n);Ye.isUpdating=!1}zc=0},Bc=[Hp,Wp,_u,gu,Tn+_o,Tn+po,Tn+go,Tn+mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Oa=Bc.concat([Tr,Er,"boxSizing","max"+Ds,"max"+xu,"position",Tn,Mt,Mt+go,Mt+po,Mt+_o,Mt+mo]),mw=function(e,t,n){zo(n);var i=e._gsap;if(i.spacerIsNative)zo(i.spacerState);else if(e.parentNode===t){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}},sc=function(e,t,n,i){if(e.parentNode!==t){for(var r=Bc.length,s=t.style,o=e.style,l;r--;)l=Bc[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[_u]=o[gu]=s.flexBasis="auto",s.overflow="visible",s.boxSizing="border-box",s[Tr]=Nc(e,Jt)+qt,s[Er]=Nc(e,Et)+qt,s[Mt]=o[Tn]=o[Wp]=o[Hp]="0",zo(i),o[Tr]=o["max"+Ds]=n[Tr],o[Er]=o["max"+xu]=n[Er],o[Mt]=n[Mt],e.parentNode.insertBefore(t,e),t.appendChild(e)}},gw=/([A-Z])/g,zo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(gw,"-$1").toLowerCase())}},wa=function(e){for(var t=Oa.length,n=e.style,i=[],r=0;r<t;r++)i.push(Oa[r],n[Oa[r]]);return i.t=e,i},_w=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},Na={left:0,top:0},Fd=function(e,t,n,i,r,s,o,l,c,u,h,d,f){Bn(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Pa("0"+e.substr(3),n):0));var g=f?f.time():0,p,m,_;if(f&&f.seek(0),ro(e))o&&Da(o,n,i,!0);else{Bn(t)&&(t=t(l));var x=e.split(" "),M,b,y,S;_=an(t)||mt,M=di(_)||{},(!M||!M.left&&!M.top)&&Kn(_).display==="none"&&(S=_.style.display,_.style.display="block",M=di(_),S?_.style.display=S:_.style.removeProperty("display")),b=Pa(x[0],M[i.d]),y=Pa(x[1]||"0",n),e=M[i.p]-c[i.p]-u+b+r-y,o&&Da(o,y,i,n-y<20||o._isStart&&y>20),n-=n-y}if(s){var A=e+n,v=s._isStart;p="scroll"+i.d2,Da(s,A,i,v&&A>20||!v&&(h?Math.max(mt[p],pi[p]):s.parentNode[p])<=A+1),h&&(c=di(o),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+qt))}return f&&_&&(p=di(_),f.seek(d),m=di(_),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},xw=/(webkit|moz|length|cssText|inset)/i,Od=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===mt){e._stOrig=r.cssText,o=Kn(e);for(s in o)!+s&&!xw.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},Nd=function(e,t){var n=Yi(e,t),i="_scroll"+t.p2,r,s,o=function l(c,u,h,d,f){var g=l.tween,p=u.onComplete,m={};return h=h||n(),f=d&&f||0,d=d||c-h,g&&g.kill(),r=Math.round(h),u[i]=c,u.modifiers=m,m[i]=function(_){return _=Fo(n()),_!==r&&_!==s&&Math.abs(_-r)>2&&Math.abs(_-s)>2?(g.kill(),l.tween=0):_=h+d*g.ratio+f*g.ratio*g.ratio,s=r,r=Fo(_)},u.onComplete=function(){l.tween=0,p&&p.call(g)},g=l.tween=Ne.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Ft(e,"wheel",n.wheelHandler),o},Ye=function(){function a(t,n){hr||a.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ga){this.update=this.refresh=this.kill=Ii;return}n=Ad(qn(n)||ro(n)||n.nodeType?{trigger:n}:n,ba);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,x=r.onSnapComplete,M=r.once,b=r.snap,y=r.pinReparent,S=r.pinSpacer,A=r.containerAnimation,v=r.fastScrollEnd,E=r.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Jt:Et,O=!h&&h!==0,Y=an(n.scroller||$e),J=Ne.core.getCache(Y),D=Fr(Y),G=("pinType"in n?n.pinType:Wi(Y,"pinType")||D&&"fixed")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=O&&n.toggleActions.split(" "),X="markers"in n?n.markers:ba.markers,z=D?0:parseFloat(Kn(Y)["border"+F.p2+Ds])||0,C=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(C)},re=cw(Y,D,F),ie=uw(Y,D),fe=0,Me=0,j=Yi(Y,F),K,R,P,W,ae,Q,te,be,Ae,De,H,ke,we,lt,ct,L,w,Z,le,oe,de,Le,$,Se,ge,xe,I,he,ue,pe,_e,Ce,ce,Pe,Ge,We,ft,vt;if(C.media=_s,C._dir=F,m*=45,C.scroller=Y,C.scroll=A?A.time.bind(A):j,W=j(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Op=1,n.refreshPriority===-9999&&(dr=C)),J.tweenScroll=J.tweenScroll||{top:Nd(Y,Et),left:Nd(Y,Jt)},C.tweenTo=K=J.tweenScroll[F.p],C.scrubDuration=function(se){_e=ro(se)&&se,_e?pe?pe.duration(se):pe=Ne.to(i,{ease:"expo",totalProgress:"+=0.001",duration:_e,paused:!0,onComplete:function(){return _&&_(C)}}):(pe&&pe.progress(1).kill(),pe=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),he=0,l||(l=i.vars.id)),Je.push(C),b&&((!Ra(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in mt.style&&Ne.set(D?[mt,pi]:Y,{scrollBehavior:"auto"}),P=Bn(b.snapTo)?b.snapTo:b.snapTo==="labels"?dw(i):b.snapTo==="labelsDirectional"?fw(i):b.directional!==!1?function(se,ve){return vu(b.snapTo)(se,$t()-Me<500?0:ve.direction)}:Ne.utils.snap(b.snapTo),Ce=b.duration||{min:.1,max:2},Ce=Ra(Ce)?cs(Ce.min,Ce.max):cs(Ce,Ce),ce=Ne.delayedCall(b.delay||_e/2||.1,function(){var se=j(),ve=$t()-Me<500,Ie=K.tween;if((ve||Math.abs(C.getVelocity())<10)&&!Ie&&!al&&fe!==se){var Oe=(se-Q)/we,St=i&&!O?i.totalProgress():Oe,Be=ve?0:(St-ue)/($t()-Ca)*1e3||0,T=Ne.utils.clamp(-Oe,1-Oe,ts(Be/2)*Be/.185),B=Oe+(b.inertia===!1?0:T),q=cs(0,1,P(B,C)),V=Math.round(Q+q*we),ee=b,Re=ee.onStart,ye=ee.onInterrupt,Te=ee.onComplete;if(se<=te&&se>=Q&&V!==se){if(Ie&&!Ie._initted&&Ie.data<=ts(V-se))return;b.inertia===!1&&(T=q-Oe),K(V,{duration:Ce(ts(Math.max(ts(B-St),ts(q-St))*.185/Be/.05||0)),ease:b.ease||"power3",data:ts(V-se),onInterrupt:function(){return ce.restart(!0)&&ye&&ye(C)},onComplete:function(){C.update(),fe=j(),he=ue=i&&!O?i.totalProgress():C.progress,x&&x(C),Te&&Te(C)}},se,T*we,V-se-T*we),Re&&Re(C,K.tween)}}else C.isActive&&fe!==se&&ce.restart(!0)}).pause()),l&&(kc[l]=C),d=C.trigger=an(d||f),vt=d&&d._gsap&&d._gsap.stRevert,vt&&(vt=vt(C)),f=f===!0?d:an(f),qn(o)&&(o={targets:d,className:o}),f&&(g===!1||g===Tn||(g=!g&&Kn(f.parentNode).display==="flex"?!1:Mt),C.pin=f,n.force3D!==!1&&Ne.set(f,{force3D:!0}),R=Ne.core.getCache(f),R.spacer?lt=R.pinState:(S&&(S=an(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),R.spacerIsNative=!!S,S&&(R.spacerState=wa(S))),R.spacer=w=S||pt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),R.pinState=lt=wa(f)),C.spacer=w=R.spacer,I=Kn(f),$=I[g+F.os2],le=Ne.getProperty(f),oe=Ne.quickSetter(f,F.a,qt),sc(f,w,I),L=wa(f)),X){ke=Ra(X)?Ad(X,Ld):Ld,De=Ma("scroller-start",l,Y,F,ke,0),H=Ma("scroller-end",l,Y,F,ke,0,De),Z=De["offset"+F.op.d2];var wi=an(Wi(Y,"content")||Y);be=this.markerStart=Ma("start",l,wi,F,ke,Z,0,A),Ae=this.markerEnd=Ma("end",l,wi,F,ke,Z,0,A),A&&(ft=Ne.quickSetter([be,Ae],F.a,qt)),!G&&!(Qn.length&&Wi(Y,"fixedMarkers")===!0)&&(hw(D?mt:Y),Ne.set([De,H],{force3D:!0}),ge=Ne.quickSetter(De,F.a,qt),xe=Ne.quickSetter(H,F.a,qt))}if(A){var Zi=A.vars.onUpdate,He=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),Zi&&Zi.apply(He||[])})}C.previous=function(){return Je[Je.indexOf(C)-1]},C.next=function(){return Je[Je.indexOf(C)+1]},C.revert=function(se){var ve=se!==!1||!C.enabled,Ie=It;ve!==C.isReverted&&(ve&&(C.scroll.rec||!It||!No||(C.scroll.rec=j()),Ge=Math.max(j(),C.scroll.rec||0),Pe=C.progress,We=i&&i.progress()),be&&[be,Ae,De,H].forEach(function(Oe){return Oe.style.display=ve?"none":"block"}),ve&&(It=1),C.update(ve),It=Ie,f&&(ve?mw(f,w,lt):(!y||!C.isActive)&&sc(f,w,Kn(f),Se)),C.isReverted=ve)},C.refresh=function(se,ve){if(!((It||!C.enabled)&&!ve)){if(f&&se&&Pn){Ft(a,"scrollEnd",jp);return}!No&&ne&&ne(C),It=1,Me=$t(),K.tween&&(K.tween.kill(),K.tween=0),pe&&pe.pause(),p&&i&&i.time(-.01,!0).invalidate(),C.isReverted||C.revert();for(var Ie=re(),Oe=ie(),St=A?A.duration():Ui(Y,F),Be=0,T=0,B=n.end,q=n.endTrigger||d,V=n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),ee=C.pinnedContainer=n.pinnedContainer&&an(n.pinnedContainer),Re=d&&Math.max(0,Je.indexOf(C))||0,ye=Re,Te,Ee,qe,Ve,Fe,Ue,Dt,Hn,ti,kt;ye--;)Ue=Je[ye],Ue.end||Ue.refresh(0,1)||(It=1),Dt=Ue.pin,Dt&&(Dt===d||Dt===f)&&!Ue.isReverted&&(kt||(kt=[]),kt.unshift(Ue),Ue.revert()),Ue!==Je[ye]&&(Re--,ye--);for(Bn(V)&&(V=V(C)),Q=Fd(V,d,Ie,F,j(),be,De,C,Oe,z,G,St,A)||(f?-.001:0),Bn(B)&&(B=B(C)),qn(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(qn(V)?V.split(" ")[0]:"")+B:(Be=Pa(B.substr(2),Ie),B=qn(V)?V:Q+Be,q=d)),te=Math.max(Q,Fd(B||(q?"100% 0":St),q,Ie,F,j()+Be,Ae,H,C,Oe,z,G,St,A))||-.001,we=te-Q||(Q-=.01)&&.001,Be=0,ye=Re;ye--;)Ue=Je[ye],Dt=Ue.pin,Dt&&Ue.start-Ue._pinPush<Q&&!A&&Ue.end>0&&(Te=Ue.end-Ue.start,(Dt===d||Dt===ee)&&!ro(V)&&(Be+=Te*(1-Ue.progress)),Dt===f&&(T+=Te));if(Q+=Be,te+=Be,C._pinPush=T,be&&Be&&(Te={},Te[F.a]="+="+Be,ee&&(Te[F.p]="-="+j()),Ne.set([be,Ae],Te)),f)Te=Kn(f),Ve=F===Et,qe=j(),de=parseFloat(le(F.a))+T,!St&&te>1&&((D?mt:Y).style["overflow-"+F.a]="scroll"),sc(f,w,Te),L=wa(f),Ee=di(f,!0),Hn=G&&Yi(Y,Ve?Jt:Et)(),g&&(Se=[g+F.os2,we+T+qt],Se.t=w,ye=g===Mt?Nc(f,F)+we+T:0,ye&&Se.push(F.d,ye+qt),zo(Se),G&&j(Ge)),G&&(Fe={top:Ee.top+(Ve?qe-Q:Hn)+qt,left:Ee.left+(Ve?Hn:qe-Q)+qt,boxSizing:"border-box",position:"fixed"},Fe[Tr]=Fe["max"+Ds]=Math.ceil(Ee.width)+qt,Fe[Er]=Fe["max"+xu]=Math.ceil(Ee.height)+qt,Fe[Tn]=Fe[Tn+go]=Fe[Tn+po]=Fe[Tn+_o]=Fe[Tn+mo]="0",Fe[Mt]=Te[Mt],Fe[Mt+go]=Te[Mt+go],Fe[Mt+po]=Te[Mt+po],Fe[Mt+_o]=Te[Mt+_o],Fe[Mt+mo]=Te[Mt+mo],ct=_w(lt,Fe,y)),i?(ti=i._initted,tc(1),i.render(i.duration(),!0,!0),Le=le(F.a)-de+we+T,we!==Le&&G&&ct.splice(ct.length-2,2),i.render(0,!0,!0),ti||i.invalidate(),tc(0)):Le=we;else if(d&&j()&&!A)for(Ee=d.parentNode;Ee&&Ee!==mt;)Ee._pinOffset&&(Q-=Ee._pinOffset,te-=Ee._pinOffset),Ee=Ee.parentNode;kt&&kt.forEach(function(Qe){return Qe.revert(!1)}),C.start=Q,C.end=te,W=ae=j(),A||(W<Ge&&j(Ge),C.scroll.rec=0),C.revert(!1),ce&&(fe=-1,C.isActive&&j(Q+we*Pe),ce.restart(!0)),It=0,i&&O&&(i._initted||We)&&i.progress()!==We&&i.progress(We,!0).render(i.time(),!0,!0),(Pe!==C.progress||A)&&(i&&!O&&i.totalProgress(Pe,!0),C.progress=Pe,C.update(0,0,1)),f&&g&&(w._pinOffset=Math.round(C.progress*Le)),u&&u(C)}},C.getVelocity=function(){return(j()-ae)/($t()-Ca)*1e3||0},C.endAnimation=function(){Zs(C.callbackAnimation),i&&(pe?pe.progress(1):i.paused()?O||Zs(i,C.direction<0,1):Zs(i,i.reversed()))},C.labelToScroll=function(se){return i&&i.labels&&(Q||C.refresh()||Q)+i.labels[se]/i.duration()*we||0},C.getTrailing=function(se){var ve=Je.indexOf(C),Ie=C.direction>0?Je.slice(0,ve).reverse():Je.slice(ve+1);return(qn(se)?Ie.filter(function(Oe){return Oe.vars.preventOverlaps===se}):Ie).filter(function(Oe){return C.direction>0?Oe.end<=Q:Oe.start>=te})},C.update=function(se,ve,Ie){if(!(A&&!Ie&&!se)){var Oe=C.scroll(),St=se?0:(Oe-Q)/we,Be=St<0?0:St>1?1:St||0,T=C.progress,B,q,V,ee,Re,ye,Te,Ee;if(ve&&(ae=W,W=A?j():Oe,b&&(ue=he,he=i&&!O?i.totalProgress():Be)),m&&!Be&&f&&!It&&!io&&Pn&&Q<Oe+(Oe-ae)/($t()-Ca)*m&&(Be=1e-4),Be!==T&&C.enabled){if(B=C.isActive=!!Be&&Be<1,q=!!T&&T<1,ye=B!==q,Re=ye||!!Be!=!!T,C.direction=Be>T?1:-1,C.progress=Be,Re&&!It&&(V=Be&&!T?0:Be===1?1:T===1?2:3,O&&(ee=!ye&&N[V+1]!=="none"&&N[V+1]||N[V],Ee=i&&(ee==="complete"||ee==="reset"||ee in i))),E&&(ye||Ee)&&(Ee||h||!i)&&(Bn(E)?E(C):C.getTrailing(E).forEach(function(Ue){return Ue.endAnimation()})),O||(pe&&!It&&!io?((A||dr&&dr!==C)&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",Be,i._tTime/i._tDur):(pe.vars.totalProgress=Be,pe.invalidate().restart())):i&&i.totalProgress(Be,!!It)),f){if(se&&g&&(w.style[g+F.os2]=$),!G)oe(Fo(de+Le*Be));else if(Re){if(Te=!se&&Be>T&&te+1>Oe&&Oe+1>=Ui(Y,F),y)if(!se&&(B||Te)){var qe=di(f,!0),Ve=Oe-Q;Od(f,mt,qe.top+(F===Et?Ve:0)+qt,qe.left+(F===Et?0:Ve)+qt)}else Od(f,w);zo(B||Te?ct:L),Le!==we&&Be<1&&B||oe(de+(Be===1&&!Te?Le:0))}}b&&!K.tween&&!It&&!io&&ce.restart(!0),o&&(ye||M&&Be&&(Be<1||!nc))&&Ka(o.targets).forEach(function(Ue){return Ue.classList[B||M?"add":"remove"](o.className)}),s&&!O&&!se&&s(C),Re&&!It?(O&&(Ee&&(ee==="complete"?i.pause().totalProgress(1):ee==="reset"?i.restart(!0).pause():ee==="restart"?i.restart(!0):i[ee]()),s&&s(C)),(ye||!nc)&&(c&&ye&&rc(C,c),U[V]&&rc(C,U[V]),M&&(Be===1?C.kill(!1,1):U[V]=0),ye||(V=Be===1?1:3,U[V]&&rc(C,U[V]))),v&&!B&&Math.abs(C.getVelocity())>(ro(v)?v:2500)&&(Zs(C.callbackAnimation),pe?pe.progress(1):Zs(i,!Be,1))):O&&s&&!It&&s(C)}if(xe){var Fe=A?Oe/A.duration()*(A._caScrollDist||0):Oe;ge(Fe+(De._isFlipped?1:0)),xe(Fe)}ft&&ft(-Oe/A.duration()*(A._caScrollDist||0))}},C.enable=function(se,ve){C.enabled||(C.enabled=!0,Ft(Y,"resize",so),Ft(D?pt:Y,"scroll",ns),ne&&Ft(a,"refreshInit",ne),se!==!1&&(C.progress=Pe=0,W=ae=fe=j()),ve!==!1&&C.refresh())},C.getTween=function(se){return se&&K?K.tween:pe},C.setPositions=function(se,ve){f&&(de+=se-Q,Le+=ve-se-we),C.start=Q=se,C.end=te=ve,we=ve-se,C.update()},C.disable=function(se,ve){if(C.enabled&&(se!==!1&&C.revert(),C.enabled=C.isActive=!1,ve||pe&&pe.pause(),Ge=0,R&&(R.uncache=1),ne&&Lt(a,"refreshInit",ne),ce&&(ce.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!D)){for(var Ie=Je.length;Ie--;)if(Je[Ie].scroller===Y&&Je[Ie]!==C)return;Lt(Y,"resize",so),Lt(Y,"scroll",ns)}},C.kill=function(se,ve){C.disable(se,ve),pe&&!ve&&pe.kill(),l&&delete kc[l];var Ie=Je.indexOf(C);Ie>=0&&Je.splice(Ie,1),Ie===Yt&&Fa>0&&Yt--,Ie=0,Je.forEach(function(Oe){return Oe.scroller===C.scroller&&(Ie=1)}),Ie||(C.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.render(-1),ve||i.kill()),be&&[be,Ae,De,H].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),dr===C&&(dr=0),f&&(R&&(R.uncache=1),Ie=0,Je.forEach(function(Oe){return Oe.pin===f&&Ie++}),Ie||(R.spacer=0)),n.onKill&&n.onKill(C)},C.enable(!1,!1),vt&&vt(C),!i||!i.add||we?C.refresh():Ne.delayedCall(.01,function(){return Q||te||C.refresh()})&&(we=.01)&&(Q=te=0)},a.register=function(n){return hr||(Ne=n||Vp(),Up()&&window.document&&a.enable(),hr=ga),hr},a.defaults=function(n){if(n)for(var i in n)ba[i]=n[i];return ba},a.disable=function(n,i){ga=0,Je.forEach(function(s){return s[i?"kill":"disable"](n)}),Lt($e,"wheel",ns),Lt(pt,"scroll",ns),clearInterval(ma),Lt(pt,"touchcancel",Ii),Lt(mt,"touchstart",Ii),va(Lt,pt,"pointerdown,touchstart,mousedown",Sd),va(Lt,pt,"pointerup,touchend,mouseup",Td),$a.kill(),_a(Lt);for(var r=0;r<nt.length;r+=3)ya(Lt,nt[r],nt[r+1]),ya(Lt,nt[r],nt[r+2])},a.enable=function(){if($e=window,pt=document,pi=pt.documentElement,mt=pt.body,Ne&&(Ka=Ne.utils.toArray,cs=Ne.utils.clamp,tc=Ne.core.suppressOverwrites||Ii,Ne.core.globals("ScrollTrigger",a),mt)){ga=1,wt.register(Ne),a.isTouch=wt.isTouch,cr=wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft($e,"wheel",ns),Fp=[$e,pt,pi,mt],a.matchMedia({"(orientation: portrait)":function(){return Rd(),Rd}}),Ft(pt,"scroll",ns);var n=mt.style,i=n.borderTopStyle,r,s;for(n.borderTopStyle="solid",r=di(mt),Et.m=Math.round(r.top+Et.sc())||0,Jt.m=Math.round(r.left+Jt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ma=setInterval(Cd,250),Ne.delayedCall(.5,function(){return io=0}),Ft(pt,"touchcancel",Ii),Ft(mt,"touchstart",Ii),va(Ft,pt,"pointerdown,touchstart,mousedown",Sd),va(Ft,pt,"pointerup,touchend,mouseup",Td),Oc=Ne.utils.checkPrefix("transform"),Oa.push(Oc),hr=$t(),$a=Ne.delayedCall(.2,xs).pause(),rs=[pt,"visibilitychange",function(){var o=$e.innerWidth,l=$e.innerHeight;pt.hidden?(Md=o,wd=l):(Md!==o||wd!==l)&&so()},pt,"DOMContentLoaded",xs,$e,"load",xs,$e,"resize",so],_a(Ft),Je.forEach(function(o){return o.enable(0,1)}),s=0;s<nt.length;s+=3)ya(Lt,nt[s],nt[s+1]),ya(Lt,nt[s],nt[s+2])}},a.config=function(n){"limitCallbacks"in n&&(nc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ma)||(ma=i)&&setInterval(Cd,i),"ignoreMobileResize"in n&&(kp=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(_a(Lt)||_a(Ft,n.autoRefreshEvents||"none"),Np=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=an(n),s=nt.indexOf(r),o=Fr(r);~s&&nt.splice(s,o?6:2),i&&(o?Qn.unshift($e,i,mt,i,pi,i):Qn.unshift(r,i))},a.matchMedia=function(n){var i,r,s,o,l;for(r in n)s=gt.indexOf(r),o=n[r],_s=r,r==="all"?o():(i=$e.matchMedia(r),i&&(i.matches&&(l=o()),~s?(gt[s+1]=Ed(gt[s+1],o),gt[s+2]=Ed(gt[s+2],l)):(s=gt.length,gt.push(r,o,l),i.addListener?i.addListener(Dd):i.addEventListener("change",Dd)),gt[s+3]=i.matches)),_s=0;return gt},a.clearMatchMedia=function(n){n||(gt.length=0),n=gt.indexOf(n),n>=0&&gt.splice(n,4)},a.isInViewport=function(n,i,r){var s=(qn(n)?an(n):n).getBoundingClientRect(),o=s[r?Tr:Er]*i||0;return r?s.right-o>0&&s.left+o<$e.innerWidth:s.bottom-o>0&&s.top+o<$e.innerHeight},a.positionInViewport=function(n,i,r){qn(n)&&(n=an(n));var s=n.getBoundingClientRect(),o=s[r?Tr:Er],l=i==null?o/2:i in Za?Za[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/$e.innerWidth:(s.top+l)/$e.innerHeight},a}();Ye.version="3.10.4";Ye.saveStyles=function(a){return a?Ka(a).forEach(function(e){if(e&&e.style){var t=Sn.indexOf(e);t>=0&&Sn.splice(t,5),Sn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),_s)}}):Sn};Ye.revert=function(a,e){return Ja(!a,e)};Ye.create=function(a,e){return new Ye(a,e)};Ye.refresh=function(a){return a?so():(hr||Ye.register())&&xs(!0)};Ye.update=ko;Ye.clearScrollMemory=Yp;Ye.maxScroll=function(a,e){return Ui(a,e?Jt:Et)};Ye.getScrollFunc=function(a,e){return Yi(an(a),e?Jt:Et)};Ye.getById=function(a){return kc[a]};Ye.getAll=function(){return Je.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!Pn};Ye.snapDirectional=vu;Ye.addEventListener=function(a,e){var t=Oo[a]||(Oo[a]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(a,e){var t=Oo[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],d=[],f=Ne.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),r<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Bn(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return Bn(r)&&(r=r(),Ft(Ye,"refresh",function(){return r=e.batchMax()})),Ka(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var kd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},oc=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wt.isTouch?" pinch-zoom":""):"none",e===pi&&a(mt,t)},zd={auto:1,scroll:1},vw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||Ne.core.getCache(r),o=$t(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r.scrollHeight<=r.clientHeight;)r=r.parentNode;s._isScroll=r&&!Fr(r)&&r!==n&&(zd[(l=Kn(r)).overflowY]||zd[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t._gsapAllow=!0)},$p=function(e,t,n,i){return wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&vw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(pt,wt.eventTypes[0],Ud,!1,!0)},onDisable:function(){return Lt(pt,wt.eventTypes[0],Ud,!0)}})},yw=/(input|label|select|textarea)/i,Bd,Ud=function(e){var t=yw.test(e.target.tagName);(t||Bd)&&(e._gsapAllow=!0,Bd=t)},bw=function(e){Ra(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s,o,l=an(e.target)||pi,c=Ne.core.globals().ScrollSmoother,u=cr&&(e.content&&an(e.content)||c&&c.get()&&c.get().content()),h=Yi(l,Et),d=Yi(l,Jt),f=1,g=(wt.isTouch&&$e.visualViewport?$e.visualViewport.scale*$e.visualViewport.width:$e.outerWidth)/$e.innerWidth,p=0,m=Bn(i)?function(){return i(s)}:function(){return i||2.8},_,x,M=$p(l,e.type,!0,r),b=function(){return _=!1},y=Ii,S=Ii,A=function(){o=Ui(l,Et),S=cs(cr?1:0,o),n&&(y=cs(0,Ui(l,Jt))),x=Ia},v=function(){if(_){requestAnimationFrame(b);var G=Fo(s.deltaY/2),U=S(h.v-G);return u&&U!==h.v+h.offset&&(h.offset=U-h.v,u.style.transform="translateY("+-h.offset+"px)",u._gsap&&(u._gsap.y=-h.offset+"px"),h.cacheID=nt.cache,ko()),!0}u&&(u.style.transform="translateY(0px)",h.offset=h.cacheID=0,u._gsap&&(u._gsap.y="0px")),_=!0},E,F,O,Y,J=function(){A(),E.isActive()&&E.vars.scrollY>o&&(h()>o?E.progress(1)&&h(o):E.resetTo("scrollY",o))};return e.ignoreCheck=function(D){return cr&&D.type==="touchmove"&&v()||f>1.05&&D.type!=="touchstart"||s.isGesturing||D.touches&&D.touches.length>1},e.onPress=function(){var D=f;f=Fo(($e.visualViewport&&$e.visualViewport.scale||1)/g),E.pause(),D!==f&&oc(l,f>1.01?!0:n?!1:"x"),_=!1,F=d(),O=h(),A(),x=Ia},e.onRelease=e.onGestureStart=function(D,G){if(u&&(u.style.transform="translateY(0px)",h.offset=h.cacheID=0,u._gsap&&(u._gsap.y="0px")),!G)Y.restart(!0);else{nt.cache++;var U=m(),N,X;n&&(N=d(),X=N+U*.05*-D.velocityX/.227,U*=kd(d,N,X,Ui(l,Jt)),E.vars.scrollX=y(X)),N=h(),X=N+U*.05*-D.velocityY/.227,U*=kd(h,N,X,Ui(l,Et)),E.vars.scrollY=S(X),E.invalidate().duration(U).play(.01),(cr&&E.vars.scrollY>=o||N>=o-1)&&Ne.to({},{onUpdate:J,duration:U})}},e.onWheel=function(){E._ts&&E.pause(),$t()-p>1e3&&(x=0,p=$t())},e.onChange=function(D,G,U,N,X){Ia!==x&&A(),G&&n&&d(y(N[2]===G?F+(D.startX-D.x):d()+G-N[1])),U&&h(S(X[2]===U?O+(D.startY-D.y):h()+U-X[1])),ko()},e.onEnable=function(){oc(l,n?!1:"x"),Ft($e,"resize",J),M.enable()},e.onDisable=function(){oc(l,!0),Lt($e,"resize",J),M.kill()},s=new wt(e),s.iOS=cr,cr&&!h()&&h(1),Y=s._dc,E=Ne.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:Y.vars.onComplete}),s};Ye.sort=function(a){return Je.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(a){return new wt(a)};Ye.normalizeScroll=function(a){if(typeof a=="undefined")return wn;if(a===!0&&wn)return wn.enable();if(a===!1)return wn&&wn.kill();var e=a instanceof wt?a:bw(a);return wn&&wn.target===e.target&&wn.kill(),Fr(e.target)&&(wn=e),e};Ye.core={_getVelocityProp:Fc,_inputObserver:$p,_scrollers:nt,_proxies:Qn,bridge:{ss:function(){Pn||Or("scrollStart"),Pn=$t()},ref:function(){return It}}};Vp()&&Ne.registerPlugin(Ye);var Kp={exports:{}};(function(a,e){(function(n,i){a.exports=i()})(self,function(){return function(){var t={672:function(s){const o={html:document.documentElement,body:document.body,window:{w:window.innerWidth,h:window.innerHeight}};s.exports=o},336:function(s){s.exports=function(l,c){let u=null;return function(){clearTimeout(u);const h=arguments,d=this;u=setTimeout(function(){l.apply(d,h)},c)}}}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={exports:{}};return t[s](l,l.exports,i),l.exports}(function(){i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,{a:o}),o}})(),function(){i.d=function(s,o){for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})}}(),function(){i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)}}();var r={};return function(){i.d(r,{default:function(){return j}});var s=i(336),o=i.n(s),l=i(672),c=i.n(l);function u(){if(!(this instanceof u))return new u;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var h=window.document.documentElement,d=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector;u.prototype.matchesSelector=function(K,R){return d.call(K,R)},u.prototype.querySelectorAll=function(K,R){return R.querySelectorAll(K)},u.prototype.indexes=[];var f=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;u.prototype.indexes.push({name:"ID",selector:function(R){var P;if(P=R.match(f))return P[0].slice(1)},element:function(R){if(R.id)return[R.id]}});var g=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;u.prototype.indexes.push({name:"CLASS",selector:function(R){var P;if(P=R.match(g))return P[0].slice(1)},element:function(R){var P=R.className;if(P){if(typeof P=="string")return P.split(/\s/);if(typeof P=="object"&&"baseVal"in P)return P.baseVal.split(/\s/)}}});var p=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;u.prototype.indexes.push({name:"TAG",selector:function(R){var P;if(P=R.match(p))return P[0].toUpperCase()},element:function(R){return[R.nodeName.toUpperCase()]}}),u.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var m;typeof window.Map=="function"?m=window.Map:m=function(){function K(){this.map={}}return K.prototype.get=function(R){return this.map[R+" "]},K.prototype.set=function(R,P){this.map[R+" "]=P},K}();var _=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function x(K,R){K=K.slice(0).concat(K.default);var P=K.length,W,ae,Q,te,be=R,Ae,De,H=[];do if(_.exec(""),(Q=_.exec(be))&&(be=Q[3],Q[2]||!be)){for(W=0;W<P;W++)if(De=K[W],Ae=De.selector(Q[1])){for(ae=H.length,te=!1;ae--;)if(H[ae].index===De&&H[ae].key===Ae){te=!0;break}te||H.push({index:De,key:Ae});break}}while(Q);return H}function M(K,R){var P,W,ae;for(P=0,W=K.length;P<W;P++)if(ae=K[P],R.isPrototypeOf(ae))return ae}u.prototype.logDefaultIndexUsed=function(){},u.prototype.add=function(K,R){var P,W,ae,Q,te,be,Ae,De,H=this.activeIndexes,ke=this.selectors,we=this.selectorObjects;if(typeof K=="string"){for(P={id:this.uid++,selector:K,data:R},we[P.id]=P,Ae=x(this.indexes,K),W=0;W<Ae.length;W++)De=Ae[W],Q=De.key,ae=De.index,te=M(H,ae),te||(te=Object.create(ae),te.map=new m,H.push(te)),ae===this.indexes.default&&this.logDefaultIndexUsed(P),be=te.map.get(Q),be||(be=[],te.map.set(Q,be)),be.push(P);this.size++,ke.push(K)}},u.prototype.remove=function(K,R){if(typeof K=="string"){var P,W,ae,Q,te,be,Ae,De,H=this.activeIndexes,ke=this.selectors=[],we=this.selectorObjects,lt={},ct=arguments.length===1;for(P=x(this.indexes,K),ae=0;ae<P.length;ae++)for(W=P[ae],Q=H.length;Q--;)if(be=H[Q],W.index.isPrototypeOf(be)){if(Ae=be.map.get(W.key),Ae)for(te=Ae.length;te--;)De=Ae[te],De.selector===K&&(ct||De.data===R)&&(Ae.splice(te,1),lt[De.id]=!0);break}for(ae in lt)delete we[ae],this.size--;for(ae in we)ke.push(we[ae].selector)}};function b(K,R){return K.id-R.id}u.prototype.queryAll=function(K){if(!this.selectors.length)return[];var R={},P=[],W=this.querySelectorAll(this.selectors.join(", "),K),ae,Q,te,be,Ae,De,H,ke;for(ae=0,te=W.length;ae<te;ae++)for(Ae=W[ae],De=this.matches(Ae),Q=0,be=De.length;Q<be;Q++)ke=De[Q],R[ke.id]?H=R[ke.id]:(H={id:ke.id,selector:ke.selector,data:ke.data,elements:[]},R[ke.id]=H,P.push(H)),H.elements.push(Ae);return P.sort(b)},u.prototype.matches=function(K){if(!K)return[];var R,P,W,ae,Q,te,be,Ae,De,H,ke,we=this.activeIndexes,lt={},ct=[];for(R=0,ae=we.length;R<ae;R++)if(be=we[R],Ae=be.element(K),Ae){for(P=0,Q=Ae.length;P<Q;P++)if(De=be.map.get(Ae[P]))for(W=0,te=De.length;W<te;W++)H=De[W],ke=H.id,!lt[ke]&&this.matchesSelector(K,H.selector)&&(lt[ke]=!0,ct.push(H))}return ct.sort(b)};const y={},S={},A=["mouseenter","mouseleave","pointerenter","pointerleave"];function v(K){S[K]===void 0&&(S[K]=[])}function E(K,R){if(S[K])for(let P=0;P<S[K].length;P++)S[K][P](...R)}function F(K){return typeof K=="string"?document.querySelectorAll(K):K}function O(K){let R=Y(y[K.type],K.target);if(R.length)for(let P=0;P<R.length;P++)for(let W=0;W<R[P].stack.length;W++)A.indexOf(K.type)!==-1?(J(K,R[P].delegatedTarget),K.target===R[P].delegatedTarget&&R[P].stack[W].data(K)):(J(K,R[P].delegatedTarget),R[P].stack[W].data(K))}function Y(K,R){const P=[];let W=R;do{if(W.nodeType!==1)break;const ae=K.matches(W);ae.length&&P.push({delegatedTarget:W,stack:ae})}while(W=W.parentElement);return P}function J(K,R){Object.defineProperty(K,"currentTarget",{configurable:!0,enumerable:!0,get:()=>R})}function D(K){return JSON.parse(JSON.stringify(K))}class G{bindAll(R,P){P||(P=Object.getOwnPropertyNames(Object.getPrototypeOf(R)));for(let W=0;W<P.length;W++)R[P[W]]=R[P[W]].bind(R)}on(R,P,W,ae){const Q=R.split(" ");for(let te=0;te<Q.length;te++){if(typeof P=="function"&&W===void 0){v(Q[te]),S[Q[te]].push(P);continue}if(P.nodeType&&P.nodeType===1||P===window||P===document){P.addEventListener(Q[te],W,ae);continue}P=F(P);for(let be=0;be<P.length;be++)P[be].addEventListener(Q[te],W,ae)}}delegate(R,P,W){const ae=R.split(" ");for(let Q=0;Q<ae.length;Q++){let te=y[ae[Q]];te===void 0&&(te=new u,y[ae[Q]]=te,A.indexOf(ae[Q])!==-1?document.addEventListener(ae[Q],O,!0):document.addEventListener(ae[Q],O)),te.add(P,W)}}off(R,P,W,ae){const Q=R.split(" ");for(let te=0;te<Q.length;te++){if(P===void 0){S[Q[te]]=[];continue}if(typeof P=="function"){v(Q[te]);for(let Ae=0;Ae<S[Q[te]].length;Ae++)S[Q[te]][Ae]===P&&S[Q[te]].splice(Ae,1);continue}const be=y[Q[te]];if(be!==void 0&&(be.remove(P,W),be.size===0)){delete y[Q[te]],A.indexOf(Q[te])!==-1?document.removeEventListener(Q[te],O,!0):document.removeEventListener(Q[te],O);continue}if(P.removeEventListener!==void 0){P.removeEventListener(Q[te],W,ae);continue}P=F(P);for(let Ae=0;Ae<P.length;Ae++)P[Ae].removeEventListener(Q[te],W,ae)}}emit(R,...P){E(R,P)}debugDelegated(){return D(y)}debugBus(){return D(S)}}var N=new G;function X(K,R,P){return R in K?Object.defineProperty(K,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):K[R]=P,K}class z{constructor(R={}){X(this,"onRaf",()=>{N.emit(z.INTERNALRAF),!this.options.disableRaf&&requestAnimationFrame(this.onRaf)}),this.options=R,this.addEvents()}addEvents(){this.options.disableRaf||requestAnimationFrame(this.onRaf),this.options.disableResize||N.on("resize",window,o()(()=>{this.onResize()},150)),this.onScroll(),"ontouchstart"in document.documentElement&&(c().isTouch=!0,this.detectMouse())}onScroll(){N.on("wheel",window,R=>{N.emit(z.WHEEL,{event:R})},{passive:!1}),N.on("scroll",window,R=>{N.emit(z.INTERNALSCROLL,{event:R})},{passive:!0})}onResize({width:R,height:P}={}){c().window.w=R||window.innerWidth,c().window.h=P||window.innerHeight,N.emit(z.RESIZE)}detectMouse(){window.addEventListener("mousemove",function R(P){(Math.abs(P.movementX)>0||Math.abs(P.movementY)>0)&&(c().isTouch=!1,N.emit(z.MOUSEDETECTED),window.removeEventListener("mousemove",R))})}}X(z,"INTERNALRAF","raf:internal"),X(z,"EXTERNALRAF","raf:external"),X(z,"WHEEL","wheel"),X(z,"INTERNALSCROLL","scroll:internal"),X(z,"EXTERNALSCROLL","scroll:external"),X(z,"RESIZE","resize"),X(z,"MOUSEDETECTED","mouseDetected"),X(z,"SCROLLEND","scrollEnd");function C(K,R,P){return R in K?Object.defineProperty(K,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):K[R]=P,K}class ne{constructor(R){C(this,"onMouseMove",P=>{!this.mouseDown||(this.mousePos=P.clientY,this.position-=this.prevMousePos-this.mousePos,this.position=Math.min(Math.max(this.position,0),this.maxY),this.prevMousePos=this.mousePos,this.controller.targetPos=this.position/this.maxY*this.controller.maxScroll,this.controller.clamp(),this.controller.syncScroll=!0,this.transform(),N.emit(z.EXTERNALSCROLL,-this.controller.targetPos))}),C(this,"onMouseDown",P=>{this.mousePos=this.prevMousePos=P.clientY,this.mouseDown=!0,c().body.style.userSelect="none",this.el.classList.add("active")}),C(this,"onMouseUp",()=>{this.mouseDown=!1,c().body.style.removeProperty("user-select"),this.el.classList.remove("active")}),this.controller=R,this.addHTML(),this.el=document.querySelector(this.controller.options.scrollbarEl),this.handle=document.querySelector(this.controller.options.scrollbarHandleEl),this.position=0,this.mousePos=0,this.prevMousePos=0,this.addStyles(),this.addEvents()}transform(){let R;this.mouseDown?R=this.position:(R=-this.controller.targetPos/-this.controller.maxScroll*(c().window.h-this.handleHeight),this.position=R),this.handle.style.transform=`translate3d(0, ${R}px, 0)`}show(){this.el.classList.add("show")}hide(){this.el.classList.remove("show")}addEvents(){N.on("mousedown",this.handle,this.onMouseDown),N.on("mousemove",window,this.onMouseMove),N.on("mouseup",window,this.onMouseUp)}onResize(){if(this.scale=(-this.controller.maxScroll+c().window.h)/c().window.h,this.scale<=1){this.handle.style.height=0;return}this.trueSize=c().window.h/this.scale,this.handleHeight=Math.max(this.trueSize,40),this.handle.style.height=`${this.handleHeight}px`,this.maxY=c().window.h-this.handleHeight}addHTML(){if(document.querySelector(this.controller.options.scrollbarEl))return;const R=document.createElement("div");R.classList.add(this.controller.options.scrollbarEl.substring(1)),R.innerHTML=`<div class="${this.controller.options.scrollbarHandleEl.substring(1)}"><div></div></div>`,document.body.appendChild(R)}addStyles(){if(!this.controller.options.disableNativeScrollbar&&!this.controller.options.scrollbarStyles)return;let R="";this.controller.options.disableNativeScrollbar&&(R+="html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}"),this.controller.options.scrollbarStyles&&(R+=`${this.controller.options.scrollbarEl} {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch ${this.controller.options.scrollbarEl} {display:none;}${this.controller.options.scrollbarEl} > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}${this.controller.options.scrollbarEl} > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}${this.controller.options.scrollbarEl} > div > div:hover {opacity:0.9;}${this.controller.options.scrollbarEl}:hover > div, ${this.controller.options.scrollbarEl}.show > div, ${this.controller.options.scrollbarEl}.active > div {visibility:visible;}${this.controller.options.scrollbarEl}.active > div > div {opacity:0.9;}`);const P=document.createElement("style");P.styleSheet?P.styleSheet.cssText=R:P.appendChild(document.createTextNode(R)),document.getElementsByTagName("head")[0].appendChild(P)}destroy(){N.off("mousedown",this.handle,this.onMouseDown),N.off("mousemove",window,this.onMouseMove),N.off("mouseup",window,this.onMouseUp)}}function re(K,R,P){return R in K?Object.defineProperty(K,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):K[R]=P,K}class ie{constructor(R={}){re(this,"onScroll",({event:P})=>{this.scrolling||(this.toggleIframes(),this.scrolling=!0);const W=this.targetPos;if(!c().isTouch&&P.type==="wheel")P.preventDefault(),this.syncScroll=!0,this.wheeling=!0,this.targetPos+=P.deltaY*-1;else{if(this.preventResizeScroll){this.preventResizeScroll=!1;return}if(this.wheeling)return;c().isTouch&&this.options.touchScrollType==="scrollTop"?this.targetPos=this.horizontalScroll?-this.containerElement.scrollLeft:-this.containerElement.scrollTop:c().isTouch&&this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI?this.targetPos=this.horizontalScroll?-document.body.scrollLeft:-document.body.scrollTop:this.targetPos=-window.scrollY,c().isTouch&&this.options.touchScrollType!=="transform"&&(this.currentPos=this.targetPos)}this.clamp(),W!==this.targetPos&&(N.emit(z.EXTERNALSCROLL,-this.targetPos),this.options.customScrollbar&&this.scrollbar.show()),this.options.customScrollbar&&this.scrollbar.transform()}),re(this,"onRAF",()=>{if(this.testFps&&this.options.limitLerpRate&&(this.time=performance.now()*.001,this.delta=Math.min((this.time-this.startTime)*60,1),this.startTime=this.time),!this.render)return;Math.abs(this.targetPos-this.currentPos)<.5?(this.currentPos=this.targetPos,this.scrolling&&!this.syncScroll&&(this.scrolling=!1,this.options.customScrollbar&&this.scrollbar.hide(),this.toggleIframes(!0),N.emit(z.SCROLLEND,-this.targetPos)),this.syncScroll&&(window.scrollTo(0,-this.targetPos),this.syncScroll=!1,this.wheeling=!1)):this.currentPos+=(this.targetPos-this.currentPos)*this.ease*this.delta;const P=this.horizontalScroll?this.currentPos:0,W=this.horizontalScroll?0:this.currentPos;this.applyTransform(P,W),N.emit(z.EXTERNALRAF,{targetPos:-this.targetPos,currentPos:-this.currentPos})}),re(this,"onResize",()=>{if(this.scrollElementsLength>1){const W=this.scrollElements[this.scrollElementsLength-1],ae=window.getComputedStyle(W),Q=parseFloat(this.horizontalScroll?ae.marginRight:ae.marginBottom),te=W.getBoundingClientRect(),be=this.horizontalScroll?te.right:te.bottom;this.scrollLength=be+Q-this.currentPos}else this.scrollLength=this.horizontalScroll?this.scrollElements[0].scrollWidth:this.scrollElements[0].scrollHeight;const P=this.horizontalScroll?c().window.w:c().window.h;this.maxScroll=this.scrollLength>P?-(this.scrollLength-P):0,this.clamp(),this.firstResize||(this.preventResizeScroll=!0),c().isTouch&&this.options.lockIOSBrowserUI?this.containerElement.style.height=this.scrollLength+"px":c().body.style.height=this.scrollLength+"px",this.options.customScrollbar&&this.scrollbar.onResize(),this.firstResize=!1}),re(this,"toggleFixedContainer",()=>{this.containerElement.style.position="static";const P=this.currentPos;this.applyTransform(0,0),requestAnimationFrame(()=>{this.containerElement.style.position="fixed";const W=this.horizontalScroll?P:0,ae=this.horizontalScroll?0:P;this.applyTransform(W,ae)})}),this.options=R,this.targetPos=this.currentPos=this.prevScrollPos=this.maxScroll=0,this.enabled=!1,this.render=!1,this.scrolling=!1,this.wheeling=!1,this.syncScroll=!1,this.horizontalScroll=!1,this.firstResize=!0,this.preventResizeScroll=!1,this.nativeScroll=!0,this.ease=c().isTouch?this.options.touchEase:this.options.ease,this.originalScrollbarSetting=this.options.customScrollbar,this.testFps=!0,this.delta=1,this.time=this.startTime=performance.now(),this.setElements(),c().isTouch?(this.options.customScrollbar=!1,this.options.touchScrollType==="transform"?this.setupSmoothScroll():this.options.touchScrollType==="scrollTop"&&(document.documentElement.classList.add("asscroll-touch"),this.addTouchStyles(),N.on("scroll",this.containerElement,P=>{N.emit(z.INTERNALSCROLL,{event:P})},{passive:!0}))):this.setupSmoothScroll(),this.addEvents()}setElements(){this.containerElement=typeof this.options.containerElement=="string"?document.querySelector(this.options.containerElement):this.options.containerElement,this.containerElement===null&&console.error("ASScroll: could not find container element"),this.containerElement.setAttribute("asscroll-container",""),this.scrollElements=typeof this.options.scrollElements=="string"?document.querySelectorAll(this.options.scrollElements):this.options.scrollElements,this.scrollElements.length&&(this.scrollElements=[...this.scrollElements]),this.scrollElements=this.scrollElements.length?this.scrollElements:[this.containerElement.firstElementChild],this.scrollElementsLength=this.scrollElements.length,this.scrollElements.forEach(R=>R.setAttribute("asscroll",""))}setupSmoothScroll(){this.nativeScroll=!1,c().isTouch&&this.options.lockIOSBrowserUI?(Object.assign(document.body.style,{position:"fixed",width:"100%",height:"100%",overflowY:"auto"}),c().html.style.overflow="hidden",this.scrollElements.forEach(R=>{R.style.position="fixed"}),N.on("scroll",document.body,R=>{N.emit(z.INTERNALSCROLL,{event:R})})):Object.assign(this.containerElement.style,{position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",contain:"content"}),this.options.customScrollbar&&(this.scrollbar=new ne(this)),N.on(z.INTERNALRAF,this.onRAF),N.on(z.RESIZE,this.onResize),this.options.limitLerpRate&&setTimeout(()=>{this.testFps=!1,this.delta=Math.round(this.delta*10)*.1},2e3)}applyTransform(R,P){for(let W=0;W<this.scrollElementsLength;W++)this.scrollElements[W].style.transform=`translate3d(${R}px, ${P}px, 0px)`}enable({newScrollElements:R=!1,reset:P=!1,restore:W=!1,horizontalScroll:ae=!1}={}){this.enabled||(this.enabled=!0,this.render=!0,this.horizontalScroll=ae,R&&(this.scrollElements=R.length?[...R]:[R],this.scrollElementsLength=this.scrollElements.length,this.scrollElements.forEach(Q=>Q.setAttribute("asscroll","")),c().isTouch&&this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI&&this.scrollElements.forEach(Q=>{Q.style.position="fixed"})),this.iframes=this.containerElement.querySelectorAll("iframe"),c().isTouch&&this.options.touchScrollType!=="transform"?(this.options.touchScrollType==="scrollTop"&&this.containerElement.style.removeProperty("overflow"),this.maxScroll=-this.containerElement.scrollHeight,P&&(this.targetPos=this.currentPos=0,this.scrollTo(0,!1))):(this.firstResize=!0,P&&(this.targetPos=this.currentPos=0,this.applyTransform(0,0)),this.onResize()),c().isTouch&&this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI&&(c().body.style.overflowY="auto",P&&document.body.scrollTo(0,0)),W&&this.scrollTo(this.prevScrollPos,!1),N.on(z.WHEEL,this.onScroll),N.on(z.INTERNALSCROLL,this.onScroll))}disable({inputOnly:R=!1}={}){!this.enabled||(this.enabled=!1,R||(this.render=!1),N.off(z.WHEEL,this.onScroll),N.off(z.INTERNALSCROLL,this.onScroll),this.prevScrollPos=this.targetPos,c().isTouch?this.options.touchScrollType==="scrollTop"?this.containerElement.style.overflow="hidden":this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI&&(c().body.style.overflowY="hidden"):c().body.style.height="0px")}clamp(){this.targetPos=Math.max(Math.min(this.targetPos,0),this.maxScroll)}scrollTo(R,P=!0){this.targetPos=R,c().isTouch&&this.options.touchScrollType!=="transform"&&(this.options.touchScrollType==="scrollTop"?this.horizontalScroll?this.containerElement.scrollTo(-this.targetPos,0):this.containerElement.scrollTo(0,-this.targetPos):window.scrollTo(0,-this.targetPos)),this.clamp(),this.syncScroll=!0,P&&N.emit(z.EXTERNALSCROLL,-this.targetPos)}toggleIframes(R){for(let P=0;P<this.iframes.length;P++)this.iframes[P].style.pointerEvents=R?"auto":"none"}blockScrollEvent(R){R.stopPropagation()}addEvents(){N.on(z.MOUSEDETECTED,()=>{this.options.touchScrollType!=="transform"&&(this.options.customScrollbar=this.originalScrollbarSetting,this.ease=this.options.ease,this.setupSmoothScroll(),this.onResize())}),c().isTouch||(N.on("mouseleave",document,()=>{window.scrollTo(0,-this.targetPos)}),N.on("keydown",window,R=>{(R.key==="ArrowUp"||R.key==="ArrowDown"||R.key==="PageUp"||R.key==="PageDown"||R.key==="Home"||R.key==="End"||R.key==="Tab")&&window.scrollTo(0,-this.targetPos),R.key==="Tab"&&this.toggleFixedContainer()}),N.delegate("click",'a[href^="#"]',this.toggleFixedContainer),N.delegate("wheel",this.options.blockScrollClass,this.blockScrollEvent))}addTouchStyles(){const R=".asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}",P=document.createElement("style");P.styleSheet?P.styleSheet.cssText=R:P.appendChild(document.createTextNode(R)),document.getElementsByTagName("head")[0].appendChild(P)}}function fe(K,R,P){return R in K?Object.defineProperty(K,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):K[R]=P,K}class Me{constructor(R={}){fe(this,"update",()=>{this.events.onRaf()}),fe(this,"resize",Z=>{this.events.onResize(Z)});const{containerElement:P="[asscroll-container]",scrollElements:W="[asscroll]",ease:ae=.075,touchEase:Q=1,touchScrollType:te="none",lockIOSBrowserUI:be=!1,scrollbarEl:Ae=".asscrollbar",scrollbarHandleEl:De=".asscrollbar__handle",customScrollbar:H=!0,scrollbarStyles:ke=!0,disableNativeScrollbar:we=!0,disableRaf:lt=!1,disableResize:ct=!1,limitLerpRate:L=!0,blockScrollClass:w=".asscroll-block"}=R;this.events=new z({disableRaf:lt,disableResize:ct}),this.controller=new ie({containerElement:P,scrollElements:W,ease:ae,touchEase:Q,customScrollbar:H,lockIOSBrowserUI:be,scrollbarEl:Ae,scrollbarHandleEl:De,scrollbarStyles:ke,disableNativeScrollbar:we,touchScrollType:te,limitLerpRate:L,blockScrollClass:w})}enable(R){R!==void 0&&typeof R!="object"&&console.warn("ASScroll: Please pass an object with your parameters. Since 2.0"),this.controller.enable(R)}disable(R){R!==void 0&&typeof R!="object"&&console.warn("ASScroll: Please pass an object with your parameters. Since 2.0"),this.controller.disable(R)}on(R,P){if(typeof P!="function"){console.error("ASScroll: Function not provided as second parameter");return}if(R==="scroll"){N.on(z.EXTERNALSCROLL,P);return}if(R==="update"){N.on(z.EXTERNALRAF,P);return}if(R==="scrollEnd"){N.on(z.SCROLLEND,P);return}console.warn(`ASScroll: "${R}" is not a valid event`)}off(R,P){if(typeof P!="function"){console.error("ASScroll: Function not provided as second parameter");return}if(R==="scroll"){N.off(z.EXTERNALSCROLL,P);return}if(R==="update"){N.off(z.EXTERNALRAF,P);return}if(R==="scrollEnd"){N.off(z.SCROLLEND,P);return}console.warn(`ASScroll: "${R}" is not a valid event`)}scrollTo(R,P=!0){this.controller.scrollTo(-R,P)}get targetPos(){return-this.controller.targetPos}get currentPos(){return-this.controller.currentPos}set currentPos(R){this.controller.targetPos=this.controller.currentPos=-R}get maxScroll(){return-this.controller.maxScroll}get containerElement(){return this.controller.containerElement}get scrollElements(){return this.controller.scrollElements}get isHorizontal(){return this.controller.horizontalScroll}get isScrollJacking(){return!this.controller.nativeScroll&&this.controller.enabled}get scrollPos(){}get smoothScrollPos(){}onRaf(){}onResize(){}}var j=Me}(),r=r.default,r}()})})(Kp);var Mw=Hy(Kp.exports);class ww{constructor(){this.experience=new vn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.camera=this.experience.camera,this.actualBike=this.experience.world.bike.actualBike,this.bikeChildren=this.experience.world.bike.bikeChildren,this.zoom={zoomValue:this.camera.perspectiveCamera.zoom},ut.registerPlugin(Ye),document.querySelector(".page").style.overflow="visible",/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(console.log("desktop"),this.setSmoothScroll()),this.setScrollTrigger()}setupASScroll(){const e=new Mw({disableRaf:!0});return ut.ticker.add(e.update),Ye.defaults({scroller:e.containerElement}),Ye.scrollerProxy(e.containerElement,{scrollTop(t){if(arguments.length){e.currentPos=t;return}return e.currentPos},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},fixedMarkers:!0}),e.on("update",Ye.update),Ye.addEventListener("refresh",e.resize),requestAnimationFrame(()=>{e.enable({newScrollElements:document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")})}),e}setSmoothScroll(){this.asscroll=this.setupASScroll()}reset(){this.actualBike.scale.set(.65,.65,.65),this.actualBike.position.set(0,0,0),this.actualBike.rotation.y=0,this.camera.perspectiveCamera.position.x=0,this.camera.perspectiveCamera.position.y=.5,this.camera.perspectiveCamera.position.z=4,this.camera.perspectiveCamera.zoom=1,this.zoom.zoomValue=1}resetMobile(){this.actualBike.scale.set(.5,.5,.5),this.actualBike.rotation.set(0,-Math.PI/2,0),this.actualBike.position.set(0,0,0),this.camera.perspectiveCamera.position.x=0,this.camera.perspectiveCamera.position.y=.4,this.camera.perspectiveCamera.position.z=4,this.camera.perspectiveCamera.zoom=1,this.zoom.zoomValue=1}setScrollTrigger(){Ye.matchMedia({"(min-width: 969px)":()=>{this.reset(),this.firstMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).fromTo(this.actualBike.rotation,{y:0},{y:Math.PI},"same").fromTo(this.camera.perspectiveCamera.position,{x:0,y:.5,z:4},{x:()=>this.sizes.width>1300&&this.sizes.height<1e3?-5.2:-5,y:6},"same").fromTo(this.camera.perspectiveCamera.rotation,{x:.0374824366916615,y:0,z:-0},{x:-.81,y:-.5324252706006514,z:-.45011986145587835},"same").to(this.zoom,{zoomValue:3,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same"),this.secondMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.actualBike.rotation,{y:-Math.PI/4},"same").to(this.camera.perspectiveCamera.position,{x:()=>this.sizes.width>1300&&this.sizes.height<1e3?-6.7:-7,y:2},"same").to(this.camera.perspectiveCamera.rotation,{x:-.3340156231020234,y:-1.0505564481189775,z:-.2924724024454449},"same").to(this.zoom,{zoomValue:3,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same"),this.thirdMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".third-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.actualBike.rotation,{y:-Math.PI},"same").to(this.camera.perspectiveCamera.position,{x:()=>this.sizes.width>1300&&this.sizes.height<1e3?-4.25:-4.1,y:3},"same").to(this.camera.perspectiveCamera.rotation,{x:-.33669463959268153,y:-.700986700755924,z:-.22203253193071731},"same").to(this.zoom,{zoomValue:2.5,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same"),this.fourthMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".fourth-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.actualBike.rotation,{y:-Math.PI/2},"same").to(this.camera.perspectiveCamera.position,{x:()=>this.sizes.width>1300&&this.sizes.height<1e3?2.2:2,y:1,z:4},"same").to(this.camera.perspectiveCamera.rotation,{x:-.02845135092188762,y:.29416856071633857,z:.008251344278639},"same").to(this.zoom,{zoomValue:1,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same")},"(max-width: 968px)":()=>{this.resetMobile(),this.firstMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).fromTo(this.actualBike.rotation,{y:-Math.PI/2},{y:Math.PI/1},"same").fromTo(this.camera.perspectiveCamera.position,{x:0,y:.4,z:4},{x:-4.82,y:3,z:4},"same").fromTo(this.camera.perspectiveCamera.rotation,{x:.0374824366916615,y:0,z:-0},{x:-.4826867099146418,y:-.7487373908008822,z:-.3426445418872183},"same").to(this.zoom,{zoomValue:2.3,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same"),this.secondMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.actualBike.rotation,{y:-Math.PI/4},"same").to(this.camera.perspectiveCamera.position,{x:-7,y:2},"same").to(this.camera.perspectiveCamera.rotation,{x:-.36830437274233147,y:-.975248930241726,z:-.30922701986576173},"same").to(this.zoom,{zoomValue:2.5,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same"),this.thirdMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".third-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.actualBike.rotation,{y:-Math.PI},"same").to(this.camera.perspectiveCamera.position,{x:-4.15,y:1.7},"same").to(this.camera.perspectiveCamera.rotation,{x:-.15,y:-.82433683382151,z:-.17595910659449646},"same").to(this.zoom,{zoomValue:3.5,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same"),this.fourthMoveTimeline=new ut.timeline({scrollTrigger:{trigger:".fourth-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.actualBike.rotation,{y:-Math.PI/1.5},"same").to(this.camera.perspectiveCamera.position,{x:-4.1,y:.5},"same").to(this.zoom,{zoomValue:1.5,onUpdate:()=>{this.camera.perspectiveCamera.zoom=this.zoom.zoomValue,this.camera.perspectiveCamera.updateProjectionMatrix()}},"same").to(this.camera.perspectiveCamera.rotation,{x:-.0212333950806064,y:-.81785674319681,z:-.015494714435393457},"same")},all:()=>{this.sections=document.querySelectorAll(".section"),this.sections.forEach(e=>{this.progressWrapper=e.querySelector(".progress-wrapper"),this.progressBar=e.querySelector(".progress-bar"),e.classList.contains("right")?(ut.to(e,{borderTopLeftRadius:10,scrollTrigger:{trigger:e,start:"top bottom",end:"top top",scrub:.6}}),ut.to(e,{borderBottomLeftRadius:700,scrollTrigger:{trigger:e,start:"bottom bottom",end:"bottom top",scrub:.6}})):(ut.to(e,{borderTopRightRadius:10,scrollTrigger:{trigger:e,start:"top bottom",end:"top top",scrub:.6}}),ut.to(e,{borderBottomRightRadius:700,scrollTrigger:{trigger:e,start:"bottom bottom",end:"bottom top",scrub:.6}})),ut.from(this.progressBar,{scaleY:0,scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:.4,pin:this.progressWrapper,pinSpacing:!1}})})}})}resize(){}update(){}}const xo=class{constructor(e){if(xo.instance)return xo.instance;xo.instance=this,this.canvas=e,this.scene=new ay,this.debug=new Hb,this.sizes=new Ky,this.time=new Zy,this.camera=new Xb,this.renderer=new jb,this.resources=new Rb(Wb),this.theme=new nw,this.world=new ow,this.preloader=new tw,this.preloader.on("enableControls",()=>{this.controls=new ww}),this.sizes.on("resize",()=>{this.resize()}),this.time.on("update",()=>{this.update()})}resize(){this.camera.resize(),this.world.resize(),this.renderer.resize()}update(){this.preloader.update(),this.camera.update(),this.world.update(),this.renderer.update(),this.controls&&this.controls.update()}};let vn=xo;yu(vn,"instance");new vn(document.querySelector(".experience-canvas"));

var $l="165";var $d=0,dh=1,Jd=2;var Hu=1,Kd=2,Xn=3,mi=0,Ge=1,Yn=2,di=0,Ns=1,wr=2,ph=3,mh=4,Qd=5,Hi=100,jd=101,tp=102,ep=103,np=104,ip=200,sp=201,rp=202,ap=203,fl=204,dl=205,op=206,lp=207,cp=208,hp=209,up=210,fp=211,dp=212,pp=213,mp=214,gp=0,_p=1,xp=2,Ta=3,vp=4,yp=5,Mp=6,Sp=7,Gu=0,bp=1,wp=2,pi=0,Tp=1,Ap=2,Ep=3,Cp=4,Rp=5,Pp=6,Ip=7;var Wu=300,zs=301,ks=302,pl=303,ml=304,ja=306,gl=1e3,Wi=1001,_l=1002,an=1003,Lp=1004;var Qr=1005;var _n=1006,Uo=1007;var Xi=1008;var gi=1009,Dp=1010,Up=1011,Aa=1012,Xu=1013,Vs=1014,fi=1015,to=1016,qu=1017,Yu=1018,Hs=1020,Np=35902,Op=1021,Fp=1022,Rn=1023,Bp=1024,zp=1025,Os=1026,Gs=1027,kp=1028,Zu=1029,Vp=1030,$u=1031,Ju=1033,No=33776,Oo=33777,Fo=33778,Bo=33779,gh=35840,_h=35841,xh=35842,vh=35843,yh=36196,Mh=37492,Sh=37496,bh=37808,wh=37809,Th=37810,Ah=37811,Eh=37812,Ch=37813,Rh=37814,Ph=37815,Ih=37816,Lh=37817,Dh=37818,Uh=37819,Nh=37820,Oh=37821,zo=36492,Fh=36494,Bh=36495,Hp=36283,zh=36284,kh=36285,Vh=36286;var Ea=2300,xl=2301,ko=2302,Hh=2400,Gh=2401,Wh=2402;var Gp=3200,Wp=3201,Xp=0,qp=1,ui="",En="srgb",yi="srgb-linear",Jl="display-p3",eo="display-p3-linear",Ca="linear",te="srgb",Ra="rec709",Pa="p3";var ps=7680;var Xh=519,Yp=512,Zp=513,$p=514,Ku=515,Jp=516,Kp=517,Qp=518,jp=519,qh=35044,no=35048;var Yh="300 es",Zn=2e3,Ia=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,Mr=Math.PI/180,Tr=180/Math.PI;function qs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function Kl(s,t){return(s%t+t)%t}function tm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function em(s,t,e){return s!==t?(e-s)/(t-s):0}function Sr(s,t,e){return(1-e)*s+e*t}function nm(s,t,e,n){return Sr(s,t,1-Math.exp(-e*n))}function im(s,t=1){return t-Math.abs(Kl(s,t*2)-t)}function sm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function rm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function am(s,t){return s+Math.floor(Math.random()*(t-s+1))}function om(s,t){return s+Math.random()*(t-s)}function lm(s){return s*(.5-Math.random())}function cm(s){s!==void 0&&(Zh=s);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hm(s){return s*Mr}function um(s){return s*Tr}function fm(s){return(s&s-1)===0&&s!==0}function dm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mm(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Is(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Qu={DEG2RAD:Mr,RAD2DEG:Tr,generateUUID:qs,clamp:Be,euclideanModulo:Kl,mapLinear:tm,inverseLerp:em,lerp:Sr,damp:nm,pingpong:im,smoothstep:sm,smootherstep:rm,randInt:am,randFloat:om,randFloatSpread:lm,seededRandom:cm,degToRad:hm,radToDeg:um,isPowerOfTwo:fm,ceilPowerOfTwo:dm,floorPowerOfTwo:pm,setQuaternionFromProperEuler:mm,normalize:Oe,denormalize:Is},Xt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ct=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],_=n[8],g=i[0],d=i[3],p=i[6],b=i[1],v=i[4],M=i[7],E=i[2],T=i[5],A=i[8];return r[0]=a*g+o*b+l*E,r[3]=a*d+o*v+l*T,r[6]=a*p+o*M+l*A,r[1]=c*g+h*b+f*E,r[4]=c*d+h*v+f*T,r[7]=c*p+h*M+f*A,r[2]=u*g+m*b+_*E,r[5]=u*d+m*v+_*T,r[8]=u*p+m*M+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,m=c*r-a*l,_=e*f+n*u+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new Ct;function ju(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function La(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gm(){let s=La("canvas");return s.style.display="block",s}var $h={};function tf(s){s in $h||($h[s]=!0,console.warn(s))}function _m(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Jh=new Ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new Ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[yi]:{transfer:Ca,primaries:Ra,toReference:s=>s,fromReference:s=>s},[En]:{transfer:te,primaries:Ra,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[eo]:{transfer:Ca,primaries:Pa,toReference:s=>s.applyMatrix3(Kh),fromReference:s=>s.applyMatrix3(Jh)},[Jl]:{transfer:te,primaries:Pa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Kh),fromReference:s=>s.applyMatrix3(Jh).convertLinearToSRGB()}},xm=new Set([yi,eo]),Zt={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=jr[t].toReference,i=jr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return jr[s].primaries},getTransfer:function(s){return s===ui?Ca:jr[s].transfer}};function Fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ms,vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=La("canvas")),ms.width=t.width,ms.height=t.height;let n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Fs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vm=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Go(i[a].image)):r.push(Go(i[a]))}else r=Go(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ym=0,on=class s extends _i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Wi,i=Wi,r=_n,a=Xi,o=Rn,l=gi,c=s.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=qs(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gl:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gl:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Wu;on.DEFAULT_ANISOTROPY=1;var Ee=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],_=l[9],g=l[2],d=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(m+1)/2,E=(p+1)/2,T=(h+u)/4,A=(f+g)/4,I=(_+d)/4;return v>M&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=A/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=I/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=I/r),this.set(n,i,r,e),this}let b=Math.sqrt((d-_)*(d-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(d-_)/b,this.y=(f-g)/b,this.z=(u-h)/b,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ua=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==u||c!==m||h!==_){let d=1-o,p=l*u+c*m+h*_+f*g,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),T=Math.atan2(E,p*b);d=Math.sin(d*T)/E,o=Math.sin(o*T)/E}let M=o*b;if(l=l*d+u*M,c=c*d+m*M,h=h*d+_*M,f=f*d+g*M,d===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*f+l*m-c*u,t[e+1]=l*_+h*u+c*f-o*m,t[e+2]=c*_+h*m+o*u-l*f,t[e+3]=h*_-o*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"YZX":this._x=u*h*f+c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f-u*m*_;break;case"XZY":this._x=u*h*f-c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new k,Qh=new xi,qi=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),ea.subVectors(this.max,mr),gs.subVectors(t.a,mr),_s.subVectors(t.b,mr),xs.subVectors(t.c,mr),ri.subVectors(_s,gs),ai.subVectors(xs,_s),Ni.subVectors(gs,xs);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ni.z,Ni.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ni.z,0,-Ni.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ni.y,Ni.x,0];return!Xo(e,gs,_s,xs,ea)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,gs,_s,xs,ea))?!1:(na.crossVectors(ri,ai),e=[na.x,na.y,na.z],Xo(e,gs,_s,xs,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,ta=new qi,gs=new k,_s=new k,xs=new k,ri=new k,ai=new k,Ni=new k,mr=new k,ea=new k,na=new k,Oi=new k;function Xo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);let o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Mm=new qi,gr=new k,qo=new k,Yi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(qo)),this.expandByPoint(gr.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new k,Yo=new k,ia=new k,oi=new k,Zo=new k,sa=new k,$o=new k,Ar=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yo.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ia),o=oi.dot(this.direction),l=-oi.dot(ia),c=oi.lengthSq(),h=Math.abs(1-a*a),f,u,m,_;if(h>0)if(f=a*l-o,u=a*o-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let g=1/h;f*=g,u*=g,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Yo).addScaledVector(ia,u),m}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){Zo.subVectors(e,t),sa.subVectors(n,t),$o.crossVectors(Zo,sa);let a=this.direction.dot($o),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot(sa.crossVectors(oi,sa));if(l<0)return null;let c=o*this.direction.dot(Zo.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot($o);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class s{constructor(t,e,n,i,r,a,o,l,c,h,f,u,m,_,g,d){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,m,_,g,d)}set(t,e,n,i,r,a,o,l,c,h,f,u,m,_,g,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=m,p[7]=_,p[11]=g,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),a=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*f,_=c*h,g=c*f;e[0]=u+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*f,_=c*h,g=c*f;e[0]=u-g*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+g,e[1]=l*f,e[5]=g*c+u,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*f,e[8]=_*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+_,e[10]=u-g*f}else if(t.order==="XZY"){let u=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+g,e[5]=a*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sm,t,bm)}lookAt(t,e,n){let i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),li.crossVectors(n,Ke),li.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),li.crossVectors(n,Ke)),li.normalize(),ra.crossVectors(Ke,li),i[0]=li.x,i[4]=ra.x,i[8]=Ke.x,i[1]=li.y,i[5]=ra.y,i[9]=Ke.y,i[2]=li.z,i[6]=ra.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],_=n[2],g=n[6],d=n[10],p=n[14],b=n[3],v=n[7],M=n[11],E=n[15],T=i[0],A=i[4],I=i[8],y=i[12],x=i[1],R=i[5],C=i[9],L=i[13],N=i[2],B=i[6],z=i[10],q=i[14],H=i[3],rt=i[7],at=i[11],ct=i[15];return r[0]=a*T+o*x+l*N+c*H,r[4]=a*A+o*R+l*B+c*rt,r[8]=a*I+o*C+l*z+c*at,r[12]=a*y+o*L+l*q+c*ct,r[1]=h*T+f*x+u*N+m*H,r[5]=h*A+f*R+u*B+m*rt,r[9]=h*I+f*C+u*z+m*at,r[13]=h*y+f*L+u*q+m*ct,r[2]=_*T+g*x+d*N+p*H,r[6]=_*A+g*R+d*B+p*rt,r[10]=_*I+g*C+d*z+p*at,r[14]=_*y+g*L+d*q+p*ct,r[3]=b*T+v*x+M*N+E*H,r[7]=b*A+v*R+M*B+E*rt,r[11]=b*I+v*C+M*z+E*at,r[15]=b*y+v*L+M*q+E*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],m=t[14],_=t[3],g=t[7],d=t[11],p=t[15];return _*(+r*l*f-i*c*f-r*o*u+n*c*u+i*o*m-n*l*m)+g*(+e*l*m-e*c*u+r*a*u-i*a*m+i*c*h-r*l*h)+d*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-e*l*f+e*o*u+i*a*f-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],m=t[11],_=t[12],g=t[13],d=t[14],p=t[15],b=f*d*c-g*u*c+g*l*m-o*d*m-f*l*p+o*u*p,v=_*u*c-h*d*c-_*l*m+a*d*m+h*l*p-a*u*p,M=h*g*c-_*f*c+_*o*m-a*g*m-h*o*p+a*f*p,E=_*f*l-h*g*l-_*o*u+a*g*u+h*o*d-a*f*d,T=e*b+n*v+i*M+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=b*A,t[1]=(g*u*r-f*d*r-g*i*m+n*d*m+f*i*p-n*u*p)*A,t[2]=(o*d*r-g*l*r+g*i*c-n*d*c-o*i*p+n*l*p)*A,t[3]=(f*l*r-o*u*r-f*i*c+n*u*c+o*i*m-n*l*m)*A,t[4]=v*A,t[5]=(h*d*r-_*u*r+_*i*m-e*d*m-h*i*p+e*u*p)*A,t[6]=(_*l*r-a*d*r-_*i*c+e*d*c+a*i*p-e*l*p)*A,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*m+e*l*m)*A,t[8]=M*A,t[9]=(_*f*r-h*g*r-_*n*m+e*g*m+h*n*p-e*f*p)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*m-e*o*m)*A,t[12]=E*A,t[13]=(h*g*i-_*f*i+_*n*u-e*g*u-h*n*d+e*f*d)*A,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*d-e*o*d)*A,t[15]=(a*f*i-h*o*i+h*n*l-e*f*l-a*n*u+e*o*u)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,m=r*h,_=r*f,g=a*h,d=a*f,p=o*f,b=l*c,v=l*h,M=l*f,E=n.x,T=n.y,A=n.z;return i[0]=(1-(g+p))*E,i[1]=(m+M)*E,i[2]=(_-v)*E,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(u+p))*T,i[6]=(d+b)*T,i[7]=0,i[8]=(_+v)*A,i[9]=(d-b)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=vs.set(i[0],i[1],i[2]).length(),a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);let c=1/r,h=1/a,f=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),m,_;if(o===Zn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ia)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Zn){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(a-r),u=(e+t)*c,m=(n+i)*h,_,g;if(o===Zn)_=(a+r)*f,g=-2*f;else if(o===Ia)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new k,mn=new me,Sm=new k(0,0,0),bm=new k(1,1,1),li=new k,ra=new k,Ke=new k,jh=new me,tu=new xi,Jn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wm=0,eu=new k,ys=new xi,Hn=new me,aa=new k,_r=new k,Tm=new k,Am=new xi,nu=new k(1,0,0),iu=new k(0,1,0),su=new k(0,0,1),ru={type:"added"},Em={type:"removed"},Ms={type:"childadded",child:null},Jo={type:"childremoved",child:null},je=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new Jn,n=new xi,i=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Ct}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(_r,aa,this.up):Hn.lookAt(aa,_r,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(Hn),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};je.DEFAULT_UP=new k(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new k,Gn=new k,Ko=new k,Wn=new k,Ss=new k,bs=new k,au=new k,Qo=new k,jo=new k,tl=new k,Ls=class s{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){gn.subVectors(i,e),Gn.subVectors(n,e),Ko.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Gn),l=gn.dot(Ko),c=Gn.dot(Gn),h=Gn.dot(Ko),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),Gn.subVectors(t,e),gn.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ss.subVectors(i,n),bs.subVectors(r,n),Qo.subVectors(t,n);let l=Ss.dot(Qo),c=bs.dot(Qo);if(l<=0&&c<=0)return e.copy(n);jo.subVectors(t,i);let h=Ss.dot(jo),f=bs.dot(jo);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ss,a);tl.subVectors(t,r);let m=Ss.dot(tl),_=bs.dot(tl);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(bs,o);let d=h*_-m*f;if(d<=0&&f-h>=0&&m-_>=0)return au.subVectors(r,i),o=(f-h)/(f-h+(m-_)),e.copy(i).addScaledVector(au,o);let p=1/(d+g+u);return a=g*p,o=u*p,e.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},oa={h:0,s:0,l:0};function el(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Kl(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=el(a,r,t+1/3),this.g=el(a,r,t),this.b=el(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Zt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Be(Ie.r*255,0,255))*65536+Math.round(Be(Ie.g*255,0,255))*256+Math.round(Be(Ie.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=En){Zt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,i=Ie.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(oa);let n=Sr(ci.h,oa.h,e),i=Sr(ci.s,oa.s,e),r=Sr(ci.l,oa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Ht;Ht.NAMES=ef;var Cm=0,vi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Ns,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oa=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new k,la=new Xt,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return tf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qh&&(t.usage=this.usage),t}};var Fa=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ba=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var vn=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rm=0,rn=new me,nl=new je,ws=new k,Qe=new qi,xr=new qi,we=new k,ln=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Ba:Fa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Qe.min,xr.min),Qe.expandByPoint(we),we.addVectors(Qe.max,xr.max),Qe.expandByPoint(we)):(Qe.expandByPoint(xr.min),Qe.expandByPoint(xr.max))}Qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(t,c),we.add(ws)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new k,l[I]=new k;let c=new k,h=new k,f=new k,u=new Xt,m=new Xt,_=new Xt,g=new k,d=new k;function p(I,y,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),u.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,x),h.sub(c),f.sub(c),m.sub(u),_.sub(u);let R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(R),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(R),o[I].add(g),o[y].add(g),o[x].add(g),l[I].add(d),l[y].add(d),l[x].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,y=b.length;I<y;++I){let x=b[I],R=x.start,C=x.count;for(let L=R,N=R+C;L<N;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new k,M=new k,E=new k,T=new k;function A(I){E.fromBufferAttribute(i,I),T.copy(E);let y=o[I];v.copy(y),v.sub(E.multiplyScalar(E.dot(y))).normalize(),M.crossVectors(T,y);let R=M.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,R)}for(let I=0,y=b.length;I<y;++I){let x=b[I],R=x.start,C=x.count;for(let L=R,N=R+C;L<N;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),g=t.getX(u+1),d=t.getX(u+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,d),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[m++]}return new Te(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new me,Fi=new Ar,ca=new Yi,lu=new k,Ts=new k,As=new k,Es=new k,il=new k,ha=new k,ua=new Xt,fa=new Xt,da=new Xt,cu=new k,hu=new k,uu=new k,pa=new k,ma=new k,xn=class extends je{constructor(t=new ln,e=new Oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(il.fromBufferAttribute(f,t),a?ha.addScaledVector(il,h):ha.addScaledVector(il.sub(e),h))}e.add(ha)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(ca.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ca,lu)===null||Fi.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(ou.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let d=u[_],p=a[d.materialIndex],b=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=b,E=v;M<E;M+=3){let T=o.getX(M),A=o.getX(M+1),I=o.getX(M+2);i=ga(this,p,t,n,c,h,f,T,A,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{let _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let d=_,p=g;d<p;d+=3){let b=o.getX(d),v=o.getX(d+1),M=o.getX(d+2);i=ga(this,a,t,n,c,h,f,b,v,M),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let d=u[_],p=a[d.materialIndex],b=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let M=b,E=v;M<E;M+=3){let T=M,A=M+1,I=M+2;i=ga(this,p,t,n,c,h,f,T,A,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=_,p=g;d<p;d+=3){let b=d,v=d+1,M=d+2;i=ga(this,a,t,n,c,h,f,b,v,M),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}};function Pm(s,t,e,n,i,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===mi,o),l===null)return null;ma.copy(o),ma.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ma);return c<e.near||c>e.far?null:{distance:c,point:ma.clone(),object:s}}function ga(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ts),s.getVertexPosition(l,As),s.getVertexPosition(c,Es);let h=Pm(s,t,e,n,Ts,As,Es,pa);if(h){i&&(ua.fromBufferAttribute(i,o),fa.fromBufferAttribute(i,l),da.fromBufferAttribute(i,c),h.uv=Ls.getInterpolation(pa,Ts,As,Es,ua,fa,da,new Xt)),r&&(ua.fromBufferAttribute(r,o),fa.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),h.uv1=Ls.getInterpolation(pa,Ts,As,Es,ua,fa,da,new Xt)),a&&(cu.fromBufferAttribute(a,o),hu.fromBufferAttribute(a,l),uu.fromBufferAttribute(a,c),h.normal=Ls.getInterpolation(pa,Ts,As,Es,cu,hu,uu,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Ls.getNormal(Ts,As,Es,f.normal),h.face=f}return h}var Er=class s extends ln{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(h,3)),this.setAttribute("uv",new vn(f,2));function _(g,d,p,b,v,M,E,T,A,I,y){let x=M/A,R=E/I,C=M/2,L=E/2,N=T/2,B=A+1,z=I+1,q=0,H=0,rt=new k;for(let at=0;at<z;at++){let ct=at*R-L;for(let Mt=0;Mt<B;Mt++){let Ut=Mt*x-C;rt[g]=Ut*b,rt[d]=ct*v,rt[p]=N,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[d]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(Mt/A),f.push(1-at/I),q+=1}}for(let at=0;at<I;at++)for(let ct=0;ct<A;ct++){let Mt=u+ct+B*at,Ut=u+ct+B*(at+1),X=u+(ct+1)+B*(at+1),J=u+(ct+1)+B*at;l.push(Mt,Ut,J),l.push(Ut,X,J),H+=6}o.addGroup(m,H,y),m+=H,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){let t={};for(let e=0;e<s.length;e++){let n=Ws(s[e]);for(let i in n)t[i]=n[i]}return t}function Im(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Lm={clone:Ws,merge:Fe},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},za=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new k,fu=new Xt,du=new Xt,ze=class extends za{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,fu,du),e.subVectors(du,fu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cs=-90,Rs=1,Sl=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ze(Cs,Rs,t,e);i.layers=this.layers,this.add(i);let r=new ze(Cs,Rs,t,e);r.layers=this.layers,this.add(r);let a=new ze(Cs,Rs,t,e);a.layers=this.layers,this.add(a);let o=new ze(Cs,Rs,t,e);o.layers=this.layers,this.add(o);let l=new ze(Cs,Rs,t,e);l.layers=this.layers,this.add(l);let c=new ze(Cs,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ka=class extends on{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bl=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ka(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Er(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:di});r.uniforms.tEquirect.value=e;let a=new xn(i,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=_n),new Sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},sl=new k,Nm=new k,Om=new Ct,qn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=sl.subVectors(n,e).cross(Nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Om.getNormalMatrix(t),i=this.coplanarPoint(sl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new Yi,_a=new k,Va=class{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],m=i[8],_=i[9],g=i[10],d=i[11],p=i[12],b=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,u-c,d-m,M-p).normalize(),n[1].setComponents(l+r,u+c,d+m,M+p).normalize(),n[2].setComponents(l+a,u+h,d+_,M+b).normalize(),n[3].setComponents(l-a,u-h,d-_,M-b).normalize(),n[4].setComponents(l-o,u-f,d-g,M-v).normalize(),e===Zn)n[5].setComponents(l+o,u+f,d+g,M+v).normalize();else if(e===Ia)n[5].setComponents(o,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(_a.x=i.normal.x>0?t.max.x:t.min.x,_a.y=i.normal.y>0?t.max.y:t.min.y,_a.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fm(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l._updateRange,u=l.updateRanges;if(s.bindBuffer(c,o),f.count===-1&&u.length===0&&s.bufferSubData(c,0,h),u.length!==0){for(let m=0,_=u.length;m<_;m++){let g=u[m];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(s.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ha=class s extends ln{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,m=[],_=[],g=[],d=[];for(let p=0;p<h;p++){let b=p*u-a;for(let v=0;v<c;v++){let M=v*f-r;_.push(M,-b,0),g.push(0,0,1),d.push(v/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let v=b+c*p,M=b+c*(p+1),E=b+1+c*(p+1),T=b+1+c*p;m.push(v,M,T),m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,og=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S_=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,E_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,W_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,X_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,q_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,n0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,a0=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:km,alphamap_pars_fragment:Vm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:Zm,beginnormal_vertex:$m,bsdfs:Jm,iridescence_fragment:Km,bumpmap_pars_fragment:Qm,clipping_planes_fragment:jm,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:eg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:ag,common:og,cube_uv_reflection_fragment:lg,defaultnormal_vertex:cg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Pg,envmap_vertex:yg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:bg,fog_pars_fragment:wg,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Cg,lights_pars_begin:Rg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ug,lights_physical_fragment:Ng,lights_physical_pars_fragment:Og,lights_fragment_begin:Fg,lights_fragment_maps:Bg,lights_fragment_end:zg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:$g,morphinstance_vertex:Jg,morphcolor_vertex:Kg,morphnormal_vertex:Qg,morphtarget_pars_vertex:jg,morphtarget_vertex:t_,normal_fragment_begin:e_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:d_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:__,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:b_,skinning_pars_vertex:w_,skinning_vertex:T_,skinnormal_vertex:A_,specularmap_fragment:E_,specularmap_pars_fragment:C_,tonemapping_fragment:R_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:L_,uv_pars_fragment:D_,uv_pars_vertex:U_,uv_vertex:N_,worldpos_vertex:O_,background_vert:F_,background_frag:B_,backgroundCube_vert:z_,backgroundCube_frag:k_,cube_vert:V_,cube_frag:H_,depth_vert:G_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:Y_,equirect_frag:Z_,linedashed_vert:$_,linedashed_frag:J_,meshbasic_vert:K_,meshbasic_frag:Q_,meshlambert_vert:j_,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:f0,shadow_vert:d0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},nt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Cn={basic:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Fe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Fe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Fe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Fe([nt.points,nt.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Fe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Fe([nt.common,nt.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Fe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Fe([nt.sprite,nt.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Fe([nt.common,nt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Fe([nt.lights,nt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Cn.physical={uniforms:Fe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var xa={r:0,b:0,g:0},zi=new Jn,_0=new me;function x0(s,t,e,n,i,r,a){let o=new Ht(0),l=r===!0?0:1,c,h,f=null,u=0,m=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function g(b){let v=!1,M=_(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function d(b,v){let M=_(v);M&&(M.isCubeTexture||M.mapping===ja)?(h===void 0&&(h=new xn(new Er(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ws(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(zi)),h.material.toneMapped=Zt.getTransfer(M.colorSpace)!==te,(f!==M||u!==M.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,m=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xn(new Ha(2,2),new cn({name:"BackgroundMaterial",uniforms:Ws(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,m=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(xa,nf(s)),n.buffers.color.setClear(xa.r,xa.g,xa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:g,addToRenderList:d}}function v0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(x,R,C,L,N){let B=!1,z=f(L,C,R);r!==z&&(r=z,c(r.object)),B=m(x,L,C,N),B&&_(x,L,C,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(x,R,C,L),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function f(x,R,C){let L=C.wireframe===!0,N=n[x.id];N===void 0&&(N={},n[x.id]=N);let B=N[R.id];B===void 0&&(B={},N[R.id]=B);let z=B[L];return z===void 0&&(z=u(l()),B[L]=z),z}function u(x){let R=[],C=[],L=[];for(let N=0;N<e;N++)R[N]=0,C[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:L,object:x,attributes:{},index:null}}function m(x,R,C,L){let N=r.attributes,B=R.attributes,z=0,q=C.getAttributes();for(let H in q)if(q[H].location>=0){let at=N[H],ct=B[H];if(ct===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),at===void 0||at.attribute!==ct||ct&&at.data!==ct.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function _(x,R,C,L){let N={},B=R.attributes,z=0,q=C.getAttributes();for(let H in q)if(q[H].location>=0){let at=B[H];at===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));let ct={};ct.attribute=at,at&&at.data&&(ct.data=at.data),N[H]=ct,z++}r.attributes=N,r.attributesNum=z,r.index=L}function g(){let x=r.newAttributes;for(let R=0,C=x.length;R<C;R++)x[R]=0}function d(x){p(x,0)}function p(x,R){let C=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;C[x]=1,L[x]===0&&(s.enableVertexAttribArray(x),L[x]=1),N[x]!==R&&(s.vertexAttribDivisor(x,R),N[x]=R)}function b(){let x=r.newAttributes,R=r.enabledAttributes;for(let C=0,L=R.length;C<L;C++)R[C]!==x[C]&&(s.disableVertexAttribArray(C),R[C]=0)}function v(x,R,C,L,N,B,z){z===!0?s.vertexAttribIPointer(x,R,C,N,B):s.vertexAttribPointer(x,R,C,L,N,B)}function M(x,R,C,L){g();let N=L.attributes,B=C.getAttributes(),z=R.defaultAttributeValues;for(let q in B){let H=B[q];if(H.location>=0){let rt=N[q];if(rt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){let at=rt.normalized,ct=rt.itemSize,Mt=t.get(rt);if(Mt===void 0)continue;let Ut=Mt.buffer,X=Mt.type,J=Mt.bytesPerElement,ft=X===s.INT||X===s.UNSIGNED_INT||rt.gpuType===Xu;if(rt.isInterleavedBufferAttribute){let ot=rt.data,Lt=ot.stride,Rt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)p(H.location+kt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<H.locationSize;kt++)d(H.location+kt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let kt=0;kt<H.locationSize;kt++)v(H.location+kt,ct/H.locationSize,X,at,Lt*J,(Rt+ct/H.locationSize*kt)*J,ft)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot,rt.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let ot=0;ot<H.locationSize;ot++)v(H.location+ot,ct/H.locationSize,X,at,ct*J,ct/H.locationSize*ot*J,ft)}}else if(z!==void 0){let at=z[q];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(H.location,at);break;case 3:s.vertexAttrib3fv(H.location,at);break;case 4:s.vertexAttrib4fv(H.location,at);break;default:s.vertexAttrib1fv(H.location,at)}}}}b()}function E(){I();for(let x in n){let R=n[x];for(let C in R){let L=R[C];for(let N in L)h(L[N].object),delete L[N];delete R[C]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let C in R){let L=R[C];for(let N in L)h(L[N].object),delete L[N];delete R[C]}delete n[x.id]}function A(x){for(let R in n){let C=n[R];if(C[x.id]===void 0)continue;let L=C[x.id];for(let N in L)h(L[N].object),delete L[N];delete C[x.id]}}function I(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:d,disableUnusedAttributes:b}}function y0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<f;m++)this.render(c[m],h[m]);else{u.multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];e.update(m,n,1)}}function l(c,h,f,u){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];for(let g=0;g<u.length;g++)e.update(_,n,u[g])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function M0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Rn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let A=T===to&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==gi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fi&&!A)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:M,maxSamples:E}}function S0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new qn,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||i;return i=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let _=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,p=s.get(f);if(!i||_===null||_.length===0||r&&!d)r?h(null):c();else{let b=r?0:n,v=b*4,M=p.clippingState||null;l.value=M,M=h(_,u,v,m);for(let E=0;E!==v;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,_){let g=f!==null?f.length:0,d=null;if(g!==0){if(d=l.value,_!==!0||d===null){let p=m+g*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,M=m;v!==g;++v,M+=4)a.copy(f[v]).applyMatrix4(b,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function b0(s){let t=new WeakMap;function e(a,o){return o===pl?a.mapping=zs:o===ml&&(a.mapping=ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pl||o===ml)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bl(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wl=class extends za{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ds=4,pu=[.125,.215,.35,.446,.526,.582],Gi=20,rl=new wl,mu=new Ht,al=null,ol=0,ll=0,cl=!1,Vi=(1+Math.sqrt(5))/2,Ps=1/Vi,gu=[new k(-Vi,Ps,0),new k(Vi,Ps,0),new k(-Ps,0,Vi),new k(Ps,0,Vi),new k(0,Vi,-Ps),new k(0,Vi,Ps),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,ol,ll),this._renderer.xr.enabled=cl,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:to,format:Rn,colorSpace:yi,depthBuffer:!1},i=_u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w0(r)),this._blurMaterial=T0(r,t,e)}return i}_compileMaterial(t){let e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,n,i){let o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(mu),h.toneMapping=pi,h.autoClear=!1;let m=new Oa({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new xn(new Er,m),g=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,g=!0):(m.color.copy(mu),g=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;va(i,b*v,p>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===zs||t.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gu[(i-r-1)%gu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new xn(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Gi-1),g=r/_,d=isFinite(r)?1+Math.floor(h*g):Gi;d>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Gi}`);let p=[],b=0;for(let A=0;A<Gi;++A){let I=A/g,y=Math.exp(-I*I/2);p.push(y),A===0?b+=y:A<d&&(b+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-n;let M=this._sizeLods[i],E=3*M*(i>v-Ds?i-v+Ds:0),T=4*(this._cubeSize-M);va(e,E,T,3*M,2*M),l.setRenderTarget(e),l.render(f,rl)}};function w0(s){let t=[],e=[],n=[],i=s,r=s-Ds+1+pu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ds?l=pu[a-s+Ds-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,g=3,d=2,p=1,b=new Float32Array(g*_*m),v=new Float32Array(d*_*m),M=new Float32Array(p*_*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,I=T>2?0:-1,y=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(y,g*_*T),v.set(u,d*_*T);let x=[T,T,T,T,T,T];M.set(x,p*_*T)}let E=new ln;E.setAttribute("position",new Te(b,g)),E.setAttribute("uv",new Te(v,d)),E.setAttribute("faceIndex",new Te(M,p)),t.push(E),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _u(s,t,e){let n=new $n(s,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function T0(s,t,e){let n=new Float32Array(Gi),i=new k(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function xu(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function vu(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function A0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===pl||l===ml,h=l===zs||l===ks;if(c||h){let f=t.get(o),u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Ga(s)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Ga(s)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function E0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&tf("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function C0(s,t,e,n){let i={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let g=u.morphAttributes[_];for(let d=0,p=g.length;d<p;d++)t.remove(g[d])}u.removeEventListener("dispose",a),delete i[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],s.ARRAY_BUFFER);let m=f.morphAttributes;for(let _ in m){let g=m[_];for(let d=0,p=g.length;d<p;d++)t.update(g[d],s.ARRAY_BUFFER)}}function c(f){let u=[],m=f.index,_=f.attributes.position,g=0;if(m!==null){let b=m.array;g=m.version;for(let v=0,M=b.length;v<M;v+=3){let E=b[v+0],T=b[v+1],A=b[v+2];u.push(E,T,T,A,A,E)}}else if(_!==void 0){let b=_.array;g=_.version;for(let v=0,M=b.length/3-1;v<M;v+=3){let E=v+0,T=v+1,A=v+2;u.push(E,T,T,A,A,E)}}else return;let d=new(ju(u)?Ba:Fa)(u,1);d.version=g;let p=r.get(f);p&&t.remove(p),r.set(f,d)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function R0(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,m){s.drawElements(n,m,r,u*a),e.update(m,n,1)}function c(u,m,_){_!==0&&(s.drawElementsInstanced(n,m,r,u*a,_),e.update(m,n,_))}function h(u,m,_){if(_===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<_;d++)this.render(u[d]/a,m[d]);else{g.multiDrawElementsWEBGL(n,m,0,r,u,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p];e.update(d,n,1)}}function f(u,m,_,g){if(_===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u.length;p++)c(u[p]/a,m[p],g[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b];for(let b=0;b<g.length;b++)e.update(p,n,g[b])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function P0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function I0(s,t,e){let n=new WeakMap,i=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let M=o.attributes.position.count*v,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*E*4*f),A=new Ua(T,M,E,f);A.type=fi,A.needsUpdate=!0;let I=v*4;for(let x=0;x<f;x++){let R=d[x],C=p[x],L=b[x],N=M*E*4*x;for(let B=0;B<R.count;B++){let z=B*I;m===!0&&(i.fromBufferAttribute(R,B),T[N+z+0]=i.x,T[N+z+1]=i.y,T[N+z+2]=i.z,T[N+z+3]=0),_===!0&&(i.fromBufferAttribute(C,B),T[N+z+4]=i.x,T[N+z+5]=i.y,T[N+z+6]=i.z,T[N+z+7]=0),g===!0&&(i.fromBufferAttribute(L,B),T[N+z+8]=i.x,T[N+z+9]=i.y,T[N+z+10]=i.z,T[N+z+11]=L.itemSize===4?i.w:1)}}u={count:f,texture:A,size:new Xt(M,E)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function L0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Wa=class extends on{constructor(t,e,n,i,r,a,o,l,c,h=Os){if(h!==Os&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Os&&(n=Vs),n===void 0&&h===Gs&&(n=Hs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rf=new on,af=new Wa(1,1);af.compareFunction=Ku;var of=new Ua,lf=new Ml,cf=new ka,yu=[],Mu=[],Su=new Float32Array(16),bu=new Float32Array(9),wu=new Float32Array(4);function Ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=yu[i];if(r===void 0&&(r=new Float32Array(i),yu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function io(s,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function D0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function N0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function F0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;wu.set(n),s.uniformMatrix2fv(this.addr,!1,wu),ve(e,n)}}function B0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;bu.set(n),s.uniformMatrix3fv(this.addr,!1,bu),ve(e,n)}}function z0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Su.set(n),s.uniformMatrix4fv(this.addr,!1,Su),ve(e,n)}}function k0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function V0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function G0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function W0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function X0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function Z0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?af:rf;e.setTexture2D(t||r,i)}function $0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lf,i)}function J0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cf,i)}function K0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||of,i)}function Q0(s){switch(s){case 5126:return D0;case 35664:return U0;case 35665:return N0;case 35666:return O0;case 35674:return F0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return k0;case 35667:case 35671:return V0;case 35668:case 35672:return H0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}}function j0(s,t){s.uniform1fv(this.addr,t)}function tx(s,t){let e=Ys(t,this.size,2);s.uniform2fv(this.addr,e)}function ex(s,t){let e=Ys(t,this.size,3);s.uniform3fv(this.addr,e)}function nx(s,t){let e=Ys(t,this.size,4);s.uniform4fv(this.addr,e)}function ix(s,t){let e=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sx(s,t){let e=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rx(s,t){let e=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ax(s,t){s.uniform1iv(this.addr,t)}function ox(s,t){s.uniform2iv(this.addr,t)}function lx(s,t){s.uniform3iv(this.addr,t)}function cx(s,t){s.uniform4iv(this.addr,t)}function hx(s,t){s.uniform1uiv(this.addr,t)}function ux(s,t){s.uniform2uiv(this.addr,t)}function fx(s,t){s.uniform3uiv(this.addr,t)}function dx(s,t){s.uniform4uiv(this.addr,t)}function px(s,t,e){let n=this.cache,i=t.length,r=io(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rf,r[a])}function mx(s,t,e){let n=this.cache,i=t.length,r=io(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||lf,r[a])}function gx(s,t,e){let n=this.cache,i=t.length,r=io(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cf,r[a])}function _x(s,t,e){let n=this.cache,i=t.length,r=io(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||of,r[a])}function xx(s){switch(s){case 5126:return j0;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xx(e.type)}},El=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function Tu(s,t){s.seq.push(t),s.map[t.id]=t}function vx(s,t,e){let n=s.name,i=n.length;for(hl.lastIndex=0;;){let r=hl.exec(n),a=hl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tu(e,c===void 0?new Tl(o,s,t):new Al(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new El(o),Tu(e,f)),e=f}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);vx(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Au(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var yx=37297,Mx=0;function Sx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function bx(s){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s),n;switch(t===e?n="":t===Pa&&e===Ra?n="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Pa&&(n="LinearSRGBToLinearDisplayP3"),s){case yi:case eo:return[n,"LinearTransferOETF"];case En:case Jl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Eu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Sx(s.getShaderSource(t),a)}else return i}function wx(s,t){let e=bx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tx(s,t){let e;switch(t){case Tp:e="Linear";break;case Ap:e="Reinhard";break;case Ep:e="OptimizedCineon";break;case Cp:e="ACESFilmic";break;case Pp:e="AgX";break;case Ip:e="Neutral";break;case Rp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ax(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Ex(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function yr(s){return s!==""}function Cu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(s){return s.replace(Rx,Ix)}var Px=new Map;function Ix(s,t){let e=Et[t];if(e===void 0){let n=Px.get(t);if(n!==void 0)e=Et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(s){return s.replace(Lx,Dx)}function Dx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Iu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ux(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case ks:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ox(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function Fx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gu:t="ENVMAP_BLENDING_MULTIPLY";break;case bp:t="ENVMAP_BLENDING_MIX";break;case wp:t="ENVMAP_BLENDING_ADD";break}return t}function Bx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ux(e),c=Nx(e),h=Ox(e),f=Fx(e),u=Bx(e),m=Ax(e),_=Ex(r),g=i.createProgram(),d,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(yr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(d=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Et.tonemapping_pars_fragment:"",e.toneMapping!==pi?Tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=Cl(a),a=Cu(a,e),a=Ru(a,e),o=Cl(o),o=Cu(o,e),o=Ru(o,e),a=Pu(a),o=Pu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+d+a,M=b+p+o,E=Au(i,i.VERTEX_SHADER,v),T=Au(i,i.FRAGMENT_SHADER,M);i.attachShader(g,E),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(R){if(s.debug.checkShaderErrors){let C=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(E).trim(),N=i.getShaderInfoLog(T).trim(),B=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,T);else{let q=Eu(i,E,"vertex"),H=Eu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+q+`
`+H)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||N==="")&&(z=!1);z&&(R.diagnostics={runnable:B,programLog:C,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:p}})}i.deleteShader(E),i.deleteShader(T),I=new Bs(i,g),y=Cx(i,g)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,yx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=T,this}var kx=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}};function Vx(s,t,e,n,i,r,a){let o=new Na,l=new Rl,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,x,R,C,L){let N=C.fog,B=L.geometry,z=y.isMeshStandardMaterial?C.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),H=q&&q.mapping===ja?q.image.height:null,rt=_[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=at!==void 0?at.length:0,Mt=0;B.morphAttributes.position!==void 0&&(Mt=1),B.morphAttributes.normal!==void 0&&(Mt=2),B.morphAttributes.color!==void 0&&(Mt=3);let Ut,X,J,ft;if(rt){let $t=Cn[rt];Ut=$t.vertexShader,X=$t.fragmentShader}else Ut=y.vertexShader,X=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),ft=l.getFragmentShaderID(y);let ot=s.getRenderTarget(),Lt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,kt=!!y.map,U=!!y.matcap,zt=!!q,Ot=!!y.aoMap,ie=!!y.lightMap,yt=!!y.bumpMap,Vt=!!y.normalMap,Dt=!!y.displacementMap,At=!!y.emissiveMap,de=!!y.metalnessMap,P=!!y.roughnessMap,S=y.anisotropy>0,W=y.clearcoat>0,$=y.dispersion>0,K=y.iridescence>0,Q=y.sheen>0,xt=y.transmission>0,it=S&&!!y.anisotropyMap,st=W&&!!y.clearcoatMap,Pt=W&&!!y.clearcoatNormalMap,j=W&&!!y.clearcoatRoughnessMap,gt=K&&!!y.iridescenceMap,Nt=K&&!!y.iridescenceThicknessMap,wt=Q&&!!y.sheenColorMap,lt=Q&&!!y.sheenRoughnessMap,It=!!y.specularMap,Ft=!!y.specularColorMap,he=!!y.specularIntensityMap,D=xt&&!!y.transmissionMap,ht=xt&&!!y.thicknessMap,Y=!!y.gradientMap,Z=!!y.alphaMap,et=y.alphaTest>0,Tt=!!y.alphaHash,Gt=!!y.extensions,ue=pi;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=s.toneMapping);let Se={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:Ut,fragmentShader:X,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&L.instanceColor!==null,instancingMorph:Lt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:yi,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:U,envMap:zt,envMapMode:zt&&q.mapping,envMapCubeUVHeight:H,aoMap:Ot,lightMap:ie,bumpMap:yt,normalMap:Vt,displacementMap:u&&Dt,emissiveMap:At,normalMapObjectSpace:Vt&&y.normalMapType===qp,normalMapTangentSpace:Vt&&y.normalMapType===Xp,metalnessMap:de,roughnessMap:P,anisotropy:S,anisotropyMap:it,clearcoat:W,clearcoatMap:st,clearcoatNormalMap:Pt,clearcoatRoughnessMap:j,dispersion:$,iridescence:K,iridescenceMap:gt,iridescenceThicknessMap:Nt,sheen:Q,sheenColorMap:wt,sheenRoughnessMap:lt,specularMap:It,specularColorMap:Ft,specularIntensityMap:he,transmission:xt,transmissionMap:D,thicknessMap:ht,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Ns&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:et,alphaHash:Tt,combine:y.combine,mapUv:kt&&g(y.map.channel),aoMapUv:Ot&&g(y.aoMap.channel),lightMapUv:ie&&g(y.lightMap.channel),bumpMapUv:yt&&g(y.bumpMap.channel),normalMapUv:Vt&&g(y.normalMap.channel),displacementMapUv:Dt&&g(y.displacementMap.channel),emissiveMapUv:At&&g(y.emissiveMap.channel),metalnessMapUv:de&&g(y.metalnessMap.channel),roughnessMapUv:P&&g(y.roughnessMap.channel),anisotropyMapUv:it&&g(y.anisotropyMap.channel),clearcoatMapUv:st&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:lt&&g(y.sheenRoughnessMap.channel),specularMapUv:It&&g(y.specularMap.channel),specularColorMapUv:Ft&&g(y.specularColorMap.channel),specularIntensityMapUv:he&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:ht&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Vt||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(kt||Z),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Mt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yn,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Gt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Gt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(x,y),v(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function b(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),y.push(o.mask)}function M(y){let x=_[y.type],R;if(x){let C=Cn[x];R=Lm.clone(C.uniforms)}else R=y.uniforms;return R}function E(y,x){let R;for(let C=0,L=h.length;C<L;C++){let N=h[C];if(N.cacheKey===x){R=N,++R.usedTimes;break}}return R===void 0&&(R=new zx(s,x,y,r),h.push(R)),R}function T(y){if(--y.usedTimes===0){let x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Hx(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Gx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Lu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Du(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,m,_,g,d){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:d},s[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=d),t++,p}function o(f,u,m,_,g,d){let p=a(f,u,m,_,g,d);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(f,u,m,_,g,d){let p=a(f,u,m,_,g,d);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||Gx),n.length>1&&n.sort(u||Lu),i.length>1&&i.sort(u||Lu)}function h(){for(let f=t,u=s.length;f<u;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Wx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Du,s.set(n,[a])):i>=r.length?(a=new Du,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Ht};break;case"SpotLight":e={position:new k,direction:new k,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function qx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Yx=0;function Zx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $x(s){let t=new Xx,e=qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new me,a=new me;function o(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,g=0,d=0,p=0,b=0,v=0,M=0,E=0,T=0,A=0;c.sort(Zx);for(let y=0,x=c.length;y<x;y++){let R=c[y],C=R.color,L=R.intensity,N=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=C.r*L,f+=C.g*L,u+=C.b*L;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],L);A++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,H=e.get(R);H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=z,m++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(C).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[g]=z;let q=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,q.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[g]=q.matrix,R.castShadow){let H=e.get(R);H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=B,M++}g++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(C).multiplyScalar(L),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=z,d++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let q=R.shadow,H=e.get(R);H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=R.shadow.matrix,v++}n.point[_]=z,_++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(L),z.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}d>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==d||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==v||I.numSpotShadows!==M||I.numSpotMaps!==E||I.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=d,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=m,I.pointLength=_,I.spotLength=g,I.rectAreaLength=d,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=v,I.numSpotShadows=M,I.numSpotMaps=E,I.numLightProbes=A,n.version=Yx++)}function l(c,h){let f=0,u=0,m=0,_=0,g=0,d=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let v=c[p];if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(d),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(d),m++}else if(v.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),u++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function Uu(s){let t=new $x(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Uu(s),t.set(i,[o])):r>=a.length?(o=new Uu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Il=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
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
}`;function jx(s,t,e){let n=new Va,i=new Xt,r=new Xt,a=new Ee,o=new Il({depthPacking:Wp}),l=new Ll,c={},h=e.maxTextureSize,f={[mi]:Ge,[Ge]:mi,[Yn]:Yn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Kx,fragmentShader:Qx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new ln;_.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new xn(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let p=this.type;this.render=function(T,A,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;let y=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),C=s.state;C.setBlending(di),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=p!==Xn&&this.type===Xn,N=p===Xn&&this.type!==Xn;for(let B=0,z=T.length;B<z;B++){let q=T[B],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||L===!0||N===!0){let ct=this.type!==Xn?{minFilter:an,magFilter:an}:{};H.map!==null&&H.map.dispose(),H.map=new $n(i.x,i.y,ct),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let at=H.getViewportCount();for(let ct=0;ct<at;ct++){let Mt=H.getViewport(ct);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),C.viewport(a),H.updateMatrices(q,ct),n=H.getFrustum(),M(A,I,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Xn&&b(H,I),H.needsUpdate=!1}p=this.type,d.needsUpdate=!1,s.setRenderTarget(y,x,R)};function b(T,A){let I=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,I,u,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,I,m,g,null)}function v(T,A,I,y){let x=null,R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let C=x.uuid,L=A.uuid,N=c[C];N===void 0&&(N={},c[C]=N);let B=N[L];B===void 0&&(B=x.clone(),N[L]=B,A.addEventListener("dispose",E)),x=B}if(x.visible=A.visible,x.wireframe=A.wireframe,y===Xn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let C=s.properties.get(x);C.light=I}return x}function M(T,A,I,y,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let L=t.update(T),N=T.material;if(Array.isArray(N)){let B=L.groups;for(let z=0,q=B.length;z<q;z++){let H=B[z],rt=N[H.materialIndex];if(rt&&rt.visible){let at=v(T,rt,y,x);T.onBeforeShadow(s,T,A,I,L,at,H),s.renderBufferDirect(I,null,L,at,T,H),T.onAfterShadow(s,T,A,I,L,at,H)}}}else if(N.visible){let B=v(T,N,y,x);T.onBeforeShadow(s,T,A,I,L,B,null),s.renderBufferDirect(I,null,L,B,T,null),T.onAfterShadow(s,T,A,I,L,B,null)}}let C=T.children;for(let L=0,N=C.length;L<N;L++)M(C[L],A,I,y,x)}function E(T){T.target.removeEventListener("dispose",E);for(let I in c){let y=c[I],x=T.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function tv(s){function t(){let D=!1,ht=new Ee,Y=null,Z=new Ee(0,0,0,0);return{setMask:function(et){Y!==et&&!D&&(s.colorMask(et,et,et,et),Y=et)},setLocked:function(et){D=et},setClear:function(et,Tt,Gt,ue,Se){Se===!0&&(et*=ue,Tt*=ue,Gt*=ue),ht.set(et,Tt,Gt,ue),Z.equals(ht)===!1&&(s.clearColor(et,Tt,Gt,ue),Z.copy(ht))},reset:function(){D=!1,Y=null,Z.set(-1,0,0,0)}}}function e(){let D=!1,ht=null,Y=null,Z=null;return{setTest:function(et){et?ft(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(et){ht!==et&&!D&&(s.depthMask(et),ht=et)},setFunc:function(et){if(Y!==et){switch(et){case gp:s.depthFunc(s.NEVER);break;case _p:s.depthFunc(s.ALWAYS);break;case xp:s.depthFunc(s.LESS);break;case Ta:s.depthFunc(s.LEQUAL);break;case vp:s.depthFunc(s.EQUAL);break;case yp:s.depthFunc(s.GEQUAL);break;case Mp:s.depthFunc(s.GREATER);break;case Sp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=et}},setLocked:function(et){D=et},setClear:function(et){Z!==et&&(s.clearDepth(et),Z=et)},reset:function(){D=!1,ht=null,Y=null,Z=null}}}function n(){let D=!1,ht=null,Y=null,Z=null,et=null,Tt=null,Gt=null,ue=null,Se=null;return{setTest:function($t){D||($t?ft(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function($t){ht!==$t&&!D&&(s.stencilMask($t),ht=$t)},setFunc:function($t,Tn,An){(Y!==$t||Z!==Tn||et!==An)&&(s.stencilFunc($t,Tn,An),Y=$t,Z=Tn,et=An)},setOp:function($t,Tn,An){(Tt!==$t||Gt!==Tn||ue!==An)&&(s.stencilOp($t,Tn,An),Tt=$t,Gt=Tn,ue=An)},setLocked:function($t){D=$t},setClear:function($t){Se!==$t&&(s.clearStencil($t),Se=$t)},reset:function(){D=!1,ht=null,Y=null,Z=null,et=null,Tt=null,Gt=null,ue=null,Se=null}}}let i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,u=[],m=null,_=!1,g=null,d=null,p=null,b=null,v=null,M=null,E=null,T=new Ht(0,0,0),A=0,I=!1,y=null,x=null,R=null,C=null,L=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,z=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=z>=2);let H=null,rt={},at=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Mt=new Ee().fromArray(at),Ut=new Ee().fromArray(ct);function X(D,ht,Y,Z){let et=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(D,Tt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Y;Gt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(ht+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return Tt}let J={};J[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),r.setFunc(Ta),yt(!1),Vt(dh),ft(s.CULL_FACE),Ot(di);function ft(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function ot(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Lt(D,ht){return h[D]!==ht?(s.bindFramebuffer(D,ht),h[D]=ht,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Rt(D,ht){let Y=u,Z=!1;if(D){Y=f.get(ht),Y===void 0&&(Y=[],f.set(ht,Y));let et=D.textures;if(Y.length!==et.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,Gt=et.length;Tt<Gt;Tt++)Y[Tt]=s.COLOR_ATTACHMENT0+Tt;Y.length=et.length,Z=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Z=!0);Z&&s.drawBuffers(Y)}function kt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let U={[Hi]:s.FUNC_ADD,[jd]:s.FUNC_SUBTRACT,[tp]:s.FUNC_REVERSE_SUBTRACT};U[ep]=s.MIN,U[np]=s.MAX;let zt={[ip]:s.ZERO,[sp]:s.ONE,[rp]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[up]:s.SRC_ALPHA_SATURATE,[cp]:s.DST_COLOR,[op]:s.DST_ALPHA,[ap]:s.ONE_MINUS_SRC_COLOR,[dl]:s.ONE_MINUS_SRC_ALPHA,[hp]:s.ONE_MINUS_DST_COLOR,[lp]:s.ONE_MINUS_DST_ALPHA,[fp]:s.CONSTANT_COLOR,[dp]:s.ONE_MINUS_CONSTANT_COLOR,[pp]:s.CONSTANT_ALPHA,[mp]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(D,ht,Y,Z,et,Tt,Gt,ue,Se,$t){if(D===di){_===!0&&(ot(s.BLEND),_=!1);return}if(_===!1&&(ft(s.BLEND),_=!0),D!==Qd){if(D!==g||$t!==I){if((d!==Hi||v!==Hi)&&(s.blendEquation(s.FUNC_ADD),d=Hi,v=Hi),$t)switch(D){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wr:s.blendFunc(s.ONE,s.ONE);break;case ph:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ph:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,b=null,M=null,E=null,T.set(0,0,0),A=0,g=D,I=$t}return}et=et||ht,Tt=Tt||Y,Gt=Gt||Z,(ht!==d||et!==v)&&(s.blendEquationSeparate(U[ht],U[et]),d=ht,v=et),(Y!==p||Z!==b||Tt!==M||Gt!==E)&&(s.blendFuncSeparate(zt[Y],zt[Z],zt[Tt],zt[Gt]),p=Y,b=Z,M=Tt,E=Gt),(ue.equals(T)===!1||Se!==A)&&(s.blendColor(ue.r,ue.g,ue.b,Se),T.copy(ue),A=Se),g=D,I=!1}function ie(D,ht){D.side===Yn?ot(s.CULL_FACE):ft(s.CULL_FACE);let Y=D.side===Ge;ht&&(Y=!Y),yt(Y),D.blending===Ns&&D.transparent===!1?Ot(di):Ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function Vt(D){D!==$d?(ft(s.CULL_FACE),D!==x&&(D===dh?s.cullFace(s.BACK):D===Jd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),x=D}function Dt(D){D!==R&&(B&&s.lineWidth(D),R=D)}function At(D,ht,Y){D?(ft(s.POLYGON_OFFSET_FILL),(C!==ht||L!==Y)&&(s.polygonOffset(ht,Y),C=ht,L=Y)):ot(s.POLYGON_OFFSET_FILL)}function de(D){D?ft(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function P(D){D===void 0&&(D=s.TEXTURE0+N-1),H!==D&&(s.activeTexture(D),H=D)}function S(D,ht,Y){Y===void 0&&(H===null?Y=s.TEXTURE0+N-1:Y=H);let Z=rt[Y];Z===void 0&&(Z={type:void 0,texture:void 0},rt[Y]=Z),(Z.type!==D||Z.texture!==ht)&&(H!==Y&&(s.activeTexture(Y),H=Y),s.bindTexture(D,ht||J[D]),Z.type=D,Z.texture=ht)}function W(){let D=rt[H];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(D){Mt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Mt.copy(D))}function lt(D){Ut.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ut.copy(D))}function It(D,ht){let Y=l.get(ht);Y===void 0&&(Y=new WeakMap,l.set(ht,Y));let Z=Y.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(ht,D.name),Y.set(D,Z))}function Ft(D,ht){let Z=l.get(ht).get(D);o.get(ht)!==Z&&(s.uniformBlockBinding(ht,Z,D.__bindingPointIndex),o.set(ht,Z))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},H=null,rt={},h={},f=new WeakMap,u=[],m=null,_=!1,g=null,d=null,p=null,b=null,v=null,M=null,E=null,T=new Ht(0,0,0),A=0,I=!1,y=null,x=null,R=null,C=null,L=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Ut.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ft,disable:ot,bindFramebuffer:Lt,drawBuffers:Rt,useProgram:kt,setBlending:Ot,setMaterial:ie,setFlipSided:yt,setCullFace:Vt,setLineWidth:Dt,setPolygonOffset:At,setScissorTest:de,activeTexture:P,bindTexture:S,unbindTexture:W,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:gt,texImage3D:Nt,updateUBOMapping:It,uniformBlockBinding:Ft,texStorage2D:Pt,texStorage3D:j,texSubImage2D:Q,texSubImage3D:xt,compressedTexSubImage2D:it,compressedTexSubImage3D:st,scissor:wt,viewport:lt,reset:he}}function ev(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return m?new OffscreenCanvas(P,S):La("canvas")}function g(P,S,W){let $=1,K=de(P);if((K.width>W||K.height>W)&&($=W/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor($*K.width),xt=Math.floor($*K.height);f===void 0&&(f=_(Q,xt));let it=S?_(Q,xt):f;return it.width=Q,it.height=xt,it.getContext("2d").drawImage(P,0,0,Q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+xt+")."),it}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==an&&P.minFilter!==_n}function p(P){s.generateMipmap(P)}function b(P,S,W,$,K=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=S;if(S===s.RED&&(W===s.FLOAT&&(Q=s.R32F),W===s.HALF_FLOAT&&(Q=s.R16F),W===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.R8UI),W===s.UNSIGNED_SHORT&&(Q=s.R16UI),W===s.UNSIGNED_INT&&(Q=s.R32UI),W===s.BYTE&&(Q=s.R8I),W===s.SHORT&&(Q=s.R16I),W===s.INT&&(Q=s.R32I)),S===s.RG&&(W===s.FLOAT&&(Q=s.RG32F),W===s.HALF_FLOAT&&(Q=s.RG16F),W===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RG8UI),W===s.UNSIGNED_SHORT&&(Q=s.RG16UI),W===s.UNSIGNED_INT&&(Q=s.RG32UI),W===s.BYTE&&(Q=s.RG8I),W===s.SHORT&&(Q=s.RG16I),W===s.INT&&(Q=s.RG32I)),S===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),S===s.RGBA){let xt=K?Ca:Zt.getTransfer($);W===s.FLOAT&&(Q=s.RGBA32F),W===s.HALF_FLOAT&&(Q=s.RGBA16F),W===s.UNSIGNED_BYTE&&(Q=xt===te?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(P,S){let W;return P?S===null||S===Vs||S===Hs?W=s.DEPTH24_STENCIL8:S===fi?W=s.DEPTH32F_STENCIL8:S===Aa&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vs||S===Hs?W=s.DEPTH_COMPONENT24:S===fi?W=s.DEPTH_COMPONENT32F:S===Aa&&(W=s.DEPTH_COMPONENT16),W}function M(P,S){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){let S=P.target;S.removeEventListener("dispose",E),A(S),S.isVideoTexture&&h.delete(S)}function T(P){let S=P.target;S.removeEventListener("dispose",T),y(S)}function A(P){let S=n.get(P);if(S.__webglInit===void 0)return;let W=P.source,$=u.get(W);if($){let K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(P),Object.keys($).length===0&&u.delete(W)}n.remove(P)}function I(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let W=P.source,$=u.get(W);delete $[S.__cacheKey],a.memory.textures--}function y(P){let S=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[$][K]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=P.textures;for(let $=0,K=W.length;$<K;$++){let Q=n.get(W[$]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(P)}let x=0;function R(){x=0}function C(){let P=x;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),x+=1,P}function L(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function N(P,S){let W=n.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(W,P,S);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+S)}function B(P,S){let W=n.get(P);if(P.version>0&&W.__version!==P.version){Ut(W,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+S)}function z(P,S){let W=n.get(P);if(P.version>0&&W.__version!==P.version){Ut(W,P,S);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+S)}function q(P,S){let W=n.get(P);if(P.version>0&&W.__version!==P.version){X(W,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+S)}let H={[gl]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[_l]:s.MIRRORED_REPEAT},rt={[an]:s.NEAREST,[Lp]:s.NEAREST_MIPMAP_NEAREST,[Qr]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Uo]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},at={[Yp]:s.NEVER,[jp]:s.ALWAYS,[Zp]:s.LESS,[Ku]:s.LEQUAL,[$p]:s.EQUAL,[Qp]:s.GEQUAL,[Jp]:s.GREATER,[Kp]:s.NOTEQUAL};function ct(P,S){if(S.type===fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===Uo||S.magFilter===Qr||S.magFilter===Xi||S.minFilter===_n||S.minFilter===Uo||S.minFilter===Qr||S.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,H[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,H[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,H[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,rt[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==Qr&&S.minFilter!==Xi||S.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Mt(P,S){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));let $=S.source,K=u.get($);K===void 0&&(K={},u.set($,K));let Q=L(S);if(Q!==P.__cacheKey){K[Q]===void 0&&(K[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),K[Q].usedTimes++;let xt=K[P.__cacheKey];xt!==void 0&&(K[P.__cacheKey].usedTimes--,xt.usedTimes===0&&I(S)),P.__cacheKey=Q,P.__webglTexture=K[Q].texture}return W}function Ut(P,S,W){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);let K=Mt(P,S),Q=S.source;e.bindTexture($,P.__webglTexture,s.TEXTURE0+W);let xt=n.get(Q);if(Q.version!==xt.__version||K===!0){e.activeTexture(s.TEXTURE0+W);let it=Zt.getPrimaries(Zt.workingColorSpace),st=S.colorSpace===ui?null:Zt.getPrimaries(S.colorSpace),Pt=S.colorSpace===ui||it===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let j=g(S.image,!1,i.maxTextureSize);j=At(S,j);let gt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),wt=b(S.internalFormat,gt,Nt,S.colorSpace,S.isVideoTexture);ct($,S);let lt,It=S.mipmaps,Ft=S.isVideoTexture!==!0,he=xt.__version===void 0||K===!0,D=Q.dataReady,ht=M(S,j);if(S.isDepthTexture)wt=v(S.format===Gs,S.type),he&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,wt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,wt,j.width,j.height,0,gt,Nt,null));else if(S.isDataTexture)if(It.length>0){Ft&&he&&e.texStorage2D(s.TEXTURE_2D,ht,wt,It[0].width,It[0].height);for(let Y=0,Z=It.length;Y<Z;Y++)lt=It[Y],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,lt.width,lt.height,gt,Nt,lt.data):e.texImage2D(s.TEXTURE_2D,Y,wt,lt.width,lt.height,0,gt,Nt,lt.data);S.generateMipmaps=!1}else Ft?(he&&e.texStorage2D(s.TEXTURE_2D,ht,wt,j.width,j.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,gt,Nt,j.data)):e.texImage2D(s.TEXTURE_2D,0,wt,j.width,j.height,0,gt,Nt,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,wt,It[0].width,It[0].height,j.depth);for(let Y=0,Z=It.length;Y<Z;Y++)if(lt=It[Y],S.format!==Rn)if(gt!==null)if(Ft){if(D)if(S.layerUpdates.size>0){for(let et of S.layerUpdates){let Tt=lt.width*lt.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,et,lt.width,lt.height,1,gt,lt.data.slice(Tt*et,Tt*(et+1)),0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,lt.width,lt.height,j.depth,gt,lt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,wt,lt.width,lt.height,j.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,lt.width,lt.height,j.depth,gt,Nt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,wt,lt.width,lt.height,j.depth,0,gt,Nt,lt.data)}else{Ft&&he&&e.texStorage2D(s.TEXTURE_2D,ht,wt,It[0].width,It[0].height);for(let Y=0,Z=It.length;Y<Z;Y++)lt=It[Y],S.format!==Rn?gt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,lt.width,lt.height,gt,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,wt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,lt.width,lt.height,gt,Nt,lt.data):e.texImage2D(s.TEXTURE_2D,Y,wt,lt.width,lt.height,0,gt,Nt,lt.data)}else if(S.isDataArrayTexture)if(Ft){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,wt,j.width,j.height,j.depth),D)if(S.layerUpdates.size>0){let Y;switch(Nt){case s.UNSIGNED_BYTE:switch(gt){case s.ALPHA:Y=1;break;case s.LUMINANCE:Y=1;break;case s.LUMINANCE_ALPHA:Y=2;break;case s.RGB:Y=3;break;case s.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${gt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Nt}.`)}let Z=j.width*j.height*Y;for(let et of S.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,gt,Nt,j.data.slice(Z*et,Z*(et+1)));S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,gt,Nt,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,j.width,j.height,j.depth,0,gt,Nt,j.data);else if(S.isData3DTexture)Ft?(he&&e.texStorage3D(s.TEXTURE_3D,ht,wt,j.width,j.height,j.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,gt,Nt,j.data)):e.texImage3D(s.TEXTURE_3D,0,wt,j.width,j.height,j.depth,0,gt,Nt,j.data);else if(S.isFramebufferTexture){if(he)if(Ft)e.texStorage2D(s.TEXTURE_2D,ht,wt,j.width,j.height);else{let Y=j.width,Z=j.height;for(let et=0;et<ht;et++)e.texImage2D(s.TEXTURE_2D,et,wt,Y,Z,0,gt,Nt,null),Y>>=1,Z>>=1}}else if(It.length>0){if(Ft&&he){let Y=de(It[0]);e.texStorage2D(s.TEXTURE_2D,ht,wt,Y.width,Y.height)}for(let Y=0,Z=It.length;Y<Z;Y++)lt=It[Y],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt,Nt,lt):e.texImage2D(s.TEXTURE_2D,Y,wt,gt,Nt,lt);S.generateMipmaps=!1}else if(Ft){if(he){let Y=de(j);e.texStorage2D(s.TEXTURE_2D,ht,wt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Nt,j)}else e.texImage2D(s.TEXTURE_2D,0,wt,gt,Nt,j);d(S)&&p($),xt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function X(P,S,W){if(S.image.length!==6)return;let $=Mt(P,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+W);let Q=n.get(K);if(K.version!==Q.__version||$===!0){e.activeTexture(s.TEXTURE0+W);let xt=Zt.getPrimaries(Zt.workingColorSpace),it=S.colorSpace===ui?null:Zt.getPrimaries(S.colorSpace),st=S.colorSpace===ui||xt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Pt=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!Pt&&!j?gt[Z]=g(S.image[Z],!0,i.maxCubemapSize):gt[Z]=j?S.image[Z].image:S.image[Z],gt[Z]=At(S,gt[Z]);let Nt=gt[0],wt=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),It=b(S.internalFormat,wt,lt,S.colorSpace),Ft=S.isVideoTexture!==!0,he=Q.__version===void 0||$===!0,D=K.dataReady,ht=M(S,Nt);ct(s.TEXTURE_CUBE_MAP,S);let Y;if(Pt){Ft&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,It,Nt.width,Nt.height);for(let Z=0;Z<6;Z++){Y=gt[Z].mipmaps;for(let et=0;et<Y.length;et++){let Tt=Y[et];S.format!==Rn?wt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et,It,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et,0,0,Tt.width,Tt.height,wt,lt,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et,It,Tt.width,Tt.height,0,wt,lt,Tt.data)}}}else{if(Y=S.mipmaps,Ft&&he){Y.length>0&&ht++;let Z=de(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,It,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,wt,lt,gt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,gt[Z].width,gt[Z].height,0,wt,lt,gt[Z].data);for(let et=0;et<Y.length;et++){let Gt=Y[et].image[Z].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et+1,0,0,Gt.width,Gt.height,wt,lt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et+1,It,Gt.width,Gt.height,0,wt,lt,Gt.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,lt,gt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,wt,lt,gt[Z]);for(let et=0;et<Y.length;et++){let Tt=Y[et];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et+1,0,0,wt,lt,Tt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et+1,It,wt,lt,Tt.image[Z])}}}d(S)&&p(s.TEXTURE_CUBE_MAP),Q.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function J(P,S,W,$,K,Q){let xt=r.convert(W.format,W.colorSpace),it=r.convert(W.type),st=b(W.internalFormat,xt,it,W.colorSpace);if(!n.get(S).__hasExternalTextures){let j=Math.max(1,S.width>>Q),gt=Math.max(1,S.height>>Q);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,Q,st,j,gt,S.depth,0,xt,it,null):e.texImage2D(K,Q,st,j,gt,0,xt,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Vt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,n.get(W).__webglTexture,0,yt(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,n.get(W).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(P,S,W){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,Q=v(S.stencilBuffer,K),xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=yt(S);Vt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,Q,S.width,S.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,P)}else{let $=S.textures;for(let K=0;K<$.length;K++){let Q=$[K],xt=r.convert(Q.format,Q.colorSpace),it=r.convert(Q.type),st=b(Q.internalFormat,xt,it,Q.colorSpace),Pt=yt(S);W&&Vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,st,S.width,S.height):Vt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,st,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,st,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let $=n.get(S.depthTexture).__webglTexture,K=yt(S);if(S.depthTexture.format===Os)Vt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===Gs)Vt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Lt(P){let S=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ot(S.__webglFramebuffer,P)}else if(W){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=s.createRenderbuffer(),ft(S.__webglDepthbuffer[$],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),ft(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(P,S,W){let $=n.get(P);S!==void 0&&J($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Lt(P)}function kt(P){let S=P.texture,W=n.get(P),$=n.get(S);P.addEventListener("dispose",T);let K=P.textures,Q=P.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let st=0;st<S.mipmaps.length;st++)W.__webglFramebuffer[it][st]=s.createFramebuffer()}else W.__webglFramebuffer[it]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)W.__webglFramebuffer[it]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(xt)for(let it=0,st=K.length;it<st;it++){let Pt=n.get(K[it]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Vt(P)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){let st=K[it];W.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let Pt=r.convert(st.format,st.colorSpace),j=r.convert(st.type),gt=b(st.internalFormat,Pt,j,st.colorSpace,P.isXRRenderTarget===!0),Nt=yt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,gt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,W.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ct(s.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)J(W.__webglFramebuffer[it][st],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else J(W.__webglFramebuffer[it],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);d(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let it=0,st=K.length;it<st;it++){let Pt=K[it],j=n.get(Pt);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),ct(s.TEXTURE_2D,Pt),J(W.__webglFramebuffer,P,Pt,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,0),d(Pt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),ct(it,S),S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)J(W.__webglFramebuffer[st],P,S,s.COLOR_ATTACHMENT0,it,st);else J(W.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,it,0);d(S)&&p(it),e.unbindTexture()}P.depthBuffer&&Lt(P)}function U(P){let S=P.textures;for(let W=0,$=S.length;W<$;W++){let K=S[W];if(d(K)){let Q=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xt=n.get(K).__webglTexture;e.bindTexture(Q,xt),p(Q),e.unbindTexture()}}}let zt=[],Ot=[];function ie(P){if(P.samples>0){if(Vt(P)===!1){let S=P.textures,W=P.width,$=P.height,K=s.COLOR_BUFFER_BIT,Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(P),it=S.length>1;if(it)for(let st=0;st<S.length;st++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let st=0;st<S.length;st++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[st]);let Pt=n.get(S[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,W,$,0,0,W,$,K,s.NEAREST),l===!0&&(zt.length=0,Ot.length=0,zt.push(s.COLOR_ATTACHMENT0+st),P.depthBuffer&&P.resolveDepthBuffer===!1&&(zt.push(Q),Ot.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let st=0;st<S.length;st++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,xt.__webglColorRenderbuffer[st]);let Pt=n.get(S[st]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function yt(P){return Math.min(i.maxSamples,P.samples)}function Vt(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Dt(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function At(P,S){let W=P.colorSpace,$=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==yi&&W!==ui&&(Zt.getTransfer(W)===te?($!==Rn||K!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function de(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=R,this.setTexture2D=N,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=Rt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Vt}function nv(s,t){function e(n,i=ui){let r,a=Zt.getTransfer(i);if(n===gi)return s.UNSIGNED_BYTE;if(n===qu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dp)return s.BYTE;if(n===Up)return s.SHORT;if(n===Aa)return s.UNSIGNED_SHORT;if(n===Xu)return s.INT;if(n===Vs)return s.UNSIGNED_INT;if(n===fi)return s.FLOAT;if(n===to)return s.HALF_FLOAT;if(n===Op)return s.ALPHA;if(n===Fp)return s.RGB;if(n===Rn)return s.RGBA;if(n===Bp)return s.LUMINANCE;if(n===zp)return s.LUMINANCE_ALPHA;if(n===Os)return s.DEPTH_COMPONENT;if(n===Gs)return s.DEPTH_STENCIL;if(n===kp)return s.RED;if(n===Zu)return s.RED_INTEGER;if(n===Vp)return s.RG;if(n===$u)return s.RG_INTEGER;if(n===Ju)return s.RGBA_INTEGER;if(n===No||n===Oo||n===Fo||n===Bo)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===_h||n===xh||n===vh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===Mh||n===Sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yh||n===Mh)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bh||n===wh||n===Th||n===Ah||n===Eh||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Uh||n===Nh||n===Oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ch)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Fh||n===Bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hp||n===zh||n===kh||n===Vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Dl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Us=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},iv={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,n),p=this._getHandJoint(c,g);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new on,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new Ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}},Nl=class extends _i{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,_=null,g=new Ul,d=e.getContextAttributes(),p=null,b=null,v=[],M=[],E=new Xt,T=null,A=new ze;A.layers.enable(1),A.viewport=new Ee;let I=new ze;I.layers.enable(2),I.viewport=new Ee;let y=[A,I],x=new Dl;x.layers.enable(1),x.layers.enable(2);let R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=v[X];return J===void 0&&(J=new br,v[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=v[X];return J===void 0&&(J=new br,v[X]=J),J.getGripSpace()},this.getHand=function(X){let J=v[X];return J===void 0&&(J=new br,v[X]=J),J.getHandSpace()};function L(X){let J=M.indexOf(X.inputSource);if(J===-1)return;let ft=v[J];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||a),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",B);for(let X=0;X<v.length;X++){let J=M[X];J!==null&&(M[X]=null,v[X].disconnect(J))}R=null,C=null,g.reset(),t.setRenderTarget(p),m=null,u=null,f=null,i=null,b=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",B),d.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let J={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new $n(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let J=null,ft=null,ot=null;d.depth&&(ot=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=d.stencil?Gs:Os,ft=d.stencil?Hs:Vs);let Lt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(Lt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new $n(u.textureWidth,u.textureHeight,{format:Rn,type:gi,depthTexture:new Wa(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(X){for(let J=0;J<X.removed.length;J++){let ft=X.removed[J],ot=M.indexOf(ft);ot>=0&&(M[ot]=null,v[ot].disconnect(ft))}for(let J=0;J<X.added.length;J++){let ft=X.added[J],ot=M.indexOf(ft);if(ot===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=M.length){M.push(ft),ot=Rt;break}else if(M[Rt]===null){M[Rt]=ft,ot=Rt;break}if(ot===-1)break}let Lt=v[ot];Lt&&Lt.connect(ft)}}let z=new k,q=new k;function H(X,J,ft){z.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ft.matrixWorld);let ot=z.distanceTo(q),Lt=J.projectionMatrix.elements,Rt=ft.projectionMatrix.elements,kt=Lt[14]/(Lt[10]-1),U=Lt[14]/(Lt[10]+1),zt=(Lt[9]+1)/Lt[5],Ot=(Lt[9]-1)/Lt[5],ie=(Lt[8]-1)/Lt[0],yt=(Rt[8]+1)/Rt[0],Vt=kt*ie,Dt=kt*yt,At=ot/(-ie+yt),de=At*-ie;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(de),X.translateZ(At),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let P=kt+At,S=U+At,W=Vt-de,$=Dt+(ot-de),K=zt*U/S*P,Q=Ot*U/S*P;X.projectionMatrix.makePerspective(W,$,K,Q,P,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function rt(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;g.texture!==null&&(X.near=g.depthNear,X.far=g.depthFar),x.near=I.near=A.near=X.near,x.far=I.far=A.far=X.far,(R!==x.near||C!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,C=x.far,A.near=R,A.far=C,I.near=R,I.far=C,A.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());let J=X.parent,ft=x.cameras;rt(x,J);for(let ot=0;ot<ft.length;ot++)rt(ft[ot],J);ft.length===2?H(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),at(X,x,J)};function at(X,J,ft){ft===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Tr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ct=null;function Mt(X,J){if(h=J.getViewerPose(c||a),_=J,h!==null){let ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ot=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Rt=0;Rt<ft.length;Rt++){let kt=ft[Rt],U=null;if(m!==null)U=m.getViewport(kt);else{let Ot=f.getViewSubImage(u,kt);U=Ot.viewport,Rt===0&&(t.setRenderTargetTextures(b,Ot.colorTexture,u.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(b))}let zt=y[Rt];zt===void 0&&(zt=new ze,zt.layers.enable(Rt),zt.viewport=new Ee,y[Rt]=zt),zt.matrix.fromArray(kt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(kt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(U.x,U.y,U.width,U.height),Rt===0&&(x.matrix.copy(zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(zt)}let Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let Rt=f.getDepthInformation(ft[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,i.renderState)}}for(let ft=0;ft<v.length;ft++){let ot=M[ft],Lt=v[ft];ot!==null&&Lt!==void 0&&Lt.update(ot,J,c||a)}ct&&ct(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let Ut=new sf;Ut.setAnimationLoop(Mt),this.setAnimationLoop=function(X){ct=X},this.dispose=function(){}}},ki=new Jn,av=new me;function ov(s,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,nf(s)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,b,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),f(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,b,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let b=t.get(p),v=b.envMap,M=b.envMapRotation;v&&(d.envMap.value=v,ki.copy(M),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),d.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(ki)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=v*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){let b=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lv(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let M=v.program;n.uniformBlockBinding(b,M)}function c(b,v){let M=i[b.id];M===void 0&&(_(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",d));let E=v.program;n.updateUBOMapping(b,E);let T=t.render.frame;r[b.id]!==T&&(u(b),r[b.id]=T)}function h(b){let v=f();b.__bindingPointIndex=v;let M=s.createBuffer(),E=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=i[b.id],M=b.uniforms,E=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,x=I.length;y<x;y++){let R=I[y];if(m(R,T,y,E)===!0){let C=R.__offset,L=Array.isArray(R.value)?R.value:[R.value],N=0;for(let B=0;B<L.length;B++){let z=L[B],q=g(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,C+N,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,v,M,E){let T=b.value,A=v+"_"+M;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let I=E[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return E[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function _(b){let v=b.uniforms,M=0,E=16;for(let A=0,I=v.length;A<I;A++){let y=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,R=y.length;x<R;x++){let C=y[x],L=Array.isArray(C.value)?C.value:[C.value];for(let N=0,B=L.length;N<B;N++){let z=L[N],q=g(z),H=M%E;H!==0&&E-H<q.boundary&&(M+=E-H),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=q.storage}}}let T=M%E;return T>0&&(M+=E-T),b.__size=M,b.__cache={},this}function g(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function d(b){let v=b.target;v.removeEventListener("dispose",d);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Xa=class{constructor(t={}){let{canvas:e=gm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let m=new Uint32Array(4),_=new Int32Array(4),g=null,d=null,p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=pi,this.toneMappingExposure=1;let v=this,M=!1,E=0,T=0,A=null,I=-1,y=null,x=new Ee,R=new Ee,C=null,L=new Ht(0),N=0,B=e.width,z=e.height,q=1,H=null,rt=null,at=new Ee(0,0,B,z),ct=new Ee(0,0,B,z),Mt=!1,Ut=new Va,X=!1,J=!1,ft=new me,ot=new k,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function kt(){return A===null?q:1}let U=n;function zt(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",Z,!1),U===null){let O="webgl2";if(U=zt(O,w),U===null)throw zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,ie,yt,Vt,Dt,At,de,P,S,W,$,K,Q,xt,it,st,Pt,j,gt,Nt,wt,lt,It,Ft;function he(){Ot=new E0(U),Ot.init(),lt=new nv(U,Ot),ie=new M0(U,Ot,t,lt),yt=new tv(U),Vt=new P0(U),Dt=new Hx,At=new ev(U,Ot,yt,Dt,ie,lt,Vt),de=new b0(v),P=new A0(v),S=new Fm(U),It=new v0(U,S),W=new C0(U,S,Vt,It),$=new L0(U,W,S,Vt),gt=new I0(U,ie,At),st=new S0(Dt),K=new Vx(v,de,P,Ot,ie,It,st),Q=new ov(v,Dt),xt=new Wx,it=new Jx(Ot),j=new x0(v,de,P,yt,$,u,l),Pt=new jx(v,$,ie),Ft=new lv(U,Vt,ie,yt),Nt=new y0(U,Ot,Vt),wt=new R0(U,Ot,Vt),Vt.programs=K.programs,v.capabilities=ie,v.extensions=Ot,v.properties=Dt,v.renderLists=xt,v.shadowMap=Pt,v.state=yt,v.info=Vt}he();let D=new Nl(v,U);this.xr=D,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(B,z,!1))},this.getSize=function(w){return w.set(B,z)},this.setSize=function(w,O,V=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,z=O,e.width=Math.floor(w*q),e.height=Math.floor(O*q),V===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(B*q,z*q).floor()},this.setDrawingBufferSize=function(w,O,V){B=w,z=O,q=V,e.width=Math.floor(w*V),e.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,O,V,G){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,O,V,G),yt.viewport(x.copy(at).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,O,V,G){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,O,V,G),yt.scissor(R.copy(ct).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){yt.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(w=!0,O=!0,V=!0){let G=0;if(w){let F=!1;if(A!==null){let tt=A.texture.format;F=tt===Ju||tt===$u||tt===Zu}if(F){let tt=A.texture.type,ut=tt===gi||tt===Vs||tt===Aa||tt===Hs||tt===qu||tt===Yu,dt=j.getClearColor(),mt=j.getClearAlpha(),St=dt.r,bt=dt.g,vt=dt.b;ut?(m[0]=St,m[1]=bt,m[2]=vt,m[3]=mt,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=St,_[1]=bt,_[2]=vt,_[3]=mt,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT),V&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),it.dispose(),Dt.dispose(),de.dispose(),P.dispose(),$.dispose(),It.dispose(),Ft.dispose(),K.dispose(),D.dispose(),D.removeEventListener("sessionstart",Tn),D.removeEventListener("sessionend",An),Di.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=Vt.autoReset,O=Pt.enabled,V=Pt.autoUpdate,G=Pt.needsUpdate,F=Pt.type;he(),Vt.autoReset=w,Pt.enabled=O,Pt.autoUpdate=V,Pt.needsUpdate=G,Pt.type=F}function Z(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){let O=w.target;O.removeEventListener("dispose",et),Tt(O)}function Tt(w){Gt(w),Dt.remove(w)}function Gt(w){let O=Dt.get(w).programs;O!==void 0&&(O.forEach(function(V){K.releaseProgram(V)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,G,F,tt){O===null&&(O=Lt);let ut=F.isMesh&&F.matrixWorld.determinant()<0,dt=Xd(w,O,V,G,F);yt.setMaterial(G,ut);let mt=V.index,St=1;if(G.wireframe===!0){if(mt=W.getWireframeAttribute(V),mt===void 0)return;St=2}let bt=V.drawRange,vt=V.attributes.position,Wt=bt.start*St,ae=(bt.start+bt.count)*St;tt!==null&&(Wt=Math.max(Wt,tt.start*St),ae=Math.min(ae,(tt.start+tt.count)*St)),mt!==null?(Wt=Math.max(Wt,0),ae=Math.min(ae,mt.count)):vt!=null&&(Wt=Math.max(Wt,0),ae=Math.min(ae,vt.count));let oe=ae-Wt;if(oe<0||oe===1/0)return;It.setup(F,G,dt,V,mt);let Je,Yt=Nt;if(mt!==null&&(Je=S.get(mt),Yt=wt,Yt.setIndex(Je)),F.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*kt()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(F.isLine){let _t=G.linewidth;_t===void 0&&(_t=1),yt.setLineWidth(_t*kt()),F.isLineSegments?Yt.setMode(U.LINES):F.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else F.isPoints?Yt.setMode(U.POINTS):F.isSprite&&Yt.setMode(U.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?Yt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):Yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Yt.renderInstances(Wt,oe,F.count);else if(V.isInstancedBufferGeometry){let _t=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ne=Math.min(V.instanceCount,_t);Yt.renderInstances(Wt,oe,Ne)}else Yt.render(Wt,oe)};function ue(w,O,V){w.transparent===!0&&w.side===Yn&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,Jr(w,O,V),w.side=mi,w.needsUpdate=!0,Jr(w,O,V),w.side=Yn):Jr(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),d=it.get(V),d.init(O),b.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let G=new Set;return w.traverse(function(F){let tt=F.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){let dt=tt[ut];ue(dt,V,F),G.add(dt)}else ue(tt,V,F),G.add(tt)}),b.pop(),d=null,G},this.compileAsync=function(w,O,V=null){let G=this.compile(w,O,V);return new Promise(F=>{function tt(){if(G.forEach(function(ut){Dt.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){F(w);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Se=null;function $t(w){Se&&Se(w)}function Tn(){Di.stop()}function An(){Di.start()}let Di=new sf;Di.setAnimationLoop($t),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(w){Se=w,D.setAnimationLoop(w),w===null?Di.stop():Di.start()},D.addEventListener("sessionstart",Tn),D.addEventListener("sessionend",An),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(O),O=D.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,A),d=it.get(w,b.length),d.init(O),b.push(d),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ut.setFromProjectionMatrix(ft),J=this.localClippingEnabled,X=st.init(this.clippingPlanes,J),g=xt.get(w,p.length),g.init(),p.push(g),D.enabled===!0&&D.isPresenting===!0){let tt=v.xr.getDepthSensingMesh();tt!==null&&Po(tt,O,-1/0,v.sortObjects)}Po(w,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(H,rt),Rt=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Rt&&j.addToRenderList(g,w),this.info.render.frame++,X===!0&&st.beginShadows();let V=d.state.shadowsArray;Pt.render(V,w,O),X===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,F=g.transmissive;if(d.setupLights(),O.isArrayCamera){let tt=O.cameras;if(F.length>0)for(let ut=0,dt=tt.length;ut<dt;ut++){let mt=tt[ut];lh(G,F,w,mt)}Rt&&j.render(w);for(let ut=0,dt=tt.length;ut<dt;ut++){let mt=tt[ut];oh(g,w,mt,mt.viewport)}}else F.length>0&&lh(G,F,w,O),Rt&&j.render(w),oh(g,w,O);A!==null&&(At.updateMultisampleRenderTarget(A),At.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,O),It.resetDefaultState(),I=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],X===!0&&st.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Po(w,O,V,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ut.intersectsSprite(w)){G&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);let ut=$.update(w),dt=w.material;dt.visible&&g.push(w,ut,dt,V,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ut.intersectsObject(w))){let ut=$.update(w),dt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),ot.copy(ut.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(dt)){let mt=ut.groups;for(let St=0,bt=mt.length;St<bt;St++){let vt=mt[St],Wt=dt[vt.materialIndex];Wt&&Wt.visible&&g.push(w,ut,Wt,V,ot.z,vt)}}else dt.visible&&g.push(w,ut,dt,V,ot.z,null)}}let tt=w.children;for(let ut=0,dt=tt.length;ut<dt;ut++)Po(tt[ut],O,V,G)}function oh(w,O,V,G){let F=w.opaque,tt=w.transmissive,ut=w.transparent;d.setupLightsView(V),X===!0&&st.setGlobalState(v.clippingPlanes,V),G&&yt.viewport(x.copy(G)),F.length>0&&$r(F,O,V),tt.length>0&&$r(tt,O,V),ut.length>0&&$r(ut,O,V),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function lh(w,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?to:gi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let tt=d.state.transmissionRenderTarget[G.id],ut=G.viewport||x;tt.setSize(ut.z,ut.w);let dt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(L),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),Rt?j.render(V):v.clear();let mt=v.toneMapping;v.toneMapping=pi;let St=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),X===!0&&st.setGlobalState(v.clippingPlanes,G),$r(w,V,G),At.updateMultisampleRenderTarget(tt),At.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let vt=0,Wt=O.length;vt<Wt;vt++){let ae=O[vt],oe=ae.object,Je=ae.geometry,Yt=ae.material,_t=ae.group;if(Yt.side===Yn&&oe.layers.test(G.layers)){let Ne=Yt.side;Yt.side=Ge,Yt.needsUpdate=!0,ch(oe,V,G,Je,Yt,_t),Yt.side=Ne,Yt.needsUpdate=!0,bt=!0}}bt===!0&&(At.updateMultisampleRenderTarget(tt),At.updateRenderTargetMipmap(tt))}v.setRenderTarget(dt),v.setClearColor(L,N),St!==void 0&&(G.viewport=St),v.toneMapping=mt}function $r(w,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,tt=w.length;F<tt;F++){let ut=w[F],dt=ut.object,mt=ut.geometry,St=G===null?ut.material:G,bt=ut.group;dt.layers.test(V.layers)&&ch(dt,O,V,mt,St,bt)}}function ch(w,O,V,G,F,tt){w.onBeforeRender(v,O,V,G,F,tt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,O,V,G,w,tt),F.transparent===!0&&F.side===Yn&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,v.renderBufferDirect(V,O,G,F,w,tt),F.side=mi,F.needsUpdate=!0,v.renderBufferDirect(V,O,G,F,w,tt),F.side=Yn):v.renderBufferDirect(V,O,G,F,w,tt),w.onAfterRender(v,O,V,G,F,tt)}function Jr(w,O,V){O.isScene!==!0&&(O=Lt);let G=Dt.get(w),F=d.state.lights,tt=d.state.shadowsArray,ut=F.state.version,dt=K.getParameters(w,F.state,tt,O,V),mt=K.getProgramCacheKey(dt),St=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?P:de).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,St===void 0&&(w.addEventListener("dispose",et),St=new Map,G.programs=St);let bt=St.get(mt);if(bt!==void 0){if(G.currentProgram===bt&&G.lightsStateVersion===ut)return uh(w,dt),bt}else dt.uniforms=K.getUniforms(w),w.onBuild(V,dt,v),w.onBeforeCompile(dt,v),bt=K.acquireProgram(dt,mt),St.set(mt,bt),G.uniforms=dt.uniforms;let vt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(vt.clippingPlanes=st.uniform),uh(w,dt),G.needsLights=Yd(w),G.lightsStateVersion=ut,G.needsLights&&(vt.ambientLightColor.value=F.state.ambient,vt.lightProbe.value=F.state.probe,vt.directionalLights.value=F.state.directional,vt.directionalLightShadows.value=F.state.directionalShadow,vt.spotLights.value=F.state.spot,vt.spotLightShadows.value=F.state.spotShadow,vt.rectAreaLights.value=F.state.rectArea,vt.ltc_1.value=F.state.rectAreaLTC1,vt.ltc_2.value=F.state.rectAreaLTC2,vt.pointLights.value=F.state.point,vt.pointLightShadows.value=F.state.pointShadow,vt.hemisphereLights.value=F.state.hemi,vt.directionalShadowMap.value=F.state.directionalShadowMap,vt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,vt.spotShadowMap.value=F.state.spotShadowMap,vt.spotLightMatrix.value=F.state.spotLightMatrix,vt.spotLightMap.value=F.state.spotLightMap,vt.pointShadowMap.value=F.state.pointShadowMap,vt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=bt,G.uniformsList=null,bt}function hh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Bs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function uh(w,O){let V=Dt.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Xd(w,O,V,G,F){O.isScene!==!0&&(O=Lt),At.resetTextureUnits();let tt=O.fog,ut=G.isMeshStandardMaterial?O.environment:null,dt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yi,mt=(G.isMeshStandardMaterial?P:de).get(G.envMap||ut),St=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,bt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),vt=!!V.morphAttributes.position,Wt=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color,oe=pi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(oe=v.toneMapping);let Je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Yt=Je!==void 0?Je.length:0,_t=Dt.get(G),Ne=d.state.lights;if(X===!0&&(J===!0||w!==y)){let sn=w===y&&G.id===I;st.setState(G,w,sn)}let Jt=!1;G.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ne.state.version||_t.outputColorSpace!==dt||F.isBatchedMesh&&_t.batching===!1||!F.isBatchedMesh&&_t.batching===!0||F.isBatchedMesh&&_t.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&_t.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&_t.instancing===!1||!F.isInstancedMesh&&_t.instancing===!0||F.isSkinnedMesh&&_t.skinning===!1||!F.isSkinnedMesh&&_t.skinning===!0||F.isInstancedMesh&&_t.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&_t.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&_t.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&_t.instancingMorph===!1&&F.morphTexture!==null||_t.envMap!==mt||G.fog===!0&&_t.fog!==tt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==st.numPlanes||_t.numIntersection!==st.numIntersection)||_t.vertexAlphas!==St||_t.vertexTangents!==bt||_t.morphTargets!==vt||_t.morphNormals!==Wt||_t.morphColors!==ae||_t.toneMapping!==oe||_t.morphTargetsCount!==Yt)&&(Jt=!0):(Jt=!0,_t.__version=G.version);let zn=_t.currentProgram;Jt===!0&&(zn=Jr(G,O,F));let Kr=!1,Ui=!1,Io=!1,be=zn.getUniforms(),si=_t.uniforms;if(yt.useProgram(zn.program)&&(Kr=!0,Ui=!0,Io=!0),G.id!==I&&(I=G.id,Ui=!0),Kr||y!==w){be.setValue(U,"projectionMatrix",w.projectionMatrix),be.setValue(U,"viewMatrix",w.matrixWorldInverse);let sn=be.map.cameraPosition;sn!==void 0&&sn.setValue(U,ot.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&be.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ui=!0,Io=!0)}if(F.isSkinnedMesh){be.setOptional(U,F,"bindMatrix"),be.setOptional(U,F,"bindMatrixInverse");let sn=F.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),be.setValue(U,"boneTexture",sn.boneTexture,At))}F.isBatchedMesh&&(be.setOptional(U,F,"batchingTexture"),be.setValue(U,"batchingTexture",F._matricesTexture,At),be.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(U,"batchingColorTexture",F._colorsTexture,At));let Lo=V.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0)&&gt.update(F,V,zn),(Ui||_t.receiveShadow!==F.receiveShadow)&&(_t.receiveShadow=F.receiveShadow,be.setValue(U,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(si.envMap.value=mt,si.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(si.envMapIntensity.value=O.environmentIntensity),Ui&&(be.setValue(U,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&qd(si,Io),tt&&G.fog===!0&&Q.refreshFogUniforms(si,tt),Q.refreshMaterialUniforms(si,G,q,z,d.state.transmissionRenderTarget[w.id]),Bs.upload(U,hh(_t),si,At)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bs.upload(U,hh(_t),si,At),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(U,"center",F.center),be.setValue(U,"modelViewMatrix",F.modelViewMatrix),be.setValue(U,"normalMatrix",F.normalMatrix),be.setValue(U,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let sn=G.uniformsGroups;for(let Do=0,Zd=sn.length;Do<Zd;Do++){let fh=sn[Do];Ft.update(fh,zn),Ft.bind(fh,zn)}}return zn}function qd(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Yd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,V){Dt.get(w.texture).__webglTexture=O,Dt.get(w.depthTexture).__webglTexture=V;let G=Dt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let V=Dt.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){A=w,E=O,T=V;let G=!0,F=null,tt=!1,ut=!1;if(w){let mt=Dt.get(w);mt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):mt.__webglFramebuffer===void 0?At.setupRenderTarget(w):mt.__hasExternalTextures&&At.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);let St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ut=!0);let bt=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(bt[O])?F=bt[O][V]:F=bt[O],tt=!0):w.samples>0&&At.useMultisampledRTT(w)===!1?F=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[V]:F=bt,x.copy(w.viewport),R.copy(w.scissor),C=w.scissorTest}else x.copy(at).multiplyScalar(q).floor(),R.copy(ct).multiplyScalar(q).floor(),C=Mt;if(yt.bindFramebuffer(U.FRAMEBUFFER,F)&&G&&yt.drawBuffers(w,F),yt.viewport(x),yt.scissor(R),yt.setScissorTest(C),tt){let mt=Dt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,mt.__webglTexture,V)}else if(ut){let mt=Dt.get(w.texture),St=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,V||0,St)}I=-1},this.readRenderTargetPixels=function(w,O,V,G,F,tt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){yt.bindFramebuffer(U.FRAMEBUFFER,dt);try{let mt=w.texture,St=mt.format,bt=mt.type;if(!ie.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&V>=0&&V<=w.height-F&&U.readPixels(O,V,G,F,lt.convert(St),lt.convert(bt),tt)}finally{let mt=A!==null?Dt.get(A).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(w,O,V,G,F,tt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){yt.bindFramebuffer(U.FRAMEBUFFER,dt);try{let mt=w.texture,St=mt.format,bt=mt.type;if(!ie.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-G&&V>=0&&V<=w.height-F){let vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(O,V,G,F,lt.convert(St),lt.convert(bt),0),U.flush();let Wt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await _m(U,Wt,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt)}finally{U.deleteBuffer(vt),U.deleteSync(Wt)}return tt}}finally{let mt=A!==null?Dt.get(A).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(w,O=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(w.image.width*G),tt=Math.floor(w.image.height*G),ut=O!==null?O.x:0,dt=O!==null?O.y:0;At.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ut,dt,F,tt),yt.unbindTexture()},this.copyTextureToTexture=function(w,O,V=null,G=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let tt,ut,dt,mt,St,bt;V!==null?(tt=V.max.x-V.min.x,ut=V.max.y-V.min.y,dt=V.min.x,mt=V.min.y):(tt=w.image.width,ut=w.image.height,dt=0,mt=0),G!==null?(St=G.x,bt=G.y):(St=0,bt=0);let vt=lt.convert(O.format),Wt=lt.convert(O.type);At.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let ae=U.getParameter(U.UNPACK_ROW_LENGTH),oe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),Yt=U.getParameter(U.UNPACK_SKIP_ROWS),_t=U.getParameter(U.UNPACK_SKIP_IMAGES),Ne=w.isCompressedTexture?w.mipmaps[F]:w.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,mt),w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,St,bt,tt,ut,vt,Wt,Ne.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,St,bt,Ne.width,Ne.height,vt,Ne.data):U.texSubImage2D(U.TEXTURE_2D,F,St,bt,vt,Wt,Ne),U.pixelStorei(U.UNPACK_ROW_LENGTH,ae),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,_t),F===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V=null,G=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0);let tt,ut,dt,mt,St,bt,vt,Wt,ae,oe=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(tt=V.max.x-V.min.x,ut=V.max.y-V.min.y,dt=V.max.z-V.min.z,mt=V.min.x,St=V.min.y,bt=V.min.z):(tt=oe.width,ut=oe.height,dt=oe.depth,mt=0,St=0,bt=0),G!==null?(vt=G.x,Wt=G.y,ae=G.z):(vt=0,Wt=0,ae=0);let Je=lt.convert(O.format),Yt=lt.convert(O.type),_t;if(O.isData3DTexture)At.setTexture3D(O,0),_t=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)At.setTexture2DArray(O,0),_t=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Ne=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=U.getParameter(U.UNPACK_SKIP_PIXELS),Kr=U.getParameter(U.UNPACK_SKIP_ROWS),Ui=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,St),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bt),w.isDataTexture||w.isData3DTexture?U.texSubImage3D(_t,F,vt,Wt,ae,tt,ut,dt,Je,Yt,oe.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,F,vt,Wt,ae,tt,ut,dt,Je,oe.data):U.texSubImage3D(_t,F,vt,Wt,ae,tt,ut,dt,Je,Yt,oe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ne),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ui),F===0&&O.generateMipmaps&&U.generateMipmap(_t),yt.unbindTexture()},this.initRenderTarget=function(w){Dt.get(w).__webglFramebuffer===void 0&&At.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?At.setTextureCube(w,0):w.isData3DTexture?At.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?At.setTexture2DArray(w,0):At.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,yt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Jl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===eo?"display-p3":"srgb"}};var qa=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cr=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ya=new k,Za=new k,Nu=new me,vr=new Ar,ya=new Yi,ul=new k,Ou=new k,Ol=class extends je{constructor(t=new ln,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ya.fromBufferAttribute(e,i-1),Za.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ya.distanceTo(Za);t.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Nu.copy(i).invert(),vr.copy(t.ray).applyMatrix4(Nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=m,d=_-1;g<d;g+=c){let p=h.getX(g),b=h.getX(g+1),v=Ma(this,t,vr,l,p,b);v&&e.push(v)}if(this.isLineLoop){let g=h.getX(_-1),d=h.getX(m),p=Ma(this,t,vr,l,g,d);p&&e.push(p)}}else{let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=m,d=_-1;g<d;g+=c){let p=Ma(this,t,vr,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){let g=Ma(this,t,vr,l,_-1,m);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ma(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Ya.fromBufferAttribute(a,i),Za.fromBufferAttribute(a,r),e.distanceSqToSegment(Ya,Za,ul,Ou)>n)return;ul.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ul);if(!(l<t.near||l>t.far))return{distance:l,point:Ou.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}var Fu=new k,Bu=new k,$a=class extends Ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Fu.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fu.distanceTo(Bu);t.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fl=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zu=new me,Bl=new Ar,Sa=new Yi,ba=new k,Ja=class extends je{constructor(t=new ln,e=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;zu.copy(i).invert(),Bl.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,g=m;_<g;_++){let d=c.getX(_);ba.fromBufferAttribute(f,d),ku(ba,d,l,i,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,g=m;_<g;_++)ba.fromBufferAttribute(f,_),ku(ba,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ku(s,t,e,n,i,r,a){let o=Bl.distanceSqToPoint(s);if(o<e){let l=new k;Bl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}function wa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function cv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Xs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gh:r=t,o=2*e-n;break;case Wh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:a=t,l=2*n-e;break;case Wh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(i-e),g=_*_,d=g*_,p=-u*d+2*u*g-u*_,b=(1+u)*d+(-1.5-2*u)*g+(-.5+u)*_+1,v=(-1-m)*d+(1.5+m)*g+.5*_,M=m*d-m*g;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+b*a[c+E]+v*a[l+E]+M*a[f+E];return r}},kl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Vl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wa(e,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wa(t.times,Array),values:wa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&cv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ko,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let _=0;_!==n;++_){let g=e[f+_];if(g!==e[u+_]||g!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=xl;var Zi=class extends yn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ea;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends yn{};Hl.prototype.ValueTypeName="color";var Gl=class extends yn{};Gl.prototype.ValueTypeName="number";var Wl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ka=class extends yn{InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends yn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ea;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends yn{};Xl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},hv=new ql,Yl=class{constructor(t){this.manager=t!==void 0?t:hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vu(){return(typeof performance>"u"?Date:performance).now()}var jl="\\[\\]\\.:\\/",uv=new RegExp("["+jl+"]","g"),tc="[^"+jl+"]",fv="[^"+jl.replace("\\.","")+"]",dv=/((?:WC+[\/:])*)/.source.replace("WC",tc),pv=/(WCOD+)?/.source.replace("WCOD",fv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),_v=new RegExp("^"+dv+pv+mv+gv+"$"),xv=["material","materials","bones","map"],Zl=class{constructor(t,e,n){let i=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ee=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(t){let e=_v.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ee.Composite=Zl;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);function Kn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _f(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Ye={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$s={duration:.5,overwrite:!1,delay:0},vc,Le,ne,un=1e8,Qt=1/un,lc=Math.PI*2,vv=lc/4,yv=0,xf=Math.sqrt,Mv=Math.cos,Sv=Math.sin,ye=function(t){return typeof t=="string"},le=function(t){return typeof t=="function"},jn=function(t){return typeof t=="number"},po=function(t){return typeof t>"u"},Ln=function(t){return typeof t=="object"},qe=function(t){return t!==!1},yc=function(){return typeof window<"u"},so=function(t){return le(t)||ye(t)},vf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,cc=/(?:-?\.?\d|\.)+/gi,Mc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sc=/[+-]=-?[.\d]+/,yf=/[^,'"\[\]\s]+/gi,bv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,se,Pn,hc,bc,en={},lo={},Mf,Sf=function(t){return(lo=ji(t,en))&&Ue},mo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ur=function(t,e){return!e&&console.warn(t)},bf=function(t,e){return t&&(en[t]=e)&&lo&&(lo[t]=e)||en},Nr=function(){return 0},wv={suppressEvents:!0,isStart:!0,kill:!1},ro={suppressEvents:!0,kill:!1},Tv={suppressEvents:!0},wc={},Si=[],uc={},wf,We={},nc={},hf=30,ao=[],Tc="",Ac=function(t){var e=t[0],n,i;if(Ln(e)||le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ao.length;i--&&!ao[i].targetTest(e););n=ao[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Rc(t[i],n)))||t.splice(i,1);return t},bi=function(t){return t._gsap||Ac(fn(t))[0]._gsap},Ec=function(t,e,n){return(n=t[e])&&le(n)?t[e]():po(n)&&t.getAttribute&&t.getAttribute(e)||n},ke=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},es=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Av=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},co=function(){var t=Si.length,e=Si.slice(0),n,i;for(uc={},Si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Tf=function(t,e,n,i){Si.length&&!Le&&co(),t.render(e,n,i||Le&&e<0&&(t._initted||t._startAt)),Si.length&&!Le&&co()},Af=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(yf).length<2?e:ye(t)?t.trim():t},Ef=function(t){return t},dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ev=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ji=function(t,e){for(var n in e)t[n]=e[n];return t},uf=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ln(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ho=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ir=function(t){var e=t.parent||se,n=t.keyframes?Ev(De(t.keyframes)):dn;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Cv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Cf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},go=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},wi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ji=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Rv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},fc=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(ro):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Pv=function s(t){return!t||t._ts&&s(t.parent)},ff=function(t){return t._repeat?Js(t._tTime,t=t.duration()+t._rDelay)*t:0},Js=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},uo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},_o=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||Qt)||0))},xo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),_o(t),n._dirty||Ji(n,t)),t},Rf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=uo(t.rawTime(),e),(!e._dur||Br(0,e.totalDuration(),n)-e._tTime>Qt)&&e.render(n,!0)),Ji(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Qt}},In=function(t,e,n,i){return e.parent&&wi(e),e._start=Ae((jn(n)?n:n||t!==se?hn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Cf(t,e,"_first","_last",t._sort?"_start":0),dc(e)||(t._recent=e),i||Rf(t,e),t._ts<0&&xo(t,t._tTime),t},Pf=function(t,e){return(en.ScrollTrigger||mo("scrollTrigger",e))&&en.ScrollTrigger.create(e,t)},If=function(t,e,n,i,r){if(Lc(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&wf!==Xe.frame)return Si.push(t),t._lazy=[r,i],1},Iv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},dc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Lv=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Iv(t)&&!(!t._initted&&dc(t))||(t._ts<0||t._dp._ts<0)&&!dc(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=Br(0,t._tDur,e),h=Js(l,o),t._yoyo&&h&1&&(a=1-a),h!==Js(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Le||i||t._zTime===Qt||!e&&t._zTime){if(!t._initted&&If(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Qt:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&fc(t,e,n,!0),t._onUpdate&&!n&&tn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&wi(t,1),!n&&!Le&&(tn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Dv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ks=function(t,e,n,i){var r=t._repeat,a=Ae(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Ae(a*(r+1)+t._rDelay*r):a,o>0&&!i&&xo(t,t._tTime=t._tDur*o),t.parent&&_o(t),n||Ji(t.parent,t),t},df=function(t){return t instanceof Ce?Ji(t):Ks(t,t._dur)},Uv={_start:0,endTime:Nr,totalDuration:Nr},hn=function s(t,e,n){var i=t.labels,r=t._recent||Uv,a=t.duration()>=un?r.endTime(!1):t._dur,o,l,c;return ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(De(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Lr=function(t,e,n){var i=jn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;a.immediateRender=qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new fe(e[0],a,e[r+1])},Ti=function(t,e){return t||t===0?e(t):e},Br=function(t,e,n){return n<t?t:n>e?e:n},Re=function(t,e){return!ye(t)||!(e=bv.exec(t))?"":e[1]},Nv=function(t,e,n){return Ti(n,function(i){return Br(t,e,i)})},pc=[].slice,Lf=function(t,e){return t&&Ln(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ln(t[0]))&&!t.nodeType&&t!==Pn},Ov=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ye(i)&&!e||Lf(i,1)?(r=n).push.apply(r,fn(i)):n.push(i)})||n},fn=function(t,e,n){return ne&&!e&&ne.selector?ne.selector(t):ye(t)&&!n&&(hc||!Qs())?pc.call((e||bc).querySelectorAll(t),0):De(t)?Ov(t,n):Lf(t)?pc.call(t,0):t?[t]:[]},mc=function(t){return t=fn(t)[0]||Ur("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fn(e,n.querySelectorAll?n:n===t?Ur("Invalid scope")||bc.createElement("div"):t)}},Df=function(t){return t.sort(function(){return .5-Math.random()})},Uf=function(t){if(le(t))return t;var e=Ln(t)?t:{each:t},n=Ki(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,f=i;return ye(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,m,_){var g=(_||e).length,d=a[g],p,b,v,M,E,T,A,I,y;if(!d){if(y=e.grid==="auto"?0:(e.grid||[1,un])[1],!y){for(A=-un;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(d=a[g]=[],p=l?Math.min(y,g)*h-.5:i%y,b=y===un?0:l?g*f/y-.5:i/y|0,A=0,I=un,T=0;T<g;T++)v=T%y-p,M=b-(T/y|0),d[T]=E=c?Math.abs(c==="y"?M:v):xf(v*v+M*M),E>A&&(A=E),E<I&&(I=E);i==="random"&&Df(d),d.max=A-I,d.min=I,d.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),d.b=g<0?r-g:r,d.u=Re(e.amount||e.each)||0,n=n&&g<0?Gf(n):n}return g=(d[u]-d.min)/d.max||0,Ae(d.b+(n?n(g):g)*d.v)+d.u}},gc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(jn(n)?0:Re(n))}},Nf=function(t,e){var n=De(t),i,r;return!n&&Ln(t)&&(i=n=t.radius||un,t.values?(t=fn(t.values),(r=!jn(t[0]))&&(i*=i)):t=gc(t.increment)),Ti(e,n?le(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=un,h=0,f=t.length,u,m;f--;)r?(u=t[f].x-o,m=t[f].y-l,u=u*u+m*m):u=Math.abs(t[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:a,r||h===a||jn(a)?h:h+Re(a)}:gc(t))},Of=function(t,e,n,i){return Ti(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Fv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Bv=function(t,e){return function(n){return t(parseFloat(n))+(e||Re(n))}},zv=function(t,e,n){return Bf(t,e,0,1,n)},Ff=function(t,e,n){return Ti(n,function(i){return t[~~e(i)]})},kv=function s(t,e,n){var i=e-t;return De(t)?Ff(t,s(0,t.length),e):Ti(n,function(r){return(i+(r-t)%i)%i+t})},Vv=function s(t,e,n){var i=e-t,r=i*2;return De(t)?Ff(t,s(0,t.length-1),e):Ti(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},js=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?yf:cc),n+=t.substr(e,i-e)+Of(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Bf=function(t,e,n,i,r){var a=e-t,o=i-n;return Ti(r,function(l){return n+((l-t)/a*o||0)})},Hv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ye(t),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(s(t[c-1],t[c]));f--,r=function(_){_*=f;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=ji(De(t)?[]:{},t));if(!h){for(l in e)Pc.call(o,t,l,"get",e[l]);r=function(_){return Nc(_,o)||(a?t.p:t)}}}return Ti(n,r)},pf=function(t,e,n){var i=t.labels,r=un,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},tn=function(t,e,n){var i=t.vars,r=i[e],a=ne,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Si.length&&co(),o&&(ne=o),h=l?r.apply(c,l):r.call(c),ne=a,h},Rr=function(t){return wi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&tn(t,"onInterrupt"),t},Zs,zf=[],kf=function(t){if(t)if(t=!t.name&&t.default||t,yc()||t.headless){var e=t.name,n=le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Nr,render:Nc,add:Pc,kill:sy,modifier:iy,rawVars:0},a={targetTest:0,get:0,getSetter:vo,aliases:{},register:0};if(Qs(),t!==i){if(We[e])return;dn(i,dn(ho(t,r),a)),ji(i.prototype,ji(r,ho(t,a))),We[i.prop=e]=i,t.targetTest&&(ao.push(i),wc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}bf(e,i),t.register&&t.register(Ue,i,Ve)}else zf.push(t)},Kt=255,Pr={aqua:[0,Kt,Kt],lime:[0,Kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Kt],navy:[0,0,128],white:[Kt,Kt,Kt],olive:[128,128,0],yellow:[Kt,Kt,0],orange:[Kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Kt,0,0],pink:[Kt,192,203],cyan:[0,Kt,Kt],transparent:[Kt,Kt,Kt,0]},ic=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Kt+.5|0},Vf=function(t,e,n){var i=t?jn(t)?[t>>16,t>>8&Kt,t&Kt]:0:Pr.black,r,a,o,l,c,h,f,u,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Pr[t])i=Pr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Kt,i&Kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Kt,t&Kt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(cc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=ic(l+1/3,r,a),i[1]=ic(l,r,a),i[2]=ic(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Mc),n&&i.length<4&&(i[3]=1),i}else i=t.match(cc)||Pr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Kt,a=i[1]/Kt,o=i[2]/Kt,f=Math.max(r,a,o),u=Math.min(r,a,o),h=(f+u)/2,f===u?l=c=0:(m=f-u,c=h>.5?m/(2-f-u):m/(f+u),l=f===r?(a-o)/m+(a<o?6:0):f===a?(o-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Hf=function(t){var e=[],n=[],i=-1;return t.split(Qn).forEach(function(r){var a=r.match(ts)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},mf=function(t,e,n){var i="",r=(t+i).match(Qn),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!r)return t;if(r=r.map(function(u){return(u=Vf(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Hf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Qn,"1").split(ts),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Qn),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},Qn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Pr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Gv=/hsl[a]?\(/,Cc=function(t){var e=t.join(" "),n;if(Qn.lastIndex=0,Qn.test(e))return n=Gv.test(e),t[1]=mf(t[1],n),t[0]=mf(t[0],n,Hf(t[1])),!0},Or,Xe=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,f,u,m,_=function g(d){var p=s()-i,b=d===!0,v,M,E,T;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,v=E-a,(v>0||b)&&(T=++f.frame,u=E-f.time*1e3,f.time=E=E/1e3,a+=v+(v>=r?4:r-v),M=1),b||(l=c(g)),M)for(m=0;m<o.length;m++)o[m](E,u,T,d)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return u/(1e3/(d||60))},wake:function(){Mf&&(!hc&&yc()&&(Pn=hc=window,bc=Pn.document||{},en.gsap=Ue,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(Ue.version),Sf(lo||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),zf.forEach(kf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(d){return setTimeout(d,a-f.time*1e3+1|0)},Or=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Or=0,c=Nr},lagSmoothing:function(d,p){t=d||1/0,e=Math.min(p||33,t)},fps:function(d){r=1e3/(d||240),a=f.time*1e3+r},add:function(d,p,b){var v=p?function(M,E,T,A){d(M,E,T,A),f.remove(v)}:d;return f.remove(d),o[b?"unshift":"push"](v),Qs(),v},remove:function(d,p){~(p=o.indexOf(d))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},f}(),Qs=function(){return!Or&&Xe.wake()},Bt={},Wv=/^[\d.\-M][\d.\-,\s]/,Xv=/["']/g,qv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Xv,"").trim():+c,i=l.substr(o+1).trim();return e},Yv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Zv=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[qv(e[1])]:Yv(t).split(",").map(Af)):Bt._CE&&Wv.test(t)?Bt._CE("",t):n},Gf=function(t){return function(e){return 1-t(1-e)}},Wf=function s(t,e){for(var n=t._first,i;n;)n instanceof Ce?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ki=function(t,e){return t&&(le(t)?t:Bt[t]||Zv(t))||e},ns=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return ke(t,function(o){Bt[o]=en[o]=r,Bt[a=o.toLowerCase()]=n;for(var l in r)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=r[l]}),r},Xf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},sc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/lc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Sv((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Xf(o);return r=lc/r,l.config=function(c,h){return s(t,c,h)},l},rc=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Xf(n);return i.config=function(r){return s(t,r)},i};ke("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ns(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;ns("Elastic",sc("in"),sc("out"),sc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};ns("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ns("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ns("Circ",function(s){return-(xf(1-s*s)-1)});ns("Sine",function(s){return s===1?1:-Mv(s*vv)+1});ns("Back",rc("in"),rc("out"),rc());Bt.SteppedEase=Bt.steps=en.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Qt;return function(o){return((i*Br(0,a,o)|0)+r)*n}}};$s.ease=Bt["quad.out"];ke("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Tc+=s+","+s+"Params,"});var Rc=function(t,e){this.id=yv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ec,this.set=e?e.getSetter:vo},Fr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ks(this,+e.duration,1,1),this.data=e.data,ne&&(this._ctx=ne,ne.data.push(this)),Or||Xe.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xo(this,n),!r._dp||r.parent||Rf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Qt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Tf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ff(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ff(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Js(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Qt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?uo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Qt?0:this._rts,this.totalTime(Br(-Math.abs(this._delay),this._tDur,r),i!==!1),_o(this),Rv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qt&&(this._tTime-=Qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Tv);var i=Le;return Le=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,df(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,df(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(hn(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Qt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=le(n)?n:Ef,o=function(){var c=i.then;i.then=null,le(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Rr(this)},s}();dn(Fr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qt,_prom:0,_ps:!1,_rts:1});var Ce=function(s){_f(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qe(n.sortChildren),se&&In(n.parent||se,Kn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Pf(Kn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Lr(0,arguments,this),this},e.from=function(i,r,a){return Lr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Lr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Ir(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new fe(i,r,hn(this,a),1),this},e.call=function(i,r,a){return In(this,fe.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new fe(i,a,hn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Ir(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,f){return o.startAt=a,Ir(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,r,o,l,c,h,f)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ae(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,m,_,g,d,p,b,v,M,E,T,A;if(this!==se&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,M=this._start,v=this._ts,p=!v,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,r,a);if(u=Ae(h%d),h===l?(g=this._repeat,u=c):(g=~~(h/d),g&&g===h/d&&(u=c,g--),u>c&&(u=c)),E=Js(this._tTime,d),!o&&this._tTime&&E!==g&&this._tTime-E*d-this._dur<=0&&(E=g),T&&g&1&&(u=c-u,A=1),g!==E&&!this._lock){var I=T&&E&1,y=I===(T&&g&1);if(g<E&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(A?0:Ae(g*d)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Wf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Dv(this,Ae(o),Ae(u)),b&&(h-=u-(u=b._start))),this._tTime=h,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!r&&!g&&(tn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||u>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(u-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(u-m._start)*m._ts,r,a),u!==this._time||!this._ts&&!p){b=0,_&&(h+=this._zTime=-Qt);break}}m=_}else{m=this._last;for(var x=i<0?i:u;m;){if(_=m._prev,(m._act||x<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(x-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(x-m._start)*m._ts,r,a||Le&&(m._initted||m._startAt)),u!==this._time||!this._ts&&!p){b=0,_&&(h+=this._zTime=x?-Qt:Qt);break}}m=_}}if(b&&!r&&(this.pause(),b.render(u>=o?0:-Qt)._zTime=u>=o?1:-1,this._ts))return this._start=M,_o(this),this.render(i,r,a);this._onUpdate&&!r&&tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&wi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(tn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(jn(r)||(r=hn(this,r,i)),!(i instanceof Fr)){if(De(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ye(i))return this.addLabel(i,r);if(le(i))i=fe.delayedCall(0,i);else return this}return this!==i?In(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-un);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof fe?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ye(i)?this.removeLabel(i):le(i)?this.killTweensOf(i):(go(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(Xe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=hn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=fe.delayedCall(0,r||Nr,a);return o.data="isPause",this._hasPause=1,In(this,o,hn(this,i))},e.removePause=function(i){var r=this._first;for(i=hn(this,i);r;)r._start===i&&r.data==="isPause"&&wi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=fn(i),l=this._first,c=jn(r),h;l;)l instanceof fe?Av(l._targets,o)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=hn(a,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,m,_=fe.to(a,dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Qt,onStart:function(){if(a.pause(),!m){var d=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==d&&Ks(_,d,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,f||[])}},r));return u?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,dn({startAt:{time:hn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),pf(this,hn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),pf(this,hn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Qt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ji(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=un,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ks(a,a===se&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(se._ts&&(Tf(se,uo(i,se)),wf=Xe.frame),Xe.frame>=hf){hf+=Ye.autoSleep||120;var r=se._first;if((!r||!r._ts)&&Ye.autoSleep&&Xe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Xe.sleep()}}},t}(Fr);dn(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var $v=function(t,e,n,i,r,a,o){var l=new Ve(this._pt,t,e,0,1,Uc,null,r),c=0,h=0,f,u,m,_,g,d,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=js(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),u=n.match(ec)||[];f=ec.exec(i);)_=f[0],g=i.substring(c,f.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==u[h++]&&(d=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:d,c:_.charAt(1)==="="?es(d,_)-d:parseFloat(_)-d,m:m&&m<4?Math.round:0},c=ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Sc.test(i)||p)&&(l.e=0),this._pt=l,l},Pc=function(t,e,n,i,r,a,o,l,c,h){le(i)&&(i=i(r||0,t,a));var f=t[e],u=n!=="get"?n:le(f)?c?t[e.indexOf("set")||!le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,m=le(f)?c?ty:Zf:Dc,_;if(ye(i)&&(~i.indexOf("random(")&&(i=js(i)),i.charAt(1)==="="&&(_=es(u,i)+(Re(u)||0),(_||_===0)&&(i=_))),!h||u!==i||_c)return!isNaN(u*i)&&i!==""?(_=new Ve(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?ny:$f,0,m),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&mo(e,i),$v.call(this,t,e,u,i,m,l||Ye.stringFilter,c))},Jv=function(t,e,n,i,r){if(le(t)&&(t=Dr(t,r,e,n,i)),!Ln(t)||t.style&&t.nodeType||De(t)||vf(t))return ye(t)?Dr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Dr(t[o],r,e,n,i);return a},Ic=function(t,e,n,i,r,a){var o,l,c,h;if(We[t]&&(o=new We[t]).init(r,o.rawVars?e[t]:Jv(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ve(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Zs))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Mi,_c,Lc=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,m=i.autoRevert,_=t._dur,g=t._startAt,d=t._targets,p=t.parent,b=p&&p.data==="nested"?p.vars.targets:d,v=t._overwrite==="auto"&&!vc,M=t.timeline,E,T,A,I,y,x,R,C,L,N,B,z,q;if(M&&(!u||!r)&&(r="none"),t._ease=Ki(r,$s.ease),t._yEase=f?Gf(Ki(f===!0?r:f,$s.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!M&&!!i.runBackwards,!M||u&&!i.stagger){if(C=d[0]?bi(d[0]).harness:0,z=C&&i[C.prop],E=ho(i,wc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!m?g.render(-1,!0):g.revert(h&&_?ro:wv),g._lazy=0),a){if(wi(t._startAt=fe.set(d,dn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qe(l),startAt:null,delay:0,onUpdate:c&&function(){return tn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!o&&!m)&&t._startAt.revert(ro),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),A=dn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&qe(l),immediateRender:o,stagger:0,parent:p},E),z&&(A[C.prop]=z),wi(t._startAt=fe.set(d,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(ro):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Qt,Qt);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&qe(l)||l&&!_,T=0;T<d.length;T++){if(y=d[T],R=y._gsap||Ac(d)[T]._gsap,t._ptLookup[T]=N={},uc[R.id]&&Si.length&&co(),B=b===d?T:b.indexOf(y),C&&(L=new C).init(y,z||E,t,B,b)!==!1&&(t._pt=I=new Ve(t._pt,y,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){N[H]=I}),L.priority&&(x=1)),!C||z)for(A in E)We[A]&&(L=Ic(A,E,t,B,y,b))?L.priority&&(x=1):N[A]=I=Pc.call(t,y,A,"get",E[A],B,b,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),v&&t._pt&&(Mi=t,se.killTweensOf(y,N,t.globalTime(e)),q=!t.parent,Mi=0),t._pt&&l&&(uc[R.id]=1)}x&&Oc(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,u&&e<=0&&M.render(un,!0,!0)},Kv=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,m;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,m=t._targets.length;m--;){if(h=u[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return _c=1,t.vars[e]="+=0",Lc(t,o),_c=0,l?Ur(e+" not eligible for reset"):1;c.push(h)}for(m=c.length;m--;)f=c[m],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=ce(n)+Re(f.e)),f.b&&(f.b=h.s+Re(f.b))},Qv=function(t,e){var n=t[0]?bi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ji({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},jv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(De(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Dr=function(t,e,n,i,r){return le(t)?t.call(e,n,i,r):ye(t)&&~t.indexOf("random(")?js(t):t},qf=Tc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yf={};ke(qf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Yf[s]=1});var fe=function(s){_f(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ir(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,d=l.scrollTrigger,p=l.yoyoEase,b=i.parent||se,v=(De(n)||vf(n)?jn(n[0]):"length"in i)?[n]:fn(n),M,E,T,A,I,y,x,R;if(o._targets=v.length?Ac(v):Ur("GSAP target "+n+" not found. https://gsap.com",!Ye.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||u||so(c)||so(h)){if(i=o.vars,M=o.timeline=new Ce({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:v}),M.kill(),M.parent=M._dp=Kn(o),M._start=0,u||so(c)||so(h)){if(A=v.length,x=u&&Uf(u),Ln(u))for(I in u)~qf.indexOf(I)&&(R||(R={}),R[I]=u[I]);for(E=0;E<A;E++)T=ho(i,Yf),T.stagger=0,p&&(T.yoyoEase=p),R&&ji(T,R),y=v[E],T.duration=+Dr(c,Kn(o),E,y,v),T.delay=(+Dr(h,Kn(o),E,y,v)||0)-o._delay,!u&&A===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),M.to(y,T,x?x(E,y,v):0),M._ease=Bt.none;M.duration()?c=h=0:o.timeline=0}else if(_){Ir(dn(M.vars.defaults,{ease:"none"})),M._ease=Ki(_.ease||i.ease||"none");var C=0,L,N,B;if(De(_))_.forEach(function(z){return M.to(v,z,">")}),M.duration();else{T={};for(I in _)I==="ease"||I==="easeEach"||jv(I,_[I],T,_.easeEach);for(I in T)for(L=T[I].sort(function(z,q){return z.t-q.t}),C=0,E=0;E<L.length;E++)N=L[E],B={ease:N.e,duration:(N.t-(E?L[E-1].t:0))/100*c},B[I]=N.v,M.to(v,B,C),C+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!vc&&(Mi=Kn(o),se.killTweensOf(v),Mi=0),In(b,Kn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===Ae(b._time)&&qe(f)&&Pv(Kn(o))&&b.data!=="nested")&&(o._tTime=-Qt,o.render(Math.max(0,-h)||0)),d&&Pf(Kn(o),d),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Qt&&!h?l:i<Qt?0:i,u,m,_,g,d,p,b,v,M;if(!c)Lv(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=f,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(u=Ae(f%g),f===l?(_=this._repeat,u=c):(_=~~(f/g),_&&_===Ae(f/g)&&(u=c,_--),u>c&&(u=c)),p=this._yoyo&&_&1,p&&(M=this._yEase,u=c-u),d=Js(this._tTime,g),u===o&&!a&&this._initted&&_===d)return this._tTime=f,this;_!==d&&(v&&this._yEase&&Wf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Ae(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(If(this,h?i:u,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==d))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(u/c),this._from&&(this.ratio=b=1-b),u&&!o&&!r&&!_&&(tn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&fc(this,i,r,a),tn(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!r&&this.parent&&tn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&fc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&wi(this,1),!r&&!(h&&!o)&&(f||o||p)&&(tn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){Or||Xe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Lc(this,c),h=this._ease(c/this._dur),Kv(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(xo(this,0),this.parent||Cf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Rr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Mi&&Mi.vars.overwrite!==!0)._first||Rr(this),this.parent&&a!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fn(i):o,c=this._ptLookup,h=this._pt,f,u,m,_,g,d,p;if((!r||r==="all")&&Cv(o,l))return r==="all"&&(this._pt=0),Rr(this);for(f=this._op=this._op||[],r!=="all"&&(ye(r)&&(g={},ke(r,function(b){return g[b]=1}),r=g),r=Qv(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],r==="all"?(f[p]=r,_=u,m={}):(m=f[p]=f[p]||{},_=r);for(g in _)d=u&&u[g],d&&((!("kill"in d.d)||d.d.kill(g)===!0)&&go(this,d,"_pt"),delete u[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&h&&Rr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Lr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Lr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return se.killTweensOf(i,r,a)},t}(Fr);dn(fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ke("staggerTo,staggerFrom,staggerFromTo",function(s){fe[s]=function(){var t=new Ce,e=pc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Dc=function(t,e,n){return t[e]=n},Zf=function(t,e,n){return t[e](n)},ty=function(t,e,n,i){return t[e](i.fp,n)},ey=function(t,e,n){return t.setAttribute(e,n)},vo=function(t,e){return le(t[e])?Zf:po(t[e])&&t.setAttribute?ey:Dc},$f=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ny=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Uc=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Nc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},iy=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},sy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?go(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ry=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Oc=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ve=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||$f,this.d=l||this,this.set=c||Dc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ry,this.m=n,this.mt=r,this.tween=i},s}();ke(Tc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return wc[s]=1});en.TweenMax=en.TweenLite=fe;en.TimelineLite=en.TimelineMax=Ce;se=new Ce({sortChildren:!1,defaults:$s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ye.stringFilter=Cc;var Qi=[],oo={},ay=[],gf=0,oy=0,ac=function(t){return(oo[t]||ay).map(function(e){return e()})},xc=function(){var t=Date.now(),e=[];t-gf>2&&(ac("matchMediaInit"),Qi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Pn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ac("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),gf=t,ac("matchMedia"))},Jf=function(){function s(e,n){this.selector=n&&mc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oy++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){le(n)&&(r=i,i=n,n=le);var a=this,o=function(){var c=ne,h=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=mc(r)),ne=a,f=i.apply(a,arguments),le(f)&&a._r.push(f),ne=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===le?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ne;ne=null,n(this),ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof fe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ce?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof fe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qi.length;a--;)Qi[a].id===this.id&&Qi.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),ly=function(){function s(e){this.contexts=[],this.scope=e,ne&&ne.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ln(n)||(n={matches:n});var a=new Jf(0,r||this.scope),o=a.conditions={},l,c,h;ne&&!a.selector&&(a.selector=ne.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Pn.matchMedia(n[c]),l&&(Qi.indexOf(a)<0&&Qi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(xc):l.addEventListener("change",xc)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),fo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return kf(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return se.getTweensOf(t,e)},getProperty:function(t,e,n,i){ye(t)&&(t=fn(t)[0]);var r=bi(t||{}).get,a=n?Ef:Af;return n==="native"&&(n=""),t&&(e?a((We[e]&&We[e].get||r)(t,e,n,i)):function(o,l,c){return a((We[o]&&We[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=fn(t),t.length>1){var i=t.map(function(h){return Ue.quickSetter(h,e,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}t=t[0]||{};var a=We[e],o=bi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;Zs._pt=0,f.init(t,n?h+n:h,Zs,0,[t]),f.render(1,f),Zs._pt&&Nc(1,Zs)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ue.to(t,ji((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ki(t.ease,$s.ease)),uf($s,t||{})},config:function(t){return uf(Ye,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!We[o]&&!en[o]&&Ur(e+" effect requires "+o+" plugin.")}),nc[e]=function(o,l,c){return n(fn(o),dn(l||{},r),c)},a&&(Ce.prototype[e]=function(o,l,c){return this.add(nc[e](o,Ln(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=Ki(e)},parseEase:function(t,e){return arguments.length?Ki(t,e):Bt},getById:function(t){return se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,r;for(n.smoothChildTiming=qe(t.smoothChildTiming),se.remove(n),n._dp=0,n._time=n._tTime=se._time,i=se._first;i;)r=i._next,(e||!(!i._dur&&i instanceof fe&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=r;return In(se,n,0),n},context:function(t,e){return t?new Jf(t,e):ne},matchMedia:function(t){return new ly(t)},matchMediaRefresh:function(){return Qi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||xc()},addEventListener:function(t,e){var n=oo[t]||(oo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=oo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:kv,wrapYoyo:Vv,distribute:Uf,random:Of,snap:Nf,normalize:zv,getUnit:Re,clamp:Nv,splitColor:Vf,toArray:fn,selector:mc,mapRange:Bf,pipe:Fv,unitize:Bv,interpolate:Hv,shuffle:Df},install:Sf,effects:nc,ticker:Xe,updateRoot:Ce.updateRoot,plugins:We,globalTimeline:se,core:{PropTween:Ve,globals:bf,Tween:fe,Timeline:Ce,Animation:Fr,getCache:bi,_removeLinkedListItem:go,reverting:function(){return Le},context:function(t){return t&&ne&&(ne.data.push(t),t._ctx=ne),ne},suppressOverwrites:function(t){return vc=t}}};ke("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return fo[s]=fe[s]});Xe.add(Ce.updateRoot);Zs=fo.to({},{duration:0});var cy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},hy=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=cy(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},oc=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ye(r)&&(l={},ke(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}hy(o,r)}}}},Ue=fo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oc("roundProps",gc),oc("modifiers"),oc("snap",Nf))||fo;fe.version=Ce.version=Ue.version="3.12.5";Mf=1;yc()&&Qs();var uy=Bt.Power0,fy=Bt.Power1,dy=Bt.Power2,py=Bt.Power3,my=Bt.Power4,gy=Bt.Linear,_y=Bt.Quad,xy=Bt.Cubic,vy=Bt.Quart,yy=Bt.Quint,My=Bt.Strong,Sy=Bt.Elastic,by=Bt.Back,wy=Bt.SteppedEase,Ty=Bt.Bounce,Ay=Bt.Sine,Ey=Bt.Expo,Cy=Bt.Circ;var Kf,Ai,er,Gc,as,Ry,Qf,Wc,Py=function(){return typeof window<"u"},ei={},rs=180/Math.PI,nr=Math.PI/180,tr=Math.atan2,jf=1e8,Xc=/([A-Z])/g,Iy=/(left|right|width|margin|padding|x)/i,Ly=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Dy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Uy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ny=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ad=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},od=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Oy=function(t,e,n){return t.style[e]=n},Fy=function(t,e,n){return t.style.setProperty(e,n)},By=function(t,e,n){return t._gsap[e]=n},zy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ky=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Vy=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},re="transform",Ze=re+"Origin",Hy=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ei&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ti(i,o)}):this.tfm[t]=a.x?a[t]:ti(i,t),t===Ze&&(this.tfm.zOrigin=a.zOrigin);else return Dn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(re)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ze,e,"")),t=re}(r||e)&&this.props.push(t,e,r[t])},ld=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Gy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Xc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Wc(),(!r||!r.isStart)&&!n[re]&&(ld(n),i.zOrigin&&n[Ze]&&(n[Ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cd=function(t,e){var n={target:t,props:[],revert:Gy,save:Hy};return t._gsap||Ue.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},hd,kc=function(t,e){var n=Ai.createElementNS?Ai.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ai.createElement(t);return n&&n.style?n:Ai.createElement(t)},Un=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ir(e)||e,1)||""},td="O,Moz,ms,Ms,Webkit".split(","),ir=function(t,e,n){var i=e||as,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(td[a]+t in r););return a<0?null:(a===3?"ms":a>=0?td[a]:"")+t},Vc=function(){Py()&&window.document&&(Kf=window,Ai=Kf.document,er=Ai.documentElement,as=kc("div")||{style:{}},Ry=kc("div"),re=ir(re),Ze=re+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hd=!!ir("perspective"),Wc=Ue.core.reverting,Gc=1)},Fc=function s(t){var e=kc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(er.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),er.removeChild(e),this.style.cssText=r,a},ed=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ud=function(t){var e;try{e=t.getBBox()}catch{e=Fc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Fc||(e=Fc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ed(t,["x","cx","x1"])||0,y:+ed(t,["y","cy","y1"])||0,width:0,height:0}:e},fd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ud(t))},os=function(t,e){if(e){var n=t.style,i;e in ei&&e!==Ze&&(e=re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xc,"-$1").toLowerCase())):n.removeAttribute(e)}},Ei=function(t,e,n,i,r,a){var o=new Ve(t._pt,e,n,0,1,a?od:ad);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},nd={deg:1,rad:1,turn:1},Wy={grid:1,flex:1},Ci=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=as.style,l=Iy.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",m=i==="%",_,g,d,p;if(i===a||!r||nd[i]||nd[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&fd(t),(m||a==="%")&&(ei[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],ce(m?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(u?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ai||!g.appendChild)&&(g=Ai.body),d=g._gsap,d&&m&&d.width&&l&&d.time===Xe.time&&!d.uncache)return ce(r/d.width*f);if(m&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=f+i,_=t[h],b?t.style[e]=b:os(t,e)}else(m||a==="%")&&!Wy[Un(g,"display")]&&(o.position=Un(t,"position")),g===t&&(o.position="static"),g.appendChild(as),_=as[h],g.removeChild(as),o.position="absolute";return l&&m&&(d=bi(g),d.time=Xe.time,d.width=g[h]),ce(u?_*r/f:_&&r?f/_*r:0)},ti=function(t,e,n,i){var r;return Gc||Vc(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ei[e]&&e!=="transform"?(r=Vr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Mo(Un(t,Ze))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=yo[e]&&yo[e](t,e,n)||Un(t,e)||Ec(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ci(t,e,r,n)+n:r},Xy=function(t,e,n,i){if(!n||n==="none"){var r=ir(e,t,1),a=r&&Un(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Un(t,"borderTopColor"))}var o=new Ve(this._pt,t.style,e,0,1,Uc),l=0,c=0,h,f,u,m,_,g,d,p,b,v,M,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Un(t,e)||i,g?t.style[e]=g:os(t,e)),h=[n,i],Cc(h),n=h[0],i=h[1],u=n.match(ts)||[],E=i.match(ts)||[],E.length){for(;f=ts.exec(i);)d=f[0],b=i.substring(l,f.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),d!==(g=u[c++]||"")&&(m=parseFloat(g)||0,M=g.substr((m+"").length),d.charAt(1)==="="&&(d=es(m,d)+M),p=parseFloat(d),v=d.substr((p+"").length),l=ts.lastIndex-v.length,v||(v=v||Ye.units[e]||M,l===i.length&&(i+=v,o.e+=v)),M!==v&&(m=Ci(t,e,g,v)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:m,c:p-m,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?od:ad;return Sc.test(i)&&(o.e=0),this._pt=o,o},id={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=id[n]||n,e[1]=id[i]||i,e.join(" ")},Yy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ei[o]&&(l=1,o=o==="transformOrigin"?Ze:re),os(n,o);l&&(os(n,re),a&&(a.svg&&n.removeAttribute("transform"),Vr(n,1),a.uncache=1,ld(i)))}},yo={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ve(t._pt,e,n,0,0,Yy);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},kr=[1,0,0,1,0,0],dd={},pd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sd=function(t){var e=Un(t,re);return pd(e)?kr:e.substr(7).match(Mc).map(ce)},qc=function(t,e){var n=t._gsap||bi(t),i=t.style,r=sd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?kr:r):(r===kr&&!t.offsetParent&&t!==er&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,er.appendChild(t)),r=sd(t),l?i.display=l:os(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):er.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hc=function(t,e,n,i,r,a){var o=t._gsap,l=r||qc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,m=l[0],_=l[1],g=l[2],d=l[3],p=l[4],b=l[5],v=e.split(" "),M=parseFloat(v[0])||0,E=parseFloat(v[1])||0,T,A,I,y;n?l!==kr&&(A=m*d-_*g)&&(I=M*(d/A)+E*(-g/A)+(g*b-d*p)/A,y=M*(-_/A)+E*(m/A)-(m*b-_*p)/A,M=I,E=y):(T=ud(t),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),E=T.y+(~(v[1]||v[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&o.smooth?(p=M-c,b=E-h,o.xOffset=f+(p*m+b*g)-p,o.yOffset=u+(p*_+b*d)-b):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ze]="0px 0px",a&&(Ei(a,o,"xOrigin",c,M),Ei(a,o,"yOrigin",h,E),Ei(a,o,"xOffset",f,o.xOffset),Ei(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+E)},Vr=function(t,e){var n=t._gsap||new Rc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Un(t,Ze)||"0",h,f,u,m,_,g,d,p,b,v,M,E,T,A,I,y,x,R,C,L,N,B,z,q,H,rt,at,ct,Mt,Ut,X,J;return h=f=u=g=d=p=b=v=M=0,m=_=1,n.svg=!!(t.getCTM&&fd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[re]!=="none"?l[re]:"")),i.scale=i.rotate=i.translate="none"),A=qc(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Hc(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,T=n.yOrigin||0,A!==kr&&(R=A[0],C=A[1],L=A[2],N=A[3],h=B=A[4],f=z=A[5],A.length===6?(m=Math.sqrt(R*R+C*C),_=Math.sqrt(N*N+L*L),g=R||C?tr(C,R)*rs:0,b=L||N?tr(L,N)*rs+g:0,b&&(_*=Math.abs(Math.cos(b*nr))),n.svg&&(h-=E-(E*R+T*L),f-=T-(E*C+T*N))):(J=A[6],Ut=A[7],at=A[8],ct=A[9],Mt=A[10],X=A[11],h=A[12],f=A[13],u=A[14],I=tr(J,Mt),d=I*rs,I&&(y=Math.cos(-I),x=Math.sin(-I),q=B*y+at*x,H=z*y+ct*x,rt=J*y+Mt*x,at=B*-x+at*y,ct=z*-x+ct*y,Mt=J*-x+Mt*y,X=Ut*-x+X*y,B=q,z=H,J=rt),I=tr(-L,Mt),p=I*rs,I&&(y=Math.cos(-I),x=Math.sin(-I),q=R*y-at*x,H=C*y-ct*x,rt=L*y-Mt*x,X=N*x+X*y,R=q,C=H,L=rt),I=tr(C,R),g=I*rs,I&&(y=Math.cos(I),x=Math.sin(I),q=R*y+C*x,H=B*y+z*x,C=C*y-R*x,z=z*y-B*x,R=q,B=H),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,p=180-p),m=ce(Math.sqrt(R*R+C*C+L*L)),_=ce(Math.sqrt(z*z+J*J)),I=tr(B,z),b=Math.abs(I)>2e-4?I*rs:0,M=X?1/(X<0?-X:X):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pd(Un(t,re)),q&&t.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=ce(m),n.scaleY=ce(_),n.rotation=ce(g)+o,n.rotationX=ce(d)+o,n.rotationY=ce(p)+o,n.skewX=b+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ze]=Mo(c)),n.xOffset=n.yOffset=0,n.force3D=Ye.force3D,n.renderTransform=n.svg?$y:hd?md:Zy,n.uncache=0,n},Mo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Bc=function(t,e,n){var i=Re(e);return ce(parseFloat(e)+parseFloat(Ci(t,"x",n+"px",i)))+i},Zy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,md(t,e)},is="0deg",zr="0px",ss=") ",md=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,d=n.transformPerspective,p=n.force3D,b=n.target,v=n.zOrigin,M="",E=p==="auto"&&t&&t!==1||p===!0;if(v&&(f!==is||h!==is)){var T=parseFloat(h)*nr,A=Math.sin(T),I=Math.cos(T),y;T=parseFloat(f)*nr,y=Math.cos(T),a=Bc(b,a,A*y*-v),o=Bc(b,o,-Math.sin(T)*-v),l=Bc(b,l,I*y*-v+v)}d!==zr&&(M+="perspective("+d+ss),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(E||a!==zr||o!==zr||l!==zr)&&(M+=l!==zr||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ss),c!==is&&(M+="rotate("+c+ss),h!==is&&(M+="rotateY("+h+ss),f!==is&&(M+="rotateX("+f+ss),(u!==is||m!==is)&&(M+="skew("+u+", "+m+ss),(_!==1||g!==1)&&(M+="scale("+_+", "+g+ss),b.style[re]=M||"translate(0, 0)"},$y=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,d=n.xOffset,p=n.yOffset,b=n.forceCSS,v=parseFloat(a),M=parseFloat(o),E,T,A,I,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=nr,c*=nr,E=Math.cos(l)*f,T=Math.sin(l)*f,A=Math.sin(l-c)*-u,I=Math.cos(l-c)*u,c&&(h*=nr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),A*=y,I*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),E*=y,T*=y)),E=ce(E),T=ce(T),A=ce(A),I=ce(I)):(E=f,I=u,T=A=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=Ci(m,"x",a,"px"),M=Ci(m,"y",o,"px")),(_||g||d||p)&&(v=ce(v+_-(_*E+g*A)+d),M=ce(M+g-(_*T+g*I)+p)),(i||r)&&(y=m.getBBox(),v=ce(v+i/100*y.width),M=ce(M+r/100*y.height)),y="matrix("+E+","+T+","+A+","+I+","+v+","+M+")",m.setAttribute("transform",y),b&&(m.style[re]=y)},Jy=function(t,e,n,i,r){var a=360,o=ye(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?rs:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*jf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*jf)%a-~~(c/a)*a)),t._pt=u=new Ve(t._pt,e,n,i,c,Dy),u.e=h,u.u="deg",t._props.push(n),u},rd=function(t,e){for(var n in e)t[n]=e[n];return t},Ky=function(t,e,n){var i=rd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[re]=e,o=Vr(n,1),os(n,re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[re],a[re]=e,o=Vr(n,1),a[re]=c);for(l in ei)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(m=Re(c),_=Re(h),f=m!==_?Ci(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new Ve(t._pt,o,l,f,u-f,zc),t._pt.u=_||0,t._props.push(l));rd(o,i)};ke("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});yo[t>1?"border"+s:s]=function(o,l,c,h,f){var u,m;if(arguments.length<4)return u=a.map(function(_){return ti(o,_,c)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(h+"").split(" "),m={},a.forEach(function(_,g){return m[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,m,f)}});var Yc={name:"css",register:Vc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,u,m,_,g,d,p,b,v,M,E,T,A,I;Gc||Vc(),this.styles=this.styles||cd(t),I=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(We[g]&&Ic(g,e,n,i,t,r)))){if(m=typeof h,_=yo[g],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=js(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Qn.lastIndex=0,Qn.test(c)||(d=Re(c),p=Re(h)),p?d!==p&&(c=Ci(t,g,c,p)+p):d&&(h+=d),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),I.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],ye(c)&&~c.indexOf("random(")&&(c=js(c)),Re(c+"")||c==="auto"||(c+=Ye.units[g]||Re(ti(t,g))||""),(c+"").charAt(1)==="="&&(c=ti(t,g))):c=ti(t,g),u=parseFloat(c),b=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),f=parseFloat(h),g in Dn&&(g==="autoAlpha"&&(u===1&&ti(t,"visibility")==="hidden"&&f&&(u=0),I.push("visibility",0,o.visibility),Ei(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Dn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in ei,v){if(this.styles.save(g),M||(E=t._gsap,E.renderTransform&&!e.parseTransform||Vr(t,e.parseTransform),T=e.smoothOrigin!==!1&&E.smooth,M=this._pt=new Ve(this._pt,o,re,0,1,E.renderTransform,E,0,-1),M.dep=1),g==="scale")this._pt=new Ve(this._pt,E,"scaleY",E.scaleY,(b?es(E.scaleY,b+f):f)-E.scaleY||0,zc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Ze,0,o[Ze]),h=qy(h),E.svg?Hc(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&Ei(this,E,"zOrigin",E.zOrigin,p),Ei(this,o,g,Mo(c),Mo(h)));continue}else if(g==="svgOrigin"){Hc(t,h,1,T,0,this);continue}else if(g in dd){Jy(this,E,g,u,b?es(u,b+h):h);continue}else if(g==="smoothOrigin"){Ei(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){Ky(this,h,t);continue}}else g in o||(g=ir(g)||g);if(v||(f||f===0)&&(u||u===0)&&!Ly.test(h)&&g in o)d=(c+"").substr((u+"").length),f||(f=0),p=Re(h)||(g in Ye.units?Ye.units[g]:d),d!==p&&(u=Ci(t,g,c,p)),this._pt=new Ve(this._pt,v?E:o,g,u,(b?es(u,b+f):f)-u,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Ny:zc),this._pt.u=p||0,d!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Uy);else if(g in o)Xy.call(this,t,g,c,b?b+h:h);else if(g in t)this.add(t,g,c||t[g],b?b+h:h,i,r);else if(g!=="parseTransform"){mo(g,h);continue}v||(g in o?I.push(g,0,o[g]):I.push(g,1,c||t[g])),a.push(g)}}A&&Oc(this)},render:function(t,e){if(e.tween._time||!Wc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ti,aliases:Dn,getSetter:function(t,e,n){var i=Dn[e];return i&&i.indexOf(",")<0&&(e=i),e in ei&&e!==Ze&&(t._gsap.x||ti(t,"x"))?n&&Qf===n?e==="scale"?zy:By:(Qf=n||{})&&(e==="scale"?ky:Vy):t.style&&!po(t.style[e])?Oy:~e.indexOf("-")?Fy:vo(t,e)},core:{_removeProperty:os,_getMatrix:qc}};Ue.utils.checkPrefix=ir;Ue.core.getStyleSaver=cd;(function(s,t,e,n){var i=ke(s+","+t+","+e,function(r){ei[r]=1});ke(t,function(r){Ye.units[r]="deg",dd[r]=1}),Dn[i[13]]=s+","+t,ke(n,function(r){var a=r.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ke("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ye.units[s]="px"});Ue.registerPlugin(Yc);var ni=Ue.registerPlugin(Yc)||Ue,PM=ni.core.Tween;var Qy="/assets/cancion.mp3?v=1",gd=s=>440*Math.pow(2,(s-69)/12),jy=[[57,60,64,71],[53,57,60,67],[48,55,64,67],[55,59,62,69]],So=class{constructor(){this.on=!1,this.data=null}start(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.out=t.createGain(),this.out.gain.value=0,this.an=t.createAnalyser(),this.an.fftSize=256,this.an.smoothingTimeConstant=.85,this.data=new Uint8Array(this.an.frequencyBinCount),this.out.connect(this.an).connect(t.destination),t.resume(),this.el=new Audio(Qy),this.el.loop=!0,this.el.preload="auto",t.createMediaElementSource(this.el).connect(this.out),this.el.play().catch(()=>{}),this.el.addEventListener("error",()=>this.ambiente(),{once:!0}),this.on=!0,this.out.gain.setTargetAtTime(.8,t.currentTime,1.2)}toggle(){return this.ctx?(this.on=!this.on,this.out.gain.setTargetAtTime(this.on?.8:0,this.ctx.currentTime,.25),this.on):!1}level(){if(!this.data||!this.on)return 0;this.an.getByteFrequencyData(this.data);let t=0;for(let e=1;e<12;e++)t+=this.data[e];return t/11/255}ambiente(){let t=this.ctx,e=t.createConvolver(),n=t.sampleRate*4,i=t.createBuffer(2,n,t.sampleRate);for(let h=0;h<2;h++){let f=i.getChannelData(h);for(let u=0;u<n;u++)f[u]=(Math.random()*2-1)*Math.pow(1-u/n,2.4)}e.buffer=i;let r=t.createGain();r.gain.value=.7,e.connect(r).connect(this.out),this.bus=t.createGain(),this.bus.gain.value=.9,this.bus.connect(this.out),this.bus.connect(e);let a=4.2,o=t.currentTime+.1,l=0,c=()=>{for(;o<t.currentTime+1;){let h=jy[l%4];this.pad(o,h,a),this.pad(o,[h[0]-24],a,.09);for(let f=0;f<6;f++)Math.random()<.55&&this.bell(o+f*(a/6)+Math.random()*.05,h[(f+l)%4]+12+(f%3===2?12:0));o+=a,l++}};c(),this.timer=setInterval(c,400)}pad(t,e,n,i=.045){let r=this.ctx,a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=900;let o=r.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i,t+1.6),o.gain.linearRampToValueAtTime(0,t+n+1.4),a.connect(o).connect(this.bus);for(let l of e)for(let c of[-6,6]){let h=r.createOscillator();h.type="sawtooth",h.frequency.value=gd(l),h.detune.value=c,h.connect(a),h.start(t),h.stop(t+n+1.5)}}bell(t,e){let n=this.ctx,i=n.createOscillator(),r=n.createGain();i.type="sine",i.frequency.value=gd(e),r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.05,t+.01),r.gain.exponentialRampToValueAtTime(5e-4,t+2.2),i.connect(r).connect(this.bus),i.start(t),i.stop(t+2.3)}};var _d=["solid","acc","ring","cyan","ring","solid","ring","acc"];function xd(s,{tilt:t,haptic:e,mobile:n,balls:i,onPick:r}){let a=s.getContext("2d"),o=0,l=0,c=1,h=[],f=!1,u=null,m=0,_=0;function g(){c=Math.min(devicePixelRatio,2),o=s.clientWidth,l=s.clientHeight,s.width=o*c,s.height=l*c;let x=Math.min(o*(n?.135:.075),l*.2);h.length?h.forEach(R=>{R.r=x*(.75+Math.min(R.c,10)/10*.45),R.x=Math.min(R.x,o-R.r)}):h=i.map((R,C)=>({...R,i:C,k:_d[C%_d.length],r:x*(.75+Math.min(R.c,10)/10*.45),x:o*(.2+.6*Math.random()),y:-C*x*1.2-40,vx:(Math.random()-.5)*4,vy:0,rot:0}))}function d(x,R){for(let C=h.length-1;C>=0;C--){let L=h[C];if((x-L.x)**2+(R-L.y)**2<L.r*L.r)return L}return null}let p=(x,R)=>{let C=s.getBoundingClientRect();return[x-C.left,R-C.top]};function b(x,R){let[C,L]=p(x,R),N=d(C,L);return N?(u={b:N,ox:C-N.x,oy:L-N.y,px:C,py:L,vx:0,vy:0,x0:C,y0:L,moved:!1},h.splice(h.indexOf(N),1),h.push(N),e(),!0):!1}function v(x,R){if(!u)return;let[C,L]=p(x,R);u.vx=C-u.px,u.vy=L-u.py,Math.hypot(C-u.x0,L-u.y0)>8&&(u.moved=!0),u.px=C,u.py=L,u.b.x=C-u.ox,u.b.y=L-u.oy}function M(){u&&(u.b.vx=u.vx*1.1,u.b.vy=u.vy*1.1,u.moved||(r?.(u.b.i),u.b.vy-=9),u=null)}s.addEventListener("touchstart",x=>{let R=x.touches[0];b(R.clientX,R.clientY)&&x.preventDefault()},{passive:!1}),s.addEventListener("touchmove",x=>{if(u){x.preventDefault();let R=x.touches[0];v(R.clientX,R.clientY)}},{passive:!1}),s.addEventListener("touchend",M),s.addEventListener("mousedown",x=>b(x.clientX,x.clientY)),addEventListener("mousemove",x=>v(x.clientX,x.clientY)),addEventListener("mouseup",M),s.addEventListener("mousemove",x=>{let[R,C]=p(x.clientX,x.clientY);s.style.cursor=d(R,C)?"grab":""}),new IntersectionObserver(([x])=>{f=x.isIntersecting},{threshold:0}).observe(s),addEventListener("resize",g),g();let E=x=>getComputedStyle(document.documentElement).getPropertyValue(x).trim(),T={bone:E("--bone")||"#ece8df",ink:E("--ink")||"#07070b",acc:E("--acc")||"#8b6cff",cyan:E("--cyan")||"#4ff0ff"};function A(){let x=n?t.x*.7:0,R=n?.25+t.y*.55:.45;for(let C of h){if(u&&u.b===C){C.vx=u.vx,C.vy=u.vy;continue}C.vx+=x,C.vy+=R,C.vx*=.995,C.vy*=.995,C.x+=C.vx,C.y+=C.vy,C.rot+=C.vx/C.r,C.x<C.r&&(C.x=C.r,C.vx=Math.abs(C.vx)*.6),C.x>o-C.r&&(C.x=o-C.r,C.vx=-Math.abs(C.vx)*.6),C.y>l-C.r&&(C.vy>6&&I(),C.y=l-C.r,C.vy=-Math.abs(C.vy)*.55,C.vx*=.97),C.y<C.r&&C.vy<0&&C.y>-C.r*2&&(C.y=C.r,C.vy=Math.abs(C.vy)*.55)}for(let C=0;C<h.length;C++)for(let L=C+1;L<h.length;L++){let N=h[C],B=h[L],z=B.x-N.x,q=B.y-N.y,H=Math.hypot(z,q),rt=N.r+B.r;if(H>=rt||H===0)continue;let at=z/H,ct=q/H,Mt=(rt-H)/2,Ut=u&&u.b===N,X=u&&u.b===B;Ut||(N.x-=at*Mt*(X?2:1),N.y-=ct*Mt*(X?2:1)),X||(B.x+=at*Mt*(Ut?2:1),B.y+=ct*Mt*(Ut?2:1));let J=(B.vx-N.vx)*at+(B.vy-N.vy)*ct;if(J<0){let ft=-J*.8;Ut||(N.vx-=at*ft,N.vy-=ct*ft),X||(B.vx+=at*ft,B.vy+=ct*ft),ft>7&&I()}}}function I(){let x=performance.now();x-m>120&&(m=x,e())}function y(){a.setTransform(c,0,0,c,0,0),a.clearRect(0,0,o,l);for(let x of h){a.save(),a.translate(x.x,x.y),a.beginPath(),a.arc(0,0,x.r,0,Math.PI*2);let R;x.i===_&&(a.save(),a.shadowColor=T.acc,a.shadowBlur=30,a.lineWidth=3,a.strokeStyle=T.acc,a.beginPath(),a.arc(0,0,x.r+5,0,Math.PI*2),a.stroke(),a.restore(),a.beginPath(),a.arc(0,0,x.r,0,Math.PI*2)),x.k==="ring"?(a.lineWidth=1.5,a.strokeStyle=T.bone,a.fillStyle="rgba(7,7,11,.55)",a.fill(),a.stroke(),R=T.bone):(a.fillStyle=x.k==="acc"?T.acc:x.k==="cyan"?T.cyan:T.bone,a.fill(),R=T.ink);let L=a.createRadialGradient(-x.r*.35,-x.r*.4,0,0,0,x.r);L.addColorStop(0,"rgba(255,255,255,.28)"),L.addColorStop(.6,"rgba(255,255,255,0)"),L.addColorStop(1,"rgba(0,0,0,.25)"),a.fillStyle=L,a.fill(),a.rotate(x.rot*.15),a.fillStyle=R,a.textAlign="center",a.textBaseline="middle";let N=x.r*.34;a.font=`800 ${N}px Syne, sans-serif`;let B=a.measureText(x.n.toUpperCase()).width;B>x.r*1.5&&(N*=x.r*1.5/B,a.font=`800 ${N}px Syne, sans-serif`),a.fillText(x.n.toUpperCase(),0,-x.r*.08),a.font=`500 ${Math.round(x.r*.2)}px "JetBrains Mono", monospace`,a.fillText(String(x.c).padStart(2,"0"),0,x.r*.3),a.restore()}}return{tick(){f&&(A(),y())},select(x){_=x},poke(x){let R=h.find(C=>C.i===x);R&&(R.vy-=14,R.vx+=(Math.random()-.5)*8)},kick(){h.forEach(x=>{x.vx+=(Math.random()-.5)*30,x.vy-=10+Math.random()*18})}}}var vd="\uFF71\uFF72\uFF73\uFF74\uFF75\uFF76\uFF77\uFF78\uFF79\uFF7A\uFF7B\uFF7C\uFF7D\uFF7E\uFF7F\uFF80\uFF81\uFF82\uFF83\uFF84\uFF85\uFF86\uFF87\uFF88\uFF8A\uFF8B\uFF8C\uFF8D\uFF8E\uFF8F\uFF90\uFF91\uFF92\uFF93\uFF94\uFF95\uFF97\uFF98\uFF9C0123456789ABCDEFXYZ<>+*=",Hr=()=>vd[Math.random()*vd.length|0];function yd(s,{lines:t,mobile:e}){let n=s.getContext("2d"),i,r,a,o,l,c,h,f,u,m,_,g=!1,d={x:-999,y:-999,t:0};function p(){a=Math.min(devicePixelRatio,2),i=s.clientWidth,r=s.clientHeight,s.width=i*a,s.height=r*a,o=e?13:16,l=Math.ceil(i/o),c=Math.ceil(r/o),h=Array.from({length:l},()=>Math.random()*-c),f=Array.from({length:l},()=>.25+Math.random()*.55),m=new Float32Array(l*c),_=Array.from({length:l*c},Hr);let M=document.createElement("canvas");M.width=l,M.height=c;let E=M.getContext("2d");E.fillStyle="#fff",E.textAlign="center",E.textBaseline="middle";let A=c/(t.length+.6)*.95;E.font=`800 ${A}px Syne, sans-serif`;let I=Math.max(...t.map(x=>E.measureText(x).width));I>l*.92&&(A*=l*.92/I),E.font=`800 ${A}px Syne, sans-serif`,t.forEach((x,R)=>E.fillText(x,l/2,c/2+(R-(t.length-1)/2)*A*1.02));let y=E.getImageData(0,0,l,c).data;u=new Uint8Array(l*c);for(let x=0;x<l*c;x++)u[x]=y[x*4+3]>110?1:0;n.setTransform(a,0,0,a,0,0),n.fillStyle="#050806",n.fillRect(0,0,i,r)}let b=(M,E)=>{let T=s.getBoundingClientRect();d.x=M-T.left,d.y=E-T.top,d.t=performance.now()};s.addEventListener("touchstart",M=>b(M.touches[0].clientX,M.touches[0].clientY),{passive:!0}),s.addEventListener("touchmove",M=>b(M.touches[0].clientX,M.touches[0].clientY),{passive:!0}),s.addEventListener("mousemove",M=>b(M.clientX,M.clientY)),s.addEventListener("mouseleave",()=>{d.x=-999}),s.addEventListener("touchend",()=>{d.x=-999}),new IntersectionObserver(([M])=>{g=M.isIntersecting},{threshold:0}).observe(s),addEventListener("resize",p),p();function v(M){if(!g)return;n.setTransform(a,0,0,a,0,0),n.fillStyle="rgba(5,8,6,.14)",n.fillRect(0,0,i,r),n.font=`${o-1}px "JetBrains Mono", monospace`,n.textAlign="center",n.textBaseline="middle";let E=d.x,T=d.y;performance.now()-d.t>2600&&(E=i/2+Math.sin(M*.9)*i*.42,T=r/2+Math.sin(M*1.7)*r*.3);let A=(e?46:70)/o,I=E/o,y=T/o;for(let N=0;N<l;N++){let B=Math.floor(h[N]);B>=0&&B<c&&(n.fillStyle="#d6ffe2",n.fillText(Hr(),N*o+o/2,B*o+o/2),B>0&&(n.fillStyle="#25d968",n.fillText(Hr(),N*o+o/2,(B-1)*o+o/2))),h[N]+=f[N],h[N]>c&&Math.random()>.97&&(h[N]=Math.random()*-20)}let x=Math.max(0,Math.floor(I-A)),R=Math.min(l-1,Math.ceil(I+A)),C=Math.max(0,Math.floor(y-A)),L=Math.min(c-1,Math.ceil(y+A));for(let N=C;N<=L;N++)for(let B=x;B<=R;B++){let z=Math.hypot(B-I,N-y);if(z>A)continue;let q=N*l+B,H=1-z/A;m[q]=Math.min(1,m[q]+H*.35),!u[q]&&Math.random()<H*.5&&(n.fillStyle=`rgba(160,255,200,${H*.9})`,n.fillText(Hr(),B*o+o/2,N*o+o/2))}for(let N=0;N<u.length;N++){if(!u[N])continue;let B=m[N];if(B<.02)continue;m[N]=B*.9975,Math.random()<.015&&(_[N]=Hr());let z=N%l,q=N/l|0;n.fillStyle=B>.6?`rgba(236,255,242,${B})`:`rgba(67,255,138,${B})`,n.fillText(_[N],z*o+o/2,q*o+o/2)}}return{tick:v}}var Me=(s,t=document)=>t.querySelector(s),wn=(s,t=document)=>[...t.querySelectorAll(s)],Yr=(s,t,e)=>Math.min(e,Math.max(t,s)),qt=matchMedia("(pointer: coarse)").matches||innerWidth<700,tM=matchMedia("(pointer: fine)").matches,Id=matchMedia("(prefers-reduced-motion: reduce)").matches,us=JSON.parse(document.getElementById("cfg").textContent),jt=Id?5e3:qt?9e3:2e4,bo=10;history.scrollRestoration="manual";scrollTo(0,0);document.body.classList.add("locked");var eM=Me("#haptic");function Ii(s=10){if(navigator.vibrate)navigator.vibrate(s);else try{eM.click()}catch{}}var nM=Me("#gl"),dr=new Xa({canvas:nM,antialias:!1,powerPreference:"high-performance"});dr.setPixelRatio(Math.min(devicePixelRatio,qt?1.5:1.75));dr.setSize(innerWidth,innerHeight,!1);dr.setClearColor(460555,1);var th=new qa,$e=new ze(50,innerWidth/innerHeight,.1,200);$e.position.z=bo;function Li(){let s=2*Math.tan(Qu.degToRad($e.fov/2))*bo;return{w:s*$e.aspect,h:s}}var Nn=new Float32Array(jt*3),Mn=new Float32Array(jt*3),cs=new Float32Array(jt*3),ls=new Float32Array(jt*3),lr=new Float32Array(jt*3),Ld=new Float32Array(jt),Zr=new Float32Array(jt),Dd=new Float32Array(jt),_e=new Float32Array(jt),nn=new Float32Array(jt),He=new Float32Array(jt),Fn=new Float32Array(jt),hr=new Uint8Array(jt),hs=new Float32Array(jt*3);{let{w:s,h:t}=Li();for(let e=0;e<jt;e++){Zr[e]=Math.random(),Ld[e]=.5+Math.pow(Math.random(),2.5)*1.6,Dd[e]=.01+Math.random()*.018,hs[e*3]=(Math.random()-.5)*s*1.8,hs[e*3+1]=(Math.random()-.5)*t*1.6,hs[e*3+2]=-14+Math.random()*16;for(let n=0;n<3;n++)Nn[e*3+n]=hs[e*3+n]}}var ds=new ln;ds.setAttribute("position",new Te(Nn,3).setUsage(no));ds.setAttribute("aColor",new Te(ls,3).setUsage(no));ds.setAttribute("aSize",new Te(Ld,1));ds.setAttribute("aRand",new Te(Zr,1));var Jc=new cn({transparent:!0,depthWrite:!1,blending:wr,uniforms:{uPx:{value:dr.getPixelRatio()*(qt?2.6:2.2)},uTime:{value:0},uPulse:{value:0}},vertexShader:`
    attribute vec3 aColor; attribute float aSize; attribute float aRand;
    uniform float uPx, uTime, uPulse;
    varying vec3 vColor; varying float vA;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.);
      gl_Position = projectionMatrix * mv;
      float tw = .7 + .3 * sin(uTime * 2.3 + aRand * 60.);
      gl_PointSize = aSize * uPx * tw * (1. + uPulse * .8) * (10. / -mv.z);
      vColor = aColor;
      vA = smoothstep(32., 6., -mv.z);
    }`,fragmentShader:`
    varying vec3 vColor; varying float vA;
    void main(){
      float d = length(gl_PointCoord - .5);
      float a = smoothstep(.5, .05, d);
      gl_FragColor = vec4(vColor * a * vA, 1.);
    }`}),Ud=new Ja(ds,Jc);Ud.frustumCulled=!1;th.add(Ud);var Ao=qt?500:1100,Ri=new Float32Array(Ao*6),Kc=new Float32Array(Ao);for(let s=0;s<Ao;s++){let t=(Math.random()-.5)*26,e=(Math.random()-.5)*18,n=-40+Math.random()*48;Kc[s]=n,Ri.set([t,e,n,t,e,n],s*6)}var eh=new ln;eh.setAttribute("position",new Te(Ri,3).setUsage(no));var Nd=new Cr({color:12564223,transparent:!0,opacity:.45,blending:wr,depthWrite:!1}),Od=new $a(eh,Nd);Od.frustumCulled=!1;th.add(Od);var Eo=[.93,.91,.87],pr=[.55,.42,1],nh=[.31,.94,1],Xr=[1,.7,.42],iM=[.26,1,.54],ur=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e],Pi={name:"none",count:0,cx:0,cy:0};function Bn(s,t,e){lr[s*3]=t[0]*e,lr[s*3+1]=t[1]*e,lr[s*3+2]=t[2]*e}function On(s,t,e,n){cs[s*3]=t,cs[s*3+1]=e,cs[s*3+2]=n}function Co(s){for(let t=s;t<jt;t++)On(t,hs[t*3],hs[t*3+1],hs[t*3+2]),Bn(t,Zr[t]<.2?pr:Eo,.1+Zr[t]*.12)}function Fd(s,t,e,n=120){let i=document.createElement("canvas");i.width=s,i.height=t;let r=i.getContext("2d",{willReadFrequently:!0});e(r,s,t);let a=r.getImageData(0,0,s,t).data,o=[];for(let l=0;l<t;l+=2)for(let c=0;c<s;c+=2){let h=(l*s+c)*4;if(a[h+3]<n)continue;let f=(a[h]*.3+a[h+1]*.59+a[h+2]*.11)/255;o.push({u:c/s-.5,v:-(l/t-.5)*(t/s),b:f})}return o}function Md(s,t,e=1){let{w:n,h:i}=Li(),r=1e3,a=document.createElement("canvas").getContext("2d");a.font="800 400px Syne";let o=400*(r*.94)/Math.max(...t.map(m=>a.measureText(m).width)),l=Math.ceil(o*(t.length*.9+.35)),c=Fd(r,l,m=>{m.font=`800 ${o}px Syne`,m.fillStyle="#fff",m.textAlign="center",m.textBaseline="middle",t.forEach((_,g)=>m.fillText(_,r/2,l/2+(g-(t.length-1)/2)*o*.9))}),h=Math.min(qt?n*.9:n*.82,13.5,(t.length>1?i*.5:i*.9)*r/l),f=qt?i*.06:i*.04,u=Math.floor(jt*.8);for(let m=0;m<u;m++){let _=c[Math.random()*c.length|0];On(m,_.u*h+(Math.random()-.5)*.02,_.v*h+f,(Math.random()-.5)*.4);let g=Zr[m];Bn(m,g<.14?pr:g<.19?nh:Eo,(.32+Math.random()*.2)*e)}return Co(u),{name:s,count:u}}var ii=new Image,Bd=!1;ii.onload=()=>{Bd=!0,Pi.name==="portrait"&&Ro("portrait",!0)};us.foto&&(ii.src=us.foto);function sM(){let{w:s,h:t}=Li(),e=400,n=480,i=Fd(e,n,h=>{if(Bd){let u=Math.max(e/ii.width,n/ii.height);h.drawImage(ii,(e-ii.width*u)/2,(n-ii.height*u)/2,ii.width*u,ii.height*u);return}let f=h.createLinearGradient(60,40,340,480);f.addColorStop(0,"#fff"),f.addColorStop(.55,"#888"),f.addColorStop(1,"#222"),h.fillStyle=f,h.beginPath(),h.ellipse(200,175,78,100,0,0,Math.PI*2),h.fill(),h.fillRect(165,250,70,70),h.beginPath(),h.ellipse(200,480,190,150,0,Math.PI,0),h.fill(),h.globalCompositeOperation="destination-out",h.fillStyle="rgba(0,0,0,.5)",h.beginPath(),h.ellipse(170,165,13,7,0,0,Math.PI*2),h.ellipse(232,165,13,7,0,0,Math.PI*2),h.fill()},60).filter(h=>Math.random()<Math.pow(h.b,1.1)+.08),a=(qt?t*.44:t*.82)*(e/n),o=qt?0:s*.23,l=qt?t*.2:0,c=Math.floor(jt*.85);for(let h=0;h<c;h++){let f=i[Math.random()*i.length|0];On(h,o+f.u*a,l+f.v*a,(f.b-.5)*.8+(Math.random()-.5)*.15),Bn(h,ur(pr,Eo,f.b),.2+f.b*.4)}return Co(c),{name:"portrait",count:c}}function rM(){let{w:s,h:t}=Li(),e=Math.min(s,t)*(qt?.62:.55),n=jt;for(let i=0;i<n;i++){let r=.12+Math.pow(Math.random(),.75)*e,a=i%3;_e[i]=r,nn[i]=a*2.094+r/e*4.2+(Math.random()-.5)*(.5/(r/e+.3)),He[i]=(Math.random()-.5)*.35,Fn[i]=.18/(.35+r/e);let o=r/e;Bn(i,o<.15?Xr:ur(pr,nh,Math.min(1,o*1.3)),(.38-o*.25)*(.6+Math.random()*.6))}return{name:"galaxy",count:n,dyn:"galaxy",cx:0,cy:qt?-t*.05:0}}function aM(){let{w:s,h:t}=Li(),e=Math.min(s,t)*(qt?.17:.13),n=Math.floor(jt*.9);for(let i=0;i<n;i++)if(i%100<55){hr[i]=0,_e[i]=e,nn[i]=Math.random()*Math.PI*2,He[i]=Math.acos(Math.random()*2-1),Fn[i]=.3;let r=.5+.5*Math.cos(nn[i]-2.2)*Math.sin(He[i]);Bn(i,ur([1,.24,.5],Xr,r*.5),.12+r*.3)}else hr[i]=1,_e[i]=e*(1.5+Math.random()*.9),nn[i]=Math.random()*Math.PI*2,He[i]=(Math.random()-.5)*.05,Fn[i]=.4/Math.sqrt(_e[i]),Bn(i,Eo,.14+Math.random()*.18);return Co(n),{name:"planet",count:n,dyn:"planet",cx:0,cy:qt?t*.3:t*.22}}function oM(){let{w:s,h:t}=Li(),e=Math.floor(jt*.9),n=Math.round(s/(qt?.16:.2));for(let i=0;i<e;i++)nn[i]=Math.random()*(t+4),Fn[i]=.6+Math.random()*1.8,He[i]=-Math.random()*8,_e[i]=(i%n/n-.5)*s*1.3,Bn(i,Math.random()<.06?[.85,1,.9]:iM,.12+Math.random()*.22);return Co(e),{name:"rain",count:e,dyn:"rain",span:t+4,top:t/2+2}}function lM(){let{w:s,h:t}=Li(),e=Math.min(s,t)*(qt?.13:.1),n=Math.min(s,t)*(qt?.62:.5),i=jt;for(let r=0;r<i;r++)if(r%100<14)hr[r]=1,_e[r]=e*(1.25+Math.random()*.12),nn[r]=Math.random()*Math.PI*2,Fn[r]=.9,Bn(r,Xr,.25+Math.random()*.25);else{hr[r]=0;let a=Math.pow(Math.random(),1.7);_e[r]=e*1.4+a*(n-e*1.4),nn[r]=Math.random()*Math.PI*2,Fn[r]=.55/Math.pow(_e[r]/e,1.4),He[r]=(Math.random()-.5)*.12*(1+a*3),Bn(r,a<.2?ur([1,.95,.85],Xr,a*5):ur(Xr,pr,Math.min(1,(a-.2)*1.6)),(.42-a*.3)*(.7+Math.random()*.5))}return{name:"hole",count:i,dyn:"hole",rin:e}}function cM(){let{w:s,h:t}=Li(),e=jt,n=Math.round(Math.sqrt(e*2.2)),i=Math.ceil(e/n);for(let r=0;r<e;r++){let a=r%n,o=r/n|0;_e[r]=(a/n-.5)*s*2.2,nn[r]=-2-o/i*22,He[r]=Math.random()*Math.PI*2,Bn(r,ur(nh,pr,o/i),.1+Math.random()*.2)}return{name:"wave",count:e,dyn:"wave",cy:-t*.32}}var hM={text:()=>Md("text",qt?us.hero:us.heroDesk),nora:()=>Md("nora",us.nora,.3),portrait:sM,galaxy:rM,planet:aM,rain:oM,hole:lM,wave:cM};function Ro(s,t){if(!(Pi.name===s&&!t)&&(Pi={cx:0,cy:0,...hM[s]()},!t))for(let e=0;e<jt;e++)Mn[e*3]+=(Math.random()-.5)*.16,Mn[e*3+1]+=(Math.random()-.5)*.16,Mn[e*3+2]+=Math.random()*.25}var pt={x:0,y:0,sx:-999,sy:-999,vx:0,vy:0,active:!1,well:0,down:!1,moved:!1,t0:0,ignore:!1},ar=[],fr=Me("#glow"),Gr=new k;function Qc(s,t){Gr.set(s/innerWidth*2-1,-(t/innerHeight)*2+1,.5).unproject($e),Gr.sub($e.position).normalize();let e=-$e.position.z/Gr.z;return[$e.position.x+Gr.x*e,$e.position.y+Gr.y*e]}function wo(s,t,e){let[n,i]=Qc(s,t);ar.push({x:n,y:i,s:e,t:performance.now()})}function ih(s=.5){for(let t=0;t<jt*3;t++)Mn[t]+=(Math.random()-.5)*s;qr?.kick(),Ii(40)}var To=0;function zd(s,t,e){pt.down=!0,pt.moved=!1,pt.t0=performance.now(),pt.active=!0,pt.sx=s,pt.sy=t,pt.ignore=!!e.closest("#top, .phys, .cards, .sk-tabs, #gate"),fr.classList.add("on"),clearTimeout(To),pt.ignore||(To=setTimeout(()=>{pt.down&&!pt.moved&&(pt.well=1,fr.classList.add("well"),Ii(20))},380))}function kd(s,t){pt.down&&Math.hypot(s-pt.sx,t-pt.sy)>14&&!pt.well&&(pt.moved=!0,clearTimeout(To)),pt.sx=s,pt.sy=t,pt.active=!0}function sh(){clearTimeout(To),pt.well?(wo(pt.sx,pt.sy,.55),Ii(30)):!pt.moved&&!pt.ignore&&performance.now()-pt.t0<260&&wo(pt.sx,pt.sy,.2),pt.down=!1,pt.well=0,fr.classList.remove("well"),qt&&(pt.active=!1,fr.classList.remove("on"))}addEventListener("touchstart",s=>{let t=s.touches[0];zd(t.clientX,t.clientY,s.target)},{passive:!0});addEventListener("touchmove",s=>{let t=s.touches[0];kd(t.clientX,t.clientY)},{passive:!0});addEventListener("touchend",sh);addEventListener("touchcancel",sh);addEventListener("mousedown",s=>{qt||zd(s.clientX,s.clientY,s.target)});addEventListener("mousemove",s=>{qt||kd(s.clientX,s.clientY)});addEventListener("mouseup",()=>{qt||sh()});document.addEventListener("mouseleave",()=>{pt.active=!1,fr.classList.remove("on")});addEventListener("dblclick",()=>ih(.6));addEventListener("contextmenu",s=>s.preventDefault());var Sn={x:0,y:0},or={x:0,y:0};function Sd(s){s.gamma!=null&&(or.x=Yr(s.gamma/30,-1,1),or.y=Yr((s.beta-45)/30,-1,1))}var Wr=null,bd=0;function wd(s){let t=s.accelerationIncludingGravity;if(!(!t||t.x==null)){if(Wr){let e=Math.abs(t.x-Wr.x)+Math.abs(t.y-Wr.y)+Math.abs(t.z-Wr.z),n=performance.now();e>32&&n-bd>900&&(bd=n,ih(.9))}Wr={x:t.x,y:t.y,z:t.z}}}var bn=wn(".sec"),jc=-1,cr=!1,Vd=Me("#dots");bn.forEach((s,t)=>{let e=document.createElement("button");e.setAttribute("aria-label",s.dataset.name),e.addEventListener("click",()=>s.scrollIntoView({behavior:"smooth"})),Vd.append(e)});var Zc=Me("#toast"),Td=0;function uM(s){Zc.textContent=s,Zc.classList.add("on"),clearTimeout(Td),Td=setTimeout(()=>Zc.classList.remove("on"),3800)}var Ad=new Set,rh=".kicker, .big, .lead, .faith, .edu, .stats, .hero-tag, .scroll-cue, .promise, .packs > li, .nora-more, .case, .ctas, .cards, .exp, .phys, .sk-tabs, .sk-panel, .rain, .steps, .hole-wrap, .links, .place, .firma";Id||bn.forEach(s=>ni.set(wn(rh,s),{opacity:0,y:50}));var fM=new IntersectionObserver(s=>s.forEach(t=>{!t.isIntersecting||t.target.dataset.shown||!cr&&t.target===bn[0]||(t.target.dataset.shown=1,ni.to(wn(rh,t.target),{opacity:1,y:0,duration:1.2,ease:"expo.out",stagger:.09}),wn(".stats b[data-to]",t.target).forEach(e=>{let n={v:0};ni.to(n,{v:+e.dataset.to,duration:2,ease:"expo.out",delay:.3,onUpdate:()=>e.textContent=Math.round(n.v)})}))}),{threshold:.08});bn.forEach(s=>fM.observe(s));function Hd(){let s=innerHeight*.5;for(let t=0;t<bn.length;t++){let e=bn[t].getBoundingClientRect();if(e.top<=s&&e.bottom>s){t!==jc&&(jc=t,Ro(bn[t].dataset.shape),wn("button",Vd).forEach((n,i)=>n.classList.toggle("on",i===t)),Ad.has(t)||(Ad.add(t),uM(bn[t].dataset[qt?"hintTouch":"hintDesk"])),Ii(8));return}}}var dM=wn(".card-in");if(!qt){dM.forEach(t=>{t.addEventListener("mousemove",e=>{let n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width,r=(e.clientY-n.top)/n.height;t.style.setProperty("--mx",i.toFixed(3)),t.style.setProperty("--my",r.toFixed(3)),t.style.setProperty("--rx",((i-.5)*26).toFixed(1)+"deg"),t.style.setProperty("--ry",(-(r-.5)*26).toFixed(1)+"deg")}),t.addEventListener("mouseleave",()=>{t.style.setProperty("--rx","0deg"),t.style.setProperty("--ry","0deg")})});let s=null;wn(".cards").forEach(t=>t.addEventListener("mousedown",e=>{e.target.closest("a")||(s={el:t,x:e.clientX,s:t.scrollLeft},t.style.scrollSnapType="none")})),addEventListener("mousemove",t=>{s&&(s.el.scrollLeft=s.s-(t.clientX-s.x)*1.4)}),addEventListener("mouseup",()=>{s&&(s.el.style.scrollSnapType="",s=null)})}function pM(s){let t=innerWidth/2;wn(".card-in",s).forEach(e=>{let n=e.getBoundingClientRect(),i=Yr((n.left+n.width/2-t)/innerWidth,-1,1);e.style.setProperty("--rx",(Sn.x*16-i*30).toFixed(1)+"deg"),e.style.setProperty("--ry",(-Sn.y*12).toFixed(1)+"deg"),e.style.setProperty("--mx",(.5+Sn.x*.6-i*.5).toFixed(3)),e.style.setProperty("--my",(.5+Sn.y*.6).toFixed(3))})}var qr=null,Gd=null;document.fonts.ready.then(()=>{let s=wn(".sk-group"),t=wn(".sk-tabs button"),e=n=>{s.forEach((i,r)=>i.classList.toggle("on",r===n)),t.forEach((i,r)=>i.setAttribute("aria-selected",r===n?"true":"false")),qr?.select(n)};qr=xd(Me("#phys"),{tilt:Sn,haptic:Ii,mobile:qt,balls:s.map(n=>({n:n.dataset.ball,c:+n.dataset.n})),onPick:e}),t.forEach((n,i)=>n.addEventListener("click",()=>{e(i),qr.poke(i)})),Gd=yd(Me("#rain"),{lines:us.matrix,mobile:qt})});var fs=Me("#hold"),mM=Me(".prog",fs),gM=Me(".hold-txt",fs),ge={on:!1,p:0,done:!1,lastBuzz:0};fs.addEventListener("pointerdown",s=>{ge.done||(ge.on=!0,s.preventDefault())});addEventListener("pointerup",()=>{ge.on=!1});addEventListener("pointercancel",()=>{ge.on=!1});function _M(s){if(!ge.done){if(ge.p=Yr(ge.p+(ge.on?s/1.8:-s*1.5),0,1),mM.style.strokeDashoffset=(295.3*(1-ge.p)).toFixed(1),fs.style.transform=`scale(${1+ge.p*.12}) rotate(${(Math.random()-.5)*ge.p*6}deg)`,ge.on){let t=fs.getBoundingClientRect();pt.sx=t.left+t.width/2,pt.sy=t.top+t.height/2,pt.active=!0,pt.well=1+ge.p*2.5;let e=performance.now();e-ge.lastBuzz>260-ge.p*180&&(ge.lastBuzz=e,Ii(6+ge.p*14))}if(ge.p>=1){ge.done=!0,ge.on=!1,pt.well=0;let t=fs.getBoundingClientRect();wo(t.left+t.width/2,t.top+t.height/2,1.1),ih(.7),navigator.vibrate&&navigator.vibrate([30,40,60]),gM.textContent=us.holdDone,Me("#links").classList.add("on"),ni.fromTo("#links .pill",{y:30,opacity:0},{y:0,opacity:1,stagger:.08,duration:1,ease:"expo.out"})}}}var ah=new So,xM=Me("#cursor"),vM=Me("#cursor i"),sr={x:innerWidth/2,y:innerHeight/2};addEventListener("pointerover",s=>xM.classList.toggle("big",!!s.target.closest("[data-hover]")));var Ed=0,rr=0,$c=0,Cd=performance.now(),yM=new Qa;function Wd(){let s=performance.now(),t=Math.min(.05,(s-Cd)/1e3);Cd=s;let e=yM.getElapsedTime(),n=scrollY,i=n-Ed;Ed=n,rr+=(Math.min(Math.abs(i)/38,1.6)-rr)*.12,cr&&Hd(),qt||(or.x=(pt.sx/innerWidth-.5)*2*(pt.active?1:0),or.y=(pt.sy/innerHeight-.5)*2*(pt.active?1:0)),Sn.x+=(or.x-Sn.x)*.06,Sn.y+=(or.y-Sn.y)*.06,$e.position.set(Sn.x*(qt?1.6:1.1),-Sn.y*(qt?1.1:.7),bo-rr*2.2),$e.lookAt(0,0,0),$e.updateMatrixWorld();let r=0,a=0;pt.active&&([r,a]=Qc(pt.sx,pt.sy),pt.vx=r-pt.x,pt.vy=a-pt.y,pt.x=r,pt.y=a,fr.style.transform=`translate(${pt.sx}px, ${pt.sy}px)`);let o=qt?1:1.25,l=o*o,c=Yr(Math.hypot(pt.vx,pt.vy)*4,0,1.5);for(let d=ar.length-1;d>=0;d--){let p=ar[d];p.r=(s-p.t)/1e3*7,p.r>18&&ar.splice(d,1)}let h=0,f=0;if(Pi.dyn==="hole"&&cr){let d=fs.getBoundingClientRect();[h,f]=Qc(d.left+d.width/2,d.top+d.height/2)}let u=Pi,m=u.count||0;for(let d=0;d<jt;d++){let p=d*3;if(u.dyn&&d<m){if(u.dyn==="galaxy"){let C=nn[d]+e*Fn[d],L=_e[d];On(d,u.cx+Math.cos(C)*L,u.cy+Math.sin(C)*L*.42+He[d],Math.sin(C)*L*.55)}else if(u.dyn==="planet"){let C=nn[d]+e*Fn[d];if(hr[d]===0)On(d,u.cx+Math.sin(He[d])*Math.cos(C)*_e[d],u.cy+Math.cos(He[d])*_e[d],Math.sin(He[d])*Math.sin(C)*_e[d]);else{let L=Math.cos(C)*_e[d];On(d,u.cx+L,u.cy+Math.sin(C)*_e[d]*.2-L*.2+He[d],Math.sin(C)*_e[d])}}else if(u.dyn==="rain"){let C=u.top-(nn[d]+e*Fn[d])%u.span;C>cs[p+1]+1&&(Nn[p+1]=C,Mn[p+1]=0,Nn[p]=_e[d]),On(d,_e[d],C,He[d])}else if(u.dyn==="wave"){let C=_e[d],L=nn[d];On(d,C,u.cy+Math.sin(C*.55+e*1.1+He[d]*.15)*.45+Math.sin(L*.4+e*.8)*.55,L)}else if(u.dyn==="hole"){let C=nn[d]+e*Fn[d],L=_e[d];hr[d]===1?On(d,h+Math.cos(C)*L,f+Math.sin(C)*L,-.2):On(d,h+Math.cos(C)*L,f+Math.sin(C)*L*.3+He[d],Math.sin(C)*L*.6)}}let b=Nn[p],v=Nn[p+1],M=Nn[p+2],E=Dd[d],T=(cs[p]-b)*E,A=(cs[p+1]-v)*E,I=(cs[p+2]-M)*E;if(pt.active){let C=b-pt.x,L=v-pt.y,N=C*C+L*L;if(pt.well){let B=Math.min(.035,.012*pt.well/(N+.35));T+=(-C-L*1.15)*B,A+=(-L+C*1.15)*B,I-=M*.02}else if(N<l){let B=Math.sqrt(N)+1e-4,z=1-B/o;T+=C/B*z*.07+pt.vx*z*.5*c,A+=L/B*z*.07+pt.vy*z*.5*c,I+=z*.05}}for(let C=0;C<ar.length;C++){let L=ar[C],N=b-L.x,B=v-L.y,z=Math.sqrt(N*N+B*B)+1e-4,q=Math.abs(z-L.r);if(q<.7){let H=(1-q/.7)*L.s*.25/(1+L.r*.25);T+=N/z*H,A+=B/z*H,I+=H*.8}}let y=(Mn[p]+T)*.9,x=(Mn[p+1]+A)*.9,R=(Mn[p+2]+I)*.9;Mn[p]=y,Mn[p+1]=x,Mn[p+2]=R,Nn[p]=b+y,Nn[p+1]=v+x,Nn[p+2]=M+R,ls[p]+=(lr[p]-ls[p])*.05,ls[p+1]+=(lr[p+1]-ls[p+1])*.05,ls[p+2]+=(lr[p+2]-ls[p+2])*.05}ds.attributes.position.needsUpdate=!0,ds.attributes.aColor.needsUpdate=!0;let _=.015+rr*.6,g=.03+rr*3.2;for(let d=0;d<Ao;d++){let p=Kc[d]+_;p>bo&&(p=-40,Ri[d*6]=Ri[d*6+3]=(Math.random()-.5)*26,Ri[d*6+1]=Ri[d*6+4]=(Math.random()-.5)*18),Kc[d]=p,Ri[d*6+2]=p,Ri[d*6+5]=p-g}if(eh.attributes.position.needsUpdate=!0,Nd.opacity=.25+rr*.4,$c+=(ah.level()-$c)*.2,Jc.uniforms.uTime.value=e,Jc.uniforms.uPulse.value=$c*.6,dr.render(th,$e),cr){qr?.tick(),Gd?.tick(e);let d=bn[jc];qt&&d?.querySelector(".cards")&&pM(d),d?.id==="contact"&&_M(t)}tM&&(sr.x+=(pt.sx-sr.x)*.2,sr.y+=(pt.sy-sr.y)*.2,vM.style.transform=`translate(${sr.x}px, ${sr.y}px)`),requestAnimationFrame(Wd)}var Rd=innerWidth,Pd=innerHeight;addEventListener("resize",()=>{if($e.aspect=innerWidth/innerHeight,$e.updateProjectionMatrix(),dr.setSize(innerWidth,innerHeight,!1),(Math.abs(innerWidth-Rd)>40||Math.abs(innerHeight-Pd)>160)&&(Rd=innerWidth,Pd=innerHeight,Pi.name!=="none")){let s=Pi.name;Pi.name="",Ro(s,!0)}});document.fonts.load("800 100px Syne").finally(()=>{Ro("hole"),requestAnimationFrame(Wd)});Me("#enter").classList.remove("loading");Me("#enter").removeAttribute("aria-busy");Me("#enter").addEventListener("click",()=>{if(cr)return;Ii(20),ah.start(),typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(t=>{t==="granted"&&addEventListener("deviceorientation",Sd)}).catch(()=>{}):addEventListener("deviceorientation",Sd),typeof DeviceMotionEvent<"u"&&typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(t=>{t==="granted"&&addEventListener("devicemotion",wd)}).catch(()=>{}):addEventListener("devicemotion",wd);let s=Me("#enter").getBoundingClientRect();wo(s.left+s.width/2,s.top+s.height/2,1.2),ni.to("#gate",{opacity:0,scale:1.15,duration:.9,ease:"expo.in",onComplete:()=>Me("#gate").remove()}),setTimeout(()=>{cr=!0,document.body.classList.remove("locked"),document.body.classList.add("in"),ni.to("#top",{opacity:1,duration:1}),Hd(),ni.to(wn(rh,bn[0]),{opacity:1,y:0,duration:1.4,ease:"expo.out",stagger:.1,delay:.6}),bn[0].dataset.shown=1},650)});Me("#snd").addEventListener("click",s=>{let t=ah.toggle();s.currentTarget.classList.toggle("off",!t),s.currentTarget.setAttribute("aria-pressed",t?"true":"false"),Ii()});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/

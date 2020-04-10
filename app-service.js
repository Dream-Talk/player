	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content-box data-v-64c5f09e'])
Z([3,'content-top data-v-64c5f09e'])
Z([[6],[[7],[3,'contents']],[3,'question']])
Z([[6],[[7],[3,'contents']],[3,'desc']])
Z([[2,'&&'],[[6],[[7],[3,'contents']],[3,'desc']],[[7],[3,'needAsk']]])
Z([[2,'&&'],[[6],[[7],[3,'contents']],[3,'desc']],[[2,'!'],[[7],[3,'needAsk']]]])
Z([3,'__e'])
Z([3,'data-v-64c5f09e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'contents']],[3,'desc']],[[2,'!'],[[7],[3,'needAsk']]]],[[2,'!'],[[7],[3,'needlogin']]]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'contents']],[3,'desc']],[[2,'!'],[[7],[3,'needAsk']]]],[[7],[3,'needlogin']]])
Z([[6],[[7],[3,'contents']],[3,'picture']])
Z([[6],[[7],[3,'contents']],[3,'topicImage']])
Z([[6],[[7],[3,'contents']],[3,'resultImage']])
Z(z[3])
Z([[6],[[7],[3,'contents']],[3,'audio']])
Z(z[6])
Z([3,'audio-box data-v-64c5f09e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playAudiao']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'contents.audio']]]]]]]]]]])
Z([[6],[[7],[3,'audiores']],[3,'point']])
Z([[6],[[7],[3,'contents']],[3,'picarr']])
Z([[6],[[7],[3,'contents']],[3,'options']])
Z([[6],[[7],[3,'contents']],[3,'prevQuestion']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'list']],[1,0]])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[1])
Z([3,'__e'])
Z([3,'list-item data-v-4f8fd974'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jump']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'view']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'grid-content data-v-6ec0f32e'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'recommendP']])
Z(z[1])
Z([[2,'<'],[[7],[3,'i']],[1,4]])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[1])
Z([[2,'>'],[[7],[3,'i']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'lists']])
Z(z[0])
Z([3,'data-v-734ceb00'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isAds']]])
Z([3,'__e'])
Z([3,'list-item data-v-734ceb00'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toQuestion']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'lists']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'original']],[1,1]])
Z([[6],[[7],[3,'item']],[3,'isAds']])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'navgation-box data-v-203e0491'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'navdata']])
Z([3,'__e'])
Z([3,'nav-item data-v-203e0491'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'switchPage']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'i']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navdata']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'resdot']])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'alert scale data-v-0d6b6140'])
Z([[2,'?:'],[[7],[3,'indeximgs']],[1,'margin: 0 35px'],[1,'']])
Z([3,'content data-v-0d6b6140'])
Z([[2,'?:'],[[7],[3,'indeximgs']],[1,'background:rgba(0,0,0,0)'],[1,'']])
Z([[7],[3,'contents']])
Z([3,'i'])
Z([3,'item'])
Z([[6],[[7],[3,'contents']],[3,'items']])
Z(z[5])
Z([[2,'<'],[[7],[3,'i']],[1,6]])
Z([3,'__e'])
Z([3,'list data-v-0d6b6140'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toQuestion']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'contents.items']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[2,'<'],[[7],[3,'i']],[[6],[[7],[3,'contents']],[3,'update']]])
Z([[7],[3,'indeximgs']])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'swiper-box data-v-4b392d42'])
Z([[2,'!'],[[6],[[6],[[7],[3,'bannersP']],[1,0]],[3,'isAds']]])
Z([[6],[[6],[[7],[3,'bannersP']],[1,0]],[3,'isAds']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'cropper-crop-box data-v-308e31bc']],[[2,'?:'],[[7],[3,'cropFixed']],[1,'pointer-events'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'cropW']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'cropH']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'translate3d('],[[7],[3,'cropOffsertX']]],[1,'px,']],[[7],[3,'cropOffsertY']]],[1,'px,']],[1,'0)']]],[1,';']]])
Z([[2,'!'],[[7],[3,'cropFixed']]])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'result-box data-v-7801d948']],[[2,'?:'],[[7],[3,'page_statues']],[1,'show'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'images']],[3,'result_bottom']]],[1,')']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[7],[3,'nav_height']]],[1,';']]])
Z([[7],[3,'loading_statues']])
Z([[7],[3,'showshare']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-ba24d200'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[1,'header data-v-ba24d200']],[[2,'?:'],[[7],[3,'navFixed']],[1,'fixed'],[1,'']]],[[2,'?:'],[[2,'=='],[[7],[3,'type']],[1,'transparent']],[1,'absolute'],[1,'']]],[[2,'?:'],[[7],[3,'navLine']],[1,'line'],[1,'']]],[[2,'?:'],[[7],[3,'isWhite']],[1,'colorWhite'],[1,'']]],[[2,'?:'],[[7],[3,'themeBgColor']],[1,'themeBgColor'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[2,'+'],[[7],[3,'statusBarHeight']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-image:'],[[7],[3,'navBgColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'navFontColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'opacity:'],[[7],[3,'transparentValue']]],[1,';']]])
Z([3,'left_box data-v-ba24d200'])
Z([[6],[[7],[3,'$slots']],[3,'left']])
Z([3,'left'])
Z([[2,'||'],[[2,'||'],[[7],[3,'back']],[[6],[[7],[3,'$slots']],[3,'left']]],[[7],[3,'home']]])
Z([[4],[[5],[[5],[1,'left_info data-v-ba24d200']],[[2,'?:'],[[7],[3,'isTwoBtn']],[1,'btnMongol'],[1,'']]]])
Z([[2,'&&'],[[7],[3,'back']],[[2,'!'],[[7],[3,'firstPage']]]])
Z([[7],[3,'isTwoBtn']])
Z([[2,'||'],[[2,'&&'],[[7],[3,'firstPage']],[[7],[3,'back']]],[[7],[3,'home']]])
Z([[2,'||'],[[6],[[7],[3,'$slots']],[3,'default']],[[7],[3,'navTitle']]])
Z([[4],[[5],[[5],[[5],[1,'title data-v-ba24d200']],[[2,'?:'],[[7],[3,'titleCenter']],[1,'center'],[1,'']]],[[2,'?:'],[[7],[3,'navFontColor']],[1,'color'],[1,'']]]])
Z([[6],[[7],[3,'$slots']],[3,'default']])
Z([3,'right'])
Z([[2,'=='],[[7],[3,'type']],[1,'transparentFixed']])
Z([[4],[[5],[[5],[1,'header transparentFixed fixed data-v-ba24d200']],[[2,'?:'],[[7],[3,'isWhite']],[1,'colorWhite'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[2,'+'],[[7],[3,'statusBarHeight']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'navTransparentFixedFontColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'opacity:'],[[2,'-'],[1,1],[[7],[3,'transparentValue']]]],[1,';']]],[[2,'+'],[[2,'+'],[1,'z-index:'],[[2,'?:'],[[2,'<'],[[7],[3,'transparentValue']],[1,0.3]],[1,100],[1,90]]],[1,';']]])
Z(z[3])
Z([[6],[[7],[3,'$slots']],[3,'transparentFixedLeft']])
Z([3,'transparentFixedLeft'])
Z(z[6])
Z([3,'left_info data-v-ba24d200'])
Z(z[8])
Z(z[9])
Z(z[11])
Z([[4],[[5],[[5],[1,'title data-v-ba24d200']],[[2,'?:'],[[7],[3,'titleCenter']],[1,'center'],[1,'']]]])
Z([[6],[[7],[3,'$slots']],[3,'transparentFixed']])
Z([3,'transparentFixed'])
Z([3,'transparentFixedRight'])
Z([[2,'=='],[[7],[3,'type']],[1,'fixed']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-75b8ba46'])
Z([[7],[3,'current']])
Z([3,'container data-v-75b8ba46'])
Z([3,'__e'])
Z([3,'scroll data-v-75b8ba46'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'getPagedata']]]]]]]]])
Z([[2,'?:'],[[7],[3,'listshow']],[1,''],[1,'padding-bottom:0px']])
Z([[7],[3,'banners']])
Z([3,'__l'])
Z(z[0])
Z([[7],[3,'height']])
Z([3,'1'])
Z(z[8])
Z(z[0])
Z([[7],[3,'recommend']])
Z([3,'2'])
Z([3,'wrap data-v-75b8ba46'])
Z([[7],[3,'showgroupBox']])
Z(z[8])
Z(z[0])
Z([[7],[3,'latest']])
Z([3,'3'])
Z([[2,'!'],[[7],[3,'load']]])
Z([[7],[3,'listshow']])
Z(z[8])
Z(z[0])
Z([[7],[3,'navData']])
Z([3,'10'])
Z([3,'4'])
Z([3,'search-page data-v-75b8ba46'])
Z([3,'items-box data-v-75b8ba46'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'searchRmd']])
Z(z[31])
Z([[2,'<'],[[7],[3,'i']],[1,3]])
Z(z[31])
Z(z[32])
Z(z[33])
Z(z[31])
Z([[2,'>'],[[7],[3,'i']],[1,2]])
Z(z[8])
Z(z[0])
Z([[7],[3,'featured']])
Z([3,'5'])
Z([[7],[3,'dailybox']])
Z(z[8])
Z(z[0])
Z([[7],[3,'popup']])
Z([3,'6'])
Z([[7],[3,'showindeximg']])
Z(z[8])
Z(z[0])
Z([[7],[3,'indexImg']])
Z([3,'7'])
Z([[7],[3,'showtestbox']])
Z(z[8])
Z(z[0])
Z([[6],[[7],[3,'newScanData']],[3,'data']])
Z([3,'8'])
Z([[7],[3,'selectstar']])
Z(z[8])
Z(z[0])
Z([3,'9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'container data-v-b9462a96'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'listshow']],[1,''],[1,'padding-bottom:0px']])
Z([3,'__l'])
Z([3,'data-v-b9462a96'])
Z([3,'1'])
Z(z[0])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'getPagedata']]]]]]]]])
Z([[2,'+'],[1,'height:calc(100% - 43px);background-size:100%;background-repeat:no-repeat;'],[[2,'&&'],[[2,'=='],[[7],[3,'cid']],[1,16]],[1,'background-image: url(http://uploads-admin.cdn.woquhudong.cn/quce/1577178107sAkJ5.png);padding-top:111rpx']]])
Z([[2,'!'],[[7],[3,'load']]])
Z([[7],[3,'listshow']])
Z(z[4])
Z(z[5])
Z([[7],[3,'navData']])
Z([[7],[3,'navnum']])
Z([3,'2'])
Z([[7],[3,'selectstar']])
Z(z[4])
Z(z[5])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-2f560bfe'])
Z([[7],[3,'search_list']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-000271f2'])
Z([[7],[3,'showimg']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showimg']]],[[7],[3,'needlogin']]])
Z(z[1])
Z([3,'__e'])
Z([3,'caplistcontent data-v-000271f2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'movelist']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'hatlist']])
Z(z[7])
Z(z[4])
Z([3,'hat data-v-000271f2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'changhat']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'i']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'hatlist']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'lock']])
Z([3,'__l'])
Z(z[4])
Z(z[4])
Z([3,'data-v-000271f2'])
Z([1,true])
Z([3,'300'])
Z(z[20])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'cancel']]]]]]]]])
Z([[7],[3,'tempFilePath']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showmodel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-a2df2248'])
Z([[7],[3,'current']])
Z([3,'container data-v-a2df2248'])
Z([3,'__e'])
Z([3,'scroll data-v-a2df2248'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'getPagedata']]]]]]]]])
Z([[2,'?:'],[[7],[3,'listshow']],[1,''],[1,'padding-bottom:0px']])
Z([[7],[3,'banners']])
Z([3,'__l'])
Z(z[0])
Z([[7],[3,'height']])
Z([3,'1'])
Z(z[8])
Z(z[0])
Z([[7],[3,'recommend']])
Z([3,'2'])
Z([3,'wrap data-v-a2df2248'])
Z(z[8])
Z(z[0])
Z([[7],[3,'latest']])
Z([3,'3'])
Z([[2,'!'],[[7],[3,'load']]])
Z([[7],[3,'listshow']])
Z(z[8])
Z(z[0])
Z([[7],[3,'navData']])
Z([[7],[3,'navnum']])
Z([3,'4'])
Z([3,'search-page data-v-a2df2248'])
Z([3,'items-box data-v-a2df2248'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'searchRmd']])
Z(z[30])
Z([[2,'<'],[[7],[3,'i']],[1,3]])
Z(z[30])
Z(z[31])
Z(z[32])
Z(z[30])
Z([[2,'>'],[[7],[3,'i']],[1,2]])
Z(z[8])
Z(z[0])
Z([[7],[3,'featured']])
Z([3,'5'])
Z([[7],[3,'dailybox']])
Z(z[8])
Z(z[0])
Z([[7],[3,'popup']])
Z([3,'6'])
Z([[7],[3,'showindeximg']])
Z(z[8])
Z(z[0])
Z([[7],[3,'indexImg']])
Z([3,'7'])
Z([[7],[3,'showtestbox']])
Z(z[8])
Z(z[0])
Z([[6],[[7],[3,'newScanData']],[3,'data']])
Z([3,'8'])
Z([[7],[3,'selectstar']])
Z(z[8])
Z(z[0])
Z([3,'9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'container data-v-19375abe'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'previewImages']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'animationData']])
Z([3,'swiper data-v-19375abe'])
Z(z[0])
Z([3,'data-v-19375abe'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'width:100%;'])
Z([[6],[[7],[3,'question']],[3,'needAsk']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'question']],[3,'needAsk']]],[[7],[3,'nouserInfo']]],[[6],[[7],[3,'question']],[3,'special_config']]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'question']],[3,'needAsk']]],[[2,'||'],[[2,'!'],[[7],[3,'nouserInfo']]],[[2,'!'],[[6],[[7],[3,'question']],[3,'special_config']]]]])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'answer']])
Z(z[13])
Z(z[10])
Z([3,'answer data-v-19375abe'])
Z(z[6])
Z([3,'padding:0 60rpx 20rpx 60rpx;'])
Z([[6],[[7],[3,'item']],[3,'audio']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[6],[[6],[[7],[3,'item']],[1,'pictures']],[3,'length']])
Z([3,'subidx'])
Z([3,'subitem'])
Z([[6],[[7],[3,'item']],[3,'answer']])
Z(z[24])
Z(z[0])
Z([[4],[[5],[[5],[1,'data-v-19375abe']],[[2,'?:'],[[2,'==='],[[7],[3,'subidx']],[[6],[[7],[3,'activenum']],[[6],[[7],[3,'item']],[3,'index']]]],[1,'answer-item answer-item-active'],[1,'answer-item']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'nextAnswer']],[[4],[[5],[[5],[[7],[3,'subidx']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'answer']],[1,'']],[[7],[3,'i']]],[1,'index']]]]]]]]]]]]]]])
Z([[2,'==='],[[7],[3,'subidx']],[[6],[[7],[3,'activenum']],[[6],[[7],[3,'item']],[3,'index']]]])
Z([[2,'&&'],[[7],[3,'finished']],[[7],[3,'nouserInfo']]])
Z([[2,'&&'],[[7],[3,'finished']],[[2,'!'],[[7],[3,'nouserInfo']]]])
Z([[7],[3,'appid']])
Z([3,'__l'])
Z(z[6])
Z([[7],[3,'huangAd']])
Z([[2,'+'],[1,'1-'],[[7],[3,'i']]])
Z([[2,'&&'],[[7],[3,'special']],[[7],[3,'nouserInfo']]])
Z([[7],[3,'showshare']])
Z([[7],[3,'loading']])
Z([[7],[3,'showmodel']])
Z([3,'area data-v-19375abe'])
Z([[2,'&&'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'adBox_style_type']],[1,1]]])
Z([3,'content data-v-19375abe'])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]],[1,'overflow: hidden;'],[1,'']])
Z([[2,'||'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z([[7],[3,'showbannerad']])
Z(z[6])
Z([3,'list-wrap data-v-19375abe'])
Z(z[13])
Z(z[14])
Z([[7],[3,'modelList']])
Z(z[13])
Z(z[48])
Z(z[13])
Z(z[14])
Z([[7],[3,'adcontent']])
Z(z[13])
Z([[2,'!'],[[7],[3,'showbannerad']]])
Z(z[48])
Z([3,'button data-v-19375abe'])
Z([[2,'=='],[[7],[3,'adBox_style_type']],[1,2]])
Z([[2,'!'],[[7],[3,'forcebutton']]])
Z(z[64])
Z([[7],[3,'forcebutton']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z(z[13])
Z(z[14])
Z(z[58])
Z(z[13])
Z(z[60])
Z(z[60])
Z([[2,'=='],[[7],[3,'banner_ad_style']],[1,2]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]])
Z(z[67])
Z(z[60])
Z([[7],[3,'dingyuemodel']])
Z([[7],[3,'videolockBox']])
Z(z[0])
Z([3,'popupBox data-v-19375abe'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'preventTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'showAdmodelClose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'container data-v-124ba3ab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'previewImages']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'scroll data-v-124ba3ab'])
Z([[2,'+'],[1,'scroll'],[[7],[3,'scrollToView']]])
Z([3,'-webkit-overflow-scrolling:touch;'])
Z([[2,'=='],[[7],[3,'original']],[1,1]])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'items']])
Z(z[7])
Z([3,'data-v-124ba3ab'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component']],[1,'AuthorBox']])
Z([3,'__l'])
Z(z[11])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[7],[3,'needAsk']])
Z([[7],[3,'needlogin']])
Z([[2,'+'],[1,'1-'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component']],[1,'AnswerBox']])
Z(z[13])
Z(z[11])
Z(z[15])
Z([[2,'+'],[1,'2-'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component']],[1,'QuestionNum']])
Z(z[13])
Z(z[11])
Z(z[15])
Z([[2,'+'],[1,'3-'],[[7],[3,'i']]])
Z([[7],[3,'input']])
Z([[7],[3,'button']])
Z([[7],[3,'shuoshuobutton']])
Z(z[0])
Z([3,'againForm data-v-124ba3ab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[7],[3,'canshareqzone']])
Z([[2,'!'],[[7],[3,'canshareqzone']]])
Z([[7],[3,'authorButton']])
Z([[7],[3,'makeButton']])
Z([[7],[3,'videoButton']])
Z([[7],[3,'showMessage']])
Z([[7],[3,'preview']])
Z([[7],[3,'showshare']])
Z([[7],[3,'showmodel']])
Z([3,'area data-v-124ba3ab'])
Z([[2,'&&'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'adBox_style_type']],[1,1]]])
Z([3,'content data-v-124ba3ab'])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]],[1,'overflow: hidden;'],[1,'']])
Z([[2,'||'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z([[7],[3,'showbannerad']])
Z(z[11])
Z([3,'list-wrap data-v-124ba3ab'])
Z(z[7])
Z(z[8])
Z([[7],[3,'modelList']])
Z(z[7])
Z(z[50])
Z(z[7])
Z(z[8])
Z([[7],[3,'adcontent']])
Z(z[7])
Z([[2,'!'],[[7],[3,'showbannerad']]])
Z(z[50])
Z([3,'button data-v-124ba3ab'])
Z([[2,'=='],[[7],[3,'adBox_style_type']],[1,2]])
Z([[2,'!'],[[7],[3,'forcebutton']]])
Z(z[66])
Z([[7],[3,'forcebutton']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z(z[7])
Z(z[8])
Z(z[60])
Z(z[7])
Z(z[62])
Z(z[62])
Z([[2,'=='],[[7],[3,'banner_ad_style']],[1,2]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]])
Z(z[69])
Z(z[62])
Z([[7],[3,'loading']])
Z([[7],[3,'dingyuemodel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'container data-v-1ea419b0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'previewImages']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'animationData']])
Z([3,'swiper data-v-1ea419b0'])
Z([3,'current-question data-v-1ea419b0'])
Z(z[0])
Z([3,'data-v-1ea419b0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'width:100%;'])
Z([[7],[3,'needAsk']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'needAsk']]],[[2,'!'],[[7],[3,'hasUserinfo']]]],[[7],[3,'special_config']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'needAsk']]],[[2,'||'],[[7],[3,'hasUserinfo']],[[2,'!'],[[7],[3,'special_config']]]]])
Z([[7],[3,'banneradutilid']])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'question']])
Z(z[15])
Z(z[11])
Z([3,'answer data-v-1ea419b0'])
Z(z[7])
Z([3,'padding:0 60rpx 20rpx 60rpx;'])
Z([[6],[[7],[3,'item']],[3,'audio']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[6],[[6],[[7],[3,'item']],[1,'pictures']],[3,'length']])
Z([3,'subidx'])
Z([3,'subitem'])
Z([[6],[[7],[3,'item']],[3,'answer']])
Z(z[26])
Z(z[0])
Z([[4],[[5],[[5],[1,'data-v-1ea419b0']],[[2,'?:'],[[2,'==='],[[7],[3,'subidx']],[[6],[[7],[3,'activenum']],[[6],[[7],[3,'item']],[3,'index']]]],[1,'answer-item answer-item-active'],[1,'answer-item']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'nextAnswer']],[[4],[[5],[[5],[[7],[3,'subidx']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'question']],[1,'']],[[7],[3,'i']]],[1,'index']]]]]]]]]]]]]]])
Z([[2,'==='],[[7],[3,'subidx']],[[6],[[7],[3,'activenum']],[[6],[[7],[3,'item']],[3,'index']]]])
Z([[2,'&&'],[[7],[3,'finished']],[[2,'!'],[[7],[3,'hasUserinfo']]]])
Z([[2,'&&'],[[7],[3,'finished']],[[7],[3,'hasUserinfo']]])
Z([3,'__l'])
Z(z[7])
Z([[7],[3,'huangAd']])
Z([[2,'+'],[1,'1-'],[[7],[3,'i']]])
Z([[2,'&&'],[[7],[3,'special']],[[2,'!'],[[7],[3,'hasUserinfo']]]])
Z([[7],[3,'showshare']])
Z([[7],[3,'showmodel']])
Z([3,'area data-v-1ea419b0'])
Z([[2,'&&'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'adBox_style_type']],[1,1]]])
Z([3,'content data-v-1ea419b0'])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]],[1,'overflow: hidden;'],[1,'']])
Z([[2,'||'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z([[7],[3,'showbannerad']])
Z(z[7])
Z([3,'list-wrap data-v-1ea419b0'])
Z(z[15])
Z(z[16])
Z([[7],[3,'modelList']])
Z(z[15])
Z(z[48])
Z(z[15])
Z(z[16])
Z([[7],[3,'adcontent']])
Z(z[15])
Z([[2,'!'],[[7],[3,'showbannerad']]])
Z(z[48])
Z([3,'button data-v-1ea419b0'])
Z([[2,'=='],[[7],[3,'adBox_style_type']],[1,2]])
Z([[2,'!'],[[7],[3,'forcebutton']]])
Z(z[64])
Z([[7],[3,'forcebutton']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z(z[15])
Z(z[16])
Z(z[58])
Z(z[15])
Z(z[60])
Z(z[60])
Z([[2,'=='],[[7],[3,'banner_ad_style']],[1,2]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]])
Z(z[67])
Z(z[60])
Z([[7],[3,'loading']])
Z([[7],[3,'dingyuemodel']])
Z([[7],[3,'videolockBox']])
Z(z[0])
Z([3,'popupBox data-v-1ea419b0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'preventTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'showAdmodelClose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mainbox data-v-205cbec8'])
Z([3,'inputbox'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'contentmsg']])
Z(z[2])
Z([3,'data-v-205cbec8'])
Z([[2,'+'],[1,'id'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'temp']],[1,'msg']])
Z([3,'__l'])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'msg']])
Z([[2,'+'],[1,'1-'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'temp']],[1,'umsg']])
Z(z[9])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'umsg']])
Z([[6],[[7],[3,'item']],[3,'usericon']])
Z([[2,'+'],[1,'2-'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'temp']],[1,'msgimg']])
Z(z[9])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'msgimg']])
Z([[2,'+'],[1,'3-'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'temp']],[1,'uimg']])
Z(z[9])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'uimg']])
Z(z[17])
Z([[2,'+'],[1,'4-'],[[7],[3,'i']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'temp']],[1,'resimg']])
Z(z[9])
Z([3,'__e'])
Z(z[32])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^fpreview']],[[4],[[5],[[4],[[5],[1,'fpreview']]]]]]]],[[4],[[5],[[5],[1,'^fsaveimg']],[[4],[[5],[[4],[[5],[1,'fsaveimg']]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'resimg']])
Z([[7],[3,'gameheight']])
Z([[2,'+'],[1,'5-'],[[7],[3,'i']]])
Z([3,'xb_btn_area data-v-205cbec8'])
Z([3,'xb_btn_field'])
Z([[2,'=='],[[7],[3,'ischeck']],[1,0]])
Z(z[41])
Z([[2,'=='],[[7],[3,'ischeck']],[1,1]])
Z([[2,'=='],[[7],[3,'ischeck']],[1,2]])
Z([[2,'=='],[[7],[3,'ischeck']],[1,3]])
Z([[2,'=='],[[7],[3,'ischeck']],[1,4]])
Z([[7],[3,'showmodel']])
Z([3,'content data-v-205cbec8'])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]],[1,'overflow: hidden;'],[1,'']])
Z([[2,'||'],[[7],[3,'showbannerad']],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z([[7],[3,'showbannerad']])
Z(z[6])
Z([3,'list-wrap data-v-205cbec8'])
Z(z[2])
Z(z[3])
Z([[7],[3,'modelList']])
Z(z[2])
Z(z[51])
Z(z[2])
Z(z[3])
Z([[7],[3,'adcontent']])
Z(z[2])
Z([[2,'!'],[[7],[3,'showbannerad']]])
Z(z[51])
Z([3,'button data-v-205cbec8'])
Z([[2,'!'],[[7],[3,'forcebutton']]])
Z(z[66])
Z([[7],[3,'forcebutton']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,2]]])
Z(z[2])
Z(z[3])
Z(z[61])
Z(z[2])
Z(z[63])
Z(z[63])
Z([[2,'=='],[[7],[3,'banner_ad_style']],[1,2]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showbannerad']]],[[2,'=='],[[7],[3,'banner_ad_style']],[1,1]]])
Z(z[69])
Z(z[63])
Z(z[9])
Z(z[32])
Z(z[32])
Z(z[6])
Z([1,true])
Z([3,'300'])
Z(z[85])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'cancel']]]]]]]]])
Z([[7],[3,'uploadimg']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'page_control']])
Z([3,'page-box data-v-b692cb06'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'images']],[3,'page_bg']]],[1,')']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[7],[3,'nav_height']]],[1,';']]])
Z([[4],[[5],[[5],[[5],[1,'card-box data-v-b692cb06']],[[2,'?:'],[[6],[[7],[3,'class_show']],[1,0]],[1,'show'],[1,'']]],[[2,'?:'],[[7],[3,'page_statues']],[1,'move'],[1,'']]]])
Z([[2,'!'],[[7],[3,'can_get_user']]])
Z([[6],[[7],[3,'start_statues']],[1,2]])
Z([[7],[3,'choice_tip_statues']])
Z([[7],[3,'has_video']])
Z([[7],[3,'finger_statues']])
Z([[7],[3,'save_statues']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-b692cb06 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^save']],[[4],[[5],[[4],[[5],[1,'save']]]]]]]]])
Z([3,'result'])
Z([[7],[3,'canvas_data']])
Z([3,'1'])
Z(z[10])
Z([3,'data-v-b692cb06'])
Z([[6],[[6],[[7],[3,'canvas_data']],[3,'attr']],[3,'title']])
Z([3,'#FFF'])
Z([3,'transparentFixed'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/AnswerBox.wxml','./components/AuthorBox.wxml','./components/ChannelFour.wxml','./components/GridBox.wxml','./components/ListBox.wxml','./components/LoadBox.wxml','./components/NavgationBox.wxml','./components/PoptestBox.wxml','./components/PopupBox.wxml','./components/QuestionNum.wxml','./components/SearchBox.wxml','./components/SelectStar.wxml','./components/SwiperBox.wxml','./components/invinbg-image-cropper/invinbg-image-cropper.wxml','./components/tanme/msgimg.wxml','./components/tanme/resultimg.wxml','./components/tanme/userimg.wxml','./components/tanme/usermsg.wxml','./components/tarotmark/Result.wxml','./components/tarotmark/zhouWei-navBar/index.wxml','./p/i.wxml','./pages/Category/Category.wxml','./pages/Search/Search.wxml','./pages/christmas/index.wxml','./pages/christmas/result.wxml','./pages/home/index.wxml','./pages/question/index.wxml','./pages/quiz/index.wxml','./pages/quizchoiceness/index.wxml','./pages/tanmegame/game.wxml','./pages/tanmegame/message.wxml','./pages/tarotmark/item.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',1,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,2,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,3,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(cI,aL)
if(_oz(z,4,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(cI,tM)
if(_oz(z,5,e,s,gg)){tM.wxVkey=1
var xQ=_mz(z,'form',['bindsubmit',6,'class',1,'data-event-opts',2,'reportSubmit',3],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,10,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,11,e,s,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
_(tM,xQ)
}
var eN=_v()
_(cI,eN)
if(_oz(z,12,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(cI,bO)
if(_oz(z,13,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(cI,oP)
if(_oz(z,14,e,s,gg)){oP.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(xC,cI)
var oD=_v()
_(xC,oD)
if(_oz(z,15,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,16,e,s,gg)){fE.wxVkey=1
var cT=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,20,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
_(fE,cT)
}
var cF=_v()
_(xC,cF)
if(_oz(z,21,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(xC,hG)
if(_oz(z,22,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(xC,oH)
if(_oz(z,23,e,s,gg)){oH.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cW=_v()
_(r,cW)
if(_oz(z,0,e,s,gg)){cW.wxVkey=1
var oX=_v()
_(cW,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],t1,aZ,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,8,t1,aZ,gg)){x5.wxVkey=1
}
x5.wxXCkey=1
_(e2,o4)
return e2
}
oX.wxXCkey=2
_2z(z,3,lY,e,s,gg,oX,'item','i','i')
}
cW.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_v()
_(oBB,aDB)
if(_oz(z,5,cAB,o0,gg)){aDB.wxVkey=1
}
aDB.wxXCkey=1
return oBB
}
c8.wxXCkey=2
_2z(z,3,h9,e,s,gg,c8,'item','i','i')
var tEB=_v()
_(f7,tEB)
var eFB=function(oHB,bGB,xIB,gg){
var fKB=_v()
_(xIB,fKB)
if(_oz(z,10,oHB,bGB,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
return xIB
}
tEB.wxXCkey=2
_2z(z,8,eFB,e,s,gg,tEB,'item','i','i')
_(r,f7)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hMB=_v()
_(r,hMB)
var oNB=function(oPB,cOB,lQB,gg){
var tSB=_v()
_(lQB,tSB)
if(_oz(z,5,oPB,cOB,gg)){tSB.wxVkey=1
var oVB=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oPB,cOB,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,9,oPB,cOB,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
_(tSB,oVB)
}
var eTB=_v()
_(lQB,eTB)
if(_oz(z,10,oPB,cOB,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(lQB,bUB)
if(_oz(z,11,oPB,cOB,gg)){bUB.wxVkey=1
}
tSB.wxXCkey=1
eTB.wxXCkey=1
bUB.wxXCkey=1
return lQB
}
hMB.wxXCkey=2
_2z(z,2,oNB,e,s,gg,hMB,'item','i','i')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cZB=_n('view')
_rz(z,cZB,'class',0,e,s,gg)
var o2B=_v()
_(cZB,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],l5B,o4B,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,7,l5B,o4B,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
_(a6B,e8B)
return a6B
}
o2B.wxXCkey=2
_2z(z,3,c3B,e,s,gg,o2B,'item','i','')
var h1B=_v()
_(cZB,h1B)
if(_oz(z,8,e,s,gg)){h1B.wxVkey=1
}
h1B.wxXCkey=1
_(r,cZB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oBC=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var cDC=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,4,e,s,gg)){hEC.wxVkey=1
var cGC=_v()
_(hEC,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_v()
_(tKC,bMC)
if(_oz(z,9,aJC,lIC,gg)){bMC.wxVkey=1
var oNC=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],aJC,lIC,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,13,aJC,lIC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
_(bMC,oNC)
}
bMC.wxXCkey=1
return tKC
}
cGC.wxXCkey=2
_2z(z,7,oHC,e,s,gg,cGC,'item','i','i')
}
var oFC=_v()
_(cDC,oFC)
if(_oz(z,14,e,s,gg)){oFC.wxVkey=1
}
hEC.wxXCkey=1
oFC.wxXCkey=1
_(oBC,cDC)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,15,e,s,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
_(r,oBC)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,1,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_oz(z,2,e,s,gg)){oVC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
_(r,oTC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var aXC=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,2,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(aXC,eZC)
if(_oz(z,3,e,s,gg)){eZC.wxVkey=1
}
tYC.wxXCkey=1
eZC.wxXCkey=1
_(r,aXC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var c6C=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,2,e,s,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,3,e,s,gg)){o8C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
_(r,c6C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var tCD=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var eDD=_n('view')
_rz(z,eDD,'class',3,e,s,gg)
var bED=_v()
_(eDD,bED)
if(_oz(z,4,e,s,gg)){bED.wxVkey=1
var xGD=_n('slot')
_rz(z,xGD,'name',5,e,s,gg)
_(bED,xGD)
}
else{bED.wxVkey=2
var oHD=_v()
_(bED,oHD)
if(_oz(z,6,e,s,gg)){oHD.wxVkey=1
var fID=_n('view')
_rz(z,fID,'class',7,e,s,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,8,e,s,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(fID,hKD)
if(_oz(z,9,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(fID,oLD)
if(_oz(z,10,e,s,gg)){oLD.wxVkey=1
}
cJD.wxXCkey=1
hKD.wxXCkey=1
oLD.wxXCkey=1
_(oHD,fID)
}
oHD.wxXCkey=1
}
var oFD=_v()
_(eDD,oFD)
if(_oz(z,11,e,s,gg)){oFD.wxVkey=1
var cMD=_n('view')
_rz(z,cMD,'class',12,e,s,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,13,e,s,gg)){oND.wxVkey=1
var lOD=_n('slot')
_(oND,lOD)
}
else{oND.wxVkey=2
}
oND.wxXCkey=1
_(oFD,cMD)
}
bED.wxXCkey=1
oFD.wxXCkey=1
_(tCD,eDD)
var aPD=_n('slot')
_rz(z,aPD,'name',14,e,s,gg)
_(tCD,aPD)
_(o0C,tCD)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,15,e,s,gg)){lAD.wxVkey=1
var tQD=_mz(z,'view',['class',16,'style',1],[],e,s,gg)
var eRD=_n('view')
_rz(z,eRD,'class',18,e,s,gg)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,19,e,s,gg)){bSD.wxVkey=1
var xUD=_n('slot')
_rz(z,xUD,'name',20,e,s,gg)
_(bSD,xUD)
}
else{bSD.wxVkey=2
var oVD=_v()
_(bSD,oVD)
if(_oz(z,21,e,s,gg)){oVD.wxVkey=1
var fWD=_n('view')
_rz(z,fWD,'class',22,e,s,gg)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,23,e,s,gg)){cXD.wxVkey=1
}
var hYD=_v()
_(fWD,hYD)
if(_oz(z,24,e,s,gg)){hYD.wxVkey=1
}
cXD.wxXCkey=1
hYD.wxXCkey=1
_(oVD,fWD)
}
oVD.wxXCkey=1
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,25,e,s,gg)){oTD.wxVkey=1
var oZD=_n('view')
_rz(z,oZD,'class',26,e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,27,e,s,gg)){c1D.wxVkey=1
var o2D=_n('slot')
_rz(z,o2D,'name',28,e,s,gg)
_(c1D,o2D)
}
else{c1D.wxVkey=2
}
c1D.wxXCkey=1
_(oTD,oZD)
}
bSD.wxXCkey=1
oTD.wxXCkey=1
_(tQD,eRD)
var l3D=_n('slot')
_rz(z,l3D,'name',29,e,s,gg)
_(tQD,l3D)
_(lAD,tQD)
}
var aBD=_v()
_(o0C,aBD)
if(_oz(z,30,e,s,gg)){aBD.wxVkey=1
}
lAD.wxXCkey=1
aBD.wxXCkey=1
_(r,o0C)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var t5D=_n('view')
_rz(z,t5D,'class',0,e,s,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,1,e,s,gg)){e6D.wxVkey=1
var fAE=_n('view')
_rz(z,fAE,'class',2,e,s,gg)
var hCE=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',3,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oDE=_mz(z,'swiper-box',['banners',7,'bind:__l',1,'class',2,'height',3,'vueId',4],[],e,s,gg)
_(hCE,oDE)
var cEE=_mz(z,'grid-box',['bind:__l',12,'class',1,'recommend',2,'vueId',3],[],e,s,gg)
_(hCE,cEE)
var oFE=_n('view')
_rz(z,oFE,'class',16,e,s,gg)
var lGE=_v()
_(oFE,lGE)
if(_oz(z,17,e,s,gg)){lGE.wxVkey=1
}
var tIE=_mz(z,'list-box',['bind:__l',18,'class',1,'list',2,'vueId',3],[],e,s,gg)
_(oFE,tIE)
var aHE=_v()
_(oFE,aHE)
if(_oz(z,22,e,s,gg)){aHE.wxVkey=1
}
lGE.wxXCkey=1
aHE.wxXCkey=1
_(hCE,oFE)
_(fAE,hCE)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,23,e,s,gg)){cBE.wxVkey=1
var eJE=_mz(z,'navgation-box',['bind:__l',24,'class',1,'navdata',2,'page',3,'vueId',4],[],e,s,gg)
_(cBE,eJE)
}
cBE.wxXCkey=1
cBE.wxXCkey=3
_(e6D,fAE)
}
else{e6D.wxVkey=2
var bKE=_n('view')
_rz(z,bKE,'class',29,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',30,e,s,gg)
var xME=_v()
_(oLE,xME)
var oNE=function(cPE,fOE,hQE,gg){
var cSE=_v()
_(hQE,cSE)
if(_oz(z,35,cPE,fOE,gg)){cSE.wxVkey=1
}
cSE.wxXCkey=1
return hQE
}
xME.wxXCkey=2
_2z(z,33,oNE,e,s,gg,xME,'item','i','i')
var oTE=_v()
_(oLE,oTE)
var lUE=function(tWE,aVE,eXE,gg){
var oZE=_v()
_(eXE,oZE)
if(_oz(z,40,tWE,aVE,gg)){oZE.wxVkey=1
}
oZE.wxXCkey=1
return eXE
}
oTE.wxXCkey=2
_2z(z,38,lUE,e,s,gg,oTE,'item','i','i')
_(bKE,oLE)
var x1E=_mz(z,'list-box',['bind:__l',41,'class',1,'list',2,'vueId',3],[],e,s,gg)
_(bKE,x1E)
_(e6D,bKE)
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,45,e,s,gg)){b7D.wxVkey=1
var o2E=_mz(z,'popup-box',['bind:__l',46,'class',1,'content',2,'vueId',3],[],e,s,gg)
_(b7D,o2E)
}
var o8D=_v()
_(t5D,o8D)
if(_oz(z,50,e,s,gg)){o8D.wxVkey=1
var f3E=_mz(z,'popup-box',['bind:__l',51,'class',1,'indeximg',2,'vueId',3],[],e,s,gg)
_(o8D,f3E)
}
var x9D=_v()
_(t5D,x9D)
if(_oz(z,55,e,s,gg)){x9D.wxVkey=1
var c4E=_mz(z,'poptest-box',['bind:__l',56,'class',1,'indextest',2,'vueId',3],[],e,s,gg)
_(x9D,c4E)
}
var o0D=_v()
_(t5D,o0D)
if(_oz(z,60,e,s,gg)){o0D.wxVkey=1
var h5E=_mz(z,'select-star-box',['bind:__l',61,'class',1,'vueId',2],[],e,s,gg)
_(o0D,h5E)
}
e6D.wxXCkey=1
e6D.wxXCkey=3
e6D.wxXCkey=3
b7D.wxXCkey=1
b7D.wxXCkey=3
o8D.wxXCkey=1
o8D.wxXCkey=3
x9D.wxXCkey=1
x9D.wxXCkey=3
o0D.wxXCkey=1
o0D.wxXCkey=3
_(r,t5D)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var c7E=_mz(z,'view',['catchtouchmove',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var a0E=_mz(z,'search-box',['bind:__l',4,'class',1,'vueId',2],[],e,s,gg)
_(c7E,a0E)
var tAF=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscrolltolower',7,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,11,e,s,gg)){eBF.wxVkey=1
}
eBF.wxXCkey=1
_(c7E,tAF)
var o8E=_v()
_(c7E,o8E)
if(_oz(z,12,e,s,gg)){o8E.wxVkey=1
var bCF=_mz(z,'navgation-box',['bind:__l',13,'class',1,'navdata',2,'page',3,'vueId',4],[],e,s,gg)
_(o8E,bCF)
}
var l9E=_v()
_(c7E,l9E)
if(_oz(z,18,e,s,gg)){l9E.wxVkey=1
var oDF=_mz(z,'select-star-box',['bind:__l',19,'class',1,'vueId',2],[],e,s,gg)
_(l9E,oDF)
}
o8E.wxXCkey=1
o8E.wxXCkey=3
l9E.wxXCkey=1
l9E.wxXCkey=3
_(r,c7E)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oFF=_mz(z,'list-box',['bind:__l',0,'class',1,'list',1,'vueId',2],[],e,s,gg)
_(r,oFF)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var cHF=_n('view')
_rz(z,cHF,'class',0,e,s,gg)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,1,e,s,gg)){hIF.wxVkey=1
}
var oJF=_v()
_(cHF,oJF)
if(_oz(z,2,e,s,gg)){oJF.wxVkey=1
}
var cKF=_v()
_(cHF,cKF)
if(_oz(z,3,e,s,gg)){cKF.wxVkey=1
}
var oLF=_mz(z,'view',['bindtouchmove',4,'class',1,'data-event-opts',2],[],e,s,gg)
var lMF=_v()
_(oLF,lMF)
var aNF=function(ePF,tOF,bQF,gg){
var xSF=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],ePF,tOF,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,14,ePF,tOF,gg)){oTF.wxVkey=1
}
oTF.wxXCkey=1
_(bQF,xSF)
return bQF
}
lMF.wxXCkey=2
_2z(z,9,aNF,e,s,gg,lMF,'item','i','i')
_(cHF,oLF)
var fUF=_mz(z,'image-cropper',['bind:__l',15,'bind:cancel',1,'bind:confirm',2,'class',3,'cropFixed',4,'cropHeight',5,'cropWidth',6,'data-event-opts',7,'src',8,'vueId',9],[],e,s,gg)
_(cHF,fUF)
hIF.wxXCkey=1
oJF.wxXCkey=1
cKF.wxXCkey=1
_(r,cHF)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var hWF=_v()
_(r,hWF)
if(_oz(z,0,e,s,gg)){hWF.wxVkey=1
}
hWF.wxXCkey=1
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var cYF=_n('view')
_rz(z,cYF,'class',0,e,s,gg)
var oZF=_v()
_(cYF,oZF)
if(_oz(z,1,e,s,gg)){oZF.wxVkey=1
var b5F=_n('view')
_rz(z,b5F,'class',2,e,s,gg)
var x7F=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',3,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var o8F=_mz(z,'swiper-box',['banners',7,'bind:__l',1,'class',2,'height',3,'vueId',4],[],e,s,gg)
_(x7F,o8F)
var f9F=_mz(z,'grid-box',['bind:__l',12,'class',1,'recommend',2,'vueId',3],[],e,s,gg)
_(x7F,f9F)
var c0F=_n('view')
_rz(z,c0F,'class',16,e,s,gg)
var oBG=_mz(z,'list-box',['bind:__l',17,'class',1,'list',2,'vueId',3],[],e,s,gg)
_(c0F,oBG)
var hAG=_v()
_(c0F,hAG)
if(_oz(z,21,e,s,gg)){hAG.wxVkey=1
}
hAG.wxXCkey=1
_(x7F,c0F)
_(b5F,x7F)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,22,e,s,gg)){o6F.wxVkey=1
var cCG=_mz(z,'navgation-box',['bind:__l',23,'class',1,'navdata',2,'page',3,'vueId',4],[],e,s,gg)
_(o6F,cCG)
}
o6F.wxXCkey=1
o6F.wxXCkey=3
_(oZF,b5F)
}
else{oZF.wxVkey=2
var oDG=_n('view')
_rz(z,oDG,'class',28,e,s,gg)
var lEG=_n('view')
_rz(z,lEG,'class',29,e,s,gg)
var aFG=_v()
_(lEG,aFG)
var tGG=function(bIG,eHG,oJG,gg){
var oLG=_v()
_(oJG,oLG)
if(_oz(z,34,bIG,eHG,gg)){oLG.wxVkey=1
}
oLG.wxXCkey=1
return oJG
}
aFG.wxXCkey=2
_2z(z,32,tGG,e,s,gg,aFG,'item','i','i')
var fMG=_v()
_(lEG,fMG)
var cNG=function(oPG,hOG,cQG,gg){
var lSG=_v()
_(cQG,lSG)
if(_oz(z,39,oPG,hOG,gg)){lSG.wxVkey=1
}
lSG.wxXCkey=1
return cQG
}
fMG.wxXCkey=2
_2z(z,37,cNG,e,s,gg,fMG,'item','i','i')
_(oDG,lEG)
var aTG=_mz(z,'list-box',['bind:__l',40,'class',1,'list',2,'vueId',3],[],e,s,gg)
_(oDG,aTG)
_(oZF,oDG)
}
var l1F=_v()
_(cYF,l1F)
if(_oz(z,44,e,s,gg)){l1F.wxVkey=1
var tUG=_mz(z,'popup-box',['bind:__l',45,'class',1,'content',2,'vueId',3],[],e,s,gg)
_(l1F,tUG)
}
var a2F=_v()
_(cYF,a2F)
if(_oz(z,49,e,s,gg)){a2F.wxVkey=1
var eVG=_mz(z,'popup-box',['bind:__l',50,'class',1,'indeximg',2,'vueId',3],[],e,s,gg)
_(a2F,eVG)
}
var t3F=_v()
_(cYF,t3F)
if(_oz(z,54,e,s,gg)){t3F.wxVkey=1
var bWG=_mz(z,'poptest-box',['bind:__l',55,'class',1,'indextest',2,'vueId',3],[],e,s,gg)
_(t3F,bWG)
}
var e4F=_v()
_(cYF,e4F)
if(_oz(z,59,e,s,gg)){e4F.wxVkey=1
var oXG=_mz(z,'select-star-box',['bind:__l',60,'class',1,'vueId',2],[],e,s,gg)
_(e4F,oXG)
}
oZF.wxXCkey=1
oZF.wxXCkey=3
oZF.wxXCkey=3
l1F.wxXCkey=1
l1F.wxXCkey=3
a2F.wxXCkey=1
a2F.wxXCkey=3
t3F.wxXCkey=1
t3F.wxXCkey=3
e4F.wxXCkey=1
e4F.wxXCkey=3
_(r,cYF)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oZG=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o6G=_mz(z,'view',['animation',3,'class',1],[],e,s,gg)
var a8G=_mz(z,'form',['bindsubmit',5,'class',1,'data-event-opts',2,'reportSubmit',3,'style',4],[],e,s,gg)
var t9G=_v()
_(a8G,t9G)
if(_oz(z,10,e,s,gg)){t9G.wxVkey=1
}
var e0G=_v()
_(a8G,e0G)
if(_oz(z,11,e,s,gg)){e0G.wxVkey=1
}
var bAH=_v()
_(a8G,bAH)
if(_oz(z,12,e,s,gg)){bAH.wxVkey=1
}
t9G.wxXCkey=1
e0G.wxXCkey=1
bAH.wxXCkey=1
_(o6G,a8G)
var oBH=_v()
_(o6G,oBH)
var xCH=function(fEH,oDH,cFH,gg){
var oHH=_v()
_(cFH,oHH)
if(_oz(z,17,fEH,oDH,gg)){oHH.wxVkey=1
var cIH=_n('view')
_rz(z,cIH,'class',18,fEH,oDH,gg)
var oJH=_mz(z,'view',['class',19,'style',1],[],fEH,oDH,gg)
var lKH=_v()
_(oJH,lKH)
if(_oz(z,21,fEH,oDH,gg)){lKH.wxVkey=1
}
var aLH=_v()
_(oJH,aLH)
if(_oz(z,22,fEH,oDH,gg)){aLH.wxVkey=1
}
var tMH=_v()
_(oJH,tMH)
if(_oz(z,23,fEH,oDH,gg)){tMH.wxVkey=1
}
var oPH=_v()
_(oJH,oPH)
var xQH=function(fSH,oRH,cTH,gg){
var oVH=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],fSH,oRH,gg)
var cWH=_v()
_(oVH,cWH)
if(_oz(z,31,fSH,oRH,gg)){cWH.wxVkey=1
}
cWH.wxXCkey=1
_(cTH,oVH)
return cTH
}
oPH.wxXCkey=2
_2z(z,26,xQH,fEH,oDH,gg,oPH,'subitem','subidx','subidx')
var eNH=_v()
_(oJH,eNH)
if(_oz(z,32,fEH,oDH,gg)){eNH.wxVkey=1
}
var bOH=_v()
_(oJH,bOH)
if(_oz(z,33,fEH,oDH,gg)){bOH.wxVkey=1
}
lKH.wxXCkey=1
aLH.wxXCkey=1
tMH.wxXCkey=1
eNH.wxXCkey=1
bOH.wxXCkey=1
_(cIH,oJH)
var oXH=_mz(z,'channel-four',['appid',34,'bind:__l',1,'class',2,'list',3,'vueId',4],[],fEH,oDH,gg)
_(cIH,oXH)
_(oHH,cIH)
}
oHH.wxXCkey=1
oHH.wxXCkey=3
return cFH
}
oBH.wxXCkey=4
_2z(z,15,xCH,e,s,gg,oBH,'item','i','i')
var l7G=_v()
_(o6G,l7G)
if(_oz(z,39,e,s,gg)){l7G.wxVkey=1
}
l7G.wxXCkey=1
_(oZG,o6G)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,40,e,s,gg)){f1G.wxVkey=1
}
var c2G=_v()
_(oZG,c2G)
if(_oz(z,41,e,s,gg)){c2G.wxVkey=1
}
var h3G=_v()
_(oZG,h3G)
if(_oz(z,42,e,s,gg)){h3G.wxVkey=1
var lYH=_n('view')
_rz(z,lYH,'class',43,e,s,gg)
var aZH=_v()
_(lYH,aZH)
if(_oz(z,44,e,s,gg)){aZH.wxVkey=1
}
var t1H=_mz(z,'view',['class',45,'style',1],[],e,s,gg)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,47,e,s,gg)){e2H.wxVkey=1
}
var b3H=_v()
_(t1H,b3H)
if(_oz(z,48,e,s,gg)){b3H.wxVkey=1
var o0H=_n('view')
_rz(z,o0H,'class',50,e,s,gg)
var cAI=_v()
_(o0H,cAI)
var oBI=function(aDI,lCI,tEI,gg){
var bGI=_v()
_(tEI,bGI)
if(_oz(z,55,aDI,lCI,gg)){bGI.wxVkey=1
}
bGI.wxXCkey=1
return tEI
}
cAI.wxXCkey=2
_2z(z,53,oBI,e,s,gg,cAI,'item','i','i')
var oHI=_v()
_(o0H,oHI)
var xII=function(fKI,oJI,cLI,gg){
var oNI=_v()
_(cLI,oNI)
if(_oz(z,60,fKI,oJI,gg)){oNI.wxVkey=1
}
oNI.wxXCkey=1
return cLI
}
oHI.wxXCkey=2
_2z(z,58,xII,e,s,gg,oHI,'item','i','i')
_(b3H,o0H)
var h9H=_v()
_(b3H,h9H)
if(_oz(z,61,e,s,gg)){h9H.wxVkey=1
var cOI=_n('view')
_rz(z,cOI,'class',62,e,s,gg)
var oPI=_v()
_(cOI,oPI)
if(_oz(z,63,e,s,gg)){oPI.wxVkey=1
var tSI=_v()
_(oPI,tSI)
if(_oz(z,64,e,s,gg)){tSI.wxVkey=1
}
tSI.wxXCkey=1
}
var lQI=_v()
_(cOI,lQI)
if(_oz(z,65,e,s,gg)){lQI.wxVkey=1
}
var aRI=_v()
_(cOI,aRI)
if(_oz(z,66,e,s,gg)){aRI.wxVkey=1
}
oPI.wxXCkey=1
lQI.wxXCkey=1
aRI.wxXCkey=1
_(h9H,cOI)
}
h9H.wxXCkey=1
}
var o4H=_v()
_(t1H,o4H)
if(_oz(z,67,e,s,gg)){o4H.wxVkey=1
var eTI=_v()
_(o4H,eTI)
var bUI=function(xWI,oVI,oXI,gg){
var cZI=_v()
_(oXI,cZI)
if(_oz(z,72,xWI,oVI,gg)){cZI.wxVkey=1
}
cZI.wxXCkey=1
return oXI
}
eTI.wxXCkey=2
_2z(z,70,bUI,e,s,gg,eTI,'item','i','i')
}
var x5H=_v()
_(t1H,x5H)
if(_oz(z,73,e,s,gg)){x5H.wxVkey=1
var h1I=_v()
_(x5H,h1I)
if(_oz(z,74,e,s,gg)){h1I.wxVkey=1
}
h1I.wxXCkey=1
}
var o6H=_v()
_(t1H,o6H)
if(_oz(z,75,e,s,gg)){o6H.wxVkey=1
}
var f7H=_v()
_(t1H,f7H)
if(_oz(z,76,e,s,gg)){f7H.wxVkey=1
}
var c8H=_v()
_(t1H,c8H)
if(_oz(z,77,e,s,gg)){c8H.wxVkey=1
}
e2H.wxXCkey=1
b3H.wxXCkey=1
o4H.wxXCkey=1
x5H.wxXCkey=1
o6H.wxXCkey=1
f7H.wxXCkey=1
c8H.wxXCkey=1
_(lYH,t1H)
aZH.wxXCkey=1
_(h3G,lYH)
}
var o4G=_v()
_(oZG,o4G)
if(_oz(z,78,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(oZG,c5G)
if(_oz(z,79,e,s,gg)){c5G.wxVkey=1
var o2I=_mz(z,'view',['bindtouchmove',80,'class',1,'data-event-opts',2],[],e,s,gg)
var c3I=_v()
_(o2I,c3I)
if(_oz(z,83,e,s,gg)){c3I.wxVkey=1
}
c3I.wxXCkey=1
_(c5G,o2I)
}
f1G.wxXCkey=1
c2G.wxXCkey=1
h3G.wxXCkey=1
o4G.wxXCkey=1
c5G.wxXCkey=1
_(r,oZG)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var l5I=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var oHJ=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'class',3,'scrollIntoView',1,'style',2],[],e,s,gg)
var lIJ=_v()
_(oHJ,lIJ)
if(_oz(z,6,e,s,gg)){lIJ.wxVkey=1
}
var aJJ=_v()
_(oHJ,aJJ)
var tKJ=function(bMJ,eLJ,oNJ,gg){
var oPJ=_v()
_(oNJ,oPJ)
if(_oz(z,12,bMJ,eLJ,gg)){oPJ.wxVkey=1
var fQJ=_mz(z,'author-box',['bind:__l',13,'class',1,'content',2,'needAsk',3,'needlogin',4,'vueId',5],[],bMJ,eLJ,gg)
_(oPJ,fQJ)
}
else{oPJ.wxVkey=2
var cRJ=_v()
_(oPJ,cRJ)
if(_oz(z,19,bMJ,eLJ,gg)){cRJ.wxVkey=1
var hSJ=_mz(z,'answer-box',['bind:__l',20,'class',1,'content',2,'vueId',3],[],bMJ,eLJ,gg)
_(cRJ,hSJ)
}
else{cRJ.wxVkey=2
var oTJ=_v()
_(cRJ,oTJ)
if(_oz(z,24,bMJ,eLJ,gg)){oTJ.wxVkey=1
var cUJ=_mz(z,'question-num',['bind:__l',25,'class',1,'content',2,'vueId',3],[],bMJ,eLJ,gg)
_(oTJ,cUJ)
}
oTJ.wxXCkey=1
oTJ.wxXCkey=3
}
cRJ.wxXCkey=1
cRJ.wxXCkey=3
cRJ.wxXCkey=3
}
oPJ.wxXCkey=1
oPJ.wxXCkey=3
oPJ.wxXCkey=3
return oNJ
}
aJJ.wxXCkey=4
_2z(z,9,tKJ,e,s,gg,aJJ,'item','i','i')
lIJ.wxXCkey=1
_(l5I,oHJ)
var a6I=_v()
_(l5I,a6I)
if(_oz(z,29,e,s,gg)){a6I.wxVkey=1
}
var t7I=_v()
_(l5I,t7I)
if(_oz(z,30,e,s,gg)){t7I.wxVkey=1
}
var e8I=_v()
_(l5I,e8I)
if(_oz(z,31,e,s,gg)){e8I.wxVkey=1
var oVJ=_mz(z,'form',['bindsubmit',32,'class',1,'data-event-opts',2,'reportSubmit',3],[],e,s,gg)
var lWJ=_v()
_(oVJ,lWJ)
if(_oz(z,36,e,s,gg)){lWJ.wxVkey=1
}
var aXJ=_v()
_(oVJ,aXJ)
if(_oz(z,37,e,s,gg)){aXJ.wxVkey=1
}
lWJ.wxXCkey=1
aXJ.wxXCkey=1
_(e8I,oVJ)
}
var b9I=_v()
_(l5I,b9I)
if(_oz(z,38,e,s,gg)){b9I.wxVkey=1
}
var o0I=_v()
_(l5I,o0I)
if(_oz(z,39,e,s,gg)){o0I.wxVkey=1
}
var xAJ=_v()
_(l5I,xAJ)
if(_oz(z,40,e,s,gg)){xAJ.wxVkey=1
}
var oBJ=_v()
_(l5I,oBJ)
if(_oz(z,41,e,s,gg)){oBJ.wxVkey=1
}
var fCJ=_v()
_(l5I,fCJ)
if(_oz(z,42,e,s,gg)){fCJ.wxVkey=1
}
var cDJ=_v()
_(l5I,cDJ)
if(_oz(z,43,e,s,gg)){cDJ.wxVkey=1
}
var hEJ=_v()
_(l5I,hEJ)
if(_oz(z,44,e,s,gg)){hEJ.wxVkey=1
var tYJ=_n('view')
_rz(z,tYJ,'class',45,e,s,gg)
var eZJ=_v()
_(tYJ,eZJ)
if(_oz(z,46,e,s,gg)){eZJ.wxVkey=1
}
var b1J=_mz(z,'view',['class',47,'style',1],[],e,s,gg)
var o2J=_v()
_(b1J,o2J)
if(_oz(z,49,e,s,gg)){o2J.wxVkey=1
}
var x3J=_v()
_(b1J,x3J)
if(_oz(z,50,e,s,gg)){x3J.wxVkey=1
var o0J=_n('view')
_rz(z,o0J,'class',52,e,s,gg)
var lAK=_v()
_(o0J,lAK)
var aBK=function(eDK,tCK,bEK,gg){
var xGK=_v()
_(bEK,xGK)
if(_oz(z,57,eDK,tCK,gg)){xGK.wxVkey=1
}
xGK.wxXCkey=1
return bEK
}
lAK.wxXCkey=2
_2z(z,55,aBK,e,s,gg,lAK,'item','i','i')
var oHK=_v()
_(o0J,oHK)
var fIK=function(hKK,cJK,oLK,gg){
var oNK=_v()
_(oLK,oNK)
if(_oz(z,62,hKK,cJK,gg)){oNK.wxVkey=1
}
oNK.wxXCkey=1
return oLK
}
oHK.wxXCkey=2
_2z(z,60,fIK,e,s,gg,oHK,'item','i','i')
_(x3J,o0J)
var c9J=_v()
_(x3J,c9J)
if(_oz(z,63,e,s,gg)){c9J.wxVkey=1
var lOK=_n('view')
_rz(z,lOK,'class',64,e,s,gg)
var aPK=_v()
_(lOK,aPK)
if(_oz(z,65,e,s,gg)){aPK.wxVkey=1
var bSK=_v()
_(aPK,bSK)
if(_oz(z,66,e,s,gg)){bSK.wxVkey=1
}
bSK.wxXCkey=1
}
var tQK=_v()
_(lOK,tQK)
if(_oz(z,67,e,s,gg)){tQK.wxVkey=1
}
var eRK=_v()
_(lOK,eRK)
if(_oz(z,68,e,s,gg)){eRK.wxVkey=1
}
aPK.wxXCkey=1
tQK.wxXCkey=1
eRK.wxXCkey=1
_(c9J,lOK)
}
c9J.wxXCkey=1
}
var o4J=_v()
_(b1J,o4J)
if(_oz(z,69,e,s,gg)){o4J.wxVkey=1
var oTK=_v()
_(o4J,oTK)
var xUK=function(fWK,oVK,cXK,gg){
var oZK=_v()
_(cXK,oZK)
if(_oz(z,74,fWK,oVK,gg)){oZK.wxVkey=1
}
oZK.wxXCkey=1
return cXK
}
oTK.wxXCkey=2
_2z(z,72,xUK,e,s,gg,oTK,'item','i','i')
}
var f5J=_v()
_(b1J,f5J)
if(_oz(z,75,e,s,gg)){f5J.wxVkey=1
var c1K=_v()
_(f5J,c1K)
if(_oz(z,76,e,s,gg)){c1K.wxVkey=1
}
c1K.wxXCkey=1
}
var c6J=_v()
_(b1J,c6J)
if(_oz(z,77,e,s,gg)){c6J.wxVkey=1
}
var h7J=_v()
_(b1J,h7J)
if(_oz(z,78,e,s,gg)){h7J.wxVkey=1
}
var o8J=_v()
_(b1J,o8J)
if(_oz(z,79,e,s,gg)){o8J.wxVkey=1
}
o2J.wxXCkey=1
x3J.wxXCkey=1
o4J.wxXCkey=1
f5J.wxXCkey=1
c6J.wxXCkey=1
h7J.wxXCkey=1
o8J.wxXCkey=1
_(tYJ,b1J)
eZJ.wxXCkey=1
_(hEJ,tYJ)
}
var oFJ=_v()
_(l5I,oFJ)
if(_oz(z,80,e,s,gg)){oFJ.wxVkey=1
}
var cGJ=_v()
_(l5I,cGJ)
if(_oz(z,81,e,s,gg)){cGJ.wxVkey=1
}
a6I.wxXCkey=1
t7I.wxXCkey=1
e8I.wxXCkey=1
b9I.wxXCkey=1
o0I.wxXCkey=1
xAJ.wxXCkey=1
oBJ.wxXCkey=1
fCJ.wxXCkey=1
cDJ.wxXCkey=1
hEJ.wxXCkey=1
oFJ.wxXCkey=1
cGJ.wxXCkey=1
_(r,l5I)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var l3K=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var x9K=_mz(z,'view',['animation',3,'class',1],[],e,s,gg)
var fAL=_n('view')
_rz(z,fAL,'class',5,e,s,gg)
var hCL=_mz(z,'form',['bindsubmit',6,'class',1,'data-event-opts',2,'reportSubmit',3,'style',4],[],e,s,gg)
var oDL=_v()
_(hCL,oDL)
if(_oz(z,11,e,s,gg)){oDL.wxVkey=1
}
var cEL=_v()
_(hCL,cEL)
if(_oz(z,12,e,s,gg)){cEL.wxVkey=1
}
var oFL=_v()
_(hCL,oFL)
if(_oz(z,13,e,s,gg)){oFL.wxVkey=1
}
oDL.wxXCkey=1
cEL.wxXCkey=1
oFL.wxXCkey=1
_(fAL,hCL)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,14,e,s,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
_(x9K,fAL)
var lGL=_v()
_(x9K,lGL)
var aHL=function(eJL,tIL,bKL,gg){
var xML=_v()
_(bKL,xML)
if(_oz(z,19,eJL,tIL,gg)){xML.wxVkey=1
var oNL=_n('view')
_rz(z,oNL,'class',20,eJL,tIL,gg)
var fOL=_mz(z,'view',['class',21,'style',1],[],eJL,tIL,gg)
var cPL=_v()
_(fOL,cPL)
if(_oz(z,23,eJL,tIL,gg)){cPL.wxVkey=1
}
var hQL=_v()
_(fOL,hQL)
if(_oz(z,24,eJL,tIL,gg)){hQL.wxVkey=1
}
var oRL=_v()
_(fOL,oRL)
if(_oz(z,25,eJL,tIL,gg)){oRL.wxVkey=1
}
var lUL=_v()
_(fOL,lUL)
var aVL=function(eXL,tWL,bYL,gg){
var x1L=_mz(z,'view',['bindtap',30,'class',1,'data-event-opts',2],[],eXL,tWL,gg)
var o2L=_v()
_(x1L,o2L)
if(_oz(z,33,eXL,tWL,gg)){o2L.wxVkey=1
}
o2L.wxXCkey=1
_(bYL,x1L)
return bYL
}
lUL.wxXCkey=2
_2z(z,28,aVL,eJL,tIL,gg,lUL,'subitem','subidx','subidx')
var cSL=_v()
_(fOL,cSL)
if(_oz(z,34,eJL,tIL,gg)){cSL.wxVkey=1
}
var oTL=_v()
_(fOL,oTL)
if(_oz(z,35,eJL,tIL,gg)){oTL.wxVkey=1
}
cPL.wxXCkey=1
hQL.wxXCkey=1
oRL.wxXCkey=1
cSL.wxXCkey=1
oTL.wxXCkey=1
_(oNL,fOL)
var f3L=_mz(z,'channel-four',['bind:__l',36,'class',1,'list',2,'vueId',3],[],eJL,tIL,gg)
_(oNL,f3L)
_(xML,oNL)
}
xML.wxXCkey=1
xML.wxXCkey=3
return bKL
}
lGL.wxXCkey=4
_2z(z,17,aHL,e,s,gg,lGL,'item','i','i')
var o0K=_v()
_(x9K,o0K)
if(_oz(z,40,e,s,gg)){o0K.wxVkey=1
}
o0K.wxXCkey=1
_(l3K,x9K)
var a4K=_v()
_(l3K,a4K)
if(_oz(z,41,e,s,gg)){a4K.wxVkey=1
}
var t5K=_v()
_(l3K,t5K)
if(_oz(z,42,e,s,gg)){t5K.wxVkey=1
var c4L=_n('view')
_rz(z,c4L,'class',43,e,s,gg)
var h5L=_v()
_(c4L,h5L)
if(_oz(z,44,e,s,gg)){h5L.wxVkey=1
}
var o6L=_mz(z,'view',['class',45,'style',1],[],e,s,gg)
var c7L=_v()
_(o6L,c7L)
if(_oz(z,47,e,s,gg)){c7L.wxVkey=1
}
var o8L=_v()
_(o6L,o8L)
if(_oz(z,48,e,s,gg)){o8L.wxVkey=1
var xEM=_n('view')
_rz(z,xEM,'class',50,e,s,gg)
var oFM=_v()
_(xEM,oFM)
var fGM=function(hIM,cHM,oJM,gg){
var oLM=_v()
_(oJM,oLM)
if(_oz(z,55,hIM,cHM,gg)){oLM.wxVkey=1
}
oLM.wxXCkey=1
return oJM
}
oFM.wxXCkey=2
_2z(z,53,fGM,e,s,gg,oFM,'item','i','i')
var lMM=_v()
_(xEM,lMM)
var aNM=function(ePM,tOM,bQM,gg){
var xSM=_v()
_(bQM,xSM)
if(_oz(z,60,ePM,tOM,gg)){xSM.wxVkey=1
}
xSM.wxXCkey=1
return bQM
}
lMM.wxXCkey=2
_2z(z,58,aNM,e,s,gg,lMM,'item','i','i')
_(o8L,xEM)
var oDM=_v()
_(o8L,oDM)
if(_oz(z,61,e,s,gg)){oDM.wxVkey=1
var oTM=_n('view')
_rz(z,oTM,'class',62,e,s,gg)
var fUM=_v()
_(oTM,fUM)
if(_oz(z,63,e,s,gg)){fUM.wxVkey=1
var oXM=_v()
_(fUM,oXM)
if(_oz(z,64,e,s,gg)){oXM.wxVkey=1
}
oXM.wxXCkey=1
}
var cVM=_v()
_(oTM,cVM)
if(_oz(z,65,e,s,gg)){cVM.wxVkey=1
}
var hWM=_v()
_(oTM,hWM)
if(_oz(z,66,e,s,gg)){hWM.wxVkey=1
}
fUM.wxXCkey=1
cVM.wxXCkey=1
hWM.wxXCkey=1
_(oDM,oTM)
}
oDM.wxXCkey=1
}
var l9L=_v()
_(o6L,l9L)
if(_oz(z,67,e,s,gg)){l9L.wxVkey=1
var cYM=_v()
_(l9L,cYM)
var oZM=function(a2M,l1M,t3M,gg){
var b5M=_v()
_(t3M,b5M)
if(_oz(z,72,a2M,l1M,gg)){b5M.wxVkey=1
}
b5M.wxXCkey=1
return t3M
}
cYM.wxXCkey=2
_2z(z,70,oZM,e,s,gg,cYM,'item','i','i')
}
var a0L=_v()
_(o6L,a0L)
if(_oz(z,73,e,s,gg)){a0L.wxVkey=1
var o6M=_v()
_(a0L,o6M)
if(_oz(z,74,e,s,gg)){o6M.wxVkey=1
}
o6M.wxXCkey=1
}
var tAM=_v()
_(o6L,tAM)
if(_oz(z,75,e,s,gg)){tAM.wxVkey=1
}
var eBM=_v()
_(o6L,eBM)
if(_oz(z,76,e,s,gg)){eBM.wxVkey=1
}
var bCM=_v()
_(o6L,bCM)
if(_oz(z,77,e,s,gg)){bCM.wxVkey=1
}
c7L.wxXCkey=1
o8L.wxXCkey=1
l9L.wxXCkey=1
a0L.wxXCkey=1
tAM.wxXCkey=1
eBM.wxXCkey=1
bCM.wxXCkey=1
_(c4L,o6L)
h5L.wxXCkey=1
_(t5K,c4L)
}
var e6K=_v()
_(l3K,e6K)
if(_oz(z,78,e,s,gg)){e6K.wxVkey=1
}
var b7K=_v()
_(l3K,b7K)
if(_oz(z,79,e,s,gg)){b7K.wxVkey=1
}
var o8K=_v()
_(l3K,o8K)
if(_oz(z,80,e,s,gg)){o8K.wxVkey=1
var x7M=_mz(z,'view',['bindtouchmove',81,'class',1,'data-event-opts',2],[],e,s,gg)
var o8M=_v()
_(x7M,o8M)
if(_oz(z,84,e,s,gg)){o8M.wxVkey=1
}
o8M.wxXCkey=1
_(o8K,x7M)
}
a4K.wxXCkey=1
t5K.wxXCkey=1
e6K.wxXCkey=1
b7K.wxXCkey=1
o8K.wxXCkey=1
_(r,l3K)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var c0M=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oBN=_v()
_(c0M,oBN)
var cCN=function(lEN,oDN,aFN,gg){
var eHN=_mz(z,'view',['class',6,'id',1],[],lEN,oDN,gg)
var bIN=_v()
_(eHN,bIN)
if(_oz(z,8,lEN,oDN,gg)){bIN.wxVkey=1
var cNN=_mz(z,'msg',['bind:__l',9,'class',1,'content',2,'vueId',3],[],lEN,oDN,gg)
_(bIN,cNN)
}
var oJN=_v()
_(eHN,oJN)
if(_oz(z,13,lEN,oDN,gg)){oJN.wxVkey=1
var hON=_mz(z,'umsg',['bind:__l',14,'class',1,'ucontent',2,'userurl',3,'vueId',4],[],lEN,oDN,gg)
_(oJN,hON)
}
var xKN=_v()
_(eHN,xKN)
if(_oz(z,19,lEN,oDN,gg)){xKN.wxVkey=1
var oPN=_mz(z,'msgimg',['bind:__l',20,'class',1,'m_img',2,'vueId',3],[],lEN,oDN,gg)
_(xKN,oPN)
}
var oLN=_v()
_(eHN,oLN)
if(_oz(z,24,lEN,oDN,gg)){oLN.wxVkey=1
var cQN=_mz(z,'userimg-box',['bind:__l',25,'class',1,'u_img',2,'userurl',3,'vueId',4],[],lEN,oDN,gg)
_(oLN,cQN)
}
var fMN=_v()
_(eHN,fMN)
if(_oz(z,30,lEN,oDN,gg)){fMN.wxVkey=1
var oRN=_mz(z,'resimg',['bind:__l',31,'bind:fpreview',1,'bind:fsaveimg',2,'class',3,'data-event-opts',4,'r_img',5,'resheight',6,'vueId',7],[],lEN,oDN,gg)
_(fMN,oRN)
}
bIN.wxXCkey=1
bIN.wxXCkey=3
oJN.wxXCkey=1
oJN.wxXCkey=3
xKN.wxXCkey=1
xKN.wxXCkey=3
oLN.wxXCkey=1
oLN.wxXCkey=3
fMN.wxXCkey=1
fMN.wxXCkey=3
_(aFN,eHN)
return aFN
}
oBN.wxXCkey=4
_2z(z,4,cCN,e,s,gg,oBN,'item','i','i')
var lSN=_mz(z,'view',['class',39,'id',1],[],e,s,gg)
var aTN=_v()
_(lSN,aTN)
if(_oz(z,41,e,s,gg)){aTN.wxVkey=1
}
var tUN=_v()
_(lSN,tUN)
if(_oz(z,42,e,s,gg)){tUN.wxVkey=1
}
var eVN=_v()
_(lSN,eVN)
if(_oz(z,43,e,s,gg)){eVN.wxVkey=1
}
var bWN=_v()
_(lSN,bWN)
if(_oz(z,44,e,s,gg)){bWN.wxVkey=1
}
var oXN=_v()
_(lSN,oXN)
if(_oz(z,45,e,s,gg)){oXN.wxVkey=1
}
var xYN=_v()
_(lSN,xYN)
if(_oz(z,46,e,s,gg)){xYN.wxVkey=1
}
aTN.wxXCkey=1
tUN.wxXCkey=1
eVN.wxXCkey=1
bWN.wxXCkey=1
oXN.wxXCkey=1
xYN.wxXCkey=1
_(c0M,lSN)
var hAN=_v()
_(c0M,hAN)
if(_oz(z,47,e,s,gg)){hAN.wxVkey=1
var oZN=_mz(z,'view',['class',48,'style',1],[],e,s,gg)
var f1N=_v()
_(oZN,f1N)
if(_oz(z,50,e,s,gg)){f1N.wxVkey=1
}
var c2N=_v()
_(oZN,c2N)
if(_oz(z,51,e,s,gg)){c2N.wxVkey=1
var t9N=_n('view')
_rz(z,t9N,'class',53,e,s,gg)
var e0N=_v()
_(t9N,e0N)
var bAO=function(xCO,oBO,oDO,gg){
var cFO=_v()
_(oDO,cFO)
if(_oz(z,58,xCO,oBO,gg)){cFO.wxVkey=1
}
cFO.wxXCkey=1
return oDO
}
e0N.wxXCkey=2
_2z(z,56,bAO,e,s,gg,e0N,'item','i','i')
var hGO=_v()
_(t9N,hGO)
var oHO=function(oJO,cIO,lKO,gg){
var tMO=_v()
_(lKO,tMO)
if(_oz(z,63,oJO,cIO,gg)){tMO.wxVkey=1
}
tMO.wxXCkey=1
return lKO
}
hGO.wxXCkey=2
_2z(z,61,oHO,e,s,gg,hGO,'item','i','i')
_(c2N,t9N)
var a8N=_v()
_(c2N,a8N)
if(_oz(z,64,e,s,gg)){a8N.wxVkey=1
var eNO=_n('view')
_rz(z,eNO,'class',65,e,s,gg)
var bOO=_v()
_(eNO,bOO)
if(_oz(z,66,e,s,gg)){bOO.wxVkey=1
}
var oPO=_v()
_(eNO,oPO)
if(_oz(z,67,e,s,gg)){oPO.wxVkey=1
}
var xQO=_v()
_(eNO,xQO)
if(_oz(z,68,e,s,gg)){xQO.wxVkey=1
}
bOO.wxXCkey=1
oPO.wxXCkey=1
xQO.wxXCkey=1
_(a8N,eNO)
}
a8N.wxXCkey=1
}
var h3N=_v()
_(oZN,h3N)
if(_oz(z,69,e,s,gg)){h3N.wxVkey=1
var oRO=_v()
_(h3N,oRO)
var fSO=function(hUO,cTO,oVO,gg){
var oXO=_v()
_(oVO,oXO)
if(_oz(z,74,hUO,cTO,gg)){oXO.wxVkey=1
}
oXO.wxXCkey=1
return oVO
}
oRO.wxXCkey=2
_2z(z,72,fSO,e,s,gg,oRO,'item','i','i')
}
var o4N=_v()
_(oZN,o4N)
if(_oz(z,75,e,s,gg)){o4N.wxVkey=1
var lYO=_v()
_(o4N,lYO)
if(_oz(z,76,e,s,gg)){lYO.wxVkey=1
}
lYO.wxXCkey=1
}
var c5N=_v()
_(oZN,c5N)
if(_oz(z,77,e,s,gg)){c5N.wxVkey=1
}
var o6N=_v()
_(oZN,o6N)
if(_oz(z,78,e,s,gg)){o6N.wxVkey=1
}
var l7N=_v()
_(oZN,l7N)
if(_oz(z,79,e,s,gg)){l7N.wxVkey=1
}
f1N.wxXCkey=1
c2N.wxXCkey=1
h3N.wxXCkey=1
o4N.wxXCkey=1
c5N.wxXCkey=1
o6N.wxXCkey=1
l7N.wxXCkey=1
_(hAN,oZN)
}
var aZO=_mz(z,'image-cropper',['bind:__l',80,'bind:cancel',1,'bind:confirm',2,'class',3,'cropFixed',4,'cropHeight',5,'cropWidth',6,'data-event-opts',7,'src',8,'vueId',9],[],e,s,gg)
_(c0M,aZO)
hAN.wxXCkey=1
_(r,c0M)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var b3O=_v()
_(r,b3O)
if(_oz(z,0,e,s,gg)){b3O.wxVkey=1
var o4O=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var f7O=_n('view')
_rz(z,f7O,'class',3,e,s,gg)
var c8O=_v()
_(f7O,c8O)
if(_oz(z,4,e,s,gg)){c8O.wxVkey=1
}
var h9O=_v()
_(f7O,h9O)
if(_oz(z,5,e,s,gg)){h9O.wxVkey=1
}
var o0O=_v()
_(f7O,o0O)
if(_oz(z,6,e,s,gg)){o0O.wxVkey=1
}
var cAP=_v()
_(f7O,cAP)
if(_oz(z,7,e,s,gg)){cAP.wxVkey=1
}
c8O.wxXCkey=1
h9O.wxXCkey=1
o0O.wxXCkey=1
cAP.wxXCkey=1
_(o4O,f7O)
var x5O=_v()
_(o4O,x5O)
if(_oz(z,8,e,s,gg)){x5O.wxVkey=1
}
var o6O=_v()
_(o4O,o6O)
if(_oz(z,9,e,s,gg)){o6O.wxVkey=1
}
var oBP=_mz(z,'result',['bind:__l',10,'bind:save',1,'class',2,'data-event-opts',3,'data-ref',4,'info',5,'vueId',6],[],e,s,gg)
_(o4O,oBP)
var lCP=_mz(z,'nav-bar',['bind:__l',17,'class',1,'title',2,'transparentFixedFontColor',3,'type',4,'vueId',5],[],e,s,gg)
_(o4O,lCP)
x5O.wxXCkey=1
o6O.wxXCkey=1
_(b3O,o4O)
}
b3O.wxXCkey=1
b3O.wxXCkey=3
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["pages/home/index","p/i","pages/Category/Category","pages/christmas/result","pages/christmas/index","pages/quiz/index","pages/question/index","pages/quizchoiceness/index","pages/Search/Search","pages/tanmegame/game","pages/tarotmark/item"],"subPackages":[],"window":{"navigationBarBackgroundColor":"white","navigationBarTextStyle":"black","navigationStyle":"default"},"tabBar":{"list":[{"pagePath":"pages/home/index","text":"首页","iconPath":"static/nav-icon/home_icon_unselect.png","selectedIconPath":"static/nav-icon/home_icon_select.png"},{"pagePath":"pages/Category/Category","text":"分类","iconPath":"static/nav-icon/class_icon_unselect.png","selectedIconPath":"static/nav-icon/class_icon_select.png"}],"color":"#323232","backgroundColor":"#ffffff","selectedColor":"#323232"},"navigateToMiniProgramAppIdList":["wxd0551084a16871cd","wxb9347529b3ce215d","wx54657c71265ed082","wxb65db32d9b007a02","wxc55134a2b9980446","wxd1c0c365c6806559","wxee4af3055cbf21b6"],"usingComponents":{},"sitemapLocation":"sitemap.json"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['components/AnswerBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/AnswerBox.wxml'] = [$gwx, './components/AnswerBox.wxml'];else __wxAppCode__['components/AnswerBox.wxml'] = $gwx( './components/AnswerBox.wxml' );
		__wxAppCode__['components/AuthorBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/AuthorBox.wxml'] = [$gwx, './components/AuthorBox.wxml'];else __wxAppCode__['components/AuthorBox.wxml'] = $gwx( './components/AuthorBox.wxml' );
		__wxAppCode__['components/ChannelFour.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ChannelFour.wxml'] = [$gwx, './components/ChannelFour.wxml'];else __wxAppCode__['components/ChannelFour.wxml'] = $gwx( './components/ChannelFour.wxml' );
		__wxAppCode__['components/GridBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/GridBox.wxml'] = [$gwx, './components/GridBox.wxml'];else __wxAppCode__['components/GridBox.wxml'] = $gwx( './components/GridBox.wxml' );
		__wxAppCode__['components/ListBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ListBox.wxml'] = [$gwx, './components/ListBox.wxml'];else __wxAppCode__['components/ListBox.wxml'] = $gwx( './components/ListBox.wxml' );
		__wxAppCode__['components/LoadBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/LoadBox.wxml'] = [$gwx, './components/LoadBox.wxml'];else __wxAppCode__['components/LoadBox.wxml'] = $gwx( './components/LoadBox.wxml' );
		__wxAppCode__['components/NavgationBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/NavgationBox.wxml'] = [$gwx, './components/NavgationBox.wxml'];else __wxAppCode__['components/NavgationBox.wxml'] = $gwx( './components/NavgationBox.wxml' );
		__wxAppCode__['components/PoptestBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PoptestBox.wxml'] = [$gwx, './components/PoptestBox.wxml'];else __wxAppCode__['components/PoptestBox.wxml'] = $gwx( './components/PoptestBox.wxml' );
		__wxAppCode__['components/PopupBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PopupBox.wxml'] = [$gwx, './components/PopupBox.wxml'];else __wxAppCode__['components/PopupBox.wxml'] = $gwx( './components/PopupBox.wxml' );
		__wxAppCode__['components/QuestionNum.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/QuestionNum.wxml'] = [$gwx, './components/QuestionNum.wxml'];else __wxAppCode__['components/QuestionNum.wxml'] = $gwx( './components/QuestionNum.wxml' );
		__wxAppCode__['components/SearchBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/SearchBox.wxml'] = [$gwx, './components/SearchBox.wxml'];else __wxAppCode__['components/SearchBox.wxml'] = $gwx( './components/SearchBox.wxml' );
		__wxAppCode__['components/SelectStar.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/SelectStar.wxml'] = [$gwx, './components/SelectStar.wxml'];else __wxAppCode__['components/SelectStar.wxml'] = $gwx( './components/SelectStar.wxml' );
		__wxAppCode__['components/SwiperBox.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/SwiperBox.wxml'] = [$gwx, './components/SwiperBox.wxml'];else __wxAppCode__['components/SwiperBox.wxml'] = $gwx( './components/SwiperBox.wxml' );
		__wxAppCode__['components/invinbg-image-cropper/invinbg-image-cropper.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/invinbg-image-cropper/invinbg-image-cropper.wxml'] = [$gwx, './components/invinbg-image-cropper/invinbg-image-cropper.wxml'];else __wxAppCode__['components/invinbg-image-cropper/invinbg-image-cropper.wxml'] = $gwx( './components/invinbg-image-cropper/invinbg-image-cropper.wxml' );
		__wxAppCode__['components/tanme/msgimg.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tanme/msgimg.wxml'] = [$gwx, './components/tanme/msgimg.wxml'];else __wxAppCode__['components/tanme/msgimg.wxml'] = $gwx( './components/tanme/msgimg.wxml' );
		__wxAppCode__['components/tanme/resultimg.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tanme/resultimg.wxml'] = [$gwx, './components/tanme/resultimg.wxml'];else __wxAppCode__['components/tanme/resultimg.wxml'] = $gwx( './components/tanme/resultimg.wxml' );
		__wxAppCode__['components/tanme/userimg.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tanme/userimg.wxml'] = [$gwx, './components/tanme/userimg.wxml'];else __wxAppCode__['components/tanme/userimg.wxml'] = $gwx( './components/tanme/userimg.wxml' );
		__wxAppCode__['components/tanme/usermsg.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tanme/usermsg.wxml'] = [$gwx, './components/tanme/usermsg.wxml'];else __wxAppCode__['components/tanme/usermsg.wxml'] = $gwx( './components/tanme/usermsg.wxml' );
		__wxAppCode__['components/tarotmark/Result.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tarotmark/Result.wxml'] = [$gwx, './components/tarotmark/Result.wxml'];else __wxAppCode__['components/tarotmark/Result.wxml'] = $gwx( './components/tarotmark/Result.wxml' );
		__wxAppCode__['components/tarotmark/zhouWei-navBar/index.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tarotmark/zhouWei-navBar/index.wxml'] = [$gwx, './components/tarotmark/zhouWei-navBar/index.wxml'];else __wxAppCode__['components/tarotmark/zhouWei-navBar/index.wxml'] = $gwx( './components/tarotmark/zhouWei-navBar/index.wxml' );
		__wxAppCode__['p/i.json'] = {"navigationBarTitleText":"趣测","usingComponents":{"search-box":"/components/SearchBox","swiper-box":"/components/SwiperBox","grid-box":"/components/GridBox","list-box":"/components/ListBox","load-box":"/components/LoadBox","popup-box":"/components/PopupBox","navgation-box":"/components/NavgationBox","poptest-box":"/components/PoptestBox","select-star-box":"/components/SelectStar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['p/i.wxml'] = [$gwx, './p/i.wxml'];else __wxAppCode__['p/i.wxml'] = $gwx( './p/i.wxml' );
		__wxAppCode__['pages/Category/Category.json'] = {"navigationBarTitleText":"分类","disableScroll":true,"usingComponents":{"navgation-box":"/components/NavgationBox","search-box":"/components/SearchBox","select-star-box":"/components/SelectStar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/Category/Category.wxml'] = [$gwx, './pages/Category/Category.wxml'];else __wxAppCode__['pages/Category/Category.wxml'] = $gwx( './pages/Category/Category.wxml' );
		__wxAppCode__['pages/Search/Search.json'] = {"usingComponents":{"list-box":"/components/ListBox"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/Search/Search.wxml'] = [$gwx, './pages/Search/Search.wxml'];else __wxAppCode__['pages/Search/Search.wxml'] = $gwx( './pages/Search/Search.wxml' );
		__wxAppCode__['pages/christmas/index.json'] = {"backgroundTextStyle":"light","navigationBarBackgroundColor":"#40445b","navigationStyle":"custom","usingComponents":{"image-cropper":"/components/invinbg-image-cropper/invinbg-image-cropper"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/christmas/index.wxml'] = [$gwx, './pages/christmas/index.wxml'];else __wxAppCode__['pages/christmas/index.wxml'] = $gwx( './pages/christmas/index.wxml' );
		__wxAppCode__['pages/christmas/result.json'] = {"navigationBarTitleText":"预览","navigationBarBackgroundColor":"#004131","navigationBarTextStyle":"white","disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/christmas/result.wxml'] = [$gwx, './pages/christmas/result.wxml'];else __wxAppCode__['pages/christmas/result.wxml'] = $gwx( './pages/christmas/result.wxml' );
		__wxAppCode__['pages/home/index.json'] = {"navigationBarTitleText":"趣测","usingComponents":{"search-box":"/components/SearchBox","swiper-box":"/components/SwiperBox","grid-box":"/components/GridBox","list-box":"/components/ListBox","load-box":"/components/LoadBox","popup-box":"/components/PopupBox","navgation-box":"/components/NavgationBox","poptest-box":"/components/PoptestBox","select-star-box":"/components/SelectStar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/index.wxml'] = [$gwx, './pages/home/index.wxml'];else __wxAppCode__['pages/home/index.wxml'] = $gwx( './pages/home/index.wxml' );
		__wxAppCode__['pages/question/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/question/index.wxml'] = [$gwx, './pages/question/index.wxml'];else __wxAppCode__['pages/question/index.wxml'] = $gwx( './pages/question/index.wxml' );
		__wxAppCode__['pages/quiz/index.json'] = {"usingComponents":{"answer-box":"/components/AnswerBox","author-box":"/components/AuthorBox","question-num":"/components/QuestionNum"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/quiz/index.wxml'] = [$gwx, './pages/quiz/index.wxml'];else __wxAppCode__['pages/quiz/index.wxml'] = $gwx( './pages/quiz/index.wxml' );
		__wxAppCode__['pages/quizchoiceness/index.json'] = {"usingComponents":{"channel-four":"/components/ChannelFour"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/quizchoiceness/index.wxml'] = [$gwx, './pages/quizchoiceness/index.wxml'];else __wxAppCode__['pages/quizchoiceness/index.wxml'] = $gwx( './pages/quizchoiceness/index.wxml' );
		__wxAppCode__['pages/tanmegame/game.json'] = {"usingComponents":{"msg":"/pages/tanmegame/message","umsg":"/components/tanme/usermsg","msgimg":"/components/tanme/msgimg","userimg-box":"/components/tanme/userimg","resimg":"/components/tanme/resultimg","image-cropper":"/components/invinbg-image-cropper/invinbg-image-cropper"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tanmegame/game.wxml'] = [$gwx, './pages/tanmegame/game.wxml'];else __wxAppCode__['pages/tanmegame/game.wxml'] = $gwx( './pages/tanmegame/game.wxml' );
		__wxAppCode__['pages/tanmegame/message.json'] = {"usingComponents":{},"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tanmegame/message.wxml'] = [$gwx, './pages/tanmegame/message.wxml'];else __wxAppCode__['pages/tanmegame/message.wxml'] = $gwx( './pages/tanmegame/message.wxml' );
		__wxAppCode__['pages/tarotmark/item.json'] = {"navigationBarTitleText":"塔罗新年签","disableScroll":true,"navigationBarBackgroundColor":"#1e1c17","navigationStyle":"custom","usingComponents":{"result":"/components/tarotmark/Result","nav-bar":"/components/tarotmark/zhouWei-navBar/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tarotmark/item.wxml'] = [$gwx, './pages/tarotmark/item.wxml'];else __wxAppCode__['pages/tarotmark/item.wxml'] = $gwx( './pages/tarotmark/item.wxml' );
		__wxAppCode__['project.config.json'] = {
	"description": "项目配置文件。",
	"packOptions": {
		"ignore": []
	},
	"setting": {
		"urlCheck": true
	},
	"compileType": "miniprogram",
	"libVersion": "2.9.2",
	"appid": "wxb1eae598597de472",
	"projectname": "趣测",
	"simulatorType": "wechat",
	"simulatorPluginLibVersion": {},
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"game": {
			"current": -1,
			"list": []
		},
		"miniprogram": {
			"current": -1,
			"list": []
		}
	}
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sitemap.json'] = {
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [{
  "action": "allow",
  "page": "*"
  }]
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
	
	define("common/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["common/main"],{2826:function(e,t,a){(function(e){function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a("8b22"),a("921b");var o=t(a("66fd")),r=t(a("e2a4"));o.default.config.productionTip=!1,r.default.mpType="app",e(new o.default(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){n(e,t,a[t])})}return e}({},r.default))).$mount()}).call(this,a("543d").createApp)},"63f7":function(e,t,a){a.r(t);var n=a("fce6"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t.default=o.a},9723:function(e,t,a){},d73a:function(e,t,a){var n=a("9723");a.n(n).a},e2a4:function(e,t,a){a.r(t);var n=a("63f7");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("d73a");var r=a("2877"),u=Object(r.a)(n.default,void 0,void 0,!1,null,null,null);t.default=u.exports},fce6:function(e,t,a){(function(e){function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=a("4e22"),u=a("c7c6"),s=a("615d"),c=function(e){return e&&e.__esModule?e:{default:e}}(a("f47e")),l=a("4fab"),i={globalData:(o={appid:"wxb1eae598597de472",ver:"5.4.012",src:14,source:14,apptype:"wx",env:"wxapp_pro",user:{nickName:"",avatarUrl:""},view_url:"",channel:1,acid:0,round:1,userInfo:null,host:"https://qc-ssl.itwlw.com",spare_status:0,free_jump:"",pro_jump:"",shareTicket:"",scene:"",onshowdata:"",app_status:2,ajax_status:0,adbannerstatus:0,adbannerid:""},n(o,"scene",""),n(o,"host_init_status",0),n(o,"update",""),n(o,"adbox",""),n(o,"getJumpUrl","https://mp.itwlw.com/index.php/"),n(o,"from_gid",0),n(o,"christmas",{}),n(o,"template",1),o),onLaunch:function(t){var a=this;c.default.App.init({appID:"500695233",eventID:"500695234",autoReport:!0,statParam:!0,ignoreParams:[]}),this.$options.globalData.scene=t.scene;var n=this.$scope;n.globalData.scene=t.scene,1037==t.scene&&t.query.target&&(0,s.saveJumpRecord)(t,this.$options),1022==t.scene&&e.setStorageSync("user_top",!0),console.log(t),e.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&e.getUserInfo({success:function(e){e.userInfo&&(n.globalData.user={nickName:e.userInfo.nickName,avatarUrl:e.userInfo.avatarUrl})}})}}),console.log((0,u.formatVer)());var o=(0,u.formatVer)()+"quceConfig";e.request({url:r.ssl_static_host+"qqapp/quce.config.json?vv="+(0,l.Md5)(o),success:function(e){if(1==e.data.status){var t=e.data.host_list;n.globalData.host=t[(0,u.getRandIndex)(t.length)],n.globalData.host_init_status=1,console.log(n.globalData.host)}else n.globalData.host_init_status=1;n.globalData.update=e.data.update},fail:function(e){n.globalData.host_init_status=1}}),setTimeout(function(){e.request({url:n.globalData.host+"/index.php/App/Index/incAppScene",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{scene:t.scene,ver:a.$options.globalData.ver,appid:a.$options.globalData.appid},success:function(e){console.log(e)}})},150)},onShow:function(e){}};t.default=i}).call(this,a("543d").default)}},[["2826","common/runtime","common/vendor"]]]); 
 			}); 
		define("common/runtime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){try{var e=Function("return this")();e&&!e.Math&&(Object.assign(e,{isFinite:isFinite,Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),"undefined"!=typeof Reflect&&(e.Reflect=Reflect))}catch(e){}}(),function(n){function o(e){for(var o,r,s=e[0],a=e[1],m=e[2],p=0,u=[];p<s.length;p++)r=s[p],c[r]&&u.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(g&&g(e);u.length;)u.shift()();return i.push.apply(i,m||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var o=i[n],t=!0,r=1;r<o.length;r++){var a=o[r];0!==c[a]&&(t=!1)}t&&(i.splice(n--,1),e=s(s.s=o[0]))}return e}function r(e){return s.p+""+e+".js"}function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}var a={},m={"common/runtime":0},c={"common/runtime":0},i=[];s.e=function(e){var n=[],o={"components/GridBox":1,"components/ListBox":1,"components/NavgationBox":1,"components/PoptestBox":1,"components/PopupBox":1,"components/SearchBox":1,"components/SelectStar":1,"components/LoadBox":1,"components/SwiperBox":1,"components/invinbg-image-cropper/invinbg-image-cropper":1,"components/AnswerBox":1,"components/AuthorBox":1,"components/QuestionNum":1,"components/ChannelFour":1,"components/tanme/msgimg":1,"components/tanme/resultimg":1,"components/tanme/userimg":1,"components/tanme/usermsg":1,"pages/tanmegame/message":1,"components/tarotmark/Result":1,"components/tarotmark/zhouWei-navBar/index":1};m[e]?n.push(m[e]):0!==m[e]&&o[e]&&n.push(m[e]=new Promise(function(n,o){for(var t=({"components/GridBox":"components/GridBox","components/ListBox":"components/ListBox","components/NavgationBox":"components/NavgationBox","components/PoptestBox":"components/PoptestBox","components/PopupBox":"components/PopupBox","components/SearchBox":"components/SearchBox","components/SelectStar":"components/SelectStar","components/LoadBox":"components/LoadBox","components/SwiperBox":"components/SwiperBox","components/invinbg-image-cropper/invinbg-image-cropper":"components/invinbg-image-cropper/invinbg-image-cropper","components/AnswerBox":"components/AnswerBox","components/AuthorBox":"components/AuthorBox","components/QuestionNum":"components/QuestionNum","components/ChannelFour":"components/ChannelFour","components/tanme/msgimg":"components/tanme/msgimg","components/tanme/resultimg":"components/tanme/resultimg","components/tanme/userimg":"components/tanme/userimg","components/tanme/usermsg":"components/tanme/usermsg","pages/tanmegame/message":"pages/tanmegame/message","components/tarotmark/Result":"components/tarotmark/Result","components/tarotmark/zhouWei-navBar/index":"components/tarotmark/zhouWei-navBar/index"}[e]||e)+".wxss",r=s.p+t,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===t||p===r))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++)if(i=u[c],(p=i.getAttribute("data-href"))===t||p===r)return n();var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");s.request=t,delete m[e],l.parentNode.removeChild(l),o(s)},l.href=r,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){m[e]=0}));var t=c[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,o){t=c[e]=[n,o]});n.push(t[2]=a);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=r(e),i=function(n){p.onerror=p.onload=null,clearTimeout(u);var o=c[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,s=new Error("Loading chunk "+e+" failed.\n("+t+": "+r+")");s.type=t,s.request=r,o[1](s)}c[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:p})},12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(n)},s.m=n,s.c=a,s.d=function(e,n,o){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(n,o){if(1&o&&(n=s(n)),8&o)return n;if(4&o&&"object"===(void 0===n?"undefined":e(n))&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var p=global.webpackJsonp=global.webpackJsonp||[],u=p.push.bind(p);p.push=o,p=p.slice();for(var l=0;l<p.length;l++)o(p[l]);var g=u;t()}([]); 
 			}); 
		define("common/vendor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(global.webpackJsonp=global.webpackJsonp||[]).push([["common/vendor"],{"0861":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAABRCAYAAACwuj/UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCODdDNzYzM0JGRDYxMUU5ODFEQUI1Q0VDODY1RkMxNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCODdDNzYzNEJGRDYxMUU5ODFEQUI1Q0VDODY1RkMxNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4N0M3NjMxQkZENjExRTk4MURBQjVDRUM4NjVGQzE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4N0M3NjMyQkZENjExRTk4MURBQjVDRUM4NjVGQzE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8FmWkgAADSNJREFUeNrsnXlw1dUV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"},"0dc9":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAAAqCAYAAAAzmWYbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDNCMkIzQkM1NDgxMUU5QUZGRkY5OEU1OTZFRkE4MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDNCMkIzQ0M1NDgxMUU5QUZGRkY5OEU1OTZFRkE4MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwM0IyQjM5QzU0ODExRTlBRkZGRjk4RTU5NkVGQTgzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwM0IyQjNBQzU0ODExRTlBRkZGRjk4RTU5NkVGQTgzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Lnf5xwAAHJVJREFUeNrsXX+sfEdV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"},"129d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAlCAYAAADyUO83AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHzSURBVGhD1Zm9TsJQGEDbgisv4ebMMzA6GQdIdOQJCM9AeAujmDQmTk48h4MTr4FRgt+BW1IQ+nt/T9K0t+3AOb2UhsZRjjRNO6vV6imO46EMN9vt9nE6nb7sj4bJbDa7E59X2ezK+q3X6w3H4/HP/mgUHQKcyGcEHSEvv98jwicRdgEuyGcEGeGcfEY+QlwinxFUhCL5jCxCp9/vP5fIQyLn3A4Gg6/lcvmp9nnJfD6/l9VClovyipv1en2dyMa7LIebQgFdmQULqTtSY+/gystnZJaWycMmSZKP3T1ATRmqXTEuwcuvQ5Vpn2Mj5z5MJpPF4Vcg5AhN5RkcPQeEGKGNPBwFgJAitJWHfwEghAg65OFsAPA5gi55uBgAfIygUx4KA4BPEXTLQ2kA8CGCCXmoFABcRjAlD5UDgIsIJuWhVgCwGcG0PNQOADYi2JCHRgHAZARb8tA4AJiIYFMeWgUAnRFsy0PrAKAjggt50BIA2kRwJQ/aAkCTCLL+diUPWgMAf0qKGFe2itCvWlc6V+RHIp+qsRa0B4CaM6EK2q98hpEAoDGCMXkwFgA0RDAqD0YDQIsIxuXBeABoEMGKPFgJADUiWJMHawGgQgSr8mA1ABREsC4P1gPAmQhO5MFJAMhF4NW7E3nn8Nis3uc7Ior+AFHyxABFYXQRAAAAAElFTkSuQmCC"},1418:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAh1BMVEUAAADOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs73tA34AAAALHRSTlMAwLq2Rce9jIY227AQ6s2dlj4d7OThOufVpk9KFg0H+PfygXhU9FwwJBlvJr8zZp0AAAGISURBVDjLjZTZloIwEEQLh31XQBAE93Xq/79vxMCRCAzcl5BQp5JOpxsSq2ug7UjutfD6wBiFw5o0SVnjFBhiqZGxcb5XAKr72YhJX0WPkNTlZVUhQ8isMno5vjlH9Lfo8HvgpkKf0mF0/0wfFx4xjMHo42jTBEaFGRoCOhjnh4H4WNPDf3i0ml2X79E6QeYk/qvMxKCIZZMLecP21P7bSONNTF2FP5JMcZtM1QZbJmhROo4LKmiJWOLKEyRhXwaDOTZcQxL2ZVAZwmaJDjoXb5kuZZ8aeIDEK5jVKwRIvES0IeNw38tPSjDDFxce8EVGMJnhlxC7/Yzz7Xbw6UqyoXhd+ghn3N+SIc48TubDZA6X8WR+PZZ1BqyJ97J+r6/bM5tC9nFs358mQrAbw9sTMk+ricIX753xRH3c2noLMM6Gxqd+TxjDpDavHyRVp79EDEY2taVGtPVpF/gmj7moJvtfoZHH4X6amupKVIRqRKRuYQh1wxov8VgTWBjDzQ0lJRnrZlGiyx9cySi2Yv6gDgAAAABJRU5ErkJggg=="},"1b15":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERjFDNDE5Njk2RUMxMUU5OEY1NUY2RUU2NUQyMzJERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERjFDNDE5Nzk2RUMxMUU5OEY1NUY2RUU2NUQyMzJERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRGMUM0MTk0OTZFQzExRTk4RjU1RjZFRTY1RDIzMkRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRGMUM0MTk1OTZFQzExRTk4RjU1RjZFRTY1RDIzMkRFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p1xNjwAAB9BJREFUeNqkWHuIVkUU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"},2321:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAzCAIAAABwsT3sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAx9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NThCMTNFQkExN0JFMTFFOEEzQTU4Qzg4Q0RCMTU2MzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NThCMTNFQkIxN0JFMTFFOEEzQTU4Qzg4Q0RCMTU2MzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OEIxM0VCODE3QkUxMUU4QTNBNThDODhDREIxNTYzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OEIxM0VCOTE3QkUxMUU4QTNBNThDODhDREIxNTYzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pho+L+kAAAQ6SURBVHjavFi5L21bHL62OeZ5eOYxKAgRFCJBIZEoREGhIRToFMI/IJpXGZJTkFCIRDQiUSAcDSFCQcxjzPM8e+9757zsd6xvXdnH3ff9qnO+vdb61vrNa/34Sye5v783Go1fj7H7oZMYDIb9/X1QFhQU/GyMogtTW1sbmPBjdHR0enr6d5FBOWDa3t5Wkf7+/r29Pf3Jnp+fm5ubLZlUlb6/v+tMpihKQEAA409PTz09PTqT2dvbV1ZWJiQk8KfFxcWlpSX9HaSiosLb25vx3t5eWFR/b6yurpYqc2Rk5Ptkt7e3m5ubjPv4+BQVFTEOMjjRN8na29s7OjoODw/5U3Z2tr+/vwB+fHyMj49/hwzxdHZ2Zv5huV9VSktLGZycnASldWSWkQumrq4uHhMaGhoZGcmxuLCwoJXs+vq6paVFiNyNjY2ZmRkeXFhYyODU1JRWMijBrD1BBgYGXl9fBTA8PJzDHD51d3eniczLy6upqYnxt7e3sbExxrOysqQxrtVm4JMaf2Jigg+XnJzMI9fW1qxwkLS0tLCwMAEEk2p8VVxdXXmk2eQSssfHx4eHB8aLi4sZnJubYzAuLo697Pz8XEL2p0kY/8MkAri+vo60JIB8MsjBwYHC8XR1dYWNoObyhPT0dC6eXM8CAwN57unp6Sey1tZWdebw8DCnCdYPhOuyp6enm5ubAOIMiuWZdnZ2vraHn5+fu7s7b1lAbGxswMdJXOFspMrKygqfg2MWq/AwFxcXAXl5ebGDeVDChTOZ5eLiQssq0qSMIs7DFGQBKZN5L1pWQSqRtie8mpKbm4uEJiVzcHBgkFOGnZ2dNKPyaoqHh0ddXV1ERARPkHYW6HkFxNHRUcueMOzfw9bW1jJffHw8r3J8fCwg7J/SPf1zMvUP+AR9pqamspff3NxwPHCkI6oEEJH3yYyW+sT9gPWzurrKhwgJCeH45XhA6RB9BufzNEleXh6vy9UZ8cv6Pzo64rm+vr4SR6qvr2dfguybRABjYmKcnJwEcHd3l6cHBwdLyHiy2gcwyHaVahs+j95Sa/GcnZ3l/SLAU1JSBBDtBo80q1oTGfJWX18f4zk5ORzR8/PzPDI2NlYT2eXlJS5hjIMG2eeLxs1SkpKSNJEhy8GRpF0C50mkWY76qKgoNCaayGDbhoYGwb+jo6O5akOGhoYYzMzMtK79tsxnCHbcyXgM/GJra4t9W23urLhYgM+sT/yQFgSpE+F2o5Yb695BampqkB6DgoL4k9FoPDk5YXvDY//zKavI3EzCOHrCwcFBxvPz8y0TrD7XXIPBIM1EINP5Tt3Z2SntVsrKypCmP4Xmr9CgHHd3dy8vL0ujODExUc+nCRQHDmGIs7NzeXm5zo8uMH5jYyPXs6qqKltbW/0fymAVoX8pKSnB5fo3PgGCz3zBQX3PyMj46g3vf3tJ/VuAAQB9ArVT6P7oawAAAABJRU5ErkJggg=="},2491:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={pages:{"pages/home/index":{navigationBarTitleText:"趣测"},"p/i":{navigationBarTitleText:"趣测"},"pages/Category/Category":{navigationBarTitleText:"分类",disableScroll:!0},"pages/christmas/result":{navigationBarTitleText:"预览",navigationBarBackgroundColor:"#004131",navigationBarTextStyle:"white",disableScroll:!0},"pages/christmas/index":{backgroundTextStyle:"light",navigationBarBackgroundColor:"#40445b",navigationStyle:"custom"},"pages/quiz/index":{},"pages/question/index":{},"pages/quizchoiceness/index":{},"pages/Search/Search":{},"pages/tanmegame/game":{},"pages/tarotmark/item":{navigationBarTitleText:"塔罗新年签",disableScroll:!0,navigationBarBackgroundColor:"#1e1c17",navigationStyle:"custom"}},globalStyle:{navigationBarBackgroundColor:"white",navigationBarTextStyle:"black",navigationStyle:"default"}};t.default=r},2877:function(e,t,n){function r(e,t,n,r,o,i,a,u){var c,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(e,t){return c.call(t),f(e,t)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:s}}n.d(t,"a",function(){return r})},"2e96":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADCCAYAAAASCr1LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzk2OEU5M0Y5NTMxMUU5OEMzNUM3Nzc0M0UyNzM3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzk2OEU5NEY5NTMxMUU5OEMzNUM3Nzc0M0UyNzM3NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI3OTY4RTkxRjk1MzExRTk4QzM1Qzc3NzQzRTI3Mzc3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI3OTY4RTkyRjk1MzExRTk4QzM1Qzc3NzQzRTI3Mzc3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hMLXqwAAU5xJREFUeNrsXQdgHMW5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"},3324:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAABaCAYAAACL6fx0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjM5RTIxQ0JBNEMxMUU5QjZGNURDMENGMzY0RTAxNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjM5RTIxREJBNEMxMUU5QjZGNURDMENGMzY0RTAxNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMzlFMjFBQkE0QzExRTlCNkY1REMwQ0YzNjRFMDE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMzlFMjFCQkE0QzExRTlCNkY1REMwQ0YzNjRFMDE2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EOhsugAAE9FJREFUeNrsnQt0HOV1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"},"48b8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAclBMVEUAAACfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5/19fXx8fHV1dXf39/a2tq+vr6tra2mpqajo6Pv7+/r6+vn5+fOzs7GxsbDw8O5ubmzs7Oqqqri4uKhoaFxBjv4AAAAEXRSTlMAJO/89I1PzLeuMzDlyI5Iy5r0mScAAACvSURBVBjTdZHZFoMgDEQj4r6VgHvdavv/v9gjEPDFeRrugZBkwKiIqjIsq6gAryATpCwg2DDhxRoD41DcFcb6OdcHtQwW86tIavyK39PiFCC3dlLYjtbnUFO9scNuMjaCSjjcojI4gVI4nS2u+ksG97aGGZU2wDz8bbj05u7L002+P7Zu7eCOGuoecoK9lAf162Y7ZtnTbH4PHe5uDw8705jfII+fs6DcEiZYQrn9AWs3F6BKr4++AAAAAElFTkSuQmCC"},"4cbf":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQ0E1Q0U2NTgxQ0ExMUU5ODg1RDhCRjU1QTZGOTYxMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQ0E1Q0U2NjgxQ0ExMUU5ODg1RDhCRjU1QTZGOTYxMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFDQTVDRTYzODFDQTExRTk4ODVEOEJGNTVBNkY5NjEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFDQTVDRTY0ODFDQTExRTk4ODVEOEJGNTVBNkY5NjEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+45ax+gAAAN9JREFUeNpinDp5MgMFwA+Iw1goMMAViDeCGExkGmAFxLuA+D8Qy5BjiDsQHwXib0CsmJWT8xRkSCYQ55HghR1QthoQPwQxQGESDsT2QMwHxC14DPAC4q1A/BmIDYH4KUwC5BI3IL4IxM1AnIPDACeoAX+BWAuI7yJLggz5BcQmQHwciEHxXYbFC3uhYaAMxE/QbYAF7B9oiF8F4k4gzoeK20FjAWSRJiwM0AF6OtGBumgC1HUxQPwTFAtA/BxXYGGLYksgPgs1AORCJXwG4EtsIFeUArEKED8jFO8AAQYAxwQrAuuzwSAAAAAASUVORK5CYII="},"4e22":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ssl_static_host=t.static_host=t.host=void 0;t.host="https://qc-ssl.itwlw.com/index.php/";t.static_host="http://uploads-admin.cdn.woquhudong.cn/";t.ssl_static_host="https://ssl-uploads-admin.cdn.itwlw.com/"},"4fab":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Md5=void 0;var r=function(e,t){var n=2147483648&e,r=2147483648&t,o=1073741824&e,i=1073741824&t,a=(1073741823&e)+(1073741823&t);return o&i?2147483648^a^n^r:o|i?a^(1073741824&a?3221225472:1073741824)^n^r:a^n^r},o=function(e,t,n){return e^t^n},i=function(e,t,n){return t^(e|~n)},a=function(e,t,n){return e&t|~e&n},u=function(e,t,n){return e&n|t&~n},c=function(e,t){return e<<t|e>>>32-t},s=function(e,t,n,o,i,u,s){return r(c(r(e,r(r(a(t,n,o),i),s)),u),t)},f=function(e,t,n,o,i,a,s){return r(c(r(e,r(r(u(t,n,o),i),s)),a),t)},d=function(e,t,n,i,a,u,s){return r(c(r(e,r(r(o(t,n,i),a),s)),u),t)},A=function(e,t,n,o,a,u,s){return r(c(r(e,r(r(i(t,n,o),a),s)),u),t)},l=function(e){for(var t,n=0,r=0,o=e.length,i=o+8,a=16*((i-i%64)/64+1),u=Array(a-1);r<o;)n=r%4*8,u[t=(r-r%4)/4]=u[t]|e.charCodeAt(r)<<n,r+=1;return t=(r-r%4)/4,n=r%4*8,u[t]=u[t]|128<<n,u[a-2]=o<<3,u[a-1]=o>>>29,u},p=function(e){var t,n="",r="";for(t=0;t<=3;t++)n+=(r="0"+(e>>>8*t&255).toString(16)).substr(r.length-2,2);return n};t.Md5=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t,n,o,i,a,u,c,v,h,g=e,y=Array();for(y=l(g),u=1732584193,c=4023233417,v=2562383102,h=271733878,t=0;t<y.length;t+=16)n=u,o=c,i=v,a=h,u=s(u,c,v,h,y[t+0],7,3614090360),h=s(h,u,c,v,y[t+1],12,3905402710),v=s(v,h,u,c,y[t+2],17,606105819),c=s(c,v,h,u,y[t+3],22,3250441966),u=s(u,c,v,h,y[t+4],7,4118548399),h=s(h,u,c,v,y[t+5],12,1200080426),v=s(v,h,u,c,y[t+6],17,2821735955),c=s(c,v,h,u,y[t+7],22,4249261313),u=s(u,c,v,h,y[t+8],7,1770035416),h=s(h,u,c,v,y[t+9],12,2336552879),v=s(v,h,u,c,y[t+10],17,4294925233),c=s(c,v,h,u,y[t+11],22,2304563134),u=s(u,c,v,h,y[t+12],7,1804603682),h=s(h,u,c,v,y[t+13],12,4254626195),v=s(v,h,u,c,y[t+14],17,2792965006),c=s(c,v,h,u,y[t+15],22,1236535329),u=f(u,c,v,h,y[t+1],5,4129170786),h=f(h,u,c,v,y[t+6],9,3225465664),v=f(v,h,u,c,y[t+11],14,643717713),c=f(c,v,h,u,y[t+0],20,3921069994),u=f(u,c,v,h,y[t+5],5,3593408605),h=f(h,u,c,v,y[t+10],9,38016083),v=f(v,h,u,c,y[t+15],14,3634488961),c=f(c,v,h,u,y[t+4],20,3889429448),u=f(u,c,v,h,y[t+9],5,568446438),h=f(h,u,c,v,y[t+14],9,3275163606),v=f(v,h,u,c,y[t+3],14,4107603335),c=f(c,v,h,u,y[t+8],20,1163531501),u=f(u,c,v,h,y[t+13],5,2850285829),h=f(h,u,c,v,y[t+2],9,4243563512),v=f(v,h,u,c,y[t+7],14,1735328473),c=f(c,v,h,u,y[t+12],20,2368359562),u=d(u,c,v,h,y[t+5],4,4294588738),h=d(h,u,c,v,y[t+8],11,2272392833),v=d(v,h,u,c,y[t+11],16,1839030562),c=d(c,v,h,u,y[t+14],23,4259657740),u=d(u,c,v,h,y[t+1],4,2763975236),h=d(h,u,c,v,y[t+4],11,1272893353),v=d(v,h,u,c,y[t+7],16,4139469664),c=d(c,v,h,u,y[t+10],23,3200236656),u=d(u,c,v,h,y[t+13],4,681279174),h=d(h,u,c,v,y[t+0],11,3936430074),v=d(v,h,u,c,y[t+3],16,3572445317),c=d(c,v,h,u,y[t+6],23,76029189),u=d(u,c,v,h,y[t+9],4,3654602809),h=d(h,u,c,v,y[t+12],11,3873151461),v=d(v,h,u,c,y[t+15],16,530742520),c=d(c,v,h,u,y[t+2],23,3299628645),u=A(u,c,v,h,y[t+0],6,4096336452),h=A(h,u,c,v,y[t+7],10,1126891415),v=A(v,h,u,c,y[t+14],15,2878612391),c=A(c,v,h,u,y[t+5],21,4237533241),u=A(u,c,v,h,y[t+12],6,1700485571),h=A(h,u,c,v,y[t+3],10,2399980690),v=A(v,h,u,c,y[t+10],15,4293915773),c=A(c,v,h,u,y[t+1],21,2240044497),u=A(u,c,v,h,y[t+8],6,1873313359),h=A(h,u,c,v,y[t+15],10,4264355552),v=A(v,h,u,c,y[t+6],15,2734768916),c=A(c,v,h,u,y[t+13],21,1309151649),u=A(u,c,v,h,y[t+4],6,4149444226),h=A(h,u,c,v,y[t+11],10,3174756917),v=A(v,h,u,c,y[t+2],15,718787259),c=A(c,v,h,u,y[t+9],21,3951481745),u=r(u,n),c=r(c,o),v=r(v,i),h=r(h,a);return p(c)+p(v)}},"543d":function(t,n,r){function o(e,t){return u(e)||a(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}function u(e){if(Array.isArray(e))return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return A(e)||d(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function A(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function l(e){return"function"==typeof e}function p(e){return"string"==typeof e}function v(e){return"[object Object]"===Ie.call(e)}function h(e,t){return je.call(e,t)}function g(){}function y(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function b(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?m(n):n}function m(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function O(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}function R(e,t){Object.keys(t).forEach(function(n){-1!==ke.indexOf(n)&&l(t[n])&&(e[n]=b(e[n],t[n]))})}function D(e,t){e&&t&&Object.keys(t).forEach(function(n){-1!==ke.indexOf(n)&&l(t[n])&&O(e[n],t[n])})}function P(e){return function(t){return e(t)||t}}function X(t){return!!t&&("object"===(void 0===t?"undefined":e(t))||"function"==typeof t)&&"function"==typeof t.then}function I(e,t){for(var n=!1,r=0;r<e.length;r++){var o=e[r];if(n)n=Promise.then(P(o));else{var i=o(t);if(X(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(e){return e(t)}}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(e[n])){var r=t[n];t[n]=function(t){I(e[n],t).then(function(e){return l(r)&&r(e)||e})}}}),t}function w(e,t){var n=[];Array.isArray(ze.returnValue)&&n.push.apply(n,s(ze.returnValue));var r=Ee[e];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,s(r.returnValue)),n.forEach(function(e){t=e(t)||t}),t}function x(e){var t=Object.create(null);Object.keys(ze).forEach(function(e){"returnValue"!==e&&(t[e]=ze[e].slice())});var n=Ee[e];return n&&Object.keys(n).forEach(function(e){"returnValue"!==e&&(t[e]=(t[e]||[]).concat(n[e]))}),t}function k(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=x(e);return a&&Object.keys(a).length?Array.isArray(a.invoke)?I(a.invoke,n).then(function(e){return t.apply(void 0,[j(a,e)].concat(o))}):t.apply(void 0,[j(a,n)].concat(o)):t.apply(void 0,[n].concat(o))}function z(e){return Ne.test(e)}function E(e){return Se.test(e)}function S(e){return Me.test(e)&&"onPush"!==e}function N(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function M(e){return!(z(e)||E(e)||S(e))}function T(e,t){return M(e)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return l(n.success)||l(n.fail)||l(n.complete)?w(e,k.apply(void 0,[e,t,n].concat(o))):w(e,N(new Promise(function(r,i){k.apply(void 0,[e,t,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})})})))}:t}function B(){var e=wx.getSystemInfoSync(),t=e.platform,n=e.pixelRatio,r=e.windowWidth;Ue=r,Fe=n,He="ios"===t}function H(e,t,n){return function(r){return t(F(e,r,n))}}function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v(t)){var i=!0===o?t:{};for(var a in l(n)&&(n=n(t,i)||{}),t)if(h(n,a)){var u=n[a];l(u)&&(u=u(t[a],t,i)),u?p(u)?i[u]=t[a]:v(u)&&(i[u.name?u.name:a]=u.value):console.warn("微信小程序 ".concat(e,"暂不支持").concat(a))}else-1!==Ce.indexOf(a)?i[a]=H(e,t[a],r):o||(i[a]=t[a]);return i}return l(t)&&(t=H(e,t,r)),t}function F(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return l(Je.returnValue)&&(t=Je.returnValue(e,t)),U(e,t,n,{},r)}function Z(e,t){if(h(Je,e)){var n=Je[e];return n?function(t,r){var o=n;l(n)&&(o=n(t));var i=[t=U(e,t,o.args,o.returnValue)];void 0!==r&&i.push(r);var a=wx[o.name||e].apply(wx,i);return E(e)?F(e,a,o.returnValue,z(e)):a}:function(){console.error("微信小程序 暂不支持".concat(e))}}return t}function L(e){return function(t){var n=t.fail,r=t.complete,o={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};l(n)&&n(o),l(r)&&r(o)}}function J(e,t,n){return e[t].apply(e,n)}function V(e){if(wx.canIUse("nextTick")){var t=e.triggerEvent;e.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.apply(e,[nt(n)].concat(o))}}}function Q(e,t){var n=t[e];t[e]=n?function(){V(this);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.apply(this,t)}:function(){V(this)}}function C(e,t){var n=e.$mp[e.mpType];t.forEach(function(t){h(n,t)&&(e[t]=n[t])})}function G(e,t){if(!t)return!0;if(Xe.default.options&&Array.isArray(Xe.default.options[e]))return!0;if(t=t.default||t,l(t))return!!l(t.extendOptions[e])||!!(t.super&&t.super.options&&Array.isArray(t.super.options[e]));if(l(t[e]))return!0;var n=t.mixins;return Array.isArray(n)?!!n.find(function(t){return G(e,t)}):void 0}function q(e,t,n){t.forEach(function(t){G(t,n)&&(e[t]=function(e){return this.$vm&&this.$vm.__call_hook(t,e)})})}function W(e,t){var n;return t=t.default||t,l(t)?(n=t,t=n.extendOptions):n=e.extend(t),[n,t]}function Y(e,t){if(Array.isArray(t)&&t.length){var n=Object.create(null);t.forEach(function(e){n[e]=!0}),e.$scopedSlots=e.$slots=n}}function K(e,t){var n=(e=(e||"").split(",")).length;1===n?t._$vueId=e[0]:2===n&&(t._$vueId=e[0],t._$vuePid=e[1])}function _(e,t){var n=e.data||{},r=e.methods||{};if("function"==typeof n)try{n=n.call(t)}catch(e){Object({VUE_APP_PLATFORM:"mp-weixin",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(e){}return v(n)||(n={}),Object.keys(r).forEach(function(e){-1!==t.__lifecycle_hooks__.indexOf(e)||h(n,e)||(n[e]=r[e])}),n}function $(e){return function(t,n){this.$vm&&(this.$vm[e]=t)}}function ee(e,t){var n=e.behaviors,r=e.extends,o=e.mixins,i=e.props;i||(e.props=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(e){a.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i.name={type:String,default:""},i.value={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),v(r)&&r.props&&a.push(t({properties:ne(r.props,!0)})),Array.isArray(o)&&o.forEach(function(e){v(e)&&e.props&&a.push(t({properties:ne(e.props,!0)}))}),a}function te(e,t,n,r){return Array.isArray(t)&&1===t.length?t[0]:t}function ne(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return t||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(e,t){var n=Object.create(null);e.forEach(function(e){n[e]=!0}),this.setData({$slots:n})}}),Array.isArray(e)?e.forEach(function(e){n[e]={type:null,observer:$(e)}}):v(e)&&Object.keys(e).forEach(function(t){var r=e[t];if(v(r)){var o=r.default;l(o)&&(o=o()),r.type=te(t,r.type),n[t]={type:-1!==ot.indexOf(r.type)?r.type:null,value:o,observer:$(t)}}else{var i=te(t,r);n[t]={type:-1!==ot.indexOf(i)?i:null,observer:$(t)}}}),n}function re(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(e){}return e.stopPropagation=g,e.preventDefault=g,e.target=e.target||{},h(e,"detail")||(e.detail={}),v(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function oe(e,t){var n=e;return t.forEach(function(t){var r=t[0],o=t[2];if(r||void 0!==o){var i=t[1],a=t[3],u=r?e.__get_value(r,n):n;Number.isInteger(u)?n=o:i?Array.isArray(u)?n=u.find(function(t){return e.__get_value(i,t)===o}):v(u)?n=Object.keys(u).find(function(t){return e.__get_value(i,u[t])===o}):console.error("v-for 暂不支持循环数据：",u):n=u[o],a&&(n=e.__get_value(a,n))}}),n}function ie(e,t,n){var r={};return Array.isArray(t)&&t.length&&t.forEach(function(t,o){"string"==typeof t?t?"$event"===t?r["$"+o]=n:0===t.indexOf("$event.")?r["$"+o]=e.__get_value(t.replace("$event.",""),n):r["$"+o]=e.__get_value(t):r["$"+o]=e:r["$"+o]=oe(e,t)}),r}function ae(e){for(var t={},n=1;n<e.length;n++){var r=e[n];t[r[0]]=r[1]}return t}function ue(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=t.currentTarget&&t.currentTarget.dataset&&"wx"===t.currentTarget.dataset.comType,!n.length))return a?[t]:t.detail.__args__||t.detail;var u=ie(e,r,t),c=[];return n.forEach(function(e){"$event"===e?"__set_model"!==i||o?o&&!a?c.push(t.detail.__args__[0]):c.push(t):c.push(t.target.value):Array.isArray(e)&&"o"===e[0]?c.push(ae(e)):"string"==typeof e&&h(u,e)?c.push(u[e]):c.push(e)}),c}function ce(e,t){return e===t||"regionchange"===t&&("begin"===e||"end"===e)}function se(e){var t=this,n=((e=re(e)).currentTarget||e.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=e.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],u=r.charAt(0)===at,c=(r=u?r.slice(1):r).charAt(0)===it;r=c?r.slice(1):r,a&&ce(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=t.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,ue(t.$vm,e,n[1],n[2],u,r));var a=o[r];if(!l(a))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(a.once)return;a.once=!0}i.push(a.apply(o,ue(t.$vm,e,n[1],n[2],u,r)))}})}),"input"===o&&1===i.length&&void 0!==i[0]?i[0]:void 0}function fe(e,t){var n=t.mocks,r=t.initRefs;e.$options.store&&(Xe.default.prototype.$store=e.$options.store),Xe.default.prototype.mpHost="mp-weixin",Xe.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),C(this,n)))}});var o={onLaunch:function(t){this.$vm||(wx.canIUse("nextTick")||console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"),this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",t),this.$vm.__call_hook("onLaunch",t))}};o.globalData=e.$options.globalData||{};var i=e.$options.methods;return i&&Object.keys(i).forEach(function(e){o[e]=i[e]}),q(o,ut),o}function de(e,t){var n=e.$children,r=n.find(function(e){return e.$scope._$vueId===t});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=de(n[o],t))return r}function Ae(e){return Behavior(e)}function le(){return!!this.route}function pe(e){this.triggerEvent("__l",e)}function ve(e){var t=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={};return t.selectAllComponents(".vue-ref").forEach(function(t){var n=t.dataset.ref;e[n]=t.$vm||t}),t.selectAllComponents(".vue-ref-in-for").forEach(function(t){var n=t.dataset.ref;e[n]||(e[n]=[]),e[n].push(t.$vm||t)}),e}})}function he(e){var t,n=e.detail||e.value,r=n.vuePid,o=n.vueOptions;r&&(t=de(this.$vm,r)),t||(t=this.$vm),o.parent=t}function ge(e){return fe(e,{mocks:ct,initRefs:ve})}function ye(e){return App(ge(e)),e}function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isPage,r=t.initRelation,i=o(W(Xe.default,e),2),a=i[0],u=i[1],c={multipleSlots:!0,addGlobalClass:!0};u["mp-weixin"]&&u["mp-weixin"].options&&Object.assign(c,u["mp-weixin"].options);var s={options:c,data:_(u,Xe.default.prototype),behaviors:ee(u,Ae),properties:ne(u.props,!1,u.__file),lifetimes:{attached:function(){var e=this.properties,t={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:e};K(e.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:t}),this.$vm=new a(t),Y(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:he,__e:se}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(e){s.methods[e]=function(t){return this.$vm[e](t)}}),n?s:[s,a]}function me(e){return be(e,{isPage:le,initRelation:pe})}function Oe(e,t){t.isPage,t.initRelation;var n=me(e);return q(n.methods,st,e),n.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},n}function Re(e){return Oe(e,{isPage:le,initRelation:pe})}function De(e){return Component(Re(e))}function Pe(e){return Component(me(e))}Object.defineProperty(n,"__esModule",{value:!0}),n.createApp=ye,n.createComponent=Pe,n.createPage=De,n.default=void 0;var Xe=function(e){return e&&e.__esModule?e:{default:e}}(r("66fd")),Ie=Object.prototype.toString,je=Object.prototype.hasOwnProperty,we=/-(\w)/g,xe=y(function(e){return e.replace(we,function(e,t){return t?t.toUpperCase():""})}),ke=["invoke","success","fail","complete","returnValue"],ze={},Ee={},Se=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,Ne=/^create|Manager$/,Me=/^on/,Te=1e-4,Be=750,He=!1,Ue=0,Fe=0,Ze={promiseInterceptor:{returnValue:function(e){return X(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}}},Le=Object.freeze({upx2px:function(e,t){if(0===Ue&&B(),0===(e=Number(e)))return 0;var n=e/Be*(t||Ue);return n<0&&(n=-n),0===(n=Math.floor(n+Te))?1!==Fe&&He?.5:1:e<0?-n:n},interceptors:Ze,addInterceptor:function(e,t){"string"==typeof e&&v(t)?R(Ee[e]||(Ee[e]={}),t):v(e)&&R(ze,e)},removeInterceptor:function(e,t){"string"==typeof e?v(t)?D(Ee[e],t):delete Ee[e]:v(e)&&D(ze,e)}}),Je={previewImage:{args:function(e){var t=parseInt(e.current);if(!isNaN(t)){var n=e.urls;if(Array.isArray(n)){var r=n.length;if(r)return t<0?t=0:t>=r&&(t=r-1),t>0?(e.current=n[t],e.urls=n.filter(function(e,r){return!(r<t)||e!==n[t]})):e.current=n[0],{indicator:!1,loop:!1}}}}}},Ve=["vibrate"],Qe=[],Ce=["success","fail","cancel","complete"],Ge=Object.create(null);["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"].forEach(function(e){Ge[e]=L(e)});var qe={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]},We=Object.freeze({getProvider:function(e){var t=e.service,n=e.success,r=e.fail,o=e.complete,i=!1;qe[t]?(i={errMsg:"getProvider:ok",service:t,provider:qe[t]},l(n)&&n(i)):(i={errMsg:"getProvider:fail:服务["+t+"]不存在"},l(r)&&r(i)),l(o)&&o(i)}}),Ye=function(){return"function"==typeof getUniEmitter?getUniEmitter:function(){return e||(e=new Xe.default),e};var e}(),Ke=Object.freeze({$on:function(){return J(Ye(),"$on",Array.prototype.slice.call(arguments))},$off:function(){return J(Ye(),"$off",Array.prototype.slice.call(arguments))},$once:function(){return J(Ye(),"$once",Array.prototype.slice.call(arguments))},$emit:function(){return J(Ye(),"$emit",Array.prototype.slice.call(arguments))}}),_e=Object.freeze({}),$e=Page,et=Component,tt=/:/g,nt=y(function(e){return xe(e.replace(tt,"-"))});Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Q("onLoad",e),$e(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Q("created",e),et(e)};var rt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"],ot=[String,Number,Boolean,Object,Array,null],it="~",at="^",ut=["onShow","onHide","onError","onPageNotFound"],ct=["__route__","__wxExparserNodeId__","__wxWebviewId__"],st=["onShow","onHide","onUnload"];st.push.apply(st,rt),Ve.forEach(function(e){Je[e]=!1}),Qe.forEach(function(e){var t=Je[e]&&Je[e].name?Je[e].name:e;wx.canIUse(t)||(Je[e]=!1)});var ft={};"undefined"!=typeof Proxy?ft=new Proxy({},{get:function(e,t){return e[t]?e[t]:Le[t]?Le[t]:_e[t]?T(t,_e[t]):We[t]?T(t,We[t]):Ge[t]?T(t,Ge[t]):Ke[t]?Ke[t]:h(wx,t)||h(Je,t)?T(t,Z(t,wx[t])):void 0},set:function(e,t,n){return e[t]=n,!0}}):(Object.keys(Le).forEach(function(e){ft[e]=Le[e]}),Object.keys(Ge).forEach(function(e){ft[e]=T(e,Ge[e])}),Object.keys(We).forEach(function(e){ft[e]=T(e,Ge[e])}),Object.keys(Ke).forEach(function(e){ft[e]=Ke[e]}),Object.keys(_e).forEach(function(e){ft[e]=T(e,_e[e])}),Object.keys(wx).forEach(function(e){(h(wx,e)||h(Je,e))&&(ft[e]=T(e,Z(e,wx[e])))})),wx.createApp=ye,wx.createPage=De,wx.createComponent=Pe;var dt=ft;n.default=dt},"57a0":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAYAAABjwOorAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NDQ4MEJEM0M4ODAxMUU5QUVGMUI2MDU5RDFBQzE4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NDQ4MEJENEM4ODAxMUU5QUVGMUI2MDU5RDFBQzE4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg0NDgwQkQxQzg4MDExRTlBRUYxQjYwNTlEMUFDMTg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0NDgwQkQyQzg4MDExRTlBRUYxQjYwNTlEMUFDMTg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hQGF9AAAArFJREFUeNrsmsFLFFEcx2dWXU+JCR71ZGtogmYiste8eI0MBME9BEYXqUt/QQqldBHEFffkwbzqSfAUSZmaEUGSQV0Kggo6bbVN3x8+dXzO783MMm93ZpwffJx9znvzft+Z99783m/XsCzLAGPgixV9ewcGSZOJP0OGYawZ8bLLJGwfHy7FTNgGCbMcTrwF2+AP+At6QL/t/AuwC+o1O1hU9F0HTNAF+s60dBineTHv7IxKdUYd6ujCS9+zsoiUpPMbuO1w5y66lHWal77vCt+PTRa2x1w85VLWaV77fq2qVIrwgvFPJawmwsJqqjWkKmqJsERYSIVZXlacMK1+nO+ysN9Mo18hEsb5csr3WunkAFh3aNTqs3OK41rARw3CHoARh/9fVQlrAtcD6HwJ3ARPwSPwKkBhGUFVFo8ecRwGW2AZ9MZhVfwulYfFUyuIbUbFhW2CdtABOgW0CZ0KqL8x8AYsgitlXmNK+HTkX4fweVM1x+hO7ztc7H3ANzQnmAOPwYGPtuTLB7dRIj8xbkfcqGnEjIsbOe2jDedLfdgiD/LhHphJQioPVhuSEOkJuK9TWJGp91OToPkyFg/Ol6Jb5JERu1HTFoO1ByyK3mcPmdXNzciXNpC2Bb8l4bstJC7PJlxSZltMuwLo8pl+myjHQV1zrEEqU8w4KWeSohhSbYjjinGYpb1VSVFc5LHDbFsyPq57R4Q+nzT4TC/0z8y2pYmbY6vMOM/5nGNBIs+xHFNvVZXiTjN36UKI3r2cL2nVHDMjEKFwvpjnMkuVCEuEhURYlL9GKqmEpeLykGQh3Yothqqse7/mpe9ulbBmkHdo9MOlrNO89L0gfD95qUX45xAU51IqnRKxZ1J5JOwZjtmYLYovSdg14zANHSfL0hyj1PMN8DUGgkgDJWKf/xdgAALOeT40A5cWAAAAAElFTkSuQmCC"},"57b9":function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(){r(this,e)}return i(e,[{key:"cardAnimation",value:function(e,t,n,r,o,i,a,u,c,s,f,d,A){function l(e){function n(){function e(e){var t=0,n=JSON.parse(JSON.stringify(f));n[e].y+=p*Math.sin(t/c*Math.PI),f=n,t+=s}setInterval(function(){for(var t=0;t<f.length;t++)e(t)},s)}function r(){for(var e=0;e<f.length;e++)t.drawImage(v,f[e].x,f[e].y,h,g);t.draw()}var a=(o-h)/2,u=(i-g)/2,s=20,f=new Array(22).fill({x:a,y:u}),d=g/60,A=(h/40/(500/s)).toFixed(4),l=(d/(500/s)).toFixed(4),p=2*l,y=0,b=null;new Array(22).fill(null),b=setInterval(function(){for(var e=0;e<f.length;e++){var t=JSON.parse(JSON.stringify(f));t[e].x+=A*(e%22),t[e].y+=l*(e%22),e==(f=t).length-1&&(r(),y++)}y>=500/s&&(clearInterval(b),n())},s)}function p(){var n=15.625,r=s/n,a=(o-h)/2,u=(i-g)/2,c=0,d=1,A=5*f/r,l=[{x1:-f,s1:-1,x2:-f,s2:0,x3:-f,s3:0,x4:f,s4:2,x5:0,s5:-1},{x1:0,s1:0,x2:f,s2:1,x3:f,s3:0,x4:f,s4:0,x5:0,s5:-1},{x1:0,s1:0,x2:0,s2:0,x3:-f,s3:-1,x4:f,s4:2,x5:0,s5:-1}];!function(){function s(){t.clearRect(0,0,o,i),t.fillStyle="rgba(255, 255, 255, 0)",t.fillRect(0,0,o,i),t.setTransform(1,0,0,1,0,0);for(var e=0;e<l.length;e++){var n=a+l[e]["s"+d]*A*c;d>1&&(n+=l[e]["x"+(d-1)]),t.save(),t.translate(n,u),t.drawImage(v,0,0,h,g),t.restore()}t.draw(),(c+=1)>=r/5&&(c=0,d+=1)}function f(){t.fillStyle="rgba(255, 255, 255, 0)",t.fillRect(0,0,o,i),t.setTransform(1,0,0,1,0,0),t.save(),t.translate(a,u),t.drawImage(v,0,0,h,g),t.draw(),t.restore(),e()}var p=setInterval(function(){s(),d>5&&(clearInterval(p),f())},n)}()}var v,h=a,g=u;v=n,r||l(),1==r&&new Promise(function(e,t){l()}).then(function(){p()}),2==r&&p()}}]),e}();t.default=a},"615d":function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.saveJumpRecord=function(t,n){var r=e.getStorageSync("openid"),o={target:t.query.target,from:t.query.from,channel:t.query.channel};r?(o.iscode=0,o.openid=r,e.request({url:n.globalData.getJumpUrl+"Wxapp/BoxApi/saveJumpRecord",data:o,success:function(e){console.log(e)}})):e.login({success:function(t){console.log(t.code),o.iscode=1,o.openid=t.code,e.request({url:n.globalData.getJumpUrl+"Wxapp/BoxApi/saveJumpRecord",data:o,success:function(t){console.log(t.data),e.setStorageSync("openid",t.data)}})}})},t.saveOutRecord=function(t,n,r,o){var i=e.getStorageSync("openid"),a={target:o,from:r,channel:n};i?(a.iscode=0,a.openid=i,wx.request({url:t.globalData.getJumpUrl+"Wxapp/BoxApi/saveOutRecord",data:a,success:function(e){console.log(e,"1")}})):wx.login({success:function(e){console.log(e.code),a.iscode=1,a.openid=e.code,wx.request({url:t.globalData.getJumpUrl+"Wxapp/BoxApi/saveOutRecord",data:a,success:function(e){console.log(e,"2"),wx.setStorageSync("openid",e.data)}})}})}}).call(this,n("543d").default)},6654:function(e,t){e.exports="data:image/png;base64,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"},"66fd":function(t,n,r){r.r(n),function(t){function r(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function i(e){return!0===e}function a(e){return!1===e}function u(t){return"string"==typeof t||"number"==typeof t||"symbol"===(void 0===t?"undefined":e(t))||"boolean"==typeof t}function c(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))}function s(e){return"[object Object]"===gn.call(e)}function f(e){return"[object RegExp]"===gn.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function A(e){return o(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===gn?JSON.stringify(e,null,2):String(e)}function p(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),r=e.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function g(e,t){return mn.call(e,t)}function y(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function b(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function m(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&m(t,e[n]);return t}function R(e,t,n){}function D(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var o=Array.isArray(e),i=Array.isArray(t);if(o&&i)return e.length===t.length&&e.every(function(e,n){return D(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(o||i)return!1;var a=Object.keys(e),u=Object.keys(t);return a.length===u.length&&a.every(function(n){return D(e[n],t[n])})}catch(e){return!1}}function P(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function X(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function I(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function j(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function w(e){if(!Sn.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function x(e){return"function"==typeof e&&/native code/.test(e.toString())}function k(e){Wn.SharedObject.targetStack.push(e),Wn.SharedObject.target=e}function z(){Wn.SharedObject.targetStack.pop(),Wn.SharedObject.target=Wn.SharedObject.targetStack[Wn.SharedObject.targetStack.length-1]}function E(e){return new Yn(void 0,void 0,void 0,String(e))}function S(e){var t=new Yn(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}function N(e){nr=e}function M(e,t){e.__proto__=t}function T(e,t,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];j(e,i,t[i])}}function B(e,t){var n;if(c(e)&&!(e instanceof Yn))return g(e,"__ob__")&&e.__ob__ instanceof rr?n=e.__ob__:nr&&!Vn()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new rr(e)),t&&n&&n.vmCount++,n}function H(e,t,n,r,o){var i=new Wn,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var u=a&&a.get,c=a&&a.set;u&&!c||2!==arguments.length||(n=e[t]);var s=!o&&B(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Wn.SharedObject.target&&(i.depend(),s&&(s.dep.depend(),Array.isArray(t)&&Z(t))),t},set:function(t){var r=u?u.call(e):n;t===r||t!==t&&r!==r||u&&!c||(c?c.call(e,t):n=t,s=!o&&B(t),i.notify())}})}}function U(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(H(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function F(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||g(e,t)&&(delete e[t],n&&n.dep.notify())}}function Z(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Z(t)}function L(e,t){if(!t)return e;for(var n,r,o,i=Cn?Reflect.ownKeys(t):Object.keys(t),a=0;a<i.length;a++)"__ob__"!==(n=i[a])&&(r=e[n],o=t[n],g(e,n)?r!==o&&s(r)&&s(o)&&L(r,o):U(e,n,o));return e}function J(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,o="function"==typeof e?e.call(n,n):e;return r?L(r,o):o}:t?e?function(){return L("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function V(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Q(n):n}function Q(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function C(e,t,n,r){var o=Object.create(e||null);return t?m(o,t):o}function G(e,t){var n=e.props;if(n){var r,o,i,a={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(o=n[r])&&(i=Rn(o),a[i]={type:null});else if(s(n))for(var u in n)o=n[u],a[i=Rn(u)]=s(o)?o:{type:o};e.props=a}}function q(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(s(n))for(var i in n){var a=n[i];r[i]=s(a)?m({from:i},a):{from:a}}}}function W(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function Y(e,t,n){function r(r){var o=or[r]||ar;u[r]=o(e[r],t[r],n,r)}if("function"==typeof t&&(t=t.options),G(t,n),q(t,n),W(t),!t._base&&(t.extends&&(e=Y(e,t.extends,n)),t.mixins))for(var o=0,i=t.mixins.length;o<i;o++)e=Y(e,t.mixins[o],n);var a,u={};for(a in e)r(a);for(a in t)g(e,a)||r(a);return u}function K(e,t,n,r){if("string"==typeof n){var o=e[t];if(g(o,n))return o[n];var i=Rn(n);if(g(o,i))return o[i];var a=Dn(i);return g(o,a)?o[a]:o[n]||o[i]||o[a]}}function _(e,t,n,r){var o=t[e],i=!g(n,e),a=n[e],u=ne(Boolean,o.type);if(u>-1)if(i&&!g(o,"default"))a=!1;else if(""===a||a===Xn(e)){var c=ne(String,o.type);(c<0||u<c)&&(a=!0)}if(void 0===a){a=$(r,o,e);var s=nr;N(!0),B(a),N(s)}return a}function $(e,t,n){if(g(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==ee(t.type)?r.call(e):r}}function ee(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function te(e,t){return ee(e)===ee(t)}function ne(e,t){if(!Array.isArray(t))return te(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(te(t[n],e))return n;return-1}function re(e,t,n){k();try{if(t)for(var r=t;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{if(!1===o[i].call(r,e,t,n))return}catch(e){ie(e,r,"errorCaptured hook")}}ie(e,t,n)}finally{z()}}function oe(e,t,n,r,o){var i;try{(i=n?e.apply(t,n):e.call(t))&&!i._isVue&&A(i)&&!i._handled&&(i.catch(function(e){return re(e,r,o+" (Promise/async)")}),i._handled=!0)}catch(e){re(e,r,o)}return i}function ie(e,t,n){if(zn.errorHandler)try{return zn.errorHandler.call(null,e,t,n)}catch(t){t!==e&&ae(t,null,"config.errorHandler")}ae(e,t,n)}function ae(e,t,n){if(!Mn&&!Tn||"undefined"==typeof console)throw e;console.error(e)}function ue(){cr=!1;var e=ur.slice(0);ur.length=0;for(var t=0;t<e.length;t++)e[t]()}function ce(e,t){var n;if(ur.push(function(){if(e)try{e.call(t)}catch(e){re(e,t,"nextTick")}else n&&n(t)}),cr||(cr=!0,ir()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}function se(e){fe(e,lr),lr.clear()}function fe(e,t){var n,r,o=Array.isArray(e);if(!(!o&&!c(e)||Object.isFrozen(e)||e instanceof Yn)){if(e.__ob__){var i=e.__ob__.dep.id;if(t.has(i))return;t.add(i)}if(o)for(n=e.length;n--;)fe(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)fe(e[r[n]],t)}}function de(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return oe(r,null,arguments,t,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)oe(o[i],null,e,t,"v-on handler")}return n.fns=e,n}function Ae(e,t,n,o,a,u){var c,s,f,d;for(c in e)s=e[c],f=t[c],d=pr(c),r(s)||(r(f)?(r(s.fns)&&(s=e[c]=de(s,u)),i(d.once)&&(s=e[c]=a(d.name,s,d.capture)),n(d.name,s,d.capture,d.passive,d.params)):s!==f&&(f.fns=s,e[c]=f));for(c in t)r(e[c])&&(d=pr(c),o(d.name,t[c],d.capture))}function le(e,t,n){var i=t.options.props;if(!r(i)){var a={},u=e.attrs,c=e.props;if(o(u)||o(c))for(var s in i){var f=Xn(s);pe(a,c,s,f,!0)||pe(a,u,s,f,!1)}return a}}function pe(e,t,n,r,i){if(o(t)){if(g(t,n))return e[n]=t[n],i||delete t[n],!0;if(g(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ve(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function he(e){return u(e)?[E(e)]:Array.isArray(e)?ye(e):void 0}function ge(e){return o(e)&&o(e.text)&&a(e.isComment)}function ye(e,t){var n,a,c,s,f=[];for(n=0;n<e.length;n++)r(a=e[n])||"boolean"==typeof a||(c=f.length-1,s=f[c],Array.isArray(a)?a.length>0&&(a=ye(a,(t||"")+"_"+n),ge(a[0])&&ge(s)&&(f[c]=E(s.text+a[0].text),a.shift()),f.push.apply(f,a)):u(a)?ge(s)?f[c]=E(s.text+a):""!==a&&f.push(E(a)):ge(a)&&ge(s)?f[c]=E(s.text+a.text):(i(e._isVList)&&o(a.tag)&&r(a.key)&&o(t)&&(a.key="__vlist"+t+"_"+n+"__"),f.push(a)));return f}function be(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function me(e){var t=Oe(e.$options.inject,e);t&&(N(!1),Object.keys(t).forEach(function(n){H(e,n,t[n])}),N(!0))}function Oe(e,t){if(e){for(var n=Object.create(null),r=Cn?Reflect.ownKeys(e):Object.keys(e),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){for(var a=e[i].from,u=t;u;){if(u._provided&&g(u._provided,a)){n[i]=u._provided[a];break}u=u.$parent}if(!u&&"default"in e[i]){var c=e[i].default;n[i]="function"==typeof c?c.call(t):c}}}return n}}function Re(e,t){if(!e||!e.length)return{};for(var n={},r=0,o=e.length;r<o;r++){var i=e[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==t&&i.fnContext!==t||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n.page||(n.page=[])).push(i):(n.default||(n.default=[])).push(i);else{var u=a.slot,c=n[u]||(n[u]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var s in n)n[s].every(De)&&delete n[s];return n}function De(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Pe(e,t,n){var r,o=Object.keys(t).length>0,i=e?!!e.$stable:!o,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(i&&n&&n!==hn&&a===n.$key&&!o&&!n.$hasNormal)return n;for(var u in r={},e)e[u]&&"$"!==u[0]&&(r[u]=Xe(t,u,e[u]))}else r={};for(var c in t)c in r||(r[c]=Ie(t,c));return e&&Object.isExtensible(e)&&(e._normalized=r),j(r,"$stable",i),j(r,"$key",a),j(r,"$hasNormal",o),r}function Xe(t,n,r){var o=function(){var t=arguments.length?r.apply(null,arguments):r({});return(t=t&&"object"===(void 0===t?"undefined":e(t))&&!Array.isArray(t)?[t]:he(t))&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Ie(e,t){return function(){return e[t]}}function je(e,t){var n,r,i,a,u;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(Cn&&e[Symbol.iterator]){n=[];for(var s=e[Symbol.iterator](),f=s.next();!f.done;)n.push(t(f.value,n.length)),f=s.next()}else for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)u=a[r],n[r]=t(e[u],u,r);return o(n)||(n=[]),n._isVList=!0,n}function we(e,t,n,r){var o,i=this.$scopedSlots[e];i?(n=n||{},r&&(n=m(m({},r),n)),o=i(n)||t):o=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function xe(e){return K(this.$options,"filters",e,!0)||wn}function ke(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function ze(e,t,n,r,o){var i=zn.keyCodes[t]||n;return o&&r&&!zn.keyCodes[t]?ke(o,r):i?ke(i,e):r?Xn(r)!==t:void 0}function Ee(e,t,n,r,o){if(n&&c(n)){var i;Array.isArray(n)&&(n=O(n));for(var a in n)!function(a){if("class"===a||"style"===a||bn(a))i=e;else{var u=e.attrs&&e.attrs.type;i=r||zn.mustUseProp(t,u,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=Rn(a),s=Xn(a);c in i||s in i||(i[a]=n[a],!o)||((e.on||(e.on={}))["update:"+a]=function(e){n[a]=e})}(a)}return e}function Se(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Me(r,"__static__"+e,!1),r)}function Ne(e,t,n){return Me(e,"__once__"+t+(n?"_"+n:""),!0),e}function Me(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Te(e[r],t+"_"+r,n);else Te(e,t,n)}function Te(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Be(e,t){if(t&&s(t)){var n=e.on=e.on?m({},e.on):{};for(var r in t){var o=n[r],i=t[r];n[r]=o?[].concat(o,i):i}}return e}function He(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var i=e[o];Array.isArray(i)?He(i,t,n):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn)}return r&&(t.$key=r),t}function Ue(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Fe(e,t){return"string"==typeof e?t+e:e}function Ze(e){e._o=Ne,e._n=p,e._s=l,e._l=je,e._t=we,e._q=D,e._i=P,e._m=Se,e._f=xe,e._k=ze,e._b=Ee,e._v=E,e._e=_n,e._u=He,e._g=Be,e._d=Ue,e._p=Fe}function Le(e,t,n,r,o){var a,u=this,c=o.options;g(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var s=i(c._compiled),f=!s;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||hn,this.injections=Oe(c.inject,r),this.slots=function(){return u.$slots||Pe(e.scopedSlots,u.$slots=Re(n,r)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(e.scopedSlots,this.slots())}}),s&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Pe(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,n,o){var i=Ke(a,e,t,n,o,f);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=r),i}:this._c=function(e,t,n,r){return Ke(a,e,t,n,r,f)}}function Je(e,t,n,r,i){var a=e.options,u={},c=a.props;if(o(c))for(var s in c)u[s]=_(s,c,t||hn);else o(n.attrs)&&Qe(u,n.attrs),o(n.props)&&Qe(u,n.props);var f=new Le(n,u,i,r,e),d=a.render.call(null,f._c,f);if(d instanceof Yn)return Ve(d,n,f.parent,a,f);if(Array.isArray(d)){for(var A=he(d)||[],l=new Array(A.length),p=0;p<A.length;p++)l[p]=Ve(A[p],n,f.parent,a,f);return l}}function Ve(e,t,n,r,o){var i=S(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Qe(e,t){for(var n in t)e[Rn(n)]=t[n]}function Ce(e,t,n,a,u){if(!r(e)){var s=n.$options._base;if(c(e)&&(e=s.extend(e)),"function"==typeof e){var f;if(r(e.cid)&&(f=e,void 0===(e=ot(f,s))))return rt(f,t,n,a,u);t=t||{},Ht(e),o(t.model)&&Ye(e.options,t);var d=le(t,e,u);if(i(e.options.functional))return Je(e,d,t,n,a);var A=t.on;if(t.on=t.nativeOn,i(e.options.abstract)){var l=t.slot;t={},l&&(t.slot=l)}qe(t);var p=e.options.name||u;return new Yn("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:A,tag:u,children:a},f)}}}function Ge(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function qe(e){for(var t=e.hook||(e.hook={}),n=0;n<gr.length;n++){var r=gr[n],o=t[r],i=hr[r];o===i||o&&o._merged||(t[r]=o?We(i,o):i)}}function We(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function Ye(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),a=i[r],u=t.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(u):a!==u)&&(i[r]=[u].concat(a)):i[r]=u}function Ke(e,t,n,r,o,a){return(Array.isArray(n)||u(n))&&(o=r,r=n,n=void 0),i(a)&&(o=br),_e(e,t,n,r,o)}function _e(e,t,n,r,i){if(o(n)&&o(n.__ob__))return _n();if(o(n)&&o(n.is)&&(t=n.is),!t)return _n();var a,u,c;return Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===br?r=he(r):i===yr&&(r=ve(r)),"string"==typeof t?(u=e.$vnode&&e.$vnode.ns||zn.getTagNamespace(t),a=zn.isReservedTag(t)?new Yn(zn.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(c=K(e.$options,"components",t))?new Yn(t,n,r,void 0,void 0,e):Ce(c,n,e,r,t)):a=Ce(t,n,e,r),Array.isArray(a)?a:o(a)?(o(u)&&$e(a,u),o(n)&&et(n),a):_n()}function $e(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var a=0,u=e.children.length;a<u;a++){var c=e.children[a];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&$e(c,t,n)}}function et(e){c(e.style)&&se(e.style),c(e.class)&&se(e.class)}function tt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Re(t._renderChildren,r),e.$scopedSlots=hn,e._c=function(t,n,r,o){return Ke(e,t,n,r,o,!1)},e.$createElement=function(t,n,r,o){return Ke(e,t,n,r,o,!0)};var o=n&&n.data;H(e,"$attrs",o&&o.attrs||hn,null,!0),H(e,"$listeners",t._parentListeners||hn,null,!0)}function nt(e,t){return(e.__esModule||Cn&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function rt(e,t,n,r,o){var i=_n();return i.asyncFactory=e,i.asyncMeta={data:t,context:n,children:r,tag:o},i}function ot(e,t){if(i(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=mr;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),i(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var a=e.owners=[n],u=!0,s=null,f=null;n.$on("hook:destroyed",function(){return h(a,n)});var d=function(e){for(var t=0,n=a.length;t<n;t++)a[t].$forceUpdate();e&&(a.length=0,null!==s&&(clearTimeout(s),s=null),null!==f&&(clearTimeout(f),f=null))},l=X(function(n){e.resolved=nt(n,t),u?a.length=0:d(!0)}),p=X(function(t){o(e.errorComp)&&(e.error=!0,d(!0))}),v=e(l,p);return c(v)&&(A(v)?r(e.resolved)&&v.then(l,p):A(v.component)&&(v.component.then(l,p),o(v.error)&&(e.errorComp=nt(v.error,t)),o(v.loading)&&(e.loadingComp=nt(v.loading,t),0===v.delay?e.loading=!0:s=setTimeout(function(){s=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,d(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(e.resolved)&&p(null)},v.timeout)))),u=!1,e.loading?e.loadingComp:e.resolved}}function it(e){return e.isComment&&e.asyncFactory}function at(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||it(n)))return n}}function ut(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&dt(e,t)}function ct(e,t){vr.$on(e,t)}function st(e,t){vr.$off(e,t)}function ft(e,t){var n=vr;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function dt(e,t,n){vr=e,Ae(t,n||{},ct,st,ft,e),vr=void 0}function At(e){var t=Or;return Or=e,function(){Or=t}}function lt(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function pt(e,t,n,r,o){var i=r.data.scopedSlots,a=e.$scopedSlots,u=!!(i&&!i.$stable||a!==hn&&!a.$stable||i&&e.$scopedSlots.$key!==i.$key),c=!!(o||e.$options._renderChildren||u);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=o,e.$attrs=r.data.attrs||hn,e.$listeners=n||hn,t&&e.$options.props){N(!1);for(var s=e._props,f=e.$options._propKeys||[],d=0;d<f.length;d++){var A=f[d],l=e.$options.props;s[A]=_(A,l,t,e)}N(!0),e.$options.propsData=t}n=n||hn;var p=e.$options._parentListeners;e.$options._parentListeners=n,dt(e,n,p),c&&(e.$slots=Re(o,r.context),e.$forceUpdate())}function vt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function ht(e,t){if(t){if(e._directInactive=!1,vt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)ht(e.$children[n]);yt(e,"activated")}}function gt(e,t){if(!(t&&(e._directInactive=!0,vt(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)gt(e.$children[n]);yt(e,"deactivated")}}function yt(e,t){k();var n=e.$options[t],r=t+" hook";if(n)for(var o=0,i=n.length;o<i;o++)oe(n[o],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),z()}function bt(){jr=Rr.length=Dr.length=0,Pr={},Xr=Ir=!1}function mt(){var e,t;for(wr(),Ir=!0,Rr.sort(function(e,t){return e.id-t.id}),jr=0;jr<Rr.length;jr++)(e=Rr[jr]).before&&e.before(),t=e.id,Pr[t]=null,e.run();var n=Dr.slice(),r=Rr.slice();bt(),Dt(n),Ot(r),Qn&&zn.devtools&&Qn.emit("flush")}function Ot(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&yt(r,"updated")}}function Rt(e){e._inactive=!1,Dr.push(e)}function Dt(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,ht(e[t],!0)}function Pt(e){var t=e.id;if(null==Pr[t]){if(Pr[t]=!0,Ir){for(var n=Rr.length-1;n>jr&&Rr[n].id>e.id;)n--;Rr.splice(n+1,0,e)}else Rr.push(e);Xr||(Xr=!0,ce(mt))}}function Xt(e,t,n){Er.get=function(){return this[t][n]},Er.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Er)}function It(e){e._watchers=[];var t=e.$options;t.props&&jt(e,t.props),t.methods&&Nt(e,t.methods),t.data?wt(e):B(e._data={},!0),t.computed&&kt(e,t.computed),t.watch&&t.watch!==Zn&&Mt(e,t.watch)}function jt(e,t){var n=e.$options.propsData||{},r=e._props={},o=e.$options._propKeys=[];!e.$parent||N(!1);for(var i in t)!function(i){o.push(i);var a=_(i,t,n,e);H(r,i,a),i in e||Xt(e,"_props",i)}(i);N(!0)}function wt(e){var t=e.$options.data;s(t=e._data="function"==typeof t?xt(t,e):t||{})||(t={});for(var n=Object.keys(t),r=e.$options.props,o=(e.$options.methods,n.length);o--;){var i=n[o];r&&g(r,i)||I(i)||Xt(e,"_data",i)}B(t,!0)}function xt(e,t){k();try{return e.call(t,t)}catch(e){return re(e,t,"data()"),{}}finally{z()}}function kt(e,t){var n=e._computedWatchers=Object.create(null),r=Vn();for(var o in t){var i=t[o],a="function"==typeof i?i:i.get;r||(n[o]=new zr(e,a||R,R,Sr)),o in e||zt(e,o,i)}}function zt(e,t,n){var r=!Vn();"function"==typeof n?(Er.get=r?Et(t):St(n),Er.set=R):(Er.get=n.get?r&&!1!==n.cache?Et(t):St(n.get):R,Er.set=n.set||R),Object.defineProperty(e,t,Er)}function Et(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Wn.SharedObject.target&&t.depend(),t.value}}function St(e){return function(){return e.call(this,this)}}function Nt(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?R:In(t[n],e)}function Mt(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Tt(e,n,r[o]);else Tt(e,n,r)}}function Tt(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Bt(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ht(e){var t=e.options;if(e.super){var n=Ht(e.super);if(n!==e.superOptions){e.superOptions=n;var r=Ut(e);r&&m(e.extendOptions,r),(t=e.options=Y(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Ut(e){var t,n=e.options,r=e.sealedOptions;for(var o in n)n[o]!==r[o]&&(t||(t={}),t[o]=n[o]);return t}function Ft(e){this._init(e)}function Zt(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=b(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function Lt(e){e.mixin=function(e){return this.options=Y(this.options,e),this}}function Jt(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,o=e._Ctor||(e._Ctor={});if(o[r])return o[r];var i=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=Y(n.options,e),a.super=n,a.options.props&&Vt(a),a.options.computed&&Qt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,xn.forEach(function(e){a[e]=n[e]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=m({},a.options),o[r]=a,a}}function Vt(e){var t=e.options.props;for(var n in t)Xt(e.prototype,"_props",n)}function Qt(e){var t=e.options.computed;for(var n in t)zt(e.prototype,n,t[n])}function Ct(e){xn.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function Gt(e){return e&&(e.Ctor.options.name||e.tag)}function qt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!f(e)&&e.test(t)}function Wt(e,t){var n=e.cache,r=e.keys,o=e._vnode;for(var i in n){var a=n[i];if(a){var u=Gt(a.componentOptions);u&&!t(u)&&Yt(n,i,r,o)}}}function Yt(e,t,n,r){var o=e[t];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),e[t]=null,h(n,t)}function Kt(e,t){var n={};return _t(e,t),$t(e,t,"",n),n}function _t(e,t){if(e!==t){var n=tn(e),r=tn(t);if(n==Hr&&r==Hr){if(Object.keys(e).length>=Object.keys(t).length)for(var o in t){var i=e[o];void 0===i?e[o]=null:_t(i,t[o])}}else n==Br&&r==Br&&e.length>=t.length&&t.forEach(function(t,n){_t(e[n],t)})}}function $t(e,t,n,r){if(e!==t){var o=tn(e),i=tn(t);if(o==Hr)if(i!=Hr||Object.keys(e).length<Object.keys(t).length)en(r,n,e);else{for(var a in e)!function(o){var i=e[o],a=t[o],u=tn(i),c=tn(a);if(u!=Br&&u!=Hr)i!=t[o]&&en(r,(""==n?"":n+".")+o,i);else if(u==Br)c!=Br?en(r,(""==n?"":n+".")+o,i):i.length<a.length?en(r,(""==n?"":n+".")+o,i):i.forEach(function(e,t){$t(e,a[t],(""==n?"":n+".")+o+"["+t+"]",r)});else if(u==Hr)if(c!=Hr||Object.keys(i).length<Object.keys(a).length)en(r,(""==n?"":n+".")+o,i);else for(var s in i)$t(i[s],a[s],(""==n?"":n+".")+o+"."+s,r)}(a)}else o==Br?i!=Br?en(r,n,e):e.length<t.length?en(r,n,e):e.forEach(function(e,o){$t(e,t[o],n+"["+o+"]",r)}):en(r,n,e)}}function en(e,t,n){e[t]=n}function tn(e){return Object.prototype.toString.call(e)}function nn(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"mp-weixin",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var n=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function rn(e){return Rr.find(function(t){return e._watcher===t})}function on(e,t){if(!e.__next_tick_pending&&!rn(e)){if(Object({VUE_APP_PLATFORM:"mp-weixin",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=e.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+e._uid+"]:nextVueTick")}return ce(t,e)}if(Object({VUE_APP_PLATFORM:"mp-weixin",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=e.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+e._uid+"]:nextMPTick")}var o;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(t)try{t.call(e)}catch(t){re(t,e,"nextTick")}else o&&o(e)}),!t&&"undefined"!=typeof Promise)return new Promise(function(e){o=e})}function an(e){var t=Object.create(null);return[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{})).reduce(function(t,n){return t[n]=e[n],t},t),Object.assign(t,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(t.name=e.name,t.value=e.value),JSON.parse(JSON.stringify(t))}function un(){}function cn(e,t,n){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=un),e.$options.render||(e.$options.render=un),"mp-toutiao"!==e.mpHost&&yt(e,"beforeMount");return new zr(e,function(){e._update(e._render(),n)},R,{before:function(){e._isMounted&&!e._isDestroyed&&yt(e,"beforeUpdate")}},!0),n=!1,e}function sn(e,t){return o(e)||o(t)?fn(e,dn(t)):""}function fn(e,t){return e?t?e+" "+t:e:t||""}function dn(e){return Array.isArray(e)?An(e):c(e)?ln(e):"string"==typeof e?e:""}function An(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=dn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ln(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function pn(e){return Array.isArray(e)?O(e):"string"==typeof e?Ur(e):e}function vn(e,t){var n=t.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?e[r]:vn(e[r],n.slice(1).join("."))}var hn=Object.freeze({}),gn=Object.prototype.toString;v("slot,component",!0);var yn,bn=v("key,ref,slot,slot-scope,is"),mn=Object.prototype.hasOwnProperty,On=/-(\w)/g,Rn=y(function(e){return e.replace(On,function(e,t){return t?t.toUpperCase():""})}),Dn=y(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Pn=/\B([A-Z])/g,Xn=y(function(e){return e.replace(Pn,"-$1").toLowerCase()}),In=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n},jn=function(e,t,n){return!1},wn=function(e){return e},xn=["component","directive","filter"],kn=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],zn={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:jn,isReservedAttr:jn,isUnknownElement:jn,getTagNamespace:R,parsePlatformTagName:wn,mustUseProp:jn,async:!0,_lifecycleHooks:kn},En=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,Sn=new RegExp("[^"+En.source+".$_\\d]"),Nn="__proto__"in{},Mn="undefined"!=typeof window,Tn="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Bn=Tn&&WXEnvironment.platform.toLowerCase(),Hn=Mn&&window.navigator.userAgent.toLowerCase(),Un=Hn&&/msie|trident/.test(Hn),Fn=(Hn&&Hn.indexOf("msie 9.0"),Hn&&Hn.indexOf("edge/"),Hn&&Hn.indexOf("android"),Hn&&/iphone|ipad|ipod|ios/.test(Hn)||"ios"===Bn),Zn=(Hn&&/chrome\/\d+/.test(Hn),Hn&&/phantomjs/.test(Hn),Hn&&Hn.match(/firefox\/(\d+)/),{}.watch);if(Mn)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){}}),window.addEventListener("test-passive",null,Ln)}catch(e){}var Jn,Vn=function(){return void 0===yn&&(yn=!Mn&&!Tn&&void 0!==t&&t.process&&"server"===t.process.env.VUE_ENV),yn},Qn=Mn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Cn="undefined"!=typeof Symbol&&x(Symbol)&&"undefined"!=typeof Reflect&&x(Reflect.ownKeys);Jn="undefined"!=typeof Set&&x(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Gn=R,qn=0,Wn=function(){this.id=qn++,this.subs=[]};Wn.prototype.addSub=function(e){this.subs.push(e)},Wn.prototype.removeSub=function(e){h(this.subs,e)},Wn.prototype.depend=function(){Wn.SharedObject.target&&Wn.SharedObject.target.addDep(this)},Wn.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},Wn.SharedObject="undefined"!=typeof SharedObject?SharedObject:{},Wn.SharedObject.target=null,Wn.SharedObject.targetStack=[];var Yn=function(e,t,n,r,o,i,a,u){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Kn={child:{configurable:!0}};Kn.child.get=function(){return this.componentInstance},Object.defineProperties(Yn.prototype,Kn);var _n=function(e){void 0===e&&(e="");var t=new Yn;return t.text=e,t.isComment=!0,t},$n=Array.prototype,er=Object.create($n);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=$n[e];j(er,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var tr=Object.getOwnPropertyNames(er),nr=!0,rr=function(e){this.value=e,this.dep=new Wn,this.vmCount=0,j(e,"__ob__",this),Array.isArray(e)?(Nn?e.push!==e.__proto__.push?T(e,er,tr):M(e,er):T(e,er,tr),this.observeArray(e)):this.walk(e)};rr.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)H(e,t[n])},rr.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)B(e[t])};var or=zn.optionMergeStrategies;or.data=function(e,t,n){return n?J(e,t,n):t&&"function"!=typeof t?e:J(e,t)},kn.forEach(function(e){or[e]=V}),xn.forEach(function(e){or[e+"s"]=C}),or.watch=function(e,t,n,r){if(e===Zn&&(e=void 0),t===Zn&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var i in m(o,e),t){var a=o[i],u=t[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(u):Array.isArray(u)?u:[u]}return o},or.props=or.methods=or.inject=or.computed=function(e,t,n,r){if(!e)return t;var o=Object.create(null);return m(o,e),t&&m(o,t),o},or.provide=J;var ir,ar=function(e,t){return void 0===t?e:t},ur=[],cr=!1;if("undefined"!=typeof Promise&&x(Promise)){var sr=Promise.resolve();ir=function(){sr.then(ue),Fn&&setTimeout(R)}}else if(Un||"undefined"==typeof MutationObserver||!x(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ir="undefined"!=typeof setImmediate&&x(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var fr=1,dr=new MutationObserver(ue),Ar=document.createTextNode(String(fr));dr.observe(Ar,{characterData:!0}),ir=function(){fr=(fr+1)%2,Ar.data=String(fr)}}var lr=new Jn,pr=y(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}});Ze(Le.prototype);var vr,hr={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;hr.prepatch(n,n)}else(e.componentInstance=Ge(e,Or)).$mount(t?e.elm:void 0,t)},prepatch:function(e,t){var n=t.componentOptions;pt(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,yt(n,"mounted")),e.data.keepAlive&&(t._isMounted?Rt(n):ht(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?gt(t,!0):t.$destroy())}},gr=Object.keys(hr),yr=1,br=2,mr=null,Or=null,Rr=[],Dr=[],Pr={},Xr=!1,Ir=!1,jr=0,wr=Date.now;if(Mn&&!Un){var xr=window.performance;xr&&"function"==typeof xr.now&&wr()>document.createEvent("Event").timeStamp&&(wr=function(){return xr.now()})}var kr=0,zr=function(e,t,n,r,o){this.vm=e,o&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++kr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Jn,this.newDepIds=new Jn,this.expression="","function"==typeof t?this.getter=t:(this.getter=w(t),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};zr.prototype.get=function(){var e;k(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;re(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&se(e),z(),this.cleanupDeps()}return e},zr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},zr.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},zr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Pt(this)},zr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){re(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},zr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},zr.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},zr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var Er={enumerable:!0,configurable:!0,get:R,set:R},Sr={lazy:!0},Nr=0;(function(e){e.prototype._init=function(e){var t=this;t._uid=Nr++,t._isVue=!0,e&&e._isComponent?Bt(t,e):t.$options=Y(Ht(t.constructor),e||{},t),t._renderProxy=t,t._self=t,lt(t),ut(t),tt(t),yt(t,"beforeCreate"),"mp-toutiao"!==t.mpHost&&me(t),It(t),"mp-toutiao"!==t.mpHost&&be(t),"mp-toutiao"!==t.mpHost&&yt(t,"created"),t.$options.el&&t.$mount(t.$options.el)}})(Ft),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=U,e.prototype.$delete=F,e.prototype.$watch=function(e,t,n){var r=this;if(s(t))return Tt(r,e,t,n);(n=n||{}).user=!0;var o=new zr(r,e,t,n);if(n.immediate)try{t.call(r,o.value)}catch(e){re(e,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}(Ft),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var o=0,i=e.length;o<i;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var i,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var u=a.length;u--;)if((i=a[u])===t||i.fn===t){a.splice(u,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?b(n):n;for(var r=b(arguments,1),o='event handler for "'+e+'"',i=0,a=n.length;i<a;i++)oe(n[i],t,r,t,o)}return t}}(Ft),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,o=n._vnode,i=At(n);n._vnode=e,n.$el=o?n.__patch__(o,e):n.__patch__(n.$el,e,t,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){yt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),yt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Ft),function(e){Ze(e.prototype),e.prototype.$nextTick=function(e){return ce(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&(t.$scopedSlots=Pe(o.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=o;try{mr=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){re(n,t,"render"),e=t._vnode}finally{mr=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof Yn||(e=_n()),e.parent=o,e}}(Ft);var Mr=[String,RegExp,Array],Tr={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Mr,exclude:Mr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Yt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){Wt(e,function(e){return qt(t,e)})}),this.$watch("exclude",function(t){Wt(e,function(e){return!qt(t,e)})})},render:function(){var e=this.$slots.default,t=at(e),n=t&&t.componentOptions;if(n){var r=Gt(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!qt(i,r))||a&&r&&qt(a,r))return t;var u=this,c=u.cache,s=u.keys,f=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[f]?(t.componentInstance=c[f].componentInstance,h(s,f),s.push(f)):(c[f]=t,s.push(f),this.max&&s.length>parseInt(this.max)&&Yt(c,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};(function(e){var t={get:function(){return zn}};Object.defineProperty(e,"config",t),e.util={warn:Gn,extend:m,mergeOptions:Y,defineReactive:H},e.set=U,e.delete=F,e.nextTick=ce,e.observable=function(e){return B(e),e},e.options=Object.create(null),xn.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,m(e.options.components,Tr),Zt(e),Lt(e),Jt(e),Ct(e)})(Ft),Object.defineProperty(Ft.prototype,"$isServer",{get:Vn}),Object.defineProperty(Ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ft,"FunctionalRenderContext",{value:Le}),Ft.version="2.6.10";var Br="[object Array]",Hr="[object Object]",Ur=y(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),Fr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"],Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];Ft.prototype.__patch__=function(e,t){var n=this;if(null!==t&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=an(this)}catch(e){console.error(e)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(e){i[e]=r.data[e]});var a=Kt(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"mp-weixin",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,nn(n)})):nn(this)}},Ft.prototype.$mount=function(e,t){return cn(this,0,t)},function(e){var t=e.extend;e.extend=function(e){var n=(e=e||{}).methods;return n&&Object.keys(n).forEach(function(t){-1!==Zr.indexOf(t)&&(e[t]=n[t],delete n[t])}),t.call(this,e)};var n=e.config.optionMergeStrategies,r=n.created;Zr.forEach(function(e){n[e]=r}),e.prototype.__lifecycle_hooks__=Zr}(Ft),function(e){e.config.errorHandler=function(e){console.error(e)};var t=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope.triggerEvent(e,{__args__:b(arguments,1)}),t.apply(this,arguments)},e.prototype.$nextTick=function(e){return on(this,e)},Fr.forEach(function(t){e.prototype[t]=function(e){if(this.$scope)return this.$scope[t](e)}}),e.prototype.__init_provide=be,e.prototype.__init_injections=me,e.prototype.__call_hook=function(e,t){var n=this;k();var r,o=n.$options[e],i=e+" hook";if(o)for(var a=0,u=o.length;a<u;a++)r=oe(o[a],n,t?[t]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+e),z(),r},e.prototype.__set_model=function(e,t,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),e||(e=this),e[t]=n},e.prototype.__set_sync=function(e,t,n){e||(e=this),e[t]=n},e.prototype.__get_orig=function(e){return s(e)&&e.$orig||e},e.prototype.__get_value=function(e,t){return vn(t||this,e)},e.prototype.__get_class=function(e,t){return sn(t,e)},e.prototype.__get_style=function(e,t){if(!e&&!t)return"";var n=pn(e),r=t?m(t,n):n;return Object.keys(r).map(function(e){return Xn(e)+":"+r[e]}).join(";")},e.prototype.__map=function(e,t){var n,r,o,i,a;if(Array.isArray(e)){for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);return n}if(c(e)){for(i=Object.keys(e),n=Object.create(null),r=0,o=i.length;r<o;r++)n[a=i[r]]=t(e[a],a,r);return n}return[]}}(Ft),n.default=Ft}.call(this,r("c8ba"))},"6b0d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAq0AAACkCAMAAACKEud4AAAAgVBMVEUAAACur+aSlOeur+akpueSlOegoueur+aSlOegoueSlOeSlOeSlOeur+aur+aSlOegouqcnumeoOqqq+yur+a8pNjVwqmWmOioquyanOmUlueYmeibnemen+qrrOa5o9nPv66lm+CyoNyVluShmuKqpdGvqMyjpeazq8jDtrnFt7jYzlYQAAAAD3RSTlMA3dyVTkcC95UD8KKIUjwM9XFrAAAD5klEQVR42uzd2XLiMBRFUUHmnm4sg+0MDk7SkOH/P7Bpuh0MKWyGGHTMXs963KW6klXgZq5+nvQuBqs8GJQky0zbt/730yv34bQ3mKLWjiiSRYXp65+5f85PBvVeDErekkVv1gU/3MzJoMG9QckkWTSxTricjQHTHhkEuuS5SKqKZ+uGM+fOe4MG3qBlnFSNrSP65+4XW2v3vCZzr9YZZ41T60NqkDMuyjGgMzvr1KXrNcR6ZxD0PHkvkuJ90pWZdabvLupjvTUgFK621ciAcLiVpT68cM+KsDgDVFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdFArdLin0XD09MhPskCAG86MfhsQOjf879GAwLlhid0VoZvXOmJ2ReCmtTILQESl1icDglapdWRA0NxwzoCgsbdCB3MrdHAnAB3ct0IH37Kgg3cC0NHiG6w08o2itFybR/xFJ2q1+b419WtJ52vJFfWctSXya4nma/nnQ9Rps9bcryWfr80NWI29FUraqpW5FV+txVo3vRPw3AmgibP23eV+AWFiO872IPULcr7xYivO9uHeV90YsLl91Xrjq+4MAfJZXC/z9td1ll3bIbC3ouTjZr5c5+0AmFtRyuJmWbkuswNovdY08pvh9uAwqNUs9bvgk8H+MAmYRX4XfI7dI05Zlvtd8NTlENJoqdGADsXsrVh2H1eFdN/I3IpPFg9WAeFOAJ9UYz2mWiHoWCcB6Lk92lMWtPgs3k7mrX3Uigofb89b66gVFVm8vcxaR634QK1QwiQAIZyyAGrF8aFW6KBW6KBW6KBW6KBW6KBW6KBW6KBW6KBW6PjTzr2kOA5DARRdgiNPhBLvf51NN7inRVzgyi3OWcNFCH2eWulQKx1qpUOtdKiVDrXSoVY61EqHWulQKx1qpUOtdKiVDrXSoVY61EqHWulQKx1qpUOtdKiVD/B8rXWML6mVHzfX+EutfL41hlpJmMdQKw1zDLXSMIdaqTjUSsUaaiVijjdrfVy27+P13OCydVOtpzE3uOY5bqv1NKyvXPO6sdbT/trggnVrrSe50qlVrlxx/Eytu70r7xs313oaG0TW1sfDQRaVfavFlVKtDztXCuetjgXI3GXZClB5J/DfvsHnvsFSK9+17q71tMHbDmsrGVOtdExnAnTMw3krHctdFh1zeSdAx78Zg95g8Zt430qHvwN0+JdFhz+vdJgnQIdZLXSYg0WHGYN0mN9Kh1rpUCsdaqVDrXSolQ610qFWOtRKh1rpUCsdaqVDrXSolQ610vEHdAn0iyWf4SgAAAAASUVORK5CYII="},"6ba3":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAb1BMVEUAAADLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v/////nHXS0tLj4+P5+fn/oXz/9/Tx8fHt7e3d3d3/zLj/ro7/39L/n3n/nHb/3tLZ345vAAAAFXRSTlMAuZX55D2Kp3h3IR+miQbz16U8Cgjg9g0sAAAAzElEQVQoz32S6RKDIAyE41XP3kVQERD7/s/YgVib1uL3C7JDZkkW3tRFlCbnS1RU8E3WcCE7xjopeJNR5chHtjLywyqcYtUxioofixQL9oOIUTkotkH5njeOt0Eba40e8Madlys6mPrW00/oJQeoOSpzuzCjxmsohe+Gb/Cd7ylKiKQ76JagXUVGkPovGSoZV+lSSJjDUsn6UvJP6lHaaxi2sWe+Cn25AshxUM/toCAj4+3JeMNLCa8yHIB7ODaELP+ELV/DRiOapCSiL2UALU4eWgjBAAAAAElFTkSuQmCC"},"6f91":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAADICAYAAAB4WVALAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMkI0MDExMzkzRDUxMUU5QjcwNkY5RTAwNThGMUVBNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMkI0MDExNDkzRDUxMUU5QjcwNkY5RTAwNThGMUVBNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyQjQwMTExOTNENTExRTlCNzA2RjlFMDA1OEYxRUE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyQjQwMTEyOTNENTExRTlCNzA2RjlFMDA1OEYxRUE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BvDZyQAAJpJJREFUeNrsnXvMNNd5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"},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"81ab":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODM3NDI4M0Y5NTMxMUU5QTM5N0Y5NkYxOTE4OEU4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODM3NDI4NEY5NTMxMUU5QTM5N0Y5NkYxOTE4OEU4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4Mzc0MjgxRjk1MzExRTlBMzk3Rjk2RjE5MTg4RThCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4Mzc0MjgyRjk1MzExRTlBMzk3Rjk2RjE5MTg4RThCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+f8UtKAAAArZJREFUeNq0lztoFFEUhu9mZ4JpVtQmcQObKCqoYYMoKIIPsPSRdYX4KBS0Cqa2ErGwsVRJo1gIEQtDQgxWQrQQCzHZxAe+JXF1QQliiqg7uzv+ZzgDs5n7CmwO/DDMnHu+e++ce+ZMIv9oQVjYWigP7YG6oFZoJfQb+glNQU+gIei7KVjCAO2GLkGHoKTF5GrQKHQZKqicmhT3V0DXoBdQjyUwjNfD465zHCtoGnoG9WsmZQM/z3HSJmg79JS3tRHWzfHaVdAWaAzKiMZahuO2yKBXoaxYHsty/DroNqhPNcKBl2t4u/Tc0fv0MUc4fOOiKmkOpB1xdqMbXA9+9MTY10rMJ9fhiN5ONzgvN9+WxXipqkou4uSaOLsOq2ZPQJdXegbX+Q6nzufEelecgmiVzdC5Tc26FRMnTY9zSzkaBAnB0euo+b72KOVoxD6Vh4f9uvvJE6c3uDFwdnVSbF4Vn+sg/Ku+dt77adRWnceD2Yq499mL3ZcB73zwxEPJO19kW2hkm8nr/hc5eDFwdLZi84baCJqy8STwm1816bPCXNUWSJYi6LxtAsm2NKh1a5LiWKdjC52nKCWT10lFlkbt+DrXFlwi6CudBx38oxLg5FxVCj6SMYJfE/SxrrRRpZElzZVCWZpcvQAnE1roOEGH+YsfP+SSB9EslWU1nVFf31mMEPQbtxgxq8Dl1ruy+IedJN1+Hz8WBKaJlOH7l3zgX1NTiVMMeySq/s9V5ZC2mQLpKg1tabAzvnaVO6CJEDIBDejKoaG0Bc9rep8B5tSt7AK3ksthUxw/1jnQPh+EZhoMnOG4C6rGrAjthqYbBJzmeEVTC0rZvBO6oTpKlk03jd/F8aya7T/c926nc0V5sgTYCGdpf3RL63ouQ5BJ7izCf5m9kX+ZFH8sfkAvqdLY/sv8F2AApPXYiQG+kxAAAAAASUVORK5CYII="},"8b22":function(e,t,n){},"8db3":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={appid:"__UNI__2DDE49F"};t.default=r},9e3:function(e,t){e.exports="data:image/png;base64,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"},"921b":function(t,n,r){(function(t){function n(t,n){return!n||"object"!==(void 0===n?"undefined":e(n))&&"function"!=typeof n?o(t):n}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function d(){var e="";if("n"===y()){try{e=plus.runtime.getDCloudId()}catch(t){e=""}return e}try{e=t.getStorageSync(l)}catch(t){e=p}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(l,e)}catch(e){t.setStorageSync(l,p)}}return e}var A=r("8189").version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE",v=function(e){var t=Object.keys(e).sort(),n={},r="";for(var o in t)n[t[o]]=e[t[o]],r+=t[o]+"="+e[t[o]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},h=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.substr(0,t.length-1)},g=function(){return parseInt((new Date).getTime()/1e3)},y=function(){return{"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"}["mp-weixin"]},b=function(){var e="";return"wx"!==y()&&"qq"!==y()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},m=function(){return"n"===y()?plus.runtime.version:""},O=function(){var e="";return"n"===y()&&(e=plus.runtime.channel),e},R=function(e){var n=y(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},D="First__Visit__Time",P="Last__Visit__Time",X=function(){var e=t.getStorageSync(D),n=0;return e?n=e:(n=g(),t.setStorageSync(D,n),t.removeStorageSync(P)),n},I=function(){var e=0;return e=t.getStorageSync(P)||"",t.setStorageSync(P,g()),e},j="__page__residence__time",w=0,x=0,k=function(){return w=g(),"n"===y()&&t.setStorageSync(j,g()),w},z=function(){return x=g(),"n"===y()&&(w=t.getStorageSync(j)),x-w},E="Total__Visit__Count",S=function(){var e=t.getStorageSync(E),n=1;return e&&(n=e,n++),t.setStorageSync(E,n),n},N=function(e){var t={};for(var n in e)t[n]=encodeURIComponent(e[n]);return t},M=0,T=0,B=function(){var e=(new Date).getTime();return M=e,T=0,e},H=function(){var e=(new Date).getTime();return T=e,e},U=function(e){var t=0;return 0!==M&&(t=T-M),t=parseInt(t/1e3),t=t<1?1:t,"app"===e?{residenceTime:t,overtime:t>300}:"page"===e?{residenceTime:t,overtime:t>1800}:{residenceTime:t}},F=function(){var e=getCurrentPages(),t=e[e.length-1].$vm;return"bd"===y()?t.$mp&&t.$mp.page.is:t.$scope&&t.$scope.route||t.$mp&&t.$mp.page.route},Z=function(e){var t=getCurrentPages(),n=t[t.length-1].$vm,r=e._query,o=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return e._query="","bd"===y()?n.$mp&&n.$mp.page.is+o:n.$scope&&n.$scope.route+o||n.$mp&&n.$mp.page.route+o},L=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},J=function(t,n){return t?"string"!=typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!=typeof n&&"object"!==(void 0===n?"undefined":e(n))?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},V=r("2491").default,Q=r("8db3").default||r("8db3"),C=t.getSystemInfoSync(),G=function(){function n(){c(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:d(),ut:y(),mpn:b(),ak:Q.appid,usv:A,v:m(),ch:O(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===C.platform?"a":"i",brand:C.brand||"",md:C.model,sv:C.system.replace(/(Android|iOS)\s/,""),mpsdk:C.SDKVersion||"",mpv:C.version||"",lang:C.language,pr:C.pixelRatio,ww:C.windowWidth,wh:C.windowHeight,sw:C.screenWidth,sh:C.screenHeight}}return f(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(H(),U("app").overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,t){this.__licationHide=!0,H();var n=U();B();var r=Z(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},t)}},{key:"_pageShow",value:function(){var e=Z(this),t=F();if(this._navigationBarTitle.config=V&&V.pages[t]&&V.pages[t].titleNView&&V.pages[t].titleNView.titleText||V&&V.pages[t]&&V.pages[t].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=e);if(H(),this._lastPageRoute=e,U("page").overtime){var n={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(n)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var t=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+t||"",this.statData.t=g(),this.statData.sc=R(e.scene),this.statData.fvts=X(),this.statData.lvts=I(),this.statData.tvc=S(),"n"===y()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var t=e.url,n=e.urlref,r=e.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:t,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(e,t){var n=e.urlref,r=e.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(o,t)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.key,r=void 0===n?"":n,o=t.value,i=void 0===o?"":o,a=this._lastPageRoute,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:r,e_v:"object"===(void 0===i?"undefined":e(i))?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(u)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Q.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=g(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===y()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===y()&&t.setStorageSync("__UNI__STAT__DATA",a),!(z()<10)||n){var u=this._reportingRequestData;"n"===y()&&(u=t.getStorageSync("__UNI__STAT__DATA")),k();var c=[],s=[],f=[];for(var d in u)!function(e){u[e].forEach(function(t){var n=h(t);0===e?c.push(n):3===e?f.push(n):s.push(n)})}(d);c.push.apply(c,s.concat(f));var l={usv:A,t:o,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===y()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==y()||"a"!==this.statData.p?this._sendRequest(l):setTimeout(function(){r._sendRequest(l)},200):this.imageRequest(l)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(e){var t=new Image,n=v(N(e)).options;t.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,n){J(t,n)||("title"!==t?this._sendEventRequest({key:t,value:"object"===(void 0===n?"undefined":e(n))?JSON.stringify(n):n},1):this._navigationBarTitle.report=n)}}]),n}(),q=function(e){function r(){var e;return c(this,r),e=n(this,i(r).call(this)),e.instance=null,"function"==typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(r,G),f(r,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new r),this.instance}}]),f(r,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(e,t){this.self=t,k(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,t){if(!t.$scope&&!t.$mp){var n=getCurrentPages();t.$scope=n[n.length-1]}this.self=t,this._query=e}},{key:"show",value:function(e){this.self=e,L(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,L(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var t="";t=e.message?e.stack:JSON.stringify(e);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:t,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),r}().getInstance(),W=!1,Y={onLaunch:function(e){q.report(e,this)},onReady:function(){q.ready(this)},onLoad:function(e){if(q.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var t=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return q.interceptShare(!1),t.call(this,e)}}},onShow:function(){W=!1,q.show(this)},onHide:function(){W=!0,q.hide(this)},onUnload:function(){W?W=!1:q.hide(this)},onError:function(e){q.error(e)}};!function(){var e=r("66fd");(e.default||e).mixin(Y),t.report=function(e,t){q.sendEvent(e,t)}}()}).call(this,r("543d").default)},"939d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAh1BMVEUAAADFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcWAHvHAAAAALHRSTlMA+QUpCcobEDD066nb1HbmRrRvFgyti39VOeDPu5JbxWlMP++giJghwFFhNIWa1TsAAAQ5SURBVFjD7VnXgqowEF16ka6AdBCw8v/fd5mAiBAk8fLoPLFscpJMOTmDfz/72dcWuJqQyNvj5g2yar8xrtX0pp42xWXD5mlMvrUjmFshIGhjQ2BATNqN+8y2yBzAXeCpUOBxM284Ldi1ezwBMmNtBOyi84+QS24bYLPFGmqjAD9r0ha4YouksG+Oadz3IRL/DXDRAmWjv8+A7KDHwylPbL2EF5qdH76I3XlcLhEE8CGmZ51pxmZSBjWZ5u6lBORmbgxdUO12yvHtzXGKWPbL7KiAdUiK+SGQaTvjKAPl8bIHzqACVtsZE7rk28WYrLbG4TpA8lBRG+xsVuW1xWMKP6QB3gMNEyaPTUvyGsG4jIr4OF8HTwjrI+WOAonskAtNZ/H64B1QINlmz8qQ+DXZhkkqT94NqHZKwGVxOzIiyITqiRrfiRjyRrbhtOxZxRcJo2GSBII9d7DCkSXmKSIGqjrYgjzVTzDBWxtlwCjFoSghKYQa4tfcVcIoKmJFCRSQHEsVaXBT5AiiG05naeSMAim8PkNE61NeMA1H6rGEfM+oNkhiLZoo2ziq2JUkUXmoqJg9UpkglqTX6EXrCtrhKfoIEqnPy3bfGBhEu2aFdWp75FWkjiVIdiPYdgBD0w8uSMxmZsBFRPHTloaJFdPgTa35tajA1PtCxZWv84eCEGeRpg4rrZI9MK2Ox+1AFNc5jVTP3tDRa25tyyJML3DMhyIWpXM/yUAFssgSkLiLee+DBwzs7HLuCpafjXwAgIRXlP6yJhTfcfdBep827CE+48BFC8UQToFZKfCvmpm9a2YP6f6ZKcuhD2fSaX8PUfJExeSCEPCuuBHrbqfpLeZeq+F1d7KsvK4zhgmUZjD7ueYFgBek1xFfrtP/XNT3jkaoPMM/g3cynPZavEOTSVsuoZqpomZuDu5KZMD5/EKKeyNOjQGibovNiZkJXbGLOiXGIKdvNcXao7aLtbIXrJIcPty28QHrfm3AdWFU9lrf6jJv51iLdwIvILqY+ZllXjnOo9V1aexyGyGnn0RxhP9OFQ1pIaGTa/tpEAB5UUMO8xh/EgPv6VQ5RLizM90ZcHHwSRC6DUZTBJ345X0G+QGTk0f4jzk5yPxYsGl+WtR61d2HVyyjpOsdutXN1264Zn9ZetXrPci+b5eykc/cHtYslqUFQZt3NHvqGvKDR4up/uGDIIER8pr09/pavd6eJ5cdx2JXGz1jXUw/Dx8aItWXo3UL4ldjSiTg7kB5RFt47JgnvVQf3MBzlyHANeHpLslwVZTuHesT1lMgN4d8IzXJ0JvBdO+2x1AimNcRGN1X//P4Jgpd/yjz+O9kCkf7Id2q1In8jOzdua7rRBu9NINvPtIHtdB8NvfrHxykm3ctl2Cvwf9+VU89W5sL9JDd5tcLMSjS3DCMPHe7sJ3+Nrdjxqg77u9nPyOxfxgm1wXn9ieiAAAAAElFTkSuQmCC"},"94f5":function(e,t,n){(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function t(){n(this,t)}return o(t,[{key:"gettime",value:function(e){var t=["日","一","二","三","四","五","六"],n=e.getFullYear(),r=e.getMonth()+1;r<10&&(r="0"+r);var o=e.getDate();return o<10&&(o="0"+o),(""+n+r+o+t[e.getDay()]).split("")}},{key:"getWeekArray",value:function(){var e=Date.now(),t=((new Date).getDay()+7-1)%7;return Array.from(new Array(7)).map(function(n,r){var o=new Date(e+1e3*(r-t)*60*60*24);return o.getFullYear()+"_"+String(o.getMonth()+1).padStart(2,"0")+"_"+String(o.getDate()).padStart(2,"0")})}},{key:"useQQAd",value:function(e){return new Promise(function(t,n){var r=1;e.load(),e.show(),e.onClose(function(e){r&&(1==e.isEnded?setTimeout(function(){t(!0)},200):t(!1)),r=0}),e.onError(function(e){r&&setTimeout(function(){n(e)},200),r=0})})}},{key:"useWeiXinAd",value:function(e){var t=1;return new Promise(function(n,r){e.load().then(function(){console.log("load sucess"),e.show().catch(function(){r({msg:"show fail"})}),e.onClose(function(e){t&&(1==e.isEnded?setTimeout(function(){n(!0)},200):n(!1)),t=0}),e.onError(function(e){t&&setTimeout(function(){r(e)},200),t=0})}).catch(function(){r({msg:"loading fail"})})})}},{key:"savePicture",value:function(e,t){wx.saveImageToPhotosAlbum({filePath:e,success:function(){wx.showToast({title:"保存成功",icon:"success"}),t&&t()},fail:function(e){console.log(e),t&&t(),"saveImageToPhotosAlbum:fail:auth denied"!==e.errMsg&&"saveImageToPhotosAlbum:fail auth deny"!==e.errMsg&&"saveImageToPhotosAlbum:fail authorize no response"!==e.errMsg||wx.showModal({title:"开启相册权限",content:"开启相册使用权限，保存图片致本地",success:function(e){e.confirm&&wx.openSetting({success:function(e){t&&t()}})},fail:function(){console.log("获取权限失败")}})}})}},{key:"getimgall",value:function(t,n){t[0].img||t.forEach(function(e,t){e={img:e}});for(var r=0,o=0;o<t.length;o++)!function(o){t[o].path?r+=1:e.getImageInfo({src:t[o].img,success:function(e){t[o].path=e,(r+=1)==t.length&&n(t)},fail:function(e){console.log(e)}})}(o)}},{key:"creatuserid",value:function(){var e=wx.getStorageSync("uid");if(!e){var t=new Date,n=["1","2","4","5","3","8","0","7","9","6","q","w","S","e","a","s","d","z","x","c","v","f","r","t","g","b","y","h","n","m","j","u","i","o","k","l","p"],r=t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1),o=t.getDate()>9?t.getDate():"0"+t.getDate();e=t.getFullYear()+""+r+o;for(var i=0;i<8;i++)e+=n[(Math.random()*(n.length-1)).toFixed(0)];wx.setStorageSync("uid",e)}}},{key:"login",value:function(e,t){var n=wx.getStorageSync("uid");if(n)return t&&t(n),!1;wx.login({success:function(n){wx.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/addUser",method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{code:n.code,appid:e.globalData.appid},success:function(e){console.log(e.data.uid),wx.setStorageSync("uid",e.data.uid),t&&t(e.data.uid)}})}})}},{key:"updateUserinfo",value:function(){var t=this;e.getSetting({success:function(n){n.authSetting["scope.userInfo"]&&e.getUserInfo({success:function(n){var r=(new Date).getTime(),o=e.getStorageSync("userInfoTime");console.log(r),r-o>1296e3&&(e.setStorageSync("userInfoTime",r),t.improveUserinfo(n.userInfo.nickName,n.userInfo.avatarUrl))}})}})}},{key:"improveUserinfo",value:function(t,n){e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/improveUserinfo",method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{uid:e.getStorageSync("uid"),nickname:t,headimg:n},success:function(e){console.log(e)}})}},{key:"addSubscribe",value:function(t,n){e.login({success:function(r){console.log(r.code),e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/saveSubscribe",method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{code:r.code,appid:t.globalData.appid},success:function(e){n&&n(e)}})}})}},{key:"saveScene",value:function(t,n){e.login({success:function(r){e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/saveScene",method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{code:r.code,scene:n.scene,ver:t.globalData.ver,appid:t.globalData.appid},success:function(e){console.log(e)}})}})}},{key:"isreview",value:function(t){e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/isReview",method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{ver:t.globalData.ver,appid:t.globalData.appid},success:function(e){t.globalData.isreview=e.data.status}})}},{key:"getJumpList",value:function(t,n,r){e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/getJumpList",data:{appid:n,channel:t},success:function(e){r(e.data)}})}},{key:"saveJumpRecord",value:function(t,n){if(n.globalData.scene=t.scene,t.query.source&&(n.globalData.source=t.query.source,n.globalData.src=t.query.source),console.log(n.globalData),"1037"==t.scene&&t.query.target){var r=e.getStorageSync("openid"),o={target:t.query.target,from:t.query.from,channel:t.query.channel};r?(o.iscode=0,o.openid=r,e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/saveJumpRecord",data:o,success:function(e){console.log(e)}})):e.login({success:function(t){console.log(t.code),o.iscode=1,o.openid=t.code,e.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/saveJumpRecord",data:o,success:function(t){console.log(t.data),e.setStorageSync("openid",t.data)}})}})}}},{key:"saveOutRecord",value:function(t,n){var r=e.getStorageSync("openid"),o={target:t.appid,from:n,channel:t.channel};r?(o.iscode=0,o.openid=r,wx.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/saveOutRecord",data:o,success:function(e){console.log(e,"1")}})):wx.login({success:function(e){console.log(e.code),o.iscode=1,o.openid=e.code,wx.request({url:"https://mp.itwlw.com/index.php/Wxapp/BoxApi/saveOutRecord",data:o,success:function(e){console.log(e,"2"),wx.setStorageSync("openid",e.data)}})}})}}]),t}();t.default=i}).call(this,n("543d").default)},a35f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAABjFBMVEUAAAAhISEhISEhISEhISEhISEhISEhISEhISEhISH9nXchISEhISEhISEhISEhISH9nXchISEhISEhISEhISEhISEhISH9nXchISEhISEhISEhISEhISEhISEhISEhISH9nXchISEhISEhISEhISEhISEhISEhISEhISFBMy0hISEhISH9nXf9nXchISEhISH9nXf9nXchISHNgmT9nXchISH9nXchISH9nXf9nXf9nXchISH9nXchISEhISH9nXf9nXchISEhISH9nXf9nXf9nXchISEhISEhISH9nXf9nXftlHH9nXeka1QsJyX9nXc3LirtlHFCMy79nXeBV0ahaVMtKCb9nXePX0yobVbkj21KODE+MiwvKSbijm1AMy1jRjt4UkMhISExKidNOjKiaVNfRDlwTkD9nXc3LipPOzMhISH9nXf9nXf9nXchISHijm3HfmJjRjtBMy3qk2+8eF2yc1mobVaIW0mBVkZzT0FVPjZPOzPtlHG+el6faFKeaFKVY099VUUvKSZ2OJvNAAAAbnRSTlMA+PQF/KuOcRcJ/e/aysW5g31rZzsvD/TV0b60oIhgWlBPS0QSDebj3NnNpZ6IdzMsIiD87erc1s/KxLCrl5J5cVJBQDs1KRwUDQj89/Hq6efl5OPi4eDU083HwsK6s6WkhoOAbmxYVkVENSgXFTeEKb8AAAIsSURBVDjLhZNXW9tAEEWvZLkb3I2NjQt2gIROqKFDqOm99972UkKo6X88qwdZqMQ+b/p09u58MzswGUl6J8YUtSvqW8zgvwx6aRL2BdwtzxzJrl5/5cPb16/yCqn63bR0hMyVgst940Jy7enzMBkNOrSURg7g4pSoc+MRmT1j00Y0qinEQuI098mczeuhsoo+YeMOWbBoHaRMEw5uk1WYBEgfloUL19kDEx/DHtwTR8df7d55stPsXJhxlMU2+VvYuck8DJbIEcyIXe468sQVKvXexBkBRuUV28LBFrlkeL0sYFgccFe4cJUJw2vnS6yIHR65eWfZYXit+sTEMQ/cPZ/pxTEk8/40yfNyFpuhQ564eXfpN6fWAkztkVtO7ZLGiuEtUlvHfOgvd5zeA7L+rjMKk/jStk/+cniP9bvMAiNATJxojkY/1Jg0vTRZxObkd0d9bU+oemAyTSWA4Vt2LfSCepxJTeGEB8PjtrQ3lNVZ6CTP1bBhefkX3qlU1wHL0iXJ7iqwMnPZsMoJUkkj4+2unRaLJAurwMb7hf7++fLnars8mQY+khHLdg62kMwnUmuZ2lo1rn/0yv9Doz/IrHXfExHqhFXqtOqLUfLExJ6s3QMLxeku6mg5XwqSAtvRL77JQ7AR/NRZqgwaI50lo4hJUfoNGZBRnoXQvu43xC+LC5bbfpL+xmKCzGaGJg+ZQ2OKZE8Az5hFE0rkWJSMoxkVlWQezUnPef3APzzlKlbvJZnWAAAAAElFTkSuQmCC"},a6fa:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAABRCAYAAACwuj/UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMkM1MTRBQ0I5MDUxMUU5OEI2NkE1NEY2Rjc1OEVBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMkM1MTRBREI5MDUxMUU5OEI2NkE1NEY2Rjc1OEVBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYyQzUxNEFBQjkwNTExRTk4QjY2QTU0RjZGNzU4RUFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYyQzUxNEFCQjkwNTExRTk4QjY2QTU0RjZGNzU4RUFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IakXRAAADmdJREFUeNrsnXtwVNUd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"},a94b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAABRCAYAAACwuj/UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRDg5NkY1RUI5MDUxMUU5OUQ3OEEzREYxMEE1NTE2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRDg5NkY1RkI5MDUxMUU5OUQ3OEEzREYxMEE1NTE2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEODk2RjVDQjkwNTExRTk5RDc4QTNERjEwQTU1MTY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEODk2RjVEQjkwNTExRTk5RDc4QTNERjEwQTU1MTY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/ZzDpgAADcdJREFUeNrsnXlsXMUd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"},b902:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAhFBMVEUAAADFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcV+bnzKAAAAK3RSTlMA8XO6o221qKyz7vvSmmuLkHo35yOfYQoE48pYHRjDRy4SPd/Ylfa+hVEnDu/ssgAAAvhJREFUWMPtmdmSqjAQhkMURyOLrCKL4DYuvP/7nTKhQOh0T01uTtUU/xXIn88s2N2JbNas/6TQzyML6LAIqpGtChYHAWxR7ocId9diEs8PWyFQ307LTVpCxcClbImGy1tSr87W0DYOuPGWbnHvfEfato31E2w9PHssz3ZVk7O0ndWNawPfw5JP/CnYkdyGaWTLFoG89uW1rbM1clEdNpHAV1V9qSsv1+PGcNCCTWT1PYHavJ+tB/CGMXRklhbMCfDXj2D+a/BqBs/gGTyD/yRYhU3DeCx+0eMVDoYZ5NBnCahIpqah+IiAY/jSC5voKJN3mkH/PvmoGAKVpPfQlqVbWSbAcUg5q8VUl8+C4aXKjwtwrRwF8EC/opaU2xdipCI4lppscDl1tupA+moG9fzG/XnZ28oct30/mU7NAvP72eek+ViZt2jQyjtwl0A3L57YYu8GbW4Qsll/UdRbAXWq+cNN/CB9MVr1EdtYLCvoTpdieIH5ieDaLa5rOR3bfWw4pCj32VK6Zj/tNTcVMmEWCgW7oWylDWyhFhz8GI9hGLKOvp3y3bW7FefeAjJIocsg7jiCZ47i5LzqPqgX3SLrXg/Zr2V/C/PhbjK/waejsFqwTwPbMSJLD3tTMYno5bFfCZO6YpizECy+yiwlM6mEhg570NRsZZeNwV/yrUbPO8TeELwXo2MReDBRG4JD2a0MX4rAEMyJSsyTzwzBSd8rqLCbfvP6GIlksZwmQ/AXAS7fqxcZgl3iB9rIX7Uh+EGc8KTvZ0dDcCF7lWltN1mVGoJLGSn6DAcL4dQQzO7v3Jmhm6Y2NgWXKyfRdrgSMvOZhE1aKiCHzODcjdRNFRjIlos6KUwo7GktuaJCGosGXxWf4HrdxuSJDuXb9Tx7JI9vVCOQ28PlsoirU1nvnFbpwTR6tbRywJVx3TqoLRER9HwafIZDHCsqGCKX4sJWj7EhqRgqvkVLwjN07+8f+7V7zSg1yP8gfK+PZrv8IsQ1X/OYzZr1J/UPUmct9/fOzC4AAAAASUVORK5CYII="},bfc5:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAA6lBMVEUAAABJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUv9nXfwl3RoVFNiUVHslXObbV+LZVu5fGbfj3D2mnVpVVPQh2yYa15fT1BOR0zok3LAf2jWim2mcmGMZltZTU+wd2SQaFx3W1Z0WlZTSk3bjG7Ggmmgb2B9Xljyl3TulXPSh2zHAFV3AAAALHRSTlMAl9mPlCoK+e2wZrz85n4g0coUw4pTRT302JyDc3BcOeCqNQ/UonhYTSUZX+IPGn0AAAMISURBVFjD7ZhrU+IwFIaLFMpNKRa5KchFRfCACi6gXFXwtrv//+/s2pikgTYJaXdmZ+T5BOnMQ0renOZU27HjfyQf34vnteBJpAAglQjcewCIg4C9IcCEgtRG40CJRwPzpjPgJJMOyBs5A5azSDAx28dC+iGI2F0ZWKendfzRqPj2ngDmwA4d5sSnN0tMCbRNAJP15S1hTeFIQxwV8FBJXdsg8Y3lyGAuhgdrDUVvy8SKYsSZviIeNltK3lOSruQhc+EwSWJ3quC9pLccXd/hNeYv2o5KisTX5SoNdNNHfDdQDDSdEa+y00DrKlUydileA/k62iarXq1r3tSrTGrEpE2S0wi/nJpshZaPb0O0M+mtiQNNa8G5Juac1hKJhzwirMkQ5saHcgyYC02OC07gKSHO74vvUefEV6UE5ESBTltMlZQnsgdfWGm3y0Xlc0MrwzkY5JnquyWHlmeFrhgkvkonqHOPg0EZMMcCgzioZbeHvHGifgAxNudWAiK2khUlbTNpETGEyF0wNFUekKyijPJrAMOysz0frCLWtgs2sFx3t/b+vAaWuh3Cfd/i7pq42kYlOCUQz6Z3TqYzgbiQx7surIf/kjXdxN35cAws4+G86yY2s58avbyxr3UX8egB3HgYuYh1bjlmxaMxuDMebYpD8uLJI3jxOPEjfgZvnn2IJy8c8ctEXTz9WqnpDydvQzQ8VRfP8TqxzNCKztXFPXvg5tea+PbGHu+pi++R+DZwcW8n3on/sXiokOOh2oy7fsVZVHLoBO/sgY+OSDx55HQX9AT32sEMVp/l8bdQ/CpoL5pg89Sh5vdlf9YRip/ApuIlbsXQfzpgPULxAH0veDcCFn7o8Oki0T3+vgAby0tLj8n3AjFaq3cSSsQVp+3HfcjqjSfuOddi0MetC7fhBczNsr/ou7FYrAAxYuYLp4IWVprhwJ7wg+Qb65q0+K7jFJckXzqKqeEDn/Qb9qszGW+8gRe8ZEDmSK4dvKiKtDFn11bPRaU7zVwpmSnueWDGE21tx45vwR8Y+QK4QvEZ0wAAAABJRU5ErkJggg=="},c571:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RTIwMEMyRkVGMTcxMUU5OEFDN0FDMjZEM0MwRTI3QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RTIwMEMzMEVGMTcxMUU5OEFDN0FDMjZEM0MwRTI3QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFMjAwQzJERUYxNzExRTk4QUM3QUMyNkQzQzBFMjdDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFMjAwQzJFRUYxNzExRTk4QUM3QUMyNkQzQzBFMjdDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+brcTAAAADnZJREFUeNrsXQuUFMUV7WGXXVg+u8j/p5JEgSUuQgyLiRIUNUASP4hB+QVPYuIRiZ9AlPCJRg9HDUbRJIiJCoo5QSRo1OBBJYKa8FG+8hGN8hNQQVgQll2WndzLvMZHbfVMz0zPLHi6znlbVd3V1dW3ql699+rVbCQajTphyFyoE0IQAhwCHIYQ4BDgEOAwhACHAIcAhyEEOAQ4DCHAIcAhwGHwGXLdxOLFi5N6MBKJHEvT5Cn5xki3Q7ob0qcinY/4C+Q/RrwS+R1If4G4ylaHe02ndf222PaM133EOcg2ArVGvititrUB0pWItyBegWvbkN6nzbi6Lr+hZ8+exwOcZmgO+iFoBBpzLhqTG1HoIR9Fli3cCJoJmg3aBKrM0kDKA50GGgAajuZ0YvvYLNWRbOMRXONIexz0Iuiz2mYR7KCL0bCXpVG90MC60vijDZfGR+RdnXD9blxbhfRvOcqzAG570ES+E+++B1SMdJ0Yrl/OEAGb33Me0vwWftP3QXVrC+CGoPGg+aDu5rRGOAgqAx2wTLF6uPYbXHsT6YHpfkSczr8CtAg0DlTfnO6ID4COtlGzA6HuMnAmCFtJjwcnGchrH0QDrtUjFekK3HsXtAT51Yj34xo7ojM7QeLmCuz2SM9G2fuQfhC0IyBwW4FuRL3jjDWC6V1Ir0fyHdB6pNlGAlgCKgV9E/l6im9P4LqC6zeD9mUD4Pp46RTyW2MBWYfsHxFPQ77a49m+0in9EDdSQP8a1IPPc5ERoPcaHxQx6tJTggA1EWDbElzQhXrx5GLLaY/3PoFr/9ILrLFYXw8ahWyxKnOtvP8GUHlGAcZLx7jgqsa/hvR1iD9K8PjLKMePvAbx7YhLhP+x3t6Ie6MMZ8Fy0BYBez/oEKilApkv/oSsRlhVO1nEusk1UwJYg+S9SD/t4xMfEf77F9BFavSPQJoL851J4eWCtGTJkrgFpdwPQLMo2qhb83BvkABxnJhkdIIp4pE9PIz0Zaa4ZxOzTHEukUimAqWBUbi+KdF7jHex42aB+qvv4bpyNeiFRMCWlpYmt8jhBS1B9yPZQDX0bUTDXHCTDFtBl6OO2yiGmx2h82pRsk3p4zpUgcR1gLPkRyISJhsorw9HvFS9rwA0WVhRoCyC5e4AdVQ9/iHSlAB2p7kg3Yf6npQV/yx5R1tcK0JMvpqn2IhtdlCW/lwklu24thH314DmMp9m23aLlPM66Gvy/jOFTYwEVQUFcG/hQe4IiYr4stmv1pdAE9qJMlMl3RTUBlQkVIB7RSKN1JF3U3eh+LcH8UGJy2Rx3GWO6DQDZxpFSvLvHKn3J6Isveob4DgAFKLSsRRdVFmKVrP9qI8pfOjuAGZFwpBM2xHPQfn+iIfLc/lIk7Utk5mTlqLRD5VeqF66BfQ7XDscIKhZCym6ilXhm+5ypST5vouE/GlySoPR1Bx0s75PlRiNXJvOB9SWP1ya7/0A9ITL7qQuYtMsnRHMkVuqeOhaxI8GwRKyDXJA7/srNVWluZ5HW4wvgN1eUcSeuc5o2FPx1NkTmTUEFPjtM9UIZszFv6mJn58R3A0FL1CgrUB++skGbroj1zLwyCaWqyJ9aL9IlkU0QCVX8r7qkX/i2icevDrRLOkoqmzWgU3QNoqfz5H1idj1HdvAMehT1D1P1Usj/iDkC2x4eAHcDpVcrRm8CO7JBu5oTEJdb+D515C+8gRa+HrR8IP4MsTFolDMAPX08exctPdD1YGDxe7sawTzie+K/Ov2IlXZ1Zbp4sdm/AtKIyj7dVrS4s2ATICszakG3YLbpxsj/RugX/qQj5eD/qPyhajnfBrt/fDgxnjgcjXMacl6xTAP+g1H98DUgtDEbyclw9NTFA3P8HjuDNtzRlujgkm56iAarQr9jOCWeKiP+tANVAn98F2PBkdV+aiNv2VrATM6do2NX/O6z9lJNfk9JcJSpG3hR9H4Fhm2ejlZw/Zk2EOSbMSvNS9ofv0HFyBVL0F/yOfz22XXxg0Fgl3cRY77VuerF5aj8L/TAcMcIZqytLC1l4Xr26Amqm3LkB6MNnBhewv0GPJDEK9Uz9Lw1EOeb2epe4Fz/A5HL8HQ05pGe+f3FBhbkX89jRH3qcHHKrMsM3Pa/t6J7QcyzAGNpvFd2kR5doTHs1zwaP++VPK0C48GvaHKLEQ9tLadKYspAS7QoJsAc1umWNldt+qdAI8pyv2wc82ecy1xMZeIY4C20jsYFisaV+bqgMDtTDszbcuKv1JM5A72MDqXxHmWdmhuHfVRWPQQTfZi5N+Xcpto/CLAki8WDHd7mSu7GkbtdT4WlttpL/XDLpDuLIK9V7gK9GxAJtABaGtbbRuWb+OI7ABaFaeeTgTX4hlEZYlmyylqVq7XVjXc66px0zy4rvSA2yAO89WJvhUvGGruONhEHNsiaOHDg1JUX22UZ8rYSibOsa0Tqi25es0wdlHyjDavxr1ydb+Yzjc2gOle1EUBsge0IdG3gl7yM6I8NhbNMN8vf/dB1BwrTWWDNhXQNpuEo9pFLW2jZXAQyEVG+4nRHjXau4DyarAIXGS6i6qwzDaCLbuwE0S8aWkpS8e6W+mqJB/EBeFxY9q59XEvbVaAC9wi0comgU6Rd9ApZqS7+MZhP3RW/DmeeQT5TnKLNoixiJcYnbFasGojHdLFUZ5KuYaIdpp6eJ/jz5OFDH1qnAbf5MT20ph9D3RHKuKZbQb4MOjQCWYD5VOkDyM9X8u+yJ+C6Br5bo7av6lvXij2CfpGkKVQinjT8g56Yu5TA+ZUL4BbunxLws4ARlEL4dMuCPUzZTmLA/JCIbMzWtOAjnx/VfYS2k6cL70q1wol6vCdajbSwNXMrUMb3NvEnCKP8aZtQYNgGKoDt+Mm+cxtBNdo0xWgW5LVQIX1uR0d1ZY1vcg1VwtINQp/5rVCJytC+VkEg9TsfKrxfW1tQ75fPHuLx4JKh8JqQ5+owSIaianS1bjKAvqwiJJDI7W5G2K8Z68hXbhhTwpVEyt6ydcTDAttxp589UA18hXxxCC/mIOOqBF6OBOGoBSVkqnuqFOLZSXS08w2+vjeQ+53Svl8G4uor15GFlEeT5D3KZfyfMY/3FlBZ5UUOyoTgRLDTWjXZmnHByLCzUmhLmJVrXCpb2MRBe4s5iEVxAcDWFSoDY5COVf8Wexz5c9GoOPMn0EcAPWkrTsTbSx4fDOxqhLsIoJlDVvEYak8IopBXkAfsssx3D0TdExEKKrYTKLyOq5OQqRj2e1+BlKCGUescuS7otrrSY/gI4pn8U9OpmRWI+RLj58uqnozEdRdvnZAiKNkvwDeWJ5pIJQjo7BKOpQa2yZ5piILsyHHOLFUZVOVDygQqLk0zHCjCCyta3RuGSjG8DruSDROgZlbTlp5iRiiXlRG5l7hp9NA602gk2FRPsoRqxwlah6wsYgyUTTIImgxKkplpfZaAI3QShaYMXI40OpI7eWUbTugaLyLdXIn+3rEP8O1BxBPERtDJhSYY37MMgjKbGLaLqXR5DoJnNrSkGFp9Z9HOzLBNRyr2cGH6Psr07tSLR62zqoS6eSgjJpyzYOlbC470omdu7gg2fb7tNzRSTJX5a0G9x2GLtA2A2xhqDhaNzRswtwZoGPhSnrOCP/llGssC0hDCvG431pYwg4xHRLUChpbRLTMFx+Ms2k2RNxBzQ66N/G8Bk8KzUikUSapWbZVMyqiF069yHGX9LAy+AQN8K9Ak42RSPmRfJLn5NYE/D7ydx4P+7ET2/F1RdHpYoSa7KTm62ELbbQyhXi7TdHgObKPlf9roZbn0gzjeHjEGBGUOXkebVgGwGVYL55EN8qI1yOSHToxoN0TYlSoZuQ2wbIGD6bstkaNMJ6LKPGrzcUJd8r5ZH3tf6AhuP5YppUNekMiGqw2Kl0gaJe+O5mF3INKXIFABue7Wg7WI5hizDsqT5+AkjS/7y68bKKx0nO0XoX8gmxpcuJ6MBDvW2lIBpxZk9KsvgT1NlUGLfqtVdQAmOoxz70pFsHzuqWpGntQ5h7QeGMEvC08cUW29WLxwuG7l+pdZoSxwjJSZRWl7gEh6bRlWtEwPXvWGRpdsbuLmgxb4OFuOWDoqA77rxNz89zg1F54H+1gG94ytvIpxt3vh0VYVORiVYa/N7HO6l0pFVD7Wap6rAOunZOk0P2QNFh3Cndih2g+WIuB/H8oaIExaG4F/cnxefpVwCY2HdS3LhcN0vEawdT1n1OVtODJ+Dg96Bg8+0k5qa7LvyqSwkfOCRIod4N4mHC+wQJuAD1lU7I8zlwTmxYKF3q+74/n/Ef28IpyuKDcfCmoWYKR2xf3XwQNM1TZF5Dmh2xxTrzA3+YZgfh5gycPRkyFpH+CTmosZSJqQM1zWawXwAyb8fAqZRc4SwwmNpmYJ+bpRjQDZXsaXjR/pyHHSf+8cCYD5WP6PzxtaG5cuKbjGl1ZbT97wzMsPM52trpGC14NFmg7SkseQo/EmXKNo3iAaHYvOTHfBp685zEDqqQdTcMLT+WLjLnXOfEDVfORosmOUdO/uShC3MqneEcXVx4CoqMffwCq1Jit9zqW/TzbYXAaS56hiCYvcMFn/hz5CRaKJfUsPyGwhz8hILp+hXPyBFq/xssizMFVqKZ9R1znIKJXKA1RjbSRSvB52In9tkQNY7/XiklNhB6TpscOzYBFLriGox8XR/rjPnqSgesGWu74Kye98W3PmiZRMTYVWTYipgpW1rPb8UQS6tOj+WsmPKchO7Cm8ZvmweedmPvmCOd47/CTNfAbfirnVOaKQSqqgI7KbxLRiE+3q9Ha9uCHRehAO+szFGfkx9xKRRzjr4FsFNX6c23B/4oEmj95PICOfvRf6y5rDc2su+X6Bj9rTCT8TzCZDeGPg4YAhwCHIQQ4BDgEOAwhwCHAIcBhCAEOAQ5DCHAI8Fco/F+AAQBTmPM2ZnhKqAAAAABJRU5ErkJggg=="},c7c6:function(e,t,n){(function(e){function r(e){return(e=e.toString())[1]?e:"0"+e}function o(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),a=e.getMinutes(),u=e.getSeconds();return[t,n,o].map(r).join("/")+" "+[i,a,u].map(r).join(":")}Object.defineProperty(t,"__esModule",{value:!0}),t.formatTime=o,t.formatVer=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours();return e.getMinutes(),e.getSeconds(),[t,n,o,i].map(r).join("")},t.getRandIndex=function(e){return Math.floor(Math.random()*e)},t.setUid=function(){var t=getApp(),n=o(),r="";try{(r=e.getStorageSync("tempuid"))||(r=(0,i.Md5)(t.globalData.appid+"_"+n+"_"+Math.random().toString(36).substr(2)),e.setStorageSync("tempuid",r))}catch(e){r=(0,i.Md5)(t.globalData.appid+"_"+n+"_"+Math.random().toString(36).substr(2))}return r},t.playGame=function(t){var n=getApp();console.log(t);var r=t.gid?t.gid:t.id,o=t.title,i=(t.original,"/pages/quiz/index?id="+r+"&title="+o+"&src="+n.globalData.source);2==n.globalData.template&&(i="/pages/quizchoiceness/index?id="+r+"&title="+o+"&src="+n.globalData.source),"1"==t.jump_type?i=t.path:"2"==t.jump_type?i="/pages/tanmegame/game?id="+r:"3"==t.jump_type&&(i="/pages/tarotmark/item?id="+r);var u=n.globalData.free_jump,c=t.needjump,s=t.round?t.round:1;return i+="&round="+s,1==t.christmas?(e.navigateTo({url:"/pages/christmas/index"}),!1):c?(console.log(111111111),a.default.Event.stat("navigateMiniProgram",{minitype:t.jumpappid+"_1"}),e.navigateToMiniProgram({appId:t.jumpappid,path:t.jumppath,success:function(){a.default.Event.stat("navigateMiniProgram",{minitype:t.jumpappid+"_2"})}}),!0):void(u?e.navigateToMiniProgram({appId:u,path:i,extraData:{from:"quce"},envVersion:"release",field:function(){wx.navigateTo({url:i})}}):e.navigateTo({url:i}))},t.sentence=function(e){for(var t=["QQ","腾迅","号码","system","admin","淫賤","去死","吃屎","妈的","娘的","日你","尻","操你","干死你","王八","傻逼","傻B","贱人","狗娘","婊子","表子","靠你","叉你","叉死","插你","插死","干你","干死","日死","鸡巴","睾丸","包皮","龟头","屄","赑","妣","肏","奶子","屌","成人文学","成人图片","成人电影","性爱电影","情色电影","学生妹","情色图片","情色贴图","无码电影","特肖","禁肖","杀尾公式","杀肖公式","曾道人","特码生肖","法轮大法","修炼之歌","弘法会","大法弘传","法轮功","大法之声","灵修团体","宇宙最高法理","真善忍大法","正法洪流","五套功法","师傅法身","师父法身","李洪志","大法弟子","真修弟子","弟子正法","天安门受难","六四惨案","六四真相","八九民运","民运人士","红色恐怖","民主运动","邓二世","天安门血","自由网","明慧网","正见网","圆明网","打印机版","fawanghuihui","minghui","freenet-china","yuanmingeurope","secretchina","江政府","江泽民当局","江核心","江路线","江泽民政权","江贼","江贼民","江昏君","江二世","中共当局","大陆当局","大陆官员","中共媒体","共匪","共产专制","古拉格","当权者","恶警","宗教迫害","大法第子","天安门受难人","开悟弟子正法","媽的","幹死你","賤人","幹你","幹死","雞巴","龜頭","贔","成人文學","成人圖片","成人電影","性愛電影","情色電影","學生妹","情色圖片","情色貼圖","無碼電影","殺尾公式","殺肖公式","特碼生肖","法輪大法","修煉之歌","弘法會","大法弘傳","法輪功","大法之聲","靈修團體","師傅法身","師父法身","天安門受難","六四慘案","天安門受難人","開悟弟子正法","惡警","當權者","古拉格","共産專制","中共媒體","大陸官員","大陸當局","中共當局","江澤民政權","江路線","江澤民當局","印表機版","圓明網","正見網","明慧網","自由網","天安門血","鄧二世","紅色恐怖","毛泽东","江泽民","胡錦濤","溫家寶","賤B","毛澤東","周恩來","共產黨","操你媽","鄧小平","前列腺","裸照","AV女優","強姦","胡政府","胡錦濤當局","胡核心","胡路線","胡錦濤政權","胡昏君","中國","中華人民共和國","主席","總統","省長","吳邦國","賈慶林","李長春","習近平","李克強","賀國強","周永康","胡锦涛","温家宝","贱B","毛泽东","周恩来","共产党","操你妈","邓小平","前列腺","裸照","AV女优","强奸","胡政府","胡锦涛当局","胡核心","胡路线","胡锦涛政权","胡昏君","中国","中华人民共和国","总统","省长","吴邦国","贾庆林","李长春","习近平","李克强","贺国强","周永康","混蛋","無恥","下流","fuck","mmd","卑鄙","流氓","淫賤","淫賤","sb","SB","去死","吃屎","媽的","娘的","日你","尻","操你","干死你","王八","傻逼","傻B","賤人","我靠","狗娘","婊子","表子","靠你","叉你","叉死","插你","插死","干你","干死","日死","雞巴","痞子","睪丸","包皮","龜頭","屄","贔","妣","肏","奶子","尻","屌","成人文學","成人圖片","成人電影","性愛電影","落霞缀","死一边去","盖塔奥","母猪","强淫","挨了一炮","麻古","滚蛋","黑喂狗","猪公","中共主席","搅基","卖淫","麻果配","骚人","闹太套","大脑短路","藏独","黄段子","藏独","麻果丸","骚","本宫","烂泥","疆独","笨拉灯","操了嫂","麻将透","新建户","攻受","废渣","马英九","战五渣","操嫂子","麻醉狗","新疆叛","小妾","作呕","水扁","矮仔","插屁屁","麻醉枪","新疆限","可攻可受","进天堂","衰人","傻仔","察象蚂","麻醉枪","新金瓶","不是人","裹胸","处男","奸夫","成人电","麻醉药","新唐人","何弃疗","裹脚布","马克思","黑鬼","成人卡通","毛一鲜","姓忽悠","土憋","耗子","列宁","洗了滚","成人聊","美艳少妇","性爱日","绿茶婊","你吖","中华人民","娼妓","成人片","妹按摩","性福情","婊","绑大款","共和国","猪仔","成人视","妹上门","性感少","婊了","养小蜜","社会","啥表","成人图","蒙汗药","性推广歌","吊炸天","吃里扒外","民主党","锉毙","成人文","迷幻型","胸主席","菊花","溅B","64","粪便","成人小","迷幻药","徐玉元","爆菊","跑堂狗","民主","膣屄","充气娃","迷幻药","爆菊花","特妈","破鞋","尿泡","催眠水","迷昏口","丫的","无节操","嬷痹","扯巴子","吹箫","催情粉","迷昏药","性器","菜鸟","娘个B德","溜洽子","干你娘","催情药","迷昏药","烟感器","波霸","B叫","瓜哇子","屌你老母","催情药","迷魂香","严晓玲","泡M","滚","龟儿子","肏你妈","挫仑","迷魂药","颜射","泡妞","滚回去","臭婊子","打飞机","鸡巴","迷魂药","劳教","毛片","滚床单","二流子","泥马","鸡巴","迷奸药","劳改犯","好个毛","滚床单","鸡鸡","骚货","奶子","迷情水","颜射","你妹","犊子","粪胀","雏妓","肉棒","迷情药","姚明进去","毛线","滚犊子","杂种","狗噏","代孕","迷药","要射精了","傻帽","草死你妈","十三点","烂臭鞋","法车仑","谜奸药","要射了","傻X","废了你","该猪吃","恶狗","法正干","蜜穴","要泄了","熊样","残废","狗造化","恶棍","法轮","内射","夜激情","唾弃","大比岔","你算老几","无赖","法轮佛","嫩穴","液体炸","腐植质","卖骚","秀逗","蠢人","法维权","嫩阴","一小撮别","装B","卖弄","没脑子","贱货","法一轮","操你妈","遗情书","装b","扮纯","脑子进水","没屁眼","法院给废","拟涛哥","蚁力神","呆逼","装纯","骚包","狗娘养的","仿真枪","娘两腿之间","阴间来电","傻逼","败类","贱皮子","贱猪","夫妻交换","妞上门","阴唇","二逼","fuck","解放军","蠢猪","感扑克","浓精","阴道","死逼","damn","妓女","婊子养的","冈本真","女被人家搞","阴户","笨蛋","丑角","政府","疯狗","肛交","女激情","淫魔舞","白痴","ET","缩头乌龟","肛门是邻","女优","淫情女","二痴","变态","团体","卖比","冈本真","炮的小蜜","淫肉","蛋白质","凤姐","游行","傻吊","钢针狗","喷尿","淫骚妹","王八","屁股","小日本","人模狗样","钢珠枪","嫖俄罗","淫兽","三八","MMD","坯子","港澳博球","嫖鸡","淫兽学","东方标志","NND","大麻","歪逼","港马会","仆不怕饮","淫水","东方婊子","禽兽","起义","操逼","港鑫华","普通嘌","淫穴","比样迪","兽","抵制","装葱","高莺莺","叫床","咏妓","逼样的","下贱","拉萨","癞蛤蟆","搞媛交","色黄","幽谷三","DBF","欠踹","开打","狼心狗肺","共狗","色黄图","游精佑","大泼妇","欠拍","李登辉","挨刀的货","共王储","奇淫散","有奶不一","兔崽子","欠拧","陈水扁","死不要脸","狗粮","贱淫","右转是政","不想活啦","死皮赖脸","卧槽","屎坨坨","滚圆大乳","淫荡","幼齿类","他奶奶的","剑人","我擦","卖骚","国家妓","贱B","愚民同","去死吧你","醉银剑","屌爆了","卖逼","和狗交","柔胸粉","愚民政","祖宗","人剑合一","我嘞个去","阳痿","和狗性","肉洞","与狗性","祖宗十八代","化粪池","二货","寄生虫","和狗做","肉棍","玉蒲团","蠢材","流氓","脑弱","傻子","红色恐","如厕死","鸳鸯洗","蠢货","山寨","次奥","窝囊","胡江内斗","乳交","砍杀","呕像","恶心","蛋碎","窝囊废","胡紧套","软弱的国","杀人犯","小妞","该死","粉木耳","歪瓜劣枣","胡锦涛","赛后骚","凶杀","老娘","BT","黑木耳","胡扯","胡适眼","三挫","血案","青蛙头","呆瓜","搞基","狗屁","胡耀邦","三级片","韵徐娘","阴阳失调","呆子","撸管","仆街","湖淫娘","三秒倒","炸死","河马","dork","谢特","南朝鲜人","虎头猎","三网友","植物冰","火山喷发","下流","装逼","后庭","华国锋","三唑","殖器护","垃圾人","泼妇","矮穷挫","总理","华门开","骚妇","惨案","垃圾","淫猥","活春宫","我日","吹萧","骚浪","凶案","恐龙","公驴","银枪小霸王","屁眼","还看锦涛","骚穴","贪官","青蛙","傻瓜","拔吊无情","老二","换妻","骚嘴","狗官","废材","蠢驴","拔屌无情","鞭鞭","浑圆豪乳","扫了爷爷","昼将近","孙了","神经病","屁话","汉奸","激情电","色电影","主席忏","装孙","青楼","滚粗","强暴","激情短","色妹妹","着涛哥","装孙子","便便","废柴","钉子户","激情炮","色小说","自由圣","瞎搞","马屁精","打炮","揩油","激情妹","色视频","自慰用","扯蛋","大便","聊骚","恶爆","急需嫖","尸博","自由亚","一陀粪","痴呆","潮吹","恶霸","腐败","失身水","有毛病","一陀屎","牛逼烘烘","煞笔","耐操","打砸抢","失意药","我靠","草包","无节操","波推","顶你个肺","奸成瘾","狮子旗","靠","自杀","强奸","阴经","共和国","江胡内斗","十八等","迷药","妈蛋","色诱","八婆","小鬼子","江太上","十大谎","作死","无性生殖","手淫","鸡婆","李克强","江系人","十大禁","做爱","生殖","你大姨妈的","拉皮条","李长春","疆独","熟妇","做爱小","智障","坑爹","嘿咻","张德江","自慰","贱民","套套","丑陋","坑妈","约炮","俞正声","叫自慰","太王四神","泄","自爆","坑爷","娘炮","刘云山","姐包夜","六四","妈蛋","灭了","坑奶奶","屁民","王歧山","姐服务","东突","死边去","基因突变","你有病","援交","张高丽","姐兼职","探测狗","屌丝","你tmd","渣滓","土肥圆","李援朝","姐上门","涛共产","鸟","吹牛b","碎渣","基佬","李源朝","猪头","涛一样胡","鸟人","群殴","杂碎","孬种","博熙来","狗蛋","特码","屌人","撒子","没用的家伙","备胎","傻蛋","天朝特","草泥马","自恋","混蛋","民奸","蛋疼","偷偷贪","法克由","吹牛","废物","傻冒","操蛋","推油按","法克","狗眼","畜牲","歇菜","MLGB","脱衣艳","吊儿郎当的","狗嘴","八嘎","歇火","去年买了个表","瓦斯手","他妈的","矫情","笨脑子","菊花紧","mlgb","袜按摩","他妈","屁颠","阿呆","牛X","qnmgb","温家堡","XXOO","骗钱","疯子","我顶你个肺","精子射","温切斯特","丫滴","你大爷","卑贱","牛叉","就爱插","温影帝","怂样","脑残片","卑鄙","麻痹","就要色","温家宝","丑角","脑残","小偷","奶奶个熊","巨乳","瘟加饱","死翘翘","被驴踢","麻子脸","咸猪手","拉登说","瘟假饱","屎样","被驴踢","老家伙","天朝","浪穴","纹了毛","狗屎","你妈妈的","该死的","鬼畜","黎阳平","台独","邓小平","二百五","色狼","抽风","李洪志","乌蝇水","猪","250","肥猪","打手枪","李咏曰","无耻","马B","奇葩","神棍","尼玛","骗中央","无码专","周恩来","臭鸡蛋","畜生","丽媛离","西藏限","刘少奇","脱裤子","豆腐渣","节操掉了","利他林","希脏","朱德","放屁","吹潮","蹭炮","六合彩","习进平","宋庆龄","拽","龟头","法克鱿","乱奸","习晋平","习近平","shit","射入","达菲鸡","乱伦类","席复活","李克强","SHIT","A片","马勒戈壁","乱伦小","席临终前","人渣","欠抽","中南海","互撸娃","乱伦","席指着护","渣男","找抽","处女","吃翔","伦理大","洗澡死","渣","欠扁","吃精","爆出翔","伦理毛","喜贪赃","切克闹","挂了","你全家","打蝴蝶","伦理片","陷害案","来死狗","猥琐","黄片","贱骨头","裸聊网","陷害罪","药药药","龌龊","斯大林","屁轻","裸舞视","小穴","盖塔奥","愚昧","阿扁","老三老四","成人圖片","落霞綴","死一邊去","蓋塔奧","母豬","強淫","挨了一炮","麻古","滾蛋","黑餵狗","豬公","中共主席","攪基","賣淫","麻果配","騷人","鬧太套","大腦短路","藏獨","黃段子","藏獨","麻果丸","騷","本宮","爛泥","疆獨","笨拉燈","操了嫂","麻將透","新建戶","攻受","廢渣","馬英九","戰五渣","操嫂子","麻醉狗","新疆叛","小妾","作嘔","水扁","矮仔","插屁屁","麻醉槍","新疆限","可攻可受","進天堂","衰人","傻仔","察象螞","麻醉槍","新金瓶","不是人","裹胸","處男","姦夫","成人電","麻醉藥","新唐人","何棄療","裹腳布","馬克思","黑鬼","成人卡通","毛一鮮","姓忽悠","土憋","耗子","列寧","洗了滾","成人聊","美艷少婦","性愛日","綠茶婊","你丫","中華人民","娼妓","成人片","妹按摩","性福情","婊","綁大款","共和國","豬仔","成人視","妹上門","性感少","婊了","養小蜜","社會","啥表","成人圖","蒙汗藥","性推廣歌","吊炸天","吃裡扒外","民主黨","銼斃","成人文","迷幻型","胸主席","菊花","濺B","64","糞便","成人小","迷幻藥","徐玉元","爆菊","跑堂狗","民主","膣屄","充氣娃","迷幻藥","爆菊花","特媽","破鞋","尿泡","催眠水","迷昏口","丫的","無節操","嬤痺","扯巴子","吹簫","催情粉","迷昏藥","性器","菜鳥","娘個B德","溜洽子","干你娘","催情藥","迷昏藥","煙感器","波霸","B叫","瓜哇子","屌你老母","催情藥","迷魂香","嚴曉玲","泡M","滾","龜兒子","肏你媽","挫侖","迷魂藥","顏射","泡妞","滾回去","臭婊子","打飛機","雞巴","迷魂藥","勞教","毛片","滾床單","二流子","泥馬","雞巴","迷姦藥","勞改犯","好個毛","滾床單","雞雞","騷貨","奶子","迷情水","顏射","你妹","犢子","糞脹","雛妓","肉棒","迷情藥","姚明進去","毛線","滾犢子","雜種","狗吸","代孕","迷藥","要射精了","傻帽","草死你媽","十三點","爛臭鞋","法車侖","謎奸藥","要射了","傻X","廢了你","該豬吃","惡狗","法正乾","蜜穴","要洩了","熊樣","殘廢","狗造化","惡棍","法輪","內射","夜激情","唾棄","大比岔","你算老幾","無賴","法輪佛","嫩穴","液體炸","腐植質","賣騷","秀逗","蠢人","法維權","嫩陰","一小撮別","裝B","賣弄","沒腦子","賤貨","法一輪","操你媽","遺情書","裝b","扮純","腦子進水","沒屁眼","法院給廢","擬濤哥","蟻力神","夫妻交換","妞上門","陰唇","二逼","fuck","解放軍","蠢豬","感撲克","濃精","陰道","死逼","damn","妓女","婊子養的","岡本真","女被人家搞","陰戶","笨蛋","丑角","政府","瘋狗","肛交","女激情","淫魔舞","白癡","ET","國軍","縮頭烏龜","肛門是鄰","女優","淫情女","二癡","變態","團體","賣比","岡本真","炮的小蜜","淫肉","蛋白質","鳳姐","遊行","傻吊","鋼針狗","噴尿","淫騷妹","王八","屁股","小日本","人模狗樣","鋼珠槍","嫖俄羅","淫獸","三八","MMD","黨","坯子","港澳博球","嫖雞","淫獸學","東方標誌","NND","大麻","歪逼","港馬會","僕不怕飲","淫水","東方婊子","禽獸","起義","操逼","港鑫華","普通嘌","淫穴","比樣迪","獸","抵制","裝蔥","高鶯鶯","叫床","詠妓","逼樣的","下賤","拉薩","癩蛤蟆","搞媛交","色黃","幽谷三","DBF","欠踹","開打","狼心狗肺","共狗","色黃圖","游精佑","大潑婦","欠拍","李登輝","挨刀的貨","共王儲","奇淫散","有奶不一","兔崽子","欠擰","陳水扁","死不要臉","狗糧","賤淫","右轉是政","不想活啦","死皮賴臉","臥槽","屎坨坨","滾圓大乳","淫蕩","幼齒類","他奶奶的","劍人","我擦","賣騷","國家妓","賤B","愚民同","去死吧你","醉銀劍","屌爆了","賣逼","和狗交","柔胸粉","愚民政","祖宗","人劍合一","我勒個去","陽痿","和狗性","肉洞","與狗性","祖宗十八代","化糞池","二貨","寄生蟲","和狗做","肉棍","玉蒲團","蠢材","流氓","腦弱","傻子","紅色恐","如廁死","鴛鴦洗","蠢貨","山寨","次奧","窩囊","胡江內鬥","乳交","砍殺","嘔像","噁心","蛋碎","窩囊廢","胡緊套","軟弱的國","殺人犯","小妞","該死","粉木耳","歪瓜劣棗","胡錦濤","賽後騷","兇殺","老娘","BT","黑木耳","胡扯","胡適眼","三挫","血案","青蛙頭","呆瓜","搞基","狗屁","胡耀邦","三級片","韻徐娘","陰陽失調","呆子","擼管","仆街","湖淫娘","三秒倒","炸死","河馬","dork","謝特","南朝鮮人","虎頭獵","三網友","植物冰","火山噴發","下流","裝逼","後庭","華國鋒","三唑","殖器護","垃圾人","潑婦","矮窮挫","總理","華門開","騷婦","慘案","垃圾","淫猥","活春宮","我日","吹蕭","騷浪","兇案","恐龍","公驢","銀槍小霸王","屁眼","還看錦濤","騷穴","貪官","青蛙","傻瓜","拔吊無情","老二","換妻","騷嘴","狗官","廢材","蠢驢","拔屌無情","鞭鞭","渾圓豪乳","掃了爺爺","晝將近","孫了","神經病","屁話","漢奸","激情電","色電影","主席懺","裝孫","青樓","滾粗","強暴","激情短","色妹妹","著濤哥","裝孫子","便便","廢柴","釘子戶","激情炮","色小說","自由聖","瞎搞","馬屁精","打炮","揩油","激情妹","色視頻","自慰用","扯蛋","大便","聊騷","惡爆","急需嫖","屍博","自由亞","一陀糞","癡呆","潮吹","惡霸","腐敗","失身水","有毛病","一陀屎","牛逼烘烘","煞筆","耐操","打砸搶","失意藥","我靠","草包","無節操","波推","頂你個肺","奸成癮","獅子旗","靠","自殺","強姦","陰經","共和國","江胡內鬥","十八等","迷藥","媽蛋","色誘","八婆","小鬼子","江太上","十大謊","作死","無性生殖","手淫","雞婆","李克強","江系人","十大禁","做愛","生殖","你大姨媽的","拉皮條","李長春","疆獨","熟婦","做愛小","智障","坑爹","嘿咻","張德江","自慰","賤民","套套","醜陋","坑媽","約炮","俞正聲","叫自慰","太王四神","洩","自爆","坑爺","娘炮","劉雲山","姐包夜","六四","媽蛋","滅了","坑奶奶","屁民","王歧山","姐服務","東突","死邊去","基因突變","你有病","援交","張高麗","姐兼職","探測狗","屌絲","你tmd","渣滓","土肥圓","李援朝","姐上門","濤共產","鳥","吹牛b","碎渣","基佬","李源朝","豬頭","濤一樣胡","鳥人","群毆","雜碎","孬種","博熙來","狗蛋","特碼","屌人","撒子","沒用的傢伙","備胎","傻蛋","天朝特","草泥馬","自戀","混蛋","民奸","蛋疼","偷偷貪","法克由","吹牛","廢物","傻冒","操蛋","推油按","法克","狗眼","畜牲","歇菜","MLGB","脫衣艷","吊兒郎當的","狗嘴","八嘎","歇火","去年買了個表","瓦斯手","他媽的","矯情","笨腦子","菊花緊","mlgb","襪按摩","他媽","屁顛","阿呆","牛X","qnmgb","溫家堡","XXOO","騙錢","瘋子","我頂你個肺","精子射","溫切斯特","丫滴","你大爺","卑賤","牛叉","就愛插","溫影帝","慫樣","腦殘片","卑鄙","麻痺","就要色","溫家寶","丑角","腦殘","小偷","奶奶個熊","巨乳","瘟加飽","死翹翹","被驢踢","麻子臉","鹹豬手","拉登說","瘟假飽","屎樣","被驢踢","老傢伙","天朝","浪穴","紋了毛","狗屎","你媽媽的","該死的","鬼畜","黎陽平","台獨","鄧小平","二百五","色狼","抽風","李洪志","烏蠅水","豬","250","肥豬","打手槍","李詠曰","無恥","馬B","奇葩","神棍","尼瑪","騙中央","無碼專","周恩來","臭雞蛋","畜生","銀槍小霸王","麗媛離","西藏限","劉少奇","脫褲子","豆腐渣","節操掉了","利他林","希髒","朱德","放屁","吹潮","蹭炮","六合彩","習進平","宋慶齡","拽","龜頭","法克魷","亂奸","習晉平","習近平","shit","射入","達菲雞","亂倫類","席復活","李克強","SHIT","A片","馬勒戈壁","亂倫小","席臨終前","人渣","欠抽","中南海","互擼娃","亂倫","席指著護","渣男","找抽","處女","吃翔","倫理大","洗澡死","渣","欠扁","吃精","爆出翔","倫理毛","喜貪贓","切克鬧","掛了","你全家","打蝴蝶","倫理片","陷害案","來死狗","猥瑣","黃片","賤骨頭","裸聊網","陷害罪","藥藥藥","齷齪","斯大林","屁輕","裸舞視","小穴","蓋塔奧","愚昧","阿扁","老三老四","共産黨","共产党"],n=0,r=e.replace(/(^\s*)|(\s*$)|(\s)/g,""),o=0;o<t.length;o++)-1!=r.indexOf(t[o])&&n++;return 0!==n},t.initChannel=function(t){var n=getApp();if(t.channel)n.globalData.channel=t.channel,e.setStorageSync("user_channel",t.channel);else{var r=e.getStorageSync("user_channel");r&&(n.globalData.channel=r)}t.source&&(n.globalData.source=t.source,n.globalData.src=t.source),t.gid&&t.ispush&&(n.globalData.from_gid=t.gid),t.id&&t.ispush&&(n.globalData.from_gid=t.id),t.g&&(n.globalData.from_gid=t.g),t.push_gid&&(n.globalData.from_gid=t.push_gid)};var i=n("4fab"),a=function(e){return e&&e.__esModule?e:{default:e}}(n("f47e"))}).call(this,n("543d").default)},c7cd:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAh1BMVEUAAADFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcWAHvHAAAAALHRSTlMA2RnhTaFZDmD2kgQqRgpsz8i76bYiFYt5c1A8nSXBqfDj24aA1DFmNhuyQHytcyQAAALCSURBVFjD7ZjXgqowFEUBZWhSBVEBsY8l//99d+ZiEkpIZd7YT9KWKSf75ESbNUtB91qv79r0WjoAAGc5OdcGjeyJuTsAtZuUewVY1wm5LmjLnZY7PTlIIXANf6TBBNzNAeLKrIQ/Dxt1bgxh+c9VDi9iVXKmo2DohoeeKXEfJxS+/YA+PRS4bzRd3+jeN5rKQpq7dz4MZ69hfcG7ssaB23b0O/f9I+6HjMLRPhdohEIVe9CrwbMKxcpWmHuBn0ZPwtNnBB9fxLCeidaYoZFkxGg9elL2kIy5gpVIGMcGfWR6HJ1KLGF7cOluKmhJKx1NDO8E6yueLL/gD6UtfHXB3hcU2B5kFhHbHsCXxqMvgO2EJpvyHrMlqj2TMI4twR7Yqs6s2c6RPYilnepGjU+vRlyDhqFakkmwB8RNLU1UFvKWOiDbDrYHWTdMgxEXNDU5IXJsEDMCiJJQJo0lESLcMjwOMWhLnGyDthI0mEvQ0c0THeGoC3iT/xCcRMPNOHUBNtpI9cBP0Tjuge8jO+tFv8XZ3m5rn/VbDC18WEvY7q/yFwnsJ2vQ1TrxSeBX/gu5wGcdBgR3Qp8k0xuCfUqROATXgKx6CF6KgEMwplAJbBxHwUdDBbwD49qpgNNPali1FTqNj8mC8Vp1iakm8uTBlg7zLyHn64EC+EwBn62/avEMnsEEsHIc25ODg/NELS4aQ8Q5rTm2qRjgymFlkAz8V4FzldOc2dDB7+azFaXCO/Y30MUrCTUW+Np0lFbtfdL0oIilgoMT3FkxjzBLDjB2N5N16ImnAeQce8Cb16kwHHp9UcIdo0+ZiSavxN0vco2qzEF7ztQkqqzPeLxwul1YzFKTRzhsY3TF0oWTe9AgmPe4essHvrfedkK+8vjGxuJa23VA/OYt27YL1jg8NKSHL1BabJbmIdJHFJc/qFmzZqnoHxPMGtRmeQpqAAAAAElFTkSuQmCC"},c8ba:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":e(window))&&(r=window)}t.exports=r},cd71:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAw8AAAA+CAYAAABtEidDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjdDQzRBQkM3QjAxMUU5ODNDRUQ4NjU3MkU2OTk1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjdDQzRBQ0M3QjAxMUU5ODNDRUQ4NjU3MkU2OTk1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyN0NDNEE5QzdCMDExRTk4M0NFRDg2NTcyRTY5OTUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyN0NDNEFBQzdCMDExRTk4M0NFRDg2NTcyRTY5OTUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+80Mh+wAARWJJREFUeNrsfQd8HMW9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"},d7cf:function(e,t){e.exports="data:image/gif;base64,R0lGODlhJAAzANU4AP///7+/v87Ozs3Nzfz8/NDQ0MbGxsrKysjIyPv7+/j4+Pf399PT08fHx8zMzMLCwt7e3vr6+ufn5+Dg4Pn5+f39/dXV1ebm5s/Pz+Xl5cDAwP7+/vHx8eTk5OPj49/f38PDw+/v79HR0fb29tbW1u3t7fX19cHBwezs7PPz8/Ly8tra2urq6tTU1Onp6dLS0tnZ2cnJydjY2OHh4ejo6MXFxfT09MvLy////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjI5MkQ0RDQxN0JFMTFFODlCODNBNzQwOTc3MzY1RDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjI5MkQ0RDUxN0JFMTFFODlCODNBNzQwOTc3MzY1RDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMjkyRDREMjE3QkUxMUU4OUI4M0E3NDA5NzczNjVEMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMjkyRDREMzE3QkUxMUU4OUI4M0E3NDA5NzczNjVEMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUoADgALAAAAAAkADMAQAZrQIBwSCwaj8ikcslsOoeKQWBKDRyeWEAiku16v+CweNwUTCfkormaSbvf8Lh87tzEt/I1tU2OVqlXcWtodIWGh4iJiouMjY6PkHANBnNSVARvelQMaSt/VAiZn5xwllOYcpORq6ytrq+wSUEAIfkEBSgAOAAsCwAFAAwAJQBABoRAnHA43AgViIByeSEOTcvlhwiNBiZIa0DiFFJC3eFAy3XKrAcx2fkNu7sC5YPgXGgDkK7Dqkk4C1YFf4FEe1F9OHZaeURxAXNvkZJCSSlhjkoYRIpWJ3RDNFoPFUQpWoJEHVolTgZWJE4WVg6xs62vqatDKqdDEqKknFGejVGaYUk2TkEAIfkEBSgAOAAsFAAAABAAMwBABtZAnBAX8QyPSNwowGwGPkkkxcm0RIct6uAKoQZGyJgXihQ0L1dCwwuqXI9mquuNW3hnbweVET14KUMvXgEoV3EBaG+CXoVvYlQQdH5UgFxeYFd6TnxXWU5bUXZUeElTVFZJh01zR0tjR2psbm9FdEc3AZFvG6oBHFEVIoOcUWtUIG8eXhoEVxxeDxvOXhhvHV6JUQNUBm8oXixvNVQwb8JOBW8WVAfmVOlX407lUd9U4drcV8pU2UfPVKolAegEhDQk/JwwS2KsIJJgw6LwoqLCFi5dUYIAADs="},df8f:function(e,t){e.exports="data:image/png;base64,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"},e008:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAUVBMVEUAAADLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v////S0tLj4+P5+fnx8fHt7e3d3d3b29v39/fgpLfnAAAAEnRSTlMA+bmniuQ9lXh3IR+UBtc8Cgik5ajTAAAAlUlEQVQoz32S6w7DIAiFUWttdVfAy/b+D7ps6RrXgd/fLyEHOPAlLdYbc7FLhF9mR1wy4rMwubk3E1XcqTTt4nx6ZOxp4b6pwHiAwzat4R/tM/NKKEDvLK5KqjqARChCCVaWFa9gi6yKBZ9llT0YVDAjpQ8cxBiFj9rKcXQomJXz6k/RX6kX4KbWRipb7sp2qKjvKvoCUkEknfERSz4AAAAASUVORK5CYII="},e9fb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MEM4RTZFNUVENDMxMUU4OUE0RThGRDZEM0ZDQjFBNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MEM4RTZFNkVENDMxMUU4OUE0RThGRDZEM0ZDQjFBNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwQzhFNkUzRUQ0MzExRTg5QTRFOEZENkQzRkNCMUE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQwQzhFNkU0RUQ0MzExRTg5QTRFOEZENkQzRkNCMUE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rXG1yAAABIpJREFUeNrcm8tPE1EUxk8bodAoGCPUiCYiGl+J+I7UxPiKoYq6cqV1qSU+NvJX6MKFiUpcQZfGjUarLlRcoBtFRKUKag1qoBXTUl88wniOvW1qmWlnpvfe6fglX0IKnJ5f753pveeecSiKAoK0Cr0V3YhegV6Cno+ei56FnkLH0V/REfQbdC/6CbpfREIOzrBNaD/6AHpREXE+oW+ig+jH3LIj2CJdiT6NHlDEaIDFdxebazH/XI4+ix5R5GiEvV+5bNhd6H7FGtH77pYB60JfVEpDF1k+uvM3coNair6G3gClox70YfQ7nnfjdegQegGUnobRPvTzQn/o1BFsO7qrREGB5dXF8ixqZBtZoGoofSXQO/KNcD7YZehudA3YRzG0Fz1oZBq70ddtBgos3+ssf92wF9BrwZ5ay/LXNY33ou+C/dWcy5ELW4F+xb5T7a4P6NXo31rT+PR/AkqqR5/SGtlKtq+sNRLxYddLuHevBxYunAfH/DuhqsrNNeN4/Ad0dN6HaDQB+/dtAq93pZF/H2HQv3JH9rhRUBKBTkxMQSQShctXQjA29pMrKMUcGvoK4+OTcDv01GgID+OaMY1PmUmIRjTzJRcb4wacBh0dTWZeq6ubZybUyVzYJraIMCz/0Z1QU1PFFVgN1FM7F44e2WEm3HLGl4H1m02sutoNgRM+bsBaoIFAM8yZU2k2TX/2DWqoyJoRJBI/4Up76C9oZjmDH0BrwKf7piUINF3TWkywVPkLc1mJFwEsEDRT7aRpvI3X3dPslFYF9XAFJXmdbBsHVgFrgp7gCvp3zexkBWzgDUxTtxCwRFDSSrpmwyKASQRGMGrX8PS0IhOUFCZY2vDOF7VA1QImWImgpC8EO4E/lIlckasB/7OmEw9KShKsAhKkBSwJNLNcnJQBS9OWPPP1aZD0eSedrConVGp3XRGbBz2wo7JBaery3jzouZKcbMMuFZSuUT3fw5z1kWDfyAalmxGtlSUDhwm2VzZoWpKBXxBstxWgFgB3p/eztN+rkw2qd2nJoYj3mfbr6UrFDStBJYzwjeyyTNBKUAnAweyyjAP91kzRTcQ2jfOUHmRFt8zIEnG7mcQ6Ou5z371ojXBn8IGZcO3Za+O0rqK/GY0UjSWELOrVgIeH40bDfGNcM2Ap6/NGo7W0bAaXqwwaGhZw372kgevrPVBRUQYHD24xGuJc9tpf7RTvNaTOR+yugqd49ItW+D/Umg2qBkuiA9xLNge9DCoH6loNJC5IdYOutyEoNYJ5c0dVa2RJ45DqHIvZDDTG8v6tVZbRErXINcuoZHAS5emDPK19hTrcnqEPUUmjxEGTLM+8p9V6exc3om9B6iS71EStBPsLgeoZ2bQoEB2A9ZUYaB/LS1f/gdNAYLoWtmYvvywW5dEEOttvUzsAc53k1Mkdtqipmt53jxXPCLRJfkagzYpnBLLtFvz0xyD6DI+nP0Q813OMfT8vKSJOBH0H3Qkcn+txCDxnobZA6u5eA6nzX6qCUJP2bNq9UUEC/Z0tBqiaQPVr6pt8hH4vIqE/AgwAO/AV5zGB5SwAAAAASUVORK5CYII="},eea2:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAABU1BMVEUAAABJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtxWFX9nXf9nXddTk9JRUtJRUtJRUtKRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUtJRUv9nXdJRUtJRUtJRUtJRUtJRUtJRUtLRktJRUv9nXdJRUtJRUtuV1RJRUtJRUtJRUv9nXf9nXdJRUtQSE39nXdJRUv9nXdTSk39nXf9nXf9nXf9nXdJRUv9nXdJRUv9nXfmknFUS079nXetdmNlUlJOR0z9nXdqVVP9nXeBYFn9nXf9nXf9nXf9nXf3mnX9nXf9nXdJRUv9nXfGgmmfb2DJg2rtlXP4mnXTiW25fGatdmSjcWFmU1JXTE5NR0zdjW/BgGiabF6Val2LZVt2W1ZQSE3yl3TmknGGY1pdT1BbTk9lkV4bAAAAV3RSTlMA8LdMu1K/i4WyWlUFRJFI7eXWraGAWPimlzDy6OGaZGAM/trJdko5KhTNs3ppG/fcxas+NPz65NCRVyUS9PDOopBwaB8d7uPbzsLBvbqVjn99Qzs3Lg3ZBMr9AAADoUlEQVRYw+2Z10PbMBDGFRvitDjT2Xsn7BGghbJL954OTWkpUKCl6/9/aqRE2NZJanHfqH9PR/T5iy1Ld6eAPDyuHOFMLOJjydcDWYcqG6jngSoSywRFtnraFFBN2GQJU0Ra5xuPmGICiKJJVCNc35ApQx2qVKkqhCCLppRChagqUbksC43jZEBJhlUn4dIcGSkTVZnEtRJQJRUyUoTG5HI/4jATwUMZEhs4zM/wZH7ylQiQw58n+0HzRpfhDA9NWleTmXy6zKhO8JAPGvvoKwK+3U/kYSzjBP56oOrJjEf7QRfwzlpKfrr2rgPVnmfsGXvGnvF/ZZyj+bj7V/n4Oj8f56BxHn8+3Q9mwSU/rAqi4DDdD1aB6gAPRaHxBClZ4whts1d8OLYqexGHqQ5Ca2yheX+Ih+qIwjQi0UxAW7hmZ+HhEhkJ29qKVDygrThVTyK0sWGZMaXcHMpiUlWVV78b0ktaQ1VHqtpBPKbEF+RURBnNiWVTiM+o6Dn9WXsX6xeoYioSoSeLkwqLobGNb1AzgGqymNSRx1WkIl4VEL3VCMWVdCgxOv4n31LB5FOH1tmMteij8aDUNyPJASrzaIGqUxDfFfsmpNml7TgIwS3qK4t826aUeZtUvVSiyFzkYyeB9CAfW9NYHjpFlEYw2wprNXDIhBUkxnvBLVJntYs/hwe/xkXuTdZNAn82yMmwhCP+EdCg722wdAx6C3eaq83XK4PCcgshUZUWv1a/42TcQIS1F5tdzOwDWmYkfQV6OcawYDuAj6dsB9DbG84abaoy421xw0LvPk9Cfcsu+koeS2Y8KzPW5wbtB2bL2SSYmLbbFqtN1qRO5gEPsbdccmtcIvuXvLcNRvWRtDVujeP0KI+es6rPZIO6NR7B4SKO7rOqb+f0tbpuY7N4XwDV/i+8zd0aK/SOm9D4CG/0f5pjlfbHcI4nXBnT/aHR/hiuCsOtcZDe1iug+kKSsitjmiqUfvB2mW28SXvecWuMyqnqPMmOj3k3fE93bYx2h+lgDMwwSSJuTk0MmzAFrVcQJEI3KzQ+M8nEMryxpcG9Y1oXxb8UQuPvR4MzGEtzmb63U5OwgnikB1V+Otzbs9PrHfw0uQkxrD27u993PTk9Gvg+QlxappQIO307uHquHx6eU4Uh6ujTEltY2vWo+KdjVqpIfANAXXAeA8NIQkhkm+KsT3XJGq81dCSlU+T/V4HbiLSnjFrUV5jwa0Hk4eFxKX4D8/QNdnNJ6E8AAAAASUVORK5CYII="},f47e:function(e,t,n){function r(e){wx.getNetworkType({success:function(t){e(t.networkType)}})}function o(){var e=wx.getSystemInfoSync();return{adt:encodeURIComponent(e.model),scl:e.pixelRatio,scr:e.windowWidth+"x"+e.windowHeight,lg:e.language,fl:e.version,jv:encodeURIComponent(e.system),tz:encodeURIComponent(e.platform)}}function i(){try{return wx.getStorageSync(g.prefix+"auid")}catch(e){}}function a(){try{var e=s();return wx.setStorageSync(g.prefix+"auid",e),e}catch(e){}}function u(){try{return wx.getStorageSync(g.prefix+"ssid")}catch(e){}}function c(){try{var e="s"+s();return wx.setStorageSync(g.prefix+"ssid",e),e}catch(e){}}function s(e){for(var t=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var r=Math.floor(10*Math.random()),o=t[r];t[r]=t[n-1],t[n-1]=o}for(n=r=0;5>n;n++)r=10*r+t[n];return(e||"")+(r+"")+ +new Date}function f(){try{var e=getCurrentPages(),t="/";return 0<e.length&&(t=e.pop().__route__),t}catch(e){console.log("get current page path error:"+e)}}function d(){var e={dm:"wechat.apps.xx",url:encodeURIComponent(f()+p(y.Data.pageQuery)),pvi:"",si:"",ty:0};return e.pvi=function(){var t=i();return t||(t=a(),e.ty=1),t}(),e.si=function(){var e=u();return e||(e=c()),e}(),e}function A(){var e=o();return r(function(e){try{wx.setStorageSync(g.prefix+"ntdata",e)}catch(e){}}),e.ct=wx.getStorageSync(g.prefix+"ntdata")||"4g",e}function l(){var e,t=y.Data.userInfo,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e+"="+t[e]);return t=n.join(";"),{r2:g.app_id,r4:"wx",ext:"v="+g.version+(null!==t&&""!==t?";ui="+encodeURIComponent(t):"")}}function p(e){if(!g.stat_param||!e)return"";e=v(e);var t,n=[];for(t in e)n.push(t+"="+e[t]);return 0<n.length?"?"+n.join("&"):""}function v(e){if(1>g.ignore_params.length)return e;var t,n={};for(t in e)0<=g.ignore_params.indexOf(t)||(n[t]=e[t]);return n}function h(){var e=Page;Page=function(t){var n=t.onLoad;t.onLoad=function(e){n&&n.call(this,e),y.Data.lastPageQuery=y.Data.pageQuery,y.Data.pageQuery=e,y.Data.lastPageUrl=y.Data.pageUrl,y.Data.pageUrl=f(),y.Data.show=!1,y.Page.init()},e(t)}}var g={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.10",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1,stat_param:!0},y={App:{init:function(e){"appID"in e&&(g.app_id=e.appID),"eventID"in e&&(g.event_id=e.eventID),"statShareApp"in e&&(g.stat_share_app=e.statShareApp),"statPullDownFresh"in e&&(g.stat_pull_down_fresh=e.statPullDownFresh),"statReachBottom"in e&&(g.stat_reach_bottom=e.statReachBottom),"ignoreParams"in e&&(g.ignore_params=e.ignoreParams),"statParam"in e&&(g.stat_param=e.statParam),c();try{"lauchOpts"in e&&(y.Data.lanchInfo=e.lauchOpts,y.Data.lanchInfo.landing=1)}catch(e){}"autoReport"in e&&e.autoReport&&h()}},Page:{init:function(){var e=getCurrentPages()[getCurrentPages().length-1];e.onShow&&function(){var t=e.onShow;e.onShow=function(){if(!0===y.Data.show){var e=y.Data.lastPageQuery;y.Data.lastPageQuery=y.Data.pageQuery,y.Data.pageQuery=e,y.Data.lastPageUrl=y.Data.pageUrl,y.Data.pageUrl=f()}y.Data.show=!0,y.Page.stat(),t.apply(this,arguments)}}(),g.stat_pull_down_fresh&&e.onPullDownRefresh&&function(){var t=e.onPullDownRefresh;e.onPullDownRefresh=function(){y.Event.stat(g.prefix+"pulldownfresh",{url:e.__route__}),t.apply(this,arguments)}}(),g.stat_reach_bottom&&e.onReachBottom&&function(){var t=e.onReachBottom;e.onReachBottom=function(){y.Event.stat(g.prefix+"reachbottom",{url:e.__route__}),t.apply(this,arguments)}}(),g.stat_share_app&&e.onShareAppMessage&&function(){var t=e.onShareAppMessage;e.onShareAppMessage=function(){return y.Event.stat(g.prefix+"shareapp",{url:e.__route__}),t.apply(this,arguments)}}()},multiStat:function(e,t){if(1==t)y.Page.stat(e);else{var n=getCurrentPages()[getCurrentPages().length-1];n.onShow&&function(){var t=n.onShow;n.onShow=function(){y.Page.stat(e),t.call(this,arguments)}}()}},stat:function(e){if(""!=g.app_id){var t=[],n=l();if(e&&(n.r2=e),e=[d(),n,A()],y.Data.lanchInfo){e.push({ht:y.Data.lanchInfo.scene}),y.Data.pageQuery&&y.Data.pageQuery._mta_ref_id&&e.push({rarg:y.Data.pageQuery._mta_ref_id});try{1==y.Data.lanchInfo.landing&&(n.ext+=";lp=1",y.Data.lanchInfo.landing=0)}catch(e){}}e.push({rdm:"/",rurl:0>=y.Data.lastPageUrl.length?y.Data.pageUrl+p(y.Data.lastPageQuery):encodeURIComponent(y.Data.lastPageUrl+p(y.Data.lastPageQuery))}),e.push({rand:+new Date}),n=0;for(var r=e.length;n<r;n++)for(var o in e[n])e[n].hasOwnProperty(o)&&t.push(o+"="+(void 0===e[n][o]?"":e[n][o]));wx.request({url:g.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(e,t){if(""!=g.event_id){var n=[],r=d(),o=l();r.dm="wxapps.click",r.url=e,o.r2=g.event_id;var i,a=void 0===t?{}:t,u=[];for(i in a)a.hasOwnProperty(i)&&u.push(encodeURIComponent(i)+"="+encodeURIComponent(a[i]));for(a=u.join(";"),o.r5=a,a=0,o=(r=[r,o,A(),{rand:+new Date}]).length;a<o;a++)for(var c in r[a])r[a].hasOwnProperty(c)&&n.push(c+"="+(void 0===r[a][c]?"":r[a][c]));wx.request({url:g.api_base+"?"+n.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null,pageQuery:null,lastPageQuery:null,pageUrl:"",lastPageUrl:"",show:!1}};e.exports=y}}]); 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./common/runtime.js"),require("./common/vendor.js"),require("./common/main.js"); 
 			}); 	require("app.js");
 		__wxRoute = 'components/AnswerBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/AnswerBox.js';	define("components/AnswerBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/AnswerBox"],{"018d":function(n,t,e){function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("9000")),r=o(e("6654")),u={props:["content"],data:function(){return{contents:this.content,authorAvatar:a.default,answerAvatar:r.default}}};t.default=u},1676:function(n,t,e){e.r(t);var o=e("018d"),a=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t.default=a.a},"2b59":function(n,t,e){e.r(t);var o=e("604a"),a=e("1676");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("a601");var u=e("2877"),c=Object(u.a)(a.default,o.a,o.b,!1,null,"3c330d24",null);t.default=c.exports},"604a":function(n,t,e){var o=function(){var n=this;n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},a601:function(n,t,e){var o=e("f2a4");e.n(o).a},f2a4:function(n,t,e){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/AnswerBox-create-component",{"components/AnswerBox-create-component":function(n,t,e){e("543d").createComponent(e("2b59"))}},[["components/AnswerBox-create-component"]]]); 
 			}); 	require("components/AnswerBox.js");
 		__wxRoute = 'components/AuthorBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/AuthorBox.js';	define("components/AuthorBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/AuthorBox"],{"7a5b":function(t,e,s){},"7ca2":function(t,e,s){var n=function(){var t=this;t.$createElement;t._self._c},a=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a})},"7db3":function(t,e,s){s.r(e);var n=s("7ca2"),a=s("be95");for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);s("bb19");var i=s("2877"),u=Object(i.a)(a.default,n.a,n.b,!1,null,"64c5f09e",null);e.default=u.exports},aebd:function(t,e,s){(function(t){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(s("9000")),o=n(s("0dc9")),i=n(s("cd71")),u=n(s("6654")),r=n(s("6ba3")),c=n(s("e008")),d=n(s("2321")),f=n(s("d7cf")),p=!1;t.createInnerAudioContext()&&(p=t.createInnerAudioContext());var l=getApp(),h={props:["content","needAsk","needlogin"],data:function(){return{authorAvatar:a.default,answerAvatar:l.globalData.user.avatarUrl?l.globalData.user.avatarUrl:u.default,contents:this.content,selectIcon:r.default,promptMessage:o.default,unselectIcon:c.default,originalQuce:i.default,active:-1,show:!0,audiores:{icon:d.default,tips:"点击播放",status:"pause",point:!0},startstatus:!0}},methods:{start:function(){this.startstatus&&(this.startstatus=!1,this.$parent.start())},overanswer:function(){this.startstatus&&(this.startstatus=!1,this.$parent.overAnswer())},getuserinfo:function(t){console.log(t),this.startstatus&&(this.startstatus=!1,this.$parent.getUserInfo(t))},formSubmit:function(t){this.$parent.formSubmit(t)},nextQuestion:function(t,e){if(this.active>-1||"return"==this.active)return!1;this.contents.audio&&this.pauseAudio(),this.show=!1,this.active=e,this.$parent.nextQuestion(t)},prevQuestion:function(){this.contents.audio&&this.pauseAudio(),this.show=!1,this.active="return",this.$parent.prevQuestion()},viewPicture:function(){this.$parent.viewPicture()},savePicture:function(t){this.$parent.resultLongPress(t)},playAudiao:function(t){var e=this;this.audiores.point=!1,this.show&&("pause"==this.audiores.status?(this.audiores.status="running",this.audiores.icon=f.default,this.audiores.tips="正在播放",p&&(p.src=t,p.play(),p.onEnded(function(){e.audiores.status="pause",e.audiores.icon=d.default,e.audiores.tips="点击播放"}))):(this.audiores.status="pause",this.audiores.icon=d.default,this.audiores.tips="点击播放",p&&p.stop()))},pauseAudio:function(){this.audiores.status="pause",this.audiores.icon=d.default,this.audiores.tips="点击播放",p&&p.stop()}}};e.default=h}).call(this,s("543d").default)},bb19:function(t,e,s){var n=s("7a5b");s.n(n).a},be95:function(t,e,s){s.r(e);var n=s("aebd"),a=s.n(n);for(var o in n)"default"!==o&&function(t){s.d(e,t,function(){return n[t]})}(o);e.default=a.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/AuthorBox-create-component",{"components/AuthorBox-create-component":function(t,e,s){s("543d").createComponent(s("7db3"))}},[["components/AuthorBox-create-component"]]]); 
 			}); 	require("components/AuthorBox.js");
 		__wxRoute = 'components/ChannelFour';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/ChannelFour.js';	define("components/ChannelFour.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/ChannelFour"],{2121:function(n,t,e){e.r(t);var o=e("967d"),a=e("3252");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("5176");var c=e("2877"),r=Object(c.a)(a.default,o.a,o.b,!1,null,"4f8fd974",null);t.default=r.exports},3252:function(n,t,e){e.r(t);var o=e("9c07"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t.default=a.a},5176:function(n,t,e){var o=e("b349");e.n(o).a},"967d":function(n,t,e){var o=function(){var n=this;n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},"9c07":function(n,t,e){(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(n){return n&&n.__esModule?n:{default:n}}(e("94f5")),a=getApp(),u=new o.default,c={props:["list"],data:function(){return{}},computed:{},created:function(){},methods:{requestbannerlist:function(){},jump:function(t){1==t.isjump?n.navigateToMiniProgram({appId:t.appid,path:t.path,success:function(){2==t.type&&u.saveOutRecord(t,a.globalData.appid)}}):n.navigateTo({url:t.path})}}};t.default=c}).call(this,e("543d").default)},b349:function(n,t,e){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/ChannelFour-create-component",{"components/ChannelFour-create-component":function(n,t,e){e("543d").createComponent(e("2121"))}},[["components/ChannelFour-create-component"]]]); 
 			}); 	require("components/ChannelFour.js");
 		__wxRoute = 'components/GridBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/GridBox.js';	define("components/GridBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/GridBox"],{"0585":function(t,e,n){n.r(e);var a=n("e722"),o=n("eba2");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("60d6");var r=n("2877"),c=Object(r.a)(o.default,a.a,a.b,!1,null,"6ec0f32e",null);e.default=c.exports},"0b7f":function(t,e,n){(function(t){function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("48b8")),i=n("c7c6"),r=a(n("f47e")),c=getApp(),d={props:["recommend"],data:function(){return{recommendP:this.recommend,moreIcon:o.default}},methods:{viewUrl:function(e){if(e.is_jump)if("constell"==e.content){var n=t.getStorageSync("star");n?(r.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_1"}),t.navigateToMiniProgram({appId:e.appid,path:e.path+"?star="+n+"&target="+e.appid+"&from=1109659848&channel=3",success:function(){r.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_2"}),r.default.Event.stat("jumpluka",{hasstar:1})}})):(e.channel=3,t.setStorageSync("MiniProgram",e),r.default.Event.stat("selectstar",{showorcencal:c.globalData.ver+"_show"}),this.$parent.selectstar=!0)}else r.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_1"}),t.navigateToMiniProgram({appId:e.appid,path:e.path,success:function(){r.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_2"})}});else{console.log(e.id);var a=t.getStorageSync("Gridlist")?t.getStorageSync("Gridlist"):[];-1==a.indexOf(e.id)&&a.unshift(e.id),t.setStorageSync("Gridlist",a),(0,i.playGame)(e)}}},watch:{recommend:{immediate:!0,handler:function(t){this.recommendP=t}}}};e.default=d}).call(this,n("543d").default)},"60d6":function(t,e,n){var a=n("e9a0");n.n(a).a},e722:function(t,e,n){var a=function(){var t=this;t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},e9a0:function(t,e,n){},eba2:function(t,e,n){n.r(e);var a=n("0b7f"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/GridBox-create-component",{"components/GridBox-create-component":function(t,e,n){n("543d").createComponent(n("0585"))}},[["components/GridBox-create-component"]]]); 
 			}); 	require("components/GridBox.js");
 		__wxRoute = 'components/ListBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/ListBox.js';	define("components/ListBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/ListBox"],{"16c6":function(t,a,e){(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("c7c6"),i=e("615d"),o=function(t){return t&&t.__esModule?t:{default:t}}(e("f47e")),p=getApp(),s={name:"ListBox",props:["list"],data:function(){return{lists:this.list}},methods:{toQuestion:function(a){if(a.is_jump)if("constell"==a.content){var e=t.getStorageSync("star");e?(o.default.Event.stat("navigateMiniProgram",{minitype:a.appid+"_1"}),t.navigateToMiniProgram({appId:a.appid,path:a.path+"?star="+e+"&target="+a.appid+"&from=1109659848&channel=4",success:function(){o.default.Event.stat("navigateMiniProgram",{minitype:a.appid+"_2"});var e=t.getStorageSync("appidList")?t.getStorageSync("appidList"):[];-1==e.indexOf(a.appid)&&e.unshift(a.appid),t.setStorageSync("appidList",e),2==a.type&&(0,i.saveOutRecord)(p,4,p.globalData.appid,a.appid)}})):(a.channel=4,t.setStorageSync("MiniProgram",a),o.default.Event.stat("selectstar",{showorcencal:p.globalData.ver+"_show"}),(void 0).$parent.selectstar=!0)}else o.default.Event.stat("navigateMiniProgram",{minitype:a.appid+"_1"}),t.navigateToMiniProgram({appId:a.appid,path:a.path,success:function(){o.default.Event.stat("navigateMiniProgram",{minitype:a.appid+"_2"});var e=t.getStorageSync("appidList")?t.getStorageSync("appidList"):[];-1==e.indexOf(a.appid)&&e.unshift(a.appid),t.setStorageSync("appidList",e),2==a.type&&(0,i.saveOutRecord)(p,4,p.globalData.appid,a.appid)}});else{var s=t.getStorageSync("testlist")?t.getStorageSync("testlist"):[];s.unshift(a.id),t.setStorageSync("testlist",s),(0,n.playGame)(a)}}},watch:{list:{immediate:!0,handler:function(t){this.lists=t}}}};a.default=s}).call(this,e("543d").default)},"16d4":function(t,a,e){e.r(a);var n=e("16c6"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a.default=i.a},"37fc":function(t,a,e){},"493d":function(t,a,e){e.r(a);var n=e("b0a6"),i=e("16d4");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("b468");var p=e("2877"),s=Object(p.a)(i.default,n.a,n.b,!1,null,"734ceb00",null);a.default=s.exports},b0a6:function(t,a,e){var n=function(){var t=this;t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},b468:function(t,a,e){var n=e("37fc");e.n(n).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/ListBox-create-component",{"components/ListBox-create-component":function(t,a,e){e("543d").createComponent(e("493d"))}},[["components/ListBox-create-component"]]]); 
 			}); 	require("components/ListBox.js");
 		__wxRoute = 'components/LoadBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/LoadBox.js';	define("components/LoadBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/LoadBox"],{"0b8d":function(n,o,e){},"95ed":function(n,o,e){e.r(o);var t=e("a5a4"),a=e.n(t);for(var c in t)"default"!==c&&function(n){e.d(o,n,function(){return t[n]})}(c);o.default=a.a},a5a4:function(n,o,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={name:"LoadBox",props:["show"],data:function(){return{isActive:this.show}},watch:{show:{immediate:!0,handler:function(n){this.isActive=n}}}};o.default=t},c216:function(n,o,e){var t=function(){var n=this;n.$createElement;n._self._c},a=[];e.d(o,"a",function(){return t}),e.d(o,"b",function(){return a})},cf2d:function(n,o,e){var t=e("0b8d");e.n(t).a},e82a:function(n,o,e){e.r(o);var t=e("c216"),a=e("95ed");for(var c in a)"default"!==c&&function(n){e.d(o,n,function(){return a[n]})}(c);e("cf2d");var u=e("2877"),r=Object(u.a)(a.default,t.a,t.b,!1,null,"168808a5",null);o.default=r.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/LoadBox-create-component",{"components/LoadBox-create-component":function(n,o,e){e("543d").createComponent(e("e82a"))}},[["components/LoadBox-create-component"]]]); 
 			}); 	require("components/LoadBox.js");
 		__wxRoute = 'components/NavgationBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/NavgationBox.js';	define("components/NavgationBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/NavgationBox"],{"144f":function(e,t,a){var n=a("6c33");a.n(n).a},3206:function(e,t,a){(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(a("bfc5")),n(a("c7cd")),n(a("eea2")),n(a("b902")),n(a("939d")),n(a("c571"));var o=n(a("f47e")),c=!0,i=getApp(),s={name:"NavgationBox",props:["page","navdata"],data:function(){return{current_page:this.page,boxVideoAd:"",show:!1,recommendP:i.globalData.adbox,canclick:!0}},methods:{switchPage:function(t,a){var n=this;if(a==this.page)return!1;if(1==t.type)10==parseInt(this.current_page)?(console.log("reLaunch"),e.reLaunch({url:t.path})):(console.log("switchTab"),e.switchTab({url:t.path}));else if(2==t.type)o.default.Event.stat("navigateMiniProgram",{minitype:t.appid+"_1"}),e.navigateToMiniProgram({appId:t.appid,path:t.path,success:function(){o.default.Event.stat("navigateMiniProgram",{minitype:t.appid+"_2"})}});else if(3==t.type){o.default.Event.stat("indexswitch",{switchtype:i.globalData.ver+"_3"}),this.canclick=!1,this.recommendP=i.globalData.adbox,c=!0,e.showLoading({title:"正在加载 ",mask:!0});try{var s=qq.createAppBox({adUnitId:"319e42e9f1046f5c3323424e28ad35e9"});s.load().then(function(){s.show().then(function(){console.log("show"),e.hideLoading()}).catch(function(){e.hideLoading(),n.show=!0,o.default.Event.stat("boxadshow",{boxtype:2}),console.log("fffffffffffff")})}).catch(function(){e.hideLoading(),n.show=!0,console.log("aaaaaaaa")}),s.onClose(function(e){c&&(c=!1,n.canclick=!0,console.log(e),s.destroy(),o.default.Event.stat("boxadshow",{boxtype:1}))}),s.onError(function(e){c&&(console.log(e),c=!1,n.show=!0,o.default.Event.stat("boxadshow",{boxtype:2}))})}catch(t){console.log("eeeeeeeeeeeeeeeee"),e.hideLoading(),this.show=!0,o.default.Event.stat("boxadshow",{boxtype:2})}}},clickcancel:function(){this.show=!1,this.canclick=!0},jumpother:function(t){e.navigateToMiniProgram({appId:t.appid,path:t.path})}}};t.default=s}).call(this,a("543d").default)},"326a":function(e,t,a){a.r(t);var n=a("bc99"),o=a("ecb9");for(var c in o)"default"!==c&&function(e){a.d(t,e,function(){return o[e]})}(c);a("144f");var i=a("2877"),s=Object(i.a)(o.default,n.a,n.b,!1,null,"203e0491",null);t.default=s.exports},"6c33":function(e,t,a){},bc99:function(e,t,a){var n=function(){var e=this;e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},ecb9:function(e,t,a){a.r(t);var n=a("3206"),o=a.n(n);for(var c in n)"default"!==c&&function(e){a.d(t,e,function(){return n[e]})}(c);t.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/NavgationBox-create-component",{"components/NavgationBox-create-component":function(e,t,a){a("543d").createComponent(a("326a"))}},[["components/NavgationBox-create-component"]]]); 
 			}); 	require("components/NavgationBox.js");
 		__wxRoute = 'components/PoptestBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/PoptestBox.js';	define("components/PoptestBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/PoptestBox"],{"344f":function(t,e,n){var o=n("55e8");n.n(o).a},"55e8":function(t,e,n){},6234:function(t,e,n){n.r(e);var o=n("aace"),a=n("bf4a");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("344f");var c=n("2877"),s=Object(c.a)(a.default,o.a,o.b,!1,null,"49cdcde7",null);e.default=s.exports},6458:function(t,e,n){(function(t){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("1418")),i=o(n("df8f")),c=n("c7c6"),s=o(n("f47e")),u=getApp(),l={props:["indextest"],data:function(){return{closeIcon:a.default,topImg:i.default,indeximgs:this.indextest}},watch:{content:{immediate:!0,handler:function(t){this.contents=t}}},methods:{closePopup:function(){this.$parent.dailybox=!1,this.$parent.showtestbox=!1,s.default.Event.stat("indextestBox",{clicktype:u.globalData.ver+"_1"})},toQuestion:function(t){s.default.Event.stat("indextestBox",{clicktype:u.globalData.ver+"_2"}),(0,c.playGame)({gid:t}),this.$parent.showtestbox=!1},jump:function(){console.log(this.indeximgs.path),this.$parent.showindeximg=!1,s.default.Event.stat("index_img",{cilicktype:2}),2==this.indeximgs.type?t.navigateTo({url:this.indeximgs.path}):1==this.indeximgs.type&&(t.switchTab({url:this.indeximgs.path}),t.setStorageSync("category_cid",this.indeximgs.parame.cid))}}};e.default=l}).call(this,n("543d").default)},aace:function(t,e,n){var o=function(){var t=this;t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},bf4a:function(t,e,n){n.r(e);var o=n("6458"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=a.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/PoptestBox-create-component",{"components/PoptestBox-create-component":function(t,e,n){n("543d").createComponent(n("6234"))}},[["components/PoptestBox-create-component"]]]); 
 			}); 	require("components/PoptestBox.js");
 		__wxRoute = 'components/PopupBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/PopupBox.js';	define("components/PopupBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/PopupBox"],{"240f":function(t,n,e){e.r(n);var o=e("fec2"),i=e("48c2");for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);e("fc8f");var a=e("2877"),s=Object(a.a)(i.default,o.a,o.b,!1,null,"0d6b6140",null);n.default=s.exports},"48c2":function(t,n,e){e.r(n);var o=e("a879"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n.default=i.a},a879:function(t,n,e){(function(t){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("1418")),c=o(e("6f91")),a=e("c7c6"),s=o(e("f47e")),u={props:["content","indeximg"],data:function(){return{closeIcon:i.default,topImg:c.default,contents:this.content,indeximgs:this.indeximg}},watch:{content:{immediate:!0,handler:function(t){this.contents=t}}},methods:{closePopup:function(){this.$parent.dailybox=!1,this.$parent.showindeximg=!1,s.default.Event.stat("index_img",{cilicktype:1})},showAllContents:function(){this.$parent.dailybox=!1,this.$parent.scrollToLists()},toQuestion:function(t){(0,a.playGame)(t)},jump:function(){console.log(this.indeximgs.path),this.$parent.showindeximg=!1,s.default.Event.stat("index_img",{cilicktype:2}),2==this.indeximgs.type?t.navigateTo({url:this.indeximgs.path}):1==this.indeximgs.type&&(t.switchTab({url:this.indeximgs.path}),t.setStorageSync("category_cid",this.indeximgs.parame.cid))}}};n.default=u}).call(this,e("543d").default)},cea6:function(t,n,e){},fc8f:function(t,n,e){var o=e("cea6");e.n(o).a},fec2:function(t,n,e){var o=function(){var t=this;t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/PopupBox-create-component",{"components/PopupBox-create-component":function(t,n,e){e("543d").createComponent(e("240f"))}},[["components/PopupBox-create-component"]]]); 
 			}); 	require("components/PopupBox.js");
 		__wxRoute = 'components/QuestionNum';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/QuestionNum.js';	define("components/QuestionNum.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/QuestionNum"],{1594:function(n,t,e){e.r(t);var o=e("314d"),u=e("bb1f");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("59bd");var c=e("2877"),r=Object(c.a)(u.default,o.a,o.b,!1,null,"d2b10254",null);t.default=r.exports},"314d":function(n,t,e){var o=function(){var n=this;n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},"59bd":function(n,t,e){var o=e("8708");e.n(o).a},8708:function(n,t,e){},bb1f:function(n,t,e){e.r(t);var o=e("fee6"),u=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t.default=u.a},fee6:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"QuestionNum",props:["content"],data:function(){return{contents:this.content}}};t.default=o}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/QuestionNum-create-component",{"components/QuestionNum-create-component":function(n,t,e){e("543d").createComponent(e("1594"))}},[["components/QuestionNum-create-component"]]]); 
 			}); 	require("components/QuestionNum.js");
 		__wxRoute = 'components/SearchBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/SearchBox.js';	define("components/SearchBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/SearchBox"],{"00f3":function(e,n,o){(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(e){return e&&e.__esModule?e:{default:e}}(o("a35f")),a={name:"SearchBox",data:function(){return{searchIcon:t.default,keyword:""}},methods:{toSearch:function(){var n=this.keyword;this.keyword="",e.navigateTo({url:"/pages/Search/Search?keyword=".concat(n)})}}};n.default=a}).call(this,o("543d").default)},"1e11":function(e,n,o){var t=o("b962");o.n(t).a},b60e:function(e,n,o){var t=function(){var e=this;e.$createElement;e._self._c},a=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return a})},b962:function(e,n,o){},f1fb:function(e,n,o){o.r(n);var t=o("b60e"),a=o("f3b8");for(var c in a)"default"!==c&&function(e){o.d(n,e,function(){return a[e]})}(c);o("1e11");var r=o("2877"),u=Object(r.a)(a.default,t.a,t.b,!1,null,"46462fb7",null);n.default=u.exports},f3b8:function(e,n,o){o.r(n);var t=o("00f3"),a=o.n(t);for(var c in t)"default"!==c&&function(e){o.d(n,e,function(){return t[e]})}(c);n.default=a.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/SearchBox-create-component",{"components/SearchBox-create-component":function(e,n,o){o("543d").createComponent(o("f1fb"))}},[["components/SearchBox-create-component"]]]); 
 			}); 	require("components/SearchBox.js");
 		__wxRoute = 'components/SelectStar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/SelectStar.js';	define("components/SelectStar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/SelectStar"],{"457b0":function(e,t,n){var a=n("81ed");n.n(a).a},"64fa":function(e,t,n){var a=function(){var e=this;e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"6cc0":function(e,t,n){n.r(t);var a=n("64fa"),o=n("9028");for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);n("457b0");var r=n("2877"),u=Object(r.a)(o.default,a.a,a.b,!1,null,"ade49e5a",null);t.default=u.exports},"74a7":function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("6b0d")),c=a(n("e9fb")),r=a(n("f47e")),u=getApp(),l={data:function(){return{bindbg:o.default,bindclose:c.default,starsArr:[[3,"白羊座","3.21~4.19","03/21-04/19"],[4,"金牛座","4.20~5.20","04/20-05/20"],[5,"双子座","5.21~6.21","05/21-06/21"],[6,"巨蟹座","6.22~7.22","06/22-07/22"],[7,"狮子座","7.23~8.22","7.23~8.22"],[8,"处女座","8.23~9.22","8.23~9.22"],[9,"天秤座","9.23~10.23","09/23-10/23"],[10,"天蝎座","10.24~11.22","10/24-11/22"],[11,"射手座","11.23~12.21","11/23-12/21"],[12,"摩羯座","12.22~1.19","12/22-01/19"],[1,"水瓶座","1.20~2.18","01/20-02/18"],[2,"双鱼座","2.19~3.20","02/19-03/20"]]}},methods:{bindStar:function(e,t){this.$parent.bindStar(e)},closeBindBox:function(){this.$parent.selectstar=!1,r.default.Event.stat("selectstar",{showorcencal:u.globalData.ver+"_close"})}}};t.default=l},"81ed":function(e,t,n){},9028:function(e,t,n){n.r(t);var a=n("74a7"),o=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/SelectStar-create-component",{"components/SelectStar-create-component":function(e,t,n){n("543d").createComponent(n("6cc0"))}},[["components/SelectStar-create-component"]]]); 
 			}); 	require("components/SelectStar.js");
 		__wxRoute = 'components/SwiperBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/SwiperBox.js';	define("components/SwiperBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/SwiperBox"],{"0251":function(t,n,e){e.r(n);var a=e("656a"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n.default=o.a},"235b":function(t,n,e){var a=e("d576");e.n(a).a},"656a":function(t,n,e){(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("c7c6"),o=function(t){return t&&t.__esModule?t:{default:t}}(e("f47e")),i=getApp(),r={name:"SwiperBox",props:["banners"],data:function(){return{duration:800,interval:3e3,indicatorDots:!0,autoplay:!0,bannersP:this.banners}},computed:{},methods:{openQuiz:function(n){if(1==n.is_jump)if(2==n.type){var e=t.getStorageSync("star");"constell"==n.content?e?(o.default.Event.stat("navigateMiniProgram",{minitype:n.appid+"_1"}),t.navigateToMiniProgram({appId:n.appid,path:n.path+"?star="+e+"&target="+n.appid+"&from=1109659848&channel=2",success:function(){o.default.Event.stat("navigateMiniProgram",{minitype:n.appid+"_2"})}})):(n.channel=2,t.setStorageSync("MiniProgram",n),o.default.Event.stat("selectstar",{showorcencal:i.globalData.ver+"_show"}),this.$parent.selectstar=!0):(o.default.Event.stat("navigateMiniProgram",{minitype:n.appid+"_1"}),t.navigateToMiniProgram({appId:n.appid,path:n.path,success:function(){o.default.Event.stat("navigateMiniProgram",{minitype:n.appid+"_2"})}}))}else 1==n.type&&(t.switchTab({url:n.path}),t.setStorageSync("category_cid",n.parame.cid));else(0,a.playGame)(n)}},watch:{banners:{immediate:!0,handler:function(t){console.log(t),this.bannersP=t}}}};n.default=r}).call(this,e("543d").default)},b895:function(t,n,e){var a=function(){var t=this;t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},d576:function(t,n,e){},f265:function(t,n,e){e.r(n);var a=e("b895"),o=e("0251");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("235b");var r=e("2877"),c=Object(r.a)(o.default,a.a,a.b,!1,null,"4b392d42",null);n.default=c.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/SwiperBox-create-component",{"components/SwiperBox-create-component":function(t,n,e){e("543d").createComponent(e("f265"))}},[["components/SwiperBox-create-component"]]]); 
 			}); 	require("components/SwiperBox.js");
 		__wxRoute = 'components/invinbg-image-cropper/invinbg-image-cropper';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/invinbg-image-cropper/invinbg-image-cropper.js';	define("components/invinbg-image-cropper/invinbg-image-cropper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/invinbg-image-cropper/invinbg-image-cropper"],{"0a84":function(t,i,e){},"58a2":function(t,i,e){(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"image-cropper",props:{cropWidth:{type:Number,default:200},cropHeight:{type:Number,default:200},cropFixed:{type:Boolean,default:!1},src:{type:String},showResetBtn:{type:Boolean,default:!0},showRotateBtn:{type:Boolean,default:!0}},data:function(){var i=t.getSystemInfoSync();return{show:!1,scale:1,rotate:0,cropW:0,cropH:0,cropOldW:0,cropOldH:0,sysInfo:i,pixelRatio:i.pixelRatio,imageRealWidth:0,imageRealHeight:0,cropOffsertX:0,cropOffsertY:0,startX:0,startY:0,border:5,x:0,y:0,startL:0,oldScale:1}},watch:{src:function(t){t.length>0&&this.init()},show:function(t){t||(this.src="")}},computed:{containerTop:function(){return 0},containerHeight:function(){return this.windowHeight-48},windowWidth:function(){return this.sysInfo.windowWidth},windowHeight:function(){return this.sysInfo.windowHeight},imageRatio:function(){return this.imageRealHeight>0?this.imageRealWidth/this.imageRealHeight:0},windowRation:function(){return this.windowHeight>0?this.windowWidth/this.windowHeight:0},imageWidth:function(){return this.imageRatio/this.windowRation>=1?this.windowWidth:this.windowWidth*this.imageRatio/this.windowRation},imageHeight:function(){return this.imageRatio/this.windowRation>=1?this.windowWidth/this.imageRatio:this.windowHeight}},methods:{rotateHandler:function(){3==this.rotate?this.rotate=0:++this.rotate},init:function(){this.rotate=0,this.scale=1,this.cropW=this.cropWidth,this.cropH=this.cropHeight,t.showLoading({title:"图片加载中..."}),this.loadImage(this.src).then(function(i){t.hideLoading()}).catch(function(i){t.hideLoading(),t.showModal({title:"标题",content:"图片加载失败"})})},loadImage:function(i){var e=this;return new Promise(function(o,s){t.getImageInfo({src:i,success:function(t){e.imageRealWidth=t.width,e.imageRealHeight=t.height,e.cropOffsertX=e.windowWidth/2-e.cropW/2,e.cropOffsertY=e.windowHeight/2-e.cropH/2,e.show=!0,e.$nextTick(function(){e.x=e.windowWidth/2-e.imageWidth/2,e.y=e.containerHeight/2-e.imageHeight/2}),o(t)},fail:function(t){e.show=!1,s(t)}})})},cancel:function(){this.show=!1,this.$emit("cancel")},confirm:function(i){t.showLoading({title:"裁剪中..."});var e=this,o=t.createCanvasContext("myCanvas",e),s=e.pixelRatio,r=e.src,a=e.imageWidth*e.scale,n=e.imageHeight*e.scale,h=e.rotate,c=e.cropOffsertX-e.x-(e.imageWidth-a)/2,p=e.cropOffsertY-e.y-(e.imageHeight-n)/2;switch(o.setFillStyle("white"),o.fillRect(0,0,a,n),o.save(),o.rotate(90*h*Math.PI/180),h){case 1:c+=(n-a)/2,p-=(n-a)/2,o.drawImage(r,-p,c,a,-n);break;case 2:o.drawImage(r,c,p,-a,-n);break;case 3:c+=(n-a)/2,p-=(n-a)/2,o.drawImage(r,p,-c,-a,n);break;default:o.drawImage(r,-c,-p,a,n)}o.restore(),o.draw(!1,function(){t.canvasToTempFilePath({canvasId:"myCanvas",destWidth:e.cropW*s,destHeight:e.cropH*s,success:function(o){t.hideLoading(),i.detail.tempFilePath=o.tempFilePath,e.show=!1,e.$emit("confirm",i)},fail:function(i){t.hideLoading(),t.showModal({title:"提示",content:"裁剪失败"})}},e)})},imgTouchStart:function(i){if(2==i.touches.length){this.oldScale=this.scale,this.scaling=!0;var e=i.touches[0].pageX-i.touches[1].pageX,o=i.touches[0].pageY-i.touches[1].pageY,s=Math.sqrt(Math.pow(e,2)+Math.pow(o,2));this.startL=Math.max(e,o,s),t.showModal({content:this.startL})}else this.startX=i.touches[0].pageX-this.x,this.startY=i.touches[0].pageY-this.y},imgMoveing:function(t){if(this.scaling){var i=this.oldScale,e=t.touches[0].pageX-t.touches[1].pageX,o=t.touches[0].pageY-t.touches[1].pageY,s=Math.sqrt(Math.pow(e,2)+Math.pow(o,2)),r=Math.max(e,o,s)-this.startL,a=1,n=(a=(a=a/this.imageWidth>a/this.imageHeight?a/this.imageHeight:a/this.imageWidth)>.1?.1:a)*r;r>0?i+=Math.abs(n):r<0&&i>Math.abs(n)&&(i-=Math.abs(n)),this.scale=i}else{var h=t.touches[0].pageX-this.startX,c=t.touches[0].pageY-this.startY;this.x=h,this.y=c}},imgMoveEnd:function(){var t=this;setTimeout(function(){t.scaling=!1},100)},touchStart:function(t){this.startX=t.touches[0].pageX-this.cropOffsertX,this.startY=t.touches[0].pageY-this.cropOffsertY,this.cropOldW=this.cropW,this.cropOldH=this.cropH},cropMoveing:function(t){var i=this._cropX(t.touches[0].pageX-this.startX),e=this._cropY(t.touches[0].pageY-this.startY);this.cropOffsertX=i,this.cropOffsertY=e},dragMove:function(t,i){if(this.cropFixed)return!1;var e=t.touches[0].pageX-this.startX,o=t.touches[0].pageY-this.startY;switch(i){case"left-top":this._cropMoveLeft(e),this._cropMoveTop(o);break;case"middle-top":this._cropMoveTop(o);break;case"right-top":this._cropMoveTop(o),this._cropMoveRight(e);break;case"middle-right":this._cropMoveRight(e);break;case"right-bottom":this._cropMoveRight(e),this._cropMoveBottom(o);break;case"middle-bottom":this._cropMoveBottom(o);break;case"left-bottom":this._cropMoveBottom(o),this._cropMoveLeft(e);break;case"middle-left":this._cropMoveLeft(e)}},_cropMoveTop:function(t){var i=this._cropY(t);this.cropH+=this.cropOffsertY-i,this.cropOffsertY=i},_cropMoveRight:function(t){if(this.cropOldW+t>=this.windowWidth-this.border)return!1;this.cropW=this.cropOldW+(t-this.cropOffsertX)},_cropMoveBottom:function(t){if(this.cropOldH+t>=this.windowHeight-this.containerTop-this.border)return!1;this.cropH=this.cropOldH+(t-this.cropOffsertY)},_cropMoveLeft:function(t){var i=this._cropY(t);this.cropW+=this.cropOffsertX-i,this.cropOffsertX=i},_cropX:function(t){return t<=this.border?this.border:t+this.cropW>=this.windowWidth-this.border?this.windowWidth-this.cropW-this.border:t},_cropY:function(t){return t<=this.border?this.border:t+this.cropH>=this.windowHeight-this.containerTop-this.border?this.windowHeight-this.cropH-this.containerTop-this.border:t}}};i.default=e}).call(this,e("543d").default)},"6a95":function(t,i,e){var o=function(){var t=this;t.$createElement;t._self._c},s=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return s})},c0e6:function(t,i,e){e.r(i);var o=e("6a95"),s=e("d9ef");for(var r in s)"default"!==r&&function(t){e.d(i,t,function(){return s[t]})}(r);e("dd83");var a=e("2877"),n=Object(a.a)(s.default,o.a,o.b,!1,null,"308e31bc",null);i.default=n.exports},d9ef:function(t,i,e){e.r(i);var o=e("58a2"),s=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(i,t,function(){return o[t]})}(r);i.default=s.a},dd83:function(t,i,e){var o=e("0a84");e.n(o).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/invinbg-image-cropper/invinbg-image-cropper-create-component",{"components/invinbg-image-cropper/invinbg-image-cropper-create-component":function(t,i,e){e("543d").createComponent(e("c0e6"))}},[["components/invinbg-image-cropper/invinbg-image-cropper-create-component"]]]); 
 			}); 	require("components/invinbg-image-cropper/invinbg-image-cropper.js");
 		__wxRoute = 'components/tanme/msgimg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tanme/msgimg.js';	define("components/tanme/msgimg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tanme/msgimg"],{1106:function(n,t,e){var a=e("8671");e.n(a).a},"38b9":function(n,t,e){e.r(t);var a=e("b1a6"),o=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t.default=o.a},8671:function(n,t,e){},b1a6:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"msgimg",props:{m_img:{default:""}},data:function(){return{}},methods:{}};t.default=a},cc9a:function(n,t,e){e.r(t);var a=e("f922"),o=e("38b9");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("1106");var u=e("2877"),r=Object(u.a)(o.default,a.a,a.b,!1,null,"7c1f000d",null);t.default=r.exports},f922:function(n,t,e){var a=function(){var n=this;n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/tanme/msgimg-create-component",{"components/tanme/msgimg-create-component":function(n,t,e){e("543d").createComponent(e("cc9a"))}},[["components/tanme/msgimg-create-component"]]]); 
 			}); 	require("components/tanme/msgimg.js");
 		__wxRoute = 'components/tanme/resultimg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tanme/resultimg.js';	define("components/tanme/resultimg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tanme/resultimg"],{"01f9":function(n,e,t){var o=t("db51");t.n(o).a},"181b":function(n,e,t){t.r(e);var o=t("b180"),a=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e.default=a.a},"9d9f":function(n,e,t){var o=function(){var n=this;n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},b180:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"resimg",props:{r_img:{default:""},resheight:{default:""}},data:function(){return{}},methods:{previewimg:function(){this.$emit("fpreview")},saveimg:function(){this.$emit("fsaveimg")}}};e.default=o},d609:function(n,e,t){t.r(e);var o=t("9d9f"),a=t("181b");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);t("01f9");var u=t("2877"),i=Object(u.a)(a.default,o.a,o.b,!1,null,"ce6b6a06",null);e.default=i.exports},db51:function(n,e,t){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/tanme/resultimg-create-component",{"components/tanme/resultimg-create-component":function(n,e,t){t("543d").createComponent(t("d609"))}},[["components/tanme/resultimg-create-component"]]]); 
 			}); 	require("components/tanme/resultimg.js");
 		__wxRoute = 'components/tanme/userimg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tanme/userimg.js';	define("components/tanme/userimg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tanme/userimg"],{"1df7":function(n,e,t){t.r(e);var o=t("4dcf"),a=t("9dbd");for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);t("98d1");var r=t("2877"),c=Object(r.a)(a.default,o.a,o.b,!1,null,"be12ff2c",null);e.default=c.exports},2617:function(n,e,t){},"4dcf":function(n,e,t){var o=function(){var n=this;n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},"98d1":function(n,e,t){var o=t("2617");t.n(o).a},"9dbd":function(n,e,t){t.r(e);var o=t("f465"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e.default=a.a},f465:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"userimg",props:{userurl:{default:""},u_img:{default:""}},data:function(){return{}},methods:{}};e.default=o}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/tanme/userimg-create-component",{"components/tanme/userimg-create-component":function(n,e,t){t("543d").createComponent(t("1df7"))}},[["components/tanme/userimg-create-component"]]]); 
 			}); 	require("components/tanme/userimg.js");
 		__wxRoute = 'components/tanme/usermsg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tanme/usermsg.js';	define("components/tanme/usermsg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tanme/usermsg"],{"498c":function(n,e,t){t.r(e);var o=t("547a"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e.default=a.a},"547a":function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"umsg",props:{ucontent:{default:""},userurl:{default:""}},data:function(){return{}}};e.default=o},"5c65":function(n,e,t){t.r(e);var o=t("b7e3"),a=t("498c");for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);t("dbd7");var c=t("2877"),r=Object(c.a)(a.default,o.a,o.b,!1,null,"d8fb415c",null);e.default=r.exports},"71f1":function(n,e,t){},b7e3:function(n,e,t){var o=function(){var n=this;n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},dbd7:function(n,e,t){var o=t("71f1");t.n(o).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/tanme/usermsg-create-component",{"components/tanme/usermsg-create-component":function(n,e,t){t("543d").createComponent(t("5c65"))}},[["components/tanme/usermsg-create-component"]]]); 
 			}); 	require("components/tanme/usermsg.js");
 		__wxRoute = 'components/tarotmark/Result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tarotmark/Result.js';	define("components/tarotmark/Result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tarotmark/Result"],{"00d8":function(t,e,a){},"0fbb":function(t,e,a){var n=a("00d8");a.n(n).a},"2d62":function(t,e,a){a.r(e);var n=a("faf6"),i=a("4956");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("0fbb");var r=a("2877"),o=Object(r.a)(i.default,n.a,n.b,!1,null,"7801d948",null);e.default=o.exports},4956:function(t,e,a){a.r(e);var n=a("a84a"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e.default=i.a},a84a:function(t,e,a){(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,function(t){t&&t.__esModule}(a("f47e"));var n={props:{info:{type:Object}},data:function(){return{nav_height:0,id:!1,save_statues:!1,page_statues:!1,canvas:{width:"375px",height:"565px"},img_src:!1,images:{more:!1,share:!1,again:!1,result_bottom:!1},loading_statues:!1,bottom_statues:!1,canvas_image:this.info.share_url,qr_code:this.info.result_url,user_image:"",showshare:!1,user_name:!1,again_number:1,share_desc:"快来领取你的2020年关键词吧",talk_desc:"新的一年会有新的人生，新的主题，那么你的2020关键词会是什么呢？点击测试",card_height:1248,card_width:750,attr:null,explain_color:!1,host:"http://mp.pv.itwlw.com/index.php/wxapp/tarot/",res_url:"http://tarot.cdn.taluop.com/static/tarot_sign"}},methods:{show:function(e){function a(){function e(e){t.getImageInfo({src:s.user_image,success:function(t){r.drawImage(t.path,Number(s.attr.user_image[0]),Number(s.attr.user_image[1]),Number(s.attr.user_image[2]),Number(s.attr.user_image[3])),e()},fail:function(t){console.log("userimg",s.user_image,t)}})}function a(e){t.getImageInfo({src:s.canvas_image,success:function(t){r.drawImage(t.path,0,0,Number(s.card_width),Number(s.card_height)),e()},fail:function(t){console.log("canvas_image",s.canvas_image,t)}})}function n(e){t.getImageInfo({src:s.qr_code,success:function(t){r.drawImage(t.path,Number(s.attr.qr_code[0]),Number(s.attr.qr_code[1]),Number(s.attr.qr_code[2]),Number(s.attr.qr_code[3])),e()},fail:function(t){console.log("qr_code",s.qr_code,t)}})}function i(){1==s.attr.is_username&&(r.font=s.attr.name_font,r.fillStyle=s.attr.name_fill,s.user_name.length>=s.attr.name_length&&(s.user_name=s.user_name.substr(0,s.attr.name_length)+"..."),1==s.attr.name_center&&r.setTextAlign("center"),0!=s.user_name&&r.fillText(s.user_name,s.attr.name_location[0],s.attr.name_location[1])),r.draw(!0,function(){setTimeout(function(){t.canvasToTempFilePath({x:0,y:0,width:s.card_width,height:s.card_height,destWidth:s.card_width,destHeight:s.card_height,canvasId:"share",success:function(t){s.img_src=t.tempFilePath,s.loading_statues=!1,s.bottom_statues=!0}}),t.canvasToTempFilePath({x:s.attr.share_x,y:s.attr.share_y,width:s.attr.share_width,height:s.attr.share_height,destWidth:s.attr.share_width,destHeight:s.attr.share_height,canvasId:"share",success:function(t){setTimeout(function(){s.$emit("save",{img:t.tempFilePath})},1e3)}})},100)})}var r=wx.createCanvasContext("share");new Promise(function(t,a){e(t)}).then(function(){return new Promise(function(t,e){a(t)})}).then(function(){return new Promise(function(t,e){n(t)})}).then(function(){return new Promise(function(t,e){i()})})}function n(){if(r/c>s.card_width/s.card_height){var t=s.card_width*c/s.card_height;return Math.floor(s.card_height*t/750)}return Math.floor(s.card_height*r/750)}console.log(e);var i=wx.getSystemInfoSync().statusBarHeight;this.nav_height=Number(48+i)+"px",this.page_statues=!0;var s=this;this.id=e.id,this.canvas_image=e.result_url,this.qr_code=e.share_url,this.user_image=e.header_image,this.again_number=e.again_number,this.talk_desc=e.talk_desc,this.attr=e.attr,this.explain_color=e.explain_color,this.card_width=e.attr.width,this.card_height=e.attr.height,this.images.more=this.res_url+"/images/sign_"+e.id+"/more_btn.png",this.images.share=this.res_url+"/images/sign_"+e.id+"/share_btn.png",this.images.again=this.res_url+"/images/sign_"+e.id+"/again.png",this.images.result_bottom=this.res_url+"/images/sign_' + e.id + '/result_bottom.png",this.loading_statues=!0;var r,o,c;s=this,t.getSystemInfo({success:function(t){r=t.windowWidth,o=t.windowHeight,c=Math.floor(o-68-147*r/750),s.canvas.height=n()+"px",s.canvas.width=Number(n())*(s.card_width/s.card_height)+"px",setTimeout(function(){a()},1e3)}})},again:function(){t.redirectTo({url:"/pages/tarotmark/item?again="+this.again_number+"&id="+this.id})},more:function(){t.navigateBack({delta:1})},shareQzone:function(){qq.openQzonePublish({text:this.talk_desc,media:[{type:"photo",path:this.img_src}]})},shareList:function(){this.showshare=!0},save_image:function(){var e=this;if(!this.save_statues){var a=this.img_src;t.saveImageToPhotosAlbum({filePath:a,success:function(t){e.save_statues=!0,qq.showToast({title:"保存成功",icon:"success",duration:2e3}),setTimeout(function(){e.save_statues=!1},2e3)},fail:function(e){t.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(t){qq.openSetting({})}})}})}},cancelShare:function(){this.showshare=!1}}};e.default=n}).call(this,a("543d").default)},faf6:function(t,e,a){var n=function(){var t=this;t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/tarotmark/Result-create-component",{"components/tarotmark/Result-create-component":function(t,e,a){a("543d").createComponent(a("2d62"))}},[["components/tarotmark/Result-create-component"]]]); 
 			}); 	require("components/tarotmark/Result.js");
 		__wxRoute = 'components/tarotmark/zhouWei-navBar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tarotmark/zhouWei-navBar/index.js';	define("components/tarotmark/zhouWei-navBar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tarotmark/zhouWei-navBar/index"],{"0d58":function(t,n,o){},"1f5a":function(t,n,o){var e=function(){var t=this;t.$createElement;t._self._c},r=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return r})},"3b88":function(t,n,o){o.r(n);var e=o("51b0"),r=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n.default=r.a},"51b0":function(n,o,e){(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=["pages/navList"],r=["#FFF","#FFFFFF","white","rgb(255,255,255)","rgba(255,255,255,1)"],a={props:{backState:{default:function(){return 1e3}},home:{type:Boolean,default:function(){return!1}},bgColor:{type:[String,Array],default:function(){return"#FFF"}},bgColorAngle:{type:[String,Number],default:function(){return 90}},fontColor:{type:String,default:function(){return"#000"}},titleCenter:{type:Boolean,default:function(){return!0}},title:{type:String,default:function(){return""}},type:{type:String,default:function(){return"fixed"}},transparentFixedFontColor:{type:String,default:function(){return"#000"}}},data:function(){return{firstPage:!1,transparentValue:1,navTitle:"",navFontColor:"#000",navBgColor:"linear-gradient(90deg, #FFF 0%, #FFF 100%)",navTransparentFixedFontColor:"#000",themeBgColor:!1,statusBarHeight:0}},computed:{back:function(){return 1e3==this.backState||3e3==this.backState},navFixed:function(){return"transparentFixed"==this.type||"fixed"==this.type},navLine:function(){return"transparent"!==this.type&&r.includes(this.navBgColor)},isWhite:function(){return r.includes(this.navFontColor)},isTwoBtn:function(){return(1e3==this.backState||3e3==this.backState)&&this.home&&!this.firstPage}},watch:{title:function(t){this.navTitle=t},fontColor:function(t){this.navFontColor=t},bgColor:function(t){this.getNavBgColor(t)},transparentFixedFontColor:function(t){this.navTransparentFixedFontColor=t}},created:function(){this.navTitle=this.title,this.navFontColor=this.fontColor,this.getNavBgColor(this.bgColor),this.navTransparentFixedFontColor=this.transparentFixedFontColor,this.statusBarHeight=n.getSystemInfoSync().statusBarHeight;var t=this;"transparentFixed"==this.type&&(this.transparentValue=0);var o=getCurrentPages(),r=o.length;1!=r||e.includes(o[0].route)||(this.firstPage=!0),"transparentFixed"==this.type&&(o[r-1].onPageScroll=function(n){t.$emit("scroll",n),n.scrollTop>180?t.transparentValue=1:t.transparentValue=n.scrollTop/180})},methods:{onBackPage:function(){3e3==this.backState?this.$emit("backClick"):n.navigateBack()},onBackHome:function(){n.switchTab({url:"/pages/navList"})},getNavBgColor:function(n){if("themeBgColor"==n)this.themeBgColor=!0,this.navBgColor="";else if("string"==typeof n)this.navBgColor="linear-gradient(90deg, "+n+" 0%, "+n+" 100%)";else if(n instanceof Array&&n.length>=2){var o="linear-gradient("+this.bgColorAngle+"deg";n.forEach(function(n){"string"==typeof n?o+=","+n:"object"==(void 0===n?"undefined":t(n))&&(o+=","+n.color+" "+n.scale)}),o+=")",this.navBgColor=o}},settingColor:function(){r.includes(this.navFontColor)?n.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:this.navBgColor}):n.setNavigationBarColor({frontColor:"#000000",backgroundColor:this.navBgColor})}}};o.default=a}).call(this,e("543d").default)},9276:function(t,n,o){o.r(n);var e=o("1f5a"),r=o("3b88");for(var a in r)"default"!==a&&function(t){o.d(n,t,function(){return r[t]})}(a);o("aa51");var i=o("2877"),l=Object(i.a)(r.default,e.a,e.b,!1,null,"ba24d200",null);n.default=l.exports},aa51:function(t,n,o){var e=o("0d58");o.n(e).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/tarotmark/zhouWei-navBar/index-create-component",{"components/tarotmark/zhouWei-navBar/index-create-component":function(t,n,o){o("543d").createComponent(o("9276"))}},[["components/tarotmark/zhouWei-navBar/index-create-component"]]]); 
 			}); 	require("components/tarotmark/zhouWei-navBar/index.js");
 		__wxRoute = 'pages/tanmegame/message';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tanmegame/message.js';	define("pages/tanmegame/message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/tanmegame/message"],{"0b31":function(e,a,n){},"457b":function(e,a,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={name:"msg",props:{content:{default:""},msgimg:{default:""}},data:function(){return{}}};a.default=t},"5a72":function(e,a,n){var t=n("0b31");n.n(t).a},a136:function(e,a,n){n.r(a);var t=n("d97a"),o=n("f420");for(var u in o)"default"!==u&&function(e){n.d(a,e,function(){return o[e]})}(u);n("5a72");var c=n("2877"),r=Object(c.a)(o.default,t.a,t.b,!1,null,"5df7941c",null);a.default=r.exports},d97a:function(e,a,n){var t=function(){var e=this;e.$createElement;e._self._c},o=[];n.d(a,"a",function(){return t}),n.d(a,"b",function(){return o})},f420:function(e,a,n){n.r(a);var t=n("457b"),o=n.n(t);for(var u in t)"default"!==u&&function(e){n.d(a,e,function(){return t[e]})}(u);a.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/tanmegame/message-create-component",{"pages/tanmegame/message-create-component":function(e,a,n){n("543d").createComponent(n("a136"))}},[["pages/tanmegame/message-create-component"]]]); 
 			}); 	require("pages/tanmegame/message.js");
 		__wxRoute = 'pages/home/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/home/index.js';	define("pages/home/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/home/index"],{"166d":function(a,t,e){e.r(t);var n=e("533b"),o=e("caca");for(var i in o)"default"!==i&&function(a){e.d(t,a,function(){return o[a]})}(i);e("ec69");var r=e("2877"),c=Object(r.a)(o.default,n.a,n.b,!1,null,"a2df2248",null);t.default=c.exports},"2e0d":function(a,t,e){(function(a){function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("81ab")),i=n(e("2e96")),r=n(e("1b15")),c=n(e("a35f")),d=n(e("f47e")),s=e("4e22"),l=e("c7c6"),u=(new(n(e("94f5")).default),getApp()),p={data:function(){return{update:0,banners:[],recommend:[],searchRmd:[],searchitem:{},latest:[],featured:[],show:!0,pageIndex:1,load:!0,waitIcon:r.default,searchIcon:c.default,current:!0,keyword:"",dailybox:!1,popup:[],ispush:!1,pushitem:[],today:"",focus:!1,listshow:!0,init_times:0,indexImg:"",showindeximg:!1,boxVideoAd:"",showtestbox:!1,newScanData:{},selectstar:!1,groupclose:o.default,groupicon:i.default,showgroupBox:!1,qqGroupid:"",showdingyue:"",navData:"",navnum:""}},onLoad:function(t){var e=this;d.default.Page.init(),(0,l.initChannel)(t);var n={};if(t.scene&&(console.log(decodeURIComponent(t.scene)),decodeURIComponent(t.scene).split("&").forEach(function(a,t){n[a.split("=")[0]]=a.split("=")[1]}),(0,l.initChannel)(n)),1==u.globalData.update){var o=a.getUpdateManager();o.onCheckForUpdate(function(t){console.log(t.hasUpdate),t.hasUpdate&&o.onUpdateReady(function(t){a.showModal({title:"更新提示",content:"发现新版本，是否重启应用?",cancelColor:"#eeeeee",confirmColor:"#FF0000",success:function(a){a.confirm&&o.applyUpdate()}})})})}a.showLoading({title:"加载中"}),d.default.Event.stat("homepage",{}),a.hideTabBar({}),"1109659848"==u.globalData.appid?a.setNavigationBarTitle({title:"趣测"}):"1109802828"==u.globalData.appid&&a.setNavigationBarTitle({title:"微测试"}),"303"==u.globalData.source&&(this.listshow=!1);var i=setInterval(function(){if(u.globalData.host_init_status||e.init_times>=5){clearInterval(i),console.log("home init start");var a=new Date,o=a.getFullYear(a),r=a.getMonth(a)+1,c=a.getDate(a);e.today=o+""+r+c,e.initHome(t,n)}e.init_times+=1},100);try{this.boxVideoAd=qq.createAppBox({adUnitId:"319e42e9f1046f5c3323424e28ad35e9"})}catch(a){}},onShareAppMessage:function(){return{title:"趣测-好玩有趣的测试网站",imageUrl:""}},onShow:function(){this.selectstar=!1,"1109659848"==u.globalData.appid?a.setNavigationBarTitle({title:"趣测"}):"1109802828"==u.globalData.appid&&a.setNavigationBarTitle({title:"微测试"})},components:{SearchBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/SearchBox")]).then(e.bind(null,"f1fb"))},SwiperBox:function(){return e.e("components/SwiperBox").then(e.bind(null,"f265"))},GridBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/GridBox")]).then(e.bind(null,"0585"))},ListBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/ListBox")]).then(e.bind(null,"493d"))},LoadBox:function(){return e.e("components/LoadBox").then(e.bind(null,"e82a"))},PopupBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/PopupBox")]).then(e.bind(null,"240f"))},NavgationBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/NavgationBox")]).then(e.bind(null,"326a"))},PoptestBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/PoptestBox")]).then(e.bind(null,"6234"))},SelectStarBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/SelectStar")]).then(e.bind(null,"6cc0"))}},methods:{initHome:function(t,e){var n=this,o={env:u.globalData.env,ver:u.globalData.ver,appid:u.globalData.appid,scene:u.globalData.scene,src:u.globalData.src,source:u.globalData.source};t.g&&(o.scan_gid=t.g),t.q&&(o.q=t.q);var i=a.getStorageSync("star")?a.getStorageSync("star"):0;o.star_id=i;var r=a.getStorageSync("Gridlist")?a.getStorageSync("Gridlist"):[],c=a.getStorageSync("appidList")?a.getStorageSync("appidList"):[];r.length>20&&(r=r.slice(0,20),a.setStorageSync("Gridlist",r)),o.history_rcmd=r.join(),o.history_app=c.join(),a.request({url:u.globalData.host+"/index.php/App/index/qqindexData",header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:o,success:function(o){n.searchRmd=o.data.searchRmd;var i=0;n.searchitem=n.searchRmd[i],setInterval(function(){++i>=n.searchRmd.length&&(i=0),n.searchitem=n.searchRmd[i]},3e3),n.recommend=o.data.recommend,n.navData=o.data.nav;for(var r=0;r<n.navData.length;r++)if(console.log(n.navData[r].desc),"/pages/home/index"==n.navData[r].path){n.navnum=r;break}n.banners=o.data.banner;var c=a.getStorageSync("daily_recommend_status"),d=!1;if(1==o.data.daily.show_daily_box&&(n.ispush||c==n.today||(a.setStorageSync("daily_recommend_status",n.today),d=!0)),console.log(d),o.data.indexImg){var p=n.today+o.data.indexImg.id;p==a.getStorageSync("today_img")||(a.setStorageSync("today_img",p),n.showindeximg=!0,o.data.indexImg.src=s.static_host+o.data.indexImg.src,n.indexImg=o.data.indexImg)}o.data.channel&&(u.globalData.src=o.data.channel.src,u.globalData.template=o.data.channel.template);var g=o.data.qqGroup?o.data.qqGroup:{};g.status&&(n.showgroupBox=!0,n.qqGroupid=g.groupid),u.globalData.adbox=o.data.boxAd,n.dailybox=!(1!=o.data.daily.show_daily_box||!d),n.popup={update:o.data.daily.count,items:o.data.daily.list};var h=o.data.lists.map(function(a,t){return a.img=s.static_host+a.img+"?imageView2/1/w/100/h/100",a});n.latest=n.latest.concat(h),1==n.pageIndex&&(n.featured=n.latest),console.log(o.data.scandata),o.data.scandata&&(0,l.playGame)(o.data.scandata);var m=o.data.newScanData?o.data.newScanData:{};console.log(o.data.newScanData,m),n.showtestbox=m.showScanbox,t.g&&(m.showScanbox?n.showtestbox=m.showScanbox:(0,l.playGame)({gid:t.g})),t.q&&(1==u.globalData.template?a.navigateTo({url:"/pages/quiz/index?q=".concat(t.q)}):2==u.globalData.template&&a.navigateTo({url:"/pages/quizchoiceness/index?q=".concat(t.q)})),m.data&&(m.data.img=s.static_host+m.data.logo),n.newScanData=m,n.pageIndex+=1,t.ispush&&(0,l.playGame)(t),e.ispush&&(0,l.playGame)(e)},complete:function(){a.hideLoading()}})},getPagedata:function(){var t=this;this.load&&(this.load=!1,a.request({url:u.globalData.host+"/index.php/App/index/getPageData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{pageIndex:this.pageIndex,appid:u.globalData.appid,ver:u.globalData.ver},success:function(a){if(200==a.statusCode){var e=a.data.map(function(a,t){return a.img=s.static_host+a.img+"?imageView2/1/w/100/h/100",a});t.latest=t.latest.concat(e),1==t.pageIndex&&(t.featured=t.latest),t.pageIndex+=1}t.load=!0},fail:function(a){t.load=!0}}))},switchContent:function(a){var t=this;this.current=a,a?(this.keyword="",this.focus=!1):setTimeout(function(){t.focus=!0},300)},search:function(t){if(t)a.navigateTo({url:"/pages/Search/Search?keyword=".concat(t)});else{var e=this.keyword;this.keyword="",a.navigateTo({url:"/pages/Search/Search?keyword=".concat(e)})}},toSearch:function(t){a.navigateTo({url:"/pages/Search/Search?keyword=".concat(t.keyword)})},scrollToLists:function(){setTimeout(function(){a.pageScrollTo({scrollTop:2e3,duration:300})},500)},bindStar:function(t){var e=this,n=a.getStorageSync("MiniProgram");d.default.Event.stat("navigateMiniProgram",{minitype:n.appid+"_1"}),a.navigateToMiniProgram({appId:n.appid,path:n.path+"?star="+t+"&target="+n.appid+"&from=1109659848&channel="+n.channel,success:function(o){d.default.Event.stat("navigateMiniProgram",{minitype:n.appid+"_2"}),d.default.Event.stat("jumpluka",{hasstar:0}),a.setStorageSync("star",t),console.log(n.path+"?star="+t+"&target="+n.appid+"&from=1109659848&channel=2"),e.selectstar=!1,e.initHome({})}})}}};t.default=p}).call(this,e("543d").default)},"533b":function(a,t,e){var n=function(){var a=this;a.$createElement;a._self._c},o=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return o})},"6cf4":function(a,t,e){(function(a){function t(a){return a&&a.__esModule?a:{default:a}}e("8b22"),e("921b"),t(e("66fd")),a(t(e("166d")).default)}).call(this,e("543d").createPage)},caca:function(a,t,e){e.r(t);var n=e("2e0d"),o=e.n(n);for(var i in n)"default"!==i&&function(a){e.d(t,a,function(){return n[a]})}(i);t.default=o.a},df20:function(a,t,e){},ec69:function(a,t,e){var n=e("df20");e.n(n).a}},[["6cf4","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/home/index.js");
 		__wxRoute = 'p/i';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'p/i.js';	define("p/i.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["p/i"],{"0037":function(a,t,e){(function(a){function o(a){return a&&a.__esModule?a:{default:a}}function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e("81ab")),r=o(e("2e96")),s=o(e("1b15")),l=o(e("a35f")),c=o(e("f47e")),d=e("4e22"),u=e("c7c6"),p=getApp(),g={data:function(){var a;return a={update:0,banners:[],recommend:[],searchRmd:[],searchitem:{},latest:[],featured:[],show:!0,pageIndex:1,load:!0,waitIcon:s.default,searchIcon:l.default,current:!0,keyword:"",dailybox:!1,popup:[],ispush:!1,pushitem:[],today:"",focus:!1,listshow:!0,init_times:0,indexImg:"",showindeximg:!1,boxVideoAd:"",showtestbox:!1,newScanData:{},selectstar:!1,groupclose:i.default,groupicon:r.default,showgroupBox:!0},n(a,"showgroupBox",!1),n(a,"qqGroupid",""),n(a,"navData",""),a},onLoad:function(t){var e=this;c.default.Page.init();var o={};if(t.scene&&(console.log(decodeURIComponent(t.scene)),decodeURIComponent(t.scene).split("&").forEach(function(a,t){o[a.split("=")[0]]=a.split("=")[1]}),(0,u.initChannel)(o)),1==p.globalData.update){var n=a.getUpdateManager();n.onCheckForUpdate(function(t){console.log(t.hasUpdate),t.hasUpdate&&n.onUpdateReady(function(t){a.showModal({title:"更新提示",content:"发现新版本，是否重启应用?",cancelColor:"#eeeeee",confirmColor:"#FF0000",success:function(a){a.confirm&&n.applyUpdate()}})})})}a.showLoading({title:"加载中"}),c.default.Event.stat("homepage",{}),"1109659848"==p.globalData.appid?a.setNavigationBarTitle({title:"趣测"}):"1109802828"==p.globalData.appid&&a.setNavigationBarTitle({title:"微测试"}),(0,u.initChannel)(t),"303"==p.globalData.source&&(this.listshow=!1);var i=setInterval(function(){if(p.globalData.host_init_status||e.init_times>=5){clearInterval(i),console.log("home init start");var a=new Date,o=a.getFullYear(a),n=a.getMonth(a)+1,r=a.getDate(a);e.today=o+""+n+r,e.initHome(t)}e.init_times+=1},100)},onShareAppMessage:function(){return{title:"趣测-好玩有趣的测试网站",imageUrl:""}},onShow:function(){this.selectstar=!1,"1109659848"==p.globalData.appid?a.setNavigationBarTitle({title:"趣测"}):"1109802828"==p.globalData.appid&&a.setNavigationBarTitle({title:"微测试"})},components:{SearchBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/SearchBox")]).then(e.bind(null,"f1fb"))},SwiperBox:function(){return e.e("components/SwiperBox").then(e.bind(null,"f265"))},GridBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/GridBox")]).then(e.bind(null,"0585"))},ListBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/ListBox")]).then(e.bind(null,"493d"))},LoadBox:function(){return e.e("components/LoadBox").then(e.bind(null,"e82a"))},PopupBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/PopupBox")]).then(e.bind(null,"240f"))},NavgationBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/NavgationBox")]).then(e.bind(null,"326a"))},PoptestBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/PoptestBox")]).then(e.bind(null,"6234"))},SelectStarBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/SelectStar")]).then(e.bind(null,"6cc0"))}},methods:{initHome:function(t){var e=this,o={env:p.globalData.env,ver:p.globalData.ver,appid:p.globalData.appid,scene:p.globalData.scene,src:p.globalData.src,source:p.globalData.source};t.g&&(o.scan_gid=t.g),t.q&&(o.q=t.q);var n=a.getStorageSync("star")?a.getStorageSync("star"):0;o.star_id=n;var i=a.getStorageSync("Gridlist")?a.getStorageSync("Gridlist"):[],r=a.getStorageSync("appidList")?a.getStorageSync("appidList"):[];i.length>20&&(i=i.slice(0,20),a.setStorageSync("Gridlist",i)),o.history_rcmd=i.join(),o.history_app=r.join(),a.request({url:p.globalData.host+"/index.php/App/index/qqindexData",header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:o,success:function(o){e.searchRmd=o.data.searchRmd;var n=0;e.searchitem=e.searchRmd[n],setInterval(function(){++n>=e.searchRmd.length&&(n=0),e.searchitem=e.searchRmd[n]},3e3),e.recommend=o.data.recommend,e.banners=o.data.banner,e.navData=o.data.nav,o.data.channel&&(p.globalData.src=o.data.channel.src,p.globalData.template=o.data.channel.template);var i=a.getStorageSync("daily_recommend_status"),r=!1;if(1==o.data.daily.show_daily_box&&(e.ispush||i==e.today||(a.setStorageSync("daily_recommend_status",e.today),r=!0)),console.log(r),o.data.indexImg){var s=e.today+o.data.indexImg.id;s==a.getStorageSync("today_img")||(a.setStorageSync("today_img",s),e.showindeximg=!0,o.data.indexImg.src=d.static_host+o.data.indexImg.src,e.indexImg=o.data.indexImg)}var l=o.data.qqGroup?o.data.qqGroup:{};l.status&&(e.showgroupBox=!0,e.qqGroupid=l.groupid),p.globalData.adbox=o.data.boxAd,e.dailybox=!(1!=o.data.daily.show_daily_box||!r),e.popup={update:o.data.daily.count,items:o.data.daily.list};var c=o.data.lists.map(function(a,t){return a.img=d.static_host+a.img+"?imageView2/1/w/100/h/100",a});e.latest=e.latest.concat(c),1==e.pageIndex&&(e.featured=e.latest),console.log(o.data.scandata),o.data.scandata&&(0,u.playGame)(o.data.scandata);var g=o.data.newScanData?o.data.newScanData:{};console.log(o.data.newScanData,g),e.showtestbox=g.showScanbox,t.g&&(g.showScanbox?e.showtestbox=g.showScanbox:(0,u.playGame)({gid:t.g})),t.q&&(1==p.globalData.template?a.navigateTo({url:"/pages/quiz/index?q=".concat(t.q)}):2==p.globalData.template&&a.navigateTo({url:"/pages/quizchoiceness/index?q=".concat(t.q)})),t.t&&(0,u.playGame)({jump_type:2,gid:t.t}),t.d&&(0,u.playGame)({jump_type:3,gid:t.d}),g.data&&(g.data.img=d.static_host+g.data.logo),e.newScanData=g,e.pageIndex+=1,t.ispush&&(0,u.playGame)(t),op.ispush&&(0,u.playGame)(op)},complete:function(){a.hideLoading()}})},getPagedata:function(){var t=this;this.load&&(this.load=!1,a.request({url:p.globalData.host+"/index.php/App/index/getPageData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{pageIndex:this.pageIndex,appid:p.globalData.appid,ver:p.globalData.ver},success:function(a){if(200==a.statusCode){var e=a.data.map(function(a,t){return a.img=d.static_host+a.img+"?imageView2/1/w/100/h/100",a});t.latest=t.latest.concat(e),1==t.pageIndex&&(t.featured=t.latest),t.pageIndex+=1}t.load=!0},fail:function(a){t.load=!0}}))},showboxBanner:function(){var a=this;console.log(this.boxVideoAd),this.boxVideoAd.load().then(function(){a.boxVideoAd.show()}),this.boxVideoAd.onClose(function(a){console.log(a)})},switchContent:function(a){var t=this;this.current=a,a?(this.keyword="",this.focus=!1):setTimeout(function(){t.focus=!0},300)},search:function(t){if(t)a.navigateTo({url:"/pages/Search/Search?keyword=".concat(t)});else{var e=this.keyword;this.keyword="",a.navigateTo({url:"/pages/Search/Search?keyword=".concat(e)})}},toSearch:function(t){a.navigateTo({url:"/pages/Search/Search?keyword=".concat(t.keyword)})},scrollToLists:function(){setTimeout(function(){a.pageScrollTo({scrollTop:2e3,duration:300})},500)},bindStar:function(t){var e=this;a.setStorageSync("star",t);var o=a.getStorageSync("MiniProgram");c.default.Event.stat("navigateMiniProgram",{minitype:o.appid+"_1"}),a.navigateToMiniProgram({appId:o.appid,path:o.path+"?star="+t+"&target="+o.appid+"&from=1109659848&channel="+o.channel,success:function(n){c.default.Event.stat("navigateMiniProgram",{minitype:o.appid+"_2"}),c.default.Event.stat("jumpluka",{hasstar:0}),a.setStorageSync("star",t),console.log(n),e.selectstar=!1,e.initHome({})}})}}};t.default=g}).call(this,e("543d").default)},"0f94":function(a,t,e){e.r(t);var o=e("0037"),n=e.n(o);for(var i in o)"default"!==i&&function(a){e.d(t,a,function(){return o[a]})}(i);t.default=n.a},b49e:function(a,t,e){},e472:function(a,t,e){var o=e("b49e");e.n(o).a},f07f:function(a,t,e){(function(a){function t(a){return a&&a.__esModule?a:{default:a}}e("8b22"),e("921b"),t(e("66fd")),a(t(e("fabb")).default)}).call(this,e("543d").createPage)},f4a6:function(a,t,e){var o=function(){var a=this;a.$createElement;a._self._c,a._isMounted||(a.e0=function(t){a.showgroupBox=!1})},n=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return n})},fabb:function(a,t,e){e.r(t);var o=e("f4a6"),n=e("0f94");for(var i in n)"default"!==i&&function(a){e.d(t,a,function(){return n[a]})}(i);e("e472");var r=e("2877"),s=Object(r.a)(n.default,o.a,o.b,!1,null,"75b8ba46",null);t.default=s.exports}},[["f07f","common/runtime","common/vendor"]]]); 
 			}); 	require("p/i.js");
 		__wxRoute = 'pages/Category/Category';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/Category/Category.js';	define("pages/Category/Category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/Category/Category"],{"0014":function(t,e,a){},"41fa":function(t,e,a){a.r(e);var i=a("720e"),n=a("f861");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("86fe");var s=a("2877"),r=Object(s.a)(n.default,i.a,i.b,!1,null,"b9462a96",null);e.default=r.exports},"720e":function(t,e,a){var i=function(){var t=this;t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"86fe":function(t,e,a){var i=a("0014");a.n(i).a},dba0:function(t,e,a){(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("129d")),o=i(a("4cbf")),s=i(a("1b15")),r=a("4e22"),c=a("c7c6"),d=i(a("f47e")),u=getApp(),g={onLoad:function(e){var a=this;if(d.default.Page.init(),1==u.globalData.update){var i=t.getUpdateManager();i.onCheckForUpdate(function(e){e.hasUpdate&&i.onUpdateReady(function(e){t.showModal({title:"更新提示",content:"发现新版本，是否重启应用?",cancelColor:"#eeeeee",confirmColor:"#FF0000",success:function(t){t.confirm&&i.applyUpdate()}})})})}t.showLoading({title:"加载中"}),(0,c.initChannel)(e),console.log(e),1==e.ispush&&(this.push_gid=e.push_gid),t.hideTabBar({success:function(){}});var n=t.getStorageSync("category_cid")?t.getStorageSync("category_cid"):e.cid;this.cid=n||14;var o=setInterval(function(){(u.globalData.host_init_status||a.init_times>=5)&&(clearInterval(o),a.getQQboxaddata(function(){a.getCategory()})),a.init_times+=1},100)},onShow:function(){var e=t.getStorageSync("category_cid");if(this.onshow&&e){this.cid=e;for(var a=0;a<this.subCategories.length;a++)if(this.subCategories[a].id=this.cid){var i=a,n=this.subCategories[a];this.switchTab(n,i)}t.removeStorageSync("category_cid")}this.onshow=1},onReady:function(){},onShareAppMessage:function(){return{title:"趣测-好玩有趣的测试网站",imageUrl:""}},data:function(){return{categories:[],subCategories:[],container:[],num:0,height:0,downIcon:n.default,selectIcon:o.default,isActive:!1,order:"time",load:!0,waitIcon:s.default,listshow:!0,init_times:0,push_gid:"",cid:"4",onshow:0,boxVideoAd:"",navData:"",selectstar:!1,navnum:0,nomorequiz:[]}},components:{NavgationBox:function(){return Promise.all([a.e("common/vendor"),a.e("components/NavgationBox")]).then(a.bind(null,"326a"))},SearchBox:function(){return Promise.all([a.e("common/vendor"),a.e("components/SearchBox")]).then(a.bind(null,"f1fb"))},SelectStarBox:function(){return Promise.all([a.e("common/vendor"),a.e("components/SelectStar")]).then(a.bind(null,"6cc0"))}},methods:{touchmove:function(){return!1},switchTab:function(t,e){console.log(t,e),this.cid=t.id,this.num=parseInt(e);var a=this.subCategories[this.num];this.subCategories[this.num][this.order+"_page"]>1?this.container=this.subCategories[this.num][this.order+"_list"]:this.getSubCategory(this.num,a.cid,a.order,a[this.order+"_page"])},getQQboxaddata:function(e){var a=this;t.request({url:u.globalData.host+"/index.php/App/Index/qqCategoryData",data:{appid:u.globalData.appid,ver:u.globalData.ver,source:u.globalData.source,src:u.globalData.src},success:function(t){u.globalData.adbox=t.data.boxAd,a.navData=t.data.nav,t.data.channel&&(u.globalData.src=t.data.channel.src,u.globalData.template=t.data.channel.template);for(var i=0;i<a.navData.length;i++)if(console.log(a.navData[i].desc),"/pages/Category/Category"==a.navData[i].path){a.navnum=i;break}e&&e()}})},getCategory:function(){var e=this;t.request({url:u.globalData.host+"/index.php/Wetest/Index/getCategoryData",method:"GET",data:{},success:function(a){if(200==a.statusCode){e.categories=JSON.parse(a.data),e.subCategories=e.categories.map(function(t,e){return{order:"time",cid:t.id,view_page:1,view_list:[],time_page:1,time_list:[]}});for(var i="",n=0;n<e.subCategories.length;n++)e.subCategories[n].cid==e.cid&&(e.num=n,i=e.subCategories[n],console.log(i));e.getSubCategory(e.num,i.cid,i.order,i.view_page,e.push_gid),t.removeStorageSync("category_cid")}},fail:function(t){console.log(t)},complete:function(e){t.hideLoading()}})},getSubCategory:function(e,a,i,n,o){var s=this,d=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t.request({url:u.globalData.host+"/index.php/App/Index/getPageData",method:"GET",data:{cid:a,order:i,pageIndex:n,appid:u.globalData.appid,ver:u.globalData.ver,push_gid:o},success:function(t){if(t.data||s.nomorequiz.push(a),200==t.statusCode&&t.data){var u=t.data.map(function(t,e){return t.img=r.static_host+t.img,t});s.subCategories[e][i+"_list"]=s.subCategories[e][i+"_list"].concat(u),s.subCategories[e][i+"_page"]=n+1,s.container=s.subCategories[e][i+"_list"],s.order=i}o&&(0,c.playGame)({id:o}),d&&d()},fail:function(t){console.log(t)}})},toQuestion:function(e){if(e.is_jump)if("constell"==e.content){var a=t.getStorageSync("star");a?(d.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_1"}),t.navigateToMiniProgram({appId:e.appid,path:e.path+"?star="+a+"&target="+e.appid+"&from=1109659848&channel=2",success:function(){d.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_2"});var a=t.getStorageSync("appidList")?t.getStorageSync("appidList"):[];-1==a.indexOf(e.appid)&&a.unshift(e.appid),t.setStorageSync("appidList",a),2==e.type&&saveOutRecord(u,4,u.globalData.appid,e.appid)}})):(t.setStorageSync("MiniProgram",e),d.default.Event.stat("selectstar",{showorcencal:u.globalData.ver+"_show"}),this.selectstar=!0)}else d.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_1"}),t.navigateToMiniProgram({appId:e.appid,path:e.path,success:function(){d.default.Event.stat("navigateMiniProgram",{minitype:e.appid+"_2"});var a=t.getStorageSync("appidList")?t.getStorageSync("appidList"):[];-1==a.indexOf(e.appid)&&a.unshift(e.appid),t.setStorageSync("appidList",a),2==e.type&&saveOutRecord(u,4,u.globalData.appid,e.appid)}});else(0,c.playGame)(e)},openOrder:function(){this.isActive?this.isActive=!1:this.isActive=!0},changeOrder:function(t){if("view"==this.order?this.order="time":"time"==this.order&&(this.order="view"),this.isActive=!1,this.subCategories[this.num].order=this.order,this.subCategories[this.num][this.order+"_page"]>1)this.container=this.subCategories[this.num][this.order+"_list"];else{var e=this.subCategories[this.num];this.getSubCategory(this.num,e.cid,e.order,e[this.order+"_page"])}},getPagedata:function(){var t=this;if(console.log(this.nomorequiz,this.cid,this.nomorequiz.indexOf(this.cid)),this.load&&-1==this.nomorequiz.indexOf(this.cid)){this.load=!1;var e=this.subCategories[this.num];this.getSubCategory(this.num,e.cid,e.order,e[this.order+"_page"],"",function(){t.load=!0})}},bindStar:function(e){var a=this,i=t.getStorageSync("MiniProgram");d.default.Event.stat("navigateMiniProgram",{minitype:i.appid+"_1"}),t.navigateToMiniProgram({appId:i.appid,path:i.path+"?star="+e+"&target="+i.appid+"&from=1109659848&channel=2",success:function(n){d.default.Event.stat("navigateMiniProgram",{minitype:i.appid+"_2"}),d.default.Event.stat("jumpluka",{hasstar:0}),t.setStorageSync("star",e),console.log(n),a.initHome({})}})}},created:function(){}};e.default=g}).call(this,a("543d").default)},f861:function(t,e,a){a.r(e);var i=a("dba0"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e.default=n.a},fc84:function(t,e,a){(function(t){function e(t){return t&&t.__esModule?t:{default:t}}a("8b22"),a("921b"),e(a("66fd")),t(e(a("41fa")).default)}).call(this,a("543d").createPage)}},[["fc84","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/Category/Category.js");
 		__wxRoute = 'pages/christmas/result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/christmas/result.js';	define("pages/christmas/result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/christmas/result"],{"18ac":function(t,e,a){a.r(e);var i=a("5b58"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e.default=s.a},"2cb2":function(t,e,a){},"3c49":function(t,e,a){var i=a("2cb2");a.n(i).a},"450c":function(t,e,a){a.r(e);var i=a("9fc8"),s=a("18ac");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("3c49");var n=a("2877"),c=Object(n.a)(s.default,i.a,i.b,!1,null,"50a506af",null);e.default=c.exports},"5b58":function(t,e,a){(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("f47e")),o=i(a("94f5")),n=getApp(),c=new o.default,r={data:function(){return{showimg:"",sideness:!1,showmodel:!1,modeltype:"video",qrcodeimg:"",videoAd:"",savefiltext:["观看完整视频广告","才能保存到相册哦"],setsucesstext:["头像设置成功了","快去向你的好友炫耀吧"],resultimg:""}},onLoad:function(e){s.default.Page.init();var a=t.getStorageSync("userinfo")?t.getStorageSync("userinfo"):{nickName:"",avatarUrl:""};this.userinfo=a,a.avatarUrl&&(this.needlogin=!1,this.showimg=a.avatarUrl.replace("100","0")),this.showimg=e.path,this.sideness=e.sideness,this.savefiltext=n.globalData.christmas.pagecontent.adbox.split("##"),this.setsucesstext=n.globalData.christmas.pagecontent.setcb.split("##"),this.qrcodeimg=n.globalData.christmas.qrcode,this.drawshareqzoneimg(),this.creatvideoAd()},onHide:function(){this.showmodel=!1},onShareAppMessage:function(){return{title:n.globalData.christmas.sharetitle,imageUrl:n.globalData.christmas.sharebanner,path:"pages/christmas/index"}},methods:{creatvideoAd:function(){var t=this;if(n.globalData.christmas.hasAd){try{this.videoAd=wx.createRewardedVideoAd({adUnitId:n.globalData.christmas.adUnitId})}catch(t){}this.videoAd&&this.videoAd.onError(function(e){t.videoErr=!0})}},setheaderimg:function(){qq.setCustomDress({action:"uploadAvatar",path:this.showimg,success:function(t){console.log("success",t)},fail:function(t){console.log("fail",t)}})},saveimg:function(){var t=this;c.useQQAd(this.videoAd).then(function(e){e?c.savePicture(t.showimg,function(){t.closemodel()}):(t.showmodel=!0,t.modeltype="video")}).catch(function(){c.savePicture(t.showimg,function(){t.closemodel()})})},shareqzone:function(){qq.openQzonePublish({text:n.globalData.christmas.shuoshuo,media:[{type:"photo",path:this.resultimg}]})},continuetype:function(){"video"==this.modeltype?this.saveimg():this.shareqzone()},closemodel:function(){this.showmodel=!1},drawshareqzoneimg:function(){var e=this,a=t.createCanvasContext("shareqzone"),i="",s=[{img:i="true"==this.sideness?"https://ssl-uploads-admin.cdn.itwlw.com/quce/1577081419xgC6Q.png":"https://ssl-uploads-admin.cdn.itwlw.com/quce/1577081381L1P1e.png"},{img:this.showimg},{img:this.qrcodeimg}];c.getimgall(s,function(i){console.log(i);var s=i[0].path.height,o=i[0].path.width;a.drawImage(i[1].path.path,0,0,i[1].path.width,i[1].path.height,175,375,400,400),a.drawImage(i[0].path.path),a.drawImage(i[2].path.path,0,0,i[2].path.width,i[2].path.height,75,870,165,165),a.draw(!1,function(){setTimeout(function(){t.canvasToTempFilePath({x:0,y:0,width:o,height:s,destWidth:o,destHeight:s,canvasId:"shareqzone",fileType:"jpg",quality:.9,success:function(t){console.log(t),e.resultimg=t.tempFilePath,console.log(222222)}})},100)})})}}};e.default=r}).call(this,a("543d").default)},"5fef":function(t,e,a){(function(t){function e(t){return t&&t.__esModule?t:{default:t}}a("8b22"),a("921b"),e(a("66fd")),t(e(a("450c")).default)}).call(this,a("543d").createPage)},"9fc8":function(t,e,a){var i=function(){var t=this;t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})}},[["5fef","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/christmas/result.js");
 		__wxRoute = 'pages/christmas/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/christmas/index.js';	define("pages/christmas/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/christmas/index"],{"0440":function(t,e,a){(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("f47e")),n=i(a("94f5")),o=[],c=1,r=!0,l=0,h=getApp(),u=new n.default,d={data:function(){return{showimg:"",showimgtype:"own",userinfo:{nickName:"",avatarUrl:""},itemList:[],needlogin:!0,sideness:!1,hatlist:[],tempFilePath:"",hatlistlength:0,starticon:{x:0,y:0},resultimg:"",videoAd:"",shareAppImage:""}},onLoad:function(){s.default.Page.init();var e=t.getStorageSync("userinfo")?t.getStorageSync("userinfo"):{nickName:"",avatarUrl:""};this.userinfo=e,e.avatarUrl&&(this.needlogin=!1,this.showimg=e.avatarUrl.replace("/132","0")),this.getlist()},components:{ImageCropper:function(){return a.e("components/invinbg-image-cropper/invinbg-image-cropper").then(a.bind(null,"c0e6"))}},onShareAppMessage:function(){return{title:h.globalData.christmas.sharetitle,imageUrl:h.globalData.christmas.sharebanner,path:"pages/christmas/index"}},methods:{changhat:function(e,a){var i=this;console.log("qqqq"),e.lock?u.useQQAd(this.videoAd).then(function(s){if(s){o=[],c=1,r=!0,l=0,i.hatlist[a].lock=0;var n=t.getStorageSync("unlockhatlist")?t.getStorageSync("unlockhatlist"):[];n.push(e.id),t.setStorageSync("unlockhatlist",n),i.setDropItem({url:"https://ssl-uploads-admin.cdn.itwlw.com/"+e.path})}else t.showToast({title:"需要看完视频解锁圣诞帽"})}).catch(function(){o=[],c=1,r=!0,l=0,i.setDropItem({url:"https://ssl-uploads-admin.cdn.itwlw.com/"+e.path})}):(o=[],c=1,r=!0,l=0,this.setDropItem({url:"https://ssl-uploads-admin.cdn.itwlw.com/"+e.path}))},getlist:function(){var e=this;t.request({url:"https://mp.itwlw.com/index.php/Wxapp/CommonApi/getChristmasHatconfig",data:{appid:h.globalData.appid,scene:h.globalData.scene,ver:h.globalData.ver},success:function(a){console.log(a),e.hatlist=a.data.hatlist,e.hatlistlength=a.data.hatlist.length;var i=t.getStorageSync("unlockhatlist")?t.getStorageSync("unlockhatlist"):[];e.hatlist.forEach(function(t,e){-1!=i.indexOf(t.id)&&(t.lock=0)}),e.showimg&&!e.needlogin&&e.setDropItem({url:"https://ssl-uploads-admin.cdn.itwlw.com/"+a.data.hatlist[0].path}),h.globalData.christmas.sharebanner="https://ssl-uploads-admin.cdn.itwlw.com/"+a.data.sharebanner,h.globalData.christmas.adUnitId=a.data.adUnitId,h.globalData.christmas.hasAd=a.data.hasAd,h.globalData.christmas.pagecontent=a.data.pagecontent,h.globalData.christmas.sharetitle=a.data.sharetitle,h.globalData.christmas.shuoshuo=a.data.shuoshuo,h.globalData.christmas.qrcode="https://ssl-uploads-admin.cdn.itwlw.com/"+a.data.qrcode;try{e.videoAd=wx.createRewardedVideoAd({adUnitId:a.data.adUnitId})}catch(t){}e.videoAd&&e.videoAd.onError(function(t){e.videoErr=!0})}})},bgmove:function(){return!1},movelist:function(){},getUserInfo:function(e){e.detail&&e.detail.userInfo&&(h.globalData.user={nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl,verify:0},t.setStorageSync("user",h.globalData.user),t.setStorageSync("userinfo",{nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl}),this.showimg=e.detail.userInfo.avatarUrl.replace("/132","/0"),this.needlogin=!1,this.setDropItem({url:"https://ssl-uploads-admin.cdn.itwlw.com/"+this.hatlist[0].path}))},drawimg:function(e){var a=this;t.showLoading({title:"正在生成新头像"});var i=t.createCanvasContext("header"),s=t.getSystemInfoSync();console.log(s),t.getImageInfo({src:this.showimg,success:function(s){if(a.sideness)i.drawImage(s.path,0,0,640,640),i.translate(2.5*a.itemList[0].x,2.5*a.itemList[0].y),i.rotate(-(360-a.itemList[0].rotate)*Math.PI/180),i.drawImage(a.itemList[0].path,-a.itemList[0].width*a.itemList[0].scale*2.5/2,-a.itemList[0].height*a.itemList[0].scale*2.5/2,a.itemList[0].width*a.itemList[0].scale*2.5,a.itemList[0].height*a.itemList[0].scale*2.5),i.rotate((360-a.itemList[0].rotate)*Math.PI/180),i.translate(-2.5*a.itemList[0].x,-2.5*a.itemList[0].y);else{i.fillStyle="#ffffff",i.fillRect(0,0,640,640),i.stroke(),i.beginPath(),i.save();i.arc(320,320,320,0,2*Math.PI),i.stroke(),i.clip(),i.drawImage(s.path,0,0,640,640),i.translate(2.5*a.itemList[0].x,2.5*a.itemList[0].y),i.rotate(-(360-a.itemList[0].rotate)*Math.PI/180),i.drawImage(a.itemList[0].path,-a.itemList[0].width*a.itemList[0].scale*2.5/2,-a.itemList[0].height*a.itemList[0].scale*2.5/2,a.itemList[0].width*a.itemList[0].scale*2.5,a.itemList[0].height*a.itemList[0].scale*2.5),i.rotate((360-a.itemList[0].rotate)*Math.PI/180),i.translate(-2.5*a.itemList[0].x,-2.5*a.itemList[0].y),i.restore(),i.closePath()}i.draw(!1,function(){setTimeout(function(){qq.canvasToTempFilePath({x:0,y:0,width:640,height:640,destWidth:640,destHeight:640,canvasId:"header",success:function(i){a.resultimg=i.tempFilePath,t.getImageInfo({src:a.resultimg,success:function(i){console.log(i);var s=t.createCanvasContext("headersmall");s.drawImage(i.path,0,0,i.width,i.height,0,0,320,320),s.draw(!1,function(){setTimeout(function(){qq.canvasToTempFilePath({x:0,y:0,width:320,height:320,destWidth:640,destHeight:640,canvasId:"headersmall",success:function(i){a.resultimg=i.tempFilePath,t.getImageInfo({src:a.resultimg,success:function(t){console.log(t),e&&e()}})}})},500)})}})}})},500)})}})},confirm:function(t){this.tempFilePath="",this.showimg=t.detail.tempFilePath},cancel:function(){this.tempFilePath=""},start:function(t){console.log(t.currentTarget.offsetLeft,"start"),this.starticon.x=t.currentTarget.offsetLeft,this.starticon.y=t.currentTarget.offsetTop,console.log(t.currentTarget.offsetTop,"start")},selectHideImg:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var a=t.tempFilePaths[0];e.tempFilePath=a}})},previewImg:function(){var e=this;this.drawimg(function(){t.hideLoading(),t.navigateTo({url:"/pages/christmas/result?sideness="+e.sideness+"&path="+e.resultimg})})},setDropItem:function(t){var e=this,a={};wx.getImageInfo({src:t.url,success:function(i){a.width=80,a.height=80*i.height/i.width,a.image=t.url,a.path=i.path,a.id=++c,a.top=0,a.left=0,a.x=a.left+a.width/2,a.y=a.top+a.height/2,a.scale=1,a.oScale=1,a.rotate=1,a.active=!1,console.log(a),o[0]=a,e.itemList=[].concat(o)}})},WraptouchStart:function(t){for(var e=0;e<o.length;e++)o[e].active=!1,t.currentTarget.dataset.id==o[e].id&&(l=e,o[l].active=!0);this.itemList=[].concat(o),o[l].lx=t.touches[0].clientX,o[l].ly=t.touches[0].clientY,console.log(o[l])},WraptouchMove:function(t){r&&(r=!1,setTimeout(function(){r=!0},100)),o[l]._lx=t.touches[0].clientX,o[l]._ly=t.touches[0].clientY,o[l].left+=o[l]._lx-o[l].lx,o[l].top+=o[l]._ly-o[l].ly,o[l].x+=o[l]._lx-o[l].lx,o[l].y+=o[l]._ly-o[l].ly,o[l].lx=t.touches[0].clientX,o[l].ly=t.touches[0].clientY,this.itemList=[].concat(o)},oTouchStart:function(t){console.log(t);for(var e=0;e<o.length;e++)o[e].active=!1,t.currentTarget.dataset.id==o[e].id&&(console.log("e.currentTarget.dataset.id",t.currentTarget.dataset.id),l=e,o[l].active=!0);o[l].tx=t.touches[0].clientX-this.starticon.x,o[l].ty=t.touches[0].clientY-this.starticon.y,console.log(t.touches[0]),o[l].anglePre=this.countDeg(o[l].x,o[l].y,o[l].tx,o[l].ty),o[l].r=this.getDistancs(o[l].x,o[l].y,o[l].left,o[l].top),console.log(o[l].r,"rrrrrrrrrr")},oTouchMove:function(t){r&&(r=!1,setTimeout(function(){r=!0},100)),o[l]._tx=t.touches[0].clientX-this.starticon.x,o[l]._ty=t.touches[0].clientY-this.starticon.y,o[l].disPtoO=this.getDistancs(o[l].x,o[l].y,o[l]._tx,o[l]._ty-10),console.log(o[l].disPtoO),o[l].scale=o[l].disPtoO/o[l].r,o[l].oScale=1/o[l].scale,o[l].angleNext=this.countDeg(o[l].x,o[l].y,o[l]._tx,o[l]._ty),o[l].new_rotate=o[l].angleNext-o[l].anglePre,o[l].rotate+=o[l].new_rotate,o[l].angle=o[l].rotate,o[l].tx=t.touches[0].clientX-this.starticon.x,o[l].ty=t.touches[0].clientY-this.starticon.y,o[l].anglePre=this.countDeg(o[l].x,o[l].y,o[l].tx,o[l].ty),this.itemList=[].concat(o)},getDistancs:function(t,e,a,i){var s=a-t,n=i-e;return Math.sqrt(s*s+n*n)},countDeg:function(t,e,a,i){var s=a-t,n=i-e,o=Math.abs(s/n),c=Math.atan(o)/(2*Math.PI)*360;return s<0&&n<0?c=-c:s<=0&&n>=0?c=-(180-c):s>0&&n<0?c=c:s>0&&n>0&&(c=180-c),c},deleteItem:function(t){for(var e=[],a=0;a<o.length;a++)t.currentTarget.dataset.id!=o[a].id&&e.push(o[a]);e.length>0&&(e[e.length-1].active=!0),o=e,this.itemList=[].concat(o)}}};e.default=d}).call(this,a("543d").default)},"841e":function(t,e,a){a.r(e);var i=a("cad3"),s=a("9c48");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("d554");var o=a("2877"),c=Object(o.a)(s.default,i.a,i.b,!1,null,"000271f2",null);e.default=c.exports},"9c48":function(t,e,a){a.r(e);var i=a("0440"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e.default=s.a},b9a3:function(t,e,a){(function(t){function e(t){return t&&t.__esModule?t:{default:t}}a("8b22"),a("921b"),e(a("66fd")),t(e(a("841e")).default)}).call(this,a("543d").createPage)},cad3:function(t,e,a){var i=function(){var t=this;t.$createElement;t._self._c,t._isMounted||(t.e0=function(e){t.sideness=!0},t.e1=function(e){t.sideness=!1})},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},d554:function(t,e,a){var i=a("ea45");a.n(i).a},ea45:function(t,e,a){}},[["b9a3","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/christmas/index.js");
 		__wxRoute = 'pages/quiz/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/quiz/index.js';	define("pages/quiz/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/quiz/index"],{"04c4":function(e,t,a){(function(e){function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=a("4e22"),r=a("c7c6"),l=s(a("cd71")),u=s(a("6654")),d=s(a("6f91")),c=s(a("a94b")),h=s(a("a6fa")),g=s(a("0861")),p=s(a("3324")),m=s(a("57a0")),f=s(a("1418")),b=s(a("f47e")),v=new(s(a("94f5")).default),_=getApp(),y={data:function(){return{closeIcon:f.default,watchBtn:p.default,videoButton:!1,originalQuce:l.default,videoIcon:m.default,previewImage:!1,authorButton:!1,makeButton:!1,question_info:{},special_config:{},question:[],shareOther:c.default,shuoshuotu:h.default,againimg:g.default,items:[],scrollTop:0,current:0,oldCurrent:0,count:0,input:!1,button:!1,margin:!1,nickname:"",message:"",showMessage:!1,canvasHW:{width:750,height:950},options:[],answerAvatar:_.globalData.user.avatarUrl?_.globalData.user.avatarUrl:u.default,resimg:{qrcode:"",result:"",avatar:_.globalData.user.avatarUrl?_.globalData.user.avatarUrl:n.ssl_static_host+"quce/1562666285IKXQK.png"},preview:!1,resultImage:"",isfirstplay:!0,resultTjFlag:!0,result:"",sharetitle:"",quiztype:"",incsavestatus:!0,inlongSmall:!0,inlongBig:!0,isreplay:!1,end:0,shareImage:"",id:"",scrollId:0,scrollToView:"",videoAd:"",showAds:!1,forcedAds:!1,makeRes:1,videoEnded:!1,uid:"",cancelinc:"",showshare:!1,modelContent:"",showmodel:!1,topimg:d.default,settop:"",imageshare:"",openid:"",ceshiprogress:!1,shareqzonetitle:"",shuoshuo:"",shuoshuobutton:!1,adtime:0,shareAppImage:"",playNumber:0,bannerNumber:0,resultData:"",CaptureImage:1,saveImageSmall:!0,hasUserinfo:!1,videoErr:!1,shuoshuo_sharetitle:"",canshareqzone:!0,loading:!0,progresspercent:0,transitiontime:60,progressend:!1,imgfinished:!1,hasbannerad:0,banneradutilid:"",showbannerad:!1,addresultimg:!0,banneradcontent:"",forcebutton:!1,original:"",video_banner_ad:"",adBox_cancel_btn:"",adBox_video_btn:"",banner_ad_style:"",adBox_style_type:"",showVideoModel:"",onLoad:1,videoplayednumber:"",videoLoad:!1,videoWatchNumber:0,showdingyue:!1,dingyuemodel:!1,subscribe_status:0,subscribe_content:"",round:1,share_ecodeid:"",hour:0,needAsk:1,needlogin:!1}},onLoad:function(t){(0,r.initChannel)(t),console.log(_.globalData.from_gid),b.default.Page.init(),this.onload=1;var a=this;a.id=t.id,"undefined"!=t.title&&(console.log("setNavigationBarTitle",t.title),a.sharetitle=t.title,e.setNavigationBarTitle({title:a.sharetitle}));var s=e.getStorageSync("bannerNumber"),i=e.getStorageSync("user"),o=e.getStorageSync("userinfo");e.getUserInfo({success:function(t){if(a.hasUserinfo=!0,o.nickName==t.userInfo.nickName&&o.avatarUrl==t.userInfo.avatarUrl)_.globalData.user=i;else{var s={nickName:t.userInfo.nickName,avatarUrl:t.userInfo.avatarUrl,verify:0};_.globalData.user=s,e.setStorageSync("user",s),e.setStorageSync("userinfo",s)}},fail:function(e){}}),t.acid&&(_.globalData.acid=t.acid),this.canshareqzone=!1;var n=e.getStorageSync("playNumber"),l=e.getStorageSync("videoplayednumber");this.playNumber=n||0,this.bannerNumber=s||0,this.videoplayednumber=l||0,this.initQuestion(t),e.onUserCaptureScreen(function(e){a.userCaptureScreen()})},onUnload:function(){console.log("close"),this.onload=0},onShareAppMessage:function(){var e=this;console.log("id="+this.id+"&title="+this.sharetitle+"&ispush=1");var t="";t=this.shareqzonetitle?this.shareqzonetitle:this.sharetitle,this.showdingyue&&3==this.subscribe_status&&setTimeout(function(){e.addDingYue()},5e3);var a="/pages/home/index?id="+this.id+"&title="+this.sharetitle+"&ispush=1";return this.share_ecodeid&&(a="/pages/home/index?q=".concat(this.share_ecodeid)),console.log(a),{title:t,imageUrl:this.shareAppImage,path:a}},computed:{modelList:function(){if(this.modelContent)return this.modelContent.split("##")},subscribelist:function(){if(this.subscribe_content)return this.subscribe_content.split("##")},adcontent:function(){if(this.banneradcontent){if(1==this.banner_ad_style)return this.banneradcontent.split("##").join("，");if(2==this.banner_ad_style)return this.banneradcontent.split("##")}}},components:{AnswerBox:function(){return Promise.all([a.e("common/vendor"),a.e("components/AnswerBox")]).then(a.bind(null,"2b59"))},AuthorBox:function(){return Promise.all([a.e("common/vendor"),a.e("components/AuthorBox")]).then(a.bind(null,"7db3"))},QuestionNum:function(){return a.e("components/QuestionNum").then(a.bind(null,"1594"))}},methods:{initQuestion:function(t){var a=this;this.adtime=e.getStorageSync("ad_video");var s={appid:_.globalData.appid,ver:_.globalData.ver,sgid:_.globalData.from_gid,uid:(0,r.setUid)(),source:_.globalData.source,scene:_.globalData.scene,src:_.globalData.src,adtime:this.adtime?this.adtime:0,adplayed:this.bannerNumber,quizplayed:this.playNumber,videoplayed:this.videoplayednumber};t.id&&(s.id=t.id),t.q&&(s.q=t.q),e.request({url:_.globalData.host+"/index.php/App/Index/getQuizInfo",data:s,success:function(s){console.log(s.data);var i=s.data;if(t.q&&(a.round=i.round?i.round:"1",_.globalData.from_gid=s.data.id?s.data.id:"0",_.globalData.src=s.data.src?s.data.src:"301",a.hour=s.data.hour,a.id=s.data.id),b.default.Event.stat("participation",{gid:a.id}),a.needAsk=s.data.needAsk,a.showAds=1==i.showAds,a.forcedAds=1==i.forcedAds,a.quiztype=i.type,a.cancelinc=i.cancelinc,a.question_info=i,a.special_config=i.special_config,a.shuoshuo=i.shuoshuo,a.shuoshuo_sharetitle=i.shuoshuo_sharetitle,a.hasbannerad=i.banner_ad,a.transitiontime=10*parseInt(i.banner_ad_time),a.banneradutilid=i.banner_ad_utilid,a.banneradcontent=i.banner_ad_content,a.imageshare=i.imageshare,a.original=i.original,a.video_banner_ad=i.video_banner_ad,a.adBox_cancel_btn=i.adBox_cancel_btn,a.adBox_video_btn=i.adBox_video_btn,a.banner_ad_style=i.banner_ad_style,a.subscribe_status=i.subscribe_status?i.subscribe_status:0,a.subscribe_content=i.subscribe_content,a.adBox_style_type=i.adBox_style_type?i.adBox_style_type:1,a.showVideoModel=void 0!=i.show_video_model?i.show_video_model:1,"1109659848"==_.globalData.appid){var o=i.video_ad_utilid?i.video_ad_utilid:"54722faa6e7bc4733033911f21e83b90";console.log(i.video_ad_select),a.forcebutton=1!=i.video_ad_select}else"1109802828"==_.globalData.appid?(o=i.video_ad_utilid,a.forcebutton=!0):"wx"==_.globalData.apptype?(o=i.video_ad_utilid,console.log(i.video_ad_select),a.forcebutton=1!=i.video_ad_select):(_.globalData.appid="1109743918")&&(o=i.video_ad_utilid?i.video_ad_utilid:"",a.forcebutton=1!=i.video_ad_select);try{a.videoAd=wx.createRewardedVideoAd({adUnitId:o})}catch(e){}a.videoAd&&a.videoAd.onError(function(e){a.videoErr=!0}),a.showAds&&a.videoAd&&(a.transitiontime=10*parseInt(i.banner_videoad_time),a.banneradutilid=i.banner_videoad_utilid),a.title||(a.sharetitle=i.title,e.setNavigationBarTitle({title:i.title})),i.sharetitle&&(a.shareqzonetitle=i.sharetitle),!e.getStorageSync("user_top")&&i.settop&&(a.settop=i.settop,a.settop.img=n.static_host+s.data.settop.img,a.cancalSettop()),a.special_config&&0==a.hasUserinfo&&(a.needlogin=!0),console.log(a.needlogin),a.modelContent=i.adBox_desc,a.question=JSON.parse(i.question),a.options=a.question.map(function(){return 0}),i.logo&&a.add("AuthorBox",a.setObj({topicImage:n.static_host+i.logo})),setTimeout(function(){a.add("AuthorBox",a.setObj({desc:i.desc,start:a.start})),setTimeout(function(){a.loading=!1},500)},200)}})},sharefriend:function(e){console.log(e),2==e?b.default.Event.stat("sharestatistics",{sharetype:2,gid:this.id}):this.saveImageSmall?b.default.Event.stat("sharestatistics",{sharetype:1,gid:this.id}):b.default.Event.stat("sharestatistics",{sharetype:3,gid:this.id})},formSubmit:function(e){},userCaptureScreen:function(){var t=this.ceshiprogress?1:0;console.log({imagetype:this.CaptureImage,progress:t,gid:this.id}),b.default.Event.stat("captureScreen",{gid:this.id,capturetype:this.CaptureImage}),e.request({url:_.globalData.host+"/index.php/App/Index/incUserCaptureScreen",data:{imagetype:this.CaptureImage,progress:t,gid:this.id},success:function(e){console.log(e)}})},login:function(){var t=this;e.login({success:function(a){e.request({url:_.globalData.host+"/index.php/App/Index/getQQappOpenid",data:{js_code:a.code,appid:_.globalData.appid},success:function(a){e.setStorageSync("openid",a.data.openid),t.openid=a.data.openid}})}})},cancalSettop:function(){var e=this;setTimeout(function(){e.settop.status=0},4e4)},previewImages:function(){this.preview||(this.CaptureImage=1)},setObj:function(e){var t={desc:!1,question:!1,topicImage:!1,picture:!1,audio:!1,picarr:!1,options:!1,start:!1,nextQuestion:!1,prevQuestion:!1,resultImage:!1,viewPicture:!1,resultTjFlag:!0,savePicture:!1,animationData:""};for(var a in e)t[a]=e[a];return t},openQzone:function(e){var t=this,a="";a=this.shuoshuo_sharetitle?this.shuoshuo_sharetitle:this.shareqzonetitle,2==e?b.default.Event.stat("shareqzone",{gid:this.id,qzonetype:2}):this.saveImageSmall?b.default.Event.stat("shareqzone",{gid:this.id,qzonetype:1}):b.default.Event.stat("shareqzone",{gid:this.id,qzonetype:3}),this.showdingyue&&3==this.subscribe_status&&setTimeout(function(){t.addDingYue()},5e3),qq.openQzonePublish({text:a,media:[{type:"photo",path:this.resultImage}]})},start:function(){var e=this;1==this.subscribe_status?this.showSubscribe(function(){e.starGame()}):this.starGame()},starGame:function(){var e=this;this.add("AnswerBox",{text:"开始",avatar:this.answerAvatar}),setTimeout(function(){var t=e.question[0],a=e.resetOption(t.answer),s={question:t.question,picture:!!t.img&&n.static_host+t.img,options:a.options,picarr:a.picarr,nextQuestion:e.nextQuestion};e.add("QuestionNum",{num:e.current+1,len:e.question.length}),e.add("AuthorBox",e.setObj(s)),3!=e.question_info.type?e.current+=1:e.options[0]=1,o=setTimeout(function(){e.scrollToView=e.scrollId,e.scrollTop=1e3*e.count},400)},400)},nextQuestion:function(e){var t=this,a=!1;switch(clearTimeout(o),this.question_info.type){case"2":this.options[this.current-1]=this.question[this.current-1].answer[e.num].weight;break;case"3":var s=this.question[this.current].answer[e.num].next;parseInt(s)?(this.options[this.current]=parseInt(s),this.current=parseInt(s)-1):(a=!0,this.options[this.current]=s);break;default:this.options[this.current-1]=e.num.toUpperCase()}this.add("AnswerBox",{text:e.title?e.title:e.num,avatar:this.answerAvatar}),setTimeout(function(){t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count},100),this.current===this.question.length||a?(this.showbannerad=this.showAds&&this.videoAd,this.special_config&&0==this.hasUserinfo?(this.authorButton=!0,this.margin=!0):this.overAnswer()):setTimeout(function(){var e=t.question[t.current],a=t.resetOption(e.answer),s={question:e.question,picture:!!e.img&&n.static_host+e.img,options:a.options,picarr:a.picarr,audio:!!e.audio&&n.static_host+e.audio,nextQuestion:t.nextQuestion,prevQuestion:t.current>0,playAudiao:t.playAudiao};t.add("QuestionNum",{num:t.current+1,len:t.question.length}),t.add("AuthorBox",t.setObj(s)),o=setTimeout(function(){t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count},400),3!=t.question_info.type&&(t.current+=1)},400)},overAnswer:function(){var e=this;this.isfirstplay?this.showAds&&this.videoAd?0==this.showVideoModel?setTimeout(function(){e.makeResult()},500):setTimeout(function(){1==e.adBox_style_type?b.default.Event.stat("showvideomodel",{videotype:"3_"+_.globalData.ver,gid:e.id}):b.default.Event.stat("showvideomodel",{videotype:e.adBox_style_type+"_"+_.globalData.ver,gid:e.id}),console.log(!0),e.showmodel=!0},1e3):2==this.subscribe_status?this.showSubscribe(function(){e.scrollToView=e.scrollId,e.scrollTop=1e3*e.count,e.analyzeResult(),1==e.hasbannerad&&(e.showmodel=!0,setTimeout(function(){e.modelProgress()},1e3))}):(this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.analyzeResult(),1==this.hasbannerad&&(this.showmodel=!0,setTimeout(function(){e.modelProgress()},1e3))):(this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.analyzeResult())},checking:function(e){return!!/^[a-zA-Z]+$/.test(e)},prevQuestion:function(e){for(var t=this,a=this.options.length;a>0;a--)if(0!=this.options[a-1]){this.current=a-1,this.options[a-1]=0;break}this.add("AnswerBox",{text:"重新回答上一题",avatar:this.answerAvatar}),setTimeout(function(){t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count},100),setTimeout(function(){var e=t.question[t.current],a=t.resetOption(e.answer),s={question:e.question,picture:!!e.img&&n.static_host+e.img,options:a.options,picarr:a.picarr,nextQuestion:t.nextQuestion,prevQuestion:t.current>0};t.add("QuestionNum",{num:t.current+1,len:t.question.length}),t.add("AuthorBox",t.setObj(s)),3!=t.question_info.type&&(t.current+=1),setTimeout(function(){t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count},400)},500)},add:function(e,t){this.scrollId+=1,t.scrollid=this.scrollId,this.count+=.5,this.items.push({component:e,content:t})},resetOption:function(e){var t=[],a=!1;for(var s in e)e[s].img&&(a=!0),t.push({title:e[s].title,num:s,img:n.static_host+e[s].img});return{options:t,picarr:a}},getUserInfo:function(t){var a=this,s=this;this.showbannerad=this.showAds&&this.videoAd,t.detail&&t.detail.userInfo?(console.log("analyzeResult111111111111"),this.hasUserinfo=!0,this.authorButton=!1,this.margin=!1,_.globalData.user={nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl,verify:0},e.setStorageSync("user",_.globalData.user),e.setStorageSync("userinfo",{nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl}),this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,s.authorButton=!1,s.margin=!1,s.showAds&&s.videoAd?(console.log("analyzeResult11222221"),0==this.showVideoModel?(console.log("analyzeResul33333333333"),setTimeout(function(){a.makeResult()},500)):(1==this.adBox_style_type?b.default.Event.stat("showvideomodel",{videotype:"3_"+_.globalData.ver,gid:this.id}):b.default.Event.stat("showvideomodel",{videotype:this.adBox_style_type+"_"+_.globalData.ver+"_"+this.videoWatchNumber,gid:this.id}),console.log("analyzeResul4444444"),s.showmodel=!0)):(console.log("analyzeResult"),s.analyzeResult(),1==s.hasbannerad&&(s.showmodel=!0,setTimeout(function(){s.modelProgress()},1e3)))):(console.log("授权失败"),this.authorButton=!1,this.margin=!1,_.globalData.user={nickName:"趣测",avatarUrl:n.ssl_static_host+"quce/1562666285IKXQK.png"},this.resimg.avatar=n.ssl_static_host+"quce/1562666285IKXQK.png",this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,s.authorButton=!1,s.margin=!1,s.showAds&&s.videoAd?0==this.showVideoModel?setTimeout(function(){a.makeResult()},500):(1==this.adBox_style_type?b.default.Event.stat("showvideomodel",{videotype:"3_"+_.globalData.ver,gid:this.id}):b.default.Event.stat("showvideomodel",{videotype:this.adBox_style_type+"_"+_.globalData.ver,gid:this.id}),s.showmodel=!0):(s.analyzeResult(),1==s.hasbannerad&&(s.showmodel=!0,setTimeout(function(){s.modelProgress()},1e3))))},gohome:function(){console.log("cancal_video",{gid:this.id,cancaltype:"3_"+_.globalData.ver+"_"+this.videoWatchNumber,adstyletype:this.adBox_style_type}),b.default.Event.stat("cancal_video",{gid:this.id,cancaltype:"3_"+_.globalData.ver+"_"+this.videoWatchNumber,adstyletype:this.adBox_style_type}),e.navigateBack({delta:1})},modelProgress:function(){var t=this;this.addresultimg=!1;var a=setInterval(function(){t.progresspercent<100?t.progresspercent++:(clearInterval(a),setTimeout(function(){t.progressend=!0,t.imgfinished&&(t.showAds&&t.onload&&(t.bannerNumber=parseInt(t.bannerNumber)+1,e.setStorageSync("bannerNumber",t.bannerNumber)),t.addResultPicture(),t.showmodel=!1)},1e3))},this.transitiontime)},showChoose:function(){var e=this;this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.makeButton=!1,this.margin=!1,setTimeout(function(){e.showmodel=!0},100)},cancalModel:function(){this.showmodel=!1,this.videoButton=!0,this.margin=!1},watchBanner:function(){this.videoButton=!1,this.showmodel=!1,this.makeResult()},makeResult:function(){var t=this;console.log(this.videoAd);var a=this;this.showAds&&this.videoAd&&!this.videoErr?(a.makeRes=1,this.videoWatchNumber+=1,1==this.adBox_style_type?b.default.Event.stat("show_video",{showtype:"3_"+_.globalData.ver,gid:this.id}):(console.log("show_video",{showtype:this.adBox_style_type+"_"+_.globalData.ver+"_"+this.videoWatchNumber,gid:this.id}),b.default.Event.stat("show_video",{showtype:this.adBox_style_type+"_"+_.globalData.ver+"_"+this.videoWatchNumber,gid:this.id})),this.videoAd.load().then(function(){console.log("load sucess"),t.videoAd.show().catch(function(){a.analyzeResult()}),console.log("show"),t.videoAd.show(),t.videoAd.onClose(function(t){if(a.makeRes&&!a.videoErr){a.videoEnded=t.isEnded;var s=t.isEnded?1:0;s&&(a.bannerNumber=parseInt(a.bannerNumber)+1,e.setStorageSync("bannerNumber",a.bannerNumber),a.videoplayednumber=parseInt(a.videoplayednumber)+1,e.setStorageSync("videoplayednumber",a.videoplayednumber),e.setStorageSync("ad_video",Math.round((new Date).getTime()/1e3))),setTimeout(function(){e.request({url:_.globalData.host+"/index.php/App/Index/incQQAdsProgress",data:{progress:s,gid:a.id,appid:_.globalData.appid,sgid:_.globalData.from_gid,ver:_.globalData.ver,round:this.round,uid:(0,r.setUid)(),videonumber:a.videoWatchNumber,force:a.video_banner_ad?2:1},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(e){console.log(e)}})},500),t.isEnded?setTimeout(function(){console.log({playedtype:a.adBox_style_type+"_"+_.globalData.ver+"_"+a.videoWatchNumber,gid:a.id}),b.default.Event.stat("video_played",{playedtype:a.adBox_style_type+"_"+_.globalData.ver+"_"+a.videoWatchNumber,gid:a.id}),a.analyzeResult()},500):"1109659848"==_.globalData.appid||"1109743918"==_.globalData.appid||"wx"==_.globalData.apptype?(setTimeout(function(){console.log("cancal_video",{gid:a.id,cancaltype:"2_"+_.globalData.ver+"_"+a.videoWatchNumber,adstyletype:a.adBox_style_type}),b.default.Event.stat("cancal_video",{gid:a.id,cancaltype:"2_"+_.globalData.ver+"_"+a.videoWatchNumber,adstyletype:a.adBox_style_type+"_"+_.globalData.ver})},200),a.forcedAds?1==a.video_banner_ad?(a.showmodel=!0,a.showbannerad=!1,setTimeout(function(){a.analyzeResult(),a.progresswidth=100,a.modelProgress()},1e3)):a.videoButton=!0:setTimeout(function(){a.analyzeResult()},500)):"1109802828"==_.globalData.appid&&(a.forcedAds?a.showmodel=!0:setTimeout(function(){a.analyzeResult()},500)),a.makeRes=0}}),t.videoAd.onError(function(t){console.log(t),e.request({url:_.globalData.host+"/index.php/App/Index/incQQAdsProgress",data:{progress:2,gid:a.id,appid:_.globalData.appid,ver:_.globalData.ver,sgid:_.globalData.from_gid,uid:(0,r.setUid)(),round:this.round,errCode:t.errCode,errMsg:t.errMsg,videonumber:this.videoWatchNumber,force:a.video_banner_ad?2:1},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(e){console.log(e)}}),a.videoErr=!0,a.makeButton=!1,a.margin=!1,a.analyzeResult()})}).catch(function(){console.log("load fail"),a.makeButton=!1,a.margin=!1,a.analyzeResult()})):(console.log(1111111111111),a.makeButton=!1,a.margin=!1,a.analyzeResult())},analyzeResult:function(){var e=this;o=setTimeout(function(){e.parseResult()},400)},parseResult:function(){var t=this,a=[];this.options.map(function(e,t){0!=e&&(e=e.toString(),a.push(e.toUpperCase()))}),a=a.toString(",");var s=this;this.add("AuthorBox",this.setObj({question:"正在为您分析结果......"})),this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count;var i={id:this.question_info.id,acid:_.globalData.acid,userinput:_.globalData.user.nickName,isreplay:this.isreplay,sgid:_.globalData.from_gid,round:this.round,ver:_.globalData.ver,appid:_.globalData.appid,uid:(0,r.setUid)(),src:_.globalData.src,source:_.globalData.source,scene:_.globalData.scene,quizfrom:"wxapp"};0==this.needAsk?(i.israndresult=1,i.option="A"):i.option=a,e.request({url:_.globalData.host+"/index.php/Wetest/Entry/getresult",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:i,success:function(a){var i=a.data;if(t.resultData=a.data,s.resimg.qrcode=n.ssl_static_host+JSON.parse(a.data.attention).qrcode,s.resimg.result=n.ssl_static_host+JSON.parse(a.data.content).img,t.share_ecodeid=!!i.share_ecodeid&&i.share_ecodeid,s.shareImage=s.resimg.result,s.special_config&&s.special_config.result_image){var o=JSON.parse(a.data.content).threshold,r=JSON.parse(s.special_config.result_image)[o];r&&(s.resimg.result=n.ssl_static_host+r)}i.share_title&&(s.shareqzonetitle=i.share_title),i.share_shuoshuo_title&&(s.shuoshuo_sharetitle=i.share_shuoshuo_title),s.isfirstplay&&s.special_config?e.getImageInfo({src:_.globalData.user.avatarUrl,success:function(e){"gif"==e.type?s.resimg.avatar=n.ssl_static_host+"quce/1562666285IKXQK.png":s.resimg.avatar=_.globalData.user.avatarUrl,s.getImageAll(i,s.drawPicture)},fail:function(e){console.log(e)}}):s.getImageAll(a.data,s.drawPicture)}})},getImageAll:function(t,a){var s=0,i=this;for(var o in i.resimg)!function(o){e.getImageInfo({src:i.resimg[o],success:function(e){i.resimg[o]=e,3==(s+=1)&&a(t,i.resimg)},fail:function(e){console.log(e)}})}(o)},resultLongPress:function(e){this.showShare(2)},viewPicture:function(){if(this.imageshare)b.default.Event.stat("preview",{gid:this.id,previewtype:1}),this.preview=!this.preview,this.showshare=!1,this.saveImageSmall=!this.saveImageSmall,this.CaptureImage=this.preview?3:1;else{b.default.Event.stat("preview",{gid:this.id,previewtype:2});var t=this.resultImage,a=this;e.previewImage({urls:[t],success:function(e){a.CaptureImage=2,a.previewImage=!0}})}},showShare:function(e){this.saveImageSmall=2==e,this.showshare=!0},cancelShare:function(){this.showshare=!1},returnHome:function(){e.navigateBack({})},answerAgin:function(){var e=this;this.incsavestatus=!0,this.isreplay=1,this.isfirstplay=!1,this.shuoshuobutton=!1,this.button=!1,this.resimg={qrcode:"",result:"",avatar:_.globalData.user.avatarUrl?_.globalData.user.avatarUrl:n.ssl_static_host+"quce/1562666285IKXQK.png"},this.current=0,this.options=this.question.map(function(){return 0}),3==this.question_info.type&&(this.options[0]=1),setTimeout(function(){e.add("AnswerBox",{text:"再来一次",avatar:e.answerAvatar}),e.scrollToView=e.scrollId,setTimeout(function(){e.button=!1,e.margin=!1;var t=e.question[0],a=e.resetOption(t.answer),s={question:t.question,picture:!!t.img&&n.static_host+t.img,options:a.options,picarr:a.picarr,nextQuestion:e.nextQuestion};e.add("QuestionNum",{num:e.current+1,len:e.question.length}),e.add("AuthorBox",e.setObj(s)),3!=e.question_info.type&&(e.current+=1),setTimeout(function(){e.scrollToView=e.scrollId,e.scrollTop=1e3*e.count},400)},100)},100)},verifyUserInfo:function(t){e.request({url:_.globalData.host+"/index.php/App/Index/checkAppAvatar",data:{appid:_.globalData.appid,avatarUrl:_.globalData.user.avatarUrl,nickName:_.globalData.user.nickName},success:function(a){console.log(a),0==a.data.avatar_status&&(_.globalData.user.avatarUrl=a.data.url),0==a.data.name_status&&(_.globalData.user.nickName=a.data.name),_.globalData.user.verify=1,e.setStorageSync("user",_.globalData.user),t()},fail:function(e){console.log(e),t()}})},drawPicture:function(t,a){function s(t){setTimeout(function(){o.draw(!0,function(){setTimeout(function(){e.canvasToTempFilePath({x:0,y:0,width:t.canvasHW.width,height:t.canvasHW.height,destWidth:t.canvasHW.width,destHeight:t.canvasHW.height,quality:.5,canvasId:"canvas",success:function(a){t.resultImage=a.tempFilePath,setTimeout(function(){t.imgfinished=!0,t.addresultimg?t.addResultPicture():t.progressend&&(t.showmodel=!1,t.addResultPicture(),t.showAds&&t.onload&&(t.bannerNumber=parseInt(t.bannerNumber)+1,e.setStorageSync("bannerNumber",t.bannerNumber)))},100)}}),e.canvasToTempFilePath({x:0,y:0,width:t.canvasHW.width,height:512,destWidth:t.canvasHW.width,destHeight:512,quality:.5,canvasId:"canvas",success:function(e){t.shareAppImage=e.tempFilePath}})},500)})},500)}var i=this;this.canvasHW={width:a.result.width,height:a.result.height},console.log(this.canvasHW);var o=e.createCanvasContext("canvas"),n=this.special_config,r=JSON.parse(t.content).threshold;if(n&&n.headimg_config){var l=JSON.parse(n.headimg_config);r&&l[r]&&(l=l[r]),o.drawImage(a.avatar.path,0,0,a.avatar.width,a.avatar.height,l.x,l.y,l.width,l.height)}if(o.drawImage(a.result.path,0,0),o.drawImage(a.qrcode.path,0,0,a.qrcode.width,a.qrcode.height,0,a.result.height-a.qrcode.height*a.result.width/a.qrcode.width,a.result.width,a.qrcode.height*a.result.width/a.qrcode.width),n&&n.draw_config&&this.question_info.special_result){var u=JSON.parse(n.image_config),d=JSON.parse(n.draw_config);o.setFillStyle("rgb(".concat(u.c_r,", ").concat(u.c_g,", ").concat(u.c_b,")")),o.setFontSize(parseInt(u.font)),o.setTextAlign(d.align),o.setTextBaseline("top"),0==_.globalData.user.verify&&this.hasUserinfo?this.verifyUserInfo(function(){"center"==d.align?o.fillText(_.globalData.user.nickName,d.x?d.x:320,d.y):"right"==d.align?o.fillText(_.globalData.user.nickName,d.x,d.y):"left"==d.align&&o.fillText(_.globalData.user.nickName,d.x,d.y),s(i)}):("center"==d.align?o.fillText(_.globalData.user.nickName,d.x?d.x:320,d.y):"right"==d.align?o.fillText(_.globalData.user.nickName,d.x,d.y):"left"==d.align&&o.fillText(_.globalData.user.nickName,d.x,d.y),s(this))}else s(this)},addResultPicture:function(){var t=this;this.add("AuthorBox",this.setObj({resultImage:this.resultImage,viewPicture:this.viewPicture,savePicture:this.savePicture})),this.scrollToView=this.scrollId,this.ceshiprogress=!0,!this.cancelinc&&this.onload&&(this.postResult(),b.default.Event.stat("finishtest",{gid:this.id})),this.isfirstplay&&this.onload&&(this.playNumber=parseInt(this.playNumber)+1,e.setStorageSync("playNumber",this.playNumber)),setTimeout(function(){t.scrollTop=1e3*t.count,t.add("AuthorBox",t.setObj({question:"长按上方图片保存您的结果卡片"})),t.margin=!0,setTimeout(function(){t.margin=!0,t.shuoshuo?t.shuoshuobutton=!0:t.button=!0,t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count},400)},400)},postResult:function(){var t=this.videoEnded?this.bannerNumber:0;console.log(t);var a=this;if(a.resultTjFlag){var s;a.resultTjFlag=!1;var o=JSON.parse(a.resultData.content),n=JSON.parse(a.resultData.attention),l=_.globalData.host+"/index.php/Wetest/Entry/incGetresult";a.result=o.threshold,e.request({url:l,data:(s={src:_.globalData.src,id:a.question_info.id,acid:_.globalData.acid,result:o.threshold,account:n.account,idx:o.new_idx,round:this.round,appid:_.globalData.appid,sgid:_.globalData.from_gid,ver:_.globalData.ver},i(s,"src",_.globalData.src),i(s,"scene",_.globalData.scene),i(s,"source",_.globalData.source),i(s,"uid",(0,r.setUid)()),i(s,"videoad",t),i(s,"hour",this.hour),s),method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){a.resultTjFlag=!1},fail:function(){a.resultTjFlag=!0}})}},incImageSave:function(t,a){console.log("dst:"+a);var s=this;e.request({url:_.globalData.host+"/index.php/App/Index/commonLongtap",method:"POST",data:{result:s.result,gid:s.question_info.id,type:t,src:_.globalData.src,source:_.globalData.source,round:this.round,sgid:_.globalData.from_gid,uid:(0,r.setUid)(),scene:_.globalData.scene,appid:_.globalData.appid,ver:_.globalData.ver,dst:a},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}})},savePicture:function(t){var a=this.resultImage,s=this;wx.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?e.saveImageToPhotosAlbum({filePath:a,success:function(){e.showToast({title:"图片保存成功"}),s.showdingyue&&4==s.subscribe_status&&s.addDingYue(s.subscribe_status),console.log("save success"),s.saveImageSmall?(b.default.Event.stat("saveresultimage",{gid:s.id,savetype:1}),s.inlongSmall&&(s.incImageSave(1,2),s.inlongSmall=!1)):(b.default.Event.stat("saveresultimage",{gid:s.id,savetype:2}),s.inlongBig&&(s.incImageSave(1,3),s.inlongBig=!1))}}):e.saveImageToPhotosAlbum({filePath:a,success:function(){e.showToast({title:"图片保存成功"}),s.showdingyue&&4==s.subscribe_status&&s.addDingYue(s.subscribe_status),console.log("save success"),s.saveImageSmall?(b.default.Event.stat("saveresultimage",{gid:s.id,savetype:1}),s.inlongSmall&&(s.incImageSave(1,2),s.inlongSmall=!1)):(b.default.Event.stat("saveresultimage",{gid:s.id,savetype:2}),s.inlongBig&&(s.incImageSave(1,3),s.inlongBig=!1))},fail:function(t){e.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(e){wx.openSetting({})}})}})}})},showSubscribe:function(e){this.showdingyue&&"303"!=_.globalData.source?(this.dingyuemodel=!0,b.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_1"})):e()},cancalsub:function(){var e=this;switch(this.dingyuemodel=!1,b.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_3"}),this.subscribe_status){case 1:this.starGame();break;case 2:this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.analyzeResult(),1==this.hasbannerad&&(this.showmodel=!0,setTimeout(function(){e.modelProgress()},1e3))}},addDingYue:function(){var t=this;this.dingyuemodel=!1,b.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_2"}),qq.subscribeAppMsg({subscribe:!0,success:function(a){switch(v.addSubscribe(_,function(){e.setStorageSync("subscribe",1),b.default.Event.stat("addSubscribe",{subscribetype:_.globalData.ver+"_"+t.subscribe_status+"_1"})}),t.subscribe_status){case 1:t.starGame();break;case 2:t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count,t.analyzeResult()}},fail:function(a){switch(console.log("----subscribeAppMsg----fail",a),"subscribeAppMsg:fail no permission"==a.errMsg&&e.setStorageSync("subscribe",2),b.default.Event.stat("addSubscribe",{subscribetype:_.globalData.ver+"_"+t.subscribe_status+"_2"}),t.subscribe_status){case 1:t.starGame();break;case 2:t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count,t.analyzeResult(),1==t.hasbannerad&&(t.showmodel=!0,setTimeout(function(){t.modelProgress()},1e3))}}})}}};t.default=y}).call(this,a("543d").default)},"0a64":function(e,t,a){},2720:function(e,t,a){var s=function(){var e=this;e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},"548d":function(e,t,a){var s=a("0a64");a.n(s).a},"7d65":function(e,t,a){a.r(t);var s=a("2720"),i=a("958b");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("548d");var n=a("2877"),r=Object(n.a)(i.default,s.a,s.b,!1,null,"124ba3ab",null);t.default=r.exports},"958b":function(e,t,a){a.r(t);var s=a("04c4"),i=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);t.default=i.a},aa9e:function(e,t,a){(function(e){function t(e){return e&&e.__esModule?e:{default:e}}a("8b22"),a("921b"),t(a("66fd")),e(t(a("7d65")).default)}).call(this,a("543d").createPage)}},[["aa9e","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/quiz/index.js");
 		__wxRoute = 'pages/question/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/question/index.js';	define("pages/question/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/question/index"],{6230:function(t,e,s){s.r(e);var a=s("f371"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e.default=i.a},"71fe":function(t,e,s){s.r(e);var a=s("a302"),i=s("6230");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("db6b");var o=s("2877"),r=Object(o.a)(i.default,a.a,a.b,!1,null,"19375abe",null);e.default=r.exports},9498:function(t,e,s){},a302:function(t,e,s){var a=function(){var t=this;t.$createElement;t._self._c,t._isMounted||(t.e0=function(e){t.showshare=!0},t.e1=function(e){t.showshare=!1},t.e2=function(e){t.showshare=!1})},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},c3ff:function(t,e,s){(function(t){function e(t){return t&&t.__esModule?t:{default:t}}s("8b22"),s("921b"),e(s("66fd")),t(e(s("71fe")).default)}).call(this,s("543d").createPage)},db6b:function(t,e,s){var a=s("9498");s.n(a).a},f371:function(t,e,s){(function(t){function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("f47e")),o=s("c7c6"),r=a(s("94f5")),u=a(s("6f91")),l=a(s("1418")),c=getApp(),d=1,h="https://ssl-uploads-admin.cdn.itwlw.com/",g=new r.default,p={data:function(){return{topimg:u.default,closeIcon:l.default,question:null,answer:[],special:null,nouserInfo:!0,isready:!1,id:"",icons:{more:h+"quce/1577182509Bx4Bc.png",finish:h+"quce/1577182538fZtvL.png",start:h+"quce/1577182598bwTXf.png",Viewresults:h+"quce/1577182612NvSJM.png",ViewresultsVideo:h+"quce/1577182622UbusY.png"},finger:"../../static/question/finger3.png",animationData:"",scaleAnmia:!1,activenum:[],length:0,userInfo:null,audiores:{src:"",icon:h+"quce/1577182749m10yC.png",status:"pause",tips:"点击播放"},canvas:{width:640,height:1104},result:"",resultimg:"",showTips:!1,share_shuoshuo_title:"",showshare:!1,finished:!1,appid:c.globalData.appid,huangAd:[],videoAd:"",subscribe_status:0,afterquestion:[],resultTjFlag:!0,round:1,share_ecodeid:"",hour:0,videolockBox:!1,AdmodelContent:[],resultsofvideo:!0,showAdmodelClose:!1,resimg:{qrcode:"",resultTemp:"",nickName:"",avatarUrl:"",result:""},canaddDingYue:!1,subscribe_content:"",temp_answer:{},next_answer:{},options3:[],audio:"",nosave:"",reset:"",playing:"",issave:"",start:"",screenWidth:"",translateX:0,animation:{},aginActive:{},resultdata:{},loading:!0}},onLoad:function(e){var s=this;(0,o.initChannel)(e),console.log(c.globalData.from_gid),n.default.Page.init(),this.onload=1;var a=this;a.id=e.id,"undefined"!=e.title&&(console.log("setNavigationBarTitle",e.title),a.sharetitle=e.title,t.setNavigationBarTitle({title:a.sharetitle}));var i=t.getStorageSync("user"),r=t.getStorageSync("userinfo");t.getSetting({success:function(e){e.authSetting["scope.userInfo"]&&t.getUserInfo({success:function(e){if(a.nouserInfo=!1,r.nickName==e.userInfo.nickName&&r.avatarUrl==e.userInfo.avatarUrl)c.globalData.user=i,s.userInfo=i;else{var n={nickName:e.userInfo.nickName,avatarUrl:e.userInfo.avatarUrl,verify:0};c.globalData.user=n,s.userInfo=n,t.setStorageSync("user",n),t.setStorageSync("userinfo",n)}}})}}),e.acid&&(c.globalData.acid=e.acid),this.canshareqzone=!1;var u=t.getStorageSync("bannerNumber"),l=t.getStorageSync("playNumber"),d=t.getStorageSync("videoplayednumber");this.playNumber=l||0,this.bannerNumber=u||0,this.videoplayednumber=d||0,this.requestbannerlist(),this.initQuestion(e),t.onUserCaptureScreen(function(t){a.userCaptureScreen()})},onUnload:function(){console.log("close"),this.onload=0},onReady:function(){this.audio=qq.createInnerAudioContext("audio"),this.playing=0,this.nosave=!0,this.reset=0,this.issave=!1,this.start=!1;var t=qq.getSystemInfoSync();this.screenWidth=t.windowWidth,this.translateX=0,this.animation=qq.createAnimation({duration:400,timingFunction:"ease-in",delay:80}),this.aginActive=qq.createAnimation({duration:0,timingFunction:"linear",delay:0})},onShareAppMessage:function(){var t=this;console.log("id="+this.id+"&title="+this.sharetitle+"&ispush=1");var e="";e=this.shareqzonetitle?this.shareqzonetitle:this.sharetitle,this.showdingyue&&3==this.subscribe_status&&setTimeout(function(){t.addDingYue()},5e3);var s="/pages/home/index?id="+this.id+"&title="+this.sharetitle+"&ispush=1";return this.share_ecodeid&&(s="/pages/home/index?q=".concat(this.share_ecodeid)),console.log(s),{title:e,imageUrl:this.shareAppImage,path:s}},computed:{subscribelist:function(){if(this.subscribe_content)return this.subscribe_content.split("##")}},methods:{initQuestion:function(e){var s=this;this.adtime=t.getStorageSync("ad_video");var a={appid:c.globalData.appid,ver:c.globalData.ver,sgid:c.globalData.from_gid,uid:(0,o.setUid)(),source:c.globalData.source,scene:c.globalData.scene,src:c.globalData.src,adtime:this.adtime?this.adtime:0,adplayed:this.bannerNumber,quizplayed:this.playNumber,videoplayed:this.videoplayednumber};e.id&&(a.id=e.id),e.q&&(a.q=e.q),t.request({url:c.globalData.host+"/index.php/App/Index/getQuizInfo",data:a,success:function(t){console.log(t.data);var a=t.data;n.default.Event.stat("participation",{gid:s.id}),e.q&&(s.round=a.round?a.round:"1",c.globalData.from_gid=t.data.id?t.data.id:"0",c.globalData.src=t.data.src?t.data.src:"301",s.hour=t.data.hour,s.id=t.data.id),a.img=h+a.img,a.logo=h+a.logo;var i=JSON.parse(a.question);i=i.map(function(t,e){var s=[],a=[];for(var i in t.answer)t.answer[i].key=i.toUpperCase(),t.answer[i].title=t.answer[i].img?i:i+"."+t.answer[i].title,t.answer[i].img=t.answer[i].img?h+t.answer[i].img:"",t.answer[i].img&&a.push(t.answer[i].img),s.push(t.answer[i]);return t.img=t.img?h+t.img:"",t.answer=s,t.pictures=a,t.index=e,t});var o=a.video_ad_utilid?a.video_ad_utilid:"54722faa6e7bc4733033911f21e83b90";try{s.videoAd=wx.createRewardedVideoAd({adUnitId:o})}catch(t){}s.videoAd&&s.videoAd.onError(function(t){s.videoErr=!0}),s.temp_answer=i,s.next_answer=[s.temp_answer[0]],s.options3=[],s.question=a,s.answer=i,s.length=i.length,s.resultsofvideo=1==a.ad_model,s.showAdmodelClose=1==a.ad_model_close,s.AdmodelContent=a.ad_model_content?a.ad_model_content.split("##"):["你的测试结果已生成","看一个小视频,即可查看详情"],s.special=a.hasOwnProperty("special_config")?a.special_config:"",s.activenum=i.map(function(t){return""}),setTimeout(function(){s.loading=!1},1e3)}})},formSubmit:function(t){},userCaptureScreen:function(){var e=this.resultdata?1:0;console.log({imagetype:1,progress:e,gid:this.id}),n.default.Event.stat("captureScreen",{gid:this.id,capturetype:1}),t.request({url:c.globalData.host+"/index.php/App/Index/incUserCaptureScreen",data:{imagetype:1,progress:e,gid:this.id},success:function(t){console.log(t)}})},gohome:function(){console.log("cancal_video",{gid:this.id,cancaltype:"3_"+c.globalData.ver+"_"+this.videoWatchNumber,adstyletype:this.adBox_style_type}),n.default.Event.stat("cancal_video",{gid:this.id,cancaltype:"3_"+c.globalData.ver+"_"+this.videoWatchNumber,adstyletype:this.adBox_style_type}),t.navigateBack({delta:1})},modelProgress:function(){var e=this;this.addresultimg=!1;var s=setInterval(function(){e.progresspercent<100?e.progresspercent++:(clearInterval(s),setTimeout(function(){e.progressend=!0,e.imgfinished&&(e.showAds&&e.onload&&(e.bannerNumber=parseInt(e.bannerNumber)+1,t.setStorageSync("bannerNumber",e.bannerNumber)),e.addResultPicture(),e.showmodel=!1)},1e3))},this.transitiontime)},showChoose:function(){var t=this;this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.makeButton=!1,this.margin=!1,setTimeout(function(){t.showmodel=!0},100)},closevideoBox:function(){n.default.Event.stat("resultVdieoclose",{closetype:c.globalData.ver+"_3"}),this.videolockBox=!1,this.imgGif(),this.postResult()},savePicture:function(e){var s=this.resultimg,a=this;wx.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:s,success:function(){t.showToast({title:"图片保存成功"}),a.showdingyue&&4==a.subscribe_status&&a.addDingYue(a.subscribe_status),console.log("save success"),a.saveImageSmall?(n.default.Event.stat("saveresultimage",{gid:a.id,savetype:1}),a.inlongSmall&&(a.incImageSave(1,2),a.inlongSmall=!1)):(n.default.Event.stat("saveresultimage",{gid:a.id,savetype:2}),a.inlongBig&&(a.incImageSave(1,3),a.inlongBig=!1))}}):t.saveImageToPhotosAlbum({filePath:s,success:function(){t.showToast({title:"图片保存成功"}),a.showdingyue&&4==a.subscribe_status&&a.addDingYue(a.subscribe_status),console.log("save success"),a.saveImageSmall?(n.default.Event.stat("saveresultimage",{gid:a.id,savetype:1}),a.inlongSmall&&(a.incImageSave(1,2),a.inlongSmall=!1)):(n.default.Event.stat("saveresultimage",{gid:a.id,savetype:2}),a.inlongBig&&(a.incImageSave(1,3),a.inlongBig=!1))},fail:function(e){t.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(t){wx.openSetting({})}})}})}})},showSubscribe:function(t){this.showdingyue&&"303"!=c.globalData.source?(this.dingyuemodel=!0,n.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_1"})):t()},cancalsub:function(){var t=this;switch(this.dingyuemodel=!1,n.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_3"}),this.subscribe_status){case 1:this.starGame();break;case 2:this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.analyzeResult(),1==this.hasbannerad&&(this.showmodel=!0,setTimeout(function(){t.modelProgress()},1e3))}},login:function(){var e=this;t.login({success:function(s){t.request({url:c.globalData.host+"/index.php/App/Index/getQQappOpenid",data:{js_code:s.code,appid:c.globalData.appid},success:function(s){t.setStorageSync("openid",s.data.openid),e.openid=s.data.openid}})}})},addDingYue:function(t,e){!0===this.canaddDingYue?"function"==typeof qq.subscribeAppMsg?qq.subscribeAppMsg({subscribe:!0,success:function(s){g.addSubscribe(c,function(){qq.setStorageSync("subscribe",1),n.default.Event.stat("addSubscribe",{subscribetype:t+"_1"})}),e&&e()},fail:function(s){console.log("----subscribeAppMsg----fail",s),"subscribeAppMsg:fail no permission"==s.errMsg&&qq.setStorageSync("subscribe",2),n.default.Event.stat("addSubscribe",{subscribetype:t+"_2"}),e&&e()}}):(n.default.Event.stat("addSubscribe",{subscribetype:"subscribeAppMsg is not function"}),e&&e()):e&&e()},getAuthorize:function(e){var s=e.detail;if(s.hasOwnProperty("userInfo")){c.globalData.user={nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl,verify:0},c.globalData.userInfo=s.userInfo,t.setStorageSync("user",c.globalData.user),t.setStorageSync("userinfo",{nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl}),this.userInfo=s.userInfo,this.nouserInfo=!1;var a=!1;this.videoAd&&this.question.showAds&&!this.resultsofvideo&&(a=!0),a?this.watchVideoBanner():this.getResult()}},startgame:function(){if(this.start)return!1;this.start=!0,this.animation.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.animation.export(),this.temp_answer[0].audio&&(this.audio=qq.createInnerAudioContext("audio-0"),this.audio.play()),this.translateX=this.translateX-this.screenWidth,console.log("stargame")},saveImg:function(){var t=this;this.nosave=!1,qq.getSetting({success:function(e){console.log(e),e.authSetting["scope.writePhotosAlbum"]?qq.saveImageToPhotosAlbum({filePath:t.resultimg,success:function(){qq.showToast({title:"已保存到相册"}),4==t.question.subscribe_status&&t.addDingYue(t.question.subscribe_status),n.default.Event.stat("saveimg",{savetype:c.globalData.ver+"_"+t.id}),t.incImageSave(),setTimeout(function(){t.nosave=!0},1e3)},fail:function(t){console.log(e),qq.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(t){qq.openSetting({})}})}}):qq.saveImageToPhotosAlbum({filePath:t.resultimg,success:function(){qq.showToast({title:"已保存到相册"}),4==t.question.subscribe_status&&t.addDingYue(t.question.subscribe_status),n.default.Event.stat("saveimg",{savetype:c.globalData.ver+"_"+t.id}),t.incImageSave(),setTimeout(function(){t.nosave=!0},1e3)},fail:function(t){console.log(t),qq.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(t){qq.openSetting({})}})}})}})},startAnswer:function(){var t=this;1==this.question.subscribe_status?this.addDingYue(this.question.subscribe_status,function(){t.startgame()}):this.startgame()},nextAnswer:function(t,e){console.log(t,e);var s=this.activenum;if(s[e]===t||""!==s[e])return!1;this.temp_answer[e].audio&&(this.audiores={src:"",icon:"../../assets/icons/pause.png",status:"pause",tips:"点击播放"},0!==this.playing&&(this.playing=0,this.audio.stop()));var a=this.afterquestion;a.push(e),s[e]=t;var i=e+1,n=this.answer;if("3"===this.question.type){var o=this.temp_answer[e].answer[t].next;(o=parseInt(o))?(this.options3.push(o),this.next_answer.push(this.temp_answer[o-1]),n=this.next_answer,i=o-1):i=this.length}if(this.answer=n,this.activenum=s,this.afterquestion=a,i===this.length){console.log(this.special,this.nouserInfo,this.question.showAds);var r=!1;console.log(this.videoAd,this.question.showAds,!this.resultsofvideo),this.videoAd&&this.question.showAds&&!this.resultsofvideo&&(r=!0),this.nouserInfo||r?(this.isnext=!0,this.finished=!0):this.getResult()}else this.animation.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.animation.export(),this.temp_answer[i].audio&&(this.audio=qq.createInnerAudioContext("audio-".concat(i)),this.audio.play()),this.translateX=this.translateX-this.screenWidth},afterAnswer:function(t){var e=this.activenum,s=this.afterquestion;e[t]="",e[s[s.length-1]]="";var a=s[s.length-1];this.finished&&(e[s[s.length-2]]=""),this.temp_answer[t].audio&&(this.audiores={src:"",icon:"../../assets/icons/pause.png",status:"pause",tips:"点击播放"},0!==this.playing&&(this.playing=0,this.audio.stop()));var i=this.answer;"3"===this.question.type&&i.pop(),s.pop(),this.finished&&s.pop(),this.activenum=e,this.afterquestion=s,this.finished=!1,this.animation.translateX(this.translateX+this.screenWidth).step(),this.animationData=this.animation.export(),this.temp_answer[a].audio&&(this.audio=qq.createInnerAudioContext("audio-".concat(a)),this.audio.play()),this.translateX=this.translateX+this.screenWidth},getResult:function(){var t=this;qq.showLoading({title:"正在获取结果"});var e=this.question,s=this.answer,a="";if(this.question.needAsk){var i="3"!==e.type?this.activenum.map(function(t,i){switch(e.type){case"1":a=s[i].answer[t].key;break;case"2":a=s[i].answer[t].weight;break;case"8":a=s[i].answer[t].key}return a}):this.options3;a=i.toString(",")}else a="A";var n={appid:c.globalData.appid,ver:c.globalData.ver,userinput:this.userInfo.nickName,id:e.id,acid:0,ext:0,isreplay:this.reset,option:a,round:this.round,uid:(0,o.setUid)(),sgid:c.globalData.from_gid,src:c.globalData.src,source:c.globalData.source,scene:c.globalData.scene};this.needAsk||(n.israndresult=1),qq.request({url:c.globalData.host+"/index.php/Wetest/Entry/getresult",data:n,success:function(e){if(t.resultdata=e.data,t.resimg.qrcode=h+JSON.parse(e.data.attention).qrcode,t.resimg.resultTemp=h+JSON.parse(e.data.content).img,t.share_shuoshuo_title=e.data.share_shuoshuo_title,t.share_ecodeid=!!e.data.share_ecodeid&&e.data.share_ecodeid,t.special){if(t.special.result_image){var s=JSON.parse(e.data.content).threshold,a=JSON.parse(t.special.result_image)[s];a&&(t.resimg.resultTemp=h+a)}wx.getImageInfo({src:t.userInfo.avatarUrl,success:function(e){"gif"==e.type?t.resimg.avatarUrl="https://ssl-uploads-admin.cdn.itwlw.com/quce/1562666285IKXQK.png":t.resimg.avatarUrl=t.userInfo.avatarUrl,t.canvasDraw(3)},fail:function(e){t.resimg.avatarUrl=t.userInfo.avatarUrl,t.canvasDraw(3)}})}else t.canvasDraw(2)},fail:function(e){qq.showToast({icon:"none",title:"结果获取失败",success:function(){qq.hideLoading(),t.playAgin()}})}})},verifyUserInfo:function(e){t.request({url:c.globalData.host+"/index.php/App/Index/checkAppAvatar",data:{appid:c.globalData.appid,avatarUrl:c.globalData.user.avatarUrl,nickName:c.globalData.user.nickName},success:function(s){console.log(s),0==s.data.avatar_status&&(c.globalData.user.avatarUrl=s.data.url),0==s.data.name_status&&(c.globalData.user.nickName=s.data.name),c.globalData.user.verify=1,t.setStorageSync("user",c.globalData.user),e()},fail:function(t){console.log(t),e()}})},watchVideoBanner:function(){var t=this;d=1,n.default.Event.stat("show_video",{showtype:c.globalData.ver}),this.videoAd.show(),this.videoAd.onClose(function(e){if(d&&!t.videoErr){t.setData({videoEnded:e.isEnded});var s=e.isEnded?1:0;if(s){var a=parseInt(t.data.bannerNumber)+1,i=parseInt(t.data.videoplayednumber)+1;qq.setStorageSync("bannerNumber",a),qq.setStorageSync("videoplayednumber",i),qq.setStorageSync("ad_video",Math.round((new Date).getTime()/1e3))}setTimeout(function(){qq.request({url:c.globalData.host+"/index.php/App/Index/incQQAdsProgress",data:{progress:s,gid:t.id,appid:c.globalData.appid,ver:c.globalData.ver,sgid:c.globalData.from_gid,uid:(0,o.setUid)(),round:t.round,force:t.question.video_banner_ad?2:1,scene:c.globalData.scene},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(t){console.log(t)}})},500),e.isEnded?t.data.resultsofvideo?(n.default.Event.stat("resultVdieoclose",{closetype:c.globalData.ver+"_1"}),n.default.Event.stat("video_played",{playedtype:c.globalData.ver,gid:t.data.id}),t.videolockBox=!1,t.postResult(),t.imgGif()):setTimeout(function(){n.default.Event.stat("video_played",{playedtype:c.globalData.ver,gid:t.data.id}),t.getResult()},200):(setTimeout(function(){console.log("cancal_video",{gid:t.id,cancaltype:c.globalData.ver}),n.default.Event.stat("cancal_video",{gid:t.id,cancaltype:c.globalData.ver})},200),t.question.forcedAds||(t.resultsofvideo?(t.videolockBox=!1,t.imgGif()):setTimeout(function(){t.getResult()},200))),d=0}}),this.videoAd.onError(function(e){console.log(e),qq.request({url:c.globalData.host+"/index.php/App/Index/incQQAdsProgress",data:{progress:2,gid:t.id,appid:c.globalData.appid,ver:c.globalData.ver,uid:(0,o.setUid)(),sgid:c.globalData.from_gid,errCode:e.errCode,errMsg:e.errMsg,videonumber:this.videoWatchNumber,force:t.question.video_banner_ad?2:1,scene:c.globalData.scene},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(t){console.log(t)}}),t.videoErr=!0,t.resultsofvideo?(n.default.Event.stat("resultVdieoclose",{closetype:c.globalData.ver+"_2"}),t.videolockBox=!1,t.postResult(),t.imgGif()):t.getResult()})},canvasDraw:function(t){var e=this,s=this.resimg;new Promise(function(a,i){var n=0;for(var o in e.resimg)!function(i){e.resimg[i]&&qq.getImageInfo({src:s[i],success:function(s){e.resimg[i]=s,++n===t&&a(e.resimg)},fail:function(t){qq.showToast({icon:"none",title:"结果获取失败",success:function(){a(0)}})}})}(o)}).then(function(t){if(0===t)return e.showResult(e.resimg.resultTemp),!1;console.log(22222222222222),e.canvas={width:t.resultTemp.width,height:t.resultTemp.height};var s=qq.createCanvasContext("canvas"),a=e.special,i="";if(a&&a.headimg_config){i=JSON.parse(e.resultdata.content).threshold;var n=JSON.parse(a.headimg_config);n=n.hasOwnProperty(i)?n[i]:n,s.drawImage(t.avatarUrl.path,0,0,t.avatarUrl.width,t.avatarUrl.height,n.x,n.y,n.width,n.height)}s.drawImage(t.resultTemp.path,0,0,t.resultTemp.width,t.resultTemp.height),s.drawImage(t.qrcode.path,0,t.resultTemp.height-t.qrcode.height,t.qrcode.width,t.qrcode.height),new Promise(function(t,n){if(console.log(333333333),a&&a.draw_config){i=JSON.parse(e.resultdata.content).threshold;var o=JSON.parse(a.draw_config),r=JSON.parse(a.image_config);o=o.hasOwnProperty(i)?o[i]:o,s.setFillStyle("rgb(".concat(r.c_r,", ").concat(r.c_g,", ").concat(r.c_b,")")),s.setFontSize(parseInt(r.font)),s.setTextAlign(o.align),s.setTextBaseline("top"),0!=c.globalData.user.verify||e.nouserInfo?("center"==o.align?s.fillText(e.userInfo.nickName,o.x?o.x:320,o.y):"right"==o.align?s.fillText(e.userInfo.nickName,o.x,o.y):"left"==o.align&&s.fillText(e.userInfo.nickName,o.x,o.y),t()):e.verifyUserInfo(function(){"center"==o.align?s.fillText(e.userInfo.nickName,o.x?o.x:320,o.y):"right"==o.align?s.fillText(e.userInfo.nickName,o.x,o.y):"left"==o.align&&s.fillText(e.userInfo.nickName,o.x,o.y),t()})}else t()}).then(function(){setTimeout(function(){s.draw(!0,function(){setTimeout(function(){qq.canvasToTempFilePath({x:0,y:0,width:e.canvas.width,height:e.canvas.height,destWidth:e.canvas.width,destHeight:e.canvas.height,canvasId:"canvas",success:function(t){e.showResult(t.tempFilePath)},fail:function(s){e.showResult(t.resultTemp)}})},200)})},100)})})},showResult:function(t){var e=this;console.log(t);var s=!1;console.log(this.videoAd,this.question.showAds,this.resultsofvideo),this.videoAd&&this.question.showAds&&this.resultsofvideo&&(s=!0,n.default.Event.stat("resultvideoshow",{})),this.resultimg=t,qq.hideLoading();var a=parseInt(this.playNumber)+1;qq.setStorageSync("playNumber",a),this.animation.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.animation.export(),this.translateX=this.translateX-this.screenWidth,setTimeout(function(){e.scaleAnmia=!0,console.log(s),e.videolockBox=s,setTimeout(function(){e.showTips=!0,s||(e.imgGif(),e.postResult()),2==e.question.subscribe_status&&e.addDingYue(e.question.subscribe_status)},900)},500)},openQzone:function(t){var e=this;n.default.Event.stat("shareqzone",{gid:this.id,qzonetype:2});var s="";s=this.share_shuoshuo_title?this.share_shuoshuo_title:this.question.title,3==this.question.subscribe_status&&setTimeout(function(){e.addDingYue(e.question.subscribe_status)},5e3),qq.openQzonePublish({text:s,media:[{type:"photo",path:this.resultimg}]})},postResult:function(){var e=this.videoEnded?this.bannerNumber:0;console.log(e);var s=this;if(s.resultTjFlag){var a;s.resultTjFlag=!1,console.log(s.resultdata);var n=JSON.parse(s.resultdata.content),r=JSON.parse(s.resultdata.attention),u=c.globalData.host+"/index.php/Wetest/Entry/incGetresult";s.result=n.threshold,t.request({url:u,data:(a={src:c.globalData.src,id:s.id,acid:c.globalData.acid,result:n.threshold,account:r.account,idx:n.new_idx,round:this.round,appid:c.globalData.appid,sgid:c.globalData.from_gid,ver:c.globalData.ver},i(a,"src",c.globalData.src),i(a,"scene",c.globalData.scene),i(a,"source",c.globalData.source),i(a,"uid",(0,o.setUid)()),i(a,"videoad",e),i(a,"hour",this.hour),a),method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){s.resultTjFlag=!1},fail:function(){s.resultTjFlag=!0}})}},incImageSave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;console.log("dst:"+s);var a=this;t.request({url:c.globalData.host+"/index.php/App/Index/commonLongtap",method:"POST",data:{result:a.result,gid:a.id,type:e,src:c.globalData.src,source:c.globalData.source,round:this.round,sgid:c.globalData.from_gid,uid:(0,o.setUid)(),scene:c.globalData.scene,appid:c.globalData.appid,ver:c.globalData.ver,dst:s},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){}})},imgGif:function(){var t=this,e=0,s=setInterval(function(){t.finger="../../static/question/finger".concat(e%3+1,".png"),++e>17&&(t.showTips=!1,clearInterval(s))},300)},playAgin:function(){var t=this;this.start=!1,this.translateX=0,this.next_answer=[this.temp_answer[0]],this.reset=1,this.issave=!1,this.resimg={qrcode:"",resultTemp:"",nickName:"",avatarUrl:"",result:""},this.activenum=this.temp_answer.map(function(t){return""}),this.scaleAnmia=!1,this.aginActive.translateX(this.translateX-this.screenWidth).step(),this.setData({animation:this.aginActive.export()},function(){t.translateX=t.translateX-t.screenWidth})},noaskresult:function(){var t=!1;this.videoAd&&this.question.showAds&&!this.resultsofvideo&&(t=!0),t?this.watchVideoBanner():this.getResult()},playVoice:function(t){var e=this,s={src:h+this.temp_answer[t].audio,icon:"../../assets/icons/play.gif",status:"playing",tips:"正在播放"},a={src:"",icon:"../../assets/icons/pause.png",status:"pause",tips:"点击播放"},i={src:h+this.temp_answer[t].audio,icon:"../../assets/icons/pause.png",status:"pause",tips:"已暂停"};0===this.playing?(this.audio.src=s.src,this.audiores=s,this.playing=1,this.audio.play()):1===this.playing?(this.playing=2,this.audio.pause(),this.audiores=i):2===this.playing&&(this.audiores=s,this.playing=1,this.audio.play()),this.audio.onEnded(function(){e.playing=0,e.audiores=a})},requestbannerlist:function(){var t=this;wx.request({url:c.globalData.getJumpUrl+"Wxapp/BoxApi/getJumpList",data:{appid:c.globalData.appid,channel:4},success:function(e){t.huangAd=e.data}})},candingyue:function(){var t=this;qq.getSetting({success:function(e){console.log("订阅全新",e.authSetting["scope.appMsgSubscribed"]),void 0===e.authSetting["scope.appMsgSubscribed"]&&"function"==typeof qq.subscribeAppMsg&&(t.canaddDingYue=!0),!0===e.authSetting["scope.appMsgSubscribed"]&&1!=qq.getStorageSync("subscribe")&&g.addSubscribe(c,function(){qq.setStorageSync("subscribe",1),n.default.Event.stat("addSubscribe",{subscribetype:type+"_1"})}),!1===e.authSetting["scope.appMsgSubscribed"]&&qq.setStorageSync("subscribe",2)}})}}};e.default=p}).call(this,s("543d").default)}},[["c3ff","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/question/index.js");
 		__wxRoute = 'pages/quizchoiceness/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/quizchoiceness/index.js';	define("pages/quizchoiceness/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/quizchoiceness/index"],{"5bf7":function(e,t,a){(function(e){function t(e){return e&&e.__esModule?e:{default:e}}a("8b22"),a("921b"),t(a("66fd")),e(t(a("f3a3")).default)}).call(this,a("543d").createPage)},7789:function(e,t,a){var s=function(){var e=this;e.$createElement;e._self._c,e._isMounted||(e.e0=function(t){t.stopPropagation(),t.preventDefault(),e.showshare=!0})},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},b4a7:function(e,t,a){},c4e4:function(e,t,a){a.r(t);var s=a("cc9b"),i=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);t.default=i.a},cc9b:function(e,t,a){(function(e){function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("4e22"),n=a("c7c6"),r=s(a("cd71")),l=s(a("6654")),d=s(a("6f91")),u=s(a("a94b")),c=s(a("a6fa")),h=s(a("0861")),g=s(a("3324")),p=s(a("57a0")),m=s(a("1418")),f=s(a("f47e")),v=new(s(a("94f5")).default),b=getApp(),_={data:function(){var e;return e={closeIcon:m.default,uzinfoData:{},watchBtn:g.default,videoButton:!1,originalQuce:r.default,videoIcon:p.default,previewImage:!1,authorButton:!1,makeButton:!1,question_info:{},special_config:{},showTips:"",question:[],shareOther:u.default,shuoshuotu:c.default,againimg:h.default,items:[],scrollTop:0,current:0,oldCurrent:0,count:0,input:!1,button:!1,margin:!1,nickname:"",message:"",showMessage:!1,canvasHW:{width:750,height:950},options:[],answerAvatar:b.globalData.user.avatarUrl?b.globalData.user.avatarUrl:l.default,resimg:{qrcode:"",result:"",avatar:b.globalData.user.avatarUrl?b.globalData.user.avatarUrl:o.ssl_static_host+"quce/1562666285IKXQK.png"},preview:!1,resultImage:"",isfirstplay:!0,resultTjFlag:!0,result:"",sharetitle:"",quiztype:"",incsavestatus:!0,inlongSmall:!0,inlongBig:!0,isreplay:!1,end:0,shareImage:"",id:"",scrollId:0,scrollToView:"",videoAd:"",showAds:!1,forcedAds:!1,makeRes:1,videoEnded:!1,uid:"",cancelinc:"",showshare:!1,modelContent:"",showmodel:!1,topimg:d.default,settop:"",imageshare:"",openid:"",ceshiprogress:!1,shareqzonetitle:"",shuoshuo:"",shuoshuobutton:!1,adtime:0,shareAppImage:"",playNumber:0,bannerNumber:0,resultData:"",CaptureImage:1,saveImageSmall:!0,hasUserinfo:!1,videoErr:!1,shuoshuo_sharetitle:"",canshareqzone:!0,loading:!0,progresspercent:0,transitiontime:60,progressend:!1,imgfinished:!1,finished:!1,hasbannerad:0,banneradutilid:"",showbannerad:!1,addresultimg:!0,banneradcontent:"",forcebutton:!1,original:"",video_banner_ad:"",adBox_cancel_btn:"",adBox_video_btn:"",banner_ad_style:"",adBox_style_type:"",showVideoModel:"",onLoad:1,videoplayednumber:"",videoLoad:!1,videoWatchNumber:0,showdingyue:!1,dingyuemodel:!1,subscribe_status:0,subscribe_content:"",round:1,share_ecodeid:"",hour:0,needAsk:1,needlogin:!1,icons:{more:o.static_host+"quce/1577182509Bx4Bc.png",finish:o.static_host+"quce/1577182538fZtvL.png",start:o.static_host+"quce/1577182598bwTXf.png",Viewresults:o.static_host+"quce/1577182612NvSJM.png",ViewresultsVideo:o.static_host+"quce/1577182622UbusY.png"},finger:"../../static/question/finger3.png",animationData:"",animation:"",scaleAnmia:!1,temp_answer:{},next_answer:{},options3:[],audio:"",audiores:{src:"",icon:"../../static/question/pause.png",status:"pause",tips:"点击播放"},nosave:"",reset:"",playing:"",issave:"",start:"",screenWidth:"",translateX:0},i(e,"animation",{}),i(e,"aginActive",{}),i(e,"afterquestion",[]),i(e,"activenum",[]),i(e,"videolockBox",!1),i(e,"AdmodelContent",[]),i(e,"resultsofvideo",!0),i(e,"showAdmodelClose",!1),i(e,"huangAd",""),i(e,"questionLength",0),e},components:{channelFour:function(){return a.e("components/ChannelFour").then(a.bind(null,"2121"))}},onLoad:function(t){(0,n.initChannel)(t),console.log(b.globalData.from_gid),f.default.Page.init(),this.onload=1;var a=this;a.id=t.id,"undefined"!=t.title&&(console.log("setNavigationBarTitle",t.title),a.sharetitle=t.title,e.setNavigationBarTitle({title:a.sharetitle}));var s=e.getStorageSync("bannerNumber"),i=e.getStorageSync("user"),o=e.getStorageSync("userinfo");e.getUserInfo({success:function(t){if(a.hasUserinfo=!0,o.nickName==t.userInfo.nickName&&o.avatarUrl==t.userInfo.avatarUrl)b.globalData.user=i;else{var s={nickName:t.userInfo.nickName,avatarUrl:t.userInfo.avatarUrl,verify:0};b.globalData.user=s,e.setStorageSync("user",s),e.setStorageSync("userinfo",s)}},fail:function(e){}}),t.acid&&(b.globalData.acid=t.acid),this.canshareqzone=!1;var r=e.getStorageSync("playNumber"),l=e.getStorageSync("videoplayednumber");this.playNumber=r||0,this.bannerNumber=s||0,this.videoplayednumber=l||0,this.requestbannerlist(),this.initQuestion(t),e.onUserCaptureScreen(function(e){a.userCaptureScreen()})},onUnload:function(){console.log("close"),this.onload=0},onShareAppMessage:function(){var e=this;console.log("id="+this.id+"&title="+this.sharetitle+"&ispush=1");var t="";t=this.shareqzonetitle?this.shareqzonetitle:this.sharetitle,this.showdingyue&&3==this.subscribe_status&&setTimeout(function(){e.addDingYue()},5e3);var a="/pages/home/index?id="+this.id+"&title="+this.sharetitle+"&ispush=1";return this.share_ecodeid&&(a="/pages/home/index?q=".concat(this.share_ecodeid)),console.log(a),{title:t,imageUrl:this.shareAppImage,path:a}},onReady:function(){this.audio=e.createInnerAudioContext("audio"),this.playing=0,this.nosave=!0,this.reset=0,this.issave=!1,this.start=!1;var t=e.getSystemInfoSync();this.screenWidth=t.windowWidth,this.translateX=0,this.animation=e.createAnimation({duration:400,timingFunction:"ease-in",delay:80}),this.aginActive=e.createAnimation({duration:0,timingFunction:"linear",delay:0})},computed:{modelList:function(){if(this.modelContent)return this.modelContent.split("##")},preventTouchMove:function(){return!1},subscribelist:function(){if(this.subscribe_content)return this.subscribe_content.split("##")},adcontent:function(){if(this.banneradcontent){if(1==this.banner_ad_style)return this.banneradcontent.split("##").join("，");if(2==this.banner_ad_style)return this.banneradcontent.split("##")}}},methods:{initQuestion:function(t){var a=this;this.adtime=e.getStorageSync("ad_video");var s={appid:b.globalData.appid,ver:b.globalData.ver,sgid:b.globalData.from_gid,uid:(0,n.setUid)(),source:b.globalData.source,scene:b.globalData.scene,src:b.globalData.src,adtime:this.adtime?this.adtime:0,adplayed:this.bannerNumber,quizplayed:this.playNumber,videoplayed:this.videoplayednumber};t.id&&(s.id=t.id),t.q&&(s.q=t.q),e.request({url:b.globalData.host+"/index.php/App/Index/getQuizInfo",data:s,success:function(s){console.log(s.data);var i=s.data;if(t.q&&(a.round=i.round?i.round:"1",b.globalData.from_gid=s.data.id?s.data.id:"0",b.globalData.src=s.data.src?s.data.src:"301",a.hour=s.data.hour,a.id=s.data.id),f.default.Event.stat("participation",{gid:a.id}),i.img=o.static_host+i.img,i.logo=o.static_host+i.logo,a.uzinfoData=i,a.needAsk=s.data.needAsk,a.showAds=1==i.showAds,a.forcedAds=1==i.forcedAds,a.quiztype=i.type,a.cancelinc=i.cancelinc,a.question_info=i,a.special_config=i.special_config,a.shuoshuo=i.shuoshuo,a.shuoshuo_sharetitle=i.shuoshuo_sharetitle,a.hasbannerad=i.banner_ad,a.transitiontime=10*parseInt(i.banner_ad_time),a.banneradutilid=i.banner_ad_utilid,a.banneradcontent=i.banner_ad_content,a.imageshare=i.imageshare,a.original=i.original,a.video_banner_ad=i.video_banner_ad,a.adBox_cancel_btn=i.adBox_cancel_btn,a.adBox_video_btn=i.adBox_video_btn,a.banner_ad_style=i.banner_ad_style,a.subscribe_status=i.subscribe_status?i.subscribe_status:0,a.subscribe_content=i.subscribe_content,a.adBox_style_type=i.adBox_style_type?i.adBox_style_type:1,a.showVideoModel=void 0!=i.show_video_model?i.show_video_model:1,a.resultsofvideo=1==i.ad_model,a.showAdmodelClose=1==i.ad_model_close,a.AdmodelContent=i.ad_model_content?i.ad_model_content.split("##"):["你的测试结果已生成","看一个小视频,即可查看详情"],"1109659848"==b.globalData.appid){var n=i.video_ad_utilid?i.video_ad_utilid:"54722faa6e7bc4733033911f21e83b90";console.log(i.video_ad_select),a.forcebutton=1!=i.video_ad_select}else"1109802828"==b.globalData.appid?(n=i.video_ad_utilid,a.forcebutton=!0):"wx"==b.globalData.apptype?(n=i.video_ad_utilid,console.log(i.video_ad_select),a.forcebutton=1!=i.video_ad_select):(b.globalData.appid="1109743918")&&(n=i.video_ad_utilid?i.video_ad_utilid:"",a.forcebutton=1!=i.video_ad_select);try{a.videoAd=wx.createRewardedVideoAd({adUnitId:n})}catch(e){}a.videoAd&&a.videoAd.onError(function(e){a.videoErr=!0}),a.showAds&&a.videoAd&&(a.transitiontime=10*parseInt(i.banner_videoad_time),a.banneradutilid=i.banner_videoad_utilid),a.title||(a.sharetitle=i.title,e.setNavigationBarTitle({title:i.title})),i.sharetitle&&(a.shareqzonetitle=i.sharetitle),!e.getStorageSync("user_top")&&i.settop&&(a.settop=i.settop,a.settop.img=o.static_host+s.data.settop.img,a.cancalSettop()),a.special_config&&0==a.hasUserinfo&&(a.needlogin=!0),console.log(a.needlogin),a.modelContent=i.adBox_desc;var r=JSON.parse(i.question);r=r.map(function(e,t){var a=[],s=[];for(var i in e.answer)e.answer[i].key=i.toUpperCase(),e.answer[i].title=e.answer[i].img?i:i+"."+e.answer[i].title,e.answer[i].img=e.answer[i].img?o.static_host+e.answer[i].img:"",e.answer[i].img&&s.push(e.answer[i].img),a.push(e.answer[i]);return e.img=e.img?o.static_host+e.img:"",e.answer=a,e.pictures=s,e.index=t,e}),a.temp_answer=r,a.next_answer=[a.temp_answer[0]],a.options3=[],a.question=r,a.questionLength=r.length,a.activenum=a.question.map(function(){return""}),setTimeout(function(){a.loading=!1},1e3)}})},requestbannerlist:function(){var e=this;v.getJumpList(4,b.globalData.appid,function(t){e.huangAd=t})},sharefriend:function(e){console.log(e),2==e?f.default.Event.stat("sharestatistics",{sharetype:2,gid:this.id}):this.saveImageSmall?f.default.Event.stat("sharestatistics",{sharetype:1,gid:this.id}):f.default.Event.stat("sharestatistics",{sharetype:3,gid:this.id})},formSubmit:function(e){},userCaptureScreen:function(){var t=this.ceshiprogress?1:0;console.log({imagetype:this.CaptureImage,progress:t,gid:this.id}),f.default.Event.stat("captureScreen",{gid:this.id,capturetype:this.CaptureImage}),e.request({url:b.globalData.host+"/index.php/App/Index/incUserCaptureScreen",data:{imagetype:this.CaptureImage,progress:t,gid:this.id},success:function(e){console.log(e)}})},login:function(){var t=this;e.login({success:function(a){e.request({url:b.globalData.host+"/index.php/App/Index/getQQappOpenid",data:{js_code:a.code,appid:b.globalData.appid},success:function(a){e.setStorageSync("openid",a.data.openid),t.openid=a.data.openid}})}})},cancalSettop:function(){var e=this;setTimeout(function(){e.settop.status=0},4e4)},previewImages:function(){this.preview||(this.CaptureImage=1)},openQzone:function(e){var t=this,a="";a=this.shuoshuo_sharetitle?this.shuoshuo_sharetitle:this.shareqzonetitle,2==e?f.default.Event.stat("shareqzone",{gid:this.id,qzonetype:2}):this.saveImageSmall?f.default.Event.stat("shareqzone",{gid:this.id,qzonetype:1}):f.default.Event.stat("shareqzone",{gid:this.id,qzonetype:3}),this.showdingyue&&3==this.subscribe_status&&setTimeout(function(){t.addDingYue()},5e3),qq.openQzonePublish({text:a,media:[{type:"photo",path:this.resultImage}]})},startG:function(){var e=this;1==this.subscribe_status?this.showSubscribe(function(){e.starGame()}):this.starGame()},starGame:function(){if(this.start)return!1;this.start=!0,this.animation.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.animation.export(),this.temp_answer[0].audio&&(this.audio=e.createInnerAudioContext("audio-0"),this.audio.play()),this.translateX=this.translateX-this.screenWidth},nextAnswer:function(t,a){var s=this.activenum;if(s[a]===t||""!==s[a])return!1;this.temp_answer[a].audio&&(this.audiores={src:"",icon:"../../assets/icons/pause.png",status:"pause",tips:"点击播放"},0!==this.playing&&(this.playing=0,this.audio.stop()));var i=this.afterquestion;i.push(a),s[a]=t;var o=a+1,n=this.question;if("3"===this.uzinfoData.type){var r=this.temp_answer[a].answer[t].next;(r=parseInt(r))?(this.options3.push(r),this.next_answer.push(this.temp_answer[r-1]),n=this.next_answer,o=r-1):o=this.questionLength}console.log(11),this.question=n,this.activenum=s,this.afterquestion=i,o===this.questionLength?(this.showbannerad=this.showAds&&this.videoAd,this.special_config&&0==this.hasUserinfo?(this.isnext=!0,this.finished=!0):this.overAnswer()):(this.animation.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.animation.export(),this.temp_answer[o].audio&&(this.audio=e.createInnerAudioContext("audio-".concat(o)),this.audio.play()),this.translateX=this.translateX-this.screenWidth)},overAnswer:function(){var t=this;this.showbannerad=this.showAds&&this.videoAd,this.finished=!0,this.isfirstplay?this.showAds&&this.videoAd?this.resultsofvideo?(e.showLoading({title:"正在获取结果",mask:!0}),this.analyzeResult()):0==this.showVideoModel?(console.log(1111111,!0,111),setTimeout(function(){t.makeResult()},500)):setTimeout(function(){1==t.adBox_style_type?f.default.Event.stat("showvideomodel",{videotype:"3_"+b.globalData.ver,gid:t.id}):f.default.Event.stat("showvideomodel",{videotype:t.adBox_style_type+"_"+b.globalData.ver,gid:t.id}),t.needAsk?t.showmodel=!0:t.makeResult()},100):(console.log(1111111,!1),2==this.subscribe_status?this.showSubscribe(function(){t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count,t.analyzeResult(),1==t.hasbannerad&&(t.showmodel=!0,setTimeout(function(){t.modelProgress()},1e3))}):(this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.analyzeResult(),1==this.hasbannerad&&(this.showmodel=!0,setTimeout(function(){t.modelProgress()},1e3)))):(e.showLoading({title:"正在获取结果"}),this.analyzeResult())},checking:function(e){return!!/^[a-zA-Z]+$/.test(e)},prevQuestion:function(t){if(this.finished)return!1;var a=this.activenum,s=this.afterquestion;a[t]="",a[s[s.length-1]]="";var i=s[s.length-1];this.finished&&(a[s[s.length-2]]=""),this.temp_answer[t].audio&&(this.audiores={src:"",icon:"../../assets/icons/pause.png",status:"pause",tips:"点击播放"},0!==this.playing&&(this.playing=0,this.audio.stop()));var o=this.question;"3"===this.question.type&&o.pop(),s.pop(),this.finished&&s.pop(),this.activenum=a,this.afterquestion=s,this.finished=!1,this.animation.translateX(this.translateX+this.screenWidth).step(),this.animationData=this.animation.export(),this.temp_answer[i].audio&&(this.audio=e.createInnerAudioContext("audio-".concat(i)),this.audio.play()),this.translateX=this.translateX+this.screenWidth},resetOption:function(e){var t=[],a=!1;for(var s in e)e[s].img&&(a=!0),t.push({title:e[s].title,num:s,img:o.static_host+e[s].img});return{options:t,picarr:a}},getUserInfo:function(t){var a=this,s=this;this.showbannerad=this.showAds&&this.videoAd,t.detail&&t.detail.userInfo?(this.hasUserinfo=!0,this.authorButton=!1,this.margin=!1,b.globalData.user={nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl,verify:0},e.setStorageSync("user",b.globalData.user),e.setStorageSync("userinfo",{nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl}),this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,s.authorButton=!1,s.margin=!1,s.showAds&&s.videoAd?0==this.showVideoModel?setTimeout(function(){a.makeResult()},500):(1==this.adBox_style_type?f.default.Event.stat("showvideomodel",{videotype:"3_"+b.globalData.ver,gid:this.id}):f.default.Event.stat("showvideomodel",{videotype:this.adBox_style_type+"_"+b.globalData.ver+"_"+this.videoWatchNumber,gid:this.id}),console.log("analyzeResul4444444"),s.showmodel=!0):(console.log("analyzeResult"),s.analyzeResult(),1==s.hasbannerad&&(s.showmodel=!0,setTimeout(function(){s.modelProgress()},1e3)))):(console.log("授权失败"),this.authorButton=!1,this.margin=!1,b.globalData.user={nickName:"趣测",avatarUrl:o.ssl_static_host+"quce/1562666285IKXQK.png"},this.resimg.avatar=o.ssl_static_host+"quce/1562666285IKXQK.png",this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,s.authorButton=!1,s.margin=!1,s.showAds&&s.videoAd?0==this.showVideoModel?setTimeout(function(){a.makeResult()},500):(1==this.adBox_style_type?f.default.Event.stat("showvideomodel",{videotype:"3_"+b.globalData.ver,gid:this.id}):f.default.Event.stat("showvideomodel",{videotype:this.adBox_style_type+"_"+b.globalData.ver,gid:this.id}),s.showmodel=!0):(s.analyzeResult(),1==s.hasbannerad&&(s.showmodel=!0,setTimeout(function(){s.modelProgress()},1e3))))},gohome:function(){console.log("cancal_video",{gid:this.id,cancaltype:"3_"+b.globalData.ver+"_"+this.videoWatchNumber,adstyletype:this.adBox_style_type}),f.default.Event.stat("cancal_video",{gid:this.id,cancaltype:"3_"+b.globalData.ver+"_"+this.videoWatchNumber,adstyletype:this.adBox_style_type}),e.navigateBack({delta:1})},modelProgress:function(){var t=this;this.addresultimg=!1;var a=setInterval(function(){t.progresspercent<100?t.progresspercent++:(clearInterval(a),setTimeout(function(){t.progressend=!0,t.imgfinished&&(t.showAds&&t.onload&&(t.bannerNumber=parseInt(t.bannerNumber)+1,e.setStorageSync("bannerNumber",t.bannerNumber)),t.addResultPicture(),t.showmodel=!1)},1e3))},this.transitiontime)},showChoose:function(){var e=this;this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.makeButton=!1,this.margin=!1,setTimeout(function(){e.showmodel=!0},100)},closevideoBox:function(e){f.default.Event.stat("resultVdieoclose",{closetype:b.globalData.ver+"_"+e}),this.videolockBox=!1,this.imgGif(),this.postResult()},cancalModel:function(){this.showmodel=!1,this.videoButton=!0,this.margin=!1},watchBanner:function(){this.videoButton=!1,this.showmodel=!1,this.makeResult()},makeResult:function(){var t=this;console.log(this.videoAd);var a=this;this.showAds&&this.videoAd&&!this.videoErr?(a.makeRes=1,this.videoWatchNumber+=1,1==this.adBox_style_type?f.default.Event.stat("show_video",{showtype:"3_"+b.globalData.ver,gid:this.id}):(console.log("show_video",{showtype:this.adBox_style_type+"_"+b.globalData.ver+"_"+this.videoWatchNumber,gid:this.id}),f.default.Event.stat("show_video",{showtype:this.adBox_style_type+"_"+b.globalData.ver+"_"+this.videoWatchNumber,gid:this.id})),this.videoAd.load().then(function(){console.log("load sucess"),t.videoAd.show().catch(function(){e.showLoading({title:"正在获取结果",mask:!0}),a.analyzeResult()}),console.log("show"),t.videoAd.show(),t.videoAd.onClose(function(t){if(a.makeRes&&!a.videoErr){a.videoEnded=t.isEnded;var s=t.isEnded?1:0;s&&(a.bannerNumber=parseInt(a.bannerNumber)+1,e.setStorageSync("bannerNumber",a.bannerNumber),a.videoplayednumber=parseInt(a.videoplayednumber)+1,e.setStorageSync("videoplayednumber",a.videoplayednumber),e.setStorageSync("ad_video",Math.round((new Date).getTime()/1e3))),setTimeout(function(){e.request({url:b.globalData.host+"/index.php/App/Index/incQQAdsProgress",data:{progress:s,gid:a.id,appid:b.globalData.appid,sgid:b.globalData.from_gid,ver:b.globalData.ver,round:a.round,uid:(0,n.setUid)(),videonumber:a.videoWatchNumber,force:a.video_banner_ad?2:1},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(e){console.log(e)}})},500),t.isEnded?setTimeout(function(){console.log({playedtype:a.adBox_style_type+"_"+b.globalData.ver+"_"+a.videoWatchNumber,gid:a.id}),f.default.Event.stat("video_played",{playedtype:a.adBox_style_type+"_"+b.globalData.ver+"_"+a.videoWatchNumber,gid:a.id}),a.resultsofvideo?a.closevideoBox(1):(e.showLoading({title:"正在获取结果",mask:!0}),a.analyzeResult())},500):"1109659848"==b.globalData.appid||"1109743918"==b.globalData.appid||"wx"==b.globalData.apptype?(setTimeout(function(){console.log("cancal_video",{gid:a.id,cancaltype:"2_"+b.globalData.ver+"_"+a.videoWatchNumber,adstyletype:a.adBox_style_type}),f.default.Event.stat("cancal_video",{gid:a.id,cancaltype:"2_"+b.globalData.ver+"_"+a.videoWatchNumber,adstyletype:a.adBox_style_type+"_"+b.globalData.ver})},200),a.forcedAds?1==a.video_banner_ad?(a.showmodel=!0,a.showbannerad=!1,setTimeout(function(){a.resultsofvideo?a.closevideoBox(1):a.analyzeResult(),a.progresswidth=100,a.modelProgress()},1e3)):a.videoButton=!0:(e.showLoading({title:"正在获取结果",mask:!0}),setTimeout(function(){a.analyzeResult()},500))):"1109802828"==b.globalData.appid&&(a.forcedAds?a.showmodel=!0:(e.showLoading({title:"正在获取结果",mask:!0}),setTimeout(function(){a.analyzeResult()},500))),a.makeRes=0}}),t.videoAd.onError(function(t){console.log(t),e.request({url:b.globalData.host+"/index.php/App/Index/incQQAdsProgress",data:{progress:2,gid:a.id,appid:b.globalData.appid,ver:b.globalData.ver,sgid:b.globalData.from_gid,uid:(0,n.setUid)(),round:a.round,errCode:t.errCode,errMsg:t.errMsg,videonumber:this.videoWatchNumber,force:a.video_banner_ad?2:1},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(e){console.log(e)}}),a.videoErr=!0,a.makeButton=!1,a.margin=!1,a.resultsofvideo?a.closevideoBox(2):(e.showLoading({title:"正在获取结果",mask:!0}),a.analyzeResult())})}).catch(function(){console.log("load fail"),a.makeButton=!1,a.margin=!1,a.resultsofvideo?a.closevideoBox(2):(e.showLoading({title:"正在获取结果",mask:!0}),a.analyzeResult())})):(e.showLoading({title:"正在获取结果",mask:!0}),a.analyzeResult())},analyzeResult:function(){var e=this;setTimeout(function(){e.parseResult()},400)},parseResult:function(){var t=this,a=this.uzinfoData,s=this.question,i="";if(this.needAsk){var r="3"!==a.type?this.activenum.map(function(e,t){switch(a.type){case"1":i=s[t].answer[e].key;break;case"2":i=s[t].answer[e].weight;break;case"8":i=s[t].answer[e].key}return i}):this.options3;i=r.toString(",")}else i="A";var l=this,d={id:this.id,acid:b.globalData.acid,userinput:b.globalData.user.nickName,isreplay:this.isreplay,sgid:b.globalData.from_gid,round:this.round,ver:b.globalData.ver,appid:b.globalData.appid,uid:(0,n.setUid)(),src:b.globalData.src,source:b.globalData.source,scene:b.globalData.scene,quizfrom:"wxapp"};0==this.needAsk?(d.israndresult=1,d.option="A"):d.option=i,e.request({url:b.globalData.host+"/index.php/Wetest/Entry/getresult",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:d,success:function(a){var s=a.data;if(t.resultData=a.data,l.resimg.qrcode=o.ssl_static_host+JSON.parse(a.data.attention).qrcode,l.resimg.result=o.ssl_static_host+JSON.parse(a.data.content).img,t.share_ecodeid=!!s.share_ecodeid&&s.share_ecodeid,l.shareImage=l.resimg.result,l.special_config&&l.special_config.result_image){var i=JSON.parse(a.data.content).threshold,n=JSON.parse(l.special_config.result_image)[i];n&&(l.resimg.result=o.ssl_static_host+n)}s.share_title&&(l.shareqzonetitle=s.share_title),s.share_shuoshuo_title&&(l.shuoshuo_sharetitle=s.share_shuoshuo_title),l.isfirstplay&&l.special_config?e.getImageInfo({src:b.globalData.user.avatarUrl,success:function(e){"gif"==e.type?l.resimg.avatar=o.ssl_static_host+"quce/1562666285IKXQK.png":l.resimg.avatar=b.globalData.user.avatarUrl,l.getImageAll(s,l.drawPicture)},fail:function(e){console.log(e)}}):l.getImageAll(a.data,l.drawPicture)}})},playVoice:function(e){var t=this,a={src:o.static_host+this.temp_answer[e].audio,icon:"../../static/question/play.gif",status:"playing",tips:"正在播放"},s={src:"",icon:"../../static/question/pause.png",status:"pause",tips:"点击播放"},i={src:o.static_host+this.temp_answer[e].audio,icon:"../../static/question/pause.png",status:"pause",tips:"已暂停"};0===this.playing?(this.audio.src=a.src,this.audiores=a,this.playing=1,this.audio.play()):1===this.playing?(this.playing=2,this.audio.pause(),this.audiores=i):2===this.playing&&(this.audiores=a,this.playing=1,this.audio.play()),this.audio.onEnded(function(){t.playing=0,t.audiores=s})},getImageAll:function(t,a){var s=0,i=this;for(var o in i.resimg)!function(o){e.getImageInfo({src:i.resimg[o],success:function(e){i.resimg[o]=e,3==(s+=1)&&a(t,i.resimg)},fail:function(e){console.log(e)}})}(o)},resultLongPress:function(e){this.showShare(2)},viewPicture:function(){if(this.imageshare)f.default.Event.stat("preview",{gid:this.id,previewtype:1}),this.preview=!this.preview,this.showshare=!1,this.saveImageSmall=!this.saveImageSmall,this.CaptureImage=this.preview?3:1;else{f.default.Event.stat("preview",{gid:this.id,previewtype:2});var t=this.resultImage,a=this;e.previewImage({urls:[t],success:function(e){a.CaptureImage=2,a.previewImage=!0}})}},showShare:function(e){this.saveImageSmall=2==e,this.showshare=!0},cancelShare:function(){this.showshare=!1},returnHome:function(){e.navigateBack({})},answerAgin:function(){this.incsavestatus=!0,this.isreplay=1,this.isfirstplay=!1,this.start=!1,this.translateX=0,this.next_answer=[this.temp_answer[0]],this.reset=1,this.issave=!1,this.resimg={qrcode:"",resultTemp:"",nickName:"",avatarUrl:"",result:""},this.activenum=this.temp_answer.map(function(e){return""}),this.scaleAnmia=!1,this.aginActive.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.aginActive.export(),this.translateX=this.translateX-this.screenWidth},verifyUserInfo:function(t){e.request({url:b.globalData.host+"/index.php/App/Index/checkAppAvatar",data:{appid:b.globalData.appid,avatarUrl:b.globalData.user.avatarUrl,nickName:b.globalData.user.nickName},success:function(a){console.log(a),0==a.data.avatar_status&&(b.globalData.user.avatarUrl=a.data.url),0==a.data.name_status&&(b.globalData.user.nickName=a.data.name),b.globalData.user.verify=1,e.setStorageSync("user",b.globalData.user),t()},fail:function(e){console.log(e),t()}})},drawPicture:function(t,a){function s(t){setTimeout(function(){o.draw(!0,function(){setTimeout(function(){e.canvasToTempFilePath({x:0,y:0,width:t.canvasHW.width,height:t.canvasHW.height,destWidth:t.canvasHW.width,destHeight:t.canvasHW.height,quality:.5,canvasId:"canvas",success:function(a){t.resultImage=a.tempFilePath,setTimeout(function(){t.imgfinished=!0,t.addresultimg?t.addResultPicture():t.progressend&&(t.showmodel=!1,t.addResultPicture(),t.showAds&&t.onload&&(t.bannerNumber=parseInt(t.bannerNumber)+1,e.setStorageSync("bannerNumber",t.bannerNumber)))},100)}}),e.canvasToTempFilePath({x:0,y:0,width:t.canvasHW.width,height:512,destWidth:t.canvasHW.width,destHeight:512,quality:.5,canvasId:"canvas",success:function(e){t.shareAppImage=e.tempFilePath}})},500)})},500)}var i=this;this.canvasHW={width:a.result.width,height:a.result.height},console.log(this.canvasHW);var o=e.createCanvasContext("canvas"),n=this.special_config,r=JSON.parse(t.content).threshold;if(n&&n.headimg_config){var l=JSON.parse(n.headimg_config);r&&l[r]&&(l=l[r]),o.drawImage(a.avatar.path,0,0,a.avatar.width,a.avatar.height,l.x,l.y,l.width,l.height)}if(o.drawImage(a.result.path,0,0),o.drawImage(a.qrcode.path,0,0,a.qrcode.width,a.qrcode.height,0,a.result.height-a.qrcode.height*a.result.width/a.qrcode.width,a.result.width,a.qrcode.height*a.result.width/a.qrcode.width),n&&n.draw_config&&this.question_info.special_result){var d=JSON.parse(n.image_config),u=JSON.parse(n.draw_config);o.setFillStyle("rgb(".concat(d.c_r,", ").concat(d.c_g,", ").concat(d.c_b,")")),o.setFontSize(parseInt(d.font)),o.setTextAlign(u.align),o.setTextBaseline("top"),0==b.globalData.user.verify&&this.hasUserinfo?this.verifyUserInfo(function(){"center"==u.align?o.fillText(b.globalData.user.nickName,u.x?u.x:320,u.y):"right"==u.align?o.fillText(b.globalData.user.nickName,u.x,u.y):"left"==u.align&&o.fillText(b.globalData.user.nickName,u.x,u.y),s(i)}):("center"==u.align?o.fillText(b.globalData.user.nickName,u.x?u.x:320,u.y):"right"==u.align?o.fillText(b.globalData.user.nickName,u.x,u.y):"left"==u.align&&o.fillText(b.globalData.user.nickName,u.x,u.y),s(this))}else s(this)},addResultPicture:function(){var t=this;this.scrollToView=this.scrollId,this.ceshiprogress=!0,this.isfirstplay&&this.onload&&(this.playNumber=parseInt(this.playNumber)+1,e.setStorageSync("playNumber",this.playNumber)),e.hideLoading(),this.animation.translateX(this.translateX-this.screenWidth).step(),this.animationData=this.animation.export(),this.translateX=this.translateX-this.screenWidth,setTimeout(function(){t.scaleAnmia=!0,console.log(t.resultsofvideo,"resultsofvideo"),t.resultsofvideo&&t.videoAd&&t.showAds&&(t.videolockBox=!0),setTimeout(function(){if(t.showTips=!0,t.resultsofvideo&&t.videoAd&&t.showAds)return!0;t.imgGif(),!t.cancelinc&&t.onload&&(t.postResult(),f.default.Event.stat("finishtest",{gid:t.id}))},900)},500)},postResult:function(){var t=this.videoEnded?this.bannerNumber:0;console.log(t);var a=this;if(a.resultTjFlag){var s;a.resultTjFlag=!1;var o=JSON.parse(a.resultData.content),r=JSON.parse(a.resultData.attention),l=b.globalData.host+"/index.php/Wetest/Entry/incGetresult";a.result=o.threshold,e.request({url:l,data:(s={src:b.globalData.src,id:a.question_info.id,acid:b.globalData.acid,result:o.threshold,account:r.account,idx:o.new_idx,round:this.round,appid:b.globalData.appid,sgid:b.globalData.from_gid,ver:b.globalData.ver},i(s,"src",b.globalData.src),i(s,"scene",b.globalData.scene),i(s,"source",b.globalData.source),i(s,"uid",(0,n.setUid)()),i(s,"videoad",t),i(s,"hour",this.hour),s),method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){a.resultTjFlag=!1},fail:function(){a.resultTjFlag=!0}})}},imgGif:function(){var e=this,t=0,a=setInterval(function(){e.finger="../../static/question/finger".concat(t%3+1,".png"),++t>17&&(e.showTips=!1,clearInterval(a))},300)},incImageSave:function(t,a){console.log("dst:"+a);var s=this;e.request({url:b.globalData.host+"/index.php/App/Index/commonLongtap",method:"POST",data:{result:s.result,gid:s.question_info.id,type:t,src:b.globalData.src,source:b.globalData.source,round:this.round,sgid:b.globalData.from_gid,uid:(0,n.setUid)(),scene:b.globalData.scene,appid:b.globalData.appid,ver:b.globalData.ver,dst:a},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}})},savePicture:function(t){var a=this.resultImage,s=this;wx.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?e.saveImageToPhotosAlbum({filePath:a,success:function(){e.showToast({title:"图片保存成功"}),s.showdingyue&&4==s.subscribe_status&&s.addDingYue(s.subscribe_status),console.log("save success"),s.saveImageSmall?(f.default.Event.stat("saveresultimage",{gid:s.id,savetype:1}),s.inlongSmall&&(s.incImageSave(1,2),s.inlongSmall=!1)):(f.default.Event.stat("saveresultimage",{gid:s.id,savetype:2}),s.inlongBig&&(s.incImageSave(1,3),s.inlongBig=!1))}}):e.saveImageToPhotosAlbum({filePath:a,success:function(){e.showToast({title:"图片保存成功"}),s.showdingyue&&4==s.subscribe_status&&s.addDingYue(s.subscribe_status),console.log("save success"),s.saveImageSmall?(f.default.Event.stat("saveresultimage",{gid:s.id,savetype:1}),s.inlongSmall&&(s.incImageSave(1,2),s.inlongSmall=!1)):(f.default.Event.stat("saveresultimage",{gid:s.id,savetype:2}),s.inlongBig&&(s.incImageSave(1,3),s.inlongBig=!1))},fail:function(t){e.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(e){wx.openSetting({})}})}})}})},showSubscribe:function(e){this.showdingyue&&"303"!=b.globalData.source?(this.dingyuemodel=!0,f.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_1"})):e()},cancalsub:function(){var e=this;switch(this.dingyuemodel=!1,f.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_3"}),this.subscribe_status){case 1:this.starGame();break;case 2:this.scrollToView=this.scrollId,this.scrollTop=1e3*this.count,this.analyzeResult(),1==this.hasbannerad&&(this.showmodel=!0,setTimeout(function(){e.modelProgress()},1e3))}},addDingYue:function(){var t=this;this.dingyuemodel=!1,f.default.Event.stat("showSubscribebox",{showtype:this.subscribe_status+"_2"}),qq.subscribeAppMsg({subscribe:!0,success:function(a){switch(v.addSubscribe(b,function(){e.setStorageSync("subscribe",1),f.default.Event.stat("addSubscribe",{subscribetype:b.globalData.ver+"_"+t.subscribe_status+"_1"})}),t.subscribe_status){case 1:t.starGame();break;case 2:t.analyzeResult(),1==t.hasbannerad&&(t.showmodel=!0,setTimeout(function(){t.modelProgress()},1e3))}},fail:function(a){switch(console.log("----subscribeAppMsg----fail",a),"subscribeAppMsg:fail no permission"==a.errMsg&&e.setStorageSync("subscribe",2),f.default.Event.stat("addSubscribe",{subscribetype:b.globalData.ver+"_"+t.subscribe_status+"_2"}),t.subscribe_status){case 1:t.starGame();break;case 2:t.scrollToView=t.scrollId,t.scrollTop=1e3*t.count,t.analyzeResult(),1==t.hasbannerad&&(t.showmodel=!0,setTimeout(function(){t.modelProgress()},1e3))}}})}}};t.default=_}).call(this,a("543d").default)},f3a3:function(e,t,a){a.r(t);var s=a("7789"),i=a("c4e4");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("f700");var n=a("2877"),r=Object(n.a)(i.default,s.a,s.b,!1,null,"1ea419b0",null);t.default=r.exports},f700:function(e,t,a){var s=a("b4a7");a.n(s).a}},[["5bf7","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/quizchoiceness/index.js");
 		__wxRoute = 'pages/Search/Search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/Search/Search.js';	define("pages/Search/Search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/Search/Search"],{"0924":function(t,e,n){(function(t){function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a35f")),c=n("4e22"),i=a(n("f47e")),r=getApp(),u={name:"Search",data:function(){return{searchIcon:o.default,search_list:[],tips:"未搜到，来试试这些",keyword:""}},onLoad:function(e){i.default.Page.init(),this.keyword=e.keyword,this.search(),t.setNavigationBarTitle({title:"搜索"})},components:{ListBox:function(){return Promise.all([n.e("common/vendor"),n.e("components/ListBox")]).then(n.bind(null,"493d"))}},methods:{search:function(){var e=this,n=this.keyword;this.keyword="","openid_quce"==n?qq.setClipboardData({data:t.getStorageSync("openid"),success:function(e){t.showModal({title:"提示",content:"用户openid已复制到剪切板"})}}):t.request({url:r.globalData.host+"/index.php/App/Index/search",data:{q:n},success:function(t){console.log(t),t.data.rcmd?e.tips="未搜到，来试试这些":e.tips="与 ".concat(n," 相关的测试"),e.search_list=t.data.content.map(function(t,e){return t.img=c.static_host+t.img,t})}})}}};e.default=u}).call(this,n("543d").default)},"14e3":function(t,e,n){var a=n("6a8a");n.n(a).a},2930:function(t,e,n){(function(t){function e(t){return t&&t.__esModule?t:{default:t}}n("8b22"),n("921b"),e(n("66fd")),t(e(n("9263")).default)}).call(this,n("543d").createPage)},"6a8a":function(t,e,n){},"7c13":function(t,e,n){n.r(e);var a=n("0924"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e.default=o.a},9263:function(t,e,n){n.r(e);var a=n("fd5e"),o=n("7c13");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("14e3");var i=n("2877"),r=Object(i.a)(o.default,a.a,a.b,!1,null,"2f560bfe",null);e.default=r.exports},fd5e:function(t,e,n){var a=function(){var t=this;t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["2930","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/Search/Search.js");
 		__wxRoute = 'pages/tanmegame/game';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tanmegame/game.js';	define("pages/tanmegame/game.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/tanmegame/game"],{"2d2f":function(e,t,n){n.r(t);var s=n("d836"),o=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);t.default=o.a},"70be":function(e,t,n){(function(e){function t(e){return e&&e.__esModule?e:{default:e}}n("8b22"),n("921b"),t(n("66fd")),e(t(n("7738")).default)}).call(this,n("543d").createPage)},"75ad":function(e,t,n){var s=function(){var e=this;e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o})},7738:function(e,t,n){n.r(t);var s=n("75ad"),o=n("2d2f");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("a653");var a=n("2877"),r=Object(a.a)(o.default,s.a,s.b,!1,null,"205cbec8",null);t.default=r.exports},"82b9":function(e,t,n){},a653:function(e,t,n){var s=n("82b9");n.n(s).a},d836:function(t,n,s){(function(t){function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(s("f47e")),r=o(s("6f91")),l=new(o(s("94f5")).default),c=getApp(),m={onShareAppMessage:function(){return this.footbox=!1,{title:this.sharetitle,path:"/pages/home/index?ispush=1&jump_type=3&id="+this.gamegid}},components:{msg:function(){return s.e("pages/tanmegame/message").then(s.bind(null,"a136"))},umsg:function(){return s.e("components/tanme/usermsg").then(s.bind(null,"5c65"))},msgimg:function(){return s.e("components/tanme/msgimg").then(s.bind(null,"cc9a"))},userimgBox:function(){return s.e("components/tanme/userimg").then(s.bind(null,"1df7"))},resimg:function(){return s.e("components/tanme/resultimg").then(s.bind(null,"d609"))},ImageCropper:function(){return s.e("components/invinbg-image-cropper/invinbg-image-cropper").then(s.bind(null,"c0e6"))}},data:function(){var e;return e={wechatdesc:"",wechatresult:"",topimg:r.default,defaulticon:"https://ssl-tanme.cdn.itwlw.com/common/img/tanme.jpg",username:"",scrollNumber:0,scrollId:"id0",usersex:"",ischeck:0,isinput:"",userimg:"https://ssl-tanme.cdn.itwlw.com/common/img/tanme.jpg",tempFilePaths:"",resimgurl:"",sharetitle:"",sendbtn:!0,filebtn:!1,sexbtn:!1,contentmsg:[],gameconfig:"",qzonetitle:"",footbox:!1,commimg:"",gameheight:"",gamegid:"",imgfinished:!1,showmodel:!1,hasbannerad:0,transitiontime:60,showAds:!1,forcedAds:!1,asbannerad:""},i(e,"transitiontime",""),i(e,"banneradutilid",""),i(e,"banneradcontent",""),i(e,"video_banner_ad",""),i(e,"adBox_cancel_btn",""),i(e,"adBox_video_btn",""),i(e,"banner_ad_style",""),i(e,"adBox_style_type",""),i(e,"modelContent",""),i(e,"progresspercent",0),i(e,"bannerNumber",0),i(e,"playNumber",0),i(e,"videoplayednumber",""),i(e,"adtime",""),i(e,"forcebutton",!1),i(e,"videoAd",""),i(e,"showbannerad",!1),i(e,"makeRes",0),i(e,"userinfo",{}),i(e,"host","https://ssl-tanme.itwlw.com"),i(e,"imgurl","https://ssl-uploads-admin.cdn.itwlw.com"),i(e,"uploadimg",""),e},onLoad:function(e){a.default.Page.init(),t.showLoading({title:"正在加载"});var n=this,s={gid:e.id};a.default.Event.stat("startgame",{gid:s.gid}),n.gamegid=s.gid,console.log(s.gid,"用户gid"),this.userinfo=t.getStorageSync("userinfo")?t.getStorageSync("userinfo"):{nickName:"",avatarUrl:""},this.userinfo.avatarUrl?(n.isinput=this.userinfo.nickName,n.userimg=this.userinfo.avatarUrl,n.tempFilePaths=n.userimg,t.getImageInfo({src:this.userinfo.avatarUrl,success:function(e){console.log(e.type),"gif"==e.type?n.tempFilePaths=n.defaulticon:n.tempFilePaths=n.userimg}})):(n.userimg=n.defaulticon,n.tempFilePaths=n.userimg);var o=t.getStorageSync("playNumbertanme"),i=t.getStorageSync("bannerNumbertanme"),r=t.getStorageSync("videoplayednumbertanme");n.playNumber=o||0,n.bannerNumber=i||0,n.videoplayednumber=r||0,n.adtime=t.getStorageSync("ad_videotanme")?n.adtime:0,console.log(n.playNumber,n.bannerNumber,n.videoplayednumber,n.adtime,"广告测试"),this.getGameData()},computed:{modelList:function(){if(this.modelContent)return this.modelContent.split("##");console.log(this.modelContent,"////////+////")},adcontent:function(){if(this.banneradcontent){if(1==this.banner_ad_style)return this.banneradcontent.split("##").join("，");if(2==this.banner_ad_style)return this.banneradcontent.split("##")}}},watch:{imgfinished:function(){console.log("==================")}},methods:{getGameData:function(){var e=this;t.request({url:this.host+"/index.php/Wxapp/Index/getGameInfo",data:{gid:this.gamegid,appid:c.globalData.appid,version:c.globalData.ver,adtime:this.adtime?this.adtime:0,adplayed:this.bannerNumber,quizplayed:this.playNumber,videoplayed:this.videoplayednumber},success:function(n){console.log(n.data,"*****"),e.sharetitle=n.data.sharetitle,e.wechatdesc=n.data.wechatdesc,e.wechatresult=n.data.wechatresult,e.gameconfig=JSON.parse(n.data.gameConfig),e.qzonetitle=n.data.title,console.log(e.gameconfig,"---");var s=n.data;e.showAds=1==s.showAds,e.forcedAds=1==s.forcedAds,e.hasbannerad=s.banner_ad,e.transitiontime=10*parseInt(s.banner_ad_time),e.banneradutilid=s.banner_ad_utilid,e.banneradcontent=s.banner_ad_content,e.video_banner_ad=s.video_banner_ad,e.adBox_cancel_btn=s.adBox_cancel_btn,e.adBox_video_btn=s.adBox_video_btn,e.banner_ad_style=s.banner_ad_style,e.adBox_style_type=s.adBox_style_type?s.adBox_style_type:1,e.modelContent=s.adBox_desc,console.log(s.adBox_desc,"desc");var o=s.video_ad_utilid?s.video_ad_utilid:"54722faa6e7bc4733033911f21e83b90";console.log(s.video_ad_select),e.forcebutton=1!=s.video_ad_select;try{e.videoAd=qq.createRewardedVideoAd({adUnitId:o})}catch(e){}console.log(e.videoAd,"*****"),void 0==e.userinfo.nickName?e.isinput="":e.isinput=e.userinfo.nickName,t.setNavigationBarTitle({title:n.data.title}),e.getqrcodeUrl(),e.unamestyle(),t.hideLoading(),e.sendbtn=!1},fail:function(e){console.log(e,"-------------------")}})},getqrcodeUrl:function(){var e=this;t.request({url:this.host+"/index.php/Wxapp/Index/getGameQrcode",data:{gid:this.gamegid,appid:c.globalData.appid,version:c.globalData.ver},success:function(t){console.log(t.data.qrcode),e.gameconfig.drawconfig.qrcode.path=e.imgurl+"/"+t.data.qrcode},fail:function(e){console.log(e)}})},adresult:function(){var e=this;this.drawcanvas(),this.showAds&&this.videoAd?(console.log("----------视频广告------------"),setTimeout(function(){a.default.Event.stat("show_video",{videotype:e.adBox_style_type}),console.log("show_video",{videotype:e.adBox_style_type},"98798798"),e.showmodel=!0,e.showbannerad=!0},1e3)):1==this.hasbannerad?(console.log("----------banner广告------------"),this.showmodel=!0,setTimeout(function(){e.modelProgress()},1e3)):(console.log("----------------无广告-----------------"),setTimeout(function(){t.showLoading({title:"请稍后"}),setTimeout(function(){var n=setInterval(function(){e.imgfinished&&(e.imgresult(),t.hideLoading(),clearInterval(n))},10)},1e3)},600))},modelProgress:function(){var e=this,n=setInterval(function(){e.progresspercent<100?e.progresspercent++:(clearInterval(n),e.showmodel=!1,setTimeout(function(){var n=setInterval(function(){e.imgfinished&&(e.imgresult(),clearInterval(n))},10);e.showAds&&(e.bannerNumber=parseInt(e.bannerNumber)+1,t.setStorageSync("bannerNumbertanme",e.bannerNumber),console.log(e.bannerNumber,"**************************"))},600))},this.transitiontime)},watchBanner:function(){var e=this;this.showmodel=!1,l.useQQAd(this.videoAd).then(function(n){n?(t.setStorageSync("ad_videotanme",Math.round((new Date).getTime()/1e3)),e.bannerNumber=parseInt(e.bannerNumber)+1,t.setStorageSync("bannerNumbertanme",e.bannerNumber),e.videoplayednumber=parseInt(e.videoplayednumber)+1,t.setStorageSync("videoplayednumbertanme",e.videoplayednumber),a.default.Event.stat("success_video",{showtype:e.adBox_style_type}),setTimeout(function(){var t=setInterval(function(){e.imgfinished&&(e.imgresult(),clearInterval(t))},10)},1e3)):(e.forcedAds?1==e.video_banner_ad&&(e.showmodel=!0,e.showbannerad=!1,setTimeout(function(){e.modelProgress()},1e3)):setTimeout(function(){var t=setInterval(function(){e.imgfinished&&(e.imgresult(),clearInterval(t))},10)},500),a.default.Event.stat("fail_video",{cancaltype:1,adstyletype:e.adBox_style_type}))}).catch(function(){t.setStorageSync("ad_videotanme",Math.round((new Date).getTime()/1e3)),e.bannerNumber=parseInt(e.bannerNumber)+1,t.setStorageSync("bannerNumbertanme",e.bannerNumber),e.videoplayednumber=parseInt(e.videoplayednumber)+1,t.setStorageSync("videoplayednumbertanme",e.videoplayednumber),a.default.Event.stat("success_video",{showtype:e.adBox_style_type}),setTimeout(function(){var t=setInterval(function(){e.imgfinished&&(e.imgresult(),clearInterval(t))},10)},1e3)})},gohome:function(){a.default.Event.stat("fail_video",{cancaltype:2,adstyletype:this.adBox_style_type}),t.navigateBack({delta:1})},cancalModel:function(){this.showmodel=!1,this.videoButton=!0,this.margin=!1},unamestyle:function(){1==this.gameconfig.gameconfig.nickname.status&&(this.contentmsg.push({msg:this.wechatdesc,temp:"msg"}),this.contentmsg.push({msg:"请输入姓名",temp:"msg"}),this.scrollNumber++,this.scrollId="id"+this.scrollNumber)},getuserinfo:function(e){var n=this,s=this,o=e.currentTarget.dataset;console.log(o),e.detail.userInfo?(c.globalData.user={nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl,verify:0},t.setStorageSync("user",c.globalData.user),t.setStorageSync("userinfo",{nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl}),this.userinfo={nickName:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl},t.getImageInfo({src:this.userinfo.avatarUrl,success:function(e){console.log(e.type),"gif"==e.type?(s.tempFilePaths=s.defaulticon,s.sendnametext()):(s.tempFilePaths=n.userinfo.avatarUrl,s.userimg=n.userinfo.avatarUrl,s.sendnametext())}})):s.sendnametext()},sendnametext:function(){var e=this;if(""==this.isinput)return this.contentmsg.push({msg:"你还没有输入姓名~",temp:"msg"}),this.scrollNumber++,void(this.scrollId="id"+this.scrollNumber);this.sendbtn=!0,this.username=this.isinput,this.isinput="",this.contentmsg.push({umsg:this.username,temp:"umsg",usericon:this.userimg}),this.scrollNumber++,this.scrollId="id"+this.scrollNumber,1==this.gameconfig.gameconfig.headimg.status?setTimeout(function(){e.contentmsg.push({msg:"确认使用头像",temp:"msg"}),e.contentmsg.push({msgimg:e.userimg,temp:"msgimg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.ischeck=1},1e3):1==this.gameconfig.gameconfig.gender.status?setTimeout(function(){e.contentmsg.push({msg:"请选择你的性别",temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.ischeck=2},1e3):setTimeout(function(){e.contentmsg.push({msg:"正在为你分析结果，请稍后...",temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.adresult()},1e3)},searchsex_m:function(){var e=this;this.sexbtn=!0,this.usersex="男",this.contentmsg.push({umsg:"男",temp:"umsg",usericon:this.userimg}),this.scrollNumber++,this.scrollId="id"+this.scrollNumber,setTimeout(function(){e.contentmsg.push({msg:"正在为你分析结果，请稍后...",temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.adresult()},1e3)},searchsex_w:function(){var e=this;this.sexbtn=!0,this.usersex="女",this.contentmsg.push({umsg:"女",temp:"umsg",usericon:this.userimg}),this.scrollNumber++,this.scrollId="id"+this.scrollNumber,setTimeout(function(){e.contentmsg.push({msg:"正在为你分析结果，请稍后...",temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.adresult()},1e3)},queren:function(){var e=this;this.filebtn=!0,this.contentmsg.push({umsg:"确认使用",temp:"umsg",usericon:this.userimg}),this.scrollNumber++,this.scrollId="id"+this.scrollNumber,1==this.gameconfig.gameconfig.gender.status?setTimeout(function(){e.contentmsg.push({msg:"请选择你的性别",temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.ischeck=2},1e3):(this.filebtn=!0,setTimeout(function(){e.contentmsg.push({msg:"正在为你分析结果，请稍后...",temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.adresult()},1e3))},fileImg:function(){var e=this;e.filebtn=!0,t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){e.uploadimg=t.tempFilePaths[0]},fail:function(n){t.showToast({title:"上传失败，请重试"}),e.filebtn=!1}})},confirm:function(e){var n=this;this.uploadimg="",n.filebtn=!1,n.contentmsg.push({msg:"正在上传中...",temp:"msg"}),n.scrollNumber++,n.scrollId="id"+n.scrollNumber,t.showLoading({title:"请稍后"}),n.tempFilePaths=e.detail.tempFilePath,setTimeout(function(){n.contentmsg.push({uimg:n.tempFilePaths,usericon:n.userimg,temp:"uimg"}),n.scrollNumber++,n.scrollId="id"+n.scrollNumber,n.contentmsg.push({msg:"确认使用头像",temp:"msg"}),n.scrollNumber++,n.scrollId="id"+n.scrollNumber,t.hideLoading()},1e3)},drawcanvas:function(e){var t=this,n=t.getIndex(t.username,!0)-1;console.log(n,"");var s=t.gameconfig.drawconfig.head_image,o=(t.gameconfig.drawconfig.nickname,t.gameconfig.drawconfig.qrcode),i=this.imgurl+"/"+t.commimg[n].path;console.log(i);var r={};r.bg=i,1==s.status&&(r.header=t.tempFilePaths,console.log(t.tempFilePaths,"头像")),1==o.status&&""!=o.path&&(r.qrcode=o.path,console.log(o.path)),t.getImageAll(r,t.drawcanvas2),a.default.Event.stat("endgame",{gid:t.gamegid})},drawcanvas2:function(n){console.log(n);var s=this,o=s.gameconfig.drawconfig.head_image,i=s.gameconfig.drawconfig.nickname,a=s.gameconfig.drawconfig.qrcode,r=t.createCanvasContext("myCanvas");1==o.status&&r.drawImage(n.header.path,o.x,o.y,parseInt(o.width),parseInt(o.width)),r.drawImage(n.bg.path,0,0),1==a.status&&""!=a.path&&r.drawImage(n.qrcode.path,parseInt(a.x),parseInt(a.y),parseInt(a.width),parseInt(a.width)),1==i.status&&(r.setFontSize(i.font_size),r.setFillStyle(i.color),r.setTextBaseline("top"),r.setTextAlign(i.text_align),r.fillText(s.username,i.x,i.y)),r.draw(!0,function(){setTimeout(function(){t.canvasToTempFilePath({x:0,y:0,width:n.bg.width,height:n.bg.height,destWidth:n.bg.width,destHeight:n.bg.height,canvasId:"myCanvas",success:function(t){console.log(n.bg.height,e(n.bg.height));var o=n.bg.width/n.bg.height;console.log(o),s.gameheight=460/o+"rpx",s.resimgurl=t.tempFilePath,s.imgfinished=!0,console.log(s.resimgurl,"result")},fail:function(){console.log("------------")}})},800)})},imgresult:function(){var e=this;e.contentmsg.push({resimg:e.resimgurl,temp:"resimg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.contentmsg.push({msg:e.wechatresult,temp:"msg"}),e.scrollNumber++,e.scrollId="id"+e.scrollNumber,e.filebtn=!0,e.ischeck=3,e.playNumber=parseInt(e.playNumber)+1,t.setStorageSync("playNumbertanme",e.playNumber)},fsaveimg:function(){this.footbox=!0},saveImg:function(){var e=this;t.saveImageToPhotosAlbum({filePath:e.resimgurl,success:function(){setTimeout(function(){t.showToast({title:"图片保存成功",icon:"none",duration:1e3}),e.footbox=!1},200)},fail:function(e){t.showModal({title:"保存失败",content:"保存图片到相册功能需要开启相册授权！",showCancel:!1,cancelText:"取消",confirmText:"确定",success:function(e){qq.openSetting({})}})}})},clearbox:function(){this.footbox=!1},fpreview:function(){var e=this;t.previewImage({urls:[e.resimgurl],longPressActions:{success:function(e){}}})},shareqzon:function(){var e=this;qq.openQzonePublish({text:e.sharetitle,media:[{type:"photo",path:e.resimgurl}]}),e.footbox=!1},getImageAll:function(e,n){var s=0,o={},i=[];i=Object.keys(e);for(var a in e)!function(a){t.getImageInfo({src:e[a],success:function(e){o[a]=e,(s+=1)==i.length&&n(o)},fail:function(e){console.log(e)}})}(a)},getIndex:function(e,t){var n=this,s=n.gameconfig.gameconfig,o=n.gameconfig.resultimage,i=escape(e),a=[],r=0;if(t)for(var l in i)r+=i.charAt(l).charCodeAt();else r=e;if(console.log(n.usersex),1==s.gender.status){if("男"==n.usersex){console.log("man");var c=o.male.concat(o.common);for(n.commimg=c,l=0;l<c.length;l++)a.push(100/c.length);return n.probability(r%100,a,1,c.length)}var m=o.famale.concat(o.common);for(n.commimg=m,console.log(m,"+++++++"),l=0;l<m.length;l++)a.push(100/m.length);return n.probability(r%100,a,1,m.length)}for(n.commimg=o.common,l=0;l<o.common.length;l++)a.push(100/o.common.length);return n.probability(r%100,a,1,o.common.length)},probability:function(e,t,n,s){var o=0;for(n;n<=s;n++)if(o+=1*t[n-1],e<o)return n;return e%s+n}}};n.default=m}).call(this,s("543d").default)}},[["70be","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/tanmegame/game.js");
 		__wxRoute = 'pages/tarotmark/item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tarotmark/item.js';	define("pages/tarotmark/item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/tarotmark/item"],{"3a3d":function(a,t,e){(function(a){function t(a){return a&&a.__esModule?a:{default:a}}e("8b22"),e("921b"),t(e("66fd")),a(t(e("4c64")).default)}).call(this,e("543d").createPage)},"4c64":function(a,t,e){e.r(t);var s=e("b5b5"),n=e("4ed5");for(var i in n)"default"!==i&&function(a){e.d(t,a,function(){return n[a]})}(i);e("fcde");var r=e("2877"),o=Object(r.a)(n.default,s.a,s.b,!1,null,"b692cb06",null);t.default=o.exports},"4ed5":function(a,t,e){e.r(t);var s=e("8c72"),n=e.n(s);for(var i in s)"default"!==i&&function(a){e.d(t,a,function(){return s[a]})}(i);t.default=n.a},"571f":function(a,t,e){},"8c72":function(a,t,e){(function(a){function s(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(e("f47e")),i=s(e("94f5")),r=s(e("57b9")),o=new i.default,c=new r.default,u=getApp(),d={name:"banner",components:{Result:function(){return e.e("components/tarotmark/Result").then(e.bind(null,"2d62"))},NavBar:function(){return e.e("components/tarotmark/zhouWei-navBar/index").then(e.bind(null,"9276"))}},onShareAppMessage:function(a){return{title:this.canvas_data.share_desc,path:"/pages/home/index?ispush=1&jump_type=2&id="+this.id,imageUrl:this.img_src}},data:function(){return{nav_height:0,page_control:!1,id:1,can_get_user:!1,card_image:"",card_name:"",card_positive:!1,canvas_data:{result_url:"",share_url:"",header_image:"",again_number:"",share_desc:"",talk_desc:"",id:!1,attr:null,explain_color:!1},share_desc_new:"",card_statues:new Array(22).fill(1),screen_width:375,screen_height:800,card_width:200,margin_left:70,number:1,choice_statues:!1,scroll_x:0,moveStart:{x:0,y:0},moveEnd:{x:375,y:612},animationData:{},animation_img:{},canvas_move:!1,choice_tip_statues:!0,animation_start:{},start_statues:[!1,!1,!1],scroll_statues:!1,class_show:[!1,!1,!1,!0],page_statues:!1,click_statues:!1,save_statues:!1,save_img:"save_1",finger_statues:!1,finger_img:"finger_1",has_video:!1,video_statues:!1,images:{video:!1,save_bg:!1,page_bg:!1,title:!1,top:!1,area_bg:!1,back_bg:!1,back:!1,start_btn:!1,finger:"http://tarot.cdn.taluop.com/static/tarot_sign/images/common/finger.png",save:"http://tarot.cdn.taluop.com/static/tarot_sign/images/common/save_animation.png"},img_src:!1,title:"主页导航文字",showBack:!0,backBtnClass:"uni-icon uni-icon-back",containerStyle:"background:#ffffff",titleStyle:"font-size:15px",backgroundColor:"",host:"https://mp.itwlw.com/index.php/wxapp/tarot/",res_url:"http://tarot.cdn.taluop.com/static/tarot_sign",userinfo:{}}},onLoad:function(t){n.default.Event.stat("product",{id:t.id});var e=wx.getSystemInfoSync().statusBarHeight;this.nav_height=Number(48+e)+"px",n.default.Page.init(),this.id=t.id,this.canvas_data.id=t.id,this.images.video=this.res_url+"/images/sign_"+t.id+"/video.png",this.images.save_bg=this.res_url+"/images/sign_"+t.id+"/save_bg.png",this.images.page_bg=this.res_url+"/images/sign_"+t.id+"/page_bg.png",this.images.title=this.res_url+"/images/sign_"+t.id+"/title.png",this.images.top=this.res_url+"/images/sign_"+t.id+"/top.png",this.images.area_bg=this.res_url+"/images/sign_"+t.id+"/start_bg.png",this.images.back_bg=this.res_url+"/images/sign_"+t.id+"/back_bg.png",this.images.back=this.res_url+"/images/sign_"+t.id+"/back.png",this.images.start_btn=this.res_url+"/images/sign_"+t.id+"/start_btn.png",console.log(this.images.area_bg),this.userinfo=a.getStorageSync("userinfo")?a.getStorageSync("userinfo"):{nickName:"",avatarUrl:""},this.userinfo.avatarUrl&&(this.can_get_user=!0),this.page_control=!0;var s=this;t.again?this.canvas_data.again_number=Number(t.again)+1:this.canvas_data.again_number=1,a.getSystemInfo({success:function(a){s.screen_width=a.windowWidth,s.screen_height=a.windowHeight}}),this.getInfo()},onShow:function(a){},methods:{getuserinfo:function(t){t.detail.userInfo?(u.globalData.user={nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl,verify:0},a.setStorageSync("user",u.globalData.user),a.setStorageSync("userinfo",{nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl}),this.userinfo={nickName:t.detail.userInfo.nickName,avatarUrl:t.detail.userInfo.avatarUrl},this.can_get_user=!0,this.canvas_animation()):this.canvas_animation()},getInfo:function(){var t=this;a.request({header:{"content-type":"application/x-www-form-urlencoded"},url:t.host+"getInfo",data:{gid:this.id,appid:u.globalData.appid,ver:u.globalData.ver,scene:u.globalData.scene,source:u.globalData.source,src:u.globalData.src},success:function(e){console.log(e),t.backgroundColor=e.data.data.attr.background,a.setBackgroundColor({backgroundColor:e.data.data.attr.background}),t.card_image=e.data.data.card.img_url,t.card_name=e.data.data.card.name,t.card_positive=e.data.data.card.positive,t.canvas_data.result_url=e.data.data.card.result_url,t.canvas_data.share_url=e.data.data.attr.share_url,t.canvas_data.header_image=e.data.data.share.headimg,t.canvas_data.share_desc=e.data.data.share.share_desc,t.canvas_data.talk_desc=e.data.data.share.talk_desc,t.share_desc_new=e.data.data.share.share_desc_t,t.canvas_data.attr=e.data.data.attr,t.canvas_data.explain_color=e.data.data.attr.explain_color,t.images.back=e.data.data.attr.card_url,t.img_src=e.data.data.attr.talk_url,t.has_video=1==e.data.data.attr.is_ad&&1,t.class_show[0]=!0,1==e.data.data.attr.is_sub&&t.sub()},fail:function(a){console.log(a)}})},sub:function(){var t=getApp();a.getSetting({success:function(e){console.log("订阅全新",e.authSetting["scope.appMsgSubscribed"]),void 0===e.authSetting["scope.appMsgSubscribed"]&&"function"==typeof qq.subscribeAppMsg&&"303"!=t.globalData.source&&qq.subscribeAppMsg({subscribe:!0,success:function(e){o.addSubscribe(t,function(){a.setStorageSync("subscribe",1),n.default.Event.stat("addSubscribe",{subscribetype:t.globalData.ver+"home_1"})})},fail:function(e){console.log("----subscribeAppMsg----fail",e),"subscribeAppMsg:fail no permission"==e.errMsg&&a.setStorageSync("subscribe",2),n.default.Event.stat("addSubscribe",{subscribetype:t.globalData.ver+"home_2"})}}),!0===e.authSetting["scope.appMsgSubscribed"]&&1!=a.getStorageSync("subscribe")&&o.addSubscribe(t,function(){a.setStorageSync("subscribe",1),n.default.Event.stat("addSubscribe",{subscribetype:t.globalData.ver+"home_1"})}),!1===e.authSetting["scope.appMsgSubscribed"]&&a.setStorageSync("subscribe",2)}})},finger_animation:function(){var a=12,t=this,e=setInterval(function(){t.finger_img="finger_"+a%12,a+=1},80);setTimeout(function(){clearInterval(e),t.choice_tip_statues=!0},2880)},canvasEnd:function(){var t=this;t.start_statues=[!1,!0,!1],function(){t.canvas_move=!0;var e=a.createAnimation({duration:1e3,timingFunction:"ease"}),s=-50*t.screen_width/750,n=t.screen_height/2-50*t.screen_width/750;t.animation=e,e.translateX(s).translateY(n).scale(1.3).step(),t.animation_start=e.export()}(),setTimeout(function(){t.scroll_statues=!0,setTimeout(function(){t.canvas_move=!1,a.getStorageSync("finger")||(t.choice_tip_statues=!1,a.setStorageSync("finger","has"),t.finger_statues=!0,t.finger_animation(),setTimeout(function(){t.finger_statues=!1},2880))},10)},900)},canvas_animation:function(){function t(a){return a*e.screen_width/750}var e=this;if(!this.start_statues[0]){var s=a.createCanvasContext("animationCanvas");this.start_statues=[!0,!1,!1],a.getImageInfo({src:e.images.back,success:function(a){setTimeout(function(){e.start_statues=[!0,!0,!0],c.cardAnimation(e.canvasEnd,s,a.path,2,e.screen_width,e.screen_height,t(150),t(249),500,2e3,t(225),t(375),t(375))},1e3)}})}},scroll:function(a){var t=this,e=a.detail.scrollLeft+(t.card_width/2-t.margin_left)*(t.screen_width/750),s=(t.card_width-t.margin_left)*(t.screen_width/750),n=Math.ceil(e/s);n>=1&&(t.number=n),n>=22&&(t.number=22)},choice:function(t){var e=this,s=t.currentTarget.dataset.index;(function(){if(!e.choice_statues){e.choice_statues=!0;var a=new Array(78).fill(1);a[s]=0,e.card_statues=a}})(),e.click_statues||(e.click_statues=!0,function(){e.moveStart.x=t.detail.x+"px",e.moveStart.y=t.detail.y+"px",e.class_show[1]=!0;var s=a.createAnimation({duration:1e3,timingFunction:"ease"}),n=e.screen_width*e.moveEnd.y/750-t.detail.y,i=e.screen_width*e.moveEnd.x/750-t.detail.x;e.animation=s,s.translateX(i).translateY(n).step(),e.animationData=s.export(),e.animation_img=s.export(),setTimeout(function(){e.class_show[2]=!0;var t=a.createAnimation({duration:1e3,timingFunction:"ease"});e.animation=t,t.rotateY(180).scale(1.3).step(),e.animation_img=t.export(),setTimeout(function(){1==e.has_video||(e.page_statues=!0,setTimeout(function(){e.userinfo.avatarUrl?a.getImageInfo({src:e.userinfo.avatarUrl,success:function(a){console.log(a.type),"gif"!=a.type?(e.canvas_data.header_image=e.userinfo.avatarUrl,e.$refs.result.show(e.canvas_data)):e.$refs.result.show(e.canvas_data)}}):e.$refs.result.show(e.canvas_data)},1e3))},2e3)},1e3)}())},video:function(){var a=this,t=this;n.default.Event.stat("video_in",{}),this.video_statues||(o.useQQAd("").then(function(e){e&&(n.default.Event.stat("video_end",{}),t.page_statues=!0,setTimeout(function(){t.$refs.result.show(t.canvas_data)},1e3)),a.video_statues=!1}).catch(function(){n.default.Event.stat("video_end",{}),t.page_statues=!0,setTimeout(function(){t.$refs.result.show(t.canvas_data)},1e3)}),this.video_statues=!0)},save:function(a){var t=this;this.img_src=a.img,this.canvas_data.share_desc=this.share_desc_new,this.save_statues=!0,this.save_naimate(),setTimeout(function(){t.save_statues=!1},3e3)},save_naimate:function(){var a=1,t=this,e=setInterval(function(){t.save_img="save_"+a%3,a+=1},300);setTimeout(function(){clearInterval(e)},3e3)}}};t.default=d}).call(this,e("543d").default)},b5b5:function(a,t,e){var s=function(){var a=this;a.$createElement;a._self._c},n=[];e.d(t,"a",function(){return s}),e.d(t,"b",function(){return n})},fcde:function(a,t,e){var s=e("571f");e.n(s).a}},[["3a3d","common/runtime","common/vendor"]]]); 
 			}); 	require("pages/tarotmark/item.js");
 	
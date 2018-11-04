'use strict';var f, l = this;
function n(a) {
  return void 0 !== a;
}
function p(a) {
  return "string" == typeof a;
}
function r() {
}
function aa(a) {
  a.Xb = void 0;
  a.Aa = function() {
    return a.Xb ? a.Xb : a.Xb = new a;
  };
}
function ba(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function t(a) {
  return "array" == ba(a);
}
function ca(a) {
  var b = ba(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function v(a) {
  return "function" == ba(a);
}
function da(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ea(a) {
  return a[fa] || (a[fa] = ++ga);
}
var fa = "closure_uid_" + (1e9 * Math.random() >>> 0), ga = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function w(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = ia : w = ja;
  return w.apply(null, arguments);
}
function ka(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var la = Date.now || function() {
  return +new Date;
};
function x(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.l = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Od = function(a, c, g) {
    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
      d[e - 2] = arguments[e];
    }
    return b.prototype[c].apply(a, d);
  };
}
function ma(a, b) {
    this.code = a;
  this.state = y[a] || na;
  this.message = b || "";
  a = this.state.replace(/((?:^|\s+)[a-z])/g, function(a) {
    return a.toUpperCase().replace(/^[\s\xa0]+/g, "");
  });
  b = a.length - 5;
  if (0 > b || a.indexOf("Error", b) != b) {
    a += "Error";
  }
  this.name = a;
  a = Error(this.message);
  a.name = this.name;
  this.stack = a.stack || "";
}
x(ma, Error);
var na = "unknown error", y = {15:"element not selectable", 11:"element not visible"};
y[31] = na;
y[30] = na;
y[24] = "invalid cookie domain";
y[29] = "invalid element coordinates";
y[12] = "invalid element state";
y[32] = "invalid selector";
y[51] = "invalid selector";
y[52] = "invalid selector";
y[17] = "javascript error";
y[405] = "unsupported operation";
y[34] = "move target out of bounds";
y[27] = "no such alert";
y[7] = "no such element";
y[8] = "no such frame";
y[23] = "no such window";
y[28] = "script timeout";
y[33] = "session not created";
y[10] = "stale element reference";
y[21] = "timeout";
y[25] = "unable to set cookie";
y[26] = "unexpected alert open";
y[13] = na;
y[9] = "unknown command";
ma.prototype.toString = function() {
  return this.name + ": " + this.message;
};
var oa;
function pa(a, b, c) {
  this.j = c;
  this.c = a;
  this.o = b;
  this.b = 0;
  this.a = null;
}
pa.prototype.get = function() {
  if (0 < this.b) {
    this.b--;
    var a = this.a;
    this.a = a.next;
    a.next = null;
  } else {
    a = this.c();
  }
  return a;
};
pa.prototype.put = function(a) {
  this.o(a);
  this.b < this.j && (this.b++, a.next = this.a, this.a = a);
};
function qa(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, qa);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
x(qa, Error);
qa.prototype.name = "CustomError";
function ta(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
ta.prototype.a = null;
var ua = 0;
ta.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || ua++;
  this.j = d || la();
  this.o = a;
  this.c = b;
  this.b = c;
  delete this.a;
};
function va() {
  this.a = la();
}
var wa = new va;
va.prototype.set = function(a) {
  this.a = a;
};
va.prototype.reset = function() {
  this.set(la());
};
va.prototype.get = function() {
  return this.a;
};
var xa;
function ya(a) {
  return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
}
function za(a) {
  a = String(a);
  if (ya(a)) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Aa() {
}
function Ba(a, b) {
  var c = [];
  Ca(a, b, c);
  return c.join("");
}
function Ca(a, b, c) {
  if (null == b) {
    c.push("null");
  } else {
    if ("object" == typeof b) {
      if (t(b)) {
        var d = b;
        b = d.length;
        c.push("[");
        for (var e = "", g = 0; g < b; g++) {
          c.push(e), Ca(a, d[g], c), e = ",";
        }
        c.push("]");
        return;
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) {
        b = b.valueOf();
      } else {
        c.push("{");
        e = "";
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], "function" != typeof g && (c.push(e), Da(d, c), c.push(":"), Ca(a, g, c), e = ","));
        }
        c.push("}");
        return;
      }
    }
    switch(typeof b) {
      case "string":
        Da(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
        break;
      case "boolean":
        c.push(String(b));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
}
var Ea = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a, b) {
  b.push('"', a.replace(Fa, function(a) {
    var b = Ea[a];
    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Ea[a] = b);
    return b;
  }), '"');
}
function z(a, b) {
    this.width = a;
  this.height = b;
}
z.prototype.toString = function() {
  return "(" + this.width + " x " + this.height + ")";
};
z.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Ga(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
}
function Ha(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function Ia(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
var Ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ka(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0; g < Ja.length; g++) {
      c = Ja[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function La(a) {
  var b = arguments.length;
  if (1 == b && t(arguments[0])) {
    return La.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0; d < b; d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
}
function Ma(a) {
  var b = arguments.length;
  if (1 == b && t(arguments[0])) {
    return Ma.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0; d < b; d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
function Na() {
}
Na.prototype.a = function() {
};
function Oa(a) {
  Oa[" "](a);
  return a;
}
Oa[" "] = r;
function Pa(a, b) {
  try {
    return Oa(a[b]), !0;
  } catch (c) {
  }
  return !1;
}
function Qa(a, b) {
  var c = Ra;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
}
function Sa(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
var Ta = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function Ua(a) {
  if (!Va.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(Wa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Xa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ya, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Za, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace($a, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(ab, "&#0;"));
  return a;
}
var Wa = /&/g, Xa = /</g, Ya = />/g, Za = /"/g, $a = /'/g, ab = /\x00/g, Va = /[\x00&<>"']/, bb = String.prototype.repeat ? function(a, b) {
  return a.repeat(b);
} : function(a, b) {
  return Array(b + 1).join(a);
};
function cb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function db(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function eb(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
function fb() {
}
aa(fb);
fb.prototype.a = 0;
function gb(a) {
  this.a = a;
  this.b = {};
}
function hb(a, b, c) {
  a.b[b] = c;
  return a;
}
function ib(a) {
    var b = a.status;
  if (0 == b) {
    return a;
  }
  b = b || 13;
  a = a.value;
  if (!a || !da(a)) {
    throw new ma(b, a + "");
  }
  throw new ma(b, a.message + "");
}
function A() {
    0 != jb && (kb[ea(this)] = this);
  this.Ga = this.Ga;
  this.xa = this.xa;
}
var jb = 0, kb = {};
A.prototype.Ga = !1;
A.prototype.M = function() {
  if (!this.Ga && (this.Ga = !0, this.v(), 0 != jb)) {
    var a = ea(this);
    delete kb[a];
  }
};
function lb(a, b) {
  a.Ga ? n(void 0) ? b.call(void 0) : b() : (a.xa || (a.xa = []), a.xa.push(n(void 0) ? w(b, void 0) : b));
}
A.prototype.v = function() {
  if (this.xa) {
    for (; this.xa.length;) {
      this.xa.shift()();
    }
  }
};
function B(a) {
  a && "function" == typeof a.M && a.M();
}
function mb(a, b) {
    b.unshift(a);
  qa.call(this, Sa.apply(null, b));
  b.shift();
}
x(mb, qa);
mb.prototype.name = "AssertionError";
function nb(a, b) {
  throw new mb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
(function () {
    for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !l.requestAnimationFrame; ++b) {
    l.requestAnimationFrame = l[c + "RequestAnimationFrame"], l.cancelAnimationFrame = l[c + "CancelAnimationFrame"] || l[c + "CancelRequestAnimationFrame"];
  }
  if (!l.requestAnimationFrame) {
    var d = 0;
    l.requestAnimationFrame = function(a) {
      var b = (new Date).getTime(), c = Math.max(0, 16 - (b - d));
      d = b + c;
      return l.setTimeout(function() {
        a(b + c);
      }, c);
    };
    l.cancelAnimationFrame || (l.cancelAnimationFrame = function(a) {
      clearTimeout(a);
    });
  }
})();
var ob = [[], []], pb = 0, qb = !1, rb = 0;
function sb(a, b) {
  var c = rb++, d = {wd:{id:c, la:a.measure, context:b}, yd:{id:c, la:a.xd, context:b}, state:{}, Z:void 0, zb:!1};
  return function() {
    0 < arguments.length ? (d.Z || (d.Z = []), d.Z.length = 0, d.Z.push.apply(d.Z, arguments), d.Z.push(d.state)) : d.Z && d.Z.length ? (d.Z[0] = d.state, d.Z.length = 1) : d.Z = [d.state];
    d.zb || (d.zb = !0, ob[pb].push(d));
    qb || (qb = !0, window.requestAnimationFrame(tb));
  };
}
function tb() {
  qb = !1;
  var a = ob[pb], b = a.length;
  pb = (pb + 1) % 2;
  for (var c, d = 0; d < b; ++d) {
    c = a[d];
    var e = c.wd;
    c.zb = !1;
    e.la && e.la.apply(e.context, c.Z);
  }
  for (d = 0; d < b; ++d) {
    c = a[d], e = c.yd, c.zb = !1, e.la && e.la.apply(e.context, c.Z), c.state = {};
  }
  a.length = 0;
}
var ub = "closure_listenable_" + (1e6 * Math.random() | 0);
function vb(a) {
  return !(!a || !a[ub]);
}
var wb = 0;
var xb;
a: {
  var yb = l.navigator;
  if (yb) {
    var zb = yb.userAgent;
    if (zb) {
      xb = zb;
      break a;
    }
  }
  xb = "";
}
function C(a) {
  return -1 != xb.indexOf(a);
}
function Bb() {
}
function Cb(a, b) {
    var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, m, q, u, D) {
    if ("%" == q) {
      return "%";
    }
    var e = c.shift();
    if ("undefined" == typeof e) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = e;
    return Db[q].apply(null, arguments);
  });
}
var Db = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + bb(" ", Number(c) - a.length) : bb(" ", Number(c) - a.length) + a;
}, f:function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
  var g = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= Number(a) && (d = g + d);
  if (isNaN(c) || d.length >= Number(c)) {
    return d;
  }
  d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
  a = Number(c) - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + bb(" ", a) : g + bb(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d;
}, d:function(a, b, c, d, e, g, h, k) {
  return Db.f(parseInt(a, 10), b, c, d, 0, g, h, k);
}};
Db.i = Db.d;
Db.u = Db.d;
var Eb = Array.prototype.indexOf ? function(a, b, c) {
  return Array.prototype.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (p(a)) {
    return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (; c < a.length; c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, E = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, g = 0; g < d; g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, Fb = Array.prototype.filter ? function(a, b, c) {
  return Array.prototype.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], g = 0, h = p(a) ? a.split("") : a, k = 0; k < d; k++) {
    if (k in h) {
      var m = h[k];
      b.call(c, m, k, a) && (e[g++] = m);
    }
  }
  return e;
}, Gb = Array.prototype.map ? function(a, b, c) {
  return Array.prototype.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), g = p(a) ? a.split("") : a, h = 0; h < d; h++) {
    h in g && (e[h] = b.call(c, g[h], h, a));
  }
  return e;
}, Hb = Array.prototype.some ? function(a, b, c) {
  return Array.prototype.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, g = 0; g < d; g++) {
    if (g in e && b.call(c, e[g], g, a)) {
      return !0;
    }
  }
  return !1;
}, Ib = Array.prototype.every ? function(a, b, c) {
  return Array.prototype.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, g = 0; g < d; g++) {
    if (g in e && !b.call(c, e[g], g, a)) {
      return !1;
    }
  }
  return !0;
};
function Jb(a, b) {
  return 0 <= Eb(a, b);
}
function Kb(a, b) {
  b = Eb(a, b);
  var c;
  (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
  return c;
}
function Lb(a) {
  return Array.prototype.concat.apply([], arguments);
}
function Mb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function Nb(a, b, c, d) {
  Array.prototype.splice.apply(a, Ob(arguments, 1));
}
function Ob(a, b, c) {
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
var Qb = new pa(function () {
    return new Pb;
}, function(a) {
  a.reset();
}, 100);
function Rb() {
  var a = Sb, b = null;
  a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
  return b;
}
function Pb() {
  this.next = this.a = this.la = null;
}
Pb.prototype.set = function(a, b) {
  this.la = a;
  this.a = b;
  this.next = null;
};
Pb.prototype.reset = function() {
  this.next = this.a = this.la = null;
};
function F(a, b) {
  this.type = a;
  this.j = this.target = b;
  this.o = !1;
  this.Oc = !0;
}
F.prototype.h = function() {
  this.o = !0;
};
F.prototype.b = function() {
  this.Oc = !1;
};
function Tb(a, b, c, d, e) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.vb = e;
  this.key = ++wb;
  this.Qa = this.hb = !1;
}
function Ub(a) {
  a.Qa = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.vb = null;
}
function Vb() {
    this.a = "";
  this.b = Wb;
}
Vb.prototype.xb = !0;
Vb.prototype.kb = function() {
  return this.a;
};
Vb.prototype.toString = function() {
  return "Const{" + this.a + "}";
};
function Xb(a) {
  if (a instanceof Vb && a.constructor === Vb && a.b === Wb) {
    return a.a;
  }
  nb("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
}
var Wb = {};
function Yb(a) {
  var b = new Vb;
  b.a = a;
  return b;
}
Yb("");
function Zb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function $b(a, b) {
  return a.classList ? a.classList.contains(b) : Jb(Zb(a), b);
}
function ac(a, b) {
  a.classList ? a.classList.add(b) : $b(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function bc(a, b) {
  if (a.classList) {
    E(b, function(b) {
      ac(a, b);
    });
  } else {
    var c = {};
    E(Zb(a), function(a) {
      c[a] = !0;
    });
    E(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
}
function cc(a, b) {
  a.classList ? a.classList.remove(b) : $b(a, b) && (a.className = Fb(Zb(a), function(a) {
    return a != b;
  }).join(" "));
}
function dc(a, b) {
  a.classList ? E(b, function(b) {
    cc(a, b);
  }) : a.className = Fb(Zb(a), function(a) {
    return !Jb(b, a);
  }).join(" ");
}
function ec(a) {
    this.src = a;
  this.a = {};
  this.b = 0;
}
function fc(a, b, c, d, e, g) {
  var h = b.toString();
  b = a.a[h];
  b || (b = a.a[h] = [], a.b++);
  var k = gc(b, c, e, g);
  -1 < k ? (a = b[k], d || (a.hb = !1)) : (a = new Tb(c, a.src, h, !!e, g), a.hb = d, b.push(a));
  return a;
}
function hc(a, b) {
  var c = b.type;
  if (!(c in a.a)) {
    return !1;
  }
  var d = Kb(a.a[c], b);
  d && (Ub(b), a.a[c].length || (delete a.a[c], a.b--));
  return d;
}
function ic(a) {
  var b = 0, c;
  for (c in a.a) {
    for (var d = a.a[c], e = 0; e < d.length; e++) {
      ++b, Ub(d[e]);
    }
    delete a.a[c];
    a.b--;
  }
}
ec.prototype.Va = function(a, b, c, d) {
  a = this.a[a.toString()];
  var e = -1;
  a && (e = gc(a, b, c, d));
  return -1 < e ? a[e] : null;
};
ec.prototype.hasListener = function(a, b) {
  var c = n(a), d = c ? a.toString() : "", e = n(b);
  return Ha(this.a, function(a) {
    for (var g = 0; g < a.length; ++g) {
      if (!(c && a[g].type != d || e && a[g].capture != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function gc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var g = a[e];
    if (!g.Qa && g.listener == b && g.capture == !!c && g.vb == d) {
      return e;
    }
  }
  return -1;
}
function jc() {
    this.a = "";
  this.b = kc;
}
f = jc.prototype;
f.xb = !0;
f.kb = function() {
  return this.a;
};
f.Ec = !0;
f.Nb = function() {
  return 1;
};
f.toString = function() {
  return "TrustedResourceUrl{" + this.a + "}";
};
function lc(a) {
  if (a instanceof jc && a.constructor === jc && a.b === kc) {
    return a.a;
  }
  nb("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ba(a));
  return "type_error:TrustedResourceUrl";
}
var kc = {};
function mc(a) {
  var b = new jc;
  b.a = a;
  return b;
}
var nc;
function oc() {
}
x(oc, Bb);
function pc() {
  a: {
    var a = nc;
    if (!a.a && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          new ActiveXObject(d);
          var e = a.a = d;
          break a;
        } catch (g) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    e = a.a;
  }
  return e ? new ActiveXObject(e) : new XMLHttpRequest;
}
nc = new oc;
function qc(a) {
  if (a.ba && "function" == typeof a.ba) {
    return a.ba();
  }
  if (p(a)) {
    return a.split("");
  }
  if (ca(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ia(a);
}
var rc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function sc(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var g = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else {
        g = a[c];
      }
      b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function tc(a, b, c) {
    F.call(this, a, b);
  this.data = c;
}
x(tc, F);
function uc(a) {
  l.setTimeout(function() {
    throw a;
  }, 0);
}
var vc;
function wc() {
  var a = l.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
    var a = document.createElement("IFRAME");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = w(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (n(c.next)) {
        c = c.next;
        var a = c.ic;
        c.ic = null;
        a();
      }
    };
    return function(a) {
      d.next = {ic:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
    var b = document.createElement("SCRIPT");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    l.setTimeout(a, 0);
  };
}
function G(a, b) {
    this.a = n(a) ? a : 0;
  this.b = n(b) ? b : 0;
}
function xc(a) {
  return new G(a.a, a.b);
}
G.prototype.toString = function() {
  return "(" + this.a + ", " + this.b + ")";
};
function yc(a, b) {
  return new G(a.a - b.a, a.b - b.b);
}
G.prototype.ceil = function() {
  this.a = Math.ceil(this.a);
  this.b = Math.ceil(this.b);
  return this;
};
G.prototype.floor = function() {
  this.a = Math.floor(this.a);
  this.b = Math.floor(this.b);
  return this;
};
G.prototype.round = function() {
  this.a = Math.round(this.a);
  this.b = Math.round(this.b);
  return this;
};
function zc(a, b) {
  if (!a) {
    throw Error("Invalid class name " + a);
  }
  if (!v(b)) {
    throw Error("Invalid decorator function " + b);
  }
}
var Ac = {};
var Bc = C("Opera"), H = C("Trident") || C("MSIE"), Cc = C("Edge"), Dc = Cc || H, I = C("Gecko") && !(-1 != xb.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"), J = -1 != xb.toLowerCase().indexOf("webkit") && !C("Edge"), Ec = C("Macintosh");
function Fc() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Gc;
a: {
  var Hc = "", Ic = function() {
    var a = xb;
    if (I) {
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    }
    if (Cc) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (H) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (J) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (Bc) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  Ic && (Hc = Ic ? Ic[1] : "");
  if (H) {
    var Jc = Fc();
    if (null != Jc && Jc > parseFloat(Hc)) {
      Gc = String(Jc);
      break a;
    }
  }
  Gc = Hc;
}
var Ra = {};
function K(a) {
  return Qa(a, function() {
    for (var b = 0, c = Ta(String(Gc)).split("."), d = Ta(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; !b && g < e; g++) {
      var h = c[g] || "", k = d[g] || "";
      do {
        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
        if (0 == h[0].length && 0 == k[0].length) {
          break;
        }
        b = cb(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || cb(0 == h[2].length, 0 == k[2].length) || cb(h[2], k[2]);
        h = h[3];
        k = k[3];
      } while (!b);
    }
    return 0 <= b;
  });
}
function Kc(a) {
  return Number(Lc) >= a;
}
var Mc;
var Nc = l.document;
Mc = Nc && H ? Fc() || ("CSS1Compat" == Nc.compatMode ? parseInt(Gc, 10) : 5) : void 0;
var Lc = Mc;
function Oc(a, b) {
  Pc || Qc();
  Rc || (Pc(), Rc = !0);
  var c = Sb, d = Qb.get();
  d.set(a, b);
  c.b ? c.b.next = d : c.a = d;
  c.b = d;
}
var Pc;
function Qc() {
  if (-1 != String(l.Promise).indexOf("[native code]")) {
    var a = l.Promise.resolve(void 0);
    Pc = function() {
      a.then(Sc);
    };
  } else {
    Pc = function() {
      var a = Sc;
      !v(l.setImmediate) || l.Window && l.Window.prototype && !C("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (vc || (vc = wc()), vc(a)) : l.setImmediate(a);
    };
  }
}
var Rc = !1, Sb = new function() {
  this.b = this.a = null;
};
function Sc() {
  for (var a; a = Rb();) {
    try {
      a.la.call(a.a);
    } catch (b) {
      uc(b);
    }
    Qb.put(a);
  }
  Rc = !1;
}
var Tc = !H || Kc(9), Uc = !I && !H || H && Kc(9) || I && K("1.9.1"), Vc = H && !K("9");
var Wc = !H || Kc(9), Xc = !H || Kc(9), Yc = H && !K("9");
function Zc(a, b, c, d, e, g) {
  if (!(H || Cc || J && K("525"))) {
    return !0;
  }
  if (Ec && e) {
    return $c(a);
  }
  if (e && !d) {
    return !1;
  }
  "number" == typeof b && (b = ad(b));
  e = 17 == b || 18 == b || Ec && 91 == b;
  if ((!c || Ec) && e || Ec && 16 == b && (d || g)) {
    return !1;
  }
  if ((J || Cc) && d && c) {
    switch(a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1;
    }
  }
  if (H && d && b == a) {
    return !1;
  }
  switch(a) {
    case 13:
      return !0;
    case 27:
      return !(J || Cc);
  }
  return $c(a);
}
function $c(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (J || Cc) && !a) {
    return !0;
  }
  switch(a) {
    case 32:
    case 43:
    case 63:
    case 64:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return !0;
    default:
      return !1;
  }
}
function ad(a) {
  if (I) {
    a = bd(a);
  } else {
    if (Ec && J) {
      switch(a) {
        case 93:
          a = 91;
      }
    }
  }
  return a;
}
function bd(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
function cd() {
    this.a = "";
  this.c = dd;
  this.b = null;
}
f = cd.prototype;
f.Ec = !0;
f.Nb = function() {
  return this.b;
};
f.xb = !0;
f.kb = function() {
  return this.a;
};
f.toString = function() {
  return "SafeHtml{" + this.a + "}";
};
function ed(a) {
  if (a instanceof cd && a.constructor === cd && a.c === dd) {
    return a.a;
  }
  nb("expected object of type SafeHtml, got '" + a + "' of type " + ba(a));
  return "type_error:SafeHtml";
}
function fd(a) {
  if (a instanceof cd) {
    return a;
  }
  if (a instanceof cd) {
    var b = a;
  } else {
    b = null, a.Ec && (b = a.Nb()), a = Ua(a.xb ? a.kb() : String(a)), b = gd(a, b);
  }
  a = ed(b).replace(/(\r\n|\r|\n)/g, "<br>");
  return gd(a, b.Nb());
}
var dd = {};
function gd(a, b) {
  var c = new cd;
  c.a = a;
  c.b = b;
  return c;
}
gd("<!DOCTYPE html>", 0);
var hd = gd("", 0);
gd("<br>", 0);
function L(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
f = L.prototype;
f.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
f.contains = function(a) {
  return this && a ? a instanceof L ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.a >= this.left && a.a <= this.right && a.b >= this.top && a.b <= this.bottom : !1;
};
function id(a, b) {
  var c = b.a < a.left ? b.a - a.left : b.a > a.right ? b.a - a.right : 0;
  a = b.b < a.top ? b.b - a.top : b.b > a.bottom ? b.b - a.bottom : 0;
  return Math.sqrt(c * c + a * a);
}
f.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
f.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
f.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
function jd(a, b) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0; d < c; d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      if (a instanceof jd) {
        d = a.Ua(), c = a.ba();
      } else {
        var c = [], e = 0;
        for (d in a) {
          c[e++] = d;
        }
        d = c;
        c = Ia(a);
      }
      for (e = 0; e < d.length; e++) {
        this.set(d[e], c[e]);
      }
    }
  }
}
f = jd.prototype;
f.ba = function() {
  kd(this);
  for (var a = [], b = 0; b < this.a.length; b++) {
    a.push(this.b[this.a[b]]);
  }
  return a;
};
f.Ua = function() {
  kd(this);
  return this.a.concat();
};
function ld(a, b) {
  md(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && kd(a));
}
function kd(a) {
  var b, c;
  if (a.c != a.a.length) {
    for (b = c = 0; c < a.a.length;) {
      var d = a.a[c];
      md(a.b, d) && (a.a[b++] = d);
      c++;
    }
    a.a.length = b;
  }
  if (a.c != a.a.length) {
    var e = {};
    for (b = c = 0; c < a.a.length;) {
      d = a.a[c], md(e, d) || (a.a[b++] = d, e[d] = 1), c++;
    }
    a.a.length = b;
  }
}
f.get = function(a, b) {
  return md(this.b, a) ? this.b[a] : b;
};
f.set = function(a, b) {
  md(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b;
};
f.forEach = function(a, b) {
  for (var c = this.Ua(), d = 0; d < c.length; d++) {
    var e = c[d], g = this.get(e);
    a.call(b, g, e, this);
  }
};
function md(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function nd(a, b) {
    this.a = od;
  this.m = void 0;
  this.j = this.b = this.c = null;
  this.o = this.h = !1;
  if (a != r) {
    try {
      var c = this;
      a.call(b, function(a) {
        pd(c, qd, a);
      }, function(a) {
        if (!(a instanceof rd)) {
          try {
            if (a instanceof Error) {
              throw a;
            }
            throw Error("Promise rejected.");
          } catch (e) {
          }
        }
        pd(c, sd, a);
      });
    } catch (d) {
      pd(this, sd, d);
    }
  }
}
var od = 0, qd = 2, sd = 3;
function td() {
  this.next = this.context = this.b = this.c = this.a = null;
  this.j = !1;
}
td.prototype.reset = function() {
  this.context = this.b = this.c = this.a = null;
  this.j = !1;
};
var ud = new pa(function() {
  return new td;
}, function(a) {
  a.reset();
}, 100);
function vd(a, b, c) {
  var d = ud.get();
  d.c = a;
  d.b = b;
  d.context = c;
  return d;
}
nd.prototype.then = function(a, b, c) {
  return wd(this, v(a) ? a : null, v(b) ? b : null, c);
};
nd.prototype.then = nd.prototype.then;
nd.prototype.$goog_Thenable = !0;
function xd(a, b) {
  wd(a, null, b, void 0);
}
nd.prototype.cancel = function(a) {
  this.a == od && Oc(function() {
    var b = new rd(a);
    yd(this, b);
  }, this);
};
function yd(a, b) {
  if (a.a == od) {
    if (a.c) {
      var c = a.c;
      if (c.b) {
        for (var d = 0, e = null, g = null, h = c.b; h && (h.j || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) {
          e || (g = h);
        }
        e && (c.a == od && 1 == d ? yd(c, b) : (g ? (d = g, d.next == c.j && (c.j = d), d.next = d.next.next) : zd(c), Ad(c, e, sd, b)));
      }
      a.c = null;
    } else {
      pd(a, sd, b);
    }
  }
}
function Bd(a, b) {
  a.b || a.a != qd && a.a != sd || Cd(a);
  a.j ? a.j.next = b : a.b = b;
  a.j = b;
}
function wd(a, b, c, d) {
  var e = vd(null, null, null);
  e.a = new nd(function(a, h) {
    e.c = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (q) {
        h(q);
      }
    } : a;
    e.b = c ? function(b) {
      try {
        var e = c.call(d, b);
        !n(e) && b instanceof rd ? h(b) : a(e);
      } catch (q) {
        h(q);
      }
    } : h;
  });
  e.a.c = a;
  Bd(a, e);
  return e.a;
}
nd.prototype.K = function(a) {
  this.a = od;
  pd(this, qd, a);
};
nd.prototype.A = function(a) {
  this.a = od;
  pd(this, sd, a);
};
function pd(a, b, c) {
  if (a.a == od) {
    a === c && (b = sd, c = new TypeError("Promise cannot resolve to itself"));
    a.a = 1;
    a: {
      var d = c, e = a.K, g = a.A;
      if (d instanceof nd) {
        Bd(d, vd(e || r, g || null, a));
        var h = !0;
      } else {
        if (d) {
          try {
            var k = !!d.$goog_Thenable;
          } catch (q) {
            k = !1;
          }
        } else {
          k = !1;
        }
        if (k) {
          d.then(e, g, a), h = !0;
        } else {
          if (da(d)) {
            try {
              var m = d.then;
              if (v(m)) {
                Dd(d, m, e, g, a);
                h = !0;
                break a;
              }
            } catch (q) {
              g.call(a, q);
              h = !0;
              break a;
            }
          }
          h = !1;
        }
      }
    }
    h || (a.m = c, a.a = b, a.c = null, Cd(a), b != sd || c instanceof rd || Ed(a, c));
  }
}
function Dd(a, b, c, d, e) {
  function g(a) {
    k || (k = !0, d.call(e, a));
  }
  function h(a) {
    k || (k = !0, c.call(e, a));
  }
  var k = !1;
  try {
    b.call(a, h, g);
  } catch (m) {
    g(m);
  }
}
function Cd(a) {
  a.h || (a.h = !0, Oc(a.D, a));
}
function zd(a) {
  var b = null;
  a.b && (b = a.b, a.b = b.next, b.next = null);
  a.b || (a.j = null);
  return b;
}
nd.prototype.D = function() {
  for (var a; a = zd(this);) {
    Ad(this, a, this.a, this.m);
  }
  this.h = !1;
};
function Ad(a, b, c, d) {
  if (c == sd && b.b && !b.j) {
    for (; a && a.o; a = a.c) {
      a.o = !1;
    }
  }
  if (b.a) {
    b.a.c = null, Fd(b, c, d);
  } else {
    try {
      b.j ? b.c.call(b.context) : Fd(b, c, d);
    } catch (e) {
      Gd.call(null, e);
    }
  }
  ud.put(b);
}
function Fd(a, b, c) {
  b == qd ? a.c.call(a.context, c) : a.b && a.b.call(a.context, c);
}
function Ed(a, b) {
  a.o = !0;
  Oc(function() {
    a.o && Gd.call(null, b);
  });
}
var Gd = uc;
function rd(a) {
  qa.call(this, a);
}
x(rd, qa);
rd.prototype.name = "cancel";
function Hd(a, b) {
  this.j = this.D = this.c = "";
  this.m = null;
  this.o = this.h = "";
  this.a = !1;
  if (a instanceof Hd) {
    this.a = n(b) ? b : a.a;
    Id(this, a.c);
    this.D = a.D;
    this.j = a.j;
    Jd(this, a.m);
    this.h = a.h;
    b = a.b;
    var c = new Kd;
    c.c = b.c;
    b.a && (c.a = new jd(b.a), c.b = b.b);
    Ld(this, c);
    this.o = a.o;
  } else {
    a && (c = String(a).match(rc)) ? (this.a = !!b, Id(this, c[1] || "", !0), this.D = Md(c[2] || ""), this.j = Md(c[3] || "", !0), Jd(this, c[4]), this.h = Md(c[5] || "", !0), Ld(this, c[6] || "", !0), this.o = Md(c[7] || "")) : (this.a = !!b, this.b = new Kd(null, 0, this.a));
  }
}
Hd.prototype.toString = function() {
  var a = [], b = this.c;
  b && a.push(Nd(b, Od, !0), ":");
  var c = this.j;
  if (c || "file" == b) {
    a.push("//"), (b = this.D) && a.push(Nd(b, Od, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  }
  if (c = this.h) {
    this.j && "/" != c.charAt(0) && a.push("/"), a.push(Nd(c, "/" == c.charAt(0) ? Pd : Qd, !0));
  }
  (c = this.b.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Nd(c, Rd));
  return a.join("");
};
function Id(a, b, c) {
  a.c = c ? Md(b, !0) : b;
  a.c && (a.c = a.c.replace(/:$/, ""));
}
function Jd(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.m = b;
  } else {
    a.m = null;
  }
}
function Ld(a, b, c) {
  b instanceof Kd ? (a.b = b, Sd(a.b, a.a)) : (c || (b = Nd(b, Td)), a.b = new Kd(b, 0, a.a));
}
function Md(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Nd(a, b, c) {
  return p(a) ? (a = encodeURI(a).replace(b, Ud), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Ud(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Od = /[#\/\?@]/g, Qd = /[\#\?:]/g, Pd = /[\#\?]/g, Td = /[\#\?@]/g, Rd = /#/g;
function Kd(a, b, c) {
  this.b = this.a = null;
  this.c = a || null;
  this.j = !!c;
}
function Vd(a) {
  a.a || (a.a = new jd, a.b = 0, a.c && sc(a.c, function(b, c) {
    Wd(a, decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
function Wd(a, b, c) {
  Vd(a);
  a.c = null;
  b = Xd(a, b);
  var d = a.a.get(b);
  d || a.a.set(b, d = []);
  d.push(c);
  a.b += 1;
}
function Yd(a, b) {
  Vd(a);
  b = Xd(a, b);
  md(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, ld(a.a, b));
}
function Zd(a, b) {
  Vd(a);
  b = Xd(a, b);
  return md(a.a.b, b);
}
f = Kd.prototype;
f.forEach = function(a, b) {
  Vd(this);
  this.a.forEach(function(c, d) {
    E(c, function(c) {
      a.call(b, c, d, this);
    }, this);
  }, this);
};
f.Ua = function() {
  Vd(this);
  for (var a = this.a.ba(), b = this.a.Ua(), c = [], d = 0; d < b.length; d++) {
    for (var e = a[d], g = 0; g < e.length; g++) {
      c.push(b[d]);
    }
  }
  return c;
};
f.ba = function(a) {
  Vd(this);
  var b = [];
  if (p(a)) {
    Zd(this, a) && (b = Lb(b, this.a.get(Xd(this, a))));
  } else {
    a = this.a.ba();
    for (var c = 0; c < a.length; c++) {
      b = Lb(b, a[c]);
    }
  }
  return b;
};
f.set = function(a, b) {
  Vd(this);
  this.c = null;
  a = Xd(this, a);
  Zd(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b += 1;
  return this;
};
f.get = function(a, b) {
  a = a ? this.ba(a) : [];
  return 0 < a.length ? String(a[0]) : b;
};
f.toString = function() {
  if (this.c) {
    return this.c;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.Ua(), c = 0; c < b.length; c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ba(d), g = 0; g < d.length; g++) {
      var h = e;
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
      a.push(h);
    }
  }
  return this.c = a.join("&");
};
function Xd(a, b) {
  b = String(b);
  a.j && (b = b.toLowerCase());
  return b;
}
function Sd(a, b) {
  b && !a.j && (Vd(a), a.c = null, a.a.forEach(function(a, b) {
    var c = b.toLowerCase();
    b != c && (Yd(this, b), Yd(this, c), 0 < a.length && (this.c = null, this.a.set(Xd(this, c), Mb(a)), this.b += a.length));
  }, a));
  a.j = b;
}
function $d(a) {
    this.o = a;
  this.a = this.c = this.j = this.b = null;
}
function ae(a, b) {
  this.name = a;
  this.value = b;
}
ae.prototype.toString = function() {
  return this.name;
};
var be = new ae("SHOUT", 1200), ce = new ae("SEVERE", 1000), de = new ae("WARNING", 900), ee = new ae("INFO", 800), fe = new ae("CONFIG", 700), ge = new ae("FINER", 400);
function he(a) {
  if (a.j) {
    return a.j;
  }
  if (a.b) {
    return he(a.b);
  }
  nb("Root logger has no level set.");
  return null;
}
$d.prototype.log = function(a, b, c) {
  if (a.value >= he(this).value) {
    for (v(b) && (b = b()), a = new ta(a, String(b), this.o), c && (a.a = c), c = "log:" + a.c, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
      var d = c, e = a;
      if (d.a) {
        for (var g = 0; b = d.a[g]; g++) {
          b(e);
        }
      }
      c = c.b;
    }
  }
};
function ie(a, b) {
  a.log(ge, b, void 0);
}
var je = {}, ke = null;
function le() {
  ke || (ke = new $d(""), je[""] = ke, ke.j = fe);
}
function me(a) {
  le();
  var b;
  if (!(b = je[a])) {
    b = new $d(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = me(a.substr(0, c));
    c.c || (c.c = {});
    c.c[d] = b;
    b.b = c;
    je[a] = b;
  }
  return b;
}
var ne = {MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0};
function oe(a, b) {
  if (ne[a.tagName.toUpperCase()]) {
    throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
  }
  a.innerHTML = ed(b);
}
function M(a, b) {
    F.call(this, a ? a.type : "");
  this.relatedTarget = this.j = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.a = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.m = !1;
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.j = b;
    (b = a.relatedTarget) ? I && (Pa(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.a = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.m = Ec ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
x(M, F);
var pe = [1, 4, 2];
function qe(a) {
  return (Wc ? !a.c.button : "click" == a.type ? !0 : !!(a.c.button & pe[0])) && !(J && Ec && a.ctrlKey);
}
M.prototype.h = function() {
  M.l.h.call(this);
  this.c.stopPropagation ? this.c.stopPropagation() : this.c.cancelBubble = !0;
};
M.prototype.b = function() {
  M.l.b.call(this);
  var a = this.c;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Yc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
function re() {
  this.a = new Aa;
}
function se(a) {
  var b = new re;
  if (null == a) {
    return [];
  }
  if (p(a)) {
    if (/^[\s\xa0]*$/.test(a)) {
      return [];
    }
    a = za(a);
  }
  var c = [];
  te(b, a, c, 0);
  return c;
}
function te(a, b, c, d) {
  var e = ba(b);
  switch(e) {
    case "null":
    case "boolean":
    case "number":
    case "string":
      a = Ba(a.a, b);
      c.push(ve(a, e));
      break;
    case "array":
      c.push("[");
      for (e = 0; e < b.length; e++) {
        0 < e && c.push(","), c.push("\n"), c.push(bb(" ", d + 2)), te(a, b[e], c, d + 2);
      }
      0 < e && (c.push("\n"), c.push(bb(" ", d)));
      c.push("]");
      break;
    case "object":
      c.push("{");
      var e = 0, g;
      for (g in b) {
        b.hasOwnProperty(g) && (0 < e && c.push(","), c.push("\n"), c.push(bb(" ", d + 2)), c.push("" + Ba(a.a, g) + ""), c.push(":", " "), te(a, b[g], c, d + 2), e++);
      }
      0 < e && (c.push("\n"), c.push(bb(" ", d)));
      c.push("}");
      break;
    default:
      a = Ba(a.a, ""), c.push(ve(a, "unknown"));
  }
}
function ve(a, b) {
  return Cb("", b) + a + "";
}
function we(a, b, c, d) {
    this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
}
function xe(a) {
  return new L(a.top, a.left + a.width, a.top + a.height, a.left);
}
f = we.prototype;
f.toString = function() {
  return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
};
f.contains = function(a) {
  return a instanceof G ? a.a >= this.left && a.a <= this.left + this.width && a.b >= this.top && a.b <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
};
f.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
f.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
f.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function ye(a) {
  this.a = new jd;
  if (a) {
    a = qc(a);
    for (var b = a.length, c = 0; c < b; c++) {
      var d = a[c];
      this.a.set(ze(d), d);
    }
  }
}
function ze(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + ea(a) : b.charAt(0) + a;
}
ye.prototype.contains = function(a) {
  a = ze(a);
  return md(this.a.b, a);
};
ye.prototype.ba = function() {
  return this.a.ba();
};
function Ae(a) {
  this.j = a || "";
  this.o = wa;
}
Ae.prototype.a = !0;
Ae.prototype.b = !0;
Ae.prototype.c = !1;
function Be(a) {
  return 10 > a ? "0" + a : String(a);
}
function Ce(a, b) {
  a = (a.j - b) / 1000;
  b = a.toFixed(3);
  var c = 0;
  if (1 > a) {
    c = 2;
  } else {
    for (; 100 > a;) {
      c++, a *= 10;
    }
  }
  for (; 0 < c--;) {
    b = " " + b;
  }
  return b;
}
function De(a) {
  Ae.call(this, a);
}
x(De, Ae);
function N(a) {
  return a ? new Ee(O(a)) : xa || (xa = new Ee);
}
function Fe(a, b) {
  Ga(b, function(b, d) {
    b && b.xb && (b = b.kb());
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ge.hasOwnProperty(d) ? a.setAttribute(Ge[d], b) : d.lastIndexOf("aria-", 0) && d.lastIndexOf("data-", 0) ? a[d] = b : a.setAttribute(d, b);
  });
}
var Ge = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function He(a) {
  a = a.document;
  a = Ie(a) ? a.documentElement : a.body;
  return new z(a.clientWidth, a.clientHeight);
}
function Je(a) {
  var b = Ke(a);
  a = Le(a);
  return H && K("10") && a.pageYOffset != b.scrollTop ? new G(b.scrollLeft, b.scrollTop) : new G(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
}
function Ke(a) {
  return a.scrollingElement ? a.scrollingElement : !J && Ie(a) ? a.documentElement : a.body || a.documentElement;
}
function Me(a) {
  return a ? Le(a) : window;
}
function Le(a) {
  return a.parentWindow || a.defaultView;
}
function Ne(a, b, c) {
  return Oe(document, arguments);
}
function Oe(a, b) {
  var c = String(b[0]), d = b[1];
  if (!Tc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ua(d.name), '"');
    if (d.type) {
      c.push(' type="', Ua(d.type), '"');
      var e = {};
      Ka(e, d);
      delete e.type;
      d = e;
    }
    c.push(">");
    c = c.join("");
  }
  c = a.createElement(c);
  d && (p(d) ? c.className = d : t(d) ? c.className = d.join(" ") : Fe(c, d));
  2 < b.length && Pe(a, c, b, 2);
  return c;
}
function Pe(a, b, c, d) {
  function e(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (; d < c.length; d++) {
    var g = c[d];
    !ca(g) || da(g) && 0 < g.nodeType ? e(g) : E(Qe(g) ? Mb(g) : g, e);
  }
}
function Ie(a) {
  return "CSS1Compat" == a.compatMode;
}
function Re(a, b) {
  Pe(O(a), a, arguments, 1);
}
function Se(a) {
  for (var b; b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Te(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Ue(a, b) {
  if (!a || !b) {
    return !1;
  }
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  }
  for (; b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
}
function O(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Ve(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        Se(a), a.appendChild(O(a).createTextNode(String(b)));
      }
    }
  }
}
var We = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Xe = {IMG:" ", BR:"\n"};
function Ye(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}
function Ze(a) {
  return H && !K("9") ? (a = a.getAttributeNode("tabindex"), !!a && a.specified) : a.hasAttribute("tabindex");
}
function $e(a) {
  a = a.tabIndex;
  return "number" == typeof a && 0 <= a && 32768 > a;
}
function af(a) {
  var b = [];
  bf(a, b, !1);
  return b.join("");
}
function bf(a, b, c) {
  if (!(a.nodeName in We)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Xe) {
        b.push(Xe[a.nodeName]);
      } else {
        for (a = a.firstChild; a;) {
          bf(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Qe(a) {
  if (a && "number" == typeof a.length) {
    if (da(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (v(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
function Ee(a) {
  this.a = a || l.document || document;
}
f = Ee.prototype;
f.g = function(a) {
  return p(a) ? this.a.getElementById(a) : a;
};
f.B = function(a, b, c) {
  return Oe(this.a, arguments);
};
f.pc = Te;
function cf(a) {
  return Uc && a.children ? a.children : Fb(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
}
f.contains = Ue;
f.Wc = Ve;
var df = "closure_lm_" + (1e6 * Math.random() | 0), ef = {}, ff = 0;
function P(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      P(a, b[g], c, d, e);
    }
    return null;
  }
  c = gf(c);
  return vb(a) ? a.w(b, c, d, e) : hf(a, b, c, !1, d, e);
}
function hf(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, k = jf(a);
  k || (a[df] = k = new ec(a));
  c = fc(k, b, c, d, e, g);
  if (c.a) {
    return c;
  }
  d = kf();
  c.a = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(lf(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  ff++;
  return c;
}
function kf() {
  var a = mf, b = Xc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function nf(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      nf(a, b[g], c, d, e);
    }
    return null;
  }
  c = gf(c);
  return vb(a) ? a.Fc(b, c, d, e) : hf(a, b, c, !0, d, e);
}
function of(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      of(a, b[g], c, d, e);
    }
  } else {
    c = gf(c), vb(a) ? a.ga(b, c, d, e) : a && (a = jf(a)) && (b = a.Va(b, c, !!d, e)) && pf(b);
  }
}
function pf(a) {
  if ("number" == typeof a || !a || a.Qa) {
    return !1;
  }
  var b = a.src;
  if (vb(b)) {
    return hc(b.ea, a);
  }
  var c = a.type, d = a.a;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(lf(c), d);
  ff--;
  (c = jf(b)) ? (hc(c, a), c.b || (c.src = null, b[df] = null)) : Ub(a);
  return !0;
}
function qf(a) {
  if (a) {
    if (vb(a)) {
      a.ea && ic(a.ea);
    } else {
      if (a = jf(a)) {
        var b = 0, c;
        for (c in a.a) {
          for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) {
            pf(d[e]) && ++b;
          }
        }
      }
    }
  }
}
function lf(a) {
  return a in ef ? ef[a] : ef[a] = "on" + a;
}
function rf(a, b, c, d) {
  var e = !0;
  if (a = jf(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var g = b[a];
        g && g.capture == c && !g.Qa && (g = sf(g, d), e = e && !1 !== g);
      }
    }
  }
  return e;
}
function sf(a, b) {
  var c = a.listener, d = a.vb || a.src;
  a.hb && pf(a);
  return c.call(d, b);
}
function mf(a, b) {
  if (a.Qa) {
    return !0;
  }
  if (!Xc) {
    if (!b) {
      a: {
        b = ["window", "event"];
        for (var c = l, d; d = b.shift();) {
          if (null != c[d]) {
            c = c[d];
          } else {
            b = null;
            break a;
          }
        }
        b = c;
      }
    }
    d = b;
    b = new M(d, this);
    c = !0;
    if (!(0 > d.keyCode || void 0 != d.returnValue)) {
      a: {
        var e = !1;
        if (!d.keyCode) {
          try {
            d.keyCode = -1;
            break a;
          } catch (h) {
            e = !0;
          }
        }
        if (e || void 0 == d.returnValue) {
          d.returnValue = !0;
        }
      }
      d = [];
      for (e = b.j; e; e = e.parentNode) {
        d.push(e);
      }
      for (var e = a.type, g = d.length - 1; !b.o && 0 <= g; g--) {
        b.j = d[g], a = rf(d[g], e, !0, b), c = c && a;
      }
      for (g = 0; !b.o && g < d.length; g++) {
        b.j = d[g], a = rf(d[g], e, !1, b), c = c && a;
      }
    }
    return c;
  }
  return sf(a, new M(b, this));
}
function jf(a) {
  a = a[df];
  return a instanceof ec ? a : null;
}
var tf = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function gf(a) {
  if (v(a)) {
    return a;
  }
  a[tf] || (a[tf] = function(b) {
    return a.handleEvent(b);
  });
  return a[tf];
}
function uf(a, b) {
    a && a.log(de, b, void 0);
}
function vf(a, b) {
  a && a.log(ee, b, void 0);
}
Ma("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
function wf(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function xf(a, b, c) {
  t(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (oa || (oa = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = oa, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
function yf() {
    this.c = w(this.j, this);
  this.a = new De;
  this.a.b = !1;
  this.a.c = !1;
  this.b = this.a.a = !1;
  this.o = {};
}
function zf(a, b) {
  if (b != a.b) {
    le();
    var c = ke;
    if (b) {
      var d = a.c;
      c.a || (c.a = []);
      c.a.push(d);
    } else {
      (c = c.a) && Kb(c, a.c);
    }
    a.b = b;
  }
}
yf.prototype.j = function(a) {
  if (!this.o[a.b]) {
    var b = this.a;
    var c = [];
    c.push(b.j, " ");
    if (b.b) {
      var d = new Date(a.j);
      c.push("[", Be(d.getFullYear() - 2000) + Be(d.getMonth() + 1) + Be(d.getDate()) + " " + Be(d.getHours()) + ":" + Be(d.getMinutes()) + ":" + Be(d.getSeconds()) + "." + Be(Math.floor(d.getMilliseconds() / 10)), "] ");
    }
    c.push("[", Ce(a, b.o.get()), "s] ");
    c.push("[", a.b, "] ");
    c.push(a.c);
    b.c && (d = a.a) && c.push("\n", d instanceof Error ? d.message : d.toString());
    b.a && c.push("\n");
    b = c.join("");
    if (c = Af) {
      switch(a.o) {
        case be:
          Bf(c, "info", b);
          break;
        case ce:
          Bf(c, "error", b);
          break;
        case de:
          Bf(c, "warn", b);
          break;
        default:
          Bf(c, "debug", b);
      }
    }
  }
};
var Af = l.console;
function Bf(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
}
var Cf = H ? mc(Xb(Yb('javascript:""'))) : mc(Xb(Yb("about:blank"))), Df = lc(Cf),
    Ef = H ? mc(Xb(Yb('javascript:""'))) : mc(Xb(Yb("javascript:undefined")));
lc(Ef);
function Ff(a) {
  A.call(this);
  this.b = a;
  this.a = {};
}
x(Ff, A);
var Gf = [];
f = Ff.prototype;
f.w = function(a, b, c, d) {
  t(b) || (b && (Gf[0] = b.toString()), b = Gf);
  for (var e = 0; e < b.length; e++) {
    var g = P(a, b[e], c || this.handleEvent, d || !1, this.b || this);
    if (!g) {
      break;
    }
    this.a[g.key] = g;
  }
  return this;
};
f.Fc = function(a, b, c, d) {
  return Hf(this, a, b, c, d);
};
function Hf(a, b, c, d, e, g) {
  if (t(c)) {
    for (var h = 0; h < c.length; h++) {
      Hf(a, b, c[h], d, e, g);
    }
  } else {
    b = nf(b, c, d || a.handleEvent, e, g || a.b || a);
    if (!b) {
      return a;
    }
    a.a[b.key] = b;
  }
  return a;
}
f.ga = function(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      this.ga(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.b || this, c = gf(c), d = !!d, b = vb(a) ? a.Va(b, c, d, e) : a ? (a = jf(a)) ? a.Va(b, c, d, e) : null : null, b && (pf(b), delete this.a[b.key]);
  }
  return this;
};
function If(a) {
  Ga(a.a, function(a, c) {
    this.a.hasOwnProperty(c) && pf(a);
  }, a);
  a.a = {};
}
f.v = function() {
  Ff.l.v.call(this);
  If(this);
};
f.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Q() {
  A.call(this);
  this.ea = new ec(this);
  this.Uc = this;
  this.Cb = null;
}
x(Q, A);
Q.prototype[ub] = !0;
f = Q.prototype;
f.ec = function(a) {
  this.Cb = a;
};
f.addEventListener = function(a, b, c, d) {
  P(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  of(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  var b, c = this.Cb;
  if (c) {
    for (b = []; c; c = c.Cb) {
      b.push(c);
    }
  }
  var c = this.Uc, d = a.type || a;
  if (p(a)) {
    a = new F(a, c);
  } else {
    if (a instanceof F) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new F(d, c);
      Ka(a, e);
    }
  }
  var e = !0;
  if (b) {
    for (var g = b.length - 1; !a.o && 0 <= g; g--) {
      var h = a.j = b[g];
      e = Jf(h, d, !0, a) && e;
    }
  }
  a.o || (h = a.j = c, e = Jf(h, d, !0, a) && e, a.o || (e = Jf(h, d, !1, a) && e));
  if (b) {
    for (g = 0; !a.o && g < b.length; g++) {
      h = a.j = b[g], e = Jf(h, d, !1, a) && e;
    }
  }
  return e;
};
f.v = function() {
  Q.l.v.call(this);
  this.ea && ic(this.ea);
  this.Cb = null;
};
f.w = function(a, b, c, d) {
  return fc(this.ea, String(a), b, !1, c, d);
};
f.Fc = function(a, b, c, d) {
  return fc(this.ea, String(a), b, !0, c, d);
};
f.ga = function(a, b, c, d) {
  var e = this.ea;
  a = String(a).toString();
  if (a in e.a) {
    var g = e.a[a];
    b = gc(g, b, c, d);
    -1 < b ? (Ub(g[b]), Array.prototype.splice.call(g, b, 1), g.length || (delete e.a[a], e.b--), e = !0) : e = !1;
  } else {
    e = !1;
  }
  return e;
};
function Jf(a, b, c, d) {
  b = a.ea.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, g = 0; g < b.length; ++g) {
    var h = b[g];
    if (h && !h.Qa && h.capture == c) {
      var k = h.listener, m = h.vb || h.src;
      h.hb && hc(a.ea, h);
      e = !1 !== k.call(m, d) && e;
    }
  }
  return e && 0 != d.Oc;
}
f.Va = function(a, b, c, d) {
  return this.ea.Va(String(a), b, c, d);
};
f.hasListener = function(a, b) {
  return this.ea.hasListener(n(a) ? String(a) : void 0, b);
};
function Kf(a, b, c) {
  if (p(b)) {
    (b = Lf(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], g = Lf(c, d);
      g && (c.style[g] = e);
    }
  }
}
var Mf = {};
function Lf(a, b) {
  var c = Mf[b];
  if (!c) {
    var d = db(b), c = d;
    void 0 === a.style[d] && (d = (J ? "Webkit" : I ? "Moz" : H ? "ms" : Bc ? "O" : null) + eb(d), void 0 !== a.style[d] && (c = d));
    Mf[b] = c;
  }
  return c;
}
function Nf(a, b) {
  var c = O(a);
  return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
}
function Of(a, b) {
  return Nf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
}
function Pf(a, b, c) {
  if (b instanceof G) {
    var d = b.a;
    b = b.b;
  } else {
    d = b, b = c;
  }
  a.style.left = Qf(d, !1);
  a.style.top = Qf(b, !1);
}
function Rf(a) {
  a = a ? O(a) : document;
  return !H || Kc(9) || Ie(N(a).a) ? a.documentElement : a.body;
}
function Sf(a) {
  try {
    var b = a.getBoundingClientRect();
  } catch (c) {
    return {left:0, top:0, right:0, bottom:0};
  }
  H && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b;
}
function Tf(a) {
  if (H && !Kc(8)) {
    return a.offsetParent;
  }
  var b = O(a), c = Of(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode; a && a != b; a = a.parentNode) {
    if (11 == a.nodeType && a.host && (a = a.host), c = Of(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
}
function Uf(a) {
  for (var b = new L(0, Infinity, Infinity, 0), c = N(a), d = c.a.body, e = c.a.documentElement, g = Ke(c.a); a = Tf(a);) {
    if (!(H && !a.clientWidth || J && !a.clientHeight && a == d) && a != d && a != e && "visible" != Of(a, "overflow")) {
      var h = Vf(a), k = new G(a.clientLeft, a.clientTop);
      h.a += k.a;
      h.b += k.b;
      b.top = Math.max(b.top, h.b);
      b.right = Math.min(b.right, h.a + a.clientWidth);
      b.bottom = Math.min(b.bottom, h.b + a.clientHeight);
      b.left = Math.max(b.left, h.a);
    }
  }
  d = g.scrollLeft;
  g = g.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, g);
  c = He(Le(c.a) || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, g + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
}
function Vf(a) {
  var b = O(a), c = new G(0, 0), d = Rf(b);
  if (a == d) {
    return c;
  }
  a = Sf(a);
  b = Je(N(b).a);
  c.a = a.left + b.a;
  c.b = a.top + b.b;
  return c;
}
function Wf(a, b, c) {
  if (b instanceof z) {
    c = b.height, b = b.width;
  } else {
    if (void 0 == c) {
      throw Error("missing height argument");
    }
  }
  a.style.width = Qf(b, !0);
  a.style.height = Qf(c, !0);
}
function Qf(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
}
function Xf(a) {
  var b = Yf;
  if ("none" != Of(a, "display")) {
    return b(a);
  }
  var c = a.style, d = c.display, e = c.visibility, g = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = g;
  c.visibility = e;
  return a;
}
function Yf(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return n(b) && !d || !a.getBoundingClientRect ? new z(b, c) : (a = Sf(a), new z(a.right - a.left, a.bottom - a.top));
}
function Zf(a) {
  var b = Vf(a);
  a = Xf(a);
  return new we(b.a, b.b, a.width, a.height);
}
function $f(a, b) {
  a = a.style;
  "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")");
}
function R(a, b) {
  a.style.display = b ? "" : "none";
}
function ag(a) {
  return "rtl" == Of(a, "direction");
}
var bg = I ? "MozUserSelect" : J || Cc ? "WebkitUserSelect" : null;
function cg(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (bg) {
    if (b = b ? "none" : "", a.style && (a.style[bg] = b), c) {
      a = 0;
      for (var d; d = c[a]; a++) {
        d.style && (d.style[bg] = b);
      }
    }
  } else {
    if (H || Bc) {
      if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for (a = 0; d = c[a]; a++) {
          d.setAttribute("unselectable", b);
        }
      }
    }
  }
}
function dg(a, b) {
  if (/^\d+px?$/.test(b)) {
    return parseInt(b, 10);
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  b = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return +b;
}
function eg(a, b) {
  return (b = a.currentStyle ? a.currentStyle[b] : null) ? dg(a, b) : 0;
}
var fg = {thin:2, medium:4, thick:6};
function gg(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return b in fg ? fg[b] : dg(a, b);
}
function hg(a) {
    this.a = {};
  a && ig(this, a);
}
function ig(a, b) {
  b = b instanceof hg ? b.a : b;
  for (var c in b) {
    b.hasOwnProperty(c) && a.set(c, b[c]);
  }
  return a;
}
hg.prototype.set = function(a, b) {
  null != b ? this.a[a] = b : delete this.a[a];
  return this;
};
hg.prototype.get = function(a) {
  var b = null;
  this.a.hasOwnProperty(a) && (b = this.a[a]);
  return null != b ? b : null;
};
hg.prototype.has = function(a) {
  return !!this.get(a);
};
function jg(a) {
  this.a = a;
  this.b = {};
  this.c = me("webdriver.http.Executor");
}
function kg(a, b) {
  var c = a.b[b.a] || lg[b.a];
  if (!c) {
    throw Error("Unrecognized command: " + b.a);
  }
  b = b.b;
  var d = mg(c.path, b), e = new ng(c.method, d, b), g = a.c;
  ie(g, function() {
    return ">>>\n" + e;
  });
  return og(a.a, e).then(function(a) {
    ie(g, function() {
      return "<<<\n" + a;
    });
    return pg(a);
  });
}
function mg(a, b) {
  var c = a.match(/\/:(\w+)\b/g);
  if (c) {
    for (var d = 0; d < c.length; ++d) {
      var e = c[d].substring(2);
      if (e in b) {
        var g = b[e];
        g && g.ELEMENT && (g = g.ELEMENT);
        a = a.replace(c[d], "/" + g);
        delete b[e];
      } else {
        throw Error("Missing required parameter: " + e);
      }
    }
  }
  return a;
}
function pg(a) {
  try {
    return JSON.parse(a.body);
  } catch (c) {
  }
  var b = {status:0, value:a.body.replace(/\r\n/g, "\n")};
  199 < a.status && 300 > a.status || (b.status = 404 == a.status ? 9 : 13);
  return b;
}
var lg = function() {
  function a(a) {
    return c("POST", a);
  }
  function b(a) {
    return c("GET", a);
  }
  function c(a, b) {
    return {method:a, path:b};
  }
  return (new function() {
    var a = {};
    this.put = function(b, c) {
      a[b] = c;
      return this;
    };
    this.Vc = function() {
      return a;
    };
  }).put("getStatus", b("/status")).put("newSession", a("/session")).put("getSessions", b("/sessions")).put("getSessionCapabilities", b("/session/:sessionId")).put("quit", c("DELETE", "/session/:sessionId")).put("close", c("DELETE", "/session/:sessionId/window")).put("getCurrentWindowHandle", b("/session/:sessionId/window_handle")).put("getWindowHandles", b("/session/:sessionId/window_handles")).put("getCurrentUrl", b("/session/:sessionId/url")).put("get", a("/session/:sessionId/url")).put("goBack", 
  a("/session/:sessionId/back")).put("goForward", a("/session/:sessionId/forward")).put("refresh", a("/session/:sessionId/refresh")).put("addCookie", a("/session/:sessionId/cookie")).put("getCookies", b("/session/:sessionId/cookie")).put("deleteAllCookies", c("DELETE", "/session/:sessionId/cookie")).put("deleteCookie", c("DELETE", "/session/:sessionId/cookie/:name")).put("findElement", a("/session/:sessionId/element")).put("findElements", a("/session/:sessionId/elements")).put("getActiveElement", 
  a("/session/:sessionId/element/active")).put("findChildElement", a("/session/:sessionId/element/:id/element")).put("findChildElements", a("/session/:sessionId/element/:id/elements")).put("clearElement", a("/session/:sessionId/element/:id/clear")).put("clickElement", a("/session/:sessionId/element/:id/click")).put("sendKeysToElement", a("/session/:sessionId/element/:id/value")).put("submitElement", a("/session/:sessionId/element/:id/submit")).put("getElementText", b("/session/:sessionId/element/:id/text")).put("getElementTagName", 
  b("/session/:sessionId/element/:id/name")).put("isElementSelected", b("/session/:sessionId/element/:id/selected")).put("isElementEnabled", b("/session/:sessionId/element/:id/enabled")).put("isElementDisplayed", b("/session/:sessionId/element/:id/displayed")).put("getElementLocation", b("/session/:sessionId/element/:id/location")).put("getElementSize", b("/session/:sessionId/element/:id/size")).put("getElementAttribute", b("/session/:sessionId/element/:id/attribute/:name")).put("getElementValueOfCssProperty", 
  b("/session/:sessionId/element/:id/css/:propertyName")).put("elementEquals", b("/session/:sessionId/element/:id/equals/:other")).put("takeElementScreenshot", b("/session/:sessionId/element/:id/screenshot")).put("switchToWindow", a("/session/:sessionId/window")).put("maximizeWindow", a("/session/:sessionId/window/:windowHandle/maximize")).put("getWindowPosition", b("/session/:sessionId/window/:windowHandle/position")).put("setWindowPosition", a("/session/:sessionId/window/:windowHandle/position")).put("getWindowSize", 
  b("/session/:sessionId/window/:windowHandle/size")).put("setWindowSize", a("/session/:sessionId/window/:windowHandle/size")).put("switchToFrame", a("/session/:sessionId/frame")).put("getPageSource", b("/session/:sessionId/source")).put("getTitle", b("/session/:sessionId/title")).put("executeScript", a("/session/:sessionId/execute")).put("executeAsyncScript", a("/session/:sessionId/execute_async")).put("screenshot", b("/session/:sessionId/screenshot")).put("setTimeout", a("/session/:sessionId/timeouts")).put("setScriptTimeout", 
  a("/session/:sessionId/timeouts/async_script")).put("implicitlyWait", a("/session/:sessionId/timeouts/implicit_wait")).put("mouseMoveTo", a("/session/:sessionId/moveto")).put("mouseClick", a("/session/:sessionId/click")).put("mouseDoubleClick", a("/session/:sessionId/doubleclick")).put("mouseButtonDown", a("/session/:sessionId/buttondown")).put("mouseButtonUp", a("/session/:sessionId/buttonup")).put("mouseMoveTo", a("/session/:sessionId/moveto")).put("sendKeysToActiveElement", a("/session/:sessionId/keys")).put("touchSingleTap", 
  a("/session/:sessionId/touch/click")).put("touchDoubleTap", a("/session/:sessionId/touch/doubleclick")).put("touchDown", a("/session/:sessionId/touch/down")).put("touchUp", a("/session/:sessionId/touch/up")).put("touchMove", a("/session/:sessionId/touch/move")).put("touchScroll", a("/session/:sessionId/touch/scroll")).put("touchLongPress", a("/session/:sessionId/touch/longclick")).put("touchFlick", a("/session/:sessionId/touch/flick")).put("acceptAlert", a("/session/:sessionId/accept_alert")).put("dismissAlert", 
  a("/session/:sessionId/dismiss_alert")).put("getAlertText", b("/session/:sessionId/alert_text")).put("setAlertValue", a("/session/:sessionId/alert_text")).put("getLog", a("/session/:sessionId/log")).put("getAvailableLogTypes", b("/session/:sessionId/log/types")).put("getSessionLogs", a("/logs")).put("uploadFile", a("/session/:sessionId/file")).Vc();
}();
function qg(a) {
  var b = [], c;
  for (c in a) {
    b.push(c + ": " + a[c]);
  }
  return b.join("\n");
}
function ng(a, b, c) {
  this.method = a;
  this.path = b;
  this.data = c || {};
  this.headers = {Accept:"application/json; charset=utf-8"};
}
ng.prototype.toString = function() {
  return [this.method + " " + this.path + " HTTP/1.1", qg(this.headers), "", JSON.stringify(this.data)].join("\n");
};
function rg(a, b, c) {
  this.status = a;
  this.body = c;
  this.headers = {};
  for (var d in b) {
    this.headers[d.toLowerCase()] = b[d];
  }
}
function sg(a) {
  var b = {};
  if (a.getAllResponseHeaders) {
    var c = a.getAllResponseHeaders();
    c && (c = c.replace(/\r\n/g, "\n").split("\n"), E(c, function(a) {
      a = a.split(/\s*:\s*/, 2);
      a[0] && (b[a[0]] = a[1] || "");
    }));
  }
  return new rg(a.status || 200, b, a.responseText.replace(/\0/g, ""));
}
rg.prototype.toString = function() {
  var a = qg(this.headers), b = ["HTTP/1.1 " + this.status, a];
  a && b.push("");
  this.body && b.push(this.body);
  return b.join("\n");
};
function tg(a, b, c) {
  if (v(a)) {
    c && (a = w(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = w(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
}
function ug(a) {
    Q.call(this);
  this.a = a;
  a = H ? "focusout" : "blur";
  this.b = P(this.a, H ? "focusin" : "focus", this, !H);
  this.c = P(this.a, a, this, !H);
}
x(ug, Q);
ug.prototype.handleEvent = function(a) {
  var b = new M(a.c);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b);
};
ug.prototype.v = function() {
  ug.l.v.call(this);
  pf(this.b);
  pf(this.c);
  delete this.a;
};
function vg(a, b) {
  Q.call(this);
  a && wg(this, a, b);
}
x(vg, Q);
f = vg.prototype;
f.Ka = null;
f.Ab = null;
f.Yb = null;
f.Bb = null;
f.da = -1;
f.va = -1;
f.Gb = !1;
var xg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, yg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, zg = H || 
Cc || J && K("525"), Ag = Ec && I;
f = vg.prototype;
f.ld = function(a) {
  if (J || Cc) {
    if (17 == this.da && !a.ctrlKey || 18 == this.da && !a.altKey || Ec && 91 == this.da && !a.metaKey) {
      this.va = this.da = -1;
    }
  }
  -1 == this.da && (a.ctrlKey && 17 != a.a ? this.da = 17 : a.altKey && 18 != a.a ? this.da = 18 : a.metaKey && 91 != a.a && (this.da = 91));
  zg && !Zc(a.a, this.da, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.va = ad(a.a), Ag && (this.Gb = a.altKey));
};
f.md = function(a) {
  this.va = this.da = -1;
  this.Gb = a.altKey;
};
f.handleEvent = function(a) {
  var b = a.c, c = b.altKey;
  if (H && "keypress" == a.type) {
    var d = this.va;
  } else {
    if ((J || Cc) && "keypress" == a.type) {
      d = this.va;
    } else {
      if (Bc && !J) {
        d = this.va;
      } else {
        d = b.keyCode || this.va;
        var e = b.charCode || 0;
        Ag && (c = this.Gb);
        Ec && 63 == e && 224 == d && (d = 191);
      }
    }
  }
  (e = d = ad(d)) ? 63232 <= d && d in xg ? e = xg[d] : 25 == d && a.shiftKey && (e = 9) : b.keyIdentifier && b.keyIdentifier in yg && (e = yg[b.keyIdentifier]);
  a = e == this.da;
  this.da = e;
  b = new Bg(e, 0, a, b);
  b.altKey = c;
  this.dispatchEvent(b);
};
f.g = function() {
  return this.Ka;
};
function wg(a, b, c) {
  a.Bb && Cg(a);
  a.Ka = b;
  a.Ab = P(a.Ka, "keypress", a, c);
  a.Yb = P(a.Ka, "keydown", a.ld, c, a);
  a.Bb = P(a.Ka, "keyup", a.md, c, a);
}
function Cg(a) {
  a.Ab && (pf(a.Ab), pf(a.Yb), pf(a.Bb), a.Ab = null, a.Yb = null, a.Bb = null);
  a.Ka = null;
  a.da = -1;
  a.va = -1;
}
f.v = function() {
  vg.l.v.call(this);
  Cg(this);
};
function Bg(a, b, c, d) {
  M.call(this, d);
  this.type = "key";
  this.a = a;
  this.repeat = c;
}
x(Bg, M);
function S(a) {
  Q.call(this);
  this.a = a || N();
  this.ya = Dg;
  this.ja = null;
  this.J = !1;
  this.b = null;
  this.K = void 0;
  this.D = this.j = this.o = null;
}
x(S, Q);
S.prototype.fb = fb.Aa();
var Dg = null;
function Eg(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close";
  }
  throw Error("Invalid component state");
}
f = S.prototype;
f.N = function() {
  return this.ja || (this.ja = ":" + (this.fb.a++).toString(36));
};
f.g = function() {
  return this.b;
};
function T(a) {
  a.K || (a.K = new Ff(a));
  return a.K;
}
function Fg(a, b) {
  if (a == b) {
    throw Error("Unable to set parent component");
  }
  if (b && a.o && a.ja && Gg(a.o, a.ja) && a.o != b) {
    throw Error("Unable to set parent component");
  }
  a.o = b;
  S.l.ec.call(a, b);
}
f.ec = function(a) {
  if (this.o && this.o != a) {
    throw Error("Method not supported");
  }
  S.l.ec.call(this, a);
};
f.I = function() {
  this.b = this.a.a.createElement("DIV");
};
function Hg(a, b, c) {
  if (a.J) {
    throw Error("Component already rendered");
  }
  a.b || a.I();
  b ? b.insertBefore(a.b, c || null) : a.a.a.body.appendChild(a.b);
  a.o && !a.o.J || a.S();
}
f.S = function() {
  this.J = !0;
  Ig(this, function(a) {
    !a.J && a.g() && a.S();
  });
};
f.aa = function() {
  Ig(this, function(a) {
    a.J && a.aa();
  });
  this.K && If(this.K);
  this.J = !1;
};
f.v = function() {
  this.J && this.aa();
  this.K && (this.K.M(), delete this.K);
  Ig(this, function(a) {
    a.M();
  });
  this.b && Te(this.b);
  this.o = this.b = this.D = this.j = null;
  S.l.v.call(this);
};
function Jg(a, b, c) {
  a.gb(b, Kg(a), c);
}
f.gb = function(a, b, c) {
  if (a.J && (c || !this.J)) {
    throw Error("Component already rendered");
  }
  if (0 > b || b > Kg(this)) {
    throw Error("Child component index out of bounds");
  }
  this.D && this.j || (this.D = {}, this.j = []);
  if (a.o == this) {
    var d = a.N();
    this.D[d] = a;
    Kb(this.j, a);
  } else {
    var d = this.D, e = a.N();
    if (null !== d && e in d) {
      throw Error('The object already contains the key "' + e + '"');
    }
    d[e] = a;
  }
  Fg(a, this);
  Nb(this.j, b, 0, a);
  a.J && this.J && a.o == this ? (c = this.Ba(), b = c.childNodes[b] || null, b != a.g() && c.insertBefore(a.g(), b)) : c ? (this.b || this.I(), b = U(this, b + 1), Hg(a, this.Ba(), b ? b.b : null)) : this.J && !a.J && a.b && a.b.parentNode && 1 == a.b.parentNode.nodeType && a.S();
};
f.Ba = function() {
  return this.b;
};
function Lg(a) {
  null == a.ya && (a.ya = ag(a.J ? a.b : a.a.a.body));
  return a.ya;
}
function Kg(a) {
  return a.j ? a.j.length : 0;
}
function Gg(a, b) {
  a.D && b ? (a = a.D, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
  return b;
}
function U(a, b) {
  return a.j ? a.j[b] || null : null;
}
function Ig(a, b, c) {
  a.j && E(a.j, b, c);
}
function Mg(a, b) {
  return a.j && b ? Eb(a.j, b) : -1;
}
f.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.N();
    a = Gg(this, c);
    if (c && a) {
      var d = this.D;
      c in d && delete d[c];
      Kb(this.j, a);
      b && (a.aa(), a.b && Te(a.b));
      Fg(a, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
function Ng(a) {
  this.c = a;
}
aa(Ng);
function Og(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
function Pg(a, b) {
  b = b.g();
  cg(b, !0, I);
  H && (b.hideFocus = !0);
  (a = a.c) && wf(b, a);
}
Ng.prototype.b = function() {
  return "goog-container";
};
Ng.prototype.a = function(a) {
  var b = this.b(), c = [b, a.wa == Qg ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function Rg(a, b) {
  this.c = a;
  this.b = b;
}
function Sg(a, b) {
    this.b = a;
  this.a = ig(new hg, b);
}
Sg.prototype.N = function() {
  return this.b;
};
Sg.prototype.toJSON = function() {
  return this.N();
};
function Tg(a) {
  this.a = a;
}
function og(a, b) {
  var c = a.a + b.path;
  return new nd(function(a, e) {
    var d = pc();
    d.open(b.method, c, !0);
    d.onload = function() {
      a(sg(d));
    };
    d.onerror = function() {
      e(Error(["Unable to send request: ", b.method, " ", c, "\nOriginal request:\n", b].join("")));
    };
    for (var h in b.headers) {
      d.setRequestHeader(h, b.headers[h] + "");
    }
    d.send(JSON.stringify(b.data));
  });
}
function Ug(a, b, c) {
    Q.call(this);
  this.target = a;
  this.h = b || a;
  this.j = c || new we(NaN, NaN, NaN, NaN);
  this.c = O(a);
  this.a = new Ff(this);
  lb(this, ka(B, this.a));
  this.deltaY = this.deltaX = this.K = this.D = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.o = !0;
  this.b = !1;
  P(this.h, ["touchstart", "mousedown"], this.Qc, !1, this);
}
x(Ug, Q);
var Vg = l.document && l.document.documentElement && !!l.document.documentElement.setCapture && !!l.document.releaseCapture;
f = Ug.prototype;
f.fa = function(a) {
  this.o = a;
};
f.v = function() {
  Ug.l.v.call(this);
  of(this.h, ["touchstart", "mousedown"], this.Qc, !1, this);
  If(this.a);
  Vg && this.c.releaseCapture();
  this.h = this.target = null;
};
f.Qc = function(a) {
  var b = "mousedown" == a.type;
  if (!this.o || this.b || b && !qe(a)) {
    this.dispatchEvent("earlycancel");
  } else {
    if (this.dispatchEvent(new Wg("start", this, a.clientX, a.clientY))) {
      this.b = !0;
      b && a.b();
      var b = this.c, c = b.documentElement, d = !Vg;
      this.a.w(b, ["touchmove", "mousemove"], this.nd, d);
      this.a.w(b, ["touchend", "mouseup"], this.ib, d);
      Vg ? (c.setCapture(!1), this.a.w(c, "losecapture", this.ib)) : this.a.w(Me(b), "blur", this.ib);
      this.A && this.a.w(this.A, "scroll", this.Fd, d);
      this.clientX = this.D = a.clientX;
      this.clientY = this.K = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      this.deltaX = this.target.offsetLeft;
      this.deltaY = this.target.offsetTop;
      this.m = Je(N(this.c).a);
    }
  }
};
f.ib = function(a) {
  If(this.a);
  Vg && this.c.releaseCapture();
  this.b ? (this.b = !1, this.dispatchEvent(new Wg("end", this, a.clientX, a.clientY, 0, Xg(this, this.deltaX), Yg(this, this.deltaY)))) : this.dispatchEvent("earlycancel");
};
f.nd = function(a) {
  if (this.o) {
    var b = 1 * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if (!this.b) {
      var d = this.D - this.clientX, e = this.K - this.clientY;
      if (0 < d * d + e * e) {
        if (this.dispatchEvent(new Wg("start", this, a.clientX, a.clientY))) {
          this.b = !0;
        } else {
          this.Ga || this.ib(a);
          return;
        }
      }
    }
    c = Zg(this, b, c);
    b = c.a;
    c = c.b;
    this.b && this.dispatchEvent(new Wg("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && ($g(this, a, b, c), a.b());
  }
};
function Zg(a, b, c) {
  var d = Je(N(a.c).a);
  b += d.a - a.m.a;
  c += d.b - a.m.b;
  a.m = d;
  a.deltaX += b;
  a.deltaY += c;
  return new G(Xg(a, a.deltaX), Yg(a, a.deltaY));
}
f.Fd = function(a) {
  var b = Zg(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  $g(this, a, b.a, b.b);
};
function $g(a, b, c, d) {
  a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new Wg("drag", a, b.clientX, b.clientY, 0, c, d));
}
function Xg(a, b) {
  var c = a.j;
  a = isNaN(c.left) ? null : c.left;
  c = isNaN(c.width) ? 0 : c.width;
  return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b));
}
function Yg(a, b) {
  var c = a.j;
  a = isNaN(c.top) ? null : c.top;
  c = isNaN(c.height) ? 0 : c.height;
  return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b));
}
function Wg(a, b, c, d, e, g, h) {
  F.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.left = n(g) ? g : b.deltaX;
  this.top = n(h) ? h : b.deltaY;
}
x(Wg, F);
function ah(a, b, c, d, e, g, h, k) {
  var m;
  if (m = c.offsetParent) {
    var q = "HTML" == m.tagName || "BODY" == m.tagName;
    if (!q || "static" != Of(m, "position")) {
      var u = Vf(m);
      q || (q = (q = ag(m)) && I ? -m.scrollLeft : !q || Dc && K("8") || "visible" == Of(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft, u = yc(u, new G(q, m.scrollTop)));
    }
  }
  m = u || new G;
  u = Zf(a);
  if (q = Uf(a)) {
    var D = new we(q.left, q.top, q.right - q.left, q.bottom - q.top), q = Math.max(u.left, D.left), Z = Math.min(u.left + u.width, D.left + D.width);
    if (q <= Z) {
      var ra = Math.max(u.top, D.top), D = Math.min(u.top + u.height, D.top + D.height);
      ra <= D && (u.left = q, u.top = ra, u.width = Z - q, u.height = D - ra);
    }
  }
  q = N(a);
  ra = N(c);
  if (q.a != ra.a) {
    Z = q.a.body;
    var ra = Le(ra.a), D = new G(0, 0), sa = Me(O(Z));
    if (Pa(sa, "parent")) {
      var ue = Z;
      do {
        if (sa == ra) {
          var Ab = Vf(ue);
        } else {
          Ab = Sf(ue), Ab = new G(Ab.left, Ab.top);
        }
        D.a += Ab.a;
        D.b += Ab.b;
      } while (sa && sa != ra && sa != sa.parent && (ue = sa.frameElement) && (sa = sa.parent));
    }
    Z = yc(D, Vf(Z));
    !H || Kc(9) || Ie(q.a) || (Z = yc(Z, Je(q.a)));
    u.left += Z.a;
    u.top += Z.b;
  }
  a = bh(a, b);
  b = u.left;
  a & 4 ? b += u.width : a & 2 && (b += u.width / 2);
  b = new G(b, u.top + (a & 1 ? u.height : 0));
  b = yc(b, m);
  e && (b.a += (a & 4 ? -1 : 1) * e.a, b.b += (a & 1 ? -1 : 1) * e.b);
  var ha;
  h && (ha = Uf(c)) && (ha.top -= m.b, ha.right -= m.a, ha.bottom -= m.b, ha.left -= m.a);
  return ch(b, c, d, g, ha, h, k);
}
function ch(a, b, c, d, e, g, h) {
  a = xc(a);
  var k = bh(b, c);
  c = Xf(b);
  h = h ? new z(h.width, h.height) : new z(c.width, c.height);
  a = xc(a);
  h = new z(h.width, h.height);
  var m = 0;
  if (d || 0 != k) {
    k & 4 ? a.a -= h.width + (d ? d.right : 0) : k & 2 ? a.a -= h.width / 2 : d && (a.a += d.left), k & 1 ? a.b -= h.height + (d ? d.bottom : 0) : d && (a.b += d.top);
  }
  if (g) {
    if (e) {
      d = a;
      k = h;
      m = 0;
      65 == (g & 65) && (d.a < e.left || d.a >= e.right) && (g &= -2);
      132 == (g & 132) && (d.b < e.top || d.b >= e.bottom) && (g &= -5);
      d.a < e.left && g & 1 && (d.a = e.left, m |= 1);
      if (g & 16) {
        var q = d.a;
        d.a < e.left && (d.a = e.left, m |= 4);
        d.a + k.width > e.right && (k.width = Math.min(e.right - d.a, q + k.width - e.left), k.width = Math.max(k.width, 0), m |= 4);
      }
      d.a + k.width > e.right && g & 1 && (d.a = Math.max(e.right - k.width, e.left), m |= 1);
      g & 2 && (m |= (d.a < e.left ? 16 : 0) | (d.a + k.width > e.right ? 32 : 0));
      d.b < e.top && g & 4 && (d.b = e.top, m |= 2);
      g & 32 && (q = d.b, d.b < e.top && (d.b = e.top, m |= 8), d.b + k.height > e.bottom && (k.height = Math.min(e.bottom - d.b, q + k.height - e.top), k.height = Math.max(k.height, 0), m |= 8));
      d.b + k.height > e.bottom && g & 4 && (d.b = Math.max(e.bottom - k.height, e.top), m |= 2);
      g & 8 && (m |= (d.b < e.top ? 64 : 0) | (d.b + k.height > e.bottom ? 128 : 0));
      e = m;
    } else {
      e = 256;
    }
    m = e;
  }
  g = new we(0, 0, 0, 0);
  g.left = a.a;
  g.top = a.b;
  g.width = h.width;
  g.height = h.height;
  e = m;
  if (e & 496) {
    return e;
  }
  Pf(b, new G(g.left, g.top));
  h = new z(g.width, g.height);
  c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = Ie(N(O(b)).a), !H || K("10") || a && K("8") ? (b = b.style, I ? b.MozBoxSizing = "border-box" : J ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (H ? (k = eg(b, "paddingLeft"), d = eg(b, "paddingRight"), g = eg(b, "paddingTop"), a = eg(b, "paddingBottom"), a = new L(g, d, a, k)) : (k = Nf(b, "paddingLeft"), 
  d = Nf(b, "paddingRight"), g = Nf(b, "paddingTop"), a = Nf(b, "paddingBottom"), a = new L(parseFloat(g), parseFloat(d), parseFloat(a), parseFloat(k))), H && !Kc(9) ? (k = gg(b, "borderLeft"), d = gg(b, "borderRight"), g = gg(b, "borderTop"), b = gg(b, "borderBottom"), b = new L(g, d, b, k)) : (k = Nf(b, "borderLeftWidth"), d = Nf(b, "borderRightWidth"), g = Nf(b, "borderTopWidth"), b = Nf(b, "borderBottomWidth"), b = new L(parseFloat(g), parseFloat(d), parseFloat(b), parseFloat(k))), h.pixelWidth = 
  c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
  return e;
}
function bh(a, b) {
  return (b & 8 && ag(a) ? b ^ 4 : b) & -9;
}
function dh() {
}
var eh;
aa(dh);
var fh = {button:"pressed", checkbox:"checked", menuitem:"selected", menuitemcheckbox:"checked", menuitemradio:"checked", radio:"checked", tab:"selected", treeitem:"selected"};
f = dh.prototype;
f.mb = function() {
};
f.Ma = function(a) {
  return a.a.B("DIV", gh(this, a).join(" "), a.Ca);
};
function hh(a, b, c) {
  if (a = a.g ? a.g() : a) {
    var d = [b];
    H && !K("7") && (d = ih(Zb(a), b), d.push(b));
    (c ? bc : dc)(a, d);
  }
}
f.sc = function(a) {
  Lg(a) && this.vc(a.g(), !0);
  a.isEnabled() && this.nb(a, !0);
};
f.uc = function(a, b) {
  cg(a, !b, !H && !Bc);
};
f.vc = function(a, b) {
  hh(a, this.Na() + "-rtl", b);
};
f.tc = function(a) {
  var b;
  return a.T & 32 && (b = a.g()) ? Ze(b) && $e(b) : !1;
};
f.nb = function(a, b) {
  var c;
  if (a.T & 32 && (c = a.g())) {
    if (!b && a.O & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.O & 32 && a.wc();
    }
    (Ze(c) && $e(c)) != b && Ye(c, b);
  }
};
f.Qb = function(a, b, c) {
  var d = a.g();
  if (d) {
    var e = jh(this, b);
    e && hh(a, e, c);
    this.oa(d, b, c);
  }
};
f.oa = function(a, b, c) {
  eh || (eh = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  b = eh[b];
  var d = a.getAttribute("role") || null;
  d && (d = fh[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && xf(a, b, c);
};
function kh(a, b) {
  if (a && (Se(a), b)) {
    if (p(b)) {
      Ve(a, b);
    } else {
      var c = function(b) {
        if (b) {
          var c = O(a);
          a.appendChild(p(b) ? c.createTextNode(b) : b);
        }
      };
      t(b) ? E(b, c) : !ca(b) || "nodeType" in b ? c(b) : E(Mb(b), c);
    }
  }
}
f.Na = function() {
  return "goog-control";
};
function gh(a, b) {
  var c = a.Na(), d = [c], e = a.Na();
  e != c && d.push(e);
  c = b.O;
  for (e = []; c;) {
    var g = c & -c;
    e.push(jh(a, g));
    c &= ~g;
  }
  d.push.apply(d, e);
  (a = b.nc) && d.push.apply(d, a);
  H && !K("7") && d.push.apply(d, ih(d));
  return d;
}
function ih(a, b) {
  var c = [];
  b && (a = Lb(a, [b]));
  E([], function(d) {
    !Ib(d, ka(Jb, a)) || b && !Jb(d, b) || c.push(d.join("_"));
  });
  return c;
}
function jh(a, b) {
  if (!a.a) {
    var c = a.Na();
    a.a = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"};
  }
  return a.a[b];
}
function lh(a, b) {
    S.call(this, b);
  this.h = a || "";
}
var mh;
x(lh, S);
f = lh.prototype;
f.ra = null;
function nh() {
  null == mh && (mh = "placeholder" in document.createElement("INPUT"));
  return mh;
}
f.wb = !1;
f.I = function() {
  this.b = this.a.B("INPUT", {type:"text"});
};
f.S = function() {
  lh.l.S.call(this);
  var a = new Ff(this);
  a.w(this.g(), "focus", this.Ac);
  a.w(this.g(), "blur", this.cd);
  nh() ? this.c = a : (I && a.w(this.g(), ["keypress", "keydown", "keyup"], this.hd), a.w(Me(O(this.g())), "load", this.ud), this.c = a, oh(this));
  ph(this);
  this.g().a = this;
};
f.aa = function() {
  lh.l.aa.call(this);
  this.c && (this.c.M(), this.c = null);
  this.g().a = null;
};
function oh(a) {
  !a.m && a.c && a.g().form && (a.c.w(a.g().form, "submit", a.jd), a.m = !0);
}
f.v = function() {
  lh.l.v.call(this);
  this.c && (this.c.M(), this.c = null);
};
f.Ac = function() {
  this.wb = !0;
  cc(this.g(), "label-input-label");
  if (!nh() && !qh(this) && !this.A) {
    var a = this, b = function() {
      a.g() && (a.g().value = "");
    };
    H ? tg(b, 10) : b();
  }
};
f.cd = function() {
  nh() || (this.c.ga(this.g(), "click", this.Ac), this.ra = null);
  this.wb = !1;
  ph(this);
};
f.hd = function(a) {
  27 == a.a && ("keydown" == a.type ? this.ra = this.g().value : "keypress" == a.type ? this.g().value = this.ra : "keyup" == a.type && (this.ra = null), a.b());
};
f.jd = function() {
  qh(this) || (this.g().value = "", tg(this.bd, 10, this));
};
f.bd = function() {
  qh(this) || (this.g().value = this.h);
};
f.ud = function() {
  ph(this);
};
function qh(a) {
  return !!a.g() && "" != a.g().value && a.g().value != a.h;
}
function rh(a) {
  a.g().value = "";
  null != a.ra && (a.ra = "");
}
f.reset = function() {
  qh(this) && (rh(this), ph(this));
};
function ph(a) {
  var b = a.g();
  nh() ? a.g().placeholder != a.h && (a.g().placeholder = a.h) : oh(a);
  xf(b, "label", a.h);
  qh(a) ? (b = a.g(), cc(b, "label-input-label")) : (a.A || a.wb || (b = a.g(), ac(b, "label-input-label")), nh() || tg(a.Ld, 10, a));
}
f.fa = function(a) {
  this.g().disabled = !a;
  var b = this.g();
  a ? cc(b, "label-input-label-disabled") : ac(b, "label-input-label-disabled");
};
f.isEnabled = function() {
  return !this.g().disabled;
};
f.Ld = function() {
  !this.g() || qh(this) || this.wb || (this.g().value = this.h);
};
function sh(a, b) {
  Q.call(this);
  this.c = new Ff(this);
  this.cc(a || null);
  b && (this.Sa = b);
}
x(sh, Q);
f = sh.prototype;
f.ca = null;
f.hc = null;
f.X = !1;
f.$b = -1;
f.Sa = "toggle_display";
f.g = function() {
  return this.ca;
};
f.cc = function(a) {
  if (this.X) {
    throw Error("Can not change this state of the popup while showing.");
  }
  this.ca = a;
};
f.ua = function(a) {
  this.F && this.F.stop();
  this.A && this.A.stop();
  if (a) {
    if (!this.X && this.ac()) {
      if (!this.ca) {
        throw Error("Caller must call setElement before trying to show the popup");
      }
      this.$a();
      a = O(this.ca);
      this.c.w(a, "mousedown", this.Kc, !0);
      if (H) {
        try {
          var b = a.activeElement;
        } catch (d) {
        }
        for (; b && "IFRAME" == b.nodeName;) {
          try {
            var c = b.contentDocument || b.contentWindow.document;
          } catch (d) {
            break;
          }
          a = c;
          b = a.activeElement;
        }
        this.c.w(a, "mousedown", this.Kc, !0);
        this.c.w(a, "deactivate", this.Jc);
      } else {
        this.c.w(a, "blur", this.Jc);
      }
      "toggle_display" == this.Sa ? (this.ca.style.visibility = "visible", R(this.ca, !0)) : "move_offscreen" == this.Sa && this.$a();
      this.X = !0;
      this.$b = la();
      this.F ? (nf(this.F, "end", this.sb, !1, this), this.F.play()) : this.sb();
    }
  } else {
    th(this);
  }
};
f.$a = r;
function th(a, b) {
  a.X && a.dispatchEvent({type:"beforehide", target:b}) && (a.c && If(a.c), a.X = !1, la(), a.A ? (nf(a.A, "end", ka(a.jc, b), !1, a), a.A.play()) : a.jc(b));
}
f.jc = function(a) {
  "toggle_display" == this.Sa ? this.vd() : "move_offscreen" == this.Sa && (this.ca.style.top = "-10000px");
  this.Za(a);
};
f.vd = function() {
  this.ca.style.visibility = "hidden";
  R(this.ca, !1);
};
f.ac = function() {
  return this.dispatchEvent("beforeshow");
};
f.sb = function() {
  this.dispatchEvent("show");
};
f.Za = function(a) {
  this.dispatchEvent({type:"hide", target:a});
};
f.Kc = function(a) {
  a = a.target;
  Ue(this.ca, a) || uh(this, a) || 150 > la() - this.$b || th(this, a);
};
f.Jc = function(a) {
  var b = O(this.ca);
  if ("undefined" != typeof document.activeElement) {
    if (a = b.activeElement, !a || Ue(this.ca, a) || "BODY" == a.tagName) {
      return;
    }
  } else {
    if (a.target != b) {
      return;
    }
  }
  150 > la() - this.$b || th(this);
};
function uh(a, b) {
  return Hb(a.hc || [], function(a) {
    return b === a || Ue(a, b);
  });
}
f.v = function() {
  sh.l.v.call(this);
  this.c.M();
  B(this.F);
  B(this.A);
  delete this.ca;
  delete this.c;
  delete this.hc;
};
function vh() {
  this.c = "tablist";
}
x(vh, Ng);
aa(vh);
vh.prototype.b = function() {
  return "goog-tab-bar";
};
vh.prototype.a = function(a) {
  var b = vh.l.a.call(this, a);
  if (!this.j) {
    var c = this.b();
    this.j = La(wh, c + "-top", xh, c + "-bottom", yh, c + "-start", zh, c + "-end");
  }
  b.push(this.j[a.c]);
  return b;
};
function Ah() {
  S.call(this);
}
x(Ah, S);
f = Ah.prototype;
f.bc = null;
f.v = function() {
  qf(this.g());
  pf(this.bc);
  this.bc = null;
  Ah.l.v.call(this);
};
f.I = function() {
  var a = this.a.B("DIV", "banner");
  Kf(a, "position", "absolute");
  Kf(a, "top", "0");
  P(a, "click", w(this.Db, this, !1));
  this.b = a;
  this.Eb();
  this.bc = P(Me(this.a.a) || window, "resize", this.Eb, !1, this);
};
f.Db = function(a) {
  R(this.g(), a);
  this.Eb();
};
f.Eb = function() {
  if (!this.g().style.display) {
    var a = Me(this.a.a) || window, b = Je(this.a.a).a, c = Xf(this.g());
    Pf(this.g(), Math.max(b + He(a || window).width / 2 - c.width / 2, 0), 0);
  }
};
function Bh() {
  S.call(this);
}
x(Bh, S);
Bh.prototype.h = null;
Bh.prototype.v = function() {
  delete this.h;
  Bh.l.v.call(this);
};
Bh.prototype.I = function() {
  this.b = this.a.B("DIV", "control-block");
  this.h && (E(this.h, this.c, this), this.h = null);
};
Bh.prototype.c = function(a) {
  var b = this.g();
  b ? (b.childNodes.length && b.appendChild(this.a.a.createTextNode("\u00a0\u00a0|\u00a0\u00a0")), b.appendChild(a)) : (this.h || (this.h = []), this.h.push(a));
};
function Ch(a) {
  S.call(this);
  this.R = a;
}
x(Ch, S);
Ch.prototype.v = function() {
  delete this.R;
  Ch.l.v.call(this);
};
Ch.prototype.I = function() {
  var a = this.a;
  this.b = a.B("FIELDSET", null, a.B("LEGEND", null, this.R), this.lc());
};
Ch.prototype.lc = function() {
  return null;
};
function Dh() {
  S.call(this);
}
x(Dh, S);
Dh.prototype.I = function() {
  this.b = this.a.B("DIV", "server-info");
  Eh(this);
};
function Eh(a, b, c, d) {
  var e = [];
  b && e.push(b);
  c && e.push("v" + c);
  d && e.push("r" + d);
  Ve(a.g(), e.length ? e.join("\u00a0\u00a0|\u00a0\u00a0") : "Server info unavailable");
}
function Fh(a, b, c) {
    this.b = a;
  this.c = b;
  this.j = c;
}
x(Fh, Na);
Fh.prototype.a = function(a, b, c) {
  ah(this.b, this.c, a, b, void 0, c, this.j);
};
function Gh(a, b) {
  this.b = a instanceof G ? a : new G(a, b);
}
x(Gh, Na);
Gh.prototype.a = function(a, b, c, d) {
  ah(Rf(a), 0, a, b, this.b, c, null, d);
};
function Hh() {
}
x(Hh, dh);
aa(Hh);
f = Hh.prototype;
f.mb = function() {
  return "button";
};
f.oa = function(a, b, c) {
  switch(b) {
    case 8:
    case 16:
      xf(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      Hh.l.oa.call(this, a, b, c);
  }
};
f.Ma = function(a) {
  var b = Hh.l.Ma.call(this, a);
  this.ma(b, a.Ja());
  var c = a.F;
  c && this.qc(b, c);
  a.T & 16 && this.oa(b, 16, !!(a.O & 16));
  return b;
};
f.qc = r;
f.Ja = function(a) {
  return a.title;
};
f.ma = function(a, b) {
  a && (b ? a.title = b : a.removeAttribute("title"));
};
f.Na = function() {
  return "goog-button";
};
function V(a, b, c) {
  S.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var d; b;) {
      d = ea(b);
      if (d = Ac[d]) {
        break;
      }
      b = b.l ? b.l.constructor : null;
    }
    b = d ? v(d.Aa) ? d.Aa() : new d : null;
  }
  this.c = b;
  this.Ca = n(a) ? a : null;
}
x(V, S);
f = V.prototype;
f.Ca = null;
f.O = 0;
f.T = 39;
f.Hb = 255;
f.Ea = 0;
f.nc = null;
f.Ub = !0;
function Ih(a, b) {
  a.J && b != a.Ub && Jh(a, b);
  a.Ub = b;
}
f.I = function() {
  var a = this.c.Ma(this);
  this.b = a;
  var b = this.c.mb();
  if (b) {
    var c = a.getAttribute("role") || null;
    b != c && wf(a, b);
  }
  this.c.uc(a, !1);
};
f.Ba = function() {
  return this.g();
};
f.S = function() {
  V.l.S.call(this);
  var a = this.c, b = this.b;
  this.isEnabled() || a.oa(b, 1, !this.isEnabled());
  this.T & 8 && a.oa(b, 8, !!(this.O & 8));
  this.T & 16 && a.oa(b, 16, !!(this.O & 16));
  this.T & 64 && a.oa(b, 64, !!(this.O & 64));
  this.c.sc(this);
  this.T & -2 && (this.Ub && Jh(this, !0), this.T & 32 && (a = this.g())) && (b = this.h || (this.h = new vg), wg(b, a), T(this).w(b, "key", this.Ya).w(a, "focus", this.$c).w(a, "blur", this.wc));
};
function Jh(a, b) {
  var c = T(a), d = a.g();
  b ? (c.w(d, "mouseover", a.Sb).w(d, "mousedown", a.ob).w(d, "mouseup", a.ub).w(d, "mouseout", a.Vb), a.ab != r && c.w(d, "contextmenu", a.ab), H && (K(9) || c.w(d, "dblclick", a.zc), a.A || (a.A = new Kh(a), lb(a, ka(B, a.A))))) : (c.ga(d, "mouseover", a.Sb).ga(d, "mousedown", a.ob).ga(d, "mouseup", a.ub).ga(d, "mouseout", a.Vb), a.ab != r && c.ga(d, "contextmenu", a.ab), H && (K(9) || c.ga(d, "dblclick", a.zc), B(a.A), a.A = null));
}
f.aa = function() {
  V.l.aa.call(this);
  this.h && Cg(this.h);
  this.isEnabled() && this.c.nb(this, !1);
};
f.v = function() {
  V.l.v.call(this);
  this.h && (this.h.M(), delete this.h);
  delete this.c;
  this.A = this.nc = this.Ca = null;
};
function Lh(a) {
  a = a.Ca;
  if (!a) {
    return "";
  }
  if (!p(a)) {
    if (t(a)) {
      a = Gb(a, af).join("");
    } else {
      if (Vc && null !== a && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
      } else {
        var b = [];
        bf(a, b, !0);
        a = b.join("");
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Vc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""));
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}
f.isEnabled = function() {
  return !(this.O & 1);
};
f.fa = function(a) {
  var b = this.o;
  b && "function" == typeof b.isEnabled && !b.isEnabled() || !Mh(this, 1, !a) || (a || (Nh(this, !1), Oh(this, !1)), this.c.nb(this, a), Ph(this, 1, !a, !0));
};
function Oh(a, b) {
  Mh(a, 2, b) && Ph(a, 2, b);
}
function Nh(a, b) {
  Mh(a, 4, b) && Ph(a, 4, b);
}
function Qh(a, b) {
  Mh(a, 8, b) && Ph(a, 8, b);
}
function Rh(a, b) {
  Mh(a, 64, b) && Ph(a, 64, b);
}
function Ph(a, b, c, d) {
  d || 1 != b ? a.T & b && c != !!(a.O & b) && (a.c.Qb(a, b, c), a.O = c ? a.O | b : a.O & ~b) : a.fa(!c);
}
function Sh(a, b, c) {
  if (a.J && a.O & b && !c) {
    throw Error("Component already rendered");
  }
  !c && a.O & b && Ph(a, b, !1);
  a.T = c ? a.T | b : a.T & ~b;
}
function W(a, b) {
  return !!(a.Hb & b) && !!(a.T & b);
}
function Mh(a, b, c) {
  return !!(a.T & b) && !!(a.O & b) != c && (!(a.Ea & b) || a.dispatchEvent(Eg(b, c))) && !a.Ga;
}
f.Sb = function(a) {
  (!a.relatedTarget || !Ue(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && W(this, 2) && Oh(this, !0);
};
f.Vb = function(a) {
  a.relatedTarget && Ue(this.g(), a.relatedTarget) || !this.dispatchEvent("leave") || (W(this, 4) && Nh(this, !1), W(this, 2) && Oh(this, !1));
};
f.ab = r;
f.ob = function(a) {
  this.isEnabled() && (W(this, 2) && Oh(this, !0), qe(a) && (W(this, 4) && Nh(this, !0), this.c && this.c.tc(this) && this.g().focus()));
  qe(a) && a.b();
};
f.ub = function(a) {
  this.isEnabled() && (W(this, 2) && Oh(this, !0), this.O & 4 && this.bb(a) && W(this, 4) && Nh(this, !1));
};
f.zc = function(a) {
  this.isEnabled() && this.bb(a);
};
f.bb = function(a) {
  if (W(this, 16)) {
    var b = !(this.O & 16);
    Mh(this, 16, b) && Ph(this, 16, b);
  }
  W(this, 8) && Qh(this, !0);
  W(this, 64) && Rh(this, !(this.O & 64));
  b = new F("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.m = a.m);
  return this.dispatchEvent(b);
};
f.$c = function() {
  W(this, 32) && Mh(this, 32, !0) && Ph(this, 32, !0);
};
f.wc = function() {
  W(this, 4) && Nh(this, !1);
  W(this, 32) && Mh(this, 32, !1) && Ph(this, 32, !1);
};
f.Ya = function(a) {
  return this.isEnabled() && this.Rb(a) ? (a.b(), a.h(), !0) : !1;
};
f.Rb = function(a) {
  return 13 == a.a && this.bb(a);
};
if (!v(V)) {
  throw Error("Invalid component class " + V);
}
if (!v(dh)) {
  throw Error("Invalid renderer class " + dh);
}
var Th = ea(V);
Ac[Th] = dh;
zc("goog-control", function() {
  return new V(null);
});
function Kh(a) {
  A.call(this);
  this.b = a;
  this.a = !1;
  this.c = new Ff(this);
  lb(this, ka(B, this.c));
  a = this.b.b;
  this.c.w(a, "mousedown", this.o).w(a, "mouseup", this.h).w(a, "click", this.j);
}
x(Kh, A);
var Uh = !H || Kc(9);
Kh.prototype.o = function() {
  this.a = !1;
};
Kh.prototype.h = function() {
  this.a = !0;
};
function Vh(a, b) {
  if (!Uh) {
    return a.button = 0, a.type = b, a;
  }
  var c = document.createEvent("MouseEvents");
  c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
  return c;
}
Kh.prototype.j = function(a) {
  if (this.a) {
    this.a = !1;
  } else {
    var b = a.c, c = b.button, d = b.type, e = Vh(b, "mousedown");
    this.b.ob(new M(e, a.j));
    e = Vh(b, "mouseup");
    this.b.ub(new M(e, a.j));
    Uh || (b.button = c, b.type = d);
  }
};
Kh.prototype.v = function() {
  this.b = null;
  Kh.l.v.call(this);
};
function Wh(a, b) {
  S.call(this, b);
  this.fc = !!a;
  this.A = null;
  this.pa = sb({xd:this.Fb}, this);
}
x(Wh, S);
f = Wh.prototype;
f.Mb = null;
f.ta = !1;
f.$ = null;
f.U = null;
f.ha = null;
f.Jb = !1;
f.pb = function() {
  return "goog-modalpopup";
};
f.jb = function() {
  return this.$;
};
f.I = function() {
  Wh.l.I.call(this);
  var a = this.g(), b = Ta(this.pb()).split(" ");
  bc(a, b);
  Ye(a, !0);
  R(a, !1);
  this.fc && !this.U && (this.U = this.a.B("IFRAME", {frameborder:0, style:"border:0;vertical-align:bottom;", src:Df}), this.U.className = this.pb() + "-bg", R(this.U, !1), $f(this.U, 0));
  this.$ || (this.$ = this.a.B("DIV", this.pb() + "-bg"), R(this.$, !1));
  this.ha || (this.ha = this.a.a.createElement("SPAN"), R(this.ha, !1), Ye(this.ha, !0), this.ha.style.position = "absolute");
};
f.Nc = function() {
  this.Jb = !1;
};
f.S = function() {
  if (this.U) {
    var a = this.g();
    a.parentNode && a.parentNode.insertBefore(this.U, a);
  }
  a = this.g();
  a.parentNode && a.parentNode.insertBefore(this.$, a);
  Wh.l.S.call(this);
  a = this.g();
  a.parentNode && a.parentNode.insertBefore(this.ha, a.nextSibling);
  this.Mb = new ug(this.a.a);
  T(this).w(this.Mb, "focusin", this.Dd);
  Xh(this, !1);
};
f.aa = function() {
  this.ta && this.V(!1);
  B(this.Mb);
  Wh.l.aa.call(this);
  Te(this.U);
  Te(this.$);
  Te(this.ha);
};
f.V = function(a) {
  if (a != this.ta) {
    if (this.F && this.F.stop(), this.R && this.R.stop(), this.C && this.C.stop(), this.H && this.H.stop(), this.J && Xh(this, a), a) {
      if (this.dispatchEvent("beforeshow")) {
        try {
          this.A = this.a.a.activeElement;
        } catch (e) {
        }
        this.Fb();
        Yh(this);
        T(this).w(Le(this.a.a), "resize", this.Fb).w(Le(this.a.a), "orientationchange", this.pa);
        Zh(this, !0);
        this.oc();
        this.ta = !0;
        this.F && this.R ? (nf(this.F, "end", this.rb, !1, this), this.R.play(), this.F.play()) : this.rb();
      }
    } else {
      if (this.dispatchEvent("beforehide")) {
        T(this).ga(Le(this.a.a), "resize", this.Fb).ga(Le(this.a.a), "orientationchange", this.pa);
        this.ta = !1;
        this.C && this.H ? (nf(this.C, "end", this.qb, !1, this), this.H.play(), this.C.play()) : this.qb();
        a: {
          try {
            var b = this.a, c = b.a.body, d = b.a.activeElement || c;
            if (!this.A || this.A == c) {
              this.A = null;
              break a;
            }
            (d == c || b.contains(this.g(), d)) && this.A.focus();
          } catch (e) {
          }
          this.A = null;
        }
      }
    }
  }
};
function Xh(a, b) {
  a.Y || (a.Y = new Rg(a.b, a.a));
  a = a.Y;
  if (b) {
    a.a || (a.a = []);
    b = cf(a.b.a.body);
    for (var c = 0; c < b.length; c++) {
      var d = b[c], e;
      if (e = d != a.c) {
        e = d.getAttribute("aria-hidden"), e = !(null == e || void 0 == e ? 0 : String(e));
      }
      e && (xf(d, "hidden", !0), a.a.push(d));
    }
  } else {
    if (a.a) {
      for (c = 0; c < a.a.length; c++) {
        a.a[c].removeAttribute("aria-hidden");
      }
      a.a = null;
    }
  }
}
function Zh(a, b) {
  a.U && R(a.U, b);
  a.$ && R(a.$, b);
  R(a.g(), b);
  R(a.ha, b);
}
f.rb = function() {
  this.dispatchEvent("show");
};
f.qb = function() {
  Zh(this, !1);
  this.dispatchEvent("hide");
};
f.Fb = function() {
  this.U && R(this.U, !1);
  this.$ && R(this.$, !1);
  var a = this.a.a, b = He(Me(a) || window || window), c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
  this.U && (R(this.U, !0), Wf(this.U, c, a));
  this.$ && (R(this.$, !0), Wf(this.$, c, a));
};
function Yh(a) {
  var b, c = Me(a.a.a) || window;
  if ("fixed" == Of(a.g(), "position")) {
    var d = b = 0;
  } else {
    d = Je(a.a.a), b = d.a, d = d.b;
  }
  var e = Xf(a.g()), c = He(c || window);
  b = Math.max(b + c.width / 2 - e.width / 2, 0);
  d = Math.max(d + c.height / 2 - e.height / 2, 0);
  Pf(a.g(), b, d);
  Pf(a.ha, b, d);
}
f.Dd = function(a) {
  this.Jb ? this.Nc() : a.target == this.ha && tg(this.oc, 0, this);
};
f.oc = function() {
  try {
    H && this.a.a.body.focus(), this.g().focus();
  } catch (a) {
  }
};
f.v = function() {
  B(this.F);
  this.F = null;
  B(this.C);
  this.C = null;
  B(this.R);
  this.R = null;
  B(this.H);
  this.H = null;
  Wh.l.v.call(this);
};
function $h(a, b) {
  this.pa = b || void 0;
  sh.call(this, a);
}
x($h, sh);
$h.prototype.$a = function() {
  if (this.pa) {
    var a = !this.X && "move_offscreen" != this.Sa, b = this.g();
    a && (b.style.visibility = "hidden", R(b, !0));
    this.pa.a(b, 8, this.fb);
    a && R(b, !1);
  }
};
function ai() {
}
x(ai, dh);
aa(ai);
f = ai.prototype;
f.Na = function() {
  return "goog-tab";
};
f.mb = function() {
  return "tab";
};
f.Ma = function(a) {
  var b = ai.l.Ma.call(this, a);
  (a = a.Ja()) && this.ma(b, a);
  return b;
};
f.Ja = function(a) {
  return a.title || "";
};
f.ma = function(a, b) {
  a && (a.title = b || "");
};
function bi(a, b, c) {
  S.call(this, c);
  this.lb = b || Ng.Aa();
  this.wa = a || ci;
}
x(bi, S);
var Qg = "horizontal", ci = "vertical";
f = bi.prototype;
f.Zb = null;
f.Wa = null;
f.lb = null;
f.wa = null;
f.Xa = !0;
f.La = !0;
f.G = -1;
f.P = null;
f.Pa = !1;
f.ka = null;
function di(a) {
  return a.Zb || a.g();
}
f.I = function() {
  this.b = this.a.B("DIV", this.lb.a(this).join(" "));
};
f.Ba = function() {
  return this.g();
};
f.S = function() {
  bi.l.S.call(this);
  Ig(this, function(a) {
    a.J && ei(this, a);
  }, this);
  var a = this.g();
  Pg(this.lb, this);
  fi(this, this.Xa);
  T(this).w(this, "enter", this.gd).w(this, "highlight", this.kd).w(this, "unhighlight", this.td).w(this, "open", this.od).w(this, "close", this.ed).w(a, "mousedown", this.Zc).w(O(a), "mouseup", this.fd).w(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.dd);
  gi(this);
};
function gi(a) {
  var b = T(a), c = di(a);
  b.w(c, "focus", a.rc).w(c, "blur", a.Xc).w(a.Wa || (a.Wa = new vg(di(a))), "key", a.Yc);
}
f.aa = function() {
  hi(this, -1);
  this.P && Rh(this.P, !1);
  this.Pa = !1;
  bi.l.aa.call(this);
};
f.v = function() {
  bi.l.v.call(this);
  this.Wa && (this.Wa.M(), this.Wa = null);
  this.lb = this.P = this.ka = this.Zb = null;
};
f.gd = function() {
  return !0;
};
f.kd = function(a) {
  var b = Mg(this, a.target);
  if (-1 < b && b != this.G) {
    var c = U(this, this.G);
    c && Oh(c, !1);
    this.G = b;
    c = U(this, this.G);
    this.Pa && Nh(c, !0);
    this.P && c != this.P && (c.T & 64 ? Rh(c, !0) : Rh(this.P, !1));
  }
  b = this.g();
  null != a.target.g() && xf(b, "activedescendant", a.target.g().id);
};
f.td = function(a) {
  a.target == U(this, this.G) && (this.G = -1);
  this.g().removeAttribute("aria-activedescendant");
};
f.od = function(a) {
  (a = a.target) && a != this.P && a.o == this && (this.P && Rh(this.P, !1), this.P = a);
};
f.ed = function(a) {
  a.target == this.P && (this.P = null);
  var b = this.g(), c = a.target.g();
  b && a.target.O & 2 && c && (a = "", c && (a = c.id), xf(b, "activedescendant", a));
};
f.Zc = function(a) {
  this.La && (this.Pa = !0);
  var b = di(this);
  b && Ze(b) && $e(b) ? b.focus() : a.b();
};
f.fd = function() {
  this.Pa = !1;
};
f.dd = function(a) {
  a: {
    var b = a.target;
    if (this.ka) {
      for (var c = this.g(); b && b !== c;) {
        var d = b.id;
        if (d in this.ka) {
          b = this.ka[d];
          break a;
        }
        b = b.parentNode;
      }
    }
    b = null;
  }
  if (b) {
    switch(a.type) {
      case "mousedown":
        b.ob(a);
        break;
      case "mouseup":
        b.ub(a);
        break;
      case "mouseover":
        b.Sb(a);
        break;
      case "mouseout":
        b.Vb(a);
        break;
      case "contextmenu":
        b.ab(a);
    }
  }
};
f.rc = function() {
};
f.Xc = function() {
  hi(this, -1);
  this.Pa = !1;
  this.P && Rh(this.P, !1);
};
f.Yc = function(a) {
  return this.isEnabled() && this.Xa && (Kg(this) || this.Zb) && ii(this, a) ? (a.b(), a.h(), !0) : !1;
};
function ii(a, b) {
  var c = U(a, a.G);
  if (c && "function" == typeof c.Ya && c.Ya(b) || a.P && a.P != c && "function" == typeof a.P.Ya && a.P.Ya(b)) {
    return !0;
  }
  if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) {
    return !1;
  }
  switch(b.a) {
    case 27:
      di(a).blur();
      break;
    case 36:
      ji(a);
      break;
    case 35:
      ki(a);
      break;
    case 38:
      if (a.wa == ci) {
        li(a);
      } else {
        return !1;
      }
      break;
    case 37:
      if (a.wa == Qg) {
        Lg(a) ? mi(a) : li(a);
      } else {
        return !1;
      }
      break;
    case 40:
      if (a.wa == ci) {
        mi(a);
      } else {
        return !1;
      }
      break;
    case 39:
      if (a.wa == Qg) {
        Lg(a) ? li(a) : mi(a);
      } else {
        return !1;
      }
      break;
    default:
      return !1;
  }
  return !0;
}
function ei(a, b) {
  var c = b.g(), c = c.id || (c.id = b.N());
  a.ka || (a.ka = {});
  a.ka[c] = b;
}
f.gb = function(a, b, c) {
  a.Ea |= 2;
  a.Ea |= 64;
  Sh(a, 32, !1);
  Ih(a, !1);
  var d = a.o == this ? Mg(this, a) : -1;
  bi.l.gb.call(this, a, b, c);
  a.J && this.J && ei(this, a);
  a = d;
  -1 == a && (a = Kg(this));
  a == this.G ? this.G = Math.min(Kg(this) - 1, b) : a > this.G && b <= this.G ? this.G++ : a < this.G && b > this.G && this.G--;
};
f.removeChild = function(a, b) {
  if (a = p(a) ? Gg(this, a) : a) {
    var c = Mg(this, a);
    -1 != c && (c == this.G ? (Oh(a, !1), this.G = -1) : c < this.G && this.G--);
    var d = a.g();
    d && d.id && this.ka && (c = this.ka, d = d.id, d in c && delete c[d]);
  }
  a = bi.l.removeChild.call(this, a, b);
  Ih(a, !0);
  return a;
};
function fi(a, b) {
  a.Xa = b;
  var c = a.g();
  c && (R(c, b), Og(di(a), a.La && a.Xa));
}
f.isEnabled = function() {
  return this.La;
};
f.fa = function(a) {
  this.La != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.La = !0, Ig(this, function(a) {
    a.Tc ? delete a.Tc : a.fa(!0);
  })) : (Ig(this, function(a) {
    a.isEnabled() ? a.fa(!1) : a.Tc = !0;
  }), this.Pa = this.La = !1), Og(di(this), a && this.Xa));
};
function hi(a, b) {
  (b = U(a, b)) ? Oh(b, !0) : -1 < a.G && Oh(U(a, a.G), !1);
}
function ji(a) {
  ni(a, function(a, c) {
    return (a + 1) % c;
  }, Kg(a) - 1);
}
function ki(a) {
  ni(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, 0);
}
function mi(a) {
  ni(a, function(a, c) {
    return (a + 1) % c;
  }, a.G);
}
function li(a) {
  ni(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, a.G);
}
function ni(a, b, c) {
  c = 0 > c ? Mg(a, a.P) : c;
  var d = Kg(a);
  c = b.call(a, c, d);
  for (var e = 0; e <= d;) {
    var g = U(a, c);
    if (g && g.isEnabled() && g.T & 2) {
      a.dc(c);
      break;
    }
    e++;
    c = b.call(a, c, d);
  }
}
f.dc = function(a) {
  hi(this, a);
};
function X(a, b, c) {
  Wh.call(this, b, c);
  this.m = a || "modal-dialog";
  this.c = Y(Y(new oi, pi, !0), qi, !1, !0);
}
x(X, Wh);
f = X.prototype;
f.Ic = !0;
f.Ib = 0.50;
f.Sc = "";
f.Tb = null;
f.qa = null;
f.Ra = null;
f.Fa = null;
f.Rc = null;
f.na = null;
f.Ta = null;
f.ia = null;
f.pb = function() {
  return this.m;
};
function ri(a, b) {
  a.Sc = b;
  a.Fa && Ve(a.Fa, b);
}
function si(a, b) {
  a.Tb = b;
  a.Ta && oe(a.Ta, b);
}
f.Ba = function() {
  this.g() || Hg(this, void 0);
  return this.Ta;
};
f.jb = function() {
  this.g() || Hg(this, void 0);
  return X.l.jb.call(this);
};
function ti(a, b) {
  var c = Ta(a.m + "-title-draggable").split(" ");
  a.g() && (b ? bc(a.Ra, c) : dc(a.Ra, c));
  b && !a.qa ? (a.qa = new Ug(a.g(), a.Ra), bc(a.Ra, c), P(a.qa, "start", a.Md, !1, a)) : !b && a.qa && (a.qa.M(), a.qa = null);
}
f.I = function() {
  X.l.I.call(this);
  var a = this.g(), b = this.a;
  this.Ra = b.B("DIV", this.m + "-title", this.Fa = b.B("SPAN", {className:this.m + "-title-text", id:this.N()}, this.Sc), this.na = b.B("SPAN", this.m + "-title-close"));
  Re(a, this.Ra, this.Ta = b.B("DIV", this.m + "-content"), this.ia = b.B("DIV", this.m + "-buttons"));
  wf(this.Fa, "heading");
  wf(this.na, "button");
  Ye(this.na, !0);
  xf(this.na, "label", ui);
  this.Rc = this.Fa.id;
  wf(a, "dialog");
  xf(a, "labelledby", this.Rc || "");
  this.Tb && oe(this.Ta, this.Tb);
  R(this.na, !0);
  this.c && (a = this.c, a.sa = this.ia, vi(a));
  R(this.ia, !!this.c);
  this.Ib = this.Ib;
  this.g() && (a = this.jb()) && $f(a, this.Ib);
};
f.S = function() {
  X.l.S.call(this);
  T(this).w(this.g(), "keydown", this.Lc).w(this.g(), "keypress", this.Lc);
  T(this).w(this.ia, "click", this.zd);
  ti(this, !0);
  T(this).w(this.na, "click", this.Hd);
  var a = this.g();
  wf(a, "dialog");
  "" !== this.Fa.id && xf(a, "labelledby", this.Fa.id);
  if (!this.Ic) {
    this.Ic = !1;
    if (this.J) {
      var a = this.a, b = this.jb();
      a.pc(this.U);
      a.pc(b);
    }
    this.ta && Xh(this, !1);
  }
};
f.aa = function() {
  this.ta && this.V(!1);
  ti(this, !1);
  X.l.aa.call(this);
};
f.V = function(a) {
  a != this.ta && (this.J || Hg(this, void 0), X.l.V.call(this, a));
};
f.rb = function() {
  X.l.rb.call(this);
  this.dispatchEvent(wi);
};
f.qb = function() {
  X.l.qb.call(this);
  this.dispatchEvent(xi);
};
f.Md = function() {
  var a = this.a.a, b = He(Me(a) || window || window), c = Math.max(a.body.scrollWidth, b.width), a = Math.max(a.body.scrollHeight, b.height), d = Xf(this.g());
  "fixed" == Of(this.g(), "position") ? this.qa.j = new we(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.qa.j = new we(0, 0, c - d.width, a - d.height);
};
f.Hd = function() {
  yi(this);
};
function yi(a) {
  var b = a.c, c = b && b.Kb;
  c ? (b = b.get(c), a.dispatchEvent(new zi(c, b)) && a.V(!1)) : a.V(!1);
}
f.v = function() {
  this.ia = this.na = null;
  X.l.v.call(this);
};
f.zd = function(a) {
  a: {
    for (a = a.target; a && a != this.ia;) {
      if ("BUTTON" == a.tagName) {
        break a;
      }
      a = a.parentNode;
    }
    a = null;
  }
  if (a && !a.disabled) {
    a = a.name;
    var b = this.c.get(a);
    this.dispatchEvent(new zi(a, b)) && this.V(!1);
  }
};
f.Lc = function(a) {
  var b = !1, c = !1, d = this.c;
  var e = a.target;
  if ("keydown" == a.type) {
    if (27 == a.a) {
      var g = d && d.Kb;
      e = "SELECT" == e.tagName && !e.disabled;
      g && !e ? (c = !0, b = d.get(g), b = this.dispatchEvent(new zi(g, b))) : e || (b = !0);
    } else {
      if (9 == a.a && a.shiftKey && e == this.g()) {
        this.Jb = !0;
        try {
          this.ha.focus();
        } catch (u) {
        }
        tg(this.Nc, 0, this);
      }
    }
  } else {
    if (13 == a.a) {
      if ("BUTTON" == e.tagName && !e.disabled) {
        g = e.name;
      } else {
        if (e == this.na) {
          yi(this);
        } else {
          if (d) {
            var h = d.Lb, k;
            if (k = h) {
              a: {
                k = (d.sa || document).getElementsByTagName("BUTTON");
                for (var m = 0, q; q = k[m]; m++) {
                  if (q.name == h || q.id == h) {
                    k = q;
                    break a;
                  }
                }
                k = null;
              }
            }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !k || k.disabled || e || (g = h);
          }
        }
      }
      g && d && (c = !0, b = this.dispatchEvent(new zi(g, String(d.get(g)))));
    } else {
      e == this.na && 32 == a.a && yi(this);
    }
  }
  if (b || c) {
    a.h(), a.b();
  }
  b && this.V(!1);
};
function zi(a, b) {
  this.type = Ai;
  this.key = a;
  this.caption = b;
}
x(zi, F);
var Ai = "dialogselect", xi = "afterhide", wi = "aftershow";
function oi(a) {
  a || N();
  jd.call(this);
}
x(oi, jd);
f = oi.prototype;
f.Lb = null;
f.sa = null;
f.Kb = null;
f.set = function(a, b, c, d) {
  jd.prototype.set.call(this, a, b);
  c && (this.Lb = a);
  d && (this.Kb = a);
  return this;
};
function Y(a, b, c, d) {
  return a.set(b.key, b.caption, c, d);
}
function vi(a) {
  if (a.sa) {
    oe(a.sa, hd);
    var b = N(a.sa);
    a.forEach(function(a, d) {
      a = b.B("BUTTON", {name:d}, a);
      d == this.Lb && (a.className = "goog-buttonset-default");
      this.sa.appendChild(a);
    }, a);
  }
}
f.g = function() {
  return this.sa;
};
var ui = "Close", pi = {key:"ok", caption:"OK"}, qi = {key:"cancel", caption:"Cancel"}, Bi = {key:"yes", caption:"Yes"}, Ci = {key:"no", caption:"No"}, Di = {key:"save", caption:"Save"}, Ei = {key:"continue", caption:"Continue"};
"undefined" != typeof document && (Y(new oi, pi, !0, !0), Y(Y(new oi, pi, !0), qi, !1, !0), Y(Y(new oi, Bi, !0), Ci, !1, !0), Y(Y(Y(new oi, Bi), Ci, !0), qi, !1, !0), Y(Y(Y(new oi, Ei), Di), qi, !0, !0));
function Fi() {
}
x(Fi, Hh);
aa(Fi);
f = Fi.prototype;
f.mb = function() {
};
f.Ma = function(a) {
  Ih(a, !1);
  a.Hb &= -256;
  Sh(a, 32, !1);
  return a.a.B("BUTTON", {"class":gh(this, a).join(" "), disabled:!a.isEnabled(), title:a.Ja() || "", value:a.F || ""}, Lh(a) || "");
};
f.sc = function(a) {
  T(a).w(a.g(), "click", a.bb);
};
f.uc = r;
f.vc = r;
f.tc = function(a) {
  return a.isEnabled();
};
f.nb = r;
f.Qb = function(a, b, c) {
  Fi.l.Qb.call(this, a, b, c);
  (a = a.g()) && 1 == b && (a.disabled = c);
};
f.qc = function(a, b) {
  a && (a.value = b);
};
f.oa = r;
function Gi(a, b, c) {
  V.call(this, a, b || ai.Aa(), c);
  Sh(this, 8, !0);
  this.Ea |= 9;
}
x(Gi, V);
Gi.prototype.Ja = function() {
  return this.m;
};
Gi.prototype.ma = function(a) {
  this.c.ma(this.g(), a);
  this.Pc(a);
};
Gi.prototype.Pc = function(a) {
  this.m = a;
};
zc("goog-tab", function() {
  return new Gi(null);
});
function Hi(a, b, c) {
  this.b = c || (a ? N(p(a) ? document.getElementById(a) : a) : N());
  $h.call(this, this.b.B("DIV", {style:"position:absolute;display:none;"}));
  this.o = new G(1, 1);
  this.D = new ye;
  this.h = null;
  a && Ii(this, a);
  null != b && Ve(this.g(), b);
}
x(Hi, $h);
var Ji = [];
f = Hi.prototype;
f.L = null;
f.ad = "goog-tooltip";
f.Dc = 0;
function Ii(a, b) {
  var c = b = p(b) ? document.getElementById(b) : b;
  a.D.a.set(ze(c), c);
  P(b, "mouseover", a.yc, !1, a);
  P(b, "mouseout", a.tb, !1, a);
  P(b, "mousemove", a.Oa, !1, a);
  P(b, "focus", a.xc, !1, a);
  P(b, "blur", a.tb, !1, a);
}
f.Ob = function() {
  return this.Dc;
};
f.cc = function(a) {
  var b = this.g();
  b && Te(b);
  Hi.l.cc.call(this, a);
  a ? (b = this.b.a.body, b.insertBefore(a, b.lastChild), B(this.h), this.h = new ug(this.g()), lb(this, ka(B, this.h)), P(this.h, "focusin", this.Ia, void 0, this), P(this.h, "focusout", this.cb, void 0, this)) : (B(this.h), this.h = null);
};
function Ki(a) {
  return a.j ? a.X ? 4 : 1 : a.K ? 3 : a.X ? 2 : 0;
}
f.yb = function(a) {
  if (!this.X) {
    return !1;
  }
  var b = Vf(this.g()), c = Xf(this.g());
  return b.a <= a.a && a.a <= b.a + c.width && b.b <= a.b && a.b <= b.b + c.height;
};
f.ac = function() {
  if (!sh.prototype.ac.call(this)) {
    return !1;
  }
  if (this.a) {
    for (var a, b = 0; a = Ji[b]; b++) {
      Ue(a.g(), this.a) || a.ua(!1);
    }
  }
  Jb(Ji, this) || Ji.push(this);
  a = this.g();
  a.className = this.ad;
  this.Ia();
  P(a, "mouseover", this.Wb, !1, this);
  P(a, "mouseout", this.Bc, !1, this);
  Li(this);
  return !0;
};
f.Za = function() {
  Kb(Ji, this);
  for (var a = this.g(), b, c = 0; b = Ji[c]; c++) {
    b.a && Ue(a, b.a) && b.ua(!1);
  }
  this.Ha && this.Ha.cb();
  of(a, "mouseover", this.Wb, !1, this);
  of(a, "mouseout", this.Bc, !1, this);
  this.a = void 0;
  0 == Ki(this) && (this.ja = !1);
  sh.prototype.Za.call(this);
};
f.Hc = function(a, b) {
  this.a == a && this.D.contains(this.a) && (this.ja || !this.fc ? (this.ua(!1), this.X || (this.a = a, this.pa = b || new Mi(xc(this.o)), this.X && this.$a(), this.ua(!0))) : this.a = void 0);
  this.j = void 0;
};
f.Gc = function(a) {
  this.K = void 0;
  if (a == this.a) {
    a = this.b;
    a: {
      var b = a.a;
      try {
        var c = b && b.activeElement;
        break a;
      } catch (d) {
      }
      c = null;
    }
    c = c && this.g() && a.contains(this.g(), c);
    this.L && (this.L == this.g() || this.D.contains(this.L)) || c || this.m && this.m.L || this.ua(!1);
  }
};
function Ni(a, b) {
  var c = Je(a.b.a);
  a.o.a = b.clientX + c.a;
  a.o.b = b.clientY + c.b;
}
f.yc = function(a) {
  var b = Oi(this, a.target);
  this.L = b;
  this.Ia();
  b != this.a && (this.a = b, this.j || (this.j = tg(w(this.Hc, this, b, void 0), 500)), Pi(this), Ni(this, a));
};
function Oi(a, b) {
  try {
    for (; b && !a.D.contains(b);) {
      b = b.parentNode;
    }
    return b;
  } catch (c) {
    return null;
  }
}
f.Oa = function(a) {
  Ni(this, a);
  this.ja = !0;
};
f.xc = function(a) {
  this.L = a = Oi(this, a.target);
  this.ja = !0;
  if (this.a != a) {
    this.a = a;
    var b = new Qi(this.L);
    this.Ia();
    this.j || (this.j = tg(w(this.Hc, this, a, b), 500));
    Pi(this);
  }
};
function Pi(a) {
  if (a.a) {
    for (var b, c = 0; b = Ji[c]; c++) {
      Ue(b.g(), a.a) && (b.m = a, a.Ha = b);
    }
  }
}
f.tb = function(a) {
  var b = Oi(this, a.target), c = Oi(this, a.relatedTarget);
  b != c && (b == this.L && (this.L = null), Li(this), this.ja = !1, !this.X || a.relatedTarget && Ue(this.g(), a.relatedTarget) ? this.a = void 0 : this.cb());
};
f.Wb = function() {
  var a = this.g();
  this.L != a && (this.Ia(), this.L = a);
};
f.Bc = function(a) {
  var b = this.g();
  this.L != b || a.relatedTarget && Ue(b, a.relatedTarget) || (this.L = null, this.cb());
};
function Li(a) {
  a.j && (l.clearTimeout(a.j), a.j = void 0);
}
f.cb = function() {
  2 == Ki(this) && (this.K = tg(w(this.Gc, this, this.a), this.Ob()));
};
f.Ia = function() {
  this.K && (l.clearTimeout(this.K), this.K = void 0);
};
f.v = function() {
  this.ua(!1);
  Li(this);
  for (var a, b = this.D.ba(), c = 0; a = b[c]; c++) {
    of(a, "mouseover", this.yc, !1, this), of(a, "mouseout", this.tb, !1, this), of(a, "mousemove", this.Oa, !1, this), of(a, "focus", this.xc, !1, this), of(a, "blur", this.tb, !1, this);
  }
  b = this.D.a;
  b.b = {};
  b.a.length = 0;
  b.c = 0;
  this.g() && Te(this.g());
  this.L = null;
  delete this.b;
  Hi.l.v.call(this);
};
function Mi(a, b) {
  Gh.call(this, a, b);
}
x(Mi, Gh);
Mi.prototype.a = function(a, b, c) {
  b = Rf(a);
  b = Uf(b);
  c = c ? new L(c.top + 10, c.right, c.bottom, c.left + 10) : new L(10, 0, 0, 10);
  ch(this.b, a, 8, c, b, 9) & 496 && ch(this.b, a, 8, c, b, 5);
};
function Qi(a) {
  Fh.call(this, a, 5);
}
x(Qi, Fh);
Qi.prototype.a = function(a, b, c) {
  var d = new G(10, 0);
  ah(this.b, this.c, a, b, d, c, 9) & 496 && ah(this.b, 4, a, 1, d, c, 5);
};
function Ri(a, b, c) {
  Hi.call(this, a, b, c);
}
x(Ri, Hi);
f = Ri.prototype;
f.mc = !1;
f.eb = !1;
f.sb = function() {
  Ri.l.sb.call(this);
  this.H = xe(Zf(this.g()));
  this.a && (this.ya = xe(Zf(this.a)));
  this.eb = this.mc;
  P(this.b.a, "mousemove", this.Oa, !1, this);
};
f.Za = function() {
  of(this.b.a, "mousemove", this.Oa, !1, this);
  this.ya = this.H = null;
  this.eb = !1;
  Ri.l.Za.call(this);
};
f.yb = function(a) {
  if (this.C) {
    var b = Vf(this.g()), c = Xf(this.g());
    return b.a - this.C.left <= a.a && a.a <= b.a + c.width + this.C.right && b.b - this.C.top <= a.b && a.b <= b.b + c.height + this.C.bottom;
  }
  return Ri.l.yb.call(this, a);
};
function Si(a, b) {
  if (a.ya && a.ya.contains(b) || a.yb(b)) {
    return !0;
  }
  a = a.m;
  return !!a && a.yb(b);
}
f.Gc = function(a) {
  this.K = void 0;
  a != this.a || Si(this, this.o) || this.L || this.m && this.m.L || I && !this.o.a && !this.o.b || this.ua(!1);
};
f.Oa = function(a) {
  var b = this.X;
  if (this.H) {
    var c = Je(this.b.a), c = new G(a.clientX + c.a, a.clientY + c.b);
    Si(this, c) ? b = !1 : this.eb && (b = id(this.H, c) >= id(this.H, this.o));
  }
  if (b) {
    if (this.cb(), this.L = null, b = this.m) {
      b.L = null;
    }
  } else {
    3 == Ki(this) && this.Ia();
  }
  Ri.l.Oa.call(this, a);
};
f.Wb = function() {
  this.L != this.g() && (this.eb = !1, this.L = this.g());
};
f.Ob = function() {
  return this.eb ? 100 : Ri.l.Ob.call(this);
};
function Ti(a, b, c) {
  V.call(this, a, b || Fi.Aa(), c);
}
x(Ti, V);
f = Ti.prototype;
f.Ja = function() {
  return this.C;
};
f.ma = function(a) {
  this.C = a;
  this.c.ma(this.g(), a);
};
f.Pc = function(a) {
  this.C = a;
};
f.v = function() {
  Ti.l.v.call(this);
  delete this.F;
  delete this.C;
};
f.S = function() {
  Ti.l.S.call(this);
  if (this.T & 32) {
    var a = this.g();
    a && T(this).w(a, "keyup", this.Rb);
  }
};
f.Rb = function(a) {
  return 13 == a.a && "key" == a.type || 32 == a.a && "keyup" == a.type ? this.bb(a) : 32 == a.a;
};
zc("goog-button", function() {
  return new Ti(null);
});
function Ui(a, b, c) {
  a = a || wh;
  if (this.g()) {
    throw Error("Component already rendered");
  }
  this.wa = a == yh || a == zh ? ci : Qg;
  this.c = a;
  bi.call(this, this.wa, b || vh.Aa(), c);
  Vi(this);
}
x(Ui, bi);
var wh = "top", xh = "bottom", yh = "start", zh = "end";
f = Ui.prototype;
f.W = null;
f.S = function() {
  Ui.l.S.call(this);
  Vi(this);
};
f.v = function() {
  Ui.l.v.call(this);
  this.W = null;
};
f.removeChild = function(a, b) {
  Wi(this, a);
  return Ui.l.removeChild.call(this, a, b);
};
f.dc = function(a) {
  Ui.l.dc.call(this, a);
  Xi(this, U(this, a));
};
function Xi(a, b) {
  b ? Qh(b, !0) : a.W && Qh(a.W, !1);
}
function Wi(a, b) {
  if (b && b == a.W) {
    for (var c = Mg(a, b), d = c - 1; b = U(a, d); d--) {
      if (b.isEnabled()) {
        Xi(a, b);
        return;
      }
    }
    for (c += 1; b = U(a, c); c++) {
      if (b.isEnabled()) {
        Xi(a, b);
        return;
      }
    }
    Xi(a, null);
  }
}
f.rd = function(a) {
  this.W && this.W != a.target && Qh(this.W, !1);
  this.W = a.target;
};
f.sd = function(a) {
  a.target == this.W && (this.W = null);
};
f.pd = function(a) {
  Wi(this, a.target);
};
f.qd = function(a) {
  Wi(this, a.target);
};
f.rc = function() {
  U(this, this.G) || hi(this, Mg(this, this.W || U(this, 0)));
};
function Vi(a) {
  T(a).w(a, "select", a.rd).w(a, "unselect", a.sd).w(a, "disable", a.pd).w(a, "hide", a.qd);
}
zc("goog-tab-bar", function() {
  return new Ui;
});
function Yi(a) {
  X.call(this, void 0, !0);
  ri(this, a);
  P(this, Ai, this.Ha, !1, this);
}
x(Yi, X);
Yi.prototype.I = function() {
  Yi.l.I.call(this);
  var a = this.Ba(), b = this.kc();
  a.appendChild(b);
};
Yi.prototype.V = function(a) {
  Yi.l.V.call(this, a);
  a && this.dispatchEvent("show");
};
Yi.prototype.Ha = function(a) {
  "ok" == a.key && this.Cc() && this.dispatchEvent("action");
};
function Zi() {
  X.call(this, void 0, !0);
  this.c = Y(new oi, pi, !0, !0);
  if (this.ia) {
    if (this.c) {
      var a = this.c;
      a.sa = this.ia;
      vi(a);
    } else {
      oe(this.ia, hd);
    }
    R(this.ia, !!this.c);
  }
  $i(this, aj);
}
x(Zi, X);
var aj = 0;
Zi.prototype.h = aj;
Zi.prototype.v = function() {
  delete this.h;
  Zi.l.v.call(this);
};
function $i(a, b) {
  a.h = b;
  switch(b) {
    case 1:
      ri(a, "Screenshot");
      break;
    default:
      ri(a, "Taking Screenshot..."), si(a, fd(""));
  }
}
function bj(a) {
    Yi.call(this, "Create a New Session");
  this.h = Gb(a, function(a) {
    return p(a) ? {browserName:a} : a;
  });
  P(this, "show", this.Jd, !1, this);
}
x(bj, Yi);
f = bj.prototype;
f.za = null;
f.v = function() {
  delete this.h;
  delete this.za;
  bj.l.v.call(this);
};
f.kc = function() {
  function a(a) {
    var c = a.browserName;
    (a = a.version) && (c += " " + a);
    return b.B("OPTION", null, c);
  }
  var b = this.a;
  this.za = b.B("SELECT", null, a(""));
  E(this.h, function(b) {
    b = a(b);
    this.za.appendChild(b);
  }, this);
  return b.B("LABEL", null, "Browser:\u00a0", this.za);
};
f.Pb = function() {
  return this.h[this.za.selectedIndex - 1];
};
f.Cc = function() {
  return !!this.za.selectedIndex;
};
f.Jd = function() {
  this.za.selectedIndex = 0;
};
function cj() {
  Hi.call(this, void 0, void 0, void 0);
  var a = this.b;
  this.Y = a.a.createElement("PRE");
  this.R = a.B("BUTTON", null, "Close");
  P(this.R, "click", w(this.ua, this, !1));
  a = a.B("DIV", null, this.Y, a.a.createElement("HR"), a.B("DIV", {style:"text-align: center;"}, this.R));
  this.g().appendChild(a);
}
x(cj, Ri);
cj.prototype.v = function() {
  qf(this.R);
  delete this.R;
  delete this.Y;
  cj.l.v.call(this);
};
function dj() {
  Yi.call(this, "Open WebDriverJS Script");
  P(this, "show", this.Kd, !1, this);
  this.h = new lh("Script URL");
  Jg(this, this.h);
}
x(dj, Yi);
f = dj.prototype;
f.v = function() {
  delete this.h;
  dj.l.v.call(this);
};
f.kc = function() {
  var a = Ne("A", {href:"https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs", target:"_blank"}, "WebDriverJS");
  this.h.I();
  ac(this.h.g(), "url-input");
  var b = this.a;
  return b.B("DIV", null, b.B("P", null, "Open a page that has the ", a, " client. The page will be opened with the query parameters required to communicate with the server."), this.h.g());
};
f.Kd = function() {
  rh(this.h);
  this.h.g().focus();
  this.h.g().blur();
};
f.Pb = function() {
  var a = this.h;
  return null != a.ra ? a.ra : qh(a) ? a.g().value : "";
};
f.Cc = function() {
  return qh(this.h);
};
function ej() {
  S.call(this);
  this.c = new Bh;
  Jg(this, this.c);
  this.A = new X(void 0, !0);
  ri(this.A, "Delete session?");
  si(this.A, fd("Are you sure you want to delete this session?"));
  P(this.A, Ai, this.pa, !1, this);
  this.C = new Ti("Delete Session");
  Jg(this, this.C);
  P(this.C, "action", w(this.A.V, this.A, !0));
  this.h = new Ti("Take Screenshot");
  Jg(this, this.h);
  P(this.h, "action", this.Ha, !1, this);
  this.m = new cj;
  this.m.C = new L(5, 5, 5, 5);
  this.m.mc = !0;
  var a = this.m, b = new L(10, 0, 0, 0);
  null == b || b instanceof L ? a.fb = b : a.fb = new L(b, void 0, void 0, void 0);
  a.X && a.$a();
  this.m.Dc = 250;
}
x(ej, S);
ej.prototype.v = function() {
  this.m.M();
  this.A.M();
  delete this.c;
  delete this.F;
  delete this.H;
  delete this.R;
  delete this.A;
  delete this.m;
  delete this.h;
  delete this.C;
  delete this.Y;
  ej.l.v.call(this);
};
ej.prototype.I = function() {
  this.h.I();
  this.C.I();
  this.c.I();
  var a = this.a;
  this.F = a.B("DIV", "goog-tab-content empty-view", "No Sessions");
  this.R = a.a.createElement("SPAN");
  this.Y = a.B("DIV", "todo", "\u00a0");
  this.Y.disabled = !0;
  this.c.c(this.R);
  var b;
  this.c.c(b = a.B("SPAN", "session-capabilities", "Capabilities"));
  this.c.c(this.h.g());
  this.c.c(this.C.g());
  this.H = a.B("DIV", "goog-tab-content", this.c.g(), this.Y);
  this.b = a.B("DIV", null, this.F, this.H, a.B("DIV", "goog-tab-bar-clear"));
  fj(this, null);
  Ii(this.m, b);
};
function fj(a, b) {
  var c = !!b;
  R(a.F, !c);
  R(a.H, c);
  if (b) {
    Ve(a.R, b.N());
    for (var c = a.m.Y, d = se(b.a || {}), e = "", g = 0; g < d.length; g++) {
      var h = d[g], e = e + (h instanceof cd ? ed(h) : h);
    }
    c.innerHTML = e;
    b.a.get("takesScreenshot") ? (a.h.fa(!0), a.h.ma("")) : (a.h.fa(!1), a.h.ma("Screenshots not supported"));
  }
}
ej.prototype.pa = function(a) {
  "ok" == a.key && this.dispatchEvent("delete");
};
ej.prototype.Ha = function() {
  this.dispatchEvent("screenshot");
};
function gj() {
  Ti.call(this, "Load Script");
  this.m = new dj;
  P(this.m, "action", this.H, !1, this);
  P(this, "action", w(this.m.V, this.m, !0));
}
x(gj, Ti);
gj.prototype.v = function() {
  this.m.M();
  delete this.m;
  gj.l.v.call(this);
};
gj.prototype.H = function() {
  this.dispatchEvent(new tc("loadscript", this, this.m.Pb()));
};
function hj(a) {
  Ch.call(this, "Sessions");
  this.c = new Ui(yh, null);
  this.m = new ej;
  this.A = new bj(a);
  this.F = this.a.B("BUTTON", null, "Create Session");
  this.H = this.a.B("BUTTON", null, "Refresh Sessions");
  this.C = new Bh;
  this.h = [];
  this.Y = setInterval(w(this.Nd, this), 300);
  Jg(this, this.c);
  Jg(this, this.m);
  Jg(this, this.C);
  this.fa(!1);
  this.C.c(this.F);
  this.C.c(this.H);
  P(this.F, "click", w(this.A.V, this.A, !0));
  P(this.H, "click", w(this.dispatchEvent, this, "refresh"));
  P(this.c, "select", this.Gd, !1, this);
  P(this.A, "action", this.Ad, !1, this);
}
x(hj, Ch);
f = hj.prototype;
f.v = function() {
  qf(this.F);
  qf(this.H);
  clearInterval(this.Y);
  this.A.M();
  delete this.A;
  delete this.c;
  delete this.m;
  delete this.C;
  delete this.h;
  delete this.Y;
  hj.l.v.call(this);
};
f.lc = function() {
  this.c.I();
  this.m.I();
  this.C.I();
  return this.a.B("DIV", "session-container", this.C.g(), this.c.g(), this.m.g());
};
f.fa = function(a) {
  a ? (this.F.removeAttribute("disabled"), this.H.removeAttribute("disabled")) : (this.F.setAttribute("disabled", "disabled"), this.H.setAttribute("disabled", "disabled"));
};
function ij(a) {
  return (a = a.c.W) ? a.Da : null;
}
f.Nd = function() {
  if (this.h.length) {
    var a = this.h[0].Ca, a = 5 === a.length ? "." : a + ".";
    E(this.h, function(b) {
      var c = a;
      kh(b.g(), c);
      b.Ca = c;
    });
  }
};
function jj(a) {
  var b = Xf(a.c.g());
  a = a.m;
  b = b.height + 20;
  Kf(a.F, "height", b + "px");
  Kf(a.H, "height", b + "px");
}
f.gc = function(a) {
  a = new kj(a);
  var b = this.h.shift(), c = Mg(this.c, b);
  0 > c ? Jg(this.c, a, !0) : (this.c.gb(a, c, !0), this.c.removeChild(b, !0));
  jj(this);
  Xi(this.c, a);
};
function lj(a, b) {
  var c = new jd;
  E(b, function(a) {
    c.set(a.N(), a);
  });
  var d = a.c, e = d.W;
  b = [];
  for (var g = Kg(d) - a.h.length, h = 0; h < g; ++h) {
    b.push(U(d, h));
  }
  E(b, function(a) {
    var b = a.Da.N(), g = c.get(b);
    g ? (ld(c, b), a.Da = g) : (d.removeChild(a, !0), e === a && (e = null));
  }, a);
  E(a.h, function(a) {
    d.removeChild(a, !0);
  });
  a.h = [];
  E(c.ba(), a.gc, a);
  e ? (fj(a.m, e.Da), Xi(d, e)) : Kg(d) ? Xi(d, U(d, 0)) : fj(a.m, null);
}
f.Ad = function() {
  var a = ".";
  this.h.length && (a = this.h[0].Ca);
  a = new Gi(a, null, this.a);
  a.fa(!1);
  this.h.push(a);
  Jg(this.c, a, !0);
  jj(this);
  this.dispatchEvent(new tc("create", this, this.A.Pb()));
};
f.Gd = function() {
  var a = this.c.W;
  fj(this.m, a ? a.Da : null);
};
function kj(a) {
  var b = a.a.get("browserName") || "unknown browser", b = b.toLowerCase().replace(/(^|\b)[a-z]/g, function(a) {
    return a.toUpperCase();
  });
  Gi.call(this, b);
  this.Da = a;
}
x(kj, Gi);
kj.prototype.v = function() {
  delete this.Da;
  kj.l.v.call(this);
};
function mj(a, b) {
  A.call(this);
  this.b = me("remote.ui.Client");
  this.h = new yf;
  zf(this.h, !0);
  this.K = a;
  this.m = b;
  this.c = new Ah;
  this.D = new Dh;
  this.a = new hj(nj);
  this.j = new Zi;
  this.o = new gj;
  P(this.a, "create", this.Bd, !1, this);
  P(this.a, "delete", this.Cd, !1, this);
  P(this.a, "refresh", this.Mc, !1, this);
  P(this.a, "screenshot", this.Id, !1, this);
  P(this.o, "loadscript", this.Ed, !1, this);
}
x(mj, A);
var nj = "android;chrome;firefox;internet explorer;iphone;opera".split(";");
f = mj.prototype;
f.v = function() {
  this.c.M();
  this.a.M();
  this.j.M();
  this.o.M();
  zf(this.h, !1);
  delete this.b;
  delete this.m;
  delete this.h;
  delete this.a;
  delete this.c;
  delete this.j;
  delete this.o;
  mj.l.v.call(this);
};
function oj(a) {
  Hg(a.c, void 0);
  a.c.Db(!1);
  Hg(a.a, void 0);
  Hg(a.D, void 0);
  Hg(a.o, void 0);
  a.a.m.c.c(a.o.g());
  pj(a).then(w(function() {
    this.a.fa(!0);
    this.Mc();
  }, a));
}
function qj(a, b) {
  a.c.Db(!1);
  return kg(a.m, b).then(ib);
}
function rj(a, b, c) {
  var d = a.b;
  d && d.log(ce, b + "\n" + c, void 0);
  c = a.c;
  c.a.Wc(c.g(), b);
  c.Eb();
  a.c.Db(!0);
}
function pj(a) {
  vf(a.b, "Retrieving server status...");
  return qj(a, new gb("getStatus")).then(w(function(a) {
    var b = a.value || {};
    (a = b.os) && a.name && (a = a.name + (a.version ? " " + a.version : ""));
    b = b.build;
    Eh(this.D, a, b && b.version, b && b.revision);
  }, a));
}
f.Mc = function() {
  vf(this.b, "Refreshing sessions...");
  var a = this;
  xd(qj(this, new gb("getSessions")).then(function(b) {
    b = b.value;
    b = Gb(b, function(a) {
      return new Sg(a.id, a.capabilities);
    });
    lj(a.a, b);
  }), function(b) {
    rj(a, "Unable to refresh session list.", b);
  });
};
f.Bd = function(a) {
  vf(this.b, "Creating new session for " + a.data.browserName);
  a = hb(new gb("newSession"), "desiredCapabilities", a.data);
  var b = this;
  xd(qj(this, a).then(function(a) {
    a = new Sg(a.sessionId, a.value);
    b.a.gc(a);
  }), function(a) {
    rj(b, "Unable to create new session.", a);
    a = b.a;
    var c = a.h.shift();
    c && (a.c.removeChild(c, !0), jj(a));
  });
};
f.Cd = function() {
  var a = ij(this.a);
  if (a) {
    vf(this.b, "Deleting session: " + a.N());
    var b = hb(new gb("quit"), "sessionId", a.N()), c = this;
    xd(qj(this, b).then(function() {
      for (var b = c.a, e = b.c.W, g, h = Kg(b.c), k = 0; k < h; ++k) {
        var m = U(b.c, k);
        if (m.Da.N() == a.N()) {
          g = m;
          break;
        }
      }
      g && (b.c.removeChild(g, !0), g.M(), e == g && Kg(b.c) ? (b = b.c, Xi(b, U(b, 0))) : fj(b.m, null));
    }), function(a) {
      rj(c, "Unable to delete session.", a);
    });
  } else {
    uf(this.b, "Cannot delete session; no session selected!");
  }
};
f.Ed = function(a) {
  var b = ij(this.a);
  if (b) {
    a = new Hd(a.data);
    Wd(a.b, "wdsid", b.N());
    Wd(a.b, "wdurl", this.K);
    var c = hb(hb(new gb("get"), "sessionId", b.N()), "url", a.toString());
    vf(this.b, "In session(" + b.N() + "), loading " + a);
    xd(qj(this, c), w(function(a) {
      rj(this, "Unable to load URL", a);
    }, this));
  } else {
    uf(this.b, "Cannot load url: " + a.data + "; no session selected!");
  }
};
f.Id = function() {
  var a = ij(this.a);
  if (a) {
    vf(this.b, "Taking screenshot: " + a.N());
    a = hb(new gb("screenshot"), "sessionId", a.N());
    $i(this.j, aj);
    this.j.V(!0);
    var b = this;
    xd(qj(this, a).then(function(a) {
      var c = b.j;
      a = a.value;
      if (c.ta) {
        $i(c, 1);
        a = "data:image/png;base64," + a;
        var e = c.a;
        a = e.B("A", {href:a, target:"_blank"}, e.B("IMG", {src:a}));
        si(c, fd(""));
        c.Ba().appendChild(a);
        Yh(c);
      }
    }), function(a) {
      b.j.V(!1);
      rj(b, "Unable to take screenshot.", a);
    });
  } else {
    uf(this.b, "Cannot take screenshot; no session selected!");
  }
};
function sj() {
  var a = window.location, a = [a.protocol, "//", a.host, a.pathname.replace(/\/static\/resource(?:\/[^\/]*)?$/, "")].join(""), b = new jg(new Tg(a));
  oj(new mj(a, b));
}
var tj = ["init"], uj = l;
tj[0] in uj || !uj.execScript || uj.execScript("var " + tj[0]);
for (var vj; tj.length && (vj = tj.shift());) {
  !tj.length && n(sj) ? uj[vj] = sj : uj[vj] && uj[vj] !== Object.prototype[vj] ? uj = uj[vj] : uj = uj[vj] = {};
}


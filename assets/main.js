//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, ee = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function O(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function te(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var k = /\/+/g;
	function ne(e, t) {
		return typeof e == "object" && e && e.key != null ? te("" + e.key) : t.toString(36);
	}
	function re(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function A(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, A(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + ne(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(k, "$&/") + "/"), A(o, r, i, "", function(e) {
			return e;
		})) : o != null && (O(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(k, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + ne(a, u), c += A(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + ne(a, u++), c += A(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return A(re(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function ie(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return A(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ae(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var oe = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function se(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, oe);
		} catch (e) {
			oe(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function ce(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else se(ce.bind(null, e));
	}
	var le = {
		map: ie,
		forEach: function(e, t, n) {
			ie(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return ie(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return ie(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = le, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = ce, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !ee.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) ee.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = O, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ae
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = se, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ c(u(), 1), f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdEAAACgCAYAAABTylZLAAAToklEQVR4Ae3d+5XbxtnH8V/e8/5vpQJPKrBTgccVRK5g4QosV7B0BVIqWKQCKxUQrkBKBQtXILuCzT4HRJaiSOLBfYb4fs7BoURiQQxuz9wpAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApOEv2o7wvLw6ej2nPnqtBQD5sufct89LJczmVoNoeF7i8/KdmovI/v9K/X1UE0x/O/y70vQeNL8/npc/D6/14fXj4XVJ756XrzS/3w+vtV7S276uLT4vd8qf3ROl+onabtqXFNUc50LNff53pelezbN5jP+oea6s5paCqAXJn9RcQPHwnj00KzUHuj7zN+F5+frw+q26A227vX8/L+81zUP5UeMvpKHaYGoPhUrz51g/qDnOa2nTe5zmpQPr6+flV+XP7oHX/f7kZtJePS/fKz1RTWCKJ+/bvlZKj10Lfa+hU/Yc/kEYJT4v++fl6bB8el52GhaY7AH/Rs3D/smxPOjLC3aInfP72iXqcuk6HNIRD2mxXNreuV07dlNc2Ne8OXyPN63FIU3hzLba6vmoZp9t27b/3vNny/7oO5YS1GSe+uzjlN99fH2U6ne82uWDhgnqf36mEjRN2h+Vlqjr9/iUx3BqhfrdC8fPqiiMEtQ8MI8PaqHpBDU3mfemKjTOG/kvoKD+LOC0JYGl0nRJlD+tUcMENfu/d36PXT8PWi6Y2vl4lG/flngIBvU7Xo8aztLuDV63lvap7eTb5yHNWUuxjM1TzyUIo1i17XFpxkpbc10kQf1urjGlOO/3BI0TtGwG4RxvWqPGC/Kn15Z7LSPKtz97LSuo+3h90jhR+ab9Semw557nOO6Utp389+eDMJhdMHYA17g4vCXFMSfY+x1B0wjyl0wfNG3u77Xze6OmYzneR+f32npB8/Psz17rKHR9/8bKOe0plezsGHUdx7GZnrlF+YPomv0qsnauCminZXkewu81nLdaI2haO+f3Pmq6C9ibg46a3jvnd9uDZ+4btnTsx17rCbp8zQeN4zkPa6f9UrVzUDqi1ruXpuTpK5F6ZiBppxfzWt2ag64H0jE3vTewBE3PgoW3w8+dpvHo+K6oeezkS+vcgdRT+7DXuoLOn6uxxyWHtF9qv41Kh/e5sfax7OJpJ089Dcl6q88PpN3Qa1anBF0OAGNPsiewBM2jTyCNGs9z00TNZydfWue83grH9++1vqAvr82ocTxV+qmmfc4e7EM8OZeUOxiV6t7/ByXm/5S+Qk2O9dgvWnfgfK1m7NWa+zCHj/KPubK21KBxaq1rJ9/4uaD5OhvVykP9vPx48l7QOLncP7W+THtKwahPjcAbpctzPfyuxKQeRIO+fHjVSmO2kFrnA07Q+O2uqXpefnasZw+RsQPn/9T67OHouXnt4TPHgzOnjFj1vPzz6P9jj0etfFT6PO1B6WiD6EfHuj8pXVkWSlIPohZAw8l7ldJRyRdwcmPtzZVjPbt5d8pbrc8fjtfMkYvP7cGx08s+p1w1OIed0kz73eH1R8e67XjxXCV3v6QcRIPOj0/8TWnxBhyvVKorvJkDy9nm/jC1c+i5OVPOxS/FjlOb6fha23Kc9q+UhqCmbbqUf37vVK/j2rEOQbSHeOH9Wuk5zgHeSu7cbsj3jvUsvUNLaKncEO2cul3aaQa3zpvpuEVt2v+qNLTNXf86vP7i+JsoxlpOJuUgenfh/VrpqfWSQ72lKi5vNeedhknpQfwv53pROC6RbY2l3QJVKuMVo5rnT3X4v716MoSFMIlUg6gFoqi87HR7ufNK/t6rUXnzlLpNEMxOvja4W2Sl0RTSXqi5Hk8zgP92/K1lfLfWpj2LVINojlUNt5o797ZBR+XNzl/tWG9r7YBIV1sDVJ6876lutwBaCKOlGkSD8mQXrwXSW8rhlc71vlP+PNVgQAqCmoyrlTrrk88sgHqaJ/4hjJZjEE25lGoX7xvdVrVuLV96bqGjwp8TrQPMre1QVF743NM8EUUb/2gpt4leEoWlVY51ttJzdau9UpGWqCaDeylYVvLdt6+FUXIMokN7gmK45KbaWhFVvlhbofMdik7RwWgBqQbRa7n9HHvu5s4bOIJuXy1gXZc6FJ2yz+lgNLMcg6ixmfzJPS1nK1WYXT1vvZMyAHMJagoRlbozdHQwWkCqQbTu+Dxovl/VwJe2EkS7MmbesaTAXE5nKOpCB6OZ5RpEzRul/bM+W1QrX0HdPYw9bUzAnKL6/ZJVpbzn001eqkHUW2VmP9ZNIE1HrXzFjs9rURLFuqwnbVD/H7zwTAITRRPZICm3iVbOdS2QUrW7vtzbCrt6fXsm9gbm1F6jfa/FSr4ORhRIBkh5Avo+VWc7NT8QHYQ5BMc6OQ+DCbpeEi2Vxg/Br8GquIO2KaW0BzUl0Ur9a3y8U5JSpTtAykG0VL8OLXaB7UV37TkExzqV8nWtJqPWdkuh4Xn5oG3eU1YySyntxeHV26HoVOlYh+GDA6QcRNufHOojqBn+8iguhil941inUp4s911c+fwHbXdsaNR2pTaTj1Xl1hpeI1LLd4/SNNZTykHUvNOwh3NQUyq1JQpjhY7Pa+XZJhrUNAVcYj93tdVxoUHbfaAGpZX2oR2KTnl/sJsORj2kHkSNPchqDRPVBNKtVklNIah76EeO1Z1BzbVx7oFhtSBWAi21XdZhL2ibLIAGpWNoh6JTlXxNZHQw6iGHIFqreaCNGfBvQaCt5i1EB6Q+omOdSnmJajJW4cxnVvL8u7Y7nMUyFXavpFaduQRLu2UeCqUjaHiHonPoYDSxHIKosQfb9xp/EQW9BFN77SphoXvoR6l82gzbAHGuBNq2wVsArbU97RCHLdbaHKc9tVJYPLwO7VB06p1jHToY3bCgJgA+Tbik9tAo1b3PQcsIHfvxqHH7slN3WqPGi2qC56cz2/902I+12oGCuo/BXtMLao6LBQ0bHvbpyvfvNI+g9dN+6bqYO+1ej4dlSnZM1zjuXQp171ehxPy/8lKrKSnsNF2VQ1vVe6+myuQX8Usdra7OFSkcq3Dm/7ZYj+JvD8u5UqfVblju/r3SnxvY0jD2ofZKL8chKB9bTntUs7+lpvWLujOn8fDdtXBVbkHU2APPcpClpp1gIajJ5RSHbW89mAZdz/VZ20qpdXlLwrWaoGkTQrw//Dv1wHkqaJygfAWNE5Snu8Pr1B33KjX3ROhYr9D6JfHk5RhEW/Yg/JuaE20lpqDpFIelUnMBV9oWy7Vfy/3XSuPmsnNjJZWv1ezzaamzPiw2+5VdL5Xy1PYJmIIdn6CX42XLd0o30Myd9rbGIjVBL8+gWtOzWpiumiar7bM21NwynBio0PTtpcftA1HLKLV+m+hbzdcOemyn6dtE7YH4RuevBWv7stqLQukISqN9KujytbfTPILSSvu5a2andRSatw3QMhLX2oLXaIMslNb+bFaheYNp0LxKx34EzedeywRQs9P0QfRYocvXgr1/r/UF+a67Jffng7YVRI/351ctk/Yuj5q+Q9Gp07SuffwLZRhEcxni0keppprXJmmoNK2ol+ExQbfHSqC7C59Vym/4R6mmKvDcrENBTVrtfEahVas5zx+1PbWaMemV1hU1zQxFXbw/kRaFi24xiLZKNQ9QW6YaY9UqdFuT3Qc16Tk3Rs7aQ35WcxxzbBup1QSF6sLnQU3a74VjYyc4ydnaab87vE7doehUJV+gfi1cdMtBtFWpCXZt6bTWNIJehsbkytpFbP+t+i6e+bxSE4A8A7RT1zWR/E4E0mO1fCWVW+T96bA5BDXPK6sJqDU/z09OWlBfaxx18rYQRFu15qnq3alpW8jpIotqqm6tKnOnL/e90kspvtZtsAfjjx3r7MS8ocduIfM01Fppj4fXpYJ4Kd8PdhcCzojydeTxLFaamyKQlo7vCuonqnt2lksBdU47zdux6Jx3Hd9nxydoOUFpde44ZVV5cw0BCdpu2i+x+9CuwSXvw657YqnzUDj2oxCSFDRNMP1V45WO7wmO7dg6Vtq8FjQf1ATXoHXstHwQ9XTt32s5QWkHkjkFbTft50Q1aX7QsqJ8z7eoeRWOfSiUmJwnW5hSrZfZOWy50zCWc7XA9bPW10519l7NTD1WZVMfLVvtNNK2d91fWSfqZeYqYCnHz52dlmX3RVfpt/01GaBT0LiSadRwpWP7Qbdhp3Vyv57S6KOWqVILoiS6xbSfChr+vFlqmbuauXDsQ6HEUBI9r9bLlFv36h+07kWOLWWW67ZhT9d+xCCouQa23LkGy4mH1zWnGe3qINn+ZNxOQA9Bw0qlUcOUjm0H3Yad5juOXaLjux81v+DYj71uU9B2036qnSUqaD2eDkYfNJ/C8f2FErOlIS5D1WpOXN+BzwxQTlul7hx/ELO1YH7tZPil1h1S9t6xju1nFP6HIOq3U/c4w2P/EFLnGWh+L2BebbPC1DOr9VXJV5XMPXGEINpPKX8gDbrN+XVvSanuXspRzNaC+di1ZbVWtdLoR+HJWEZxT/wPQbS/Uv4hLEFImQXQyrEesxhhLhZALSDNPU+uVynf8DfuiQOC6DDWAO9pPwhC6jzTq/0kYB7ttVUpDd55g7knDlILopYjsx6RUemz0uhWJyy4JZV8c4dGAdMKSqND0SlPAYF74iDFIBqUR8N1re3+ysWt8ZxHOlNgau01tXaHolMfRQcjt9SCaH14jcqj4boSboFVz9PBCEuLSqdD0SlPG20U90TSbaI5NFxXuv7wpbo3D3QwwtIKNbVuqXQoOlWJDkYuKQdRa7jOvTRaC7mgMwWWdHd4rZQu7gmHFINofXht52lM3Z9XPvso5KJS9wONzhSYQtDLbxnXSpdn3uh2nOtmpT7EZcjk70u7VOVBAM2PZ6A5pVGMlWqHolPeZo5N3xM5jBN9UNouVTn/JuSmVHc7UDs4Hi/sIRq1TUPSHpVuh6JT3g5G32qjcgiiUWnfoF9deL8UcuMdaE4HoxdBTbXfFh+iQU3aY4+/KQ5/l8vwuEq+DkabrdJNuU30mJVGU839hzPvVaI61yMoPaVjHap0X7RVk1vsid6mvZZf26HIM6FBKrwdjDZZQ5PLtH9BaVbr2kVzLgc+pq3ja2FNtehg5BX08vuOtbYlqP9vWwY1102lvI6Xt4NRoXGCMpTT3LlWXZBaNdq5KgwrgZaaV9B2BC3P0w401WwtOefetzxjzXHaa/nk0qHolLeD0RI//xiUmBSD6O9XPnurtEoAd2fe+0Hw+kppqtT90Iia5lrMNYhGfV7yGFKdG5SnoGGl0OLw70r58XYwitqYHH/F5Vel0Ykh6ssLxialrzVOmGidHLyaaJ05LPWD3TkG0aAvm1e20iZq52t/8p4n7W2G22qqauWnki+dY+6J4FgnueauHINoexGvHUhPHyKWU/O0HXQJjnVupQHfk46gdZTyzacbNU5QfqxGKJy8t5WSqN334eS9rrTb+m1T1O/Kl6eDUdTwe8ITIP+qxKQYRD29WttAulYb6elDxNo4dhovTLxe6jwZoaB1eIe7jC2NBuXFgsi5vgBbCKJ2rs+lvVb337UZxpx77VfO9YbeE55M9TeCS1Dzu6JPjuWtlnV/8v1TlD5br+VL8wflL8qX1k9az6vD93ftY9Rwe8f291pfm3Gd8hx50p7CtW5pf9DlfbwmnqybWufIvh7lu2/7pvOVc7tPYrKTXgr5TpqtEzW/tyffu9O0rt2ot3Yh9Ulr1HreaL4HfZAv/WtmJEzU9fvwUf0F3Ubar+1fOPO3O+WtlP+89WlyK5zbfdL4oTSbVMgXTB80TxVR0Oe5ZtuXqGkF+S8iW5YugU8pyJ+jtWWvdR2f+ynPx738xyBqWe3E4p60D8lE9El7oWW144A9aX+8sI2g89f42tfyWDv5z5ulPzi3+9hju7kfw1UV8l3Yv2qaGy/o89Kn5a52mr4UGNTvImqXHKuG7NjZQ7dvWu+1niDf+emzj3fql/6+Ofshgpr75kG+auyhD7UhaY+aV9CwtJ/LQNx1bONO+XpUv3Nn68eObb7tuc0nJVSI+IvyZA8TCyDf6XpOpx0kbJPBfzwsnp50lgO3gcPxaDvWyeSdpu/Kf68mLUMDc6mmZ3Ct9BUa98s8dv5+1DqdM4KaYBE61ivVdDQ73sc/TrZjx6DQMNVh239qvK8Pr3Y/BQ2/Bqvn5XvHekG3nXbblncse6l87lvTJ23nlGqGAB7fC/acHfPjBfVhm++FUaKaE+TNIVkO0XKP+5PlUV/mHu39MQHO42mCZac8eM9RqmkN8rcJtUtxso2i59/nsDzIp1hp/+Zc9kfpK3v+7U75KDX+WIWTbe4n2OZeK8u1JHpJUJNjsuWbo/97WA6p1kup9b2WGUAeNN4fymOwe9B4KaQ1qAkI36nJYJ1msurD8h99Od703Pq5856TW0973/Tlct+aKc5dPcM2z213UbcWRC9pT1Y481mtvC5mAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw7L+JNxGR+dJGzAAAAABJRU5ErkJggg==", p = 0, m = /* @__PURE__ */ new Set();
function h() {
	p++, m.forEach((e) => e());
	let e = !1;
	return () => {
		e || (e = !0, p = Math.max(0, p - 1), m.forEach((e) => e()));
	};
}
var g = () => p;
function _(e) {
	return m.add(e), () => {
		m.delete(e);
	};
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react-jsx-runtime.production.js
var v = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), y = (/* @__PURE__ */ o(((e, t) => {
	t.exports = v();
})))();
function b({ label: e = "Loading your SPREEAI experience" }) {
	return window.PARTNER_DEMO ? /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "partner-image-loading " + window.PARTNER_DEMO.theme,
		role: "status",
		children: [
			/* @__PURE__ */ (0, y.jsx)("strong", {
				"aria-label": window.PARTNER_DEMO.brand + " logo",
				children: window.PARTNER_DEMO.theme === "kitsune" ? /* @__PURE__ */ (0, y.jsx)("img", {
					className: "kitsune-loading-mark",
					src: "./assets/maison-kitsune.svg",
					alt: "Maison Kitsuné"
				}) : window.PARTNER_DEMO.theme === "ao" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: ["alice + olivia", /* @__PURE__ */ (0, y.jsx)("small", { children: "BY STACEY BENDET" })] }) : window.PARTNER_DEMO.theme === "thg" ? "THE HINTON GROUP" : window.PARTNER_DEMO.brand
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "partner-loading-track",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, y.jsx)("i", {})
			}),
			/* @__PURE__ */ (0, y.jsx)("span", { children: e.replace("SPREEAI experience", "fitting room") })
		]
	}) : e.startsWith("Generating") ? /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "generation-progress",
		role: "status",
		children: [/* @__PURE__ */ (0, y.jsx)("span", {
			className: "generation-spinner",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, y.jsx)("p", { children: e })]
	}) : /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "spree-loading",
		role: "status",
		children: [
			/* @__PURE__ */ (0, y.jsx)("img", {
				className: "spree-loading-logo",
				src: f,
				alt: "SPREEAI"
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "spree-loading-track",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, y.jsx)("i", {})
			}),
			/* @__PURE__ */ (0, y.jsx)("span", {
				className: "sr-only",
				children: e
			})
		]
	});
}
function x() {
	let e = (0, d.useSyncExternalStore)(_, g);
	return !window.PARTNER_DEMO && e > 0 ? /* @__PURE__ */ (0, y.jsx)("div", {
		className: "global-loading",
		children: /* @__PURE__ */ (0, y.jsx)(b, {})
	}) : null;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/lib/context.es.js
var S = (0, d.createContext)({
	color: "currentColor",
	size: "1em",
	weight: "regular",
	mirrored: !1
}), C = d.forwardRef((e, t) => {
	let { alt: n, color: r, size: i, weight: a, mirrored: o, children: s, weights: c, ...l } = e, { color: u = "currentColor", size: f, weight: p = "regular", mirrored: m = !1, ...h } = d.useContext(S);
	return /* @__PURE__ */ d.createElement("svg", {
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		width: i ?? f,
		height: i ?? f,
		fill: r ?? u,
		viewBox: "0 0 256 256",
		transform: o || m ? "scale(-1, 1)" : void 0,
		...h,
		...l
	}, !!n && /* @__PURE__ */ d.createElement("title", null, n), s, c.get(a ?? p));
});
C.displayName = "IconBase";
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/MagnifyingGlassPlus.es.js
var w = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M156,112a12,12,0,0,1-12,12H124v20a12,12,0,0,1-24,0V124H80a12,12,0,0,1,0-24h20V80a12,12,0,0,1,24,0v20h20A12,12,0,0,1,156,112Zm76.49,120.49a12,12,0,0,1-17,0L168,185a92.12,92.12,0,1,1,17-17l47.54,47.53A12,12,0,0,1,232.49,232.49ZM112,180a68,68,0,1,0-68-68A68.08,68.08,0,0,0,112,180Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M150,112a6,6,0,0,1-6,6H118v26a6,6,0,0,1-12,0V118H80a6,6,0,0,1,0-12h26V80a6,6,0,0,1,12,0v26h26A6,6,0,0,1,150,112Zm78.24,116.24a6,6,0,0,1-8.48,0l-51.38-51.38a86.15,86.15,0,1,1,8.48-8.48l51.38,51.38A6,6,0,0,1,228.24,228.24ZM112,186a74,74,0,1,0-74-74A74.09,74.09,0,0,0,112,186Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M152,112a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Zm77.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88.11,88.11,0,1,1,11.31-11.31l50.07,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M148,112a4,4,0,0,1-4,4H116v28a4,4,0,0,1-8,0V116H80a4,4,0,0,1,0-8h28V80a4,4,0,0,1,8,0v28h28A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z" }))]
]), T = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: w
}));
T.displayName = "MagnifyingGlassPlusIcon";
var ee = T;
//#endregion
//#region src/always-on/InlineImageZoom.tsx
function E({ src: e, alt: t }) {
	let [n, r] = (0, d.useState)(1), [i, a] = (0, d.useState)({
		x: 0,
		y: 0
	}), o = (0, d.useRef)(/* @__PURE__ */ new Map()), s = (0, d.useRef)(null);
	function c(e) {
		r(Math.max(1, Math.min(3, e))), e <= 1 && a({
			x: 0,
			y: 0
		});
	}
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "inline-image-zoom",
		children: [
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "inline-zoom-stage",
				style: { touchAction: "none" },
				onPointerDown: (e) => {
					o.current.set(e.pointerId, {
						x: e.clientX,
						y: e.clientY
					}), e.currentTarget.setPointerCapture(e.pointerId), s.current = null;
				},
				onPointerMove: (e) => {
					if (!o.current.has(e.pointerId)) return;
					o.current.set(e.pointerId, {
						x: e.clientX,
						y: e.clientY
					});
					let t = [...o.current.values()], r = t.reduce((e, t) => e + t.x, 0) / t.length, i = t.reduce((e, t) => e + t.y, 0) / t.length, l = t.length === 2 ? Math.hypot(t[0].x - t[1].x, t[0].y - t[1].y) : 0, u = s.current;
					if (u && (l && u.distance && c(n * l / u.distance), n > 1)) {
						let t = e.currentTarget.getBoundingClientRect(), o = t.width * (n - 1) / 2, s = t.height * (n - 1) / 2;
						a((e) => ({
							x: Math.max(-o, Math.min(o, e.x + r - u.x)),
							y: Math.max(-s, Math.min(s, e.y + i - u.y))
						}));
					}
					s.current = {
						x: r,
						y: i,
						distance: l
					};
				},
				onPointerUp: (e) => {
					o.current.delete(e.pointerId), s.current = null;
				},
				onPointerCancel: () => {
					o.current.clear(), s.current = null;
				},
				children: /* @__PURE__ */ (0, y.jsx)("img", {
					src: e,
					alt: t,
					draggable: !1,
					style: { transform: `translate(${i.x}px,${i.y}px) scale(${n})` }
				})
			}),
			/* @__PURE__ */ (0, y.jsxs)("label", {
				className: "inline-zoom-slider",
				children: [
					/* @__PURE__ */ (0, y.jsx)(ee, { size: 20 }),
					/* @__PURE__ */ (0, y.jsx)("input", {
						"aria-label": "Image zoom",
						type: "range",
						min: "1",
						max: "3",
						step: "0.01",
						value: n,
						onChange: (e) => c(Number(e.target.value))
					}),
					/* @__PURE__ */ (0, y.jsxs)("span", { children: [n.toFixed(1), "×"] })
				]
			}),
			/* @__PURE__ */ (0, y.jsx)("span", {
				className: "zoom-hint",
				children: n > 1 ? "Drag to explore · Pinch to zoom" : "Pinch or slide to zoom"
			})
		]
	});
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react-router@7.18.4_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-router/dist/development/chunk-OB3PAWPO.mjs
var D = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, O = /^[\\/]{2}/;
function te(e, t) {
	return t + e.replace(/\\/g, "/");
}
var k = "popstate";
function ne(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function re(e = {}) {
	function t(e, t) {
		let { pathname: n = "/", search: r = "", hash: i = "" } = le(e.location.hash.substring(1));
		return !n.startsWith("/") && !n.startsWith(".") && (n = "/" + n), se("", {
			pathname: n,
			search: r,
			hash: i
		}, t.state && t.state.usr || null, t.state && t.state.key || "default");
	}
	function n(e, t) {
		let n = e.document.querySelector("base"), r = "";
		if (n && n.getAttribute("href")) {
			let t = e.location.href, n = t.indexOf("#");
			r = n === -1 ? t : t.slice(0, n);
		}
		return r + "#" + (typeof t == "string" ? t : ce(t));
	}
	function r(e, t) {
		ie(e.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`);
	}
	return j(t, n, r, e);
}
function A(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function ie(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function ae() {
	return Math.random().toString(36).substring(2, 10);
}
function oe(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t,
		masked: e.mask ? {
			pathname: e.pathname,
			search: e.search,
			hash: e.hash
		} : void 0
	};
}
function se(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? le(t) : t,
		state: n,
		key: t && t.key || r || ae(),
		mask: i
	};
}
function ce({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function le(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function j(e, t, n, r = {}) {
	let { window: i = document.defaultView, v5Compat: a = !1 } = r, o = i.history, s = "POP", c = null, l = u();
	l ?? (l = 0, o.replaceState({
		...o.state,
		idx: l
	}, ""));
	function u() {
		return (o.state || { idx: null }).idx;
	}
	function d() {
		s = "POP";
		let e = u(), t = e == null ? null : e - l;
		l = e, c && c({
			action: s,
			location: h.location,
			delta: t
		});
	}
	function f(e, t) {
		s = "PUSH";
		let r = ne(e) ? e : se(h.location, e, t);
		n && n(r, e), l = u() + 1;
		let d = oe(r, l), f = h.createHref(r.mask || r);
		try {
			o.pushState(d, "", f);
		} catch (e) {
			if (e instanceof DOMException && e.name === "DataCloneError") throw e;
			i.location.assign(f);
		}
		a && c && c({
			action: s,
			location: h.location,
			delta: 1
		});
	}
	function p(e, t) {
		s = "REPLACE";
		let r = ne(e) ? e : se(h.location, e, t);
		n && n(r, e), l = u();
		let i = oe(r, l), d = h.createHref(r.mask || r);
		o.replaceState(i, "", d), a && c && c({
			action: s,
			location: h.location,
			delta: 0
		});
	}
	function m(e) {
		return ue(i, e);
	}
	let h = {
		get action() {
			return s;
		},
		get location() {
			return e(i, o);
		},
		listen(e) {
			if (c) throw Error("A history only accepts one active listener");
			return i.addEventListener(k, d), c = e, () => {
				i.removeEventListener(k, d), c = null;
			};
		},
		createHref(e) {
			return t(i, e);
		},
		createURL: m,
		encodeLocation(e) {
			let t = m(e);
			return {
				pathname: t.pathname,
				search: t.search,
				hash: t.hash
			};
		},
		push: f,
		replace: p,
		go(e) {
			return o.go(e);
		}
	};
	return h;
}
function ue(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), A(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : ce(t);
	return i = i.replace(/ $/, "%20"), !n && O.test(i) && (i = r + i), new URL(i, r);
}
function de(e, t, n = "/") {
	return M(e, t, n, !1);
}
function M(e, t, n, r, i) {
	let a = Oe((typeof t == "string" ? le(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? fe(e), s = null, c = De(a);
	for (let e = 0; s == null && e < o.length; ++e) s = Ce(o[e], c, r);
	return s;
}
function fe(e) {
	let t = pe(e);
	return he(t), t;
}
function pe(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			A(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = Ie([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (A(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), pe(e.children, t, u, l, o)), (e.path != null || e.index) && t.push({
			path: l,
			score: xe(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = Ee(e.relativePath, e.caseSensitive, t === u.length - 1);
				return {
					...e,
					matcher: n,
					compiledParams: r
				};
			})
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of me(e.path)) a(e, t, !0, n);
	}), t;
}
function me(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = me(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function he(e) {
	e.sort((e, t) => e.score === t.score ? Se(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var N = /^:[\w-]+$/, P = 3, ge = 2, _e = 1, ve = 10, ye = -2, be = (e) => e === "*";
function xe(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(be) && (r += ye), t && (r += ge), n.filter((e) => !be(e)).reduce((e, t) => e + (N.test(t) ? P : t === "" ? _e : ve), r);
}
function Se(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Ce(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? Te(u, l, s.matcher, s.compiledParams) : we(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = we({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: Ie([a, d.pathname]),
			pathnameBase: Re(Ie([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = Ie([a, d.pathnameBase]));
	}
	return o;
}
function we(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = Ee(e.path, e.caseSensitive, e.end);
	return Te(e, t, n, r);
}
function Te(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = Le(a, 1), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = Le(a.slice(0, a.length - e.length), 1);
			}
			let i = s[r];
			return e[t] = n && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function Ee(e, t = !1, n = !0) {
	ie(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function De(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return ie(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function Oe(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function ke(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? le(e) : e, a;
	return n ? (n = Fe(n), a = n.startsWith("/") || n.startsWith("\\") ? Ae(n.substring(1), "/") : Ae(n, t)) : a = t, {
		pathname: a,
		search: ze(r),
		hash: Be(i)
	};
}
function Ae(e, t) {
	let n = Le(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function je(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Me(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function Ne(e) {
	let t = Me(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function Pe(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = le(e) : (i = { ...e }, A(!i.pathname || !i.pathname.includes("?"), je("?", "pathname", "search", i)), A(!i.pathname || !i.pathname.includes("#"), je("#", "pathname", "hash", i)), A(!i.search || !i.search.includes("#"), je("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let c = ke(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var Fe = (e) => e.replace(/[\\/]{2,}/g, "/"), Ie = (e) => Fe(e.join("/"));
function Le(e, t = 0) {
	let n = e.length;
	for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
	return n === e.length ? e : e.slice(0, n);
}
var Re = (e) => Le(e).replace(/^\/*/, "/"), ze = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Be = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Ve = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function He(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Ue(e) {
	return Ie(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var We = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Ge(e, t) {
	let n = e;
	if (typeof n != "string" || !D.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (We) try {
		let e = new URL(window.location.href), r = O.test(n) ? new URL(te(n, e.protocol)) : new URL(n), a = Oe(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		ie(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Ke = new URL("http://localhost");
function qe(e) {
	if (e.createURL) return e.createURL("/");
	try {
		return new URL(e.createHref("/"), Ke);
	} catch {
		return Ke;
	}
}
function Je(e, t) {
	return e.origin === t.origin && (e.origin !== "null" || e.protocol === t.protocol && e.host === t.host);
}
function Ye(e, t) {
	if (e.startsWith("//")) return !0;
	let n = t.protocol.toLowerCase();
	return e.toLowerCase().startsWith(n) ? t.host === "" || e.slice(n.length).startsWith("//") : !1;
}
function Xe(e, t, n, r) {
	let i = null;
	try {
		i = e == null ? null : new URL(e, n);
	} catch {}
	let a = new URL(t, n), o = i != null && !Je(i, n), s = !Je(a, n);
	if (r === "reject") {
		if (o || s) throw Error("External navigation is not allowed");
	} else if (s && (i == null || !Ye(e, i) || !Je(i, a))) throw Error("External navigation is not allowed");
}
var Ze = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
new Set(Ze);
var Qe = ["GET", ...Ze];
new Set(Qe);
var $e = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function et(e) {
	try {
		return $e.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
var tt = d.createContext(null);
tt.displayName = "DataRouter";
var nt = d.createContext(null);
nt.displayName = "DataRouterState";
var rt = d.createContext(!1);
function it() {
	return d.useContext(rt);
}
var at = d.createContext({ isTransitioning: !1 });
at.displayName = "ViewTransition";
var ot = d.createContext(/* @__PURE__ */ new Map());
ot.displayName = "Fetchers";
var st = d.createContext(null);
st.displayName = "Await";
var ct = d.createContext(null);
ct.displayName = "Navigation";
var lt = d.createContext(null);
lt.displayName = "Location";
var ut = d.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
ut.displayName = "Route";
var dt = d.createContext(null);
dt.displayName = "RouteError";
var ft = "REACT_ROUTER_ERROR", pt = "REDIRECT", mt = "ROUTE_ERROR_RESPONSE";
function ht(e) {
	if (e.startsWith(`${ft}:${pt}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function gt(e) {
	if (e.startsWith(`${ft}:${mt}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new Ve(t.status, t.statusText, t.data);
	} catch {}
}
function _t(e, { relative: t } = {}) {
	A(vt(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = d.useContext(ct), { hash: i, pathname: a, search: o } = wt(e, { relative: t }), s = a;
	return n !== "/" && (s = a === "/" ? n : Ie([n, a])), r.createHref({
		pathname: s,
		search: o,
		hash: i
	});
}
function vt() {
	return d.useContext(lt) != null;
}
function yt() {
	return A(vt(), "useLocation() may be used only in the context of a <Router> component."), d.useContext(lt).location;
}
var bt = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xt(e) {
	d.useContext(ct).static || d.useLayoutEffect(e);
}
function St() {
	let { isDataRoute: e } = d.useContext(ut);
	return e ? Bt() : Ct();
}
function Ct() {
	A(vt(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = d.useContext(tt), { basename: t, navigator: n } = d.useContext(ct), { matches: r } = d.useContext(ut), { pathname: i } = yt(), a = JSON.stringify(Ne(r)), o = d.useRef(!1);
	return xt(() => {
		o.current = !0;
	}), d.useCallback((r, s = {}) => {
		if (ie(o.current, bt), !o.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = Pe(r, JSON.parse(a), i, s.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Ie([t, c.pathname])), Xe(typeof r == "string" ? r : ce(r), n.createHref(c), qe(n), "reject"), (s.replace ? n.replace : n.push)(c, s.state, s);
	}, [
		t,
		n,
		a,
		i,
		e
	]);
}
d.createContext(null);
function wt(e, { relative: t } = {}) {
	let { matches: n } = d.useContext(ut), { pathname: r } = yt(), i = JSON.stringify(Ne(n));
	return d.useMemo(() => Pe(e, JSON.parse(i), r, t === "path"), [
		e,
		i,
		r,
		t
	]);
}
function Tt(e, t, n) {
	A(vt(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = d.useContext(ct), { matches: i } = d.useContext(ut), a = i[i.length - 1], o = a ? a.params : {}, s = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", l = a && a.route;
	{
		let e = l && l.path || "";
		Ht(s, !l || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let u = yt(), f;
	if (t) {
		let e = typeof t == "string" ? le(t) : t;
		A(c === "/" || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`), f = e;
	} else f = u;
	let p = f.pathname || "/", m = p;
	if (c !== "/") {
		let e = c.replace(/^\//, "").split("/");
		m = "/" + p.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let h = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : de(e, { pathname: m });
	ie(l || h != null, `No routes matched location "${f.pathname}${f.search}${f.hash}" `), ie(h == null || h[h.length - 1].route.element !== void 0 || h[h.length - 1].route.Component !== void 0 || h[h.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let g = Mt(h && h.map((e) => Object.assign({}, e, {
		params: Object.assign({}, o, e.params),
		pathname: Ie([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? c : Ie([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && g ? /* @__PURE__ */ d.createElement(lt.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...f
		},
		navigationType: "POP"
	} }, g) : g;
}
function Et() {
	let e = zt(), t = He(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ d.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ d.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ d.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ d.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ d.createElement("pre", { style: i }, n) : null, o);
}
var Dt = /* @__PURE__ */ d.createElement(Et, null), Ot = class extends d.Component {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let e = this.state.error;
		if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
			let t = gt(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ d.createElement(ut.Provider, { value: this.props.routeContext }, /* @__PURE__ */ d.createElement(dt.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ d.createElement(At, { error: e }, t) : t;
	}
};
Ot.contextType = rt;
var kt = /* @__PURE__ */ new WeakMap();
function At({ children: e, error: t }) {
	let { basename: n, navigator: r } = d.useContext(ct);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = ht(t.digest);
		if (e) {
			let i = kt.get(t);
			if (i) throw i;
			let a = Ge(e.location, n), o = a.absoluteURL || a.to;
			if (Xe(e.location, o, qe(r), "allow-explicit"), et(o)) throw Error("Invalid redirect location");
			if (We && !kt.get(t)) {
				if (a.isExternal || e.reloadDocument) window.location.href = o;
				else {
					let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
					throw kt.set(t, n), n;
				}
			}
			return /* @__PURE__ */ d.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${o}`
			});
		}
	}
	return e;
}
function jt({ routeContext: e, match: t, children: n }) {
	let r = d.useContext(tt);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ d.createElement(ut.Provider, { value: e }, n);
}
function Mt(e, t = [], n) {
	let r = n?.state;
	if (e == null) {
		if (!r) return null;
		if (r.errors) e = r.matches;
		else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
		else return null;
	}
	let i = e, a = r?.errors;
	if (a != null) {
		let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
		A(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
	}
	let o = !1, s = -1;
	if (n && r) {
		o = r.renderFallback;
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e), t.route.id) {
				let { loaderData: e, errors: a } = r, c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
				if (t.route.lazy || c) {
					n.isStatic && (o = !0), i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
					break;
				}
			}
		}
	}
	let c = n?.onError, l = r && c ? (e, t) => {
		c(e, {
			location: r.location,
			params: r.matches?.[0]?.params ?? {},
			pattern: Ue(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, f = !1, p = null, m = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, p = n.route.errorElement || Dt, o && (s < 0 && c === 0 ? (Ht("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : s === c && (f = !0, m = n.route.hydrateFallbackElement || null)));
		let h = t.concat(i.slice(0, c + 1)), g = () => {
			let t;
			return t = u ? p : f ? m : n.route.Component ? /* @__PURE__ */ d.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ d.createElement(jt, {
				match: n,
				routeContext: {
					outlet: e,
					matches: h,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ d.createElement(Ot, {
			location: r.location,
			revalidation: r.revalidation,
			component: p,
			error: u,
			children: g(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			},
			onError: l
		}) : g();
	}, null);
}
function Nt(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pt(e) {
	let t = d.useContext(tt);
	return A(t, Nt(e)), t;
}
function Ft(e) {
	let t = d.useContext(nt);
	return A(t, Nt(e)), t;
}
function It(e) {
	let t = d.useContext(ut);
	return A(t, Nt(e)), t;
}
function Lt(e) {
	let t = It(e), n = t.matches[t.matches.length - 1];
	return A(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function Rt() {
	return Lt("useRouteId");
}
function zt() {
	let e = d.useContext(dt), t = Ft("useRouteError"), n = Lt("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
function Bt() {
	let { router: e } = Pt("useNavigate"), t = Lt("useNavigate"), n = d.useRef(!1);
	return xt(() => {
		n.current = !0;
	}), d.useCallback(async (r, i = {}) => {
		ie(n.current, bt), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var Vt = {};
function Ht(e, t, n) {
	!t && !Vt[e] && (Vt[e] = !0, ie(!1, n));
}
d.memo(Ut);
function Ut({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return Tt(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function Wt({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: i, static: a = !1, useTransitions: o }) {
	A(!vt(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let s = e.replace(/^\/*/, "/"), c = d.useMemo(() => ({
		basename: s,
		navigator: i,
		static: a,
		useTransitions: o,
		future: {}
	}), [
		s,
		i,
		a,
		o
	]);
	typeof n == "string" && (n = le(n));
	let { pathname: l = "/", search: u = "", hash: f = "", state: p = null, key: m = "default", mask: h } = n, g = d.useMemo(() => {
		let e = Oe(l, s);
		return e == null ? null : {
			location: {
				pathname: e,
				search: u,
				hash: f,
				state: p,
				key: m,
				mask: h
			},
			navigationType: r
		};
	}, [
		s,
		l,
		u,
		f,
		p,
		m,
		r,
		h
	]);
	return ie(g != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`), g == null ? null : /* @__PURE__ */ d.createElement(ct.Provider, { value: c }, /* @__PURE__ */ d.createElement(lt.Provider, {
		children: t,
		value: g
	}));
}
d.Component;
var Gt = "get", Kt = "application/x-www-form-urlencoded";
function qt(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function F(e) {
	return qt(e) && e.tagName.toLowerCase() === "button";
}
function Jt(e) {
	return qt(e) && e.tagName.toLowerCase() === "form";
}
function Yt(e) {
	return qt(e) && e.tagName.toLowerCase() === "input";
}
function Xt(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Zt(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Xt(e);
}
var Qt = null;
function $t() {
	if (Qt === null) try {
		new FormData(document.createElement("form"), 0), Qt = !1;
	} catch {
		Qt = !0;
	}
	return Qt;
}
var en = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function tn(e) {
	return e != null && !en.has(e) ? (ie(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`), null) : e;
}
function nn(e, t) {
	let n, r, i, a, o;
	if (Jt(e)) {
		let o = e.getAttribute("action");
		r = o ? Oe(o, t) : null, n = e.getAttribute("method") || Gt, i = tn(e.getAttribute("enctype")) || Kt, a = new FormData(e);
	} else if (F(e) || Yt(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? Oe(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Gt, i = tn(e.getAttribute("formenctype")) || tn(o.getAttribute("enctype")) || Kt, a = new FormData(o, e), !$t()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (qt(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = Gt, r = null, i = Kt, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function rn(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function an(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return i.pathname = n ? i.pathname.endsWith("/") ? `${i.pathname}_.${r}` : `${i.pathname}.${r}` : i.pathname === "/" ? `_root.${r}` : t && Oe(i.pathname, t) === "/" ? `${Le(t)}/_root.${r}` : `${Le(i.pathname)}.${r}`, i;
}
async function on(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function sn(e) {
	return e != null && typeof e.page == "string";
}
function cn(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function ln(e, t, n) {
	return mn((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await on(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(cn).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function un(e, t, n, r, i, a) {
	let o = (e, t) => !n[t] || e.route.id !== n[t].route.id, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function dn(e, t, { includeHydrateFallback: n } = {}) {
	return fn(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function fn(e) {
	return [...new Set(e)];
}
function pn(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function mn(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !sn(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(pn(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function hn() {
	let e = d.useContext(tt);
	return rn(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function gn() {
	let e = d.useContext(nt);
	return rn(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var _n = d.createContext(void 0);
_n.displayName = "FrameworkContext";
function vn() {
	let e = d.useContext(_n);
	return rn(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function yn(e, t) {
	let n = d.useContext(_n), [r, i] = d.useState(!1), [a, o] = d.useState(!1), { onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: f } = t, p = d.useRef(null);
	d.useEffect(() => {
		if (e === "render" && o(!0), e === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					o(e.isIntersecting);
				});
			}, { threshold: .5 });
			return p.current && e.observe(p.current), () => {
				e.disconnect();
			};
		}
	}, [e]), d.useEffect(() => {
		if (r) {
			let e = setTimeout(() => {
				o(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [r]);
	let m = () => {
		i(!0);
	}, h = () => {
		i(!1), o(!1);
	};
	return n ? e === "intent" ? [
		a,
		p,
		{
			onFocus: bn(s, m),
			onBlur: bn(c, h),
			onMouseEnter: bn(l, m),
			onMouseLeave: bn(u, h),
			onTouchStart: bn(f, m)
		}
	] : [
		a,
		p,
		{}
	] : [
		!1,
		p,
		{}
	];
}
function bn(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function xn({ page: e, ...t }) {
	let n = it(), { nonce: r } = vn(), { router: i } = hn(), a = d.useMemo(() => de(i.routes, e, i.basename), [
		i.routes,
		e,
		i.basename
	]);
	return a ? (t.nonce == null && r && (t = {
		...t,
		nonce: r
	}), n ? /* @__PURE__ */ d.createElement(Cn, {
		page: e,
		matches: a,
		...t
	}) : /* @__PURE__ */ d.createElement(wn, {
		page: e,
		matches: a,
		...t
	})) : null;
}
function Sn(e) {
	let { manifest: t, routeModules: n } = vn(), [r, i] = d.useState([]);
	return d.useEffect(() => {
		let r = !1;
		return ln(e, t, n).then((e) => {
			r || i(e);
		}), () => {
			r = !0;
		};
	}, [
		e,
		t,
		n
	]), r;
}
function Cn({ page: e, matches: t, ...n }) {
	let r = yt(), { future: i } = vn(), { basename: a } = hn(), o = d.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = an(e, a, i.v8_trailingSlashAwareDataRequests, "rsc"), o = !1, s = [];
		for (let e of t) typeof e.route.shouldRevalidate == "function" ? o = !0 : s.push(e.route.id);
		return o && s.length > 0 && n.searchParams.set("_routes", s.join(",")), [n.pathname + n.search];
	}, [
		a,
		i.v8_trailingSlashAwareDataRequests,
		e,
		r,
		t
	]);
	return /* @__PURE__ */ d.createElement(d.Fragment, null, o.map((e) => /* @__PURE__ */ d.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function wn({ page: e, matches: t, ...n }) {
	let r = yt(), { future: i, manifest: a, routeModules: o } = vn(), { basename: s } = hn(), { loaderData: c, matches: l } = gn(), u = d.useMemo(() => un(e, t, l, a, r, "data"), [
		e,
		t,
		l,
		a,
		r
	]), f = d.useMemo(() => un(e, t, l, a, r, "assets"), [
		e,
		t,
		l,
		a,
		r
	]), p = d.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = /* @__PURE__ */ new Set(), l = !1;
		if (t.forEach((e) => {
			let t = a.routes[e.route.id];
			t && t.hasLoader && (!u.some((t) => t.route.id === e.route.id) && e.route.id in c && o[e.route.id]?.shouldRevalidate || t.hasClientLoader ? l = !0 : n.add(e.route.id));
		}), n.size === 0) return [];
		let d = an(e, s, i.v8_trailingSlashAwareDataRequests, "data");
		return l && n.size > 0 && d.searchParams.set("_routes", t.filter((e) => n.has(e.route.id)).map((e) => e.route.id).join(",")), [d.pathname + d.search];
	}, [
		s,
		i.v8_trailingSlashAwareDataRequests,
		c,
		r,
		a,
		u,
		t,
		e,
		o
	]), m = d.useMemo(() => dn(f, a), [f, a]), h = Sn(f);
	return /* @__PURE__ */ d.createElement(d.Fragment, null, p.map((e) => /* @__PURE__ */ d.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), m.map((e) => /* @__PURE__ */ d.createElement("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), h.map(({ key: e, link: t }) => /* @__PURE__ */ d.createElement("link", {
		key: e,
		nonce: n.nonce,
		...t,
		crossOrigin: t.crossOrigin ?? n.crossOrigin
	})));
}
function Tn(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
d.Component;
var En = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	En && (window.__reactRouterVersion = "7.18.4");
} catch {}
function Dn({ basename: e, children: t, useTransitions: n, window: r }) {
	let i = d.useRef();
	i.current ??= re({
		window: r,
		v5Compat: !0
	});
	let a = i.current, [o, s] = d.useState({
		action: a.action,
		location: a.location
	}), c = d.useCallback((e) => {
		n === !1 ? s(e) : d.startTransition(() => s(e));
	}, [n]);
	return d.useLayoutEffect(() => a.listen(c), [a, c]), /* @__PURE__ */ d.createElement(Wt, {
		basename: e,
		children: t,
		location: o.location,
		navigationType: o.action,
		navigator: a,
		useTransitions: n
	});
}
var On = d.forwardRef(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: a, mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: f, defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, useTransitions: v } = d.useContext(ct), y = typeof l == "string" && D.test(l), b = Ge(l, g);
	l = b.to;
	let x = _t(l, { relative: r }), S = yt(), C = null;
	if (o) {
		let e = Pe(o, [], S.mask ? S.mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : Ie([g, e.pathname])), C = _.createHref(e);
	}
	let [w, T, ee] = yn(n, m), E = Nn(l, {
		replace: a,
		mask: o,
		state: s,
		target: c,
		preventScrollReset: u,
		relative: r,
		viewTransition: f,
		defaultShouldRevalidate: p,
		useTransitions: v
	});
	function O(t) {
		e && e(t), t.defaultPrevented || E(t);
	}
	let te = !(b.isExternal || i), k = /* @__PURE__ */ d.createElement("a", {
		...m,
		...ee,
		href: (te ? C : void 0) || b.absoluteURL || x,
		onClick: te ? O : e,
		ref: Tn(h, T),
		target: c,
		"data-discover": !y && t === "render" ? "true" : void 0
	});
	return w && !y ? /* @__PURE__ */ d.createElement(d.Fragment, null, k, /* @__PURE__ */ d.createElement(xn, { page: x })) : k;
});
On.displayName = "Link";
var kn = d.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: a, viewTransition: o, children: s, ...c }, l) {
	let u = wt(a, { relative: c.relative }), f = yt(), p = d.useContext(nt), { navigator: m, basename: h } = d.useContext(ct), g = p != null && Rn(u) && o === !0, _ = m.encodeLocation ? m.encodeLocation(u).pathname : u.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	t || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = Oe(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !r && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !r && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, w = x ? e : void 0, T;
	T = typeof n == "function" ? n(C) : [
		n,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let ee = typeof i == "function" ? i(C) : i;
	return /* @__PURE__ */ d.createElement(On, {
		...c,
		"aria-current": w,
		className: T,
		ref: l,
		style: ee,
		to: a,
		viewTransition: o
	}, typeof s == "function" ? s(C) : s);
});
kn.displayName = "NavLink";
var An = d.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o = Gt, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: f, defaultShouldRevalidate: p, ...m }, h) => {
	let { useTransitions: g } = d.useContext(ct), _ = In(), v = Ln(s, { relative: l }), y = o.toLowerCase() === "get" ? "get" : "post", b = typeof s == "string" && D.test(s);
	return /* @__PURE__ */ d.createElement("form", {
		ref: h,
		method: y,
		action: v,
		onSubmit: r ? c : (e) => {
			if (c && c(e), e.defaultPrevented) return;
			e.preventDefault();
			let r = e.nativeEvent.submitter, s = r?.getAttribute("formmethod") || o, m = () => _(r || e.currentTarget, {
				fetcherKey: t,
				method: s,
				navigate: n,
				replace: i,
				state: a,
				relative: l,
				preventScrollReset: u,
				viewTransition: f,
				defaultShouldRevalidate: p
			});
			g && n !== !1 ? d.startTransition(() => m()) : m();
		},
		...m,
		"data-discover": !b && e === "render" ? "true" : void 0
	});
});
An.displayName = "Form";
function jn(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mn(e) {
	let t = d.useContext(tt);
	return A(t, jn(e)), t;
}
function Nn(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l } = {}) {
	let u = St(), f = yt(), p = wt(e, { relative: o });
	return d.useCallback((m) => {
		if (Zt(m, t)) {
			m.preventDefault();
			let t = n === void 0 ? ce(f) === ce(p) : n, h = () => u(e, {
				replace: t,
				mask: r,
				state: i,
				preventScrollReset: a,
				relative: o,
				viewTransition: s,
				defaultShouldRevalidate: c
			});
			l ? d.startTransition(() => h()) : h();
		}
	}, [
		f,
		u,
		p,
		n,
		r,
		i,
		t,
		e,
		a,
		o,
		s,
		c,
		l
	]);
}
var Pn = 0, Fn = () => `__${String(++Pn)}__`;
function In() {
	let { router: e } = Mn("useSubmit"), { basename: t } = d.useContext(ct), n = Rt(), r = e.fetch, i = e.navigate;
	return d.useCallback(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = nn(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || Fn();
			await r(e, n, a.action || o, {
				defaultShouldRevalidate: a.defaultShouldRevalidate,
				preventScrollReset: a.preventScrollReset,
				formData: l,
				body: u,
				formMethod: a.method || s,
				formEncType: a.encType || c,
				flushSync: a.flushSync
			});
		} else await i(a.action || o, {
			defaultShouldRevalidate: a.defaultShouldRevalidate,
			preventScrollReset: a.preventScrollReset,
			formData: l,
			body: u,
			formMethod: a.method || s,
			formEncType: a.encType || c,
			replace: a.replace,
			state: a.state,
			fromRouteId: n,
			flushSync: a.flushSync,
			viewTransition: a.viewTransition
		});
	}, [
		r,
		i,
		t,
		n
	]);
}
function Ln(e, { relative: t } = {}) {
	let { basename: n } = d.useContext(ct), r = d.useContext(ut);
	A(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), a = { ...wt(e || ".", { relative: t }) }, o = yt();
	if (e == null) {
		a.search = o.search;
		let e = new URLSearchParams(a.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			a.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : Ie([n, a.pathname])), ce(a);
}
function Rn(e, { relative: t } = {}) {
	let n = d.useContext(at);
	A(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = Mn("useViewTransitionState"), i = wt(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let a = Oe(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = Oe(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return we(i.pathname, o) != null || we(i.pathname, a) != null;
}
//#endregion
//#region src/always-on/useShoppingState.ts
var zn = (window.PARTNER_DEMO?.partnerId || "demo-site") + ":spree-online-shopping:";
function Bn(e, t) {
	let n = () => typeof t == "function" ? t() : t, [r, i] = (0, d.useState)(() => {
		try {
			let t = sessionStorage.getItem(zn + e);
			if (t !== null) return JSON.parse(t);
		} catch {}
		return n();
	});
	return (0, d.useEffect)(() => {
		try {
			sessionStorage.setItem(zn + e, JSON.stringify(r));
		} catch {}
	}, [e, r]), (0, d.useEffect)(() => {
		let e = () => i(n());
		return window.addEventListener("spree-shopping-reset", e), () => window.removeEventListener("spree-shopping-reset", e);
	}, [e]), [r, i];
}
//#endregion
//#region src/always-on/twin-catalog.ts
function Vn(e, t, n = () => Date.now()) {
	let r, i = 0, a;
	return function(o = !1) {
		if (!o && r && n() < i) return Promise.resolve(r);
		if (a) return a;
		let s = (e) => {
			if (!Array.isArray(e) || !e.length) throw Error("No Twins were returned. Please try again.");
			return e;
		};
		return a = (async () => {
			try {
				let a;
				try {
					a = s(await e());
				} catch {
					a = s(await t());
				}
				return r = a, i = n() + 3e5, a;
			} catch (e) {
				if (r) return r;
				throw e;
			} finally {
				a = void 0;
			}
		})(), a;
	};
}
//#endregion
//#region src/always-on/preview-cache.ts
var Hn = (window.PARTNER_DEMO?.partnerId || "demo-site") + ":spree-preview-cache-v1", Un = 864e5;
function Wn(e, t = Date.now()) {
	try {
		let n = JSON.parse(e.getItem(Hn) || "[]");
		return Array.isArray(n) ? new Map(n.filter((e) => typeof e.key == "string" && Number.isFinite(e.at) && t - e.at < Un && e.value?.status === "ready" && (typeof e.value.url == "string" || typeof e.value.recommended == "string")).slice(-120).map((e) => [e.key, e.value])) : /* @__PURE__ */ new Map();
	} catch {
		return /* @__PURE__ */ new Map();
	}
}
var Gn = typeof sessionStorage > "u" ? /* @__PURE__ */ new Map() : Wn(sessionStorage);
function Kn(e = sessionStorage) {
	try {
		e.setItem(Hn, JSON.stringify([...Gn].filter(([, e]) => e.status === "ready").slice(-120).map(([e, t]) => ({
			key: e,
			value: t,
			at: Date.now()
		}))));
	} catch {}
}
//#endregion
//#region src/always-on/history.ts
var qn = (window.PARTNER_DEMO?.partnerId || "demo-site") + ":spree-shopping-history-v1";
function Jn() {
	try {
		let e = JSON.parse(sessionStorage.getItem(qn) || "[]");
		return Array.isArray(e) ? e : [];
	} catch {
		return [];
	}
}
var Yn = Jn(), Xn = 0, Zn = /* @__PURE__ */ new Map();
function Qn(e) {
	return {
		identityId: e,
		epoch: Xn,
		revision: Zn.get(e) || 0
	};
}
var $n = qn + "-removed", er = /* @__PURE__ */ new Set();
try {
	er = new Set(JSON.parse(sessionStorage.getItem($n) || "[]"));
} catch {}
var tr = /* @__PURE__ */ new Set();
function nr() {
	try {
		sessionStorage.setItem(qn, JSON.stringify(Yn)), sessionStorage.setItem($n, JSON.stringify([...er]));
	} catch {}
	tr.forEach((e) => e());
}
function rr(e, t) {
	if (t.identityId !== e.identityId || t.epoch !== Xn || t.revision !== (Zn.get(e.identityId) || 0) || er.has(e.id)) return;
	let n = Yn.find((t) => t.id === e.id);
	Yn = [{
		...n,
		...e,
		at: n?.at || Date.now()
	}, ...Yn.filter((t) => t.id !== e.id)].sort((e, t) => t.at - e.at), nr();
}
function ir(e) {
	er.add(e), Yn = Yn.filter((t) => t.id !== e), nr();
}
function ar(e) {
	Zn.set(e, (Zn.get(e) || 0) + 1), Yn.filter((t) => t.identityId === e).forEach((e) => er.add(e.id)), Yn = Yn.filter((t) => t.identityId !== e), nr();
}
function or() {
	return (0, d.useSyncExternalStore)((e) => (tr.add(e), () => {
		tr.delete(e);
	}), () => Yn);
}
//#endregion
//#region src/always-on/connection.ts
var sr = window.PARTNER_DEMO?.api || "https://api.dev.spreeai.com", cr = window.PARTNER_DEMO?.partnerId || "demo-site";
window.PARTNER_DEMO?.clientId;
var lr = cr + ":spree-dev-session-v1", ur = cr + ":spree-dev-profile-v1";
function dr(e, t) {
	try {
		return JSON.parse(sessionStorage.getItem(e) || "null") || t;
	} catch {
		return t;
	}
}
var fr = dr(lr, null), I = dr(ur, {
	identity: null,
	authenticated: !1,
	name: "",
	version: 0
});
I.identity?.kind === "photo" && !dr(cr + ":spree-session-upload-ledger", []).includes(I.identity.id) && (I = {
	...I,
	identity: null
}), fr || (I = {
	identity: null,
	authenticated: !1,
	name: "",
	version: 0
});
var pr = null, mr = 0, hr = /* @__PURE__ */ new Set();
function gr() {
	try {
		sessionStorage.setItem(lr, JSON.stringify(fr)), sessionStorage.setItem(ur, JSON.stringify(I));
	} catch {}
	hr.forEach((e) => e());
}
function _r() {
	return (0, d.useSyncExternalStore)((e) => (hr.add(e), () => {
		hr.delete(e);
	}), () => I);
}
function vr() {
	return I;
}
function yr() {
	return mr;
}
function br(e) {
	I = {
		...I,
		identity: e,
		version: I.version + 1
	}, gr();
}
var xr = cr + ":spree-session-upload-ledger";
function Sr() {
	return dr(xr, []);
}
function Cr() {
	sessionStorage.removeItem(xr);
}
async function wr(e, t, n, r, i = sr) {
	let a = h();
	try {
		let a = await fetch(i + e, {
			method: t,
			headers: {
				...n instanceof FormData ? {} : { "Content-Type": "application/json" },
				...r ? { Authorization: "Bearer " + r } : {}
			},
			body: n === void 0 ? void 0 : n instanceof FormData ? n : JSON.stringify(n),
			signal: AbortSignal.timeout(n instanceof FormData ? 6e4 : 3e4)
		}), o = await a.json().catch(() => null);
		if (!a.ok) throw Object.assign(Error(o?.error === "garment_not_ready" ? "This piece is still being prepared. Please try another piece." : o?.errors?.[0]?.message || o?.message || `SPREEAI could not complete this request (${a.status}).`), { httpStatus: a.status });
		return o;
	} finally {
		a();
	}
}
async function Tr() {
	if (fr && fr.expiresAt > Date.now() + 6e4) return fr;
	if (pr) return pr;
	let e = mr;
	return pr = (async () => {
		let t;
		try {
			t = await wr(fr ? "/v1/auth/refresh" : "/v1/user/guest", "POST", fr ? {
				refresh_token: fr.refresh_token,
				partner_id: cr
			} : {
				partner_id: cr,
				language: "en"
			});
		} catch (e) {
			if (!fr || ![400, 401].includes(e.httpStatus)) throw e;
			fr = null, I.identity?.kind === "photo" && (I = {
				...I,
				identity: null,
				version: I.version + 1
			}), t = await wr("/v1/user/guest", "POST", {
				partner_id: cr,
				language: "en"
			});
		}
		if (mr !== e) throw Error("Your session changed. Please try again.");
		if (!t?.access_token) throw Error("Unable to start your SPREEAI session.");
		return fr = {
			...t,
			expiresAt: Date.now() + Number(t.expires_in) * 1e3
		}, gr(), fr;
	})().finally(() => {
		mr === e && (pr = null);
	}), pr;
}
async function Er(e, t = "GET", n, r = sr) {
	let i = mr, a = await Tr();
	if (i !== mr) throw Error("Your session changed.");
	let o;
	try {
		o = await wr(e, t, n, a.access_token, r);
	} catch (s) {
		if (window.PARTNER_DEMO?.theme === "ch" && s.httpStatus === 429) {
			if (await new Promise((e) => setTimeout(e, 3e4)), i !== mr) throw Error("Your session changed.");
			return wr(e, t, n, a.access_token, r);
		}
		if (s.httpStatus !== 401 || r !== sr) throw s;
		fr = null, pr = null, o = await wr(e, t, n, (await Tr()).access_token, r);
	}
	if (i !== mr) throw Error("Your session changed. Please try again.");
	return o;
}
var Dr = "/v1/avatars?partnerID=" + encodeURIComponent(cr) + "&inheritpartner=true&inheritdefault=true", Or = Vn(async () => (await Er(Dr)).avatars, async () => {
	let e = await wr("/v1/user/guest", "POST", {
		partner_id: cr,
		language: "en"
	});
	if (!e?.access_token) throw Error("Unable to load Twins. Please try again.");
	return (await wr(Dr, "GET", void 0, e.access_token)).avatars;
}), kr = (e) => ({
	id: e.id,
	url: e.url,
	name: e.name,
	kind: "twin",
	height: e.user_height_centimeters,
	weight: e.user_weight_kilograms,
	bodyType: e.sex === "M" ? "Masculine" : "Feminine",
	usualSize: e.user_tshirt_size
});
async function Ar(e) {
	if (!Number.isFinite(e.height) || e.height < 100 || e.height > 230 || !Number.isFinite(e.weight) || e.weight < 30 || e.weight > 250) throw Error("Enter a height between 100 and 230 cm and a weight between 30 and 250 kg.");
	let t = I.version;
	if (await Er("/v2/user", "PUT", {
		height_centimeters: e.height,
		weight_kilograms: e.weight,
		body_type: e.bodyType
	}), I.version !== t) throw Error("Your profile changed. Please try again.");
	br(e);
}
async function jr(e) {
	let t = new FormData();
	t.append("user_image", e), t.append("source", "web-sdk"), t.append("is_uploaded", "true");
	let n = await Er("/v2/store-experience/user-images", "POST", t);
	if (!Mr(n)) throw Error("Your photo upload returned an incomplete result. Please choose your photo again.");
	return sessionStorage.setItem(xr, JSON.stringify([.../* @__PURE__ */ new Set([...Sr(), n.id])])), n;
}
function Mr(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	if (typeof t.id != "string" || !t.id.trim() || typeof t.url != "string") return !1;
	try {
		return ["https:", "http:"].includes(new URL(t.url).protocol);
	} catch {
		return !1;
	}
}
async function Nr() {
	let e = await Er("/v2/store-experience/user-images");
	if (!Array.isArray(e?.images) || e.images.some((e) => !Mr(e))) throw Error("Saved photos could not be verified. Choose a photo from your device.");
	let t = e.images;
	if (new Set(t.map((e) => e.id)).size !== t.length) throw Error("Saved photos could not be verified. Choose a photo from your device.");
	return { images: t.filter((e) => Sr().includes(e.id)) };
}
async function Pr(e, t, n, r, i = 18e4) {
	let a = Date.now();
	for (; !r.aborted;) {
		let o = await Er(e);
		if (r.aborted) throw Error("Cancelled");
		if (n(o)) throw Error("SPREEAI could not generate this view. Please try another piece or photo.");
		if (t(o)) return o;
		if (Date.now() - a > i) throw Error("This is taking longer than expected. Please try again shortly.");
		await new Promise((e) => setTimeout(e, 2e3));
	}
	throw Error("Cancelled");
}
async function Fr(e, t, n, r = "front", i, a) {
	let o = I.version, s = await Er(`/${r === "back" || i ? "v3.1" : "v3"}/store-experience/tryon`, "POST", {
		garment_set: { garments: (Array.isArray(e) ? e : [e]).map((e) => ({ garment_id: e })) },
		partner_id: cr,
		image_id: t.id,
		source: "web-sdk",
		no_remove_background: !1,
		...r === "back" ? { view: r } : {},
		...i && a ? {
			size: i,
			base_size: a
		} : {}
	}), c = await Pr("/v1/user-assets/tryon/" + encodeURIComponent(s.request_id), (e) => e.status === "COMPLETE", (e) => e.status === "FAILED", n);
	if (I.version !== o) throw Error("Your profile changed. Create a new view.");
	if (!c.image?.url) throw Error("No image was returned. Please try again.");
	return c;
}
async function Ir(e, t, n) {
	let r = I.version, i = await Er("/v2/store-experience/sizing", "POST", {
		garment_id: e,
		height_centimeters: t.height,
		weight_kilograms: t.weight,
		body_type: t.bodyType,
		source: "web-sdk"
	}), a = await Pr("/v1/user-assets/sizing/" + encodeURIComponent(i.request_id), (e) => e.sizing !== void 0 || [e.status, e.result].some((e) => e === "COMPLETE" || e === "SUCCESS" || /^\d{4}$/.test(e || "")), (e) => [e.status, e.result].some((e) => [
		"FAILED",
		"FAILURE",
		"ERROR"
	].includes((e || "").toUpperCase())), n);
	if (I.version !== r) throw Error("Your profile changed. Please check your size again.");
	return a;
}
var Lr = () => location.hostname === "127.0.0.1" || location.hostname === "localhost" || location.hostname === "demo-store.dev.spreeai.com";
async function Rr(e, t, n, r, i) {
	if (!Lr()) throw Error("Detailed fit maps are available in the connected development preview.");
	return Er("/api/size-recommendation/garment/" + encodeURIComponent(e) + "/fit", "POST", {
		profile: {
			gender: t.bodyType === "Masculine" ? "male" : "female",
			height_cm: t.height,
			weight_kg: t.weight
		},
		usual_size: t.kind === "twin" ? t.usualSize : void 0,
		garment: {
			name: n,
			category: r
		},
		available_sizes: i
	}, "");
}
var zr = "https://api.spreeai.com", Br = null, Vr = null;
async function Hr(e, t = "GET", n) {
	let r = mr;
	if ((!Br || Br.expiresAt < Date.now() + 6e4) && (Vr ||= wr("/v1/user/guest", "POST", {
		partner_id: cr,
		language: "en"
	}, void 0, zr).then((e) => {
		if (mr !== r) throw Error("Your session changed.");
		if (!e?.access_token) throw Error("Unable to connect to the public demo.");
		return Br = {
			...e,
			expiresAt: Date.now() + Number(e.expires_in) * 1e3
		}, Br;
	}).finally(() => {
		mr === r && (Vr = null);
	}), await Vr), mr !== r) throw Error("Your session changed.");
	let i = await wr(e, t, n, Br.access_token, zr);
	if (mr !== r) throw Error("Your session changed.");
	return i;
}
var Ur = /* @__PURE__ */ new Map();
async function Wr(e) {
	let t = mr, n = I.version + ":" + e.id;
	return Ur.has(n) || Ur.set(n, (async () => {
		if (e.kind === "twin") {
			let t = (await Hr("/v1/avatars?partnerID=demo-site&inheritpartner=true&inheritdefault=true")).avatars?.find((t) => t.name.toLowerCase() === e.name.toLowerCase());
			if (t) return {
				...e,
				id: t.id
			};
		}
		let n = await fetch(e.url);
		if (!n.ok) throw Error("Your photo could not be connected to this collection.");
		let r = await n.blob();
		if (mr !== t) throw Error("Your session changed.");
		let i = new FormData();
		i.append("user_image", r, "profile.jpg"), i.append("source", "web-sdk"), i.append("is_uploaded", "true");
		let a = await Hr("/v2/store-experience/user-images", "POST", i);
		return {
			...e,
			id: a.id
		};
	})().catch((e) => {
		throw Ur.delete(n), e;
	})), Ur.get(n);
}
async function Gr(e, t, n, r, i) {
	let a = I.version, o = await Wr(t);
	if (I.version !== a) throw Error("Your profile changed.");
	let s = await Hr(`/${r ? "v3.1" : "v3"}/store-experience/tryon`, "POST", {
		garment_set: { garments: e.map((e) => ({ garment_id: e })) },
		partner_id: cr,
		image_id: o.id,
		source: "web-sdk",
		no_remove_background: !1,
		...r && i ? {
			size: r,
			base_size: i
		} : {}
	}), c = await Kr("/v1/user-assets/tryon/" + encodeURIComponent(s.request_id), n, (e) => e.status === "COMPLETE", (e) => e.status === "FAILED");
	if (I.version !== a) throw Error("Your profile changed. Create a new view.");
	if (!c.image?.url) throw Error("No image was returned. Please retry your look.");
	return c;
}
async function Kr(e, t, n, r) {
	let i = Date.now();
	for (; !t.aborted;) {
		let t = await Hr(e);
		if (r(t)) throw Error("This personal view is temporarily unavailable.");
		if (n(t)) return t;
		if (Date.now() - i > 18e4) throw Error("This is taking longer than expected.");
		await new Promise((e) => setTimeout(e, 2e3));
	}
	throw Error("Cancelled");
}
async function qr(e, t, n) {
	let r = await Hr("/v2/store-experience/sizing", "POST", {
		garment_id: e,
		height_centimeters: t.height,
		weight_kilograms: t.weight,
		body_type: t.bodyType,
		source: "web-sdk"
	});
	return Kr("/v1/user-assets/sizing/" + encodeURIComponent(r.request_id), n, (e) => !!e.sizing || [e.status, e.result].some((e) => e === "COMPLETE" || e === "SUCCESS" || /^\d{4}$/.test(e || "")), (e) => [e.status, e.result].some((e) => [
		"FAILED",
		"FAILURE",
		"ERROR"
	].includes((e || "").toUpperCase())));
}
async function Jr(e, t, n, r, i) {
	if (!Lr()) throw Error("Detailed fit advice requires the connected preview.");
	return Er("/api/size-recommendation/garment/" + encodeURIComponent(e), "POST", {
		profile: {
			gender: t.bodyType === "Masculine" ? "male" : "female",
			height_cm: t.height,
			weight_kg: t.weight
		},
		garment: {
			name: n,
			category: r
		},
		available_sizes: i
	}, "");
}
//#endregion
//#region src/always-on/image-readiness.ts
function Yr(e, t = 15e3) {
	return new Promise((n, r) => {
		if (!e) {
			r(/* @__PURE__ */ Error("No image was returned. Please retry your look."));
			return;
		}
		let i = new Image(), a = setTimeout(() => o(/* @__PURE__ */ Error("Your image could not be loaded. Please retry.")), t);
		function o(e) {
			clearTimeout(a), i.onload = null, i.onerror = null, e ? r(e) : n();
		}
		i.onload = () => i.naturalWidth ? o() : o(/* @__PURE__ */ Error("This image is empty. Please retry.")), i.onerror = () => o(/* @__PURE__ */ Error("Your image could not be loaded. Please retry.")), i.src = e;
	});
}
//#endregion
//#region src/always-on/preview-job.ts
async function Xr(e, t = 21e4) {
	let n;
	try {
		return await Promise.race([Promise.resolve().then(e), new Promise((e, r) => {
			n = setTimeout(() => r(/* @__PURE__ */ Error("This preview took too long. Please retry your look.")), t);
		})]);
	} finally {
		clearTimeout(n);
	}
}
//#endregion
//#region src/always-on/presigned.ts
var Zr = 6e4, Qr = (e) => {
	let t = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(e);
	if (!t) return null;
	let [, n, r, i, a, o, s] = t;
	return Date.UTC(Number(n), Number(r) - 1, Number(i), Number(a), Number(o), Number(s));
}, $r = (e) => {
	if (!e) return !1;
	try {
		let t = new URL(e), n = t.searchParams.get("X-Amz-Date"), r = t.searchParams.get("X-Amz-Expires");
		if (!n || !r) return !1;
		let i = Qr(n);
		return i !== null && Date.now() > i + Number(r) * 1e3 - Zr;
	} catch {
		return !1;
	}
}, ei = (e, t, n) => {
	let r = e.indexOf(t), i = e.indexOf(n);
	if (r === -1 || i === -1) return null;
	let a = r - i;
	return a <= -2 ? {
		label: "Tight",
		tone: "tight"
	} : a === -1 ? {
		label: "Snug",
		tone: "snug"
	} : a === 0 ? {
		label: "Best fit",
		tone: "best"
	} : a === 1 ? {
		label: "Relaxed",
		tone: "relaxed"
	} : {
		label: "Oversized",
		tone: "over"
	};
}, ti = /^(os|one[\s-]?size|o\/s)$/i, ni = (e) => e.length > 0 && e.every((e) => ti.test(e.trim())), ri = (e) => ti.test(e.trim()) ? "One size" : e, ii = {
	XXS: ["00"],
	XS: ["0", "2"],
	S: ["4", "6"],
	M: ["8", "10"],
	L: ["12", "14"],
	XL: ["16", "18"],
	XXL: ["20", "22"]
}, ai = (e) => /^\d+$/.test(e.trim()), oi = (e) => e.trim().toUpperCase(), si = (e, t) => {
	let n = oi(e), r = t.find((e) => oi(e) === n);
	if (r) return r;
	if (t.length > 0 && t.every(ai) && ii[n]) {
		let e = [...ii[n]].reverse();
		for (let n of e) {
			let e = t.find((e) => oi(e) === n);
			if (e) return e;
		}
		return null;
	}
	if (t.length > 0 && t.every((e) => !ai(e)) && ai(n)) {
		let e = Object.keys(ii).find((e) => ii[e].includes(n));
		return e ? t.find((t) => oi(t) === e) ?? null : null;
	}
	return null;
}, ci = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"2XL",
	"3XL"
], li = {
	XXL: "2XL",
	XXXL: "3XL"
}, ui = (e) => e === "00" || /^[1-9]?\d$/.test(e), di = (e) => {
	let t = oi(e);
	if (ai(t)) return ui(t) ? t : null;
	let n = li[t] ?? t;
	return ci.includes(n) ? n : null;
}, fi = (e, t) => {
	let n = di(e), r = di(t);
	return !n || !r || n === r || ai(n) !== ai(r) ? null : {
		size: n,
		baseSize: r
	};
};
//#endregion
//#region src/always-on/fit-preview.ts
function pi(e, t, n) {
	if (ni(e)) return {
		size: "",
		base: "",
		reason: ""
	};
	if (!n) return {
		size: "",
		base: "",
		reason: "Add your profile to discover your recommended size."
	};
	if (!e.includes(t) || !e.includes(n)) return {
		size: "",
		base: "",
		reason: "A preview is not available for this size."
	};
	if (e.indexOf(t) < e.indexOf(n)) return {
		size: "",
		base: "",
		reason: `Previews below the recommended size ${n} are not available yet.`
	};
	let r = fi(t, n), i = di(n);
	return r ? {
		size: r.size,
		base: r.baseSize,
		reason: ""
	} : t === n && i ? {
		size: i,
		base: i,
		reason: ""
	} : {
		size: "",
		base: "",
		reason: "Visual previews for this sizing system are not available yet."
	};
}
function mi(e, t, n, r) {
	if (t === n) return "Recommended";
	let i = r?.sizes.find((e) => e.size === t)?.zones.filter((e) => /waist|hip|bust|chest/.test(e.point)).map((e) => e.verdict) || [];
	if (i.includes("too_small")) return "Tight fit";
	if (i.includes("snug")) return "Snug fit";
	if (i.includes("loose")) return "Oversized fit";
	if (i.includes("room")) return "Relaxed fit";
	if (i.includes("true")) return "Also fits";
	let a = ei(e, t, n);
	return a ? a.label + " fit" : "";
}
//#endregion
//#region src/always-on/personalization.ts
var hi = /* @__PURE__ */ new Set(), gi = { status: "idle" }, _i = Gn, vi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Set(), bi = { status: "loading" }, xi = Promise.resolve(), Si = () => yi.forEach((e) => e()), Ci = () => {
	let e = vr();
	return e.identity ? e.version + ":" + e.identity.id : "";
}, wi = (e, t = "", n = "", r = "dev") => Ci() + ":" + r + ":image:" + e.join("|") + ":" + t + ":" + n, Ti = (e) => _i.get(wi([e]))?.url;
function Ei(e, t, n) {
	if (!e || vi.has(e) || _i.has(e) && _i.get(e)?.status !== "loading" && !$r(_i.get(e)?.url) && (!_i.get(e)?.url || hi.has(_i.get(e).url))) return;
	_i.set(e, { status: "loading" }), Si();
	let r = h(), i = window.PARTNER_DEMO?.theme === "ch" && e.includes(":image:"), a = () => Xr(t), o = (i ? xi.then(a) : a()).then((t) => {
		n === Ci() && (_i.set(e, {
			...t,
			status: "ready"
		}), Kn());
	}).catch((t) => {
		n === Ci() && _i.set(e, {
			status: "error",
			error: t instanceof Error ? t.message : "Temporarily unavailable."
		});
	}).finally(() => {
		n !== Ci() && _i.get(e)?.status === "loading" && _i.delete(e), r(), vi.delete(e), Si();
	});
	vi.set(e, o), i && (xi = o.catch(() => {}));
}
function Di(e) {
	return (0, d.useSyncExternalStore)((e) => (yi.add(e), () => {
		yi.delete(e);
	}), () => e ? _i.get(e)?.status === "ready" && $r(_i.get(e)?.url) ? bi : _i.get(e) || gi : gi);
}
function Oi(e, t = "", n = "", r = 0) {
	let i = _r(), a = i.identity, o = a ? i.version + ":" + a.id : "", s = e.map((e) => e.garmentId), c = a && s.length > 0 ? o + ":" + (e[0]?.environment || "dev") + ":image:" + s.join("|") + ":" + t + ":" + n : "", l = Di(c), u = _i.get(c)?.status === "ready" && $r(_i.get(c)?.url), f = (0, d.useMemo)(() => Qn(a?.id || ""), [
		c,
		r,
		u
	]);
	return (0, d.useEffect)(() => {
		if (!a || !s.length) return;
		r > 0 && _i.get(c)?.status === "error" && _i.delete(c);
		let i = _i.get(c), l = setTimeout(() => Ei(c, async () => {
			if (o !== Ci()) throw Error("Profile changed");
			if (i?.requestId && $r(i.url)) {
				let e = await (i.environment === "prod" ? Hr : Er)("/v1/user-assets/tryon/" + encodeURIComponent(i.requestId));
				if (!e.image?.url || $r(e.image.url)) throw Error("This preview link is unavailable. Please retry your look.");
				return await Yr(e.image.url), hi.add(e.image.url), {
					...i,
					url: e.image.url
				};
			}
			if (i?.url && i.status === "ready") try {
				return await Yr(i.url), hi.add(i.url), i;
			} catch {
				if (i.requestId) {
					let e = await (i.environment === "prod" ? Hr : Er)("/v1/user-assets/tryon/" + encodeURIComponent(i.requestId));
					if (e.image?.url) return await Yr(e.image.url), hi.add(e.image.url), {
						...i,
						url: e.image.url
					};
				}
				throw Error("Your saved preview could not be loaded. Retry to create a fresh view.");
			}
			if (e.some((t) => (t.environment || "dev") !== (e[0].environment || "dev"))) throw Error("Choose pieces from the same collection for a combined look.");
			let r = e[0].environment === "prod" ? await Gr(s, a, new AbortController().signal, t || void 0, n || void 0) : await Fr(s, a, new AbortController().signal, "front", t || void 0, n || void 0);
			if (!r.image?.url) throw Error("No image was returned. Please retry your look.");
			return await Yr(r.image.url), hi.add(r.image.url), o === Ci() && rr({
				id: c,
				kind: t ? "sizing" : "tryon",
				identityId: a.id,
				identityName: a.name,
				pieces: e.map((e) => ({
					id: e.id,
					name: e.name,
					image: e.image
				})),
				images: [r.image.url],
				size: t || void 0,
				recommended: n || void 0
			}, f), {
				url: r.image.url,
				requestId: r.request_id,
				environment: e[0].environment || "dev"
			};
		}, o), t || s.length > 1 ? 450 : 0);
		return () => clearTimeout(l);
	}, [
		c,
		r,
		u
	]), l;
}
function ki(e) {
	let t = _r(), n = t.identity, r = n ? t.version + ":" + n.id : "", i = n && e && !ni(e.sizes) ? r + ":" + (e.environment || "dev") + ":fit:" + e.garmentId + (window.PARTNER_DEMO ? ":simulation-v1" : "") : "", a = Di(i), o = (0, d.useMemo)(() => Qn(n?.id || ""), [i]);
	return (0, d.useEffect)(() => {
		n && e && !ni(e.sizes) && Ei(i, async () => {
			if (window.PARTNER_DEMO) return {
				recommended: si(n.usualSize || "M", e.sizes) || e.sizes[Math.floor(e.sizes.length / 2)],
				map: null,
				recommendationSource: "simulated",
				fitNote: "Simulated demo recommendation, based on the selected model’s reference size. Not a calibrated garment-specific fit prediction."
			};
			if (!n.height || !n.weight) throw Error("Add height and weight to get size guidance.");
			let [t, a, s] = await Promise.allSettled([
				(e.environment === "prod" ? qr : Ir)(e.garmentId, n, new AbortController().signal),
				e.environment !== "prod" && Lr() ? Rr(e.garmentId, n, e.name, e.category, e.sizes) : Promise.resolve(null),
				n.kind === "photo" && e.environment !== "prod" && Lr() ? Jr(e.garmentId, n, e.name, e.category, e.sizes) : Promise.resolve(null)
			]), c = a.status === "fulfilled" ? a.value : null, l = s.status === "fulfilled" ? s.value : null, u = l?.size || c?.recommended, d = t.status === "fulfilled" ? t.value.sizing?.size : void 0, f = (t) => e.sizes.find((e) => e.toUpperCase() === t?.toUpperCase()), p = f(u) || f(d) || (n.kind === "twin" && n.usualSize ? si(n.usualSize, e.sizes) : null), m = f(u) ? "chart" : f(d) ? "engine" : "twin";
			if (!p || !e.sizes.includes(p)) throw Error("Personal sizing isn’t available for this piece yet.");
			return r === Ci() && rr({
				id: i,
				kind: "sizing",
				identityId: n.id,
				identityName: n.name,
				pieces: [{
					id: e.id,
					name: e.name,
					image: e.image
				}],
				images: [],
				recommended: p,
				guidance: Ai(c, p).map((e) => e.point + ": " + e.label).join(" · ")
			}, o), {
				recommended: p,
				map: c,
				recommendationSource: m,
				fitNote: l?.fit_note
			};
		}, r);
	}, [i]), a;
}
function Ai(e, t) {
	return (e?.sizes.find((e) => e.size === t)?.zones || []).filter((e) => e.verdict).map((e) => ({
		point: e.point.replace(/_/g, " "),
		label: {
			true: "True to size",
			snug: "Close fit",
			room: "Room to move",
			loose: "Relaxed fit",
			too_small: "May feel tight",
			short: "Shorter length",
			long: "Longer length"
		}[e.verdict] || "Fit guidance"
	}));
}
function ji(e, t = "", n = 0) {
	let { identity: r } = _r(), i = ki(e), a = ni(e.sizes), o = t || i.recommended || (a ? e.sizes[0] : ""), s = pi(e.sizes, o, i.recommended || ""), c = pi(e.sizes, i.recommended || "", i.recommended || ""), l = e.environment === "prod" || window.PARTNER_DEMO?.theme === "ch", u = l || a || !r?.height || !r?.weight || !t && [
		"idle",
		"loading",
		"error"
	].includes(i.status), d = Oi(r && (u || i.recommended && !c.reason) ? [e] : [], u ? "" : c.size, u ? "" : c.base, n), f = Oi(r && !l && !s.reason && o !== i.recommended && !a && d.status === "ready" ? [e] : [], s.size, s.base, n);
	return u ? {
		...d,
		reason: "",
		selected: a ? o : "",
		fitNote: l ? "Personal try-on preview. Size changes aren’t visualized for this piece yet." : void 0
	} : r ? i.status === "idle" || i.status === "loading" ? {
		status: "loading",
		reason: "",
		selected: o
	} : s.reason ? {
		...gi,
		reason: s.reason,
		selected: o
	} : o === i.recommended || d.status === "error" ? {
		...d,
		reason: "",
		selected: o
	} : d.status === "ready" ? {
		...f,
		status: f.status === "idle" ? "loading" : f.status,
		reason: "",
		selected: o
	} : {
		status: "loading",
		reason: "",
		selected: o
	} : {
		...gi,
		reason: "Add your profile to discover your fit.",
		selected: o
	};
}
//#endregion
//#region src/always-on/PersonalViews.tsx
var Mi = (e, t, n) => Ti(e);
function Ni({ product: e, selectedSize: t = "" }) {
	let [n, r] = (0, d.useState)(0), { identity: i } = _r(), a = ji(e, t, n);
	return i ? /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "automatic-view",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "preview-person-chip",
				children: [i.name, a.selected ? ` · Size ${a.selected}` : ""]
			}),
			a.url ? /* @__PURE__ */ (0, y.jsx)(E, {
				src: a.url,
				alt: `${i.name} wearing ${e.name}`
			}, a.url) : /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "generation-state",
				role: "status",
				children: [
					!a.reason && a.status !== "error" && window.PARTNER_DEMO && /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("img", {
						className: "partner-loading-photo",
						src: e.model,
						alt: ""
					}), /* @__PURE__ */ (0, y.jsx)(b, { label: "Generating your look…" })] }),
					/* @__PURE__ */ (0, y.jsx)("h3", { children: a.reason ? "Size preview unavailable" : a.status === "error" ? "Your preview couldn’t load" : "Generating your look…" }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: a.reason || a.error || `Preparing ${e.name} on ${i.name}.` }),
					a.status === "error" && /* @__PURE__ */ (0, y.jsx)("button", {
						className: "secondary",
						onClick: () => r((e) => e + 1),
						children: "Retry preview"
					}),
					a.reason?.includes("profile") && /* @__PURE__ */ (0, y.jsx)(On, {
						className: "text-link",
						to: "/account",
						children: "Add measurements for sizing"
					})
				]
			}),
			/* @__PURE__ */ (0, y.jsx)("p", {
				className: "preview-disclosure",
				children: "AI-generated preview · Appearance and fit may vary."
			})
		]
	}) : /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "personal-locked",
		children: [
			/* @__PURE__ */ (0, y.jsx)("h2", { children: "See this piece on you." }),
			/* @__PURE__ */ (0, y.jsx)("p", { children: "Add your photo or use a Twin to begin." }),
			/* @__PURE__ */ (0, y.jsx)(On, {
				className: "primary",
				to: "/account",
				children: "Add your photo or use a Twin"
			})
		]
	});
}
//#endregion
//#region src/partner-demo/GarmentFitPreview.tsx
function Pi(e, t, n = "6") {
	let r = Math.max(0, e.indexOf(n));
	return Math.max(-.13, Math.min(.18, (Math.max(0, e.indexOf(t)) - r) * .035));
}
function Fi({ product: e, src: t, size: n, zoom: r = 1, reference: i = "6" }) {
	let a = (0, d.useRef)(null), [o, s] = (0, d.useState)(!1), c = Pi(e.sizes, n, i);
	return (0, d.useEffect)(() => {
		let n = !0;
		s(!1);
		let r = new Image();
		return r.onload = () => {
			if (!n || !a.current) return;
			let t = a.current, i = r.naturalWidth, o = r.naturalHeight;
			t.width = i, t.height = o;
			let l = t.getContext("2d");
			if (!l) {
				s(!0);
				return;
			}
			l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high", l.drawImage(r, 0, 0);
			let u = e.category === "Bottoms", d = u ? .48 : .27, f = u ? .8 : e.category === "Outerwear" ? .64 : .6, p = Math.floor(o * d), m = Math.ceil(o * f), h = (p + m) / 2, g = (m - p) / 2, _ = Math.max(4, Math.round(i / 96)), v = i * .5, y = i * (u ? .19 : .225);
			for (let e = p; e < m; e += 2) {
				let t = Math.abs((e + 1 - h) / g), n = Math.max(0, 1 - t * t) ** 1.5, a = (e) => e + c * (e - v) * Math.exp(-(((e - v) / y) ** 4)) * n;
				for (let t = 0; t < i; t += _) {
					let n = Math.min(_, i - t), s = a(t), c = a(t + n);
					l.drawImage(r, t, e, n, Math.min(2, o - e), s, e, c - s + .35, Math.min(2, o - e));
				}
			}
			t.dataset.ready = "true";
		}, r.onerror = () => {
			n && s(!0);
		}, r.src = t, () => {
			n = !1, r.onload = null, r.onerror = null;
		};
	}, [
		t,
		c,
		e.category
	]), /* @__PURE__ */ (0, y.jsx)("div", {
		className: "ch-local-fit-image",
		"data-size": n,
		"data-fit-delta": c,
		"data-region": e.category === "Bottoms" ? "skirt" : "torso",
		style: { transform: `scale(${r})` },
		children: o ? /* @__PURE__ */ (0, y.jsx)("img", {
			src: t,
			alt: e.name + " — reference photograph"
		}) : /* @__PURE__ */ (0, y.jsx)("canvas", {
			ref: a,
			role: "img",
			"aria-label": `${e.name} — illustrative size ${n}, fixed model and garment silhouette mockup`
		})
	});
}
//#endregion
//#region src/partner-demo/CarolinaFit.tsx
function Ii({ product: e, size: t, onSize: n }) {
	let [r, i] = (0, d.useState)("2"), [a, o] = (0, d.useState)(t || "8"), [s, c] = (0, d.useState)(1);
	(0, d.useEffect)(() => {
		t && o(t);
	}, [t]);
	let l = Mi(e.garmentId), u = l || e.gallery?.[1] || e.model;
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: "ch-fit",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-fit-heading",
				children: [
					/* @__PURE__ */ (0, y.jsx)("small", { children: "ALWAYS ON · VISUAL FIT STUDY" }),
					/* @__PURE__ */ (0, y.jsx)("h2", { children: "One piece. Two perspectives." }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: "Compare a closer silhouette with a more relaxed one, on the same model." })
				]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-fit-toolbar",
				children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "US sizing · Same model, pose and framing" }), /* @__PURE__ */ (0, y.jsxs)("label", { children: [
					"Zoom ",
					/* @__PURE__ */ (0, y.jsx)("input", {
						"aria-label": "Fit comparison zoom",
						type: "range",
						min: "1",
						max: "2",
						step: "0.1",
						value: s,
						onChange: (e) => c(Number(e.target.value))
					}),
					/* @__PURE__ */ (0, y.jsxs)("span", { children: [s.toFixed(1), "×"] })
				] })]
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "ch-fit-grid",
				children: [{
					name: "Left",
					value: r,
					set: i
				}, {
					name: "Right",
					value: a,
					set: o
				}].map((r) => {
					let i = Pi(e.sizes, r.value);
					return /* @__PURE__ */ (0, y.jsxs)("article", {
						className: t === r.value ? "is-selected" : "",
						children: [
							/* @__PURE__ */ (0, y.jsxs)("header", { children: [/* @__PURE__ */ (0, y.jsxs)("label", { children: ["SIZE ", /* @__PURE__ */ (0, y.jsx)("select", {
								"aria-label": r.name + " simulated size",
								value: r.value,
								onChange: (e) => r.set(e.target.value),
								children: e.sizes.map((e) => /* @__PURE__ */ (0, y.jsx)("option", { children: e }, e))
							})] }), /* @__PURE__ */ (0, y.jsx)("span", {
								className: "ch-fit-badge",
								children: i < 0 ? "Closer silhouette" : i > 0 ? "More relaxed silhouette" : "Reference silhouette"
							})] }),
							/* @__PURE__ */ (0, y.jsx)("div", {
								className: "ch-fit-canvas",
								"data-size": r.value,
								"data-scale": 1 + i,
								children: /* @__PURE__ */ (0, y.jsx)(Fi, {
									product: e,
									src: u,
									size: r.value,
									zoom: s
								})
							}),
							/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "ch-fit-note",
								children: [/* @__PURE__ */ (0, y.jsx)("strong", { children: i < 0 ? "A neater line" : i > 0 ? "A little more ease" : "The reference view" }), /* @__PURE__ */ (0, y.jsx)("span", { children: e.category === "Bottoms" ? "Across the hips and skirt silhouette" : "Across the body of the garment" })]
							}),
							/* @__PURE__ */ (0, y.jsx)("button", {
								className: "secondary",
								"aria-pressed": t === r.value,
								onClick: () => n(r.value),
								children: t === r.value ? "Selected · Size " + r.value : "Choose size " + r.value
							})
						]
					}, r.name);
				})
			}),
			/* @__PURE__ */ (0, y.jsxs)("p", {
				className: "ch-fit-disclosure",
				children: [
					"Illustrative fit study: only the garment region is reshaped. ",
					l ? "Based on your AI try-on." : "Based on the brand model photograph.",
					" These are optical mockups, not generated size-specific fits or calibrated fit predictions."
				]
			})
		]
	});
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var Li = Object.defineProperty, Ri = (e, t) => Li(e, "name", {
	value: t,
	configurable: !0
}), zi = !!(typeof window < "u" && window.document && window.document.createElement);
function Bi(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Ri(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Ri(Bi, "composeEventHandlers");
function Vi(e) {
	if (!zi) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Ri(Vi, "getOwnerWindow");
function Hi(e) {
	if (!zi) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Ri(Hi, "getOwnerDocument");
function Ui(e, t = !1) {
	let { activeElement: n } = Hi(e);
	if (!n?.nodeName) return null;
	if (Wi(n) && n.contentDocument) return Ui(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Hi(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Ri(Ui, "getActiveElement");
function Wi(e) {
	return e.tagName === "IFRAME";
}
Ri(Wi, "isFrame");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Gi = Object.defineProperty, Ki = (e, t) => Gi(e, "name", {
	value: t,
	configurable: !0
});
function qi(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Ki(qi, "setRef");
function Ji(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = qi(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : qi(e[t], null);
			}
		};
	};
}
Ki(Ji, "composeRefs");
function Yi(...e) {
	return d.useCallback(Ji(...e), e);
}
Ki(Yi, "useComposedRefs");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var Xi = Object.defineProperty, Zi = (e, t) => Xi(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Qi(e, t) {
	let n = d.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ Zi((e) => {
		let { children: t, ...r } = e, i = d.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, y.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = d.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return Zi(i, "useContext"), [r, i];
}
Zi(Qi, "createContext");
// @__NO_SIDE_EFFECTS__
function $i(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = d.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ Zi((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = d.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, y.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = d.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return Zi(s, "useContext"), [o, s];
	}
	Zi(r, "createContext");
	let i = /* @__PURE__ */ Zi(() => {
		let t = n.map((e) => d.createContext(e));
		return /* @__PURE__ */ Zi(function(n) {
			let r = n?.[e] || t;
			return d.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, ea(i, ...t)];
}
Zi($i, "createContextScope");
function ea(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ Zi(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ Zi(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return d.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
Zi(ea, "composeContextScopes");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var ta = globalThis?.document ? d.useLayoutEffect : () => {}, na = Object.defineProperty, ra = (e, t) => na(e, "name", {
	value: t,
	configurable: !0
}), ia = d.useId || (() => void 0), L = 0;
function R(e) {
	let [t, n] = d.useState(ia());
	return ta(() => {
		e || n((e) => e ?? String(L++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
ra(R, "useId");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-use-effect-event@0.0.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var aa = Object.defineProperty, oa = (e, t) => aa(e, "name", {
	value: t,
	configurable: !0
}), sa = d.useEffectEvent, ca = d.useInsertionEffect;
function la(e) {
	if (typeof sa == "function") return sa(e);
	let t = d.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof ca == "function" ? ca(() => {
		t.current = e;
	}) : ta(() => {
		t.current = e;
	}), d.useMemo(() => ((...e) => t.current?.(...e)), []);
}
oa(la, "useEffectEvent");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var ua = Object.defineProperty, da = (e, t) => ua(e, "name", {
	value: t,
	configurable: !0
}), fa = d.useInsertionEffect || ta;
function pa({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ da(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = ma({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, d.useCallback((t) => {
		if (s) {
			let n = ha(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
da(pa, "useControllableState");
function ma({ defaultProp: e, onChange: t }) {
	let [n, r] = d.useState(e), i = d.useRef(n), a = d.useRef(t);
	return fa(() => {
		a.current = t;
	}, [t]), d.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
da(ma, "useUncontrolledState");
function ha(e) {
	return typeof e == "function";
}
da(ha, "isFunction");
var ga = Symbol("RADIX:SYNC_STATE");
function _a(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = la(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [f, p] = d.useReducer((t, n) => {
		if (n.type === ga) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), m = f.state, h = d.useRef(m);
	d.useEffect(() => {
		h.current !== m && (h.current = m, c || l(m));
	}, [
		m,
		h,
		c
	]);
	let g = d.useMemo(() => i === void 0 ? f : {
		...f,
		state: i
	}, [f, i]);
	return d.useEffect(() => {
		c && !Object.is(i, f.state) && p({
			type: ga,
			state: i
		});
	}, [
		i,
		f.state,
		c
	]), [g, p];
}
da(_a, "useControllableStateReducer");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react-dom@19.3.0_react@19.3.0/node_modules/react-dom/cjs/react-dom.production.js
var va = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), ya = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = va();
})), ba = /* @__PURE__ */ c(ya(), 1), xa = Object.defineProperty, Sa = (e, t) => xa(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ca(e) {
	let t = d.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		ja(r) && typeof Fa == "function" && (r = Fa(r._payload)), d.Children.forEach(r, (e) => {
			if (ka(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				ja(n) && typeof Fa == "function" && (n = Fa(n._payload)), a = Ea(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = d.cloneElement(a, void 0, s) : !o && d.Children.count(r) === 1 && d.isValidElement(r) && (a = r);
		let c = a ? Oa(a) : void 0, l = Yi(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? Pa(e) : Na(e));
			return r;
		}
		let u = Da(i, a.props ?? {});
		return a.type !== d.Fragment && (u.ref = n ? l : c), d.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
Sa(Ca, "createSlot");
var wa = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ta(e) {
	let t = /* @__PURE__ */ Sa((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = wa, t;
}
Sa(Ta, "createSlottable");
var Ea = /* @__PURE__ */ Sa((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return d.isValidElement(t) ? d.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return d.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Da(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
Sa(Da, "mergeProps");
function Oa(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Sa(Oa, "getElementRef");
function ka(e) {
	return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wa;
}
Sa(ka, "isSlottable");
var Aa = Symbol.for("react.lazy");
function ja(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Aa && "_payload" in e && Ma(e._payload);
}
Sa(ja, "isLazyComponent");
function Ma(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Sa(Ma, "isPromiseLike");
var Na = /* @__PURE__ */ Sa((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Pa = /* @__PURE__ */ Sa((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Fa = d.use, Ia = Object.defineProperty, La = (e, t) => Ia(e, "name", {
	value: t,
	configurable: !0
}), Ra = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ Ca(`Primitive.${t}`), r = d.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, y.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function za(e, t) {
	e && ba.flushSync(() => e.dispatchEvent(t));
}
La(za, "dispatchDiscreteCustomEvent");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var Ba = Object.defineProperty, Va = (e, t) => Ba(e, "name", {
	value: t,
	configurable: !0
});
function Ha(e) {
	let t = d.useRef(e);
	return d.useEffect(() => {
		t.current = e;
	}), d.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Va(Ha, "useCallbackRef");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.19_@types+react-dom@19.3.0_@types+react@19.3.0__@_c9641557e0183ada0688bd7873e8a9d9/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Ua = Object.defineProperty, Wa = (e, t) => Ua(e, "name", {
	value: t,
	configurable: !0
}), Ga = "dismissableLayer.update", Ka = "dismissableLayer.pointerDownOutside", qa = "dismissableLayer.focusOutside", Ja, Ya = d.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), Xa = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ Wa(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = d.useContext(Ya), [f, p] = d.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = d.useState({}), g = Yi(t, p), _ = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = v ? _.indexOf(v) : -1, x = f ? _.indexOf(f) : -1, S = u.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = d.useRef(!1), T = $a((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: m,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: w,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: d.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return C && !t;
		}, [u.branches, C])
	}), ee = eo((e) => {
		if (r && w.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, m), E = f ? x === _.length - 1 : !1, D = Ha((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return d.useEffect(() => {
		if (E) return m.addEventListener("keydown", D, { capture: !0 }), () => m.removeEventListener("keydown", D, { capture: !0 });
	}, [
		m,
		E,
		D
	]), d.useEffect(() => {
		if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ja = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), to(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(f), u.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Ja));
		};
	}, [
		f,
		m,
		n,
		u
	]), d.useEffect(() => () => {
		f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), to());
	}, [f, u]), d.useEffect(() => {
		let e = /* @__PURE__ */ Wa(() => h({}), "handleUpdate");
		return document.addEventListener(Ga, e), () => document.removeEventListener(Ga, e);
	}, []), /* @__PURE__ */ (0, y.jsx)(Ra.div, {
		...l,
		ref: g,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: Bi(e.onFocusCapture, ee.onFocusCapture),
		onBlurCapture: Bi(e.onBlurCapture, ee.onBlurCapture),
		onPointerDownCapture: Bi(e.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function Za() {
	let e = d.useContext(Ya), [t, n] = d.useState(null);
	return d.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
Wa(Za, "useDismissableLayerSurface");
var Qa = /* @__PURE__ */ Wa(() => !0, "IS_TRUE");
function $a(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = Qa } = t, s = Ha(e), c = d.useRef(!1), l = d.useRef(!1), u = d.useRef(/* @__PURE__ */ new Map()), f = d.useRef(() => {});
	return d.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		Wa(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		Wa(t, "isOutsideInteractionIntercepted");
		function d(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && f.current();
			}, 0);
		}
		Wa(d, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		Wa(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Wa((a) => {
			if (a.target && !c.current) {
				let d = function() {
					n.removeEventListener("click", f.current);
					let r = t();
					e(), r || no(Ka, s, p, { discrete: !0 });
				};
				if (Wa(d, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", f.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? d() : (n.removeEventListener("click", f.current), f.current = d, n.addEventListener("click", f.current, { once: !0 }));
			} else n.removeEventListener("click", f.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, d, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", f.current);
			for (let e of h) n.removeEventListener(e, d, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ Wa(() => c.current = !0, "onPointerDownCapture") };
}
Wa($a, "usePointerDownOutside");
function eo(e, t = globalThis?.document) {
	let n = Ha(e), r = d.useRef(!1);
	return d.useEffect(() => {
		let e = /* @__PURE__ */ Wa((e) => {
			e.target && !r.current && no(qa, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ Wa(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Wa(() => r.current = !1, "onBlurCapture")
	};
}
Wa(eo, "useFocusOutside");
function to() {
	let e = new CustomEvent(Ga);
	document.dispatchEvent(e);
}
Wa(to, "dispatchUpdate");
function no(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? za(i, a) : i.dispatchEvent(a);
}
Wa(no, "handleAndDispatchCustomEvent");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_91a0a1d715213a5ab8359e0114beaafa/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var ro = Object.defineProperty, io = (e, t) => ro(e, "name", {
	value: t,
	configurable: !0
}), ao = "focusScope.autoFocusOnMount", oo = "focusScope.autoFocusOnUnmount", so = {
	bubbles: !1,
	cancelable: !0
}, co = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ io(function(e, t) {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = d.useState(null), l = Ha(i), u = Ha(a), f = d.useRef(null), p = Yi(t, c), m = d.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	d.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (m.paused || !s) return;
				let t = e.target;
				s.contains(t) ? f.current = t : go(f.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || go(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && go(s);
			};
			io(e, "handleFocusIn"), io(t, "handleFocusOut"), io(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		m.paused
	]), d.useEffect(() => {
		if (s) {
			_o.add(m);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(ao, so);
				s.addEventListener(ao, l), s.dispatchEvent(t), t.defaultPrevented || (lo(bo(fo(s)), { select: !0 }), document.activeElement === e && go(s));
			}
			return () => {
				s.removeEventListener(ao, l), setTimeout(() => {
					let t = new CustomEvent(oo, so);
					s.addEventListener(oo, u), s.dispatchEvent(t), t.defaultPrevented || go(e ?? document.body, { select: !0 }), s.removeEventListener(oo, u), _o.remove(m);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		m
	]);
	let h = d.useCallback((e) => {
		if (!n && !r || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = uo(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && go(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && go(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		m.paused
	]);
	return /* @__PURE__ */ (0, y.jsx)(Ra.div, {
		tabIndex: -1,
		...o,
		ref: p,
		onKeyDown: h
	});
}, "FocusScope"));
function lo(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (go(r, { select: t }), document.activeElement !== n) return;
}
io(lo, "focusFirst");
function uo(e) {
	let t = fo(e);
	return [po(t, e), po(t.reverse(), e)];
}
io(uo, "getTabbableEdges");
function fo(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ io((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
io(fo, "getTabbableCandidates");
function po(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : mo(r, { upTo: t }))) return r;
}
io(po, "findVisible");
function mo(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
io(mo, "isHidden");
function ho(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
io(ho, "isSelectableInput");
function go(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && ho(e) && t && e.select();
	}
}
io(go, "focus");
var _o = vo();
function vo() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = yo(e, t), e.unshift(t);
		},
		remove(t) {
			e = yo(e, t), e[0]?.resume();
		}
	};
}
io(vo, "createFocusScopesStack");
function yo(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
io(yo, "arrayRemove");
function bo(e) {
	return e.filter((e) => e.tagName !== "A");
}
io(bo, "removeLinks");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-portal@1.1.17_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_484564a2ec4329649f69b712999578b8/node_modules/@radix-ui/react-portal/dist/index.mjs
var xo = Object.defineProperty, So = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ((e, t) => xo(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = d.useState(!1);
	ta(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? ba.createPortal(/* @__PURE__ */ (0, y.jsx)(Ra.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), Co = Object.defineProperty, wo = (e, t) => Co(e, "name", {
	value: t,
	configurable: !0
});
function To(e, t) {
	return d.useReducer((e, n) => t[e][n] ?? e, e);
}
wo(To, "useStateMachine");
var Eo = /* @__PURE__ */ wo((e) => {
	let { present: t, children: n } = e, r = Do(t), i = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), a = ko(r.ref, jo(i));
	return typeof n == "function" || r.isPresent ? d.cloneElement(i, { ref: a }) : null;
}, "Presence");
function Do(e) {
	let [t, n] = d.useState(), r = d.useRef(null), i = d.useRef(e), a = d.useRef("none"), o = d.useRef(void 0), [s, c] = To(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return d.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? Ao(r.current), o.current = void 0) : a.current = "none";
	}, [s]), ta(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = Ao(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), ta(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ wo((a) => {
				let o = Ao(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ wo((e) => {
				e.target === t && (a.current = Ao(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: d.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = Ao(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
wo(Do, "usePresence");
function Oo(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
wo(Oo, "setRef");
function ko(...e) {
	let t = d.useRef(e);
	return t.current = e, d.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = Oo(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : Oo(n[e], null);
			}
		};
	}, []);
}
wo(ko, "useStableComposedRefs");
function Ao(e) {
	return e?.animationName || "none";
}
wo(Ao, "getAnimationName");
function jo(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
wo(jo, "getElementRef");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Mo = Object.defineProperty, No = (e, t) => Mo(e, "name", {
	value: t,
	configurable: !0
}), Po = 0, Fo = null;
function Io(e) {
	return Lo(), e.children;
}
No(Io, "FocusGuards");
function Lo() {
	d.useEffect(() => {
		Fo ||= {
			start: Ro(),
			end: Ro()
		};
		let { start: e, end: t } = Fo;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Po++, () => {
			Po === 1 && (Fo?.start.remove(), Fo?.end.remove(), Fo = null), Po = Math.max(0, Po - 1);
		};
	}, []);
}
No(Lo, "useFocusGuards");
function Ro() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
No(Ro, "createFocusGuard");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var z = function() {
	return z = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, z.apply(this, arguments);
};
function zo(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Bo(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Vo = "right-scroll-bar-position", Ho = "width-before-scroll-bar", B = "with-scroll-bars-hidden", V = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Uo(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function Wo(e, t) {
	var n = (0, d.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Go = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Ko = /* @__PURE__ */ new WeakMap();
function qo(e, t) {
	var n = Wo(t || null, function(t) {
		return e.forEach(function(e) {
			return Uo(e, t);
		});
	});
	return Go(function() {
		var t = Ko.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Uo(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Uo(e, a);
			});
		}
		Ko.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function Jo(e) {
	return e;
}
function Yo(e, t) {
	t === void 0 && (t = Jo);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Xo(e) {
	e === void 0 && (e = {});
	var t = Yo(null);
	return t.options = z({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var Zo = function(e) {
	var t = e.sideCar, n = zo(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return d.createElement(r, z({}, n));
};
Zo.isSideCarExport = !0;
function Qo(e, t) {
	return e.useMedium(t), Zo;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var $o = Xo(), es = function() {}, ts = d.forwardRef(function(e, t) {
	var n = d.useRef(null), r = d.useState({
		onScrollCapture: es,
		onWheelCapture: es,
		onTouchMoveCapture: es
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = zo(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = qo([n, t]), w = z(z({}, x), i);
	return d.createElement(d.Fragment, null, u && d.createElement(S, {
		sideCar: $o,
		removeScrollBar: l,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: b
	}), o ? d.cloneElement(d.Children.only(s), z(z({}, w), { ref: C })) : d.createElement(y, z({}, w, {
		className: c,
		ref: C
	}), s));
});
ts.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ts.classNames = {
	fullWidth: Ho,
	zeroRight: Vo
};
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var ns = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function rs() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = ns();
	return t && e.setAttribute("nonce", t), e;
}
function is(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function as(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var os = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = rs()) && (is(t, n), as(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, ss = function() {
	var e = os();
	return function(t, n) {
		d.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, cs = function() {
	var e = ss();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, ls = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, us = function(e) {
	return parseInt(e || "", 10) || 0;
}, ds = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		us(n),
		us(r),
		us(i)
	];
}, fs = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return ls;
	var t = ds(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ps = cs(), ms = "data-scroll-locked", hs = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${B} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${ms}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Vo} {
    right: ${s}px ${r};
  }
  
  .${Ho} {
    margin-right: ${s}px ${r};
  }
  
  .${Vo} .${Vo} {
    right: 0 ${r};
  }
  
  .${Ho} .${Ho} {
    margin-right: 0 ${r};
  }
  
  body[${ms}] {
    ${V}: ${s}px;
  }
`;
}, gs = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, _s = function() {
	d.useEffect(function() {
		return document.body.setAttribute(ms, (gs() + 1).toString()), function() {
			var e = gs() - 1;
			e <= 0 ? document.body.removeAttribute(ms) : document.body.setAttribute(ms, e.toString());
		};
	}, []);
}, vs = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	_s();
	var a = d.useMemo(function() {
		return fs(i);
	}, [i]);
	return d.createElement(ps, { styles: hs(a, !t, i, n ? "" : "!important") });
}, ys = !1;
if (typeof window < "u") try {
	var bs = Object.defineProperty({}, "passive", { get: function() {
		return ys = !0, !0;
	} });
	window.addEventListener("test", bs, bs), window.removeEventListener("test", bs, bs);
} catch {
	ys = !1;
}
var xs = ys ? { passive: !1 } : !1, Ss = function(e) {
	return e.tagName === "TEXTAREA";
}, Cs = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ss(e) && n[t] === "visible");
}, ws = function(e) {
	return Cs(e, "overflowY");
}, Ts = function(e) {
	return Cs(e, "overflowX");
}, Es = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ks(e, r)) {
			var i = As(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ds = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Os = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ks = function(e, t) {
	return e === "v" ? ws(t) : Ts(t);
}, As = function(e, t) {
	return e === "v" ? Ds(t) : Os(t);
}, js = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Ms = function(e, t, n, r, i) {
	var a = js(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = As(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ks(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Ns = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ps = function(e) {
	return [e.deltaX, e.deltaY];
}, Fs = function(e) {
	return e && "current" in e ? e.current : e;
}, Is = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Ls = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Rs = 0, zs = [];
function Bs(e) {
	var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), i = d.useState(Rs++)[0], a = d.useState(cs)[0], o = d.useRef(e);
	d.useEffect(function() {
		o.current = e;
	}, [e]), d.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Bo([e.lockRef.current], (e.shards || []).map(Fs), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = d.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Ns(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Es(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Es(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Ms(h, t, e, h === "h" ? s : c, !0);
	}, []), c = d.useCallback(function(e) {
		var n = e;
		if (zs.length && zs[zs.length - 1] === a) {
			var r = "deltaY" in n ? Ps(n) : Ns(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Is(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Fs).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = d.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Vs(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = d.useCallback(function(e) {
		n.current = Ns(e), r.current = void 0;
	}, []), f = d.useCallback(function(t) {
		l(t.type, Ps(t), t.target, s(t, e.lockRef.current));
	}, []), p = d.useCallback(function(t) {
		l(t.type, Ns(t), t.target, s(t, e.lockRef.current));
	}, []);
	d.useEffect(function() {
		return zs.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, xs), document.addEventListener("touchmove", c, xs), document.addEventListener("touchstart", u, xs), function() {
			zs = zs.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, xs), document.removeEventListener("touchmove", c, xs), document.removeEventListener("touchstart", u, xs);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return d.createElement(d.Fragment, null, h ? d.createElement(a, { styles: Ls(i) }) : null, m ? d.createElement(vs, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Vs(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Hs = Qo($o, Bs), Us = d.forwardRef(function(e, t) {
	return d.createElement(ts, z({}, e, {
		ref: t,
		sideCar: Hs
	}));
});
Us.classNames = ts.classNames;
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Ws = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Gs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), qs = {}, Js = 0, Ys = function(e) {
	return e && (e.host || Ys(e.parentNode));
}, Xs = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ys(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Zs = function(e, t, n, r) {
	var i = Xs(t, Array.isArray(e) ? e : [e]);
	qs[n] || (qs[n] = /* @__PURE__ */ new WeakMap());
	var a = qs[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Gs.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Gs.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Ks.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Js++, function() {
		o.forEach(function(e) {
			var t = Gs.get(e) - 1, i = a.get(e) - 1;
			Gs.set(e, t), a.set(e, i), t || (Ks.has(e) || e.removeAttribute(r), Ks.delete(e)), i || e.removeAttribute(n);
		}), Js--, Js || (Gs = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), qs = {});
	};
}, Qs = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Ws(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Zs(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, $s = Object.defineProperty, ec = (e, t) => $s(e, "name", {
	value: t,
	configurable: !0
}), tc = "Dialog", [nc, rc] = /* @__PURE__ */ $i(tc), [ic, ac] = nc(tc), oc = /* @__PURE__ */ ec((e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = d.useRef(null), c = d.useRef(null), [l, u] = pa({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: tc
	}), [f, p] = d.useState(0), [m, h] = d.useState(0);
	return /* @__PURE__ */ (0, y.jsx)(ic, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: R(),
		titleId: R(),
		descriptionId: R(),
		titlePresent: f > 0,
		descriptionPresent: m > 0,
		setTitleCount: p,
		setDescriptionCount: h,
		open: l,
		onOpenChange: u,
		onOpenToggle: d.useCallback(() => u((e) => !e), [u]),
		modal: o,
		children: n
	});
}, "Dialog"), sc = "DialogTrigger", cc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = ac(sc, n), a = Yi(t, i.triggerRef);
	return /* @__PURE__ */ (0, y.jsx)(Ra.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": Oc(i.open),
		...r,
		ref: a,
		onClick: Bi(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), lc = "DialogPortal", [uc, dc] = nc(lc, { forceMount: void 0 }), fc = /* @__PURE__ */ ec((e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = ac(lc, t);
	return /* @__PURE__ */ (0, y.jsx)(uc, {
		scope: t,
		forceMount: n,
		children: d.Children.map(r, (e) => /* @__PURE__ */ (0, y.jsx)(Eo, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, y.jsx)(So, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
}, "DialogPortal"), pc = "DialogOverlay", mc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let n = dc(pc, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = ac(pc, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, y.jsx)(Eo, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, y.jsx)(gc, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), hc = /* @__PURE__ */ Ca("DialogOverlay.RemoveScroll"), gc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = ac(pc, n), a = Yi(t, Za());
	return /* @__PURE__ */ (0, y.jsx)(Us, {
		as: hc,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, y.jsx)(Ra.div, {
			"data-state": Oc(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}, "DialogOverlayImpl")), _c = "DialogContent", vc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let n = dc(_c, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = ac(_c, e.__scopeDialog);
	return /* @__PURE__ */ (0, y.jsx)(Eo, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, y.jsx)(yc, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, y.jsx)(bc, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), yc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let n = ac(_c, e.__scopeDialog), r = d.useRef(null), i = Yi(t, n.contentRef, r);
	return d.useEffect(() => {
		let e = r.current;
		if (e) return Qs(e);
	}, []), /* @__PURE__ */ (0, y.jsx)(xc, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: Bi(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: Bi(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: Bi(e.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), bc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let n = ac(_c, e.__scopeDialog), r = d.useRef(!1), i = d.useRef(!1);
	return /* @__PURE__ */ (0, y.jsx)(xc, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "DialogContentNonModal")), xc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = ac(_c, n);
	return Lo(), /* @__PURE__ */ (0, y.jsx)(y.Fragment, { children: /* @__PURE__ */ (0, y.jsx)(co, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, y.jsx)(Xa, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionPresent ? s.descriptionId : void 0,
			"aria-labelledby": s.titlePresent ? s.titleId : void 0,
			"data-state": Oc(s.open),
			...o,
			ref: t,
			deferPointerDownOutside: !0,
			onDismiss: () => s.onOpenChange(!1)
		})
	}) });
}, "DialogContentImpl")), Sc = "DialogTitle", Cc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = ac(Sc, n), { setTitleCount: a } = i;
	return ta(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, y.jsx)(Ra.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), wc = "DialogDescription", Tc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = ac(wc, n), { setDescriptionCount: a } = i;
	return ta(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, y.jsx)(Ra.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), Ec = "DialogClose", Dc = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ec(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = ac(Ec, n);
	return /* @__PURE__ */ (0, y.jsx)(Ra.button, {
		type: "button",
		...r,
		ref: t,
		onClick: Bi(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function Oc(e) {
	return e ? "open" : "closed";
}
ec(Oc, "getState");
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/Camera.es.js
var kc = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z" }))]
]), Ac = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: kc
}));
Ac.displayName = "CameraIcon";
var jc = Ac, Mc = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z" }))]
]), Nc = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: Mc
}));
Nc.displayName = "UserIcon";
var Pc = Nc;
//#endregion
//#region src/always-on/IdentityPortrait.tsx
function Fc({ identity: e }) {
	return /* @__PURE__ */ (0, y.jsx)(Ic, { identity: e }, `${e.kind}:${e.id}:${e.url}`);
}
function Ic({ identity: e }) {
	let [t, n] = (0, d.useState)(e.url), [r, i] = (0, d.useState)(!e.url), [a, o] = (0, d.useState)(!1);
	return (0, d.useEffect)(() => {
		if (!r || a) return;
		let t = !0;
		return (async () => {
			try {
				let r = (e.kind === "twin" ? await Or(!0) : (await Nr()).images)?.find((t) => t.id === e.id);
				t && r?.url && (n(r.url), i(!1));
			} catch {} finally {
				t && o(!0);
			}
		})(), () => {
			t = !1;
		};
	}, [
		r,
		a,
		e
	]), r ? /* @__PURE__ */ (0, y.jsx)("span", {
		className: "identity-portrait-fallback",
		role: "img",
		"aria-label": `${e.name} portrait ${a ? "unavailable" : "loading"}`,
		title: a ? "Portrait temporarily unavailable" : "Refreshing portrait",
		children: /* @__PURE__ */ (0, y.jsx)(Pc, {
			size: 22,
			"aria-hidden": "true"
		})
	}) : /* @__PURE__ */ (0, y.jsx)("img", {
		src: t,
		alt: e.name,
		onError: () => i(!0)
	}, String(a));
}
//#endregion
//#region src/always-on/PhotoUpload.tsx
function Lc({ file: e, savedPhotoUrl: t, busy: n, onChange: r, onRemove: i, onError: a }) {
	let o = (0, d.useRef)(null), [s, c] = (0, d.useState)("");
	(0, d.useEffect)(() => {
		if (!e) {
			c("");
			return;
		}
		let t = URL.createObjectURL(e);
		return c(t), () => URL.revokeObjectURL(t);
	}, [e]);
	let l = e ? s : t;
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "photo-upload",
		children: [/* @__PURE__ */ (0, y.jsx)("input", {
			ref: o,
			className: "sr-only",
			"aria-label": "Choose your photo",
			type: "file",
			accept: "image/jpeg,image/png,image/webp",
			disabled: n,
			onChange: (e) => {
				let t = e.target.files?.[0];
				if (e.target.value = "", t) {
					if (t.size > 8388608 || ![
						"image/jpeg",
						"image/png",
						"image/webp"
					].includes(t.type)) {
						a("Choose a JPG, PNG or WebP under 8 MB.");
						return;
					}
					r(t);
				}
			}
		}), l ? /* @__PURE__ */ (0, y.jsxs)("div", {
			className: "upload-preview",
			children: [/* @__PURE__ */ (0, y.jsx)(E, {
				src: l,
				alt: "Your selected photo"
			}, l), /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "upload-preview-actions",
				children: [/* @__PURE__ */ (0, y.jsx)("button", {
					type: "button",
					disabled: n,
					onClick: () => o.current?.click(),
					children: "Replace"
				}), /* @__PURE__ */ (0, y.jsx)("button", {
					type: "button",
					disabled: n,
					onClick: () => e ? r(null) : i?.(),
					children: "Delete photo"
				})]
			})]
		}) : /* @__PURE__ */ (0, y.jsxs)("button", {
			type: "button",
			className: "upload-zone",
			disabled: n,
			onClick: () => o.current?.click(),
			children: [
				/* @__PURE__ */ (0, y.jsx)(jc, { size: 34 }),
				/* @__PURE__ */ (0, y.jsx)("strong", { children: "Choose your photo" }),
				/* @__PURE__ */ (0, y.jsx)("small", { children: "JPG, PNG or WebP · Up to 8 MB" })
			]
		})]
	});
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/TShirt.es.js
var Rc = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M246.17,57.9,198.09,29.65h0A11.9,11.9,0,0,0,192,28H160a12,12,0,0,0-12,12,20,20,0,0,1-40,0A12,12,0,0,0,96,28H64a11.9,11.9,0,0,0-6.07,1.66h0L9.83,57.9A20.18,20.18,0,0,0,2,84l17.9,36.8A19.62,19.62,0,0,0,37.67,132H52v76a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V132h14.32a19.64,19.64,0,0,0,17.75-11.17L254,84A20.18,20.18,0,0,0,246.17,57.9ZM40.37,108,25.16,76.73,52,61v47ZM180,204H76V52h9.67a44,44,0,0,0,84.68,0H180Zm35.62-96H204V61l26.83,15.76Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M247.11,78.77l-19.27,36.81a8.44,8.44,0,0,1-7.5,4.42H192V40l51.78,28.25A7.81,7.81,0,0,1,247.11,78.77Zm-238.22,0,19.27,36.81a8.44,8.44,0,0,0,7.5,4.42H64V40L12.22,68.25A7.81,7.81,0,0,0,8.89,78.77Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112Zm185.07-.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M246.64,63,194.87,34.74A5.93,5.93,0,0,0,192,34H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H64a5.93,5.93,0,0,0-2.88.74L9.36,63A13.77,13.77,0,0,0,3.58,81.55l19.28,36.81A14.38,14.38,0,0,0,35.67,126H58v82a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V126h22.34a14.38,14.38,0,0,0,12.81-7.64l19.28-36.81A13.77,13.77,0,0,0,246.64,63Zm-211,51a2.42,2.42,0,0,1-2.18-1.21L14.21,76a1.82,1.82,0,0,1,.9-2.47L58,50.11V114ZM186,208a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V46H90.48a38,38,0,0,0,75,0H186Zm55.8-132-19.28,36.8a2.42,2.42,0,0,1-2.18,1.21H198V50.11l42.9,23.4A1.83,1.83,0,0,1,241.79,76Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M245.68,64.73,193.91,36.49h0A4,4,0,0,0,192,36H160a4,4,0,0,0-4,4,28,28,0,0,1-56,0,4,4,0,0,0-4-4H64a4,4,0,0,0-1.9.5h0L10.32,64.73a11.79,11.79,0,0,0-5,15.89l19.28,36.81a12.37,12.37,0,0,0,11,6.57H60v84a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V124h24.33a12.37,12.37,0,0,0,11-6.57l19.28-36.81A11.79,11.79,0,0,0,245.68,64.73ZM35.67,116a4.46,4.46,0,0,1-4-2.28L12.44,76.91a3.79,3.79,0,0,1,1.71-5.15L60,46.74V116ZM188,208a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V44H92.22a36,36,0,0,0,71.56,0H188ZM243.56,76.91l-19.27,36.81a4.46,4.46,0,0,1-4,2.28H196V46.74l45.85,25A3.79,3.79,0,0,1,243.56,76.91Z" }))]
]), zc = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: Rc
}));
zc.displayName = "TShirtIcon";
var Bc = zc, Vc = [
	{
		value: "fitted",
		label: "Fitted",
		hint: "Close to the body"
	},
	{
		value: "regular",
		label: "Natural",
		hint: "An easy, classic fit"
	},
	{
		value: "relaxed",
		label: "Relaxed",
		hint: "A little more room"
	}
];
function Hc({ value: e, onChange: t, bodyType: n, unit: r }) {
	let i = r === "metric";
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "personal-fit-fields",
		children: [/* @__PURE__ */ (0, y.jsxs)("fieldset", {
			className: "body-measurements",
			children: [
				/* @__PURE__ */ (0, y.jsxs)("legend", { children: ["Body measurements ", /* @__PURE__ */ (0, y.jsx)("span", { children: "Optional" })] }),
				/* @__PURE__ */ (0, y.jsx)("p", {
					className: "fit-section-hint",
					children: "A few details to make your profile more personal."
				}),
				/* @__PURE__ */ (0, y.jsx)("div", {
					className: "body-measurement-grid",
					children: (n === "Feminine" ? [
						{
							key: "bustCm",
							label: "Bust",
							hint: "Around the fullest part"
						},
						{
							key: "waistCm",
							label: "Waist",
							hint: "Around your natural waist"
						},
						{
							key: "hipsCm",
							label: "Hips",
							hint: "Around the fullest part of your seat"
						}
					] : [{
						key: "chestCm",
						label: "Chest",
						hint: "Around the chest, under your arms"
					}, {
						key: "waistCm",
						label: "Waist",
						hint: "Where your trousers sit"
					}]).map(({ key: n, label: r, hint: a }) => /* @__PURE__ */ (0, y.jsxs)("label", { children: [
						/* @__PURE__ */ (0, y.jsxs)("span", { children: [
							r,
							" ",
							/* @__PURE__ */ (0, y.jsxs)("small", { children: [
								"(",
								i ? "cm" : "in",
								")"
							] })
						] }),
						/* @__PURE__ */ (0, y.jsx)("input", {
							"aria-label": `${r} (${i ? "cm" : "in"})`,
							"aria-describedby": `hint-${n}`,
							type: "number",
							inputMode: "decimal",
							step: "any",
							min: i ? 50 : 50 / 2.54,
							max: i ? 200 : 200 / 2.54,
							placeholder: "—",
							value: e[n] === void 0 ? "" : Math.round(e[n] / (i ? 1 : 2.54) * 10) / 10,
							onChange: (r) => t({
								...e,
								[n]: r.target.value === "" ? void 0 : Number(r.target.value) * (i ? 1 : 2.54)
							})
						}),
						/* @__PURE__ */ (0, y.jsx)("small", {
							id: `hint-${n}`,
							children: a
						})
					] }, n))
				}),
				/* @__PURE__ */ (0, y.jsxs)("details", {
					className: "measurement-help",
					children: [/* @__PURE__ */ (0, y.jsx)("summary", { children: "How to measure" }), /* @__PURE__ */ (0, y.jsx)("p", { children: "Use a soft tape over light clothing. Keep it level and comfortably snug, without pulling tight. Enter the full circumference. You can leave any measurement blank." })]
				})
			]
		}), /* @__PURE__ */ (0, y.jsxs)("fieldset", {
			className: "fit-preference",
			children: [
				/* @__PURE__ */ (0, y.jsxs)("legend", { children: ["Your preferred fit ", /* @__PURE__ */ (0, y.jsx)("span", { children: "Optional" })] }),
				/* @__PURE__ */ (0, y.jsx)("p", {
					className: "fit-section-hint",
					children: "How do you like your clothes to feel?"
				}),
				/* @__PURE__ */ (0, y.jsx)("div", {
					className: "fit-preference-options",
					children: Vc.map((n) => /* @__PURE__ */ (0, y.jsxs)("label", {
						className: e.fitPreference === n.value ? "selected" : "",
						children: [
							/* @__PURE__ */ (0, y.jsx)("input", {
								type: "radio",
								name: "personal-fit-preference",
								value: n.value,
								checked: e.fitPreference === n.value,
								onChange: () => t({
									...e,
									fitPreference: n.value
								})
							}),
							/* @__PURE__ */ (0, y.jsx)(Bc, {
								className: `preference-shirt preference-shirt-${n.value}`,
								size: 29,
								weight: "thin",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, y.jsx)("strong", { children: n.label }),
							/* @__PURE__ */ (0, y.jsx)("small", { children: n.hint })
						]
					}, n.value))
				}),
				e.fitPreference && /* @__PURE__ */ (0, y.jsx)("button", {
					className: "fit-clear",
					type: "button",
					onClick: () => t({
						...e,
						fitPreference: void 0
					}),
					children: "Clear preference"
				})
			]
		})]
	});
}
//#endregion
//#region src/always-on/InlinePhotoConsent.tsx
function Uc({ checks: e, onChange: t, busy: n, saved: r }) {
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: "inline-photo-consent",
		"aria-labelledby": "photo-permission-title",
		children: [
			/* @__PURE__ */ (0, y.jsx)("h3", {
				id: "photo-permission-title",
				children: "Your photo. Your choice."
			}),
			/* @__PURE__ */ (0, y.jsx)("p", { children: "Your photo is sent to SPREEAI when you save, to create AI-generated try-on previews. Appearance and fit may vary." }),
			/* @__PURE__ */ (0, y.jsxs)("p", { children: [
				"Deleting here removes the photo from this demo only. It does not delete the server copy. For storage information or deletion requests, read the ",
				/* @__PURE__ */ (0, y.jsx)("a", {
					href: "https://spreeai.com/privacy",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "Privacy Notice"
				}),
				". This demo does not specify a retention period."
			] }),
			!r && /* @__PURE__ */ (0, y.jsxs)("fieldset", {
				disabled: n,
				children: [/* @__PURE__ */ (0, y.jsx)("legend", {
					className: "sr-only",
					children: "Photo permissions"
				}), [
					"I am 18 or older and have permission to use this photo.",
					"I agree to SPREEAI processing this photo for try-on previews.",
					"I have reviewed the storage and removal information above."
				].map((n, r) => /* @__PURE__ */ (0, y.jsxs)("label", { children: [/* @__PURE__ */ (0, y.jsx)("input", {
					type: "checkbox",
					checked: e[r],
					onChange: (n) => t(e.map((e, t) => t === r ? n.target.checked : e))
				}), /* @__PURE__ */ (0, y.jsx)("span", { children: n })] }, n))]
			})
		]
	});
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/UsersThree.es.js
var Wc = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M237,147.44a4,4,0,0,1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4,4,0,0,1-1.2-.2,36.76,36.76,0,0,1-3.8.2,4,4,0,0,1,0-8,28,28,0,1,0-27.12-35,4,4,0,0,1-7.75-2,36,36,0,1,1,54,39.48c10.81,3.85,20.51,12,27.31,23.48A4,4,0,0,1,237,147.44ZM187.46,214a4,4,0,0,1-1.46,5.46,3.93,3.93,0,0,1-2,.54,4,4,0,0,1-3.46-2,61,61,0,0,0-105.08,0,4,4,0,0,1-6.92-4,68.35,68.35,0,0,1,39.19-31,44,44,0,1,1,40.54,0A68.35,68.35,0,0,1,187.46,214ZM128,180a36,36,0,1,0-36-36A36,36,0,0,0,128,180ZM64,116A28,28,0,1,1,91.12,81a4,4,0,0,0,7.75-2A36,36,0,1,0,45.3,118.75,63.55,63.55,0,0,0,12.8,141.6a4,4,0,0,0,6.4,4.8A55.55,55.55,0,0,1,64,124a4,4,0,0,0,0-8Z" }))]
]), Gc = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: Wc
}));
Gc.displayName = "UsersThreeIcon";
var Kc = Gc, qc = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }))]
]), Jc = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: qc
}));
Jc.displayName = "CheckIcon";
var Yc = Jc, Xc = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z" }))]
]), Zc = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: Xc
}));
Zc.displayName = "SlidersHorizontalIcon";
var Qc = Zc, $c = (e) => e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "");
function el({ garments: e, title: t = "", person: n = "", size: r = "", view: i }) {
	return [
		(e.map($c).filter(Boolean).join("-and-") || $c(t) || "Look").slice(0, 120).replace(/-+$/, ""),
		$c(n).slice(0, 30),
		r ? "Size-" + $c(r).slice(0, 15) : "",
		i ? "View-" + i : "",
		"SPREEAI"
	].filter(Boolean).join("-") + ".png";
}
//#endregion
//#region src/always-on/preview-guidance.ts
var tl = "AI-generated preview. Garment details and fit may vary.", nl = "Size recommendations are guidance, not a guarantee of fit. Actual fit may vary by garment and personal preference.";
//#endregion
//#region src/always-on/SizingGuidance.tsx
function rl() {
	return /* @__PURE__ */ (0, y.jsx)("span", {
		className: "sizing-guidance",
		children: nl
	});
}
//#endregion
//#region src/always-on/TryOnBeta.tsx
function il() {
	return /* @__PURE__ */ (0, y.jsxs)("span", {
		className: "tryon-beta",
		children: [
			/* @__PURE__ */ (0, y.jsx)("strong", { children: "Try-on · Beta" }),
			/* @__PURE__ */ (0, y.jsx)("span", { children: tl }),
			/* @__PURE__ */ (0, y.jsx)(rl, {})
		]
	});
}
//#endregion
//#region src/always-on/ImageZoom.tsx
function al({ src: e, alt: t, onError: n, allowOriginal: r = !1, expandedTryOn: i = !1 }) {
	let a = r || i, [o, s] = (0, d.useState)(0);
	(0, d.useLayoutEffect)(() => {
		if (!a || !e) return;
		let t = Array.from(document.images).filter((t) => !t.closest(".image-zoom") && (t.src === e || t.currentSrc === e || t.getAttribute("src") === e)).map((e) => {
			let t = e.getBoundingClientRect();
			return getComputedStyle(e).objectFit === "contain" && e.naturalWidth ? Math.min(t.width, t.height * e.naturalWidth / e.naturalHeight) : t.width;
		});
		s(Math.max(0, ...t));
	}, [e, a]);
	let [c, l] = (0, d.useState)(1), [u, f] = (0, d.useState)({
		width: 0,
		height: 0
	}), [p, m] = (0, d.useState)({
		width: 0,
		height: 0
	}), h = (0, d.useRef)(null), g = (0, d.useRef)(null);
	(0, d.useLayoutEffect)(() => {
		let e = h.current;
		if (!e) return;
		let t = () => m({
			width: e.clientWidth,
			height: e.clientHeight
		});
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []);
	let _ = a ? 8 : p.width < 500 ? 16 : 24, v = u.width ? Math.min((p.width - _ * 4) / u.width, (p.height - _ * 4) / u.height, 1) : 0, b = Math.max(1, p.width - _ * 4), x = a ? window.matchMedia("(max-width:720px)").matches ? b : Math.max(u.width * v, Math.min(b, Math.max(o * 1.12, Math.min(760, p.width * .48)))) : u.width * v, S = Math.max(1, x * c), C = Math.max(1, u.width ? x * u.height / u.width * c : 1);
	return (0, d.useLayoutEffect)(() => {
		let e = h.current;
		e && (e.scrollLeft = (e.scrollWidth - e.clientWidth) / 2, e.scrollTop = c === 1 ? 0 : (e.scrollHeight - e.clientHeight) / 2);
	}, [
		c,
		e,
		p.width,
		p.height,
		u.width
	]), /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "image-zoom" + (a ? " image-zoom-tryon" : ""),
		"data-zoom": c,
		children: [/* @__PURE__ */ (0, y.jsxs)("div", {
			className: "image-zoom-controls",
			role: "group",
			"aria-label": "Image magnification",
			children: [
				/* @__PURE__ */ (0, y.jsx)("button", {
					className: "image-zoom-in",
					type: "button",
					"aria-label": "Increase magnification",
					disabled: c === 2,
					onClick: () => l((e) => Math.min(2, e + 1)),
					children: /* @__PURE__ */ (0, y.jsx)(ee, {
						size: 20,
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, y.jsx)("span", {
					className: "image-zoom-label",
					children: "Zoom"
				}),
				[1, 2].map((e) => /* @__PURE__ */ (0, y.jsxs)("button", {
					type: "button",
					"aria-label": `Zoom ${e}x`,
					"aria-pressed": c === e,
					onClick: () => l(e),
					children: [e, "×"]
				}, e)),
				r && e && /* @__PURE__ */ (0, y.jsxs)(oc, { children: [/* @__PURE__ */ (0, y.jsx)(cc, {
					className: "image-zoom-original",
					"aria-label": `Expand full image: ${t}`,
					children: "Full image"
				}), /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "image-fullscreen-overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
					className: "image-fullscreen",
					children: [
						/* @__PURE__ */ (0, y.jsxs)("header", { children: [
							/* @__PURE__ */ (0, y.jsx)(Cc, { children: t }),
							/* @__PURE__ */ (0, y.jsx)(Tc, {
								className: "sr-only",
								children: "Full-screen try-on image. Zoom to inspect details, then close to return to your preview."
							}),
							/* @__PURE__ */ (0, y.jsx)(Dc, {
								"aria-label": "Close full image",
								children: "×"
							})
						] }),
						/* @__PURE__ */ (0, y.jsx)(al, {
							expandedTryOn: !0,
							src: e,
							alt: t,
							onError: n
						}),
						/* @__PURE__ */ (0, y.jsx)(il, {})
					]
				})] })] }),
				/* @__PURE__ */ (0, y.jsx)("span", {
					className: "image-zoom-hint",
					"aria-live": "polite",
					children: c > 1 ? "Drag or scroll to explore" : a ? "Scroll to explore" : "Full image"
				})
			]
		}), /* @__PURE__ */ (0, y.jsx)("div", {
			ref: h,
			className: "image-zoom-viewport",
			tabIndex: 0,
			role: "region",
			"aria-label": `${t}. ${c} times zoom. Use arrow keys or scroll to explore.`,
			onPointerDown: (e) => {
				if (c === 1 && !a || e.pointerType !== "mouse" || e.button !== 0) return;
				let t = e.currentTarget;
				g.current = {
					x: e.clientX,
					y: e.clientY,
					left: t.scrollLeft,
					top: t.scrollTop
				}, t.setPointerCapture(e.pointerId);
			},
			onPointerMove: (e) => {
				let t = g.current;
				t && (e.currentTarget.scrollLeft = t.left - e.clientX + t.x, e.currentTarget.scrollTop = t.top - e.clientY + t.y);
			},
			onPointerUp: () => {
				g.current = null;
			},
			onPointerCancel: () => {
				g.current = null;
			},
			children: /* @__PURE__ */ (0, y.jsx)("div", {
				className: "image-zoom-canvas",
				style: {
					width: S + _ * 4,
					height: C + _ * 4
				},
				children: /* @__PURE__ */ (0, y.jsx)("img", {
					src: e,
					alt: t,
					draggable: !1,
					onLoad: (e) => f({
						width: e.currentTarget.naturalWidth,
						height: e.currentTarget.naturalHeight
					}),
					onError: n,
					style: {
						width: S + _ * 2,
						height: C + _ * 2,
						borderWidth: _,
						visibility: u.width ? "visible" : "hidden"
					}
				})
			})
		})]
	});
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/FacebookLogo.es.js
var ol = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z" }))]
]), sl = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: ol
}));
sl.displayName = "FacebookLogoIcon";
var cl = sl, ll = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M208,216H160L48,40H96Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z" }))]
]), ul = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: ll
}));
ul.displayName = "XLogoIcon";
var dl = ul, fl = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M188.84,120.46a68.14,68.14,0,0,0-10-6.23c-3.72-21.68-16.41-37.41-35.52-43.2C121.94,64.55,97.29,72.42,86,89.34a12,12,0,0,0,20,13.32c5.47-8.2,19.11-12.08,30.41-8.66a24.72,24.72,0,0,1,14.88,12.24,86.73,86.73,0,0,0-8.86-.45C108.56,105.79,84,125.22,84,152c0,22.9,17.54,39.52,41.71,39.52a52,52,0,0,0,37.23-16c6-6.23,12.88-16.46,15.72-32.07,6.2,6.42,9.34,14.67,9.34,24.59,0,17.74-19.07,44-60,44-45.76,0-68-27.48-68-84s22.24-84,68-84c31.08,0,51,12.42,60.8,38a12,12,0,0,0,22.4-8.62C197.77,38.44,169,20,128,20,68.67,20,36,58.35,36,128s32.67,108,92,108c31.36,0,51.08-12.05,62.11-22.15C203.81,201.28,212,184.14,212,168,212,148.36,204,131.92,188.84,120.46Zm-43.2,38.39a27.9,27.9,0,0,1-19.93,8.67c-8.17,0-17.71-4.06-17.71-15.52,0-15.26,17.84-22.21,34.41-22.21a60.23,60.23,0,0,1,13.51,1.52C155.36,142.93,151.84,152.41,145.64,158.85Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M208,128c0,48-16,96-80,96s-80-48-80-96,16-96,80-96S208,80,208,128Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M138.62,128a53.54,53.54,0,0,1,13.1,1.63c-.57,8.21-3.34,15-8.11,19.61A23.89,23.89,0,0,1,127,156c-11.87,0-15-7.58-15-12.07C112,133,125.8,128,138.62,128ZM224,128c0,65.12-35.89,104-96,104S32,193.12,32,128,67.89,24,128,24,224,62.88,224,128ZM72,128c0-43.07,18.32-64,56-64,26.34,0,43,10.08,50.81,30.83a8,8,0,0,0,15-5.66C180.9,55.14,150.9,48,128,48c-26.1,0-45.52,8.7-57.72,25.86C60.8,87.19,56,105.4,56,128s4.8,40.81,14.28,54.14C82.48,199.3,101.9,208,128,208c24.45,0,39.82-8.8,48.41-16.18,10.76-9.25,17.19-21.89,17.19-33.82,0-14.3-6.59-26.79-18.56-35.17a54.16,54.16,0,0,0-7.77-4.5c-2.09-14.65-10-25.75-22.34-31.07C130.43,81,112,83.93,101.21,94.19a8,8,0,0,0,11,11.62c5.43-5.14,16.79-8,26.4-3.85a20.05,20.05,0,0,1,10.77,10.92,68.89,68.89,0,0,0-10.76-.85C113.53,112,96,125.15,96,143.93c0,16.27,13,28.07,31,28.07a40,40,0,0,0,27.75-11.29c4.7-4.59,10.11-12.2,12.17-24A25.55,25.55,0,0,1,177.6,158c0,13.71-15.76,34-49.6,34C90.32,192,72,171.07,72,128Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M185.22,125.25a62,62,0,0,0-11.78-7c-3.53-29.6-23-38.82-31.83-41.5-19-5.74-40.73,1.09-50.6,15.9a6,6,0,1,0,10,6.66c6.94-10.41,23.25-15.28,37.14-11.07,7.22,2.18,18.39,8.34,22.39,25.61a78.74,78.74,0,0,0-18.11-2.08c-13.53,0-26.16,3.46-35.55,9.77C96,128.85,90,139.66,90,152c0,22,18,33.52,35.71,33.52a46,46,0,0,0,32.91-14.19c6.58-6.85,14.35-19.11,15.29-39.26a44.59,44.59,0,0,1,4.07,2.75c10.48,7.92,16,19.4,16,33.18,0,20.16-21,50-66,50-27.07,0-46.92-9.19-59-27.33C59,175.75,54,154.66,54,128s5-47.75,15-62.67C81.08,47.19,100.93,38,128,38c33.85,0,55.57,13.67,66.4,41.8a6,6,0,1,0,11.2-4.31C193,42.65,166.85,26,128,26,96.67,26,73.46,37,59,58.67,47.72,75.6,42,98.93,42,128s5.72,52.4,17,69.33C73.46,219,96.67,230,128,230c29.43,0,47.81-11.19,58.05-20.58C198.54,198,206,182.49,206,168,206,150.31,198.81,135.52,185.22,125.25ZM150,163a33.94,33.94,0,0,1-24.26,10.51C109.33,173.52,102,162.71,102,152c0-13.59,12.64-28.21,40.41-28.21a65.33,65.33,0,0,1,19.58,3c0,.41,0,.82,0,1.24C162,142.72,157.84,154.82,150,163Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M184,126.84a59.8,59.8,0,0,0-12.42-7.16c-3-29.38-22-38.4-30.56-41-18.16-5.5-39,1-48.36,15.09a4,4,0,0,0,6.66,4.44c7.4-11.1,24.7-16.32,39.38-11.87,8.12,2.45,20.95,9.6,24.41,30.32a75.83,75.83,0,0,0-20.71-2.88c-13.14,0-25.37,3.34-34.44,9.43-10.45,7-16,17-16,28.78,0,20.7,17,31.52,33.71,31.52a44,44,0,0,0,31.47-13.58c9.56-9.94,14.68-24.19,14.82-41.23a50.18,50.18,0,0,1,7.19,4.51c11,8.32,16.81,20.34,16.81,34.78,0,11.73-6.25,24.46-16.7,34.05C170.36,210.24,154.21,220,128,220c-50.43,0-76-30.95-76-92s25.57-92,76-92c34.29,0,57.26,14.5,68.27,43.08a4,4,0,1,0,7.46-2.87C191.42,44.22,165.94,28,128,28,73.05,28,44,62.58,44,128s29.05,100,84,100c28.79,0,46.72-10.9,56.7-20.05,12.09-11.08,19.3-26,19.3-39.95C204,151,197.09,136.73,184,126.84Zm-32.6,37.55a35.92,35.92,0,0,1-25.7,11.13c-12.38,0-25.71-7.36-25.71-23.52,0-20.76,22-30.21,42.41-30.21A67.08,67.08,0,0,1,164,125.3c0,.88.05,1.78.05,2.7C164,143.25,159.65,155.83,151.41,164.39Z" }))]
]), pl = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: fl
}));
pl.displayName = "ThreadsLogoIcon";
var ml = pl, hl = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z" }))]
]), gl = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: hl
}));
gl.displayName = "InstagramLogoIcon";
var _l = gl, vl = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M224,68a44.05,44.05,0,0,1-44-44,12,12,0,0,0-12-12H128a12,12,0,0,0-12,12V156a16,16,0,1,1-22.85-14.47A12,12,0,0,0,100,130.69V88A12,12,0,0,0,85.9,76.19a79.35,79.35,0,0,0-47.08,27.74A81.84,81.84,0,0,0,20,156a80,80,0,0,0,160,0V122.67A107.47,107.47,0,0,0,224,132a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm-12,39.15a83.05,83.05,0,0,1-37-14.91A12,12,0,0,0,156,102v54a56,56,0,0,1-112,0,57.86,57.86,0,0,1,32-51.56V124a40,40,0,1,0,64,32V36h17.06A68.21,68.21,0,0,0,212,90.94Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M224,120a95.55,95.55,0,0,1-56-18v54a68,68,0,0,1-136,0c0-33.46,24.17-62.33,56-68v42.69A28,28,0,1,0,128,156V24h40a56,56,0,0,0,56,56Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M224,74a50.06,50.06,0,0,1-50-50,6,6,0,0,0-6-6H128a6,6,0,0,0-6,6V156a22,22,0,1,1-31.43-19.89A6,6,0,0,0,94,130.69V88a6,6,0,0,0-7-5.91C52.2,88.28,26,120.05,26,156a74,74,0,0,0,148,0V112.93A101.28,101.28,0,0,0,224,126a6,6,0,0,0,6-6V80A6,6,0,0,0,224,74Zm-6,39.8a89.13,89.13,0,0,1-46.5-16.69A6,6,0,0,0,162,102v54a62,62,0,0,1-124,0c0-27.72,18.47-52.48,44-60.38v31.53A34,34,0,1,0,134,156V30h28.29A62.09,62.09,0,0,0,218,85.71Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M224,76a52.06,52.06,0,0,1-52-52,4,4,0,0,0-4-4H128a4,4,0,0,0-4,4V156a24,24,0,1,1-34.28-21.69A4,4,0,0,0,92,130.69V88a4,4,0,0,0-4.7-3.94C53.49,90.08,28,121,28,156a72,72,0,0,0,144,0V109.44A99.26,99.26,0,0,0,224,124a4,4,0,0,0,4-4V80A4,4,0,0,0,224,76Zm-4,39.92a91.32,91.32,0,0,1-49.66-17.18A4,4,0,0,0,164,102v54a64,64,0,0,1-128,0c0-29.52,20.32-55.79,48-63v35.31A32,32,0,1,0,132,156V28h32.13A60.11,60.11,0,0,0,220,83.87Z" }))]
]), H = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: vl
}));
H.displayName = "TiktokLogoIcon";
var yl = H, bl = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M251.75,181.48a11.88,11.88,0,0,0-7.66-8.84c-1.42-.54-25.86-10.18-39.35-43.23l15.68-6.27a12,12,0,1,0-8.91-22.28l-13.35,5.34A150.23,150.23,0,0,1,196,80,68,68,0,0,0,60,80a151.26,151.26,0,0,1-2.18,26.23l-13.36-5.34a12,12,0,1,0-8.91,22.28l15.68,6.27C37.74,162.46,13.31,172.09,12,172.6a12,12,0,0,0-4.17,20.05c8.09,7.6,19.85,8.76,30.23,9.79,5.62.55,12,1.18,14.85,2.75,2.59,1.42,5.94,6,8.9,10.07,5.51,7.56,12.38,17,23.47,19.8,10.23,2.61,20.11-.75,28.82-3.72,5-1.7,10.17-3.46,13.92-3.46s8.92,1.76,13.92,3.46c6.51,2.22,13.67,4.66,21.15,4.66a30.9,30.9,0,0,0,7.67-.94h0c11.09-2.84,18-12.24,23.47-19.8,3-4,6.31-8.65,8.9-10.07,2.85-1.57,9.23-2.2,14.85-2.75,10.38-1,22.14-2.19,30.23-9.79A12,12,0,0,0,251.75,181.48Zm-60.22,2.68c-7.27,4-12.29,10.88-16.72,17-3.25,4.45-7.3,10-10,10.7-3.3.85-9.32-1.2-15.14-3.18-6.53-2.23-13.93-4.75-21.65-4.75s-15.12,2.52-21.65,4.75c-5.82,2-11.84,4-15.14,3.18-2.74-.7-6.79-6.25-10-10.7-4.43-6.07-9.45-13-16.72-17-5.75-3.17-12.44-4.34-19.16-5.1a105.29,105.29,0,0,0,7.63-7.62c8.64-9.57,18.29-24,24.52-44.4a.14.14,0,0,0,0-.06,11.24,11.24,0,0,0,.63-2.13A162.57,162.57,0,0,0,84,80a44,44,0,0,1,88,0,162.57,162.57,0,0,0,5.92,44.88,12.64,12.64,0,0,0,.63,2.13.14.14,0,0,0,0,.06c6.23,20.44,15.88,34.83,24.52,44.4a105.29,105.29,0,0,0,7.63,7.62C204,179.82,197.29,181,191.53,184.16Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M240,183.9c-9.25,8.69-31.45,4.61-42.66,10.78-11,6.07-17.07,25.56-29.57,28.76-12.08,3.09-26.72-7.56-39.77-7.56s-27.69,10.65-39.77,7.56c-12.5-3.2-18.53-22.69-29.57-28.76C47.45,188.51,25.25,192.59,16,183.9c0,0,56-20,56-103.93a56,56,0,0,1,112,0C184,163.86,240,183.9,240,183.9Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M247.83,182.28a8,8,0,0,0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72A8,8,0,1,0,213,104.57l-17.82,7.13A149,149,0,0,1,192,80,64,64,0,0,0,64,80a151.24,151.24,0,0,1-3.18,31.75L43,104.57A8,8,0,1,0,37,119.43l19.37,7.75a94,94,0,0,1-17.74,30.2c-12.52,14.14-25.27,19-25.36,19a8,8,0,0,0-2.77,13.36c7.1,6.67,17.67,7.71,27.89,8.72,6.3.62,12.82,1.27,16.38,3.23,3.37,1.86,6.85,6.62,10.21,11.22,5.4,7.41,11.53,15.8,21.24,18.28,9.07,2.33,18.35-.83,26.54-3.62,5.55-1.89,10.8-3.68,15.21-3.68s9.66,1.79,15.21,3.68c6.2,2.11,13,4.43,19.9,4.43a26.35,26.35,0,0,0,6.64-.81h0c9.7-2.48,15.83-10.87,21.23-18.28,3.36-4.6,6.84-9.36,10.21-11.22,3.56-2,10.08-2.61,16.39-3.23,10.21-1,20.78-2.05,27.88-8.72A8,8,0,0,0,247.83,182.28Zm-31.82.26c-7.91.78-16.08,1.59-22.53,5.13s-11,9.79-15.41,15.81c-4,5.48-8.15,11.16-12.28,12.21-4.46,1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53-13.83,2.3-20.37,4.53-13,4.42-17.42,3.27c-4.13-1.05-8.27-6.73-12.28-12.21-4.39-6-8.93-12.24-15.41-15.81S47.9,183.32,40,182.54c-1.56-.15-3.15-.31-4.74-.49a97.34,97.34,0,0,0,14.69-13.29c8.37-9.27,17.72-23.23,23.74-43.13l.06-.13a8.63,8.63,0,0,0,.46-1.61A158.47,158.47,0,0,0,80,80a48,48,0,0,1,96,0,158.42,158.42,0,0,0,5.8,43.92,8.63,8.63,0,0,0,.46,1.61l.06.13c6,19.9,15.37,33.86,23.74,43.13a97.34,97.34,0,0,0,14.69,13.29C219.16,182.23,217.57,182.39,216,182.54Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M245.47,189.74c-7.1,6.67-17.67,7.71-27.88,8.72-6.31.62-12.83,1.27-16.39,3.23-3.37,1.86-6.85,6.62-10.21,11.22-5.4,7.41-11.53,15.8-21.23,18.28h0a26.35,26.35,0,0,1-6.64.81c-6.88,0-13.7-2.32-19.9-4.43-5.55-1.89-10.8-3.68-15.21-3.68s-9.66,1.79-15.21,3.68c-8.19,2.79-17.47,6-26.54,3.62-9.71-2.48-15.84-10.87-21.24-18.28-3.36-4.6-6.84-9.36-10.21-11.22-3.56-2-10.08-2.61-16.38-3.23-10.22-1-20.79-2.05-27.89-8.72a8,8,0,0,1,2.77-13.36c.09,0,12.84-4.86,25.36-19a94,94,0,0,0,17.74-30.2L37,119.43A8,8,0,1,1,43,104.57l17.85,7.15A151.24,151.24,0,0,0,64,80a64,64,0,0,1,128,0,149,149,0,0,0,3.21,31.73L213,104.57A8,8,0,1,1,219,119.43l-19.3,7.72c14.08,38.35,42.64,49.09,43,49.23a8,8,0,0,1,2.77,13.36Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M245.87,182.68a6,6,0,0,0-3.85-4.43c-.4-.14-30.71-11.53-44.87-52.25l21.08-8.43a6,6,0,1,0-4.46-11.14l-20,8A148.66,148.66,0,0,1,190,80,62,62,0,0,0,66,80a151.37,151.37,0,0,1-3.72,34.48l-20.05-8a6,6,0,0,0-4.46,11.14L58.93,126A96.13,96.13,0,0,1,40,158.87c-12.85,14.44-25.91,19.34-26,19.38a6,6,0,0,0-2.08,10c6.6,6.19,16.83,7.2,26.71,8.18,6.51.64,13.23,1.31,17.16,3.47,3.76,2.07,7.36,7,10.85,11.79,5.21,7.13,11.11,15.22,20.12,17.53,8.5,2.16,17.09-.76,25.4-3.59,5.72-1.94,11.11-3.78,15.86-3.78s10.14,1.84,15.86,3.78c6.29,2.14,12.74,4.34,19.19,4.34a25.36,25.36,0,0,0,6.21-.75h0c9-2.3,14.91-10.39,20.12-17.52,3.49-4.78,7.09-9.72,10.85-11.79,3.93-2.16,10.65-2.83,17.16-3.47,9.88-1,20.11-2,26.71-8.18A6,6,0,0,0,245.87,182.68Zm-29.66,1.84c-7.71.76-15.68,1.55-21.76,4.9s-10.5,9.39-14.77,15.22-8.56,11.74-13.39,13c-5,1.28-11.61-1-18.57-3.32-6.38-2.17-13-4.42-19.72-4.42s-13.34,2.25-19.72,4.42c-7,2.37-13.53,4.6-18.57,3.32-4.83-1.24-9.18-7.2-13.39-13s-8.67-11.88-14.77-15.23-14-4.14-21.76-4.9c-3.37-.33-6.79-.67-9.89-1.21a93.88,93.88,0,0,0,18.55-15.9c8.24-9.11,17.44-22.86,23.35-42.48a1.42,1.42,0,0,0,.08-.18,5.47,5.47,0,0,0,.35-1.27A156.21,156.21,0,0,0,78,80a50,50,0,0,1,100,0,156.21,156.21,0,0,0,5.77,43.51,5.34,5.34,0,0,0,.35,1.27.89.89,0,0,0,.08.17c5.91,19.63,15.11,33.38,23.35,42.49a93.88,93.88,0,0,0,18.55,15.9C223,183.85,219.58,184.19,216.21,184.52Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M247.83,182.28a8,8,0,0,0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72A8,8,0,1,0,213,104.57l-17.82,7.13A149,149,0,0,1,192,80,64,64,0,0,0,64,80a151.24,151.24,0,0,1-3.18,31.75L43,104.57A8,8,0,1,0,37,119.43l19.37,7.75a94,94,0,0,1-17.74,30.2c-12.52,14.14-25.27,19-25.36,19a8,8,0,0,0-2.77,13.36c7.1,6.67,17.67,7.71,27.88,8.72,6.31.62,12.83,1.27,16.39,3.23,3.37,1.86,6.85,6.62,10.21,11.22,5.4,7.41,11.53,15.8,21.24,18.28,9.07,2.33,18.35-.83,26.54-3.62,5.55-1.89,10.8-3.68,15.21-3.68s9.66,1.79,15.21,3.68c6.2,2.11,13,4.43,19.9,4.43a26.35,26.35,0,0,0,6.64-.81h0c9.7-2.48,15.83-10.87,21.23-18.28,3.36-4.6,6.84-9.36,10.21-11.22,3.56-2,10.08-2.61,16.39-3.23,10.21-1,20.78-2.05,27.88-8.72A8,8,0,0,0,247.83,182.28Zm-31.82.26c-7.91.78-16.08,1.59-22.53,5.13s-11,9.79-15.41,15.81c-4,5.48-8.15,11.16-12.28,12.21-4.46,1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53-13.83,2.3-20.37,4.53-13,4.42-17.42,3.27c-4.13-1.05-8.27-6.73-12.28-12.21-4.39-6-8.93-12.24-15.41-15.81S47.9,183.32,40,182.54c-1.55-.15-3.15-.31-4.74-.49a97.34,97.34,0,0,0,14.69-13.29c8.37-9.27,17.72-23.23,23.74-43.13l.06-.13a8.63,8.63,0,0,0,.46-1.61A158.47,158.47,0,0,0,80,80a48,48,0,0,1,96,0,158.42,158.42,0,0,0,5.8,43.92,8.63,8.63,0,0,0,.46,1.61l.06.13c6,19.9,15.37,33.86,23.74,43.13a97.34,97.34,0,0,0,14.69,13.29C219.16,182.23,217.57,182.39,216,182.54Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M243.92,183.1a4,4,0,0,0-2.56-3c-.13,0-13.52-5-26.69-19.76a99.18,99.18,0,0,1-20-35.54l22.83-9.13a4,4,0,1,0-3-7.42l-22.08,8.83A149.77,149.77,0,0,1,188,80,60,60,0,0,0,68,80a150.25,150.25,0,0,1-4.43,37.15l-22.08-8.83a4,4,0,1,0-3,7.42l22.82,9.13a99.16,99.16,0,0,1-20,35.54c-13.18,14.73-26.56,19.71-26.69,19.76a4,4,0,0,0-1.39,6.68c6.12,5.73,16,6.71,25.55,7.65,6.7.67,13.64,1.35,17.92,3.71s7.73,7.18,11.51,12.36c5.25,7.2,10.69,14.65,19,16.77,7.92,2,16.23-.8,24.26-3.54,5.88-2,11.43-3.89,16.5-3.89s10.63,1.89,16.5,3.89c6.13,2.09,12.42,4.23,18.57,4.23a22.92,22.92,0,0,0,5.7-.69h0c8.31-2.12,13.74-9.57,19-16.77,3.79-5.18,7.36-10.08,11.51-12.36s11.22-3,17.93-3.71c9.55-.94,19.43-1.92,25.54-7.65A4,4,0,0,0,243.92,183.1Zm-27.51,3.41c-7.51.75-15.27,1.51-21,4.66s-10,9-14.12,14.66c-4.62,6.33-9,12.32-14.51,13.73s-12.46-.89-19.71-3.36c-6.23-2.12-12.68-4.32-19.08-4.32s-12.84,2.2-19.08,4.32c-7.24,2.47-14.09,4.8-19.7,3.36s-9.89-7.4-14.52-13.73c-4.13-5.66-8.41-11.52-14.11-14.66s-13.49-3.91-21-4.66c-5.26-.52-10.63-1-14.91-2.37A90.17,90.17,0,0,0,47,166.08c8.1-9,17.14-22.5,23-41.85A1.51,1.51,0,0,0,70,124a3.8,3.8,0,0,0,.23-.91A154.12,154.12,0,0,0,76,80a52,52,0,0,1,104,0,154.12,154.12,0,0,0,5.74,43.13,3.41,3.41,0,0,0,.24.91c0,.08.07.14.1.22,5.81,19.35,14.86,32.88,23,41.85a90.16,90.16,0,0,0,22.27,18.06C227,185.46,221.67,186,216.41,186.51Z" }))]
]), xl = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: bl
}));
xl.displayName = "SnapchatLogoIcon";
var Sl = xl, Cl = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M120,128a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,152,112Zm84,16A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,84,120Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,172,120Zm56,8A100,100,0,0,1,79.5,215.47l-35.69,11.9a12,12,0,0,1-15.18-15.18l11.9-35.69A100,100,0,1,1,228,128Zm-8,0A92,92,0,1,0,48.35,174.07a4,4,0,0,1,.33,3.27L36.22,214.72a4,4,0,0,0,5.06,5.06l37.38-12.46a3.93,3.93,0,0,1,1.27-.21,4.05,4.05,0,0,1,2,.54A92,92,0,0,0,220,128Z" }))]
]), wl = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: Cl
}));
wl.displayName = "ChatCircleDotsIcon";
var Tl = wl, El = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z" }))],
	["duotone", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", {
		d: "M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z",
		opacity: "0.2"
	}), /* @__PURE__ */ d.createElement("path", { d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z" }))],
	["fill", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm-34.9-16a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,11.32Zm85.45-34.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z" }))],
	["light", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z" }))],
	["regular", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z" }))],
	["thin", /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("path", { d: "M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z" }))]
]), Dl = d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(C, {
	ref: t,
	...e,
	weights: El
}));
Dl.displayName = "LinkSimpleIcon";
var Ol = Dl;
//#endregion
//#region src/always-on/LookPreview.tsx
function kl({ images: e, title: t, pieces: n, children: r, detail: i, onProduct: a, isTryOn: o = !1, exportPerson: s, exportSize: c, imagePieces: l }) {
	let [u, f] = (0, d.useState)(!1), [p, m] = (0, d.useState)(0), [h, g] = (0, d.useState)(""), [_, v] = (0, d.useState)(!1), [b, x] = (0, d.useState)(!1), S = e[p] || e[0], C = n[0] ? new URL(`/spreeai-always-on-demo/online/product/${n[0].id}/`, window.location.origin).href : window.location.href;
	async function w() {
		let r = await fetch(S, { credentials: "omit" });
		if (!r.ok) throw Error("Image unavailable");
		let i = await r.blob(), a = await createImageBitmap(i), o = document.createElement("canvas");
		o.width = a.width, o.height = a.height, o.getContext("2d").drawImage(a, 0, 0), a.close();
		let u = await new Promise((e, t) => o.toBlob((n) => n ? e(n) : t(Error("Export unavailable")), "image/png"));
		return new File([u], el({
			garments: (l?.[p] ? [l[p]] : n).map((e) => e.name),
			title: t,
			person: s,
			size: c,
			view: e.length > 1 ? p + 1 : void 0
		}), { type: "image/png" });
	}
	async function T() {
		v(!0), g("");
		try {
			let e = await w(), t = URL.createObjectURL(e), n = document.createElement("a");
			n.href = t, n.download = e.name, n.click(), setTimeout(() => URL.revokeObjectURL(t), 6e4), g("Your image is ready in Downloads.");
		} catch {
			g(o ? "Select Full image to expand your preview." : "Open the original image below to save it from your browser.");
		} finally {
			v(!1);
		}
	}
	async function ee() {
		v(!0), g("");
		try {
			if (!navigator.share) {
				g("Use a social link below, or copy the product link. Save the image to include it in your post.");
				return;
			}
			let e = await w();
			navigator.canShare?.({ files: [e] }) ? await navigator.share({
				title: "My SPREEAI look",
				text: t,
				files: [e]
			}) : await navigator.share({
				title: t,
				text: t,
				url: C
			});
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || g("Sharing is unavailable here. Save the image or use a product-sharing link below.");
		} finally {
			v(!1);
		}
	}
	async function E() {
		g("");
		try {
			if (navigator.share) {
				await navigator.share({
					title: t,
					text: "My Always On find: " + t,
					url: C
				});
				return;
			}
			await navigator.clipboard.writeText(C), g("Product link copied. Paste it in TikTok, or save your image to create a photo post.");
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || g("Save your image and add it to TikTok, or copy the product link.");
		}
	}
	return /* @__PURE__ */ (0, y.jsxs)(oc, {
		open: u,
		onOpenChange: (e) => {
			f(e), g(""), x(!1);
		},
		children: [/* @__PURE__ */ (0, y.jsx)(cc, {
			asChild: !0,
			children: /* @__PURE__ */ (0, y.jsxs)("button", {
				className: "look-preview-trigger",
				"aria-label": `Enlarge ${t}`,
				children: [r, /* @__PURE__ */ (0, y.jsx)("span", {
					className: "look-expand",
					"aria-hidden": "true",
					children: "View look"
				})]
			})
		}), /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "overlay look-lightbox-overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
			className: "look-lightbox",
			"aria-describedby": "look-viewer-description",
			children: [
				/* @__PURE__ */ (0, y.jsx)(Dc, {
					className: "look-close",
					"aria-label": "Close enlarged look",
					children: "×"
				}),
				/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "look-lightbox-image",
					children: [b ? /* @__PURE__ */ (0, y.jsx)("p", { children: "This preview link is unavailable. Open the product below to view your look again." }) : /* @__PURE__ */ (0, y.jsx)(al, {
						allowOriginal: o,
						src: S,
						alt: t,
						onError: () => x(!0)
					}, S), e.length > 1 && /* @__PURE__ */ (0, y.jsx)("div", {
						className: "look-image-controls",
						children: e.map((e, t) => /* @__PURE__ */ (0, y.jsxs)("button", {
							"aria-pressed": p === t,
							onClick: () => {
								m(t), x(!1), g("");
							},
							children: ["View ", t + 1]
						}, t))
					})]
				}),
				/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "look-lightbox-details",
					children: [
						/* @__PURE__ */ (0, y.jsx)("p", {
							className: "eyebrow",
							children: "YOUR ALWAYS ON GALLERY"
						}),
						/* @__PURE__ */ (0, y.jsx)(Cc, { children: t }),
						/* @__PURE__ */ (0, y.jsx)(Tc, {
							id: "look-viewer-description",
							children: i || "Your look, up close. Revisit the pieces or keep the image."
						}),
						o && /* @__PURE__ */ (0, y.jsx)(il, {}),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "look-download-actions",
							children: [/* @__PURE__ */ (0, y.jsx)("button", {
								className: "primary",
								disabled: _ || b || !S,
								onClick: () => void T(),
								children: "Save image"
							}), /* @__PURE__ */ (0, y.jsx)("button", {
								className: "secondary",
								disabled: _ || b || !S,
								onClick: () => void ee(),
								children: "Share look"
							})]
						}),
						h && /* @__PURE__ */ (0, y.jsx)("p", {
							role: "status",
							className: "look-share-status",
							children: h
						}),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "look-products",
							children: [/* @__PURE__ */ (0, y.jsx)("h3", { children: "The pieces" }), n.map((e) => /* @__PURE__ */ (0, y.jsxs)(On, {
								to: `/product/${e.id}`,
								onClick: () => {
									f(!1), a?.();
								},
								children: [e.name, /* @__PURE__ */ (0, y.jsx)("span", { children: "View product" })]
							}, e.id))]
						}),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "look-social",
							children: [/* @__PURE__ */ (0, y.jsx)("p", { children: "Share the product" }), /* @__PURE__ */ (0, y.jsxs)("div", {
								className: "look-social-icons",
								children: [
									[
										{
											name: "Facebook",
											Icon: cl,
											href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(C)}`
										},
										{
											name: "X",
											Icon: dl,
											href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(C)}&text=${encodeURIComponent("My Always On find: " + t)}`
										},
										{
											name: "Threads",
											Icon: ml,
											href: `https://www.threads.com/intent/post?text=${encodeURIComponent("My Always On find: " + t + " " + C)}`
										}
									].map(({ name: e, Icon: t, href: n }) => /* @__PURE__ */ (0, y.jsx)("a", {
										href: n,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": `Share on ${e}`,
										title: e,
										children: /* @__PURE__ */ (0, y.jsx)(t, {
											size: 22,
											"aria-hidden": "true"
										})
									}, e)),
									/* @__PURE__ */ (0, y.jsx)("button", {
										"aria-label": "Share to Instagram",
										title: "Instagram",
										disabled: _ || b || !S,
										onClick: () => {
											typeof navigator.share == "function" ? ee() : g("To share on Instagram, select Save image, then add the downloaded photo to a post or story in Instagram.");
										},
										children: /* @__PURE__ */ (0, y.jsx)(_l, {
											size: 22,
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, y.jsx)("button", {
										onClick: () => void E(),
										"aria-label": "Share to TikTok",
										title: "Choose TikTok in your device share menu, or copy the link",
										children: /* @__PURE__ */ (0, y.jsx)(yl, {
											size: 22,
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, y.jsx)("a", {
										href: `https://www.snapchat.com/share?link=${encodeURIComponent(C)}`,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Share on Snapchat",
										title: "Snapchat",
										children: /* @__PURE__ */ (0, y.jsx)(Sl, {
											size: 22,
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, y.jsx)("a", {
										href: `sms:?body=${encodeURIComponent("My Always On find: " + t + " " + C)}`,
										"aria-label": "Share by SMS",
										title: "SMS",
										children: /* @__PURE__ */ (0, y.jsx)(Tl, {
											size: 22,
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, y.jsx)("button", {
										"aria-label": "Copy product link",
										title: "Copy link",
										onClick: () => void navigator.clipboard.writeText(C).then(() => g("Product link copied.")).catch(() => g("Copy the product address after opening its page.")),
										children: /* @__PURE__ */ (0, y.jsx)(Ol, {
											size: 22,
											"aria-hidden": "true"
										})
									})
								]
							})]
						}),
						S && !o && /* @__PURE__ */ (0, y.jsx)("a", {
							className: "look-original text-link",
							href: S,
							target: "_blank",
							rel: "noreferrer",
							children: "Open original image"
						}),
						/* @__PURE__ */ (0, y.jsx)("p", {
							className: "fine",
							children: "Save the image to post on Instagram or another app. Product links open the garment page."
						})
					]
				})
			]
		})] })]
	});
}
//#endregion
//#region src/always-on/AccountHistory.tsx
function Al({ onProduct: e }) {
	let { identity: t } = _r(), n = or(), [r, i] = (0, d.useState)("all"), [a, o] = (0, d.useState)(12), s = n.filter((e) => e.identityId === t?.id), c = s.filter((e) => r === "all" || e.kind === r);
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: "account-history activity-gallery",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "activity-heading",
				children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [
					/* @__PURE__ */ (0, y.jsx)("p", {
						className: "eyebrow",
						children: "YOUR ACTIVITY"
					}),
					/* @__PURE__ */ (0, y.jsx)("h2", { children: "Your recent looks." }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: "Your looks, fits and comparisons. Ready to revisit." })
				] }), /* @__PURE__ */ (0, y.jsxs)("span", {
					className: "activity-count",
					children: [s.length, /* @__PURE__ */ (0, y.jsx)("small", { children: "discoveries" })]
				})]
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "history-tabs",
				children: [
					["all", "All activity"],
					["tryon", "Try-ons"],
					["sizing", "Sizing"],
					["comparison", "Comparisons"]
				].map(([e, t]) => /* @__PURE__ */ (0, y.jsxs)("button", {
					"aria-pressed": r === e,
					onClick: () => {
						i(e), o(12);
					},
					children: [t, /* @__PURE__ */ (0, y.jsx)("span", { children: e === "all" ? s.length : s.filter((t) => t.kind === e).length })]
				}, e))
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "activity-toolbar",
				children: [/* @__PURE__ */ (0, y.jsxs)("p", { children: [
					c.length,
					" ",
					c.length === 1 ? "moment" : "moments",
					" · Most recent first"
				] }), s.length > 0 && t && /* @__PURE__ */ (0, y.jsx)("button", {
					className: "text-link",
					onClick: () => ar(t.id),
					children: "Clear all activity"
				})]
			}),
			t ? c.length ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("div", {
				className: "history-grid",
				children: c.slice(0, a).map((t) => {
					let n = t.pieces.map((e) => e.name).join(" + "), r = t.images.length ? t.images : t.pieces.map((e) => e.image);
					return /* @__PURE__ */ (0, y.jsxs)("article", { children: [/* @__PURE__ */ (0, y.jsx)(kl, {
						exportPerson: t.images.length ? t.identityName : void 0,
						exportSize: t.images.length ? t.size : void 0,
						imagePieces: t.kind === "comparison" || !t.images.length ? t.pieces : void 0,
						isTryOn: t.images.length > 0,
						onProduct: e,
						images: r,
						title: n,
						pieces: t.pieces,
						detail: [
							t.size ? `Viewed size ${t.size}` : "",
							t.recommended ? `Recommended size ${t.recommended}` : "",
							t.guidance
						].filter(Boolean).join(" · ") || void 0,
						children: /* @__PURE__ */ (0, y.jsx)("div", {
							className: `history-photos count-${r.length}`,
							children: r.map((e, n) => /* @__PURE__ */ (0, y.jsx)("img", {
								loading: "lazy",
								src: e,
								alt: t.images.length ? `${t.identityName} · ${t.pieces[n]?.name || "Complete outfit"}` : t.pieces[n]?.name
							}, n))
						})
					}), /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "activity-card-copy",
						children: [
							/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "history-meta",
								children: [/* @__PURE__ */ (0, y.jsx)("span", { children: t.kind === "comparison" ? "COMPARISON" : t.kind === "sizing" ? "YOUR FIT" : t.pieces.length > 1 ? "COMPLETE LOOK" : "TRY-ON" }), /* @__PURE__ */ (0, y.jsx)("time", {
									dateTime: new Date(t.at).toISOString(),
									children: new Date(t.at).toLocaleDateString(void 0, {
										month: "short",
										day: "numeric"
									})
								})]
							}),
							/* @__PURE__ */ (0, y.jsx)("h3", { children: n }),
							(t.size || t.recommended) && /* @__PURE__ */ (0, y.jsxs)("p", {
								className: "activity-fit",
								children: [t.size ? `Size ${t.size}` : `Recommended ${t.recommended}`, t.size && t.size === t.recommended ? " · Your recommendation" : ""]
							}),
							/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "activity-card-actions",
								children: [/* @__PURE__ */ (0, y.jsx)(On, {
									onClick: e,
									to: `/product/${t.pieces[0]?.id}`,
									children: "View product"
								}), /* @__PURE__ */ (0, y.jsx)("button", {
									"aria-label": `Delete ${n} from activity`,
									onClick: () => ir(t.id),
									children: "Remove"
								})]
							})
						]
					})] }, t.id);
				})
			}), c.length > a && /* @__PURE__ */ (0, y.jsx)("button", {
				className: "secondary activity-more",
				onClick: () => o((e) => e + 12),
				children: "Show more looks"
			})] }) : /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "history-empty",
				children: [
					/* @__PURE__ */ (0, y.jsx)("h3", { children: "Your next discovery starts here." }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: "Try a piece, explore sizes or compare your favorites." }),
					/* @__PURE__ */ (0, y.jsx)(On, {
						className: "text-link",
						to: "/collection",
						onClick: e,
						children: "Explore the collection"
					})
				]
			}) : /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "history-empty",
				children: [/* @__PURE__ */ (0, y.jsx)("h3", { children: "Start with your photo or a Twin." }), /* @__PURE__ */ (0, y.jsx)("p", { children: "Upload your photo or choose a Twin to begin your gallery." })]
			}),
			/* @__PURE__ */ (0, y.jsx)("p", {
				className: "fine activity-storage-note",
				children: "Saved for your current profile in this browser session. Clears when you reset your profile."
			})
		]
	});
}
//#endregion
//#region src/always-on/ConnectedAccount.tsx
var jl = () => navigator.language.toLowerCase() === "en-us" ? "imperial" : "metric", Ml = (e, t) => t === "metric" ? `${Math.round(e.height)} cm · ${Math.round(e.weight)} kg` : `${Math.floor(e.height / 2.54 / 12)}′ ${Math.round(e.height / 2.54 % 12)}″ · ${Math.round(e.weight / .453592)} lb`;
function Nl({ savedLooks: e, onDone: t, perspectiveOnly: n = !1, initialSource: r, initialTab: i, onSaved: a, showMeasurements: o = !1 }) {
	let s = _r(), [c, l] = (0, d.useState)(i || r || s.identity?.kind || "photo"), [u, f] = (0, d.useState)([]), [p, m] = (0, d.useState)(s.identity), [h, g] = (0, d.useState)(null), [_, v] = (0, d.useState)(!1), [x, S] = (0, d.useState)(""), [C, w] = (0, d.useState)(""), [T, ee] = (0, d.useState)([
		!1,
		!1,
		!1
	]), [E, D] = (0, d.useState)("All"), [O, te] = (0, d.useState)("All"), [k, ne] = (0, d.useState)("All"), [re, A] = (0, d.useState)("All"), [ie, ae] = (0, d.useState)(1), [oe, se] = Bn("profile-unit", jl), [ce, le] = Bn("personal-fit-details", {}), [j, ue] = Bn("personal-measures", {
		height: 0,
		weight: 0,
		bodyType: "Feminine"
	}), [de, M] = (0, d.useState)(!1);
	(0, d.useEffect)(() => ee([
		!1,
		!1,
		!1
	]), [h, p?.id]), (0, d.useEffect)(() => {
		let e = !0;
		return Or().then((t) => {
			e && f([...t].sort((e, t) => e.name.localeCompare(t.name)));
		}).catch((t) => {
			e && S(t.message);
		}), () => {
			e = !1;
		};
	}, []);
	async function fe(e) {
		if (!_) {
			v(!0), S("");
			try {
				await e();
			} catch (e) {
				S(e instanceof Error ? e.message : "Please try again.");
			} finally {
				v(!1);
			}
		}
	}
	function pe(e) {
		window.dispatchEvent(new CustomEvent("spree-feedback-toast", { detail: e })), a ? a() : t();
	}
	async function me(e) {
		await fe(async () => {
			let t = kr(e);
			await Ar(t), m(t), pe(`${t.name} selected`);
		});
	}
	async function he() {
		if (h && !T.every(Boolean)) throw Error("Confirm your photo permissions before saving.");
		if ((j.height || j.weight) && (!Number.isFinite(j.height) || j.height < 100 || j.height > 230 || !Number.isFinite(j.weight) || j.weight < 30 || j.weight > 250)) throw Error("Enter height from 100–230 cm and weight from 30–250 kg, or leave both blank.");
		if ((j.bodyType === "Feminine" ? [
			ce.bustCm,
			ce.waistCm,
			ce.hipsCm
		] : [ce.chestCm, ce.waistCm]).some((e) => e !== void 0 && (!Number.isFinite(e) || e < 50 || e > 200))) throw Error("Use body measurements from 50–200 cm (19.7–78.7 in), or leave them blank.");
		let e = yr(), t = vr().version, n = p?.kind === "photo" ? p : null;
		if (h) {
			let e = URL.createObjectURL(h);
			try {
				await Yr(e);
			} finally {
				URL.revokeObjectURL(e);
			}
			n = {
				...await jr(h),
				...j,
				kind: "photo",
				name: "Your photo"
			};
		} else if (n) {
			let e = (await Nr()).images.find((e) => e.id === n.id);
			if (!e) throw Error("This photo cannot be verified in this session. Choose it from your device again.");
			n = {
				...n,
				...j,
				url: e.url
			};
		}
		if (e !== yr() || t !== vr().version) throw Error("Your session changed. Choose your photo again.");
		if (!n) throw Error("Choose a photo first.");
		if (j.height || j.weight) {
			if (!j.height || !j.weight) throw Error("Add both height and weight for sizing, or leave both blank.");
			await Ar(n);
		} else br(n);
		pe("Your photo is ready");
	}
	let N = p?.kind === "photo" && !h && p.id === s.identity?.id, P = N && (j.height !== p.height || j.weight !== p.weight || j.bodyType !== p.bodyType);
	function ge() {
		br(null), Cr(), m(null), g(null), w("Photo removed from this demo. For server deletion, use the Privacy Notice request process.");
	}
	let _e = u.filter((e) => (E === "All" || e.sex === E) && (O === "All" || (O === "short" ? e.user_height_centimeters < 170 : e.user_height_centimeters >= 170)) && (k === "All" || (k === "light" ? e.user_weight_kilograms < 70 : e.user_weight_kilograms >= 70)) && (re === "All" || e.user_tshirt_size === re)), ve = Math.floor(j.height / 2.54 / 12), ye = Math.round(j.height / 2.54 % 12 * 10) / 10;
	function be(e) {
		l(e), S(""), w(""), e === "photo" && m(s.identity?.kind === "photo" ? s.identity : null);
	}
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: `connected-account account-studio feedback-fit ${n ? "perspective-editor" : ""}`,
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "account-heading",
				children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [
					/* @__PURE__ */ (0, y.jsx)("p", {
						className: "eyebrow",
						children: "YOUR PROFILE"
					}),
					/* @__PURE__ */ (0, y.jsx)("h1", { children: "Make the collection yours." }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: "No account needed. Your selection stays in this browser session." })
				] }), s.identity && /* @__PURE__ */ (0, y.jsxs)("div", {
					className: "account-status",
					children: [/* @__PURE__ */ (0, y.jsx)(Fc, { identity: s.identity }), /* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("strong", { children: s.identity.name }), /* @__PURE__ */ (0, y.jsx)("small", { children: s.identity.kind === "twin" ? "Active Twin" : "Your uploaded photo" })] })]
				})]
			}),
			/* @__PURE__ */ (0, y.jsxs)("nav", {
				className: "profile-nav",
				"aria-label": "Profile sections",
				children: [
					/* @__PURE__ */ (0, y.jsx)("button", {
						"aria-pressed": c === "photo" || c === "twin",
						onClick: () => be(s.identity?.kind || "photo"),
						children: "Profile"
					}),
					/* @__PURE__ */ (0, y.jsx)("button", {
						"aria-pressed": c === "history",
						onClick: () => l("history"),
						children: "Activity"
					}),
					/* @__PURE__ */ (0, y.jsx)("button", {
						"aria-pressed": c === "saved",
						onClick: () => l("saved"),
						children: "Saved looks"
					})
				]
			}),
			c === "history" ? /* @__PURE__ */ (0, y.jsx)(Al, { onProduct: t }) : c === "saved" ? /* @__PURE__ */ (0, y.jsx)("div", {
				className: "account-contained",
				children: e
			}) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "identity-methods",
				children: [/* @__PURE__ */ (0, y.jsxs)("button", {
					"aria-pressed": c === "photo",
					onClick: () => be("photo"),
					children: [/* @__PURE__ */ (0, y.jsx)(jc, { size: 24 }), /* @__PURE__ */ (0, y.jsxs)("span", { children: ["Add your photo", /* @__PURE__ */ (0, y.jsx)("small", { children: "See the collection on you" })] })]
				}), /* @__PURE__ */ (0, y.jsxs)("button", {
					"aria-pressed": c === "twin",
					onClick: () => be("twin"),
					children: [/* @__PURE__ */ (0, y.jsx)(Kc, { size: 24 }), /* @__PURE__ */ (0, y.jsxs)("span", { children: ["Use a Twin", /* @__PURE__ */ (0, y.jsx)("small", { children: "Try pieces on a model" })] })]
				})]
			}), c === "twin" ? /* @__PURE__ */ (0, y.jsxs)("section", {
				className: "twin-browser",
				children: [
					/* @__PURE__ */ (0, y.jsxs)("div", {
						className: "twin-browser-title",
						children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("h2", { children: "Choose your Twin." }), /* @__PURE__ */ (0, y.jsx)("p", { children: "Choose a model to see the collection on them." })] }), /* @__PURE__ */ (0, y.jsxs)("div", {
							className: "unit-toggle",
							children: [/* @__PURE__ */ (0, y.jsx)("button", {
								onClick: () => se("metric"),
								"aria-pressed": oe === "metric",
								children: "cm / kg"
							}), /* @__PURE__ */ (0, y.jsx)("button", {
								onClick: () => se("imperial"),
								"aria-pressed": oe === "imperial",
								children: "ft / lb"
							})]
						})]
					}),
					/* @__PURE__ */ (0, y.jsxs)("button", {
						type: "button",
						className: "twin-filter-trigger",
						"aria-expanded": de,
						"aria-controls": "twin-filters",
						onClick: () => M(!de),
						children: [
							/* @__PURE__ */ (0, y.jsx)(Qc, { size: 20 }),
							"Filters",
							[
								E,
								O,
								k,
								re
							].filter((e) => e !== "All").length > 0 && /* @__PURE__ */ (0, y.jsx)("span", { children: [
								E,
								O,
								k,
								re
							].filter((e) => e !== "All").length })
						]
					}),
					de && /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "twin-filters",
						id: "twin-filters",
						children: [
							/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Gender", /* @__PURE__ */ (0, y.jsxs)("select", {
								"aria-label": "Gender",
								value: E,
								onChange: (e) => {
									D(e.target.value), ae(1);
								},
								children: [
									/* @__PURE__ */ (0, y.jsx)("option", {
										value: "All",
										children: "All Twins"
									}),
									/* @__PURE__ */ (0, y.jsx)("option", {
										value: "F",
										children: "Feminine"
									}),
									/* @__PURE__ */ (0, y.jsx)("option", {
										value: "M",
										children: "Masculine"
									})
								]
							})] }),
							/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, y.jsxs)("select", {
								"aria-label": "Height",
								value: O,
								onChange: (e) => {
									te(e.target.value), ae(1);
								},
								children: [
									/* @__PURE__ */ (0, y.jsx)("option", { children: "All" }),
									/* @__PURE__ */ (0, y.jsxs)("option", {
										value: "short",
										children: ["Under ", oe === "metric" ? "170 cm" : "5′ 7″"]
									}),
									/* @__PURE__ */ (0, y.jsxs)("option", {
										value: "tall",
										children: [oe === "metric" ? "170 cm" : "5′ 7″", " and above"]
									})
								]
							})] }),
							/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Weight", /* @__PURE__ */ (0, y.jsxs)("select", {
								"aria-label": "Weight",
								value: k,
								onChange: (e) => {
									ne(e.target.value), ae(1);
								},
								children: [
									/* @__PURE__ */ (0, y.jsx)("option", { children: "All" }),
									/* @__PURE__ */ (0, y.jsxs)("option", {
										value: "light",
										children: ["Under ", oe === "metric" ? "70 kg" : "154 lb"]
									}),
									/* @__PURE__ */ (0, y.jsxs)("option", {
										value: "heavy",
										children: [oe === "metric" ? "70 kg" : "154 lb", " and above"]
									})
								]
							})] }),
							/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Reference size", /* @__PURE__ */ (0, y.jsxs)("select", {
								"aria-label": "Reference size",
								value: re,
								onChange: (e) => {
									A(e.target.value), ae(1);
								},
								children: [/* @__PURE__ */ (0, y.jsx)("option", { children: "All" }), [...new Set(u.map((e) => e.user_tshirt_size))].filter(Boolean).map((e) => /* @__PURE__ */ (0, y.jsx)("option", { children: e }, e))]
							})] }),
							/* @__PURE__ */ (0, y.jsx)("button", {
								type: "button",
								className: "text-link twin-clear-filters",
								onClick: () => {
									D("All"), te("All"), ne("All"), A("All"), ae(1);
								},
								children: "Clear filters"
							})
						]
					}),
					/* @__PURE__ */ (0, y.jsx)("div", {
						className: "connected-twins",
						children: _e.slice((ie - 1) * 8, ie * 8).map((e) => /* @__PURE__ */ (0, y.jsxs)("button", {
							disabled: _,
							"aria-pressed": s.identity?.id === e.id,
							onClick: () => void me(e),
							children: [
								/* @__PURE__ */ (0, y.jsx)("img", {
									loading: "lazy",
									src: e.url,
									alt: e.name
								}),
								/* @__PURE__ */ (0, y.jsxs)("strong", { children: [e.name, s.identity?.id === e.id && /* @__PURE__ */ (0, y.jsx)(Yc, { size: 18 })] }),
								/* @__PURE__ */ (0, y.jsx)("small", { children: Ml(kr(e), oe) }),
								/* @__PURE__ */ (0, y.jsx)("small", { children: e.user_tshirt_size ? `Reference size ${e.user_tshirt_size}` : "Preset measurements" })
							]
						}, e.id))
					}),
					!u.length && !x && /* @__PURE__ */ (0, y.jsx)(b, { label: "Loading Twins…" }),
					!_e.length && !!u.length && /* @__PURE__ */ (0, y.jsx)("p", { children: "No Twins match these filters. Try a broader selection." }),
					/* @__PURE__ */ (0, y.jsxs)("nav", {
						className: "review-pagination",
						"aria-label": "Twin pages",
						children: [
							/* @__PURE__ */ (0, y.jsx)("button", {
								disabled: ie === 1,
								onClick: () => ae(ie - 1),
								children: "Previous"
							}),
							/* @__PURE__ */ (0, y.jsxs)("span", { children: [
								ie,
								" / ",
								Math.max(1, Math.ceil(_e.length / 8))
							] }),
							/* @__PURE__ */ (0, y.jsx)("button", {
								disabled: ie * 8 >= _e.length,
								onClick: () => ae(ie + 1),
								children: "Next"
							})
						]
					})
				]
			}) : /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "profile-editor personal-profile",
				children: [/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "profile-source",
					children: [
						/* @__PURE__ */ (0, y.jsx)("h2", { children: "Your photo." }),
						/* @__PURE__ */ (0, y.jsx)("p", { children: "Choose a clear, full-body photo from your phone or computer." }),
						/* @__PURE__ */ (0, y.jsx)(Lc, {
							file: h,
							savedPhotoUrl: p?.kind === "photo" ? p.url : void 0,
							busy: _,
							onError: S,
							onRemove: ge,
							onChange: (e) => {
								g(e), m(null), S(""), w("");
							}
						})
					]
				}), /* @__PURE__ */ (0, y.jsxs)("form", {
					className: "connected-measures",
					onSubmit: (e) => {
						e.preventDefault(), N && !P ? t() : fe(he);
					},
					children: [
						/* @__PURE__ */ (0, y.jsx)("h2", { children: "Make it yours." }),
						/* @__PURE__ */ (0, y.jsx)("p", { children: "Add measurements for size guidance, or skip them." }),
						/* @__PURE__ */ (0, y.jsxs)("details", {
							className: "optional-measures",
							open: o || void 0,
							children: [
								/* @__PURE__ */ (0, y.jsx)("summary", { children: "Height, weight & sizing profile" }),
								/* @__PURE__ */ (0, y.jsxs)("div", {
									className: "unit-toggle",
									children: [/* @__PURE__ */ (0, y.jsx)("button", {
										type: "button",
										"aria-pressed": oe === "metric",
										onClick: () => se("metric"),
										children: "cm / kg"
									}), /* @__PURE__ */ (0, y.jsx)("button", {
										type: "button",
										"aria-pressed": oe === "imperial",
										onClick: () => se("imperial"),
										children: "ft / lb"
									})]
								}),
								/* @__PURE__ */ (0, y.jsxs)("div", {
									className: "form-row",
									children: [oe === "metric" ? /* @__PURE__ */ (0, y.jsxs)("label", { children: ["Height (cm)", /* @__PURE__ */ (0, y.jsx)("input", {
										type: "number",
										step: "any",
										min: "100",
										max: "230",
										value: j.height || "",
										onChange: (e) => ue({
											...j,
											height: Number(e.target.value)
										})
									})] }) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Height (feet)", /* @__PURE__ */ (0, y.jsx)("input", {
										type: "number",
										min: "3",
										max: "7",
										value: ve || "",
										onChange: (e) => ue({
											...j,
											height: (Number(e.target.value) * 12 + ye) * 2.54
										})
									})] }), /* @__PURE__ */ (0, y.jsxs)("label", { children: ["Height (inches)", /* @__PURE__ */ (0, y.jsx)("input", {
										type: "number",
										min: "0",
										max: "11.9",
										step: "0.1",
										value: ye || "",
										onChange: (e) => ue({
											...j,
											height: (ve * 12 + Number(e.target.value)) * 2.54
										})
									})] })] }), /* @__PURE__ */ (0, y.jsxs)("label", { children: [
										"Weight (",
										oe === "metric" ? "kg" : "lb",
										")",
										/* @__PURE__ */ (0, y.jsx)("input", {
											type: "number",
											step: "any",
											min: oe === "metric" ? 30 : 66,
											max: oe === "metric" ? 250 : 551,
											value: j.weight ? Math.round(j.weight / (oe === "metric" ? 1 : .453592) * 10) / 10 : "",
											onChange: (e) => ue({
												...j,
												weight: Number(e.target.value) * (oe === "metric" ? 1 : .453592)
											})
										})
									] })]
								}),
								/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Sizing profile", /* @__PURE__ */ (0, y.jsxs)("select", {
									value: j.bodyType,
									onChange: (e) => ue({
										...j,
										bodyType: e.target.value
									}),
									children: [/* @__PURE__ */ (0, y.jsx)("option", { children: "Feminine" }), /* @__PURE__ */ (0, y.jsx)("option", { children: "Masculine" })]
								})] })
							]
						}),
						/* @__PURE__ */ (0, y.jsxs)("details", { children: [
							/* @__PURE__ */ (0, y.jsx)("summary", { children: "Body measurements & preferred fit" }),
							/* @__PURE__ */ (0, y.jsx)(Hc, {
								value: ce,
								onChange: le,
								bodyType: j.bodyType,
								unit: oe
							}),
							/* @__PURE__ */ (0, y.jsx)("p", {
								className: "fine",
								children: "These optional preferences stay in this browser session; they do not yet affect the sizing service."
							})
						] }),
						/* @__PURE__ */ (0, y.jsx)(Uc, {
							checks: T,
							onChange: ee,
							busy: _,
							saved: N
						}),
						/* @__PURE__ */ (0, y.jsx)("button", {
							className: "primary",
							disabled: _ || !h && p?.kind !== "photo" || !N && !T.every(Boolean),
							children: N ? P ? "Save changes" : "Done" : "Agree & save photo"
						})
					]
				})]
			})] }),
			_ && /* @__PURE__ */ (0, y.jsx)(b, { label: "Saving your selection…" }),
			x && /* @__PURE__ */ (0, y.jsx)("p", {
				role: "alert",
				className: "connection-error",
				children: x
			}),
			C && /* @__PURE__ */ (0, y.jsx)("p", {
				role: "status",
				className: "connection-success",
				children: C
			})
		]
	});
}
//#endregion
//#region src/always-on/ChangePerspective.tsx
function Pl() {
	let { identity: e } = _r(), [t, n] = (0, d.useState)(!1);
	return /* @__PURE__ */ (0, y.jsxs)(oc, {
		open: t,
		onOpenChange: n,
		children: [/* @__PURE__ */ (0, y.jsxs)("div", {
			className: "perspective-shortcut",
			children: [/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "perspective-person",
				children: [e ? /* @__PURE__ */ (0, y.jsx)(Fc, { identity: e }) : /* @__PURE__ */ (0, y.jsx)("span", {
					className: "perspective-guest-icon",
					children: /* @__PURE__ */ (0, y.jsx)(jc, {
						size: 20,
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, y.jsxs)("span", { children: [/* @__PURE__ */ (0, y.jsx)("small", { children: "YOUR PERSPECTIVE" }), /* @__PURE__ */ (0, y.jsx)("strong", { children: e ? e.kind === "twin" ? `${e.name} · Twin` : "You · Your photo" : "Make this look yours" })] })]
			}), /* @__PURE__ */ (0, y.jsxs)(cc, {
				className: "perspective-change",
				children: [/* @__PURE__ */ (0, y.jsx)("span", {
					className: "perspective-camera",
					children: /* @__PURE__ */ (0, y.jsx)(jc, { size: 18 })
				}), /* @__PURE__ */ (0, y.jsx)("span", { children: "Change photo or twin" })]
			})]
		}), /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "perspective-overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
			className: "perspective-sheet",
			"aria-describedby": "perspective-description",
			children: [
				/* @__PURE__ */ (0, y.jsxs)("header", {
					className: "perspective-sheet-heading",
					children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("p", { children: "YOUR PERSONAL VIEW" }), /* @__PURE__ */ (0, y.jsx)(Cc, { children: "Make this look yours." })] }), /* @__PURE__ */ (0, y.jsx)(Dc, {
						className: "perspective-sheet-close",
						"aria-label": "Close photo or twin editor",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, y.jsx)(Tc, {
					id: "perspective-description",
					children: "Switch to your photo or another Twin. Your piece stays open. We’ll refresh your preview and fit guidance."
				}),
				e && /* @__PURE__ */ (0, y.jsxs)("div", {
					className: "perspective-current",
					children: [
						/* @__PURE__ */ (0, y.jsx)(Fc, { identity: e }),
						/* @__PURE__ */ (0, y.jsxs)("span", { children: ["Currently viewing", /* @__PURE__ */ (0, y.jsx)("strong", { children: e?.kind === "twin" ? `${e.name} · Twin` : "Your photo" })] }),
						/* @__PURE__ */ (0, y.jsx)(jc, {
							size: 22,
							"aria-hidden": "true"
						})
					]
				}),
				/* @__PURE__ */ (0, y.jsx)(Nl, {
					perspectiveOnly: !0,
					initialSource: "photo",
					savedLooks: null,
					onDone: () => n(!1),
					onSaved: () => n(!1)
				})
			]
		})] })]
	});
}
//#endregion
//#region src/always-on/production-catalog.json
var Fl = /*#__PURE__*/ JSON.parse("[{\"id\":\"roanne-panelled-knit-maxi-dress-demosite\",\"title\":\"Knit Maxi Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black/Gold\",\"hex\":\"#c9b07e\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/roanne-panelled-knit-maxi-dress-demosite/f6a01f5e-9f01-0000-0b00-46521b5a4bd9.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/roanne-panelled-knit-maxi-dress-demosite/faa01f5e-9f01-0000-0b00-0277b8b29a81.png\"}]}],\"description\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\",\"buy_link\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\"},{\"id\":\"dalida-knit-dress\",\"title\":\"Dalida Knit Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black\",\"hex\":\"#201f22\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$628.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dalida-knit-dress/676bdfb9-9f01-0000-0b00-4eac2c59a2cd.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dalida-knit-dress/666bdfb9-9f01-0000-0b00-ba9b1c869102.png\"}]}],\"description\":\"A knit midi dress featuring an open back with bow details.\\n\\n— Midi length\\n\\n— Mock neck\\n\\n— Double bow details in back\\n\\n— Flattering knit blend\",\"buy_link\":\"https://cultgaia.com/products/dalida-dress-black?variant=43517210525770\"},{\"id\":\"nina-embellished-midi-gown\",\"title\":\"Embellished Midi Gown\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"yellow\",\"hex\":\"#ccb100\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$3995.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/nina-embellished-midi-gown/d3a8b418-9f01-0000-0b00-d455803e64cb.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/nina-embellished-midi-gown/dca8b418-9f01-0000-0b00-78434fc81ee2.png\"}]}],\"description\":\"Designed to turn heads, our best-selling Nina dress is back to drop jaws. This fully beaded beauty is a disco ball’s dream, dripping in multicolored, hand-embellished crystals on a butter yellow base adorned with intricate beading. Its bodycon silhouette sculpts the waist as it scintillates, while the sweetheart neckline and studded straps beautifully illuminate the decolletage (and the dancefloor). This ankle-grazing gem cuts right above your shoes, finished with a back slit that’s both flirtatious and functional--perfect for showing off your moves. It’s guaranteed to be the center of attention, even if you’re seated in the back of the ballroom.\",\"buy_link\":\"https://www.aliceandolivia.com/nina-embellished-midi-gown/CG604E62503F732.html\"},{\"id\":\"seraphis-skirt-black-demosite\",\"title\":\"Seraphis Skirt - Black\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"BLACK\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$998\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/seraphis-skirt-black-demosite/d682db81-a001-0000-0b00-68ec45f2c715.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/seraphis-skirt-black-demosite/9683db81-a001-0000-0b00-36706afad490.jpg\"}]}],\"description\":\"A classic black maxi skirt with a low rise fit and delicate lace embroidery.\\n— Maxi length\\n— Lace embroidered hem\\n— Side zipper\\n— Viscose wool blend\\n— Wear as a set with the Nevina Top\",\"buy_link\":\"https://cultgaia.com/products/seraphis-skirt-black\"},{\"id\":\"womens-jeans-demo-site\",\"title\":\"Dark Jeans\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Denim\",\"hex\":\"#242b41\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$108.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/womens-jeans-demo-site/4be2b6b9-9f01-0000-0b00-0001b2b73a53.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/womens-jeans-demo-site/50e2b6b9-9f01-0000-0b00-4bdef4ec0a73.png\"}]}],\"description\":\"Citizens of Humanity's 'Nora' jeans offer a tailored approach to a timeless silhouette. They're cut from a stretchy denim that is soft yet durable.\"},{\"id\":\"dries-van-noten-printed-georgette-pants\",\"title\":\"Printed Georgette Straight-Leg Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Purple\"},\"size_groups\":[{\"sizes\":[\"FR 34\",\"FR 36\",\"FR 38\",\"FR 40\",\"FR 42\",\"FR 44\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$745\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dries-van-noten-printed-georgette-pants/5769e16e-a001-0000-0b00-3f21e8bd6e0e.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dries-van-noten-printed-georgette-pants/5769e16e-a001-0000-0b00-dc2e7cc9e0f7.jpg\"}]}],\"description\":\"These georgette pants carry a marbled-clay print, with a drawstring waist lending an ease to the floor-grazing straight-leg silhouette.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/dries-van-noten/clothing/straight-leg/printed-georgette-straight-leg-pants/46376663163086418\"},{\"id\":\"pink-cheetah-sweater-demo-site\",\"title\":\"Pink Cheetah Sweater\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Pink\",\"hex\":\"#624749\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$150.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/pink-cheetah-sweater-demo-site/45f4c0b9-9f01-0000-0b00-c78901adb88b.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/pink-cheetah-sweater-demo-site/15f4c0b9-9f01-0000-0b00-fd9d4046d36c.png\"}]}],\"description\":\"https://www.net-a-porter.com/en-us/shop/new-in?pageNumber=4\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/new-in?pageNumber=4\"},{\"id\":\"magdabutrym-floral-appliqued-off-shoulder-midi-dress\",\"title\":\"Floral-Appliquéd Off-the-Shoulder Wool and Silk-Blend Midi Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Gray\",\"hex\":\"#afacac\"},\"size_groups\":[{\"sizes\":[\"FR 34\",\"FR 36\",\"FR 38\",\"FR 40\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$2455\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/magdabutrym-floral-appliqued-off-shoulder-midi-dress/1ce4e16e-a001-0000-0b00-52ccabed9e55.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/magdabutrym-floral-appliqued-off-shoulder-midi-dress/b5e3e16e-a001-0000-0b00-5fe0b6c69894.jpg\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/magdabutrym-floral-appliqued-off-shoulder-midi-dress/ffe3e16e-a001-0000-0b00-041a962f363c.jpg\"}]}],\"description\":\"Tailored from a wool and silk-blend, Magda Butrym's dress has an off-the-shoulder neckline and fitted bodice that narrows into a wrapped waist belt, finished with a signature floral embellishment at one hip. The pencil skirt falls to a midi length.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/magda-butrym/clothing/midi-dresses/floral-appliqued-off-the-shoulder-wool-and-silk-blend-midi-dress/46376663163140618\"},{\"id\":\"ollie-skirt-floral-jacquard-demosite\",\"title\":\"Ollie Skire - Floral Jacquard\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"FLORAL JACQUARD\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$998\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ollie-skirt-floral-jacquard-demosite/a901e26e-a001-0000-0b00-cfad7445304d.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ollie-skirt-floral-jacquard-demosite/7f02e26e-a001-0000-0b00-2e74253431d2.jpg\"}]}],\"description\":\"A floral jacquard midi skirt with suiting inpsired details and a low rise fit.\\n— Midi length\\n— Floral jacquard pattern\\n— Low rise\\n— Wear as a set with the Mee Top\",\"buy_link\":\"https://cultgaia.com/products/ollie-skirt-floral-jacquard\"},{\"id\":\"cocktail-dress\",\"title\":\"Cocktail Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Silver\",\"hex\":\"#b1c0ce\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$500.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cocktail-dress/666ab4b9-9f01-0000-0b00-61f244d5c7cf.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cocktail-dress/656ab4b9-9f01-0000-0b00-27f0b493c51b.png\"}]}],\"description\":\"https://cliopeppiatt.co.uk/products/manhattan-mini-dress\",\"buy_link\":\"https://cliopeppiatt.co.uk/products/manhattan-mini-dress\"},{\"id\":\"gianvitorossi-sofia-sling-70\",\"title\":\"Sofia Sling 70\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"footwear\",\"name\":\"Footwear\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black Leather\"},\"size_groups\":[{\"sizes\":[\"35\",\"36\",\"36.5\",\"37\",\"38\",\"38.5\",\"39\",\"41.5\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$995.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gianvitorossi-sofia-sling-70/109de16e-a001-0000-0b00-13ecb1e605a3.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gianvitorossi-sofia-sling-70/239de16e-a001-0000-0b00-8b23ac3e8058.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gianvitorossi-sofia-sling-70/139de16e-a001-0000-0b00-a50dd67a052c.jpg\"}]}],\"description\":\"Crafted from leather, Sofia Sling 70 is a pointed-toe slingback defined by the Maison's distinctive 70mm heel. Pointed toe. Buckle closure. 3 inch heel (70mm). Handmade in Italy.\",\"buy_link\":\"https://www.nordstrom.com/s/sofia-sling-70/8867870\"},{\"id\":\"plaid-shirt\",\"title\":\"Plaid shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Green/Blue\",\"hex\":\"#867d74\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$50.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/plaid-shirt/6789f1b9-9f01-0000-0b00-dd08a887b560.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/plaid-shirt/7589f1b9-9f01-0000-0b00-308eed0b2511.png\"}]}],\"description\":\"https://www.cettire.com/products/our-legacy-envelop-shirt-966491756/cmVhY3Rpb24vcHJvZHVjdDpSbWlyYjUyV3ZOaTZ3c0FDcg%3D%3D?lng=en&utm_source=google&utm_medium=cpc&gclid=CjwKCAjwpqHTBhAcEiwAj2AfunFVfPmKwjYSuILkJzXnQHDCRcvDeRPX4_J_0bFcZRmxrdBcw6noGRoC1G4QAvD_BwE&gad_source=1&gad_campaignid=1040313833&gbraid=0AAAAAD-gd10bmu_d_AFckRrag0SDErvl3\",\"buy_link\":\"https://www.cettire.com/products/our-legacy-envelop-shirt-966491756/cmVhY3Rpb24vcHJvZHVjdDpSbWlyYjUyV3ZOaTZ3c0FDcg%3D%3D?lng=en&utm_source=google&utm_medium=cpc&gclid=CjwKCAjwpqHTBhAcEiwAj2AfunFVfPmKwjYSuILkJzXnQHDCRcvDeRPX4_J_0bFcZRmxrdBcw6noGRoC1G4QAvD_BwE&gad_source=1&gad_campaignid=1040313833&gbraid=0AAAAAD-gd10bmu_d_AFckRrag0SDErvl3\"},{\"id\":\"heaven-mayhem-clarke-cuff-silver\",\"title\":\"Clarke Cuff\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bracelet\",\"name\":\"Bracelet\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Silver\"},\"size_groups\":[{\"sizes\":[\"OneSize\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$100\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/heaven-mayhem-clarke-cuff-silver/57a4e16e-a001-0000-0b00-193d931c8e35.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/heaven-mayhem-clarke-cuff-silver/5aa4e16e-a001-0000-0b00-9f0cc650a07a.jpg\"}]}],\"description\":\"This cuff bracelet from Heaven Mayhem is crafted from silver-tone metal and features smooth ridges and an enamel center. Cuff, One Size. Imported, China.\",\"buy_link\":\"https://www.shopbop.com/clarke-cuff-heaven-mayhem/vp/v=1/1541145595.htm\"},{\"id\":\"proenzaschouler-nilo-textured-jacquard-dress\",\"title\":\"Nilo Textured Jacquard Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black/Copper\",\"hex\":\"#594236\"},\"size_groups\":[{\"sizes\":[\"S\",\"M\",\"L\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$2990\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/proenzaschouler-nilo-textured-jacquard-dress/d44fdb81-a001-0000-0b00-97e127af8931.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/proenzaschouler-nilo-textured-jacquard-dress/d34fdb81-a001-0000-0b00-b1a41ac1a7d9.jpg\"}]}],\"description\":\"Heavyweight jacquard knit with stretch. Thigh-high side slit, fringe trim, scoop neck, sleeveless, pullover design with no closure. Shell: 41% wool/33% viscose/26% polyamide. Trim: 45% wool/25% viscose/20% polyamide/10% cotton. Made in Italy.\",\"buy_link\":\"https://www.shopbop.com/nilo-dress-proenza-schouler/vp/v=1/1502064002.htm\"},{\"id\":\"crepe-mini-dress-demosite\",\"title\":\"Crepe Mini Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Maroon\",\"hex\":\"#551823\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-mini-dress-demosite/0892185e-9f01-0000-0b00-31fe8de11115.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-mini-dress-demosite/0392185e-9f01-0000-0b00-d3f14c387df8.png\"}]}],\"description\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\",\"buy_link\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\"},{\"id\":\"oversized-sweatshirt-demo-site\",\"title\":\"Oversized Sweatshirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Beige\",\"hex\":\"#aea08f\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$39.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/e376c518-9f01-0000-0b00-c40c4eb16dbb.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/d776c518-9f01-0000-0b00-861beb82368d.png\"}]},{\"color\":{\"name\":\"Grey\",\"hex\":\"#55514c\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$39.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/667b164d-9f01-0000-0b00-7b6728a32185.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/5b7b164d-9f01-0000-0b00-d7c53d3443b2.png\"}]},{\"color\":{\"name\":\"Black\",\"hex\":\"#222023\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$39.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/e7c0194d-9f01-0000-0b00-02bf7cc74b89.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/e5c0194d-9f01-0000-0b00-ea55cce57df3.png\"}]}],\"description\":\"Oversized fit with a lined crossover hood, dropped shoulders, and a kangaroo pocket. Wide cuffs and hem.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1336252003.html\"},{\"id\":\"zara-linen-fringe-jacket\",\"title\":\"Linen Blend Fringe Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Ecru\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$229\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/zara-linen-fringe-jacket/23b8db81-a001-0000-0b00-c8b1dd5d6462.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/zara-linen-fringe-jacket/24b8db81-a001-0000-0b00-245c01a8c8ff.jpg\"}]}],\"description\":\"Jacket made with 36% linen blend yarn. V-neck and long sleeves. Side pockets hidden in the seams. Matching fringe trim detail. Asymmetric hem. Inner lining. Front metal hook closure.\",\"buy_link\":\"https://www.zara.com/us/en/zw-collection-linen-blend-fringe-jacket-p07012800.html\"},{\"id\":\"romma-top-black-demosite\",\"title\":\"Romma Knit Top - Black\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"BLACK\",\"hex\":\"#141715\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$398\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/romma-top-black-demosite/fe73db81-a001-0000-0b00-5131790d3574.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/romma-top-black-demosite/cf74db81-a001-0000-0b00-8a78d99737ed.jpg\"}]}],\"description\":\"An essential sleeveless knit top with a slight mock neck, cropped hem and cinched waist detailing.\\n— Wool blend\\n— Slight mock neck\\n— Cinching at waist\\n— Wear as a set with the Infinity Skirt\",\"buy_link\":\"https://cultgaia.com/products/romma-top-black\"},{\"id\":\"dress-with-draped-neckline\",\"title\":\"Light Blue Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Light Blue\",\"hex\":\"#a7cbeb\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$39.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-draped-neckline/356e2547-9f01-0000-0b00-88c206684442.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-draped-neckline/396e2547-9f01-0000-0b00-e20a63b282a3.png\"}]}],\"description\":\"Satin halter maxi dress with a soft drape. Fitted style with a deep draped neckline and a button-and-loop closure at the nape of the neck. Concealed zipper with hook-and-eye closure at the back and a back vent. Fully lined bodice.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1337767001.html\"},{\"id\":\"tank-top-demo-site\",\"title\":\"Tank Top\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Blue\",\"hex\":\"#c4e1e2\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$28.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/6e93b2b9-9f01-0000-0b00-10b925c33de6.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/6f93b2b9-9f01-0000-0b00-1c660b261f56.png\"}]},{\"color\":{\"name\":\"Yellow\",\"hex\":\"#f1ecb9\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$28.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/d6adb2b9-9f01-0000-0b00-94c314727a0e.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/dfadb2b9-9f01-0000-0b00-ea57da317d53.png\"}]},{\"color\":{\"name\":\"White\",\"hex\":\"#ebeaef\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$28.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/9422b3b9-9f01-0000-0b00-d67a00cb677b.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/9522b3b9-9f01-0000-0b00-5bcdb446ca1f.png\"}]},{\"color\":{\"name\":\"Black\",\"hex\":\"#1e1d22\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$28.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/df7db3b9-9f01-0000-0b00-10434b08c275.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/e37db3b9-9f01-0000-0b00-bbc79f99d9c0.png\"}]}],\"description\":\"https://www.aritzia.com/us/en/product/homestretch%E2%84%A2-2-rib-frequency-tank/116336.html?color=36528\"},{\"id\":\"wide-leg-jeans-demo-site\",\"title\":\"Wide Leg Jeans\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Red\",\"hex\":\"#e2312e\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$250.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/fee313b9-9f01-0000-0b00-4b0f96c331c8.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/f9e313b9-9f01-0000-0b00-cccb379d38d5.png\"}]},{\"color\":{\"name\":\"Pastel Pink\",\"hex\":\"#ebdad4\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$250.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/aeaba21c-a001-0000-0b00-c1c2b3516837.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/a8aba21c-a001-0000-0b00-25cecf680619.png\"}]},{\"color\":{\"name\":\"Purple\",\"hex\":\"#331f4d\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$250.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/17d3a11c-a001-0000-0b00-3f45fa5fd022.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/1ad3a11c-a001-0000-0b00-dd820245b539.png\"}]}],\"description\":\"https://www.net-a-porter.com/en-us/shop/product/alaia/clothing/wide-leg/mid-rise-wide-leg-jeans/46376663163071020\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/alaia/clothing/wide-leg/mid-rise-wide-leg-jeans/46376663163071020\"},{\"id\":\"tapered-jeans-demo-site\",\"title\":\"Tapered Jeans\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Denim Blue\",\"hex\":\"#8396a7\"},\"size_groups\":[{\"sizes\":[\"28/32\",\"29/32\",\"30/32\",\"30/34\",\"31/32\",\"32/32\",\"32/34\",\"33/32\",\"34/32\",\"34/34\",\"36/32\",\"38/32\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$39.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-jeans-demo-site/feaab918-9f01-0000-0b00-b9d80926ec29.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-jeans-demo-site/e3aab918-9f01-0000-0b00-4e7bbc68e195.png\"}]}],\"description\":\"Five-pocket jeans in cotton denim with a slight stretch for optimal comfort. Standard waist-to-low fit with a slightly relaxed skinny leg. Standard waistband and zip fly. The perfect match for your favorite t-shirt.\\n\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1315519005.html\"},{\"id\":\"matteau-breton-tee-002\",\"title\":\"Breton Striped Cotton-Jersey T-Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Red\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$315\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/304f2d82-a001-0000-0b00-0f28e407d771.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/53ebe16e-a001-0000-0b00-1da08bfb4182.jpg\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/75ebe16e-a001-0000-0b00-7cd741fa526d.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/4febe16e-a001-0000-0b00-5489691452c3.jpg\"}]}],\"description\":\"Matteau's 'Breton' T-shirt in Red, made in Australia from breathable cotton-jersey. Classic nautical white and red striped pattern. Boxy fit with dropped shoulders and wide sleeves, finished with a boat neckline.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/matteau/clothing/t-shirts/breton-striped-cotton-jersey-t-shirt/46376663163044985\"},{\"id\":\"flared-fit-pants-in-stretch-jersey-demosite\",\"title\":\"Flared Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Dark Blue\",\"hex\":\"#222028\"},\"size_groups\":[{\"sizes\":[\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$299.00\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/flared-fit-pants-in-stretch-jersey-demosite/b98de16e-a001-0000-0b00-66235a98249f.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/flared-fit-pants-in-stretch-jersey-demosite/ae8de16e-a001-0000-0b00-6fecdb26a08b.png\"}]}],\"description\":\"Details\\nIn travel-friendly jersey with stretch and crease resistance, these BOSS Womenswear pants have a modern flared profile. Cropped length. Metal detail on waistband.\\nflared fit\\nRegular rise\\nHook and zip closure\\nElastic Waistband\\nFlared leg\\nPockets bottom front: Side pockets\\nPockets bottom back: Welt pocket\\nFit foot width: 52,3 cm (20.6 inches)\",\"buy_link\":\"https://www.hugoboss.com/us/flared-fit-pants-in-stretch-jersey/hbna50563831_404.html\"},{\"id\":\"liberowe-fringed-tweed-jacket\",\"title\":\"Fringed Tweed Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Red\"},\"size_groups\":[{\"sizes\":[\"x small\",\"small\",\"medium\",\"large\",\"x large\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$1950\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/liberowe-fringed-tweed-jacket/e2dce16e-a001-0000-0b00-720239500bd1.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/liberowe-fringed-tweed-jacket/e2dce16e-a001-0000-0b00-e09547472bb2.jpg\"}]}],\"description\":\"Made from wool-blend tweed and tailored with paneled seams that create a softly flared silhouette. Fringed trims frame the neckline, front and hem, with oversized hook-and-eye fastenings.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/liberowe/clothing/casual-jackets/fringed-wool-blend-tweed-jacket/46376663163151712\"},{\"id\":\"slim-fit-vest-with-peplum-hem-demosite\",\"title\":\"Slim-Fit Vest\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Dark Blue\",\"hex\":\"#24252e\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$399.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/2f58641a-a001-0000-0b00-80c6a892d916.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/c757641a-a001-0000-0b00-5c8bdb77ab39.png\"}]},{\"color\":{\"name\":\"Off-white\",\"hex\":\"#e6dfd0\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$399.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/e739651a-a001-0000-0b00-85d0bde6c8e7.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/bc38651a-a001-0000-0b00-ff55ad681c16.png\"}]},{\"color\":{\"name\":\"Red\",\"hex\":\"#ba040b\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$399.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/11e3651a-a001-0000-0b00-13ad21bc1eea.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/cfe1651a-a001-0000-0b00-ffcc675eb83e.png\"}]}],\"description\":\"With sleeveless styling and a peplum hem, this BOSS Womenswear vest is crafted in comfortable stretch fabric. Streamlined fit. Double-ended front zipper.\\n\",\"buy_link\":\"https://www.hugoboss.com/us/slim-fit-vest-with-peplum-hem/hbna50563813_404.html\"},{\"id\":\"rodarte-floral-midi-dress\",\"title\":\"Floral-Print Silk-Crepe Midi Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Lavender Floral\"},\"size_groups\":[{\"sizes\":[\"US0\",\"US2\",\"US4\",\"US6\",\"US8\",\"US10\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$1595\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/rodarte-floral-midi-dress/6166db81-a001-0000-0b00-3701c412f2bf.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/rodarte-floral-midi-dress/6166db81-a001-0000-0b00-5951ce7446e5.jpg\"}]}],\"description\":\"Rodarte's \\\"Lavender Bouquet\\\" midi dress, cut from silk-crepe and adorned with understated botanical motifs. Defined by a one-shoulder neckline with draped sleeve detail for refined dimension.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/rodarte/clothing/midi-dresses/floral-print-silk-crepe-midi-dress/46376663163105286\"},{\"id\":\"cami-top-dove-demosite\",\"title\":\"Cami Top - Dove\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"DOVE\",\"hex\":\"#cdb5a0\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$498\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cami-top-dove-demosite/914ae16e-a001-0000-0b00-1c3e5330869a.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cami-top-dove-demosite/5d4be16e-a001-0000-0b00-99e6a16539ab.jpg\"}]}],\"description\":\"An asymmetrical, shoulder-baring top gathered at the waist and designed in voluminous paneling of mini-pleated plisse.\\n— Asymmetrical silhouette\\n— Relaxed, yet gathered at the waist\\n— Stretch fit\\n— Exposed shoulder\\n— Mini-pleated chintz plisse\",\"buy_link\":\"https://cultgaia.com/products/cami-top-dove\"},{\"id\":\"textured-knit-resort-shirt\",\"title\":\"Textured Knit Resort Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Heathered Oat\",\"hex\":\"#d6cac3\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$59.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/eed8ebb9-9f01-0000-0b00-c0e31d044bcd.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/efd8ebb9-9f01-0000-0b00-06bb400d493c.png\"}]},{\"color\":{\"name\":\"Blue\",\"hex\":\"#cfd1d5\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$59.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/f601ecb9-9f01-0000-0b00-22c5aba89f4f.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/f601ecb9-9f01-0000-0b00-bfc9d2b73dd3.png\"}]},{\"color\":{\"name\":\"Black\",\"hex\":\"#1b1b1e\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$59.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/2026ecb9-9f01-0000-0b00-cbbdcf2ae2a2.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/4b26ecb9-9f01-0000-0b00-606a31a0ecf2.png\"}]}],\"description\":\"Made from 100% organic cotton in a sweater yarn with a jacquard-like texture. Reads elevated, wears relaxed. Button it up with chinos or linen trousers.\",\"buy_link\":\"https://www.everlane.com/products/mens-textured-knit-resort-shirt-heathered-oat\"},{\"id\":\"cardigan-in-a-flowy-fabric-demosite\",\"title\":\"Cardigan in Flowy Fabric\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Dark Green\",\"hex\":\"#144632\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$14.99\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/7f53e16e-a001-0000-0b00-54696801703a.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/2153e16e-a001-0000-0b00-4db39f2c264f.png\"}]},{\"color\":{\"name\":\"Maroon\",\"hex\":\"#541721\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$14.99\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/2758e16e-a001-0000-0b00-69c244b67642.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/2458e16e-a001-0000-0b00-45c7b51e5fa4.png\"}]},{\"color\":{\"name\":\"Sky Blue\",\"hex\":\"#bed3e6\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$14.99\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/705ce16e-a001-0000-0b00-c6f522b99174.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/105ce16e-a001-0000-0b00-2160ef76bab3.png\"}]}],\"description\":\"Lightweight ribbed cardigan with a round neck and buttons down the front.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1328852003.html\"},{\"id\":\"denim-jacket-demo-site\",\"title\":\"Denim Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Red\",\"hex\":\"#e72f31\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$150.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/25b1b4b9-9f01-0000-0b00-2462c95817a6.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/21b1b4b9-9f01-0000-0b00-14cdbdd1c442.png\"}]},{\"color\":{\"name\":\"Pastel Pink\",\"hex\":\"#f2dfdb\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$150.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/a7d3b4b9-9f01-0000-0b00-20cf0d85b245.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/c6d3b4b9-9f01-0000-0b00-798f2a327298.png\"}]},{\"color\":{\"name\":\"Purple\",\"hex\":\"#36204f\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$150\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/bdfbb4b9-9f01-0000-0b00-ec30cf04265b.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/bcfbb4b9-9f01-0000-0b00-5f2d84d4c006.png\"}]}],\"description\":\"https://www.net-a-porter.com/en-us/shop/product/alaia/clothing/casual-jackets/denim-cotton-jacket/46376663163071002\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/alaia/clothing/casual-jackets/denim-cotton-jacket/46376663163071002\"},{\"id\":\"burberry-check-silk-scarf-sand\",\"title\":\"Check Silk Scarf - Sand\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"scarf\",\"name\":\"Scarf\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Sand\"},\"size_groups\":[{\"sizes\":[\"OneSize\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$555\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/burberry-check-silk-scarf-sand/7142e16e-a001-0000-0b00-039518de9b2d.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/burberry-check-silk-scarf-sand/8a42e16e-a001-0000-0b00-c13053fef6e5.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/burberry-check-silk-scarf-sand/7342e16e-a001-0000-0b00-f938536eb2bd.jpg\"}]}],\"description\":\"Fabric: Silk twill. Signature checkered pattern with contrast border. Shell: 100% silk. Made in Italy. Dry clean only.\",\"buy_link\":\"https://www.shopbop.com/check-silk-scarf-burberry/vp/v=1/1533005.htm\"},{\"id\":\"cropped-jacket-demo-site\",\"title\":\"Cropped Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Off White\",\"hex\":\"#ded6ca\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$98.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cropped-jacket-demo-site/f963e78a-9f01-0000-0b00-5cae474a60a9.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cropped-jacket-demo-site/5164e78a-9f01-0000-0b00-aa4f81732e9c.png\"}]}],\"description\":\"https://www.aritzia.com/us/en/product/little-cropped-jacket/125276.html?color=11420\",\"buy_link\":\"https://www.aritzia.com/us/en/product/little-cropped-jacket/125276.html?color=11420\"},{\"id\":\"elene-top-bleu-taormina-paisley\",\"title\":\"Elene Top\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Taormina Paisley\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$278.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/elene-top-bleu-taormina-paisley/d07ee16e-a001-0000-0b00-f593310d52ae.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/elene-top-bleu-taormina-paisley/da7ee16e-a001-0000-0b00-9f46ee2cefc1.png\"}]}],\"description\":\"Rendered in buttery silk-viscose twill, the Elene Top is patterned with our Taormina Paisley, an intricate motif inspired by 19th-century French Provençal textiles. With a relaxed silhouette, it features full-length sleeves and self-covered buttons down the front.\",\"buy_link\":\"https://www.shopdoen.com/products/elene-top-bleu-taormina-paisley?variant=42264239800433\"},{\"id\":\"mcqueen-shoulder-bow-blouse\",\"title\":\"Shoulder Bow Blouse\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Ivory\"},\"size_groups\":[{\"sizes\":[\"36\",\"38\",\"40\",\"42\",\"44\",\"46\",\"48\",\"50\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"£1100\",\"currency\":\"GBP\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/mcqueen-shoulder-bow-blouse/f9f2e16e-a001-0000-0b00-002004f84938.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/mcqueen-shoulder-bow-blouse/0df3e16e-a001-0000-0b00-e3e9bdeeffe0.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/mcqueen-shoulder-bow-blouse/f6f2e16e-a001-0000-0b00-341cbda41913.jpg\"}]}],\"description\":\"Blouse in light ivory silk crepe de Chine with an asymmetric neckline and shoulder bow detailing. Long sleeves with gathered cuffs. Regular fit. 100% Silk. Made in Italy.\",\"buy_link\":\"https://www.alexandermcqueen.com/en-gb/pr/shoulder-bow-blouse-A004JDQBADT9007.html\"},{\"id\":\"cecilia-pump\",\"title\":\"Cecilia Pump\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"footwear\",\"name\":\"Footwear\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Grey Suede\"},\"size_groups\":[{\"sizes\":[\"35\",\"36\",\"36.5\",\"37\",\"37.5\",\"38\",\"38.5\",\"39\",\"39.5\",\"40\",\"40.5\",\"41\",\"42\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$980.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cecilia-pump/5c64e16e-a001-0000-0b00-8e144adb7c65.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cecilia-pump/2163e16e-a001-0000-0b00-4d8ec7a833ae.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cecilia-pump/5364e16e-a001-0000-0b00-384b6edda2fc.png\"}]}],\"description\":\"A refined suede pump designed to gently embrace and visually slim the foot. Crafted in Italy to be exceptionally lightweight. Signature details include sculptural Ona heel and gold staple detail at vamp.\",\"buy_link\":\"https://khaite.com/products/cecilia-pump-50-in-grey?utm_medium=paid&utm_source=shop_campaigns&shpcid=49633&utm_campaign=49633&variant=41569630093375&_su_rec=49vsfQTTHQPbSYeO3y1eiVlcAfzx38R3jt7yCUjv3j4w4iDNiDVst4mD75zT1s7aT2V66NWHNrr71fSde0F4jh1bNp9B1J2hKZ7HP7BWzmK7r5FaMNXv87m6NTtjptGSjh6eTZFLOj4FbRvMSak8FKJ6nfzs8WyNQ1kJDEo3AHFF4_-0iQ4J5VGV4AM1X9v1v-t6YYcuyZdXDdfxeyXF89xaxp7zjOOyo8GkwkifQFC_falaJeRPRe51LIy8uPm-S9DkkHQW6c9uhZVzV9Yd7v1FocgLzBCVFi1Ar4iNde4picbmdRG59Nvq6qxdquKfsC_wne_vAC8TV4qbHqxDUwTT\"},{\"id\":\"leather-pants-demo-site\",\"title\":\"Leather Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black\",\"hex\":\"#322d31\"},\"size_groups\":[{\"sizes\":[],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$35.90\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/leather-pants-demo-site/ccd4e16e-a001-0000-0b00-d945f30e0c8f.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/leather-pants-demo-site/6ed4e16e-a001-0000-0b00-35e66d0b6e94.png\"}]}],\"description\":\"Description and fitting\\nH&M Premium Selection\\nSoft leather trousers with a low waist and concealed zip, hook, and button fastening. Slanted pockets, welt back pocket with triangular flap and button, horizontal seam at the knees, and a stripe at the front and back.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1334191001.html\"},{\"id\":\"regular-fit-linen-blend-polo-shirt-demo-site\",\"title\":\"Black & White Polo Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black/Stripes\",\"hex\":\"#171417\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$39.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-linen-blend-polo-shirt-demo-site/80d7bb18-9f01-0000-0b00-59cd96a6ff82.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-linen-blend-polo-shirt-demo-site/1ed7bb18-9f01-0000-0b00-d7e4dc2ff530.png\"}]}],\"description\":\"Polo shirt in a soft linen-blend knit. Features a ribbed V-neck and ribbed trim on the sleeves and hem. Standard fit for a classic and comfortable silhouette.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1311090003.html\"},{\"id\":\"hudson-st-pant-demosite\",\"title\":\"Wide-Leg Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"men\",\"name\":\"Men\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"ermine\",\"hex\":\"#af855d\"},\"size_groups\":[{\"sizes\":[],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$695.00\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/hudson-st-pant-demosite/d3b4e16e-a001-0000-0b00-66ff7bec0579.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/hudson-st-pant-demosite/beb4e16e-a001-0000-0b00-2325509ad765.png\"}]}],\"description\":\"Details\\nRelaxed mid-rise pant in fluid regency stripe. Fabric is a fluid viscose twill in a refined regency stripe, woven with subtle lurex for soft luminosity. Designed with front pleats that open into a draped, wide-leg silhouette. Finished with elasticized back waistband, side seam pockets, a single welt pocket at the back, and subtle topstitch detailing throughout.\",\"buy_link\":\"https://www.twpclothing.com/products/hudson-st-ivory-green?variant=52746923508075\"},{\"id\":\"regular-fit-blazer-in-italian-made-virgin-wool-demosite\",\"title\":\"Regular-Fit Blazer\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black\",\"hex\":\"#1c1d21\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$599.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-blazer-in-italian-made-virgin-wool-demosite/9b74bf18-9f01-0000-0b00-667a60357b07.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-blazer-in-italian-made-virgin-wool-demosite/8674bf18-9f01-0000-0b00-08be631d307e.png\"}]}],\"description\":\"With natural stretch for ease of movement, this BOSS Womenswear blazer is crafted from long-lasting Italian-made wool. Tailored to a regular fit.\\n\",\"buy_link\":\"https://www.hugoboss.com/us/regular-fit-blazer-in-italian-made-virgin-wool/hbna50490020_404.html\"},{\"id\":\"black-shorts-demo-site\",\"title\":\"Pleated Shorts\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black\",\"hex\":\"#262522\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$108.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/013fb7b9-9f01-0000-0b00-929d9e41f7da.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/f73eb7b9-9f01-0000-0b00-629b6c452dd0.png\"}]},{\"color\":{\"name\":\"Beige\",\"hex\":\"#e5dcd0\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$108.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/f77eb7b9-9f01-0000-0b00-86ef17417155.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/fa7eb7b9-9f01-0000-0b00-d8eb2b952474.png\"}]}],\"description\":\"These are pleated shorts with a low rise, relaxed fit and darted back waist for shaping. They're finely tailored from soft stretch fabric that’s lightweight and drapey for everyday wear. This fabric is sourced from a premier Portuguese mill and made with 60% recycled polyester and 29% LENZING™ ECOVERO™ Viscose.\\n\\n\",\"buy_link\":\"https://www.aritzia.com/us/en/product/touchpoint-short/130244.html?color=1274\"},{\"id\":\"regular-fit-shirt-demo-site\",\"title\":\"Striped Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Cream/Stripes\",\"hex\":\"#d0c9bb\"},\"size_groups\":[{\"sizes\":[\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$24.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shirt-demo-site/c3b6b818-9f01-0000-0b00-6e8ee0559507.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shirt-demo-site/cdb6b818-9f01-0000-0b00-915f790407cb.png\"}]}],\"description\":\"Short-sleeved shirt in a soft, airy cotton blend fabric. Features an open collar, classic placket, back yoke, and straight hem. Standard fit for a comfortable, classic silhouette.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1309692003.html\"},{\"id\":\"eel-effect-leather-sneakers\",\"title\":\"Eel-effect leather sneakers\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"footwear\",\"name\":\"Footwear\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"red\"},\"size_groups\":[{\"sizes\":[\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",\"41\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$591.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/eel-effect-leather-sneakers/8e73e16e-a001-0000-0b00-75828a021c90.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/eel-effect-leather-sneakers/c474e16e-a001-0000-0b00-19004a878f73.png\"}]}],\"description\":\"Unexpected color contrasts are a signature of Dries Van Noten. These lace-up shoes are crafted from glossy red leather and shaped to a streamlined silhouette. Crisp white laces and trim highlight the clean lines, creating a striking contrast against the rich surface.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/dries-van-noten/shoes/low-top/eel-effect-leather-sneakers/46376663163048440?cm_mmc=LinkshareUS-_-0c5b5rpoqTU-_-Custom-_-LinkBuilder&utm_source=rakuten&utm_medium=affiliation&utm_campaign=US_3556869&utm_content=US_Vogue&utm_term=0c5b5rpoqTU-FiB5IaT_0jk.K8J5lJctsw&ranMID=24449&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-FiB5IaT_0jk.K8J5lJctsw&siteID=0c5b5rpoqTU-FiB5IaT_0jk.K8J5lJctsw&adj_t=663co1a&adj_campaign=US_3556869&linkshare_siteID=0c5b5rpoqTU-FiB5IaT_0jk.K8J5lJctsw&linkshare_affiliate_mid=24449\"},{\"id\":\"relaxed-fit-linen-blend-tailored-trousers-demo-site\",\"title\":\"Linen Trousers\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"White\",\"hex\":\"#ffffff\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$44.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/b04ebc18-9f01-0000-0b00-2ff2cf7cc633.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/ac4ebc18-9f01-0000-0b00-886f5cf80809.png\"}]},{\"color\":{\"name\":\"Beige\",\"hex\":\"#d5c4ac\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$44.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/1f6ef64c-9f01-0000-0b00-71f8c36a934a.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/226ef64c-9f01-0000-0b00-2896ac57a52b.png\"}]},{\"color\":{\"name\":\"Navy\",\"hex\":\"#24293b\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$44.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/63ea034d-9f01-0000-0b00-3e94e9e1f415.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/1fe9034d-9f01-0000-0b00-2d4dfc6d5709.png\"}]}],\"description\":\"Trousers in a lightweight cotton and linen blend with pleats. Features a gathered elasticated waistband, zip and button fastening, side pockets, and welt back pockets. A relaxed fit for a casual yet not oversized silhouette. The linen and cotton blend combines the softness of cotton with the structure of linen to create a textured, breathable fabric with a beautiful drape.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1283074001.html\"},{\"id\":\"crepe-viscose-jersey-dress-abyss-demosite\",\"title\":\"Jersey Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Navy\",\"hex\":\"#222638\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-viscose-jersey-dress-abyss-demosite/ae46f85d-9f01-0000-0b00-aa96f23948a7.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-viscose-jersey-dress-abyss-demosite/ae46f85d-9f01-0000-0b00-782d404e324c.jpeg\"}]}],\"description\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\",\"buy_link\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\"},{\"id\":\"relaxed-fit-t-shirt-demo-site\",\"title\":\"Relaxed-Fit T-Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Dark Gray\",\"hex\":\"#656a72\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$12.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/6c226c1a-a001-0000-0b00-6276ad052655.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/1a226c1a-a001-0000-0b00-e98fd7d6ddca.png\"}]},{\"color\":{\"name\":\"White\",\"hex\":\"#ffffff\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$12.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/ccb8a14c-9f01-0000-0b00-784e1fae6a77.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/d2b8a14c-9f01-0000-0b00-ec515263934b.png\"}]}],\"description\":\"Relaxed-fit T-shirt in medium-weight cotton jersey with a casual but not oversized silhouette. Ribbed round neck, dropped shoulders, and a straight-cut hem.\",\"buy_link\":\"https://www2.hm.com/en_us/productpage.1309319012.html\"},{\"id\":\"floral-print-pants\",\"title\":\"Floral-Print Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Floral\",\"hex\":\"#bf9677\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$200.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/d909b6b9-9f01-0000-0b00-f48e31d3b35d.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/d809b6b9-9f01-0000-0b00-b2112cd7a0e3.png\"}]},{\"color\":{\"name\":\"Black Floral-Print\",\"hex\":\"#2a242b\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$200.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/1b2fb6b9-9f01-0000-0b00-4e94e870165f.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/202fb6b9-9f01-0000-0b00-63714f3ee264.png\"}]}],\"description\":\"https://www.net-a-porter.com/en-us/shop/product/gucci/clothing/shirts/floral-print-silk-twill-shirt/46376663163085053\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/gucci/clothing/shirts/floral-print-silk-twill-shirt/46376663163085053\"},{\"id\":\"izel-sweater-black-demosite\",\"title\":\"Sweater - Black\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"BLACK\",\"hex\":\"#181619\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$358\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/izel-sweater-black-demosite/08c4e16e-a001-0000-0b00-5a680f212545.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/izel-sweater-black-demosite/d4c4e16e-a001-0000-0b00-af88a3995e97.jpg\"}]}],\"description\":\"An essential turtleneck bodysuit crafted from a flattering knit blend.\\n— Turtleneck\\n— Snap closure\\n— Knit blend\\n— Figure hugging fabric\",\"buy_link\":\"https://cultgaia.com/products/izel-sweater-black\"},{\"id\":\"couture-virgin-wool-blend-mini-dress-demosite\",\"title\":\"Couture Mini Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black/white\",\"hex\":\"#181619\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/couture-virgin-wool-blend-mini-dress-demosite/1bfd1b5e-9f01-0000-0b00-6d49ef98ed30.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/couture-virgin-wool-blend-mini-dress-demosite/1efd1b5e-9f01-0000-0b00-a0ea46aa07f3.png\"}]}],\"description\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\",\"buy_link\":\"https://www.bottegaveneta.com/en-en/crepe-viscose-jersey-dress-abyss-844030V4YX04140.html\"},{\"id\":\"printed-shorts\",\"title\":\"Blue Embroidered Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"White\",\"hex\":\"#91c1cd\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$250.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/printed-shorts/d6241ec8-9f01-0000-0b00-e0a14ce132f3.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/printed-shorts/ae241ec8-9f01-0000-0b00-ee3856729ec1.png\"}]}],\"description\":\"https://isleofmonday.com/products/roberto-cavalli-fw-2002-patchwork-shorts\",\"buy_link\":\"https://isleofmonday.com/products/roberto-cavalli-fw-2002-patchwork-shorts\"},{\"id\":\"simkhai-laia-bustier-strapless-maxi-dress\",\"title\":\"Laia Bustier Strapless Maxi Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black Multi\"},\"size_groups\":[{\"sizes\":[\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$695.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/simkhai-laia-bustier-strapless-maxi-dress/738bdb81-a001-0000-0b00-30082a9fa482.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/simkhai-laia-bustier-strapless-maxi-dress/998adb81-a001-0000-0b00-8470d4c0d00a.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/simkhai-laia-bustier-strapless-maxi-dress/d48bdb81-a001-0000-0b00-f3b8d6801f19.png\"}]}],\"description\":\"Features\\nStraight neck\\nZipper closure at back\\nStrapless\\nDrape detail at left hip\\nColor-blocked design\\nTextured design\\nLined\\nImported\\nSize & Fit\\nFits true to size, order your normal size\\nDesigned for a floor-length look\\nApprox. 54.5\\\" from shoulder to hem, based on a size 4\\nMaterials & Care\\n97% polyester/3% spandex; lining: 100% polyester\\nDry clean\",\"buy_link\":\"https://www.bloomingdales.com/shop/product/simkhai-laia-bustier-strapless-maxi-dress?ID=6251579&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliates&ranMID=13867&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-05Y_FxH7GpR5oqWyPXSZTA&LinkshareID=0c5b5rpoqTU-05Y_FxH7GpR5oqWyPXSZTA&m_sc=aff&PartnerID=LINKSHARE&cm_mmc=LINKSHARE-_-n-_-n-_-n&ranPublisherID=0c5b5rpoqTU&ranLinkID=1&ranLinkTypeID=10&pubNAME=Vogue\"},{\"id\":\"renesme-dress-cheetah\",\"title\":\"Renesme Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Cheetah\",\"hex\":\"#bd9068\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$528.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/renesme-dress-cheetah/d8c7b8b9-9f01-0000-0b00-eb61ca59c394.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/renesme-dress-cheetah/d6c7b8b9-9f01-0000-0b00-c254e75d95b0.png\"}]}],\"description\":\"A silk twill midi dress featuring a high neckline and a classic cheetah print.\\n\\n— Midi length\\n\\n— High neck\\n\\n— Adjustable straps\\n\\n— Silk twill\",\"buy_link\":\"https://cultgaia.com/products/renesme-dress-cheetah?variant=43517236248650\"},{\"id\":\"ralphlauren-polo-play-thong-sandal-limeade\",\"title\":\"Polo Play Leather Thong Sandal\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"footwear\",\"name\":\"Footwear\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Limeade\"},\"size_groups\":[{\"sizes\":[\"5\",\"5.5\",\"6\",\"6.5\",\"7\",\"7.5\",\"8\",\"8.5\",\"9\",\"9.5\",\"10\",\"11\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$209.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ralphlauren-polo-play-thong-sandal-limeade/bd5edb81-a001-0000-0b00-d3de65e8ff4e.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ralphlauren-polo-play-thong-sandal-limeade/db5edb81-a001-0000-0b00-56c604656b10.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ralphlauren-polo-play-thong-sandal-limeade/bf5edb81-a001-0000-0b00-57e83949789b.jpg\"}]}],\"description\":\"Part of our Polo Play collection, these thong sandals are crafted with full-grain sheep leather in a vibrant selection of colors inspired by Ralph Lauren's iconic Polo shirt. The minimalist silhouette is debossed with our signature Pony at the strap. 0.25\\\" (5mm) heel height. Thong silhouette. Slip-on styling. Upper and lining: 100% leather. Imported.\",\"buy_link\":\"https://www.ralphlauren.com/women-footwear-shoes/polo-play-leather-thong-sandal/0080278625.html\"},{\"id\":\"pucci-printed-mesh-maxi-dress\",\"title\":\"Printed Mesh Maxi Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Beige Print\"},\"size_groups\":[{\"sizes\":[\"IT38\",\"IT40\",\"IT42\",\"IT44\",\"IT46\",\"IT48\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$1060\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/pucci-printed-mesh-maxi-dress/ec57db81-a001-0000-0b00-376d50e4fca5.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/pucci-printed-mesh-maxi-dress/cb57db81-a001-0000-0b00-b84c44920403.jpg\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/pucci-printed-mesh-maxi-dress/ce57db81-a001-0000-0b00-d0f508615e3e.jpg\"}]}],\"description\":\"PUCCI's maxi dress is crafted in Italy from tonal brown mesh with a swirling, wave-like print. Designed in a classic column silhouette that falls to a full length. All-over printing means each piece is one of a kind.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/pucci/clothing/maxi-dresses/printed-mesh-maxi-dress/46376663163078433\"},{\"id\":\"gauze-shirt-boxy-fit\",\"title\":\"Gauze Shirt in Boxy Fit\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Indigo\",\"hex\":\"#3f4f70\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$59.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/37b0f1b9-9f01-0000-0b00-0f7af349d4d9.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/3ab0f1b9-9f01-0000-0b00-c4d304c379e7.png\"}]},{\"color\":{\"name\":\"Beige\",\"hex\":\"#9e927f\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$59.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/dde0f1b9-9f01-0000-0b00-f82ebbcd62fd.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/e0e0f1b9-9f01-0000-0b00-81561b33814d.png\"}]},{\"color\":{\"name\":\"Black\",\"hex\":\"#191618\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$59.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/63fdf1b9-9f01-0000-0b00-fec4e75c6441.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/17fdf1b9-9f01-0000-0b00-2bdb8be55847.png\"}]}],\"description\":\"Gauze weave with crinkled texture. Dropped shoulder, long sleeves with button cuffs. Spread collar, button front.\",\"buy_link\":\"https://www.gapfactory.com/browse/product.do?pid=1176021021&vid=1&pcid=1052118&cid=1052118&nav=meganav%3AMen%3ANew+%26+Featured%3ANew+Arrivals#pdp-page-content\"},{\"id\":\"regular-fit-shorts-demo-site\",\"title\":\"Striped Shorts\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Cream/Stripes\",\"hex\":\"#cec6b4\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$19.99\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shorts-demo-site/28fdf924-9f01-0000-0b00-b13f9c967197.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shorts-demo-site/ccfcf924-9f01-0000-0b00-0edf59549ab0.png\"}]}],\"description\":\"Shorts in a textured cotton blend fabric with an elasticated waistband and drawstring. Discreet side pockets and an inset back pocket. Standard fit for a classic and comfortable silhouette.\",\"buy_link\":\"https://www2.hm.com/en_us/men/products/shorts.html?patterns=Striped&id=aa14\"},{\"id\":\"canvas-baggy-trouser-jeans\",\"title\":\"Canvas Baggy Trouser Jeans\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Dark Indigo\",\"hex\":\"#131c32\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$50.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/6f81ecb9-9f01-0000-0b00-7e21895c8984.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/7081ecb9-9f01-0000-0b00-2f048368f461.png\"}]},{\"color\":{\"name\":\"Striped\",\"hex\":\"#7e909b\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$50.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/5aa1ecb9-9f01-0000-0b00-28c298b882d8.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/53a1ecb9-9f01-0000-0b00-4929287ddfe3.png\"}]}],\"description\":\"A fit that moves freely. Low slung with a slouchy, loose leg. A baggy canvas jean in a dark indigo wash. Zip fly, front slant pockets and back button-flap patch pockets.\",\"buy_link\":\"https://www.gap.com/browse/product.do?pid=801572002&vid=1#pdp-page-content\"},{\"id\":\"slim-fit-blouse-in-cotton-with-peplum-hem-demosite\",\"title\":\"Slim-Fit Blouse\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"White\",\"hex\":\"#ffffff\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/e9fd661a-a001-0000-0b00-2c40bfd2559e.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/a3fc661a-a001-0000-0b00-720a6635427f.png\"}]},{\"color\":{\"name\":\"Blue\",\"hex\":\"#b4cff4\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/2ea8671a-a001-0000-0b00-03c06e6ac6c5.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/fda6671a-a001-0000-0b00-3db5feb46583.png\"}]},{\"color\":{\"name\":\"Mint Green\",\"hex\":\"#d2e3d7\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/0c3c681a-a001-0000-0b00-4918b93026fa.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/db3a681a-a001-0000-0b00-e08a7fb0acde.png\"}]},{\"color\":{\"name\":\"Brown\",\"hex\":\"#765140\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/2127691a-a001-0000-0b00-41189d5d7afc.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/f925691a-a001-0000-0b00-86bb9c110fe6.png\"}]}],\"description\":\"With a defined fit flaring to an elegant peplum hem, this HUGO Womenswear blouse is crafted in crisp cotton poplin. Embroidered logo below rear collar.\\n\",\"buy_link\":\"https://www.hugoboss.com/us/slim-fit-blouse-in-cotton-with-peplum-hem/hbna50562961_100.html#cgid=11100\"},{\"id\":\"braiden-top-wren-demosite\",\"title\":\"Braiden Top - Wren\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"WREN\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$898\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/braiden-top-wren-demosite/a13be16e-a001-0000-0b00-e09ce4de2501.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/braiden-top-wren-demosite/7d3ce16e-a001-0000-0b00-e0d9c60f6711.jpg\"}]}],\"description\":\"A braided cotton corset top with thin straps and a sculpted bodice.\\n— Cotton utility fabrication\\n— Braided bodice\\n— Thin straps\\n— Zipper closure\",\"buy_link\":\"https://cultgaia.com/products/braiden-top-wren\"},{\"id\":\"katya-sculpted-bow-romper\",\"title\":\"Sculpted Bow Romper\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black/White\",\"hex\":\"#15181d\"},\"size_groups\":[{\"sizes\":[\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$395.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/katya-sculpted-bow-romper/8508b818-9f01-0000-0b00-93500900b1ac.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/katya-sculpted-bow-romper/7e08b818-9f01-0000-0b00-98abf0e2024a.png\"}]}],\"description\":\"A romper that looks like the chicest mini dress. With hidden inner shorts, our Katya guarantees comfort and ease of movement. It’s designed in a matte satin crepe with sculpted seams that define the waist, creating a subtle hourglass shape. The oversized satin bow makes it feminine and fun, while the strapless neckline stays secure thanks to an inner silicone grip. It’s polished, playful, and super photogenic.\",\"buy_link\":\"https://www.aliceandolivia.com/katya-sculpted-bow-romper/CC603210802G980.html\"},{\"id\":\"toryburch-sequin-mesh-top\",\"title\":\"Sequin Mesh Top\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Snow White / Light Pink\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$299\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-sequin-mesh-top/44b0db81-a001-0000-0b00-bc6f66b6412b.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-sequin-mesh-top/43b0db81-a001-0000-0b00-5aae1b23ff12.jpg\"}]}],\"description\":\"Slim fit sequin mesh top. 92% lyocell, 8% elastane; 100% polyester sequin mesh. Dry clean.\",\"buy_link\":\"https://www.toryburch.com/en-us/clothing/tops/sequin-mesh-top/181581.html\"},{\"id\":\"calf-hair-trousers\",\"title\":\"Calf Hair Trousers\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Calf Hair\",\"hex\":\"#3b2b22\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$300.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/calf-hair-trousers/de4e15c8-9f01-0000-0b00-879eeec4306e.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/calf-hair-trousers/da4e15c8-9f01-0000-0b00-181fe410a9f4.png\"}]}],\"description\":\"https://isleofmonday.com/products/jitrois-calf-hair-leather-trousers\",\"buy_link\":\"https://isleofmonday.com/products/jitrois-calf-hair-leather-trousers\"},{\"id\":\"gianina-dress-black-demosite\",\"title\":\"Gianina Knit Dress - Black\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"BLACK\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$698\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gianina-dress-black-demosite/8495e16e-a001-0000-0b00-58f034ce3eb0.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gianina-dress-black-demosite/8195e16e-a001-0000-0b00-fb7a5d9edb83.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/gianina-dress-black-demosite/b296e16e-a001-0000-0b00-6a0b92051987.jpg\"}]}],\"description\":\"Preorder - Estimated Ship Date is Between September 29th and October 5th\\nA high neck knit midi dress featuring an open back with\\nsculptural pearl-like stones woven into delicate crisscross straps.\\n— Midi length\\n— Open back\\n— Stone adorned straps\",\"buy_link\":\"https://cultgaia.com/products/gianina-dress-black\"},{\"id\":\"rohe-textured-fringe-boucle-top\",\"title\":\"Textured Fringe Boucle Top\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Cream\"},\"size_groups\":[{\"sizes\":[\"30\",\"32\",\"34\",\"36\",\"38\",\"40\",\"42\",\"44\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"€495\",\"currency\":\"EUR\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/rohe-textured-fringe-boucle-top/5c6ddb81-a001-0000-0b00-0f3c941811bc.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/rohe-textured-fringe-boucle-top/5c6ddb81-a001-0000-0b00-301d24a6504d.jpg\"}]}],\"description\":\"A sleeveless top crafted from textured boucle fringe, with an open neckline and fringe detailing that continues down the sides of the garment. Finished with a button and keyhole opening at the back of the neck. 100% polyester.\",\"buy_link\":\"https://roheframes.com/collections/new-arrivals/products/textured-fringe-boucle-top-cream\"},{\"id\":\"slim-fit-jacket-in-washable-virgin-wool-demo-site\",\"title\":\"Slim-Fit Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Blue\",\"hex\":\"#2c3143\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$699.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-jacket-in-washable-virgin-wool-demo-site/931cba18-9f01-0000-0b00-c272acf8bb59.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-jacket-in-washable-virgin-wool-demo-site/841cba18-9f01-0000-0b00-7781e03af69f.png\"}]}],\"description\":\"In super-lightweight virgin wool with wrinkle recovery, this BOSS Menswear jacket offers easy-care appeal. Clean slim fit. Machine washable.\\n\",\"buy_link\":\"https://www.hugoboss.com/us/slim-fit-jacket-in-washable-virgin-wool/hbna50561991_466.html\"},{\"id\":\"floral-print-shirt-demo-site\",\"title\":\"Floral Print Shirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Floral\",\"hex\":\"#61847d\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$300.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-shirt-demo-site/d749d2b9-9f01-0000-0b00-e4c9ae1dd612.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-shirt-demo-site/ce49d2b9-9f01-0000-0b00-48a278299208.png\"}]}],\"description\":\"https://www.net-a-porter.com/en-us/shop/product/gucci/clothing/shirts/floral-print-silk-twill-shirt/46376663163085053\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/gucci/clothing/shirts/floral-print-silk-twill-shirt/46376663163085053\"},{\"id\":\"ilkyaz-ozel-dusk-satin-fringed-pants\",\"title\":\"Dusk Satin Fringed Wide-Leg Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black\"},\"size_groups\":[{\"sizes\":[\"FR 34\",\"FR 36\",\"FR 38\",\"FR 40\",\"FR 42\",\"FR 44\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$720\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ilkyaz-ozel-dusk-satin-fringed-pants/8cbbe16e-a001-0000-0b00-4b01be12e212.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/ilkyaz-ozel-dusk-satin-fringed-pants/90bbe16e-a001-0000-0b00-0801d9753cf6.jpg\"}]}],\"description\":\"ILKYAZ OZEL's 'Dusk' pants are cut from satin in a structured wide-leg silhouette with a subtle sheen. An elongated belt ties around the waist and is trimmed with fringe that delicately sways with movement.\",\"buy_link\":\"https://www.net-a-porter.com/en-us/shop/product/ilkyaz-ozel/clothing/wide-leg/dusk-satin-fringed-wide-leg-pants/46376663163136455\"},{\"id\":\"toryburch-racerback-tank-003\",\"title\":\"Racerback Tank\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Brown/Navy/White Stripe\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$330\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-racerback-tank-003/e7a8db81-a001-0000-0b00-709c65190bbc.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-racerback-tank-003/eaa8db81-a001-0000-0b00-cca7fbb4b816.jpg\"}]}],\"description\":\"Crafted in Japanese cotton jersey, the striped tank features a scoop neck, sporty racerback and a removable flower pin. Designed for a slim fit.\",\"buy_link\":\"https://www.toryburch.com/en-us/clothing/tops/racerback-tank/185743.html?color=209\"},{\"id\":\"tapered-fit-trousers-in-washable-virgin-wool-demo-site\",\"title\":\"Tapered-Fit Trousers\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Blue\",\"hex\":\"#3a3c4f\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$299.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-fit-trousers-in-washable-virgin-wool-demo-site/f3dfba18-9f01-0000-0b00-beb3d85a545d.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-fit-trousers-in-washable-virgin-wool-demo-site/9ddfba18-9f01-0000-0b00-17991d976ace.png\"}]}],\"description\":\"Offering easy care and modern style, these washable BOSS Menswear trousers are crafted in lightweight virgin wool. Tapered fit. Wrinkle resistant.\\n\",\"buy_link\":\"https://www.hugoboss.com/us/tapered-fit-trousers-in-washable-virgin-wool/hbna50561986_466.html\"},{\"id\":\"wool-cashmere-cable-knit-mini-dress-demosite\",\"title\":\"Knit Mini Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Red\",\"hex\":\"#aa0333\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$115.00\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wool-cashmere-cable-knit-mini-dress-demosite/a2c6f05f-9f01-0000-0b00-b0528da206a8.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/wool-cashmere-cable-knit-mini-dress-demosite/4ec6f05f-9f01-0000-0b00-0fd54fd65358.png\"}]}],\"description\":\"https://www.alexandermcqueen.com/en-gb/pr/wool-cashmere-cable-knit-mini-dress-848815Q1BE16062.html\",\"buy_link\":\"https://www.alexandermcqueen.com/en-gb/pr/wool-cashmere-cable-knit-mini-dress-848815Q1BE16062.html\"},{\"id\":\"bebe-dress-etched-floral\",\"title\":\"Bebe Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Floral\",\"hex\":\"#313648\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$1598.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/bebe-dress-etched-floral/f46fa98f-9f01-0000-0b00-d70e0b513685.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/bebe-dress-etched-floral/8a6fa98f-9f01-0000-0b00-a56586c17215.png\"}]}],\"description\":\"A mini dress featuring bead and sequin embroidery in our etched floral pattern.\\n\\n— Mini length\\n\\n— Square neckline\\n\\n— Embroidered beaded floral print\\n\\n— Thin straps\",\"buy_link\":\"https://cultgaia.com/products/bebe-dress-etched-floral?variant=43517204594762\"},{\"id\":\"nike-ld1000-suede-black\",\"title\":\"LD-1000 Suede\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"footwear\",\"name\":\"Footwear\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Black/Sail/Gum Light Brown/Dark Smoke Grey\"},\"size_groups\":[{\"sizes\":[\"5\",\"5.5\",\"6\",\"6.5\",\"7\",\"7.5\",\"8\",\"8.5\",\"9\",\"9.5\",\"10\",\"10.5\",\"11\",\"11.5\",\"12\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$67.97\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/nike-ld1000-suede-black/65fae16e-a001-0000-0b00-ef7cecb6857d.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/nike-ld1000-suede-black/7efae16e-a001-0000-0b00-22c9eec2508b.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/nike-ld1000-suede-black/67fae16e-a001-0000-0b00-28939cf67e45.jpg\"}]}],\"description\":\"Back in 1977, the LD-1000 made waves with dramatically flared heel cushioning to support long-distance runners. The retro shape and Waffle outsole make it a staple comfortable enough for everyday wear. Upper combines leather and suede for durability. Foam midsole. Rubber outsole. Shown: Black/Sail/Gum Light Brown/Dark Smoke Grey.\",\"buy_link\":\"https://www.nike.com/t/ld-1000-suede-womens-shoes-gXu3Z9Gy\"},{\"id\":\"dress-with-japanese-sleeves-demo-site\",\"title\":\"Dress with Japanese Sleeves\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Brown\",\"hex\":\"#312b1e\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$14.99\",\"currency\":\"USD\"},\"images\":[{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-japanese-sleeves-demo-site/6cc42647-9f01-0000-0b00-83cef88c5cd8.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-japanese-sleeves-demo-site/6ac42647-9f01-0000-0b00-fde14f354eba.png\"}]}],\"description\":\"Fitted midi dress in stretch knit. Features a boat neckline, kimono sleeves, and a gathered waist. Fully lined bodice.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1239334023.html\"},{\"id\":\"cotton-blouse-with-english-embroidery-demosite\",\"title\":\"Blouse with English Embroidery\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"pink\",\"hex\":\"#ebd0c9\"},\"size_groups\":[{\"sizes\":[],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$29.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cotton-blouse-with-english-embroidery-demosite/bc0ebe18-9f01-0000-0b00-083636c033b3.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/cotton-blouse-with-english-embroidery-demosite/b90ebe18-9f01-0000-0b00-1700ffad62dd.png\"}]}],\"description\":\"Short cotton blouse with broderie anglaise and scalloped trim. Deep V-neck with flounce trim and open front with concealed hook-and-eye closure and a thin tie at the waist. Elbow-length sleeves with thin elastic and flounce trim at the cuffs, and elasticated seam with gathers at the waist to create a flared hem.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1332998002.html\"},{\"id\":\"saintlaurent-jill-bootie-stonish-beige\",\"title\":\"Jill Bootie\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"footwear\",\"name\":\"Footwear\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Stonish Beige\"},\"size_groups\":[{\"sizes\":[\"6\",\"7\",\"7.5\",\"8\",\"8.5\",\"9\",\"9.5\",\"10\",\"11\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$1700.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/saintlaurent-jill-bootie-stonish-beige/2d7adb81-a001-0000-0b00-f32688c378ed.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/saintlaurent-jill-bootie-stonish-beige/487adb81-a001-0000-0b00-51ddb584bc18.png\"},{\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/saintlaurent-jill-bootie-stonish-beige/307adb81-a001-0000-0b00-cfe19e0dd254.jpg\"}]}],\"description\":\"This butter-soft lambskin bootie crafted in Italy with a square pointed toe and tapered heel presents a clean and contemporary silhouette. 3 3/4\\\" (95mm) heel. Side zip closure. Leather upper, lining and sole. Made in Italy.\",\"buy_link\":\"https://www.nordstrom.com/s/jill-bootie-women/8802961\"},{\"id\":\"relaxed-fit-cotton-cargo-pants-demo-site\",\"title\":\"Cargo Pants\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"bottom\",\"name\":\"Bottom\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Light Beige\",\"hex\":\"#d1baa0\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$34.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/e57bbd18-9f01-0000-0b00-95a0360d164d.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/dc7bbd18-9f01-0000-0b00-282f719b7284.png\"}]},{\"color\":{\"name\":\"Olive Green\",\"hex\":\"#605b44\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$34.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/c832e94c-9f01-0000-0b00-764ea888072b.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/ce32e94c-9f01-0000-0b00-f1aaaf46eebf.png\"}]}],\"description\":\"Cargo pants in soft cotton canvas with a concealed drawstring waist and zip and snap button closure. Features slanted pockets, and concealed flap and snap button pockets on the legs and back. Stitched pleats at the knees. Relaxed fit for a casual yet not oversized silhouette.\",\"buy_link\":\"https://www2.hm.com/es_es/productpage.1316423003.html\"},{\"id\":\"linen-dress-demo-site\",\"title\":\"Linen Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Polka Dot\",\"hex\":\"#23211f\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$44.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/da12c38a-9f01-0000-0b00-55d1b99514b7.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/ea12c38a-9f01-0000-0b00-a6ab2508e5d6.png\"}]},{\"color\":{\"name\":\"Off White\",\"hex\":\"#ebe7ec\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$44.99\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/4863c48a-9f01-0000-0b00-8f57b87986f6.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/b963c48a-9f01-0000-0b00-891128b7398a.png\"}]}],\"description\":\"Smooth linen blend.\\nTank straps.\\nSquare neckline, keyhole with button closure at back.\\nSelect styles have allover print.\",\"buy_link\":\"https://www.gapfactory.com/browse/product.do?pid=845008061&vid=1&tid=gfpl000071&kwid=1&ds_agid=23920023099-&gclsrc=aw.ds&gad_source=1&gad_campaignid=23925131477&gbraid=0AAAAAD_AT8tSTue6G-zdhXTsLQWQtgc5b&gclid=Cj0KCQjwjb3SBhDgARIsAMKiWzirn47hGYO4L8IMAK2VqbhGHzcf7CY7Gt32hFCbSjaC6S8stUlfVqAaAoJ8EALw_wcB#pdp-page-content\"},{\"id\":\"toryburch-mirror-embellished-cotton-dress\",\"title\":\"Mirror Embellished Cotton Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"women\",\"name\":\"Women\",\"garment_count\":0},{\"id\":\"dress\",\"name\":\"Dress\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Pink / Gray\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"$1995\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-mirror-embellished-cotton-dress/82a1db81-a001-0000-0b00-550c70665b62.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-mirror-embellished-cotton-dress/82a1db81-a001-0000-0b00-35fba262b651.jpg\"}]}],\"description\":\"Hand-applied mirror embellishment covers this cotton dress, styled with spaghetti straps and a fitted silhouette that falls above the ankle. Ties at the back of the bodice with a hidden side zipper and hook-and-eye closure at the skirt.\",\"buy_link\":\"https://www.toryburch.com/en-us/clothing/dresses/mirror-embellished-cotton-dress/183267.html\"},{\"id\":\"canvas-relaxed-shirt-jacket\",\"title\":\"Canvas Relaxed Shirt Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"id\":\"top\",\"name\":\"Top\",\"garment_count\":0}],\"variants\":[{\"color\":{\"name\":\"Ecru Beige\",\"hex\":\"#968d86\"},\"size_groups\":[{\"sizes\":[\"XXS\",\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\"],\"size_system\":\"US\"}],\"price\":{\"amount\":\"60.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-relaxed-shirt-jacket/7751ecb9-9f01-0000-0b00-28e437ba3e17.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-relaxed-shirt-jacket/7751ecb9-9f01-0000-0b00-4b24347a5829.png\"}]}],\"description\":\"Smooth cotton canvas shirt jacket in a relaxed fit. Spread collar, button front. Long sleeves with button cuffs. Chest patch pocket, interior patch pocket, side welt pockets.\",\"buy_link\":\"https://www.gap.com/browse/product.do?pid=894748002&vid=1#pdp-page-content\"}]"), Il = /*#__PURE__*/ JSON.parse("[{\"id\":\"oscardelarenta-crystal-fringe-chandelier-earrings-demo\",\"title\":\"Crystal Fringe Chandelier Earrings\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Earring\"}],\"variants\":[{\"color\":{\"name\":\"Topaz\"},\"size_groups\":[{\"sizes\":[\"OS\"]}],\"price\":{\"amount\":\"$720.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/oscardelarenta-crystal-fringe-chandelier-earrings-demo/368decaa-a001-0000-0b00-6c4803e28be8.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/oscardelarenta-crystal-fringe-chandelier-earrings-demo/f08decaa-a001-0000-0b00-e30cea8537db.webp\"}]}],\"description\":\"A faceted crystal stud anchors cascading strands of shimmering rhinestones, creating a dramatic chandelier silhouette. The polished setting is dotted with scattered crystals that amplify the sparkle from every angle.\\n\\nMaterials: 75% Brass, 15% Glass.\\n\\nCare: Avoid harsh chemicals, lotions, and perfumes. Do not wear in pool/shower. Wipe with a damp microfiber cloth and store separately in a cloth pouch.\",\"buy_link\":\"https://www.oscardelarenta.com/products/crystal-fringe-chandelier-earrings-p26j911-top?variant=53069432717675\"},{\"id\":\"dominican-landscape-pencil-skirt\",\"title\":\"Dominican Landscape Pencil Skirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"Blue green multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$21900.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/dominican-landscape-pencil-skirt/215797aa-a001-0000-0b00-93d9d425a52f.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/dominican-landscape-pencil-skirt/295797aa-a001-0000-0b00-0cf1cbc77e9c.webp\"}]}],\"description\":\"The Dominican Landscape print brings a painterly expression of place to this pencil skirt, nodding to Oscar de la Renta’s heritage and roots in the Dominican Republic. Sweeping palm trees and beach scenes unfold across the silhouette, capturing the warmth and vibrancy of the island.\\n\\n\",\"buy_link\":\"https://www.oscardelarenta.com/products/dominican-landscape-pencil-skirt-26pn401pta-bgt?variant=52676719804779\"},{\"id\":\"odlr-maple-leaves-faille-dress-grm\",\"title\":\"Maple Leaves Faille Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Dress\"}],\"variants\":[{\"color\":{\"name\":\"Green Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$4990\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-maple-leaves-faille-dress-grm/0f51a6a6-a001-0000-0b00-088e5d4720c6.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-maple-leaves-faille-dress-grm/2151a6a6-a001-0000-0b00-91cfc0546cb2.jpg\"}]}],\"description\":\"Sleeveless scoop-neck cocktail dress in green-multi maple leaf print faille.\",\"buy_link\":\"https://www.oscardelarenta.com/products/maple-leaves-faille-dress-26fn264fpf-grm\"},{\"id\":\"odlr-hibiscus-embroidered-knit-pullover-brn\",\"title\":\"Hibiscus Embroidered Knit Pullover\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Brown\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$1990.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-hibiscus-embroidered-knit-pullover-brn/25cf52c5-a001-0000-0b00-b10e99040de2.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-hibiscus-embroidered-knit-pullover-brn/2dcf52c5-a001-0000-0b00-5660f9799cd1.png\"}]}],\"description\":\"Delicate hibiscus embroidery blooms across this refined knit pullover, adding dimensional texture to the clean silhouette. The softly structured shape is framed by a high neckline and ribbed trims for a polished finish.\",\"buy_link\":\"https://www.oscardelarenta.com/products/hibiscus-embroidered-knit-pullover-26pe159chi-brn\"},{\"id\":\"odlr-mixed-botanical-cropped-jacket-nav\",\"title\":\"Mixed Botanical Cropped Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Navy\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$2490.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-cropped-jacket-nav/da8b3fa2-a001-0000-0b00-f3c4381029e4.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-cropped-jacket-nav/3a8c3fa2-a001-0000-0b00-c07a1d787e72.webp\"}]}],\"description\":\"A collared knit jacket in a refined navy wool-blend, with delicate embroidery that adds an artful dimension to the structured knit surface. A versatile layering piece that bridges tailoring and knitwear with ease. Long sleeves, collared neckline, unlined. Country of Origin: Italy. Style Code: 26FE187NEW_NAV. 97% Wool, 2% Polyamide, 1% Elastane. Dry clean only. Do not wash, bleach, iron, steam, or tumble dry.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-cropped-jacket-26fe187new-nav?variant=53342635000171\"},{\"id\":\"odlr-mixed-botanical-tie-detailed-blouse-bsm\",\"title\":\"Mixed Botanical Tie-Detailed Blouse\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Blush Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$2290.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-tie-detailed-blouse-bsm/70ccddaa-a001-0000-0b00-856a9e1f7577.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-tie-detailed-blouse-bsm/be43ddaa-a001-0000-0b00-19e2edef59a5.jpg\"}]}],\"description\":\"A garden in full bloom rendered in lightweight cotton voile, this blouse captures the season's botanical spirit with an all-over mixed floral print. A delicate tie detail at the neckline lends an effortlessly refined finish.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-tie-detailed-blouse-26fn716mbv-bsm\"},{\"id\":\"odlr-embossed-mini-tro-bag-cog\",\"title\":\"Embossed Mini TRO Bag\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Accessory\"}],\"variants\":[{\"color\":{\"name\":\"Cognac\"},\"size_groups\":[{\"sizes\":[\"OS\"]}],\"price\":{\"amount\":\"$3390.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-embossed-mini-tro-bag-cog/920c10c5-a001-0000-0b00-f97edc895300.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-embossed-mini-tro-bag-cog/990c10c5-a001-0000-0b00-c6ce7591721b.jpg\"}]}],\"description\":\"The house's signature Mini TRO silhouette is rendered in richly textured embossed calfskin, the structured crossbody form offering a refined versatility suited to any occasion. A push-lock closure and chain strap complete the polished, compact design.\",\"buy_link\":\"https://www.oscardelarenta.com/products/embossed-mini-tro-bag-26fh003ecf-cog\"},{\"id\":\"odlr-faded-mixed-botanical-denim-pant-whm\",\"title\":\"Faded Mixed Botanical Denim Pant\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"White Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$2490.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-faded-mixed-botanical-denim-pant-whm/dbaa33c5-a001-0000-0b00-73799ddf2284.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-faded-mixed-botanical-denim-pant-whm/dbaa33c5-a001-0000-0b00-a22ae8164841.jpg\"}]}],\"description\":\"The season's faded mixed botanical print is applied to cotton denim for a relaxed pant with a distinctive, artisanal aesthetic. The washed treatment lends the botanical motifs a painterly, sun-faded quality.\",\"buy_link\":\"https://www.oscardelarenta.com/products/faded-mixed-botanical-denim-pant-26fn3182fbn-whm\"},{\"id\":\"odlr-beaded-floral-embroidered-pencil-dress-ivr\",\"title\":\"Beaded Floral Embroidered Pencil Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Dress\"}],\"variants\":[{\"color\":{\"name\":\"Ivory\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$5990\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-beaded-floral-embroidered-pencil-dress-ivr/042b60a7-a001-0000-0b00-41bfdd1e6785.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-beaded-floral-embroidered-pencil-dress-ivr/20f35fa7-a001-0000-0b00-533bdaa5e4c1.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-beaded-floral-embroidered-pencil-dress-ivr/e7ab61a7-a001-0000-0b00-668786ace10e.png\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-beaded-floral-embroidered-pencil-dress-ivr/e0ab61a7-a001-0000-0b00-e15740fef422.png\"}]}],\"description\":\"Beaded floral embroidery is worked across the surface of this short-sleeve stretch wool cocktail dress, each bloom adding a luminous, celebratory dimension. The ivory colorway renders the embellishment in full relief.\",\"buy_link\":\"https://www.oscardelarenta.com/products/beaded-floral-embroidered-pencil-dress-26fe639dsw-ivr\"},{\"id\":\"tinos-dress\",\"title\":\"Tinos Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Dress\"}],\"variants\":[{\"color\":{\"name\":\"Dove Grey\",\"hex\":\"#595450\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$660.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/tinos-dress/ee289024-9c01-0000-0b00-3b00c93d8ed9.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/tinos-dress/e7319024-9c01-0000-0b00-a44fe9a0d5f1.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/tinos-dress/732a9024-9c01-0000-0b00-e990a140bf47.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/tinos-dress/762a9024-9c01-0000-0b00-bb30b5151c4e.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/tinos-dress/49d9c5d7-a001-0000-0b00-8137fc1ed7d3.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/tinos-dress/93d9c5d7-a001-0000-0b00-7c58828f9333.jpg\"},{\"tag\":\"back_flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/tinos-dress/3082b0d7-a001-0000-0b00-314251c4d555.png\"},{\"tag\":\"back_model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/tinos-dress/2f319024-9c01-0000-0b00-aa77af0d3e84.jpg\"}]}],\"description\":\"A long-sleeve rib-knit bodice meets a pleated crepe midi skirt, cinched at the waist by a double grey leather belt and set with rows of metal eyelets. A concealed zip runs the length of the back. Fabric: knit & crepe. Fit: true to size — MAYKA's model is 164 cm (bust 82, waist 64, hips 91 cm) and wears XS. Sizes XS–XL follow EU 34–42; also made in Tall (6 cm longer).\",\"buy_link\":\"https://maykastore.com/products/tinos-dress\"},{\"id\":\"odlr-mixed-botanical-embroidered-oversized-pullover-bru\",\"title\":\"Mixed Botanical Embroidered Oversized Pullover\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Brown Multi\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$3990.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-embroidered-oversized-pullover-bru/654cd8aa-a001-0000-0b00-a5966393b007.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-embroidered-oversized-pullover-bru/26ddd6aa-a001-0000-0b00-05a6f2bef2a6.jpg\"},{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-embroidered-oversized-pullover-bru/3545d7aa-a001-0000-0b00-602a0f3e78a2.png\"}]}],\"description\":\"A large-scale floral intarsia pattern is worked entirely by hand into this luxurious wool-cotton pullover, each bloom rendered with the precision of a painting. A singular piece that carries the craft and artistry of the house.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-embroidered-oversized-pullover-26fe117fik-bru\"},{\"id\":\"oscardelarenta-mini-poppy-demo\",\"title\":\"The Mini Poppy\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Accessory\"}],\"variants\":[{\"color\":{\"name\":\"Saltwater\"},\"size_groups\":[{\"sizes\":[\"OS\"]}],\"price\":{\"amount\":\"$3890.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/oscardelarenta-mini-poppy-demo/b436edaa-a001-0000-0b00-5bb42c7bae36.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/oscardelarenta-mini-poppy-demo/7137edaa-a001-0000-0b00-8bfa6317ac84.webp\"}]}],\"description\":\"The Dominican Landscape print brings a painterly expression of place to this compact handbag, nodding to Oscar de la Renta’s heritage and roots in the Dominican Republic. Crafted from full-grain Taurillon leather with a natural pebbled finish, this petite silhouette balances sophistication with practicality, featuring a top handle and removable shoulder strap. A special-edition anniversary embossing commemorates the House’s 60th year.\\n\\nMaterials: 100% Bull Leather.\\n\\nCare: Remove dust with a dry or slightly damp cloth. Avoid prolonged sun exposure and heat sources. Store in original packaging in a cool, dry place. For stains, wipe with lukewarm water or mild soapy water.\",\"buy_link\":\"https://www.oscardelarenta.com/products/the-mini-poppy-26ph1592pcl-slw?variant=52676734714219\"},{\"id\":\"odlr-mixed-botanical-midi-skirt-bru\",\"title\":\"Mixed Botanical Midi Skirt\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"Brown Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$2290.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-midi-skirt-bru/4d5896c5-a001-0000-0b00-49a097b0ce4a.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-midi-skirt-bru/4b5896c5-a001-0000-0b00-8be7417e570d.jpg\"}]}],\"description\":\"The season's mixed botanical print in brown multi is cut into a full circle skirt in stretch cotton, the sweep of the hem allowing the vibrant print to move beautifully. A versatile, celebratory piece that pairs effortlessly with the season's knits. Circle skirt silhouette, unlined. Country of Origin: Italy. Style Code: 26FN4042MCK_BRU. 97% Cotton, 3% Elastane. Machine wash cold, do not bleach, tumble dry low, iron on low heat if needed.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-midi-skirt-26fn4042mck-bru?variant=53342642930027\"},{\"id\":\"odlr-mixed-botanical-silk-twill-pant-bmm\",\"title\":\"Mixed Botanical Silk Twill Pant\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"Blue Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$2690.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-silk-twill-pant-bmm/46eba7b5-a001-0000-0b00-cafb3e97b0cf.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-silk-twill-pant-bmm/f2eaa7b5-a001-0000-0b00-97c1980ca9ab.jpg\"}]}],\"description\":\"The season's mixed botanical print in blue multi is rendered in silk twill for a fluid pant that moves beautifully. The print brings an exuberant painterly quality to the most refined of wardrobe staples.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-silk-twill-pant-26fn3092mbi-bmm\"},{\"id\":\"oscardelarenta-metallic-tassel-earrings-demo\",\"title\":\"Metallic Beaded Tassel Clip-On Earrings\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Earring\"}],\"variants\":[{\"color\":{\"name\":\"Pink\"},\"size_groups\":[{\"sizes\":[\"OS\"]}],\"price\":{\"amount\":\"$450.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/oscardelarenta-metallic-tassel-earrings-demo/0c4fecaa-a001-0000-0b00-a65ac723f219.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/oscardelarenta-metallic-tassel-earrings-demo/734fecaa-a001-0000-0b00-749de03edfe0.webp\"}]}],\"description\":\"A long column of metallic glass beads tapers into a dramatic tassel, the navy or pink palette lending a refined, jewel-toned depth. Each earring is handcrafted, making every pair a subtly individual creation.\\n\\nMaterials: 50% Crystal Glass, 25% Polyester Thread, 15% Brass, 10% Cotton.\\n\\nCare: Avoid harsh chemicals, lotions, and perfumes. Do not wear in pool/shower. Wipe with a damp microfiber cloth and store separately in a cloth pouch.\",\"buy_link\":\"https://www.oscardelarenta.com/products/metallic-beaded-tassel-clip-on-earrings-f26j114-pnk?variant=53342647124331\"},{\"id\":\"odlr-knot-clutch-blk\",\"title\":\"Knot Clutch\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Accessory\"}],\"variants\":[{\"color\":{\"name\":\"Black\"},\"size_groups\":[{\"sizes\":[\"OS\"]}],\"price\":{\"amount\":\"$2590.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-knot-clutch-blk/19cc34c5-a001-0000-0b00-b80ef6285a33.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-knot-clutch-blk/c25d34c5-a001-0000-0b00-1f4e2e54e4b2.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-knot-clutch-blk/c25d34c5-a001-0000-0b00-52e964358e1b.jpg\"}]}],\"description\":\"This clutch showcases a clasp intricately knotted into a fluid, sculptural design, subtly evoking the interlocking Oscar 'O' emblem in an abstract form. The clutch's sleek sheen enhances its refined presence, while a removable shoulder strap adds versatility, allowing it to be worn hands-free or carried as a statement piece.\",\"buy_link\":\"https://www.oscardelarenta.com/products/knot-clutch-00nh187clf-blk\"},{\"id\":\"odlr-dominican-landscape-oversized-pullover-bgt\",\"title\":\"Dominican Landscape Oversized Pullover\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Blue Green Multi\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$2690.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-dominican-landscape-oversized-pullover-bgt/1bac9eaa-a001-0000-0b00-d068bbb23b1f.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-dominican-landscape-oversized-pullover-bgt/83ac9eaa-a001-0000-0b00-d25799134c03.webp\"}]}],\"description\":\"The Dominican Landscape print brings a painterly expression of place to this oversized pullover, nodding to Oscar de la Renta’s heritage and roots in the Dominican Republic. Long sleeves, crew neckline, oversized silhouette, ribbed trim, pullover style. 100% Virgin Wool. Dry clean only.\",\"buy_link\":\"https://www.oscardelarenta.com/products/dominican-landscape-oversized-pullover-26pn104liv-bgt?variant=52676711743851\"},{\"id\":\"psara-set-top\",\"title\":\"Psara Set — Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Brown Paisley\",\"hex\":\"#8a5447\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$825.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-top/6ab19424-9c01-0000-0b00-29a03b73e919.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-top/9fb29424-9c01-0000-0b00-dae68d8dd576.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-top/e2c69424-9c01-0000-0b00-af16cb2a6570.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-top/34b29424-9c01-0000-0b00-a344e51d9e43.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-top/33c89424-9c01-0000-0b00-3caed1b65ee6.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/psara-set-top/66e3c5d7-a001-0000-0b00-79d52f7f3362.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/psara-set-top/79e3c5d7-a001-0000-0b00-bf323470d77d.jpg\"},{\"tag\":\"back_flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/psara-set-top/02bab0d7-a001-0000-0b00-d0769e83b55c.png\"},{\"tag\":\"back_model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-top/50c09424-9c01-0000-0b00-05f16100f709.jpg\"}]}],\"description\":\"The jacket of the Psara set: a fitted brown gabardine shirt-jacket in an all-over bandana paisley print, with a point collar, buttoned cuffs and brown leather X cross-stitching running down both back princess seams. Sold as a set with the Psara wide-leg trousers. Fit: fitted, true to size — MAYKA's model is 164 cm and wears XS. Sizes XS–XL follow EU 34–42.\",\"buy_link\":\"https://maykastore.com/products/psara-set\"},{\"id\":\"odlr-turtleneck-pullover-bsh\",\"title\":\"Turtleneck Wool Short-Sleeve Pullover\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Blush\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$1290\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-turtleneck-pullover-bsh/fdf4a5a1-a001-0000-0b00-7b72c846c447.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-turtleneck-pullover-bsh/63f5a5a1-a001-0000-0b00-cec5bff51fe8.webp\"}]}],\"description\":\"A fold-over turtleneck in pure wool defines this short-sleeve pullover, creating a graceful, layered neckline that brings a modern sensibility to a classic silhouette. Short sleeves; fold-over turtleneck; unlined. 100% wool. Dry clean only. Made in Italy.\",\"buy_link\":\"https://www.oscardelarenta.com/products/turtleneck-wool-short-sleeve-pullover-26fn104mmr-bsh?variant=53342638604651\"},{\"id\":\"odlr-ombre-crewneck-pullover-pbw\",\"title\":\"Ombré Crewneck Pullover\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Pink/Brown\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$1990.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-ombre-crewneck-pullover-pbw/ea6a77aa-a001-0000-0b00-99a5b41c369b.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-ombre-crewneck-pullover-pbw/c3dd75aa-a001-0000-0b00-6adf0220270e.jpg\"},{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-ombre-crewneck-pullover-pbw/836376aa-a001-0000-0b00-6a376efefe9f.png\"}]}],\"description\":\"A painterly print covers this crew-neck wool pullover in a pink and brown palette, bringing the season's botanical spirit to the knitwear category. The fine wool base provides warmth and a refined, polished hand.\",\"buy_link\":\"https://www.oscardelarenta.com/products/ombre-crewneck-pullover-26fn110omp-pbw\"},{\"id\":\"odlr-mixed-botanical-tie-neck-cardigan-bsm\",\"title\":\"Mixed Botanical Tie-Neck Cardigan\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Blush Multi\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$2490.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-tie-neck-cardigan-bsm/a08e81aa-a001-0000-0b00-66c493f2313e.png\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-tie-neck-cardigan-bsm/223181aa-a001-0000-0b00-55f91cbd75ca.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-tie-neck-cardigan-bsm/dbce87aa-a001-0000-0b00-1c1394c8e4bd.png\"}]}],\"description\":\"Part of the season's coordinated twinset, this all-over floral cardigan pairs beautifully with its matching tank. The cotton-viscose blend provides a fluid hand with just enough structure.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-tie-neck-cardigan-26fn129fts-bsm\"},{\"id\":\"demo-site-mixed-botanical-embroidered-dress\",\"title\":\"Mixed Botanical Embroidered Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Dress\"}],\"variants\":[{\"color\":{\"name\":\"Navy\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$2990.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/demo-site-mixed-botanical-embroidered-dress/18871ba2-a001-0000-0b00-7587d0c631b9.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/demo-site-mixed-botanical-embroidered-dress/20871ba2-a001-0000-0b00-e6010c74da49.jpg\"}]}],\"description\":\"A refined A-line knit dress in navy with delicate embroidery that brings a quiet luxuriance to the clean silhouette. The wool-blend fabric provides both comfort and a polished, structured drape.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-embroidered-dress-26fe186new-nav\"},{\"id\":\"odlr-mixed-botanical-off-shoulder-dress-bsm\",\"title\":\"Mixed Botanical Off-Shoulder Dress\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Dress\"}],\"variants\":[{\"color\":{\"name\":\"Blush Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$6290\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-off-shoulder-dress-bsm/0c90d1a6-a001-0000-0b00-58971468447f.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-off-shoulder-dress-bsm/74e9d1a6-a001-0000-0b00-be5dfffe5fa1.png\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-mixed-botanical-off-shoulder-dress-bsm/0590d1a6-a001-0000-0b00-3c3fe9c61e3c.jpg\"}]}],\"description\":\"Off-shoulder midi dress in mixed botanical print with a twisted, folded neckline. Fitted bodice with a full, gathered skirt. 100% Cotton. Machine wash cold, do not bleach, tumble dry low, iron on low heat if needed.\",\"buy_link\":\"https://www.oscardelarenta.com/products/mixed-botanical-off-shoulder-dress-26fn235mvb-bsm\"},{\"id\":\"psara-set-bottom\",\"title\":\"Psara Set — Trousers\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"Brown Paisley\",\"hex\":\"#8a4d3e\"},\"size_groups\":[{\"sizes\":[\"XS\",\"S\",\"M\",\"L\",\"XL\"]}],\"price\":{\"amount\":\"$825.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-bottom/d4e59424-9c01-0000-0b00-14492d3a64aa.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-bottom/9be69424-9c01-0000-0b00-2d23ac9f3ac1.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-bottom/98f89424-9c01-0000-0b00-c80e39214817.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-bottom/22e89424-9c01-0000-0b00-33006640720b.jpg\"},{\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-bottom/80fa9424-9c01-0000-0b00-7746cb9c0f40.jpg\"},{\"tag\":\"back_flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/psara-set-bottom/1ed7b0d7-a001-0000-0b00-e879e6211c00.png\"},{\"tag\":\"back_model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/spree/psara-set-bottom/a5f49424-9c01-0000-0b00-fb56fe063d71.jpg\"}]}],\"description\":\"The trousers of the Psara set: high-rise wide-leg trousers in brown gabardine with an all-over bandana paisley print, a clean seat and straight full-length legs. Sold as a set with the Psara jacket. Fit: true to size — MAYKA's model is 164 cm and wears XS. Sizes XS–XL follow EU 34–42; also made in Tall (6 cm longer).\",\"buy_link\":\"https://maykastore.com/products/psara-set\"},{\"id\":\"odlr-dominican-mixed-floral-wide-leg-pant-bru\",\"title\":\"Dominican Mixed-Floral Wide Leg Pant\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"Brown Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$2990.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-dominican-mixed-floral-wide-leg-pant-bru/75f31bc5-a001-0000-0b00-3d4c2fa41e8f.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-dominican-mixed-floral-wide-leg-pant-bru/75f31bc5-a001-0000-0b00-a4052cd9832d.jpg\"}]}],\"description\":\"Crafted from silk twill, these wide-leg pants feature the Dominican Mixed-Floral print, bringing a vibrant, painterly expression to the silhouette. The elastic waistband offers a relaxed, comfortable fit, balancing ease with fluid movement.\",\"buy_link\":\"https://www.oscardelarenta.com/products/dominican-mixed-floral-wide-leg-pant-26pn331moc-bru\"},{\"id\":\"odlr-chine-mixed-floral-sweetheart-gown-swm\",\"title\":\"Chiné Dominican Mixed-Floral Chiffon Sweetheart Gown\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Dress\"}],\"variants\":[{\"color\":{\"name\":\"Saltwater Multi\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$10990.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-chine-mixed-floral-sweetheart-gown-swm/a9ed9eaa-a001-0000-0b00-8f5e2f8c9642.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-chine-mixed-floral-sweetheart-gown-swm/beed9eaa-a001-0000-0b00-048fe63a617c.webp\"}]}],\"description\":\"A vibrant array of Dominican florals unfolds across this silk chiffon gown, rendered in a Chiné print inspired by the traditional weaving technique. Long sleeves with button cuffs, off shoulder, sweetheart neckline, floor-sweeping hemline with short train, concealed back zipper. 100% Silk, 100% Polyamide. Dry clean only.\",\"buy_link\":\"https://www.oscardelarenta.com/products/chine-dominican-mixed-floral-chiffon-sweetheart-gown-26pn052cms-swm\"},{\"id\":\"odlr-wool-wide-leg-pant-ind\",\"title\":\"Wool Wide-Leg Pant\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Bottom\"}],\"variants\":[{\"color\":{\"name\":\"Indigo\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$2690.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-wool-wide-leg-pant-ind/176ab2b5-a001-0000-0b00-f292101d0fe5.jpg\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/odlr-wool-wide-leg-pant-ind/196ab2b5-a001-0000-0b00-359e49bbcf1d.jpg\"}]}],\"description\":\"The season's indigo wool drill tailoring is cut into a refined straight-leg trouser with clean, precise lines. A wardrobe foundation that pairs seamlessly with the coordinating tailored separates.\",\"buy_link\":\"https://www.oscardelarenta.com/products/wool-wide-leg-pant-26fn320wdt-ind\"},{\"id\":\"chine-palm-leaves-jacket\",\"title\":\"Chiné Palm Leaves Jacket\",\"partner_id\":\"demo-site\",\"categories\":[{\"name\":\"Women\"},{\"name\":\"Top\"}],\"variants\":[{\"color\":{\"name\":\"Espresso Ivory\"},\"size_groups\":[{\"sizes\":[\"00\",\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\"]}],\"price\":{\"amount\":\"$3490.00\",\"currency\":\"USD\"},\"images\":[{\"tag\":\"flat\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/chine-palm-leaves-jacket/9b5ec0aa-a001-0000-0b00-10f081694ece.webp\"},{\"tag\":\"model\",\"url\":\"https://api-minio.dev.spreeai.com/garment/demo-site/chine-palm-leaves-jacket/fd5ec0aa-a001-0000-0b00-2af4f33ea171.webp\"}]}],\"description\":\"Long Sleeves, Shoulder Pads, Open Front, Front Flap Pockets. 100% Polyester; Lining: 100% Silk. Dry clean only. Style Code: 26PN509LCV_EIV. Country of Origin: Italy.\",\"buy_link\":\"https://www.oscardelarenta.com/products/chine-palm-leaves-jacket-26pn509lcv-eiv?variant=52676722753899\"}]"), Ll = {
	"https://api-minio.prod.spreeai.com/garment/demo-site/bebe-dress-etched-floral/8a6fa98f-9f01-0000-0b00-a56586c17215.png": "/spreeai-always-on-demo/online/catalog/632d2dd119341260f7f3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/bebe-dress-etched-floral/f46fa98f-9f01-0000-0b00-d70e0b513685.png": "/spreeai-always-on-demo/online/catalog/6db615bb8e5c01c2e76c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/013fb7b9-9f01-0000-0b00-929d9e41f7da.png": "/spreeai-always-on-demo/online/catalog/d3f71f7f1dde2939d35d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/f73eb7b9-9f01-0000-0b00-629b6c452dd0.png": "/spreeai-always-on-demo/online/catalog/29ab6fce5960913cb29d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/f77eb7b9-9f01-0000-0b00-86ef17417155.png": "/spreeai-always-on-demo/online/catalog/e841f24cce644c3deb11.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/black-shorts-demo-site/fa7eb7b9-9f01-0000-0b00-d8eb2b952474.png": "/spreeai-always-on-demo/online/catalog/15a2499e1dd3d8a2521f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/braiden-top-wren-demosite/7d3ce16e-a001-0000-0b00-e0d9c60f6711.jpg": "/spreeai-always-on-demo/online/catalog/dfe2c49862e30b253302.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/braiden-top-wren-demosite/a13be16e-a001-0000-0b00-e09ce4de2501.png": "/spreeai-always-on-demo/online/catalog/b2c594e8489370a3cbe5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/burberry-check-silk-scarf-sand/7142e16e-a001-0000-0b00-039518de9b2d.jpg": "/spreeai-always-on-demo/online/catalog/09cc78f5eb4e922cee83.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/burberry-check-silk-scarf-sand/7342e16e-a001-0000-0b00-f938536eb2bd.jpg": "/spreeai-always-on-demo/online/catalog/9c8b3c3b95ccd06fad14.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/burberry-check-silk-scarf-sand/8a42e16e-a001-0000-0b00-c13053fef6e5.png": "/spreeai-always-on-demo/online/catalog/588229be1d9dfe9c0ac2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/calf-hair-trousers/da4e15c8-9f01-0000-0b00-181fe410a9f4.png": "/spreeai-always-on-demo/online/catalog/43a4e5a4e52fb93887a3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/calf-hair-trousers/de4e15c8-9f01-0000-0b00-879eeec4306e.png": "/spreeai-always-on-demo/online/catalog/0a502b9fb67cfbc37985.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cami-top-dove-demosite/5d4be16e-a001-0000-0b00-99e6a16539ab.jpg": "/spreeai-always-on-demo/online/catalog/68363a79117d9b9edb9d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cami-top-dove-demosite/914ae16e-a001-0000-0b00-1c3e5330869a.png": "/spreeai-always-on-demo/online/catalog/690bc07bda14eac40add.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/53a1ecb9-9f01-0000-0b00-4929287ddfe3.png": "/spreeai-always-on-demo/online/catalog/de09f52769b4e87ab892.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/5aa1ecb9-9f01-0000-0b00-28c298b882d8.png": "/spreeai-always-on-demo/online/catalog/9f74a406c2b6cb770607.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/6f81ecb9-9f01-0000-0b00-7e21895c8984.png": "/spreeai-always-on-demo/online/catalog/9b6d6f9f1f330c17558d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-baggy-trouser-jeans/7081ecb9-9f01-0000-0b00-2f048368f461.png": "/spreeai-always-on-demo/online/catalog/68d16a0b4120a9d6349d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-relaxed-shirt-jacket/7751ecb9-9f01-0000-0b00-28e437ba3e17.png": "/spreeai-always-on-demo/online/catalog/f474ae7d58a2a223697a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/canvas-relaxed-shirt-jacket/7751ecb9-9f01-0000-0b00-4b24347a5829.png": "/spreeai-always-on-demo/online/catalog/3ee41439b4c40d1309ec.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/105ce16e-a001-0000-0b00-2160ef76bab3.png": "/spreeai-always-on-demo/online/catalog/032b59c0e0c3b99baf2b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/2153e16e-a001-0000-0b00-4db39f2c264f.png": "/spreeai-always-on-demo/online/catalog/6fd2daa113973afe062c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/2458e16e-a001-0000-0b00-45c7b51e5fa4.png": "/spreeai-always-on-demo/online/catalog/5957b3f4a6101de5d975.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/2758e16e-a001-0000-0b00-69c244b67642.png": "/spreeai-always-on-demo/online/catalog/76c95bba45ba66b734b3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/705ce16e-a001-0000-0b00-c6f522b99174.png": "/spreeai-always-on-demo/online/catalog/73aab4f6a3d79243903e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cardigan-in-a-flowy-fabric-demosite/7f53e16e-a001-0000-0b00-54696801703a.png": "/spreeai-always-on-demo/online/catalog/fa08b111d54ce4581cdc.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cecilia-pump/2163e16e-a001-0000-0b00-4d8ec7a833ae.png": "/spreeai-always-on-demo/online/catalog/cff2dfdb7d581e01f840.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cecilia-pump/5364e16e-a001-0000-0b00-384b6edda2fc.png": "/spreeai-always-on-demo/online/catalog/60f16e319dbf0ca60785.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cecilia-pump/5c64e16e-a001-0000-0b00-8e144adb7c65.png": "/spreeai-always-on-demo/online/catalog/f71341284cbb2026f71b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cocktail-dress/656ab4b9-9f01-0000-0b00-27f0b493c51b.png": "/spreeai-always-on-demo/online/catalog/2c0f2eb5870342fae29e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cocktail-dress/666ab4b9-9f01-0000-0b00-61f244d5c7cf.png": "/spreeai-always-on-demo/online/catalog/719be5e11d3dc817e238.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cotton-blouse-with-english-embroidery-demosite/b90ebe18-9f01-0000-0b00-1700ffad62dd.png": "/spreeai-always-on-demo/online/catalog/1b9a2f3ccd28766259a2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cotton-blouse-with-english-embroidery-demosite/bc0ebe18-9f01-0000-0b00-083636c033b3.png": "/spreeai-always-on-demo/online/catalog/d2ddb1d43db77dbe3d2b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/couture-virgin-wool-blend-mini-dress-demosite/1bfd1b5e-9f01-0000-0b00-6d49ef98ed30.png": "/spreeai-always-on-demo/online/catalog/c111c3d2250aa3a0132b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/couture-virgin-wool-blend-mini-dress-demosite/1efd1b5e-9f01-0000-0b00-a0ea46aa07f3.png": "/spreeai-always-on-demo/online/catalog/c9c918ffae10ac7e285a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-mini-dress-demosite/0392185e-9f01-0000-0b00-d3f14c387df8.png": "/spreeai-always-on-demo/online/catalog/13e94059cb8ff08213e5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-mini-dress-demosite/0892185e-9f01-0000-0b00-31fe8de11115.png": "/spreeai-always-on-demo/online/catalog/aa0c31da82c46f93d831.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-viscose-jersey-dress-abyss-demosite/ae46f85d-9f01-0000-0b00-782d404e324c.jpeg": "/spreeai-always-on-demo/online/catalog/62e846bd8913cdb1822f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/crepe-viscose-jersey-dress-abyss-demosite/ae46f85d-9f01-0000-0b00-aa96f23948a7.png": "/spreeai-always-on-demo/online/catalog/dce1754a5e4a92d76a9f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cropped-jacket-demo-site/5164e78a-9f01-0000-0b00-aa4f81732e9c.png": "/spreeai-always-on-demo/online/catalog/55c4bf5c69f66a24d70a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/cropped-jacket-demo-site/f963e78a-9f01-0000-0b00-5cae474a60a9.png": "/spreeai-always-on-demo/online/catalog/df2867845d86ad41365f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dalida-knit-dress/666bdfb9-9f01-0000-0b00-ba9b1c869102.png": "/spreeai-always-on-demo/online/catalog/d98929f5c6008d67c01d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dalida-knit-dress/676bdfb9-9f01-0000-0b00-4eac2c59a2cd.png": "/spreeai-always-on-demo/online/catalog/b6929fab864ca689c7cd.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/21b1b4b9-9f01-0000-0b00-14cdbdd1c442.png": "/spreeai-always-on-demo/online/catalog/98595c2491708caa98e7.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/25b1b4b9-9f01-0000-0b00-2462c95817a6.png": "/spreeai-always-on-demo/online/catalog/1e03475b8fde6d9c60ec.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/a7d3b4b9-9f01-0000-0b00-20cf0d85b245.png": "/spreeai-always-on-demo/online/catalog/d27dced2fa3d1c9de54f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/bcfbb4b9-9f01-0000-0b00-5f2d84d4c006.png": "/spreeai-always-on-demo/online/catalog/56de36b0da4d377c56fd.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/bdfbb4b9-9f01-0000-0b00-ec30cf04265b.png": "/spreeai-always-on-demo/online/catalog/68c5901a7871a4627c2c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/denim-jacket-demo-site/c6d3b4b9-9f01-0000-0b00-798f2a327298.png": "/spreeai-always-on-demo/online/catalog/06839c141c39d48c04f5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-draped-neckline/356e2547-9f01-0000-0b00-88c206684442.png": "/spreeai-always-on-demo/online/catalog/c8a5930cf2e6df10e1e7.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-draped-neckline/396e2547-9f01-0000-0b00-e20a63b282a3.png": "/spreeai-always-on-demo/online/catalog/f816a2b06fbbde54e434.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-japanese-sleeves-demo-site/6ac42647-9f01-0000-0b00-fde14f354eba.png": "/spreeai-always-on-demo/online/catalog/da4f2fdae55fd6a6bf59.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dress-with-japanese-sleeves-demo-site/6cc42647-9f01-0000-0b00-83cef88c5cd8.png": "/spreeai-always-on-demo/online/catalog/93942081c58db2df4ae3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dries-van-noten-printed-georgette-pants/5769e16e-a001-0000-0b00-3f21e8bd6e0e.jpg": "/spreeai-always-on-demo/online/catalog/1cc7f839ced78b2a539b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/dries-van-noten-printed-georgette-pants/5769e16e-a001-0000-0b00-dc2e7cc9e0f7.jpg": "/spreeai-always-on-demo/online/catalog/78e1c98ebf248e6ba81b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/eel-effect-leather-sneakers/8e73e16e-a001-0000-0b00-75828a021c90.png": "/spreeai-always-on-demo/online/catalog/5d59fe96f1517c2ddbf5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/eel-effect-leather-sneakers/c474e16e-a001-0000-0b00-19004a878f73.png": "/spreeai-always-on-demo/online/catalog/16e2b114ee8ba0c6c092.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/elene-top-bleu-taormina-paisley/d07ee16e-a001-0000-0b00-f593310d52ae.png": "/spreeai-always-on-demo/online/catalog/a6436f00c16ffbd46834.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/elene-top-bleu-taormina-paisley/da7ee16e-a001-0000-0b00-9f46ee2cefc1.png": "/spreeai-always-on-demo/online/catalog/03c1cefaa1768b7f81c2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/flared-fit-pants-in-stretch-jersey-demosite/ae8de16e-a001-0000-0b00-6fecdb26a08b.png": "/spreeai-always-on-demo/online/catalog/f284d6a7a68220438e26.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/flared-fit-pants-in-stretch-jersey-demosite/b98de16e-a001-0000-0b00-66235a98249f.png": "/spreeai-always-on-demo/online/catalog/5f1c82cc72265446f2d5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/1b2fb6b9-9f01-0000-0b00-4e94e870165f.png": "/spreeai-always-on-demo/online/catalog/f68e74eca4cd33a7f4f2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/202fb6b9-9f01-0000-0b00-63714f3ee264.png": "/spreeai-always-on-demo/online/catalog/f734d63a4d3786cb7ed0.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/d809b6b9-9f01-0000-0b00-b2112cd7a0e3.png": "/spreeai-always-on-demo/online/catalog/16a4d60e8897d73633d4.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-pants/d909b6b9-9f01-0000-0b00-f48e31d3b35d.png": "/spreeai-always-on-demo/online/catalog/23111f35d714c4cbc7f2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-shirt-demo-site/ce49d2b9-9f01-0000-0b00-48a278299208.png": "/spreeai-always-on-demo/online/catalog/7f791938f07f924a8bf5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/floral-print-shirt-demo-site/d749d2b9-9f01-0000-0b00-e4c9ae1dd612.png": "/spreeai-always-on-demo/online/catalog/341d014bd9858c33b698.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/17fdf1b9-9f01-0000-0b00-2bdb8be55847.png": "/spreeai-always-on-demo/online/catalog/b2749c29b4a1c2fb82ae.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/37b0f1b9-9f01-0000-0b00-0f7af349d4d9.png": "/spreeai-always-on-demo/online/catalog/a5991a4154ca341471f4.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/3ab0f1b9-9f01-0000-0b00-c4d304c379e7.png": "/spreeai-always-on-demo/online/catalog/d6d0258dc36b663fb60a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/63fdf1b9-9f01-0000-0b00-fec4e75c6441.png": "/spreeai-always-on-demo/online/catalog/025709318426d44de482.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/dde0f1b9-9f01-0000-0b00-f82ebbcd62fd.png": "/spreeai-always-on-demo/online/catalog/9b3c97afde7d3245b8b6.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gauze-shirt-boxy-fit/e0e0f1b9-9f01-0000-0b00-81561b33814d.png": "/spreeai-always-on-demo/online/catalog/9263e5d8550c7f030b08.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gianina-dress-black-demosite/8195e16e-a001-0000-0b00-fb7a5d9edb83.png": "/spreeai-always-on-demo/online/catalog/e560c0df09003823b086.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gianina-dress-black-demosite/8495e16e-a001-0000-0b00-58f034ce3eb0.png": "/spreeai-always-on-demo/online/catalog/ec5c33a7a77b4ade317a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gianina-dress-black-demosite/b296e16e-a001-0000-0b00-6a0b92051987.jpg": "/spreeai-always-on-demo/online/catalog/9304ff542e40105752f7.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gianvitorossi-sofia-sling-70/109de16e-a001-0000-0b00-13ecb1e605a3.jpg": "/spreeai-always-on-demo/online/catalog/0fa151d232f988571403.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gianvitorossi-sofia-sling-70/139de16e-a001-0000-0b00-a50dd67a052c.jpg": "/spreeai-always-on-demo/online/catalog/68003c6b8675255e422e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/gianvitorossi-sofia-sling-70/239de16e-a001-0000-0b00-8b23ac3e8058.png": "/spreeai-always-on-demo/online/catalog/9126c613fdeaf4b25788.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/heaven-mayhem-clarke-cuff-silver/57a4e16e-a001-0000-0b00-193d931c8e35.jpg": "/spreeai-always-on-demo/online/catalog/c573bd0f6cc00f57bd94.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/heaven-mayhem-clarke-cuff-silver/5aa4e16e-a001-0000-0b00-9f0cc650a07a.jpg": "/spreeai-always-on-demo/online/catalog/28129185982407f19bba.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/hudson-st-pant-demosite/beb4e16e-a001-0000-0b00-2325509ad765.png": "/spreeai-always-on-demo/online/catalog/943b8246ad64d8f23cbe.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/hudson-st-pant-demosite/d3b4e16e-a001-0000-0b00-66ff7bec0579.png": "/spreeai-always-on-demo/online/catalog/4c47189a3b9755f58381.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ilkyaz-ozel-dusk-satin-fringed-pants/8cbbe16e-a001-0000-0b00-4b01be12e212.jpg": "/spreeai-always-on-demo/online/catalog/6c46df9abfdc8b0b575b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ilkyaz-ozel-dusk-satin-fringed-pants/90bbe16e-a001-0000-0b00-0801d9753cf6.jpg": "/spreeai-always-on-demo/online/catalog/fcbb1377d30d415059c0.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/izel-sweater-black-demosite/08c4e16e-a001-0000-0b00-5a680f212545.png": "/spreeai-always-on-demo/online/catalog/97f4e8b3da37fc8c3688.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/izel-sweater-black-demosite/d4c4e16e-a001-0000-0b00-af88a3995e97.jpg": "/spreeai-always-on-demo/online/catalog/3a5a2f56a5e8acef1326.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/katya-sculpted-bow-romper/7e08b818-9f01-0000-0b00-98abf0e2024a.png": "/spreeai-always-on-demo/online/catalog/6b04cb0f6f1cf5856dbf.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/katya-sculpted-bow-romper/8508b818-9f01-0000-0b00-93500900b1ac.png": "/spreeai-always-on-demo/online/catalog/9a2180144ca7b096f739.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/leather-pants-demo-site/6ed4e16e-a001-0000-0b00-35e66d0b6e94.png": "/spreeai-always-on-demo/online/catalog/0d415298c0e11efd452f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/leather-pants-demo-site/ccd4e16e-a001-0000-0b00-d945f30e0c8f.png": "/spreeai-always-on-demo/online/catalog/1ce2fa88c235dc113b40.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/liberowe-fringed-tweed-jacket/e2dce16e-a001-0000-0b00-720239500bd1.jpg": "/spreeai-always-on-demo/online/catalog/a5fb16ad6036d090195a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/liberowe-fringed-tweed-jacket/e2dce16e-a001-0000-0b00-e09547472bb2.jpg": "/spreeai-always-on-demo/online/catalog/e0dfd616b530b6d7e03c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/4863c48a-9f01-0000-0b00-8f57b87986f6.png": "/spreeai-always-on-demo/online/catalog/6811f7d08a51b5fd5714.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/b963c48a-9f01-0000-0b00-891128b7398a.png": "/spreeai-always-on-demo/online/catalog/df631f5381591f5619e3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/da12c38a-9f01-0000-0b00-55d1b99514b7.png": "/spreeai-always-on-demo/online/catalog/1abe2263a5f50f51b6cf.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/linen-dress-demo-site/ea12c38a-9f01-0000-0b00-a6ab2508e5d6.png": "/spreeai-always-on-demo/online/catalog/edfd7d7fa6c9ff6c8506.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/magdabutrym-floral-appliqued-off-shoulder-midi-dress/1ce4e16e-a001-0000-0b00-52ccabed9e55.png": "/spreeai-always-on-demo/online/catalog/548af7e82e1bb1fababc.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/magdabutrym-floral-appliqued-off-shoulder-midi-dress/b5e3e16e-a001-0000-0b00-5fe0b6c69894.jpg": "/spreeai-always-on-demo/online/catalog/47944eea17579de93865.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/magdabutrym-floral-appliqued-off-shoulder-midi-dress/ffe3e16e-a001-0000-0b00-041a962f363c.jpg": "/spreeai-always-on-demo/online/catalog/4b8f6c54d9731fc5a0ee.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/304f2d82-a001-0000-0b00-0f28e407d771.png": "/spreeai-always-on-demo/online/catalog/84f4fb87f14da20da32b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/4febe16e-a001-0000-0b00-5489691452c3.jpg": "/spreeai-always-on-demo/online/catalog/a046a0d81e5a377dafac.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/53ebe16e-a001-0000-0b00-1da08bfb4182.jpg": "/spreeai-always-on-demo/online/catalog/8707a914279a90e6f06f.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/matteau-breton-tee-002/75ebe16e-a001-0000-0b00-7cd741fa526d.png": "/spreeai-always-on-demo/online/catalog/e0fc21fbed11fae99a42.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/mcqueen-shoulder-bow-blouse/0df3e16e-a001-0000-0b00-e3e9bdeeffe0.png": "/spreeai-always-on-demo/online/catalog/fed088702c20a54e164a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/mcqueen-shoulder-bow-blouse/f6f2e16e-a001-0000-0b00-341cbda41913.jpg": "/spreeai-always-on-demo/online/catalog/000f31aa7430aa042e15.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/mcqueen-shoulder-bow-blouse/f9f2e16e-a001-0000-0b00-002004f84938.jpg": "/spreeai-always-on-demo/online/catalog/5bd32c2a2c9cb7cdcb34.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/nike-ld1000-suede-black/65fae16e-a001-0000-0b00-ef7cecb6857d.jpg": "/spreeai-always-on-demo/online/catalog/5ece3511198024a1dace.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/nike-ld1000-suede-black/67fae16e-a001-0000-0b00-28939cf67e45.jpg": "/spreeai-always-on-demo/online/catalog/321f2353553265d0cf8a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/nike-ld1000-suede-black/7efae16e-a001-0000-0b00-22c9eec2508b.png": "/spreeai-always-on-demo/online/catalog/96150ac6e41e049b9695.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/nina-embellished-midi-gown/d3a8b418-9f01-0000-0b00-d455803e64cb.png": "/spreeai-always-on-demo/online/catalog/4555b48f87d046717b54.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/nina-embellished-midi-gown/dca8b418-9f01-0000-0b00-78434fc81ee2.png": "/spreeai-always-on-demo/online/catalog/4d853497f59cdc37c614.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ollie-skirt-floral-jacquard-demosite/7f02e26e-a001-0000-0b00-2e74253431d2.jpg": "/spreeai-always-on-demo/online/catalog/593f1512c921eccd2f5e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ollie-skirt-floral-jacquard-demosite/a901e26e-a001-0000-0b00-cfad7445304d.png": "/spreeai-always-on-demo/online/catalog/664d431d5433619d413c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/5b7b164d-9f01-0000-0b00-d7c53d3443b2.png": "/spreeai-always-on-demo/online/catalog/4b49639d51ab1912d8ea.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/667b164d-9f01-0000-0b00-7b6728a32185.png": "/spreeai-always-on-demo/online/catalog/6c88cd0053d123ddc29c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/d776c518-9f01-0000-0b00-861beb82368d.png": "/spreeai-always-on-demo/online/catalog/92cff75e570c3807d412.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/e376c518-9f01-0000-0b00-c40c4eb16dbb.png": "/spreeai-always-on-demo/online/catalog/504dbfbc249a1d0093aa.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/e5c0194d-9f01-0000-0b00-ea55cce57df3.png": "/spreeai-always-on-demo/online/catalog/d4e93b1242244bd43804.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/oversized-sweatshirt-demo-site/e7c0194d-9f01-0000-0b00-02bf7cc74b89.png": "/spreeai-always-on-demo/online/catalog/3c5718822bb41251aa75.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/pink-cheetah-sweater-demo-site/15f4c0b9-9f01-0000-0b00-fd9d4046d36c.png": "/spreeai-always-on-demo/online/catalog/46ba32199a8bc2e279c5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/pink-cheetah-sweater-demo-site/45f4c0b9-9f01-0000-0b00-c78901adb88b.png": "/spreeai-always-on-demo/online/catalog/7e28ddbdd2ffe2da5a10.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/plaid-shirt/6789f1b9-9f01-0000-0b00-dd08a887b560.png": "/spreeai-always-on-demo/online/catalog/e33b601ee78f1a006ef3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/plaid-shirt/7589f1b9-9f01-0000-0b00-308eed0b2511.png": "/spreeai-always-on-demo/online/catalog/a829cff5556e89b0ab44.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/printed-shorts/ae241ec8-9f01-0000-0b00-ee3856729ec1.png": "/spreeai-always-on-demo/online/catalog/01a5a8ca2e28895b7794.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/printed-shorts/d6241ec8-9f01-0000-0b00-e0a14ce132f3.png": "/spreeai-always-on-demo/online/catalog/f3eef764477c3f976495.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/proenzaschouler-nilo-textured-jacquard-dress/d34fdb81-a001-0000-0b00-b1a41ac1a7d9.jpg": "/spreeai-always-on-demo/online/catalog/052d7f6b57d143842029.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/proenzaschouler-nilo-textured-jacquard-dress/d44fdb81-a001-0000-0b00-97e127af8931.jpg": "/spreeai-always-on-demo/online/catalog/3b4911ea2552b7a265ee.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/pucci-printed-mesh-maxi-dress/cb57db81-a001-0000-0b00-b84c44920403.jpg": "/spreeai-always-on-demo/online/catalog/1fabc31b659791f49859.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/pucci-printed-mesh-maxi-dress/ce57db81-a001-0000-0b00-d0f508615e3e.jpg": "/spreeai-always-on-demo/online/catalog/9aa0afdd5c6d9c50214d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/pucci-printed-mesh-maxi-dress/ec57db81-a001-0000-0b00-376d50e4fca5.png": "/spreeai-always-on-demo/online/catalog/99f96095bc7281e6c9b4.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ralphlauren-polo-play-thong-sandal-limeade/bd5edb81-a001-0000-0b00-d3de65e8ff4e.jpg": "/spreeai-always-on-demo/online/catalog/905f95e46d1bb391b9cd.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ralphlauren-polo-play-thong-sandal-limeade/bf5edb81-a001-0000-0b00-57e83949789b.jpg": "/spreeai-always-on-demo/online/catalog/88b624bd94419ed0d5f1.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/ralphlauren-polo-play-thong-sandal-limeade/db5edb81-a001-0000-0b00-56c604656b10.png": "/spreeai-always-on-demo/online/catalog/9ca5f96ea106bf8c53f2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-blazer-in-italian-made-virgin-wool-demosite/8674bf18-9f01-0000-0b00-08be631d307e.png": "/spreeai-always-on-demo/online/catalog/07de7060e78d2908551e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-blazer-in-italian-made-virgin-wool-demosite/9b74bf18-9f01-0000-0b00-667a60357b07.png": "/spreeai-always-on-demo/online/catalog/b8c9f873af10f8d700c8.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-linen-blend-polo-shirt-demo-site/1ed7bb18-9f01-0000-0b00-d7e4dc2ff530.png": "/spreeai-always-on-demo/online/catalog/53b4b6ab3f8613f886c5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-linen-blend-polo-shirt-demo-site/80d7bb18-9f01-0000-0b00-59cd96a6ff82.png": "/spreeai-always-on-demo/online/catalog/934a1598ce9f713278ed.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shirt-demo-site/c3b6b818-9f01-0000-0b00-6e8ee0559507.png": "/spreeai-always-on-demo/online/catalog/3a5ef7f9196718d74fca.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shirt-demo-site/cdb6b818-9f01-0000-0b00-915f790407cb.png": "/spreeai-always-on-demo/online/catalog/027bcfee75be41f0ea00.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shorts-demo-site/28fdf924-9f01-0000-0b00-b13f9c967197.png": "/spreeai-always-on-demo/online/catalog/0cb5757e93c4d0fed72d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/regular-fit-shorts-demo-site/ccfcf924-9f01-0000-0b00-0edf59549ab0.png": "/spreeai-always-on-demo/online/catalog/ab6ad3e54c4de58d46cf.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/c832e94c-9f01-0000-0b00-764ea888072b.png": "/spreeai-always-on-demo/online/catalog/ba51770f3366d46268ae.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/ce32e94c-9f01-0000-0b00-f1aaaf46eebf.png": "/spreeai-always-on-demo/online/catalog/7fbeae0a2e0d10b837a5.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/dc7bbd18-9f01-0000-0b00-282f719b7284.png": "/spreeai-always-on-demo/online/catalog/0d0a08457fd0a4ceabb4.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-cotton-cargo-pants-demo-site/e57bbd18-9f01-0000-0b00-95a0360d164d.png": "/spreeai-always-on-demo/online/catalog/41582b1e25b4f5bbe534.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/1f6ef64c-9f01-0000-0b00-71f8c36a934a.png": "/spreeai-always-on-demo/online/catalog/96a4f9a06b1f388c7cce.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/1fe9034d-9f01-0000-0b00-2d4dfc6d5709.png": "/spreeai-always-on-demo/online/catalog/d810be29949b501422ad.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/226ef64c-9f01-0000-0b00-2896ac57a52b.png": "/spreeai-always-on-demo/online/catalog/deb1a796c89c14b612f6.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/63ea034d-9f01-0000-0b00-3e94e9e1f415.png": "/spreeai-always-on-demo/online/catalog/33ba172c8c0c075fdeaa.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/ac4ebc18-9f01-0000-0b00-886f5cf80809.png": "/spreeai-always-on-demo/online/catalog/2463acee536e45c30008.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-linen-blend-tailored-trousers-demo-site/b04ebc18-9f01-0000-0b00-2ff2cf7cc633.png": "/spreeai-always-on-demo/online/catalog/3d39fad7850a54bfe533.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/1a226c1a-a001-0000-0b00-e98fd7d6ddca.png": "/spreeai-always-on-demo/online/catalog/844eb3dd9c4cb9f9bbba.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/6c226c1a-a001-0000-0b00-6276ad052655.png": "/spreeai-always-on-demo/online/catalog/155daba8a30ab2e87d20.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/ccb8a14c-9f01-0000-0b00-784e1fae6a77.png": "/spreeai-always-on-demo/online/catalog/3afd39c8b28b711c71ad.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/relaxed-fit-t-shirt-demo-site/d2b8a14c-9f01-0000-0b00-ec515263934b.png": "/spreeai-always-on-demo/online/catalog/4d19e7ee0b41598a78cf.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/renesme-dress-cheetah/d6c7b8b9-9f01-0000-0b00-c254e75d95b0.png": "/spreeai-always-on-demo/online/catalog/baa80fe47bbe064315ed.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/renesme-dress-cheetah/d8c7b8b9-9f01-0000-0b00-eb61ca59c394.png": "/spreeai-always-on-demo/online/catalog/d31cf3cce5163183a281.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/roanne-panelled-knit-maxi-dress-demosite/f6a01f5e-9f01-0000-0b00-46521b5a4bd9.png": "/spreeai-always-on-demo/online/catalog/1c0e79fbed4b150b115e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/roanne-panelled-knit-maxi-dress-demosite/faa01f5e-9f01-0000-0b00-0277b8b29a81.png": "/spreeai-always-on-demo/online/catalog/b3df3bdf834910363888.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/rodarte-floral-midi-dress/6166db81-a001-0000-0b00-3701c412f2bf.jpg": "/spreeai-always-on-demo/online/catalog/42b9b24c1959fa6599d7.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/rodarte-floral-midi-dress/6166db81-a001-0000-0b00-5951ce7446e5.jpg": "/spreeai-always-on-demo/online/catalog/2f205ea790c6f1c0f3ec.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/rohe-textured-fringe-boucle-top/5c6ddb81-a001-0000-0b00-0f3c941811bc.jpg": "/spreeai-always-on-demo/online/catalog/a066312838a98fc7d1d0.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/rohe-textured-fringe-boucle-top/5c6ddb81-a001-0000-0b00-301d24a6504d.jpg": "/spreeai-always-on-demo/online/catalog/7443d959a373f37642bb.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/romma-top-black-demosite/cf74db81-a001-0000-0b00-8a78d99737ed.jpg": "/spreeai-always-on-demo/online/catalog/58ea924a6dcea975fdf3.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/romma-top-black-demosite/fe73db81-a001-0000-0b00-5131790d3574.png": "/spreeai-always-on-demo/online/catalog/75ad72fb0bfc8b9d014d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/saintlaurent-jill-bootie-stonish-beige/2d7adb81-a001-0000-0b00-f32688c378ed.jpg": "/spreeai-always-on-demo/online/catalog/9c19ba917610580f7cfa.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/saintlaurent-jill-bootie-stonish-beige/307adb81-a001-0000-0b00-cfe19e0dd254.jpg": "/spreeai-always-on-demo/online/catalog/04001db196c1d6e51a3c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/saintlaurent-jill-bootie-stonish-beige/487adb81-a001-0000-0b00-51ddb584bc18.png": "/spreeai-always-on-demo/online/catalog/bbfc97351d7cab451dca.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/seraphis-skirt-black-demosite/9683db81-a001-0000-0b00-36706afad490.jpg": "/spreeai-always-on-demo/online/catalog/add16c1634ec8917bb91.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/seraphis-skirt-black-demosite/d682db81-a001-0000-0b00-68ec45f2c715.png": "/spreeai-always-on-demo/online/catalog/f42d6a45077b1f5588d0.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/simkhai-laia-bustier-strapless-maxi-dress/738bdb81-a001-0000-0b00-30082a9fa482.png": "/spreeai-always-on-demo/online/catalog/11565561eec5903e175a.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/simkhai-laia-bustier-strapless-maxi-dress/998adb81-a001-0000-0b00-8470d4c0d00a.png": "/spreeai-always-on-demo/online/catalog/488e9c9fcbe6a0bc4141.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/simkhai-laia-bustier-strapless-maxi-dress/d48bdb81-a001-0000-0b00-f3b8d6801f19.png": "/spreeai-always-on-demo/online/catalog/0b029756e3a14533573e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/0c3c681a-a001-0000-0b00-4918b93026fa.png": "/spreeai-always-on-demo/online/catalog/6c5efe918c8ec2450899.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/2127691a-a001-0000-0b00-41189d5d7afc.png": "/spreeai-always-on-demo/online/catalog/d592d32d4a029dd02eb0.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/2ea8671a-a001-0000-0b00-03c06e6ac6c5.png": "/spreeai-always-on-demo/online/catalog/f7db980075ad0e5d1558.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/a3fc661a-a001-0000-0b00-720a6635427f.png": "/spreeai-always-on-demo/online/catalog/30360908271f2a364a36.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/db3a681a-a001-0000-0b00-e08a7fb0acde.png": "/spreeai-always-on-demo/online/catalog/323d841955c734fb1c3c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/e9fd661a-a001-0000-0b00-2c40bfd2559e.png": "/spreeai-always-on-demo/online/catalog/af4bbfdc4f5bc0a29a09.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/f925691a-a001-0000-0b00-86bb9c110fe6.png": "/spreeai-always-on-demo/online/catalog/dd4fdfa5b8f5ee6bcdef.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-blouse-in-cotton-with-peplum-hem-demosite/fda6671a-a001-0000-0b00-3db5feb46583.png": "/spreeai-always-on-demo/online/catalog/50ac86be1e7f49d91dcb.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-jacket-in-washable-virgin-wool-demo-site/841cba18-9f01-0000-0b00-7781e03af69f.png": "/spreeai-always-on-demo/online/catalog/a4085a353b36815ea8fb.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-jacket-in-washable-virgin-wool-demo-site/931cba18-9f01-0000-0b00-c272acf8bb59.png": "/spreeai-always-on-demo/online/catalog/58a8c34c5ba5557fc593.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/11e3651a-a001-0000-0b00-13ad21bc1eea.png": "/spreeai-always-on-demo/online/catalog/920671a532a2c51d77f2.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/2f58641a-a001-0000-0b00-80c6a892d916.png": "/spreeai-always-on-demo/online/catalog/fcf7ae85ca447d76824c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/bc38651a-a001-0000-0b00-ff55ad681c16.png": "/spreeai-always-on-demo/online/catalog/3ea1a00782c00000af00.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/c757641a-a001-0000-0b00-5c8bdb77ab39.png": "/spreeai-always-on-demo/online/catalog/1d4543319bff3de96618.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/cfe1651a-a001-0000-0b00-ffcc675eb83e.png": "/spreeai-always-on-demo/online/catalog/14bc0f1df543ebf049ed.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/slim-fit-vest-with-peplum-hem-demosite/e739651a-a001-0000-0b00-85d0bde6c8e7.png": "/spreeai-always-on-demo/online/catalog/5d6c31b303e2042de42d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/6e93b2b9-9f01-0000-0b00-10b925c33de6.png": "/spreeai-always-on-demo/online/catalog/68f5813c0eb1ce6badfc.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/6f93b2b9-9f01-0000-0b00-1c660b261f56.png": "/spreeai-always-on-demo/online/catalog/5295ac1531c71a90c914.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/9422b3b9-9f01-0000-0b00-d67a00cb677b.png": "/spreeai-always-on-demo/online/catalog/f27e357fb15598ba8041.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/9522b3b9-9f01-0000-0b00-5bcdb446ca1f.png": "/spreeai-always-on-demo/online/catalog/dfe36c6299551a3d12f8.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/d6adb2b9-9f01-0000-0b00-94c314727a0e.png": "/spreeai-always-on-demo/online/catalog/81fe07e943bfa9b92e07.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/df7db3b9-9f01-0000-0b00-10434b08c275.png": "/spreeai-always-on-demo/online/catalog/3ac394c3edcfc99e11ab.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/dfadb2b9-9f01-0000-0b00-ea57da317d53.png": "/spreeai-always-on-demo/online/catalog/53afef554b8619b61125.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tank-top-demo-site/e37db3b9-9f01-0000-0b00-bbc79f99d9c0.png": "/spreeai-always-on-demo/online/catalog/0359b036385e215f43ee.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-fit-trousers-in-washable-virgin-wool-demo-site/9ddfba18-9f01-0000-0b00-17991d976ace.png": "/spreeai-always-on-demo/online/catalog/f7153fc3d2c9fef11356.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-fit-trousers-in-washable-virgin-wool-demo-site/f3dfba18-9f01-0000-0b00-beb3d85a545d.png": "/spreeai-always-on-demo/online/catalog/36c406e03578b6f00f79.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-jeans-demo-site/e3aab918-9f01-0000-0b00-4e7bbc68e195.png": "/spreeai-always-on-demo/online/catalog/430191db8c5c4ee3bebe.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/tapered-jeans-demo-site/feaab918-9f01-0000-0b00-b9d80926ec29.png": "/spreeai-always-on-demo/online/catalog/440750e6a0c2c5320c1e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/2026ecb9-9f01-0000-0b00-cbbdcf2ae2a2.png": "/spreeai-always-on-demo/online/catalog/799f550681886323eeda.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/4b26ecb9-9f01-0000-0b00-606a31a0ecf2.png": "/spreeai-always-on-demo/online/catalog/4840148a14d595090a56.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/eed8ebb9-9f01-0000-0b00-c0e31d044bcd.png": "/spreeai-always-on-demo/online/catalog/0b5396cc5a84ec24fa32.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/efd8ebb9-9f01-0000-0b00-06bb400d493c.png": "/spreeai-always-on-demo/online/catalog/e48d857ea224d77fff7b.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/f601ecb9-9f01-0000-0b00-22c5aba89f4f.png": "/spreeai-always-on-demo/online/catalog/137c2ce6b8c83c7a992e.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/textured-knit-resort-shirt/f601ecb9-9f01-0000-0b00-bfc9d2b73dd3.png": "/spreeai-always-on-demo/online/catalog/807ce1f989f679510323.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-mirror-embellished-cotton-dress/82a1db81-a001-0000-0b00-35fba262b651.jpg": "/spreeai-always-on-demo/online/catalog/cfd6b68b641e786d1756.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-mirror-embellished-cotton-dress/82a1db81-a001-0000-0b00-550c70665b62.jpg": "/spreeai-always-on-demo/online/catalog/a31e062838c3e8c4b03d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-racerback-tank-003/e7a8db81-a001-0000-0b00-709c65190bbc.jpg": "/spreeai-always-on-demo/online/catalog/20995f9e199382c192ec.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-racerback-tank-003/eaa8db81-a001-0000-0b00-cca7fbb4b816.jpg": "/spreeai-always-on-demo/online/catalog/c113bda35cfea6cfb7ee.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-sequin-mesh-top/43b0db81-a001-0000-0b00-5aae1b23ff12.jpg": "/spreeai-always-on-demo/online/catalog/07f92ce8c9d148d75403.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/toryburch-sequin-mesh-top/44b0db81-a001-0000-0b00-bc6f66b6412b.jpg": "/spreeai-always-on-demo/online/catalog/6c19ba55c5d17990fb95.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/17d3a11c-a001-0000-0b00-3f45fa5fd022.png": "/spreeai-always-on-demo/online/catalog/66a2735a97eb7366ad0c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/1ad3a11c-a001-0000-0b00-dd820245b539.png": "/spreeai-always-on-demo/online/catalog/19f11beac3a99238cb84.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/a8aba21c-a001-0000-0b00-25cecf680619.png": "/spreeai-always-on-demo/online/catalog/06626b068364e8c1c30d.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/aeaba21c-a001-0000-0b00-c1c2b3516837.png": "/spreeai-always-on-demo/online/catalog/ce55d5fe8e0e88969414.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/f9e313b9-9f01-0000-0b00-cccb379d38d5.png": "/spreeai-always-on-demo/online/catalog/04a412634945d8be8462.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wide-leg-jeans-demo-site/fee313b9-9f01-0000-0b00-4b0f96c331c8.png": "/spreeai-always-on-demo/online/catalog/a0804db7e580fd70a451.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/womens-jeans-demo-site/4be2b6b9-9f01-0000-0b00-0001b2b73a53.png": "/spreeai-always-on-demo/online/catalog/a523e877543718329b07.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/womens-jeans-demo-site/50e2b6b9-9f01-0000-0b00-4bdef4ec0a73.png": "/spreeai-always-on-demo/online/catalog/1c0401f1a4a11980fc33.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wool-cashmere-cable-knit-mini-dress-demosite/4ec6f05f-9f01-0000-0b00-0fd54fd65358.png": "/spreeai-always-on-demo/online/catalog/30d3d177dd31d4ca81d0.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/wool-cashmere-cable-knit-mini-dress-demosite/a2c6f05f-9f01-0000-0b00-b0528da206a8.png": "/spreeai-always-on-demo/online/catalog/909683b3875fd302c86c.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/zara-linen-fringe-jacket/23b8db81-a001-0000-0b00-c8b1dd5d6462.jpg": "/spreeai-always-on-demo/online/catalog/eca67c7acfd8a53aa476.webp",
	"https://api-minio.prod.spreeai.com/garment/demo-site/zara-linen-fringe-jacket/24b8db81-a001-0000-0b00-245c01a8c8ff.jpg": "/spreeai-always-on-demo/online/catalog/47d0e5a9d88cabc25f8a.webp"
}, Rl = (e) => Ll[e] || e;
function zl(e, t = "dev") {
	return e.flatMap((e) => {
		if (!e || typeof e.id != "string" || typeof e.title != "string" || !Array.isArray(e.variants)) return [];
		let n = e.variants[0], r = e.variants.flatMap((e) => e.images || []).filter((e) => /^https:\/\/(api-minio\.(?:dev|prod)\.spreeai\.com|assets\.spreeai\.com)\//.test(e.url)) || [];
		if (!r.length) return [];
		let i = r.find((e) => e.tag === "flat") || r[0], a = r.find((e) => e.tag === "model") || i, o = (e.categories || []).map((e) => e.name), s = e.title.toLowerCase(), c = o.includes("Dress") ? "Dresses" : o.includes("Footwear") ? "Shoes" : o.includes("Bottom") ? "Bottoms" : o.some((e) => [
			"Bracelet",
			"Scarf",
			"Earrings",
			"Accessory",
			"Accessories",
			"Bag"
		].includes(e)) || /earring|clutch|bag|poppy/.test(s) ? "Accessories" : /jacket|blazer|coat/.test(s) ? "Outerwear" : /knit|sweater|cardigan/.test(s) ? "Knitwear" : /shirt|blouse/.test(s) ? "Shirts" : "Tops", l = n.price?.amount || "", u = Number(l.replace(/[^\d.]/g, "")) || 0, d = /\d/.test(l) ? new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: n.price?.currency || "USD",
			minimumFractionDigits: Number.isInteger(u) ? 0 : 2,
			maximumFractionDigits: 2
		}).format(u) : "Price on request", f = [...new Set(e.variants.flatMap((e) => (e.size_groups || []).flatMap((e) => e.sizes)).filter((e) => typeof e == "string"))];
		return [{
			environment: t,
			id: "spree-" + e.id,
			garmentId: e.id,
			partnerId: e.partner_id || "demo-site",
			name: e.title,
			category: c,
			price: u,
			priceLabel: d,
			currency: n.price?.currency || "USD",
			color: n.color?.name || "As shown",
			row: -1,
			description: e.description && !/^https?:/.test(e.description) ? e.description : `${e.title}. Discover this ${c.toLowerCase() === "accessories" ? "accessory" : c === "Dresses" ? "dress" : c.toLowerCase().replace(/s$/, "")} in ${n.color?.name || "the color shown"}, available in ${f.join(", ")}. Explore the original product photography and your personal preview.`,
			details: "Product imagery, available demo sizes and listed price are supplied by the official SPREEAI demo catalog.",
			retailerUrl: e.buy_link && /^https:\/\//.test(e.buy_link) ? e.buy_link : void 0,
			material: e.description?.match(/(?:Materials?|Composition|Fabric):[^\n]+/i)?.[0] || "Composition and care details are confirmed by the retailer.",
			image: Rl(i.url),
			model: Rl(a.url),
			source: r.map((e) => Rl(e.url)),
			sizes: f
		}];
	});
}
var Bl = window.PARTNER_DEMO?.products || [...zl(Il), ...zl(Fl, "prod")];
//#endregion
//#region src/always-on/CompleteLook.tsx
function Vl({ product: e, value: t, onDefault: n, onChange: r }) {
	let i = ki(e), a = ni(e.sizes), o = a ? e.sizes[0] : i.recommended;
	return (0, d.useEffect)(() => {
		!t && o && n(o);
	}, [o, t]), /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "outfit-size-control",
		children: [/* @__PURE__ */ (0, y.jsxs)("select", {
			"aria-label": `Size for ${e.name}`,
			value: t,
			onChange: (e) => r(e.target.value),
			children: [/* @__PURE__ */ (0, y.jsx)("option", {
				value: "",
				children: "Select size"
			}), e.sizes.map((e) => /* @__PURE__ */ (0, y.jsxs)("option", {
				value: e,
				children: [ri(e), e === i.recommended ? " · " + (i.recommendationSource === "twin" ? "Starting size" : "Recommended") : ""]
			}, e))]
		}), !a && /* @__PURE__ */ (0, y.jsxs)("small", { children: [i.recommended ? `Your ${i.recommendationSource === "twin" ? "starting" : "recommended"} size: ${ri(i.recommended)}. ` : "", "Choose a size to see this piece on you."] })]
	});
}
function Hl({ product: e, initialProducts: t, onBag: n, selectedSize: r, onSize: i }) {
	let { identity: a, version: o } = _r(), [s, c] = Bn("outfit-ids-" + (e?.id || "stylist"), () => t?.map((e) => e.id) || [e?.previewAvailable === !1 ? Bl.find((e) => e.previewAvailable !== !1) : e || Bl.find((e) => e.category === "Dresses") || Bl[0], Bl.find((t) => t.category === "Accessories" && t.id !== e?.id && (t.environment || "dev") === (e?.environment || "dev"))].filter((e) => !!e).map((e) => e.id)), [l, u] = (0, d.useState)(0), [f, p] = (0, d.useState)(""), [m, h] = (0, d.useState)(!1), [g, _] = (0, d.useState)(""), [v, x] = (0, d.useState)(!1), [S, C] = (0, d.useState)(""), [w, T] = Bn("outfit-sizes-" + (e?.id || "stylist"), {});
	(0, d.useEffect)(() => {
		e && r && T((t) => t[e.id] === r ? t : {
			...t,
			[e.id]: r
		});
	}, [e?.id, r]);
	let ee = !!window.PARTNER_DEMO, E = [];
	try {
		E = JSON.parse(sessionStorage.getItem("ao-looks:" + (a?.id || "guest")) || "[]").filter((e) => e.items?.every((e) => Bl.some((t) => t.id === e)));
	} catch {}
	let D = s.map((e) => Bl.find((t) => t.id === e)).filter(Boolean), O = Oi(D, "", "", l), te = (0, d.useMemo)(() => Qn(a?.id || ""), [
		a?.id,
		o,
		s.join("|"),
		JSON.stringify(w)
	]), k = D.find((e) => e.id === S), ne = O.url || e?.model || D[0]?.model;
	return (0, d.useEffect)(() => {
		C(""), x(!1);
	}, [o]), (0, d.useEffect)(() => {
		let e = D.filter((e) => w[e.id]);
		a && e.length && rr({
			id: o + ":outfit-sizes:" + s.join("|") + ":" + JSON.stringify(w),
			kind: "sizing",
			identityId: a.id,
			identityName: a.name,
			pieces: D.map((e) => ({
				id: e.id,
				name: e.name,
				image: e.image
			})),
			images: [],
			guidance: "Selected outfit sizes: " + e.map((e) => e.name + " — " + w[e.id]).join(" · ")
		}, te);
	}, [
		JSON.stringify(w),
		s.join("|"),
		o
	]), /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "complete-shopping",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "complete-heading",
				children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("p", {
					className: "eyebrow",
					children: "THE FINISHING TOUCHES"
				}), /* @__PURE__ */ (0, y.jsx)("h2", { children: "Build the outfit." })] }), /* @__PURE__ */ (0, y.jsxs)("p", { children: [
					"A favorite piece is just the beginning.",
					/* @__PURE__ */ (0, y.jsx)("br", {}),
					"Make the rest of the look yours."
				] })]
			}),
			ee && E.length > 0 && /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "partner-saved-looks",
				children: [/* @__PURE__ */ (0, y.jsx)("p", {
					className: "eyebrow",
					children: "SAVED LOOKS / THIS SESSION"
				}), E.map((e) => /* @__PURE__ */ (0, y.jsxs)("button", {
					className: "secondary",
					onClick: () => {
						c(e.items), e.sizes && T(e.sizes), C(""), _("Saved look restored.");
					},
					children: [
						e.name,
						" · ",
						e.items.length,
						" pieces"
					]
				}, e.id))]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "complete-composition",
				children: [/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "complete-visual",
					children: [
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "outfit-view-heading",
							children: [/* @__PURE__ */ (0, y.jsx)("span", { children: k ? `SIZE PREVIEW · ${k.name}` : "YOUR COMPLETE LOOK" }), k && /* @__PURE__ */ (0, y.jsx)("button", {
								className: "text-link",
								onClick: () => C(""),
								children: "View full look"
							})]
						}),
						/* @__PURE__ */ (0, y.jsx)(Pl, {}),
						/* @__PURE__ */ (0, y.jsx)("div", {
							className: "complete-editorial",
							children: k ? /* @__PURE__ */ (0, y.jsx)(Ni, {
								product: k,
								selectedSize: w[k.id]
							}, k.id) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("button", {
								className: "complete-image-zoom",
								disabled: !ne || !!a && !O.url,
								"aria-label": "Enlarge your complete look",
								onClick: () => x(!0),
								children: /* @__PURE__ */ (0, y.jsx)("img", {
									className: a && s.length > 0 && !O.url && O.status !== "error" ? "awaiting-view" : "",
									src: ne,
									alt: O.url ? `Your selected look on ${a?.name}` : "Original collection model photography"
								})
							}), a && s.length > 0 && !O.url && O.status !== "error" ? /* @__PURE__ */ (0, y.jsx)("div", {
								className: "complete-loading",
								children: /* @__PURE__ */ (0, y.jsx)(b, { label: "Generating your look…" })
							}) : null] })
						}),
						a && !k && /* @__PURE__ */ (0, y.jsx)("div", {
							className: "complete-photo-caption",
							children: /* @__PURE__ */ (0, y.jsx)("span", {
								className: "complete-photo-credit",
								children: O.url ? "ON " + a.name.toUpperCase() : O.status === "error" ? "PERSONAL VIEW UNAVAILABLE" : "YOUR PERSONAL LOOK"
							})
						})
					]
				}), /* @__PURE__ */ (0, y.jsxs)("div", {
					className: "complete-pieces",
					children: [
						/* @__PURE__ */ (0, y.jsxs)("p", {
							className: "eyebrow",
							children: [
								"YOUR EDIT / ",
								s.length,
								" ",
								s.length === 1 ? "PIECE" : "PIECES"
							]
						}),
						D.map((t) => /* @__PURE__ */ (0, y.jsxs)("article", { children: [
							/* @__PURE__ */ (0, y.jsx)("img", {
								src: t.image,
								alt: t.name
							}),
							/* @__PURE__ */ (0, y.jsxs)("div", { children: [
								/* @__PURE__ */ (0, y.jsx)("h3", { children: t.name }),
								/* @__PURE__ */ (0, y.jsx)("p", { children: t.priceLabel }),
								/* @__PURE__ */ (0, y.jsx)(Vl, {
									product: t,
									value: w[t.id] || "",
									onDefault: (e) => T((n) => n[t.id] ? n : {
										...n,
										[t.id]: e
									}),
									onChange: (n) => {
										t.id === e?.id && i?.(n), T((e) => ({
											...e,
											[t.id]: n
										})), C(n ? t.id : "");
									}
								})
							] }),
							/* @__PURE__ */ (0, y.jsx)("button", {
								"aria-label": `Remove ${t.name} from outfit`,
								onClick: () => c(s.filter((e) => e !== t.id)),
								children: "×"
							})
						] }, t.id)),
						s.length < 5 && /* @__PURE__ */ (0, y.jsxs)("button", {
							className: "complete-add",
							onClick: () => {
								p(""), h(!0);
							},
							children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "＋" }), "Find the finishing piece"]
						}),
						O.status === "error" && /* @__PURE__ */ (0, y.jsxs)("div", {
							role: "status",
							children: [/* @__PURE__ */ (0, y.jsx)("p", { children: O.error || "This look could not be generated. Your pieces are still selected." }), /* @__PURE__ */ (0, y.jsx)("button", {
								className: "secondary",
								onClick: () => u((e) => e + 1),
								children: "Retry this look"
							})]
						}),
						/* @__PURE__ */ (0, y.jsxs)("p", {
							className: "fine",
							children: ["Demo — no checkout or payments. Size selections do not change the combined try-on. ", ee ? "Only available complementary garments can be combined; compare alternative dresses or tops in Compare looks." : ""]
						}),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "complete-actions",
							children: [/* @__PURE__ */ (0, y.jsx)("button", {
								className: "primary",
								disabled: !s.length,
								onClick: () => {
									if (D.some((e) => !w[e.id])) {
										_("Select a size for each piece to add your look to the bag.");
										return;
									}
									n(s.map((e) => ({
										id: e,
										size: w[e]
									}))), _("Your look is in your bag.");
								},
								children: "Add look to bag"
							}), /* @__PURE__ */ (0, y.jsx)("button", {
								className: "text-link",
								disabled: !s.length,
								onClick: () => {
									try {
										let t = JSON.parse(sessionStorage.getItem("ao-looks:" + (a?.id || "guest")) || "[]");
										sessionStorage.setItem("ao-looks:" + (a?.id || "guest"), JSON.stringify([...t, {
											id: Date.now(),
											name: e?.name ? "The " + e.name + " edit" : "My personal edit",
											items: s,
											sizes: { ...w },
											person: 1,
											previewId: O.url ? wi(D.map((e) => e.garmentId), "", "", D[0]?.environment || "dev") : void 0
										}])), _("Saved in this browser session.");
									} catch {
										_("Saving is unavailable in this browser.");
									}
								},
								children: "Save look ♡"
							})]
						}),
						g && /* @__PURE__ */ (0, y.jsx)("p", {
							role: "status",
							children: g
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, y.jsx)(oc, {
				open: v,
				onOpenChange: x,
				children: /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
					className: "native-zoom personal-zoom",
					"aria-describedby": "outfit-zoom-description",
					children: [
						/* @__PURE__ */ (0, y.jsx)(Cc, {
							className: "sr-only",
							children: "Your complete look"
						}),
						/* @__PURE__ */ (0, y.jsx)(Tc, {
							id: "outfit-zoom-description",
							className: "sr-only",
							children: O.url ? "Your personalized outfit preview." : "Original collection model photography."
						}),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "zoom-toolbar tryon-viewer-toolbar",
							children: [/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "tryon-viewer-title",
								children: [/* @__PURE__ */ (0, y.jsx)("small", { children: "THE FINISHING TOUCHES" }), /* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("h2", { children: "Your complete look" }), /* @__PURE__ */ (0, y.jsxs)("span", {
									className: "tryon-viewer-size",
									children: [
										D.length,
										" ",
										D.length === 1 ? "piece" : "pieces"
									]
								})] })]
							}), /* @__PURE__ */ (0, y.jsx)(Dc, {
								"aria-label": "Close outfit viewer",
								children: "×"
							})]
						}),
						/* @__PURE__ */ (0, y.jsx)(al, {
							allowOriginal: !!O.url,
							src: ne,
							alt: O.url ? `Your selected look on ${a?.name}` : "Original collection model photography"
						}, ne),
						O.url && /* @__PURE__ */ (0, y.jsx)(il, {})
					]
				})] })
			}),
			/* @__PURE__ */ (0, y.jsx)(oc, {
				open: m,
				onOpenChange: h,
				children: /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
					className: "modal wide finishing-picker",
					"aria-describedby": "finishing-description",
					children: [
						/* @__PURE__ */ (0, y.jsx)(Dc, {
							className: "close",
							"aria-label": "Close finishing piece picker",
							children: "×"
						}),
						/* @__PURE__ */ (0, y.jsx)(Cc, { children: "Find the finishing piece." }),
						/* @__PURE__ */ (0, y.jsx)(Tc, {
							id: "finishing-description",
							children: "Choose a complementary piece to add to your outfit. This curated demo only offers loaded garments; alternative dresses are explored in Compare looks."
						}),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "outfit-picker",
							children: [
								ee && !Bl.some((e) => e.previewAvailable !== !1 && !s.includes(e.id) && !D.some((t) => t.category === e.category || t.category === "Dresses" || e.category === "Dresses")) && /* @__PURE__ */ (0, y.jsx)("p", {
									role: "status",
									children: "No complementary garments are loaded for this selection yet. You can save this look, choose another piece, or compare alternatives in Compare looks."
								}),
								/* @__PURE__ */ (0, y.jsx)("input", {
									autoFocus: !0,
									type: "search",
									"aria-label": "Search finishing pieces",
									placeholder: "Search garments and accessories…",
									value: f,
									onChange: (e) => p(e.target.value)
								}),
								/* @__PURE__ */ (0, y.jsx)("p", {
									className: "eyebrow",
									children: "MAKE IT YOURS"
								}),
								/* @__PURE__ */ (0, y.jsx)("div", { children: Bl.filter((t) => t.previewAvailable !== !1 && !s.includes(t.id) && (!ee || !D.some((e) => e.category === t.category || e.category === "Dresses" || t.category === "Dresses")) && t.name.toLowerCase().includes(f.toLowerCase()) && (t.environment || "dev") === (e?.environment || D[0]?.environment || "dev")).map((e) => /* @__PURE__ */ (0, y.jsxs)("button", {
									onClick: () => {
										c([...s, e.id]), h(!1);
									},
									children: [
										/* @__PURE__ */ (0, y.jsx)("img", {
											loading: "lazy",
											src: e.image,
											alt: ""
										}),
										/* @__PURE__ */ (0, y.jsx)("span", { children: e.name }),
										/* @__PURE__ */ (0, y.jsx)("small", { children: e.priceLabel })
									]
								}, e.id)) })
							]
						})
					]
				})] })
			})
		]
	});
}
//#endregion
//#region src/partner-demo/SimulatedSizing.tsx
function Ul({ product: e, size: t, onSize: n }) {
	let [r, i] = (0, d.useState)(172), [a, o] = (0, d.useState)(65), [s, c] = (0, d.useState)("Regular"), [l, u] = (0, d.useState)("");
	function f() {
		if (!Number.isFinite(r) || !Number.isFinite(a) || r < 100 || r > 230 || a < 30 || a > 250) {
			u("Enter a height from 100–230 cm and weight from 30–250 kg.");
			return;
		}
		let t = a / (r / 100) ** 2, i = Math.max(0, Math.min(1, (t - 17) / 16 + (s === "Relaxed" ? .12 : s === "Close" ? -.08 : 0))), o = Math.round(i * (e.sizes.length - 1)), c = e.sizes[o];
		n(c), u("Simulated starting size: " + c + " · " + s + " preference.");
	}
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: "partner-sim-sizing",
		children: [
			/* @__PURE__ */ (0, y.jsx)("small", { children: "SIMULATED SIZING DEMO" }),
			/* @__PURE__ */ (0, y.jsx)("h2", { children: "Find your starting size." }),
			/* @__PURE__ */ (0, y.jsx)("p", { children: "Explore how sizing could feel on this product page. This demonstration uses a simple height-and-weight estimate, not calibrated garment measurements." }),
			/* @__PURE__ */ (0, y.jsxs)("div", { children: [
				/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Height (cm)", /* @__PURE__ */ (0, y.jsx)("input", {
					"aria-label": "Sizing height in centimeters",
					type: "number",
					value: r,
					onChange: (e) => i(Number(e.target.value))
				})] }),
				/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Weight (kg)", /* @__PURE__ */ (0, y.jsx)("input", {
					"aria-label": "Sizing weight in kilograms",
					type: "number",
					value: a,
					onChange: (e) => o(Number(e.target.value))
				})] }),
				/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Fit preference", /* @__PURE__ */ (0, y.jsx)("select", {
					value: s,
					onChange: (e) => c(e.target.value),
					children: [
						"Close",
						"Regular",
						"Relaxed"
					].map((e) => /* @__PURE__ */ (0, y.jsx)("option", { children: e }, e))
				})] })
			] }),
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "primary",
				onClick: f,
				children: "Find my demo size "
			}),
			/* @__PURE__ */ (0, y.jsx)("p", {
				role: "status",
				children: l || "Choose your measurements and fit preference."
			}),
			t && /* @__PURE__ */ (0, y.jsxs)("p", { children: [
				"Selected size: ",
				/* @__PURE__ */ (0, y.jsx)("strong", { children: t }),
				". The fit study uses localized silhouette mockups; the recommendation above is simulated."
			] })
		]
	});
}
//#endregion
//#region src/partner-demo/SizeGuide.tsx
var Wl = {
	"Carolina Herrera": {
		url: "https://www.carolinaherrera.com/fr/fr/c/rtw",
		rows: [
			[
				"0",
				31.8898,
				25.1969,
				35.8268
			],
			[
				"2",
				33.0709,
				25.9843,
				37.0079
			],
			[
				"4",
				33.8583,
				27.1654,
				38.189
			],
			[
				"6",
				35.0394,
				27.9528,
				38.9764
			],
			[
				"8",
				35.8268,
				29.1339,
				40.1575
			],
			[
				"10",
				37.4016,
				30.315,
				41.3386
			],
			[
				"12",
				38.9764,
				31.8898,
				42.9134
			],
			[
				"14",
				40.9449,
				33.8583,
				44.8819
			],
			[
				"16",
				42.9134,
				35.8268,
				46.8504
			]
		]
	},
	"Alice + Olivia": {
		url: "https://www.aliceandolivia.com/pages/global-size-guide",
		rows: [
			[
				"0",
				31.5,
				25,
				34.5
			],
			[
				"2",
				31.5,
				26,
				35.5
			],
			[
				"4",
				33.5,
				27,
				36.6
			],
			[
				"6",
				34.5,
				28,
				37.5
			],
			[
				"8",
				35.5,
				29,
				38.5
			],
			[
				"10",
				36.5,
				30,
				39.5
			],
			[
				"12",
				38,
				31.5,
				41
			],
			[
				"14",
				39.75,
				33.5,
				43
			]
		]
	},
	"Cult Gaia": {
		url: "https://cultgaia.com/",
		rows: [
			[
				"XS",
				33,
				25,
				36.5
			],
			[
				"S",
				35,
				27.5,
				38.5
			],
			[
				"M",
				36.5,
				29.5,
				41.5
			],
			[
				"L",
				38,
				31.5,
				43.5
			],
			[
				"XL",
				39.5,
				33.5,
				45.5
			]
		]
	},
	"Sergio Hudson": {
		url: "https://sergiohudson.com/pages/sizing-chart",
		rows: [
			[
				"0",
				33,
				25.75,
				35.5
			],
			[
				"2",
				34,
				26.75,
				36.5
			],
			[
				"4",
				35,
				27.75,
				37.5
			],
			[
				"6",
				36,
				28.75,
				38.5
			],
			[
				"8",
				37.5,
				30.25,
				40
			],
			[
				"10",
				39,
				31.75,
				41.5
			],
			[
				"12",
				40.5,
				33.25,
				43
			],
			[
				"14",
				42,
				34.75,
				44.5
			],
			[
				"16",
				43,
				36.25,
				46
			]
		]
	},
	"Michael Kors": {
		url: "https://www.michaelkors.global/on/demandware.store/Sites-mk_anz-Site/en_AU/SizeGuide-Show?cid=womens-clothing",
		rows: [
			[
				"XXS",
				31,
				24,
				33.5
			],
			[
				"XS",
				33,
				26,
				35.5
			],
			[
				"S",
				35,
				28,
				37.5
			],
			[
				"M",
				37.5,
				30.5,
				40
			],
			[
				"L",
				40.5,
				33.5,
				43
			],
			[
				"XL",
				42,
				35,
				44.5
			],
			[
				"XXL",
				43.5,
				36.5,
				46
			]
		]
	}
};
function Gl({ product: e, onSize: t, onExplore: n }) {
	let [r, i] = (0, d.useState)(e.source?.[0] === "Carolina Herrera" ? "cm" : "in"), [a, o] = (0, d.useState)({}), [s, c] = (0, d.useState)(""), l = Wl[e.source?.[0] || ""];
	if (!l) return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "retail-body-guide",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("h3", { children: [e.source?.[0] || "Brand", " size guide"] }),
			/* @__PURE__ */ (0, y.jsxs)("p", { children: [
				"Available sizes: ",
				e.sizes.join(", "),
				". Product cut: ",
				e.fit || "See product details",
				"."
			] }),
			/* @__PURE__ */ (0, y.jsx)("p", { children: "Comfort, regular and oversize describe different cuts. The simulation demonstrates size changes, without predicting garment measurements." }),
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "retail-add",
				onClick: n,
				children: "EXPLORE SIZING & COMPARISON "
			}),
			/* @__PURE__ */ (0, y.jsx)("a", {
				className: "retail-official",
				href: e.retailerUrl,
				target: "_blank",
				rel: "noreferrer",
				children: "View official size guide "
			})
		]
	});
	function u() {
		let n = [
			"Bust",
			"Waist",
			"Hip"
		].map((e) => Number(a[e]) / (r === "cm" ? 2.54 : 1));
		if (n.some((e) => !Number.isFinite(e) || e < 15 || e > 70)) {
			c("Enter valid bust, waist and hip measurements.");
			return;
		}
		let i = l.rows.filter((t) => e.sizes.includes(String(t[0]))).find((e) => n.every((t, n) => t <= Number(e[n + 1])));
		if (!i) {
			c("Your measurements fall outside this published guide. Consult the brand for fit advice.");
			return;
		}
		c("Body-chart match: " + i[0] + ". Confirm against the garment’s cut and fabric."), t(String(i[0]));
	}
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "retail-body-guide",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-guide-units",
				children: [/* @__PURE__ */ (0, y.jsx)("button", {
					"aria-pressed": r === "in",
					onClick: () => i("in"),
					children: "INCHES"
				}), /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-pressed": r === "cm",
					onClick: () => i("cm"),
					children: "CENTIMETERS"
				})]
			}),
			/* @__PURE__ */ (0, y.jsxs)("table", { children: [/* @__PURE__ */ (0, y.jsx)("thead", { children: /* @__PURE__ */ (0, y.jsx)("tr", { children: [
				"Size",
				"Bust",
				"Waist",
				"Hip"
			].map((e) => /* @__PURE__ */ (0, y.jsx)("th", { children: e }, e)) }) }), /* @__PURE__ */ (0, y.jsx)("tbody", { children: l.rows.map((e) => /* @__PURE__ */ (0, y.jsx)("tr", { children: e.map((e, t) => /* @__PURE__ */ (0, y.jsx)("td", { children: t === 0 ? e : r === "cm" ? Math.round(Number(e) * 2.54 * 10) / 10 : e }, t)) }, String(e[0]))) })] }),
			/* @__PURE__ */ (0, y.jsx)("p", { children: "Published brand body measurements. These are not garment dimensions or a calibrated SPREEAI prediction." }),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "retail-measurements",
				children: [
					"Bust",
					"Waist",
					"Hip"
				].map((e) => /* @__PURE__ */ (0, y.jsxs)("label", { children: [
					e,
					" (",
					r,
					")",
					/* @__PURE__ */ (0, y.jsx)("input", {
						type: "number",
						inputMode: "decimal",
						min: "1",
						value: a[e] || "",
						onChange: (t) => o((n) => ({
							...n,
							[e]: t.target.value
						}))
					})
				] }, e))
			}),
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "retail-guide-match",
				onClick: u,
				children: "FIND MY CHART MATCH"
			}),
			/* @__PURE__ */ (0, y.jsx)("p", {
				role: "status",
				children: s
			}),
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "retail-add",
				onClick: n,
				children: "COMPARE SIZES ON YOU "
			}),
			/* @__PURE__ */ (0, y.jsx)("a", {
				className: "retail-official",
				href: l.url,
				target: "_blank",
				rel: "noreferrer",
				children: "View published brand size guide "
			})
		]
	});
}
//#endregion
//#region ../../../../2026-09-21/referenced-chatgpt-conversation-this-is-an/work/always-on/storefront-source/node_modules/.pnpm/scheduler@0.28.0/node_modules/scheduler/cjs/scheduler.production.js
var Kl = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, D());
			else {
				var t = n(l);
				t !== null && k(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function ee() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function E() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && k(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? D() : S = !1;
			}
		}
	}
	var D;
	if (typeof y == "function") D = function() {
		y(E);
	};
	else if (typeof MessageChannel < "u") {
		var O = new MessageChannel(), te = O.port2;
		O.port1.onmessage = E, D = function() {
			te.postMessage(null);
		};
	} else D = function() {
		_(E, 0);
	};
	function k(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, k(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, D()))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), ql = /* @__PURE__ */ o(((e, t) => {
	t.exports = Kl();
})), Jl = /* @__PURE__ */ o(((e) => {
	var t = ql(), n = u(), r = ya();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function f(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = f(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function p(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && p(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function m(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function h(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function g(e) {
		var t = [null, null], n = m(e);
		return n === null || _(t, e, n.child, { foundSelf: !1 }), t;
	}
	function _(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && _(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function v(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var y = null, b = null;
	function x(e, t, n) {
		return e === n || e === t && (y = e, !0);
	}
	function S(e, t, n) {
		return e === n ? (b = e, !1) : e === t && (b !== null && (y = e), !0);
	}
	function C(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function w(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var T = Object.assign, ee = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), re = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), le = Symbol.for("react.legacy_hidden"), j = Symbol.for("react.memo_cache_sentinel"), ue = Symbol.for("react.view_transition"), de = Symbol.for("react.recoverable"), M = Symbol.iterator;
	function fe(e) {
		return typeof e != "object" || !e ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var pe = Symbol.for("react.client.reference");
	function me(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === pe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case O: return "Fragment";
			case k: return "Profiler";
			case te: return "StrictMode";
			case ie: return "Suspense";
			case ae: return "SuspenseList";
			case ce: return "Activity";
			case ue: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case D: return "Portal";
			case re: return e.displayName || "Context";
			case ne: return (e._context.displayName || "Context") + ".Consumer";
			case A:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case oe: return t = e.displayName || null, t === null ? me(e.type) || "Memo" : t;
			case se:
				t = e._payload, e = e._init;
				try {
					return me(e(t));
				} catch {}
		}
		return null;
	}
	var he = Array.isArray, N = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, _e = [], ve = -1;
	function ye(e) {
		return { current: e };
	}
	function be(e) {
		0 > ve || (e.current = _e[ve], _e[ve] = null, ve--);
	}
	function xe(e, t) {
		ve++, _e[ve] = e.current, e.current = t;
	}
	var Se = ye(null), Ce = ye(null), we = ye(null), Te = ye(null);
	function Ee(e, t) {
		switch (xe(we, t), xe(Ce, e), xe(Se, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		be(Se), xe(Se, e);
	}
	function De() {
		be(Se), be(Ce), be(we);
	}
	function Oe(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, xe(Te, e)), t = Se.current;
		var n = dp(t, e.type);
		t !== n && (xe(Ce, e), xe(Se, n));
	}
	function ke(e) {
		Ce.current === e && (be(Se), be(Ce)), Te.current === e && (be(Te), sh._currentValue = ge);
	}
	var Ae, je;
	function Me(e) {
		if (Ae === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Ae = t && t[1] || "", je = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Ae + e + je;
	}
	var Ne = !1;
	function Pe(e, t) {
		if (!e || Ne) return "";
		Ne = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Ne = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Me(n) : "";
	}
	function Fe(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Me(e.type);
			case 16: return Me("Lazy");
			case 13: return e.child !== t && t !== null ? Me("Suspense Fallback") : Me("Suspense");
			case 19: return Me("SuspenseList");
			case 0:
			case 15: return Pe(e.type, !1);
			case 11: return Pe(e.type.render, !1);
			case 1: return Pe(e.type, !0);
			case 31: return Me("Activity");
			case 30: return Me("ViewTransition");
			default: return "";
		}
	}
	function Ie(e) {
		try {
			var t = "", n = null;
			do
				t += Fe(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Le = Object.prototype.hasOwnProperty, Re = t.unstable_scheduleCallback, ze = t.unstable_cancelCallback, Be = t.unstable_shouldYield, Ve = t.unstable_requestPaint, He = t.unstable_now, Ue = t.unstable_getCurrentPriorityLevel, We = t.unstable_ImmediatePriority, Ge = t.unstable_UserBlockingPriority, Ke = t.unstable_NormalPriority, qe = t.unstable_LowPriority, Je = t.unstable_IdlePriority, Ye = t.log, Xe = t.unstable_setDisableYieldValue, Ze = null, Qe = null;
	function $e(e) {
		if (typeof Ye == "function" && Xe(e), Qe && typeof Qe.setStrictMode == "function") try {
			Qe.setStrictMode(Ze, e);
		} catch {}
	}
	var et = Math.clz32 ? Math.clz32 : rt, tt = Math.log, nt = Math.LN2;
	function rt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (tt(e) / nt | 0) | 0;
	}
	var it = 256, at = 262144, ot = 4194304;
	function st(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function ct(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = st(n))) : i = st(o) : i = st(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = st(n))) : i = st(o)) : i = st(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function lt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function ut(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - et(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function dt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function ft() {
		var e = ot;
		return ot <<= 1, !(ot & 62914560) && (ot = 4194304), e;
	}
	function pt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function mt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function ht(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - et(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && gt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function gt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - et(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function _t(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - et(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function vt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : yt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function yt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function bt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function xt() {
		var e = P.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function St(e, t) {
		var n = P.p;
		try {
			return P.p = e, t();
		} finally {
			P.p = n;
		}
	}
	var Ct = Math.random().toString(36).slice(2), wt = "__reactFiber$" + Ct, Tt = "__reactProps$" + Ct, Et = "__reactContainer$" + Ct, Dt = "__reactEvents$" + Ct, Ot = "__reactListeners$" + Ct, kt = "__reactHandles$" + Ct, At = "__reactResources$" + Ct, jt = "__reactMarker$" + Ct, Mt = "__reactLoad$" + Ct;
	function Nt(e) {
		delete e[wt], delete e[Tt], delete e[Ot], delete e[kt];
	}
	function Pt(e) {
		var t;
		if (t = e[wt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Et] || n[wt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[wt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Ft(e) {
		if (e = e[wt] || e[Et]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function It(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Lt(e) {
		var t = e[At];
		return t ||= e[At] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Rt(e) {
		e[jt] = !0;
	}
	function zt(e) {
		e[Mt] = void 0;
	}
	var Bt = /* @__PURE__ */ new Set(), Vt = {};
	function Ht(e, t) {
		Ut(e, t), Ut(e + "Capture", t);
	}
	function Ut(e, t) {
		for (Vt[e] = t, e = 0; e < t.length; e++) Bt.add(t[e]);
	}
	var Wt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gt = {}, Kt = {};
	function qt(e) {
		return Le.call(Kt, e) ? !0 : Le.call(Gt, e) ? !1 : Wt.test(e) ? Kt[e] = !0 : (Gt[e] = !0, !1);
	}
	var F = !1;
	function Jt() {
		var e = F;
		return F = !1, e;
	}
	function Yt(e, t, n) {
		if (qt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Xt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Zt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Qt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function $t(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function en(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function tn(e) {
		if (!e._valueTracker) {
			var t = $t(e) ? "checked" : "value";
			e._valueTracker = en(e, t, "" + e[t]);
		}
	}
	function nn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = $t(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var rn = /[\n"\\]/g;
	function an(e) {
		return e.replace(rn, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function on(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : cn(e, Qt(n)) : o === "number" && e.value == t ? cn(e, Qt(e.value)) : cn(e, Qt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Qt(s) : e.removeAttribute("name");
	}
	function sn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				tn(e);
				return;
			}
			n = n == null ? "" : "" + Qt(n), t = t == null ? n : "" + Qt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), tn(e);
	}
	function cn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function ln(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Qt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function un(e, t, n) {
		if (t != null && (t = "" + Qt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Qt(n);
	}
	function dn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (he(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Qt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), tn(e);
	}
	function fn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var pn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function mn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || pn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function hn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", F = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (mn(e, a, r), F = !0);
		} else for (var o in t) t.hasOwnProperty(o) && mn(e, o, t[o]);
	}
	function gn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var _n = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), vn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function yn(e) {
		return vn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function bn() {}
	var xn = null;
	function Sn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Cn = null, wn = null;
	function Tn(e) {
		var t = Ft(e);
		if (t && (e = t.stateNode)) {
			var n = e[Tt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (on(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + an("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Tt] || null;
								if (!a) throw Error(i(90));
								on(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && nn(r);
					}
					break a;
				case "textarea":
					un(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && ln(e, !!n.multiple, t, !1);
			}
		}
	}
	var En = !1;
	function Dn(e, t, n) {
		if (En) return e(t, n);
		En = !0;
		try {
			return e(t);
		} finally {
			if (En = !1, (Cn !== null || wn !== null) && (zd(), Cn && (t = Cn, e = wn, wn = Cn = null, Tn(t), e))) for (t = 0; t < e.length; t++) Tn(e[t]);
		}
	}
	function On(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Tt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var kn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, An = !1;
	if (kn) try {
		var jn = {};
		Object.defineProperty(jn, "passive", { get: function() {
			An = !0;
		} }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
	} catch {
		An = !1;
	}
	var Mn = null, Nn = null, Pn = null;
	function Fn() {
		if (Pn) return Pn;
		var e, t = Nn, n = t.length, r, i = "value" in Mn ? Mn.value : Mn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Pn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function In(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Ln() {
		return !0;
	}
	function Rn() {
		return !1;
	}
	function zn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Ln : Rn, this.isPropagationStopped = Rn, this;
		}
		return T(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ln);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ln);
			},
			persist: function() {},
			isPersistent: Ln
		}), t;
	}
	var Bn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Vn = zn(Bn), Hn = T({}, Bn, {
		view: 0,
		detail: 0
	}), Un = zn(Hn), Wn, Gn, Kn, qn = T({}, Hn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ir,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Wn = e.screenX - Kn.screenX, Gn = e.screenY - Kn.screenY) : Gn = Wn = 0, Kn = e), Wn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Gn;
		}
	}), Jn = zn(qn), Yn = zn(T({}, qn, { dataTransfer: 0 })), Xn = zn(T({}, Hn, { relatedTarget: 0 })), Zn = zn(T({}, Bn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = zn(T({}, Bn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), $n = zn(T({}, Bn, { data: 0 })), er = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, tr = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, nr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function rr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = nr[e]) ? !!t[e] : !1;
	}
	function ir() {
		return rr;
	}
	var ar = zn(T({}, Hn, {
		key: function(e) {
			if (e.key) {
				var t = er[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ir,
		charCode: function(e) {
			return e.type === "keypress" ? In(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), or = zn(T({}, qn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), sr = zn(T({}, Bn, { submitter: 0 })), cr = zn(T({}, Hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ir
	})), lr = zn(T({}, Bn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ur = zn(T({}, qn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), dr = zn(T({}, Bn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), fr = [
		9,
		13,
		27,
		32
	], I = kn && "CompositionEvent" in window, pr = null;
	kn && "documentMode" in document && (pr = document.documentMode);
	var mr = kn && "TextEvent" in window && !pr, hr = kn && (!I || pr && 8 < pr && 11 >= pr), gr = " ", _r = !1;
	function vr(e, t) {
		switch (e) {
			case "keyup": return fr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function yr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var br = !1;
	function xr(e, t) {
		switch (e) {
			case "compositionend": return yr(t);
			case "keypress": return t.which === 32 ? (_r = !0, gr) : null;
			case "textInput": return e = t.data, e === gr && _r ? null : e;
			default: return null;
		}
	}
	function Sr(e, t) {
		if (br) return e === "compositionend" || !I && vr(e, t) ? (e = Fn(), Pn = Nn = Mn = null, br = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return hr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Cr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Cr[e.type] : t === "textarea";
	}
	function Tr(e, t, n, r) {
		Cn ? wn ? wn.push(r) : wn = [r] : Cn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new Vn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Er = null, Dr = null;
	function Or(e) {
		Vf(e, 0);
	}
	function kr(e) {
		if (nn(It(e))) return e;
	}
	function Ar(e, t) {
		if (e === "change") return t;
	}
	var jr = !1;
	if (kn) {
		var Mr;
		if (kn) {
			var Nr = "oninput" in document;
			if (!Nr) {
				var Pr = document.createElement("div");
				Pr.setAttribute("oninput", "return;"), Nr = typeof Pr.oninput == "function";
			}
			Mr = Nr;
		} else Mr = !1;
		jr = Mr && (!document.documentMode || 9 < document.documentMode);
	}
	function Fr() {
		Er && (Er.detachEvent("onpropertychange", Ir), Dr = Er = null);
	}
	function Ir(e) {
		if (e.propertyName === "value" && kr(Dr)) {
			var t = [];
			Tr(t, Dr, e, Sn(e)), Dn(Or, t);
		}
	}
	function Lr(e, t, n) {
		e === "focusin" ? (Fr(), Er = t, Dr = n, Er.attachEvent("onpropertychange", Ir)) : e === "focusout" && Fr();
	}
	function Rr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return kr(Dr);
	}
	function zr(e, t) {
		if (e === "click") return kr(t);
	}
	function Br(e, t) {
		if (e === "input" || e === "change") return kr(t);
	}
	function Vr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Hr = typeof Object.is == "function" ? Object.is : Vr;
	function Ur(e, t) {
		if (Hr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Le.call(t, i) || !Hr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Wr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Gr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Kr(e, t) {
		var n = Gr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Gr(n);
		}
	}
	function qr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Jr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Wr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Wr(e.document);
		}
		return t;
	}
	function Yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Xr = kn && "documentMode" in document && 11 >= document.documentMode, Zr = null, Qr = null, $r = null, ei = !1;
	function ti(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ei || Zr == null || Zr !== Wr(r) || (r = Zr, "selectionStart" in r && Yr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), $r && Ur($r, r) || ($r = r, r = Jf(Qr, "onSelect"), 0 < r.length && (t = new Vn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Zr)));
	}
	function ni(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ri = {
		animationend: ni("Animation", "AnimationEnd"),
		animationiteration: ni("Animation", "AnimationIteration"),
		animationstart: ni("Animation", "AnimationStart"),
		transitionrun: ni("Transition", "TransitionRun"),
		transitionstart: ni("Transition", "TransitionStart"),
		transitioncancel: ni("Transition", "TransitionCancel"),
		transitionend: ni("Transition", "TransitionEnd")
	}, ii = {}, ai = {};
	kn && (ai = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
	function oi(e) {
		if (ii[e]) return ii[e];
		if (!ri[e]) return e;
		var t = ri[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ai) return ii[e] = t[n];
		return e;
	}
	var si = oi("animationend"), ci = oi("animationiteration"), li = oi("animationstart"), ui = oi("transitionrun"), di = oi("transitionstart"), fi = oi("transitioncancel"), pi = oi("transitionend"), mi = /* @__PURE__ */ new Map(), hi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	hi.push("scrollEnd");
	function gi(e, t) {
		mi.set(e, t), Ht(t, [e]);
	}
	var _i = 0;
	function vi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = _i++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function yi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function bi(e, t) {
		return e = yi(e), t = yi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var xi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Si = [], Ci = 0, wi = 0;
	function Ti() {
		for (var e = Ci, t = wi = Ci = 0; t < e;) {
			var n = Si[t];
			Si[t++] = null;
			var r = Si[t];
			Si[t++] = null;
			var i = Si[t];
			Si[t++] = null;
			var a = Si[t];
			if (Si[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && ki(n, i, a);
		}
	}
	function Ei(e, t, n, r) {
		Si[Ci++] = e, Si[Ci++] = t, Si[Ci++] = n, Si[Ci++] = r, wi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Di(e, t, n, r) {
		return Ei(e, t, n, r), Ai(e);
	}
	function Oi(e, t) {
		return Ei(e, null, null, t), Ai(e);
	}
	function ki(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - et(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ai(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var ji = {};
	function Mi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Ni(e, t, n, r) {
		return new Mi(e, t, n, r);
	}
	function Pi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Fi(e, t) {
		var n = e.alternate;
		return n === null ? (n = Ni(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ii(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Li(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Pi(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, Se.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case ce: return e = Ni(31, n, t, a), e.elementType = ce, e.lanes = o, e;
			case O: return Ri(n.children, a, o, t);
			case te:
				s = 8, a |= 24;
				break;
			case k: return e = Ni(12, n, t, a | 2), e.elementType = k, e.lanes = o, e;
			case ie: return e = Ni(13, n, t, a), e.elementType = ie, e.lanes = o, e;
			case ae: return e = Ni(19, n, t, a), e.elementType = ae, e.lanes = o, e;
			case le:
			case ue: return e = a | 32, e = Ni(30, n, t, e), e.elementType = ue, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case re:
						s = 10;
						break a;
					case ne:
						s = 9;
						break a;
					case A:
						s = 11;
						break a;
					case oe:
						s = 14;
						break a;
					case se:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Ni(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Ri(e, t, n, r) {
		return e = Ni(7, e, r, t), e.lanes = n, e;
	}
	function zi(e, t, n) {
		return e = Ni(6, e, null, t), e.lanes = n, e;
	}
	function Bi(e) {
		var t = Ni(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Vi(e, t, n) {
		return t = Ni(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Hi = /* @__PURE__ */ new WeakMap();
	function Ui(e, t) {
		if (typeof e == "object" && e) {
			var n = Hi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Ie(t)
			}, Hi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Ie(t)
		};
	}
	var Wi = [], Gi = 0, Ki = null, qi = 0, Ji = [], Yi = 0, Xi = null, Zi = 1, Qi = "";
	function $i(e, t) {
		Wi[Gi++] = qi, Wi[Gi++] = Ki, Ki = e, qi = t;
	}
	function ea(e, t, n) {
		Ji[Yi++] = Zi, Ji[Yi++] = Qi, Ji[Yi++] = Xi, Xi = e;
		var r = Zi;
		e = Qi;
		var i = 32 - et(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - et(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Zi = 1 << 32 - et(t) + i | n << i | r, Qi = a + e;
		} else Zi = 1 << a | n << i | r, Qi = e;
	}
	function ta(e) {
		e.return !== null && ($i(e, 1), ea(e, 1, 0));
	}
	function na(e) {
		for (; e === Ki;) Ki = Wi[--Gi], Wi[Gi] = null, qi = Wi[--Gi], Wi[Gi] = null;
		for (; e === Xi;) Xi = Ji[--Yi], Ji[Yi] = null, Qi = Ji[--Yi], Ji[Yi] = null, Zi = Ji[--Yi], Ji[Yi] = null;
	}
	function ra(e, t) {
		Ji[Yi++] = Zi, Ji[Yi++] = Qi, Ji[Yi++] = Xi, Zi = t.id, Qi = t.overflow, Xi = e;
	}
	var ia = null, L = null, R = !1, aa = null, oa = !1, sa = Error(i(519));
	function ca(e) {
		throw ma(Ui(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), sa;
	}
	function la(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[wt] = e, t[Tt] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), sn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), dn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = bn), t = !0) : t = !1, t || ca(e, !0);
	}
	function ua(e) {
		for (ia = e.return; ia;) switch (ia.tag) {
			case 5:
			case 31:
			case 13:
				oa = !1;
				return;
			case 27:
			case 3:
				oa = !0;
				return;
			default: ia = ia.return;
		}
	}
	function da(e) {
		if (e !== ia) return !1;
		if (!R) return ua(e), R = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && L && ca(e), ua(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			L = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			L = dm(e);
		} else t === 27 ? (t = L, Sp(e.type) ? (e = um, um = null, L = e) : L = t) : L = ia ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function fa() {
		L = ia = null, R = !1;
	}
	function pa() {
		var e = aa;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), aa = null), e;
	}
	function ma(e) {
		aa === null ? aa = [e] : aa.push(e);
	}
	var ha = ye(null), ga = null, _a = null;
	function va(e, t, n) {
		xe(ha, t._currentValue), t._currentValue = n;
	}
	function ba(e) {
		e._currentValue = ha.current, be(ha);
	}
	function xa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Sa(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), xa(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), xa(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), xa(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function Ca(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Hr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === Te.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && Sa(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function wa(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Hr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Ta(e) {
		ga = e, _a = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ea(e) {
		return Oa(ga, e);
	}
	function Da(e, t) {
		return ga === null && Ta(e), Oa(e, t);
	}
	function Oa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, _a === null) {
			if (e === null) throw Error(i(308));
			_a = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else _a = _a.next = t;
		return n;
	}
	var ka = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Aa = t.unstable_scheduleCallback, ja = t.unstable_NormalPriority, Ma = {
		$$typeof: re,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Na() {
		return {
			controller: new ka(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Pa(e) {
		e.refCount--, e.refCount === 0 && Aa(ja, function() {
			e.controller.abort();
		});
	}
	function Fa(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Ia = null;
	function La(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Ra = null, za = 0, Ba = 0, Va = null;
	function Ha(e, t) {
		if (Ra === null) {
			var n = Ra = [];
			za = 0, Ba = Pf(), Va = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return za++, t.then(Ua, Ua), t;
	}
	function Ua() {
		if (--za === 0 && (Ia = null, Ra !== null)) {
			Va !== null && (Va.status = "fulfilled");
			var e = Ra;
			Ra = null, Ba = 0, Va = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Wa(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ga = N.S;
	N.S = function(e, t) {
		if (hd = He(), typeof t == "object" && t && typeof t.then == "function" && Ha(e, t), Ia !== null) for (var n = bf; n !== null;) Fa(n, Ia), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) Fa(r, n), r = r.next;
			if (Ba !== 0) {
				r = Ia, r === null && (r = Ia = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ga !== null && Ga(e, t);
	};
	var Ka = ye(null);
	function qa() {
		var e = Ka.current;
		return e === null ? q.pooledCache : e;
	}
	function Ja(e, t) {
		t === null ? xe(Ka, Ka.current) : xe(Ka, t.pool);
	}
	function Ya() {
		var e = qa();
		return e === null ? null : {
			parent: Ma._currentValue,
			pool: e
		};
	}
	var Xa = Error(i(460)), Za = Error(i(474)), Qa = Error(i(542)), $a = { then: function() {} };
	function eo(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function to(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bn, bn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, ao(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(bn, bn);
				else {
					if (e = q, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, ao(e), e;
				}
				throw ro = t, Xa;
		}
	}
	function no(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (ro = e, Xa) : e;
		}
	}
	var ro = null;
	function io() {
		if (ro === null) throw Error(i(459));
		var e = ro;
		return ro = null, e;
	}
	function ao(e) {
		if (e === Xa || e === Qa) throw Error(i(483));
	}
	var oo = null, so = 0;
	function co(e) {
		var t = so;
		return so += 1, oo === null && (oo = []), to(oo, e, t);
	}
	function lo(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function uo(e, t) {
		throw t.$$typeof === ee ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function fo(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Fi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = zi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === O ? (e = d(e, t, n.props.children, r, n.key), lo(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === se && no(i) === t.type) ? (t = a(t, n.props), lo(t, n), t.return = e, t) : (t = Li(n.type, n.key, n.props, null, e.mode, r), lo(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Vi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ri(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = zi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case E: return n = Li(t.type, t.key, t.props, null, e.mode, n), lo(n, t), n.return = e, n;
					case D: return t = Vi(t, e.mode, n), t.return = e, t;
					case se: return t = no(t), f(e, t, n);
				}
				if (he(t) || fe(t)) return t = Ri(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, co(t), n);
				if (t.$$typeof === re) return f(e, Da(e, t), n);
				uo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case E: return n.key === i ? l(e, t, n, r) : null;
					case D: return n.key === i ? u(e, t, n, r) : null;
					case se: return n = no(n), p(e, t, n, r);
				}
				if (he(n) || fe(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, co(n), r);
				if (n.$$typeof === re) return p(e, t, Da(e, n), r);
				uo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case E: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case D: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case se: return r = no(r), m(e, t, n, r, i);
				}
				if (he(r) || fe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, co(r), i);
				if (r.$$typeof === re) return m(e, t, n, Da(t, r), i);
				uo(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), R && $i(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return R && $i(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), R && $i(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), R && $i(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return R && $i(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), R && $i(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === O && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case E:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === O) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), lo(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === se && no(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), lo(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === O ? (c = Ri(o.props.children, e.mode, c, o.key), lo(c, o), c.return = e, e = c) : (c = Li(o.type, o.key, o.props, null, e.mode, c), lo(c, o), c.return = e, e = c);
						}
						return s(e);
					case D:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Vi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case se: return o = no(o), _(e, r, o, c);
				}
				if (he(o)) return h(e, r, o, c);
				if (fe(o)) {
					if (l = fe(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, co(o), c);
				if (o.$$typeof === re) return _(e, r, Da(e, o), c);
				uo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = zi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				so = 0;
				var i = _(e, t, n, r);
				return oo = null, i;
			} catch (t) {
				if (t === Xa || t === Qa) throw t;
				var a = Ni(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var po = fo(!0), mo = fo(!1), ho = !1;
	function go(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function _o(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function vo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function yo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, K & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ai(e), ki(e, null, n), t;
		}
		return Ei(e, r, t, n), Ai(e);
	}
	function bo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, _t(e, n);
		}
	}
	function xo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var So = !1;
	function Co() {
		if (So) {
			var e = Va;
			if (e !== null) throw e;
		}
	}
	function wo(e, t, n, r) {
		So = !1;
		var i = e.updateQueue;
		ho = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Y & f) === f : (r & f) === f) {
					f !== 0 && f === Ba && (So = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = T({}, d, f);
								break a;
							case 2: ho = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), od |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function To(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function Eo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) To(n[e], t);
	}
	var Do = ye(null), Oo = ye(0);
	function ko(e, t) {
		e = id, xe(Oo, e), xe(Do, t), id = e | t.baseLanes;
	}
	function Ao() {
		xe(Oo, id), xe(Do, Do.current);
	}
	function jo() {
		id = Oo.current, be(Do), be(Oo);
	}
	var Mo = ye(null), No = null;
	function Po(e) {
		var t = e.alternate;
		xe(z, z.current & 1), xe(Mo, e), No === null && (t === null || Do.current !== null || t.memoizedState !== null) && (No = e);
	}
	function Fo(e) {
		xe(z, z.current), xe(Mo, e), No === null && (No = e);
	}
	function Io(e) {
		e.tag === 22 ? (xe(z, z.current), xe(Mo, e), No === null && (No = e)) : Lo();
	}
	function Lo() {
		xe(z, z.current), xe(Mo, Mo.current);
	}
	function Ro(e) {
		be(Mo), No === e && (No = null), be(z);
	}
	var z = ye(0);
	function zo(e, t) {
		xe(Mo, Mo.current), xe(z, t);
	}
	function Bo(e) {
		be(z), be(Mo), No === e && (No = null);
	}
	function Vo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Ho = 0, B = null, V = null, Uo = null, Wo = !1, Go = !1, Ko = !1, qo = 0, Jo = 0, Yo = null, Xo = 0;
	function Zo() {
		throw Error(i(321));
	}
	function Qo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Hr(e[n], t[n])) return !1;
		return !0;
	}
	function $o(e, t, n, r, i, a) {
		return Ho = a, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? gc : _c, Ko = !1, a = n(r, i), Ko = !1, Go && (a = ts(t, n, r, i)), es(e), a;
	}
	function es(e) {
		N.H = hc;
		var t = V !== null && V.next !== null;
		if (Ho = 0, Uo = V = B = null, Wo = !1, Jo = 0, Yo = null, t) throw Error(i(300));
		e === null || Pc || (e = e.dependencies, e !== null && wa(e) && (Pc = !0));
	}
	function ts(e, t, n, r) {
		B = e;
		var a = 0;
		do {
			if (Go && (Yo = null), Jo = 0, Go = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Uo = V = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			N.H = vc, o = t(n, r);
		} while (Go);
		return o;
	}
	function ns() {
		var e = N.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ls(t) : t, e = e.useState()[0], (V === null ? null : V.memoizedState) !== e && (B.flags |= 1024), t;
	}
	function rs() {
		var e = qo !== 0;
		return qo = 0, e;
	}
	function is(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function as(e) {
		if (Wo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Wo = !1;
		}
		Ho = 0, Uo = V = B = null, Go = !1, Jo = qo = 0, Yo = null;
	}
	function os() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Uo === null ? B.memoizedState = Uo = e : Uo = Uo.next = e, Uo;
	}
	function ss() {
		if (V === null) {
			var e = B.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = V.next;
		var t = Uo === null ? B.memoizedState : Uo.next;
		if (t !== null) Uo = t, V = e;
		else {
			if (e === null) throw B.alternate === null ? Error(i(467)) : Error(i(310));
			V = e, e = {
				memoizedState: V.memoizedState,
				baseState: V.baseState,
				baseQueue: V.baseQueue,
				queue: V.queue,
				next: null
			}, Uo === null ? B.memoizedState = Uo = e : Uo = Uo.next = e;
		}
		return Uo;
	}
	function cs() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ls(e) {
		var t = Jo;
		return Jo += 1, Yo === null && (Yo = []), e = to(Yo, e, t), t = B, (Uo === null ? t.memoizedState : Uo.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? gc : _c), e;
	}
	function us(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ls(e);
			if (e.$$typeof === de) return;
			if (e.$$typeof === re) return Ea(e);
		}
		throw Error(i(438, String(e)));
	}
	function ds(e) {
		var t = null, n = B.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = B.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = cs(), B.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = j;
		return t.index++, n;
	}
	function fs(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ps(e) {
		return ms(ss(), V, e);
	}
	function ms(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Ho & f) === f : (Y & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Ba && (d = !0);
					else if ((Ho & p) === p) {
						u = u.next, p === Ba && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, B.lanes |= p, od |= p;
					f = u.action, Ko && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, B.lanes |= f, od |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Hr(o, e.memoizedState) && (Pc = !0, d && (n = Va, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function hs(e) {
		var t = ss(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Hr(o, t.memoizedState) || (Pc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function gs(e, t, n) {
		var r = B, a = ss(), o = R;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Hr((V || a).memoizedState, n);
		if (s && (a.memoizedState = n, Pc = !0), a = a.queue, Vs(ys.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Uo !== null && !!(Uo.memoizedState.tag & 1), Is(e ? 9 : 8, { destroy: void 0 }, vs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, q === null) throw Error(i(349));
			o || Ho & 127 || _s(r, t, n);
		}
		return n;
	}
	function _s(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = B.updateQueue, t === null ? (t = cs(), B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function vs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, bs(t) && xs(e);
	}
	function ys(e, t, n) {
		return n(function() {
			bs(t) && xs(e);
		});
	}
	function bs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Hr(e, n);
		} catch {
			return !0;
		}
	}
	function xs(e) {
		var t = Oi(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function Ss(e) {
		var t = os();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Ko) {
				$e(!0);
				try {
					n();
				} finally {
					$e(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: fs,
			lastRenderedState: e
		}, t;
	}
	function Cs(e, t, n, r) {
		return e.baseState = n, ms(e, V, typeof r == "function" ? r : fs);
	}
	function ws(e, t, n, r, a) {
		if (fc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			N.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Ts(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Ts(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = N.T, o = {};
			o.types = a === null ? null : a.types, N.T = o;
			try {
				var s = n(i, r), c = N.S;
				c !== null && c(o, s), Es(e, t, s);
			} catch (n) {
				Os(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), N.T = a;
			}
		} else try {
			a = n(i, r), Es(e, t, a);
		} catch (n) {
			Os(e, t, n);
		}
	}
	function Es(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Ds(e, t, n);
		}, function(n) {
			return Os(e, t, n);
		}) : Ds(e, t, n);
	}
	function Ds(e, t, n) {
		t.status = "fulfilled", t.value = n, ks(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ts(e, n)));
	}
	function Os(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, ks(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function ks(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function As(e, t) {
		return t;
	}
	function js(e, t) {
		if (R) {
			var n = q.formState;
			if (n !== null) {
				a: {
					var r = B;
					if (R) {
						if (L) {
							b: {
								for (var i = L, a = oa; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								L = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ca(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = os(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: As,
			lastRenderedState: t
		}, n.queue = r, n = lc.bind(null, B, r), r.dispatch = n, r = Ss(!1), a = dc.bind(null, B, !1, r.queue), r = os(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = ws.bind(null, B, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Ms(e) {
		return Ns(ss(), V, e);
	}
	function Ns(e, t, n) {
		if (t = ms(e, t, As)[0], e = ps(fs)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ls(t);
		} catch (e) {
			throw e === Xa ? Qa : e;
		}
		else r = t;
		t = ss();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (B.flags |= 2048, Is(9, { destroy: void 0 }, Ps.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Ps(e, t) {
		e.action = t;
	}
	function Fs(e) {
		var t = ss(), n = V;
		if (n !== null) return Ns(t, n, e);
		ss(), t = t.memoizedState, n = ss();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Is(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = B.updateQueue, t === null && (t = cs(), B.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Ls() {
		return ss().memoizedState;
	}
	function Rs(e, t, n, r) {
		var i = os();
		B.flags |= e, i.memoizedState = Is(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function zs(e, t, n, r) {
		var i = ss();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		V !== null && r !== null && Qo(r, V.memoizedState.deps) ? i.memoizedState = Is(t, a, n, r) : (B.flags |= e, i.memoizedState = Is(1 | t, a, n, r));
	}
	function Bs(e, t) {
		Rs(8390656, 8, e, t);
	}
	function Vs(e, t) {
		zs(2048, 8, e, t);
	}
	function Hs(e) {
		B.flags |= 4;
		var t = B.updateQueue;
		if (t === null) t = cs(), B.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Us(e) {
		var t = ss().memoizedState;
		return Hs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Ws(e, t) {
		return zs(4, 2, e, t);
	}
	function Gs(e, t) {
		return zs(4, 4, e, t);
	}
	function Ks(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function qs(e, t, n) {
		n = n == null ? null : n.concat([e]), zs(4, 4, Ks.bind(null, t, e), n);
	}
	function Js() {}
	function Ys(e, t) {
		var n = ss();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Xs(e, t) {
		var n = ss();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Qo(t, r[1])) return r[0];
		if (r = e(), Ko) {
			$e(!0);
			try {
				e();
			} finally {
				$e(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Zs(e, t, n) {
		return n === void 0 || Ho & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), B.lanes |= e, od |= e, n);
	}
	function Qs(e, t, n, r) {
		return Hr(n, t) ? n : Do.current === null ? !(Ho & 106) || Ho & 1073741824 && !(Y & 261930) ? (Pc = !0, e.memoizedState = n) : (e = Md(), B.lanes |= e, od |= e, t) : (e = Zs(e, n, r), Hr(e, t) || (Pc = !0), e);
	}
	function $s(e, t, n, r, i) {
		var a = P.p;
		P.p = a !== 0 && 8 > a ? a : 8;
		var o = N.T, s = {};
		s.types = o === null ? null : o.types, N.T = s, dc(e, !1, t, n);
		try {
			var c = i(), l = N.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? uc(e, t, Wa(c, r), jd(e)) : uc(e, t, r, jd(e));
		} catch (n) {
			uc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			P.p = a, o !== null && s.types !== null && (o.types = s.types), N.T = o;
		}
	}
	function ec() {}
	function tc(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = nc(e).queue;
		$s(e, a, t, ge, n === null ? ec : function() {
			return rc(e), n(r);
		});
	}
	function nc(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ge,
			baseState: ge,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: fs,
				lastRenderedState: ge
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: fs,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function rc(e) {
		var t = nc(e);
		t.next === null && (t = e.alternate.memoizedState), uc(e, t.next.queue, {}, jd());
	}
	function ic() {
		return Ea(sh);
	}
	function ac() {
		return ss().memoizedState;
	}
	function oc() {
		return ss().memoizedState;
	}
	function sc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = vo(n);
					var r = yo(t, e, n);
					r !== null && (Pd(r, t, n), bo(r, t, n)), t = { cache: Na() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function cc(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, fc(e) ? pc(t, n) : (n = Di(e, t, n, r), n !== null && (Pd(n, e, r), mc(n, t, r)));
	}
	function lc(e, t, n) {
		uc(e, t, n, jd());
	}
	function uc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (fc(e)) pc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Hr(s, o)) return Ei(e, t, i, 0), q === null && Ti(), !1;
			} catch {}
			if (n = Di(e, t, i, r), n !== null) return Pd(n, e, r), mc(n, t, r), !0;
		}
		return !1;
	}
	function dc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, fc(e)) {
			if (t) throw Error(i(479));
		} else t = Di(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function fc(e) {
		var t = e.alternate;
		return e === B || t !== null && t === B;
	}
	function pc(e, t) {
		Go = Wo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function mc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, _t(e, n);
		}
	}
	var hc = {
		readContext: Ea,
		use: us,
		useCallback: Zo,
		useContext: Zo,
		useEffect: Zo,
		useImperativeHandle: Zo,
		useLayoutEffect: Zo,
		useInsertionEffect: Zo,
		useMemo: Zo,
		useReducer: Zo,
		useRef: Zo,
		useState: Zo,
		useDebugValue: Zo,
		useDeferredValue: Zo,
		useTransition: Zo,
		useSyncExternalStore: Zo,
		useId: Zo,
		useHostTransitionStatus: Zo,
		useFormState: Zo,
		useActionState: Zo,
		useOptimistic: Zo,
		useMemoCache: Zo,
		useCacheRefresh: Zo,
		useEffectEvent: Zo
	}, gc = {
		readContext: Ea,
		use: us,
		useCallback: function(e, t) {
			return os().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ea,
		useEffect: Bs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Rs(4194308, 4, Ks.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Rs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Rs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = os();
			t = t === void 0 ? null : t;
			var r = e();
			if (Ko) {
				$e(!0);
				try {
					e();
				} finally {
					$e(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = os();
			if (n !== void 0) {
				var i = n(t);
				if (Ko) {
					$e(!0);
					try {
						n(t);
					} finally {
						$e(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = cc.bind(null, B, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = os();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Ss(e);
			var t = e.queue, n = lc.bind(null, B, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Js,
		useDeferredValue: function(e, t) {
			return Zs(os(), e, t);
		},
		useTransition: function() {
			var e = Ss(!1);
			return e = $s.bind(null, B, e.queue, !0, !1), os().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = B, a = os();
			if (R) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), q === null) throw Error(i(349));
				Y & 127 || _s(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Bs(ys.bind(null, r, o, e), [e]), r.flags |= 2048, Is(9, { destroy: void 0 }, vs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = os(), t = q.identifierPrefix;
			if (R) {
				var n = Qi, r = Zi;
				n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = qo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Xo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: ic,
		useFormState: js,
		useActionState: js,
		useOptimistic: function(e) {
			var t = os();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = dc.bind(null, B, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: ds,
		useCacheRefresh: function() {
			return os().memoizedState = sc.bind(null, B);
		},
		useEffectEvent: function(e) {
			var t = os(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, _c = {
		readContext: Ea,
		use: us,
		useCallback: Ys,
		useContext: Ea,
		useEffect: Vs,
		useImperativeHandle: qs,
		useInsertionEffect: Ws,
		useLayoutEffect: Gs,
		useMemo: Xs,
		useReducer: ps,
		useRef: Ls,
		useState: function() {
			return ps(fs);
		},
		useDebugValue: Js,
		useDeferredValue: function(e, t) {
			return Qs(ss(), V.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ps(fs)[0], t = ss().memoizedState;
			return [typeof e == "boolean" ? e : ls(e), t];
		},
		useSyncExternalStore: gs,
		useId: ac,
		useHostTransitionStatus: ic,
		useFormState: Ms,
		useActionState: Ms,
		useOptimistic: function(e, t) {
			return Cs(ss(), V, e, t);
		},
		useMemoCache: ds,
		useCacheRefresh: oc,
		useEffectEvent: Us
	}, vc = {
		readContext: Ea,
		use: us,
		useCallback: Ys,
		useContext: Ea,
		useEffect: Vs,
		useImperativeHandle: qs,
		useInsertionEffect: Ws,
		useLayoutEffect: Gs,
		useMemo: Xs,
		useReducer: hs,
		useRef: Ls,
		useState: function() {
			return hs(fs);
		},
		useDebugValue: Js,
		useDeferredValue: function(e, t) {
			var n = ss();
			return V === null ? Zs(n, e, t) : Qs(n, V.memoizedState, e, t);
		},
		useTransition: function() {
			var e = hs(fs)[0], t = ss().memoizedState;
			return [typeof e == "boolean" ? e : ls(e), t];
		},
		useSyncExternalStore: gs,
		useId: ac,
		useHostTransitionStatus: ic,
		useFormState: Fs,
		useActionState: Fs,
		useOptimistic: function(e, t) {
			var n = ss();
			return V === null ? (n.baseState = e, [e, n.queue.dispatch]) : Cs(n, V, e, t);
		},
		useMemoCache: ds,
		useCacheRefresh: oc,
		useEffectEvent: Us
	};
	function yc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : T({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var bc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = vo(r);
			i.payload = t, n != null && (i.callback = n), t = yo(e, i, r), t !== null && (Pd(t, e, r), bo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = vo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yo(e, i, r), t !== null && (Pd(t, e, r), bo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = vo(n);
			r.tag = 2, t != null && (r.callback = t), t = yo(e, r, n), t !== null && (Pd(t, e, n), bo(t, e, n));
		}
	};
	function xc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(i, a) : !0;
	}
	function Sc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bc.enqueueReplaceState(t, t.state, null);
	}
	function Cc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = T({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function wc(e) {
		xi(e);
	}
	function Tc(e) {
		console.error(e);
	}
	function Ec(e) {
		xi(e);
	}
	function Dc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Oc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function kc(e, t, n) {
		return n = vo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Dc(e, t);
		}, n;
	}
	function Ac(e) {
		return e = vo(e), e.tag = 3, e;
	}
	function jc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Oc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Oc(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Mc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Ca(t, n, a, !0), n = Mo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return No === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === $a ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === $a ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return mf(e, r, a), Kd(), !1;
		}
		if (R) return t = Mo.current, t === null ? (r !== sa && (t = Error(i(423), { cause: r }), ma(Ui(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Ui(r, n), a = kc(e.stateNode, r, a), xo(e, a), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== sa && (e = Error(i(422), { cause: r }), ma(Ui(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Ui(o, n), dd === null ? dd = [o] : dd.push(o), ad !== 4 && (ad = 2), t === null) return !0;
		r = Ui(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = kc(n.stateNode, r, e), xo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Ac(a), jc(a, e, n, r), xo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Nc = Error(i(461)), Pc = !1;
	function Fc(e, t, n, r) {
		t.child = e === null ? mo(t, null, n, r) : po(t, e.child, n, r);
	}
	function Ic(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Ta(t), r = $o(e, t, n, o, a, i), s = rs(), e !== null && !Pc ? (is(e, t, i), ul(e, t, i)) : (R && s && ta(t), t.flags |= 1, Fc(e, t, r, i), t.child);
	}
	function Lc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Pi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Rc(e, t, a, r, i)) : (e = Li(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !dl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ur : n, n(o, r) && e.ref === t.ref) return ul(e, t, i);
		}
		return t.flags |= 1, e = Fi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Rc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ur(a, r) && e.ref === t.ref) {
				if (Pc = !1, t.pendingProps = r = a, dl(e, i)) e.flags & 131072 && (Pc = !0);
				else return t.lanes = e.lanes, ul(e, t, i);
			}
		}
		return Kc(e, t, n, r, i);
	}
	function zc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Vc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ja(t, a === null ? null : a.cachePool), a === null ? Ao() : ko(t, a), Io(t);
			else return r = t.lanes = 536870912, Vc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ja(t, null), Ao(), Lo()) : (Ja(t, a.cachePool), ko(t, a), Lo(), t.memoizedState = null);
		return Fc(e, t, i, n), t.child;
	}
	function Bc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Vc(e, t, n, r, i) {
		var a = qa();
		return a = a === null ? null : {
			parent: Ma._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ja(t, null), Ao(), Io(t), e !== null && Ca(e, t, r, !0), t.childLanes = i, null;
	}
	function Hc(e, t) {
		return t = tl({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Uc(e, t, n) {
		return po(t, e.child, null, n), e = Hc(t, t.pendingProps), e.flags |= 2, Ro(t), t.memoizedState = null, e;
	}
	function Wc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (R) {
				if (r.mode === "hidden") return e = Hc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Bc(null, e);
				if (Fo(t), (e = L) ? (e = am(e, oa), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Xi === null ? null : {
						id: Zi,
						overflow: Qi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Bi(e), n.return = t, t.child = n, ia = t, L = null)) : e = null, e === null) throw ca(t);
				return t.lanes = 536870912, null;
			}
			return Hc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Fo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Uc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Pc || Ca(e, t, n, !1), a = (n & e.childLanes) !== 0, Pc || a) {
				if (Do.current === null) {
					if (r = q, r !== null && (s = vt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Oi(e, s), Pd(r, e, s), Nc;
					Kd();
				}
				t = Uc(e, t, n);
			} else e = o.treeContext, L = lm(s.nextSibling), ia = t, R = !0, aa = null, oa = !1, e !== null && ra(t, e), t = Hc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Fi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Gc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Kc(e, t, n, r, i) {
		return Ta(t), n = $o(e, t, n, r, void 0, i), r = rs(), e !== null && !Pc ? (is(e, t, i), ul(e, t, i)) : (R && r && ta(t), t.flags |= 1, Fc(e, t, n, i), t.child);
	}
	function qc(e, t, n, r, i, a) {
		return Ta(t), t.updateQueue = null, n = ts(t, r, n, i), es(e), r = rs(), e !== null && !Pc ? (is(e, t, a), ul(e, t, a)) : (R && r && ta(t), t.flags |= 1, Fc(e, t, n, a), t.child);
	}
	function Jc(e, t, n, r, i) {
		if (Ta(t), t.stateNode === null) {
			var a = ji, o = n.contextType;
			typeof o == "object" && o && (a = Ea(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = bc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, go(t), o = n.contextType, a.context = typeof o == "object" && o ? Ea(o) : ji, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (yc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && bc.enqueueReplaceState(a, a.state, null), wo(t, r, a, i), Co(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Cc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = ji, typeof u == "object" && u && (o = Ea(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Sc(t, a, r, o), ho = !1;
			var f = t.memoizedState;
			a.state = f, wo(t, r, a, i), Co(), l = t.memoizedState, s || f !== l || ho ? (typeof d == "function" && (yc(t, n, d, r), l = t.memoizedState), (c = ho || xc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, _o(e, t), o = t.memoizedProps, u = Cc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = ji, typeof l == "object" && l && (c = Ea(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Sc(t, a, r, c), ho = !1, f = t.memoizedState, a.state = f, wo(t, r, a, i), Co();
			var p = t.memoizedState;
			o !== d || f !== p || ho || e !== null && e.dependencies !== null && wa(e.dependencies) ? (typeof s == "function" && (yc(t, n, s, r), p = t.memoizedState), (u = ho || xc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && wa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Gc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = po(t, e.child, null, i), t.child = po(t, null, n, i)) : Fc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ul(e, t, i), e;
	}
	function Yc(e, t, n, r) {
		return fa(), t.flags |= 256, Fc(e, t, n, r), t.child;
	}
	var Xc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Zc(e) {
		return {
			baseLanes: e,
			cachePool: Ya()
		};
	}
	function Qc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function $c(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(z.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (R) {
				if (i ? Po(t) : Lo(), (e = L) ? (e = am(e, oa), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Xi === null ? null : {
						id: Zi,
						overflow: Qi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Bi(e), n.return = t, t.child = n, ia = t, L = null)) : e = null, e === null) throw ca(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Lo(), i = t.mode, a = tl({
				mode: "hidden",
				children: a
			}, i), r = Ri(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Zc(n), r.childLanes = Qc(e, o, n), t.memoizedState = Xc, Bc(null, r)) : (Po(t), el(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return rl(e, t, a, o, r, c, s, n);
		}
		return i ? (Lo(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Fi(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ri(i, a, n, null), i.flags |= 2) : i = Fi(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Bc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Zc(n) : (a = i.cachePool, a === null ? a = Ya() : (s = Ma._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Qc(e, o, n), t.memoizedState = Xc, Bc(e.child, r)) : (Po(t), n = e.child, e = n.sibling, n = Fi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function el(e, t) {
		return t = tl({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function tl(e, t) {
		return e = Ni(22, e, null, t), e.lanes = 0, e;
	}
	function nl(e, t, n) {
		return po(t, e.child, null, n), e = el(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function rl(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Po(t), t.flags &= -257, nl(e, t, c)) : t.memoizedState === null ? (Lo(), o = a.fallback, s = t.mode, a = tl({
			mode: "visible",
			children: a.children
		}, s), o = Ri(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, po(t, e.child, null, c), a = t.child, a.memoizedState = Zc(c), a.childLanes = Qc(e, r, c), t.memoizedState = Xc, Bc(null, a)) : (Lo(), t.child = e.child, t.flags |= 128, null);
		if (Po(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, ma({
				value: a,
				source: null,
				stack: null
			})), nl(e, t, c);
		}
		if (Pc || Ca(e, t, c, !1), r = (c & e.childLanes) !== 0, Pc || r) {
			if (Do.current !== null) return nl(e, t, c);
			if (r = q, r !== null && (a = vt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Oi(e, a), Pd(r, e, a), Nc;
			return om(o) || Kd(), nl(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, L = lm(o.nextSibling), ia = t, R = !0, aa = null, oa = !1, e !== null && ra(t, e), t = el(t, a.children), t.flags |= 134221824, t);
	}
	function il(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), xa(e.return, t, n);
	}
	function al(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Vo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function ol(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function sl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function cl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = z.current;
		if (t.flags & 128) return zo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, zo(t, o), i === "backwards" && e !== null ? (sl(e), Fc(e, t, r, n), sl(e)) : Fc(e, t, r, n), r = R ? qi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && il(e, n, t);
			else if (e.tag === 19) il(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = al(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, sl(t)), ol(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Vo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				ol(t, !0, n, null, a, r);
				break;
			case "together":
				ol(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = al(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ol(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function ll(e, t, n) {
		var r = t.pendingProps;
		return va(t, t.type, r.value), Fc(e, t, r.children, n), t.child;
	}
	function ul(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (Ca(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Fi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Fi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function dl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && wa(e)));
	}
	function fl(e, t, n) {
		switch (t.tag) {
			case 3:
				Ee(t, t.stateNode.containerInfo), va(t, Ma, e.memoizedState.cache), fa();
				break;
			case 27:
			case 5:
				Oe(t);
				break;
			case 4:
				Ee(t, t.stateNode.containerInfo);
				break;
			case 10:
				va(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Fo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Po(t), t.flags |= 128, null;
					r = Ca(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? $c(e, t, n) : (Po(t), e = ul(e, t, n), e === null ? null : e.sibling);
				}
				Po(t);
				break;
			case 19:
				if (t.flags & 128) return cl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (Ca(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return cl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), zo(t, z.current), r) break;
				return null;
			case 22: return t.lanes = 0, zc(e, t, n, t.pendingProps);
			case 24: va(t, Ma, e.memoizedState.cache);
		}
		return ul(e, t, n);
	}
	function pl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Pc = !0;
			else {
				if (!dl(e, n) && !(t.flags & 128)) return Pc = !1, fl(e, t, n);
				Pc = !!(e.flags & 131072);
			}
		} else Pc = !1, R && t.flags & 1048576 && ea(t, qi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = no(t.elementType), t.type = e, typeof e == "function") Pi(e) ? (r = Cc(e, r), t.tag = 1, t = Jc(null, t, e, r, n)) : (t.tag = 0, t = Kc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === A) {
								t.tag = 11, t = Ic(null, t, e, r, n);
								break a;
							}
							if (a === oe) {
								t.tag = 14, t = Lc(null, t, e, r, n);
								break a;
							}
							if (a === re) {
								t.tag = 10, t.type = e, t = ll(null, t, n);
								break a;
							}
						}
						throw t = me(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Kc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = Cc(r, t.pendingProps), Jc(e, t, r, a, n);
			case 3:
				a: {
					if (Ee(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, _o(e, t), wo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, va(t, Ma, r), r !== o.cache && Sa(t, [Ma], n, !0), Co(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Yc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Ui(Error(i(424)), t), ma(a), t = Yc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (L = lm(e.firstChild), ia = t, R = !0, aa = null, oa = !0, n = mo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (fa(), r === a) {
							t = ul(e, t, n);
							break a;
						}
						Fc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Gc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : R || (t.stateNode = fp(t.type, t.pendingProps, we.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Oe(t), e === null && R && (r = t.stateNode = hm(t.type, t.pendingProps, we.current), ia = t, oa = !0, a = L, Sp(t.type) ? (um = a, L = lm(r.firstChild)) : L = a), Fc(e, t, t.pendingProps.children, n), Gc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && R && ((a = r = L) && (r = rm(r, t.type, t.pendingProps, oa), r === null ? a = !1 : (t.stateNode = r, ia = t, L = lm(r.firstChild), oa = !1, a = !0)), a || ca(t)), Oe(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = $o(e, t, ns, null, null, n), sh._currentValue = a), Gc(e, t), Fc(e, t, r, n), t.child;
			case 6: return e === null && R && ((e = n = L) && (n = im(n, t.pendingProps, oa), n === null ? e = !1 : (t.stateNode = n, ia = t, L = null, e = !0)), e || ca(t)), null;
			case 13: return $c(e, t, n);
			case 4: return Ee(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = po(t, null, r, n) : Fc(e, t, r, n), t.child;
			case 11: return Ic(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Gc(e, t), Fc(e, t, r, n), t.child;
			case 8: return Fc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Fc(e, t, t.pendingProps.children, n), t.child;
			case 10: return ll(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, Ta(t), a = Ea(a), r = r(a), t.flags |= 1, Fc(e, t, r, n), t.child;
			case 14: return Lc(e, t, t.type, t.pendingProps, n);
			case 15: return Rc(e, t, t.type, t.pendingProps, n);
			case 19: return cl(e, t, n);
			case 31: return Wc(e, t, n);
			case 22: return zc(e, t, n, t.pendingProps);
			case 24: return Ta(t), r = Ea(Ma), e === null ? (a = qa(), a === null && (a = q, o = Na(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, go(t), va(t, Ma, a)) : ((e.lanes & n) !== 0 && (_o(e, t), wo(t, null, null, n), Co()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, va(t, Ma, r), r !== a.cache && Sa(t, [Ma], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), va(t, Ma, r))), Fc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : R && ta(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Gc(e, t), Fc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function ml(e) {
		e.flags |= 4;
	}
	function hl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw ro = $a, Za;
			}
		} else e.flags &= -16777217;
	}
	function gl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Ud()) e.flags |= 8192;
			else throw ro = $a, Za;
		}
	}
	function _l(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ft(), e.lanes |= t, ud |= t);
	}
	function vl(e, t) {
		if (!R) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function H(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function yl(e, t, n) {
		var r = t.pendingProps;
		switch (na(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return H(t), null;
			case 1: return H(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ba(Ma), De(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (da(t) ? ml(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pa())), H(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (ml(t), o === null ? (H(t), hl(t, a, null, r, n)) : (H(t), gl(t, o))) : o ? o === e.memoizedState ? (H(t), t.flags &= -16777217) : (ml(t), H(t), gl(t, o)) : (e = e.memoizedProps, e !== r && ml(t), H(t), hl(t, a, e, r, n)), null;
			case 27:
				if (ke(t), n = we.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ml(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return H(t), t.subtreeFlags &= -33554433, null;
					}
					e = Se.current, da(t) ? la(t, e) : (e = hm(a, r, n), t.stateNode = e, ml(t));
				}
				return H(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (ke(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ml(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return H(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = Se.current, da(t)) la(t, o);
					else {
						var s = lp(we.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[wt] = t, o[Tt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && ml(t);
					}
				}
				return H(t), t.subtreeFlags &= -33554433, hl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && ml(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = we.current, da(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = ia, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[wt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || ca(t, !0);
					} else e = lp(e).createTextNode(r), e[wt] = t, t.stateNode = e;
				}
				return H(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = da(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[wt] = t;
						} else fa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						H(t), e = !1;
					} else n = pa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Ro(t), t) : (Ro(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return H(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = da(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[wt] = t;
						} else fa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						H(t), a = !1;
					} else a = pa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Ro(t), t) : (Ro(t), null);
				}
				return Ro(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), _l(t, t.updateQueue), H(t), null);
			case 4: return De(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, H(t), null;
			case 10: return ba(t.type), H(t), null;
			case 19:
				if (Bo(t), r = t.memoizedState, r === null) return H(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) vl(r, !1);
					else {
						if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Vo(e), o !== null) {
								for (t.flags |= 128, vl(r, !1), e = o.updateQueue, t.updateQueue = e, _l(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ii(n, e), n = n.sibling;
								return zo(t, z.current & 1 | 2), R && $i(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && He() > gd && (t.flags |= 128, a = !0, vl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Vo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, _l(t, e), vl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !R) return H(t), null;
						} else 2 * He() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = !0, vl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = He(), e.sibling = null, o = z.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || R ? zo(t, o) : (n = o, xe(Mo, t), xe(z, n), No === null && (No = t)), R && $i(t, r.treeForkCount), e;
				}
				return H(t), null;
			case 22:
			case 23: return Ro(t), jo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (H(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : H(t), n = t.updateQueue, n !== null && _l(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && be(Ka), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ba(Ma), H(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, H(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function bl(e, t) {
		switch (na(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ba(Ma), De(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return ke(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Ro(t), t.alternate === null) throw Error(i(340));
					fa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Ro(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					fa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Bo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return De(), null;
			case 10: return ba(t.type), null;
			case 22:
			case 23: return Ro(t), jo(), e !== null && be(Ka), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ba(Ma), null;
			case 25: return null;
			default: return null;
		}
	}
	function xl(e, t) {
		switch (na(t), t.tag) {
			case 3:
				ba(Ma), De();
				break;
			case 26:
			case 27:
			case 5:
				ke(t);
				break;
			case 4:
				De();
				break;
			case 31:
				t.memoizedState !== null && Ro(t);
				break;
			case 13:
				Ro(t);
				break;
			case 19:
				Bo(t);
				break;
			case 10:
				ba(t.type);
				break;
			case 22:
			case 23:
				Ro(t), jo(), e !== null && be(Ka);
				break;
			case 24: ba(Ma);
		}
	}
	function Sl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Cl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function wl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Eo(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Tl(e, t, n) {
		n.props = Cc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function El(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = vi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							p(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Dl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function Ol(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function kl(e) {
		for (var t = e.return; t !== null && (Ml(t) && em(e.stateNode, t.stateNode), !jl(t));) t = t.return;
	}
	function Al(e) {
		for (var t = e.return; t !== null && (Ml(t) && tm(e.stateNode, t.stateNode), !jl(t));) t = t.return;
	}
	function jl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Ml(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Nl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Pl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[Tt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Fl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Il(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Fl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ll(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bn)), Ol(e, r), F = !0;
		else if (i !== 4 && (i === 27 && (Ol(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ll(e, t, n, r), e = e.sibling; e !== null;) Ll(e, t, n, r), e = e.sibling;
	}
	function Rl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Ol(e, r), F = !0;
		else if (i !== 4 && (i === 27 && (Ol(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Rl(e, t, n, r), e = e.sibling; e !== null;) Rl(e, t, n, r), e = e.sibling;
	}
	function zl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[wt] = e, t[Tt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var Bl = !1, Vl = null;
	function Hl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Bl = !0);
	}
	var Ul = null;
	function Wl() {
		var e = Ul;
		return Ul = null, e;
	}
	var Gl = 0;
	function Kl(e, t, n, r, i) {
		return Gl = 0, Jl(e.child, t, n, r, i);
	}
	function Jl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				Bl = !0, Tp(o, Gl === 0 ? t : t + "_" + Gl, n), Gl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Jl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function Yl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Yl(e.child, t)), e = e.sibling;
	}
	function Xl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Xl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = bi(t.default, t.share), t !== "none" && (Kl(e, n, t, null, !1) || Yl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Zl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = vi(r, n), a = bi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Xl(e) : Kl(e, i, a, null, !1) ? (Xl(e), n.paired || t || Nd(e, r.onEnter)) : Yl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Zl(e, t), e = e.sibling;
		else Xl(e);
	}
	function Ql(e) {
		if (Vl !== null && Vl.size !== 0) {
			var t = Vl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = bi(n.default, n.share);
								if (a !== "none" && (Kl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : Yl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Ql(e);
				}
				e = e.sibling;
			}
		}
	}
	function $l(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = vi(t, e.stateNode), r = Vl === null ? void 0 : Vl.get(n), i = bi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Kl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Vl.delete(n), Nd(e, t.onShare)) : Yl(e.child, !1)), Vl !== null && Ql(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) $l(e), e = e.sibling;
		else Vl !== null && Ql(e);
	}
	function eu(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = vi(t, e.stateNode);
				t = bi(t.default, t.update), e.flags &= -5, t !== "none" && Kl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && eu(e);
			e = e.sibling;
		}
	}
	function tu(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Yl(e.child, !1));
				}
				tu(e);
			}
			e = e.sibling;
		}
	}
	function nu(e) {
		if (e.tag === 30) e.stateNode.paired = null, Yl(e.child, !1), tu(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) nu(e), e = e.sibling;
		else tu(e);
	}
	function ru(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Yl(e.child, !1) : e.subtreeFlags & 33554432 && ru(e), e = e.sibling;
	}
	function iu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Gl < a.length) {
					var l = a[Gl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Gl === 0 ? n : n + "_" + Gl, i), s && e.flags & 4 || (Ul === null && (Ul = []), Ul.push(c, Gl === 0 ? r : r + "_" + Gl, t.memoizedProps)), Gl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : iu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function au(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = vi(n, r), a = bi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Gl = 0, i = iu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && au(e, t);
			e = e.sibling;
		}
	}
	var U = !1, W = !1, ou = !1, su = !1, cu = typeof WeakSet == "function" ? WeakSet : Set, lu = null, uu = !1, du = !1, fu = !1, pu = !1;
	function mu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Jr(e), Yr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, lu = t, t = n ? 9270 : 1024; lu !== null;) {
			if (e = lu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && $l(r[a]);
			if (e.alternate === null && e.flags & 2) n && Hl(e), G(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && $l(r), G(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Hl(e), G(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, lu = r) : (n && eu(e), G(n));
			}
		}
		Vl = null;
	}
	function G(e) {
		for (; lu !== null;) {
			var t = lu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = Cc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							Z(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = vi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = bi(a.default, a.update), a !== "none" && Kl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, lu = r;
				break;
			}
			lu = t.return;
		}
	}
	function hu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Fu(e, n), r & 4 && Sl(5, n);
				break;
			case 1:
				if (Fu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = Cc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && wl(n), r & 512 && El(n, n.return);
				break;
			case 3:
				if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Eo(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && zl(n);
			case 26:
			case 5:
				Fu(e, n), t === null && r & 4 && Nl(n), r & 512 && El(n, n.return);
				break;
			case 12:
				Fu(e, n);
				break;
			case 31:
				Fu(e, n), r & 4 && wu(e, n);
				break;
			case 13:
				Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || U, !r) {
					var a = t !== null && t.memoizedState !== null || W;
					t = U, i = W, U = r, (W = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), U = t, W = i;
				}
				break;
			case 30:
				Fu(e, n), r & 512 && El(n, n.return);
				break;
			case 7: r & 512 && El(n, n.return);
			default: Fu(e, n);
		}
	}
	function gu(e, t) {
		for (e = e.child; e !== null;) _u(e, t), e = e.sibling;
	}
	function _u(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					Z(e, e.return, t);
				}
				vu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, F = !0;
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && gu(e, t);
				break;
			default: gu(e, t);
		}
	}
	function vu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						_u(n, r);
						break a;
					case 22:
						n.memoizedState === null && vu(n, r);
						break a;
					default: vu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function yu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Nt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var bu = null, xu = !1;
	function Su(e, t, n) {
		for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling;
	}
	function Cu(e, t, n) {
		if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
			Qe.onCommitFiberUnmount(Ze, n);
		} catch {}
		switch (n.tag) {
			case 26:
				W || Dl(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !W && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				W || Dl(n, t), Al(n);
				var r = bu, i = xu;
				Sp(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
				break;
			case 5: W || Dl(n, t), Al(n);
			case 6:
				if (n.tag === 6 && Al(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
					if (xu) try {
						(bu.nodeType === 9 ? bu.body : bu.nodeName === "HTML" ? bu.ownerDocument.body : bu).removeChild(n.stateNode), F = !0;
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						bu.removeChild(n.stateNode), F = !0;
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				bu !== null && (xu ? (e = bu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(bu, n.stateNode));
				break;
			case 4:
				r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Cl(2, n, t), W || Cl(4, n, t), Su(e, t, n);
				break;
			case 1:
				W || (Dl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Tl(n, t, r)), Su(e, t, n);
				break;
			case 21:
				Su(e, t, n);
				break;
			case 22:
				W = (r = W) || n.memoizedState !== null, Su(e, t, n), W = r;
				break;
			case 30:
				Dl(n, t), Su(e, t, n);
				break;
			case 7:
				W || Dl(n, t), Su(e, t, n);
				break;
			default: Su(e, t, n);
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function Tu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Eu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new cu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new cu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = Eu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Ou(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							bu = l.stateNode, xu = !1;
							break a;
						}
						break;
					case 5:
						bu = l.stateNode, xu = !1;
						break a;
					case 3:
					case 4:
						bu = l.stateNode.containerInfo, xu = !0;
						break a;
				}
				l = l.return;
			}
			if (bu === null) throw Error(i(160));
			Cu(s, c, o), bu = null, xu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling;
	}
	var ku = null;
	function Au(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Ou(t, e, n), ju(e), a & 4 && (Cl(3, e, e.return), Sl(3, e), Cl(5, e, e.return));
				break;
			case 1:
				Ou(t, e, n), ju(e), a & 512 && (W || r === null || Dl(r, r.return)), a & 64 && U && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = ku, Ou(t, e, n), ju(e), a & 512 && (W || r === null || Dl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (U) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[jt] || r[wt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[wt] = e, Rt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[wt] = e, Rt(r), t = r;
									}
									e.stateNode = t;
								}
							} else U || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Pl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || W || t.parentNode.removeChild(t)) : a.count--, n === null ? U || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Ou(t, e, n), ju(e), a & 512 && (W || r === null || Dl(r, r.return)), r !== null && a & 4 && Pl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = ou, ou = !1, Ou(t, e, n), ou = o, ju(e), a & 512 && (W || r === null || Dl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						fn(t, ""), F = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Pl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (su = !0);
				break;
			case 6:
				if (Ou(t, e, n), ju(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, F = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (F = !1, Wm = null, o = ku, ku = bm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				su && (su = !1, Mu(e)), F = !1;
				break;
			case 4:
				a = ou, ou = U, r = Jt(), o = ku, ku = bm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = o, F && du && (fu = !0), F = r, ou = a;
				break;
			case 12:
				Ou(t, e, n), ju(e);
				break;
			case 31:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 13:
				Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = He()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = U, l = W, u = ou;
				U = c || o, ou = u || o, W = l || s, Ou(t, e, n), W = l, ou = u, U = c, ju(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || U || W || (t = s || W, n = U, r = W, U = o || U, W = t, Iu(e, 2), U = n, W = r), !o && ou || gu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
				break;
			case 19:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 30:
				a & 512 && (W || r === null || Dl(r, r.return)), a = Jt(), o = du, s = (n & 335544064) === n, c = e.memoizedProps, du = s && bi(c.default, c.update) !== "none", Ou(t, e, n), ju(e), s && r !== null && F && (e.flags |= 4), du = o, F = a;
				break;
			case 21: break;
			case 7: a & 512 && (W || r === null || Dl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Ou(t, e, n), ju(e);
		}
	}
	function ju(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Fl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Ml(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (jl(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Rl(e, Il(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (fn(l, ""), n.flags &= -33), Rl(e, Il(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ll(e, Il(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
		else au(t, !1);
	}
	function Pu(e, t) {
		var n = e.alternate;
		if (n === null) Zl(e, !1);
		else switch (e.tag) {
			case 3:
				if (pu = uu = !1, Wl(), Nu(t, e), !uu && !fu) {
					if (e = Ul, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), pu = !0;
				}
				Ul = null;
				break;
			case 5:
				Nu(t, e);
				break;
			case 4:
				r = uu, uu = !1, Nu(t, e), uu && (fu = !0), uu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Zl(e, !1));
				break;
			case 30:
				r = uu, i = Wl(), uu = !1, Nu(t, e), uu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = vi(a, o), o = vi(n.memoizedProps, o);
				var s = bi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Gl = 0, t = iu(e, n, t, o, s, a, !0), Gl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Ul = i) : i !== null && (i.push.apply(i, Ul), Ul = i), uu = e.flags & 32 ? !0 : r;
				break;
			default: Nu(t, e);
		}
	}
	function Fu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling;
	}
	function Iu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Cl(4, n, n.return), Iu(n, r);
					break;
				case 1:
					Dl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Tl(n, n.return, i), Iu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Dl(n, n.return), n.tag !== 5 && n.tag !== 27 || Al(n), Iu(n, r);
					break;
				case 6:
					Al(n);
					break;
				case 26:
					Dl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || W || i.parentNode.removeChild(i), Iu(n, r);
					break;
				case 22:
					n.memoizedState === null && Iu(n, r);
					break;
				case 30:
					Dl(n, n.return), Iu(n, r);
					break;
				case 7: Dl(n, n.return);
				default: Iu(n, r);
			}
			e = e.sibling;
		}
	}
	function Lu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Lu(i, a, n), Sl(4, a);
					break;
				case 1:
					if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) To(l[i], c);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					s && o & 64 && wl(a), El(a, a.return);
					break;
				case 27: n & 2 && zl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || kl(a), Lu(i, a, n), s && r === null && o & 4 && Nl(a), El(a, a.return);
					break;
				case 6:
					kl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || U || Km(bm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && Nl(a), El(a, a.return);
					break;
				case 12:
					Lu(i, a, n);
					break;
				case 31:
					Lu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 13:
					Lu(i, a, n), s && o & 4 && Tu(i, a);
					break;
				case 22:
					a.memoizedState === null && Lu(i, a, n), El(a, a.return);
					break;
				case 30:
					Lu(i, a, n), El(a, a.return);
					break;
				case 7: El(a, a.return);
				default: Lu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Ru(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Pa(n));
	}
	function zu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pa(e));
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
		else i && ru(t);
	}
	function Vu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && nu(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Bu(e, t, n, r), a & 2048 && Sl(9, t);
				break;
			case 1:
				Bu(e, t, n, r);
				break;
			case 3:
				Bu(e, t, n, r), i && pu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Pa(a)));
				break;
			case 12:
				if (a & 2048) {
					Bu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else Bu(e, t, n, r);
				break;
			case 31:
				Bu(e, t, n, r);
				break;
			case 13:
				Bu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && nu(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && nu(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
				break;
			case 24:
				Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Yl(a.child, !0), Yl(t.child, !0))), Bu(e, t, n, r);
				break;
			default: Bu(e, t, n, r);
		}
	}
	function Hu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hu(a, o, s, c, i), Sl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
					break;
				case 24:
					Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
					break;
				default: Hu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Uu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Uu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				case 24:
					Uu(n, r), i & 2048 && zu(r.alternate, r);
					break;
				default: Uu(n, r);
			}
			t = t.sibling;
		}
	}
	var Wu = 8192;
	function Gu(e, t, n) {
		if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling;
	}
	function Ku(e, t, n) {
		switch (e.tag) {
			case 26:
				Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = ku;
				ku = bm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
				break;
			case 30:
				if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Vl === null && (Vl = /* @__PURE__ */ new Map()), Vl.set(r, i);
				}
				Gu(e, t, n);
				break;
			default: Gu(e, t, n);
		}
	}
	function qu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				lu = r, Zu(r, e);
			}
			qu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yu(e), e = e.sibling;
	}
	function Yu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ju(e), e.flags & 2048 && Cl(9, e, e.return);
				break;
			case 3:
				Ju(e);
				break;
			case 12:
				Ju(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
				break;
			default: Ju(e);
		}
	}
	function Xu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				lu = r, Zu(r, e);
			}
			qu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Cl(8, t, t.return), Xu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
					break;
				default: Xu(t);
			}
			e = e.sibling;
		}
	}
	function Zu(e, t) {
		for (; lu !== null;) {
			var n = lu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Cl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Pa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, lu = r;
			else a: for (n = e; lu !== null;) {
				r = lu;
				var i = r.sibling, a = r.return;
				if (yu(r), r === n) {
					lu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, lu = i;
					break a;
				}
				lu = a;
			}
		}
	}
	var Qu = {
		getCacheForType: function(e) {
			var t = Ea(Ma), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ea(Ma).controller.signal;
		}
	}, $u = typeof WeakMap == "function" ? WeakMap : Map, K = 0, q = null, J = null, Y = 0, X = 0, ed = null, td = !1, nd = !1, rd = !1, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return K & 2 && Y !== 0 ? Y & -Y : N.T === null ? xt() : Pf();
	}
	function Md() {
		if (ld === 0) {
			if (!(Y & 536870912) || R) {
				var e = at;
				at <<= 1, !(at & 3932160) && (at = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = Mo.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(vi(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === q && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, Y, ld, !1)), mt(e, n), (!(K & 2) || e !== q) && (e === q && (!(K & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, !1)), Ef(e));
	}
	function Fd(e, t, n) {
		if (K & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || lt(e, t), a = r ? Yd(e, t) : qd(e, t, !0), o = r;
		do {
			if (a === 0) {
				nd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Ld(n)) {
				a = qd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = dd;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
							if (rd && !l) {
								c.errorRecoveryDisabledLanes |= o, sd |= o, a = 4;
								break a;
							}
							o = fd, fd = a, o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Vd(e, 0), Rd(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Rd(r, t, ld, !td);
						break a;
					case 2:
						fd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = md + 300 - He(), 10 < a)) {
					if (Rd(r, t, ld, !td), ct(r, 0, !0) !== 0) break a;
					Sd = t, r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, "Throttled", -0, 0), a);
					break a;
				}
				Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
			}
			break;
		} while (1);
		Ef(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: bn
		}, Vl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - He() : (a & 4194048) === a ? hd - He() : 0, m = eh(d, m), m !== null)) {
			Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l);
			return;
		}
		nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Hr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = ut(e, t), t &= ~cd, t &= ~sd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - et(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && gt(e, n, t);
	}
	function zd() {
		return K & 6 ? !0 : (Df(0, !1), !1);
	}
	function Bd() {
		if (J !== null) {
			if (X === 0) var e = J.return;
			else e = J, _a = ga = null, as(e), oo = null, so = 0, e = J;
			for (; e !== null;) xl(e.alternate, e), e = e.return;
			J = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), q = e, J = n = Fi(e.current, null), Y = t, X = 0, ed = null, td = !1, nd = lt(e, t), rd = !1, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = !1, id = ut(e, t), Ti(), n;
	}
	function Hd(e, t) {
		B = null, N.H = hc, t === Xa || t === Qa ? (t = io(), X = 3) : t === Za ? (t = io(), X = 4) : X = t === Nc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, J === null && (ad = 1, Dc(e, Ui(t, e.current)));
	}
	function Ud() {
		var e = Mo.current;
		return e === null ? !0 : (Y & 4194048) === Y ? No === null : (Y & 62914560) === Y || Y & 536870912 ? e === No : !1;
	}
	function Wd() {
		var e = N.H;
		return N.H = hc, e === null ? hc : e;
	}
	function Gd() {
		var e = N.A;
		return N.A = Qu, e;
	}
	function Kd() {
		ad = 4, td || (Y & 4194048) !== Y && Mo.current !== null || (nd = !0), !(od & 134217727) && !(sd & 134217727) || q === null || Rd(q, Y, ld, !1);
	}
	function qd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Wd(), a = Gd();
		(q !== e || Y !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = ad;
		a: do
			try {
				if (X !== 0 && J !== null) {
					var s = J, c = ed;
					switch (X) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Mo.current === null && (t = !0);
							var l = X;
							if (X = 0, ed = null, $d(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = X, X = 0, ed = null, $d(e, s, c, l);
					}
				}
				Jd(), o = ad;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, _a = ga = null, K = r, N.H = i, N.A = a, J === null && (q = null, Y = 0, Ti()), o;
	}
	function Jd() {
		for (; J !== null;) Zd(J);
	}
	function Yd(e, t) {
		var n = K;
		K |= 2;
		var r = Wd(), a = Gd();
		q !== e || Y !== t ? (_d = null, gd = He() + 500, Vd(e, t)) : nd = lt(e, t);
		a: do
			try {
				if (X !== 0 && J !== null) {
					t = J;
					var o = ed;
					b: switch (X) {
						case 1:
							X = 0, ed = null, $d(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (eo(o)) {
								X = 0, ed = null, Qd(t);
								break;
							}
							t = function() {
								X !== 2 && X !== 9 || q !== e || (X = 7), Ef(e);
							}, o.then(t, t);
							break a;
						case 3:
							X = 7;
							break a;
						case 4:
							X = 5;
							break a;
						case 7:
							eo(o) ? (X = 0, ed = null, Qd(t)) : (X = 0, ed = null, $d(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (J.tag) {
								case 26: s = J.memoizedState;
								case 5:
								case 27:
									var c = J;
									if (s ? Ym(s) : c.stateNode.complete) {
										X = 0, ed = null;
										var l = c.sibling;
										if (l !== null) J = l;
										else {
											var u = c.return;
											u === null ? J = null : (J = u, ef(u));
										}
										break b;
									}
							}
							X = 0, ed = null, $d(e, t, o, 5);
							break;
						case 6:
							X = 0, ed = null, $d(e, t, o, 6);
							break;
						case 8:
							Bd(), ad = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return _a = ga = null, N.H = r, N.A = a, K = n, J === null ? (q = null, Y = 0, Ti(), ad) : 0;
	}
	function Xd() {
		for (; J !== null && !Be();) Zd(J);
	}
	function Zd(e) {
		var t = pl(e.alternate, e, id);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = qc(n, t, t.pendingProps, t.type, void 0, Y);
				break;
			case 11:
				t = qc(n, t, t.pendingProps, t.type.render, t.ref, Y);
				break;
			case 5:
				as(t);
				var r = t;
				r === ia && (R ? (ua(r), r.tag === 5 && r.stateNode != null && (L = r.stateNode)) : (ua(r), R = !0));
			default: xl(n, t), t = J = Ii(t, id), t = pl(n, t, id);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function $d(e, t, n, r) {
		_a = ga = null, as(t), oo = null, so = 0;
		var i = t.return;
		try {
			if (Mc(e, i, t, n, Y)) {
				ad = 1, Dc(e, Ui(n, e.current)), J = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw J = i, t;
			ad = 1, Dc(e, Ui(n, e.current)), J = null;
			return;
		}
		t.flags & 32768 ? (R || r === 1 ? e = !0 : nd || Y & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Mo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, td);
				return;
			}
			e = t.return;
			var n = yl(t.alternate, t, id);
			if (n !== null) {
				J = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				J = t;
				return;
			}
			J = t = e;
		} while (t !== null);
		ad === 0 && (ad = 5);
	}
	function tf(e, t) {
		do {
			var n = bl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, J = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				J = e;
				return;
			}
			J = e = n;
		} while (e !== null);
		ad = 6, J = null;
	}
	function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (K & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === q && (J = q = null, Y = 0), xd = t, bd = e, Sd = n, wd = a, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= wi, ht(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = La(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Ke, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Bl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = N.T, N.T = null, i = P.p, P.p = 2, a = K, K |= 4;
			try {
				mu(e, t, n);
			} finally {
				K = a, P.p = i, N.T = r;
			}
		}
		yd = 1, Bl ? Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = N.T, N.T = null;
				var i = P.p;
				P.p = 2;
				var a = K;
				K |= 4;
				try {
					du = fu = !1, Au(t, e, n), n = cp;
					var o = Jr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && qr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Yr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Kr(s, h), v = Kr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					K = a, P.p = i, N.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = N.T, N.T = null;
				var r = P.p;
				P.p = 2;
				var i = K;
				K |= 4;
				try {
					hu(e, t.alternate, t);
				} finally {
					K = i, P.p = r, N.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, Ve();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), bt(r), n = n.stateNode, Qe && typeof Qe.onCommitFiberRoot == "function") try {
				Qe.onCommitFiberRoot(Ze, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = N.T, a = P.p, P.p = 2, N.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					N.T = n, P.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Df(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Pa(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = bt(Sd), r = N.T, a = P.p;
		try {
			P.p = 32 > n ? 32 : n, N.T = null, n = wd, wd = null;
			var o = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, K & 6) throw Error(i(331));
			var c = K;
			if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Df(0, !1), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
				Qe.onPostCommitFiberRoot(Ze, o);
			} catch {}
			return !0;
		} finally {
			P.p = a, N.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = Ui(n, t), t = kc(e.stateNode, t, 2), e = yo(e, t, 2), e !== null && (mt(e, 2), Ef(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = Ui(n, e), n = Ac(2), r = yo(t, n, 2), r !== null && (jc(n, r, t, e), mt(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $u();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (rd = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, q === e && (Y & n) === n && (ad === 4 || ad === 3 && (Y & 62914560) === Y && 300 > He() - md ? K & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === Y && (ud = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = ft()), e = Oi(e, t), e !== null && (mt(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return Re(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - et(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = Y, a = ct(r, r === q ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || lt(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && hp() && (e = Tf);
		for (var t = He(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - et(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = dt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = q, n = Y, n = ct(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && ze(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || lt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && ze(r), bt(n)) {
				case 2:
				case 8:
					n = Ge;
					break;
				case 32:
					n = Ke;
					break;
				case 268435456:
					n = Je;
					break;
				default: n = Ke;
			}
			return r = jf.bind(null, e), n = Re(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && ze(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = Y;
		return r = ct(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, He()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Nf() {
		bp(function() {
			K & 6 ? Re(We, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = Ba;
			e === 0 && (e = it, it <<= 1, !(it & 261888) && (it = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Tt] || null).action), o = r.submitter;
			o && (t = (t = o[Tt] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Vn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								tc(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), tc(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < hi.length; Lf++) {
		var Rf = hi[Lf];
		gi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	gi(si, "onAnimationEnd"), gi(ci, "onAnimationIteration"), gi(li, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(ui, "onTransitionRun"), gi(di, "onTransitionStart"), gi(fi, "onTransitionCancel"), gi(pi, "onTransitionEnd"), Ut("onMouseEnter", ["mouseout", "mouseover"]), Ut("onMouseLeave", ["mouseout", "mouseover"]), Ut("onPointerEnter", ["pointerout", "pointerover"]), Ut("onPointerLeave", ["pointerout", "pointerover"]), Ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ht("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						xi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						xi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[Dt];
		n === void 0 && (n = t[Dt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, Bt.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !An || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Pt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Dn(function() {
			var r = a, i = Sn(n), s = [];
			a: {
				var c = mi.get(e);
				if (c !== void 0) {
					var l = Vn, u = e;
					switch (e) {
						case "keypress": if (In(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = ar;
							break;
						case "focusin":
							u = "focus", l = Xn;
							break;
						case "focusout":
							u = "blur", l = Xn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Xn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Jn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Yn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = cr;
							break;
						case si:
						case ci:
						case li:
							l = Zn;
							break;
						case pi:
							l = lr;
							break;
						case "scroll":
						case "scrollend":
							l = Un;
							break;
						case "wheel":
							l = ur;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = or;
							break;
						case "submit":
							l = sr;
							break;
						case "toggle":
						case "beforetoggle": l = dr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = On(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== xn && (u = n.relatedTarget || n.fromElement) && (Pt(u) || u[Et])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Pt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Jn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = or, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : It(c), h = l == null ? u : It(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Pt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? w(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? It(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Ar;
					else if (wr(c)) {
						if (jr) _ = Br;
						else {
							_ = Rr;
							var v = Lr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && gn(r.elementType) && (_ = Ar) : _ = zr;
					if (_ &&= _(e, r)) {
						Tr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? It(r) : window, e) {
					case "focusin":
						(wr(v) || v.contentEditable === "true") && (Zr = v, Qr = r, $r = null);
						break;
					case "focusout":
						$r = Qr = Zr = null;
						break;
					case "mousedown":
						ei = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						ei = !1, ti(s, n, i);
						break;
					case "selectionchange": if (Xr) break;
					case "keydown":
					case "keyup": ti(s, n, i);
				}
				var y;
				if (I) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else br ? vr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (hr && n.locale !== "ko" && (br || b !== "onCompositionStart" ? b === "onCompositionEnd" && br && (y = Fn()) : (Mn = i, Nn = "value" in Mn ? Mn.value : Mn.textContent, br = !0)), v = Jf(r, b), 0 < v.length && (b = new $n(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = yr(n), y !== null && (b.data = y)))), (y = mr ? xr(e, n) : Sr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new $n("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), If(s, e, r, n, i);
			}
			Vf(s, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = On(e, n), i != null && r.unshift(qf(e, i, a)), i = On(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = On(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = On(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function $(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || fn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && fn(e, "" + r);
				else return;
				break;
			case "className":
				Xt(e, "class", r);
				break;
			case "tabIndex":
				Xt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Xt(e, n, r);
				break;
			case "style":
				hn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Xt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = yn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", a.name, a, null), $(e, t, "formEncType", a.formEncType, a, null), $(e, t, "formMethod", a.formMethod, a, null), $(e, t, "formTarget", a.formTarget, a, null)) : ($(e, t, "encType", a.encType, a, null), $(e, t, "method", a.method, a, null), $(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = yn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = yn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Yt(e, "popover", r);
				break;
			case "xlinkActuate":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Yt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = _n.get(n) || n, Yt(e, n, r);
			else return;
		}
		F = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				hn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") fn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") fn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Vt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Tt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					F = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Yt(e, n, r);
				}
				return;
		}
		F = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				a && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				sn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && ln(e, !!r, n, !0) : ln(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				dn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (gn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (F = !0), o = m;
							break;
						case "name":
							m !== f && (F = !0), a = m;
							break;
						case "checked":
							m !== f && (F = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (F = !0), d = m;
							break;
						case "value":
							m !== f && (F = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (F = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				on(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (F = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (F = !0), c = o;
						break;
					case "multiple": o !== l && (F = !0), s = o;
					default: o !== l && $(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? ln(e, !!n, n ? [] : "", !1) : ln(e, !!n, t, !0)) : ln(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (F = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (F = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && $(e, t, s, a, r, o);
				}
				un(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (F = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (gn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[wt] = r, n[Tt] = t, np(n, e, t), Rt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[jt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : T({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), p(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return v(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), p(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return v(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = m(this._fragmentFiber);
		if (t === null) return !0;
		t = v(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		p(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = v(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		p(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = m(this._fragmentFiber);
		e !== null && (e = v(e), e = lp(e).activeElement, e !== null && p(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = v(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = v(e), t.observe(e), !1);
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), p(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = v(e), t.unobserve(e), !1);
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return p(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = v(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = m(this._fragmentFiber);
		return t === null ? this : v(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = m(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		p(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = v(t);
		if (n.length === 0) {
			if (n = r, h(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = g(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = v(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = v(n[0]), i = v(n[n.length - 1]);
		var a = h(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Pt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = m(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = w(n, a, C), t === null ? t = !1 : (p(t, !0, x, a, n), a = y, y = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = w(r, a, C), t === null ? t = !1 : (p(t, !0, S, a, r), a = y, b = y = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		p(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = g(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || m(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = v(r), Zp(e, n);
				return;
			}
			if (r = v(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = v(a), Zp(a, n)) : v(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = v(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), Nt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[jt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === bn && (e.onclick = null), Nt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Nt(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = P.d;
	P.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = zd();
		return e || t;
	}
	function Cm(e) {
		var t = Ft(e);
		t !== null && t.tag === 5 && t.type === "form" ? rc(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = an(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Rt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + an(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + an(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + an(n.imageSizes) + "\"]")) : i += "[href=\"" + an(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = T({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Mt] = !0, o.onload = o.onerror = function() {
					zt(o);
				}), Rt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + an(r) + "\"][href=\"" + an(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = T({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), Rt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Lt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = T({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					Rt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Lt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = T({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Rt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Lt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = T({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Rt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = we.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Lt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Lt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Lt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + an(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return T({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Mt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Mt] = !0, t.onload = t.onerror = zt.bind(null, t), np(t, "link", n), Rt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + an(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + an(n.href) + "\"]");
				if (r) return t.instance = r, Rt(r), r;
				var a = T({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Rt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Rt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Rt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Rt(a), a) : (r = n, (a = vm.get(o)) && (r = T({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Rt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[jt] || a[wt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Rt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Rt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: re,
		Provider: null,
		Consumer: null,
		_currentValue: ge,
		_currentValue2: ge,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pt(0), this.hiddenUpdates = pt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Ni(3, null, null, t), e.current = a, a.stateNode = e, t = Na(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, go(a), e;
	}
	function uh(e) {
		return e ? (e = ji, e) : ji;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = vo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = yo(e, r, t), n !== null && (Pd(n, e, t), bo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Oi(e, 67108864);
			t !== null && Pd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = yt(t);
			var n = Oi(e, t);
			n !== null && Pd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = N.T;
		N.T = null;
		var a = P.p;
		try {
			P.p = 2, yh(e, t, n, r);
		} finally {
			P.p = a, N.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = N.T;
		N.T = null;
		var a = P.p;
		try {
			P.p = 8, yh(e, t, n, r);
		} finally {
			P.p = a, N.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Ft(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = st(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - et(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(K & 6) && (gd = He() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Oi(a, 2), s !== null && Pd(s, a, 2), zd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Sn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Pt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ue()) {
				case We: return 2;
				case Ge: return 8;
				case Ke:
				case qe: return 32;
				case Je: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Ft(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Pt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, St(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, St(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				xn = r, n.target.dispatchEvent(r), xn = null;
			} else return t = Ft(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Ft(n);
				a !== null && (e.splice(t, 3), t -= 3, tc(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Tt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Tt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), zd(), t[Et] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = xt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	P.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : f(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: N,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			Ze = Jh.inject(qh), Qe = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = wc, s = Tc, c = Ec;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[Et] = t.current, Wf(e), new Wh(t);
	};
})), Yl = (/* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Jl();
})))();
function Xl({ product: e, size: t }) {
	let { identity: n } = _r(), r = ki(e), i = Ai(r.map, t || r.recommended || "");
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "automatic-fit-summary",
		"aria-live": "polite",
		children: [ni(e.sizes) ? /* @__PURE__ */ (0, y.jsx)("p", { children: "One size · See product details for dimensions." }) : n ? r.recommended ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("strong", { children: r.recommendationSource === "simulated" ? `Demo model reference size: ${r.recommended}.` : r.recommendationSource === "twin" ? `${n.name}’s reference size is ${r.recommended}.` : `Our recommended size for ${n.kind === "twin" ? n.name : "you"} is ${r.recommended}.` }), /* @__PURE__ */ (0, y.jsx)("p", { children: r.recommendationSource === "simulated" ? "Demo guidance based on your model’s reference size. Select any size below and compare its generated silhouette. This is not calibrated garment-specific sizing." : i.length ? i.map((e) => `${e.point}: ${e.label.toLowerCase()}`).join(" · ") : r.recommendationSource === "twin" ? "Based on the twin’s saved size; a garment-specific recommendation is not available." : r.fitNote || "Based on your profile and this garment’s sizing data." })] }) : /* @__PURE__ */ (0, y.jsx)("p", { children: r.status === "error" ? r.error : "Finding your recommended size…" }) : /* @__PURE__ */ (0, y.jsx)(On, {
			to: "/account",
			children: "My Account · Discover your fit"
		}), !ni(e.sizes) && /* @__PURE__ */ (0, y.jsx)(rl, {})]
	});
}
function Zl({ product: e, size: t, onSize: n }) {
	let r = ki(e);
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "fit-options",
		children: [/* @__PURE__ */ (0, y.jsx)("div", {
			className: "shopping-sizes",
			role: "group",
			"aria-label": "Garment sizes",
			children: e.sizes.map((i) => {
				let a = r.recommended ? mi(e.sizes, i, r.recommended, r.map) : "";
				return /* @__PURE__ */ (0, y.jsxs)("button", {
					"aria-pressed": t === i,
					onClick: () => n(i),
					children: [/* @__PURE__ */ (0, y.jsx)("span", { children: ri(i) }), a && /* @__PURE__ */ (0, y.jsx)("small", { children: i === r.recommended && r.recommendationSource === "twin" ? "Starting size" : a })]
				}, i);
			})
		}), r.recommended && /* @__PURE__ */ (0, y.jsx)("p", {
			className: "fit-step-note",
			children: "Choose a size to see its silhouette. Fit labels use garment guidance where available, otherwise the size steps from your starting size."
		})]
	});
}
function Ql({ product: e, size: t, onSize: n }) {
	let { identity: r } = _r(), i = ki(e), a = t || i.recommended || "", o = ji(e, a), s = Ai(i.map, a);
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "fit-shopping",
		children: [/* @__PURE__ */ (0, y.jsxs)("div", {
			className: "fit-shopping-image",
			children: [o.url ? /* @__PURE__ */ (0, y.jsx)("img", {
				src: o.url,
				alt: `${e.name} on ${r?.name}${o.selected ? `, size ${o.selected}` : ""}`
			}) : /* @__PURE__ */ (0, y.jsx)("img", {
				className: r && !o.reason ? "awaiting-view" : "",
				src: e.model,
				alt: `${e.name} — original model photography`
			}), /* @__PURE__ */ (0, y.jsx)("div", {
				className: "fit-preview-caption",
				children: o.status === "loading" ? /* @__PURE__ */ (0, y.jsx)(b, { label: "Preparing your selected size" }) : o.status === "error" ? /* @__PURE__ */ (0, y.jsx)("p", { children: "Size preview temporarily unavailable." }) : o.url ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
					/* @__PURE__ */ (0, y.jsxs)("small", { children: ["ON ", r?.name.toUpperCase()] }),
					o.selected && /* @__PURE__ */ (0, y.jsxs)("strong", { children: ["Size ", ri(o.selected)] }),
					o.fitNote && /* @__PURE__ */ (0, y.jsx)("p", { children: o.fitNote })
				] }) : /* @__PURE__ */ (0, y.jsx)("p", { children: o.reason || "Original collection photography" })
			})]
		}), /* @__PURE__ */ (0, y.jsxs)("div", {
			className: "fit-shopping-copy",
			children: [
				o.url && /* @__PURE__ */ (0, y.jsx)(il, {}),
				/* @__PURE__ */ (0, y.jsx)("p", {
					className: "eyebrow",
					children: e.name
				}),
				/* @__PURE__ */ (0, y.jsxs)("h2", { children: [
					"Your size.",
					/* @__PURE__ */ (0, y.jsx)("br", {}),
					"Your kind of fit."
				] }),
				/* @__PURE__ */ (0, y.jsx)(Xl, {
					product: e,
					size: a
				}),
				/* @__PURE__ */ (0, y.jsx)(Zl, {
					product: e,
					size: a,
					onSize: n
				}),
				/* @__PURE__ */ (0, y.jsx)("div", {
					className: "fit-language",
					children: s.map((e) => /* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("span", { children: e.point }), /* @__PURE__ */ (0, y.jsx)("strong", { children: e.label })] }, e.point))
				}),
				/* @__PURE__ */ (0, y.jsx)("p", {
					className: "fine",
					children: r?.kind === "twin" ? "Fit guidance describes your chosen twin. Use your own photo and measurements for personal sizing." : "Generated views illustrate a size; they do not replace physical fit assessment."
				})
			]
		})]
	});
}
//#endregion
//#region src/partner-demo/SimulatedSizePreview.tsx
function $l({ product: e, size: t }) {
	let { identity: n } = _r(), r = ki(e), i = Oi([e]), a = Math.max(0, e.sizes.indexOf(r.recommended || e.sizes[Math.floor(e.sizes.length / 2)])), o = e.sizes.indexOf(t) - a, s = window.PARTNER_DEMO?.theme === "ch" ? 1 + Pi(e.sizes, t) : Math.max(.64, Math.min(1.8, 1 + o * .16)), c = Math.max(.85, Math.min(1.24, 1 + o * .045));
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "simulated-size-view",
		"data-size": t,
		"data-reference-size": e.sizes[a],
		"data-width-scale": s,
		children: [
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "simulated-size-canvas",
				children: i.url ? window.PARTNER_DEMO?.theme === "ch" ? /* @__PURE__ */ (0, y.jsx)(Fi, {
					product: e,
					src: i.url,
					size: t
				}) : /* @__PURE__ */ (0, y.jsx)("img", {
					src: i.url,
					alt: `${e.name} on ${n?.name} — illustrative size ${t}`,
					style: { transform: `scale(${s},${c})` }
				}) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("img", {
					className: "partner-loading-photo",
					src: e.model,
					alt: ""
				}), i.status === "error" ? /* @__PURE__ */ (0, y.jsx)("p", {
					role: "alert",
					children: i.error || "Live try-on unavailable."
				}) : /* @__PURE__ */ (0, y.jsx)(b, { label: "Preparing your base try-on…" })] })
			}),
			/* @__PURE__ */ (0, y.jsxs)("p", {
				className: "simulated-size-caption",
				children: [
					o === 0 ? "Reference view" : o > 0 ? "Larger silhouette illustration" : "Smaller silhouette illustration",
					" · Size ",
					t
				]
			}),
			/* @__PURE__ */ (0, y.jsx)("small", { children: "Illustrative silhouette mockup. This is not a generated size-specific fit or a calibrated sizing prediction." })
		]
	});
}
//#endregion
//#region src/always-on/FitCompare.tsx
function eu({ product: e, size: t }) {
	let [n, r] = (0, d.useState)(0), [i, a] = (0, d.useState)(!1), o = ji(e, t, n);
	return /* @__PURE__ */ (0, y.jsx)("div", {
		className: "fit-compare-image",
		"aria-live": "polite",
		children: o.url ? /* @__PURE__ */ (0, y.jsxs)(oc, {
			open: i,
			onOpenChange: a,
			children: [/* @__PURE__ */ (0, y.jsxs)(cc, {
				className: "fit-compare-zoom-trigger",
				"aria-label": `Enlarge size ${ri(t)} preview`,
				children: [/* @__PURE__ */ (0, y.jsx)("img", {
					src: o.url,
					alt: `${e.name} — size ${ri(t)}`
				}), /* @__PURE__ */ (0, y.jsx)("span", {
					className: "fit-compare-zoom-hint",
					children: "View closer"
				})]
			}), /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "fit-compare-overlay fit-compare-zoom-overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
				className: "fit-compare-zoom",
				children: [
					/* @__PURE__ */ (0, y.jsxs)("header", { children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)(Cc, { children: e.name }), /* @__PURE__ */ (0, y.jsxs)(Tc, { children: [
						"Size ",
						ri(t),
						" · Personal fit preview"
					] })] }), /* @__PURE__ */ (0, y.jsx)(Dc, {
						"aria-label": "Close enlarged fit preview",
						children: "×"
					})] }),
					/* @__PURE__ */ (0, y.jsx)(al, {
						allowOriginal: !0,
						src: o.url,
						alt: `${e.name} — size ${ri(t)}`
					}, o.url),
					/* @__PURE__ */ (0, y.jsx)(il, {})
				]
			})] })]
		}) : o.status === "error" ? /* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("p", { children: "We couldn’t load this fit." }), /* @__PURE__ */ (0, y.jsxs)("button", {
			onClick: () => r((e) => e + 1),
			children: ["Retry size ", ri(t)]
		})] }) : o.reason ? /* @__PURE__ */ (0, y.jsx)("p", { children: o.reason }) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [window.PARTNER_DEMO && /* @__PURE__ */ (0, y.jsx)("img", {
			className: "partner-loading-photo",
			src: e.model,
			alt: ""
		}), /* @__PURE__ */ (0, y.jsx)(b, { label: `Generating your look… Size ${ri(t)}` })] })
	});
}
function tu({ product: e, selected: t, onSize: n, onClose: r }) {
	let { identity: i } = _r(), a = ki(e), o = window.PARTNER_DEMO ? e.sizes : e.sizes.filter((t) => !pi(e.sizes, t, a.recommended || "").reason), [s, c] = (0, d.useState)(""), [l, u] = (0, d.useState)(""), f = s || a.recommended || e.sizes[0], p = l || (t !== f && o.includes(t) ? t : o[o.indexOf(f) + 1] || o.find((e) => e !== f)) || f, m = i ? e.environment === "prod" ? "Size-specific previews aren’t available for this piece yet. Your standard try-on is available in the gallery." : a.recommended ? "" : a.status === "error" ? "Fit comparison is unavailable for this piece." : "Finding your starting size…" : "Add a photo or Twin to your profile to compare fits.";
	return /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
		/* @__PURE__ */ (0, y.jsxs)("div", {
			className: "fit-compare-header",
			children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [
				/* @__PURE__ */ (0, y.jsx)("small", { children: "ALWAYS ON · VISUAL FIT" }),
				/* @__PURE__ */ (0, y.jsx)(Cc, { children: "See the difference." }),
				/* @__PURE__ */ (0, y.jsx)(Tc, { children: e.name }),
				/* @__PURE__ */ (0, y.jsx)("p", {
					className: "fit-compare-subtitle",
					children: "One look. Two fits. Find the one that feels like you."
				})
			] }), /* @__PURE__ */ (0, y.jsx)(Dc, {
				"aria-label": "Close fit comparison",
				children: "×"
			})]
		}),
		/* @__PURE__ */ (0, y.jsx)(il, {}),
		window.PARTNER_DEMO && /* @__PURE__ */ (0, y.jsx)("p", {
			className: "fit-compare-subtitle",
			children: "The base image is a real AI try-on. Size changes are illustrative silhouette mockups, not generated size-specific fits or calibrated sizing."
		}),
		m ? /* @__PURE__ */ (0, y.jsx)("p", {
			className: "fit-compare-unavailable",
			role: "status",
			children: m
		}) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("div", {
			className: "fit-compare-grid",
			children: [{
				value: f,
				set: c,
				name: "Left"
			}, {
				value: p,
				set: u,
				name: "Right"
			}].map((t) => {
				let i = window.PARTNER_DEMO ? "" : pi(e.sizes, t.value, a.recommended || "").reason;
				return /* @__PURE__ */ (0, y.jsxs)("section", {
					className: t.value === a.recommended ? "fit-compare-card is-recommended" : "fit-compare-card",
					children: [
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "fit-compare-card-head",
							children: [/* @__PURE__ */ (0, y.jsxs)("label", { children: [/* @__PURE__ */ (0, y.jsxs)("span", { children: [t.name === "Left" ? "01" : "02", " / SIZE"] }), /* @__PURE__ */ (0, y.jsx)("select", {
								"aria-label": `${t.name} comparison size`,
								value: t.value,
								onChange: (e) => t.set(e.target.value),
								children: e.sizes.map((t) => /* @__PURE__ */ (0, y.jsxs)("option", {
									value: t,
									children: [ri(t), !window.PARTNER_DEMO && pi(e.sizes, t, a.recommended || "").reason ? " · Preview unavailable" : ""]
								}, t))
							})] }), /* @__PURE__ */ (0, y.jsx)("p", {
								className: "fit-compare-label",
								children: window.PARTNER_DEMO ? t.value === a.recommended ? "Reference view" : "Simulated size" : t.value === a.recommended && a.recommendationSource === "twin" ? "Starting size" : mi(e.sizes, t.value, a.recommended || "", a.map)
							})]
						}),
						i ? /* @__PURE__ */ (0, y.jsx)("div", {
							className: "fit-compare-image",
							children: /* @__PURE__ */ (0, y.jsx)("p", { children: i })
						}) : window.PARTNER_DEMO ? /* @__PURE__ */ (0, y.jsx)($l, {
							product: e,
							size: t.value
						}) : /* @__PURE__ */ (0, y.jsx)(eu, {
							product: e,
							size: t.value
						}, e.id + ":" + t.value),
						/* @__PURE__ */ (0, y.jsxs)("button", {
							className: "fit-compare-use",
							disabled: !!i,
							onClick: () => {
								n?.(t.value), r();
							},
							children: [/* @__PURE__ */ (0, y.jsxs)("span", {
								className: "fit-compare-use-label",
								children: ["Choose size ", ri(t.value)]
							}), /* @__PURE__ */ (0, y.jsx)("span", { "aria-hidden": "true" })]
						})
					]
				}, t.name);
			})
		}), /* @__PURE__ */ (0, y.jsx)("div", {
			className: "fit-compare-footer",
			children: /* @__PURE__ */ (0, y.jsxs)("span", { children: ["YOUR PERSPECTIVE · ", i?.name] })
		})] })
	] });
}
function nu({ product: e, selected: t = "", onSize: n }) {
	let [r, i] = (0, d.useState)(!1), { version: a } = _r();
	return ni(e.sizes) || e.sizes.length < 2 ? null : /* @__PURE__ */ (0, y.jsxs)(oc, {
		open: r,
		onOpenChange: i,
		children: [/* @__PURE__ */ (0, y.jsx)(cc, {
			className: "fit-compare-trigger",
			children: "Compare sizes "
		}), /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "fit-compare-overlay" }), /* @__PURE__ */ (0, y.jsx)(vc, {
			className: "fit-compare-modal",
			children: r && /* @__PURE__ */ (0, y.jsx)(tu, {
				product: e,
				selected: t,
				onSize: n,
				onClose: () => i(!1)
			}, e.id + ":" + a)
		})] })]
	});
}
function ru(e, t) {
	return e.includes(t) || e.length >= 3 ? e : [...e, t];
}
//#endregion
//#region src/always-on/CompareLooks.tsx
function iu({ product: e, onRemove: t, onReady: n }) {
	let { identity: r } = _r(), [i, a] = (0, d.useState)(0), o = Oi([e], "", "", i);
	return (0, d.useEffect)(() => {
		o.url && n(o.url);
	}, [o.url]), /* @__PURE__ */ (0, y.jsxs)("article", {
		className: "compare-look",
		children: [
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "remove-piece",
				"aria-label": `Remove ${e.name}`,
				onClick: t,
				children: "×"
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "compare-look-photo",
				children: [r && !o.url ? /* @__PURE__ */ (0, y.jsx)("div", {
					className: "generation-placeholder",
					"aria-hidden": "true",
					children: window.PARTNER_DEMO && /* @__PURE__ */ (0, y.jsx)("img", {
						className: "partner-loading-photo",
						src: e.model,
						alt: ""
					})
				}) : /* @__PURE__ */ (0, y.jsx)(kl, {
					exportPerson: o.url ? r?.name : void 0,
					isTryOn: !!o.url,
					images: [o.url || e.model],
					title: e.name,
					pieces: [e],
					detail: o.url ? `Try-on · Beta. Your personal view on ${r?.name}. AI-generated preview; garment details and fit may vary.` : "Original model photograph. Your personal view appears when ready.",
					children: /* @__PURE__ */ (0, y.jsx)("img", {
						src: o.url || e.model,
						className: r && !o.url ? "awaiting-view" : "",
						alt: o.url ? `${e.name} on ${r?.name}` : `${e.name}, original model`
					})
				}), r && !o.url && /* @__PURE__ */ (0, y.jsx)("span", { children: o.status === "error" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("span", { children: o.error || "Personal view unavailable. Your piece is still selected." }), /* @__PURE__ */ (0, y.jsx)("button", {
					className: "text-link",
					onClick: () => a((e) => e + 1),
					children: "Retry preview"
				})] }) : /* @__PURE__ */ (0, y.jsx)(b, { label: "Generating…" }) })]
			}),
			/* @__PURE__ */ (0, y.jsx)("h3", { children: e.name }),
			/* @__PURE__ */ (0, y.jsx)("p", { children: e.priceLabel })
		]
	});
}
function au({ initial: e, onChange: t, product: n, selectedSize: r, onSize: i }) {
	let [a, o] = (0, d.useState)(!1), [s, c] = (0, d.useState)([...new Set(e)].slice(0, 3)), [l, u] = (0, d.useState)(!1), [f, p] = (0, d.useState)(""), { identity: m, version: h } = _r(), g = (0, d.useMemo)(() => Qn(m?.id || ""), [
		m?.id,
		h,
		s.join("|")
	]);
	(0, d.useEffect)(() => {
		t?.(s);
	}, [s.join("|")]);
	let [_, v] = (0, d.useState)({});
	return (0, d.useEffect)(() => v({}), [h]), (0, d.useEffect)(() => {
		m && s.length > 1 && s.every((e) => _[h + ":" + e]) && rr({
			id: h + ":compare:" + s.join("|"),
			kind: "comparison",
			identityId: m.id,
			identityName: m.name,
			pieces: s.map((e) => {
				let t = Bl.find((t) => t.id === e);
				return {
					id: t.id,
					name: t.name,
					image: t.image
				};
			}),
			images: s.map((e) => _[h + ":" + e])
		}, g);
	}, [
		s.join("|"),
		_,
		h
	]), /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "compare-shopping",
		children: [
			/* @__PURE__ */ (0, y.jsx)("p", {
				className: "eyebrow",
				children: "SIDE BY SIDE"
			}),
			n && i && /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "comparison-tools",
				children: [/* @__PURE__ */ (0, y.jsx)("button", {
					"aria-pressed": !a,
					onClick: () => o(!1),
					children: "Compare pieces"
				}), window.PARTNER_DEMO?.theme === "ch" ? /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-pressed": a,
					onClick: () => o((e) => !e),
					children: "Compare simulated sizes "
				}) : /* @__PURE__ */ (0, y.jsx)(nu, {
					product: n,
					selected: r || "",
					onSize: i
				})]
			}),
			a && n && i && /* @__PURE__ */ (0, y.jsx)(Ii, {
				product: n,
				size: r || "",
				onSize: i
			}),
			!a && /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
				/* @__PURE__ */ (0, y.jsx)("h2", { children: "Compare on you." }),
				/* @__PURE__ */ (0, y.jsx)("p", { children: m ? `Your selection, seen on ${m.name}. Compare up to three garments side by side.` : "Select up to three pieces, then add your profile to see yourself in each." }),
				!m && /* @__PURE__ */ (0, y.jsx)(On, {
					className: "text-link",
					to: "/account",
					children: "Set up My Account"
				}),
				/* @__PURE__ */ (0, y.jsxs)("p", {
					className: "comparison-count",
					role: "status",
					children: [
						s.length,
						" of ",
						3,
						" pieces",
						s.length === 3 ? " · Remove a piece to add another." : " · Tap an image for a closer look."
					]
				}),
				/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "compare-looks",
					hidden: l,
					children: [s.map((e) => {
						let t = Bl.find((t) => t.id === e);
						return t ? /* @__PURE__ */ (0, y.jsx)(iu, {
							product: t,
							onReady: (t) => v((n) => n[h + ":" + e] === t ? n : {
								...n,
								[h + ":" + e]: t
							}),
							onRemove: () => c(s.filter((t) => t !== e))
						}, `${h}:${e}`) : null;
					}), s.length < 3 && /* @__PURE__ */ (0, y.jsxs)("button", {
						className: "add-compare-look",
						onClick: () => {
							u(!0), p("");
						},
						children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "＋" }), "Add a piece"]
					})]
				}),
				m && !l && /* @__PURE__ */ (0, y.jsx)(il, {}),
				l && /* @__PURE__ */ (0, y.jsxs)("div", {
					className: "compare-picker",
					role: "region",
					"aria-label": "Choose a piece to compare",
					children: [
						/* @__PURE__ */ (0, y.jsx)("button", {
							className: "text-link",
							onClick: () => u(!1),
							children: "Back to comparison"
						}),
						/* @__PURE__ */ (0, y.jsx)("h3", { children: "Add a piece" }),
						/* @__PURE__ */ (0, y.jsx)("input", {
							autoFocus: !0,
							"aria-label": "Find a garment to compare",
							type: "search",
							placeholder: "Find a piece…",
							value: f,
							onChange: (e) => p(e.target.value)
						}),
						/* @__PURE__ */ (0, y.jsx)("div", { children: Bl.filter((e) => e.previewAvailable !== !1 && !s.includes(e.id) && e.name.toLowerCase().includes(f.toLowerCase())).map((e) => /* @__PURE__ */ (0, y.jsx)("article", {
							className: "compare-picker-piece",
							children: /* @__PURE__ */ (0, y.jsxs)("button", {
								disabled: s.length >= 3,
								onClick: () => {
									c((t) => ru(t, e.id)), u(!1), window.dispatchEvent(new CustomEvent("spree-feedback-toast", { detail: "Piece added to your comparison" }));
								},
								children: [
									/* @__PURE__ */ (0, y.jsx)("img", {
										src: e.image,
										alt: ""
									}),
									/* @__PURE__ */ (0, y.jsx)("span", { children: e.name }),
									/* @__PURE__ */ (0, y.jsx)("small", { children: "Add to comparison" })
								]
							})
						}, e.id)) })
					]
				})
			] })
		]
	});
}
//#endregion
//#region src/partner-demo/Retail.tsx
function U({ name: e }) {
	return /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "22",
		height: "22",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.3",
		"aria-hidden": "true",
		children: e === "search" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("circle", {
			cx: "10",
			cy: "10",
			r: "7"
		}), /* @__PURE__ */ (0, y.jsx)("path", { d: "m15 15 6 6" })] }) : e === "heart" ? /* @__PURE__ */ (0, y.jsx)("path", { d: "M12 21 3 12C-3 4 8-1 12 6c4-7 15-2 9 6Z" }) : e === "bag" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("path", { d: "M5 7h14l2 14H3Z" }), /* @__PURE__ */ (0, y.jsx)("path", { d: "M8 8V5a4 4 0 0 1 8 0v3" })] }) : e === "compare" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("rect", {
			x: "3",
			y: "3",
			width: "6",
			height: "18",
			rx: "1"
		}), /* @__PURE__ */ (0, y.jsx)("rect", {
			x: "15",
			y: "3",
			width: "6",
			height: "18",
			rx: "1"
		})] }) : e === "plus" ? /* @__PURE__ */ (0, y.jsx)("path", { d: "M12 3v18M3 12h18" }) : e === "user" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("circle", {
			cx: "12",
			cy: "7",
			r: "4"
		}), /* @__PURE__ */ (0, y.jsx)("path", { d: "M3 22a9 9 0 0 1 18 0" })] }) : /* @__PURE__ */ (0, y.jsx)("path", { d: "M3 5h18M3 12h18M3 19h18" })
	});
}
function W({ theme: e, brand: t, onPanel: n, count: r, onNav: i }) {
	let a = e === "ch" ? [
		"FRAGRANCES",
		"MAQUILLAGE",
		"MODE",
		"RÉCITS"
	] : e === "kitsune" ? [
		"NEW IN",
		"MEN",
		"WOMEN",
		"ACCESSORIES",
		"ICONICS",
		"ABOUT"
	] : e === "ao" ? [
		"NEW ARRIVALS",
		"SHOP",
		"DRESSES",
		"CLASSICS"
	] : e === "cg" ? [
		"NEW",
		"WOMEN",
		"BAGS",
		"SHOES",
		"ACCESSORIES"
	] : e === "sh" ? [
		"READY-TO-WEAR",
		"ACCESSORIES",
		"THE RUNWAY",
		"THE WORLD OF SERGIO HUDSON"
	] : e === "thg" ? [
		"Services",
		"About",
		"Clients",
		"Contact Us"
	] : [
		"WOMEN",
		"DRESSES",
		"NEW ARRIVALS"
	];
	return /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
		/* @__PURE__ */ (0, y.jsx)("div", {
			className: "retail-concept",
			children: e === "ch" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: ["CH CAROLINA HERRERA ", /* @__PURE__ */ (0, y.jsx)("span", { children: "Défilé Spring 27 · Regarder à nouveau" })] }) : "CONCEPT PARTENAIRE INDÉPENDANT · SPREEAI"
		}),
		e === "cg" && /* @__PURE__ */ (0, y.jsxs)("div", {
			className: "retail-country",
			children: [
				/* @__PURE__ */ (0, y.jsx)("span", { children: "SHIPPING TO UNITED STATES" }),
				/* @__PURE__ */ (0, y.jsx)("span", { children: "THE CURRENT EDIT" }),
				/* @__PURE__ */ (0, y.jsx)("button", {
					onClick: () => n("profile"),
					children: "YOUR FITTING ROOM"
				})
			]
		}),
		e === "kitsune" && /* @__PURE__ */ (0, y.jsxs)("div", {
			className: "kitsune-family",
			children: [
				/* @__PURE__ */ (0, y.jsx)("a", {
					href: "https://maisonkitsune.com/fr/",
					children: "MAISON KITSUNÉ"
				}),
				/* @__PURE__ */ (0, y.jsx)("a", {
					href: "https://maisonkitsune.com/fr/cafe-kitsune",
					children: "CAFÉ KITSUNÉ"
				}),
				/* @__PURE__ */ (0, y.jsx)("a", {
					href: "https://maisonkitsune.com/fr/kitsune-musique",
					children: "KITSUNÉ MUSIQUE"
				})
			]
		}),
		/* @__PURE__ */ (0, y.jsxs)("header", {
			className: "retail-header " + e,
			children: [
				/* @__PURE__ */ (0, y.jsxs)("button", {
					className: "retail-menu",
					"aria-label": "Open menu",
					onClick: () => n("menu"),
					children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "menu" }), e === "mk" && "MENU"]
				}),
				/* @__PURE__ */ (0, y.jsx)(On, {
					to: "/",
					className: "retail-logo",
					children: e === "ch" ? /* @__PURE__ */ (0, y.jsx)("img", {
						src: "./assets/c804a8dedead1e6d.svg",
						alt: "Carolina Herrera"
					}) : e === "kitsune" ? /* @__PURE__ */ (0, y.jsx)("img", {
						src: "./assets/maison-fox.svg",
						alt: "Maison Kitsuné"
					}) : e === "ao" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: ["ALICE+OLIVIA", /* @__PURE__ */ (0, y.jsx)("small", { children: "BY STACEY BENDET" })] }) : e === "cg" ? "cult gaia" : e === "sh" ? "SERGIO HUDSON" : e === "mk" ? "MICHAEL KORS" : "THE HINTON GROUP"
				}),
				/* @__PURE__ */ (0, y.jsx)("nav", { children: a.map((t, n) => e === "thg" ? /* @__PURE__ */ (0, y.jsx)("a", {
					href: "https://www.thehintongroup.co/" + [
						"services",
						"about-us",
						"clients",
						"contact-us"
					][n],
					target: "_blank",
					rel: "noreferrer",
					children: t
				}, t) : /* @__PURE__ */ (0, y.jsx)("button", {
					onClick: () => i(t),
					children: t
				}, t)) }),
				/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "retail-tools",
					children: [
						/* @__PURE__ */ (0, y.jsx)("button", {
							"aria-label": "Search products",
							onClick: () => n("search"),
							children: /* @__PURE__ */ (0, y.jsx)(U, { name: "search" })
						}),
						/* @__PURE__ */ (0, y.jsx)("button", {
							"aria-label": "Your favorites",
							onClick: () => n("favorites"),
							children: /* @__PURE__ */ (0, y.jsx)(U, { name: "heart" })
						}),
						/* @__PURE__ */ (0, y.jsx)("button", {
							"aria-label": "Your fitting room",
							onClick: () => n("profile"),
							children: /* @__PURE__ */ (0, y.jsx)(U, { name: "user" })
						}),
						/* @__PURE__ */ (0, y.jsxs)("button", {
							"aria-label": `Shopping bag ${r} items`,
							onClick: () => n("bag"),
							children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "bag" }), r > 0 && /* @__PURE__ */ (0, y.jsx)("sup", { children: r })]
						})
					]
				})
			]
		}),
		e === "thg" && /* @__PURE__ */ (0, y.jsx)("p", {
			className: "hinton-subtitle",
			children: "a full service brand strategy agency · a curated partner concept"
		})
	] });
}
function ou({ name: e, onClick: t }) {
	return /* @__PURE__ */ (0, y.jsxs)("button", {
		className: "ch-try-seal",
		"aria-label": "Try on " + e,
		onClick: t,
		children: [/* @__PURE__ */ (0, y.jsx)("img", {
			src: "./assets/c804a8dedead1e6d.svg",
			alt: ""
		}), /* @__PURE__ */ (0, y.jsx)("span", { children: "TRY ON" })]
	});
}
function su({ g: e, wished: t, toggleWish: n, compare: r, picked: i, onAction: a }) {
	return /* @__PURE__ */ (0, y.jsxs)("article", {
		className: "retail-card",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-card-photo",
				children: [
					/* @__PURE__ */ (0, y.jsx)("span", {
						className: "ch-runway",
						children: "STYLE DU DÉFILÉ"
					}),
					/* @__PURE__ */ (0, y.jsx)(On, {
						to: "/product/" + e.id,
						"aria-label": "View " + e.name,
						children: /* @__PURE__ */ (0, y.jsx)("img", {
							src: e.gallery?.[0] || e.model,
							alt: e.name
						})
					}),
					/* @__PURE__ */ (0, y.jsx)("button", {
						className: "retail-card-heart",
						"aria-label": (t ? "Remove from" : "Add to") + " favorites: " + e.name,
						"aria-pressed": t,
						onClick: n,
						children: /* @__PURE__ */ (0, y.jsx)(U, { name: "heart" })
					}),
					/* @__PURE__ */ (0, y.jsx)(ou, {
						name: e.name,
						onClick: () => a?.("vto")
					})
				]
			}),
			/* @__PURE__ */ (0, y.jsx)(On, {
				to: "/product/" + e.id,
				children: /* @__PURE__ */ (0, y.jsx)("h3", { children: e.name })
			}),
			/* @__PURE__ */ (0, y.jsx)("p", { children: e.priceLabel }),
			/* @__PURE__ */ (0, y.jsx)("small", { children: window.PARTNER_DEMO?.theme === "ch" ? "1 couleur" : e.color }),
			/* @__PURE__ */ (0, y.jsxs)("button", {
				className: "ch-card-compare",
				"aria-label": "Compare on you: " + e.name,
				onClick: r,
				children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "compare" }), /* @__PURE__ */ (0, y.jsx)("span", { children: "Compare on you" })]
			})
		]
	});
}
function cu({ g: e, onZoom: t }) {
	let [n, r] = (0, d.useState)(0);
	(0, d.useEffect)(() => r(0), [e.id]);
	let i = e.gallery?.length ? e.gallery : [e.model];
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "retail-gallery",
		children: [
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "retail-thumbs",
				children: i.map((e, t) => /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-label": "View image " + (t + 1),
					"aria-pressed": t === n,
					onClick: () => r(t),
					children: /* @__PURE__ */ (0, y.jsx)("img", {
						src: e,
						alt: ""
					})
				}, e))
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-photo-main",
				children: [/* @__PURE__ */ (0, y.jsxs)("button", {
					"aria-label": "Enlarge " + e.name + " image " + (n + 1),
					onClick: () => t(n),
					children: [/* @__PURE__ */ (0, y.jsx)("img", {
						src: i[n],
						alt: e.name + " — image " + (n + 1)
					}), /* @__PURE__ */ (0, y.jsx)("span", {
						className: "retail-zoom-label",
						children: "＋"
					})]
				}), /* @__PURE__ */ (0, y.jsxs)("div", {
					className: "retail-photo-controls",
					children: [
						/* @__PURE__ */ (0, y.jsx)("button", {
							"aria-label": "Previous image",
							onClick: () => r((n + i.length - 1) % i.length),
							children: "Previous"
						}),
						/* @__PURE__ */ (0, y.jsxs)("span", { children: [
							n + 1,
							" / ",
							i.length
						] }),
						/* @__PURE__ */ (0, y.jsx)("button", {
							"aria-label": "Next image",
							onClick: () => r((n + 1) % i.length),
							children: "Next"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "retail-gallery-grid",
				children: i.slice(1).map((n, r) => /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-label": "Enlarge image " + (r + 2),
					onClick: () => t(r + 1),
					children: /* @__PURE__ */ (0, y.jsx)("img", {
						src: n,
						alt: e.name + " — image " + (r + 2),
						loading: "lazy"
					})
				}, n))
			})
		]
	});
}
function lu({ g: e, theme: t, size: n, onSize: r, onPanel: i, onBag: a, wished: o, onWish: s, picked: c, onCompare: l }) {
	let [u, f] = (0, d.useState)(1), [p, m] = (0, d.useState)("Description"), [h, g] = (0, d.useState)(!1);
	(0, d.useEffect)(() => {
		f(1), g(!1), m("Description");
	}, [e.id]);
	let _ = () => {
		if (!n) {
			g(!0);
			return;
		}
		a(u);
	}, v = e.availableSizes?.length ? e.availableSizes : e.sizes;
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: "retail-product-form",
		children: [
			/* @__PURE__ */ (0, y.jsx)("small", {
				className: "retail-label",
				children: e.source?.[0]
			}),
			/* @__PURE__ */ (0, y.jsx)("h1", { children: e.name.split(" - ")[0] }),
			/* @__PURE__ */ (0, y.jsx)("p", {
				className: "retail-price",
				children: e.priceLabel
			}),
			(t === "cg" || t === "sh") && /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-description",
				children: [/* @__PURE__ */ (0, y.jsx)("p", { children: e.description }), e.facts?.length ? /* @__PURE__ */ (0, y.jsx)("ul", { children: e.facts.map((e, t) => /* @__PURE__ */ (0, y.jsx)("li", { children: e }, t)) }) : null]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-color",
				children: [/* @__PURE__ */ (0, y.jsxs)("span", { children: ["COLOR ", /* @__PURE__ */ (0, y.jsx)("b", { children: e.color })] }), /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-label": "Selected color " + e.color,
					"aria-pressed": "true",
					children: /* @__PURE__ */ (0, y.jsx)("img", {
						src: e.model,
						alt: e.color
					})
				})]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-size-heading",
				children: [/* @__PURE__ */ (0, y.jsxs)("span", { children: ["SIZE ", n && /* @__PURE__ */ (0, y.jsx)("b", { children: n })] }), /* @__PURE__ */ (0, y.jsx)("button", {
					onClick: () => i("guide"),
					children: "Size Guide"
				})]
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "retail-size-options",
				children: e.sizes.map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
					disabled: !v.includes(e),
					"aria-label": "Select size " + e,
					"aria-pressed": n === e,
					onClick: () => {
						r(e), g(!1);
					},
					children: e
				}, e))
			}),
			h && /* @__PURE__ */ (0, y.jsx)("p", {
				className: "retail-warning",
				role: "alert",
				children: "Please select a size."
			}),
			t === "sh" && /* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-quantity",
				children: [
					/* @__PURE__ */ (0, y.jsx)("button", {
						"aria-label": "Decrease quantity",
						onClick: () => f((e) => Math.max(1, e - 1)),
						children: "−"
					}),
					/* @__PURE__ */ (0, y.jsx)("span", { children: u }),
					/* @__PURE__ */ (0, y.jsx)("button", {
						"aria-label": "Increase quantity",
						onClick: () => f((e) => e + 1),
						children: "＋"
					})
				]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-buy",
				children: [
					/* @__PURE__ */ (0, y.jsx)("button", {
						className: "retail-add",
						onClick: _,
						children: t === "ao" && !n ? "CHOOSE SIZE" : "ADD TO " + (t === "sh" ? "CART" : "BAG")
					}),
					t === "mk" && /* @__PURE__ */ (0, y.jsx)("button", {
						className: "retail-buy-now",
						onClick: _,
						children: "BUY NOW"
					}),
					/* @__PURE__ */ (0, y.jsx)("button", {
						className: "retail-wish",
						"aria-label": "Save product to favorites",
						"aria-pressed": o,
						onClick: s,
						children: /* @__PURE__ */ (0, y.jsx)(U, { name: "heart" })
					})
				]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-spree",
				children: [
					/* @__PURE__ */ (0, y.jsxs)("button", {
						className: "retail-try",
						disabled: e.previewAvailable === !1,
						onClick: () => i("vto"),
						children: [
							/* @__PURE__ */ (0, y.jsx)("span", {
								className: "retail-emblem",
								children: t === "ch" ? /* @__PURE__ */ (0, y.jsx)("img", {
									className: "ch-button-logo",
									src: "./assets/c804a8dedead1e6d.svg",
									alt: "Carolina Herrera"
								}) : t === "kitsune" ? /* @__PURE__ */ (0, y.jsx)("img", {
									src: "./assets/maison-fox.svg",
									alt: ""
								}) : t === "ao" ? "a+o" : t === "cg" ? "CG" : t === "sh" ? "SH" : t === "mk" ? "MK" : "THG"
							}),
							/* @__PURE__ */ (0, y.jsx)("span", { children: e.previewAvailable === !1 ? "Try-on in preparation" : "Try on" }),
							t !== "ch" && /* @__PURE__ */ (0, y.jsx)("span", {})
						]
					}),
					t === "ch" ? /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "ch-product-actions",
						children: [
							/* @__PURE__ */ (0, y.jsxs)("button", {
								disabled: e.previewAvailable === !1,
								onClick: l,
								children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "compare" }), /* @__PURE__ */ (0, y.jsx)("span", { children: "Compare on you" })]
							}),
							/* @__PURE__ */ (0, y.jsxs)("button", {
								disabled: e.previewAvailable === !1,
								onClick: () => i("look"),
								children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "plus" }), /* @__PURE__ */ (0, y.jsx)("span", { children: "Build a look" })]
							}),
							/* @__PURE__ */ (0, y.jsxs)("button", {
								onClick: () => i("size"),
								children: [/* @__PURE__ */ (0, y.jsx)("span", {
									className: "ch-size-icon",
									children: "cm"
								}), /* @__PURE__ */ (0, y.jsx)("span", { children: "Find my size" })]
							})
						]
					}) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("div", {
						className: "retail-spree-secondary",
						children: [/* @__PURE__ */ (0, y.jsx)("button", {
							onClick: () => i("size"),
							children: "Find my size"
						}), /* @__PURE__ */ (0, y.jsx)("button", {
							onClick: l,
							children: "Compare on you"
						})]
					}), /* @__PURE__ */ (0, y.jsx)("button", {
						className: "retail-look-trigger",
						onClick: () => i("look"),
						children: "Build a look"
					})] }),
					/* @__PURE__ */ (0, y.jsx)("small", { children: "YOUR PERSONAL FITTING ROOM · POWERED BY SPREEAI" })
				]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "retail-details",
				children: [
					t === "ao" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("div", {
						className: "retail-detail-tabs",
						children: [
							"Description",
							"Fit",
							"Details"
						].map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
							"aria-pressed": p === e,
							onClick: () => m(e),
							children: e
						}, e))
					}), p === "Description" ? /* @__PURE__ */ (0, y.jsx)("p", { children: e.description }) : p === "Fit" ? /* @__PURE__ */ (0, y.jsx)("ul", { children: e.fitNotes?.map((e, t) => /* @__PURE__ */ (0, y.jsx)("li", { children: e }, t)) }) : /* @__PURE__ */ (0, y.jsx)("ul", { children: e.facts?.length ? e.facts.map((e, t) => /* @__PURE__ */ (0, y.jsx)("li", { children: e }, t)) : /* @__PURE__ */ (0, y.jsx)("li", { children: /* @__PURE__ */ (0, y.jsx)("a", {
						href: e.retailerUrl,
						target: "_blank",
						rel: "noreferrer",
						children: "View composition and care on the official product "
					}) }) })] }) : /* @__PURE__ */ (0, y.jsxs)("details", { children: [
						/* @__PURE__ */ (0, y.jsx)("summary", { children: t === "mk" ? "PRODUCT DETAILS" : "COMPOSITION & CARE" }),
						/* @__PURE__ */ (0, y.jsx)("p", { children: e.description }),
						/* @__PURE__ */ (0, y.jsx)("ul", { children: e.facts?.map((e, t) => /* @__PURE__ */ (0, y.jsx)("li", { children: e }, t)) })
					] }),
					/* @__PURE__ */ (0, y.jsxs)("details", { children: [
						/* @__PURE__ */ (0, y.jsx)("summary", { children: t === "cg" ? "SIZE & FIT NOTES" : "SIZE & FIT" }),
						/* @__PURE__ */ (0, y.jsxs)("p", { children: [
							"Product sizes: ",
							e.sizes.join(", "),
							". Availability shown here reflects the product snapshot used for this concept."
						] }),
						/* @__PURE__ */ (0, y.jsx)("button", {
							className: "retail-inline",
							onClick: () => i("size"),
							children: "Explore your fit with SPREEAI "
						})
					] }),
					/* @__PURE__ */ (0, y.jsxs)("details", { children: [
						/* @__PURE__ */ (0, y.jsx)("summary", { children: "SHIPPING & RETURNS" }),
						/* @__PURE__ */ (0, y.jsx)("p", { children: "This is an independent preview. Delivery, payment, returns and live stock are handled by the brand." }),
						/* @__PURE__ */ (0, y.jsx)("a", {
							href: e.retailerUrl,
							target: "_blank",
							rel: "noreferrer",
							children: "View the official product and current terms "
						})
					] })
				]
			})
		]
	});
}
function uu({ g: e, onZoom: t }) {
	return window.PARTNER_DEMO?.theme === "ch" ? /* @__PURE__ */ (0, y.jsx)(du, {
		g: e,
		onZoom: t
	}) : /* @__PURE__ */ (0, y.jsx)(cu, {
		g: e,
		onZoom: t
	});
}
function du({ g: e, onZoom: t }) {
	let [n, r] = (0, d.useState)(0), [i, a] = (0, d.useState)(!1);
	(0, d.useEffect)(() => {
		r(0), a(!1);
	}, [e.id]);
	let o = e.gallery?.length ? e.gallery : [e.model], s = [
		{
			src: o[0],
			photo: 0,
			video: !1
		},
		...e.video ? [{
			src: e.video,
			photo: 1,
			video: !0
		}] : [],
		...o.slice(1).map((e, t) => ({
			src: e,
			photo: t + 1,
			video: !1
		}))
	];
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "ch-original-gallery",
		children: [/* @__PURE__ */ (0, y.jsx)("div", {
			className: "ch-original-media",
			children: [n, (n + 1) % s.length].map((n, r) => {
				let c = s[n];
				return /* @__PURE__ */ (0, y.jsx)("div", {
					className: "ch-original-slide",
					children: c.video ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("video", {
						"aria-label": e.name + " — original brand video",
						src: c.src,
						poster: o[1] || o[0],
						autoPlay: !i,
						muted: !0,
						loop: !0,
						playsInline: !0,
						preload: "auto",
						onCanPlay: (e) => {
							e.currentTarget.dataset.ready = "true";
						},
						ref: (e) => {
							e && (e.muted = !0, i ? e.pause() : e.play().catch(() => {}));
						}
					}), /* @__PURE__ */ (0, y.jsx)("button", {
						className: "ch-video-control",
						"aria-label": i ? "Play product video" : "Pause product video",
						onClick: () => a((e) => !e),
						children: i ? "Play" : "Pause"
					})] }) : /* @__PURE__ */ (0, y.jsx)("button", {
						className: "ch-original-photo",
						"aria-label": "Enlarge " + e.name + " image " + (c.photo + 1),
						onClick: () => t(c.photo),
						children: /* @__PURE__ */ (0, y.jsx)("img", {
							src: c.src,
							alt: e.name + " — image " + (c.photo + 1)
						})
					})
				}, e.id + ":" + n + ":" + r);
			})
		}), /* @__PURE__ */ (0, y.jsxs)("div", {
			className: "ch-original-thumbnails",
			"aria-label": "Product gallery",
			children: [s.map((e, t) => /* @__PURE__ */ (0, y.jsx)("button", {
				"aria-label": e.video ? "View product video" : "View image " + (e.photo + 1),
				"aria-pressed": n === t,
				onClick: () => r(t),
				children: e.video ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("img", {
					src: o[1] || o[0],
					alt: ""
				}), /* @__PURE__ */ (0, y.jsx)("span", { children: "Play" })] }) : /* @__PURE__ */ (0, y.jsx)("img", {
					src: e.src,
					alt: ""
				})
			}, t)), /* @__PURE__ */ (0, y.jsx)("button", {
				className: "ch-gallery-enlarge",
				"aria-label": "Enlarge current product image",
				onClick: () => t(s[n].video ? 1 : s[n].photo),
				children: "＋"
			})]
		})]
	});
}
function fu(e) {
	return e.theme === "ch" ? /* @__PURE__ */ (0, y.jsx)(pu, { ...e }) : /* @__PURE__ */ (0, y.jsx)(lu, { ...e });
}
function pu({ g: e, size: t, onSize: n, onPanel: r, onBag: i, wished: a, onWish: o, onCompare: s }) {
	let [c, l] = (0, d.useState)(!1), u = (0, d.useRef)(null);
	return (0, d.useEffect)(() => l(!1), [e.id]), (0, d.useEffect)(() => {
		let e = u.current;
		if (!e) return;
		let t = () => e.style.setProperty("--ch-purchase-height", e.offsetHeight + "px");
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [e.id]), /* @__PURE__ */ (0, y.jsxs)("section", {
		ref: u,
		className: "ch-original-purchase",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-original-title",
				children: [/* @__PURE__ */ (0, y.jsx)("h1", { children: e.name }), /* @__PURE__ */ (0, y.jsx)("p", { children: e.priceLabel })]
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-original-color",
				children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "Couleur:" }), /* @__PURE__ */ (0, y.jsx)("span", { children: e.color })]
			}),
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "ch-color-swatch",
				"aria-label": "Selected color " + e.color,
				"aria-pressed": "true",
				children: /* @__PURE__ */ (0, y.jsx)("span", { style: { background: e.color.toLowerCase().includes("blanc") ? "linear-gradient(135deg,#111 50%,#eee 50%)" : "#111" } })
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-original-size-heading",
				children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "Tailles:" }), /* @__PURE__ */ (0, y.jsx)("button", {
					onClick: () => r("guide"),
					children: "Guide des tailles"
				})]
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "ch-original-sizes",
				children: e.sizes.map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-label": "Select size " + e,
					"aria-pressed": t === e,
					onClick: () => {
						n(e), l(!1);
					},
					children: e
				}, e))
			}),
			c && /* @__PURE__ */ (0, y.jsx)("p", {
				role: "alert",
				className: "retail-warning",
				children: "Choisissez une taille."
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "ch-size-assistance",
				children: /* @__PURE__ */ (0, y.jsxs)("button", {
					onClick: () => r("size"),
					children: [/* @__PURE__ */ (0, y.jsx)("span", {
						className: "ch-size-icon",
						children: "cm"
					}), /* @__PURE__ */ (0, y.jsx)("span", { children: "Find my size" })]
				})
			}),
			/* @__PURE__ */ (0, y.jsx)("button", {
				className: "ch-original-add",
				onClick: () => {
					if (!t) {
						l(!0);
						return;
					}
					i(1);
				},
				children: "AJOUTER AU PANIER"
			}),
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-integrated-spree",
				children: [/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "ch-integrated-main",
					children: [/* @__PURE__ */ (0, y.jsxs)("button", {
						className: "ch-pdp-try",
						onClick: () => r("vto"),
						children: [/* @__PURE__ */ (0, y.jsx)("img", {
							src: "./assets/c804a8dedead1e6d.svg",
							alt: "Carolina Herrera"
						}), /* @__PURE__ */ (0, y.jsx)("span", { children: "TRY ON" })]
					}), /* @__PURE__ */ (0, y.jsx)("button", {
						className: "ch-pdp-favorite",
						"aria-label": "Save product to favorites",
						"aria-pressed": a,
						onClick: o,
						children: /* @__PURE__ */ (0, y.jsx)(U, { name: "heart" })
					})]
				}), /* @__PURE__ */ (0, y.jsxs)("div", {
					className: "ch-integrated-links",
					children: [/* @__PURE__ */ (0, y.jsxs)("button", {
						onClick: s,
						children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "compare" }), /* @__PURE__ */ (0, y.jsx)("span", { children: "Compare" })]
					}), /* @__PURE__ */ (0, y.jsxs)("button", {
						onClick: () => r("look"),
						children: [/* @__PURE__ */ (0, y.jsx)(U, { name: "plus" }), /* @__PURE__ */ (0, y.jsx)("span", { children: "Build a look" })]
					})]
				})]
			})
		]
	});
}
function mu({ g: e }) {
	let [t, n] = (0, d.useState)("DÉTAILS DU PRODUIT");
	return /* @__PURE__ */ (0, y.jsxs)("section", {
		className: "ch-original-details",
		children: [
			/* @__PURE__ */ (0, y.jsxs)("div", {
				className: "ch-original-perks",
				children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "Offre de bienvenue" }), /* @__PURE__ */ (0, y.jsx)("span", { children: "Livraison gratuite" })]
			}),
			/* @__PURE__ */ (0, y.jsx)("nav", {
				"aria-label": "Product information",
				children: [
					"DÉTAILS DU PRODUIT",
					"COMPOSITION ET ENTRETIEN",
					"TAILLE ET COUPE"
				].map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
					"aria-pressed": t === e,
					onClick: () => n(e),
					children: e
				}, e))
			}),
			t === "DÉTAILS DU PRODUIT" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("p", { children: e.description }), /* @__PURE__ */ (0, y.jsxs)("small", { children: [
				"SKU",
				/* @__PURE__ */ (0, y.jsx)("br", {}),
				e.brandSku
			] })] }) : t === "COMPOSITION ET ENTRETIEN" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("ul", { children: e.facts?.map((e, t) => /* @__PURE__ */ (0, y.jsx)("li", { children: e }, t)) }), /* @__PURE__ */ (0, y.jsx)("a", {
				href: e.retailerUrl,
				target: "_blank",
				rel: "noreferrer",
				children: "Composition et entretien sur le site Carolina Herrera"
			})] }) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("p", { children: ["Tailles US : ", e.sizes.join(", ")] }), /* @__PURE__ */ (0, y.jsx)("a", {
				href: e.retailerUrl,
				target: "_blank",
				rel: "noreferrer",
				children: "Taille et coupe sur le site Carolina Herrera"
			})] })
		]
	});
}
//#endregion
//#region src/partner-demo/main.tsx
var G = window.PARTNER_DEMO, hu = Bl;
function gu(e, t) {
	try {
		return JSON.parse(localStorage.getItem(G.slug + e) || "null") ?? t;
	} catch {
		return t;
	}
}
function _u() {
	let [e, t] = (0, d.useState)(1), [n, r] = (0, d.useState)(""), [i, a] = (0, d.useState)(""), [o, s] = (0, d.useState)(0), [c, l] = (0, d.useState)([]), [u, f] = (0, d.useState)({}), [p, m] = (0, d.useState)(() => gu("wishlist", [])), [h, g] = (0, d.useState)(() => gu("bag", [])), [_, v] = (0, d.useState)(""), [b, S] = (0, d.useState)("All"), [C, w] = (0, d.useState)("All"), [T, ee] = (0, d.useState)("All"), [E, D] = (0, d.useState)("Featured"), [O, te] = (0, d.useState)(0), [k, ne] = (0, d.useState)("/"), [re, A] = (0, d.useState)("vto"), [ie, ae] = (0, d.useState)(!1), [oe, se] = (0, d.useState)(""), { identity: ce } = _r(), le = yt(), j = St(), ue = le.pathname.startsWith("/product/") ? le.pathname.split("/")[2] : "", de = hu.find((e) => e.id === ue), M = hu[o], fe = u[M.id] || "";
	(0, d.useEffect)(() => {
		le.pathname === "/account" ? r("profile") : (ne(le.pathname), window.scrollTo(0, 0)), de && s(hu.findIndex((e) => e.id === de.id));
	}, [le.pathname]), (0, d.useEffect)(() => {
		[
			"vto",
			"size",
			"compare",
			"look"
		].includes(n) && A(n);
	}, [n]), (0, d.useEffect)(() => {
		localStorage.setItem(G.slug + "wishlist", JSON.stringify(p));
	}, [p]), (0, d.useEffect)(() => {
		localStorage.setItem(G.slug + "bag", JSON.stringify(h));
	}, [h]);
	let pe = (e) => f((t) => ({
		...t,
		[M.id]: e
	}));
	function me() {
		r(""), le.pathname === "/account" && j(k);
	}
	function he(e) {
		l((t) => t.includes(e) ? t.filter((t) => t !== e) : t.length < 3 ? [...t, e] : t);
	}
	function N(e) {
		m((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}
	function P(e) {
		[
			"vto",
			"size",
			"compare",
			"look"
		].includes(e) && A(e), [
			"profile",
			"vto",
			"size",
			"compare",
			"look"
		].includes(e) ? r(e === "vto" && !ce ? "profile" : e) : a(e);
	}
	(0, d.useEffect)(() => {
		if (ce) {
			ae(!1);
			return;
		}
		if (![
			"vto",
			"compare",
			"look"
		].includes(n)) return;
		let e = !0;
		return ae(!0), se(""), Or().then((t) => {
			if (!e) return;
			let n = (G.theme === "kitsune" ? t.find((e) => e.name === "Lucas") : null) || t.find((e) => e.name === "Isabella") || t.find((e) => e.sex === "F") || t[0];
			if (!n) throw Error("No demo models are available.");
			br(kr(n));
		}).catch((t) => {
			e && se(t.message || "Unable to connect to the live fitting room.");
		}).finally(() => {
			e && ae(!1);
		}), () => {
			e = !1;
		};
	}, [n, ce?.id]);
	function ge(e) {
		l((t) => {
			let n = t.includes(e) ? t : [e, ...t].slice(0, 3), r = hu.find((t) => t.id !== e && t.previewAvailable !== !1 && !n.includes(t.id));
			return n.length < 2 && r ? [...n, r.id] : n;
		}), P("compare");
	}
	function _e(e) {
		g((t) => {
			let n = t.find((e) => e.id === M.id && e.size === fe);
			return n ? t.map((t) => t === n ? {
				...t,
				quantity: t.quantity + e
			} : t) : [...t, {
				id: M.id,
				size: fe,
				quantity: e
			}];
		}), a("bag");
	}
	function ve(e) {
		if (G.theme === "ch") {
			if (e === "MODE") {
				ee("All"), j("/");
				return;
			}
			a("menu");
			return;
		}
		if (G.theme === "kitsune") {
			if (e === "NEW IN" || e === "ICONICS") {
				w(e === "NEW IN" ? "FW26" : "ICONICS"), j("/");
				return;
			}
			if (e === "MEN") {
				w("All"), j("/");
				return;
			}
			window.open("https://maisonkitsune.com/fr/" + (e === "WOMEN" ? "woman.html" : e === "ACCESSORIES" ? "accessories-mk.html" : "kitsune-insider"), "_blank", "noopener");
			return;
		}
		ee(e === "DRESSES" ? "Dresses" : "All"), a(""), j("/");
	}
	let ye = hu.filter((e) => (T === "All" || e.category === T) && (G.theme !== "kitsune" || (b === "All" || e.fit === b) && (C === "All" || e.collection === C)) && (!_ || e.name.toLowerCase().includes(_.toLowerCase())));
	E === "Price: low to high" && (ye = [...ye].sort((e, t) => e.price - t.price)), E === "Price: high to low" && (ye = [...ye].sort((e, t) => t.price - e.price));
	let be = (e) => /* @__PURE__ */ (0, y.jsx)(su, {
		g: e,
		wished: p.includes(e.id),
		toggleWish: () => N(e.id),
		compare: () => {
			s(hu.findIndex((t) => t.id === e.id)), ge(e.id);
		},
		picked: c.includes(e.id),
		onAction: (t) => {
			s(hu.findIndex((t) => t.id === e.id)), P(t);
		}
	}, e.id);
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: `partner-page retail-page ${G.theme} ${de && G.theme === "ch" ? "ch-product-page" : ""}`,
		children: [
			/* @__PURE__ */ (0, y.jsx)(W, {
				theme: G.theme,
				brand: G.brand,
				onPanel: P,
				count: h.reduce((e, t) => e + t.quantity, 0),
				onNav: ve
			}),
			/* @__PURE__ */ (0, y.jsxs)("main", { children: [!de && G.theme === "ch" && /* @__PURE__ */ (0, y.jsx)("div", {
				className: "ch-hero",
				children: /* @__PURE__ */ (0, y.jsx)("img", {
					src: "./assets/5d70fbbb2227e4d3.jpg",
					alt: "Collection Carolina Herrera"
				})
			}), de ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
				/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "retail-breadcrumb",
					children: [
						/* @__PURE__ */ (0, y.jsx)(On, {
							to: "/",
							children: "Home"
						}),
						/* @__PURE__ */ (0, y.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, y.jsx)(On, {
							to: "/",
							children: de.category
						}),
						/* @__PURE__ */ (0, y.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, y.jsx)("span", { children: de.name.split(" - ")[0] })
					]
				}),
				/* @__PURE__ */ (0, y.jsxs)("div", {
					className: "retail-pdp",
					children: [/* @__PURE__ */ (0, y.jsx)(uu, {
						g: de,
						onZoom: (e) => {
							te(e), t(1), a("zoom");
						}
					}), /* @__PURE__ */ (0, y.jsx)(fu, {
						g: de,
						theme: G.theme,
						size: u[de.id] || "",
						onSize: (e) => f((t) => ({
							...t,
							[de.id]: e
						})),
						onPanel: P,
						onBag: _e,
						wished: p.includes(de.id),
						onWish: () => N(de.id),
						picked: c.includes(de.id),
						onCompare: () => ge(de.id)
					})]
				}),
				G.theme === "ch" && /* @__PURE__ */ (0, y.jsx)(mu, { g: de }),
				/* @__PURE__ */ (0, y.jsxs)("section", {
					className: "retail-related",
					children: [/* @__PURE__ */ (0, y.jsx)("h2", { children: G.theme === "sh" ? "RELATED PRODUCTS" : G.theme === "ch" ? "Compléter la silhouette." : "YOU MAY ALSO LIKE" }), /* @__PURE__ */ (0, y.jsx)("div", {
						className: "retail-grid",
						children: hu.filter((e) => e.id !== de.id).map(be)
					})]
				})
			] }) : /* @__PURE__ */ (0, y.jsxs)("section", {
				className: "retail-collection",
				children: [
					G.theme === "kitsune" && /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("div", {
						className: "kitsune-hero",
						children: [/* @__PURE__ */ (0, y.jsx)("img", {
							src: "./assets/iconics-hero.png",
							alt: "Maison Kitsuné ICONICS"
						}), /* @__PURE__ */ (0, y.jsxs)("div", { children: [
							/* @__PURE__ */ (0, y.jsx)("h2", { children: "LES ICONIQUES" }),
							/* @__PURE__ */ (0, y.jsx)("p", { children: "Comfort. Regular. Oversize." }),
							/* @__PURE__ */ (0, y.jsx)("a", {
								href: "https://maisonkitsune.com/fr/fit-maison-kitsune",
								target: "_blank",
								rel: "noreferrer",
								children: "EXPLORE THE FIT GUIDE "
							})
						] })]
					}), /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "kitsune-edit-filters",
						children: [[
							"All",
							"ICONICS",
							"FW26"
						].map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
							"aria-pressed": C === e,
							onClick: () => w(e),
							children: e === "All" ? "THE COMPLETE EDIT" : e
						}, e)), [
							"All",
							"comfort",
							"regular",
							"oversize"
						].map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
							"aria-pressed": b === e,
							onClick: () => S(e),
							children: e === "All" ? "ALL FITS" : e.toUpperCase()
						}, e))]
					})] }),
					/* @__PURE__ */ (0, y.jsxs)("div", {
						className: "retail-collection-heading",
						children: [
							/* @__PURE__ */ (0, y.jsx)("small", { children: G.theme === "ch" ? "" : G.theme === "thg" ? "CURATED FOR NATE HINTON" : "THE CURRENT COLLECTION" }),
							/* @__PURE__ */ (0, y.jsx)("h1", { children: G.theme === "ch" ? G.heading : G.theme === "kitsune" ? "FW26 & LES ICONIQUES" : G.theme === "cg" ? "The Edit" : G.theme === "thg" ? "A personal perspective." : G.theme === "sh" ? "READY-TO-WEAR" : "Dresses" }),
							G.theme === "ch" && /* @__PURE__ */ (0, y.jsx)("p", { children: G.intro }),
							G.theme === "thg" && /* @__PURE__ */ (0, y.jsx)("p", { children: "A selected edit from Alice + Olivia, Cult Gaia and Sergio Hudson. A concept for discussion, without implying client relationships or a Hinton retail store." })
						]
					}),
					/* @__PURE__ */ (0, y.jsxs)("div", {
						className: "retail-collection-controls",
						children: [
							/* @__PURE__ */ (0, y.jsxs)("span", {
								className: "ch-count",
								children: [
									"Filtre · ",
									ye.length,
									" Produits"
								]
							}),
							/* @__PURE__ */ (0, y.jsx)("div", { children: ["All", ...new Set(hu.map((e) => e.category))].map((e) => /* @__PURE__ */ (0, y.jsx)("button", {
								"aria-pressed": T === e,
								onClick: () => ee(e),
								children: e === "All" ? "All pieces" : e
							}, e)) }),
							/* @__PURE__ */ (0, y.jsxs)("label", { children: ["Sort ", /* @__PURE__ */ (0, y.jsx)("select", {
								"aria-label": "Sort products",
								value: E,
								onChange: (e) => D(e.target.value),
								children: [
									"Featured",
									"Price: low to high",
									"Price: high to low"
								].map((e) => /* @__PURE__ */ (0, y.jsx)("option", { children: e }, e))
							})] })
						]
					}),
					/* @__PURE__ */ (0, y.jsx)("div", {
						className: "retail-grid",
						children: ye.map(be)
					})
				]
			})] }),
			c.length > 0 && /* @__PURE__ */ (0, y.jsxs)("aside", {
				className: "retail-compare-tray",
				children: [
					/* @__PURE__ */ (0, y.jsxs)("span", { children: [c.length, " / 3 pieces selected"] }),
					/* @__PURE__ */ (0, y.jsx)("div", { children: c.map((e) => /* @__PURE__ */ (0, y.jsxs)("button", {
						"aria-label": "Remove " + hu.find((t) => t.id === e).name,
						onClick: () => he(e),
						children: [/* @__PURE__ */ (0, y.jsx)("img", {
							src: hu.find((t) => t.id === e).model,
							alt: ""
						}), "×"]
					}, e)) }),
					/* @__PURE__ */ (0, y.jsx)("button", {
						disabled: c.length < 2,
						onClick: () => r("compare"),
						children: "COMPARE ON YOU "
					})
				]
			}),
			/* @__PURE__ */ (0, y.jsxs)("footer", {
				className: "retail-footer",
				children: [
					/* @__PURE__ */ (0, y.jsx)("strong", { children: G.theme === "ch" ? /* @__PURE__ */ (0, y.jsx)("img", {
						className: "ch-footer-logo",
						src: "./assets/c804a8dedead1e6d.svg",
						alt: "Carolina Herrera"
					}) : G.brand }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: "INDEPENDENT CONCEPT · POWERED BY SPREEAI" }),
					/* @__PURE__ */ (0, y.jsx)("p", { children: "Product photographs and names belong to their brands. Shopping bag interactions are a local preview; no orders or payments are collected. AI previews may vary. SPREEAI staging access may require VPN. Sizing recommendations are clearly labeled simulations; calibrated garment sizing is unavailable. Live try-on depends on garment processing and staging connectivity. Size visualization uses labeled image simulations." }),
					/* @__PURE__ */ (0, y.jsx)(On, {
						to: "/",
						children: "Explore the collection"
					}),
					/* @__PURE__ */ (0, y.jsx)("button", {
						onClick: () => r("profile"),
						children: "Your fitting room"
					})
				]
			}),
			/* @__PURE__ */ (0, y.jsx)(oc, {
				open: !!n,
				onOpenChange: (e) => {
					e || me();
				},
				children: /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "partner-overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
					className: "partner-dialog " + (G.theme === "ch" ? "ch-fitting-room" : ""),
					children: [/* @__PURE__ */ (0, y.jsxs)("header", {
						className: "partner-dialog-head",
						children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsxs)(Cc, { children: [
							G.brand,
							" / ",
							n === "profile" ? "Your fitting room" : n === "compare" ? "Compare looks" : n === "look" ? "Build a look" : M.name
						] }), /* @__PURE__ */ (0, y.jsx)(Tc, { children: "Your personal perspective, throughout the edit." })] }), /* @__PURE__ */ (0, y.jsx)(Dc, {
							"aria-label": "Close fitting room",
							children: "×"
						})]
					}), /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "partner-dialog-body",
						children: [n !== "profile" && /* @__PURE__ */ (0, y.jsx)("div", {
							className: "partner-connection-status",
							children: ie ? "Connecting your live demo model…" : ce ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("span", { children: [
								"Viewing on ",
								ce.name,
								" · SPREEAI model"
							] }), /* @__PURE__ */ (0, y.jsx)("button", {
								onClick: () => {
									A(n), r("profile");
								},
								children: "Change model / add my photo"
							})] }) : oe ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("p", {
								role: "alert",
								children: [oe, " Live previews require a connection to SPREEAI staging."]
							}), /* @__PURE__ */ (0, y.jsx)("button", {
								onClick: () => {
									A(n), r("profile");
								},
								children: "Choose a model or photo"
							})] }) : null
						}), n === "profile" ? /* @__PURE__ */ (0, y.jsx)(Nl, {
							initialSource: ce?.kind === "twin" ? "twin" : "photo",
							savedLooks: /* @__PURE__ */ (0, y.jsx)(Hl, {
								product: M,
								selectedSize: fe,
								onSize: pe,
								onBag: (e) => {
									g((t) => [...t, ...e.map((e) => ({
										...e,
										quantity: 1
									}))]), r(""), a("bag");
								}
							}),
							onDone: () => {
								j(k), r(re);
							}
						}) : n === "look" ? /* @__PURE__ */ (0, y.jsx)(Hl, {
							product: M,
							selectedSize: fe,
							onSize: pe,
							onBag: (e) => {
								g((t) => [...t, ...e.map((e) => ({
									...e,
									quantity: 1
								}))]), r(""), a("bag");
							}
						}) : n === "compare" ? /* @__PURE__ */ (0, y.jsx)(au, {
							initial: c,
							onChange: l,
							product: M,
							selectedSize: fe,
							onSize: pe
						}) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsxs)("nav", {
							className: "partner-tabs",
							children: [
								/* @__PURE__ */ (0, y.jsx)("button", {
									"aria-pressed": n === "vto",
									onClick: () => r("vto"),
									children: "Try it on"
								}),
								/* @__PURE__ */ (0, y.jsx)("button", {
									"aria-pressed": n === "size",
									onClick: () => r("size"),
									children: "Find my size"
								}),
								/* @__PURE__ */ (0, y.jsx)("button", {
									onClick: () => ge(M.id),
									children: "Compare on you"
								}),
								/* @__PURE__ */ (0, y.jsx)("button", {
									onClick: () => r("look"),
									children: "Build a look"
								})
							]
						}), n === "size" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
							/* @__PURE__ */ (0, y.jsx)(Ul, {
								product: M,
								size: fe,
								onSize: pe
							}),
							G.theme === "ch" && /* @__PURE__ */ (0, y.jsx)(Ii, {
								product: M,
								size: fe,
								onSize: pe
							}, M.id),
							/* @__PURE__ */ (0, y.jsx)(Ql, {
								product: M,
								size: fe,
								onSize: pe
							}),
							G.theme !== "ch" && /* @__PURE__ */ (0, y.jsx)(nu, {
								product: M,
								selected: fe,
								onSize: pe
							})
						] }) : /* @__PURE__ */ (0, y.jsxs)("div", {
							className: "partner-product-view",
							children: [/* @__PURE__ */ (0, y.jsx)(Ni, {
								product: M,
								selectedSize: fe
							}), /* @__PURE__ */ (0, y.jsxs)("div", {
								className: "partner-product-copy",
								children: [
									/* @__PURE__ */ (0, y.jsx)("small", { children: "YOUR PERSPECTIVE" }),
									/* @__PURE__ */ (0, y.jsx)("h2", { children: M.name }),
									/* @__PURE__ */ (0, y.jsxs)("p", { children: [
										M.priceLabel,
										" / ",
										M.color
									] }),
									/* @__PURE__ */ (0, y.jsx)("p", { children: "See this piece on your photo or a Twin. Keep your favorites together and explore your fit." }),
									/* @__PURE__ */ (0, y.jsx)("button", {
										className: "primary",
										onClick: () => r("profile"),
										children: "Your profile"
									}),
									/* @__PURE__ */ (0, y.jsx)("button", {
										className: "secondary",
										onClick: () => r("size"),
										children: "Find my size "
									}),
									/* @__PURE__ */ (0, y.jsx)("button", {
										className: "secondary",
										onClick: () => ge(M.id),
										children: "Compare on you"
									}),
									/* @__PURE__ */ (0, y.jsx)("button", {
										className: "secondary",
										onClick: () => r("look"),
										children: "Build a look"
									}),
									/* @__PURE__ */ (0, y.jsx)("a", {
										href: M.retailerUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "View official product "
									})
								]
							})]
						})] })]
					})]
				})] })
			}),
			/* @__PURE__ */ (0, y.jsx)(oc, {
				open: !!i,
				onOpenChange: (e) => {
					e || a("");
				},
				children: /* @__PURE__ */ (0, y.jsxs)(fc, { children: [/* @__PURE__ */ (0, y.jsx)(mc, { className: "partner-overlay" }), /* @__PURE__ */ (0, y.jsxs)(vc, {
					className: "retail-drawer " + (i === "zoom" ? "retail-lightbox" : ""),
					children: [
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "retail-drawer-head",
							children: [/* @__PURE__ */ (0, y.jsx)(Cc, { children: i === "bag" ? "Your shopping bag" : i === "guide" ? "Size guide" : i === "zoom" ? M.name : i === "favorites" ? "Your favorites" : i === "search" ? "Search the edit" : "Explore the collection" }), /* @__PURE__ */ (0, y.jsx)(Dc, {
								"aria-label": "Close shopping panel",
								children: "×"
							})]
						}),
						/* @__PURE__ */ (0, y.jsx)(Tc, {
							className: "retail-drawer-caption",
							children: i === "bag" ? "A local shopping preview. Orders are placed only on the official brand website." : i === "guide" ? "Brand sizes and your personal fitting room." : i === "zoom" ? "Explore the product photographs." : hu.length + " current pieces, one personal perspective."
						}),
						i === "zoom" ? /* @__PURE__ */ (0, y.jsxs)("div", {
							className: "retail-lightbox-content",
							children: [
								/* @__PURE__ */ (0, y.jsxs)("label", {
									className: "ch-zoom",
									children: [
										"Zoom ",
										e.toFixed(1),
										"× ",
										/* @__PURE__ */ (0, y.jsx)("input", {
											"aria-label": "Image zoom",
											type: "range",
											min: "1",
											max: "3",
											step: "0.1",
											value: e,
											onChange: (e) => t(Number(e.target.value))
										}),
										/* @__PURE__ */ (0, y.jsx)("button", {
											onClick: () => t(1),
											children: "Réinitialiser"
										})
									]
								}),
								/* @__PURE__ */ (0, y.jsx)("div", {
									className: "ch-zoom-viewport",
									children: /* @__PURE__ */ (0, y.jsx)("img", {
										style: {
											transform: `scale(${e})`,
											transformOrigin: "center"
										},
										src: M.gallery?.[O] || M.model,
										alt: M.name + " image " + (O + 1)
									})
								}),
								/* @__PURE__ */ (0, y.jsxs)("div", { children: [
									/* @__PURE__ */ (0, y.jsx)("button", {
										"aria-label": "Previous enlarged image",
										onClick: () => te((e) => (e + (M.gallery?.length || 1) - 1) % (M.gallery?.length || 1)),
										children: "Previous"
									}),
									/* @__PURE__ */ (0, y.jsxs)("span", { children: [
										O + 1,
										" / ",
										M.gallery?.length || 1
									] }),
									/* @__PURE__ */ (0, y.jsx)("button", {
										"aria-label": "Next enlarged image",
										onClick: () => te((e) => (e + 1) % (M.gallery?.length || 1)),
										children: "Next"
									})
								] })
							]
						}) : i === "bag" ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
							h.length ? h.map((e, t) => {
								let n = hu.find((t) => t.id === e.id);
								return /* @__PURE__ */ (0, y.jsxs)("article", {
									className: "retail-bag-item",
									children: [/* @__PURE__ */ (0, y.jsx)("img", {
										src: n.model,
										alt: n.name
									}), /* @__PURE__ */ (0, y.jsxs)("div", { children: [
										/* @__PURE__ */ (0, y.jsx)("h3", { children: n.name }),
										/* @__PURE__ */ (0, y.jsxs)("p", { children: [
											n.color,
											" · Size ",
											e.size
										] }),
										/* @__PURE__ */ (0, y.jsx)("p", { children: n.priceLabel }),
										/* @__PURE__ */ (0, y.jsxs)("div", {
											className: "retail-quantity",
											children: [
												/* @__PURE__ */ (0, y.jsx)("button", {
													"aria-label": "Decrease bag quantity " + n.name,
													onClick: () => g((e) => e.map((e, n) => n === t ? {
														...e,
														quantity: Math.max(1, e.quantity - 1)
													} : e)),
													children: "−"
												}),
												/* @__PURE__ */ (0, y.jsx)("span", { children: e.quantity }),
												/* @__PURE__ */ (0, y.jsx)("button", {
													"aria-label": "Increase bag quantity " + n.name,
													onClick: () => g((e) => e.map((e, n) => n === t ? {
														...e,
														quantity: e.quantity + 1
													} : e)),
													children: "＋"
												})
											]
										}),
										/* @__PURE__ */ (0, y.jsx)("button", {
											className: "retail-inline",
											onClick: () => g((e) => e.filter((e, n) => t !== n)),
											children: "Remove"
										}),
										/* @__PURE__ */ (0, y.jsx)("a", {
											className: "retail-official",
											href: n.retailerUrl,
											target: "_blank",
											rel: "noreferrer",
											children: "Continue on official site "
										})
									] })]
								}, n.id + e.size);
							}) : /* @__PURE__ */ (0, y.jsx)("p", { children: "Your bag is empty. Explore the edit to find your piece." }),
							/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "retail-bag-total",
								children: [/* @__PURE__ */ (0, y.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, y.jsx)("strong", { children: new Intl.NumberFormat("en-US", {
									style: "currency",
									currency: G.products[0].currency || "USD"
								}).format(h.reduce((e, t) => e + hu.find((e) => e.id === t.id).price * t.quantity, 0)) })]
							}),
							/* @__PURE__ */ (0, y.jsx)("button", {
								className: "retail-add",
								onClick: () => a(""),
								children: "CONTINUE EXPLORING"
							})
						] }) : i === "guide" ? /* @__PURE__ */ (0, y.jsx)(Gl, {
							product: M,
							onSize: pe,
							onExplore: () => {
								a(""), P("size");
							}
						}) : i === "menu" ? /* @__PURE__ */ (0, y.jsx)("nav", {
							className: "retail-menu-links",
							children: ["All pieces", ...new Set(hu.map((e) => e.category))].map((e) => /* @__PURE__ */ (0, y.jsxs)("button", {
								onClick: () => {
									ee(e === "All pieces" ? "All" : e), j("/"), a("");
								},
								children: [e, " "]
							}, e))
						}) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
							i === "search" && /* @__PURE__ */ (0, y.jsx)("input", {
								autoFocus: !0,
								type: "search",
								"aria-label": "Search product names",
								placeholder: "Search dresses, tops, skirts…",
								value: _,
								onChange: (e) => v(e.target.value)
							}),
							/* @__PURE__ */ (0, y.jsx)("div", {
								className: "retail-mini-grid",
								children: hu.filter((e) => i === "favorites" ? p.includes(e.id) : e.name.toLowerCase().includes(_.toLowerCase())).map((e) => /* @__PURE__ */ (0, y.jsxs)(On, {
									to: "/product/" + e.id,
									onClick: () => a(""),
									children: [
										/* @__PURE__ */ (0, y.jsx)("img", {
											src: e.model,
											alt: e.name
										}),
										/* @__PURE__ */ (0, y.jsx)("h3", { children: e.name }),
										/* @__PURE__ */ (0, y.jsx)("p", { children: e.priceLabel })
									]
								}, e.id))
							}),
							i === "favorites" && !p.length && /* @__PURE__ */ (0, y.jsx)("p", { children: "Tap a heart to save your favorite pieces." })
						] })
					]
				})] })
			}),
			/* @__PURE__ */ (0, y.jsx)(x, {})
		]
	});
}
(0, Yl.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, y.jsx)(Dn, { children: /* @__PURE__ */ (0, y.jsx)(_u, {}) }));
//#endregion

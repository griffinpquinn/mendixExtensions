var Qm = { exports: {} }, Xp = {}, Wm = { exports: {} }, ht = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function q_() {
  if (qR) return ht;
  qR = 1;
  var ne = Symbol.for("react.element"), K = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Ct = Symbol.for("react.strict_mode"), vt = Symbol.for("react.profiler"), Rt = Symbol.for("react.provider"), S = Symbol.for("react.context"), Ft = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), q = Symbol.iterator;
  function Ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = q && _[q] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ye = Object.assign, mt = {};
  function ft(_, P, je) {
    this.props = _, this.context = P, this.refs = mt, this.updater = je || se;
  }
  ft.prototype.isReactComponent = {}, ft.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, ft.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function cn() {
  }
  cn.prototype = ft.prototype;
  function ct(_, P, je) {
    this.props = _, this.context = P, this.refs = mt, this.updater = je || se;
  }
  var Qe = ct.prototype = new cn();
  Qe.constructor = ct, Ye(Qe, ft.prototype), Qe.isPureReactComponent = !0;
  var dt = Array.isArray, be = Object.prototype.hasOwnProperty, ut = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(_, P, je) {
    var Ue, rt = {}, Ze = null, Ke = null;
    if (P != null) for (Ue in P.ref !== void 0 && (Ke = P.ref), P.key !== void 0 && (Ze = "" + P.key), P) be.call(P, Ue) && !Fe.hasOwnProperty(Ue) && (rt[Ue] = P[Ue]);
    var et = arguments.length - 2;
    if (et === 1) rt.children = je;
    else if (1 < et) {
      for (var at = Array(et), Vt = 0; Vt < et; Vt++) at[Vt] = arguments[Vt + 2];
      rt.children = at;
    }
    if (_ && _.defaultProps) for (Ue in et = _.defaultProps, et) rt[Ue] === void 0 && (rt[Ue] = et[Ue]);
    return { $$typeof: ne, type: _, key: Ze, ref: Ke, props: rt, _owner: ut.current };
  }
  function jt(_, P) {
    return { $$typeof: ne, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Kt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === ne;
  }
  function an(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(je) {
      return P[je];
    });
  }
  var xt = /\/+/g;
  function De(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? an("" + _.key) : P.toString(36);
  }
  function Ut(_, P, je, Ue, rt) {
    var Ze = typeof _;
    (Ze === "undefined" || Ze === "boolean") && (_ = null);
    var Ke = !1;
    if (_ === null) Ke = !0;
    else switch (Ze) {
      case "string":
      case "number":
        Ke = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case ne:
          case K:
            Ke = !0;
        }
    }
    if (Ke) return Ke = _, rt = rt(Ke), _ = Ue === "" ? "." + De(Ke, 0) : Ue, dt(rt) ? (je = "", _ != null && (je = _.replace(xt, "$&/") + "/"), Ut(rt, P, je, "", function(Vt) {
      return Vt;
    })) : rt != null && (Kt(rt) && (rt = jt(rt, je + (!rt.key || Ke && Ke.key === rt.key ? "" : ("" + rt.key).replace(xt, "$&/") + "/") + _)), P.push(rt)), 1;
    if (Ke = 0, Ue = Ue === "" ? "." : Ue + ":", dt(_)) for (var et = 0; et < _.length; et++) {
      Ze = _[et];
      var at = Ue + De(Ze, et);
      Ke += Ut(Ze, P, je, at, rt);
    }
    else if (at = Ce(_), typeof at == "function") for (_ = at.call(_), et = 0; !(Ze = _.next()).done; ) Ze = Ze.value, at = Ue + De(Ze, et++), Ke += Ut(Ze, P, je, at, rt);
    else if (Ze === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Ke;
  }
  function bt(_, P, je) {
    if (_ == null) return _;
    var Ue = [], rt = 0;
    return Ut(_, Ue, "", "", function(Ze) {
      return P.call(je, Ze, rt++);
    }), Ue;
  }
  function kt(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(je) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = je);
      }, function(je) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = je);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ee = { current: null }, J = { transition: null }, we = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: J, ReactCurrentOwner: ut };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ht.Children = { map: bt, forEach: function(_, P, je) {
    bt(_, function() {
      P.apply(this, arguments);
    }, je);
  }, count: function(_) {
    var P = 0;
    return bt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return bt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Kt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, ht.Component = ft, ht.Fragment = A, ht.Profiler = vt, ht.PureComponent = ct, ht.StrictMode = Ct, ht.Suspense = Z, ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, ht.act = ie, ht.cloneElement = function(_, P, je) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ue = Ye({}, _.props), rt = _.key, Ze = _.ref, Ke = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Ze = P.ref, Ke = ut.current), P.key !== void 0 && (rt = "" + P.key), _.type && _.type.defaultProps) var et = _.type.defaultProps;
      for (at in P) be.call(P, at) && !Fe.hasOwnProperty(at) && (Ue[at] = P[at] === void 0 && et !== void 0 ? et[at] : P[at]);
    }
    var at = arguments.length - 2;
    if (at === 1) Ue.children = je;
    else if (1 < at) {
      et = Array(at);
      for (var Vt = 0; Vt < at; Vt++) et[Vt] = arguments[Vt + 2];
      Ue.children = et;
    }
    return { $$typeof: ne, type: _.type, key: rt, ref: Ze, props: Ue, _owner: Ke };
  }, ht.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: Rt, _context: _ }, _.Consumer = _;
  }, ht.createElement = rn, ht.createFactory = function(_) {
    var P = rn.bind(null, _);
    return P.type = _, P;
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(_) {
    return { $$typeof: Ft, render: _ };
  }, ht.isValidElement = Kt, ht.lazy = function(_) {
    return { $$typeof: Pe, _payload: { _status: -1, _result: _ }, _init: kt };
  }, ht.memo = function(_, P) {
    return { $$typeof: te, type: _, compare: P === void 0 ? null : P };
  }, ht.startTransition = function(_) {
    var P = J.transition;
    J.transition = {};
    try {
      _();
    } finally {
      J.transition = P;
    }
  }, ht.unstable_act = ie, ht.useCallback = function(_, P) {
    return Ee.current.useCallback(_, P);
  }, ht.useContext = function(_) {
    return Ee.current.useContext(_);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(_) {
    return Ee.current.useDeferredValue(_);
  }, ht.useEffect = function(_, P) {
    return Ee.current.useEffect(_, P);
  }, ht.useId = function() {
    return Ee.current.useId();
  }, ht.useImperativeHandle = function(_, P, je) {
    return Ee.current.useImperativeHandle(_, P, je);
  }, ht.useInsertionEffect = function(_, P) {
    return Ee.current.useInsertionEffect(_, P);
  }, ht.useLayoutEffect = function(_, P) {
    return Ee.current.useLayoutEffect(_, P);
  }, ht.useMemo = function(_, P) {
    return Ee.current.useMemo(_, P);
  }, ht.useReducer = function(_, P, je) {
    return Ee.current.useReducer(_, P, je);
  }, ht.useRef = function(_) {
    return Ee.current.useRef(_);
  }, ht.useState = function(_) {
    return Ee.current.useState(_);
  }, ht.useSyncExternalStore = function(_, P, je) {
    return Ee.current.useSyncExternalStore(_, P, je);
  }, ht.useTransition = function() {
    return Ee.current.useTransition();
  }, ht.version = "18.3.1", ht;
}
var Jp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jp.exports;
var XR;
function X_() {
  return XR || (XR = 1, function(ne, K) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", Ct = Symbol.for("react.element"), vt = Symbol.for("react.portal"), Rt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ft = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), te = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), mt = Symbol.for("react.offscreen"), ft = Symbol.iterator, cn = "@@iterator";
      function ct(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ft && h[ft] || h[cn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, dt = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, rn = null;
      function jt(h) {
        rn = h;
      }
      Fe.setExtraStackFrame = function(h) {
        rn = h;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = Fe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Kt = !1, an = !1, xt = !1, De = !1, Ut = !1, bt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: dt,
        ReactCurrentOwner: ut
      };
      bt.ReactDebugCurrentFrame = Fe, bt.ReactCurrentActQueue = be;
      function kt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          J("warn", h, N);
        }
      }
      function Ee(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          J("error", h, N);
        }
      }
      function J(h, C, N) {
        {
          var F = bt.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", N = N.concat([X]));
          var Oe = N.map(function(ae) {
            return String(ae);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var we = {};
      function ie(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", X = F + "." + C;
          if (we[X])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), we[X] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          ie(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, F) {
          ie(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, F) {
          ie(h, "setState");
        }
      }, P = Object.assign, je = {};
      Object.freeze(je);
      function Ue(h, C, N) {
        this.props = h, this.context = C, this.refs = je, this.updater = N || _;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ue.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var rt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ze = function(h, C) {
          Object.defineProperty(Ue.prototype, h, {
            get: function() {
              kt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ke in rt)
          rt.hasOwnProperty(Ke) && Ze(Ke, rt[Ke]);
      }
      function et() {
      }
      et.prototype = Ue.prototype;
      function at(h, C, N) {
        this.props = h, this.context = C, this.refs = je, this.updater = N || _;
      }
      var Vt = at.prototype = new et();
      Vt.constructor = at, P(Vt, Ue.prototype), Vt.isPureReactComponent = !0;
      function Dn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Rr = Array.isArray;
      function Sn(h) {
        return Rr(h);
      }
      function er(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Pn(h) {
        try {
          return Vn(h), !1;
        } catch {
          return !0;
        }
      }
      function Vn(h) {
        return "" + h;
      }
      function Vr(h) {
        if (Pn(h))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(h)), Vn(h);
      }
      function oi(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? N + "(" + X + ")" : N;
      }
      function ia(h) {
        return h.displayName || "Context";
      }
      function Gn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Rt:
            return "Fragment";
          case vt:
            return "Portal";
          case Ft:
            return "Profiler";
          case S:
            return "StrictMode";
          case q:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case te:
              var C = h;
              return ia(C) + ".Consumer";
            case Z:
              var N = h;
              return ia(N._context) + ".Provider";
            case Pe:
              return oi(h, h.render, "ForwardRef");
            case se:
              var F = h.displayName || null;
              return F !== null ? F : Gn(h.type) || "Memo";
            case Ye: {
              var X = h, Oe = X._payload, ae = X._init;
              try {
                return Gn(ae(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var En = Object.prototype.hasOwnProperty, Bn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, mr, Ba, On;
      On = {};
      function yr(h) {
        if (En.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function la(h) {
        if (En.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function $a(h, C) {
        var N = function() {
          mr || (mr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function si(h, C) {
        var N = function() {
          Ba || (Ba = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && ut.current && h.__self && ut.current.stateNode !== h.__self) {
          var C = Gn(ut.current.type);
          On[C] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), On[C] = !0);
        }
      }
      var Re = function(h, C, N, F, X, Oe, ae) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ct,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ne, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function tt(h, C, N) {
        var F, X = {}, Oe = null, ae = null, Ne = null, st = null;
        if (C != null) {
          yr(C) && (ae = C.ref, ee(C)), la(C) && (Vr(C.key), Oe = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (F in C)
            En.call(C, F) && !Bn.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var wt = arguments.length - 2;
        if (wt === 1)
          X.children = N;
        else if (wt > 1) {
          for (var tn = Array(wt), Yt = 0; Yt < wt; Yt++)
            tn[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(tn), X.children = tn;
        }
        if (h && h.defaultProps) {
          var nt = h.defaultProps;
          for (F in nt)
            X[F] === void 0 && (X[F] = nt[F]);
        }
        if (Oe || ae) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && $a(X, Qt), ae && si(X, Qt);
        }
        return Re(h, Oe, ae, Ne, st, ut.current, X);
      }
      function At(h, C) {
        var N = Re(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Jt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = P({}, h.props), Oe = h.key, ae = h.ref, Ne = h._self, st = h._source, wt = h._owner;
        if (C != null) {
          yr(C) && (ae = C.ref, wt = ut.current), la(C) && (Vr(C.key), Oe = "" + C.key);
          var tn;
          h.type && h.type.defaultProps && (tn = h.type.defaultProps);
          for (F in C)
            En.call(C, F) && !Bn.hasOwnProperty(F) && (C[F] === void 0 && tn !== void 0 ? X[F] = tn[F] : X[F] = C[F]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          X.children = N;
        else if (Yt > 1) {
          for (var nt = Array(Yt), Qt = 0; Qt < Yt; Qt++)
            nt[Qt] = arguments[Qt + 2];
          X.children = nt;
        }
        return Re(h.type, Oe, ae, Ne, st, wt, X);
      }
      function pn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ct;
      }
      var ln = ".", qn = ":";
      function Zt(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return N[X];
        });
        return "$" + F;
      }
      var Bt = !1, $t = /\/+/g;
      function ua(h) {
        return h.replace($t, "$&/");
      }
      function gr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Vr(h.key), Zt("" + h.key)) : C.toString(36);
      }
      function Ca(h, C, N, F, X) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ct:
                case vt:
                  ae = !0;
              }
          }
        if (ae) {
          var Ne = h, st = X(Ne), wt = F === "" ? ln + gr(Ne, 0) : F;
          if (Sn(st)) {
            var tn = "";
            wt != null && (tn = ua(wt) + "/"), Ca(st, C, tn, "", function(Gf) {
              return Gf;
            });
          } else st != null && (pn(st) && (st.key && (!Ne || Ne.key !== st.key) && Vr(st.key), st = At(
            st,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (st.key && (!Ne || Ne.key !== st.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ua("" + st.key) + "/"
            ) : "") + wt
          )), C.push(st));
          return 1;
        }
        var Yt, nt, Qt = 0, vn = F === "" ? ln : F + qn;
        if (Sn(h))
          for (var El = 0; El < h.length; El++)
            Yt = h[El], nt = vn + gr(Yt, El), Qt += Ca(Yt, C, N, nt, X);
        else {
          var Wo = ct(h);
          if (typeof Wo == "function") {
            var Pi = h;
            Wo === Pi.entries && (Bt || kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Go = Wo.call(Pi), lu, Wf = 0; !(lu = Go.next()).done; )
              Yt = lu.value, nt = vn + gr(Yt, Wf++), Qt += Ca(Yt, C, N, nt, X);
          } else if (Oe === "object") {
            var lc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (lc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : lc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, C, N) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return Ca(h, F, "", "", function(Oe) {
          return C.call(N, Oe, X++);
        }), F;
      }
      function Kl(h) {
        var C = 0;
        return Fi(h, function() {
          C++;
        }), C;
      }
      function Jl(h, C, N) {
        Fi(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function fl(h) {
        return Fi(h, function(C) {
          return C;
        }) || [];
      }
      function dl(h) {
        if (!pn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Zl(h) {
        var C = {
          $$typeof: te,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: Z,
          _context: C
        };
        var N = !1, F = !1, X = !1;
        {
          var Oe = {
            $$typeof: te,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return F || (F = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                X || (kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), X = !0);
              }
            }
          }), C.Consumer = Oe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Tr = -1, wr = 0, tr = 1, ci = 2;
      function Ia(h) {
        if (h._status === Tr) {
          var C = h._result, N = C();
          if (N.then(function(Oe) {
            if (h._status === wr || h._status === Tr) {
              var ae = h;
              ae._status = tr, ae._result = Oe;
            }
          }, function(Oe) {
            if (h._status === wr || h._status === Tr) {
              var ae = h;
              ae._status = ci, ae._result = Oe;
            }
          }), h._status === Tr) {
            var F = h;
            F._status = wr, F._result = N;
          }
        }
        if (h._status === tr) {
          var X = h._result;
          return X === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: Tr,
          _result: h
        }, N = {
          $$typeof: Ye,
          _payload: C,
          _init: Ia
        };
        {
          var F, X;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Oe) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Oe, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Oe) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Oe, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function di(h) {
        h != null && h.$$typeof === se ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ee("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Pe,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function B(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Rt || h === Ft || Ut || h === S || h === q || h === Ce || De || h === mt || Kt || an || xt || typeof h == "object" && h !== null && (h.$$typeof === Ye || h.$$typeof === se || h.$$typeof === Z || h.$$typeof === te || h.$$typeof === Pe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function le(h, C) {
        B(h) || Ee("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: se,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return N;
      }
      function he() {
        var h = Qe.current;
        return h === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = he();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function $e(h) {
        var C = he();
        return C.useState(h);
      }
      function ot(h, C, N) {
        var F = he();
        return F.useReducer(h, C, N);
      }
      function it(h) {
        var C = he();
        return C.useRef(h);
      }
      function Cn(h, C) {
        var N = he();
        return N.useEffect(h, C);
      }
      function en(h, C) {
        var N = he();
        return N.useInsertionEffect(h, C);
      }
      function un(h, C) {
        var N = he();
        return N.useLayoutEffect(h, C);
      }
      function nr(h, C) {
        var N = he();
        return N.useCallback(h, C);
      }
      function Ya(h, C) {
        var N = he();
        return N.useMemo(h, C);
      }
      function Qa(h, C, N) {
        var F = he();
        return F.useImperativeHandle(h, C, N);
      }
      function qe(h, C) {
        {
          var N = he();
          return N.useDebugValue(h, C);
        }
      }
      function Je() {
        var h = he();
        return h.useTransition();
      }
      function Wa(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function eu() {
        var h = he();
        return h.useId();
      }
      function tu(h, C, N) {
        var F = he();
        return F.useSyncExternalStore(h, C, N);
      }
      var pl = 0, Yu, vl, Br, $o, xr, ac, ic;
      function Qu() {
      }
      Qu.__reactDisabledLog = !0;
      function hl() {
        {
          if (pl === 0) {
            Yu = console.log, vl = console.info, Br = console.warn, $o = console.error, xr = console.group, ac = console.groupCollapsed, ic = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Qu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          pl++;
        }
      }
      function oa() {
        {
          if (pl--, pl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Yu
              }),
              info: P({}, h, {
                value: vl
              }),
              warn: P({}, h, {
                value: Br
              }),
              error: P({}, h, {
                value: $o
              }),
              group: P({}, h, {
                value: xr
              }),
              groupCollapsed: P({}, h, {
                value: ac
              }),
              groupEnd: P({}, h, {
                value: ic
              })
            });
          }
          pl < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ga = bt.ReactCurrentDispatcher, qa;
      function Wu(h, C, N) {
        {
          if (qa === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              qa = F && F[1] || "";
            }
          return `
` + qa + h;
        }
      }
      var nu = !1, ml;
      {
        var Gu = typeof WeakMap == "function" ? WeakMap : Map;
        ml = new Gu();
      }
      function qu(h, C) {
        if (!h || nu)
          return "";
        {
          var N = ml.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        nu = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Ga.current, Ga.current = null, hl();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (vn) {
                F = vn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (vn) {
                F = vn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vn) {
              F = vn;
            }
            h();
          }
        } catch (vn) {
          if (vn && F && typeof vn.stack == "string") {
            for (var Ne = vn.stack.split(`
`), st = F.stack.split(`
`), wt = Ne.length - 1, tn = st.length - 1; wt >= 1 && tn >= 0 && Ne[wt] !== st[tn]; )
              tn--;
            for (; wt >= 1 && tn >= 0; wt--, tn--)
              if (Ne[wt] !== st[tn]) {
                if (wt !== 1 || tn !== 1)
                  do
                    if (wt--, tn--, tn < 0 || Ne[wt] !== st[tn]) {
                      var Yt = `
` + Ne[wt].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && ml.set(h, Yt), Yt;
                    }
                  while (wt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          nu = !1, Ga.current = Oe, oa(), Error.prepareStackTrace = X;
        }
        var nt = h ? h.displayName || h.name : "", Qt = nt ? Wu(nt) : "";
        return typeof h == "function" && ml.set(h, Qt), Qt;
      }
      function ji(h, C, N) {
        return qu(h, !1);
      }
      function Yf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Hi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return qu(h, Yf(h));
        if (typeof h == "string")
          return Wu(h);
        switch (h) {
          case q:
            return Wu("Suspense");
          case Ce:
            return Wu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Pe:
              return ji(h.render);
            case se:
              return Hi(h.type, C, N);
            case Ye: {
              var F = h, X = F._payload, Oe = F._init;
              try {
                return Hi(Oe(X), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, Xu = bt.ReactDebugCurrentFrame;
      function Tt(h) {
        if (h) {
          var C = h._owner, N = Hi(h.type, h._source, C ? C.type : null);
          Xu.setExtraStackFrame(N);
        } else
          Xu.setExtraStackFrame(null);
      }
      function Io(h, C, N, F, X) {
        {
          var Oe = Function.call.bind(En);
          for (var ae in h)
            if (Oe(h, ae)) {
              var Ne = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var st = Error((F || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Ne = h[ae](C, ae, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (wt) {
                Ne = wt;
              }
              Ne && !(Ne instanceof Error) && (Tt(X), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, ae, typeof Ne), Tt(null)), Ne instanceof Error && !(Ne.message in Dt) && (Dt[Ne.message] = !0, Tt(X), Ee("Failed %s type: %s", N, Ne.message), Tt(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, N = Hi(h.type, h._source, C ? C.type : null);
          jt(N);
        } else
          jt(null);
      }
      var Be;
      Be = !1;
      function Ku() {
        if (ut.current) {
          var h = Gn(ut.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function rr(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function vi(h) {
        return h != null ? rr(h.__source) : "";
      }
      var br = {};
      function hi(h) {
        var C = Ku();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function on(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = hi(C);
          if (!br[N]) {
            br[N] = !0;
            var F = "";
            h && h._owner && h._owner !== ut.current && (F = " It was passed a child from " + Gn(h._owner.type) + "."), pi(h), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), pi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Sn(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              pn(F) && on(F, C);
            }
          else if (pn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = ct(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Oe = X.call(h), ae; !(ae = Oe.next()).done; )
                pn(ae.value) && on(ae.value, C);
          }
        }
      }
      function yl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Pe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === se))
            N = C.propTypes;
          else
            return;
          if (N) {
            var F = Gn(C);
            Io(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Be) {
            Be = !0;
            var X = Gn(C);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $n(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              pi(h), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), pi(null);
              break;
            }
          }
          h.ref !== null && (pi(h), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), pi(null));
        }
      }
      function _r(h, C, N) {
        var F = B(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = vi(C);
          Oe ? X += Oe : X += Ku();
          var ae;
          h === null ? ae = "null" : Sn(h) ? ae = "array" : h !== void 0 && h.$$typeof === Ct ? (ae = "<" + (Gn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, X);
        }
        var Ne = tt.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (F)
          for (var st = 2; st < arguments.length; st++)
            It(arguments[st], h);
        return h === Rt ? $n(Ne) : yl(Ne), Ne;
      }
      var Ra = !1;
      function ru(h) {
        var C = _r.bind(null, h);
        return C.type = h, Ra || (Ra = !0, kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Yo(h, C, N) {
        for (var F = Jt.apply(this, arguments), X = 2; X < arguments.length; X++)
          It(arguments[X], F.type);
        return yl(F), F;
      }
      function Qo(h, C) {
        var N = dt.transition;
        dt.transition = {};
        var F = dt.transition;
        dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (dt.transition = N, N === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var gl = !1, au = null;
      function Qf(h) {
        if (au === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = ne && ne[C];
            au = N.call(ne, "timers").setImmediate;
          } catch {
            au = function(X) {
              gl === !1 && (gl = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = X, Oe.port2.postMessage(void 0);
            };
          }
        return au(h);
      }
      var Ta = 0, Xa = !1;
      function mi(h) {
        {
          var C = Ta;
          Ta++, be.current === null && (be.current = []);
          var N = be.isBatchingLegacy, F;
          try {
            if (be.isBatchingLegacy = !0, F = h(), !N && be.didScheduleLegacyUpdate) {
              var X = be.current;
              X !== null && (be.didScheduleLegacyUpdate = !1, Sl(X));
            }
          } catch (nt) {
            throw wa(C), nt;
          } finally {
            be.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Oe = F, ae = !1, Ne = {
              then: function(nt, Qt) {
                ae = !0, Oe.then(function(vn) {
                  wa(C), Ta === 0 ? Ju(vn, nt, Qt) : nt(vn);
                }, function(vn) {
                  wa(C), Qt(vn);
                });
              }
            };
            return !Xa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Xa = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var st = F;
            if (wa(C), Ta === 0) {
              var wt = be.current;
              wt !== null && (Sl(wt), be.current = null);
              var tn = {
                then: function(nt, Qt) {
                  be.current === null ? (be.current = [], Ju(st, nt, Qt)) : nt(st);
                }
              };
              return tn;
            } else {
              var Yt = {
                then: function(nt, Qt) {
                  nt(st);
                }
              };
              return Yt;
            }
          }
        }
      }
      function wa(h) {
        h !== Ta - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ta = h;
      }
      function Ju(h, C, N) {
        {
          var F = be.current;
          if (F !== null)
            try {
              Sl(F), Qf(function() {
                F.length === 0 ? (be.current = null, C(h)) : Ju(h, C, N);
              });
            } catch (X) {
              N(X);
            }
          else
            C(h);
        }
      }
      var Zu = !1;
      function Sl(h) {
        if (!Zu) {
          Zu = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            Zu = !1;
          }
        }
      }
      var iu = _r, eo = Yo, to = ru, Ka = {
        map: Fi,
        forEach: Jl,
        count: Kl,
        toArray: fl,
        only: dl
      };
      K.Children = Ka, K.Component = Ue, K.Fragment = Rt, K.Profiler = Ft, K.PureComponent = at, K.StrictMode = S, K.Suspense = q, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bt, K.act = mi, K.cloneElement = eo, K.createContext = Zl, K.createElement = iu, K.createFactory = to, K.createRef = Dn, K.forwardRef = di, K.isValidElement = pn, K.lazy = fi, K.memo = le, K.startTransition = Qo, K.unstable_act = mi, K.useCallback = nr, K.useContext = Ge, K.useDebugValue = qe, K.useDeferredValue = Wa, K.useEffect = Cn, K.useId = eu, K.useImperativeHandle = Qa, K.useInsertionEffect = en, K.useLayoutEffect = un, K.useMemo = Ya, K.useReducer = ot, K.useRef = it, K.useState = $e, K.useSyncExternalStore = tu, K.useTransition = Je, K.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var KR;
function ev() {
  return KR || (KR = 1, process.env.NODE_ENV === "production" ? Wm.exports = q_() : Wm.exports = X_()), Wm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function K_() {
  if (JR) return Xp;
  JR = 1;
  var ne = ev(), K = Symbol.for("react.element"), A = Symbol.for("react.fragment"), Ct = Object.prototype.hasOwnProperty, vt = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Ft, Z, te) {
    var Pe, q = {}, Ce = null, se = null;
    te !== void 0 && (Ce = "" + te), Z.key !== void 0 && (Ce = "" + Z.key), Z.ref !== void 0 && (se = Z.ref);
    for (Pe in Z) Ct.call(Z, Pe) && !Rt.hasOwnProperty(Pe) && (q[Pe] = Z[Pe]);
    if (Ft && Ft.defaultProps) for (Pe in Z = Ft.defaultProps, Z) q[Pe] === void 0 && (q[Pe] = Z[Pe]);
    return { $$typeof: K, type: Ft, key: Ce, ref: se, props: q, _owner: vt.current };
  }
  return Xp.Fragment = A, Xp.jsx = S, Xp.jsxs = S, Xp;
}
var Kp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function J_() {
  return ZR || (ZR = 1, process.env.NODE_ENV !== "production" && function() {
    var ne = ev(), K = Symbol.for("react.element"), A = Symbol.for("react.portal"), Ct = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ft = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), Ye = Symbol.iterator, mt = "@@iterator";
    function ft(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = Ye && R[Ye] || R[mt];
      return typeof B == "function" ? B : null;
    }
    var cn = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ct(R) {
      {
        for (var B = arguments.length, le = new Array(B > 1 ? B - 1 : 0), he = 1; he < B; he++)
          le[he - 1] = arguments[he];
        Qe("error", R, le);
      }
    }
    function Qe(R, B, le) {
      {
        var he = cn.ReactDebugCurrentFrame, Ge = he.getStackAddendum();
        Ge !== "" && (B += "%s", le = le.concat([Ge]));
        var $e = le.map(function(ot) {
          return String(ot);
        });
        $e.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, $e);
      }
    }
    var dt = !1, be = !1, ut = !1, Fe = !1, rn = !1, jt;
    jt = Symbol.for("react.module.reference");
    function Kt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ct || R === Rt || rn || R === vt || R === te || R === Pe || Fe || R === se || dt || be || ut || typeof R == "object" && R !== null && (R.$$typeof === Ce || R.$$typeof === q || R.$$typeof === S || R.$$typeof === Ft || R.$$typeof === Z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === jt || R.getModuleId !== void 0));
    }
    function an(R, B, le) {
      var he = R.displayName;
      if (he)
        return he;
      var Ge = B.displayName || B.name || "";
      return Ge !== "" ? le + "(" + Ge + ")" : le;
    }
    function xt(R) {
      return R.displayName || "Context";
    }
    function De(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ct("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ct:
          return "Fragment";
        case A:
          return "Portal";
        case Rt:
          return "Profiler";
        case vt:
          return "StrictMode";
        case te:
          return "Suspense";
        case Pe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ft:
            var B = R;
            return xt(B) + ".Consumer";
          case S:
            var le = R;
            return xt(le._context) + ".Provider";
          case Z:
            return an(R, R.render, "ForwardRef");
          case q:
            var he = R.displayName || null;
            return he !== null ? he : De(R.type) || "Memo";
          case Ce: {
            var Ge = R, $e = Ge._payload, ot = Ge._init;
            try {
              return De(ot($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ut = Object.assign, bt = 0, kt, Ee, J, we, ie, _, P;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Ue() {
      {
        if (bt === 0) {
          kt = console.log, Ee = console.info, J = console.warn, we = console.error, ie = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        bt++;
      }
    }
    function rt() {
      {
        if (bt--, bt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, R, {
              value: kt
            }),
            info: Ut({}, R, {
              value: Ee
            }),
            warn: Ut({}, R, {
              value: J
            }),
            error: Ut({}, R, {
              value: we
            }),
            group: Ut({}, R, {
              value: ie
            }),
            groupCollapsed: Ut({}, R, {
              value: _
            }),
            groupEnd: Ut({}, R, {
              value: P
            })
          });
        }
        bt < 0 && ct("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ze = cn.ReactCurrentDispatcher, Ke;
    function et(R, B, le) {
      {
        if (Ke === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var he = Ge.stack.trim().match(/\n( *(at )?)/);
            Ke = he && he[1] || "";
          }
        return `
` + Ke + R;
      }
    }
    var at = !1, Vt;
    {
      var Dn = typeof WeakMap == "function" ? WeakMap : Map;
      Vt = new Dn();
    }
    function Rr(R, B) {
      if (!R || at)
        return "";
      {
        var le = Vt.get(R);
        if (le !== void 0)
          return le;
      }
      var he;
      at = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Ze.current, Ze.current = null, Ue();
      try {
        if (B) {
          var ot = function() {
            throw Error();
          };
          if (Object.defineProperty(ot.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ot, []);
            } catch (qe) {
              he = qe;
            }
            Reflect.construct(R, [], ot);
          } else {
            try {
              ot.call();
            } catch (qe) {
              he = qe;
            }
            R.call(ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            he = qe;
          }
          R();
        }
      } catch (qe) {
        if (qe && he && typeof qe.stack == "string") {
          for (var it = qe.stack.split(`
`), Cn = he.stack.split(`
`), en = it.length - 1, un = Cn.length - 1; en >= 1 && un >= 0 && it[en] !== Cn[un]; )
            un--;
          for (; en >= 1 && un >= 0; en--, un--)
            if (it[en] !== Cn[un]) {
              if (en !== 1 || un !== 1)
                do
                  if (en--, un--, un < 0 || it[en] !== Cn[un]) {
                    var nr = `
` + it[en].replace(" at new ", " at ");
                    return R.displayName && nr.includes("<anonymous>") && (nr = nr.replace("<anonymous>", R.displayName)), typeof R == "function" && Vt.set(R, nr), nr;
                  }
                while (en >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        at = !1, Ze.current = $e, rt(), Error.prepareStackTrace = Ge;
      }
      var Ya = R ? R.displayName || R.name : "", Qa = Ya ? et(Ya) : "";
      return typeof R == "function" && Vt.set(R, Qa), Qa;
    }
    function Sn(R, B, le) {
      return Rr(R, !1);
    }
    function er(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function Pn(R, B, le) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Rr(R, er(R));
      if (typeof R == "string")
        return et(R);
      switch (R) {
        case te:
          return et("Suspense");
        case Pe:
          return et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Z:
            return Sn(R.render);
          case q:
            return Pn(R.type, B, le);
          case Ce: {
            var he = R, Ge = he._payload, $e = he._init;
            try {
              return Pn($e(Ge), B, le);
            } catch {
            }
          }
        }
      return "";
    }
    var Vn = Object.prototype.hasOwnProperty, Vr = {}, oi = cn.ReactDebugCurrentFrame;
    function ia(R) {
      if (R) {
        var B = R._owner, le = Pn(R.type, R._source, B ? B.type : null);
        oi.setExtraStackFrame(le);
      } else
        oi.setExtraStackFrame(null);
    }
    function Gn(R, B, le, he, Ge) {
      {
        var $e = Function.call.bind(Vn);
        for (var ot in R)
          if ($e(R, ot)) {
            var it = void 0;
            try {
              if (typeof R[ot] != "function") {
                var Cn = Error((he || "React class") + ": " + le + " type `" + ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Cn.name = "Invariant Violation", Cn;
              }
              it = R[ot](B, ot, he, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              it = en;
            }
            it && !(it instanceof Error) && (ia(Ge), ct("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", le, ot, typeof it), ia(null)), it instanceof Error && !(it.message in Vr) && (Vr[it.message] = !0, ia(Ge), ct("Failed %s type: %s", le, it.message), ia(null));
          }
      }
    }
    var En = Array.isArray;
    function Bn(R) {
      return En(R);
    }
    function mr(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, le = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return le;
      }
    }
    function Ba(R) {
      try {
        return On(R), !1;
      } catch {
        return !0;
      }
    }
    function On(R) {
      return "" + R;
    }
    function yr(R) {
      if (Ba(R))
        return ct("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(R)), On(R);
    }
    var la = cn.ReactCurrentOwner, $a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, si, ee;
    function Re(R) {
      if (Vn.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (Vn.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, B) {
      typeof R.ref == "string" && la.current;
    }
    function Jt(R, B) {
      {
        var le = function() {
          si || (si = !0, ct("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        le.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function pn(R, B) {
      {
        var le = function() {
          ee || (ee = !0, ct("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        le.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var ln = function(R, B, le, he, Ge, $e, ot) {
      var it = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: K,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: le,
        props: ot,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return it._store = {}, Object.defineProperty(it._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(it, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(it, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
    };
    function qn(R, B, le, he, Ge) {
      {
        var $e, ot = {}, it = null, Cn = null;
        le !== void 0 && (yr(le), it = "" + le), tt(B) && (yr(B.key), it = "" + B.key), Re(B) && (Cn = B.ref, At(B, Ge));
        for ($e in B)
          Vn.call(B, $e) && !$a.hasOwnProperty($e) && (ot[$e] = B[$e]);
        if (R && R.defaultProps) {
          var en = R.defaultProps;
          for ($e in en)
            ot[$e] === void 0 && (ot[$e] = en[$e]);
        }
        if (it || Cn) {
          var un = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          it && Jt(ot, un), Cn && pn(ot, un);
        }
        return ln(R, it, Cn, Ge, he, la.current, ot);
      }
    }
    var Zt = cn.ReactCurrentOwner, Bt = cn.ReactDebugCurrentFrame;
    function $t(R) {
      if (R) {
        var B = R._owner, le = Pn(R.type, R._source, B ? B.type : null);
        Bt.setExtraStackFrame(le);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ua;
    ua = !1;
    function gr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === K;
    }
    function Ca() {
      {
        if (Zt.current) {
          var R = De(Zt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Fi(R) {
      return "";
    }
    var Kl = {};
    function Jl(R) {
      {
        var B = Ca();
        if (!B) {
          var le = typeof R == "string" ? R : R.displayName || R.name;
          le && (B = `

Check the top-level render call using <` + le + ">.");
        }
        return B;
      }
    }
    function fl(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var le = Jl(B);
        if (Kl[le])
          return;
        Kl[le] = !0;
        var he = "";
        R && R._owner && R._owner !== Zt.current && (he = " It was passed a child from " + De(R._owner.type) + "."), $t(R), ct('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, he), $t(null);
      }
    }
    function dl(R, B) {
      {
        if (typeof R != "object")
          return;
        if (Bn(R))
          for (var le = 0; le < R.length; le++) {
            var he = R[le];
            gr(he) && fl(he, B);
          }
        else if (gr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ge = ft(R);
          if (typeof Ge == "function" && Ge !== R.entries)
            for (var $e = Ge.call(R), ot; !(ot = $e.next()).done; )
              gr(ot.value) && fl(ot.value, B);
        }
      }
    }
    function Zl(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var le;
        if (typeof B == "function")
          le = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === Z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === q))
          le = B.propTypes;
        else
          return;
        if (le) {
          var he = De(B);
          Gn(le, R.props, "prop", he, R);
        } else if (B.PropTypes !== void 0 && !ua) {
          ua = !0;
          var Ge = De(B);
          ct("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && ct("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(R) {
      {
        for (var B = Object.keys(R.props), le = 0; le < B.length; le++) {
          var he = B[le];
          if (he !== "children" && he !== "key") {
            $t(R), ct("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), $t(null);
            break;
          }
        }
        R.ref !== null && ($t(R), ct("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var wr = {};
    function tr(R, B, le, he, Ge, $e) {
      {
        var ot = Kt(R);
        if (!ot) {
          var it = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (it += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Cn = Fi();
          Cn ? it += Cn : it += Ca();
          var en;
          R === null ? en = "null" : Bn(R) ? en = "array" : R !== void 0 && R.$$typeof === K ? (en = "<" + (De(R.type) || "Unknown") + " />", it = " Did you accidentally export a JSX literal instead of a component?") : en = typeof R, ct("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, it);
        }
        var un = qn(R, B, le, Ge, $e);
        if (un == null)
          return un;
        if (ot) {
          var nr = B.children;
          if (nr !== void 0)
            if (he)
              if (Bn(nr)) {
                for (var Ya = 0; Ya < nr.length; Ya++)
                  dl(nr[Ya], R);
                Object.freeze && Object.freeze(nr);
              } else
                ct("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dl(nr, R);
        }
        if (Vn.call(B, "key")) {
          var Qa = De(R), qe = Object.keys(B).filter(function(eu) {
            return eu !== "key";
          }), Je = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wr[Qa + Je]) {
            var Wa = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            ct(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, Qa, Wa, Qa), wr[Qa + Je] = !0;
          }
        }
        return R === Ct ? Tr(un) : Zl(un), un;
      }
    }
    function ci(R, B, le) {
      return tr(R, B, le, !0);
    }
    function Ia(R, B, le) {
      return tr(R, B, le, !1);
    }
    var fi = Ia, di = ci;
    Kp.Fragment = Ct, Kp.jsx = fi, Kp.jsxs = di;
  }()), Kp;
}
var eT;
function Z_() {
  return eT || (eT = 1, process.env.NODE_ENV === "production" ? Qm.exports = K_() : Qm.exports = J_()), Qm.exports;
}
var Zp = Z_(), Xm = ev(), If = {}, Gm = { exports: {} }, Pa = {}, qm = { exports: {} }, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function ek() {
  return tT || (tT = 1, function(ne) {
    function K(J, we) {
      var ie = J.length;
      J.push(we);
      e: for (; 0 < ie; ) {
        var _ = ie - 1 >>> 1, P = J[_];
        if (0 < vt(P, we)) J[_] = we, J[ie] = P, ie = _;
        else break e;
      }
    }
    function A(J) {
      return J.length === 0 ? null : J[0];
    }
    function Ct(J) {
      if (J.length === 0) return null;
      var we = J[0], ie = J.pop();
      if (ie !== we) {
        J[0] = ie;
        e: for (var _ = 0, P = J.length, je = P >>> 1; _ < je; ) {
          var Ue = 2 * (_ + 1) - 1, rt = J[Ue], Ze = Ue + 1, Ke = J[Ze];
          if (0 > vt(rt, ie)) Ze < P && 0 > vt(Ke, rt) ? (J[_] = Ke, J[Ze] = ie, _ = Ze) : (J[_] = rt, J[Ue] = ie, _ = Ue);
          else if (Ze < P && 0 > vt(Ke, ie)) J[_] = Ke, J[Ze] = ie, _ = Ze;
          else break e;
        }
      }
      return we;
    }
    function vt(J, we) {
      var ie = J.sortIndex - we.sortIndex;
      return ie !== 0 ? ie : J.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Rt = performance;
      ne.unstable_now = function() {
        return Rt.now();
      };
    } else {
      var S = Date, Ft = S.now();
      ne.unstable_now = function() {
        return S.now() - Ft;
      };
    }
    var Z = [], te = [], Pe = 1, q = null, Ce = 3, se = !1, Ye = !1, mt = !1, ft = typeof setTimeout == "function" ? setTimeout : null, cn = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(J) {
      for (var we = A(te); we !== null; ) {
        if (we.callback === null) Ct(te);
        else if (we.startTime <= J) Ct(te), we.sortIndex = we.expirationTime, K(Z, we);
        else break;
        we = A(te);
      }
    }
    function dt(J) {
      if (mt = !1, Qe(J), !Ye) if (A(Z) !== null) Ye = !0, kt(be);
      else {
        var we = A(te);
        we !== null && Ee(dt, we.startTime - J);
      }
    }
    function be(J, we) {
      Ye = !1, mt && (mt = !1, cn(rn), rn = -1), se = !0;
      var ie = Ce;
      try {
        for (Qe(we), q = A(Z); q !== null && (!(q.expirationTime > we) || J && !an()); ) {
          var _ = q.callback;
          if (typeof _ == "function") {
            q.callback = null, Ce = q.priorityLevel;
            var P = _(q.expirationTime <= we);
            we = ne.unstable_now(), typeof P == "function" ? q.callback = P : q === A(Z) && Ct(Z), Qe(we);
          } else Ct(Z);
          q = A(Z);
        }
        if (q !== null) var je = !0;
        else {
          var Ue = A(te);
          Ue !== null && Ee(dt, Ue.startTime - we), je = !1;
        }
        return je;
      } finally {
        q = null, Ce = ie, se = !1;
      }
    }
    var ut = !1, Fe = null, rn = -1, jt = 5, Kt = -1;
    function an() {
      return !(ne.unstable_now() - Kt < jt);
    }
    function xt() {
      if (Fe !== null) {
        var J = ne.unstable_now();
        Kt = J;
        var we = !0;
        try {
          we = Fe(!0, J);
        } finally {
          we ? De() : (ut = !1, Fe = null);
        }
      } else ut = !1;
    }
    var De;
    if (typeof ct == "function") De = function() {
      ct(xt);
    };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel(), bt = Ut.port2;
      Ut.port1.onmessage = xt, De = function() {
        bt.postMessage(null);
      };
    } else De = function() {
      ft(xt, 0);
    };
    function kt(J) {
      Fe = J, ut || (ut = !0, De());
    }
    function Ee(J, we) {
      rn = ft(function() {
        J(ne.unstable_now());
      }, we);
    }
    ne.unstable_IdlePriority = 5, ne.unstable_ImmediatePriority = 1, ne.unstable_LowPriority = 4, ne.unstable_NormalPriority = 3, ne.unstable_Profiling = null, ne.unstable_UserBlockingPriority = 2, ne.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, ne.unstable_continueExecution = function() {
      Ye || se || (Ye = !0, kt(be));
    }, ne.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jt = 0 < J ? Math.floor(1e3 / J) : 5;
    }, ne.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, ne.unstable_getFirstCallbackNode = function() {
      return A(Z);
    }, ne.unstable_next = function(J) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = Ce;
      }
      var ie = Ce;
      Ce = we;
      try {
        return J();
      } finally {
        Ce = ie;
      }
    }, ne.unstable_pauseExecution = function() {
    }, ne.unstable_requestPaint = function() {
    }, ne.unstable_runWithPriority = function(J, we) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var ie = Ce;
      Ce = J;
      try {
        return we();
      } finally {
        Ce = ie;
      }
    }, ne.unstable_scheduleCallback = function(J, we, ie) {
      var _ = ne.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? _ + ie : _) : ie = _, J) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ie + P, J = { id: Pe++, callback: we, priorityLevel: J, startTime: ie, expirationTime: P, sortIndex: -1 }, ie > _ ? (J.sortIndex = ie, K(te, J), A(Z) === null && J === A(te) && (mt ? (cn(rn), rn = -1) : mt = !0, Ee(dt, ie - _))) : (J.sortIndex = P, K(Z, J), Ye || se || (Ye = !0, kt(be))), J;
    }, ne.unstable_shouldYield = an, ne.unstable_wrapCallback = function(J) {
      var we = Ce;
      return function() {
        var ie = Ce;
        Ce = we;
        try {
          return J.apply(this, arguments);
        } finally {
          Ce = ie;
        }
      };
    };
  }(pE)), pE;
}
var vE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function tk() {
  return nT || (nT = 1, function(ne) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, A = 5;
      function Ct(ee, Re) {
        var tt = ee.length;
        ee.push(Re), S(ee, Re, tt);
      }
      function vt(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function Rt(ee) {
        if (ee.length === 0)
          return null;
        var Re = ee[0], tt = ee.pop();
        return tt !== Re && (ee[0] = tt, Ft(ee, tt, 0)), Re;
      }
      function S(ee, Re, tt) {
        for (var At = tt; At > 0; ) {
          var Jt = At - 1 >>> 1, pn = ee[Jt];
          if (Z(pn, Re) > 0)
            ee[Jt] = Re, ee[At] = pn, At = Jt;
          else
            return;
        }
      }
      function Ft(ee, Re, tt) {
        for (var At = tt, Jt = ee.length, pn = Jt >>> 1; At < pn; ) {
          var ln = (At + 1) * 2 - 1, qn = ee[ln], Zt = ln + 1, Bt = ee[Zt];
          if (Z(qn, Re) < 0)
            Zt < Jt && Z(Bt, qn) < 0 ? (ee[At] = Bt, ee[Zt] = Re, At = Zt) : (ee[At] = qn, ee[ln] = Re, At = ln);
          else if (Zt < Jt && Z(Bt, Re) < 0)
            ee[At] = Bt, ee[Zt] = Re, At = Zt;
          else
            return;
        }
      }
      function Z(ee, Re) {
        var tt = ee.sortIndex - Re.sortIndex;
        return tt !== 0 ? tt : ee.id - Re.id;
      }
      var te = 1, Pe = 2, q = 3, Ce = 4, se = 5;
      function Ye(ee, Re) {
      }
      var mt = typeof performance == "object" && typeof performance.now == "function";
      if (mt) {
        var ft = performance;
        ne.unstable_now = function() {
          return ft.now();
        };
      } else {
        var cn = Date, ct = cn.now();
        ne.unstable_now = function() {
          return cn.now() - ct;
        };
      }
      var Qe = 1073741823, dt = -1, be = 250, ut = 5e3, Fe = 1e4, rn = Qe, jt = [], Kt = [], an = 1, xt = null, De = q, Ut = !1, bt = !1, kt = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, we = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ie(ee) {
        for (var Re = vt(Kt); Re !== null; ) {
          if (Re.callback === null)
            Rt(Kt);
          else if (Re.startTime <= ee)
            Rt(Kt), Re.sortIndex = Re.expirationTime, Ct(jt, Re);
          else
            return;
          Re = vt(Kt);
        }
      }
      function _(ee) {
        if (kt = !1, ie(ee), !bt)
          if (vt(jt) !== null)
            bt = !0, On(P);
          else {
            var Re = vt(Kt);
            Re !== null && yr(_, Re.startTime - ee);
          }
      }
      function P(ee, Re) {
        bt = !1, kt && (kt = !1, la()), Ut = !0;
        var tt = De;
        try {
          var At;
          if (!K) return je(ee, Re);
        } finally {
          xt = null, De = tt, Ut = !1;
        }
      }
      function je(ee, Re) {
        var tt = Re;
        for (ie(tt), xt = vt(jt); xt !== null && !(xt.expirationTime > tt && (!ee || oi())); ) {
          var At = xt.callback;
          if (typeof At == "function") {
            xt.callback = null, De = xt.priorityLevel;
            var Jt = xt.expirationTime <= tt, pn = At(Jt);
            tt = ne.unstable_now(), typeof pn == "function" ? xt.callback = pn : xt === vt(jt) && Rt(jt), ie(tt);
          } else
            Rt(jt);
          xt = vt(jt);
        }
        if (xt !== null)
          return !0;
        var ln = vt(Kt);
        return ln !== null && yr(_, ln.startTime - tt), !1;
      }
      function Ue(ee, Re) {
        switch (ee) {
          case te:
          case Pe:
          case q:
          case Ce:
          case se:
            break;
          default:
            ee = q;
        }
        var tt = De;
        De = ee;
        try {
          return Re();
        } finally {
          De = tt;
        }
      }
      function rt(ee) {
        var Re;
        switch (De) {
          case te:
          case Pe:
          case q:
            Re = q;
            break;
          default:
            Re = De;
            break;
        }
        var tt = De;
        De = Re;
        try {
          return ee();
        } finally {
          De = tt;
        }
      }
      function Ze(ee) {
        var Re = De;
        return function() {
          var tt = De;
          De = Re;
          try {
            return ee.apply(this, arguments);
          } finally {
            De = tt;
          }
        };
      }
      function Ke(ee, Re, tt) {
        var At = ne.unstable_now(), Jt;
        if (typeof tt == "object" && tt !== null) {
          var pn = tt.delay;
          typeof pn == "number" && pn > 0 ? Jt = At + pn : Jt = At;
        } else
          Jt = At;
        var ln;
        switch (ee) {
          case te:
            ln = dt;
            break;
          case Pe:
            ln = be;
            break;
          case se:
            ln = rn;
            break;
          case Ce:
            ln = Fe;
            break;
          case q:
          default:
            ln = ut;
            break;
        }
        var qn = Jt + ln, Zt = {
          id: an++,
          callback: Re,
          priorityLevel: ee,
          startTime: Jt,
          expirationTime: qn,
          sortIndex: -1
        };
        return Jt > At ? (Zt.sortIndex = Jt, Ct(Kt, Zt), vt(jt) === null && Zt === vt(Kt) && (kt ? la() : kt = !0, yr(_, Jt - At))) : (Zt.sortIndex = qn, Ct(jt, Zt), !bt && !Ut && (bt = !0, On(P))), Zt;
      }
      function et() {
      }
      function at() {
        !bt && !Ut && (bt = !0, On(P));
      }
      function Vt() {
        return vt(jt);
      }
      function Dn(ee) {
        ee.callback = null;
      }
      function Rr() {
        return De;
      }
      var Sn = !1, er = null, Pn = -1, Vn = A, Vr = -1;
      function oi() {
        var ee = ne.unstable_now() - Vr;
        return !(ee < Vn);
      }
      function ia() {
      }
      function Gn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Vn = Math.floor(1e3 / ee) : Vn = A;
      }
      var En = function() {
        if (er !== null) {
          var ee = ne.unstable_now();
          Vr = ee;
          var Re = !0, tt = !0;
          try {
            tt = er(Re, ee);
          } finally {
            tt ? Bn() : (Sn = !1, er = null);
          }
        } else
          Sn = !1;
      }, Bn;
      if (typeof we == "function")
        Bn = function() {
          we(En);
        };
      else if (typeof MessageChannel < "u") {
        var mr = new MessageChannel(), Ba = mr.port2;
        mr.port1.onmessage = En, Bn = function() {
          Ba.postMessage(null);
        };
      } else
        Bn = function() {
          Ee(En, 0);
        };
      function On(ee) {
        er = ee, Sn || (Sn = !0, Bn());
      }
      function yr(ee, Re) {
        Pn = Ee(function() {
          ee(ne.unstable_now());
        }, Re);
      }
      function la() {
        J(Pn), Pn = -1;
      }
      var $a = ia, si = null;
      ne.unstable_IdlePriority = se, ne.unstable_ImmediatePriority = te, ne.unstable_LowPriority = Ce, ne.unstable_NormalPriority = q, ne.unstable_Profiling = si, ne.unstable_UserBlockingPriority = Pe, ne.unstable_cancelCallback = Dn, ne.unstable_continueExecution = at, ne.unstable_forceFrameRate = Gn, ne.unstable_getCurrentPriorityLevel = Rr, ne.unstable_getFirstCallbackNode = Vt, ne.unstable_next = rt, ne.unstable_pauseExecution = et, ne.unstable_requestPaint = $a, ne.unstable_runWithPriority = Ue, ne.unstable_scheduleCallback = Ke, ne.unstable_shouldYield = oi, ne.unstable_wrapCallback = Ze, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vE)), vE;
}
var rT;
function oT() {
  return rT || (rT = 1, process.env.NODE_ENV === "production" ? qm.exports = ek() : qm.exports = tk()), qm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function nk() {
  if (aT) return Pa;
  aT = 1;
  var ne = ev(), K = oT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ct = /* @__PURE__ */ new Set(), vt = {};
  function Rt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (vt[n] = r, n = 0; n < r.length; n++) Ct.add(r[n]);
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Z = Object.prototype.hasOwnProperty, te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pe = {}, q = {};
  function Ce(n) {
    return Z.call(q, n) ? !0 : Z.call(Pe, n) ? !1 : te.test(n) ? q[n] = !0 : (Pe[n] = !0, !1);
  }
  function se(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ye(n, r, l, o) {
    if (r === null || typeof r > "u" || se(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function mt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ft = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ft[n] = new mt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ft[r] = new mt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ft[n] = new mt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ft[n] = new mt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ft[n] = new mt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ft[n] = new mt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ft[n] = new mt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ft[n] = new mt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ft[n] = new mt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var cn = /[\-:]([a-z])/g;
  function ct(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      cn,
      ct
    );
    ft[r] = new mt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(cn, ct);
    ft[r] = new mt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(cn, ct);
    ft[r] = new mt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ft[n] = new mt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ft.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ft[n] = new mt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = ft.hasOwnProperty(r) ? ft[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ye(r, l, c, o) && (l = null), o || c === null ? Ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var dt = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ut = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), jt = Symbol.for("react.profiler"), Kt = Symbol.for("react.provider"), an = Symbol.for("react.context"), xt = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var je = !1;
  function Ue(n, r) {
    if (!n || je) return "";
    je = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      je = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function rt(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ue(n.type, !1), n;
      case 11:
        return n = Ue(n.type.render, !1), n;
      case 1:
        return n = Ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ze(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case ut:
        return "Portal";
      case jt:
        return "Profiler";
      case rn:
        return "StrictMode";
      case De:
        return "Suspense";
      case Ut:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case an:
        return (n.displayName || "Context") + ".Consumer";
      case Kt:
        return (n._context.displayName || "Context") + ".Provider";
      case xt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case bt:
        return r = n.displayName || null, r !== null ? r : Ze(n.type) || "Memo";
      case kt:
        r = n._payload, n = n._init;
        try {
          return Ze(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ke(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ze(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function at(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = at(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Rr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = at(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Sn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function er(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function Vr(n, r) {
    Vn(n, r);
    var l = et(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ia(n, r.type, l) : r.hasOwnProperty("defaultValue") && ia(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function oi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ia(n, r, l) {
    (r !== "number" || Sn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gn = Array.isArray;
  function En(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Bn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function mr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Gn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function Ba(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function On(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function yr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function la(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? yr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $a, si = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($a = $a || document.createElement("div"), $a.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $a.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Re = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Re).forEach(function(n) {
    tt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Re[r] = Re[n];
    });
  });
  function At(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Re.hasOwnProperty(n) && Re[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = At(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var pn = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (pn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function qn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zt = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, ua = null, gr = null;
  function Ca(n) {
    if (n = _e(n)) {
      if (typeof $t != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Rn(r), $t(n.stateNode, n.type, r));
    }
  }
  function Fi(n) {
    ua ? gr ? gr.push(n) : gr = [n] : ua = n;
  }
  function Kl() {
    if (ua) {
      var n = ua, r = gr;
      if (gr = ua = null, Ca(n), r) for (n = 0; n < r.length; n++) Ca(r[n]);
    }
  }
  function Jl(n, r) {
    return n(r);
  }
  function fl() {
  }
  var dl = !1;
  function Zl(n, r, l) {
    if (dl) return n(r, l);
    dl = !0;
    try {
      return Jl(n, r, l);
    } finally {
      dl = !1, (ua !== null || gr !== null) && (fl(), Kl());
    }
  }
  function Tr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Rn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var wr = !1;
  if (Ft) try {
    var tr = {};
    Object.defineProperty(tr, "passive", { get: function() {
      wr = !0;
    } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
  } catch {
    wr = !1;
  }
  function ci(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Ia = !1, fi = null, di = !1, R = null, B = { onError: function(n) {
    Ia = !0, fi = n;
  } };
  function le(n, r, l, o, c, d, m, E, T) {
    Ia = !1, fi = null, ci.apply(B, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (le.apply(this, arguments), Ia) {
      if (Ia) {
        var z = fi;
        Ia = !1, fi = null;
      } else throw Error(A(198));
      di || (di = !0, R = z);
    }
  }
  function Ge(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function $e(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ot(n) {
    if (Ge(n) !== n) throw Error(A(188));
  }
  function it(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ge(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ot(c), n;
          if (d === o) return ot(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Cn(n) {
    return n = it(n), n !== null ? en(n) : null;
  }
  function en(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = en(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var un = K.unstable_scheduleCallback, nr = K.unstable_cancelCallback, Ya = K.unstable_shouldYield, Qa = K.unstable_requestPaint, qe = K.unstable_now, Je = K.unstable_getCurrentPriorityLevel, Wa = K.unstable_ImmediatePriority, eu = K.unstable_UserBlockingPriority, tu = K.unstable_NormalPriority, pl = K.unstable_LowPriority, Yu = K.unstable_IdlePriority, vl = null, Br = null;
  function $o(n) {
    if (Br && typeof Br.onCommitFiberRoot == "function") try {
      Br.onCommitFiberRoot(vl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var xr = Math.clz32 ? Math.clz32 : Qu, ac = Math.log, ic = Math.LN2;
  function Qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ac(n) / ic | 0) | 0;
  }
  var hl = 64, oa = 4194304;
  function Ga(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
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
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function qa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ga(E) : (d &= m, d !== 0 && (o = Ga(d)));
    } else m = l & ~c, m !== 0 ? o = Ga(m) : d !== 0 && (o = Ga(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - xr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Wu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function nu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - xr(d), E = 1 << m, T = c[m];
      T === -1 ? ((E & l) === 0 || (E & o) !== 0) && (c[m] = Wu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function ml(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gu() {
    var n = hl;
    return hl <<= 1, (hl & 4194240) === 0 && (hl = 64), n;
  }
  function qu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function ji(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xr(r), n[r] = l;
  }
  function Yf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - xr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Hi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - xr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Xu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Tt, Io, pi, Be, Ku, rr = !1, vi = [], br = null, hi = null, on = null, It = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), $n = [], _r = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ra(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        br = null;
        break;
      case "dragenter":
      case "dragleave":
        hi = null;
        break;
      case "mouseover":
      case "mouseout":
        on = null;
        break;
      case "pointerover":
      case "pointerout":
        It.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(r.pointerId);
    }
  }
  function ru(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _e(r), r !== null && Io(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Yo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return br = ru(br, n, r, l, o, c), !0;
      case "dragenter":
        return hi = ru(hi, n, r, l, o, c), !0;
      case "mouseover":
        return on = ru(on, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return It.set(d, ru(It.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, yl.set(d, ru(yl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Qo(n) {
    var r = du(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = $e(l), r !== null) {
            n.blockedOn = r, Ku(n.priority, function() {
              pi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function gl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = eo(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Zt = o, l.target.dispatchEvent(o), Zt = null;
      } else return r = _e(l), r !== null && Io(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function au(n, r, l) {
    gl(n) && l.delete(r);
  }
  function Qf() {
    rr = !1, br !== null && gl(br) && (br = null), hi !== null && gl(hi) && (hi = null), on !== null && gl(on) && (on = null), It.forEach(au), yl.forEach(au);
  }
  function Ta(n, r) {
    n.blockedOn === r && (n.blockedOn = null, rr || (rr = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Qf)));
  }
  function Xa(n) {
    function r(c) {
      return Ta(c, n);
    }
    if (0 < vi.length) {
      Ta(vi[0], n);
      for (var l = 1; l < vi.length; l++) {
        var o = vi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (br !== null && Ta(br, n), hi !== null && Ta(hi, n), on !== null && Ta(on, n), It.forEach(r), yl.forEach(r), l = 0; l < $n.length; l++) o = $n[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < $n.length && (l = $n[0], l.blockedOn === null); ) Qo(l), l.blockedOn === null && $n.shift();
  }
  var mi = dt.ReactCurrentBatchConfig, wa = !0;
  function Ju(n, r, l, o) {
    var c = Dt, d = mi.transition;
    mi.transition = null;
    try {
      Dt = 1, Sl(n, r, l, o);
    } finally {
      Dt = c, mi.transition = d;
    }
  }
  function Zu(n, r, l, o) {
    var c = Dt, d = mi.transition;
    mi.transition = null;
    try {
      Dt = 4, Sl(n, r, l, o);
    } finally {
      Dt = c, mi.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    if (wa) {
      var c = eo(n, r, l, o);
      if (c === null) yc(n, r, o, iu, l), Ra(n, o);
      else if (Yo(c, n, r, l, o)) o.stopPropagation();
      else if (Ra(n, o), r & 4 && -1 < _r.indexOf(n)) {
        for (; c !== null; ) {
          var d = _e(c);
          if (d !== null && Tt(d), d = eo(n, r, l, o), d === null && yc(n, r, o, iu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else yc(n, r, o, null, l);
    }
  }
  var iu = null;
  function eo(n, r, l, o) {
    if (iu = null, n = Bt(o), n = du(n), n !== null) if (r = Ge(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = $e(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return iu = n, null;
  }
  function to(n) {
    switch (n) {
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
      case "resize":
      case "seeked":
      case "submit":
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
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
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
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Je()) {
          case Wa:
            return 1;
          case eu:
            return 4;
          case tu:
          case pl:
            return 16;
          case Yu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ka = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Ka ? Ka.value : Ka.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Oe, this.isPropagationStopped = Oe, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var Ne = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = ae(Ne), wt = ie({}, Ne, { view: 0, detail: 0 }), tn = ae(wt), Yt, nt, Qt, vn = ie({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Kf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Yt = n.screenX - Qt.screenX, nt = n.screenY - Qt.screenY) : nt = Yt = 0, Qt = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nt;
  } }), El = ae(vn), Wo = ie({}, vn, { dataTransfer: 0 }), Pi = ae(Wo), Go = ie({}, wt, { relatedTarget: 0 }), lu = ae(Go), Wf = ie({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lc = ae(Wf), Gf = ie({}, Ne, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = ae(Gf), qf = ie({}, Ne, { data: 0 }), Xf = ae(qf), nv = {
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
  }, rv = {
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
  }, Km = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Km[n]) ? !!r[n] : !1;
  }
  function Kf() {
    return Vi;
  }
  var Jf = ie({}, wt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Kf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = ae(Jf), ed = ie({}, vn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = ae(ed), uc = ie({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Kf }), iv = ae(uc), $r = ie({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bi = ae($r), Ln = ie({}, vn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $i = ae(Ln), td = [9, 13, 27, 32], no = Ft && "CompositionEvent" in window, qo = null;
  Ft && "documentMode" in document && (qo = document.documentMode);
  var Xo = Ft && "TextEvent" in window && !qo, lv = Ft && (!no || qo && 8 < qo && 11 >= qo), uv = " ", oc = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return td.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ro = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (oc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && oc ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (ro) return n === "compositionend" || !no && ov(n, r) ? (n = N(), C = h = Ka = null, ro = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function nd(n, r, l, o) {
    Fi(o), r = ns(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var yi = null, uu = null;
  function dv(n) {
    cu(n, 0);
  }
  function Ko(n) {
    var r = Za(n);
    if (Rr(r)) return n;
  }
  function ey(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (Ft) {
    var rd;
    if (Ft) {
      var ad = "oninput" in document;
      if (!ad) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), ad = typeof vv.oninput == "function";
      }
      rd = ad;
    } else rd = !1;
    pv = rd && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    yi && (yi.detachEvent("onpropertychange", mv), uu = yi = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Ko(uu)) {
      var r = [];
      nd(r, uu, n, Bt(n)), Zl(dv, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (hv(), yi = r, uu = l, yi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ko(uu);
  }
  function ny(n, r) {
    if (n === "click") return Ko(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Ko(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ja = typeof Object.is == "function" ? Object.is : ry;
  function Jo(n, r) {
    if (Ja(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Z.call(r, c) || !Ja(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function sc(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function Cl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Cl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Zo() {
    for (var n = window, r = Sn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Sn(n.document);
    }
    return r;
  }
  function cc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ao(n) {
    var r = Zo(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Cl(l.ownerDocument.documentElement, l)) {
      if (o !== null && cc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = sc(l, d);
          var m = sc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ay = Ft && "documentMode" in document && 11 >= document.documentMode, io = null, id = null, es = null, ld = !1;
  function ud(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ld || io == null || io !== Sn(o) || (o = io, "selectionStart" in o && cc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Jo(es, o) || (es = o, o = ns(id, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = io)));
  }
  function fc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ou = { animationend: fc("Animation", "AnimationEnd"), animationiteration: fc("Animation", "AnimationIteration"), animationstart: fc("Animation", "AnimationStart"), transitionend: fc("Transition", "TransitionEnd") }, ar = {}, od = {};
  Ft && (od = document.createElement("div").style, "AnimationEvent" in window || (delete ou.animationend.animation, delete ou.animationiteration.animation, delete ou.animationstart.animation), "TransitionEvent" in window || delete ou.transitionend.transition);
  function dc(n) {
    if (ar[n]) return ar[n];
    if (!ou[n]) return n;
    var r = ou[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in od) return ar[n] = r[l];
    return n;
  }
  var Ev = dc("animationend"), Cv = dc("animationiteration"), Rv = dc("animationstart"), Tv = dc("transitionend"), sd = /* @__PURE__ */ new Map(), pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function xa(n, r) {
    sd.set(n, r), Rt(r, [n]);
  }
  for (var cd = 0; cd < pc.length; cd++) {
    var su = pc[cd], iy = su.toLowerCase(), ly = su[0].toUpperCase() + su.slice(1);
    xa(iy, "on" + ly);
  }
  xa(Ev, "onAnimationEnd"), xa(Cv, "onAnimationIteration"), xa(Rv, "onAnimationStart"), xa("dblclick", "onDoubleClick"), xa("focusin", "onFocus"), xa("focusout", "onBlur"), xa(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));
  function vc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function cu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          vc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          vc(c, E, z), d = T;
        }
      }
    }
    if (di) throw n = R, di = !1, R = null, n;
  }
  function Ht(n, r) {
    var l = r[is];
    l === void 0 && (l = r[is] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function hc(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var mc = "_reactListening" + Math.random().toString(36).slice(2);
  function lo(n) {
    if (!n[mc]) {
      n[mc] = !0, Ct.forEach(function(l) {
        l !== "selectionchange" && (fd.has(l) || hc(l, !1, n), hc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[mc] || (r[mc] = !0, hc("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (to(r)) {
      case 1:
        var c = Ju;
        break;
      case 4:
        c = Zu;
        break;
      default:
        c = Sl;
    }
    l = c.bind(null, r, l, n), c = void 0, !wr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function yc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = du(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Zl(function() {
      var z = d, Y = Bt(l), W = [];
      e: {
        var I = sd.get(n);
        if (I !== void 0) {
          var fe = st, me = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Zf;
              break;
            case "focusin":
              me = "focus", fe = lu;
              break;
            case "focusout":
              me = "blur", fe = lu;
              break;
            case "beforeblur":
            case "afterblur":
              fe = lu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = El;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Pi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              fe = lc;
              break;
            case Tv:
              fe = Bi;
              break;
            case "scroll":
              fe = tn;
              break;
            case "wheel":
              fe = $i;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = av;
          }
          var Se = (r & 4) !== 0, _n = !Se && n === "scroll", k = Se ? I !== null ? I + "Capture" : null : I;
          Se = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var Q = L.stateNode;
            if (L.tag === 5 && Q !== null && (L = Q, k !== null && (Q = Tr(x, k), Q != null && Se.push(uo(x, Q, L)))), _n) break;
            x = x.return;
          }
          0 < Se.length && (I = new fe(I, me, null, l, Y), W.push({ event: I, listeners: Se }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", I && l !== Zt && (me = l.relatedTarget || l.fromElement) && (du(me) || me[Ii])) break e;
          if ((fe || I) && (I = Y.window === Y ? Y : (I = Y.ownerDocument) ? I.defaultView || I.parentWindow : window, fe ? (me = l.relatedTarget || l.toElement, fe = z, me = me ? du(me) : null, me !== null && (_n = Ge(me), me !== _n || me.tag !== 5 && me.tag !== 6) && (me = null)) : (fe = null, me = z), fe !== me)) {
            if (Se = El, Q = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Se = av, Q = "onPointerLeave", k = "onPointerEnter", x = "pointer"), _n = fe == null ? I : Za(fe), L = me == null ? I : Za(me), I = new Se(Q, x + "leave", fe, l, Y), I.target = _n, I.relatedTarget = L, Q = null, du(Y) === z && (Se = new Se(k, x + "enter", me, l, Y), Se.target = L, Se.relatedTarget = _n, Q = Se), _n = Q, fe && me) t: {
              for (Se = fe, k = me, x = 0, L = Se; L; L = Rl(L)) x++;
              for (L = 0, Q = k; Q; Q = Rl(Q)) L++;
              for (; 0 < x - L; ) Se = Rl(Se), x--;
              for (; 0 < L - x; ) k = Rl(k), L--;
              for (; x--; ) {
                if (Se === k || k !== null && Se === k.alternate) break t;
                Se = Rl(Se), k = Rl(k);
              }
              Se = null;
            }
            else Se = null;
            fe !== null && xv(W, I, fe, Se, !1), me !== null && _n !== null && xv(W, _n, me, Se, !0);
          }
        }
        e: {
          if (I = z ? Za(z) : window, fe = I.nodeName && I.nodeName.toLowerCase(), fe === "select" || fe === "input" && I.type === "file") var ye = ey;
          else if (fv(I)) if (pv) ye = gv;
          else {
            ye = yv;
            var Me = ty;
          }
          else (fe = I.nodeName) && fe.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (ye = ny);
          if (ye && (ye = ye(n, z))) {
            nd(W, ye, l, Y);
            break e;
          }
          Me && Me(n, I, z), n === "focusout" && (Me = I._wrapperState) && Me.controlled && I.type === "number" && ia(I, "number", I.value);
        }
        switch (Me = z ? Za(z) : window, n) {
          case "focusin":
            (fv(Me) || Me.contentEditable === "true") && (io = Me, id = z, es = null);
            break;
          case "focusout":
            es = id = io = null;
            break;
          case "mousedown":
            ld = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ld = !1, ud(W, l, Y);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            ud(W, l, Y);
        }
        var ze;
        if (no) e: {
          switch (n) {
            case "compositionstart":
              var Ve = "onCompositionStart";
              break e;
            case "compositionend":
              Ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ve = "onCompositionUpdate";
              break e;
          }
          Ve = void 0;
        }
        else ro ? ov(n, l) && (Ve = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ve = "onCompositionStart");
        Ve && (lv && l.locale !== "ko" && (ro || Ve !== "onCompositionStart" ? Ve === "onCompositionEnd" && ro && (ze = N()) : (Ka = Y, h = "value" in Ka ? Ka.value : Ka.textContent, ro = !0)), Me = ns(z, Ve), 0 < Me.length && (Ve = new Xf(Ve, n, null, l, Y), W.push({ event: Ve, listeners: Me }), ze ? Ve.data = ze : (ze = sv(l), ze !== null && (Ve.data = ze)))), (ze = Xo ? cv(n, l) : Jm(n, l)) && (z = ns(z, "onBeforeInput"), 0 < z.length && (Y = new Xf("onBeforeInput", "beforeinput", null, l, Y), W.push({ event: Y, listeners: z }), Y.data = ze));
      }
      cu(W, r);
    });
  }
  function uo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ns(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Tr(n, l), d != null && o.unshift(uo(n, d, c)), d = Tr(n, r), d != null && o.push(uo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Rl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = Tr(l, d), T != null && m.unshift(uo(l, T, E))) : c || (T = Tr(l, d), T != null && m.push(uo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(uy, "");
  }
  function gc(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(A(425));
  }
  function Tl() {
  }
  var rs = null, fu = null;
  function Sc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0, dd = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, oo = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv < "u" ? function(n) {
    return kv.resolve(null).then(n).catch(Cc);
  } : Ec;
  function Cc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function so(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Xa(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Xa(r);
  }
  function gi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Dv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Si = "__reactFiber$" + wl, as = "__reactProps$" + wl, Ii = "__reactContainer$" + wl, is = "__reactEvents$" + wl, co = "__reactListeners$" + wl, oy = "__reactHandles$" + wl;
  function du(n) {
    var r = n[Si];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ii] || l[Si]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Dv(n); n !== null; ) {
          if (l = n[Si]) return l;
          n = Dv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _e(n) {
    return n = n[Si] || n[Ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Za(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Rn(n) {
    return n[as] || null;
  }
  var yt = [], ba = -1;
  function ei(n) {
    return { current: n };
  }
  function nn(n) {
    0 > ba || (n.current = yt[ba], yt[ba] = null, ba--);
  }
  function xe(n, r) {
    ba++, yt[ba] = n.current, n.current = r;
  }
  var Ir = {}, gn = ei(Ir), In = ei(!1), Yr = Ir;
  function _a(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ir;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function fo() {
    nn(In), nn(gn);
  }
  function Ov(n, r, l) {
    if (gn.current !== Ir) throw Error(A(168));
    xe(gn, r), xe(In, l);
  }
  function ls(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Ke(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function Qr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ir, Yr = gn.current, xe(gn, n), xe(In, In.current), !0;
  }
  function Rc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = ls(n, r, Yr), o.__reactInternalMemoizedMergedChildContext = n, nn(In), nn(gn), xe(gn, n)) : nn(In), xe(In, l);
  }
  var Ei = null, po = !1, Yi = !1;
  function Tc(n) {
    Ei === null ? Ei = [n] : Ei.push(n);
  }
  function xl(n) {
    po = !0, Tc(n);
  }
  function Ci() {
    if (!Yi && Ei !== null) {
      Yi = !0;
      var n = 0, r = Dt;
      try {
        var l = Ei;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ei = null, po = !1;
      } catch (c) {
        throw Ei !== null && (Ei = Ei.slice(n + 1)), un(Wa, Ci), c;
      } finally {
        Dt = r, Yi = !1;
      }
    }
    return null;
  }
  var bl = [], _l = 0, kl = null, Qi = 0, Nn = [], ka = 0, sa = null, Ri = 1, Ti = "";
  function pu(n, r) {
    bl[_l++] = Qi, bl[_l++] = kl, kl = n, Qi = r;
  }
  function Lv(n, r, l) {
    Nn[ka++] = Ri, Nn[ka++] = Ti, Nn[ka++] = sa, sa = n;
    var o = Ri;
    n = Ti;
    var c = 32 - xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - xr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ri = 1 << 32 - xr(r) + c | l << c | o, Ti = d + n;
    } else Ri = 1 << d | l << c | o, Ti = n;
  }
  function wc(n) {
    n.return !== null && (pu(n, 1), Lv(n, 1, 0));
  }
  function xc(n) {
    for (; n === kl; ) kl = bl[--_l], bl[_l] = null, Qi = bl[--_l], bl[_l] = null;
    for (; n === sa; ) sa = Nn[--ka], Nn[ka] = null, Ti = Nn[--ka], Nn[ka] = null, Ri = Nn[--ka], Nn[ka] = null;
  }
  var Wr = null, Gr = null, fn = !1, Da = null;
  function pd(n, r) {
    var l = za(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Wr = n, Gr = gi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Wr = n, Gr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = sa !== null ? { id: Ri, overflow: Ti } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = za(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Wr = n, Gr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hd(n) {
    if (fn) {
      var r = Gr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (vd(n)) throw Error(A(418));
          r = gi(l.nextSibling);
          var o = Wr;
          r && Mv(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, Wr = n);
        }
      } else {
        if (vd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Wr = n;
      }
    }
  }
  function Yn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Wr = n;
  }
  function bc(n) {
    if (n !== Wr) return !1;
    if (!fn) return Yn(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Sc(n.type, n.memoizedProps)), r && (r = Gr)) {
      if (vd(n)) throw us(), Error(A(418));
      for (; r; ) pd(n, r), r = gi(r.nextSibling);
    }
    if (Yn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Gr = gi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Gr = null;
      }
    } else Gr = Wr ? gi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var n = Gr; n; ) n = gi(n.nextSibling);
  }
  function Dl() {
    Gr = Wr = null, fn = !1;
  }
  function Wi(n) {
    Da === null ? Da = [n] : Da.push(n);
  }
  var sy = dt.ReactCurrentBatchConfig;
  function vu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function _c(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function hu(n) {
    function r(k, x) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function l(k, x) {
      if (!n) return null;
      for (; x !== null; ) r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Fl(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, L, Q) {
      return x === null || x.tag !== 6 ? (x = Qd(L, k.mode, Q), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function T(k, x, L, Q) {
      var ye = L.type;
      return ye === Fe ? Y(k, x, L.props.children, Q, L.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === kt && Nv(ye) === x.type) ? (Q = c(x, L.props), Q.ref = vu(k, x, L), Q.return = k, Q) : (Q = Fs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = vu(k, x, L), Q.return = k, Q);
    }
    function z(k, x, L, Q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = uf(L, k.mode, Q), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function Y(k, x, L, Q, ye) {
      return x === null || x.tag !== 7 ? (x = Zi(L, k.mode, Q, ye), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function W(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Qd("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case be:
            return L = Fs(x.type, x.key, x.props, null, k.mode, L), L.ref = vu(k, null, x), L.return = k, L;
          case ut:
            return x = uf(x, k.mode, L), x.return = k, x;
          case kt:
            var Q = x._init;
            return W(k, Q(x._payload), L);
        }
        if (Gn(x) || we(x)) return x = Zi(x, k.mode, L, null), x.return = k, x;
        _c(k, x);
      }
      return null;
    }
    function I(k, x, L, Q) {
      var ye = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ye !== null ? null : E(k, x, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            return L.key === ye ? T(k, x, L, Q) : null;
          case ut:
            return L.key === ye ? z(k, x, L, Q) : null;
          case kt:
            return ye = L._init, I(
              k,
              x,
              ye(L._payload),
              Q
            );
        }
        if (Gn(L) || we(L)) return ye !== null ? null : Y(k, x, L, Q, null);
        _c(k, L);
      }
      return null;
    }
    function fe(k, x, L, Q, ye) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return k = k.get(L) || null, E(x, k, "" + Q, ye);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case be:
            return k = k.get(Q.key === null ? L : Q.key) || null, T(x, k, Q, ye);
          case ut:
            return k = k.get(Q.key === null ? L : Q.key) || null, z(x, k, Q, ye);
          case kt:
            var Me = Q._init;
            return fe(k, x, L, Me(Q._payload), ye);
        }
        if (Gn(Q) || we(Q)) return k = k.get(L) || null, Y(x, k, Q, ye, null);
        _c(x, Q);
      }
      return null;
    }
    function me(k, x, L, Q) {
      for (var ye = null, Me = null, ze = x, Ve = x = 0, Jn = null; ze !== null && Ve < L.length; Ve++) {
        ze.index > Ve ? (Jn = ze, ze = null) : Jn = ze.sibling;
        var Mt = I(k, ze, L[Ve], Q);
        if (Mt === null) {
          ze === null && (ze = Jn);
          break;
        }
        n && ze && Mt.alternate === null && r(k, ze), x = d(Mt, x, Ve), Me === null ? ye = Mt : Me.sibling = Mt, Me = Mt, ze = Jn;
      }
      if (Ve === L.length) return l(k, ze), fn && pu(k, Ve), ye;
      if (ze === null) {
        for (; Ve < L.length; Ve++) ze = W(k, L[Ve], Q), ze !== null && (x = d(ze, x, Ve), Me === null ? ye = ze : Me.sibling = ze, Me = ze);
        return fn && pu(k, Ve), ye;
      }
      for (ze = o(k, ze); Ve < L.length; Ve++) Jn = fe(ze, k, Ve, L[Ve], Q), Jn !== null && (n && Jn.alternate !== null && ze.delete(Jn.key === null ? Ve : Jn.key), x = d(Jn, x, Ve), Me === null ? ye = Jn : Me.sibling = Jn, Me = Jn);
      return n && ze.forEach(function(Pl) {
        return r(k, Pl);
      }), fn && pu(k, Ve), ye;
    }
    function Se(k, x, L, Q) {
      var ye = we(L);
      if (typeof ye != "function") throw Error(A(150));
      if (L = ye.call(L), L == null) throw Error(A(151));
      for (var Me = ye = null, ze = x, Ve = x = 0, Jn = null, Mt = L.next(); ze !== null && !Mt.done; Ve++, Mt = L.next()) {
        ze.index > Ve ? (Jn = ze, ze = null) : Jn = ze.sibling;
        var Pl = I(k, ze, Mt.value, Q);
        if (Pl === null) {
          ze === null && (ze = Jn);
          break;
        }
        n && ze && Pl.alternate === null && r(k, ze), x = d(Pl, x, Ve), Me === null ? ye = Pl : Me.sibling = Pl, Me = Pl, ze = Jn;
      }
      if (Mt.done) return l(
        k,
        ze
      ), fn && pu(k, Ve), ye;
      if (ze === null) {
        for (; !Mt.done; Ve++, Mt = L.next()) Mt = W(k, Mt.value, Q), Mt !== null && (x = d(Mt, x, Ve), Me === null ? ye = Mt : Me.sibling = Mt, Me = Mt);
        return fn && pu(k, Ve), ye;
      }
      for (ze = o(k, ze); !Mt.done; Ve++, Mt = L.next()) Mt = fe(ze, k, Ve, Mt.value, Q), Mt !== null && (n && Mt.alternate !== null && ze.delete(Mt.key === null ? Ve : Mt.key), x = d(Mt, x, Ve), Me === null ? ye = Mt : Me.sibling = Mt, Me = Mt);
      return n && ze.forEach(function(hh) {
        return r(k, hh);
      }), fn && pu(k, Ve), ye;
    }
    function _n(k, x, L, Q) {
      if (typeof L == "object" && L !== null && L.type === Fe && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            e: {
              for (var ye = L.key, Me = x; Me !== null; ) {
                if (Me.key === ye) {
                  if (ye = L.type, ye === Fe) {
                    if (Me.tag === 7) {
                      l(k, Me.sibling), x = c(Me, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Me.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === kt && Nv(ye) === Me.type) {
                    l(k, Me.sibling), x = c(Me, L.props), x.ref = vu(k, Me, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, Me);
                  break;
                } else r(k, Me);
                Me = Me.sibling;
              }
              L.type === Fe ? (x = Zi(L.props.children, k.mode, Q, L.key), x.return = k, k = x) : (Q = Fs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = vu(k, x, L), Q.return = k, k = Q);
            }
            return m(k);
          case ut:
            e: {
              for (Me = L.key; x !== null; ) {
                if (x.key === Me) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(k, x.sibling), x = c(x, L.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = uf(L, k.mode, Q), x.return = k, k = x;
            }
            return m(k);
          case kt:
            return Me = L._init, _n(k, x, Me(L._payload), Q);
        }
        if (Gn(L)) return me(k, x, L, Q);
        if (we(L)) return Se(k, x, L, Q);
        _c(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = Qd(L, k.mode, Q), x.return = k, k = x), m(k)) : l(k, x);
    }
    return _n;
  }
  var Tn = hu(!0), ue = hu(!1), ca = ei(null), qr = null, vo = null, md = null;
  function yd() {
    md = vo = qr = null;
  }
  function gd(n) {
    var r = ca.current;
    nn(ca), n._currentValue = r;
  }
  function Sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function hn(n, r) {
    qr = n, md = vo = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Un = !0), n.firstContext = null);
  }
  function Oa(n) {
    var r = n._currentValue;
    if (md !== n) if (n = { context: n, memoizedValue: r, next: null }, vo === null) {
      if (qr === null) throw Error(A(308));
      vo = n, qr.dependencies = { lanes: 0, firstContext: n };
    } else vo = vo.next = n;
    return r;
  }
  var mu = null;
  function Ed(n) {
    mu === null ? mu = [n] : mu.push(n);
  }
  function Cd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ed(r)) : (l.next = c.next, c.next = l), r.interleaved = l, fa(n, o);
  }
  function fa(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = !1;
  function Rd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ol(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (gt & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, fa(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ed(o)) : (r.next = c.next, c.next = r), o.interleaved = r, fa(n, l);
  }
  function kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Hi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function os(n, r, l, o) {
    var c = n.updateQueue;
    da = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Y = n.alternate;
      Y !== null && (Y = Y.updateQueue, E = Y.lastBaseUpdate, E !== m && (E === null ? Y.firstBaseUpdate = z : E.next = z, Y.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Y = z = T = null, E = d;
      do {
        var I = E.lane, fe = E.eventTime;
        if ((o & I) === I) {
          Y !== null && (Y = Y.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Se = E;
            switch (I = r, fe = l, Se.tag) {
              case 1:
                if (me = Se.payload, typeof me == "function") {
                  W = me.call(fe, W, I);
                  break e;
                }
                W = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Se.payload, I = typeof me == "function" ? me.call(fe, W, I) : me, I == null) break e;
                W = ie({}, W, I);
                break e;
              case 2:
                da = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else fe = { eventTime: fe, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Y === null ? (z = Y = fe, T = W) : Y = Y.next = fe, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Y, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      ki |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Td(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var ss = {}, wi = ei(ss), cs = ei(ss), fs = ei(ss);
  function yu(n) {
    if (n === ss) throw Error(A(174));
    return n;
  }
  function wd(n, r) {
    switch (xe(fs, r), xe(cs, n), xe(wi, ss), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : la(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = la(r, n);
    }
    nn(wi), xe(wi, r);
  }
  function gu() {
    nn(wi), nn(cs), nn(fs);
  }
  function Av(n) {
    yu(fs.current);
    var r = yu(wi.current), l = la(r, n.type);
    r !== l && (xe(cs, n), xe(wi, l));
  }
  function Dc(n) {
    cs.current === n && (nn(wi), nn(cs));
  }
  var mn = ei(0);
  function Oc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ds = [];
  function ke() {
    for (var n = 0; n < ds.length; n++) ds[n]._workInProgressVersionPrimary = null;
    ds.length = 0;
  }
  var lt = dt.ReactCurrentDispatcher, Ot = dt.ReactCurrentBatchConfig, Wt = 0, Lt = null, zn = null, Xn = null, Lc = !1, ps = !1, Su = 0, $ = 0;
  function _t() {
    throw Error(A(321));
  }
  function Ae(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ja(n[l], r[l])) return !1;
    return !0;
  }
  function Ll(n, r, l, o, c, d) {
    if (Wt = d, Lt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, lt.current = n === null || n.memoizedState === null ? Qc : Ss, n = l(o, c), ps) {
      d = 0;
      do {
        if (ps = !1, Su = 0, 25 <= d) throw Error(A(301));
        d += 1, Xn = zn = null, r.updateQueue = null, lt.current = Wc, n = l(o, c);
      } while (ps);
    }
    if (lt.current = wu, r = zn !== null && zn.next !== null, Wt = 0, Xn = zn = Lt = null, Lc = !1, r) throw Error(A(300));
    return n;
  }
  function ti() {
    var n = Su !== 0;
    return Su = 0, n;
  }
  function Sr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xn === null ? Lt.memoizedState = Xn = n : Xn = Xn.next = n, Xn;
  }
  function wn() {
    if (zn === null) {
      var n = Lt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = zn.next;
    var r = Xn === null ? Lt.memoizedState : Xn.next;
    if (r !== null) Xn = r, zn = n;
    else {
      if (n === null) throw Error(A(310));
      zn = n, n = { memoizedState: zn.memoizedState, baseState: zn.baseState, baseQueue: zn.baseQueue, queue: zn.queue, next: null }, Xn === null ? Lt.memoizedState = Xn = n : Xn = Xn.next = n;
    }
    return Xn;
  }
  function qi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ml(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = zn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Y = z.lane;
        if ((Wt & Y) === Y) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Y,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, Lt.lanes |= Y, ki |= Y;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Ja(o, r.memoizedState) || (Un = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Lt.lanes |= d, ki |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Eu(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ja(d, r.memoizedState) || (Un = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Mc() {
  }
  function Nc(n, r) {
    var l = Lt, o = wn(), c = r(), d = !Ja(o.memoizedState, c);
    if (d && (o.memoizedState = c, Un = !0), o = o.queue, vs(Ac.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xn !== null && Xn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Cu(9, Uc.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(A(349));
      (Wt & 30) !== 0 || zc(l, r, c);
    }
    return c;
  }
  function zc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Uc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Fc(r) && jc(n);
  }
  function Ac(n, r, l) {
    return l(function() {
      Fc(r) && jc(n);
    });
  }
  function Fc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ja(n, l);
    } catch {
      return !0;
    }
  }
  function jc(n) {
    var r = fa(n, 1);
    r !== null && Lr(r, n, 1, -1);
  }
  function Hc(n) {
    var r = Sr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Tu.bind(null, Lt, n), [r.memoizedState, n];
  }
  function Cu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Pc() {
    return wn().memoizedState;
  }
  function ho(n, r, l, o) {
    var c = Sr();
    Lt.flags |= n, c.memoizedState = Cu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function mo(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (zn !== null) {
      var m = zn.memoizedState;
      if (d = m.destroy, o !== null && Ae(o, m.deps)) {
        c.memoizedState = Cu(r, l, d, o);
        return;
      }
    }
    Lt.flags |= n, c.memoizedState = Cu(1 | r, l, d, o);
  }
  function Vc(n, r) {
    return ho(8390656, 8, n, r);
  }
  function vs(n, r) {
    return mo(2048, 8, n, r);
  }
  function Bc(n, r) {
    return mo(4, 2, n, r);
  }
  function hs(n, r) {
    return mo(4, 4, n, r);
  }
  function Ru(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function $c(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(4, 4, Ru.bind(null, r, n), l);
  }
  function ms() {
  }
  function Ic(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Yc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function xd(n, r, l) {
    return (Wt & 21) === 0 ? (n.baseState && (n.baseState = !1, Un = !0), n.memoizedState = l) : (Ja(l, r) || (l = Gu(), Lt.lanes |= l, ki |= l, n.baseState = !0), r);
  }
  function ys(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ot.transition;
    Ot.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, Ot.transition = o;
    }
  }
  function bd() {
    return wn().memoizedState;
  }
  function gs(n, r, l) {
    var o = Di(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, pa(n)) Fv(r, l);
    else if (l = Cd(n, r, l, o), l !== null) {
      var c = jn();
      Lr(l, n, o, c), Xt(l, r, o);
    }
  }
  function Tu(n, r, l) {
    var o = Di(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (pa(n)) Fv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ja(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Ed(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Cd(n, r, c, o), l !== null && (c = jn(), Lr(l, n, o, c), Xt(l, r, o));
    }
  }
  function pa(n) {
    var r = n.alternate;
    return n === Lt || r !== null && r === Lt;
  }
  function Fv(n, r) {
    ps = Lc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Xt(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Hi(n, l);
    }
  }
  var wu = { readContext: Oa, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, Qc = { readContext: Oa, useCallback: function(n, r) {
    return Sr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Oa, useEffect: Vc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ho(
      4194308,
      4,
      Ru.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ho(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ho(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Sr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Sr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = gs.bind(null, Lt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Sr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Hc, useDebugValue: ms, useDeferredValue: function(n) {
    return Sr().memoizedState = n;
  }, useTransition: function() {
    var n = Hc(!1), r = n[0];
    return n = ys.bind(null, n[1]), Sr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Lt, c = Sr();
    if (fn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(A(349));
      (Wt & 30) !== 0 || zc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Vc(Ac.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Cu(9, Uc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Sr(), r = Qn.identifierPrefix;
    if (fn) {
      var l = Ti, o = Ri;
      l = (o & ~(1 << 32 - xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Su++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = $++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ss = {
    readContext: Oa,
    useCallback: Ic,
    useContext: Oa,
    useEffect: vs,
    useImperativeHandle: $c,
    useInsertionEffect: Bc,
    useLayoutEffect: hs,
    useMemo: Yc,
    useReducer: Ml,
    useRef: Pc,
    useState: function() {
      return Ml(qi);
    },
    useDebugValue: ms,
    useDeferredValue: function(n) {
      var r = wn();
      return xd(r, zn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ml(qi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: Mc,
    useSyncExternalStore: Nc,
    useId: bd,
    unstable_isNewReconciler: !1
  }, Wc = { readContext: Oa, useCallback: Ic, useContext: Oa, useEffect: vs, useImperativeHandle: $c, useInsertionEffect: Bc, useLayoutEffect: hs, useMemo: Yc, useReducer: Eu, useRef: Pc, useState: function() {
    return Eu(qi);
  }, useDebugValue: ms, useDeferredValue: function(n) {
    var r = wn();
    return zn === null ? r.memoizedState = n : xd(r, zn.memoizedState, n);
  }, useTransition: function() {
    var n = Eu(qi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: Mc, useSyncExternalStore: Nc, useId: bd, unstable_isNewReconciler: !1 };
  function ni(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function _d(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Gc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = jn(), c = Di(n), d = Gi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ol(n, d, c), r !== null && (Lr(r, n, c, o), kc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = jn(), c = Di(n), d = Gi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ol(n, d, c), r !== null && (Lr(r, n, c, o), kc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = jn(), o = Di(n), c = Gi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ol(n, c, o), r !== null && (Lr(r, n, o, l), kc(r, n, o));
  } };
  function jv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function qc(n, r, l) {
    var o = !1, c = Ir, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Oa(d) : (c = Mn(r) ? Yr : gn.current, o = r.contextTypes, d = (o = o != null) ? _a(n, c) : Ir), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Gc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Gc.enqueueReplaceState(r, r.state, null);
  }
  function Es(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Oa(d) : (d = Mn(r) ? Yr : gn.current, c.context = _a(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (_d(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Gc.enqueueReplaceState(c, c.state, null), os(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xu(n, r) {
    try {
      var l = "", o = r;
      do
        l += rt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function kd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Dd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Xc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = Gi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Ro || (Ro = !0, ku = o), Dd(n, r);
    }, l;
  }
  function Od(n, r, l) {
    l = Gi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Dd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Dd(n, r), typeof o != "function" && (Ul === null ? Ul = /* @__PURE__ */ new Set([this]) : Ul.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ld(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Xc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = my.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Nl(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Gi(-1, 1), r.tag = 2, Ol(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Cs = dt.ReactCurrentOwner, Un = !1;
  function ir(n, r, l, o) {
    r.child = n === null ? ue(r, null, l, o) : Tn(r, n.child, l, o);
  }
  function Xr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return hn(r, c), o = Ll(n, r, l, o, d, c), l = ti(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ma(n, r, c)) : (fn && l && wc(r), r.flags |= 1, ir(n, r, o, c), r.child);
  }
  function bu(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Xe(n, r, d, o, c)) : (n = Fs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return Ma(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (Un = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Un = !0);
      else return r.lanes = n.lanes, Ma(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function Rs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(So, va), va |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xe(So, va), va |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, xe(So, va), va |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, xe(So, va), va |= o;
    return ir(n, r, c, l), r.child;
  }
  function Md(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Mn(l) ? Yr : gn.current;
    return d = _a(r, d), hn(r, c), l = Ll(n, r, l, o, d, c), o = ti(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ma(n, r, c)) : (fn && o && wc(r), r.flags |= 1, ir(n, r, l, c), r.child);
  }
  function $v(n, r, l, o, c) {
    if (Mn(l)) {
      var d = !0;
      Qr(r);
    } else d = !1;
    if (hn(r, c), r.stateNode === null) La(n, r), qc(r, l, o), Es(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Oa(z) : (z = Mn(l) ? Yr : gn.current, z = _a(r, z));
      var Y = l.getDerivedStateFromProps, W = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Hv(r, m, o, z), da = !1;
      var I = r.memoizedState;
      m.state = I, os(r, o, m, c), T = r.memoizedState, E !== o || I !== T || In.current || da ? (typeof Y == "function" && (_d(r, l, Y, o), T = r.memoizedState), (E = da || jv(r, l, E, o, I, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ni(r.type, E), m.props = z, W = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Oa(T) : (T = Mn(l) ? Yr : gn.current, T = _a(r, T));
      var fe = l.getDerivedStateFromProps;
      (Y = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== T) && Hv(r, m, o, T), da = !1, I = r.memoizedState, m.state = I, os(r, o, m, c);
      var me = r.memoizedState;
      E !== W || I !== me || In.current || da ? (typeof fe == "function" && (_d(r, l, fe, o), me = r.memoizedState), (z = da || jv(r, l, z, o, I, me, T) || !1) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ts(n, r, l, o, d, c);
  }
  function Ts(n, r, l, o, c, d) {
    Md(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Rc(r, l, !1), Ma(n, r, d);
    o = r.stateNode, Cs.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Tn(r, n.child, null, d), r.child = Tn(r, null, E, d)) : ir(n, r, E, d), r.memoizedState = o.state, c && Rc(r, l, !0), r.child;
  }
  function yo(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), wd(n, r.containerInfo);
  }
  function Iv(n, r, l, o, c) {
    return Dl(), Wi(c), r.flags |= 256, ir(n, r, l, o), r.child;
  }
  var Kc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Nd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Jc(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), xe(mn, c & 1), n === null)
      return hd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = jl(m, o, 0, null), n = Zi(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Nd(l), r.memoizedState = Kc, n) : zd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Yv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Fl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = Zi(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Nd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Kc, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function zd(n, r) {
    return r = jl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ws(n, r, l, o) {
    return o !== null && Wi(o), Tn(r, n.child, null, l), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Yv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = kd(Error(A(422))), ws(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = jl({ mode: "visible", children: o.children }, c, 0, null), d = Zi(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Tn(r, n.child, null, m), r.child.memoizedState = Nd(m), r.memoizedState = Kc, d);
    if ((r.mode & 1) === 0) return ws(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = kd(d, o, void 0), ws(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Un || E) {
      if (o = Qn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
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
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, fa(n, c), Lr(o, n, c, -1));
      }
      return Id(), o = kd(Error(A(421))), ws(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Gr = gi(c.nextSibling), Wr = r, fn = !0, Da = null, n !== null && (Nn[ka++] = Ri, Nn[ka++] = Ti, Nn[ka++] = sa, Ri = n.id, Ti = n.overflow, sa = r), r = zd(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Sd(n.return, r, l);
  }
  function kr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function xi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ir(n, r, o.children, l), o = mn.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ud(n, l, r);
        else if (n.tag === 19) Ud(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (xe(mn, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Oc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), kr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Oc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        kr(r, !0, l, null, d);
        break;
      case "together":
        kr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function La(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ma(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), ki |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function xs(n, r, l) {
    switch (r.tag) {
      case 3:
        yo(r), Dl();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Mn(r.type) && Qr(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        xe(ca, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (xe(mn, mn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? Jc(n, r, l) : (xe(mn, mn.current & 1), n = Ma(n, r, l), n !== null ? n.sibling : null);
        xe(mn, mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return xi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), xe(mn, mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Rs(n, r, l);
    }
    return Ma(n, r, l);
  }
  var Na, An, Qv, Wv;
  Na = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, An = function() {
  }, Qv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, yu(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = er(n, c), o = er(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Bn(n, c), o = Bn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Tl);
      }
      ln(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (vt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (vt.hasOwnProperty(z) ? (T != null && z === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function bs(n, r) {
    if (!fn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Kn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (xc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Kn(r), null;
      case 1:
        return Mn(r.type) && fo(), Kn(r), null;
      case 3:
        return o = r.stateNode, gu(), nn(In), nn(gn), ke(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Da !== null && (Du(Da), Da = null))), An(n, r), Kn(r), null;
      case 5:
        Dc(r);
        var c = yu(fs.current);
        if (l = r.type, n !== null && r.stateNode != null) Qv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Kn(r), null;
          }
          if (n = yu(wi.current), bc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Si] = r, o[as] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ts.length; c++) Ht(ts[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Pn(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                mr(o, d), Ht("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : vt.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
            }
            switch (l) {
              case "input":
                Dn(o), oi(o, d, !0);
                break;
              case "textarea":
                Dn(o), On(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Tl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = yr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Si] = r, n[as] = o, Na(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = qn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ts.length; c++) Ht(ts[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = er(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  mr(n, o), c = Bn(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && si(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (vt.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && Qe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Dn(n), oi(n, o, !1);
                  break;
                case "textarea":
                  Dn(n), On(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? En(n, !!o.multiple, d, !1) : o.defaultValue != null && En(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Tl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Kn(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = yu(fs.current), yu(wi.current), bc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Si] = r, (d = o.nodeValue !== l) && (n = Wr, n !== null)) switch (n.tag) {
              case 3:
                gc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Si] = r, r.stateNode = o;
        }
        return Kn(r), null;
      case 13:
        if (nn(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && Gr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) us(), Dl(), r.flags |= 98560, d = !1;
          else if (d = bc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Si] = r;
            } else Dl(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Kn(r), d = !1;
          } else Da !== null && (Du(Da), Da = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (mn.current & 1) !== 0 ? bn === 0 && (bn = 3) : Id())), r.updateQueue !== null && (r.flags |= 4), Kn(r), null);
      case 4:
        return gu(), An(n, r), n === null && lo(r.stateNode.containerInfo), Kn(r), null;
      case 10:
        return gd(r.type._context), Kn(r), null;
      case 17:
        return Mn(r.type) && fo(), Kn(r), null;
      case 19:
        if (nn(mn), d = r.memoizedState, d === null) return Kn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) bs(d, !1);
        else {
          if (bn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (m = Oc(n), m !== null) {
              for (r.flags |= 128, bs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return xe(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && qe() > Co && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Oc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), bs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn) return Kn(r), null;
          } else 2 * qe() - d.renderingStartTime > Co && l !== 1073741824 && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qe(), r.sibling = null, l = mn.current, xe(mn, o ? l & 1 | 2 : l & 1), r) : (Kn(r), null);
      case 22:
      case 23:
        return $d(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (va & 1073741824) !== 0 && (Kn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Kn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Zc(n, r) {
    switch (xc(r), r.tag) {
      case 1:
        return Mn(r.type) && fo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return gu(), nn(In), nn(gn), ke(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Dc(r), null;
      case 13:
        if (nn(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Dl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nn(mn), null;
      case 4:
        return gu(), null;
      case 10:
        return gd(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _s = !1, Er = !1, cy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function go(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      dn(n, r, o);
    }
    else l.current = null;
  }
  function ef(n, r, l) {
    try {
      l();
    } catch (o) {
      dn(n, r, o);
    }
  }
  var qv = !1;
  function Xv(n, r) {
    if (rs = wa, n = Zo(), cc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, Y = 0, W = n, I = null;
          t: for (; ; ) {
            for (var fe; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (fe = W.firstChild) !== null; )
              I = W, W = fe;
            for (; ; ) {
              if (W === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++Y === o && (T = m), (fe = W.nextSibling) !== null) break;
              W = I, I = W.parentNode;
            }
            W = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (fu = { focusedElem: n, selectionRange: l }, wa = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var me = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Se = me.memoizedProps, _n = me.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Se : ni(r.type, Se), _n);
              k.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (Q) {
        dn(r, r.return, Q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return me = qv, qv = !1, me;
  }
  function ks(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ef(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ds(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ad(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function tf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, tf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Si], delete r[as], delete r[is], delete r[co], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Os(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Xi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Os(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function bi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Tl));
    else if (o !== 4 && (n = n.child, n !== null)) for (bi(n, r, l), n = n.sibling; n !== null; ) bi(n, r, l), n = n.sibling;
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  var xn = null, Dr = !1;
  function Or(n, r, l) {
    for (l = l.child; l !== null; ) Kv(n, r, l), l = l.sibling;
  }
  function Kv(n, r, l) {
    if (Br && typeof Br.onCommitFiberUnmount == "function") try {
      Br.onCommitFiberUnmount(vl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Er || go(l, r);
      case 6:
        var o = xn, c = Dr;
        xn = null, Or(n, r, l), xn = o, Dr = c, xn !== null && (Dr ? (n = xn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : xn.removeChild(l.stateNode));
        break;
      case 18:
        xn !== null && (Dr ? (n = xn, l = l.stateNode, n.nodeType === 8 ? so(n.parentNode, l) : n.nodeType === 1 && so(n, l), Xa(n)) : so(xn, l.stateNode));
        break;
      case 4:
        o = xn, c = Dr, xn = l.stateNode.containerInfo, Dr = !0, Or(n, r, l), xn = o, Dr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Er && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && ef(l, r, m), c = c.next;
          } while (c !== o);
        }
        Or(n, r, l);
        break;
      case 1:
        if (!Er && (go(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          dn(l, r, E);
        }
        Or(n, r, l);
        break;
      case 21:
        Or(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Er = (o = Er) || l.memoizedState !== null, Or(n, r, l), Er = o) : Or(n, r, l);
        break;
      default:
        Or(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new cy()), r.forEach(function(o) {
        var c = uh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ri(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              xn = E.stateNode, Dr = !1;
              break e;
            case 3:
              xn = E.stateNode.containerInfo, Dr = !0;
              break e;
            case 4:
              xn = E.stateNode.containerInfo, Dr = !0;
              break e;
          }
          E = E.return;
        }
        if (xn === null) throw Error(A(160));
        Kv(d, m, c), xn = null, Dr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        dn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), Kr(n), o & 4) {
          try {
            ks(3, n, n.return), Ds(3, n);
          } catch (Se) {
            dn(n, n.return, Se);
          }
          try {
            ks(5, n, n.return);
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        break;
      case 1:
        ri(r, n), Kr(n), o & 512 && l !== null && go(l, l.return);
        break;
      case 5:
        if (ri(r, n), Kr(n), o & 512 && l !== null && go(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), qn(E, m);
            var z = qn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Y = T[m], W = T[m + 1];
              Y === "style" ? Jt(c, W) : Y === "dangerouslySetInnerHTML" ? si(c, W) : Y === "children" ? ee(c, W) : Qe(c, Y, W, z);
            }
            switch (E) {
              case "input":
                Vr(c, d);
                break;
              case "textarea":
                Ba(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? En(c, !!d.multiple, fe, !1) : I !== !!d.multiple && (d.defaultValue != null ? En(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : En(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[as] = d;
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (ri(r, n), Kr(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (ri(r, n), Kr(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Xa(r.containerInfo);
        } catch (Se) {
          dn(n, n.return, Se);
        }
        break;
      case 4:
        ri(r, n), Kr(n);
        break;
      case 13:
        ri(r, n), Kr(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = qe())), o & 4 && Jv(n);
        break;
      case 22:
        if (Y = l !== null && l.memoizedState !== null, n.mode & 1 ? (Er = (z = Er) || Y, ri(r, n), Er = z) : ri(r, n), Kr(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Y && (n.mode & 1) !== 0) for (ve = n, Y = n.child; Y !== null; ) {
            for (W = ve = Y; ve !== null; ) {
              switch (I = ve, fe = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ks(4, I, I.return);
                  break;
                case 1:
                  go(I, I.return);
                  var me = I.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Se) {
                      dn(o, l, Se);
                    }
                  }
                  break;
                case 5:
                  go(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Ls(W);
                    continue;
                  }
              }
              fe !== null ? (fe.return = I, ve = fe) : Ls(W);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Y === null) {
                Y = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = At("display", m));
                } catch (Se) {
                  dn(n, n.return, Se);
                }
              }
            } else if (W.tag === 6) {
              if (Y === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Se) {
                dn(n, n.return, Se);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Y === W && (Y = null), W = W.return;
            }
            Y === W && (Y = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        ri(r, n), Kr(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), Kr(n);
    }
  }
  function Kr(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Os(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Xi(n);
            _i(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Xi(n);
            bi(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        dn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    ve = n, jd(n);
  }
  function jd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || _s;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Er;
          E = _s;
          var z = Er;
          if (_s = m, (Er = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Hd(c) : T !== null ? (T.return = m, ve = T) : Hd(c);
          for (; d !== null; ) ve = d, jd(d), d = d.sibling;
          ve = c, _s = E, Er = z;
        }
        Zv(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ve = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Er || Ds(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Er) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ni(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Td(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Td(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var Y = z.memoizedState;
                  if (Y !== null) {
                    var W = Y.dehydrated;
                    W !== null && Xa(W);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          Er || r.flags & 512 && Ad(r);
        } catch (I) {
          dn(r, r.return, I);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ls(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Hd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ds(4, r);
            } catch (T) {
              dn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                dn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Ad(r);
            } catch (T) {
              dn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ad(r);
            } catch (T) {
              dn(r, m, T);
            }
        }
      } catch (T) {
        dn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var dy = Math.ceil, zl = dt.ReactCurrentDispatcher, _u = dt.ReactCurrentOwner, lr = dt.ReactCurrentBatchConfig, gt = 0, Qn = null, Fn = null, ur = 0, va = 0, So = ei(0), bn = 0, Ms = null, ki = 0, Eo = 0, nf = 0, Ns = null, Jr = null, Pd = 0, Co = 1 / 0, ha = null, Ro = !1, ku = null, Ul = null, rf = !1, Ki = null, zs = 0, Al = 0, To = null, Us = -1, Cr = 0;
  function jn() {
    return (gt & 6) !== 0 ? qe() : Us !== -1 ? Us : Us = qe();
  }
  function Di(n) {
    return (n.mode & 1) === 0 ? 1 : (gt & 2) !== 0 && ur !== 0 ? ur & -ur : sy.transition !== null ? (Cr === 0 && (Cr = Gu()), Cr) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : to(n.type)), n);
  }
  function Lr(n, r, l, o) {
    if (50 < Al) throw Al = 0, To = null, Error(A(185));
    ji(n, l, o), ((gt & 2) === 0 || n !== Qn) && (n === Qn && ((gt & 2) === 0 && (Eo |= l), bn === 4 && ai(n, ur)), Zr(n, o), l === 1 && gt === 0 && (r.mode & 1) === 0 && (Co = qe() + 500, po && Ci()));
  }
  function Zr(n, r) {
    var l = n.callbackNode;
    nu(n, r);
    var o = qa(n, n === Qn ? ur : 0);
    if (o === 0) l !== null && nr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && nr(l), r === 1) n.tag === 0 ? xl(Vd.bind(null, n)) : Tc(Vd.bind(null, n)), oo(function() {
        (gt & 6) === 0 && Ci();
      }), l = null;
      else {
        switch (Xu(o)) {
          case 1:
            l = Wa;
            break;
          case 4:
            l = eu;
            break;
          case 16:
            l = tu;
            break;
          case 536870912:
            l = Yu;
            break;
          default:
            l = tu;
        }
        l = sh(l, af.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function af(n, r) {
    if (Us = -1, Cr = 0, (gt & 6) !== 0) throw Error(A(327));
    var l = n.callbackNode;
    if (wo() && n.callbackNode !== l) return null;
    var o = qa(n, n === Qn ? ur : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = lf(n, o);
    else {
      r = o;
      var c = gt;
      gt |= 2;
      var d = th();
      (Qn !== n || ur !== r) && (ha = null, Co = qe() + 500, Ji(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      yd(), zl.current = d, gt = c, Fn !== null ? r = 0 : (Qn = null, ur = 0, r = bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = ml(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = Ms, Ji(n, 0), ai(n, o), Zr(n, qe()), l;
      if (r === 6) ai(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !py(c) && (r = lf(n, o), r === 2 && (d = ml(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = Ms, Ji(n, 0), ai(n, o), Zr(n, qe()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Lu(n, Jr, ha);
            break;
          case 3:
            if (ai(n, o), (o & 130023424) === o && (r = Pd + 500 - qe(), 10 < r)) {
              if (qa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                jn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(Lu.bind(null, n, Jr, ha), r);
              break;
            }
            Lu(n, Jr, ha);
            break;
          case 4:
            if (ai(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - xr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * dy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(Lu.bind(null, n, Jr, ha), o);
              break;
            }
            Lu(n, Jr, ha);
            break;
          case 5:
            Lu(n, Jr, ha);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Zr(n, qe()), n.callbackNode === l ? af.bind(null, n) : null;
  }
  function As(n, r) {
    var l = Ns;
    return n.current.memoizedState.isDehydrated && (Ji(n, r).flags |= 256), n = lf(n, r), n !== 2 && (r = Jr, Jr = l, r !== null && Du(r)), n;
  }
  function Du(n) {
    Jr === null ? Jr = n : Jr.push.apply(Jr, n);
  }
  function py(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ja(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ai(n, r) {
    for (r &= ~nf, r &= ~Eo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Vd(n) {
    if ((gt & 6) !== 0) throw Error(A(327));
    wo();
    var r = qa(n, 0);
    if ((r & 1) === 0) return Zr(n, qe()), null;
    var l = lf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ml(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = Ms, Ji(n, 0), ai(n, r), Zr(n, qe()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Lu(n, Jr, ha), Zr(n, qe()), null;
  }
  function Bd(n, r) {
    var l = gt;
    gt |= 1;
    try {
      return n(r);
    } finally {
      gt = l, gt === 0 && (Co = qe() + 500, po && Ci());
    }
  }
  function Ou(n) {
    Ki !== null && Ki.tag === 0 && (gt & 6) === 0 && wo();
    var r = gt;
    gt |= 1;
    var l = lr.transition, o = Dt;
    try {
      if (lr.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, lr.transition = l, gt = r, (gt & 6) === 0 && Ci();
    }
  }
  function $d() {
    va = So.current, nn(So);
  }
  function Ji(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, dd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (xc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && fo();
          break;
        case 3:
          gu(), nn(In), nn(gn), ke();
          break;
        case 5:
          Dc(o);
          break;
        case 4:
          gu();
          break;
        case 13:
          nn(mn);
          break;
        case 19:
          nn(mn);
          break;
        case 10:
          gd(o.type._context);
          break;
        case 22:
        case 23:
          $d();
      }
      l = l.return;
    }
    if (Qn = n, Fn = n = Fl(n.current, null), ur = va = r, bn = 0, Ms = null, nf = Eo = ki = 0, Jr = Ns = null, mu !== null) {
      for (r = 0; r < mu.length; r++) if (l = mu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      mu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Fn;
      try {
        if (yd(), lt.current = wu, Lc) {
          for (var o = Lt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Lc = !1;
        }
        if (Wt = 0, Xn = zn = Lt = null, ps = !1, Su = 0, _u.current = null, l === null || l.return === null) {
          bn = 1, Ms = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = ur, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Y = E, W = Y.tag;
            if ((Y.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var I = Y.alternate;
              I ? (Y.updateQueue = I.updateQueue, Y.memoizedState = I.memoizedState, Y.lanes = I.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var fe = Vv(m);
            if (fe !== null) {
              fe.flags &= -257, Nl(fe, m, E, d, r), fe.mode & 1 && Ld(d, z, r), r = fe, T = z;
              var me = r.updateQueue;
              if (me === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(T), r.updateQueue = Se;
              } else me.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                Ld(d, z, r), Id();
                break e;
              }
              T = Error(A(426));
            }
          } else if (fn && E.mode & 1) {
            var _n = Vv(m);
            if (_n !== null) {
              (_n.flags & 65536) === 0 && (_n.flags |= 256), Nl(_n, m, E, d, r), Wi(xu(T, E));
              break e;
            }
          }
          d = T = xu(T, E), bn !== 4 && (bn = 2), Ns === null ? Ns = [d] : Ns.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Pv(d, T, r);
                Uv(d, k);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ul === null || !Ul.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Q = Od(d, E, r);
                  Uv(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ye) {
        r = ye, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = zl.current;
    return zl.current = wu, n === null ? wu : n;
  }
  function Id() {
    (bn === 0 || bn === 3 || bn === 2) && (bn = 4), Qn === null || (ki & 268435455) === 0 && (Eo & 268435455) === 0 || ai(Qn, ur);
  }
  function lf(n, r) {
    var l = gt;
    gt |= 2;
    var o = th();
    (Qn !== n || ur !== r) && (ha = null, Ji(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (yd(), gt = l, zl.current = o, Fn !== null) throw Error(A(261));
    return Qn = null, ur = 0, bn;
  }
  function vy() {
    for (; Fn !== null; ) rh(Fn);
  }
  function nh() {
    for (; Fn !== null && !Ya(); ) rh(Fn);
  }
  function rh(n) {
    var r = oh(n.alternate, n, va);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Fn = r, _u.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = Gv(l, r, va), l !== null) {
          Fn = l;
          return;
        }
      } else {
        if (l = Zc(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          bn = 6, Fn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    bn === 0 && (bn = 5);
  }
  function Lu(n, r, l) {
    var o = Dt, c = lr.transition;
    try {
      lr.transition = null, Dt = 1, hy(n, r, l, o);
    } finally {
      lr.transition = c, Dt = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      wo();
    while (Ki !== null);
    if ((gt & 6) !== 0) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Yf(n, d), n === Qn && (Fn = Qn = null, ur = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || rf || (rf = !0, sh(tu, function() {
      return wo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = lr.transition, lr.transition = null;
      var m = Dt;
      Dt = 1;
      var E = gt;
      gt |= 4, _u.current = null, Xv(n, l), Fd(l, n), ao(fu), wa = !!rs, fu = rs = null, n.current = l, fy(l), Qa(), gt = E, Dt = m, lr.transition = d;
    } else n.current = l;
    if (rf && (rf = !1, Ki = n, zs = c), d = n.pendingLanes, d === 0 && (Ul = null), $o(l.stateNode), Zr(n, qe()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ro) throw Ro = !1, n = ku, ku = null, n;
    return (zs & 1) !== 0 && n.tag !== 0 && wo(), d = n.pendingLanes, (d & 1) !== 0 ? n === To ? Al++ : (Al = 0, To = n) : Al = 0, Ci(), null;
  }
  function wo() {
    if (Ki !== null) {
      var n = Xu(zs), r = lr.transition, l = Dt;
      try {
        if (lr.transition = null, Dt = 16 > n ? 16 : n, Ki === null) var o = !1;
        else {
          if (n = Ki, Ki = null, zs = 0, (gt & 6) !== 0) throw Error(A(331));
          var c = gt;
          for (gt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if ((ve.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var Y = ve;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ks(8, Y, d);
                    }
                    var W = Y.child;
                    if (W !== null) W.return = Y, ve = W;
                    else for (; ve !== null; ) {
                      Y = ve;
                      var I = Y.sibling, fe = Y.return;
                      if (tf(Y), Y === z) {
                        ve = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = fe, ve = I;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Se = me.child;
                  if (Se !== null) {
                    me.child = null;
                    do {
                      var _n = Se.sibling;
                      Se.sibling = null, Se = _n;
                    } while (Se !== null);
                  }
                }
                ve = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ks(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ve = k;
                break e;
              }
              ve = d.return;
            }
          }
          var x = n.current;
          for (ve = x; ve !== null; ) {
            m = ve;
            var L = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && L !== null) L.return = m, ve = L;
            else e: for (m = x; ve !== null; ) {
              if (E = ve, (E.flags & 2048) !== 0) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ds(9, E);
                }
              } catch (ye) {
                dn(E, E.return, ye);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var Q = E.sibling;
              if (Q !== null) {
                Q.return = E.return, ve = Q;
                break e;
              }
              ve = E.return;
            }
          }
          if (gt = c, Ci(), Br && typeof Br.onPostCommitFiberRoot == "function") try {
            Br.onPostCommitFiberRoot(vl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, lr.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = xu(l, r), r = Pv(n, r, 1), n = Ol(n, r, 1), r = jn(), n !== null && (ji(n, 1, r), Zr(n, r));
  }
  function dn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ul === null || !Ul.has(o))) {
          n = xu(l, n), n = Od(r, n, 1), r = Ol(r, n, 1), n = jn(), r !== null && (ji(r, 1, n), Zr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = jn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (ur & l) === l && (bn === 4 || bn === 3 && (ur & 130023424) === ur && 500 > qe() - Pd ? Ji(n, 0) : nf |= l), Zr(n, r);
  }
  function lh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = oa, oa <<= 1, (oa & 130023424) === 0 && (oa = 4194304)));
    var l = jn();
    n = fa(n, r), n !== null && (ji(n, r, l), Zr(n, l));
  }
  function yy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function uh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || In.current) Un = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Un = !1, xs(n, r, l);
      Un = (n.flags & 131072) !== 0;
    }
    else Un = !1, fn && (r.flags & 1048576) !== 0 && Lv(r, Qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        La(n, r), n = r.pendingProps;
        var c = _a(r, gn.current);
        hn(r, l), c = Ll(null, r, o, n, c, l);
        var d = ti();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(o) ? (d = !0, Qr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rd(r), c.updater = Gc, r.stateNode = c, c._reactInternals = r, Es(r, o, n, l), r = Ts(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && wc(r), ir(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (La(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = ni(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = $v(null, r, o, n, l);
              break e;
            case 11:
              r = Xr(null, r, o, n, l);
              break e;
            case 14:
              r = bu(null, r, o, ni(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ni(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ni(o, c), $v(n, r, o, c, l);
      case 3:
        e: {
          if (yo(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), os(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xu(Error(A(423)), r), r = Iv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xu(Error(A(424)), r), r = Iv(n, r, o, l, c);
            break e;
          } else for (Gr = gi(r.stateNode.containerInfo.firstChild), Wr = r, fn = !0, Da = null, l = ue(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Dl(), o === c) {
              r = Ma(n, r, l);
              break e;
            }
            ir(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && hd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Sc(o, c) ? m = null : d !== null && Sc(o, d) && (r.flags |= 32), Md(n, r), ir(n, r, m, l), r.child;
      case 6:
        return n === null && hd(r), null;
      case 13:
        return Jc(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Tn(r, null, o, l) : ir(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ni(o, c), Xr(n, r, o, c, l);
      case 7:
        return ir(n, r, r.pendingProps, l), r.child;
      case 8:
        return ir(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ir(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, xe(ca, o._currentValue), o._currentValue = m, d !== null) if (Ja(d.value, m)) {
            if (d.children === c.children && !In.current) {
              r = Ma(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Gi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Y = z.pending;
                      Y === null ? T.next = T : (T.next = Y.next, Y.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Sd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Sd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ir(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, hn(r, l), c = Oa(c), o = o(c), r.flags |= 1, ir(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ni(o, r.pendingProps), c = ni(o.type, c), bu(n, r, o, c, l);
      case 15:
        return Xe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ni(o, c), La(n, r), r.tag = 1, Mn(o) ? (n = !0, Qr(r)) : n = !1, hn(r, l), qc(r, o, c), Es(r, o, c, l), Ts(null, r, o, !0, n, l);
      case 19:
        return xi(n, r, l);
      case 22:
        return Rs(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function sh(n, r) {
    return un(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function za(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === xt) return 11;
      if (n === bt) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = za(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Fs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Yd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Fe:
        return Zi(l.children, c, d, r);
      case rn:
        m = 8, c |= 8;
        break;
      case jt:
        return n = za(12, l, r, c | 2), n.elementType = jt, n.lanes = d, n;
      case De:
        return n = za(13, l, r, c), n.elementType = De, n.lanes = d, n;
      case Ut:
        return n = za(19, l, r, c), n.elementType = Ut, n.lanes = d, n;
      case Ee:
        return jl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Kt:
            m = 10;
            break e;
          case an:
            m = 9;
            break e;
          case xt:
            m = 11;
            break e;
          case bt:
            m = 14;
            break e;
          case kt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = za(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Zi(n, r, l, o) {
    return n = za(7, n, o, r), n.lanes = l, n;
  }
  function jl(n, r, l, o) {
    return n = za(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = za(6, n, null, r), n.lanes = l, n;
  }
  function uf(n, r, l) {
    return r = za(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qu(0), this.expirationTimes = qu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function of(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = za(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rd(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ut, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Wd(n) {
    if (!n) return Ir;
    n = n._reactInternals;
    e: {
      if (Ge(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mn(l)) return ls(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = of(l, o, !0, n, c, d, m, E, T), n.context = Wd(null), l = n.current, o = jn(), c = Di(l), d = Gi(o, c), d.callback = r ?? null, Ol(l, d, c), n.current.lanes = c, ji(n, c, o), Zr(n, o), n;
  }
  function sf(n, r, l, o) {
    var c = r.current, d = jn(), m = Di(c);
    return l = Wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Gi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ol(c, r, m), n !== null && (Lr(n, c, m, d), kc(n, c, m)), m;
  }
  function cf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Gd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function ff(n, r) {
    Gd(n, r), (n = n.alternate) && Gd(n, r);
  }
  function dh() {
    return null;
  }
  var Mu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function qd(n) {
    this._internalRoot = n;
  }
  df.prototype.render = qd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    sf(n, r, null, null);
  }, df.prototype.unmount = qd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ou(function() {
        sf(null, n, null, null);
      }), r[Ii] = null;
    }
  };
  function df(n) {
    this._internalRoot = n;
  }
  df.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Be();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < $n.length && r !== 0 && r < $n[l].priority; l++) ;
      $n.splice(l, 0, n), l === 0 && Qo(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function pf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = cf(m);
          d.call(z);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Ii] = m.current, lo(n.nodeType === 8 ? n.parentNode : n), Ou(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = cf(T);
        E.call(z);
      };
    }
    var T = of(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Ii] = T.current, lo(n.nodeType === 8 ? n.parentNode : n), Ou(function() {
      sf(r, T, l, o);
    }), T;
  }
  function js(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = cf(m);
          E.call(T);
        };
      }
      sf(r, m, n, c);
    } else m = Cy(l, r, n, c, o);
    return cf(m);
  }
  Tt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ga(r.pendingLanes);
          l !== 0 && (Hi(r, l | 1), Zr(r, qe()), (gt & 6) === 0 && (Co = qe() + 500, Ci()));
        }
        break;
      case 13:
        Ou(function() {
          var o = fa(n, 1);
          if (o !== null) {
            var c = jn();
            Lr(o, n, 1, c);
          }
        }), ff(n, 1);
    }
  }, Io = function(n) {
    if (n.tag === 13) {
      var r = fa(n, 134217728);
      if (r !== null) {
        var l = jn();
        Lr(r, n, 134217728, l);
      }
      ff(n, 134217728);
    }
  }, pi = function(n) {
    if (n.tag === 13) {
      var r = Di(n), l = fa(n, r);
      if (l !== null) {
        var o = jn();
        Lr(l, n, r, o);
      }
      ff(n, r);
    }
  }, Be = function() {
    return Dt;
  }, Ku = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Vr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Rn(o);
              if (!c) throw Error(A(90));
              Rr(o), Vr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ba(n, l);
        break;
      case "select":
        r = l.value, r != null && En(n, !!l.multiple, r, !1);
    }
  }, Jl = Bd, fl = Ou;
  var Ry = { usingClientEntryPoint: !1, Events: [_e, Za, Rn, Fi, Kl, Bd] }, Hs = { findFiberByHostInstance: du, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Cn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hl.isDisabled && Hl.supportsFiber) try {
      vl = Hl.inject(vh), Br = Hl;
    } catch {
    }
  }
  return Pa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, Pa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(A(200));
    return Ey(n, r, null, l);
  }, Pa.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(A(299));
    var l = !1, o = "", c = Mu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = of(n, 1, !1, null, null, l, !1, o, c), n[Ii] = r.current, lo(n.nodeType === 8 ? n.parentNode : n), new qd(r);
  }, Pa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Cn(r), n = n === null ? null : n.stateNode, n;
  }, Pa.flushSync = function(n) {
    return Ou(n);
  }, Pa.hydrate = function(n, r, l) {
    if (!pf(r)) throw Error(A(200));
    return js(null, n, r, !0, l);
  }, Pa.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Mu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Ii] = r.current, lo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new df(r);
  }, Pa.render = function(n, r, l) {
    if (!pf(r)) throw Error(A(200));
    return js(null, n, r, !1, l);
  }, Pa.unmountComponentAtNode = function(n) {
    if (!pf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Ou(function() {
      js(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ii] = null;
      });
    }), !0) : !1;
  }, Pa.unstable_batchedUpdates = Bd, Pa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!pf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return js(n, r, l, !1, o);
  }, Pa.version = "18.3.1-next-f1338f8080-20240426", Pa;
}
var Va = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function rk() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ne = ev(), K = oT(), A = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ct = !1;
    function vt(e) {
      Ct = e;
    }
    function Rt(e) {
      if (!Ct) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ft("warn", e, a);
      }
    }
    function S(e) {
      if (!Ct) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ft("error", e, a);
      }
    }
    function Ft(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Z = 0, te = 1, Pe = 2, q = 3, Ce = 4, se = 5, Ye = 6, mt = 7, ft = 8, cn = 9, ct = 10, Qe = 11, dt = 12, be = 13, ut = 14, Fe = 15, rn = 16, jt = 17, Kt = 18, an = 19, xt = 21, De = 22, Ut = 23, bt = 24, kt = 25, Ee = !0, J = !1, we = !1, ie = !1, _ = !1, P = !0, je = !0, Ue = !0, rt = !0, Ze = /* @__PURE__ */ new Set(), Ke = {}, et = {};
    function at(e, t) {
      Vt(e, t), Vt(e + "Capture", t);
    }
    function Vt(e, t) {
      Ke[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ke[e] = t;
      {
        var a = e.toLowerCase();
        et[a] = e, e === "onDoubleClick" && (et.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ze.add(t[i]);
    }
    var Dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Rr = Object.prototype.hasOwnProperty;
    function Sn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function er(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Vn(e, t) {
      if (er(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Sn(e)), Pn(e);
    }
    function Vr(e) {
      if (er(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sn(e)), Pn(e);
    }
    function oi(e, t) {
      if (er(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Sn(e)), Pn(e);
    }
    function ia(e, t) {
      if (er(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Sn(e)), Pn(e);
    }
    function Gn(e) {
      if (er(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Sn(e)), Pn(e);
    }
    function En(e) {
      if (er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Sn(e)), Pn(e);
    }
    var Bn = 0, mr = 1, Ba = 2, On = 3, yr = 4, la = 5, $a = 6, si = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = si + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Re = new RegExp("^[" + si + "][" + ee + "]*$"), tt = {}, At = {};
    function Jt(e) {
      return Rr.call(At, e) ? !0 : Rr.call(tt, e) ? !1 : Re.test(e) ? (At[e] = !0, !0) : (tt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
      return t !== null ? t.type === Bn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ln(e, t, a, i) {
      if (a !== null && a.type === Bn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function qn(e, t, a, i) {
      if (t === null || typeof t > "u" || ln(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case yr:
            return t === !1;
          case la:
            return isNaN(t);
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zt(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Bt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ba || t === On || t === yr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, ua = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ua.forEach(function(e) {
      $t[e] = new Bt(
        e,
        Bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      $t[t] = new Bt(
        t,
        mr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ba,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ba,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        On,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        yr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        la,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var gr = /[\-\:]([a-z])/g, Ca = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(gr, Ca);
      $t[t] = new Bt(
        t,
        mr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(gr, Ca);
      $t[t] = new Bt(
        t,
        mr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(gr, Ca);
      $t[t] = new Bt(
        t,
        mr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        mr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fi = "xlinkHref";
    $t[Fi] = new Bt(
      "xlinkHref",
      mr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        mr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Kl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Jl = !1;
    function fl(e) {
      !Jl && Kl.test(e) && (Jl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function dl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Vn(a, t), i.sanitizeURL && fl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === yr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : qn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (qn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return qn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Zl(e, t, a, i) {
      {
        if (!Jt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Vn(a, t), u === "" + a ? a : u;
      }
    }
    function Tr(e, t, a, i) {
      var u = Zt(t);
      if (!pn(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
          if (Jt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Vn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === On || b === yr && a === !0 ? w = "" : (Vn(a, y), w = "" + a, u.sanitizeURL && fl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var wr = Symbol.for("react.element"), tr = Symbol.for("react.portal"), ci = Symbol.for("react.fragment"), Ia = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), di = Symbol.for("react.provider"), R = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Ge = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), ot = Symbol.for("react.scope"), it = Symbol.for("react.debug_trace_mode"), Cn = Symbol.for("react.offscreen"), en = Symbol.for("react.legacy_hidden"), un = Symbol.for("react.cache"), nr = Symbol.for("react.tracing_marker"), Ya = Symbol.iterator, Qa = "@@iterator";
    function qe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ya && e[Ya] || e[Qa];
      return typeof t == "function" ? t : null;
    }
    var Je = Object.assign, Wa = 0, eu, tu, pl, Yu, vl, Br, $o;
    function xr() {
    }
    xr.__reactDisabledLog = !0;
    function ac() {
      {
        if (Wa === 0) {
          eu = console.log, tu = console.info, pl = console.warn, Yu = console.error, vl = console.group, Br = console.groupCollapsed, $o = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Wa++;
      }
    }
    function ic() {
      {
        if (Wa--, Wa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, e, {
              value: eu
            }),
            info: Je({}, e, {
              value: tu
            }),
            warn: Je({}, e, {
              value: pl
            }),
            error: Je({}, e, {
              value: Yu
            }),
            group: Je({}, e, {
              value: vl
            }),
            groupCollapsed: Je({}, e, {
              value: Br
            }),
            groupEnd: Je({}, e, {
              value: $o
            })
          });
        }
        Wa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qu = A.ReactCurrentDispatcher, hl;
    function oa(e, t, a) {
      {
        if (hl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            hl = i && i[1] || "";
          }
        return `
` + hl + e;
      }
    }
    var Ga = !1, qa;
    {
      var Wu = typeof WeakMap == "function" ? WeakMap : Map;
      qa = new Wu();
    }
    function nu(e, t) {
      if (!e || Ga)
        return "";
      {
        var a = qa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ga = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Qu.current, Qu.current = null, ac();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && qa.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ga = !1, Qu.current = s, ic(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? oa(w) : "";
      return typeof e == "function" && qa.set(e, M), M;
    }
    function ml(e, t, a) {
      return nu(e, !0);
    }
    function Gu(e, t, a) {
      return nu(e, !1);
    }
    function qu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ji(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return nu(e, qu(e));
      if (typeof e == "string")
        return oa(e);
      switch (e) {
        case le:
          return oa("Suspense");
        case he:
          return oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return Gu(e.render);
          case Ge:
            return ji(e.type, t, a);
          case $e: {
            var i = e, u = i._payload, s = i._init;
            try {
              return ji(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Yf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case se:
          return oa(e.type);
        case rn:
          return oa("Lazy");
        case be:
          return oa("Suspense");
        case an:
          return oa("SuspenseList");
        case Z:
        case Pe:
        case Fe:
          return Gu(e.type);
        case Qe:
          return Gu(e.type.render);
        case te:
          return ml(e.type);
        default:
          return "";
      }
    }
    function Hi(e) {
      try {
        var t = "", a = e;
        do
          t += Yf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Dt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Xu(e) {
      return e.displayName || "Context";
    }
    function Tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ci:
          return "Fragment";
        case tr:
          return "Portal";
        case fi:
          return "Profiler";
        case Ia:
          return "StrictMode";
        case le:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Xu(t) + ".Consumer";
          case di:
            var a = e;
            return Xu(a._context) + ".Provider";
          case B:
            return Dt(e, e.render, "ForwardRef");
          case Ge:
            var i = e.displayName || null;
            return i !== null ? i : Tt(e.type) || "Memo";
          case $e: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Tt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Io(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function pi(e) {
      return e.displayName || "Context";
    }
    function Be(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case bt:
          return "Cache";
        case cn:
          var i = a;
          return pi(i) + ".Consumer";
        case ct:
          var u = a;
          return pi(u._context) + ".Provider";
        case Kt:
          return "DehydratedFragment";
        case Qe:
          return Io(a, a.render, "ForwardRef");
        case mt:
          return "Fragment";
        case se:
          return a;
        case Ce:
          return "Portal";
        case q:
          return "Root";
        case Ye:
          return "Text";
        case rn:
          return Tt(a);
        case ft:
          return a === Ia ? "StrictMode" : "Mode";
        case De:
          return "Offscreen";
        case dt:
          return "Profiler";
        case xt:
          return "Scope";
        case be:
          return "Suspense";
        case an:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case te:
        case Z:
        case jt:
        case Pe:
        case ut:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ku = A.ReactDebugCurrentFrame, rr = null, vi = !1;
    function br() {
      {
        if (rr === null)
          return null;
        var e = rr._debugOwner;
        if (e !== null && typeof e < "u")
          return Be(e);
      }
      return null;
    }
    function hi() {
      return rr === null ? "" : Hi(rr);
    }
    function on() {
      Ku.getCurrentStack = null, rr = null, vi = !1;
    }
    function It(e) {
      Ku.getCurrentStack = e === null ? null : hi, rr = e, vi = !1;
    }
    function yl() {
      return rr;
    }
    function $n(e) {
      vi = e;
    }
    function _r(e) {
      return "" + e;
    }
    function Ra(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return En(e), e;
        default:
          return "";
      }
    }
    var ru = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Yo(e, t) {
      ru[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function gl(e) {
      return e._valueTracker;
    }
    function au(e) {
      e._valueTracker = null;
    }
    function Qf(e) {
      var t = "";
      return e && (Qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ta(e) {
      var t = Qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      En(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            En(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            En(p), i = "" + p;
          },
          stopTracking: function() {
            au(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Xa(e) {
      gl(e) || (e._valueTracker = Ta(e));
    }
    function mi(e) {
      if (!e)
        return !1;
      var t = gl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ju = !1, Zu = !1, Sl = !1, iu = !1;
    function eo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function to(e, t) {
      var a = e, i = t.checked, u = Je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ka(e, t) {
      Yo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component", t.type), Zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ju && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component", t.type), Ju = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ra(t.value != null ? t.value : i),
        controlled: eo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Tr(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = eo(t);
        !a._wrapperState.controlled && i && !iu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), iu = !0), a._wrapperState.controlled && !i && !Sl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Sl = !0);
      }
      h(e, t);
      var u = Ra(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = _r(u)) : a.value !== _r(u) && (a.value = _r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, Ra(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = _r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Vn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            mi(f), C(f, p);
          }
        }
      }
    }
    function Oe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var ae = !1, Ne = !1, st = !1;
    function wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ne.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ne || (Ne = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (st || (st = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function tn(e, t) {
      t.value != null && e.setAttribute("value", _r(Ra(t.value)));
    }
    var Yt = Array.isArray;
    function nt(e) {
      return Yt(e);
    }
    var Qt;
    Qt = !1;
    function vn() {
      var e = br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var El = ["value", "defaultValue"];
    function Wo(e) {
      {
        Yo("select", e);
        for (var t = 0; t < El.length; t++) {
          var a = El[t];
          if (e[a] != null) {
            var i = nt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, vn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, vn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = _r(Ra(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Go(e, t) {
      return Je({}, t, {
        value: void 0
      });
    }
    function lu(e, t) {
      var a = e;
      Wo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Wf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function lc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Gf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xf(e, t) {
      var a = e;
      Yo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (nt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ra(i)
      };
    }
    function nv(e, t) {
      var a = e, i = Ra(t.value), u = Ra(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = _r(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Km(e, t) {
      nv(e, t);
    }
    var Vi = "http://www.w3.org/1999/xhtml", Kf = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function Zf(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Kf;
        default:
          return Vi;
      }
    }
    function ed(e, t) {
      return e == null || e === Vi ? Zf(t) : e === Jf && t === "foreignObject" ? Vi : e;
    }
    var av = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, uc, iv = av(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        uc = uc || document.createElement("div"), uc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = uc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $r = 1, Bi = 3, Ln = 8, $i = 9, td = 11, no = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Xo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Xo).forEach(function(e) {
      uv.forEach(function(t) {
        Xo[lv(t, e)] = Xo[e];
      });
    });
    function oc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Xo.hasOwnProperty(e) && Xo[e]) ? t + "px" : (ia(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function ro(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, Zm = /^-ms-/, fv = /-(.)/g, nd = /;\s*$/, yi = {}, uu = {}, dv = !1, Ko = !1, ey = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        yi.hasOwnProperty(e) && yi[e] || (yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ey(e.replace(Zm, "ms-"))
        ));
      }, rd = function(e) {
        yi.hasOwnProperty(e) && yi[e] || (yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ad = function(e, t) {
        uu.hasOwnProperty(t) && uu[t] || (uu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(nd, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Ko || (Ko = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : Jm.test(e) ? rd(e) : nd.test(t) && ad(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var mv = cv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ro(i)) + ":", t += oc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || mv(i, t[i]);
          var s = oc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = qo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ry(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Ja = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Jo = Je({
      menuitem: !0
    }, Ja), Sv = "__html";
    function sc(e, t) {
      if (t) {
        if (Jo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Cl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Zo = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, cc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ao = {}, ay = new RegExp("^(aria)-[" + ee + "]*$"), io = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function id(e, t) {
      {
        if (Rr.call(ao, t) && ao[t])
          return !0;
        if (io.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = cc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ao[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ao[t] = !0, !0;
        }
        if (ay.test(t)) {
          var u = t.toLowerCase(), s = cc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ao[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ao[t] = !0, !0;
        }
      }
      return !0;
    }
    function es(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = id(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ld(e, t) {
      Cl(e, t) || es(e, t);
    }
    var ud = !1;
    function fc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ud && (ud = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ou = function() {
    };
    {
      var ar = {}, od = /^on./, dc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ee + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      ou = function(e, t, a, i) {
        if (Rr.call(ar, t) && ar[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ar[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), ar[t] = !0, !0;
          if (od.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), ar[t] = !0, !0;
        } else if (od.test(t))
          return dc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ar[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ar[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ar[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ar[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ar[t] = !0, !0;
        var v = Zt(t), y = v !== null && v.type === Bn;
        if (Zo.hasOwnProperty(u)) {
          var g = Zo[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), ar[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ar[t] = !0, !0;
        return typeof a == "boolean" && ln(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ar[t] = !0, !0) : y ? !0 : ln(t, a, v, !1) ? (ar[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === On && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ar[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ou(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Cl(e, t) || Rv(e, t, a);
    }
    var sd = 1, pc = 2, xa = 4, cd = sd | pc | xa, su = null;
    function iy(e) {
      su !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), su = e;
    }
    function ly() {
      su === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), su = null;
    }
    function ts(e) {
      return e === su;
    }
    function fd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var vc = null, cu = null, Ht = null;
    function hc(e) {
      var t = _o(e);
      if (t) {
        if (typeof vc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          vc(t.stateNode, t.type, i);
        }
      }
    }
    function mc(e) {
      vc = e;
    }
    function lo(e) {
      cu ? Ht ? Ht.push(e) : Ht = [e] : cu = e;
    }
    function wv() {
      return cu !== null || Ht !== null;
    }
    function yc() {
      if (cu) {
        var e = cu, t = Ht;
        if (cu = null, Ht = null, hc(e), t)
          for (var a = 0; a < t.length; a++)
            hc(t[a]);
      }
    }
    var uo = function(e, t) {
      return e(t);
    }, ns = function() {
    }, Rl = !1;
    function xv() {
      var e = wv();
      e && (ns(), yc());
    }
    function bv(e, t, a) {
      if (Rl)
        return e(t, a);
      Rl = !0;
      try {
        return uo(e, t, a);
      } finally {
        Rl = !1, xv();
      }
    }
    function uy(e, t, a) {
      uo = e, ns = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function gc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function Tl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (gc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var rs = !1;
    if (Dn)
      try {
        var fu = {};
        Object.defineProperty(fu, "passive", {
          get: function() {
            rs = !0;
          }
        }), window.addEventListener("test", fu, fu), window.removeEventListener("test", fu, fu);
      } catch {
        rs = !1;
      }
    function Sc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ec = Sc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var dd = document.createElement("react");
      Ec = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          dd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var oe = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, j(), a.apply(i, oe), w = !1;
        }
        var Te, Et = !1, pt = !1;
        function D(O) {
          if (Te = O.error, Et = !0, Te === null && O.colno === 0 && O.lineno === 0 && (pt = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), dd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), dd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Et ? pt && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", D), !b)
          return j(), Sc.apply(this, arguments);
      };
    }
    var kv = Ec, oo = !1, Cc = null, so = !1, gi = null, Dv = {
      onError: function(e) {
        oo = !0, Cc = e;
      }
    };
    function wl(e, t, a, i, u, s, f, p, v) {
      oo = !1, Cc = null, kv.apply(Dv, arguments);
    }
    function Si(e, t, a, i, u, s, f, p, v) {
      if (wl.apply(this, arguments), oo) {
        var y = is();
        so || (so = !0, gi = y);
      }
    }
    function as() {
      if (so) {
        var e = gi;
        throw so = !1, gi = null, e;
      }
    }
    function Ii() {
      return oo;
    }
    function is() {
      if (oo) {
        var e = Cc;
        return oo = !1, Cc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function co(e) {
      return e._reactInternals;
    }
    function oy(e) {
      return e._reactInternals !== void 0;
    }
    function du(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), Za = (
      /*                */
      1
    ), Rn = (
      /*                    */
      2
    ), yt = (
      /*                       */
      4
    ), ba = (
      /*                */
      16
    ), ei = (
      /*                 */
      32
    ), nn = (
      /*                     */
      64
    ), xe = (
      /*                   */
      128
    ), Ir = (
      /*            */
      256
    ), gn = (
      /*                          */
      512
    ), In = (
      /*                     */
      1024
    ), Yr = (
      /*                      */
      2048
    ), _a = (
      /*                    */
      4096
    ), Mn = (
      /*                   */
      8192
    ), fo = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), ls = (
      /*                   */
      32768
    ), Qr = (
      /*                */
      65536
    ), Rc = (
      /* */
      131072
    ), Ei = (
      /*                       */
      1048576
    ), po = (
      /*                    */
      2097152
    ), Yi = (
      /*                 */
      4194304
    ), Tc = (
      /*                */
      8388608
    ), xl = (
      /*               */
      16777216
    ), Ci = (
      /*              */
      33554432
    ), bl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      yt | In | 0
    ), _l = Rn | yt | ba | ei | gn | _a | Mn, kl = yt | nn | gn | Mn, Qi = Yr | ba, Nn = Yi | Tc | po, ka = A.ReactCurrentOwner;
    function sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Rn | _a)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === q ? a : null;
    }
    function Ri(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ti(e) {
      return e.tag === q ? e.stateNode.containerInfo : null;
    }
    function pu(e) {
      return sa(e) === e;
    }
    function Lv(e) {
      {
        var t = ka.current;
        if (t !== null && t.tag === te) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Be(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = co(e);
      return u ? sa(u) === u : !1;
    }
    function wc(e) {
      if (sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function xc(e) {
      var t = e.alternate;
      if (!t) {
        var a = sa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return wc(s), e;
            if (v === u)
              return wc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Wr(e) {
      var t = xc(e);
      return t !== null ? Gr(t) : null;
    }
    function Gr(e) {
      if (e.tag === se || e.tag === Ye)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Gr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function fn(e) {
      var t = xc(e);
      return t !== null ? Da(t) : null;
    }
    function Da(e) {
      if (e.tag === se || e.tag === Ye)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ce) {
          var a = Da(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var pd = K.unstable_scheduleCallback, Mv = K.unstable_cancelCallback, vd = K.unstable_shouldYield, hd = K.unstable_requestPaint, Yn = K.unstable_now, bc = K.unstable_getCurrentPriorityLevel, us = K.unstable_ImmediatePriority, Dl = K.unstable_UserBlockingPriority, Wi = K.unstable_NormalPriority, sy = K.unstable_LowPriority, vu = K.unstable_IdlePriority, _c = K.unstable_yieldValue, Nv = K.unstable_setDisableYieldValue, hu = null, Tn = null, ue = null, ca = !1, qr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function vo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        je && (e = Je({}, e, {
          getLaneLabelMap: mu,
          injectProfilingHooks: Oa
        })), hu = t.inject(e), Tn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function md(e, t) {
      if (Tn && typeof Tn.onScheduleFiberRoot == "function")
        try {
          Tn.onScheduleFiberRoot(hu, e, t);
        } catch (a) {
          ca || (ca = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function yd(e, t) {
      if (Tn && typeof Tn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & xe) === xe;
          if (Ue) {
            var i;
            switch (t) {
              case kr:
                i = us;
                break;
              case xi:
                i = Dl;
                break;
              case La:
                i = Wi;
                break;
              case Ma:
                i = vu;
                break;
              default:
                i = Wi;
                break;
            }
            Tn.onCommitFiberRoot(hu, e, i, a);
          }
        } catch (u) {
          ca || (ca = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function gd(e) {
      if (Tn && typeof Tn.onPostCommitFiberRoot == "function")
        try {
          Tn.onPostCommitFiberRoot(hu, e);
        } catch (t) {
          ca || (ca = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Sd(e) {
      if (Tn && typeof Tn.onCommitFiberUnmount == "function")
        try {
          Tn.onCommitFiberUnmount(hu, e);
        } catch (t) {
          ca || (ca = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function hn(e) {
      if (typeof _c == "function" && (Nv(e), vt(e)), Tn && typeof Tn.setStrictMode == "function")
        try {
          Tn.setStrictMode(hu, e);
        } catch (t) {
          ca || (ca = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Oa(e) {
      ue = e;
    }
    function mu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Su; a++) {
          var i = Fv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ed(e) {
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function Cd() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function fa(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function da() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function Rd(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function Gi(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ol() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function kc(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function os(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function Td() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function ss(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function wi(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function cs(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function fs() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function yu(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function wd() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function gu(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function Av() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Dc() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function mn(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Oc(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function ds(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var ke = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), Ot = (
      /*                    */
      2
    ), Wt = (
      /*               */
      8
    ), Lt = (
      /*              */
      16
    ), zn = Math.clz32 ? Math.clz32 : ps, Xn = Math.log, Lc = Math.LN2;
    function ps(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Xn(t) / Lc | 0) | 0;
    }
    var Su = 31, $ = (
      /*                        */
      0
    ), _t = (
      /*                          */
      0
    ), Ae = (
      /*                        */
      1
    ), Ll = (
      /*    */
      2
    ), ti = (
      /*             */
      4
    ), Sr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), qi = (
      /*                */
      32
    ), Ml = (
      /*                       */
      4194240
    ), Eu = (
      /*                        */
      64
    ), Mc = (
      /*                        */
      128
    ), Nc = (
      /*                        */
      256
    ), zc = (
      /*                        */
      512
    ), Uc = (
      /*                        */
      1024
    ), Ac = (
      /*                        */
      2048
    ), Fc = (
      /*                        */
      4096
    ), jc = (
      /*                        */
      8192
    ), Hc = (
      /*                        */
      16384
    ), Cu = (
      /*                       */
      32768
    ), Pc = (
      /*                       */
      65536
    ), ho = (
      /*                       */
      131072
    ), mo = (
      /*                       */
      262144
    ), Vc = (
      /*                       */
      524288
    ), vs = (
      /*                       */
      1048576
    ), Bc = (
      /*                       */
      2097152
    ), hs = (
      /*                            */
      130023424
    ), Ru = (
      /*                             */
      4194304
    ), $c = (
      /*                             */
      8388608
    ), ms = (
      /*                             */
      16777216
    ), Ic = (
      /*                             */
      33554432
    ), Yc = (
      /*                             */
      67108864
    ), xd = Ru, ys = (
      /*          */
      134217728
    ), bd = (
      /*                          */
      268435455
    ), gs = (
      /*               */
      268435456
    ), Tu = (
      /*                        */
      536870912
    ), pa = (
      /*                   */
      1073741824
    );
    function Fv(e) {
      {
        if (e & Ae)
          return "Sync";
        if (e & Ll)
          return "InputContinuousHydration";
        if (e & ti)
          return "InputContinuous";
        if (e & Sr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & qi)
          return "TransitionHydration";
        if (e & Ml)
          return "Transition";
        if (e & hs)
          return "Retry";
        if (e & ys)
          return "SelectiveHydration";
        if (e & gs)
          return "IdleHydration";
        if (e & Tu)
          return "Idle";
        if (e & pa)
          return "Offscreen";
      }
    }
    var Xt = -1, wu = Eu, Qc = Ru;
    function Ss(e) {
      switch (Nl(e)) {
        case Ae:
          return Ae;
        case Ll:
          return Ll;
        case ti:
          return ti;
        case Sr:
          return Sr;
        case wn:
          return wn;
        case qi:
          return qi;
        case Eu:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Cu:
        case Pc:
        case ho:
        case mo:
        case Vc:
        case vs:
        case Bc:
          return e & Ml;
        case Ru:
        case $c:
        case ms:
        case Ic:
        case Yc:
          return e & hs;
        case ys:
          return ys;
        case gs:
          return gs;
        case Tu:
          return Tu;
        case pa:
          return pa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Wc(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & bd;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = Ss(p);
        else {
          var v = f & s;
          v !== $ && (i = Ss(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = Ss(y) : s !== $ && (i = Ss(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = Nl(i), b = Nl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (b & Ml) !== $
        )
          return t;
      }
      (i & ti) !== $ && (i |= a & wn);
      var w = e.entangledLanes;
      if (w !== $)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var j = Un(U), oe = 1 << j;
          i |= M[j], U &= ~oe;
        }
      return i;
    }
    function ni(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = Un(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function _d(e, t) {
      switch (e) {
        case Ae:
        case Ll:
        case ti:
          return t + 250;
        case Sr:
        case wn:
        case qi:
        case Eu:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Cu:
        case Pc:
        case ho:
        case mo:
        case Vc:
        case vs:
        case Bc:
          return t + 5e3;
        case Ru:
        case $c:
        case ms:
        case Ic:
        case Yc:
          return Xt;
        case ys:
        case gs:
        case Tu:
        case pa:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Gc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === $ || (v & u) !== $) && (s[p] = _d(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function jv(e) {
      return Ss(e.pendingLanes);
    }
    function qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== $ ? t : t & pa ? pa : $;
    }
    function Hv(e) {
      return (e & Ae) !== $;
    }
    function Es(e) {
      return (e & bd) !== $;
    }
    function xu(e) {
      return (e & hs) === e;
    }
    function kd(e) {
      var t = Ae | ti | wn;
      return (e & t) === $;
    }
    function Dd(e) {
      return (e & Ml) === e;
    }
    function Xc(e, t) {
      var a = Ll | ti | Sr | wn;
      return (t & a) !== $;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Od(e) {
      return (e & Ml) !== $;
    }
    function Ld() {
      var e = wu;
      return wu <<= 1, (wu & Ml) === $ && (wu = Eu), e;
    }
    function Vv() {
      var e = Qc;
      return Qc <<= 1, (Qc & hs) === $ && (Qc = Ru), e;
    }
    function Nl(e) {
      return e & -e;
    }
    function Cs(e) {
      return Nl(e);
    }
    function Un(e) {
      return 31 - zn(e);
    }
    function ir(e) {
      return Un(e);
    }
    function Xr(e, t) {
      return (e & t) !== $;
    }
    function bu(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function Rs(e, t) {
      return e & ~t;
    }
    function Md(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function $v(e, t) {
      return e !== _t && e < t ? e : t;
    }
    function Ts(e) {
      for (var t = [], a = 0; a < Su; a++)
        t.push(e);
      return t;
    }
    function yo(e, t, a) {
      e.pendingLanes |= t, t !== Tu && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = ir(t);
      i[u] = a;
    }
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Un(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function Kc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p;
        i[p] = $, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function Jc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Un(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function zd(e, t) {
      var a = Nl(t), i;
      switch (a) {
        case ti:
          i = Ll;
          break;
        case wn:
          i = Sr;
          break;
        case Eu:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Cu:
        case Pc:
        case ho:
        case mo:
        case Vc:
        case vs:
        case Bc:
        case Ru:
        case $c:
        case ms:
        case Ic:
        case Yc:
          i = qi;
          break;
        case Tu:
          i = gs;
          break;
        default:
          i = _t;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== _t ? _t : i;
    }
    function ws(e, t, a) {
      if (qr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ir(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Yv(e, t) {
      if (qr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ir(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ud(e, t) {
      return null;
    }
    var kr = Ae, xi = ti, La = wn, Ma = Tu, xs = _t;
    function Na() {
      return xs;
    }
    function An(e) {
      xs = e;
    }
    function Qv(e, t) {
      var a = xs;
      try {
        return xs = e, t();
      } finally {
        xs = a;
      }
    }
    function Wv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function bs(e, t) {
      return e > t ? e : t;
    }
    function Kn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = Nl(e);
      return Kn(kr, t) ? Kn(xi, t) ? Es(t) ? La : Ma : xi : kr;
    }
    function Zc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var _s;
    function Er(e) {
      _s = e;
    }
    function cy(e) {
      _s(e);
    }
    var ve;
    function go(e) {
      ve = e;
    }
    var ef;
    function qv(e) {
      ef = e;
    }
    var Xv;
    function ks(e) {
      Xv = e;
    }
    var Ds;
    function Ad(e) {
      Ds = e;
    }
    var tf = !1, Os = [], Xi = null, bi = null, _i = null, xn = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), Or = [], Kv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Jv(e) {
      return Kv.indexOf(e) > -1;
    }
    function ri(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xi = null;
          break;
        case "dragenter":
        case "dragleave":
          bi = null;
          break;
        case "mouseover":
        case "mouseout":
          _i = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          xn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Dr.delete(i);
          break;
        }
      }
    }
    function Kr(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ri(t, a, i, u, s);
        if (t !== null) {
          var p = _o(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function fy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Xi = Kr(Xi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return bi = Kr(bi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return _i = Kr(_i, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return xn.set(y, Kr(xn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Dr.set(b, Kr(Dr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = Bs(e.target);
      if (t !== null) {
        var a = sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = Ri(a);
            if (u !== null) {
              e.blockedOn = u, Ds(e.priority, function() {
                ef(a);
              });
              return;
            }
          } else if (i === q) {
            var s = a.stateNode;
            if (Zc(s)) {
              e.blockedOn = Ti(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Or.length && Kn(t, Or[i].priority); i++)
        ;
      Or.splice(i, 0, a), i === 0 && jd(a);
    }
    function Ls(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Eo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = _o(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hd(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function dy() {
      tf = !1, Xi !== null && Ls(Xi) && (Xi = null), bi !== null && Ls(bi) && (bi = null), _i !== null && Ls(_i) && (_i = null), xn.forEach(Hd), Dr.forEach(Hd);
    }
    function zl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, tf || (tf = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, dy)));
    }
    function _u(e) {
      if (Os.length > 0) {
        zl(Os[0], e);
        for (var t = 1; t < Os.length; t++) {
          var a = Os[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && zl(Xi, e), bi !== null && zl(bi, e), _i !== null && zl(_i, e);
      var i = function(p) {
        return zl(p, e);
      };
      xn.forEach(i), Dr.forEach(i);
      for (var u = 0; u < Or.length; u++) {
        var s = Or[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Or.length > 0; ) {
        var f = Or[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && Or.shift();
      }
    }
    var lr = A.ReactCurrentBatchConfig, gt = !0;
    function Qn(e) {
      gt = !!e;
    }
    function Fn() {
      return gt;
    }
    function ur(e, t, a) {
      var i = nf(t), u;
      switch (i) {
        case kr:
          u = va;
          break;
        case xi:
          u = So;
          break;
        case La:
        default:
          u = bn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function va(e, t, a, i) {
      var u = Na(), s = lr.transition;
      lr.transition = null;
      try {
        An(kr), bn(e, t, a, i);
      } finally {
        An(u), lr.transition = s;
      }
    }
    function So(e, t, a, i) {
      var u = Na(), s = lr.transition;
      lr.transition = null;
      try {
        An(xi), bn(e, t, a, i);
      } finally {
        An(u), lr.transition = s;
      }
    }
    function bn(e, t, a, i) {
      gt && Ms(e, t, a, i);
    }
    function Ms(e, t, a, i) {
      var u = Eo(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, ki, a), Fd(e, i);
        return;
      }
      if (fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & xa && Jv(e)) {
        for (; u !== null; ) {
          var s = _o(u);
          s !== null && cy(s);
          var f = Eo(e, t, a, i);
          if (f === null && Dy(e, t, i, ki, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var ki = null;
    function Eo(e, t, a, i) {
      ki = null;
      var u = fd(i), s = Bs(u);
      if (s !== null) {
        var f = sa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = Ri(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === q) {
            var y = f.stateNode;
            if (Zc(y))
              return Ti(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return ki = s, null;
    }
    function nf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return kr;
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
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return xi;
        case "message": {
          var t = bc();
          switch (t) {
            case us:
              return kr;
            case Dl:
              return xi;
            case Wi:
            case sy:
              return La;
            case vu:
              return Ma;
            default:
              return La;
          }
        }
        default:
          return La;
      }
    }
    function Ns(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Jr(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Pd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Co(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ha = null, Ro = null, ku = null;
    function Ul(e) {
      return ha = e, Ro = zs(), !0;
    }
    function rf() {
      ha = null, Ro = null, ku = null;
    }
    function Ki() {
      if (ku)
        return ku;
      var e, t = Ro, a = t.length, i, u = zs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ku = u.slice(e, p), ku;
    }
    function zs() {
      return "value" in ha ? ha.value : ha.textContent;
    }
    function Al(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function To() {
      return !0;
    }
    function Us() {
      return !1;
    }
    function Cr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = To : this.isDefaultPrevented = Us, this.isPropagationStopped = Us, this;
      }
      return Je(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = To);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = To);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: To
      }), t;
    }
    var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Di = Cr(jn), Lr = Je({}, jn, {
      view: 0,
      detail: 0
    }), Zr = Cr(Lr), af, As, Du;
    function py(e) {
      e !== Du && (Du && e.type === "mousemove" ? (af = e.screenX - Du.screenX, As = e.screenY - Du.screenY) : (af = 0, As = 0), Du = e);
    }
    var ai = Je({}, Lr, {
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
      getModifierState: dn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (py(e), af);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : As;
      }
    }), Vd = Cr(ai), Bd = Je({}, ai, {
      dataTransfer: 0
    }), Ou = Cr(Bd), $d = Je({}, Lr, {
      relatedTarget: 0
    }), Ji = Cr($d), eh = Je({}, jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = Cr(eh), Id = Je({}, jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), lf = Cr(Id), vy = Je({}, jn, {
      data: 0
    }), nh = Cr(vy), rh = nh, ah = {
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
    }, Lu = {
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
    };
    function hy(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Al(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Lu[e.keyCode] || "Unidentified" : "";
    }
    var wo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wo[e];
      return i ? !!a[i] : !1;
    }
    function dn(e) {
      return ih;
    }
    var my = Je({}, Lr, {
      key: hy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Al(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = Cr(my), yy = Je({}, ai, {
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
    }), uh = Cr(yy), oh = Je({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dn
    }), sh = Cr(oh), gy = Je({}, jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), za = Cr(gy), Yd = Je({}, ai, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Sy = Cr(Yd), Fl = [9, 13, 27, 32], Fs = 229, Zi = Dn && "CompositionEvent" in window, jl = null;
    Dn && "documentMode" in document && (jl = document.documentMode);
    var Qd = Dn && "TextEvent" in window && !jl, uf = Dn && (!Zi || jl && jl > 8 && jl <= 11), ch = 32, of = String.fromCharCode(ch);
    function Ey() {
      at("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), at("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), at("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), at("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Wd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function sf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function cf(e, t) {
      return e === "keydown" && t.keyCode === Fs;
    }
    function Gd(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ff(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var Mu = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (Zi ? s = sf(t) : Mu ? Gd(t, i) && (s = "onCompositionEnd") : cf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uf && !dh(i) && (!Mu && s === "onCompositionStart" ? Mu = Ul(u) : s === "onCompositionEnd" && Mu && (f = Ki()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = ff(i);
          y !== null && (v.data = y);
        }
      }
    }
    function df(e, t) {
      switch (e) {
        case "compositionend":
          return ff(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (Wd = !0, of);
        case "textInput":
          var i = t.data;
          return i === of && Wd ? null : i;
        default:
          return null;
      }
    }
    function Xd(e, t) {
      if (Mu) {
        if (e === "compositionend" || !Zi && Gd(e, t)) {
          var a = Ki();
          return rf(), Mu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uf && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function pf(e, t, a, i, u) {
      var s;
      if (Qd ? s = df(t, i) : s = Xd(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ph(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), pf(e, t, a, i, u);
    }
    var Cy = {
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
    function js(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ry(e) {
      if (!Dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Hs() {
      at("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      lo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Di("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Hl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, fd(e)), bv(o, t);
    }
    function o(e) {
      bE(e, 0);
    }
    function c(e) {
      var t = Sf(e);
      if (mi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Dn && (m = Ry("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Hl = e, n = t, Hl.attachEvent("onpropertychange", z);
    }
    function T() {
      Hl && (Hl.detachEvent("onpropertychange", z), Hl = null, n = null);
    }
    function z(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function Y(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function W(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function I(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function me(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Se(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function _n(e, t, a, i, u, s, f) {
      var p = a ? Sf(a) : window, v, y;
      if (r(p) ? v = d : js(p) ? m ? v = me : (v = W, y = Y) : I(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Se(p);
    }
    function k() {
      Vt("onMouseEnter", ["mouseout", "mouseover"]), Vt("onMouseLeave", ["mouseout", "mouseover"]), Vt("onPointerEnter", ["pointerout", "pointerover"]), Vt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function x(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ts(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Bs(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, M = U ? Bs(U) : null, M !== null) {
            var j = sa(M);
            (M !== j || M.tag !== se && M.tag !== Ye) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var oe = Vd, Le = "onMouseLeave", Te = "onMouseEnter", Et = "mouse";
          (t === "pointerout" || t === "pointerover") && (oe = uh, Le = "onPointerLeave", Te = "onPointerEnter", Et = "pointer");
          var pt = w == null ? g : Sf(w), D = M == null ? g : Sf(M), H = new oe(Le, Et + "leave", w, i, u);
          H.target = pt, H.relatedTarget = D;
          var O = null, G = Bs(u);
          if (G === a) {
            var pe = new oe(Te, Et + "enter", M, i, u);
            pe.target = D, pe.relatedTarget = pt, O = pe;
          }
          _T(e, H, O, w, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Q = typeof Object.is == "function" ? Object.is : L;
    function ye(e, t) {
      if (Q(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Rr.call(t, s) || !Q(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ve(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(ze(a));
      }
    }
    function Jn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Mt(e, u, s, f, p);
    }
    function Mt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          b = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Pl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ve(e, f), g = Ve(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === Bi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function cT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = wa(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = wa(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? pT(e) : null
      };
    }
    function dT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sT(a)) {
        i !== null && Ty(a) && vT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === $r && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function pT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Jn(e), t || {
        start: 0,
        end: 0
      };
    }
    function vT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Pl(e, t);
    }
    var hT = Dn && "documentMode" in document && document.documentMode <= 11;
    function mT() {
      at("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var vf = null, wy = null, Kd = null, xy = !1;
    function yT(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function gT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = gT(a);
      if (!(xy || vf == null || vf !== wa(i))) {
        var u = yT(vf);
        if (!Kd || !ye(Kd, u)) {
          Kd = u;
          var s = Sh(wy, "onSelect");
          if (s.length > 0) {
            var f = new Di("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = vf;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? Sf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (js(p) || p.contentEditable === "true") && (vf = p, wy = a, Kd = null);
          break;
        case "focusout":
          vf = null, wy = null, Kd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, yE(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (hT)
            break;
        // falls through
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var hf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, by = {}, gE = {};
    Dn && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete hf.animationend.animation, delete hf.animationiteration.animation, delete hf.animationstart.animation), "TransitionEvent" in window || delete hf.transitionend.transition);
    function yh(e) {
      if (by[e])
        return by[e];
      if (!hf[e])
        return e;
      var t = hf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return by[e] = t[a];
      return e;
    }
    var SE = yh("animationend"), EE = yh("animationiteration"), CE = yh("animationstart"), RE = yh("transitionend"), TE = /* @__PURE__ */ new Map(), wE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function xo(e, t) {
      TE.set(e, t), at(t, [e]);
    }
    function ET() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        xo(a, "on" + i);
      }
      xo(SE, "onAnimationEnd"), xo(EE, "onAnimationIteration"), xo(CE, "onAnimationStart"), xo("dblclick", "onDoubleClick"), xo("focusin", "onFocus"), xo("focusout", "onBlur"), xo(RE, "onTransitionEnd");
    }
    function CT(e, t, a, i, u, s, f) {
      var p = TE.get(t);
      if (p !== void 0) {
        var v = Di, y = t;
        switch (t) {
          case "keypress":
            if (Al(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = Ji;
            break;
          case "focusout":
            y = "blur", v = Ji;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ji;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Vd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ou;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case SE:
          case EE:
          case CE:
            v = th;
            break;
          case RE:
            v = za;
            break;
          case "scroll":
            v = Zr;
            break;
          case "wheel":
            v = Sy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = lf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & xa) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = xT(a, p, i.type, g, b);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    ET(), k(), Hs(), mT(), Ey();
    function RT(e, t, a, i, u, s, f) {
      CT(e, t, a, i, u, s);
      var p = (s & cd) === 0;
      p && (x(e, t, a, i, u), _n(e, t, a, i, u), ST(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Si(i, t, void 0, e), e.currentTarget = null;
    }
    function TT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          xE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          xE(e, M, w), i = b;
        }
    }
    function bE(e, t) {
      for (var a = (t & xa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        TT(s, f, a);
      }
      as();
    }
    function wT(e, t, a, i, u) {
      var s = fd(a), f = [];
      RT(f, e, i, a, s, t), bE(f, t);
    }
    function yn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ew(t), u = kT(e);
      i.has(u) || (_E(t, e, pc, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= xa), _E(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[gh]) {
        e[gh] = !0, Ze.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function _E(e, t, a, i, u) {
      var s = ur(e, t, a), f = void 0;
      rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Pd(e, t, s, f) : Jr(e, t, s) : f !== void 0 ? Co(e, t, s, f) : Ns(e, t, s);
    }
    function kE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if ((t & sd) === 0 && (t & pc) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === q || v === Ce) {
              var y = p.stateNode.containerInfo;
              if (kE(y, f))
                break;
              if (v === Ce)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === q || b === Ce) {
                    var w = g.stateNode.containerInfo;
                    if (kE(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Bs(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === se || U === Ye) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return wT(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === se && w !== null && (g = w, p !== null)) {
          var U = Tl(y, p);
          U != null && v.push(ep(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === se && f !== null) {
          var v = f, y = Tl(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = Tl(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== se);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = mf(s))
        u++;
      for (var f = 0, p = i; p; p = mf(p))
        f++;
      for (; u - f > 0; )
        a = mf(a), u--;
      for (; f - u > 0; )
        i = mf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = mf(a), i = mf(i);
      }
      return null;
    }
    function DE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === se && g !== null) {
          var w = g;
          if (u) {
            var M = Tl(p, s);
            M != null && f.unshift(ep(p, M, w));
          } else if (!u) {
            var U = Tl(p, s);
            U != null && f.push(ep(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function _T(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && DE(e, t, i, s, !1), u !== null && a !== null && DE(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var Ua = !1, tp = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", bo = "suppressHydrationWarning", OE = "autoFocus", Ps = "children", Vs = "style", Ch = "__html", Oy, Rh, np, LE, Th, ME, NE;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      ld(e, t), fc(e, t), Tv(e, t, {
        registrationNameDependencies: Ke,
        possibleRegistrationNames: et
      });
    }, ME = Dn && !document.documentMode, np = function(e, t, a) {
      if (!Ua) {
        var i = wh(a), u = wh(t);
        u !== i && (Ua = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!Ua) {
        Ua = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, NE = function(e, t) {
      var a = e.namespaceURI === Vi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var DT = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function wh(e) {
      Gn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(DT, `
`).replace(OT, "");
    }
    function xh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (Ua || (Ua = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function LT() {
    }
    function bh(e) {
      e.onclick = LT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vs)
            f && Object.freeze(f), yv(t, f);
          else if (s === tp) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && no(t, f);
            } else typeof f == "number" && no(t, "" + f);
          else s === Eh || s === bo || s === OE || (Ke.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && yn("scroll", t)) : f != null && Tr(t, s, f, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? yv(e, f) : s === tp ? iv(e, f) : s === Ps ? no(e, f) : Tr(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === Vi && (p = Zf(e)), p === Vi) {
        if (u = Cl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Vi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Rr.call(Oy, e) && (Oy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return zE(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
      var u = Cl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            yn(Jd[f], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          Ka(e, a), s = to(e, a), yn("invalid", e);
          break;
        case "option":
          wt(e, a), s = a;
          break;
        case "select":
          lu(e, a), s = Go(e, a), yn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), s = qf(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (sc(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Xa(e), N(e, a, !1);
          break;
        case "textarea":
          Xa(e), rv(e);
          break;
        case "option":
          tn(e, a);
          break;
        case "select":
          Wf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function FT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = to(e, a), p = to(e, i), s = [];
          break;
        case "select":
          f = Go(e, a), p = Go(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), p = qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      sc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === Eh || v === bo || v === OE || (Ke.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === Vs)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var U = w ? w[Ch] : void 0, j = M ? M[Ch] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Ps ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === bo || (Ke.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && yn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ry(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function jT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Cl(a, i), f = Cl(a, u);
      switch (NT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          lc(e, u);
          break;
      }
    }
    function HT(e) {
      {
        var t = e.toLowerCase();
        return Zo.hasOwnProperty(t) && Zo[t] || null;
      }
    }
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Cl(t, a), Rh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            yn(Jd[y], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          Ka(e, a), yn("invalid", e);
          break;
        case "option":
          wt(e, a);
          break;
        case "select":
          lu(e, a), yn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), yn("invalid", e);
          break;
      }
      sc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Ps)
            typeof j == "string" ? e.textContent !== j && (a[bo] !== !0 && xh(e.textContent, j, s, f), M = [Ps, j]) : typeof j == "number" && e.textContent !== "" + j && (a[bo] !== !0 && xh(e.textContent, j, s, f), M = [Ps, "" + j]);
          else if (Ke.hasOwnProperty(U))
            j != null && (typeof j != "function" && Th(U, j), U === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var oe = void 0, Le = Zt(U);
            if (a[bo] !== !0) {
              if (!(U === Eh || U === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var Te = e.innerHTML, Et = j ? j[Ch] : void 0;
                  if (Et != null) {
                    var pt = NE(e, Et);
                    pt !== Te && np(U, Te, pt);
                  }
                } else if (U === Vs) {
                  if (v.delete(U), ME) {
                    var D = ty(j);
                    oe = e.getAttribute("style"), D !== oe && np(U, oe, D);
                  }
                } else if (p)
                  v.delete(U.toLowerCase()), oe = Zl(e, U, j), j !== oe && np(U, oe, j);
                else if (!pn(U, Le, p) && !qn(U, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), oe = dl(e, U, j, Le);
                  else {
                    var O = i;
                    if (O === Vi && (O = Zf(t)), O === Vi)
                      v.delete(U.toLowerCase());
                    else {
                      var G = HT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    oe = Zl(e, U, j);
                  }
                  var pe = _;
                  !pe && j !== oe && !H && np(U, oe, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bo] !== !0 && LE(v), t) {
        case "input":
          Xa(e), N(e, a, !0);
          break;
        case "textarea":
          Xa(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return M;
    }
    function VT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (Ua)
          return;
        Ua = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (Ua)
          return;
        Ua = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t, a) {
      {
        if (Ua)
          return;
        Ua = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || Ua)
          return;
        Ua = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function BT(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Km(e, a);
          return;
        case "select":
          Gf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var $T = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], IT = UE.concat(["button"]), YT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = Je({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $T.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QT = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return YT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, WT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, FE = {};
      rp = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QT(e, u) ? null : i, f = s ? null : WT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", ip = "$?", lp = "$!", GT = "style", Uy = null, Ay = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case td: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ed(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ed(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = ed(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ok(e) {
      return e;
    }
    function KT(e) {
      Uy = Fn(), Ay = fT();
      var t = null;
      return Qn(!1), t;
    }
    function JT(e) {
      dT(Ay), Qn(Uy), Uy = null, Ay = null;
    }
    function ZT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = zT(e, t, a, s);
      return sp(u, y), Iy(y, t), y;
    }
    function e1(e, t) {
      e.appendChild(t);
    }
    function t1(e, t, a, i, u) {
      switch (AT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function n1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return FT(e, t, a, i);
    }
    function Fy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function r1(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return sp(i, s), s;
    }
    function a1() {
      var e = window.event;
      return e === void 0 ? La : nf(e.type);
    }
    var jy = typeof setTimeout == "function" ? setTimeout : void 0, i1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, jE = typeof Promise == "function" ? Promise : void 0, l1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jE < "u" ? function(e) {
      return jE.resolve(null).then(e).catch(u1);
    } : jy;
    function u1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function o1(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function s1(e, t, a, i, u, s) {
      jT(e, t, a, i, u), Iy(e, u);
    }
    function HE(e) {
      no(e, "");
    }
    function c1(e, t, a) {
      e.nodeValue = a;
    }
    function f1(e, t) {
      e.appendChild(t);
    }
    function d1(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function p1(e, t, a) {
      e.insertBefore(t, a);
    }
    function v1(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function h1(e, t) {
      e.removeChild(t);
    }
    function m1(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), _u(t);
              return;
            } else
              i--;
          else (s === kh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      _u(t);
    }
    function y1(e, t) {
      e.nodeType === Ln ? Py(e.parentNode, t) : e.nodeType === $r && Py(e, t), _u(e);
    }
    function g1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function S1(e) {
      e.nodeValue = "";
    }
    function E1(e, t) {
      e = e;
      var a = t[GT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = oc("display", i);
    }
    function C1(e, t) {
      e.nodeValue = t;
    }
    function R1(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function T1(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function w1(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function x1(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function PE(e) {
      return e.data === ip;
    }
    function Vy(e) {
      return e.data === lp;
    }
    function b1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function _1(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $r || t === Bi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === kh || a === lp || a === ip)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Oh(e.nextSibling);
    }
    function k1(e) {
      return Oh(e.firstChild);
    }
    function D1(e) {
      return Oh(e.firstChild);
    }
    function O1(e) {
      return Oh(e.nextSibling);
    }
    function L1(e, t, a, i, u, s, f) {
      sp(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & lt) !== ke;
      return PT(e, t, a, p, i, y, f);
    }
    function M1(e, t, a, i) {
      return sp(a, e), a.mode & lt, VT(e, t);
    }
    function N1(e, t) {
      sp(t, e);
    }
    function z1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === kh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === kh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function U1(e) {
      _u(e);
    }
    function A1(e) {
      _u(e);
    }
    function F1(e) {
      return e !== "head" && e !== "body";
    }
    function j1(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function H1(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function P1(e, t) {
      t.nodeType === $r ? Ly(e, t) : t.nodeType === Ln || My(e, t);
    }
    function V1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? Ly(a, t) : t.nodeType === Ln || My(a, t));
      }
    }
    function B1(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === $r ? Ly(a, i) : i.nodeType === Ln || My(a, i));
    }
    function $1(e, t, a) {
      Ny(e, t);
    }
    function I1(e, t) {
      zy(e, t);
    }
    function Y1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function Q1(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function W1(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ny(a, i);
    }
    function G1(e, t, a, i, u) {
      (u || t[_h] !== !0) && zy(a, i);
    }
    function q1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function X1(e) {
      Zd(e);
    }
    var yf = Math.random().toString(36).slice(2), gf = "__reactFiber$" + yf, By = "__reactProps$" + yf, op = "__reactContainer$" + yf, $y = "__reactEvents$" + yf, K1 = "__reactListeners$" + yf, J1 = "__reactHandles$" + yf;
    function Z1(e) {
      delete e[gf], delete e[By], delete e[$y], delete e[K1], delete e[J1];
    }
    function sp(e, t) {
      t[gf] = e;
    }
    function Lh(e, t) {
      t[op] = e;
    }
    function BE(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Bs(e) {
      var t = e[gf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[gf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = VE(e); u !== null; ) {
              var s = u[gf];
              if (s)
                return s;
              u = VE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[gf] || e[op];
      return t && (t.tag === se || t.tag === Ye || t.tag === be || t.tag === q) ? t : null;
    }
    function Sf(e) {
      if (e.tag === se || e.tag === Ye)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[By] || null;
    }
    function Iy(e, t) {
      e[By] = t;
    }
    function ew(e) {
      var t = e[$y];
      return t === void 0 && (t = e[$y] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, IE = A.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = ji(e.type, e._source, t ? t.type : null);
        IE.setExtraStackFrame(a);
      } else
        IE.setExtraStackFrame(null);
    }
    function el(e, t, a, i, u) {
      {
        var s = Function.call.bind(Rr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var Yy = [], zh;
    zh = [];
    var Nu = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ea(e, t) {
      if (Nu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[Nu] && S("Unexpected Fiber popped."), e.current = Yy[Nu], Yy[Nu] = null, zh[Nu] = null, Nu--;
    }
    function ta(e, t, a) {
      Nu++, Yy[Nu] = e.current, zh[Nu] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var ii = {};
    Object.freeze(ii);
    var zu = ko(ii), Vl = ko(!1), Wy = ii;
    function Ef(e, t, a) {
      return a && Bl(t) ? Wy : zu.current;
    }
    function YE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Cf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Be(e) || "Unknown";
          el(i, s, "context", p);
        }
        return u && YE(e, t, s), s;
      }
    }
    function Uh() {
      return Vl.current;
    }
    function Bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ea(Vl, e), ea(zu, e);
    }
    function Gy(e) {
      ea(Vl, e), ea(zu, e);
    }
    function QE(e, t, a) {
      {
        if (zu.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ta(zu, t, e), ta(Vl, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Be(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Be(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Be(e) || "Unknown";
          el(u, f, "child context", v);
        }
        return Je({}, a, f);
      }
    }
    function Fh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return Wy = zu.current, ta(zu, a, e), ta(Vl, Vl.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ea(Vl, e), ea(zu, e), ta(zu, u, e), ta(Vl, a, e);
        } else
          ea(Vl, e), ta(Vl, a, e);
      }
    }
    function tw(e) {
      {
        if (!pu(e) || e.tag !== te)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case q:
              return t.stateNode.context;
            case te: {
              var a = t.type;
              if (Bl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Do = 0, jh = 1, Uu = null, qy = !1, Xy = !1;
    function qE(e) {
      Uu === null ? Uu = [e] : Uu.push(e);
    }
    function nw(e) {
      qy = !0, qE(e);
    }
    function XE() {
      qy && Oo();
    }
    function Oo() {
      if (!Xy && Uu !== null) {
        Xy = !0;
        var e = 0, t = Na();
        try {
          var a = !0, i = Uu;
          for (An(kr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Uu = null, qy = !1;
        } catch (s) {
          throw Uu !== null && (Uu = Uu.slice(e + 1)), pd(us, Oo), s;
        } finally {
          An(t), Xy = !1;
        }
      }
      return null;
    }
    var Rf = [], Tf = 0, Hh = null, Ph = 0, Oi = [], Li = 0, $s = null, Au = 1, Fu = "";
    function rw(e) {
      return Ys(), (e.flags & Ei) !== _e;
    }
    function aw(e) {
      return Ys(), Ph;
    }
    function iw() {
      var e = Fu, t = Au, a = t & ~lw(t);
      return a.toString(32) + e;
    }
    function Is(e, t) {
      Ys(), Rf[Tf++] = Ph, Rf[Tf++] = Hh, Hh = e, Ph = t;
    }
    function KE(e, t, a) {
      Ys(), Oi[Li++] = Au, Oi[Li++] = Fu, Oi[Li++] = $s, $s = e;
      var i = Au, u = Fu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, U = Vh(t) + M, j = p << M, oe = j | w, Le = b + u;
        Au = 1 << U | oe, Fu = Le;
      } else {
        var Te = p << s, Et = Te | f, pt = u;
        Au = 1 << v | Et, Fu = pt;
      }
    }
    function Ky(e) {
      Ys();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Is(e, a), KE(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - zn(e);
    }
    function lw(e) {
      return 1 << Vh(e) - 1;
    }
    function Jy(e) {
      for (; e === Hh; )
        Hh = Rf[--Tf], Rf[Tf] = null, Ph = Rf[--Tf], Rf[Tf] = null;
      for (; e === $s; )
        $s = Oi[--Li], Oi[Li] = null, Fu = Oi[--Li], Oi[Li] = null, Au = Oi[--Li], Oi[Li] = null;
    }
    function uw() {
      return Ys(), $s !== null ? {
        id: Au,
        overflow: Fu
      } : null;
    }
    function ow(e, t) {
      Ys(), Oi[Li++] = Au, Oi[Li++] = Fu, Oi[Li++] = $s, Au = t.id, Fu = t.overflow, $s = e;
    }
    function Ys() {
      Nr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Mr = null, Mi = null, tl = !1, Qs = !1, Lo = null;
    function sw() {
      tl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Qs = !0;
    }
    function cw() {
      return Qs;
    }
    function fw(e) {
      var t = e.stateNode.containerInfo;
      return Mi = D1(t), Mr = e, tl = !0, Lo = null, Qs = !1, !0;
    }
    function dw(e, t, a) {
      return Mi = O1(t), Mr = e, tl = !0, Lo = null, Qs = !1, a !== null && ow(e, a), !0;
    }
    function ZE(e, t) {
      switch (e.tag) {
        case q: {
          P1(e.stateNode.containerInfo, t);
          break;
        }
        case se: {
          var a = (e.mode & lt) !== ke;
          B1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && V1(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      ZE(e, t);
      var a = m_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ba) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case se:
                var i = t.type;
                t.pendingProps, $1(a, i);
                break;
              case Ye:
                var u = t.pendingProps;
                I1(a, u);
                break;
            }
            break;
          }
          case se: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case se: {
                var v = t.type, y = t.pendingProps, g = (e.mode & lt) !== ke;
                W1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ye: {
                var b = t.pendingProps, w = (e.mode & lt) !== ke;
                G1(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case be: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case se:
                var j = t.type;
                t.pendingProps, Y1(U, j);
                break;
              case Ye:
                var oe = t.pendingProps;
                Q1(U, oe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function tC(e, t) {
      t.flags = t.flags & -4097 | Rn, Zy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case se: {
          var a = e.type;
          e.pendingProps;
          var i = T1(t, a);
          return i !== null ? (e.stateNode = i, Mr = e, Mi = k1(i), !0) : !1;
        }
        case Ye: {
          var u = e.pendingProps, s = w1(t, u);
          return s !== null ? (e.stateNode = s, Mr = e, Mi = null, !0) : !1;
        }
        case be: {
          var f = x1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: uw(),
              retryLane: pa
            };
            e.memoizedState = p;
            var v = y_(f);
            return v.return = e, e.child = v, Mr = e, Mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & lt) !== ke && (e.flags & xe) === _e;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (tl) {
        var t = Mi;
        if (!t) {
          eg(e) && (Zy(Mr, e), tg()), tC(Mr, e), tl = !1, Mr = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          eg(e) && (Zy(Mr, e), tg()), t = up(a);
          var i = Mr;
          if (!t || !nC(e, t)) {
            tC(Mr, e), tl = !1, Mr = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function pw(e, t, a) {
      var i = e.stateNode, u = !Qs, s = L1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function vw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = M1(t, a, e);
      if (i) {
        var u = Mr;
        if (u !== null)
          switch (u.tag) {
            case q: {
              var s = u.stateNode.containerInfo, f = (u.mode & lt) !== ke;
              j1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case se: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & lt) !== ke;
              H1(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function hw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      N1(a, e);
    }
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return z1(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== se && t.tag !== q && t.tag !== be; )
        t = t.return;
      Mr = t;
    }
    function Bh(e) {
      if (e !== Mr)
        return !1;
      if (!tl)
        return rC(e), tl = !0, !1;
      if (e.tag !== q && (e.tag !== se || F1(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = Mi;
        if (t)
          if (eg(e))
            aC(e), tg();
          else
            for (; t; )
              eC(e, t), t = up(t);
      }
      return rC(e), e.tag === be ? Mi = mw(e) : Mi = Mr ? up(e.stateNode) : null, !0;
    }
    function yw() {
      return tl && Mi !== null;
    }
    function aC(e) {
      for (var t = Mi; t; )
        ZE(e, t), t = up(t);
    }
    function wf() {
      Mr = null, Mi = null, tl = !1, Qs = !1;
    }
    function iC() {
      Lo !== null && (J0(Lo), Lo = null);
    }
    function Nr() {
      return tl;
    }
    function rg(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var gw = A.ReactCurrentBatchConfig, Sw = null;
    function Ew() {
      return gw.transition;
    }
    var nl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Cw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Wt && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Gs = /* @__PURE__ */ new Set();
      nl.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, nl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Be(w) || "Component"), Gs.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Be(w) || "Component"), Gs.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Be(w) || "Component"), Gs.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Be(w) || "Component"), Gs.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Be(w) || "Component"), Gs.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Be(w) || "Component"), Gs.add(w.type);
        }), mp = []), t.size > 0) {
          var f = Ws(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ws(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ws(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ws(e);
          Rt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          Rt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ws(u);
          Rt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var $h = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      nl.recordLegacyContextWarning = function(e, t) {
        var a = Cw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = $h.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], $h.set(a, i)), i.push(e));
        }
      }, nl.flushLegacyContextWarning = function() {
        $h.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Be(s) || "Component"), lC.add(s.type);
            });
            var u = Ws(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              on();
            }
          }
        });
      }, nl.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], $h = /* @__PURE__ */ new Map();
      };
    }
    var ag, ig, lg, ug, og, uC = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Be(t) || "Component";
        ug[a] || (ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Rw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Wt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== te) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Rw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Be(e) || "Component";
          lg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== te)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          oi(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = Be(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function oC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function sC(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= ba) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(D, H) {
        var O = rc(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ei, H;
        var G = D.alternate;
        if (G !== null) {
          var pe = G.index;
          return pe < H ? (D.flags |= Rn, H) : pe;
        } else
          return D.flags |= Rn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Rn), D;
      }
      function p(D, H, O, G) {
        if (H === null || H.tag !== Ye) {
          var pe = rE(O, D.mode, G);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, G) {
        var pe = O.type;
        if (pe === ci)
          return g(D, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        vR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === $e && oC(pe) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = yp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var He = nE(O, D.mode, G);
        return He.ref = yp(D, H, O), He.return = D, He;
      }
      function y(D, H, O, G) {
        if (H === null || H.tag !== Ce || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = aE(O, D.mode, G);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, G, pe) {
        if (H === null || H.tag !== mt) {
          var ce = Bo(O, D.mode, G, pe);
          return ce.return = D, ce;
        } else {
          var He = u(H, O);
          return He.return = D, He;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = rE("" + H, D.mode, O);
          return G.return = D, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case wr: {
              var pe = nE(H, D.mode, O);
              return pe.ref = yp(D, null, H), pe.return = D, pe;
            }
            case tr: {
              var ce = aE(H, D.mode, O);
              return ce.return = D, ce;
            }
            case $e: {
              var He = H._payload, We = H._init;
              return b(D, We(He), O);
            }
          }
          if (nt(H) || qe(H)) {
            var qt = Bo(H, D.mode, O, null);
            return qt.return = D, qt;
          }
          Ih(D, H);
        }
        return typeof H == "function" && Yh(D), null;
      }
      function w(D, H, O, G) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(D, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case wr:
              return O.key === pe ? v(D, H, O, G) : null;
            case tr:
              return O.key === pe ? y(D, H, O, G) : null;
            case $e: {
              var ce = O._payload, He = O._init;
              return w(D, H, He(ce), G);
            }
          }
          if (nt(O) || qe(O))
            return pe !== null ? null : g(D, H, O, G, null);
          Ih(D, O);
        }
        return typeof O == "function" && Yh(D), null;
      }
      function M(D, H, O, G, pe) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + G, pe);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case wr: {
              var He = D.get(G.key === null ? O : G.key) || null;
              return v(H, He, G, pe);
            }
            case tr: {
              var We = D.get(G.key === null ? O : G.key) || null;
              return y(H, We, G, pe);
            }
            case $e:
              var qt = G._payload, Nt = G._init;
              return M(D, H, O, Nt(qt), pe);
          }
          if (nt(G) || qe(G)) {
            var Wn = D.get(O) || null;
            return g(H, Wn, G, pe, null);
          }
          Ih(H, G);
        }
        return typeof G == "function" && Yh(H), null;
      }
      function U(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case wr:
            case tr:
              uC(D, O);
              var G = D.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case $e:
              var pe = D._payload, ce = D._init;
              U(ce(pe), H, O);
              break;
          }
        }
        return H;
      }
      function j(D, H, O, G) {
        for (var pe = null, ce = 0; ce < O.length; ce++) {
          var He = O[ce];
          pe = U(He, pe, D);
        }
        for (var We = null, qt = null, Nt = H, Wn = 0, zt = 0, Hn = null; Nt !== null && zt < O.length; zt++) {
          Nt.index > zt ? (Hn = Nt, Nt = null) : Hn = Nt.sibling;
          var ra = w(D, Nt, O[zt], G);
          if (ra === null) {
            Nt === null && (Nt = Hn);
            break;
          }
          e && Nt && ra.alternate === null && t(D, Nt), Wn = s(ra, Wn, zt), qt === null ? We = ra : qt.sibling = ra, qt = ra, Nt = Hn;
        }
        if (zt === O.length) {
          if (a(D, Nt), Nr()) {
            var Pr = zt;
            Is(D, Pr);
          }
          return We;
        }
        if (Nt === null) {
          for (; zt < O.length; zt++) {
            var ui = b(D, O[zt], G);
            ui !== null && (Wn = s(ui, Wn, zt), qt === null ? We = ui : qt.sibling = ui, qt = ui);
          }
          if (Nr()) {
            var Sa = zt;
            Is(D, Sa);
          }
          return We;
        }
        for (var Ea = i(D, Nt); zt < O.length; zt++) {
          var aa = M(Ea, D, zt, O[zt], G);
          aa !== null && (e && aa.alternate !== null && Ea.delete(aa.key === null ? zt : aa.key), Wn = s(aa, Wn, zt), qt === null ? We = aa : qt.sibling = aa, qt = aa);
        }
        if (e && Ea.forEach(function($f) {
          return t(D, $f);
        }), Nr()) {
          var Iu = zt;
          Is(D, Iu);
        }
        return We;
      }
      function oe(D, H, O, G) {
        var pe = qe(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ig || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), O.entries === pe && (ag || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var ce = pe.call(O);
          if (ce)
            for (var He = null, We = ce.next(); !We.done; We = ce.next()) {
              var qt = We.value;
              He = U(qt, He, D);
            }
        }
        var Nt = pe.call(O);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, zt = null, Hn = H, ra = 0, Pr = 0, ui = null, Sa = Nt.next(); Hn !== null && !Sa.done; Pr++, Sa = Nt.next()) {
          Hn.index > Pr ? (ui = Hn, Hn = null) : ui = Hn.sibling;
          var Ea = w(D, Hn, Sa.value, G);
          if (Ea === null) {
            Hn === null && (Hn = ui);
            break;
          }
          e && Hn && Ea.alternate === null && t(D, Hn), ra = s(Ea, ra, Pr), zt === null ? Wn = Ea : zt.sibling = Ea, zt = Ea, Hn = ui;
        }
        if (Sa.done) {
          if (a(D, Hn), Nr()) {
            var aa = Pr;
            Is(D, aa);
          }
          return Wn;
        }
        if (Hn === null) {
          for (; !Sa.done; Pr++, Sa = Nt.next()) {
            var Iu = b(D, Sa.value, G);
            Iu !== null && (ra = s(Iu, ra, Pr), zt === null ? Wn = Iu : zt.sibling = Iu, zt = Iu);
          }
          if (Nr()) {
            var $f = Pr;
            Is(D, $f);
          }
          return Wn;
        }
        for (var qp = i(D, Hn); !Sa.done; Pr++, Sa = Nt.next()) {
          var Xl = M(qp, D, Pr, Sa.value, G);
          Xl !== null && (e && Xl.alternate !== null && qp.delete(Xl.key === null ? Pr : Xl.key), ra = s(Xl, ra, Pr), zt === null ? Wn = Xl : zt.sibling = Xl, zt = Xl);
        }
        if (e && qp.forEach(function(G_) {
          return t(D, G_);
        }), Nr()) {
          var W_ = Pr;
          Is(D, W_);
        }
        return Wn;
      }
      function Le(D, H, O, G) {
        if (H !== null && H.tag === Ye) {
          a(D, H.sibling);
          var pe = u(H, O);
          return pe.return = D, pe;
        }
        a(D, H);
        var ce = rE(O, D.mode, G);
        return ce.return = D, ce;
      }
      function Te(D, H, O, G) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe) {
            var He = O.type;
            if (He === ci) {
              if (ce.tag === mt) {
                a(D, ce.sibling);
                var We = u(ce, O.props.children);
                return We.return = D, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (ce.elementType === He || // Keep this check inline so it only runs on the false path:
            vR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof He == "object" && He !== null && He.$$typeof === $e && oC(He) === ce.type) {
              a(D, ce.sibling);
              var qt = u(ce, O.props);
              return qt.ref = yp(D, ce, O), qt.return = D, qt._debugSource = O._source, qt._debugOwner = O._owner, qt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === ci) {
          var Nt = Bo(O.props.children, D.mode, G, O.key);
          return Nt.return = D, Nt;
        } else {
          var Wn = nE(O, D.mode, G);
          return Wn.ref = yp(D, H, O), Wn.return = D, Wn;
        }
      }
      function Et(D, H, O, G) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === Ce && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var He = u(ce, O.children || []);
              return He.return = D, He;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var We = aE(O, D.mode, G);
        return We.return = D, We;
      }
      function pt(D, H, O, G) {
        var pe = typeof O == "object" && O !== null && O.type === ci && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case wr:
              return f(Te(D, H, O, G));
            case tr:
              return f(Et(D, H, O, G));
            case $e:
              var ce = O._payload, He = O._init;
              return pt(D, H, He(ce), G);
          }
          if (nt(O))
            return j(D, H, O, G);
          if (qe(O))
            return oe(D, H, O, G);
          Ih(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, G)) : (typeof O == "function" && Yh(D), a(D, H));
      }
      return pt;
    }
    var xf = sC(!0), cC = sC(!1);
    function Tw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ww(e, t) {
      for (var a = e.child; a !== null; )
        f_(a, t), a = a.sibling;
    }
    var sg = ko(null), cg;
    cg = {};
    var Qh = null, bf = null, fg = null, Wh = !1;
    function Gh() {
      Qh = null, bf = null, fg = null, Wh = !1;
    }
    function fC() {
      Wh = !0;
    }
    function dC() {
      Wh = !1;
    }
    function pC(e, t, a) {
      ta(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      ea(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (bu(i.childLanes, t) ? u !== null && !bu(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === te) {
                var p = Cs(a), v = ju(Xt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Xe(w.lanes, a)), pg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ct)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Kt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Xe(U.lanes, a)), pg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function _f(e, t) {
      Qh = e, bf = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Xr(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function Zn(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (bf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          bf = a, Qh.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          bf = bf.next = a;
      }
      return t;
    }
    var qs = null;
    function vg(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function _w() {
      if (qs !== null) {
        for (var e = 0; e < qs.length; e++) {
          var t = qs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        qs = null;
      }
    }
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function kw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Dw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Aa(e, t) {
      return qh(e, t);
    }
    var Ow = qh;
    function qh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (Rn | _a)) !== _e && cR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (Rn | _a)) !== _e && cR(e), i = u, u = u.return;
      if (i.tag === q) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Xh = 2, hg = 3, Kh = !1, mg, Jh;
    mg = !1, Jh = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function ju(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Mo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !mg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Ow(e, a);
      } else
        return Dw(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Od(a)) {
          var s = u.lanes;
          s = Md(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, Jc(e, f);
        }
      }
    }
    function gg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Lw(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Wt) {
                hn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  hn(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & -65537 | xe;
        // Intentional fallthrough
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & Wt) {
                hn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  hn(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : Je({}, i, y);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = $, j = null, oe = null, Le = null, Te = s;
        do {
          var Et = Te.lane, pt = Te.eventTime;
          if (bu(i, Et)) {
            if (Le !== null) {
              var H = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: _t,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = Lw(e, u, Te, M, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== _t) {
              e.flags |= nn;
              var G = u.effects;
              G === null ? u.effects = [Te] : G.push(Te);
            }
          } else {
            var D = {
              eventTime: pt,
              lane: Et,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Le === null ? (oe = Le = D, j = M) : Le = Le.next = D, U = Xe(U, Et);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, Te = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = M), u.baseState = j, u.firstBaseUpdate = oe, u.lastBaseUpdate = Le;
        var He = u.shared.interleaved;
        if (He !== null) {
          var We = He;
          do
            U = Xe(U, We.lane), We = We.next;
          while (We !== He);
        } else s === null && (u.shared.lanes = $);
        Ip(U), e.lanes = U, e.memoizedState = M;
      }
      Jh = null;
    }
    function Mw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Kh = !1;
    }
    function tm() {
      return Kh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Mw(f, a));
        }
    }
    var gp = {}, No = ko(gp), Sp = ko(gp), nm = ko(gp);
    function rm(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = rm(nm.current);
      return e;
    }
    function Sg(e, t) {
      ta(nm, t, e), ta(Sp, e, e), ta(No, gp, e);
      var a = qT(t);
      ea(No, e), ta(No, a, e);
    }
    function kf(e) {
      ea(No, e), ea(Sp, e), ea(nm, e);
    }
    function Eg() {
      var e = rm(No.current);
      return e;
    }
    function CC(e) {
      rm(nm.current);
      var t = rm(No.current), a = XT(t, e.type);
      t !== a && (ta(Sp, e, e), ta(No, a, e));
    }
    function Cg(e) {
      Sp.current === e && (ea(No, e), ea(Sp, e));
    }
    var Nw = 0, RC = 1, TC = 1, Ep = 2, rl = ko(Nw);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function Df(e) {
      return e & RC;
    }
    function Tg(e, t) {
      return e & RC | t;
    }
    function zw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      ta(rl, t, e);
    }
    function Of(e) {
      ea(rl, e);
    }
    function Uw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Vy(i))
              return t;
          }
        } else if (t.tag === an && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & xe) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Fa = (
      /*   */
      0
    ), or = (
      /* */
      1
    ), $l = (
      /*  */
      2
    ), sr = (
      /*    */
      4
    ), zr = (
      /*   */
      8
    ), wg = [];
    function xg() {
      for (var e = 0; e < wg.length; e++) {
        var t = wg[e];
        t._workInProgressVersionPrimary = null;
      }
      wg.length = 0;
    }
    function Aw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = A.ReactCurrentDispatcher, Cp = A.ReactCurrentBatchConfig, bg, Lf;
    bg = /* @__PURE__ */ new Set();
    var Xs = $, Gt = null, cr = null, fr = null, im = !1, Rp = !1, Tp = 0, Fw = 0, jw = 25, V = null, Ni = null, Uo = -1, _g = !1;
    function Pt() {
      {
        var e = V;
        Ni === null ? Ni = [e] : Ni.push(e);
      }
    }
    function re() {
      {
        var e = V;
        Ni !== null && (Uo++, Ni[Uo] !== e && Hw(e));
      }
    }
    function Mf(e) {
      e != null && !nt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Hw(e) {
      {
        var t = Be(Gt);
        if (!bg.has(t) && (bg.add(t), Ni !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = Ni[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function na() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, s) {
      Xs = s, Gt = t, Ni = e !== null ? e._debugHookTypes : null, Uo = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? de.current = YC : Ni !== null ? de.current = IC : de.current = $C;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= jw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, cr = null, fr = null, t.updateQueue = null, Uo = -1, de.current = QC, f = a(i, u);
        } while (Rp);
      }
      de.current = gm, t._debugHookTypes = Ni;
      var v = cr !== null && cr.next !== null;
      if (Xs = $, Gt = null, cr = null, fr = null, V = null, Ni = null, Uo = -1, e !== null && (e.flags & Nn) !== (t.flags & Nn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== ke && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function zf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Lt) !== ke ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Rs(e.lanes, a);
    }
    function xC() {
      if (de.current = gm, im) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Xs = $, Gt = null, cr = null, fr = null, Ni = null, Uo = -1, V = null, jC = !1, Rp = !1, Tp = 0;
    }
    function Il() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fr === null ? Gt.memoizedState = fr = e : fr = fr.next = e, fr;
    }
    function zi() {
      var e;
      if (cr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = cr.next;
      var a;
      if (fr === null ? a = Gt.memoizedState : a = fr.next, a !== null)
        fr = a, a = fr.next, cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        cr = e;
        var i = {
          memoizedState: cr.memoizedState,
          baseState: cr.baseState,
          baseQueue: cr.baseQueue,
          queue: cr.queue,
          next: null
        };
        fr === null ? Gt.memoizedState = fr = i : fr = fr.next = i;
      }
      return fr;
    }
    function bC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = Il(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = $w.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = cr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, M = null, U = null, j = g;
        do {
          var oe = j.lane;
          if (bu(Xs, oe)) {
            if (U !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: _t,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = Te;
            }
            if (j.hasEagerState)
              b = j.eagerState;
            else {
              var Et = j.action;
              b = e(b, Et);
            }
          } else {
            var Le = {
              lane: oe,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (M = U = Le, w = b) : U = U.next = Le, Gt.lanes = Xe(Gt.lanes, oe), Ip(oe);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = b : U.next = M, Q(b, i.memoizedState) || Mp(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var pt = u.interleaved;
      if (pt !== null) {
        var D = pt;
        do {
          var H = D.lane;
          Gt.lanes = Xe(Gt.lanes, H), Ip(H), D = D.next;
        } while (D !== pt);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Mg(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Q(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function sk(e, t, a) {
    }
    function ck(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = Gt, u = Il(), s, f = Nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Lf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      } else {
        if (s = t(), !Lf) {
          var p = t();
          Q(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
        }
        var v = Fm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Xc(v, Xs) || _C(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(DC.bind(null, i, y, e), [e]), i.flags |= Yr, wp(or | zr, kC.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Gt, u = zi(), s = t();
      if (!Lf) {
        var f = t();
        Q(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      }
      var p = u.memoizedState, v = !Q(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (bp(DC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      fr !== null && fr.memoizedState.tag & or) {
        i.flags |= Yr, wp(or | zr, kC.bind(null, i, y, s, t), void 0, null);
        var g = Fm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Xc(g, Xs) || _C(i, t, s);
      }
      return s;
    }
    function _C(e, t, a) {
      e.flags |= fo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = bC(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && LC(e);
    }
    function DC(e, t, a) {
      var i = function() {
        OC(t) && LC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Q(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Aa(e, Ae);
      t !== null && hr(t, e, Ae, Xt);
    }
    function um(e) {
      var t = Il();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(Dg);
    }
    function Ug(e) {
      return Mg(Dg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = bC(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ag(e) {
      var t = Il();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = zi();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = Il(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = wp(or | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = zi(), s = i === void 0 ? null : i, f = void 0;
      if (cr !== null) {
        var p = cr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = wp(or | t, a, f, s);
    }
    function cm(e, t) {
      return (Gt.mode & Lt) !== ke ? xp(Ci | Yr | Tc, zr, e, t) : xp(Yr | Tc, zr, e, t);
    }
    function bp(e, t) {
      return sm(Yr, zr, e, t);
    }
    function Fg(e, t) {
      return xp(yt, $l, e, t);
    }
    function fm(e, t) {
      return sm(yt, $l, e, t);
    }
    function jg(e, t) {
      var a = yt;
      return a |= Yi, (Gt.mode & Lt) !== ke && (a |= xl), xp(a, sr, e, t);
    }
    function dm(e, t) {
      return sm(yt, sr, e, t);
    }
    function MC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Hg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = yt;
      return u |= Yi, (Gt.mode & Lt) !== ke && (u |= xl), xp(u, sr, MC.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(yt, sr, MC.bind(null, t, e), i);
    }
    function Pw(e, t) {
    }
    var vm = Pw;
    function Pg(e, t) {
      var a = Il(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = Il(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = Il();
      return t.memoizedState = e, e;
    }
    function NC(e) {
      var t = zi(), a = cr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = zi();
      if (cr === null)
        return t.memoizedState = e, e;
      var a = cr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !kd(Xs);
      if (i) {
        if (!Q(a, t)) {
          var u = Ld();
          Gt.lanes = Xe(Gt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Vw(e, t, a) {
      var i = Na();
      An(Wv(i, xi)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (An(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function $g() {
      var e = um(!1), t = e[0], a = e[1], i = Vw.bind(null, a), u = Il();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = zg(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Ug(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function Bw() {
      return jC;
    }
    function Ig() {
      var e = Il(), t = Fm(), a = t.identifierPrefix, i;
      if (Nr()) {
        var u = iw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = zi(), t = e.memoizedState;
      return t;
    }
    function $w(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = ga();
          hr(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = al;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Q(y, v)) {
                kw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var b = ga();
          hr(g, e, i, b), VC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function PC(e, t) {
      Rp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Od(a)) {
        var i = t.lanes;
        i = Md(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, Jc(e, u);
      }
    }
    function BC(e, t, a) {
      ds(e, t);
    }
    var gm = {
      readContext: Zn,
      useCallback: na,
      useContext: na,
      useEffect: na,
      useImperativeHandle: na,
      useInsertionEffect: na,
      useLayoutEffect: na,
      useMemo: na,
      useReducer: na,
      useRef: na,
      useState: na,
      useDebugValue: na,
      useDeferredValue: na,
      useTransition: na,
      useMutableSource: na,
      useSyncExternalStore: na,
      useId: na,
      unstable_isNewReconciler: J
    }, $C = null, IC = null, YC = null, QC = null, Yl = null, al = null, Sm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Pt(), Mf(t), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Pt(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Pt(), Mf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Pt(), Mf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Pt(), Mf(t), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Pt(), Mf(t), jg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Pt(), Mf(t);
          var a = de.current;
          de.current = Yl;
          try {
            return Vg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Pt();
          var i = de.current;
          de.current = Yl;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Pt(), Ag(e);
        },
        useState: function(e) {
          V = "useState", Pt();
          var t = de.current;
          de.current = Yl;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Pt(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", Pt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Pt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Pt(), Ig();
        },
        unstable_isNewReconciler: J
      }, IC = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), jg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = de.current;
          de.current = Yl;
          try {
            return Vg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = de.current;
          de.current = Yl;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), Ag(e);
        },
        useState: function(e) {
          V = "useState", re();
          var t = de.current;
          de.current = Yl;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", re(), Ig();
        },
        unstable_isNewReconciler: J
      }, YC = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = de.current;
          de.current = al;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = de.current;
          de.current = al;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), om();
        },
        useState: function(e) {
          V = "useState", re();
          var t = de.current;
          de.current = al;
          try {
            return zg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), NC(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), AC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", re(), ym();
        },
        unstable_isNewReconciler: J
      }, QC = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = de.current;
          de.current = Sm;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = de.current;
          de.current = Sm;
          try {
            return Mg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), om();
        },
        useState: function(e) {
          V = "useState", re();
          var t = de.current;
          de.current = Sm;
          try {
            return Ug(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", re(), ym();
        },
        unstable_isNewReconciler: J
      }, Yl = {
        readContext: function(e) {
          return Yg(), Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), Pt(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), Pt(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), Pt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), Pt(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), Pt(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), Pt(), jg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), Pt();
          var a = de.current;
          de.current = Yl;
          try {
            return Vg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), Pt();
          var i = de.current;
          de.current = Yl;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), Pt(), Ag(e);
        },
        useState: function(e) {
          V = "useState", Ie(), Pt();
          var t = de.current;
          de.current = Yl;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), Pt(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), Pt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), Pt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Ie(), Pt(), Ig();
        },
        unstable_isNewReconciler: J
      }, al = {
        readContext: function(e) {
          return Yg(), Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), re(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), re();
          var a = de.current;
          de.current = al;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), re();
          var i = de.current;
          de.current = al;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), re(), om();
        },
        useState: function(e) {
          V = "useState", Ie(), re();
          var t = de.current;
          de.current = al;
          try {
            return zg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), re(), NC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), re(), AC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), re(), ym();
        },
        unstable_isNewReconciler: J
      }, Sm = {
        readContext: function(e) {
          return Yg(), Zn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), re(), Zn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), re();
          var a = de.current;
          de.current = al;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), re();
          var i = de.current;
          de.current = al;
          try {
            return Mg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), re(), om();
        },
        useState: function(e) {
          V = "useState", Ie(), re();
          var t = de.current;
          de.current = al;
          try {
            return Ug(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), re(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), re(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), re(), ym();
        },
        unstable_isNewReconciler: J
      };
    }
    var Ao = K.unstable_now, WC = 0, Em = -1, _p = -1, Cm = -1, Qg = !1, Rm = !1;
    function GC() {
      return Qg;
    }
    function Yw() {
      Rm = !0;
    }
    function Qw() {
      Qg = !1, Rm = !1;
    }
    function Ww() {
      Qg = Rm, Rm = !1;
    }
    function qC() {
      return WC;
    }
    function XC() {
      WC = Ao();
    }
    function Wg(e) {
      _p = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function KC(e) {
      _p = -1;
    }
    function Tm(e, t) {
      if (_p >= 0) {
        var a = Ao() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Ql(e) {
      if (Em >= 0) {
        var t = Ao() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case dt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (Cm >= 0) {
        var t = Ao() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case dt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Wl() {
      Em = Ao();
    }
    function qg() {
      Cm = Ao();
    }
    function Xg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function il(e, t) {
      if (e && e.defaultProps) {
        var a = Je({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Kg = {}, Jg, Zg, eS, tS, nS, JC, wm, rS, aS, iS, kp;
    {
      Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var ZC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ZC.has(a) || (ZC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = Tt(e) || "Component";
          nS.has(a) || (nS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Kg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Kg);
    }
    function lS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Wt) {
          hn(!0);
          try {
            s = a(i, u);
          } finally {
            hn(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : Je({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = co(e), u = ga(), s = Po(i), f = ju(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (hr(p, i, s, u), Zh(p, i, s)), ds(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = co(e), u = ga(), s = Po(i), f = ju(u, s);
        f.tag = mC, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (hr(p, i, s, u), Zh(p, i, s)), ds(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = co(e), i = ga(), u = Po(a), s = ju(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = Mo(a, s, u);
        f !== null && (hr(f, a, u, i), Zh(f, a, u)), Oc(a, u);
      }
    };
    function e0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Wt) {
            hn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              hn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Tt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ye(a, i) || !ye(u, s) : !0;
    }
    function Gw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Tt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === ke && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === ke && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Tt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Tt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || nt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function t0(e, t) {
      t.updater = uS, e.stateNode = t, du(t, e), t._reactInternalInstance = Kg;
    }
    function n0(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !iS.has(t)) {
          iS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === di ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Tt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Zn(f);
      else {
        u = Ef(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Cf(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & Wt) {
        hn(!0);
        try {
          g = new t(a, s);
        } finally {
          hn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      t0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = Tt(t) || "Component";
          Zg.has(w) || (Zg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), M !== null || U !== null || j !== null) {
            var oe = Tt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(oe) || (tS.add(oe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, oe, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && YE(e, u, s), g;
    }
    function qw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Be(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function r0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Be(e) || "Component";
          Jg.has(s) || (Jg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      Gw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Zn(s);
      else {
        var f = Ef(e, t, !0);
        u.context = Cf(e, f);
      }
      {
        if (u.state === a) {
          var p = Tt(t) || "Component";
          rS.has(p) || (rS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Wt && nl.recordLegacyContextWarning(e, u), nl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qw(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = yt;
        y |= Yi, (e.mode & Lt) !== ke && (y |= xl), e.flags |= y;
      }
    }
    function Xw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = Zn(p);
      else {
        var y = Ef(e, t, !0);
        v = Cf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && r0(e, u, a, v), gC();
      var w = e.memoizedState, M = u.state = w;
      if (em(e, a, u, i), M = e.memoizedState, s === a && w === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = yt;
          U |= Yi, (e.mode & Lt) !== ke && (U |= xl), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (lS(e, t, g, a), M = e.memoizedState);
      var j = tm() || e0(e, t, s, a, w, M, v);
      if (j) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var oe = yt;
          oe |= Yi, (e.mode & Lt) !== ke && (oe |= xl), e.flags |= oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = yt;
          Le |= Yi, (e.mode & Lt) !== ke && (Le |= xl), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, j;
    }
    function Kw(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : il(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ii;
      if (typeof g == "object" && g !== null)
        b = Zn(g);
      else {
        var w = Ef(t, a, !0);
        b = Cf(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && r0(t, s, i, b), gC();
      var j = t.memoizedState, oe = s.state = j;
      if (em(t, i, s, u), oe = t.memoizedState, f === v && j === oe && !Uh() && !tm())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= yt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= In), !1;
      typeof M == "function" && (lS(t, a, M, i), oe = t.memoizedState);
      var Le = tm() || e0(t, a, p, i, j, oe, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, oe, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, oe, b)), typeof s.componentDidUpdate == "function" && (t.flags |= yt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= In)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= yt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= In), t.memoizedProps = i, t.memoizedState = oe), s.props = i, s.state = oe, s.context = b, Le;
    }
    function Ks(e, t) {
      return {
        value: e,
        source: t,
        stack: Hi(t),
        digest: null
      };
    }
    function sS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jw(e, t) {
      return !0;
    }
    function cS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === te)
            return;
          console.error(i);
        }
        var p = u ? Be(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === q)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Be(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var Zw = typeof WeakMap == "function" ? WeakMap : Map;
    function a0(e, t, a) {
      var i = ju(Xt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Yb(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = ju(Xt, a);
      i.tag = hg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hR(e), cS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hR(e), cS(e, t), typeof u != "function" && $b(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Xr(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Be(e) || "Unknown"));
      }), i;
    }
    function i0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Zw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Qb.bind(null, e, t, a);
        qr && Yp(e, a), t.then(s, s);
      }
    }
    function ex(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function tx(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === ke && (a === Z || a === Qe || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function l0(e) {
      var t = e;
      do {
        if (t.tag === be && Uw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function u0(e, t, a, i, u) {
      if ((e.mode & lt) === ke) {
        if (e === t)
          e.flags |= Qr;
        else {
          if (e.flags |= xe, a.flags |= Rc, a.flags &= -52805, a.tag === te) {
            var s = a.alternate;
            if (s === null)
              a.tag = jt;
            else {
              var f = ju(Xt, Ae);
              f.tag = Xh, Mo(a, f, Ae);
            }
          }
          a.lanes = Xe(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= Qr, e.lanes = u, e;
    }
    function nx(e, t, a, i, u) {
      if (a.flags |= ls, qr && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        tx(a), Nr() && a.mode & lt && JE();
        var f = l0(t);
        if (f !== null) {
          f.flags &= -257, u0(f, t, a, e, u), f.mode & lt && i0(e, s, u), ex(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            i0(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nr() && a.mode & lt) {
        JE();
        var v = l0(t);
        if (v !== null) {
          (v.flags & Qr) === _e && (v.flags |= Ir), u0(v, t, a, e, u), rg(Ks(i, a));
          return;
        }
      }
      i = Ks(i, a), Ub(i);
      var y = t;
      do {
        switch (y.tag) {
          case q: {
            var g = i;
            y.flags |= Qr;
            var b = Cs(u);
            y.lanes = Xe(y.lanes, b);
            var w = a0(y, g, b);
            gg(y, w);
            return;
          }
          case te:
            var M = i, U = y.type, j = y.stateNode;
            if ((y.flags & xe) === _e && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !lR(j))) {
              y.flags |= Qr;
              var oe = Cs(u);
              y.lanes = Xe(y.lanes, oe);
              var Le = fS(y, M, oe);
              gg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function rx() {
      return null;
    }
    var Dp = A.ReactCurrentOwner, ll = !1, dS, Op, pS, vS, hS, Js, mS, xm, Lp;
    dS = {}, Op = {}, pS = {}, vS = {}, hS = {}, Js = !1, mS = {}, xm = {}, Lp = {};
    function ma(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = xf(t, e.child, a, i);
    }
    function ax(e, t, a, i) {
      t.child = xf(t, e.child, null, i), t.child = xf(t, null, a, i);
    }
    function o0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && el(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      _f(t, u), fa(t);
      {
        if (Dp.current = t, $n(!0), v = Nf(e, t, f, i, p, u), y = zf(), t.mode & Wt) {
          hn(!0);
          try {
            v = Nf(e, t, f, i, p, u), y = zf();
          } finally {
            hn(!1);
          }
        }
        $n(!1);
      }
      return da(), e !== null && !ll ? (wC(e, t, u), Hu(e, t, u)) : (Nr() && y && Ky(t), t.flags |= Za, ma(e, t, v, u), t.child);
    }
    function s0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (s_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Bf(s), t.tag = Fe, t.type = f, SS(t, s), c0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && el(
            p,
            i,
            // Resolved props
            "prop",
            Tt(s)
          ), a.defaultProps !== void 0) {
            var v = Tt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = tE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && el(
          b,
          i,
          // Resolved props
          "prop",
          Tt(g)
        );
      }
      var w = e.child, M = xS(e, u);
      if (!M) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : ye, j(U, i) && e.ref === t.ref)
          return Hu(e, t, u);
      }
      t.flags |= Za;
      var oe = rc(w, i);
      return oe.ref = t.ref, oe.return = t, t.child = oe, oe;
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === $e) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && el(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Tt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ye(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ll = !1, t.pendingProps = i = g, xS(e, u))
            (e.flags & Rc) !== _e && (ll = !0);
          else return t.lanes = e.lanes, Hu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function f0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ie)
        if ((t.mode & lt) === ke) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, jm(t, a);
        } else if (Xr(a, pa)) {
          var b = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          jm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = pa;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, jm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, jm(t, M);
      }
      return ma(e, t, u, a), t.child;
    }
    function ix(e, t, a) {
      var i = t.pendingProps;
      return ma(e, t, i, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps.children;
      return ma(e, t, i, a), t.child;
    }
    function ux(e, t, a) {
      {
        t.flags |= yt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ma(e, t, s, a), t.child;
    }
    function d0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= gn, t.flags |= po);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && el(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f;
      {
        var p = Ef(t, a, !0);
        f = Cf(t, p);
      }
      var v, y;
      _f(t, u), fa(t);
      {
        if (Dp.current = t, $n(!0), v = Nf(e, t, a, i, f, u), y = zf(), t.mode & Wt) {
          hn(!0);
          try {
            v = Nf(e, t, a, i, f, u), y = zf();
          } finally {
            hn(!1);
          }
        }
        $n(!1);
      }
      return da(), e !== null && !ll ? (wC(e, t, u), Hu(e, t, u)) : (Nr() && y && Ky(t), t.flags |= Za, ma(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      {
        switch (w_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= xe, t.flags |= Qr;
            var y = new Error("Simulated error coming from DevTools"), g = Cs(u);
            t.lanes = Xe(t.lanes, g);
            var b = fS(t, Ks(y, t), g);
            gg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && el(
            w,
            i,
            // Resolved props
            "prop",
            Tt(a)
          );
        }
      }
      var M;
      Bl(a) ? (M = !0, Fh(t)) : M = !1, _f(t, u);
      var U = t.stateNode, j;
      U === null ? (_m(e, t), n0(t, a, i), oS(t, a, i, u), j = !0) : e === null ? j = Xw(t, a, i, u) : j = Kw(e, t, a, i, u);
      var oe = gS(e, t, a, j, M, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Be(t) || "a component"), Js = !0);
      }
      return oe;
    }
    function gS(e, t, a, i, u, s) {
      d0(e, t);
      var f = (t.flags & xe) !== _e;
      if (!i && !f)
        return u && GE(t, a, !1), Hu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, KC();
      else {
        fa(t);
        {
          if ($n(!0), v = p.render(), t.mode & Wt) {
            hn(!0);
            try {
              p.render();
            } finally {
              hn(!1);
            }
          }
          $n(!1);
        }
        da();
      }
      return t.flags |= Za, e !== null && f ? ax(e, t, v, s) : ma(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function v0(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function ox(e, t, a) {
      if (v0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Ir) {
          var g = Ks(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return h0(e, t, p, a, g);
        } else if (p !== s) {
          var b = Ks(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return h0(e, t, p, a, b);
        } else {
          fw(t);
          var w = cC(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & -3 | _a, M = M.sibling;
        }
      } else {
        if (wf(), p === s)
          return Hu(e, t, a);
        ma(e, t, p, a);
      }
      return t.child;
    }
    function h0(e, t, a, i, u) {
      return wf(), rg(u), t.flags |= Ir, ma(e, t, a, i), t.child;
    }
    function sx(e, t, a) {
      CC(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Fy(i, u);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= ei), d0(e, t), ma(e, t, f, a), t.child;
    }
    function cx(e, t) {
      return e === null && ng(t), null;
    }
    function fx(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = c_(v), g = il(v, u), b;
      switch (y) {
        case Z:
          return SS(t, v), t.type = v = Bf(v), b = yS(null, t, v, g, i), b;
        case te:
          return t.type = v = qS(v), b = p0(null, t, v, g, i), b;
        case Qe:
          return t.type = v = XS(v), b = o0(null, t, v, g, i), b;
        case ut: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && el(
              w,
              g,
              // Resolved for outer only
              "prop",
              Tt(v)
            );
          }
          return b = s0(
            null,
            t,
            v,
            il(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === $e && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function dx(e, t, a, i, u) {
      _m(e, t), t.tag = te;
      var s;
      return Bl(a) ? (s = !0, Fh(t)) : s = !1, _f(t, u), n0(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
    }
    function px(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Ef(t, a, !1);
        s = Cf(t, f);
      }
      _f(t, i);
      var p, v;
      fa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Tt(a) || "Unknown";
          dS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), dS[y] = !0);
        }
        t.mode & Wt && nl.recordLegacyContextWarning(t, null), $n(!0), Dp.current = t, p = Nf(null, t, a, u, s, i), v = zf(), $n(!1);
      }
      if (da(), t.flags |= Za, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Tt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = Tt(a) || "Unknown";
          Op[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Op[b] = !0);
        }
        t.tag = te, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Bl(a) ? (w = !0, Fh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), t0(t, p), oS(t, a, u, i), gS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Z, t.mode & Wt) {
          hn(!0);
          try {
            p = Nf(null, t, a, u, s, i), v = zf();
          } finally {
            hn(!1);
          }
        }
        return Nr() && v && Ky(t), ma(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Tt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Tt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Tt(t) || "Unknown";
          pS[v] || (S("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: _t
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: rx(),
        transitions: null
      };
    }
    function vx(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function hx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Rg(e, Ep);
    }
    function mx(e, t) {
      return Rs(e.childLanes, t);
    }
    function m0(e, t, a) {
      var i = t.pendingProps;
      x_(t) && (t.flags |= xe);
      var u = rl.current, s = !1, f = (t.flags & xe) !== _e;
      if (f || hx(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = zw(u, TC)), u = Df(u), zo(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Cx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = yx(t, y, g, a), w = t.child;
          return w.memoizedState = CS(a), t.memoizedState = ES, b;
        } else
          return RS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return Rx(e, t, f, i, U, M, a);
        }
        if (s) {
          var j = i.fallback, oe = i.children, Le = Sx(e, t, oe, j, a), Te = t.child, Et = e.child.memoizedState;
          return Te.memoizedState = Et === null ? CS(a) : vx(Et, a), Te.childLanes = mx(e, a), t.memoizedState = ES, Le;
        } else {
          var pt = i.children, D = gx(e, t, pt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function yx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & lt) === ke && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Ot && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = TS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return yR(e, t, $, null);
    }
    function y0(e, t) {
      return rc(e, t);
    }
    function gx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = y0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === ke && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ba) : p.push(s);
      }
      return t.child = f, f;
    }
    function Sx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & lt) === ke && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Ot && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = y0(f, v), y.subtreeFlags = f.subtreeFlags & Nn;
      var b;
      return p !== null ? b = rc(p, i) : (b = Bo(i, s, u, null), b.flags |= Rn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && rg(i), xf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= Rn, t.memoizedState = null, f;
    }
    function Ex(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & lt) !== ke && xf(t, e.child, null, u), v;
    }
    function Cx(e, t, a) {
      return (e.mode & lt) === ke ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Vy(t) ? e.lanes = Sr : e.lanes = pa, null;
    }
    function Rx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Ir) {
          t.flags &= -257;
          var D = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= xe, null;
          var H = i.children, O = i.fallback, G = Ex(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = CS(f), t.memoizedState = ES, G;
        }
      else {
        if (sw(), (t.mode & lt) === ke)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = b1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = sS(b, p, y);
          return bm(e, t, f, w);
        }
        var M = Xr(f, e.childLanes);
        if (ll || M) {
          var U = Fm();
          if (U !== null) {
            var j = zd(U, f);
            if (j !== _t && j !== s.retryLane) {
              s.retryLane = j;
              var oe = Xt;
              Aa(e, j), hr(U, e, j, oe);
            }
          }
          IS();
          var Le = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Le);
        } else if (PE(u)) {
          t.flags |= xe, t.child = e.child;
          var Te = Wb.bind(null, e);
          return _1(u, Te), null;
        } else {
          dw(t, u, s.treeContext);
          var Et = i.children, pt = RS(t, Et);
          return pt.flags |= _a, pt;
        }
      }
    }
    function g0(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), pg(e.return, t, a);
    }
    function Tx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && g0(i, a, e);
        } else if (i.tag === an)
          g0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function wx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function xx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mS[e])
        if (mS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function bx(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function S0(e, t) {
      {
        var a = nt(e), i = !a && typeof qe(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function _x(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!S0(e[a], a))
              return;
        } else {
          var i = qe(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!S0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function wS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function E0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      xx(u), bx(s, u), _x(f, u), ma(e, t, f, a);
      var p = rl.current, v = Rg(p, Ep);
      if (v)
        p = Tg(p, Ep), t.flags |= xe;
      else {
        var y = e !== null && (e.flags & xe) !== _e;
        y && Tx(t, t.child, a), p = Df(p);
      }
      if (zo(t, p), (t.mode & lt) === ke)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = wx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), wS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && am(U) === null) {
                t.child = M;
                break;
              }
              var j = M.sibling;
              M.sibling = w, w = M, M = j;
            }
            wS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            wS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kx(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = xf(t, null, i, a) : ma(e, t, i, a), t.child;
    }
    var C0 = !1;
    function Dx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || C0 || (C0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && el(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (Q(y, p)) {
          if (f.children === s.children && !Uh())
            return Hu(e, t, a);
        } else
          xw(t, u, a);
      }
      var g = s.children;
      return ma(e, t, g, a), t.child;
    }
    var R0 = !1;
    function Ox(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R0 || (R0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), _f(t, a);
      var f = Zn(i);
      fa(t);
      var p;
      return Dp.current = t, $n(!0), p = s(f), $n(!1), da(), t.flags |= Za, ma(e, t, p, a), t.child;
    }
    function Mp() {
      ll = !0;
    }
    function _m(e, t) {
      (t.mode & lt) === ke && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Rn);
    }
    function Hu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), KC(), Ip(t.lanes), Xr(a, t.childLanes) ? (Tw(e, t), t.child) : null;
    }
    function Lx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ba) : s.push(e), a.flags |= Rn, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!Xr(a, t);
    }
    function Mx(e, t, a) {
      switch (t.tag) {
        case q:
          v0(t), t.stateNode, wf();
          break;
        case se:
          CC(t);
          break;
        case te: {
          var i = t.type;
          Bl(i) && Fh(t);
          break;
        }
        case Ce:
          Sg(t, t.stateNode.containerInfo);
          break;
        case ct: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case dt:
          {
            var f = Xr(a, t.childLanes);
            f && (t.flags |= yt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, Df(rl.current)), t.flags |= xe, null;
            var y = t.child, g = y.childLanes;
            if (Xr(a, g))
              return m0(e, t, a);
            zo(t, Df(rl.current));
            var b = Hu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            zo(t, Df(rl.current));
          break;
        }
        case an: {
          var w = (e.flags & xe) !== _e, M = Xr(a, t.childLanes);
          if (w) {
            if (M)
              return E0(e, t, a);
            t.flags |= xe;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), zo(t, rl.current), M)
            break;
          return null;
        }
        case De:
        case Ut:
          return t.lanes = $, f0(e, t, a);
      }
      return Hu(e, t, a);
    }
    function T0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Lx(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ll = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & xe) === _e)
            return ll = !1, Mx(e, t, a);
          (e.flags & Rc) !== _e ? ll = !0 : ll = !1;
        }
      } else if (ll = !1, Nr() && rw(t)) {
        var f = t.index, p = aw();
        KE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case Pe:
          return px(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return fx(e, t, v, a);
        }
        case Z: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : il(y, g);
          return yS(e, t, y, b, a);
        }
        case te: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : il(w, M);
          return p0(e, t, w, U, a);
        }
        case q:
          return ox(e, t, a);
        case se:
          return sx(e, t, a);
        case Ye:
          return cx(e, t);
        case be:
          return m0(e, t, a);
        case Ce:
          return kx(e, t, a);
        case Qe: {
          var j = t.type, oe = t.pendingProps, Le = t.elementType === j ? oe : il(j, oe);
          return o0(e, t, j, Le, a);
        }
        case mt:
          return ix(e, t, a);
        case ft:
          return lx(e, t, a);
        case dt:
          return ux(e, t, a);
        case ct:
          return Dx(e, t, a);
        case cn:
          return Ox(e, t, a);
        case ut: {
          var Te = t.type, Et = t.pendingProps, pt = il(Te, Et);
          if (t.type !== t.elementType) {
            var D = Te.propTypes;
            D && el(
              D,
              pt,
              // Resolved for outer only
              "prop",
              Tt(Te)
            );
          }
          return pt = il(Te.type, pt), s0(e, t, Te, pt, a);
        }
        case Fe:
          return c0(e, t, t.type, t.pendingProps, a);
        case jt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : il(H, O);
          return dx(e, t, H, G, a);
        }
        case an:
          return E0(e, t, a);
        case xt:
          break;
        case De:
          return f0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uf(e) {
      e.flags |= yt;
    }
    function w0(e) {
      e.flags |= gn, e.flags |= po;
    }
    var x0, bS, b0, _0;
    x0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === se || u.tag === Ye)
          e1(e, u.stateNode);
        else if (u.tag !== Ce) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, bS = function(e, t) {
    }, b0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = n1(f, a, s, i, u, p);
        t.updateQueue = v, v && Uf(t);
      }
    }, _0 = function(e, t, a, i) {
      a !== i && Uf(t);
    };
    function Np(e, t) {
      if (!Nr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ur(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = _e;
      if (t) {
        if ((e.mode & Ot) !== ke) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & Nn, i |= y.flags & Nn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & Nn, i |= g.flags & Nn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ot) !== ke) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Nx(e, t, a) {
      if (yw() && (t.mode & lt) !== ke && (t.flags & xe) === _e)
        return aC(t), wf(), t.flags |= Ir | ls | Qr, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (hw(t), Ur(t), (t.mode & Ot) !== ke) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (wf(), (t.flags & xe) === _e && (t.memoizedState = null), t.flags |= yt, Ur(t), (t.mode & Ot) !== ke) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iC(), !0;
    }
    function k0(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Pe:
        case rn:
        case Fe:
        case Z:
        case Qe:
        case mt:
        case ft:
        case dt:
        case cn:
        case ut:
          return Ur(t), null;
        case te: {
          var u = t.type;
          return Bl(u) && Ah(t), Ur(t), null;
        }
        case q: {
          var s = t.stateNode;
          if (kf(t), Gy(t), xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Uf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ir) !== _e) && (t.flags |= In, iC());
            }
          }
          return bS(e, t), Ur(t), null;
        }
        case se: {
          Cg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            b0(e, t, y, i, v), e.ref !== t.ref && w0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ur(t), null;
            }
            var g = Eg(), b = Bh(t);
            if (b)
              pw(t, v, g) && Uf(t);
            else {
              var w = ZT(y, i, v, g, t);
              x0(w, t, !1, !1), t.stateNode = w, t1(w, y, i, v) && Uf(t);
            }
            t.ref !== null && w0(t);
          }
          return Ur(t), null;
        }
        case Ye: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            _0(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = EC(), oe = Eg(), Le = Bh(t);
            Le ? vw(t) && Uf(t) : t.stateNode = r1(M, j, oe, t);
          }
          return Ur(t), null;
        }
        case be: {
          Of(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Et = Nx(e, t, Te);
            if (!Et)
              return t.flags & Qr ? t : null;
          }
          if ((t.flags & xe) !== _e)
            return t.lanes = a, (t.mode & Ot) !== ke && Xg(t), t;
          var pt = Te !== null, D = e !== null && e.memoizedState !== null;
          if (pt !== D && pt) {
            var H = t.child;
            if (H.flags |= Mn, (t.mode & lt) !== ke) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Rg(rl.current, TC) ? zb() : IS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= yt), Ur(t), (t.mode & Ot) !== ke && pt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Ce:
          return kf(t), bS(e, t), e === null && X1(t.stateNode.containerInfo), Ur(t), null;
        case ct:
          var ce = t.type._context;
          return dg(ce, t), Ur(t), null;
        case jt: {
          var He = t.type;
          return Bl(He) && Ah(t), Ur(t), null;
        }
        case an: {
          Of(t);
          var We = t.memoizedState;
          if (We === null)
            return Ur(t), null;
          var qt = (t.flags & xe) !== _e, Nt = We.rendering;
          if (Nt === null)
            if (qt)
              Np(We, !1);
            else {
              var Wn = Ab() && (e === null || (e.flags & xe) === _e);
              if (!Wn)
                for (var zt = t.child; zt !== null; ) {
                  var Hn = am(zt);
                  if (Hn !== null) {
                    qt = !0, t.flags |= xe, Np(We, !1);
                    var ra = Hn.updateQueue;
                    return ra !== null && (t.updateQueue = ra, t.flags |= yt), t.subtreeFlags = _e, ww(t, a), zo(t, Tg(rl.current, Ep)), t.child;
                  }
                  zt = zt.sibling;
                }
              We.tail !== null && Yn() > q0() && (t.flags |= xe, qt = !0, Np(We, !1), t.lanes = xd);
            }
          else {
            if (!qt) {
              var Pr = am(Nt);
              if (Pr !== null) {
                t.flags |= xe, qt = !0;
                var ui = Pr.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= yt), Np(We, !0), We.tail === null && We.tailMode === "hidden" && !Nt.alternate && !Nr())
                  return Ur(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Yn() * 2 - We.renderingStartTime > q0() && a !== pa && (t.flags |= xe, qt = !0, Np(We, !1), t.lanes = xd);
            }
            if (We.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var Sa = We.last;
              Sa !== null ? Sa.sibling = Nt : t.child = Nt, We.last = Nt;
            }
          }
          if (We.tail !== null) {
            var Ea = We.tail;
            We.rendering = Ea, We.tail = Ea.sibling, We.renderingStartTime = Yn(), Ea.sibling = null;
            var aa = rl.current;
            return qt ? aa = Tg(aa, Ep) : aa = Df(aa), zo(t, aa), Ea;
          }
          return Ur(t), null;
        }
        case xt:
          break;
        case De:
        case Ut: {
          $S(t);
          var Iu = t.memoizedState, $f = Iu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Xl = qp !== null;
            Xl !== $f && (t.flags |= Mn);
          }
          return !$f || (t.mode & lt) === ke ? Ur(t) : Xr(ql, pa) && (Ur(t), t.subtreeFlags & (Rn | yt) && (t.flags |= Mn)), null;
        }
        case bt:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zx(e, t, a) {
      switch (Jy(t), t.tag) {
        case te: {
          var i = t.type;
          Bl(i) && Ah(t);
          var u = t.flags;
          return u & Qr ? (t.flags = u & -65537 | xe, (t.mode & Ot) !== ke && Xg(t), t) : null;
        }
        case q: {
          t.stateNode, kf(t), Gy(t), xg();
          var s = t.flags;
          return (s & Qr) !== _e && (s & xe) === _e ? (t.flags = s & -65537 | xe, t) : null;
        }
        case se:
          return Cg(t), null;
        case be: {
          Of(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            wf();
          }
          var p = t.flags;
          return p & Qr ? (t.flags = p & -65537 | xe, (t.mode & Ot) !== ke && Xg(t), t) : null;
        }
        case an:
          return Of(t), null;
        case Ce:
          return kf(t), null;
        case ct:
          var v = t.type._context;
          return dg(v, t), null;
        case De:
        case Ut:
          return $S(t), null;
        case bt:
          return null;
        default:
          return null;
      }
    }
    function D0(e, t, a) {
      switch (Jy(t), t.tag) {
        case te: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case q: {
          t.stateNode, kf(t), Gy(t), xg();
          break;
        }
        case se: {
          Cg(t);
          break;
        }
        case Ce:
          kf(t);
          break;
        case be:
          Of(t);
          break;
        case an:
          Of(t);
          break;
        case ct:
          var u = t.type._context;
          dg(u, t);
          break;
        case De:
        case Ut:
          $S(t);
          break;
      }
    }
    var O0 = null;
    O0 = /* @__PURE__ */ new Set();
    var km = !1, Ar = !1, Ux = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Af = null, Ff = null;
    function Ax(e) {
      wl(null, function() {
        throw e;
      }), is();
    }
    var Fx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ot)
        try {
          Wl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function L0(e, t) {
      try {
        Fo(sr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Fx(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function jx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function M0(e, t) {
      try {
        z0(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && rt && e.mode & Ot)
              try {
                Wl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var N0 = !1;
    function Hx(e, t) {
      KT(e.containerInfo), ge = t, Px();
      var a = N0;
      return N0 = !1, a;
    }
    function Px() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & bl) !== _e && t !== null ? (t.return = e, ge = t) : Vx();
      }
    }
    function Vx() {
      for (; ge !== null; ) {
        var e = ge;
        It(e);
        try {
          Bx(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        on();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Bx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & In) !== _e) {
        switch (It(e), e.tag) {
          case Z:
          case Qe:
          case Fe:
            break;
          case te: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : il(e.type, i), u);
              {
                var p = O0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Be(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case q: {
            {
              var v = e.stateNode;
              R1(v.containerInfo);
            }
            break;
          }
          case se:
          case Ye:
          case Ce:
          case jt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        on();
      }
    }
    function ul(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zr) !== Fa ? Gi(t) : (e & sr) !== Fa && os(t), (e & $l) !== Fa && Qp(!0), Dm(t, a, p), (e & $l) !== Fa && Qp(!1), (e & zr) !== Fa ? Ol() : (e & sr) !== Fa && Td());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zr) !== Fa ? Rd(t) : (e & sr) !== Fa && kc(t);
            var f = s.create;
            (e & $l) !== Fa && Qp(!0), s.destroy = f(), (e & $l) !== Fa && Qp(!1), (e & zr) !== Fa ? zv() : (e & sr) !== Fa && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & sr) !== _e ? v = "useLayoutEffect" : (s.tag & $l) !== _e ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function $x(e, t) {
      if ((t.flags & yt) !== _e)
        switch (t.tag) {
          case dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case q:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case dt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Ix(e, t, a, i) {
      if ((a.flags & kl) !== _e)
        switch (a.tag) {
          case Z:
          case Qe:
          case Fe: {
            if (!Ar)
              if (a.mode & Ot)
                try {
                  Wl(), Fo(sr | or, a);
                } finally {
                  Ql(a);
                }
              else
                Fo(sr | or, a);
            break;
          }
          case te: {
            var u = a.stateNode;
            if (a.flags & yt && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Ot)
                  try {
                    Wl(), u.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : il(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Ot)
                  try {
                    Wl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), SC(a, p, u));
            break;
          }
          case q: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case se:
                    y = a.child.stateNode;
                    break;
                  case te:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case se: {
            var g = a.stateNode;
            if (t === null && a.flags & yt) {
              var b = a.type, w = a.memoizedProps;
              o1(g, b, w);
            }
            break;
          }
          case Ye:
            break;
          case Ce:
            break;
          case dt: {
            {
              var M = a.memoizedProps, U = M.onCommit, j = M.onRender, oe = a.stateNode.effectDuration, Le = qC(), Te = t === null ? "mount" : "update";
              GC() && (Te = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, Te, oe, Le), Vb(a);
                var Et = a.return;
                e: for (; Et !== null; ) {
                  switch (Et.tag) {
                    case q:
                      var pt = Et.stateNode;
                      pt.effectDuration += oe;
                      break e;
                    case dt:
                      var D = Et.stateNode;
                      D.effectDuration += oe;
                      break e;
                  }
                  Et = Et.return;
                }
              }
            }
            break;
          }
          case be: {
            Jx(e, a);
            break;
          }
          case an:
          case jt:
          case xt:
          case De:
          case Ut:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & gn && z0(a);
    }
    function Yx(e) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe: {
          if (e.mode & Ot)
            try {
              Wl(), L0(e, e.return);
            } finally {
              Ql(e);
            }
          else
            L0(e, e.return);
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && jx(e, e.return, t), M0(e, e.return);
          break;
        }
        case se: {
          M0(e, e.return);
          break;
        }
      }
    }
    function Qx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === se) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? g1(u) : E1(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === Ye) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? S1(s) : C1(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === De || i.tag === Ut) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function z0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case se:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ot)
            try {
              Wl(), u = t(i);
            } finally {
              Ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Be(e)), t.current = i;
      }
    }
    function Wx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === se) {
          var a = e.stateNode;
          a !== null && Z1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gx(e) {
      for (var t = e.return; t !== null; ) {
        if (A0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function A0(e) {
      return e.tag === se || e.tag === q || e.tag === Ce;
    }
    function F0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || A0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== se && t.tag !== Ye && t.tag !== Kt; ) {
          if (t.flags & Rn || t.child === null || t.tag === Ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Rn))
          return t.stateNode;
      }
    }
    function qx(e) {
      var t = Gx(e);
      switch (t.tag) {
        case se: {
          var a = t.stateNode;
          t.flags & ei && (HE(a), t.flags &= -33);
          var i = F0(e);
          DS(e, i, a);
          break;
        }
        case q:
        case Ce: {
          var u = t.stateNode.containerInfo, s = F0(e);
          kS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === se || i === Ye;
      if (u) {
        var s = e.stateNode;
        t ? v1(a, s, t) : d1(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === se || i === Ye;
      if (u) {
        var s = e.stateNode;
        t ? p1(a, s, t) : f1(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, ol = !1;
    function Xx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case se: {
              Fr = i.stateNode, ol = !1;
              break e;
            }
            case q: {
              Fr = i.stateNode.containerInfo, ol = !0;
              break e;
            }
            case Ce: {
              Fr = i.stateNode.containerInfo, ol = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        j0(e, t, a), Fr = null, ol = !1;
      }
      Wx(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        j0(e, t, i), i = i.sibling;
    }
    function j0(e, t, a) {
      switch (Sd(a), a.tag) {
        case se:
          Ar || jf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ye: {
          {
            var i = Fr, u = ol;
            Fr = null, jo(e, t, a), Fr = i, ol = u, Fr !== null && (ol ? m1(Fr, a.stateNode) : h1(Fr, a.stateNode));
          }
          return;
        }
        case Kt: {
          Fr !== null && (ol ? y1(Fr, a.stateNode) : Py(Fr, a.stateNode));
          return;
        }
        case Ce: {
          {
            var s = Fr, f = ol;
            Fr = a.stateNode.containerInfo, ol = !0, jo(e, t, a), Fr = s, ol = f;
          }
          return;
        }
        case Z:
        case Qe:
        case ut:
        case Fe: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & $l) !== Fa ? Dm(a, t, w) : (M & sr) !== Fa && (os(a), a.mode & Ot ? (Wl(), Dm(a, t, w), Ql(a)) : Dm(a, t, w), Td())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case te: {
          if (!Ar) {
            jf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && _S(a, t, U);
          }
          jo(e, t, a);
          return;
        }
        case xt: {
          jo(e, t, a);
          return;
        }
        case De: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var j = Ar;
            Ar = j || a.memoizedState !== null, jo(e, t, a), Ar = j;
          } else
            jo(e, t, a);
          break;
        }
        default: {
          jo(e, t, a);
          return;
        }
      }
    }
    function Kx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && A1(s);
          }
        }
      }
    }
    function H0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ux()), t.forEach(function(i) {
          var u = Gb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), qr)
              if (Af !== null && Ff !== null)
                Yp(Ff, Af);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Zx(e, t, a) {
      Af = a, Ff = e, It(t), P0(t, e), It(t), Af = null, Ff = null;
    }
    function sl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xx(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = yl();
      if (t.subtreeFlags & _l)
        for (var p = t.child; p !== null; )
          It(p), P0(p, e), p = p.sibling;
      It(f);
    }
    function P0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Z:
        case Qe:
        case ut:
        case Fe: {
          if (sl(t, e), Gl(e), u & yt) {
            try {
              ul($l | or, e, e.return), Fo($l | or, e);
            } catch (He) {
              sn(e, e.return, He);
            }
            if (e.mode & Ot) {
              try {
                Wl(), ul(sr | or, e, e.return);
              } catch (He) {
                sn(e, e.return, He);
              }
              Ql(e);
            } else
              try {
                ul(sr | or, e, e.return);
              } catch (He) {
                sn(e, e.return, He);
              }
          }
          return;
        }
        case te: {
          sl(t, e), Gl(e), u & gn && i !== null && jf(i, i.return);
          return;
        }
        case se: {
          sl(t, e), Gl(e), u & gn && i !== null && jf(i, i.return);
          {
            if (e.flags & ei) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (He) {
                sn(e, e.return, He);
              }
            }
            if (u & yt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    s1(f, g, y, v, p, e);
                  } catch (He) {
                    sn(e, e.return, He);
                  }
              }
            }
          }
          return;
        }
        case Ye: {
          if (sl(t, e), Gl(e), u & yt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              c1(b, M, w);
            } catch (He) {
              sn(e, e.return, He);
            }
          }
          return;
        }
        case q: {
          if (sl(t, e), Gl(e), u & yt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                U1(t.containerInfo);
              } catch (He) {
                sn(e, e.return, He);
              }
          }
          return;
        }
        case Ce: {
          sl(t, e), Gl(e);
          return;
        }
        case be: {
          sl(t, e), Gl(e);
          var j = e.child;
          if (j.flags & Mn) {
            var oe = j.stateNode, Le = j.memoizedState, Te = Le !== null;
            if (oe.isHidden = Te, Te) {
              var Et = j.alternate !== null && j.alternate.memoizedState !== null;
              Et || Nb();
            }
          }
          if (u & yt) {
            try {
              Kx(e);
            } catch (He) {
              sn(e, e.return, He);
            }
            H0(e);
          }
          return;
        }
        case De: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var D = Ar;
            Ar = D || pt, sl(t, e), Ar = D;
          } else
            sl(t, e);
          if (Gl(e), u & Mn) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, pe = e;
            if (H.isHidden = G, G && !pt && (pe.mode & lt) !== ke) {
              ge = pe;
              for (var ce = pe.child; ce !== null; )
                ge = ce, tb(ce), ce = ce.sibling;
            }
            Qx(pe, G);
          }
          return;
        }
        case an: {
          sl(t, e), Gl(e), u & yt && H0(e);
          return;
        }
        case xt:
          return;
        default: {
          sl(t, e), Gl(e);
          return;
        }
      }
    }
    function Gl(e) {
      var t = e.flags;
      if (t & Rn) {
        try {
          qx(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & _a && (e.flags &= -4097);
    }
    function eb(e, t, a) {
      Af = a, Ff = t, ge = e, V0(e, t, a), Af = null, Ff = null;
    }
    function V0(e, t, a) {
      for (var i = (e.mode & lt) !== ke; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === De && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, b = km, w = Ar;
            km = p, Ar = g, Ar && !w && (ge = u, nb(u));
            for (var M = s; M !== null; )
              ge = M, V0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            ge = u, km = b, Ar = w, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & kl) !== _e && s !== null ? (s.return = u, ge = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & kl) !== _e) {
          var u = i.alternate;
          It(i);
          try {
            Ix(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          on();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function tb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case Z:
          case Qe:
          case ut:
          case Fe: {
            if (t.mode & Ot)
              try {
                Wl(), ul(sr, t, t.return);
              } finally {
                Ql(t);
              }
            else
              ul(sr, t, t.return);
            break;
          }
          case te: {
            jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case se: {
            jf(t, t.return);
            break;
          }
          case De: {
            var u = t.memoizedState !== null;
            if (u) {
              B0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : B0(e);
      }
    }
    function B0(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function nb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === De) {
          var i = t.memoizedState !== null;
          if (i) {
            $0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : $0(e);
      }
    }
    function $0(e) {
      for (; ge !== null; ) {
        var t = ge;
        It(t);
        try {
          Yx(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (on(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function rb(e, t, a, i) {
      ge = t, ab(t, e, a, i);
    }
    function ab(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Qi) !== _e && s !== null ? (s.return = u, ge = s) : ib(e, t, a, i);
      }
    }
    function ib(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Yr) !== _e) {
          It(u);
          try {
            lb(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          on();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function lb(e, t, a, i) {
      switch (t.tag) {
        case Z:
        case Qe:
        case Fe: {
          if (t.mode & Ot) {
            qg();
            try {
              Fo(zr | or, t);
            } finally {
              Gg(t);
            }
          } else
            Fo(zr | or, t);
          break;
        }
      }
    }
    function ub(e) {
      ge = e, ob();
    }
    function ob() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & ba) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, fb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ge = e;
          }
        }
        (e.subtreeFlags & Qi) !== _e && t !== null ? (t.return = e, ge = t) : sb();
      }
    }
    function sb() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Yr) !== _e && (It(e), cb(e), on());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function cb(e) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe: {
          e.mode & Ot ? (qg(), ul(zr | or, e, e.return), Gg(e)) : ul(zr | or, e, e.return);
          break;
        }
      }
    }
    function fb(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        It(a), pb(a, t), on();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : db(e);
      }
    }
    function db(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (U0(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function pb(e, t) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe: {
          e.mode & Ot ? (qg(), ul(zr, e, t), Gg(e)) : ul(zr, e, t);
          break;
        }
      }
    }
    function vb(e) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe: {
          try {
            Fo(sr | or, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe: {
          try {
            Fo(zr | or, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe: {
          try {
            ul(sr | or, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case Z:
        case Qe:
        case Fe:
          try {
            ul(zr | or, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var gb = [];
    function Sb() {
      gb.forEach(function(e) {
        return e();
      });
    }
    var Eb = A.ReactCurrentActQueue;
    function Cb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function I0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Eb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Rb = Math.ceil, LS = A.ReactCurrentDispatcher, MS = A.ReactCurrentOwner, jr = A.ReactCurrentBatchConfig, cl = A.ReactCurrentActQueue, dr = (
      /*             */
      0
    ), Y0 = (
      /*               */
      1
    ), Hr = (
      /*                */
      2
    ), Ui = (
      /*                */
      4
    ), Pu = 0, Up = 1, Zs = 2, Om = 3, Ap = 4, Q0 = 5, NS = 6, St = dr, ya = null, kn = null, pr = $, ql = $, zS = ko($), vr = Pu, Fp = null, Lm = $, jp = $, Mm = $, Hp = null, ja = null, US = 0, W0 = 500, G0 = 1 / 0, Tb = 500, Vu = null;
    function Pp() {
      G0 = Yn() + Tb;
    }
    function q0() {
      return G0;
    }
    var Nm = !1, AS = null, Hf = null, ec = !1, Ho = null, Vp = $, FS = [], jS = null, wb = 50, Bp = 0, HS = null, PS = !1, zm = !1, xb = 50, Pf = 0, Um = null, $p = Xt, Am = $, X0 = !1;
    function Fm() {
      return ya;
    }
    function ga() {
      return (St & (Hr | Ui)) !== dr ? Yn() : ($p !== Xt || ($p = Yn()), $p);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & lt) === ke)
        return Ae;
      if ((St & Hr) !== dr && pr !== $)
        return Cs(pr);
      var a = Ew() !== Sw;
      if (a) {
        if (jr.transition !== null) {
          var i = jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === _t && (Am = Ld()), Am;
      }
      var u = Na();
      if (u !== _t)
        return u;
      var s = a1();
      return s;
    }
    function bb(e) {
      var t = e.mode;
      return (t & lt) === ke ? Ae : Vv();
    }
    function hr(e, t, a, i) {
      Xb(), X0 && S("useInsertionEffect must not schedule updates."), PS && (zm = !0), yo(e, a, i), (St & Hr) !== $ && e === ya ? Zb(t) : (qr && ws(e, t, a), e_(t), e === ya && ((St & Hr) === dr && (jp = Xe(jp, a)), vr === Ap && Vo(e, pr)), Ha(e, i), a === Ae && St === dr && (t.mode & lt) === ke && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !cl.isBatchingLegacy && (Pp(), XE()));
    }
    function _b(e, t, a) {
      var i = e.current;
      i.lanes = t, yo(e, t, a), Ha(e, a);
    }
    function kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (St & Hr) !== dr
      );
    }
    function Ha(e, t) {
      var a = e.callbackNode;
      Gc(e, t);
      var i = Wc(e, e === ya ? pr : $);
      if (i === $) {
        a !== null && dR(a), e.callbackNode = null, e.callbackPriority = _t;
        return;
      }
      var u = Nl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(cl.current !== null && a !== WS)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dR(a);
      var f;
      if (u === Ae)
        e.tag === Do ? (cl.isBatchingLegacy !== null && (cl.didScheduleLegacyUpdate = !0), nw(Z0.bind(null, e))) : qE(Z0.bind(null, e)), cl.current !== null ? cl.current.push(Oo) : l1(function() {
          (St & (Hr | Ui)) === dr && Oo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case kr:
            p = us;
            break;
          case xi:
            p = Dl;
            break;
          case La:
            p = Wi;
            break;
          case Ma:
            p = vu;
            break;
          default:
            p = Wi;
            break;
        }
        f = GS(p, K0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function K0(e, t) {
      if (Qw(), $p = Xt, Am = $, (St & (Hr | Ui)) !== dr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = Wc(e, e === ya ? pr : $);
      if (u === $)
        return null;
      var s = !Xc(e, u) && !Pv(e, u) && !t, f = s ? jb(e, u) : Hm(e, u);
      if (f !== Pu) {
        if (f === Zs) {
          var p = qc(e);
          p !== $ && (u = p, f = VS(e, p));
        }
        if (f === Up) {
          var v = Fp;
          throw tc(e, $), Vo(e, u), Ha(e, Yn()), v;
        }
        if (f === NS)
          Vo(e, u);
        else {
          var y = !Xc(e, u), g = e.current.alternate;
          if (y && !Ob(g)) {
            if (f = Hm(e, u), f === Zs) {
              var b = qc(e);
              b !== $ && (u = b, f = VS(e, b));
            }
            if (f === Up) {
              var w = Fp;
              throw tc(e, $), Vo(e, u), Ha(e, Yn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Db(e, f, u);
        }
      }
      return Ha(e, Yn()), e.callbackNode === a ? K0.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Hp;
      if (Zc(e)) {
        var i = tc(e, t);
        i.flags |= Ir, q1(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== Zs) {
        var s = ja;
        ja = a, s !== null && J0(s);
      }
      return u;
    }
    function J0(e) {
      ja === null ? ja = e : ja.push.apply(ja, e);
    }
    function Db(e, t, a) {
      switch (t) {
        case Pu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Zs: {
          nc(e, ja, Vu);
          break;
        }
        case Om: {
          if (Vo(e, a), xu(a) && // do not delay if we're inside an act() scope
          !pR()) {
            var i = US + W0 - Yn();
            if (i > 10) {
              var u = Wc(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!bu(s, a)) {
                ga(), Kc(e, s);
                break;
              }
              e.timeoutHandle = jy(nc.bind(null, e, ja, Vu), i);
              break;
            }
          }
          nc(e, ja, Vu);
          break;
        }
        case Ap: {
          if (Vo(e, a), Dd(a))
            break;
          if (!pR()) {
            var f = ni(e, a), p = f, v = Yn() - p, y = qb(v) - v;
            if (y > 10) {
              e.timeoutHandle = jy(nc.bind(null, e, ja, Vu), y);
              break;
            }
          }
          nc(e, ja, Vu);
          break;
        }
        case Q0: {
          nc(e, ja, Vu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ob(e) {
      for (var t = e; ; ) {
        if (t.flags & fo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Q(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & fo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Vo(e, t) {
      t = Rs(t, Mm), t = Rs(t, jp), Iv(e, t);
    }
    function Z0(e) {
      if (Ww(), (St & (Hr | Ui)) !== dr)
        throw new Error("Should not already be working.");
      $u();
      var t = Wc(e, $);
      if (!Xr(t, Ae))
        return Ha(e, Yn()), null;
      var a = Hm(e, t);
      if (e.tag !== Do && a === Zs) {
        var i = qc(e);
        i !== $ && (t = i, a = VS(e, i));
      }
      if (a === Up) {
        var u = Fp;
        throw tc(e, $), Vo(e, t), Ha(e, Yn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, ja, Vu), Ha(e, Yn()), null;
    }
    function Lb(e, t) {
      t !== $ && (Jc(e, Xe(t, Ae)), Ha(e, Yn()), (St & (Hr | Ui)) === dr && (Pp(), Oo()));
    }
    function BS(e, t) {
      var a = St;
      St |= Y0;
      try {
        return e(t);
      } finally {
        St = a, St === dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !cl.isBatchingLegacy && (Pp(), XE());
      }
    }
    function Mb(e, t, a, i, u) {
      var s = Na(), f = jr.transition;
      try {
        return jr.transition = null, An(kr), e(t, a, i, u);
      } finally {
        An(s), jr.transition = f, St === dr && Pp();
      }
    }
    function Bu(e) {
      Ho !== null && Ho.tag === Do && (St & (Hr | Ui)) === dr && $u();
      var t = St;
      St |= Y0;
      var a = jr.transition, i = Na();
      try {
        return jr.transition = null, An(kr), e ? e() : void 0;
      } finally {
        An(i), jr.transition = a, St = t, (St & (Hr | Ui)) === dr && Oo();
      }
    }
    function eR() {
      return (St & (Hr | Ui)) !== dr;
    }
    function jm(e, t) {
      ta(zS, ql, e), ql = Xe(ql, t);
    }
    function $S(e) {
      ql = zS.current, ea(zS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, i1(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          D0(u, i), i = i.return;
        }
      ya = e;
      var s = rc(e.current, null);
      return kn = s, pr = ql = t, vr = Pu, Fp = null, Lm = $, jp = $, Mm = $, Hp = null, ja = null, _w(), nl.discardPendingWarnings(), s;
    }
    function tR(e, t) {
      do {
        var a = kn;
        try {
          if (Gh(), xC(), on(), MS.current = null, a === null || a.return === null) {
            vr = Up, Fp = t, kn = null;
            return;
          }
          if (Ue && a.mode & Ot && Tm(a, !0), je)
            if (da(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, pr);
            } else
              ss(a, t, pr);
          nx(e, a.return, a, t, pr), iR(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function nR() {
      var e = LS.current;
      return LS.current = gm, e === null ? gm : e;
    }
    function rR(e) {
      LS.current = e;
    }
    function Nb() {
      US = Yn();
    }
    function Ip(e) {
      Lm = Xe(e, Lm);
    }
    function zb() {
      vr === Pu && (vr = Om);
    }
    function IS() {
      (vr === Pu || vr === Om || vr === Zs) && (vr = Ap), ya !== null && (Es(Lm) || Es(jp)) && Vo(ya, pr);
    }
    function Ub(e) {
      vr !== Ap && (vr = Zs), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function Ab() {
      return vr === Pu;
    }
    function Hm(e, t) {
      var a = St;
      St |= Hr;
      var i = nR();
      if (ya !== e || pr !== t) {
        if (qr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, pr), u.clear()), Yv(e, t);
        }
        Vu = Ud(), tc(e, t);
      }
      gu(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      if (Gh(), St = a, rR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Dc(), ya = null, pr = $, vr;
    }
    function Fb() {
      for (; kn !== null; )
        aR(kn);
    }
    function jb(e, t) {
      var a = St;
      St |= Hr;
      var i = nR();
      if (ya !== e || pr !== t) {
        if (qr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, pr), u.clear()), Yv(e, t);
        }
        Vu = Ud(), Pp(), tc(e, t);
      }
      gu(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      return Gh(), rR(i), St = a, kn !== null ? (Av(), Pu) : (Dc(), ya = null, pr = $, vr);
    }
    function Hb() {
      for (; kn !== null && !vd(); )
        aR(kn);
    }
    function aR(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Ot) !== ke ? (Wg(e), a = YS(t, e, ql), Tm(e, !0)) : a = YS(t, e, ql), on(), e.memoizedProps = e.pendingProps, a === null ? iR(e) : kn = a, MS.current = null;
    }
    function iR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ls) === _e) {
          It(t);
          var u = void 0;
          if ((t.mode & Ot) === ke ? u = k0(a, t, ql) : (Wg(t), u = k0(a, t, ql), Tm(t, !1)), on(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = zx(a, t);
          if (s !== null) {
            s.flags &= Ov, kn = s;
            return;
          }
          if ((t.mode & Ot) !== ke) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ls, i.subtreeFlags = _e, i.deletions = null;
          else {
            vr = NS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      vr === Pu && (vr = Q0);
    }
    function nc(e, t, a) {
      var i = Na(), u = jr.transition;
      try {
        jr.transition = null, An(kr), Pb(e, t, a, i);
      } finally {
        jr.transition = u, An(i);
      }
      return null;
    }
    function Pb(e, t, a, i) {
      do
        $u();
      while (Ho !== null);
      if (Kb(), (St & (Hr | Ui)) !== dr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ed(s), u === null)
        return Cd(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = _t;
      var f = Xe(u.lanes, u.childLanes);
      Nd(e, f), e === ya && (ya = null, kn = null, pr = $), ((u.subtreeFlags & Qi) !== _e || (u.flags & Qi) !== _e) && (ec || (ec = !0, jS = a, GS(Wi, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (bl | _l | kl | Qi)) !== _e, v = (u.flags & (bl | _l | kl | Qi)) !== _e;
      if (p || v) {
        var y = jr.transition;
        jr.transition = null;
        var g = Na();
        An(kr);
        var b = St;
        St |= Ui, MS.current = null, Hx(e, u), XC(), Zx(e, u, s), JT(e.containerInfo), e.current = u, cs(s), eb(u, e, s), fs(), hd(), St = b, An(g), jr.transition = y;
      } else
        e.current = u, XC();
      var w = ec;
      if (ec ? (ec = !1, Ho = e, Vp = s) : (Pf = 0, Um = null), f = e.pendingLanes, f === $ && (Hf = null), w || sR(e.current, !1), yd(u.stateNode, i), qr && e.memoizedUpdaters.clear(), Sb(), Ha(e, Yn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], oe = j.stack, Le = j.digest;
          M(j.value, {
            componentStack: oe,
            digest: Le
          });
        }
      if (Nm) {
        Nm = !1;
        var Te = AS;
        throw AS = null, Te;
      }
      return Xr(Vp, Ae) && e.tag !== Do && $u(), f = e.pendingLanes, Xr(f, Ae) ? (Yw(), e === HS ? Bp++ : (Bp = 0, HS = e)) : Bp = 0, Oo(), Cd(), null;
    }
    function $u() {
      if (Ho !== null) {
        var e = Gv(Vp), t = bs(La, e), a = jr.transition, i = Na();
        try {
          return jr.transition = null, An(t), Bb();
        } finally {
          An(i), jr.transition = a;
        }
      }
      return !1;
    }
    function Vb(e) {
      FS.push(e), ec || (ec = !0, GS(Wi, function() {
        return $u(), null;
      }));
    }
    function Bb() {
      if (Ho === null)
        return !1;
      var e = jS;
      jS = null;
      var t = Ho, a = Vp;
      if (Ho = null, Vp = $, (St & (Hr | Ui)) !== dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, zm = !1, yu(a);
      var i = St;
      St |= Ui, ub(t.current), rb(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $x(t, f);
        }
      }
      wd(), sR(t.current, !0), St = i, Oo(), zm ? t === Um ? Pf++ : (Pf = 0, Um = t) : Pf = 0, PS = !1, zm = !1, gd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lR(e) {
      return Hf !== null && Hf.has(e);
    }
    function $b(e) {
      Hf === null ? Hf = /* @__PURE__ */ new Set([e]) : Hf.add(e);
    }
    function Ib(e) {
      Nm || (Nm = !0, AS = e);
    }
    var Yb = Ib;
    function uR(e, t, a) {
      var i = Ks(a, t), u = a0(e, i, Ae), s = Mo(e, u, Ae), f = ga();
      s !== null && (yo(s, Ae, f), Ha(s, f));
    }
    function sn(e, t, a) {
      if (Ax(a), Qp(!1), e.tag === q) {
        uR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === q) {
          uR(i, e, a);
          return;
        } else if (i.tag === te) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lR(s)) {
            var f = Ks(a, e), p = fS(i, f, Ae), v = Mo(i, p, Ae), y = ga();
            v !== null && (yo(v, Ae, y), Ha(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Qb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ga();
      Kc(e, a), t_(e), ya === e && bu(pr, a) && (vr === Ap || vr === Om && xu(pr) && Yn() - US < W0 ? tc(e, $) : Mm = Xe(Mm, a)), Ha(e, u);
    }
    function oR(e, t) {
      t === _t && (t = bb(e));
      var a = ga(), i = Aa(e, t);
      i !== null && (yo(i, t, a), Ha(i, a));
    }
    function Wb(e) {
      var t = e.memoizedState, a = _t;
      t !== null && (a = t.retryLane), oR(e, a);
    }
    function Gb(e, t) {
      var a = _t, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case an:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oR(e, a);
    }
    function qb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Rb(e / 1960) * 1960;
    }
    function Xb() {
      if (Bp > wb)
        throw Bp = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Pf > xb && (Pf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Kb() {
      nl.flushLegacyContextWarning(), nl.flushPendingUnsafeLifecycleWarnings();
    }
    function sR(e, t) {
      It(e), Pm(e, xl, mb), t && Pm(e, Ci, yb), Pm(e, xl, vb), t && Pm(e, Ci, hb), on();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function cR(e) {
      {
        if ((St & Hr) !== dr || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== Pe && t !== q && t !== te && t !== Z && t !== Qe && t !== ut && t !== Fe)
          return;
        var a = Be(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = rr;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : on();
        }
      }
    }
    var YS;
    {
      var Jb = null;
      YS = function(e, t, a) {
        var i = gR(Jb, t);
        try {
          return T0(e, t, a);
        } catch (s) {
          if (cw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), xC(), D0(e, t), gR(t, i), t.mode & Ot && Wg(t), wl(null, T0, null, e, t, a), Ii()) {
            var u = is();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fR = !1, QS;
    QS = /* @__PURE__ */ new Set();
    function Zb(e) {
      if (vi && !Bw())
        switch (e.tag) {
          case Z:
          case Qe:
          case Fe: {
            var t = kn && Be(kn) || "Unknown", a = t;
            if (!QS.has(a)) {
              QS.add(a);
              var i = Be(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case te: {
            fR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fR = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (qr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ws(e, i, t);
        });
      }
    }
    var WS = {};
    function GS(e, t) {
      {
        var a = cl.current;
        return a !== null ? (a.push(t), WS) : pd(e, t);
      }
    }
    function dR(e) {
      if (e !== WS)
        return Mv(e);
    }
    function pR() {
      return cl.current !== null;
    }
    function e_(e) {
      {
        if (e.mode & lt) {
          if (!I0())
            return;
        } else if (!Cb() || St !== dr || e.tag !== Z && e.tag !== Qe && e.tag !== Fe)
          return;
        if (cl.current === null) {
          var t = rr;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Be(e));
          } finally {
            t ? It(e) : on();
          }
        }
      }
    }
    function t_(e) {
      e.tag !== Do && I0() && cl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      X0 = e;
    }
    var Ai = null, Vf = null, n_ = function(e) {
      Ai = e;
    };
    function Bf(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function qS(e) {
      return Bf(e);
    }
    function XS(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Bf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: B,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function vR(e, t) {
      {
        if (Ai === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case te: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Z: {
            (typeof i == "function" || s === $e) && (u = !0);
            break;
          }
          case Qe: {
            (s === B || s === $e) && (u = !0);
            break;
          }
          case ut:
          case Fe: {
            (s === Ge || s === $e) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ai(a);
          if (f !== void 0 && f === Ai(i))
            return !0;
        }
        return !1;
      }
    }
    function hR(e) {
      {
        if (Ai === null || typeof WeakSet != "function")
          return;
        Vf === null && (Vf = /* @__PURE__ */ new WeakSet()), Vf.add(e);
      }
    }
    var r_ = function(e, t) {
      {
        if (Ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Bu(function() {
          KS(e.current, i, a);
        });
      }
    }, a_ = function(e, t) {
      {
        if (e.context !== ii)
          return;
        $u(), Bu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function KS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Z:
          case Fe:
          case te:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (Ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Ai(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === te ? g = !0 : y = !0));
        }
        if (Vf !== null && (Vf.has(e) || i !== null && Vf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Aa(e, Ae);
          w !== null && hr(w, e, Ae, Xt);
        }
        u !== null && !g && KS(u, t, a), s !== null && KS(s, t, a);
      }
    }
    var i_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Z:
          case Fe:
          case te:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? l_(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function l_(e, t) {
      {
        var a = u_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case se:
              t.add(i.stateNode);
              return;
            case Ce:
              t.add(i.stateNode.containerInfo);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function u_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === se)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var mR = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function o_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new o_(e, t, a, i);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function s_(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function c_(e) {
      if (typeof e == "function")
        return eE(e) ? te : Z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return Qe;
        if (t === Ge)
          return ut;
      }
      return Pe;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Nn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Pe:
        case Z:
        case Fe:
          a.type = Bf(e.type);
          break;
        case te:
          a.type = qS(e.type);
          break;
        case Qe:
          a.type = XS(e.type);
          break;
      }
      return a;
    }
    function f_(e, t) {
      e.flags &= Nn | Rn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function d_(e, t, a) {
      var i;
      return e === jh ? (i = lt, t === !0 && (i |= Wt, i |= Lt)) : i = ke, qr && (i |= Ot), li(q, null, null, i);
    }
    function tE(e, t, a, i, u, s) {
      var f = Pe, p = e;
      if (typeof e == "function")
        eE(e) ? (f = te, p = qS(p)) : p = Bf(p);
      else if (typeof e == "string")
        f = se;
      else
        e: switch (e) {
          case ci:
            return Bo(a.children, u, s, t);
          case Ia:
            f = ft, u |= Wt, (u & lt) !== ke && (u |= Lt);
            break;
          case fi:
            return p_(a, u, s, t);
          case le:
            return v_(a, u, s, t);
          case he:
            return h_(a, u, s, t);
          case Cn:
            return yR(a, u, s, t);
          case en:
          // eslint-disable-next-line no-fallthrough
          case ot:
          // eslint-disable-next-line no-fallthrough
          case un:
          // eslint-disable-next-line no-fallthrough
          case nr:
          // eslint-disable-next-line no-fallthrough
          case it:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case di:
                  f = ct;
                  break e;
                case R:
                  f = cn;
                  break e;
                case B:
                  f = Qe, p = XS(p);
                  break e;
                case Ge:
                  f = ut;
                  break e;
                case $e:
                  f = rn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Be(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function nE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = tE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = li(mt, e, i, t);
      return u.lanes = a, u;
    }
    function p_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(dt, e, i, t | Ot);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function v_(e, t, a, i) {
      var u = li(be, e, i, t);
      return u.elementType = le, u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      var u = li(an, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function yR(e, t, a, i) {
      var u = li(De, e, i, t);
      u.elementType = Cn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function rE(e, t, a) {
      var i = li(Ye, e, null, t);
      return i.lanes = a, i;
    }
    function m_() {
      var e = li(se, null, null, ke);
      return e.elementType = "DELETED", e;
    }
    function y_(e) {
      var t = li(Kt, null, null, ke);
      return t.stateNode = e, t;
    }
    function aE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gR(e, t) {
      return e === null && (e = li(Pe, null, null, ke)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function g_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = _t, this.eventTimes = Ts($), this.expirationTimes = Ts(Xt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Ts($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Su; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case jh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function SR(e, t, a, i, u, s, f, p, v, y) {
      var g = new g_(e, t, a, p, v), b = d_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return yg(b), g;
    }
    var iE = "18.3.1";
    function S_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Vr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: tr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var lE, uE;
    lE = !1, uE = {};
    function ER(e) {
      if (!e)
        return ii;
      var t = co(e), a = tw(t);
      if (t.tag === te) {
        var i = t.type;
        if (Bl(i))
          return WE(t, i, a);
      }
      return a;
    }
    function E_(e, t) {
      {
        var a = co(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Wr(a);
        if (u === null)
          return null;
        if (u.mode & Wt) {
          var s = Be(a) || "Component";
          if (!uE[s]) {
            uE[s] = !0;
            var f = rr;
            try {
              It(u), a.mode & Wt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : on();
            }
          }
        }
        return u.stateNode;
      }
    }
    function CR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return SR(e, t, v, y, a, i, u, s, f);
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = SR(a, i, g, e, u, s, f, p, v);
      b.context = ER(null);
      var w = b.current, M = ga(), U = Po(w), j = ju(M, U);
      return j.callback = t ?? null, Mo(w, j, U), _b(b, U, M), b;
    }
    function Wp(e, t, a, i) {
      md(t, e);
      var u = t.current, s = ga(), f = Po(u);
      mn(f);
      var p = ER(a);
      t.context === null ? t.context = p : t.pendingContext = p, vi && rr !== null && !lE && (lE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Be(rr) || "Unknown"));
      var v = ju(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Mo(u, v, f);
      return y !== null && (hr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case se:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function C_(e) {
      switch (e.tag) {
        case q: {
          var t = e.stateNode;
          if (Zc(t)) {
            var a = jv(t);
            Lb(t, a);
          }
          break;
        }
        case be: {
          Bu(function() {
            var u = Aa(e, Ae);
            if (u !== null) {
              var s = ga();
              hr(u, e, Ae, s);
            }
          });
          var i = Ae;
          oE(e, i);
          break;
        }
      }
    }
    function TR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function oE(e, t) {
      TR(e, t);
      var a = e.alternate;
      a && TR(a, t);
    }
    function R_(e) {
      if (e.tag === be) {
        var t = ys, a = Aa(e, t);
        if (a !== null) {
          var i = ga();
          hr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function T_(e) {
      if (e.tag === be) {
        var t = Po(e), a = Aa(e, t);
        if (a !== null) {
          var i = ga();
          hr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function wR(e) {
      var t = fn(e);
      return t === null ? null : t.stateNode;
    }
    var xR = function(e) {
      return null;
    };
    function w_(e) {
      return xR(e);
    }
    var bR = function(e) {
      return !1;
    };
    function x_(e) {
      return bR(e);
    }
    var _R = null, kR = null, DR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null;
    {
      var AR = function(e, t, a) {
        var i = t[a], u = nt(e) ? e.slice() : Je({}, e);
        return a + 1 === t.length ? (nt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return AR(e, t, 0);
      }, jR = function(e, t, a, i) {
        var u = t[i], s = nt(e) ? e.slice() : Je({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], nt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = jR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, HR = function(e, t, a) {
        if (t.length !== a.length) {
          Rt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Rt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return jR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = nt(e) ? e.slice() : Je({}, e);
        return s[u] = PR(e[u], t, a + 1, i), s;
      }, VR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, sE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _R = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = Aa(e, Ae);
          f !== null && hr(f, e, Ae, Xt);
        }
      }, kR = function(e, t, a) {
        var i = sE(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Je({}, e.memoizedProps);
          var s = Aa(e, Ae);
          s !== null && hr(s, e, Ae, Xt);
        }
      }, DR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = HR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = Aa(e, Ae);
          f !== null && hr(f, e, Ae, Xt);
        }
      }, OR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Aa(e, Ae);
        i !== null && hr(i, e, Ae, Xt);
      }, LR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Aa(e, Ae);
        a !== null && hr(a, e, Ae, Xt);
      }, MR = function(e, t, a) {
        e.pendingProps = HR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Aa(e, Ae);
        i !== null && hr(i, e, Ae, Xt);
      }, NR = function(e) {
        var t = Aa(e, Ae);
        t !== null && hr(t, e, Ae, Xt);
      }, zR = function(e) {
        xR = e;
      }, UR = function(e) {
        bR = e;
      };
    }
    function b_(e) {
      var t = Wr(e);
      return t === null ? null : t.stateNode;
    }
    function __(e) {
      return null;
    }
    function k_() {
      return rr;
    }
    function D_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return vo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _R,
        overrideHookStateDeletePath: kR,
        overrideHookStateRenamePath: DR,
        overrideProps: OR,
        overridePropsDeletePath: LR,
        overridePropsRenamePath: MR,
        setErrorHandler: zR,
        setSuspenseHandler: UR,
        scheduleUpdate: NR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: b_,
        findFiberByHostInstance: t || __,
        // React Refresh
        findHostInstancesForRefresh: i_,
        scheduleRefresh: r_,
        scheduleRoot: a_,
        setRefreshHandler: n_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: k_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var BR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cE(e) {
      this._internalRoot = e;
    }
    $m.prototype.render = cE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = wR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, $m.prototype.unmount = cE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Bu(function() {
          Wp(null, e, null, null);
        }), BE(t);
      }
    };
    function O_(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = BR;
      t != null && (t.hydrate ? Rt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === wr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = CR(e, jh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return Zd(p), new cE(f);
    }
    function $m(e) {
      this._internalRoot = e;
    }
    function L_(e) {
      e && Zv(e);
    }
    $m.prototype.unstable_scheduleHydration = L_;
    function M_(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = BR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = RR(t, null, e, jh, i, s, f, p, v);
      if (Lh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Aw(y, b);
        }
      return new $m(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === $i || e.nodeType === td));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === $i || e.nodeType === td || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var N_ = A.ReactCurrentOwner, IR;
    IR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = wR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fE(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function YR() {
    }
    function z_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = RR(
          t,
          i,
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return Zd(p), Bu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = CR(
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Ln ? e.parentNode : e;
        return Zd(b), Bu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function U_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ym(e, t, a, i, u) {
      IR(a), U_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = z_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Bm(f);
    }
    var QR = !1;
    function A_(e) {
      {
        QR || (QR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = N_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Tt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : E_(e, "findDOMNode");
    }
    function F_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ym(null, e, t, !0, a);
    }
    function j_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ym(null, e, t, !1, a);
    }
    function H_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ym(e, t, a, !1, i);
    }
    var WR = !1;
    function P_(e) {
      if (WR || (WR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fE(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Bu(function() {
          Ym(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = fE(e), s = !!(u && _o(u)), f = e.nodeType === $r && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Er(C_), go(R_), qv(T_), ks(Na), Ad(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), mc(BT), uy(BS, Mb, Bu);
    function V_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return S_(e, t, null, a);
    }
    function B_(e, t, a, i) {
      return H_(e, t, a, i);
    }
    var dE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, Sf, Mh, lo, yc, BS]
    };
    function $_(e, t) {
      return dE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), O_(e, t);
    }
    function I_(e, t, a) {
      return dE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t, a);
    }
    function Y_(e) {
      return eR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Bu(e);
    }
    var Q_ = D_({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: iE,
      rendererPackageName: "react-dom"
    });
    if (!Q_ && Dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var GR = window.location.protocol;
      /^(https?|file):$/.test(GR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (GR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, Va.createPortal = V_, Va.createRoot = $_, Va.findDOMNode = A_, Va.flushSync = Y_, Va.hydrate = F_, Va.hydrateRoot = I_, Va.render = j_, Va.unmountComponentAtNode = P_, Va.unstable_batchedUpdates = BS, Va.unstable_renderSubtreeIntoContainer = B_, Va.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Va;
}
var lT;
function ak() {
  if (lT) return Gm.exports;
  lT = 1;
  function ne() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ne);
      } catch (K) {
        console.error(K);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (ne(), Gm.exports = nk()) : Gm.exports = rk(), Gm.exports;
}
var uT;
function ik() {
  if (uT) return If;
  uT = 1;
  var ne = ak();
  if (process.env.NODE_ENV === "production")
    If.createRoot = ne.createRoot, If.hydrateRoot = ne.hydrateRoot;
  else {
    var K = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    If.createRoot = function(A, Ct) {
      K.usingClientEntryPoint = !0;
      try {
        return ne.createRoot(A, Ct);
      } finally {
        K.usingClientEntryPoint = !1;
      }
    }, If.hydrateRoot = function(A, Ct, vt) {
      K.usingClientEntryPoint = !0;
      try {
        return ne.hydrateRoot(A, Ct, vt);
      } finally {
        K.usingClientEntryPoint = !1;
      }
    };
  }
  return If;
}
var lk = ik();
const uk = () => {
  const [ne, K] = Xm.useState(""), [A, Ct] = Xm.useState(!0);
  return Xm.useEffect(() => {
    const vt = () => {
      const Z = document.getElementsByTagName("script");
      for (let te = 0; te < Z.length; te++) {
        const Pe = Z[te].getAttribute("src") || "";
        if (Pe.includes("ui.js"))
          return Pe.substring(0, Pe.lastIndexOf("/") + 1);
      }
      return "";
    }, Rt = async () => {
      try {
        const Z = vt();
        K(Z);
        const te = document.createElement("div");
        te.id = "main", te.style.height = "100%";
        const Pe = document.getElementById("soa-container");
        if (Pe) {
          Pe.appendChild(te), await S(`${Z}SOA/angular.min.js`), await S(`${Z}SOA/structure.js`), await S(`${Z}SOA/api.js`), Ft();
          const q = document.createElement("div");
          q.id = "main", q.setAttribute("ng-controller", "SoaController2"), q.innerHTML = `
            <div class="panel navigationArea">
              <div class="panelTitle">Filters</div>
              <div class="panelContent" id="filterPanel">
                <div class="filterLabel"
                  ng-click="setSearchTerm('')"
                  ng-class="{bold: searchTerm}">
                  Search
                </div>
                <input type="text" class="searchBox" ng-model="searchTerm">
                <div class="filterLabel"
                  ng-click="setLib('')"
                  ng-class="{bold: selectedLib}">
                  Libraries
                </div>
                <ul id="libList">
                  <li class="filterNameLabel"
                    ng-repeat="lib in libs | filter:libFilter | filter:searchTerm"
                    ng-click="setLib(lib.name)">
                    {{lib.name}}
                  </li>
                </ul>
                <div class="filterLabel"
                  ng-click="setService('')"
                  ng-class="{bold: selectedService}">
                  Services
                </div>
                <ul id="svcList">
                  <li class="filterNameLabel"
                    ng-repeat="svc in services | filter:serviceFilter | filter:searchTerm"
                    ng-click="setService(svc.name)">
                    {{svc.name}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="sublocationContent">
              <div class="title"
                ng-click="updateHash('operation', ''); resetOperation()"
                ng-class="{bold: selectedOperation}">
                Operations
              </div>
              <ul id="opList" class="cellListWidget">
                <li class="cellListItem"
                  id="{{op.url}}"
                  ng-class="{cellListItemSelected: selectedOperation===op }"
                  ng-repeat="op in operations | filter:opFilter | filter:searchTerm"
                  ng-click="updateDisplay(op)">
                  <div class="cellListCellTitle">
                    {{op.name}}
                  </div>
                  <label class="cellListCellItemType small">
                    {{op.url}}
                  </label>
                </li>
              </ul>
            </div>
            <div class="operationDisplay" id="operationDisplay">
              <div class="title" id="opName">Name: </div>
              <div class="property" id="opDesc">Description: </div>
              <div class="property" id="opLib">Library: </div>
              <div class="property" id="opService">Service: </div>
              <div class="property" id="opYear">Year: </div>
              <div class="property" id="opUrl">Url: </div>
              <div class="property" id="opInclude">Soa Dependency Inclusion: </div>
              <div class="property" id="opRequest">Request: </div>
              <div class="property" id="opResponse">Response: </div>
            </div>
          `, te.appendChild(q), typeof window.resizeList == "function" && window.resizeList(), window.angular && window.angular.bootstrap(q, ["DisplaySoa"]), Ct(!1);
        }
      } catch (Z) {
        console.error("Error initializing SOA browser:", Z), Ct(!1);
      }
    }, S = (Z) => new Promise((te, Pe) => {
      const q = document.createElement("script");
      q.src = Z, q.onload = te, q.onerror = Pe, document.head.appendChild(q);
    }), Ft = () => {
      const Z = document.createElement("style");
      Z.textContent = `
        ul {
          padding: 0;
          margin: 0;
          border: 0;
          list-style: none;
          overflow: hidden;
          overflow-y: auto;
        }
        body {
          font-family: 'Segoe UI', 'Open Sans', Verdana, Arial, Helvetica, sans-serif;
        }
        .panel {
          background-color: #eee;
          color: #000;
          height: inherit;
          width: 320px;
          max-width: 320px;
        }
        .navigationArea {
          float:left;
        }
        .panelTitle {
          background-color: #d7d7cd;
          color: #000000;
          font-size: 19px;
          height: 27px;
          padding: 0 10px;
          line-height: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .panelContent {
          overflow: hidden;
          text-overflow: ellipsis;
          overflow-y: auto;
        }
        .filterLabel {
          color: #006487;
          display: inline-block;
          vertical-align: bottom;
          font-size: 16px;
          padding-top: 12px;
          padding-bottom: 4px;
          margin-left: 10px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 85%;
        }
        .filterNameLabel {
          color: #006487;
          display: block;
          font-size: 13px;
          margin-top: 4px;
          margin-bottom: 4px;
          margin-left: 20px;
          cursor: pointer;
        }
        .bold {
          font-weight: 700;
          cursor: pointer;
        }
        .searchBox {
          margin-left: 20px;
          width: -webkit-calc(100% - 40px);
          width: -moz-calc(100% - 40px);
          width: calc(100% - 40px);
        }
        .sublocationContent {
          padding-left: 10px;
          float: left;
          width: 320px;
          max-width: 320px;
        }
        .title {
          color: #006487;
          font-size: 21px;
          padding-bottom: 5px;
        }
        .cellListWidget {
          list-style: none;
          padding-left: 12px;
        }
        .cellListItem {
          width: -webkit-calc(100% - 10px);
          width: -moz-calc(100% - 10px);
          width: calc(100% - 10px);
          padding-bottom: 8px;
          padding-left: 5px;
          cursor: pointer;
        }
        .cellListItem:hover {
          background-color: #cccccc;
        }
        .cellListItemSelected {
          background-color: #cccccc;
        }
        .cellListCellTitle {
          overflow: hidden;
          text-overflow: ellipsis;
          color: #000;
          font-size: 19px;
        }
        .small {
          font-size: 11px;
        }
        .cellListCellItemType {
          color: #55a0b9;
          fill: #55a0b9;
          padding-bottom: 5px;
        }
        .operationDisplay {
          float: left;
          padding-left: 20px;
          overflow: hidden;
          overflow-y: auto;
          width: -webkit-calc(100% - 670px);
          width: -moz-calc(100% - 670px);
          width: calc(100% - 670px);
        }
        .property {
          color: #aaaa96;
          font-size: 12px;
          padding-bottom: 5px;
        }
        .keyInfoDiv{
          font-family: 'Segoe UI', 'Open Sans', Verdana, Arial, Helvetica, sans-serif;
          margin-left: 10px;
        }
        #opName {
          padding-bottom: 15px;
        }
      `, document.head.appendChild(Z);
    };
    return Rt(), () => {
      document.querySelectorAll('script[src*="SOA/"]').forEach((te) => te.remove());
    };
  }, []), /* @__PURE__ */ Zp.jsx("div", { style: { height: "100vh", width: "100%", overflow: "hidden" }, children: /* @__PURE__ */ Zp.jsx(
    "div",
    {
      id: "soa-container",
      style: { height: "100%", width: "100%" },
      children: A && /* @__PURE__ */ Zp.jsx("div", { style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: "16px",
        position: "absolute",
        width: "100%",
        backgroundColor: "white"
      }, children: "Loading Teamcenter SOA API Browser..." })
    }
  ) });
};
lk.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Zp.jsx(Xm.StrictMode, { children: /* @__PURE__ */ Zp.jsx(uk, {}) })
);

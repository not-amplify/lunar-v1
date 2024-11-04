(() => {
  var As = Object.create;
  var Pn = Object.defineProperty;
  var _s = Object.getOwnPropertyDescriptor;
  var ks = Object.getOwnPropertyNames;
  var Cs = Object.getPrototypeOf,
    Is = Object.prototype.hasOwnProperty;
  var Mn = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var Ns = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let u of ks(t))
        !Is.call(e, u) &&
          u !== r &&
          Pn(e, u, {
            get: () => t[u],
            enumerable: !(n = _s(t, u)) || n.enumerable,
          });
    return e;
  };
  var We = (e, t, r) => (
    (r = e != null ? As(Cs(e)) : {}),
    Ns(
      t || !e || !e.__esModule
        ? Pn(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  );
  var rt = Mn((uc, kr) => {
    "use strict";
    var Xe = typeof Reflect == "object" ? Reflect : null,
      vn =
        Xe && typeof Xe.apply == "function"
          ? Xe.apply
          : function (t, r, n) {
              return Function.prototype.apply.call(t, r, n);
            },
      yt;
    Xe && typeof Xe.ownKeys == "function"
      ? (yt = Xe.ownKeys)
      : Object.getOwnPropertySymbols
        ? (yt = function (t) {
            return Object.getOwnPropertyNames(t).concat(
              Object.getOwnPropertySymbols(t),
            );
          })
        : (yt = function (t) {
            return Object.getOwnPropertyNames(t);
          });
    function Ls(e) {
      console && console.warn && console.warn(e);
    }
    var Un =
      Number.isNaN ||
      function (t) {
        return t !== t;
      };
    function j() {
      j.init.call(this);
    }
    kr.exports = j;
    kr.exports.once = ys;
    j.EventEmitter = j;
    j.prototype._events = void 0;
    j.prototype._eventsCount = 0;
    j.prototype._maxListeners = void 0;
    var Bn = 10;
    function Dt(e) {
      if (typeof e != "function")
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e,
        );
    }
    Object.defineProperty(j, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return Bn;
      },
      set: function (e) {
        if (typeof e != "number" || e < 0 || Un(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              ".",
          );
        Bn = e;
      },
    });
    j.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    };
    j.prototype.setMaxListeners = function (t) {
      if (typeof t != "number" || t < 0 || Un(t))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            t +
            ".",
        );
      return (this._maxListeners = t), this;
    };
    function Hn(e) {
      return e._maxListeners === void 0
        ? j.defaultMaxListeners
        : e._maxListeners;
    }
    j.prototype.getMaxListeners = function () {
      return Hn(this);
    };
    j.prototype.emit = function (t) {
      for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
      var u = t === "error",
        a = this._events;
      if (a !== void 0) u = u && a.error === void 0;
      else if (!u) return !1;
      if (u) {
        var i;
        if ((r.length > 0 && (i = r[0]), i instanceof Error)) throw i;
        var f = new Error(
          "Unhandled error." + (i ? " (" + i.message + ")" : ""),
        );
        throw ((f.context = i), f);
      }
      var d = a[t];
      if (d === void 0) return !1;
      if (typeof d == "function") vn(d, this, r);
      else
        for (var h = d.length, c = Gn(d, h), n = 0; n < h; ++n)
          vn(c[n], this, r);
      return !0;
    };
    function Fn(e, t, r, n) {
      var u, a, i;
      if (
        (Dt(r),
        (a = e._events),
        a === void 0
          ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
          : (a.newListener !== void 0 &&
              (e.emit("newListener", t, r.listener ? r.listener : r),
              (a = e._events)),
            (i = a[t])),
        i === void 0)
      )
        (i = a[t] = r), ++e._eventsCount;
      else if (
        (typeof i == "function"
          ? (i = a[t] = n ? [r, i] : [i, r])
          : n
            ? i.unshift(r)
            : i.push(r),
        (u = Hn(e)),
        u > 0 && i.length > u && !i.warned)
      ) {
        i.warned = !0;
        var f = new Error(
          "Possible EventEmitter memory leak detected. " +
            i.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit",
        );
        (f.name = "MaxListenersExceededWarning"),
          (f.emitter = e),
          (f.type = t),
          (f.count = i.length),
          Ls(f);
      }
      return e;
    }
    j.prototype.addListener = function (t, r) {
      return Fn(this, t, r, !1);
    };
    j.prototype.on = j.prototype.addListener;
    j.prototype.prependListener = function (t, r) {
      return Fn(this, t, r, !0);
    };
    function xs() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          arguments.length === 0
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function qn(e, t, r) {
      var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
        u = xs.bind(n);
      return (u.listener = r), (n.wrapFn = u), u;
    }
    j.prototype.once = function (t, r) {
      return Dt(r), this.on(t, qn(this, t, r)), this;
    };
    j.prototype.prependOnceListener = function (t, r) {
      return Dt(r), this.prependListener(t, qn(this, t, r)), this;
    };
    j.prototype.removeListener = function (t, r) {
      var n, u, a, i, f;
      if ((Dt(r), (u = this._events), u === void 0)) return this;
      if (((n = u[t]), n === void 0)) return this;
      if (n === r || n.listener === r)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete u[t],
            u.removeListener &&
              this.emit("removeListener", t, n.listener || r));
      else if (typeof n != "function") {
        for (a = -1, i = n.length - 1; i >= 0; i--)
          if (n[i] === r || n[i].listener === r) {
            (f = n[i].listener), (a = i);
            break;
          }
        if (a < 0) return this;
        a === 0 ? n.shift() : Ss(n, a),
          n.length === 1 && (u[t] = n[0]),
          u.removeListener !== void 0 && this.emit("removeListener", t, f || r);
      }
      return this;
    };
    j.prototype.off = j.prototype.removeListener;
    j.prototype.removeAllListeners = function (t) {
      var r, n, u;
      if (((n = this._events), n === void 0)) return this;
      if (n.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : n[t] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete n[t]),
          this
        );
      if (arguments.length === 0) {
        var a = Object.keys(n),
          i;
        for (u = 0; u < a.length; ++u)
          (i = a[u]), i !== "removeListener" && this.removeAllListeners(i);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if (((r = n[t]), typeof r == "function")) this.removeListener(t, r);
      else if (r !== void 0)
        for (u = r.length - 1; u >= 0; u--) this.removeListener(t, r[u]);
      return this;
    };
    function Yn(e, t, r) {
      var n = e._events;
      if (n === void 0) return [];
      var u = n[t];
      return u === void 0
        ? []
        : typeof u == "function"
          ? r
            ? [u.listener || u]
            : [u]
          : r
            ? Os(u)
            : Gn(u, u.length);
    }
    j.prototype.listeners = function (t) {
      return Yn(this, t, !0);
    };
    j.prototype.rawListeners = function (t) {
      return Yn(this, t, !1);
    };
    j.listenerCount = function (e, t) {
      return typeof e.listenerCount == "function"
        ? e.listenerCount(t)
        : Vn.call(e, t);
    };
    j.prototype.listenerCount = Vn;
    function Vn(e) {
      var t = this._events;
      if (t !== void 0) {
        var r = t[e];
        if (typeof r == "function") return 1;
        if (r !== void 0) return r.length;
      }
      return 0;
    }
    j.prototype.eventNames = function () {
      return this._eventsCount > 0 ? yt(this._events) : [];
    };
    function Gn(e, t) {
      for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
      return r;
    }
    function Ss(e, t) {
      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
      e.pop();
    }
    function Os(e) {
      for (var t = new Array(e.length), r = 0; r < t.length; ++r)
        t[r] = e[r].listener || e[r];
      return t;
    }
    function ys(e, t) {
      return new Promise(function (r, n) {
        function u(i) {
          e.removeListener(t, a), n(i);
        }
        function a() {
          typeof e.removeListener == "function" && e.removeListener("error", u),
            r([].slice.call(arguments));
        }
        Wn(e, t, a, { once: !0 }), t !== "error" && Ds(e, u, { once: !0 });
      });
    }
    function Ds(e, t, r) {
      typeof e.on == "function" && Wn(e, "error", t, r);
    }
    function Wn(e, t, r, n) {
      if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
      else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function u(a) {
          n.once && e.removeEventListener(t, u), r(a);
        });
      else
        throw new TypeError(
          'The "emitter" argument must be of type EventEmitter. Received type ' +
            typeof e,
        );
    }
  });
  var En = Mn((f1, Nt) => {
    "use strict";
    var br = { decodeValues: !0, map: !1, silent: !1 };
    function hn(e) {
      return typeof e == "string" && !!e.trim();
    }
    function mn(e, t) {
      var r = e.split(";").filter(hn),
        n = r.shift(),
        u = v0(n),
        a = u.name,
        i = u.value;
      t = t ? Object.assign({}, br, t) : br;
      try {
        i = t.decodeValues ? decodeURIComponent(i) : i;
      } catch (d) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" +
            i +
            "'. Set options.decodeValues to false to disable this feature.",
          d,
        );
      }
      var f = { name: a, value: i };
      return (
        r.forEach(function (d) {
          var h = d.split("="),
            c = h.shift().trimLeft().toLowerCase(),
            o = h.join("=");
          c === "expires"
            ? (f.expires = new Date(o))
            : c === "max-age"
              ? (f.maxAge = parseInt(o, 10))
              : c === "secure"
                ? (f.secure = !0)
                : c === "httponly"
                  ? (f.httpOnly = !0)
                  : c === "samesite"
                    ? (f.sameSite = o)
                    : c === "partitioned"
                      ? (f.partitioned = !0)
                      : (f[c] = o);
        }),
        f
      );
    }
    function v0(e) {
      var t = "",
        r = "",
        n = e.split("=");
      return (
        n.length > 1 ? ((t = n.shift()), (r = n.join("="))) : (r = e),
        { name: t, value: r }
      );
    }
    function qa(e, t) {
      if (((t = t ? Object.assign({}, br, t) : br), !e)) return t.map ? {} : [];
      if (e.headers)
        if (typeof e.headers.getSetCookie == "function")
          e = e.headers.getSetCookie();
        else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
        else {
          var r =
            e.headers[
              Object.keys(e.headers).find(function (u) {
                return u.toLowerCase() === "set-cookie";
              })
            ];
          !r &&
            e.headers.cookie &&
            !t.silent &&
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.",
            ),
            (e = r);
        }
      if ((Array.isArray(e) || (e = [e]), t.map)) {
        var n = {};
        return e.filter(hn).reduce(function (u, a) {
          var i = mn(a, t);
          return (u[i.name] = i), u;
        }, n);
      } else
        return e.filter(hn).map(function (u) {
          return mn(u, t);
        });
    }
    function B0(e) {
      if (Array.isArray(e)) return e;
      if (typeof e != "string") return [];
      var t = [],
        r = 0,
        n,
        u,
        a,
        i,
        f;
      function d() {
        for (; r < e.length && /\s/.test(e.charAt(r)); ) r += 1;
        return r < e.length;
      }
      function h() {
        return (u = e.charAt(r)), u !== "=" && u !== ";" && u !== ",";
      }
      for (; r < e.length; ) {
        for (n = r, f = !1; d(); )
          if (((u = e.charAt(r)), u === ",")) {
            for (a = r, r += 1, d(), i = r; r < e.length && h(); ) r += 1;
            r < e.length && e.charAt(r) === "="
              ? ((f = !0), (r = i), t.push(e.substring(n, a)), (n = r))
              : (r = a + 1);
          } else r += 1;
        (!f || r >= e.length) && t.push(e.substring(n, e.length));
      }
      return t;
    }
    Nt.exports = qa;
    Nt.exports.parse = qa;
    Nt.exports.parseString = mn;
    Nt.exports.splitCookiesString = B0;
  });
  var Fr = We(rt(), 1);
  var Rs = new Set([
      65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
      327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
      655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
      917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
    ]),
    z = "\uFFFD",
    E;
  (function (e) {
    (e[(e.EOF = -1)] = "EOF"),
      (e[(e.NULL = 0)] = "NULL"),
      (e[(e.TABULATION = 9)] = "TABULATION"),
      (e[(e.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
      (e[(e.LINE_FEED = 10)] = "LINE_FEED"),
      (e[(e.FORM_FEED = 12)] = "FORM_FEED"),
      (e[(e.SPACE = 32)] = "SPACE"),
      (e[(e.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
      (e[(e.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
      (e[(e.AMPERSAND = 38)] = "AMPERSAND"),
      (e[(e.APOSTROPHE = 39)] = "APOSTROPHE"),
      (e[(e.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
      (e[(e.SOLIDUS = 47)] = "SOLIDUS"),
      (e[(e.DIGIT_0 = 48)] = "DIGIT_0"),
      (e[(e.DIGIT_9 = 57)] = "DIGIT_9"),
      (e[(e.SEMICOLON = 59)] = "SEMICOLON"),
      (e[(e.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
      (e[(e.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
      (e[(e.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
      (e[(e.QUESTION_MARK = 63)] = "QUESTION_MARK"),
      (e[(e.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
      (e[(e.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
      (e[(e.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
      (e[(e.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
      (e[(e.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
      (e[(e.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z");
  })(E || (E = {}));
  var ie = {
    DASH_DASH: "--",
    CDATA_START: "[CDATA[",
    DOCTYPE: "doctype",
    SCRIPT: "script",
    PUBLIC: "public",
    SYSTEM: "system",
  };
  function Rt(e) {
    return e >= 55296 && e <= 57343;
  }
  function Xn(e) {
    return e >= 56320 && e <= 57343;
  }
  function Qn(e, t) {
    return (e - 55296) * 1024 + 9216 + t;
  }
  function wt(e) {
    return (
      (e !== 32 &&
        e !== 10 &&
        e !== 13 &&
        e !== 9 &&
        e !== 12 &&
        e >= 1 &&
        e <= 31) ||
      (e >= 127 && e <= 159)
    );
  }
  function Pt(e) {
    return (e >= 64976 && e <= 65007) || Rs.has(e);
  }
  var x;
  (function (e) {
    (e.controlCharacterInInputStream = "control-character-in-input-stream"),
      (e.noncharacterInInputStream = "noncharacter-in-input-stream"),
      (e.surrogateInInputStream = "surrogate-in-input-stream"),
      (e.nonVoidHtmlElementStartTagWithTrailingSolidus =
        "non-void-html-element-start-tag-with-trailing-solidus"),
      (e.endTagWithAttributes = "end-tag-with-attributes"),
      (e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
      (e.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
      (e.unexpectedNullCharacter = "unexpected-null-character"),
      (e.unexpectedQuestionMarkInsteadOfTagName =
        "unexpected-question-mark-instead-of-tag-name"),
      (e.invalidFirstCharacterOfTagName =
        "invalid-first-character-of-tag-name"),
      (e.unexpectedEqualsSignBeforeAttributeName =
        "unexpected-equals-sign-before-attribute-name"),
      (e.missingEndTagName = "missing-end-tag-name"),
      (e.unexpectedCharacterInAttributeName =
        "unexpected-character-in-attribute-name"),
      (e.unknownNamedCharacterReference = "unknown-named-character-reference"),
      (e.missingSemicolonAfterCharacterReference =
        "missing-semicolon-after-character-reference"),
      (e.unexpectedCharacterAfterDoctypeSystemIdentifier =
        "unexpected-character-after-doctype-system-identifier"),
      (e.unexpectedCharacterInUnquotedAttributeValue =
        "unexpected-character-in-unquoted-attribute-value"),
      (e.eofBeforeTagName = "eof-before-tag-name"),
      (e.eofInTag = "eof-in-tag"),
      (e.missingAttributeValue = "missing-attribute-value"),
      (e.missingWhitespaceBetweenAttributes =
        "missing-whitespace-between-attributes"),
      (e.missingWhitespaceAfterDoctypePublicKeyword =
        "missing-whitespace-after-doctype-public-keyword"),
      (e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
        "missing-whitespace-between-doctype-public-and-system-identifiers"),
      (e.missingWhitespaceAfterDoctypeSystemKeyword =
        "missing-whitespace-after-doctype-system-keyword"),
      (e.missingQuoteBeforeDoctypePublicIdentifier =
        "missing-quote-before-doctype-public-identifier"),
      (e.missingQuoteBeforeDoctypeSystemIdentifier =
        "missing-quote-before-doctype-system-identifier"),
      (e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier"),
      (e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier"),
      (e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
      (e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
      (e.cdataInHtmlContent = "cdata-in-html-content"),
      (e.incorrectlyOpenedComment = "incorrectly-opened-comment"),
      (e.eofInScriptHtmlCommentLikeText =
        "eof-in-script-html-comment-like-text"),
      (e.eofInDoctype = "eof-in-doctype"),
      (e.nestedComment = "nested-comment"),
      (e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
      (e.eofInComment = "eof-in-comment"),
      (e.incorrectlyClosedComment = "incorrectly-closed-comment"),
      (e.eofInCdata = "eof-in-cdata"),
      (e.absenceOfDigitsInNumericCharacterReference =
        "absence-of-digits-in-numeric-character-reference"),
      (e.nullCharacterReference = "null-character-reference"),
      (e.surrogateCharacterReference = "surrogate-character-reference"),
      (e.characterReferenceOutsideUnicodeRange =
        "character-reference-outside-unicode-range"),
      (e.controlCharacterReference = "control-character-reference"),
      (e.noncharacterCharacterReference = "noncharacter-character-reference"),
      (e.missingWhitespaceBeforeDoctypeName =
        "missing-whitespace-before-doctype-name"),
      (e.missingDoctypeName = "missing-doctype-name"),
      (e.invalidCharacterSequenceAfterDoctypeName =
        "invalid-character-sequence-after-doctype-name"),
      (e.duplicateAttribute = "duplicate-attribute"),
      (e.nonConformingDoctype = "non-conforming-doctype"),
      (e.missingDoctype = "missing-doctype"),
      (e.misplacedDoctype = "misplaced-doctype"),
      (e.endTagWithoutMatchingOpenElement =
        "end-tag-without-matching-open-element"),
      (e.closingOfElementWithOpenChildElements =
        "closing-of-element-with-open-child-elements"),
      (e.disallowedContentInNoscriptInHead =
        "disallowed-content-in-noscript-in-head"),
      (e.openElementsLeftAfterEof = "open-elements-left-after-eof"),
      (e.abandonedHeadElementChild = "abandoned-head-element-child"),
      (e.misplacedStartTagForHeadElement =
        "misplaced-start-tag-for-head-element"),
      (e.nestedNoscriptInHead = "nested-noscript-in-head"),
      (e.eofInElementThatCanContainOnlyText =
        "eof-in-element-that-can-contain-only-text");
  })(x || (x = {}));
  var Ps = 65536,
    Mt = class {
      constructor(t) {
        (this.handler = t),
          (this.html = ""),
          (this.pos = -1),
          (this.lastGapPos = -2),
          (this.gapStack = []),
          (this.skipNextNewLine = !1),
          (this.lastChunkWritten = !1),
          (this.endOfChunkHit = !1),
          (this.bufferWaterline = Ps),
          (this.isEol = !1),
          (this.lineStartPos = 0),
          (this.droppedBufferSize = 0),
          (this.line = 1),
          (this.lastErrOffset = -1);
      }
      get col() {
        return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
      }
      get offset() {
        return this.droppedBufferSize + this.pos;
      }
      getError(t, r) {
        let { line: n, col: u, offset: a } = this,
          i = u + r,
          f = a + r;
        return {
          code: t,
          startLine: n,
          endLine: n,
          startCol: i,
          endCol: i,
          startOffset: f,
          endOffset: f,
        };
      }
      _err(t) {
        this.handler.onParseError &&
          this.lastErrOffset !== this.offset &&
          ((this.lastErrOffset = this.offset),
          this.handler.onParseError(this.getError(t, 0)));
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
      }
      _processSurrogate(t) {
        if (this.pos !== this.html.length - 1) {
          let r = this.html.charCodeAt(this.pos + 1);
          if (Xn(r)) return this.pos++, this._addGap(), Qn(t, r);
        } else if (!this.lastChunkWritten)
          return (this.endOfChunkHit = !0), E.EOF;
        return this._err(x.surrogateInInputStream), t;
      }
      willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
      }
      dropParsedChunk() {
        this.willDropParsedChunk() &&
          ((this.html = this.html.substring(this.pos)),
          (this.lineStartPos -= this.pos),
          (this.droppedBufferSize += this.pos),
          (this.pos = 0),
          (this.lastGapPos = -2),
          (this.gapStack.length = 0));
      }
      write(t, r) {
        this.html.length > 0 ? (this.html += t) : (this.html = t),
          (this.endOfChunkHit = !1),
          (this.lastChunkWritten = r);
      }
      insertHtmlAtCurrentPos(t) {
        (this.html =
          this.html.substring(0, this.pos + 1) +
          t +
          this.html.substring(this.pos + 1)),
          (this.endOfChunkHit = !1);
      }
      startsWith(t, r) {
        if (this.pos + t.length > this.html.length)
          return (this.endOfChunkHit = !this.lastChunkWritten), !1;
        if (r) return this.html.startsWith(t, this.pos);
        for (let n = 0; n < t.length; n++)
          if ((this.html.charCodeAt(this.pos + n) | 32) !== t.charCodeAt(n))
            return !1;
        return !0;
      }
      peek(t) {
        let r = this.pos + t;
        if (r >= this.html.length)
          return (this.endOfChunkHit = !this.lastChunkWritten), E.EOF;
        let n = this.html.charCodeAt(r);
        return n === E.CARRIAGE_RETURN ? E.LINE_FEED : n;
      }
      advance() {
        if (
          (this.pos++,
          this.isEol &&
            ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
          this.pos >= this.html.length)
        )
          return (this.endOfChunkHit = !this.lastChunkWritten), E.EOF;
        let t = this.html.charCodeAt(this.pos);
        return t === E.CARRIAGE_RETURN
          ? ((this.isEol = !0), (this.skipNextNewLine = !0), E.LINE_FEED)
          : t === E.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine)
            ? (this.line--,
              (this.skipNextNewLine = !1),
              this._addGap(),
              this.advance())
            : ((this.skipNextNewLine = !1),
              Rt(t) && (t = this._processSurrogate(t)),
              this.handler.onParseError === null ||
                (t > 31 && t < 127) ||
                t === E.LINE_FEED ||
                t === E.CARRIAGE_RETURN ||
                (t > 159 && t < 64976) ||
                this._checkForProblematicCharacters(t),
              t);
      }
      _checkForProblematicCharacters(t) {
        wt(t)
          ? this._err(x.controlCharacterInInputStream)
          : Pt(t) && this._err(x.noncharacterInInputStream);
      }
      retreat(t) {
        for (this.pos -= t; this.pos < this.lastGapPos; )
          (this.lastGapPos = this.gapStack.pop()), this.pos--;
        this.isEol = !1;
      }
    };
  var V;
  (function (e) {
    (e[(e.CHARACTER = 0)] = "CHARACTER"),
      (e[(e.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
      (e[(e.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
      (e[(e.START_TAG = 3)] = "START_TAG"),
      (e[(e.END_TAG = 4)] = "END_TAG"),
      (e[(e.COMMENT = 5)] = "COMMENT"),
      (e[(e.DOCTYPE = 6)] = "DOCTYPE"),
      (e[(e.EOF = 7)] = "EOF"),
      (e[(e.HIBERNATION = 8)] = "HIBERNATION");
  })(V || (V = {}));
  function vt(e, t) {
    for (let r = e.attrs.length - 1; r >= 0; r--)
      if (e.attrs[r].name === t) return e.attrs[r].value;
    return null;
  }
  var Bt = new Uint16Array(
    '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'
      .split("")
      .map((e) => e.charCodeAt(0)),
  );
  var jn = new Uint16Array(
    "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022"
      .split("")
      .map((e) => e.charCodeAt(0)),
  );
  var Cr,
    vs = new Map([
      [0, 65533],
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376],
    ]),
    Ir =
      (Cr = String.fromCodePoint) !== null && Cr !== void 0
        ? Cr
        : function (e) {
            let t = "";
            return (
              e > 65535 &&
                ((e -= 65536),
                (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                (e = 56320 | (e & 1023))),
              (t += String.fromCharCode(e)),
              t
            );
          };
  function Nr(e) {
    var t;
    return (e >= 55296 && e <= 57343) || e > 1114111
      ? 65533
      : (t = vs.get(e)) !== null && t !== void 0
        ? t
        : e;
  }
  var re;
  (function (e) {
    (e[(e.NUM = 35)] = "NUM"),
      (e[(e.SEMI = 59)] = "SEMI"),
      (e[(e.EQUALS = 61)] = "EQUALS"),
      (e[(e.ZERO = 48)] = "ZERO"),
      (e[(e.NINE = 57)] = "NINE"),
      (e[(e.LOWER_A = 97)] = "LOWER_A"),
      (e[(e.LOWER_F = 102)] = "LOWER_F"),
      (e[(e.LOWER_X = 120)] = "LOWER_X"),
      (e[(e.LOWER_Z = 122)] = "LOWER_Z"),
      (e[(e.UPPER_A = 65)] = "UPPER_A"),
      (e[(e.UPPER_F = 70)] = "UPPER_F"),
      (e[(e.UPPER_Z = 90)] = "UPPER_Z");
  })(re || (re = {}));
  var Bs = 32,
    ye;
  (function (e) {
    (e[(e.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
      (e[(e.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
      (e[(e.JUMP_TABLE = 127)] = "JUMP_TABLE");
  })(ye || (ye = {}));
  function Lr(e) {
    return e >= re.ZERO && e <= re.NINE;
  }
  function Us(e) {
    return (
      (e >= re.UPPER_A && e <= re.UPPER_F) ||
      (e >= re.LOWER_A && e <= re.LOWER_F)
    );
  }
  function Hs(e) {
    return (
      (e >= re.UPPER_A && e <= re.UPPER_Z) ||
      (e >= re.LOWER_A && e <= re.LOWER_Z) ||
      Lr(e)
    );
  }
  function Fs(e) {
    return e === re.EQUALS || Hs(e);
  }
  var te;
  (function (e) {
    (e[(e.EntityStart = 0)] = "EntityStart"),
      (e[(e.NumericStart = 1)] = "NumericStart"),
      (e[(e.NumericDecimal = 2)] = "NumericDecimal"),
      (e[(e.NumericHex = 3)] = "NumericHex"),
      (e[(e.NamedEntity = 4)] = "NamedEntity");
  })(te || (te = {}));
  var Le;
  (function (e) {
    (e[(e.Legacy = 0)] = "Legacy"),
      (e[(e.Strict = 1)] = "Strict"),
      (e[(e.Attribute = 2)] = "Attribute");
  })(Le || (Le = {}));
  var nt = class {
    constructor(t, r, n) {
      (this.decodeTree = t),
        (this.emitCodePoint = r),
        (this.errors = n),
        (this.state = te.EntityStart),
        (this.consumed = 1),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.decodeMode = Le.Strict);
    }
    startEntity(t) {
      (this.decodeMode = t),
        (this.state = te.EntityStart),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.consumed = 1);
    }
    write(t, r) {
      switch (this.state) {
        case te.EntityStart:
          return t.charCodeAt(r) === re.NUM
            ? ((this.state = te.NumericStart),
              (this.consumed += 1),
              this.stateNumericStart(t, r + 1))
            : ((this.state = te.NamedEntity), this.stateNamedEntity(t, r));
        case te.NumericStart:
          return this.stateNumericStart(t, r);
        case te.NumericDecimal:
          return this.stateNumericDecimal(t, r);
        case te.NumericHex:
          return this.stateNumericHex(t, r);
        case te.NamedEntity:
          return this.stateNamedEntity(t, r);
      }
    }
    stateNumericStart(t, r) {
      return r >= t.length
        ? -1
        : (t.charCodeAt(r) | Bs) === re.LOWER_X
          ? ((this.state = te.NumericHex),
            (this.consumed += 1),
            this.stateNumericHex(t, r + 1))
          : ((this.state = te.NumericDecimal), this.stateNumericDecimal(t, r));
    }
    addToNumericResult(t, r, n, u) {
      if (r !== n) {
        let a = n - r;
        (this.result =
          this.result * Math.pow(u, a) + parseInt(t.substr(r, a), u)),
          (this.consumed += a);
      }
    }
    stateNumericHex(t, r) {
      let n = r;
      for (; r < t.length; ) {
        let u = t.charCodeAt(r);
        if (Lr(u) || Us(u)) r += 1;
        else
          return (
            this.addToNumericResult(t, n, r, 16), this.emitNumericEntity(u, 3)
          );
      }
      return this.addToNumericResult(t, n, r, 16), -1;
    }
    stateNumericDecimal(t, r) {
      let n = r;
      for (; r < t.length; ) {
        let u = t.charCodeAt(r);
        if (Lr(u)) r += 1;
        else
          return (
            this.addToNumericResult(t, n, r, 10), this.emitNumericEntity(u, 2)
          );
      }
      return this.addToNumericResult(t, n, r, 10), -1;
    }
    emitNumericEntity(t, r) {
      var n;
      if (this.consumed <= r)
        return (
          (n = this.errors) === null ||
            n === void 0 ||
            n.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        );
      if (t === re.SEMI) this.consumed += 1;
      else if (this.decodeMode === Le.Strict) return 0;
      return (
        this.emitCodePoint(Nr(this.result), this.consumed),
        this.errors &&
          (t !== re.SEMI &&
            this.errors.missingSemicolonAfterCharacterReference(),
          this.errors.validateNumericCharacterReference(this.result)),
        this.consumed
      );
    }
    stateNamedEntity(t, r) {
      let { decodeTree: n } = this,
        u = n[this.treeIndex],
        a = (u & ye.VALUE_LENGTH) >> 14;
      for (; r < t.length; r++, this.excess++) {
        let i = t.charCodeAt(r);
        if (
          ((this.treeIndex = qs(n, u, this.treeIndex + Math.max(1, a), i)),
          this.treeIndex < 0)
        )
          return this.result === 0 ||
            (this.decodeMode === Le.Attribute && (a === 0 || Fs(i)))
            ? 0
            : this.emitNotTerminatedNamedEntity();
        if (
          ((u = n[this.treeIndex]), (a = (u & ye.VALUE_LENGTH) >> 14), a !== 0)
        ) {
          if (i === re.SEMI)
            return this.emitNamedEntityData(
              this.treeIndex,
              a,
              this.consumed + this.excess,
            );
          this.decodeMode !== Le.Strict &&
            ((this.result = this.treeIndex),
            (this.consumed += this.excess),
            (this.excess = 0));
        }
      }
      return -1;
    }
    emitNotTerminatedNamedEntity() {
      var t;
      let { result: r, decodeTree: n } = this,
        u = (n[r] & ye.VALUE_LENGTH) >> 14;
      return (
        this.emitNamedEntityData(r, u, this.consumed),
        (t = this.errors) === null ||
          t === void 0 ||
          t.missingSemicolonAfterCharacterReference(),
        this.consumed
      );
    }
    emitNamedEntityData(t, r, n) {
      let { decodeTree: u } = this;
      return (
        this.emitCodePoint(r === 1 ? u[t] & ~ye.VALUE_LENGTH : u[t + 1], n),
        r === 3 && this.emitCodePoint(u[t + 2], n),
        n
      );
    }
    end() {
      var t;
      switch (this.state) {
        case te.NamedEntity:
          return this.result !== 0 &&
            (this.decodeMode !== Le.Attribute || this.result === this.treeIndex)
            ? this.emitNotTerminatedNamedEntity()
            : 0;
        case te.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case te.NumericHex:
          return this.emitNumericEntity(0, 3);
        case te.NumericStart:
          return (
            (t = this.errors) === null ||
              t === void 0 ||
              t.absenceOfDigitsInNumericCharacterReference(this.consumed),
            0
          );
        case te.EntityStart:
          return 0;
      }
    }
  };
  function Kn(e) {
    let t = "",
      r = new nt(e, (n) => (t += Ir(n)));
    return function (u, a) {
      let i = 0,
        f = 0;
      for (; (f = u.indexOf("&", f)) >= 0; ) {
        (t += u.slice(i, f)), r.startEntity(a);
        let h = r.write(u, f + 1);
        if (h < 0) {
          i = f + r.end();
          break;
        }
        (i = f + h), (f = h === 0 ? i + 1 : i);
      }
      let d = t + u.slice(i);
      return (t = ""), d;
    };
  }
  function qs(e, t, r, n) {
    let u = (t & ye.BRANCH_LENGTH) >> 7,
      a = t & ye.JUMP_TABLE;
    if (u === 0) return a !== 0 && n === a ? r : -1;
    if (a) {
      let d = n - a;
      return d < 0 || d >= u ? -1 : e[r + d] - 1;
    }
    let i = r,
      f = i + u - 1;
    for (; i <= f; ) {
      let d = (i + f) >>> 1,
        h = e[d];
      if (h < n) i = d + 1;
      else if (h > n) f = d - 1;
      else return e[d + u];
    }
    return -1;
  }
  var Tc = Kn(Bt),
    pc = Kn(jn);
  var y;
  (function (e) {
    (e.HTML = "http://www.w3.org/1999/xhtml"),
      (e.MATHML = "http://www.w3.org/1998/Math/MathML"),
      (e.SVG = "http://www.w3.org/2000/svg"),
      (e.XLINK = "http://www.w3.org/1999/xlink"),
      (e.XML = "http://www.w3.org/XML/1998/namespace"),
      (e.XMLNS = "http://www.w3.org/2000/xmlns/");
  })(y || (y = {}));
  var xe;
  (function (e) {
    (e.TYPE = "type"),
      (e.ACTION = "action"),
      (e.ENCODING = "encoding"),
      (e.PROMPT = "prompt"),
      (e.NAME = "name"),
      (e.COLOR = "color"),
      (e.FACE = "face"),
      (e.SIZE = "size");
  })(xe || (xe = {}));
  var oe;
  (function (e) {
    (e.NO_QUIRKS = "no-quirks"),
      (e.QUIRKS = "quirks"),
      (e.LIMITED_QUIRKS = "limited-quirks");
  })(oe || (oe = {}));
  var C;
  (function (e) {
    (e.A = "a"),
      (e.ADDRESS = "address"),
      (e.ANNOTATION_XML = "annotation-xml"),
      (e.APPLET = "applet"),
      (e.AREA = "area"),
      (e.ARTICLE = "article"),
      (e.ASIDE = "aside"),
      (e.B = "b"),
      (e.BASE = "base"),
      (e.BASEFONT = "basefont"),
      (e.BGSOUND = "bgsound"),
      (e.BIG = "big"),
      (e.BLOCKQUOTE = "blockquote"),
      (e.BODY = "body"),
      (e.BR = "br"),
      (e.BUTTON = "button"),
      (e.CAPTION = "caption"),
      (e.CENTER = "center"),
      (e.CODE = "code"),
      (e.COL = "col"),
      (e.COLGROUP = "colgroup"),
      (e.DD = "dd"),
      (e.DESC = "desc"),
      (e.DETAILS = "details"),
      (e.DIALOG = "dialog"),
      (e.DIR = "dir"),
      (e.DIV = "div"),
      (e.DL = "dl"),
      (e.DT = "dt"),
      (e.EM = "em"),
      (e.EMBED = "embed"),
      (e.FIELDSET = "fieldset"),
      (e.FIGCAPTION = "figcaption"),
      (e.FIGURE = "figure"),
      (e.FONT = "font"),
      (e.FOOTER = "footer"),
      (e.FOREIGN_OBJECT = "foreignObject"),
      (e.FORM = "form"),
      (e.FRAME = "frame"),
      (e.FRAMESET = "frameset"),
      (e.H1 = "h1"),
      (e.H2 = "h2"),
      (e.H3 = "h3"),
      (e.H4 = "h4"),
      (e.H5 = "h5"),
      (e.H6 = "h6"),
      (e.HEAD = "head"),
      (e.HEADER = "header"),
      (e.HGROUP = "hgroup"),
      (e.HR = "hr"),
      (e.HTML = "html"),
      (e.I = "i"),
      (e.IMG = "img"),
      (e.IMAGE = "image"),
      (e.INPUT = "input"),
      (e.IFRAME = "iframe"),
      (e.KEYGEN = "keygen"),
      (e.LABEL = "label"),
      (e.LI = "li"),
      (e.LINK = "link"),
      (e.LISTING = "listing"),
      (e.MAIN = "main"),
      (e.MALIGNMARK = "malignmark"),
      (e.MARQUEE = "marquee"),
      (e.MATH = "math"),
      (e.MENU = "menu"),
      (e.META = "meta"),
      (e.MGLYPH = "mglyph"),
      (e.MI = "mi"),
      (e.MO = "mo"),
      (e.MN = "mn"),
      (e.MS = "ms"),
      (e.MTEXT = "mtext"),
      (e.NAV = "nav"),
      (e.NOBR = "nobr"),
      (e.NOFRAMES = "noframes"),
      (e.NOEMBED = "noembed"),
      (e.NOSCRIPT = "noscript"),
      (e.OBJECT = "object"),
      (e.OL = "ol"),
      (e.OPTGROUP = "optgroup"),
      (e.OPTION = "option"),
      (e.P = "p"),
      (e.PARAM = "param"),
      (e.PLAINTEXT = "plaintext"),
      (e.PRE = "pre"),
      (e.RB = "rb"),
      (e.RP = "rp"),
      (e.RT = "rt"),
      (e.RTC = "rtc"),
      (e.RUBY = "ruby"),
      (e.S = "s"),
      (e.SCRIPT = "script"),
      (e.SEARCH = "search"),
      (e.SECTION = "section"),
      (e.SELECT = "select"),
      (e.SOURCE = "source"),
      (e.SMALL = "small"),
      (e.SPAN = "span"),
      (e.STRIKE = "strike"),
      (e.STRONG = "strong"),
      (e.STYLE = "style"),
      (e.SUB = "sub"),
      (e.SUMMARY = "summary"),
      (e.SUP = "sup"),
      (e.TABLE = "table"),
      (e.TBODY = "tbody"),
      (e.TEMPLATE = "template"),
      (e.TEXTAREA = "textarea"),
      (e.TFOOT = "tfoot"),
      (e.TD = "td"),
      (e.TH = "th"),
      (e.THEAD = "thead"),
      (e.TITLE = "title"),
      (e.TR = "tr"),
      (e.TRACK = "track"),
      (e.TT = "tt"),
      (e.U = "u"),
      (e.UL = "ul"),
      (e.SVG = "svg"),
      (e.VAR = "var"),
      (e.WBR = "wbr"),
      (e.XMP = "xmp");
  })(C || (C = {}));
  var s;
  (function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.A = 1)] = "A"),
      (e[(e.ADDRESS = 2)] = "ADDRESS"),
      (e[(e.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
      (e[(e.APPLET = 4)] = "APPLET"),
      (e[(e.AREA = 5)] = "AREA"),
      (e[(e.ARTICLE = 6)] = "ARTICLE"),
      (e[(e.ASIDE = 7)] = "ASIDE"),
      (e[(e.B = 8)] = "B"),
      (e[(e.BASE = 9)] = "BASE"),
      (e[(e.BASEFONT = 10)] = "BASEFONT"),
      (e[(e.BGSOUND = 11)] = "BGSOUND"),
      (e[(e.BIG = 12)] = "BIG"),
      (e[(e.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
      (e[(e.BODY = 14)] = "BODY"),
      (e[(e.BR = 15)] = "BR"),
      (e[(e.BUTTON = 16)] = "BUTTON"),
      (e[(e.CAPTION = 17)] = "CAPTION"),
      (e[(e.CENTER = 18)] = "CENTER"),
      (e[(e.CODE = 19)] = "CODE"),
      (e[(e.COL = 20)] = "COL"),
      (e[(e.COLGROUP = 21)] = "COLGROUP"),
      (e[(e.DD = 22)] = "DD"),
      (e[(e.DESC = 23)] = "DESC"),
      (e[(e.DETAILS = 24)] = "DETAILS"),
      (e[(e.DIALOG = 25)] = "DIALOG"),
      (e[(e.DIR = 26)] = "DIR"),
      (e[(e.DIV = 27)] = "DIV"),
      (e[(e.DL = 28)] = "DL"),
      (e[(e.DT = 29)] = "DT"),
      (e[(e.EM = 30)] = "EM"),
      (e[(e.EMBED = 31)] = "EMBED"),
      (e[(e.FIELDSET = 32)] = "FIELDSET"),
      (e[(e.FIGCAPTION = 33)] = "FIGCAPTION"),
      (e[(e.FIGURE = 34)] = "FIGURE"),
      (e[(e.FONT = 35)] = "FONT"),
      (e[(e.FOOTER = 36)] = "FOOTER"),
      (e[(e.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
      (e[(e.FORM = 38)] = "FORM"),
      (e[(e.FRAME = 39)] = "FRAME"),
      (e[(e.FRAMESET = 40)] = "FRAMESET"),
      (e[(e.H1 = 41)] = "H1"),
      (e[(e.H2 = 42)] = "H2"),
      (e[(e.H3 = 43)] = "H3"),
      (e[(e.H4 = 44)] = "H4"),
      (e[(e.H5 = 45)] = "H5"),
      (e[(e.H6 = 46)] = "H6"),
      (e[(e.HEAD = 47)] = "HEAD"),
      (e[(e.HEADER = 48)] = "HEADER"),
      (e[(e.HGROUP = 49)] = "HGROUP"),
      (e[(e.HR = 50)] = "HR"),
      (e[(e.HTML = 51)] = "HTML"),
      (e[(e.I = 52)] = "I"),
      (e[(e.IMG = 53)] = "IMG"),
      (e[(e.IMAGE = 54)] = "IMAGE"),
      (e[(e.INPUT = 55)] = "INPUT"),
      (e[(e.IFRAME = 56)] = "IFRAME"),
      (e[(e.KEYGEN = 57)] = "KEYGEN"),
      (e[(e.LABEL = 58)] = "LABEL"),
      (e[(e.LI = 59)] = "LI"),
      (e[(e.LINK = 60)] = "LINK"),
      (e[(e.LISTING = 61)] = "LISTING"),
      (e[(e.MAIN = 62)] = "MAIN"),
      (e[(e.MALIGNMARK = 63)] = "MALIGNMARK"),
      (e[(e.MARQUEE = 64)] = "MARQUEE"),
      (e[(e.MATH = 65)] = "MATH"),
      (e[(e.MENU = 66)] = "MENU"),
      (e[(e.META = 67)] = "META"),
      (e[(e.MGLYPH = 68)] = "MGLYPH"),
      (e[(e.MI = 69)] = "MI"),
      (e[(e.MO = 70)] = "MO"),
      (e[(e.MN = 71)] = "MN"),
      (e[(e.MS = 72)] = "MS"),
      (e[(e.MTEXT = 73)] = "MTEXT"),
      (e[(e.NAV = 74)] = "NAV"),
      (e[(e.NOBR = 75)] = "NOBR"),
      (e[(e.NOFRAMES = 76)] = "NOFRAMES"),
      (e[(e.NOEMBED = 77)] = "NOEMBED"),
      (e[(e.NOSCRIPT = 78)] = "NOSCRIPT"),
      (e[(e.OBJECT = 79)] = "OBJECT"),
      (e[(e.OL = 80)] = "OL"),
      (e[(e.OPTGROUP = 81)] = "OPTGROUP"),
      (e[(e.OPTION = 82)] = "OPTION"),
      (e[(e.P = 83)] = "P"),
      (e[(e.PARAM = 84)] = "PARAM"),
      (e[(e.PLAINTEXT = 85)] = "PLAINTEXT"),
      (e[(e.PRE = 86)] = "PRE"),
      (e[(e.RB = 87)] = "RB"),
      (e[(e.RP = 88)] = "RP"),
      (e[(e.RT = 89)] = "RT"),
      (e[(e.RTC = 90)] = "RTC"),
      (e[(e.RUBY = 91)] = "RUBY"),
      (e[(e.S = 92)] = "S"),
      (e[(e.SCRIPT = 93)] = "SCRIPT"),
      (e[(e.SEARCH = 94)] = "SEARCH"),
      (e[(e.SECTION = 95)] = "SECTION"),
      (e[(e.SELECT = 96)] = "SELECT"),
      (e[(e.SOURCE = 97)] = "SOURCE"),
      (e[(e.SMALL = 98)] = "SMALL"),
      (e[(e.SPAN = 99)] = "SPAN"),
      (e[(e.STRIKE = 100)] = "STRIKE"),
      (e[(e.STRONG = 101)] = "STRONG"),
      (e[(e.STYLE = 102)] = "STYLE"),
      (e[(e.SUB = 103)] = "SUB"),
      (e[(e.SUMMARY = 104)] = "SUMMARY"),
      (e[(e.SUP = 105)] = "SUP"),
      (e[(e.TABLE = 106)] = "TABLE"),
      (e[(e.TBODY = 107)] = "TBODY"),
      (e[(e.TEMPLATE = 108)] = "TEMPLATE"),
      (e[(e.TEXTAREA = 109)] = "TEXTAREA"),
      (e[(e.TFOOT = 110)] = "TFOOT"),
      (e[(e.TD = 111)] = "TD"),
      (e[(e.TH = 112)] = "TH"),
      (e[(e.THEAD = 113)] = "THEAD"),
      (e[(e.TITLE = 114)] = "TITLE"),
      (e[(e.TR = 115)] = "TR"),
      (e[(e.TRACK = 116)] = "TRACK"),
      (e[(e.TT = 117)] = "TT"),
      (e[(e.U = 118)] = "U"),
      (e[(e.UL = 119)] = "UL"),
      (e[(e.SVG = 120)] = "SVG"),
      (e[(e.VAR = 121)] = "VAR"),
      (e[(e.WBR = 122)] = "WBR"),
      (e[(e.XMP = 123)] = "XMP");
  })(s || (s = {}));
  var Ys = new Map([
    [C.A, s.A],
    [C.ADDRESS, s.ADDRESS],
    [C.ANNOTATION_XML, s.ANNOTATION_XML],
    [C.APPLET, s.APPLET],
    [C.AREA, s.AREA],
    [C.ARTICLE, s.ARTICLE],
    [C.ASIDE, s.ASIDE],
    [C.B, s.B],
    [C.BASE, s.BASE],
    [C.BASEFONT, s.BASEFONT],
    [C.BGSOUND, s.BGSOUND],
    [C.BIG, s.BIG],
    [C.BLOCKQUOTE, s.BLOCKQUOTE],
    [C.BODY, s.BODY],
    [C.BR, s.BR],
    [C.BUTTON, s.BUTTON],
    [C.CAPTION, s.CAPTION],
    [C.CENTER, s.CENTER],
    [C.CODE, s.CODE],
    [C.COL, s.COL],
    [C.COLGROUP, s.COLGROUP],
    [C.DD, s.DD],
    [C.DESC, s.DESC],
    [C.DETAILS, s.DETAILS],
    [C.DIALOG, s.DIALOG],
    [C.DIR, s.DIR],
    [C.DIV, s.DIV],
    [C.DL, s.DL],
    [C.DT, s.DT],
    [C.EM, s.EM],
    [C.EMBED, s.EMBED],
    [C.FIELDSET, s.FIELDSET],
    [C.FIGCAPTION, s.FIGCAPTION],
    [C.FIGURE, s.FIGURE],
    [C.FONT, s.FONT],
    [C.FOOTER, s.FOOTER],
    [C.FOREIGN_OBJECT, s.FOREIGN_OBJECT],
    [C.FORM, s.FORM],
    [C.FRAME, s.FRAME],
    [C.FRAMESET, s.FRAMESET],
    [C.H1, s.H1],
    [C.H2, s.H2],
    [C.H3, s.H3],
    [C.H4, s.H4],
    [C.H5, s.H5],
    [C.H6, s.H6],
    [C.HEAD, s.HEAD],
    [C.HEADER, s.HEADER],
    [C.HGROUP, s.HGROUP],
    [C.HR, s.HR],
    [C.HTML, s.HTML],
    [C.I, s.I],
    [C.IMG, s.IMG],
    [C.IMAGE, s.IMAGE],
    [C.INPUT, s.INPUT],
    [C.IFRAME, s.IFRAME],
    [C.KEYGEN, s.KEYGEN],
    [C.LABEL, s.LABEL],
    [C.LI, s.LI],
    [C.LINK, s.LINK],
    [C.LISTING, s.LISTING],
    [C.MAIN, s.MAIN],
    [C.MALIGNMARK, s.MALIGNMARK],
    [C.MARQUEE, s.MARQUEE],
    [C.MATH, s.MATH],
    [C.MENU, s.MENU],
    [C.META, s.META],
    [C.MGLYPH, s.MGLYPH],
    [C.MI, s.MI],
    [C.MO, s.MO],
    [C.MN, s.MN],
    [C.MS, s.MS],
    [C.MTEXT, s.MTEXT],
    [C.NAV, s.NAV],
    [C.NOBR, s.NOBR],
    [C.NOFRAMES, s.NOFRAMES],
    [C.NOEMBED, s.NOEMBED],
    [C.NOSCRIPT, s.NOSCRIPT],
    [C.OBJECT, s.OBJECT],
    [C.OL, s.OL],
    [C.OPTGROUP, s.OPTGROUP],
    [C.OPTION, s.OPTION],
    [C.P, s.P],
    [C.PARAM, s.PARAM],
    [C.PLAINTEXT, s.PLAINTEXT],
    [C.PRE, s.PRE],
    [C.RB, s.RB],
    [C.RP, s.RP],
    [C.RT, s.RT],
    [C.RTC, s.RTC],
    [C.RUBY, s.RUBY],
    [C.S, s.S],
    [C.SCRIPT, s.SCRIPT],
    [C.SEARCH, s.SEARCH],
    [C.SECTION, s.SECTION],
    [C.SELECT, s.SELECT],
    [C.SOURCE, s.SOURCE],
    [C.SMALL, s.SMALL],
    [C.SPAN, s.SPAN],
    [C.STRIKE, s.STRIKE],
    [C.STRONG, s.STRONG],
    [C.STYLE, s.STYLE],
    [C.SUB, s.SUB],
    [C.SUMMARY, s.SUMMARY],
    [C.SUP, s.SUP],
    [C.TABLE, s.TABLE],
    [C.TBODY, s.TBODY],
    [C.TEMPLATE, s.TEMPLATE],
    [C.TEXTAREA, s.TEXTAREA],
    [C.TFOOT, s.TFOOT],
    [C.TD, s.TD],
    [C.TH, s.TH],
    [C.THEAD, s.THEAD],
    [C.TITLE, s.TITLE],
    [C.TR, s.TR],
    [C.TRACK, s.TRACK],
    [C.TT, s.TT],
    [C.U, s.U],
    [C.UL, s.UL],
    [C.SVG, s.SVG],
    [C.VAR, s.VAR],
    [C.WBR, s.WBR],
    [C.XMP, s.XMP],
  ]);
  function Be(e) {
    var t;
    return (t = Ys.get(e)) !== null && t !== void 0 ? t : s.UNKNOWN;
  }
  var P = s,
    zn = {
      [y.HTML]: new Set([
        P.ADDRESS,
        P.APPLET,
        P.AREA,
        P.ARTICLE,
        P.ASIDE,
        P.BASE,
        P.BASEFONT,
        P.BGSOUND,
        P.BLOCKQUOTE,
        P.BODY,
        P.BR,
        P.BUTTON,
        P.CAPTION,
        P.CENTER,
        P.COL,
        P.COLGROUP,
        P.DD,
        P.DETAILS,
        P.DIR,
        P.DIV,
        P.DL,
        P.DT,
        P.EMBED,
        P.FIELDSET,
        P.FIGCAPTION,
        P.FIGURE,
        P.FOOTER,
        P.FORM,
        P.FRAME,
        P.FRAMESET,
        P.H1,
        P.H2,
        P.H3,
        P.H4,
        P.H5,
        P.H6,
        P.HEAD,
        P.HEADER,
        P.HGROUP,
        P.HR,
        P.HTML,
        P.IFRAME,
        P.IMG,
        P.INPUT,
        P.LI,
        P.LINK,
        P.LISTING,
        P.MAIN,
        P.MARQUEE,
        P.MENU,
        P.META,
        P.NAV,
        P.NOEMBED,
        P.NOFRAMES,
        P.NOSCRIPT,
        P.OBJECT,
        P.OL,
        P.P,
        P.PARAM,
        P.PLAINTEXT,
        P.PRE,
        P.SCRIPT,
        P.SECTION,
        P.SELECT,
        P.SOURCE,
        P.STYLE,
        P.SUMMARY,
        P.TABLE,
        P.TBODY,
        P.TD,
        P.TEMPLATE,
        P.TEXTAREA,
        P.TFOOT,
        P.TH,
        P.THEAD,
        P.TITLE,
        P.TR,
        P.TRACK,
        P.UL,
        P.WBR,
        P.XMP,
      ]),
      [y.MATHML]: new Set([P.MI, P.MO, P.MN, P.MS, P.MTEXT, P.ANNOTATION_XML]),
      [y.SVG]: new Set([P.TITLE, P.FOREIGN_OBJECT, P.DESC]),
      [y.XLINK]: new Set(),
      [y.XML]: new Set(),
      [y.XMLNS]: new Set(),
    },
    ut = new Set([P.H1, P.H2, P.H3, P.H4, P.H5, P.H6]),
    Vs = new Set([
      C.STYLE,
      C.SCRIPT,
      C.XMP,
      C.IFRAME,
      C.NOEMBED,
      C.NOFRAMES,
      C.PLAINTEXT,
    ]);
  function $n(e, t) {
    return Vs.has(e) || (t && e === C.NOSCRIPT);
  }
  var p;
  (function (e) {
    (e[(e.DATA = 0)] = "DATA"),
      (e[(e.RCDATA = 1)] = "RCDATA"),
      (e[(e.RAWTEXT = 2)] = "RAWTEXT"),
      (e[(e.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
      (e[(e.PLAINTEXT = 4)] = "PLAINTEXT"),
      (e[(e.TAG_OPEN = 5)] = "TAG_OPEN"),
      (e[(e.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
      (e[(e.TAG_NAME = 7)] = "TAG_NAME"),
      (e[(e.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
      (e[(e.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
      (e[(e.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
      (e[(e.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
      (e[(e.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
      (e[(e.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
      (e[(e.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
      (e[(e.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
      (e[(e.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
      (e[(e.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
      (e[(e.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
        "SCRIPT_DATA_ESCAPE_START_DASH"),
      (e[(e.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
      (e[(e.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
      (e[(e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
        "SCRIPT_DATA_ESCAPED_DASH_DASH"),
      (e[(e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
        "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
      (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
        "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
      (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
        "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
        "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
        "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
        "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
        "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
        "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
      (e[(e.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
      (e[(e.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
      (e[(e.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
      (e[(e.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
      (e[(e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
        "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
      (e[(e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
        "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
      (e[(e.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
      (e[(e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
        "AFTER_ATTRIBUTE_VALUE_QUOTED"),
      (e[(e.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
      (e[(e.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
      (e[(e.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
      (e[(e.COMMENT_START = 42)] = "COMMENT_START"),
      (e[(e.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
      (e[(e.COMMENT = 44)] = "COMMENT"),
      (e[(e.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
      (e[(e.COMMENT_LESS_THAN_SIGN_BANG = 46)] = "COMMENT_LESS_THAN_SIGN_BANG"),
      (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
        "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
      (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
        "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
      (e[(e.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
      (e[(e.COMMENT_END = 50)] = "COMMENT_END"),
      (e[(e.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
      (e[(e.DOCTYPE = 52)] = "DOCTYPE"),
      (e[(e.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
      (e[(e.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
      (e[(e.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
      (e[(e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
        "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
      (e[(e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
        "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
      (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
        "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
      (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
        "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
      (e[(e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
        "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
      (e[(e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
        "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
      (e[(e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
        "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
      (e[(e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
        "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
      (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
        "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
      (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
        "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
      (e[(e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
        "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
      (e[(e.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
      (e[(e.CDATA_SECTION = 68)] = "CDATA_SECTION"),
      (e[(e.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
      (e[(e.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
      (e[(e.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
      (e[(e.AMBIGUOUS_AMPERSAND = 72)] = "AMBIGUOUS_AMPERSAND");
  })(p || (p = {}));
  var ue = {
    DATA: p.DATA,
    RCDATA: p.RCDATA,
    RAWTEXT: p.RAWTEXT,
    SCRIPT_DATA: p.SCRIPT_DATA,
    PLAINTEXT: p.PLAINTEXT,
    CDATA_SECTION: p.CDATA_SECTION,
  };
  function Ws(e) {
    return e >= E.DIGIT_0 && e <= E.DIGIT_9;
  }
  function at(e) {
    return e >= E.LATIN_CAPITAL_A && e <= E.LATIN_CAPITAL_Z;
  }
  function Xs(e) {
    return e >= E.LATIN_SMALL_A && e <= E.LATIN_SMALL_Z;
  }
  function De(e) {
    return Xs(e) || at(e);
  }
  function Jn(e) {
    return De(e) || Ws(e);
  }
  function Ut(e) {
    return e + 32;
  }
  function eu(e) {
    return (
      e === E.SPACE ||
      e === E.LINE_FEED ||
      e === E.TABULATION ||
      e === E.FORM_FEED
    );
  }
  function Zn(e) {
    return eu(e) || e === E.SOLIDUS || e === E.GREATER_THAN_SIGN;
  }
  function Qs(e) {
    return e === E.NULL
      ? x.nullCharacterReference
      : e > 1114111
        ? x.characterReferenceOutsideUnicodeRange
        : Rt(e)
          ? x.surrogateCharacterReference
          : Pt(e)
            ? x.noncharacterCharacterReference
            : wt(e) || e === E.CARRIAGE_RETURN
              ? x.controlCharacterReference
              : null;
  }
  var st = class {
    constructor(t, r) {
      (this.options = t),
        (this.handler = r),
        (this.paused = !1),
        (this.inLoop = !1),
        (this.inForeignNode = !1),
        (this.lastStartTagName = ""),
        (this.active = !1),
        (this.state = p.DATA),
        (this.returnState = p.DATA),
        (this.entityStartPos = 0),
        (this.consumedAfterSnapshot = -1),
        (this.currentCharacterToken = null),
        (this.currentToken = null),
        (this.currentAttr = { name: "", value: "" }),
        (this.preprocessor = new Mt(r)),
        (this.currentLocation = this.getCurrentLocation(-1)),
        (this.entityDecoder = new nt(
          Bt,
          (n, u) => {
            (this.preprocessor.pos = this.entityStartPos + u - 1),
              this._flushCodePointConsumedAsCharacterReference(n);
          },
          r.onParseError
            ? {
                missingSemicolonAfterCharacterReference: () => {
                  this._err(x.missingSemicolonAfterCharacterReference, 1);
                },
                absenceOfDigitsInNumericCharacterReference: (n) => {
                  this._err(
                    x.absenceOfDigitsInNumericCharacterReference,
                    this.entityStartPos - this.preprocessor.pos + n,
                  );
                },
                validateNumericCharacterReference: (n) => {
                  let u = Qs(n);
                  u && this._err(u, 1);
                },
              }
            : void 0,
        ));
    }
    _err(t, r = 0) {
      var n, u;
      (u = (n = this.handler).onParseError) === null ||
        u === void 0 ||
        u.call(n, this.preprocessor.getError(t, r));
    }
    getCurrentLocation(t) {
      return this.options.sourceCodeLocationInfo
        ? {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - t,
            startOffset: this.preprocessor.offset - t,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
          }
        : null;
    }
    _runParsingLoop() {
      if (!this.inLoop) {
        for (this.inLoop = !0; this.active && !this.paused; ) {
          this.consumedAfterSnapshot = 0;
          let t = this._consume();
          this._ensureHibernation() || this._callState(t);
        }
        this.inLoop = !1;
      }
    }
    pause() {
      this.paused = !0;
    }
    resume(t) {
      if (!this.paused) throw new Error("Parser was already resumed");
      (this.paused = !1),
        !this.inLoop && (this._runParsingLoop(), this.paused || t?.());
    }
    write(t, r, n) {
      (this.active = !0),
        this.preprocessor.write(t, r),
        this._runParsingLoop(),
        this.paused || n?.();
    }
    insertHtmlAtCurrentPos(t) {
      (this.active = !0),
        this.preprocessor.insertHtmlAtCurrentPos(t),
        this._runParsingLoop();
    }
    _ensureHibernation() {
      return this.preprocessor.endOfChunkHit
        ? (this.preprocessor.retreat(this.consumedAfterSnapshot),
          (this.consumedAfterSnapshot = 0),
          (this.active = !1),
          !0)
        : !1;
    }
    _consume() {
      return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
    _advanceBy(t) {
      this.consumedAfterSnapshot += t;
      for (let r = 0; r < t; r++) this.preprocessor.advance();
    }
    _consumeSequenceIfMatch(t, r) {
      return this.preprocessor.startsWith(t, r)
        ? (this._advanceBy(t.length - 1), !0)
        : !1;
    }
    _createStartTagToken() {
      this.currentToken = {
        type: V.START_TAG,
        tagName: "",
        tagID: s.UNKNOWN,
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: [],
        location: this.getCurrentLocation(1),
      };
    }
    _createEndTagToken() {
      this.currentToken = {
        type: V.END_TAG,
        tagName: "",
        tagID: s.UNKNOWN,
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: [],
        location: this.getCurrentLocation(2),
      };
    }
    _createCommentToken(t) {
      this.currentToken = {
        type: V.COMMENT,
        data: "",
        location: this.getCurrentLocation(t),
      };
    }
    _createDoctypeToken(t) {
      this.currentToken = {
        type: V.DOCTYPE,
        name: t,
        forceQuirks: !1,
        publicId: null,
        systemId: null,
        location: this.currentLocation,
      };
    }
    _createCharacterToken(t, r) {
      this.currentCharacterToken = {
        type: t,
        chars: r,
        location: this.currentLocation,
      };
    }
    _createAttr(t) {
      (this.currentAttr = { name: t, value: "" }),
        (this.currentLocation = this.getCurrentLocation(0));
    }
    _leaveAttrName() {
      var t, r;
      let n = this.currentToken;
      if (vt(n, this.currentAttr.name) === null) {
        if (
          (n.attrs.push(this.currentAttr), n.location && this.currentLocation)
        ) {
          let u =
            (t = (r = n.location).attrs) !== null && t !== void 0
              ? t
              : (r.attrs = Object.create(null));
          (u[this.currentAttr.name] = this.currentLocation),
            this._leaveAttrValue();
        }
      } else this._err(x.duplicateAttribute);
    }
    _leaveAttrValue() {
      this.currentLocation &&
        ((this.currentLocation.endLine = this.preprocessor.line),
        (this.currentLocation.endCol = this.preprocessor.col),
        (this.currentLocation.endOffset = this.preprocessor.offset));
    }
    prepareToken(t) {
      this._emitCurrentCharacterToken(t.location),
        (this.currentToken = null),
        t.location &&
          ((t.location.endLine = this.preprocessor.line),
          (t.location.endCol = this.preprocessor.col + 1),
          (t.location.endOffset = this.preprocessor.offset + 1)),
        (this.currentLocation = this.getCurrentLocation(-1));
    }
    emitCurrentTagToken() {
      let t = this.currentToken;
      this.prepareToken(t),
        (t.tagID = Be(t.tagName)),
        t.type === V.START_TAG
          ? ((this.lastStartTagName = t.tagName), this.handler.onStartTag(t))
          : (t.attrs.length > 0 && this._err(x.endTagWithAttributes),
            t.selfClosing && this._err(x.endTagWithTrailingSolidus),
            this.handler.onEndTag(t)),
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(t) {
      this.prepareToken(t),
        this.handler.onComment(t),
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(t) {
      this.prepareToken(t),
        this.handler.onDoctype(t),
        this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(t) {
      if (this.currentCharacterToken) {
        switch (
          (t &&
            this.currentCharacterToken.location &&
            ((this.currentCharacterToken.location.endLine = t.startLine),
            (this.currentCharacterToken.location.endCol = t.startCol),
            (this.currentCharacterToken.location.endOffset = t.startOffset)),
          this.currentCharacterToken.type)
        ) {
          case V.CHARACTER: {
            this.handler.onCharacter(this.currentCharacterToken);
            break;
          }
          case V.NULL_CHARACTER: {
            this.handler.onNullCharacter(this.currentCharacterToken);
            break;
          }
          case V.WHITESPACE_CHARACTER: {
            this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            break;
          }
        }
        this.currentCharacterToken = null;
      }
    }
    _emitEOFToken() {
      let t = this.getCurrentLocation(0);
      t &&
        ((t.endLine = t.startLine),
        (t.endCol = t.startCol),
        (t.endOffset = t.startOffset)),
        this._emitCurrentCharacterToken(t),
        this.handler.onEof({ type: V.EOF, location: t }),
        (this.active = !1);
    }
    _appendCharToCurrentCharacterToken(t, r) {
      if (this.currentCharacterToken)
        if (this.currentCharacterToken.type === t) {
          this.currentCharacterToken.chars += r;
          return;
        } else
          (this.currentLocation = this.getCurrentLocation(0)),
            this._emitCurrentCharacterToken(this.currentLocation),
            this.preprocessor.dropParsedChunk();
      this._createCharacterToken(t, r);
    }
    _emitCodePoint(t) {
      let r = eu(t)
        ? V.WHITESPACE_CHARACTER
        : t === E.NULL
          ? V.NULL_CHARACTER
          : V.CHARACTER;
      this._appendCharToCurrentCharacterToken(r, String.fromCodePoint(t));
    }
    _emitChars(t) {
      this._appendCharToCurrentCharacterToken(V.CHARACTER, t);
    }
    _startCharacterReference() {
      (this.returnState = this.state),
        (this.state = p.CHARACTER_REFERENCE),
        (this.entityStartPos = this.preprocessor.pos),
        this.entityDecoder.startEntity(
          this._isCharacterReferenceInAttribute() ? Le.Attribute : Le.Legacy,
        );
    }
    _isCharacterReferenceInAttribute() {
      return (
        this.returnState === p.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
        this.returnState === p.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
        this.returnState === p.ATTRIBUTE_VALUE_UNQUOTED
      );
    }
    _flushCodePointConsumedAsCharacterReference(t) {
      this._isCharacterReferenceInAttribute()
        ? (this.currentAttr.value += String.fromCodePoint(t))
        : this._emitCodePoint(t);
    }
    _callState(t) {
      switch (this.state) {
        case p.DATA: {
          this._stateData(t);
          break;
        }
        case p.RCDATA: {
          this._stateRcdata(t);
          break;
        }
        case p.RAWTEXT: {
          this._stateRawtext(t);
          break;
        }
        case p.SCRIPT_DATA: {
          this._stateScriptData(t);
          break;
        }
        case p.PLAINTEXT: {
          this._statePlaintext(t);
          break;
        }
        case p.TAG_OPEN: {
          this._stateTagOpen(t);
          break;
        }
        case p.END_TAG_OPEN: {
          this._stateEndTagOpen(t);
          break;
        }
        case p.TAG_NAME: {
          this._stateTagName(t);
          break;
        }
        case p.RCDATA_LESS_THAN_SIGN: {
          this._stateRcdataLessThanSign(t);
          break;
        }
        case p.RCDATA_END_TAG_OPEN: {
          this._stateRcdataEndTagOpen(t);
          break;
        }
        case p.RCDATA_END_TAG_NAME: {
          this._stateRcdataEndTagName(t);
          break;
        }
        case p.RAWTEXT_LESS_THAN_SIGN: {
          this._stateRawtextLessThanSign(t);
          break;
        }
        case p.RAWTEXT_END_TAG_OPEN: {
          this._stateRawtextEndTagOpen(t);
          break;
        }
        case p.RAWTEXT_END_TAG_NAME: {
          this._stateRawtextEndTagName(t);
          break;
        }
        case p.SCRIPT_DATA_LESS_THAN_SIGN: {
          this._stateScriptDataLessThanSign(t);
          break;
        }
        case p.SCRIPT_DATA_END_TAG_OPEN: {
          this._stateScriptDataEndTagOpen(t);
          break;
        }
        case p.SCRIPT_DATA_END_TAG_NAME: {
          this._stateScriptDataEndTagName(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPE_START: {
          this._stateScriptDataEscapeStart(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPE_START_DASH: {
          this._stateScriptDataEscapeStartDash(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPED: {
          this._stateScriptDataEscaped(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPED_DASH: {
          this._stateScriptDataEscapedDash(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPED_DASH_DASH: {
          this._stateScriptDataEscapedDashDash(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
          this._stateScriptDataEscapedLessThanSign(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
          this._stateScriptDataEscapedEndTagOpen(t);
          break;
        }
        case p.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
          this._stateScriptDataEscapedEndTagName(t);
          break;
        }
        case p.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
          this._stateScriptDataDoubleEscapeStart(t);
          break;
        }
        case p.SCRIPT_DATA_DOUBLE_ESCAPED: {
          this._stateScriptDataDoubleEscaped(t);
          break;
        }
        case p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
          this._stateScriptDataDoubleEscapedDash(t);
          break;
        }
        case p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
          this._stateScriptDataDoubleEscapedDashDash(t);
          break;
        }
        case p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
          this._stateScriptDataDoubleEscapedLessThanSign(t);
          break;
        }
        case p.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
          this._stateScriptDataDoubleEscapeEnd(t);
          break;
        }
        case p.BEFORE_ATTRIBUTE_NAME: {
          this._stateBeforeAttributeName(t);
          break;
        }
        case p.ATTRIBUTE_NAME: {
          this._stateAttributeName(t);
          break;
        }
        case p.AFTER_ATTRIBUTE_NAME: {
          this._stateAfterAttributeName(t);
          break;
        }
        case p.BEFORE_ATTRIBUTE_VALUE: {
          this._stateBeforeAttributeValue(t);
          break;
        }
        case p.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
          this._stateAttributeValueDoubleQuoted(t);
          break;
        }
        case p.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
          this._stateAttributeValueSingleQuoted(t);
          break;
        }
        case p.ATTRIBUTE_VALUE_UNQUOTED: {
          this._stateAttributeValueUnquoted(t);
          break;
        }
        case p.AFTER_ATTRIBUTE_VALUE_QUOTED: {
          this._stateAfterAttributeValueQuoted(t);
          break;
        }
        case p.SELF_CLOSING_START_TAG: {
          this._stateSelfClosingStartTag(t);
          break;
        }
        case p.BOGUS_COMMENT: {
          this._stateBogusComment(t);
          break;
        }
        case p.MARKUP_DECLARATION_OPEN: {
          this._stateMarkupDeclarationOpen(t);
          break;
        }
        case p.COMMENT_START: {
          this._stateCommentStart(t);
          break;
        }
        case p.COMMENT_START_DASH: {
          this._stateCommentStartDash(t);
          break;
        }
        case p.COMMENT: {
          this._stateComment(t);
          break;
        }
        case p.COMMENT_LESS_THAN_SIGN: {
          this._stateCommentLessThanSign(t);
          break;
        }
        case p.COMMENT_LESS_THAN_SIGN_BANG: {
          this._stateCommentLessThanSignBang(t);
          break;
        }
        case p.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
          this._stateCommentLessThanSignBangDash(t);
          break;
        }
        case p.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
          this._stateCommentLessThanSignBangDashDash(t);
          break;
        }
        case p.COMMENT_END_DASH: {
          this._stateCommentEndDash(t);
          break;
        }
        case p.COMMENT_END: {
          this._stateCommentEnd(t);
          break;
        }
        case p.COMMENT_END_BANG: {
          this._stateCommentEndBang(t);
          break;
        }
        case p.DOCTYPE: {
          this._stateDoctype(t);
          break;
        }
        case p.BEFORE_DOCTYPE_NAME: {
          this._stateBeforeDoctypeName(t);
          break;
        }
        case p.DOCTYPE_NAME: {
          this._stateDoctypeName(t);
          break;
        }
        case p.AFTER_DOCTYPE_NAME: {
          this._stateAfterDoctypeName(t);
          break;
        }
        case p.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
          this._stateAfterDoctypePublicKeyword(t);
          break;
        }
        case p.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
          this._stateBeforeDoctypePublicIdentifier(t);
          break;
        }
        case p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
          this._stateDoctypePublicIdentifierDoubleQuoted(t);
          break;
        }
        case p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
          this._stateDoctypePublicIdentifierSingleQuoted(t);
          break;
        }
        case p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
          this._stateAfterDoctypePublicIdentifier(t);
          break;
        }
        case p.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
          this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
          break;
        }
        case p.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
          this._stateAfterDoctypeSystemKeyword(t);
          break;
        }
        case p.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
          this._stateBeforeDoctypeSystemIdentifier(t);
          break;
        }
        case p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
          this._stateDoctypeSystemIdentifierDoubleQuoted(t);
          break;
        }
        case p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
          this._stateDoctypeSystemIdentifierSingleQuoted(t);
          break;
        }
        case p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
          this._stateAfterDoctypeSystemIdentifier(t);
          break;
        }
        case p.BOGUS_DOCTYPE: {
          this._stateBogusDoctype(t);
          break;
        }
        case p.CDATA_SECTION: {
          this._stateCdataSection(t);
          break;
        }
        case p.CDATA_SECTION_BRACKET: {
          this._stateCdataSectionBracket(t);
          break;
        }
        case p.CDATA_SECTION_END: {
          this._stateCdataSectionEnd(t);
          break;
        }
        case p.CHARACTER_REFERENCE: {
          this._stateCharacterReference();
          break;
        }
        case p.AMBIGUOUS_AMPERSAND: {
          this._stateAmbiguousAmpersand(t);
          break;
        }
        default:
          throw new Error("Unknown state");
      }
    }
    _stateData(t) {
      switch (t) {
        case E.LESS_THAN_SIGN: {
          this.state = p.TAG_OPEN;
          break;
        }
        case E.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitCodePoint(t);
          break;
        }
        case E.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateRcdata(t) {
      switch (t) {
        case E.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case E.LESS_THAN_SIGN: {
          this.state = p.RCDATA_LESS_THAN_SIGN;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateRawtext(t) {
      switch (t) {
        case E.LESS_THAN_SIGN: {
          this.state = p.RAWTEXT_LESS_THAN_SIGN;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateScriptData(t) {
      switch (t) {
        case E.LESS_THAN_SIGN: {
          this.state = p.SCRIPT_DATA_LESS_THAN_SIGN;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _statePlaintext(t) {
      switch (t) {
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateTagOpen(t) {
      if (De(t))
        this._createStartTagToken(),
          (this.state = p.TAG_NAME),
          this._stateTagName(t);
      else
        switch (t) {
          case E.EXCLAMATION_MARK: {
            this.state = p.MARKUP_DECLARATION_OPEN;
            break;
          }
          case E.SOLIDUS: {
            this.state = p.END_TAG_OPEN;
            break;
          }
          case E.QUESTION_MARK: {
            this._err(x.unexpectedQuestionMarkInsteadOfTagName),
              this._createCommentToken(1),
              (this.state = p.BOGUS_COMMENT),
              this._stateBogusComment(t);
            break;
          }
          case E.EOF: {
            this._err(x.eofBeforeTagName),
              this._emitChars("<"),
              this._emitEOFToken();
            break;
          }
          default:
            this._err(x.invalidFirstCharacterOfTagName),
              this._emitChars("<"),
              (this.state = p.DATA),
              this._stateData(t);
        }
    }
    _stateEndTagOpen(t) {
      if (De(t))
        this._createEndTagToken(),
          (this.state = p.TAG_NAME),
          this._stateTagName(t);
      else
        switch (t) {
          case E.GREATER_THAN_SIGN: {
            this._err(x.missingEndTagName), (this.state = p.DATA);
            break;
          }
          case E.EOF: {
            this._err(x.eofBeforeTagName),
              this._emitChars("</"),
              this._emitEOFToken();
            break;
          }
          default:
            this._err(x.invalidFirstCharacterOfTagName),
              this._createCommentToken(2),
              (this.state = p.BOGUS_COMMENT),
              this._stateBogusComment(t);
        }
    }
    _stateTagName(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this.state = p.BEFORE_ATTRIBUTE_NAME;
          break;
        }
        case E.SOLIDUS: {
          this.state = p.SELF_CLOSING_START_TAG;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentTagToken();
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.tagName += z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          r.tagName += String.fromCodePoint(at(t) ? Ut(t) : t);
      }
    }
    _stateRcdataLessThanSign(t) {
      t === E.SOLIDUS
        ? (this.state = p.RCDATA_END_TAG_OPEN)
        : (this._emitChars("<"), (this.state = p.RCDATA), this._stateRcdata(t));
    }
    _stateRcdataEndTagOpen(t) {
      De(t)
        ? ((this.state = p.RCDATA_END_TAG_NAME), this._stateRcdataEndTagName(t))
        : (this._emitChars("</"),
          (this.state = p.RCDATA),
          this._stateRcdata(t));
    }
    handleSpecialEndTag(t) {
      if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
        return !this._ensureHibernation();
      this._createEndTagToken();
      let r = this.currentToken;
      switch (
        ((r.tagName = this.lastStartTagName),
        this.preprocessor.peek(this.lastStartTagName.length))
      ) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          return (
            this._advanceBy(this.lastStartTagName.length),
            (this.state = p.BEFORE_ATTRIBUTE_NAME),
            !1
          );
        case E.SOLIDUS:
          return (
            this._advanceBy(this.lastStartTagName.length),
            (this.state = p.SELF_CLOSING_START_TAG),
            !1
          );
        case E.GREATER_THAN_SIGN:
          return (
            this._advanceBy(this.lastStartTagName.length),
            this.emitCurrentTagToken(),
            (this.state = p.DATA),
            !1
          );
        default:
          return !this._ensureHibernation();
      }
    }
    _stateRcdataEndTagName(t) {
      this.handleSpecialEndTag(t) &&
        (this._emitChars("</"), (this.state = p.RCDATA), this._stateRcdata(t));
    }
    _stateRawtextLessThanSign(t) {
      t === E.SOLIDUS
        ? (this.state = p.RAWTEXT_END_TAG_OPEN)
        : (this._emitChars("<"),
          (this.state = p.RAWTEXT),
          this._stateRawtext(t));
    }
    _stateRawtextEndTagOpen(t) {
      De(t)
        ? ((this.state = p.RAWTEXT_END_TAG_NAME),
          this._stateRawtextEndTagName(t))
        : (this._emitChars("</"),
          (this.state = p.RAWTEXT),
          this._stateRawtext(t));
    }
    _stateRawtextEndTagName(t) {
      this.handleSpecialEndTag(t) &&
        (this._emitChars("</"),
        (this.state = p.RAWTEXT),
        this._stateRawtext(t));
    }
    _stateScriptDataLessThanSign(t) {
      switch (t) {
        case E.SOLIDUS: {
          this.state = p.SCRIPT_DATA_END_TAG_OPEN;
          break;
        }
        case E.EXCLAMATION_MARK: {
          (this.state = p.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
          break;
        }
        default:
          this._emitChars("<"),
            (this.state = p.SCRIPT_DATA),
            this._stateScriptData(t);
      }
    }
    _stateScriptDataEndTagOpen(t) {
      De(t)
        ? ((this.state = p.SCRIPT_DATA_END_TAG_NAME),
          this._stateScriptDataEndTagName(t))
        : (this._emitChars("</"),
          (this.state = p.SCRIPT_DATA),
          this._stateScriptData(t));
    }
    _stateScriptDataEndTagName(t) {
      this.handleSpecialEndTag(t) &&
        (this._emitChars("</"),
        (this.state = p.SCRIPT_DATA),
        this._stateScriptData(t));
    }
    _stateScriptDataEscapeStart(t) {
      t === E.HYPHEN_MINUS
        ? ((this.state = p.SCRIPT_DATA_ESCAPE_START_DASH), this._emitChars("-"))
        : ((this.state = p.SCRIPT_DATA), this._stateScriptData(t));
    }
    _stateScriptDataEscapeStartDash(t) {
      t === E.HYPHEN_MINUS
        ? ((this.state = p.SCRIPT_DATA_ESCAPED_DASH_DASH), this._emitChars("-"))
        : ((this.state = p.SCRIPT_DATA), this._stateScriptData(t));
    }
    _stateScriptDataEscaped(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          (this.state = p.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
          break;
        }
        case E.LESS_THAN_SIGN: {
          this.state = p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateScriptDataEscapedDash(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          (this.state = p.SCRIPT_DATA_ESCAPED_DASH_DASH), this._emitChars("-");
          break;
        }
        case E.LESS_THAN_SIGN: {
          this.state = p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter),
            (this.state = p.SCRIPT_DATA_ESCAPED),
            this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          (this.state = p.SCRIPT_DATA_ESCAPED), this._emitCodePoint(t);
      }
    }
    _stateScriptDataEscapedDashDash(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          this._emitChars("-");
          break;
        }
        case E.LESS_THAN_SIGN: {
          this.state = p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.SCRIPT_DATA), this._emitChars(">");
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter),
            (this.state = p.SCRIPT_DATA_ESCAPED),
            this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          (this.state = p.SCRIPT_DATA_ESCAPED), this._emitCodePoint(t);
      }
    }
    _stateScriptDataEscapedLessThanSign(t) {
      t === E.SOLIDUS
        ? (this.state = p.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
        : De(t)
          ? (this._emitChars("<"),
            (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPE_START),
            this._stateScriptDataDoubleEscapeStart(t))
          : (this._emitChars("<"),
            (this.state = p.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(t));
    }
    _stateScriptDataEscapedEndTagOpen(t) {
      De(t)
        ? ((this.state = p.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
          this._stateScriptDataEscapedEndTagName(t))
        : (this._emitChars("</"),
          (this.state = p.SCRIPT_DATA_ESCAPED),
          this._stateScriptDataEscaped(t));
    }
    _stateScriptDataEscapedEndTagName(t) {
      this.handleSpecialEndTag(t) &&
        (this._emitChars("</"),
        (this.state = p.SCRIPT_DATA_ESCAPED),
        this._stateScriptDataEscaped(t));
    }
    _stateScriptDataDoubleEscapeStart(t) {
      if (
        this.preprocessor.startsWith(ie.SCRIPT, !1) &&
        Zn(this.preprocessor.peek(ie.SCRIPT.length))
      ) {
        this._emitCodePoint(t);
        for (let r = 0; r < ie.SCRIPT.length; r++)
          this._emitCodePoint(this._consume());
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED;
      } else
        this._ensureHibernation() ||
          ((this.state = p.SCRIPT_DATA_ESCAPED),
          this._stateScriptDataEscaped(t));
    }
    _stateScriptDataDoubleEscaped(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
            this._emitChars("-");
          break;
        }
        case E.LESS_THAN_SIGN: {
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
            this._emitChars("<");
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateScriptDataDoubleEscapedDash(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
            this._emitChars("-");
          break;
        }
        case E.LESS_THAN_SIGN: {
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
            this._emitChars("<");
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter),
            (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED),
            this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(t);
      }
    }
    _stateScriptDataDoubleEscapedDashDash(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          this._emitChars("-");
          break;
        }
        case E.LESS_THAN_SIGN: {
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
            this._emitChars("<");
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.SCRIPT_DATA), this._emitChars(">");
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter),
            (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED),
            this._emitChars(z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(t);
      }
    }
    _stateScriptDataDoubleEscapedLessThanSign(t) {
      t === E.SOLIDUS
        ? ((this.state = p.SCRIPT_DATA_DOUBLE_ESCAPE_END), this._emitChars("/"))
        : ((this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED),
          this._stateScriptDataDoubleEscaped(t));
    }
    _stateScriptDataDoubleEscapeEnd(t) {
      if (
        this.preprocessor.startsWith(ie.SCRIPT, !1) &&
        Zn(this.preprocessor.peek(ie.SCRIPT.length))
      ) {
        this._emitCodePoint(t);
        for (let r = 0; r < ie.SCRIPT.length; r++)
          this._emitCodePoint(this._consume());
        this.state = p.SCRIPT_DATA_ESCAPED;
      } else
        this._ensureHibernation() ||
          ((this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED),
          this._stateScriptDataDoubleEscaped(t));
    }
    _stateBeforeAttributeName(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.SOLIDUS:
        case E.GREATER_THAN_SIGN:
        case E.EOF: {
          (this.state = p.AFTER_ATTRIBUTE_NAME),
            this._stateAfterAttributeName(t);
          break;
        }
        case E.EQUALS_SIGN: {
          this._err(x.unexpectedEqualsSignBeforeAttributeName),
            this._createAttr("="),
            (this.state = p.ATTRIBUTE_NAME);
          break;
        }
        default:
          this._createAttr(""),
            (this.state = p.ATTRIBUTE_NAME),
            this._stateAttributeName(t);
      }
    }
    _stateAttributeName(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
        case E.SOLIDUS:
        case E.GREATER_THAN_SIGN:
        case E.EOF: {
          this._leaveAttrName(),
            (this.state = p.AFTER_ATTRIBUTE_NAME),
            this._stateAfterAttributeName(t);
          break;
        }
        case E.EQUALS_SIGN: {
          this._leaveAttrName(), (this.state = p.BEFORE_ATTRIBUTE_VALUE);
          break;
        }
        case E.QUOTATION_MARK:
        case E.APOSTROPHE:
        case E.LESS_THAN_SIGN: {
          this._err(x.unexpectedCharacterInAttributeName),
            (this.currentAttr.name += String.fromCodePoint(t));
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (this.currentAttr.name += z);
          break;
        }
        default:
          this.currentAttr.name += String.fromCodePoint(at(t) ? Ut(t) : t);
      }
    }
    _stateAfterAttributeName(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.SOLIDUS: {
          this.state = p.SELF_CLOSING_START_TAG;
          break;
        }
        case E.EQUALS_SIGN: {
          this.state = p.BEFORE_ATTRIBUTE_VALUE;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentTagToken();
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this._createAttr(""),
            (this.state = p.ATTRIBUTE_NAME),
            this._stateAttributeName(t);
      }
    }
    _stateBeforeAttributeValue(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.QUOTATION_MARK: {
          this.state = p.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
          break;
        }
        case E.APOSTROPHE: {
          this.state = p.ATTRIBUTE_VALUE_SINGLE_QUOTED;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.missingAttributeValue),
            (this.state = p.DATA),
            this.emitCurrentTagToken();
          break;
        }
        default:
          (this.state = p.ATTRIBUTE_VALUE_UNQUOTED),
            this._stateAttributeValueUnquoted(t);
      }
    }
    _stateAttributeValueDoubleQuoted(t) {
      switch (t) {
        case E.QUOTATION_MARK: {
          this.state = p.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        }
        case E.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (this.currentAttr.value += z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this.currentAttr.value += String.fromCodePoint(t);
      }
    }
    _stateAttributeValueSingleQuoted(t) {
      switch (t) {
        case E.APOSTROPHE: {
          this.state = p.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        }
        case E.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (this.currentAttr.value += z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this.currentAttr.value += String.fromCodePoint(t);
      }
    }
    _stateAttributeValueUnquoted(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this._leaveAttrValue(), (this.state = p.BEFORE_ATTRIBUTE_NAME);
          break;
        }
        case E.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._leaveAttrValue(),
            (this.state = p.DATA),
            this.emitCurrentTagToken();
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (this.currentAttr.value += z);
          break;
        }
        case E.QUOTATION_MARK:
        case E.APOSTROPHE:
        case E.LESS_THAN_SIGN:
        case E.EQUALS_SIGN:
        case E.GRAVE_ACCENT: {
          this._err(x.unexpectedCharacterInUnquotedAttributeValue),
            (this.currentAttr.value += String.fromCodePoint(t));
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this.currentAttr.value += String.fromCodePoint(t);
      }
    }
    _stateAfterAttributeValueQuoted(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this._leaveAttrValue(), (this.state = p.BEFORE_ATTRIBUTE_NAME);
          break;
        }
        case E.SOLIDUS: {
          this._leaveAttrValue(), (this.state = p.SELF_CLOSING_START_TAG);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._leaveAttrValue(),
            (this.state = p.DATA),
            this.emitCurrentTagToken();
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingWhitespaceBetweenAttributes),
            (this.state = p.BEFORE_ATTRIBUTE_NAME),
            this._stateBeforeAttributeName(t);
      }
    }
    _stateSelfClosingStartTag(t) {
      switch (t) {
        case E.GREATER_THAN_SIGN: {
          let r = this.currentToken;
          (r.selfClosing = !0),
            (this.state = p.DATA),
            this.emitCurrentTagToken();
          break;
        }
        case E.EOF: {
          this._err(x.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this._err(x.unexpectedSolidusInTag),
            (this.state = p.BEFORE_ATTRIBUTE_NAME),
            this._stateBeforeAttributeName(t);
      }
    }
    _stateBogusComment(t) {
      let r = this.currentToken;
      switch (t) {
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentComment(r);
          break;
        }
        case E.EOF: {
          this.emitCurrentComment(r), this._emitEOFToken();
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.data += z);
          break;
        }
        default:
          r.data += String.fromCodePoint(t);
      }
    }
    _stateMarkupDeclarationOpen(t) {
      this._consumeSequenceIfMatch(ie.DASH_DASH, !0)
        ? (this._createCommentToken(ie.DASH_DASH.length + 1),
          (this.state = p.COMMENT_START))
        : this._consumeSequenceIfMatch(ie.DOCTYPE, !1)
          ? ((this.currentLocation = this.getCurrentLocation(
              ie.DOCTYPE.length + 1,
            )),
            (this.state = p.DOCTYPE))
          : this._consumeSequenceIfMatch(ie.CDATA_START, !0)
            ? this.inForeignNode
              ? (this.state = p.CDATA_SECTION)
              : (this._err(x.cdataInHtmlContent),
                this._createCommentToken(ie.CDATA_START.length + 1),
                (this.currentToken.data = "[CDATA["),
                (this.state = p.BOGUS_COMMENT))
            : this._ensureHibernation() ||
              (this._err(x.incorrectlyOpenedComment),
              this._createCommentToken(2),
              (this.state = p.BOGUS_COMMENT),
              this._stateBogusComment(t));
    }
    _stateCommentStart(t) {
      switch (t) {
        case E.HYPHEN_MINUS: {
          this.state = p.COMMENT_START_DASH;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.abruptClosingOfEmptyComment), (this.state = p.DATA);
          let r = this.currentToken;
          this.emitCurrentComment(r);
          break;
        }
        default:
          (this.state = p.COMMENT), this._stateComment(t);
      }
    }
    _stateCommentStartDash(t) {
      let r = this.currentToken;
      switch (t) {
        case E.HYPHEN_MINUS: {
          this.state = p.COMMENT_END;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.abruptClosingOfEmptyComment),
            (this.state = p.DATA),
            this.emitCurrentComment(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInComment),
            this.emitCurrentComment(r),
            this._emitEOFToken();
          break;
        }
        default:
          (r.data += "-"), (this.state = p.COMMENT), this._stateComment(t);
      }
    }
    _stateComment(t) {
      let r = this.currentToken;
      switch (t) {
        case E.HYPHEN_MINUS: {
          this.state = p.COMMENT_END_DASH;
          break;
        }
        case E.LESS_THAN_SIGN: {
          (r.data += "<"), (this.state = p.COMMENT_LESS_THAN_SIGN);
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.data += z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInComment),
            this.emitCurrentComment(r),
            this._emitEOFToken();
          break;
        }
        default:
          r.data += String.fromCodePoint(t);
      }
    }
    _stateCommentLessThanSign(t) {
      let r = this.currentToken;
      switch (t) {
        case E.EXCLAMATION_MARK: {
          (r.data += "!"), (this.state = p.COMMENT_LESS_THAN_SIGN_BANG);
          break;
        }
        case E.LESS_THAN_SIGN: {
          r.data += "<";
          break;
        }
        default:
          (this.state = p.COMMENT), this._stateComment(t);
      }
    }
    _stateCommentLessThanSignBang(t) {
      t === E.HYPHEN_MINUS
        ? (this.state = p.COMMENT_LESS_THAN_SIGN_BANG_DASH)
        : ((this.state = p.COMMENT), this._stateComment(t));
    }
    _stateCommentLessThanSignBangDash(t) {
      t === E.HYPHEN_MINUS
        ? (this.state = p.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
        : ((this.state = p.COMMENT_END_DASH), this._stateCommentEndDash(t));
    }
    _stateCommentLessThanSignBangDashDash(t) {
      t !== E.GREATER_THAN_SIGN && t !== E.EOF && this._err(x.nestedComment),
        (this.state = p.COMMENT_END),
        this._stateCommentEnd(t);
    }
    _stateCommentEndDash(t) {
      let r = this.currentToken;
      switch (t) {
        case E.HYPHEN_MINUS: {
          this.state = p.COMMENT_END;
          break;
        }
        case E.EOF: {
          this._err(x.eofInComment),
            this.emitCurrentComment(r),
            this._emitEOFToken();
          break;
        }
        default:
          (r.data += "-"), (this.state = p.COMMENT), this._stateComment(t);
      }
    }
    _stateCommentEnd(t) {
      let r = this.currentToken;
      switch (t) {
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentComment(r);
          break;
        }
        case E.EXCLAMATION_MARK: {
          this.state = p.COMMENT_END_BANG;
          break;
        }
        case E.HYPHEN_MINUS: {
          r.data += "-";
          break;
        }
        case E.EOF: {
          this._err(x.eofInComment),
            this.emitCurrentComment(r),
            this._emitEOFToken();
          break;
        }
        default:
          (r.data += "--"), (this.state = p.COMMENT), this._stateComment(t);
      }
    }
    _stateCommentEndBang(t) {
      let r = this.currentToken;
      switch (t) {
        case E.HYPHEN_MINUS: {
          (r.data += "--!"), (this.state = p.COMMENT_END_DASH);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.incorrectlyClosedComment),
            (this.state = p.DATA),
            this.emitCurrentComment(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInComment),
            this.emitCurrentComment(r),
            this._emitEOFToken();
          break;
        }
        default:
          (r.data += "--!"), (this.state = p.COMMENT), this._stateComment(t);
      }
    }
    _stateDoctype(t) {
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this.state = p.BEFORE_DOCTYPE_NAME;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.BEFORE_DOCTYPE_NAME), this._stateBeforeDoctypeName(t);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype), this._createDoctypeToken(null);
          let r = this.currentToken;
          (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingWhitespaceBeforeDoctypeName),
            (this.state = p.BEFORE_DOCTYPE_NAME),
            this._stateBeforeDoctypeName(t);
      }
    }
    _stateBeforeDoctypeName(t) {
      if (at(t))
        this._createDoctypeToken(String.fromCharCode(Ut(t))),
          (this.state = p.DOCTYPE_NAME);
      else
        switch (t) {
          case E.SPACE:
          case E.LINE_FEED:
          case E.TABULATION:
          case E.FORM_FEED:
            break;
          case E.NULL: {
            this._err(x.unexpectedNullCharacter),
              this._createDoctypeToken(z),
              (this.state = p.DOCTYPE_NAME);
            break;
          }
          case E.GREATER_THAN_SIGN: {
            this._err(x.missingDoctypeName), this._createDoctypeToken(null);
            let r = this.currentToken;
            (r.forceQuirks = !0),
              this.emitCurrentDoctype(r),
              (this.state = p.DATA);
            break;
          }
          case E.EOF: {
            this._err(x.eofInDoctype), this._createDoctypeToken(null);
            let r = this.currentToken;
            (r.forceQuirks = !0),
              this.emitCurrentDoctype(r),
              this._emitEOFToken();
            break;
          }
          default:
            this._createDoctypeToken(String.fromCodePoint(t)),
              (this.state = p.DOCTYPE_NAME);
        }
    }
    _stateDoctypeName(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this.state = p.AFTER_DOCTYPE_NAME;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentDoctype(r);
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.name += z);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          r.name += String.fromCodePoint(at(t) ? Ut(t) : t);
      }
    }
    _stateAfterDoctypeName(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentDoctype(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._consumeSequenceIfMatch(ie.PUBLIC, !1)
            ? (this.state = p.AFTER_DOCTYPE_PUBLIC_KEYWORD)
            : this._consumeSequenceIfMatch(ie.SYSTEM, !1)
              ? (this.state = p.AFTER_DOCTYPE_SYSTEM_KEYWORD)
              : this._ensureHibernation() ||
                (this._err(x.invalidCharacterSequenceAfterDoctypeName),
                (r.forceQuirks = !0),
                (this.state = p.BOGUS_DOCTYPE),
                this._stateBogusDoctype(t));
      }
    }
    _stateAfterDoctypePublicKeyword(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this.state = p.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        }
        case E.QUOTATION_MARK: {
          this._err(x.missingWhitespaceAfterDoctypePublicKeyword),
            (r.publicId = ""),
            (this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
          break;
        }
        case E.APOSTROPHE: {
          this._err(x.missingWhitespaceAfterDoctypePublicKeyword),
            (r.publicId = ""),
            (this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.missingDoctypePublicIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.DATA),
            this.emitCurrentDoctype(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingQuoteBeforeDoctypePublicIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateBeforeDoctypePublicIdentifier(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.QUOTATION_MARK: {
          (r.publicId = ""),
            (this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
          break;
        }
        case E.APOSTROPHE: {
          (r.publicId = ""),
            (this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.missingDoctypePublicIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.DATA),
            this.emitCurrentDoctype(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingQuoteBeforeDoctypePublicIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(t) {
      let r = this.currentToken;
      switch (t) {
        case E.QUOTATION_MARK: {
          this.state = p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.publicId += z);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.abruptDoctypePublicIdentifier),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            (this.state = p.DATA);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          r.publicId += String.fromCodePoint(t);
      }
    }
    _stateDoctypePublicIdentifierSingleQuoted(t) {
      let r = this.currentToken;
      switch (t) {
        case E.APOSTROPHE: {
          this.state = p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.publicId += z);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.abruptDoctypePublicIdentifier),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            (this.state = p.DATA);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          r.publicId += String.fromCodePoint(t);
      }
    }
    _stateAfterDoctypePublicIdentifier(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this.state = p.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          (this.state = p.DATA), this.emitCurrentDoctype(r);
          break;
        }
        case E.QUOTATION_MARK: {
          this._err(
            x.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
          ),
            (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
          break;
        }
        case E.APOSTROPHE: {
          this._err(
            x.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
          ),
            (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingQuoteBeforeDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.GREATER_THAN_SIGN: {
          this.emitCurrentDoctype(r), (this.state = p.DATA);
          break;
        }
        case E.QUOTATION_MARK: {
          (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
          break;
        }
        case E.APOSTROPHE: {
          (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingQuoteBeforeDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateAfterDoctypeSystemKeyword(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED: {
          this.state = p.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        }
        case E.QUOTATION_MARK: {
          this._err(x.missingWhitespaceAfterDoctypeSystemKeyword),
            (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
          break;
        }
        case E.APOSTROPHE: {
          this._err(x.missingWhitespaceAfterDoctypeSystemKeyword),
            (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.missingDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.DATA),
            this.emitCurrentDoctype(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingQuoteBeforeDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateBeforeDoctypeSystemIdentifier(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.QUOTATION_MARK: {
          (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
          break;
        }
        case E.APOSTROPHE: {
          (r.systemId = ""),
            (this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.missingDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.DATA),
            this.emitCurrentDoctype(r);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.missingQuoteBeforeDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(t) {
      let r = this.currentToken;
      switch (t) {
        case E.QUOTATION_MARK: {
          this.state = p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.systemId += z);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.abruptDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            (this.state = p.DATA);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          r.systemId += String.fromCodePoint(t);
      }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(t) {
      let r = this.currentToken;
      switch (t) {
        case E.APOSTROPHE: {
          this.state = p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter), (r.systemId += z);
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(x.abruptDoctypeSystemIdentifier),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            (this.state = p.DATA);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          r.systemId += String.fromCodePoint(t);
      }
    }
    _stateAfterDoctypeSystemIdentifier(t) {
      let r = this.currentToken;
      switch (t) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.GREATER_THAN_SIGN: {
          this.emitCurrentDoctype(r), (this.state = p.DATA);
          break;
        }
        case E.EOF: {
          this._err(x.eofInDoctype),
            (r.forceQuirks = !0),
            this.emitCurrentDoctype(r),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(x.unexpectedCharacterAfterDoctypeSystemIdentifier),
            (this.state = p.BOGUS_DOCTYPE),
            this._stateBogusDoctype(t);
      }
    }
    _stateBogusDoctype(t) {
      let r = this.currentToken;
      switch (t) {
        case E.GREATER_THAN_SIGN: {
          this.emitCurrentDoctype(r), (this.state = p.DATA);
          break;
        }
        case E.NULL: {
          this._err(x.unexpectedNullCharacter);
          break;
        }
        case E.EOF: {
          this.emitCurrentDoctype(r), this._emitEOFToken();
          break;
        }
        default:
      }
    }
    _stateCdataSection(t) {
      switch (t) {
        case E.RIGHT_SQUARE_BRACKET: {
          this.state = p.CDATA_SECTION_BRACKET;
          break;
        }
        case E.EOF: {
          this._err(x.eofInCdata), this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateCdataSectionBracket(t) {
      t === E.RIGHT_SQUARE_BRACKET
        ? (this.state = p.CDATA_SECTION_END)
        : (this._emitChars("]"),
          (this.state = p.CDATA_SECTION),
          this._stateCdataSection(t));
    }
    _stateCdataSectionEnd(t) {
      switch (t) {
        case E.GREATER_THAN_SIGN: {
          this.state = p.DATA;
          break;
        }
        case E.RIGHT_SQUARE_BRACKET: {
          this._emitChars("]");
          break;
        }
        default:
          this._emitChars("]]"),
            (this.state = p.CDATA_SECTION),
            this._stateCdataSection(t);
      }
    }
    _stateCharacterReference() {
      let t = this.entityDecoder.write(
        this.preprocessor.html,
        this.preprocessor.pos,
      );
      if (t < 0)
        if (this.preprocessor.lastChunkWritten) t = this.entityDecoder.end();
        else {
          (this.active = !1),
            (this.preprocessor.pos = this.preprocessor.html.length - 1),
            (this.consumedAfterSnapshot = 0),
            (this.preprocessor.endOfChunkHit = !0);
          return;
        }
      t === 0
        ? ((this.preprocessor.pos = this.entityStartPos),
          this._flushCodePointConsumedAsCharacterReference(E.AMPERSAND),
          (this.state =
            !this._isCharacterReferenceInAttribute() &&
            Jn(this.preprocessor.peek(1))
              ? p.AMBIGUOUS_AMPERSAND
              : this.returnState))
        : (this.state = this.returnState);
    }
    _stateAmbiguousAmpersand(t) {
      Jn(t)
        ? this._flushCodePointConsumedAsCharacterReference(t)
        : (t === E.SEMICOLON && this._err(x.unknownNamedCharacterReference),
          (this.state = this.returnState),
          this._callState(t));
    }
  };
  var uu = new Set([
      s.DD,
      s.DT,
      s.LI,
      s.OPTGROUP,
      s.OPTION,
      s.P,
      s.RB,
      s.RP,
      s.RT,
      s.RTC,
    ]),
    tu = new Set([
      ...uu,
      s.CAPTION,
      s.COLGROUP,
      s.TBODY,
      s.TD,
      s.TFOOT,
      s.TH,
      s.THEAD,
      s.TR,
    ]),
    Ht = new Set([
      s.APPLET,
      s.CAPTION,
      s.HTML,
      s.MARQUEE,
      s.OBJECT,
      s.TABLE,
      s.TD,
      s.TEMPLATE,
      s.TH,
    ]),
    js = new Set([...Ht, s.OL, s.UL]),
    Ks = new Set([...Ht, s.BUTTON]),
    ru = new Set([s.ANNOTATION_XML, s.MI, s.MN, s.MO, s.MS, s.MTEXT]),
    nu = new Set([s.DESC, s.FOREIGN_OBJECT, s.TITLE]),
    zs = new Set([s.TR, s.TEMPLATE, s.HTML]),
    $s = new Set([s.TBODY, s.TFOOT, s.THEAD, s.TEMPLATE, s.HTML]),
    Js = new Set([s.TABLE, s.TEMPLATE, s.HTML]),
    Zs = new Set([s.TD, s.TH]),
    Ft = class {
      get currentTmplContentOrNode() {
        return this._isInTemplate()
          ? this.treeAdapter.getTemplateContent(this.current)
          : this.current;
      }
      constructor(t, r, n) {
        (this.treeAdapter = r),
          (this.handler = n),
          (this.items = []),
          (this.tagIDs = []),
          (this.stackTop = -1),
          (this.tmplCount = 0),
          (this.currentTagId = s.UNKNOWN),
          (this.current = t);
      }
      _indexOf(t) {
        return this.items.lastIndexOf(t, this.stackTop);
      }
      _isInTemplate() {
        return (
          this.currentTagId === s.TEMPLATE &&
          this.treeAdapter.getNamespaceURI(this.current) === y.HTML
        );
      }
      _updateCurrentElement() {
        (this.current = this.items[this.stackTop]),
          (this.currentTagId = this.tagIDs[this.stackTop]);
      }
      push(t, r) {
        this.stackTop++,
          (this.items[this.stackTop] = t),
          (this.current = t),
          (this.tagIDs[this.stackTop] = r),
          (this.currentTagId = r),
          this._isInTemplate() && this.tmplCount++,
          this.handler.onItemPush(t, r, !0);
      }
      pop() {
        let t = this.current;
        this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
          this.stackTop--,
          this._updateCurrentElement(),
          this.handler.onItemPop(t, !0);
      }
      replace(t, r) {
        let n = this._indexOf(t);
        (this.items[n] = r), n === this.stackTop && (this.current = r);
      }
      insertAfter(t, r, n) {
        let u = this._indexOf(t) + 1;
        this.items.splice(u, 0, r),
          this.tagIDs.splice(u, 0, n),
          this.stackTop++,
          u === this.stackTop && this._updateCurrentElement(),
          this.handler.onItemPush(
            this.current,
            this.currentTagId,
            u === this.stackTop,
          );
      }
      popUntilTagNamePopped(t) {
        let r = this.stackTop + 1;
        do r = this.tagIDs.lastIndexOf(t, r - 1);
        while (
          r > 0 &&
          this.treeAdapter.getNamespaceURI(this.items[r]) !== y.HTML
        );
        this.shortenToLength(r < 0 ? 0 : r);
      }
      shortenToLength(t) {
        for (; this.stackTop >= t; ) {
          let r = this.current;
          this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(r, this.stackTop < t);
        }
      }
      popUntilElementPopped(t) {
        let r = this._indexOf(t);
        this.shortenToLength(r < 0 ? 0 : r);
      }
      popUntilPopped(t, r) {
        let n = this._indexOfTagNames(t, r);
        this.shortenToLength(n < 0 ? 0 : n);
      }
      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(ut, y.HTML);
      }
      popUntilTableCellPopped() {
        this.popUntilPopped(Zs, y.HTML);
      }
      popAllUpToHtmlElement() {
        (this.tmplCount = 0), this.shortenToLength(1);
      }
      _indexOfTagNames(t, r) {
        for (let n = this.stackTop; n >= 0; n--)
          if (
            t.has(this.tagIDs[n]) &&
            this.treeAdapter.getNamespaceURI(this.items[n]) === r
          )
            return n;
        return -1;
      }
      clearBackTo(t, r) {
        let n = this._indexOfTagNames(t, r);
        this.shortenToLength(n + 1);
      }
      clearBackToTableContext() {
        this.clearBackTo(Js, y.HTML);
      }
      clearBackToTableBodyContext() {
        this.clearBackTo($s, y.HTML);
      }
      clearBackToTableRowContext() {
        this.clearBackTo(zs, y.HTML);
      }
      remove(t) {
        let r = this._indexOf(t);
        r >= 0 &&
          (r === this.stackTop
            ? this.pop()
            : (this.items.splice(r, 1),
              this.tagIDs.splice(r, 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(t, !1)));
      }
      tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === s.BODY
          ? this.items[1]
          : null;
      }
      contains(t) {
        return this._indexOf(t) > -1;
      }
      getCommonAncestor(t) {
        let r = this._indexOf(t) - 1;
        return r >= 0 ? this.items[r] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === s.HTML;
      }
      hasInDynamicScope(t, r) {
        for (let n = this.stackTop; n >= 0; n--) {
          let u = this.tagIDs[n];
          switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
            case y.HTML: {
              if (u === t) return !0;
              if (r.has(u)) return !1;
              break;
            }
            case y.SVG: {
              if (nu.has(u)) return !1;
              break;
            }
            case y.MATHML: {
              if (ru.has(u)) return !1;
              break;
            }
          }
        }
        return !0;
      }
      hasInScope(t) {
        return this.hasInDynamicScope(t, Ht);
      }
      hasInListItemScope(t) {
        return this.hasInDynamicScope(t, js);
      }
      hasInButtonScope(t) {
        return this.hasInDynamicScope(t, Ks);
      }
      hasNumberedHeaderInScope() {
        for (let t = this.stackTop; t >= 0; t--) {
          let r = this.tagIDs[t];
          switch (this.treeAdapter.getNamespaceURI(this.items[t])) {
            case y.HTML: {
              if (ut.has(r)) return !0;
              if (Ht.has(r)) return !1;
              break;
            }
            case y.SVG: {
              if (nu.has(r)) return !1;
              break;
            }
            case y.MATHML: {
              if (ru.has(r)) return !1;
              break;
            }
          }
        }
        return !0;
      }
      hasInTableScope(t) {
        for (let r = this.stackTop; r >= 0; r--)
          if (this.treeAdapter.getNamespaceURI(this.items[r]) === y.HTML)
            switch (this.tagIDs[r]) {
              case t:
                return !0;
              case s.TABLE:
              case s.HTML:
                return !1;
            }
        return !0;
      }
      hasTableBodyContextInTableScope() {
        for (let t = this.stackTop; t >= 0; t--)
          if (this.treeAdapter.getNamespaceURI(this.items[t]) === y.HTML)
            switch (this.tagIDs[t]) {
              case s.TBODY:
              case s.THEAD:
              case s.TFOOT:
                return !0;
              case s.TABLE:
              case s.HTML:
                return !1;
            }
        return !0;
      }
      hasInSelectScope(t) {
        for (let r = this.stackTop; r >= 0; r--)
          if (this.treeAdapter.getNamespaceURI(this.items[r]) === y.HTML)
            switch (this.tagIDs[r]) {
              case t:
                return !0;
              case s.OPTION:
              case s.OPTGROUP:
                break;
              default:
                return !1;
            }
        return !0;
      }
      generateImpliedEndTags() {
        for (; uu.has(this.currentTagId); ) this.pop();
      }
      generateImpliedEndTagsThoroughly() {
        for (; tu.has(this.currentTagId); ) this.pop();
      }
      generateImpliedEndTagsWithExclusion(t) {
        for (; this.currentTagId !== t && tu.has(this.currentTagId); )
          this.pop();
      }
    };
  var _e;
  (function (e) {
    (e[(e.Marker = 0)] = "Marker"), (e[(e.Element = 1)] = "Element");
  })(_e || (_e = {}));
  var au = { type: _e.Marker },
    qt = class {
      constructor(t) {
        (this.treeAdapter = t), (this.entries = []), (this.bookmark = null);
      }
      _getNoahArkConditionCandidates(t, r) {
        let n = [],
          u = r.length,
          a = this.treeAdapter.getTagName(t),
          i = this.treeAdapter.getNamespaceURI(t);
        for (let f = 0; f < this.entries.length; f++) {
          let d = this.entries[f];
          if (d.type === _e.Marker) break;
          let { element: h } = d;
          if (
            this.treeAdapter.getTagName(h) === a &&
            this.treeAdapter.getNamespaceURI(h) === i
          ) {
            let c = this.treeAdapter.getAttrList(h);
            c.length === u && n.push({ idx: f, attrs: c });
          }
        }
        return n;
      }
      _ensureNoahArkCondition(t) {
        if (this.entries.length < 3) return;
        let r = this.treeAdapter.getAttrList(t),
          n = this._getNoahArkConditionCandidates(t, r);
        if (n.length < 3) return;
        let u = new Map(r.map((i) => [i.name, i.value])),
          a = 0;
        for (let i = 0; i < n.length; i++) {
          let f = n[i];
          f.attrs.every((d) => u.get(d.name) === d.value) &&
            ((a += 1), a >= 3 && this.entries.splice(f.idx, 1));
        }
      }
      insertMarker() {
        this.entries.unshift(au);
      }
      pushElement(t, r) {
        this._ensureNoahArkCondition(t),
          this.entries.unshift({ type: _e.Element, element: t, token: r });
      }
      insertElementAfterBookmark(t, r) {
        let n = this.entries.indexOf(this.bookmark);
        this.entries.splice(n, 0, { type: _e.Element, element: t, token: r });
      }
      removeEntry(t) {
        let r = this.entries.indexOf(t);
        r >= 0 && this.entries.splice(r, 1);
      }
      clearToLastMarker() {
        let t = this.entries.indexOf(au);
        t >= 0 ? this.entries.splice(0, t + 1) : (this.entries.length = 0);
      }
      getElementEntryInScopeWithTagName(t) {
        let r = this.entries.find(
          (n) =>
            n.type === _e.Marker ||
            this.treeAdapter.getTagName(n.element) === t,
        );
        return r && r.type === _e.Element ? r : null;
      }
      getElementEntry(t) {
        return this.entries.find(
          (r) => r.type === _e.Element && r.element === t,
        );
      }
    };
  var Te = {
    createDocument() {
      return { nodeName: "#document", mode: oe.NO_QUIRKS, childNodes: [] };
    },
    createDocumentFragment() {
      return { nodeName: "#document-fragment", childNodes: [] };
    },
    createElement(e, t, r) {
      return {
        nodeName: e,
        tagName: e,
        attrs: r,
        namespaceURI: t,
        childNodes: [],
        parentNode: null,
      };
    },
    createCommentNode(e) {
      return { nodeName: "#comment", data: e, parentNode: null };
    },
    createTextNode(e) {
      return { nodeName: "#text", value: e, parentNode: null };
    },
    appendChild(e, t) {
      e.childNodes.push(t), (t.parentNode = e);
    },
    insertBefore(e, t, r) {
      let n = e.childNodes.indexOf(r);
      e.childNodes.splice(n, 0, t), (t.parentNode = e);
    },
    setTemplateContent(e, t) {
      e.content = t;
    },
    getTemplateContent(e) {
      return e.content;
    },
    setDocumentType(e, t, r, n) {
      let u = e.childNodes.find((a) => a.nodeName === "#documentType");
      if (u) (u.name = t), (u.publicId = r), (u.systemId = n);
      else {
        let a = {
          nodeName: "#documentType",
          name: t,
          publicId: r,
          systemId: n,
          parentNode: null,
        };
        Te.appendChild(e, a);
      }
    },
    setDocumentMode(e, t) {
      e.mode = t;
    },
    getDocumentMode(e) {
      return e.mode;
    },
    detachNode(e) {
      if (e.parentNode) {
        let t = e.parentNode.childNodes.indexOf(e);
        e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
      }
    },
    insertText(e, t) {
      if (e.childNodes.length > 0) {
        let r = e.childNodes[e.childNodes.length - 1];
        if (Te.isTextNode(r)) {
          r.value += t;
          return;
        }
      }
      Te.appendChild(e, Te.createTextNode(t));
    },
    insertTextBefore(e, t, r) {
      let n = e.childNodes[e.childNodes.indexOf(r) - 1];
      n && Te.isTextNode(n)
        ? (n.value += t)
        : Te.insertBefore(e, Te.createTextNode(t), r);
    },
    adoptAttributes(e, t) {
      let r = new Set(e.attrs.map((n) => n.name));
      for (let n = 0; n < t.length; n++) r.has(t[n].name) || e.attrs.push(t[n]);
    },
    getFirstChild(e) {
      return e.childNodes[0];
    },
    getChildNodes(e) {
      return e.childNodes;
    },
    getParentNode(e) {
      return e.parentNode;
    },
    getAttrList(e) {
      return e.attrs;
    },
    getTagName(e) {
      return e.tagName;
    },
    getNamespaceURI(e) {
      return e.namespaceURI;
    },
    getTextNodeContent(e) {
      return e.value;
    },
    getCommentNodeContent(e) {
      return e.data;
    },
    getDocumentTypeNodeName(e) {
      return e.name;
    },
    getDocumentTypeNodePublicId(e) {
      return e.publicId;
    },
    getDocumentTypeNodeSystemId(e) {
      return e.systemId;
    },
    isTextNode(e) {
      return e.nodeName === "#text";
    },
    isCommentNode(e) {
      return e.nodeName === "#comment";
    },
    isDocumentTypeNode(e) {
      return e.nodeName === "#documentType";
    },
    isElementNode(e) {
      return Object.prototype.hasOwnProperty.call(e, "tagName");
    },
    setNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation(e) {
      return e.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
    },
  };
  var iu = "html",
    ei = "about:legacy-compat",
    ti = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
    ou = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//",
    ],
    ri = [
      ...ou,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//",
    ],
    ni = new Set([
      "-//w3o//dtd w3 html strict 3.0//en//",
      "-/w3c/dtd html 4.0 transitional/en",
      "html",
    ]),
    cu = [
      "-//w3c//dtd xhtml 1.0 frameset//",
      "-//w3c//dtd xhtml 1.0 transitional//",
    ],
    ui = [
      ...cu,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//",
    ];
  function su(e, t) {
    return t.some((r) => e.startsWith(r));
  }
  function lu(e) {
    return (
      e.name === iu &&
      e.publicId === null &&
      (e.systemId === null || e.systemId === ei)
    );
  }
  function du(e) {
    if (e.name !== iu) return oe.QUIRKS;
    let { systemId: t } = e;
    if (t && t.toLowerCase() === ti) return oe.QUIRKS;
    let { publicId: r } = e;
    if (r !== null) {
      if (((r = r.toLowerCase()), ni.has(r))) return oe.QUIRKS;
      let n = t === null ? ri : ou;
      if (su(r, n)) return oe.QUIRKS;
      if (((n = t === null ? cu : ui), su(r, n))) return oe.LIMITED_QUIRKS;
    }
    return oe.NO_QUIRKS;
  }
  var fu = { TEXT_HTML: "text/html", APPLICATION_XML: "application/xhtml+xml" },
    si = "definitionurl",
    ii = "definitionURL",
    oi = new Map(
      [
        "attributeName",
        "attributeType",
        "baseFrequency",
        "baseProfile",
        "calcMode",
        "clipPathUnits",
        "diffuseConstant",
        "edgeMode",
        "filterUnits",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "kernelMatrix",
        "kernelUnitLength",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "limitingConeAngle",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "maskContentUnits",
        "maskUnits",
        "numOctaves",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "refX",
        "refY",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "specularConstant",
        "specularExponent",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stitchTiles",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textLength",
        "viewBox",
        "viewTarget",
        "xChannelSelector",
        "yChannelSelector",
        "zoomAndPan",
      ].map((e) => [e.toLowerCase(), e]),
    ),
    ci = new Map([
      [
        "xlink:actuate",
        { prefix: "xlink", name: "actuate", namespace: y.XLINK },
      ],
      [
        "xlink:arcrole",
        { prefix: "xlink", name: "arcrole", namespace: y.XLINK },
      ],
      ["xlink:href", { prefix: "xlink", name: "href", namespace: y.XLINK }],
      ["xlink:role", { prefix: "xlink", name: "role", namespace: y.XLINK }],
      ["xlink:show", { prefix: "xlink", name: "show", namespace: y.XLINK }],
      ["xlink:title", { prefix: "xlink", name: "title", namespace: y.XLINK }],
      ["xlink:type", { prefix: "xlink", name: "type", namespace: y.XLINK }],
      ["xml:lang", { prefix: "xml", name: "lang", namespace: y.XML }],
      ["xml:space", { prefix: "xml", name: "space", namespace: y.XML }],
      ["xmlns", { prefix: "", name: "xmlns", namespace: y.XMLNS }],
      ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: y.XMLNS }],
    ]),
    li = new Map(
      [
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "textPath",
      ].map((e) => [e.toLowerCase(), e]),
    ),
    di = new Set([
      s.B,
      s.BIG,
      s.BLOCKQUOTE,
      s.BODY,
      s.BR,
      s.CENTER,
      s.CODE,
      s.DD,
      s.DIV,
      s.DL,
      s.DT,
      s.EM,
      s.EMBED,
      s.H1,
      s.H2,
      s.H3,
      s.H4,
      s.H5,
      s.H6,
      s.HEAD,
      s.HR,
      s.I,
      s.IMG,
      s.LI,
      s.LISTING,
      s.MENU,
      s.META,
      s.NOBR,
      s.OL,
      s.P,
      s.PRE,
      s.RUBY,
      s.S,
      s.SMALL,
      s.SPAN,
      s.STRONG,
      s.STRIKE,
      s.SUB,
      s.SUP,
      s.TABLE,
      s.TT,
      s.U,
      s.UL,
      s.VAR,
    ]);
  function hu(e) {
    let t = e.tagID;
    return (
      (t === s.FONT &&
        e.attrs.some(
          ({ name: n }) => n === xe.COLOR || n === xe.SIZE || n === xe.FACE,
        )) ||
      di.has(t)
    );
  }
  function xr(e) {
    for (let t = 0; t < e.attrs.length; t++)
      if (e.attrs[t].name === si) {
        e.attrs[t].name = ii;
        break;
      }
  }
  function Sr(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      let r = oi.get(e.attrs[t].name);
      r != null && (e.attrs[t].name = r);
    }
  }
  function Yt(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      let r = ci.get(e.attrs[t].name);
      r &&
        ((e.attrs[t].prefix = r.prefix),
        (e.attrs[t].name = r.name),
        (e.attrs[t].namespace = r.namespace));
    }
  }
  function mu(e) {
    let t = li.get(e.tagName);
    t != null && ((e.tagName = t), (e.tagID = Be(e.tagName)));
  }
  function fi(e, t) {
    return (
      t === y.MATHML &&
      (e === s.MI || e === s.MO || e === s.MN || e === s.MS || e === s.MTEXT)
    );
  }
  function hi(e, t, r) {
    if (t === y.MATHML && e === s.ANNOTATION_XML) {
      for (let n = 0; n < r.length; n++)
        if (r[n].name === xe.ENCODING) {
          let u = r[n].value.toLowerCase();
          return u === fu.TEXT_HTML || u === fu.APPLICATION_XML;
        }
    }
    return (
      t === y.SVG && (e === s.FOREIGN_OBJECT || e === s.DESC || e === s.TITLE)
    );
  }
  function Eu(e, t, r, n) {
    return (
      ((!n || n === y.HTML) && hi(e, t, r)) ||
      ((!n || n === y.MATHML) && fi(e, t))
    );
  }
  var mi = "hidden",
    Ei = 8,
    Ti = 3,
    g;
  (function (e) {
    (e[(e.INITIAL = 0)] = "INITIAL"),
      (e[(e.BEFORE_HTML = 1)] = "BEFORE_HTML"),
      (e[(e.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
      (e[(e.IN_HEAD = 3)] = "IN_HEAD"),
      (e[(e.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
      (e[(e.AFTER_HEAD = 5)] = "AFTER_HEAD"),
      (e[(e.IN_BODY = 6)] = "IN_BODY"),
      (e[(e.TEXT = 7)] = "TEXT"),
      (e[(e.IN_TABLE = 8)] = "IN_TABLE"),
      (e[(e.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
      (e[(e.IN_CAPTION = 10)] = "IN_CAPTION"),
      (e[(e.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
      (e[(e.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
      (e[(e.IN_ROW = 13)] = "IN_ROW"),
      (e[(e.IN_CELL = 14)] = "IN_CELL"),
      (e[(e.IN_SELECT = 15)] = "IN_SELECT"),
      (e[(e.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
      (e[(e.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
      (e[(e.AFTER_BODY = 18)] = "AFTER_BODY"),
      (e[(e.IN_FRAMESET = 19)] = "IN_FRAMESET"),
      (e[(e.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
      (e[(e.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
      (e[(e.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
  })(g || (g = {}));
  var pi = {
      startLine: -1,
      startCol: -1,
      startOffset: -1,
      endLine: -1,
      endCol: -1,
      endOffset: -1,
    },
    Au = new Set([s.TABLE, s.TBODY, s.TFOOT, s.THEAD, s.TR]),
    pu = {
      scriptingEnabled: !0,
      sourceCodeLocationInfo: !1,
      treeAdapter: Te,
      onParseError: null,
    },
    Qe = class {
      constructor(t, r, n = null, u = null) {
        (this.fragmentContext = n),
          (this.scriptHandler = u),
          (this.currentToken = null),
          (this.stopped = !1),
          (this.insertionMode = g.INITIAL),
          (this.originalInsertionMode = g.INITIAL),
          (this.headElement = null),
          (this.formElement = null),
          (this.currentNotInHTML = !1),
          (this.tmplInsertionModeStack = []),
          (this.pendingCharacterTokens = []),
          (this.hasNonWhitespacePendingCharacterToken = !1),
          (this.framesetOk = !0),
          (this.skipNextNewLine = !1),
          (this.fosterParentingEnabled = !1),
          (this.options = { ...pu, ...t }),
          (this.treeAdapter = this.options.treeAdapter),
          (this.onParseError = this.options.onParseError),
          this.onParseError && (this.options.sourceCodeLocationInfo = !0),
          (this.document = r ?? this.treeAdapter.createDocument()),
          (this.tokenizer = new st(this.options, this)),
          (this.activeFormattingElements = new qt(this.treeAdapter)),
          (this.fragmentContextID = n
            ? Be(this.treeAdapter.getTagName(n))
            : s.UNKNOWN),
          this._setContextModes(n ?? this.document, this.fragmentContextID),
          (this.openElements = new Ft(this.document, this.treeAdapter, this));
      }
      static parse(t, r) {
        let n = new this(r);
        return n.tokenizer.write(t, !0), n.document;
      }
      static getFragmentParser(t, r) {
        let n = { ...pu, ...r };
        t ?? (t = n.treeAdapter.createElement(C.TEMPLATE, y.HTML, []));
        let u = n.treeAdapter.createElement("documentmock", y.HTML, []),
          a = new this(n, u, t);
        return (
          a.fragmentContextID === s.TEMPLATE &&
            a.tmplInsertionModeStack.unshift(g.IN_TEMPLATE),
          a._initTokenizerForFragmentParsing(),
          a._insertFakeRootElement(),
          a._resetInsertionMode(),
          a._findFormInFragmentContext(),
          a
        );
      }
      getFragment() {
        let t = this.treeAdapter.getFirstChild(this.document),
          r = this.treeAdapter.createDocumentFragment();
        return this._adoptNodes(t, r), r;
      }
      _err(t, r, n) {
        var u;
        if (!this.onParseError) return;
        let a = (u = t.location) !== null && u !== void 0 ? u : pi,
          i = {
            code: r,
            startLine: a.startLine,
            startCol: a.startCol,
            startOffset: a.startOffset,
            endLine: n ? a.startLine : a.endLine,
            endCol: n ? a.startCol : a.endCol,
            endOffset: n ? a.startOffset : a.endOffset,
          };
        this.onParseError(i);
      }
      onItemPush(t, r, n) {
        var u, a;
        (a = (u = this.treeAdapter).onItemPush) === null ||
          a === void 0 ||
          a.call(u, t),
          n && this.openElements.stackTop > 0 && this._setContextModes(t, r);
      }
      onItemPop(t, r) {
        var n, u;
        if (
          (this.options.sourceCodeLocationInfo &&
            this._setEndLocation(t, this.currentToken),
          (u = (n = this.treeAdapter).onItemPop) === null ||
            u === void 0 ||
            u.call(n, t, this.openElements.current),
          r)
        ) {
          let a, i;
          this.openElements.stackTop === 0 && this.fragmentContext
            ? ((a = this.fragmentContext), (i = this.fragmentContextID))
            : ({ current: a, currentTagId: i } = this.openElements),
            this._setContextModes(a, i);
        }
      }
      _setContextModes(t, r) {
        let n =
          t === this.document || this.treeAdapter.getNamespaceURI(t) === y.HTML;
        (this.currentNotInHTML = !n),
          (this.tokenizer.inForeignNode =
            !n && !this._isIntegrationPoint(r, t));
      }
      _switchToTextParsing(t, r) {
        this._insertElement(t, y.HTML),
          (this.tokenizer.state = r),
          (this.originalInsertionMode = this.insertionMode),
          (this.insertionMode = g.TEXT);
      }
      switchToPlaintextParsing() {
        (this.insertionMode = g.TEXT),
          (this.originalInsertionMode = g.IN_BODY),
          (this.tokenizer.state = ue.PLAINTEXT);
      }
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext
          ? this.fragmentContext
          : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let t = this.fragmentContext;
        for (; t; ) {
          if (this.treeAdapter.getTagName(t) === C.FORM) {
            this.formElement = t;
            break;
          }
          t = this.treeAdapter.getParentNode(t);
        }
      }
      _initTokenizerForFragmentParsing() {
        if (
          !(
            !this.fragmentContext ||
            this.treeAdapter.getNamespaceURI(this.fragmentContext) !== y.HTML
          )
        )
          switch (this.fragmentContextID) {
            case s.TITLE:
            case s.TEXTAREA: {
              this.tokenizer.state = ue.RCDATA;
              break;
            }
            case s.STYLE:
            case s.XMP:
            case s.IFRAME:
            case s.NOEMBED:
            case s.NOFRAMES:
            case s.NOSCRIPT: {
              this.tokenizer.state = ue.RAWTEXT;
              break;
            }
            case s.SCRIPT: {
              this.tokenizer.state = ue.SCRIPT_DATA;
              break;
            }
            case s.PLAINTEXT: {
              this.tokenizer.state = ue.PLAINTEXT;
              break;
            }
            default:
          }
      }
      _setDocumentType(t) {
        let r = t.name || "",
          n = t.publicId || "",
          u = t.systemId || "";
        if (
          (this.treeAdapter.setDocumentType(this.document, r, n, u), t.location)
        ) {
          let i = this.treeAdapter
            .getChildNodes(this.document)
            .find((f) => this.treeAdapter.isDocumentTypeNode(f));
          i && this.treeAdapter.setNodeSourceCodeLocation(i, t.location);
        }
      }
      _attachElementToTree(t, r) {
        if (this.options.sourceCodeLocationInfo) {
          let n = r && { ...r, startTag: r };
          this.treeAdapter.setNodeSourceCodeLocation(t, n);
        }
        if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(t);
        else {
          let n = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.appendChild(n, t);
        }
      }
      _appendElement(t, r) {
        let n = this.treeAdapter.createElement(t.tagName, r, t.attrs);
        this._attachElementToTree(n, t.location);
      }
      _insertElement(t, r) {
        let n = this.treeAdapter.createElement(t.tagName, r, t.attrs);
        this._attachElementToTree(n, t.location),
          this.openElements.push(n, t.tagID);
      }
      _insertFakeElement(t, r) {
        let n = this.treeAdapter.createElement(t, y.HTML, []);
        this._attachElementToTree(n, null), this.openElements.push(n, r);
      }
      _insertTemplate(t) {
        let r = this.treeAdapter.createElement(t.tagName, y.HTML, t.attrs),
          n = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(r, n),
          this._attachElementToTree(r, t.location),
          this.openElements.push(r, t.tagID),
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(n, null);
      }
      _insertFakeRootElement() {
        let t = this.treeAdapter.createElement(C.HTML, y.HTML, []);
        this.options.sourceCodeLocationInfo &&
          this.treeAdapter.setNodeSourceCodeLocation(t, null),
          this.treeAdapter.appendChild(this.openElements.current, t),
          this.openElements.push(t, s.HTML);
      }
      _appendCommentNode(t, r) {
        let n = this.treeAdapter.createCommentNode(t.data);
        this.treeAdapter.appendChild(r, n),
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(n, t.location);
      }
      _insertCharacters(t) {
        let r, n;
        if (
          (this._shouldFosterParentOnInsertion()
            ? (({ parent: r, beforeElement: n } =
                this._findFosterParentingLocation()),
              n
                ? this.treeAdapter.insertTextBefore(r, t.chars, n)
                : this.treeAdapter.insertText(r, t.chars))
            : ((r = this.openElements.currentTmplContentOrNode),
              this.treeAdapter.insertText(r, t.chars)),
          !t.location)
        )
          return;
        let u = this.treeAdapter.getChildNodes(r),
          a = n ? u.lastIndexOf(n) : u.length,
          i = u[a - 1];
        if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
          let { endLine: d, endCol: h, endOffset: c } = t.location;
          this.treeAdapter.updateNodeSourceCodeLocation(i, {
            endLine: d,
            endCol: h,
            endOffset: c,
          });
        } else
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(i, t.location);
      }
      _adoptNodes(t, r) {
        for (
          let n = this.treeAdapter.getFirstChild(t);
          n;
          n = this.treeAdapter.getFirstChild(t)
        )
          this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(r, n);
      }
      _setEndLocation(t, r) {
        if (this.treeAdapter.getNodeSourceCodeLocation(t) && r.location) {
          let n = r.location,
            u = this.treeAdapter.getTagName(t),
            a =
              r.type === V.END_TAG && u === r.tagName
                ? {
                    endTag: { ...n },
                    endLine: n.endLine,
                    endCol: n.endCol,
                    endOffset: n.endOffset,
                  }
                : {
                    endLine: n.startLine,
                    endCol: n.startCol,
                    endOffset: n.startOffset,
                  };
          this.treeAdapter.updateNodeSourceCodeLocation(t, a);
        }
      }
      shouldProcessStartTagTokenInForeignContent(t) {
        if (!this.currentNotInHTML) return !1;
        let r, n;
        return (
          this.openElements.stackTop === 0 && this.fragmentContext
            ? ((r = this.fragmentContext), (n = this.fragmentContextID))
            : ({ current: r, currentTagId: n } = this.openElements),
          t.tagID === s.SVG &&
          this.treeAdapter.getTagName(r) === C.ANNOTATION_XML &&
          this.treeAdapter.getNamespaceURI(r) === y.MATHML
            ? !1
            : this.tokenizer.inForeignNode ||
              ((t.tagID === s.MGLYPH || t.tagID === s.MALIGNMARK) &&
                !this._isIntegrationPoint(n, r, y.HTML))
        );
      }
      _processToken(t) {
        switch (t.type) {
          case V.CHARACTER: {
            this.onCharacter(t);
            break;
          }
          case V.NULL_CHARACTER: {
            this.onNullCharacter(t);
            break;
          }
          case V.COMMENT: {
            this.onComment(t);
            break;
          }
          case V.DOCTYPE: {
            this.onDoctype(t);
            break;
          }
          case V.START_TAG: {
            this._processStartTag(t);
            break;
          }
          case V.END_TAG: {
            this.onEndTag(t);
            break;
          }
          case V.EOF: {
            this.onEof(t);
            break;
          }
          case V.WHITESPACE_CHARACTER: {
            this.onWhitespaceCharacter(t);
            break;
          }
        }
      }
      _isIntegrationPoint(t, r, n) {
        let u = this.treeAdapter.getNamespaceURI(r),
          a = this.treeAdapter.getAttrList(r);
        return Eu(t, u, a, n);
      }
      _reconstructActiveFormattingElements() {
        let t = this.activeFormattingElements.entries.length;
        if (t) {
          let r = this.activeFormattingElements.entries.findIndex(
              (u) =>
                u.type === _e.Marker || this.openElements.contains(u.element),
            ),
            n = r < 0 ? t - 1 : r - 1;
          for (let u = n; u >= 0; u--) {
            let a = this.activeFormattingElements.entries[u];
            this._insertElement(
              a.token,
              this.treeAdapter.getNamespaceURI(a.element),
            ),
              (a.element = this.openElements.current);
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags(),
          this.openElements.popUntilTableCellPopped(),
          this.activeFormattingElements.clearToLastMarker(),
          (this.insertionMode = g.IN_ROW);
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(s.P),
          this.openElements.popUntilTagNamePopped(s.P);
      }
      _resetInsertionMode() {
        for (let t = this.openElements.stackTop; t >= 0; t--)
          switch (
            t === 0 && this.fragmentContext
              ? this.fragmentContextID
              : this.openElements.tagIDs[t]
          ) {
            case s.TR: {
              this.insertionMode = g.IN_ROW;
              return;
            }
            case s.TBODY:
            case s.THEAD:
            case s.TFOOT: {
              this.insertionMode = g.IN_TABLE_BODY;
              return;
            }
            case s.CAPTION: {
              this.insertionMode = g.IN_CAPTION;
              return;
            }
            case s.COLGROUP: {
              this.insertionMode = g.IN_COLUMN_GROUP;
              return;
            }
            case s.TABLE: {
              this.insertionMode = g.IN_TABLE;
              return;
            }
            case s.BODY: {
              this.insertionMode = g.IN_BODY;
              return;
            }
            case s.FRAMESET: {
              this.insertionMode = g.IN_FRAMESET;
              return;
            }
            case s.SELECT: {
              this._resetInsertionModeForSelect(t);
              return;
            }
            case s.TEMPLATE: {
              this.insertionMode = this.tmplInsertionModeStack[0];
              return;
            }
            case s.HTML: {
              this.insertionMode = this.headElement
                ? g.AFTER_HEAD
                : g.BEFORE_HEAD;
              return;
            }
            case s.TD:
            case s.TH: {
              if (t > 0) {
                this.insertionMode = g.IN_CELL;
                return;
              }
              break;
            }
            case s.HEAD: {
              if (t > 0) {
                this.insertionMode = g.IN_HEAD;
                return;
              }
              break;
            }
          }
        this.insertionMode = g.IN_BODY;
      }
      _resetInsertionModeForSelect(t) {
        if (t > 0)
          for (let r = t - 1; r > 0; r--) {
            let n = this.openElements.tagIDs[r];
            if (n === s.TEMPLATE) break;
            if (n === s.TABLE) {
              this.insertionMode = g.IN_SELECT_IN_TABLE;
              return;
            }
          }
        this.insertionMode = g.IN_SELECT;
      }
      _isElementCausesFosterParenting(t) {
        return Au.has(t);
      }
      _shouldFosterParentOnInsertion() {
        return (
          this.fosterParentingEnabled &&
          this._isElementCausesFosterParenting(this.openElements.currentTagId)
        );
      }
      _findFosterParentingLocation() {
        for (let t = this.openElements.stackTop; t >= 0; t--) {
          let r = this.openElements.items[t];
          switch (this.openElements.tagIDs[t]) {
            case s.TEMPLATE: {
              if (this.treeAdapter.getNamespaceURI(r) === y.HTML)
                return {
                  parent: this.treeAdapter.getTemplateContent(r),
                  beforeElement: null,
                };
              break;
            }
            case s.TABLE: {
              let n = this.treeAdapter.getParentNode(r);
              return n
                ? { parent: n, beforeElement: r }
                : {
                    parent: this.openElements.items[t - 1],
                    beforeElement: null,
                  };
            }
            default:
          }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
      }
      _fosterParentElement(t) {
        let r = this._findFosterParentingLocation();
        r.beforeElement
          ? this.treeAdapter.insertBefore(r.parent, t, r.beforeElement)
          : this.treeAdapter.appendChild(r.parent, t);
      }
      _isSpecialElement(t, r) {
        let n = this.treeAdapter.getNamespaceURI(t);
        return zn[n].has(r);
      }
      onCharacter(t) {
        if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
          jo(this, t);
          return;
        }
        switch (this.insertionMode) {
          case g.INITIAL: {
            it(this, t);
            break;
          }
          case g.BEFORE_HTML: {
            ct(this, t);
            break;
          }
          case g.BEFORE_HEAD: {
            lt(this, t);
            break;
          }
          case g.IN_HEAD: {
            dt(this, t);
            break;
          }
          case g.IN_HEAD_NO_SCRIPT: {
            ft(this, t);
            break;
          }
          case g.AFTER_HEAD: {
            ht(this, t);
            break;
          }
          case g.IN_BODY:
          case g.IN_CAPTION:
          case g.IN_CELL:
          case g.IN_TEMPLATE: {
            ku(this, t);
            break;
          }
          case g.TEXT:
          case g.IN_SELECT:
          case g.IN_SELECT_IN_TABLE: {
            this._insertCharacters(t);
            break;
          }
          case g.IN_TABLE:
          case g.IN_TABLE_BODY:
          case g.IN_ROW: {
            Or(this, t);
            break;
          }
          case g.IN_TABLE_TEXT: {
            Su(this, t);
            break;
          }
          case g.IN_COLUMN_GROUP: {
            Gt(this, t);
            break;
          }
          case g.AFTER_BODY: {
            Wt(this, t);
            break;
          }
          case g.AFTER_AFTER_BODY: {
            Vt(this, t);
            break;
          }
          default:
        }
      }
      onNullCharacter(t) {
        if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
          Qo(this, t);
          return;
        }
        switch (this.insertionMode) {
          case g.INITIAL: {
            it(this, t);
            break;
          }
          case g.BEFORE_HTML: {
            ct(this, t);
            break;
          }
          case g.BEFORE_HEAD: {
            lt(this, t);
            break;
          }
          case g.IN_HEAD: {
            dt(this, t);
            break;
          }
          case g.IN_HEAD_NO_SCRIPT: {
            ft(this, t);
            break;
          }
          case g.AFTER_HEAD: {
            ht(this, t);
            break;
          }
          case g.TEXT: {
            this._insertCharacters(t);
            break;
          }
          case g.IN_TABLE:
          case g.IN_TABLE_BODY:
          case g.IN_ROW: {
            Or(this, t);
            break;
          }
          case g.IN_COLUMN_GROUP: {
            Gt(this, t);
            break;
          }
          case g.AFTER_BODY: {
            Wt(this, t);
            break;
          }
          case g.AFTER_AFTER_BODY: {
            Vt(this, t);
            break;
          }
          default:
        }
      }
      onComment(t) {
        if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
          yr(this, t);
          return;
        }
        switch (this.insertionMode) {
          case g.INITIAL:
          case g.BEFORE_HTML:
          case g.BEFORE_HEAD:
          case g.IN_HEAD:
          case g.IN_HEAD_NO_SCRIPT:
          case g.AFTER_HEAD:
          case g.IN_BODY:
          case g.IN_TABLE:
          case g.IN_CAPTION:
          case g.IN_COLUMN_GROUP:
          case g.IN_TABLE_BODY:
          case g.IN_ROW:
          case g.IN_CELL:
          case g.IN_SELECT:
          case g.IN_SELECT_IN_TABLE:
          case g.IN_TEMPLATE:
          case g.IN_FRAMESET:
          case g.AFTER_FRAMESET: {
            yr(this, t);
            break;
          }
          case g.IN_TABLE_TEXT: {
            ot(this, t);
            break;
          }
          case g.AFTER_BODY: {
            Ii(this, t);
            break;
          }
          case g.AFTER_AFTER_BODY:
          case g.AFTER_AFTER_FRAMESET: {
            Ni(this, t);
            break;
          }
          default:
        }
      }
      onDoctype(t) {
        switch (((this.skipNextNewLine = !1), this.insertionMode)) {
          case g.INITIAL: {
            Li(this, t);
            break;
          }
          case g.BEFORE_HEAD:
          case g.IN_HEAD:
          case g.IN_HEAD_NO_SCRIPT:
          case g.AFTER_HEAD: {
            this._err(t, x.misplacedDoctype);
            break;
          }
          case g.IN_TABLE_TEXT: {
            ot(this, t);
            break;
          }
          default:
        }
      }
      onStartTag(t) {
        (this.skipNextNewLine = !1),
          (this.currentToken = t),
          this._processStartTag(t),
          t.selfClosing &&
            !t.ackSelfClosing &&
            this._err(t, x.nonVoidHtmlElementStartTagWithTrailingSolidus);
      }
      _processStartTag(t) {
        this.shouldProcessStartTagTokenInForeignContent(t)
          ? Ko(this, t)
          : this._startTagOutsideForeignContent(t);
      }
      _startTagOutsideForeignContent(t) {
        switch (this.insertionMode) {
          case g.INITIAL: {
            it(this, t);
            break;
          }
          case g.BEFORE_HTML: {
            xi(this, t);
            break;
          }
          case g.BEFORE_HEAD: {
            Oi(this, t);
            break;
          }
          case g.IN_HEAD: {
            ke(this, t);
            break;
          }
          case g.IN_HEAD_NO_SCRIPT: {
            Ri(this, t);
            break;
          }
          case g.AFTER_HEAD: {
            Pi(this, t);
            break;
          }
          case g.IN_BODY: {
            ae(this, t);
            break;
          }
          case g.IN_TABLE: {
            je(this, t);
            break;
          }
          case g.IN_TABLE_TEXT: {
            ot(this, t);
            break;
          }
          case g.IN_CAPTION: {
            Do(this, t);
            break;
          }
          case g.IN_COLUMN_GROUP: {
            Pr(this, t);
            break;
          }
          case g.IN_TABLE_BODY: {
            jt(this, t);
            break;
          }
          case g.IN_ROW: {
            Kt(this, t);
            break;
          }
          case g.IN_CELL: {
            Po(this, t);
            break;
          }
          case g.IN_SELECT: {
            Du(this, t);
            break;
          }
          case g.IN_SELECT_IN_TABLE: {
            vo(this, t);
            break;
          }
          case g.IN_TEMPLATE: {
            Uo(this, t);
            break;
          }
          case g.AFTER_BODY: {
            Fo(this, t);
            break;
          }
          case g.IN_FRAMESET: {
            qo(this, t);
            break;
          }
          case g.AFTER_FRAMESET: {
            Vo(this, t);
            break;
          }
          case g.AFTER_AFTER_BODY: {
            Wo(this, t);
            break;
          }
          case g.AFTER_AFTER_FRAMESET: {
            Xo(this, t);
            break;
          }
          default:
        }
      }
      onEndTag(t) {
        (this.skipNextNewLine = !1),
          (this.currentToken = t),
          this.currentNotInHTML
            ? zo(this, t)
            : this._endTagOutsideForeignContent(t);
      }
      _endTagOutsideForeignContent(t) {
        switch (this.insertionMode) {
          case g.INITIAL: {
            it(this, t);
            break;
          }
          case g.BEFORE_HTML: {
            Si(this, t);
            break;
          }
          case g.BEFORE_HEAD: {
            yi(this, t);
            break;
          }
          case g.IN_HEAD: {
            Di(this, t);
            break;
          }
          case g.IN_HEAD_NO_SCRIPT: {
            wi(this, t);
            break;
          }
          case g.AFTER_HEAD: {
            Mi(this, t);
            break;
          }
          case g.IN_BODY: {
            Qt(this, t);
            break;
          }
          case g.TEXT: {
            _o(this, t);
            break;
          }
          case g.IN_TABLE: {
            mt(this, t);
            break;
          }
          case g.IN_TABLE_TEXT: {
            ot(this, t);
            break;
          }
          case g.IN_CAPTION: {
            Ro(this, t);
            break;
          }
          case g.IN_COLUMN_GROUP: {
            wo(this, t);
            break;
          }
          case g.IN_TABLE_BODY: {
            Dr(this, t);
            break;
          }
          case g.IN_ROW: {
            yu(this, t);
            break;
          }
          case g.IN_CELL: {
            Mo(this, t);
            break;
          }
          case g.IN_SELECT: {
            Ru(this, t);
            break;
          }
          case g.IN_SELECT_IN_TABLE: {
            Bo(this, t);
            break;
          }
          case g.IN_TEMPLATE: {
            Ho(this, t);
            break;
          }
          case g.AFTER_BODY: {
            Pu(this, t);
            break;
          }
          case g.IN_FRAMESET: {
            Yo(this, t);
            break;
          }
          case g.AFTER_FRAMESET: {
            Go(this, t);
            break;
          }
          case g.AFTER_AFTER_BODY: {
            Vt(this, t);
            break;
          }
          default:
        }
      }
      onEof(t) {
        switch (this.insertionMode) {
          case g.INITIAL: {
            it(this, t);
            break;
          }
          case g.BEFORE_HTML: {
            ct(this, t);
            break;
          }
          case g.BEFORE_HEAD: {
            lt(this, t);
            break;
          }
          case g.IN_HEAD: {
            dt(this, t);
            break;
          }
          case g.IN_HEAD_NO_SCRIPT: {
            ft(this, t);
            break;
          }
          case g.AFTER_HEAD: {
            ht(this, t);
            break;
          }
          case g.IN_BODY:
          case g.IN_TABLE:
          case g.IN_CAPTION:
          case g.IN_COLUMN_GROUP:
          case g.IN_TABLE_BODY:
          case g.IN_ROW:
          case g.IN_CELL:
          case g.IN_SELECT:
          case g.IN_SELECT_IN_TABLE: {
            Lu(this, t);
            break;
          }
          case g.TEXT: {
            ko(this, t);
            break;
          }
          case g.IN_TABLE_TEXT: {
            ot(this, t);
            break;
          }
          case g.IN_TEMPLATE: {
            wu(this, t);
            break;
          }
          case g.AFTER_BODY:
          case g.IN_FRAMESET:
          case g.AFTER_FRAMESET:
          case g.AFTER_AFTER_BODY:
          case g.AFTER_AFTER_FRAMESET: {
            wr(this, t);
            break;
          }
          default:
        }
      }
      onWhitespaceCharacter(t) {
        if (
          this.skipNextNewLine &&
          ((this.skipNextNewLine = !1), t.chars.charCodeAt(0) === E.LINE_FEED)
        ) {
          if (t.chars.length === 1) return;
          t.chars = t.chars.substr(1);
        }
        if (this.tokenizer.inForeignNode) {
          this._insertCharacters(t);
          return;
        }
        switch (this.insertionMode) {
          case g.IN_HEAD:
          case g.IN_HEAD_NO_SCRIPT:
          case g.AFTER_HEAD:
          case g.TEXT:
          case g.IN_COLUMN_GROUP:
          case g.IN_SELECT:
          case g.IN_SELECT_IN_TABLE:
          case g.IN_FRAMESET:
          case g.AFTER_FRAMESET: {
            this._insertCharacters(t);
            break;
          }
          case g.IN_BODY:
          case g.IN_CAPTION:
          case g.IN_CELL:
          case g.IN_TEMPLATE:
          case g.AFTER_BODY:
          case g.AFTER_AFTER_BODY:
          case g.AFTER_AFTER_FRAMESET: {
            _u(this, t);
            break;
          }
          case g.IN_TABLE:
          case g.IN_TABLE_BODY:
          case g.IN_ROW: {
            Or(this, t);
            break;
          }
          case g.IN_TABLE_TEXT: {
            xu(this, t);
            break;
          }
          default:
        }
      }
    };
  function bi(e, t) {
    let r = e.activeFormattingElements.getElementEntryInScopeWithTagName(
      t.tagName,
    );
    return (
      r
        ? e.openElements.contains(r.element)
          ? e.openElements.hasInScope(t.tagID) || (r = null)
          : (e.activeFormattingElements.removeEntry(r), (r = null))
        : Nu(e, t),
      r
    );
  }
  function gi(e, t) {
    let r = null,
      n = e.openElements.stackTop;
    for (; n >= 0; n--) {
      let u = e.openElements.items[n];
      if (u === t.element) break;
      e._isSpecialElement(u, e.openElements.tagIDs[n]) && (r = u);
    }
    return (
      r ||
        (e.openElements.shortenToLength(n < 0 ? 0 : n),
        e.activeFormattingElements.removeEntry(t)),
      r
    );
  }
  function Ai(e, t, r) {
    let n = t,
      u = e.openElements.getCommonAncestor(t);
    for (let a = 0, i = u; i !== r; a++, i = u) {
      u = e.openElements.getCommonAncestor(i);
      let f = e.activeFormattingElements.getElementEntry(i),
        d = f && a >= Ti;
      !f || d
        ? (d && e.activeFormattingElements.removeEntry(f),
          e.openElements.remove(i))
        : ((i = _i(e, f)),
          n === t && (e.activeFormattingElements.bookmark = f),
          e.treeAdapter.detachNode(n),
          e.treeAdapter.appendChild(i, n),
          (n = i));
    }
    return n;
  }
  function _i(e, t) {
    let r = e.treeAdapter.getNamespaceURI(t.element),
      n = e.treeAdapter.createElement(t.token.tagName, r, t.token.attrs);
    return e.openElements.replace(t.element, n), (t.element = n), n;
  }
  function ki(e, t, r) {
    let n = e.treeAdapter.getTagName(t),
      u = Be(n);
    if (e._isElementCausesFosterParenting(u)) e._fosterParentElement(r);
    else {
      let a = e.treeAdapter.getNamespaceURI(t);
      u === s.TEMPLATE &&
        a === y.HTML &&
        (t = e.treeAdapter.getTemplateContent(t)),
        e.treeAdapter.appendChild(t, r);
    }
  }
  function Ci(e, t, r) {
    let n = e.treeAdapter.getNamespaceURI(r.element),
      { token: u } = r,
      a = e.treeAdapter.createElement(u.tagName, n, u.attrs);
    e._adoptNodes(t, a),
      e.treeAdapter.appendChild(t, a),
      e.activeFormattingElements.insertElementAfterBookmark(a, u),
      e.activeFormattingElements.removeEntry(r),
      e.openElements.remove(r.element),
      e.openElements.insertAfter(t, a, u.tagID);
  }
  function Rr(e, t) {
    for (let r = 0; r < Ei; r++) {
      let n = bi(e, t);
      if (!n) break;
      let u = gi(e, n);
      if (!u) break;
      e.activeFormattingElements.bookmark = n;
      let a = Ai(e, u, n.element),
        i = e.openElements.getCommonAncestor(n.element);
      e.treeAdapter.detachNode(a), i && ki(e, i, a), Ci(e, u, n);
    }
  }
  function yr(e, t) {
    e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
  }
  function Ii(e, t) {
    e._appendCommentNode(t, e.openElements.items[0]);
  }
  function Ni(e, t) {
    e._appendCommentNode(t, e.document);
  }
  function wr(e, t) {
    if (((e.stopped = !0), t.location)) {
      let r = e.fragmentContext ? 0 : 2;
      for (let n = e.openElements.stackTop; n >= r; n--)
        e._setEndLocation(e.openElements.items[n], t);
      if (!e.fragmentContext && e.openElements.stackTop >= 0) {
        let n = e.openElements.items[0],
          u = e.treeAdapter.getNodeSourceCodeLocation(n);
        if (
          u &&
          !u.endTag &&
          (e._setEndLocation(n, t), e.openElements.stackTop >= 1)
        ) {
          let a = e.openElements.items[1],
            i = e.treeAdapter.getNodeSourceCodeLocation(a);
          i && !i.endTag && e._setEndLocation(a, t);
        }
      }
    }
  }
  function Li(e, t) {
    e._setDocumentType(t);
    let r = t.forceQuirks ? oe.QUIRKS : du(t);
    lu(t) || e._err(t, x.nonConformingDoctype),
      e.treeAdapter.setDocumentMode(e.document, r),
      (e.insertionMode = g.BEFORE_HTML);
  }
  function it(e, t) {
    e._err(t, x.missingDoctype, !0),
      e.treeAdapter.setDocumentMode(e.document, oe.QUIRKS),
      (e.insertionMode = g.BEFORE_HTML),
      e._processToken(t);
  }
  function xi(e, t) {
    t.tagID === s.HTML
      ? (e._insertElement(t, y.HTML), (e.insertionMode = g.BEFORE_HEAD))
      : ct(e, t);
  }
  function Si(e, t) {
    let r = t.tagID;
    (r === s.HTML || r === s.HEAD || r === s.BODY || r === s.BR) && ct(e, t);
  }
  function ct(e, t) {
    e._insertFakeRootElement(),
      (e.insertionMode = g.BEFORE_HEAD),
      e._processToken(t);
  }
  function Oi(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.HEAD: {
        e._insertElement(t, y.HTML),
          (e.headElement = e.openElements.current),
          (e.insertionMode = g.IN_HEAD);
        break;
      }
      default:
        lt(e, t);
    }
  }
  function yi(e, t) {
    let r = t.tagID;
    r === s.HEAD || r === s.BODY || r === s.HTML || r === s.BR
      ? lt(e, t)
      : e._err(t, x.endTagWithoutMatchingOpenElement);
  }
  function lt(e, t) {
    e._insertFakeElement(C.HEAD, s.HEAD),
      (e.headElement = e.openElements.current),
      (e.insertionMode = g.IN_HEAD),
      e._processToken(t);
  }
  function ke(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.BASE:
      case s.BASEFONT:
      case s.BGSOUND:
      case s.LINK:
      case s.META: {
        e._appendElement(t, y.HTML), (t.ackSelfClosing = !0);
        break;
      }
      case s.TITLE: {
        e._switchToTextParsing(t, ue.RCDATA);
        break;
      }
      case s.NOSCRIPT: {
        e.options.scriptingEnabled
          ? e._switchToTextParsing(t, ue.RAWTEXT)
          : (e._insertElement(t, y.HTML),
            (e.insertionMode = g.IN_HEAD_NO_SCRIPT));
        break;
      }
      case s.NOFRAMES:
      case s.STYLE: {
        e._switchToTextParsing(t, ue.RAWTEXT);
        break;
      }
      case s.SCRIPT: {
        e._switchToTextParsing(t, ue.SCRIPT_DATA);
        break;
      }
      case s.TEMPLATE: {
        e._insertTemplate(t),
          e.activeFormattingElements.insertMarker(),
          (e.framesetOk = !1),
          (e.insertionMode = g.IN_TEMPLATE),
          e.tmplInsertionModeStack.unshift(g.IN_TEMPLATE);
        break;
      }
      case s.HEAD: {
        e._err(t, x.misplacedStartTagForHeadElement);
        break;
      }
      default:
        dt(e, t);
    }
  }
  function Di(e, t) {
    switch (t.tagID) {
      case s.HEAD: {
        e.openElements.pop(), (e.insertionMode = g.AFTER_HEAD);
        break;
      }
      case s.BODY:
      case s.BR:
      case s.HTML: {
        dt(e, t);
        break;
      }
      case s.TEMPLATE: {
        Ue(e, t);
        break;
      }
      default:
        e._err(t, x.endTagWithoutMatchingOpenElement);
    }
  }
  function Ue(e, t) {
    e.openElements.tmplCount > 0
      ? (e.openElements.generateImpliedEndTagsThoroughly(),
        e.openElements.currentTagId !== s.TEMPLATE &&
          e._err(t, x.closingOfElementWithOpenChildElements),
        e.openElements.popUntilTagNamePopped(s.TEMPLATE),
        e.activeFormattingElements.clearToLastMarker(),
        e.tmplInsertionModeStack.shift(),
        e._resetInsertionMode())
      : e._err(t, x.endTagWithoutMatchingOpenElement);
  }
  function dt(e, t) {
    e.openElements.pop(), (e.insertionMode = g.AFTER_HEAD), e._processToken(t);
  }
  function Ri(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.BASEFONT:
      case s.BGSOUND:
      case s.HEAD:
      case s.LINK:
      case s.META:
      case s.NOFRAMES:
      case s.STYLE: {
        ke(e, t);
        break;
      }
      case s.NOSCRIPT: {
        e._err(t, x.nestedNoscriptInHead);
        break;
      }
      default:
        ft(e, t);
    }
  }
  function wi(e, t) {
    switch (t.tagID) {
      case s.NOSCRIPT: {
        e.openElements.pop(), (e.insertionMode = g.IN_HEAD);
        break;
      }
      case s.BR: {
        ft(e, t);
        break;
      }
      default:
        e._err(t, x.endTagWithoutMatchingOpenElement);
    }
  }
  function ft(e, t) {
    let r =
      t.type === V.EOF
        ? x.openElementsLeftAfterEof
        : x.disallowedContentInNoscriptInHead;
    e._err(t, r),
      e.openElements.pop(),
      (e.insertionMode = g.IN_HEAD),
      e._processToken(t);
  }
  function Pi(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.BODY: {
        e._insertElement(t, y.HTML),
          (e.framesetOk = !1),
          (e.insertionMode = g.IN_BODY);
        break;
      }
      case s.FRAMESET: {
        e._insertElement(t, y.HTML), (e.insertionMode = g.IN_FRAMESET);
        break;
      }
      case s.BASE:
      case s.BASEFONT:
      case s.BGSOUND:
      case s.LINK:
      case s.META:
      case s.NOFRAMES:
      case s.SCRIPT:
      case s.STYLE:
      case s.TEMPLATE:
      case s.TITLE: {
        e._err(t, x.abandonedHeadElementChild),
          e.openElements.push(e.headElement, s.HEAD),
          ke(e, t),
          e.openElements.remove(e.headElement);
        break;
      }
      case s.HEAD: {
        e._err(t, x.misplacedStartTagForHeadElement);
        break;
      }
      default:
        ht(e, t);
    }
  }
  function Mi(e, t) {
    switch (t.tagID) {
      case s.BODY:
      case s.HTML:
      case s.BR: {
        ht(e, t);
        break;
      }
      case s.TEMPLATE: {
        Ue(e, t);
        break;
      }
      default:
        e._err(t, x.endTagWithoutMatchingOpenElement);
    }
  }
  function ht(e, t) {
    e._insertFakeElement(C.BODY, s.BODY),
      (e.insertionMode = g.IN_BODY),
      Xt(e, t);
  }
  function Xt(e, t) {
    switch (t.type) {
      case V.CHARACTER: {
        ku(e, t);
        break;
      }
      case V.WHITESPACE_CHARACTER: {
        _u(e, t);
        break;
      }
      case V.COMMENT: {
        yr(e, t);
        break;
      }
      case V.START_TAG: {
        ae(e, t);
        break;
      }
      case V.END_TAG: {
        Qt(e, t);
        break;
      }
      case V.EOF: {
        Lu(e, t);
        break;
      }
      default:
    }
  }
  function _u(e, t) {
    e._reconstructActiveFormattingElements(), e._insertCharacters(t);
  }
  function ku(e, t) {
    e._reconstructActiveFormattingElements(),
      e._insertCharacters(t),
      (e.framesetOk = !1);
  }
  function vi(e, t) {
    e.openElements.tmplCount === 0 &&
      e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
  }
  function Bi(e, t) {
    let r = e.openElements.tryPeekProperlyNestedBodyElement();
    r &&
      e.openElements.tmplCount === 0 &&
      ((e.framesetOk = !1), e.treeAdapter.adoptAttributes(r, t.attrs));
  }
  function Ui(e, t) {
    let r = e.openElements.tryPeekProperlyNestedBodyElement();
    e.framesetOk &&
      r &&
      (e.treeAdapter.detachNode(r),
      e.openElements.popAllUpToHtmlElement(),
      e._insertElement(t, y.HTML),
      (e.insertionMode = g.IN_FRAMESET));
  }
  function Hi(e, t) {
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._insertElement(t, y.HTML);
  }
  function Fi(e, t) {
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      ut.has(e.openElements.currentTagId) && e.openElements.pop(),
      e._insertElement(t, y.HTML);
  }
  function qi(e, t) {
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._insertElement(t, y.HTML),
      (e.skipNextNewLine = !0),
      (e.framesetOk = !1);
  }
  function Yi(e, t) {
    let r = e.openElements.tmplCount > 0;
    (!e.formElement || r) &&
      (e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._insertElement(t, y.HTML),
      r || (e.formElement = e.openElements.current));
  }
  function Vi(e, t) {
    e.framesetOk = !1;
    let r = t.tagID;
    for (let n = e.openElements.stackTop; n >= 0; n--) {
      let u = e.openElements.tagIDs[n];
      if (
        (r === s.LI && u === s.LI) ||
        ((r === s.DD || r === s.DT) && (u === s.DD || u === s.DT))
      ) {
        e.openElements.generateImpliedEndTagsWithExclusion(u),
          e.openElements.popUntilTagNamePopped(u);
        break;
      }
      if (
        u !== s.ADDRESS &&
        u !== s.DIV &&
        u !== s.P &&
        e._isSpecialElement(e.openElements.items[n], u)
      )
        break;
    }
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._insertElement(t, y.HTML);
  }
  function Gi(e, t) {
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._insertElement(t, y.HTML),
      (e.tokenizer.state = ue.PLAINTEXT);
  }
  function Wi(e, t) {
    e.openElements.hasInScope(s.BUTTON) &&
      (e.openElements.generateImpliedEndTags(),
      e.openElements.popUntilTagNamePopped(s.BUTTON)),
      e._reconstructActiveFormattingElements(),
      e._insertElement(t, y.HTML),
      (e.framesetOk = !1);
  }
  function Xi(e, t) {
    let r = e.activeFormattingElements.getElementEntryInScopeWithTagName(C.A);
    r &&
      (Rr(e, t),
      e.openElements.remove(r.element),
      e.activeFormattingElements.removeEntry(r)),
      e._reconstructActiveFormattingElements(),
      e._insertElement(t, y.HTML),
      e.activeFormattingElements.pushElement(e.openElements.current, t);
  }
  function Qi(e, t) {
    e._reconstructActiveFormattingElements(),
      e._insertElement(t, y.HTML),
      e.activeFormattingElements.pushElement(e.openElements.current, t);
  }
  function ji(e, t) {
    e._reconstructActiveFormattingElements(),
      e.openElements.hasInScope(s.NOBR) &&
        (Rr(e, t), e._reconstructActiveFormattingElements()),
      e._insertElement(t, y.HTML),
      e.activeFormattingElements.pushElement(e.openElements.current, t);
  }
  function Ki(e, t) {
    e._reconstructActiveFormattingElements(),
      e._insertElement(t, y.HTML),
      e.activeFormattingElements.insertMarker(),
      (e.framesetOk = !1);
  }
  function zi(e, t) {
    e.treeAdapter.getDocumentMode(e.document) !== oe.QUIRKS &&
      e.openElements.hasInButtonScope(s.P) &&
      e._closePElement(),
      e._insertElement(t, y.HTML),
      (e.framesetOk = !1),
      (e.insertionMode = g.IN_TABLE);
  }
  function Cu(e, t) {
    e._reconstructActiveFormattingElements(),
      e._appendElement(t, y.HTML),
      (e.framesetOk = !1),
      (t.ackSelfClosing = !0);
  }
  function Iu(e) {
    let t = vt(e, xe.TYPE);
    return t != null && t.toLowerCase() === mi;
  }
  function $i(e, t) {
    e._reconstructActiveFormattingElements(),
      e._appendElement(t, y.HTML),
      Iu(t) || (e.framesetOk = !1),
      (t.ackSelfClosing = !0);
  }
  function Ji(e, t) {
    e._appendElement(t, y.HTML), (t.ackSelfClosing = !0);
  }
  function Zi(e, t) {
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._appendElement(t, y.HTML),
      (e.framesetOk = !1),
      (t.ackSelfClosing = !0);
  }
  function eo(e, t) {
    (t.tagName = C.IMG), (t.tagID = s.IMG), Cu(e, t);
  }
  function to(e, t) {
    e._insertElement(t, y.HTML),
      (e.skipNextNewLine = !0),
      (e.tokenizer.state = ue.RCDATA),
      (e.originalInsertionMode = e.insertionMode),
      (e.framesetOk = !1),
      (e.insertionMode = g.TEXT);
  }
  function ro(e, t) {
    e.openElements.hasInButtonScope(s.P) && e._closePElement(),
      e._reconstructActiveFormattingElements(),
      (e.framesetOk = !1),
      e._switchToTextParsing(t, ue.RAWTEXT);
  }
  function no(e, t) {
    (e.framesetOk = !1), e._switchToTextParsing(t, ue.RAWTEXT);
  }
  function bu(e, t) {
    e._switchToTextParsing(t, ue.RAWTEXT);
  }
  function uo(e, t) {
    e._reconstructActiveFormattingElements(),
      e._insertElement(t, y.HTML),
      (e.framesetOk = !1),
      (e.insertionMode =
        e.insertionMode === g.IN_TABLE ||
        e.insertionMode === g.IN_CAPTION ||
        e.insertionMode === g.IN_TABLE_BODY ||
        e.insertionMode === g.IN_ROW ||
        e.insertionMode === g.IN_CELL
          ? g.IN_SELECT_IN_TABLE
          : g.IN_SELECT);
  }
  function ao(e, t) {
    e.openElements.currentTagId === s.OPTION && e.openElements.pop(),
      e._reconstructActiveFormattingElements(),
      e._insertElement(t, y.HTML);
  }
  function so(e, t) {
    e.openElements.hasInScope(s.RUBY) &&
      e.openElements.generateImpliedEndTags(),
      e._insertElement(t, y.HTML);
  }
  function io(e, t) {
    e.openElements.hasInScope(s.RUBY) &&
      e.openElements.generateImpliedEndTagsWithExclusion(s.RTC),
      e._insertElement(t, y.HTML);
  }
  function oo(e, t) {
    e._reconstructActiveFormattingElements(),
      xr(t),
      Yt(t),
      t.selfClosing
        ? e._appendElement(t, y.MATHML)
        : e._insertElement(t, y.MATHML),
      (t.ackSelfClosing = !0);
  }
  function co(e, t) {
    e._reconstructActiveFormattingElements(),
      Sr(t),
      Yt(t),
      t.selfClosing ? e._appendElement(t, y.SVG) : e._insertElement(t, y.SVG),
      (t.ackSelfClosing = !0);
  }
  function gu(e, t) {
    e._reconstructActiveFormattingElements(), e._insertElement(t, y.HTML);
  }
  function ae(e, t) {
    switch (t.tagID) {
      case s.I:
      case s.S:
      case s.B:
      case s.U:
      case s.EM:
      case s.TT:
      case s.BIG:
      case s.CODE:
      case s.FONT:
      case s.SMALL:
      case s.STRIKE:
      case s.STRONG: {
        Qi(e, t);
        break;
      }
      case s.A: {
        Xi(e, t);
        break;
      }
      case s.H1:
      case s.H2:
      case s.H3:
      case s.H4:
      case s.H5:
      case s.H6: {
        Fi(e, t);
        break;
      }
      case s.P:
      case s.DL:
      case s.OL:
      case s.UL:
      case s.DIV:
      case s.DIR:
      case s.NAV:
      case s.MAIN:
      case s.MENU:
      case s.ASIDE:
      case s.CENTER:
      case s.FIGURE:
      case s.FOOTER:
      case s.HEADER:
      case s.HGROUP:
      case s.DIALOG:
      case s.DETAILS:
      case s.ADDRESS:
      case s.ARTICLE:
      case s.SEARCH:
      case s.SECTION:
      case s.SUMMARY:
      case s.FIELDSET:
      case s.BLOCKQUOTE:
      case s.FIGCAPTION: {
        Hi(e, t);
        break;
      }
      case s.LI:
      case s.DD:
      case s.DT: {
        Vi(e, t);
        break;
      }
      case s.BR:
      case s.IMG:
      case s.WBR:
      case s.AREA:
      case s.EMBED:
      case s.KEYGEN: {
        Cu(e, t);
        break;
      }
      case s.HR: {
        Zi(e, t);
        break;
      }
      case s.RB:
      case s.RTC: {
        so(e, t);
        break;
      }
      case s.RT:
      case s.RP: {
        io(e, t);
        break;
      }
      case s.PRE:
      case s.LISTING: {
        qi(e, t);
        break;
      }
      case s.XMP: {
        ro(e, t);
        break;
      }
      case s.SVG: {
        co(e, t);
        break;
      }
      case s.HTML: {
        vi(e, t);
        break;
      }
      case s.BASE:
      case s.LINK:
      case s.META:
      case s.STYLE:
      case s.TITLE:
      case s.SCRIPT:
      case s.BGSOUND:
      case s.BASEFONT:
      case s.TEMPLATE: {
        ke(e, t);
        break;
      }
      case s.BODY: {
        Bi(e, t);
        break;
      }
      case s.FORM: {
        Yi(e, t);
        break;
      }
      case s.NOBR: {
        ji(e, t);
        break;
      }
      case s.MATH: {
        oo(e, t);
        break;
      }
      case s.TABLE: {
        zi(e, t);
        break;
      }
      case s.INPUT: {
        $i(e, t);
        break;
      }
      case s.PARAM:
      case s.TRACK:
      case s.SOURCE: {
        Ji(e, t);
        break;
      }
      case s.IMAGE: {
        eo(e, t);
        break;
      }
      case s.BUTTON: {
        Wi(e, t);
        break;
      }
      case s.APPLET:
      case s.OBJECT:
      case s.MARQUEE: {
        Ki(e, t);
        break;
      }
      case s.IFRAME: {
        no(e, t);
        break;
      }
      case s.SELECT: {
        uo(e, t);
        break;
      }
      case s.OPTION:
      case s.OPTGROUP: {
        ao(e, t);
        break;
      }
      case s.NOEMBED:
      case s.NOFRAMES: {
        bu(e, t);
        break;
      }
      case s.FRAMESET: {
        Ui(e, t);
        break;
      }
      case s.TEXTAREA: {
        to(e, t);
        break;
      }
      case s.NOSCRIPT: {
        e.options.scriptingEnabled ? bu(e, t) : gu(e, t);
        break;
      }
      case s.PLAINTEXT: {
        Gi(e, t);
        break;
      }
      case s.COL:
      case s.TH:
      case s.TD:
      case s.TR:
      case s.HEAD:
      case s.FRAME:
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD:
      case s.CAPTION:
      case s.COLGROUP:
        break;
      default:
        gu(e, t);
    }
  }
  function lo(e, t) {
    if (
      e.openElements.hasInScope(s.BODY) &&
      ((e.insertionMode = g.AFTER_BODY), e.options.sourceCodeLocationInfo)
    ) {
      let r = e.openElements.tryPeekProperlyNestedBodyElement();
      r && e._setEndLocation(r, t);
    }
  }
  function fo(e, t) {
    e.openElements.hasInScope(s.BODY) &&
      ((e.insertionMode = g.AFTER_BODY), Pu(e, t));
  }
  function ho(e, t) {
    let r = t.tagID;
    e.openElements.hasInScope(r) &&
      (e.openElements.generateImpliedEndTags(),
      e.openElements.popUntilTagNamePopped(r));
  }
  function mo(e) {
    let t = e.openElements.tmplCount > 0,
      { formElement: r } = e;
    t || (e.formElement = null),
      (r || t) &&
        e.openElements.hasInScope(s.FORM) &&
        (e.openElements.generateImpliedEndTags(),
        t
          ? e.openElements.popUntilTagNamePopped(s.FORM)
          : r && e.openElements.remove(r));
  }
  function Eo(e) {
    e.openElements.hasInButtonScope(s.P) || e._insertFakeElement(C.P, s.P),
      e._closePElement();
  }
  function To(e) {
    e.openElements.hasInListItemScope(s.LI) &&
      (e.openElements.generateImpliedEndTagsWithExclusion(s.LI),
      e.openElements.popUntilTagNamePopped(s.LI));
  }
  function po(e, t) {
    let r = t.tagID;
    e.openElements.hasInScope(r) &&
      (e.openElements.generateImpliedEndTagsWithExclusion(r),
      e.openElements.popUntilTagNamePopped(r));
  }
  function bo(e) {
    e.openElements.hasNumberedHeaderInScope() &&
      (e.openElements.generateImpliedEndTags(),
      e.openElements.popUntilNumberedHeaderPopped());
  }
  function go(e, t) {
    let r = t.tagID;
    e.openElements.hasInScope(r) &&
      (e.openElements.generateImpliedEndTags(),
      e.openElements.popUntilTagNamePopped(r),
      e.activeFormattingElements.clearToLastMarker());
  }
  function Ao(e) {
    e._reconstructActiveFormattingElements(),
      e._insertFakeElement(C.BR, s.BR),
      e.openElements.pop(),
      (e.framesetOk = !1);
  }
  function Nu(e, t) {
    let r = t.tagName,
      n = t.tagID;
    for (let u = e.openElements.stackTop; u > 0; u--) {
      let a = e.openElements.items[u],
        i = e.openElements.tagIDs[u];
      if (n === i && (n !== s.UNKNOWN || e.treeAdapter.getTagName(a) === r)) {
        e.openElements.generateImpliedEndTagsWithExclusion(n),
          e.openElements.stackTop >= u && e.openElements.shortenToLength(u);
        break;
      }
      if (e._isSpecialElement(a, i)) break;
    }
  }
  function Qt(e, t) {
    switch (t.tagID) {
      case s.A:
      case s.B:
      case s.I:
      case s.S:
      case s.U:
      case s.EM:
      case s.TT:
      case s.BIG:
      case s.CODE:
      case s.FONT:
      case s.NOBR:
      case s.SMALL:
      case s.STRIKE:
      case s.STRONG: {
        Rr(e, t);
        break;
      }
      case s.P: {
        Eo(e);
        break;
      }
      case s.DL:
      case s.UL:
      case s.OL:
      case s.DIR:
      case s.DIV:
      case s.NAV:
      case s.PRE:
      case s.MAIN:
      case s.MENU:
      case s.ASIDE:
      case s.BUTTON:
      case s.CENTER:
      case s.FIGURE:
      case s.FOOTER:
      case s.HEADER:
      case s.HGROUP:
      case s.DIALOG:
      case s.ADDRESS:
      case s.ARTICLE:
      case s.DETAILS:
      case s.SEARCH:
      case s.SECTION:
      case s.SUMMARY:
      case s.LISTING:
      case s.FIELDSET:
      case s.BLOCKQUOTE:
      case s.FIGCAPTION: {
        ho(e, t);
        break;
      }
      case s.LI: {
        To(e);
        break;
      }
      case s.DD:
      case s.DT: {
        po(e, t);
        break;
      }
      case s.H1:
      case s.H2:
      case s.H3:
      case s.H4:
      case s.H5:
      case s.H6: {
        bo(e);
        break;
      }
      case s.BR: {
        Ao(e);
        break;
      }
      case s.BODY: {
        lo(e, t);
        break;
      }
      case s.HTML: {
        fo(e, t);
        break;
      }
      case s.FORM: {
        mo(e);
        break;
      }
      case s.APPLET:
      case s.OBJECT:
      case s.MARQUEE: {
        go(e, t);
        break;
      }
      case s.TEMPLATE: {
        Ue(e, t);
        break;
      }
      default:
        Nu(e, t);
    }
  }
  function Lu(e, t) {
    e.tmplInsertionModeStack.length > 0 ? wu(e, t) : wr(e, t);
  }
  function _o(e, t) {
    var r;
    t.tagID === s.SCRIPT &&
      ((r = e.scriptHandler) === null ||
        r === void 0 ||
        r.call(e, e.openElements.current)),
      e.openElements.pop(),
      (e.insertionMode = e.originalInsertionMode);
  }
  function ko(e, t) {
    e._err(t, x.eofInElementThatCanContainOnlyText),
      e.openElements.pop(),
      (e.insertionMode = e.originalInsertionMode),
      e.onEof(t);
  }
  function Or(e, t) {
    if (Au.has(e.openElements.currentTagId))
      switch (
        ((e.pendingCharacterTokens.length = 0),
        (e.hasNonWhitespacePendingCharacterToken = !1),
        (e.originalInsertionMode = e.insertionMode),
        (e.insertionMode = g.IN_TABLE_TEXT),
        t.type)
      ) {
        case V.CHARACTER: {
          Su(e, t);
          break;
        }
        case V.WHITESPACE_CHARACTER: {
          xu(e, t);
          break;
        }
      }
    else Et(e, t);
  }
  function Co(e, t) {
    e.openElements.clearBackToTableContext(),
      e.activeFormattingElements.insertMarker(),
      e._insertElement(t, y.HTML),
      (e.insertionMode = g.IN_CAPTION);
  }
  function Io(e, t) {
    e.openElements.clearBackToTableContext(),
      e._insertElement(t, y.HTML),
      (e.insertionMode = g.IN_COLUMN_GROUP);
  }
  function No(e, t) {
    e.openElements.clearBackToTableContext(),
      e._insertFakeElement(C.COLGROUP, s.COLGROUP),
      (e.insertionMode = g.IN_COLUMN_GROUP),
      Pr(e, t);
  }
  function Lo(e, t) {
    e.openElements.clearBackToTableContext(),
      e._insertElement(t, y.HTML),
      (e.insertionMode = g.IN_TABLE_BODY);
  }
  function xo(e, t) {
    e.openElements.clearBackToTableContext(),
      e._insertFakeElement(C.TBODY, s.TBODY),
      (e.insertionMode = g.IN_TABLE_BODY),
      jt(e, t);
  }
  function So(e, t) {
    e.openElements.hasInTableScope(s.TABLE) &&
      (e.openElements.popUntilTagNamePopped(s.TABLE),
      e._resetInsertionMode(),
      e._processStartTag(t));
  }
  function Oo(e, t) {
    Iu(t) ? e._appendElement(t, y.HTML) : Et(e, t), (t.ackSelfClosing = !0);
  }
  function yo(e, t) {
    !e.formElement &&
      e.openElements.tmplCount === 0 &&
      (e._insertElement(t, y.HTML),
      (e.formElement = e.openElements.current),
      e.openElements.pop());
  }
  function je(e, t) {
    switch (t.tagID) {
      case s.TD:
      case s.TH:
      case s.TR: {
        xo(e, t);
        break;
      }
      case s.STYLE:
      case s.SCRIPT:
      case s.TEMPLATE: {
        ke(e, t);
        break;
      }
      case s.COL: {
        No(e, t);
        break;
      }
      case s.FORM: {
        yo(e, t);
        break;
      }
      case s.TABLE: {
        So(e, t);
        break;
      }
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD: {
        Lo(e, t);
        break;
      }
      case s.INPUT: {
        Oo(e, t);
        break;
      }
      case s.CAPTION: {
        Co(e, t);
        break;
      }
      case s.COLGROUP: {
        Io(e, t);
        break;
      }
      default:
        Et(e, t);
    }
  }
  function mt(e, t) {
    switch (t.tagID) {
      case s.TABLE: {
        e.openElements.hasInTableScope(s.TABLE) &&
          (e.openElements.popUntilTagNamePopped(s.TABLE),
          e._resetInsertionMode());
        break;
      }
      case s.TEMPLATE: {
        Ue(e, t);
        break;
      }
      case s.BODY:
      case s.CAPTION:
      case s.COL:
      case s.COLGROUP:
      case s.HTML:
      case s.TBODY:
      case s.TD:
      case s.TFOOT:
      case s.TH:
      case s.THEAD:
      case s.TR:
        break;
      default:
        Et(e, t);
    }
  }
  function Et(e, t) {
    let r = e.fosterParentingEnabled;
    (e.fosterParentingEnabled = !0), Xt(e, t), (e.fosterParentingEnabled = r);
  }
  function xu(e, t) {
    e.pendingCharacterTokens.push(t);
  }
  function Su(e, t) {
    e.pendingCharacterTokens.push(t),
      (e.hasNonWhitespacePendingCharacterToken = !0);
  }
  function ot(e, t) {
    let r = 0;
    if (e.hasNonWhitespacePendingCharacterToken)
      for (; r < e.pendingCharacterTokens.length; r++)
        Et(e, e.pendingCharacterTokens[r]);
    else
      for (; r < e.pendingCharacterTokens.length; r++)
        e._insertCharacters(e.pendingCharacterTokens[r]);
    (e.insertionMode = e.originalInsertionMode), e._processToken(t);
  }
  var Ou = new Set([
    s.CAPTION,
    s.COL,
    s.COLGROUP,
    s.TBODY,
    s.TD,
    s.TFOOT,
    s.TH,
    s.THEAD,
    s.TR,
  ]);
  function Do(e, t) {
    let r = t.tagID;
    Ou.has(r)
      ? e.openElements.hasInTableScope(s.CAPTION) &&
        (e.openElements.generateImpliedEndTags(),
        e.openElements.popUntilTagNamePopped(s.CAPTION),
        e.activeFormattingElements.clearToLastMarker(),
        (e.insertionMode = g.IN_TABLE),
        je(e, t))
      : ae(e, t);
  }
  function Ro(e, t) {
    let r = t.tagID;
    switch (r) {
      case s.CAPTION:
      case s.TABLE: {
        e.openElements.hasInTableScope(s.CAPTION) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(s.CAPTION),
          e.activeFormattingElements.clearToLastMarker(),
          (e.insertionMode = g.IN_TABLE),
          r === s.TABLE && mt(e, t));
        break;
      }
      case s.BODY:
      case s.COL:
      case s.COLGROUP:
      case s.HTML:
      case s.TBODY:
      case s.TD:
      case s.TFOOT:
      case s.TH:
      case s.THEAD:
      case s.TR:
        break;
      default:
        Qt(e, t);
    }
  }
  function Pr(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.COL: {
        e._appendElement(t, y.HTML), (t.ackSelfClosing = !0);
        break;
      }
      case s.TEMPLATE: {
        ke(e, t);
        break;
      }
      default:
        Gt(e, t);
    }
  }
  function wo(e, t) {
    switch (t.tagID) {
      case s.COLGROUP: {
        e.openElements.currentTagId === s.COLGROUP &&
          (e.openElements.pop(), (e.insertionMode = g.IN_TABLE));
        break;
      }
      case s.TEMPLATE: {
        Ue(e, t);
        break;
      }
      case s.COL:
        break;
      default:
        Gt(e, t);
    }
  }
  function Gt(e, t) {
    e.openElements.currentTagId === s.COLGROUP &&
      (e.openElements.pop(),
      (e.insertionMode = g.IN_TABLE),
      e._processToken(t));
  }
  function jt(e, t) {
    switch (t.tagID) {
      case s.TR: {
        e.openElements.clearBackToTableBodyContext(),
          e._insertElement(t, y.HTML),
          (e.insertionMode = g.IN_ROW);
        break;
      }
      case s.TH:
      case s.TD: {
        e.openElements.clearBackToTableBodyContext(),
          e._insertFakeElement(C.TR, s.TR),
          (e.insertionMode = g.IN_ROW),
          Kt(e, t);
        break;
      }
      case s.CAPTION:
      case s.COL:
      case s.COLGROUP:
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD: {
        e.openElements.hasTableBodyContextInTableScope() &&
          (e.openElements.clearBackToTableBodyContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE),
          je(e, t));
        break;
      }
      default:
        je(e, t);
    }
  }
  function Dr(e, t) {
    let r = t.tagID;
    switch (t.tagID) {
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD: {
        e.openElements.hasInTableScope(r) &&
          (e.openElements.clearBackToTableBodyContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE));
        break;
      }
      case s.TABLE: {
        e.openElements.hasTableBodyContextInTableScope() &&
          (e.openElements.clearBackToTableBodyContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE),
          mt(e, t));
        break;
      }
      case s.BODY:
      case s.CAPTION:
      case s.COL:
      case s.COLGROUP:
      case s.HTML:
      case s.TD:
      case s.TH:
      case s.TR:
        break;
      default:
        mt(e, t);
    }
  }
  function Kt(e, t) {
    switch (t.tagID) {
      case s.TH:
      case s.TD: {
        e.openElements.clearBackToTableRowContext(),
          e._insertElement(t, y.HTML),
          (e.insertionMode = g.IN_CELL),
          e.activeFormattingElements.insertMarker();
        break;
      }
      case s.CAPTION:
      case s.COL:
      case s.COLGROUP:
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD:
      case s.TR: {
        e.openElements.hasInTableScope(s.TR) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE_BODY),
          jt(e, t));
        break;
      }
      default:
        je(e, t);
    }
  }
  function yu(e, t) {
    switch (t.tagID) {
      case s.TR: {
        e.openElements.hasInTableScope(s.TR) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE_BODY));
        break;
      }
      case s.TABLE: {
        e.openElements.hasInTableScope(s.TR) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE_BODY),
          Dr(e, t));
        break;
      }
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD: {
        (e.openElements.hasInTableScope(t.tagID) ||
          e.openElements.hasInTableScope(s.TR)) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = g.IN_TABLE_BODY),
          Dr(e, t));
        break;
      }
      case s.BODY:
      case s.CAPTION:
      case s.COL:
      case s.COLGROUP:
      case s.HTML:
      case s.TD:
      case s.TH:
        break;
      default:
        mt(e, t);
    }
  }
  function Po(e, t) {
    let r = t.tagID;
    Ou.has(r)
      ? (e.openElements.hasInTableScope(s.TD) ||
          e.openElements.hasInTableScope(s.TH)) &&
        (e._closeTableCell(), Kt(e, t))
      : ae(e, t);
  }
  function Mo(e, t) {
    let r = t.tagID;
    switch (r) {
      case s.TD:
      case s.TH: {
        e.openElements.hasInTableScope(r) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(r),
          e.activeFormattingElements.clearToLastMarker(),
          (e.insertionMode = g.IN_ROW));
        break;
      }
      case s.TABLE:
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD:
      case s.TR: {
        e.openElements.hasInTableScope(r) && (e._closeTableCell(), yu(e, t));
        break;
      }
      case s.BODY:
      case s.CAPTION:
      case s.COL:
      case s.COLGROUP:
      case s.HTML:
        break;
      default:
        Qt(e, t);
    }
  }
  function Du(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.OPTION: {
        e.openElements.currentTagId === s.OPTION && e.openElements.pop(),
          e._insertElement(t, y.HTML);
        break;
      }
      case s.OPTGROUP: {
        e.openElements.currentTagId === s.OPTION && e.openElements.pop(),
          e.openElements.currentTagId === s.OPTGROUP && e.openElements.pop(),
          e._insertElement(t, y.HTML);
        break;
      }
      case s.HR: {
        e.openElements.currentTagId === s.OPTION && e.openElements.pop(),
          e.openElements.currentTagId === s.OPTGROUP && e.openElements.pop(),
          e._appendElement(t, y.HTML),
          (t.ackSelfClosing = !0);
        break;
      }
      case s.INPUT:
      case s.KEYGEN:
      case s.TEXTAREA:
      case s.SELECT: {
        e.openElements.hasInSelectScope(s.SELECT) &&
          (e.openElements.popUntilTagNamePopped(s.SELECT),
          e._resetInsertionMode(),
          t.tagID !== s.SELECT && e._processStartTag(t));
        break;
      }
      case s.SCRIPT:
      case s.TEMPLATE: {
        ke(e, t);
        break;
      }
      default:
    }
  }
  function Ru(e, t) {
    switch (t.tagID) {
      case s.OPTGROUP: {
        e.openElements.stackTop > 0 &&
          e.openElements.currentTagId === s.OPTION &&
          e.openElements.tagIDs[e.openElements.stackTop - 1] === s.OPTGROUP &&
          e.openElements.pop(),
          e.openElements.currentTagId === s.OPTGROUP && e.openElements.pop();
        break;
      }
      case s.OPTION: {
        e.openElements.currentTagId === s.OPTION && e.openElements.pop();
        break;
      }
      case s.SELECT: {
        e.openElements.hasInSelectScope(s.SELECT) &&
          (e.openElements.popUntilTagNamePopped(s.SELECT),
          e._resetInsertionMode());
        break;
      }
      case s.TEMPLATE: {
        Ue(e, t);
        break;
      }
      default:
    }
  }
  function vo(e, t) {
    let r = t.tagID;
    r === s.CAPTION ||
    r === s.TABLE ||
    r === s.TBODY ||
    r === s.TFOOT ||
    r === s.THEAD ||
    r === s.TR ||
    r === s.TD ||
    r === s.TH
      ? (e.openElements.popUntilTagNamePopped(s.SELECT),
        e._resetInsertionMode(),
        e._processStartTag(t))
      : Du(e, t);
  }
  function Bo(e, t) {
    let r = t.tagID;
    r === s.CAPTION ||
    r === s.TABLE ||
    r === s.TBODY ||
    r === s.TFOOT ||
    r === s.THEAD ||
    r === s.TR ||
    r === s.TD ||
    r === s.TH
      ? e.openElements.hasInTableScope(r) &&
        (e.openElements.popUntilTagNamePopped(s.SELECT),
        e._resetInsertionMode(),
        e.onEndTag(t))
      : Ru(e, t);
  }
  function Uo(e, t) {
    switch (t.tagID) {
      case s.BASE:
      case s.BASEFONT:
      case s.BGSOUND:
      case s.LINK:
      case s.META:
      case s.NOFRAMES:
      case s.SCRIPT:
      case s.STYLE:
      case s.TEMPLATE:
      case s.TITLE: {
        ke(e, t);
        break;
      }
      case s.CAPTION:
      case s.COLGROUP:
      case s.TBODY:
      case s.TFOOT:
      case s.THEAD: {
        (e.tmplInsertionModeStack[0] = g.IN_TABLE),
          (e.insertionMode = g.IN_TABLE),
          je(e, t);
        break;
      }
      case s.COL: {
        (e.tmplInsertionModeStack[0] = g.IN_COLUMN_GROUP),
          (e.insertionMode = g.IN_COLUMN_GROUP),
          Pr(e, t);
        break;
      }
      case s.TR: {
        (e.tmplInsertionModeStack[0] = g.IN_TABLE_BODY),
          (e.insertionMode = g.IN_TABLE_BODY),
          jt(e, t);
        break;
      }
      case s.TD:
      case s.TH: {
        (e.tmplInsertionModeStack[0] = g.IN_ROW),
          (e.insertionMode = g.IN_ROW),
          Kt(e, t);
        break;
      }
      default:
        (e.tmplInsertionModeStack[0] = g.IN_BODY),
          (e.insertionMode = g.IN_BODY),
          ae(e, t);
    }
  }
  function Ho(e, t) {
    t.tagID === s.TEMPLATE && Ue(e, t);
  }
  function wu(e, t) {
    e.openElements.tmplCount > 0
      ? (e.openElements.popUntilTagNamePopped(s.TEMPLATE),
        e.activeFormattingElements.clearToLastMarker(),
        e.tmplInsertionModeStack.shift(),
        e._resetInsertionMode(),
        e.onEof(t))
      : wr(e, t);
  }
  function Fo(e, t) {
    t.tagID === s.HTML ? ae(e, t) : Wt(e, t);
  }
  function Pu(e, t) {
    var r;
    if (t.tagID === s.HTML) {
      if (
        (e.fragmentContext || (e.insertionMode = g.AFTER_AFTER_BODY),
        e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === s.HTML)
      ) {
        e._setEndLocation(e.openElements.items[0], t);
        let n = e.openElements.items[1];
        n &&
          !(
            !(
              (r = e.treeAdapter.getNodeSourceCodeLocation(n)) === null ||
              r === void 0
            ) && r.endTag
          ) &&
          e._setEndLocation(n, t);
      }
    } else Wt(e, t);
  }
  function Wt(e, t) {
    (e.insertionMode = g.IN_BODY), Xt(e, t);
  }
  function qo(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.FRAMESET: {
        e._insertElement(t, y.HTML);
        break;
      }
      case s.FRAME: {
        e._appendElement(t, y.HTML), (t.ackSelfClosing = !0);
        break;
      }
      case s.NOFRAMES: {
        ke(e, t);
        break;
      }
      default:
    }
  }
  function Yo(e, t) {
    t.tagID === s.FRAMESET &&
      !e.openElements.isRootHtmlElementCurrent() &&
      (e.openElements.pop(),
      !e.fragmentContext &&
        e.openElements.currentTagId !== s.FRAMESET &&
        (e.insertionMode = g.AFTER_FRAMESET));
  }
  function Vo(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.NOFRAMES: {
        ke(e, t);
        break;
      }
      default:
    }
  }
  function Go(e, t) {
    t.tagID === s.HTML && (e.insertionMode = g.AFTER_AFTER_FRAMESET);
  }
  function Wo(e, t) {
    t.tagID === s.HTML ? ae(e, t) : Vt(e, t);
  }
  function Vt(e, t) {
    (e.insertionMode = g.IN_BODY), Xt(e, t);
  }
  function Xo(e, t) {
    switch (t.tagID) {
      case s.HTML: {
        ae(e, t);
        break;
      }
      case s.NOFRAMES: {
        ke(e, t);
        break;
      }
      default:
    }
  }
  function Qo(e, t) {
    (t.chars = z), e._insertCharacters(t);
  }
  function jo(e, t) {
    e._insertCharacters(t), (e.framesetOk = !1);
  }
  function Mu(e) {
    for (
      ;
      e.treeAdapter.getNamespaceURI(e.openElements.current) !== y.HTML &&
      !e._isIntegrationPoint(
        e.openElements.currentTagId,
        e.openElements.current,
      );

    )
      e.openElements.pop();
  }
  function Ko(e, t) {
    if (hu(t)) Mu(e), e._startTagOutsideForeignContent(t);
    else {
      let r = e._getAdjustedCurrentElement(),
        n = e.treeAdapter.getNamespaceURI(r);
      n === y.MATHML ? xr(t) : n === y.SVG && (mu(t), Sr(t)),
        Yt(t),
        t.selfClosing ? e._appendElement(t, n) : e._insertElement(t, n),
        (t.ackSelfClosing = !0);
    }
  }
  function zo(e, t) {
    if (t.tagID === s.P || t.tagID === s.BR) {
      Mu(e), e._endTagOutsideForeignContent(t);
      return;
    }
    for (let r = e.openElements.stackTop; r > 0; r--) {
      let n = e.openElements.items[r];
      if (e.treeAdapter.getNamespaceURI(n) === y.HTML) {
        e._endTagOutsideForeignContent(t);
        break;
      }
      let u = e.treeAdapter.getTagName(n);
      if (u.toLowerCase() === t.tagName) {
        (t.tagName = u), e.openElements.shortenToLength(r);
        break;
      }
    }
  }
  var $o = new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"],
    ]),
    Yc =
      String.prototype.codePointAt != null
        ? (e, t) => e.codePointAt(t)
        : (e, t) =>
            (e.charCodeAt(t) & 64512) === 55296
              ? (e.charCodeAt(t) - 55296) * 1024 +
                e.charCodeAt(t + 1) -
                56320 +
                65536
              : e.charCodeAt(t);
  function Mr(e, t) {
    return function (n) {
      let u,
        a = 0,
        i = "";
      for (; (u = e.exec(n)); )
        a !== u.index && (i += n.substring(a, u.index)),
          (i += t.get(u[0].charCodeAt(0))),
          (a = u.index + 1);
      return i + n.substring(a);
    };
  }
  var Vc = Mr(/[&<>'"]/g, $o),
    vu = Mr(
      /["&\u00A0]/g,
      new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"],
      ]),
    ),
    Bu = Mr(
      /[&<>\u00A0]/g,
      new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"],
      ]),
    );
  var Jo = new Set([
    C.AREA,
    C.BASE,
    C.BASEFONT,
    C.BGSOUND,
    C.BR,
    C.COL,
    C.EMBED,
    C.FRAME,
    C.HR,
    C.IMG,
    C.INPUT,
    C.KEYGEN,
    C.LINK,
    C.META,
    C.PARAM,
    C.SOURCE,
    C.TRACK,
    C.WBR,
  ]);
  function Uu(e, t) {
    return (
      t.treeAdapter.isElementNode(e) &&
      t.treeAdapter.getNamespaceURI(e) === y.HTML &&
      Jo.has(t.treeAdapter.getTagName(e))
    );
  }
  var Zo = { treeAdapter: Te, scriptingEnabled: !0 };
  function Ke(e, t) {
    let r = { ...Zo, ...t };
    return Uu(e, r) ? "" : Hu(e, r);
  }
  function Hu(e, t) {
    let r = "",
      n =
        t.treeAdapter.isElementNode(e) &&
        t.treeAdapter.getTagName(e) === C.TEMPLATE &&
        t.treeAdapter.getNamespaceURI(e) === y.HTML
          ? t.treeAdapter.getTemplateContent(e)
          : e,
      u = t.treeAdapter.getChildNodes(n);
    if (u) for (let a of u) r += e0(a, t);
    return r;
  }
  function e0(e, t) {
    return t.treeAdapter.isElementNode(e)
      ? t0(e, t)
      : t.treeAdapter.isTextNode(e)
        ? n0(e, t)
        : t.treeAdapter.isCommentNode(e)
          ? u0(e, t)
          : t.treeAdapter.isDocumentTypeNode(e)
            ? a0(e, t)
            : "";
  }
  function t0(e, t) {
    let r = t.treeAdapter.getTagName(e);
    return `<${r}${r0(e, t)}>${Uu(e, t) ? "" : `${Hu(e, t)}</${r}>`}`;
  }
  function r0(e, { treeAdapter: t }) {
    let r = "";
    for (let n of t.getAttrList(e)) {
      if (((r += " "), n.namespace))
        switch (n.namespace) {
          case y.XML: {
            r += `xml:${n.name}`;
            break;
          }
          case y.XMLNS: {
            n.name !== "xmlns" && (r += "xmlns:"), (r += n.name);
            break;
          }
          case y.XLINK: {
            r += `xlink:${n.name}`;
            break;
          }
          default:
            r += `${n.prefix}:${n.name}`;
        }
      else r += n.name;
      r += `="${vu(n.value)}"`;
    }
    return r;
  }
  function n0(e, t) {
    let { treeAdapter: r } = t,
      n = r.getTextNodeContent(e),
      u = r.getParentNode(e),
      a = u && r.isElementNode(u) && r.getTagName(u);
    return a && r.getNamespaceURI(u) === y.HTML && $n(a, t.scriptingEnabled)
      ? n
      : Bu(n);
  }
  function u0(e, { treeAdapter: t }) {
    return `<!--${t.getCommentNodeContent(e)}-->`;
  }
  function a0(e, { treeAdapter: t }) {
    return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
  }
  function vr(e, t) {
    return Qe.parse(e, t);
  }
  function Tt(e, t, r) {
    typeof e == "string" && ((r = t), (t = e), (e = null));
    let n = Qe.getFragmentParser(e, r);
    return n.tokenizer.write(t, !0), n.getFragment();
  }
  var Br = class extends Fr.default {
      constructor(t) {
        super(),
          (this.ctx = t),
          (this.rewriteUrl = t.rewriteUrl),
          (this.sourceUrl = t.sourceUrl);
      }
      rewrite(t, r = {}) {
        return (
          t &&
          this.recast(
            t,
            (n) => {
              n.tagName && this.emit("element", n, "rewrite"),
                n.attr && this.emit("attr", n, "rewrite"),
                n.nodeName === "#text" && this.emit("text", n, "rewrite");
            },
            r,
          )
        );
      }
      source(t, r = {}) {
        return (
          t &&
          this.recast(
            t,
            (n) => {
              n.tagName && this.emit("element", n, "source"),
                n.attr && this.emit("attr", n, "source"),
                n.nodeName === "#text" && this.emit("text", n, "source");
            },
            r,
          )
        );
      }
      recast(t, r, n = {}) {
        try {
          let u = (n.document ? vr : Tt)(new String(t).toString());
          return this.iterate(u, r, n), Ke(u);
        } catch {
          return t;
        }
      }
      iterate(t, r, n) {
        if (!t) return t;
        if (t.tagName) {
          let u = new zt(t, !1, n);
          if ((r(u), t.attrs))
            for (let a of t.attrs) a.skip || r(new Ur(u, a, n));
        }
        if (t.childNodes)
          for (let u of t.childNodes) u.skip || this.iterate(u, r, n);
        return (
          t.nodeName === "#text" && r(new Hr(t, new zt(t.parentNode), !1, n)), t
        );
      }
      wrapSrcset(t, r = this.ctx.meta) {
        return t
          .split(",")
          .map((n) => {
            let u = n.trimStart().split(" ");
            return u[0] && (u[0] = this.ctx.rewriteUrl(u[0], r)), u.join(" ");
          })
          .join(", ");
      }
      unwrapSrcset(t, r = this.ctx.meta) {
        return t
          .split(",")
          .map((n) => {
            let u = n.trimStart().split(" ");
            return u[0] && (u[0] = this.ctx.sourceUrl(u[0], r)), u.join(" ");
          })
          .join(", ");
      }
      static parse = vr;
      static parseFragment = Tt;
      static serialize = Ke;
    },
    zt = class e extends Fr.default {
      constructor(t, r = !1, n = {}) {
        super(), (this.stream = r), (this.node = t), (this.options = n);
      }
      setAttribute(t, r) {
        for (let n of this.attrs) if (n.name === t) return (n.value = r), !0;
        this.attrs.push({ name: t, value: r });
      }
      getAttribute(t) {
        return (this.attrs.find((n) => n.name === t) || {}).value;
      }
      hasAttribute(t) {
        return !!this.attrs.find((r) => r.name === t);
      }
      removeAttribute(t) {
        let r = this.attrs.findIndex((n) => n.name === t);
        typeof r < "u" && this.attrs.splice(r, 1);
      }
      get tagName() {
        return this.node.tagName;
      }
      set tagName(t) {
        this.node.tagName = t;
      }
      get childNodes() {
        return this.stream ? null : this.node.childNodes;
      }
      get innerHTML() {
        return this.stream
          ? null
          : Ke({ nodeName: "#document-fragment", childNodes: this.childNodes });
      }
      set innerHTML(t) {
        this.stream || (this.node.childNodes = Tt(t).childNodes);
      }
      get outerHTML() {
        return this.stream
          ? null
          : Ke({ nodeName: "#document-fragment", childNodes: [this] });
      }
      set outerHTML(t) {
        this.stream ||
          this.parentNode.childNodes.splice(
            this.parentNode.childNodes.findIndex((r) => r === this.node),
            1,
            ...Tt(t).childNodes,
          );
      }
      get textContent() {
        if (this.stream) return null;
        let t = "";
        return (
          this.iterate(this.node, (r) => {
            r.nodeName === "#text" && (t += r.value);
          }),
          t
        );
      }
      set textContent(t) {
        this.stream ||
          (this.node.childNodes = [
            { nodeName: "#text", value: t, parentNode: this.node },
          ]);
      }
      get nodeName() {
        return this.node.nodeName;
      }
      get parentNode() {
        return this.node.parentNode ? new e(this.node.parentNode) : null;
      }
      get attrs() {
        return this.node.attrs;
      }
      get namespaceURI() {
        return this.node.namespaceURI;
      }
    },
    Ur = class {
      constructor(t, r, n = {}) {
        (this.attr = r),
          (this.attrs = t.attrs),
          (this.node = t),
          (this.options = n);
      }
      delete() {
        let t = this.attrs.findIndex((r) => r === this.attr);
        return (
          this.attrs.splice(t, 1),
          Object.defineProperty(this, "deleted", { get: () => !0 }),
          !0
        );
      }
      get name() {
        return this.attr.name;
      }
      set name(t) {
        this.attr.name = t;
      }
      get value() {
        return this.attr.value;
      }
      set value(t) {
        this.attr.value = t;
      }
      get deleted() {
        return !1;
      }
    },
    Hr = class {
      constructor(t, r, n = !1, u = {}) {
        (this.stream = n),
          (this.node = t),
          (this.element = r),
          (this.options = u);
      }
      get nodeName() {
        return this.node.nodeName;
      }
      get parentNode() {
        return this.element;
      }
      get value() {
        return this.stream ? this.node.text : this.node.value;
      }
      set value(t) {
        this.stream ? (this.node.text = t) : (this.node.value = t);
      }
    },
    Fu = Br;
  var qu = We(rt(), 1),
    qr = class extends qu.default {
      constructor(t) {
        super(), (this.ctx = t), (this.meta = t.meta);
      }
      rewrite(t, r) {
        return this.recast(t, r, "rewrite");
      }
      source(t, r) {
        return this.recast(t, r, "source");
      }
      recast(t, r, n) {
        let u = /url\(['"]?(.+?)['"]?\)/gm,
          a =
            /@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm;
        return (
          (t = new String(t).toString()),
          (t = t.replace(u, (i, f) => {
            let d =
              n === "rewrite" ? this.ctx.rewriteUrl(f) : this.ctx.sourceUrl(f);
            return i.replace(f, d);
          })),
          (t = t.replace(a, (i, f) =>
            i.replace(
              f,
              f.replace(
                /^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm,
                (d, h, c, o) => {
                  if (h.startsWith("url")) return d;
                  let l =
                    n === "rewrite"
                      ? this.ctx.rewriteUrl(c)
                      : this.ctx.sourceUrl(c);
                  return `${h}${l}${o}`;
                },
              ),
            ),
          )),
          t
        );
      }
    },
    Yu = qr;
  var s0 = {
      0: "Unexpected token",
      30: "Unexpected token: '%0'",
      1: "Octal escape sequences are not allowed in strict mode",
      2: "Octal escape sequences are not allowed in template strings",
      3: "\\8 and \\9 are not allowed in template strings",
      4: "Private identifier #%0 is not defined",
      5: "Illegal Unicode escape sequence",
      6: "Invalid code point %0",
      7: "Invalid hexadecimal escape sequence",
      9: "Octal literals are not allowed in strict mode",
      8: "Decimal integer literals with a leading zero are forbidden in strict mode",
      10: "Expected number in radix %0",
      151: "Invalid left-hand side assignment to a destructible right-hand side",
      11: "Non-number found after exponent indicator",
      12: "Invalid BigIntLiteral",
      13: "No identifiers allowed directly after numeric literal",
      14: "Escapes \\8 or \\9 are not syntactically valid escapes",
      15: "Escapes \\8 or \\9 are not allowed in strict mode",
      16: "Unterminated string literal",
      17: "Unterminated template literal",
      18: "Multiline comment was not closed properly",
      19: "The identifier contained dynamic unicode escape that was not closed",
      20: "Illegal character '%0'",
      21: "Missing hexadecimal digits",
      22: "Invalid implicit octal",
      23: "Invalid line break in string literal",
      24: "Only unicode escapes are legal in identifier names",
      25: "Expected '%0'",
      26: "Invalid left-hand side in assignment",
      27: "Invalid left-hand side in async arrow",
      28: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
      29: "Member access on super must be in a method",
      31: "Await expression not allowed in formal parameter",
      32: "Yield expression not allowed in formal parameter",
      95: "Unexpected token: 'escaped keyword'",
      33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
      123: "Async functions can only be declared at the top level or inside a block",
      34: "Unterminated regular expression",
      35: "Unexpected regular expression flag",
      36: "Duplicate regular expression flag '%0'",
      37: "%0 functions must have exactly %1 argument%2",
      38: "Setter function argument must not be a rest parameter",
      39: "%0 declaration must have a name in this context",
      40: "Function name may not contain any reserved words or be eval or arguments in strict mode",
      41: "The rest operator is missing an argument",
      42: "A getter cannot be a generator",
      43: "A setter cannot be a generator",
      44: "A computed property name must be followed by a colon or paren",
      134: "Object literal keys that are strings or numbers must be a method or have a colon",
      46: "Found `* async x(){}` but this should be `async * x(){}`",
      45: "Getters and setters can not be generators",
      47: "'%0' can not be generator method",
      48: "No line break is allowed after '=>'",
      49: "The left-hand side of the arrow can only be destructed through assignment",
      50: "The binding declaration is not destructible",
      51: "Async arrow can not be followed by new expression",
      52: "Classes may not have a static property named 'prototype'",
      53: "Class constructor may not be a %0",
      54: "Duplicate constructor method in class",
      55: "Invalid increment/decrement operand",
      56: "Invalid use of `new` keyword on an increment/decrement expression",
      57: "`=>` is an invalid assignment target",
      58: "Rest element may not have a trailing comma",
      59: "Missing initializer in %0 declaration",
      60: "'for-%0' loop head declarations can not have an initializer",
      61: "Invalid left-hand side in for-%0 loop: Must have a single binding",
      62: "Invalid shorthand property initializer",
      63: "Property name __proto__ appears more than once in object literal",
      64: "Let is disallowed as a lexically bound name",
      65: "Invalid use of '%0' inside new expression",
      66: "Illegal 'use strict' directive in function with non-simple parameter list",
      67: 'Identifier "let" disallowed as left-hand side expression in strict mode',
      68: "Illegal continue statement",
      69: "Illegal break statement",
      70: "Cannot have `let[...]` as a var name in strict mode",
      71: "Invalid destructuring assignment target",
      72: "Rest parameter may not have a default initializer",
      73: "The rest argument must the be last parameter",
      74: "Invalid rest argument",
      76: "In strict mode code, functions can only be declared at top level or inside a block",
      77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
      78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
      79: "Class declaration can't appear in single-statement context",
      80: "Invalid left-hand side in for-%0",
      81: "Invalid assignment in for-%0",
      82: "for await (... of ...) is only valid in async functions and async generators",
      83: "The first token after the template expression should be a continuation of the template",
      85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
      84: "`let \n [` is a restricted production at the start of a statement",
      86: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
      87: "Catch clause parameter does not support default values",
      88: "Missing catch or finally after try",
      89: "More than one default clause in switch statement",
      90: "Illegal newline after throw",
      91: "Strict mode code may not include a with statement",
      92: "Illegal return statement",
      93: "The left hand side of the for-header binding declaration is not destructible",
      94: "new.target only allowed within functions or static blocks",
      96: "'#' not followed by identifier",
      102: "Invalid keyword",
      101: "Can not use 'let' as a class name",
      100: "'A lexical declaration can't define a 'let' binding",
      99: "Can not use `let` as variable name in strict mode",
      97: "'%0' may not be used as an identifier in this context",
      98: "Await is only valid in async functions",
      103: "The %0 keyword can only be used with the module goal",
      104: "Unicode codepoint must not be greater than 0x10FFFF",
      105: "%0 source must be string",
      106: "Only a identifier or string can be used to indicate alias",
      107: "Only '*' or '{...}' can be imported after default",
      108: "Trailing decorator may be followed by method",
      109: "Decorators can't be used with a constructor",
      110: "Can not use `await` as identifier in module or async func",
      111: "Can not use `await` as identifier in module",
      112: "HTML comments are only allowed with web compatibility (Annex B)",
      113: "The identifier 'let' must not be in expression position in strict mode",
      114: "Cannot assign to `eval` and `arguments` in strict mode",
      115: "The left-hand side of a for-of loop may not start with 'let'",
      116: "Block body arrows can not be immediately invoked without a group",
      117: "Block body arrows can not be immediately accessed without a group",
      118: "Unexpected strict mode reserved word",
      119: "Unexpected eval or arguments in strict mode",
      120: "Decorators must not be followed by a semicolon",
      121: "Calling delete on expression not allowed in strict mode",
      122: "Pattern can not have a tail",
      124: "Can not have a `yield` expression on the left side of a ternary",
      125: "An arrow function can not have a postfix update operator",
      126: "Invalid object literal key character after generator star",
      127: "Private fields can not be deleted",
      129: "Classes may not have a field called constructor",
      128: "Classes may not have a private element named constructor",
      130: "A class field initializer or static block may not contain arguments",
      131: "Generators can only be declared at the top level or inside a block",
      132: "Async methods are a restricted production and cannot have a newline following it",
      133: "Unexpected character after object literal property name",
      135: "Invalid key token",
      136: "Label '%0' has already been declared",
      137: "continue statement must be nested within an iteration statement",
      138: "Undefined label '%0'",
      139: "Trailing comma is disallowed inside import(...) arguments",
      140: "Invalid binding in JSON import",
      141: "import() requires exactly one argument",
      142: "Cannot use new with import(...)",
      143: "... is not allowed in import()",
      144: "Expected '=>'",
      145: "Duplicate binding '%0'",
      146: "Duplicate private identifier #%0",
      147: "Cannot export a duplicate name '%0'",
      150: "Duplicate %0 for-binding",
      148: "Exported binding '%0' needs to refer to a top-level declared variable",
      149: "Unexpected private field",
      153: "Numeric separators are not allowed at the end of numeric literals",
      152: "Only one underscore is allowed as numeric separator",
      154: "JSX value should be either an expression or a quoted JSX text",
      155: "Expected corresponding JSX closing tag for %0",
      156: "Adjacent JSX elements must be wrapped in an enclosing tag",
      157: "JSX attributes must only be assigned a non-empty 'expression'",
      158: "'%0' has already been declared",
      159: "'%0' shadowed a catch clause binding",
      160: "Dot property must be an identifier",
      161: "Encountered invalid input after spread/rest argument",
      162: "Catch without try",
      163: "Finally without try",
      164: "Expected corresponding closing tag for JSX fragment",
      165: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
      166: "Invalid tagged template on optional chain",
      167: "Invalid optional chain from super property",
      168: "Invalid optional chain from new expression",
      169: 'Cannot use "import.meta" outside a module',
      170: "Leading decorators must be attached to a class declaration",
      171: "An export name cannot include a lone surrogate, found %0",
      172: "A string literal cannot be used as an exported binding without `from`",
      173: "Private fields can't be accessed on super",
      174: "The only valid meta property for import is 'import.meta'",
      175: "'import.meta' must not contain escaped characters",
      176: 'cannot use "await" as identifier inside an async function',
      177: 'cannot use "await" in static blocks',
    },
    Fe = class extends SyntaxError {
      constructor(t, r, n, u, a, i, f, ...d) {
        let h =
          "[" +
          r +
          ":" +
          n +
          "-" +
          a +
          ":" +
          i +
          "]: " +
          s0[f].replace(/%(\d+)/g, (c, o) => d[o]);
        super(`${h}`),
          (this.start = t),
          (this.end = u),
          (this.range = [t, u]),
          (this.loc = {
            start: { line: r, column: n },
            end: { line: a, column: i },
          }),
          (this.description = h);
      }
    };
  function T(e, t, ...r) {
    throw new Fe(
      e.tokenIndex,
      e.tokenLine,
      e.tokenColumn,
      e.index,
      e.line,
      e.column,
      t,
      ...r,
    );
  }
  function lr(e) {
    throw new Fe(
      e.tokenIndex,
      e.tokenLine,
      e.tokenColumn,
      e.index,
      e.line,
      e.column,
      e.type,
      ...e.params,
    );
  }
  function de(e, t, r, n, u, a, i, ...f) {
    throw new Fe(e, t, r, n, u, a, i, ...f);
  }
  function Je(e, t, r, n, u, a, i) {
    throw new Fe(e, t, r, n, u, a, i);
  }
  function Zu(e) {
    return !!(1 & (ea[34816 + (e >>> 5)] >>> e));
  }
  var ea = ((e, t) => {
    let r = new Uint32Array(104448),
      n = 0,
      u = 0;
    for (; n < 3822; ) {
      let a = e[n++];
      if (a < 0) u -= a;
      else {
        let i = e[n++];
        2 & a && (i = t[i]), 1 & a ? r.fill(i, u, (u += e[n++])) : (r[u++] = i);
      }
    }
    return r;
  })(
    [
      -1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64,
      3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0,
      4294966523, 3, 0, 4, 2, 16, 2, 65, 2, 0, 0, 4294836735, 0, 3221225471, 0,
      4294901942, 2, 66, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0,
      2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2,
      0, 0, 608174079, 2, 0, 2, 60, 2, 7, 2, 6, 0, 4286611199, 3, 0, 2, 2, 1, 3,
      0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375,
      0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2,
      2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559,
      0, 3594373100, 0, 3288319768, 0, 8469959, 2, 203, 2, 3, 0, 4093640191, 0,
      660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0,
      982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 71, 0,
      4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 72, 0, 1073741743,
      0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0,
      4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2, 15,
      2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2,
      11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0,
      2, 2, 80, 0, 2151677951, 2, 29, 2, 9, 0, 909311, 3, 0, 2, 0, 814743551, 2,
      49, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0,
      268374015, 2, 110, 2, 51, 2, 0, 2, 81, 0, 134153215, -1, 2, 7, 2, 0, 2, 8,
      0, 2684354559, 0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 2, 53, 0,
      1046528, 3, 0, 3, 2, 9, 2, 0, 2, 54, 0, 4294960127, 2, 10, 2, 6, 2, 11, 0,
      4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2,
      84, 2, 85, 2, 210, 2, 55, 0, 1048577, 2, 86, 2, 14, -1, 2, 14, 0, 131042,
      2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15,
      2, 0, 0, 2147516671, 2, 21, 3, 90, 2, 2, 0, -16, 2, 91, 0, 524222462, 2,
      4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0,
      -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0,
      8, 2, 93, 2, 133, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 94, 2, 95, 3, 0,
      2, 2, 96, 2, 0, 2, 97, 2, 46, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0,
      67043391, 0, 3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097,
      2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0,
      8191999, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2,
      103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0,
      3774349439, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2,
      18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, 2, 25, 0, 1638399, 2, 183, 2, 109,
      3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 111, -1, 2, 112,
      2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 2, 163, -4, 2,
      20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 67, 2, 6, 2, 12, 2, 10, 2, 0, 2, 115, -1,
      3, 0, 4, 2, 10, 2, 23, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119,
      2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2,
      123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2,
      39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2,
      0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2,
      35, 2, 0, 2, 48, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 57,
      2, 167, 2, 20, 2, 43, 2, 36, 2, 18, 2, 37, 2, 18, 2, 126, 2, 21, 3, 0, 2,
      2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 144, 2, 0, 2, 58, 2,
      56, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2,
      129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0,
      2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3,
      0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0,
      67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 61, 2, 38, -5, 2, 0, 2,
      12, -3, 3, 0, 2, 0, 2147484671, 2, 134, 0, 4190109695, 2, 52, -2, 2, 135,
      0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 68, 2, 18, 2, 0, 2, 42,
      -6, 2, 0, 2, 45, 2, 59, 2, 44, 2, 45, 2, 46, 2, 47, 0, 8388351, -2, 2,
      136, 0, 3028287487, 2, 48, 2, 138, 0, 33259519, 2, 49, -9, 2, 21, 0,
      4294836223, 0, 3355443199, 0, 134152199, -2, 2, 69, -2, 3, 0, 28, 2, 32,
      -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33,
      2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54,
      3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2,
      52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -4, 3, 0, 2, 0,
      4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 54, 3, 0,
      38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3,
      0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 0, 1677656575, -130, 2, 26, -16, 2, 0,
      2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 2, 205, -4, 2, 57, -13, 3, 0,
      2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0,
      10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 0, 4294954999,
      2, 0, -16, 2, 0, 2, 92, 2, 0, 0, 2105343, 0, 4160749584, 2, 177, -34, 2,
      8, 2, 154, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 60, 2, 100, -3, 2,
      0, 0, 1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2, 18, 2,
      32, -6, 2, 18, 2, 12, -15, 2, 155, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2,
      61, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -105, 2, 26, -32,
      3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0,
      233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6,
      3, 0, 130, 2, 25, -22250, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040,
      3, 44, 2, 3, 0, 14, 2, 63, 2, 64, -3, 0, 3168731136, 0, 4294956864, 2, 1,
      2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 65, 2, 0, 2, 34,
      -1, 2, 18, 2, 66, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727,
      0, 2617294944, 0, 4294770688, 2, 25, 2, 67, 3, 0, 2, 0, 131135, 2, 98, 0,
      70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 32511, 2, 0, 2, 49, -1, 2,
      99, 2, 68, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0,
      2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0,
      1835008, 0, 4294688736, 2, 70, 2, 69, 0, 33554435, 2, 131, 2, 70, 2, 164,
      0, 131075, 0, 3594373096, 0, 67094296, 2, 69, -1, 0, 4294828e3, 0,
      603979263, 0, 654311424, 0, 3, 0, 4294828001, 0, 602930687, 2, 171, 0,
      393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0,
      4236247008, 2, 71, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 72, 0,
      537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 73, 0, 7936, -3, 2, 0,
      0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22,
      3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 12, -1,
      2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0,
      2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9, 0, 276824064, -2, 3, 0, 2, 2,
      42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 51, 2, 0, 2, 81,
      2, 49, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1,
      2, 127, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 2, 184, 2, 10, 2, 6, 2,
      11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 82, 2, 10, 2,
      0, 2, 83, 2, 84, 2, 85, -3, 2, 86, 2, 14, -3, 2, 87, 2, 88, 2, 89, 2, 0,
      2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 90,
      2, -17, 2, 91, 0, 524157950, 2, 4, 2, 0, 2, 92, 2, 4, 2, 0, 2, 22, 2, 28,
      2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2,
      73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 0, 3072, 2, 0, 0, 2147516415, 2, 10,
      3, 0, 2, 2, 25, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 0,
      4294965179, 0, 7, 2, 0, 2, 9, 2, 95, 2, 9, -1, 0, 1761345536, 2, 98, 0,
      4294901823, 2, 38, 2, 20, 2, 99, 2, 35, 2, 100, 0, 2080440287, 2, 0, 2,
      34, 2, 153, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055,
      2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 103, 2, 104, 2,
      7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 105, 2,
      106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2,
      31, 2, 108, -3, 2, 109, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 110, 2, 0, 2, 8,
      2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29,
      -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 67, 2, 6, 2, 30, 2, 10, 2, 0, 2, 115,
      -1, 3, 0, 4, 2, 10, 2, 18, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2,
      119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2,
      2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2,
      39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 126, 2, 0, 3,
      30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2,
      0, 2, 50, 2, 98, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 57, -1, 2,
      20, 2, 43, 2, 37, 2, 18, 0, 3, 2, 18, 2, 126, 2, 21, 2, 127, 2, 54, -1, 0,
      2490368, 2, 127, 2, 25, 2, 18, 2, 34, 2, 127, 2, 38, 0, 4294901904, 0,
      4718591, 2, 127, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1,
      2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 70, 0, 3758161920, 0, 3, 2, 132, 0,
      12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0,
      176, -5, 2, 0, 2, 17, 2, 192, -1, 2, 0, 2, 25, 2, 209, -1, 2, 0, 0,
      16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 133, -3, 3, 0, 2, 2, 55, 2,
      134, 0, 2147549183, 0, 2, -2, 2, 135, 2, 36, 0, 10, 0, 4294965249, 0,
      67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2, 42, -6, 2, 0,
      0, 1, 2, 59, 2, 17, 0, 1, 2, 46, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138,
      0, 16778239, -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 69, -2, 3, 0, 28, 2,
      32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0,
      33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 10, -55, 3,
      0, 17, 2, 42, 2, 8, 2, 18, 2, 0, 2, 8, 2, 18, 2, 60, 2, 0, 2, 25, 2, 50,
      2, 139, 2, 25, -13, 2, 0, 2, 73, -6, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1,
      2, 107, -2, 0, 11, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278,
      2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2,
      143, 2, 144, -187, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2,
      147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2,
      3, 59, 2, 2, 153, -57, 2, 8, 2, 154, -7, 2, 18, 2, 0, 2, 60, -4, 2, 0, 0,
      1065361407, 0, 16384, -9, 2, 18, 2, 60, 2, 0, 2, 133, -14, 2, 18, 2, 133,
      -6, 2, 18, 0, 81919, -15, 2, 155, 3, 0, 6, 2, 126, -1, 3, 0, 2, 0, 2063,
      -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -138, 3, 0, 1335, -1,
      3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3,
      0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2,
      25, -28386, 2, 0, 0, 1, -1, 2, 55, 2, 0, 0, 8193, -21, 2, 201, 0, 10255,
      0, 4, -11, 2, 69, 2, 182, -1, 0, 71680, -1, 2, 174, 0, 4292900864, 0,
      268435519, -5, 2, 163, -1, 2, 173, -1, 0, 6144, -2, 2, 46, -1, 2, 168, -1,
      0, 2147532800, 2, 164, 2, 170, 0, 8355840, -2, 0, 4, -4, 2, 198, 0,
      205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0,
      2717763192, 0, 4286578751, 0, 278545, 2, 165, 0, 4294886464, 0, 33292336,
      0, 417809, 2, 165, 0, 1327482464, 0, 4278190128, 0, 700594195, 0,
      1006647527, 0, 4286497336, 0, 4160749631, 2, 166, 0, 201327104, 0,
      3634348576, 0, 8323120, 2, 166, 0, 202375680, 0, 2678047264, 0,
      4293984304, 2, 166, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0,
      10517376, 0, 4293066815, 0, 1, 2, 213, 2, 167, 2, 0, 0, 2089, 0,
      3221225552, 0, 201359520, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2,
      163, 0, 4160757760, 2, 0, -6, 2, 179, -11, 0, 3263218176, -1, 0, 49664, 0,
      2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 168, 2, 186, 2, 187, -2,
      2, 175, -20, 0, 3758096385, -2, 2, 169, 2, 195, 2, 94, 2, 180, 0,
      4294057984, -2, 2, 176, 2, 172, 0, 4227874816, -2, 2, 169, -1, 2, 170, -1,
      2, 181, 2, 55, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 178, 0,
      939588608, -1, 0, 805306368, -1, 2, 55, 2, 171, 2, 172, 2, 173, 2, 211, 2,
      0, -2, 0, 8192, -4, 0, 267386880, -1, 0, 117440512, 0, 7168, -1, 2, 170,
      2, 168, 2, 174, 2, 188, -16, 2, 175, -1, 0, 1426112704, 2, 176, -1, 2,
      196, 0, 271581216, 0, 2149777408, 2, 25, 2, 174, 2, 55, 0, 851967, 2, 189,
      -1, 2, 177, 2, 190, -4, 2, 178, -20, 2, 98, 2, 208, -56, 0, 3145728, 2,
      191, -10, 0, 32505856, -1, 2, 179, -1, 0, 2147385088, 2, 94, 1,
      2155905152, 2, -3, 2, 176, 2, 0, 0, 67108864, -2, 2, 180, -6, 2, 181, 2,
      25, 0, 1, -1, 0, 1, -1, 2, 182, -3, 2, 126, 2, 69, -2, 2, 100, -2, 0,
      32704, 2, 55, -915, 2, 183, -1, 2, 207, -10, 2, 194, -5, 2, 185, -6, 0,
      3759456256, 2, 19, -1, 2, 184, -1, 2, 185, -2, 0, 4227874752, -3, 0,
      2146435072, 2, 186, -2, 0, 1006649344, 2, 55, -1, 2, 94, 0, 201375744, -3,
      0, 134217720, 2, 94, 0, 4286677377, 0, 32896, -1, 2, 178, -3, 0,
      4227907584, -349, 0, 65520, 0, 1920, 2, 167, 3, 0, 264, -11, 2, 173, -2,
      2, 187, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524280, -13, 2,
      193, -1, 0, 4294934272, 2, 25, 2, 187, -1, 2, 215, 0, 2158720, -3, 2, 186,
      0, 1, -4, 2, 55, 0, 3808625411, 0, 3489628288, 0, 4096, 0, 1207959680, 0,
      3221274624, 2, 0, -3, 2, 188, 0, 120, 0, 7340032, -2, 2, 189, 2, 4, 2, 25,
      2, 176, 3, 0, 4, 2, 186, -1, 2, 190, 2, 167, -1, 0, 8176, 2, 170, 2, 188,
      0, 1073741824, -1, 0, 4290773232, 2, 0, -4, 2, 176, 2, 197, 0, 15728640,
      2, 167, -1, 2, 174, -1, 0, 134250480, 0, 4720640, 0, 3825467396, -1, 2,
      180, -9, 2, 94, 2, 181, 0, 4294967040, 2, 137, 0, 4160880640, 3, 0, 2, 0,
      704, 0, 1849688064, 2, 191, -1, 2, 55, 0, 4294901887, 2, 0, 0, 130547712,
      0, 1879048192, 2, 212, 3, 0, 2, -1, 2, 192, 2, 193, -1, 0, 17829776, 0,
      2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128,
      2, 200, 0, 16252928, 0, 3791388672, 2, 130, 3, 0, 2, -2, 2, 206, 2, 0, -1,
      2, 107, -1, 0, 66584576, -1, 2, 199, -1, 0, 448, 0, 4294918080, 3, 0, 6,
      2, 55, -1, 0, 4294755328, 0, 4294967267, 2, 7, -1, 2, 174, 2, 187, 2, 25,
      2, 98, 2, 25, 2, 194, 2, 94, -2, 0, 245760, 2, 195, -1, 2, 163, 2, 202, 0,
      4227923456, -1, 2, 196, 2, 174, 2, 94, -3, 0, 4292870145, 0, 262144, -1,
      2, 95, 2, 0, 0, 1073758848, 2, 197, -1, 0, 4227921920, 2, 198, 0,
      68289024, 0, 528402016, 0, 4292927536, 0, 46080, 2, 191, 0, 4265609306, 0,
      4294967289, -2, 0, 268435456, 2, 95, -2, 2, 199, 3, 0, 5, -1, 2, 200, 2,
      176, 2, 0, -2, 0, 4227923936, 2, 67, -1, 2, 187, 2, 197, 2, 99, 2, 168, 2,
      178, 2, 204, 3, 0, 5, -1, 2, 167, 3, 0, 3, -2, 0, 2146959360, 0, 9440640,
      0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 201, 2, 28, -2, 2, 174,
      -2, 2, 202, -1, 2, 169, 2, 98, 3, 0, 5, -1, 0, 4227923964, 0, 512, 0,
      8388608, 2, 203, 2, 183, 2, 193, 0, 4286578944, 3, 0, 2, 0, 1152, 0,
      1266679808, 2, 199, 0, 576, 0, 4261707776, 2, 98, 3, 0, 9, 2, 169, 0,
      131072, 0, 939524096, 2, 188, 3, 0, 2, 2, 16, -1, 0, 2147221504, -28, 2,
      187, 3, 0, 3, -3, 0, 4292902912, -6, 2, 99, 3, 0, 81, 2, 25, -2, 2, 107,
      -33, 2, 18, 2, 181, -124, 2, 188, -18, 2, 204, 3, 0, 213, -1, 2, 187, 3,
      0, 54, -17, 2, 169, 2, 55, 2, 205, -1, 2, 55, 2, 197, 0, 4290822144, -2,
      0, 67174336, 0, 520093700, 2, 18, 3, 0, 13, -1, 2, 187, 3, 0, 6, -2, 2,
      188, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2,
      185, -38, 2, 181, 2, 8, 2, 206, 3, 0, 278, 0, 2417033215, -9, 0,
      4294705144, 0, 4292411391, 0, 65295, -11, 2, 167, 3, 0, 72, -3, 0,
      3758159872, 0, 201391616, 3, 0, 123, -7, 2, 187, -13, 2, 180, 3, 0, 2, -1,
      2, 173, 2, 207, -3, 2, 99, 2, 0, -7, 2, 181, -1, 0, 384, -1, 0, 133693440,
      -3, 2, 208, -2, 2, 110, 3, 0, 3, 3, 180, 2, -2, 2, 94, 2, 169, 3, 0, 4,
      -2, 2, 196, -1, 2, 163, 0, 335552923, 2, 209, -1, 0, 538974272, 0,
      2214592512, 0, 132e3, -10, 0, 192, -8, 2, 210, -21, 0, 134213632, 2, 162,
      3, 0, 34, 2, 55, 0, 4294965279, 3, 0, 6, 0, 100663424, 0, 63524, -1, 2,
      214, 2, 152, 3, 0, 3, -1, 0, 3221282816, 0, 4294917120, 3, 0, 9, 2, 25, 2,
      211, -1, 2, 212, 3, 0, 14, 2, 25, 2, 187, 3, 0, 6, 2, 25, 2, 213, 3, 0,
      15, 0, 2147520640, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24,
      2, 36, -1, 0, 4292870144, 3, 0, 2, 0, 1, 2, 176, 3, 0, 6, 2, 209, 0,
      4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2,
      0, 2, 47, 3, 0, 8, -1, 2, 178, -2, 2, 180, 0, 98304, 0, 65537, 2, 181, -5,
      2, 214, 2, 0, 2, 37, 2, 202, 2, 167, 0, 4294770176, 2, 110, 3, 0, 4, -30,
      2, 192, 0, 3758153728, -3, 0, 125829120, -2, 2, 187, 0, 4294897664, 2,
      178, -1, 2, 199, -1, 2, 174, 0, 4026580992, 2, 95, 2, 0, -10, 2, 180, 0,
      3758145536, 0, 31744, -1, 0, 1610628992, 0, 4261477376, -4, 2, 215, -2, 2,
      187, 3, 0, 32, -1335, 2, 0, -129, 2, 187, -6, 2, 176, -180, 0, 65532,
      -233, 2, 177, -18, 2, 176, 3, 0, 77, -16, 2, 176, 3, 0, 47, -154, 2, 170,
      -130, 2, 18, 3, 0, 22250, -7, 2, 18, 3, 0, 6128,
    ],
    [
      4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726,
      4294903807, 268435455, 2147483647, 1048575, 1073741823, 3892314111,
      134217727, 1061158911, 536805376, 4294910143, 4294901759, 32767,
      4294901760, 262143, 536870911, 8388607, 4160749567, 4294902783,
      4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303,
      255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687,
      4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329,
      4294705152, 4294770687, 67043583, 1023, 15, 2047999, 67043343, 67051519,
      16777215, 2147483648, 4294902e3, 28, 4292870143, 4294966783, 16383,
      67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104,
      603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119,
      4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095,
      4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720,
      1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951,
      4286578688, 4294967292, 4294965759, 535511039, 4294966272, 4294967280,
      32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615,
      4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884,
      4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015,
      4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591,
      2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447, 4294902271,
      4294549472, 4294921215, 4095, 4285526655, 4294966527, 4294966143, 64,
      4294966719, 3774873592, 1877934080, 262151, 2555904, 536807423, 67043839,
      3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103,
      4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156,
      1593309078, 268434431, 268434414, 4294901763, 4294901761, 536870912,
      2952790016, 202506752, 139264, 4026531840, 402653184, 4261412864, 63488,
      1610612736, 4227922944, 49152, 65280, 3233808384, 3221225472, 65534,
      61440, 57152, 4293918720, 4290772992, 25165824, 57344, 4227915776,
      4278190080, 3758096384, 4227858432, 4160749568, 3758129152, 4294836224,
      4194304, 251658240, 196608, 4294963200, 2143289344, 2097152, 64512,
      417808, 4227923712, 12582912, 50331648, 65528, 65472, 4294967168, 15360,
      4294966784, 65408, 4294965248, 16, 12288, 4294934528, 2080374784,
      2013265920, 4294950912, 524288,
    ],
  );
  function D(e) {
    return e.column++, (e.currentChar = e.source.charCodeAt(++e.index));
  }
  function $r(e) {
    let t = e.currentChar;
    if ((64512 & t) != 55296) return 0;
    let r = e.source.charCodeAt(e.index + 1);
    return (64512 & r) != 56320 ? 0 : 65536 + ((1023 & t) << 10) + (1023 & r);
  }
  function Jr(e, t) {
    (e.currentChar = e.source.charCodeAt(++e.index)),
      (e.flags |= 1),
      4 & t || ((e.column = 0), e.line++);
  }
  function qe(e) {
    (e.flags |= 1),
      (e.currentChar = e.source.charCodeAt(++e.index)),
      (e.column = 0),
      e.line++;
  }
  function fe(e) {
    return e < 65 ? e - 48 : (e - 65 + 10) & 15;
  }
  function i0(e) {
    switch (e) {
      case 134283266:
        return "NumericLiteral";
      case 134283267:
        return "StringLiteral";
      case 86021:
      case 86022:
        return "BooleanLiteral";
      case 86023:
        return "NullLiteral";
      case 65540:
        return "RegularExpression";
      case 67174408:
      case 67174409:
      case 131:
        return "TemplateLiteral";
      default:
        return 143360 & ~e
          ? 4096 & ~e
            ? "Punctuator"
            : "Keyword"
          : "Identifier";
    }
  }
  var q = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0,
      33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0,
      16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0,
      0, 0,
    ],
    o0 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 0, 0,
    ],
    ta = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 0, 0,
    ];
  function nr(e) {
    return e <= 127 ? o0[e] > 0 : Zu(e);
  }
  function Zt(e) {
    return e <= 127
      ? ta[e] > 0
      : (function (t) {
          return !!(1 & (ea[0 + (t >>> 5)] >>> t));
        })(e) ||
          e === 8204 ||
          e === 8205;
  }
  var ra = [
    "SingleLine",
    "MultiLine",
    "HTMLOpen",
    "HTMLClose",
    "HashbangComment",
  ];
  function Vu(e, t, r, n, u, a, i, f) {
    return 512 & n && T(e, 0), Zr(e, t, r, u, a, i, f);
  }
  function Zr(e, t, r, n, u, a, i) {
    let { index: f } = e;
    for (
      e.tokenIndex = e.index, e.tokenLine = e.line, e.tokenColumn = e.column;
      e.index < e.end;

    ) {
      if (8 & q[e.currentChar]) {
        let d = e.currentChar === 13;
        qe(e),
          d &&
            e.index < e.end &&
            e.currentChar === 10 &&
            (e.currentChar = t.charCodeAt(++e.index));
        break;
      }
      if ((8232 ^ e.currentChar) <= 1) {
        qe(e);
        break;
      }
      D(e),
        (e.tokenIndex = e.index),
        (e.tokenLine = e.line),
        (e.tokenColumn = e.column);
    }
    if (e.onComment) {
      let d = {
        start: { line: a, column: i },
        end: { line: e.tokenLine, column: e.tokenColumn },
      };
      e.onComment(ra[255 & n], t.slice(f, e.tokenIndex), u, e.tokenIndex, d);
    }
    return 1 | r;
  }
  function c0(e, t, r) {
    let { index: n } = e;
    for (; e.index < e.end; )
      if (e.currentChar < 43) {
        let u = !1;
        for (; e.currentChar === 42; )
          if ((u || ((r &= -5), (u = !0)), D(e) === 47)) {
            if ((D(e), e.onComment)) {
              let a = {
                start: { line: e.tokenLine, column: e.tokenColumn },
                end: { line: e.line, column: e.column },
              };
              e.onComment(ra[1], t.slice(n, e.index - 2), n - 2, e.index, a);
            }
            return (
              (e.tokenIndex = e.index),
              (e.tokenLine = e.line),
              (e.tokenColumn = e.column),
              r
            );
          }
        if (u) continue;
        8 & q[e.currentChar]
          ? e.currentChar === 13
            ? ((r |= 5), qe(e))
            : (Jr(e, r), (r = (-5 & r) | 1))
          : D(e);
      } else
        (8232 ^ e.currentChar) <= 1
          ? ((r = (-5 & r) | 1), qe(e))
          : ((r &= -5), D(e));
    T(e, 18);
  }
  var Re, Z;
  function l0(e, t) {
    let r = e.index,
      n = Re.Empty;
    e: for (;;) {
      let c = e.currentChar;
      if ((D(e), n & Re.Escape)) n &= ~Re.Escape;
      else
        switch (c) {
          case 47:
            if (n) break;
            break e;
          case 92:
            n |= Re.Escape;
            break;
          case 91:
            n |= Re.Class;
            break;
          case 93:
            n &= Re.Escape;
        }
      if (
        ((c !== 13 && c !== 10 && c !== 8232 && c !== 8233) || T(e, 34),
        e.index >= e.source.length)
      )
        return T(e, 34);
    }
    let u = e.index - 1,
      a = Z.Empty,
      i = e.currentChar,
      { index: f } = e;
    for (; Zt(i); ) {
      switch (i) {
        case 103:
          a & Z.Global && T(e, 36, "g"), (a |= Z.Global);
          break;
        case 105:
          a & Z.IgnoreCase && T(e, 36, "i"), (a |= Z.IgnoreCase);
          break;
        case 109:
          a & Z.Multiline && T(e, 36, "m"), (a |= Z.Multiline);
          break;
        case 117:
          a & Z.Unicode && T(e, 36, "u"),
            a & Z.UnicodeSets && T(e, 36, "vu"),
            (a |= Z.Unicode);
          break;
        case 118:
          a & Z.Unicode && T(e, 36, "uv"),
            a & Z.UnicodeSets && T(e, 36, "v"),
            (a |= Z.UnicodeSets);
          break;
        case 121:
          a & Z.Sticky && T(e, 36, "y"), (a |= Z.Sticky);
          break;
        case 115:
          a & Z.DotAll && T(e, 36, "s"), (a |= Z.DotAll);
          break;
        case 100:
          a & Z.Indices && T(e, 36, "d"), (a |= Z.Indices);
          break;
        default:
          T(e, 35);
      }
      i = D(e);
    }
    let d = e.source.slice(f, e.index),
      h = e.source.slice(r, u);
    return (
      (e.tokenRegExp = { pattern: h, flags: d }),
      128 & t && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)),
      (e.tokenValue = (function (c, o, l) {
        try {
          return new RegExp(o, l);
        } catch {
          try {
            return new RegExp(o, l), null;
          } catch {
            T(c, 34);
          }
        }
      })(e, h, d)),
      65540
    );
  }
  function d0(e, t, r) {
    let { index: n } = e,
      u = "",
      a = D(e),
      i = e.index;
    for (; !(8 & q[a]); ) {
      if (a === r)
        return (
          (u += e.source.slice(i, e.index)),
          D(e),
          128 & t && (e.tokenRaw = e.source.slice(n, e.index)),
          (e.tokenValue = u),
          134283267
        );
      if (!(8 & ~a) && a === 92) {
        if (
          ((u += e.source.slice(i, e.index)),
          (a = D(e)),
          a < 127 || a === 8232 || a === 8233)
        ) {
          let f = na(e, t, a);
          f >= 0 ? (u += String.fromCodePoint(f)) : ua(e, f, 0);
        } else u += String.fromCodePoint(a);
        i = e.index + 1;
      }
      e.index >= e.end && T(e, 16), (a = D(e));
    }
    T(e, 16);
  }
  function na(e, t, r, n = 0) {
    switch (r) {
      case 98:
        return 8;
      case 102:
        return 12;
      case 114:
        return 13;
      case 110:
        return 10;
      case 116:
        return 9;
      case 118:
        return 11;
      case 13:
        if (e.index < e.end) {
          let u = e.source.charCodeAt(e.index + 1);
          u === 10 && ((e.index = e.index + 1), (e.currentChar = u));
        }
      case 10:
      case 8232:
      case 8233:
        return (e.column = -1), e.line++, -1;
      case 48:
      case 49:
      case 50:
      case 51: {
        let u = r - 48,
          a = e.index + 1,
          i = e.column + 1;
        if (a < e.end) {
          let f = e.source.charCodeAt(a);
          if (32 & q[f]) {
            if (256 & t || n) return -2;
            if (
              ((e.currentChar = f),
              (u = (u << 3) | (f - 48)),
              a++,
              i++,
              a < e.end)
            ) {
              let d = e.source.charCodeAt(a);
              32 & q[d] &&
                ((e.currentChar = d), (u = (u << 3) | (d - 48)), a++, i++);
            }
            e.flags |= 64;
          } else if (u !== 0 || 512 & q[f]) {
            if (256 & t || n) return -2;
            e.flags |= 64;
          }
          (e.index = a - 1), (e.column = i - 1);
        }
        return u;
      }
      case 52:
      case 53:
      case 54:
      case 55: {
        if (n || 256 & t) return -2;
        let u = r - 48,
          a = e.index + 1,
          i = e.column + 1;
        if (a < e.end) {
          let f = e.source.charCodeAt(a);
          32 & q[f] &&
            ((u = (u << 3) | (f - 48)),
            (e.currentChar = f),
            (e.index = a),
            (e.column = i));
        }
        return (e.flags |= 64), u;
      }
      case 120: {
        let u = D(e);
        if (!(64 & q[u])) return -4;
        let a = fe(u),
          i = D(e);
        return 64 & q[i] ? (a << 4) | fe(i) : -4;
      }
      case 117: {
        let u = D(e);
        if (e.currentChar === 123) {
          let a = 0;
          for (; 64 & q[D(e)]; )
            if (((a = (a << 4) | fe(e.currentChar)), a > 1114111)) return -5;
          return e.currentChar < 1 || e.currentChar !== 125 ? -4 : a;
        }
        {
          if (!(64 & q[u])) return -4;
          let a = e.source.charCodeAt(e.index + 1);
          if (!(64 & q[a])) return -4;
          let i = e.source.charCodeAt(e.index + 2);
          if (!(64 & q[i])) return -4;
          let f = e.source.charCodeAt(e.index + 3);
          return 64 & q[f]
            ? ((e.index += 3),
              (e.column += 3),
              (e.currentChar = e.source.charCodeAt(e.index)),
              (fe(u) << 12) | (fe(a) << 8) | (fe(i) << 4) | fe(f))
            : -4;
        }
      }
      case 56:
      case 57:
        if (n || !(64 & t) || 256 & t) return -3;
        e.flags |= 4096;
      default:
        return r;
    }
  }
  function ua(e, t, r) {
    switch (t) {
      case -1:
        return;
      case -2:
        T(e, r ? 2 : 1);
      case -3:
        T(e, r ? 3 : 14);
      case -4:
        T(e, 7);
      case -5:
        T(e, 104);
    }
  }
  function aa(e, t) {
    let { index: r } = e,
      n = 67174409,
      u = "",
      a = D(e);
    for (; a !== 96; ) {
      if (a === 36 && e.source.charCodeAt(e.index + 1) === 123) {
        D(e), (n = 67174408);
        break;
      }
      if (a === 92)
        if (((a = D(e)), a > 126)) u += String.fromCodePoint(a);
        else {
          let { index: i, line: f, column: d } = e,
            h = na(e, 256 | t, a, 1);
          if (h >= 0) u += String.fromCodePoint(h);
          else {
            if (h !== -1 && 16384 & t) {
              (e.index = i),
                (e.line = f),
                (e.column = d),
                (u = null),
                (a = f0(e, a)),
                a < 0 && (n = 67174408);
              break;
            }
            ua(e, h, 1);
          }
        }
      else
        e.index < e.end &&
          (a === 13 &&
            e.source.charCodeAt(e.index) === 10 &&
            ((u += String.fromCodePoint(a)),
            (e.currentChar = e.source.charCodeAt(++e.index))),
          (((83 & a) < 3 && a === 10) || (8232 ^ a) <= 1) &&
            ((e.column = -1), e.line++),
          (u += String.fromCodePoint(a)));
      e.index >= e.end && T(e, 17), (a = D(e));
    }
    return (
      D(e),
      (e.tokenValue = u),
      (e.tokenRaw = e.source.slice(r + 1, e.index - (n === 67174409 ? 1 : 2))),
      n
    );
  }
  function f0(e, t) {
    for (; t !== 96; ) {
      switch (t) {
        case 36: {
          let r = e.index + 1;
          if (r < e.end && e.source.charCodeAt(r) === 123)
            return (e.index = r), e.column++, -t;
          break;
        }
        case 10:
        case 8232:
        case 8233:
          (e.column = -1), e.line++;
      }
      e.index >= e.end && T(e, 17), (t = D(e));
    }
    return t;
  }
  function h0(e, t) {
    return e.index >= e.end && T(e, 0), e.index--, e.column--, aa(e, t);
  }
  function Gu(e, t, r) {
    let n = e.currentChar,
      u = 0,
      a = 9,
      i = 64 & r ? 0 : 1,
      f = 0,
      d = 0;
    if (64 & r)
      (u = "." + $t(e, n)), (n = e.currentChar), n === 110 && T(e, 12);
    else {
      if (n === 48)
        if (((n = D(e)), (32 | n) == 120)) {
          for (r = 136, n = D(e); 4160 & q[n]; )
            n !== 95
              ? ((d = 1), (u = 16 * u + fe(n)), f++, (n = D(e)))
              : (d || T(e, 152), (d = 0), (n = D(e)));
          (f !== 0 && d) || T(e, f === 0 ? 21 : 153);
        } else if ((32 | n) == 111) {
          for (r = 132, n = D(e); 4128 & q[n]; )
            n !== 95
              ? ((d = 1), (u = 8 * u + (n - 48)), f++, (n = D(e)))
              : (d || T(e, 152), (d = 0), (n = D(e)));
          (f !== 0 && d) || T(e, f === 0 ? 0 : 153);
        } else if ((32 | n) == 98) {
          for (r = 130, n = D(e); 4224 & q[n]; )
            n !== 95
              ? ((d = 1), (u = 2 * u + (n - 48)), f++, (n = D(e)))
              : (d || T(e, 152), (d = 0), (n = D(e)));
          (f !== 0 && d) || T(e, f === 0 ? 0 : 153);
        } else if (32 & q[n])
          for (256 & t && T(e, 1), r = 1; 16 & q[n]; ) {
            if (512 & q[n]) {
              (r = 32), (i = 0);
              break;
            }
            (u = 8 * u + (n - 48)), (n = D(e));
          }
        else
          512 & q[n]
            ? (256 & t && T(e, 1), (e.flags |= 64), (r = 32))
            : n === 95 && T(e, 0);
      if (48 & r) {
        if (i) {
          for (; a >= 0 && 4112 & q[n]; )
            n !== 95
              ? ((d = 0), (u = 10 * u + (n - 48)), (n = D(e)), --a)
              : ((n = D(e)),
                (n === 95 || 32 & r) &&
                  Je(
                    e.index,
                    e.line,
                    e.column,
                    e.index + 1,
                    e.line,
                    e.column,
                    152,
                  ),
                (d = 1));
          if (
            (d &&
              Je(e.index, e.line, e.column, e.index + 1, e.line, e.column, 153),
            a >= 0 && !nr(n) && n !== 46)
          )
            return (
              (e.tokenValue = u),
              128 & t && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)),
              134283266
            );
        }
        (u += $t(e, n)),
          (n = e.currentChar),
          n === 46 &&
            (D(e) === 95 && T(e, 0),
            (r = 64),
            (u += "." + $t(e, e.currentChar)),
            (n = e.currentChar));
      }
    }
    let h = e.index,
      c = 0;
    if (n === 110 && 128 & r) (c = 1), (n = D(e));
    else if ((32 | n) == 101) {
      (n = D(e)), 256 & q[n] && (n = D(e));
      let { index: o } = e;
      16 & q[n] || T(e, 11),
        (u += e.source.substring(h, o) + $t(e, n)),
        (n = e.currentChar);
    }
    return (
      ((e.index < e.end && 16 & q[n]) || nr(n)) && T(e, 13),
      c
        ? ((e.tokenRaw = e.source.slice(e.tokenIndex, e.index)),
          (e.tokenValue = BigInt(e.tokenRaw.slice(0, -1).replaceAll("_", ""))),
          134283388)
        : ((e.tokenValue =
            15 & r
              ? u
              : 32 & r
                ? parseFloat(e.source.substring(e.tokenIndex, e.index))
                : +u),
          128 & t && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)),
          134283266)
    );
  }
  function $t(e, t) {
    let r = 0,
      n = e.index,
      u = "";
    for (; 4112 & q[t]; )
      if (t !== 95) (r = 0), (t = D(e));
      else {
        let { index: a } = e;
        (t = D(e)) === 95 &&
          Je(e.index, e.line, e.column, e.index + 1, e.line, e.column, 152),
          (r = 1),
          (u += e.source.substring(n, a)),
          (n = e.index);
      }
    return (
      r && Je(e.index, e.line, e.column, e.index + 1, e.line, e.column, 153),
      u + e.source.substring(n, e.index)
    );
  }
  (function (e) {
    (e[(e.Empty = 0)] = "Empty"),
      (e[(e.Escape = 1)] = "Escape"),
      (e[(e.Class = 2)] = "Class");
  })(Re || (Re = {})),
    (function (e) {
      (e[(e.Empty = 0)] = "Empty"),
        (e[(e.IgnoreCase = 1)] = "IgnoreCase"),
        (e[(e.Global = 2)] = "Global"),
        (e[(e.Multiline = 4)] = "Multiline"),
        (e[(e.Unicode = 16)] = "Unicode"),
        (e[(e.Sticky = 8)] = "Sticky"),
        (e[(e.DotAll = 32)] = "DotAll"),
        (e[(e.Indices = 64)] = "Indices"),
        (e[(e.UnicodeSets = 128)] = "UnicodeSets");
    })(Z || (Z = {}));
  var Y = [
      "end of source",
      "identifier",
      "number",
      "string",
      "regular expression",
      "false",
      "true",
      "null",
      "template continuation",
      "template tail",
      "=>",
      "(",
      "{",
      ".",
      "...",
      "}",
      ")",
      ";",
      ",",
      "[",
      "]",
      ":",
      "?",
      "'",
      '"',
      "++",
      "--",
      "=",
      "<<=",
      ">>=",
      ">>>=",
      "**=",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "^=",
      "|=",
      "&=",
      "||=",
      "&&=",
      "??=",
      "typeof",
      "delete",
      "void",
      "!",
      "~",
      "+",
      "-",
      "in",
      "instanceof",
      "*",
      "%",
      "/",
      "**",
      "&&",
      "||",
      "===",
      "!==",
      "==",
      "!=",
      "<=",
      ">=",
      "<",
      ">",
      "<<",
      ">>",
      ">>>",
      "&",
      "|",
      "^",
      "var",
      "let",
      "const",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "debugger",
      "default",
      "do",
      "else",
      "export",
      "extends",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "while",
      "with",
      "implements",
      "interface",
      "package",
      "private",
      "protected",
      "public",
      "static",
      "yield",
      "as",
      "async",
      "await",
      "constructor",
      "get",
      "set",
      "accessor",
      "from",
      "of",
      "enum",
      "eval",
      "arguments",
      "escaped keyword",
      "escaped future reserved keyword",
      "reserved if strict",
      "#",
      "BigIntLiteral",
      "??",
      "?.",
      "WhiteSpace",
      "Illegal",
      "LineTerminator",
      "PrivateField",
      "Template",
      "@",
      "target",
      "meta",
      "LineFeed",
      "Escaped",
      "JSXText",
    ],
    sa = Object.create(null, {
      this: { value: 86111 },
      function: { value: 86104 },
      if: { value: 20569 },
      return: { value: 20572 },
      var: { value: 86088 },
      else: { value: 20563 },
      for: { value: 20567 },
      new: { value: 86107 },
      in: { value: 8673330 },
      typeof: { value: 16863275 },
      while: { value: 20578 },
      case: { value: 20556 },
      break: { value: 20555 },
      try: { value: 20577 },
      catch: { value: 20557 },
      delete: { value: 16863276 },
      throw: { value: 86112 },
      switch: { value: 86110 },
      continue: { value: 20559 },
      default: { value: 20561 },
      instanceof: { value: 8411187 },
      do: { value: 20562 },
      void: { value: 16863277 },
      finally: { value: 20566 },
      async: { value: 209005 },
      await: { value: 209006 },
      class: { value: 86094 },
      const: { value: 86090 },
      constructor: { value: 12399 },
      debugger: { value: 20560 },
      export: { value: 20564 },
      extends: { value: 20565 },
      false: { value: 86021 },
      from: { value: 12403 },
      get: { value: 12400 },
      implements: { value: 36964 },
      import: { value: 86106 },
      interface: { value: 36965 },
      let: { value: 241737 },
      null: { value: 86023 },
      of: { value: 274548 },
      package: { value: 36966 },
      private: { value: 36967 },
      protected: { value: 36968 },
      public: { value: 36969 },
      set: { value: 12401 },
      static: { value: 36970 },
      super: { value: 86109 },
      true: { value: 86022 },
      with: { value: 20579 },
      yield: { value: 241771 },
      enum: { value: 86133 },
      eval: { value: 537079926 },
      as: { value: 77932 },
      arguments: { value: 537079927 },
      target: { value: 209029 },
      meta: { value: 209030 },
      accessor: { value: 12402 },
    });
  function Wu(e, t, r) {
    for (; ta[D(e)]; );
    return (
      (e.tokenValue = e.source.slice(e.tokenIndex, e.index)),
      e.currentChar !== 92 && e.currentChar <= 126
        ? sa[e.tokenValue] || 208897
        : en(e, t, 0, r)
    );
  }
  function m0(e, t) {
    let r = ia(e);
    return (
      nr(r) || T(e, 5),
      (e.tokenValue = String.fromCodePoint(r)),
      en(e, t, 1, 4 & q[r])
    );
  }
  function en(e, t, r, n) {
    let u = e.index;
    for (; e.index < e.end; )
      if (e.currentChar === 92) {
        (e.tokenValue += e.source.slice(u, e.index)), (r = 1);
        let i = ia(e);
        Zt(i) || T(e, 5),
          (n = n && 4 & q[i]),
          (e.tokenValue += String.fromCodePoint(i)),
          (u = e.index);
      } else {
        let i = $r(e);
        if (i > 0)
          Zt(i) || T(e, 20, String.fromCodePoint(i)),
            (e.currentChar = i),
            e.index++,
            e.column++;
        else if (!Zt(e.currentChar)) break;
        D(e);
      }
    e.index <= e.end && (e.tokenValue += e.source.slice(u, e.index));
    let { length: a } = e.tokenValue;
    if (n && a >= 2 && a <= 11) {
      let i = sa[e.tokenValue];
      return i === void 0
        ? 208897 | (r ? -2147483648 : 0)
        : r
          ? i === 209006
            ? 524800 & t
              ? -2147483528
              : -2147483648 | i
            : 256 & t
              ? i === 36970
                ? -2147483527
                : 36864 & ~i
                  ? 20480 & ~i
                    ? -2147274630
                    : 67108864 & t && !(2048 & t)
                      ? -2147483648 | i
                      : -2147483528
                  : -2147483527
              : !(67108864 & t) || 2048 & t || 20480 & ~i
                ? i === 241771
                  ? 67108864 & t
                    ? -2147274630
                    : 262144 & t
                      ? -2147483528
                      : -2147483648 | i
                  : i === 209005
                    ? -2147274630
                    : 36864 & ~i
                      ? -2147483528
                      : 12288 | i | -2147483648
                : -2147483648 | i
          : i;
    }
    return 208897 | (r ? -2147483648 : 0);
  }
  function E0(e) {
    let t = D(e);
    if (t === 92) return 130;
    let r = $r(e);
    return r && (t = r), nr(t) || T(e, 96), 130;
  }
  function ia(e) {
    return (
      e.source.charCodeAt(e.index + 1) !== 117 && T(e, 5),
      (e.currentChar = e.source.charCodeAt((e.index += 2))),
      (function (t) {
        let r = 0,
          n = t.currentChar;
        if (n === 123) {
          let f = t.index - 2;
          for (; 64 & q[D(t)]; )
            (r = (r << 4) | fe(t.currentChar)),
              r > 1114111 &&
                Je(f, t.line, t.column, t.index, t.line, t.column, 104);
          return (
            t.currentChar !== 125 &&
              Je(f, t.line, t.column, t.index, t.line, t.column, 7),
            D(t),
            r
          );
        }
        64 & q[n] || T(t, 7);
        let u = t.source.charCodeAt(t.index + 1);
        64 & q[u] || T(t, 7);
        let a = t.source.charCodeAt(t.index + 2);
        64 & q[a] || T(t, 7);
        let i = t.source.charCodeAt(t.index + 3);
        return (
          64 & q[i] || T(t, 7),
          (r = (fe(n) << 12) | (fe(u) << 8) | (fe(a) << 4) | fe(i)),
          (t.currentChar = t.source.charCodeAt((t.index += 4))),
          r
        );
      })(e)
    );
  }
  var T0 = [
    128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 135, 127, 127, 129, 128,
    128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
    128, 128, 127, 16842798, 134283267, 130, 208897, 8391477, 8390213,
    134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014,
    134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266,
    134283266, 134283266, 134283266, 21, 1074790417, 8456256, 1077936155,
    8390721, 22, 132, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
    208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
    208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
    208897, 69271571, 136, 20, 8389959, 208897, 131, 4096, 4096, 4096, 4096,
    4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897,
    4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096,
    2162700, 8389702, 1074790415, 16842799, 128,
  ];
  function M(e, t) {
    (e.flags = 1 ^ (1 | e.flags)),
      (e.startIndex = e.index),
      (e.startColumn = e.column),
      (e.startLine = e.line),
      e.setToken(oa(e, t, 0));
  }
  function oa(e, t, r) {
    let n = e.index === 0,
      { source: u } = e,
      a = e.index,
      i = e.line,
      f = e.column;
    for (; e.index < e.end; ) {
      (e.tokenIndex = e.index),
        (e.tokenColumn = e.column),
        (e.tokenLine = e.line);
      let h = e.currentChar;
      if (h <= 126) {
        let c = T0[h];
        switch (c) {
          case 67174411:
          case 16:
          case 2162700:
          case 1074790415:
          case 69271571:
          case 20:
          case 21:
          case 1074790417:
          case 18:
          case 16842799:
          case 132:
          case 128:
            return D(e), c;
          case 208897:
            return Wu(e, t, 0);
          case 4096:
            return Wu(e, t, 1);
          case 134283266:
            return Gu(e, t, 144);
          case 134283267:
            return d0(e, t, h);
          case 131:
            return aa(e, t);
          case 136:
            return m0(e, t);
          case 130:
            return E0(e);
          case 127:
            D(e);
            break;
          case 129:
            (r |= 5), qe(e);
            break;
          case 135:
            Jr(e, r), (r = (-5 & r) | 1);
            break;
          case 8456256: {
            let o = D(e);
            if (e.index < e.end) {
              if (o === 60)
                return e.index < e.end && D(e) === 61
                  ? (D(e), 4194332)
                  : 8390978;
              if (o === 61) return D(e), 8390718;
              if (o === 33) {
                let l = e.index + 1;
                if (
                  l + 1 < e.end &&
                  u.charCodeAt(l) === 45 &&
                  u.charCodeAt(l + 1) == 45
                ) {
                  (e.column += 3),
                    (e.currentChar = u.charCodeAt((e.index += 3))),
                    (r = Vu(
                      e,
                      u,
                      r,
                      t,
                      2,
                      e.tokenIndex,
                      e.tokenLine,
                      e.tokenColumn,
                    )),
                    (a = e.tokenIndex),
                    (i = e.tokenLine),
                    (f = e.tokenColumn);
                  continue;
                }
                return 8456256;
              }
            }
            return 8456256;
          }
          case 1077936155: {
            D(e);
            let o = e.currentChar;
            return o === 61
              ? D(e) === 61
                ? (D(e), 8390458)
                : 8390460
              : o === 62
                ? (D(e), 10)
                : 1077936155;
          }
          case 16842798:
            return D(e) !== 61
              ? 16842798
              : D(e) !== 61
                ? 8390461
                : (D(e), 8390459);
          case 8391477:
            return D(e) !== 61 ? 8391477 : (D(e), 4194340);
          case 8391476: {
            if ((D(e), e.index >= e.end)) return 8391476;
            let o = e.currentChar;
            return o === 61
              ? (D(e), 4194338)
              : o !== 42
                ? 8391476
                : D(e) !== 61
                  ? 8391735
                  : (D(e), 4194335);
          }
          case 8389959:
            return D(e) !== 61 ? 8389959 : (D(e), 4194341);
          case 25233968: {
            D(e);
            let o = e.currentChar;
            return o === 43
              ? (D(e), 33619993)
              : o === 61
                ? (D(e), 4194336)
                : 25233968;
          }
          case 25233969: {
            D(e);
            let o = e.currentChar;
            if (o === 45) {
              if ((D(e), (1 & r || n) && e.currentChar === 62)) {
                64 & t || T(e, 112),
                  D(e),
                  (r = Vu(e, u, r, t, 3, a, i, f)),
                  (a = e.tokenIndex),
                  (i = e.tokenLine),
                  (f = e.tokenColumn);
                continue;
              }
              return 33619994;
            }
            return o === 61 ? (D(e), 4194337) : 25233969;
          }
          case 8457014:
            if ((D(e), e.index < e.end)) {
              let o = e.currentChar;
              if (o === 47) {
                D(e),
                  (r = Zr(
                    e,
                    u,
                    r,
                    0,
                    e.tokenIndex,
                    e.tokenLine,
                    e.tokenColumn,
                  )),
                  (a = e.tokenIndex),
                  (i = e.tokenLine),
                  (f = e.tokenColumn);
                continue;
              }
              if (o === 42) {
                D(e),
                  (r = c0(e, u, r)),
                  (a = e.tokenIndex),
                  (i = e.tokenLine),
                  (f = e.tokenColumn);
                continue;
              }
              if (8192 & t) return l0(e, t);
              if (o === 61) return D(e), 4259875;
            }
            return 8457014;
          case 67108877: {
            let o = D(e);
            if (o >= 48 && o <= 57) return Gu(e, t, 80);
            if (o === 46) {
              let l = e.index + 1;
              if (l < e.end && u.charCodeAt(l) === 46)
                return (
                  (e.column += 2),
                  (e.currentChar = u.charCodeAt((e.index += 2))),
                  14
                );
            }
            return 67108877;
          }
          case 8389702: {
            D(e);
            let o = e.currentChar;
            return o === 124
              ? (D(e), e.currentChar === 61 ? (D(e), 4194344) : 8913465)
              : o === 61
                ? (D(e), 4194342)
                : 8389702;
          }
          case 8390721: {
            D(e);
            let o = e.currentChar;
            if (o === 61) return D(e), 8390719;
            if (o !== 62) return 8390721;
            if ((D(e), e.index < e.end)) {
              let l = e.currentChar;
              if (l === 62) return D(e) === 61 ? (D(e), 4194334) : 8390980;
              if (l === 61) return D(e), 4194333;
            }
            return 8390979;
          }
          case 8390213: {
            D(e);
            let o = e.currentChar;
            return o === 38
              ? (D(e), e.currentChar === 61 ? (D(e), 4194345) : 8913720)
              : o === 61
                ? (D(e), 4194343)
                : 8390213;
          }
          case 22: {
            let o = D(e);
            if (o === 63)
              return D(e), e.currentChar === 61 ? (D(e), 4194346) : 276824445;
            if (o === 46) {
              let l = e.index + 1;
              if (l < e.end && ((o = u.charCodeAt(l)), !(o >= 48 && o <= 57)))
                return D(e), 67108990;
            }
            return 22;
          }
        }
      } else {
        if ((8232 ^ h) <= 1) {
          (r = (-5 & r) | 1), qe(e);
          continue;
        }
        let c = $r(e);
        if ((c > 0 && (h = c), Zu(h)))
          return (e.tokenValue = ""), en(e, t, 0, 0);
        if (
          (d = h) === 160 ||
          d === 65279 ||
          d === 133 ||
          d === 5760 ||
          (d >= 8192 && d <= 8203) ||
          d === 8239 ||
          d === 8287 ||
          d === 12288 ||
          d === 8201 ||
          d === 65519
        ) {
          D(e);
          continue;
        }
        T(e, 20, String.fromCodePoint(h));
      }
    }
    var d;
    return 1048576;
  }
  var p0 = {
      AElig: "\xC6",
      AMP: "&",
      Aacute: "\xC1",
      Abreve: "\u0102",
      Acirc: "\xC2",
      Acy: "\u0410",
      Afr: "\u{1D504}",
      Agrave: "\xC0",
      Alpha: "\u0391",
      Amacr: "\u0100",
      And: "\u2A53",
      Aogon: "\u0104",
      Aopf: "\u{1D538}",
      ApplyFunction: "\u2061",
      Aring: "\xC5",
      Ascr: "\u{1D49C}",
      Assign: "\u2254",
      Atilde: "\xC3",
      Auml: "\xC4",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      Barwed: "\u2306",
      Bcy: "\u0411",
      Because: "\u2235",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      Bfr: "\u{1D505}",
      Bopf: "\u{1D539}",
      Breve: "\u02D8",
      Bscr: "\u212C",
      Bumpeq: "\u224E",
      CHcy: "\u0427",
      COPY: "\xA9",
      Cacute: "\u0106",
      Cap: "\u22D2",
      CapitalDifferentialD: "\u2145",
      Cayleys: "\u212D",
      Ccaron: "\u010C",
      Ccedil: "\xC7",
      Ccirc: "\u0108",
      Cconint: "\u2230",
      Cdot: "\u010A",
      Cedilla: "\xB8",
      CenterDot: "\xB7",
      Cfr: "\u212D",
      Chi: "\u03A7",
      CircleDot: "\u2299",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      Colon: "\u2237",
      Colone: "\u2A74",
      Congruent: "\u2261",
      Conint: "\u222F",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      Coproduct: "\u2210",
      CounterClockwiseContourIntegral: "\u2233",
      Cross: "\u2A2F",
      Cscr: "\u{1D49E}",
      Cup: "\u22D3",
      CupCap: "\u224D",
      DD: "\u2145",
      DDotrahd: "\u2911",
      DJcy: "\u0402",
      DScy: "\u0405",
      DZcy: "\u040F",
      Dagger: "\u2021",
      Darr: "\u21A1",
      Dashv: "\u2AE4",
      Dcaron: "\u010E",
      Dcy: "\u0414",
      Del: "\u2207",
      Delta: "\u0394",
      Dfr: "\u{1D507}",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      Diamond: "\u22C4",
      DifferentialD: "\u2146",
      Dopf: "\u{1D53B}",
      Dot: "\xA8",
      DotDot: "\u20DC",
      DotEqual: "\u2250",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      Downarrow: "\u21D3",
      Dscr: "\u{1D49F}",
      Dstrok: "\u0110",
      ENG: "\u014A",
      ETH: "\xD0",
      Eacute: "\xC9",
      Ecaron: "\u011A",
      Ecirc: "\xCA",
      Ecy: "\u042D",
      Edot: "\u0116",
      Efr: "\u{1D508}",
      Egrave: "\xC8",
      Element: "\u2208",
      Emacr: "\u0112",
      EmptySmallSquare: "\u25FB",
      EmptyVerySmallSquare: "\u25AB",
      Eogon: "\u0118",
      Eopf: "\u{1D53C}",
      Epsilon: "\u0395",
      Equal: "\u2A75",
      EqualTilde: "\u2242",
      Equilibrium: "\u21CC",
      Escr: "\u2130",
      Esim: "\u2A73",
      Eta: "\u0397",
      Euml: "\xCB",
      Exists: "\u2203",
      ExponentialE: "\u2147",
      Fcy: "\u0424",
      Ffr: "\u{1D509}",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      Fopf: "\u{1D53D}",
      ForAll: "\u2200",
      Fouriertrf: "\u2131",
      Fscr: "\u2131",
      GJcy: "\u0403",
      GT: ">",
      Gamma: "\u0393",
      Gammad: "\u03DC",
      Gbreve: "\u011E",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      Gcy: "\u0413",
      Gdot: "\u0120",
      Gfr: "\u{1D50A}",
      Gg: "\u22D9",
      Gopf: "\u{1D53E}",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      Gt: "\u226B",
      HARDcy: "\u042A",
      Hacek: "\u02C7",
      Hat: "^",
      Hcirc: "\u0124",
      Hfr: "\u210C",
      HilbertSpace: "\u210B",
      Hopf: "\u210D",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      Hstrok: "\u0126",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      IEcy: "\u0415",
      IJlig: "\u0132",
      IOcy: "\u0401",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Icy: "\u0418",
      Idot: "\u0130",
      Ifr: "\u2111",
      Igrave: "\xCC",
      Im: "\u2111",
      Imacr: "\u012A",
      ImaginaryI: "\u2148",
      Implies: "\u21D2",
      Int: "\u222C",
      Integral: "\u222B",
      Intersection: "\u22C2",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      Iogon: "\u012E",
      Iopf: "\u{1D540}",
      Iota: "\u0399",
      Iscr: "\u2110",
      Itilde: "\u0128",
      Iukcy: "\u0406",
      Iuml: "\xCF",
      Jcirc: "\u0134",
      Jcy: "\u0419",
      Jfr: "\u{1D50D}",
      Jopf: "\u{1D541}",
      Jscr: "\u{1D4A5}",
      Jsercy: "\u0408",
      Jukcy: "\u0404",
      KHcy: "\u0425",
      KJcy: "\u040C",
      Kappa: "\u039A",
      Kcedil: "\u0136",
      Kcy: "\u041A",
      Kfr: "\u{1D50E}",
      Kopf: "\u{1D542}",
      Kscr: "\u{1D4A6}",
      LJcy: "\u0409",
      LT: "<",
      Lacute: "\u0139",
      Lambda: "\u039B",
      Lang: "\u27EA",
      Laplacetrf: "\u2112",
      Larr: "\u219E",
      Lcaron: "\u013D",
      Lcedil: "\u013B",
      Lcy: "\u041B",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      LeftRightArrow: "\u2194",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      Leftarrow: "\u21D0",
      Leftrightarrow: "\u21D4",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      LessLess: "\u2AA1",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      Lfr: "\u{1D50F}",
      Ll: "\u22D8",
      Lleftarrow: "\u21DA",
      Lmidot: "\u013F",
      LongLeftArrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      LongRightArrow: "\u27F6",
      Longleftarrow: "\u27F8",
      Longleftrightarrow: "\u27FA",
      Longrightarrow: "\u27F9",
      Lopf: "\u{1D543}",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      Lscr: "\u2112",
      Lsh: "\u21B0",
      Lstrok: "\u0141",
      Lt: "\u226A",
      Map: "\u2905",
      Mcy: "\u041C",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      MinusPlus: "\u2213",
      Mopf: "\u{1D544}",
      Mscr: "\u2133",
      Mu: "\u039C",
      NJcy: "\u040A",
      Nacute: "\u0143",
      Ncaron: "\u0147",
      Ncedil: "\u0145",
      Ncy: "\u041D",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: `
`,
      Nfr: "\u{1D511}",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      Not: "\u2AEC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      Nscr: "\u{1D4A9}",
      Ntilde: "\xD1",
      Nu: "\u039D",
      OElig: "\u0152",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Ocy: "\u041E",
      Odblac: "\u0150",
      Ofr: "\u{1D512}",
      Ograve: "\xD2",
      Omacr: "\u014C",
      Omega: "\u03A9",
      Omicron: "\u039F",
      Oopf: "\u{1D546}",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      Or: "\u2A54",
      Oscr: "\u{1D4AA}",
      Oslash: "\xD8",
      Otilde: "\xD5",
      Otimes: "\u2A37",
      Ouml: "\xD6",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      PartialD: "\u2202",
      Pcy: "\u041F",
      Pfr: "\u{1D513}",
      Phi: "\u03A6",
      Pi: "\u03A0",
      PlusMinus: "\xB1",
      Poincareplane: "\u210C",
      Popf: "\u2119",
      Pr: "\u2ABB",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      Prime: "\u2033",
      Product: "\u220F",
      Proportion: "\u2237",
      Proportional: "\u221D",
      Pscr: "\u{1D4AB}",
      Psi: "\u03A8",
      QUOT: '"',
      Qfr: "\u{1D514}",
      Qopf: "\u211A",
      Qscr: "\u{1D4AC}",
      RBarr: "\u2910",
      REG: "\xAE",
      Racute: "\u0154",
      Rang: "\u27EB",
      Rarr: "\u21A0",
      Rarrtl: "\u2916",
      Rcaron: "\u0158",
      Rcedil: "\u0156",
      Rcy: "\u0420",
      Re: "\u211C",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      Rfr: "\u211C",
      Rho: "\u03A1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      Rightarrow: "\u21D2",
      Ropf: "\u211D",
      RoundImplies: "\u2970",
      Rrightarrow: "\u21DB",
      Rscr: "\u211B",
      Rsh: "\u21B1",
      RuleDelayed: "\u29F4",
      SHCHcy: "\u0429",
      SHcy: "\u0428",
      SOFTcy: "\u042C",
      Sacute: "\u015A",
      Sc: "\u2ABC",
      Scaron: "\u0160",
      Scedil: "\u015E",
      Scirc: "\u015C",
      Scy: "\u0421",
      Sfr: "\u{1D516}",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      Sigma: "\u03A3",
      SmallCircle: "\u2218",
      Sopf: "\u{1D54A}",
      Sqrt: "\u221A",
      Square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      Sscr: "\u{1D4AE}",
      Star: "\u22C6",
      Sub: "\u22D0",
      Subset: "\u22D0",
      SubsetEqual: "\u2286",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      Sup: "\u22D1",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      Supset: "\u22D1",
      THORN: "\xDE",
      TRADE: "\u2122",
      TSHcy: "\u040B",
      TScy: "\u0426",
      Tab: "	",
      Tau: "\u03A4",
      Tcaron: "\u0164",
      Tcedil: "\u0162",
      Tcy: "\u0422",
      Tfr: "\u{1D517}",
      Therefore: "\u2234",
      Theta: "\u0398",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      Tilde: "\u223C",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      Topf: "\u{1D54B}",
      TripleDot: "\u20DB",
      Tscr: "\u{1D4AF}",
      Tstrok: "\u0166",
      Uacute: "\xDA",
      Uarr: "\u219F",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      Ubreve: "\u016C",
      Ucirc: "\xDB",
      Ucy: "\u0423",
      Udblac: "\u0170",
      Ufr: "\u{1D518}",
      Ugrave: "\xD9",
      Umacr: "\u016A",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      Uopf: "\u{1D54C}",
      UpArrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      UpEquilibrium: "\u296E",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      Uparrow: "\u21D1",
      Updownarrow: "\u21D5",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      Upsilon: "\u03A5",
      Uring: "\u016E",
      Uscr: "\u{1D4B0}",
      Utilde: "\u0168",
      Uuml: "\xDC",
      VDash: "\u22AB",
      Vbar: "\u2AEB",
      Vcy: "\u0412",
      Vdash: "\u22A9",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      Verbar: "\u2016",
      Vert: "\u2016",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      Vopf: "\u{1D54D}",
      Vscr: "\u{1D4B1}",
      Vvdash: "\u22AA",
      Wcirc: "\u0174",
      Wedge: "\u22C0",
      Wfr: "\u{1D51A}",
      Wopf: "\u{1D54E}",
      Wscr: "\u{1D4B2}",
      Xfr: "\u{1D51B}",
      Xi: "\u039E",
      Xopf: "\u{1D54F}",
      Xscr: "\u{1D4B3}",
      YAcy: "\u042F",
      YIcy: "\u0407",
      YUcy: "\u042E",
      Yacute: "\xDD",
      Ycirc: "\u0176",
      Ycy: "\u042B",
      Yfr: "\u{1D51C}",
      Yopf: "\u{1D550}",
      Yscr: "\u{1D4B4}",
      Yuml: "\u0178",
      ZHcy: "\u0416",
      Zacute: "\u0179",
      Zcaron: "\u017D",
      Zcy: "\u0417",
      Zdot: "\u017B",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      Zfr: "\u2128",
      Zopf: "\u2124",
      Zscr: "\u{1D4B5}",
      aacute: "\xE1",
      abreve: "\u0103",
      ac: "\u223E",
      acE: "\u223E\u0333",
      acd: "\u223F",
      acirc: "\xE2",
      acute: "\xB4",
      acy: "\u0430",
      aelig: "\xE6",
      af: "\u2061",
      afr: "\u{1D51E}",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      alpha: "\u03B1",
      amacr: "\u0101",
      amalg: "\u2A3F",
      amp: "&",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      aogon: "\u0105",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apE: "\u2A70",
      apacir: "\u2A6F",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      approx: "\u2248",
      approxeq: "\u224A",
      aring: "\xE5",
      ascr: "\u{1D4B6}",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      atilde: "\xE3",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      bNot: "\u2AED",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      barvee: "\u22BD",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bnot: "\u2310",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxDL: "\u2557",
      boxDR: "\u2554",
      boxDl: "\u2556",
      boxDr: "\u2553",
      boxH: "\u2550",
      boxHD: "\u2566",
      boxHU: "\u2569",
      boxHd: "\u2564",
      boxHu: "\u2567",
      boxUL: "\u255D",
      boxUR: "\u255A",
      boxUl: "\u255C",
      boxUr: "\u2559",
      boxV: "\u2551",
      boxVH: "\u256C",
      boxVL: "\u2563",
      boxVR: "\u2560",
      boxVh: "\u256B",
      boxVl: "\u2562",
      boxVr: "\u255F",
      boxbox: "\u29C9",
      boxdL: "\u2555",
      boxdR: "\u2552",
      boxdl: "\u2510",
      boxdr: "\u250C",
      boxh: "\u2500",
      boxhD: "\u2565",
      boxhU: "\u2568",
      boxhd: "\u252C",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxuL: "\u255B",
      boxuR: "\u2558",
      boxul: "\u2518",
      boxur: "\u2514",
      boxv: "\u2502",
      boxvH: "\u256A",
      boxvL: "\u2561",
      boxvR: "\u255E",
      boxvh: "\u253C",
      boxvl: "\u2524",
      boxvr: "\u251C",
      bprime: "\u2035",
      breve: "\u02D8",
      brvbar: "\xA6",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      bumpeq: "\u224F",
      cacute: "\u0107",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      ccaps: "\u2A4D",
      ccaron: "\u010D",
      ccedil: "\xE7",
      ccirc: "\u0109",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      cdot: "\u010B",
      cedil: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      centerdot: "\xB7",
      cfr: "\u{1D520}",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      chi: "\u03C7",
      cir: "\u25CB",
      cirE: "\u29C3",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledR: "\xAE",
      circledS: "\u24C8",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      clubs: "\u2663",
      clubsuit: "\u2663",
      colon: ":",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      conint: "\u222E",
      copf: "\u{1D554}",
      coprod: "\u2210",
      copy: "\xA9",
      copysr: "\u2117",
      crarr: "\u21B5",
      cross: "\u2717",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      dArr: "\u21D3",
      dHar: "\u2965",
      dagger: "\u2020",
      daleth: "\u2138",
      darr: "\u2193",
      dash: "\u2010",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      dcaron: "\u010F",
      dcy: "\u0434",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      ddotseq: "\u2A77",
      deg: "\xB0",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      dfr: "\u{1D521}",
      dharl: "\u21C3",
      dharr: "\u21C2",
      diam: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      dopf: "\u{1D555}",
      dot: "\u02D9",
      doteq: "\u2250",
      doteqdot: "\u2251",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      downarrow: "\u2193",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      dscr: "\u{1D4B9}",
      dscy: "\u0455",
      dsol: "\u29F6",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      eDDot: "\u2A77",
      eDot: "\u2251",
      eacute: "\xE9",
      easter: "\u2A6E",
      ecaron: "\u011B",
      ecir: "\u2256",
      ecirc: "\xEA",
      ecolon: "\u2255",
      ecy: "\u044D",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      emptyv: "\u2205",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      eng: "\u014B",
      ensp: "\u2002",
      eogon: "\u0119",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      equals: "=",
      equest: "\u225F",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erDot: "\u2253",
      erarr: "\u2971",
      escr: "\u212F",
      esdot: "\u2250",
      esim: "\u2242",
      eta: "\u03B7",
      eth: "\xF0",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      expectation: "\u2130",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      fopf: "\u{1D557}",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      fscr: "\u{1D4BB}",
      gE: "\u2267",
      gEl: "\u2A8C",
      gacute: "\u01F5",
      gamma: "\u03B3",
      gammad: "\u03DD",
      gap: "\u2A86",
      gbreve: "\u011F",
      gcirc: "\u011D",
      gcy: "\u0433",
      gdot: "\u0121",
      ge: "\u2265",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      gfr: "\u{1D524}",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      gjcy: "\u0453",
      gl: "\u2277",
      glE: "\u2A92",
      gla: "\u2AA5",
      glj: "\u2AA4",
      gnE: "\u2269",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      gopf: "\u{1D558}",
      grave: "`",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      hArr: "\u21D4",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      hardcy: "\u044A",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      hbar: "\u210F",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      hfr: "\u{1D525}",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      hstrok: "\u0127",
      hybull: "\u2043",
      hyphen: "\u2010",
      iacute: "\xED",
      ic: "\u2063",
      icirc: "\xEE",
      icy: "\u0438",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      ifr: "\u{1D526}",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      ijlig: "\u0133",
      imacr: "\u012B",
      image: "\u2111",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      intercal: "\u22BA",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      iocy: "\u0451",
      iogon: "\u012F",
      iopf: "\u{1D55A}",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isinE: "\u22F9",
      isindot: "\u22F5",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      itilde: "\u0129",
      iukcy: "\u0456",
      iuml: "\xEF",
      jcirc: "\u0135",
      jcy: "\u0439",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      jopf: "\u{1D55B}",
      jscr: "\u{1D4BF}",
      jsercy: "\u0458",
      jukcy: "\u0454",
      kappa: "\u03BA",
      kappav: "\u03F0",
      kcedil: "\u0137",
      kcy: "\u043A",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      khcy: "\u0445",
      kjcy: "\u045C",
      kopf: "\u{1D55C}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      lArr: "\u21D0",
      lAtail: "\u291B",
      lBarr: "\u290E",
      lE: "\u2266",
      lEg: "\u2A8B",
      lHar: "\u2962",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      lambda: "\u03BB",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      laquo: "\xAB",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      lcaron: "\u013E",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      le: "\u2264",
      leftarrow: "\u2190",
      leftarrowtail: "\u21A2",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      leftthreetimes: "\u22CB",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      lessgtr: "\u2276",
      lesssim: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      ljcy: "\u0459",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      llhard: "\u296B",
      lltri: "\u25FA",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnE: "\u2268",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      longleftarrow: "\u27F5",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      lscr: "\u{1D4C1}",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      lstrok: "\u0142",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltrPar: "\u2996",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      mDDot: "\u223A",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      mcy: "\u043C",
      mdash: "\u2014",
      measuredangle: "\u2221",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nGg: "\u22D9\u0338",
      nGt: "\u226B\u20D2",
      nGtv: "\u226B\u0338",
      nLeftarrow: "\u21CD",
      nLeftrightarrow: "\u21CE",
      nLl: "\u22D8\u0338",
      nLt: "\u226A\u20D2",
      nLtv: "\u226A\u0338",
      nRightarrow: "\u21CF",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nabla: "\u2207",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      ncaron: "\u0148",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      neArr: "\u21D7",
      nearhk: "\u2924",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      nexist: "\u2204",
      nexists: "\u2204",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      ngsim: "\u2275",
      ngt: "\u226F",
      ngtr: "\u226F",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlE: "\u2266\u0338",
      nlarr: "\u219A",
      nldr: "\u2025",
      nle: "\u2270",
      nleftarrow: "\u219A",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nlsim: "\u2274",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nmid: "\u2224",
      nopf: "\u{1D55F}",
      not: "\xAC",
      notin: "\u2209",
      notinE: "\u22F9\u0338",
      notindot: "\u22F5\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvDash: "\u22AD",
      nvHarr: "\u2904",
      nvap: "\u224D\u20D2",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwArr: "\u21D6",
      nwarhk: "\u2923",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      oS: "\u24C8",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      ocirc: "\xF4",
      ocy: "\u043E",
      odash: "\u229D",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      oelig: "\u0153",
      ofcir: "\u29BF",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      omacr: "\u014D",
      omega: "\u03C9",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      operp: "\u29B9",
      oplus: "\u2295",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oscr: "\u2134",
      oslash: "\xF8",
      osol: "\u2298",
      otilde: "\xF5",
      otimes: "\u2297",
      otimesas: "\u2A36",
      ouml: "\xF6",
      ovbar: "\u233D",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      pfr: "\u{1D52D}",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      pointint: "\u2A15",
      popf: "\u{1D561}",
      pound: "\xA3",
      pr: "\u227A",
      prE: "\u2AB3",
      prap: "\u2AB7",
      prcue: "\u227C",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      prime: "\u2032",
      primes: "\u2119",
      prnE: "\u2AB5",
      prnap: "\u2AB9",
      prnsim: "\u22E8",
      prod: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      pscr: "\u{1D4C5}",
      psi: "\u03C8",
      puncsp: "\u2008",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      quot: '"',
      rAarr: "\u21DB",
      rArr: "\u21D2",
      rAtail: "\u291C",
      rBarr: "\u290F",
      rHar: "\u2964",
      race: "\u223D\u0331",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      rcaron: "\u0159",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      reg: "\xAE",
      rfisht: "\u297D",
      rfloor: "\u230B",
      rfr: "\u{1D52F}",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      rho: "\u03C1",
      rhov: "\u03F1",
      rightarrow: "\u2192",
      rightarrowtail: "\u21A3",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      rightthreetimes: "\u22CC",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      rsaquo: "\u203A",
      rscr: "\u{1D4C7}",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      ruluhar: "\u2968",
      rx: "\u211E",
      sacute: "\u015B",
      sbquo: "\u201A",
      sc: "\u227B",
      scE: "\u2AB4",
      scap: "\u2AB8",
      scaron: "\u0161",
      sccue: "\u227D",
      sce: "\u2AB0",
      scedil: "\u015F",
      scirc: "\u015D",
      scnE: "\u2AB6",
      scnap: "\u2ABA",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      seArr: "\u21D8",
      searhk: "\u2925",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      shchcy: "\u0449",
      shcy: "\u0448",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      shy: "\xAD",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      square: "\u25A1",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      sub: "\u2282",
      subE: "\u2AC5",
      subdot: "\u2ABD",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      sum: "\u2211",
      sung: "\u266A",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      sup: "\u2283",
      supE: "\u2AC6",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supe: "\u2287",
      supedot: "\u2AC4",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swArr: "\u21D9",
      swarhk: "\u2926",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      target: "\u2316",
      tau: "\u03C4",
      tbrk: "\u23B4",
      tcaron: "\u0165",
      tcedil: "\u0163",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      tfr: "\u{1D531}",
      there4: "\u2234",
      therefore: "\u2234",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      thinsp: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      thorn: "\xFE",
      tilde: "\u02DC",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      tscr: "\u{1D4C9}",
      tscy: "\u0446",
      tshcy: "\u045B",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      uArr: "\u21D1",
      uHar: "\u2963",
      uacute: "\xFA",
      uarr: "\u2191",
      ubrcy: "\u045E",
      ubreve: "\u016D",
      ucirc: "\xFB",
      ucy: "\u0443",
      udarr: "\u21C5",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      ufr: "\u{1D532}",
      ugrave: "\xF9",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      umacr: "\u016B",
      uml: "\xA8",
      uogon: "\u0173",
      uopf: "\u{1D566}",
      uparrow: "\u2191",
      updownarrow: "\u2195",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      upsi: "\u03C5",
      upsih: "\u03D2",
      upsilon: "\u03C5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      uring: "\u016F",
      urtri: "\u25F9",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vArr: "\u21D5",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      vDash: "\u22A8",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      vcy: "\u0432",
      vdash: "\u22A2",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      verbar: "|",
      vert: "|",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      vzigzag: "\u299A",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      wfr: "\u{1D534}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      yacute: "\xFD",
      yacy: "\u044F",
      ycirc: "\u0177",
      ycy: "\u044B",
      yen: "\xA5",
      yfr: "\u{1D536}",
      yicy: "\u0457",
      yopf: "\u{1D56A}",
      yscr: "\u{1D4CE}",
      yucy: "\u044E",
      yuml: "\xFF",
      zacute: "\u017A",
      zcaron: "\u017E",
      zcy: "\u0437",
      zdot: "\u017C",
      zeetrf: "\u2128",
      zeta: "\u03B6",
      zfr: "\u{1D537}",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      zopf: "\u{1D56B}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C",
    },
    Xu = {
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376,
    };
  function b0(e) {
    return e.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (t) => {
      if (t.charAt(1) === "#") {
        let r = t.charAt(2);
        return (function (n) {
          return (n >= 55296 && n <= 57343) || n > 1114111
            ? "\uFFFD"
            : (n in Xu && (n = Xu[n]), String.fromCodePoint(n));
        })(
          r === "X" || r === "x"
            ? parseInt(t.slice(3), 16)
            : parseInt(t.slice(2), 10),
        );
      }
      return p0[t.slice(1, -1)] || t;
    });
  }
  function g0(e, t) {
    return (
      (e.startIndex = e.tokenIndex = e.index),
      (e.startColumn = e.tokenColumn = e.column),
      (e.startLine = e.tokenLine = e.line),
      e.setToken(
        8192 & q[e.currentChar]
          ? (function (r, n) {
              let u = r.currentChar,
                a = D(r),
                i = r.index;
              for (; a !== u; ) r.index >= r.end && T(r, 16), (a = D(r));
              return (
                a !== u && T(r, 16),
                (r.tokenValue = r.source.slice(i, r.index)),
                D(r),
                128 & n && (r.tokenRaw = r.source.slice(r.tokenIndex, r.index)),
                134283267
              );
            })(e, t)
          : oa(e, t, 0),
      ),
      e.getToken()
    );
  }
  function At(e, t) {
    if (
      ((e.startIndex = e.tokenIndex = e.index),
      (e.startColumn = e.tokenColumn = e.column),
      (e.startLine = e.tokenLine = e.line),
      e.index >= e.end)
    )
      return void e.setToken(1048576);
    if (e.currentChar === 60) return D(e), void e.setToken(8456256);
    if (e.currentChar === 123) return D(e), void e.setToken(2162700);
    let r = 0;
    for (; e.index < e.end; ) {
      let u = q[e.source.charCodeAt(e.index)];
      if (
        (1024 & u
          ? ((r |= 5), qe(e))
          : 2048 & u
            ? (Jr(e, r), (r = (-5 & r) | 1))
            : D(e),
        16384 & q[e.currentChar])
      )
        break;
    }
    e.tokenIndex === e.index && T(e, 0);
    let n = e.source.slice(e.tokenIndex, e.index);
    128 & t && (e.tokenRaw = n), (e.tokenValue = b0(n)), e.setToken(137);
  }
  function Gr(e) {
    if (!(143360 & ~e.getToken())) {
      let { index: t } = e,
        r = e.currentChar;
      for (; 32770 & q[r]; ) r = D(e);
      e.tokenValue += e.source.slice(t, e.index);
    }
    return e.setToken(208897, !0), e.getToken();
  }
  function ce(e, t) {
    !(1 & e.flags) &&
      1048576 & ~e.getToken() &&
      T(e, 30, Y[255 & e.getToken()]),
      F(e, t, 1074790417) || e.onInsertedSemicolon?.(e.startIndex);
  }
  function ca(e, t, r, n) {
    return t - r < 13 &&
      n === "use strict" &&
      (!(1048576 & ~e.getToken()) || 1 & e.flags)
      ? 1
      : 0;
  }
  function tn(e, t, r) {
    return e.getToken() !== r ? 0 : (M(e, t), 1);
  }
  function F(e, t, r) {
    return e.getToken() === r && (M(e, t), !0);
  }
  function U(e, t, r) {
    e.getToken() !== r && T(e, 25, Y[255 & r]), M(e, t);
  }
  function Ie(e, t) {
    switch (t.type) {
      case "ArrayExpression": {
        t.type = "ArrayPattern";
        let { elements: r } = t;
        for (let n = 0, u = r.length; n < u; ++n) {
          let a = r[n];
          a && Ie(e, a);
        }
        return;
      }
      case "ObjectExpression": {
        t.type = "ObjectPattern";
        let { properties: r } = t;
        for (let n = 0, u = r.length; n < u; ++n) Ie(e, r[n]);
        return;
      }
      case "AssignmentExpression":
        return (
          (t.type = "AssignmentPattern"),
          t.operator !== "=" && T(e, 71),
          delete t.operator,
          void Ie(e, t.left)
        );
      case "Property":
        return void Ie(e, t.value);
      case "SpreadElement":
        (t.type = "RestElement"), Ie(e, t.argument);
    }
  }
  function ur(e, t, r, n, u) {
    256 & t && (36864 & ~n || T(e, 118), u || 537079808 & ~n || T(e, 119)),
      (20480 & ~n && n !== -2147483528) || T(e, 102),
      24 & r && (255 & n) == 73 && T(e, 100),
      524800 & t && n === 209006 && T(e, 110),
      262400 & t && n === 241771 && T(e, 97, "yield");
  }
  function la(e, t, r) {
    256 & t &&
      (36864 & ~r || T(e, 118),
      537079808 & ~r || T(e, 119),
      r === -2147483527 && T(e, 95),
      r === -2147483528 && T(e, 95)),
      20480 & ~r || T(e, 102),
      524800 & t && r === 209006 && T(e, 110),
      262400 & t && r === 241771 && T(e, 97, "yield");
  }
  function da(e, t, r) {
    return (
      r === 209006 && (524800 & t && T(e, 110), (e.destructible |= 128)),
      r === 241771 && 262144 & t && T(e, 97, "yield"),
      !(20480 & ~r && 36864 & ~r && r != -2147483527)
    );
  }
  function Qu(e, t, r, n) {
    for (; t; ) {
      if (t["$" + r]) return n && T(e, 137), 1;
      n && t.loop && (n = 0), (t = t.$);
    }
    return 0;
  }
  function S(e, t, r, n, u, a) {
    return (
      2 & t &&
        ((a.start = r), (a.end = e.startIndex), (a.range = [r, e.startIndex])),
      4 & t &&
        ((a.loc = {
          start: { line: n, column: u },
          end: { line: e.startLine, column: e.startColumn },
        }),
        e.sourceFile && (a.loc.source = e.sourceFile)),
      a
    );
  }
  function ar(e) {
    switch (e.type) {
      case "JSXIdentifier":
        return e.name;
      case "JSXNamespacedName":
        return e.namespace + ":" + e.name;
      case "JSXMemberExpression":
        return ar(e.object) + "." + ar(e.property);
    }
  }
  function dr(e, t, r) {
    let n = J({ parent: void 0, type: 2 }, 1024);
    return ve(e, t, n, r, 1, 0), n;
  }
  function Wr(e, t, ...r) {
    let {
      index: n,
      line: u,
      column: a,
      tokenIndex: i,
      tokenLine: f,
      tokenColumn: d,
    } = e;
    return {
      type: t,
      params: r,
      index: n,
      line: u,
      column: a,
      tokenIndex: i,
      tokenLine: f,
      tokenColumn: d,
    };
  }
  function J(e, t) {
    return { parent: e, type: t, scopeError: void 0 };
  }
  function Se(e, t, r, n, u, a) {
    4 & u ? fa(e, t, r, n, u) : ve(e, t, r, n, u, a), 64 & a && we(e, n);
  }
  function ve(e, t, r, n, u, a) {
    let i = r["#" + n];
    !i ||
      2 & i ||
      (1 & u
        ? (r.scopeError = Wr(e, 145, n))
        : (64 & t && !(256 & t) && 2 & a && i === 64 && u === 64) ||
          T(e, 145, n)),
      128 & r.type &&
        r.parent["#" + n] &&
        !(2 & r.parent["#" + n]) &&
        T(e, 145, n),
      1024 & r.type && i && !(2 & i) && 1 & u && (r.scopeError = Wr(e, 145, n)),
      64 & r.type && 768 & r.parent["#" + n] && T(e, 159, n),
      (r["#" + n] = u);
  }
  function fa(e, t, r, n, u) {
    let a = r;
    for (; a && !(256 & a.type); ) {
      let i = a["#" + n];
      248 & i &&
        ((64 & t &&
          !(256 & t) &&
          ((128 & u && 68 & i) || (128 & i && 68 & u))) ||
          T(e, 145, n)),
        a === r && 1 & i && 1 & u && (a.scopeError = Wr(e, 145, n)),
        (256 & i || (512 & i && !(64 & t))) && T(e, 145, n),
        (a["#" + n] = u),
        (a = a.parent);
    }
  }
  function ha(e, t) {
    return t["#" + e] ? 1 : t.parent ? ha(e, t.parent) : 0;
  }
  function we(e, t) {
    e.exportedNames !== void 0 &&
      t !== "" &&
      (e.exportedNames["#" + t] && T(e, 147, t),
      (e.exportedNames["#" + t] = 1));
  }
  function _t(e, t) {
    return 262400 & e
      ? !(512 & e && t === 209006) &&
          !(262144 & e && t === 241771) &&
          !(12288 & ~t)
      : !(12288 & ~t && 36864 & ~t);
  }
  function sr(e, t, r) {
    537079808 & ~r || (256 & t && T(e, 119), (e.flags |= 512)),
      _t(t, r) || T(e, 0);
  }
  function A0(e, t, r) {
    let n,
      u,
      a,
      i = "";
    t != null &&
      (t.module && (r |= 768),
      t.next && (r |= 1),
      t.loc && (r |= 4),
      t.ranges && (r |= 2),
      t.uniqueKeyInPattern && (r |= 134217728),
      t.lexical && (r |= 16),
      t.webcompat && (r |= 64),
      t.globalReturn && (r |= 1048576),
      t.raw && (r |= 128),
      t.preserveParens && (r |= 32),
      t.impliedStrict && (r |= 256),
      t.jsx && (r |= 8),
      t.source && (i = t.source),
      t.onComment != null &&
        (n = Array.isArray(t.onComment)
          ? (function (l, m) {
              return function (b, A, _, k, I) {
                let L = { type: b, value: A };
                2 & l && ((L.start = _), (L.end = k), (L.range = [_, k])),
                  4 & l && (L.loc = I),
                  m.push(L);
              };
            })(r, t.onComment)
          : t.onComment),
      t.onInsertedSemicolon != null && (u = t.onInsertedSemicolon),
      t.onToken != null &&
        (a = Array.isArray(t.onToken)
          ? (function (l, m) {
              return function (b, A, _, k) {
                let I = { token: b };
                2 & l && ((I.start = A), (I.end = _), (I.range = [A, _])),
                  4 & l && (I.loc = k),
                  m.push(I);
              };
            })(r, t.onToken)
          : t.onToken));
    let f = (function (l, m, b, A, _) {
      let k = 1048576,
        I = null;
      return {
        source: l,
        flags: 0,
        index: 0,
        line: 1,
        column: 0,
        startIndex: 0,
        end: l.length,
        tokenIndex: 0,
        startColumn: 0,
        tokenColumn: 0,
        tokenLine: 1,
        startLine: 1,
        sourceFile: m,
        tokenValue: "",
        getToken: () => k,
        setToken(L, O = !1) {
          if (A)
            if (L !== 1048576) {
              let N = {
                start: { line: this.tokenLine, column: this.tokenColumn },
                end: { line: this.line, column: this.column },
              };
              !O && I && A(...I), (I = [i0(L), this.tokenIndex, this.index, N]);
            } else I && (A(...I), (I = null));
          return (k = L);
        },
        tokenRaw: "",
        tokenRegExp: void 0,
        currentChar: l.charCodeAt(0),
        exportedNames: [],
        exportedBindings: [],
        assignable: 1,
        destructible: 0,
        onComment: b,
        onToken: A,
        onInsertedSemicolon: _,
        leadingDecorators: [],
      };
    })(e, i, n, a, u);
    (function (l) {
      let { source: m } = l;
      l.currentChar === 35 &&
        m.charCodeAt(l.index + 1) === 33 &&
        (D(l), D(l), Zr(l, m, 0, 4, l.tokenIndex, l.tokenLine, l.tokenColumn));
    })(f);
    let d = 16 & r ? { parent: void 0, type: 2 } : void 0,
      h = [],
      c = "script";
    if (512 & r) {
      if (
        ((c = "module"),
        (h = (function (l, m, b) {
          M(l, 8192 | m);
          let A = [];
          for (; l.getToken() === 134283267; ) {
            let { tokenIndex: _, tokenLine: k, tokenColumn: I } = l,
              L = l.getToken();
            A.push(Xr(l, m, ne(l, m), L, _, k, I));
          }
          for (; l.getToken() !== 1048576; ) A.push(_0(l, m, b));
          return A;
        })(f, 2048 | r, d)),
        d)
      )
        for (let l in f.exportedBindings)
          l[0] !== "#" || d[l] || T(f, 148, l.slice(1));
    } else
      h = (function (l, m, b) {
        M(l, 67117056 | m);
        let A = [];
        for (; l.getToken() === 134283267; ) {
          let {
              index: _,
              tokenIndex: k,
              tokenValue: I,
              tokenLine: L,
              tokenColumn: O,
            } = l,
            N = l.getToken(),
            v = ne(l, m);
          ca(l, _, k, I) &&
            ((m |= 256),
            64 & l.flags &&
              de(
                l.tokenIndex,
                l.tokenLine,
                l.tokenColumn,
                l.index,
                l.line,
                l.column,
                9,
              ),
            4096 & l.flags &&
              de(
                l.tokenIndex,
                l.tokenLine,
                l.tokenColumn,
                l.index,
                l.line,
                l.column,
                15,
              )),
            A.push(Xr(l, m, v, N, k, L, O));
        }
        for (; l.getToken() !== 1048576; ) A.push(kt(l, m, b, void 0, 4, {}));
        return A;
      })(f, 2048 | r, d);
    let o = { type: "Program", sourceType: c, body: h };
    return (
      2 & r && ((o.start = 0), (o.end = e.length), (o.range = [0, e.length])),
      4 & r &&
        ((o.loc = {
          start: { line: 1, column: 0 },
          end: { line: f.line, column: f.column },
        }),
        f.sourceFile && (o.loc.source = i)),
      o
    );
  }
  function _0(e, t, r) {
    let n;
    switch (((e.leadingDecorators = hr(e, t, void 0)), e.getToken())) {
      case 20564:
        n = (function (u, a, i) {
          let f = u.tokenIndex,
            d = u.tokenLine,
            h = u.tokenColumn;
          M(u, 8192 | a);
          let c = [],
            o,
            l = null,
            m = null,
            b = null;
          if (F(u, 8192 | a, 20561)) {
            switch (u.getToken()) {
              case 86104:
                l = Me(
                  u,
                  a,
                  i,
                  void 0,
                  4,
                  1,
                  1,
                  0,
                  u.tokenIndex,
                  u.tokenLine,
                  u.tokenColumn,
                );
                break;
              case 132:
              case 86094:
                l = zr(
                  u,
                  a,
                  i,
                  void 0,
                  1,
                  u.tokenIndex,
                  u.tokenLine,
                  u.tokenColumn,
                );
                break;
              case 209005: {
                let { tokenIndex: _, tokenLine: k, tokenColumn: I } = u;
                l = X(u, a);
                let { flags: L } = u;
                1 & L ||
                  (u.getToken() === 86104
                    ? (l = Me(u, a, i, void 0, 4, 1, 1, 1, _, k, I))
                    : u.getToken() === 67174411
                      ? ((l = an(u, a, void 0, l, 1, 1, 0, L, _, k, I)),
                        (l = W(u, a, void 0, l, 0, 0, _, k, I)),
                        (l = $(u, a, void 0, 0, 0, _, k, I, l)))
                      : 143360 & u.getToken() &&
                        (i && (i = dr(u, a, u.tokenValue)),
                        (l = X(u, a)),
                        (l = It(u, a, i, void 0, [l], 1, _, k, I))));
                break;
              }
              default:
                (l = Q(
                  u,
                  a,
                  void 0,
                  1,
                  0,
                  u.tokenIndex,
                  u.tokenLine,
                  u.tokenColumn,
                )),
                  ce(u, 8192 | a);
            }
            return (
              i && we(u, "default"),
              S(u, a, f, d, h, {
                type: "ExportDefaultDeclaration",
                declaration: l,
              })
            );
          }
          switch (u.getToken()) {
            case 8391476: {
              M(u, a);
              let _ = null;
              F(u, a, 77932) && (i && we(u, u.tokenValue), (_ = er(u, a))),
                U(u, a, 12403),
                u.getToken() !== 134283267 && T(u, 105, "Export"),
                (m = ne(u, a));
              let k = { type: "ExportAllDeclaration", source: m, exported: _ };
              return (
                1 & a && (k.attributes = Yr(u, a)),
                ce(u, 8192 | a),
                S(u, a, f, d, h, k)
              );
            }
            case 2162700: {
              M(u, a);
              let _ = [],
                k = [],
                I = 0;
              for (; 143360 & u.getToken() || u.getToken() === 134283267; ) {
                let {
                    tokenIndex: L,
                    tokenValue: O,
                    tokenLine: N,
                    tokenColumn: v,
                  } = u,
                  B = er(u, a),
                  R;
                B.type === "Literal" && (I = 1),
                  u.getToken() === 77932
                    ? (M(u, a),
                      143360 & u.getToken() ||
                        u.getToken() === 134283267 ||
                        T(u, 106),
                      i && (_.push(u.tokenValue), k.push(O)),
                      (R = er(u, a)))
                    : (i && (_.push(u.tokenValue), k.push(u.tokenValue)),
                      (R = B)),
                  c.push(
                    S(u, a, L, N, v, {
                      type: "ExportSpecifier",
                      local: B,
                      exported: R,
                    }),
                  ),
                  u.getToken() !== 1074790415 && U(u, a, 18);
              }
              U(u, a, 1074790415),
                F(u, a, 12403)
                  ? (u.getToken() !== 134283267 && T(u, 105, "Export"),
                    (m = ne(u, a)),
                    1 & a && (b = Yr(u, a, c)),
                    i && _.forEach((L) => we(u, L)))
                  : (I && T(u, 172),
                    i &&
                      (_.forEach((L) => we(u, L)),
                      k.forEach((L) =>
                        (function (O, N) {
                          O.exportedBindings !== void 0 &&
                            N !== "" &&
                            (O.exportedBindings["#" + N] = 1);
                        })(u, L),
                      ))),
                ce(u, 8192 | a);
              break;
            }
            case 86094:
              l = zr(
                u,
                a,
                i,
                void 0,
                2,
                u.tokenIndex,
                u.tokenLine,
                u.tokenColumn,
              );
              break;
            case 86104:
              l = Me(
                u,
                a,
                i,
                void 0,
                4,
                1,
                2,
                0,
                u.tokenIndex,
                u.tokenLine,
                u.tokenColumn,
              );
              break;
            case 241737:
              l = Qr(
                u,
                a,
                i,
                void 0,
                8,
                64,
                u.tokenIndex,
                u.tokenLine,
                u.tokenColumn,
              );
              break;
            case 86090:
              l = Qr(
                u,
                a,
                i,
                void 0,
                16,
                64,
                u.tokenIndex,
                u.tokenLine,
                u.tokenColumn,
              );
              break;
            case 86088:
              l = Ea(
                u,
                a,
                i,
                void 0,
                64,
                u.tokenIndex,
                u.tokenLine,
                u.tokenColumn,
              );
              break;
            case 209005: {
              let { tokenIndex: _, tokenLine: k, tokenColumn: I } = u;
              if ((M(u, a), !(1 & u.flags) && u.getToken() === 86104)) {
                (l = Me(u, a, i, void 0, 4, 1, 2, 1, _, k, I)),
                  i && ((o = l.id ? l.id.name : ""), we(u, o));
                break;
              }
            }
            default:
              T(u, 30, Y[255 & u.getToken()]);
          }
          let A = {
            type: "ExportNamedDeclaration",
            declaration: l,
            specifiers: c,
            source: m,
          };
          return b && (A.attributes = b), S(u, a, f, d, h, A);
        })(e, t, r);
        break;
      case 86106:
        n = (function (u, a, i) {
          let f = u.tokenIndex,
            d = u.tokenLine,
            h = u.tokenColumn;
          M(u, a);
          let c = null,
            { tokenIndex: o, tokenLine: l, tokenColumn: m } = u,
            b = [];
          if (u.getToken() === 134283267) c = ne(u, a);
          else {
            if (143360 & u.getToken()) {
              if (
                ((b = [
                  S(u, a, o, l, m, {
                    type: "ImportDefaultSpecifier",
                    local: Ta(u, a, i),
                  }),
                ]),
                F(u, a, 18))
              )
                switch (u.getToken()) {
                  case 8391476:
                    b.push(zu(u, a, i));
                    break;
                  case 2162700:
                    $u(u, a, i, b);
                    break;
                  default:
                    T(u, 107);
                }
            } else
              switch (u.getToken()) {
                case 8391476:
                  b = [zu(u, a, i)];
                  break;
                case 2162700:
                  $u(u, a, i, b);
                  break;
                case 67174411:
                  return ba(u, a, void 0, f, d, h);
                case 67108877:
                  return pa(u, a, f, d, h);
                default:
                  T(u, 30, Y[255 & u.getToken()]);
              }
            c = (function (_, k) {
              return (
                U(_, k, 12403),
                _.getToken() !== 134283267 && T(_, 105, "Import"),
                ne(_, k)
              );
            })(u, a);
          }
          let A = { type: "ImportDeclaration", specifiers: b, source: c };
          return (
            1 & a && (A.attributes = Yr(u, a, b)),
            ce(u, 8192 | a),
            S(u, a, f, d, h, A)
          );
        })(e, t, r);
        break;
      default:
        n = kt(e, t, r, void 0, 4, {});
    }
    return e.leadingDecorators.length && T(e, 170), n;
  }
  function kt(e, t, r, n, u, a) {
    let i = e.tokenIndex,
      f = e.tokenLine,
      d = e.tokenColumn;
    switch (e.getToken()) {
      case 86104:
        return Me(e, t, r, n, u, 1, 0, 0, i, f, d);
      case 132:
      case 86094:
        return zr(e, t, r, n, 0, i, f, d);
      case 86090:
        return Qr(e, t, r, n, 16, 0, i, f, d);
      case 241737:
        return (function (h, c, o, l, m, b, A, _) {
          let { tokenValue: k } = h,
            I = h.getToken(),
            L = X(h, c);
          if (2240512 & h.getToken()) {
            let O = $e(h, c, o, l, 8, 0);
            return (
              ce(h, 8192 | c),
              S(h, c, b, A, _, {
                type: "VariableDeclaration",
                kind: "let",
                declarations: O,
              })
            );
          }
          if (((h.assignable = 1), 256 & c && T(h, 85), h.getToken() === 21))
            return rn(h, c, o, l, m, {}, k, L, I, 0, b, A, _);
          if (h.getToken() === 10) {
            let O;
            16 & c && (O = dr(h, c, k)),
              (h.flags = 128 ^ (128 | h.flags)),
              (L = It(h, c, O, l, [L], 0, b, A, _));
          } else
            (L = W(h, c, l, L, 0, 0, b, A, _)),
              (L = $(h, c, l, 0, 0, b, A, _, L));
          return (
            h.getToken() === 18 && (L = Oe(h, c, l, 0, b, A, _, L)),
            Ze(h, c, L, b, A, _)
          );
        })(e, t, r, n, u, i, f, d);
      case 20564:
        T(e, 103, "export");
      case 86106:
        switch ((M(e, t), e.getToken())) {
          case 67174411:
            return ba(e, t, n, i, f, d);
          case 67108877:
            return pa(e, t, i, f, d);
          default:
            T(e, 103, "import");
        }
      case 209005:
        return ma(e, t, r, n, u, a, 1, i, f, d);
      default:
        return Ct(e, t, r, n, u, a, 1, i, f, d);
    }
  }
  function Ct(e, t, r, n, u, a, i, f, d, h) {
    switch (e.getToken()) {
      case 86088:
        return Ea(e, t, r, n, 0, f, d, h);
      case 20572:
        return (function (c, o, l, m, b, A) {
          1048576 & o || T(c, 92), M(c, 8192 | o);
          let _ =
            1 & c.flags || 1048576 & c.getToken()
              ? null
              : se(c, o, l, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn);
          return (
            ce(c, 8192 | o),
            S(c, o, m, b, A, { type: "ReturnStatement", argument: _ })
          );
        })(e, t, n, f, d, h);
      case 20569:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, o), U(c, 8192 | o, 67174411), (c.assignable = 1);
          let I = se(c, o, m, 0, 1, c.tokenIndex, c.line, c.tokenColumn);
          U(c, 8192 | o, 16);
          let L = ju(c, o, l, m, b, c.tokenIndex, c.tokenLine, c.tokenColumn),
            O = null;
          return (
            c.getToken() === 20563 &&
              (M(c, 8192 | o),
              (O = ju(
                c,
                o,
                l,
                m,
                b,
                c.tokenIndex,
                c.tokenLine,
                c.tokenColumn,
              ))),
            S(c, o, A, _, k, {
              type: "IfStatement",
              test: I,
              consequent: L,
              alternate: O,
            })
          );
        })(e, t, r, n, a, f, d, h);
      case 20567:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, o);
          let I =
            ((524288 & o) > 0 || ((512 & o) > 0 && (2048 & o) > 0)) &&
            F(c, o, 209006);
          U(c, 8192 | o, 67174411), l && (l = J(l, 1));
          let L,
            O = null,
            N = null,
            v = 0,
            B = null,
            R =
              c.getToken() === 86088 ||
              c.getToken() === 241737 ||
              c.getToken() === 86090,
            { tokenIndex: w, tokenLine: H, tokenColumn: G } = c,
            K = c.getToken();
          if (
            (R
              ? K === 241737
                ? ((B = X(c, o)),
                  2240512 & c.getToken()
                    ? (c.getToken() === 8673330
                        ? 256 & o && T(c, 67)
                        : (B = S(c, o, w, H, G, {
                            type: "VariableDeclaration",
                            kind: "let",
                            declarations: $e(c, 33554432 | o, l, m, 8, 32),
                          })),
                      (c.assignable = 1))
                    : 256 & o
                      ? T(c, 67)
                      : ((R = !1),
                        (c.assignable = 1),
                        (B = W(c, o, m, B, 0, 0, w, H, G)),
                        c.getToken() === 274548 && T(c, 115)))
                : (M(c, o),
                  (B = S(
                    c,
                    o,
                    w,
                    H,
                    G,
                    K === 86088
                      ? {
                          type: "VariableDeclaration",
                          kind: "var",
                          declarations: $e(c, 33554432 | o, l, m, 4, 32),
                        }
                      : {
                          type: "VariableDeclaration",
                          kind: "const",
                          declarations: $e(c, 33554432 | o, l, m, 16, 32),
                        },
                  )),
                  (c.assignable = 1))
              : K === 1074790417
                ? I && T(c, 82)
                : 2097152 & ~K
                  ? (B = pe(c, 33554432 | o, m, 1, 0, 1, w, H, G))
                  : ((B =
                      K === 2162700
                        ? ge(c, o, void 0, m, 1, 0, 0, 2, 32, w, H, G)
                        : be(c, o, void 0, m, 1, 0, 0, 2, 32, w, H, G)),
                    (v = c.destructible),
                    64 & v && T(c, 63),
                    (c.assignable = 16 & v ? 2 : 1),
                    (B = W(
                      c,
                      33554432 | o,
                      m,
                      B,
                      0,
                      0,
                      c.tokenIndex,
                      c.tokenLine,
                      c.tokenColumn,
                    ))),
            !(262144 & ~c.getToken()))
          )
            return c.getToken() === 274548
              ? (2 & c.assignable && T(c, 80, I ? "await" : "of"),
                Ie(c, B),
                M(c, 8192 | o),
                (L = Q(
                  c,
                  o,
                  m,
                  1,
                  0,
                  c.tokenIndex,
                  c.tokenLine,
                  c.tokenColumn,
                )),
                U(c, 8192 | o, 16),
                S(c, o, A, _, k, {
                  type: "ForOfStatement",
                  left: B,
                  right: L,
                  body: pt(c, o, l, m, b),
                  await: I,
                }))
              : (2 & c.assignable && T(c, 80, "in"),
                Ie(c, B),
                M(c, 8192 | o),
                I && T(c, 82),
                (L = se(
                  c,
                  o,
                  m,
                  0,
                  1,
                  c.tokenIndex,
                  c.tokenLine,
                  c.tokenColumn,
                )),
                U(c, 8192 | o, 16),
                S(c, o, A, _, k, {
                  type: "ForInStatement",
                  body: pt(c, o, l, m, b),
                  left: B,
                  right: L,
                }));
          I && T(c, 82),
            R ||
              (8 & v && c.getToken() !== 1077936155 && T(c, 80, "loop"),
              (B = $(c, 33554432 | o, m, 0, 0, w, H, G, B))),
            c.getToken() === 18 &&
              (B = Oe(c, o, m, 0, c.tokenIndex, c.tokenLine, c.tokenColumn, B)),
            U(c, 8192 | o, 1074790417),
            c.getToken() !== 1074790417 &&
              (O = se(c, o, m, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn)),
            U(c, 8192 | o, 1074790417),
            c.getToken() !== 16 &&
              (N = se(c, o, m, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn)),
            U(c, 8192 | o, 16);
          let ee = pt(c, o, l, m, b);
          return S(c, o, A, _, k, {
            type: "ForStatement",
            init: B,
            test: O,
            update: N,
            body: ee,
          });
        })(e, t, r, n, a, f, d, h);
      case 20562:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, 8192 | o);
          let I = pt(c, o, l, m, b);
          U(c, o, 20578), U(c, 8192 | o, 67174411);
          let L = se(c, o, m, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn);
          return (
            U(c, 8192 | o, 16),
            F(c, 8192 | o, 1074790417),
            S(c, o, A, _, k, { type: "DoWhileStatement", body: I, test: L })
          );
        })(e, t, r, n, a, f, d, h);
      case 20578:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, o), U(c, 8192 | o, 67174411);
          let I = se(c, o, m, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn);
          U(c, 8192 | o, 16);
          let L = pt(c, o, l, m, b);
          return S(c, o, A, _, k, { type: "WhileStatement", test: I, body: L });
        })(e, t, r, n, a, f, d, h);
      case 86110:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, o), U(c, 8192 | o, 67174411);
          let I = se(c, o, m, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn);
          U(c, o, 16), U(c, o, 2162700);
          let L = [],
            O = 0;
          for (l && (l = J(l, 8)); c.getToken() !== 1074790415; ) {
            let { tokenIndex: N, tokenLine: v, tokenColumn: B } = c,
              R = null,
              w = [];
            for (
              F(c, 8192 | o, 20556)
                ? (R = se(
                    c,
                    o,
                    m,
                    0,
                    1,
                    c.tokenIndex,
                    c.tokenLine,
                    c.tokenColumn,
                  ))
                : (U(c, 8192 | o, 20561), O && T(c, 89), (O = 1)),
                U(c, 8192 | o, 21);
              c.getToken() !== 20556 &&
              c.getToken() !== 1074790415 &&
              c.getToken() !== 20561;

            )
              w.push(kt(c, 1024 | o, l, m, 2, { $: b }));
            L.push(
              S(c, o, N, v, B, { type: "SwitchCase", test: R, consequent: w }),
            );
          }
          return (
            U(c, 8192 | o, 1074790415),
            S(c, o, A, _, k, {
              type: "SwitchStatement",
              discriminant: I,
              cases: L,
            })
          );
        })(e, t, r, n, a, f, d, h);
      case 1074790417:
        return (function (c, o, l, m, b) {
          return M(c, 8192 | o), S(c, o, l, m, b, { type: "EmptyStatement" });
        })(e, t, f, d, h);
      case 2162700:
        return gt(e, t, r && J(r, 2), n, a, f, d, h);
      case 86112:
        return (function (c, o, l, m, b, A) {
          M(c, 8192 | o), 1 & c.flags && T(c, 90);
          let _ = se(c, o, l, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn);
          return (
            ce(c, 8192 | o),
            S(c, o, m, b, A, { type: "ThrowStatement", argument: _ })
          );
        })(e, t, n, f, d, h);
      case 20555:
        return (function (c, o, l, m, b, A) {
          M(c, 8192 | o);
          let _ = null;
          if (!(1 & c.flags) && 143360 & c.getToken()) {
            let { tokenValue: k } = c;
            (_ = X(c, 8192 | o)), Qu(c, l, k, 0) || T(c, 138, k);
          } else 33792 & o || T(c, 69);
          return (
            ce(c, 8192 | o),
            S(c, o, m, b, A, { type: "BreakStatement", label: _ })
          );
        })(e, t, a, f, d, h);
      case 20559:
        return (function (c, o, l, m, b, A) {
          32768 & o || T(c, 68), M(c, o);
          let _ = null;
          if (!(1 & c.flags) && 143360 & c.getToken()) {
            let { tokenValue: k } = c;
            (_ = X(c, 8192 | o)), Qu(c, l, k, 1) || T(c, 138, k);
          }
          return (
            ce(c, 8192 | o),
            S(c, o, m, b, A, { type: "ContinueStatement", label: _ })
          );
        })(e, t, a, f, d, h);
      case 20577:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, 8192 | o);
          let I = l ? J(l, 32) : void 0,
            L = gt(
              c,
              o,
              I,
              m,
              { $: b },
              c.tokenIndex,
              c.tokenLine,
              c.tokenColumn,
            ),
            { tokenIndex: O, tokenLine: N, tokenColumn: v } = c,
            B = F(c, 8192 | o, 20557)
              ? (function (w, H, G, K, ee, Ve, St, Ot) {
                  let me = null,
                    Ee = G;
                  F(w, H, 67174411) &&
                    (G && (G = J(G, 4)),
                    (me = xa(
                      w,
                      H,
                      G,
                      K,
                      2097152 & ~w.getToken() ? 512 : 256,
                      0,
                      w.tokenIndex,
                      w.tokenLine,
                      w.tokenColumn,
                    )),
                    w.getToken() === 18
                      ? T(w, 86)
                      : w.getToken() === 1077936155 && T(w, 87),
                    U(w, 8192 | H, 16)),
                    G && (Ee = J(G, 64));
                  let Ae = gt(
                    w,
                    H,
                    Ee,
                    K,
                    { $: ee },
                    w.tokenIndex,
                    w.tokenLine,
                    w.tokenColumn,
                  );
                  return S(w, H, Ve, St, Ot, {
                    type: "CatchClause",
                    param: me,
                    body: Ae,
                  });
                })(c, o, l, m, b, O, N, v)
              : null,
            R = null;
          return (
            c.getToken() === 20566 &&
              (M(c, 8192 | o),
              (R = gt(
                c,
                o,
                I ? J(l, 4) : void 0,
                m,
                { $: b },
                c.tokenIndex,
                c.tokenLine,
                c.tokenColumn,
              ))),
            B || R || T(c, 88),
            S(c, o, A, _, k, {
              type: "TryStatement",
              block: L,
              handler: B,
              finalizer: R,
            })
          );
        })(e, t, r, n, a, f, d, h);
      case 20579:
        return (function (c, o, l, m, b, A, _, k) {
          M(c, o), 256 & o && T(c, 91), U(c, 8192 | o, 67174411);
          let I = se(c, o, m, 0, 1, c.tokenIndex, c.tokenLine, c.tokenColumn);
          U(c, 8192 | o, 16);
          let L = Ct(
            c,
            o,
            l,
            m,
            2,
            b,
            0,
            c.tokenIndex,
            c.tokenLine,
            c.tokenColumn,
          );
          return S(c, o, A, _, k, {
            type: "WithStatement",
            object: I,
            body: L,
          });
        })(e, t, r, n, a, f, d, h);
      case 20560:
        return (function (c, o, l, m, b) {
          return (
            M(c, 8192 | o),
            ce(c, 8192 | o),
            S(c, o, l, m, b, { type: "DebuggerStatement" })
          );
        })(e, t, f, d, h);
      case 209005:
        return ma(e, t, r, n, u, a, 0, f, d, h);
      case 20557:
        T(e, 162);
      case 20566:
        T(e, 163);
      case 86104:
        T(e, 256 & t ? 76 : 64 & t ? 77 : 78);
      case 86094:
        T(e, 79);
      default:
        return (function (c, o, l, m, b, A, _, k, I, L) {
          let { tokenValue: O } = c,
            N = c.getToken(),
            v;
          return (
            N === 241737
              ? ((v = X(c, o)),
                256 & o && T(c, 85),
                c.getToken() === 69271571 && T(c, 84))
              : (v = he(
                  c,
                  o,
                  m,
                  2,
                  0,
                  1,
                  0,
                  1,
                  c.tokenIndex,
                  c.tokenLine,
                  c.tokenColumn,
                )),
            143360 & N && c.getToken() === 21
              ? rn(c, o, l, m, b, A, O, v, N, _, k, I, L)
              : ((v = W(c, o, m, v, 0, 0, k, I, L)),
                (v = $(c, o, m, 0, 0, k, I, L, v)),
                c.getToken() === 18 && (v = Oe(c, o, m, 0, k, I, L, v)),
                Ze(c, o, v, k, I, L))
          );
        })(e, t, r, n, u, a, i, f, d, h);
    }
  }
  function gt(e, t, r, n, u, a, i, f) {
    let d = [];
    for (U(e, 8192 | t, 2162700); e.getToken() !== 1074790415; )
      d.push(kt(e, t, r, n, 2, { $: u }));
    return (
      U(e, 8192 | t, 1074790415),
      S(e, t, a, i, f, { type: "BlockStatement", body: d })
    );
  }
  function Ze(e, t, r, n, u, a) {
    return (
      ce(e, 8192 | t),
      S(e, t, n, u, a, { type: "ExpressionStatement", expression: r })
    );
  }
  function rn(e, t, r, n, u, a, i, f, d, h, c, o, l) {
    ur(e, t, 0, d, 1),
      (function (b, A, _) {
        let k = A;
        for (; k; ) k["$" + _] && T(b, 136, _), (k = k.$);
        A["$" + _] = 1;
      })(e, a, i),
      M(e, 8192 | t);
    let m =
      h && !(256 & t) && 64 & t && e.getToken() === 86104
        ? Me(
            e,
            t,
            J(r, 2),
            n,
            u,
            0,
            0,
            0,
            e.tokenIndex,
            e.tokenLine,
            e.tokenColumn,
          )
        : Ct(e, t, r, n, u, a, h, e.tokenIndex, e.tokenLine, e.tokenColumn);
    return S(e, t, c, o, l, { type: "LabeledStatement", label: f, body: m });
  }
  function ma(e, t, r, n, u, a, i, f, d, h) {
    let { tokenValue: c } = e,
      o = e.getToken(),
      l = X(e, t);
    if (e.getToken() === 21) return rn(e, t, r, n, u, a, c, l, o, 1, f, d, h);
    let m = 1 & e.flags;
    if (!m) {
      if (e.getToken() === 86104)
        return i || T(e, 123), Me(e, t, r, n, u, 1, 0, 1, f, d, h);
      if (_t(t, e.getToken()))
        return (
          (l = Ia(e, t, n, 1, f, d, h)),
          e.getToken() === 18 && (l = Oe(e, t, n, 0, f, d, h, l)),
          Ze(e, t, l, f, d, h)
        );
    }
    return (
      e.getToken() === 67174411
        ? (l = an(e, t, n, l, 1, 1, 0, m, f, d, h))
        : (e.getToken() === 10 &&
            (sr(e, t, o),
            36864 & ~o || (e.flags |= 256),
            (l = ir(e, 524288 | t, n, e.tokenValue, l, 0, 1, 0, f, d, h))),
          (e.assignable = 1)),
      (l = W(e, t, n, l, 0, 0, f, d, h)),
      (l = $(e, t, n, 0, 0, f, d, h, l)),
      (e.assignable = 1),
      e.getToken() === 18 && (l = Oe(e, t, n, 0, f, d, h, l)),
      Ze(e, t, l, f, d, h)
    );
  }
  function Xr(e, t, r, n, u, a, i) {
    let f = e.startIndex;
    return (
      n !== 1074790417 &&
        ((e.assignable = 2),
        (r = W(e, t, void 0, r, 0, 0, u, a, i)),
        e.getToken() !== 1074790417 &&
          ((r = $(e, t, void 0, 0, 0, u, a, i, r)),
          e.getToken() === 18 && (r = Oe(e, t, void 0, 0, u, a, i, r))),
        ce(e, 8192 | t)),
      r.type === "Literal" && typeof r.value == "string"
        ? S(e, t, u, a, i, {
            type: "ExpressionStatement",
            expression: r,
            directive: e.source.slice(u + 1, f - 1),
          })
        : S(e, t, u, a, i, { type: "ExpressionStatement", expression: r })
    );
  }
  function ju(e, t, r, n, u, a, i, f) {
    return 256 & t || !(64 & t) || e.getToken() !== 86104
      ? Ct(e, t, r, n, 0, { $: u }, 0, e.tokenIndex, e.tokenLine, e.tokenColumn)
      : Me(e, t, J(r, 2), n, 0, 0, 0, 0, a, i, f);
  }
  function pt(e, t, r, n, u) {
    return Ct(
      e,
      (33554432 ^ (33554432 | t)) | 32768,
      r,
      n,
      0,
      { loop: 1, $: u },
      0,
      e.tokenIndex,
      e.tokenLine,
      e.tokenColumn,
    );
  }
  function Qr(e, t, r, n, u, a, i, f, d) {
    M(e, t);
    let h = $e(e, t, r, n, u, a);
    return (
      ce(e, 8192 | t),
      S(e, t, i, f, d, {
        type: "VariableDeclaration",
        kind: 8 & u ? "let" : "const",
        declarations: h,
      })
    );
  }
  function Ea(e, t, r, n, u, a, i, f) {
    M(e, t);
    let d = $e(e, t, r, n, 4, u);
    return (
      ce(e, 8192 | t),
      S(e, t, a, i, f, {
        type: "VariableDeclaration",
        kind: "var",
        declarations: d,
      })
    );
  }
  function $e(e, t, r, n, u, a) {
    let i = 1,
      f = [Ku(e, t, r, n, u, a)];
    for (; F(e, t, 18); ) i++, f.push(Ku(e, t, r, n, u, a));
    return (
      i > 1 &&
        32 & a &&
        262144 & e.getToken() &&
        T(e, 61, Y[255 & e.getToken()]),
      f
    );
  }
  function Ku(e, t, r, n, u, a) {
    let { tokenIndex: i, tokenLine: f, tokenColumn: d } = e,
      h = e.getToken(),
      c = null,
      o = xa(e, t, r, n, u, a, i, f, d);
    return (
      e.getToken() === 1077936155
        ? (M(e, 8192 | t),
          (c = Q(e, t, n, 1, 0, e.tokenIndex, e.tokenLine, e.tokenColumn)),
          (!(32 & a) && 2097152 & h) ||
            ((e.getToken() === 274548 ||
              (e.getToken() === 8673330 &&
                (2097152 & h || !(4 & u) || 256 & t))) &&
              de(
                i,
                f,
                d,
                e.index,
                e.line,
                e.column,
                60,
                e.getToken() === 274548 ? "of" : "in",
              )))
        : (16 & u || (2097152 & h) > 0) &&
          262144 & ~e.getToken() &&
          T(e, 59, 16 & u ? "const" : "destructuring"),
      S(e, t, i, f, d, { type: "VariableDeclarator", id: o, init: c })
    );
  }
  function Ta(e, t, r) {
    return (
      _t(t, e.getToken()) || T(e, 118),
      537079808 & ~e.getToken() || T(e, 119),
      r && ve(e, t, r, e.tokenValue, 8, 0),
      X(e, t)
    );
  }
  function zu(e, t, r) {
    let { tokenIndex: n, tokenLine: u, tokenColumn: a } = e;
    return (
      M(e, t),
      U(e, t, 77932),
      134217728 & ~e.getToken() ||
        de(n, u, a, e.index, e.line, e.column, 30, Y[255 & e.getToken()]),
      S(e, t, n, u, a, { type: "ImportNamespaceSpecifier", local: Ta(e, t, r) })
    );
  }
  function $u(e, t, r, n) {
    for (M(e, t); 143360 & e.getToken() || e.getToken() === 134283267; ) {
      let { tokenValue: u, tokenIndex: a, tokenLine: i, tokenColumn: f } = e,
        d = e.getToken(),
        h = er(e, t),
        c;
      F(e, t, 77932)
        ? (134217728 & ~e.getToken() && e.getToken() !== 18
            ? ur(e, t, 16, e.getToken(), 0)
            : T(e, 106),
          (u = e.tokenValue),
          (c = X(e, t)))
        : h.type === "Identifier"
          ? (ur(e, t, 16, d, 0), (c = h))
          : T(e, 25, Y[108]),
        r && ve(e, t, r, u, 8, 0),
        n.push(
          S(e, t, a, i, f, { type: "ImportSpecifier", local: c, imported: h }),
        ),
        e.getToken() !== 1074790415 && U(e, t, 18);
    }
    return U(e, t, 1074790415), n;
  }
  function pa(e, t, r, n, u) {
    let a = ga(
      e,
      t,
      S(e, t, r, n, u, { type: "Identifier", name: "import" }),
      r,
      n,
      u,
    );
    return (
      (a = W(e, t, void 0, a, 0, 0, r, n, u)),
      (a = $(e, t, void 0, 0, 0, r, n, u, a)),
      e.getToken() === 18 && (a = Oe(e, t, void 0, 0, r, n, u, a)),
      Ze(e, t, a, r, n, u)
    );
  }
  function ba(e, t, r, n, u, a) {
    let i = Aa(e, t, r, 0, n, u, a);
    return (
      (i = W(e, t, r, i, 0, 0, n, u, a)),
      e.getToken() === 18 && (i = Oe(e, t, r, 0, n, u, a, i)),
      Ze(e, t, i, n, u, a)
    );
  }
  function Q(e, t, r, n, u, a, i, f) {
    let d = he(e, t, r, 2, 0, n, u, 1, a, i, f);
    return (d = W(e, t, r, d, u, 0, a, i, f)), $(e, t, r, u, 0, a, i, f, d);
  }
  function Oe(e, t, r, n, u, a, i, f) {
    let d = [f];
    for (; F(e, 8192 | t, 18); )
      d.push(Q(e, t, r, 1, n, e.tokenIndex, e.tokenLine, e.tokenColumn));
    return S(e, t, u, a, i, { type: "SequenceExpression", expressions: d });
  }
  function se(e, t, r, n, u, a, i, f) {
    let d = Q(e, t, r, u, n, a, i, f);
    return e.getToken() === 18 ? Oe(e, t, r, n, a, i, f, d) : d;
  }
  function $(e, t, r, n, u, a, i, f, d) {
    let h = e.getToken();
    if (!(4194304 & ~h)) {
      2 & e.assignable && T(e, 26),
        ((!u && h === 1077936155 && d.type === "ArrayExpression") ||
          d.type === "ObjectExpression") &&
          Ie(e, d),
        M(e, 8192 | t);
      let c = Q(e, t, r, 1, n, e.tokenIndex, e.tokenLine, e.tokenColumn);
      return (
        (e.assignable = 2),
        S(
          e,
          t,
          a,
          i,
          f,
          u
            ? { type: "AssignmentPattern", left: d, right: c }
            : {
                type: "AssignmentExpression",
                left: d,
                operator: Y[255 & h],
                right: c,
              },
        )
      );
    }
    return (
      8388608 & ~h || (d = Pe(e, t, r, n, a, i, f, 4, h, d)),
      F(e, 8192 | t, 22) && (d = He(e, t, r, d, a, i, f)),
      d
    );
  }
  function Jt(e, t, r, n, u, a, i, f, d) {
    let h = e.getToken();
    M(e, 8192 | t);
    let c = Q(e, t, r, 1, n, e.tokenIndex, e.tokenLine, e.tokenColumn);
    return (
      (d = S(
        e,
        t,
        a,
        i,
        f,
        u
          ? { type: "AssignmentPattern", left: d, right: c }
          : {
              type: "AssignmentExpression",
              left: d,
              operator: Y[255 & h],
              right: c,
            },
      )),
      (e.assignable = 2),
      d
    );
  }
  function He(e, t, r, n, u, a, i) {
    let f = Q(
      e,
      33554432 ^ (33554432 | t),
      r,
      1,
      0,
      e.tokenIndex,
      e.tokenLine,
      e.tokenColumn,
    );
    U(e, 8192 | t, 21), (e.assignable = 1);
    let d = Q(e, t, r, 1, 0, e.tokenIndex, e.tokenLine, e.tokenColumn);
    return (
      (e.assignable = 2),
      S(e, t, u, a, i, {
        type: "ConditionalExpression",
        test: n,
        consequent: f,
        alternate: d,
      })
    );
  }
  function Pe(e, t, r, n, u, a, i, f, d, h) {
    let c = 8673330 & -((33554432 & t) > 0),
      o,
      l;
    for (
      e.assignable = 2;
      8388608 & e.getToken() &&
      ((o = e.getToken()),
      (l = 3840 & o),
      ((524288 & o && 268435456 & d) || (524288 & d && 268435456 & o)) &&
        T(e, 165),
      !(l + ((o === 8391735) << 8) - ((c === o) << 12) <= f));

    )
      M(e, 8192 | t),
        (h = S(e, t, u, a, i, {
          type:
            524288 & o || 268435456 & o
              ? "LogicalExpression"
              : "BinaryExpression",
          left: h,
          right: Pe(
            e,
            t,
            r,
            n,
            e.tokenIndex,
            e.tokenLine,
            e.tokenColumn,
            l,
            o,
            pe(e, t, r, 0, n, 1, e.tokenIndex, e.tokenLine, e.tokenColumn),
          ),
          operator: Y[255 & o],
        }));
    return e.getToken() === 1077936155 && T(e, 26), h;
  }
  function fr(e, t, r, n, u, a, i) {
    let { tokenIndex: f, tokenLine: d, tokenColumn: h } = e;
    U(e, 8192 | t, 2162700);
    let c = [];
    if (e.getToken() !== 1074790415) {
      for (; e.getToken() === 134283267; ) {
        let { index: o, tokenIndex: l, tokenValue: m } = e,
          b = e.getToken(),
          A = ne(e, t);
        ca(e, o, l, m) &&
          ((t |= 256),
          128 & e.flags && de(l, d, h, e.index, e.line, e.column, 66),
          64 & e.flags && de(l, d, h, e.index, e.line, e.column, 9),
          4096 & e.flags && de(l, d, h, e.index, e.line, e.column, 15),
          i && lr(i)),
          c.push(Xr(e, t, A, b, l, e.tokenLine, e.tokenColumn));
      }
      256 & t &&
        (a && (537079808 & ~a || T(e, 119), 36864 & ~a || T(e, 40)),
        512 & e.flags && T(e, 119),
        256 & e.flags && T(e, 118));
    }
    for (
      e.flags = 4928 ^ (4928 | e.flags),
        e.destructible = 256 ^ (256 | e.destructible);
      e.getToken() !== 1074790415;

    )
      c.push(kt(e, t, r, n, 4, {}));
    return (
      U(e, 24 & u ? 8192 | t : t, 1074790415),
      (e.flags &= -4289),
      e.getToken() === 1077936155 && T(e, 26),
      S(e, t, f, d, h, { type: "BlockStatement", body: c })
    );
  }
  function pe(e, t, r, n, u, a, i, f, d) {
    return W(e, t, r, he(e, t, r, 2, 0, n, u, a, i, f, d), u, 0, i, f, d);
  }
  function W(e, t, r, n, u, a, i, f, d) {
    if (33619968 & ~e.getToken() || 1 & e.flags) {
      if (!(67108864 & ~e.getToken())) {
        switch (((t = 33554432 ^ (33554432 | t)), e.getToken())) {
          case 67108877:
            M(e, 2048 ^ (67110912 | t)),
              4096 & t &&
                e.getToken() === 130 &&
                e.tokenValue === "super" &&
                T(e, 173),
              (e.assignable = 1),
              (n = S(e, t, i, f, d, {
                type: "MemberExpression",
                object: n,
                computed: !1,
                property: jr(e, 16384 | t, r),
              }));
            break;
          case 69271571: {
            let h = !1;
            2048 & ~e.flags || ((h = !0), (e.flags = 2048 ^ (2048 | e.flags))),
              M(e, 8192 | t);
            let { tokenIndex: c, tokenLine: o, tokenColumn: l } = e,
              m = se(e, t, r, u, 1, c, o, l);
            U(e, t, 20),
              (e.assignable = 1),
              (n = S(e, t, i, f, d, {
                type: "MemberExpression",
                object: n,
                computed: !0,
                property: m,
              })),
              h && (e.flags |= 2048);
            break;
          }
          case 67174411: {
            if (!(1024 & ~e.flags))
              return (e.flags = 1024 ^ (1024 | e.flags)), n;
            let h = !1;
            2048 & ~e.flags || ((h = !0), (e.flags = 2048 ^ (2048 | e.flags)));
            let c = Kr(e, t, r, u);
            (e.assignable = 2),
              (n = S(e, t, i, f, d, {
                type: "CallExpression",
                callee: n,
                arguments: c,
              })),
              h && (e.flags |= 2048);
            break;
          }
          case 67108990:
            M(e, 2048 ^ (67110912 | t)),
              (e.flags |= 2048),
              (e.assignable = 2),
              (n = (function (h, c, o, l, m, b, A) {
                let _,
                  k = !1;
                if (
                  ((h.getToken() !== 69271571 && h.getToken() !== 67174411) ||
                    2048 & ~h.flags ||
                    ((k = !0), (h.flags = 2048 ^ (2048 | h.flags))),
                  h.getToken() === 69271571)
                ) {
                  M(h, 8192 | c);
                  let { tokenIndex: I, tokenLine: L, tokenColumn: O } = h,
                    N = se(h, c, o, 0, 1, I, L, O);
                  U(h, c, 20),
                    (h.assignable = 2),
                    (_ = S(h, c, m, b, A, {
                      type: "MemberExpression",
                      object: l,
                      computed: !0,
                      optional: !0,
                      property: N,
                    }));
                } else if (h.getToken() === 67174411) {
                  let I = Kr(h, c, o, 0);
                  (h.assignable = 2),
                    (_ = S(h, c, m, b, A, {
                      type: "CallExpression",
                      callee: l,
                      arguments: I,
                      optional: !0,
                    }));
                } else {
                  let I = jr(h, c, o);
                  (h.assignable = 2),
                    (_ = S(h, c, m, b, A, {
                      type: "MemberExpression",
                      object: l,
                      computed: !1,
                      optional: !0,
                      property: I,
                    }));
                }
                return k && (h.flags |= 2048), _;
              })(e, t, r, n, i, f, d));
            break;
          default:
            2048 & ~e.flags || T(e, 166),
              (e.assignable = 2),
              (n = S(e, t, i, f, d, {
                type: "TaggedTemplateExpression",
                tag: n,
                quasi:
                  e.getToken() === 67174408
                    ? un(e, 16384 | t, r)
                    : nn(e, t, e.tokenIndex, e.tokenLine, e.tokenColumn),
              }));
        }
        n = W(e, t, r, n, 0, 1, i, f, d);
      }
    } else
      n = (function (h, c, o, l, m, b) {
        2 & h.assignable && T(h, 55);
        let A = h.getToken();
        return (
          M(h, c),
          (h.assignable = 2),
          S(h, c, l, m, b, {
            type: "UpdateExpression",
            argument: o,
            operator: Y[255 & A],
            prefix: !1,
          })
        );
      })(e, t, n, i, f, d);
    return (
      a !== 0 ||
        2048 & ~e.flags ||
        ((e.flags = 2048 ^ (2048 | e.flags)),
        (n = S(e, t, i, f, d, { type: "ChainExpression", expression: n }))),
      n
    );
  }
  function jr(e, t, r) {
    return (
      143360 & e.getToken() ||
        e.getToken() === -2147483528 ||
        e.getToken() === -2147483527 ||
        e.getToken() === 130 ||
        T(e, 160),
      e.getToken() === 130
        ? cr(e, t, r, 0, e.tokenIndex, e.tokenLine, e.tokenColumn)
        : X(e, t)
    );
  }
  function he(e, t, r, n, u, a, i, f, d, h, c) {
    if (!(143360 & ~e.getToken())) {
      switch (e.getToken()) {
        case 209006:
          return (function (b, A, _, k, I, L, O, N) {
            I && (b.destructible |= 128), 268435456 & A && T(b, 177);
            let v = Vr(b, A, _, L, O, N);
            if (v.type === "ArrowFunctionExpression" || !(65536 & b.getToken()))
              return (
                524288 & A &&
                  de(L, O, N, b.startIndex, b.startLine, b.startColumn, 176),
                512 & A &&
                  de(L, O, N, b.startIndex, b.startLine, b.startColumn, 110),
                2097152 & A &&
                  524288 & A &&
                  de(L, O, N, b.startIndex, b.startLine, b.startColumn, 110),
                v
              );
            if (
              (2097152 & A &&
                de(L, O, N, b.startIndex, b.startLine, b.startColumn, 31),
              524288 & A || (512 & A && 2048 & A))
            ) {
              k && de(L, O, N, b.startIndex, b.startLine, b.startColumn, 0);
              let B = pe(
                b,
                A,
                _,
                0,
                0,
                1,
                b.tokenIndex,
                b.tokenLine,
                b.tokenColumn,
              );
              return (
                b.getToken() === 8391735 && T(b, 33),
                (b.assignable = 2),
                S(b, A, L, O, N, { type: "AwaitExpression", argument: B })
              );
            }
            return (
              512 & A &&
                de(L, O, N, b.startIndex, b.startLine, b.startColumn, 98),
              v
            );
          })(e, t, r, u, i, d, h, c);
        case 241771:
          return (function (b, A, _, k, I, L, O, N) {
            if ((k && (b.destructible |= 256), 262144 & A)) {
              M(b, 8192 | A),
                2097152 & A && T(b, 32),
                I || T(b, 26),
                b.getToken() === 22 && T(b, 124);
              let v = null,
                B = !1;
              return (
                1 & b.flags
                  ? b.getToken() === 8391476 && T(b, 30, Y[255 & b.getToken()])
                  : ((B = F(b, 8192 | A, 8391476)),
                    (77824 & b.getToken() || B) &&
                      (v = Q(
                        b,
                        A,
                        _,
                        1,
                        0,
                        b.tokenIndex,
                        b.tokenLine,
                        b.tokenColumn,
                      ))),
                (b.assignable = 2),
                S(b, A, L, O, N, {
                  type: "YieldExpression",
                  argument: v,
                  delegate: B,
                })
              );
            }
            return 256 & A && T(b, 97, "yield"), Vr(b, A, _, L, O, N);
          })(e, t, r, i, a, d, h, c);
        case 209005:
          return (function (b, A, _, k, I, L, O, N, v, B) {
            let R = b.getToken(),
              w = X(b, A),
              { flags: H } = b;
            if (!(1 & H)) {
              if (b.getToken() === 86104) return Ju(b, A, _, 1, k, N, v, B);
              if (_t(A, b.getToken()))
                return (
                  I || T(b, 0),
                  36864 & ~b.getToken() || (b.flags |= 256),
                  Ia(b, A, _, L, N, v, B)
                );
            }
            return O || b.getToken() !== 67174411
              ? b.getToken() === 10
                ? (sr(b, A, R),
                  O && T(b, 51),
                  36864 & ~R || (b.flags |= 256),
                  ir(b, A, _, b.tokenValue, w, O, L, 0, N, v, B))
                : ((b.assignable = 1), w)
              : an(b, A, _, w, L, 1, 0, H, N, v, B);
          })(e, t, r, i, f, a, u, d, h, c);
      }
      let { tokenValue: o } = e,
        l = e.getToken(),
        m = X(e, 16384 | t);
      return e.getToken() === 10
        ? (f || T(e, 0),
          sr(e, t, l),
          36864 & ~l || (e.flags |= 256),
          ir(e, t, r, o, m, u, a, 0, d, h, c))
        : (!(4096 & t) ||
            8388608 & t ||
            2097152 & t ||
            e.tokenValue !== "arguments" ||
            T(e, 130),
          (255 & l) == 73 && (256 & t && T(e, 113), 24 & n && T(e, 100)),
          (e.assignable = 256 & t && !(537079808 & ~l) ? 2 : 1),
          m);
    }
    if (!(134217728 & ~e.getToken())) return ne(e, t);
    switch (e.getToken()) {
      case 33619993:
      case 33619994:
        return (function (o, l, m, b, A, _, k, I) {
          b && T(o, 56), A || T(o, 0);
          let L = o.getToken();
          M(o, 8192 | l);
          let O = pe(
            o,
            l,
            m,
            0,
            0,
            1,
            o.tokenIndex,
            o.tokenLine,
            o.tokenColumn,
          );
          return (
            2 & o.assignable && T(o, 55),
            (o.assignable = 2),
            S(o, l, _, k, I, {
              type: "UpdateExpression",
              argument: O,
              operator: Y[255 & L],
              prefix: !0,
            })
          );
        })(e, t, r, u, f, d, h, c);
      case 16863276:
      case 16842798:
      case 16842799:
      case 25233968:
      case 25233969:
      case 16863275:
      case 16863277:
        return (function (o, l, m, b, A, _, k, I) {
          b || T(o, 0);
          let L = o.getToken();
          M(o, 8192 | l);
          let O = pe(
            o,
            l,
            m,
            0,
            I,
            1,
            o.tokenIndex,
            o.tokenLine,
            o.tokenColumn,
          );
          var N;
          return (
            o.getToken() === 8391735 && T(o, 33),
            256 & l &&
              L === 16863276 &&
              (O.type === "Identifier"
                ? T(o, 121)
                : (N = O).property &&
                  N.property.type === "PrivateIdentifier" &&
                  T(o, 127)),
            (o.assignable = 2),
            S(o, l, A, _, k, {
              type: "UnaryExpression",
              operator: Y[255 & L],
              argument: O,
              prefix: !0,
            })
          );
        })(e, t, r, f, d, h, c, i);
      case 86104:
        return Ju(e, t, r, 0, i, d, h, c);
      case 2162700:
        return (function (o, l, m, b, A, _, k, I) {
          let L = ge(o, l, void 0, m, b, A, 0, 2, 0, _, k, I);
          return (
            64 & o.destructible && T(o, 63), 8 & o.destructible && T(o, 62), L
          );
        })(e, t, r, a ? 0 : 1, i, d, h, c);
      case 69271571:
        return (function (o, l, m, b, A, _, k, I) {
          let L = be(o, l, void 0, m, b, A, 0, 2, 0, _, k, I);
          return (
            64 & o.destructible && T(o, 63), 8 & o.destructible && T(o, 62), L
          );
        })(e, t, r, a ? 0 : 1, i, d, h, c);
      case 67174411:
        return (function (o, l, m, b, A, _, k, I, L) {
          o.flags = 128 ^ (128 | o.flags);
          let { tokenIndex: O, tokenLine: N, tokenColumn: v } = o;
          M(o, 67117056 | l);
          let B = 16 & l ? J({ parent: void 0, type: 2 }, 1024) : void 0;
          if (((l = 33554432 ^ (33554432 | l)), F(o, l, 16)))
            return or(o, l, B, m, [], b, 0, k, I, L);
          let R,
            w = 0;
          o.destructible &= -385;
          let H = [],
            G = 0,
            K = 0,
            ee = 0,
            { tokenIndex: Ve, tokenLine: St, tokenColumn: Ot } = o;
          for (o.assignable = 1; o.getToken() !== 16; ) {
            let { tokenIndex: me, tokenLine: Ee, tokenColumn: Ae } = o,
              Ge = o.getToken();
            if (143360 & Ge)
              B && ve(o, l, B, o.tokenValue, 1, 0),
                537079808 & ~Ge ? 36864 & ~Ge || (ee = 1) : (K = 1),
                (R = he(o, l, m, A, 0, 1, 1, 1, me, Ee, Ae)),
                o.getToken() === 16 || o.getToken() === 18
                  ? 2 & o.assignable && ((w |= 16), (K = 1))
                  : (o.getToken() === 1077936155 ? (K = 1) : (w |= 16),
                    (R = W(o, l, m, R, 1, 0, me, Ee, Ae)),
                    o.getToken() !== 16 &&
                      o.getToken() !== 18 &&
                      (R = $(o, l, m, 1, 0, me, Ee, Ae, R)));
            else {
              if (2097152 & ~Ge) {
                if (Ge === 14) {
                  (R = et(o, l, B, m, 16, A, _, 0, 1, 0, me, Ee, Ae)),
                    16 & o.destructible && T(o, 74),
                    (K = 1),
                    !G ||
                      (o.getToken() !== 16 && o.getToken() !== 18) ||
                      H.push(R),
                    (w |= 8);
                  break;
                }
                if (
                  ((w |= 16),
                  (R = Q(o, l, m, 1, 1, me, Ee, Ae)),
                  !G ||
                    (o.getToken() !== 16 && o.getToken() !== 18) ||
                    H.push(R),
                  o.getToken() === 18 && (G || ((G = 1), (H = [R]))),
                  G)
                ) {
                  for (; F(o, 8192 | l, 18); )
                    H.push(
                      Q(
                        o,
                        l,
                        m,
                        1,
                        1,
                        o.tokenIndex,
                        o.tokenLine,
                        o.tokenColumn,
                      ),
                    );
                  (o.assignable = 2),
                    (R = S(o, l, Ve, St, Ot, {
                      type: "SequenceExpression",
                      expressions: H,
                    }));
                }
                return U(o, l, 16), (o.destructible = w), R;
              }
              (R =
                Ge === 2162700
                  ? ge(o, 67108864 | l, B, m, 0, 1, 0, A, _, me, Ee, Ae)
                  : be(o, 67108864 | l, B, m, 0, 1, 0, A, _, me, Ee, Ae)),
                (w |= o.destructible),
                (K = 1),
                (o.assignable = 2),
                o.getToken() !== 16 &&
                  o.getToken() !== 18 &&
                  (8 & w && T(o, 122),
                  (R = W(o, l, m, R, 0, 0, me, Ee, Ae)),
                  (w |= 16),
                  o.getToken() !== 16 &&
                    o.getToken() !== 18 &&
                    (R = $(o, l, m, 0, 0, me, Ee, Ae, R)));
            }
            if (
              (!G || (o.getToken() !== 16 && o.getToken() !== 18) || H.push(R),
              !F(o, 8192 | l, 18))
            )
              break;
            if ((G || ((G = 1), (H = [R])), o.getToken() === 16)) {
              w |= 8;
              break;
            }
          }
          return (
            G &&
              ((o.assignable = 2),
              (R = S(o, l, Ve, St, Ot, {
                type: "SequenceExpression",
                expressions: H,
              }))),
            U(o, l, 16),
            16 & w && 8 & w && T(o, 151),
            (w |= 256 & o.destructible ? 256 : 128 & o.destructible ? 128 : 0),
            o.getToken() === 10
              ? (48 & w && T(o, 49),
                524800 & l && 128 & w && T(o, 31),
                262400 & l && 256 & w && T(o, 32),
                K && (o.flags |= 128),
                ee && (o.flags |= 256),
                or(o, l, B, m, G ? H : [R], b, 0, k, I, L))
              : (64 & w && T(o, 63),
                8 & w && T(o, 144),
                (o.destructible = (256 ^ (256 | o.destructible)) | w),
                32 & l
                  ? S(o, l, O, N, v, {
                      type: "ParenthesizedExpression",
                      expression: R,
                    })
                  : R)
          );
        })(e, 16384 | t, r, a, 1, 0, d, h, c);
      case 86021:
      case 86022:
      case 86023:
        return (function (o, l, m, b, A) {
          let _ = Y[255 & o.getToken()],
            k = o.getToken() === 86023 ? null : _ === "true";
          return (
            M(o, l),
            (o.assignable = 2),
            S(
              o,
              l,
              m,
              b,
              A,
              128 & l
                ? { type: "Literal", value: k, raw: _ }
                : { type: "Literal", value: k },
            )
          );
        })(e, t, d, h, c);
      case 86111:
        return (function (o, l) {
          let { tokenIndex: m, tokenLine: b, tokenColumn: A } = o;
          return (
            M(o, l),
            (o.assignable = 2),
            S(o, l, m, b, A, { type: "ThisExpression" })
          );
        })(e, t);
      case 65540:
        return (function (o, l, m, b, A) {
          let { tokenRaw: _, tokenRegExp: k, tokenValue: I } = o;
          return (
            M(o, l),
            (o.assignable = 2),
            S(
              o,
              l,
              m,
              b,
              A,
              128 & l
                ? { type: "Literal", value: I, regex: k, raw: _ }
                : { type: "Literal", value: I, regex: k },
            )
          );
        })(e, t, d, h, c);
      case 132:
      case 86094:
        return (function (o, l, m, b, A, _, k) {
          let I = null,
            L = null,
            O = hr(o, l, m);
          O.length &&
            ((A = o.tokenIndex), (_ = o.tokenLine), (k = o.tokenColumn)),
            (l = 4194304 ^ (4194560 | l)),
            M(o, l),
            4096 & o.getToken() &&
              o.getToken() !== 20565 &&
              (da(o, l, o.getToken()) && T(o, 118),
              537079808 & ~o.getToken() || T(o, 119),
              (I = X(o, l)));
          let N = l;
          F(o, 8192 | l, 20565)
            ? ((L = pe(
                o,
                l,
                m,
                0,
                b,
                0,
                o.tokenIndex,
                o.tokenLine,
                o.tokenColumn,
              )),
              (N |= 131072))
            : (N = 131072 ^ (131072 | N));
          let v = Na(o, N, l, void 0, m, 2, 0, b);
          return (
            (o.assignable = 2),
            S(o, l, A, _, k, {
              type: "ClassExpression",
              id: I,
              superClass: L,
              body: v,
              ...(1 & l ? { decorators: O } : null),
            })
          );
        })(e, t, r, i, d, h, c);
      case 86109:
        return (function (o, l, m, b, A) {
          switch ((M(o, l), o.getToken())) {
            case 67108990:
              T(o, 167);
            case 67174411:
              131072 & l || T(o, 28), (o.assignable = 2);
              break;
            case 69271571:
            case 67108877:
              65536 & l || T(o, 29), (o.assignable = 1);
              break;
            default:
              T(o, 30, "super");
          }
          return S(o, l, m, b, A, { type: "Super" });
        })(e, t, d, h, c);
      case 67174409:
        return nn(e, t, d, h, c);
      case 67174408:
        return un(e, t, r);
      case 86107:
        return (function (o, l, m, b, A, _, k) {
          let I = X(o, 8192 | l),
            { tokenIndex: L, tokenLine: O, tokenColumn: N } = o;
          if (F(o, l, 67108877)) {
            if (16777216 & l && o.getToken() === 209029)
              return (
                (o.assignable = 2),
                (function (R, w, H, G, K, ee) {
                  let Ve = X(R, w);
                  return S(R, w, G, K, ee, {
                    type: "MetaProperty",
                    meta: H,
                    property: Ve,
                  });
                })(o, l, I, A, _, k)
              );
            T(o, 94);
          }
          (o.assignable = 2),
            16842752 & ~o.getToken() || T(o, 65, Y[255 & o.getToken()]);
          let v = he(o, l, m, 2, 1, 0, b, 1, L, O, N);
          (l = 33554432 ^ (33554432 | l)),
            o.getToken() === 67108990 && T(o, 168);
          let B = rr(o, l, m, v, b, L, O, N);
          return (
            (o.assignable = 2),
            S(o, l, A, _, k, {
              type: "NewExpression",
              callee: B,
              arguments: o.getToken() === 67174411 ? Kr(o, l, m, b) : [],
            })
          );
        })(e, t, r, i, d, h, c);
      case 134283388:
        return _a(e, t, d, h, c);
      case 130:
        return cr(e, t, r, 0, d, h, c);
      case 86106:
        return (function (o, l, m, b, A, _, k, I) {
          let L = X(o, l);
          return o.getToken() === 67108877
            ? ga(o, l, L, _, k, I)
            : (b && T(o, 142),
              (L = Aa(o, l, m, A, _, k, I)),
              (o.assignable = 2),
              W(o, l, m, L, A, 0, _, k, I));
        })(e, t, r, u, i, d, h, c);
      case 8456256:
        if (8 & t) return mr(e, t, r, 0, d, h, c);
      default:
        if (_t(t, e.getToken())) return Vr(e, t, r, d, h, c);
        T(e, 30, Y[255 & e.getToken()]);
    }
  }
  function ga(e, t, r, n, u, a) {
    512 & t || T(e, 169), M(e, t);
    let i = e.getToken();
    return (
      i !== 209030 && e.tokenValue !== "meta"
        ? T(e, 174)
        : -2147483648 & i && T(e, 175),
      (e.assignable = 2),
      S(e, t, n, u, a, { type: "MetaProperty", meta: r, property: X(e, t) })
    );
  }
  function Aa(e, t, r, n, u, a, i) {
    U(e, 8192 | t, 67174411), e.getToken() === 14 && T(e, 143);
    let f = {
      type: "ImportExpression",
      source: Q(e, t, r, 1, n, e.tokenIndex, e.tokenLine, e.tokenColumn),
    };
    if (1 & t) {
      let d = null;
      e.getToken() === 18 &&
        (U(e, t, 18), e.getToken() !== 16) &&
        (d = Q(
          e,
          33554432 ^ (33554432 | t),
          r,
          1,
          n,
          e.tokenIndex,
          e.tokenLine,
          e.tokenColumn,
        )),
        (f.options = d),
        F(e, t, 18);
    }
    return U(e, t, 16), S(e, t, u, a, i, f);
  }
  function Yr(e, t, r = null) {
    if (!F(e, t, 20579)) return [];
    U(e, t, 2162700);
    let n = [],
      u = new Set();
    for (; e.getToken() !== 1074790415; ) {
      let a = e.tokenIndex,
        i = e.tokenLine,
        f = e.tokenColumn,
        d = C0(e, t);
      U(e, t, 21);
      let h = k0(e, t),
        c = d.type === "Literal" ? d.value : d.name;
      c === "type" &&
        h.value === "json" &&
        (r === null ||
          (r.length === 1 &&
            (r[0].type === "ImportDefaultSpecifier" ||
              r[0].type === "ImportNamespaceSpecifier" ||
              (r[0].type === "ImportSpecifier" &&
                r[0].imported.type === "Identifier" &&
                r[0].imported.name === "default") ||
              (r[0].type === "ExportSpecifier" &&
                r[0].local.type === "Identifier" &&
                r[0].local.name === "default"))) ||
          T(e, 140)),
        u.has(c) && T(e, 145, `${c}`),
        u.add(c),
        n.push(S(e, t, a, i, f, { type: "ImportAttribute", key: d, value: h })),
        e.getToken() !== 1074790415 && U(e, t, 18);
    }
    return U(e, t, 1074790415), n;
  }
  function k0(e, t) {
    if (e.getToken() === 134283267) return ne(e, t);
    T(e, 30, Y[255 & e.getToken()]);
  }
  function C0(e, t) {
    return e.getToken() === 134283267
      ? ne(e, t)
      : 143360 & e.getToken()
        ? X(e, t)
        : void T(e, 30, Y[255 & e.getToken()]);
  }
  function er(e, t) {
    return e.getToken() === 134283267
      ? ((function (r, n) {
          let u = n.length;
          for (let a = 0; a < u; a++) {
            let i = n.charCodeAt(a);
            (64512 & i) == 55296 &&
              (i > 56319 || ++a >= u || (64512 & n.charCodeAt(a)) != 56320) &&
              T(r, 171, JSON.stringify(n.charAt(a--)));
          }
        })(e, e.tokenValue),
        ne(e, t))
      : 143360 & e.getToken()
        ? X(e, t)
        : void T(e, 30, Y[255 & e.getToken()]);
  }
  function _a(e, t, r, n, u) {
    let { tokenRaw: a, tokenValue: i } = e;
    return (
      M(e, t),
      (e.assignable = 2),
      S(
        e,
        t,
        r,
        n,
        u,
        128 & t
          ? { type: "Literal", value: i, bigint: a.slice(0, -1), raw: a }
          : { type: "Literal", value: i, bigint: a.slice(0, -1) },
      )
    );
  }
  function nn(e, t, r, n, u) {
    e.assignable = 2;
    let {
      tokenValue: a,
      tokenRaw: i,
      tokenIndex: f,
      tokenLine: d,
      tokenColumn: h,
    } = e;
    return (
      U(e, t, 67174409),
      S(e, t, r, n, u, {
        type: "TemplateLiteral",
        expressions: [],
        quasis: [tr(e, t, a, i, f, d, h, !0)],
      })
    );
  }
  function un(e, t, r) {
    t = 33554432 ^ (33554432 | t);
    let {
      tokenValue: n,
      tokenRaw: u,
      tokenIndex: a,
      tokenLine: i,
      tokenColumn: f,
    } = e;
    U(e, (-16385 & t) | 8192, 67174408);
    let d = [tr(e, t, n, u, a, i, f, !1)],
      h = [
        se(e, -16385 & t, r, 0, 1, e.tokenIndex, e.tokenLine, e.tokenColumn),
      ];
    for (
      e.getToken() !== 1074790415 && T(e, 83);
      e.setToken(h0(e, t), !0) !== 67174409;

    ) {
      let {
        tokenValue: c,
        tokenRaw: o,
        tokenIndex: l,
        tokenLine: m,
        tokenColumn: b,
      } = e;
      U(e, (-16385 & t) | 8192, 67174408),
        d.push(tr(e, t, c, o, l, m, b, !1)),
        h.push(se(e, t, r, 0, 1, e.tokenIndex, e.tokenLine, e.tokenColumn)),
        e.getToken() !== 1074790415 && T(e, 83);
    }
    {
      let {
        tokenValue: c,
        tokenRaw: o,
        tokenIndex: l,
        tokenLine: m,
        tokenColumn: b,
      } = e;
      U(e, t, 67174409), d.push(tr(e, t, c, o, l, m, b, !0));
    }
    return S(e, t, a, i, f, {
      type: "TemplateLiteral",
      expressions: h,
      quasis: d,
    });
  }
  function tr(e, t, r, n, u, a, i, f) {
    let d = S(e, t, u, a, i, {
        type: "TemplateElement",
        value: { cooked: r, raw: n },
        tail: f,
      }),
      h = f ? 1 : 2;
    return (
      2 & t &&
        ((d.start += 1), (d.range[0] += 1), (d.end -= h), (d.range[1] -= h)),
      4 & t && ((d.loc.start.column += 1), (d.loc.end.column -= h)),
      d
    );
  }
  function I0(e, t, r, n, u, a) {
    U(e, 8192 | (t = 33554432 ^ (33554432 | t)), 14);
    let i = Q(e, t, r, 1, 0, e.tokenIndex, e.tokenLine, e.tokenColumn);
    return (
      (e.assignable = 1),
      S(e, t, n, u, a, { type: "SpreadElement", argument: i })
    );
  }
  function Kr(e, t, r, n) {
    M(e, 8192 | t);
    let u = [];
    if (e.getToken() === 16) return M(e, 16384 | t), u;
    for (
      ;
      e.getToken() !== 16 &&
      (e.getToken() === 14
        ? u.push(I0(e, t, r, e.tokenIndex, e.tokenLine, e.tokenColumn))
        : u.push(Q(e, t, r, 1, n, e.tokenIndex, e.tokenLine, e.tokenColumn)),
      e.getToken() === 18) &&
      (M(e, 8192 | t), e.getToken() !== 16);

    );
    return U(e, t, 16), u;
  }
  function X(e, t) {
    let { tokenValue: r, tokenIndex: n, tokenLine: u, tokenColumn: a } = e,
      i = r === "await" && !(-2147483648 & e.getToken());
    return (
      M(e, t | (i ? 8192 : 0)),
      S(e, t, n, u, a, { type: "Identifier", name: r })
    );
  }
  function ne(e, t) {
    let {
      tokenValue: r,
      tokenRaw: n,
      tokenIndex: u,
      tokenLine: a,
      tokenColumn: i,
    } = e;
    return e.getToken() === 134283388
      ? _a(e, t, u, a, i)
      : (M(e, t),
        (e.assignable = 2),
        S(
          e,
          t,
          u,
          a,
          i,
          128 & t
            ? { type: "Literal", value: r, raw: n }
            : { type: "Literal", value: r },
        ));
  }
  function Me(e, t, r, n, u, a, i, f, d, h, c) {
    M(e, 8192 | t);
    let o = a ? tn(e, t, 8391476) : 0,
      l,
      m = null,
      b = r ? { parent: void 0, type: 2 } : void 0;
    if (e.getToken() === 67174411) 1 & i || T(e, 39, "Function");
    else {
      let k =
        !(4 & u) || (2048 & t && 512 & t)
          ? 64 | (f ? 1024 : 0) | (o ? 1024 : 0)
          : 4;
      la(e, t, e.getToken()),
        r &&
          (4 & k
            ? fa(e, t, r, e.tokenValue, k)
            : ve(e, t, r, e.tokenValue, k, u),
          (b = J(b, 256)),
          i && 2 & i && we(e, e.tokenValue)),
        (l = e.getToken()),
        143360 & e.getToken() ? (m = X(e, t)) : T(e, 30, Y[255 & e.getToken()]);
    }
    let A = 7274496;
    (t =
      ((t | A) ^ A) |
      16777216 |
      (f ? 524288 : 0) |
      (o ? 262144 : 0) |
      (o ? 0 : 67108864)),
      r && (b = J(b, 512));
    let _ = 268471296;
    return S(e, t, d, h, c, {
      type: "FunctionDeclaration",
      id: m,
      params: Ca(e, (-268435457 & t) | 2097152, b, n, 0, 1),
      body: fr(
        e,
        9437184 | ((t | _) ^ _),
        r ? J(b, 128) : b,
        n,
        8,
        l,
        b?.scopeError,
      ),
      async: f === 1,
      generator: o === 1,
    });
  }
  function Ju(e, t, r, n, u, a, i, f) {
    M(e, 8192 | t);
    let d = tn(e, t, 8391476),
      h = (n ? 524288 : 0) | (d ? 262144 : 0),
      c,
      o = null,
      l = 16 & t ? { parent: void 0, type: 2 } : void 0,
      m = 275709952;
    143360 & e.getToken() &&
      (la(e, ((t | m) ^ m) | h, e.getToken()),
      l && (l = J(l, 256)),
      (c = e.getToken()),
      (o = X(e, t))),
      (t = ((t | m) ^ m) | 16777216 | h | (d ? 0 : 67108864)),
      l && (l = J(l, 512));
    let b = Ca(e, (-268435457 & t) | 2097152, l, r, u, 1),
      A = fr(
        e,
        9437184 | (-33594369 & t),
        l && J(l, 128),
        r,
        0,
        c,
        l?.scopeError,
      );
    return (
      (e.assignable = 2),
      S(e, t, a, i, f, {
        type: "FunctionExpression",
        id: o,
        params: b,
        body: A,
        async: n === 1,
        generator: d === 1,
      })
    );
  }
  function be(e, t, r, n, u, a, i, f, d, h, c, o) {
    M(e, 8192 | t);
    let l = [],
      m = 0;
    for (t = 33554432 ^ (33554432 | t); e.getToken() !== 20; )
      if (F(e, 8192 | t, 18)) l.push(null);
      else {
        let A,
          { tokenIndex: _, tokenLine: k, tokenColumn: I, tokenValue: L } = e,
          O = e.getToken();
        if (143360 & O)
          if (
            ((A = he(e, t, n, f, 0, 1, a, 1, _, k, I)),
            e.getToken() === 1077936155)
          ) {
            2 & e.assignable && T(e, 26),
              M(e, 8192 | t),
              r && Se(e, t, r, L, f, d);
            let N = Q(e, t, n, 1, a, e.tokenIndex, e.tokenLine, e.tokenColumn);
            (A = S(
              e,
              t,
              _,
              k,
              I,
              i
                ? { type: "AssignmentPattern", left: A, right: N }
                : {
                    type: "AssignmentExpression",
                    operator: "=",
                    left: A,
                    right: N,
                  },
            )),
              (m |=
                256 & e.destructible ? 256 : 128 & e.destructible ? 128 : 0);
          } else
            e.getToken() === 18 || e.getToken() === 20
              ? (2 & e.assignable ? (m |= 16) : r && Se(e, t, r, L, f, d),
                (m |=
                  256 & e.destructible ? 256 : 128 & e.destructible ? 128 : 0))
              : ((m |= 1 & f ? 32 : 2 & f ? 0 : 16),
                (A = W(e, t, n, A, a, 0, _, k, I)),
                e.getToken() !== 18 && e.getToken() !== 20
                  ? (e.getToken() !== 1077936155 && (m |= 16),
                    (A = $(e, t, n, a, i, _, k, I, A)))
                  : e.getToken() !== 1077936155 &&
                    (m |= 2 & e.assignable ? 16 : 32));
        else
          2097152 & O
            ? ((A =
                e.getToken() === 2162700
                  ? ge(e, t, r, n, 0, a, i, f, d, _, k, I)
                  : be(e, t, r, n, 0, a, i, f, d, _, k, I)),
              (m |= e.destructible),
              (e.assignable = 16 & e.destructible ? 2 : 1),
              e.getToken() === 18 || e.getToken() === 20
                ? 2 & e.assignable && (m |= 16)
                : 8 & e.destructible
                  ? T(e, 71)
                  : ((A = W(e, t, n, A, a, 0, _, k, I)),
                    (m = 2 & e.assignable ? 16 : 0),
                    e.getToken() !== 18 && e.getToken() !== 20
                      ? (A = $(e, t, n, a, i, _, k, I, A))
                      : e.getToken() !== 1077936155 &&
                        (m |= 2 & e.assignable ? 16 : 32)))
            : O === 14
              ? ((A = et(e, t, r, n, 20, f, d, 0, a, i, _, k, I)),
                (m |= e.destructible),
                e.getToken() !== 18 &&
                  e.getToken() !== 20 &&
                  T(e, 30, Y[255 & e.getToken()]))
              : ((A = pe(e, t, n, 1, 0, 1, _, k, I)),
                e.getToken() !== 18 && e.getToken() !== 20
                  ? ((A = $(e, t, n, a, i, _, k, I, A)),
                    3 & f || O !== 67174411 || (m |= 16))
                  : 2 & e.assignable
                    ? (m |= 16)
                    : O === 67174411 &&
                      (m |= 1 & e.assignable && 3 & f ? 32 : 16));
        if ((l.push(A), !F(e, 8192 | t, 18) || e.getToken() === 20)) break;
      }
    U(e, t, 20);
    let b = S(e, t, h, c, o, {
      type: i ? "ArrayPattern" : "ArrayExpression",
      elements: l,
    });
    return !u && 4194304 & e.getToken()
      ? ka(e, t, n, m, a, i, h, c, o, b)
      : ((e.destructible = m), b);
  }
  function ka(e, t, r, n, u, a, i, f, d, h) {
    e.getToken() !== 1077936155 && T(e, 26),
      M(e, 8192 | t),
      16 & n && T(e, 26),
      a || Ie(e, h);
    let { tokenIndex: c, tokenLine: o, tokenColumn: l } = e,
      m = Q(e, t, r, 1, u, c, o, l);
    return (
      (e.destructible =
        (72 ^ (72 | n)) |
        (128 & e.destructible ? 128 : 0) |
        (256 & e.destructible ? 256 : 0)),
      S(
        e,
        t,
        i,
        f,
        d,
        a
          ? { type: "AssignmentPattern", left: h, right: m }
          : { type: "AssignmentExpression", left: h, operator: "=", right: m },
      )
    );
  }
  function et(e, t, r, n, u, a, i, f, d, h, c, o, l) {
    M(e, 8192 | t);
    let m = null,
      b = 0,
      { tokenValue: A, tokenIndex: _, tokenLine: k, tokenColumn: I } = e,
      L = e.getToken();
    if (143360 & L)
      (e.assignable = 1),
        (m = he(e, t, n, a, 0, 1, d, 1, _, k, I)),
        (L = e.getToken()),
        (m = W(e, t, n, m, d, 0, _, k, I)),
        e.getToken() !== 18 &&
          e.getToken() !== u &&
          (2 & e.assignable && e.getToken() === 1077936155 && T(e, 71),
          (b |= 16),
          (m = $(e, t, n, d, h, _, k, I, m))),
        2 & e.assignable
          ? (b |= 16)
          : L === u || L === 18
            ? r && Se(e, t, r, A, a, i)
            : (b |= 32),
        (b |= 128 & e.destructible ? 128 : 0);
    else if (L === u) T(e, 41);
    else {
      if (!(2097152 & L)) {
        (b |= 32),
          (m = pe(e, t, n, 1, d, 1, e.tokenIndex, e.tokenLine, e.tokenColumn));
        let { tokenIndex: O, tokenLine: N, tokenColumn: v } = e,
          B = e.getToken();
        return (
          B === 1077936155
            ? (2 & e.assignable && T(e, 26),
              (m = $(e, t, n, d, h, O, N, v, m)),
              (b |= 16))
            : (B === 18
                ? (b |= 16)
                : B !== u && (m = $(e, t, n, d, h, O, N, v, m)),
              (b |= 1 & e.assignable ? 32 : 16)),
          (e.destructible = b),
          e.getToken() !== u && e.getToken() !== 18 && T(e, 161),
          S(e, t, c, o, l, {
            type: h ? "RestElement" : "SpreadElement",
            argument: m,
          })
        );
      }
      (m =
        e.getToken() === 2162700
          ? ge(e, t, r, n, 1, d, h, a, i, _, k, I)
          : be(e, t, r, n, 1, d, h, a, i, _, k, I)),
        (L = e.getToken()),
        L !== 1077936155 && L !== u && L !== 18
          ? (8 & e.destructible && T(e, 71),
            (m = W(e, t, n, m, d, 0, _, k, I)),
            (b |= 2 & e.assignable ? 16 : 0),
            4194304 & ~e.getToken()
              ? (8388608 & ~e.getToken() ||
                  (m = Pe(e, t, n, 1, _, k, I, 4, L, m)),
                F(e, 8192 | t, 22) && (m = He(e, t, n, m, _, k, I)),
                (b |= 2 & e.assignable ? 16 : 32))
              : (e.getToken() !== 1077936155 && (b |= 16),
                (m = $(e, t, n, d, h, _, k, I, m))))
          : (b |= u === 1074790415 && L !== 1077936155 ? 16 : e.destructible);
    }
    if (e.getToken() !== u)
      if ((1 & a && (b |= f ? 16 : 32), F(e, 8192 | t, 1077936155))) {
        16 & b && T(e, 26), Ie(e, m);
        let O = Q(e, t, n, 1, d, e.tokenIndex, e.tokenLine, e.tokenColumn);
        (m = S(
          e,
          t,
          _,
          k,
          I,
          h
            ? { type: "AssignmentPattern", left: m, right: O }
            : {
                type: "AssignmentExpression",
                left: m,
                operator: "=",
                right: O,
              },
        )),
          (b = 16);
      } else b |= 16;
    return (
      (e.destructible = b),
      S(e, t, c, o, l, {
        type: h ? "RestElement" : "SpreadElement",
        argument: m,
      })
    );
  }
  function Ce(e, t, r, n, u, a, i, f) {
    let d = 2883584 | (64 & n ? 0 : 4325376),
      h =
        16 &
        (t =
          25231360 |
          (((t | d) ^ d) |
            (8 & n ? 262144 : 0) |
            (16 & n ? 524288 : 0) |
            (64 & n ? 4194304 : 0)))
          ? J({ parent: void 0, type: 2 }, 512)
          : void 0,
      c = (function (o, l, m, b, A, _, k) {
        U(o, l, 67174411);
        let I = [];
        if (((o.flags = 128 ^ (128 | o.flags)), o.getToken() === 16))
          return 512 & A && T(o, 37, "Setter", "one", ""), M(o, l), I;
        256 & A && T(o, 37, "Getter", "no", "s"),
          512 & A && o.getToken() === 14 && T(o, 38),
          (l = 33554432 ^ (33554432 | l));
        let L = 0,
          O = 0;
        for (; o.getToken() !== 18; ) {
          let N = null,
            { tokenIndex: v, tokenLine: B, tokenColumn: R } = o;
          if (
            (143360 & o.getToken()
              ? (256 & l ||
                  (36864 & ~o.getToken() || (o.flags |= 256),
                  537079808 & ~o.getToken() || (o.flags |= 512)),
                (N = sn(o, l, m, 1 | A, 0, v, B, R)))
              : (o.getToken() === 2162700
                  ? (N = ge(o, l, m, b, 1, k, 1, _, 0, v, B, R))
                  : o.getToken() === 69271571
                    ? (N = be(o, l, m, b, 1, k, 1, _, 0, v, B, R))
                    : o.getToken() === 14 &&
                      (N = et(o, l, m, b, 16, _, 0, 0, k, 1, v, B, R)),
                (O = 1),
                48 & o.destructible && T(o, 50)),
            o.getToken() === 1077936155 &&
              (M(o, 8192 | l),
              (O = 1),
              (N = S(o, l, v, B, R, {
                type: "AssignmentPattern",
                left: N,
                right: Q(
                  o,
                  l,
                  b,
                  1,
                  0,
                  o.tokenIndex,
                  o.tokenLine,
                  o.tokenColumn,
                ),
              }))),
            L++,
            I.push(N),
            !F(o, l, 18) || o.getToken() === 16)
          )
            break;
        }
        return (
          512 & A && L !== 1 && T(o, 37, "Setter", "one", ""),
          m && m.scopeError && lr(m.scopeError),
          O && (o.flags |= 128),
          U(o, l, 16),
          I
        );
      })(e, (-268435457 & t) | 2097152, h, r, n, 1, u);
    return (
      h && (h = J(h, 128)),
      S(e, t, a, i, f, {
        type: "FunctionExpression",
        params: c,
        body: fr(
          e,
          9437184 | (-301992961 & t),
          h,
          r,
          0,
          void 0,
          h?.parent?.scopeError,
        ),
        async: (16 & n) > 0,
        generator: (8 & n) > 0,
        id: null,
      })
    );
  }
  function ge(e, t, r, n, u, a, i, f, d, h, c, o) {
    M(e, t);
    let l = [],
      m = 0,
      b = 0;
    for (t = 33554432 ^ (33554432 | t); e.getToken() !== 1074790415; ) {
      let { tokenValue: _, tokenLine: k, tokenColumn: I, tokenIndex: L } = e,
        O = e.getToken();
      if (O === 14) l.push(et(e, t, r, n, 1074790415, f, d, 0, a, i, L, k, I));
      else {
        let N,
          v = 0,
          B = null;
        if (
          143360 & e.getToken() ||
          e.getToken() === -2147483528 ||
          e.getToken() === -2147483527
        )
          if (
            (e.getToken() === -2147483527 && (m |= 16),
            (B = X(e, t)),
            e.getToken() === 18 ||
              e.getToken() === 1074790415 ||
              e.getToken() === 1077936155)
          )
            if (
              ((v |= 4),
              256 & t && !(537079808 & ~O) ? (m |= 16) : ur(e, t, f, O, 0),
              r && Se(e, t, r, _, f, d),
              F(e, 8192 | t, 1077936155))
            ) {
              m |= 8;
              let R = Q(
                e,
                t,
                n,
                1,
                a,
                e.tokenIndex,
                e.tokenLine,
                e.tokenColumn,
              );
              (m |=
                256 & e.destructible ? 256 : 128 & e.destructible ? 128 : 0),
                (N = S(e, t, L, k, I, {
                  type: "AssignmentPattern",
                  left: 134217728 & t ? Object.assign({}, B) : B,
                  right: R,
                }));
            } else
              (m |= (O === 209006 ? 128 : 0) | (O === -2147483528 ? 16 : 0)),
                (N = 134217728 & t ? Object.assign({}, B) : B);
          else if (F(e, 8192 | t, 21)) {
            let { tokenIndex: R, tokenLine: w, tokenColumn: H } = e;
            if ((_ === "__proto__" && b++, 143360 & e.getToken())) {
              let G = e.getToken(),
                K = e.tokenValue;
              N = he(e, t, n, f, 0, 1, a, 1, R, w, H);
              let ee = e.getToken();
              (N = W(e, t, n, N, a, 0, R, w, H)),
                e.getToken() === 18 || e.getToken() === 1074790415
                  ? ee === 1077936155 || ee === 1074790415 || ee === 18
                    ? ((m |= 128 & e.destructible ? 128 : 0),
                      2 & e.assignable
                        ? (m |= 16)
                        : !r || 143360 & ~G || Se(e, t, r, K, f, d))
                    : (m |= 1 & e.assignable ? 32 : 16)
                  : 4194304 & ~e.getToken()
                    ? ((m |= 16),
                      8388608 & ~e.getToken() ||
                        (N = Pe(e, t, n, 1, R, w, H, 4, ee, N)),
                      F(e, 8192 | t, 22) && (N = He(e, t, n, N, R, w, H)))
                    : (2 & e.assignable
                        ? (m |= 16)
                        : ee !== 1077936155
                          ? (m |= 32)
                          : r && Se(e, t, r, K, f, d),
                      (N = $(e, t, n, a, i, R, w, H, N)));
            } else
              2097152 & ~e.getToken()
                ? ((N = pe(e, t, n, 1, a, 1, R, w, H)),
                  (m |= 1 & e.assignable ? 32 : 16),
                  e.getToken() === 18 || e.getToken() === 1074790415
                    ? 2 & e.assignable && (m |= 16)
                    : ((N = W(e, t, n, N, a, 0, R, w, H)),
                      (m = 2 & e.assignable ? 16 : 0),
                      e.getToken() !== 18 &&
                        O !== 1074790415 &&
                        (e.getToken() !== 1077936155 && (m |= 16),
                        (N = $(e, t, n, a, i, R, w, H, N)))))
                : ((N =
                    e.getToken() === 69271571
                      ? be(e, t, r, n, 0, a, i, f, d, R, w, H)
                      : ge(e, t, r, n, 0, a, i, f, d, R, w, H)),
                  (m = e.destructible),
                  (e.assignable = 16 & m ? 2 : 1),
                  e.getToken() === 18 || e.getToken() === 1074790415
                    ? 2 & e.assignable && (m |= 16)
                    : 8 & e.destructible
                      ? T(e, 71)
                      : ((N = W(e, t, n, N, a, 0, R, w, H)),
                        (m = 2 & e.assignable ? 16 : 0),
                        4194304 & ~e.getToken()
                          ? (8388608 & ~e.getToken() ||
                              (N = Pe(e, t, n, 1, R, w, H, 4, O, N)),
                            F(e, 8192 | t, 22) && (N = He(e, t, n, N, R, w, H)),
                            (m |= 2 & e.assignable ? 16 : 32))
                          : (N = Jt(e, t, n, a, i, R, w, H, N))));
          } else
            e.getToken() === 69271571
              ? ((m |= 16),
                O === 209005 && (v |= 16),
                (v |= 2 | (O === 12400 ? 256 : O === 12401 ? 512 : 1)),
                (B = ze(e, t, n, a)),
                (m |= e.assignable),
                (N = Ce(
                  e,
                  t,
                  n,
                  v,
                  a,
                  e.tokenIndex,
                  e.tokenLine,
                  e.tokenColumn,
                )))
              : 143360 & e.getToken()
                ? ((m |= 16),
                  O === -2147483528 && T(e, 95),
                  O === 209005
                    ? (1 & e.flags && T(e, 132), (v |= 17))
                    : O === 12400
                      ? (v |= 256)
                      : O === 12401
                        ? (v |= 512)
                        : T(e, 0),
                  (B = X(e, t)),
                  (N = Ce(
                    e,
                    t,
                    n,
                    v,
                    a,
                    e.tokenIndex,
                    e.tokenLine,
                    e.tokenColumn,
                  )))
                : e.getToken() === 67174411
                  ? ((m |= 16),
                    (v |= 1),
                    (N = Ce(
                      e,
                      t,
                      n,
                      v,
                      a,
                      e.tokenIndex,
                      e.tokenLine,
                      e.tokenColumn,
                    )))
                  : e.getToken() === 8391476
                    ? ((m |= 16),
                      O === 12400
                        ? T(e, 42)
                        : O === 12401
                          ? T(e, 43)
                          : O !== 209005 && T(e, 30, Y[52]),
                      M(e, t),
                      (v |= 9 | (O === 209005 ? 16 : 0)),
                      143360 & e.getToken()
                        ? (B = X(e, t))
                        : 134217728 & ~e.getToken()
                          ? e.getToken() === 69271571
                            ? ((v |= 2),
                              (B = ze(e, t, n, a)),
                              (m |= e.assignable))
                            : T(e, 30, Y[255 & e.getToken()])
                          : (B = ne(e, t)),
                      (N = Ce(
                        e,
                        t,
                        n,
                        v,
                        a,
                        e.tokenIndex,
                        e.tokenLine,
                        e.tokenColumn,
                      )))
                    : 134217728 & ~e.getToken()
                      ? T(e, 133)
                      : (O === 209005 && (v |= 16),
                        (v |= O === 12400 ? 256 : O === 12401 ? 512 : 1),
                        (m |= 16),
                        (B = ne(e, t)),
                        (N = Ce(
                          e,
                          t,
                          n,
                          v,
                          a,
                          e.tokenIndex,
                          e.tokenLine,
                          e.tokenColumn,
                        )));
        else if (134217728 & ~e.getToken())
          if (e.getToken() === 69271571)
            if (
              ((B = ze(e, t, n, a)),
              (m |= 256 & e.destructible ? 256 : 0),
              (v |= 2),
              e.getToken() === 21)
            ) {
              M(e, 8192 | t);
              let {
                  tokenIndex: R,
                  tokenLine: w,
                  tokenColumn: H,
                  tokenValue: G,
                } = e,
                K = e.getToken();
              if (143360 & e.getToken()) {
                N = he(e, t, n, f, 0, 1, a, 1, R, w, H);
                let ee = e.getToken();
                (N = W(e, t, n, N, a, 0, R, w, H)),
                  4194304 & ~e.getToken()
                    ? e.getToken() === 18 || e.getToken() === 1074790415
                      ? ee === 1077936155 || ee === 1074790415 || ee === 18
                        ? 2 & e.assignable
                          ? (m |= 16)
                          : !r || 143360 & ~K || Se(e, t, r, G, f, d)
                        : (m |= 1 & e.assignable ? 32 : 16)
                      : ((m |= 16), (N = $(e, t, n, a, i, R, w, H, N)))
                    : ((m |=
                        2 & e.assignable ? 16 : ee === 1077936155 ? 0 : 32),
                      (N = Jt(e, t, n, a, i, R, w, H, N)));
              } else
                2097152 & ~e.getToken()
                  ? ((N = pe(e, t, n, 1, 0, 1, R, w, H)),
                    (m |= 1 & e.assignable ? 32 : 16),
                    e.getToken() === 18 || e.getToken() === 1074790415
                      ? 2 & e.assignable && (m |= 16)
                      : ((N = W(e, t, n, N, a, 0, R, w, H)),
                        (m = 1 & e.assignable ? 0 : 16),
                        e.getToken() !== 18 &&
                          e.getToken() !== 1074790415 &&
                          (e.getToken() !== 1077936155 && (m |= 16),
                          (N = $(e, t, n, a, i, R, w, H, N)))))
                  : ((N =
                      e.getToken() === 69271571
                        ? be(e, t, r, n, 0, a, i, f, d, R, w, H)
                        : ge(e, t, r, n, 0, a, i, f, d, R, w, H)),
                    (m = e.destructible),
                    (e.assignable = 16 & m ? 2 : 1),
                    e.getToken() === 18 || e.getToken() === 1074790415
                      ? 2 & e.assignable && (m |= 16)
                      : 8 & m
                        ? T(e, 62)
                        : ((N = W(e, t, n, N, a, 0, R, w, H)),
                          (m = 2 & e.assignable ? 16 | m : 0),
                          4194304 & ~e.getToken()
                            ? (8388608 & ~e.getToken() ||
                                (N = Pe(e, t, n, 1, R, w, H, 4, O, N)),
                              F(e, 8192 | t, 22) &&
                                (N = He(e, t, n, N, R, w, H)),
                              (m |= 2 & e.assignable ? 16 : 32))
                            : (e.getToken() !== 1077936155 && (m |= 16),
                              (N = Jt(e, t, n, a, i, R, w, H, N)))));
            } else
              e.getToken() === 67174411
                ? ((v |= 1),
                  (N = Ce(e, t, n, v, a, e.tokenIndex, k, I)),
                  (m = 16))
                : T(e, 44);
          else if (O === 8391476)
            if ((U(e, 8192 | t, 8391476), (v |= 8), 143360 & e.getToken())) {
              let R = e.getToken();
              (B = X(e, t)),
                (v |= 1),
                e.getToken() === 67174411
                  ? ((m |= 16),
                    (N = Ce(
                      e,
                      t,
                      n,
                      v,
                      a,
                      e.tokenIndex,
                      e.tokenLine,
                      e.tokenColumn,
                    )))
                  : de(
                      e.tokenIndex,
                      e.tokenLine,
                      e.tokenColumn,
                      e.index,
                      e.line,
                      e.column,
                      R === 209005
                        ? 46
                        : R === 12400 || e.getToken() === 12401
                          ? 45
                          : 47,
                      Y[255 & R],
                    );
            } else
              134217728 & ~e.getToken()
                ? e.getToken() === 69271571
                  ? ((m |= 16),
                    (v |= 3),
                    (B = ze(e, t, n, a)),
                    (N = Ce(
                      e,
                      t,
                      n,
                      v,
                      a,
                      e.tokenIndex,
                      e.tokenLine,
                      e.tokenColumn,
                    )))
                  : T(e, 126)
                : ((m |= 16),
                  (B = ne(e, t)),
                  (v |= 1),
                  (N = Ce(e, t, n, v, a, L, k, I)));
          else T(e, 30, Y[255 & O]);
        else if (((B = ne(e, t)), e.getToken() === 21)) {
          U(e, 8192 | t, 21);
          let { tokenIndex: R, tokenLine: w, tokenColumn: H } = e;
          if ((_ === "__proto__" && b++, 143360 & e.getToken())) {
            N = he(e, t, n, f, 0, 1, a, 1, R, w, H);
            let { tokenValue: G } = e,
              K = e.getToken();
            (N = W(e, t, n, N, a, 0, R, w, H)),
              e.getToken() === 18 || e.getToken() === 1074790415
                ? K === 1077936155 || K === 1074790415 || K === 18
                  ? 2 & e.assignable
                    ? (m |= 16)
                    : r && Se(e, t, r, G, f, d)
                  : (m |= 1 & e.assignable ? 32 : 16)
                : e.getToken() === 1077936155
                  ? (2 & e.assignable && (m |= 16),
                    (N = $(e, t, n, a, i, R, w, H, N)))
                  : ((m |= 16), (N = $(e, t, n, a, i, R, w, H, N)));
          } else
            2097152 & ~e.getToken()
              ? ((N = pe(e, t, n, 1, 0, 1, R, w, H)),
                (m |= 1 & e.assignable ? 32 : 16),
                e.getToken() === 18 || e.getToken() === 1074790415
                  ? 2 & e.assignable && (m |= 16)
                  : ((N = W(e, t, n, N, a, 0, R, w, H)),
                    (m = 1 & e.assignable ? 0 : 16),
                    e.getToken() !== 18 &&
                      e.getToken() !== 1074790415 &&
                      (e.getToken() !== 1077936155 && (m |= 16),
                      (N = $(e, t, n, a, i, R, w, H, N)))))
              : ((N =
                  e.getToken() === 69271571
                    ? be(e, t, r, n, 0, a, i, f, d, R, w, H)
                    : ge(e, t, r, n, 0, a, i, f, d, R, w, H)),
                (m = e.destructible),
                (e.assignable = 16 & m ? 2 : 1),
                e.getToken() === 18 || e.getToken() === 1074790415
                  ? 2 & e.assignable && (m |= 16)
                  : 8 & ~e.destructible &&
                    ((N = W(e, t, n, N, a, 0, R, w, H)),
                    (m = 2 & e.assignable ? 16 : 0),
                    4194304 & ~e.getToken()
                      ? (8388608 & ~e.getToken() ||
                          (N = Pe(e, t, n, 1, R, w, H, 4, O, N)),
                        F(e, 8192 | t, 22) && (N = He(e, t, n, N, R, w, H)),
                        (m |= 2 & e.assignable ? 16 : 32))
                      : (N = Jt(e, t, n, a, i, R, w, H, N))));
        } else
          e.getToken() === 67174411
            ? ((v |= 1),
              (N = Ce(e, t, n, v, a, e.tokenIndex, e.tokenLine, e.tokenColumn)),
              (m = 16 | e.assignable))
            : T(e, 134);
        (m |= 128 & e.destructible ? 128 : 0),
          (e.destructible = m),
          l.push(
            S(e, t, L, k, I, {
              type: "Property",
              key: B,
              value: N,
              kind: 768 & v ? (512 & v ? "set" : "get") : "init",
              computed: (2 & v) > 0,
              method: (1 & v) > 0,
              shorthand: (4 & v) > 0,
            }),
          );
      }
      if (((m |= e.destructible), e.getToken() !== 18)) break;
      M(e, t);
    }
    U(e, t, 1074790415), b > 1 && (m |= 64);
    let A = S(e, t, h, c, o, {
      type: i ? "ObjectPattern" : "ObjectExpression",
      properties: l,
    });
    return !u && 4194304 & e.getToken()
      ? ka(e, t, n, m, a, i, h, c, o, A)
      : ((e.destructible = m), A);
  }
  function ze(e, t, r, n) {
    M(e, 8192 | t);
    let u = Q(
      e,
      33554432 ^ (33554432 | t),
      r,
      1,
      n,
      e.tokenIndex,
      e.tokenLine,
      e.tokenColumn,
    );
    return U(e, t, 20), u;
  }
  function Vr(e, t, r, n, u, a) {
    let { tokenValue: i } = e,
      f = 0,
      d = 0;
    537079808 & ~e.getToken() ? 36864 & ~e.getToken() || (d = 1) : (f = 1);
    let h = X(e, t);
    if (((e.assignable = 1), e.getToken() === 10)) {
      let c;
      return (
        16 & t && (c = dr(e, t, i)),
        f && (e.flags |= 128),
        d && (e.flags |= 256),
        It(e, t, c, r, [h], 0, n, u, a)
      );
    }
    return h;
  }
  function ir(e, t, r, n, u, a, i, f, d, h, c) {
    return (
      i || T(e, 57),
      a && T(e, 51),
      (e.flags &= -129),
      It(e, t, 16 & t ? dr(e, t, n) : void 0, r, [u], f, d, h, c)
    );
  }
  function or(e, t, r, n, u, a, i, f, d, h) {
    a || T(e, 57);
    for (let c = 0; c < u.length; ++c) Ie(e, u[c]);
    return It(e, t, r, n, u, i, f, d, h);
  }
  function It(e, t, r, n, u, a, i, f, d) {
    1 & e.flags && T(e, 48), U(e, 8192 | t, 10);
    let h = 271319040;
    t = ((t | h) ^ h) | (a ? 524288 : 0);
    let c = e.getToken() !== 2162700,
      o;
    if ((r && r.scopeError && lr(r.scopeError), c))
      (e.flags = 4928 ^ (4928 | e.flags)),
        (o = Q(e, t, n, 1, 0, e.tokenIndex, e.tokenLine, e.tokenColumn));
    else {
      r && (r = J(r, 128));
      let l = 33557504;
      switch (
        ((o = fr(e, ((t | l) ^ l) | 1048576, r, n, 16, void 0, void 0)),
        e.getToken())
      ) {
        case 69271571:
          1 & e.flags || T(e, 116);
          break;
        case 67108877:
        case 67174409:
        case 22:
          T(e, 117);
        case 67174411:
          1 & e.flags || T(e, 116), (e.flags |= 1024);
      }
      8388608 & ~e.getToken() || 1 & e.flags || T(e, 30, Y[255 & e.getToken()]),
        33619968 & ~e.getToken() || T(e, 125);
    }
    return (
      (e.assignable = 2),
      S(e, t, i, f, d, {
        type: "ArrowFunctionExpression",
        params: u,
        body: o,
        async: a === 1,
        expression: c,
      })
    );
  }
  function Ca(e, t, r, n, u, a) {
    U(e, t, 67174411), (e.flags = 128 ^ (128 | e.flags));
    let i = [];
    if (F(e, t, 16)) return i;
    t = 33554432 ^ (33554432 | t);
    let f = 0;
    for (; e.getToken() !== 18; ) {
      let d,
        { tokenIndex: h, tokenLine: c, tokenColumn: o } = e,
        l = e.getToken();
      if (
        (143360 & l
          ? (256 & t ||
              (36864 & ~l || (e.flags |= 256),
              537079808 & ~l || (e.flags |= 512)),
            (d = sn(e, t, r, 1 | a, 0, h, c, o)))
          : (l === 2162700
              ? (d = ge(e, t, r, n, 1, u, 1, a, 0, h, c, o))
              : l === 69271571
                ? (d = be(e, t, r, n, 1, u, 1, a, 0, h, c, o))
                : l === 14
                  ? (d = et(e, t, r, n, 16, a, 0, 0, u, 1, h, c, o))
                  : T(e, 30, Y[255 & l]),
            (f = 1),
            48 & e.destructible && T(e, 50)),
        e.getToken() === 1077936155 &&
          (M(e, 8192 | t),
          (f = 1),
          (d = S(e, t, h, c, o, {
            type: "AssignmentPattern",
            left: d,
            right: Q(e, t, n, 1, u, e.tokenIndex, e.tokenLine, e.tokenColumn),
          }))),
        i.push(d),
        !F(e, t, 18) || e.getToken() === 16)
      )
        break;
    }
    return (
      f && (e.flags |= 128),
      r && (f || 256 & t) && r.scopeError && lr(r.scopeError),
      U(e, t, 16),
      i
    );
  }
  function rr(e, t, r, n, u, a, i, f) {
    let d = e.getToken();
    if (67108864 & d) {
      if (d === 67108877)
        return (
          M(e, 67108864 | t),
          (e.assignable = 1),
          rr(
            e,
            t,
            r,
            S(e, t, a, i, f, {
              type: "MemberExpression",
              object: n,
              computed: !1,
              property: jr(e, t, r),
            }),
            0,
            a,
            i,
            f,
          )
        );
      if (d === 69271571) {
        M(e, 8192 | t);
        let { tokenIndex: h, tokenLine: c, tokenColumn: o } = e,
          l = se(e, t, r, u, 1, h, c, o);
        return (
          U(e, t, 20),
          (e.assignable = 1),
          rr(
            e,
            t,
            r,
            S(e, t, a, i, f, {
              type: "MemberExpression",
              object: n,
              computed: !0,
              property: l,
            }),
            0,
            a,
            i,
            f,
          )
        );
      }
      if (d === 67174408 || d === 67174409)
        return (
          (e.assignable = 2),
          rr(
            e,
            t,
            r,
            S(e, t, a, i, f, {
              type: "TaggedTemplateExpression",
              tag: n,
              quasi:
                e.getToken() === 67174408
                  ? un(e, 16384 | t, r)
                  : nn(e, 16384 | t, e.tokenIndex, e.tokenLine, e.tokenColumn),
            }),
            0,
            a,
            i,
            f,
          )
        );
    }
    return n;
  }
  function Ia(e, t, r, n, u, a, i) {
    return (
      e.getToken() === 209006 && T(e, 31),
      262400 & t && e.getToken() === 241771 && T(e, 32),
      sr(e, t, e.getToken()),
      36864 & ~e.getToken() || (e.flags |= 256),
      ir(
        e,
        (-268435457 & t) | 524288,
        r,
        e.tokenValue,
        X(e, t),
        0,
        n,
        1,
        u,
        a,
        i,
      )
    );
  }
  function an(e, t, r, n, u, a, i, f, d, h, c) {
    M(e, 8192 | t);
    let o = 16 & t ? J({ parent: void 0, type: 2 }, 1024) : void 0;
    if (F(e, (t = 33554432 ^ (33554432 | t)), 16))
      return e.getToken() === 10
        ? (1 & f && T(e, 48), or(e, t, o, r, [], u, 1, d, h, c))
        : S(e, t, d, h, c, {
            type: "CallExpression",
            callee: n,
            arguments: [],
          });
    let l = 0,
      m = null,
      b = 0;
    e.destructible = 384 ^ (384 | e.destructible);
    let A = [];
    for (; e.getToken() !== 16; ) {
      let { tokenIndex: _, tokenLine: k, tokenColumn: I } = e,
        L = e.getToken();
      if (143360 & L)
        o && ve(e, t, o, e.tokenValue, a, 0),
          537079808 & ~L ? 36864 & ~L || (e.flags |= 256) : (e.flags |= 512),
          (m = he(e, t, r, a, 0, 1, 1, 1, _, k, I)),
          e.getToken() === 16 || e.getToken() === 18
            ? 2 & e.assignable && ((l |= 16), (b = 1))
            : (e.getToken() === 1077936155 ? (b = 1) : (l |= 16),
              (m = W(e, t, r, m, 1, 0, _, k, I)),
              e.getToken() !== 16 &&
                e.getToken() !== 18 &&
                (m = $(e, t, r, 1, 0, _, k, I, m)));
      else if (2097152 & L)
        (m =
          L === 2162700
            ? ge(e, t, o, r, 0, 1, 0, a, i, _, k, I)
            : be(e, t, o, r, 0, 1, 0, a, i, _, k, I)),
          (l |= e.destructible),
          (b = 1),
          e.getToken() !== 16 &&
            e.getToken() !== 18 &&
            (8 & l && T(e, 122),
            (m = W(e, t, r, m, 0, 0, _, k, I)),
            (l |= 16),
            8388608 & ~e.getToken() || (m = Pe(e, t, r, 1, d, h, c, 4, L, m)),
            F(e, 8192 | t, 22) && (m = He(e, t, r, m, d, h, c)));
      else {
        if (L !== 14) {
          for (
            m = Q(e, t, r, 1, 0, _, k, I), l = e.assignable, A.push(m);
            F(e, 8192 | t, 18);

          )
            A.push(Q(e, t, r, 1, 0, _, k, I));
          return (
            (l |= e.assignable),
            U(e, t, 16),
            (e.destructible = 16 | l),
            (e.assignable = 2),
            S(e, t, d, h, c, {
              type: "CallExpression",
              callee: n,
              arguments: A,
            })
          );
        }
        (m = et(e, t, o, r, 16, a, i, 1, 1, 0, _, k, I)),
          (l |= (e.getToken() === 16 ? 0 : 16) | e.destructible),
          (b = 1);
      }
      if ((A.push(m), !F(e, 8192 | t, 18))) break;
    }
    return (
      U(e, t, 16),
      (l |= 256 & e.destructible ? 256 : 128 & e.destructible ? 128 : 0),
      e.getToken() === 10
        ? (48 & l && T(e, 27),
          (1 & e.flags || 1 & f) && T(e, 48),
          128 & l && T(e, 31),
          262400 & t && 256 & l && T(e, 32),
          b && (e.flags |= 128),
          or(e, 524288 | t, o, r, A, u, 1, d, h, c))
        : (64 & l && T(e, 63),
          8 & l && T(e, 62),
          (e.assignable = 2),
          S(e, t, d, h, c, { type: "CallExpression", callee: n, arguments: A }))
    );
  }
  function zr(e, t, r, n, u, a, i, f) {
    let d = hr(e, t, n);
    d.length && ((a = e.tokenIndex), (i = e.tokenLine), (f = e.tokenColumn)),
      e.leadingDecorators.length &&
        (e.leadingDecorators.push(...d),
        (d = e.leadingDecorators),
        (e.leadingDecorators = [])),
      M(e, (t = 4194304 ^ (4194560 | t)));
    let h = null,
      c = null,
      { tokenValue: o } = e;
    4096 & e.getToken() && e.getToken() !== 20565
      ? (da(e, t, e.getToken()) && T(e, 118),
        537079808 & ~e.getToken() || T(e, 119),
        r && (ve(e, t, r, o, 32, 0), u && 2 & u && we(e, o)),
        (h = X(e, t)))
      : 1 & u || T(e, 39, "Class");
    let l = t;
    return (
      F(e, 8192 | t, 20565)
        ? ((c = pe(e, t, n, 0, 0, 0, e.tokenIndex, e.tokenLine, e.tokenColumn)),
          (l |= 131072))
        : (l = 131072 ^ (131072 | l)),
      S(e, t, a, i, f, {
        type: "ClassDeclaration",
        id: h,
        superClass: c,
        body: Na(e, l, t, r, n, 2, 8, 0),
        ...(1 & t ? { decorators: d } : null),
      })
    );
  }
  function hr(e, t, r) {
    let n = [];
    if (1 & t)
      for (; e.getToken() === 132; )
        n.push(N0(e, t, r, e.tokenIndex, e.tokenLine, e.tokenColumn));
    return n;
  }
  function N0(e, t, r, n, u, a) {
    M(e, 8192 | t);
    let i = he(e, t, r, 2, 0, 1, 0, 1, n, u, a);
    return (
      (i = W(e, t, r, i, 0, 0, n, u, a)),
      S(e, t, n, u, a, { type: "Decorator", expression: i })
    );
  }
  function Na(e, t, r, n, u, a, i, f) {
    let { tokenIndex: d, tokenLine: h, tokenColumn: c } = e,
      o = 16 & t ? { parent: u, refs: Object.create(null) } : void 0;
    U(e, 8192 | t, 2162700);
    let l = 301989888;
    t = (t | l) ^ l;
    let m = 32 & e.flags;
    e.flags = 32 ^ (32 | e.flags);
    let b = [],
      A;
    for (; e.getToken() !== 1074790415; ) {
      let _ = 0;
      (A = hr(e, t, o)),
        (_ = A.length),
        _ > 0 && e.tokenValue === "constructor" && T(e, 109),
        e.getToken() === 1074790415 && T(e, 108),
        F(e, t, 1074790417)
          ? _ > 0 && T(e, 120)
          : b.push(
              La(
                e,
                t,
                n,
                o,
                r,
                a,
                A,
                0,
                f,
                e.tokenIndex,
                e.tokenLine,
                e.tokenColumn,
              ),
            );
    }
    return (
      U(e, 8 & i ? 8192 | t : t, 1074790415),
      o &&
        (function (_) {
          for (let k in _.refs)
            if (!ha(k, _)) {
              let { index: I, line: L, column: O } = _.refs[k][0];
              throw new Fe(I, L, O, I + k.length, L, O + k.length, 4, k);
            }
        })(o),
      (e.flags = (-33 & e.flags) | m),
      S(e, t, d, h, c, { type: "ClassBody", body: b })
    );
  }
  function La(e, t, r, n, u, a, i, f, d, h, c, o) {
    let l = f ? 32 : 0,
      m = null,
      { tokenIndex: b, tokenLine: A, tokenColumn: _ } = e,
      k = e.getToken();
    if (176128 & k || k === -2147483528)
      switch (((m = X(e, t)), k)) {
        case 36970:
          if (
            !f &&
            e.getToken() !== 67174411 &&
            1048576 & ~e.getToken() &&
            e.getToken() !== 1077936155
          )
            return La(e, t, r, n, u, a, i, 1, d, h, c, o);
          break;
        case 209005:
          if (e.getToken() !== 67174411 && !(1 & e.flags)) {
            if (!(1073741824 & ~e.getToken()))
              return bt(e, t, n, m, l, i, b, A, _);
            l |= 16 | (tn(e, t, 8391476) ? 8 : 0);
          }
          break;
        case 12400:
          if (e.getToken() !== 67174411) {
            if (!(1073741824 & ~e.getToken()))
              return bt(e, t, n, m, l, i, b, A, _);
            l |= 256;
          }
          break;
        case 12401:
          if (e.getToken() !== 67174411) {
            if (!(1073741824 & ~e.getToken()))
              return bt(e, t, n, m, l, i, b, A, _);
            l |= 512;
          }
          break;
        case 12402:
          if (e.getToken() !== 67174411 && !(1 & e.flags)) {
            if (!(1073741824 & ~e.getToken()))
              return bt(e, t, n, m, l, i, b, A, _);
            1 & t && (l |= 1024);
          }
      }
    else if (k === 69271571) (l |= 2), (m = ze(e, u, n, d));
    else if (134217728 & ~k)
      if (k === 8391476) (l |= 8), M(e, t);
      else if (e.getToken() === 130)
        (l |= 8192), (m = cr(e, 4096 | t, n, 768, b, A, _));
      else if (1073741824 & ~e.getToken()) {
        if (f && k === 2162700)
          return (function (I, L, O, N, v, B, R) {
            O && (O = J(O, 2));
            let w = 1475584;
            L = 285802496 | ((L | w) ^ w);
            let { body: H } = gt(I, L, O, N, {}, v, B, R);
            return S(I, L, v, B, R, { type: "StaticBlock", body: H });
          })(e, 4096 | t, r, n, b, A, _);
        k === -2147483527
          ? ((m = X(e, t)),
            e.getToken() !== 67174411 && T(e, 30, Y[255 & e.getToken()]))
          : T(e, 30, Y[255 & e.getToken()]);
      } else l |= 128;
    else m = ne(e, t);
    return (
      1816 & l &&
        (143360 & e.getToken() ||
        e.getToken() === -2147483528 ||
        e.getToken() === -2147483527
          ? (m = X(e, t))
          : 134217728 & ~e.getToken()
            ? e.getToken() === 69271571
              ? ((l |= 2), (m = ze(e, t, n, 0)))
              : e.getToken() === 130
                ? ((l |= 8192), (m = cr(e, t, n, l, b, A, _)))
                : T(e, 135)
            : (m = ne(e, t))),
      2 & l ||
        (e.tokenValue === "constructor"
          ? (1073741824 & ~e.getToken()
              ? 32 & l ||
                e.getToken() !== 67174411 ||
                (920 & l
                  ? T(e, 53, "accessor")
                  : 131072 & t || (32 & e.flags ? T(e, 54) : (e.flags |= 32)))
              : T(e, 129),
            (l |= 64))
          : !(8192 & l) && 32 & l && e.tokenValue === "prototype" && T(e, 52)),
      1024 & l || (e.getToken() !== 67174411 && !(768 & l))
        ? bt(e, t, n, m, l, i, b, A, _)
        : S(e, t, h, c, o, {
            type: "MethodDefinition",
            kind:
              !(32 & l) && 64 & l
                ? "constructor"
                : 256 & l
                  ? "get"
                  : 512 & l
                    ? "set"
                    : "method",
            static: (32 & l) > 0,
            computed: (2 & l) > 0,
            key: m,
            value: Ce(
              e,
              4096 | t,
              n,
              l,
              d,
              e.tokenIndex,
              e.tokenLine,
              e.tokenColumn,
            ),
            ...(1 & t ? { decorators: i } : null),
          })
    );
  }
  function cr(e, t, r, n, u, a, i) {
    M(e, t);
    let { tokenValue: f } = e;
    return (
      f === "constructor" && T(e, 128),
      16 & t &&
        (r || T(e, 4, f),
        n
          ? (function (d, h, c, o) {
              let l = 800 & o;
              768 & l || (l |= 768);
              let m = h["#" + c];
              m !== void 0 &&
                ((32 & m) != (32 & l) || m & l & 768) &&
                T(d, 146, c),
                (h["#" + c] = m ? m | l : l);
            })(e, r, f, n)
          : (function (d, h, c) {
              (h.refs[c] ??= []),
                h.refs[c].push({
                  index: d.tokenIndex,
                  line: d.tokenLine,
                  column: d.tokenColumn,
                });
            })(e, r, f)),
      M(e, t),
      S(e, t, u, a, i, { type: "PrivateIdentifier", name: f })
    );
  }
  function bt(e, t, r, n, u, a, i, f, d) {
    let h = null;
    if ((8 & u && T(e, 0), e.getToken() === 1077936155)) {
      M(e, 8192 | t);
      let { tokenIndex: c, tokenLine: o, tokenColumn: l } = e;
      e.getToken() === 537079927 && T(e, 119);
      let m = 2883584 | (64 & u ? 0 : 4325376);
      (h = he(
        e,
        4096 |
          (t =
            16842752 |
            (((t | m) ^ m) |
              (8 & u ? 262144 : 0) |
              (16 & u ? 524288 : 0) |
              (64 & u ? 4194304 : 0))),
        r,
        2,
        0,
        1,
        0,
        1,
        c,
        o,
        l,
      )),
        (!(1073741824 & ~e.getToken()) && 4194304 & ~e.getToken()) ||
          ((h = W(e, 4096 | t, r, h, 0, 0, c, o, l)),
          (h = $(e, 4096 | t, r, 0, 0, c, o, l, h)));
    }
    return (
      ce(e, t),
      S(e, t, i, f, d, {
        type: 1024 & u ? "AccessorProperty" : "PropertyDefinition",
        key: n,
        value: h,
        static: (32 & u) > 0,
        computed: (2 & u) > 0,
        ...(1 & t ? { decorators: a } : null),
      })
    );
  }
  function xa(e, t, r, n, u, a, i, f, d) {
    if (143360 & e.getToken() || (!(256 & t) && e.getToken() === -2147483527))
      return sn(e, t, r, u, a, i, f, d);
    2097152 & ~e.getToken() && T(e, 30, Y[255 & e.getToken()]);
    let h =
      e.getToken() === 69271571
        ? be(e, t, r, n, 1, 0, 1, u, a, i, f, d)
        : ge(e, t, r, n, 1, 0, 1, u, a, i, f, d);
    return 16 & e.destructible && T(e, 50), 32 & e.destructible && T(e, 50), h;
  }
  function sn(e, t, r, n, u, a, i, f) {
    let { tokenValue: d } = e,
      h = e.getToken();
    return (
      256 & t &&
        (537079808 & ~h
          ? (36864 & ~h && h !== -2147483527) || T(e, 118)
          : T(e, 119)),
      20480 & ~h || T(e, 102),
      h === 241771 && (262144 & t && T(e, 32), 512 & t && T(e, 111)),
      (255 & h) == 73 && 24 & n && T(e, 100),
      h === 209006 && (524288 & t && T(e, 176), 512 & t && T(e, 110)),
      M(e, t),
      r && Se(e, t, r, d, n, u),
      S(e, t, a, i, f, { type: "Identifier", name: d })
    );
  }
  function mr(e, t, r, n, u, a, i) {
    if ((n || U(e, t, 8456256), e.getToken() === 8390721)) {
      let c = (function (m, b, A, _, k) {
          return At(m, b), S(m, b, A, _, k, { type: "JSXOpeningFragment" });
        })(e, t, u, a, i),
        [o, l] = (function (m, b, A, _) {
          let k = [];
          for (;;) {
            let I = x0(m, b, A, _, m.tokenIndex, m.tokenLine, m.tokenColumn);
            if (I.type === "JSXClosingFragment") return [k, I];
            k.push(I);
          }
        })(e, t, r, n);
      return S(e, t, u, a, i, {
        type: "JSXFragment",
        openingFragment: c,
        children: o,
        closingFragment: l,
      });
    }
    e.getToken() === 8457014 && T(e, 30, Y[255 & e.getToken()]);
    let f = null,
      d = [],
      h = (function (c, o, l, m, b, A, _) {
        143360 & ~c.getToken() && 4096 & ~c.getToken() && T(c, 0);
        let k = Oa(c, o, c.tokenIndex, c.tokenLine, c.tokenColumn),
          I = (function (O, N, v) {
            let B = [];
            for (
              ;
              O.getToken() !== 8457014 &&
              O.getToken() !== 8390721 &&
              O.getToken() !== 1048576;

            )
              B.push(O0(O, N, v, O.tokenIndex, O.tokenLine, O.tokenColumn));
            return B;
          })(c, o, l),
          L = c.getToken() === 8457014;
        return (
          L && U(c, o, 8457014),
          c.getToken() !== 8390721 && T(c, 25, Y[65]),
          m || !L ? At(c, o) : M(c, o),
          S(c, o, b, A, _, {
            type: "JSXOpeningElement",
            name: k,
            attributes: I,
            selfClosing: L,
          })
        );
      })(e, t, r, n, u, a, i);
    if (!h.selfClosing) {
      [d, f] = (function (o, l, m, b) {
        let A = [];
        for (;;) {
          let _ = L0(o, l, m, b, o.tokenIndex, o.tokenLine, o.tokenColumn);
          if (_.type === "JSXClosingElement") return [A, _];
          A.push(_);
        }
      })(e, t, r, n);
      let c = ar(f.name);
      ar(h.name) !== c && T(e, 155, c);
    }
    return S(e, t, u, a, i, {
      type: "JSXElement",
      children: d,
      openingElement: h,
      closingElement: f,
    });
  }
  function L0(e, t, r, n, u, a, i) {
    return e.getToken() === 137
      ? Sa(e, t, u, a, i)
      : e.getToken() === 2162700
        ? on(e, t, r, 1, 0, u, a, i)
        : e.getToken() === 8456256
          ? (M(e, t),
            e.getToken() === 8457014
              ? (function (f, d, h, c, o, l) {
                  U(f, d, 8457014);
                  let m = Oa(f, d, f.tokenIndex, f.tokenLine, f.tokenColumn);
                  return (
                    f.getToken() !== 8390721 && T(f, 25, Y[65]),
                    h ? At(f, d) : M(f, d),
                    S(f, d, c, o, l, { type: "JSXClosingElement", name: m })
                  );
                })(e, t, n, u, a, i)
              : mr(e, t, r, 1, u, a, i))
          : void T(e, 0);
  }
  function x0(e, t, r, n, u, a, i) {
    return e.getToken() === 137
      ? Sa(e, t, u, a, i)
      : e.getToken() === 2162700
        ? on(e, t, r, 1, 0, u, a, i)
        : e.getToken() === 8456256
          ? (M(e, t),
            e.getToken() === 8457014
              ? (function (f, d, h, c, o, l) {
                  return (
                    U(f, d, 8457014),
                    f.getToken() !== 8390721 && T(f, 25, Y[65]),
                    h ? At(f, d) : M(f, d),
                    S(f, d, c, o, l, { type: "JSXClosingFragment" })
                  );
                })(e, t, n, u, a, i)
              : mr(e, t, r, 1, u, a, i))
          : void T(e, 0);
  }
  function Sa(e, t, r, n, u) {
    M(e, t);
    let a = { type: "JSXText", value: e.tokenValue };
    return 128 & t && (a.raw = e.tokenRaw), S(e, t, r, n, u, a);
  }
  function Oa(e, t, r, n, u) {
    Gr(e);
    let a = Er(e, t, r, n, u);
    if (e.getToken() === 21) return ya(e, t, a, r, n, u);
    for (; F(e, t, 67108877); ) Gr(e), (a = S0(e, t, a, r, n, u));
    return a;
  }
  function S0(e, t, r, n, u, a) {
    return S(e, t, n, u, a, {
      type: "JSXMemberExpression",
      object: r,
      property: Er(e, t, e.tokenIndex, e.tokenLine, e.tokenColumn),
    });
  }
  function O0(e, t, r, n, u, a) {
    if (e.getToken() === 2162700)
      return (function (d, h, c, o, l, m) {
        M(d, h), U(d, h, 14);
        let b = Q(d, h, c, 1, 0, d.tokenIndex, d.tokenLine, d.tokenColumn);
        return (
          U(d, h, 1074790415),
          S(d, h, o, l, m, { type: "JSXSpreadAttribute", argument: b })
        );
      })(e, t, r, n, u, a);
    Gr(e);
    let i = null,
      f = Er(e, t, n, u, a);
    if (
      (e.getToken() === 21 && (f = ya(e, t, f, n, u, a)),
      e.getToken() === 1077936155)
    ) {
      let d = g0(e, t),
        { tokenIndex: h, tokenLine: c, tokenColumn: o } = e;
      switch (d) {
        case 134283267:
          i = ne(e, t);
          break;
        case 8456256:
          i = mr(e, t, r, 0, h, c, o);
          break;
        case 2162700:
          i = on(e, t, r, 0, 1, h, c, o);
          break;
        default:
          T(e, 154);
      }
    }
    return S(e, t, n, u, a, { type: "JSXAttribute", value: i, name: f });
  }
  function ya(e, t, r, n, u, a) {
    return (
      U(e, t, 21),
      S(e, t, n, u, a, {
        type: "JSXNamespacedName",
        namespace: r,
        name: Er(e, t, e.tokenIndex, e.tokenLine, e.tokenColumn),
      })
    );
  }
  function on(e, t, r, n, u, a, i, f) {
    M(e, 8192 | t);
    let { tokenIndex: d, tokenLine: h, tokenColumn: c } = e;
    if (e.getToken() === 14)
      return (function (l, m, b, A, _, k) {
        U(l, m, 14);
        let I = Q(l, m, b, 1, 0, l.tokenIndex, l.tokenLine, l.tokenColumn);
        return (
          U(l, m, 1074790415),
          S(l, m, A, _, k, { type: "JSXSpreadChild", expression: I })
        );
      })(e, t, r, a, i, f);
    let o = null;
    return (
      e.getToken() === 1074790415
        ? (u && T(e, 157),
          (o = (function (l, m, b, A, _) {
            return (
              (l.startIndex = l.tokenIndex),
              (l.startLine = l.tokenLine),
              (l.startColumn = l.tokenColumn),
              S(l, m, b, A, _, { type: "JSXEmptyExpression" })
            );
          })(e, t, e.startIndex, e.startLine, e.startColumn)))
        : (o = Q(e, t, r, 1, 0, d, h, c)),
      e.getToken() !== 1074790415 && T(e, 25, Y[15]),
      n ? At(e, t) : M(e, t),
      S(e, t, a, i, f, { type: "JSXExpressionContainer", expression: o })
    );
  }
  function Er(e, t, r, n, u) {
    let { tokenValue: a } = e;
    return M(e, t), S(e, t, r, n, u, { type: "JSXIdentifier", name: a });
  }
  var s1 = Object.freeze({ __proto__: null });
  function Da(e, t) {
    return A0(e, t, 0);
  }
  var { stringify: y0 } = JSON;
  if (!String.prototype.repeat)
    throw new Error(
      "String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation",
    );
  if (!String.prototype.endsWith)
    throw new Error(
      "String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation",
    );
  var Tr = {
      "||": 2,
      "??": 3,
      "&&": 4,
      "|": 5,
      "^": 6,
      "&": 7,
      "==": 8,
      "!=": 8,
      "===": 8,
      "!==": 8,
      "<": 9,
      ">": 9,
      "<=": 9,
      ">=": 9,
      in: 9,
      instanceof: 9,
      "<<": 10,
      ">>": 10,
      ">>>": 10,
      "+": 11,
      "-": 11,
      "*": 12,
      "%": 12,
      "/": 12,
      "**": 13,
    },
    Ne = 17,
    D0 = {
      ArrayExpression: 20,
      TaggedTemplateExpression: 20,
      ThisExpression: 20,
      Identifier: 20,
      PrivateIdentifier: 20,
      Literal: 18,
      TemplateLiteral: 20,
      Super: 20,
      SequenceExpression: 20,
      MemberExpression: 19,
      ChainExpression: 19,
      CallExpression: 19,
      NewExpression: 19,
      ArrowFunctionExpression: Ne,
      ClassExpression: Ne,
      FunctionExpression: Ne,
      ObjectExpression: Ne,
      UpdateExpression: 16,
      UnaryExpression: 15,
      AwaitExpression: 15,
      BinaryExpression: 14,
      LogicalExpression: 13,
      ConditionalExpression: 4,
      AssignmentExpression: 3,
      YieldExpression: 2,
      RestElement: 1,
    };
  function tt(e, t) {
    let { generator: r } = e;
    if ((e.write("("), t != null && t.length > 0)) {
      r[t[0].type](t[0], e);
      let { length: n } = t;
      for (let u = 1; u < n; u++) {
        let a = t[u];
        e.write(", "), r[a.type](a, e);
      }
    }
    e.write(")");
  }
  function Ua(e, t, r, n) {
    let u = e.expressionsPrecedence[t.type];
    if (u === Ne) return !0;
    let a = e.expressionsPrecedence[r.type];
    return u !== a
      ? (!n && u === 15 && a === 14 && r.operator === "**") || u < a
      : u !== 13 && u !== 14
        ? !1
        : t.operator === "**" && r.operator === "**"
          ? !n
          : u === 13 && a === 13 && (t.operator === "??" || r.operator === "??")
            ? !0
            : n
              ? Tr[t.operator] <= Tr[r.operator]
              : Tr[t.operator] < Tr[r.operator];
  }
  function pr(e, t, r, n) {
    let { generator: u } = e;
    Ua(e, t, r, n)
      ? (e.write("("), u[t.type](t, e), e.write(")"))
      : u[t.type](t, e);
  }
  function R0(e, t, r, n) {
    let u = t.split(`
`),
      a = u.length - 1;
    if ((e.write(u[0].trim()), a > 0)) {
      e.write(n);
      for (let i = 1; i < a; i++) e.write(r + u[i].trim() + n);
      e.write(r + u[a].trim());
    }
  }
  function le(e, t, r, n) {
    let { length: u } = t;
    for (let a = 0; a < u; a++) {
      let i = t[a];
      e.write(r),
        i.type[0] === "L"
          ? e.write(
              "// " +
                i.value.trim() +
                `
`,
              i,
            )
          : (e.write("/*"), R0(e, i.value, r, n), e.write("*/" + n));
    }
  }
  function w0(e) {
    let t = e;
    for (; t != null; ) {
      let { type: r } = t;
      if (r[0] === "C" && r[1] === "a") return !0;
      if (r[0] === "M" && r[1] === "e" && r[2] === "m") t = t.object;
      else return !1;
    }
  }
  function cn(e, t) {
    let { generator: r } = e,
      { declarations: n } = t;
    e.write(t.kind + " ");
    let { length: u } = n;
    if (u > 0) {
      r.VariableDeclarator(n[0], e);
      for (let a = 1; a < u; a++) e.write(", "), r.VariableDeclarator(n[a], e);
    }
  }
  var Ra,
    wa,
    Pa,
    Ma,
    va,
    Ba,
    P0 = {
      Program(e, t) {
        let r = t.indent.repeat(t.indentLevel),
          { lineEnd: n, writeComments: u } = t;
        u && e.comments != null && le(t, e.comments, r, n);
        let a = e.body,
          { length: i } = a;
        for (let f = 0; f < i; f++) {
          let d = a[f];
          u && d.comments != null && le(t, d.comments, r, n),
            t.write(r),
            this[d.type](d, t),
            t.write(n);
        }
        u && e.trailingComments != null && le(t, e.trailingComments, r, n);
      },
      BlockStatement: (Ba = function (e, t) {
        let r = t.indent.repeat(t.indentLevel++),
          { lineEnd: n, writeComments: u } = t,
          a = r + t.indent;
        t.write("{");
        let i = e.body;
        if (i != null && i.length > 0) {
          t.write(n), u && e.comments != null && le(t, e.comments, a, n);
          let { length: f } = i;
          for (let d = 0; d < f; d++) {
            let h = i[d];
            u && h.comments != null && le(t, h.comments, a, n),
              t.write(a),
              this[h.type](h, t),
              t.write(n);
          }
          t.write(r);
        } else
          u &&
            e.comments != null &&
            (t.write(n), le(t, e.comments, a, n), t.write(r));
        u && e.trailingComments != null && le(t, e.trailingComments, a, n),
          t.write("}"),
          t.indentLevel--;
      }),
      ClassBody: Ba,
      StaticBlock(e, t) {
        t.write("static "), this.BlockStatement(e, t);
      },
      EmptyStatement(e, t) {
        t.write(";");
      },
      ExpressionStatement(e, t) {
        let r = t.expressionsPrecedence[e.expression.type];
        r === Ne || (r === 3 && e.expression.left.type[0] === "O")
          ? (t.write("("),
            this[e.expression.type](e.expression, t),
            t.write(")"))
          : this[e.expression.type](e.expression, t),
          t.write(";");
      },
      IfStatement(e, t) {
        t.write("if ("),
          this[e.test.type](e.test, t),
          t.write(") "),
          this[e.consequent.type](e.consequent, t),
          e.alternate != null &&
            (t.write(" else "), this[e.alternate.type](e.alternate, t));
      },
      LabeledStatement(e, t) {
        this[e.label.type](e.label, t),
          t.write(": "),
          this[e.body.type](e.body, t);
      },
      BreakStatement(e, t) {
        t.write("break"),
          e.label != null && (t.write(" "), this[e.label.type](e.label, t)),
          t.write(";");
      },
      ContinueStatement(e, t) {
        t.write("continue"),
          e.label != null && (t.write(" "), this[e.label.type](e.label, t)),
          t.write(";");
      },
      WithStatement(e, t) {
        t.write("with ("),
          this[e.object.type](e.object, t),
          t.write(") "),
          this[e.body.type](e.body, t);
      },
      SwitchStatement(e, t) {
        let r = t.indent.repeat(t.indentLevel++),
          { lineEnd: n, writeComments: u } = t;
        t.indentLevel++;
        let a = r + t.indent,
          i = a + t.indent;
        t.write("switch ("),
          this[e.discriminant.type](e.discriminant, t),
          t.write(") {" + n);
        let { cases: f } = e,
          { length: d } = f;
        for (let h = 0; h < d; h++) {
          let c = f[h];
          u && c.comments != null && le(t, c.comments, a, n),
            c.test
              ? (t.write(a + "case "),
                this[c.test.type](c.test, t),
                t.write(":" + n))
              : t.write(a + "default:" + n);
          let { consequent: o } = c,
            { length: l } = o;
          for (let m = 0; m < l; m++) {
            let b = o[m];
            u && b.comments != null && le(t, b.comments, i, n),
              t.write(i),
              this[b.type](b, t),
              t.write(n);
          }
        }
        (t.indentLevel -= 2), t.write(r + "}");
      },
      ReturnStatement(e, t) {
        t.write("return"),
          e.argument && (t.write(" "), this[e.argument.type](e.argument, t)),
          t.write(";");
      },
      ThrowStatement(e, t) {
        t.write("throw "), this[e.argument.type](e.argument, t), t.write(";");
      },
      TryStatement(e, t) {
        if ((t.write("try "), this[e.block.type](e.block, t), e.handler)) {
          let { handler: r } = e;
          r.param == null
            ? t.write(" catch ")
            : (t.write(" catch ("),
              this[r.param.type](r.param, t),
              t.write(") ")),
            this[r.body.type](r.body, t);
        }
        e.finalizer &&
          (t.write(" finally "), this[e.finalizer.type](e.finalizer, t));
      },
      WhileStatement(e, t) {
        t.write("while ("),
          this[e.test.type](e.test, t),
          t.write(") "),
          this[e.body.type](e.body, t);
      },
      DoWhileStatement(e, t) {
        t.write("do "),
          this[e.body.type](e.body, t),
          t.write(" while ("),
          this[e.test.type](e.test, t),
          t.write(");");
      },
      ForStatement(e, t) {
        if ((t.write("for ("), e.init != null)) {
          let { init: r } = e;
          r.type[0] === "V" ? cn(t, r) : this[r.type](r, t);
        }
        t.write("; "),
          e.test && this[e.test.type](e.test, t),
          t.write("; "),
          e.update && this[e.update.type](e.update, t),
          t.write(") "),
          this[e.body.type](e.body, t);
      },
      ForInStatement: (Ra = function (e, t) {
        t.write(`for ${e.await ? "await " : ""}(`);
        let { left: r } = e;
        r.type[0] === "V" ? cn(t, r) : this[r.type](r, t),
          t.write(e.type[3] === "I" ? " in " : " of "),
          this[e.right.type](e.right, t),
          t.write(") "),
          this[e.body.type](e.body, t);
      }),
      ForOfStatement: Ra,
      DebuggerStatement(e, t) {
        t.write("debugger;", e);
      },
      FunctionDeclaration: (wa = function (e, t) {
        t.write(
          (e.async ? "async " : "") +
            (e.generator ? "function* " : "function ") +
            (e.id ? e.id.name : ""),
          e,
        ),
          tt(t, e.params),
          t.write(" "),
          this[e.body.type](e.body, t);
      }),
      FunctionExpression: wa,
      VariableDeclaration(e, t) {
        cn(t, e), t.write(";");
      },
      VariableDeclarator(e, t) {
        this[e.id.type](e.id, t),
          e.init != null && (t.write(" = "), this[e.init.type](e.init, t));
      },
      ClassDeclaration(e, t) {
        if (
          (t.write("class " + (e.id ? `${e.id.name} ` : ""), e), e.superClass)
        ) {
          t.write("extends ");
          let { superClass: r } = e,
            { type: n } = r,
            u = t.expressionsPrecedence[n];
          (n[0] !== "C" || n[1] !== "l" || n[5] !== "E") &&
          (u === Ne || u < t.expressionsPrecedence.ClassExpression)
            ? (t.write("("), this[e.superClass.type](r, t), t.write(")"))
            : this[r.type](r, t),
            t.write(" ");
        }
        this.ClassBody(e.body, t);
      },
      ImportDeclaration(e, t) {
        t.write("import ");
        let { specifiers: r, attributes: n } = e,
          { length: u } = r,
          a = 0;
        if (u > 0) {
          for (; a < u; ) {
            a > 0 && t.write(", ");
            let i = r[a],
              f = i.type[6];
            if (f === "D") t.write(i.local.name, i), a++;
            else if (f === "N") t.write("* as " + i.local.name, i), a++;
            else break;
          }
          if (a < u) {
            for (t.write("{"); ; ) {
              let i = r[a],
                { name: f } = i.imported;
              if (
                (t.write(f, i),
                f !== i.local.name && t.write(" as " + i.local.name),
                ++a < u)
              )
                t.write(", ");
              else break;
            }
            t.write("}");
          }
          t.write(" from ");
        }
        if ((this.Literal(e.source, t), n && n.length > 0)) {
          t.write(" with { ");
          for (let i = 0; i < n.length; i++)
            this.ImportAttribute(n[i], t), i < n.length - 1 && t.write(", ");
          t.write(" }");
        }
        t.write(";");
      },
      ImportAttribute(e, t) {
        this.Identifier(e.key, t), t.write(": "), this.Literal(e.value, t);
      },
      ImportExpression(e, t) {
        t.write("import("), this[e.source.type](e.source, t), t.write(")");
      },
      ExportDefaultDeclaration(e, t) {
        t.write("export default "),
          this[e.declaration.type](e.declaration, t),
          t.expressionsPrecedence[e.declaration.type] != null &&
            e.declaration.type[0] !== "F" &&
            t.write(";");
      },
      ExportNamedDeclaration(e, t) {
        if ((t.write("export "), e.declaration))
          this[e.declaration.type](e.declaration, t);
        else {
          t.write("{");
          let { specifiers: r } = e,
            { length: n } = r;
          if (n > 0)
            for (let u = 0; ; ) {
              let a = r[u],
                { name: i } = a.local;
              if (
                (t.write(i, a),
                i !== a.exported.name && t.write(" as " + a.exported.name),
                ++u < n)
              )
                t.write(", ");
              else break;
            }
          if (
            (t.write("}"),
            e.source && (t.write(" from "), this.Literal(e.source, t)),
            e.attributes && e.attributes.length > 0)
          ) {
            t.write(" with { ");
            for (let u = 0; u < e.attributes.length; u++)
              this.ImportAttribute(e.attributes[u], t),
                u < e.attributes.length - 1 && t.write(", ");
            t.write(" }");
          }
          t.write(";");
        }
      },
      ExportAllDeclaration(e, t) {
        if (
          (e.exported != null
            ? t.write("export * as " + e.exported.name + " from ")
            : t.write("export * from "),
          this.Literal(e.source, t),
          e.attributes && e.attributes.length > 0)
        ) {
          t.write(" with { ");
          for (let r = 0; r < e.attributes.length; r++)
            this.ImportAttribute(e.attributes[r], t),
              r < e.attributes.length - 1 && t.write(", ");
          t.write(" }");
        }
        t.write(";");
      },
      MethodDefinition(e, t) {
        e.static && t.write("static ");
        let r = e.kind[0];
        (r === "g" || r === "s") && t.write(e.kind + " "),
          e.value.async && t.write("async "),
          e.value.generator && t.write("*"),
          e.computed
            ? (t.write("["), this[e.key.type](e.key, t), t.write("]"))
            : this[e.key.type](e.key, t),
          tt(t, e.value.params),
          t.write(" "),
          this[e.value.body.type](e.value.body, t);
      },
      ClassExpression(e, t) {
        this.ClassDeclaration(e, t);
      },
      ArrowFunctionExpression(e, t) {
        t.write(e.async ? "async " : "", e);
        let { params: r } = e;
        r != null &&
          (r.length === 1 && r[0].type[0] === "I"
            ? t.write(r[0].name, r[0])
            : tt(t, e.params)),
          t.write(" => "),
          e.body.type[0] === "O"
            ? (t.write("("), this.ObjectExpression(e.body, t), t.write(")"))
            : this[e.body.type](e.body, t);
      },
      ThisExpression(e, t) {
        t.write("this", e);
      },
      Super(e, t) {
        t.write("super", e);
      },
      RestElement: (Pa = function (e, t) {
        t.write("..."), this[e.argument.type](e.argument, t);
      }),
      SpreadElement: Pa,
      YieldExpression(e, t) {
        t.write(e.delegate ? "yield*" : "yield"),
          e.argument && (t.write(" "), this[e.argument.type](e.argument, t));
      },
      AwaitExpression(e, t) {
        t.write("await ", e), pr(t, e.argument, e);
      },
      TemplateLiteral(e, t) {
        let { quasis: r, expressions: n } = e;
        t.write("`");
        let { length: u } = n;
        for (let i = 0; i < u; i++) {
          let f = n[i],
            d = r[i];
          t.write(d.value.raw, d),
            t.write("${"),
            this[f.type](f, t),
            t.write("}");
        }
        let a = r[r.length - 1];
        t.write(a.value.raw, a), t.write("`");
      },
      TemplateElement(e, t) {
        t.write(e.value.raw, e);
      },
      TaggedTemplateExpression(e, t) {
        pr(t, e.tag, e), this[e.quasi.type](e.quasi, t);
      },
      ArrayExpression: (va = function (e, t) {
        if ((t.write("["), e.elements.length > 0)) {
          let { elements: r } = e,
            { length: n } = r;
          for (let u = 0; ; ) {
            let a = r[u];
            if ((a != null && this[a.type](a, t), ++u < n)) t.write(", ");
            else {
              a == null && t.write(", ");
              break;
            }
          }
        }
        t.write("]");
      }),
      ArrayPattern: va,
      ObjectExpression(e, t) {
        let r = t.indent.repeat(t.indentLevel++),
          { lineEnd: n, writeComments: u } = t,
          a = r + t.indent;
        if ((t.write("{"), e.properties.length > 0)) {
          t.write(n), u && e.comments != null && le(t, e.comments, a, n);
          let i = "," + n,
            { properties: f } = e,
            { length: d } = f;
          for (let h = 0; ; ) {
            let c = f[h];
            if (
              (u && c.comments != null && le(t, c.comments, a, n),
              t.write(a),
              this[c.type](c, t),
              ++h < d)
            )
              t.write(i);
            else break;
          }
          t.write(n),
            u && e.trailingComments != null && le(t, e.trailingComments, a, n),
            t.write(r + "}");
        } else
          u
            ? e.comments != null
              ? (t.write(n),
                le(t, e.comments, a, n),
                e.trailingComments != null && le(t, e.trailingComments, a, n),
                t.write(r + "}"))
              : e.trailingComments != null
                ? (t.write(n),
                  le(t, e.trailingComments, a, n),
                  t.write(r + "}"))
                : t.write("}")
            : t.write("}");
        t.indentLevel--;
      },
      Property(e, t) {
        e.method || e.kind[0] !== "i"
          ? this.MethodDefinition(e, t)
          : (e.shorthand ||
              (e.computed
                ? (t.write("["), this[e.key.type](e.key, t), t.write("]"))
                : this[e.key.type](e.key, t),
              t.write(": ")),
            this[e.value.type](e.value, t));
      },
      PropertyDefinition(e, t) {
        if (
          (e.static && t.write("static "),
          e.computed && t.write("["),
          this[e.key.type](e.key, t),
          e.computed && t.write("]"),
          e.value == null)
        ) {
          e.key.type[0] !== "F" && t.write(";");
          return;
        }
        t.write(" = "), this[e.value.type](e.value, t), t.write(";");
      },
      ObjectPattern(e, t) {
        if ((t.write("{"), e.properties.length > 0)) {
          let { properties: r } = e,
            { length: n } = r;
          for (let u = 0; this[r[u].type](r[u], t), ++u < n; ) t.write(", ");
        }
        t.write("}");
      },
      SequenceExpression(e, t) {
        tt(t, e.expressions);
      },
      UnaryExpression(e, t) {
        if (e.prefix) {
          let {
            operator: r,
            argument: n,
            argument: { type: u },
          } = e;
          t.write(r);
          let a = Ua(t, n, e);
          !a &&
            (r.length > 1 ||
              (u[0] === "U" &&
                (u[1] === "n" || u[1] === "p") &&
                n.prefix &&
                n.operator[0] === r &&
                (r === "+" || r === "-"))) &&
            t.write(" "),
            a
              ? (t.write(r.length > 1 ? " (" : "("),
                this[u](n, t),
                t.write(")"))
              : this[u](n, t);
        } else this[e.argument.type](e.argument, t), t.write(e.operator);
      },
      UpdateExpression(e, t) {
        e.prefix
          ? (t.write(e.operator), this[e.argument.type](e.argument, t))
          : (this[e.argument.type](e.argument, t), t.write(e.operator));
      },
      AssignmentExpression(e, t) {
        this[e.left.type](e.left, t),
          t.write(" " + e.operator + " "),
          this[e.right.type](e.right, t);
      },
      AssignmentPattern(e, t) {
        this[e.left.type](e.left, t),
          t.write(" = "),
          this[e.right.type](e.right, t);
      },
      BinaryExpression: (Ma = function (e, t) {
        let r = e.operator === "in";
        r && t.write("("),
          pr(t, e.left, e, !1),
          t.write(" " + e.operator + " "),
          pr(t, e.right, e, !0),
          r && t.write(")");
      }),
      LogicalExpression: Ma,
      ConditionalExpression(e, t) {
        let { test: r } = e,
          n = t.expressionsPrecedence[r.type];
        n === Ne || n <= t.expressionsPrecedence.ConditionalExpression
          ? (t.write("("), this[r.type](r, t), t.write(")"))
          : this[r.type](r, t),
          t.write(" ? "),
          this[e.consequent.type](e.consequent, t),
          t.write(" : "),
          this[e.alternate.type](e.alternate, t);
      },
      NewExpression(e, t) {
        t.write("new ");
        let r = t.expressionsPrecedence[e.callee.type];
        r === Ne || r < t.expressionsPrecedence.CallExpression || w0(e.callee)
          ? (t.write("("), this[e.callee.type](e.callee, t), t.write(")"))
          : this[e.callee.type](e.callee, t),
          tt(t, e.arguments);
      },
      CallExpression(e, t) {
        let r = t.expressionsPrecedence[e.callee.type];
        r === Ne || r < t.expressionsPrecedence.CallExpression
          ? (t.write("("), this[e.callee.type](e.callee, t), t.write(")"))
          : this[e.callee.type](e.callee, t),
          e.optional && t.write("?."),
          tt(t, e.arguments);
      },
      ChainExpression(e, t) {
        this[e.expression.type](e.expression, t);
      },
      MemberExpression(e, t) {
        let r = t.expressionsPrecedence[e.object.type];
        r === Ne || r < t.expressionsPrecedence.MemberExpression
          ? (t.write("("), this[e.object.type](e.object, t), t.write(")"))
          : this[e.object.type](e.object, t),
          e.computed
            ? (e.optional && t.write("?."),
              t.write("["),
              this[e.property.type](e.property, t),
              t.write("]"))
            : (e.optional ? t.write("?.") : t.write("."),
              this[e.property.type](e.property, t));
      },
      MetaProperty(e, t) {
        t.write(e.meta.name + "." + e.property.name, e);
      },
      Identifier(e, t) {
        t.write(e.name, e);
      },
      PrivateIdentifier(e, t) {
        t.write(`#${e.name}`, e);
      },
      Literal(e, t) {
        e.raw != null
          ? t.write(e.raw, e)
          : e.regex != null
            ? this.RegExpLiteral(e, t)
            : e.bigint != null
              ? t.write(e.bigint + "n", e)
              : t.write(y0(e.value), e);
      },
      RegExpLiteral(e, t) {
        let { regex: r } = e;
        t.write(`/${r.pattern}/${r.flags}`, e);
      },
    },
    M0 = {};
  var ln = class {
    constructor(t) {
      let r = t ?? M0;
      (this.output = ""),
        r.output != null
          ? ((this.output = r.output), (this.write = this.writeToStream))
          : (this.output = ""),
        (this.generator = r.generator != null ? r.generator : P0),
        (this.expressionsPrecedence =
          r.expressionsPrecedence != null ? r.expressionsPrecedence : D0),
        (this.indent = r.indent != null ? r.indent : "  "),
        (this.lineEnd =
          r.lineEnd != null
            ? r.lineEnd
            : `
`),
        (this.indentLevel =
          r.startingIndentLevel != null ? r.startingIndentLevel : 0),
        (this.writeComments = r.comments ? r.comments : !1),
        r.sourceMap != null &&
          ((this.write =
            r.output == null ? this.writeAndMap : this.writeToStreamAndMap),
          (this.sourceMap = r.sourceMap),
          (this.line = 1),
          (this.column = 0),
          (this.lineEndSize =
            this.lineEnd.split(`
`).length - 1),
          (this.mapping = {
            original: null,
            generated: this,
            name: void 0,
            source: r.sourceMap.file || r.sourceMap._file,
          }));
    }
    write(t) {
      this.output += t;
    }
    writeToStream(t) {
      this.output.write(t);
    }
    writeAndMap(t, r) {
      (this.output += t), this.map(t, r);
    }
    writeToStreamAndMap(t, r) {
      this.output.write(t), this.map(t, r);
    }
    map(t, r) {
      if (r != null) {
        let { type: a } = r;
        if (a[0] === "L" && a[2] === "n") {
          (this.column = 0), this.line++;
          return;
        }
        if (r.loc != null) {
          let { mapping: i } = this;
          (i.original = r.loc.start),
            (i.name = r.name),
            this.sourceMap.addMapping(i);
        }
        if (
          (a[0] === "T" && a[8] === "E") ||
          (a[0] === "L" && a[1] === "i" && typeof r.value == "string")
        ) {
          let { length: i } = t,
            { column: f, line: d } = this;
          for (let h = 0; h < i; h++)
            t[h] ===
            `
`
              ? ((f = 0), d++)
              : f++;
          (this.column = f), (this.line = d);
          return;
        }
      }
      let { length: n } = t,
        { lineEnd: u } = this;
      n > 0 &&
        (this.lineEndSize > 0 &&
        (u.length === 1 ? t[n - 1] === u : t.endsWith(u))
          ? ((this.line += this.lineEndSize), (this.column = 0))
          : (this.column += n));
    }
    toString() {
      return this.output;
    }
  };
  function dn(e, t) {
    let r = new ln(t);
    return r.generator[e.type](e, r), r.output;
  }
  var Ha = We(rt(), 1),
    fn = class extends Ha.default {
      constructor() {
        super(),
          (this.parseOptions = { ranges: !0, module: !0, globalReturn: !0 }),
          (this.generationOptions = {
            format: { quotes: "double", escapeless: !0, compact: !0 },
          }),
          (this.parse = Da),
          (this.generate = dn);
      }
      rewrite(t, r = {}) {
        return this.recast(t, r, "rewrite");
      }
      source(t, r = {}) {
        return this.recast(t, r, "source");
      }
      recast(t, r = {}, n = "") {
        try {
          let u = [],
            a = this.parse(t, this.parseOptions),
            i = {
              data: r,
              changes: [],
              input: t,
              ast: a,
              get slice() {
                return f;
              },
            },
            f = 0;
          this.iterate(a, (d, h = null) => {
            h && h.inTransformer && (d.isTransformer = !0),
              (d.parent = h),
              this.emit(d.type, d, i, n);
          }),
            i.changes.sort((d, h) => d.start - h.start || d.end - h.end);
          for (let d of i.changes)
            "start" in d &&
              typeof d.start == "number" &&
              u.push(t.slice(f, d.start)),
              d.node &&
                u.push(
                  typeof d.node == "string"
                    ? d.node
                    : dn(d.node, this.generationOptions),
                ),
              "end" in d && typeof d.end == "number" && (f = d.end);
          return u.push(t.slice(f)), u.join("");
        } catch {
          return t;
        }
      }
      iterate(t, r) {
        if (typeof t != "object" || !r) return;
        n(t, null, r);
        function n(u, a, i) {
          if (!(typeof u != "object" || !i)) {
            i(u, a, i);
            for (let f in u)
              f !== "parent" &&
                (Array.isArray(u[f])
                  ? u[f].forEach((d) => {
                      d && n(d, u, i);
                    })
                  : u[f] && n(u[f], u, i));
            typeof u.iterateEnd == "function" && u.iterateEnd();
          }
        }
      }
    },
    Fa = fn;
  var wn = We(En(), 1);
  var Ya = {
      encode(e) {
        return e && encodeURIComponent(e);
      },
      decode(e) {
        return e && decodeURIComponent(e);
      },
    },
    Va = {
      encode(e) {
        if (!e) return e;
        let t = "";
        for (let r = 0; r < e.length; r++)
          t += r % 2 ? String.fromCharCode(e.charCodeAt(r) ^ 2) : e[r];
        return encodeURIComponent(t);
      },
      decode(e) {
        if (!e) return e;
        let [t, ...r] = e.split("?"),
          n = "",
          u = decodeURIComponent(t);
        for (let a = 0; a < u.length; a++)
          n += a % 2 ? String.fromCharCode(u.charCodeAt(a) ^ 2) : u[a];
        return n + (r.length ? "?" + r.join("?") : "");
      },
    },
    Ga = {
      encode(e) {
        return e && ((e = e.toString()), btoa(encodeURIComponent(e)));
      },
      decode(e) {
        return e && ((e = e.toString()), decodeURIComponent(atob(e)));
      },
    };
  var Wa = We(En(), 1);
  function Tn(e, t, r = !1) {
    return e.httpOnly && r
      ? !1
      : e.domain.startsWith(".")
        ? !!t.url.hostname.endsWith(e.domain.slice(1))
        : !(
            e.domain !== t.url.hostname ||
            (e.secure && t.url.protocol === "http:") ||
            !t.url.pathname.startsWith(e.path)
          );
  }
  async function Xa(e) {
    let t = await e("__op", 1, {
      upgrade(r) {
        r.createObjectStore("cookies", { keyPath: "id" }).createIndex(
          "path",
          "path",
        );
      },
    });
    return t.transaction(["cookies"], "readwrite").store.index("path"), t;
  }
  function Qa(e = [], t, r) {
    let n = "";
    for (let u of e)
      Tn(u, t, r) &&
        (n.length && (n += "; "), (n += u.name), (n += "="), (n += u.value));
    return n;
  }
  async function ja(e) {
    let t = new Date();
    return (await e.getAll("cookies")).filter((r) => {
      let n = !1;
      return (
        r.set &&
          (r.maxAge
            ? (n = r.set.getTime() + r.maxAge * 1e3 < t)
            : r.expires && (n = new Date(r.expires.toLocaleString()) < t)),
        n ? (e.delete("cookies", r.id), !1) : !0
      );
    });
  }
  function Ka(e, t, r) {
    if (!t) return !1;
    let n = (0, Wa.default)(e, { decodeValues: !1 });
    for (let u of n)
      u.domain || (u.domain = "." + r.url.hostname),
        u.path || (u.path = "/"),
        u.domain.startsWith(".") || (u.domain = "." + u.domain),
        t.put("cookies", {
          ...u,
          id: `${u.domain}@${u.path}@${u.name}`,
          set: new Date(Date.now()),
        });
    return !0;
  }
  function za(e, t = e.meta) {
    let { html: r, js: n, attributePrefix: u } = e,
      a = u + "-attr-";
    r.on("attr", (i, f) => {
      i.node.tagName === "base" &&
        i.name === "href" &&
        i.options.document &&
        (t.base = new URL(i.value, t.url)),
        f === "rewrite" &&
          pn(i.name, i.tagName) &&
          (i.node.setAttribute(a + i.name, i.value),
          (i.value = e.rewriteUrl(i.value, t))),
        f === "rewrite" &&
          kn(i.name) &&
          (i.node.setAttribute(a + i.name, i.value),
          (i.value = r.wrapSrcset(i.value, t))),
        f === "rewrite" &&
          An(i.name) &&
          (i.node.setAttribute(a + i.name, i.value),
          (i.value = r.rewrite(i.value, {
            ...t,
            document: !0,
            injectHead: i.options.injectHead || [],
          }))),
        f === "rewrite" &&
          _n(i.name) &&
          (i.node.setAttribute(a + i.name, i.value),
          (i.value = e.rewriteCSS(i.value, { context: "declarationList" }))),
        f === "rewrite" && gn(i.name) && (i.name = a + i.name),
        f === "rewrite" &&
          U0(i.name) &&
          (i.node.setAttribute(a + i.name, i.value),
          (i.value = n.rewrite(i.value, t))),
        f === "source" &&
          i.name.startsWith(a) &&
          (i.node.hasAttribute(i.name.slice(a.length)) &&
            i.node.removeAttribute(i.name.slice(a.length)),
          (i.name = i.name.slice(a.length)));
    });
  }
  function $a(e) {
    let { html: t, js: r, css: n } = e;
    return (
      t.on("text", (u, a) => {
        u.element.tagName === "script" &&
          (u.value = a === "rewrite" ? r.rewrite(u.value) : r.source(u.value)),
          u.element.tagName === "style" &&
            (u.value =
              a === "rewrite" ? n.rewrite(u.value) : n.source(u.value));
      }),
      !0
    );
  }
  function pn(e, t) {
    return (
      (t === "object" && e === "data") ||
      [
        "src",
        "href",
        "ping",
        "movie",
        "action",
        "poster",
        "profile",
        "background",
      ].indexOf(e) > -1
    );
  }
  function U0(e) {
    return (
      [
        "onafterprint",
        "onbeforeprint",
        "onbeforeunload",
        "onerror",
        "onhashchange",
        "onload",
        "onmessage",
        "onoffline",
        "ononline",
        "onpagehide",
        "onpopstate",
        "onstorage",
        "onunload",
        "onblur",
        "onchange",
        "oncontextmenu",
        "onfocus",
        "oninput",
        "oninvalid",
        "onreset",
        "onsearch",
        "onselect",
        "onsubmit",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onclick",
        "ondblclick",
        "onmousedown",
        "onmousemove",
        "onmouseout",
        "onmouseover",
        "onmouseup",
        "onmousewheel",
        "onwheel",
        "ondrag",
        "ondragend",
        "ondragenter",
        "ondragleave",
        "ondragover",
        "ondragstart",
        "ondrop",
        "onscroll",
        "oncopy",
        "oncut",
        "onpaste",
        "onabort",
        "oncanplay",
        "oncanplaythrough",
        "oncuechange",
        "ondurationchange",
        "onemptied",
        "onended",
        "onerror",
        "onloadeddata",
        "onloadedmetadata",
        "onloadstart",
        "onpause",
        "onplay",
        "onplaying",
        "onprogress",
        "onratechange",
        "onseeked",
        "onseeking",
        "onstalled",
        "onsuspend",
        "ontimeupdate",
        "onvolumechange",
        "onwaiting",
      ].indexOf(e) > -1
    );
  }
  function Ja(e) {
    let { html: t } = e;
    t.on("element", (r, n) => {
      if (
        n !== "rewrite" ||
        r.tagName !== "head" ||
        !("injectHead" in r.options)
      )
        return !1;
      r.childNodes.unshift(...r.options.injectHead);
    });
  }
  function bn(e = "", t = "") {
    return `self.__uv$cookies = ${JSON.stringify(e)};self.__uv$referrer = ${JSON.stringify(t)};`;
  }
  function Za(e, t, r, n, u, a) {
    return [
      {
        tagName: "script",
        nodeName: "script",
        childNodes: [{ nodeName: "#text", value: bn(u, a) }],
        attrs: [{ name: "__uv-script", value: "1", skip: !0 }],
        skip: !0,
      },
      {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [
          { name: "src", value: t, skip: !0 },
          { name: "__uv-script", value: "1", skip: !0 },
        ],
      },
      {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [
          { name: "src", value: r, skip: !0 },
          { name: "__uv-script", value: "1", skip: !0 },
        ],
      },
      {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [
          { name: "src", value: n, skip: !0 },
          { name: "__uv-script", value: "1", skip: !0 },
        ],
      },
      {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [
          { name: "src", value: e, skip: !0 },
          { name: "__uv-script", value: "1", skip: !0 },
        ],
      },
    ];
  }
  function gn(e) {
    return (
      ["http-equiv", "integrity", "sandbox", "nonce", "crossorigin"].indexOf(
        e,
      ) > -1
    );
  }
  function An(e) {
    return e === "srcdoc";
  }
  function _n(e) {
    return e === "style";
  }
  function kn(e) {
    return e === "srcSet" || e === "srcset" || e === "imagesrcset";
  }
  function es(e) {
    let { js: t } = e;
    t.on("MemberExpression", (r, n, u) => {
      if (r.object.type === "Super") return !1;
      if (
        (u === "rewrite" &&
          H0(r) &&
          (n.changes.push({
            node: "__uv.$wrap((",
            start: r.property.start,
            end: r.property.start,
          }),
          (r.iterateEnd = function () {
            n.changes.push({
              node: "))",
              start: r.property.end,
              end: r.property.end,
            });
          })),
        ((!r.computed && r.property.name === "location" && u === "rewrite") ||
          (r.property.name === "__uv$location" && u === "source")) &&
          n.changes.push({
            start: r.property.start,
            end: r.property.end,
            node:
              u === "rewrite"
                ? "__uv$setSource(__uv).__uv$location"
                : "location",
          }),
        ((!r.computed && r.property.name === "top" && u === "rewrite") ||
          (r.property.name === "__uv$top" && u === "source")) &&
          n.changes.push({
            start: r.property.start,
            end: r.property.end,
            node: u === "rewrite" ? "__uv$setSource(__uv).__uv$top" : "top",
          }),
        ((!r.computed && r.property.name === "parent" && u === "rewrite") ||
          (r.property.name === "__uv$parent" && u === "source")) &&
          n.changes.push({
            start: r.property.start,
            end: r.property.end,
            node:
              u === "rewrite" ? "__uv$setSource(__uv).__uv$parent" : "parent",
          }),
        !r.computed &&
          r.property.name === "postMessage" &&
          u === "rewrite" &&
          n.changes.push({
            start: r.property.start,
            end: r.property.end,
            node: "__uv$setSource(__uv).postMessage",
          }),
        ((!r.computed && r.property.name === "eval" && u === "rewrite") ||
          (r.property.name === "__uv$eval" && u === "source")) &&
          n.changes.push({
            start: r.property.start,
            end: r.property.end,
            node: u === "rewrite" ? "__uv$setSource(__uv).__uv$eval" : "eval",
          }),
        !r.computed &&
          r.property.name === "__uv$setSource" &&
          u === "source" &&
          r.parent.type === "CallExpression")
      ) {
        let { parent: a, property: i } = r;
        n.changes.push({ start: i.start - 1, end: a.end }),
          (r.iterateEnd = function () {
            n.changes.push({ start: i.start, end: a.end });
          });
      }
    });
  }
  function ts(e) {
    let { js: t } = e;
    t.on("Identifier", (r, n, u) => {
      if (u !== "rewrite") return !1;
      let { parent: a } = r;
      if (
        !["location", "eval", "parent", "top"].includes(r.name) ||
        (a.type === "VariableDeclarator" && a.id === r) ||
        ((a.type === "AssignmentExpression" ||
          a.type === "AssignmentPattern") &&
          a.left === r) ||
        ((a.type === "FunctionExpression" ||
          a.type === "FunctionDeclaration") &&
          a.id === r) ||
        (a.type === "MemberExpression" && a.property === r && !a.computed) ||
        (r.name === "eval" && a.type === "CallExpression" && a.callee === r) ||
        (a.type === "Property" && a.key === r) ||
        (a.type === "Property" && a.value === r && a.shorthand) ||
        (a.type === "UpdateExpression" &&
          (a.operator === "++" || a.operator === "--")) ||
        ((a.type === "FunctionExpression" ||
          a.type === "FunctionDeclaration" ||
          a.type === "ArrowFunctionExpression") &&
          a.params.indexOf(r) !== -1) ||
        a.type === "MethodDefinition" ||
        a.type === "ClassDeclaration" ||
        a.type === "RestElement" ||
        a.type === "ExportSpecifier" ||
        a.type === "ImportSpecifier"
      )
        return !1;
      n.changes.push({
        start: r.start,
        end: r.end,
        node: "__uv.$get(" + r.name + ")",
      });
    });
  }
  function rs(e) {
    let { js: t } = e;
    t.on("CallExpression", (r, n, u) => {
      if (
        u !== "rewrite" ||
        !r.arguments.length ||
        r.callee.type !== "Identifier" ||
        r.callee.name !== "eval"
      )
        return !1;
      let [a] = r.arguments;
      n.changes.push({
        node: "__uv.js.rewrite(",
        start: a.start,
        end: a.start,
      }),
        (r.iterateEnd = function () {
          n.changes.push({ node: ")", start: a.end, end: a.end });
        });
    });
  }
  function ns(e) {
    let { js: t } = e;
    t.on("Literal", (r, n, u) => {
      if (
        !(
          (r.parent.type === "ImportDeclaration" ||
            r.parent.type === "ExportAllDeclaration" ||
            r.parent.type === "ExportNamedDeclaration") &&
          r.parent.source === r
        )
      )
        return !1;
      n.changes.push({
        start: r.start + 1,
        end: r.end - 1,
        node: u === "rewrite" ? e.rewriteUrl(r.value) : e.sourceUrl(r.value),
      });
    });
  }
  function us(e) {
    let { js: t } = e;
    t.on("ImportExpression", (r, n, u) => {
      if (u !== "rewrite") return !1;
      n.changes.push({
        node: `__uv.rewriteImport(${JSON.stringify(e.meta.url)},`,
        start: r.source.start,
        end: r.source.start,
      }),
        (r.iterateEnd = function () {
          n.changes.push({ node: ")", start: r.source.end, end: r.source.end });
        });
    });
  }
  function as(e) {
    let { js: t } = e;
    t.on("CallExpression", (r, n, u) => {
      if (u !== "source" || !ss(r.callee)) return !1;
      switch (r.callee.property.name) {
        case "$wrap":
          {
            if (
              !r.arguments ||
              r.parent.type !== "MemberExpression" ||
              r.parent.property !== r
            )
              return !1;
            let [a] = r.arguments;
            n.changes.push({ start: r.callee.start, end: a.start }),
              (r.iterateEnd = function () {
                n.changes.push({ start: r.end - 2, end: r.end });
              });
          }
          break;
        case "$get":
        case "rewriteUrl":
          {
            let [a] = r.arguments;
            n.changes.push({ start: r.callee.start, end: a.start }),
              (r.iterateEnd = function () {
                n.changes.push({ start: r.end - 1, end: r.end });
              });
          }
          break;
        case "rewrite":
          {
            let [a] = r.arguments;
            n.changes.push({ start: r.callee.start, end: a.start }),
              (r.iterateEnd = function () {
                n.changes.push({ start: r.end - 1, end: r.end });
              });
          }
          break;
      }
    });
  }
  function ss(e) {
    return e.type !== "MemberExpression"
      ? !1
      : e.property.name === "rewrite" && ss(e.object)
        ? !0
        : !(
            e.object.type !== "Identifier" ||
            e.object.name !== "__uv" ||
            !["js", "$get", "$wrap", "rewriteUrl"].includes(e.property.name)
          );
  }
  function H0(e) {
    if (!e.computed) return !1;
    let { property: t } = e;
    return t.type, !0;
  }
  var Nn = (e, t) => t.some((r) => e instanceof r),
    is,
    os;
  function F0() {
    return (
      is ||
      (is = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
  }
  function q0() {
    return (
      os ||
      (os = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    );
  }
  var Ln = new WeakMap(),
    Cn = new WeakMap(),
    gr = new WeakMap();
  function Y0(e) {
    let t = new Promise((r, n) => {
      let u = () => {
          e.removeEventListener("success", a),
            e.removeEventListener("error", i);
        },
        a = () => {
          r(Ye(e.result)), u();
        },
        i = () => {
          n(e.error), u();
        };
      e.addEventListener("success", a), e.addEventListener("error", i);
    });
    return gr.set(t, e), t;
  }
  function V0(e) {
    if (Ln.has(e)) return;
    let t = new Promise((r, n) => {
      let u = () => {
          e.removeEventListener("complete", a),
            e.removeEventListener("error", i),
            e.removeEventListener("abort", i);
        },
        a = () => {
          r(), u();
        },
        i = () => {
          n(e.error || new DOMException("AbortError", "AbortError")), u();
        };
      e.addEventListener("complete", a),
        e.addEventListener("error", i),
        e.addEventListener("abort", i);
    });
    Ln.set(e, t);
  }
  var xn = {
    get(e, t, r) {
      if (e instanceof IDBTransaction) {
        if (t === "done") return Ln.get(e);
        if (t === "store")
          return r.objectStoreNames[1]
            ? void 0
            : r.objectStore(r.objectStoreNames[0]);
      }
      return Ye(e[t]);
    },
    set(e, t, r) {
      return (e[t] = r), !0;
    },
    has(e, t) {
      return e instanceof IDBTransaction && (t === "done" || t === "store")
        ? !0
        : t in e;
    },
  };
  function fs(e) {
    xn = e(xn);
  }
  function G0(e) {
    return q0().includes(e)
      ? function (...t) {
          return e.apply(Sn(this), t), Ye(this.request);
        }
      : function (...t) {
          return Ye(e.apply(Sn(this), t));
        };
  }
  function W0(e) {
    return typeof e == "function"
      ? G0(e)
      : (e instanceof IDBTransaction && V0(e),
        Nn(e, F0()) ? new Proxy(e, xn) : e);
  }
  function Ye(e) {
    if (e instanceof IDBRequest) return Y0(e);
    if (Cn.has(e)) return Cn.get(e);
    let t = W0(e);
    return t !== e && (Cn.set(e, t), gr.set(t, e)), t;
  }
  var Sn = (e) => gr.get(e);
  function hs(
    e,
    t,
    { blocked: r, upgrade: n, blocking: u, terminated: a } = {},
  ) {
    let i = indexedDB.open(e, t),
      f = Ye(i);
    return (
      n &&
        i.addEventListener("upgradeneeded", (d) => {
          n(Ye(i.result), d.oldVersion, d.newVersion, Ye(i.transaction), d);
        }),
      r &&
        i.addEventListener("blocked", (d) => r(d.oldVersion, d.newVersion, d)),
      f
        .then((d) => {
          a && d.addEventListener("close", () => a()),
            u &&
              d.addEventListener("versionchange", (h) =>
                u(h.oldVersion, h.newVersion, h),
              );
        })
        .catch(() => {}),
      f
    );
  }
  var X0 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    Q0 = ["put", "add", "delete", "clear"],
    In = new Map();
  function cs(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
      return;
    if (In.get(t)) return In.get(t);
    let r = t.replace(/FromIndex$/, ""),
      n = t !== r,
      u = Q0.includes(r);
    if (
      !(r in (n ? IDBIndex : IDBObjectStore).prototype) ||
      !(u || X0.includes(r))
    )
      return;
    let a = async function (i, ...f) {
      let d = this.transaction(i, u ? "readwrite" : "readonly"),
        h = d.store;
      return (
        n && (h = h.index(f.shift())),
        (await Promise.all([h[r](...f), u && d.done]))[0]
      );
    };
    return In.set(t, a), a;
  }
  fs((e) => ({
    ...e,
    get: (t, r, n) => cs(t, r) || e.get(t, r, n),
    has: (t, r) => !!cs(t, r) || e.has(t, r),
  }));
  var j0 = ["continue", "continuePrimaryKey", "advance"],
    ls = {},
    On = new WeakMap(),
    ms = new WeakMap(),
    K0 = {
      get(e, t) {
        if (!j0.includes(t)) return e[t];
        let r = ls[t];
        return (
          r ||
            (r = ls[t] =
              function (...n) {
                On.set(this, ms.get(this)[t](...n));
              }),
          r
        );
      },
    };
  async function* z0(...e) {
    let t = this;
    if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return;
    t = t;
    let r = new Proxy(t, K0);
    for (ms.set(r, t), gr.set(r, Sn(t)); t; )
      yield r, (t = await (On.get(r) || t.continue())), On.delete(r);
  }
  function ds(e, t) {
    return (
      (t === Symbol.asyncIterator &&
        Nn(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
      (t === "iterate" && Nn(e, [IDBIndex, IDBObjectStore]))
    );
  }
  fs((e) => ({
    ...e,
    get(t, r, n) {
      return ds(t, r) ? z0 : e.get(t, r, n);
    },
    has(t, r) {
      return ds(t, r) || e.has(t, r);
    },
  }));
  var $0 = globalThis.fetch,
    Es = globalThis.SharedWorker,
    Ts = globalThis.localStorage,
    J0 = globalThis.navigator.serviceWorker,
    xt = MessagePort.prototype.postMessage,
    Lt = {
      prototype: { send: WebSocket.prototype.send },
      CLOSED: WebSocket.CLOSED,
      CLOSING: WebSocket.CLOSING,
      CONNECTING: WebSocket.CONNECTING,
      OPEN: WebSocket.OPEN,
    };
  async function yn() {
    let e = (
        await self.clients.matchAll({ type: "window", includeUncontrolled: !0 })
      ).map(async (r) => {
        let n = await (function (u) {
          let a = new MessageChannel();
          return new Promise((i) => {
            u.postMessage({ type: "getPort", port: a.port2 }, [a.port2]),
              (a.port1.onmessage = (f) => {
                i(f.data);
              });
          });
        })(r);
        return await bs(n), n;
      }),
      t = Promise.race([
        Promise.any(e),
        new Promise((r, n) => setTimeout(n, 1e3, new TypeError("timeout"))),
      ]);
    try {
      return await t;
    } catch (r) {
      if (r instanceof AggregateError)
        throw (
          (console.error(
            "bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort.",
          ),
          new Error("All clients returned an invalid MessagePort."))
        );
      return (
        console.warn(
          "bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying",
        ),
        await yn()
      );
    }
  }
  function bs(e) {
    let t = new MessageChannel(),
      r = new Promise((n, u) => {
        (t.port1.onmessage = (a) => {
          a.data.type === "pong" && n();
        }),
          setTimeout(u, 1500);
      });
    return (
      xt.call(e, { message: { type: "ping" }, port: t.port2 }, [t.port2]), r
    );
  }
  function ps(e, t) {
    let r = new Es(e, "bare-mux-worker");
    return (
      t &&
        J0.addEventListener("message", (n) => {
          if (n.data.type === "getPort" && n.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let u = new Es(e, "bare-mux-worker");
            xt.call(n.data.port, u.port, [u.port]);
          }
        }),
      r.port
    );
  }
  var Dn = class {
      constructor(t) {
        (this.channel = new BroadcastChannel("bare-mux")),
          t instanceof MessagePort || t instanceof Promise
            ? (this.port = t)
            : this.createChannel(t, !0);
      }
      createChannel(t, r) {
        if (self.clients)
          (this.port = yn()),
            (this.channel.onmessage = (n) => {
              n.data.type === "refreshPort" && (this.port = yn());
            });
        else if (t && SharedWorker) {
          if (!t.startsWith("/") && !t.includes("://"))
            throw new Error(
              "Invalid URL. Must be absolute or start at the root.",
            );
          (this.port = ps(t, r)),
            console.debug("bare-mux: setting localStorage bare-mux-path to", t),
            (Ts["bare-mux-path"] = t);
        } else {
          if (!SharedWorker)
            throw new Error("Unable to get a channel to the SharedWorker.");
          {
            let n = Ts["bare-mux-path"];
            if (
              (console.debug("bare-mux: got localStorage bare-mux-path:", n),
              !n)
            )
              throw new Error(
                "Unable to get bare-mux workerPath from localStorage.",
              );
            this.port = ps(n, r);
          }
        }
      }
      async sendMessage(t, r) {
        this.port instanceof Promise && (this.port = await this.port);
        try {
          await bs(this.port);
        } catch {
          return (
            console.warn(
              "bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead.",
            ),
            this.createChannel(),
            await this.sendMessage(t, r)
          );
        }
        let n = new MessageChannel(),
          u = [n.port2, ...(r || [])],
          a = new Promise((i, f) => {
            n.port1.onmessage = (d) => {
              let h = d.data;
              h.type === "error" ? f(h.error) : i(h);
            };
          });
        return xt.call(this.port, { message: t, port: n.port2 }, u), await a;
      }
    },
    Rn = class extends EventTarget {
      constructor(t, r = [], n, u) {
        super(),
          (this.protocols = r),
          (this.readyState = Lt.CONNECTING),
          (this.url = t.toString()),
          (this.protocols = r);
        let a = (h) => {
            (this.protocols = h), (this.readyState = Lt.OPEN);
            let c = new Event("open");
            this.dispatchEvent(c);
          },
          i = async (h) => {
            let c = new MessageEvent("message", { data: h });
            this.dispatchEvent(c);
          },
          f = (h, c) => {
            this.readyState = Lt.CLOSED;
            let o = new CloseEvent("close", { code: h, reason: c });
            this.dispatchEvent(o);
          },
          d = () => {
            this.readyState = Lt.CLOSED;
            let h = new Event("error");
            this.dispatchEvent(h);
          };
        (this.channel = new MessageChannel()),
          (this.channel.port1.onmessage = (h) => {
            h.data.type === "open"
              ? a(h.data.args[0])
              : h.data.type === "message"
                ? i(h.data.args[0])
                : h.data.type === "close"
                  ? f(h.data.args[0], h.data.args[1])
                  : h.data.type === "error" && d();
          }),
          n.sendMessage(
            {
              type: "websocket",
              websocket: {
                url: t.toString(),
                protocols: r,
                requestHeaders: u,
                channel: this.channel.port2,
              },
            },
            [this.channel.port2],
          );
      }
      send(...t) {
        if (this.readyState === Lt.CONNECTING)
          throw new DOMException(
            "Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.",
          );
        let r = t[0];
        r.buffer &&
          (r = r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)),
          xt.call(
            this.channel.port1,
            { type: "data", data: r },
            r instanceof ArrayBuffer ? [r] : [],
          );
      }
      close(t, r) {
        xt.call(this.channel.port1, {
          type: "close",
          closeCode: t,
          closeReason: r,
        });
      }
    };
  function Z0(e) {
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      if (
        !"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(
          r,
        )
      )
        return !1;
    }
    return !0;
  }
  var ec = ["ws:", "wss:"],
    tc = [101, 204, 205, 304],
    rc = [301, 302, 303, 307, 308];
  var Ar = class {
    constructor(t) {
      this.worker = new Dn(t);
    }
    createWebSocket(t, r = [], n, u) {
      try {
        t = new URL(t);
      } catch {
        throw new DOMException(
          `Faiiled to construct 'WebSocket': The URL '${t}' is invalid.`,
        );
      }
      if (!ec.includes(t.protocol))
        throw new DOMException(
          `Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${t.protocol}' is not allowed.`,
        );
      Array.isArray(r) || (r = [r]), (r = r.map(String));
      for (let a of r)
        if (!Z0(a))
          throw new DOMException(
            `Failed to construct 'WebSocket': The subprotocol '${a}' is invalid.`,
          );
      return (u = u || {}), new Rn(t, r, this.worker, u);
    }
    async fetch(t, r) {
      let n = new Request(t, r),
        u = r?.headers || n.headers,
        a = u instanceof Headers ? Object.fromEntries(u) : u,
        i = n.body,
        f = new URL(n.url);
      if (f.protocol.startsWith("blob:")) {
        let d = await $0(f),
          h = new Response(d.body, d);
        return (
          (h.rawHeaders = Object.fromEntries(d.headers)), (h.rawResponse = d), h
        );
      }
      for (let d = 0; ; d++) {
        let h = (
            await this.worker.sendMessage(
              {
                type: "fetch",
                fetch: {
                  remote: f.toString(),
                  method: n.method,
                  headers: a,
                  body: i || void 0,
                },
              },
              i ? [i] : [],
            )
          ).fetch,
          c = new Response(tc.includes(h.status) ? void 0 : h.body, {
            headers: new Headers(h.headers),
            status: h.status,
            statusText: h.statusText,
          });
        (c.rawHeaders = h.headers), (c.finalURL = f.toString());
        let o = r?.redirect || n.redirect;
        if (!rc.includes(c.status)) return c;
        switch (o) {
          case "follow": {
            let l = c.headers.get("location");
            if (20 > d && l !== null) {
              f = new URL(l, f);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }
          case "error":
            throw new TypeError("Failed to fetch");
          case "manual":
            return c;
        }
      }
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var gs = We(rt(), 1),
    _r = class e {
      constructor(t = {}) {
        (this.prefix = t.prefix || "/service/"),
          (this.urlRegex = /^(#|about:|data:|mailto:)/),
          (this.rewriteUrl = t.rewriteUrl || this.rewriteUrl),
          (this.rewriteImport = t.rewriteImport || this.rewriteImport),
          (this.sourceUrl = t.sourceUrl || this.sourceUrl),
          (this.encodeUrl = t.encodeUrl || this.encodeUrl),
          (this.decodeUrl = t.decodeUrl || this.decodeUrl),
          (this.vanilla = "vanilla" in t ? t.vanilla : !1),
          (this.meta = t.meta || {}),
          (this.meta.base ||= void 0),
          (this.meta.origin ||= ""),
          (this.bundleScript = t.bundle || "/uv.bundle.js"),
          (this.handlerScript = t.handler || "/uv.handler.js"),
          (this.clientScript =
            t.client ||
            (t.bundle &&
              t.bundle.includes("uv.bundle.js") &&
              t.bundle.replace("uv.bundle.js", "uv.client.js")) ||
            "/uv.client.js"),
          (this.configScript = t.config || "/uv.config.js"),
          (this.meta.url ||= this.meta.base || ""),
          (this.codec = e.codec),
          (this.html = new Fu(this)),
          (this.css = new Yu(this)),
          (this.js = new Fa(this)),
          (this.openDB = this.constructor.openDB),
          (this.master = "__uv"),
          (this.dataPrefix = "__uv$"),
          (this.attributePrefix = "__uv"),
          (this.createHtmlInject = Za),
          (this.createJsInject = bn),
          (this.attrs = {
            isUrl: pn,
            isForbidden: gn,
            isHtml: An,
            isSrcset: kn,
            isStyle: _n,
          }),
          this.vanilla || this.implementUVMiddleware(),
          (this.cookie = {
            validateCookie: Tn,
            db: () => Xa(this.constructor.openDB),
            getCookies: ja,
            setCookies: Ka,
            serialize: Qa,
            setCookie: wn.default,
          });
      }
      rewriteImport(t, r, n = this.meta) {
        return this.rewriteUrl(t, { ...n, base: r });
      }
      rewriteUrl(t, r = this.meta) {
        if (((t = new String(t).trim()), !t || this.urlRegex.test(t))) return t;
        if (t.startsWith("javascript:"))
          return "javascript:" + this.js.rewrite(t.slice(11));
        try {
          return (
            r.origin + this.prefix + this.encodeUrl(new URL(t, r.base).href)
          );
        } catch {
          return r.origin + this.prefix + this.encodeUrl(t);
        }
      }
      sourceUrl(t, r = this.meta) {
        if (!t || this.urlRegex.test(t)) return t;
        try {
          return new URL(
            this.decodeUrl(t.slice(this.prefix.length + r.origin.length)),
            r.base,
          ).href;
        } catch {
          return this.decodeUrl(t.slice(this.prefix.length + r.origin.length));
        }
      }
      encodeUrl(t) {
        return encodeURIComponent(t);
      }
      decodeUrl(t) {
        return decodeURIComponent(t);
      }
      implementUVMiddleware() {
        za(this),
          $a(this),
          Ja(this),
          ns(this),
          us(this),
          es(this),
          rs(this),
          ts(this),
          as(this);
      }
      get rewriteHtml() {
        return this.html.rewrite.bind(this.html);
      }
      get sourceHtml() {
        return this.html.source.bind(this.html);
      }
      get rewriteCSS() {
        return this.css.rewrite.bind(this.css);
      }
      get sourceCSS() {
        return this.css.source.bind(this.css);
      }
      get rewriteJS() {
        return this.js.rewrite.bind(this.js);
      }
      get sourceJS() {
        return this.js.source.bind(this.js);
      }
      static codec = { xor: Va, base64: Ga, plain: Ya };
      static setCookie = wn.default;
      static openDB = hs;
      static BareClient = Ar;
      static EventEmitter = gs.default;
    },
    S1 = _r;
  typeof self == "object" && (self.Ultraviolet = _r);
})();
//# sourceMappingURL=uv.bundle.js.map

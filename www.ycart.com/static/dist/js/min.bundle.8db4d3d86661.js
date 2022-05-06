!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 7));
})([
  function (t, e, i) {
    "use strict";
    (function (t, n) {
      i.d(e, "e", function () {
        return r;
      }),
        i.d(e, "g", function () {
          return o;
        }),
        i.d(e, "f", function () {
          return s;
        }),
        i.d(e, "c", function () {
          return l;
        }),
        i.d(e, "a", function () {
          return u;
        }),
        i.d(e, "b", function () {
          return c;
        }),
        i.d(e, "d", function () {
          return h;
        });
      /*!
       * VERSION: 2.0.2
       * DATE: 2018-08-27
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      var r =
          "undefined" != typeof window
            ? window
            : void 0 !== t && t.exports && void 0 !== n
            ? n
            : {},
        s = (function (t, e) {
          var i = {},
            n = t.document,
            r = (t.GreenSockGlobals = t.GreenSockGlobals || t);
          if (r.TweenLite) return r.TweenLite;
          var s,
            o,
            a,
            l,
            u,
            c = function (t) {
              var e,
                i = t.split("."),
                n = r;
              for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
              return n;
            },
            h = c("com.greensock"),
            f = function (t) {
              var e,
                i = [],
                n = t.length;
              for (e = 0; e !== n; i.push(t[e++]));
              return i;
            },
            p = function () {},
            d = (function () {
              var t = Object.prototype.toString,
                e = t.call([]);
              return function (i) {
                return (
                  null != i &&
                  (i instanceof Array ||
                    ("object" == typeof i && !!i.push && t.call(i) === e))
                );
              };
            })(),
            m = {},
            _ = function (t, e, n, s) {
              (this.sc = m[t] ? m[t].sc : []),
                (m[t] = this),
                (this.gsClass = null),
                (this.func = n);
              var o = [];
              (this.check = function (a) {
                for (var l, u, h, f, p = e.length, d = p; --p > -1; )
                  (l = m[e[p]] || new _(e[p], [])).gsClass
                    ? ((o[p] = l.gsClass), d--)
                    : a && l.sc.push(this);
                if (0 === d && n)
                  for (
                    h = (u = ("com.greensock." + t).split(".")).pop(),
                      f = c(u.join("."))[h] = this.gsClass = n.apply(n, o),
                      s && (r[h] = i[h] = f),
                      p = 0;
                    p < this.sc.length;
                    p++
                  )
                    this.sc[p].check();
              }),
                this.check(!0);
            },
            g = (t._gsDefine = function (t, e, i, n) {
              return new _(t, e, i, n);
            }),
            v = (h._class = function (t, e, i) {
              return (
                (e = e || function () {}),
                g(
                  t,
                  [],
                  function () {
                    return e;
                  },
                  i
                ),
                e
              );
            });
          g.globals = r;
          var y = [0, 0, 1, 1],
            b = v(
              "easing.Ease",
              function (t, e, i, n) {
                (this._func = t),
                  (this._type = i || 0),
                  (this._power = n || 0),
                  (this._params = e ? y.concat(e) : y);
              },
              !0
            ),
            x = (b.map = {}),
            w = (b.register = function (t, e, i, n) {
              for (
                var r,
                  s,
                  o,
                  a,
                  l = e.split(","),
                  u = l.length,
                  c = (i || "easeIn,easeOut,easeInOut").split(",");
                --u > -1;

              )
                for (
                  s = l[u],
                    r = n ? v("easing." + s, null, !0) : h.easing[s] || {},
                    o = c.length;
                  --o > -1;

                )
                  (a = c[o]),
                    (x[s + "." + a] =
                      x[a + s] =
                      r[a] =
                        t.getRatio ? t : t[a] || new t());
            });
          for (
            (a = b.prototype)._calcEnd = !1,
              a.getRatio = function (t) {
                if (this._func)
                  return (
                    (this._params[0] = t), this._func.apply(null, this._params)
                  );
                var e = this._type,
                  i = this._power,
                  n =
                    1 === e
                      ? 1 - t
                      : 2 === e
                      ? t
                      : t < 0.5
                      ? 2 * t
                      : 2 * (1 - t);
                return (
                  1 === i
                    ? (n *= n)
                    : 2 === i
                    ? (n *= n * n)
                    : 3 === i
                    ? (n *= n * n * n)
                    : 4 === i && (n *= n * n * n * n),
                  1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
                );
              },
              o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                .length;
            --o > -1;

          )
            (a = s[o] + ",Power" + o),
              w(new b(null, null, 1, o), a, "easeOut", !0),
              w(
                new b(null, null, 2, o),
                a,
                "easeIn" + (0 === o ? ",easeNone" : "")
              ),
              w(new b(null, null, 3, o), a, "easeInOut");
          (x.linear = h.easing.Linear.easeIn),
            (x.swing = h.easing.Quad.easeInOut);
          var T = v("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
          });
          ((a = T.prototype).addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s,
              o,
              a = this._listeners[t],
              c = 0;
            for (
              this !== l || u || l.wake(),
                null == a && (this._listeners[t] = a = []),
                o = a.length;
              --o > -1;

            )
              (s = a[o]).c === e && s.s === i
                ? a.splice(o, 1)
                : 0 === c && s.pr < r && (c = o + 1);
            a.splice(c, 0, { c: e, s: i, up: n, pr: r });
          }),
            (a.removeEventListener = function (t, e) {
              var i,
                n = this._listeners[t];
              if (n)
                for (i = n.length; --i > -1; )
                  if (n[i].c === e) return void n.splice(i, 1);
            }),
            (a.dispatchEvent = function (t) {
              var e,
                i,
                n,
                r = this._listeners[t];
              if (r)
                for (
                  (e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget;
                  --e > -1;

                )
                  (n = r[e]) &&
                    (n.up
                      ? n.c.call(n.s || i, { type: t, target: i })
                      : n.c.call(n.s || i));
            });
          var k = t.requestAnimationFrame,
            P = t.cancelAnimationFrame,
            C =
              Date.now ||
              function () {
                return new Date().getTime();
              },
            S = C();
          for (o = (s = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !k; )
            (k = t[s[o] + "RequestAnimationFrame"]),
              (P =
                t[s[o] + "CancelAnimationFrame"] ||
                t[s[o] + "CancelRequestAnimationFrame"]);
          v("Ticker", function (t, e) {
            var i,
              r,
              s,
              o,
              a,
              c = this,
              h = C(),
              f = !(!1 === e || !k) && "auto",
              d = 500,
              m = 33,
              _ = function (t) {
                var e,
                  n,
                  l = C() - S;
                l > d && (h += l - m),
                  (S += l),
                  (c.time = (S - h) / 1e3),
                  (e = c.time - a),
                  (!i || e > 0 || !0 === t) &&
                    (c.frame++, (a += e + (e >= o ? 0.004 : o - e)), (n = !0)),
                  !0 !== t && (s = r(_)),
                  n && c.dispatchEvent("tick");
              };
            T.call(c),
              (c.time = c.frame = 0),
              (c.tick = function () {
                _(!0);
              }),
              (c.lagSmoothing = function (t, e) {
                if (!arguments.length) return d < 1e10;
                (d = t || 1e10), (m = Math.min(e, d, 0));
              }),
              (c.sleep = function () {
                null != s &&
                  (f && P ? P(s) : clearTimeout(s),
                  (r = p),
                  (s = null),
                  c === l && (u = !1));
              }),
              (c.wake = function (t) {
                null !== s
                  ? c.sleep()
                  : t
                  ? (h += -S + (S = C()))
                  : c.frame > 10 && (S = C() - d + 5),
                  (r =
                    0 === i
                      ? p
                      : f && k
                      ? k
                      : function (t) {
                          return setTimeout(t, (1e3 * (a - c.time) + 1) | 0);
                        }),
                  c === l && (u = !0),
                  _(2);
              }),
              (c.fps = function (t) {
                if (!arguments.length) return i;
                (o = 1 / ((i = t) || 60)), (a = this.time + o), c.wake();
              }),
              (c.useRAF = function (t) {
                if (!arguments.length) return f;
                c.sleep(), (f = t), c.fps(i);
              }),
              c.fps(t),
              setTimeout(function () {
                "auto" === f &&
                  c.frame < 5 &&
                  "hidden" !== (n || {}).visibilityState &&
                  c.useRAF(!1);
              }, 1500);
          }),
            ((a = h.Ticker.prototype =
              new h.events.EventDispatcher()).constructor = h.Ticker);
          var O = v("core.Animation", function (t, e) {
            if (
              ((this.vars = e = e || {}),
              (this._duration = this._totalDuration = t || 0),
              (this._delay = Number(e.delay) || 0),
              (this._timeScale = 1),
              (this._active = !0 === e.immediateRender),
              (this.data = e.data),
              (this._reversed = !0 === e.reversed),
              U)
            ) {
              u || l.wake();
              var i = this.vars.useFrames ? Y : U;
              i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
          });
          (l = O.ticker = new h.Ticker()),
            ((a = O.prototype)._dirty = a._gc = a._initted = a._paused = !1),
            (a._totalTime = a._time = 0),
            (a._rawPrevTime = -1),
            (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
            (a._paused = !1);
          var A = function () {
            u &&
              C() - S > 2e3 &&
              ("hidden" !== (n || {}).visibilityState || !l.lagSmoothing()) &&
              l.wake();
            var t = setTimeout(A, 2e3);
            t.unref && t.unref();
          };
          A(),
            (a.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (a.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (a.resume = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!1);
            }),
            (a.seek = function (t, e) {
              return this.totalTime(Number(t), !1 !== e);
            }),
            (a.restart = function (t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (a.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (a.render = function (t, e, i) {}),
            (a.invalidate = function () {
              return (
                (this._time = this._totalTime = 0),
                (this._initted = this._gc = !1),
                (this._rawPrevTime = -1),
                (!this._gc && this.timeline) || this._enabled(!0),
                this
              );
            }),
            (a.isActive = function () {
              var t,
                e = this._timeline,
                i = this._startTime;
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < i + this.totalDuration() / this._timeScale - 1e-7)
              );
            }),
            (a._enabled = function (t, e) {
              return (
                u || l.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                !0 !== e &&
                  (t && !this.timeline
                    ? this._timeline.add(this, this._startTime - this._delay)
                    : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              );
            }),
            (a._kill = function (t, e) {
              return this._enabled(!1, !1);
            }),
            (a.kill = function (t, e) {
              return this._kill(t, e), this;
            }),
            (a._uncache = function (t) {
              for (var e = t ? this : this.timeline; e; )
                (e._dirty = !0), (e = e.timeline);
              return this;
            }),
            (a._swapSelfInParams = function (t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i;
            }),
            (a._callback = function (t) {
              var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
              switch (n ? n.length : 0) {
                case 0:
                  i.call(r);
                  break;
                case 1:
                  i.call(r, n[0]);
                  break;
                case 2:
                  i.call(r, n[0], n[1]);
                  break;
                default:
                  i.apply(r, n);
              }
            }),
            (a.eventCallback = function (t, e, i, n) {
              if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e
                  ? delete r[t]
                  : ((r[t] = e),
                    (r[t + "Params"] =
                      d(i) && -1 !== i.join("").indexOf("{self}")
                        ? this._swapSelfInParams(i)
                        : i),
                    (r[t + "Scope"] = n)),
                  "onUpdate" === t && (this._onUpdate = e);
              }
              return this;
            }),
            (a.delay = function (t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                    this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (a.duration = function (t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                    this._time > 0 &&
                    this._time < this._duration &&
                    0 !== t &&
                    this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration);
            }),
            (a.totalDuration = function (t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              );
            }),
            (a.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time;
            }),
            (a.totalTime = function (t, e, i) {
              if ((u || l.wake(), !arguments.length)) return this._totalTime;
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration();
                  var n = this._totalDuration,
                    r = this._timeline;
                  if (
                    (t > n && !i && (t = n),
                    (this._startTime =
                      (this._paused ? this._pauseTime : r._time) -
                      (this._reversed ? n - t : t) / this._timeScale),
                    r._dirty || this._uncache(!1),
                    r._timeline)
                  )
                    for (; r._timeline; )
                      r._timeline._time !==
                        (r._startTime + r._totalTime) / r._timeScale &&
                        r.totalTime(r._totalTime, !0),
                        (r = r._timeline);
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime === t && 0 !== this._duration) ||
                    (M.length && G(), this.render(t, e, !1), M.length && G());
              }
              return this;
            }),
            (a.progress = a.totalProgress =
              function (t, e) {
                var i = this.duration();
                return arguments.length
                  ? this.totalTime(i * t, e)
                  : i
                  ? this._time / i
                  : this.ratio;
              }),
            (a.startTime = function (t) {
              return arguments.length
                ? (t !== this._startTime &&
                    ((this._startTime = t),
                    this.timeline &&
                      this.timeline._sortChildren &&
                      this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime;
            }),
            (a.endTime = function (t) {
              return (
                this._startTime +
                (0 != t ? this.totalDuration() : this.duration()) /
                  this._timeScale
              );
            }),
            (a.timeScale = function (t) {
              if (!arguments.length) return this._timeScale;
              var e, i;
              for (
                t = t || 1e-10,
                  this._timeline &&
                    this._timeline.smoothChildTiming &&
                    ((i =
                      (e = this._pauseTime) || 0 === e
                        ? e
                        : this._timeline.totalTime()),
                    (this._startTime =
                      i - ((i - this._startTime) * this._timeScale) / t)),
                  this._timeScale = t,
                  i = this.timeline;
                i && i.timeline;

              )
                (i._dirty = !0), i.totalDuration(), (i = i.timeline);
              return this;
            }),
            (a.reversed = function (t) {
              return arguments.length
                ? (t != this._reversed &&
                    ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed;
            }),
            (a.paused = function (t) {
              if (!arguments.length) return this._paused;
              var e,
                i,
                n = this._timeline;
              return (
                t != this._paused &&
                  n &&
                  (u || t || l.wake(),
                  (i = (e = n.rawTime()) - this._pauseTime),
                  !t &&
                    n.smoothChildTiming &&
                    ((this._startTime += i), this._uncache(!1)),
                  (this._pauseTime = t ? e : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                    0 !== i &&
                    this._initted &&
                    this.duration() &&
                    ((e = n.smoothChildTiming
                      ? this._totalTime
                      : (e - this._startTime) / this._timeScale),
                    this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
              );
            });
          var E = v("core.SimpleTimeline", function (t) {
            O.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((a = E.prototype = new O()).constructor = E),
            (a.kill()._gc = !1),
            (a._first = a._last = a._recent = null),
            (a._sortChildren = !1),
            (a.add = a.insert =
              function (t, e, i, n) {
                var r, s;
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (r = this._last),
                  this._sortChildren)
                )
                  for (s = t._startTime; r && r._startTime > s; ) r = r._prev;
                return (
                  r
                    ? ((t._next = r._next), (r._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = r),
                  (this._recent = t),
                  this._timeline && this._uncache(!0),
                  this
                );
              }),
            (a._remove = function (t, e) {
              return (
                t.timeline === this &&
                  (e || t._enabled(!1, !0),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._first === t && (this._first = t._next),
                  t._next
                    ? (t._next._prev = t._prev)
                    : this._last === t && (this._last = t._prev),
                  (t._next = t._prev = t.timeline = null),
                  t === this._recent && (this._recent = this._last),
                  this._timeline && this._uncache(!0)),
                this
              );
            }),
            (a.render = function (t, e, i) {
              var n,
                r = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                (n = r._next),
                  (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
                    (r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i)),
                  (r = n);
            }),
            (a.rawTime = function () {
              return u || l.wake(), this._totalTime;
            });
          var D = v(
              "TweenLite",
              function (e, i, n) {
                if (
                  (O.call(this, i, n),
                  (this.render = D.prototype.render),
                  null == e)
                )
                  throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                var r,
                  s,
                  o,
                  a =
                    e.jquery ||
                    (e.length &&
                      e !== t &&
                      e[0] &&
                      (e[0] === t ||
                        (e[0].nodeType && e[0].style && !e.nodeType))),
                  l = this.vars.overwrite;
                if (
                  ((this._overwrite = l =
                    null == l
                      ? W[D.defaultOverwrite]
                      : "number" == typeof l
                      ? l >> 0
                      : W[l]),
                  (a || e instanceof Array || (e.push && d(e))) &&
                    "number" != typeof e[0])
                )
                  for (
                    this._targets = o = f(e),
                      this._propLookup = [],
                      this._siblings = [],
                      r = 0;
                    r < o.length;
                    r++
                  )
                    (s = o[r])
                      ? "string" != typeof s
                        ? s.length &&
                          s !== t &&
                          s[0] &&
                          (s[0] === t ||
                            (s[0].nodeType && s[0].style && !s.nodeType))
                          ? (o.splice(r--, 1),
                            (this._targets = o = o.concat(f(s))))
                          : ((this._siblings[r] = Z(s, this, !1)),
                            1 === l &&
                              this._siblings[r].length > 1 &&
                              J(s, this, null, 1, this._siblings[r]))
                        : "string" == typeof (s = o[r--] = D.selector(s)) &&
                          o.splice(r + 1, 1)
                      : o.splice(r--, 1);
                else
                  (this._propLookup = {}),
                    (this._siblings = Z(e, this, !1)),
                    1 === l &&
                      this._siblings.length > 1 &&
                      J(e, this, null, 1, this._siblings);
                (this.vars.immediateRender ||
                  (0 === i &&
                    0 === this._delay &&
                    !1 !== this.vars.immediateRender)) &&
                  ((this._time = -1e-10),
                  this.render(Math.min(0, -this._delay)));
              },
              !0
            ),
            R = function (e) {
              return (
                e &&
                e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
              );
            };
          ((a = D.prototype = new O()).constructor = D),
            (a.kill()._gc = !1),
            (a.ratio = 0),
            (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
            (a._notifyPluginsOfEnabled = a._lazy = !1),
            (D.version = "2.0.2"),
            (D.defaultEase = a._ease = new b(null, null, 1, 1)),
            (D.defaultOverwrite = "auto"),
            (D.ticker = l),
            (D.autoSleep = 120),
            (D.lagSmoothing = function (t, e) {
              l.lagSmoothing(t, e);
            }),
            (D.selector =
              t.$ ||
              t.jQuery ||
              function (e) {
                var i = t.$ || t.jQuery;
                return i
                  ? ((D.selector = i), i(e))
                  : (n || (n = t.document),
                    n
                      ? n.querySelectorAll
                        ? n.querySelectorAll(e)
                        : n.getElementById(
                            "#" === e.charAt(0) ? e.substr(1) : e
                          )
                      : e);
              });
          var M = [],
            j = {},
            L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = /[\+-]=-?[\.\d]/,
            I = function (t) {
              for (var e, i = this._firstPT; i; )
                (e = i.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join("")
                    : this.start
                  : i.c * t + i.s),
                  i.m
                    ? (e = i.m.call(
                        this._tween,
                        e,
                        this._target || i.t,
                        this._tween
                      ))
                    : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f
                    ? i.fp
                      ? i.t[i.p](i.fp, e)
                      : i.t[i.p](e)
                    : (i.t[i.p] = e),
                  (i = i._next);
            },
            F = function (t, e, i, n) {
              var r,
                s,
                o,
                a,
                l,
                u,
                c,
                h = [],
                f = 0,
                p = "",
                d = 0;
              for (
                h.start = t,
                  h.end = e,
                  t = h[0] = t + "",
                  e = h[1] = e + "",
                  i && (i(h), (t = h[0]), (e = h[1])),
                  h.length = 0,
                  r = t.match(L) || [],
                  s = e.match(L) || [],
                  n &&
                    ((n._next = null),
                    (n.blob = 1),
                    (h._firstPT = h._applyPT = n)),
                  l = s.length,
                  a = 0;
                a < l;
                a++
              )
                (c = s[a]),
                  (p += (u = e.substr(f, e.indexOf(c, f) - f)) || !a ? u : ","),
                  (f += u.length),
                  d ? (d = (d + 1) % 5) : "rgba(" === u.substr(-5) && (d = 1),
                  c === r[a] || r.length <= a
                    ? (p += c)
                    : (p && (h.push(p), (p = "")),
                      (o = parseFloat(r[a])),
                      h.push(o),
                      (h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: o,
                        c:
                          ("=" === c.charAt(1)
                            ? parseInt(c.charAt(0) + "1", 10) *
                              parseFloat(c.substr(2))
                            : parseFloat(c) - o) || 0,
                        f: 0,
                        m: d && d < 4 ? Math.round : 0,
                      })),
                  (f += c.length);
              return (
                (p += e.substr(f)) && h.push(p),
                (h.setRatio = I),
                N.test(e) && (h.end = null),
                h
              );
            },
            q = function (t, e, i, n, r, s, o, a, l) {
              "function" == typeof n && (n = n(l || 0, t));
              var u = typeof t[e],
                c =
                  "function" !== u
                    ? ""
                    : e.indexOf("set") ||
                      "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3),
                h = "get" !== i ? i : c ? (o ? t[c](o) : t[c]()) : t[e],
                f = "string" == typeof n && "=" === n.charAt(1),
                p = {
                  t: t,
                  p: e,
                  s: h,
                  f: "function" === u,
                  pg: 0,
                  n: r || e,
                  m: s ? ("function" == typeof s ? s : Math.round) : 0,
                  pr: 0,
                  c: f
                    ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2))
                    : parseFloat(n) - h || 0,
                };
              if (
                (("number" != typeof h || ("number" != typeof n && !f)) &&
                  (o ||
                  isNaN(h) ||
                  (!f && isNaN(n)) ||
                  "boolean" == typeof h ||
                  "boolean" == typeof n
                    ? ((p.fp = o),
                      (p = {
                        t: F(
                          h,
                          f
                            ? parseFloat(p.s) +
                                p.c +
                                (p.s + "").replace(/[0-9\-\.]/g, "")
                            : n,
                          a || D.defaultStringFilter,
                          p
                        ),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0,
                      }))
                    : ((p.s = parseFloat(h)),
                      f || (p.c = parseFloat(n) - p.s || 0))),
                p.c)
              )
                return (
                  (p._next = this._firstPT) && (p._next._prev = p),
                  (this._firstPT = p),
                  p
                );
            },
            z = (D._internals = {
              isArray: d,
              isSelector: R,
              lazyTweens: M,
              blobDif: F,
            }),
            B = (D._plugins = {}),
            H = (z.tweenLookup = {}),
            X = 0,
            $ = (z.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
            }),
            W = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0,
            },
            Y = (O._rootFramesTimeline = new E()),
            U = (O._rootTimeline = new E()),
            V = 30,
            G = (z.lazyRender = function () {
              var t,
                e = M.length;
              for (j = {}; --e > -1; )
                (t = M[e]) &&
                  !1 !== t._lazy &&
                  (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
              M.length = 0;
            });
          (U._startTime = l.time),
            (Y._startTime = l.frame),
            (U._active = Y._active = !0),
            setTimeout(G, 1),
            (O._updateRoot = D.render =
              function () {
                var t, e, i;
                if (
                  (M.length && G(),
                  U.render((l.time - U._startTime) * U._timeScale, !1, !1),
                  Y.render((l.frame - Y._startTime) * Y._timeScale, !1, !1),
                  M.length && G(),
                  l.frame >= V)
                ) {
                  for (i in ((V = l.frame + (parseInt(D.autoSleep, 10) || 120)),
                  H)) {
                    for (t = (e = H[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i];
                  }
                  if (
                    (!(i = U._first) || i._paused) &&
                    D.autoSleep &&
                    !Y._first &&
                    1 === l._listeners.tick.length
                  ) {
                    for (; i && i._paused; ) i = i._next;
                    i || l.sleep();
                  }
                }
              }),
            l.addEventListener("tick", O._updateRoot);
          var Z = function (t, e, i) {
              var n,
                r,
                s = t._gsTweenID;
              if (
                (H[s || (t._gsTweenID = s = "t" + X++)] ||
                  (H[s] = { target: t, tweens: [] }),
                e && (((n = H[s].tweens)[(r = n.length)] = e), i))
              )
                for (; --r > -1; ) n[r] === e && n.splice(r, 1);
              return H[s].tweens;
            },
            Q = function (t, e, i, n) {
              var r,
                s,
                o = t.vars.onOverwrite;
              return (
                o && (r = o(t, e, i, n)),
                (o = D.onOverwrite) && (s = o(t, e, i, n)),
                !1 !== r && !1 !== s
              );
            },
            J = function (t, e, i, n, r) {
              var s, o, a, l;
              if (1 === n || n >= 4) {
                for (l = r.length, s = 0; s < l; s++)
                  if ((a = r[s]) !== e)
                    a._gc || (a._kill(null, t, e) && (o = !0));
                  else if (5 === n) break;
                return o;
              }
              var u,
                c = e._startTime + 1e-10,
                h = [],
                f = 0,
                p = 0 === e._duration;
              for (s = r.length; --s > -1; )
                (a = r[s]) === e ||
                  a._gc ||
                  a._paused ||
                  (a._timeline !== e._timeline
                    ? ((u = u || K(e, 0, p)), 0 === K(a, u, p) && (h[f++] = a))
                    : a._startTime <= c &&
                      a._startTime + a.totalDuration() / a._timeScale > c &&
                      (((p || !a._initted) && c - a._startTime <= 2e-10) ||
                        (h[f++] = a)));
              for (s = f; --s > -1; )
                if (
                  ((l = (a = h[s])._firstPT),
                  2 === n && a._kill(i, t, e) && (o = !0),
                  2 !== n || (!a._firstPT && a._initted && l))
                ) {
                  if (2 !== n && !Q(a, e)) continue;
                  a._enabled(!1, !1) && (o = !0);
                }
              return o;
            },
            K = function (t, e, i) {
              for (
                var n = t._timeline, r = n._timeScale, s = t._startTime;
                n._timeline;

              ) {
                if (((s += n._startTime), (r *= n._timeScale), n._paused))
                  return -100;
                n = n._timeline;
              }
              return (s /= r) > e
                ? s - e
                : (i && s === e) || (!t._initted && s - e < 2e-10)
                ? 1e-10
                : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10
                ? 0
                : s - e - 1e-10;
            };
          (a._init = function () {
            var t,
              e,
              i,
              n,
              r,
              s,
              o = this.vars,
              a = this._overwrittenProps,
              l = this._duration,
              u = !!o.immediateRender,
              c = o.ease;
            if (o.startAt) {
              for (n in (this._startAt &&
                (this._startAt.render(-1, !0), this._startAt.kill()),
              (r = {}),
              o.startAt))
                r[n] = o.startAt[n];
              if (
                ((r.data = "isStart"),
                (r.overwrite = !1),
                (r.immediateRender = !0),
                (r.lazy = u && !1 !== o.lazy),
                (r.startAt = r.delay = null),
                (r.onUpdate = o.onUpdate),
                (r.onUpdateParams = o.onUpdateParams),
                (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
                (this._startAt = D.to(this.target || {}, 0, r)),
                u)
              )
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return;
            } else if (o.runBackwards && 0 !== l)
              if (this._startAt)
                this._startAt.render(-1, !0),
                  this._startAt.kill(),
                  (this._startAt = null);
              else {
                for (n in (0 !== this._time && (u = !1), (i = {}), o))
                  ($[n] && "autoCSS" !== n) || (i[n] = o[n]);
                if (
                  ((i.overwrite = 0),
                  (i.data = "isFromStart"),
                  (i.lazy = u && !1 !== o.lazy),
                  (i.immediateRender = u),
                  (this._startAt = D.to(this.target, 0, i)),
                  u)
                ) {
                  if (0 === this._time) return;
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null);
              }
            if (
              ((this._ease = c =
                c
                  ? c instanceof b
                    ? c
                    : "function" == typeof c
                    ? new b(c, o.easeParams)
                    : x[c] || D.defaultEase
                  : D.defaultEase),
              o.easeParams instanceof Array &&
                c.config &&
                (this._ease = c.config.apply(c, o.easeParams)),
              (this._easeType = this._ease._type),
              (this._easePower = this._ease._power),
              (this._firstPT = null),
              this._targets)
            )
              for (s = this._targets.length, t = 0; t < s; t++)
                this._initProps(
                  this._targets[t],
                  (this._propLookup[t] = {}),
                  this._siblings[t],
                  a ? a[t] : null,
                  t
                ) && (e = !0);
            else
              e = this._initProps(
                this.target,
                this._propLookup,
                this._siblings,
                a,
                0
              );
            if (
              (e && D._onPluginEvent("_onInitAllProps", this),
              a &&
                (this._firstPT ||
                  ("function" != typeof this.target && this._enabled(!1, !1))),
              o.runBackwards)
            )
              for (i = this._firstPT; i; )
                (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = o.onUpdate), (this._initted = !0);
          }),
            (a._initProps = function (e, i, n, r, s) {
              var o, a, l, u, c, h;
              if (null == e) return !1;
              for (o in (j[e._gsTweenID] && G(),
              this.vars.css ||
                (e.style &&
                  e !== t &&
                  e.nodeType &&
                  B.css &&
                  !1 !== this.vars.autoCSS &&
                  (function (t, e) {
                    var i,
                      n = {};
                    for (i in t)
                      $[i] ||
                        (i in e &&
                          "transform" !== i &&
                          "x" !== i &&
                          "y" !== i &&
                          "width" !== i &&
                          "height" !== i &&
                          "className" !== i &&
                          "border" !== i) ||
                        !(!B[i] || (B[i] && B[i]._autoCSS)) ||
                        ((n[i] = t[i]), delete t[i]);
                    t.css = n;
                  })(this.vars, e)),
              this.vars))
                if (((h = this.vars[o]), $[o]))
                  h &&
                    (h instanceof Array || (h.push && d(h))) &&
                    -1 !== h.join("").indexOf("{self}") &&
                    (this.vars[o] = h = this._swapSelfInParams(h, this));
                else if (
                  B[o] &&
                  (u = new B[o]())._onInitTween(e, this.vars[o], this, s)
                ) {
                  for (
                    this._firstPT = c =
                      {
                        _next: this._firstPT,
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: u._priority,
                        m: 0,
                      },
                      a = u._overwriteProps.length;
                    --a > -1;

                  )
                    i[u._overwriteProps[a]] = this._firstPT;
                  (u._priority || u._onInitAllProps) && (l = !0),
                    (u._onDisable || u._onEnable) &&
                      (this._notifyPluginsOfEnabled = !0),
                    c._next && (c._next._prev = c);
                } else
                  i[o] = q.call(
                    this,
                    e,
                    o,
                    "get",
                    h,
                    o,
                    0,
                    null,
                    this.vars.stringFilter,
                    s
                  );
              return r && this._kill(r, e)
                ? this._initProps(e, i, n, r, s)
                : this._overwrite > 1 &&
                  this._firstPT &&
                  n.length > 1 &&
                  J(e, this, i, this._overwrite, n)
                ? (this._kill(i, e), this._initProps(e, i, n, r, s))
                : (this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration)) &&
                    (j[e._gsTweenID] = !0),
                  l);
            }),
            (a.render = function (t, e, i) {
              var n,
                r,
                s,
                o,
                a = this._time,
                l = this._duration,
                u = this._rawPrevTime;
              if (t >= l - 1e-7 && t >= 0)
                (this._totalTime = this._time = l),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(1)
                    : 1),
                  this._reversed ||
                    ((n = !0),
                    (r = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (u < 0 ||
                      (t <= 0 && t >= -1e-7) ||
                      (1e-10 === u && "isPause" !== this.data)) &&
                      u !== t &&
                      ((i = !0), u > 1e-10 && (r = "onReverseComplete")),
                    (this._rawPrevTime = o = !e || t || u === t ? t : 1e-10));
              else if (t < 1e-7)
                (this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== a || (0 === l && u > 0)) &&
                    ((r = "onReverseComplete"), (n = this._reversed)),
                  t < 0 &&
                    ((this._active = !1),
                    0 === l &&
                      (this._initted || !this.vars.lazy || i) &&
                      (u >= 0 &&
                        (1e-10 !== u || "isPause" !== this.data) &&
                        (i = !0),
                      (this._rawPrevTime = o =
                        !e || t || u === t ? t : 1e-10))),
                  (!this._initted ||
                    (this._startAt && this._startAt.progress())) &&
                    (i = !0);
              else if (((this._totalTime = this._time = t), this._easeType)) {
                var c = t / l,
                  h = this._easeType,
                  f = this._easePower;
                (1 === h || (3 === h && c >= 0.5)) && (c = 1 - c),
                  3 === h && (c *= 2),
                  1 === f
                    ? (c *= c)
                    : 2 === f
                    ? (c *= c * c)
                    : 3 === f
                    ? (c *= c * c * c)
                    : 4 === f && (c *= c * c * c * c),
                  (this.ratio =
                    1 === h
                      ? 1 - c
                      : 2 === h
                      ? c
                      : t / l < 0.5
                      ? c / 2
                      : 1 - c / 2);
              } else this.ratio = this._ease.getRatio(t / l);
              if (this._time !== a || i) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return;
                  if (
                    !i &&
                    this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration))
                  )
                    return (
                      (this._time = this._totalTime = a),
                      (this._rawPrevTime = u),
                      M.push(this),
                      void (this._lazy = [t, e])
                    );
                  this._time && !n
                    ? (this.ratio = this._ease.getRatio(this._time / l))
                    : n &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(
                        0 === this._time ? 0 : 1
                      ));
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active ||
                      (!this._paused &&
                        this._time !== a &&
                        t >= 0 &&
                        (this._active = !0)),
                    0 === a &&
                      (this._startAt &&
                        (t >= 0
                          ? this._startAt.render(t, !0, i)
                          : r || (r = "_dummyGS")),
                      this.vars.onStart &&
                        ((0 === this._time && 0 !== l) ||
                          e ||
                          this._callback("onStart"))),
                    s = this._firstPT;
                  s;

                )
                  s.f
                    ? s.t[s.p](s.c * this.ratio + s.s)
                    : (s.t[s.p] = s.c * this.ratio + s.s),
                    (s = s._next);
                this._onUpdate &&
                  (t < 0 &&
                    this._startAt &&
                    -1e-4 !== t &&
                    this._startAt.render(t, !0, i),
                  e ||
                    ((this._time !== a || n || i) &&
                      this._callback("onUpdate"))),
                  r &&
                    ((this._gc && !i) ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      n &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[r] && this._callback(r),
                      0 === l &&
                        1e-10 === this._rawPrevTime &&
                        1e-10 !== o &&
                        (this._rawPrevTime = 0)));
              }
            }),
            (a._kill = function (t, e, i) {
              if (
                ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
              )
                return (this._lazy = !1), this._enabled(!1, !1);
              e =
                "string" != typeof e
                  ? e || this._targets || this.target
                  : D.selector(e) || e;
              var n,
                r,
                s,
                o,
                a,
                l,
                u,
                c,
                h,
                f =
                  i &&
                  this._time &&
                  i._startTime === this._startTime &&
                  this._timeline === i._timeline,
                p = this._firstPT;
              if ((d(e) || R(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                  this._kill(t, e[n], i) && (l = !0);
              else {
                if (this._targets) {
                  for (n = this._targets.length; --n > -1; )
                    if (e === this._targets[n]) {
                      (a = this._propLookup[n] || {}),
                        (this._overwrittenProps = this._overwrittenProps || []),
                        (r = this._overwrittenProps[n] =
                          t ? this._overwrittenProps[n] || {} : "all");
                      break;
                    }
                } else {
                  if (e !== this.target) return !1;
                  (a = this._propLookup),
                    (r = this._overwrittenProps =
                      t ? this._overwrittenProps || {} : "all");
                }
                if (a) {
                  if (
                    ((u = t || a),
                    (c =
                      t !== r &&
                      "all" !== r &&
                      t !== a &&
                      ("object" != typeof t || !t._tempKill)),
                    i && (D.onOverwrite || this.vars.onOverwrite))
                  ) {
                    for (s in u) a[s] && (h || (h = []), h.push(s));
                    if ((h || !t) && !Q(this, i, e, h)) return !1;
                  }
                  for (s in u)
                    (o = a[s]) &&
                      (f && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                      o.pg && o.t._kill(u) && (l = !0),
                      (o.pg && 0 !== o.t._overwriteProps.length) ||
                        (o._prev
                          ? (o._prev._next = o._next)
                          : o === this._firstPT && (this._firstPT = o._next),
                        o._next && (o._next._prev = o._prev),
                        (o._next = o._prev = null)),
                      delete a[s]),
                      c && (r[s] = 1);
                  !this._firstPT && this._initted && p && this._enabled(!1, !1);
                }
              }
              return l;
            }),
            (a.invalidate = function () {
              return (
                this._notifyPluginsOfEnabled &&
                  D._onPluginEvent("_onDisable", this),
                (this._firstPT =
                  this._overwrittenProps =
                  this._startAt =
                  this._onUpdate =
                    null),
                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                (this._propLookup = this._targets ? {} : []),
                O.prototype.invalidate.call(this),
                this.vars.immediateRender &&
                  ((this._time = -1e-10),
                  this.render(Math.min(0, -this._delay))),
                this
              );
            }),
            (a._enabled = function (t, e) {
              if ((u || l.wake(), t && this._gc)) {
                var i,
                  n = this._targets;
                if (n)
                  for (i = n.length; --i > -1; )
                    this._siblings[i] = Z(n[i], this, !0);
                else this._siblings = Z(this.target, this, !0);
              }
              return (
                O.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                  D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              );
            }),
            (D.to = function (t, e, i) {
              return new D(t, e, i);
            }),
            (D.from = function (t, e, i) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                new D(t, e, i)
              );
            }),
            (D.fromTo = function (t, e, i, n) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                new D(t, e, n)
              );
            }),
            (D.delayedCall = function (t, e, i, n, r) {
              return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0,
              });
            }),
            (D.set = function (t, e) {
              return new D(t, 0, e);
            }),
            (D.getTweensOf = function (t, e) {
              if (null == t) return [];
              var i, n, r, s;
              if (
                ((t = "string" != typeof t ? t : D.selector(t) || t),
                (d(t) || R(t)) && "number" != typeof t[0])
              ) {
                for (i = t.length, n = []; --i > -1; )
                  n = n.concat(D.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                  for (s = n[i], r = i; --r > -1; )
                    s === n[r] && n.splice(i, 1);
              } else if (t._gsTweenID)
                for (i = (n = Z(t).concat()).length; --i > -1; )
                  (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
              return n || [];
            }),
            (D.killTweensOf = D.killDelayedCallsTo =
              function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1; )
                  n[r]._kill(i, t);
              });
          var tt = v(
            "plugins.TweenPlugin",
            function (t, e) {
              (this._overwriteProps = (t || "").split(",")),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = tt.prototype);
            },
            !0
          );
          if (
            ((a = tt.prototype),
            (tt.version = "1.19.0"),
            (tt.API = 2),
            (a._firstPT = null),
            (a._addTween = q),
            (a.setRatio = I),
            (a._kill = function (t) {
              var e,
                i = this._overwriteProps,
                n = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; n; )
                null != t[n.n] &&
                  (n._next && (n._next._prev = n._prev),
                  n._prev
                    ? ((n._prev._next = n._next), (n._prev = null))
                    : this._firstPT === n && (this._firstPT = n._next)),
                  (n = n._next);
              return !1;
            }),
            (a._mod = a._roundProps =
              function (t) {
                for (var e, i = this._firstPT; i; )
                  (e =
                    t[this._propName] ||
                    (null != i.n &&
                      t[i.n.split(this._propName + "_").join("")])) &&
                    "function" == typeof e &&
                    (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                    (i = i._next);
              }),
            (D._onPluginEvent = function (t, e) {
              var i,
                n,
                r,
                s,
                o,
                a = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; a; ) {
                  for (o = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
                  (a._prev = n ? n._prev : s) ? (a._prev._next = a) : (r = a),
                    (a._next = n) ? (n._prev = a) : (s = a),
                    (a = o);
                }
                a = e._firstPT = r;
              }
              for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                  (a = a._next);
              return i;
            }),
            (tt.activate = function (t) {
              for (var e = t.length; --e > -1; )
                t[e].API === tt.API && (B[new t[e]()._propName] = t[e]);
              return !0;
            }),
            (g.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e,
                i = t.propName,
                n = t.priority || 0,
                r = t.overwriteProps,
                s = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps",
                },
                o = v(
                  "plugins." +
                    i.charAt(0).toUpperCase() +
                    i.substr(1) +
                    "Plugin",
                  function () {
                    tt.call(this, i, n), (this._overwriteProps = r || []);
                  },
                  !0 === t.global
                ),
                a = (o.prototype = new tt(i));
              for (e in ((a.constructor = o), (o.API = t.API), s))
                "function" == typeof t[e] && (a[s[e]] = t[e]);
              return (o.version = t.version), tt.activate([o]), o;
            }),
            (s = t._gsQueue))
          ) {
            for (o = 0; o < s.length; o++) s[o]();
            for (a in m)
              m[a].func ||
                t.console.log("GSAP encountered missing dependency: " + a);
          }
          return (u = !1), D;
        })(r),
        o = r.GreenSockGlobals,
        a = o.com.greensock,
        l = a.core.SimpleTimeline,
        u = a.core.Animation,
        c = o.Ease,
        h = (o.Linear, o.Power1, o.Power2, o.Power3, o.Power4, o.TweenPlugin);
      a.events.EventDispatcher;
    }.call(this, i(5)(t), i(6)));
  },
  function (t, e, i) {
    var n;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    !(function (e, i) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports
        ? (t.exports = e.document
            ? i(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return i(t);
              })
        : i(e);
    })("undefined" != typeof window ? window : this, function (i, r) {
      "use strict";
      var s = [],
        o = i.document,
        a = Object.getPrototypeOf,
        l = s.slice,
        u = s.concat,
        c = s.push,
        h = s.indexOf,
        f = {},
        p = f.toString,
        d = f.hasOwnProperty,
        m = d.toString,
        _ = m.call(Object),
        g = {},
        v = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function (t) {
          return null != t && t === t.window;
        },
        b = { type: !0, src: !0, noModule: !0 };
      function x(t, e, i) {
        var n,
          r = (e = e || o).createElement("script");
        if (((r.text = t), i)) for (n in b) i[n] && (r[n] = i[n]);
        e.head.appendChild(r).parentNode.removeChild(r);
      }
      function w(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? f[p.call(t)] || "object"
          : typeof t;
      }
      var T = function (t, e) {
          return new T.fn.init(t, e);
        },
        k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function P(t) {
        var e = !!t && "length" in t && t.length,
          i = w(t);
        return (
          !v(t) &&
          !y(t) &&
          ("array" === i ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (T.fn = T.prototype =
        {
          jquery: "3.3.1",
          constructor: T,
          length: 0,
          toArray: function () {
            return l.call(this);
          },
          get: function (t) {
            return null == t
              ? l.call(this)
              : t < 0
              ? this[t + this.length]
              : this[t];
          },
          pushStack: function (t) {
            var e = T.merge(this.constructor(), t);
            return (e.prevObject = this), e;
          },
          each: function (t) {
            return T.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              T.map(this, function (e, i) {
                return t.call(e, i, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (t) {
            var e = this.length,
              i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: s.sort,
          splice: s.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var t,
              e,
              i,
              n,
              r,
              s,
              o = arguments[0] || {},
              a = 1,
              l = arguments.length,
              u = !1;
            for (
              "boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++),
                "object" == typeof o || v(o) || (o = {}),
                a === l && ((o = this), a--);
              a < l;
              a++
            )
              if (null != (t = arguments[a]))
                for (e in t)
                  (i = o[e]),
                    o !== (n = t[e]) &&
                      (u && n && (T.isPlainObject(n) || (r = Array.isArray(n)))
                        ? (r
                            ? ((r = !1), (s = i && Array.isArray(i) ? i : []))
                            : (s = i && T.isPlainObject(i) ? i : {}),
                          (o[e] = T.extend(u, s, n)))
                        : void 0 !== n && (o[e] = n));
            return o;
          }),
        T.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, i;
            return (
              !(!t || "[object Object]" !== p.call(t)) &&
              (!(e = a(t)) ||
                ("function" ==
                  typeof (i = d.call(e, "constructor") && e.constructor) &&
                  m.call(i) === _))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t) {
            x(t);
          },
          each: function (t, e) {
            var i,
              n = 0;
            if (P(t))
              for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t;
          },
          trim: function (t) {
            return null == t ? "" : (t + "").replace(k, "");
          },
          makeArray: function (t, e) {
            var i = e || [];
            return (
              null != t &&
                (P(Object(t))
                  ? T.merge(i, "string" == typeof t ? [t] : t)
                  : c.call(i, t)),
              i
            );
          },
          inArray: function (t, e, i) {
            return null == e ? -1 : h.call(e, t, i);
          },
          merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++)
              t[r++] = e[n];
            return (t.length = r), t;
          },
          grep: function (t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++)
              !e(t[r], r) !== o && n.push(t[r]);
            return n;
          },
          map: function (t, e, i) {
            var n,
              r,
              s = 0,
              o = [];
            if (P(t))
              for (n = t.length; s < n; s++)
                null != (r = e(t[s], s, i)) && o.push(r);
            else for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
            return u.apply([], o);
          },
          guid: 1,
          support: g,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = s[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            f["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var C =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        (function (t) {
          var e,
            i,
            n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            m,
            _,
            g,
            v,
            y,
            b = "sizzle" + 1 * new Date(),
            x = t.document,
            w = 0,
            T = 0,
            k = ot(),
            P = ot(),
            C = ot(),
            S = function (t, e) {
              return t === e && (h = !0), 0;
            },
            O = {}.hasOwnProperty,
            A = [],
            E = A.pop,
            D = A.push,
            R = A.push,
            M = A.slice,
            j = function (t, e) {
              for (var i = 0, n = t.length; i < n; i++)
                if (t[i] === e) return i;
              return -1;
            },
            L =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F =
              "\\[" +
              N +
              "*(" +
              I +
              ")(?:" +
              N +
              "*([*^$|!~]?=)" +
              N +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              N +
              "*\\]",
            q =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              F +
              ")*)|.*)\\)|)",
            z = new RegExp(N + "+", "g"),
            B = new RegExp(
              "^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$",
              "g"
            ),
            H = new RegExp("^" + N + "*," + N + "*"),
            X = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            $ = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            W = new RegExp(q),
            Y = new RegExp("^" + I + "$"),
            U = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + F),
              PSEUDO: new RegExp("^" + q),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  N +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  N +
                  "*(?:([+-]|)" +
                  N +
                  "*(\\d+)|))" +
                  N +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + L + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  N +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  N +
                  "*((?:-\\d)?\\d*)" +
                  N +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            tt = function (t, e, i) {
              var n = "0x" + e - 65536;
              return n != n || i
                ? e
                : n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            nt = function () {
              f();
            },
            rt = vt(
              function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            R.apply((A = M.call(x.childNodes)), x.childNodes),
              A[x.childNodes.length].nodeType;
          } catch (t) {
            R = {
              apply: A.length
                ? function (t, e) {
                    D.apply(t, M.call(e));
                  }
                : function (t, e) {
                    for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                    t.length = i - 1;
                  },
            };
          }
          function st(t, e, n, r) {
            var s,
              a,
              u,
              c,
              h,
              d,
              g,
              v = e && e.ownerDocument,
              w = e ? e.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
            )
              return n;
            if (
              !r &&
              ((e ? e.ownerDocument || e : x) !== p && f(e), (e = e || p), m)
            ) {
              if (11 !== w && (h = Q.exec(t)))
                if ((s = h[1])) {
                  if (9 === w) {
                    if (!(u = e.getElementById(s))) return n;
                    if (u.id === s) return n.push(u), n;
                  } else if (
                    v &&
                    (u = v.getElementById(s)) &&
                    y(e, u) &&
                    u.id === s
                  )
                    return n.push(u), n;
                } else {
                  if (h[2]) return R.apply(n, e.getElementsByTagName(t)), n;
                  if (
                    (s = h[3]) &&
                    i.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return R.apply(n, e.getElementsByClassName(s)), n;
                }
              if (i.qsa && !C[t + " "] && (!_ || !_.test(t))) {
                if (1 !== w) (v = e), (g = t);
                else if ("object" !== e.nodeName.toLowerCase()) {
                  for (
                    (c = e.getAttribute("id"))
                      ? (c = c.replace(et, it))
                      : e.setAttribute("id", (c = b)),
                      a = (d = o(t)).length;
                    a--;

                  )
                    d[a] = "#" + c + " " + gt(d[a]);
                  (g = d.join(",")), (v = (J.test(t) && mt(e.parentNode)) || e);
                }
                if (g)
                  try {
                    return R.apply(n, v.querySelectorAll(g)), n;
                  } catch (t) {
                  } finally {
                    c === b && e.removeAttribute("id");
                  }
              }
            }
            return l(t.replace(B, "$1"), e, n, r);
          }
          function ot() {
            var t = [];
            return function e(i, r) {
              return (
                t.push(i + " ") > n.cacheLength && delete e[t.shift()],
                (e[i + " "] = r)
              );
            };
          }
          function at(t) {
            return (t[b] = !0), t;
          }
          function lt(t) {
            var e = p.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ut(t, e) {
            for (var i = t.split("|"), r = i.length; r--; )
              n.attrHandle[i[r]] = e;
          }
          function ct(t, e) {
            var i = e && t,
              n =
                i &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
            return t ? 1 : -1;
          }
          function ht(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ft(t) {
            return function (e) {
              var i = e.nodeName.toLowerCase();
              return ("input" === i || "button" === i) && e.type === t;
            };
          }
          function pt(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function dt(t) {
            return at(function (e) {
              return (
                (e = +e),
                at(function (i, n) {
                  for (var r, s = t([], i.length, e), o = s.length; o--; )
                    i[(r = s[o])] && (i[r] = !(n[r] = i[r]));
                })
              );
            });
          }
          function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((i = st.support = {}),
          (s = st.isXML =
            function (t) {
              var e = t && (t.ownerDocument || t).documentElement;
              return !!e && "HTML" !== e.nodeName;
            }),
          (f = st.setDocument =
            function (t) {
              var e,
                r,
                o = t ? t.ownerDocument || t : x;
              return o !== p && 9 === o.nodeType && o.documentElement
                ? ((d = (p = o).documentElement),
                  (m = !s(p)),
                  x !== p &&
                    (r = p.defaultView) &&
                    r.top !== r &&
                    (r.addEventListener
                      ? r.addEventListener("unload", nt, !1)
                      : r.attachEvent && r.attachEvent("onunload", nt)),
                  (i.attributes = lt(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (i.getElementsByTagName = lt(function (t) {
                    return (
                      t.appendChild(p.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (i.getElementsByClassName = Z.test(p.getElementsByClassName)),
                  (i.getById = lt(function (t) {
                    return (
                      (d.appendChild(t).id = b),
                      !p.getElementsByName || !p.getElementsByName(b).length
                    );
                  })),
                  i.getById
                    ? ((n.filter.ID = function (t) {
                        var e = t.replace(K, tt);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                      (n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && m) {
                          var i = e.getElementById(t);
                          return i ? [i] : [];
                        }
                      }))
                    : ((n.filter.ID = function (t) {
                        var e = t.replace(K, tt);
                        return function (t) {
                          var i =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return i && i.value === e;
                        };
                      }),
                      (n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && m) {
                          var i,
                            n,
                            r,
                            s = e.getElementById(t);
                          if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === t)
                              return [s];
                            for (
                              r = e.getElementsByName(t), n = 0;
                              (s = r[n++]);

                            )
                              if (
                                (i = s.getAttributeNode("id")) &&
                                i.value === t
                              )
                                return [s];
                          }
                          return [];
                        }
                      })),
                  (n.find.TAG = i.getElementsByTagName
                    ? function (t, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : i.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, e) {
                        var i,
                          n = [],
                          r = 0,
                          s = e.getElementsByTagName(t);
                        if ("*" === t) {
                          for (; (i = s[r++]); ) 1 === i.nodeType && n.push(i);
                          return n;
                        }
                        return s;
                      }),
                  (n.find.CLASS =
                    i.getElementsByClassName &&
                    function (t, e) {
                      if (void 0 !== e.getElementsByClassName && m)
                        return e.getElementsByClassName(t);
                    }),
                  (g = []),
                  (_ = []),
                  (i.qsa = Z.test(p.querySelectorAll)) &&
                    (lt(function (t) {
                      (d.appendChild(t).innerHTML =
                        "<a id='" +
                        b +
                        "'></a><select id='" +
                        b +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          _.push("[*^$]=" + N + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                          _.push("\\[" + N + "*(?:value|" + L + ")"),
                        t.querySelectorAll("[id~=" + b + "-]").length ||
                          _.push("~="),
                        t.querySelectorAll(":checked").length ||
                          _.push(":checked"),
                        t.querySelectorAll("a#" + b + "+*").length ||
                          _.push(".#.+[+~]");
                    }),
                    lt(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = p.createElement("input");
                      e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                          _.push("name" + N + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                          _.push(":enabled", ":disabled"),
                        (d.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                          _.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        _.push(",.*:");
                    })),
                  (i.matchesSelector = Z.test(
                    (v =
                      d.matches ||
                      d.webkitMatchesSelector ||
                      d.mozMatchesSelector ||
                      d.oMatchesSelector ||
                      d.msMatchesSelector)
                  )) &&
                    lt(function (t) {
                      (i.disconnectedMatch = v.call(t, "*")),
                        v.call(t, "[s!='']:x"),
                        g.push("!=", q);
                    }),
                  (_ = _.length && new RegExp(_.join("|"))),
                  (g = g.length && new RegExp(g.join("|"))),
                  (e = Z.test(d.compareDocumentPosition)),
                  (y =
                    e || Z.test(d.contains)
                      ? function (t, e) {
                          var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                          return (
                            t === n ||
                            !(
                              !n ||
                              1 !== n.nodeType ||
                              !(i.contains
                                ? i.contains(n)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(n))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === t) return !0;
                          return !1;
                        }),
                  (S = e
                    ? function (t, e) {
                        if (t === e) return (h = !0), 0;
                        var n =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return (
                          n ||
                          (1 &
                            (n =
                              (t.ownerDocument || t) === (e.ownerDocument || e)
                                ? t.compareDocumentPosition(e)
                                : 1) ||
                          (!i.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                            ? t === p || (t.ownerDocument === x && y(x, t))
                              ? -1
                              : e === p || (e.ownerDocument === x && y(x, e))
                              ? 1
                              : c
                              ? j(c, t) - j(c, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (t, e) {
                        if (t === e) return (h = !0), 0;
                        var i,
                          n = 0,
                          r = t.parentNode,
                          s = e.parentNode,
                          o = [t],
                          a = [e];
                        if (!r || !s)
                          return t === p
                            ? -1
                            : e === p
                            ? 1
                            : r
                            ? -1
                            : s
                            ? 1
                            : c
                            ? j(c, t) - j(c, e)
                            : 0;
                        if (r === s) return ct(t, e);
                        for (i = t; (i = i.parentNode); ) o.unshift(i);
                        for (i = e; (i = i.parentNode); ) a.unshift(i);
                        for (; o[n] === a[n]; ) n++;
                        return n
                          ? ct(o[n], a[n])
                          : o[n] === x
                          ? -1
                          : a[n] === x
                          ? 1
                          : 0;
                      }),
                  p)
                : p;
            }),
          (st.matches = function (t, e) {
            return st(t, null, null, e);
          }),
          (st.matchesSelector = function (t, e) {
            if (
              ((t.ownerDocument || t) !== p && f(t),
              (e = e.replace($, "='$1']")),
              i.matchesSelector &&
                m &&
                !C[e + " "] &&
                (!g || !g.test(e)) &&
                (!_ || !_.test(e)))
            )
              try {
                var n = v.call(t, e);
                if (
                  n ||
                  i.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return n;
              } catch (t) {}
            return st(e, p, null, [t]).length > 0;
          }),
          (st.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && f(t), y(t, e);
          }),
          (st.attr = function (t, e) {
            (t.ownerDocument || t) !== p && f(t);
            var r = n.attrHandle[e.toLowerCase()],
              s =
                r && O.call(n.attrHandle, e.toLowerCase())
                  ? r(t, e, !m)
                  : void 0;
            return void 0 !== s
              ? s
              : i.attributes || !m
              ? t.getAttribute(e)
              : (s = t.getAttributeNode(e)) && s.specified
              ? s.value
              : null;
          }),
          (st.escape = function (t) {
            return (t + "").replace(et, it);
          }),
          (st.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (st.uniqueSort = function (t) {
            var e,
              n = [],
              r = 0,
              s = 0;
            if (
              ((h = !i.detectDuplicates),
              (c = !i.sortStable && t.slice(0)),
              t.sort(S),
              h)
            ) {
              for (; (e = t[s++]); ) e === t[s] && (r = n.push(s));
              for (; r--; ) t.splice(n[r], 1);
            }
            return (c = null), t;
          }),
          (r = st.getText =
            function (t) {
              var e,
                i = "",
                n = 0,
                s = t.nodeType;
              if (s) {
                if (1 === s || 9 === s || 11 === s) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) i += r(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
              } else for (; (e = t[n++]); ) i += r(e);
              return i;
            }),
          ((n = st.selectors =
            {
              cacheLength: 50,
              createPseudo: at,
              match: U,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(K, tt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(K, tt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || st.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && st.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    i = !t[6] && t[2];
                  return U.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : i &&
                          W.test(i) &&
                          (e = o(i, !0)) &&
                          (e = i.indexOf(")", i.length - e) - i.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(K, tt).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function (t) {
                  var e = k[t + " "];
                  return (
                    e ||
                    ((e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) &&
                      k(t, function (t) {
                        return e.test(
                          ("string" == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, e, i) {
                  return function (n) {
                    var r = st.attr(n, t);
                    return null == r
                      ? "!=" === e
                      : !e ||
                          ((r += ""),
                          "=" === e
                            ? r === i
                            : "!=" === e
                            ? r !== i
                            : "^=" === e
                            ? i && 0 === r.indexOf(i)
                            : "*=" === e
                            ? i && r.indexOf(i) > -1
                            : "$=" === e
                            ? i && r.slice(-i.length) === i
                            : "~=" === e
                            ? (" " + r.replace(z, " ") + " ").indexOf(i) > -1
                            : "|=" === e &&
                              (r === i ||
                                r.slice(0, i.length + 1) === i + "-"));
                  };
                },
                CHILD: function (t, e, i, n, r) {
                  var s = "nth" !== t.slice(0, 3),
                    o = "last" !== t.slice(-4),
                    a = "of-type" === e;
                  return 1 === n && 0 === r
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (e, i, l) {
                        var u,
                          c,
                          h,
                          f,
                          p,
                          d,
                          m = s !== o ? "nextSibling" : "previousSibling",
                          _ = e.parentNode,
                          g = a && e.nodeName.toLowerCase(),
                          v = !l && !a,
                          y = !1;
                        if (_) {
                          if (s) {
                            for (; m; ) {
                              for (f = e; (f = f[m]); )
                                if (
                                  a
                                    ? f.nodeName.toLowerCase() === g
                                    : 1 === f.nodeType
                                )
                                  return !1;
                              d = m = "only" === t && !d && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((d = [o ? _.firstChild : _.lastChild]), o && v)
                          ) {
                            for (
                              y =
                                (p =
                                  (u =
                                    (c =
                                      (h = (f = _)[b] || (f[b] = {}))[
                                        f.uniqueID
                                      ] || (h[f.uniqueID] = {}))[t] ||
                                    [])[0] === w && u[1]) && u[2],
                                f = p && _.childNodes[p];
                              (f =
                                (++p && f && f[m]) || (y = p = 0) || d.pop());

                            )
                              if (1 === f.nodeType && ++y && f === e) {
                                c[t] = [w, p, y];
                                break;
                              }
                          } else if (
                            (v &&
                              (y = p =
                                (u =
                                  (c =
                                    (h = (f = e)[b] || (f[b] = {}))[
                                      f.uniqueID
                                    ] || (h[f.uniqueID] = {}))[t] || [])[0] ===
                                  w && u[1]),
                            !1 === y)
                          )
                            for (
                              ;
                              (f =
                                (++p && f && f[m]) || (y = p = 0) || d.pop()) &&
                              ((a
                                ? f.nodeName.toLowerCase() !== g
                                : 1 !== f.nodeType) ||
                                !++y ||
                                (v &&
                                  ((c =
                                    (h = f[b] || (f[b] = {}))[f.uniqueID] ||
                                    (h[f.uniqueID] = {}))[t] = [w, y]),
                                f !== e));

                            );
                          return (y -= r) === n || (y % n == 0 && y / n >= 0);
                        }
                      };
                },
                PSEUDO: function (t, e) {
                  var i,
                    r =
                      n.pseudos[t] ||
                      n.setFilters[t.toLowerCase()] ||
                      st.error("unsupported pseudo: " + t);
                  return r[b]
                    ? r(e)
                    : r.length > 1
                    ? ((i = [t, t, "", e]),
                      n.setFilters.hasOwnProperty(t.toLowerCase())
                        ? at(function (t, i) {
                            for (var n, s = r(t, e), o = s.length; o--; )
                              t[(n = j(t, s[o]))] = !(i[n] = s[o]);
                          })
                        : function (t) {
                            return r(t, 0, i);
                          })
                    : r;
                },
              },
              pseudos: {
                not: at(function (t) {
                  var e = [],
                    i = [],
                    n = a(t.replace(B, "$1"));
                  return n[b]
                    ? at(function (t, e, i, r) {
                        for (var s, o = n(t, null, r, []), a = t.length; a--; )
                          (s = o[a]) && (t[a] = !(e[a] = s));
                      })
                    : function (t, r, s) {
                        return (
                          (e[0] = t), n(e, null, s, i), (e[0] = null), !i.pop()
                        );
                      };
                }),
                has: at(function (t) {
                  return function (e) {
                    return st(t, e).length > 0;
                  };
                }),
                contains: at(function (t) {
                  return (
                    (t = t.replace(K, tt)),
                    function (e) {
                      return (
                        (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                      );
                    }
                  );
                }),
                lang: at(function (t) {
                  return (
                    Y.test(t || "") || st.error("unsupported lang: " + t),
                    (t = t.replace(K, tt).toLowerCase()),
                    function (e) {
                      var i;
                      do {
                        if (
                          (i = m
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (i = i.toLowerCase()) === t ||
                            0 === i.indexOf(t + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var i = t.location && t.location.hash;
                  return i && i.slice(1) === e.id;
                },
                root: function (t) {
                  return t === d;
                },
                focus: function (t) {
                  return (
                    t === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: pt(!1),
                disabled: pt(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && !!t.checked) ||
                    ("option" === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !n.pseudos.empty(t);
                },
                header: function (t) {
                  return G.test(t.nodeName);
                },
                input: function (t) {
                  return V.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && "button" === t.type) || "button" === e
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: dt(function () {
                  return [0];
                }),
                last: dt(function (t, e) {
                  return [e - 1];
                }),
                eq: dt(function (t, e, i) {
                  return [i < 0 ? i + e : i];
                }),
                even: dt(function (t, e) {
                  for (var i = 0; i < e; i += 2) t.push(i);
                  return t;
                }),
                odd: dt(function (t, e) {
                  for (var i = 1; i < e; i += 2) t.push(i);
                  return t;
                }),
                lt: dt(function (t, e, i) {
                  for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
                  return t;
                }),
                gt: dt(function (t, e, i) {
                  for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                  return t;
                }),
              },
            }).pseudos.nth = n.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            n.pseudos[e] = ht(e);
          for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ft(e);
          function _t() {}
          function gt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n;
          }
          function vt(t, e, i) {
            var n = e.dir,
              r = e.next,
              s = r || n,
              o = i && "parentNode" === s,
              a = T++;
            return e.first
              ? function (e, i, r) {
                  for (; (e = e[n]); )
                    if (1 === e.nodeType || o) return t(e, i, r);
                  return !1;
                }
              : function (e, i, l) {
                  var u,
                    c,
                    h,
                    f = [w, a];
                  if (l) {
                    for (; (e = e[n]); )
                      if ((1 === e.nodeType || o) && t(e, i, l)) return !0;
                  } else
                    for (; (e = e[n]); )
                      if (1 === e.nodeType || o)
                        if (
                          ((c =
                            (h = e[b] || (e[b] = {}))[e.uniqueID] ||
                            (h[e.uniqueID] = {})),
                          r && r === e.nodeName.toLowerCase())
                        )
                          e = e[n] || e;
                        else {
                          if ((u = c[s]) && u[0] === w && u[1] === a)
                            return (f[2] = u[2]);
                          if (((c[s] = f), (f[2] = t(e, i, l)))) return !0;
                        }
                  return !1;
                };
          }
          function yt(t) {
            return t.length > 1
              ? function (e, i, n) {
                  for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
                  return !0;
                }
              : t[0];
          }
          function bt(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)
              (s = t[a]) && ((i && !i(s, n, r)) || (o.push(s), u && e.push(a)));
            return o;
          }
          function xt(t, e, i, n, r, s) {
            return (
              n && !n[b] && (n = xt(n)),
              r && !r[b] && (r = xt(r, s)),
              at(function (s, o, a, l) {
                var u,
                  c,
                  h,
                  f = [],
                  p = [],
                  d = o.length,
                  m =
                    s ||
                    (function (t, e, i) {
                      for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                      return i;
                    })(e || "*", a.nodeType ? [a] : a, []),
                  _ = !t || (!s && e) ? m : bt(m, f, t, a, l),
                  g = i ? (r || (s ? t : d || n) ? [] : o) : _;
                if ((i && i(_, g, a, l), n))
                  for (u = bt(g, p), n(u, [], a, l), c = u.length; c--; )
                    (h = u[c]) && (g[p[c]] = !(_[p[c]] = h));
                if (s) {
                  if (r || t) {
                    if (r) {
                      for (u = [], c = g.length; c--; )
                        (h = g[c]) && u.push((_[c] = h));
                      r(null, (g = []), u, l);
                    }
                    for (c = g.length; c--; )
                      (h = g[c]) &&
                        (u = r ? j(s, h) : f[c]) > -1 &&
                        (s[u] = !(o[u] = h));
                  }
                } else (g = bt(g === o ? g.splice(d, g.length) : g)), r ? r(null, o, g, l) : R.apply(o, g);
              })
            );
          }
          function wt(t) {
            for (
              var e,
                i,
                r,
                s = t.length,
                o = n.relative[t[0].type],
                a = o || n.relative[" "],
                l = o ? 1 : 0,
                c = vt(
                  function (t) {
                    return t === e;
                  },
                  a,
                  !0
                ),
                h = vt(
                  function (t) {
                    return j(e, t) > -1;
                  },
                  a,
                  !0
                ),
                f = [
                  function (t, i, n) {
                    var r =
                      (!o && (n || i !== u)) ||
                      ((e = i).nodeType ? c(t, i, n) : h(t, i, n));
                    return (e = null), r;
                  },
                ];
              l < s;
              l++
            )
              if ((i = n.relative[t[l].type])) f = [vt(yt(f), i)];
              else {
                if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                  for (r = ++l; r < s && !n.relative[t[r].type]; r++);
                  return xt(
                    l > 1 && yt(f),
                    l > 1 &&
                      gt(
                        t
                          .slice(0, l - 1)
                          .concat({ value: " " === t[l - 2].type ? "*" : "" })
                      ).replace(B, "$1"),
                    i,
                    l < r && wt(t.slice(l, r)),
                    r < s && wt((t = t.slice(r))),
                    r < s && gt(t)
                  );
                }
                f.push(i);
              }
            return yt(f);
          }
          return (
            (_t.prototype = n.filters = n.pseudos),
            (n.setFilters = new _t()),
            (o = st.tokenize =
              function (t, e) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  c = P[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = n.preFilter; a; ) {
                  for (o in ((i && !(r = H.exec(a))) ||
                    (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
                  (i = !1),
                  (r = X.exec(a)) &&
                    ((i = r.shift()),
                    s.push({ value: i, type: r[0].replace(B, " ") }),
                    (a = a.slice(i.length))),
                  n.filter))
                    !(r = U[o].exec(a)) ||
                      (u[o] && !(r = u[o](r))) ||
                      ((i = r.shift()),
                      s.push({ value: i, type: o, matches: r }),
                      (a = a.slice(i.length)));
                  if (!i) break;
                }
                return e ? a.length : a ? st.error(t) : P(t, l).slice(0);
              }),
            (a = st.compile =
              function (t, e) {
                var i,
                  r = [],
                  s = [],
                  a = C[t + " "];
                if (!a) {
                  for (e || (e = o(t)), i = e.length; i--; )
                    (a = wt(e[i]))[b] ? r.push(a) : s.push(a);
                  (a = C(
                    t,
                    (function (t, e) {
                      var i = e.length > 0,
                        r = t.length > 0,
                        s = function (s, o, a, l, c) {
                          var h,
                            d,
                            _,
                            g = 0,
                            v = "0",
                            y = s && [],
                            b = [],
                            x = u,
                            T = s || (r && n.find.TAG("*", c)),
                            k = (w += null == x ? 1 : Math.random() || 0.1),
                            P = T.length;
                          for (
                            c && (u = o === p || o || c);
                            v !== P && null != (h = T[v]);
                            v++
                          ) {
                            if (r && h) {
                              for (
                                d = 0,
                                  o ||
                                    h.ownerDocument === p ||
                                    (f(h), (a = !m));
                                (_ = t[d++]);

                              )
                                if (_(h, o || p, a)) {
                                  l.push(h);
                                  break;
                                }
                              c && (w = k);
                            }
                            i && ((h = !_ && h) && g--, s && y.push(h));
                          }
                          if (((g += v), i && v !== g)) {
                            for (d = 0; (_ = e[d++]); ) _(y, b, o, a);
                            if (s) {
                              if (g > 0)
                                for (; v--; )
                                  y[v] || b[v] || (b[v] = E.call(l));
                              b = bt(b);
                            }
                            R.apply(l, b),
                              c &&
                                !s &&
                                b.length > 0 &&
                                g + e.length > 1 &&
                                st.uniqueSort(l);
                          }
                          return c && ((w = k), (u = x)), y;
                        };
                      return i ? at(s) : s;
                    })(s, r)
                  )).selector = t;
                }
                return a;
              }),
            (l = st.select =
              function (t, e, i, r) {
                var s,
                  l,
                  u,
                  c,
                  h,
                  f = "function" == typeof t && t,
                  p = !r && o((t = f.selector || t));
                if (((i = i || []), 1 === p.length)) {
                  if (
                    (l = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (u = l[0]).type &&
                    9 === e.nodeType &&
                    m &&
                    n.relative[l[1].type]
                  ) {
                    if (
                      !(e = (n.find.ID(u.matches[0].replace(K, tt), e) ||
                        [])[0])
                    )
                      return i;
                    f && (e = e.parentNode),
                      (t = t.slice(l.shift().value.length));
                  }
                  for (
                    s = U.needsContext.test(t) ? 0 : l.length;
                    s-- && ((u = l[s]), !n.relative[(c = u.type)]);

                  )
                    if (
                      (h = n.find[c]) &&
                      (r = h(
                        u.matches[0].replace(K, tt),
                        (J.test(l[0].type) && mt(e.parentNode)) || e
                      ))
                    ) {
                      if ((l.splice(s, 1), !(t = r.length && gt(l))))
                        return R.apply(i, r), i;
                      break;
                    }
                }
                return (
                  (f || a(t, p))(
                    r,
                    e,
                    !m,
                    i,
                    !e || (J.test(t) && mt(e.parentNode)) || e
                  ),
                  i
                );
              }),
            (i.sortStable = b.split("").sort(S).join("") === b),
            (i.detectDuplicates = !!h),
            f(),
            (i.sortDetached = lt(function (t) {
              return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
            })),
            lt(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              ut("type|href|height|width", function (t, e, i) {
                if (!i)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (i.attributes &&
              lt(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              ut("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            lt(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              ut(L, function (t, e, i) {
                var n;
                if (!i)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (n = t.getAttributeNode(e)) && n.specified
                    ? n.value
                    : null;
              }),
            st
          );
        })(i);
      (T.find = C),
        (T.expr = C.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = C.uniqueSort),
        (T.text = C.getText),
        (T.isXMLDoc = C.isXML),
        (T.contains = C.contains),
        (T.escapeSelector = C.escape);
      var S = function (t, e, i) {
          for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && T(t).is(i)) break;
              n.push(t);
            }
          return n;
        },
        O = function (t, e) {
          for (var i = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && i.push(t);
          return i;
        },
        A = T.expr.match.needsContext;
      function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function R(t, e, i) {
        return v(e)
          ? T.grep(t, function (t, n) {
              return !!e.call(t, n, t) !== i;
            })
          : e.nodeType
          ? T.grep(t, function (t) {
              return (t === e) !== i;
            })
          : "string" != typeof e
          ? T.grep(t, function (t) {
              return h.call(e, t) > -1 !== i;
            })
          : T.filter(e, t, i);
      }
      (T.filter = function (t, e, i) {
        var n = e[0];
        return (
          i && (t = ":not(" + t + ")"),
          1 === e.length && 1 === n.nodeType
            ? T.find.matchesSelector(n, t)
              ? [n]
              : []
            : T.find.matches(
                t,
                T.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (t) {
            var e,
              i,
              n = this.length,
              r = this;
            if ("string" != typeof t)
              return this.pushStack(
                T(t).filter(function () {
                  for (e = 0; e < n; e++) if (T.contains(r[e], this)) return !0;
                })
              );
            for (i = this.pushStack([]), e = 0; e < n; e++) T.find(t, r[e], i);
            return n > 1 ? T.uniqueSort(i) : i;
          },
          filter: function (t) {
            return this.pushStack(R(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(R(this, t || [], !0));
          },
          is: function (t) {
            return !!R(
              this,
              "string" == typeof t && A.test(t) ? T(t) : t || [],
              !1
            ).length;
          },
        });
      var M,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (t, e, i) {
        var n, r;
        if (!t) return this;
        if (((i = i || M), "string" == typeof t)) {
          if (
            !(n =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : j.exec(t)) ||
            (!n[1] && e)
          )
            return !e || e.jquery
              ? (e || i).find(t)
              : this.constructor(e).find(t);
          if (n[1]) {
            if (
              ((e = e instanceof T ? e[0] : e),
              T.merge(
                this,
                T.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : o,
                  !0
                )
              ),
              D.test(n[1]) && T.isPlainObject(e))
            )
              for (n in e) v(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
          }
          return (
            (r = o.getElementById(n[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : v(t)
          ? void 0 !== i.ready
            ? i.ready(t)
            : t(T)
          : T.makeArray(t, this);
      }).prototype = T.fn),
        (M = T(o));
      var L = /^(?:parents|prev(?:Until|All))/,
        N = { children: !0, contents: !0, next: !0, prev: !0 };
      function I(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      T.fn.extend({
        has: function (t) {
          var e = T(t, this),
            i = e.length;
          return this.filter(function () {
            for (var t = 0; t < i; t++) if (T.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var i,
            n = 0,
            r = this.length,
            s = [],
            o = "string" != typeof t && T(t);
          if (!A.test(t))
            for (; n < r; n++)
              for (i = this[n]; i && i !== e; i = i.parentNode)
                if (
                  i.nodeType < 11 &&
                  (o
                    ? o.index(i) > -1
                    : 1 === i.nodeType && T.find.matchesSelector(i, t))
                ) {
                  s.push(i);
                  break;
                }
          return this.pushStack(s.length > 1 ? T.uniqueSort(s) : s);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? h.call(T(t), this[0])
              : h.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        T.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return S(t, "parentNode");
            },
            parentsUntil: function (t, e, i) {
              return S(t, "parentNode", i);
            },
            next: function (t) {
              return I(t, "nextSibling");
            },
            prev: function (t) {
              return I(t, "previousSibling");
            },
            nextAll: function (t) {
              return S(t, "nextSibling");
            },
            prevAll: function (t) {
              return S(t, "previousSibling");
            },
            nextUntil: function (t, e, i) {
              return S(t, "nextSibling", i);
            },
            prevUntil: function (t, e, i) {
              return S(t, "previousSibling", i);
            },
            siblings: function (t) {
              return O((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return O(t.firstChild);
            },
            contents: function (t) {
              return E(t, "iframe")
                ? t.contentDocument
                : (E(t, "template") && (t = t.content || t),
                  T.merge([], t.childNodes));
            },
          },
          function (t, e) {
            T.fn[t] = function (i, n) {
              var r = T.map(this, e, i);
              return (
                "Until" !== t.slice(-5) && (n = i),
                n && "string" == typeof n && (r = T.filter(n, r)),
                this.length > 1 &&
                  (N[t] || T.uniqueSort(r), L.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var F = /[^\x20\t\r\n\f]+/g;
      function q(t) {
        return t;
      }
      function z(t) {
        throw t;
      }
      function B(t, e, i, n) {
        var r;
        try {
          t && v((r = t.promise))
            ? r.call(t).done(e).fail(i)
            : t && v((r = t.then))
            ? r.call(t, e, i)
            : e.apply(void 0, [t].slice(n));
        } catch (t) {
          i.apply(void 0, [t]);
        }
      }
      (T.Callbacks = function (t) {
        t =
          "string" == typeof t
            ? (function (t) {
                var e = {};
                return (
                  T.each(t.match(F) || [], function (t, i) {
                    e[i] = !0;
                  }),
                  e
                );
              })(t)
            : T.extend({}, t);
        var e,
          i,
          n,
          r,
          s = [],
          o = [],
          a = -1,
          l = function () {
            for (r = r || t.once, n = e = !0; o.length; a = -1)
              for (i = o.shift(); ++a < s.length; )
                !1 === s[a].apply(i[0], i[1]) &&
                  t.stopOnFalse &&
                  ((a = s.length), (i = !1));
            t.memory || (i = !1), (e = !1), r && (s = i ? [] : "");
          },
          u = {
            add: function () {
              return (
                s &&
                  (i && !e && ((a = s.length - 1), o.push(i)),
                  (function e(i) {
                    T.each(i, function (i, n) {
                      v(n)
                        ? (t.unique && u.has(n)) || s.push(n)
                        : n && n.length && "string" !== w(n) && e(n);
                    });
                  })(arguments),
                  i && !e && l()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (t, e) {
                  for (var i; (i = T.inArray(e, s, i)) > -1; )
                    s.splice(i, 1), i <= a && a--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? T.inArray(t, s) > -1 : s.length > 0;
            },
            empty: function () {
              return s && (s = []), this;
            },
            disable: function () {
              return (r = o = []), (s = i = ""), this;
            },
            disabled: function () {
              return !s;
            },
            lock: function () {
              return (r = o = []), i || e || (s = i = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (t, i) {
              return (
                r ||
                  ((i = [t, (i = i || []).slice ? i.slice() : i]),
                  o.push(i),
                  e || l()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!n;
            },
          };
        return u;
      }),
        T.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              n = "pending",
              r = {
                state: function () {
                  return n;
                },
                always: function () {
                  return s.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return r.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return T.Deferred(function (i) {
                    T.each(e, function (e, n) {
                      var r = v(t[n[4]]) && t[n[4]];
                      s[n[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && v(t.promise)
                          ? t
                              .promise()
                              .progress(i.notify)
                              .done(i.resolve)
                              .fail(i.reject)
                          : i[n[0] + "With"](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, n, r) {
                  var s = 0;
                  function o(t, e, n, r) {
                    return function () {
                      var a = this,
                        l = arguments,
                        u = function () {
                          var i, u;
                          if (!(t < s)) {
                            if ((i = n.apply(a, l)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              i &&
                              ("object" == typeof i ||
                                "function" == typeof i) &&
                              i.then),
                              v(u)
                                ? r
                                  ? u.call(i, o(s, e, q, r), o(s, e, z, r))
                                  : (s++,
                                    u.call(
                                      i,
                                      o(s, e, q, r),
                                      o(s, e, z, r),
                                      o(s, e, q, e.notifyWith)
                                    ))
                                : (n !== q && ((a = void 0), (l = [i])),
                                  (r || e.resolveWith)(a, l));
                          }
                        },
                        c = r
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (i) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(i, c.stackTrace),
                                  t + 1 >= s &&
                                    (n !== z && ((a = void 0), (l = [i])),
                                    e.rejectWith(a, l));
                              }
                            };
                      t
                        ? c()
                        : (T.Deferred.getStackHook &&
                            (c.stackTrace = T.Deferred.getStackHook()),
                          i.setTimeout(c));
                    };
                  }
                  return T.Deferred(function (i) {
                    e[0][3].add(o(0, i, v(r) ? r : q, i.notifyWith)),
                      e[1][3].add(o(0, i, v(t) ? t : q)),
                      e[2][3].add(o(0, i, v(n) ? n : z));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? T.extend(t, r) : r;
                },
              },
              s = {};
            return (
              T.each(e, function (t, i) {
                var o = i[2],
                  a = i[5];
                (r[i[1]] = o.add),
                  a &&
                    o.add(
                      function () {
                        n = a;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  o.add(i[3].fire),
                  (s[i[0]] = function () {
                    return (
                      s[i[0] + "With"](this === s ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (s[i[0] + "With"] = o.fireWith);
              }),
              r.promise(s),
              t && t.call(s, s),
              s
            );
          },
          when: function (t) {
            var e = arguments.length,
              i = e,
              n = Array(i),
              r = l.call(arguments),
              s = T.Deferred(),
              o = function (t) {
                return function (i) {
                  (n[t] = this),
                    (r[t] = arguments.length > 1 ? l.call(arguments) : i),
                    --e || s.resolveWith(n, r);
                };
              };
            if (
              e <= 1 &&
              (B(t, s.done(o(i)).resolve, s.reject, !e),
              "pending" === s.state() || v(r[i] && r[i].then))
            )
              return s.then();
            for (; i--; ) B(r[i], o(i), s.reject);
            return s.promise();
          },
        });
      var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (t, e) {
        i.console &&
          i.console.warn &&
          t &&
          H.test(t.name) &&
          i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (T.readyException = function (t) {
          i.setTimeout(function () {
            throw t;
          });
        });
      var X = T.Deferred();
      function $() {
        o.removeEventListener("DOMContentLoaded", $),
          i.removeEventListener("load", $),
          T.ready();
      }
      (T.fn.ready = function (t) {
        return (
          X.then(t).catch(function (t) {
            T.readyException(t);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== t && --T.readyWait > 0) || X.resolveWith(o, [T]));
          },
        }),
        (T.ready.then = X.then),
        "complete" === o.readyState ||
        ("loading" !== o.readyState && !o.documentElement.doScroll)
          ? i.setTimeout(T.ready)
          : (o.addEventListener("DOMContentLoaded", $),
            i.addEventListener("load", $));
      var W = function (t, e, i, n, r, s, o) {
          var a = 0,
            l = t.length,
            u = null == i;
          if ("object" === w(i))
            for (a in ((r = !0), i)) W(t, e, a, i[a], !0, s, o);
          else if (
            void 0 !== n &&
            ((r = !0),
            v(n) || (o = !0),
            u &&
              (o
                ? (e.call(t, n), (e = null))
                : ((u = e),
                  (e = function (t, e, i) {
                    return u.call(T(t), i);
                  }))),
            e)
          )
            for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
          return r ? t : u ? e.call(t) : l ? e(t[0], i) : s;
        },
        Y = /^-ms-/,
        U = /-([a-z])/g;
      function V(t, e) {
        return e.toUpperCase();
      }
      function G(t) {
        return t.replace(Y, "ms-").replace(U, V);
      }
      var Z = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function Q() {
        this.expando = T.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Z(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, i) {
            var n,
              r = this.cache(t);
            if ("string" == typeof e) r[G(e)] = i;
            else for (n in e) r[G(n)] = e[n];
            return r;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][G(e)];
          },
          access: function (t, e, i) {
            return void 0 === e || (e && "string" == typeof e && void 0 === i)
              ? this.get(t, e)
              : (this.set(t, e, i), void 0 !== i ? i : e);
          },
          remove: function (t, e) {
            var i,
              n = t[this.expando];
            if (void 0 !== n) {
              if (void 0 !== e) {
                i = (e = Array.isArray(e)
                  ? e.map(G)
                  : (e = G(e)) in n
                  ? [e]
                  : e.match(F) || []).length;
                for (; i--; ) delete n[e[i]];
              }
              (void 0 === e || T.isEmptyObject(n)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !T.isEmptyObject(e);
          },
        });
      var J = new Q(),
        K = new Q(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;
      function it(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
          if (
            ((n = "data-" + e.replace(et, "-$&").toLowerCase()),
            "string" == typeof (i = t.getAttribute(n)))
          ) {
            try {
              i = (function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : tt.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(i);
            } catch (t) {}
            K.set(t, e, i);
          } else i = void 0;
        return i;
      }
      T.extend({
        hasData: function (t) {
          return K.hasData(t) || J.hasData(t);
        },
        data: function (t, e, i) {
          return K.access(t, e, i);
        },
        removeData: function (t, e) {
          K.remove(t, e);
        },
        _data: function (t, e, i) {
          return J.access(t, e, i);
        },
        _removeData: function (t, e) {
          J.remove(t, e);
        },
      }),
        T.fn.extend({
          data: function (t, e) {
            var i,
              n,
              r,
              s = this[0],
              o = s && s.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((r = K.get(s)), 1 === s.nodeType && !J.get(s, "hasDataAttrs"))
              ) {
                for (i = o.length; i--; )
                  o[i] &&
                    0 === (n = o[i].name).indexOf("data-") &&
                    ((n = G(n.slice(5))), it(s, n, r[n]));
                J.set(s, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof t
              ? this.each(function () {
                  K.set(this, t);
                })
              : W(
                  this,
                  function (e) {
                    var i;
                    if (s && void 0 === e)
                      return void 0 !== (i = K.get(s, t))
                        ? i
                        : void 0 !== (i = it(s, t))
                        ? i
                        : void 0;
                    this.each(function () {
                      K.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              K.remove(this, t);
            });
          },
        }),
        T.extend({
          queue: function (t, e, i) {
            var n;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (n = J.get(t, e)),
                i &&
                  (!n || Array.isArray(i)
                    ? (n = J.access(t, e, T.makeArray(i)))
                    : n.push(i)),
                n || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var i = T.queue(t, e),
              n = i.length,
              r = i.shift(),
              s = T._queueHooks(t, e);
            "inprogress" === r && ((r = i.shift()), n--),
              r &&
                ("fx" === e && i.unshift("inprogress"),
                delete s.stop,
                r.call(
                  t,
                  function () {
                    T.dequeue(t, e);
                  },
                  s
                )),
              !n && s && s.empty.fire();
          },
          _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return (
              J.get(t, i) ||
              J.access(t, i, {
                empty: T.Callbacks("once memory").add(function () {
                  J.remove(t, [e + "queue", i]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (t, e) {
            var i = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), i--),
              arguments.length < i
                ? T.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var i = T.queue(this, t, e);
                    T._queueHooks(this, t),
                      "fx" === t && "inprogress" !== i[0] && T.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              T.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var i,
              n = 1,
              r = T.Deferred(),
              s = this,
              o = this.length,
              a = function () {
                --n || r.resolveWith(s, [s]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              o--;

            )
              (i = J.get(s[o], t + "queueHooks")) &&
                i.empty &&
                (n++, i.empty.add(a));
            return a(), r.promise(e);
          },
        });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        rt = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
        st = ["Top", "Right", "Bottom", "Left"],
        ot = function (t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display &&
              T.contains(t.ownerDocument, t) &&
              "none" === T.css(t, "display"))
          );
        },
        at = function (t, e, i, n) {
          var r,
            s,
            o = {};
          for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
          for (s in ((r = i.apply(t, n || [])), e)) t.style[s] = o[s];
          return r;
        };
      function lt(t, e, i, n) {
        var r,
          s,
          o = 20,
          a = n
            ? function () {
                return n.cur();
              }
            : function () {
                return T.css(t, e, "");
              },
          l = a(),
          u = (i && i[3]) || (T.cssNumber[e] ? "" : "px"),
          c = (T.cssNumber[e] || ("px" !== u && +l)) && rt.exec(T.css(t, e));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; o--; )
            T.style(t, e, c + u),
              (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
              (c /= s);
          (c *= 2), T.style(t, e, c + u), (i = i || []);
        }
        return (
          i &&
            ((c = +c || +l || 0),
            (r = i[1] ? c + (i[1] + 1) * i[2] : +i[2]),
            n && ((n.unit = u), (n.start = c), (n.end = r))),
          r
        );
      }
      var ut = {};
      function ct(t) {
        var e,
          i = t.ownerDocument,
          n = t.nodeName,
          r = ut[n];
        return (
          r ||
          ((e = i.body.appendChild(i.createElement(n))),
          (r = T.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === r && (r = "block"),
          (ut[n] = r),
          r)
        );
      }
      function ht(t, e) {
        for (var i, n, r = [], s = 0, o = t.length; s < o; s++)
          (n = t[s]).style &&
            ((i = n.style.display),
            e
              ? ("none" === i &&
                  ((r[s] = J.get(n, "display") || null),
                  r[s] || (n.style.display = "")),
                "" === n.style.display && ot(n) && (r[s] = ct(n)))
              : "none" !== i && ((r[s] = "none"), J.set(n, "display", i)));
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t;
      }
      T.fn.extend({
        show: function () {
          return ht(this, !0);
        },
        hide: function () {
          return ht(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                ot(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var ft = /^(?:checkbox|radio)$/i,
        pt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        dt = /^$|^module$|\/(?:java|ecma)script/i,
        mt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function _t(t, e) {
        var i;
        return (
          (i =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && E(t, e)) ? T.merge([t], i) : i
        );
      }
      function gt(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
          J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"));
      }
      (mt.optgroup = mt.option),
        (mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead),
        (mt.th = mt.td);
      var vt = /<|&#?\w+;/;
      function yt(t, e, i, n, r) {
        for (
          var s,
            o,
            a,
            l,
            u,
            c,
            h = e.createDocumentFragment(),
            f = [],
            p = 0,
            d = t.length;
          p < d;
          p++
        )
          if ((s = t[p]) || 0 === s)
            if ("object" === w(s)) T.merge(f, s.nodeType ? [s] : s);
            else if (vt.test(s)) {
              for (
                o = o || h.appendChild(e.createElement("div")),
                  a = (pt.exec(s) || ["", ""])[1].toLowerCase(),
                  l = mt[a] || mt._default,
                  o.innerHTML = l[1] + T.htmlPrefilter(s) + l[2],
                  c = l[0];
                c--;

              )
                o = o.lastChild;
              T.merge(f, o.childNodes), ((o = h.firstChild).textContent = "");
            } else f.push(e.createTextNode(s));
        for (h.textContent = "", p = 0; (s = f[p++]); )
          if (n && T.inArray(s, n) > -1) r && r.push(s);
          else if (
            ((u = T.contains(s.ownerDocument, s)),
            (o = _t(h.appendChild(s), "script")),
            u && gt(o),
            i)
          )
            for (c = 0; (s = o[c++]); ) dt.test(s.type || "") && i.push(s);
        return h;
      }
      !(function () {
        var t = o.createDocumentFragment().appendChild(o.createElement("div")),
          e = o.createElement("input");
        e.setAttribute("type", "radio"),
          e.setAttribute("checked", "checked"),
          e.setAttribute("name", "t"),
          t.appendChild(e),
          (g.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (g.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
      })();
      var bt = o.documentElement,
        xt = /^key/,
        wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Tt = /^([^.]*)(?:\.(.+)|)/;
      function kt() {
        return !0;
      }
      function Pt() {
        return !1;
      }
      function Ct() {
        try {
          return o.activeElement;
        } catch (t) {}
      }
      function St(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
            St(t, a, i, n, e[a], s);
          return t;
        }
        if (
          (null == n && null == r
            ? ((r = i), (n = i = void 0))
            : null == r &&
              ("string" == typeof i
                ? ((r = n), (n = void 0))
                : ((r = n), (n = i), (i = void 0))),
          !1 === r)
        )
          r = Pt;
        else if (!r) return t;
        return (
          1 === s &&
            ((o = r),
            ((r = function (t) {
              return T().off(t), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = T.guid++))),
          t.each(function () {
            T.event.add(this, e, r, n, i);
          })
        );
      }
      (T.event = {
        global: {},
        add: function (t, e, i, n, r) {
          var s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            m,
            _ = J.get(t);
          if (_)
            for (
              i.handler && ((i = (s = i).handler), (r = s.selector)),
                r && T.find.matchesSelector(bt, r),
                i.guid || (i.guid = T.guid++),
                (l = _.events) || (l = _.events = {}),
                (o = _.handle) ||
                  (o = _.handle =
                    function (e) {
                      return void 0 !== T && T.event.triggered !== e.type
                        ? T.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                u = (e = (e || "").match(F) || [""]).length;
              u--;

            )
              (p = m = (a = Tt.exec(e[u]) || [])[1]),
                (d = (a[2] || "").split(".").sort()),
                p &&
                  ((h = T.event.special[p] || {}),
                  (p = (r ? h.delegateType : h.bindType) || p),
                  (h = T.event.special[p] || {}),
                  (c = T.extend(
                    {
                      type: p,
                      origType: m,
                      data: n,
                      handler: i,
                      guid: i.guid,
                      selector: r,
                      needsContext: r && T.expr.match.needsContext.test(r),
                      namespace: d.join("."),
                    },
                    s
                  )),
                  (f = l[p]) ||
                    (((f = l[p] = []).delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(t, n, d, o)) ||
                      (t.addEventListener && t.addEventListener(p, o))),
                  h.add &&
                    (h.add.call(t, c),
                    c.handler.guid || (c.handler.guid = i.guid)),
                  r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                  (T.event.global[p] = !0));
        },
        remove: function (t, e, i, n, r) {
          var s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            m,
            _ = J.hasData(t) && J.get(t);
          if (_ && (l = _.events)) {
            for (u = (e = (e || "").match(F) || [""]).length; u--; )
              if (
                ((p = m = (a = Tt.exec(e[u]) || [])[1]),
                (d = (a[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  h = T.event.special[p] || {},
                    f = l[(p = (n ? h.delegateType : h.bindType) || p)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    o = s = f.length;
                  s--;

                )
                  (c = f[s]),
                    (!r && m !== c.origType) ||
                      (i && i.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (n && n !== c.selector && ("**" !== n || !c.selector)) ||
                      (f.splice(s, 1),
                      c.selector && f.delegateCount--,
                      h.remove && h.remove.call(t, c));
                o &&
                  !f.length &&
                  ((h.teardown && !1 !== h.teardown.call(t, d, _.handle)) ||
                    T.removeEvent(t, p, _.handle),
                  delete l[p]);
              } else for (p in l) T.event.remove(t, p + e[u], i, n, !0);
            T.isEmptyObject(l) && J.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            i,
            n,
            r,
            s,
            o,
            a = T.event.fix(t),
            l = new Array(arguments.length),
            u = (J.get(this, "events") || {})[a.type] || [],
            c = T.event.special[a.type] || {};
          for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((a.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, a))
          ) {
            for (
              o = T.event.handlers.call(this, a, u), e = 0;
              (r = o[e++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, i = 0;
                (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
                  ((a.handleObj = s),
                  (a.data = s.data),
                  void 0 !==
                    (n = (
                      (T.event.special[s.origType] || {}).handle || s.handler
                    ).apply(r.elem, l)) &&
                    !1 === (a.result = n) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (t, e) {
          var i,
            n,
            r,
            s,
            o,
            a = [],
            l = e.delegateCount,
            u = t.target;
          if (l && u.nodeType && !("click" === t.type && t.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== t.type || !0 !== u.disabled)
              ) {
                for (s = [], o = {}, i = 0; i < l; i++)
                  void 0 === o[(r = (n = e[i]).selector + " ")] &&
                    (o[r] = n.needsContext
                      ? T(r, this).index(u) > -1
                      : T.find(r, this, null, [u]).length),
                    o[r] && s.push(n);
                s.length && a.push({ elem: u, handlers: s });
              }
          return (
            (u = this),
            l < e.length && a.push({ elem: u, handlers: e.slice(l) }),
            a
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(T.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[T.expando] ? t : new T.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== Ct() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === Ct() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && E(this, "input"))
                return this.click(), !1;
            },
            _default: function (t) {
              return E(t.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (T.removeEvent = function (t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i);
        }),
        (T.Event = function (t, e) {
          if (!(this instanceof T.Event)) return new T.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? kt
                  : Pt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && T.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Pt,
          isPropagationStopped: Pt,
          isImmediatePropagationStopped: Pt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = kt),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = kt),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = kt),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && xt.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && wt.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          T.event.addProp
        ),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            T.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var i,
                  n = t.relatedTarget,
                  r = t.handleObj;
                return (
                  (n && (n === this || T.contains(this, n))) ||
                    ((t.type = r.origType),
                    (i = r.handler.apply(this, arguments)),
                    (t.type = e)),
                  i
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (t, e, i, n) {
            return St(this, t, e, i, n);
          },
          one: function (t, e, i, n) {
            return St(this, t, e, i, n, 1);
          },
          off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (n = t.handleObj),
                T(t.delegateTarget).off(
                  n.namespace ? n.origType + "." + n.namespace : n.origType,
                  n.selector,
                  n.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
              !1 === i && (i = Pt),
              this.each(function () {
                T.event.remove(this, t, i, e);
              })
            );
          },
        });
      var Ot =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        At = /<script|<style|<link/i,
        Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Rt(t, e) {
        return (
          (E(t, "table") &&
            E(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            T(t).children("tbody")[0]) ||
          t
        );
      }
      function Mt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function jt(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Lt(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
          if (
            J.hasData(t) &&
            ((s = J.access(t)), (o = J.set(e, s)), (u = s.events))
          )
            for (r in (delete o.handle, (o.events = {}), u))
              for (i = 0, n = u[r].length; i < n; i++)
                T.event.add(e, r, u[r][i]);
          K.hasData(t) &&
            ((a = K.access(t)), (l = T.extend({}, a)), K.set(e, l));
        }
      }
      function Nt(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && ft.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== i && "textarea" !== i) ||
            (e.defaultValue = t.defaultValue);
      }
      function It(t, e, i, n) {
        e = u.apply([], e);
        var r,
          s,
          o,
          a,
          l,
          c,
          h = 0,
          f = t.length,
          p = f - 1,
          d = e[0],
          m = v(d);
        if (m || (f > 1 && "string" == typeof d && !g.checkClone && Et.test(d)))
          return t.each(function (r) {
            var s = t.eq(r);
            m && (e[0] = d.call(this, r, s.html())), It(s, e, i, n);
          });
        if (
          f &&
          ((s = (r = yt(e, t[0].ownerDocument, !1, t, n)).firstChild),
          1 === r.childNodes.length && (r = s),
          s || n)
        ) {
          for (a = (o = T.map(_t(r, "script"), Mt)).length; h < f; h++)
            (l = r),
              h !== p &&
                ((l = T.clone(l, !0, !0)), a && T.merge(o, _t(l, "script"))),
              i.call(t[h], l, h);
          if (a)
            for (
              c = o[o.length - 1].ownerDocument, T.map(o, jt), h = 0;
              h < a;
              h++
            )
              (l = o[h]),
                dt.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  T.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? T._evalUrl && T._evalUrl(l.src)
                    : x(l.textContent.replace(Dt, ""), c, l));
        }
        return t;
      }
      function Ft(t, e, i) {
        for (var n, r = e ? T.filter(e, t) : t, s = 0; null != (n = r[s]); s++)
          i || 1 !== n.nodeType || T.cleanData(_t(n)),
            n.parentNode &&
              (i && T.contains(n.ownerDocument, n) && gt(_t(n, "script")),
              n.parentNode.removeChild(n));
        return t;
      }
      T.extend({
        htmlPrefilter: function (t) {
          return t.replace(Ot, "<$1></$2>");
        },
        clone: function (t, e, i) {
          var n,
            r,
            s,
            o,
            a = t.cloneNode(!0),
            l = T.contains(t.ownerDocument, t);
          if (
            !(
              g.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              T.isXMLDoc(t)
            )
          )
            for (o = _t(a), n = 0, r = (s = _t(t)).length; n < r; n++)
              Nt(s[n], o[n]);
          if (e)
            if (i)
              for (
                s = s || _t(t), o = o || _t(a), n = 0, r = s.length;
                n < r;
                n++
              )
                Lt(s[n], o[n]);
            else Lt(t, a);
          return (
            (o = _t(a, "script")).length > 0 && gt(o, !l && _t(t, "script")), a
          );
        },
        cleanData: function (t) {
          for (
            var e, i, n, r = T.event.special, s = 0;
            void 0 !== (i = t[s]);
            s++
          )
            if (Z(i)) {
              if ((e = i[J.expando])) {
                if (e.events)
                  for (n in e.events)
                    r[n] ? T.event.remove(i, n) : T.removeEvent(i, n, e.handle);
                i[J.expando] = void 0;
              }
              i[K.expando] && (i[K.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (t) {
            return Ft(this, t, !0);
          },
          remove: function (t) {
            return Ft(this, t);
          },
          text: function (t) {
            return W(
              this,
              function (t) {
                return void 0 === t
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return It(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Rt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return It(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Rt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return It(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return It(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (T.cleanData(_t(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return T.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return W(
              this,
              function (t) {
                var e = this[0] || {},
                  i = 0,
                  n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !At.test(t) &&
                  !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = T.htmlPrefilter(t);
                  try {
                    for (; i < n; i++)
                      1 === (e = this[i] || {}).nodeType &&
                        (T.cleanData(_t(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return It(
              this,
              arguments,
              function (e) {
                var i = this.parentNode;
                T.inArray(this, t) < 0 &&
                  (T.cleanData(_t(this)), i && i.replaceChild(e, this));
              },
              t
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            T.fn[t] = function (t) {
              for (
                var i, n = [], r = T(t), s = r.length - 1, o = 0;
                o <= s;
                o++
              )
                (i = o === s ? this : this.clone(!0)),
                  T(r[o])[e](i),
                  c.apply(n, i.get());
              return this.pushStack(n);
            };
          }
        );
      var qt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        zt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = i), e.getComputedStyle(t);
        },
        Bt = new RegExp(st.join("|"), "i");
      function Ht(t, e, i) {
        var n,
          r,
          s,
          o,
          a = t.style;
        return (
          (i = i || zt(t)) &&
            ("" !== (o = i.getPropertyValue(e) || i[e]) ||
              T.contains(t.ownerDocument, t) ||
              (o = T.style(t, e)),
            !g.pixelBoxStyles() &&
              qt.test(o) &&
              Bt.test(e) &&
              ((n = a.width),
              (r = a.minWidth),
              (s = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = o),
              (o = i.width),
              (a.width = n),
              (a.minWidth = r),
              (a.maxWidth = s))),
          void 0 !== o ? o + "" : o
        );
      }
      function Xt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (c) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              bt.appendChild(u).appendChild(c);
            var t = i.getComputedStyle(c);
            (n = "1%" !== t.top),
              (l = 12 === e(t.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === e(t.right)),
              (r = 36 === e(t.width)),
              (c.style.position = "absolute"),
              (s = 36 === c.offsetWidth || "absolute"),
              bt.removeChild(u),
              (c = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var n,
          r,
          s,
          a,
          l,
          u = o.createElement("div"),
          c = o.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
          T.extend(g, {
            boxSizingReliable: function () {
              return t(), r;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), n;
            },
            reliableMarginLeft: function () {
              return t(), l;
            },
            scrollboxSize: function () {
              return t(), s;
            },
          }));
      })();
      var $t = /^(none|table(?!-c[ea]).+)/,
        Wt = /^--/,
        Yt = { position: "absolute", visibility: "hidden", display: "block" },
        Ut = { letterSpacing: "0", fontWeight: "400" },
        Vt = ["Webkit", "Moz", "ms"],
        Gt = o.createElement("div").style;
      function Zt(t) {
        var e = T.cssProps[t];
        return (
          e ||
            (e = T.cssProps[t] =
              (function (t) {
                if (t in Gt) return t;
                for (
                  var e = t[0].toUpperCase() + t.slice(1), i = Vt.length;
                  i--;

                )
                  if ((t = Vt[i] + e) in Gt) return t;
              })(t) || t),
          e
        );
      }
      function Qt(t, e, i) {
        var n = rt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
      }
      function Jt(t, e, i, n, r, s) {
        var o = "width" === e ? 1 : 0,
          a = 0,
          l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2)
          "margin" === i && (l += T.css(t, i + st[o], !0, r)),
            n
              ? ("content" === i && (l -= T.css(t, "padding" + st[o], !0, r)),
                "margin" !== i &&
                  (l -= T.css(t, "border" + st[o] + "Width", !0, r)))
              : ((l += T.css(t, "padding" + st[o], !0, r)),
                "padding" !== i
                  ? (l += T.css(t, "border" + st[o] + "Width", !0, r))
                  : (a += T.css(t, "border" + st[o] + "Width", !0, r)));
        return (
          !n &&
            s >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5
              )
            )),
          l
        );
      }
      function Kt(t, e, i) {
        var n = zt(t),
          r = Ht(t, e, n),
          s = "border-box" === T.css(t, "boxSizing", !1, n),
          o = s;
        if (qt.test(r)) {
          if (!i) return r;
          r = "auto";
        }
        return (
          (o = o && (g.boxSizingReliable() || r === t.style[e])),
          ("auto" === r ||
            (!parseFloat(r) && "inline" === T.css(t, "display", !1, n))) &&
            ((r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = !0)),
          (r = parseFloat(r) || 0) +
            Jt(t, e, i || (s ? "border" : "content"), o, n, r) +
            "px"
        );
      }
      function te(t, e, i, n, r) {
        return new te.prototype.init(t, e, i, n, r);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var i = Ht(t, "opacity");
                return "" === i ? "1" : i;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, i, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              s,
              o,
              a = G(e),
              l = Wt.test(e),
              u = t.style;
            if (
              (l || (e = Zt(a)),
              (o = T.cssHooks[e] || T.cssHooks[a]),
              void 0 === i)
            )
              return o && "get" in o && void 0 !== (r = o.get(t, !1, n))
                ? r
                : u[e];
            "string" === (s = typeof i) &&
              (r = rt.exec(i)) &&
              r[1] &&
              ((i = lt(t, e, r)), (s = "number")),
              null != i &&
                i == i &&
                ("number" === s &&
                  (i += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (u[e] = "inherit"),
                (o && "set" in o && void 0 === (i = o.set(t, i, n))) ||
                  (l ? u.setProperty(e, i) : (u[e] = i)));
          }
        },
        css: function (t, e, i, n) {
          var r,
            s,
            o,
            a = G(e);
          return (
            Wt.test(e) || (e = Zt(a)),
            (o = T.cssHooks[e] || T.cssHooks[a]) &&
              "get" in o &&
              (r = o.get(t, !0, i)),
            void 0 === r && (r = Ht(t, e, n)),
            "normal" === r && e in Ut && (r = Ut[e]),
            "" === i || i
              ? ((s = parseFloat(r)), !0 === i || isFinite(s) ? s || 0 : r)
              : r
          );
        },
      }),
        T.each(["height", "width"], function (t, e) {
          T.cssHooks[e] = {
            get: function (t, i, n) {
              if (i)
                return !$t.test(T.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? Kt(t, e, n)
                  : at(t, Yt, function () {
                      return Kt(t, e, n);
                    });
            },
            set: function (t, i, n) {
              var r,
                s = zt(t),
                o = "border-box" === T.css(t, "boxSizing", !1, s),
                a = n && Jt(t, e, n, o, s);
              return (
                o &&
                  g.scrollboxSize() === s.position &&
                  (a -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(s[e]) -
                      Jt(t, e, "border", !1, s) -
                      0.5
                  )),
                a &&
                  (r = rt.exec(i)) &&
                  "px" !== (r[3] || "px") &&
                  ((t.style[e] = i), (i = T.css(t, e))),
                Qt(0, i, a)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Xt(g.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Ht(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  at(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (T.cssHooks[t + e] = {
            expand: function (i) {
              for (
                var n = 0,
                  r = {},
                  s = "string" == typeof i ? i.split(" ") : [i];
                n < 4;
                n++
              )
                r[t + st[n] + e] = s[n] || s[n - 2] || s[0];
              return r;
            },
          }),
            "margin" !== t && (T.cssHooks[t + e].set = Qt);
        }),
        T.fn.extend({
          css: function (t, e) {
            return W(
              this,
              function (t, e, i) {
                var n,
                  r,
                  s = {},
                  o = 0;
                if (Array.isArray(e)) {
                  for (n = zt(t), r = e.length; o < r; o++)
                    s[e[o]] = T.css(t, e[o], !1, n);
                  return s;
                }
                return void 0 !== i ? T.style(t, e, i) : T.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = te),
        (te.prototype = {
          constructor: te,
          init: function (t, e, i, n, r, s) {
            (this.elem = t),
              (this.prop = i),
              (this.easing = r || T.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = n),
              (this.unit = s || (T.cssNumber[i] ? "" : "px"));
          },
          cur: function () {
            var t = te.propHooks[this.prop];
            return t && t.get ? t.get(this) : te.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              i = te.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e =
                    T.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              i && i.set ? i.set(this) : te.propHooks._default.set(this),
              this
            );
          },
        }),
        (te.prototype.init.prototype = te.prototype),
        (te.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = T.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              T.fx.step[t.prop]
                ? T.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (null == t.elem.style[T.cssProps[t.prop]] &&
                    !T.cssHooks[t.prop])
                ? (t.elem[t.prop] = t.now)
                : T.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (te.propHooks.scrollTop = te.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
          }),
        (T.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = te.prototype.init),
        (T.fx.step = {});
      var ee,
        ie,
        ne = /^(?:toggle|show|hide)$/,
        re = /queueHooks$/;
      function se() {
        ie &&
          (!1 === o.hidden && i.requestAnimationFrame
            ? i.requestAnimationFrame(se)
            : i.setTimeout(se, T.fx.interval),
          T.fx.tick());
      }
      function oe() {
        return (
          i.setTimeout(function () {
            ee = void 0;
          }),
          (ee = Date.now())
        );
      }
      function ae(t, e) {
        var i,
          n = 0,
          r = { height: t };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
          r["margin" + (i = st[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r;
      }
      function le(t, e, i) {
        for (
          var n,
            r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]),
            s = 0,
            o = r.length;
          s < o;
          s++
        )
          if ((n = r[s].call(i, e, t))) return n;
      }
      function ue(t, e, i) {
        var n,
          r,
          s = 0,
          o = ue.prefilters.length,
          a = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var e = ee || oe(),
                i = Math.max(0, u.startTime + u.duration - e),
                n = 1 - (i / u.duration || 0),
                s = 0,
                o = u.tweens.length;
              s < o;
              s++
            )
              u.tweens[s].run(n);
            return (
              a.notifyWith(t, [u, n, i]),
              n < 1 && o
                ? i
                : (o || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
            );
          },
          u = a.promise({
            elem: t,
            props: T.extend({}, e),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              i
            ),
            originalProperties: e,
            originalOptions: i,
            startTime: ee || oe(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
              var n = T.Tween(
                t,
                u.opts,
                e,
                i,
                u.opts.specialEasing[e] || u.opts.easing
              );
              return u.tweens.push(n), n;
            },
            stop: function (e) {
              var i = 0,
                n = e ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; i < n; i++) u.tweens[i].run(1);
              return (
                e
                  ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
                  : a.rejectWith(t, [u, e]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function (t, e) {
            var i, n, r, s, o;
            for (i in t)
              if (
                ((r = e[(n = G(i))]),
                (s = t[i]),
                Array.isArray(s) && ((r = s[1]), (s = t[i] = s[0])),
                i !== n && ((t[n] = s), delete t[i]),
                (o = T.cssHooks[n]) && ("expand" in o))
              )
                for (i in ((s = o.expand(s)), delete t[n], s))
                  (i in t) || ((t[i] = s[i]), (e[i] = r));
              else e[n] = r;
          })(c, u.opts.specialEasing);
          s < o;
          s++
        )
          if ((n = ue.prefilters[s].call(u, t, c, u.opts)))
            return (
              v(n.stop) &&
                (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          T.map(c, le, u),
          v(u.opts.start) && u.opts.start.call(t, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          T.fx.timer(T.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (T.Animation = T.extend(ue, {
        tweeners: {
          "*": [
            function (t, e) {
              var i = this.createTween(t, e);
              return lt(i.elem, t, rt.exec(e), i), i;
            },
          ],
        },
        tweener: function (t, e) {
          v(t) ? ((e = t), (t = ["*"])) : (t = t.match(F));
          for (var i, n = 0, r = t.length; n < r; n++)
            (i = t[n]),
              (ue.tweeners[i] = ue.tweeners[i] || []),
              ue.tweeners[i].unshift(e);
        },
        prefilters: [
          function (t, e, i) {
            var n,
              r,
              s,
              o,
              a,
              l,
              u,
              c,
              h = "width" in e || "height" in e,
              f = this,
              p = {},
              d = t.style,
              m = t.nodeType && ot(t),
              _ = J.get(t, "fxshow");
            for (n in (i.queue ||
              (null == (o = T._queueHooks(t, "fx")).unqueued &&
                ((o.unqueued = 0),
                (a = o.empty.fire),
                (o.empty.fire = function () {
                  o.unqueued || a();
                })),
              o.unqueued++,
              f.always(function () {
                f.always(function () {
                  o.unqueued--, T.queue(t, "fx").length || o.empty.fire();
                });
              })),
            e))
              if (((r = e[n]), ne.test(r))) {
                if (
                  (delete e[n],
                  (s = s || "toggle" === r),
                  r === (m ? "hide" : "show"))
                ) {
                  if ("show" !== r || !_ || void 0 === _[n]) continue;
                  m = !0;
                }
                p[n] = (_ && _[n]) || T.style(t, n);
              }
            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(p))
              for (n in (h &&
                1 === t.nodeType &&
                ((i.overflow = [d.overflow, d.overflowX, d.overflowY]),
                null == (u = _ && _.display) && (u = J.get(t, "display")),
                "none" === (c = T.css(t, "display")) &&
                  (u
                    ? (c = u)
                    : (ht([t], !0),
                      (u = t.style.display || u),
                      (c = T.css(t, "display")),
                      ht([t]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === T.css(t, "float") &&
                  (l ||
                    (f.done(function () {
                      d.display = u;
                    }),
                    null == u &&
                      ((c = d.display), (u = "none" === c ? "" : c))),
                  (d.display = "inline-block"))),
              i.overflow &&
                ((d.overflow = "hidden"),
                f.always(function () {
                  (d.overflow = i.overflow[0]),
                    (d.overflowX = i.overflow[1]),
                    (d.overflowY = i.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (_
                    ? "hidden" in _ && (m = _.hidden)
                    : (_ = J.access(t, "fxshow", { display: u })),
                  s && (_.hidden = !m),
                  m && ht([t], !0),
                  f.done(function () {
                    for (n in (m || ht([t]), J.remove(t, "fxshow"), p))
                      T.style(t, n, p[n]);
                  })),
                  (l = le(m ? _[n] : 0, n, f)),
                  n in _ ||
                    ((_[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
        },
      })),
        (T.speed = function (t, e, i) {
          var n =
            t && "object" == typeof t
              ? T.extend({}, t)
              : {
                  complete: i || (!i && e) || (v(t) && t),
                  duration: t,
                  easing: (i && e) || (e && !v(e) && e),
                };
          return (
            T.fx.off
              ? (n.duration = 0)
              : "number" != typeof n.duration &&
                (n.duration in T.fx.speeds
                  ? (n.duration = T.fx.speeds[n.duration])
                  : (n.duration = T.fx.speeds._default)),
            (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
            (n.old = n.complete),
            (n.complete = function () {
              v(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue);
            }),
            n
          );
        }),
        T.fn.extend({
          fadeTo: function (t, e, i, n) {
            return this.filter(ot)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, i, n);
          },
          animate: function (t, e, i, n) {
            var r = T.isEmptyObject(t),
              s = T.speed(e, i, n),
              o = function () {
                var e = ue(this, T.extend({}, t), s);
                (r || J.get(this, "finish")) && e.stop(!0);
              };
            return (
              (o.finish = o),
              r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            );
          },
          stop: function (t, e, i) {
            var n = function (t) {
              var e = t.stop;
              delete t.stop, e(i);
            };
            return (
              "string" != typeof t && ((i = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  r = null != t && t + "queueHooks",
                  s = T.timers,
                  o = J.get(this);
                if (r) o[r] && o[r].stop && n(o[r]);
                else for (r in o) o[r] && o[r].stop && re.test(r) && n(o[r]);
                for (r = s.length; r--; )
                  s[r].elem !== this ||
                    (null != t && s[r].queue !== t) ||
                    (s[r].anim.stop(i), (e = !1), s.splice(r, 1));
                (!e && i) || T.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  i = J.get(this),
                  n = i[t + "queue"],
                  r = i[t + "queueHooks"],
                  s = T.timers,
                  o = n ? n.length : 0;
                for (
                  i.finish = !0,
                    T.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = s.length;
                  e--;

                )
                  s[e].elem === this &&
                    s[e].queue === t &&
                    (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < o; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (t, e) {
          var i = T.fn[e];
          T.fn[e] = function (t, n, r) {
            return null == t || "boolean" == typeof t
              ? i.apply(this, arguments)
              : this.animate(ae(e, !0), t, n, r);
          };
        }),
        T.each(
          {
            slideDown: ae("show"),
            slideUp: ae("hide"),
            slideToggle: ae("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            T.fn[t] = function (t, i, n) {
              return this.animate(e, t, i, n);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var t,
            e = 0,
            i = T.timers;
          for (ee = Date.now(); e < i.length; e++)
            (t = i[e])() || i[e] !== t || i.splice(e--, 1);
          i.length || T.fx.stop(), (ee = void 0);
        }),
        (T.fx.timer = function (t) {
          T.timers.push(t), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          ie || ((ie = !0), se());
        }),
        (T.fx.stop = function () {
          ie = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (t, e) {
          return (
            (t = (T.fx && T.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, n) {
              var r = i.setTimeout(e, t);
              n.stop = function () {
                i.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var t = o.createElement("input"),
            e = o
              .createElement("select")
              .appendChild(o.createElement("option"));
          (t.type = "checkbox"),
            (g.checkOn = "" !== t.value),
            (g.optSelected = e.selected),
            ((t = o.createElement("input")).value = "t"),
            (t.type = "radio"),
            (g.radioValue = "t" === t.value);
        })();
      var ce,
        he = T.expr.attrHandle;
      T.fn.extend({
        attr: function (t, e) {
          return W(this, T.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            T.removeAttr(this, t);
          });
        },
      }),
        T.extend({
          attr: function (t, e, i) {
            var n,
              r,
              s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return void 0 === t.getAttribute
                ? T.prop(t, e, i)
                : ((1 === s && T.isXMLDoc(t)) ||
                    (r =
                      T.attrHooks[e.toLowerCase()] ||
                      (T.expr.match.bool.test(e) ? ce : void 0)),
                  void 0 !== i
                    ? null === i
                      ? void T.removeAttr(t, e)
                      : r && "set" in r && void 0 !== (n = r.set(t, i, e))
                      ? n
                      : (t.setAttribute(e, i + ""), i)
                    : r && "get" in r && null !== (n = r.get(t, e))
                    ? n
                    : null == (n = T.find.attr(t, e))
                    ? void 0
                    : n);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!g.radioValue && "radio" === e && E(t, "input")) {
                  var i = t.value;
                  return t.setAttribute("type", e), i && (t.value = i), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var i,
              n = 0,
              r = e && e.match(F);
            if (r && 1 === t.nodeType)
              for (; (i = r[n++]); ) t.removeAttribute(i);
          },
        }),
        (ce = {
          set: function (t, e, i) {
            return !1 === e ? T.removeAttr(t, i) : t.setAttribute(i, i), i;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var i = he[e] || T.find.attr;
          he[e] = function (t, e, n) {
            var r,
              s,
              o = e.toLowerCase();
            return (
              n ||
                ((s = he[o]),
                (he[o] = r),
                (r = null != i(t, e, n) ? o : null),
                (he[o] = s)),
              r
            );
          };
        });
      var fe = /^(?:input|select|textarea|button)$/i,
        pe = /^(?:a|area)$/i;
      function de(t) {
        return (t.match(F) || []).join(" ");
      }
      function me(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function _e(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(F)) || [];
      }
      T.fn.extend({
        prop: function (t, e) {
          return W(this, T.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[T.propFix[t] || t];
          });
        },
      }),
        T.extend({
          prop: function (t, e, i) {
            var n,
              r,
              s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return (
                (1 === s && T.isXMLDoc(t)) ||
                  ((e = T.propFix[e] || e), (r = T.propHooks[e])),
                void 0 !== i
                  ? r && "set" in r && void 0 !== (n = r.set(t, i, e))
                    ? n
                    : (t[e] = i)
                  : r && "get" in r && null !== (n = r.get(t, e))
                  ? n
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = T.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : fe.test(t.nodeName) || (pe.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        g.optSelected ||
          (T.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (t) {
            var e,
              i,
              n,
              r,
              s,
              o,
              a,
              l = 0;
            if (v(t))
              return this.each(function (e) {
                T(this).addClass(t.call(this, e, me(this)));
              });
            if ((e = _e(t)).length)
              for (; (i = this[l++]); )
                if (
                  ((r = me(i)), (n = 1 === i.nodeType && " " + de(r) + " "))
                ) {
                  for (o = 0; (s = e[o++]); )
                    n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                  r !== (a = de(n)) && i.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              i,
              n,
              r,
              s,
              o,
              a,
              l = 0;
            if (v(t))
              return this.each(function (e) {
                T(this).removeClass(t.call(this, e, me(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = _e(t)).length)
              for (; (i = this[l++]); )
                if (
                  ((r = me(i)), (n = 1 === i.nodeType && " " + de(r) + " "))
                ) {
                  for (o = 0; (s = e[o++]); )
                    for (; n.indexOf(" " + s + " ") > -1; )
                      n = n.replace(" " + s + " ", " ");
                  r !== (a = de(n)) && i.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var i = typeof t,
              n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : v(t)
              ? this.each(function (i) {
                  T(this).toggleClass(t.call(this, i, me(this), e), e);
                })
              : this.each(function () {
                  var e, r, s, o;
                  if (n)
                    for (r = 0, s = T(this), o = _e(t); (e = o[r++]); )
                      s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== i) ||
                      ((e = me(this)) && J.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              i,
              n = 0;
            for (e = " " + t + " "; (i = this[n++]); )
              if (1 === i.nodeType && (" " + de(me(i)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var ge = /\r/g;
      T.fn.extend({
        val: function (t) {
          var e,
            i,
            n,
            r = this[0];
          return arguments.length
            ? ((n = v(t)),
              this.each(function (i) {
                var r;
                1 === this.nodeType &&
                  (null == (r = n ? t.call(this, i, T(this).val()) : t)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = T.map(r, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (e =
                T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (i = e.get(r, "value"))
              ? i
              : "string" == typeof (i = r.value)
              ? i.replace(ge, "")
              : null == i
              ? ""
              : i
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = T.find.attr(t, "value");
                return null != e ? e : de(T.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  i,
                  n,
                  r = t.options,
                  s = t.selectedIndex,
                  o = "select-one" === t.type,
                  a = o ? null : [],
                  l = o ? s + 1 : r.length;
                for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                  if (
                    ((i = r[n]).selected || n === s) &&
                    !i.disabled &&
                    (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))
                  ) {
                    if (((e = T(i).val()), o)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function (t, e) {
                for (
                  var i, n, r = t.options, s = T.makeArray(e), o = r.length;
                  o--;

                )
                  ((n = r[o]).selected =
                    T.inArray(T.valHooks.option.get(n), s) > -1) && (i = !0);
                return i || (t.selectedIndex = -1), s;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = T.inArray(T(t).val(), e) > -1);
            },
          }),
            g.checkOn ||
              (T.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (g.focusin = "onfocusin" in i);
      var ve = /^(?:focusinfocus|focusoutblur)$/,
        ye = function (t) {
          t.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (t, e, n, r) {
          var s,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            m = [n || o],
            _ = d.call(t, "type") ? t.type : t,
            g = d.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = p = l = n = n || o),
            3 !== n.nodeType &&
              8 !== n.nodeType &&
              !ve.test(_ + T.event.triggered) &&
              (_.indexOf(".") > -1 &&
                ((_ = (g = _.split(".")).shift()), g.sort()),
              (c = _.indexOf(":") < 0 && "on" + _),
              ((t = t[T.expando]
                ? t
                : new T.Event(_, "object" == typeof t && t)).isTrigger = r
                ? 2
                : 3),
              (t.namespace = g.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = n),
              (e = null == e ? [t] : T.makeArray(e, [t])),
              (f = T.event.special[_] || {}),
              r || !f.trigger || !1 !== f.trigger.apply(n, e)))
          ) {
            if (!r && !f.noBubble && !y(n)) {
              for (
                u = f.delegateType || _, ve.test(u + _) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                m.push(a), (l = a);
              l === (n.ownerDocument || o) &&
                m.push(l.defaultView || l.parentWindow || i);
            }
            for (s = 0; (a = m[s++]) && !t.isPropagationStopped(); )
              (p = a),
                (t.type = s > 1 ? u : f.bindType || _),
                (h =
                  (J.get(a, "events") || {})[t.type] && J.get(a, "handle")) &&
                  h.apply(a, e),
                (h = c && a[c]) &&
                  h.apply &&
                  Z(a) &&
                  ((t.result = h.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = _),
              r ||
                t.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(m.pop(), e)) ||
                !Z(n) ||
                (c &&
                  v(n[_]) &&
                  !y(n) &&
                  ((l = n[c]) && (n[c] = null),
                  (T.event.triggered = _),
                  t.isPropagationStopped() && p.addEventListener(_, ye),
                  n[_](),
                  t.isPropagationStopped() && p.removeEventListener(_, ye),
                  (T.event.triggered = void 0),
                  l && (n[c] = l))),
              t.result
            );
          }
        },
        simulate: function (t, e, i) {
          var n = T.extend(new T.Event(), i, { type: t, isSimulated: !0 });
          T.event.trigger(n, null, e);
        },
      }),
        T.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              T.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return T.event.trigger(t, e, i, !0);
          },
        }),
        g.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var i = function (t) {
              T.event.simulate(e, t.target, T.event.fix(t));
            };
            T.event.special[e] = {
              setup: function () {
                var n = this.ownerDocument || this,
                  r = J.access(n, e);
                r || n.addEventListener(t, i, !0), J.access(n, e, (r || 0) + 1);
              },
              teardown: function () {
                var n = this.ownerDocument || this,
                  r = J.access(n, e) - 1;
                r
                  ? J.access(n, e, r)
                  : (n.removeEventListener(t, i, !0), J.remove(n, e));
              },
            };
          });
      var be = i.location,
        xe = Date.now(),
        we = /\?/;
      T.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new i.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + t),
          e
        );
      };
      var Te = /\[\]$/,
        ke = /\r?\n/g,
        Pe = /^(?:submit|button|image|reset|file)$/i,
        Ce = /^(?:input|select|textarea|keygen)/i;
      function Se(t, e, i, n) {
        var r;
        if (Array.isArray(e))
          T.each(e, function (e, r) {
            i || Te.test(t)
              ? n(t, r)
              : Se(
                  t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                  r,
                  i,
                  n
                );
          });
        else if (i || "object" !== w(e)) n(t, e);
        else for (r in e) Se(t + "[" + r + "]", e[r], i, n);
      }
      (T.param = function (t, e) {
        var i,
          n = [],
          r = function (t, e) {
            var i = v(e) ? e() : e;
            n[n.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == i ? "" : i);
          };
        if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
          T.each(t, function () {
            r(this.name, this.value);
          });
        else for (i in t) Se(i, t[i], e, r);
        return n.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = T.prop(this, "elements");
              return t ? T.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Ce.test(this.nodeName) &&
                  !Pe.test(t) &&
                  (this.checked || !ft.test(t))
                );
              })
              .map(function (t, e) {
                var i = T(this).val();
                return null == i
                  ? null
                  : Array.isArray(i)
                  ? T.map(i, function (t) {
                      return { name: e.name, value: t.replace(ke, "\r\n") };
                    })
                  : { name: e.name, value: i.replace(ke, "\r\n") };
              })
              .get();
          },
        });
      var Oe = /%20/g,
        Ae = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Re = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        je = {},
        Le = {},
        Ne = "*/".concat("*"),
        Ie = o.createElement("a");
      function Fe(t) {
        return function (e, i) {
          "string" != typeof e && ((i = e), (e = "*"));
          var n,
            r = 0,
            s = e.toLowerCase().match(F) || [];
          if (v(i))
            for (; (n = s[r++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
                : (t[n] = t[n] || []).push(i);
        };
      }
      function qe(t, e, i, n) {
        var r = {},
          s = t === Le;
        function o(a) {
          var l;
          return (
            (r[a] = !0),
            T.each(t[a] || [], function (t, a) {
              var u = a(e, i, n);
              return "string" != typeof u || s || r[u]
                ? s
                  ? !(l = u)
                  : void 0
                : (e.dataTypes.unshift(u), o(u), !1);
            }),
            l
          );
        }
        return o(e.dataTypes[0]) || (!r["*"] && o("*"));
      }
      function ze(t, e) {
        var i,
          n,
          r = T.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && T.extend(!0, t, n), t;
      }
      (Ie.href = be.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: be.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                be.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ne,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? ze(ze(t, T.ajaxSettings), e) : ze(T.ajaxSettings, t);
          },
          ajaxPrefilter: Fe(je),
          ajaxTransport: Fe(Le),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var n,
              r,
              s,
              a,
              l,
              u,
              c,
              h,
              f,
              p,
              d = T.ajaxSetup({}, e),
              m = d.context || d,
              _ = d.context && (m.nodeType || m.jquery) ? T(m) : T.event,
              g = T.Deferred(),
              v = T.Callbacks("once memory"),
              y = d.statusCode || {},
              b = {},
              x = {},
              w = "canceled",
              k = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (c) {
                    if (!a)
                      for (a = {}; (e = De.exec(s)); )
                        a[e[1].toLowerCase()] = e[2];
                    e = a[t.toLowerCase()];
                  }
                  return null == e ? null : e;
                },
                getAllResponseHeaders: function () {
                  return c ? s : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == c &&
                      ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                      (b[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == c && (d.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (c) k.always(t[k.status]);
                    else for (e in t) y[e] = [y[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || w;
                  return n && n.abort(e), P(0, e), this;
                },
              };
            if (
              (g.promise(k),
              (d.url = ((t || d.url || be.href) + "").replace(
                Me,
                be.protocol + "//"
              )),
              (d.type = e.method || e.type || d.method || d.type),
              (d.dataTypes = (d.dataType || "*").toLowerCase().match(F) || [
                "",
              ]),
              null == d.crossDomain)
            ) {
              u = o.createElement("a");
              try {
                (u.href = d.url),
                  (u.href = u.href),
                  (d.crossDomain =
                    Ie.protocol + "//" + Ie.host != u.protocol + "//" + u.host);
              } catch (t) {
                d.crossDomain = !0;
              }
            }
            if (
              (d.data &&
                d.processData &&
                "string" != typeof d.data &&
                (d.data = T.param(d.data, d.traditional)),
              qe(je, d, e, k),
              c)
            )
              return k;
            for (f in ((h = T.event && d.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !Re.test(d.type)),
            (r = d.url.replace(Ae, "")),
            d.hasContent
              ? d.data &&
                d.processData &&
                0 ===
                  (d.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (d.data = d.data.replace(Oe, "+"))
              : ((p = d.url.slice(r.length)),
                d.data &&
                  (d.processData || "string" == typeof d.data) &&
                  ((r += (we.test(r) ? "&" : "?") + d.data), delete d.data),
                !1 === d.cache &&
                  ((r = r.replace(Ee, "$1")),
                  (p = (we.test(r) ? "&" : "?") + "_=" + xe++ + p)),
                (d.url = r + p)),
            d.ifModified &&
              (T.lastModified[r] &&
                k.setRequestHeader("If-Modified-Since", T.lastModified[r]),
              T.etag[r] && k.setRequestHeader("If-None-Match", T.etag[r])),
            ((d.data && d.hasContent && !1 !== d.contentType) ||
              e.contentType) &&
              k.setRequestHeader("Content-Type", d.contentType),
            k.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    ("*" !== d.dataTypes[0] ? ", " + Ne + "; q=0.01" : "")
                : d.accepts["*"]
            ),
            d.headers))
              k.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(m, k, d) || c))
              return k.abort();
            if (
              ((w = "abort"),
              v.add(d.complete),
              k.done(d.success),
              k.fail(d.error),
              (n = qe(Le, d, e, k)))
            ) {
              if (((k.readyState = 1), h && _.trigger("ajaxSend", [k, d]), c))
                return k;
              d.async &&
                d.timeout > 0 &&
                (l = i.setTimeout(function () {
                  k.abort("timeout");
                }, d.timeout));
              try {
                (c = !1), n.send(b, P);
              } catch (t) {
                if (c) throw t;
                P(-1, t);
              }
            } else P(-1, "No Transport");
            function P(t, e, o, a) {
              var u,
                f,
                p,
                b,
                x,
                w = e;
              c ||
                ((c = !0),
                l && i.clearTimeout(l),
                (n = void 0),
                (s = a || ""),
                (k.readyState = t > 0 ? 4 : 0),
                (u = (t >= 200 && t < 300) || 304 === t),
                o &&
                  (b = (function (t, e, i) {
                    for (
                      var n, r, s, o, a = t.contents, l = t.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === n &&
                          (n =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                      for (r in a)
                        if (a[r] && a[r].test(n)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in i) s = l[0];
                    else {
                      for (r in i) {
                        if (!l[0] || t.converters[r + " " + l[0]]) {
                          s = r;
                          break;
                        }
                        o || (o = r);
                      }
                      s = s || o;
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s];
                  })(d, k, o)),
                (b = (function (t, e, i, n) {
                  var r,
                    s,
                    o,
                    a,
                    l,
                    u = {},
                    c = t.dataTypes.slice();
                  if (c[1])
                    for (o in t.converters)
                      u[o.toLowerCase()] = t.converters[o];
                  for (s = c.shift(); s; )
                    if (
                      (t.responseFields[s] && (i[t.responseFields[s]] = e),
                      !l &&
                        n &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (l = s),
                      (s = c.shift()))
                    )
                      if ("*" === s) s = l;
                      else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                          for (r in u)
                            if (
                              (a = r.split(" "))[1] === s &&
                              (o = u[l + " " + a[0]] || u["* " + a[0]])
                            ) {
                              !0 === o
                                ? (o = u[r])
                                : !0 !== u[r] && ((s = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== o)
                          if (o && t.throws) e = o(e);
                          else
                            try {
                              e = o(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: o
                                  ? t
                                  : "No conversion from " + l + " to " + s,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(d, b, k, u)),
                u
                  ? (d.ifModified &&
                      ((x = k.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[r] = x),
                      (x = k.getResponseHeader("etag")) && (T.etag[r] = x)),
                    204 === t || "HEAD" === d.type
                      ? (w = "nocontent")
                      : 304 === t
                      ? (w = "notmodified")
                      : ((w = b.state), (f = b.data), (u = !(p = b.error))))
                  : ((p = w), (!t && w) || ((w = "error"), t < 0 && (t = 0))),
                (k.status = t),
                (k.statusText = (e || w) + ""),
                u ? g.resolveWith(m, [f, w, k]) : g.rejectWith(m, [k, w, p]),
                k.statusCode(y),
                (y = void 0),
                h &&
                  _.trigger(u ? "ajaxSuccess" : "ajaxError", [k, d, u ? f : p]),
                v.fireWith(m, [k, w]),
                h &&
                  (_.trigger("ajaxComplete", [k, d]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return k;
          },
          getJSON: function (t, e, i) {
            return T.get(t, e, i, "json");
          },
          getScript: function (t, e) {
            return T.get(t, void 0, e, "script");
          },
        }),
        T.each(["get", "post"], function (t, e) {
          T[e] = function (t, i, n, r) {
            return (
              v(i) && ((r = r || n), (n = i), (i = void 0)),
              T.ajax(
                T.extend(
                  { url: t, type: e, dataType: r, data: i, success: n },
                  T.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (T._evalUrl = function (t) {
          return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        T.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (v(t) && (t = t.call(this[0])),
                (e = T(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return v(t)
              ? this.each(function (e) {
                  T(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = T(this),
                    i = e.contents();
                  i.length ? i.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = v(t);
            return this.each(function (i) {
              T(this).wrapAll(e ? t.call(this, i) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (t) {
          return !T.expr.pseudos.visible(t);
        }),
        (T.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new i.XMLHttpRequest();
          } catch (t) {}
        });
      var Be = { 0: 200, 1223: 204 },
        He = T.ajaxSettings.xhr();
      (g.cors = !!He && "withCredentials" in He),
        (g.ajax = He = !!He),
        T.ajaxTransport(function (t) {
          var e, n;
          if (g.cors || (He && !t.crossDomain))
            return {
              send: function (r, s) {
                var o,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (o in t.xhrFields) a[o] = t.xhrFields[o];
                for (o in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  a.setRequestHeader(o, r[o]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e =
                        n =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? s(0, "error")
                          : s(a.status, a.statusText)
                        : s(
                            Be[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (n = a.onerror = a.ontimeout = e("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = n)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          i.setTimeout(function () {
                            e && n();
                          });
                      }),
                  (e = e("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        T.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return T.globalEval(t), t;
            },
          },
        }),
        T.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        T.ajaxTransport("script", function (t) {
          var e, i;
          if (t.crossDomain)
            return {
              send: function (n, r) {
                (e = T("<script>")
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (i = function (t) {
                      e.remove(),
                        (i = null),
                        t && r("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  o.head.appendChild(e[0]);
              },
              abort: function () {
                i && i();
              },
            };
        });
      var Xe = [],
        $e = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Xe.pop() || T.expando + "_" + xe++;
          return (this[t] = !0), t;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (t, e, n) {
          var r,
            s,
            o,
            a =
              !1 !== t.jsonp &&
              ($e.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  $e.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (r = t.jsonpCallback =
                v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace($e, "$1" + r))
                : !1 !== t.jsonp &&
                  (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
              (t.converters["script json"] = function () {
                return o || T.error(r + " was not called"), o[0];
              }),
              (t.dataTypes[0] = "json"),
              (s = i[r]),
              (i[r] = function () {
                o = arguments;
              }),
              n.always(function () {
                void 0 === s ? T(i).removeProp(r) : (i[r] = s),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), Xe.push(r)),
                  o && v(s) && s(o[0]),
                  (o = s = void 0);
              }),
              "script"
            );
        }),
        (g.createHTMLDocument = (function () {
          var t = o.implementation.createHTMLDocument("").body;
          return (
            (t.innerHTML = "<form></form><form></form>"),
            2 === t.childNodes.length
          );
        })()),
        (T.parseHTML = function (t, e, i) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((i = e), (e = !1)),
              e ||
                (g.createHTMLDocument
                  ? (((n = (e =
                      o.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = o.location.href),
                    e.head.appendChild(n))
                  : (e = o)),
              (r = D.exec(t)),
              (s = !i && []),
              r
                ? [e.createElement(r[1])]
                : ((r = yt([t], e, s)),
                  s && s.length && T(s).remove(),
                  T.merge([], r.childNodes)));
          var n, r, s;
        }),
        (T.fn.load = function (t, e, i) {
          var n,
            r,
            s,
            o = this,
            a = t.indexOf(" ");
          return (
            a > -1 && ((n = de(t.slice(a))), (t = t.slice(0, a))),
            v(e)
              ? ((i = e), (e = void 0))
              : e && "object" == typeof e && (r = "POST"),
            o.length > 0 &&
              T.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (s = arguments),
                    o.html(n ? T("<div>").append(T.parseHTML(t)).find(n) : t);
                })
                .always(
                  i &&
                    function (t, e) {
                      o.each(function () {
                        i.apply(this, s || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            T.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        (T.expr.pseudos.animated = function (t) {
          return T.grep(T.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (t, e, i) {
            var n,
              r,
              s,
              o,
              a,
              l,
              u = T.css(t, "position"),
              c = T(t),
              h = {};
            "static" === u && (t.style.position = "relative"),
              (a = c.offset()),
              (s = T.css(t, "top")),
              (l = T.css(t, "left")),
              ("absolute" === u || "fixed" === u) &&
              (s + l).indexOf("auto") > -1
                ? ((o = (n = c.position()).top), (r = n.left))
                : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
              v(e) && (e = e.call(t, i, T.extend({}, a))),
              null != e.top && (h.top = e.top - a.top + o),
              null != e.left && (h.left = e.left - a.left + r),
              "using" in e ? e.using.call(t, h) : c.css(h);
          },
        }),
        T.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    T.offset.setOffset(this, t, e);
                  });
            var e,
              i,
              n = this[0];
            return n
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (i = n.ownerDocument.defaultView),
                  { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                i,
                n = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === T.css(n, "position"))
                e = n.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    i = n.ownerDocument,
                    t = n.offsetParent || i.documentElement;
                  t &&
                  (t === i.body || t === i.documentElement) &&
                  "static" === T.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== n &&
                  1 === t.nodeType &&
                  (((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0)),
                  (r.left += T.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - r.top - T.css(n, "marginTop", !0),
                left: e.left - r.left - T.css(n, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === T.css(t, "position");

              )
                t = t.offsetParent;
              return t || bt;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var i = "pageYOffset" === e;
            T.fn[t] = function (n) {
              return W(
                this,
                function (t, n, r) {
                  var s;
                  if (
                    (y(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView),
                    void 0 === r)
                  )
                    return s ? s[e] : t[n];
                  s
                    ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset)
                    : (t[n] = r);
                },
                t,
                n,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (t, e) {
          T.cssHooks[e] = Xt(g.pixelPosition, function (t, i) {
            if (i)
              return (i = Ht(t, e)), qt.test(i) ? T(t).position()[e] + "px" : i;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (t, e) {
          T.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (i, n) {
              T.fn[n] = function (r, s) {
                var o = arguments.length && (i || "boolean" != typeof r),
                  a = i || (!0 === r || !0 === s ? "margin" : "border");
                return W(
                  this,
                  function (e, i, r) {
                    var s;
                    return y(e)
                      ? 0 === n.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((s = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          s["scroll" + t],
                          e.body["offset" + t],
                          s["offset" + t],
                          s["client" + t]
                        ))
                      : void 0 === r
                      ? T.css(e, i, a)
                      : T.style(e, i, r, a);
                  },
                  e,
                  o ? r : void 0,
                  o
                );
              };
            }
          );
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            T.fn[e] = function (t, i) {
              return arguments.length > 0
                ? this.on(e, null, t, i)
                : this.trigger(e);
            };
          }
        ),
        T.fn.extend({
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        T.fn.extend({
          bind: function (t, e, i) {
            return this.on(t, null, e, i);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, i, n) {
            return this.on(e, t, i, n);
          },
          undelegate: function (t, e, i) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", i);
          },
        }),
        (T.proxy = function (t, e) {
          var i, n, r;
          if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), v(t)))
            return (
              (n = l.call(arguments, 2)),
              ((r = function () {
                return t.apply(e || this, n.concat(l.call(arguments)));
              }).guid = t.guid =
                t.guid || T.guid++),
              r
            );
        }),
        (T.holdReady = function (t) {
          t ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = E),
        (T.isFunction = v),
        (T.isWindow = y),
        (T.camelCase = G),
        (T.type = w),
        (T.now = Date.now),
        (T.isNumeric = function (t) {
          var e = T.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        void 0 ===
          (n = function () {
            return T;
          }.apply(e, [])) || (t.exports = n);
      var We = i.jQuery,
        Ye = i.$;
      return (
        (T.noConflict = function (t) {
          return (
            i.$ === T && (i.$ = Ye), t && i.jQuery === T && (i.jQuery = We), T
          );
        }),
        r || (i.jQuery = i.$ = T),
        T
      );
    });
  },
  function (t, e, i) {
    /*!
     * domready (c) Dustin Diaz 2014 - License MIT
     */
    t.exports = (function () {
      var t,
        e = [],
        i = document,
        n = (i.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          i.readyState
        );
      return (
        n ||
          i.addEventListener(
            "DOMContentLoaded",
            (t = function () {
              for (
                i.removeEventListener("DOMContentLoaded", t), n = 1;
                (t = e.shift());

              )
                t();
            })
          ),
        function (t) {
          n ? setTimeout(t, 0) : e.push(t);
        }
      );
    })();
  },
  function (t, e) {
    function i() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function n(t) {
      return "function" == typeof t;
    }
    function r(t) {
      return "object" == typeof t && null !== t;
    }
    function s(t) {
      return void 0 === t;
    }
    (t.exports = i),
      (i.EventEmitter = i),
      (i.prototype._events = void 0),
      (i.prototype._maxListeners = void 0),
      (i.defaultMaxListeners = 10),
      (i.prototype.setMaxListeners = function (t) {
        if (
          !(function (t) {
            return "number" == typeof t;
          })(t) ||
          t < 0 ||
          isNaN(t)
        )
          throw TypeError("n must be a positive number");
        return (this._maxListeners = t), this;
      }),
      (i.prototype.emit = function (t) {
        var e, i, o, a, l, u;
        if (
          (this._events || (this._events = {}),
          "error" === t &&
            (!this._events.error ||
              (r(this._events.error) && !this._events.error.length)))
        ) {
          if ((e = arguments[1]) instanceof Error) throw e;
          var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
          throw ((c.context = e), c);
        }
        if (s((i = this._events[t]))) return !1;
        if (n(i))
          switch (arguments.length) {
            case 1:
              i.call(this);
              break;
            case 2:
              i.call(this, arguments[1]);
              break;
            case 3:
              i.call(this, arguments[1], arguments[2]);
              break;
            default:
              (a = Array.prototype.slice.call(arguments, 1)), i.apply(this, a);
          }
        else if (r(i))
          for (
            a = Array.prototype.slice.call(arguments, 1),
              o = (u = i.slice()).length,
              l = 0;
            l < o;
            l++
          )
            u[l].apply(this, a);
        return !0;
      }),
      (i.prototype.addListener = function (t, e) {
        var o;
        if (!n(e)) throw TypeError("listener must be a function");
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit("newListener", t, n(e.listener) ? e.listener : e),
          this._events[t]
            ? r(this._events[t])
              ? this._events[t].push(e)
              : (this._events[t] = [this._events[t], e])
            : (this._events[t] = e),
          r(this._events[t]) &&
            !this._events[t].warned &&
            (o = s(this._maxListeners)
              ? i.defaultMaxListeners
              : this._maxListeners) &&
            o > 0 &&
            this._events[t].length > o &&
            ((this._events[t].warned = !0),
            console.error(
              "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
              this._events[t].length
            ),
            "function" == typeof console.trace && console.trace()),
          this
        );
      }),
      (i.prototype.on = i.prototype.addListener),
      (i.prototype.once = function (t, e) {
        if (!n(e)) throw TypeError("listener must be a function");
        var i = !1;
        function r() {
          this.removeListener(t, r), i || ((i = !0), e.apply(this, arguments));
        }
        return (r.listener = e), this.on(t, r), this;
      }),
      (i.prototype.removeListener = function (t, e) {
        var i, s, o, a;
        if (!n(e)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[t]) return this;
        if (
          ((o = (i = this._events[t]).length),
          (s = -1),
          i === e || (n(i.listener) && i.listener === e))
        )
          delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (r(i)) {
          for (a = o; a-- > 0; )
            if (i[a] === e || (i[a].listener && i[a].listener === e)) {
              s = a;
              break;
            }
          if (s < 0) return this;
          1 === i.length
            ? ((i.length = 0), delete this._events[t])
            : i.splice(s, 1),
            this._events.removeListener && this.emit("removeListener", t, e);
        }
        return this;
      }),
      (i.prototype.removeAllListeners = function (t) {
        var e, i;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[t] && delete this._events[t],
            this
          );
        if (0 === arguments.length) {
          for (e in this._events)
            "removeListener" !== e && this.removeAllListeners(e);
          return (
            this.removeAllListeners("removeListener"), (this._events = {}), this
          );
        }
        if (n((i = this._events[t]))) this.removeListener(t, i);
        else if (i) for (; i.length; ) this.removeListener(t, i[i.length - 1]);
        return delete this._events[t], this;
      }),
      (i.prototype.listeners = function (t) {
        return this._events && this._events[t]
          ? n(this._events[t])
            ? [this._events[t]]
            : this._events[t].slice()
          : [];
      }),
      (i.prototype.listenerCount = function (t) {
        if (this._events) {
          var e = this._events[t];
          if (n(e)) return 1;
          if (e) return e.length;
        }
        return 0;
      }),
      (i.listenerCount = function (t, e) {
        return t.listenerCount(e);
      });
  },
  function (t, e) {
    function i(t, e, i) {
      var n, r, s, o, a;
      function l() {
        var u = Date.now() - o;
        u < e && u >= 0
          ? (n = setTimeout(l, e - u))
          : ((n = null), i || ((a = t.apply(s, r)), (s = r = null)));
      }
      null == e && (e = 100);
      var u = function () {
        (s = this), (r = arguments), (o = Date.now());
        var u = i && !n;
        return (
          n || (n = setTimeout(l, e)),
          u && ((a = t.apply(s, r)), (s = r = null)),
          a
        );
      };
      return (
        (u.clear = function () {
          n && (clearTimeout(n), (n = null));
        }),
        (u.flush = function () {
          n &&
            ((a = t.apply(s, r)), (s = r = null), clearTimeout(n), (n = null));
        }),
        u
      );
    }
    (i.debounce = i), (t.exports = i);
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(2),
      r = i.n(n),
      s = i(1),
      o = i.n(s),
      a = {
        window: window,
        document: document,
        $window: o()(window),
        $document: o()(document),
        $htmlBody: o()("html, body"),
        $html: o()("html"),
        $body: o()("body"),
      },
      l = i(0);
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    l.e._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function () {
        var t = function (t) {
            l.c.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
              (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var e,
              i,
              n = this.vars;
            for (i in n)
              (e = n[i]),
                r(e) &&
                  -1 !== e.join("").indexOf("{self}") &&
                  (n[i] = this._swapSelfInParams(e));
            r(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
          },
          e = l.f._internals,
          i = (t._internals = {}),
          n = e.isSelector,
          r = e.isArray,
          s = e.lazyTweens,
          o = e.lazyRender,
          a = l.e._gsDefine.globals,
          u = function (t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          c = function (t, e, i) {
            var n,
              r,
              s = t.cycle;
            for (n in s)
              (r = s[n]),
                (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
            delete t.cycle;
          },
          h = (i.pauseCallback = function () {}),
          f = function (t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          p = (t.prototype = new l.c());
        return (
          (t.version = "2.0.2"),
          (p.constructor = t),
          (p.kill()._gc = p._forcingPlayhead = p._hasPause = !1),
          (p.to = function (t, e, i, n) {
            var r = (i.repeat && a.TweenMax) || l.f;
            return e ? this.add(new r(t, e, i), n) : this.set(t, i, n);
          }),
          (p.from = function (t, e, i, n) {
            return this.add(((i.repeat && a.TweenMax) || l.f).from(t, e, i), n);
          }),
          (p.fromTo = function (t, e, i, n, r) {
            var s = (n.repeat && a.TweenMax) || l.f;
            return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r);
          }),
          (p.staggerTo = function (e, i, r, s, o, a, h, p) {
            var d,
              m,
              _ = new t({
                onComplete: a,
                onCompleteParams: h,
                callbackScope: p,
                smoothChildTiming: this.smoothChildTiming,
              }),
              g = r.cycle;
            for (
              "string" == typeof e && (e = l.f.selector(e) || e),
                n((e = e || [])) && (e = f(e)),
                (s = s || 0) < 0 && ((e = f(e)).reverse(), (s *= -1)),
                m = 0;
              m < e.length;
              m++
            )
              (d = u(r)).startAt &&
                ((d.startAt = u(d.startAt)),
                d.startAt.cycle && c(d.startAt, e, m)),
                g &&
                  (c(d, e, m),
                  null != d.duration && ((i = d.duration), delete d.duration)),
                _.to(e[m], i, d, m * s);
            return this.add(_, o);
          }),
          (p.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, n, r, s, o, a)
            );
          }),
          (p.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, n, r, s, o, a, l)
            );
          }),
          (p.call = function (t, e, i, n) {
            return this.add(l.f.delayedCall(0, t, e, i), n);
          }),
          (p.set = function (t, e, i) {
            return (
              (i = this._parseTimeOrLabel(i, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = i === this._time && !this._paused),
              this.add(new l.f(t, 0, e), i)
            );
          }),
          (t.exportRoot = function (e, i) {
            null == (e = e || {}).smoothChildTiming &&
              (e.smoothChildTiming = !0);
            var n,
              r,
              s,
              o,
              a = new t(e),
              u = a._timeline;
            for (
              null == i && (i = !0),
                u._remove(a, !0),
                a._startTime = 0,
                a._rawPrevTime = a._time = a._totalTime = u._time,
                s = u._first;
              s;

            )
              (o = s._next),
                (i && s instanceof l.f && s.target === s.vars.onComplete) ||
                  ((r = s._startTime - s._delay) < 0 && (n = 1), a.add(s, r)),
                (s = o);
            return u.add(a, 0), n && a.totalDuration(), a;
          }),
          (p.add = function (e, i, n, s) {
            var o, a, u, c, h, f;
            if (
              ("number" != typeof i &&
                (i = this._parseTimeOrLabel(i, 0, !0, e)),
              !(e instanceof l.a))
            ) {
              if (e instanceof Array || (e && e.push && r(e))) {
                for (
                  n = n || "normal", s = s || 0, o = i, a = e.length, u = 0;
                  u < a;
                  u++
                )
                  r((c = e[u])) && (c = new t({ tweens: c })),
                    this.add(c, o),
                    "string" != typeof c &&
                      "function" != typeof c &&
                      ("sequence" === n
                        ? (o = c._startTime + c.totalDuration() / c._timeScale)
                        : "start" === n && (c._startTime -= c.delay())),
                    (o += s);
                return this._uncache(!0);
              }
              if ("string" == typeof e) return this.addLabel(e, i);
              if ("function" != typeof e)
                throw (
                  "Cannot add " +
                  e +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              e = l.f.delayedCall(0, e);
            }
            if (
              (l.c.prototype.add.call(this, e, i),
              e._time &&
                ((o = Math.max(
                  0,
                  Math.min(
                    e.totalDuration(),
                    (this.rawTime() - e._startTime) * e._timeScale
                  )
                )),
                Math.abs(o - e._totalTime) > 1e-5 && e.render(o, !1, !1)),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (f = (h = this).rawTime() > e._startTime; h._timeline; )
                f && h._timeline.smoothChildTiming
                  ? h.totalTime(h._totalTime, !0)
                  : h._gc && h._enabled(!0, !1),
                  (h = h._timeline);
            return this;
          }),
          (p.remove = function (t) {
            if (t instanceof l.a) {
              this._remove(t, !1);
              var e = (t._timeline = t.vars.useFrames
                ? l.a._rootFramesTimeline
                : l.a._rootTimeline);
              return (
                (t._startTime =
                  (t._paused ? t._pauseTime : e._time) -
                  (t._reversed
                    ? t.totalDuration() - t._totalTime
                    : t._totalTime) /
                    t._timeScale),
                this
              );
            }
            if (t instanceof Array || (t && t.push && r(t))) {
              for (var i = t.length; --i > -1; ) this.remove(t[i]);
              return this;
            }
            return "string" == typeof t
              ? this.removeLabel(t)
              : this.kill(null, t);
          }),
          (p._remove = function (t, e) {
            return (
              l.c.prototype._remove.call(this, t, e),
              this._last
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (p.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (p.insert = p.insertMultiple =
            function (t, e, i, n) {
              return this.add(t, e || 0, i, n);
            }),
          (p.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
          }),
          (p.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (p.addPause = function (t, e, i, n) {
            var r = l.f.delayedCall(0, h, i, n || this);
            return (
              (r.vars.onComplete = r.vars.onReverseComplete = e),
              (r.data = "isPause"),
              (this._hasPause = !0),
              this.add(r, t)
            );
          }),
          (p.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (p.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (p._parseTimeOrLabel = function (t, e, i, n) {
            var s, o;
            if (n instanceof l.a && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || (n.push && r(n))))
              for (o = n.length; --o > -1; )
                n[o] instanceof l.a &&
                  n[o].timeline === this &&
                  this.remove(n[o]);
            if (
              ((s =
                "number" != typeof t || e
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof e)
            )
              return this._parseTimeOrLabel(
                e,
                i && "number" == typeof t && null == this._labels[e]
                  ? t - s
                  : 0,
                i
              );
            if (
              ((e = e || 0),
              "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
            )
              null == t && (t = s);
            else {
              if (-1 === (o = t.indexOf("=")))
                return null == this._labels[t]
                  ? i
                    ? (this._labels[t] = s + e)
                    : e
                  : this._labels[t] + e;
              (e =
                parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1))),
                (t =
                  o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : s);
            }
            return Number(t) + e;
          }),
          (p.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            );
          }),
          (p.stop = function () {
            return this.paused(!0);
          }),
          (p.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (p.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (p.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              r,
              a,
              l,
              u,
              c,
              h,
              f = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._startTime,
              m = this._timeScale,
              _ = this._paused;
            if (
              (f !== this._time && (t += this._time - f),
              t >= p - 1e-7 && t >= 0)
            )
              (this._totalTime = this._time = p),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((r = !0),
                  (l = "onComplete"),
                  (u = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      1e-10 === this._rawPrevTime) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((u = !0),
                    this._rawPrevTime > 1e-10 && (l = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-10),
                (t = p + 1e-4);
            else if (t < 1e-7)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== f ||
                  (0 === this._duration &&
                    1e-10 !== this._rawPrevTime &&
                    (this._rawPrevTime > 0 ||
                      (t < 0 && this._rawPrevTime >= 0)))) &&
                  ((l = "onReverseComplete"), (r = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((u = r = !0), (l = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (u = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : 1e-10),
                  0 === t && r)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (r = !1), (n = n._next);
                (t = 0), this._initted || (u = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (t >= f)
                  for (n = this._first; n && n._startTime <= t && !c; )
                    n._duration ||
                      "isPause" !== n.data ||
                      n.ratio ||
                      (0 === n._startTime && 0 === this._rawPrevTime) ||
                      (c = n),
                      (n = n._next);
                else
                  for (n = this._last; n && n._startTime >= t && !c; )
                    n._duration ||
                      ("isPause" === n.data && n._rawPrevTime > 0 && (c = n)),
                      (n = n._prev);
                c &&
                  ((this._time = t = c._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = t;
            }
            if ((this._time !== f && this._first) || i || u || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== f &&
                    t > 0 &&
                    (this._active = !0)),
                0 === f &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    e ||
                    this._callback("onStart")),
                (h = this._time) >= f)
              )
                for (
                  n = this._first;
                  n &&
                  ((a = n._next), h === this._time && (!this._paused || _));

                )
                  (n._active || (n._startTime <= h && !n._paused && !n._gc)) &&
                    (c === n && this.pause(),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = a);
              else
                for (
                  n = this._last;
                  n &&
                  ((a = n._prev), h === this._time && (!this._paused || _));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= f && !n._paused && !n._gc)
                  ) {
                    if (c === n) {
                      for (c = n._prev; c && c.endTime() > this._time; )
                        c.render(
                          c._reversed
                            ? c.totalDuration() -
                                (t - c._startTime) * c._timeScale
                            : (t - c._startTime) * c._timeScale,
                          e,
                          i
                        ),
                          (c = c._prev);
                      (c = null), this.pause();
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i);
                  }
                  n = a;
                }
              this._onUpdate &&
                (e || (s.length && o(), this._callback("onUpdate"))),
                l &&
                  (this._gc ||
                    (d !== this._startTime && m === this._timeScale) ||
                    ((0 === this._time || p >= this.totalDuration()) &&
                      (r &&
                        (s.length && o(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))));
            }
          }),
          (p._hasPausedChild = function () {
            for (var e = this._first; e; ) {
              if (e._paused || (e instanceof t && e._hasPausedChild()))
                return !0;
              e = e._next;
            }
            return !1;
          }),
          (p.getChildren = function (t, e, i, n) {
            n = n || -9999999999;
            for (var r = [], s = this._first, o = 0; s; )
              s._startTime < n ||
                (s instanceof l.f
                  ? !1 !== e && (r[o++] = s)
                  : (!1 !== i && (r[o++] = s),
                    !1 !== t &&
                      (o = (r = r.concat(s.getChildren(!0, e, i))).length))),
                (s = s._next);
            return r;
          }),
          (p.getTweensOf = function (t, e) {
            var i,
              n,
              r = this._gc,
              s = [],
              o = 0;
            for (
              r && this._enabled(!0, !0), n = (i = l.f.getTweensOf(t)).length;
              --n > -1;

            )
              (i[n].timeline === this || (e && this._contains(i[n]))) &&
                (s[o++] = i[n]);
            return r && this._enabled(!1, !0), s;
          }),
          (p.recent = function () {
            return this._recent;
          }),
          (p._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (p.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0);
          }),
          (p._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                n = i.length,
                r = !1;
              --n > -1;

            )
              i[n]._kill(t, e) && (r = !0);
            return r;
          }),
          (p.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0);
          }),
          (p.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next);
            return l.a.prototype.invalidate.call(this);
          }),
          (p._enabled = function (t, e) {
            if (t === this._gc)
              for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
            return l.c.prototype._enabled.call(this, t, e);
          }),
          (p.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0;
            var n = l.a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), n;
          }),
          (p.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (p.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > s &&
                    this._sortChildren &&
                    !r._paused &&
                    !this._calculatingDuration
                      ? ((this._calculatingDuration = 1),
                        this.add(r, r._startTime - r._delay),
                        (this._calculatingDuration = 0))
                      : (s = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((n -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        ((this._startTime += r._startTime / this._timeScale),
                        (this._time -= r._startTime),
                        (this._totalTime -= r._startTime),
                        (this._rawPrevTime -= r._startTime)),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (s = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale) > n &&
                      (n = i),
                    (r = e);
                (this._duration = this._totalDuration = n), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return t && this.totalDuration()
              ? this.timeScale(this._totalDuration / t)
              : this;
          }),
          (p.paused = function (t) {
            if (!t)
              for (var e = this._first, i = this._time; e; )
                e._startTime === i &&
                  "isPause" === e.data &&
                  (e._rawPrevTime = 0),
                  (e = e._next);
            return l.a.prototype.paused.apply(this, arguments);
          }),
          (p.usesFrames = function () {
            for (var t = this._timeline; t._timeline; ) t = t._timeline;
            return t === l.a._rootFramesTimeline;
          }),
          (p.rawTime = function (t) {
            return t &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
          }),
          t
        );
      },
      !0
    );
    var u = l.g.TimelineLite;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ l.e._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function () {
        var t = function (t) {
            u.call(this, t),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._dirty = !0);
          },
          e = l.f._internals,
          i = e.lazyTweens,
          n = e.lazyRender,
          r = l.e._gsDefine.globals,
          s = new l.b(null, null, 1, 0),
          o = (t.prototype = new u());
        return (
          (o.constructor = t),
          (o.kill()._gc = !1),
          (t.version = "2.0.2"),
          (o.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              u.prototype.invalidate.call(this)
            );
          }),
          (o.addCallback = function (t, e, i, n) {
            return this.add(l.f.delayedCall(0, t, i, n), e);
          }),
          (o.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    r = this._parseTimeOrLabel(e);
                  --n > -1;

                )
                  i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this;
          }),
          (o.removePause = function (t) {
            return this.removeCallback(u._internals.pauseCallback, t);
          }),
          (o.tweenTo = function (t, e) {
            e = e || {};
            var i,
              n,
              o,
              a = {
                ease: s,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              u = (e.repeat && r.TweenMax) || l.f;
            for (n in e) a[n] = e[n];
            return (
              (a.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(a.time) - this._time) / this._timeScale ||
                0.001),
              (o = new u(this, i, a)),
              (a.onStart = function () {
                o.target.paused(!0),
                  o.vars.time === o.target.time() ||
                    i !== o.duration() ||
                    o.isFromTo ||
                    o
                      .duration(
                        Math.abs(o.vars.time - o.target.time()) /
                          o.target._timeScale
                      )
                      .render(o.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || o,
                      e.onStartParams || []
                    );
              }),
              o
            );
          }),
          (o.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var n = this.tweenTo(e, i);
            return (
              (n.isFromTo = 1),
              n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (o.render = function (t, e, r) {
            this._gc && this._enabled(!0, !1);
            var s,
              o,
              a,
              l,
              u,
              c,
              h,
              f,
              p = this._time,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._duration,
              _ = this._totalTime,
              g = this._startTime,
              v = this._timeScale,
              y = this._rawPrevTime,
              b = this._paused,
              x = this._cycle;
            if (
              (p !== this._time && (t += this._time - p),
              t >= d - 1e-7 && t >= 0)
            )
              this._locked ||
                ((this._totalTime = d), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (l = "onComplete"),
                  (u = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-7) || y < 0 || 1e-10 === y) &&
                    y !== t &&
                    this._first &&
                    ((u = !0), y > 1e-10 && (l = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-10),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : ((this._time = m), (t = m + 1e-4));
            else if (t < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== p ||
                  (0 === m &&
                    1e-10 !== y &&
                    (y > 0 || (t < 0 && y >= 0)) &&
                    !this._locked)) &&
                  ((l = "onReverseComplete"), (o = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((u = o = !0), (l = "onReverseComplete"))
                    : y >= 0 && this._first && (u = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    m || !e || t || this._rawPrevTime === t ? t : 1e-10),
                  0 === t && o)
                )
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (o = !1), (s = s._next);
                (t = 0), this._initted || (u = !0);
              }
            else if (
              (0 === m && y < 0 && (u = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((c = m + this._repeatDelay),
                  (this._cycle = (this._totalTime / c) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / c &&
                    _ <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * c),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = m - this._time),
                  this._time > m
                    ? ((this._time = m), (t = m + 1e-4))
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if ((t = this._time) >= p || (this._repeat && x !== this._cycle))
                for (s = this._first; s && s._startTime <= t && !h; )
                  s._duration ||
                    "isPause" !== s.data ||
                    s.ratio ||
                    (0 === s._startTime && 0 === this._rawPrevTime) ||
                    (h = s),
                    (s = s._next);
              else
                for (s = this._last; s && s._startTime >= t && !h; )
                  s._duration ||
                    ("isPause" === s.data && s._rawPrevTime > 0 && (h = s)),
                    (s = s._prev);
              h &&
                h._startTime < m &&
                ((this._time = t = h._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== x && !this._locked) {
              var w = this._yoyo && 0 != (1 & x),
                T = w === (this._yoyo && 0 != (1 & this._cycle)),
                k = this._totalTime,
                P = this._cycle,
                C = this._rawPrevTime,
                S = this._time;
              if (
                ((this._totalTime = x * m),
                this._cycle < x ? (w = !w) : (this._totalTime += m),
                (this._time = p),
                (this._rawPrevTime = 0 === m ? y - 1e-4 : y),
                (this._cycle = x),
                (this._locked = !0),
                (p = w ? 0 : m),
                this.render(p, e, 0 === m),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = P),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                p !== this._time)
              )
                return;
              if (
                (T &&
                  ((this._cycle = x),
                  (this._locked = !0),
                  (p = w ? m + 1e-4 : -1e-4),
                  this.render(p, !0, !1)),
                (this._locked = !1),
                this._paused && !b)
              )
                return;
              (this._time = S),
                (this._totalTime = k),
                (this._cycle = P),
                (this._rawPrevTime = C);
            }
            if ((this._time !== p && this._first) || r || u || h) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== _ &&
                    t > 0 &&
                    (this._active = !0)),
                0 === _ &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                (f = this._time) >= p)
              )
                for (
                  s = this._first;
                  s &&
                  ((a = s._next), f === this._time && (!this._paused || b));

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (h === s && this.pause(),
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          r
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, r)),
                    (s = a);
              else
                for (
                  s = this._last;
                  s &&
                  ((a = s._prev), f === this._time && (!this._paused || b));

                ) {
                  if (
                    s._active ||
                    (s._startTime <= p && !s._paused && !s._gc)
                  ) {
                    if (h === s) {
                      for (h = s._prev; h && h.endTime() > this._time; )
                        h.render(
                          h._reversed
                            ? h.totalDuration() -
                                (t - h._startTime) * h._timeScale
                            : (t - h._startTime) * h._timeScale,
                          e,
                          r
                        ),
                          (h = h._prev);
                      (h = null), this.pause();
                    }
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          r
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, r);
                  }
                  s = a;
                }
              this._onUpdate &&
                (e || (i.length && n(), this._callback("onUpdate"))),
                l &&
                  (this._locked ||
                    this._gc ||
                    (g !== this._startTime && v === this._timeScale) ||
                    ((0 === this._time || d >= this.totalDuration()) &&
                      (o &&
                        (i.length && n(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))));
            } else
              _ !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (o.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n,
              r,
              s = [],
              o = this.getChildren(t, e, i),
              a = 0,
              l = o.length;
            for (n = 0; n < l; n++) (r = o[n]).isActive() && (s[a++] = r);
            return s;
          }),
          (o.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              n = i.length;
            for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (o.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (o.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (o.invalidate = function () {
            return (this._locked = !1), u.prototype.invalidate.call(this);
          }),
          (o.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (o.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (o.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (u.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (o.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (o.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (o.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (o.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          t
        );
      },
      !0
    );
    var c = l.g.TimelineMax;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ l.e._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function () {
        var t = function (t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          e = function (t, e, i) {
            var n,
              r,
              s = t.cycle;
            for (n in s)
              (r = s[n]),
                (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
            delete t.cycle;
          },
          i = function (t, e, n) {
            l.f.call(this, t, e, n),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._repeat && this._uncache(!0),
              (this.render = i.prototype.render);
          },
          n = l.f._internals,
          r = n.isSelector,
          s = n.isArray,
          o = (i.prototype = l.f.to({}, 0.1, {})),
          a = [];
        (i.version = "2.0.2"),
          (o.constructor = i),
          (o.kill()._gc = !1),
          (i.killTweensOf = i.killDelayedCallsTo = l.f.killTweensOf),
          (i.getTweensOf = l.f.getTweensOf),
          (i.lagSmoothing = l.f.lagSmoothing),
          (i.ticker = l.f.ticker),
          (i.render = l.f.render),
          (o.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._yoyoEase = null),
              this._uncache(!0),
              l.f.prototype.invalidate.call(this)
            );
          }),
          (o.updateTo = function (t, e) {
            var i,
              n = this.ratio,
              r = this.vars.immediateRender || t.immediateRender;
            for (i in (e &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay)),
            t))
              this.vars[i] = t[i];
            if (this._initted || r)
              if (e) (this._initted = !1), r && this.render(0, !0, !0);
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  l.f._onPluginEvent("_onDisable", this),
                this._time / this._duration > 0.998)
              ) {
                var s = this._totalTime;
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(s, !0, !1);
              } else if (
                ((this._initted = !1), this._init(), this._time > 0 || r)
              )
                for (var o, a = 1 / (1 - n), u = this._firstPT; u; )
                  (o = u.s + u.c), (u.c *= a), (u.s = o - u.c), (u = u._next);
            return this;
          }),
          (o.render = function (t, e, i) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate());
            var r,
              s,
              o,
              a,
              u,
              c,
              h,
              f,
              p,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._time,
              _ = this._totalTime,
              g = this._cycle,
              v = this._duration,
              y = this._rawPrevTime;
            if (
              (t >= d - 1e-7 && t >= 0
                ? ((this._totalTime = d),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = v),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((r = !0),
                    (s = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (y < 0 ||
                      (t <= 0 && t >= -1e-7) ||
                      (1e-10 === y && "isPause" !== this.data)) &&
                      y !== t &&
                      ((i = !0), y > 1e-10 && (s = "onReverseComplete")),
                    (this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)))
                : t < 1e-7
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== _ || (0 === v && y > 0)) &&
                    ((s = "onReverseComplete"), (r = this._reversed)),
                  t < 0 &&
                    ((this._active = !1),
                    0 === v &&
                      (this._initted || !this.vars.lazy || i) &&
                      (y >= 0 && (i = !0),
                      (this._rawPrevTime = f =
                        !e || t || y === t ? t : 1e-10))),
                  this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((a = v + this._repeatDelay),
                    (this._cycle = (this._totalTime / a) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / a &&
                      _ <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * a),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      ((this._time = v - this._time),
                      (p = this._yoyoEase || this.vars.yoyoEase) &&
                        (this._yoyoEase ||
                          (!0 !== p || this._initted
                            ? (this._yoyoEase = p =
                                !0 === p
                                  ? this._ease
                                  : p instanceof l.b
                                  ? p
                                  : l.b.map[p])
                            : ((p = this.vars.ease),
                              (this._yoyoEase = p =
                                p
                                  ? p instanceof l.b
                                    ? p
                                    : "function" == typeof p
                                    ? new l.b(p, this.vars.easeParams)
                                    : l.b.map[p] || l.f.defaultEase
                                  : l.f.defaultEase))),
                        (this.ratio = p
                          ? 1 - p.getRatio((v - this._time) / v)
                          : 0))),
                    this._time > v
                      ? (this._time = v)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType && !p
                    ? ((u = this._time / v),
                      (c = this._easeType),
                      (h = this._easePower),
                      (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
                      3 === c && (u *= 2),
                      1 === h
                        ? (u *= u)
                        : 2 === h
                        ? (u *= u * u)
                        : 3 === h
                        ? (u *= u * u * u)
                        : 4 === h && (u *= u * u * u * u),
                      1 === c
                        ? (this.ratio = 1 - u)
                        : 2 === c
                        ? (this.ratio = u)
                        : this._time / v < 0.5
                        ? (this.ratio = u / 2)
                        : (this.ratio = 1 - u / 2))
                    : p || (this.ratio = this._ease.getRatio(this._time / v))),
              m !== this._time || i || g !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return;
                if (
                  !i &&
                  this._firstPT &&
                  ((!1 !== this.vars.lazy && this._duration) ||
                    (this.vars.lazy && !this._duration))
                )
                  return (
                    (this._time = m),
                    (this._totalTime = _),
                    (this._rawPrevTime = y),
                    (this._cycle = g),
                    n.lazyTweens.push(this),
                    void (this._lazy = [t, e])
                  );
                !this._time || r || p
                  ? r &&
                    this._ease._calcEnd &&
                    !p &&
                    (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  : (this.ratio = this._ease.getRatio(this._time / v));
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active ||
                    (!this._paused &&
                      this._time !== m &&
                      t >= 0 &&
                      (this._active = !0)),
                  0 === _ &&
                    (2 === this._initted && t > 0 && this._init(),
                    this._startAt &&
                      (t >= 0
                        ? this._startAt.render(t, !0, i)
                        : s || (s = "_dummyGS")),
                    this.vars.onStart &&
                      ((0 === this._totalTime && 0 !== v) ||
                        e ||
                        this._callback("onStart"))),
                  o = this._firstPT;
                o;

              )
                o.f
                  ? o.t[o.p](o.c * this.ratio + o.s)
                  : (o.t[o.p] = o.c * this.ratio + o.s),
                  (o = o._next);
              this._onUpdate &&
                (t < 0 &&
                  this._startAt &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                e ||
                  ((this._totalTime !== _ || s) && this._callback("onUpdate"))),
                this._cycle !== g &&
                  (e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat"))),
                s &&
                  ((this._gc && !i) ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startTime &&
                      this._startAt.render(t, !0, i),
                    r &&
                      (this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[s] && this._callback(s),
                    0 === v &&
                      1e-10 === this._rawPrevTime &&
                      1e-10 !== f &&
                      (this._rawPrevTime = 0)));
            } else
              _ !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (i.to = function (t, e, n) {
            return new i(t, e, n);
          }),
          (i.from = function (t, e, n) {
            return (
              (n.runBackwards = !0),
              (n.immediateRender = 0 != n.immediateRender),
              new i(t, e, n)
            );
          }),
          (i.fromTo = function (t, e, n, r) {
            return (
              (r.startAt = n),
              (r.immediateRender =
                0 != r.immediateRender && 0 != n.immediateRender),
              new i(t, e, r)
            );
          }),
          (i.staggerTo = i.allTo =
            function (n, o, u, c, h, f, p) {
              c = c || 0;
              var d,
                m,
                _,
                g,
                v = 0,
                y = [],
                b = function () {
                  u.onComplete &&
                    u.onComplete.apply(u.onCompleteScope || this, arguments),
                    h.apply(p || u.callbackScope || this, f || a);
                },
                x = u.cycle,
                w = u.startAt && u.startAt.cycle;
              for (
                s(n) ||
                  ("string" == typeof n && (n = l.f.selector(n) || n),
                  r(n) && (n = t(n))),
                  n = n || [],
                  c < 0 && ((n = t(n)).reverse(), (c *= -1)),
                  d = n.length - 1,
                  _ = 0;
                _ <= d;
                _++
              ) {
                for (g in ((m = {}), u)) m[g] = u[g];
                if (
                  (x &&
                    (e(m, n, _),
                    null != m.duration &&
                      ((o = m.duration), delete m.duration)),
                  w)
                ) {
                  for (g in ((w = m.startAt = {}), u.startAt))
                    w[g] = u.startAt[g];
                  e(m.startAt, n, _);
                }
                (m.delay = v + (m.delay || 0)),
                  _ === d && h && (m.onComplete = b),
                  (y[_] = new i(n[_], o, m)),
                  (v += c);
              }
              return y;
            }),
          (i.staggerFrom = i.allFrom =
            function (t, e, n, r, s, o, a) {
              return (
                (n.runBackwards = !0),
                (n.immediateRender = 0 != n.immediateRender),
                i.staggerTo(t, e, n, r, s, o, a)
              );
            }),
          (i.staggerFromTo = i.allFromTo =
            function (t, e, n, r, s, o, a, l) {
              return (
                (r.startAt = n),
                (r.immediateRender =
                  0 != r.immediateRender && 0 != n.immediateRender),
                i.staggerTo(t, e, r, s, o, a, l)
              );
            }),
          (i.delayedCall = function (t, e, n, r, s) {
            return new i(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: n,
              callbackScope: r,
              onReverseComplete: e,
              onReverseCompleteParams: n,
              immediateRender: !1,
              useFrames: s,
              overwrite: 0,
            });
          }),
          (i.set = function (t, e) {
            return new i(t, 0, e);
          }),
          (i.isTweening = function (t) {
            return l.f.getTweensOf(t, !0).length > 0;
          });
        var u = function (t, e) {
            for (var i = [], n = 0, r = t._first; r; )
              r instanceof l.f
                ? (i[n++] = r)
                : (e && (i[n++] = r), (n = (i = i.concat(u(r, e))).length)),
                (r = r._next);
            return i;
          },
          c = (i.getAllTweens = function (t) {
            return u(l.a._rootTimeline, t).concat(
              u(l.a._rootFramesTimeline, t)
            );
          });
        (i.killAll = function (t, e, i, n) {
          null == e && (e = !0), null == i && (i = !0);
          var r,
            s,
            o,
            a = c(0 != n),
            u = a.length,
            h = e && i && n;
          for (o = 0; o < u; o++)
            (s = a[o]),
              (h ||
                s instanceof l.c ||
                ((r = s.target === s.vars.onComplete) && i) ||
                (e && !r)) &&
                (t
                  ? s.totalTime(s._reversed ? 0 : s.totalDuration())
                  : s._enabled(!1, !1));
        }),
          (i.killChildTweensOf = function (e, o) {
            if (null != e) {
              var a,
                u,
                c,
                h,
                f,
                p = n.tweenLookup;
              if (
                ("string" == typeof e && (e = l.f.selector(e) || e),
                r(e) && (e = t(e)),
                s(e))
              )
                for (h = e.length; --h > -1; ) i.killChildTweensOf(e[h], o);
              else {
                for (c in ((a = []), p))
                  for (u = p[c].target.parentNode; u; )
                    u === e && (a = a.concat(p[c].tweens)), (u = u.parentNode);
                for (f = a.length, h = 0; h < f; h++)
                  o && a[h].totalTime(a[h].totalDuration()),
                    a[h]._enabled(!1, !1);
              }
            }
          });
        var h = function (t, e, i, n) {
          (e = !1 !== e), (i = !1 !== i);
          for (
            var r, s, o = c((n = !1 !== n)), a = e && i && n, u = o.length;
            --u > -1;

          )
            (s = o[u]),
              (a ||
                s instanceof l.c ||
                ((r = s.target === s.vars.onComplete) && i) ||
                (e && !r)) &&
                s.paused(t);
        };
        return (
          (i.pauseAll = function (t, e, i) {
            h(!0, t, e, i);
          }),
          (i.resumeAll = function (t, e, i) {
            h(!1, t, e, i);
          }),
          (i.globalTimeScale = function (t) {
            var e = l.a._rootTimeline,
              i = l.f.ticker.time;
            return arguments.length
              ? ((t = t || 1e-10),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e = l.a._rootFramesTimeline),
                (i = l.f.ticker.frame),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e._timeScale = l.a._rootTimeline._timeScale = t),
                t)
              : e._timeScale;
          }),
          (o.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (o.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (o.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (o.duration = function (t) {
            return arguments.length
              ? l.a.prototype.duration.call(this, t)
              : this._duration;
          }),
          (o.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration);
          }),
          (o.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (o.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (o.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          i
        );
      },
      !0
    );
    var h = l.g.TweenMax;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    l.e._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function () {
        var t,
          e,
          i,
          n,
          r = function () {
            l.d.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = r.prototype.setRatio);
          },
          s = l.e._gsDefine.globals,
          o = {},
          a = (r.prototype = new l.d("css"));
        (a.constructor = r),
          (r.version = "2.0.2"),
          (r.API = 2),
          (r.defaultTransformPerspective = 0),
          (r.defaultSkewType = "compensated"),
          (r.defaultSmoothOrigin = !0),
          (a = "px"),
          (r.suffixMap = {
            top: a,
            right: a,
            bottom: a,
            left: a,
            width: a,
            height: a,
            fontSize: a,
            padding: a,
            margin: a,
            perspective: a,
            lineHeight: "",
          });
        var u,
          c,
          h,
          f,
          p,
          d,
          m,
          _,
          g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          x = /(?:\d|\-|\+|=|#|\.)*/g,
          w = /opacity *= *([^)]*)/i,
          T = /opacity:([^;]*)/i,
          k = /alpha\(opacity *=.+?\)/i,
          P = /^(rgb|hsl)/,
          C = /([A-Z])/g,
          S = /-([a-z])/gi,
          O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          A = function (t, e) {
            return e.toUpperCase();
          },
          E = /(?:Left|Right|Width)/i,
          D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          M = /,(?=[^\)]*(?:\(|$))/gi,
          j = /[\s,\(]/i,
          L = Math.PI / 180,
          N = 180 / Math.PI,
          I = {},
          F = { style: {} },
          q = l.e.document || {
            createElement: function () {
              return F;
            },
          },
          z = function (t, e) {
            return q.createElementNS
              ? q.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
              : q.createElement(t);
          },
          B = z("div"),
          H = z("img"),
          X = (r._internals = { _specialProps: o }),
          $ = (l.e.navigator || {}).userAgent || "",
          W = (function () {
            var t = $.indexOf("Android"),
              e = z("a");
            return (
              (h =
                -1 !== $.indexOf("Safari") &&
                -1 === $.indexOf("Chrome") &&
                (-1 === t || parseFloat($.substr(t + 8, 2)) > 3)),
              (p = h && parseFloat($.substr($.indexOf("Version/") + 8, 2)) < 6),
              (f = -1 !== $.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) &&
                (d = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          Y = function (t) {
            return w.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          U = function (t) {
            l.e.console && console.log(t);
          },
          V = "",
          G = "",
          Z = function (t, e) {
            var i,
              n,
              r = (e = e || B).style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5;
              --n > -1 && void 0 === r[i[n] + t];

            );
            return n >= 0
              ? ((V = "-" + (G = 3 === n ? "ms" : i[n]).toLowerCase() + "-"),
                G + t)
              : null;
          },
          Q = (
            "undefined" != typeof window
              ? window
              : q.defaultView || { getComputedStyle: function () {} }
          ).getComputedStyle,
          J = (r.getStyle = function (t, e, i, n, r) {
            var s;
            return W || "opacity" !== e
              ? (!n && t.style[e]
                  ? (s = t.style[e])
                  : (i = i || Q(t))
                  ? (s =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(C, "-$1").toLowerCase()))
                  : t.currentStyle && (s = t.currentStyle[e]),
                null == r ||
                (s && "none" !== s && "auto" !== s && "auto auto" !== s)
                  ? s
                  : r)
              : Y(t);
          }),
          K = (X.convertToPixels = function (t, e, i, n, s) {
            if ("px" === n || (!n && "lineHeight" !== e)) return i;
            if ("auto" === n || !i) return 0;
            var o,
              a,
              u,
              c = E.test(e),
              h = t,
              f = B.style,
              p = i < 0,
              d = 1 === i;
            if ((p && (i = -i), d && (i *= 100), "lineHeight" !== e || n))
              if ("%" === n && -1 !== e.indexOf("border"))
                o = (i / 100) * (c ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((f.cssText =
                    "border:0 solid red;position:" +
                    J(t, "position") +
                    ";line-height:0;"),
                  "%" !== n &&
                    h.appendChild &&
                    "v" !== n.charAt(0) &&
                    "rem" !== n)
                )
                  f[c ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                else {
                  if (
                    ((h = t.parentNode || q.body),
                    -1 !== J(h, "display").indexOf("flex") &&
                      (f.position = "absolute"),
                    (a = h._gsCache),
                    (u = l.f.ticker.frame),
                    a && c && a.time === u)
                  )
                    return (a.width * i) / 100;
                  f[c ? "width" : "height"] = i + n;
                }
                h.appendChild(B),
                  (o = parseFloat(B[c ? "offsetWidth" : "offsetHeight"])),
                  h.removeChild(B),
                  c &&
                    "%" === n &&
                    !1 !== r.cacheWidths &&
                    (((a = h._gsCache = h._gsCache || {}).time = u),
                    (a.width = (o / i) * 100)),
                  0 !== o || s || (o = K(t, e, i, n, !0));
              }
            else
              (a = Q(t).lineHeight),
                (t.style.lineHeight = i),
                (o = parseFloat(Q(t).lineHeight)),
                (t.style.lineHeight = a);
            return d && (o /= 100), p ? -o : o;
          }),
          tt = (X.calculateOffset = function (t, e, i) {
            if ("absolute" !== J(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top",
              r = J(t, "margin" + n, i);
            return (
              t["offset" + n] - (K(t, e, parseFloat(r), r.replace(x, "")) || 0)
            );
          }),
          et = function (t, e) {
            var i,
              n,
              r,
              s = {};
            if ((e = e || Q(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 !== (r = e[i]).indexOf("-transform") && Ot !== r) ||
                    (s[r.replace(S, A)] = e.getPropertyValue(r));
              else
                for (i in e)
                  (-1 !== i.indexOf("Transform") && St !== i) || (s[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === s[i] &&
                  (s[i.replace(S, A)] = e[i]);
            return (
              W || (s.opacity = Y(t)),
              (n = Bt(t, e, !1)),
              (s.rotation = n.rotation),
              (s.skewX = n.skewX),
              (s.scaleX = n.scaleX),
              (s.scaleY = n.scaleY),
              (s.x = n.x),
              (s.y = n.y),
              Et &&
                ((s.z = n.z),
                (s.rotationX = n.rotationX),
                (s.rotationY = n.rotationY),
                (s.scaleZ = n.scaleZ)),
              s.filters && delete s.filters,
              s
            );
          },
          it = function (t, e, i, n, r) {
            var s,
              o,
              a,
              l = {},
              u = t.style;
            for (o in i)
              "cssText" !== o &&
                "length" !== o &&
                isNaN(o) &&
                (e[o] !== (s = i[o]) || (r && r[o])) &&
                -1 === o.indexOf("Origin") &&
                (("number" != typeof s && "string" != typeof s) ||
                  ((l[o] =
                    "auto" !== s || ("left" !== o && "top" !== o)
                      ? ("" !== s && "auto" !== s && "none" !== s) ||
                        "string" != typeof e[o] ||
                        "" === e[o].replace(b, "")
                        ? s
                        : 0
                      : tt(t, o)),
                  void 0 !== u[o] && (a = new gt(u, o, u[o], a))));
            if (n) for (o in n) "className" !== o && (l[o] = n[o]);
            return { difs: l, firstMPT: a };
          },
          nt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          st = function (t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
              return (i || Q(t))[e] || 0;
            if (t.getCTM && Ft(t)) return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = nt[e],
              s = r.length;
            for (i = i || Q(t, null); --s > -1; )
              (n -= parseFloat(J(t, "padding" + r[s], i, !0)) || 0),
                (n -= parseFloat(J(t, "border" + r[s] + "Width", i, !0)) || 0);
            return n;
          },
          ot = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null != t && "" !== t) || (t = "0 0");
            var i,
              n = t.split(" "),
              r =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : n[0],
              s =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : n[1];
            if (n.length > 3 && !e) {
              for (
                n = t.split(", ").join(",").split(","), t = [], i = 0;
                i < n.length;
                i++
              )
                t.push(ot(n[i]));
              return t.join(",");
            }
            return (
              null == s
                ? (s = "center" === r ? "50%" : "0")
                : "center" === s && (s = "50%"),
              ("center" === r ||
                (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) &&
                (r = "50%"),
              (t = r + " " + s + (n.length > 2 ? " " + n[2] : "")),
              e &&
                ((e.oxp = -1 !== r.indexOf("%")),
                (e.oyp = -1 !== s.indexOf("%")),
                (e.oxr = "=" === r.charAt(1)),
                (e.oyr = "=" === s.charAt(1)),
                (e.ox = parseFloat(r.replace(b, ""))),
                (e.oy = parseFloat(s.replace(b, ""))),
                (e.v = t)),
              e || t
            );
          },
          at = function (t, e) {
            return (
              "function" == typeof t && (t = t(_, m)),
              "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            );
          },
          lt = function (t, e) {
            "function" == typeof t && (t = t(_, m));
            var i = "string" == typeof t && "=" === t.charAt(1);
            return (
              "string" == typeof t &&
                "v" === t.charAt(t.length - 2) &&
                (t =
                  (i ? t.substr(0, 2) : 0) +
                  window[
                    "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                  ] *
                    (parseFloat(i ? t.substr(2) : t) / 100)),
              null == t
                ? e
                : i
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            );
          },
          ut = function (t, e, i, n) {
            var r, s, o, a, l;
            return (
              "function" == typeof t && (t = t(_, m)),
              null == t
                ? (a = e)
                : "number" == typeof t
                ? (a = t)
                : ((r = 360),
                  (s = t.split("_")),
                  (o =
                    ((l = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(s[0].substr(2))
                      : parseFloat(s[0])) *
                      (-1 === t.indexOf("rad") ? 1 : N) -
                    (l ? 0 : e)),
                  s.length &&
                    (n && (n[i] = e + o),
                    -1 !== t.indexOf("short") &&
                      (o %= r) !== o % (r / 2) &&
                      (o = o < 0 ? o + r : o - r),
                    -1 !== t.indexOf("_cw") && o < 0
                      ? (o = ((o + 9999999999 * r) % r) - ((o / r) | 0) * r)
                      : -1 !== t.indexOf("ccw") &&
                        o > 0 &&
                        (o = ((o - 9999999999 * r) % r) - ((o / r) | 0) * r)),
                  (a = e + o)),
              a < 1e-6 && a > -1e-6 && (a = 0),
              a
            );
          },
          ct = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ht = function (t, e, i) {
            return (
              (255 *
                (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
              0
            );
          },
          ft = (r.parseColor = function (t, e) {
            var i, n, r, s, o, a, l, u, c, h, f;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ct[t])
                )
                  i = ct[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    (t =
                      "#" +
                      (n = t.charAt(1)) +
                      n +
                      (r = t.charAt(2)) +
                      r +
                      (s = t.charAt(3)) +
                      s),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = f = t.match(g)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(v);
                  } else
                    (o = (Number(i[0]) % 360) / 360),
                      (a = Number(i[1]) / 100),
                      (n =
                        2 * (l = Number(i[2]) / 100) -
                        (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                      i.length > 3 && (i[3] = Number(i[3])),
                      (i[0] = ht(o + 1 / 3, n, r)),
                      (i[1] = ht(o, n, r)),
                      (i[2] = ht(o - 1 / 3, n, r));
                else i = t.match(g) || ct.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = ct.black;
            return (
              e &&
                !f &&
                ((n = i[0] / 255),
                (r = i[1] / 255),
                (s = i[2] / 255),
                (l = ((u = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2),
                u === c
                  ? (o = a = 0)
                  : ((h = u - c),
                    (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)),
                    (o =
                      u === n
                        ? (r - s) / h + (r < s ? 6 : 0)
                        : u === r
                        ? (s - n) / h + 2
                        : (n - r) / h + 4),
                    (o *= 60)),
                (i[0] = (o + 0.5) | 0),
                (i[1] = (100 * a + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          pt = function (t, e) {
            var i,
              n,
              r,
              s = t.match(dt) || [],
              o = 0,
              a = "";
            if (!s.length) return t;
            for (i = 0; i < s.length; i++)
              (n = s[i]),
                (o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length),
                3 === (n = ft(n, e)).length && n.push(1),
                (a +=
                  r +
                  (e
                    ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
                    : "rgba(" + n.join(",")) +
                  ")");
            return a + t.substr(o);
          },
          dt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (a in ct) dt += "|" + a + "\\b";
        (dt = new RegExp(dt + ")", "gi")),
          (r.colorStringFilter = function (t) {
            var e,
              i = t[0] + " " + t[1];
            dt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = pt(t[0], e)),
              (t[1] = pt(t[1], e))),
              (dt.lastIndex = 0);
          }),
          l.f.defaultStringFilter ||
            (l.f.defaultStringFilter = r.colorStringFilter);
        var mt = function (t, e, i, n) {
            if (null == t)
              return function (t) {
                return t;
              };
            var r,
              s = e ? (t.match(dt) || [""])[0] : "",
              o = t.split(s).join("").match(y) || [],
              a = t.substr(0, t.indexOf(o[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              u = -1 !== t.indexOf(" ") ? " " : ",",
              c = o.length,
              h = c > 0 ? o[0].replace(g, "") : "";
            return c
              ? (r = e
                  ? function (t) {
                      var e, f, p, d;
                      if ("number" == typeof t) t += h;
                      else if (n && M.test(t)) {
                        for (
                          d = t.replace(M, "|").split("|"), p = 0;
                          p < d.length;
                          p++
                        )
                          d[p] = r(d[p]);
                        return d.join(",");
                      }
                      if (
                        ((e = (t.match(dt) || [s])[0]),
                        (p = (f = t.split(e).join("").match(y) || []).length),
                        c > p--)
                      )
                        for (; ++p < c; )
                          f[p] = i ? f[((p - 1) / 2) | 0] : o[p];
                      return (
                        a +
                        f.join(u) +
                        u +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, s, f;
                      if ("number" == typeof t) t += h;
                      else if (n && M.test(t)) {
                        for (
                          s = t.replace(M, "|").split("|"), f = 0;
                          f < s.length;
                          f++
                        )
                          s[f] = r(s[f]);
                        return s.join(",");
                      }
                      if (((f = (e = t.match(y) || []).length), c > f--))
                        for (; ++f < c; )
                          e[f] = i ? e[((f - 1) / 2) | 0] : o[f];
                      return a + e.join(u) + l;
                    })
              : function (t) {
                  return t;
                };
          },
          _t = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, n, r, s, o, a) {
                var l,
                  u = (i + "").split(" ");
                for (a = {}, l = 0; l < 4; l++)
                  a[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                return r.parse(e, a, s, o);
              }
            );
          },
          gt =
            ((X._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT;
                l;

              )
                (e = a[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (o.autoRotate &&
                  (o.autoRotate.rotation = o.mod
                    ? o.mod.call(this._tween, a.rotation, this.t, this._tween)
                    : a.rotation),
                1 === t || 0 === t)
              )
                for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                        r += i["xn" + n] + i["xs" + (n + 1)];
                      i[s] = r;
                    }
                  } else i[s] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (t, e, i, n, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                n && ((n._prev = this), (this._next = n));
            }),
          vt =
            ((X._parseToProxy = function (t, e, i, n, r, s) {
              var o,
                a,
                l,
                u,
                c,
                h = n,
                f = {},
                p = {},
                d = i._transform,
                m = I;
              for (
                i._transform = null,
                  I = e,
                  n = c = i.parse(t, e, n, r),
                  I = m,
                  s &&
                    ((i._transform = d),
                    h && ((h._prev = null), h._prev && (h._prev._next = null)));
                n && n !== h;

              ) {
                if (
                  n.type <= 1 &&
                  ((p[(a = n.p)] = n.s + n.c),
                  (f[a] = n.s),
                  s || ((u = new gt(n, "s", a, u, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (o = n.l; --o > 0; )
                    (l = "xn" + o),
                      (p[(a = n.p + "_" + l)] = n.data[l]),
                      (f[a] = n[l]),
                      s || (u = new gt(n, l, a, u, n.rxp[l]));
                n = n._next;
              }
              return { proxy: f, end: p, firstMPT: u, pt: c };
            }),
            (X.CSSPropTween = function (e, i, r, s, o, a, l, u, c, h, f) {
              (this.t = e),
                (this.p = i),
                (this.s = r),
                (this.c = s),
                (this.n = l || i),
                e instanceof vt || n.push(this.n),
                (this.r = u ? ("function" == typeof u ? u : Math.round) : u),
                (this.type = a || 0),
                c && ((this.pr = c), (t = !0)),
                (this.b = void 0 === h ? r : h),
                (this.e = void 0 === f ? r + s : f),
                o && ((this._next = o), (o._prev = this));
            })),
          yt = function (t, e, i, n, r, s) {
            var o = new vt(t, e, i, n - i, r, -1, s);
            return (o.b = i), (o.e = o.xs0 = n), o;
          },
          bt = (r.parseComplex = function (t, e, i, n, s, o, a, l, c, h) {
            (i = i || o || ""),
              "function" == typeof n && (n = n(_, m)),
              (a = new vt(t, e, 0, 0, a, h ? 2 : 1, null, !1, l, i, n)),
              (n += ""),
              s &&
                dt.test(n + i) &&
                ((n = [i, n]), r.colorStringFilter(n), (i = n[0]), (n = n[1]));
            var f,
              p,
              d,
              y,
              b,
              x,
              w,
              T,
              k,
              P,
              C,
              S,
              O,
              A = i.split(", ").join(",").split(" "),
              E = n.split(", ").join(",").split(" "),
              D = A.length,
              R = !1 !== u;
            for (
              (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                  ? ((A = A.join(" ").replace(M, ", ").split(" ")),
                    (E = E.join(" ").replace(M, ", ").split(" ")))
                  : ((A = A.join(" ").split(",").join(", ").split(" ")),
                    (E = E.join(" ").split(",").join(", ").split(" "))),
                (D = A.length)),
                D !== E.length && (D = (A = (o || "").split(" ")).length),
                a.plugin = c,
                a.setRatio = h,
                dt.lastIndex = 0,
                f = 0;
              f < D;
              f++
            )
              if (((y = A[f]), (b = E[f] + ""), (T = parseFloat(y)) || 0 === T))
                a.appendXtra(
                  "",
                  T,
                  at(b, T),
                  b.replace(v, ""),
                  !(!R || -1 === b.indexOf("px")) && Math.round,
                  !0
                );
              else if (s && dt.test(y))
                (S = ")" + ((S = b.indexOf(")") + 1) ? b.substr(S) : "")),
                  (O = -1 !== b.indexOf("hsl") && W),
                  (P = b),
                  (y = ft(y, O)),
                  (b = ft(b, O)),
                  (k = y.length + b.length > 6) && !W && 0 === b[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(E[f]).join("transparent")))
                    : (W || (k = !1),
                      O
                        ? a
                            .appendXtra(
                              P.substr(0, P.indexOf("hsl")) +
                                (k ? "hsla(" : "hsl("),
                              y[0],
                              at(b[0], y[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", y[1], at(b[1], y[1]), "%,", !1)
                            .appendXtra(
                              "",
                              y[2],
                              at(b[2], y[2]),
                              k ? "%," : "%" + S,
                              !1
                            )
                        : a
                            .appendXtra(
                              P.substr(0, P.indexOf("rgb")) +
                                (k ? "rgba(" : "rgb("),
                              y[0],
                              b[0] - y[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", y[1], b[1] - y[1], ",", Math.round)
                            .appendXtra(
                              "",
                              y[2],
                              b[2] - y[2],
                              k ? "," : S,
                              Math.round
                            ),
                      k &&
                        ((y = y.length < 4 ? 1 : y[3]),
                        a.appendXtra(
                          "",
                          y,
                          (b.length < 4 ? 1 : b[3]) - y,
                          S,
                          !1
                        ))),
                  (dt.lastIndex = 0);
              else if ((x = y.match(g))) {
                if (!(w = b.match(v)) || w.length !== x.length) return a;
                for (d = 0, p = 0; p < x.length; p++)
                  (C = x[p]),
                    (P = y.indexOf(C, d)),
                    a.appendXtra(
                      y.substr(d, P - d),
                      Number(C),
                      at(w[p], C),
                      "",
                      !(!R || "px" !== y.substr(P + C.length, 2)) && Math.round,
                      0 === p
                    ),
                    (d = P + C.length);
                a["xs" + a.l] += y.substr(d);
              } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
            if (-1 !== n.indexOf("=") && a.data) {
              for (S = a.xs0 + a.data.s, f = 1; f < a.l; f++)
                S += a["xs" + f] + a.data["xn" + f];
              a.e = S + a["xs" + f];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          xt = 9;
        for ((a = vt.prototype).l = a.pr = 0; --xt > 0; )
          (a["xn" + xt] = 0), (a["xs" + xt] = "");
        (a.xs0 = ""),
          (a._next =
            a._prev =
            a.xfirst =
            a.data =
            a.plugin =
            a.setRatio =
            a.rxp =
              null),
          (a.appendXtra = function (t, e, i, n, r, s) {
            var o = this,
              a = o.l;
            return (
              (o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || ""),
              i || 0 === a || o.plugin
                ? (o.l++,
                  (o.type = o.setRatio ? 2 : 1),
                  (o["xs" + o.l] = n || ""),
                  a > 0
                    ? ((o.data["xn" + a] = e + i),
                      (o.rxp["xn" + a] = r),
                      (o["xn" + a] = e),
                      o.plugin ||
                        ((o.xfirst = new vt(
                          o,
                          "xn" + a,
                          e,
                          i,
                          o.xfirst || o,
                          0,
                          o.n,
                          r,
                          o.pr
                        )),
                        (o.xfirst.xs0 = 0)),
                      o)
                    : ((o.data = { s: e + i }),
                      (o.rxp = {}),
                      (o.s = e),
                      (o.c = i),
                      (o.r = r),
                      o))
                : ((o["xs" + a] += e + (n || "")), o)
            );
          });
        var wt = function (t, e) {
            (e = e || {}),
              (this.p = (e.prefix && Z(t)) || t),
              (o[t] = o[this.p] = this),
              (this.format =
                e.formatter ||
                mt(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          Tt = (X._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var n,
              r = t.split(","),
              s = e.defaultValue;
            for (i = i || [s], n = 0; n < r.length; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || s),
                new wt(r[n], e);
          }),
          kt = (X._registerPluginProp = function (t) {
            if (!o[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              Tt(t, {
                parser: function (t, i, n, r, a, l, u) {
                  var c = s.com.greensock.plugins[e];
                  return c
                    ? (c._cssRegister(), o[n].parse(t, i, n, r, a, l, u))
                    : (U("Error: " + e + " js file not loaded."), a);
                },
              });
            }
          });
        ((a = wt.prototype).parseComplex = function (t, e, i, n, r, s) {
          var o,
            a,
            l,
            u,
            c,
            h,
            f = this.keyword;
          if (
            (this.multi &&
              (M.test(i) || M.test(e)
                ? ((a = e.replace(M, "|").split("|")),
                  (l = i.replace(M, "|").split("|")))
                : f && ((a = [e]), (l = [i]))),
            l)
          ) {
            for (
              u = l.length > a.length ? l.length : a.length, o = 0;
              o < u;
              o++
            )
              (e = a[o] = a[o] || this.dflt),
                (i = l[o] = l[o] || this.dflt),
                f &&
                  (c = e.indexOf(f)) !== (h = i.indexOf(f)) &&
                  (-1 === h
                    ? (a[o] = a[o].split(f).join(""))
                    : -1 === c && (a[o] += " " + f));
            (e = a.join(", ")), (i = l.join(", "));
          }
          return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s);
        }),
          (a.parse = function (t, e, n, r, s, o, a) {
            return this.parseComplex(
              t.style,
              this.format(J(t, this.p, i, !1, this.dflt)),
              this.format(e),
              s,
              o
            );
          }),
          (r.registerSpecialProp = function (t, e, i) {
            Tt(t, {
              parser: function (t, n, r, s, o, a, l) {
                var u = new vt(t, r, 0, 0, o, 2, r, !1, i);
                return (u.plugin = a), (u.setRatio = e(t, n, s._tween, r)), u;
              },
              priority: i,
            });
          }),
          (r.useSVGTransformAttr = !0);
        var Pt,
          Ct =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          St = Z("transform"),
          Ot = V + "transform",
          At = Z("transformOrigin"),
          Et = null !== Z("perspective"),
          Dt = (X.Transform = function () {
            (this.perspective = parseFloat(r.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === r.defaultForce3D || !Et) &&
                (r.defaultForce3D || "auto"));
          }),
          Rt = l.e.SVGElement,
          Mt = function (t, e, i) {
            var n,
              r = q.createElementNS("http://www.w3.org/2000/svg", t),
              s = /([a-z])([A-Z])/g;
            for (n in i)
              r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r), r;
          },
          jt = q.documentElement || {},
          Lt = (function () {
            var t,
              e,
              i,
              n = d || (/Android/i.test($) && !l.e.chrome);
            return (
              q.createElementNS &&
                !n &&
                ((t = Mt("svg", jt)),
                (i = (e = Mt("rect", t, {
                  width: 100,
                  height: 50,
                  x: 100,
                })).getBoundingClientRect().width),
                (e.style[At] = "50% 50%"),
                (e.style[St] = "scaleX(0.5)"),
                (n = i === e.getBoundingClientRect().width && !(f && Et)),
                jt.removeChild(t)),
              n
            );
          })(),
          Nt = function (t, e, i, n, s, o) {
            var a,
              l,
              u,
              c,
              h,
              f,
              p,
              d,
              m,
              _,
              g,
              v,
              y,
              b,
              x = t._gsTransform,
              w = zt(t, !0);
            x && ((y = x.xOrigin), (b = x.yOrigin)),
              (!n || (a = n.split(" ")).length < 2) &&
                (0 === (p = t.getBBox()).x &&
                  0 === p.y &&
                  p.width + p.height === 0 &&
                  (p = {
                    x:
                      parseFloat(
                        t.hasAttribute("x")
                          ? t.getAttribute("x")
                          : t.hasAttribute("cx")
                          ? t.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        t.hasAttribute("y")
                          ? t.getAttribute("y")
                          : t.hasAttribute("cy")
                          ? t.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (a = [
                  (-1 !== (e = ot(e).split(" "))[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * p.width
                    : parseFloat(e[0])) + p.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * p.height
                    : parseFloat(e[1])) + p.y,
                ])),
              (i.xOrigin = c = parseFloat(a[0])),
              (i.yOrigin = h = parseFloat(a[1])),
              n &&
                w !== qt &&
                ((f = w[0]),
                (p = w[1]),
                (d = w[2]),
                (m = w[3]),
                (_ = w[4]),
                (g = w[5]),
                (v = f * m - p * d) &&
                  ((l = c * (m / v) + h * (-d / v) + (d * g - m * _) / v),
                  (u = c * (-p / v) + h * (f / v) - (f * g - p * _) / v),
                  (c = i.xOrigin = a[0] = l),
                  (h = i.yOrigin = a[1] = u))),
              x &&
                (o &&
                  ((i.xOffset = x.xOffset), (i.yOffset = x.yOffset), (x = i)),
                s || (!1 !== s && !1 !== r.defaultSmoothOrigin)
                  ? ((l = c - y),
                    (u = h - b),
                    (x.xOffset += l * w[0] + u * w[2] - l),
                    (x.yOffset += l * w[1] + u * w[3] - u))
                  : (x.xOffset = x.yOffset = 0)),
              o || t.setAttribute("data-svg-origin", a.join(" "));
          },
          It = function (t) {
            var e,
              i = z(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              n = this.parentNode,
              r = this.nextSibling,
              s = this.style.cssText;
            if (
              (jt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = It);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              r ? n.insertBefore(this, r) : n.appendChild(this),
              jt.removeChild(i),
              (this.style.cssText = s),
              e
            );
          },
          Ft = function (t) {
            return !(
              !Rt ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (t) {
                try {
                  return t.getBBox();
                } catch (e) {
                  return It.call(t, !0);
                }
              })(t)
            );
          },
          qt = [1, 0, 0, 1, 0, 0],
          zt = function (t, e) {
            var i,
              n,
              r,
              s,
              o,
              a,
              l = t._gsTransform || new Dt(),
              u = t.style;
            if (
              (St
                ? (n = J(t, Ot, null, !0))
                : t.currentStyle &&
                  (n =
                    (n = t.currentStyle.filter.match(D)) && 4 === n.length
                      ? [
                          n[0].substr(4),
                          Number(n[2].substr(4)),
                          Number(n[1].substr(4)),
                          n[3].substr(4),
                          l.x || 0,
                          l.y || 0,
                        ].join(",")
                      : ""),
              (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
              !St ||
                (!(a = !Q(t) || "none" === Q(t).display) && t.parentNode) ||
                (a && ((s = u.display), (u.display = "block")),
                t.parentNode || ((o = 1), jt.appendChild(t)),
                (i =
                  !(n = J(t, Ot, null, !0)) ||
                  "none" === n ||
                  "matrix(1, 0, 0, 1, 0, 0)" === n),
                s ? (u.display = s) : a && Wt(u, "display"),
                o && jt.removeChild(t)),
              (l.svg || (t.getCTM && Ft(t))) &&
                (i &&
                  -1 !== (u[St] + "").indexOf("matrix") &&
                  ((n = u[St]), (i = 0)),
                (r = t.getAttribute("transform")),
                i &&
                  r &&
                  ((n =
                    "matrix(" +
                    (r = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    r.b +
                    "," +
                    r.c +
                    "," +
                    r.d +
                    "," +
                    r.e +
                    "," +
                    r.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return qt;
            for (r = (n || "").match(g) || [], xt = r.length; --xt > -1; )
              (s = Number(r[xt])),
                (r[xt] = (o = s - (s |= 0))
                  ? ((1e5 * o + (o < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s
                  : s);
            return e && r.length > 6
              ? [r[0], r[1], r[4], r[5], r[12], r[13]]
              : r;
          },
          Bt = (X.getTransform = function (t, e, i, n) {
            if (t._gsTransform && i && !n) return t._gsTransform;
            var s,
              o,
              a,
              u,
              c,
              h,
              f = (i && t._gsTransform) || new Dt(),
              p = f.scaleX < 0,
              d =
                (Et &&
                  (parseFloat(J(t, At, e, !1, "0 0 0").split(" ")[2]) ||
                    f.zOrigin)) ||
                0,
              m = parseFloat(r.defaultTransformPerspective) || 0;
            if (
              ((f.svg = !(!t.getCTM || !Ft(t))),
              f.svg &&
                (Nt(
                  t,
                  J(t, At, e, !1, "50% 50%") + "",
                  f,
                  t.getAttribute("data-svg-origin")
                ),
                (Pt = r.useSVGTransformAttr || Lt)),
              (s = zt(t)) !== qt)
            ) {
              if (16 === s.length) {
                var _,
                  g,
                  v,
                  y,
                  b,
                  x = s[0],
                  w = s[1],
                  T = s[2],
                  k = s[3],
                  P = s[4],
                  C = s[5],
                  S = s[6],
                  O = s[7],
                  A = s[8],
                  E = s[9],
                  D = s[10],
                  R = s[12],
                  M = s[13],
                  j = s[14],
                  L = s[11],
                  I = Math.atan2(S, D);
                f.zOrigin &&
                  ((R = A * (j = -f.zOrigin) - s[12]),
                  (M = E * j - s[13]),
                  (j = D * j + f.zOrigin - s[14])),
                  (f.rotationX = I * N),
                  I &&
                    ((_ = P * (y = Math.cos(-I)) + A * (b = Math.sin(-I))),
                    (g = C * y + E * b),
                    (v = S * y + D * b),
                    (A = P * -b + A * y),
                    (E = C * -b + E * y),
                    (D = S * -b + D * y),
                    (L = O * -b + L * y),
                    (P = _),
                    (C = g),
                    (S = v)),
                  (I = Math.atan2(-T, D)),
                  (f.rotationY = I * N),
                  I &&
                    ((g = w * (y = Math.cos(-I)) - E * (b = Math.sin(-I))),
                    (v = T * y - D * b),
                    (E = w * b + E * y),
                    (D = T * b + D * y),
                    (L = k * b + L * y),
                    (x = _ = x * y - A * b),
                    (w = g),
                    (T = v)),
                  (I = Math.atan2(w, x)),
                  (f.rotation = I * N),
                  I &&
                    ((_ = x * (y = Math.cos(I)) + w * (b = Math.sin(I))),
                    (g = P * y + C * b),
                    (v = A * y + E * b),
                    (w = w * y - x * b),
                    (C = C * y - P * b),
                    (E = E * y - A * b),
                    (x = _),
                    (P = g),
                    (A = v)),
                  f.rotationX &&
                    Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 &&
                    ((f.rotationX = f.rotation = 0),
                    (f.rotationY = 180 - f.rotationY)),
                  (I = Math.atan2(P, C)),
                  (f.scaleX =
                    ((1e5 * Math.sqrt(x * x + w * w + T * T) + 0.5) | 0) / 1e5),
                  (f.scaleY =
                    ((1e5 * Math.sqrt(C * C + S * S) + 0.5) | 0) / 1e5),
                  (f.scaleZ =
                    ((1e5 * Math.sqrt(A * A + E * E + D * D) + 0.5) | 0) / 1e5),
                  (x /= f.scaleX),
                  (P /= f.scaleY),
                  (w /= f.scaleX),
                  (C /= f.scaleY),
                  Math.abs(I) > 2e-5
                    ? ((f.skewX = I * N),
                      (P = 0),
                      "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(I)))
                    : (f.skewX = 0),
                  (f.perspective = L ? 1 / (L < 0 ? -L : L) : 0),
                  (f.x = R),
                  (f.y = M),
                  (f.z = j),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * P)),
                    (f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * C)));
              } else if (
                !Et ||
                n ||
                !s.length ||
                f.x !== s[4] ||
                f.y !== s[5] ||
                (!f.rotationX && !f.rotationY)
              ) {
                var F = s.length >= 6,
                  q = F ? s[0] : 1,
                  z = s[1] || 0,
                  B = s[2] || 0,
                  H = F ? s[3] : 1;
                (f.x = s[4] || 0),
                  (f.y = s[5] || 0),
                  (a = Math.sqrt(q * q + z * z)),
                  (u = Math.sqrt(H * H + B * B)),
                  (c = q || z ? Math.atan2(z, q) * N : f.rotation || 0),
                  (h = B || H ? Math.atan2(B, H) * N + c : f.skewX || 0),
                  (f.scaleX = a),
                  (f.scaleY = u),
                  (f.rotation = c),
                  (f.skewX = h),
                  Et &&
                    ((f.rotationX = f.rotationY = f.z = 0),
                    (f.perspective = m),
                    (f.scaleZ = 1)),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * q + f.yOrigin * B)),
                    (f.y -= f.yOrigin - (f.xOrigin * z + f.yOrigin * H)));
              }
              for (o in (Math.abs(f.skewX) > 90 &&
                Math.abs(f.skewX) < 270 &&
                (p
                  ? ((f.scaleX *= -1),
                    (f.skewX += f.rotation <= 0 ? 180 : -180),
                    (f.rotation += f.rotation <= 0 ? 180 : -180))
                  : ((f.scaleY *= -1), (f.skewX += f.skewX <= 0 ? 180 : -180))),
              (f.zOrigin = d),
              f))
                f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0);
            }
            return (
              i &&
                ((t._gsTransform = f),
                f.svg &&
                  (Pt && t.style[St]
                    ? l.f.delayedCall(0.001, function () {
                        Wt(t.style, St);
                      })
                    : !Pt &&
                      t.getAttribute("transform") &&
                      l.f.delayedCall(0.001, function () {
                        t.removeAttribute("transform");
                      }))),
              f
            );
          }),
          Ht = function (t) {
            var e,
              i,
              n = this.data,
              r = -n.rotation * L,
              s = r + n.skewX * L,
              o = ((Math.cos(r) * n.scaleX * 1e5) | 0) / 1e5,
              a = ((Math.sin(r) * n.scaleX * 1e5) | 0) / 1e5,
              l = ((Math.sin(s) * -n.scaleY * 1e5) | 0) / 1e5,
              u = ((Math.cos(s) * n.scaleY * 1e5) | 0) / 1e5,
              c = this.t.style,
              h = this.t.currentStyle;
            if (h) {
              (i = a), (a = -l), (l = -i), (e = h.filter), (c.filter = "");
              var f,
                p,
                m = this.t.offsetWidth,
                _ = this.t.offsetHeight,
                g = "absolute" !== h.position,
                v =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  o +
                  ", M12=" +
                  a +
                  ", M21=" +
                  l +
                  ", M22=" +
                  u,
                y = n.x + (m * n.xPercent) / 100,
                b = n.y + (_ * n.yPercent) / 100;
              if (
                (null != n.ox &&
                  ((y +=
                    (f = (n.oxp ? m * n.ox * 0.01 : n.ox) - m / 2) -
                    (f * o +
                      (p = (n.oyp ? _ * n.oy * 0.01 : n.oy) - _ / 2) * a)),
                  (b += p - (f * l + p * u))),
                (v += g
                  ? ", Dx=" +
                    ((f = m / 2) - (f * o + (p = _ / 2) * a) + y) +
                    ", Dy=" +
                    (p - (f * l + p * u) + b) +
                    ")"
                  : ", sizingMethod='auto expand')"),
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (c.filter = e.replace(R, v))
                  : (c.filter = v + " " + e),
                (0 !== t && 1 !== t) ||
                  (1 === o &&
                    0 === a &&
                    0 === l &&
                    1 === u &&
                    ((g && -1 === v.indexOf("Dx=0, Dy=0")) ||
                      (w.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf("Alpha")) &&
                        c.removeAttribute("filter")))),
                !g)
              ) {
                var T,
                  k,
                  P,
                  C = d < 8 ? 1 : -1;
                for (
                  f = n.ieOffsetX || 0,
                    p = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round(
                      (m - ((o < 0 ? -o : o) * m + (a < 0 ? -a : a) * _)) / 2 +
                        y
                    ),
                    n.ieOffsetY = Math.round(
                      (_ - ((u < 0 ? -u : u) * _ + (l < 0 ? -l : l) * m)) / 2 +
                        b
                    ),
                    xt = 0;
                  xt < 4;
                  xt++
                )
                  (P =
                    (i =
                      -1 !== (T = h[(k = rt[xt])]).indexOf("px")
                        ? parseFloat(T)
                        : K(this.t, k, parseFloat(T), T.replace(x, "")) ||
                          0) !== n[k]
                      ? xt < 2
                        ? -n.ieOffsetX
                        : -n.ieOffsetY
                      : xt < 2
                      ? f - n.ieOffsetX
                      : p - n.ieOffsetY),
                    (c[k] =
                      (n[k] = Math.round(
                        i - P * (0 === xt || 2 === xt ? 1 : C)
                      )) + "px");
              }
            }
          },
          Xt =
            (X.set3DTransformRatio =
            X.setTransformRatio =
              function (t) {
                var e,
                  i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  h,
                  p,
                  d,
                  m,
                  _,
                  g,
                  v,
                  y,
                  b,
                  x,
                  w,
                  T = this.data,
                  k = this.t.style,
                  P = T.rotation,
                  C = T.rotationX,
                  S = T.rotationY,
                  O = T.scaleX,
                  A = T.scaleY,
                  E = T.scaleZ,
                  D = T.x,
                  R = T.y,
                  M = T.z,
                  j = T.svg,
                  N = T.perspective,
                  I = T.force3D,
                  F = T.skewY,
                  q = T.skewX;
                if (
                  (F && ((q += F), (P += F)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== I ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      I) ||
                    M ||
                    N ||
                    S ||
                    C ||
                    1 !== E
                  ) ||
                    (Pt && j) ||
                    !Et)
                )
                  P || q || j
                    ? ((P *= L),
                      (x = q * L),
                      (w = 1e5),
                      (i = Math.cos(P) * O),
                      (s = Math.sin(P) * O),
                      (n = Math.sin(P - x) * -A),
                      (o = Math.cos(P - x) * A),
                      x &&
                        "simple" === T.skewType &&
                        ((e = Math.tan(x - F * L)),
                        (n *= e = Math.sqrt(1 + e * e)),
                        (o *= e),
                        F &&
                          ((e = Math.tan(F * L)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (s *= e))),
                      j &&
                        ((D +=
                          T.xOrigin -
                          (T.xOrigin * i + T.yOrigin * n) +
                          T.xOffset),
                        (R +=
                          T.yOrigin -
                          (T.xOrigin * s + T.yOrigin * o) +
                          T.yOffset),
                        Pt &&
                          (T.xPercent || T.yPercent) &&
                          ((_ = this.t.getBBox()),
                          (D += 0.01 * T.xPercent * _.width),
                          (R += 0.01 * T.yPercent * _.height)),
                        D < (_ = 1e-6) && D > -_ && (D = 0),
                        R < _ && R > -_ && (R = 0)),
                      (b =
                        ((i * w) | 0) / w +
                        "," +
                        ((s * w) | 0) / w +
                        "," +
                        ((n * w) | 0) / w +
                        "," +
                        ((o * w) | 0) / w +
                        "," +
                        D +
                        "," +
                        R +
                        ")"),
                      j && Pt
                        ? this.t.setAttribute("transform", "matrix(" + b)
                        : (k[St] =
                            (T.xPercent || T.yPercent
                              ? "translate(" +
                                T.xPercent +
                                "%," +
                                T.yPercent +
                                "%) matrix("
                              : "matrix(") + b))
                    : (k[St] =
                        (T.xPercent || T.yPercent
                          ? "translate(" +
                            T.xPercent +
                            "%," +
                            T.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        O +
                        ",0,0," +
                        A +
                        "," +
                        D +
                        "," +
                        R +
                        ")");
                else {
                  if (
                    (f &&
                      (O < (_ = 1e-4) && O > -_ && (O = E = 2e-5),
                      A < _ && A > -_ && (A = E = 2e-5),
                      !N || T.z || T.rotationX || T.rotationY || (N = 0)),
                    P || q)
                  )
                    (P *= L),
                      (g = i = Math.cos(P)),
                      (v = s = Math.sin(P)),
                      q &&
                        ((P -= q * L),
                        (g = Math.cos(P)),
                        (v = Math.sin(P)),
                        "simple" === T.skewType &&
                          ((e = Math.tan((q - F) * L)),
                          (g *= e = Math.sqrt(1 + e * e)),
                          (v *= e),
                          T.skewY &&
                            ((e = Math.tan(F * L)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (s *= e)))),
                      (n = -v),
                      (o = g);
                  else {
                    if (!(S || C || 1 !== E || N || j))
                      return void (k[St] =
                        (T.xPercent || T.yPercent
                          ? "translate(" +
                            T.xPercent +
                            "%," +
                            T.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        D +
                        "px," +
                        R +
                        "px," +
                        M +
                        "px)" +
                        (1 !== O || 1 !== A
                          ? " scale(" + O + "," + A + ")"
                          : ""));
                    (i = o = 1), (n = s = 0);
                  }
                  (c = 1),
                    (r = a = l = u = h = p = 0),
                    (d = N ? -1 / N : 0),
                    (m = T.zOrigin),
                    (_ = 1e-6),
                    ",",
                    "0",
                    (P = S * L) &&
                      ((g = Math.cos(P)),
                      (l = -(v = Math.sin(P))),
                      (h = d * -v),
                      (r = i * v),
                      (a = s * v),
                      (c = g),
                      (d *= g),
                      (i *= g),
                      (s *= g)),
                    (P = C * L) &&
                      ((e = n * (g = Math.cos(P)) + r * (v = Math.sin(P))),
                      (y = o * g + a * v),
                      (u = c * v),
                      (p = d * v),
                      (r = n * -v + r * g),
                      (a = o * -v + a * g),
                      (c *= g),
                      (d *= g),
                      (n = e),
                      (o = y)),
                    1 !== E && ((r *= E), (a *= E), (c *= E), (d *= E)),
                    1 !== A && ((n *= A), (o *= A), (u *= A), (p *= A)),
                    1 !== O && ((i *= O), (s *= O), (l *= O), (h *= O)),
                    (m || j) &&
                      (m && ((D += r * -m), (R += a * -m), (M += c * -m + m)),
                      j &&
                        ((D +=
                          T.xOrigin -
                          (T.xOrigin * i + T.yOrigin * n) +
                          T.xOffset),
                        (R +=
                          T.yOrigin -
                          (T.xOrigin * s + T.yOrigin * o) +
                          T.yOffset)),
                      D < _ && D > -_ && (D = "0"),
                      R < _ && R > -_ && (R = "0"),
                      M < _ && M > -_ && (M = 0)),
                    (b =
                      T.xPercent || T.yPercent
                        ? "translate(" +
                          T.xPercent +
                          "%," +
                          T.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (b +=
                      (i < _ && i > -_ ? "0" : i) +
                      "," +
                      (s < _ && s > -_ ? "0" : s) +
                      "," +
                      (l < _ && l > -_ ? "0" : l)),
                    (b +=
                      "," +
                      (h < _ && h > -_ ? "0" : h) +
                      "," +
                      (n < _ && n > -_ ? "0" : n) +
                      "," +
                      (o < _ && o > -_ ? "0" : o)),
                    C || S || 1 !== E
                      ? ((b +=
                          "," +
                          (u < _ && u > -_ ? "0" : u) +
                          "," +
                          (p < _ && p > -_ ? "0" : p) +
                          "," +
                          (r < _ && r > -_ ? "0" : r)),
                        (b +=
                          "," +
                          (a < _ && a > -_ ? "0" : a) +
                          "," +
                          (c < _ && c > -_ ? "0" : c) +
                          "," +
                          (d < _ && d > -_ ? "0" : d) +
                          ","))
                      : (b += ",0,0,0,0,1,0,"),
                    (b +=
                      D + "," + R + "," + M + "," + (N ? 1 + -M / N : 1) + ")"),
                    (k[St] = b);
                }
              });
        ((a = Dt.prototype).x =
          a.y =
          a.z =
          a.skewX =
          a.skewY =
          a.rotation =
          a.rotationX =
          a.rotationY =
          a.zOrigin =
          a.xPercent =
          a.yPercent =
          a.xOffset =
          a.yOffset =
            0),
          (a.scaleX = a.scaleY = a.scaleZ = 1),
          Tt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, n, s, o, a, l) {
                if (s._lastParsedTransform === l) return o;
                s._lastParsedTransform = l;
                var u,
                  c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[n] && ((u = l[n]), (l[n] = e)),
                  c && (l.scale = c(_, t));
                var h,
                  f,
                  p,
                  d,
                  g,
                  v,
                  y,
                  b,
                  x,
                  w = t._gsTransform,
                  T = t.style,
                  k = Ct.length,
                  P = l,
                  C = {},
                  S = Bt(t, i, !0, P.parseTransform),
                  O =
                    P.transform &&
                    ("function" == typeof P.transform
                      ? P.transform(_, m)
                      : P.transform);
                if (
                  ((S.skewType = P.skewType || S.skewType || r.defaultSkewType),
                  (s._transform = S),
                  "rotationZ" in P && (P.rotation = P.rotationZ),
                  O && "string" == typeof O && St)
                )
                  ((f = B.style)[St] = O),
                    (f.display = "block"),
                    (f.position = "absolute"),
                    -1 !== O.indexOf("%") &&
                      ((f.width = J(t, "width")), (f.height = J(t, "height"))),
                    q.body.appendChild(B),
                    (h = Bt(B, null, !1)),
                    "simple" === S.skewType &&
                      (h.scaleY *= Math.cos(h.skewX * L)),
                    S.svg &&
                      ((v = S.xOrigin),
                      (y = S.yOrigin),
                      (h.x -= S.xOffset),
                      (h.y -= S.yOffset),
                      (P.transformOrigin || P.svgOrigin) &&
                        ((O = {}),
                        Nt(
                          t,
                          ot(P.transformOrigin),
                          O,
                          P.svgOrigin,
                          P.smoothOrigin,
                          !0
                        ),
                        (v = O.xOrigin),
                        (y = O.yOrigin),
                        (h.x -= O.xOffset - S.xOffset),
                        (h.y -= O.yOffset - S.yOffset)),
                      (v || y) &&
                        ((b = zt(B, !0)),
                        (h.x -= v - (v * b[0] + y * b[2])),
                        (h.y -= y - (v * b[1] + y * b[3])))),
                    q.body.removeChild(B),
                    h.perspective || (h.perspective = S.perspective),
                    null != P.xPercent &&
                      (h.xPercent = lt(P.xPercent, S.xPercent)),
                    null != P.yPercent &&
                      (h.yPercent = lt(P.yPercent, S.yPercent));
                else if ("object" == typeof P) {
                  if (
                    ((h = {
                      scaleX: lt(
                        null != P.scaleX ? P.scaleX : P.scale,
                        S.scaleX
                      ),
                      scaleY: lt(
                        null != P.scaleY ? P.scaleY : P.scale,
                        S.scaleY
                      ),
                      scaleZ: lt(P.scaleZ, S.scaleZ),
                      x: lt(P.x, S.x),
                      y: lt(P.y, S.y),
                      z: lt(P.z, S.z),
                      xPercent: lt(P.xPercent, S.xPercent),
                      yPercent: lt(P.yPercent, S.yPercent),
                      perspective: lt(P.transformPerspective, S.perspective),
                    }),
                    null != (g = P.directionalRotation))
                  )
                    if ("object" == typeof g) for (f in g) P[f] = g[f];
                    else P.rotation = g;
                  "string" == typeof P.x &&
                    -1 !== P.x.indexOf("%") &&
                    ((h.x = 0), (h.xPercent = lt(P.x, S.xPercent))),
                    "string" == typeof P.y &&
                      -1 !== P.y.indexOf("%") &&
                      ((h.y = 0), (h.yPercent = lt(P.y, S.yPercent))),
                    (h.rotation = ut(
                      "rotation" in P
                        ? P.rotation
                        : "shortRotation" in P
                        ? P.shortRotation + "_short"
                        : S.rotation,
                      S.rotation,
                      "rotation",
                      C
                    )),
                    Et &&
                      ((h.rotationX = ut(
                        "rotationX" in P
                          ? P.rotationX
                          : "shortRotationX" in P
                          ? P.shortRotationX + "_short"
                          : S.rotationX || 0,
                        S.rotationX,
                        "rotationX",
                        C
                      )),
                      (h.rotationY = ut(
                        "rotationY" in P
                          ? P.rotationY
                          : "shortRotationY" in P
                          ? P.shortRotationY + "_short"
                          : S.rotationY || 0,
                        S.rotationY,
                        "rotationY",
                        C
                      ))),
                    (h.skewX = ut(P.skewX, S.skewX)),
                    (h.skewY = ut(P.skewY, S.skewY));
                }
                for (
                  Et &&
                    null != P.force3D &&
                    ((S.force3D = P.force3D), (d = !0)),
                    (p =
                      S.force3D ||
                      S.z ||
                      S.rotationX ||
                      S.rotationY ||
                      h.z ||
                      h.rotationX ||
                      h.rotationY ||
                      h.perspective) ||
                      null == P.scale ||
                      (h.scaleZ = 1);
                  --k > -1;

                )
                  ((O = h[(x = Ct[k])] - S[x]) > 1e-6 ||
                    O < -1e-6 ||
                    null != P[x] ||
                    null != I[x]) &&
                    ((d = !0),
                    (o = new vt(S, x, S[x], O, o)),
                    x in C && (o.e = C[x]),
                    (o.xs0 = 0),
                    (o.plugin = a),
                    s._overwriteProps.push(o.n));
                return (
                  (O = P.transformOrigin),
                  S.svg &&
                    (O || P.svgOrigin) &&
                    ((v = S.xOffset),
                    (y = S.yOffset),
                    Nt(t, ot(O), h, P.svgOrigin, P.smoothOrigin),
                    (o = yt(
                      S,
                      "xOrigin",
                      (w ? S : h).xOrigin,
                      h.xOrigin,
                      o,
                      "transformOrigin"
                    )),
                    (o = yt(
                      S,
                      "yOrigin",
                      (w ? S : h).yOrigin,
                      h.yOrigin,
                      o,
                      "transformOrigin"
                    )),
                    (v === S.xOffset && y === S.yOffset) ||
                      ((o = yt(
                        S,
                        "xOffset",
                        w ? v : S.xOffset,
                        S.xOffset,
                        o,
                        "transformOrigin"
                      )),
                      (o = yt(
                        S,
                        "yOffset",
                        w ? y : S.yOffset,
                        S.yOffset,
                        o,
                        "transformOrigin"
                      ))),
                    (O = "0px 0px")),
                  (O || (Et && p && S.zOrigin)) &&
                    (St
                      ? ((d = !0),
                        (x = At),
                        (O = (O || J(t, x, i, !1, "50% 50%")) + ""),
                        ((o = new vt(T, x, 0, 0, o, -1, "transformOrigin")).b =
                          T[x]),
                        (o.plugin = a),
                        Et
                          ? ((f = S.zOrigin),
                            (O = O.split(" ")),
                            (S.zOrigin =
                              (O.length > 2 && (0 === f || "0px" !== O[2])
                                ? parseFloat(O[2])
                                : f) || 0),
                            (o.xs0 = o.e =
                              O[0] + " " + (O[1] || "50%") + " 0px"),
                            ((o = new vt(S, "zOrigin", 0, 0, o, -1, o.n)).b =
                              f),
                            (o.xs0 = o.e = S.zOrigin))
                          : (o.xs0 = o.e = O))
                      : ot(O + "", S)),
                  d &&
                    (s._transformType =
                      (S.svg && Pt) || (!p && 3 !== this._transformType)
                        ? 2
                        : 3),
                  u && (l[n] = u),
                  c && (l.scale = c),
                  o
                );
              },
              prefix: !0,
            }
          ),
          Tt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          Tt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, n, r, s, o, a) {
              n = this.format(n);
              var l,
                u,
                c,
                h,
                f,
                p,
                d,
                m,
                _,
                g,
                v,
                y,
                b,
                x,
                w,
                T,
                k = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                P = t.style;
              for (
                _ = parseFloat(t.offsetWidth),
                  g = parseFloat(t.offsetHeight),
                  l = n.split(" "),
                  u = 0;
                u < k.length;
                u++
              )
                this.p.indexOf("border") && (k[u] = Z(k[u])),
                  -1 !== (f = h = J(t, k[u], i, !1, "0px")).indexOf(" ") &&
                    ((f = (h = f.split(" "))[0]), (h = h[1])),
                  (p = c = l[u]),
                  (d = parseFloat(f)),
                  (y = f.substr((d + "").length)),
                  (b = "=" === p.charAt(1))
                    ? ((m = parseInt(p.charAt(0) + "1", 10)),
                      (p = p.substr(2)),
                      (m *= parseFloat(p)),
                      (v = p.substr((m + "").length - (m < 0 ? 1 : 0)) || ""))
                    : ((m = parseFloat(p)), (v = p.substr((m + "").length))),
                  "" === v && (v = e[r] || y),
                  v !== y &&
                    ((x = K(t, "borderLeft", d, y)),
                    (w = K(t, "borderTop", d, y)),
                    "%" === v
                      ? ((f = (x / _) * 100 + "%"), (h = (w / g) * 100 + "%"))
                      : "em" === v
                      ? ((f = x / (T = K(t, "borderLeft", 1, "em")) + "em"),
                        (h = w / T + "em"))
                      : ((f = x + "px"), (h = w + "px")),
                    b &&
                      ((p = parseFloat(f) + m + v),
                      (c = parseFloat(h) + m + v))),
                  (o = bt(P, k[u], f + " " + h, p + " " + c, !1, "0px", o));
              return o;
            },
            prefix: !0,
            formatter: mt("0px 0px 0px 0px", !1, !0),
          }),
          Tt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, n, r, s, o) {
                return bt(
                  t.style,
                  n,
                  this.format(J(t, n, i, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  s
                );
              },
              prefix: !0,
              formatter: mt("0px 0px", !1, !0),
            }
          ),
          Tt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, n, r, s, o) {
              var a,
                l,
                u,
                c,
                h,
                f,
                p = "background-position",
                m = i || Q(t, null),
                _ = this.format(
                  (m
                    ? d
                      ? m.getPropertyValue(p + "-x") +
                        " " +
                        m.getPropertyValue(p + "-y")
                      : m.getPropertyValue(p)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                g = this.format(e);
              if (
                (-1 !== _.indexOf("%")) != (-1 !== g.indexOf("%")) &&
                g.split(",").length < 2 &&
                (f = J(t, "backgroundImage").replace(O, "")) &&
                "none" !== f
              ) {
                for (
                  a = _.split(" "),
                    l = g.split(" "),
                    H.setAttribute("src", f),
                    u = 2;
                  --u > -1;

                )
                  (c = -1 !== (_ = a[u]).indexOf("%")) !==
                    (-1 !== l[u].indexOf("%")) &&
                    ((h =
                      0 === u
                        ? t.offsetWidth - H.width
                        : t.offsetHeight - H.height),
                    (a[u] = c
                      ? (parseFloat(_) / 100) * h + "px"
                      : (parseFloat(_) / h) * 100 + "%"));
                _ = a.join(" ");
              }
              return this.parseComplex(t.style, _, g, s, o);
            },
            formatter: ot,
          }),
          Tt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : ot(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          Tt("perspective", { defaultValue: "0px", prefix: !0 }),
          Tt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          Tt("transformStyle", { prefix: !0 }),
          Tt("backfaceVisibility", { prefix: !0 }),
          Tt("userSelect", { prefix: !0 }),
          Tt("margin", {
            parser: _t("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          Tt("padding", {
            parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          Tt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, n, r, s, o) {
              var a, l, u;
              return (
                d < 9
                  ? ((l = t.currentStyle),
                    (u = d < 8 ? " " : ","),
                    (a =
                      "rect(" +
                      l.clipTop +
                      u +
                      l.clipRight +
                      u +
                      l.clipBottom +
                      u +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(u)))
                  : ((a = this.format(J(t, this.p, i, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, a, e, s, o)
              );
            },
          }),
          Tt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          Tt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
              return r;
            },
          }),
          Tt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, n, r, s, o) {
              var a = J(t, "borderTopWidth", i, !1, "0px"),
                l = this.format(e).split(" "),
                u = l[0].replace(x, "");
              return (
                "px" !== u &&
                  (a = parseFloat(a) / K(t, "borderTopWidth", 1, u) + u),
                this.parseComplex(
                  t.style,
                  this.format(
                    a +
                      " " +
                      J(t, "borderTopStyle", i, !1, "solid") +
                      " " +
                      J(t, "borderTopColor", i, !1, "#000")
                  ),
                  l.join(" "),
                  s,
                  o
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(dt) || ["#000"])[0]
              );
            },
          }),
          Tt("borderWidth", {
            parser: _t(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          Tt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r, s) {
              var o = t.style,
                a = "cssFloat" in o ? "cssFloat" : "styleFloat";
              return new vt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e);
            },
          });
        var $t = function (t) {
          var e,
            i = this.t,
            n = i.filter || J(this.data, "filter") || "",
            r = (this.s + this.c * t) | 0;
          100 === r &&
            (-1 === n.indexOf("atrix(") &&
            -1 === n.indexOf("radient(") &&
            -1 === n.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !J(this.data, "filter")))
              : ((i.filter = n.replace(k, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
              -1 === n.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = n + " alpha(opacity=" + r + ")")
                : (i.filter = n.replace(w, "opacity=" + r)));
        };
        Tt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, n, r, s, o) {
            var a = parseFloat(J(t, "opacity", i, !1, "1")),
              l = t.style,
              u = "autoAlpha" === n;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
              u &&
                1 === a &&
                "hidden" === J(t, "visibility", i) &&
                0 !== e &&
                (a = 0),
              W
                ? (s = new vt(l, "opacity", a, e - a, s))
                : (((s = new vt(l, "opacity", 100 * a, 100 * (e - a), s)).xn1 =
                    u ? 1 : 0),
                  (l.zoom = 1),
                  (s.type = 2),
                  (s.b = "alpha(opacity=" + s.s + ")"),
                  (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                  (s.data = t),
                  (s.plugin = o),
                  (s.setRatio = $t)),
              u &&
                (((s = new vt(
                  l,
                  "visibility",
                  0,
                  0,
                  s,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== a ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                r._overwriteProps.push(s.n),
                r._overwriteProps.push(n)),
              s
            );
          },
        });
        var Wt = function (t, e) {
            e &&
              (t.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  t.removeProperty(e.replace(C, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          Yt = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Wt(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        Tt("className", {
          parser: function (e, n, r, s, o, a, l) {
            var u,
              c,
              h,
              f,
              p,
              d = e.getAttribute("class") || "",
              m = e.style.cssText;
            if (
              (((o = s._classNamePT = new vt(e, r, 0, 0, o, 2)).setRatio = Yt),
              (o.pr = -11),
              (t = !0),
              (o.b = d),
              (c = et(e, i)),
              (h = e._gsClassPT))
            ) {
              for (f = {}, p = h.data; p; ) (f[p.p] = 1), (p = p._next);
              h.setRatio(1);
            }
            return (
              (e._gsClassPT = o),
              (o.e =
                "=" !== n.charAt(1)
                  ? n
                  : d.replace(
                      new RegExp("(?:\\s|^)" + n.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === n.charAt(0) ? " " + n.substr(2) : "")),
              e.setAttribute("class", o.e),
              (u = it(e, c, et(e), l, f)),
              e.setAttribute("class", d),
              (o.data = u.firstMPT),
              (e.style.cssText = m),
              (o = o.xfirst = s.parse(e, u.difs, o, a))
            );
          },
        });
        var Ut = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              n,
              r,
              s,
              a = this.t.style,
              l = o.transform.parse;
            if ("all" === this.e) (a.cssText = ""), (r = !0);
            else
              for (
                n = (e = this.e.split(" ").join("").split(",")).length;
                --n > -1;

              )
                (i = e[n]),
                  o[i] &&
                    (o[i].parse === l
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? At : o[i].p)),
                  Wt(a, i);
            r &&
              (Wt(a, St),
              (s = this.t._gsTransform) &&
                (s.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          Tt("clearProps", {
            parser: function (e, i, n, r, s) {
              return (
                ((s = new vt(e, n, 0, 0, s, 2)).setRatio = Ut),
                (s.e = i),
                (s.pr = -10),
                (s.data = r._tween),
                (t = !0),
                s
              );
            },
          }),
            a = "bezier,throwProps,physicsProps,physics2D".split(","),
            xt = a.length;
          xt--;

        )
          kt(a[xt]);
        ((a = r.prototype)._firstPT =
          a._lastParsedTransform =
          a._transform =
            null),
          (a._onInitTween = function (s, a, l, f) {
            if (!s.nodeType) return !1;
            (this._target = m = s),
              (this._tween = l),
              (this._vars = a),
              (_ = f),
              (u = a.autoRound),
              (t = !1),
              (e = a.suffixMap || r.suffixMap),
              (i = Q(s, "")),
              (n = this._overwriteProps);
            var d,
              g,
              v,
              y,
              b,
              x,
              w,
              k,
              P,
              C = s.style;
            if (
              (c &&
                "" === C.zIndex &&
                (("auto" !== (d = J(s, "zIndex", i)) && "" !== d) ||
                  this._addLazySet(C, "zIndex", 0)),
              "string" == typeof a &&
                ((y = C.cssText),
                (d = et(s, i)),
                (C.cssText = y + ";" + a),
                (d = it(s, d, et(s)).difs),
                !W && T.test(a) && (d.opacity = parseFloat(RegExp.$1)),
                (a = d),
                (C.cssText = y)),
              a.className
                ? (this._firstPT = g =
                    o.className.parse(
                      s,
                      a.className,
                      "className",
                      this,
                      null,
                      null,
                      a
                    ))
                : (this._firstPT = g = this.parse(s, a, null)),
              this._transformType)
            ) {
              for (
                P = 3 === this._transformType,
                  St
                    ? h &&
                      ((c = !0),
                      "" === C.zIndex &&
                        (("auto" !== (w = J(s, "zIndex", i)) && "" !== w) ||
                          this._addLazySet(C, "zIndex", 0)),
                      p &&
                        this._addLazySet(
                          C,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (P ? "visible" : "hidden")
                        ))
                    : (C.zoom = 1),
                  v = g;
                v && v._next;

              )
                v = v._next;
              (k = new vt(s, "transform", 0, 0, null, 2)),
                this._linkCSSP(k, null, v),
                (k.setRatio = St ? Xt : Ht),
                (k.data = this._transform || Bt(s, i, !0)),
                (k.tween = l),
                (k.pr = -1),
                n.pop();
            }
            if (t) {
              for (; g; ) {
                for (x = g._next, v = y; v && v.pr > g.pr; ) v = v._next;
                (g._prev = v ? v._prev : b) ? (g._prev._next = g) : (y = g),
                  (g._next = v) ? (v._prev = g) : (b = g),
                  (g = x);
              }
              this._firstPT = y;
            }
            return !0;
          }),
          (a.parse = function (t, n, r, s) {
            var a,
              l,
              c,
              h,
              f,
              p,
              d,
              g,
              v,
              y,
              b = t.style;
            for (a in n) {
              if (
                ("function" == typeof (p = n[a]) && (p = p(_, m)), (l = o[a]))
              )
                r = l.parse(t, p, a, this, r, s, n);
              else {
                if ("--" === a.substr(0, 2)) {
                  this._tween._propLookup[a] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    Q(t).getPropertyValue(a) + "",
                    p + "",
                    a,
                    !1,
                    a
                  );
                  continue;
                }
                (f = J(t, a, i) + ""),
                  (v = "string" == typeof p),
                  "color" === a ||
                  "fill" === a ||
                  "stroke" === a ||
                  -1 !== a.indexOf("Color") ||
                  (v && P.test(p))
                    ? (v ||
                        (p =
                          ((p = ft(p)).length > 3 ? "rgba(" : "rgb(") +
                          p.join(",") +
                          ")"),
                      (r = bt(b, a, f, p, !0, "transparent", r, 0, s)))
                    : v && j.test(p)
                    ? (r = bt(b, a, f, p, !0, null, r, 0, s))
                    : ((d =
                        (c = parseFloat(f)) || 0 === c
                          ? f.substr((c + "").length)
                          : ""),
                      ("" !== f && "auto" !== f) ||
                        ("width" === a || "height" === a
                          ? ((c = st(t, a, i)), (d = "px"))
                          : "left" === a || "top" === a
                          ? ((c = tt(t, a, i)), (d = "px"))
                          : ((c = "opacity" !== a ? 0 : 1), (d = ""))),
                      (y = v && "=" === p.charAt(1))
                        ? ((h = parseInt(p.charAt(0) + "1", 10)),
                          (p = p.substr(2)),
                          (h *= parseFloat(p)),
                          (g = p.replace(x, "")))
                        : ((h = parseFloat(p)),
                          (g = v ? p.replace(x, "") : "")),
                      "" === g && (g = a in e ? e[a] : d),
                      (p = h || 0 === h ? (y ? h + c : h) + g : n[a]),
                      d !== g &&
                        (("" === g && "lineHeight" !== a) ||
                          ((h || 0 === h) &&
                            c &&
                            ((c = K(t, a, c, d)),
                            "%" === g
                              ? ((c /= K(t, a, 100, "%") / 100),
                                !0 !== n.strictUnits && (f = c + "%"))
                              : "em" === g ||
                                "rem" === g ||
                                "vw" === g ||
                                "vh" === g
                              ? (c /= K(t, a, 1, g))
                              : "px" !== g && ((h = K(t, a, h, g)), (g = "px")),
                            y && (h || 0 === h) && (p = h + c + g)))),
                      y && (h += c),
                      (!c && 0 !== c) || (!h && 0 !== h)
                        ? void 0 !== b[a] &&
                          (p || (p + "" != "NaN" && null != p))
                          ? ((r = new vt(
                              b,
                              a,
                              h || c || 0,
                              0,
                              r,
                              -1,
                              a,
                              !1,
                              0,
                              f,
                              p
                            )).xs0 =
                              "none" !== p ||
                              ("display" !== a && -1 === a.indexOf("Style"))
                                ? p
                                : f)
                          : U("invalid " + a + " tween value: " + n[a])
                        : ((r = new vt(
                            b,
                            a,
                            c,
                            h - c,
                            r,
                            0,
                            a,
                            !1 !== u && ("px" === g || "zIndex" === a),
                            0,
                            f,
                            p
                          )).xs0 = g));
              }
              s && r && !r.plugin && (r.plugin = s);
            }
            return r;
          }),
          (a.setRatio = function (t) {
            var e,
              i,
              n,
              r = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = r.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (2 === (n = r.l))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === n)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((e = r.r(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (
                          n = r.l, i = r.xs0 + e + r.xs1, n = 1;
                          n < r.l;
                          n++
                        )
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = e + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next;
              }
          }),
          (a._enableTransforms = function (t) {
            (this._transform = this._transform || Bt(this._target, i, !0)),
              (this._transformType =
                (this._transform.svg && Pt) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Vt = function (t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (a._addLazySet = function (t, e, i) {
          var n = (this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = Vt), (n.data = this);
        }),
          (a._linkCSSP = function (t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (a._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (a._kill = function (t) {
            var e,
              i,
              n,
              r = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((r = {}), t)) r[i] = t[i];
              (r.opacity = 1), r.autoAlpha && (r.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((n = e.xfirst) && n._prev
                  ? this._linkCSSP(n._prev, e._next, n._prev._prev)
                  : n === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, n._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return l.d.prototype._kill.call(this, r);
          });
        var Gt = function (t, e, i) {
          var n, r, s, o;
          if (t.slice) for (r = t.length; --r > -1; ) Gt(t[r], e, i);
          else
            for (r = (n = t.childNodes).length; --r > -1; )
              (o = (s = n[r]).type),
                s.style && (e.push(et(s)), i && i.push(s)),
                (1 !== o && 9 !== o && 11 !== o) ||
                  !s.childNodes.length ||
                  Gt(s, e, i);
        };
        return (
          (r.cascadeTo = function (t, e, i) {
            var n,
              r,
              s,
              o,
              a = l.f.to(t, e, i),
              u = [a],
              c = [],
              h = [],
              f = [],
              p = l.f._internals.reservedProps;
            for (
              t = a._targets || a.target,
                Gt(t, c, f),
                a.render(e, !0, !0),
                Gt(t, h),
                a.render(0, !0, !0),
                a._enabled(!0),
                n = f.length;
              --n > -1;

            )
              if ((r = it(f[n], c[n], h[n])).firstMPT) {
                for (s in ((r = r.difs), i)) p[s] && (r[s] = i[s]);
                for (s in ((o = {}), r)) o[s] = c[n][s];
                u.push(l.f.fromTo(f[n], e, o, r));
              }
            return u;
          }),
          l.d.activate([r]),
          r
        );
      },
      !0
    );
    var f = l.g.CSSPlugin,
      p = l.e._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (t, e, i, n) {
          var r, s;
          if ("function" != typeof t.setAttribute) return !1;
          for (r in e)
            "function" == typeof (s = e[r]) && (s = s(n, t)),
              this._addTween(
                t,
                "setAttribute",
                t.getAttribute(r) + "",
                s + "",
                r,
                !1,
                r
              ),
              this._overwriteProps.push(r);
          return !0;
        },
      }),
      d = l.e._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function (t, e, i) {
          return (this._tween = i), !0;
        },
      }),
      m = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (i) {
          return ((Math.round(i / t) * t * e) | 0) / e;
        };
      },
      _ = function (t, e) {
        for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
      },
      g = d.prototype;
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ (g._onInitAllProps = function () {
      var t,
        e,
        i,
        n,
        r = this._tween,
        s = r.vars.roundProps,
        o = {},
        a = r._propLookup.roundProps;
      if ("object" != typeof s || s.push)
        for (
          "string" == typeof s && (s = s.split(",")), i = s.length;
          --i > -1;

        )
          o[s[i]] = Math.round;
      else for (n in s) o[n] = m(s[n]);
      for (n in o)
        for (t = r._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(o)
              : t.n === n &&
                (2 === t.f && t.t
                  ? _(t.t._firstPT, o[n])
                  : (this._add(t.t, n, t.s, t.c, o[n]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : r._firstPT === t && (r._firstPT = e),
                    (t._next = t._prev = null),
                    (r._propLookup[n] = a))),
            (t = e);
      return !1;
    }),
      (g._add = function (t, e, i, n, r) {
        this._addTween(t, e, i, i + n, e, r || Math.round),
          this._overwriteProps.push(e);
      });
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var v = l.e._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, n) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var r,
          s,
          o,
          a,
          l,
          u,
          c = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (r in e)
          "useRadians" !== r &&
            ("function" == typeof (a = e[r]) && (a = a(n, t)),
            (s = (u = (a + "").split("_"))[0]),
            (o = parseFloat(
              "function" != typeof t[r]
                ? t[r]
                : t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
            )),
            (l =
              (a = this.finals[r] =
                "string" == typeof s && "=" === s.charAt(1)
                  ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                  : Number(s) || 0) - o),
            u.length &&
              (-1 !== (s = u.join("_")).indexOf("short") &&
                (l %= c) !== l % (c / 2) &&
                (l = l < 0 ? l + c : l - c),
              -1 !== s.indexOf("_cw") && l < 0
                ? (l = ((l + 9999999999 * c) % c) - ((l / c) | 0) * c)
                : -1 !== s.indexOf("ccw") &&
                  l > 0 &&
                  (l = ((l - 9999999999 * c) % c) - ((l / c) | 0) * c)),
            (l > 1e-6 || l < -1e-6) &&
              (this._addTween(t, r, o, o + l, r),
              this._overwriteProps.push(r)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    });
    v._autoCSS = !0;
    /*!
     * VERSION: 1.3.8
     * DATE: 2018-05-30
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var y = 180 / Math.PI,
      b = [],
      x = [],
      w = [],
      T = {},
      k = l.e._gsDefine.globals,
      P = function (t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6),
          t === e && (e = t + (i - t) / 1e6),
          (this.a = t),
          (this.b = e),
          (this.c = i),
          (this.d = n),
          (this.da = n - t),
          (this.ca = i - t),
          (this.ba = e - t);
      },
      C = function (t, e, i, n) {
        var r = { a: t },
          s = {},
          o = {},
          a = { c: n },
          l = (t + e) / 2,
          u = (e + i) / 2,
          c = (i + n) / 2,
          h = (l + u) / 2,
          f = (u + c) / 2,
          p = (f - h) / 8;
        return (
          (r.b = l + (t - l) / 4),
          (s.b = h + p),
          (r.c = s.a = (r.b + s.b) / 2),
          (s.c = o.a = (h + f) / 2),
          (o.b = f - p),
          (a.b = c + (n - c) / 4),
          (o.c = a.a = (o.b + a.b) / 2),
          [r, s, o, a]
        );
      },
      S = function (t, e, i, n, r) {
        var s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m,
          _,
          g,
          v = t.length - 1,
          y = 0,
          T = t[0].a;
        for (s = 0; s < v; s++)
          (o = (u = t[y]).a),
            (a = u.d),
            (l = t[y + 1].d),
            r
              ? ((m = b[s]),
                (g = (((_ = x[s]) + m) * e * 0.25) / (n ? 0.5 : w[s] || 0.5)),
                (f =
                  a -
                  ((c = a - (a - o) * (n ? 0.5 * e : 0 !== m ? g / m : 0)) +
                    ((((h = a + (l - a) * (n ? 0.5 * e : 0 !== _ ? g / _ : 0)) -
                      c) *
                      ((3 * m) / (m + _) + 0.5)) /
                      4 || 0))))
              : (f =
                  a -
                  ((c = a - (a - o) * e * 0.5) + (h = a + (l - a) * e * 0.5)) /
                    2),
            (c += f),
            (h += f),
            (u.c = p = c),
            (u.b = 0 !== s ? T : (T = u.a + 0.6 * (u.c - u.a))),
            (u.da = a - o),
            (u.ca = p - o),
            (u.ba = T - o),
            i
              ? ((d = C(o, T, p, a)),
                t.splice(y, 1, d[0], d[1], d[2], d[3]),
                (y += 4))
              : y++,
            (T = h);
        ((u = t[y]).b = T),
          (u.c = T + 0.4 * (u.d - T)),
          (u.da = u.d - u.a),
          (u.ca = u.c - u.a),
          (u.ba = T - u.a),
          i &&
            ((d = C(u.a, T, u.c, u.d)), t.splice(y, 1, d[0], d[1], d[2], d[3]));
      },
      O = function (t, e, i, n) {
        var r,
          s,
          o,
          a,
          l,
          u,
          c = [];
        if (n)
          for (s = (t = [n].concat(t)).length; --s > -1; )
            "string" == typeof (u = t[s][e]) &&
              "=" === u.charAt(1) &&
              (t[s][e] = n[e] + Number(u.charAt(0) + u.substr(2)));
        if ((r = t.length - 2) < 0)
          return (c[0] = new P(t[0][e], 0, 0, t[0][e])), c;
        for (s = 0; s < r; s++)
          (o = t[s][e]),
            (a = t[s + 1][e]),
            (c[s] = new P(o, 0, 0, a)),
            i &&
              ((l = t[s + 2][e]),
              (b[s] = (b[s] || 0) + (a - o) * (a - o)),
              (x[s] = (x[s] || 0) + (l - a) * (l - a)));
        return (c[s] = new P(t[s][e], 0, 0, t[s + 1][e])), c;
      },
      A = function (t, e, i, n, r, s) {
        var o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d = {},
          m = [],
          _ = s || t[0];
        for (a in ((r =
          "string" == typeof r
            ? "," + r + ","
            : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == e && (e = 1),
        t[0]))
          m.push(a);
        if (t.length > 1) {
          for (p = t[t.length - 1], f = !0, o = m.length; --o > -1; )
            if (((a = m[o]), Math.abs(_[a] - p[a]) > 0.05)) {
              f = !1;
              break;
            }
          f &&
            ((t = t.concat()),
            s && t.unshift(s),
            t.push(t[1]),
            (s = t[t.length - 3]));
        }
        for (b.length = x.length = w.length = 0, o = m.length; --o > -1; )
          (a = m[o]),
            (T[a] = -1 !== r.indexOf("," + a + ",")),
            (d[a] = O(t, a, T[a], s));
        for (o = b.length; --o > -1; )
          (b[o] = Math.sqrt(b[o])), (x[o] = Math.sqrt(x[o]));
        if (!n) {
          for (o = m.length; --o > -1; )
            if (T[a])
              for (h = (l = d[m[o]]).length - 1, u = 0; u < h; u++)
                (c = l[u + 1].da / x[u] + l[u].da / b[u] || 0),
                  (w[u] = (w[u] || 0) + c * c);
          for (o = w.length; --o > -1; ) w[o] = Math.sqrt(w[o]);
        }
        for (o = m.length, u = i ? 4 : 1; --o > -1; )
          (l = d[(a = m[o])]),
            S(l, e, i, n, T[a]),
            f && (l.splice(0, u), l.splice(l.length - u, u));
        return d;
      },
      E = function (t, e, i) {
        for (
          var n, r, s, o, a, l, u, c, h, f, p, d = 1 / i, m = t.length;
          --m > -1;

        )
          for (
            s = (f = t[m]).a,
              o = f.d - s,
              a = f.c - s,
              l = f.b - s,
              n = r = 0,
              c = 1;
            c <= i;
            c++
          )
            (n =
              r -
              (r =
                ((u = d * c) * u * o + 3 * (h = 1 - u) * (u * a + h * l)) * u)),
              (e[(p = m * i + c - 1)] = (e[p] || 0) + n * n);
      },
      D = l.e._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function (t, e, i) {
          (this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var n,
            r,
            s,
            o,
            a,
            l = e.values || [],
            u = {},
            c = l[0],
            h = e.autoRotate || i.vars.orientToBezier;
          for (n in ((this._autoRotate = h
            ? h instanceof Array
              ? h
              : [["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]]
            : null),
          c))
            this._props.push(n);
          for (s = this._props.length; --s > -1; )
            (n = this._props[s]),
              this._overwriteProps.push(n),
              (r = this._func[n] = "function" == typeof t[n]),
              (u[n] = r
                ? t[
                    n.indexOf("set") ||
                    "function" != typeof t["get" + n.substr(3)]
                      ? n
                      : "get" + n.substr(3)
                  ]()
                : parseFloat(t[n])),
              a || (u[n] !== l[0][n] && (a = u));
          if (
            ((this._beziers =
              "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                ? A(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    "thruBasic" === e.type,
                    e.correlate,
                    a
                  )
                : (function (t, e, i) {
                    var n,
                      r,
                      s,
                      o,
                      a,
                      l,
                      u,
                      c,
                      h,
                      f,
                      p,
                      d = {},
                      m = "cubic" === (e = e || "soft") ? 3 : 2,
                      _ = "soft" === e,
                      g = [];
                    if (
                      (_ && i && (t = [i].concat(t)),
                      null == t || t.length < m + 1)
                    )
                      throw "invalid Bezier data";
                    for (h in t[0]) g.push(h);
                    for (l = g.length; --l > -1; ) {
                      for (
                        d[(h = g[l])] = a = [], f = 0, c = t.length, u = 0;
                        u < c;
                        u++
                      )
                        (n =
                          null == i
                            ? t[u][h]
                            : "string" == typeof (p = t[u][h]) &&
                              "=" === p.charAt(1)
                            ? i[h] + Number(p.charAt(0) + p.substr(2))
                            : Number(p)),
                          _ &&
                            u > 1 &&
                            u < c - 1 &&
                            (a[f++] = (n + a[f - 2]) / 2),
                          (a[f++] = n);
                      for (c = f - m + 1, f = 0, u = 0; u < c; u += m)
                        (n = a[u]),
                          (r = a[u + 1]),
                          (s = a[u + 2]),
                          (o = 2 === m ? 0 : a[u + 3]),
                          (a[f++] = p =
                            3 === m
                              ? new P(n, r, s, o)
                              : new P(n, (2 * r + n) / 3, (2 * r + s) / 3, s));
                      a.length = f;
                    }
                    return d;
                  })(l, e.type, u)),
            (this._segCount = this._beziers[n].length),
            this._timeRes)
          ) {
            var f = (function (t, e) {
              var i,
                n,
                r,
                s,
                o = [],
                a = [],
                l = 0,
                u = 0,
                c = (e = e >> 0 || 6) - 1,
                h = [],
                f = [];
              for (i in t) E(t[i], o, e);
              for (r = o.length, n = 0; n < r; n++)
                (l += Math.sqrt(o[n])),
                  (f[(s = n % e)] = l),
                  s === c &&
                    ((u += l),
                    (h[(s = (n / e) >> 0)] = f),
                    (a[s] = u),
                    (l = 0),
                    (f = []));
              return { length: u, lengths: a, segments: h };
            })(this._beziers, this._timeRes);
            (this._length = f.length),
              (this._lengths = f.lengths),
              (this._segments = f.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length);
          }
          if ((h = this._autoRotate))
            for (
              this._initialRotations = [],
                h[0] instanceof Array || (this._autoRotate = h = [h]),
                s = h.length;
              --s > -1;

            ) {
              for (o = 0; o < 3; o++)
                (n = h[s][o]),
                  (this._func[n] =
                    "function" == typeof t[n] &&
                    t[
                      n.indexOf("set") ||
                      "function" != typeof t["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]);
              (n = h[s][2]),
                (this._initialRotations[s] =
                  (this._func[n]
                    ? this._func[n].call(this._target)
                    : this._target[n]) || 0),
                this._overwriteProps.push(n);
            }
          return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
        },
        set: function (t) {
          var e,
            i,
            n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            h = this._segCount,
            f = this._func,
            p = this._target,
            d = t !== this._startRatio;
          if (this._timeRes) {
            if (
              ((u = this._lengths),
              (c = this._curSeg),
              (t *= this._length),
              (n = this._li),
              t > this._l2 && n < h - 1)
            ) {
              for (l = h - 1; n < l && (this._l2 = u[++n]) <= t; );
              (this._l1 = u[n - 1]),
                (this._li = n),
                (this._curSeg = c = this._segments[n]),
                (this._s2 = c[(this._s1 = this._si = 0)]);
            } else if (t < this._l1 && n > 0) {
              for (; n > 0 && (this._l1 = u[--n]) >= t; );
              0 === n && t < this._l1 ? (this._l1 = 0) : n++,
                (this._l2 = u[n]),
                (this._li = n),
                (this._curSeg = c = this._segments[n]),
                (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
                (this._s2 = c[this._si]);
            }
            if (
              ((e = n),
              (t -= this._l1),
              (n = this._si),
              t > this._s2 && n < c.length - 1)
            ) {
              for (l = c.length - 1; n < l && (this._s2 = c[++n]) <= t; );
              (this._s1 = c[n - 1]), (this._si = n);
            } else if (t < this._s1 && n > 0) {
              for (; n > 0 && (this._s1 = c[--n]) >= t; );
              0 === n && t < this._s1 ? (this._s1 = 0) : n++,
                (this._s2 = c[n]),
                (this._si = n);
            }
            o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
          } else
            o =
              (t - (e = t < 0 ? 0 : t >= 1 ? h - 1 : (h * t) >> 0) * (1 / h)) *
              h;
          for (i = 1 - o, n = this._props.length; --n > -1; )
            (r = this._props[n]),
              (a =
                (o * o * (s = this._beziers[r][e]).da +
                  3 * i * (o * s.ca + i * s.ba)) *
                  o +
                s.a),
              this._mod[r] && (a = this._mod[r](a, p)),
              f[r] ? p[r](a) : (p[r] = a);
          if (this._autoRotate) {
            var m,
              _,
              g,
              v,
              b,
              x,
              w,
              T = this._autoRotate;
            for (n = T.length; --n > -1; )
              (r = T[n][2]),
                (x = T[n][3] || 0),
                (w = !0 === T[n][4] ? 1 : y),
                (s = this._beziers[T[n][0]]),
                (m = this._beziers[T[n][1]]),
                s &&
                  m &&
                  ((s = s[e]),
                  (m = m[e]),
                  (_ = s.a + (s.b - s.a) * o),
                  (_ += ((v = s.b + (s.c - s.b) * o) - _) * o),
                  (v += (s.c + (s.d - s.c) * o - v) * o),
                  (g = m.a + (m.b - m.a) * o),
                  (g += ((b = m.b + (m.c - m.b) * o) - g) * o),
                  (b += (m.c + (m.d - m.c) * o - b) * o),
                  (a = d
                    ? Math.atan2(b - g, v - _) * w + x
                    : this._initialRotations[n]),
                  this._mod[r] && (a = this._mod[r](a, p)),
                  f[r] ? p[r](a) : (p[r] = a));
          }
        },
      }),
      R = D.prototype;
    (D.bezierThrough = A),
      (D.cubicToQuadratic = C),
      (D._autoCSS = !0),
      (D.quadraticToCubic = function (t, e, i) {
        return new P(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
      }),
      (D._cssRegister = function () {
        var t = k.CSSPlugin;
        if (t) {
          var e = t._internals,
            i = e._parseToProxy,
            n = e._setPluginRatio,
            r = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function (t, e, s, o, a, l) {
              e instanceof Array && (e = { values: e }), (l = new D());
              var u,
                c,
                h,
                f = e.values,
                p = f.length - 1,
                d = [],
                m = {};
              if (p < 0) return a;
              for (u = 0; u <= p; u++)
                (h = i(t, f[u], o, a, l, p !== u)), (d[u] = h.end);
              for (c in e) m[c] = e[c];
              return (
                (m.values = d),
                ((a = new r(t, "bezier", 0, 0, h.pt, 2)).data = h),
                (a.plugin = l),
                (a.setRatio = n),
                0 === m.autoRotate && (m.autoRotate = !0),
                !m.autoRotate ||
                  m.autoRotate instanceof Array ||
                  ((u = !0 === m.autoRotate ? 0 : Number(m.autoRotate)),
                  (m.autoRotate =
                    null != h.end.left
                      ? [["left", "top", "rotation", u, !1]]
                      : null != h.end.x && [["x", "y", "rotation", u, !1]])),
                m.autoRotate &&
                  (o._transform || o._enableTransforms(!1),
                  (h.autoRotate = o._target._gsTransform),
                  (h.proxy.rotation = h.autoRotate.rotation || 0),
                  o._overwriteProps.push("rotation")),
                l._onInitTween(h.proxy, m, o._tween),
                a
              );
            },
          });
        }
      }),
      (R._mod = function (t) {
        for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
          (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
      }),
      (R._kill = function (t) {
        var e,
          i,
          n = this._props;
        for (e in this._beziers)
          if (e in t)
            for (
              delete this._beziers[e], delete this._func[e], i = n.length;
              --i > -1;

            )
              n[i] === e && n.splice(i, 1);
        if ((n = this._autoRotate))
          for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, t);
      }),
      /*!
       * VERSION: 1.16.1
       * DATE: 2018-08-27
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       **/
      l.e._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function () {
          var t,
            e,
            i,
            n,
            r = l.e.GreenSockGlobals || l.e,
            s = r.com.greensock,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            u = s._class,
            c = function (t, e) {
              var i = u("easing." + t, function () {}, !0),
                n = (i.prototype = new l.b());
              return (n.constructor = i), (n.getRatio = e), i;
            },
            h = l.b.register || function () {},
            f = function (t, e, i, n, r) {
              var s = u(
                "easing." + t,
                { easeOut: new e(), easeIn: new i(), easeInOut: new n() },
                !0
              );
              return h(s, t), s;
            },
            p = function (t, e, i) {
              (this.t = t),
                (this.v = e),
                i &&
                  ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - e),
                  (this.gap = i.t - t));
            },
            d = function (t, e) {
              var i = u(
                  "easing." + t,
                  function (t) {
                    (this._p1 = t || 0 === t ? t : 1.70158),
                      (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                n = (i.prototype = new l.b());
              return (
                (n.constructor = i),
                (n.getRatio = e),
                (n.config = function (t) {
                  return new i(t);
                }),
                i
              );
            },
            m = f(
              "Back",
              d("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
              }),
              d("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1);
              }),
              d("BackInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
              })
            ),
            _ = u(
              "easing.SlowMo",
              function (t, e, i) {
                (e = e || 0 === e ? e : 0.7),
                  null == t ? (t = 0.7) : t > 1 && (t = 1),
                  (this._p = 1 !== t ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === i);
              },
              !0
            ),
            g = (_.prototype = new l.b());
          return (
            (g.constructor = _),
            (g.getRatio = function (t) {
              var e = t + (0.5 - t) * this._p;
              return t < this._p1
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 === t
                    ? 0
                    : 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e;
            }),
            (_.ease = new _(0.7, 0.7)),
            (g.config = _.config =
              function (t, e, i) {
                return new _(t, e, i);
              }),
            ((g = (t = u(
              "easing.SteppedEase",
              function (t, e) {
                (t = t || 1),
                  (this._p1 = 1 / t),
                  (this._p2 = t + (e ? 0 : 1)),
                  (this._p3 = e ? 1 : 0);
              },
              !0
            )).prototype =
              new l.b()).constructor = t),
            (g.getRatio = function (t) {
              return (
                t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
                (((this._p2 * t) | 0) + this._p3) * this._p1
              );
            }),
            (g.config = t.config =
              function (e, i) {
                return new t(e, i);
              }),
            ((g = (e = u(
              "easing.ExpoScaleEase",
              function (t, e, i) {
                (this._p1 = Math.log(e / t)),
                  (this._p2 = e - t),
                  (this._p3 = t),
                  (this._ease = i);
              },
              !0
            )).prototype =
              new l.b()).constructor = e),
            (g.getRatio = function (t) {
              return (
                this._ease && (t = this._ease.getRatio(t)),
                (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
              );
            }),
            (g.config = e.config =
              function (t, i, n) {
                return new e(t, i, n);
              }),
            ((g = (i = u(
              "easing.RoughEase",
              function (t) {
                for (
                  var e,
                    i,
                    n,
                    r,
                    s,
                    o,
                    a = (t = t || {}).taper || "none",
                    u = [],
                    c = 0,
                    h = 0 | (t.points || 20),
                    f = h,
                    d = !1 !== t.randomize,
                    m = !0 === t.clamp,
                    _ = t.template instanceof l.b ? t.template : null,
                    g = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                  --f > -1;

                )
                  (e = d ? Math.random() : (1 / h) * f),
                    (i = _ ? _.getRatio(e) : e),
                    (n =
                      "none" === a
                        ? g
                        : "out" === a
                        ? (r = 1 - e) * r * g
                        : "in" === a
                        ? e * e * g
                        : e < 0.5
                        ? (r = 2 * e) * r * 0.5 * g
                        : (r = 2 * (1 - e)) * r * 0.5 * g),
                    d
                      ? (i += Math.random() * n - 0.5 * n)
                      : f % 2
                      ? (i += 0.5 * n)
                      : (i -= 0.5 * n),
                    m && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
                    (u[c++] = { x: e, y: i });
                for (
                  u.sort(function (t, e) {
                    return t.x - e.x;
                  }),
                    o = new p(1, 1, null),
                    f = h;
                  --f > -1;

                )
                  (s = u[f]), (o = new p(s.x, s.y, o));
                this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
              },
              !0
            )).prototype =
              new l.b()).constructor = i),
            (g.getRatio = function (t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && t <= e.t; ) e = e.prev;
              return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
            }),
            (g.config = function (t) {
              return new i(t);
            }),
            (i.ease = new i()),
            f(
              "Bounce",
              c("BounceOut", function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              }),
              c("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75
                  ? 1 - 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
              }),
              c("BounceInOut", function (t) {
                var e = t < 0.5;
                return (
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? (t *= 7.5625 * t)
                    : (t =
                        t < 2 / 2.75
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : t < 2.5 / 2.75
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                );
              })
            ),
            f(
              "Circ",
              c("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t);
              }),
              c("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
              }),
              c("CircInOut", function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              })
            ),
            f(
              "Elastic",
              (n = function (t, e, i) {
                var n = u(
                    "easing." + t,
                    function (t, e) {
                      (this._p1 = t >= 1 ? t : 1),
                        (this._p2 = (e || i) / (t < 1 ? t : 1)),
                        (this._p3 =
                          (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                        (this._p2 = o / this._p2);
                    },
                    !0
                  ),
                  r = (n.prototype = new l.b());
                return (
                  (r.constructor = n),
                  (r.getRatio = e),
                  (r.config = function (t, e) {
                    return new n(t, e);
                  }),
                  n
                );
              })(
                "ElasticOut",
                function (t) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin((t - this._p3) * this._p2) +
                    1
                  );
                },
                0.3
              ),
              n(
                "ElasticIn",
                function (t) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t - this._p3) * this._p2)
                  );
                },
                0.3
              ),
              n(
                "ElasticInOut",
                function (t) {
                  return (t *= 2) < 1
                    ? this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        -0.5
                    : this._p1 *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        0.5 +
                        1;
                },
                0.45
              )
            ),
            f(
              "Expo",
              c("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t);
              }),
              c("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001;
              }),
              c("ExpoInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              })
            ),
            f(
              "Sine",
              c("SineOut", function (t) {
                return Math.sin(t * a);
              }),
              c("SineIn", function (t) {
                return 1 - Math.cos(t * a);
              }),
              c("SineInOut", function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              })
            ),
            u(
              "easing.EaseLookup",
              {
                find: function (t) {
                  return l.b.map[t];
                },
              },
              !0
            ),
            h(r.SlowMo, "SlowMo", "ease,"),
            h(i, "RoughEase", "ease,"),
            h(t, "SteppedEase", "ease,"),
            m
          );
        },
        !0
      );
    var M = l.g.Back,
      j = l.g.Elastic,
      L = l.g.Bounce,
      N = l.g.RoughEase,
      I = l.g.SlowMo,
      F = l.g.SteppedEase,
      q = l.g.Circ,
      z = l.g.Expo,
      B = l.g.Sine,
      H = l.g.ExpoScaleEase,
      X = h;
    X._autoActivated = [u, c, f, p, D, d, v, M, j, L, N, I, F, q, z, B, H];
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    (X.defaultEase = Cubic.easeOut),
      o()(".header__logo--name").on("click", function () {
        a.$htmlBody.animate({ scrollTop: 0 }, 1e3);
      }),
      (function () {
        function t() {
          (this.$artworkImg = o()(
            ".homepage__workGrid-img-container .img-only"
          )),
            (this.viewerOpenBool = !1),
            this.init();
        }
        (t.prototype.init = function () {
          this.open();
        }),
          (t.prototype.build = function (t) {
            (this.$viewer = o()(
              '<div class="c-picture-viewer"></div>'
            ).appendTo(a.$body)),
              (this.$inner = o()(
                '<div class="c-picture-viewer_inner"></div>'
              ).appendTo(this.$viewer)),
              (this.$imgClone = o()(
                '<img class="c-picture-viewer_image" src="' + t + '" />'
              ).appendTo(this.$inner)),
              (this.$viewerClose = o()(
                ' <div class="c-picture-viewer__close-btn"> \t\t\t\t<span></span> \t\t\t\t<span></span> \t\t\t\t</div>'
              ).appendTo(this.$viewer));
          }),
          (t.prototype.transitions = function (t, e) {
            var i = this;
            return new TimelineMax({
              tweens: t,
              paused: !0,
              stagger: 0.3,
              align: "start",
              onComplete: function () {
                e && i.$viewer.remove();
              },
            });
          }),
          (t.prototype.open = function () {
            var t = this;
            t.$artworkImg.each(function () {
              var e = o()(this),
                i = e.attr("src");
              e.on("click", function () {
                t.build(i),
                  t
                    .transitions(
                      [
                        X.to(t.$viewer, 0.7, { className: "+=open" }),
                        X.to(a.$htmlBody, 0.7, {
                          css: { className: "+=disable-scroll" },
                        }),
                      ],
                      !1
                    )
                    .play(),
                  (t.viewerOpenBool = !0),
                  t.close();
              });
            });
          }),
          (t.prototype.close = function () {
            if (this.viewerOpenBool) {
              var t = this;
              o()(".c-picture-viewer__close-btn").on("click", function () {
                (this.viewerOpenBool = !1),
                  t
                    .transitions(
                      [
                        X.to(t.$viewer, 0.7, { className: "-=open" }),
                        X.to(a.$htmlBody, 0.7, {
                          className: "-=disable-scroll",
                        }),
                      ],
                      !0
                    )
                    .play();
              });
            }
          }),
          new t();
      })();
    function $(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var W = (function () {
      function t(e) {
        var i = e.triggerEl,
          n = e.containerEl;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.triggerEl = i),
          (this.containerEl = n),
          (this.isOpen = !1),
          (this.menuTrigger = o()("#" + this.triggerEl)),
          (this.menuContainer = o()("#" + this.containerEl)),
          this.init();
      }
      return (
        (function (t, e, i) {
          e && $(t.prototype, e), i && $(t, i);
        })(t, [
          {
            key: "init",
            value: function () {
              this.bindMethods(), this.addEvents();
            },
          },
          {
            key: "bindMethods",
            value: function () {
              this.toggleMenuEvent = this.toggleMenuEvent.bind(this);
            },
          },
          {
            key: "addEvents",
            value: function () {
              this.menuTrigger.on("click", this.toggleMenuEvent);
            },
          },
          {
            key: "menuOpen",
            value: function () {
              this.isOpen = !0;
            },
          },
          {
            key: "menuClose",
            value: function () {
              (this.isOpen = !this.isOpen),
                this.menuContainer.animate({ scrollTop: 0 }, 1e3);
            },
          },
          {
            key: "toggleMenuEvent",
            value: function (t) {
              t.preventDefault(),
                (void 0 === t ? this.isOpen : o()(t.currentTarget)).attr(
                  "id"
                ) == this.triggerEl &&
                  (this.isOpen ? this.menuClose() : this.menuOpen());
            },
          },
        ]),
        t
      );
    })();
    function Y(t) {
      return (Y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function U(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function V(t, e) {
      return !e || ("object" !== Y(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function G(t, e, i) {
      return (G =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, i) {
              var n = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Z(t));

                );
                return t;
              })(t, e);
              if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(i) : r.value;
              }
            })(t, e, i || t);
    }
    function Z(t) {
      return (Z = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function Q(t, e) {
      return (Q =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var J = (function (t) {
      function e() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          V(this, Z(e).apply(this, arguments))
        );
      }
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Q(t, e);
        })(e, W),
        (function (t, e, i) {
          e && U(t.prototype, e), i && U(t, i);
        })(e, [
          {
            key: "init",
            value: function () {
              G(Z(e.prototype), "init", this).apply(this, arguments);
              var t = [
                X.to(this.menuContainer, 1.5, {
                  css: { y: 0, autoAlpha: 1 },
                  ease: Power4.easeInOut,
                }),
                X.to(o()(".header__logo"), 0.4, { opacity: 0 }),
                new c({
                  tweens: [
                    X.to(this.menuTrigger.find(".tline"), 0.4, {
                      rotation: -45,
                      y: 0,
                      top: "50%",
                    }),
                    X.to(this.menuTrigger.find(".mline"), 0.3, {
                      width: 0,
                      opacity: 0,
                    }),
                    X.to(this.menuTrigger.find(".bline"), 0.4, {
                      rotation: 45,
                      y: 0,
                      top: "50%",
                    }),
                    X.set(this.menuTrigger.find("span"), { rotation: 0 }),
                  ],
                }),
                X.to(a.$htmlBody, 0.7, {
                  css: { className: "+=disable-scroll" },
                }),
              ];
              this.menuTimeline = new c({
                tweens: t,
                paused: !0,
                stagger: 0.3,
                align: "start",
              });
            },
          },
          {
            key: "menuOpen",
            value: function () {
              G(Z(e.prototype), "menuOpen", this).apply(this, arguments),
                this.menuTimeline.play();
            },
          },
          {
            key: "menuClose",
            value: function () {
              G(Z(e.prototype), "menuClose", this).apply(this, arguments),
                this.menuTimeline.reverse();
            },
          },
        ]),
        e
      );
    })();
    var K =
      /*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
      function (t) {
        return "object" == typeof window.Node
          ? t instanceof window.Node
          : null !== t &&
              "object" == typeof t &&
              "number" == typeof t.nodeType &&
              "string" == typeof t.nodeName;
      };
    /*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var tt = function (t) {
      var e = Object.prototype.toString.call(t);
      return "object" == typeof window.NodeList
        ? t instanceof window.NodeList
        : null !== t &&
            "object" == typeof t &&
            "number" == typeof t.length &&
            /^\[object (HTMLCollection|NodeList|Object)\]$/.test(e) &&
            (0 === t.length || K(t[0]));
    };
    /*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var et = function (t, e) {
      if ((void 0 === e && (e = document), t instanceof Array))
        return t.filter(K);
      if (K(t)) return [t];
      if (tt(t)) return Array.prototype.slice.call(t);
      if ("string" == typeof t)
        try {
          var i = e.querySelectorAll(t);
          return Array.prototype.slice.call(i);
        } catch (t) {
          return [];
        }
      return [];
    };
    /*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/ function it(t) {
      if (t.constructor !== Array) throw new TypeError("Expected array.");
      if (16 === t.length) return t;
      if (6 === t.length) {
        var e = nt();
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[4] = t[2]),
          (e[5] = t[3]),
          (e[12] = t[4]),
          (e[13] = t[5]),
          e
        );
      }
      throw new RangeError("Expected array with either 6 or 16 values.");
    }
    function nt() {
      for (var t = [], e = 0; e < 16; e++) e % 5 == 0 ? t.push(1) : t.push(0);
      return t;
    }
    function rt(t, e) {
      for (var i = it(t), n = it(e), r = [], s = 0; s < 4; s++)
        for (var o = [i[s], i[s + 4], i[s + 8], i[s + 12]], a = 0; a < 4; a++) {
          var l = 4 * a,
            u = [n[l], n[l + 1], n[l + 2], n[l + 3]],
            c = o[0] * u[0] + o[1] * u[1] + o[2] * u[2] + o[3] * u[3];
          r[s + l] = c;
        }
      return r;
    }
    function st(t) {
      var e = (Math.PI / 180) * t,
        i = nt();
      return (
        (i[0] = i[5] = Math.cos(e)),
        (i[1] = i[4] = Math.sin(e)),
        (i[4] *= -1),
        i
      );
    }
    function ot(t, e) {
      var i = nt();
      return (i[0] = t), (i[5] = "number" == typeof e ? e : t), i;
    }
    /*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
    var at = (function () {
        var t = Date.now();
        return function (e) {
          var i = Date.now();
          i - t > 16
            ? ((t = i), e(i))
            : setTimeout(function () {
                return at(e);
              }, 0);
        };
      })(),
      lt =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        at,
      ut = {
        delay: 0,
        distance: "0",
        duration: 600,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        interval: 0,
        opacity: 0,
        origin: "bottom",
        rotate: { x: 0, y: 0, z: 0 },
        scale: 1,
        cleanup: !1,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: 0,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        afterReset: function () {},
        afterReveal: function () {},
        beforeReset: function () {},
        beforeReveal: function () {},
      };
    var ct = {
      success: function () {
        document.documentElement.classList.add("sr"),
          document.body
            ? (document.body.style.height = "100%")
            : document.addEventListener("DOMContentLoaded", function () {
                document.body.style.height = "100%";
              });
      },
      failure: function () {
        return (
          document.documentElement.classList.remove("sr"),
          {
            clean: function () {},
            destroy: function () {},
            reveal: function () {},
            sync: function () {},
            get noop() {
              return !0;
            },
          }
        );
      },
    };
    function ht(t) {
      return (
        null !== t &&
        t instanceof Object &&
        (t.constructor === Object ||
          "[object Object]" === Object.prototype.toString.call(t))
      );
    }
    function ft(t, e) {
      if (ht(t))
        return Object.keys(t).forEach(function (i) {
          return e(t[i], i, t);
        });
      if (t instanceof Array)
        return t.forEach(function (i, n) {
          return e(i, n, t);
        });
      throw new TypeError("Expected either an array or object literal.");
    }
    function pt(t) {
      for (var e = [], i = arguments.length - 1; i-- > 0; )
        e[i] = arguments[i + 1];
      if (this.constructor.debug && console) {
        var n = "%cScrollReveal: " + t;
        e.forEach(function (t) {
          return (n += "\n — " + t);
        }),
          console.log(n, "color: #ea654b;");
      }
    }
    function dt() {
      var t = this,
        e = { active: [], stale: [] },
        i = { active: [], stale: [] },
        n = { active: [], stale: [] };
      try {
        ft(et("[data-sr-id]"), function (t) {
          var i = parseInt(t.getAttribute("data-sr-id"));
          e.active.push(i);
        });
      } catch (t) {
        throw t;
      }
      ft(this.store.elements, function (t) {
        -1 === e.active.indexOf(t.id) && e.stale.push(t.id);
      }),
        ft(e.stale, function (e) {
          return delete t.store.elements[e];
        }),
        ft(this.store.elements, function (t) {
          -1 === n.active.indexOf(t.containerId) &&
            n.active.push(t.containerId),
            t.hasOwnProperty("sequence") &&
              -1 === i.active.indexOf(t.sequence.id) &&
              i.active.push(t.sequence.id);
        }),
        ft(this.store.containers, function (t) {
          -1 === n.active.indexOf(t.id) && n.stale.push(t.id);
        }),
        ft(n.stale, function (e) {
          var i = t.store.containers[e].node;
          i.removeEventListener("scroll", t.delegate),
            i.removeEventListener("resize", t.delegate),
            delete t.store.containers[e];
        }),
        ft(this.store.sequences, function (t) {
          -1 === i.active.indexOf(t.id) && i.stale.push(t.id);
        }),
        ft(i.stale, function (e) {
          return delete t.store.sequences[e];
        });
    }
    function mt(t) {
      var e,
        i = this;
      try {
        ft(et(t), function (t) {
          var n = t.getAttribute("data-sr-id");
          if (null !== n) {
            e = !0;
            var r = i.store.elements[n];
            r.callbackTimer && window.clearTimeout(r.callbackTimer.clock),
              t.setAttribute("style", r.styles.inline.generated),
              t.removeAttribute("data-sr-id"),
              delete i.store.elements[n];
          }
        });
      } catch (t) {
        return pt.call(this, "Clean failed.", t.message);
      }
      if (e)
        try {
          dt.call(this);
        } catch (t) {
          return pt.call(this, "Clean failed.", t.message);
        }
    }
    var _t = (function () {
      var t = {},
        e = document.documentElement.style;
      function i(i, n) {
        if ((void 0 === n && (n = e), i && "string" == typeof i)) {
          if (t[i]) return t[i];
          if ("string" == typeof n[i]) return (t[i] = i);
          if ("string" == typeof n["-webkit-" + i])
            return (t[i] = "-webkit-" + i);
          throw new RangeError('Unable to find "' + i + '" style property.');
        }
        throw new TypeError("Expected a string.");
      }
      return (
        (i.clearCache = function () {
          return (t = {});
        }),
        i
      );
    })();
    function gt(t) {
      var e = window.getComputedStyle(t.node),
        i = e.position,
        n = t.config,
        r = {},
        s =
          (t.node.getAttribute("style") || "").match(
            /[\w-]+\s*:\s*[^;]+\s*/gi
          ) || [];
      (r.computed = s
        ? s
            .map(function (t) {
              return t.trim();
            })
            .join("; ") + ";"
        : ""),
        (r.generated = s.some(function (t) {
          return t.match(/visibility\s?:\s?visible/i);
        })
          ? r.computed
          : s
              .concat(["visibility: visible"])
              .map(function (t) {
                return t.trim();
              })
              .join("; ") + ";");
      var o = parseFloat(e.opacity),
        a = isNaN(parseFloat(n.opacity))
          ? parseFloat(e.opacity)
          : parseFloat(n.opacity),
        l = {
          computed: o !== a ? "opacity: " + o + ";" : "",
          generated: o !== a ? "opacity: " + a + ";" : "",
        },
        u = [];
      if (parseFloat(n.distance)) {
        var c = "top" === n.origin || "bottom" === n.origin ? "Y" : "X",
          h = n.distance;
        ("top" !== n.origin && "left" !== n.origin) ||
          (h = /^-/.test(h) ? h.substr(1) : "-" + h);
        var f = h.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
          p = f[0];
        switch (f[1]) {
          case "em":
            h = parseInt(e.fontSize) * p;
            break;
          case "px":
            h = p;
            break;
          case "%":
            h =
              "Y" === c
                ? (t.node.getBoundingClientRect().height * p) / 100
                : (t.node.getBoundingClientRect().width * p) / 100;
            break;
          default:
            throw new RangeError("Unrecognized or missing distance unit.");
        }
        "Y" === c
          ? u.push(
              (function (t) {
                var e = nt();
                return (e[13] = t), e;
              })(h)
            )
          : u.push(
              (function (t) {
                var e = nt();
                return (e[12] = t), e;
              })(h)
            );
      }
      n.rotate.x &&
        u.push(
          (function (t) {
            var e = (Math.PI / 180) * t,
              i = nt();
            return (
              (i[5] = i[10] = Math.cos(e)),
              (i[6] = i[9] = Math.sin(e)),
              (i[9] *= -1),
              i
            );
          })(n.rotate.x)
        ),
        n.rotate.y &&
          u.push(
            (function (t) {
              var e = (Math.PI / 180) * t,
                i = nt();
              return (
                (i[0] = i[10] = Math.cos(e)),
                (i[2] = i[8] = Math.sin(e)),
                (i[2] *= -1),
                i
              );
            })(n.rotate.y)
          ),
        n.rotate.z && u.push(st(n.rotate.z)),
        1 !== n.scale &&
          (0 === n.scale ? u.push(ot(2e-4)) : u.push(ot(n.scale)));
      var d = {};
      if (u.length) {
        (d.property = _t("transform")),
          (d.computed = {
            raw: e[d.property],
            matrix: (function (t) {
              if ("string" == typeof t) {
                var e = t.match(/matrix(3d)?\(([^)]+)\)/);
                if (e) return it(e[2].split(", ").map(parseFloat));
              }
              return nt();
            })(e[d.property]),
          }),
          u.unshift(d.computed.matrix);
        var m = u.reduce(rt);
        d.generated = {
          initial: d.property + ": matrix3d(" + m.join(", ") + ");",
          final:
            d.property + ": matrix3d(" + d.computed.matrix.join(", ") + ");",
        };
      } else d.generated = { initial: "", final: "" };
      var _ = {};
      if (l.generated || d.generated.initial) {
        (_.property = _t("transition")),
          (_.computed = e[_.property]),
          (_.fragments = []);
        var g = n.delay,
          v = n.duration,
          y = n.easing;
        l.generated &&
          _.fragments.push({
            delayed: "opacity " + v / 1e3 + "s " + y + " " + g / 1e3 + "s",
            instant: "opacity " + v / 1e3 + "s " + y + " 0s",
          }),
          d.generated.initial &&
            _.fragments.push({
              delayed:
                d.property + " " + v / 1e3 + "s " + y + " " + g / 1e3 + "s",
              instant: d.property + " " + v / 1e3 + "s " + y + " 0s",
            }),
          _.computed &&
            !_.computed.match(/all 0s/) &&
            _.fragments.unshift({ delayed: _.computed, instant: _.computed });
        var b = _.fragments.reduce(
          function (t, e, i) {
            return (
              (t.delayed += 0 === i ? e.delayed : ", " + e.delayed),
              (t.instant += 0 === i ? e.instant : ", " + e.instant),
              t
            );
          },
          { delayed: "", instant: "" }
        );
        _.generated = {
          delayed: _.property + ": " + b.delayed + ";",
          instant: _.property + ": " + b.instant + ";",
        };
      } else _.generated = { delayed: "", instant: "" };
      return {
        inline: r,
        opacity: l,
        position: i,
        transform: d,
        transition: _,
      };
    }
    function vt(t, e) {
      void 0 === e && (e = {});
      var i = e.pristine || this.pristine,
        n =
          "always" === t.config.useDelay ||
          ("onload" === t.config.useDelay && i) ||
          ("once" === t.config.useDelay && !t.seen),
        r = t.visible && !t.revealed,
        s = !t.visible && t.revealed && t.config.reset;
      return e.reveal || r
        ? function (t, e) {
            var i = [
              t.styles.inline.generated,
              t.styles.opacity.computed,
              t.styles.transform.generated.final,
            ];
            e
              ? i.push(t.styles.transition.generated.delayed)
              : i.push(t.styles.transition.generated.instant);
            (t.revealed = t.seen = !0),
              t.node.setAttribute(
                "style",
                i
                  .filter(function (t) {
                    return "" !== t;
                  })
                  .join(" ")
              ),
              yt.call(this, t, e);
          }.call(this, t, n)
        : e.reset || s
        ? function (t) {
            var e = [
              t.styles.inline.generated,
              t.styles.opacity.generated,
              t.styles.transform.generated.initial,
              t.styles.transition.generated.instant,
            ];
            (t.revealed = !1),
              t.node.setAttribute(
                "style",
                e
                  .filter(function (t) {
                    return "" !== t;
                  })
                  .join(" ")
              ),
              yt.call(this, t);
          }.call(this, t)
        : void 0;
    }
    function yt(t, e) {
      var i = this,
        n = e ? t.config.duration + t.config.delay : t.config.duration,
        r = t.revealed ? t.config.beforeReveal : t.config.beforeReset,
        s = t.revealed ? t.config.afterReveal : t.config.afterReset,
        o = 0;
      t.callbackTimer &&
        ((o = Date.now() - t.callbackTimer.start),
        window.clearTimeout(t.callbackTimer.clock)),
        r(t.node),
        (t.callbackTimer = {
          start: Date.now(),
          clock: window.setTimeout(function () {
            s(t.node),
              (t.callbackTimer = null),
              t.revealed &&
                !t.config.reset &&
                t.config.cleanup &&
                mt.call(i, t.node);
          }, n - o),
        });
    }
    var bt = (function () {
      var t = 0;
      return function () {
        return t++;
      };
    })();
    function xt(t, e) {
      if (
        (void 0 === e && (e = this.pristine),
        !t.visible && t.revealed && t.config.reset)
      )
        return vt.call(this, t, { reset: !0 });
      var i = this.store.sequences[t.sequence.id],
        n = t.sequence.index;
      if (i) {
        var r = new wt(i, "visible", this.store),
          s = new wt(i, "revealed", this.store);
        if (((i.models = { visible: r, revealed: s }), !s.body.length)) {
          var o = i.members[r.body[0]],
            a = this.store.elements[o];
          if (a)
            return (
              Tt.call(this, i, r.body[0], -1, e),
              Tt.call(this, i, r.body[0], 1, e),
              vt.call(this, a, { reveal: !0, pristine: e })
            );
        }
        if (
          !i.blocked.head &&
          n === [].concat(s.head).pop() &&
          n >= [].concat(r.body).shift()
        )
          return (
            Tt.call(this, i, n, -1, e),
            vt.call(this, t, { reveal: !0, pristine: e })
          );
        if (
          !i.blocked.foot &&
          n === [].concat(s.foot).shift() &&
          n <= [].concat(r.body).pop()
        )
          return (
            Tt.call(this, i, n, 1, e),
            vt.call(this, t, { reveal: !0, pristine: e })
          );
      }
    }
    function wt(t, e, i) {
      var n = this;
      (this.head = []),
        (this.body = []),
        (this.foot = []),
        ft(t.members, function (t, r) {
          var s = i.elements[t];
          s && s[e] && n.body.push(r);
        }),
        this.body.length &&
          ft(t.members, function (t, r) {
            var s = i.elements[t];
            s && !s[e] && (r < n.body[0] ? n.head.push(r) : n.foot.push(r));
          });
    }
    function Tt(t, e, i, n) {
      var r = this,
        s = ["head", null, "foot"][1 + i],
        o = t.members[e + i],
        a = this.store.elements[o];
      (t.blocked[s] = !0),
        setTimeout(function () {
          (t.blocked[s] = !1), a && xt.call(r, a, n);
        }, t.interval);
    }
    function kt() {
      var t = this;
      dt.call(this),
        ft(this.store.elements, function (t) {
          var e = [t.styles.inline.generated];
          t.visible
            ? (e.push(t.styles.opacity.computed),
              e.push(t.styles.transform.generated.final))
            : (e.push(t.styles.opacity.generated),
              e.push(t.styles.transform.generated.initial)),
            t.node.setAttribute(
              "style",
              e
                .filter(function (t) {
                  return "" !== t;
                })
                .join(" ")
            );
        }),
        ft(this.store.containers, function (e) {
          var i = e.node === document.documentElement ? window : e.node;
          i.addEventListener("scroll", t.delegate),
            i.addEventListener("resize", t.delegate);
        }),
        this.delegate(),
        (this.initTimeout = null);
    }
    function Pt(t) {
      return (
        void 0 === t && (t = navigator.userAgent),
        /Android|iPhone|iPad|iPod/i.test(t)
      );
    }
    function Ct(t) {
      for (var e = [], i = arguments.length - 1; i-- > 0; )
        e[i] = arguments[i + 1];
      if (ht(t))
        return (
          ft(e, function (e) {
            ft(e, function (e, i) {
              ht(e)
                ? ((t[i] && ht(t[i])) || (t[i] = {}), Ct(t[i], e))
                : (t[i] = e);
            });
          }),
          t
        );
      throw new TypeError("Target must be an object literal.");
    }
    function St(t, e, i) {
      var n = this;
      void 0 === e && (e = {}), void 0 === i && (i = !1);
      var r,
        s = [],
        o = e.interval || ut.interval;
      try {
        o &&
          (r = new (function (t) {
            var e = Math.abs(t);
            if (isNaN(e)) throw new RangeError("Invalid sequence interval.");
            (this.id = bt()),
              (this.interval = Math.max(e, 16)),
              (this.members = []),
              (this.models = {}),
              (this.blocked = { head: !1, foot: !1 });
          })(o));
        var a = et(t);
        if (!a.length) throw new Error("Invalid reveal target.");
        ft(
          a.reduce(function (t, i) {
            var o = {},
              a = i.getAttribute("data-sr-id");
            a
              ? (Ct(o, n.store.elements[a]),
                o.node.setAttribute("style", o.styles.inline.computed))
              : ((o.id = bt()),
                (o.node = i),
                (o.seen = !1),
                (o.revealed = !1),
                (o.visible = !1));
            var l = Ct({}, o.config || n.defaults, e);
            if ((!l.mobile && Pt()) || (!l.desktop && !Pt()))
              return a && mt.call(n, o), t;
            var u,
              c = et(l.container)[0];
            if (!c) throw new Error("Invalid container.");
            return c.contains(i)
              ? (null ===
                  (u = (function (t) {
                    var e = [],
                      i = arguments.length - 1;
                    for (; i-- > 0; ) e[i] = arguments[i + 1];
                    var n = null;
                    return (
                      ft(e, function (e) {
                        ft(e, function (e) {
                          null === n && e.node === t && (n = e.id);
                        });
                      }),
                      n
                    );
                  })(c, s, n.store.containers)) &&
                  ((u = bt()), s.push({ id: u, node: c })),
                (o.config = l),
                (o.containerId = u),
                (o.styles = gt(o)),
                r &&
                  ((o.sequence = { id: r.id, index: r.members.length }),
                  r.members.push(o.id)),
                t.push(o),
                t)
              : t;
          }, []),
          function (t) {
            (n.store.elements[t.id] = t),
              t.node.setAttribute("data-sr-id", t.id);
          }
        );
      } catch (t) {
        return pt.call(this, "Reveal failed.", t.message);
      }
      ft(s, function (t) {
        n.store.containers[t.id] = { id: t.id, node: t.node };
      }),
        r && (this.store.sequences[r.id] = r),
        !0 !== i &&
          (this.store.history.push({ target: t, options: e }),
          this.initTimeout && window.clearTimeout(this.initTimeout),
          (this.initTimeout = window.setTimeout(kt.bind(this), 0)));
    }
    var Ot =
      Math.sign ||
      function (t) {
        return (t > 0) - (t < 0) || +t;
      };
    function At(t, e) {
      var i = e ? t.node.clientHeight : t.node.offsetHeight,
        n = e ? t.node.clientWidth : t.node.offsetWidth,
        r = 0,
        s = 0,
        o = t.node;
      do {
        isNaN(o.offsetTop) || (r += o.offsetTop),
          isNaN(o.offsetLeft) || (s += o.offsetLeft),
          (o = o.offsetParent);
      } while (o);
      return {
        bounds: { top: r, right: s + n, bottom: r + i, left: s },
        height: i,
        width: n,
      };
    }
    function Et(t, e) {
      var i = this;
      void 0 === t && (t = { type: "init" }),
        void 0 === e && (e = this.store.elements),
        lt(function () {
          var n = "init" === t.type || "resize" === t.type;
          ft(i.store.containers, function (t) {
            n && (t.geometry = At.call(i, t, !0));
            var e = function (t) {
              var e, i;
              return (
                t.node === document.documentElement
                  ? ((e = window.pageYOffset), (i = window.pageXOffset))
                  : ((e = t.node.scrollTop), (i = t.node.scrollLeft)),
                { top: e, left: i }
              );
            }.call(i, t);
            t.scroll &&
              (t.direction = {
                x: Ot(e.left - t.scroll.left),
                y: Ot(e.top - t.scroll.top),
              }),
              (t.scroll = e);
          }),
            ft(e, function (t) {
              n && (t.geometry = At.call(i, t)),
                (t.visible = function (t) {
                  void 0 === t && (t = {});
                  var e = this.store.containers[t.containerId];
                  if (e) {
                    var i = Math.max(0, Math.min(1, t.config.viewFactor)),
                      n = t.config.viewOffset,
                      r = t.geometry.bounds.top + t.geometry.height * i,
                      s = t.geometry.bounds.right - t.geometry.width * i,
                      o = t.geometry.bounds.bottom - t.geometry.height * i,
                      a = t.geometry.bounds.left + t.geometry.width * i,
                      l = e.geometry.bounds.top + e.scroll.top + n.top,
                      u = e.geometry.bounds.right + e.scroll.left - n.right,
                      c = e.geometry.bounds.bottom + e.scroll.top - n.bottom,
                      h = e.geometry.bounds.left + e.scroll.left + n.left;
                    return (
                      (r < c && s > h && o > l && a < u) ||
                      "fixed" === t.styles.position
                    );
                  }
                }.call(i, t));
            }),
            ft(e, function (t) {
              t.sequence ? xt.call(i, t) : vt.call(i, t);
            }),
            (i.pristine = !1);
        });
    }
    var Dt,
      Rt,
      Mt,
      jt,
      Lt,
      Nt,
      It,
      Ft,
      qt = "4.0.4";
    function zt(t) {
      var e;
      if (
        (void 0 === t && (t = {}),
        void 0 === this || Object.getPrototypeOf(this) !== zt.prototype)
      )
        return new zt(t);
      if (!zt.isSupported())
        return (
          pt.call(
            this,
            "Instantiation failed.",
            "This browser is not supported."
          ),
          ct.failure()
        );
      try {
        e = Ct({}, Nt || ut, t);
      } catch (t) {
        return pt.call(this, "Invalid configuration.", t.message), ct.failure();
      }
      try {
        if (!et(e.container)[0]) throw new Error("Invalid container.");
      } catch (t) {
        return pt.call(this, t.message), ct.failure();
      }
      return (!(Nt = e).mobile && Pt()) || (!Nt.desktop && !Pt())
        ? (pt.call(
            this,
            "This device is disabled.",
            "desktop: " + Nt.desktop,
            "mobile: " + Nt.mobile
          ),
          ct.failure())
        : (ct.success(),
          (this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {},
          }),
          (this.pristine = !0),
          (Dt = Dt || Et.bind(this)),
          (Rt =
            Rt ||
            function () {
              var t = this;
              ft(this.store.elements, function (t) {
                t.node.setAttribute("style", t.styles.inline.generated),
                  t.node.removeAttribute("data-sr-id");
              }),
                ft(this.store.containers, function (e) {
                  var i = e.node === document.documentElement ? window : e.node;
                  i.removeEventListener("scroll", t.delegate),
                    i.removeEventListener("resize", t.delegate);
                }),
                (this.store = {
                  containers: {},
                  elements: {},
                  history: [],
                  sequences: {},
                });
            }.bind(this)),
          (Mt = Mt || St.bind(this)),
          (jt = jt || mt.bind(this)),
          (Lt =
            Lt ||
            function () {
              var t = this;
              ft(this.store.history, function (e) {
                St.call(t, e.target, e.options, !0);
              }),
                kt.call(this);
            }.bind(this)),
          Object.defineProperty(this, "delegate", {
            get: function () {
              return Dt;
            },
          }),
          Object.defineProperty(this, "destroy", {
            get: function () {
              return Rt;
            },
          }),
          Object.defineProperty(this, "reveal", {
            get: function () {
              return Mt;
            },
          }),
          Object.defineProperty(this, "clean", {
            get: function () {
              return jt;
            },
          }),
          Object.defineProperty(this, "sync", {
            get: function () {
              return Lt;
            },
          }),
          Object.defineProperty(this, "defaults", {
            get: function () {
              return Nt;
            },
          }),
          Object.defineProperty(this, "version", {
            get: function () {
              return qt;
            },
          }),
          Object.defineProperty(this, "noop", {
            get: function () {
              return !1;
            },
          }),
          Ft || (Ft = this));
    }
    (zt.isSupported = function () {
      return (
        (function () {
          var t = document.documentElement.style;
          return "transform" in t || "WebkitTransform" in t;
        })() &&
        (function () {
          var t = document.documentElement.style;
          return "transition" in t || "WebkitTransition" in t;
        })()
      );
    }),
      Object.defineProperty(zt, "debug", {
        get: function () {
          return It || !1;
        },
        set: function (t) {
          return (It = "boolean" == typeof t ? t : It);
        },
      }),
      zt();
    var Bt = zt;
    function Ht(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var Xt = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            this.init();
        }
        return (
          (function (t, e, i) {
            e && Ht(t.prototype, e), i && Ht(t, i);
          })(t, [
            {
              key: "init",
              value: function () {
                this.workSection();
              },
            },
            {
              key: "pageProgressBar",
              value: function () {
                var t,
                  e = o()("#page-progression"),
                  i = a.$window.scrollTop(0),
                  n = a.$window.height(),
                  r = a.$document.height();
                TweenMax.set(e, { width: i }),
                  a.$window.on("scroll", function () {
                    (n = a.$window.height()),
                      (r = a.$document.height()),
                      (i = o()(this).scrollTop()),
                      (t = (((100 / (r - n)) * i) << 0) + "%"),
                      TweenMax.to(e, 0.7, { width: t });
                  });
              },
            },
            {
              key: "workSection",
              value: function () {
                var t = Bt({
                  easing: "ease-out",
                  distance: "10%",
                  viewFactor: 0.25,
                });
                o()(".homepage__year").each(function () {
                  var e = o()(this)
                    .find(".homepage__workGrid-item")
                    .attr("class");
                  t.reveal("." + e);
                  var i = o()(".homepage__hero-wrapper");
                  t.reveal(i);
                });
              },
            },
          ]),
          t
        );
      })(),
      $t = i(3),
      Wt = i(4),
      Yt = i.n(Wt);
    function Ut(t) {
      return (Ut =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Vt(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Gt(t) {
      return (Gt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function Zt(t, e) {
      return (Zt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Qt(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    var Jt = new ((function (t) {
      function e() {
        var t;
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          ((t = (function (t, e) {
            return !e || ("object" !== Ut(e) && "function" != typeof e)
              ? Qt(t)
              : e;
          })(this, Gt(e).apply(this, arguments)))._device_size_meta_el =
            document.querySelector('meta[name="device-size"]')),
          (t._width = t._getWindowWidth()),
          (t._height = t._getWindowHeight()),
          (t._isMobile = t._testIsMobile()),
          (t._isIOS = t._testIsIOS()),
          (t._onResize = Yt()(t._onResize.bind(Qt(Qt(t))), 300)),
          window.addEventListener("resize", t._onResize),
          window.addEventListener("orientationchange", t._onResize),
          t
        );
      }
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Zt(t, e);
        })(e, $t["EventEmitter"]),
        (function (t, e, i) {
          e && Vt(t.prototype, e), i && Vt(t, i);
        })(e, [
          {
            key: "_onResize",
            value: function () {
              var t = this._getWindowWidth(),
                e = this._getWindowHeight(),
                i = this._testIsMobile(),
                n = this._testIsIOS(),
                r = !1,
                s = !1;
              t != this._width && ((this._width = t), (r = !0)),
                e != this._height && ((this._height = e), (r = !0)),
                i != this._isMobile && ((this._isMobile = i), (s = !0)),
                n != this._isIOS && ((this._isIOS = n), (s = !0)),
                r && this.emit("viewport_resized", this._width, this._height),
                s && this.emit("device_changed", this._isMobile, this._isIOS);
            },
          },
          {
            key: "_getWindowWidth",
            value: function () {
              return window.innerWidth;
            },
          },
          {
            key: "_getWindowHeight",
            value: function () {
              return window.innerHeight;
            },
          },
          {
            key: "_testIsMobile",
            value: function () {
              return (
                "s" ==
                window
                  .getComputedStyle(this._device_size_meta_el)
                  .getPropertyValue("font-family")
              );
            },
          },
          {
            key: "_testIsIOS",
            value: function () {
              return (
                /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
              );
            },
          },
          {
            key: "width",
            get: function () {
              return this._width;
            },
          },
          {
            key: "height",
            get: function () {
              return this._height;
            },
          },
          {
            key: "isMobile",
            get: function () {
              return this._isMobile;
            },
          },
          {
            key: "isIOS",
            get: function () {
              return this._isIOS;
            },
          },
        ]),
        e
      );
    })())();
    function Kt(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var te = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.init();
      }
      return (
        (function (t, e, i) {
          e && Kt(t.prototype, e), i && Kt(t, i);
        })(t, [
          {
            key: "init",
            value: function () {
              (this.pointer = o()("#pointer")),
                (this.expandedHoverStateLinks = o()(
                  "a, #mainMenuTrigger, .img-only"
                ).not(".no-link")),
                this.hoverEvents(),
                this.mousePosition();
            },
          },
          {
            key: "hoverEvents",
            value: function () {
              var t = this;
              !Jt.isMobile || Jt.width >= 1024
                ? o()(this.expandedHoverStateLinks)
                    .mouseenter(function () {
                      "index-menu-link--active" == o()(this).attr("class")
                        ? t.pointer.addClass("hover--black")
                        : t.pointer.addClass("hover--orangeRed");
                    })
                    .mouseleave(function () {
                      "index-menu-link--active" == o()(this).attr("class")
                        ? t.pointer.removeClass("hover--black")
                        : t.pointer.removeClass("hover--orangeRed");
                    })
                : this.pointer.remove();
            },
          },
          {
            key: "mousePosition",
            value: function () {
              var t = 0,
                e = 0;
              a.$window.on("mousemove", function (i) {
                (t = i.clientX), (e = i.clientY);
              }),
                a.window.requestAnimationFrame(
                  function i() {
                    this.pointer.css(
                      "transform",
                      "matrix(1, 0, 0, 1, " + t + ", " + e + ")"
                    ),
                      a.window.requestAnimationFrame(i.bind(this));
                  }.bind(this)
                );
            },
          },
        ]),
        t
      );
    })();
    function ee(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var ie = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.init();
      }
      return (
        (function (t, e, i) {
          e && ee(t.prototype, e), i && ee(t, i);
        })(t, [
          {
            key: "init",
            value: function () {
              this.pageTransitions(), this.pageLoadingProgress();
            },
          },
          {
            key: "pageLoadingProgress",
            value: function () {
              for (
                var t,
                  e,
                  i = this,
                  n = document.getElementById("progstat"),
                  r = document.images,
                  s = r.length,
                  o = 0,
                  l = function () {
                    if (
                      ((t = (((100 / s) * (o += 1)) << 0) + "%"),
                      (n.innerHTML = t),
                      o === s)
                    )
                      return u();
                  },
                  u = function () {
                    a.$window.on(
                      "load",
                      function () {
                        this.pageLoaderAnimations();
                      }.bind(i)
                    );
                  },
                  c = 0;
                c < s;
                c++
              )
                ((e = new Image()).onload = l),
                  (e.onerror = l),
                  (e.src = r[c].src);
            },
          },
          {
            key: "pageTransitions",
            value: function () {
              var t = o()(".page-sweeper");
              o()("a.tamar-pageTransition").on("click", function (e) {
                e.preventDefault(),
                  (function (e) {
                    setTimeout(function () {
                      X.to(t, 0.7, { autoAlpha: 1, y: 0, ease: Cubic.Power3 }),
                        setTimeout(function () {
                          location.href = e;
                        }, 500);
                    }, 10);
                  })(o()(this).attr("href"));
              });
            },
          },
          {
            key: "pageLoaderAnimations",
            value: function () {
              var t = o()(".preloader-wrap"),
                e = o()(".header__logo"),
                i = o()("#mainMenuTrigger"),
                n = o()(".homepage__title h2"),
                r = o()(".homepage__hero-visual img"),
                s = o()(".homepage__hero-TitleContainer-bottom p"),
                l = o()(".homepage__hero-discoverYear");
              X.set([e, i, n, s, r, l], { opacity: 0 });
              var u = "";
              if ("artworkDetail" === a.$body.attr("id")) {
                var h = o()(".homepage__year")
                  .map(function (t, e) {
                    var i = o()(e).data("work-year");
                    return [o()('<span class="u-block">' + i + "</span>")];
                  })
                  .get()
                  .reverse();
                u = new c({
                  tweens: [
                    X.staggerFromTo(
                      h,
                      1,
                      { autoAlpha: 0 },
                      {
                        autoAlpha: 1,
                        onStart: function () {
                          o()(this.target).each(function (e, i) {
                            var n = t.find(".years");
                            o()(i).appendTo(n);
                          });
                        },
                        onStartParams: ["{self}"],
                        onComplete: function () {
                          o()(this.target).each(function (t, e) {
                            X.to(o()(e), 0.7, { css: { autoAlpha: 0 } });
                          });
                        },
                        onCompleteParams: ["{self}"],
                      },
                      1.5
                    ),
                  ],
                });
              }
              a.$body.attr("id");
              var f = [
                X.to(o()(".pre-loadText"), 0.7, {
                  css: { autoAlpha: 0, display: "none" },
                }),
                u,
                X.to(t, 0.7, { css: { autoAlpha: 0, display: "none" } }),
                X.staggerTo([e, i, n, s, r, l], 0.7, { opacity: 1 }, 0.3),
                "",
              ];
              return new c({ tweens: f, paused: !0, align: "sequence" }).play();
            },
          },
        ]),
        t
      );
    })();
    function ne(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var re = (function () {
      function t() {
        if (
          ((function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          navigator.userAgent.toLowerCase().indexOf("chrome") > -1)
        ) {
          window.console.log.apply(console, [
            "\n %c The portfolio of the artist, Tamar Halpern. http://tamarhalpern.nyc/ \n\n",
            "background: #000000; padding:5px 0; color: #ff4828;",
          ]);
        } else
          window.console &&
            window.console.log(
              "The Best Tamar Halpern. :-) --\x3e http://tamarhalpern.nyc/"
            );
        this.browserCheck(), this.initComponents();
      }
      return (
        (function (t, e, i) {
          e && ne(t.prototype, e), i && ne(t, i);
        })(t, [
          {
            key: "browserCheck",
            value: function () {
              window.Modernizr.addTest(
                "webkit",
                "WebkitAppearance" in document.documentElement.style
              );
            },
          },
          {
            key: "initComponents",
            value: function () {
              new ie(),
                new Xt(),
                new J({
                  triggerEl: "mainMenuTrigger",
                  containerEl: "mainMenu",
                }),
                new te();
            },
          },
        ]),
        t
      );
    })();
    r()(function () {
      new re();
    });
  },
]);

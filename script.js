!(function(u) {
  var m = [],
    t = {
      options: {
        prependExistingHelpBlock: !1,
        sniffHtml: !0,
        preventSubmit: !0,
        submitError: !1,
        submitSuccess: !1,
        semanticallyStrict: !1,
        autoAdd: { helpBlocks: !0 },
        filter: function() {
          return !0;
        }
      },
      methods: {
        init: function(a) {
          var v = u.extend(!0, {}, t);
          v.options = u.extend(!0, v.options, a);
          var e = u.unique(
            this.map(function() {
              return u(this).parents("form")[0];
            }).toArray()
          );
          return (
            u(e).bind("submit", function(a) {
              var e = u(this),
                i = 0,
                t = e
                  .find("input,textarea,select")
                  .not("[type=submit],[type=image]")
                  .filter(v.options.filter);
              t
                .trigger("submit.validation")
                .trigger("validationLostFocus.validation"),
                t.each(function(a, e) {
                  var t = u(e)
                    .parents(".control-group")
                    .first();
                  t.hasClass("warning") &&
                    (t.removeClass("warning").addClass("error"), i++);
                }),
                t.trigger("validationLostFocus.validation"),
                i
                  ? (v.options.preventSubmit && a.preventDefault(),
                    e.addClass("error"),
                    u.isFunction(v.options.submitError) &&
                      v.options.submitError(
                        e,
                        a,
                        t.jqBootstrapValidation("collectErrors", !0)
                      ))
                  : (e.removeClass("error"),
                    u.isFunction(v.options.submitSuccess) &&
                      v.options.submitSuccess(e, a));
            }),
            this.each(function() {
              var l = u(this),
                t = l.parents(".control-group").first(),
                i = t.find(".help-block").first(),
                r = l.parents("form").first(),
                n = [];
              if (
                (!i.length &&
                  v.options.autoAdd &&
                  v.options.autoAdd.helpBlocks &&
                  ((i = u('<div class="help-block" />')),
                  t.find(".controls").append(i),
                  m.push(i[0])),
                v.options.sniffHtml)
              ) {
                var a = "";
                if (
                  (void 0 !== l.attr("pattern") &&
                    ((a =
                      "Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e"),
                    l.data("validationPatternMessage") &&
                      (a = l.data("validationPatternMessage")),
                    l.data("validationPatternMessage", a),
                    l.data("validationPatternRegex", l.attr("pattern"))),
                  void 0 !== l.attr("max") ||
                    void 0 !== l.attr("aria-valuemax"))
                ) {
                  var e =
                    void 0 !== l.attr("max")
                      ? l.attr("max")
                      : l.attr("aria-valuemax");
                  (a =
                    "Too high: Maximum of '" +
                    e +
                    "'\x3c!-- data-validation-max-message to override --\x3e"),
                    l.data("validationMaxMessage") &&
                      (a = l.data("validationMaxMessage")),
                    l.data("validationMaxMessage", a),
                    l.data("validationMaxMax", e);
                }
                if (
                  void 0 !== l.attr("min") ||
                  void 0 !== l.attr("aria-valuemin")
                ) {
                  var o =
                    void 0 !== l.attr("min")
                      ? l.attr("min")
                      : l.attr("aria-valuemin");
                  (a =
                    "Too low: Minimum of '" +
                    o +
                    "'\x3c!-- data-validation-min-message to override --\x3e"),
                    l.data("validationMinMessage") &&
                      (a = l.data("validationMinMessage")),
                    l.data("validationMinMessage", a),
                    l.data("validationMinMin", o);
                }
                void 0 !== l.attr("maxlength") &&
                  ((a =
                    "Too long: Maximum of '" +
                    l.attr("maxlength") +
                    "' characters\x3c!-- data-validation-maxlength-message to override --\x3e"),
                  l.data("validationMaxlengthMessage") &&
                    (a = l.data("validationMaxlengthMessage")),
                  l.data("validationMaxlengthMessage", a),
                  l.data("validationMaxlengthMaxlength", l.attr("maxlength"))),
                  void 0 !== l.attr("minlength") &&
                    ((a =
                      "Too short: Minimum of '" +
                      l.attr("minlength") +
                      "' characters\x3c!-- data-validation-minlength-message to override --\x3e"),
                    l.data("validationMinlengthMessage") &&
                      (a = l.data("validationMinlengthMessage")),
                    l.data("validationMinlengthMessage", a),
                    l.data(
                      "validationMinlengthMinlength",
                      l.attr("minlength")
                    )),
                  (void 0 === l.attr("required") &&
                    void 0 === l.attr("aria-required")) ||
                    ((a = v.builtInValidators.required.message),
                    l.data("validationRequiredMessage") &&
                      (a = l.data("validationRequiredMessage")),
                    l.data("validationRequiredMessage", a)),
                  void 0 !== l.attr("type") &&
                    "number" === l.attr("type").toLowerCase() &&
                    ((a = v.builtInValidators.number.message),
                    l.data("validationNumberMessage") &&
                      (a = l.data("validationNumberMessage")),
                    l.data("validationNumberMessage", a)),
                  void 0 !== l.attr("type") &&
                    "email" === l.attr("type").toLowerCase() &&
                    ((a =
                      "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"),
                    l.data("validationValidemailMessage")
                      ? (a = l.data("validationValidemailMessage"))
                      : l.data("validationEmailMessage") &&
                        (a = l.data("validationEmailMessage")),
                    l.data("validationValidemailMessage", a)),
                  void 0 !== l.attr("minchecked") &&
                    ((a =
                      "Not enough options checked; Minimum of '" +
                      l.attr("minchecked") +
                      "' required\x3c!-- data-validation-minchecked-message to override --\x3e"),
                    l.data("validationMincheckedMessage") &&
                      (a = l.data("validationMincheckedMessage")),
                    l.data("validationMincheckedMessage", a),
                    l.data(
                      "validationMincheckedMinchecked",
                      l.attr("minchecked")
                    )),
                  void 0 !== l.attr("maxchecked") &&
                    ((a =
                      "Too many options checked; Maximum of '" +
                      l.attr("maxchecked") +
                      "' required\x3c!-- data-validation-maxchecked-message to override --\x3e"),
                    l.data("validationMaxcheckedMessage") &&
                      (a = l.data("validationMaxcheckedMessage")),
                    l.data("validationMaxcheckedMessage", a),
                    l.data(
                      "validationMaxcheckedMaxchecked",
                      l.attr("maxchecked")
                    ));
              }
              void 0 !== l.data("validation") &&
                (n = l.data("validation").split(",")),
                u.each(l.data(), function(a, e) {
                  var t = a.replace(/([A-Z])/g, ",$1").split(",");
                  "validation" === t[0] && t[1] && n.push(t[1]);
                });
              for (
                var s = n, d = [];
                u.each(n, function(a, e) {
                  n[a] = g(e);
                }),
                  (n = u.unique(n)),
                  (d = []),
                  u.each(s, function(a, e) {
                    if (void 0 !== l.data("validation" + e + "Shortcut"))
                      u.each(
                        l.data("validation" + e + "Shortcut").split(","),
                        function(a, e) {
                          d.push(e);
                        }
                      );
                    else if (v.builtInValidators[e.toLowerCase()]) {
                      var t = v.builtInValidators[e.toLowerCase()];
                      "shortcut" === t.type.toLowerCase() &&
                        u.each(t.shortcut.split(","), function(a, e) {
                          (e = g(e)), d.push(e), n.push(e);
                        });
                    }
                  }),
                  0 < (s = d).length;

              );
              var c = {};
              u.each(n, function(a, t) {
                var i = l.data("validation" + t + "Message"),
                  e = void 0 !== i,
                  n = !1;
                if (
                  ((i =
                    i ||
                    "'" +
                      t +
                      "' validation failed \x3c!-- Add attribute 'data-validation-" +
                      t.toLowerCase() +
                      "-message' to input to change this message --\x3e"),
                  u.each(v.validatorTypes, function(a, e) {
                    void 0 === c[a] && (c[a] = []),
                      n ||
                        void 0 === l.data("validation" + t + g(e.name)) ||
                        (c[a].push(
                          u.extend(
                            !0,
                            { name: g(e.name), message: i },
                            e.init(l, t)
                          )
                        ),
                        (n = !0));
                  }),
                  !n && v.builtInValidators[t.toLowerCase()])
                ) {
                  var o = u.extend(
                    !0,
                    {},
                    v.builtInValidators[t.toLowerCase()]
                  );
                  e && (o.message = i);
                  var r = o.type.toLowerCase();
                  "shortcut" === r
                    ? (n = !0)
                    : u.each(v.validatorTypes, function(a, e) {
                        void 0 === c[a] && (c[a] = []),
                          n ||
                            r !== a.toLowerCase() ||
                            (l.data(
                              "validation" + t + g(e.name),
                              o[e.name.toLowerCase()]
                            ),
                            c[r].push(u.extend(o, e.init(l, t))),
                            (n = !0));
                      });
                }
                n || u.error("Cannot find validation info for '" + t + "'");
              }),
                i.data(
                  "original-contents",
                  i.data("original-contents")
                    ? i.data("original-contents")
                    : i.html()
                ),
                i.data(
                  "original-role",
                  i.data("original-role")
                    ? i.data("original-role")
                    : i.attr("role")
                ),
                t.data(
                  "original-classes",
                  t.data("original-clases")
                    ? t.data("original-classes")
                    : t.attr("class")
                ),
                l.data(
                  "original-aria-invalid",
                  l.data("original-aria-invalid")
                    ? l.data("original-aria-invalid")
                    : l.attr("aria-invalid")
                ),
                l.bind("validation.validation", function(a, e) {
                  var i = h(l),
                    n = [];
                  return (
                    u.each(c, function(t, a) {
                      (i ||
                        i.length ||
                        (e && e.includeEmpty) ||
                        (v.validatorTypes[t].blockSubmit &&
                          e &&
                          e.submitting)) &&
                        u.each(a, function(a, e) {
                          v.validatorTypes[t].validate(l, i, e) &&
                            n.push(e.message);
                        });
                    }),
                    n
                  );
                }),
                l.bind("getValidators.validation", function() {
                  return c;
                }),
                l.bind("submit.validation", function() {
                  return l.triggerHandler("change.validation", {
                    submitting: !0
                  });
                }),
                l.bind(
                  [
                    "keyup",
                    "focus",
                    "blur",
                    "click",
                    "keydown",
                    "keypress",
                    "change"
                  ].join(".validation ") + ".validation",
                  function(a, n) {
                    var e = h(l),
                      o = [];
                    t.find("input,textarea,select").each(function(a, e) {
                      var t = o.length;
                      if (
                        (u.each(
                          u(e).triggerHandler("validation.validation", n),
                          function(a, e) {
                            o.push(e);
                          }
                        ),
                        o.length > t)
                      )
                        u(e).attr("aria-invalid", "true");
                      else {
                        var i = l.data("original-aria-invalid");
                        u(e).attr("aria-invalid", void 0 !== i && i);
                      }
                    }),
                      r
                        .find("input,select,textarea")
                        .not(l)
                        .not('[name="' + l.attr("name") + '"]')
                        .trigger("validationLostFocus.validation"),
                      (o = u.unique(o.sort())).length
                        ? (t.removeClass("success error").addClass("warning"),
                          v.options.semanticallyStrict && 1 === o.length
                            ? i.html(
                                o[0] +
                                  (v.options.prependExistingHelpBlock
                                    ? i.data("original-contents")
                                    : "")
                              )
                            : i.html(
                                '<ul role="alert"><li>' +
                                  o.join("</li><li>") +
                                  "</li></ul>" +
                                  (v.options.prependExistingHelpBlock
                                    ? i.data("original-contents")
                                    : "")
                              ))
                        : (t.removeClass("warning error success"),
                          0 < e.length && t.addClass("success"),
                          i.html(i.data("original-contents"))),
                      "blur" === a.type && t.removeClass("success");
                  }
                ),
                l.bind("validationLostFocus.validation", function() {
                  t.removeClass("success");
                });
            })
          );
        },
        destroy: function() {
          return this.each(function() {
            var a = u(this),
              e = a.parents(".control-group").first(),
              t = e.find(".help-block").first();
            a.unbind(".validation"),
              t.html(t.data("original-contents")),
              e.attr("class", e.data("original-classes")),
              a.attr("aria-invalid", a.data("original-aria-invalid")),
              t.attr("role", a.data("original-role")),
              -1 < m.indexOf(t[0]) && t.remove();
          });
        },
        collectErrors: function(a) {
          var o = {};
          return (
            this.each(function(a, e) {
              var t = u(e),
                i = t.attr("name"),
                n = t.triggerHandler("validation.validation", {
                  includeEmpty: !0
                });
              o[i] = u.extend(!0, n, o[i]);
            }),
            u.each(o, function(a, e) {
              0 === e.length && delete o[a];
            }),
            o
          );
        },
        hasErrors: function() {
          var t = [];
          return (
            this.each(function(a, e) {
              t = t.concat(
                u(e).triggerHandler("getValidators.validation")
                  ? u(e).triggerHandler("validation.validation", {
                      submitting: !0
                    })
                  : []
              );
            }),
            0 < t.length
          );
        },
        override: function(a) {
          t = u.extend(!0, t, a);
        }
      },
      validatorTypes: {
        callback: {
          name: "callback",
          init: function(a, e) {
            return {
              validatorName: e,
              callback: a.data("validation" + e + "Callback"),
              lastValue: a.val(),
              lastValid: !0,
              lastFinished: !0
            };
          },
          validate: function(a, e, t) {
            if (t.lastValue === e && t.lastFinished) return !t.lastValid;
            if (!0 === t.lastFinished) {
              (t.lastValue = e), (t.lastValid = !0), (t.lastFinished = !1);
              var i = t,
                n = a;
              !(function(a, e) {
                for (
                  var t = Array.prototype.slice.call(arguments).splice(2),
                    i = a.split("."),
                    n = i.pop(),
                    o = 0;
                  o < i.length;
                  o++
                )
                  e = e[i[o]];
                e[n].apply(this, t);
              })(t.callback, window, a, e, function(a) {
                i.lastValue === a.value &&
                  ((i.lastValid = a.valid),
                  a.message && (i.message = a.message),
                  (i.lastFinished = !0),
                  n.data("validation" + i.validatorName + "Message", i.message),
                  setTimeout(function() {
                    n.trigger("change.validation");
                  }, 1));
              });
            }
            return !1;
          }
        },
        ajax: {
          name: "ajax",
          init: function(a, e) {
            return {
              validatorName: e,
              url: a.data("validation" + e + "Ajax"),
              lastValue: a.val(),
              lastValid: !0,
              lastFinished: !0
            };
          },
          validate: function(e, a, t) {
            return "" + t.lastValue == "" + a && !0 === t.lastFinished
              ? !1 === t.lastValid
              : (!0 === t.lastFinished &&
                  ((t.lastValue = a),
                  (t.lastValid = !0),
                  (t.lastFinished = !1),
                  u.ajax({
                    url: t.url,
                    data: "value=" + a + "&field=" + e.attr("name"),
                    dataType: "json",
                    success: function(a) {
                      "" + t.lastValue == "" + a.value &&
                        ((t.lastValid = !!a.valid),
                        a.message && (t.message = a.message),
                        (t.lastFinished = !0),
                        e.data(
                          "validation" + t.validatorName + "Message",
                          t.message
                        ),
                        setTimeout(function() {
                          e.trigger("change.validation");
                        }, 1));
                    },
                    failure: function() {
                      (t.lastValid = !0),
                        (t.message = "ajax call failed"),
                        (t.lastFinished = !0),
                        e.data(
                          "validation" + t.validatorName + "Message",
                          t.message
                        ),
                        setTimeout(function() {
                          e.trigger("change.validation");
                        }, 1);
                    }
                  })),
                !1);
          }
        },
        regex: {
          name: "regex",
          init: function(a, e) {
            return {
              regex: (function(a) {
                return new RegExp("^" + a + "$");
              })(a.data("validation" + e + "Regex"))
            };
          },
          validate: function(a, e, t) {
            return (
              (!t.regex.test(e) && !t.negative) ||
              (t.regex.test(e) && t.negative)
            );
          }
        },
        required: {
          name: "required",
          init: function(a, e) {
            return {};
          },
          validate: function(a, e, t) {
            return (
              !(0 !== e.length || t.negative) || !!(0 < e.length && t.negative)
            );
          },
          blockSubmit: !0
        },
        match: {
          name: "match",
          init: function(a, e) {
            var t = a
              .parents("form")
              .first()
              .find('[name="' + a.data("validation" + e + "Match") + '"]')
              .first();
            return (
              t.bind("validation.validation", function() {
                a.trigger("change.validation", { submitting: !0 });
              }),
              { element: t }
            );
          },
          validate: function(a, e, t) {
            return (
              (e !== t.element.val() && !t.negative) ||
              (e === t.element.val() && t.negative)
            );
          },
          blockSubmit: !0
        },
        max: {
          name: "max",
          init: function(a, e) {
            return { max: a.data("validation" + e + "Max") };
          },
          validate: function(a, e, t) {
            return (
              (parseFloat(e, 10) > parseFloat(t.max, 10) && !t.negative) ||
              (parseFloat(e, 10) <= parseFloat(t.max, 10) && t.negative)
            );
          }
        },
        min: {
          name: "min",
          init: function(a, e) {
            return { min: a.data("validation" + e + "Min") };
          },
          validate: function(a, e, t) {
            return (
              (parseFloat(e) < parseFloat(t.min) && !t.negative) ||
              (parseFloat(e) >= parseFloat(t.min) && t.negative)
            );
          }
        },
        maxlength: {
          name: "maxlength",
          init: function(a, e) {
            return { maxlength: a.data("validation" + e + "Maxlength") };
          },
          validate: function(a, e, t) {
            return (
              (e.length > t.maxlength && !t.negative) ||
              (e.length <= t.maxlength && t.negative)
            );
          }
        },
        minlength: {
          name: "minlength",
          init: function(a, e) {
            return { minlength: a.data("validation" + e + "Minlength") };
          },
          validate: function(a, e, t) {
            return (
              (e.length < t.minlength && !t.negative) ||
              (e.length >= t.minlength && t.negative)
            );
          }
        },
        maxchecked: {
          name: "maxchecked",
          init: function(a, e) {
            var t = a
              .parents("form")
              .first()
              .find('[name="' + a.attr("name") + '"]');
            return (
              t.bind("click.validation", function() {
                a.trigger("change.validation", { includeEmpty: !0 });
              }),
              {
                maxchecked: a.data("validation" + e + "Maxchecked"),
                elements: t
              }
            );
          },
          validate: function(a, e, t) {
            return (
              (t.elements.filter(":checked").length > t.maxchecked &&
                !t.negative) ||
              (t.elements.filter(":checked").length <= t.maxchecked &&
                t.negative)
            );
          },
          blockSubmit: !0
        },
        minchecked: {
          name: "minchecked",
          init: function(a, e) {
            var t = a
              .parents("form")
              .first()
              .find('[name="' + a.attr("name") + '"]');
            return (
              t.bind("click.validation", function() {
                a.trigger("change.validation", { includeEmpty: !0 });
              }),
              {
                minchecked: a.data("validation" + e + "Minchecked"),
                elements: t
              }
            );
          },
          validate: function(a, e, t) {
            return (
              (t.elements.filter(":checked").length < t.minchecked &&
                !t.negative) ||
              (t.elements.filter(":checked").length >= t.minchecked &&
                t.negative)
            );
          },
          blockSubmit: !0
        }
      },
      builtInValidators: {
        email: { name: "Email", type: "shortcut", shortcut: "validemail" },
        validemail: {
          name: "Validemail",
          type: "regex",
          regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
          message:
            "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"
        },
        passwordagain: {
          name: "Passwordagain",
          type: "match",
          match: "password",
          message:
            "Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"
        },
        positive: {
          name: "Positive",
          type: "shortcut",
          shortcut: "number,positivenumber"
        },
        negative: {
          name: "Negative",
          type: "shortcut",
          shortcut: "number,negativenumber"
        },
        number: {
          name: "Number",
          type: "regex",
          regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
          message:
            "Must be a number\x3c!-- data-validator-number-message to override --\x3e"
        },
        integer: {
          name: "Integer",
          type: "regex",
          regex: "[+-]?\\d+",
          message:
            "No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"
        },
        positivenumber: {
          name: "Positivenumber",
          type: "min",
          min: 0,
          message:
            "Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"
        },
        negativenumber: {
          name: "Negativenumber",
          type: "max",
          max: 0,
          message:
            "Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"
        },
        required: {
          name: "Required",
          type: "required",
          message:
            "This is required\x3c!-- data-validator-required-message to override --\x3e"
        },
        checkone: {
          name: "Checkone",
          type: "minchecked",
          minchecked: 1,
          message:
            "Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"
        }
      }
    },
    g = function(a) {
      return a.toLowerCase().replace(/(^|\s)([a-z])/g, function(a, e, t) {
        return e + t.toUpperCase();
      });
    },
    h = function(a) {
      var e = a.val(),
        t = a.attr("type");
      return (
        "checkbox" === t && (e = a.is(":checked") ? e : ""),
        "radio" === t &&
          (e =
            0 < u('input[name="' + a.attr("name") + '"]:checked').length
              ? e
              : ""),
        e
      );
    };
  (u.fn.jqBootstrapValidation = function(a) {
    return t.methods[a]
      ? t.methods[a].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof a && a
        ? (u.error(
            "Method " + a + " does not exist on jQuery.jqBootstrapValidation"
          ),
          null)
        : t.methods.init.apply(this, arguments);
  }),
    (u.jqBootstrapValidation = function(a) {
      u(":input")
        .not("[type=image],[type=submit]")
        .jqBootstrapValidation.apply(this, arguments);
    });
})(jQuery);

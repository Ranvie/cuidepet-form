import { useModel as l, withDirectives as V, createElementBlock as u, openBlock as i, vModelText as U, getCurrentInstance as O, ref as w, createCommentVNode as g, Fragment as _, renderList as A, createElementVNode as f, toDisplayString as N, onMounted as B, watch as Z, normalizeClass as D, vModelCheckbox as j, mergeModels as P, createBlock as X, createTextVNode as R, resolveDynamicComponent as H, createVNode as F, useCssVars as J, computed as z } from "vue";
const G = "data:image/svg+xml,%3csvg%20width='25'%20height='23'%20viewBox='0%200%2025%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.33%200.0726729L7.5%205.72517V14.4752L8.435%2014.8089L7.02625%2017.6264C6.86601%2017.9468%206.77648%2018.2978%206.76372%2018.6558C6.75096%2019.0137%206.81527%2019.3702%206.9523%2019.7012C7.08932%2020.0321%207.29586%2020.3298%207.55792%2020.5739C7.81999%2020.8181%208.13146%2021.0031%208.47125%2021.1164L13.5763%2022.8177C14.1473%2023.0039%2014.7661%2022.9798%2015.321%2022.7499C15.8759%2022.52%2016.3304%2022.0994%2016.6025%2021.5639L18.2312%2018.3064L23.33%2020.1277C23.5185%2020.1949%2023.7205%2020.2159%2023.9188%2020.1889C24.1172%2020.1619%2024.3061%2020.0876%2024.4698%2019.9723C24.6335%2019.857%2024.767%2019.7041%2024.8593%2019.5265C24.9516%2019.3488%2024.9998%2019.1516%2025%2018.9514V1.24892C24.9998%201.04874%2024.9516%200.851525%2024.8593%200.673872C24.767%200.496219%2024.6335%200.343323%2024.4698%200.228049C24.3061%200.112775%2024.1172%200.0384937%2023.9188%200.011455C23.7205%20-0.0155836%2023.5185%200.00541105%2023.33%200.0726729ZM14.3663%2020.4464L9.2625%2018.7452L10.8063%2015.6564L15.8588%2017.4614L14.3663%2020.4464ZM2.5%2014.4752H5V5.72517H2.5C1.12125%205.72517%200%206.84642%200%208.22517V11.9752C0%2013.3539%201.12125%2014.4752%202.5%2014.4752Z'%20fill='%237E7E7E'/%3e%3c/svg%3e", $ = (e, v) => {
  const o = e.__vccOpts || e;
  for (const [p, n] of v)
    o[p] = n;
  return o;
}, K = ["placeholder", "disabled"], W = {
  __name: "TextComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: "", type: String },
    valueModifiers: {},
    options: { default: [], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    const v = l(e, "placeholder"), o = l(e, "value");
    l(e, "options");
    const p = l(e, "mode");
    return l(e, "required"), l(e, "optionsLimit"), (n, a) => V((i(), u("input", {
      type: "text",
      name: "text",
      placeholder: v.value,
      "onUpdate:modelValue": a[0] || (a[0] = (m) => o.value = m),
      disabled: p.value != "answer"
    }, null, 8, K)), [
      [U, o.value]
    ]);
  }
}, Q = /* @__PURE__ */ $(W, [["__scopeId", "data-v-af78eff4"]]), Y = ["placeholder", "disabled"], ee = {
  __name: "TextAreaComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: "", type: String },
    valueModifiers: {},
    options: { default: [], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    const v = l(e, "placeholder"), o = l(e, "value");
    l(e, "options");
    const p = l(e, "mode");
    return l(e, "required"), l(e, "optionsLimit"), (n, a) => V((i(), u("textarea", {
      name: "textarea",
      rows: "5",
      cols: "10",
      maxlength: "600",
      placeholder: v.value,
      disabled: p.value != "answer",
      "onUpdate:modelValue": a[0] || (a[0] = (m) => o.value = m)
    }, null, 8, Y)), [
      [U, o.value]
    ]);
  }
}, te = /* @__PURE__ */ $(ee, [["__scopeId", "data-v-4790e112"]]), oe = ["placeholder", "disabled"], ne = {
  __name: "NumberComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: "", type: [Number, String] },
    valueModifiers: {},
    options: { default: [], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    const v = l(e, "placeholder"), o = l(e, "value");
    l(e, "options");
    const p = l(e, "mode");
    return l(e, "required"), l(e, "optionsLimit"), (n, a) => V((i(), u("input", {
      type: "number",
      placeholder: v.value,
      "onUpdate:modelValue": a[0] || (a[0] = (m) => o.value = m),
      disabled: p.value != "answer"
    }, null, 8, oe)), [
      [U, o.value]
    ]);
  }
}, le = /* @__PURE__ */ $(ne, [["__scopeId", "data-v-2f6585d6"]]), ie = { class: "form-check" }, ae = ["onClick"], ue = ["id", "checked", "disabled", "onClick"], de = ["for"], re = ["onUpdate:modelValue"], se = {
  __name: "CheckboxComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: [], type: Array },
    valueModifiers: {},
    options: { default: ["Nova opção"], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    const v = O(), o = w(v.uid);
    l(e, "placeholder");
    const p = l(e, "value"), n = l(e, "options"), a = l(e, "mode");
    l(e, "required");
    const m = l(e, "optionsLimit");
    function c(d) {
      return !!p.value.includes(d);
    }
    function k() {
      y() && n.value.push("Nova opção");
    }
    function x(d) {
      n.value.splice(d, 1);
    }
    function S(d) {
      const s = p.value.indexOf(d);
      s === -1 ? p.value.push(d) : p.value.splice(s, 1);
    }
    function y() {
      return n.value.length < m.value;
    }
    return (d, s) => (i(), u("div", null, [
      (i(!0), u(_, null, A(n.value, (M, b) => (i(), u("div", ie, [
        a.value == "edit" ? (i(), u("span", {
          key: 0,
          class: "delete",
          onClick: (L) => x(b)
        }, "X", 8, ae)) : g("", !0),
        f("input", {
          type: "checkbox",
          class: "form-check-input",
          id: "checkbox-" + o.value + "-" + b,
          checked: a.value != "edit" && c(M),
          disabled: a.value != "answer",
          onClick: (L) => S(M)
        }, null, 8, ue),
        f("label", {
          class: "form-check-label",
          for: "checkbox-" + o.value + "-" + b
        }, N(a.value != "edit" ? M : ""), 9, de),
        a.value === "edit" ? V((i(), u("input", {
          key: 1,
          type: "text",
          "onUpdate:modelValue": (L) => n.value[b] = L
        }, null, 8, re)), [
          [U, n.value[b]]
        ]) : g("", !0)
      ]))), 256)),
      a.value == "edit" && y() ? (i(), u("div", {
        key: 0,
        class: "add",
        onClick: s[0] || (s[0] = (M) => k())
      }, s[1] || (s[1] = [
        f("div", { class: "add-plus" }, null, -1),
        f("div", { class: "add-label" }, "Adicionar", -1)
      ]))) : g("", !0)
    ]));
  }
}, pe = /* @__PURE__ */ $(se, [["__scopeId", "data-v-8f111bda"]]), ce = { class: "form-check" }, ve = ["onClick"], fe = ["name", "id", "checked", "disabled", "onClick"], me = ["for"], ye = ["onUpdate:modelValue"], he = {
  __name: "RadioComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: [], type: Array },
    valueModifiers: {},
    options: { default: ["Nova opção"], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    const v = O(), o = w(v.uid);
    l(e, "placeholder");
    const p = l(e, "value"), n = l(e, "options"), a = l(e, "mode");
    l(e, "required");
    const m = l(e, "optionsLimit");
    function c(d) {
      return !!p.value.includes(d);
    }
    function k() {
      y() && n.value.push("Nova opção");
    }
    function x(d) {
      n.value.splice(d, 1);
    }
    function S(d) {
      p.value.splice(0, p.value.length), p.value.push(d);
    }
    function y() {
      return n.value.length < m.value;
    }
    return (d, s) => (i(), u("div", null, [
      (i(!0), u(_, null, A(n.value, (M, b) => (i(), u("div", ce, [
        a.value == "edit" ? (i(), u("span", {
          key: 0,
          class: "delete",
          onClick: (L) => x(b)
        }, "X", 8, ve)) : g("", !0),
        f("input", {
          type: "radio",
          class: "form-check-input",
          name: "radio-" + o.value,
          id: "checkbox-" + o.value + "-" + b,
          checked: a.value != "edit" && c(M),
          disabled: a.value != "answer",
          onClick: (L) => S(M)
        }, null, 8, fe),
        f("label", {
          class: "form-check-label",
          for: "checkbox-" + o.value + "-" + b
        }, N(a.value != "edit" ? M : ""), 9, me),
        a.value === "edit" ? V((i(), u("input", {
          key: 1,
          type: "text",
          "onUpdate:modelValue": (L) => n.value[b] = L
        }, null, 8, ye)), [
          [U, n.value[b]]
        ]) : g("", !0)
      ]))), 256)),
      a.value == "edit" && y() ? (i(), u("div", {
        key: 0,
        class: "add",
        onClick: s[0] || (s[0] = (M) => k())
      }, s[1] || (s[1] = [
        f("div", { class: "add-plus" }, null, -1),
        f("div", { class: "add-label" }, "Adicionar", -1)
      ]))) : g("", !0)
    ]));
  }
}, Ce = /* @__PURE__ */ $(he, [["__scopeId", "data-v-5f6e1b4c"]]), ge = ["onClick"], ke = {
  __name: "DropdownComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: "", type: String },
    valueModifiers: {},
    options: { default: [], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    const v = w(), o = w(), p = w(), n = w([]), a = w(), m = l(e, "placeholder"), c = l(e, "value"), k = l(e, "options"), x = l(e, "mode");
    l(e, "required");
    const S = l(e, "optionsLimit");
    B(() => {
      switch (x.value) {
        case "answer":
          y(), s();
          break;
        case "edit":
          y(), d();
          break;
      }
      b();
    }), Z(k, (t, r) => {
      x == "answer" && setTimeout(() => {
        M();
      }, 1);
    }, { deep: !0 });
    function y() {
      v.value.addEventListener("click", () => {
        p.value.style.display = p.value.style.display === "block" ? "none" : "block";
      });
    }
    function d() {
      a.value.addEventListener("click", (t) => t.stopPropagation()), a.value.addEventListener("focusout", () => {
        const t = a.value.value;
        t == "" || !E() || (k.value.push(t), a.value.value = "", p.value.style.display = "block");
      });
    }
    function s() {
      setTimeout(() => {
        M();
      }, 1);
    }
    function M() {
      for (const t of n.value)
        t.removeEventListener("click", () => {
          o.value.textContent = t.textContent;
        }), t.addEventListener("click", () => {
          o.value.textContent = t.textContent, c.value = t.textContent;
        });
    }
    function b() {
      setTimeout(() => {
        if (k.value.includes(c.value)) {
          o.value.textContent = c.value;
          return;
        }
        o.value.textContent = m.value;
      }, 1);
    }
    function L(t) {
      k.value.splice(t, 1);
    }
    function E() {
      return k.value.length < S.value;
    }
    return (t, r) => (i(), u("div", {
      ref_key: "select",
      ref: v,
      class: D(["select-custom", x.value == "read" ? "disabled" : ""])
    }, [
      f("div", {
        ref_key: "selected",
        ref: o,
        class: "selected"
      }, null, 512),
      f("div", {
        ref_key: "optionsDiv",
        ref: p,
        class: "options"
      }, [
        (i(!0), u(_, null, A(k.value, (C, q) => (i(), u("div", {
          ref_for: !0,
          ref_key: "options",
          ref: n,
          class: "option"
        }, [
          x.value == "edit" ? (i(), u("span", {
            key: 0,
            onClick: (h) => {
              h.stopPropagation(), L(q);
            },
            class: "delete"
          }, "X", 8, ge)) : g("", !0),
          f("span", null, N(C), 1)
        ], 512))), 256)),
        x.value == "edit" && E() ? (i(), u("input", {
          key: 0,
          ref_key: "newOptionInput",
          ref: a,
          type: "text",
          placeholder: "Nova opção...",
          class: "custom-input",
          onClick: r[0] || (r[0] = (C) => {
            C.stopPropagation(), d();
          })
        }, null, 512)) : g("", !0)
      ], 512)
    ], 2));
  }
}, be = /* @__PURE__ */ $(ke, [["__scopeId", "data-v-58d0a5f6"]]), xe = {
  __name: "DateComponent",
  props: {
    placeholder: { default: "", type: String },
    placeholderModifiers: {},
    value: { default: "", type: String },
    valueModifiers: {},
    options: { default: [], type: Array },
    optionsModifiers: {},
    mode: { default: "read", type: String },
    modeModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {},
    optionsLimit: { default: 10, type: Number },
    optionsLimitModifiers: {}
  },
  emits: ["update:placeholder", "update:value", "update:options", "update:mode", "update:required", "update:optionsLimit"],
  setup(e) {
    l(e, "placeholder");
    const v = l(e, "value");
    l(e, "options");
    const o = l(e, "mode");
    return l(e, "required"), l(e, "optionsLimit"), (p, n) => V((i(), u("input", {
      type: "date",
      name: "text",
      "onUpdate:modelValue": n[0] || (n[0] = (a) => v.value = a),
      class: D(o.value != "answer" ? "disabled" : "")
    }, null, 2)), [
      [U, v.value]
    ]);
  }
}, Me = /* @__PURE__ */ $(xe, [["__scopeId", "data-v-be5c2e0a"]]), qe = ["value", "selected"], Le = {
  __name: "SelectInputComponent",
  props: {
    type: {
      default: "text",
      type: String
    }
  },
  emits: {
    changeInput: String
  },
  setup(e, { emit: v }) {
    const o = w([
      { value: "text", text: "Texto" },
      { value: "textarea", text: "Texto longo" },
      { value: "number", text: "Número" },
      { value: "checkbox", text: "Caixa de seleção" },
      { value: "radio", text: "Escolha única" },
      { value: "dropdown", text: "Lista suspensa" },
      { value: "date", text: "Data" }
    ]), p = e, n = v;
    return (a, m) => (i(), u("div", null, [
      f("select", {
        name: "select-input",
        onChange: m[0] || (m[0] = (c) => n("changeInput", c.target.value))
      }, [
        (i(!0), u(_, null, A(o.value, (c, k) => (i(), u("option", {
          value: c.value,
          selected: c.value == p.type
        }, N(c.text), 9, qe))), 256))
      ], 32)
    ]));
  }
}, Ie = /* @__PURE__ */ $(Le, [["__scopeId", "data-v-c5fb1c30"]]), $e = { class: "form-check form-switch" }, we = ["id"], Se = ["for"], Ve = {
  __name: "SwitchComponent",
  props: {
    required: { default: !1, type: Boolean },
    requiredModifiers: {}
  },
  emits: ["update:required"],
  setup(e) {
    const v = l(e, "required"), o = w();
    return B(() => {
      o.value = O().uid;
    }), (p, n) => (i(), u("div", $e, [
      V(f("input", {
        class: "form-check-input",
        type: "checkbox",
        role: "switch",
        id: "switch-required-" + o.value,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => v.value = a)
      }, null, 8, we), [
        [j, v.value]
      ]),
      f("label", {
        class: "form-check-label",
        for: "switch-required-" + o.value
      }, "Obrigatório", 8, Se)
    ]));
  }
}, Ne = /* @__PURE__ */ $(Ve, [["__scopeId", "data-v-39681bc0"]]), Ue = { class: "form-card" }, _e = { class: "title" }, Ae = { key: 0 }, Ee = { class: "red" }, Oe = {
  key: 0,
  class: "other-controls"
}, Be = {
  __name: "InputComponent",
  props: /* @__PURE__ */ P({
    type: {
      default: "text",
      type: String
    },
    options: {
      default: [],
      type: Array
    },
    value: {
      default: ""
    },
    placeholder: {
      default: ""
    },
    required: {
      default: !1,
      type: Boolean
    },
    inputIndex: {
      default: 0,
      type: Number
    },
    pageIndex: {
      default: 0,
      type: Number
    },
    mode: {
      default: "read",
      type: String
    }
  }, {
    title: { default: "Título da pergunta", type: String },
    titleModifiers: {},
    options: { default: [], type: Array },
    optionsModifiers: {},
    value: { default: "" },
    valueModifiers: {},
    placeholder: { default: "" },
    placeholderModifiers: {},
    required: { default: !1, type: Boolean },
    requiredModifiers: {}
  }),
  emits: /* @__PURE__ */ P({
    changeInput: String,
    deleteInput: String
  }, ["update:title", "update:options", "update:value", "update:placeholder", "update:required"]),
  setup(e, { emit: v }) {
    const o = l(e, "title"), p = l(e, "options"), n = l(e, "value"), a = l(e, "placeholder"), m = l(e, "required"), c = e, k = v;
    function x() {
      const y = [];
      return y.text = Q, y.textarea = te, y.number = le, y.checkbox = pe, y.radio = Ce, y.dropdown = be, y.date = Me, y;
    }
    function S(y) {
      return x()[y.toLowerCase()] ?? Q;
    }
    return (y, d) => (i(), u("div", Ue, [
      f("div", _e, [
        c.mode == "edit" ? (i(), u("div", {
          key: 0,
          class: "trash-bin",
          onClick: d[0] || (d[0] = (s) => k("deleteInput", c.pageIndex, c.inputIndex))
        })) : g("", !0),
        f("h2", null, [
          R(N(c.inputIndex + 1) + ". ", 1),
          c.mode != "edit" ? (i(), u("span", Ae, [
            R(N(o.value) + " ", 1),
            f("span", Ee, N(m.value ? "*" : ""), 1)
          ])) : g("", !0),
          c.mode == "edit" ? V((i(), u("input", {
            key: 1,
            class: "title-input",
            type: "text",
            "onUpdate:modelValue": d[1] || (d[1] = (s) => o.value = s)
          }, null, 512)), [
            [U, o.value]
          ]) : g("", !0)
        ])
      ]),
      (i(), X(H(S(c.type)), {
        class: D(["input", c.mode != "edit" ? "fix-spacing" : ""]),
        placeholder: a.value,
        "onUpdate:placeholder": d[2] || (d[2] = (s) => a.value = s),
        value: n.value,
        "onUpdate:value": d[3] || (d[3] = (s) => n.value = s),
        mode: c.mode,
        "onUpdate:mode": d[4] || (d[4] = (s) => c.mode = s),
        required: m.value,
        "onUpdate:required": d[5] || (d[5] = (s) => m.value = s),
        options: p.value,
        "onUpdate:options": d[6] || (d[6] = (s) => p.value = s)
      }, null, 40, ["class", "placeholder", "value", "mode", "required", "options"])),
      c.mode == "edit" ? (i(), u("div", Oe, [
        F(Ie, {
          type: c.type,
          onChangeInput: d[7] || (d[7] = (s) => k("changeInput", c.pageIndex, c.inputIndex, s))
        }, null, 8, ["type"]),
        F(Ne, {
          required: m.value,
          "onUpdate:required": d[8] || (d[8] = (s) => m.value = s)
        }, null, 8, ["required"])
      ])) : g("", !0)
    ]));
  }
}, De = /* @__PURE__ */ $(Be, [["__scopeId", "data-v-51a4dca3"]]), Te = { class: "form-container" }, Pe = { class: "page-card" }, Re = { key: 0 }, Fe = ["onUpdate:modelValue"], Qe = ["onClick"], Xe = { class: "actions-row margin-top" }, Ze = { class: "action-buttons" }, je = {
  __name: "QuestionComponent",
  props: {
    jsonForm: {
      default: "",
      type: String
    },
    mode: {
      //edit, answer, read
      default: "read",
      type: String
    },
    questionLimit: {
      default: 10,
      type: Number
    },
    optionsLimit: {
      default: 10,
      type: Number
    },
    reportable: {
      default: !1,
      type: Boolean
    }
  },
  emits: {
    onCancel: null,
    onReport: null,
    onSubmit: String
  },
  setup(e, { emit: v }) {
    J((t) => ({
      "34ff4d36": p.value
    }));
    const o = w(), p = z(() => n.reportable ? "space-between" : "flex-end"), n = e, a = v;
    B(() => {
      var t;
      o.value = ((t = JSON.parse(n.jsonForm)) == null ? void 0 : t.pages) ?? [];
    });
    function m(t, r) {
      o.value[t].inputs.splice(r, 1);
    }
    function c(t, r = "text") {
      E(t) && o.value[t].inputs.push(x(r));
    }
    function k(t, r, C) {
      o.value[t].inputs[r] = x(C);
    }
    function x(t) {
      return {
        title: "Título da pergunta",
        type: t,
        placeholder: "",
        options: [],
        value: t == "radio" || t == "checkbox" ? [] : "",
        required: !1
      };
    }
    function S(t) {
      t.preventDefault(), y(), b(), !M(s()) && a("onSubmit", JSON.stringify({ pages: o.value }));
    }
    function y() {
      if (n.mode == "edit")
        for (const t of o.value)
          for (const r of t.inputs)
            r.value = d(r.type);
    }
    function d(t) {
      let r = "";
      switch (t) {
        case "checkbox":
        case "radio":
          r = [];
          break;
      }
      return r;
    }
    function s() {
      const t = [];
      if (n.mode == "edit") return t;
      for (const r in o.value)
        for (const C in o.value[r].inputs) {
          const q = o.value[r].inputs[C];
          q.required && (!q.value || q.value.length == 0) && t.push({ page: r, input: C });
        }
      return t;
    }
    function M(t = []) {
      if (t.length == 0) return !1;
      document.getElementById(`question-page${t[0].page}-input${t[0].input}`).scrollIntoView({ behavior: "smooth", block: "center" });
      for (const C of t) {
        const q = document.getElementById(`question-page${C.page}-input${C.input}`);
        L(q, "Este campo é obrigatório");
      }
      return !0;
    }
    function b() {
      document.querySelectorAll(".alert-box").forEach((t) => t.remove());
    }
    function L(t, r) {
      if (t) {
        var C = document.createElement("div");
        C.classList.add("alert-box"), C.textContent = r, t.appendChild(C);
      }
    }
    function E(t) {
      return o.value[t].inputs.length < n.questionLimit;
    }
    return (t, r) => (i(), u("form", Te, [
      (i(!0), u(_, null, A(o.value, (C, q) => (i(), u("section", Pe, [
        f("h1", null, [
          n.mode != "edit" ? (i(), u("span", Re, N(C.title), 1)) : g("", !0),
          n.mode == "edit" ? V((i(), u("input", {
            key: 1,
            class: "title-input",
            type: "text",
            "onUpdate:modelValue": (h) => C.title = h
          }, null, 8, Fe)), [
            [U, C.title]
          ]) : g("", !0)
        ]),
        (i(!0), u(_, null, A(C.inputs, (h, T) => (i(), X(De, {
          id: "question-page" + q + "-input" + T,
          title: h.title,
          "onUpdate:title": (I) => h.title = I,
          options: h.options,
          "onUpdate:options": (I) => h.options = I,
          value: h.value,
          "onUpdate:value": (I) => h.value = I,
          placeholder: h.placeholder,
          "onUpdate:placeholder": (I) => h.placeholder = I,
          required: h.required,
          "onUpdate:required": (I) => h.required = I,
          optionsLimit: n.optionsLimit,
          "onUpdate:optionsLimit": r[0] || (r[0] = (I) => n.optionsLimit = I),
          type: h.type,
          mode: n.mode,
          inputIndex: T,
          pageIndex: q,
          onChangeInput: k,
          onDeleteInput: m
        }, null, 8, ["id", "title", "onUpdate:title", "options", "onUpdate:options", "value", "onUpdate:value", "placeholder", "onUpdate:placeholder", "required", "onUpdate:required", "optionsLimit", "type", "mode", "inputIndex", "pageIndex"]))), 256)),
        n.mode == "edit" && E(q) ? (i(), u("div", {
          key: 0,
          class: "add-question",
          onClick: (h) => c(q)
        }, r[4] || (r[4] = [
          f("div", { class: "plus-box" }, null, -1),
          f("p", null, "Nova pergunta", -1)
        ]), 8, Qe)) : g("", !0),
        f("div", Xe, [
          n.reportable ? (i(), u("div", {
            key: 0,
            class: "report-button",
            onClick: r[1] || (r[1] = (h) => {
              h.preventDefault(), a("onReport");
            })
          }, r[5] || (r[5] = [
            f("img", {
              src: G,
              alt: "Denunciar"
            }, null, -1),
            f("span", null, "Denunciar", -1)
          ]))) : g("", !0),
          f("div", Ze, [
            n.mode != "read" ? (i(), u("button", {
              key: 0,
              onClick: r[2] || (r[2] = (h) => {
                h.preventDefault(), a("onCancel");
              })
            }, "Cancelar")) : g("", !0),
            n.mode != "read" ? (i(), u("button", {
              key: 1,
              type: "submit",
              onClick: S
            }, "Enviar")) : g("", !0),
            n.mode == "read" ? (i(), u("button", {
              key: 2,
              onClick: r[3] || (r[3] = (h) => {
                h.preventDefault(), a("onCancel");
              })
            }, "Fechar")) : g("", !0)
          ])
        ])
      ]))), 256))
    ]));
  }
}, He = /* @__PURE__ */ $(je, [["__scopeId", "data-v-1fc6b8d9"]]), ze = {
  install: (e) => {
    e.component("QuestionComponent", He);
  }
};
export {
  ze as default
};

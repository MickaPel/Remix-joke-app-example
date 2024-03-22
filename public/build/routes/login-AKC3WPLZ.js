import {
  require_request
} from "/build/_shared/chunk-CCCBWZNK.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-XTCVRVDS.js";
import {
  createHotContext
} from "/build/_shared/chunk-3LPEBMPF.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/login.css
var login_default = "/build/_assets/login-MPWT2RCD.css";

// app/routes/login.tsx
var import_db = __toESM(require_db());
var import_request = __toESM(require_request());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: login_default
}];
var meta = () => {
  return [{
    title: "Remix Jokes | Login"
  }, {
    name: "description",
    content: "Login form"
  }];
};
function Login() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  _s();
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0 }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "loginType", value: "login", defaultChecked: !((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) || ((_c2 = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c2.loginType) === "login" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 164,
              columnNumber: 15
            }, this),
            " ",
            "Login"
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "loginType", value: "register", defaultChecked: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.loginType) === "register" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 170,
              columnNumber: 15
            }, this),
            " ",
            "Register"
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "username-input", name: "username", defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.username, "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username), "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? "username-error" : void 0 }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this),
          ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.username) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", id: "username-error", children: actionData.fieldErrors.username }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 181,
            columnNumber: 50
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password-input", name: "password", type: "password", defaultValue: (_i = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _i.password, "aria-invalid": Boolean((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password), "aria-errormessage": ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password) ? "password-error" : void 0 }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 188,
            columnNumber: 13
          }, this),
          ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", id: "password-error", children: actionData.fieldErrors.password }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 191,
            columnNumber: 50
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "form-error-message", children: (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 197,
          columnNumber: 38
        }, this) : null }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/jokes", children: "Jokes" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 152,
    columnNumber: 10
  }, this);
}
_s(Login, "l8x34vVXs1FlNFLPEnmoic4WVOs=", false, function() {
  return [useActionData, useSearchParams];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/login-AKC3WPLZ.js.map

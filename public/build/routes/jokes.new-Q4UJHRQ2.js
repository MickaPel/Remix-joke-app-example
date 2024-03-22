import {
  require_request
} from "/build/_shared/chunk-CCCBWZNK.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  isRouteErrorResponse,
  useActionData,
  useRouteError
} from "/build/_shared/chunk-XTCVRVDS.js";
import {
  createHotContext
} from "/build/_shared/chunk-3LPEBMPF.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/jokes.new.tsx
var import_node = __toESM(require_node());
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\jokes.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\jokes.new.tsx"
  );
  import.meta.hot.lastModified = "1694687073104.7283";
}
function AddJoke() {
  var _a, _b, _c3, _d, _e, _f, _g, _h;
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, false, {
      fileName: "app/routes/jokes.new.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Name:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name, type: "text", name: "name", "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name), "aria-errormessage": ((_c3 = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c3.name) ? "name-error" : void 0 }, void 0, false, {
            fileName: "app/routes/jokes.new.tsx",
            lineNumber: 96,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 94,
          columnNumber: 21
        }, this),
        ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", id: "name-error", role: "alert", children: actionData.fieldErrors.name }, void 0, false, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 98,
          columnNumber: 54
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Content:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content, "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content), "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0 }, void 0, false, {
            fileName: "app/routes/jokes.new.tsx",
            lineNumber: 105,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this),
        ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", id: "content-error", role: "alert", children: actionData.fieldErrors.content }, void 0, false, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 107,
          columnNumber: 57
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, false, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 112,
          columnNumber: 46
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, false, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 115,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.new.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes.new.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s(AddJoke, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = AddJoke;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 401) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You must be logged in to create a joke." }, void 0, false, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.new.tsx",
      lineNumber: 130,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-container", children: "Something unexpected went wrong. Sorry about that." }, void 0, false, {
    fileName: "app/routes/jokes.new.tsx",
    lineNumber: 135,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "AddJoke");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  AddJoke as default
};
//# sourceMappingURL=/build/routes/jokes.new-Q4UJHRQ2.js.map

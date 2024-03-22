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
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-XTCVRVDS.js";
import {
  createHotContext
} from "/build/_shared/chunk-3LPEBMPF.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/jokes.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-LEVQJFT3.css";

// app/routes/jokes.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\jokes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\jokes.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: jokes_default
}];
function JokesRoute() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      data.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `Hi ${data.user.username}` }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Logout" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 63,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 62,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 60,
        columnNumber: 30
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 67,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: "Get a random joke" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 76,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: data.jokes.map(({
          id,
          name
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: id, children: name }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 82,
          columnNumber: 33
        }, this) }, id, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 81,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 77,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "button", children: "Add your own" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(JokesRoute, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = JokesRoute;
var _c;
$RefreshReg$(_c, "JokesRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  JokesRoute as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-PBYBOC6E.js.map

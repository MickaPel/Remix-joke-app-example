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
  useLoaderData,
  useParams,
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

// app/routes/jokes.$jokeId.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\jokes.$jokeId.tsx"' + id);
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
    "app\\routes\\jokes.$jokeId.tsx"
  );
  import.meta.hot.lastModified = "1694686935954.6277";
}
var meta = ({
  data
}) => {
  const {
    description,
    title
  } = data ? {
    description: `Enjoy the "${data.joke.name}" joke`,
    title: `${data.joke.name}`
  } : {
    description: "joke not found",
    title: "no joke"
  };
  return [{
    title
  }, {
    name: "description",
    content: description
  }];
};
function Joke() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, false, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.joke.content }, void 0, false, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: [
      '"',
      data.joke.name,
      '" Permalink'
    ] }, void 0, true, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    data.isOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { name: "intent", type: "submit", value: "delete", className: "button", children: "Delete" }, void 0, false, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 108,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 107,
      columnNumber: 29
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/jokes.$jokeId.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s(Joke, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Joke;
function ErrorBoundary() {
  _s2();
  const {
    jokeId
  } = useParams();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-container", children: "What you're trying to do is not allowed." }, void 0, false, {
        fileName: "app/routes/jokes.$jokeId.tsx",
        lineNumber: 126,
        columnNumber: 14
      }, this);
    }
    if (error.status === 403) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-container", children: [
        'Sorry, but "',
        jokeId,
        '" is not your joke.'
      ] }, void 0, true, {
        fileName: "app/routes/jokes.$jokeId.tsx",
        lineNumber: 131,
        columnNumber: 14
      }, this);
    }
    if (error.status === 404) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-container", children: [
        'Huh? What the heck is "',
        jokeId,
        '"?'
      ] }, void 0, true, {
        fileName: "app/routes/jokes.$jokeId.tsx",
        lineNumber: 136,
        columnNumber: 14
      }, this);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-container", children: [
    'There was an error loading joke by the id "$',
    jokeId,
    '". Sorry.'
  ] }, void 0, true, {
    fileName: "app/routes/jokes.$jokeId.tsx",
    lineNumber: 141,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "+iRNFCBXk6qIZn1G6717fjvaDsM=", false, function() {
  return [useParams, useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "Joke");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Joke as default,
  meta
};
//# sourceMappingURL=/build/routes/jokes.$jokeId-2AYR63OG.js.map

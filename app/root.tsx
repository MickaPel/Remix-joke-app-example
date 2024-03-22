import type { LinksFunction } from "@remix-run/node";
import { 
  LiveReload, 
  Outlet,
  Meta,
  Links,
  useRouteError,
  isRouteErrorResponse,
  Scripts
} from "@remix-run/react";
import { PropsWithChildren } from "react";

import globalLargeStylesUrl from "~/styles/global-large.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";
import globalStylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  {
    rel: "stylesheet",
    href: globalMediumStylesUrl,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStylesUrl,
    media: "screen and (min-width: 1024px)",
  },
];

// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1"
//         />
//         <title>Remix: So great, it's funny!</title>
//         <Links />
//       </head>
//       <body>
//         <Outlet />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }


//logic for render error in document
function Document({
  children,
  title = "Remix: So great, it's funny!",
}: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <title>{title}</title>
        <Links />
        <script async type='module' src='https://unpkg.com/@google/model-viewer@^3.3.0/dist/model-viewer.min.js'></script>
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document
        title={`${error.status} ${error.statusText}`}
      >
        <div className="error-container">
          <h1>
            {error.status} {error.statusText}
          </h1>
        </div>
      </Document>
    );
  }

  const errorMessage = error instanceof Error ? error.message : 'Unknown error'
  return (
    <Document title='Uh-oh!'>
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{errorMessage}</pre>
      </div>
    </Document>
  )
}

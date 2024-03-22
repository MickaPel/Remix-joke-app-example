// First, the new logout route is just there to make it easy for us to logout. The reason that we're using an action (rather than a loader) is because we want to avoid CSRF problems by using a POST request rather than a GET request. This is why the logout button is a form and not a link. 
// Additionally, Remix will only re-call our loaders when we perform an action, so if we used a loader then the cache would not get invalidated. The loader is just there in case someone somehow lands on that page, we'll just redirect them back home.

import { ActionArgs, redirect } from "@remix-run/node"
import { logout } from "~/utils/session.server"


export const action = async ({ request }: ActionArgs) => {
    return logout(request);
}
// export const action = async ({ request }: ActionArgs) =>
//   logout(request);

export const loader = async () => redirect("/");
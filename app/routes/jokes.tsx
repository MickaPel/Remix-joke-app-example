import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { 
    Form,
    Link, 
    Outlet ,
    useLoaderData 
} from "@remix-run/react";
import { db } from "~/utils/db.server";

import stylesUrl from "~/styles/jokes.css";
import { getUser } from "~/utils/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = async ({request}: LoaderArgs) => {

    return json({
        jokes: await db.joke.findMany({
          orderBy: { createdAt: "desc" },
          select: { id: true, name: true },
          take: 5,
        }),
        user: await getUser(request),
    });
  };

export default function JokesRoute() {
    const data = useLoaderData<typeof loader>();
    return (
        <div className="jokes-layout">
            <header className="jokes-header">
            <div className="container">
                <h1 className="home-link">
                <Link
                    to="/"
                    title="Remix Jokes"
                    aria-label="Remix Jokes"
                >
                    <span className="logo">🤪</span>
                    <span className="logo-medium">J🤪KES</span>
                </Link>
                </h1>
                {data.user ? (
                    <div className="user-info">
                        <span>{`Hi ${data.user.username}`}</span>
                        <Form action="/logout" method="post">
                            <button type="submit" className="button">
                                Logout
                            </button>
                        </Form>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
            </header>
            <main className="jokes-main">
            <div className="container">
                <div className="jokes-list">
                    {/* to="." This link will effectively tell Remix to reload the data for the current route */}
                    <Link to=".">Get a random joke</Link>
                    <p>Here are a few more jokes to check out:</p>
                    <ul>
                        {data.jokes.map(({id, name}) => (
                            <li key={id}>
                                <Link prefetch="intent" to={id}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="new" className="button">Add your own</Link>
                </div>
                <div className="jokes-outlet">
                    <Outlet />
                </div>
            </div>
            </main>
        </div>
    )
}
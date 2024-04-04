import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import styleSheet from '../styles/index.css';

export const links: LinksFunction = () => {
    return [
      { rel: "stylesheet", href: styleSheet },
    ];
};

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch('https://interface.reali-store.com/api/models', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/html',
        'Sitename': `https://www.easyvidange.fr/`,
        'Authorization': `Bearer tokentest2`
      },
    });
    // We don't check value of response.ok here, we make it in the componenet where we call the function
    const result = (await response.json()); // use type assertion for the response
    return result;
  } catch (error) {
    // check the type of error because it automatically sets to "uknown"
    if (error instanceof Error) {
      // we can access message property in Error object to handle error
      return error;
    }
    else {
      // return Err type object with personalized message, type Err is here just for simplify to handle errors and be similar to Error object
      const result = { message: "An unexpected error occurred" }
      return result;
    }
  }
}

export default function IndexRoute() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
    return (
      <div className="container">
        <div className="content">
          <h1>
            Remix <span>Jokes! testBranch</span>
          </h1>
          {/* <iframe height="600" width="400" src="https://a0a8-82-138-89-54.ngrok-free.app" allow="xr-spatial-tracking">
            <model-viewer 
              alt="model" 
              // src="https://modelviewer.dev/shared-assets/models/Astronaut.glb" 
              src={data[2].model}
              camera-controls 
              ar 
              ar-modes="scene-viewer webxr quick-look"
            ></model-viewer>
          </iframe> */}
          <nav>
            <ul>
              <li>
                <Link to="jokes">Read Jokes</Link>
              </li>
              <li>
                <Link reloadDocument to="/jokes.rss">
                  RSS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
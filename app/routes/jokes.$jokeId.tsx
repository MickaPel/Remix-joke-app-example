import { ActionArgs, LoaderArgs, V2_MetaFunction, json, redirect } from "@remix-run/node";
import { Form, Link, isRouteErrorResponse, useLoaderData, useParams, useRouteError } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { getUserId, requireUserId } from "~/utils/session.server";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
    const { description, title } = data
        ? {
            description: `Enjoy the "${data.joke.name}" joke`,
            title: `${data.joke.name}`
        } : {description: 'joke not found', title: 'no joke'}
    return [
      { title: title },
      {
        name: "description",
        content: description,
      },
    ];
};

export const loader = async ({ params, request }: LoaderArgs) => {
    const userId = await getUserId(request);
    const joke = await db.joke.findUnique({
        where: { id: params.jokeId },
    });

    if(!joke){
        throw new Response("Joke not found", {
            status: 404,
        });
    }

    return json({
        isOwner : userId === joke.jokesterId,
        joke
    });
};

export const action = async ({
    params,
    request,
  }: ActionArgs) => {
    const form = await request.formData();
    if (form.get("intent") !== "delete") {
      throw new Response(
        `The intent ${form.get("intent")} is not supported`,
        { status: 400 }
      );
    }
    const userId = await requireUserId(request);
    const joke = await db.joke.findUnique({
      where: { id: params.jokeId },
    });
    if (!joke) {
      throw new Response("Can't delete what does not exist", {
        status: 404,
      });
    }
    if (joke.jokesterId !== userId) {
      throw new Response(
        "Pssh, nice try. That's not your joke",
        { status: 403 }
      );
    }
    await db.joke.delete({ where: { id: params.jokeId } });
    return redirect("/jokes");
};

export default function Joke() {
    const data = useLoaderData<typeof loader>();
    return (
        <div>
            <p>Here's your hilarious joke:</p>
            <p>{data.joke.content}</p>
            <Link to=".">"{data.joke.name}" Permalink</Link>
            {data.isOwner ? (
                <Form method="post">
                    <button name="intent" type="submit" value="delete" className="button">
                        Delete
                    </button>
                </Form>
            ) : null }
        </div>        
    )
}

export function ErrorBoundary() {
    const { jokeId } = useParams();
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 400) {
          return (
            <div className="error-container">
              What you're trying to do is not allowed.
            </div>
          );
        }
        if (error.status === 403) {
          return (
            <div className="error-container">
              Sorry, but "{jokeId}" is not your joke.
            </div>
          );
        }
        if (error.status === 404) {
          return (
            <div className="error-container">
              Huh? What the heck is "{jokeId}"?
            </div>
          );
        }
    }

    return (
      <div className="error-container">
        There was an error loading joke by the id "${jokeId}".
        Sorry.
      </div>
    );
}
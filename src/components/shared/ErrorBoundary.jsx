import {Link, useRouteError} from "react-router";

export default function ErrorBoundary() {
    const error = useRouteError();

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2 ">
            <h1>Oops! Something went wrong</h1>
            <p>{error?.statusText || error?.message}</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
}

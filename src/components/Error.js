import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>404!!</h1>
            <h2>Not Found</h2>
            <h4>{error.data}</h4>
        </div>
    )
}

export default Error;
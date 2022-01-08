import {useParams} from "react-router-dom";

export function WithParams() {
    const params = useParams();
    return (
        <>
            <h1>Dynamic Routes</h1>
            <p>{params.abc}</p>
        </>)
}

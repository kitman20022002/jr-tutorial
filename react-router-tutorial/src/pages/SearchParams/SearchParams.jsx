import { useSearchParams} from "react-router-dom";

export function SearchParams() {
    const [searchParams] = useSearchParams();
    return <h1>SearchParams : {searchParams.get('def')}</h1>
}

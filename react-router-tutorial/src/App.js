import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home/Home";
import {WithLink} from "./pages/WithLink/WithLink";
import {WithParams} from "./pages/WithParams/WithParams";
import {NoPage} from "./pages/NoPage/NoPage";
import {SearchParams} from "./pages/SearchParams/SearchParams";
import RouteNavLink from "./pages/RouteNavLink/RouteNavLink";
import {UseHistory} from "./pages/UseHistory/UseHistory";

function App() {
    return (
        <>
            <p>Version 6.x.x</p>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="dynamic-routes-with-params/:abc" element={<WithParams/>}/>
                <Route path="with-link" element={<WithLink/>}/>
                <Route path="search-params" element={<SearchParams/>}/>
                <Route path="react-nav-link" element={<RouteNavLink/>}/>
                <Route path="use-history" element={<UseHistory/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </>
    );
}

export default App;

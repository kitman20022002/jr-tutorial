import {NavLink} from "react-router-dom";

export default function RouteNavLink() {

    return (
        <div style={{display: "flex"}}>
            <NavLink
                style={({isActive}) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "green"
                    };
                }}
                to={`/react-nav-link`}
            >
                abc
            </NavLink>

            <NavLink
                style={({isActive}) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "green"
                    };
                }}
                to={`/with-params/3`}
            >
                abc
            </NavLink>

        </div>
    );
}

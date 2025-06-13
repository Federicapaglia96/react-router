
import { NavLink } from "react-router-dom";



function AppHeader() {
    return (
        <>
            <main>
                <ul className="navlinklista">
                    <li className="navlink">
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink to="/chisiamo">Chi Siamo</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink to="/ListaPosts">Lista Posts</NavLink>
                    </li>

                </ul>
            </main>
        </>


    );
}

export default AppHeader;
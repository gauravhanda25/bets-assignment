import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Grids from "./components/Grids";
import "./Home.scss";
import { useStoreState } from "easy-peasy";

const PublicHome = () => {
    const user = useStoreState((state) => state.bets.loggedInUser);

    return (
        <div className="wrapper">
            <main>
                <div className="header">
                    <h1>This is unauthenticated version of home page.</h1>
                    <p>
                        {" "}
                        <Link to="/login"> Login </Link> to see full version of
                        home page.{" "}
                    </p>
                </div>
                <Grids />
            </main>
        </div>
    );
};

export default React.memo(PublicHome);

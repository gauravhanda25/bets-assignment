import React from "react";
import Navbar from './components/Navbar';
import Grids from './components/Grids';
import './Home.scss';
import { useStoreState } from "easy-peasy";


const Home = () => {
    const user = useStoreState((state) => state.bets.loggedInUser);

    return (
        <div className="wrapper">
            <Navbar />
            <main>
                <h1>Welcome {user.email}</h1>
                <Grids />
            </main>
        </div>
    );
};

export default React.memo(Home);

import React from "react";
import {useStoreActions} from 'easy-peasy';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const logoutUser = useStoreActions((actions) => actions.bets.logoutUser);
    
    const logout = () => {
        let res = logoutUser();
        if(res) 
           navigate('/login');
    }
    return (
        <nav>
            <header>
                <span />
                Test
                <a />
            </header>
            <ul>
                <li>
                    <span>Navigation</span>
                </li>
                <li>
                    <a className="active">Dashboard</a>
                </li>
                <li>
                    <a>Statistics</a>
                </li>
                <li>
                    <a>Roadmap</a>
                </li>
                <li>
                    <a>Milestones</a>
                </li>
                <li>
                    <a>Tickets</a>
                </li>
                <li>
                    <a>GitHub</a>
                </li>
                <li>
                    <a>FAQ</a>
                </li>
                <li>
                    <span>Other</span>
                </li>
                <li>
                    <a>Search</a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a onClick={() => logout()}>Logout</a>
                </li>
            </ul>
        </nav>
    );
};

export default React.memo(Navbar);

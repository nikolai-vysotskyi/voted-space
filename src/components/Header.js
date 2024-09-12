import React from "react";
import Logo from "./Logo";

import {
    NavLink,
} from "react-router-dom";

const Header = () => {
    return (
        <section className='header'>
            <div className='header_wrapper'>
                <div>
                    <NavLink className='header_link-left' to="/">
                        <Logo/>
                    </NavLink>
                </div>
                <div>
                    <NavLink className='header_link-right' to="/">Главная</NavLink>
                    <NavLink className='header_link-right' to="/votes">Голосования</NavLink>
                    <button className='header_link-right'>Провести голосование</button>
                </div>
            </div>
        </section>
    );
};

export default Header;

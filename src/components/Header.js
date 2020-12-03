import React from "react";
import Logo from "./Logo";

import {
     Link,
} from "react-router-dom";

const Header = ({}) => {
    return (
        <div className='header'>
            <div className='header_wrapper'>
                <div>
                    <Logo/>
                </div>
                <div>
                    <Link to="/">Главная</Link>
                    <Link to="/votes">Голосования</Link>
                    <button >Провести голосование</button>
                </div>
            </div>
        </div>
    );
};

export default Header;

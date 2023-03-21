import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
import {useNavigate} from "react-router-dom";

const Header = props => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    return <React.Fragment>
        <header className={classes.header}>
            <h1 onClick={handleClick}>Хата на Реакті</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
            <button>Filter by Name</button>
            <button>Filter by Price</button>
        </div>
    </React.Fragment>
}

export default Header;
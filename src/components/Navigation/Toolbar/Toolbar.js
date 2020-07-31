import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <Button btnType='BurgerIcon' clicked={props.toggleSideDrawer}>
                <span style={props.visibility ? {display:'none'} : {display:'block'}}>&#9776;</span>
                <span style={props.visibility ? {display:'block'} : {display:'none'}}>&times;</span>
            </Button>
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;


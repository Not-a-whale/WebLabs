import classes from './Footer.module.css';

import { Link } from 'react-router-dom';

export const Footer = () => {
    return <footer className={classes.footer}>
        <Link className={classes.link} to="/About" >Опис функціоналу WEB-додатку та предметної галузі</Link>
        <p>© 2023 Хата на Реакті. Developed by group №5 ZPI-zp01</p>
    </footer>
}
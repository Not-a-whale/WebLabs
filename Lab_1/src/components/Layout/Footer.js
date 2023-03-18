import classes from './Footer.module.css';

export const Footer = () => {
    return <footer className={classes.footer}>
        <a className={classes.link} id="foodArticle" target="_blank" href="https://en.wikipedia.org/wiki/Food_delivery" >Food delivery service article</a>
        <a className={classes.link} id="reactArticle" target="_blank" href="https://en.wikipedia.org/wiki/React_(web_framework)" >React article</a>
        <p>© 2023 Хата на Реакті</p>
    </footer>
}
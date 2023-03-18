import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Смачна їжа, що доставлена вам!</h2>
            <p>
                Виберіть вашу улюблену їжу з нашого широкого меню і замовте доставку
            </p>
            <p>
                Всі наші страви приготовані з найкращих інгредієнтів, щоб забезпечити
                вам справжній смак і здоров'я.
            </p>
        </section>
    );
};

export default MealsSummary;
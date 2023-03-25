
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Суші',
        description: 'Найкращі суші в місті',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Шницель',
        description: 'Німецький шницель зі свинини',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Бургер Барбекю',
        description: 'Американський, важкий, м\'ясний',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Зеленина',
        description: 'Здорова їжа для здорових людей',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map((meal) => <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);

    return (
        <section className={classes.meals}>
        <Card>
            <ul>{meals}</ul>
        </Card>
        </section>
    );
}

export default AvailableMeals;
import classes from './Table.module.css';

export const Table = (props) => {
    return <div>
        <h3 className={classes.menuHeading}>
            Наші ціни
        </h3>
        <table id='table'>
            <tr>
                <th>Назва</th>
                <th></th>
                <th>Ціна</th>
            </tr>
            <tr>
                <td>Суші</td>
                <td> - </td>
                <td>700.00</td>
            </tr>
            <tr>
                <td>Шницель</td>
                <td> - </td>
                <td>22.99</td>
            </tr>
            <tr>
                <td>Бургер Барбекю</td>
                <td> - </td>
                <td>16.50</td>
            </tr>
            <tr>
                <td>Зеленина </td>
                <td> - </td>
                <td>12.99</td>
            </tr>
            <tr>
                <td>Вода</td>
                <td> - </td>
                <td>7.0</td>
            </tr>
        </table>
    </div>

}
import classes from './Table.module.css';

export const Table = (props) => {
    return <div>
        <h3 className={classes.menuHeading}>
            Наші ціни
        </h3>
        <table id='table'>
		<thead>
            <tr>
                <th>Назва</th>
                <th>Ціна</th>
            </tr>
		</thead>
		<tbody>
            <tr>
                <td>Суші</td>
                <td>700.00</td>
            </tr>
            <tr>
                <td>Шницель</td>
                <td>22.99</td>
            </tr>
            <tr>
                <td>Бургер Барбекю</td>
                <td>16.50</td>
            </tr>
            <tr>
                <td>Зеленина </td>
                <td>12.99</td>
            </tr>
            <tr>
                <td>Вода</td>
                <td>7.0</td>
            </tr>
		</tbody>
        </table>
    </div>

}
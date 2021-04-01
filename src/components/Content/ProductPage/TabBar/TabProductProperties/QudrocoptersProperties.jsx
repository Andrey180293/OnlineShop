const QudrocoptersProperties = ({ page }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Бренд</td>
          <th> {page.properties.brend}</th>
        </tr>
        <tr>
          <td>Країна виробник</td>
          <th> {page.properties.country}</th>
        </tr>

        <tr>
          <td>Колiр</td>
          <th> {page.properties.color}</th>
        </tr>
        <tr>
          <td>Ємність акумулятора </td>
          <th> {page.properties.batteryCapacity} ma</th>
        </tr>

        <tr>
          <td> Радіус дії </td>
          <th> {page.properties.radius} м</th>
        </tr>

        <tr>
          <td>Тривалість польоту </td>
          <th> {page.properties.flightDuration} хв</th>
        </tr>

        <tr>
          <td>Максимальна швидкiсть </td>
          <th> {page.properties.maxSpeed} км</th>
        </tr>
        <tr>
          <td>Вага </td>
          <th> {page.properties.weigth} гр</th>
        </tr>
      </tbody>
    </table>
  );
};
export default QudrocoptersProperties;

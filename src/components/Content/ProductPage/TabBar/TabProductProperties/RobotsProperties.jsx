const RobotsProperties = ({ page }) => {
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
          <th> {page.properties.volumeOfBattery} ma</th>
        </tr>

        <tr>
          <td> Час заряджання </td>
          <th> {page.properties.chargingHour} г</th>
        </tr>

        <tr>
          <td>Максимальний час роботи </td>
          <th> {page.properties.maxTime} хв</th>
        </tr>

        <tr>
          <td>Вага </td>
          <th> {page.properties.weigth} гр</th>
        </tr>
      </tbody>
    </table>
  );
};
export default RobotsProperties;

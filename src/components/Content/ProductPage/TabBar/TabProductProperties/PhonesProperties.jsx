const PhonesProperties = ({ page }) => {
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
          <td>Діагональ екрана</td>
          <th> {page.properties.diagonal}</th>
        </tr>
        <tr>
          <td>Оперативна пам'ять</td>
          <th> {page.properties.operatingMemory}</th>
        </tr>
        <tr>
          <td>Вбудована пам'ять</td>
          <th> {page.properties.memory}</th>
        </tr>
        <tr>
          <td>Операційна система</td>
          <th> {page.properties.operatingSsystem}</th>
        </tr>

        <tr>
          <td>Вага </td>
          <th> {page.properties.weigth} гр</th>
        </tr>
      </tbody>
    </table>
  );
};
export default PhonesProperties;

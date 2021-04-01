import "../TabBar.scss";

const MotorcyclesProperties = ({ page }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Бренд</td>
          <th> {page.properties.brend}</th>
        </tr>
        <tr>
          <td>Клас</td>
          <th> {page.properties.сlas}</th>
        </tr>

        <tr>
          <td>Колiр</td>
          <th> {page.properties.color}</th>
        </tr>
        <tr>
          <td>Кубатура</td>
          <th> {page.properties.cubage} см</th>
        </tr>

        <tr>
          <td>Максимальна швидкiсть </td>
          <th> {page.properties.maxSpeed} км</th>
        </tr>

        <tr>
          <td>Обэм бака </td>
          <th> {page.properties.volumeOfTank} л</th>
        </tr>
      </tbody>
    </table>
  );
};
export default MotorcyclesProperties;

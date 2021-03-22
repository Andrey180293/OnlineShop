import "../TabBar.scss";

const MotorcyclesProperties = ({ page }) => {
  return (
    <div>
      <p>
        <span className="spanProps">Бренд </span>
        {page.properties.brend}
      </p>
      <p>
        <span className="spanProps">Клас </span>
        {page.properties.class}
      </p>
      <p>
        <span className="spanProps">Колiр </span>
        {page.properties.color}
      </p>
      <p>
        <span className="spanProps">Кубатура см </span>
        {page.properties.cubage}
      </p>
      <p>
        <span className="spanProps">Максимальна швидкiсть км </span>
        {page.properties.maxSpeed}
      </p>
      <p>
        <span className="spanProps">Обэм бака л </span>
        {page.properties.volumeOfTank}
      </p>
    </div>
  );
};
export default MotorcyclesProperties;

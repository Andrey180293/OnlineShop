const QudrocoptersProperties = ({ page }) => {
  return (
    <div>
      <p>
        <span className="spanProps">Бренд </span>
        {page.properties.brend}
      </p>
      <p>
        <span className="spanProps">Краiна виробник </span>
        {page.properties.country}
      </p>
      <p>
        <span className="spanProps">Колiр </span>
        {page.properties.color}
      </p>
      <p>
        <span className="spanProps">Ємність акумулятора </span>
        {page.properties.batteryCapacity}
      </p>
      <p>
        <span className="spanProps"> Радіус дії </span>
        {page.properties.radius}
      </p>
      <p>
        <span className="spanProps">Тривалість польоту </span>
        {page.properties.flightDuration}
      </p>
      <p>
        <span className="spanProps">Максимальна швидкiсть км </span>
        {page.properties.maxSpeed}
      </p>
      <p>
        <span className="spanProps">Вага </span>
        {page.properties.weigth}
      </p>
    </div>
  );
};
export default QudrocoptersProperties;

const RobotsProperties = ({ page }) => {
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
        {page.properties.volumeOfBattery} ma
      </p>
      <p>
        <span className="spanProps"> Час заряджання </span>
        {page.properties.chargingHour} годин
      </p>

      <p>
        <span className="spanProps">Максимальний час роботи </span>
        {page.properties.maxTime} хв
      </p>
      <p>
        <span className="spanProps">Вага </span>
        {page.properties.weigth}
      </p>
    </div>
  );
};
export default RobotsProperties;

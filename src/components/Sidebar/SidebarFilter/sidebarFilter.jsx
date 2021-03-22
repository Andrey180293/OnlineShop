import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const sidebarFilter = ({ product, setFilter }) => {
  const filterArr = () => {
    const arr = [];
    product.map((el) => {
      return arr.push(el.properties);
    });
    return arr;
  };
  const filterCountry = (arr) => {
    return arr
      .map((el, i) => el.country)
      .filter((f, i, a) => a.indexOf(f) === i);
  };

  const filterBrend = (arr) => {
    return arr.map((el) => el.brend).filter((f, i, a) => a.indexOf(f) === i);
  };

  const filterClass = (arr) => {
    return arr.map((el) => el.class).filter((f, i, a) => a.indexOf(f) === i);
  };
  const filterVolumeOfTank = (arr) => {
    return arr
      .map((el) => el.volumeOfTank)
      .filter((f, i, a) => a.indexOf(f) === i);
  };
  const filterCubage = (arr) => {
    return arr.map((el) => el.cubage).filter((f, i, a) => a.indexOf(f) === i);
  };
  //------------------quadrocopters
  const filterFligthDuration = (arr) => {
    return arr
      .map((el) => el.flightDuration)
      .filter((f, i, a) => a.indexOf(f) === i);
  };

  const filterRadius = (arr) => {
    return arr.map((el) => el.radius).filter((f, i, a) => a.indexOf(f) === i);
  };
  const filterMaxSpeed = (arr) => {
    return arr.map((el) => el.maxSpeed).filter((f, i, a) => a.indexOf(f) === i);
  };
  return (
    <div
    //  className="col s12 m0 l2 hide-on-med-and-down"
    // style={{ minHeight: "100vh" }}
    >
      {
        //-------------------------Загальнi фiльтри------------------------------------------------
      }
      {filterBrend(filterArr())[0] !== undefined && <p>Бренд</p>}
      {filterBrend(filterArr())[0] !== undefined &&
        filterBrend(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" onChange={() => setFilter(el)} />
                <span>{el}</span>
              </label>
            </p>
          );
        })}
      {filterCountry(filterArr())[0] !== undefined && <p>Краiна</p>}
      {filterCountry(filterArr())[0] !== undefined &&
        filterCountry(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}

      {filterMaxSpeed(filterArr())[0] !== undefined && (
        <p>Максимальна швидкiсть </p>
      )}
      {filterMaxSpeed(filterArr())[0] !== undefined &&
        filterMaxSpeed(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}
      {
        //--------------------- фiльтри Motorcycles------------------------------------------------
      }
      {filterClass(filterArr())[0] !== undefined && <p>Клас </p>}
      {filterClass(filterArr())[0] !== undefined &&
        filterClass(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}

      {filterVolumeOfTank(filterArr())[0] !== undefined && <p>Обэм Бака </p>}
      {filterVolumeOfTank(filterArr())[0] !== undefined &&
        filterVolumeOfTank(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}

      {filterCubage(filterArr())[0] !== undefined && <p>Кубатура </p>}
      {filterCubage(filterArr())[0] !== undefined &&
        filterCubage(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}
      {
        //--------------------------------------- фiльтри Qudrocopters----------------------------------------------
      }

      {filterRadius(filterArr())[0] !== undefined && <p>Радiус дii </p>}
      {filterRadius(filterArr())[0] !== undefined &&
        filterRadius(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}

      {filterFligthDuration(filterArr())[0] !== undefined && (
        <p>Тривалiсть польоту </p>
      )}
      {filterFligthDuration(filterArr())[0] !== undefined &&
        filterFligthDuration(filterArr()).map((el) => {
          return (
            <p>
              <label>
                <input type="checkbox" />
                <span>{el}</span>
              </label>
            </p>
          );
        })}
    </div>
  );
};
export default sidebarFilter;

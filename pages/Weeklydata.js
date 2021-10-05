import React from "react";
import moment from "moment";
import Image from "next/dist/client/image";
export default function Weeklydata({ weekdata }) {
  console.log(weekdata.list);
  return (
    <div className="weekly">
      <h3 className="weekly__title">
        Weekly <span>Weather</span>
      </h3>

      {weekdata.list.length > 0 &&
        weekdata.list.map((weather, index) => {
          return (
            <div className="weekly__card" key={weather.dt}>
              <div className="weekly__inner">
                <div className="weekly__left-content">
                  <div>
                    <h3>{moment.unix(weather.dt).format("MMMM Do YYYY, h:mm:ss a")}</h3>
                    <h4>
                      <span>{weather.main.temp_max.toFixed(0)}&deg; C</span>
                      <span> {weather.main.temp_min.toFixed(0)}&deg; C</span>
                    </h4>
                  </div>
                </div>

                <div className="weekly__right-content">
                  <div className="weekly__icon-wrapper">
                    <div>
                      <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" layout="fill" />
                    </div>
                  </div>

                  <h5>{weather.weather[0].description}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

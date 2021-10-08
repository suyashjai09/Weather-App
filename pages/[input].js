import React from "react";
import moment from "moment";
import Image from "next/image";
import Weeklydata from "./Weeklydata";
import { useRouter } from "next/router";
import Home from ".";
import useData from "./hooks/useData";
import { Button } from "react-bootstrap";
export const getServerSideProps = async (context) => {
  const Api_Key = "37a66cf7e33cc142be872918c6906679";

  const info = context.params.input;

  const city = info.split("-")[0];
  const country = info.split("-")[1];
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
  const data = await res.json();
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${data.id}&appid=${Api_Key}`);

  const weekdata = await response.json();

  return {
    props: {
      data,
      weekdata,
    },
  };
};
export default function TodayData({ data, weekdata }) {
  let hasData = 1;
  const { notFound, setnotFound } = useData();
  if (data.id) hasData = 0;
  const router = useRouter();

  return (
    <>
      {hasData ? (
        <div className="message">
          <h2>NO DATA FOUND</h2>
          <h2>Enter Valid details</h2>
          <Button style={{ marginLeft: "30px" }} onClick={() => router.push(`/`)}>
            Go back to HomePage
          </Button>
        </div>
      ) : (
        <div>
          <div>
            <Home />
          </div>

          <div>
            <div className="today">
              <div>
                <div>
                  <h1>
                    {data?.name} ({data?.sys?.country})
                  </h1>
                </div>
                <h2>
                  <span>{data?.main?.temp_max.toFixed(0)}&deg; C</span>
                  <span> {data?.main?.temp_min.toFixed(0)}&deg; C</span>
                </h2>
                <div>
                  <span>sunrise </span>
                  <span>{moment.unix(data?.sys?.sunrise).format("LT")}</span>
                </div>
                <div>
                  <span>sunset </span>
                  <span> {moment.unix(data?.sys?.sunset).format("LT")}</span>
                </div>
              </div>
              <div className="today__right-content">
                <div className="today__icon-wrapper">
                  <Image src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt="Weather Icon" layout="fill" />
                </div>

                <h3>{data?.weather[0]?.description}</h3>
              </div>
            </div>

            <Weeklydata weekdata={weekdata} />
          </div>
        </div>
      )}
    </>
  );
}

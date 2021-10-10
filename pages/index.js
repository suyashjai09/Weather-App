import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useData from "../hooks/useData";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export default function Home() {
  const { City, Country, handleChange, handleCountryChange, enableButton, setEnableButton } = useData();
  const router = useRouter();
  // const styling = {
  //   backgroundImage: `url('./img2.jpg')`,
  //   objectFit: "fill",
  // };

  return (
    <>
      <div className="detail">
        <div style={{ textAlign: "center" }}>
          <h3>Weather App</h3>
        </div>
        {/* <Image src="/img.jpg" alt="page" height="300" width="100" margin-top="100px" margin-left="5px" margin-right="5px" padding-top="30px" /> */}
        <div className="input_form">
          <form>
            <input className="inputbox" type="text" onChange={handleChange} placeholder="Enter City" />

            {/* <label className="label_n">
              Country:
              <input className="inputbox" type="text" onChange={handleCountryChange} />
            </label> */}
          </form>
          <Button
            disabled={enableButton}
            style={
              !enableButton
                ? {
                    marginRight: "20%",
                    marginLeft: "5%",
                  }
                : {
                    cursor: "not-allowed",
                    disabled: "true",
                    marginRight: "20%",
                    marginLeft: "5%",
                  }
            }
            onClick={() => router.push(`/${City}`)}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

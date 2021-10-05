import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useData from "./hooks/useData";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export default function Home() {
  const { City, Country, handleChange, handleCountryChange } = useData();
  const router = useRouter();
  return (
    <>
      <div className="detail">
        <div className="input_form">
          <form>
            <label className="label_n">
              City:
              <input className="inputbox" type="text" onChange={handleChange} />
            </label>
            <label className="label_n">
              Country:
              <input className="inputbox" type="text" onChange={handleCountryChange} />
            </label>
          </form>
          <Button style={{ marginRight: "30%" }} onClick={() => router.push(`/${City}-${Country}`)}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

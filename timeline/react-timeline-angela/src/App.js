import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", height: "95vh" }}>
        <Chrono items={data} mode="VERTICAL_ALTERNATING" cardHeight='10' 
          fontSizes={{cardSubtitle: '0.85rem', cardText: '0.8rem', cardTitle: '1.15rem', title: '1.5rem',}}
          theme={{primary: '#2596be',secondary: '#FFD301'}}>
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/laptop--v1.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/innovation.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/hot-line.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/adobe-logo.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/wi-fi-connected.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/personal-hotspot.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/conference-call--v1.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/conference-call--v1.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/lights.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/approval.png"
              alt="mail-box"
            />
            {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/conference-call--v1.png"
              alt="reddit"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/lights.png"
              alt="reddit"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/approval.png"
              alt="reddit"
            /> */}
          </div>
        </Chrono>
      </div>
    </div>
  );
}

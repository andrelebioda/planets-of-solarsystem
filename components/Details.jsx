"use client";

import { useState } from "react";

const Details = ({ data }) => {
  const planet = data[0];
  const name = planet.name;

  const [state, setState] = useState("overview");

  return (
    <>
      <div className="detail-container">
        <div className="img-wrapper">
          <img src={planet.images.planet} alt={planet.name} className={`${state == "overview" || state == "geology" ? "active" : ""}`} />
          <img src={planet.images.internal} alt={planet.name} className={`${state == "structure" ? "active" : ""}`} />
          <div className={`info ${state == "geology" ? "active" : ""}`}>
            <img src={planet.images.geology} alt={planet.name} />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-section">
            <h1>{planet.name}</h1>
            <div className={`content-tab ${state == "overview" ? "active" : ""}`}>
              <p>{planet.overview.content}</p>
              <span>
                Source:
                <a href={planet.overview.source} target="_blank">
                  Wikipedia
                </a>
              </span>
            </div>
            <div className={`content-tab ${state == "structure" ? "active" : ""}`}>
              <p>{planet.structure.content}</p>
              <span>
                Source:
                <a href={planet.structure.source} target="_blank">
                  Wikipedia
                </a>
              </span>
            </div>
            <div className={`content-tab ${state == "geology" ? "active" : ""}`}>
              <p>{planet.geology.content}</p>
              <span>
                Source:
                <a href={planet.geology.source} target="_blank">
                  Wikipedia
                </a>
              </span>
            </div>
          </div>
          <div className="btn-section">
            <button onClick={() => setState("overview")} className={`bg-${name.toLowerCase()} ${state == "overview" ? "active" : ""}`}>
              <span>01</span> Overview
            </button>
            <button onClick={() => setState("structure")} className={`bg-${name.toLowerCase()} ${state == "structure" ? "active" : ""}`}>
              <span>02</span> Internal Structure
            </button>
            <button onClick={() => setState("geology")} className={`bg-${name.toLowerCase()} ${state == "geology" ? "active" : ""}`}>
              <span>03</span> Surface Geology
            </button>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <span>ROTATION TIME</span>
          <strong>{planet.rotation}</strong>
        </div>
        <div className="info">
          <span>REVOLUTION TIME</span>
          <strong>{planet.revolution}</strong>
        </div>
        <div className="info">
          <span>RADIUS</span>
          <strong>{planet.radius}</strong>
        </div>
        <div className="info">
          <span>AVERAGE TEMP.</span>
          <strong>{planet.temperature}</strong>
        </div>
      </div>
    </>
  );
};

export default Details;

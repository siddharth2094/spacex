import React, { useEffect, useState } from "react";

const Program = ({ data }) => {
  console.log(data.rocket);
  const [img, setImg] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setImg(data.links.mission_patch_small);
      } else {
        setImg(data.links.mission_patch);
      }
    };
    if (window.innerWidth <= 700) {
      setImg(data.links.mission_patch_small);
    } else {
      setImg(data.links.mission_patch);
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="common_main" key={data.flight_number}>
      <span>
        <img src={img} />
      </span>
      <h5>
        {data.mission_name}
        {" #"}
        {data.flight_number}
      </h5>
      <div className="tags mission">
        <span>
          <ul>
            <span>Mission Ids:</span>{" "}
            {data.mission_id && data.mission_id.length
              ? data.mission_id.map((m) => <li>{m}</li>)
              : ""}
          </ul>
        </span>
      </div>
      <div className="tags">
        <span>Launch Year:</span> <span>{data.launch_year}</span>
      </div>
      <div className="tags">
        <span>Successful Launch:</span>{" "}
        <span>{data.launch_success ? "True" : "False"}</span>
      </div>
      <div className="tags">
        <span>Successful Landing:</span>{" "}
        <span>
          {data.rocket.first_stage &&
          data.rocket.first_stage.cores.length &&
          data.rocket.first_stage.cores[0].land_success
            ? "True"
            : "False"}
        </span>
      </div>
    </div>
  );
};

export default Program;

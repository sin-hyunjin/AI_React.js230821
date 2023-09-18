import React from "react";

const ResultItem = ({data}) => {
  return (
    <div className="item">
        <a href={data.link} target="_blank">
      <div className="img">
        <img src={data.thumbnail} alt='img'/>
      </div>

        </a>
      <div className="text">
        <span>{data.title.length > 40 ? data.title.substr(0,39) + "..." : data.title}</span>
      </div>
    </div>
  );
};

export default ResultItem;

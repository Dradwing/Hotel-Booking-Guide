import React from "react";
import Cardforpopular from "../Cards/cardforpopular";
import popular from "../../images";

function Popular() {
  return (
    <>
      <h3>Popular in India</h3>
      <div className="popular">{popular.map(createcard)}</div>
    </>
  );
}
function createcard(data) {
  return <Cardforpopular key={data.id} name={data.name} url={data.image_url} />;
}
export default Popular;

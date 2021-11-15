import React from "react";
import Cardforpast from "../Cards/Cardsforpast";

function Pastsearch(props) {
  return (
    <>
      <h3>Continue your search</h3>
      {props.signedIn ? (
        props.history.length !== 0 ? (
          <div className="scrollforpast">
            {props.history
              .slice(0)
              .reverse()
              .map((history) =>
                Createcardforhistory(history, props.sethistory)
              )}
          </div>
        ) : (
          <p style={{ textAlign: "center", fontSize: "xx-large" }}>
            No visited hotels
          </p>
        )
      ) : (
        <p style={{ textAlign: "center", fontSize: "xx-large" }}>
          Sign-In to get your visited hotels
        </p>
      )}
    </>
  );
}
function Createcardforhistory(history, sethistory) {
  return <Cardforpast history={history} sethistory={sethistory} />;
}
export default Pastsearch;

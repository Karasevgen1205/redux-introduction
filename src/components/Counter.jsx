import React from "react";
import { inc, dec, rnd } from "../action";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1 id="counter">{counter}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(dec())}
      >
        DEC
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(inc())}
      >
        INC
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(rnd())}
      >
        RND
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     connect: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {

//   return {};
// };

// export default connect(mapStateToProps)(Counter);

export default Counter;

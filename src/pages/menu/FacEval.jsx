import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsFacEval } from "../../features/user/userApiSlice";

import {
  selectIsFacEval,
  selectIsFacEvalLoading,
  selectIsFacEvalError,
} from "../../features/user/userSlice";

import "../../styles/facEval.css";

const FacEval = () => {
  const dispatch = useDispatch();

  const isFacEval = useSelector(selectIsFacEval);
  const loading = useSelector(selectIsFacEvalLoading);
  const error = useSelector(selectIsFacEvalError);

  useEffect(() => {
    console.log("FacEval.jsx: Dispatching getIsFacEval thunk.");
    dispatch(getIsFacEval());
  }, [dispatch]);

  return (
    <div className="fac-eval-container">
      <h2>Faculty Evaluation Status</h2>

      {loading && <p>Loading status...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {!loading && !error && (
        <div className="status-display">
          {isFacEval ? (
            <p className="status-active">
              Faculty evaluation is currently **ACTIVE**.
            </p>
          ) : (
            <p className="status-inactive">
              Faculty evaluation is currently **INACTIVE**.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FacEval;

import React from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupDoors from "./GroupDoors";
import Locks from "../Doors/Locks";

const GroupLayout = ({
  groups,
  state,
  setState,
  groupLocks,
  isLoading,
  setIsLoading,
}) => {
  return (
    // <Router>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <GroupDoors
            isLoading={isLoading}
            //   groups={groups}
            setState={setState}
            state={state}
            setIsLoading={setIsLoading}
          />
        }
      />


      <Route
        exact
        path="/doors"
        element={
          <Locks
            isLoading={isLoading}
            groupLocks={groupLocks}
            setState={setState}
            state={state}
            setIsLoading={setIsLoading}
          />
        }
      />
    </Routes>

    // </Router>
  );
};

export default connect((state) => ({
  user: state.user_reducer,
  groupLocks: state.door_reducer,
}))(GroupLayout);

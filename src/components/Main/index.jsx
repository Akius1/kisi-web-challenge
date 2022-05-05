import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import "./main.css";
import environment from "../../environment";
import { connect } from "react-redux";
import { userAction } from "../../store/actions/user.action";
import { groupAction } from "../../store/actions/groups.action";

import { Typography } from "@material-ui/core";
import GroupLayout from "../Groups/GroupLayout";
const Main = ({ user, groups, dispatch }) => {
  useEffect(() => {
    dispatch(
      userAction(environment.domain, environment.email, environment.password)
    );
  }, []);

  const { response } = user;

  useEffect(() => {
    if (response.email) {
      dispatch(
        groupAction(environment.domain, environment.email, environment.password)
      );
    }
  }, []);
  //   console.log(user, groups);

  return (
    <Box className="main">
      <div className="title-style">
        <p className="group-count">
          Groups <span > {groups?.response?.data?.length}</span>
        </p>
        <p
         className="group-count-detail"
        >
          add users to group and assign different access right
        </p>
      </div>

      <GroupLayout groups={groups?.response?.data} />
    </Box>
  );
};

// export default Main

export default connect((state) => ({
  user: state.user_reducer,
  groups: state.groups_reducer,
}))(Main);

import React from "react";
import { Box, TextField, Button, } from "@material-ui/core";
import "./group.css";
import { useStyle } from "../../style/style";
import GroupCard from "./groupCard";

const GroupLayout = ({ groups }) => {
  const classes = useStyle();
  return (
    <Box className="groups">
      <div className="search-wrapper">
        <TextField
          placeholder="search groups"
          variant="outlined"
          InputProps={{
            className: classes.input,
          }}
        />
        <Button className={classes.buttons} children="add group" variant="outlined" />
      </div>

      <Box className="group-container">
        {groups?.length &&
          groups?.map((item) => <GroupCard key={item?.id} item={item}/>)}
      </Box>

      <Box
        className="pagination"
      >
        <div>Previous Page</div>
        <div>Page 1 of 1</div>
        <div>Next Page</div>
      </Box>
    </Box>
  );
};

export default GroupLayout;

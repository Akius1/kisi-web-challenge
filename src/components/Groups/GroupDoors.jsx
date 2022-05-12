import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import "./group.css";
import "../Doors/doors.css";
import { useStyle } from "../../style/style";
import GroupCard from "./groupCard";
import CustomizedProgressBars from "../CircularProgressBar";
import Button from "@mui/material/Button";

const GroupDoors = ({ isLoading, groups, setState, state, setIsLoading }) => {
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
        <Button
          className={classes.buttons}
          children="add group"
          variant="outlined"
        />
      </div>

      <Box className="group-container">
        {isLoading ? (
          <CustomizedProgressBars />
        ) : (
          groups?.length &&
          groups?.map((item) => (
            <GroupCard
              key={item?.id}
              item={item}
              setState={setState}
              state={state}
              setIsLoading={setIsLoading}
            />
          ))
        )}
      </Box>

      <Box className="pagination" sx={{ "& button": { m: 2 } }}>
        {/* <div className="pagination-left"></div> */}
        <Button
          variant="text"
          disabled
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 400,
            textTransform: "none",
            color:"rgb(74, 82, 255)",
          }}
        >
          Previous Page
        </Button>
        <div>Page 1 of 1</div>
        <Button disabled   sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 400,
            textTransform: "none",
            color:"rgb(74, 82, 255)",
          }}>
          Next Page
        </Button>
      </Box>
    </Box>
  );
};

export default GroupDoors;

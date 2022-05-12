import React from 'react';
import { Box, TextField, Button } from "@material-ui/core";
import "../Groups/group.css";
import "../Doors/doors.css";
// import { useStyle } from "../../style/style";
import DoorCard from "../Doors/doorCard";
import FormDialog from "../Modal";
import CustomizedProgressBars from "../CircularProgressBar";

const Locks = ({isLoading, groupLocks, state, setIsLoading}) => {
    // const classes = useStyle();
  return (
    <Box className="doors">
      <Box className="left-side">
        {/* <div class>

              </div> */}
        <div className="button-wrap">
          <Button className="text-wrap">General</Button>
        </div>

        <div className="button-wrap">
          <Button className="text-wrap">Doors</Button>
        </div>
      </Box>
      {/* {
       */}
      <Box className="group-doors">
        <FormDialog setIsLoading={setIsLoading} state={state}/>
        {isLoading ? (
          <CustomizedProgressBars />
        ) : groupLocks?.response?.data?.length ? (
          <Box className="doors-container">
            {groupLocks?.response?.data?.map((item) => (
              <DoorCard
                key={item?.id}
                item={item}
                setIsLoading={setIsLoading}
                state={state}
                isLoading={isLoading}
              />
            ))}{" "}
          </Box>
        ) : (
          <Box className="empty-state">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTMuNzUgNDMuMTI1SDU2LjI1QzU1LjIxNDUgNDMuMTI1IDU0LjM3NSA0My45NjQ1IDU0LjM3NSA0NVYxMDguNzVDNTQuMzc1IDEwOS43ODYgNTUuMjE0NSAxMTAuNjI1IDU2LjI1IDExMC42MjVIOTMuNzVDOTQuNzg1NSAxMTAuNjI1IDk1LjYyNSAxMDkuNzg2IDk1LjYyNSAxMDguNzVWNDVDOTUuNjI1IDQzLjk2NDUgOTQuNzg1NSA0My4xMjUgOTMuNzUgNDMuMTI1Wk01Ni4yNSAzNy41QzUyLjEwNzkgMzcuNSA0OC43NSA0MC44NTc5IDQ4Ljc1IDQ1VjEwOC43NUM0OC43NSAxMTIuODkyIDUyLjEwNzkgMTE2LjI1IDU2LjI1IDExNi4yNUg5My43NUM5Ny44OTIxIDExNi4yNSAxMDEuMjUgMTEyLjg5MiAxMDEuMjUgMTA4Ljc1VjQ1QzEwMS4yNSA0MC44NTc5IDk3Ljg5MjEgMzcuNSA5My43NSAzNy41SDU2LjI1WiIgZmlsbD0iIzE5MTkxOSIvPgo8cmVjdCB4PSI4Ni4yNSIgeT0iNzEuMjUiIHdpZHRoPSI1LjYyNSIgaGVpZ2h0PSIxMS4yNSIgcng9IjAuNzUiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg=="
              alt="Empty"
            />
            <p className="empty-text">You haven't added any door</p>
          </Box>
        )}
        {groupLocks?.response?.data?.length ? (
          <Box className="pagination">
            <div>Previous Page</div>
            <div>Page 1 of 1</div>
            <div>Next Page</div>
          </Box>
        ) : (
          ""
        )}
      </Box>
      {/* } */}
    </Box>
  )
}

export default Locks
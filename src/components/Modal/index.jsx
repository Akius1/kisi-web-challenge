import  React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "../Doors/doors.css";
import SelectAutoWidth from '../SelectField';
import environment from "../../environment";
import { connect } from "react-redux";
import { locksAction } from "../../store/actions/locks.action";
import { addLockActions } from '../../store/actions/doors.action';
import { doorAction } from "../../store/actions/doors.action";


 function FormDialog({locks, groupLocks,  setIsLoading, state, dispatch}) {

  const [open, setOpen] = useState(false);
  const [locksValue, setLocks] = React.useState('');
  let paths =  groupLocks?.response?.placeId ? groupLocks?.response?.placeId :groupLocks?.response?.data[0]?.placeId ;

  useEffect(()=>{
      dispatch(locksAction(environment.domain, environment.email, environment.password))
  }, [])

  console.log('locks',locks?.response?.data[0]?.placeId , groupLocks, state?.groupId)

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(locksAction(environment.domain, environment.email, environment.password, paths || locks?.response?.data[0]?.placeId))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setIsLoading(true)
     let data = {
         group_id: groupLocks?.response?.data[0]?.groupId || state?.groupId,
         lock_id: locksValue
     }
    dispatch(addLockActions(environment.domain, environment.email, environment.password,data))
    dispatch(doorAction(environment.domain, environment.email, environment.password, groupLocks?.response?.data[0]?.groupId || state?.groupId))

    setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    setOpen(false);
  }


  return (
    <>
        <Button className="add-door" variant="outlined"  onClick={handleClickOpen} sx={{textTransform: "capitalize",}}>
        Add Doors
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Doors</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Select Place"
            type="select"
            value={locks?.response?.data[0]?.place?.name ? locks?.response?.data[0]?.place?.name: groupLocks?.response?.data[0]?.place?.name }
            fullWidth
            variant="outlined"
          />
         
           <SelectAutoWidth  lock={locks?.response?.data} locksValue={locksValue} setLocks={setLocks}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
        
      
    </>
  );
}

export default connect((state) => ({
    user: state.user_reducer,
    groupLocks: state.door_reducer,
    locks: state.locks_reducer
  }))(FormDialog);
  
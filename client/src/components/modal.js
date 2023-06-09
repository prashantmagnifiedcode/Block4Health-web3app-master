import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    "& .MuiDialog-paperWidthSm": {
           
      backgroundColor: "white",
    },
  },
}));

export default function Modal(props) {
  const classes = useStyles();

  const { children, openPopup, setopenPopup,title,headershow } = props;
  return (
    <Dialog open={openPopup} className={classes.root}>
      
         {
        headershow ? null:
      <div className="absolute  top-2 right-2">
        <CloseIcon style={{fontSize:"17px"}} onClick={() => setopenPopup(false)}/></div>

         }
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

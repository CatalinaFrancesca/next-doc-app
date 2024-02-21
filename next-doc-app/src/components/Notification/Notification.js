import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function AlertPop(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

export const Notification = ({
  type,
  open,
  title,
  alertDuration,
  handleClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={alertDuration}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <AlertPop severity={type}>{title}</AlertPop>
    </Snackbar>
  );
};

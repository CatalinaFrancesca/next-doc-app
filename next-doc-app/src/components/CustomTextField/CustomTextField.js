import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)({
  borderRadius: 4,
  backgroundColor: "#fcfcfb",
  width: 400,
  "& ..MuiFormControl-root": {
    width: "auto",
  },
  "& label.Mui-focused": {
    color: "#3d4b57",
  },
  "&  fieldset.Mui-focused": {
    borderColor: "#red",
  },
  "& .MuiTextField-root": {
    width: "auto",
  },
});

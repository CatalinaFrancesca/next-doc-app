import { Button } from "@mui/base";
import clsx from "clsx";

export const CustomButton = ({
  buttonMessage,
  className = "",
  type,
  disabled,
  variant,
  onClick,
  icon,
}) => {
  return (
    <Button
      className={clsx(className)}
      type={type}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {icon}
      {buttonMessage}
    </Button>
  );
};

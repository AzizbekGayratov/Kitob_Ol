import { Button, ButtonProps } from "@mui/material";

const ButtonComponent = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;

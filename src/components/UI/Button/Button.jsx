import Btn from 'react-bootstrap/Button';

const Button = ({ children, type, onClick, disabled, size, variant }) => {
  return (
    <Btn disabled={disabled} onClick={onClick} variant={variant} type={type}
         size={size}>
      {children}
    </Btn>
  );
};
export default Button;

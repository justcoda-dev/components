//styled components
import styled from 'styled-components';
import Loading from '../../UI/Loading/Loading';

const buttonSizes = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.3rem',
};
const buttonTypes = {
  success: {
    background: '#198754',
    color: '#ffffff',
    opacity: '0.8',
    fontsize: '10px',
    hover: {
      background: '#008915',
      opacity: 1,
    },
  },
  dark: {
    background: '#212529',
    color: '#ffffffff',
    opacity: '0.8',
    hover: {
      background: '#212529',
      opacity: 1,
    },
  },
  light: {
    background: '#f4f4f4',
    color: '#000000',
    opacity: '0.8',
    hover: {
      background: '#f4f4f4',
      opacity: '1',
    },
  },
  danger: {
    background: '#dc3545',
    color: '#ffffffff',
    opacity: '0.8',
    hover: {
      background: '#c92b3a',
      opacity: '1',
    },
  },
};

const ButtonStyled = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: ${({ size }) => buttonSizes[size || '1rem']};
  border: ${({ type, outline }) =>
    outline
      ? `1px solid ${buttonTypes[type || 'success']?.background}`
      : 'none'};
  border-radius: 0.25rem;
  background: ${({ type, outline }) =>
    outline ? 'none' : buttonTypes[type || 'success']?.background};
  color: ${({ type, outline }) =>
    outline
      ? buttonTypes[type || 'success']?.background
      : buttonTypes[type || 'success']?.color};
  opacity: ${({ type, disabled }) =>
    disabled ? '0.5' : buttonTypes[type || 'success']?.opacity};
  transition: 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    background: ${({ type }) =>
      buttonTypes[type || 'success']?.hover?.background};
    color: ${({ outline }) => (outline ? '#ffffff' : null)};
  }
`;
// /styled components
const Button = ({
  outline,
  disabled,
  onClick,
  className,
  type,
  size,
  children,
  loadStatus,
}) => {
  return (
    <ButtonStyled
      disabled={disabled || loadStatus}
      type={type}
      onClick={onClick}
      className={className}
      size={size}
      outline={outline}
      loadStatus={loadStatus}
    >
      {loadStatus ? (
        <>
          Loading... <Loading size="sm" />
        </>
      ) : (
        children
      )}
    </ButtonStyled>
  );
};
export default Button;

import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ size }) => {
  return <Spinner size={size} variant="info" animation="border" />;
};
export default Loading;

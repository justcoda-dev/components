import { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    console.log('test component loaded');
  }, []);
  return <div></div>;
};
export default Test;

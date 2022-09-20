import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { selectRefreshToken } from '../store/selectors/userSelectors';
import scss from './registrationPage.module.scss';

const RegistrationPage = () => {
  const isAuth = useSelector(selectRefreshToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);
  return (
    <div className={scss.registration}>
      <h1>Registration</h1>
      <div className={scss.wrapper}>
        <RegistrationForm />
      </div>
      <p>
        Already have account ? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
export default RegistrationPage;

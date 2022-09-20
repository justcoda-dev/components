import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Test from '../components/Test/Test';
import Loading from '../components/UI/Loading/Loading';
import { selectRefreshToken } from '../store/selectors/userSelectors';
import Components from './Components';
import NotFoundPage from './NotFoundPage';
import EditPage from './pages/edit/EditPage';
import HomePage from './pages/home/HomePage';

const LayoutPage = () => {
  const refreshToken = useSelector(selectRefreshToken);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!refreshToken) {
      navigate('/login', { state: location.pathname });
    }
  }, [refreshToken]);

  return refreshToken ? (
    // <Container>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="edit/:type" element={<EditPage />} />
      <Route path="components/*" element={<Components />} />
      <Route path="test" element={<Test />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  ) : (
    // </Container>
    <Loading />
  );
};
export default LayoutPage;

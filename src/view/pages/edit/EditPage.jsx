import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import EditList from '../../../components/EditList/EditList';
import PaginationSelf from '../../../components/Pagination/Pagination';
import Loading from '../../../components/UI/Loading/Loading';
import {
  editAllPages,
  editList,
  editListPagesCount,
} from '../../../store/selectors/editSelectors';
import { getUsersEditAsync } from '../../../store/thunks/EditThunk';

// styled components
const EditPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// /styled components
const listTypes = {
  user: getUsersEditAsync,
  product: getUsersEditAsync,
  role: getUsersEditAsync,
  s: getUsersEditAsync,
};

const UsersEdit = () => {
  const list = useSelector(editList);
  const pagesCount = useSelector(editListPagesCount);
  const lastPage = useSelector(editAllPages);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const queryParamsPage = useMemo(
    () => parseInt(queryParams.page),
    [queryParams],
  );

  const totalPagesArr = useMemo(
    () => Array.from({ length: lastPage }, (_, i) => i + 1),
    [lastPage],
  );

  const setPage = useCallback(
    (page) => setSearchParams({ ...queryParams, page }),
    [queryParams],
  );

  const onLimitChange = useCallback(
    ({ target: { value } }) => {
      const limit = parseInt(value);
      const maxPage = Math.ceil(pagesCount / limit);
      setSearchParams({
        limit,
        page: queryParams.page > maxPage ? maxPage : queryParams.page,
      });
    },
    [queryParams, list, pagesCount, lastPage],
  );

  const lastPageHandler = useCallback(
    () =>
      setSearchParams({
        ...queryParams,
        page: lastPage,
      }),
    [queryParams, lastPage],
  );

  const firstPageHandler = useCallback(
    () =>
      setSearchParams({
        ...queryParams,
        page: 1,
      }),
    [queryParams],
  );

  const nextPageHandler = useCallback(() => {
    setSearchParams({
      ...queryParams,
      page: lastPage > queryParamsPage ? queryParamsPage + 1 : queryParamsPage,
    });
  }, [queryParams, queryParamsPage, lastPage]);

  const prevPageHandler = useCallback(() => {
    setSearchParams({
      ...queryParams,
      page: queryParamsPage !== 1 ? queryParamsPage - 1 : queryParamsPage,
    });
  }, [queryParams, queryParamsPage, lastPage]);

  const getList = useCallback(() => {
    const pathKeys = location.pathname.split('/').filter((item) => item !== '');
    const type = pathKeys[1];
    if (listTypes[type]) {
      dispatch(listTypes[type](queryParams));
    } else {
      navigate('/');
    }
  }, [queryParams]);

  useEffect(() => {
    if (Object.keys(queryParams).length) {
      getList();
    } else {
      setSearchParams({ limit: 5, page: 1 });
    }
  }, [queryParams]);

  return (
    <>
      {list ? (
        <EditPageWrapper>
          <EditList arrList={list} />
          <PaginationSelf
            onFirstClick={firstPageHandler}
            onLastClick={lastPageHandler}
            onPrevClick={prevPageHandler}
            onNextClick={nextPageHandler}
            onLimitChange={onLimitChange}
            onPageClick={setPage}
            pages={totalPagesArr}
            activePage={queryParams.page}
          />
        </EditPageWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default UsersEdit;

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import EditList from '../../../components/EditList/EditList';
import PaginationSelf from '../../../components/Pagination/Pagination';
import Loading from '../../../components/UI/Loading/Loading';
import {
  editAllPages,
  editList,
  editListPagesCount, editSelectList, editType,
} from '../../../store/selectors/editSelectors';
import { createItem, getList } from '../../../store/thunks/editThunk';
import { setType } from '../../../store/slices/editSlice';

// styled components
const EditPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// /styled components
const editPage = {
  product: [
    {
      id: 1,
      component: 'input',
      props: {
        type: 'text',
        title: 'name',
        onChange: ({ target: { value } }) => console.log(value),
        //  события додавати  по ходу
      },
    },
    {
      id: 2,
      component: 'select',
      props: {
        type: 'text',
        title: 'category',
        onChange: ({ target: { value } }) => console.log(value),
        listWithOptions:[]
      },
    },
  ],
};
const filterKeysArr = ['uuid'];
const EditPage = () => {
  // state
  const list = useSelector(editList);
  const pagesCount = useSelector(editListPagesCount);
  const lastPage = useSelector(editAllPages);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [createItem, setCreateItem] = useState({});
  // /state
  // variables
  const queryParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const queryParamsPage = useMemo(
    () => parseInt(queryParams.page),
    [queryParams],
  );
  const type = useMemo(
    () => location.pathname.split('/').filter((item) => item !== '')[1],
    [location],
  );
  const totalPagesArr = useMemo(
    () => Array.from({ length: lastPage }, (_, i) => i + 1),
    [lastPage],
  );
  // /variables
  // events
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

  const createSaveHandler = useCallback(
    (item) => {
      console.log(item);
      if (type.length) {
        dispatch(createItem({ item, ...queryParams, type }));
      }
    },
    [queryParams, type],
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

  const getListCb = useCallback(() => {
    if (type.length) {
      dispatch(getList({ type, ...queryParams }));
    } else {
      navigate('not found');
    }
  }, [queryParams]);
  // /events
  // effects
  useEffect(() => {
    dispatch(setType({ type }));
    if (Object.keys(queryParams).length) {
      getListCb();
    } else {
      setSearchParams({ limit: 5, page: 1 });
    }
  }, [queryParams, type]);

  // /effects
  return (
    <>
      {list ? (
        <EditPageWrapper>
          <EditList
            filterKeysArr={filterKeysArr}
            onCreateSave={createSaveHandler}
            arrList={list}
            createItemList={editPage[type]}
          />
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
export default EditPage;

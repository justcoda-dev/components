import { useCallback, useEffect, useMemo, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { filterObj } from '../../functions/filterObj';
import Button from '../UI/Button/Button';
import Loading from '../UI/Loading/Loading';
import TextInputControlled from '../UI/TextInputControlled/TextInputControlled';
import UploadInput from '../UI/UploadInput/UploadInput';
import Select from '../UI/Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectList } from '../../store/thunks/editThunk';
import { editSelectList, editType } from '../../store/selectors/editSelectors';
//styledComponents
const ItemList = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
`;
const ItemListItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: ${(props) => `${props.rate || '100'}%`};
  margin: 0 5px;
`;
const Name = styled.span`
  text-align: start;
`;

const ButtonsBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 5px;
`;
// /styledComponents
// variables

const components = {
  'input': TextInputControlled,
  'select': Select,
};

// /variables

const EditListCreateItem = ({ createItemList }) => {
    const dispatch = useDispatch();
    const [create, setCreate] = useState(false);

    const [item, setItem] = useState((prev) => {
      return {
        ...prev, ...createItemList.reduce((prev, curr) => {
          return {
            ...prev,
            [curr.props.title]: '',
          };
        }, {}),
      };
    });

    const type = useSelector(editType);
    const optionsList = useSelector(editSelectList);

    const request = () => {
      dispatch(getSelectList({ type }));
    };

    const editHandle = () => setCreate(true);

    const saveHandle = () => {
      setCreate(false);
    };

    const cancelHandle = () => {
      setCreate(false);
    };
    const listWithOptions = useMemo(() => createItemList.map(item => {
      item.props.optionsList = optionsList || [];
      return item;
    }), [createItemList, type,optionsList]);
    const DynamicComponent = ({
                                component,
                                props,
                              }) => components[component](props);

    useEffect(() => {
      request();
    }, [type]);

    return (
      <ItemList>
        {create
          ? <ItemListItemsWrapper>
            {
              listWithOptions.map(item =>
                <DynamicComponent
                  {...item}
                  key={item.id}
                />,
              )
            }
          </ItemListItemsWrapper> : null}
        <ButtonsBar>
          {create ? (
            <>
              <Button variant='success' size='sm' onClick={saveHandle}>
                Save
              </Button>
              <Button variant='danger' size='sm' onClick={cancelHandle}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant='success' size='sm' onClick={editHandle}>
              Create
            </Button>
          )}
        </ButtonsBar>
      </ItemList>
    );
  }
;
export default EditListCreateItem;

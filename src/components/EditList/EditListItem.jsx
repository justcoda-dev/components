import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { filterObj } from '../../functions/filterObj';
import Button from '../UI/Button/Button';
import Loading from '../UI/Loading/Loading';
import TextInputControlled from '../UI/TextInputControlled/TextInputControlled';
//styledComponents
const ItemList = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `1fr ${props.buttonsMenuSize || `100`}px`};
  min-height: 82px;
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
// Variables
const filterList = ['uuid'];
// /Variables

const EditListItem = ({ item = {}, onSave, onDelete }) => {
  const [edit, setEdit] = useState(false);
  const [itemObject, setItemObject] = useState({ ...item });

  const itemList = useMemo(
    () => Object.entries(filterObj(itemObject, filterList)),
    [itemObject],
  );

  const onChange = useCallback(
    (key) =>
      ({ target: { value } }) =>
        setItemObject({ ...itemObject, [key]: value }),
    [itemObject],
  );

  const editHandler = () => setEdit(true);
  const saveHandler = (item) => {
    onSave(item);
    setEdit(false);
  };
  const deleteHandler = () => {
    onDelete(item);
    setEdit(false);
  };
  const cancelHandler = () => {
    setItemObject(item);
    setEdit(false);
  };

  return (
    <ItemList>
      <ItemListItemsWrapper>
        {itemList ? (
          itemList.map(([key, value], index) => (
            <ItemListItem key={index}>
              {edit ? (
                <TextInputControlled
                  value={itemObject[key] || ''}
                  onChange={onChange(key)}
                />
              ) : (
                <Name>{value}</Name>
              )}
            </ItemListItem>
          ))
        ) : (
          <Loading />
        )}
      </ItemListItemsWrapper>

      <ButtonsBar>
        {edit ? (
          <>
            <Button
              variant="success"
              size="sm"
              onClick={saveHandler.bind(this, itemObject)}
            >
              Save
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={cancelHandler.bind(this, itemObject)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={deleteHandler.bind(this, itemObject)}
            >
              Delete
            </Button>
          </>
        ) : (
          <Button variant="secondary" size="sm" onClick={editHandler}>
            Edit
          </Button>
        )}
      </ButtonsBar>
    </ItemList>
  );
};
export default EditListItem;

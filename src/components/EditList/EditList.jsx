import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { filterObj } from '../../functions/filterObj';
import { firstLetterUppercase } from '../../functions/firstLetterUppercase';
import Loading from '../UI/Loading/Loading';
import EditListCreateItem from './EditListCreateItem';
import EditListItem from './EditListItem';
// styledComponents

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `1fr ${props.buttonsMenuSize || `100`}px`};
`;
const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ListHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 5px;
  flex-basis: ${(props) => `${props.rate || `100`}%`};
  font-size: 1.4rem;
  font-weight: 600;
`;

// /styledComponents

const EditList = ({
  arrList = [],
  onCreateSave,
  onEditSave,
  onEditCancel,
  filterKeysArr,
  createItemList
}) => {
  const propListIsCome = useMemo(() => !!arrList, [arrList]);

  const headerList = useMemo(
    () => Object.keys(filterObj(arrList[0], filterKeysArr)),
    [arrList],
  );

  return propListIsCome ? (
    <List>
      <ListHeader>
        <ListHeaderWrapper>
          {headerList.map((item, index) => (
            <ListHeaderItem key={index}>
              {firstLetterUppercase(item)}
            </ListHeaderItem>
          ))}
        </ListHeaderWrapper>
      </ListHeader>
      {arrList.map((item) => (
        <EditListItem
          onSave={onEditSave}
          onCancel={onEditCancel}
          key={item.uuid}
          item={item}
        />
      ))}
      <div>
        <h1>create</h1>

        <EditListCreateItem createItemList={createItemList} onSave={onCreateSave}  />
      </div>
    </List>
  ) : (
    <Loading />
  );
};
export default EditList;

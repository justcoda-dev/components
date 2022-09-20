import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import PaginationSelect from '../UI/PaginationSelect/PaginationSelect';
//styled components
const PaginationList = styled(Pagination)`
  display: flex;
  justify-content: center;
`;
const Select = styled(PaginationSelect)`
  margin: 0 5px;
  width: auto;
`;
// /styled components

const PaginationSelf = ({
  pages = [],
  onNextClick,
  onPrevClick,
  onPageClick,
  onLimitChange,
  onLastClick,
  onFirstClick,
  activePage,
}) => {
  return (
    <PaginationList>
      <Pagination.First onClick={onFirstClick} />
      <Pagination.Prev onClick={onPrevClick} />
      {pages.map((item) => (
        <Pagination.Item
          onClick={onPageClick.bind(this, item)}
          key={item}
          active={activePage === item.toString()}
        >
          {item}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={onNextClick} />
      <Pagination.Last onClick={onLastClick} />
      <Select list={[5, 10, 20, 50, 100]} onChange={onLimitChange} />
    </PaginationList>
  );
};
export default PaginationSelf;

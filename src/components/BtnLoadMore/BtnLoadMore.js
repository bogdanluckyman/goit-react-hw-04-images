import { LoadMoreStyled } from './BtnLoadMore.styled';

export const Button = ({ clickFunc }) => {
  return <LoadMoreStyled onClick={clickFunc}>Load More</LoadMoreStyled>;
};

import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ submit }) => {
  return (
    <SearchbarStyled>
      <SearchForm onSubmit={submit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          name="imagesValue"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

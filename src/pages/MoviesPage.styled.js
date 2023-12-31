import styled from 'styled-components';

export const StyledMovies = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .loader {
    position: fixed;
    top: 20px;
    right: 100px;
  }

  .postList {
    list-style: none;
    padding: 0;
    max-width: 450px;
  }
  .movieListItem {
    padding: 10px;
    border: 2px dashed black;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .itemTitle {
    margin-top: 0;
    margin-bottom: 15px;
  }
  .itemBody {
    margin-top: 0;
    margin-bottom: 0;
  }
  .error-bage {
    padding: 25px;
    border: 1px solid blue;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .movieDetails { 
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
 
 .genres {
  display: flex;
    flex-direction: row;
    gap: 20px;
 }
`;
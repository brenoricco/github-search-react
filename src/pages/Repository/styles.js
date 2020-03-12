import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  svg {
    color: #fff;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 30px;
  }

  span {
    display: flex;
    align-items: center;

    padding-left: 10px;
    margin-left: 15px;
    width: 250px;
    height: 45px;
    background: #343447;
    font-weight: bold;
    color: #999;
    border-radius: 10px;
  }
`;

export const Search = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 50px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  color: #fff;
  background: #343447;
  padding: 25px 50px;
  border-radius: 4px;

  p {
    margin-bottom: 10px;
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 3px;
  }

  span {
    margin-left: 2px;
  }

  small {
    margin-left: 10px;
  }
`;

export const List = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;
`;

export const RepositoryItem = styled.ul`
  background: #343447;
  list-style: none;
  padding: 15px;
  border-radius: 5px;

  span {
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 5px;

    span {
      margin-left: 10px;
    }
  }
`;

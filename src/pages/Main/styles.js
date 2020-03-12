import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  img {
    width: 200px;
  }

  input {
    margin-top: 20px;
    border-style: none;
    width: 300px;
    height: 45px;
    background: #3f3f54;
    border-radius: 10px;
    color: #999;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }
`;

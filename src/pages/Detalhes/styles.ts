import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  text-align: center;

  a {
    font-size: 24px;
    text-decoration: none;
    position: absolute;
    top: 0;
    color: red;
  }

`

export const Lista = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-top: 64px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background: lightblue;

  button {
    background: none;
    border: none;
  }

  span {
    width: 150px;
    padding: 4px;
  }

  & + & {
    margin-top: 16px;
  }
`

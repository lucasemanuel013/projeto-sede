import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    input {
      padding: 10px;
      border-radius: 10px;
    }

    input + input {
      margin-top: 10px;
    }

    button {
      background: lightblue;
      padding: 16px;
      border: none;
      border-radius: 10px;
      margin-top: 10px;
    }
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

import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  min-height: 400px;
  max-height: auto;
  background-color: #08141f;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: #ff1515;
    font-weight: 400;

    span {
      color: #ffffff;
    }
  }

  h3 {
    color: #ffffff;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }

  input {
    width: 50px;
    min-width: 50px;
    max-width: 400px;
    height: 50px;
    background-color: transparent;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    color: #ffffff;
    font-size: 18px;
    padding: 10px;

    &::placeholder {
      color: #ffffff;
      text-align: center;
      font-size: 15px;
    }
  }

  .divButtons {
    display: flex;
    gap: 20px;

    button {
      height: 40px;
      width: 100px;
      cursor: pointer;

      background-color: #ffffff;
      border: none;
      border-radius: 3px;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .containerOutput {
    background-color: #ffffff;
    width: 300px;
    margin-bottom: 10px;

    p {
      background-color: #ffffff;
      color: black;
      margin: 5px 20px;
    }

    @media screen and (max-width: 380px) {
      width: 260px;
    }
  }

  @media screen and (max-width: 720px) {
    width: 400px;
  }

  @media screen and (max-width: 420px) {
    width: 350px;

    h3 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 300px;
  }
`

// export const Content = styled.div`
//   width: 300px;
//   height: 200px;
//   background-color: #08141f;
//   padding: 10px;
//   gap: 10px;
//   border-radius: 8px;
//   padding-left: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   h2 {
//     height: 50px;
//     color: #ffffff;
//     display: flex;
//     align-items: center;
//   }

//   p {
//     flex-grow: 1; /* Makes the text expand to fill available space */
//     color: #ffffff;
//   }

//   button {
//     align-self: flex-start; /* Ensures the button stays at the bottom */
//     margin-top: auto;
//     padding: 10px;
//     color: white;
//     background-color: #102436;
//     border: none;
//     border-radius: 5px;
//     font-size: 14px;
//     cursor: pointer;
//     transition: 0.3s;

//     &:hover {
//       opacity: 0.5;
//     }
//   }
// `

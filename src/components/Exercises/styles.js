import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`

export const Content = styled.div`
  width: 300px;
  height: 200px;
  background-color: #08141f;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    height: 50px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }

  p {
    flex-grow: 1; /* Makes the text expand to fill available space */
    color: #ffffff;
  }

  button {
    align-self: flex-start; /* Ensures the button stays at the bottom */
    margin-top: auto;
    padding: 10px;
    color: white;
    background-color: #102436;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
  justify-content: center;
`

export const CategoryButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => (props.$active ? '#007bff' : '#102537')};
  color: ${(props) => (props.active ? '#fff' : '#fff')};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$active ? '#0056b3' : '#1d3141')};
  }
`

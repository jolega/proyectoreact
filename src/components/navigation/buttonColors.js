import styled from 'styled-components';
import React from "react";

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.div`
  cursor: pointer;
  :hover {
    background-color: gray;
  }

  background-color: ${props => (props.selected ? 'red' : 'none')};
`;

class ButtonColors extends React.Component {
  state = {
    first: false,
    second: false,
    third: true
  };

  toggle = buttonName => () => {
    this.setState(prev => ({ [buttonName]: !prev[buttonName] }));
  };

  render() {
    const { first, second, third } = this.state;
    return (
      <ButtonsRow>
        <Button selected={first} onClick={this.toggle('first')}>
          People
        </Button>
        <Button selected={second} onClick={this.toggle('second')}>
          Members
        </Button>
        <Button selected={third} onClick={this.toggle('third')}>
          Games
        </Button>
      </ButtonsRow>
    );
  }
}

export default ButtonColors;
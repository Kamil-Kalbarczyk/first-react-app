import React from 'react';
import styled from "styled-components";


const ButtonContainer = styled.div`
  display: flex;
  gap: 10%;
  margin-bottom: 100px;
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 4%;
  color: white;
  cursor: pointer;
`;

const AddButton = styled(Button)`
  background-color: green;
`;

const RemoveButton = styled(Button)`
  background-color: red;
`;

export class GameClass extends React.Component {

    state= {
        points: 0
    }

    addPoints = () => {
        this.setState({points: this.state.points + 5})
    }

    removePoints = () => {
        this.setState({points: this.state.points -5})
    }

    componentDidUpdate() {
        if(this.state.points >= 50) {
            alert(`Gratulacje! Wygrałeś w grę ${this.props.gameName}`)
            this.setState({points: 0});
        } else if (this.state.points <= -50) {
            alert(`Smuteczek :( Przegrałeś w grę ${this.props.gameName}`)
            this.setState({points: 0});
        }
    }

    render () {
      return  <>
        <h2>Witamy w grze {this.props.gameName}</h2>
        <h4>
          Troja liczpa punktów to:{" "}
          <span style={{ color: this.state.points > 0 ? "green" : "red" }}>{this.state.points}</span>
        </h4>
        <h6>Add or remove points</h6>
        <ButtonContainer>
          <AddButton onClick={this.addPoints}>Add</AddButton>
          <RemoveButton onClick={this.removePoints}>Remove</RemoveButton>
        </ButtonContainer>
      </>
    }
}
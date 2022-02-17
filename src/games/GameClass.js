import React from 'react';
import styled from "styled-components";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Icon} from '@mui/material';
import Typography from '@mui/material/Typography';

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
        <Typography variant='h4'>Witamy w grze {this.props.gameName}</Typography>
        <Typography variant='h6'>
          Troja liczpa punktów to:{" "}
          <span style={{ color: this.state.points > 0 ? "green" : "red" }}>{this.state.points}</span>
        </Typography>
        <Typography>Add or remove points</Typography>
        <ButtonGroup disableElevation variant="contained">
          <Button variant='contained' color='success' onClick={this.addPoints}><Icon>add</Icon></Button>
          <Button variant='contained' color='error' onClick={this.removePoints}><Icon>remove</Icon></Button>
        </ButtonGroup>
      </>
    }
}
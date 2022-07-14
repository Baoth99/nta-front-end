import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {Grid, Box, Button} from '@mui/material';
import MainForm from './components/form-component';

const mainColorCode:string = '#083F80';


const AppContainer = styled(Container)(() => ({
    minWidth: "100%",
    height: "100vh",
  }))

const Header = styled(Box)(({theme, sx}) => ({
  backgroundColor: mainColorCode,
  padding: theme.spacing(1.5),
  minWidth: '100%',
  marginTop: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'white',
}))

const TitleBox = styled(Box)(({theme, sx}) => ({
  backgroundColor: '#D4D8DE',
  padding: theme.spacing(1.5),
  minWidth: '100%',
  textAlign: 'center',
}))

function App() {
  return (
    <AppContainer>
      <Header> The material design UI demo </Header>
      <TitleBox>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={3}>
              FPT Software 01:
          </Grid>
          <Grid item xs={3} >
              FPT Software 02:
          </Grid>
        </Grid>
      </TitleBox>
      <MainForm/>
    </AppContainer>
  );
}

export default App;

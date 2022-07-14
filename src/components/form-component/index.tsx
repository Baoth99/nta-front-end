import React from 'react'
import { styled } from '@mui/material/styles';
import {Grid, Button, Paper, TextField} from '@mui/material';
import { GridLayout } from './style';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const MainForm = () => {
  return (
    <GridLayout container spacing={1}>
        <Grid container item xs={6} style={{paddingLeft:"30px"}}>
            <Grid container item xs={12}>
                <Grid item xs={2} justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={2}>
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                            <Select labelId="demo-select-small"
                                    id="demo-select-small">
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <p>AGT&1 AGT&1: </p>
                </Grid>
                <Grid item xs={5}>
                    <FormControl sx={{ mt:1, mb:1,  minWidth: '100%'}} size="small">
                            <Select labelId="demo-select-small"
                                    id="demo-select-small">
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
            
            <Grid container item xs={12}>
                <Grid item xs={6} md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={6} md={10} >
                    <FormControl sx={{ mt:1, mb:1}} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={6} md={2} justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={6} md={10}>
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={1} md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={11} md={10} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={1} md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={11} md={10} >
                <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                            <Select labelId="demo-select-small"
                                    id="demo-select-small">
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={1} md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={11} md={10} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={1} md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item xs={11} md={10} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item md={10} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item md={2}  justifyContent="center">
                    <p>AGT&1: </p>
                </Grid>
                <Grid item md={10} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container item xs={12}>
                <Grid item md={2} justifyContent="center">
                    <p>AA: </p>
                </Grid>
                <Grid item xs={2}>
                     <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
                <Grid item xs={1} textAlign="center">
                    <p>HE</p>
                </Grid>
                <Grid item xs={3} width='fit-content'>
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
                <Grid item xs={1} textAlign="center">
                    <p>HE</p>
                </Grid>
                <Grid item xs={3} overflow='auto'>
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item md={2}  justifyContent="center">
                    <p>A: </p>
                </Grid>
                <Grid item xs={1}>
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                            <Select labelId="demo-select-small"
                                    defaultValue={"+84"}
                                    id="demo-select-small">
                                <MenuItem value="+84">
                                <em>+84</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item md={0.5}  textAlign='center' justifyContent="center">
                    <p>&#822;</p>
                </Grid>
                <Grid item md={3} >
                    <FormControl sx={{ m: 1, width: '90%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
                <Grid item xs={1} textAlign='center' justifyContent="center">
                    <p>FAX</p>
                </Grid>
                <Grid item xs={1}>
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                            <Select labelId="demo-select-small"
                            defaultValue={"0"}
                                    id="demo-select-small">
                                <MenuItem value="+84">
                                <em>0</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={0.5} textAlign='center' justifyContent="center">
                    <p>&#822;</p>
                </Grid>
                <Grid item xs={3} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12} >
                <Grid item md={2}  justifyContent="center">
                    <p>URL </p>
                </Grid>
                <Grid item md={8}  >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
                <Grid item xs={2} justifyContent="center">
                    <FormControl sx={{ mt:1, mb:1, minWidth: '90%', float: 'right' }} size="small">
                        <Button variant="contained">Contained</Button>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item md={2} justifyContent="center">
                    <p>Email: </p>
                </Grid>
                <Grid item md={10} >
                    <FormControl sx={{ mt:1, mb:1 , minWidth: '100%' }} size="small">
                        <TextField id="outlined-basic" size='small'  />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item md={2}  justifyContent="center">
                    <p>Image </p>
                </Grid>
                <Grid item md={4}  >
                    
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <FormControl sx={{ mt:1, mb:1, width: '100%' }} size="small">
                    <Button variant="outlined">Outlined</Button>
                    </FormControl>
                </Grid>
                <Grid item xs={1.5} justifyContent="center">
                    <FormControl sx={{ mt:1, mb:1, width: '70%', float: 'right' }} size="small">
                    <Button variant="outlined">PPP</Button>
                    </FormControl>
                </Grid>
                <Grid item xs={1.5} justifyContent="center">
                    <FormControl sx={{ mt:1, mb:1, width: '70%', float: 'right'}} size="small">
                    <Button variant="outlined">OOO</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
        
        <Grid container item xs={6} style={{paddingLeft:"30px"}}>
            <h1>Component 2</h1>
        </Grid>
    </GridLayout>
  )
}
{/* <Grid item xs={1} justifyContent="center">
                    <p>&#822;</p>
                </Grid> */}

export default MainForm;

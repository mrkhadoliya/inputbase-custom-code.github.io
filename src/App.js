import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core';
import { Box, Container, Grid, InputBase, Typography } from '@mui/material';
import React from 'react'


const useStyles = makeStyles(theme => ({
  inputbase: {
    border: '1px  solid #ddd',
    borderRadius: '5px',
    color: '#fff !important',
    padding: '15px',
    height: '56px',
  }
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className='bodysbox'>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item sx={12} md={12}>
            <Box textAlign='center'>
                  <Typography variant='h2' gutterBottom component='div' color='#fff' >
                      Thank You All..........
                  </Typography>
            </Box>
            </Grid>
          <Grid item sx={12} md={6}>
            <Box className='helloarea' borderRadius='12px' border='1px solid #6c7390' bgColor='#191c29' padding='15px' >
              <Box marginY='1rem'>
                  <Typography variant='body2' gutterBottom color='#fff'>
                    Hello World
                  </Typography>

                  <InputBase
                  fullWidth
                    placeholder='hello'
                    className={classes.inputbase}
                  />
              </Box>
              <Box marginY='1rem'>
                  <Typography variant='body2' gutterBottom color='#fff'>
                    Hello Ram
                  </Typography>

                  <InputBase
                  fullWidth
                    placeholder='hello'
                    className={classes.inputbase}
                  />
              </Box>
            </Box>
          </Grid>
          <Grid item sx={12} md={6}>
            <Box className='helloarea' borderRadius='12px' border='1px solid #6c7390' bgColor='#191c29' padding='15px' >
              <Box marginY='1rem'>
                  <Typography variant='body2' gutterBottom color='#fff'>
                    Hello Shyam
                  </Typography>

                  <InputBase
                  fullWidth
                    placeholder='hello'
                    className={classes.inputbase}
                  />
              </Box>
              <Box marginY='1rem'>
                  <Typography variant='body2' gutterBottom color='#fff'>
                    Hello World
                  </Typography>

                  <InputBase
                  fullWidth
                    placeholder='hello'
                    className={classes.inputbase}
                  />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;
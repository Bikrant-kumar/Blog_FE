import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Avtar from '../Atoms/Avtar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      marginTop:theme.spacing(4),
      margin: 'auto',
      maxWidth: '50%'
    }
  }));

function Profile() {
    const classes = useStyles();
    const { user,isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (                        
        <Box className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item >
                  <Typography gutterBottom variant="h4" component="h2">
                    {user.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom color="textSecondary">
                    {user.email}
                  </Typography>
                </Grid>
              </Grid>
              {/* <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid> */}
              <Grid item>
              <ButtonBase className={classes.image}>
                <Avtar image={user.picture} name={user.name}/>
              </ButtonBase>
            </Grid>
            </Grid>
          </Grid>
        </Box>
    ))
}

export default Profile


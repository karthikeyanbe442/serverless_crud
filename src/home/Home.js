import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AppBar from '@material-ui/core/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
    },
    cardStyle: {
        textAlign: "center"
    },
    tileIcon: {
        width: 150,
        height: 150
    },
    linkStyle: {
        textDecoration: "none"
    },
    signOutLink:{
        backgroundColor: "none",
        color: "inherit"
    }, 
    rightIcon: {
      marginRight: theme.spacing(1),
    },
}));

export default function Home() {
    const classes = useStyles();
    
    const history = useHistory();

    const signOut = () => {
        Auth.signOut()
            .then(data => history.push("/signout"))
            .catch(err => console.log(err));
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.root} >
                    <HomeIcon className={classes.icon}/>
                    <Typography className={classes.root}>App</Typography>
                    <Button color="inherit" onClick={signOut}> <ExitToAppIcon className={classes.rightIcon}/> Signout</Button>
                </Toolbar>       
            </AppBar>

            <Grid container>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>&nbsp;</Grid>
                        <Grid item xs={2}>
                            <RouterLink to={"/dashboard"} className={classes.linkStyle}>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent className={classes.cardStyle}>
                                        <AssessmentIcon className={classes.tileIcon} />
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>Financial Dashboard</Typography>
                                    </CardContent>
                                </Card>
                            </RouterLink>
                        </Grid>
                        <Grid item xs={2}>
                            <RouterLink underline="none" to={"/album"} className={classes.linkStyle}>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent className={classes.cardStyle}>
                                        <PhotoLibraryIcon className={classes.tileIcon} />
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>Photo Gallery</Typography>
                                    </CardContent>
                                </Card>
                            </RouterLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
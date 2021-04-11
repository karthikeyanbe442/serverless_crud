import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    control: {
        padding: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default function Home() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const preventDefault = (event) => event.preventDefault();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {[{"name":"Home", "url":"/"}, 
                            {"name":"Finance Dashboard", "url":"dashboard"}, 
                            {"name":"Albums", "url":"/albums"}].map((value) => (
                            <Grid key={value} item>
                                <Paper className={classes.paper}><Link key={value.url} href={value.url}>{value.name}</Link></Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
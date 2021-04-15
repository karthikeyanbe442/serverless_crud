import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Button, Grid, Snackbar } from '@material-ui/core';
import { API } from 'aws-amplify';
import Orders from './Orders';

import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns'

import MuiAlert from '@material-ui/lab/Alert';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { enGB } from 'date-fns/locale'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    formRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        margin: 15
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Expense() {
    

const locales = {enGB}
window.__localeId__ = 'en'
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [date, setDate] = React.useState(new Date());
    const [item, setItem] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [cost, setCost] = React.useState(0);
    const [pi, setPi] = React.useState('VISA XXXX 8444');
    const [openSuccess, setOpenSuccess] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSuccessClose = (event, reason) => {
        setOpenSuccess(false);
    };

    function handleSubmit(event) {
        event.preventDefault();

        API.post('expenseApi', '/expense', {
            body: {
                date: format(date, "dd-MMM-yyyy", {
                    locale: locales[window.__localeId__] // or global.__localeId__
                  }),
                item: item,
                category: category,
                cost: cost,
                pi: pi
            }
        }).then(result => {
            setOpenSuccess(true);
            setDate(new Date())
            setItem('')
            setCategory('')
            setCost('0')
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <Tabs value={value} onChange={handleChange} textColor="primary" aria-label="Expense or Income Addition">
                <Tab label="Quick Add" {...a11yProps(0)} />
                <Tab label="Expense" {...a11yProps(1)} />
            </Tabs>
            <Paper className={classes.paper}>
                <TabPanel value={value} index={0}>
                    Quick Add
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <form className={classes.formRoot} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                value={date}
                                onChange={setDate}
                                id="date-picker-inline"
                                label="Date of Purchase"

                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                className={classes.margin}
                                InputLabelProps={{ shrink: true, }}
                            />
                        </MuiPickersUtilsProvider>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="Item-Place">Item / Place</InputLabel>
                            <Input id="Item-Place" aria-describedby="Item-Place-helper-text" onInput={e => setItem(e.target.value)} value={item}/>
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="Category">Category</InputLabel>
                            <Input id="Category" aria-describedby="Category-helper-text" onInput={e => setCategory(e.target.value)} value={category} />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="Cost">Cost</InputLabel>
                            <Input id="Cost" aria-describedby="Cost-helper-text" onInput={e => setCost(e.target.value)} value={cost} />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="Payment-Instrument">Payment Instrument</InputLabel>
                            <Input id="Payment-Instrument" aria-describedby="Payment-Instrument-helper-text" onInput={e => setPi(e.target.value)} value={pi} />
                        </FormControl>
                        <Button variant="contained" type="submit" color="primary" >Submit</Button>
                    </form>
                    <Snackbar open={openSuccess} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleSuccessClose}>
                        <Alert onClose={handleSuccessClose} severity="success">
                            Added the Expense!
                        </Alert>
                    </Snackbar>
                </TabPanel>
            </Paper>
            <Paper className={classes.paper}>
                <Orders></Orders>
            </Paper>
        </>
    );
}
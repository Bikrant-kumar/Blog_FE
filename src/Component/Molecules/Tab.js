import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#252525',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    marginRight: theme.spacing(4),
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: [
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#252525',
      opacity: 1,
    },
    '&$selected': {
      color: '#252525',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#252525',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    maxWidth: '50%'
  },
  padding: {
    padding: theme.spacing(2),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div >
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Profile" component={Link} to='/'/>
          <AntTab label="Comment" component={Link}  to='/comment'/>
          <AntTab label="Add Blog" component={Link}  to='/addblog'/>
        </AntTabs>
      </div>
    </div>
  );
}
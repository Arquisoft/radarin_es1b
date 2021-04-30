import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllUsers from '../admin/AllUsers';
import OnlineUsers from '../admin/OnlineUsers';
import DeleteUsers from '../admin/DeleteUsers';
import BanUsers from '../admin/BanUsers';
import BannedUsers from './BannedUsers';
import AdminUsers from '../admin/AdminUsers';
import AddAdminUsers from '../admin/AddAdminUsers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '98%',
    backgroundColor: theme.palette.info.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const webId= props.webId;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Usuarios sistema" {...a11yProps(0)} />
          <Tab label="Usuarios online" {...a11yProps(1)} />
          <Tab label="Eliminar usuarios" {...a11yProps(2)} />
          <Tab label="Banear usuarios" {...a11yProps(3)} />
          <Tab label="Usuarios baneados" {...a11yProps(4)} />
          <Tab label="Administradores" {...a11yProps(5)} />
          <Tab label="Añadir administradores" {...a11yProps(6)} />
          <Tab label="Usuarios inactivos" {...a11yProps(7)} />
          <Tab label="Ultimos accesos" {...a11yProps(8)} />

        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} >
         <AllUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={1} >
         <OnlineUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={2} >
         <DeleteUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={3} >
         <BanUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={4} >
        <BannedUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={5} >
         <AdminUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={6} >
         <AddAdminUsers webId={webId}/>
      </TabPanel>
      <TabPanel value={value} index={7} >
        to be done
      </TabPanel>
      <TabPanel value={value} index={8} >
        to be done
      </TabPanel>
    </div>
  );
}

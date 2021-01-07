import React from 'react';

// Components
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

type TabProps = {
  title: string;
  content: React.ReactNode | React.ReactNode[];
};

type TabsComponentProps = {
  tabs: TabProps[];
};

const TabsComp = ({ tabs }: TabsComponentProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {tabs.map((tab: TabProps, index: number) => {
            return <Tab label={tab.title} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>
      {tabs.map((tab: TabProps, index: number) => {
        return (
          <TabPanel value={value} index={index}>
            {tab.content}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default TabsComp;

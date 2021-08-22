import { React, useState } from "react";
import { useHistory } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, ListItemText, SwipeableDrawer, Toolbar, Container, Typography } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/styles";
import { 
  bodySecondary,
  hoverShadow,
  bodyForeground,
  bodyAccent,
  textLightForeground,
  toDark
} from "../assets/css/sharedColors";
import AssessmentIcon from '@material-ui/icons/Assessment';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core'
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  darkDrop: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: `${hoverShadow}`,
    },
  },
  header: {
    background: `${bodyForeground}`,
    // borderBottom: `2px solid ${bodyAccent}`,
  },
  local: {
    float: "right"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: "4px 4px 4px 0px",
    paddingLeft: `calc(1em + 16px)`,
    width: "6em",
    height: "auto",
    color: "white"
  },
  menuIco: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: `${hoverShadow}`,
    },
    marginLeft: "5%"
  },
  navLight: {
    background: "white",
    color: `${textLightForeground}`
  },
  navDark: {
    background: "black",
    color: ``
  },
  search: {
  },
  searchIco: {
    marginLeft: "auto",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: `${hoverShadow}`,
    },
  }
}));


export default function Header() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [navState, setNavState] = useState(false);
  const history = useHistory();

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavState(open);
  };

  const darkmode = (wantsDark) => (event) => {
    setIsDark(wantsDark);
    toDark();
  }

  const search = () => {
    // Use searchValue
    console.log(searchValue);

  }

  const navigate = (page) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    switch(page) {
      case "About Me": history.push("/About"); break;
      case "Resume": history.push("/Resume"); break;
      case "Projects": history.push("/Projects"); break;
      case "Stats": history.push("/Affiliations"); break;
      case "Contact": history.push("/"); break;
      case "For Fun": history.push("/Games"); break;
      default: history.push("/404");
    }
  }

  return (
    <div>
      <AppBar className={classes.header} position="static" color="secondary">
        <Container>
          <Toolbar className={classes.local}>
            <SearchIcon 
              className={classes.searchIco}
              onClick={search()}
            />
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(event) => {
                setSearchValue(event.value)
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <InvertColorsIcon
              onClick={darkmode(!isDark)}
              className={classes.darkDrop}
            />
            <MenuIcon 
              onClick={toggleDrawer(true)}
              className={classes.menuIco}
            />
            <SwipeableDrawer
              anchor='right'
              open={navState}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              BackdropProps={{ invisible: true }}
              classes={{ paper: classes.nav}}
            >
            <List>
              {['About Me', 'Resume', 'Projects', 'Stats', 'Contact', 'For Fun'].map((text, index) => (
                  <ListItem button key={text} onClick={navigate(text)}>
                    { index > 4 ? <Divider/> : "" }
                    <ListItemIcon>{
                      index == 0 ? <InfoIcon color="primary" /> :
                      index == 1 ? <DescriptionIcon color="primary" /> :
                      index == 2 ? <AccountTreeIcon color="primary" /> :
                      index == 3 ? <AssessmentIcon color="primary" /> :
                      index == 4 ? <ContactSupportIcon color="primary" /> :
                      <VideogameAssetIcon color="primary"/>
                    }</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
              ))}
            </List>
            </SwipeableDrawer>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

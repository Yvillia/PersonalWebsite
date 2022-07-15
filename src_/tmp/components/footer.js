import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import {
  bodyForeground,
  bodyAccent,
  textLightForeground,
  textLightShadow,
  hrLight
} from "../assets/css/sharedColors";
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from "@material-ui/core";
import portrait from '../assets/images/portrait2.png';
import 'font-awesome/css/font-awesome.min.css'

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex"
  },
  credit: {
    marginLeft: 'auto',
    justifySelf: "flex-end",
    textShadow: `1.75px 1.75px ${textLightShadow}`
  },
  email: {
    textAlign: "center",
    fontFamily: "BlinkMacSystemFont",
    textShadow: `1.5px 1.5px ${textLightShadow}`,
    letterSpacing: '4px',
  },
  footer: {
    // borderTop: `2px solid ${bodyAccent}`,
    position: "fixed",
    background: `${bodyForeground}`,
    left: "0",
    bottom: "0",
    width: "100%",
  },
  name: {
    textAlign: "center",
    textShadow: `1.75px 1.75px ${textLightShadow}`,
    fontFamily: "BlinkMacSystemFont",
    paddingBottom: '0.3em',
    letterSpacing: '2px'
  },
  portrait: {
    width: "20%",
    height: "auto",
    maxHeight: "10%",
    border: `2px ${hrLight} solid`,
    borderRadius: "75%",
    marginLeft: "39%",
    marginRight: "50%",
  },
  portraitCase: {
    flexGrow: 1,
    paddingTop: "3%"
  },
  social: {
    scale: "98%"
  },
  socialSpan: {
    display: "flex",
    alignItems: "space-between"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.footer} position="static" color="secondary">
        <Container>
          <Toolbar className={classes.about}>
            <div className={classes.portraitCase}>
              <hr
              style={{
                color: `${hrLight}`,
                opacity: 1,
                borderTop: "1px solid",
                borderRadius: "10px"
              }}
              />
              <img
                src={portrait}
                className={classes.portrait}
              />
              <Typography variant="h4" color="inherit" className={classes.name}>
                Noah Rogers
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.email}>
                <a href='mailto:nnrogers515@gmail.com' style={{color: `${textLightForeground}`}}>
                  nnrogers515@gmail.com
                </a>
              </Typography>
            </div>
          </Toolbar>
          <hr
            style={{
              color: `${hrLight}`,
              opacity: 0.7,
              borderTop: "1px solid",
              borderRadius: "10px"
            }}
          />
          <Toolbar>
            <span className={classes.socialSpan}>
              <SocialIcon
                url="https://github.com/nnrogers515"
                target="_blank"
                fgColor="white"
                className={classes.social}
              />
              <SocialIcon
                url="https://www.facebook.com/nnrogers515"
                target="_blank"
                fgColor="white"
                className={classes.social}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/noah-rogers-08840318a/"
                target="_blank"
                fgColor="white"
                className={classes.social}
              />
              <SocialIcon
                url="mailto:nnrogers515@gmail.com"
                target="_blank"
                fgColor="white"
                className={classes.social}
              />
            </span>
            <Typography variant="h6" color="inherit" className={classes.credit} >
              @ {new Date().getFullYear()} Noah Rogers
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

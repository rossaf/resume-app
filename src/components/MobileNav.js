import { Link, useLocation } from "react-router-dom";
import { Menu } from 'semantic-ui-react';


export default function Navbar({theme, onThemeChange, objectRef}) {
  const active = useLocation();

  return (<>
    <Menu fluid widths='7' icon='labeled' fixed='bottom' inverted={theme} size='small'>
            <Link to="/">
              <Menu.Item
                name='home'
                icon='home'
                id='home'
                active={active.pathname === '/'}
              />
            </Link>
            <Link to="/projects">
              <Menu.Item
                name='projects'
                id='projects'
                icon='code branch'
                active={active.pathname === '/projects'}
              />
            </Link>
            <Link to="/resume">
              <Menu.Item
                name='resume'
                id='resume'
                icon='download'
                active={active.pathname === '/resume'}
              />
            </Link>
            <Link to="/contact">
              <Menu.Item
                name='contact'
                id='contact'
                icon='mail'
                active={active.pathname === '/contact'}
              />
            </Link>
            <Menu.Item
                name='theme'
                id='theme'
                color={!theme && 'green'}
                icon='sun'
                active={!theme}
                onClick={onThemeChange}
              />
          </Menu>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

  </>)
}
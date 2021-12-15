import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Header, Menu, Segment } from 'semantic-ui-react';



export default function Navbar({theme, shape, onThemeChange, onShapeChange, onColorChange}) {
    const active = useLocation()
    const [time, setTime] = useState(new Date())
    const [random, setRandom] = useState(false)

    useEffect(() => {
      setInterval(() => {
        setTime(new Date())
      }, 1000)
    }, [])
    useEffect(() => {
      if(random === true) {
        onColorChange()
      }
    }, [time])

    function handleRandomClick() {
      setRandom(!random)
    }


    return (<>
    <Segment inverted={theme}>
          <Menu inverted={theme} fluid pointing secondary vertical>
            <NavLink to="/">
              <Menu.Item
                name='home'
                icon='home'
                id='home'
                active={active.pathname === '/'}
              />
            </NavLink>
            <NavLink to="/projects">
              <Menu.Item
                name='projects'
                id='projects'
                icon='code branch'
                active={active.pathname === '/projects'}
              />
            </NavLink>
            <NavLink to="/resume">
              <Menu.Item
                name='resume'
                id='resume'
                icon='download'
                active={active.pathname === '/resume'}
              />
            </NavLink>
            <NavLink to="/contact">
              <Menu.Item
                name='contact'
                id='contact'
                icon='mail'
                active={active.pathname === '/contact'}
              />
            </NavLink>
          </Menu>
          <Segment inverted={true} padded color='teal' textAlign='left'>
            <Header as='h1'>
              {time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}
            </Header>
            <p>
              {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </Segment>
          <Button.Group widths='5'>
            <Button icon='sun' toggle active={!theme} onClick={onThemeChange}  />
            <Button content={shape.charAt(0).toUpperCase() + shape.slice(1)} onClick={onShapeChange}  />
            <Button icon='shuffle' toggle active={random} onClick={() => handleRandomClick()} />
          </Button.Group>
        </Segment>
    </>)
}
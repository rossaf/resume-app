import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { Segment, Menu, Header, Button, Message, Icon } from 'semantic-ui-react'



export default function Navbar({theme, shape, onThemeChange, onShapeChange}) {
    const [active, setActive] = useState("home");
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      setInterval(() => {
        setTime(new Date())
      }, 1000)
    }, [])
    function handleMenuClick(e) {
        console.log(e.target)
        setActive(e.target.id)
    }
    return (<>
    <Segment inverted={theme}>
          <Menu inverted={theme} fluid pointing secondary vertical>
            <Link to="/">
              <Menu.Item
                name='home'
                icon='home'
                id='home'
                active={active === 'home'}
                onClick={handleMenuClick}
              />
            </Link>
            <Link to="/projects">
              <Menu.Item
                name='projects'
                id='projects'
                icon='code branch'
                active={active === 'projects'}
                onClick={handleMenuClick}
              />
            </Link>
            <Link to="/resume">
              <Menu.Item
                name='resume'
                id='resume'
                icon='download'
                active={active === 'resume'}
                onClick={handleMenuClick}
              />
            </Link>
            <Link to="/contact">
              <Menu.Item
                name='contact'
                id='contact'
                icon='mail'
                active={active === 'contact'}
                onClick={handleMenuClick}
              />
            </Link>
          </Menu>
          <Segment basic>
          <Header inverted={theme} as='h1'>
            {time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}
            <Header inverted={theme} as='h5'>
            {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </Header>
          </Header>
          </Segment>
          <Button.Group widths='5'>
            <Button icon='sun' toggle active={!theme} onClick={onThemeChange}  />
            <Button content={shape.charAt(0).toUpperCase() + shape.slice(1)} onClick={onShapeChange}  />
            <Button icon='shuffle' disabled />
          </Button.Group>
        </Segment>
    </>)
}
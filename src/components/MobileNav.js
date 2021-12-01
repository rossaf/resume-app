import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { Segment, Menu, Header, Container, Sidebar, Icon, Grid, Checkbox, Sticky } from 'semantic-ui-react'


export default function Navbar({theme, onThemeChange, objectRef}) {
  const [active, setActive] = useState("home");
  const [time, setTime] = useState(new Date())
  const [visible, setVisible] = useState(true)

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
    <Menu fluid fixed='bottom' inverted={!theme} size='large'>
      <Container>
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
            </Container>
          </Menu>

  </>)
}
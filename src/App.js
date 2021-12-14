import React, { useState, createRef } from "react";
import { Route, Routes } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import { Grid, Message, Rail, Sticky, Ref, Segment } from 'semantic-ui-react';
import './App.css';
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import MobileNav from "./components/MobileNav.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Twitter from "./components/Twitter.js"
import useWindowDimensions from "./components/useWindowDimensions.js";
import Particles from "./Particles";


function App() {
  const [theme, setTheme] = useState(true)
  const [shape, setShape] = useState("polygon")
  const [color, setColor] = useState()
  const [currcolor, setCurrColor] = useState(0)
  const [currshape, setCurrShape] = useState(0)
  const { width, height } = useWindowDimensions();
  const shapes = ["polygon", "circle", "square", "star", "triangle"]
  const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]
  const contextRef = createRef()

  function handleThemeChange() {
    setTheme(!theme)
  }

  function handleShapeChange() {
    

    if(shapes[currshape+1]) {
      setShape(shapes[currshape+1])
      setCurrShape(currshape+1)
    } else {
      setShape(shapes[0])
      setCurrShape(0)
    }
    
  }

  function handleColorChange() {

    if(shapes[currshape+1]) {
      setShape(shapes[currshape+1])
      setCurrShape(currshape+1)
    } else {
      setShape(shapes[0])
      setCurrShape(0)
    }

    if(colors[currcolor+1]) {
      setColor(colors[currcolor+1])
      setCurrColor(currcolor+1)
    } else {
      setColor(colors[0])
      setCurrColor(0)
    }
    
  }

  return(<>
    
    <Grid container doubling centered columns={width >= 1300 ? '2' : '1'}>
      <Grid.Column largeScreen={8} computer={12} tablet={16} mobile={16}>
        <Ref innerRef={contextRef}>
          <Segment basic>
                <br></br>
                <Message
                  warning
                  icon='warning sign'
                  header='This portfolio is still under construction.'
                  content='Built using the MERN stack. (MongoDB, Express, React, and NodeJS) Additionally styled with Semantic UI. '
                />
              
              <Routes>
                <Route exact path="/Contact" element={<Contact theme={theme} />}>
                </Route>  
                <Route path="/Resume" element={<Resume theme={theme} />}>
                </Route>
                <Route path="/projects" element={<Projects theme={theme} />}>
                </Route>
                <Route exact path="/" element={<Home theme={theme} />}>
                </Route>
              </Routes>
            
          {width >= 1300 && <Rail close='very' position='left' context={contextRef}>
            <Sticky
                  bottomOffset={50}
                  offset={30}
                >
              <br></br>
              <br></br>
              <Navbar theme={theme} shape={shape} onThemeChange={handleThemeChange} onShapeChange={handleShapeChange} onColorChange={handleColorChange} />
              
            </Sticky>
          </Rail>}
          {width >= 1300 && <Rail close='very' position='right'>
            <Sticky
                  context={contextRef}
                >
              <br></br>
              <br></br>
              <Twitter theme={theme} height={height} />
              
            </Sticky>
          </Rail>}
          </Segment>
          </Ref>
      </Grid.Column>
    </Grid>
    <Particles theme={theme} shape={shape} color={color} />
    {width < 1300 && <MobileNav theme={theme} onThemeChange={handleThemeChange} />}
  </>)
}

export default App;
 
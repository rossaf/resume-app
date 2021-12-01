import React, {useState, useRef} from "react"
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Routes, Route } from "react-router-dom"
import { Grid, Rail, Sticky, Message, Segment, Container, Popup, Button, Ref } from 'semantic-ui-react'
import Particles from "react-tsparticles";
import useWindowDimensions from "./components/useWindowDimensions.js"


import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Projects from "./components/Projects.js"
import Resume from "./components/Resume.js"
import Contact from "./components/Contact.js"
import MobileNav from "./components/MobileNav.js"

function App() {
  const [theme, setTheme] = useState(true)
  const [shape, setShape] = useState("polygon")
  const [currshape, setCurrShape] = useState(0)
  const { height, width } = useWindowDimensions();
  const objectRef = React.useRef(null)

  function handleThemeChange() {
    setTheme(!theme)
  }

  function handleShapeChange() {
    const shapes = ["polygon", "circle", "square", "star", "triangle"]

    if(shapes[currshape+1]) {
      setShape(shapes[currshape+1])
      setCurrShape(currshape+1)
    } else {
      setShape(shapes[0])
      setCurrShape(0)
    }
    
  }

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
      "background": {
        "color": {
          "value": theme ? "#000000" : "#ffffff"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      },
      "fullScreen": {
        "zIndex": -1
      },
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "repulse"
          },
          "onHover": {
            "enable": true,
            "mode": "bubble"
          }
        },
        "modes": {
          "bubble": {
            "distance": 400,
            "duration": 10000,
            "opacity": 0.8,
            "color": {
              "value": theme ? "#00B4C3" : "#ff0000"
            },
            "size": 40
          },
          "grab": {
            "distance": 400
          },
          "repulse": {
            "distance": 500,
            "speed": 5
          }
        }
      },
      "particles": {
        "color": {
          "value": "#1b1e34"
        },
        "links": {
          "color": {
            "value": "#ffffff"
          },
          "distance": 200,
          "width": 2
        },
        "move": {
          "attract": {
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "path": {},
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "speed": 1,
          "spin": {}
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 6
        },
        "opacity": {
          "random": {
            "enable": true,
            "minimumValue": 0.3
          },
          "value": {
            "min": 0.3,
            "max": 0.5
          },
          "animation": {
            "speed": 1,
            "minimumValue": 0.1
          }
        },
        "shape": {
          "options": {
            "polygon": {
              "sides": 6
            },
            "star": {
              "sides": 6
            }
          },
          "type": `${shape}`
        },
        "size": {
          "random": {
            "enable": true,
            "minimumValue": 100
          },
          "value": {
            "min": 100,
            "max": 160
          },
          "animation": {
            "minimumValue": 40
          }
        }
      }
    }

  return(<>
   <div ref={objectRef}>
    {width < 1200 && <Sticky pushing context={objectRef} offset={height-50}>
      <MobileNav />
    </Sticky>}
   
    <Grid doubling centered columns='2'>
      <Grid.Column>
        
          <Segment basic>
          
            <Message
                  warning
                  icon='warning sign'
                  header='This portfolio is still under construction.'
                  content='Built using the MERN stack. (MongoDB, Express, React, and NodeJS) Additionally styled with Semantic UI. '
                />
          </Segment>
            <Container>
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
              
            </Container>
          {width > 1200 && <Rail close position='left'>
            <Sticky
                  bottomOffset={50}
                  attached
                  offset={30}
                  context={objectRef}
                >
              <br></br>
              <br></br>
              <Navbar theme={theme} shape={shape} onThemeChange={handleThemeChange} onShapeChange={handleShapeChange} />
              
            </Sticky>
          </Rail>}
          
          <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
          
      </Grid.Column>
    </Grid>
    </div>
  </>)
}

export default App;
 
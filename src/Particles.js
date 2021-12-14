import React from 'react'
import Particles from "react-tsparticles";

export default function particles({theme, shape, color}) {
    const particlesInit = (main) => {
        console.log(main);
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
                  "value": !color ? (theme ? "#00B4C3" : "#ff0000") : `${color}`
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
        return (
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
        )
}

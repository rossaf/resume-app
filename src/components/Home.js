import React from "react";
import { Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';
import Trans from "./Trans.js";
import useWindowDimensions from "./useWindowDimensions.js";



export default function Home({theme}) {
    const { width } = useWindowDimensions();
    
    return (<>
    <Trans>
            <Segment inverted={theme} padded="very" size={width<480 ? 'small' : 'big'} >
                <Grid doubling stackable divided columns='equal'>
                    <Grid.Row centered divided>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <Image circular centered src='/profile.jpg' fluid />
                        </Grid.Column>
                        <br></br>
                        <br></br>
                        <Grid.Column>
                            <Segment inverted={theme} basic>
                                <Header  size="huge" as="h2" inverted={theme}>
                                    Ross Farcas
                                </Header>
                                
                                <p>
                                    I am a recent 2021 computer science graduate, with a minor in mathematics. My main expertise is in front-end development, which includes a <b>firm understanding of HTML, CSS, and JavaScript. </b>
                                    I also have been expanding my skills in different modern frameworks, libraries, and tools. For instance, <b>I built this portfolio website using the MERN full-stack. (MongoDB, Express, React, and NodeJS)</b>
                                    <br></br>
                                    <br></br>
                                    As an individual, I am a driven self learner, who is motivated to become an efficient, result oriented developer. My future goals are to become a key engineer for a widely used web application.
                                </p>
                                <a href='https://www.linkedin.com/in/ross-farcas-87ba50184/' target="_blank" rel="noreferrer">
                                    <Icon link circular inverted={true} color='teal' name='linkedin' />
                                </a>
                                <a href='https://github.com/rossaf' target="_blank" rel="noreferrer">
                                    <Icon link circular inverted={true} color='teal' name='github square' />
                                </a>
                                <a href='https://twitter.com/ross_farcas' target="_blank" rel="noreferrer">
                                    <Icon link circular inverted={true} color='teal' name='twitter' />
                                </a>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Trans>
        <Trans>
            <Segment inverted={true} padded='very' size={width<480 ? 'small' : 'big'} color="teal">
                <Grid stackable divided={width<480 ? true : false} padded stretched columns='equal'>
                    <Grid.Row centered divided>
                            <Header inverted={true} size='huge'>
                                I'm a full-stack web developer, specializing in the MongoDB, Express, React, and NodeJS stack.
                            </Header>
                    </Grid.Row>
                    <Grid.Row stretched centered>
                                    <Icon inverted={theme} size={width<1500 ? 'big' : 'huge'} name='react' />
                                    <Icon inverted={theme} size={width<1500 ? 'big' : 'huge'} name='js' />
                                    <Icon inverted={theme} size={width<1500 ? 'big' : 'huge'} name='html5' />
                                    <Icon inverted={theme} size={width<1500 ? 'big' : 'huge'} name='css3' />
                                    <Icon inverted={theme} size={width<1500 ? 'big' : 'huge'} name='node js' />
                                    <Icon inverted={theme} size={width<1500 ? 'big' : 'huge'} name='database' />
                    </Grid.Row>
                </Grid>
            </Segment>
        </Trans>
        <Trans>
                <Segment inverted={theme} padded>
                    <Grid stackable divided={width<480 ? true : false} stretched columns='equal'>
                        <Header inverted={theme} size='huge'>
                            Other interests...
                        </Header>
                        <Grid.Row centered divided>
                            <Grid.Column>
                                <Image src='/public/../../rasppi.jpg' size='large' />
                                <Header inverted={theme} size='large'>
                                    Python scripting with the Raspberry Pi 4 & Zero.
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='/public/../../3dprint.jpg' size='large' />
                                <Header inverted={theme} size='large'>
                                    3D modelling and Printing
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='/public/../../server.jpg' size='large' />
                                <Header inverted={theme} size='large'>
                                    Linux servers & databases
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
        </Trans>
    </>)
}
//import e from "cors"
import React from "react"
import { Button, Form, Header, Icon, Input, Segment, TextArea } from "semantic-ui-react"
import Trans from "./Trans.js"

export default function Projects({theme}) {

    return(<>
        <Trans>
            <Segment inverted={theme} padded color='teal'>
                <Header as='h5'>
                    <Icon name='phone' />
                    (201)-903-2265
                </Header>
                <Header as='h5'>
                    <Icon name='mail' />
                    contact@rossfarcas.com
                </Header>
                    <a href='https://www.linkedin.com/in/ross-farcas-87ba50184/' target="_blank" rel="noreferrer">
                        <Icon link circular inverted={theme} color='teal' name='linkedin' />
                    </a>
                    <a href='https://github.com/rossaf' target="_blank" rel="noreferrer">
                        <Icon link circular inverted={theme} color='teal' name='github square' />
                    </a>
                    <a href='https://twitter.com/ross_farcas' target="_blank" rel="noreferrer">
                        <Icon link circular inverted={theme} color='teal' name='twitter' />
                    </a>
            </Segment>
        </Trans>
        <Trans>
            <Segment inverted={theme} padded>
                <Form inverted={theme} >
                    <Form.Group widths='equal' >
                    <Form.Field
                        disabled
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        disabled
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                    />
                    </Form.Group>
                    <Form.Field
                    disabled
                    id='form-textarea-control-opinion'
                    label='Message'
                    control={TextArea}
                    placeholder='A short summary for why you are reaching out...'
                    />
                    <Form.Field
                    disabled
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='your@email.com'
                    error
                    />
                    <Form.Field
                    disabled
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                    />
                </Form>
            </Segment>
        </Trans>
        
    </>)
}
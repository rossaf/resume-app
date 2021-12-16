//import e from "cors"
import React, { useEffect, useState } from "react"
import { Button, Form, Header, Icon, Input, Segment, TextArea, Message } from "semantic-ui-react"
import Trans from "./Trans.js"

export default function Projects({theme}) {
    const [ success, setSuccess ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const [ validation, setValidation ] = useState([])
    const [ fname, setFname ] = useState("")
    const [ lname, setLname] = useState("")
    const [ message, setMessage ] = useState("")
    const [ email, setEmail ] = useState("")

    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    function handleFormSubmit(e) {
        e.preventDefault()
        setValidation([])
        setSuccess(false)
        setLoading(true)

        if (!fname) {
            setValidation(validation => [...validation, "Please enter a first name."]);
        }
        if (!lname) {
            setValidation(validation => [...validation, "Please enter a last name."]);      
        }
        if (!message) {
            setValidation(validation => [...validation, "Please enter a message."]);       
        }
        if (!email) {
            setValidation(validation => [...validation, "Please enter an email."]);       
        }
        if (!emailregex.test(email)) {
            setValidation(validation => [...validation, "Your email is invalid."]);
            setLoading(false)
            return     
        }
        if (!fname || !lname || !message || !email) {
            setLoading(false)
            return
        }

        fetch("http://localhost:5000/contact/add",
        {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({fname: fname, lname: lname, message: message, email: email})
        })
        .then(response => response.json())
        .then(data => setSuccess(data))
        .catch(err => {
            setValidation(err)
            setLoading(false)
        })

        setFname("")
        setLname("")
        setMessage("")
        setEmail("")
        setLoading(false)
        setValidation([])
    }

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
                {validation.length>0 && <Message
                    error
                    header='You have some errors in your submission'
                    list={validation}
                    />}
                {success && <Message
                    success
                    header={success}
                    />}
                <Form inverted={theme} onSubmit={handleFormSubmit} loading={loading} >
                    
                    <Form.Group widths='equal' >
                    <Form.Field
                        error={!fname && validation.length>0 ? true : false}
                        onChange={(e) => setFname(e.target.value)}
                        value={fname}
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        error={!lname && validation.length>0 ? true : false}
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                    />
                    </Form.Group>
                    <Form.Field
                    error={!message && validation.length>0 ? true : false}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id='form-textarea-control-opinion'
                    label='Message'
                    control={TextArea}
                    placeholder='A short summary for why you are reaching out...'
                    />
                    <Form.Field
                    error={!email && validation.length>0 ? true : false}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='your@email.com'
                    />
                    <Form.Button content='Submit' />
                </Form>
            </Segment>
        </Trans>
        
    </>)
}
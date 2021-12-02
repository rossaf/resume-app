import { tsObjectKeyword } from "@babel/types"
//import e from "cors"
import React, {useEffect, useState} from "react"
import { Grid, Item, Label, Container, Segment, Dimmer, Loader, Message, Dropdown, Input } from "semantic-ui-react"
import Project from "./Project.js"
import Trans from "./Trans.js"

export default function Projects({theme}) {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [tags, setTags] = useState([])
    const [filter, setFilter] = useState([])
    

    useEffect(() => {
        setError()
        fetch("https://portfolio-server-2021.herokuapp.com/projects")
        .then(response => response.json())
        .then(data => {
            console.log(filter)
            if (filter.length > 0) {
                setProjects(data.filter((option, index) => {
                    console.log(option.tags.some(curr => filter.includes(curr)))
                    return option.tags.some(curr => filter.includes(curr))
                }))
                
            } else {
                setProjects(data)
            }
            console.log(projects)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    }, [filter])
    useEffect(() => {
        setTags([])
        const temp = []
        projects.map((options, index) => {
            return options.tags.map((tag, index2) => {
                if (temp.every((t) => t !== tag)){
                    temp.push(tag)
                    return setTags(tags => [...tags, {key:`${index}${index2}`, text:tag, value:tag}])
                }
                return null
            })
        })
        
    }, [projects])

    const renderLabel = (e) => ({
        color: 'blue',
        content: `${e.text}`,
        icon: 'check',
      })

    function handleSearchChange(e, data) {
        setFilter(data.value)
        console.log(filter)
    }

      

    return(<>
        <Trans>
            <Segment inverted={theme} placeholder={loading || error} loading={loading}>
                <Dropdown
                search
                multiple
                selection
                fluid
                options={tags}
                placeholder='Choose some tags'
                renderLabel={renderLabel}
                onChange={handleSearchChange}
            />
                {theme && <Dimmer active={loading}>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>}
                {error && 
                    <Message negative>
                    <Message.Header>There was an error loading this content. </Message.Header>
                    <p>{error.toString()}</p>
                    </Message>
                }
                <Item.Group divided>
                    {projects && projects.map(project => {
                        return <Project key={project.id} theme={theme} details={project} />
                    })}
                </Item.Group>
            </Segment>
        </Trans>
        
    </>)
}

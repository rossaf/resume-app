import React from "react"
import { Item, Label, Segment } from "semantic-ui-react"

export default function Project({key, details, theme}) {
    const tags = details.tags
    return (
        <Item key={key} as="Segment">
            <Item.Image src={details.image} />
            <Item.Content>
                <Item.Header className={theme && "ui grey inverted header"} as='a'>
                    {details.title}
                </Item.Header>
                <Item.Description>
                    <Segment inverted={theme}>
                        {details.description}
                    </Segment>
                </Item.Description>
                <Item.Extra> 
                    {tags && tags.map((tag, index) => {
                        return <Label key={index} content={tag} />
                    })}
                </Item.Extra>
            </Item.Content>
        </Item>        
    )

}
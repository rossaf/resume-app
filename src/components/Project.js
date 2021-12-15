import React from "react"
import { Item, Label, Segment } from "semantic-ui-react"

export default function Project({details, theme}) {
    const tags = details.tags
    return (
        <Item>
            <Item.Image src={details.image} />
            <Item.Content>
                <Item.Header className={theme && "ui grey inverted header"} as='a'>
                    {details.title}
                </Item.Header>
                <Item.Description>
                    <Segment inverted={theme} basic compact>
                        {details.description}
                    </Segment>
                </Item.Description>
                <Item.Extra> 
                    {tags && tags.map((tag) => {
                        return <Label key={tag} content={tag} color="teal" />
                    })}
                </Item.Extra>
            </Item.Content>
        </Item>        
    )

}
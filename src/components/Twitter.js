import { Segment } from 'semantic-ui-react';
import { Timeline } from 'react-twitter-widgets'


export default function Navbar({theme}) {


    return (<>
        <Segment inverted={theme}>
            <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'ross_farcas'
            }}
            options={{
                height: '700',
                theme: theme ? 'dark' : 'light'
            }}
            />
        </Segment>
    </>)
}
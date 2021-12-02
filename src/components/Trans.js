import React, {useEffect, useState} from "react"
import { Transition } from 'semantic-ui-react'

export default function Trans({children}) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        
        setInterval(() => {
            setVisible(true)
        }, 100)
        
    }, [])
    return (
        <Transition visible={visible} animation='fade' duration={1000}>{children}</Transition>
    )
}
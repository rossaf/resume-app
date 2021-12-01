import React, {useState} from "react"
import { Container, Header, Modal, Button, Segment, Dimmer} from 'semantic-ui-react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import useWindowDimensions from "./useWindowDimensions.js"


export default function Resume({theme}) {
    const [numPages, setNumPages] = useState(null);
    const [open, setOpen] = React.useState(false) 
    const { height, width } = useWindowDimensions();

    function pdfWidth() {
        if (width < 1200) {
            return width * 0.95
        } else {
            return width * 0.345
        }
    }

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (<>
    <Container>
      <Segment inverted={theme}>
        <Document
          file="/Resume-2021.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={numPages} width={pdfWidth()} />
        </Document>
        <p>Page {numPages} of {numPages}</p>
      </Segment>
    </Container>
    
  </>);
}
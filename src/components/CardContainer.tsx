import React from 'react'
import { Card } from 'react-bootstrap';

const CardContainer : React.FC = ({ children }) => {
    return (
        <Card>
            { children }
        </Card>
    )
}

export default CardContainer

import React from 'react'
import styled from 'styled-components'

const ButtonPrimary = (props) => {
    return <Button type="submit" isReady={props.isReady}>
                {props.children}
            </Button>
}

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    cursor: ${props => props.isReady ? 'pointer' : 'not-allowed'};  

    :focus {
        outline: none;
    }

    :hover {
        background: linear-gradient(91.4deg, #9eecd9 0%, #2fb8ff 100%);
    }
`

export default ButtonPrimary
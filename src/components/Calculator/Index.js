import React, { useEffect, useState } from 'react'
import Form from './../Form/Index'
import Title from './../Title/index'
import Input from './../Input/index'
import ButtonPrimary from '../Button/Index'

import useInput from '../../hooks/useInput'

const Calculator = () => {
    const firstNumber = useInput('')
    const secondNumber = useInput('')
    const [result, setResult] = useState(0)

    const sum = function (number1, number2) {
        return number1 + number2
    }

    const submit = (event) => {
        event.preventDefault()
        const total = sum(parseInt(firstNumber.value), parseInt(secondNumber.value))
        setResult(total)
    }

    return (
        <>            
            <Form onSubmit={(e) => submit(e)}>
                <Title>Somar</Title>
                <Input type="number" placeholder='Digite um número' {...firstNumber}/>
                <Input type="number" placeholder='Digite outro número' {...secondNumber}/>
                <ButtonPrimary isReady={true}>
                    Somar
                </ButtonPrimary>
            </Form>                             
        
            <h1>
                Resultado: {result}
            </h1>
        </>
    )
}

export default Calculator

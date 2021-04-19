import React, { useState } from 'react';
import Header from './components/Header'
import './App.css'
import CardContainer from './components/CardContainer';
import { Card, Container, Col, Form, Button } from 'react-bootstrap';
import { calculateTaxOnIncome }  from './utils/TaxCalculate'

const App: React.FC = () => {
  
  const [result, setResult] = useState<number>(0)

  const [monthlyIncome, setMonthlyIncome] = useState<number>(0)

  const getTaxableEarn = () => {
    if (monthlyIncome >= 0 && monthlyIncome <= 319) {
      setResult(0.00)
    } else if (monthlyIncome > 319) {
      const total = calculateTaxOnIncome(monthlyIncome)
      setResult(total)
    } else {
      setResult(0.00)
    }
  }

  return (
    <div>
       <Header>
         <h4>GRA DOMESTIC TAX CALCULATORS</h4>
       </Header>
      <main className="wrapper">
        <CardContainer>
              <Card.Header className="cardHeader">PAY AS YOU GO</Card.Header>
              <Card.Body>
                  <Container>
                    <Form>
                      <Form.Row>
                        <Col xs={20} md={6}>
                          <Form.Group controlId="formChargeableIncome">
                            <Form.Label>Enter <strong style={{ color: 'red' }}>Chargeable</strong> income</Form.Label>
                            <Form.Control aria-label="chargeable-input" required min={1} type="number" onChange={(e) => setMonthlyIncome(parseFloat(e.target.value))} placeholder="eg: 312" />
                          </Form.Group>
                        </Col>
                        <Col xs={20} md={6}>
                          <Form.Group controlId="formTotal">
                            <Form.Label>Payable Amount GHS</Form.Label>
                            <Form.Control value={result.toLocaleString(undefined, { minimumFractionDigits: 2 })} readOnly type="text" />
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </Form>   
                    <Button type="button" onClick={() => getTaxableEarn()} className='btn-block'>Calculate</Button>               
                  </Container>
              </Card.Body>
            </CardContainer>
       </main>
    </div>
  )
}

export default App



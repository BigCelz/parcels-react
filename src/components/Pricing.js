import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pricing.css'


// using a dynamic content
const pricingData = [
    {
        id: 1,
        plan: 'Basic',
        price: '£49',
        features: ['wireframing', 'Visual Design', 'Free Hosting', '15 Pages', 'Support & Assistance'],
        link: 'https://www.google.com'
    },

    {
        id: 2,
        plan: 'Premium',
        price: '£149',
        features: ['wireframing', 'Visual Design', 'Free Hosting', '15 Pages', 'Support & Assistance'],
        link: 'https://www.google.com'
    },

    {
        id: 3,
        plan: 'Ultimate',
        price: '£349',
        features: ['wireframing', 'Visual Design', 'Free Hosting', '15 Pages', 'Support & Assistance'],
        link: 'https://www.google.com'
    }
]

function Pricing() {
    return (
        <section id='pricing' className='block pricing-block'>
            <Container >
                <div className='title-holder'>
                    <h2> Pricing &amp; plans </h2>
                    <p className='subtitle'>Check our pricing & plans</p>
                </div>

                {/* adding the price cards */}
                <Row>
                    {
                        pricingData.map(pricing => {
                            return (
                                <Col md={4} key={pricing.id}>
                                    <div className='heading'>
                                        <h3>{pricing.plan}</h3>
                                        <span className='price'>{pricing.price}</span>
                                    </div>

                                    <div className='content'>
                                        <ListGroup>
                                            {
                                                pricing.features.map((feature, index) => {
                                                    return(
                                                    <ListGroup.Item key={index}>{feature}</ListGroup.Item>  
                                                    )
                                                })
                                            }
                                        </ListGroup>
                                    </div>

                                    <div className='btn-holder'>
                                        <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Pricing
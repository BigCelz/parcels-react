import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Services.css"

const servicesData = [
    {
        id: 1,
        icon: 'fas fa-clone',
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates.'
    },

    {
        id: 2,
        icon: 'fas fa-snowflake',
        title: 'Creative Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates.'
    },

    {
        id: 3,
        icon: 'fas fa-plug',
        title: 'Cultural Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates.'
    },

    {
        id: 4,
        icon: 'fas fa-desktop',
        title: 'Marketing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates.'
    },

    {
        id: 5,
        icon: 'fas fa-trophy',
        title: 'Graphic and 3D Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates.'
    },

    {
        id: 6,
        icon: 'fas fa-life-ring',
        title: 'Financial management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptates.'
    }
]

function Services() {
    return (
        <section id='services' className='block services-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <p className='subtitle'>Services we provide</p>
                </div>
                <Row className='services-row'>
                    {
                        servicesData.map(services => {
                            return (
                                <Col md={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon}></i>
                                    </div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Services
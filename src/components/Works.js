import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Works.css';
import Image from 'react-bootstrap/Image'
import Pagination from 'react-bootstrap/Pagination';


// using a dynamic content
const worksData = [
    {
        id: 1,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 2,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 3,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 4,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 5,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 6,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 7,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 8,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    },

    {
        id: 9,
        link: 'https://google.com',
        image: require('./images/ny.jpg'),
        title: 'lonely path',
        subtitle: 'web design'
    }
]

//react-bootstrap pagination function
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}


function Work() {
    return (
        <section id='work' className='works works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <p className='subtitle'>Our awesome work</p>
                </div>

                <Row className='portfoliolist'>
                    {
                        worksData.map(works => {
                            return (
                                <Col md={4} key={works.id} className='col-klass'>

                                    <div className='portfolio-wrapper'>
                                        <a href={works.link} className='works-link'>
                                            <img src={works.image} className='work-imgg' />
                                            <div className='label link-image-overlay text-center'>
                                                <h3>{works.title}</h3>
                                                <p>{works.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>

                                </Col>
                            )
                        })
                    }
                </Row>

                <div className='pagination-content'>
                    <Pagination>{items}</Pagination>
                </div>
            </Container>
        </section>
    )
}

export default Work
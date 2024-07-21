import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Teams.css'


// our dynamic data
const teamsData = [
    {
        id: 1,
        image: require('./images/user3.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Gabriel Hart',
        designation: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos.'
    },

    {
        id: 2,
        image: require('./images/user3.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Angelina Bean',
        designation: 'Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos.'
    },

    {
        id: 3,
        image: require('./images/user3.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'James Smith',
        designation: 'Engineer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos.'
    },

    {
        id: 4,
        image: require('./images/user3.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Donald Sinner',
        designation: 'Financial Secretary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos.'
    }
]

function Teams() {
    return (
        <section id='teams' className='block team-block'>
            <Container fluid>
                <div className='title-holder '>
                    <h2>Our Teams</h2>
                    <p className='subtitle'>Some of our experts</p>
                </div>

                {/* adding images and social media links */}
                <Row>
                    {
                        teamsData.map(teams => {
                            return (
                                <Col md={3} key={teams.id}>
                                    <div className='image'>
                                        <img src={teams.image} alt='image' className='image-pics' />
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul className='unordered-list'>
                                                    <li><a href={teams.fbLink}><i className="fa-brands fa-facebook"></i></a></li>
                                                    <li><a href={teams.twitterLink}><i className="fa-brands fa-twitter"></i></a></li>
                                                    <li><a href={teams.linkedinLink}><i className="fa-brands fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='content '>
                                        <h3>{teams.name}</h3>
                                        <span className='designation'>{teams.designation}</span>
                                        <p>{teams.description}</p>
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

export default Teams
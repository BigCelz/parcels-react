import React from 'react'
import Container from 'react-bootstrap/Container';
import './Testimonials.css'
import Carousel from 'react-bootstrap/Carousel';


var testimonialsData = [
    {
        id: 1,
        name: 'JOHN CENA',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea, atque temporibus veniam, adipisicing elit. Odio ea, atque temporibus veniam, Odio ea, atque temporibus veniam, adipisicing elit. Odio ea, atque temporibus veniam.",
        designation: 'Manager'
    },

    {
        id: 2,
        name: 'LAURA CROST',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea, atque temporibus veniam, adipisicing elit. Odio ea, atque temporibus veniam,  Odio ea, atque temporibus veniam, adipisicing elit. Odio ea, atque temporibus veniam.",
        designation: 'Accountant'
    },

    {
        id: 3,
        name: 'LISANDRO JOY',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea, atque temporibus veniam, adipisicing elit. Odio ea, atque temporibus veniam, Odio ea, atque temporibus veniam, adipisicing elit. Odio ea, atque temporibus veniam.",
        designation: 'Medic'
    }
]

function Testimonials() {
    return (
        <section id='testimonials' className='block testimonials-block'>
            <Container >
                <div className='title-holder text-white'>
                    <h2>Client Testimonials</h2>
                    <p className='subtitle'>What client says about us</p>
                </div>

                <Carousel controls={false} className='text-center text-white'>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <div>
                                        <p>{testimonials.description}</p>
                                        <cite className='name-manager'>
                                            <span className='name mb-2 '>{testimonials.name}</span>
                                            <span className='designation '>{testimonials.designation}</span>
                                        </cite>
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonials
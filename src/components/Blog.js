import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Blog.css'


const blogData = [
    {
        id: 1,
        image: require('./images/word1.jpg'),
        title: 'Coffee Hours',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sed dolores neque voluptatem. Exercitationem numquam doloribus voluptas nulla quaerat eius mollitia maxime nam vero aut, eos ratione repudiandae, labore officiis!',
        link: 'https://www.google.com',
        time: '16 Nov 2024'
    },

    {
        id: 2,
        image: require('./images/word2.jpg'),
        title: 'Tips for UI design',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sed dolores neque voluptatem. Exercitationem numquam doloribus voluptas nulla quaerat eius mollitia maxime nam vero aut, eos ratione repudiandae, labore officiis!',
        link: 'https://www.google.com',
        time: '22 Nov 2024'
    },

    {
        id: 3,
        image: require('./images/word3.jpg'),
        title: 'Backend development',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sed dolores neque voluptatem. Exercitationem numquam doloribus voluptas nulla quaerat eius mollitia maxime nam vero aut, eos ratione repudiandae, labore officiis!',
        link: 'https://www.google.com',
        time: '16 Jan 2024'
    }
]

function Blog() {
    return (
        <section id='blog' className='block blog-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Latest from Blog</h2>
                    <p className='subttle'>Get our latest news from blog</p>
                </div>

                <Row>
                    {
                        blogData.map(blog => {
                            return (
                                <Col md={4} key={blog.id}>
                                    <div className='holder'>
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <time >{blog.time}</time>
                                                <Card.Title className='text-primary mt-2'>{blog.title}</Card.Title>
                                                <Card.Text>
                                               {blog.description}
                                                </Card.Text>
                                                <a href={blog.link} className='btn btn-primary  btn-blog'>Read More <i className='fas fa-chevron-right'></i></a>
                                            </Card.Body>
                                        </Card>
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

export default Blog
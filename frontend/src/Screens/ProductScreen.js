import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios'

const ProductScreen = ({match}) => {

    const [product, setProduct ] = useState({})

    useEffect( () => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [match] )

    
    return (
        <>
            <Link to='/' className='btn btn-dark my-3'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt = {product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush' fluid>                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value ={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup >
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                {product.countInStock >0?'In Stock': 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                           
                            <Button className='btn-block' type= 'button'
                              disabled={product.countInStock===0}
                            >Add To Cart</Button>
                            
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen

import React from 'react';
import { Button, Jumbotron, Container, Carousel, Card, CardDeck } from 'react-bootstrap';

const ProductPage = () => {
    return (
        <div>
    
    <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src='assets/images/b5.webp' />
            <Card.Body>
            <h2>Anaya lawn</h2>
            <p>
                Chafoon karahi dupatta, <br/> print shirt
            </p>
            
            <Button variant="info" className="cardButton" href="/checkout">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src='assets/images/b4.webp' />
            <Card.Body>
            <h2>Khadi</h2>
            <p>
            Pure karahi dupatta, <br/> karandi trouser
            </p>
            
            <Button variant="info" className="cardButton" href="/checkout">Buy Now</Button>
            </Card.Body>
                </Card>

              
                

        <Card>
            <Card.Img variant="top" src='assets/images/b3.webp' />
            <Card.Body>
            <h2>Gul Ahmed </h2>
            <p>
            Print shirt, <br/> karahi trouser
            </p>
            
            <Button variant="info" className="cardButton" href="/checkout">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
    

    <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src='assets/images/b8.webp' />
            <Card.Body>
            <h2>Ghani lawn</h2>
            <p>
                lauxury lawn with pure dupatta, <br/> print shirt
            </p>
            
            <Button variant="info" className="cardButton" href="/checkout">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src='assets/images/b9.webp' />
            <Card.Body>
            <h2>Khadi</h2>
            <p>
            Dark print shirts, <br/> karandi trouser
            </p>
            
            <Button variant="info" className="cardButton" href="/checkout">Buy Now</Button>
            </Card.Body>
                </Card>

              
                

        <Card>
            <Card.Img variant="top" src='assets/images/b10.webp' />
            <Card.Body>
            <h2>Twakkal</h2>
            <p>
            Print shirt, <br/> karahi dupatta
            </p>
            
            <Button variant="info" className="cardButton" href="/checkout">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
    
    </div>
    )
}

export default ProductPage

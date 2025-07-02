import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from './Header'
import { FaCamera, FaClock, FaCocktail, FaParking, FaPumpSoap, FaSnowflake, FaTshirt, FaTv, FaUtensils, FaVideo, FaWifi } from 'react-icons/fa'

const HotelService = () => {
  return (
    <>
    <Container className="mb-2">
      <Header title={"Our Services"}/>

      <Row>
        <h4 className='text-center mt-2'>
          Services at <span className='hotel-color'>ResidencyInn </span>
          <span className='gap-2'>
            <FaClock/> - 24-Hour Front Desk
          </span>
        </h4>
      </Row>
      <hr />

      <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaWifi className='hotel-color'/> <span className='hotel-color'>WiFi</span>
              </Card.Title>
              <Card.Text>Effortless connectivity with complimentary high-speed internet
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="hotel-color">
                <FaTshirt className='hotel-color'/> <span className='hotel-color' >Laundry</span>
              </Card.Title>
              <Card.Text>Crisp, clean garments — professionally laundered with care.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaUtensils className="hotel-color"/> <span className="hotel-color">Culinary</span>
              </Card.Title>
              <Card.Text>Exquisite dining with a curated menu of global and local flavors </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaSnowflake className="hotel-color"/><span className="hotel-color"> Air Conditioning</span>
              </Card.Title>
              <Card.Text>Cooling comfort that keeps you refreshed throughout your stay</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="hotel-color">
                <FaCocktail className="hotel-color"/> <span className="hotel-color">Mini-Bar</span>
              </Card.Title>
              <Card.Text>Enjoy a refreshing drink or snack from our in-room mini-bar</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="hotel-color">
                <FaParking className="hotel-color"/> <span className="hotel-color">Parking</span>
              </Card.Title>
              <Card.Text>Conveniently located parking to enhance your stay</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="hotel-color">
                <FaTv className="hotel-color"/> <span className="hotel-color">Entertainment</span>
              </Card.Title>
              <Card.Text>Binge your favorites or catch the latest shows from the comfort of your bed</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="hotel-color">
                <FaVideo className="hotel-color"/> <span className="hotel-color">CCTV Surveillance</span>
              </Card.Title>
              <Card.Text>Your safety is our priority with full-premises CCTV monitoring</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="hotel-color">
                <FaPumpSoap className="hotel-color"/> <span className="hotel-color">Essentials</span>
              </Card.Title>
              <Card.Text>Enjoy complimentary toiletries for a fresh and comfortable stay</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
    </>
  )
}

export default HotelService
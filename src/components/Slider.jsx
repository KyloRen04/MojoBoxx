import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ borderRadius: "20px", height: "230px" }}
            className="w-100"
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Zero fees on Hotel cancellations</h3>
            <p>up to 24 hours prior to check-in time on 20,000+ Hotels</p>
            <Button variant="light" href="#">
              hotel cancellation
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: "20px", height: "230px" }}
            className="w-100"
            src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Stress-free domestic cancellations</h3>
            <p>
              Airline refunds upto $50 for COVID & other emergencies, at no
              extra cost.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: "20px", height: "230px" }}
            className="w-100"
            src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Escape for a while</h3>
            <p>Enjoy the freedom of a monthly stay on Booking.com</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

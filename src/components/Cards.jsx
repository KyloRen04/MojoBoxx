import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <CardGroup>
      <Card style={{ backgroundColor: "#ffeaa7", marginBottom: "25px", borderRadius: "20px" }}>
        <Card.Body>
          <Card.Text style={{ color: "black" }}>
            <h1 style={{color: "#ff6600", fontWeight: "bold"}}>Want to save more?</h1>
            <p style={{fontWeight: "bold"}}>Login & get up to extra 20% off on Hotels</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <Card style={{ backgroundColor: "#ffeaa7", width: "18rem", marginRight: "20px", borderRadius: "20px"  }}>
          <Card.Body>
            <Card.Text style={{ color: "black" }}>
              <h1 style={{backgroundColor: "white", borderRadius: "10px"}}>CTHOTEL</h1>
              <p style={{fontWeight: "bold"}}>Flat 15% off on Domestic Hotels</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "#ffeaa7", width: "18rem", borderRadius: "20px"  }}>
          <Card.Body>
            <Card.Text style={{ color: "black" }}>
              <h1>Best Deals!</h1>
              <p style={{fontWeight: "bold"}}>Up to 40% off on Long Weekend Stays</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </CardGroup>
  );
}

export default Cards;

import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

function Cards() {
  return (
    <div className="saveMore">
      <CardGroup>
        <Card
          style={{
            backgroundColor: "#ffeaa7",
            marginBottom: "25px",
            borderRadius: "20px",
            padding: "12px",
          }}
        >
          <Card.Body
            style={{ padding: "0px", display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon
              icon={faBullhorn}
              style={{ color: "#ff6600" }}
              size="2xl"
            />
            <Card.Text style={{ color: "black", marginLeft: "24px" }}>
              <h1
                style={{
                  color: "#ff6600",
                  fontWeight: "bold",
                  marginBottom: "0px",
                }}
              >
                Want to save more?
              </h1>
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Login & get up to extra 20% off on Hotels
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card
            style={{
              backgroundColor: "#ffeaa7",
              width: "14rem",
              marginRight: "20px",
              borderRadius: "20px",
              padding: "4px",
            }}
          >
            <Card.Body style={{ paddingBottom: "0px" }}>
              <Card.Text style={{ color: "black" }}>
                <h2
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    textAlign: "center",
                    width: "50%",
                    fontSize: "14px",
                    padding: "4px 0",
                  }}
                >
                  CTHOTEL
                </h2>
                <p
                  style={{
                    fontWeight: "bold",
                    width: "60%",
                    marginTop: "24px",
                  }}
                >
                  Flat 15% off on Domestic Hotels
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#ffeaa7",
              width: "14rem",
              borderRadius: "20px",
              padding: "4px",
            }}
          >
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                <h5 style={{ color: "rgba(0,0,0,0.6)", fontSize: "16px" }}>
                  BEST DEALS!
                </h5>
                <p style={{ fontWeight: "bold", marginTop: "28px" }}>
                  Up to 40% off <br />
                  on Long Weekend Stays
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
}

export default Cards;

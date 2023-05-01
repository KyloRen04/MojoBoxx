import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Forms() {
  return (
    <div
      style={{
        marginBottom: "50px",
        backgroundColor: " #1e272e",
        borderRadius: "10px",
      }}
    >
      <Form className="text-center" style={{ padding: "2.5%" }}>
        <Row>
          <Form.Group>
            <Form.Control
              style={{
                border: "none",
                backgroundColor: "#1e272e",
                color: "white",
              }}
              placeholder="Select Destination"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              style={{
                border: "none",
                backgroundColor: "#1e272e",
                color: "white",
              }}
              placeholder="10,Jan2023 | Check-out "
              disabled
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group style={{ width: "100%" }}>
            <Form.Select
              style={{
                border: "none",
                backgroundColor: "#1e272e",
                color: "white",
              }}
              disabled
            >
              <option>2 Adults, 1 Room</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button
          style={{
            position: "absolute",
            top: "360px",
            left: "210px",
            backgroundColor: "#1e272e",
            borderRadius: "20px",
          }}
          variant="secondary"
          type="submit"
        >
          Search Hotels
        </Button>
      </Form>
    </div>
  );
}

export default Forms;

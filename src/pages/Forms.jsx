import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendar,
  faUserGroup,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Forms() {
  return (
    <div
      style={{
        marginBottom: "50px",
        backgroundColor: " #1e272e",
        borderRadius: "10px",
      }}
    >
      <Form
        className="text-center"
        style={{
          padding: "2.5%",
          border: "1px solid grey",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <Row>
          <Form.Group
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
            }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                color: "#677078",
                top: "10px",
                left: "20px",
              }}
              size="s"
            />
            <input
              placeholder="Select Destination"
              className="inputForm-select"
            />
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{
                color: "#677078",
                top: "8px",
                right: "20px",
                position: "absolute",
              }}
              size="s"
            />
            {/* <Form.Control
              style={{
                backgroundColor: "#1e272e",
                color: "white",
              }}
              placeholder="Select Destination"
              disabled
            /> */}
          </Form.Group>
          <Form.Group className="calendar-picker">
            <FontAwesomeIcon
              icon={faCalendar}
              style={{
                color: "#677078",
                top: "8px",
                left: "12px",
                position: "absolute",
              }}
              size="s"
            />
            <Form.Control
              style={{
                border: "none",
                backgroundColor: "#1e272e",
                color: "white",
                marginLeft: "16px",
                width: "90%",
                borderRadius: "0px",
              }}
              placeholder="10,Jan2023 | Check-out "
              type="date"
              defaultValue="2023-01-10"
            />
            <Form.Control
              style={{
                border: "none",
                backgroundColor: "#1e272e",
                color: "white",
                marginLeft: "16px",
                width: "90%",
              }}
              placeholder="Check-out"
              // type="date"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <FontAwesomeIcon
              icon={faUserGroup}
              style={{
                color: "#677078",
                top: "8px",
                left: "12px",
              }}
              size="s"
            />
            <Form.Select
              style={{
                border: "none",
                backgroundColor: "#1e272e",
                color: "white",
              }}
            >
              <option>2 Adults, 1 Room</option>
              <option>1 Adult, 1 Room</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button
          style={{
            position: "absolute",
            bottom: "-15px",
            left: "35%",
            backgroundColor: "rgba(30, 39, 46, 0.7)",
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

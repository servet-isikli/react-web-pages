import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MyCard = (props) => {
    const navigate = useNavigate();
    const { img, link, text, name } = props.course;

    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button
                        variant="primary"
                        style={{ background: "#C400FF" }}
                        onClick={() => navigate(`/${link}`)}
                    >
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyCard;

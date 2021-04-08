import { useState } from "react";
import { Jumbotron, Modal, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
import Scores from "./Scores";

export default function Results({ questions }) {
    const correct = questions.filter(question => question.answer === question.correct).length;
    const score = (correct / questions.length) * 100;
    const [initials, setInitials] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);
    const [scores, setScores] = useState(null);
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
  

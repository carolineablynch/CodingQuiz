import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Form, Button } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const renderers = {
    code: ({ value }) => <SyntaxHighlighter style={a11yDark} language="javascript" children={value} />
  }
  const Hr = () => <hr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }} />;
  const prevNextStyle = { marginLeft: 5, marginRight: 5 };
  const backgroundColorForChoice = ({ answer, correct }, index, finished) => {
    if(!finished) return "white";
    if(answer !== correct && answer === index) return "rgba(255, 0, 0, 0.3)";
    if(answer === index || correct === index) return "rgba(0, 128, 0, 0.3)";
  }

  
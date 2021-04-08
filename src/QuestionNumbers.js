import { Button, ButtonGroup } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const buttonLogo = ({ answer, correct }) => {
    if(answer === correct) return <FaCheck size={10} color="white" />

    return <FaTimes size={10} color="white" />
}
const variant = ({ answer, correct }, finished) => {
  if(answer === correct) return "success";
  if(answer !== undefined && answer !== correct) return "danger";
  if(finished) return "danger";
  
  return "primary";
}
import { useNavigate } from "react-router-dom";

export default function SuccessfulReg() {
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <h2 style={{ color: "red" }}>Registration is Successfull !!</h2>
        <h5>Now You can login</h5>
        <br></br>
      </form>
    </div>
  );
}

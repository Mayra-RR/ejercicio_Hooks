import * as React from "react";
import {Form, Container, Row, Col} from 'reactstrap';
import { GlobalContext } from "./GlobalContextProvider";
import TextField from '@material-ui/core/TextField';


const Login = () => {
  const { username, password } = React.useContext(GlobalContext);

  const [userInput, setUser] = React.useState("");
  const [passwordInput, setPassword] = React.useState("");

  return (

    <Container>
     <Row>
     <Col lg="4">
    </Col>
          <Col lg="4">
    <Form >
      <div>
        <TextField label="username" onChange={e => setUser(e.target.value)} />
      </div>
      <div>
        <TextField
          label="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
    {console.log(userInput)}
    {console.log(passwordInput)}

      <div>
        <button
          onClick={() => {
            if (username === userInput && password === passwordInput) {
              console.log("Successfull login");
            } else {
              console.log("Unsuccessfull login");
            }
          }}
        >
          Log in
        </button>{" "}
      </div>
    </Form>
    </Col>
    <Col lg="4">
    </Col>
    </Row>
    </Container>
  );
};

export default Login;

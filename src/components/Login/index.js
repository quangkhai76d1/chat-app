import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth } from "../firebase/config";
import firebase from "@firebase/app-compat";
import { useNavigate } from "react-router";
import { GoogleCircleFilled } from "@ant-design/icons";
import { FacebookFilled } from "@ant-design/icons";

const { Title } = Typography;

const ggProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  const handleGGLogin = () => {
    auth.signInWithPopup(ggProvider);
  };

  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }}>Chat App</Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleGGLogin}
          >
            <GoogleCircleFilled style={{ fontSize: 18 }} />
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFBLogin}>
            <FacebookFilled style={{ fontSize: 18 }} />
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

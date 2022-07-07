import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  margin-bottom: 10px;
  .author {
    margin-left: 5px;
    font-weigt: bold;
  }
  .date {
    margin-left: 10px;
    font-size: 12px;
    color: #a7a7a7;
  }
  .content {
    margin-letf: 30px;
  }
`;

const Message = ({ text, displayName, createdAt, photoURL }) => {
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>A</Avatar>
        <Typography.Text className='author'>{displayName}</Typography.Text>
        <Typography.Text className='date'>{createdAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className='content'>{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
};

export default Message;

import React, { useState } from "react";

const EventFunctionComponent = () => {
  const [form, setForm] = useState({
    userNickName: "",
    message: "",
  });

  const { userNickName, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onClick = () => {
    alert(userNickName + " : " + message);
    setForm({
      userNickName: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수 컴포넌트로 이벤트 핸들링 구현</h1>
      <input
        type="text"
        name="userNickName"
        placeholder="사용자 닉네임"
        value={userNickName}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>전 송</button>
    </div>
  );
};

export default EventFunctionComponent;

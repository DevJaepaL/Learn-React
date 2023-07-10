import React, { useEffect, useReducer, useState } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <b>현재 이름 : </b>
        {name}
        <br />
        <b>현재 닉네임 : </b>
        {nickName}
      </div>
    </div>
  );
};

export default Info;

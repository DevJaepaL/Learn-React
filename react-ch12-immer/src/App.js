import { useRef, useCallback, useState } from "react";
import { produce } from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", userName: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // Input 수정을 위한 메소드
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  // Form 등록을 위한 메소드
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        userName: form.userName,
      };

      // array에 새로운 항목 등록
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 새로 초기화
      setForm({
        name: "",
        userName: "",
      });

      nextId.current += 1; // 새로운 ID 번호 부여
    },
    [data, form.name, form.userName]
  );

  // 항목을 삭제하는 메소드
  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* 아이디 입력 Input */}
        <input
          name="userName"
          placeholder="아이디"
          value={form.userName}
          onChange={onChange}
        />
        {/* 이름 입력 Input */}
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        {/* Button */}
        <button type="submit">등 록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.userName} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

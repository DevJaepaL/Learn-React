import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // 일정 항목에 대한 상태는 useState를 통해 관리한다.
  const [todos, setTodos] = useState([]);

  // 객체의 고유값으로 사용될 ID, ref를 이용함.
  const nextId = useRef(0);
  const onInsert = useCallback(
    (todayText) => {
      const todo = {
        id: nextId.current,
        todayText,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1; // 할 일이 추가되면 다음 ID 값 재 설정.
    },
    [todos],
  );

  const onRemove = useCallback((id) => {
    // filter 함수를 통해 선택한 아이디를 삭제한 배열로 변환
    setTodos(todos.filter((todo) => todo.id !== id));
  });

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

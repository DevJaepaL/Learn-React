import React, { useReducer, useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 랙 발생을 위한 많은 데이터 렌더링
function createBulkTodo() {
  const arr = [];

  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      todayText: `할 일 ${i}`,
      checked: false,
    });
  }

  return arr;
}

// useReducer를 이용한 리렌더링 방지
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // 일정 항목에 대한 상태는 useState를 통해 관리한다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodo);

  // 객체의 고유값으로 사용될 ID, ref를 이용함.
  const nextId = useRef(2501);
  const onInsert = useCallback((todayText) => {
    const todo = {
      id: nextId.current,
      todayText,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // 할 일이 추가되면 다음 ID 값 재 설정.
  }, []);

  const onRemove = useCallback((id) => {
    // filter 함수를 통해 선택한 아이디를 삭제한 배열로 변환
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

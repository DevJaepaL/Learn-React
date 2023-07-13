import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">오늘의 일정</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

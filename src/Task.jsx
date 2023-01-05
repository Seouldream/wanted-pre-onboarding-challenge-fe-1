export default function Task({
  task, onClickSetTaskField, onClickOpenModifyHandler, onClickDeleteTask,
}) {
  const handleClickModifyButton = (id) => {
    onClickOpenModifyHandler(id);
    onClickSetTaskField(id);
  };
  const handleClickDelete = (id) => {
    onClickDeleteTask(id);
  };

  return (
    <li>
      {task.title}
      <ul>
        <li>
          {task.content}
        </li>
      </ul>
      <button
        type="button"
        onClick={() => handleClickModifyButton(task.id)}
      >
        수정
      </button>
      <button
        type="button"
        onClick={() => handleClickDelete(task.id)}
      >
        삭제
      </button>
    </li>
  );
}

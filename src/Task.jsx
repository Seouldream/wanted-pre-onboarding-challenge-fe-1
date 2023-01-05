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
    <div>
      <h1>{task.title}</h1>
      <p>{task.content}</p>
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
    </div>
  );
}

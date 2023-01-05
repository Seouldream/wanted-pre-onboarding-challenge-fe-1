/* eslint-disable jsx-a11y/label-has-associated-control */

export default function TaskForm({
  taskField, onChangeTaskField, onSubmitTask,
}) {
  const handleChangeTaskField = (event) => {
    const { target: { name, value } } = event;
    onChangeTaskField({ name, value });
  };

  const handleSubmitTask = () => {
    onSubmitTask();
  };

  return (
    <div>
      <label htmlFor="input-title">
        제목
      </label>
      <input
        id="input-title"
        type="text"
        name="title"
        value={taskField.title}
        onChange={handleChangeTaskField}
      />
      <label htmlFor="input-content">
        내용
      </label>
      <input
        id="input-content"
        type="text"
        name="content"
        value={taskField.content}
        onChange={handleChangeTaskField}
      />
      <button
        type="button"
        onClick={handleSubmitTask}
      >
        추가
      </button>
    </div>
  );
}

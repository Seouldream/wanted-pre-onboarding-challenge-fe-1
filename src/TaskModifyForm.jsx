/* eslint-disable jsx-a11y/label-has-associated-control */
export default function TaskModifyForm({
  taskField, task, onChangeTaskField, onSubmitModify, onClickOpenModifyHandler,
}) {
  const handleSubmitModify = (id) => {
    onSubmitModify(id);
    onClickOpenModifyHandler(id);
  };

  const handleChangeTaskField = (event) => {
    const { target: { name, value } } = event;
    onChangeTaskField({ name, value });
  };

  const handleClickCancelModify = (id) => {
    onChangeTaskField({ name: 'title', value: '' });
    onChangeTaskField({ name: 'content', value: '' });
    onClickOpenModifyHandler(id);
  };

  return (
    <div>
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
      </div>
      <button
        type="button"
        onClick={() => handleSubmitModify(task.id)}
      >
        제출
      </button>
      <button
        type="button"
        onClick={() => handleClickCancelModify(task.id)}
      >
        취소
      </button>
    </div>
  );
}

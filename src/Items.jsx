/* eslint-disable react/prop-types */

export default function Items({ itemData, deleteTodo }) {
  return (
    <>
      <li className="list-group-item list-group-item-action my-1 py-1 border rounded border-warning">
        {itemData.content}
        <button
          onClick={() => deleteTodo(itemData.id)}
          type="button"
          className="btn-close border border-danger rounded float-end bg-danger"
          aria-label="close"
        ></button>
      </li>
    </>
  );
}

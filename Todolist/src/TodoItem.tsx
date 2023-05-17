import { FunctionComponent } from "react";
import { TodoItemType } from "./App";
// import 'font-awesome/css/font-awesome.min.css';

import './App.css';

type Props = {
  todo: TodoItemType;
  onCheckedChanged(id: number, checked: boolean): void;
  onDelete?(id: number): void;
};

const TodoItem: FunctionComponent<Props> = ({
  todo,
  onCheckedChanged,
  onDelete,
}) => {
  return (
    <div>
      <div className={todo.checked ? "todo--complete" : ""}>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={(e) => {
            onCheckedChanged(todo.id, !todo.checked);
          }}
        />
        <span className={todo.checked ? "completed" : ""}>{todo.task}</span>
        <button
        className="delete-icon"
        onClick={() => {
          onDelete && onDelete(todo.id);
        }}
      >
     x

      </button>
      </div>
      
    </div>
  );
};

export default TodoItem;

import type { Task } from '../types';

interface TaskItemProps {
    task: Task;
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <li style={{ textDecoration: task.isCompleted ? 'none' : 'line-through' }}>
            {task.title} — {task.isCompleted ? 'выполнено' : 'не выполнено'}
        </li>
    );
}

export default TaskItem;
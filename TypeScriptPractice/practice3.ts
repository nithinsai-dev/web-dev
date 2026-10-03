interface Task{
    id:number;
    title:string;
    done:boolean;
    createdAt:Date;
    userId:number
}

type CreateTaskInput = Omit<Task, "id" | "createdAt">;
type UpdateTaskInput = Partial<Pick<Task,"title"|"done">>;
type TaskSummary = Pick<Task,"id"|"title">;
type FrozenTask = Readonly<Task>;
type statusCounts = Record<"todo"|"doing"|"done",number>;

const updateTask = (id:number,changes:UpdateTaskInput)=>{}

updateTask(1,{done:true});

interface TodoListProps{
    todos:Task[];
    onDelete:(id:number)=>void;
}

// function TodoList({todos,onDelete}:TodoListProps){
//     return (
//         <ul>
//             (todos.map((t)=>{
//                 <li key={t.id}>
//                     {t.title}
//                     <button onClick={()=>onDelete(t.id)}>Delete</button>                
//                 </li>
//             }))
//         </ul>
//     );
// }
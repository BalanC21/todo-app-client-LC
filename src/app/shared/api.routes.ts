const apiUrl = 'http://localhost:3000/api/'
export const apiRoutes = {
  tasks: {
    allTasks: apiUrl + 'tasks',
    unCompleted: apiUrl + 'tasks?status=unCompleted',
    completed: apiUrl + 'tasks?status=completed',
    update: apiUrl + 'tasks/',
    postTask: apiUrl + 'tasks'
  }
}

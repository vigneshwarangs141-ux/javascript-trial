let tasks = [];
let completedTasks = 0;
let totalTasks = 0;

// Add a new task
function addTask(taskName, priority) {
    if (!taskName || !priority) return false;

    const exists = tasks.find(t => t.name === taskName);
    if (exists) return false;

    tasks.push({
        name: taskName,
        priority: priority.toLowerCase(),
        completed: false
    });

    totalTasks = tasks.length;
    completedTasks = tasks.filter(t => t.completed).length;

    return true; // REQUIRED
}

// Mark a task as complete
function completeTask(taskName) {
    const task = tasks.find(t => t.name === taskName);
    if (!task) return false;

    if (task.completed) return false;

    task.completed = true;

    completedTasks = tasks.filter(t => t.completed).length;
    totalTasks = tasks.length;

    return true; // REQUIRED
}

// Delete a task
function deleteTask(taskName) {
    const index = tasks.findIndex(t => t.name === taskName);

    if (index === -1) return false;

    if (tasks[index].completed) {
        completedTasks--;
    }

    tasks.splice(index, 1);

    totalTasks = tasks.length;

    return true; // REQUIRED
}

function getTotalTasks() {
    return totalTasks;
}

function getCompletedTasks() {
    return completedTasks;
}

function getProductivityMessage() {
    if (totalTasks === 0) {
        return "Let's get started on your tasks!";
    }

    const percentage = (completedTasks / totalTasks) * 100;

    if (percentage === 0) {
        return "You can do it! Start by completing your first task.";
    }

    if (percentage < 100) {
        return "You're making great progress!";
    }

    return "Congratulations! All tasks completed!";
}
function addTask(taskName, priority) {
    if (!taskName || !priority) return false;

    const exists = tasks.find(t => t.name === taskName);
    if (exists) return false;

    tasks.push({
        name: taskName,
        priority: priority.toLowerCase(),
        completed: false
    });

    totalTasks = tasks.length;
    completedTasks = tasks.filter(t => t.completed).length;

    return true;
}

function completeTask(taskName) {
    const task = tasks.find(t => t.name === taskName);
    if (!task) return false;

    if (task.completed) return false;

    task.completed = true;
    completedTasks = tasks.filter(t => t.completed).length;

    return true;
}

function deleteTask(taskName) {
    const index = tasks.findIndex(t => t.name === taskName);
    if (index === -1) return false;

    if (tasks[index].completed) {
        completedTasks--;
    }

    tasks.splice(index, 1);
    totalTasks = tasks.length;

    return true;
}

function getTotalTasks() {
    return totalTasks;
}

function getCompletedTasks() {
    return completedTasks;
}

function getProductivityMessage() {
    if (totalTasks === 0) {
        return "Let's get started on your tasks!";
    }

    const percent = (completedTasks / totalTasks) * 100;

    if (percent === 0) {
        return "You can do it! Start by completing your first task.";
    }

    if (percent < 100) {
        return "You're making great progress!";
    }

    return "Congratulations! All tasks completed!";
}

function generateTreeGridData(parentCount = 1000, childCount = 5) {
  const data = [];
  let taskId = 1;

  const startBaseDate = new Date('02/01/2025');

  for (let i = 1; i <= parentCount; i++) {
    const parentStart = new Date(startBaseDate);
    parentStart.setDate(parentStart.getDate() + i);

    const parentEnd = new Date(parentStart);
    parentEnd.setDate(parentEnd.getDate() + 5);

    const parentTaskId = taskId++;

    const parentTask = {
      TaskID: parentTaskId,
      TaskName: `Parent Task ${i}`,
      StartDate: parentStart,
      EndDate: parentEnd,
      Duration: 5,
      Subtasks: []
    };

    for (let j = 1; j <= childCount; j++) {
      const childStart = new Date(parentStart);
      childStart.setDate(childStart.getDate() + j);

      const childEnd = new Date(childStart);
      childEnd.setDate(childEnd.getDate() + 1);

      parentTask.Subtasks.push({
        TaskID: taskId++,
        TaskName: `Child Task ${i}.${j}`,
        StartDate: childStart,
        EndDate: childEnd,
        Duration: 1
      });
    }

    data.push(parentTask);
  }

  return data;
}

// ✅ Generate 1000 parent records (each with 5 children)
const data = generateTreeGridData(1000, 5);
export const employees = [
  {
    id: 1,
    firstName: "John",
    password: "123",
    email: "e@e.com",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task 1 for Employee 1",
        description: "Description for Task 1.",
        taskDate: "2024-10-01",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        title: "Task 2 for Employee 1",
        description: "Description for Task 2.",
        taskDate: "2024-10-05",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        title: "Task 3 for Employee 1",
        description: "Description for Task 3.",
        taskDate: "2024-10-10",
        category: "Documentation",
      },
    ],
    taskCounts: {
      active: 0,
      new: 0,
      failed: 0,
      completed: 0,
    },
  },
  {
    id: 2,
    firstName: "Jane",
    password: "123",
    email: "employee2@example.com",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task 1 for Employee 2",
        description: "Description for Task 1.",
        taskDate: "2024-10-02",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        failed: false,
        completed: false,
        title: "Task 2 for Employee 2",
        description: "Description for Task 2.",
        taskDate: "2024-10-06",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        title: "Task 3 for Employee 2",
        description: "Description for Task 3.",
        taskDate: "2024-10-11",
        category: "Testing",
      },
    ],
    taskCounts: {
      active: 0,
      new: 0,
      failed: 0,
      completed: 0,
    },
  },
  {
    id: 3,
    firstName: "Mike",
    password: "123",
    email: "employee3@example.com",
    tasks: [
      {
        active: false,
        newTask: true,
        failed: false,
        completed: false,
        title: "Task 1 for Employee 3",
        description: "Description for Task 1.",
        taskDate: "2024-10-03",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task 2 for Employee 3",
        description: "Description for Task 2.",
        taskDate: "2024-10-07",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        title: "Task 3 for Employee 3",
        description: "Description for Task 3.",
        taskDate: "2024-10-12",
        category: "Documentation",
      },
    ],
    taskCounts: {
      active: 0,
      new: 0,
      failed: 0,
      completed: 0,
    },
  },
  {
    id: 4,
    firstName: "Sara",
    password: "123",
    email: "employee4@example.com",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task 1 for Employee 4",
        description: "Description for Task 1.",
        taskDate: "2024-10-04",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task 2 for Employee 4",
        description: "Description for Task 2.",
        taskDate: "2024-10-08",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        title: "Task 3 for Employee 4",
        description: "Description for Task 3.",
        taskDate: "2024-10-13",
        category: "Testing",
      },
    ],
    taskCounts: {
      active: 0,
      new: 0,
      failed: 0,
      completed: 0,
    },
  },
  {
    id: 5,
    firstName: "Tom",
    password: "123",
    email: "employee5@example.com",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        title: "Task 1 for Employee 5",
        description: "Description for Task 1.",
        taskDate: "2024-10-05",
        category: "Documentation",
      },
      {
        active: false,
        newTask: true,
        failed: false,
        completed: false,
        title: "Task 2 for Employee 5",
        description: "Description for Task 2.",
        taskDate: "2024-10-09",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        title: "Task 3 for Employee 5",
        description: "Description for Task 3.",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
    taskCounts: {
      active: 0,
      new: 0,
      failed: 0,
      completed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    password: "123",
    email: "admin@example.com",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employee") || !localStorage.getItem("admin")) {
    localStorage.setItem("employee", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
const employee = [
  {
    "id": 1,
    "email": "ali.khan@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "taskTitle": "Update Dashboard UI",
        "description": "Improve card layout and add shadow effects.",
        "taskDate": "2026-02-20"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Fix Login Bug",
        "description": "Resolve authentication issue in login form.",
        "taskDate": "2026-02-18"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Create Navbar",
        "description": "Build responsive navbar using Tailwind.",
        "taskDate": "2026-02-15"
      }
    ]
  },
  {
    "id": 2,
    "email": "sara.ahmed@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "taskTitle": "Design Task Modal",
        "description": "Create modal form to add new tasks.",
        "taskDate": "2026-02-19"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Setup Routing",
        "description": "Implement React Router for navigation.",
        "taskDate": "2026-02-14"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Optimize Components",
        "description": "Refactor components for better reusability.",
        "taskDate": "2026-02-17"
      }
    ]
  },
  {
    "id": 3,
    "email": "usman.sheikh@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "taskTitle": "Implement Dark Mode",
        "description": "Add toggle for light and dark theme.",
        "taskDate": "2026-02-21"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Deploy to Vercel",
        "description": "Deploy project and fix production issues.",
        "taskDate": "2026-02-10"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Add Form Validation",
        "description": "Validate inputs using custom logic.",
        "taskDate": "2026-02-16"
      }
    ]
  },
  {
    "id": 4,
    "email": "hina.malik@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "taskTitle": "Create Sidebar",
        "description": "Build collapsible sidebar menu.",
        "taskDate": "2026-02-22"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Setup Context API",
        "description": "Manage global state using Context API.",
        "taskDate": "2026-02-12"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Improve Responsiveness",
        "description": "Make dashboard mobile-friendly.",
        "taskDate": "2026-02-18"
      }
    ]
  },
  {
    "id": 5,
    "email": "zain.raza@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "taskTitle": "Add Search Feature",
        "description": "Implement search functionality for tasks.",
        "taskDate": "2026-02-23"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Create Footer",
        "description": "Design responsive footer section.",
        "taskDate": "2026-02-11"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Connect API",
        "description": "Fetch employee data from mock API.",
        "taskDate": "2026-02-19"
      }
    ]
  }
]

const admin =[{
  "admin": {
    "id": 101,
    "email": "admin@company.com",
    "password": "123"
  }
}]



// used same variable of const tpe to store data and setting data  so got  error



// Get data


  

// Save initial data if localStorage is empty

  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employee))
  }

  if (!localStorage.getItem('admins')) {
    localStorage.setItem('admins', JSON.stringify(admin))
  }




// Get data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || []
  const admins = JSON.parse(localStorage.getItem('admins')) || []
  return { employees, admins }
}

const tasks = [
  {
    id: 1,
    name: "Limpiar la casa",
    description: "Aspirar,limpiar los pisos y ordenar la sala",
    dueDate: "2024-04-29T00:00:00.000Z",
    status: "not started",
    priority: "high",
    projectCategory: "tareas domesticas",
    tags: ["hogar",
      "limpieza"],
    favorite: true
  },

  {
    id: 2,
    name: "Comprar comestibles",
    description: "Hacer una lista de compras y visitar el supermercado",
    dueDate: "2024-04-30T00:00:00.000Z",
    status: "in progress",
    priority: "medium",
    projectCategory: "compras",
    tags: ["comida",
      "hogar"],
    favorite: false
  },

  {
    id: 3,
    name: "Enviar informe de ventas",
    description: "Recopilar datos de ventas y preparar un informe detallado",
    dueDate: "2024-05-02T00:00:00.000Z",
    status: "not started",
    priority: "high",
    projectCategory: "trabajo",
    tags: ["oficina",
      "ventas"],
    favorite: true
  },

  {
    id: 4,
    name: "Arreglar el jardín",
    description: "Cortar el césped, podar los arbustos y plantar flores",
    dueDate: "2024-05-05T00:00:00.000Z",
    status: "in progress",
    priority: "low",
    projectCategory: "tareas domesticas",
    tags: ["hogar",
      "jardín"],
    favorite: false
  },

  {
    id: 5,
    name: "Estudiar para el examen",
    description: "Repasar los apuntes de clase y hacer ejercicios de práctica",
    dueDate: "2024-05-10T00:00:00.000Z",
    status: "not started",
    priority: "high",
    projectCategory: "educacion",
    tags: ["estudios",
      "examen"],
    favorite: false
  },

  {
    id: 6,
    name: "Planificar las vacaciones",
    description: "Investigar destinos, reservar vuelos y alojamiento",
    dueDate: "2024-05-15T00:00:00.000Z",
    status: "done",
    priority: "medium",
    projectCategory: "viajes",
    tags: ["vacaciones",
      "aventura"],
    favorite: true
  },

  {
    id: 7,
    name: "Leer un libro",
    description: "Leer el libro 'El nombre del viento' de Patrick Rothfuss",
    dueDate: "2024-05-20T00:00:00.000Z",
    status: "not started",
    priority: "low",
    projectCategory: "ocio",
    tags: ["lectura",
      "fantasía"],
    favorite: false
  },

  {
    id: 8,
    name: "Hacer ejercicio",
    description: "Ir al gimnasio y realizar una rutina de entrenamiento",
    dueDate: "2024-05-25T00:00:00.000Z",
    status: "in progress",
    priority: "medium",
    projectCategory: "salud y bienestar",
    tags: ["fitness",
      "ejercicio"],
    favorite: true
  },

  {
    id: 9,
    name: "Organizar una fiesta",
    description: "Planificar una fiesta de cumpleaños,hacer lista de invitados y comprar suministros",
    dueDate: "2024-05-30T00:00:00.000Z",
    status: "not started",
    priority: "medium",
    projectCategory: "eventos",
    tags: ["celebración",
      "social"],
    favorite: false
  },

  {
    id: 10,
    name: "Aprender un nuevo idioma",
    description: "Inscribirse en un curso de idiomas y practicar diariamente",
    dueDate: "2024-06-05T00:00:00.000Z",
    status: "done",
    priority: "high",
    projectCategory: "educacion",
    tags: ["idiomas",
      "aprendizaje"],
    favorite: true
  }
];

export default tasks

// const tasksWithId = tasks.map(task => ({
//   ...task,
//   id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// }));

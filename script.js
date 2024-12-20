function DataTable(config, data) {
  const htmlTable = document.getElementById(config.parent.slice(1))
  const isIdPresent = "id" in data[0]
  htmlTable.innerHTML = `
  <table>
    <thead>
        <tr>
            ${isIdPresent ? "<th>№</th>" : ""}
            ${config.columns
              .map((element) => `<th>${element.title}</th>`)
              .join("")}
        </tr>
    </thead>
    <tbody>
        ${data
          .map((user) => {
            const row = []
            if (
              isIdPresent &&
              !config.columns.some((column) => column.value === "id")
            ) {
              row.push(`<td>${user.id}</td>`)
            }
            row.push(
              ...config.columns.map(
                (column) => `<td>${user[column.value] || ""}</td>`
              )
            )
            return `<tr>${row.join("")}</tr>`
          })
          .join("")}
    </tbody>
  </table>`
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
  ],
}

const config2 = {
  parent: "#secondTable",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Відділ", value: "department" },
    { title: "Вік", value: "age" },
  ],
}

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкін", age: 15 },
]

const example2 = [
  { name: "Вася", department:"IT", age: 12 },
  { name: "Сашко", surname: "Васечкін", age: 35, department:"Accounting"},
  { id: 888, department:"Outsource", surname: "Тестірович", age: 77 },
]

DataTable(config1, users)
DataTable(config2, example2)
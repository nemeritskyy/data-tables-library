# Practice Task - "Data tables"

Welcome!
This library displays JSON data about users in tables using configuration files with the following parameters:

- `parent` (HTML table ID)  
- `column.title` (column description)  
- `column.value` (name of the field in the user data)
### Config example
```bash
{
  parent: "#usersTable",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
  ],
}
```
### Data example
```bash
[
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкін", age: 15 },
]
```
### Result
```bash
<table>
    <thead>
        <tr>
            <th>№</th>
            <th>Ім’я</th>
            <th>Прізвище</th>
            <th>Вік</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>30050</td>
            <td>Вася</td>
            <td>Петров</td>
            <td>12</td>
        </tr>
        <tr>
            <td>30051</td>
            <td>Вася</td>
            <td>Васечкін</td>
            <td>15</td>
        </tr>
    </tbody>
  </table>
```
This repository was created for practice, is a showcase of my skills, experience, and theirs improving.

## Technologies Used

HTML, JS, CSS

To view the website locally:
Clone this repository:

```bash
git clone https://github.com/nemeritskyy/data-tables-library.git
```
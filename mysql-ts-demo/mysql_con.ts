import { getconnection } from "./db"

interface Employee {
    id : number,
    name : string,
    email : string,
    salary : number
}
async function main() {
    const connection = await getconnection()

const [rows] = await connection.query("SELECT * FROM employee")
const employees = rows as Employee[];
console.table(employees)

const [giri] = await connection.query("SELECT * From employee WHERE name = ?",['giri']
)
console.log(giri)
}
main().catch((err) => console.error("Error:", err.message));


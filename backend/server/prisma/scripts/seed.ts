import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
    const dataPath = path.join(__dirname, 'data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    for (const employee of data) {
        await prisma.employee.create({
            data: {
                name: employee.name,
                email: employee.email,
                checkInTime: new Date(employee.checkInTime),
                checkOutTime: new Date(employee.checkOutTime),
            },
        });
    }
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});

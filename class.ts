// userTask.ts
interface User {
    id: number;
    name: string;
    role: 'Admin' | 'User';
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
        console.log(`User ${user.name} added successfully.`);
    }

    listUsers(): void {
        console.log("Current Users:", this.users);
    }
}

const manager = new UserManager();
manager.addUser({ id: 1, name: "Zubayer", role: "Admin" });
manager.listUsers();
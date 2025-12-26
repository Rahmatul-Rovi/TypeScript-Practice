// api-mock.ts
interface UserData {
    id: number;
    username: string;
    email: string;
}

async function fetchUserData(userId: number): Promise<UserData | string> {
    console.log("Fetching user data... please wait.");
    
    // Simulating a 2-second delay
    return new Promise((resolve) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, username: "Zubayer", email: "zubayer@example.com" });
            } else {
                resolve("User not found!");
            }
        }, 2000);
    });
}

async function main() {
    const user = await fetchUserData(1);
    console.log("Result:", user);
}

main();
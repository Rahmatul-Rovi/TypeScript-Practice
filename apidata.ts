interface User {
    id: number;
    name: string;
    email: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
}

interface ApiResponse<T> {
    status: "success" | "error";
    data: T;
    message: string;
}

function getResponse<T>(data: T): ApiResponse<T> {
    return {
        status: "success",
        data: data,
        message: "Data is getting easily"
    };
}

const userData: User = { id: 1, name: "Arif", email: "arif@example.com" };
const userResponse = getResponse<User>(userData);

const postData: Post = { id: 101, title: "Learn TypeScript", content: "It is very easy!" };
const postResponse = getResponse<Post>(postData);

console.log("User Response:", userResponse.data.name);
console.log("Post Response:", postResponse.data.title);
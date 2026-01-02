// access.ts
enum UserRole {
    Admin,
    Editor,
    Viewer
}

function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log("Full Access: You can Delete, Edit, and View.");
    } else if (role === UserRole.Editor) {
        console.log("Limited Access: You can Edit and View.");
    } else {
        console.log("Guest Access: You can only View.");
    }
}

checkAccess(UserRole.Admin);
checkAccess(UserRole.Viewer);
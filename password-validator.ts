// validator.ts
function validatePassword(password: string): boolean {
    const minLength = 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) {
        console.log("Error: Password too short!");
        return false;
    }
    if (!hasNumber) {
        console.log("Error: Must contain at least one number!");
        return false;
    }
    if (!hasSpecialChar) {
        console.log("Error: Must contain a special character!");
        return false;
    }

    console.log("Success: Password is strong!");
    return true;
}

validatePassword("12345");        
validatePassword("StrongPass123!"); 
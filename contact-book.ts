// contacts.ts
const contactBook = new Map<string, string>();

contactBook.set("Zubayer", "01700000000");
contactBook.set("Brother", "01800000000");

function getContact(name: string): void {
    if (contactBook.has(name)) {
        console.log(`${name}'s Number: ${contactBook.get(name)}`);
    } else {
        console.log("Contact not found!");
    }
}

getContact("Zubayer");
getContact("Unknown");
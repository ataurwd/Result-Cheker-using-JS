var ticket;
var age = 25; // Example age
var student = false; // Example student status
var senior = false; // Example senior status

if (age < 10) {
    ticket = "Child's Ticket (Free)";
} else if (student) {
    ticket = 800 * 0.5; // 50% discount
} else if (senior) {
    ticket = 800 * 0.85; // 15% discount
} else {
    ticket = 800; // Regular fare
}

console.log(`this is our ticket price:${ticket}`);

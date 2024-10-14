function getTicketPrice(age) {
    if (age <= 12) {
      return "Ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
      return "Ticket price is $15.";
    } else {
      return "Ticket price is $20.";
    }
  }
  
  // Example usage:
  console.log(getTicketPrice(16));  // Output: Ticket price is $15.
  
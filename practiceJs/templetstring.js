// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"

// Create a new variable, sender, and set its value to your name
let sender="ankit"
// Use your sender variable instead of "Per"

// Break the email string into multiple lines
const email = `Hey ${recipient  }
! How is it going?
Cheers ${sender}
`


console.log(email)
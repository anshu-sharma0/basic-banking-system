function sendMoney(){
    let enterName = document.getElementById("enterName").value;
    let enterAmount = parseInt(document.getElementById("enterAmount").value);
    let enterSName = document.getElementById("enterSName").value;
    let findSenderBankAccount = enterSName + "BankBalance";
    let enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount){
        alert("Insufficient Balance!")
    }
    else{
        let findUserBankAccount = enterName + "BankBalance";
        let finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        let myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Transaction Successful! ₹${enterAmount} is sent to ${enterName}@gmail.com`)

        // HISTORY
        let createPTag = document.createElement("li");
        let textNode = document.createTextNode(`₹ ${enterAmount} is sent from the sender with email-id ${enterSName}@gmail.com to recepient with email-id ${enterName}@gmail.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        let element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
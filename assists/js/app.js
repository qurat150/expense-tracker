var inputAmount = 0;
const showCurrentSalary = () => {
    getAmount = document.querySelector("#inputAmount").value
    var getDiscription = document.querySelector("#inputDescript").value
    if (getAmount > 0) {
        inputAmount = inputAmount + +getAmount
        document.getElementById("currentBalance").innerHTML = inputAmount;
        document.getElementById("income").innerHTML = inputAmount;

    } else if (getAmount < 0) {
        const expense = document.getElementById("expense")
        inputAmount = inputAmount + +getAmount
        expense.innerHTML = +expense.innerHTML + +getAmount
        document.getElementById("currentBalance").innerHTML = inputAmount
    }

    let createElem = document.createElement("div")
    createElem.setAttribute("class", "transactionHistoryDisplayNone incomeExpense")

    let createChildDiv = document.createElement("div")

    let createPinDiv = document.createElement("p")
    createPinDiv.classList.add("description")
    createPinDiv.innerText = getDiscription

    createChildDiv.append(createPinDiv)

    let createSecondDiv = document.createElement("div")

    let createsecondPinDiv = document.createElement("p")
    createsecondPinDiv.classList.add("amount")
    createsecondPinDiv.classList.add("showValue")
    createsecondPinDiv.innerText = getAmount

    createSecondDiv.append(createsecondPinDiv)

    let createThirdDiv = document.createElement("div")
    createThirdDiv.setAttribute("class", "delete-icon")
    let creationOfITagInThirdDiv = document.createElement("i")
    creationOfITagInThirdDiv.setAttribute("class", "fa-solid fa-circle-xmark")
    creationOfITagInThirdDiv.innerText = "x"
    createThirdDiv.append(creationOfITagInThirdDiv)

    createElem.append(createChildDiv)
    createElem.append(createSecondDiv)

    createElem.append(createThirdDiv)

    document.querySelector("#history").append(createElem)
    console.log(createElem);

    document.querySelector("#inputAmount").value = ""
    document.querySelector("#inputDescript").value = ""

    const deleteDiv = () => {
        createElem.remove()
        if (getAmount > 0) {
            inputAmount = inputAmount - getAmount
            console.log(inputAmount);
            document.getElementById("currentBalance").innerHTML = inputAmount;
            document.getElementById("income").innerHTML = inputAmount;
            console.log(inputAmount);
        } else if (getAmount < 0) {
            console.log("Tada it's minus value");
            // inputAmount = inputAmount - getAmount
            // document.getElementById("expense").innerHTML = inputAmount
            // document.getElementById("currentBalance").innerHTML = inputAmount
        }
    }
    createThirdDiv.addEventListener("click", deleteDiv)

}

document.querySelector("#btn").addEventListener("click", showCurrentSalary)

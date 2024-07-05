document.addEventListener('DOMContentLoaded', () => {
    let burgerButton = document.querySelector(".burger-order-btn");
    let friesButton = document.querySelector(".fries-order-btn");
    let submitButton = document.querySelector(".submit");
    burgerButton.addEventListener("click", () => order("Crispy chicken sandwich"));
    friesButton.addEventListener("click", () => order("Salt & vinegar french fries"));
    submitButton.addEventListener("click", () => submitEmail());
});

function order(item) {
    const order = [];
    order.push(item);
    alert(`You have ordered: ${item}`);
    return order;
}
function submitEmail(){
    let email = document.getElementById("email").value;
    alert(`You have entered: ${email}`);
    return email.value;
}

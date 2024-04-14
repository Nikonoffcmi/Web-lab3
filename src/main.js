var depositTypes = {
    "Пополняемый": {"6 месяцев": 20, "1 год": 22, "1,5 года": 15, "2 года": 10},
    "Срочный": {"3 месяца": 20, "6 месяцев": 22, "9 месяцев": 23, "1 год": 24, "1,5 года": 18, "2 года": 15}
};

export default function updateTerms() {
    var depositType = document.getElementById("depositType").value;
    var termSelect = document.getElementById("term");
    termSelect.innerHTML = "";
    for (var term in depositTypes[depositType]) {
        var option = document.createElement("option");
        option.text = term;
        termSelect.add(option);
    }
}

export function calculate() {
    var depositType = document.getElementById("depositType").value;
    var term = document.getElementById("term").value;
    var amount = document.getElementById("amount").value;
    if (amount === "" || amount <= 0) {
        document.getElementById("error").innerText = "Пожалуйста, введите положительное число для суммы вклада.";
        return;
    }
    var rate = depositTypes[depositType][term];
    var finalAmount = amount * (1 + rate / 100);
    document.getElementById("result").value = "Вид вклада: " + depositType + ", срок: " + term + ", сумма вклада: " + amount + " руб." + "\nВ конце срока вы получите: " + finalAmount.toFixed(2) + " руб.";
    document.getElementById("error").innerText = "";
}
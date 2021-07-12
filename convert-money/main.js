function convert() {
    function formatValue(valueInNumber) {
        const value = document.getElementById('value').value
        valueInNumber = Math.floor(Number(value) * 100)

        return valueInNumber
    }

    function showCents() {
        valueInNumber = value
        const cents = document.getElementById('cents')
        cents.innerHTML = `<p id='cents'>Cents totais:${valueInNumber}</p>`

        return cents
    }
    function tableActive() {
        document.querySelector('.container-table').classList.add('active')
    }

    function showCoins() {

        let quart = Math.floor(value / 25)
        let balance = value % 25
        let dime = Math.floor(balance / 10)
        balance = balance % 10
        let nickel = Math.floor(balance / 5)
        balance = balance % 5
        let pennie = Math.floor(balance / 1)


        if (value < 0) {
            alert('Ops, Este valor está incorreto')
            document.querySelector('.container-table').classList.remove('active')

        }
        //mostrar no html

        const HTMLQuarter = document.getElementById('qntQuarters')
        HTMLQuarter.innerHTML = `<td id='qntQuarters'>${quart}</td>`

        const HTMLDimes = document.getElementById('qntDimes')
        HTMLDimes.innerHTML = `<td id='qntDimes'>${dime}</td>`

        const HTMLNickels = document.getElementById('qntNickels')
        HTMLNickels.innerHTML = `<td id='qntNickels'>${nickel}</td>`

        const HTMLpennies = document.getElementById('qntPennies')
        HTMLpennies.innerHTML = `<td id='qntPennies'>${pennie}</td>`



    }
    let value = formatValue()
    showCents(value)
    tableActive()
    showCoins(value)
}

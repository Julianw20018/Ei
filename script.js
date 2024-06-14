document.getElementById('order-form').addEventListener('submit', function(event) {
    const sixPackCount = document.getElementById('six-pack').value;
    const tenPackCount = document.getElementById('ten-pack').value;
    const total = (sixPackCount * 1.80) + (tenPackCount * 3.00);

    document.getElementById('total').value = `Totaalbedrag: €${total.toFixed(2)}`;
});

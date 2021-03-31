function dollarDisplay(x) {
        return x.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function doMath() {
        var P = parseFloat(document.getElementById("principal").value);
        var r = parseFloat(document.getElementById("interest").value)/100/12;
        var n = Math.round(parseFloat(document.getElementById("duration").value));

        if (isNaN(P) || isNaN(r) || isNaN(n)) {
                alert("You must input numeric values!");
        }

        else if (P < 0 || r < 0 || n < 0) {
                alert("You must input positive numbers!");
        }

        else {
                var R = P * r / (1 - (1 / ((1 + r) ** n)) );
                var sum_pay = R * n;
                var sum_int = sum_pay - P;

                document.getElementById("monthly").value = dollarDisplay(R);
                document.getElementById("sum_pay").value = dollarDisplay(sum_pay);
                document.getElementById("sum_int").value = dollarDisplay(sum_int);
                document.getElementById("principal").value = dollarDisplay(P);
                document.getElementById("duration").value = n;
        }
}

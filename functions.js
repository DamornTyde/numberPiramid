document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("start").addEventListener("click", main);
    function main() {
        var input = Number(document.getElementById("input").value);
        if (input < 16 && input > 0) {
            var content = "<table>";
            for (var i = 1; i < input + 1; i++) {
                content += "<tr>";
                for (var i2 = input; i2 > 0; i2--) {
                    content += cell(i, i2);
                }
                for (var i2 = 2; i2 < input + 1; i2++) {
                    content += cell(i, i2);
                }
                content += "</tr>";
            }
            content += "</table>";
            document.getElementById("print").innerHTML = content;
        }
        else {
            alert("Only number from 1-15 please");
        }
    }
    function cell(i, i2) {
        var content = "<td>";
        if (i2 < i + 1) {
            content += i2;
        }
        content += "</dt>";
        return content;
    }
});

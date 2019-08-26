document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById("start").addEventListener("click", main);
    function main(){
        let input : number = Number((<HTMLInputElement>document.getElementById("input")).value);
        if(input < 16 && input > 0){
            let content : string = "<table>";
            for(let i = 1; i < input + 1; i++){
                content += "<tr>";
                for(let i2 = input; i2 > 0; i2--){
                    content += cell(i, i2);
                }
                for(let i2 = 2; i2 < input + 1; i2++){
                    content += cell(i, i2);
                }
                content += "</tr>";
            }
            content += "</table>";
            document.getElementById("print").innerHTML = content;
        } else {
            alert("Only number from 1-15 please");
        }
    }
    function cell(i : number, i2 : number){
        let content : string = "<td>";
        if(i2 < i + 1){
            content += i2;
        }
        content += "</dt>";
        return content;
    }
});
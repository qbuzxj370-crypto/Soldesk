let len = 10;
let print = "&nbsp;"

for(let i = 1; i <= len; i++) {
    for(let j = len; j > 0; j--) {
        if(j == i) print = "*";
        document.write(print);
    }
    print = "&nbsp;";
    document.write("<br>");
}
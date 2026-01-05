let len = 10;
let print = "&nbsp;"

for(let i = 1; i <= len; i++) {
    for(let j = 1; j <= len; j++) {
        if(j % i == 0) print = "*";
        document.write(print);
    }
    print = "&nbsp;"
    document.write("<br>");
}
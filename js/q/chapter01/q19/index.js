let len = 10;

for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
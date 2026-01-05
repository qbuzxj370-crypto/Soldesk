let r = Math.floor(Math.random() * 10) + 1; 
for(let i = 1; i <= 10; i = i + 1){
    if(i == r){
        document.write(" skip ");
        continue;
    }
    document.write(i);
}
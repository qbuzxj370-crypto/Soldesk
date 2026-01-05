let limit = Math.floor(Math.random() * 100) + 1
document.write("limit = " + limit + "<hr>")
for(let i = 0; i < limit; i++){
    let id;
    if(i == 6) {
        id = "seven";
    }
    else {
        id = "other"
    }
    document.write(i+1 + "<br><img id=\"" + id + "\" src='../img/cat.jpg'><hr>")
}
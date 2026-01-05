let s

for(let i = 1; i <= 10; i++) {
    s = i % 2 == 1 ? "홀수" : "짝수";
    document.write(`${i}은/는 ${s}입니다.<br>`)
}
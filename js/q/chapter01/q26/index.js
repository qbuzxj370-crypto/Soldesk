
function sum(age, breed, name) {
    let string = "나이: " + age + "\n묘종: "+ breed + "\n이름: " + name;
    return string;
}

function print() {
    let age = "2살", breed = "샴고양이", name = "나비";
    alert(sum(age, breed, name));
}

print();
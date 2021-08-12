function ex57_7 (start, end, step){
    let output = [];
    let start1 = start;

    if(isNaN(start)) start = start.charCodeAt(0);
    if(isNaN(end)) end = end.charCodeAt(0);

    if (start > end){
        for (let i = start; i >= end; i -= step){
            if(!isNaN(start1)){
                output.push(i);
                continue;
            }
            output.push(String.fromCharCode(i));
        }
    }
    for (let i = start; i <= end; i += step){
        if(!isNaN(start1)){
            output.push(i);
            continue;
        }
        output.push(String.fromCharCode(i));
    }
    return output;
}




console.log(ex57_7("a", "z", 3));
console.log(ex57_7("Z", "A", 2));
console.log(ex57_7(0, -5, 1));
console.log(ex57_7(0, 25, 5));
console.log(ex57_7(20, 5, 5));
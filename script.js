function insert_Row() {
    let table = document.querySelector("#sampleTable");
    let temp = table.children;
    let arr = Array.from(temp); 


    let newRow = `<tr><td>NewCell1</td><td>NewCell2</td></tr>`;


    table.innerHTML = newRow

  
    for (let i of arr) {
        table.appendChild(i);
    }
}


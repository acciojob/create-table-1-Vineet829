function insert_Row() {
    let table = document.querySelector("#sampleTable");
    let newRow = `<tr><td>New Cell1</td><td>New Cell2</td></tr>`;
    
  
    table.insertAdjacentHTML('afterbegin', newRow);
}

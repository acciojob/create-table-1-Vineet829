function insert_Row() {
    let table = document.querySelector("#sampleTable");
    let tbody = table.querySelector("tbody:first-of-type");
    let newRow = `<tr><td>New Cell1</td><td>New Cell2</td></tr>`;
    tbody.insertAdjacentHTML('afterbegin', newRow);
	
}


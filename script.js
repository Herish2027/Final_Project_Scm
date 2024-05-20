const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let rows = document.querySelectorAll('#myTable tr');

    rows.forEach(row => {
        let found = false;

        row.querySelectorAll('td').forEach (cell => {
            let textValue = cell.innerText || cell.innerHTML;

            if (textValue.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        });

        if (filter.trim() === "" || found) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
const searchbar = () => {
     const searchcontainer = document.getElementById('searchcontainer');
     searchcontainer.style.display = (searchcontainer.style.display === 'none' || searchcontainer.style.display === '') ? 'block' : 'none';
 }
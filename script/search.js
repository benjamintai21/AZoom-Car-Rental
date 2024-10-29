function search() {
    // Get the search input and convert it to uppercase for case-insensitive matching
    let input = document.getElementById("searchinput").value.toUpperCase().trim();
    
    // Get all car rows
    let carRows = document.getElementsByClassName("row");
    let h2 = document.getElementsByTagName("h2");
    let allHidden = true;  // Tracks if all cells are hidden
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Hide or show the <h2> elements based on input presence
    if (input !== "") {
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.display = "none";
            sidebarLinks.forEach(link => link.classList.remove('active'));
        }
    } else {
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.display = "";
            sidebarLinks[0].classList.add('active');
        }
    }

    // Loop through each row to search within cells
    for (let i = 0; i < carRows.length; i++) {
        let cells = carRows[i].getElementsByClassName("cell");
        let rowHasVisibleCell = false;

        // Loop through each cell within the row
        for (let j = 0; j < cells.length; j++) {
            let cellContent = cells[j].innerText.toUpperCase();

            // Show matching cell, hide non-matching cell
            if (cellContent.indexOf(input) > -1) {
                cells[j].style.display = ""; // Show matching cell
                rowHasVisibleCell = true;
            } else {
                cells[j].style.display = "none"; // Hide non-matching cell
            }
        }

        // If the row has any visible cells, all cells are not hidden
        if (rowHasVisibleCell) {
            allHidden = false;
        }
    }

    // Check if all cells are hidden and display "No results found" message if necessary
    const noResultsMessage = document.getElementById("noResultsMessage");
    if (allHidden) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

// Append "No results found" message to the page initially hidden
document.addEventListener("DOMContentLoaded", function() {
    const noResultsDiv = document.createElement("div");
    noResultsDiv.id = "noResultsMessage";
    noResultsDiv.textContent = "No results found";
    noResultsDiv.style.display = "none";
    noResultsDiv.style.textAlign = "center";
    noResultsDiv.style.fontSize = "20px";
    noResultsDiv.style.marginTop = "20px";
    noResultsDiv.style.color = "white";
    document.querySelector(".rightcontent").appendChild(noResultsDiv);
});

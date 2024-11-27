const tbody = document.querySelector("tbody");
const remove = document.querySelector(".remove");
const fileInput = document.querySelector("#file");

let array = [];

function drawTable(arr) {
    tbody.innerHTML = "";
    arr.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${item.Image}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td><i class="fa-solid fa-ban"></i></td>
        `;
        tbody.appendChild(tr);
    });
}

fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0]; 

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileData = {
                Image: e.target.result, 
                name: file.name,
                size: (file.size / 1024).toFixed(2) + " KB",
            };

           
            array.push(fileData);


            drawTable(array);
        };


        reader.readAsDataURL(file);
    }
});

remove.addEventListener("click", function() {

    array = [];
    drawTable(array);
});

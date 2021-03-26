function getApi(url){
return fetch(url)
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        console.log("error encounter")

    }
})
.catch((response) => {
    console.log(response)
})
}
function display(link = "https://swapi.dev/api/people"){
    console.log(link);
    getApi(link).then((data) => {
       console.log(data)
        const result =  data.results;
        const tableElement = document.getElementById("table");
        tableElement.innerHTML = "";
       
        const createTable = document.createElement("table");
        const createTh = document.createElement("tr")
        createTh.innerHTML = `<th>Name</th><th>Gender</th><th>skin_color</th><th>Hair_color</th>`;
        createTable.appendChild(createTh);
        result.forEach((results) => {
            const createRow = document.createElement("tr");
            createRow.innerHTML = `<td><a href=${results.url}>${results.name}</a> </td><td>${results.gender}</td> </td>
            <td>${results.skin_color}</td> </td><td>${results.hair_color}</td>`
            
            createTable.appendChild(createRow);
            tableElement.appendChild(createTable);
        });
        const prev = document.createElement("button");
        prev.setAttribute("id", "prev");
        prev.innerHTML = "prev";
        tableElement.appendChild(prev);

        const next = document.createElement("button");
        next.setAttribute("id","next");
        next.innerHTML = "next";
        tableElement.appendChild(next);

       
        if (data.previous) {
           document.getElementById("prev").addEventListener("click", () => {
                const me = data.previous;
                display(me);

            });
            
        }
        
        if (data.next) {


            document.getElementById("next").addEventListener("click", () => {
                const next = data.next
                display(next);
            }, false);
     
            
        }

    });
    
   
}
display();

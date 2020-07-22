


// function Year() {
    const nd = new Date();
    const y = nd.getFullYear();
    const m = nd.getMonth();
    document.getElementById("cYear").innerHTML =" Year:" + y 
    + " " + "Month:" + m;
    console.log("year:" + y + " " + "month:" + m);
// };

function add() {
   const m1 = document.getElementById("modal1")
    if (m1.style.display === "none" ) {
        m1.style.display = "block"
    }
};

function change() {
   const i = document.getElementById("input");
   const m2 = document.getElementById("modal2");

    i.select();
    i.setSelectionRange(0, 100)
    document.execCommand("copy");
    
    console.log("New Item Added:" + i.value);

};




   


const inputvalue=document.getElementById('inputval');
const year=parseInt(inputvalue.value);
const isLeap=()=>{
    return ((year % 4 == 0 && year % 100 !=0 ) || year % 400 == 0);
};
    const btn = document
    .getElementById("btn")
    .addEventListener("click", function () {
        document.getElementById("output").textContent =
            isLeap(year.value);
        console.log(isLeap(year.value));
    });
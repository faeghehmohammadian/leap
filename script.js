
const inputvalue=document.querySelector(".inputval")
const year=parseInt(inputvalue.value);
const isLeap=(year)=>{
    console.log(parseInt(inputvalue.value , 10));
    return ((year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0);
};
const btn = document
            .getElementById("btn")
            .addEventListener("click", function () {
                document.getElementById("output").textContent =
                    isLeap(parseInt(inputvalue.value , 10));
            });
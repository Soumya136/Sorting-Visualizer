//function for swapping for sorting algorithms
function swap(ele1, ele2) {
    console.log("In swap()");

    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

//disable sorting button while doing the task
function disableSortingButton() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
}

//enable sorting button before start
function enableSortingButton() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
}

//disable size slider while doing the task
function disableSizeSlider() {
    document.querySelector("#arr_size").disabled = true;
}

//enable size slider before start 
function enableSizeSlider() {
    document.querySelector("#arr_size").disabled = false;
}

//disable new array button while doing the task
function disableNewArray() {
    document.querySelector(".newArray").disabled = true;
}

//enable new array button before start
function enableNewArray() {
    document.querySelector(".newArray").disabled = false;
}

//used in async function so that doing the animation of sorting
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
} 

//select size of slider from DOM
let arraySize = document.querySelector('#arr_size');

//Event Listner to update the bars
arraySize.addEventListener('input', function() {
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

//default input for waitforme 260ms
let delay = 260;

//selecting speed of slider
let delayElement = document.querySelector('#speed_input');

//Event Listener to update delay time
delayElement.addEventListener('input', function() {
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//creating array
let array = [];

//call create new array function to display bars
createNewArray();

function createNewArray(noOfBars = 60) {
    deleteChild(); //helper function to delete old bars from DOM

    //creating random array
    array = [];
    for(let i=0;i<noOfBars;i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    //select div#bars elements
    const bars = document.querySelector("#bars");

    for(let i=0;i<noOfBars;i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//define deleteChild()
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
} 

//define newArray button form the DOM and add event listner
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function() {
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingButton();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
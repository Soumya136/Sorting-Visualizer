async function bubble() {
    console.log("In bubble()");
    const ele = document.querySelectorAll(".bar");
    for(let i=0;i<ele.length-1;i++) {
        console.log("in i-th loop");
        for(let j=0;j<ele.length-i-1;j++) {
            console.log("in j-th loop");
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)) {
                console.log("in if condition");
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-i-1].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSort = document.querySelector(".bubbleSort");
bubSort.addEventListener('click', async function() {
    disableSortingButton();
    disableSizeSlider();
    disableNewArray();
    await bubble();
    enableSortingButton();
    enableSizeSlider();
    enableNewArray();
});
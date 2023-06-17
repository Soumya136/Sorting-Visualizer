async function selection() {
    console.log("In Insertion");
    const ele = document.querySelectorAll(".bar");

    for(let i=0;i<ele.length;i++) {
        console.log("in i-th loop");
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j=i+1;j<ele.length;j++) {
            console.log("in j-th loop");
            ele[j].style.background = 'red';

            await waitforme(delay);

            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                console.log("in if condition height comparison");
                if(min_index !== i) {
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else {
                ele[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);

        swap(ele[min_index], ele[i]);

        ele[min_index].style.background = 'cyan';

        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function() {
    disableSortingButton();
    disableSizeSlider();
    disableNewArray();
    await selection();
    enableSortingButton();
    enableSizeSlider();
    enableNewArray();
});
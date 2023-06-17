async function partition(ele, l, r) {
    console.log("in partition");
    let i = l - 1;
    ele[r].style.background = 'red';
    for(let j=l;j<=r-1;j++) {
        console.log("in partition for j");
        ele[j].style.background = 'yellow'; // color current element
        //pause
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            console.log("in partition of j if");
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'orange' //color
            if(i != j)  
                ele[j].style.background = 'orange';
            await waitforme(delay);
        }
        else {
            ele[j].style.background = 'pink'; //color if not less than pivot
        }
    }

    i++;

    //pause
    await waitforme(delay);
    swap(ele[i], ele[r]);
    console.log(`i = ${i}`, typeof(i));
    //color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    //pause
    await waitforme(delay);

    //final color
    for(let k=0;k<ele.length;k++) {
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quick(ele, l, r) {
    console.log("in quick sort", `l=${l} r=${r}`, typeof(l), typeof(r));

    if(l<r) {
        let pivot_index = await partition(ele, l, r);
        await quick(ele, l, pivot_index-1);
        await quick(ele, pivot_index+1, r);
    }
    else {
        if(l>=0 && r>=0 && l<ele.length && r<ele.length) {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function() {
    let ele = document.querySelectorAll('.bar');
    let l = 0; 
    let r = ele.length - 1;
    disableSortingButton();
    disableSizeSlider();
    disableNewArray()
    await quick(ele, l, r);
    enableSortingButton();
    enableSizeSlider();
    enableNewArray();
});
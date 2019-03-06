
$(document).ready(function() {
    $('#sortArrow').on('click', sorting);
})
function getData() {
    let arrow=$('#input-data').val().replace(new RegExp('\n', 'g'), '').split(',').map(item => parseInt(item));
    let isValid = true;
    for (let i=0; i<arrow.length; i++){
        if (isNaN(arrow[i])){
            $('#arrowContainer').html('Arrow containes not a number');
            $( "#sortArrow" ).removeClass('btn-primary');
            $( "#sortArrow" ).addClass('btn-danger');
            $( "#sortArrow" ).text('Fail sorted');
            isValid=false;
        }
        else{
            clearPreviousResults();
            $( "#sortArrow" ).removeClass('btn-primary');
            $( "#sortArrow" ).removeClass('btn-danger');
            $( "#sortArrow" ).addClass('btn-success');
            $( "#sortArrow" ).text('Success sorted');
        }


    }
    return isValid ? arrow : undefined;
}
function clearPreviousResults() {
    $('#out-data').val('');
    $('#arrowContainer').html('');
    $('#elementsInArrow').text('');
}


function quickSort(array) {
    if (array.length <= 1) {
        return array;
    } else {

        let left = [];
        let right = [];
        let newArray = [];
        var pivot = array.pop();

        let length = array.length;

        for (let i = 0; i < length; i++) {
            if (array[i] <= pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}

function sorting() {
    clearPreviousResults();
    var inputArray = getData();
    $('#elementsInArrow').html(inputArray.length);
    if (inputArray) {
        var sortedArray = quickSort(inputArray);
        $('#out-data').val(sortedArray.join(', '));

    }
}











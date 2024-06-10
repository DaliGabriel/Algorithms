/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

    //Get the array lenght
    function getArrayLenght(array){

        let lenght = 0;

        while(array[lenght] !== undefined){
            lenght++;
        }

        return lenght ;
    }
    const arrayLength = getArrayLenght(heights);

    function copyArray(array){
        let newArray = [];

        for(let i = 0; i < arrayLength; i++){
           newArray[i] = array[i]
        }

        return newArray;
    }
    const originalArray = copyArray(heights);

    //we need to sorter the heights array
    function bubleSort(array){
        //loop for iterate the array
        for(let i = 0; i < arrayLength; i++){
            //loop for iterate the items that had not being iterated before and swap the items
            for(let j = 0; j < arrayLength - i - 1; j++){ 
                if(array[j] > array[j + 1]){
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        return array;
    }

    function getIndices(array){
        //then compare the two arrays based on the index to check if they are the same
        let sortArray = bubleSort(array)
        let indices = 0;

        for(let i = 0; i < arrayLength; i++){
            if(sortArray[i] !== originalArray[i]){
                indices ++;
            }
        }
        return indices;
    }

    return getIndices(heights)
   
};

var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for(var i = 0; i < array.length-1 ;i++ ) {
    insert(array, i ,array[i +1] );
}
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var arrayt = [22, 11, 99, 77, 0, 7, 42];
insertionSort(arrayt);
Program.assertEqual(arrayt, [0, 7, 11, 22, 42, 77, 99]);


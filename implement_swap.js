var swap = function(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = array[secondIndex];
	array[secondIndex] = temp;
	
	
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);
Program.assertEqual(testArray, [9, 7, 4]);

swap(testArray, 2, 3);
Program.assertEqual(testArray, [9, 7,, 4]);


swap(testArray, 4, 5);
Program.assertEqual(testArray, [9, 7, 4]);

println(testArray);








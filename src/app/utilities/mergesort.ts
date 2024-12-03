export interface objecta{
    id:string;
    img:string;
    visit:number;
    category:string;
}
export default function mergeSort(arr: objecta[]): objecta[] {
    // Base case: if the array has 1 or no elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left: objecta[], right: objecta[]): objecta[] {
    const result: objecta[] = [];
    let i = 0; // Pointer for the left array
    let j = 0; // Pointer for the right array
  
    // Compare elements from both arrays and add the smaller one to the result
    while (i < left.length && j < right.length) {
      if (left[i]?.visit < right[j]?.visit) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements from the left array
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    // Add any remaining elements from the right array
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  

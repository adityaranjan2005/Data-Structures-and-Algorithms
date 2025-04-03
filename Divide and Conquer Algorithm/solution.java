import java.util.Arrays;

public class iteration {

    static class MinMax {
        int min;
        int max;
        
        MinMax(int min, int max) {
            this.min = min;
            this.max = max;
        }
    }
    
    public static MinMax findMinMax(int[] arr, int low, int high) {
        if (low == high) {
            return new MinMax(arr[low], arr[low]);
        }
        
        if (high == low + 1) {
            if (arr[low] > arr[high]) {
                return new MinMax(arr[high], arr[low]);
            } else {
                return new MinMax(arr[low], arr[high]);
            }
        }
        
        int mid = (low + high) / 2;
        MinMax leftMinMax = findMinMax(arr, low, mid);
        MinMax rightMinMax = findMinMax(arr, mid + 1, high);
        
        int min = Math.min(leftMinMax.min, rightMinMax.min);
        int max = Math.max(leftMinMax.max, rightMinMax.max);
        
        return new MinMax(min, max);
    }
    
    public static void main(String[] args) {
        int[] arr = {22, 13, 7, 45, 9, 1, 88, 6, 15, 30};
        System.out.println("Original array: " + Arrays.toString(arr));
        
        MinMax result = findMinMax(arr, 0, arr.length - 1);
        
        System.out.println("Minimum value: " + result.min);
        System.out.println("Maximum value: " + result.max);
    }
}

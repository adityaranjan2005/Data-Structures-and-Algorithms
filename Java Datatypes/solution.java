import java.io.*;
import java.util.*;
import java.math.*;

public class Solution {

    enum DataType {
        
        BYTE("byte", BigInteger.valueOf(Byte.MIN_VALUE), BigInteger.valueOf(Byte.MAX_VALUE)),
        SHORT("short", BigInteger.valueOf(Short.MIN_VALUE), BigInteger.valueOf(Short.MAX_VALUE)),
        INTEGER("int", BigInteger.valueOf(Integer.MIN_VALUE), BigInteger.valueOf(Integer.MAX_VALUE)),
        LONG("long", BigInteger.valueOf(Long.MIN_VALUE), BigInteger.valueOf(Long.MAX_VALUE))
        
        ;
        
        private String name;
        private BigInteger lowValue;
        private BigInteger upValue;
        
        DataType(String name, BigInteger lowValue, BigInteger upValue) {
            this.name = name;
            this.lowValue = lowValue;
            this.upValue = upValue;     
        }
        
        public String getName() {
            return name;
        }
        
        public boolean fitted(BigInteger number) {
            return lowValue.compareTo(number) <= 0 & number.compareTo(upValue) <= 0;
        }
        
        public static EnumSet<DataType> findAllFitted(BigInteger number) {
            EnumSet<DataType> results = EnumSet.noneOf(DataType.class);
            for (DataType dataType: values()) {
                if (dataType.fitted(number)) {
                    results.add(dataType);
                }
            }
            return results;
        }
        
    }

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        BigInteger[] nums = new BigInteger[n];
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextBigInteger();
        }
        
        for (BigInteger num : nums) {
            EnumSet<DataType> dataTypes = DataType.findAllFitted(num);
            if (dataTypes.isEmpty()) {
                System.out.println(num + " can't be fitted anywhere.");
            } else {
                System.out.println(num + " can be fitted in:");
                for (DataType dataType : dataTypes) {
                    System.out.println("* " + dataType.getName());
                }
            }
        }
    
    }
    
}

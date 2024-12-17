import java.util.*;

class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        // Create a list to store pairs of name and height
        List<Pair> people = new ArrayList<>();
        
        // Fill the list with name-height pairs
        for (int i = 0; i < names.length; i++) {
            people.add(new Pair(names[i], heights[i]));
        }
        
        // Sort the list by height in descending order
        Collections.sort(people, (a, b) -> b.height - a.height); 
        
        // Prepare the result array to store sorted names
        String[] sortedNames = new String[names.length];
        
        // Extract sorted names
        for (int i = 0; i < people.size(); i++) {
            sortedNames[i] = people.get(i).name;
        }
        
        return sortedNames;
    }
    
    // Pair class to store name and height together
    static class Pair {
        String name;
        int height;
        
        Pair(String name, int height) {
            this.name = name;
            this.height = height;
        }
    }
}

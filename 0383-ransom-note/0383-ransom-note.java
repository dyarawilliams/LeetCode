class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {

        // Iterate over every letter in ransomNote
        for(int i = 0; i < ransomNote.length(); i++) {
            // Access corresponding char with the charAt method - constant time operation
            char r = ransomNote.charAt(i);

            int matchingIndex = magazine.indexOf(r);
            
            if(matchingIndex == -1){
                return false;
            }

            magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex + 1);
        }
        return true;
    }

    //Time Complexity: O(m)
    // Space Complexity: O(1) - k is unique characters
}
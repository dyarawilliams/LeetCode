/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCount = new Map();

    // Count character frequencies in the magazine
    for (let char of magazine){
        letterCount.set(char, (letterCount.get(char) || 0) + 1);
    }
    
    // Check against the ransomNote
    for (let char of ransomNote){
        if(!letterCount.has(char) || letterCount.get(char) === 0){
            return false;
        }
        letterCount.set(char, letterCount.get(char) - 1);
    }
    return true;
    // Time Complexity: O(n + m) - magazine.length >= ransomNote.length
    // Space Complexity: O(1) In the worst-case scenario, the map will store at most 26 unique lowercase English letters (assuming a fixed alphabet size). If the problem allowed a larger or variable character set, the space complexity would be O(k) where k is the number of unique characters in the magazine.
};
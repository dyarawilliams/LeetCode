/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    // Create a frequency array
    let letterCount = new Array(26).fill(0);

    // Populate the frequency array with character counts from the magazine
    for (let i = 0; i < magazine.length; i++){
        const charCode = magazine.charCodeAt(i) - 'a'.charCodeAt(0);
        letterCount[charCode]++;
    }
    
    // Check if the ransomNote can be constructed
    for (let i = 0; i < ransomNote.length; i++){
        const charCode = ransomNote.charCodeAt(i) - 'a'.charCodeAt(0);
        if(letterCount[charCode] === 0) return false;

        // Decrement the count, indicating the character is used
        letterCount[charCode]--;
        
    }
    return true; // all characters in ransomNote can be formed from magazine
    
    // Time Complexity: O(nm) - magazine.length >= ransomNote.length
    // Space Complexity: O(k) 
};
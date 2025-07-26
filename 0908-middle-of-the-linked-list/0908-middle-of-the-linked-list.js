/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let middle = head;
    let end = head;
    // while loop to iterate through the linked list
    while (end !== null && end.next !== null) {
        // checks if the (middle node) slow pointer is moved one step at a time 
        middle = middle.next;
        // checks if the (end node) fast pointer and its next node - end.next - moves up 2 nodes every step
        end = end.next.next;
    }
    return middle;

    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
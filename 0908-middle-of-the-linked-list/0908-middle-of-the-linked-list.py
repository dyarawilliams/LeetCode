# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Create two pointers, slow and fast and set them to the head of the list
        slow = fast = head

        # Loop, while valid
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        # When fast hit the end of the list, slow will sit at the middle
        return slow
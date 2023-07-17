/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

var mergeTwoLists = function (l1, l2) {
  // Create a temporary node to keep track of the merged list
  let tempNode = new ListNode(0, null);
  // Create a currentNode to point to the current position in the merged list
  let currentNode = tempNode;
  // Traverse the lists as long as both lists have nodes
  while (l1 && l2) {
    // Compare the values of the current nodes in list1 and list2
    if (l1.val < l2.val) {
      // If the value in list1 is smaller, add it to the merged list
      currentNode.next = l1;
      l1 = l1.next; // Move to the next node in list1
    } else {
      // If the value in list2 is smaller, add it to the merged list
      currentNode.next = l2;
      l2 = l2.next; // Move to the next node in list2
    }
    // Move the currentNode to the next position in the merged list
    currentNode = currentNode.next;
  }
  // Append the remaining nodes from either list1 or list2
  currentNode.next = l1 || l2;
  // Return the merged list (excluding the temporary node)
  return tempNode.next;
};

// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
}

module.exports = { 
    removeNthFromEnd: function(A, B) {
        // Calculate the length of the linked list
        let length = 0;
        let current = A;
        while (current) {
            length += 1;
            current = current.next;
        }
        
        // If B is greater than or equal to the length, remove the first node
        if (B >= length) {
            return A.next;
        }

        // Find the node to be removed
        let targetIndex = length - B;
        current = A;
        for (let i = 0; i < targetIndex - 1; i++) {
            current = current.next;
        }

        // Remove the node
        current.next = current.next.next;

        return A;
    }
};

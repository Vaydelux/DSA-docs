import CodeBlock from '../components/CodeBlock';

export default function LinkedLists() {
  return (
    <div className="doc-content animate-fade-in">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-3">
          Data Structures
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Linked Lists
        </h1>
        <p className="text-[#94a3b8] max-w-2xl">
          A linear data structure where elements are stored in nodes, each pointing to the next. 
          Unlike arrays, linked lists don't require contiguous memory, enabling O(1) insertions/deletions at known positions.
        </p>
      </div>

      {/* Mental Model */}
      <h2>Mental Model: Chain of Nodes</h2>
      <p>
        Think of a linked list as a <strong className="text-white">treasure hunt</strong>. Each clue (node) contains:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#94a3b8] mb-4">
        <li>The treasure (data value)</li>
        <li>A map to the next clue (pointer to next node)</li>
      </ul>
      <p className="text-[#94a3b8] mb-4">
        You start at the first clue (head) and follow the maps until you reach the end (null). 
        Unlike arrays, you can't jump directly to clue #5 — you must follow the path from the beginning.
      </p>

      <div className="my-6 p-5 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
        <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3 font-medium">Linked List Structure</p>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { val: 'A', next: '→' },
            { val: 'B', next: '→' },
            { val: 'C', next: '→' },
            { val: 'D', next: 'null' },
          ].map((node, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex rounded-lg border-2 border-indigo-500/40 overflow-hidden">
                <div className="px-3 py-2 bg-indigo-500/20 text-indigo-300 font-mono text-sm">
                  {node.val}
                </div>
                <div className="px-3 py-2 bg-indigo-500/10 text-indigo-400 font-mono text-sm border-l border-indigo-500/40">
                  {node.next}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94a3b8] mt-4">
          Each node: [data | next pointer] → Nodes scattered in memory, connected by pointers
        </p>
      </div>

      {/* Types of Linked Lists */}
      <h2>Types of Linked Lists</h2>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">Singly Linked List</h3>
          <p className="text-xs text-[#94a3b8] mb-2">Each node points to the next node only.</p>
          <div className="font-mono text-xs text-[#94a3b8]">
            A → B → C → null
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong className="text-white">Use when:</strong> You only need forward traversal
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">Doubly Linked List</h3>
          <p className="text-xs text-[#94a3b8] mb-2">Each node points to both next and previous.</p>
          <div className="font-mono text-xs text-[#94a3b8]">
            null ← A ↔ B ↔ C → null
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong className="text-white">Use when:</strong> You need bidirectional traversal
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">Circular Linked List</h3>
          <p className="text-xs text-[#94a3b8] mb-2">Last node points back to first node.</p>
          <div className="font-mono text-xs text-[#94a3b8]">
            A → B → C → (back to A)
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong className="text-white">Use when:</strong> Implementing round-robin algorithms
          </p>
        </div>
      </div>

      {/* Core Operations */}
      <h2>Core Operations</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-[#334155] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1e293b]">
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Operation</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Time</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Why?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#334155]">
            <tr>
              <td className="px-4 py-3 text-white">Access by index</td>
              <td className="px-4 py-3 text-red-400 font-mono">O(n)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Must traverse from head</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Search</td>
              <td className="px-4 py-3 text-red-400 font-mono">O(n)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Must check each node</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Insert at head</td>
              <td className="px-4 py-3 text-green-400 font-mono">O(1)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Just update head pointer</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Insert at tail</td>
              <td className="px-4 py-3 text-yellow-400 font-mono">O(n)*</td>
              <td className="px-4 py-3 text-[#94a3b8]">*O(1) if you maintain tail pointer</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Delete at head</td>
              <td className="px-4 py-3 text-green-400 font-mono">O(1)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Just update head pointer</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Delete at known position</td>
              <td className="px-4 py-3 text-green-400 font-mono">O(1)</td>
              <td className="px-4 py-3 text-[#94a3b8]">If you have pointer to node</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Implementation */}
      <h2>Implementation</h2>

      <CodeBlock
        language="typescript"
        title="singly-linked-list.ts"
        code={`class ListNode<T> {
   T;
  next: ListNode<T> | null;

  constructor( T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private _size = 0;

  get size() {
    return this._size;
  }

  // Insert at head - O(1)
  prepend( T): void {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    
    if (!this.tail) {
      this.tail = newNode;
    }
    
    this._size++;
  }

  // Insert at tail - O(1) with tail pointer
  append( T): void {
    const newNode = new ListNode(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    
    this._size++;
  }

  // Delete at head - O(1)
  deleteHead(): T | null {
    if (!this.head) return null;
    
    const data = this.head.data;
    this.head = this.head.next;
    
    if (!this.head) {
      this.tail = null;
    }
    
    this._size--;
    return data;
  }

  // Search - O(n)
  find( T): ListNode<T> | null {
    let current = this.head;
    
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    
    return null;
  }

  // Convert to array for debugging
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    
    return result;
  }
}

// Usage
const list = new SinglyLinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toArray()); // [1, 2, 3]
console.log(list.size);       // 3`}
      />

      {/* Essential Patterns */}
      <h2>Essential Patterns</h2>

      <h3 className="text-xl font-bold text-white mt-6 mb-3">1. Fast & Slow Pointers (Floyd's Algorithm)</h3>
      <p className="text-[#94a3b8] mb-3">
        Use two pointers moving at different speeds. Detect cycles, find middle, and solve many other problems.
      </p>
      <CodeBlock
        language="typescript"
        title="fast-slow-pointers.ts"
        code={`/**
 * Detect Cycle in Linked List
 * Time: O(n) | Space: O(1)
 */
function hasCycle(head: ListNode<number> | null): boolean {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;        // Moves 1 step
    fast = fast.next.next;   // Moves 2 steps

    if (slow === fast) {
      return true; // They met - cycle exists!
    }
  }

  return false; // Fast reached end - no cycle
}

/**
 * Find Middle of Linked List
 * Time: O(n) | Space: O(1)
 */
function findMiddle(head: ListNode<number> | null): ListNode<number> | null {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // Slow is at middle when fast reaches end
}

// Example: List 1 → 2 → 3 → 4 → 5
// findMiddle returns node with value 3`}
      />

      <h3 className="text-xl font-bold text-white mt-6 mb-3">2. Reverse Linked List</h3>
      <p className="text-[#94a3b8] mb-3">
        Reverse the direction of all pointers. Classic interview problem.
      </p>
      <CodeBlock
        language="typescript"
        title="reverse-list.ts"
        code={`/**
 * Reverse Linked List (Iterative)
 * Time: O(n) | Space: O(1)
 */
function reverseList(head: ListNode<number> | null): ListNode<number> | null {
  let prev: ListNode<number> | null = null;
  let current = head;

  while (current) {
    const next = current.next;  // Save next node
    current.next = prev;        // Reverse pointer
    prev = current;             // Move prev forward
    current = next;             // Move current forward
  }

  return prev; // New head
}

/**
 * Reverse Linked List (Recursive)
 * Time: O(n) | Space: O(n) - call stack
 */
function reverseListRecursive(
  head: ListNode<number> | null
): ListNode<number> | null {
  // Base case: empty or single node
  if (!head || !head.next) {
    return head;
  }

  // Reverse the rest recursively
  const newHead = reverseListRecursive(head.next);

  // Make next node point back to current
  head.next.next = head;
  head.next = null;

  return newHead;
}

// Example: 1 → 2 → 3 → null
// After reverse: 3 → 2 → 1 → null`}
      />

      <h3 className="text-xl font-bold text-white mt-6 mb-3">3. Merge Two Sorted Lists</h3>
      <p className="text-[#94a3b8] mb-3">
        Combine two sorted linked lists into one sorted list.
      </p>
      <CodeBlock
        language="typescript"
        title="merge-lists.ts"
        code={`/**
 * Merge Two Sorted Lists
 * Time: O(n + m) | Space: O(1)
 */
function mergeTwoLists(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  // Dummy head simplifies edge cases
  const dummy = new ListNode(0);
  let current = dummy;

  // Compare and merge
  while (l1 && l2) {
    if (l1.data <= l2.data) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes
  current.next = l1 || l2;

  return dummy.next;
}

// Example:
// l1: 1 → 3 → 5
// l2: 2 → 4 → 6
// Result: 1 → 2 → 3 → 4 → 5 → 6`}
      />

      {/* Arrays vs Linked Lists */}
      <h2>Arrays vs Linked Lists</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-[#334155] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1e293b]">
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Aspect</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Array</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Linked List</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#334155]">
            <tr>
              <td className="px-4 py-3 text-white">Memory</td>
              <td className="px-4 py-3 text-[#94a3b8]">Contiguous</td>
              <td className="px-4 py-3 text-[#94a3b8]">Scattered</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Access by index</td>
              <td className="px-4 py-3 text-green-400">O(1) ✓</td>
              <td className="px-4 py-3 text-red-400">O(n)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Insert at start</td>
              <td className="px-4 py-3 text-red-400">O(n)</td>
              <td className="px-4 py-3 text-green-400">O(1) ✓</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Insert at end</td>
              <td className="px-4 py-3 text-green-400">O(1)* ✓</td>
              <td className="px-4 py-3 text-green-400">O(1)* ✓</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Delete at known position</td>
              <td className="px-4 py-3 text-red-400">O(n)</td>
              <td className="px-4 py-3 text-green-400">O(1) ✓</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Memory overhead</td>
              <td className="px-4 py-3 text-green-400">Low ✓</td>
              <td className="px-4 py-3 text-red-400">High (pointers)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Cache friendly</td>
              <td className="px-4 py-3 text-green-400">Yes ✓</td>
              <td className="px-4 py-3 text-red-400">No</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* When to Use */}
      <h2>When to Use Linked Lists</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <h3 className="text-sm font-semibold text-green-300 mb-2">✓ Use Linked Lists When:</h3>
          <ul className="text-xs text-[#94a3b8] space-y-1">
            <li>• Frequent insertions/deletions at beginning</li>
            <li>• You need O(1) insertions with a pointer</li>
            <li>• Implementing stacks, queues, or caches</li>
            <li>• Size is unpredictable (dynamic sizing)</li>
            <li>• You don't need random access</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h3 className="text-sm font-semibold text-red-300 mb-2">✗ Use Arrays When:</h3>
          <ul className="text-xs text-[#94a3b8] space-y-1">
            <li>• You need fast random access by index</li>
            <li>• Memory efficiency is critical</li>
            <li>• You need cache-friendly iteration</li>
            <li>• Size is known or fixed</li>
            <li>• You need binary search</li>
          </ul>
        </div>
      </div>

      {/* Common Mistakes */}
      <h2>Common Mistakes</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h4 className="text-sm font-semibold text-red-300 mb-2">❌ Mistake 1: Losing the rest of the list</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`// BAD: Losing reference to remaining nodes
let current = head;
current = current.next.next; // Skipped a node!

// GOOD: Traverse one step at a time
let current = head;
while (current && current.next) {
  // Process current
  current = current.next;
}`}
          />
        </div>

        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h4 className="text-sm font-semibold text-red-300 mb-2">❌ Mistake 2: Not handling edge cases</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`// BAD: Assuming list is non-empty
function deleteNode(head: ListNode<number>,  number) {
  let current = head;
  while (current.data !== val) { // Crashes if head is null!
    current = current.next;
  }
}

// GOOD: Check for empty list
function deleteNode(head: ListNode<number> | null,  number) {
  if (!head) return null;
  
  let current = head;
  while (current && current.data !== val) {
    current = current.next;
  }
  
  return current; // May be null if not found
}`}
          />
        </div>

        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h4 className="text-sm font-semibold text-red-300 mb-2">❌ Mistake 3: Creating cycles accidentally</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`// BAD: Accidentally creating a cycle
node1.next = node2;
node2.next = node1; // Infinite loop!

// GOOD: Always terminate with null
node1.next = node2;
node2.next = null; // Proper termination`}
          />
        </div>
      </div>

      {/* Real-World Applications */}
      <h2>Real-World Applications</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">🎵 Music Playlists</h3>
          <p className="text-xs text-[#94a3b8]">
            Songs added/removed frequently. Linked list enables O(1) insertion at current position.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">🌐 Browser History</h3>
          <p className="text-xs text-[#94a3b8]">
            Back/forward navigation uses doubly linked list for O(1) movement in both directions.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">⚡ LRU Cache</h3>
          <p className="text-xs text-[#94a3b8]">
            Recently used items move to front. Doubly linked list + hash map = O(1) operations.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h3 className="text-sm font-semibold text-white mb-2">📧 Undo/Redo Systems</h3>
          <p className="text-xs text-[#94a3b8]">
            Each action is a node. Navigate backward/forward through history with linked list.
          </p>
        </div>
      </div>

      {/* Practice Problems */}
      <h2>Practice Problems</h2>

      <div className="space-y-3 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟢 Easy: Remove Duplicates from Sorted List</h4>
          <p className="text-xs text-[#94a3b8]">
            Given a sorted linked list, delete all duplicates such that each element appears only once.
          </p>
          <details className="mt-2">
            <summary className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">Show Hint</summary>
            <p className="text-xs text-[#94a3b8] mt-2">
              Compare current node with next node. If same, skip next node by updating pointer.
            </p>
          </details>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟡 Medium: Remove Nth Node From End</h4>
          <p className="text-xs text-[#94a3b8]">
            Remove the nth node from the end of the list and return its head. Do it in one pass.
          </p>
          <details className="mt-2">
            <summary className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">Show Hint</summary>
            <p className="text-xs text-[#94a3b8] mt-2">
              Use two pointers with n gap between them. When first reaches end, second is at position to delete.
            </p>
          </details>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🔴 Hard: Reverse Nodes in k-Group</h4>
          <p className="text-xs text-[#94a3b8]">
            Reverse the nodes of the list k at a time. If remaining nodes &lt; k, leave them as-is.
          </p>
          <details className="mt-2">
            <summary className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">Show Hint</summary>
            <p className="text-xs text-[#94a3b8] mt-2">
              Count k nodes, reverse them, then recursively process the rest. Connect reversed groups properly.
            </p>
          </details>
        </div>
      </div>

      {/* Knowledge Check */}
      <h2>Knowledge Check</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 1:</strong> What is the time complexity of accessing the 5th element in a linked list?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. O(1)</div>
            <div>B. O(log n)</div>
            <div className="text-green-400">C. O(n) ✓</div>
            <div>D. O(n²)</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> Must traverse from head through 4 nodes to reach the 5th element.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 2:</strong> Which algorithm detects cycles in a linked list?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. Binary Search</div>
            <div className="text-green-400">B. Floyd's Cycle Detection (Fast & Slow Pointers) ✓</div>
            <div>C. Depth-First Search</div>
            <div>D. Breadth-First Search</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> Fast pointer moves 2 steps, slow moves 1. If cycle exists, they'll eventually meet.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
        <h3 className="text-sm font-semibold text-green-300 mb-3">🔑 Key Takeaways</h3>
        <ul className="space-y-2 text-sm text-[#94a3b8]">
          <li>• <strong className="text-white">Linked lists provide O(1) insertions/deletions</strong> at known positions</li>
          <li>• <strong className="text-white">O(n) access time</strong> — must traverse from head</li>
          <li>• <strong className="text-white">Fast & slow pointers</strong> detect cycles and find middle in O(n) time</li>
          <li>• <strong className="text-white">Always handle edge cases</strong> — empty list, single node, not found</li>
          <li>• <strong className="text-white">Maintain tail pointer</strong> for O(1) append operations</li>
          <li>• <strong className="text-white">Use dummy head</strong> to simplify insertion/deletion logic</li>
        </ul>
      </div>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <p className="text-sm text-indigo-300 font-medium mb-2">🎯 What's Next?</p>
        <p className="text-sm text-[#94a3b8]">
          Continue to <strong className="text-white">Stacks & Queues</strong> to learn about LIFO and FIFO data structures 
          that build on linked list concepts.
        </p>
      </div>
    </div>
  );
}

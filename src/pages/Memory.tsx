import CodeBlock from '../components/CodeBlock';
import { Callout } from '../components/Visuals';

export default function Memory() {
  return (
    <div className="doc-content animate-fade-in">
      {/* Overview */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
          Foundations
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Memory & References
        </h1>
        <p className="text-[#94a3b8] max-w-2xl">
          Understanding how data is stored in memory is <strong className="text-white">essential for understanding data structures</strong>. 
          This isn't low-level computer architecture—it's just enough to understand why arrays are fast, why linked lists work, and what "references" really mean.
        </p>
      </div>

      {/* Mental Model */}
      <h2>Mental Model: Memory as a Grid</h2>
      <p>
        Imagine your computer's memory as a <strong className="text-white">giant grid of boxes</strong>. Each box:
      </p>
      <ul>
        <li>Has a unique <strong className="text-white">address</strong> (like a house address)</li>
        <li>Can store a small piece of data (a number, a character, etc.)</li>
        <li>Is the same size (usually 1 byte, but we group them)</li>
      </ul>

      <div className="my-4 p-4 rounded-lg bg-[#0d1117] border border-[#334155]">
        <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3 font-medium">Memory Addresses</p>
        <div className="grid grid-cols-8 gap-1 font-mono text-xs">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="p-2 bg-[#1e293b] border border-[#334155] rounded text-center">
              <div className="text-[#64748b]">{1000 + i}</div>
              <div className="text-[#94a3b8] mt-1">[ ]</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94a3b8] mt-3">
          Each box has an address (1000, 1001, 1002, ...) and can hold data.
        </p>
      </div>

      {/* Stack vs Heap */}
      <h2>Stack vs Heap Memory</h2>
      <p>
        Memory is divided into two main regions: the <strong className="text-white">stack</strong> and the <strong className="text-white">heap</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <h4 className="text-sm font-semibold text-green-300 mb-2">📚 Stack Memory</h4>
          <ul className="text-xs text-[#94a3b8] space-y-1">
            <li>• <strong className="text-white">Fast</strong> — simple allocation</li>
            <li>• <strong className="text-white">Small</strong> — limited size (usually 1-8 MB)</li>
            <li>• <strong className="text-white">Automatic</strong> — managed by the system</li>
            <li>• <strong className="text-white">LIFO</strong> — last in, first out (like a stack of plates)</li>
            <li>• <strong className="text-white">Stores:</strong> local variables, function calls</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h4 className="text-sm font-semibold text-blue-300 mb-2">🗄️ Heap Memory</h4>
          <ul className="text-xs text-[#94a3b8] space-y-1">
            <li>• <strong className="text-white">Slower</strong> — more complex allocation</li>
            <li>• <strong className="text-white">Large</strong> — can grow as needed</li>
            <li>• <strong className="text-white">Manual</strong> — you manage it (or GC does)</li>
            <li>• <strong className="text-white">Flexible</strong> — allocate/free in any order</li>
            <li>• <strong className="text-white">Stores:</strong> objects, arrays, dynamic data</li>
          </ul>
        </div>
      </div>

      <CodeBlock
        language="typescript"
        title="stack-vs-heap.ts"
        code={`// STACK: Simple values (numbers, booleans, strings)
let x = 42;        // Stored on stack
let y = true;      // Stored on stack
let name = "Alice"; // Stored on stack (primitive)

// HEAP: Objects and arrays
let arr = [1, 2, 3];      // Array stored on heap
let obj = { name: "Bob" }; // Object stored on heap

// The VARIABLE (arr, obj) is on the stack
// But it holds a REFERENCE (address) to the heap`}
      />

      {/* Values vs References */}
      <h2>Values vs References</h2>
      <p>
        This is one of the <strong className="text-white">most important concepts</strong> in JavaScript and DSA.
      </p>

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Primitives: Stored by Value</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        Numbers, booleans, strings, null, undefined — these are <strong className="text-white">primitives</strong>. 
        When you assign them, you copy the <strong className="text-white">actual value</strong>.
      </p>

      <CodeBlock
        language="typescript"
        title="primitives-by-value.ts"
        code={`let a = 10;
let b = a;  // Copy the VALUE 10

b = 20;     // Change b

console.log(a); // 10 (unchanged!)
console.log(b); // 20

// a and b are COMPLETELY INDEPENDENT
// Changing one doesn't affect the other`}
      />

      <div className="my-4 p-4 rounded-lg bg-[#0d1117] border border-[#334155]">
        <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3 font-medium">Memory Visualization</p>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#94a3b8] w-20">Stack:</span>
            <span className="text-green-400">a = 10</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#94a3b8] w-20"></span>
            <span className="text-green-400">b = 10</span>
            <span className="text-[#64748b]">(copy of a's value)</span>
          </div>
          <div className="mt-3 text-[#94a3b8]">After b = 20:</div>
          <div className="flex items-center gap-3">
            <span className="text-[#94a3b8] w-20">Stack:</span>
            <span className="text-green-400">a = 10</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#94a3b8] w-20"></span>
            <span className="text-green-400">b = 20</span>
            <span className="text-[#64748b]">(b changed, a unchanged)</span>
          </div>
        </div>
      </div>

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Objects: Stored by Reference</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        Objects, arrays, functions — these are <strong className="text-white">stored on the heap</strong>. 
        Variables hold a <strong className="text-white">reference</strong> (address) to the heap location.
      </p>

      <CodeBlock
        language="typescript"
        title="objects-by-reference.ts"
        code={`let arr1 = [1, 2, 3];
let arr2 = arr1;  // Copy the REFERENCE, not the array!

arr2.push(4);     // Modify through arr2

console.log(arr1); // [1, 2, 3, 4] ← CHANGED!
console.log(arr2); // [1, 2, 3, 4]

// arr1 and arr2 point to the SAME array in memory
// Changing one affects the other!`}
      />

      <div className="my-4 p-4 rounded-lg bg-[#0d1117] border border-[#334155]">
        <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3 font-medium">Memory Visualization</p>
        <div className="space-y-3 font-mono text-xs">
          <div>
            <div className="text-[#94a3b8] mb-1">Stack:</div>
            <div className="flex items-center gap-3 ml-4">
              <span className="text-blue-400">arr1</span>
              <span className="text-[#64748b]">→</span>
              <span className="text-[#94a3b8]">0x2000</span>
              <span className="text-[#64748b]">(reference to heap)</span>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <span className="text-blue-400">arr2</span>
              <span className="text-[#64748b]">→</span>
              <span className="text-[#94a3b8]">0x2000</span>
              <span className="text-[#64748b]">(SAME reference!)</span>
            </div>
          </div>
          <div>
            <div className="text-[#94a3b8] mb-1">Heap (at address 0x2000):</div>
            <div className="ml-4 text-green-400">[1, 2, 3, 4]</div>
            <div className="ml-4 text-[#64748b]">↑ Both arr1 and arr2 point here</div>
          </div>
        </div>
      </div>

      <Callout type="warning" title="This is Why Linked Lists Work">
        Linked list nodes are objects stored on the heap. Each node has a <code>next</code> property that holds a <strong className="text-white">reference</strong> to another node. 
        The nodes can be scattered anywhere in heap memory, but the references connect them into a chain.
      </Callout>

      {/* Mutation */}
      <h2>Mutation</h2>
      <p>
        <strong className="text-white">Mutation</strong> means changing an object/array <em>in place</em> (without creating a new one).
      </p>

      <CodeBlock
        language="typescript"
        title="mutation.ts"
        code={`// MUTATION: Changing the original object
let arr = [1, 2, 3];
arr.push(4);        // Mutates arr → [1, 2, 3, 4]
arr[0] = 99;        // Mutates arr → [99, 2, 3, 4]

// NO MUTATION: Creating a new object
let arr2 = [1, 2, 3];
let newArr = arr2.concat(4);  // Creates NEW array [1, 2, 3, 4]
// arr2 is still [1, 2, 3]

let arr3 = [...arr2, 4];      // Creates NEW array using spread
// arr3 is still [1, 2, 3]`}
      />

      <Callout type="info" title="Why This Matters">
        <ul className="space-y-1 text-sm">
          <li>• <strong className="text-white">Arrays are mutable</strong> — you can change them in place</li>
          <li>• <strong className="text-white">Strings are immutable</strong> — you can't change individual characters</li>
          <li>• <strong className="text-white">Mutation affects all references</strong> — if two variables point to the same array, mutating one affects both</li>
        </ul>
      </Callout>

      {/* Shallow vs Deep Copy */}
      <h2>Shallow Copy vs Deep Copy</h2>
      <p>
        When you need to copy an object/array, you have two options:
      </p>

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Shallow Copy</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        Copies the <strong className="text-white">top-level properties</strong>. If properties are objects/arrays, it copies the <strong className="text-white">references</strong>, not the nested objects.
      </p>

      <CodeBlock
        language="typescript"
        title="shallow-copy.ts"
        code={`let original = {
    name: "Alice",
    scores: [90, 85, 92]
};

// Shallow copy using spread operator
let shallow = { ...original };

// Change top-level property
shallow.name = "Bob";
console.log(original.name); // "Alice" (unchanged) ✓

// Change nested array
shallow.scores.push(100);
console.log(original.scores); // [90, 85, 92, 100] ← CHANGED!

// shallow.scores and original.scores point to SAME array`}
      />

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Deep Copy</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        Copies <strong className="text-white">everything recursively</strong> — all nested objects/arrays are also copied.
      </p>

      <CodeBlock
        language="typescript"
        title="deep-copy.ts"
        code={`let original = {
    name: "Alice",
    scores: [90, 85, 92]
};

// Deep copy using structuredClone (modern JavaScript)
let deep = structuredClone(original);

// Change nested array
deep.scores.push(100);
console.log(original.scores); // [90, 85, 92] (unchanged) ✓
console.log(deep.scores);     // [90, 85, 92, 100]

// They are COMPLETELY INDEPENDENT now`}
      />

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-[#334155] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1e293b]">
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Method</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Type</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Nested Objects?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#334155]">
            <tr>
              <td className="px-4 py-3 text-white"><code>{'{ ...obj }'}</code></td>
              <td className="px-4 py-3 text-yellow-400">Shallow</td>
              <td className="px-4 py-3 text-[#94a3b8]">References copied</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white"><code>Object.assign({'{}'}, obj)</code></td>
              <td className="px-4 py-3 text-yellow-400">Shallow</td>
              <td className="px-4 py-3 text-[#94a3b8]">References copied</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white"><code>structuredClone(obj)</code></td>
              <td className="px-4 py-3 text-green-400">Deep</td>
              <td className="px-4 py-3 text-[#94a3b8]">Fully copied</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white"><code>JSON.parse(JSON.stringify(obj))</code></td>
              <td className="px-4 py-3 text-green-400">Deep</td>
              <td className="px-4 py-3 text-[#94a3b8]">Fully copied (but slow, loses functions)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pass-by-Value */}
      <h2>Pass-by-Value Semantics</h2>
      <p>
        When you pass arguments to functions, JavaScript always uses <strong className="text-white">pass-by-value</strong>. 
        But for objects, the "value" is a <strong className="text-white">reference</strong>.
      </p>

      <CodeBlock
        language="typescript"
        title="pass-by-value.ts"
        code={`// Primitives: pass the VALUE
function increment(x: number): void {
    x = x + 1; // Changes local copy
}

let num = 10;
increment(num);
console.log(num); // 10 (unchanged)

// Objects: pass the REFERENCE (but still pass-by-value!)
function addScore(scores: number[]): void {
    scores.push(100); // Mutates the original array!
}

let myScores = [90, 85];
addScore(myScores);
console.log(myScores); // [90, 85, 100] ← CHANGED!

// The function received a COPY of the reference
// Both the original variable and the parameter point to the same array`}
      />

      <Callout type="tip" title="Key Insight">
        JavaScript is <strong className="text-white">always pass-by-value</strong>. For primitives, the value is the data itself. 
        For objects, the value is a <strong className="text-white">reference to the heap location</strong>. 
        This is why mutating objects inside functions affects the original.
      </Callout>

      {/* Why Linked Lists Work */}
      <h2>Why Linked Lists Work</h2>
      <p>
        Now you can understand how linked lists work:
      </p>

      <CodeBlock
        language="typescript"
        title="linked-list-memory.ts"
        code={`class ListNode {
    data: number;
    next: ListNode | null;
    
    constructor(data: number) {
        this.data = data;
        this.next = null; // Reference to another node
    }
}

// Create nodes (stored on heap)
let node1 = new ListNode(10); // Heap: 0x3000
let node2 = new ListNode(20); // Heap: 0x3100
let node3 = new ListNode(30); // Heap: 0x3200

// Connect them using references
node1.next = node2; // node1.next = 0x3100
node2.next = node3; // node2.next = 0x3200

// The nodes are SCATTERED in heap memory
// But the REFERENCES connect them into a chain:
// [10|•] → [20|•] → [30|null]`}
      />

      <div className="my-4 p-4 rounded-lg bg-[#0d1117] border border-[#334155]">
        <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3 font-medium">Memory Layout</p>
        <div className="space-y-3 font-mono text-xs">
          <div>
            <div className="text-[#94a3b8] mb-1">Stack:</div>
            <div className="ml-4 text-blue-400">node1 → 0x3000</div>
            <div className="ml-4 text-blue-400">node2 → 0x3100</div>
            <div className="ml-4 text-blue-400">node3 → 0x3200</div>
          </div>
          <div>
            <div className="text-[#94a3b8] mb-1">Heap:</div>
            <div className="ml-4 space-y-1">
              <div className="text-green-400">0x3000: {'{'} data: 10, next: 0x3100 {'}'}</div>
              <div className="text-green-400">0x3100: {'{'} data: 20, next: 0x3200 {'}'}</div>
              <div className="text-green-400">0x3200: {'{'} data: 30, next: null {'}'}</div>
            </div>
          </div>
          <div className="mt-3 text-[#94a3b8]">
            Nodes are scattered (0x3000, 0x3100, 0x3200 are not adjacent), 
            but the <code>next</code> references connect them into a logical chain.
          </div>
        </div>
      </div>

      {/* Arrays vs Linked Lists */}
      <h2>Arrays vs Linked Lists in Memory</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <h4 className="text-sm font-semibold text-green-300 mb-2">Array (Contiguous)</h4>
          <div className="my-3 font-mono text-xs space-y-1">
            <div className="text-[#94a3b8]">Heap:</div>
            <div className="flex gap-1">
              <div className="px-2 py-1 bg-green-500/20 border border-green-500/40 rounded">10</div>
              <div className="px-2 py-1 bg-green-500/20 border border-green-500/40 rounded">20</div>
              <div className="px-2 py-1 bg-green-500/20 border border-green-500/40 rounded">30</div>
              <div className="px-2 py-1 bg-green-500/20 border border-green-500/40 rounded">40</div>
            </div>
            <div className="text-[#64748b] mt-2">All elements side-by-side in memory</div>
          </div>
          <ul className="text-xs text-[#94a3b8] space-y-1 mt-3">
            <li>✓ <strong className="text-white">Fast access:</strong> O(1) via address calculation</li>
            <li>✓ <strong className="text-white">Cache-friendly:</strong> sequential access</li>
            <li>✗ <strong className="text-white">Slow insert:</strong> O(n) to shift elements</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h4 className="text-sm font-semibold text-blue-300 mb-2">Linked List (Scattered)</h4>
          <div className="my-3 font-mono text-xs space-y-1">
            <div className="text-[#94a3b8]">Heap:</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/40 rounded">[10|•]</div>
                <span className="text-[#64748b]">→</span>
                <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/40 rounded">[20|•]</div>
                <span className="text-[#64748b]">→</span>
                <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/40 rounded">[30|∅]</div>
              </div>
            </div>
            <div className="text-[#64748b] mt-2">Nodes scattered, connected by references</div>
          </div>
          <ul className="text-xs text-[#94a3b8] space-y-1 mt-3">
            <li>✗ <strong className="text-white">Slow access:</strong> O(n) to traverse</li>
            <li>✗ <strong className="text-white">Cache-unfriendly:</strong> scattered memory</li>
            <li>✓ <strong className="text-white">Fast insert:</strong> O(1) if you have reference</li>
          </ul>
        </div>
      </div>

      {/* Practice Problems */}
      <h2>Practice Problems</h2>

      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟢 Easy: Predict the Output</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a); // What is printed?`}
          />
          <p className="text-xs text-[#94a3b8] mt-2">
            <em>Hint: Remember, b is a reference to the same array as a.</em>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟡 Medium: Fix the Bug</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`function addElement(arr: number[]): void {
    arr = [...arr, 4]; // Bug: doesn't affect original
}

let myArr = [1, 2, 3];
addElement(myArr);
console.log(myArr); // Still [1, 2, 3]!`}
          />
          <p className="text-xs text-[#94a3b8] mt-2">
            <em>Hint: The spread operator creates a NEW array. How do you mutate the original?</em>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🔴 Challenge: Deep Clone</h4>
          <p className="text-xs text-[#94a3b8]">
            Implement a function that creates a deep copy of an object (without using <code>structuredClone</code>). 
            Handle nested objects and arrays recursively.
          </p>
        </div>
      </div>

      {/* Knowledge Check */}
      <h2>Knowledge Check</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 1:</strong> What is stored on the stack vs the heap?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. Primitives on heap, objects on stack</div>
            <div className="text-green-400">B. Primitives on stack, objects on heap ✓</div>
            <div>C. Everything on stack</div>
            <div>D. Everything on heap</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 2:</strong> What does "pass-by-reference" mean in JavaScript?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. JavaScript has pass-by-reference</div>
            <div className="text-green-400">B. JavaScript is always pass-by-value, but for objects, the value is a reference ✓</div>
            <div>C. Objects are passed by value</div>
            <div>D. Primitives are passed by reference</div>
          </div>
        </div>
      </div>

      {/* Cheat Sheet */}
      <Callout type="tip" title="Memory & References Cheat Sheet">
        <ul className="space-y-2 text-sm">
          <li>• <strong className="text-white">Stack:</strong> fast, small, automatic — stores primitives and function calls</li>
          <li>• <strong className="text-white">Heap:</strong> large, flexible — stores objects and arrays</li>
          <li>• <strong className="text-white">Primitives:</strong> stored by value (numbers, booleans, strings)</li>
          <li>• <strong className="text-white">Objects:</strong> stored by reference (variables hold addresses to heap)</li>
          <li>• <strong className="text-white">Mutation:</strong> changing an object in place (affects all references)</li>
          <li>• <strong className="text-white">Shallow copy:</strong> copies top-level, nested objects still shared</li>
          <li>• <strong className="text-white">Deep copy:</strong> copies everything recursively</li>
          <li>• <strong className="text-white">Arrays:</strong> contiguous memory, O(1) access, O(n) insert</li>
          <li>• <strong className="text-white">Linked lists:</strong> scattered nodes connected by references</li>
        </ul>
      </Callout>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
        <p className="text-sm text-blue-300 font-medium mb-2">🎯 What's Next?</p>
        <p className="text-sm text-[#94a3b8]">
          Now that you understand memory and references, you're ready for <strong className="text-white">Arrays</strong> (contiguous memory, O(1) access) 
          and <strong className="text-white">Linked Lists</strong> (scattered nodes connected by references). 
          You'll see these concepts in action!
        </p>
      </div>
    </div>
  );
}

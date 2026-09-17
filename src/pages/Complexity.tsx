import CodeBlock from '../components/CodeBlock';
import { ComplexityBadge, Callout } from '../components/Visuals';

export default function Complexity() {
  return (
    <div className="doc-content animate-fade-in">
      {/* Overview */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-3">
          Foundations
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Complexity Analysis
        </h1>
        <p className="text-[#94a3b8] max-w-2xl">
          Big-O notation describes how an algorithm's performance scales with input size. 
          It's not about exact speed—it's about <strong className="text-white">growth rate</strong>.
        </p>
      </div>

      {/* Mental Model */}
      <h2>Mental Model: Growth Rate</h2>
      <p>
        Think of Big-O as answering: <strong className="text-white">"As my input grows, how much slower does my algorithm get?"</strong>
      </p>
      
      <div className="my-4 p-4 rounded-lg bg-[#0d1117] border border-[#334155]">
        <p className="text-sm text-[#94a3b8] mb-2">
          <strong className="text-white">Formal definition:</strong> An algorithm is O(f(n)) if, for large enough n, 
          the running time is at most c·f(n) for some constant c.
        </p>
        <p className="text-sm text-[#94a3b8]">
          <strong className="text-white">Practical meaning:</strong> We ignore constants and focus on the dominant term. 
          O(2n) and O(n) are the same because both grow linearly.
        </p>
      </div>

      <Callout type="info" title="Why Big-O Matters">
        Consider sorting 1 million items:<br />
        <strong className="text-green-400">O(n log n):</strong> ~20ms<br />
        <strong className="text-red-400">O(n²):</strong> ~1000 seconds<br />
        <br />
        Same problem, <strong className="text-white">50,000x difference</strong> in performance!
      </Callout>

      {/* Common Complexities */}
      <h2>Common Time Complexities</h2>
      <p>
        From fastest to slowest, here are the complexities you'll encounter most often:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border border-[#334155] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1e293b]">
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Big-O</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Name</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Example</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">1M items</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#334155]">
            <tr>
              <td className="px-4 py-3 text-green-400 font-mono">O(1)</td>
              <td className="px-4 py-3 text-white">Constant</td>
              <td className="px-4 py-3 text-[#94a3b8]">Array access, hash table lookup</td>
              <td className="px-4 py-3 text-[#94a3b8]">1 operation</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-green-400 font-mono">O(log n)</td>
              <td className="px-4 py-3 text-white">Logarithmic</td>
              <td className="px-4 py-3 text-[#94a3b8]">Binary search, balanced BST</td>
              <td className="px-4 py-3 text-[#94a3b8]">~20 operations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-yellow-400 font-mono">O(n)</td>
              <td className="px-4 py-3 text-white">Linear</td>
              <td className="px-4 py-3 text-[#94a3b8]">Linear search, single loop</td>
              <td className="px-4 py-3 text-[#94a3b8]">1,000,000 operations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-yellow-400 font-mono">O(n log n)</td>
              <td className="px-4 py-3 text-white">Linearithmic</td>
              <td className="px-4 py-3 text-[#94a3b8]">Merge sort, heap sort</td>
              <td className="px-4 py-3 text-[#94a3b8]">~20,000,000 operations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-orange-400 font-mono">O(n²)</td>
              <td className="px-4 py-3 text-white">Quadratic</td>
              <td className="px-4 py-3 text-[#94a3b8]">Bubble sort, nested loops</td>
              <td className="px-4 py-3 text-[#94a3b8]">1,000,000,000,000 operations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-red-400 font-mono">O(2ⁿ)</td>
              <td className="px-4 py-3 text-white">Exponential</td>
              <td className="px-4 py-3 text-[#94a3b8]">Recursive Fibonacci, subsets</td>
              <td className="px-4 py-3 text-[#94a3b8]">Astronomically large</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-red-500 font-mono">O(n!)</td>
              <td className="px-4 py-3 text-white">Factorial</td>
              <td className="px-4 py-3 text-[#94a3b8]">Permutations, TSP brute force</td>
              <td className="px-4 py-3 text-[#94a3b8]">Impossible</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Understanding Each Complexity */}
      <h2>Understanding Each Complexity</h2>

      <h3>O(1) — Constant Time</h3>
      <p>
        The operation takes the same time regardless of input size.
      </p>
      <CodeBlock
        language="typescript"
        title="o1-examples.ts"
        code={`// Array access by index
const arr = [10, 20, 30, 40, 50];
const value = arr[3];  // O(1) - direct memory calculation

// Hash table lookup
const map = new Map<string, number>();
map.set("alice", 95);
const score = map.get("alice");  // O(1) average

// Stack push/pop
const stack: number[] = [];
stack.push(42);  // O(1)
stack.pop();     // O(1)`}
      />

      <h3>O(log n) — Logarithmic Time</h3>
      <p>
        The problem size is halved (or divided by a constant) at each step.
      </p>
      <CodeBlock
        language="typescript"
        title="ologn-examples.ts"
        code={`// Binary search - halves search space each iteration
function binarySearch(arr: number[], target: number): number {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}
// Each iteration eliminates half the remaining elements
// For 1,000,000 elements: log₂(1,000,000) ≈ 20 iterations`}
      />

      <h3>O(n) — Linear Time</h3>
      <p>
        The algorithm must examine each element once.
      </p>
      <CodeBlock
        language="typescript"
        title="on-examples.ts"
        code={`// Linear search - must check every element
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Single loop through array
function sum(arr: number[]): number {
  let total = 0;
  for (const num of arr) {  // O(n)
    total += num;
  }
  return total;
}

// Find maximum
function findMax(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {  // O(n)
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`}
      />

      <h3>O(n²) — Quadratic Time</h3>
      <p>
        Nested loops where each loop processes the input.
      </p>
      <CodeBlock
        language="typescript"
        title="on2-examples.ts"
        code={`// Bubble sort - nested loops
function bubbleSort(arr: number[]): void {
  const n = arr.length;
  for (let i = 0; i < n; i++) {           // O(n)
    for (let j = 0; j < n - i - 1; j++) { // O(n)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
// Total: n × n = n² operations

// Check all pairs
function hasDuplicate(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {        // O(n)
    for (let j = i + 1; j < arr.length; j++) {  // O(n)
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
// Total: n × (n-1) / 2 ≈ n²/2 = O(n²)`}
      />

      {/* Space Complexity */}
      <h2>Space Complexity</h2>
      <p>
        Space complexity measures <strong className="text-white">how much extra memory</strong> an algorithm uses beyond the input.
      </p>

      <CodeBlock
        language="typescript"
        title="space-complexity.ts"
        code={`// O(1) space - only uses a few variables
function sum(arr: number[]): number {
  let total = 0;  // O(1) extra space
  for (const num of arr) {
    total += num;
  }
  return total;
}

// O(n) space - creates new array of size n
function double(arr: number[]): number[] {
  const result: number[] = [];  // O(n) extra space
  for (const num of arr) {
    result.push(num * 2);
  }
  return result;
}

// O(n) space - recursion stack depth
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);  // O(n) call stack
}

// O(n²) space - 2D array
function createMatrix(n: number): number[][] {
  const matrix: number[][] = [];  // O(n²) extra space
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }
  return matrix;
}`}
      />

      {/* How to Analyze Code */}
      <h2>How to Analyze Code</h2>

      <h3>Step 1: Identify the Basic Operations</h3>
      <p>
        Count how many times the basic operation (comparison, assignment, etc.) executes.
      </p>

      <CodeBlock
        language="typescript"
        title="analysis-step1.ts"
        code={`function example(arr: number[]): void {
  // This loop runs n times
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // O(1) operation
  }
  // Total: n × O(1) = O(n)
}

function nested(arr: number[]): void {
  // Outer loop: n iterations
  for (let i = 0; i < arr.length; i++) {
    // Inner loop: n iterations
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);  // O(1) operation
    }
  }
  // Total: n × n × O(1) = O(n²)
}`}
      />

      <h3>Step 2: Drop Constants</h3>
      <p>
        Big-O focuses on growth rate, not exact operations.
      </p>

      <CodeBlock
        language="typescript"
        title="analysis-step2.ts"
        code={`function example(arr: number[]): void {
  // Loop 1: n iterations
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // O(n)
  }
  
  // Loop 2: n iterations
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // O(n)
  }
  
  // Total: O(n) + O(n) = O(2n) = O(n)
  // We drop the constant 2
}`}
      />

      <h3>Step 3: Focus on the Dominant Term</h3>
      <p>
        When you have multiple terms, keep only the largest.
      </p>

      <CodeBlock
        language="typescript"
        title="analysis-step3.ts"
        code={`function example(arr: number[]): void {
  // Single loop: O(n)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  
  // Nested loops: O(n²)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
  
  // Total: O(n) + O(n²) = O(n²)
  // We drop the smaller term O(n)
}`}
      />

      {/* Best/Average/Worst Case */}
      <h2>Best, Average, and Worst Case</h2>
      <p>
        Algorithms can have different performance depending on the input.
      </p>

      <CodeBlock
        language="typescript"
        title="cases.ts"
        code={`function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Best case: O(1)
// Target is at index 0, found immediately

// Average case: O(n)
// Target is somewhere in the middle, check n/2 elements on average

// Worst case: O(n)
// Target is at the end or not present, check all n elements`}
      />

      <Callout type="tip" title="Which Case Matters Most?">
        <strong className="text-white">Worst case</strong> is most commonly used because it provides a guarantee.<br />
        <strong className="text-white">Average case</strong> is more realistic but harder to analyze.<br />
        <strong className="text-white">Best case</strong> is rarely useful except for optimization.
      </Callout>

      {/* Amortized Analysis */}
      <h2>Amortized Analysis</h2>
      <p>
        Some operations are occasionally expensive but cheap on average.
      </p>

      <CodeBlock
        language="typescript"
        title="amortized.ts"
        code={`// Dynamic array push
class DynamicArray {
  private data: number[] = [];
  private capacity = 1;
  
  push(value: number): void {
    if (this.data.length === this.capacity) {
      // Resize: O(n) - copy all elements
      this.capacity *= 2;
      const newData = new Array(this.capacity);
      for (let i = 0; i < this.data.length; i++) {
        newData[i] = this.data[i];
      }
      this.data = newData;
    }
    
    // Add element: O(1)
    this.data.push(value);
  }
}

// Most pushes: O(1)
// Occasional push (when resizing): O(n)
// Amortized: O(1) per push on average`}
      />

      <Callout type="info" title="Why Amortized O(1)?">
        Resizing happens at sizes 1, 2, 4, 8, 16, 32...<br />
        For n insertions, we resize log(n) times.<br />
        Total work: n + n/2 + n/4 + ... ≈ 2n<br />
        Average per insertion: 2n/n = <strong className="text-white">O(1)</strong>
      </Callout>

      {/* Practice */}
      <h2>Practice: Analyze These Functions</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">Example 1</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`function example1(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`}
          />
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong className="text-white">Answer:</strong> O(n) time, O(1) space
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">Example 2</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`function example2(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) return true;
    }
  }
  return false;
}`}
          />
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong className="text-white">Answer:</strong> O(n²) time, O(1) space
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">Example 3</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`function example3(n: number): number {
  if (n <= 1) return 1;
  return example3(n - 1) + example3(n - 2);
}`}
          />
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong className="text-white">Answer:</strong> O(2ⁿ) time, O(n) space (call stack)
          </p>
        </div>
      </div>

      {/* Knowledge Check */}
      <h2>Knowledge Check</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 1:</strong> What is the time complexity of accessing an array element by index?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div className="text-green-400">A. O(1) ✓</div>
            <div>B. O(log n)</div>
            <div>C. O(n)</div>
            <div>D. O(n²)</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> Array access uses direct memory calculation: address = base + (index × size). No searching needed.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 2:</strong> What is the space complexity of creating a new array of size n?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. O(1)</div>
            <div>B. O(log n)</div>
            <div className="text-green-400">C. O(n) ✓</div>
            <div>D. O(n²)</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> A new array of size n requires n units of memory, so space complexity is O(n).
          </p>
        </div>
      </div>

      {/* Summary */}
      <Callout type="tip" title="Key Takeaways">
        <ul className="space-y-2 text-sm">
          <li>• <strong className="text-white">Big-O describes growth rate</strong>, not exact speed</li>
          <li>• <strong className="text-white">Drop constants and lower-order terms</strong></li>
          <li>• <strong className="text-white">Worst case</strong> is most commonly analyzed</li>
          <li>• <strong className="text-white">Space complexity</strong> measures extra memory beyond input</li>
          <li>• <strong className="text-white">Amortized analysis</strong> averages expensive operations over time</li>
          <li>• <strong className="text-white">O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ)</strong></li>
        </ul>
      </Callout>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <p className="text-sm text-indigo-300 font-medium mb-2">🎯 What's Next?</p>
        <p className="text-sm text-[#94a3b8]">
          Now that you understand complexity analysis, you can evaluate why certain data structures and algorithms are preferable. 
          Continue to <strong className="text-white">Memory & References</strong> to understand how data is stored, then <strong className="text-white">Recursion</strong> to master self-referential algorithms.
        </p>
      </div>
    </div>
  );
}

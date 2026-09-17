import CodeBlock from '../components/CodeBlock';

export default function Arrays() {
  return (
    <div className="doc-content animate-fade-in">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-3">
          Data Structures
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Arrays & Strings
        </h1>
        <p className="text-[#94a3b8] max-w-2xl">
          The most fundamental data structures in computer science. Arrays store elements in contiguous memory, 
          enabling O(1) random access. Strings are immutable sequences of characters with specialized operations.
        </p>
      </div>

      {/* Mental Model */}
      <h2>Mental Model: Contiguous Memory</h2>
      <p>
        Think of an array as a <strong className="text-white">row of lockers</strong>, each with a number starting from 0. 
        Because lockers are side-by-side, you can instantly access any locker if you know its number. 
        This is why arrays provide <strong className="text-white">O(1) random access</strong>.
      </p>

      <div className="my-6 p-5 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
        <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3 font-medium">Memory Layout</p>
        <div className="flex gap-2 flex-wrap">
          {[10, 20, 30, 40, 50].map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-lg bg-indigo-500/20 border-2 border-indigo-500/40 flex items-center justify-center">
                <span className="text-lg font-bold text-white">{val}</span>
              </div>
              <span className="text-xs text-[#64748b] mt-1">[{i}]</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94a3b8] mt-4">
          <strong className="text-white">Address calculation:</strong> address = base + (index × element_size)
        </p>
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
              <td className="px-4 py-3 text-green-400 font-mono">O(1)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Direct memory calculation</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Search (unsorted)</td>
              <td className="px-4 py-3 text-yellow-400 font-mono">O(n)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Must check each element</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Search (sorted)</td>
              <td className="px-4 py-3 text-green-400 font-mono">O(log n)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Binary search</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Insert at end</td>
              <td className="px-4 py-3 text-green-400 font-mono">O(1)*</td>
              <td className="px-4 py-3 text-[#94a3b8]">*Amortized (may need resize)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Insert at start</td>
              <td className="px-4 py-3 text-red-400 font-mono">O(n)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Must shift all elements</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Delete at index</td>
              <td className="px-4 py-3 text-red-400 font-mono">O(n)</td>
              <td className="px-4 py-3 text-[#94a3b8]">Must shift elements after</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Essential Patterns */}
      <h2>Essential Patterns</h2>

      <h3 className="text-xl font-bold text-white mt-6 mb-3">1. Two Pointers</h3>
      <p className="text-[#94a3b8] mb-3">
        Use two indices moving through the array. Common for sorted arrays, palindrome checking, and pair finding.
      </p>
      <CodeBlock
        language="typescript"
        title="two-pointers.ts"
        code={`/**
 * Two Sum in Sorted Array
 * Time: O(n) | Space: O(1)
 */
function twoSumSorted(nums: number[], target: number): [number, number] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;  // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }

  return [-1, -1]; // No solution
}

// Example: twoSumSorted([1, 3, 5, 7, 9], 12)
// Returns [1, 4] because nums[1] + nums[4] = 3 + 9 = 12`}
      />

      <h3 className="text-xl font-bold text-white mt-6 mb-3">2. Sliding Window</h3>
      <p className="text-[#94a3b8] mb-3">
        Maintain a window that slides through the array. Perfect for subarray/substring problems.
      </p>
      <CodeBlock
        language="typescript"
        title="sliding-window.ts"
        code={`/**
 * Maximum Sum Subarray of Size K
 * Time: O(n) | Space: O(1)
 */
function maxSumSubarray(nums: number[], k: number): number {
  if (k > nums.length) return -1;

  // Calculate first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example: maxSumSubarray([2, 1, 5, 1, 3, 2], 3)
// Returns 9 (subarray [5, 1, 3])`}
      />

      <h3 className="text-xl font-bold text-white mt-6 mb-3">3. Prefix Sum</h3>
      <p className="text-[#94a3b8] mb-3">
        Precompute cumulative sums for O(1) range queries.
      </p>
      <CodeBlock
        language="typescript"
        title="prefix-sum.ts"
        code={`/**
 * Range Sum Query
 * Time: O(n) preprocessing, O(1) per query | Space: O(n)
 */
class NumArray {
  private prefix: number[];

  constructor(nums: number[]) {
    this.prefix = [0];
    for (let i = 0; i < nums.length; i++) {
      this.prefix.push(this.prefix[i] + nums[i]);
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

// Example:
// const arr = new NumArray([1, 3, 5, 7, 9]);
// arr.sumRange(1, 3) returns 15 (3 + 5 + 7)`}
      />

      {/* Strings */}
      <h2>Strings: Immutable Character Arrays</h2>
      <p className="text-[#94a3b8] mb-3">
        Strings are sequences of characters. In JavaScript, they're <strong className="text-white">immutable</strong> — 
        you can't change individual characters. Every "modification" creates a new string.
      </p>

      <CodeBlock
        language="typescript"
        title="string-operations.ts"
        code={`// String immutability
let str = "hello";
str[0] = "H"; // No error, but doesn't work!
console.log(str); // Still "hello"

// Correct approach: create new string
str = "H" + str.slice(1); // "Hello"

// Common string operations
const text = "Hello, World!";

text.length;              // 13
text.toUpperCase();       // "HELLO, WORLD!"
text.toLowerCase();       // "hello, world!"
text.includes("World");   // true
text.indexOf("World");    // 7
text.slice(0, 5);         // "Hello"
text.split(",");          // ["Hello", " World!"]
text.trim();              // Removes whitespace
text.replace("World", "DSA"); // "Hello, DSA!"

// String to array and back
const chars = text.split("");     // Array of characters
const reversed = chars.reverse().join(""); // "!dlroW ,olleH"`}
      />

      {/* Common Mistakes */}
      <h2>Common Mistakes</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h4 className="text-sm font-semibold text-red-300 mb-2">❌ Mistake 1: Modifying array while iterating</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`// BAD: Modifying while iterating forward
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr.splice(i, 1); // Shifts elements, skips next!
  }
}
// Result: [1, 3, 5] but might skip elements

// GOOD: Iterate backwards or create new array
const filtered = arr.filter(x => x % 2 !== 0);`}
          />
        </div>

        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h4 className="text-sm font-semibold text-red-300 mb-2">❌ Mistake 2: Off-by-one errors</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`// BAD: Accessing out of bounds
const arr = [1, 2, 3];
console.log(arr[3]); // undefined (not an error!)

// GOOD: Always check bounds
if (index >= 0 && index < arr.length) {
  console.log(arr[index]);
}`}
          />
        </div>

        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h4 className="text-sm font-semibold text-red-300 mb-2">❌ Mistake 3: String concatenation in loops</h4>
          <CodeBlock
            language="typescript"
            title=""
            code={`// BAD: O(n²) due to string immutability
let result = "";
for (let i = 0; i < 1000; i++) {
  result += "a"; // Creates new string each time!
}

// GOOD: Use array and join
const chars = [];
for (let i = 0; i < 1000; i++) {
  chars.push("a");
}
const result = chars.join(""); // O(n)`}
          />
        </div>
      </div>

      {/* Practice Problems */}
      <h2>Practice Problems</h2>

      <div className="space-y-3 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟢 Easy: Reverse String</h4>
          <p className="text-xs text-[#94a3b8]">
            Write a function that reverses a string. Do it in-place with O(1) extra memory.
          </p>
          <details className="mt-2">
            <summary className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">Show Hint</summary>
            <p className="text-xs text-[#94a3b8] mt-2">
              Use two pointers: one at start, one at end. Swap characters and move pointers toward center.
            </p>
          </details>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟡 Medium: Longest Substring Without Repeating Characters</h4>
          <p className="text-xs text-[#94a3b8]">
            Given a string, find the length of the longest substring without repeating characters.
          </p>
          <details className="mt-2">
            <summary className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">Show Hint</summary>
            <p className="text-xs text-[#94a3b8] mt-2">
              Use sliding window with a Set to track characters. When you see a duplicate, shrink window from left.
            </p>
          </details>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🔴 Hard: Product of Array Except Self</h4>
          <p className="text-xs text-[#94a3b8]">
            Given an array nums, return an array where result[i] is the product of all elements except nums[i]. 
            Solve it without division and in O(n) time.
          </p>
          <details className="mt-2">
            <summary className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">Show Hint</summary>
            <p className="text-xs text-[#94a3b8] mt-2">
              Use prefix and suffix products. First pass: compute left products. Second pass: multiply by right products.
            </p>
          </details>
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
            <strong>Why:</strong> Arrays use direct memory calculation: address = base + (index × size). No searching needed.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 2:</strong> Which pattern is best for finding the maximum sum of a contiguous subarray of size k?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. Two Pointers</div>
            <div className="text-green-400">B. Sliding Window ✓</div>
            <div>C. Prefix Sum</div>
            <div>D. Binary Search</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> Sliding window maintains a window of size k and slides it through the array in O(n) time.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
        <h3 className="text-sm font-semibold text-green-300 mb-3">🔑 Key Takeaways</h3>
        <ul className="space-y-2 text-sm text-[#94a3b8]">
          <li>• <strong className="text-white">Arrays provide O(1) access</strong> but O(n) insertion/deletion in the middle</li>
          <li>• <strong className="text-white">Two pointers</strong> work well for sorted arrays and pair problems</li>
          <li>• <strong className="text-white">Sliding window</strong> is perfect for contiguous subarray/substring problems</li>
          <li>• <strong className="text-white">Prefix sums</strong> enable O(1) range queries after O(n) preprocessing</li>
          <li>• <strong className="text-white">Strings are immutable</strong> in JavaScript — use arrays for mutations</li>
          <li>• <strong className="text-white">Avoid string concatenation in loops</strong> — use array.join() instead</li>
        </ul>
      </div>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <p className="text-sm text-indigo-300 font-medium mb-2">🎯 What's Next?</p>
        <p className="text-sm text-[#94a3b8]">
          Now that you understand arrays and strings, continue to <strong className="text-white">Linked Lists</strong> to learn about 
          non-contiguous memory and dynamic data structures.
        </p>
      </div>
    </div>
  );
}

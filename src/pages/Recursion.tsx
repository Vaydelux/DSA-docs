import CodeBlock from '../components/CodeBlock';
import { ComplexityBadge, Callout, StepWalkthrough } from '../components/Visuals';

export default function Recursion() {
  return (
    <div className="doc-content animate-fade-in">
      {/* Overview */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-3">
          Foundations
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Recursion
        </h1>
        <p className="text-[#94a3b8] max-w-2xl">
          Recursion is a technique where a function <strong className="text-white">calls itself</strong> to solve smaller instances of the same problem. 
          It's the foundation for tree traversal, divide-and-conquer algorithms, backtracking, and dynamic programming.
        </p>
      </div>

      {/* Mental Model */}
      <h2>Mental Model: Russian Nesting Dolls</h2>
      <p>
        Think of recursion like <strong className="text-white">Russian nesting dolls (matryoshka)</strong>:
      </p>
      <div className="my-4 p-4 rounded-lg bg-[#0d1117] border border-[#334155]">
        <div className="space-y-2 text-sm">
          <div className="text-[#94a3b8]">1. You have a big doll</div>
          <div className="text-[#94a3b8]">2. Open it → smaller doll inside</div>
          <div className="text-[#94a3b8]">3. Open that → even smaller doll</div>
          <div className="text-[#94a3b8]">4. Continue until you reach the <strong className="text-white">smallest doll</strong> (base case)</div>
          <div className="text-[#94a3b8]">5. Close them back up in reverse order (unwinding)</div>
        </div>
      </div>
      <p>
        Each function call is like opening a doll. The <strong className="text-white">base case</strong> is the smallest doll that can't be opened. 
        Once you hit it, you start closing dolls back up (returning from function calls).
      </p>

      {/* Two Essential Parts */}
      <h2>The Two Essential Parts</h2>
      <p>
        Every recursive function <strong className="text-white">must</strong> have these two parts:
      </p>

      <CodeBlock
        language="typescript"
        title="recursion-template.ts"
        code={`function recursiveFunction(input):
    // 1. BASE CASE: When to stop
    if (input meets stopping condition) {
        return simple answer;
    }
    
    // 2. RECURSIVE CASE: Break problem down
    smallerProblem = make input smaller;
    result = recursiveFunction(smallerProblem);
    
    return combine result with current input;`}
      />

      <Callout type="danger" title="Missing Base Case = Infinite Recursion">
        If you forget the base case, the function calls itself forever until you get a <strong className="text-white">stack overflow error</strong>.
      </Callout>

      {/* Example Progression */}
      <h2>Example Progression</h2>
      <p>
        Let's build recursion skills step by step, from simple to complex:
      </p>

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Level 1: Factorial</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        <strong className="text-white">Problem:</strong> Calculate n! = n × (n-1) × (n-2) × ... × 1
      </p>

      <CodeBlock
        language="typescript"
        title="factorial.ts"
        code={`/**
 * Factorial: n! = n × (n-1) × ... × 1
 * 
 * Base case: 0! = 1 (by definition)
 * Recursive case: n! = n × (n-1)!
 */
function factorial(n: number): number {
    // Base case
    if (n === 0) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

// factorial(4) = 4 * factorial(3)
//              = 4 * 3 * factorial(2)
//              = 4 * 3 * 2 * factorial(1)
//              = 4 * 3 * 2 * 1 * factorial(0)
//              = 4 * 3 * 2 * 1 * 1
//              = 24`}
      />

      <StepWalkthrough
        steps={[
          {
            title: 'factorial(4)',
            description: 'n=4, not base case. Return 4 * factorial(3)',
            visual: <div className="font-mono text-xs text-[#94a3b8]">Call stack: [factorial(4)]</div>,
          },
          {
            title: 'factorial(3)',
            description: 'n=3, not base case. Return 3 * factorial(2)',
            visual: <div className="font-mono text-xs text-[#94a3b8]">Call stack: [factorial(4), factorial(3)]</div>,
          },
          {
            title: 'factorial(2)',
            description: 'n=2, not base case. Return 2 * factorial(1)',
            visual: <div className="font-mono text-xs text-[#94a3b8]">Call stack: [factorial(4), factorial(3), factorial(2)]</div>,
          },
          {
            title: 'factorial(1)',
            description: 'n=1, not base case. Return 1 * factorial(0)',
            visual: <div className="font-mono text-xs text-[#94a3b8]">Call stack: [factorial(4), factorial(3), factorial(2), factorial(1)]</div>,
          },
          {
            title: 'factorial(0) - BASE CASE',
            description: 'n=0, base case! Return 1',
            visual: <div className="font-mono text-xs text-green-400">Call stack: [..., factorial(0)] → return 1</div>,
          },
          {
            title: 'Unwinding',
            description: 'Now we return back up the call stack, multiplying as we go',
            visual: <div className="font-mono text-xs text-[#94a3b8]">1 → 1*1=1 → 2*1=2 → 3*2=6 → 4*6=24</div>,
          },
        ]}
      />

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Level 2: Sum Array</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        <strong className="text-white">Problem:</strong> Sum all elements in an array
      </p>

      <CodeBlock
        language="typescript"
        title="sum-array.ts"
        code={`/**
 * Sum array recursively
 * 
 * Base case: empty array → sum is 0
 * Recursive case: first element + sum of rest
 */
function sumArray(arr: number[]): number {
    // Base case
    if (arr.length === 0) {
        return 0;
    }
    
    // Recursive case
    const first = arr[0];
    const rest = arr.slice(1);
    return first + sumArray(rest);
}

// sumArray([1, 2, 3, 4])
// = 1 + sumArray([2, 3, 4])
// = 1 + 2 + sumArray([3, 4])
// = 1 + 2 + 3 + sumArray([4])
// = 1 + 2 + 3 + 4 + sumArray([])
// = 1 + 2 + 3 + 4 + 0
// = 10`}
      />

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Level 3: Reverse String</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        <strong className="text-white">Problem:</strong> Reverse a string recursively
      </p>

      <CodeBlock
        language="typescript"
        title="reverse-string.ts"
        code={`/**
 * Reverse string recursively
 * 
 * Base case: empty string or single char → return as-is
 * Recursive case: reverse(rest) + firstChar
 */
function reverseString(str: string): string {
    // Base case
    if (str.length <= 1) {
        return str;
    }
    
    // Recursive case
    const firstChar = str[0];
    const rest = str.slice(1);
    return reverseString(rest) + firstChar;
}

// reverseString("hello")
// = reverseString("ello") + "h"
// = reverseString("llo") + "e" + "h"
// = reverseString("lo") + "l" + "e" + "h"
// = reverseString("o") + "l" + "l" + "e" + "h"
// = "o" + "l" + "l" + "e" + "h"
// = "olleh"`}
      />

      <h3 className="text-base font-semibold text-white mt-6 mb-2">Level 4: Binary Search</h3>
      <p className="text-sm text-[#94a3b8] mb-3">
        <strong className="text-white">Problem:</strong> Binary search using recursion instead of iteration
      </p>

      <CodeBlock
        language="typescript"
        title="binary-search-recursive.ts"
        code={`/**
 * Binary search recursively
 * 
 * Base case: left > right → not found
 * Recursive case: check middle, search left or right half
 */
function binarySearch(
    arr: number[], 
    target: number, 
    left: number = 0, 
    right: number = arr.length - 1
): number {
    // Base case: search space exhausted
    if (left > right) {
        return -1;
    }
    
    const mid = left + Math.floor((right - left) / 2);
    
    if (arr[mid] === target) {
        return mid; // Found!
    } else if (arr[mid] < target) {
        // Search right half
        return binarySearch(arr, target, mid + 1, right);
    } else {
        // Search left half
        return binarySearch(arr, target, left, mid - 1);
    }
}`}
      />

      <ComplexityBadge time="O(log n)" space="O(log n)" />

      <Callout type="info" title="Space Complexity Note">
        The recursive binary search uses <strong className="text-white">O(log n) space</strong> for the call stack, 
        while the iterative version uses <strong className="text-white">O(1) space</strong>. 
        This is a trade-off: recursion is often cleaner but uses more memory.
      </Callout>

      {/* Recursion vs Iteration */}
      <h2>Recursion vs Iteration</h2>
      <p>
        Any recursive solution can be converted to iteration (using a loop), and vice versa. So which should you use?
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-[#334155] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1e293b]">
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Aspect</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Recursion</th>
              <th className="text-left px-4 py-3 text-[#94a3b8] font-medium">Iteration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#334155]">
            <tr>
              <td className="px-4 py-3 text-white">Code clarity</td>
              <td className="px-4 py-3 text-green-400">✓ Often cleaner</td>
              <td className="px-4 py-3 text-[#94a3b8]">Can be verbose</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Space complexity</td>
              <td className="px-4 py-3 text-red-400">O(n) call stack</td>
              <td className="px-4 py-3 text-green-400">✓ O(1) typically</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Performance</td>
              <td className="px-4 py-3 text-[#94a3b8]">Function call overhead</td>
              <td className="px-4 py-3 text-green-400">✓ Faster</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Natural fit</td>
              <td className="px-4 py-3 text-green-400">✓ Trees, backtracking</td>
              <td className="px-4 py-3 text-[#94a3b8]">Simple loops</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Stack overflow risk</td>
              <td className="px-4 py-3 text-red-400">✓ Yes</td>
              <td className="px-4 py-3 text-green-400">✓ No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="tip" title="When to Use Recursion">
        <ul className="space-y-1 text-sm">
          <li>• <strong className="text-white">Tree/graph traversal</strong> — natural recursive structure</li>
          <li>• <strong className="text-white">Divide and conquer</strong> — merge sort, quick sort</li>
          <li>• <strong className="text-white">Backtracking</strong> — exploring all possibilities</li>
          <li>• <strong className="text-white">Dynamic programming</strong> — top-down approach</li>
          <li>• <strong className="text-white">When code clarity matters more than performance</strong></li>
        </ul>
      </Callout>

      {/* Common Mistakes */}
      <h2>Common Recursion Mistakes</h2>

      <Callout type="danger" title="❌ Mistake 1: Missing Base Case">
        <CodeBlock
          language="typescript"
          title=""
          code={`// WRONG: No base case → infinite recursion
function factorial(n: number): number {
    return n * factorial(n - 1); // Stack overflow!
}`}
        />
        <p className="text-xs text-[#94a3b8] mt-2">
          <strong className="text-white">Fix:</strong> Always include a base case that stops the recursion.
        </p>
      </Callout>

      <Callout type="danger" title="❌ Mistake 2: Base Case Never Reached">
        <CodeBlock
          language="typescript"
          title=""
          code={`// WRONG: Base case exists but is never reached
function countdown(n: number): void {
    if (n === 0) return; // Base case
    console.log(n);
    countdown(n + 1); // Going away from base case!
}`}
        />
        <p className="text-xs text-[#94a3b8] mt-2">
          <strong className="text-white">Fix:</strong> Make sure each recursive call moves <em>toward</em> the base case.
        </p>
      </Callout>

      <Callout type="danger" title="❌ Mistake 3: Redundant Computation">
        <CodeBlock
          language="typescript"
          title=""
          code={`// BAD: Exponential time due to repeated work
function fib(n: number): number {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2); // Recomputes same values!
}

// fib(5) calls fib(4) and fib(3)
// fib(4) calls fib(3) and fib(2) ← fib(3) computed twice!`}
        />
        <p className="text-xs text-[#94a3b8] mt-2">
          <strong className="text-white">Fix:</strong> Use memoization (cache results) → Dynamic Programming
        </p>
      </Callout>

      {/* Tail Recursion */}
      <h2>Tail Recursion</h2>
      <p>
        A recursive call is <strong className="text-white">tail recursive</strong> if it's the <strong className="text-white">last operation</strong> in the function. 
        Some languages can optimize tail recursion to use O(1) space (like iteration).
      </p>

      <CodeBlock
        language="typescript"
        title="tail-recursion.ts"
        code={`// NOT tail recursive: multiplication happens AFTER recursive call
function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1); // * happens after call
}

// TAIL RECURSIVE: recursive call is the LAST operation
function factorialTail(n: number, accumulator: number = 1): number {
    if (n === 0) return accumulator;
    return factorialTail(n - 1, n * accumulator); // Call is last
}

// Note: JavaScript doesn't optimize tail recursion,
// but it's still a useful concept to understand.`}
      />

      {/* Practice Problems */}
      <h2>Practice Problems</h2>

      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟢 Easy: Power Function</h4>
          <p className="text-xs text-[#94a3b8]">
            Implement <code>pow(x, n)</code> recursively (x raised to power n). 
            <em> Hint: x^n = x * x^(n-1), base case: x^0 = 1</em>
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🟡 Medium: Recursive Linked List Sum</h4>
          <p className="text-xs text-[#94a3b8]">
            Sum all values in a linked list using recursion (no loops allowed). 
            <em> Hint: Base case: null node → 0. Recursive case: node.val + sum(node.next)</em>
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <h4 className="text-sm font-semibold text-white mb-2">🔴 Challenge: Generate All Subsets</h4>
          <p className="text-xs text-[#94a3b8]">
            Given an array, generate all possible subsets using recursion. 
            <em> Hint: For each element, you have 2 choices: include it or exclude it. This is backtracking!</em>
          </p>
        </div>
      </div>

      {/* Knowledge Check */}
      <h2>Knowledge Check</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 1:</strong> What is the space complexity of a recursive function that makes n calls before hitting the base case?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. O(1)</div>
            <div>B. O(log n)</div>
            <div className="text-green-400">C. O(n) ✓</div>
            <div>D. O(n²)</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> Each function call adds a frame to the call stack. n calls = n frames = O(n) space.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <p className="text-sm text-white mb-2">
            <strong>Question 2:</strong> What happens if a recursive function has no base case?
          </p>
          <div className="text-xs text-[#94a3b8] space-y-1">
            <div>A. Returns undefined</div>
            <div>B. Runs once and stops</div>
            <div className="text-green-400">C. Infinite recursion → stack overflow ✓</div>
            <div>D. Converts to iteration automatically</div>
          </div>
          <p className="text-xs text-[#94a3b8] mt-2">
            <strong>Why:</strong> Without a base case, the function keeps calling itself until the call stack exceeds its limit.
          </p>
        </div>
      </div>

      {/* Cheat Sheet */}
      <Callout type="tip" title="Recursion Cheat Sheet">
        <ul className="space-y-2 text-sm">
          <li>• <strong className="text-white">Every recursive function needs:</strong> base case + recursive case</li>
          <li>• <strong className="text-white">Base case:</strong> stops the recursion (usually simple input like n=0 or empty array)</li>
          <li>• <strong className="text-white">Recursive case:</strong> calls function with smaller/simpler input</li>
          <li>• <strong className="text-white">Call stack:</strong> tracks active function calls, O(n) space for n calls</li>
          <li>• <strong className="text-white">Use recursion for:</strong> trees, divide-and-conquer, backtracking, DP</li>
          <li>• <strong className="text-white">Avoid recursion when:</strong> simple iteration works, performance is critical, deep recursion risks stack overflow</li>
          <li>• <strong className="text-white">Common bugs:</strong> missing base case, base case never reached, redundant computation</li>
        </ul>
      </Callout>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
        <p className="text-sm text-purple-300 font-medium mb-2">🎯 What's Next?</p>
        <p className="text-sm text-[#94a3b8]">
          Now that you understand recursion, you're ready for <strong className="text-white">Trees</strong> (which use recursion for traversal), 
          <strong className="text-white"> Backtracking</strong> (which uses recursion to explore possibilities), and 
          <strong className="text-white"> Dynamic Programming</strong> (which optimizes recursive solutions).
        </p>
      </div>
    </div>
  );
}

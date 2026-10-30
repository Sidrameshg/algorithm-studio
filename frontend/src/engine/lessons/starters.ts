export interface CodeStarter {
  cpp: string;
  java: string;
  python: string;
}

export const STARTERS: Record<string, CodeStarter> = {
  "selection-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a) {\n    // Implement Selection Sort.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a) {\n        // Implement Selection Sort.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Selection Sort.\n    raise NotImplementedError('Write your solution')\n"
  },
  "shell-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a) {\n    // Implement Shell Sort.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a) {\n        // Implement Shell Sort.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Shell Sort.\n    raise NotImplementedError('Write your solution')\n"
  },
  "heap-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Heap Sort.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values) {\n        // Implement Heap Sort.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Heap Sort.\n    raise NotImplementedError('Write your solution')\n"
  },
  "counting-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a) {\n    // Implement Counting Sort.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a) {\n        // Implement Counting Sort.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Counting Sort.\n    raise NotImplementedError('Write your solution')\n"
  },
  "radix-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a) {\n    // Implement Radix Sort.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a) {\n        // Implement Radix Sort.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Radix Sort.\n    raise NotImplementedError('Write your solution')\n"
  },
  "linear-search": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int target) {\n    // Implement Linear Search.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int target) {\n        // Implement Linear Search.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, target):\n    # Implement Linear Search.\n    raise NotImplementedError('Write your solution')\n"
  },
  "prefix-sums": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Prefix Sums.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values) {\n        // Implement Prefix Sums.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Prefix Sums.\n    raise NotImplementedError('Write your solution')\n"
  },
  "sliding-window": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> a,int k) {\n    // Implement Sliding Window Maximum Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] a,int k) {\n        // Implement Sliding Window Maximum Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, k):\n    # Implement Sliding Window Maximum Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "two-pointers": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a,int target) {\n    // Implement Two Pointers: Pair Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a,int target) {\n        // Implement Two Pointers: Pair Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, target):\n    # Implement Two Pointers: Pair Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "kadane": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> a) {\n    // Implement Kadane: Maximum Subarray.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] a) {\n        // Implement Kadane: Maximum Subarray.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Kadane: Maximum Subarray.\n    raise NotImplementedError('Write your solution')\n"
  },
  "dutch-national-flag": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a) {\n    // Implement Dutch National Flag.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a) {\n        // Implement Dutch National Flag.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Dutch National Flag.\n    raise NotImplementedError('Write your solution')\n"
  },
  "majority-vote": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\noptional<int> solve(vector<int> values) {\n    // Implement Boyer–Moore Majority Vote.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static Integer solve(int[] values) {\n        // Implement Boyer–Moore Majority Vote.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Boyer–Moore Majority Vote.\n    raise NotImplementedError('Write your solution')\n"
  },
  "hash-two-sum": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values,int target) {\n    // Implement Hash Map: Two Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values,int target) {\n        // Implement Hash Map: Two Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, target):\n    # Implement Hash Map: Two Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "frequency-map": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(vector<int> values) {\n    // Implement Hash Map: Frequency Counting.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<List<Integer>> solve(int[] values) {\n        // Implement Hash Map: Frequency Counting.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Hash Map: Frequency Counting.\n    raise NotImplementedError('Write your solution')\n"
  },
  "naive-string-search": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(string text,string pattern) {\n    // Implement Naive Pattern Matching.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(String text,String pattern) {\n        // Implement Naive Pattern Matching.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text, pattern):\n    # Implement Naive Pattern Matching.\n    raise NotImplementedError('Write your solution')\n"
  },
  "kmp": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(string text,string pattern) {\n    // Implement KMP Pattern Matching.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(String text,String pattern) {\n        // Implement KMP Pattern Matching.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text, pattern):\n    # Implement KMP Pattern Matching.\n    raise NotImplementedError('Write your solution')\n"
  },
  "rabin-karp": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(string text,string pattern) {\n    // Implement Rabin–Karp Pattern Matching.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(String text,String pattern) {\n        // Implement Rabin–Karp Pattern Matching.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text, pattern):\n    # Implement Rabin–Karp Pattern Matching.\n    raise NotImplementedError('Write your solution')\n"
  },
  "z-algorithm": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(string text) {\n    // Implement Z Algorithm.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(String text) {\n        // Implement Z Algorithm.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text):\n    # Implement Z Algorithm.\n    raise NotImplementedError('Write your solution')\n"
  },
  "longest-unique-substring": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(string text) {\n    // Implement Longest Substring Without Repeats.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(String text) {\n        // Implement Longest Substring Without Repeats.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text):\n    # Implement Longest Substring Without Repeats.\n    raise NotImplementedError('Write your solution')\n"
  },
  "longest-palindrome": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nstring solve(string text) {\n    // Implement Longest Palindromic Substring.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static String solve(String text) {\n        // Implement Longest Palindromic Substring.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text):\n    # Implement Longest Palindromic Substring.\n    raise NotImplementedError('Write your solution')\n"
  },
  "trie": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<string> solve(string text,string prefix) {\n    // Implement Trie: Insert and Prefix Search.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<String> solve(String text,String prefix) {\n        // Implement Trie: Insert and Prefix Search.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text, prefix):\n    # Implement Trie: Insert and Prefix Search.\n    raise NotImplementedError('Write your solution')\n"
  },
  "avl-tree": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement AVL Tree: Balanced Insertion.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement AVL Tree: Balanced Insertion.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement AVL Tree: Balanced Insertion.\n    raise NotImplementedError('Write your solution')\n"
  },
  "red-black-tree": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Red–Black Tree: Balanced Insertion.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement Red–Black Tree: Balanced Insertion.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Red–Black Tree: Balanced Insertion.\n    raise NotImplementedError('Write your solution')\n"
  },
  "tree-inorder": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Binary Tree: inorder Traversal.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement Binary Tree: inorder Traversal.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Binary Tree: inorder Traversal.\n    raise NotImplementedError('Write your solution')\n"
  },
  "tree-preorder": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Binary Tree: preorder Traversal.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement Binary Tree: preorder Traversal.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Binary Tree: preorder Traversal.\n    raise NotImplementedError('Write your solution')\n"
  },
  "tree-postorder": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Binary Tree: postorder Traversal.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement Binary Tree: postorder Traversal.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Binary Tree: postorder Traversal.\n    raise NotImplementedError('Write your solution')\n"
  },
  "tree-level-order": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Binary Tree: level-order Traversal.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement Binary Tree: level-order Traversal.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Binary Tree: level-order Traversal.\n    raise NotImplementedError('Write your solution')\n"
  },
  "min-heap": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Min Heap: Insert and Extract.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int[] values) {\n        // Implement Min Heap: Insert and Extract.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Min Heap: Insert and Extract.\n    raise NotImplementedError('Write your solution')\n"
  },
  "segment-tree": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int left,int right) {\n    // Implement Segment Tree: Range Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int left,int right){\n        // Implement Segment Tree: Range Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, left, right):\n    # Implement Segment Tree: Range Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "fenwick-tree": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int count) {\n    // Implement Fenwick Tree: Prefix Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int count) {\n        // Implement Fenwick Tree: Prefix Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, count):\n    # Implement Fenwick Tree: Prefix Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "linked-list-reversal": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Linked List: Reverse.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values) {\n        // Implement Linked List: Reverse.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Linked List: Reverse.\n    raise NotImplementedError('Write your solution')\n"
  },
  "floyd-cycle": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nbool solve(vector<int> values,int cycleAt) {\n    // Implement Linked List: Floyd Cycle Detection.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static boolean solve(int[] values,int cycleAt) {\n        // Implement Linked List: Floyd Cycle Detection.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, cycleAt):\n    # Implement Linked List: Floyd Cycle Detection.\n    raise NotImplementedError('Write your solution')\n"
  },
  "balanced-parentheses": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nbool solve(string text) {\n    // Implement Stack: Balanced Brackets.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static boolean solve(String text) {\n        // Implement Stack: Balanced Brackets.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text):\n    # Implement Stack: Balanced Brackets.\n    raise NotImplementedError('Write your solution')\n"
  },
  "next-greater-element": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> a) {\n    // Implement Monotonic Stack: Next Greater Element.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] a) {\n        // Implement Monotonic Stack: Next Greater Element.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Monotonic Stack: Next Greater Element.\n    raise NotImplementedError('Write your solution')\n"
  },
  "queue-two-stacks": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values) {\n    // Implement Queue Using Two Stacks.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values) {\n        // Implement Queue Using Two Stacks.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Queue Using Two Stacks.\n    raise NotImplementedError('Write your solution')\n"
  },
  "topological-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(int n,vector<vector<int>> edges,int start=0) {\n    // Implement Topological Sort: Kahn.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<Integer> solve(int n,int[][] edges,int start) {\n        // Implement Topological Sort: Kahn.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, start):\n    # Implement Topological Sort: Kahn.\n    raise NotImplementedError('Write your solution')\n"
  },
  "bellman-ford": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<long long> solve(int n,vector<vector<int>> edges,int start) {\n    // Implement Bellman–Ford.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long[] solve(int n,int[][] edges,int start) {\n        // Implement Bellman–Ford.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, start):\n    # Implement Bellman–Ford.\n    raise NotImplementedError('Write your solution')\n"
  },
  "floyd-warshall": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<long long>> solve(int n,vector<vector<int>> edges) {\n    // Implement Floyd–Warshall.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long[][] solve(int n,int[][] edges) {\n        // Implement Floyd–Warshall.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges):\n    # Implement Floyd–Warshall.\n    raise NotImplementedError('Write your solution')\n"
  },
  "kruskal": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nstruct Result { vector<vector<int>> edges; int weight=0; };\nResult solve(int n,vector<vector<int>> edges,int start=0) {\n    // Implement Kruskal: Minimum Spanning Tree.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static Map<String,Object> solve(int n,int[][] edges,int start) {\n        // Implement Kruskal: Minimum Spanning Tree.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, start):\n    # Implement Kruskal: Minimum Spanning Tree.\n    raise NotImplementedError('Write your solution')\n"
  },
  "prim": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(int n,vector<vector<int>> edges,int start=0) {\n    // Implement Prim: Minimum Spanning Tree.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int n,int[][] edges,int start) {\n        // Implement Prim: Minimum Spanning Tree.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, start):\n    # Implement Prim: Minimum Spanning Tree.\n    raise NotImplementedError('Write your solution')\n"
  },
  "disjoint-set": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(int n,vector<vector<int>> edges) {\n    // Implement Disjoint Set Union.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<List<Integer>> solve(int n,int[][] edges) {\n        // Implement Disjoint Set Union.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges):\n    # Implement Disjoint Set Union.\n    raise NotImplementedError('Write your solution')\n"
  },
  "strongly-connected-components": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(int n,vector<vector<int>> edges,int start=0) {\n    // Implement Kosaraju: Strongly Connected Components.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<List<Integer>> solve(int n,int[][] edges,int start) {\n        // Implement Kosaraju: Strongly Connected Components.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, start):\n    # Implement Kosaraju: Strongly Connected Components.\n    raise NotImplementedError('Write your solution')\n"
  },
  "a-star": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<vector<int>> grid) {\n    // Implement A* Shortest Path on a Grid.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[][] grid) {\n        // Implement A* Shortest Path on a Grid.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(grid):\n    # Implement A* Shortest Path on a Grid.\n    raise NotImplementedError('Write your solution')\n"
  },
  "fibonacci-dp": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long solve(int n) {\n    // Implement Fibonacci: Tabulation.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long solve(int n) {\n        // Implement Fibonacci: Tabulation.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n):\n    # Implement Fibonacci: Tabulation.\n    raise NotImplementedError('Write your solution')\n"
  },
  "climbing-stairs": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long solve(int n) {\n    // Implement Climbing Stairs.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long solve(int n) {\n        // Implement Climbing Stairs.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n):\n    # Implement Climbing Stairs.\n    raise NotImplementedError('Write your solution')\n"
  },
  "knapsack": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> weights, vector<int> values, int capacity) {\n    // Implement 0/1 Knapsack.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] weights, int[] values, int capacity) {\n        // Implement 0/1 Knapsack.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(weights, values, capacity):\n    # Implement 0/1 Knapsack.\n    raise NotImplementedError('Write your solution')\n"
  },
  "coin-change": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values, int amount) {\n    // Implement Coin Change: Minimum Coins.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values, int amount) {\n        // Implement Coin Change: Minimum Coins.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, amount):\n    # Implement Coin Change: Minimum Coins.\n    raise NotImplementedError('Write your solution')\n"
  },
  "lcs": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(string text, string other) {\n    // Implement Longest Common Subsequence.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(String text, String other) {\n        // Implement Longest Common Subsequence.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text, other):\n    # Implement Longest Common Subsequence.\n    raise NotImplementedError('Write your solution')\n"
  },
  "edit-distance": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(string a, string b) {\n    // Implement Edit Distance.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(String a, String b) {\n        // Implement Edit Distance.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text, other):\n    # Implement Edit Distance.\n    raise NotImplementedError('Write your solution')\n"
  },
  "lis": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> a) {\n    // Implement Longest Increasing Subsequence.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] a) {\n        // Implement Longest Increasing Subsequence.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Longest Increasing Subsequence.\n    raise NotImplementedError('Write your solution')\n"
  },
  "subset-sum": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nbool solve(vector<int> values, int target) {\n    // Implement Subset Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static boolean solve(int[] values, int target) {\n        // Implement Subset Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, target):\n    # Implement Subset Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "matrix-chain": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long solve(vector<int> p) {\n    // Implement Matrix Chain Multiplication.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long solve(int[] p) {\n        // Implement Matrix Chain Multiplication.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Matrix Chain Multiplication.\n    raise NotImplementedError('Write your solution')\n"
  },
  "n-queens": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(int n) {\n    // Implement N-Queens.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<List<Integer>> solve(int n) {\n        // Implement N-Queens.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n):\n    # Implement N-Queens.\n    raise NotImplementedError('Write your solution')\n"
  },
  "permutations": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(vector<int> values) {\n    // Implement Permutations by Backtracking.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<List<Integer>> solve(int[] values) {\n        // Implement Permutations by Backtracking.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Permutations by Backtracking.\n    raise NotImplementedError('Write your solution')\n"
  },
  "subsets": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(vector<int> values) {\n    // Implement Subsets: Include or Exclude.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<List<Integer>> solve(int[] values) {\n        // Implement Subsets: Include or Exclude.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Subsets: Include or Exclude.\n    raise NotImplementedError('Write your solution')\n"
  },
  "activity-selection": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(vector<vector<int>> intervals) {\n    // Implement Activity Selection.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<int[]> solve(int[][] intervals) {\n        // Implement Activity Selection.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(intervals):\n    # Implement Activity Selection.\n    raise NotImplementedError('Write your solution')\n"
  },
  "merge-intervals": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> solve(vector<vector<int>> intervals) {\n    // Implement Merge Overlapping Intervals.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static List<int[]> solve(int[][] intervals) {\n        // Implement Merge Overlapping Intervals.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(intervals):\n    # Implement Merge Overlapping Intervals.\n    raise NotImplementedError('Write your solution')\n"
  },
  "fractional-knapsack": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\ndouble solve(vector<vector<double>> items,double capacity) {\n    // Implement Fractional Knapsack.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static double solve(double[][] items,double capacity) {\n        // Implement Fractional Knapsack.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(items, capacity):\n    # Implement Fractional Knapsack.\n    raise NotImplementedError('Write your solution')\n"
  },
  "huffman-coding": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nmap<string,string> solve(string text) {\n    // Implement Huffman Coding.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static Map<String,String> solve(String text) {\n        // Implement Huffman Coding.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text):\n    # Implement Huffman Coding.\n    raise NotImplementedError('Write your solution')\n"
  },
  "euclidean-gcd": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(int a,int b) {\n    // Implement Euclidean GCD.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int a,int b) {\n        // Implement Euclidean GCD.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(a, b):\n    # Implement Euclidean GCD.\n    raise NotImplementedError('Write your solution')\n"
  },
  "sieve": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(int n) {\n    // Implement Sieve of Eratosthenes.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int n) {\n        // Implement Sieve of Eratosthenes.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n):\n    # Implement Sieve of Eratosthenes.\n    raise NotImplementedError('Write your solution')\n"
  },
  "fast-power": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long solve(long long base,long long exponent,long long mod) {\n    // Implement Binary Modular Exponentiation.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long solve(long base,long exponent,long mod) {\n        // Implement Binary Modular Exponentiation.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(base, exponent, mod):\n    # Implement Binary Modular Exponentiation.\n    raise NotImplementedError('Write your solution')\n"
  },
  "bit-count": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(int n) {\n    // Implement Brian Kernighan: Count Set Bits.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int n) {\n        // Implement Brian Kernighan: Count Set Bits.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n):\n    # Implement Brian Kernighan: Count Set Bits.\n    raise NotImplementedError('Write your solution')\n"
  },
  "decision-tree": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nusing M=vector<vector<double>>;\nint solve(M points,double query){\n    // Implement Decision Tree: Gini Splits.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(double[][] points,double query){\n        // Implement Decision Tree: Gini Splits.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(points, query):\n    # Implement Decision Tree: Gini Splits.\n    raise NotImplementedError('Write your solution')\n"
  },
  "gaussian-naive-bayes": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<vector<double>> points,double query) {\n    // Implement Gaussian Naive Bayes.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(double[][] points,double query) {\n        // Implement Gaussian Naive Bayes.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(points, query):\n    # Implement Gaussian Naive Bayes.\n    raise NotImplementedError('Write your solution')\n"
  },
  "logistic-regression": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<vector<double>> points,double query,int epochs) {\n    // Implement Logistic Regression.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(double[][] points,double query,int epochs) {\n        // Implement Logistic Regression.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(points, query, epochs):\n    # Implement Logistic Regression.\n    raise NotImplementedError('Write your solution')\n"
  },
  "scheduling-fcfs": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values,int quantum) {\n    // Implement FCFS Scheduling.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values,int quantum) {\n        // Implement FCFS Scheduling.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, quantum):\n    # Implement FCFS Scheduling.\n    raise NotImplementedError('Write your solution')\n"
  },
  "scheduling-sjf": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values,int quantum) {\n    // Implement Shortest Job First.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values,int quantum) {\n        // Implement Shortest Job First.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, quantum):\n    # Implement Shortest Job First.\n    raise NotImplementedError('Write your solution')\n"
  },
  "scheduling-round-robin": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values,int quantum) {\n    // Implement Round Robin Scheduling.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values,int quantum) {\n        // Implement Round Robin Scheduling.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, quantum):\n    # Implement Round Robin Scheduling.\n    raise NotImplementedError('Write your solution')\n"
  },
  "page-fifo": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int frames) {\n    // Implement FIFO Page Replacement.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int frames) {\n        // Implement FIFO Page Replacement.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, frames):\n    # Implement FIFO Page Replacement.\n    raise NotImplementedError('Write your solution')\n"
  },
  "page-lru": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int frames) {\n    // Implement LRU Page Replacement.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int frames) {\n        // Implement LRU Page Replacement.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, frames):\n    # Implement LRU Page Replacement.\n    raise NotImplementedError('Write your solution')\n"
  },
  "page-optimal": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int frames) {\n    // Implement OPTIMAL Page Replacement.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int frames) {\n        // Implement OPTIMAL Page Replacement.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, frames):\n    # Implement OPTIMAL Page Replacement.\n    raise NotImplementedError('Write your solution')\n"
  },
  "bucket-sort": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<double> solve(vector<double> values) {\n    // Implement Bucket Sort.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static double[] solve(double[] values) {\n        // Implement Bucket Sort.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Bucket Sort.\n    raise NotImplementedError('Write your solution')\n"
  },
  "quickselect": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> a,int k) {\n    // Implement Quickselect: Kth Smallest.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] a,int k) {\n        // Implement Quickselect: Kth Smallest.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, k):\n    # Implement Quickselect: Kth Smallest.\n    raise NotImplementedError('Write your solution')\n"
  },
  "jump-search": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int target) {\n    // Implement Jump Search.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int target) {\n        // Implement Jump Search.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, target):\n    # Implement Jump Search.\n    raise NotImplementedError('Write your solution')\n"
  },
  "exponential-search": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int target) {\n    // Implement Exponential Search.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int target) {\n        // Implement Exponential Search.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, target):\n    # Implement Exponential Search.\n    raise NotImplementedError('Write your solution')\n"
  },
  "linked-list-merge": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> solve(vector<int> values,vector<int> other) {\n    // Implement Linked Lists: Merge Sorted Lists.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int[] values,int[] other) {\n        // Implement Linked Lists: Merge Sorted Lists.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, other):\n    # Implement Linked Lists: Merge Sorted Lists.\n    raise NotImplementedError('Write your solution')\n"
  },
  "postfix-evaluation": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\ndouble solve(string text) {\n    // Implement Stack: Postfix Expression Evaluation.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static double solve(String text) {\n        // Implement Stack: Postfix Expression Evaluation.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(text):\n    # Implement Stack: Postfix Expression Evaluation.\n    raise NotImplementedError('Write your solution')\n"
  },
  "tree-lca": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values,int a,int b) {\n    // Implement Binary Tree: Lowest Common Ancestor.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values,int a,int b) {\n        // Implement Binary Tree: Lowest Common Ancestor.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values, a, b):\n    # Implement Binary Tree: Lowest Common Ancestor.\n    raise NotImplementedError('Write your solution')\n"
  },
  "bipartite-check": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nbool solve(int n,vector<vector<int>> edges) {\n    // Implement Bipartite Graph Check.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static boolean solve(int n,int[][] edges) {\n        // Implement Bipartite Graph Check.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges):\n    # Implement Bipartite Graph Check.\n    raise NotImplementedError('Write your solution')\n"
  },
  "directed-cycle": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nbool solve(int n,vector<vector<int>> edges) {\n    // Implement Directed Cycle Detection.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static boolean solve(int n,int[][] edges) {\n        // Implement Directed Cycle Detection.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges):\n    # Implement Directed Cycle Detection.\n    raise NotImplementedError('Write your solution')\n"
  },
  "edmonds-karp": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(int n,vector<vector<int>> edges,int source,int sink) {\n    // Implement Edmonds–Karp Maximum Flow.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int n,int[][] edges,int source,int sink) {\n        // Implement Edmonds–Karp Maximum Flow.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, source, sink):\n    # Implement Edmonds–Karp Maximum Flow.\n    raise NotImplementedError('Write your solution')\n"
  },
  "dag-shortest-path": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nvector<long long> solve(int n,vector<vector<int>> edges,int start) {\n    // Implement DAG Shortest Paths.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static long[] solve(int n,int[][] edges,int start) {\n        // Implement DAG Shortest Paths.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, start):\n    # Implement DAG Shortest Paths.\n    raise NotImplementedError('Write your solution')\n"
  },
  "rod-cutting": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> prices) {\n    // Implement Rod Cutting.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] prices) {\n        // Implement Rod Cutting.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Rod Cutting.\n    raise NotImplementedError('Write your solution')\n"
  },
  "house-robber": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<int> values) {\n    // Implement Maximum Nonadjacent Sum.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[] values) {\n        // Implement Maximum Nonadjacent Sum.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(values):\n    # Implement Maximum Nonadjacent Sum.\n    raise NotImplementedError('Write your solution')\n"
  },
  "tsp-held-karp": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint solve(vector<vector<int>> costs) {\n    // Implement Traveling Salesperson: Bitmask DP.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int solve(int[][] costs) {\n        // Implement Traveling Salesperson: Bitmask DP.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(costs):\n    # Implement Traveling Salesperson: Bitmask DP.\n    raise NotImplementedError('Write your solution')\n"
  },
  "graph-coloring": {
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\noptional<vector<int>> solve(int n,vector<vector<int>> edges,int colors) {\n    // Implement Graph Coloring by Backtracking.\n    throw runtime_error(\"Write your solution\");\n}\n",
    "java": "import java.util.*;\nclass Algorithm {\n    static int[] solve(int n,int[][] edges,int colors) {\n        // Implement Graph Coloring by Backtracking.\n        throw new UnsupportedOperationException(\"Write your solution\");\n    }\n}\n",
    "python": "def solve(n, edges, colors):\n    # Implement Graph Coloring by Backtracking.\n    raise NotImplementedError('Write your solution')\n"
  }
};

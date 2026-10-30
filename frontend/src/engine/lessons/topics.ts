// 14 Topics across all 100 algorithms
export interface Topic {
  id: string;
  name: string;
  description: string;
}

export const TOPICS: Topic[] = [{id:`arrays`,name:`DSA Arrays`,description:`Sorting, searching, two pointers, windows, and prefix sums.`},{id:`strings`,name:`DSA Strings & Tries`,description:`Pattern matching, prefixes, substrings, and word lookup.`},{id:`hashing`,name:`DSA Hashing`,description:`Fast lookup, counting, and complement matching.`},{id:`linked-lists`,name:`DSA Linked Lists`,description:`Pointer reversal and cycle detection.`},{id:`stacks`,name:`DSA Stacks & Queues`,description:`LIFO, FIFO, brackets, and monotonic stacks.`},{id:`heaps`,name:`DSA Heaps`,description:`Priority queues and heap operations.`},{id:`trees`,name:`DSA Trees`,description:`Traversals, search trees, balancing, and range queries.`},{id:`graphs`,name:`DSA Graphs`,description:`Traversal, paths, spanning trees, and connectivity.`},{id:`dp`,name:`Dynamic Programming`,description:`Reuse subproblem results to optimize choices.`},{id:`greedy`,name:`Greedy Algorithms`,description:`Scheduling, intervals, compression, and fractional choices.`},{id:`backtracking`,name:`Recursion & Backtracking`,description:`Choose, explore, and undo while searching for solutions.`},{id:`math`,name:`Math & Bit Manipulation`,description:`Primes, GCD, exponentiation, and binary operations.`},{id:`ml`,name:`Machine Learning`,description:`Classification, clustering, and regression.`},{id:`systems`,name:`Operating Systems`,description:`CPU scheduling and memory page replacement.`}];

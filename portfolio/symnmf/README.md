# SymNMF — C/Python numerical clustering

[← Portfolio](../../README.md)

**C · Python · NumPy · Native extension · Linux · Valgrind · Docker**

My course project implemented the core operations for **symmetric nonnegative matrix factorization** in C, exposed the native implementation to Python, and compared clustering results against K-Means using silhouette scores. **Course grade: 100/100**, as recorded on my résumé.

## Engineering questions I worked on

1. **Cross-language integration:** passing matrix inputs/outputs between Python and a C extension.
2. **Native memory correctness:** investigating allocation and integration behavior using Valgrind.
3. **Algorithm evaluation:** comparing clustering output, not just checking whether a function returns successfully.

**Source availability:** The original submission was not available for independent source review during portfolio preparation. This is a coursework description, not a fabricated code release. I will add the actual C/Python files, reproducible tests and benchmark commands after checking assignment sharing rules and collaborator attribution.

This page deliberately does not claim verified speedups or quote measured numbers I cannot substantiate.

# What is making these lines sometimes get overwritten/omitted??

**UPDATE**: It seems the output is always correct when directed to a file or when using `xterm` instead of [`terminator`](https://packages.debian.org/stretch/terminator).
For this reason, I suspect this problem is caused by `terminator` and am filing a bug report with the Debian maintainers of this package (I am running stretch).


### Reproduction steps
1. Install `nodejs`
2. Clone/download this repository
3. Run `npm install && npm test` from this folder (repository root)

### Expected Output
```
> mocha-spec-reporter-line-omission-bug-demo@0.0.1-SNAPSHOT test /home/jquant/mocha-spec-reporter-line-omission-bug-demo
> mocha --recursive --reporter=spec test/



  1.test.js (2 + 23 = 25)
    first (2)
      ✓ 1
      ✓ 2
    second (23)
      ✓ 1
      ✓ 2
...(snip)...
```

### Actual Output
```
> mocha-spec-reporter-line-omission-bug-demo@0.0.1-SNAPSHOT test /home/jquant/mocha-spec-reporter-line-omission-bug-demo
> mocha --recursive --reporter=spec test/



  1.test.js (2 + 23 = 25)
      ✓ 2
    second (23)
      ✓ 1
      ✓ 2
...(snip)...
```

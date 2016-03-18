# What is making these lines sometimes get overwritten/omitted??

### Reproduction steps
`npm install && npm test`

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

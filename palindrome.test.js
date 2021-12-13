const palindrome = require('./palindrome');

test('Single Word - Positive', () => {
    expect(palindrome('racecar')).toBe(true)
});

test('Single Word - Negative', () => {
    expect(palindrome('brother')).toBe(false)
});

test('Accented Word - Positive', () => {
    expect(palindrome('öñèméñö')).toBe(true)
});

test('Accented Word - Negative', () => {
    expect(palindrome('Crème Brulée')).toBe(false)
});

test('Word with Numbers - Positive', () => {
    expect(palindrome('c1v1c')).toBe(true)
});

test('Word with Numbers - Negative', () => {
    expect(palindrome('s0lo5')).toBe(false)
});

test('Multiple Numbers - Positive', () => {
    expect(palindrome('1001')).toBe(true)
});

test('Multiple Numbers - Negative', () => {
    expect(palindrome('1234')).toBe(false)
});

test('Multiple Words - Positive', () => {
    expect(palindrome('Murder for a jar of redrum')).toBe(true)
});

test('Multiple Words - Negative', () => {
    expect(palindrome('This should be false')).toBe(false)
});

test('Sentence w/ Special Characters - Positive', () => {
    expect(palindrome('Did Hannah see bees?! Hannah did.')).toBe(true)
});

test('Sentence w/ Special Characters - Negative', () => {
    expect(palindrome('Did Hannah see bees?! Hannah did not.')).toBe(false)
});

test('Sentence with Numbers - Positive', () => {
    expect(palindrome('Step 0n n0 pets')).toBe(true)
});

test('Sentence with Numbers - Positive', () => {
    expect(palindrome('123 Step on no pets 123')).toBe(false)
});

test('Multiple Special Characters - Positive', () => {
    expect(palindrome('!h@a#$n%^n&*a()h')).toBe(true)
});

test('Multiple Special Characters - Negative', () => {
    expect(palindrome('!h@a#$n%^n&*a()')).toBe(false)
});

test('Spaced Word', () => {
    expect(palindrome('k a   y a k  ')).toBe(true)
});

test('Single Number', () => {
    expect(palindrome('1')).toBe(false)
});

test('Empty String', () => {
    expect(palindrome('')).toBe(false)
});

test('Null String', () => {
    expect(palindrome(null)).toBe(false)
});

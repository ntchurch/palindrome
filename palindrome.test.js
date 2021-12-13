const palindrome = require('./palindrome');

test('Standard Text - Positive', () => {
    expect(palindrome('racecar')).toBe(true)
});

test('Standard Text - Negative', () => {
    expect(palindrome('brother')).toBe(false)
});

test('Accent Mark Testing - Positive', () => {
    expect(palindrome('èmé')).toBe(true)
});

test('Accent Mark Testing - Negative', () => {
    expect(palindrome('Crème Brulée')).toBe(false)
});

test('Number Testing - Positive', () => {
    expect(palindrome('1001')).toBe(true)
});

test('Number Testing - Negative', () => {
    expect(palindrome('1234')).toBe(false)
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

test('Sentence', () => {
    expect(palindrome('Murder for a jar of redrum')).toBe(true)
});

test('Sentence w/ Special Characters', () => {
    expect(palindrome('Did Hannah see bees?! Hannah did.')).toBe(true)
});

test('Sentence w/ ALL Special Characters - Positive', () => {
    expect(palindrome('!h@a#$n%^n&*a()h')).toBe(true)
});

test('Sentence w/ ALL Special Characters - Negative', () => {
    expect(palindrome('!h@a#$n%^n&*a()')).toBe(false)
});
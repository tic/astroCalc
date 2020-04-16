
export default function TwoValueSum(a_str, b_str, c_str, month) {
    let [a, b, c] = [parseInt(a_str), parseInt(b_str), parseInt(c_str)];
    return [a + b, a - b, b - a, c * a];
}

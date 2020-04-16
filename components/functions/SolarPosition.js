export default function SolarPosition(n_str) {
    n = parseFloat(n_str);
    n -= 2451545;
    L = (280.46 + .9856474 * n) % 360;
    if(L < 0) L += 360;
    g = (357.528 + 985003 * n) % 360;
    if(g < 0) g += 360;

    g *= Math.PI/180; // Convert g to radians

    lambda = L + 1.915 * Math.sin(g) + .02 * Math.sin(2*g);

    return [lambda];
}

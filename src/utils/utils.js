export function hashToColorString(str) {
    const hash = str.split('').reduce((p, n) => (11 * p + n.charCodeAt(0) * 13) % 360, 0);
    const { r, g, b } = hsv2rgb(hash / 360, 1, 1);
    const { rStr, gStr, bStr } = {
        rStr: r.toString(16).padStart(2, '0'),
        gStr: g.toString(16).padStart(2, '0'),
        bStr: b.toString(16).padStart(2, '0'),
    };
    // console.log(r, g, b);
    return `#${rStr}${gStr}${bStr}`;
}

// Ref: https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
/* accepts parameters
 * h, s, v in [0, 1]
 * return { r, g, b } in [0, 255]
*/
function hsv2rgb(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

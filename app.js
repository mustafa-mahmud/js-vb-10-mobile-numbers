'use strict';
const _0x255d = [
  'add',
  '373QbGWjI',
  '28780HncPqX',
  'input',
  'length',
  '8945jGNEQl',
  'keydown',
  '1EIQuVT',
  'forEach',
  'focus',
  '2978AoDRSf',
  'classList',
  '19ITaWNW',
  '92573PCUnDc',
  'value',
  '826689VRinWJ',
  '51230IpQoTm',
  '25obPrRN',
  '1678478XDKizb',
  '9RhaaOa',
  'Backspace',
  'pass',
  'querySelectorAll',
  'key',
  '1HRAhAM',
];
function _0x3deb(_0x30dda3, _0x4fbefe) {
  _0x30dda3 = _0x30dda3 - 0x9f;
  let _0x255db1 = _0x255d[_0x30dda3];
  return _0x255db1;
}
const _0x5d7f37 = _0x3deb;
(function (_0x2712f8, _0x4c2cf8) {
  const _0x4a365c = _0x3deb;
  while (!![]) {
    try {
      const _0x34b7cb =
        parseInt(_0x4a365c(0xa6)) * -parseInt(_0x4a365c(0xac)) +
        parseInt(_0x4a365c(0xb3)) * -parseInt(_0x4a365c(0xa3)) +
        -parseInt(_0x4a365c(0xa9)) +
        parseInt(_0x4a365c(0xa8)) * parseInt(_0x4a365c(0xb1)) +
        parseInt(_0x4a365c(0xb7)) * -parseInt(_0x4a365c(0xaa)) +
        -parseInt(_0x4a365c(0xa5)) * -parseInt(_0x4a365c(0xb4)) +
        -parseInt(_0x4a365c(0xa0)) * -parseInt(_0x4a365c(0xab));
      if (_0x34b7cb === _0x4c2cf8) break;
      else _0x2712f8['push'](_0x2712f8['shift']());
    } catch (_0x5eb650) {
      _0x2712f8['push'](_0x2712f8['shift']());
    }
  }
})(_0x255d, 0xcb69d);
const inputsEl = document[_0x5d7f37(0xaf)](_0x5d7f37(0xb5));
inputsEl[_0x5d7f37(0xa1)]((_0x2d1249, _0x2560f4) => {
  const _0x20b4d8 = _0x5d7f37;
  _0x2d1249['addEventListener'](_0x20b4d8(0x9f), (_0x116e8d) => {
    const _0x2f8ee1 = _0x20b4d8;
    _0x2d1249['value'] >= 0x0 &&
      _0x2d1249[_0x2f8ee1(0xa7)] <= 0x9 &&
      (_0x116e8d[_0x2f8ee1(0xb0)] === _0x2f8ee1(0xad)
        ? setTimeout(() => {
            const _0x5b17ce = _0x2f8ee1;
            inputsEl[_0x2560f4 - 0x1][_0x5b17ce(0xa2)](),
              inputsEl[_0x2560f4][_0x5b17ce(0xa4)]['remove']('pass');
          }, 0xa)
        : (inputsEl[_0x2560f4]['classList'][_0x2f8ee1(0xb2)](_0x2f8ee1(0xae)),
          _0x2560f4 === inputsEl[_0x2f8ee1(0xb6)] - 0x1
            ? setTimeout(() => inputsEl[_0x2560f4]['blur'](), 0xa)
            : setTimeout(
                () => inputsEl[_0x2560f4 + 0x1][_0x2f8ee1(0xa2)](),
                0xa
              )));
  });
});

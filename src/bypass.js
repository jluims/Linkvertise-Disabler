var strings = [
	'log',
	'1388481auXsHi',
	'You are not allowed to bypass this link',
	'includes',
	'95884',
	'&o=sharing',
	'2lTpgKl',
	'bind',
	'innerHTML',
	'href',
	'indexOf',
	'dynamic/?r=',
	'replace',
	'results',
	'2An unexpected error has occured.',
	'{}.constructor("return this")( )',
	'destination',
	'substring',
	'168841',
	'then',
	'input_link',
	'value',
	'table',
	'1283754Muvher',
	'699281SFZvIK',
	'prototype',
	'getElementById',
	'528853fwIThI',
	'console',
	'2658PFWEEM',
	'%3D',
	'dynamic',
	'exception',
	'Bypassing...',
	'trace',
	'https://bypass.bot.nu/bypass2?url=',
	'9EZFFpY',
	'1078351cRioEf',
	'submit_btn',
	'toString',
	'44633wOnEcr',
	'Bypass Ad-Link',
	'return (function() ',
	'144Ledqvw',
	'dynamic?r=',
	'split',
	'length'
];

(function (strings, _0x893751) {
	while (true) {
		try {
			var _0x1e66fc = 725392;
			if (_0x1e66fc === _0x893751) break;
			else strings.push(strings.shift());
		} catch (_0x5c0d71) {
			strings.push(strings.shift());
		}
	}
})(strings, 725392);

function getStr(offset) {
	offset = offset - 0x7e;
	return strings[offset];
}
var _0x1d2177 = (function () {
		var _0x56240f = !![];
		return function (_0xcb4d8, _0x44b271) {
			var _0x3f3cb2 = _0x56240f
				? function () {
						if (_0x44b271) {
							var _0x4a0798 = _0x44b271['apply'](
								_0xcb4d8,
								arguments
							);
							return (_0x44b271 = null), _0x4a0798;
						}
				  }
				: function () {};
			return (_0x56240f = ![]), _0x3f3cb2;
		};
	})(),
	_0x351b73 = _0x1d2177(this, function () {
		var _0x2e4407 = [
			'log',
			'warn',
			'info',
			'error',
			'exception',
			'table',
			'trace'
		];
		for (
			var _0x154208 = 0x0;
			_0x154208 < _0x2e4407[getStr(0xac)];
			_0x154208++
		) {
			var _0x5e1083 =
					_0x1d2177['constructor'][getStr(0x97)]['bind'](_0x1d2177),
				_0x2db4bd = _0x2e4407[_0x154208],
				_0x3093da = console[_0x2db4bd] || _0x5e1083;
			(_0x5e1083['__proto__'] = _0x1d2177[getStr(0x85)](_0x1d2177)),
				(_0x5e1083['toString'] =
					_0x3093da['toString'][getStr(0x85)](_0x3093da)),
				(console[_0x2db4bd] = _0x5e1083);
		}
	});
_0x351b73();

function start() {
	var _0x2963f6 = getStr;
	url = document[_0x2963f6(0x98)]('input_link')['value'];
	if (url[_0x2963f6(0x81)](_0x2963f6(0x82))) {
		(document[_0x2963f6(0x98)](_0x2963f6(0x8b))[_0x2963f6(0x87)] = ''),
			(document[_0x2963f6(0x98)](_0x2963f6(0x8b))[_0x2963f6(0x86)] =
				_0x2963f6(0x80)),
			alert(_0x2963f6(0x80));
		return;
	}
	if (url[_0x2963f6(0x81)](_0x2963f6(0x90))) {
		(document[_0x2963f6(0x98)]('results')['href'] = ''),
			(document[_0x2963f6(0x98)](_0x2963f6(0x8b))[_0x2963f6(0x86)] =
				_0x2963f6(0x80)),
			alert('You are not allowed to bypass this link');
		return;
	}
	(document[_0x2963f6(0x98)](_0x2963f6(0xa4))['innerHTML'] = _0x2963f6(0x9f)),
		(document[_0x2963f6(0x98)](_0x2963f6(0x8b))[_0x2963f6(0x86)] = ''),
		bypass(url);
}

/**
 *
 * @param {string} str
 */
async function bypass(str) {
	if (str.includes('dynamic')) {
		if (str.includes('&o=sharing')) {
			var endStr = str.replace('%3D', '');
			var val = endStr.split('dynamic?r=').pop().split('&o=sharing')[0];

			return atob(val);
		} else {
			let offset = str.includes('dynamic/?r=') ? 11 : 10;
			let data = str.substring(str.indexOf('dynamic/?r=') + offset);

			return atob(data);
		}
	} else {
		const res = await fetch('https://bypass.bot.nu/bypass2?url=' + str);
		const json = await res.json();

		if (json.success) {
			return json.destination;
		} else {
			throw new Error('Failed to bypass');
		}
	}
}
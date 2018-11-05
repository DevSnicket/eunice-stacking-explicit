const
	concatenateFromFileSystem = require(".."),
	path = require("path");

const
	expected =
		[
			"item",
			[ "upper item" ],
			[ "lower item" ],
		],
	files =
		[ "item", "stack" ]
		.map(file => path.join(__dirname, "cases", `${file}.yaml`));

test(
	`${JSON.stringify(files)} files returns ${JSON.stringify(expected)}`,
	() =>
		expect(concatenateFromFileSystem(files))
		.toEqual(expected),
);
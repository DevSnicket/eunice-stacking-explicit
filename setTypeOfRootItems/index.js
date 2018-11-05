const
	callWithYamlInputAndOutputWhenProcessEntryPoint = require("../callWithYamlInputAndOutputWhenProcessEntryPoint"),
	processorPlugins = require("../../Harnesses/processorPlugins");

callWithYamlInputAndOutputWhenProcessEntryPoint(
	setTypeOfRootItems,
);

processorPlugins.plugIn({
	action: setTypeOfRootItems,
	parameter: { name: "type" },
	text: "set type of root items",
});

module.exports = setTypeOfRootItems;

function setTypeOfRootItems({
	items,
	type,
}) {
	return (
		Array.isArray(items)
		?
		items.map(createItem)
		:
		items && createItem(items)
	);

	function createItem(
		item,
	) {
		return (
			typeof item === "string"
			?
			{
				id: item,
				type,
			}
			:
			{
				...item.id && { id: item.id },
				type,
				...item,
			}
		);
	}
}
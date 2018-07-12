export enum NodePropType {
	text,
	dropdown,
	combobox,
	toggle
}

export interface INodeProperty {
	name: string;
	type: NodePropType;
	value: any;
	invalidValue: boolean;
	current: boolean;
	relevant: boolean;
	supportsExpression: boolean;
	expression?: string;
}
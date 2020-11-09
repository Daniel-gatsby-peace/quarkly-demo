import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Button, Box } from "@quarkly/widgets";
import { FaTree } from "react-icons/fa";
const defaultProps = {
	"width": "100%",
	"background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover",
	"hover-background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 100% 0%/cover",
	"transition": "background 0.3s ease 0s",
	"border-radius": "8px",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"justify-content": "center",
	"box-sizing": "border-box",
	"padding": "48px 36px 72px 36px",
	"opacity": "1",
	"sm-padding": "36px 36px 48px 36px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTree,
			"font": "44px sans-serif",
			"color": "--light",
			"sm-font": "36px sans-serif"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"text-transform": "uppercase",
			"color": "--light",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"children": "Into the wild"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--lightD2",
			"text-align": "center",
			"children": "A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"background": "--color-secondary",
			"color": "--darkL2",
			"padding": "12px 34px 12px 34px",
			"border-radius": "24px",
			"text-transform": "uppercase",
			"letter-spacing": "1.2px",
			"margin": "24px 0px 0px 0px",
			"opacity": "1",
			"box-shadow": "0 12px 3px -4px rgba(3, 18, 7, 0.3)",
			"children": "Join"
		}
	}
};

const TreeCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Button {...override("button")} />
		{children}
	</Box>;
};

Object.assign(TreeCard, { ...Box,
	defaultProps,
	overrides
});
export default TreeCard;
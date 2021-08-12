import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react"
import {action} from "@storybook/addon-actions";
import HW12 from "./HW12";
import {Provider} from "react-redux";
import store from "../h10/bll/store";


export default {
    title: 'Homeworks/HW12',
    component: HW12,
    args: {
    }
} as ComponentMeta<typeof HW12>;


// @ts-ignore
const Template: ComponentStory<typeof HW12> = (args) => <Provider store={store}> <HW12 {...args}/> </Provider> ;

export const HW12Example= Template.bind({});
HW12Example.args = {
}



import React from "react";
import Button from ".";

export default {
    title: "通用/Button",
    components: Button,
};

 const Template = (agrs) => {
     console.log(agrs,'agrs')
    return <Button {...agrs} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "按钮",
};
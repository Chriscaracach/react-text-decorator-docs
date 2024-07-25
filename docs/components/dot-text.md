---
sidebar_position: 2
---

# Dot Text

## How to use this component

```javascript
import { DotText } from "@christian-caracach/react-text-decorator";

function MyComponent() {
  return (
    <DotText
      text="This is a decorated text with dots."
      color="error"
      position="right"
    />
  );
}
```

## Props

| Prop            | Type   | Description                    | Values                                            | Required |
| --------------- | ------ | ------------------------------ | ------------------------------------------------- | -------- |
| text            | string | The text to be decorated       |                                                   | YES      |
| color           | string | The color of the stripes       | ["default","info", "error", "success", "warning"] | NO       |
| size            | string | The size of the text component | ["sm", "md", "lg" ]                               | NO       |
| position        | string | The decorator position         | ["left", "right" ]                                | NO       |
| customClassName | string | Custom classname to add styles |                                                   | NO       |

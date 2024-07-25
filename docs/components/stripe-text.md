---
sidebar_position: 1
---

# Stripe Text

## How to use this component

```javascript
import { StripeText } from "@christian-caracach/react-text-decorator";

function MyComponent() {
  return (
    <StripeText
      text="This is a decorated text with stripes."
      color="primary"
      size="lg"
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
| customClassName | string | Custom classname to add styles |                                                   | NO       |

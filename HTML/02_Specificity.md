# Html -> CSS Specificity
Specificity is a rule that decides which CSS style gets priority when multiple CSS rules try to style the same thing.
> Inline > Id > Class > Element


Priority (highest to lowest), for normal CSS declarations:

1. Inline CSS — `style="color: red;"`
2. Internal CSS — inside `<style>` in HTML
3. External CSS — in a separate `.css` file

Important: Internal vs. external CSS doesn't inherently determine priority. If specificity and other cascade factors are equal, the rule that comes later wins.

`!important` can change this order.

<br>

CSS specificity values:

| Selector type               | Specificity value |
| --------------------------- | ----------------- |
| Inline CSS                  | `1, 0, 0, 0`      |
| ID (`#id`)                  | `0, 1, 0, 0`      |
| Class (`.class`)            | `0, 0, 1, 0`      |
| Attribute (`[type="text"]`) | `0, 0, 1, 0`      |
| Pseudo-class (`:hover`)     | `0, 0, 1, 0`      |
| Element (`p`, `div`)        | `0, 0, 0, 1`      |
| Universal (`*`)             | `0, 0, 0, 0`      |

Example:

```
#header .title p
```

Specificity = `(0, 1, 1, 1)` — one ID, one class, one element.

Compare values from left to right. The first differing value determines the winner.

Remember: `!important` is not a specificity value; it affects cascade priority separately.

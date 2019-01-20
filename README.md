# ActionSheet

[![npm package][npm-badge]][npm]

Used for making a choice between a set of options on a mobile device.	

## Getting started

````
npm install @cmds/action-sheet --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| onClose | Function | ✓ | Triggers after a user clicks an option or cancels the action sheet. |
| options | Array | ✓ | An array of `Option`. Options the user can choose from. |

#### Option

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| title | String | ✓ | Title describing the option. |
| onClick | Function | ✓ | Triggers when the user click the option. |
| variant | OneOf | | Can either be `undefined` or `danger` (makes the option red) |
| strong | Boolean | | Whether to make the option appear strong (bold). |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/action-sheet.svg
[npm]: https://www.npmjs.org/package/@cmds/action-sheet

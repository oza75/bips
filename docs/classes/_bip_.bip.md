[js-bip-tour](../README.md) › [Globals](../globals.md) › ["Bip"](../modules/_bip_.md) › [Bip](_bip_.bip.md)

# Class: Bip

## Hierarchy

* **Bip**

## Index

### Constructors

* [constructor](_bip_.bip.md#constructor)

### Properties

* [_callbacks](_bip_.bip.md#private-_callbacks)
* [_element](_bip_.bip.md#private-_element)
* [_info](_bip_.bip.md#private-_info)
* [_options](_bip_.bip.md#private-_options)
* [_pagination](_bip_.bip.md#private-_pagination)

### Accessors

* [color](_bip_.bip.md#color)
* [description](_bip_.bip.md#description)
* [element](_bip_.bip.md#element)
* [left](_bip_.bip.md#left)
* [position](_bip_.bip.md#position)
* [title](_bip_.bip.md#title)
* [top](_bip_.bip.md#top)

### Methods

* [buildHtml](_bip_.bip.md#buildhtml)
* [buildInfo](_bip_.bip.md#private-buildinfo)
* [buildPulse](_bip_.bip.md#private-buildpulse)
* [close](_bip_.bip.md#close)
* [exec](_bip_.bip.md#exec)
* [hide](_bip_.bip.md#hide)
* [hideInfo](_bip_.bip.md#hideinfo)
* [on](_bip_.bip.md#on)
* [render](_bip_.bip.md#render)
* [show](_bip_.bip.md#show)

## Constructors

###  constructor

\+ **new Bip**(`options`: [TourItemOptions](../interfaces/_bip_.touritemoptions.md)): *[Bip](_bip_.bip.md)*

*Defined in [Bip.ts:26](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [TourItemOptions](../interfaces/_bip_.touritemoptions.md) |

**Returns:** *[Bip](_bip_.bip.md)*

## Properties

### `Private` _callbacks

• **_callbacks**: *[CallBacks](../interfaces/_bip_.callbacks.md)*

*Defined in [Bip.ts:26](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L26)*

___

### `Private` _element

• **_element**: *HTMLDivElement*

*Defined in [Bip.ts:23](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L23)*

___

### `Private` _info

• **_info**: *HTMLElement*

*Defined in [Bip.ts:24](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L24)*

___

### `Private` _options

• **_options**: *[TourItemOptions](../interfaces/_bip_.touritemoptions.md)*

*Defined in [Bip.ts:22](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L22)*

___

### `Private` _pagination

• **_pagination**: *HTMLElement*

*Defined in [Bip.ts:25](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L25)*

## Accessors

###  color

• **get color**(): *string | undefined*

*Defined in [Bip.ts:110](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L110)*

**Returns:** *string | undefined*

___

###  description

• **get description**(): *string*

*Defined in [Bip.ts:102](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L102)*

**Returns:** *string*

___

###  element

• **get element**(): *HTMLDivElement*

*Defined in [Bip.ts:72](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L72)*

**Returns:** *HTMLDivElement*

___

###  left

• **get left**(): *number*

*Defined in [Bip.ts:91](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L91)*

**Returns:** *number*

___

###  position

• **get position**(): *string | undefined*

*Defined in [Bip.ts:76](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L76)*

**Returns:** *string | undefined*

___

###  title

• **get title**(): *string*

*Defined in [Bip.ts:106](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L106)*

**Returns:** *string*

___

###  top

• **get top**(): *number*

*Defined in [Bip.ts:80](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L80)*

**Returns:** *number*

## Methods

###  buildHtml

▸ **buildHtml**(): *HTMLDivElement*

*Defined in [Bip.ts:114](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L114)*

**Returns:** *HTMLDivElement*

___

### `Private` buildInfo

▸ **buildInfo**(): *HTMLDivElement*

*Defined in [Bip.ts:161](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L161)*

**Returns:** *HTMLDivElement*

___

### `Private` buildPulse

▸ **buildPulse**(): *HTMLDivElement*

*Defined in [Bip.ts:141](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L141)*

**Returns:** *HTMLDivElement*

___

###  close

▸ **close**(`e`: MouseEvent): *void*

*Defined in [Bip.ts:183](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

###  exec

▸ **exec**(`type`: string): *void*

*Defined in [Bip.ts:50](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *void*

___

###  hide

▸ **hide**(): *void*

*Defined in [Bip.ts:63](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L63)*

**Returns:** *void*

___

###  hideInfo

▸ **hideInfo**(): *void*

*Defined in [Bip.ts:68](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L68)*

**Returns:** *void*

___

###  on

▸ **on**(`type`: string, `func`: [CallBack](../interfaces/_bip_.callback.md)): *this*

*Defined in [Bip.ts:43](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`func` | [CallBack](../interfaces/_bip_.callback.md) |

**Returns:** *this*

___

###  render

▸ **render**(): *this*

*Defined in [Bip.ts:55](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L55)*

**Returns:** *this*

___

###  show

▸ **show**(`pagination?`: HTMLElement): *void*

*Defined in [Bip.ts:33](https://github.com/oza75/bips/blob/1cae179/src/Bip.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`pagination?` | HTMLElement |

**Returns:** *void*

[js-bip-tour](../README.md) › [Globals](../globals.md) › ["Tour"](../modules/_tour_.md) › [Tour](_tour_.tour.md)

# Class: Tour

## Hierarchy

* **Tour**

## Index

### Constructors

* [constructor](_tour_.tour.md#constructor)

### Properties

* [_current](_tour_.tour.md#private-_current)
* [_events](_tour_.tour.md#private-_events)
* [items](_tour_.tour.md#private-items)

### Accessors

* [body](_tour_.tour.md#private-body)
* [current](_tour_.tour.md#current)

### Methods

* [add](_tour_.tour.md#add)
* [buildPagination](_tour_.tour.md#private-buildpagination)
* [exec](_tour_.tour.md#private-exec)
* [finish](_tour_.tour.md#private-finish)
* [html](_tour_.tour.md#private-html)
* [next](_tour_.tour.md#private-next)
* [on](_tour_.tour.md#on)
* [play](_tour_.tour.md#play)
* [prev](_tour_.tour.md#private-prev)

### Object literals

* [_options](_tour_.tour.md#private-_options)

## Constructors

###  constructor

\+ **new Tour**(`options?`: [TourOptions](../interfaces/_tour_.touroptions.md)): *[Tour](_tour_.tour.md)*

*Defined in [Tour.ts:24](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [TourOptions](../interfaces/_tour_.touroptions.md) |

**Returns:** *[Tour](_tour_.tour.md)*

## Properties

### `Private` _current

• **_current**: *number* = 0

*Defined in [Tour.ts:23](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L23)*

___

### `Private` _events

• **_events**: *object*

*Defined in [Tour.ts:24](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L24)*

#### Type declaration:

* \[ **key**: *string*\]: [TourEvent](../interfaces/_tour_.tourevent.md)[]

___

### `Private` items

• **items**: *[Bip](_bip_.bip.md)[]* = []

*Defined in [Tour.ts:21](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L21)*

## Accessors

### `Private` body

• **get body**(): *HTMLElement*

*Defined in [Tour.ts:32](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L32)*

**Returns:** *HTMLElement*

___

###  current

• **get current**(): *[Bip](_bip_.bip.md)*

*Defined in [Tour.ts:86](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L86)*

 Get current Bip

**Returns:** *[Bip](_bip_.bip.md)*

## Methods

###  add

▸ **add**(`item`: [Bip](_bip_.bip.md) | [TourItemOptions](../interfaces/_bip_.touritemoptions.md)): *[Tour](_tour_.tour.md)*

*Defined in [Tour.ts:69](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L69)*

 Add a new Bip

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [Bip](_bip_.bip.md) &#124; [TourItemOptions](../interfaces/_bip_.touritemoptions.md) |   |

**Returns:** *[Tour](_tour_.tour.md)*

___

### `Private` buildPagination

▸ **buildPagination**(): *HTMLElement*

*Defined in [Tour.ts:98](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L98)*

**Returns:** *HTMLElement*

___

### `Private` exec

▸ **exec**(`event`: [TourEvents](../enums/_tour_.tourevents.md)): *void*

*Defined in [Tour.ts:59](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L59)*

Executes the event stack corresponding to an action

**Parameters:**

Name | Type |
------ | ------ |
`event` | [TourEvents](../enums/_tour_.tourevents.md) |

**Returns:** *void*

___

### `Private` finish

▸ **finish**(): *void*

*Defined in [Tour.ts:150](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L150)*

**Returns:** *void*

___

### `Private` html

▸ **html**(): *HTMLUListElement*

*Defined in [Tour.ts:126](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L126)*

**Returns:** *HTMLUListElement*

___

### `Private` next

▸ **next**(`e`: MouseEvent): *void*

*Defined in [Tour.ts:132](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

###  on

▸ **on**(`event`: [TourEvents](../enums/_tour_.tourevents.md) | number, `func`: [TourEvent](../interfaces/_tour_.tourevent.md)): *this*

*Defined in [Tour.ts:45](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L45)*

Add an event to execute later when a specific action is executed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [TourEvents](../enums/_tour_.tourevents.md) &#124; number | - |
`func` | [TourEvent](../interfaces/_tour_.tourevent.md) |   |

**Returns:** *this*

___

###  play

▸ **play**(): *void*

*Defined in [Tour.ts:93](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L93)*

Show current Bip

**Returns:** *void*

___

### `Private` prev

▸ **prev**(`e`: MouseEvent): *void*

*Defined in [Tour.ts:141](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

## Object literals

### `Private` _options

### ▪ **_options**: *object*

*Defined in [Tour.ts:22](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L22)*

###  nextText

• **nextText**: *string* = "Next"

*Defined in [Tour.ts:22](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L22)*

###  prevText

• **prevText**: *string* = "Previous"

*Defined in [Tour.ts:22](https://github.com/oza75/bips/blob/1cae179/src/Tour.ts#L22)*

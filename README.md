# Overte TypeScript Example Project

This is an example TypeScript project designed for use with [Overte](https://overte.org/), showcasing how to write Overte scripts using TypeScript.

> **⚠️ Important Note:** There is a current issue with the `index.d.ts` file. All type parameters are incorrectly marked as required. This can cause TypeScript to throw errors when working with Overte APIs.

---

## 🚨 Known Issue: Type Parameters in `index.d.ts`

The `index.d.ts` file currently forces all generic type parameters to be explicitly specified, This causes errors in otherwise valid code.

### ❗ Problem Example

```ts
// TypeScript will complain about missing type parameters
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var properties = { 
    type: "Box",
    name: "ScriptBox",
    position: position,
    color: { red: 255, green: 0, blue: 0 }
};
var entityID = Entities.addEntity(properties); // Type properties will require all 94 types 
print("Entity added");
```

### ❗ solution Example
```ts
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var properties: any = { // Using any on any type declaration with override the type
    type: "Box",
    name: "ScriptBox",
    position: position,
    color: { red: 255, green: 0, blue: 0 }
};
var entityID = Entities.addEntity(properties); // Now no errors on required parameters 
print("Entity added");
```

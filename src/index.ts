

var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var properties: any = {
    type: "Box",
    name: "ScriptBox",
    position: position,
    color: { red: 255, green: 0, blue: 0 }
};
var entityID = Entities.addEntity(properties);
print("Entity added");
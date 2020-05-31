export function setScaleByVector3(object: any, vector:THREE.Vector3) {
    object.scale.set(vector.x, vector.y, vector.z);
}

export function checkGroup(object: any) {
    object.traverse(function (child) {
        console.log(`${(child as THREE.Mesh).type}   ${(child as THREE.Mesh).name}`);
    });
}
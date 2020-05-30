export enum CarryItemsFBX {
    ARROW = 'Arrow01',
    AXE = 'Axe03',
    CLAW = 'Claw01',
    DAGGER = 'Dagger01',
    LONGBOW = 'Longbow01',
    QUIVER = 'Quiver01',
    SACK = 'Sack01',
    SHIELDSMALL = 'Shield03',
    SHIELDLARGE = 'Shield09',
    SWORD= 'Sword04',
};

export const carryItemsMaterial = new Map<CarryItemsFBX, ICarryItemsMaterial>([
    [CarryItemsFBX.ARROW, { texture: "Crossbow01Black" }],
    [CarryItemsFBX.AXE, { texture: "Axe03Red" }],
    [CarryItemsFBX.CLAW, { texture: "Claw01GreyWhite" }],
    [CarryItemsFBX.DAGGER, { texture: "Dagger01Red" }],
    [CarryItemsFBX.LONGBOW, { texture: "Longbow01Green" }],
    [CarryItemsFBX.QUIVER, { texture: "Quiver01BlueArrowGreen" }],
    [CarryItemsFBX.SACK, { color: 0x32261d }],
    [CarryItemsFBX.SHIELDSMALL, { texture: "Shield03Green" }],
    [CarryItemsFBX.SHIELDLARGE, { texture: "Shield09Black" }],
    [CarryItemsFBX.SWORD, { texture: "Sword04Black" }],
]);

export interface ICarryItemsMaterial {
    texture?: string,
    color?: number
}
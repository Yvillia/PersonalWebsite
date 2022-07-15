export var bodyForeground = "#74b2a4";
export var bodyAccent = "#330e62";
export var textLightForeground = "#f5f5f5";
export var textLightShadow = "#444444";
export var hrLight = "#337f83";
export var hoverShadow = "#1a8a98";
export var bodySecondary = "#999094"

export function toDark(check) {
    if (check) {
        bodyForeground = "#ffffff";
        bodyAccent = "#ffffff";
        textLightForeground = "#ffffff";
        textLightShadow = "#ffffff";
        hrLight = "#ffffff";
        hoverShadow = "#ffffff";
        bodySecondary = "#ffffff";
    } else {
        bodyForeground = "#74b2a4";
        bodyAccent = "#330e62";
        textLightForeground = "#f5f5f5";
        textLightShadow = "#444444";
        hrLight = "#337f83";
        hoverShadow = "#1a8a98";
        bodySecondary = "#999094"
    }
}
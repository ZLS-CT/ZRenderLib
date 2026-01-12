import * as ZRenderLib from "./index"
import { isLegacy, modulesFolder } from "ZCore"

const renderWorldTriggerName = (isLegacy) ? "renderWorld" : "postRenderWorld"
register(renderWorldTriggerName, (partialTicks) => {
    // const x = Player.getX()
    // const y = Player.getY()
    // const z = Player.getZ()
    const x = 0.5
    const y = 1
    const z = 0.5

    // 10809, 12105, 12108, 12110
    const stringColor = 0xFFFF00FF
    const stringColorRGBA = [255, 255, 0, 255]
    const stringX = x
    const stringY = y
    const stringZ = z
    ZRenderLib.drawWorldStringRGBA("String 1", stringX, stringY + (1 * 0), stringZ, ...stringColorRGBA, 1, false, true, true, true, 512)
    ZRenderLib.drawWorldString("String 2", stringX, stringY + (1 * 1), stringZ, stringColor, 1, true, true, true, true, 512)
    ZRenderLib.drawWorldString("String 3", stringX, stringY + (1 * 2), stringZ, stringColor, 1, true, true, true, false, 512)
    ZRenderLib.drawWorldString("String 4", stringX, stringY + (1 * 3), stringZ, stringColor, 1, true, true, false, true, 512)
    ZRenderLib.drawWorldString("String 5", stringX, stringY + (1 * 4), stringZ, stringColor, 1, true, false, true, true, 512)
    ZRenderLib.drawWorldString("String 6", stringX, stringY + (1 * 5), stringZ, stringColor, 1, false, true, true, true, 512)
    ZRenderLib.drawWorldString("String 7", stringX, stringY + (1 * 6), stringZ, stringColor, 1, true, true, false, false, 512)
    ZRenderLib.drawWorldString("String 8", stringX, stringY + (1 * 7), stringZ, stringColor, 1, true, false, true, false, 512)
    ZRenderLib.drawWorldString("String 9", stringX, stringY + (1 * 8), stringZ, stringColor, 1, false, true, true, false, 512)
    ZRenderLib.drawWorldString("String 10", stringX, stringY + (1 * 9), stringZ, stringColor, 1, true, false, false, true, 512)
    ZRenderLib.drawWorldString("String 11", stringX, stringY + (1 * 10), stringZ, stringColor, 1, false, true, false, true, 512)
    ZRenderLib.drawWorldString("String 12", stringX, stringY + (1 * 11), stringZ, stringColor, 1, false, false, true, true, 512)
    ZRenderLib.drawWorldString("String 13", stringX, stringY + (1 * 12), stringZ, stringColor, 1, true, false, false, false, 512)
    ZRenderLib.drawWorldString("String 14", stringX, stringY + (1 * 13), stringZ, stringColor, 1, false, true, false, false, 512)
    ZRenderLib.drawWorldString("String 15", stringX, stringY + (1 * 14), stringZ, stringColor, 1, false, false, true, false, 512)
    ZRenderLib.drawWorldString("String 16", stringX, stringY + (1 * 15), stringZ, stringColor, 1, false, false, false, true, 512)
    ZRenderLib.drawWorldString("String 17", stringX, stringY + (1 * 16), stringZ, stringColor, 1, false, false, false, false, 512)

    // 10809, 12105, 12108, 12110
    const lineColor = 0xFFFF00FF
    const lineColorRGBA = [255, 255, 0, 255]
    ZRenderLib.drawWorldLineRGBA(x, y, z - 1, x + 5, y + 5, z, ...lineColorRGBA, true, 1)
    ZRenderLib.drawWorldLine(x, y, z + 1, x + 5, y + 5, z, lineColor, true, 1)
    ZRenderLib.drawWorldLine(x, y, z + 2, x + 5, y + 5, z, lineColor, false, 1)

    // 10809, 12105, 12108, 12110
    const cubeColor = 0x0000FFFF
    const cubeColorRGBA = [0, 0, 255, 255]
    const cubeX = x
    const cubeY = y
    const cubeZ = z - 5
    ZRenderLib.drawSimpleWireframeCubeRGBA(cubeX, cubeY + (1.5 * 0), cubeZ, 1, ...cubeColorRGBA, true, 1)
    ZRenderLib.drawSimpleWireframeCube(cubeX, cubeY + (1.5 * 1), cubeZ, 1, cubeColor, true, 1)
    ZRenderLib.drawWireframeBoxRGBA(cubeX, cubeY + (1.5 * 2), cubeZ, 1, 1, 1, ...cubeColorRGBA, true, 1)
    ZRenderLib.drawWireframeBox(cubeX, cubeY + (1.5 * 3), cubeZ, 1, 1, 1, cubeColor, true, 1)
    ZRenderLib.drawSimpleSolidCubeRGBA(cubeX, cubeY + (1.5 * 4), cubeZ, 1, ...cubeColorRGBA, true)
    ZRenderLib.drawSimpleSolidCube(cubeX, cubeY + (1.5 * 5), cubeZ, 1, cubeColor, true)
    ZRenderLib.drawSolidBoxRGBA(cubeX, cubeY + (1.5 * 6), cubeZ, 1, 1, 1, ...cubeColorRGBA, true)
    ZRenderLib.drawSolidBox(cubeX, cubeY + (1.5 * 7), cubeZ, 1, 1, 1, cubeColor, true)
    ZRenderLib.drawSolidBox(cubeX, cubeY + (1.5 * 8), cubeZ, 1, 1, 1, cubeColor, false)

    // 10809, 12105, 12108, 12110
    const sphereColor = 0x00FF00FF
    const sphereColorRGBA = [0, 255, 0, 255]
    const sphereX = x
    const sphereY = 1
    const sphereZ = z + 5
    ZRenderLib.drawSimpleWireframeSphereRGBA(sphereX, sphereY + (1.5 * 0), sphereZ, 1, ...sphereColorRGBA, 32, true, 1)
    ZRenderLib.drawSimpleWireframeSphere(sphereX, sphereY + (1.5 * 1), sphereZ, 1, sphereColor, 32, true, 1)
    ZRenderLib.drawWireframeSphereRGBA(sphereX, sphereY + (1.5 * 2), sphereZ, 1, 1, 1, ...sphereColorRGBA, 32, true, 1)
    ZRenderLib.drawSimpleSolidSphereRGBA(sphereX, sphereY + (1.5 * 3), sphereZ, 1, ...sphereColorRGBA, 32, true)
    ZRenderLib.drawSimpleSolidSphere(sphereX, sphereY + (1.5 * 4), sphereZ, 1, sphereColor, 32, true)
    ZRenderLib.drawSolidSphereRGBA(sphereX, sphereY + (1.5 * 5), sphereZ, 1, 1, 1, ...sphereColorRGBA, 32, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 6), sphereZ, 1, 1, 1, sphereColor, 32, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 7), sphereZ, 1, 1, 1, sphereColor, 32, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 8), sphereZ, 2, 1, 1, sphereColor, 32, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 9), sphereZ, 1, 2, 1, sphereColor, 32, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 10), sphereZ, 1, 1, 2, sphereColor, 32, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 11), sphereZ, 1, 1, 1, sphereColor, 16, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 12), sphereZ, 1, 1, 1, sphereColor, 4, true)
    ZRenderLib.drawSolidSphere(sphereX, sphereY + (1.5 * 13), sphereZ, 1, 1, 1, sphereColor, 32, false)

    // 10809, 12105, 12108, 12110
    const coneColor = 0xFFFF00FF
    const coneColorRGBA = [255, 255, 0, 255]
    const coneX = x + 5
    const coneY = y
    const coneZ = z
    ZRenderLib.drawSolidConeRGBA(coneX, coneY + (1.5 * 0), coneZ, 1, 1, ...coneColorRGBA, 64, true)
    ZRenderLib.drawSolidCone(coneX, coneY + (1.5 * 1), coneZ, 1, 1, coneColor, 64, true)
    ZRenderLib.drawWireframeConeRGBA(coneX, coneY + (1.5 * 2), coneZ, 1, 1, ...coneColorRGBA, 64, true, 1)
    ZRenderLib.drawWireframeCone(coneX, coneY + (1.5 * 3), coneZ, 1, 1, coneColor, 64, true, 1)
    ZRenderLib.drawWireframeCone(coneX, coneY + (1.5 * 4), coneZ, 1, 1, coneColor, 32, true, 1)
    ZRenderLib.drawWireframeCone(coneX, coneY + (1.5 * 5), coneZ, 1, 1, coneColor, 16, true, 1)
    ZRenderLib.drawWireframeCone(coneX, coneY + (1.5 * 6), coneZ, 1, 2, coneColor, 64, true, 1)
    ZRenderLib.drawWireframeCone(coneX, coneY + (1.5 * 7), coneZ, 2, 2, coneColor, 64, true, 1)
    ZRenderLib.drawWireframeCone(coneX, coneY + (1.5 * 8), coneZ, 1, 1, coneColor, 64, false, 1)

    // 10809, 12105, 12108, 12110
    const cylinderColor = 0xFF00FFFF
    const cylinderColorRGBA = [255, 0, 255, 255]
    const cylinderX = x - 5
    const cylinderY = y
    const cylinderZ = z
    ZRenderLib.drawSimpleSolidCylinderRGBA(cylinderX, cylinderY + (1.5 * 0), cylinderZ, 1, 1, ...cylinderColorRGBA, 64, true)
    ZRenderLib.drawSimpleSolidCylinder(cylinderX, cylinderY + (1.5 * 1), cylinderZ, 1, 1, cylinderColor, 64, true)
    ZRenderLib.drawSolidCylinderRGBA(cylinderX, cylinderY + (1.5 * 2), cylinderZ, 1, 1, 1, ...cylinderColorRGBA, 64, true)
    ZRenderLib.drawSolidCylinder(cylinderX, cylinderY + (1.5 * 3), cylinderZ, 1, 1, 1, cylinderColor, 64, true)
    ZRenderLib.drawSimpleWireframeCylinderRGBA(cylinderX, cylinderY + (1.5 * 4), cylinderZ, 1, 1, ...cylinderColorRGBA, 64, true, 1)
    ZRenderLib.drawSimpleWireframeCylinder(cylinderX, cylinderY + (1.5 * 5), cylinderZ, 1, 1, cylinderColor, 64, true, 1)
    ZRenderLib.drawWireframeCylinderRGBA(cylinderX, cylinderY + (1.5 * 6), cylinderZ, 1, 1, 1, ...cylinderColorRGBA, 64, true, 1)
    ZRenderLib.drawWireframeCylinder(cylinderX, cylinderY + (1.5 * 7), cylinderZ, 1, 1, 1, cylinderColor, 64, true, 1)

    // 10809, 12105, 12108, 12110
    const pyramidColor = 0x0000FFFF //0x00FFFFFF
    const pyramidColorRGBA = [0, 0, 255, 255] //[0, 255, 255, 255]
    const pyramidX = x + 5
    const pyramidY = y
    const pyramidZ = z + 5
    ZRenderLib.drawSimpleSolidPyramidRGBA(pyramidX, pyramidY + (1.5 * 0), pyramidZ, 1, ...pyramidColorRGBA, true)
    ZRenderLib.drawSimpleSolidPyramid(pyramidX, pyramidY + (1.5 * 1), pyramidZ, 1, pyramidColor, true)
    ZRenderLib.drawSolidPyramidRGBA(pyramidX, pyramidY + (1.5 * 2), pyramidZ, 1, 1, 1, ...pyramidColorRGBA, true)
    ZRenderLib.drawSolidPyramid(pyramidX, pyramidY + (1.5 * 3), pyramidZ, 1, 1, 1, pyramidColor, true)
    ZRenderLib.drawSimpleWireframePyramidRGBA(pyramidX, pyramidY + (1.5 * 4), pyramidZ, 1, ...pyramidColorRGBA, true, 1)
    ZRenderLib.drawSimpleWireframePyramid(pyramidX, pyramidY + (1.5 * 5), pyramidZ, 1, pyramidColor, true, 1)
    ZRenderLib.drawWireframePyramidRGBA(pyramidX, pyramidY + (1.5 * 6), pyramidZ, 1, 1, 1, ...pyramidColorRGBA, true, 1)
    ZRenderLib.drawWireframePyramid(pyramidX, pyramidY + (1.5 * 7), pyramidZ, 1, 1, 1, pyramidColor, true, 1)
    ZRenderLib.drawWireframePyramid(pyramidX, pyramidY + (1.5 * 8), pyramidZ, 2, 1, 1, pyramidColor, true, 1)
    ZRenderLib.drawWireframePyramid(pyramidX, pyramidY + (1.5 * 9), pyramidZ, 1, 2, 1, pyramidColor, true, 1)
    ZRenderLib.drawWireframePyramid(pyramidX, pyramidY + (1.5 * 10), pyramidZ, 1, 1, 2, pyramidColor, true, 1)
    ZRenderLib.drawWireframePyramid(pyramidX, pyramidY + (1.5 * 11), pyramidZ, 1, 1, 1, pyramidColor, false, 1)

    // 10809, 12105, 12108, 12110
    const tracerColor = 0xFF0000FF
    const tracerColorRGBA = [255, 0, 0, 255]
    const tracerX = x + 5
    const tracerY = y + 5
    const tracerZ = z + 2
    ZRenderLib.drawTracerRGBA(partialTicks, tracerX, tracerY, tracerZ, ...tracerColorRGBA, true, 1)
    ZRenderLib.drawTracer(partialTicks, tracerX, tracerY, tracerZ - 4, tracerColor, true, 1)

    // 10809, 12105, 12108, 12110
    const entityColorRGBA = [0, 0, 255, 255]
    World.getAllEntities().forEach(entity => {
        ZRenderLib.drawEntityNametagRGBA(partialTicks, entity, 1, ...entityColorRGBA)
        ZRenderLib.drawEntityTracerRGBA(partialTicks, entity, 1, ...entityColorRGBA)
        ZRenderLib.drawEntityBoxRGBA(partialTicks, entity, 1, ...entityColorRGBA)
    })
})

function getCombinations(array) {
    const results = []
    for (let i = 1; i <= array.length; i++) {
        combine(array, i, 0, [], results)
    }
    return results
}
function combine(array, length, start, current, results) {
    if (current.length === length) {
        results.push([...current])
        return
    }
    for (let i = start; i < array.length; i++) {
        current.push(array[i])
        combine(array, length, i + 1, current, results)
        current.pop()
    }
}

const ctImage = ZRenderLib.loadImageFromFile(`${modulesFolder}/ZRenderLib/assets/ct.png`)
const logoImage = ZRenderLib.loadImageFromFile(`${modulesFolder}/ZRenderLib/assets/logo.png`)
const logoImage2 = ZRenderLib.loadCTImage(Image.fromFile(`${modulesFolder}/ZRenderLib/assets/logo.png`))
const renderHudTriggerName = (isLegacy) ? "RenderOverlay" : "RenderHudOverlay"
register(renderHudTriggerName, (drawContext, event) => {
    [drawContext, event, partialTicks] = ZRenderLib.FixGUIRenderValues(drawContext, event)
    // ChatLib.chat(`Draw Context: ${drawContext}, Event: ${event}, Partial Ticks: ${partialTicks}`)

    // 10809, 12105, 12108, 12110
    const stringColor = 0xFFFF00FF
    const stringColorRGBA = [255, 255, 0, 255]
    const stringX = 5
    const stringY = 5
    const stringHeight = 12
    ZRenderLib.drawGUIStringWithShadowRGBA(drawContext, "String 1", stringX, stringY + (0 * stringHeight), ...stringColorRGBA, 1, false, 512, 0)
    ZRenderLib.drawGUIStringWithShadow(drawContext, "String 2", stringX, stringY + (1 * stringHeight), stringColor, 1, false, 512, 0)
    ZRenderLib.drawGUIStringRGBA(drawContext, "String 3", stringX, stringY + (2 * stringHeight), ...stringColorRGBA, 1, false, false, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 4", stringX, stringY + (3 * stringHeight), stringColor, 1, false, false, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 5", stringX, stringY + (4 * stringHeight), stringColor, 1, false, true, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 6", stringX, stringY + (5 * stringHeight), stringColor, 1, true, false, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 7", stringX, stringY + (6 * stringHeight), stringColor, 1, true, true, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 8", stringX, stringY + (7 * stringHeight), stringColor, 2, true, false, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 9", stringX, stringY + (8.5 * stringHeight), stringColor, 3, true, true, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 10", stringX, stringY + (11 * stringHeight), stringColor, 4, true, false, 512, 0)
    ZRenderLib.drawGUIString(drawContext, "String 11", stringX, stringY + (14 * stringHeight), stringColor, 5, true, true, 512, 0)

    const text = new TextComponent({
        text: "Colored Text",
        color: "#FF00FF",
    }).withText("Wow")
    ZRenderLib.drawGUIText(drawContext, text, stringX, stringY + (18 * stringHeight), ZRenderLib.BLUE, 1, true, true, 512, 0)
    const ZRenderUtils = ZRenderLib.GetRenderUtils()
    const fontRenderer = ZRenderUtils.getTextRenderer()
    drawContext.drawText(fontRenderer, text, stringX, stringY + (19 * stringHeight), -1, true)

    // 10809, 12105, 12108, 12110
    const lineColor = 0x00FFFFFF
    const lineColorRGBA = [0, 255, 0, 255]
    const lineX = 50
    const lineY = 5
    const lineSize = 25
    ZRenderLib.drawGUILineRGBA(drawContext, lineX, lineY, lineX + lineSize, lineY + lineSize, ...lineColorRGBA, 1, 0)
    ZRenderLib.drawGUILine(drawContext, lineX, lineY + lineSize, lineX + lineSize, lineY + lineSize + lineSize, lineColor, 1, 0)

    // 10809, 12105, 12108, 12110
    const squareColor = 0xFF0000FF
    const squareColorRGBA = [255, 0, 0, 255]
    const squareX = 85
    const squareY = 5
    const squareSizeX = 25
    const squareSizeY = 10
    ZRenderLib.drawSquareRGBA(drawContext, squareX, squareY, squareSizeX, ...squareColorRGBA, 0)
    ZRenderLib.drawSquare(drawContext, squareX, squareY + 30, squareSizeX, squareColor, 0)
    ZRenderLib.drawRectRGBA(drawContext, squareX, squareY + 60, squareSizeX, squareSizeY, ...squareColorRGBA, 0)
    ZRenderLib.drawRect(drawContext, squareX, squareY + 75, squareSizeX, squareSizeY, squareColor, 0)

    // 10809, 12105, 12108, 12110
    const roundedRectColor = 0x00FF00FF
    const roundedRectColorRGBA = [0, 255, 0, 255]
    const roundedRectX = 125
    const roundedRectY = 5
    const roundedRectSizeX = 25
    const roundedRectSizeY = 10
    const roundedRectPadding = 5
    const roundedRectSpacing = roundedRectPadding + roundedRectSizeY
    const combinations = getCombinations([
        ZRenderLib.FlattenRoundedRectCorner.TOP_LEFT,
        ZRenderLib.FlattenRoundedRectCorner.TOP_RIGHT,
        ZRenderLib.FlattenRoundedRectCorner.BOTTOM_LEFT,
        ZRenderLib.FlattenRoundedRectCorner.BOTTOM_RIGHT,
    ])
    ZRenderLib.drawRoundedRectRGBA(drawContext, roundedRectX, roundedRectY + (0 * roundedRectSpacing), roundedRectSizeX, roundedRectSizeY, 4, ...roundedRectColorRGBA, [], 16, 0)
    ZRenderLib.drawRoundedRect(drawContext, roundedRectX, roundedRectY + (1 * roundedRectSpacing), roundedRectSizeX, roundedRectSizeY, 4, roundedRectColor, [], 16, 0)
    combinations.forEach((combination, index) => {
        ZRenderLib.drawRoundedRectRGBA(drawContext, roundedRectX, roundedRectY + ((index + 2) * roundedRectSpacing), roundedRectSizeX, roundedRectSizeY, 4, ...roundedRectColorRGBA, combination, 16, 0)
    })

    // 10809, 12105, 12108, 12110
    const gradientColor1 = 0xFFFFFFFF
    const gradientColor2 = 0x000000FF
    const gradientColor1RGBA = [255, 255, 255, 255]
    const gradientColor2RGBA = [0, 0, 255, 255]
    const gradientX = 175
    const gradientY = 5
    const gradientSizeX = 50
    const gradientSizeY = 50
    const gradientPadding = 5
    const gradientSpacing = gradientPadding + gradientSizeY
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (0 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.TOP_TO_BOTTOM)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (1 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.BOTTOM_TO_TOP)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (2 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.LEFT_TO_RIGHT)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (3 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.RIGHT_TO_LEFT)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (4 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.TOP_LEFT_TO_BOTTOM_RIGHT)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (5 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.TOP_RIGHT_TO_BOTTOM_LEFT)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (6 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.BOTTOM_LEFT_TO_TOP_RIGHT)
    ZRenderLib.drawSimpleGradient(drawContext, gradientX, gradientY + (7 * gradientSpacing), gradientSizeX, gradientSizeY, gradientColor1, gradientColor2, ZRenderLib.GradientDirection.BOTTOM_RIGHT_TO_TOP_LEFT)

    // 10809, 12105, 12108, 12110
    const circleColor = 0x0000FFFF
    const circleColorRGBA = [0, 0, 255, 255]
    const circleX = 275
    const circleY = 25 + 5
    const circleRadiusX = 25
    const circleRadiusY = 15
    const circlePadding = 5
    const circleSpacing = circlePadding + (circleRadiusX * 2)
    ZRenderLib.drawSimpleCircleRGBA(drawContext, circleX, circleY + (0 * circleSpacing), circleRadiusX, ...circleColorRGBA, 64, 0)
    ZRenderLib.drawSimpleCircle(drawContext, circleX, circleY + (1 * circleSpacing), circleRadiusX, circleColor, 24, 0)
    ZRenderLib.drawCircleRGBA(drawContext, circleX, circleY + (2 * circleSpacing), circleRadiusX, circleRadiusY, ...circleColorRGBA, 32, 0, 0, 0, 0)
    ZRenderLib.drawCircle(drawContext, circleX, circleY + (3 * circleSpacing), circleRadiusX, circleRadiusY, circleColor, 32, 0, 0, 0, 0)
    ZRenderLib.drawCircle(drawContext, circleX, circleY + (4 * circleSpacing), circleRadiusX, circleRadiusX, circleColor, 4, 45, 0, 0, 0)
    ZRenderLib.drawCircle(drawContext, circleX, circleY + (5 * circleSpacing), circleRadiusX, circleRadiusX, circleColor, 3, 60, 0, 0, 0)
    ZRenderLib.drawCircle(drawContext, circleX, circleY + (6 * circleSpacing), circleRadiusX, circleRadiusX, circleColor, 6, 45, 0, 0, 0)

    // 10809, 12105, 12108, 12110
    const imageX = 350
    ZRenderLib.drawImage(drawContext, ctImage, imageX, 5 + 0, 200, 200, 0xFFFFFFFF, 0)
    ZRenderLib.drawImage(drawContext, logoImage, imageX, 5 + 200 + 5, 64, 64, 0xFFFFFFFF, 0)
    ZRenderLib.drawImage(drawContext, logoImage, imageX, 5 + 200 + 5 + 64 + 5, 64, 64, 0xFF0000FF, 0)
    ZRenderLib.drawImage(drawContext, logoImage2, imageX, 5 + 200 + 5 + 64 + 5 + 64 + 5, 64, 64, 0x00FF00FF, 0)
})

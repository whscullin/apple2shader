export namespace screenEmu {
    export class Point {
        constructor(x: number, y: number);
        x: number;
        y: number;
    }

    export class Size {
        constructor(width: number, height: number);
        width: number;
        height: number;
    }

    export class Rect {
        get_x(): number;
        get_y(): number;
        get_width(): number;
        get_height(): number;
    }

    type VideoDecoder = 'CANVAS_RGB' | 'CANVAS_MONOCHROME' | 'CANVAS_YUV' | 'CANVAS_YIQ' | 'CANVAS_CXA2025AS';
    type ShadowMask = 'SHADOWMASK_TRIAD' | 'SHADOWMASK_INLINE' | 'SHADOWMASK_APERTURE' | 'SHADOWMASK_LCD' | 'SHADOWMASK_BAYER';

    export class DisplayConfiguration {
        constructor();
        videoDecoder: VideoDecoder;
        videoBrightness: number;
        videoContrast: number;
        videoSaturation: number;
        videoHue: number;
        videoCenter: Point;
        videoSize: Size;
        videoBandwidth: number;
        videoLumaBandwidth: number;
        videoChromaBandwidth: number;
        videoWhiteOnly: boolean;

        displayResolution: Size;
        displayPixelDensity: number;
        displayBarrel: number;
        displayScanlineLevel: number;
        displayShadowMaskLevel: number;
        displayShadowMaskDotPitch: number;
        displayShadowMask: ShadowMask;
        displayPersistence: number;
        displayCenterLighting: number;
        displayLuminanceGain: number;
    }

    export class ScreenView {
        constructor(canvas: HTMLCanvasElement);
        displayConfiguration: DisplayConfiguration;
        image: ImageInfo;

        initOpenGL: () => void;
        vsync: () => void;
    }

    export class ImageInfo {
        constructor(data: unknown);
    }

    export interface Timing {
        fsc: unknown;
        clockFrequency: number,
        displayRect: Rect,
        visibleRect: Rect,
        vertStart: number,
        vertTotal: number,
        frameCycleNum: number,
        horizStart: number,
        imageSize: Size,
        imageLeft: number,
        colorBurst: number,
        cycleNum: number,
        topLeft: Point,
        topLeft80Col: Point,
    }

    export namespace C {
        export const NTSC_DETAILS: Timing;
    }
}

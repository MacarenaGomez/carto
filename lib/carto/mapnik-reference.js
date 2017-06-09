var _mapnik_reference_latest = {
    "version": "3.0.6",
    "style": {
        "filter-mode": {
            "type": [
                "all",
                "first"
            ],
            "doc": "Control the processing behavior of Rule filters within a Style. If 'all' is used then all Rules are processed sequentially independent of whether any previous filters matched. If 'first' is used then it means processing ends after the first match (a positive filter evaluation) and no further Rules in the Style are processed ('first' is usually the default for CSS implementations on top of Mapnik to simplify translation from CSS to Mapnik XML).",
            "default-value": "all",
            "default-meaning": "All Rules in a Style are processed whether they have filters or not and whether or not the filter conditions evaluate to true."
        },
        "image-filters": {
            "css": "image-filters",
            "default-value": "none",
            "default-meaning": "no filters",
            "type": "functions",
            "functions": [
                ["agg-stack-blur", 2],
                ["emboss", 0],
                ["blur", 0],
                ["gray", 0],
                ["sobel", 0],
                ["edge-detect", 0],
                ["x-gradient", 0],
                ["y-gradient", 0],
                ["invert", 0],
                ["sharpen", 0],
                ["color-blind-protanope", 0],
                ["color-blind-deuteranope", 0],
                ["color-blind-tritanope", 0],
                ["colorize-alpha", -1],
                ["color-to-alpha", 1],
                ["scale-hsla", 8]
            ],
            "doc": "A list of image filters that will be applied to the active rendering canvas for a given style. The presence of one more `image-filters` will trigger a new canvas to be created before starting to render a style and then this canvas will be composited back into the main canvas after rendering all features and after all `image-filters` have been applied. See `direct-image-filters` if you want to apply a filter directly to the main canvas."
        },
        "image-filters-inflate": {
            "css":"image-filters-inflate",
            "default-value": false,
            "type":"boolean",
            "default-meaning": "No special handling will be done and image filters that blur data will only blur up to the edge of a tile boundary",
            "doc": "A property that can be set to true to enable using an inflated image internally for seamless blurring across tiles (requires buffered data)."
        },
        "direct-image-filters": {
            "css": "direct-image-filters",
            "default-value": "none",
            "default-meaning": "no filters",
            "type": "functions",
            "functions": [
                ["agg-stack-blur", 2],
                ["emboss", 0],
                ["blur", 0],
                ["gray", 0],
                ["sobel", 0],
                ["edge-detect", 0],
                ["x-gradient", 0],
                ["y-gradient", 0],
                ["invert", 0],
                ["sharpen", 0],
                ["color-blind-protanope", 0],
                ["color-blind-deuteranope", 0],
                ["color-blind-tritanope", 0],
                ["colorize-alpha", -1],
                ["color-to-alpha", 1],
                ["scale-hsla", 8]
            ],
            "doc": "A list of image filters to apply to the main canvas (see the `image-filters` doc for how they work on a separate canvas)."
        },
        "comp-op": {
            "css": "comp-op",
            "default-value": "src-over",
            "default-meaning": "add the current layer on top of other layers",
            "doc": "Composite operation. This defines how this layer should behave relative to layers atop or below it.",
            "type": [
                "clear",
                "src",
                "dst",
                "src-over",
                "dst-over",
                "src-in",
                "dst-in",
                "src-out",
                "dst-out",
                "src-atop",
                "dst-atop",
                "xor",
                "plus",
                "minus",
                "multiply",
                "divide",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "linear-dodge",
                "linear-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "contrast",
                "invert",
                "invert-rgb",
                "grain-merge",
                "grain-extract",
                "hue",
                "saturation",
                "color",
                "value"
            ]
        },
        "opacity": {
            "css": "opacity",
            "type": "float",
            "doc": "An alpha value for the style (which means an alpha applied to all features in separate buffer and then composited back to main buffer).",
            "default-value": 1.0,
            "default-meaning": "No separate buffer will be used and no alpha will be applied to the style after rendering."
        }
    },
    "layer" : {
        "name": {
            "default-value": "",
            "type":"string",
            "required" : true,
            "default-meaning": "No layer name has been provided",
            "doc": "The name of a layer. Can be anything you wish and is not strictly validated, but ideally unique  in the map."
        },
        "srs": {
            "default-value": "",
            "type":"string",
            "default-meaning": "No srs value is provided and the value will be inherited from the Map's srs",
            "doc": "The spatial reference system definition for the layer, aka the projection. Can either be a proj4 literal string like '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs' or, if the proper proj4 epsg/nad/etc identifier files are installed, a string that uses an id like: '+init=epsg:4326'."
        },
        "status": {
            "default-value": true,
            "type":"boolean",
            "default-meaning": "This layer will be marked as active and available for processing",
            "doc": "A property that can be set to false to disable this layer from being processed."
        },
        "minzoom": {
            "default-value": 0,
            "type":"float",
            "default-meaning": "The layer will be visible at the minimum possible scale",
            "doc": "The minimum scale denominator that this layer will be visible at. A layer's visibility is determined by whether its status is true and if the Map scale >= minzoom - 1e-6 and scale < maxzoom + 1e-6."
        },
        "maxzoom": {
            "default-value": "1.79769e+308",
            "type":"float",
            "default-meaning": "The layer will be visible at the maximum possible scale",
            "doc": "The maximum scale denominator that this layer will be visible at. The default is the numeric limit of the C++ double type, which may vary slightly by system, but is likely a massive number like 1.79769e+308 and ensures that this layer will always be visible unless the value is reduced. A layer's visibility is determined by whether its status is true and if the Map scale >= minzoom - 1e-6 and scale < maxzoom + 1e-6."
        },
        "queryable": {
            "default-value": false,
            "type":"boolean",
            "default-meaning": "The layer will not be available for the direct querying of data values",
            "doc": "This property was added for GetFeatureInfo/WMS compatibility and is rarely used. It is off by default meaning that in a WMS context the layer will not be able to be queried unless the property is explicitly set to true."
        },
        "clear-label-cache": {
            "default-value": false,
            "type":"boolean",
            "default-meaning": "The renderer's collision detector cache (used for avoiding duplicate labels and overlapping markers) will not be cleared immediately before processing this layer",
            "doc": "This property, by default off, can be enabled to allow a user to clear the collision detector cache before a given layer is processed. This may be desirable to ensure that a given layers data shows up on the map even if it normally would not because of collisions with previously rendered labels or markers."
        },
        "group-by": {
            "default-value": "",
            "type":"string",
            "default-meaning": "No special layer grouping will be used during rendering",
            "doc": "https://github.com/mapnik/mapnik/wiki/Grouped-rendering"
        },
        "buffer-size": {
            "default-value": 0,
            "type":"float",
            "default-meaning": "No custom buffer will be used for the layer and rather the Map buffer-size will be used",
            "doc": "Extra tolerance around the Layer extent (in pixels) used when querying the layer data during rendering. If set this will override the Map buffer-size."
        },
        "maximum-extent": {
            "default-value": "none",
            "type":"bbox",
            "default-meaning": "No clipping extent will be used",
            "doc": "An extent to be used to limit the bounds used to query this specific layer data during rendering. Should be minx, miny, maxx, maxy in the coordinates of the Layer."
        },
        "cache-features": {
            "type":"boolean",
            "default-value": "off",
            "default-meaning": "Features are not cached between rendering multiple styles. The datasource is queried for each style.",
            "doc": "Setting this to `on` triggers Mapnik to attempt to cache features in memory for rendering when (and only when) a layer has multiple styles attached to it."
        }
    },
    "symbolizers" : {
        "*": {
            "image-filters": {
                "css": "image-filters",
                "default-value": "none",
                "default-meaning": "no filters.",
                "type": "functions",
                "functions": [
                    ["agg-stack-blur", 2],
                    ["emboss", 0],
                    ["blur", 0],
                    ["gray", 0],
                    ["sobel", 0],
                    ["edge-detect", 0],
                    ["x-gradient", 0],
                    ["y-gradient", 0],
                    ["invert", 0],
                    ["sharpen", 0],
                    ["color-blind-protanope", 0],
                    ["color-blind-deuteranope", 0],
                    ["color-blind-tritanope", 0],
                    ["colorize-alpha", -1],
                    ["color-to-alpha", 1],
                    ["scale-hsla", 8],
                    ["buckets", -1],
                    ["category", -1],
                    ["equal", -1],
                    ["headtails", -1],
                    ["jenks", -1],
                    ["quantiles", -1],
                    ["cartocolor", -1],
                    ["colorbrewer", -1],
                    ["range", -1],
                    ["ramp", -1],
                    ["avg", -1],
                    ["sum", -1]
                ],
                "doc": "A list of image filters that will be applied to the active rendering canvas for a given style. The presence of one more `image-filters` will trigger a new canvas to be created before starting to render a style and then this canvas will be composited back into the main canvas after rendering all features and after all `image-filters` have been applied. See `direct-image-filters` if you want to apply a filter directly to the main canvas."
            },
            "image-filters-inflate": {
                "css":"image-filters-inflate",
                "default-value": false,
                "type":"boolean",
                "default-meaning": "No special handling will be done and image filters that blur data will only blur up to the edge of a tile boundary.",
                "doc": "A property that can be set to true to enable using an inflated image internally for seamless blurring across tiles (requires buffered data)."
            },
            "direct-image-filters": {
                "css": "direct-image-filters",
                "default-value": "none",
                "default-meaning": "no filters.",
                "type": "functions",
                "functions": [
                    ["agg-stack-blur", 2],
                    ["emboss", 0],
                    ["blur", 0],
                    ["gray", 0],
                    ["sobel", 0],
                    ["edge-detect", 0],
                    ["x-gradient", 0],
                    ["y-gradient", 0],
                    ["invert", 0],
                    ["sharpen", 0],
                    ["color-blind-protanope", 0],
                    ["color-blind-deuteranope", 0],
                    ["color-blind-tritanope", 0],
                    ["colorize-alpha", -1],
                    ["color-to-alpha", 1],
                    ["scale-hsla", 8]
                ],
                "doc": "A list of image filters to apply to the main canvas (see the `image-filters` doc for how they work on a separate canvas)."
            },
            "comp-op": {
                "css": "comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current layer on top of other layers.",
                "doc": "Composite operation. This defines how this layer should behave relative to layers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ]
            },
            "opacity": {
                "css": "opacity",
                "type": "float",
                "doc": "An alpha value for the style (which means an alpha applied to all features in separate buffer and then composited back to main buffer).",
                "default-value": 1.0,
                "default-meaning": "No separate buffer will be used and no alpha will be applied to the style after rendering."
            }
        },
        "map": {
            "background-color": {
                "css": "background-color",
                "default-value": "none",
                "default-meaning": "Will be rendered transparent.",
                "type": "color",
                "doc": "Map Background color."
            },
            "background-image": {
                "css": "background-image",
                "type": "uri",
                "default-value": "",
                "default-meaning": "No background image will be used.",
                "doc": "An image that is repeated below all features on a map as a background. Accepted formats: svg, jpg, png, tiff, and webp."
            },
            "background-image-comp-op": {
                "css": "background-image-comp-op",
                "doc": "Set the compositing operation used to blend the image into the background.",
                "default-value": "src-over",
                "default-meaning": "The background-image will be blended with the background normally (placed on top of any existing background-color).",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ]
            },
            "background-image-opacity": {
                "css": "background-image-opacity",
                "type": "float",
                "doc": "Set the opacity of the image.",
                "default-value": 1.0,
                "default-meaning": "The image opacity will not be changed when applied to the map background."
            },
            "srs": {
                "css": "srs",
                "type": "string",
                "default-value": "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs",
                "default-meaning": "The proj4 literal of EPSG:4326 is assumed to be the Map's spatial reference and all data from layers within this map will be plotted using this coordinate system. If any layers do not declare an srs value then they will be assumed to be in the same srs as the Map and not transformations will be needed to plot them in the Map's coordinate space.",
                "doc": "Map spatial reference (proj4 string)."
            },
            "buffer-size": {
                "css": "buffer-size",
                "default-value": 0,
                "type":"float",
                "default-meaning": "No buffer will be used.",
                "doc": "Extra tolerance around the map (in pixels) used to ensure labels crossing tile boundaries are equally rendered in each tile (e.g. cut in each tile). Not intended to be used in combination with \"avoid-edges\"."
            },
            "maximum-extent": {
                "css": "maximum-extent",
                "default-value": "-20037508.34,-20037508.34,20037508.34,20037508.34",
                "type":"string",
                "default-meaning": "All data will be clipped to global mercator extent (default is applied in Carto.js).",
                "doc": "An extent to be used to limit the bounds used to query all layers during rendering. Should be minx, miny, maxx, maxy in the coordinates of the Map."
            },
            "base": {
                "css": "base",
                "default-value": "",
                "default-meaning": "This base path defaults to an empty string meaning that any relative paths to files referenced in styles or layers will be interpreted relative to the application process.",
                "type": "string",
                "doc": "Any relative paths used to reference files will be understood as relative to this directory path if the map is loaded from an in memory object rather than from the filesystem. If the map is loaded from the filesystem and this option is not provided it will be set to the directory of the stylesheet."
            },
            "paths-from-xml": {
                "css": "",
                "default-value": true,
                "default-meaning": "Paths read from XML will be interpreted from the location of the XML.",
                "type": "boolean",
                "doc": "Value to control whether paths in the XML will be interpreted from the location of the XML or from the working directory of the program that calls load_map()."
            },
            "minimum-version": {
                "css": "",
                "default-value": "none",
                "default-meaning": "Mapnik version will not be detected and no error will be thrown about compatibility.",
                "type": "string",
                "doc": "The minumum Mapnik version (e.g. 0.7.2) needed to use certain functionality in the stylesheet."
            },
            "font-directory": {
                "css": "font-directory",
                "type": "uri",
                "default-value": "none",
                "default-meaning": "No map-specific fonts will be registered.",
                "doc": "Path to a directory which holds fonts which should be registered when the Map is loaded (in addition to any fonts that may be automatically registered)."
            }
        },
        "polygon": {
            "fill": {
                "css": "polygon-fill",
                "type": "color",
                "expression":true,
                "default-value": "The color gray will be used for fill.",
                "default-meaning": "Gray and fully opaque (alpha = 1), same as rgb(128,128,128) or rgba(128,128,128,1).",
                "doc": "Fill color to assign to a polygon."
            },
            "fill-opacity": {
                "css": "polygon-opacity",
                "type": "float",
                "expression":true,
                "doc": "The opacity of the polygon.",
                "default-value": 1.0,
                "default-meaning": "Color is fully opaque."
            },
            "gamma": {
                "css": "polygon-gamma",
                "type": "float",
                "expression":true,
                "default-value": 1.0,
                "default-meaning": "Fully antialiased.",
                "range": "0-1",
                "doc": "Level of antialiasing of polygon edges."
            },
            "gamma-method": {
                "css": "polygon-gamma-method",
                "type": [
                    "power",
                    "linear",
                    "none",
                    "threshold",
                    "multiply"
                ],
                "expression":true,
                "default-value": "power",
                "default-meaning": "pow(x,gamma) is used to calculate pixel gamma, which produces slightly smoother line and polygon antialiasing than the 'linear' method, while other methods are usually only used to disable AA.",
                "doc": "An Antigrain Geometry specific rendering hint to control the quality of antialiasing. Under the hood in Mapnik this method is used in combination with the 'gamma' value (which defaults to 1). The methods are in the AGG source at https://github.com/mapnik/mapnik/blob/master/deps/agg/include/agg_gamma_functions."
            },
            "clip": {
                "css": "polygon-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extend outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "simplify": {
                "css": "polygon-simplify",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "geometry will not be simplified.",
                "doc": "Simplify geometries by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "polygon-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression":true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "Simplify geometries by the given algorithm."
            },
            "smooth": {
                "css": "polygon-smooth",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "geometry-transform": {
                "css": "polygon-geometry-transform",
                "type": "functions",
                "default-value": "none",
                "default-meaning": "The geometry will not be transformed.",
                "doc": "Transform polygon geometry with specified function.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "comp-op": {
                "css": "polygon-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            }
        },
        "line": {
            "stroke": {
                "css": "line-color",
                "default-value": "black",
                "type": "color",
                "expression":true,
                "default-meaning": "black and fully opaque (alpha = 1), same as rgb(0,0,0) or rgba(0,0,0,1).",
                "doc": "The color of a drawn line."
            },
            "stroke-width": {
                "css": "line-width",
                "default-value": 1.0,
                "type": "float",
                "expression":true,
                "doc": "The width of a line in pixels.",
                "default-meaning": "The line will be rendered 1 pixel wide."
            },
            "stroke-opacity": {
                "css": "line-opacity",
                "default-value": 1.0,
                "type": "float",
                "expression":true,
                "default-meaning": "Color is fully opaque.",
                "doc": "The opacity of a line."
            },
            "stroke-linejoin": {
                "css": "line-join",
                "default-value": "miter",
                "type": [
                    "miter",
                    "miter-revert",
                    "round",
                    "bevel"
                ],
                "expression":true,
                "doc": "The behavior of lines when joining.",
                "default-meaning": "The line joins will be rendered using a miter look."
            },
            "stroke-linecap": {
                "css": "line-cap",
                "default-value": "butt",
                "type": [
                    "butt",
                    "round",
                    "square"
                ],
                "expression":true,
                "doc": "The display of line endings.",
                "default-meaning": "The line endings will be rendered using a butt look."
            },
            "stroke-gamma": {
                "css": "line-gamma",
                "type": "float",
                "expression":true,
                "default-value": 1.0,
                "default-meaning": "Fully antialiased.",
                "range": "0-1",
                "doc": "Level of antialiasing of stroke line."
            },
            "stroke-gamma-method": {
                "css": "line-gamma-method",
                "type": [
                    "power",
                    "linear",
                    "none",
                    "threshold",
                    "multiply"
                ],
                "expression":true,
                "default-value": "power",
                "default-meaning": "pow(x,gamma) is used to calculate pixel gamma, which produces slightly smoother line and polygon antialiasing than the 'linear' method, while other methods are usually only used to disable AA.",
                "doc": "An Antigrain Geometry specific rendering hint to control the quality of antialiasing. Under the hood in Mapnik this method is used in combination with the 'gamma' value (which defaults to 1). The methods are in the AGG source at https://github.com/mapnik/mapnik/blob/master/deps/agg/include/agg_gamma_functions."
            },
            "stroke-dasharray": {
                "css": "line-dasharray",
                "type": "numbers",
                "expression":true,
                "doc": "A pair of length values [a,b], where (a) is the dash length and (b) is the gap length respectively. More than two values are supported for more complex patterns.",
                "default-value": "none",
                "default-meaning": "The line will be drawn without dashes."
            },
            "stroke-dashoffset": {
                "css": "line-dash-offset",
                "type": "numbers",
                "expression":true,
                "doc": "Valid parameter but not currently used in renderers (only exists for experimental svg support in Mapnik which is not yet enabled).",
                "default-value": "none",
                "default-meaning": "The line will be drawn without dashes."
            },
            "stroke-miterlimit": {
                "css": "line-miterlimit",
                "type": "float",
                "expression":true,
                "doc": "The limit on the ratio of the miter length to the stroke-width. Used to automatically convert miter joins to bevel joins for sharp angles to avoid the miter extending beyond the thickness of the stroking path. Normally will not need to be set, but a larger value can sometimes help avoid jaggy artifacts.",
                "default-value": 4.0,
                "default-meaning": "Will auto-convert miters to bevel line joins when theta is less than 29 degrees as per the SVG spec: 'miterLength / stroke-width = 1 / sin ( theta / 2 )'."
            },
            "clip": {
                "css": "line-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "simplify": {
                "css": "line-simplify",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "geometry will not be simplified.",
                "doc": "Simplify geometries by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "line-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression":true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "Simplify geometries by the given algorithm."
            },
            "smooth": {
                "css": "line-smooth",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "offset": {
                "css": "line-offset",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Will not be offset.",
                "doc": "Offsets a line a number of pixels parallel to its actual path. Positive values move the line left, negative values move it right (relative to the directionality of the line).",
                "status": "unstable"
            },
            "rasterizer": {
                "css": "line-rasterizer",
                "type": [
                    "full",
                    "fast"
                ],
                "expression":true,
                "default-value": "full",
                "doc": "Exposes an alternate AGG rendering method that sacrifices some accuracy for speed.",
                "default-meaning": "The line will be rendered using the highest quality method rather than the fastest."
            },
            "geometry-transform": {
                "css": "line-geometry-transform",
                "type": "functions",
                "default-value": "none",
                "default-meaning": "The geometry will not be transformed.",
                "doc": "Transform line geometry with specified function.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "comp-op": {
                "css": "line-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            }
        },
        "markers": {
            "file": {
                "css": "marker-file",
                "doc": "A file that this marker shows at each placement. If no file is given, the marker will show an ellipse. Accepted formats: svg, jpg, png, tiff, and webp.",
                "default-value": "none",
                "default-meaning": "An ellipse or circle, if width equals height.",
                "type": "uri",
                "expression":true
            },
            "opacity": {
                "css": "marker-opacity",
                "doc": "The overall opacity of the marker, if set, overrides both the opacity of the fill and the opacity of the stroke.",
                "default-value": 1.0,
                "default-meaning": "The stroke-opacity and fill-opacity of the marker.",
                "type": "float",
                "expression":true
            },
            "fill-opacity": {
                "css": "marker-fill-opacity",
                "doc": "The fill opacity of the marker. This property will also set the `fill-opacity` of elements in an SVG loaded from a file.",
                "default-value": 1.0,
                "expression":true,
                "default-meaning": "Color is fully opaque.",
                "type": "float"
            },
            "stroke": {
                "css": "marker-line-color",
                "doc": "The color of the stroke around the marker. This property will also set the `stroke` of elements in an SVG loaded from a file.",
                "default-value": "black",
                "type": "color",
                "expression":true,
                "default-meaning": "The marker will be drawn with a black outline."
            },
            "stroke-width": {
                "css": "marker-line-width",
                "default-value": 0.5,
                "doc": "The width of the stroke around the marker, in pixels. This is positioned on the boundary, so high values can cover the area itself. This property will also set the `stroke-width` of elements in an SVG loaded from a file.",
                "type": "float",
                "expression":true,
                "default-meaning": "The marker will be drawn with an outline of .5 pixels wide."
            },
            "stroke-opacity": {
                "css": "marker-line-opacity",
                "default-value": 1.0,
                "default-meaning": "Color is fully opaque. This property will also set the `stroke-opacity` of elements in an SVG loaded from a file.",
                "doc": "The opacity of a line.",
                "type": "float",
                "expression":true
            },
            "placement": {
                "css": "marker-placement",
                "type": [
                    "point",
                    "line",
                    "interior",
                    "vertex-first",
                    "vertex-last"
                ],
                "expression":true,
                "default-value": "point",
                "default-meaning": "Place markers at the center point (centroid) of the geometry.",
                "doc": "Attempt to place markers on a point, in the center of a polygon, or if markers-placement:line, then multiple times along a line. 'interior' placement can be used to ensure that points placed on polygons are forced to be inside the polygon interior. The 'vertex-first' and 'vertex-last' options can be used to place markers at the first or last vertex of lines or polygons."
            },
            "multi-policy": {
                "css": "marker-multi-policy",
                "type": [
                    "each",
                    "whole",
                    "largest"
                ],
                "expression":true,
                "default-value": "each",
                "default-meaning": "If a feature contains multiple geometries and the placement type is either point or interior then a marker will be rendered for each.",
                "doc": "A special setting to allow the user to control rendering behavior for 'multi-geometries' (when a feature contains multiple geometries). This setting does not apply to markers placed along lines. The 'each' policy is default and means all geometries will get a marker. The 'whole' policy means that the aggregate centroid between all geometries will be used. The 'largest' policy means that only the largest (by bounding box areas) feature will get a rendered marker (this is how text labeling behaves by default)."
            },
            "marker-type": {
                "css": "marker-type",
                "type": [
                    "arrow",
                    "ellipse"
                ],
                "expression":true,
                "default-value": "ellipse",
                "default-meaning": "The marker shape is an ellipse.",
                "doc": "The default marker-type. If a SVG file is not given as the marker-file parameter, the renderer provides either an arrow or an ellipse (a circle if height is equal to width).",
                "status": "deprecated"
            },
            "width": {
                "css": "marker-width",
                "default-value": 10.0,
                "doc": "The width of the marker, if using one of the default types.",
                "type": "float",
                "expression":true,
                "default-meaning": "The marker width is 10 pixels."
            },
            "height": {
                "css": "marker-height",
                "default-value": 10.0,
                "doc": "The height of the marker, if using one of the default types.",
                "type": "float",
                "expression":true,
                "default-meaning": "The marker height is 10 pixels."
            },
            "fill": {
                "css": "marker-fill",
                "default-value": "blue",
                "doc": "The color of the area of the marker. This property will also set the `fill` of elements in an SVG loaded from a file.",
                "type": "color",
                "expression":true,
                "default-meaning": "The marker fill color is blue."
            },
            "allow-overlap": {
                "css": "marker-allow-overlap",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "doc": "Control whether overlapping markers are shown or hidden.",
                "default-meaning": "Do not allow markers to overlap with each other - overlapping markers will not be shown."
            },
            "avoid-edges": {
                "css": "marker-avoid-edges",
                "doc": "Avoid placing markers that intersect with tile boundaries.",
                "type": "boolean",
                "expression":true,
                "default-meaning": "Markers will be potentially placed near tile edges and therefore may look cut off unless they are rendered on each adjacent tile.",
                "default-value": false
            },
            "ignore-placement": {
                "css": "marker-ignore-placement",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "do not store the bbox of this geometry in the collision detector cache.",
                "doc": "Value to control whether the placement of the feature will prevent the placement of other features."
            },
            "spacing": {
                "css": "marker-spacing",
                "doc": "Space between repeated markers in pixels. If the spacing is less than the marker size or larger than the line segment length then no marker will be placed. Any value less than 1 will be ignored and the default will be used instead.",
                "default-value": 100.0,
                "type": "float",
                "expression":true,
                "default-meaning": "In the case of marker-placement:line then draw a marker every 100 pixels along a line."
            },
            "max-error": {
                "css": "marker-max-error",
                "type": "float",
                "expression":true,
                "default-value": 0.2,
                "default-meaning": "N/A: not intended to be changed.",
                "doc": "N/A: not intended to be changed."
            },
            "transform": {
                "css": "marker-transform",
                "type": "functions",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ],
                "default-value": "none",
                "default-meaning": "No transformation.",
                "doc": "Transform marker instance with specified function. Ignores map scale factor."
            },
            "clip": {
                "css": "marker-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "simplify": {
                "css": "marker-simplify",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Geometry will not be simplified.",
                "doc": "geometries are simplified by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "marker-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression":true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "geometries are simplified by the given algorithm."
            },
            "smooth": {
                "css": "marker-smooth",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "geometry-transform": {
                "css": "marker-geometry-transform",
                "type": "functions",
                "expression":true,
                "default-value": "none",
                "default-meaning": "The geometry will not be transformed.",
                "doc": "Transform marker geometry with specified function.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "offset": {
                "css": "marker-offset",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Will not be offset.",
                "doc": "Offsets a marker from a line a number of pixels parallel to its actual path. Positive values move the marker left, negative values move it right (relative to the directionality of the line)."
            },
            "comp-op": {
                "css": "marker-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            },
            "direction": {
                "css": "marker-direction",
                "default-value": "right",
                "type": [
                    "auto",
                    "auto-down",
                    "left",
                    "right",
                    "left-only",
                    "right-only",
                    "up",
                    "down"
                ],
                "expression": true,
                "default-meaning": "Markers are oriented to the right in the line direction.",
                "doc": "How markers should be placed along lines. With the \"auto\" setting when marker is upside down the marker is automatically rotated by 180 degrees to keep it upright. The \"auto-down\" value places marker in the opposite orientation to \"auto\". The \"left\" or \"right\" settings can be used to force marker to always be placed along a line in a given direction and therefore disables rotating if marker appears upside down. The \"left-only\" or \"right-only\" properties also force a given direction but will discard upside down markers rather than trying to flip it. The \"up\" and \"down\" settings don't adjust marker's orientation to the line direction."
            }
        },
        "shield": {
            "name": {
                "css": "shield-name",
                "type": "string",
                "expression":true,
                "serialization": "content",
                "default-value": "",
                "default-meaning": "No text label will be rendered with the shield.",
                "doc": "Value to use for a shield\"s text label. Data columns are specified using brackets like [column_name]."
            },
            "file": {
                "css": "shield-file",
                "required": true,
                "type": "uri",
                "expression":true,
                "default-value": "none",
                "doc": "Image file to render behind the shield text. Accepted formats: svg, jpg, png, tiff, and webp.",
                "default-meaning": ""
            },
            "face-name": {
                "css": "shield-face-name",
                "type": "string",
                "expression":true,
                "validate": "font",
                "doc": "Font name and style to use for the shield text.",
                "default-value": "none",
                "required": true,
                "default-meaning": ""
            },
            "unlock-image": {
                "css": "shield-unlock-image",
                "type": "boolean",
                "expression":true,
                "doc": "This parameter should be set to true if you are trying to position text beside rather than on top of the shield image.",
                "default-value": false,
                "default-meaning": "text alignment relative to the shield image uses the center of the image as the anchor for text positioning."
            },
            "size": {
                "css": "shield-size",
                "type": "float",
                "expression":true,
                "default-value": 10.0,
                "doc": "The size of the shield text in pixels.",
                "default-meaning": "Font size of 10 will be used to render text."
            },
            "fill": {
                "css": "shield-fill",
                "type": "color",
                "expression":true,
                "default-value": "black",
                "doc": "The color of the shield text.",
                "default-meaning": "The shield text will be rendered black."
            },
            "placement": {
                "css": "shield-placement",
                "type": [
                    "point",
                    "line",
                    "vertex",
                    "interior"
                ],
                "expression":true,
                "default-value": "point",
                "default-meaning": "One shield will be placed per geometry.",
                "doc": "How this shield should be placed. Point placement places one shield on top of a point geometry and at the centroid of a polygon or the middle point of a line, line places along lines multiple times per feature, vertex places on the vertexes of polygons, and interior attempts to place inside of a polygon."
            },
            "avoid-edges": {
                "css": "shield-avoid-edges",
                "doc": "Avoid placing shields that intersect with tile boundaries.",
                "type": "boolean",
                "expression":true,
                "default-meaning": "Shields will be potentially placed near tile edges and therefore may look cut off unless they are rendered on each adjacent tile.",
                "default-value": false
            },
            "allow-overlap": {
                "css": "shield-allow-overlap",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "doc": "Control whether overlapping shields are shown or hidden.",
                "default-meaning": "Shields will not overlap and any shields that might collide with previously placed shields will not be rendered.",
                "default-meaning": "Do not allow shields to overlap with other map elements already placed."
            },
            "margin": {
                "css": "shield-margin",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No extra margin will be used to determine if a shield collides with any other text, shield, or marker.",
                "doc": "Minimum distance that a shield can be placed from any other text, shield, or marker."
            },
            "repeat-distance": {
                "css": "shield-repeat-distance",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Shields with the same text will be rendered without restriction.",
                "doc": "Minimum distance between repeated shields. If set this will prevent shields being rendered nearby each other that contain the same text. Similar to shield-min-distance with the difference that it works the same no matter what placement strategy is used."
            },
            "minimum-distance": {
                "css": "shield-min-distance",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Shields with the same text will be rendered without restriction.",
                "doc": "Minimum distance to the next shield with the same text. Only works for line placement."
            },
            "spacing": {
                "css": "shield-spacing",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Only one shield per line will attempt to be placed.",
                "doc": "Distance the renderer should use to try to place repeated shields on a line."
            },
            "minimum-padding": {
                "css": "shield-min-padding",
                "expression":true,
                "default-value": 0.0,
                "doc": "Minimum distance a shield will be placed from the edge of a tile. This option is similar to shield-avoid-edges:true except that the extra margin is used to discard cases where the shield+margin are not fully inside the tile.",
                "default-meaning": "No margin will be used to detect if a shield is nearby a tile boundary.",
                "type": "float"
            },
            "label-position-tolerance": {
                "css": "shield-label-position-tolerance",
                "default-value": "shield-spacing/2.0",
                "type": "float",
                "expression":true,
                "default-meaning": "If a shield cannot be placed then the renderer will advance by shield-spacing/2.0 to try placement again.",
                "doc": "Allows the shield to be displaced from its ideal position by a number of pixels (only works with placement:line)."
            },
            "wrap-width": {
                "css": "shield-wrap-width",
                "type": "unsigned",
                "expression":true,
                "default-value": 0,
                "default-meaning": "Text will not be wrapped.",
                "doc": "Length of a chunk of text in pixels before wrapping text. If set to zero, text doesn't wrap."
            },
            "wrap-before": {
                "css": "shield-wrap-before",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "Wrapped lines will be a bit longer than wrap-width.",
                "doc": "Wrap text before wrap-width is reached."
            },
            "wrap-character": {
                "css": "shield-wrap-character",
                "type": "string",
                "expression":true,
                "default-value": "\" \"",
                "default-meaning": "Lines will be wrapped when whitespace is encountered.",
                "doc": "Use this character instead of a space to wrap long names."
            },
            "halo-fill": {
                "css": "shield-halo-fill",
                "type": "color",
                "expression":true,
                "default-value": "white",
                "doc": "Specifies the color of the halo around the text.",
                "default-meaning": "The shield halo text will be rendered white."
            },
            "halo-radius": {
                "css": "shield-halo-radius",
                "default-value": 0.0,
                "default-meaning": "no halo.",
                "doc": "Specify the radius of the halo in pixels.",
                "type": "float",
                "expression":true
            },
            "halo-rasterizer": {
                "css": "shield-halo-rasterizer",
                "type": [
                    "full",
                    "fast"
                ],
                "expression":true,
                "default-value": "full",
                "default-meaning": "The shield will be rendered using the highest quality method rather than the fastest.",
                "doc": "Exposes an alternate text halo rendering method that sacrifices quality for speed."
            },
            "halo-transform": {
                "css": "shield-halo-transform",
                "type": "functions",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ],
                "default-value": "",
                "default-meaning": "No transformation.",
                "doc": "Transform shield halo relative to the actual text with specified function. Allows for shadow or embossed effects. Ignores map scale factor."
            },
            "halo-comp-op": {
                "css": "shield-halo-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": ["clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            },
            "halo-opacity": {
                "css": "shield-halo-opacity",
                "doc": "A number from 0 to 1 specifying the opacity for the text halo.",
                "default-value": 1.0,
                "type": "float",
                "expression":true,
                "default-meaning": "Fully opaque."
            },
            "character-spacing": {
                "css": "shield-character-spacing",
                "type": "unsigned",
                "expression":true,
                "default-value": 0,
                "default-meaning": "The default character spacing of the font will be used.",
                "doc": "Horizontal spacing between characters (in pixels). Currently works for point placement only, not line placement."
            },
            "line-spacing": {
                "css": "shield-line-spacing",
                "default-value": 0,
                "doc": "Vertical spacing between lines of multiline labels (in pixels).",
                "type": "float",
                "expression":true,
                "default-meaning": "The default font spacing will be used."
            },
            "dx": {
                "css": "shield-text-dx",
                "type": "float",
                "expression":true,
                "doc": "Displace text within shield by fixed amount, in pixels, +/- along the X axis.  A positive value will shift the shield right.",
                "default-meaning": "Text will not be displaced.",
                "default-value": 0.0
            },
            "dy": {
                "css": "shield-text-dy",
                "type": "float",
                "expression":true,
                "doc": "Displace text within shield by fixed amount, in pixels, +/- along the Y axis.  A positive value will shift the shield down.",
                "default-meaning": "Text will not be displaced.",
                "default-value": 0.0
            },
            "shield-dx": {
                "css": "shield-dx",
                "type": "float",
                "expression":true,
                "doc": "Displace shield by fixed amount, in pixels, +/- along the X axis.  A positive value will shift the text right.",
                "default-meaning": "Shield will not be displaced.",
                "default-value": 0.0
            },
            "shield-dy": {
                "css": "shield-dy",
                "type": "float",
                "expression":true,
                "doc": "Displace shield by fixed amount, in pixels, +/- along the Y axis.  A positive value will shift the text down.",
                "default-meaning": "Shield will not be displaced.",
                "default-value": 0.0
            },
            "opacity": {
                "css": "shield-opacity",
                "type": "float",
                "expression":true,
                "doc": "The opacity of the image used for the shield.",
                "default-meaning": "Color is fully opaque.",
                "default-value": 1.0
            },
            "text-opacity": {
                "css": "shield-text-opacity",
                "type": "float",
                "expression":true,
                "doc": "The opacity of the text placed on top of the shield.",
                "default-meaning": "Color is fully opaque.",
                "default-value": 1.0

            },
            "horizontal-alignment": {
                "css": "shield-horizontal-alignment",
                "type": [
                    "left",
                    "middle",
                    "right",
                    "auto"
                ],
                "expression":true,
                "doc": "The shield's horizontal alignment from its centerpoint.",
                "default-meaning": "TODO.",
                "default-value": "auto"
            },
            "vertical-alignment": {
                "css": "shield-vertical-alignment",
                "type": [
                    "top",
                    "middle",
                    "bottom",
                    "auto"
                ],
                "expression":true,
                "doc": "The shield's vertical alignment from its centerpoint.",
                "default-meaning": "TODO.",
                "default-value": "middle"
            },
            "placement-type": {
                "css": "shield-placement-type",
                "doc": "Re-position and/or re-size shield to avoid overlaps. \"simple\" for basic algorithm (using shield-placements string,) \"dummy\" to turn this feature off.",
                "type": [
                    "dummy",
                    "simple",
                    "list"
                ],
                "expression":true,
                "default-meaning": "Alternative placements will not be enabled.",
                "default-value": "dummy"
            },
            "placements": {
                "css": "shield-placements",
                "type": "string",
                "expression":true,
                "default-value": "",
                "default-meaning": "No alternative placements will be used.",
                "doc": "If \"placement-type\" is set to \"simple\", use this \"POSITIONS,[SIZES]\" string. An example is `shield-placements: \"E,NE,SE,W,NW,SW\";`."
            },
            "text-transform": {
                "css": "shield-text-transform",
                "type": [
                    "none",
                    "uppercase",
                    "lowercase",
                    "capitalize",
                    "reverse"
                ],
                "expression":true,
                "doc": "Transform the case of the characters.",
                "default-meaning": "No text transformation will be applied.",
                "default-value": "none"
            },
            "justify-alignment": {
                "css": "shield-justify-alignment",
                "type": [
                    "left",
                    "center",
                    "right",
                    "auto"
                ],
                "expression":true,
                "doc": "Define how text in a shield's label is justified.",
                "default-meaning": "TODO.",
                "default-value": "auto"
            },
            "transform": {
                "css": "shield-transform",
                "type": "functions",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ],
                "default-value": "none",
                "default-meaning": "No transformation.",
                "doc": "Transform shield instance with specified function. Ignores map scale factor."
            },
            "clip": {
                "css": "shield-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "simplify": {
                "css": "shield-simplify",
                "type": "float",
                "expression": true,
                "default-value": 0.0,
                "default-meaning": "geometry will not be simplified.",
                "doc": "Simplify the geometries used for shield placement by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "shield-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression": true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "Simplify the geometries used for shield placement by the given algorithm."
            },
            "smooth": {
                "css": "shield-smooth",
                "type": "float",
                "expression": true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out the angles of the geometry used for shield placement. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "comp-op": {
                "css": "shield-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            }
        },
        "line-pattern": {
            "file": {
                "css": "line-pattern-file",
                "type": "uri",
                "expression":true,
                "default-value": "none",
                "required": true,
                "doc": "An image file to be repeated and warped along a line. Accepted formats: svg, jpg, png, tiff, and webp.",
                "default-meaning": ""
            },
            "clip": {
                "css": "line-pattern-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "opacity": {
                "css": "line-pattern-opacity",
                "type": "float",
                "expression":true,
                "doc": "Apply an opacity level to the image used for the pattern.",
                "default-value": 1.0,
                "default-meaning": "The image is rendered without modifications."
            },
            "simplify": {
                "css": "line-pattern-simplify",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "geometry will not be simplified.",
                "doc": "geometries are simplified by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "line-pattern-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression":true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "geometries are simplified by the given algorithm."
            },
            "smooth": {
                "css": "line-pattern-smooth",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "offset": {
                "css": "line-pattern-offset",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "The line will not be offset.",
                "doc": "Offsets a line a number of pixels parallel to its actual path. Positive values move the line left, negative values move it right (relative to the directionality of the line)."
            },
            "geometry-transform": {
                "css": "line-pattern-geometry-transform",
                "type": "functions",
                "default-value": "none",
                "default-meaning": "The geometry will not be transformed.",
                "doc": "Transform line geometry with specified function and apply pattern to transformed geometry.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "transform": {
                "css": "line-pattern-transform",
                "type": "functions",
                "default-value": "none",
                "default-meaning": "No transformation.",
                "doc": "Transform line pattern instance with specified function.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "comp-op": {
                "css": "line-pattern-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            }
        },
        "polygon-pattern": {
            "file": {
                "css": "polygon-pattern-file",
                "type": "uri",
                "expression":true,
                "default-value": "none",
                "required": true,
                "doc": "Image to use as a repeated pattern fill within a polygon. Accepted formats: svg, jpg, png, tiff, and webp.",
                "default-meaning": ""
            },
            "alignment": {
                "css": "polygon-pattern-alignment",
                "type": [
                    "global",
                    "local"
                ],
                "expression":true,
                "default-value": "global",
                "doc": "Specify whether to align pattern fills to the layer's geometry (local) or to the map (global).",
                "default-meaning":"Patterns will be aligned to the map (or tile boundaries) when being repeated across polygons. This is ideal for seamless patterns in tiled rendering."
            },
            "gamma": {
                "css": "polygon-pattern-gamma",
                "type": "float",
                "expression":true,
                "default-value": 1.0,
                "default-meaning": "Fully antialiased.",
                "range": "0-1",
                "doc": "Level of antialiasing of polygon pattern edges."
            },
            "opacity": {
                "css": "polygon-pattern-opacity",
                "type": "float",
                "expression":true,
                "doc": "Apply an opacity level to the image used for the pattern.",
                "default-value": 1.0,
                "default-meaning": "The image is rendered without modifications."
            },
            "clip": {
                "css": "polygon-pattern-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "simplify": {
                "css": "polygon-pattern-simplify",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "geometry will not be simplified.",
                "doc": "geometries are simplified by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "polygon-pattern-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression":true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "geometries are simplified by the given algorithm."
            },
            "smooth": {
                "css": "polygon-pattern-smooth",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "geometry-transform": {
                "css": "polygon-pattern-geometry-transform",
                "type": "functions",
                "default-value": "none",
                "default-meaning": "The geometry will not be transformed.",
                "doc": "Transform polygon geometry with specified function and apply pattern to transformed geometry.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "transform": {
                "css": "polygon-pattern-transform",
                "type": "functions",
                "default-value": "none",
                "default-meaning": "No transformation.",
                "doc": "Transform polygon pattern instance with specified function.",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ]
            },
            "comp-op": {
                "css": "polygon-pattern-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            }
        },
        "raster": {
            "opacity": {
                "css": "raster-opacity",
                "default-value": 1.0,
                "default-meaning": "Color is fully opaque.",
                "type": "float",
                "doc": "The opacity of the raster symbolizer on top of other symbolizers."
            },
            "filter-factor": {
                "css": "raster-filter-factor",
                "default-value": -1.0,
                "default-meaning": "Allow the datasource to choose appropriate downscaling.",
                "type": "float",
                "doc": "This is used by the Raster or Gdal datasources to pre-downscale images using overviews. Higher numbers can sometimes cause much better scaled image output, at the cost of speed."
            },
            "scaling": {
                "css": "raster-scaling",
                "type": [
                    "near",
                    "fast",
                    "bilinear",
                    "bicubic",
                    "spline16",
                    "spline36",
                    "hanning",
                    "hamming",
                    "hermite",
                    "kaiser",
                    "quadric",
                    "catrom",
                    "gaussian",
                    "bessel",
                    "mitchell",
                    "sinc",
                    "lanczos",
                    "blackman"
                ],
                "default-value": "near",
                "default-meaning": "Nearest neighboor resampling will be used to scale the image to the target size of the map.",
                "doc": "The scaling algorithm used to making different resolution versions of this raster layer. Bilinear is a good compromise between speed and accuracy, while lanczos gives the highest quality."
            },
            "mesh-size": {
                "css": "raster-mesh-size",
                "default-value": 16,
                "default-meaning": "Reprojection mesh will be 1/16 of the resolution of the source image.",
                "type": "unsigned",
                "doc": "A reduced resolution mesh is used for raster reprojection, and the total image size is divided by the mesh-size to determine the quality of that mesh. Values for mesh-size larger than the default will result in faster reprojection but might lead to distortion."
            },
            "comp-op": {
                "css": "raster-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ]
            },
            "default-mode": {
                "css": "raster-colorizer-default-mode",
                "type": [
                    "discrete",
                    "linear",
                    "exact"
                ],
                "doc": "This can be either `discrete`, `linear` or `exact`. If it is not specified then the default is `linear`.",
                "default-value": "linear",
                "default-meaning": "A linear interpolation is used to generate colors between the two nearest stops."
            },
            "default-color": {
                "css": "raster-colorizer-default-color",
                "type": "color",
                "doc": "This can be any color. Sets the color that is applied to all values outside of the range of the colorizer-stops. If not supplied pixels will be fully transparent.",
                "default-value": "transparent",
                "default-meaning": "Pixels that are not colored by the colorizer stops will be transparent."
            },
            "epsilon": {
                "css": "raster-colorizer-epsilon",
                "type": "float",
                "doc": "This can be any positive floating point value and will be used as a tolerance in floating point comparisions. The higher the value the more likely a stop will match and color data.",
                "default-value": "1.1920928955078125e-07",
                "default-meaning": "Pixels must very closely match the stop filter otherwise they will not be colored."
            },
            "stop": {
                "css": "raster-colorizer-stops",
                "type": "tags",
                "serialization": "tag",
                "tagname": "tagname",
                "doc": "Assigns raster data values to colors. Stops must be listed in ascending order, and contain at a minimum the value and the associated color. You can also include the color-mode as a third argument, like `stop(100,#fff,exact)`.",
                "default-value": "",
                "default-meaning": "No colorization will happen without supplying stops."
            }
        },
        "point": {
            "file": {
                "css": "point-file",
                "type": "uri",
                "expression":true,
                "required": false,
                "default-value": "none",
                "default-meaning": "A 4x4 black square will be rendered.",
                "doc": "Image file to represent a point. Accepted formats: svg, jpg, png, tiff, and webp."
            },
            "allow-overlap": {
                "css": "point-allow-overlap",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "doc": "Control whether overlapping points are shown or hidden.",
                "default-meaning": "Do not allow points to overlap with each other - overlapping markers will not be shown."
            },
            "ignore-placement": {
                "css": "point-ignore-placement",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "do not store the bbox of this geometry in the collision detector cache.",
                "doc": "Control whether the placement of the feature will prevent the placement of other features."
            },
            "opacity": {
                "css": "point-opacity",
                "type": "float",
                "expression":true,
                "default-value": 1.0,
                "default-meaning": "Fully opaque.",
                "doc": "A value from 0 to 1 to control the opacity of the point."
            },
            "placement": {
                "css": "point-placement",
                "type": [
                    "centroid",
                    "interior"
                ],
                "expression":true,
                "doc": "Control how this point should be placed. Centroid calculates the geometric center of a polygon, which can be outside of it, while interior always places inside of a polygon.",
                "default-meaning": "The centroid of the geometry will be used to place the point.",
                "default-value": "centroid"
            },
            "transform": {
                "css": "point-transform",
                "type": "functions",
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ],
                "default-value": "none",
                "default-meaning": "No transformation.",
                "doc": "Transform point instance with specified function. Ignores map scale factor."
            },
            "comp-op": {
                "css": "point-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            }
        },
        "text": {
            "name": {
                "css": "text-name",
                "type": "string",
                "expression":true,
                "required": true,
                "default-value": "none",
                "serialization": "content",
                "doc": "Value to use for a text label. Data columns are specified using brackets like [column_name].",
                "default-meaning": ""
            },
            "face-name": {
                "css": "text-face-name",
                "type": "string",
                "expression":false,
                "validate": "font",
                "default-value": "none",
                "doc": "Font name and style to render a label in.",
                "required": true,
                "default-meaning": ""
            },
            "size": {
                "css": "text-size",
                "type": "float",
                "expression":true,
                "default-value": 10.0,
                "doc": "Text size in pixels.",
                "default-meaning": "Font size of 10 will be used to render text."
            },
            "text-ratio": {
                "css": "text-ratio",
                "doc": "Define the amount of text (of the total) present on successive lines when wrapping occurs.",
                "default-value": 0,
                "type": "unsigned",
                "expression":true,
                "default-meaning":"TODO."
            },
            "wrap-width": {
                "css": "text-wrap-width",
                "doc": "Length of a chunk of text in pixels before wrapping text. If set to zero, text doesn't wrap.",
                "default-value": 0,
                "type": "unsigned",
                "expression":true,
                "default-meaning": "Text will not be wrapped."
            },
            "wrap-before": {
                "css": "text-wrap-before",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "Wrapped lines will be a bit longer than wrap-width.",
                "doc": "Wrap text before wrap-width is reached."
            },
            "wrap-character": {
                "css": "text-wrap-character",
                "type": "string",
                "expression":true,
                "default-value": "\" \"",
                "default-meaning": "Lines will be wrapped when whitespace is encountered.",
                "doc": "Use this character instead of a space to wrap long text."
            },
            "repeat-wrap-character": {
                "css": "text-repeat-wrap-character",
                "type": "boolean",
                "expression": true,
                "default-value": false,
                "default-meaning": "Character will be removed when used to wrap a line.",
                "doc": "Keep the character used to wrap a line instead of removing it, and repeat it on the new line.",
                "status": "unstable"
            },
            "spacing": {
                "css": "text-spacing",
                "type": "unsigned",
                "expression":true,
                "default-value": 0,
                "default-meaning": "Only one label per line will attempt to be placed.",
                "doc": "Distance the renderer should use to try to place repeated text labels on a line."
            },
            "character-spacing": {
                "css": "text-character-spacing",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "The default character spacing of the font will be used.",
                "doc": "Horizontal spacing adjustment between characters in pixels. This value is ignored when `horizontal-alignment` is set to `adjust`. Typographic ligatures are turned off when this value is greater than zero."
            },
            "line-spacing": {
                "css": "text-line-spacing",
                "default-value": 0,
                "type": "float",
                "expression":true,
                "default-meaning": "The default font spacing will be used.",
                "doc": "Vertical spacing adjustment between lines in pixels."
            },
            "label-position-tolerance": {
                "css": "text-label-position-tolerance",
                "default-value": "text-spacing/2.0",
                "type": "float",
                "expression":true,
                "default-meaning": "If a shield cannot be placed then the renderer will advance by text-spacing/2.0 to try placement again.",
                "doc": "Allows the label to be displaced from its ideal position by a number of pixels (only works with placement:line)."
            },
            "max-char-angle-delta": {
                "css": "text-max-char-angle-delta",
                "type": "float",
                "expression":true,
                "default-value": 22.5,
                "default-meaning":"The label will not be placed if a character falls on a line with an angle sharper than 22.5 degrees.",
                "doc": "The maximum angle change, in degrees, allowed between adjacent characters in a label. This value internally is converted to radians to the default is 22.5*math.pi/180.0. The higher the value the fewer labels will be placed around around sharp corners."
            },
            "fill": {
                "css": "text-fill",
                "type": "color",
                "expression":true,
                "doc": "Specifies the color for the text.",
                "default-value": "black",
                "default-meaning": "The text will be rendered black."
            },
            "opacity": {
                "css": "text-opacity",
                "doc": "A number from 0 to 1 specifying the opacity for the text.",
                "default-value": 1.0,
                "default-meaning": "Fully opaque",
                "expression":true,
                "default-meaning": "Fully opaque.",
                "type": "float"
            },
            "halo-opacity": {
                "css": "text-halo-opacity",
                "doc": "A number from 0 to 1 specifying the opacity for the text halo.",
                "default-value": 1.0,
                "type": "float",
                "expression":true,
                "default-meaning": "Fully opaque."
            },
            "halo-fill": {
                "css": "text-halo-fill",
                "type": "color",
                "expression":true,
                "default-value": "white",
                "default-meaning": "The halo will be rendered white.",
                "doc": "Specifies the color of the halo around the text."
            },
            "halo-radius": {
                "css": "text-halo-radius",
                "doc": "Specify the radius of the halo in pixels.",
                "default-value": 0.0,
                "type": "float",
                "expression":true,
                "default-meaning": "no halo."
            },
            "halo-rasterizer": {
                "css": "text-halo-rasterizer",
                "type": [
                    "full",
                    "fast"
                ],
                "expression":true,
                "default-value": "full",
                "default-meaning": "The text will be rendered using the highest quality method rather than the fastest.",
                "doc": "Exposes an alternate text halo rendering method that sacrifices quality for speed."
            },
            "halo-transform": {
                "css": "text-halo-transform",
                "type": "functions",
                "expression":true,
                "functions": [
                    ["matrix", 6],
                    ["translate", 2],
                    ["scale", 2],
                    ["rotate", 3],
                    ["skewX", 1],
                    ["skewY", 1]
                ],
                "default-value": "",
                "default-meaning": "No transformation.",
                "doc": "Transform text halo relative to the actual text with specified function. Allows for shadow or embossed effects. Ignores map scale factor."
            },
            "dx": {
                "css": "text-dx",
                "type": "float",
                "expression":true,
                "doc": "Displace text by fixed amount, in pixels, +/- along the X axis.  With \"dummy\" placement-type, a positive value displaces to the right. With \"simple\" placement-type, it is either left, right or unchanged, depending on the placement selected. Any non-zero value implies \"horizontal-alignment\" changes to \"left\" by default. Has no effect with 'line' text-placement-type.",
                "default-meaning": "Text will not be displaced.",
                "default-value": 0.0
            },
            "dy": {
                "css": "text-dy",
                "type": "float",
                "expression":true,
                "doc": "Displace text by fixed amount, in pixels, +/- along the Y axis.  With \"dummy\" placement-type, a positive value displaces downwards. With \"simple\" placement-type, it is either up, down or unchanged, depending on the placement selected. With \"line\" placement-type, a positive value displaces above the path.",
                "default-meaning": "Text will not be displaced.",
                "default-value": 0.0
            },
            "vertical-alignment": {
                "css": "text-vertical-alignment",
                "type": [
                  "top",
                  "middle",
                  "bottom",
                  "auto"
                ],
                "expression":true,
                "doc": "Position of label relative to point position.",
                "default-value": "auto",
                "default-meaning": "Default affected by value of dy; \"top\" for dy>0, \"bottom\" for dy<0."
            },
            "avoid-edges": {
                "css": "text-avoid-edges",
                "doc": "Avoid placing labels that intersect with tile boundaries.",
                "default-value": false,
                "type": "boolean",
                "expression":true,
                "default-meaning": "Text will be potentially placed near tile edges and therefore may look cut off unless the same text label is rendered on each adjacent tile."
            },
            "margin": {
                "css": "text-margin",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "No extra margin will be used to determine if a label collides with any other text, shield, or marker.",
                "doc": "Minimum distance that a label can be placed from any other text, shield, or marker."
            },
            "repeat-distance": {
                "css": "text-repeat-distance",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Labels with the same text will be rendered without restriction.",
                "doc": "Minimum distance between repeated text. If set this will prevent text labels being rendered nearby each other that contain the same text. Similar to text-min-distance with the difference that it works the same no matter what placement strategy is used."
            },
            "minimum-distance": {
                "css": "text-min-distance",
                "type": "float",
                "default-value": 0.0,
                "expression":true,
                "default-meaning": "Labels with the same text will be rendered without restriction.",
                "doc": "Minimum distance to the next label with the same text. Only works for line placement. Deprecated: replaced by `text-repeat-distance` and `text-margin`",
                "status": "deprecated"
            },
            "minimum-padding": {
                "css": "text-min-padding",
                "default-value": 0.0,
                "type": "float",
                "expression":true,
                "doc": "Minimum distance a text label will be placed from the edge of a tile. This option is similar to shield-avoid-edges:true except that the extra margin is used to discard cases where the shield+margin are not fully inside the tile.",
                "default-meaning": "No margin will be used to detect if a text label is nearby a tile boundary."
            },
            "minimum-path-length": {
                "css": "text-min-path-length",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "place labels on all geometries no matter how small they are.",
                "doc": "Place labels only on polygons and lines with a bounding width longer than this value (in pixels)."
            },
            "allow-overlap": {
                "css": "text-allow-overlap",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "doc": "Control whether overlapping text is shown or hidden.",
                "default-meaning": "Do not allow text to overlap with other text - overlapping markers will not be shown."
            },
            "orientation": {
                "css": "text-orientation",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "doc": "Rotate the text. (only works with text-placement:point).",
                "default-meaning": "Text is not rotated and is displayed upright."
            },
            "rotate-displacement": {
                "css": "text-rotate-displacement",
                "type": "boolean",
                "doc": "Rotates the displacement around the placement origin by the angle given by \"orientation\".",
                "default-value": false,
                "default-meaning": "Label center is used for rotation."
            },
            "upright": {
                "css": "text-upright",
                "default-value": "auto",
                "type": [
                    "auto",
                    "auto-down",
                    "left",
                    "right",
                    "left-only",
                    "right-only"
                ],
                "expression":true,
                "default-meaning": "Text will be positioned upright automatically.",
                "doc": "How this label should be placed along lines. By default when more than half of a label's characters are upside down the label is automatically flipped to keep it upright. By changing this parameter you can prevent this \"auto-upright\" behavior. The \"auto-down\" value places text in the opposite orientation to \"auto\". The \"left\" or \"right\" settings can be used to force text to always be placed along a line in a given direction and therefore disables flipping if text appears upside down. The \"left-only\" or \"right-only\" properties also force a given direction but will discard upside down text rather than trying to flip it."
            },
            "placement": {
                "css": "text-placement",
                "default-value": "point",
                "type": [
                    "point",
                    "line",
                    "vertex",
                    "interior"
                ],
                "expression":true,
                "default-meaning": "One shield will be placed per geometry.",
                "doc": "How this label should be placed. Point placement places one label on top of a point geometry and at the centroid of a polygon or the middle point of a line, line places along lines multiple times per feature, vertex places on the vertexes of polygons, and interior attempts to place inside of a polygon."
            },
            "placement-type": {
                "css": "text-placement-type",
                "doc": "Re-position and/or re-size text to avoid overlaps. \"simple\" for basic algorithm (using text-placements string,) \"dummy\" to turn this feature off.",
                "type": [
                    "dummy",
                    "simple",
                    "list"
                ],
                "expression":true,
                "default-meaning": "Alternative placements will not be enabled.",
                "default-value": "dummy"
            },
            "placements": {
                "css": "text-placements",
                "type": "string",
                "default-meaning": "No alternative placements will be used.",
                "default-value": "",
                "expression":true,
                "doc": "If \"placement-type\" is set to \"simple\", use this \"POSITIONS,[SIZES]\" string. An example is `text-placements: \"E,NE,SE,W,NW,SW\";`."
            },
            "text-transform": {
                "css": "text-transform",
                "type": [
                    "none",
                    "uppercase",
                    "lowercase",
                    "capitalize",
                    "reverse"
                ],
                "expression":true,
                "doc": "Transform the case of the characters.",
                "default-meaning": "Transform text instance with specified function. Ignores map scale factor.",
                "default-value": "none"
            },
            "horizontal-alignment": {
                "css": "text-horizontal-alignment",
                "type": [
                    "left",
                    "middle",
                    "right",
                    "auto",
                    "adjust"
                ],
                "expression":true,
                "doc": "The text's horizontal alignment from it's centerpoint. If `placement` is set to `line`, then `adjust` can be set to auto-fit the text to the length of the path by dynamically calculating `character-spacing`.",
                "default-value": "auto",
                "default-meaning":"TODO."
            },
            "justify-alignment": {
                "css": "text-align",
                "type": [
                    "left",
                    "right",
                    "center",
                    "auto"
                ],
                "expression":true,
                "doc": "Define how text is justified.",
                "default-value": "auto",
                "default-meaning": "Auto alignment means that text will be centered by default except when using the `placement-type` parameter - in that case either right or left justification will be used automatically depending on where the text could be fit given the `text-placements` directives."
            },
            "clip": {
                "css": "text-clip",
                "type": "boolean",
                "expression":true,
                "default-value": false,
                "default-meaning": "The geometry will not be clipped to map bounds before rendering.",
                "doc": "Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases."
            },
            "simplify": {
                "css": "text-simplify",
                "type": "float",
                "expression": true,
                "default-value": 0.0,
                "default-meaning": "geometry will not be simplified.",
                "doc": "Simplify the geometries used for text placement by the given tolerance."
            },
            "simplify-algorithm": {
                "css": "text-simplify-algorithm",
                "type": ["radial-distance",
                         "zhao-saalfeld",
                         "visvalingam-whyatt"
                        ],
                "expression": true,
                "default-value": "radial-distance",
                "default-meaning": "The geometry will be simplified using the radial distance algorithm.",
                "doc": "Simplify the geometries used for text placement by the given algorithm."
            },
            "smooth": {
                "css": "text-smooth",
                "type": "float",
                "expression": true,
                "default-value": 0.0,
                "default-meaning": "No smoothing.",
                "range": "0-1",
                "doc": "Smooths out the angles of the geometry used for text placement. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries."
            },
            "comp-op": {
                "css": "text-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            },
            "halo-comp-op": {
                "css": "text-halo-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current symbolizer on top of other symbolizer.",
                "doc": "Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.",
                "type": ["clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ],
                "expression":true
            },
            "font-feature-settings": {
                "css": "text-font-feature-settings",
                "type": "string",
                "default-value": "",
                "default-meaning": "Default set of typographic features recommended by OpenType specification. Ligatures are turned off by default when `character-spacing` is greater than zero.",
                "doc": "Comma separated list of OpenType typographic features. The syntax and semantics conforms to `font-feature-settings` from W3C CSS."
            },
            "largest-bbox-only": {
                "css": "text-largest-bbox-only",
                "type": "boolean",
                "expression": true,
                "default-value": true,
                "default-meaning": "For multipolygons only polygon with largest bbox area is labeled (does not apply to other geometries).",
                "doc": "Controls default labeling behavior on multipolygons. The default is true and means that only the polygon with largest bbox is labeled.",
                "status": "experimental"
            }
        },
        "building": {
            "fill": {
                "css": "building-fill",
                "expression":true,
                "type":"color",
                "default-value": "The color gray will be used for fill.",
                "default-meaning": "Gray and fully opaque (alpha = 1), same as rgb(128,128,128) or rgba(128,128,128,1).",
                "doc": "The color of the buildings fill. Note: 0.8 will be used to multiply each color component to auto-generate a darkened wall color."
            },
            "fill-opacity": {
                "css": "building-fill-opacity",
                "type": "float",
                "expression":true,
                "doc": "The opacity of the building as a whole, including all walls.",
                "default-value": 1.0,
                "default-meaning": "Color is fully opaque."
            },
            "height": {
                "css": "building-height",
                "doc": "The height of the building in pixels.",
                "type": "float",
                "expression":true,
                "default-value": 0.0,
                "default-meaning": "Buildings will not have a visual height and will instead look like flat polygons."
            }
        },
        "debug": {
            "mode": {
                "css": "debug-mode",
                "type": [
                    "collision",
                    "vertex"
                ],
                "default-value": "collision",
                "doc": "The mode for debug rendering.",
                "expression":true,
                "default-meaning": "The otherwise invisible collision boxes will be rendered as squares on the map."
            }
        },
        "dot": {
            "fill": {
                "css": "dot-fill",
                "default-value": "gray",
                "doc": "The color of the area of the dot.",
                "type": "color",
                "expression":true,
                "default-meaning": "The dot fill color is gray."
            },
            "opacity": {
                "css": "dot-opacity",
                "doc": "The overall opacity of the dot.",
                "default-value": 1.0,
                "default-meaning": "The opacity of the dot.",
                "type": "float",
                "expression":true
            },
            "width": {
                "css": "dot-width",
                "default-value": 1.0,
                "doc": "The width of the dot in pixels.",
                "type": "float",
                "expression":true,
                "default-meaning": "The marker width is 1 pixel."
            },
            "height": {
                "css": "dot-height",
                "default-value": 1.0,
                "doc": "The height of the dot in pixels.",
                "type": "float",
                "expression":true,
                "default-meaning": "The marker height is 1 pixels."
            },
            "comp-op": {
                "css": "dot-comp-op",
                "default-value": "src-over",
                "default-meaning": "Add the current layer on top of other layers.",
                "doc": "Composite operation. This defines how this layer should behave relative to layers atop or below it.",
                "type": [
                    "clear",
                    "src",
                    "dst",
                    "src-over",
                    "dst-over",
                    "src-in",
                    "dst-in",
                    "src-out",
                    "dst-out",
                    "src-atop",
                    "dst-atop",
                    "xor",
                    "plus",
                    "minus",
                    "multiply",
                    "divide",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "linear-dodge",
                    "linear-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "contrast",
                    "invert",
                    "invert-rgb",
                    "grain-merge",
                    "grain-extract",
                    "hue",
                    "saturation",
                    "color",
                    "value"
                ]
            }
        }
    },
    "colors": {
        "aliceblue":  [240, 248, 255],
        "antiquewhite":  [250, 235, 215],
        "aqua":  [0, 255, 255],
        "aquamarine":  [127, 255, 212],
        "azure":  [240, 255, 255],
        "beige":  [245, 245, 220],
        "bisque":  [255, 228, 196],
        "black":  [0, 0, 0],
        "blanchedalmond":  [255,235,205],
        "blue":  [0, 0, 255],
        "blueviolet":  [138, 43, 226],
        "brown":  [165, 42, 42],
        "burlywood":  [222, 184, 135],
        "cadetblue":  [95, 158, 160],
        "chartreuse":  [127, 255, 0],
        "chocolate":  [210, 105, 30],
        "coral":  [255, 127, 80],
        "cornflowerblue":  [100, 149, 237],
        "cornsilk":  [255, 248, 220],
        "crimson":  [220, 20, 60],
        "cyan":  [0, 255, 255],
        "darkblue":  [0, 0, 139],
        "darkcyan":  [0, 139, 139],
        "darkgoldenrod":  [184, 134, 11],
        "darkgray":  [169, 169, 169],
        "darkgreen":  [0, 100, 0],
        "darkgrey":  [169, 169, 169],
        "darkkhaki":  [189, 183, 107],
        "darkmagenta":  [139, 0, 139],
        "darkolivegreen":  [85, 107, 47],
        "darkorange":  [255, 140, 0],
        "darkorchid":  [153, 50, 204],
        "darkred":  [139, 0, 0],
        "darksalmon":  [233, 150, 122],
        "darkseagreen":  [143, 188, 143],
        "darkslateblue":  [72, 61, 139],
        "darkslategrey":  [47, 79, 79],
        "darkturquoise":  [0, 206, 209],
        "darkviolet":  [148, 0, 211],
        "deeppink":  [255, 20, 147],
        "deepskyblue":  [0, 191, 255],
        "dimgray":  [105, 105, 105],
        "dimgrey":  [105, 105, 105],
        "dodgerblue":  [30, 144, 255],
        "firebrick":  [178, 34, 34],
        "floralwhite":  [255, 250, 240],
        "forestgreen":  [34, 139, 34],
        "fuchsia":  [255, 0, 255],
        "gainsboro":  [220, 220, 220],
        "ghostwhite":  [248, 248, 255],
        "gold":  [255, 215, 0],
        "goldenrod":  [218, 165, 32],
        "gray":  [128, 128, 128],
        "grey":  [128, 128, 128],
        "green":  [0, 128, 0],
        "greenyellow":  [173, 255, 47],
        "honeydew":  [240, 255, 240],
        "hotpink":  [255, 105, 180],
        "indianred":  [205, 92, 92],
        "indigo":  [75, 0, 130],
        "ivory":  [255, 255, 240],
        "khaki":  [240, 230, 140],
        "lavender":  [230, 230, 250],
        "lavenderblush":  [255, 240, 245],
        "lawngreen":  [124, 252, 0],
        "lemonchiffon":  [255, 250, 205],
        "lightblue":  [173, 216, 230],
        "lightcoral":  [240, 128, 128],
        "lightcyan":  [224, 255, 255],
        "lightgoldenrodyellow":  [250, 250, 210],
        "lightgray":  [211, 211, 211],
        "lightgreen":  [144, 238, 144],
        "lightgrey":  [211, 211, 211],
        "lightpink":  [255, 182, 193],
        "lightsalmon":  [255, 160, 122],
        "lightseagreen":  [32, 178, 170],
        "lightskyblue":  [135, 206, 250],
        "lightslategray":  [119, 136, 153],
        "lightslategrey":  [119, 136, 153],
        "lightsteelblue":  [176, 196, 222],
        "lightyellow":  [255, 255, 224],
        "lime":  [0, 255, 0],
        "limegreen":  [50, 205, 50],
        "linen":  [250, 240, 230],
        "magenta":  [255, 0, 255],
        "maroon":  [128, 0, 0],
        "mediumaquamarine":  [102, 205, 170],
        "mediumblue":  [0, 0, 205],
        "mediumorchid":  [186, 85, 211],
        "mediumpurple":  [147, 112, 219],
        "mediumseagreen":  [60, 179, 113],
        "mediumslateblue":  [123, 104, 238],
        "mediumspringgreen":  [0, 250, 154],
        "mediumturquoise":  [72, 209, 204],
        "mediumvioletred":  [199, 21, 133],
        "midnightblue":  [25, 25, 112],
        "mintcream":  [245, 255, 250],
        "mistyrose":  [255, 228, 225],
        "moccasin":  [255, 228, 181],
        "navajowhite":  [255, 222, 173],
        "navy":  [0, 0, 128],
        "oldlace":  [253, 245, 230],
        "olive":  [128, 128, 0],
        "olivedrab":  [107, 142, 35],
        "orange":  [255, 165, 0],
        "orangered":  [255, 69, 0],
        "orchid":  [218, 112, 214],
        "palegoldenrod":  [238, 232, 170],
        "palegreen":  [152, 251, 152],
        "paleturquoise":  [175, 238, 238],
        "palevioletred":  [219, 112, 147],
        "papayawhip":  [255, 239, 213],
        "peachpuff":  [255, 218, 185],
        "peru":  [205, 133, 63],
        "pink":  [255, 192, 203],
        "plum":  [221, 160, 221],
        "powderblue":  [176, 224, 230],
        "purple":  [128, 0, 128],
        "red":  [255, 0, 0],
        "rosybrown":  [188, 143, 143],
        "royalblue":  [65, 105, 225],
        "saddlebrown":  [139, 69, 19],
        "salmon":  [250, 128, 114],
        "sandybrown":  [244, 164, 96],
        "seagreen":  [46, 139, 87],
        "seashell":  [255, 245, 238],
        "sienna":  [160, 82, 45],
        "silver":  [192, 192, 192],
        "skyblue":  [135, 206, 235],
        "slateblue":  [106, 90, 205],
        "slategray":  [112, 128, 144],
        "slategrey":  [112, 128, 144],
        "snow":  [255, 250, 250],
        "springgreen":  [0, 255, 127],
        "steelblue":  [70, 130, 180],
        "tan":  [210, 180, 140],
        "teal":  [0, 128, 128],
        "thistle":  [216, 191, 216],
        "tomato":  [255, 99, 71],
        "turquoise":  [64, 224, 208],
        "violet":  [238, 130, 238],
        "wheat":  [245, 222, 179],
        "white":  [255, 255, 255],
        "whitesmoke":  [245, 245, 245],
        "yellow":  [255, 255, 0],
        "yellowgreen":  [154, 205, 50],
        "transparent":  [0, 0, 0, 0]
    },
    "filter": {
        "value": [
            "true",
            "false",
            "null",
            "point",
            "linestring",
            "polygon",
            "collection"
        ]
    }
}

module.exports = {
  version: {
    latest: _mapnik_reference_latest,
    '3.0.0': _mapnik_reference_latest
  }
};
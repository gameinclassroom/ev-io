// threejs.org/license
(function(l, ua) {
    "object" === typeof exports && "undefined" !== typeof module ? ua(exports) : "function" === typeof define && define.amd ? define(["exports"], ua) : (l = l || self,
    ua(l.THREE = {}))
}
)(this, function(l) {
    function ua() {}
    function v(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }
    function xa() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    function V(a, b, c, d, e, f, g, h, k, m) {
        Object.defineProperty(this, "id", {
            value: hj++
        });
        this.uuid = M.generateUUID();
        this.name = "";
        this.image = void 0 !== a ? a : V.DEFAULT_IMAGE;
        this.mipmaps = [];
        this.mapping = void 0 !== b ? b : V.DEFAULT_MAPPING;
        this.wrapS = void 0 !== c ? c : 1001;
        this.wrapT = void 0 !== d ? d : 1001;
        this.magFilter = void 0 !== e ? e : 1006;
        this.minFilter = void 0 !== f ? f : 1008;
        this.anisotropy = void 0 !== k ? k : 1;
        this.format = void 0 !== g ? g : 1023;
        this.internalFormat = null;
        this.type = void 0 !== h ? h : 1009;
        this.offset = new v(0,0);
        this.repeat = new v(1,1);
        this.center = new v(0,0);
        this.rotation = 0;
        this.matrixAutoUpdate = !0;
        this.matrix = new xa;
        this.generateMipmaps = !0;
        this.premultiplyAlpha = !1;
        this.flipY = !0;
        this.unpackAlignment = 4;
        this.encoding = void 0 !== m ? m : 3E3;
        this.version = 0;
        this.onUpdate = null
    }
    function ca(a, b, c, d) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0;
        this.w = void 0 !== d ? d : 1
    }
    function za(a, b, c) {
        this.width = a;
        this.height = b;
        this.scissor = new ca(0,0,a,b);
        this.scissorTest = !1;
        this.viewport = new ca(0,0,a,b);
        c = c || {};
        this.texture = new V(void 0,c.mapping,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);
        this.texture.image = {};
        this.texture.image.width = a;
        this.texture.image.height = b;
        this.texture.generateMipmaps = void 0 !== c.generateMipmaps ? c.generateMipmaps : !1;
        this.texture.minFilter = void 0 !== c.minFilter ? c.minFilter : 1006;
        this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
        this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
        this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null
    }
    function Xf(a, b, c) {
        za.call(this, a, b, c);
        this.samples = 4
    }
    function la(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._w = void 0 !== d ? d : 1
    }
    function n(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    }
    function P() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    function Ub(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._order = d || Ub.DefaultOrder
    }
    function Ce() {
        this.mask = 1
    }
    function E() {
        Object.defineProperty(this, "id", {
            value: ij++
        });
        this.uuid = M.generateUUID();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = E.DefaultUp.clone();
        var a = new n
          , b = new Ub
          , c = new la
          , d = new n(1,1,1);
        b._onChange(function() {
            c.setFromEuler(b, !1)
        });
        c._onChange(function() {
            b.setFromQuaternion(c, void 0, !1)
        });
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: a
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: b
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: c
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: d
            },
            modelViewMatrix: {
                value: new P
            },
            normalMatrix: {
                value: new xa
            }
        });
        this.matrix = new P;
        this.matrixWorld = new P;
        this.matrixAutoUpdate = E.DefaultMatrixAutoUpdate;
        this.matrixWorldNeedsUpdate = !1;
        this.layers = new Ce;
        this.visible = !0;
        this.receiveShadow = this.castShadow = !1;
        this.frustumCulled = !0;
        this.renderOrder = 0;
        this.userData = {}
    }
    function ob() {
        E.call(this);
        this.type = "Scene";
        this.overrideMaterial = this.fog = this.environment = this.background = null;
        this.autoUpdate = !0;
        "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    function Sa(a, b) {
        this.min = void 0 !== a ? a : new n(Infinity,Infinity,Infinity);
        this.max = void 0 !== b ? b : new n(-Infinity,-Infinity,-Infinity)
    }
    function Yf(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = a.length - 3; g <= f; g += 3) {
            Vb.fromArray(a, g);
            var h = e.x * Math.abs(Vb.x) + e.y * Math.abs(Vb.y) + e.z * Math.abs(Vb.z)
              , k = b.dot(Vb)
              , m = c.dot(Vb)
              , z = d.dot(Vb);
            if (Math.max(-Math.max(k, m, z), Math.min(k, m, z)) > h)
                return !1
        }
        return !0
    }
    function cb(a, b) {
        this.center = void 0 !== a ? a : new n;
        this.radius = void 0 !== b ? b : -1
    }
    function Wb(a, b) {
        this.origin = void 0 !== a ? a : new n;
        this.direction = void 0 !== b ? b : new n(0,0,-1)
    }
    function Ta(a, b) {
        this.normal = void 0 !== a ? a : new n(1,0,0);
        this.constant = void 0 !== b ? b : 0
    }
    function wa(a, b, c) {
        this.a = void 0 !== a ? a : new n;
        this.b = void 0 !== b ? b : new n;
        this.c = void 0 !== c ? c : new n
    }
    function A(a, b, c) {
        return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c)
    }
    function Zf(a, b, c) {
        0 > c && (c += 1);
        1 < c && --c;
        return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
    }
    function $f(a) {
        return .04045 > a ? .0773993808 * a : Math.pow(.9478672986 * a + .0521327014, 2.4)
    }
    function ag(a) {
        return .0031308 > a ? 12.92 * a : 1.055 * Math.pow(a, .41666) - .055
    }
    function yc(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.normal = d && d.isVector3 ? d : new n;
        this.vertexNormals = Array.isArray(d) ? d : [];
        this.color = e && e.isColor ? e : new A;
        this.vertexColors = Array.isArray(e) ? e : [];
        this.materialIndex = void 0 !== f ? f : 0
    }
    function J() {
        Object.defineProperty(this, "id", {
            value: jj++
        });
        this.uuid = M.generateUUID();
        this.name = "";
        this.type = "Material";
        this.fog = !0;
        this.blending = 1;
        this.side = 0;
        this.vertexColors = this.flatShading = !1;
        this.opacity = 1;
        this.transparent = !1;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
        this.depthFunc = 3;
        this.depthWrite = this.depthTest = !0;
        this.stencilWriteMask = 255;
        this.stencilFunc = 519;
        this.stencilRef = 0;
        this.stencilFuncMask = 255;
        this.stencilZPass = this.stencilZFail = this.stencilFail = 7680;
        this.stencilWrite = !1;
        this.clippingPlanes = null;
        this.clipShadows = this.clipIntersection = !1;
        this.shadowSide = null;
        this.colorWrite = !0;
        this.precision = null;
        this.polygonOffset = !1;
        this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
        this.dithering = !1;
        this.alphaTest = 0;
        this.premultipliedAlpha = !1;
        this.toneMapped = this.visible = !0;
        this.userData = {};
        this.version = 0
    }
    function Na(a) {
        J.call(this);
        this.type = "MeshBasicMaterial";
        this.color = new A(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function N(a, b, c) {
        if (Array.isArray(a))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "";
        this.array = a;
        this.itemSize = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.normalized = !0 === c;
        this.usage = 35044;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.version = 0
    }
    function xd(a, b, c) {
        N.call(this, new Int8Array(a), b, c)
    }
    function yd(a, b, c) {
        N.call(this, new Uint8Array(a), b, c)
    }
    function zd(a, b, c) {
        N.call(this, new Uint8ClampedArray(a), b, c)
    }
    function Ad(a, b, c) {
        N.call(this, new Int16Array(a), b, c)
    }
    function Xb(a, b, c) {
        N.call(this, new Uint16Array(a), b, c)
    }
    function Bd(a, b, c) {
        N.call(this, new Int32Array(a), b, c)
    }
    function Yb(a, b, c) {
        N.call(this, new Uint32Array(a), b, c)
    }
    function y(a, b, c) {
        N.call(this, new Float32Array(a), b, c)
    }
    function Cd(a, b, c) {
        N.call(this, new Float64Array(a), b, c)
    }
    function uh() {
        this.vertices = [];
        this.normals = [];
        this.colors = [];
        this.uvs = [];
        this.uvs2 = [];
        this.groups = [];
        this.morphTargets = {};
        this.skinWeights = [];
        this.skinIndices = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }
    function vh(a) {
        if (0 === a.length)
            return -Infinity;
        for (var b = a[0], c = 1, d = a.length; c < d; ++c)
            a[c] > b && (b = a[c]);
        return b
    }
    function B() {
        Object.defineProperty(this, "id", {
            value: kj += 2
        });
        this.uuid = M.generateUUID();
        this.name = "";
        this.type = "BufferGeometry";
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.morphTargetsRelative = !1;
        this.groups = [];
        this.boundingSphere = this.boundingBox = null;
        this.drawRange = {
            start: 0,
            count: Infinity
        };
        this.userData = {}
    }
    function ja(a, b) {
        E.call(this);
        this.type = "Mesh";
        this.geometry = void 0 !== a ? a : new B;
        this.material = void 0 !== b ? b : new Na;
        this.updateMorphTargets()
    }
    function wh(a, b, c, d, e, f, g, h) {
        if (null === (1 === b.side ? d.intersectTriangle(g, f, e, !0, h) : d.intersectTriangle(e, f, g, 2 !== b.side, h)))
            return null;
        De.copy(h);
        De.applyMatrix4(a.matrixWorld);
        b = c.ray.origin.distanceTo(De);
        return b < c.near || b > c.far ? null : {
            distance: b,
            point: De.clone(),
            object: a
        }
    }
    function Ee(a, b, c, d, e, f, g, h, k, m, z, p) {
        Cb.fromBufferAttribute(e, m);
        Db.fromBufferAttribute(e, z);
        Eb.fromBufferAttribute(e, p);
        e = a.morphTargetInfluences;
        if (b.morphTargets && f && e) {
            Fe.set(0, 0, 0);
            Ge.set(0, 0, 0);
            He.set(0, 0, 0);
            for (var u = 0, r = f.length; u < r; u++) {
                var l = e[u]
                  , t = f[u];
                0 !== l && (bg.fromBufferAttribute(t, m),
                cg.fromBufferAttribute(t, z),
                dg.fromBufferAttribute(t, p),
                g ? (Fe.addScaledVector(bg, l),
                Ge.addScaledVector(cg, l),
                He.addScaledVector(dg, l)) : (Fe.addScaledVector(bg.sub(Cb), l),
                Ge.addScaledVector(cg.sub(Db), l),
                He.addScaledVector(dg.sub(Eb), l)))
            }
            Cb.add(Fe);
            Db.add(Ge);
            Eb.add(He)
        }
        a.isSkinnedMesh && (a.boneTransform(m, Cb),
        a.boneTransform(z, Db),
        a.boneTransform(p, Eb));
        if (a = wh(a, b, c, d, Cb, Db, Eb, Dd))
            h && (zc.fromBufferAttribute(h, m),
            Ac.fromBufferAttribute(h, z),
            Bc.fromBufferAttribute(h, p),
            a.uv = wa.getUV(Dd, Cb, Db, Eb, zc, Ac, Bc, new v)),
            k && (zc.fromBufferAttribute(k, m),
            Ac.fromBufferAttribute(k, z),
            Bc.fromBufferAttribute(k, p),
            a.uv2 = wa.getUV(Dd, Cb, Db, Eb, zc, Ac, Bc, new v)),
            h = new yc(m,z,p),
            wa.getNormal(Cb, Db, Eb, h.normal),
            a.face = h;
        return a
    }
    function O() {
        Object.defineProperty(this, "id", {
            value: lj += 2
        });
        this.uuid = M.generateUUID();
        this.name = "";
        this.type = "Geometry";
        this.vertices = [];
        this.colors = [];
        this.faces = [];
        this.faceVertexUvs = [[]];
        this.morphTargets = [];
        this.morphNormals = [];
        this.skinWeights = [];
        this.skinIndices = [];
        this.lineDistances = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }
    function Cc(a) {
        var b = {}, c;
        for (c in a) {
            b[c] = {};
            for (var d in a[c]) {
                var e = a[c][d];
                e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e
            }
        }
        return b
    }
    function va(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = Cc(a[c]), e;
            for (e in d)
                b[e] = d[e]
        }
        return b
    }
    function Aa(a) {
        J.call(this);
        this.type = "ShaderMaterial";
        this.defines = {};
        this.uniforms = {};
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
        this.linewidth = 1;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        };
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        };
        this.index0AttributeName = void 0;
        this.uniformsNeedUpdate = !1;
        void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(a))
    }
    function db() {
        E.call(this);
        this.type = "Camera";
        this.matrixWorldInverse = new P;
        this.projectionMatrix = new P;
        this.projectionMatrixInverse = new P
    }
    function ba(a, b, c, d) {
        db.call(this);
        this.type = "PerspectiveCamera";
        this.fov = void 0 !== a ? a : 50;
        this.zoom = 1;
        this.near = void 0 !== c ? c : .1;
        this.far = void 0 !== d ? d : 2E3;
        this.focus = 10;
        this.aspect = void 0 !== b ? b : 1;
        this.view = null;
        this.filmGauge = 35;
        this.filmOffset = 0;
        this.updateProjectionMatrix()
    }
    function Dc(a, b, c, d) {
        E.call(this);
        this.type = "CubeCamera";
        var e = new ba(90,1,a,b);
        e.up.set(0, -1, 0);
        e.lookAt(new n(1,0,0));
        this.add(e);
        var f = new ba(90,1,a,b);
        f.up.set(0, -1, 0);
        f.lookAt(new n(-1,0,0));
        this.add(f);
        var g = new ba(90,1,a,b);
        g.up.set(0, 0, 1);
        g.lookAt(new n(0,1,0));
        this.add(g);
        var h = new ba(90,1,a,b);
        h.up.set(0, 0, -1);
        h.lookAt(new n(0,-1,0));
        this.add(h);
        var k = new ba(90,1,a,b);
        k.up.set(0, -1, 0);
        k.lookAt(new n(0,0,1));
        this.add(k);
        var m = new ba(90,1,a,b);
        m.up.set(0, -1, 0);
        m.lookAt(new n(0,0,-1));
        this.add(m);
        d = d || {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        };
        this.renderTarget = new Fb(c,d);
        this.renderTarget.texture.name = "CubeCamera";
        this.update = function(a, b) {
            null === this.parent && this.updateMatrixWorld();
            var c = a.getRenderTarget()
              , d = this.renderTarget
              , p = d.texture.generateMipmaps;
            d.texture.generateMipmaps = !1;
            a.setRenderTarget(d, 0);
            a.render(b, e);
            a.setRenderTarget(d, 1);
            a.render(b, f);
            a.setRenderTarget(d, 2);
            a.render(b, g);
            a.setRenderTarget(d, 3);
            a.render(b, h);
            a.setRenderTarget(d, 4);
            a.render(b, k);
            d.texture.generateMipmaps = p;
            a.setRenderTarget(d, 5);
            a.render(b, m);
            a.setRenderTarget(c)
        }
        ;
        this.clear = function(a, b, c, d) {
            for (var e = a.getRenderTarget(), f = this.renderTarget, g = 0; 6 > g; g++)
                a.setRenderTarget(f, g),
                a.clear(b, c, d);
            a.setRenderTarget(e)
        }
    }
    function Fb(a, b, c) {
        Number.isInteger(b) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
        b = c);
        za.call(this, a, a, b)
    }
    function Zb(a, b, c, d, e, f, g, h, k, m, z, p) {
        V.call(this, null, f, g, h, k, m, d, e, z, p);
        this.image = {
            data: a || null,
            width: b || 1,
            height: c || 1
        };
        this.magFilter = void 0 !== k ? k : 1003;
        this.minFilter = void 0 !== m ? m : 1003;
        this.flipY = this.generateMipmaps = !1;
        this.unpackAlignment = 1;
        this.needsUpdate = !0
    }
    function Ec(a, b, c, d, e, f) {
        this.planes = [void 0 !== a ? a : new Ta, void 0 !== b ? b : new Ta, void 0 !== c ? c : new Ta, void 0 !== d ? d : new Ta, void 0 !== e ? e : new Ta, void 0 !== f ? f : new Ta]
    }
    function xh() {
        function a(e, f) {
            !1 !== c && (d(e, f),
            b.requestAnimationFrame(a))
        }
        var b = null
          , c = !1
          , d = null;
        return {
            start: function() {
                !0 !== c && null !== d && (b.requestAnimationFrame(a),
                c = !0)
            },
            stop: function() {
                c = !1
            },
            setAnimationLoop: function(a) {
                d = a
            },
            setContext: function(a) {
                b = a
            }
        }
    }
    function mj(a, b) {
        function c(b, c) {
            var d = b.array
              , e = b.usage
              , f = a.createBuffer();
            a.bindBuffer(c, f);
            a.bufferData(c, d, e);
            b.onUploadCallback();
            c = 5126;
            d instanceof Float32Array ? c = 5126 : d instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : d instanceof Uint16Array ? c = 5123 : d instanceof Int16Array ? c = 5122 : d instanceof Uint32Array ? c = 5125 : d instanceof Int32Array ? c = 5124 : d instanceof Int8Array ? c = 5120 : d instanceof Uint8Array && (c = 5121);
            return {
                buffer: f,
                type: c,
                bytesPerElement: d.BYTES_PER_ELEMENT,
                version: b.version
            }
        }
        var d = b.isWebGL2
          , e = new WeakMap;
        return {
            get: function(a) {
                a.isInterleavedBufferAttribute && (a = a.data);
                return e.get(a)
            },
            remove: function(b) {
                b.isInterleavedBufferAttribute && (b = b.data);
                var c = e.get(b);
                c && (a.deleteBuffer(c.buffer),
                e.delete(b))
            },
            update: function(b, g) {
                b.isInterleavedBufferAttribute && (b = b.data);
                var f = e.get(b);
                if (void 0 === f)
                    e.set(b, c(b, g));
                else if (f.version < b.version) {
                    var k = b.array
                      , m = b.updateRange;
                    a.bindBuffer(g, f.buffer);
                    -1 === m.count ? a.bufferSubData(g, 0, k) : (d ? a.bufferSubData(g, m.offset * k.BYTES_PER_ELEMENT, k, m.offset, m.count) : a.bufferSubData(g, m.offset * k.BYTES_PER_ELEMENT, k.subarray(m.offset, m.offset + m.count)),
                    m.count = -1);
                    f.version = b.version
                }
            }
        }
    }
    function Ed(a, b, c, d) {
        O.call(this);
        this.type = "PlaneGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        this.fromBufferGeometry(new $b(a,b,c,d));
        this.mergeVertices()
    }
    function $b(a, b, c, d) {
        B.call(this);
        this.type = "PlaneBufferGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        a = a || 1;
        b = b || 1;
        var e = a / 2
          , f = b / 2;
        c = Math.floor(c) || 1;
        d = Math.floor(d) || 1;
        var g = c + 1
          , h = d + 1
          , k = a / c
          , m = b / d
          , z = []
          , p = []
          , u = []
          , r = [];
        for (a = 0; a < h; a++) {
            var l = a * m - f;
            for (b = 0; b < g; b++)
                p.push(b * k - e, -l, 0),
                u.push(0, 0, 1),
                r.push(b / c),
                r.push(1 - a / d)
        }
        for (a = 0; a < d; a++)
            for (b = 0; b < c; b++)
                e = b + g * (a + 1),
                f = b + 1 + g * (a + 1),
                h = b + 1 + g * a,
                z.push(b + g * a, e, h),
                z.push(e, f, h);
        this.setIndex(z);
        this.setAttribute("position", new y(p,3));
        this.setAttribute("normal", new y(u,3));
        this.setAttribute("uv", new y(r,2))
    }
    function nj(a, b, c, d) {
        function e(a, c) {
            b.buffers.color.setClear(a.r, a.g, a.b, c, d)
        }
        var f = new A(0), g = 0, h, k, m = null, z = 0, p = null;
        return {
            getClearColor: function() {
                return f
            },
            setClearColor: function(a, b) {
                f.set(a);
                g = void 0 !== b ? b : 1;
                e(f, g)
            },
            getClearAlpha: function() {
                return g
            },
            setClearAlpha: function(a) {
                g = a;
                e(f, g)
            },
            render: function(b, d, l, t) {
                d = d.background;
                l = a.xr;
                (l = l.getSession && l.getSession()) && "additive" === l.environmentBlendMode && (d = null);
                null === d ? e(f, g) : d && d.isColor && (e(d, 1),
                t = !0);
                (a.autoClear || t) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil);
                if (d && (d.isCubeTexture || d.isWebGLCubeRenderTarget || 306 === d.mapping)) {
                    void 0 === k && (k = new ja(new Fd(1,1,1),new Aa({
                        type: "BackgroundCubeMaterial",
                        uniforms: Cc(eb.cube.uniforms),
                        vertexShader: eb.cube.vertexShader,
                        fragmentShader: eb.cube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })),
                    k.geometry.deleteAttribute("normal"),
                    k.geometry.deleteAttribute("uv"),
                    k.onBeforeRender = function(a, b, c) {
                        this.matrixWorld.copyPosition(c.matrixWorld)
                    }
                    ,
                    Object.defineProperty(k.material, "envMap", {
                        get: function() {
                            return this.uniforms.envMap.value
                        }
                    }),
                    c.update(k));
                    t = d.isWebGLCubeRenderTarget ? d.texture : d;
                    k.material.uniforms.envMap.value = t;
                    k.material.uniforms.flipEnvMap.value = t.isCubeTexture ? -1 : 1;
                    if (m !== d || z !== t.version || p !== a.toneMapping)
                        k.material.needsUpdate = !0,
                        m = d,
                        z = t.version,
                        p = a.toneMapping;
                    b.unshift(k, k.geometry, k.material, 0, 0, null)
                } else if (d && d.isTexture) {
                    void 0 === h && (h = new ja(new $b(2,2),new Aa({
                        type: "BackgroundMaterial",
                        uniforms: Cc(eb.background.uniforms),
                        vertexShader: eb.background.vertexShader,
                        fragmentShader: eb.background.fragmentShader,
                        side: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })),
                    h.geometry.deleteAttribute("normal"),
                    Object.defineProperty(h.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }),
                    c.update(h));
                    h.material.uniforms.t2D.value = d;
                    !0 === d.matrixAutoUpdate && d.updateMatrix();
                    h.material.uniforms.uvTransform.value.copy(d.matrix);
                    if (m !== d || z !== d.version || p !== a.toneMapping)
                        h.material.needsUpdate = !0,
                        m = d,
                        z = d.version,
                        p = a.toneMapping;
                    b.unshift(h, h.geometry, h.material, 0, 0, null)
                }
            }
        }
    }
    function oj(a, b, c, d) {
        var e = d.isWebGL2, f;
        this.setMode = function(a) {
            f = a
        }
        ;
        this.render = function(b, d) {
            a.drawArrays(f, b, d);
            c.update(d, f)
        }
        ;
        this.renderInstances = function(d, h, k, m) {
            if (0 !== m) {
                if (e) {
                    d = a;
                    var g = "drawArraysInstanced"
                } else if (d = b.get("ANGLE_instanced_arrays"),
                g = "drawArraysInstancedANGLE",
                null === d) {
                    console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    return
                }
                d[g](f, h, k, m);
                c.update(k, f, m)
            }
        }
    }
    function pj(a, b, c) {
        function d(b) {
            if ("highp" === b) {
                if (0 < a.getShaderPrecisionFormat(35633, 36338).precision && 0 < a.getShaderPrecisionFormat(35632, 36338).precision)
                    return "highp";
                b = "mediump"
            }
            return "mediump" === b && 0 < a.getShaderPrecisionFormat(35633, 36337).precision && 0 < a.getShaderPrecisionFormat(35632, 36337).precision ? "mediump" : "lowp"
        }
        var e, f = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext || "undefined" !== typeof WebGL2ComputeRenderingContext && a instanceof WebGL2ComputeRenderingContext, g = void 0 !== c.precision ? c.precision : "highp", h = d(g);
        h !== g && (console.warn("THREE.WebGLRenderer:", g, "not supported, using", h, "instead."),
        g = h);
        c = !0 === c.logarithmicDepthBuffer;
        h = a.getParameter(34930);
        var k = a.getParameter(35660)
          , m = a.getParameter(3379)
          , z = a.getParameter(34076)
          , p = a.getParameter(34921)
          , l = a.getParameter(36347)
          , r = a.getParameter(36348)
          , q = a.getParameter(36349)
          , t = 0 < k
          , n = f || !!b.get("OES_texture_float")
          , x = t && n
          , w = f ? a.getParameter(36183) : 0;
        return {
            isWebGL2: f,
            getMaxAnisotropy: function() {
                if (void 0 !== e)
                    return e;
                var c = b.get("EXT_texture_filter_anisotropic");
                return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: d,
            precision: g,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: k,
            maxTextureSize: m,
            maxCubemapSize: z,
            maxAttributes: p,
            maxVertexUniforms: l,
            maxVaryings: r,
            maxFragmentUniforms: q,
            vertexTextures: t,
            floatFragmentTextures: n,
            floatVertexTextures: x,
            maxSamples: w
        }
    }
    function qj() {
        function a() {
            m.value !== d && (m.value = d,
            m.needsUpdate = 0 < e);
            c.numPlanes = e;
            c.numIntersection = 0
        }
        function b(a, b, d, e) {
            var f = null !== a ? a.length : 0
              , g = null;
            if (0 !== f) {
                g = m.value;
                if (!0 !== e || null === g) {
                    e = d + 4 * f;
                    b = b.matrixWorldInverse;
                    k.getNormalMatrix(b);
                    if (null === g || g.length < e)
                        g = new Float32Array(e);
                    for (e = 0; e !== f; ++e,
                    d += 4)
                        h.copy(a[e]).applyMatrix4(b, k),
                        h.normal.toArray(g, d),
                        g[d + 3] = h.constant
                }
                m.value = g;
                m.needsUpdate = !0
            }
            c.numPlanes = f;
            c.numIntersection = 0;
            return g
        }
        var c = this
          , d = null
          , e = 0
          , f = !1
          , g = !1
          , h = new Ta
          , k = new xa
          , m = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = m;
        this.numIntersection = this.numPlanes = 0;
        this.init = function(a, c, g) {
            var h = 0 !== a.length || c || 0 !== e || f;
            f = c;
            d = b(a, g, 0);
            e = a.length;
            return h
        }
        ;
        this.beginShadows = function() {
            g = !0;
            b(null)
        }
        ;
        this.endShadows = function() {
            g = !1;
            a()
        }
        ;
        this.setState = function(c, h, k, l, q, t) {
            if (!f || null === c || 0 === c.length || g && !k)
                g ? b(null) : a();
            else {
                k = g ? 0 : e;
                var p = 4 * k
                  , z = q.clippingState || null;
                m.value = z;
                z = b(c, l, p, t);
                for (c = 0; c !== p; ++c)
                    z[c] = d[c];
                q.clippingState = z;
                this.numIntersection = h ? this.numPlanes : 0;
                this.numPlanes += k
            }
        }
    }
    function rj(a) {
        var b = {};
        return {
            get: function(c) {
                if (void 0 !== b[c])
                    return b[c];
                switch (c) {
                case "WEBGL_depth_texture":
                    var d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    d = a.getExtension(c)
                }
                null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
                return b[c] = d
            }
        }
    }
    function sj(a, b, c) {
        function d(a) {
            var e = a.target;
            a = f.get(e);
            null !== a.index && b.remove(a.index);
            for (var h in a.attributes)
                b.remove(a.attributes[h]);
            e.removeEventListener("dispose", d);
            f.delete(e);
            if (h = g.get(a))
                b.remove(h),
                g.delete(a);
            c.memory.geometries--
        }
        function e(a) {
            var c = []
              , d = a.index
              , e = a.attributes.position;
            if (null !== d) {
                var f = d.array;
                d = d.version;
                e = 0;
                for (var h = f.length; e < h; e += 3) {
                    var l = f[e + 0]
                      , q = f[e + 1]
                      , t = f[e + 2];
                    c.push(l, q, q, t, t, l)
                }
            } else
                for (f = e.array,
                d = e.version,
                e = 0,
                h = f.length / 3 - 1; e < h; e += 3)
                    l = e + 0,
                    q = e + 1,
                    t = e + 2,
                    c.push(l, q, q, t, t, l);
            c = new (65535 < vh(c) ? Yb : Xb)(c,1);
            c.version = d;
            b.update(c, 34963);
            (f = g.get(a)) && b.remove(f);
            g.set(a, c)
        }
        var f = new WeakMap
          , g = new WeakMap;
        return {
            get: function(a, b) {
                var e = f.get(b);
                if (e)
                    return e;
                b.addEventListener("dispose", d);
                b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new B).setFromObject(a)),
                e = b._bufferGeometry);
                f.set(b, e);
                c.memory.geometries++;
                return e
            },
            update: function(a) {
                var c = a.index
                  , d = a.attributes;
                null !== c && b.update(c, 34963);
                for (var e in d)
                    b.update(d[e], 34962);
                a = a.morphAttributes;
                for (e in a) {
                    c = a[e];
                    d = 0;
                    for (var f = c.length; d < f; d++)
                        b.update(c[d], 34962)
                }
            },
            getWireframeAttribute: function(a) {
                var b = g.get(a);
                if (b) {
                    var c = a.index;
                    null !== c && b.version < c.version && e(a)
                } else
                    e(a);
                return g.get(a)
            }
        }
    }
    function tj(a, b, c, d) {
        var e = d.isWebGL2, f, g, h;
        this.setMode = function(a) {
            f = a
        }
        ;
        this.setIndex = function(a) {
            g = a.type;
            h = a.bytesPerElement
        }
        ;
        this.render = function(b, d) {
            a.drawElements(f, d, g, b * h);
            c.update(d, f)
        }
        ;
        this.renderInstances = function(d, m, z, p) {
            if (0 !== p) {
                if (e) {
                    d = a;
                    var k = "drawElementsInstanced"
                } else if (d = b.get("ANGLE_instanced_arrays"),
                k = "drawElementsInstancedANGLE",
                null === d) {
                    console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    return
                }
                d[k](f, z, g, m * h, p);
                c.update(z, f, p)
            }
        }
    }
    function uj(a) {
        var b = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: b,
            programs: null,
            autoReset: !0,
            reset: function() {
                b.frame++;
                b.calls = 0;
                b.triangles = 0;
                b.points = 0;
                b.lines = 0
            },
            update: function(a, d, e) {
                e = e || 1;
                b.calls++;
                switch (d) {
                case 4:
                    b.triangles += a / 3 * e;
                    break;
                case 1:
                    b.lines += a / 2 * e;
                    break;
                case 3:
                    b.lines += e * (a - 1);
                    break;
                case 2:
                    b.lines += e * a;
                    break;
                case 0:
                    b.points += e * a;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", d)
                }
            }
        }
    }
    function vj(a, b) {
        return Math.abs(b[1]) - Math.abs(a[1])
    }
    function wj(a) {
        var b = {}
          , c = new Float32Array(8);
        return {
            update: function(d, e, f, g) {
                var h = d.morphTargetInfluences
                  , k = void 0 === h ? 0 : h.length;
                d = b[e.id];
                if (void 0 === d) {
                    d = [];
                    for (var m = 0; m < k; m++)
                        d[m] = [m, 0];
                    b[e.id] = d
                }
                var z = f.morphTargets && e.morphAttributes.position;
                f = f.morphNormals && e.morphAttributes.normal;
                for (m = 0; m < k; m++) {
                    var p = d[m];
                    0 !== p[1] && (z && e.deleteAttribute("morphTarget" + m),
                    f && e.deleteAttribute("morphNormal" + m))
                }
                for (m = 0; m < k; m++)
                    p = d[m],
                    p[0] = m,
                    p[1] = h[m];
                d.sort(vj);
                for (m = h = 0; 8 > m; m++) {
                    if (p = d[m])
                        if (k = p[0],
                        p = p[1]) {
                            z && e.setAttribute("morphTarget" + m, z[k]);
                            f && e.setAttribute("morphNormal" + m, f[k]);
                            c[m] = p;
                            h += p;
                            continue
                        }
                    c[m] = 0
                }
                e = e.morphTargetsRelative ? 1 : 1 - h;
                g.getUniforms().setValue(a, "morphTargetBaseInfluence", e);
                g.getUniforms().setValue(a, "morphTargetInfluences", c)
            }
        }
    }
    function xj(a, b, c, d) {
        var e = new WeakMap;
        return {
            update: function(a) {
                var f = d.render.frame
                  , h = a.geometry
                  , k = b.get(a, h);
                e.get(k) !== f && (h.isGeometry && k.updateFromObject(a),
                b.update(k),
                e.set(k, f));
                a.isInstancedMesh && c.update(a.instanceMatrix, 34962);
                return k
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }
    function pb(a, b, c, d, e, f, g, h, k, m) {
        a = void 0 !== a ? a : [];
        V.call(this, a, void 0 !== b ? b : 301, c, d, e, f, void 0 !== g ? g : 1022, h, k, m);
        this.flipY = !1
    }
    function Fc(a, b, c, d) {
        V.call(this, null);
        this.image = {
            data: a || null,
            width: b || 1,
            height: c || 1,
            depth: d || 1
        };
        this.minFilter = this.magFilter = 1003;
        this.wrapR = 1001;
        this.flipY = this.generateMipmaps = !1;
        this.needsUpdate = !0
    }
    function Gc(a, b, c, d) {
        V.call(this, null);
        this.image = {
            data: a || null,
            width: b || 1,
            height: c || 1,
            depth: d || 1
        };
        this.minFilter = this.magFilter = 1003;
        this.wrapR = 1001;
        this.flipY = this.generateMipmaps = !1;
        this.needsUpdate = !0
    }
    function Hc(a, b, c) {
        var d = a[0];
        if (0 >= d || 0 < d)
            return a;
        var e = b * c
          , f = yh[e];
        void 0 === f && (f = new Float32Array(e),
        yh[e] = f);
        if (0 !== b)
            for (d.toArray(f, 0),
            d = 1,
            e = 0; d !== b; ++d)
                e += c,
                a[d].toArray(f, e);
        return f
    }
    function Oa(a, b) {
        if (a.length !== b.length)
            return !1;
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] !== b[c])
                return !1;
        return !0
    }
    function Ia(a, b) {
        for (var c = 0, d = b.length; c < d; c++)
            a[c] = b[c]
    }
    function zh(a, b) {
        var c = Ah[b];
        void 0 === c && (c = new Int32Array(b),
        Ah[b] = c);
        for (var d = 0; d !== b; ++d)
            c[d] = a.allocateTextureUnit();
        return c
    }
    function yj(a, b) {
        var c = this.cache;
        c[0] !== b && (a.uniform1f(this.addr, b),
        c[0] = b)
    }
    function zj(a, b) {
        var c = this.cache;
        if (void 0 !== b.x) {
            if (c[0] !== b.x || c[1] !== b.y)
                a.uniform2f(this.addr, b.x, b.y),
                c[0] = b.x,
                c[1] = b.y
        } else
            Oa(c, b) || (a.uniform2fv(this.addr, b),
            Ia(c, b))
    }
    function Aj(a, b) {
        var c = this.cache;
        if (void 0 !== b.x) {
            if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z)
                a.uniform3f(this.addr, b.x, b.y, b.z),
                c[0] = b.x,
                c[1] = b.y,
                c[2] = b.z
        } else if (void 0 !== b.r) {
            if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b)
                a.uniform3f(this.addr, b.r, b.g, b.b),
                c[0] = b.r,
                c[1] = b.g,
                c[2] = b.b
        } else
            Oa(c, b) || (a.uniform3fv(this.addr, b),
            Ia(c, b))
    }
    function Bj(a, b) {
        var c = this.cache;
        if (void 0 !== b.x) {
            if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w)
                a.uniform4f(this.addr, b.x, b.y, b.z, b.w),
                c[0] = b.x,
                c[1] = b.y,
                c[2] = b.z,
                c[3] = b.w
        } else
            Oa(c, b) || (a.uniform4fv(this.addr, b),
            Ia(c, b))
    }
    function Cj(a, b) {
        var c = this.cache
          , d = b.elements;
        void 0 === d ? Oa(c, b) || (a.uniformMatrix2fv(this.addr, !1, b),
        Ia(c, b)) : Oa(c, d) || (Bh.set(d),
        a.uniformMatrix2fv(this.addr, !1, Bh),
        Ia(c, d))
    }
    function Dj(a, b) {
        var c = this.cache
          , d = b.elements;
        void 0 === d ? Oa(c, b) || (a.uniformMatrix3fv(this.addr, !1, b),
        Ia(c, b)) : Oa(c, d) || (Ch.set(d),
        a.uniformMatrix3fv(this.addr, !1, Ch),
        Ia(c, d))
    }
    function Ej(a, b) {
        var c = this.cache
          , d = b.elements;
        void 0 === d ? Oa(c, b) || (a.uniformMatrix4fv(this.addr, !1, b),
        Ia(c, b)) : Oa(c, d) || (Dh.set(d),
        a.uniformMatrix4fv(this.addr, !1, Dh),
        Ia(c, d))
    }
    function Fj(a, b, c) {
        var d = this.cache
          , e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e),
        d[0] = e);
        c.safeSetTexture2D(b || Eh, e)
    }
    function Gj(a, b, c) {
        var d = this.cache
          , e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e),
        d[0] = e);
        c.setTexture2DArray(b || Hj, e)
    }
    function Ij(a, b, c) {
        var d = this.cache
          , e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e),
        d[0] = e);
        c.setTexture3D(b || Jj, e)
    }
    function Kj(a, b, c) {
        var d = this.cache
          , e = c.allocateTextureUnit();
        d[0] !== e && (a.uniform1i(this.addr, e),
        d[0] = e);
        c.safeSetTextureCube(b || Fh, e)
    }
    function Lj(a, b) {
        var c = this.cache;
        c[0] !== b && (a.uniform1i(this.addr, b),
        c[0] = b)
    }
    function Mj(a, b) {
        var c = this.cache;
        Oa(c, b) || (a.uniform2iv(this.addr, b),
        Ia(c, b))
    }
    function Nj(a, b) {
        var c = this.cache;
        Oa(c, b) || (a.uniform3iv(this.addr, b),
        Ia(c, b))
    }
    function Oj(a, b) {
        var c = this.cache;
        Oa(c, b) || (a.uniform4iv(this.addr, b),
        Ia(c, b))
    }
    function Pj(a, b) {
        var c = this.cache;
        c[0] !== b && (a.uniform1ui(this.addr, b),
        c[0] = b)
    }
    function Qj(a) {
        switch (a) {
        case 5126:
            return yj;
        case 35664:
            return zj;
        case 35665:
            return Aj;
        case 35666:
            return Bj;
        case 35674:
            return Cj;
        case 35675:
            return Dj;
        case 35676:
            return Ej;
        case 5124:
        case 35670:
            return Lj;
        case 35667:
        case 35671:
            return Mj;
        case 35668:
        case 35672:
            return Nj;
        case 35669:
        case 35673:
            return Oj;
        case 5125:
            return Pj;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Fj;
        case 35679:
        case 36299:
        case 36307:
            return Ij;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Kj;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Gj
        }
    }
    function Rj(a, b) {
        a.uniform1fv(this.addr, b)
    }
    function Sj(a, b) {
        a.uniform1iv(this.addr, b)
    }
    function Tj(a, b) {
        a.uniform2iv(this.addr, b)
    }
    function Uj(a, b) {
        a.uniform3iv(this.addr, b)
    }
    function Vj(a, b) {
        a.uniform4iv(this.addr, b)
    }
    function Wj(a, b) {
        b = Hc(b, this.size, 2);
        a.uniform2fv(this.addr, b)
    }
    function Xj(a, b) {
        b = Hc(b, this.size, 3);
        a.uniform3fv(this.addr, b)
    }
    function Yj(a, b) {
        b = Hc(b, this.size, 4);
        a.uniform4fv(this.addr, b)
    }
    function Zj(a, b) {
        b = Hc(b, this.size, 4);
        a.uniformMatrix2fv(this.addr, !1, b)
    }
    function ak(a, b) {
        b = Hc(b, this.size, 9);
        a.uniformMatrix3fv(this.addr, !1, b)
    }
    function bk(a, b) {
        b = Hc(b, this.size, 16);
        a.uniformMatrix4fv(this.addr, !1, b)
    }
    function ck(a, b, c) {
        var d = b.length
          , e = zh(c, d);
        a.uniform1iv(this.addr, e);
        for (a = 0; a !== d; ++a)
            c.safeSetTexture2D(b[a] || Eh, e[a])
    }
    function dk(a, b, c) {
        var d = b.length
          , e = zh(c, d);
        a.uniform1iv(this.addr, e);
        for (a = 0; a !== d; ++a)
            c.safeSetTextureCube(b[a] || Fh, e[a])
    }
    function ek(a) {
        switch (a) {
        case 5126:
            return Rj;
        case 35664:
            return Wj;
        case 35665:
            return Xj;
        case 35666:
            return Yj;
        case 35674:
            return Zj;
        case 35675:
            return ak;
        case 35676:
            return bk;
        case 5124:
        case 35670:
            return Sj;
        case 35667:
        case 35671:
            return Tj;
        case 35668:
        case 35672:
            return Uj;
        case 35669:
        case 35673:
            return Vj;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return ck;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return dk
        }
    }
    function fk(a, b, c) {
        this.id = a;
        this.addr = c;
        this.cache = [];
        this.setValue = Qj(b.type)
    }
    function Gh(a, b, c) {
        this.id = a;
        this.addr = c;
        this.cache = [];
        this.size = b.size;
        this.setValue = ek(b.type)
    }
    function Hh(a) {
        this.id = a;
        this.seq = [];
        this.map = {}
    }
    function Gb(a, b) {
        this.seq = [];
        this.map = {};
        for (var c = a.getProgramParameter(b, 35718), d = 0; d < c; ++d) {
            var e = a.getActiveUniform(b, d)
              , f = a.getUniformLocation(b, e.name)
              , g = this
              , h = e.name
              , k = h.length;
            for (eg.lastIndex = 0; ; ) {
                var m = eg.exec(h)
                  , z = eg.lastIndex
                  , p = m[1]
                  , l = m[3];
                "]" === m[2] && (p |= 0);
                if (void 0 === l || "[" === l && z + 2 === k) {
                    h = g;
                    e = void 0 === l ? new fk(p,e,f) : new Gh(p,e,f);
                    h.seq.push(e);
                    h.map[e.id] = e;
                    break
                } else
                    l = g.map[p],
                    void 0 === l && (l = new Hh(p),
                    p = g,
                    g = l,
                    p.seq.push(g),
                    p.map[g.id] = g),
                    g = l
            }
        }
    }
    function Ih(a, b, c) {
        b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b);
        return b
    }
    function Jh(a) {
        switch (a) {
        case 3E3:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        case 3002:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD", "( value, 256.0 )"];
        case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case 3003:
            return ["LogLuv", "( value )"];
        default:
            throw Error("unsupported encoding: " + a);
        }
    }
    function Kh(a, b, c) {
        var d = a.getShaderParameter(b, 35713)
          , e = a.getShaderInfoLog(b).trim();
        if (d && "" === e)
            return "";
        a = a.getShaderSource(b).split("\n");
        for (b = 0; b < a.length; b++)
            a[b] = b + 1 + ": " + a[b];
        a = a.join("\n");
        return "THREE.WebGLShader: gl.getShaderInfoLog() " + c + "\n" + e + a
    }
    function Gd(a, b) {
        b = Jh(b);
        return "vec4 " + a + "( vec4 value ) { return " + b[0] + "ToLinear" + b[1] + "; }"
    }
    function gk(a, b) {
        b = Jh(b);
        return "vec4 " + a + "( vec4 value ) { return LinearTo" + b[0] + b[1] + "; }"
    }
    function hk(a, b) {
        switch (b) {
        case 1:
            b = "Linear";
            break;
        case 2:
            b = "Reinhard";
            break;
        case 3:
            b = "Uncharted2";
            break;
        case 4:
            b = "OptimizedCineon";
            break;
        case 5:
            b = "ACESFilmic";
            break;
        default:
            throw Error("unsupported toneMapping: " + b);
        }
        return "vec3 " + a + "( vec3 color ) { return " + b + "ToneMapping( color ); }"
    }
    function ik(a) {
        var b = [], c;
        for (c in a) {
            var d = a[c];
            !1 !== d && b.push("#define " + c + " " + d)
        }
        return b.join("\n")
    }
    function Hd(a) {
        return "" !== a
    }
    function Lh(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, b.numPointLightShadows)
    }
    function Mh(a, b) {
        return a.replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, b.numClippingPlanes - b.numClipIntersection)
    }
    function fg(a, b) {
        a = L[b];
        if (void 0 === a)
            throw Error("Can not resolve #include <" + b + ">");
        return a.replace(gg, fg)
    }
    function Nh(a, b, c, d) {
        console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");
        return hg(a, b, c, d)
    }
    function hg(a, b, c, d) {
        a = "";
        for (b = parseInt(b); b < parseInt(c); b++)
            a += d.replace(/\[ i \]/g, "[ " + b + " ]").replace(/UNROLLED_LOOP_INDEX/g, b);
        return a
    }
    function Oh(a) {
        var b = "precision " + a.precision + " float;\nprecision " + a.precision + " int;";
        "highp" === a.precision ? b += "\n#define HIGH_PRECISION" : "mediump" === a.precision ? b += "\n#define MEDIUM_PRECISION" : "lowp" === a.precision && (b += "\n#define LOW_PRECISION");
        return b
    }
    function jk(a) {
        var b = "SHADOWMAP_TYPE_BASIC";
        1 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === a.shadowMapType && (b = "SHADOWMAP_TYPE_VSM");
        return b
    }
    function kk(a) {
        var b = "ENVMAP_TYPE_CUBE";
        if (a.envMap)
            switch (a.envMapMode) {
            case 301:
            case 302:
                b = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                b = "ENVMAP_TYPE_CUBE_UV";
                break;
            case 303:
            case 304:
                b = "ENVMAP_TYPE_EQUIREC";
                break;
            case 305:
                b = "ENVMAP_TYPE_SPHERE"
            }
        return b
    }
    function lk(a) {
        var b = "ENVMAP_MODE_REFLECTION";
        if (a.envMap)
            switch (a.envMapMode) {
            case 302:
            case 304:
                b = "ENVMAP_MODE_REFRACTION"
            }
        return b
    }
    function mk(a) {
        var b = "ENVMAP_BLENDING_NONE";
        if (a.envMap)
            switch (a.combine) {
            case 0:
                b = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                b = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                b = "ENVMAP_BLENDING_ADD"
            }
        return b
    }
    function nk(a, b, c) {
        var d = a.getContext()
          , e = c.defines
          , f = c.vertexShader
          , g = c.fragmentShader
          , h = jk(c)
          , k = kk(c)
          , m = lk(c)
          , z = mk(c)
          , p = 0 < a.gammaFactor ? a.gammaFactor : 1
          , l = c.isWebGL2 ? "" : [c.extensionDerivatives || c.envMapCubeUV || c.bumpMap || c.tangentSpaceNormalMap || c.clearcoatNormalMap || c.flatShading || "physical" === c.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (c.extensionFragDepth || c.logarithmicDepthBuffer) && c.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", c.extensionDrawBuffers && c.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (c.extensionShaderTextureLOD || c.envMap) && c.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Hd).join("\n")
          , r = ik(e)
          , q = d.createProgram();
        c.isRawShaderMaterial ? (e = [r].filter(Hd).join("\n"),
        0 < e.length && (e += "\n"),
        h = [l, r].filter(Hd).join("\n"),
        0 < h.length && (h += "\n")) : (e = [Oh(c), "#define SHADER_NAME " + c.shaderName, r, c.instancing ? "#define USE_INSTANCING" : "", c.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + p, "#define MAX_BONES " + c.maxBones, c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + m : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.normalMap && c.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", c.normalMap && c.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", c.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", c.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", c.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", c.displacementMap && c.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", c.metalnessMap ? "#define USE_METALNESSMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.vertexTangents ? "#define USE_TANGENT" : "", c.vertexColors ? "#define USE_COLOR" : "", c.vertexUvs ? "#define USE_UV" : "", c.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals && !1 === c.flatShading ? "#define USE_MORPHNORMALS" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + h : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && c.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Hd).join("\n"),
        h = [l, Oh(c), "#define SHADER_NAME " + c.shaderName, r, c.alphaTest ? "#define ALPHATEST " + c.alphaTest + (c.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + p, c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.matcap ? "#define USE_MATCAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + k : "", c.envMap ? "#define " + m : "", c.envMap ? "#define " + z : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.normalMap && c.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", c.normalMap && c.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", c.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", c.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", c.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", c.metalnessMap ? "#define USE_METALNESSMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.sheen ? "#define USE_SHEEN" : "", c.vertexTangents ? "#define USE_TANGENT" : "", c.vertexColors ? "#define USE_COLOR" : "", c.vertexUvs ? "#define USE_UV" : "", c.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", c.gradientMap ? "#define USE_GRADIENTMAP" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + h : "", c.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", c.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && c.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (c.extensionShaderTextureLOD || c.envMap) && c.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== c.toneMapping ? "#define TONE_MAPPING" : "", 0 !== c.toneMapping ? L.tonemapping_pars_fragment : "", 0 !== c.toneMapping ? hk("toneMapping", c.toneMapping) : "", c.dithering ? "#define DITHERING" : "", c.outputEncoding || c.mapEncoding || c.matcapEncoding || c.envMapEncoding || c.emissiveMapEncoding || c.lightMapEncoding ? L.encodings_pars_fragment : "", c.mapEncoding ? Gd("mapTexelToLinear", c.mapEncoding) : "", c.matcapEncoding ? Gd("matcapTexelToLinear", c.matcapEncoding) : "", c.envMapEncoding ? Gd("envMapTexelToLinear", c.envMapEncoding) : "", c.emissiveMapEncoding ? Gd("emissiveMapTexelToLinear", c.emissiveMapEncoding) : "", c.lightMapEncoding ? Gd("lightMapTexelToLinear", c.lightMapEncoding) : "", c.outputEncoding ? gk("linearToOutputTexel", c.outputEncoding) : "", c.depthPacking ? "#define DEPTH_PACKING " + c.depthPacking : "", "\n"].filter(Hd).join("\n"));
        f = f.replace(gg, fg);
        f = Lh(f, c);
        f = Mh(f, c);
        g = g.replace(gg, fg);
        g = Lh(g, c);
        g = Mh(g, c);
        f = f.replace(Ph, hg).replace(Qh, Nh);
        g = g.replace(Ph, hg).replace(Qh, Nh);
        c.isWebGL2 && !c.isRawShaderMaterial && (k = !1,
        m = /^\s*#version\s+300\s+es\s*\n/,
        c.isShaderMaterial && null !== f.match(m) && null !== g.match(m) && (k = !0,
        f = f.replace(m, ""),
        g = g.replace(m, "")),
        e = "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" + e,
        h = ["#version 300 es\n\n#define varying in", k ? "" : "out highp vec4 pc_fragColor;", k ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + h);
        g = h + g;
        f = Ih(d, 35633, e + f);
        g = Ih(d, 35632, g);
        d.attachShader(q, f);
        d.attachShader(q, g);
        void 0 !== c.index0AttributeName ? d.bindAttribLocation(q, 0, c.index0AttributeName) : !0 === c.morphTargets && d.bindAttribLocation(q, 0, "position");
        d.linkProgram(q);
        if (a.debug.checkShaderErrors) {
            a = d.getProgramInfoLog(q).trim();
            k = d.getShaderInfoLog(f).trim();
            m = d.getShaderInfoLog(g).trim();
            p = z = !0;
            if (!1 === d.getProgramParameter(q, 35714))
                z = !1,
                l = Kh(d, f, "vertex"),
                r = Kh(d, g, "fragment"),
                console.error("THREE.WebGLProgram: shader error: ", d.getError(), "35715", d.getProgramParameter(q, 35715), "gl.getProgramInfoLog", a, l, r);
            else if ("" !== a)
                console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a);
            else if ("" === k || "" === m)
                p = !1;
            p && (this.diagnostics = {
                runnable: z,
                programLog: a,
                vertexShader: {
                    log: k,
                    prefix: e
                },
                fragmentShader: {
                    log: m,
                    prefix: h
                }
            })
        }
        d.deleteShader(f);
        d.deleteShader(g);
        var t;
        this.getUniforms = function() {
            void 0 === t && (t = new Gb(d,q));
            return t
        }
        ;
        var n;
        this.getAttributes = function() {
            if (void 0 === n) {
                for (var a = {}, b = d.getProgramParameter(q, 35721), c = 0; c < b; c++) {
                    var e = d.getActiveAttrib(q, c).name;
                    a[e] = d.getAttribLocation(q, e)
                }
                n = a
            }
            return n
        }
        ;
        this.destroy = function() {
            d.deleteProgram(q);
            this.program = void 0
        }
        ;
        this.name = c.shaderName;
        this.id = ok++;
        this.cacheKey = b;
        this.usedTimes = 1;
        this.program = q;
        this.vertexShader = f;
        this.fragmentShader = g;
        return this
    }
    function pk(a, b, c) {
        function d(a) {
            if (a)
                a.isTexture ? b = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
                b = a.texture.encoding);
            else
                var b = 3E3;
            return b
        }
        var e = []
          , f = c.isWebGL2
          , g = c.logarithmicDepthBuffer
          , h = c.floatVertexTextures
          , k = c.precision
          , m = c.maxVertexUniforms
          , z = c.vertexTextures
          , p = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }
          , l = "precision isWebGL2 supportsVertexTextures outputEncoding instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatMap clearcoatRoughnessMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");
        this.getParameters = function(e, l, u, n, x, w, ha) {
            var q = n.fog;
            n = e.isMeshStandardMaterial ? n.environment : null;
            n = e.envMap || n;
            var r = p[e.type];
            if (ha.isSkinnedMesh) {
                var t = ha.skeleton.bones;
                if (h)
                    t = 1024;
                else {
                    var F = Math.min(Math.floor((m - 20) / 4), t.length);
                    F < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + F + "."),
                    t = 0) : t = F
                }
            } else
                t = 0;
            null !== e.precision && (k = c.getMaxPrecision(e.precision),
            k !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", k, "instead."));
            r ? (F = eb[r],
            F = {
                name: e.type,
                uniforms: Rh.clone(F.uniforms),
                vertexShader: F.vertexShader,
                fragmentShader: F.fragmentShader
            }) : F = {
                name: e.type,
                uniforms: e.uniforms,
                vertexShader: e.vertexShader,
                fragmentShader: e.fragmentShader
            };
            e.onBeforeCompile(F, a);
            var v = a.getRenderTarget();
            return {
                isWebGL2: f,
                shaderID: r,
                shaderName: F.name,
                uniforms: F.uniforms,
                vertexShader: F.vertexShader,
                fragmentShader: F.fragmentShader,
                defines: e.defines,
                isRawShaderMaterial: e.isRawShaderMaterial,
                isShaderMaterial: e.isShaderMaterial,
                precision: k,
                instancing: !0 === ha.isInstancedMesh,
                supportsVertexTextures: z,
                outputEncoding: null !== v ? d(v.texture) : a.outputEncoding,
                map: !!e.map,
                mapEncoding: d(e.map),
                matcap: !!e.matcap,
                matcapEncoding: d(e.matcap),
                envMap: !!n,
                envMapMode: n && n.mapping,
                envMapEncoding: d(n),
                envMapCubeUV: !!n && (306 === n.mapping || 307 === n.mapping),
                lightMap: !!e.lightMap,
                lightMapEncoding: d(e.lightMap),
                aoMap: !!e.aoMap,
                emissiveMap: !!e.emissiveMap,
                emissiveMapEncoding: d(e.emissiveMap),
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                objectSpaceNormalMap: 1 === e.normalMapType,
                tangentSpaceNormalMap: 0 === e.normalMapType,
                clearcoatMap: !!e.clearcoatMap,
                clearcoatRoughnessMap: !!e.clearcoatRoughnessMap,
                clearcoatNormalMap: !!e.clearcoatNormalMap,
                displacementMap: !!e.displacementMap,
                roughnessMap: !!e.roughnessMap,
                metalnessMap: !!e.metalnessMap,
                specularMap: !!e.specularMap,
                alphaMap: !!e.alphaMap,
                gradientMap: !!e.gradientMap,
                sheen: !!e.sheen,
                combine: e.combine,
                vertexTangents: e.normalMap && e.vertexTangents,
                vertexColors: e.vertexColors,
                vertexUvs: !!e.map || !!e.bumpMap || !!e.normalMap || !!e.specularMap || !!e.alphaMap || !!e.emissiveMap || !!e.roughnessMap || !!e.metalnessMap || !!e.clearcoatMap || !!e.clearcoatRoughnessMap || !!e.clearcoatNormalMap || !!e.displacementMap,
                uvsVertexOnly: !(e.map || e.bumpMap || e.normalMap || e.specularMap || e.alphaMap || e.emissiveMap || e.roughnessMap || e.metalnessMap || e.clearcoatNormalMap) && !!e.displacementMap,
                fog: !!q,
                useFog: e.fog,
                fogExp2: q && q.isFogExp2,
                flatShading: e.flatShading,
                sizeAttenuation: e.sizeAttenuation,
                logarithmicDepthBuffer: g,
                skinning: e.skinning && 0 < t,
                maxBones: t,
                useVertexTexture: h,
                morphTargets: e.morphTargets,
                morphNormals: e.morphNormals,
                maxMorphTargets: a.maxMorphTargets,
                maxMorphNormals: a.maxMorphNormals,
                numDirLights: l.directional.length,
                numPointLights: l.point.length,
                numSpotLights: l.spot.length,
                numRectAreaLights: l.rectArea.length,
                numHemiLights: l.hemi.length,
                numDirLightShadows: l.directionalShadowMap.length,
                numPointLightShadows: l.pointShadowMap.length,
                numSpotLightShadows: l.spotShadowMap.length,
                numClippingPlanes: x,
                numClipIntersection: w,
                dithering: e.dithering,
                shadowMapEnabled: a.shadowMap.enabled && 0 < u.length,
                shadowMapType: a.shadowMap.type,
                toneMapping: e.toneMapped ? a.toneMapping : 0,
                physicallyCorrectLights: a.physicallyCorrectLights,
                premultipliedAlpha: e.premultipliedAlpha,
                alphaTest: e.alphaTest,
                doubleSided: 2 === e.side,
                flipSided: 1 === e.side,
                depthPacking: void 0 !== e.depthPacking ? e.depthPacking : !1,
                index0AttributeName: e.index0AttributeName,
                extensionDerivatives: e.extensions && e.extensions.derivatives,
                extensionFragDepth: e.extensions && e.extensions.fragDepth,
                extensionDrawBuffers: e.extensions && e.extensions.drawBuffers,
                extensionShaderTextureLOD: e.extensions && e.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: f || null !== b.get("EXT_frag_depth"),
                rendererExtensionDrawBuffers: f || null !== b.get("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: f || null !== b.get("EXT_shader_texture_lod"),
                onBeforeCompile: e.onBeforeCompile
            }
        }
        ;
        this.getProgramCacheKey = function(b) {
            var c = [];
            b.shaderID ? c.push(b.shaderID) : (c.push(b.fragmentShader),
            c.push(b.vertexShader));
            if (void 0 !== b.defines)
                for (var d in b.defines)
                    c.push(d),
                    c.push(b.defines[d]);
            if (void 0 === b.isRawShaderMaterial) {
                for (d = 0; d < l.length; d++)
                    c.push(b[l[d]]);
                c.push(a.outputEncoding);
                c.push(a.gammaFactor)
            }
            c.push(b.onBeforeCompile.toString());
            return c.join()
        }
        ;
        this.acquireProgram = function(b, c) {
            for (var d, f = 0, g = e.length; f < g; f++) {
                var h = e[f];
                if (h.cacheKey === c) {
                    d = h;
                    ++d.usedTimes;
                    break
                }
            }
            void 0 === d && (d = new nk(a,c,b),
            e.push(d));
            return d
        }
        ;
        this.releaseProgram = function(a) {
            if (0 === --a.usedTimes) {
                var b = e.indexOf(a);
                e[b] = e[e.length - 1];
                e.pop();
                a.destroy()
            }
        }
        ;
        this.programs = e
    }
    function qk() {
        var a = new WeakMap;
        return {
            get: function(b) {
                var c = a.get(b);
                void 0 === c && (c = {},
                a.set(b, c));
                return c
            },
            remove: function(b) {
                a.delete(b)
            },
            update: function(b, c, d) {
                a.get(b)[c] = d
            },
            dispose: function() {
                a = new WeakMap
            }
        }
    }
    function rk(a, b) {
        return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
    }
    function sk(a, b) {
        return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
    }
    function Sh() {
        function a(a, d, e, m, z, p) {
            var g = b[c];
            void 0 === g ? (g = {
                id: a.id,
                object: a,
                geometry: d,
                material: e,
                program: e.program || f,
                groupOrder: m,
                renderOrder: a.renderOrder,
                z: z,
                group: p
            },
            b[c] = g) : (g.id = a.id,
            g.object = a,
            g.geometry = d,
            g.material = e,
            g.program = e.program || f,
            g.groupOrder = m,
            g.renderOrder = a.renderOrder,
            g.z = z,
            g.group = p);
            c++;
            return g
        }
        var b = []
          , c = 0
          , d = []
          , e = []
          , f = {
            id: -1
        };
        return {
            opaque: d,
            transparent: e,
            init: function() {
                c = 0;
                d.length = 0;
                e.length = 0
            },
            push: function(b, c, f, m, z, p) {
                b = a(b, c, f, m, z, p);
                (!0 === f.transparent ? e : d).push(b)
            },
            unshift: function(b, c, f, m, z, p) {
                b = a(b, c, f, m, z, p);
                (!0 === f.transparent ? e : d).unshift(b)
            },
            finish: function() {
                for (var a = c, d = b.length; a < d; a++) {
                    var e = b[a];
                    if (null === e.id)
                        break;
                    e.id = null;
                    e.object = null;
                    e.geometry = null;
                    e.material = null;
                    e.program = null;
                    e.group = null
                }
            },
            sort: function(a, b) {
                1 < d.length && d.sort(a || rk);
                1 < e.length && e.sort(b || sk)
            }
        }
    }
    function tk() {
        function a(c) {
            c = c.target;
            c.removeEventListener("dispose", a);
            b.delete(c)
        }
        var b = new WeakMap;
        return {
            get: function(c, d) {
                var e = b.get(c);
                if (void 0 === e) {
                    var f = new Sh;
                    b.set(c, new WeakMap);
                    b.get(c).set(d, f);
                    c.addEventListener("dispose", a)
                } else
                    f = e.get(d),
                    void 0 === f && (f = new Sh,
                    e.set(d, f));
                return f
            },
            dispose: function() {
                b = new WeakMap
            }
        }
    }
    function uk() {
        var a = {};
        return {
            get: function(b) {
                if (void 0 !== a[b.id])
                    return a[b.id];
                switch (b.type) {
                case "DirectionalLight":
                    var c = {
                        direction: new n,
                        color: new A
                    };
                    break;
                case "SpotLight":
                    c = {
                        position: new n,
                        direction: new n,
                        color: new A,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    c = {
                        position: new n,
                        color: new A,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    c = {
                        direction: new n,
                        skyColor: new A,
                        groundColor: new A
                    };
                    break;
                case "RectAreaLight":
                    c = {
                        color: new A,
                        position: new n,
                        halfWidth: new n,
                        halfHeight: new n
                    }
                }
                return a[b.id] = c
            }
        }
    }
    function vk() {
        var a = {};
        return {
            get: function(b) {
                if (void 0 !== a[b.id])
                    return a[b.id];
                switch (b.type) {
                case "DirectionalLight":
                    var c = {
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new v
                    };
                    break;
                case "SpotLight":
                    c = {
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new v
                    };
                    break;
                case "PointLight":
                    c = {
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new v,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1E3
                    }
                }
                return a[b.id] = c
            }
        }
    }
    function wk(a, b) {
        return (b.castShadow ? 1 : 0) - (a.castShadow ? 1 : 0)
    }
    function xk() {
        for (var a = new uk, b = vk(), c = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }, d = 0; 9 > d; d++)
            c.probe.push(new n);
        var e = new n
          , f = new P
          , g = new P;
        return {
            setup: function(d, k, m) {
                for (var h = 0, p = 0, l = 0, r = 0; 9 > r; r++)
                    c.probe[r].set(0, 0, 0);
                var q = k = 0
                  , t = 0
                  , n = 0
                  , x = 0
                  , w = 0
                  , ha = 0
                  , U = 0;
                m = m.matrixWorldInverse;
                d.sort(wk);
                r = 0;
                for (var Z = d.length; r < Z; r++) {
                    var C = d[r]
                      , v = C.color
                      , ma = C.intensity
                      , Ba = C.distance
                      , Fa = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
                    if (C.isAmbientLight)
                        h += v.r * ma,
                        p += v.g * ma,
                        l += v.b * ma;
                    else if (C.isLightProbe)
                        for (Fa = 0; 9 > Fa; Fa++)
                            c.probe[Fa].addScaledVector(C.sh.coefficients[Fa], ma);
                    else if (C.isDirectionalLight) {
                        var I = a.get(C);
                        I.color.copy(C.color).multiplyScalar(C.intensity);
                        I.direction.setFromMatrixPosition(C.matrixWorld);
                        e.setFromMatrixPosition(C.target.matrixWorld);
                        I.direction.sub(e);
                        I.direction.transformDirection(m);
                        C.castShadow && (ma = C.shadow,
                        v = b.get(C),
                        v.shadowBias = ma.bias,
                        v.shadowRadius = ma.radius,
                        v.shadowMapSize = ma.mapSize,
                        c.directionalShadow[k] = v,
                        c.directionalShadowMap[k] = Fa,
                        c.directionalShadowMatrix[k] = C.shadow.matrix,
                        w++);
                        c.directional[k] = I;
                        k++
                    } else
                        C.isSpotLight ? (I = a.get(C),
                        I.position.setFromMatrixPosition(C.matrixWorld),
                        I.position.applyMatrix4(m),
                        I.color.copy(v).multiplyScalar(ma),
                        I.distance = Ba,
                        I.direction.setFromMatrixPosition(C.matrixWorld),
                        e.setFromMatrixPosition(C.target.matrixWorld),
                        I.direction.sub(e),
                        I.direction.transformDirection(m),
                        I.coneCos = Math.cos(C.angle),
                        I.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)),
                        I.decay = C.decay,
                        C.castShadow && (ma = C.shadow,
                        v = b.get(C),
                        v.shadowBias = ma.bias,
                        v.shadowRadius = ma.radius,
                        v.shadowMapSize = ma.mapSize,
                        c.spotShadow[t] = v,
                        c.spotShadowMap[t] = Fa,
                        c.spotShadowMatrix[t] = C.shadow.matrix,
                        U++),
                        c.spot[t] = I,
                        t++) : C.isRectAreaLight ? (I = a.get(C),
                        I.color.copy(v).multiplyScalar(ma),
                        I.position.setFromMatrixPosition(C.matrixWorld),
                        I.position.applyMatrix4(m),
                        g.identity(),
                        f.copy(C.matrixWorld),
                        f.premultiply(m),
                        g.extractRotation(f),
                        I.halfWidth.set(.5 * C.width, 0, 0),
                        I.halfHeight.set(0, .5 * C.height, 0),
                        I.halfWidth.applyMatrix4(g),
                        I.halfHeight.applyMatrix4(g),
                        c.rectArea[n] = I,
                        n++) : C.isPointLight ? (I = a.get(C),
                        I.position.setFromMatrixPosition(C.matrixWorld),
                        I.position.applyMatrix4(m),
                        I.color.copy(C.color).multiplyScalar(C.intensity),
                        I.distance = C.distance,
                        I.decay = C.decay,
                        C.castShadow && (ma = C.shadow,
                        v = b.get(C),
                        v.shadowBias = ma.bias,
                        v.shadowRadius = ma.radius,
                        v.shadowMapSize = ma.mapSize,
                        v.shadowCameraNear = ma.camera.near,
                        v.shadowCameraFar = ma.camera.far,
                        c.pointShadow[q] = v,
                        c.pointShadowMap[q] = Fa,
                        c.pointShadowMatrix[q] = C.shadow.matrix,
                        ha++),
                        c.point[q] = I,
                        q++) : C.isHemisphereLight && (I = a.get(C),
                        I.direction.setFromMatrixPosition(C.matrixWorld),
                        I.direction.transformDirection(m),
                        I.direction.normalize(),
                        I.skyColor.copy(C.color).multiplyScalar(ma),
                        I.groundColor.copy(C.groundColor).multiplyScalar(ma),
                        c.hemi[x] = I,
                        x++)
                }
                c.ambient[0] = h;
                c.ambient[1] = p;
                c.ambient[2] = l;
                d = c.hash;
                if (d.directionalLength !== k || d.pointLength !== q || d.spotLength !== t || d.rectAreaLength !== n || d.hemiLength !== x || d.numDirectionalShadows !== w || d.numPointShadows !== ha || d.numSpotShadows !== U)
                    c.directional.length = k,
                    c.spot.length = t,
                    c.rectArea.length = n,
                    c.point.length = q,
                    c.hemi.length = x,
                    c.directionalShadow.length = w,
                    c.directionalShadowMap.length = w,
                    c.pointShadow.length = ha,
                    c.pointShadowMap.length = ha,
                    c.spotShadow.length = U,
                    c.spotShadowMap.length = U,
                    c.directionalShadowMatrix.length = w,
                    c.pointShadowMatrix.length = ha,
                    c.spotShadowMatrix.length = U,
                    d.directionalLength = k,
                    d.pointLength = q,
                    d.spotLength = t,
                    d.rectAreaLength = n,
                    d.hemiLength = x,
                    d.numDirectionalShadows = w,
                    d.numPointShadows = ha,
                    d.numSpotShadows = U,
                    c.version = yk++
            },
            state: c
        }
    }
    function Th() {
        var a = new xk
          , b = []
          , c = [];
        return {
            init: function() {
                b.length = 0;
                c.length = 0
            },
            state: {
                lightsArray: b,
                shadowsArray: c,
                lights: a
            },
            setupLights: function(d) {
                a.setup(b, c, d)
            },
            pushLight: function(a) {
                b.push(a)
            },
            pushShadow: function(a) {
                c.push(a)
            }
        }
    }
    function zk() {
        function a(c) {
            c = c.target;
            c.removeEventListener("dispose", a);
            b.delete(c)
        }
        var b = new WeakMap;
        return {
            get: function(c, d) {
                if (!1 === b.has(c)) {
                    var e = new Th;
                    b.set(c, new WeakMap);
                    b.get(c).set(d, e);
                    c.addEventListener("dispose", a)
                } else
                    !1 === b.get(c).has(d) ? (e = new Th,
                    b.get(c).set(d, e)) : e = b.get(c).get(d);
                return e
            },
            dispose: function() {
                b = new WeakMap
            }
        }
    }
    function Hb(a) {
        J.call(this);
        this.type = "MeshDepthMaterial";
        this.depthPacking = 3200;
        this.morphTargets = this.skinning = !1;
        this.displacementMap = this.alphaMap = this.map = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.fog = !1;
        this.setValues(a)
    }
    function Ib(a) {
        J.call(this);
        this.type = "MeshDistanceMaterial";
        this.referencePosition = new n;
        this.nearDistance = 1;
        this.farDistance = 1E3;
        this.morphTargets = this.skinning = !1;
        this.displacementMap = this.alphaMap = this.map = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.fog = !1;
        this.setValues(a)
    }
    function Uh(a, b, c) {
        function d(a, b, c) {
            c = a << 0 | b << 1 | c << 2;
            var d = p[c];
            void 0 === d && (d = new Hb({
                depthPacking: 3201,
                morphTargets: a,
                skinning: b
            }),
            p[c] = d);
            return d
        }
        function e(a, b, c) {
            c = a << 0 | b << 1 | c << 2;
            var d = l[c];
            void 0 === d && (d = new Ib({
                morphTargets: a,
                skinning: b
            }),
            l[c] = d);
            return d
        }
        function f(b, c, f, g, h, k, m) {
            var p = d
              , l = b.customDepthMaterial;
            !0 === g.isPointLight && (p = e,
            l = b.customDistanceMaterial);
            void 0 === l ? (l = !1,
            !0 === f.morphTargets && (l = c.morphAttributes && c.morphAttributes.position && 0 < c.morphAttributes.position.length),
            c = !1,
            !0 === b.isSkinnedMesh && (!0 === f.skinning ? c = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b)),
            b = p(l, c, !0 === b.isInstancedMesh)) : b = l;
            a.localClippingEnabled && !0 === f.clipShadows && 0 !== f.clippingPlanes.length && (l = b.uuid,
            p = f.uuid,
            c = r[l],
            void 0 === c && (c = {},
            r[l] = c),
            l = c[p],
            void 0 === l && (l = b.clone(),
            c[p] = l),
            b = l);
            b.visible = f.visible;
            b.wireframe = f.wireframe;
            b.side = 3 === m ? null !== f.shadowSide ? f.shadowSide : f.side : null !== f.shadowSide ? f.shadowSide : q[f.side];
            b.clipShadows = f.clipShadows;
            b.clippingPlanes = f.clippingPlanes;
            b.clipIntersection = f.clipIntersection;
            b.wireframeLinewidth = f.wireframeLinewidth;
            b.linewidth = f.linewidth;
            !0 === g.isPointLight && !0 === b.isMeshDistanceMaterial && (b.referencePosition.setFromMatrixPosition(g.matrixWorld),
            b.nearDistance = h,
            b.farDistance = k);
            return b
        }
        function g(c, d, e, k, m) {
            if (!1 !== c.visible) {
                if (c.layers.test(d.layers) && (c.isMesh || c.isLine || c.isPoints) && (c.castShadow || c.receiveShadow && 3 === m) && (!c.frustumCulled || h.intersectsObject(c))) {
                    c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, c.matrixWorld);
                    var p = b.update(c)
                      , l = c.material;
                    if (Array.isArray(l))
                        for (var z = p.groups, u = 0, q = z.length; u < q; u++) {
                            var r = z[u]
                              , t = l[r.materialIndex];
                            t && t.visible && (t = f(c, p, t, k, e.near, e.far, m),
                            a.renderBufferDirect(e, null, p, t, c, r))
                        }
                    else
                        l.visible && (t = f(c, p, l, k, e.near, e.far, m),
                        a.renderBufferDirect(e, null, p, t, c, null))
                }
                c = c.children;
                p = 0;
                for (l = c.length; p < l; p++)
                    g(c[p], d, e, k, m)
            }
        }
        var h = new Ec
          , k = new v
          , m = new v
          , z = new ca
          , p = []
          , l = []
          , r = {}
          , q = {
            0: 1,
            1: 0,
            2: 2
        }
          , t = new Aa({
            defines: {
                SAMPLE_RATE: .25,
                HALF_SAMPLE_RATE: .125
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new v
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        })
          , n = t.clone();
        n.defines.HORIZONAL_PASS = 1;
        var x = new B;
        x.setAttribute("position", new N(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
        var w = new ja(x,t)
          , ha = this;
        this.enabled = !1;
        this.autoUpdate = !0;
        this.needsUpdate = !1;
        this.type = 1;
        this.render = function(d, e, f) {
            if (!1 !== ha.enabled && (!1 !== ha.autoUpdate || !1 !== ha.needsUpdate) && 0 !== d.length) {
                var p = a.getRenderTarget()
                  , l = a.getActiveCubeFace()
                  , u = a.getActiveMipmapLevel()
                  , q = a.state;
                q.setBlending(0);
                q.buffers.color.setClear(1, 1, 1, 1);
                q.buffers.depth.setTest(!0);
                q.setScissorTest(!1);
                for (var r = 0, F = d.length; r < F; r++) {
                    var x = d[r]
                      , C = x.shadow;
                    if (void 0 === C)
                        console.warn("THREE.WebGLShadowMap:", x, "has no shadow.");
                    else {
                        k.copy(C.mapSize);
                        var v = C.getFrameExtents();
                        k.multiply(v);
                        m.copy(C.mapSize);
                        if (k.x > c || k.y > c)
                            k.x > c && (m.x = Math.floor(c / v.x),
                            k.x = m.x * v.x,
                            C.mapSize.x = m.x),
                            k.y > c && (m.y = Math.floor(c / v.y),
                            k.y = m.y * v.y,
                            C.mapSize.y = m.y);
                        null !== C.map || C.isPointLightShadow || 3 !== this.type || (v = {
                            minFilter: 1006,
                            magFilter: 1006,
                            format: 1023
                        },
                        C.map = new za(k.x,k.y,v),
                        C.map.texture.name = x.name + ".shadowMap",
                        C.mapPass = new za(k.x,k.y,v),
                        C.camera.updateProjectionMatrix());
                        null === C.map && (v = {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        },
                        C.map = new za(k.x,k.y,v),
                        C.map.texture.name = x.name + ".shadowMap",
                        C.camera.updateProjectionMatrix());
                        a.setRenderTarget(C.map);
                        a.clear();
                        v = C.getViewportCount();
                        for (var Z = 0; Z < v; Z++) {
                            var U = C.getViewport(Z);
                            z.set(m.x * U.x, m.y * U.y, m.x * U.z, m.y * U.w);
                            q.viewport(z);
                            C.updateMatrices(x, Z);
                            h = C.getFrustum();
                            g(e, f, C.camera, x, this.type)
                        }
                        C.isPointLightShadow || 3 !== this.type || (x = C,
                        C = f,
                        v = b.update(w),
                        t.uniforms.shadow_pass.value = x.map.texture,
                        t.uniforms.resolution.value = x.mapSize,
                        t.uniforms.radius.value = x.radius,
                        a.setRenderTarget(x.mapPass),
                        a.clear(),
                        a.renderBufferDirect(C, null, v, t, w, null),
                        n.uniforms.shadow_pass.value = x.mapPass.texture,
                        n.uniforms.resolution.value = x.mapSize,
                        n.uniforms.radius.value = x.radius,
                        a.setRenderTarget(x.map),
                        a.clear(),
                        a.renderBufferDirect(C, null, v, n, w, null))
                    }
                }
                ha.needsUpdate = !1;
                a.setRenderTarget(p, l, u)
            }
        }
    }
    function Ak(a, b, c) {
        function d(b, c, d) {
            var e = new Uint8Array(4)
              , f = a.createTexture();
            a.bindTexture(b, f);
            a.texParameteri(b, 10241, 9728);
            a.texParameteri(b, 10240, 9728);
            for (b = 0; b < d; b++)
                a.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e);
            return f
        }
        function e(c, d) {
            n[c] = 1;
            0 === x[c] && (a.enableVertexAttribArray(c),
            x[c] = 1);
            w[c] !== d && ((u ? a : b.get("ANGLE_instanced_arrays"))[u ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](c, d),
            w[c] = d)
        }
        function f(b) {
            !0 !== v[b] && (a.enable(b),
            v[b] = !0)
        }
        function g(b) {
            !1 !== v[b] && (a.disable(b),
            v[b] = !1)
        }
        function h(b, c, d, e, h, k, m, p) {
            if (0 === b)
                Z && (g(3042),
                Z = !1);
            else if (Z || (f(3042),
            Z = !0),
            5 !== b) {
                if (b !== C || p !== E) {
                    if (100 !== y || 100 !== Fa)
                        a.blendEquation(32774),
                        Fa = y = 100;
                    if (p)
                        switch (b) {
                        case 1:
                            a.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            a.blendFunc(1, 1);
                            break;
                        case 3:
                            a.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            a.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", b)
                        }
                    else
                        switch (b) {
                        case 1:
                            a.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            a.blendFunc(770, 1);
                            break;
                        case 3:
                            a.blendFunc(0, 769);
                            break;
                        case 4:
                            a.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", b)
                        }
                    D = I = Ba = ma = null;
                    C = b;
                    E = p
                }
            } else {
                h = h || c;
                k = k || d;
                m = m || e;
                if (c !== y || h !== Fa)
                    a.blendEquationSeparate(Ic[c], Ic[h]),
                    y = c,
                    Fa = h;
                if (d !== ma || e !== Ba || k !== I || m !== D)
                    a.blendFuncSeparate(K[d], K[e], K[k], K[m]),
                    ma = d,
                    Ba = e,
                    I = k,
                    D = m;
                C = b;
                E = null
            }
        }
        function k(b) {
            A !== b && (b ? a.frontFace(2304) : a.frontFace(2305),
            A = b)
        }
        function m(b) {
            0 !== b ? (f(2884),
            b !== B && (1 === b ? a.cullFace(1029) : 2 === b ? a.cullFace(1028) : a.cullFace(1032))) : g(2884);
            B = b
        }
        function l(b, c, d) {
            if (b) {
                if (f(32823),
                J !== c || N !== d)
                    a.polygonOffset(c, d),
                    J = c,
                    N = d
            } else
                g(32823)
        }
        function p(b) {
            void 0 === b && (b = 33984 + fa - 1);
            M !== b && (a.activeTexture(b),
            M = b)
        }
        var u = c.isWebGL2
          , r = new function() {
            var b = !1
              , c = new ca
              , d = null
              , e = new ca(0,0,0,0);
            return {
                setMask: function(c) {
                    d === c || b || (a.colorMask(c, c, c, c),
                    d = c)
                },
                setLocked: function(a) {
                    b = a
                },
                setClear: function(b, d, f, g, h) {
                    !0 === h && (b *= g,
                    d *= g,
                    f *= g);
                    c.set(b, d, f, g);
                    !1 === e.equals(c) && (a.clearColor(b, d, f, g),
                    e.copy(c))
                },
                reset: function() {
                    b = !1;
                    d = null;
                    e.set(-1, 0, 0, 0)
                }
            }
        }
          , q = new function() {
            var b = !1
              , c = null
              , d = null
              , e = null;
            return {
                setTest: function(a) {
                    a ? f(2929) : g(2929)
                },
                setMask: function(d) {
                    c === d || b || (a.depthMask(d),
                    c = d)
                },
                setFunc: function(b) {
                    if (d !== b) {
                        if (b)
                            switch (b) {
                            case 0:
                                a.depthFunc(512);
                                break;
                            case 1:
                                a.depthFunc(519);
                                break;
                            case 2:
                                a.depthFunc(513);
                                break;
                            case 3:
                                a.depthFunc(515);
                                break;
                            case 4:
                                a.depthFunc(514);
                                break;
                            case 5:
                                a.depthFunc(518);
                                break;
                            case 6:
                                a.depthFunc(516);
                                break;
                            case 7:
                                a.depthFunc(517);
                                break;
                            default:
                                a.depthFunc(515)
                            }
                        else
                            a.depthFunc(515);
                        d = b
                    }
                },
                setLocked: function(a) {
                    b = a
                },
                setClear: function(b) {
                    e !== b && (a.clearDepth(b),
                    e = b)
                },
                reset: function() {
                    b = !1;
                    e = d = c = null
                }
            }
        }
          , t = new function() {
            var b = !1
              , c = null
              , d = null
              , e = null
              , h = null
              , k = null
              , m = null
              , p = null
              , l = null;
            return {
                setTest: function(a) {
                    b || (a ? f(2960) : g(2960))
                },
                setMask: function(d) {
                    c === d || b || (a.stencilMask(d),
                    c = d)
                },
                setFunc: function(b, c, f) {
                    if (d !== b || e !== c || h !== f)
                        a.stencilFunc(b, c, f),
                        d = b,
                        e = c,
                        h = f
                },
                setOp: function(b, c, d) {
                    if (k !== b || m !== c || p !== d)
                        a.stencilOp(b, c, d),
                        k = b,
                        m = c,
                        p = d
                },
                setLocked: function(a) {
                    b = a
                },
                setClear: function(b) {
                    l !== b && (a.clearStencil(b),
                    l = b)
                },
                reset: function() {
                    b = !1;
                    l = p = m = k = h = e = d = c = null
                }
            }
        }
        ;
        c = a.getParameter(34921);
        var n = new Uint8Array(c)
          , x = new Uint8Array(c)
          , w = new Uint8Array(c)
          , v = {}
          , U = null
          , Z = null
          , C = null
          , y = null
          , ma = null
          , Ba = null
          , Fa = null
          , I = null
          , D = null
          , E = !1
          , A = null
          , B = null
          , G = null
          , J = null
          , N = null
          , fa = a.getParameter(35661)
          , O = !1;
        c = 0;
        c = a.getParameter(7938);
        -1 !== c.indexOf("WebGL") ? (c = parseFloat(/^WebGL ([0-9])/.exec(c)[1]),
        O = 1 <= c) : -1 !== c.indexOf("OpenGL ES") && (c = parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]),
        O = 2 <= c);
        var M = null
          , Jd = {}
          , W = new ca
          , Vh = new ca
          , lg = {};
        lg[3553] = d(3553, 3553, 1);
        lg[34067] = d(34067, 34069, 6);
        r.setClear(0, 0, 0, 1);
        q.setClear(1);
        t.setClear(0);
        f(2929);
        q.setFunc(3);
        k(!1);
        m(1);
        f(2884);
        h(0);
        var Ic = {
            100: 32774,
            101: 32778,
            102: 32779
        };
        u ? (Ic[103] = 32775,
        Ic[104] = 32776) : (c = b.get("EXT_blend_minmax"),
        null !== c && (Ic[103] = c.MIN_EXT,
        Ic[104] = c.MAX_EXT));
        var K = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        return {
            buffers: {
                color: r,
                depth: q,
                stencil: t
            },
            initAttributes: function() {
                for (var a = 0, b = n.length; a < b; a++)
                    n[a] = 0
            },
            enableAttribute: function(a) {
                e(a, 0)
            },
            enableAttributeAndDivisor: e,
            disableUnusedAttributes: function() {
                for (var b = 0, c = x.length; b !== c; ++b)
                    x[b] !== n[b] && (a.disableVertexAttribArray(b),
                    x[b] = 0)
            },
            vertexAttribPointer: function(b, c, d, e, f, g) {
                !0 !== u || 5124 !== d && 5125 !== d ? a.vertexAttribPointer(b, c, d, e, f, g) : a.vertexAttribIPointer(b, c, d, e, f, g)
            },
            enable: f,
            disable: g,
            useProgram: function(b) {
                return U !== b ? (a.useProgram(b),
                U = b,
                !0) : !1
            },
            setBlending: h,
            setMaterial: function(a, b) {
                2 === a.side ? g(2884) : f(2884);
                var c = 1 === a.side;
                b && (c = !c);
                k(c);
                1 === a.blending && !1 === a.transparent ? h(0) : h(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha);
                q.setFunc(a.depthFunc);
                q.setTest(a.depthTest);
                q.setMask(a.depthWrite);
                r.setMask(a.colorWrite);
                b = a.stencilWrite;
                t.setTest(b);
                b && (t.setMask(a.stencilWriteMask),
                t.setFunc(a.stencilFunc, a.stencilRef, a.stencilFuncMask),
                t.setOp(a.stencilFail, a.stencilZFail, a.stencilZPass));
                l(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits)
            },
            setFlipSided: k,
            setCullFace: m,
            setLineWidth: function(b) {
                b !== G && (O && a.lineWidth(b),
                G = b)
            },
            setPolygonOffset: l,
            setScissorTest: function(a) {
                a ? f(3089) : g(3089)
            },
            activeTexture: p,
            bindTexture: function(b, c) {
                null === M && p();
                var d = Jd[M];
                void 0 === d && (d = {
                    type: void 0,
                    texture: void 0
                },
                Jd[M] = d);
                if (d.type !== b || d.texture !== c)
                    a.bindTexture(b, c || lg[b]),
                    d.type = b,
                    d.texture = c
            },
            unbindTexture: function() {
                var b = Jd[M];
                void 0 !== b && void 0 !== b.type && (a.bindTexture(b.type, null),
                b.type = void 0,
                b.texture = void 0)
            },
            compressedTexImage2D: function() {
                try {
                    a.compressedTexImage2D.apply(a, arguments)
                } catch (R) {
                    console.error("THREE.WebGLState:", R)
                }
            },
            texImage2D: function() {
                try {
                    a.texImage2D.apply(a, arguments)
                } catch (R) {
                    console.error("THREE.WebGLState:", R)
                }
            },
            texImage3D: function() {
                try {
                    a.texImage3D.apply(a, arguments)
                } catch (R) {
                    console.error("THREE.WebGLState:", R)
                }
            },
            scissor: function(b) {
                !1 === W.equals(b) && (a.scissor(b.x, b.y, b.z, b.w),
                W.copy(b))
            },
            viewport: function(b) {
                !1 === Vh.equals(b) && (a.viewport(b.x, b.y, b.z, b.w),
                Vh.copy(b))
            },
            reset: function() {
                for (var b = 0; b < x.length; b++)
                    1 === x[b] && (a.disableVertexAttribArray(b),
                    x[b] = 0);
                v = {};
                M = null;
                Jd = {};
                B = A = C = U = null;
                r.reset();
                q.reset();
                t.reset()
            }
        }
    }
    function Bk(a, b, c, d, e, f, g) {
        function h(a, b) {
            return J ? new OffscreenCanvas(a,b) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
        }
        function k(a, b, c, d) {
            var e = 1;
            if (a.width > d || a.height > d)
                e = d / Math.max(a.width, a.height);
            if (1 > e || !0 === b) {
                if ("undefined" !== typeof HTMLImageElement && a instanceof HTMLImageElement || "undefined" !== typeof HTMLCanvasElement && a instanceof HTMLCanvasElement || "undefined" !== typeof ImageBitmap && a instanceof ImageBitmap)
                    return d = b ? M.floorPowerOfTwo : Math.floor,
                    b = d(e * a.width),
                    e = d(e * a.height),
                    void 0 === G && (G = h(b, e)),
                    c = c ? h(b, e) : G,
                    c.width = b,
                    c.height = e,
                    c.getContext("2d").drawImage(a, 0, 0, b, e),
                    console.warn("THREE.WebGLRenderer: Texture has been resized from (" + a.width + "x" + a.height + ") to (" + b + "x" + e + ")."),
                    c;
                "data"in a && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + a.width + "x" + a.height + ").")
            }
            return a
        }
        function m(a) {
            return M.isPowerOfTwo(a.width) && M.isPowerOfTwo(a.height)
        }
        function l(a, b) {
            return a.generateMipmaps && b && 1003 !== a.minFilter && 1006 !== a.minFilter
        }
        function p(b, c, e, f) {
            a.generateMipmap(b);
            d.get(c).__maxMipLevel = Math.log(Math.max(e, f)) * Math.LOG2E
        }
        function u(c, d, e) {
            if (!1 === Ba)
                return d;
            if (null !== c) {
                if (void 0 !== a[c])
                    return a[c];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + c + "'")
            }
            c = d;
            6403 === d && (5126 === e && (c = 33326),
            5131 === e && (c = 33325),
            5121 === e && (c = 33321));
            6407 === d && (5126 === e && (c = 34837),
            5131 === e && (c = 34843),
            5121 === e && (c = 32849));
            6408 === d && (5126 === e && (c = 34836),
            5131 === e && (c = 34842),
            5121 === e && (c = 32856));
            33325 !== c && 33326 !== c && 34842 !== c && 34836 !== c || b.get("EXT_color_buffer_float");
            return c
        }
        function r(a) {
            return 1003 === a || 1004 === a || 1005 === a ? 9728 : 9729
        }
        function q(b) {
            b = b.target;
            b.removeEventListener("dispose", q);
            var c = d.get(b);
            void 0 !== c.__webglInit && (a.deleteTexture(c.__webglTexture),
            d.remove(b));
            b.isVideoTexture && B.delete(b);
            g.memory.textures--
        }
        function t(b) {
            b = b.target;
            b.removeEventListener("dispose", t);
            var c = d.get(b)
              , e = d.get(b.texture);
            if (b) {
                void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture);
                b.depthTexture && b.depthTexture.dispose();
                if (b.isWebGLCubeRenderTarget)
                    for (e = 0; 6 > e; e++)
                        a.deleteFramebuffer(c.__webglFramebuffer[e]),
                        c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]);
                else
                    a.deleteFramebuffer(c.__webglFramebuffer),
                    c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer),
                    c.__webglMultisampledFramebuffer && a.deleteFramebuffer(c.__webglMultisampledFramebuffer),
                    c.__webglColorRenderbuffer && a.deleteRenderbuffer(c.__webglColorRenderbuffer),
                    c.__webglDepthRenderbuffer && a.deleteRenderbuffer(c.__webglDepthRenderbuffer);
                d.remove(b.texture);
                d.remove(b)
            }
            g.memory.textures--
        }
        function n(a, b) {
            var e = d.get(a);
            if (a.isVideoTexture) {
                var f = g.render.frame;
                B.get(a) !== f && (B.set(a, f),
                a.update())
            }
            if (0 < a.version && e.__version !== a.version)
                if (f = a.image,
                void 0 === f)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else if (!1 === f.complete)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    Z(e, a, b);
                    return
                }
            c.activeTexture(33984 + b);
            c.bindTexture(3553, e.__webglTexture)
        }
        function x(b, e) {
            if (6 === b.image.length) {
                var g = d.get(b);
                if (0 < b.version && g.__version !== b.version) {
                    U(g, b);
                    c.activeTexture(33984 + e);
                    c.bindTexture(34067, g.__webglTexture);
                    a.pixelStorei(37440, b.flipY);
                    var h = b && (b.isCompressedTexture || b.image[0].isCompressedTexture);
                    e = b.image[0] && b.image[0].isDataTexture;
                    for (var z = [], q = 0; 6 > q; q++)
                        z[q] = h || e ? e ? b.image[q].image : b.image[q] : k(b.image[q], !1, !0, I);
                    var r = z[0]
                      , t = m(r) || Ba
                      , n = f.convert(b.format)
                      , F = f.convert(b.type)
                      , w = u(b.internalFormat, n, F);
                    v(34067, b, t);
                    if (h) {
                        for (q = 0; 6 > q; q++) {
                            var x = z[q].mipmaps;
                            for (h = 0; h < x.length; h++) {
                                var W = x[h];
                                1023 !== b.format && 1022 !== b.format ? null !== n ? c.compressedTexImage2D(34069 + q, h, w, W.width, W.height, 0, W.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : c.texImage2D(34069 + q, h, w, W.width, W.height, 0, n, F, W.data)
                            }
                        }
                        g.__maxMipLevel = x.length - 1
                    } else {
                        x = b.mipmaps;
                        for (q = 0; 6 > q; q++)
                            if (e)
                                for (c.texImage2D(34069 + q, 0, w, z[q].width, z[q].height, 0, n, F, z[q].data),
                                h = 0; h < x.length; h++)
                                    W = x[h],
                                    W = W.image[q].image,
                                    c.texImage2D(34069 + q, h + 1, w, W.width, W.height, 0, n, F, W.data);
                            else
                                for (c.texImage2D(34069 + q, 0, w, n, F, z[q]),
                                h = 0; h < x.length; h++)
                                    W = x[h],
                                    c.texImage2D(34069 + q, h + 1, w, n, F, W.image[q]);
                        g.__maxMipLevel = x.length
                    }
                    l(b, t) && p(34067, b, r.width, r.height);
                    g.__version = b.version;
                    if (b.onUpdate)
                        b.onUpdate(b)
                } else
                    c.activeTexture(33984 + e),
                    c.bindTexture(34067, g.__webglTexture)
            }
        }
        function w(a, b) {
            c.activeTexture(33984 + b);
            c.bindTexture(34067, d.get(a).__webglTexture)
        }
        function v(c, f, g) {
            g ? (a.texParameteri(c, 10242, O[f.wrapS]),
            a.texParameteri(c, 10243, O[f.wrapT]),
            32879 !== c && 35866 !== c || a.texParameteri(c, 32882, O[f.wrapR]),
            a.texParameteri(c, 10240, fa[f.magFilter]),
            a.texParameteri(c, 10241, fa[f.minFilter])) : (a.texParameteri(c, 10242, 33071),
            a.texParameteri(c, 10243, 33071),
            32879 !== c && 35866 !== c || a.texParameteri(c, 32882, 33071),
            1001 === f.wrapS && 1001 === f.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            a.texParameteri(c, 10240, r(f.magFilter)),
            a.texParameteri(c, 10241, r(f.minFilter)),
            1003 !== f.minFilter && 1006 !== f.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
            !(g = b.get("EXT_texture_filter_anisotropic")) || 1015 === f.type && null === b.get("OES_texture_float_linear") || 1016 === f.type && null === (Ba || b.get("OES_texture_half_float_linear")) || !(1 < f.anisotropy || d.get(f).__currentAnisotropy) || (a.texParameterf(c, g.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(f.anisotropy, e.getMaxAnisotropy())),
            d.get(f).__currentAnisotropy = f.anisotropy)
        }
        function U(b, c) {
            void 0 === b.__webglInit && (b.__webglInit = !0,
            c.addEventListener("dispose", q),
            b.__webglTexture = a.createTexture(),
            g.memory.textures++)
        }
        function Z(b, d, e) {
            var g = 3553;
            d.isDataTexture2DArray && (g = 35866);
            d.isDataTexture3D && (g = 32879);
            U(b, d);
            c.activeTexture(33984 + e);
            c.bindTexture(g, b.__webglTexture);
            a.pixelStorei(37440, d.flipY);
            a.pixelStorei(37441, d.premultiplyAlpha);
            a.pixelStorei(3317, d.unpackAlignment);
            e = Ba ? !1 : 1001 !== d.wrapS || 1001 !== d.wrapT || 1003 !== d.minFilter && 1006 !== d.minFilter;
            e = e && !1 === m(d.image);
            e = k(d.image, e, !1, E);
            var h = m(e) || Ba
              , z = f.convert(d.format)
              , q = f.convert(d.type)
              , r = u(d.internalFormat, z, q);
            v(g, d, h);
            var t = d.mipmaps;
            if (d.isDepthTexture)
                r = 6402,
                Ba ? r = 1015 === d.type ? 36012 : 1014 === d.type ? 33190 : 1020 === d.type ? 35056 : 33189 : 1015 === d.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                1026 === d.format && 6402 === r && 1012 !== d.type && 1014 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                d.type = 1012,
                q = f.convert(d.type)),
                1027 === d.format && 6402 === r && (r = 34041,
                1020 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                d.type = 1020,
                q = f.convert(d.type))),
                c.texImage2D(3553, 0, r, e.width, e.height, 0, z, q, null);
            else if (d.isDataTexture)
                if (0 < t.length && h) {
                    for (var n = 0, F = t.length; n < F; n++) {
                        var w = t[n];
                        c.texImage2D(3553, n, r, w.width, w.height, 0, z, q, w.data)
                    }
                    d.generateMipmaps = !1;
                    b.__maxMipLevel = t.length - 1
                } else
                    c.texImage2D(3553, 0, r, e.width, e.height, 0, z, q, e.data),
                    b.__maxMipLevel = 0;
            else if (d.isCompressedTexture) {
                n = 0;
                for (F = t.length; n < F; n++)
                    w = t[n],
                    1023 !== d.format && 1022 !== d.format ? null !== z ? c.compressedTexImage2D(3553, n, r, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : c.texImage2D(3553, n, r, w.width, w.height, 0, z, q, w.data);
                b.__maxMipLevel = t.length - 1
            } else if (d.isDataTexture2DArray)
                c.texImage3D(35866, 0, r, e.width, e.height, e.depth, 0, z, q, e.data),
                b.__maxMipLevel = 0;
            else if (d.isDataTexture3D)
                c.texImage3D(32879, 0, r, e.width, e.height, e.depth, 0, z, q, e.data),
                b.__maxMipLevel = 0;
            else if (0 < t.length && h) {
                n = 0;
                for (F = t.length; n < F; n++)
                    w = t[n],
                    c.texImage2D(3553, n, r, z, q, w);
                d.generateMipmaps = !1;
                b.__maxMipLevel = t.length - 1
            } else
                c.texImage2D(3553, 0, r, z, q, e),
                b.__maxMipLevel = 0;
            l(d, h) && p(g, d, e.width, e.height);
            b.__version = d.version;
            if (d.onUpdate)
                d.onUpdate(d)
        }
        function C(b, e, g, h) {
            var k = f.convert(e.texture.format)
              , m = f.convert(e.texture.type)
              , p = u(e.texture.internalFormat, k, m);
            c.texImage2D(h, 0, p, e.width, e.height, 0, k, m, null);
            a.bindFramebuffer(36160, b);
            a.framebufferTexture2D(36160, g, h, d.get(e.texture).__webglTexture, 0);
            a.bindFramebuffer(36160, null)
        }
        function y(b, c, d) {
            a.bindRenderbuffer(36161, b);
            if (c.depthBuffer && !c.stencilBuffer) {
                var e = 33189;
                d ? ((d = c.depthTexture) && d.isDepthTexture && (1015 === d.type ? e = 36012 : 1014 === d.type && (e = 33190)),
                d = D(c),
                a.renderbufferStorageMultisample(36161, d, e, c.width, c.height)) : a.renderbufferStorage(36161, e, c.width, c.height);
                a.framebufferRenderbuffer(36160, 36096, 36161, b)
            } else
                c.depthBuffer && c.stencilBuffer ? (d ? (d = D(c),
                a.renderbufferStorageMultisample(36161, d, 35056, c.width, c.height)) : a.renderbufferStorage(36161, 34041, c.width, c.height),
                a.framebufferRenderbuffer(36160, 33306, 36161, b)) : (b = f.convert(c.texture.format),
                e = f.convert(c.texture.type),
                e = u(c.texture.internalFormat, b, e),
                d ? (d = D(c),
                a.renderbufferStorageMultisample(36161, d, e, c.width, c.height)) : a.renderbufferStorage(36161, e, c.width, c.height));
            a.bindRenderbuffer(36161, null)
        }
        function D(a) {
            return Ba && a.isWebGLMultisampleRenderTarget ? Math.min(A, a.samples) : 0
        }
        var Ba = e.isWebGL2, Fa = e.maxTextures, I = e.maxCubemapSize, E = e.maxTextureSize, A = e.maxSamples, B = new WeakMap, G, J = !1;
        try {
            J = "undefined" !== typeof OffscreenCanvas && null !== (new OffscreenCanvas(1,1)).getContext("2d")
        } catch (Jd) {}
        var N = 0
          , O = {
            1E3: 10497,
            1001: 33071,
            1002: 33648
        }
          , fa = {
            1003: 9728,
            1004: 9984,
            1005: 9986,
            1006: 9729,
            1007: 9985,
            1008: 9987
        }
          , P = !1
          , L = !1;
        this.allocateTextureUnit = function() {
            var a = N;
            a >= Fa && console.warn("THREE.WebGLTextures: Trying to use " + a + " texture units while this GPU supports only " + Fa);
            N += 1;
            return a
        }
        ;
        this.resetTextureUnits = function() {
            N = 0
        }
        ;
        this.setTexture2D = n;
        this.setTexture2DArray = function(a, b) {
            var e = d.get(a);
            0 < a.version && e.__version !== a.version ? Z(e, a, b) : (c.activeTexture(33984 + b),
            c.bindTexture(35866, e.__webglTexture))
        }
        ;
        this.setTexture3D = function(a, b) {
            var e = d.get(a);
            0 < a.version && e.__version !== a.version ? Z(e, a, b) : (c.activeTexture(33984 + b),
            c.bindTexture(32879, e.__webglTexture))
        }
        ;
        this.setTextureCube = x;
        this.setTextureCubeDynamic = w;
        this.setupRenderTarget = function(b) {
            var e = d.get(b)
              , h = d.get(b.texture);
            b.addEventListener("dispose", t);
            h.__webglTexture = a.createTexture();
            g.memory.textures++;
            var k = !0 === b.isWebGLCubeRenderTarget
              , z = !0 === b.isWebGLMultisampleRenderTarget
              , q = m(b) || Ba;
            !Ba || 1022 !== b.texture.format || 1015 !== b.texture.type && 1016 !== b.texture.type || (b.texture.format = 1023,
            console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."));
            if (k)
                for (e.__webglFramebuffer = [],
                z = 0; 6 > z; z++)
                    e.__webglFramebuffer[z] = a.createFramebuffer();
            else if (e.__webglFramebuffer = a.createFramebuffer(),
            z)
                if (Ba) {
                    e.__webglMultisampledFramebuffer = a.createFramebuffer();
                    e.__webglColorRenderbuffer = a.createRenderbuffer();
                    a.bindRenderbuffer(36161, e.__webglColorRenderbuffer);
                    z = f.convert(b.texture.format);
                    var r = f.convert(b.texture.type);
                    z = u(b.texture.internalFormat, z, r);
                    r = D(b);
                    a.renderbufferStorageMultisample(36161, r, z, b.width, b.height);
                    a.bindFramebuffer(36160, e.__webglMultisampledFramebuffer);
                    a.framebufferRenderbuffer(36160, 36064, 36161, e.__webglColorRenderbuffer);
                    a.bindRenderbuffer(36161, null);
                    b.depthBuffer && (e.__webglDepthRenderbuffer = a.createRenderbuffer(),
                    y(e.__webglDepthRenderbuffer, b, !0));
                    a.bindFramebuffer(36160, null)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (k) {
                c.bindTexture(34067, h.__webglTexture);
                v(34067, b.texture, q);
                for (z = 0; 6 > z; z++)
                    C(e.__webglFramebuffer[z], b, 36064, 34069 + z);
                l(b.texture, q) && p(34067, b.texture, b.width, b.height);
                c.bindTexture(34067, null)
            } else
                c.bindTexture(3553, h.__webglTexture),
                v(3553, b.texture, q),
                C(e.__webglFramebuffer, b, 36064, 3553),
                l(b.texture, q) && p(3553, b.texture, b.width, b.height),
                c.bindTexture(3553, null);
            if (b.depthBuffer) {
                e = d.get(b);
                h = !0 === b.isWebGLCubeRenderTarget;
                if (b.depthTexture) {
                    if (h)
                        throw Error("target.depthTexture not supported in Cube render targets");
                    if (b && b.isWebGLCubeRenderTarget)
                        throw Error("Depth Texture with cube render targets is not supported");
                    a.bindFramebuffer(36160, e.__webglFramebuffer);
                    if (!b.depthTexture || !b.depthTexture.isDepthTexture)
                        throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    d.get(b.depthTexture).__webglTexture && b.depthTexture.image.width === b.width && b.depthTexture.image.height === b.height || (b.depthTexture.image.width = b.width,
                    b.depthTexture.image.height = b.height,
                    b.depthTexture.needsUpdate = !0);
                    n(b.depthTexture, 0);
                    e = d.get(b.depthTexture).__webglTexture;
                    if (1026 === b.depthTexture.format)
                        a.framebufferTexture2D(36160, 36096, 3553, e, 0);
                    else if (1027 === b.depthTexture.format)
                        a.framebufferTexture2D(36160, 33306, 3553, e, 0);
                    else
                        throw Error("Unknown depthTexture format");
                } else if (h)
                    for (e.__webglDepthbuffer = [],
                    h = 0; 6 > h; h++)
                        a.bindFramebuffer(36160, e.__webglFramebuffer[h]),
                        e.__webglDepthbuffer[h] = a.createRenderbuffer(),
                        y(e.__webglDepthbuffer[h], b, !1);
                else
                    a.bindFramebuffer(36160, e.__webglFramebuffer),
                    e.__webglDepthbuffer = a.createRenderbuffer(),
                    y(e.__webglDepthbuffer, b, !1);
                a.bindFramebuffer(36160, null)
            }
        }
        ;
        this.updateRenderTargetMipmap = function(a) {
            var b = a.texture
              , e = m(a) || Ba;
            if (l(b, e)) {
                e = a.isWebGLCubeRenderTarget ? 34067 : 3553;
                var f = d.get(b).__webglTexture;
                c.bindTexture(e, f);
                p(e, b, a.width, a.height);
                c.bindTexture(e, null)
            }
        }
        ;
        this.updateMultisampleRenderTarget = function(b) {
            if (b.isWebGLMultisampleRenderTarget)
                if (Ba) {
                    var c = d.get(b);
                    a.bindFramebuffer(36008, c.__webglMultisampledFramebuffer);
                    a.bindFramebuffer(36009, c.__webglFramebuffer);
                    var e = b.width
                      , f = b.height
                      , g = 16384;
                    b.depthBuffer && (g |= 256);
                    b.stencilBuffer && (g |= 1024);
                    a.blitFramebuffer(0, 0, e, f, 0, 0, e, f, g, 9728);
                    a.bindFramebuffer(36160, c.__webglMultisampledFramebuffer)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
        ;
        this.safeSetTexture2D = function(a, b) {
            a && a.isWebGLRenderTarget && (!1 === P && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
            P = !0),
            a = a.texture);
            n(a, b)
        }
        ;
        this.safeSetTextureCube = function(a, b) {
            a && a.isWebGLCubeRenderTarget && (!1 === L && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            L = !0),
            a = a.texture);
            a && a.isCubeTexture || Array.isArray(a.image) && 6 === a.image.length ? x(a, b) : w(a, b)
        }
    }
    function Wh(a, b, c) {
        var d = c.isWebGL2;
        return {
            convert: function(a) {
                if (1009 === a)
                    return 5121;
                if (1017 === a)
                    return 32819;
                if (1018 === a)
                    return 32820;
                if (1019 === a)
                    return 33635;
                if (1010 === a)
                    return 5120;
                if (1011 === a)
                    return 5122;
                if (1012 === a)
                    return 5123;
                if (1013 === a)
                    return 5124;
                if (1014 === a)
                    return 5125;
                if (1015 === a)
                    return 5126;
                if (1016 === a) {
                    if (d)
                        return 5131;
                    var c = b.get("OES_texture_half_float");
                    return null !== c ? c.HALF_FLOAT_OES : null
                }
                if (1021 === a)
                    return 6406;
                if (1022 === a)
                    return 6407;
                if (1023 === a)
                    return 6408;
                if (1024 === a)
                    return 6409;
                if (1025 === a)
                    return 6410;
                if (1026 === a)
                    return 6402;
                if (1027 === a)
                    return 34041;
                if (1028 === a)
                    return 6403;
                if (1029 === a)
                    return 36244;
                if (1030 === a)
                    return 33319;
                if (1031 === a)
                    return 33320;
                if (1032 === a)
                    return 36248;
                if (1033 === a)
                    return 36249;
                if (33776 === a || 33777 === a || 33778 === a || 33779 === a)
                    if (c = b.get("WEBGL_compressed_texture_s3tc"),
                    null !== c) {
                        if (33776 === a)
                            return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (33777 === a)
                            return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (33778 === a)
                            return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (33779 === a)
                            return c.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    } else
                        return null;
                if (35840 === a || 35841 === a || 35842 === a || 35843 === a)
                    if (c = b.get("WEBGL_compressed_texture_pvrtc"),
                    null !== c) {
                        if (35840 === a)
                            return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (35841 === a)
                            return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (35842 === a)
                            return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (35843 === a)
                            return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    } else
                        return null;
                if (36196 === a)
                    return c = b.get("WEBGL_compressed_texture_etc1"),
                    null !== c ? c.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (37492 === a || 37496 === a)
                    if (c = b.get("WEBGL_compressed_texture_etc"),
                    null !== c) {
                        if (37492 === a)
                            return c.COMPRESSED_RGB8_ETC2;
                        if (37496 === a)
                            return c.COMPRESSED_RGBA8_ETC2_EAC
                    }
                if (37808 === a || 37809 === a || 37810 === a || 37811 === a || 37812 === a || 37813 === a || 37814 === a || 37815 === a || 37816 === a || 37817 === a || 37818 === a || 37819 === a || 37820 === a || 37821 === a || 37840 === a || 37841 === a || 37842 === a || 37843 === a || 37844 === a || 37845 === a || 37846 === a || 37847 === a || 37848 === a || 37849 === a || 37850 === a || 37851 === a || 37852 === a || 37853 === a)
                    return c = b.get("WEBGL_compressed_texture_astc"),
                    null !== c ? a : null;
                if (36492 === a)
                    return c = b.get("EXT_texture_compression_bptc"),
                    null !== c ? a : null;
                if (1020 === a) {
                    if (d)
                        return 34042;
                    c = b.get("WEBGL_depth_texture");
                    return null !== c ? c.UNSIGNED_INT_24_8_WEBGL : null
                }
            }
        }
    }
    function Ke(a) {
        ba.call(this);
        this.cameras = a || []
    }
    function Jc() {
        E.call(this);
        this.type = "Group"
    }
    function Le() {
        this._grip = this._targetRay = null
    }
    function Xh(a, b) {
        function c(a) {
            var b = q.get(a.inputSource);
            b && b.dispatchEvent({
                type: a.type
            })
        }
        function d() {
            q.forEach(function(a, b) {
                a.disconnect(b)
            });
            q.clear();
            a.setFramebuffer(null);
            a.setRenderTarget(a.getRenderTarget());
            D.stop();
            h.isPresenting = !1;
            h.dispatchEvent({
                type: "sessionend"
            })
        }
        function e(a) {
            l = a;
            D.setContext(k);
            D.start();
            h.isPresenting = !0;
            h.dispatchEvent({
                type: "sessionstart"
            })
        }
        function f(a) {
            for (var b = k.inputSources, c = 0; c < r.length; c++)
                q.set(b[c], r[c]);
            for (c = 0; c < a.removed.length; c++) {
                b = a.removed[c];
                var d = q.get(b);
                d && (d.dispatchEvent({
                    type: "disconnected",
                    data: b
                }),
                q.delete(b))
            }
            for (c = 0; c < a.added.length; c++)
                b = a.added[c],
                (d = q.get(b)) && d.dispatchEvent({
                    type: "connected",
                    data: b
                })
        }
        function g(a, b) {
            null === b ? a.matrixWorld.copy(a.matrix) : a.matrixWorld.multiplyMatrices(b.matrixWorld, a.matrix);
            a.matrixWorldInverse.getInverse(a.matrixWorld)
        }
        var h = this
          , k = null
          , m = 1
          , l = null
          , p = "local-floor"
          , u = null
          , r = []
          , q = new Map
          , t = new ba;
        t.layers.enable(1);
        t.viewport = new ca;
        var F = new ba;
        F.layers.enable(2);
        F.viewport = new ca;
        var x = [t, F]
          , w = new Ke;
        w.layers.enable(1);
        w.layers.enable(2);
        var v = null
          , U = null;
        this.isPresenting = this.enabled = !1;
        this.getController = function(a) {
            var b = r[a];
            void 0 === b && (b = new Le,
            r[a] = b);
            return b.getTargetRaySpace()
        }
        ;
        this.getControllerGrip = function(a) {
            var b = r[a];
            void 0 === b && (b = new Le,
            r[a] = b);
            return b.getGripSpace()
        }
        ;
        this.setFramebufferScaleFactor = function(a) {
            m = a;
            !0 === h.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ;
        this.setReferenceSpaceType = function(a) {
            p = a;
            !0 === h.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ;
        this.getReferenceSpace = function() {
            return l
        }
        ;
        this.getSession = function() {
            return k
        }
        ;
        this.setSession = function(a) {
            k = a;
            null !== k && (k.addEventListener("select", c),
            k.addEventListener("selectstart", c),
            k.addEventListener("selectend", c),
            k.addEventListener("squeeze", c),
            k.addEventListener("squeezestart", c),
            k.addEventListener("squeezeend", c),
            k.addEventListener("end", d),
            a = b.getContextAttributes(),
            a = new XRWebGLLayer(k,b,{
                antialias: a.antialias,
                alpha: a.alpha,
                depth: a.depth,
                stencil: a.stencil,
                framebufferScaleFactor: m
            }),
            k.updateRenderState({
                baseLayer: a
            }),
            k.requestReferenceSpace(p).then(e),
            k.addEventListener("inputsourceschange", f))
        }
        ;
        var Z = new n
          , C = new n;
        this.getCamera = function(a) {
            w.near = F.near = t.near = a.near;
            w.far = F.far = t.far = a.far;
            if (v !== w.near || U !== w.far)
                k.updateRenderState({
                    depthNear: w.near,
                    depthFar: w.far
                }),
                v = w.near,
                U = w.far;
            var b = a.parent
              , c = w.cameras;
            g(w, b);
            for (var d = 0; d < c.length; d++)
                g(c[d], b);
            a.matrixWorld.copy(w.matrixWorld);
            a = a.children;
            d = 0;
            for (b = a.length; d < b; d++)
                a[d].updateMatrixWorld(!0);
            if (2 === c.length) {
                Z.setFromMatrixPosition(t.matrixWorld);
                C.setFromMatrixPosition(F.matrixWorld);
                c = Z.distanceTo(C);
                var e = t.projectionMatrix.elements
                  , f = F.projectionMatrix.elements
                  , h = e[14] / (e[10] - 1);
                d = e[14] / (e[10] + 1);
                a = (e[9] + 1) / e[5];
                b = (e[9] - 1) / e[5];
                var m = (e[8] - 1) / e[0]
                  , p = (f[8] + 1) / f[0];
                f = h * m;
                e = h * p;
                p = c / (-m + p);
                m = p * -m;
                t.matrixWorld.decompose(w.position, w.quaternion, w.scale);
                w.translateX(m);
                w.translateZ(p);
                w.matrixWorld.compose(w.position, w.quaternion, w.scale);
                w.matrixWorldInverse.getInverse(w.matrixWorld);
                h += p;
                p = d + p;
                w.projectionMatrix.makePerspective(f - m, e + (c - m), a * d / p * h, b * d / p * h, h, p)
            } else
                w.projectionMatrix.copy(t.projectionMatrix);
            return w
        }
        ;
        var y = null
          , D = new xh;
        D.setAnimationLoop(function(b, c) {
            u = c.getViewerPose(l);
            if (null !== u) {
                var d = u.views
                  , e = k.renderState.baseLayer;
                a.setFramebuffer(e.framebuffer);
                var f = !1;
                d.length !== w.cameras.length && (w.cameras.length = 0,
                f = !0);
                for (var g = 0; g < d.length; g++) {
                    var h = d[g]
                      , m = e.getViewport(h)
                      , p = x[g];
                    p.matrix.fromArray(h.transform.matrix);
                    p.projectionMatrix.fromArray(h.projectionMatrix);
                    p.viewport.set(m.x, m.y, m.width, m.height);
                    0 === g && w.matrix.copy(p.matrix);
                    !0 === f && w.cameras.push(p)
                }
            }
            d = k.inputSources;
            for (g = 0; g < r.length; g++)
                r[g].update(d[g], c, l);
            y && y(b, c)
        });
        this.setAnimationLoop = function(a) {
            y = a
        }
        ;
        this.dispose = function() {}
    }
    function mg(a) {
        var b;
        function c() {
            ra = new rj(H);
            Ga = new pj(H,ra,a);
            !1 === Ga.isWebGL2 && (ra.get("WEBGL_depth_texture"),
            ra.get("OES_texture_float"),
            ra.get("OES_texture_half_float"),
            ra.get("OES_texture_half_float_linear"),
            ra.get("OES_standard_derivatives"),
            ra.get("OES_element_index_uint"),
            ra.get("ANGLE_instanced_arrays"));
            ra.get("OES_texture_float_linear");
            qa = new Wh(H,ra,Ga);
            Y = new Ak(H,ra,Ga);
            Y.scissor(S.copy(ia).multiplyScalar(R).floor());
            Y.viewport(W.copy(Q).multiplyScalar(R).floor());
            ba = new uj(H);
            aa = new qk;
            ea = new Bk(H,ra,Y,aa,Ga,qa,ba);
            la = new mj(H,Ga);
            wa = new sj(H,la,ba);
            sa = new xj(H,wa,la,ba);
            ya = new wj(H);
            ta = new pk(I,ra,Ga);
            xa = new tk;
            va = new zk;
            pa = new nj(I,Y,sa,Z);
            Aa = new oj(H,ra,ba,Ga);
            Ca = new tj(H,ra,ba,Ga);
            ba.programs = ta.programs;
            I.capabilities = Ga;
            I.extensions = ra;
            I.properties = aa;
            I.renderLists = xa;
            I.state = Y;
            I.info = ba
        }
        function d(a) {
            a.preventDefault();
            console.log("THREE.WebGLRenderer: Context Lost.");
            G = !0
        }
        function e() {
            console.log("THREE.WebGLRenderer: Context Restored.");
            G = !1;
            c()
        }
        function f(a) {
            a = a.target;
            a.removeEventListener("dispose", f);
            g(a);
            aa.remove(a)
        }
        function g(a) {
            var b = aa.get(a).program;
            a.program = void 0;
            void 0 !== b && ta.releaseProgram(b)
        }
        function h(a, b) {
            a.render(function(a) {
                I.renderBufferImmediate(a, b)
            })
        }
        function k(a, b, c, d) {
            if (!1 !== a.visible) {
                if (a.layers.test(b.layers))
                    if (a.isGroup)
                        c = a.renderOrder;
                    else if (a.isLOD)
                        !0 === a.autoUpdate && a.update(b);
                    else if (a.isLight)
                        A.pushLight(a),
                        a.castShadow && A.pushShadow(a);
                    else if (a.isSprite) {
                        if (!a.frustumCulled || jg.intersectsSprite(a)) {
                            d && Jb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id);
                            var e = sa.update(a)
                              , f = a.material;
                            f.visible && B.push(a, e, f, c, Jb.z, null)
                        }
                    } else if (a.isImmediateRenderObject)
                        d && Jb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id),
                        B.push(a, null, a.material, c, Jb.z, null);
                    else if (a.isMesh || a.isLine || a.isPoints)
                        if (a.isSkinnedMesh && a.skeleton.frame !== ba.render.frame && (a.skeleton.update(),
                        a.skeleton.frame = ba.render.frame),
                        !a.frustumCulled || jg.intersectsObject(a))
                            if (d && Jb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id),
                            e = sa.update(a),
                            f = a.material,
                            Array.isArray(f))
                                for (var g = e.groups, h = 0, m = g.length; h < m; h++) {
                                    var p = g[h]
                                      , l = f[p.materialIndex];
                                    l && l.visible && B.push(a, e, l, c, Jb.z, p)
                                }
                            else
                                f.visible && B.push(a, e, f, c, Jb.z, null);
                a = a.children;
                h = 0;
                for (m = a.length; h < m; h++)
                    k(a[h], b, c, d)
            }
        }
        function m(a, b, c, d) {
            for (var e = 0, f = a.length; e < f; e++) {
                var g = a[e]
                  , h = g.object
                  , k = g.geometry
                  , m = void 0 === d ? g.material : d;
                g = g.group;
                if (c.isArrayCamera) {
                    T = c;
                    for (var p = c.cameras, z = 0, q = p.length; z < q; z++) {
                        var u = p[z];
                        h.layers.test(u.layers) && (Y.viewport(W.copy(u.viewport)),
                        A.setupLights(u),
                        l(h, b, u, k, m, g))
                    }
                } else
                    T = null,
                    l(h, b, c, k, m, g)
            }
        }
        function l(a, c, d, e, f, g) {
            a.onBeforeRender(I, c, d, e, f, g);
            A = va.get(c, T || d);
            a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld);
            a.normalMatrix.getNormalMatrix(a.modelViewMatrix);
            if (a.isImmediateRenderObject) {
                var k = u(d, c, f, a);
                Y.setMaterial(f);
                fa = b = null;
                Je = !1;
                h(a, k)
            } else
                I.renderBufferDirect(d, c, e, f, a, g);
            a.onAfterRender(I, c, d, e, f, g);
            A = va.get(c, T || d)
        }
        function p(a, b, c) {
            var d = aa.get(a)
              , e = A.state.lights
              , h = e.state.version;
            c = ta.getParameters(a, e.state, A.state.shadowsArray, b, Ua.numPlanes, Ua.numIntersection, c);
            var k = ta.getProgramCacheKey(c)
              , m = d.program
              , p = !0;
            if (void 0 === m)
                a.addEventListener("dispose", f);
            else if (m.cacheKey !== k)
                g(a);
            else {
                if (d.lightsStateVersion !== h)
                    d.lightsStateVersion = h;
                else if (void 0 !== c.shaderID)
                    return;
                p = !1
            }
            p && (m = ta.acquireProgram(c, k),
            d.program = m,
            d.uniforms = c.uniforms,
            d.outputEncoding = c.outputEncoding,
            a.program = m);
            c = m.getAttributes();
            if (a.morphTargets)
                for (k = a.numSupportedMorphTargets = 0; k < I.maxMorphTargets; k++)
                    0 <= c["morphTarget" + k] && a.numSupportedMorphTargets++;
            if (a.morphNormals)
                for (k = a.numSupportedMorphNormals = 0; k < I.maxMorphNormals; k++)
                    0 <= c["morphNormal" + k] && a.numSupportedMorphNormals++;
            c = d.uniforms;
            if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping)
                d.numClippingPlanes = Ua.numPlanes,
                d.numIntersection = Ua.numIntersection,
                c.clippingPlanes = Ua.uniform;
            d.environment = a.isMeshStandardMaterial ? b.environment : null;
            d.fog = b.fog;
            d.needsLights = a.isMeshLambertMaterial || a.isMeshToonMaterial || a.isMeshPhongMaterial || a.isMeshStandardMaterial || a.isShadowMaterial || a.isShaderMaterial && !0 === a.lights;
            d.lightsStateVersion = h;
            d.needsLights && (c.ambientLightColor.value = e.state.ambient,
            c.lightProbe.value = e.state.probe,
            c.directionalLights.value = e.state.directional,
            c.directionalLightShadows.value = e.state.directionalShadow,
            c.spotLights.value = e.state.spot,
            c.spotLightShadows.value = e.state.spotShadow,
            c.rectAreaLights.value = e.state.rectArea,
            c.pointLights.value = e.state.point,
            c.pointLightShadows.value = e.state.pointShadow,
            c.hemisphereLights.value = e.state.hemi,
            c.directionalShadowMap.value = e.state.directionalShadowMap,
            c.directionalShadowMatrix.value = e.state.directionalShadowMatrix,
            c.spotShadowMap.value = e.state.spotShadowMap,
            c.spotShadowMatrix.value = e.state.spotShadowMatrix,
            c.pointShadowMap.value = e.state.pointShadowMap,
            c.pointShadowMatrix.value = e.state.pointShadowMatrix);
            a = d.program.getUniforms();
            a = Gb.seqWithValue(a.seq, c);
            d.uniformsList = a
        }
        function u(a, b, c, d) {
            ea.resetTextureUnits();
            var e = b.fog
              , f = c.isMeshStandardMaterial ? b.environment : null
              , g = null === L ? I.outputEncoding : L.texture.encoding
              , h = aa.get(c)
              , k = A.state.lights;
            oa && (kg || a !== V) && Ua.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, h, a === V && c.id === Ie);
            c.version === h.__version ? void 0 === h.program ? p(c, b, d) : c.fog && h.fog !== e ? p(c, b, d) : h.environment !== f ? p(c, b, d) : h.needsLights && h.lightsStateVersion !== k.state.version ? p(c, b, d) : void 0 === h.numClippingPlanes || h.numClippingPlanes === Ua.numPlanes && h.numIntersection === Ua.numIntersection ? h.outputEncoding !== g && p(c, b, d) : p(c, b, d) : (p(c, b, d),
            h.__version = c.version);
            var m = !1
              , l = !1
              , z = !1;
            b = h.program;
            g = b.getUniforms();
            k = h.uniforms;
            Y.useProgram(b.program) && (z = l = m = !0);
            c.id !== Ie && (Ie = c.id,
            l = !0);
            if (m || V !== a) {
                g.setValue(H, "projectionMatrix", a.projectionMatrix);
                Ga.logarithmicDepthBuffer && g.setValue(H, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
                V !== a && (V = a,
                z = l = !0);
                if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshStandardMaterial || c.envMap)
                    m = g.map.cameraPosition,
                    void 0 !== m && m.setValue(H, Jb.setFromMatrixPosition(a.matrixWorld));
                (c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial) && g.setValue(H, "isOrthographic", !0 === a.isOrthographicCamera);
                (c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) && g.setValue(H, "viewMatrix", a.matrixWorldInverse)
            }
            if (c.skinning && (g.setOptional(H, d, "bindMatrix"),
            g.setOptional(H, d, "bindMatrixInverse"),
            a = d.skeleton))
                if (m = a.bones,
                Ga.floatVertexTextures) {
                    if (void 0 === a.boneTexture) {
                        m = Math.sqrt(4 * m.length);
                        m = M.ceilPowerOfTwo(m);
                        m = Math.max(m, 4);
                        var u = new Float32Array(m * m * 4);
                        u.set(a.boneMatrices);
                        var t = new Zb(u,m,m,1023,1015);
                        a.boneMatrices = u;
                        a.boneTexture = t;
                        a.boneTextureSize = m
                    }
                    g.setValue(H, "boneTexture", a.boneTexture, ea);
                    g.setValue(H, "boneTextureSize", a.boneTextureSize)
                } else
                    g.setOptional(H, a, "boneMatrices");
            if (l || h.receiveShadow !== d.receiveShadow)
                h.receiveShadow = d.receiveShadow,
                g.setValue(H, "receiveShadow", d.receiveShadow);
            if (l) {
                g.setValue(H, "toneMappingExposure", I.toneMappingExposure);
                g.setValue(H, "toneMappingWhitePoint", I.toneMappingWhitePoint);
                h.needsLights && (l = z,
                k.ambientLightColor.needsUpdate = l,
                k.lightProbe.needsUpdate = l,
                k.directionalLights.needsUpdate = l,
                k.directionalLightShadows.needsUpdate = l,
                k.pointLights.needsUpdate = l,
                k.pointLightShadows.needsUpdate = l,
                k.spotLights.needsUpdate = l,
                k.spotLightShadows.needsUpdate = l,
                k.rectAreaLights.needsUpdate = l,
                k.hemisphereLights.needsUpdate = l);
                e && c.fog && (k.fogColor.value.copy(e.color),
                e.isFog ? (k.fogNear.value = e.near,
                k.fogFar.value = e.far) : e.isFogExp2 && (k.fogDensity.value = e.density));
                if (c.isMeshBasicMaterial)
                    r(k, c);
                else if (c.isMeshLambertMaterial)
                    r(k, c),
                    c.emissiveMap && (k.emissiveMap.value = c.emissiveMap);
                else if (c.isMeshToonMaterial)
                    r(k, c),
                    k.specular.value.copy(c.specular),
                    k.shininess.value = Math.max(c.shininess, 1E-4),
                    c.gradientMap && (k.gradientMap.value = c.gradientMap),
                    c.emissiveMap && (k.emissiveMap.value = c.emissiveMap),
                    c.bumpMap && (k.bumpMap.value = c.bumpMap,
                    k.bumpScale.value = c.bumpScale,
                    1 === c.side && (k.bumpScale.value *= -1)),
                    c.normalMap && (k.normalMap.value = c.normalMap,
                    k.normalScale.value.copy(c.normalScale),
                    1 === c.side && k.normalScale.value.negate()),
                    c.displacementMap && (k.displacementMap.value = c.displacementMap,
                    k.displacementScale.value = c.displacementScale,
                    k.displacementBias.value = c.displacementBias);
                else if (c.isMeshPhongMaterial)
                    r(k, c),
                    k.specular.value.copy(c.specular),
                    k.shininess.value = Math.max(c.shininess, 1E-4),
                    c.emissiveMap && (k.emissiveMap.value = c.emissiveMap),
                    c.bumpMap && (k.bumpMap.value = c.bumpMap,
                    k.bumpScale.value = c.bumpScale,
                    1 === c.side && (k.bumpScale.value *= -1)),
                    c.normalMap && (k.normalMap.value = c.normalMap,
                    k.normalScale.value.copy(c.normalScale),
                    1 === c.side && k.normalScale.value.negate()),
                    c.displacementMap && (k.displacementMap.value = c.displacementMap,
                    k.displacementScale.value = c.displacementScale,
                    k.displacementBias.value = c.displacementBias);
                else if (c.isMeshStandardMaterial)
                    r(k, c, f),
                    c.isMeshPhysicalMaterial ? (q(k, c, f),
                    k.reflectivity.value = c.reflectivity,
                    k.clearcoat.value = c.clearcoat,
                    k.clearcoatRoughness.value = c.clearcoatRoughness,
                    c.sheen && k.sheen.value.copy(c.sheen),
                    c.clearcoatMap && (k.clearcoatMap.value = c.clearcoatMap),
                    c.clearcoatRoughnessMap && (k.clearcoatRoughnessMap.value = c.clearcoatRoughnessMap),
                    c.clearcoatNormalMap && (k.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),
                    k.clearcoatNormalMap.value = c.clearcoatNormalMap,
                    1 === c.side && k.clearcoatNormalScale.value.negate()),
                    k.transparency.value = c.transparency) : q(k, c, f);
                else if (c.isMeshMatcapMaterial)
                    r(k, c),
                    c.matcap && (k.matcap.value = c.matcap),
                    c.bumpMap && (k.bumpMap.value = c.bumpMap,
                    k.bumpScale.value = c.bumpScale,
                    1 === c.side && (k.bumpScale.value *= -1)),
                    c.normalMap && (k.normalMap.value = c.normalMap,
                    k.normalScale.value.copy(c.normalScale),
                    1 === c.side && k.normalScale.value.negate()),
                    c.displacementMap && (k.displacementMap.value = c.displacementMap,
                    k.displacementScale.value = c.displacementScale,
                    k.displacementBias.value = c.displacementBias);
                else if (c.isMeshDepthMaterial)
                    r(k, c),
                    c.displacementMap && (k.displacementMap.value = c.displacementMap,
                    k.displacementScale.value = c.displacementScale,
                    k.displacementBias.value = c.displacementBias);
                else if (c.isMeshDistanceMaterial)
                    r(k, c),
                    c.displacementMap && (k.displacementMap.value = c.displacementMap,
                    k.displacementScale.value = c.displacementScale,
                    k.displacementBias.value = c.displacementBias),
                    k.referencePosition.value.copy(c.referencePosition),
                    k.nearDistance.value = c.nearDistance,
                    k.farDistance.value = c.farDistance;
                else if (c.isMeshNormalMaterial)
                    r(k, c),
                    c.bumpMap && (k.bumpMap.value = c.bumpMap,
                    k.bumpScale.value = c.bumpScale,
                    1 === c.side && (k.bumpScale.value *= -1)),
                    c.normalMap && (k.normalMap.value = c.normalMap,
                    k.normalScale.value.copy(c.normalScale),
                    1 === c.side && k.normalScale.value.negate()),
                    c.displacementMap && (k.displacementMap.value = c.displacementMap,
                    k.displacementScale.value = c.displacementScale,
                    k.displacementBias.value = c.displacementBias);
                else if (c.isLineBasicMaterial)
                    k.diffuse.value.copy(c.color),
                    k.opacity.value = c.opacity,
                    c.isLineDashedMaterial && (k.dashSize.value = c.dashSize,
                    k.totalSize.value = c.dashSize + c.gapSize,
                    k.scale.value = c.scale);
                else if (c.isPointsMaterial) {
                    k.diffuse.value.copy(c.color);
                    k.opacity.value = c.opacity;
                    k.size.value = c.size * R;
                    k.scale.value = .5 * K;
                    c.map && (k.map.value = c.map);
                    c.alphaMap && (k.alphaMap.value = c.alphaMap);
                    if (c.map)
                        var n = c.map;
                    else
                        c.alphaMap && (n = c.alphaMap);
                    void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                    k.uvTransform.value.copy(n.matrix))
                } else if (c.isSpriteMaterial) {
                    k.diffuse.value.copy(c.color);
                    k.opacity.value = c.opacity;
                    k.rotation.value = c.rotation;
                    c.map && (k.map.value = c.map);
                    c.alphaMap && (k.alphaMap.value = c.alphaMap);
                    if (c.map)
                        var w = c.map;
                    else
                        c.alphaMap && (w = c.alphaMap);
                    void 0 !== w && (!0 === w.matrixAutoUpdate && w.updateMatrix(),
                    k.uvTransform.value.copy(w.matrix))
                } else
                    c.isShadowMaterial && (k.color.value.copy(c.color),
                    k.opacity.value = c.opacity);
                void 0 !== k.ltc_1 && (k.ltc_1.value = D.LTC_1);
                void 0 !== k.ltc_2 && (k.ltc_2.value = D.LTC_2);
                Gb.upload(H, h.uniformsList, k, ea);
                c.isShaderMaterial && (c.uniformsNeedUpdate = !1)
            }
            c.isShaderMaterial && !0 === c.uniformsNeedUpdate && (Gb.upload(H, h.uniformsList, k, ea),
            c.uniformsNeedUpdate = !1);
            c.isSpriteMaterial && g.setValue(H, "center", d.center);
            g.setValue(H, "modelViewMatrix", d.modelViewMatrix);
            g.setValue(H, "normalMatrix", d.normalMatrix);
            g.setValue(H, "modelMatrix", d.matrixWorld);
            return b
        }
        function r(a, b, c) {
            a.opacity.value = b.opacity;
            b.color && a.diffuse.value.copy(b.color);
            b.emissive && a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
            b.map && (a.map.value = b.map);
            b.alphaMap && (a.alphaMap.value = b.alphaMap);
            b.specularMap && (a.specularMap.value = b.specularMap);
            if (c = b.envMap || c)
                a.envMap.value = c,
                a.flipEnvMap.value = c.isCubeTexture ? -1 : 1,
                a.reflectivity.value = b.reflectivity,
                a.refractionRatio.value = b.refractionRatio,
                a.maxMipLevel.value = aa.get(c).__maxMipLevel;
            b.lightMap && (a.lightMap.value = b.lightMap,
            a.lightMapIntensity.value = b.lightMapIntensity);
            b.aoMap && (a.aoMap.value = b.aoMap,
            a.aoMapIntensity.value = b.aoMapIntensity);
            if (b.map)
                var d = b.map;
            else
                b.specularMap ? d = b.specularMap : b.displacementMap ? d = b.displacementMap : b.normalMap ? d = b.normalMap : b.bumpMap ? d = b.bumpMap : b.roughnessMap ? d = b.roughnessMap : b.metalnessMap ? d = b.metalnessMap : b.alphaMap ? d = b.alphaMap : b.emissiveMap && (d = b.emissiveMap);
            void 0 !== d && (d.isWebGLRenderTarget && (d = d.texture),
            !0 === d.matrixAutoUpdate && d.updateMatrix(),
            a.uvTransform.value.copy(d.matrix));
            if (b.aoMap)
                var e = b.aoMap;
            else
                b.lightMap && (e = b.lightMap);
            void 0 !== e && (e.isWebGLRenderTarget && (e = e.texture),
            !0 === e.matrixAutoUpdate && e.updateMatrix(),
            a.uv2Transform.value.copy(e.matrix))
        }
        function q(a, b, c) {
            a.roughness.value = b.roughness;
            a.metalness.value = b.metalness;
            b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
            b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap,
            a.bumpScale.value = b.bumpScale,
            1 === b.side && (a.bumpScale.value *= -1));
            b.normalMap && (a.normalMap.value = b.normalMap,
            a.normalScale.value.copy(b.normalScale),
            1 === b.side && a.normalScale.value.negate());
            b.displacementMap && (a.displacementMap.value = b.displacementMap,
            a.displacementScale.value = b.displacementScale,
            a.displacementBias.value = b.displacementBias);
            if (b.envMap || c)
                a.envMapIntensity.value = b.envMapIntensity
        }
        a = a || {};
        var t = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , F = void 0 !== a.context ? a.context : null
          , x = void 0 !== a.alpha ? a.alpha : !1
          , w = void 0 !== a.depth ? a.depth : !0
          , ha = void 0 !== a.stencil ? a.stencil : !0
          , U = void 0 !== a.antialias ? a.antialias : !1
          , Z = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0
          , C = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1
          , y = void 0 !== a.powerPreference ? a.powerPreference : "default"
          , E = void 0 !== a.failIfMajorPerformanceCaveat ? a.failIfMajorPerformanceCaveat : !1
          , B = null
          , A = null;
        this.domElement = t;
        this.debug = {
            checkShaderErrors: !0
        };
        this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
        this.clippingPlanes = [];
        this.localClippingEnabled = !1;
        this.gammaFactor = 2;
        this.outputEncoding = 3E3;
        this.physicallyCorrectLights = !1;
        this.toneMapping = 0;
        this.toneMappingWhitePoint = this.toneMappingExposure = 1;
        this.maxMorphTargets = 8;
        this.maxMorphNormals = 4;
        var I = this
          , G = !1
          , N = null
          , O = 0
          , J = 0
          , L = null
          , X = null
          , Ie = -1;
        var fa = b = null;
        var Je = !1;
        var V = null
          , T = null
          , W = new ca
          , S = new ca
          , ja = null
          , da = t.width
          , K = t.height
          , R = 1
          , ka = null
          , na = null
          , Q = new ca(0,0,da,K)
          , ia = new ca(0,0,da,K)
          , ig = !1
          , jg = new Ec
          , Ua = new qj
          , oa = !1
          , kg = !1
          , Id = new P
          , Jb = new n;
        try {
            x = {
                alpha: x,
                depth: w,
                stencil: ha,
                antialias: U,
                premultipliedAlpha: Z,
                preserveDrawingBuffer: C,
                powerPreference: y,
                failIfMajorPerformanceCaveat: E,
                xrCompatible: !0
            };
            t.addEventListener("webglcontextlost", d, !1);
            t.addEventListener("webglcontextrestored", e, !1);
            var H = F || t.getContext("webgl", x) || t.getContext("experimental-webgl", x);
            if (null === H) {
                if (null !== t.getContext("webgl"))
                    throw Error("Error creating WebGL context with your selected attributes.");
                throw Error("Error creating WebGL context.");
            }
            void 0 === H.getShaderPrecisionFormat && (H.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (Yh) {
            throw console.error("THREE.WebGLRenderer: " + Yh.message),
            Yh;
        }
        var ra, Ga, Y, ba, aa, ea, la, wa, sa, ta, xa, va, pa, ya, Aa, Ca, qa;
        c();
        var ua = new Xh(I,H);
        this.xr = ua;
        var Ea = new Uh(I,sa,Ga.maxTextureSize);
        this.shadowMap = Ea;
        this.getContext = function() {
            return H
        }
        ;
        this.getContextAttributes = function() {
            return H.getContextAttributes()
        }
        ;
        this.forceContextLoss = function() {
            var a = ra.get("WEBGL_lose_context");
            a && a.loseContext()
        }
        ;
        this.forceContextRestore = function() {
            var a = ra.get("WEBGL_lose_context");
            a && a.restoreContext()
        }
        ;
        this.getPixelRatio = function() {
            return R
        }
        ;
        this.setPixelRatio = function(a) {
            void 0 !== a && (R = a,
            this.setSize(da, K, !1))
        }
        ;
        this.getSize = function(a) {
            void 0 === a && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
            a = new v);
            return a.set(da, K)
        }
        ;
        this.setSize = function(a, b, c) {
            ua.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (da = a,
            K = b,
            t.width = Math.floor(a * R),
            t.height = Math.floor(b * R),
            !1 !== c && (t.style.width = a + "px",
            t.style.height = b + "px"),
            this.setViewport(0, 0, a, b))
        }
        ;
        this.getDrawingBufferSize = function(a) {
            void 0 === a && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
            a = new v);
            return a.set(da * R, K * R).floor()
        }
        ;
        this.setDrawingBufferSize = function(a, b, c) {
            da = a;
            K = b;
            R = c;
            t.width = Math.floor(a * c);
            t.height = Math.floor(b * c);
            this.setViewport(0, 0, a, b)
        }
        ;
        this.getCurrentViewport = function(a) {
            void 0 === a && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
            a = new ca);
            return a.copy(W)
        }
        ;
        this.getViewport = function(a) {
            return a.copy(Q)
        }
        ;
        this.setViewport = function(a, b, c, d) {
            a.isVector4 ? Q.set(a.x, a.y, a.z, a.w) : Q.set(a, b, c, d);
            Y.viewport(W.copy(Q).multiplyScalar(R).floor())
        }
        ;
        this.getScissor = function(a) {
            return a.copy(ia)
        }
        ;
        this.setScissor = function(a, b, c, d) {
            a.isVector4 ? ia.set(a.x, a.y, a.z, a.w) : ia.set(a, b, c, d);
            Y.scissor(S.copy(ia).multiplyScalar(R).floor())
        }
        ;
        this.getScissorTest = function() {
            return ig
        }
        ;
        this.setScissorTest = function(a) {
            Y.setScissorTest(ig = a)
        }
        ;
        this.setOpaqueSort = function(a) {
            ka = a
        }
        ;
        this.setTransparentSort = function(a) {
            na = a
        }
        ;
        this.getClearColor = function() {
            return pa.getClearColor()
        }
        ;
        this.setClearColor = function() {
            pa.setClearColor.apply(pa, arguments)
        }
        ;
        this.getClearAlpha = function() {
            return pa.getClearAlpha()
        }
        ;
        this.setClearAlpha = function() {
            pa.setClearAlpha.apply(pa, arguments)
        }
        ;
        this.clear = function(a, b, c) {
            var d = 0;
            if (void 0 === a || a)
                d |= 16384;
            if (void 0 === b || b)
                d |= 256;
            if (void 0 === c || c)
                d |= 1024;
            H.clear(d)
        }
        ;
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ;
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ;
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ;
        this.dispose = function() {
            t.removeEventListener("webglcontextlost", d, !1);
            t.removeEventListener("webglcontextrestored", e, !1);
            xa.dispose();
            va.dispose();
            aa.dispose();
            sa.dispose();
            ua.dispose();
            za.stop()
        }
        ;
        this.renderBufferImmediate = function(a, b) {
            Y.initAttributes();
            var c = aa.get(a);
            a.hasPositions && !c.position && (c.position = H.createBuffer());
            a.hasNormals && !c.normal && (c.normal = H.createBuffer());
            a.hasUvs && !c.uv && (c.uv = H.createBuffer());
            a.hasColors && !c.color && (c.color = H.createBuffer());
            b = b.getAttributes();
            a.hasPositions && (H.bindBuffer(34962, c.position),
            H.bufferData(34962, a.positionArray, 35048),
            Y.enableAttribute(b.position),
            H.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0));
            a.hasNormals && (H.bindBuffer(34962, c.normal),
            H.bufferData(34962, a.normalArray, 35048),
            Y.enableAttribute(b.normal),
            H.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0));
            a.hasUvs && (H.bindBuffer(34962, c.uv),
            H.bufferData(34962, a.uvArray, 35048),
            Y.enableAttribute(b.uv),
            H.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0));
            a.hasColors && (H.bindBuffer(34962, c.color),
            H.bufferData(34962, a.colorArray, 35048),
            Y.enableAttribute(b.color),
            H.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0));
            Y.disableUnusedAttributes();
            H.drawArrays(4, 0, a.count);
            a.count = 0
        }
        ;
        var Ha = new ob;
        this.renderBufferDirect = function(a, c, d, e, f, g) {
            null === c && (c = Ha);
            var h = f.isMesh && 0 > f.matrixWorld.determinant()
              , k = u(a, c, e, f);
            Y.setMaterial(e, h);
            var m = !1;
            if (b !== d.id || fa !== k.id || Je !== (!0 === e.wireframe))
                b = d.id,
                fa = k.id,
                Je = !0 === e.wireframe,
                m = !0;
            if (e.morphTargets || e.morphNormals)
                ya.update(f, d, e, k),
                m = !0;
            !0 === f.isInstancedMesh && (m = !0);
            a = d.index;
            c = d.attributes.position;
            if (null === a) {
                if (void 0 === c || 0 === c.count)
                    return
            } else if (0 === a.count)
                return;
            var p = 1;
            !0 === e.wireframe && (a = wa.getWireframeAttribute(d),
            p = 2);
            h = Aa;
            if (null !== a) {
                var l = la.get(a);
                h = Ca;
                h.setIndex(l)
            }
            if (m) {
                if (!1 !== Ga.isWebGL2 || !f.isInstancedMesh && !d.isInstancedBufferGeometry || null !== ra.get("ANGLE_instanced_arrays")) {
                    Y.initAttributes();
                    m = d.attributes;
                    k = k.getAttributes();
                    var z = e.defaultAttributeValues;
                    for (ha in k) {
                        var q = k[ha];
                        if (0 <= q) {
                            var r = m[ha];
                            if (void 0 !== r) {
                                var t = r.normalized
                                  , n = r.itemSize
                                  , w = la.get(r);
                                if (void 0 !== w) {
                                    var F = w.buffer
                                      , x = w.type;
                                    w = w.bytesPerElement;
                                    if (r.isInterleavedBufferAttribute) {
                                        var v = r.data
                                          , C = v.stride;
                                        r = r.offset;
                                        v && v.isInstancedInterleavedBuffer ? (Y.enableAttributeAndDivisor(q, v.meshPerAttribute),
                                        void 0 === d.maxInstancedCount && (d.maxInstancedCount = v.meshPerAttribute * v.count)) : Y.enableAttribute(q);
                                        H.bindBuffer(34962, F);
                                        Y.vertexAttribPointer(q, n, x, t, C * w, r * w)
                                    } else
                                        r.isInstancedBufferAttribute ? (Y.enableAttributeAndDivisor(q, r.meshPerAttribute),
                                        void 0 === d.maxInstancedCount && (d.maxInstancedCount = r.meshPerAttribute * r.count)) : Y.enableAttribute(q),
                                        H.bindBuffer(34962, F),
                                        Y.vertexAttribPointer(q, n, x, t, 0, 0)
                                }
                            } else if ("instanceMatrix" === ha)
                                w = la.get(f.instanceMatrix),
                                void 0 !== w && (F = w.buffer,
                                x = w.type,
                                Y.enableAttributeAndDivisor(q + 0, 1),
                                Y.enableAttributeAndDivisor(q + 1, 1),
                                Y.enableAttributeAndDivisor(q + 2, 1),
                                Y.enableAttributeAndDivisor(q + 3, 1),
                                H.bindBuffer(34962, F),
                                H.vertexAttribPointer(q + 0, 4, x, !1, 64, 0),
                                H.vertexAttribPointer(q + 1, 4, x, !1, 64, 16),
                                H.vertexAttribPointer(q + 2, 4, x, !1, 64, 32),
                                H.vertexAttribPointer(q + 3, 4, x, !1, 64, 48));
                            else if (void 0 !== z && (t = z[ha],
                            void 0 !== t))
                                switch (t.length) {
                                case 2:
                                    H.vertexAttrib2fv(q, t);
                                    break;
                                case 3:
                                    H.vertexAttrib3fv(q, t);
                                    break;
                                case 4:
                                    H.vertexAttrib4fv(q, t);
                                    break;
                                default:
                                    H.vertexAttrib1fv(q, t)
                                }
                        }
                    }
                    Y.disableUnusedAttributes()
                }
                null !== a && H.bindBuffer(34963, l.buffer)
            }
            var ha = d.drawRange.start * p;
            m = null !== g ? g.start * p : 0;
            l = Math.max(ha, m);
            g = Math.max(0, Math.min(null !== a ? a.count : c.count, ha + d.drawRange.count * p, m + (null !== g ? g.count * p : Infinity)) - 1 - l + 1);
            0 !== g && (f.isMesh ? !0 === e.wireframe ? (Y.setLineWidth(e.wireframeLinewidth * (null === L ? R : 1)),
            h.setMode(1)) : h.setMode(4) : f.isLine ? (e = e.linewidth,
            void 0 === e && (e = 1),
            Y.setLineWidth(e * (null === L ? R : 1)),
            f.isLineSegments ? h.setMode(1) : f.isLineLoop ? h.setMode(2) : h.setMode(3)) : f.isPoints ? h.setMode(0) : f.isSprite && h.setMode(4),
            f.isInstancedMesh ? h.renderInstances(d, l, g, f.count) : d.isInstancedBufferGeometry ? h.renderInstances(d, l, g, d.maxInstancedCount) : h.render(l, g))
        }
        ;
        this.compile = function(a, b) {
            A = va.get(a, b);
            A.init();
            a.traverse(function(a) {
                a.isLight && (A.pushLight(a),
                a.castShadow && A.pushShadow(a))
            });
            A.setupLights(b);
            var c = {};
            a.traverse(function(b) {
                if (b.material)
                    if (Array.isArray(b.material))
                        for (var d = 0; d < b.material.length; d++)
                            !1 === b.material[d].uuid in c && (p(b.material[d], a, b),
                            c[b.material[d].uuid] = !0);
                    else
                        !1 === b.material.uuid in c && (p(b.material, a, b),
                        c[b.material.uuid] = !0)
            })
        }
        ;
        var Da = null
          , za = new xh;
        za.setAnimationLoop(function(a) {
            ua.isPresenting || Da && Da(a)
        });
        "undefined" !== typeof window && za.setContext(window);
        this.setAnimationLoop = function(a) {
            Da = a;
            ua.setAnimationLoop(a);
            za.start()
        }
        ;
        this.render = function(a, c, d, e) {
            if (void 0 !== d) {
                console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
                var f = d
            }
            if (void 0 !== e) {
                console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
                var g = e
            }
            c && c.isCamera ? G || (fa = b = null,
            Je = !1,
            Ie = -1,
            V = null,
            !0 === a.autoUpdate && a.updateMatrixWorld(),
            null === c.parent && c.updateMatrixWorld(),
            ua.enabled && ua.isPresenting && (c = ua.getCamera(c)),
            a.onBeforeRender(I, a, c, f || L),
            A = va.get(a, c),
            A.init(),
            Id.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse),
            jg.setFromProjectionMatrix(Id),
            kg = this.localClippingEnabled,
            oa = Ua.init(this.clippingPlanes, kg, c),
            B = xa.get(a, c),
            B.init(),
            k(a, c, 0, I.sortObjects),
            B.finish(),
            !0 === I.sortObjects && B.sort(ka, na),
            oa && Ua.beginShadows(),
            Ea.render(A.state.shadowsArray, a, c),
            A.setupLights(c),
            oa && Ua.endShadows(),
            this.info.autoReset && this.info.reset(),
            void 0 !== f && this.setRenderTarget(f),
            pa.render(B, a, c, g),
            d = B.opaque,
            e = B.transparent,
            a.overrideMaterial ? (f = a.overrideMaterial,
            d.length && m(d, a, c, f),
            e.length && m(e, a, c, f)) : (d.length && m(d, a, c),
            e.length && m(e, a, c)),
            a.onAfterRender(I, a, c),
            null !== L && (ea.updateRenderTargetMipmap(L),
            ea.updateMultisampleRenderTarget(L)),
            Y.buffers.depth.setTest(!0),
            Y.buffers.depth.setMask(!0),
            Y.buffers.color.setMask(!0),
            Y.setPolygonOffset(!1),
            A = B = null) : console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }
        ;
        this.setFramebuffer = function(a) {
            N !== a && null === L && H.bindFramebuffer(36160, a);
            N = a
        }
        ;
        this.getActiveCubeFace = function() {
            return O
        }
        ;
        this.getActiveMipmapLevel = function() {
            return J
        }
        ;
        this.getRenderTarget = function() {
            return L
        }
        ;
        this.setRenderTarget = function(a, b, c) {
            L = a;
            O = b;
            J = c;
            a && void 0 === aa.get(a).__webglFramebuffer && ea.setupRenderTarget(a);
            var d = N
              , e = !1;
            a ? (d = aa.get(a).__webglFramebuffer,
            a.isWebGLCubeRenderTarget ? (d = d[b || 0],
            e = !0) : d = a.isWebGLMultisampleRenderTarget ? aa.get(a).__webglMultisampledFramebuffer : d,
            W.copy(a.viewport),
            S.copy(a.scissor),
            ja = a.scissorTest) : (W.copy(Q).multiplyScalar(R).floor(),
            S.copy(ia).multiplyScalar(R).floor(),
            ja = ig);
            X !== d && (H.bindFramebuffer(36160, d),
            X = d);
            Y.viewport(W);
            Y.scissor(S);
            Y.setScissorTest(ja);
            e && (a = aa.get(a.texture),
            H.framebufferTexture2D(36160, 36064, 34069 + (b || 0), a.__webglTexture, c || 0))
        }
        ;
        this.readRenderTargetPixels = function(a, b, c, d, e, f, g) {
            if (a && a.isWebGLRenderTarget) {
                var h = aa.get(a).__webglFramebuffer;
                a.isWebGLCubeRenderTarget && void 0 !== g && (h = h[g]);
                if (h) {
                    g = !1;
                    h !== X && (H.bindFramebuffer(36160, h),
                    g = !0);
                    try {
                        var k = a.texture
                          , m = k.format
                          , p = k.type;
                        1023 !== m && qa.convert(m) !== H.getParameter(35739) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === p || qa.convert(p) === H.getParameter(35738) || 1015 === p && (Ga.isWebGL2 || ra.get("OES_texture_float") || ra.get("WEBGL_color_buffer_float")) || 1016 === p && (Ga.isWebGL2 ? ra.get("EXT_color_buffer_float") : ra.get("EXT_color_buffer_half_float")) ? 36053 === H.checkFramebufferStatus(36160) ? 0 <= b && b <= a.width - d && 0 <= c && c <= a.height - e && H.readPixels(b, c, d, e, qa.convert(m), qa.convert(p), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        g && H.bindFramebuffer(36160, X)
                    }
                }
            } else
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
        ;
        this.copyFramebufferToTexture = function(a, b, c) {
            void 0 === c && (c = 0);
            var d = Math.pow(2, -c)
              , e = Math.floor(b.image.width * d);
            d = Math.floor(b.image.height * d);
            var f = qa.convert(b.format);
            ea.setTexture2D(b, 0);
            H.copyTexImage2D(3553, c, f, a.x, a.y, e, d, 0);
            Y.unbindTexture()
        }
        ;
        this.copyTextureToTexture = function(a, b, c, d) {
            void 0 === d && (d = 0);
            var e = b.image.width
              , f = b.image.height
              , g = qa.convert(c.format)
              , h = qa.convert(c.type);
            ea.setTexture2D(c, 0);
            b.isDataTexture ? H.texSubImage2D(3553, d, a.x, a.y, e, f, g, h, b.image.data) : b.isCompressedTexture ? H.compressedTexSubImage2D(3553, d, a.x, a.y, b.mipmaps[0].width, b.mipmaps[0].height, g, b.mipmaps[0].data) : H.texSubImage2D(3553, d, a.x, a.y, g, h, b.image);
            0 === d && c.generateMipmaps && H.generateMipmap(3553);
            Y.unbindTexture()
        }
        ;
        this.initTexture = function(a) {
            ea.setTexture2D(a, 0);
            Y.unbindTexture()
        }
        ;
        "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    function Me(a, b) {
        this.name = "";
        this.color = new A(a);
        this.density = void 0 !== b ? b : 2.5E-4
    }
    function Ne(a, b, c) {
        this.name = "";
        this.color = new A(a);
        this.near = void 0 !== b ? b : 1;
        this.far = void 0 !== c ? c : 1E3
    }
    function qb(a, b) {
        this.array = a;
        this.stride = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.usage = 35044;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.version = 0
    }
    function Kd(a, b, c, d) {
        this.data = a;
        this.itemSize = b;
        this.offset = c;
        this.normalized = !0 === d
    }
    function Kb(a) {
        J.call(this);
        this.type = "SpriteMaterial";
        this.color = new A(16777215);
        this.alphaMap = this.map = null;
        this.rotation = 0;
        this.transparent = this.sizeAttenuation = !0;
        this.setValues(a)
    }
    function Ld(a) {
        E.call(this);
        this.type = "Sprite";
        if (void 0 === Kc) {
            Kc = new B;
            var b = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]);
            b = new qb(b,5);
            Kc.setIndex([0, 1, 2, 0, 2, 3]);
            Kc.setAttribute("position", new Kd(b,3,0,!1));
            Kc.setAttribute("uv", new Kd(b,2,3,!1))
        }
        this.geometry = Kc;
        this.material = void 0 !== a ? a : new Kb;
        this.center = new v(.5,.5)
    }
    function Oe(a, b, c, d, e, f) {
        Lc.subVectors(a, c).addScalar(.5).multiply(d);
        void 0 !== e ? (Md.x = f * Lc.x - e * Lc.y,
        Md.y = e * Lc.x + f * Lc.y) : Md.copy(Lc);
        a.copy(b);
        a.x += Md.x;
        a.y += Md.y;
        a.applyMatrix4(Zh)
    }
    function Nd() {
        E.call(this);
        this._currentLevel = 0;
        this.type = "LOD";
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        });
        this.autoUpdate = !0
    }
    function Pe(a, b) {
        a && a.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        ja.call(this, a, b);
        this.type = "SkinnedMesh";
        this.bindMode = "attached";
        this.bindMatrix = new P;
        this.bindMatrixInverse = new P
    }
    function Qe(a, b) {
        a = a || [];
        this.bones = a.slice(0);
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        this.frame = -1;
        if (void 0 === b)
            this.calculateInverses();
        else if (this.bones.length === b.length)
            this.boneInverses = b.slice(0);
        else
            for (console.warn("THREE.Skeleton boneInverses is the wrong length."),
            this.boneInverses = [],
            a = 0,
            b = this.bones.length; a < b; a++)
                this.boneInverses.push(new P)
    }
    function ng() {
        E.call(this);
        this.type = "Bone"
    }
    function Re(a, b, c) {
        ja.call(this, a, b);
        this.instanceMatrix = new N(new Float32Array(16 * c),16);
        this.count = c;
        this.frustumCulled = !1
    }
    function da(a) {
        J.call(this);
        this.type = "LineBasicMaterial";
        this.color = new A(16777215);
        this.linewidth = 1;
        this.linejoin = this.linecap = "round";
        this.setValues(a)
    }
    function Ja(a, b, c) {
        1 === c && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
        E.call(this);
        this.type = "Line";
        this.geometry = void 0 !== a ? a : new B;
        this.material = void 0 !== b ? b : new da
    }
    function na(a, b) {
        Ja.call(this, a, b);
        this.type = "LineSegments"
    }
    function Se(a, b) {
        Ja.call(this, a, b);
        this.type = "LineLoop"
    }
    function Va(a) {
        J.call(this);
        this.type = "PointsMaterial";
        this.color = new A(16777215);
        this.alphaMap = this.map = null;
        this.size = 1;
        this.sizeAttenuation = !0;
        this.morphTargets = !1;
        this.setValues(a)
    }
    function Mc(a, b) {
        E.call(this);
        this.type = "Points";
        this.geometry = void 0 !== a ? a : new B;
        this.material = void 0 !== b ? b : new Va;
        this.updateMorphTargets()
    }
    function og(a, b, c, d, e, f, g) {
        var h = pg.distanceSqToPoint(a);
        h < c && (c = new n,
        pg.closestPointToPoint(a, c),
        c.applyMatrix4(d),
        a = e.ray.origin.distanceTo(c),
        a < e.near || a > e.far || f.push({
            distance: a,
            distanceToRay: Math.sqrt(h),
            point: c,
            index: b,
            face: null,
            object: g
        }))
    }
    function qg(a, b, c, d, e, f, g, h, k) {
        V.call(this, a, b, c, d, e, f, g, h, k);
        this.format = void 0 !== g ? g : 1022;
        this.minFilter = void 0 !== f ? f : 1006;
        this.magFilter = void 0 !== e ? e : 1006;
        this.generateMipmaps = !1
    }
    function Nc(a, b, c, d, e, f, g, h, k, m, l, p) {
        V.call(this, null, f, g, h, k, m, d, e, l, p);
        this.image = {
            width: b,
            height: c
        };
        this.mipmaps = a;
        this.generateMipmaps = this.flipY = !1
    }
    function Od(a, b, c, d, e, f, g, h, k) {
        V.call(this, a, b, c, d, e, f, g, h, k);
        this.needsUpdate = !0
    }
    function Pd(a, b, c, d, e, f, g, h, k, m) {
        m = void 0 !== m ? m : 1026;
        if (1026 !== m && 1027 !== m)
            throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === c && 1026 === m && (c = 1012);
        void 0 === c && 1027 === m && (c = 1020);
        V.call(this, null, d, e, f, g, h, m, c, k);
        this.image = {
            width: a,
            height: b
        };
        this.magFilter = void 0 !== g ? g : 1003;
        this.minFilter = void 0 !== h ? h : 1003;
        this.generateMipmaps = this.flipY = !1
    }
    function Oc(a) {
        B.call(this);
        this.type = "WireframeGeometry";
        var b = [], c, d, e, f = [0, 0], g = {}, h = ["a", "b", "c"];
        if (a && a.isGeometry) {
            var k = a.faces;
            var m = 0;
            for (d = k.length; m < d; m++) {
                var l = k[m];
                for (c = 0; 3 > c; c++) {
                    var p = l[h[c]];
                    var u = l[h[(c + 1) % 3]];
                    f[0] = Math.min(p, u);
                    f[1] = Math.max(p, u);
                    p = f[0] + "," + f[1];
                    void 0 === g[p] && (g[p] = {
                        index1: f[0],
                        index2: f[1]
                    })
                }
            }
            for (p in g)
                m = g[p],
                h = a.vertices[m.index1],
                b.push(h.x, h.y, h.z),
                h = a.vertices[m.index2],
                b.push(h.x, h.y, h.z)
        } else if (a && a.isBufferGeometry)
            if (h = new n,
            null !== a.index) {
                k = a.attributes.position;
                l = a.index;
                var r = a.groups;
                0 === r.length && (r = [{
                    start: 0,
                    count: l.count,
                    materialIndex: 0
                }]);
                a = 0;
                for (e = r.length; a < e; ++a)
                    for (m = r[a],
                    c = m.start,
                    d = m.count,
                    m = c,
                    d = c + d; m < d; m += 3)
                        for (c = 0; 3 > c; c++)
                            p = l.getX(m + c),
                            u = l.getX(m + (c + 1) % 3),
                            f[0] = Math.min(p, u),
                            f[1] = Math.max(p, u),
                            p = f[0] + "," + f[1],
                            void 0 === g[p] && (g[p] = {
                                index1: f[0],
                                index2: f[1]
                            });
                for (p in g)
                    m = g[p],
                    h.fromBufferAttribute(k, m.index1),
                    b.push(h.x, h.y, h.z),
                    h.fromBufferAttribute(k, m.index2),
                    b.push(h.x, h.y, h.z)
            } else
                for (k = a.attributes.position,
                m = 0,
                d = k.count / 3; m < d; m++)
                    for (c = 0; 3 > c; c++)
                        g = 3 * m + c,
                        h.fromBufferAttribute(k, g),
                        b.push(h.x, h.y, h.z),
                        g = 3 * m + (c + 1) % 3,
                        h.fromBufferAttribute(k, g),
                        b.push(h.x, h.y, h.z);
        this.setAttribute("position", new y(b,3))
    }
    function Qd(a, b, c) {
        O.call(this);
        this.type = "ParametricGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        this.fromBufferGeometry(new Pc(a,b,c));
        this.mergeVertices()
    }
    function Pc(a, b, c) {
        B.call(this);
        this.type = "ParametricBufferGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        var d = [], e = [], f = [], g = [], h = new n, k = new n, m = new n, l = new n, p = new n, u, r;
        3 > a.length && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var q = b + 1;
        for (u = 0; u <= c; u++) {
            var t = u / c;
            for (r = 0; r <= b; r++) {
                var F = r / b;
                a(F, t, k);
                e.push(k.x, k.y, k.z);
                0 <= F - 1E-5 ? (a(F - 1E-5, t, m),
                l.subVectors(k, m)) : (a(F + 1E-5, t, m),
                l.subVectors(m, k));
                0 <= t - 1E-5 ? (a(F, t - 1E-5, m),
                p.subVectors(k, m)) : (a(F, t + 1E-5, m),
                p.subVectors(m, k));
                h.crossVectors(l, p).normalize();
                f.push(h.x, h.y, h.z);
                g.push(F, t)
            }
        }
        for (u = 0; u < c; u++)
            for (r = 0; r < b; r++)
                a = u * q + r + 1,
                h = (u + 1) * q + r + 1,
                k = (u + 1) * q + r,
                d.push(u * q + r, a, k),
                d.push(a, h, k);
        this.setIndex(d);
        this.setAttribute("position", new y(e,3));
        this.setAttribute("normal", new y(f,3));
        this.setAttribute("uv", new y(g,2))
    }
    function Rd(a, b, c, d) {
        O.call(this);
        this.type = "PolyhedronGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        this.fromBufferGeometry(new Ea(a,b,c,d));
        this.mergeVertices()
    }
    function Ea(a, b, c, d) {
        function e(a) {
            h.push(a.x, a.y, a.z)
        }
        function f(b, c) {
            b *= 3;
            c.x = a[b + 0];
            c.y = a[b + 1];
            c.z = a[b + 2]
        }
        function g(a, b, c, d) {
            0 > d && 1 === a.x && (k[b] = a.x - 1);
            0 === c.x && 0 === c.z && (k[b] = d / 2 / Math.PI + .5)
        }
        B.call(this);
        this.type = "PolyhedronBufferGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        c = c || 1;
        d = d || 0;
        var h = []
          , k = [];
        (function(a) {
            for (var c = new n, d = new n, g = new n, h = 0; h < b.length; h += 3) {
                f(b[h + 0], c);
                f(b[h + 1], d);
                f(b[h + 2], g);
                var k, m, l = c, x = d, w = g, v = Math.pow(2, a), U = [];
                for (m = 0; m <= v; m++) {
                    U[m] = [];
                    var Z = l.clone().lerp(w, m / v)
                      , C = x.clone().lerp(w, m / v)
                      , A = v - m;
                    for (k = 0; k <= A; k++)
                        U[m][k] = 0 === k && m === v ? Z : Z.clone().lerp(C, k / A)
                }
                for (m = 0; m < v; m++)
                    for (k = 0; k < 2 * (v - m) - 1; k++)
                        l = Math.floor(k / 2),
                        0 === k % 2 ? (e(U[m][l + 1]),
                        e(U[m + 1][l]),
                        e(U[m][l])) : (e(U[m][l + 1]),
                        e(U[m + 1][l + 1]),
                        e(U[m + 1][l]))
            }
        }
        )(d);
        (function(a) {
            for (var b = new n, c = 0; c < h.length; c += 3)
                b.x = h[c + 0],
                b.y = h[c + 1],
                b.z = h[c + 2],
                b.normalize().multiplyScalar(a),
                h[c + 0] = b.x,
                h[c + 1] = b.y,
                h[c + 2] = b.z
        }
        )(c);
        (function() {
            for (var a = new n, b = 0; b < h.length; b += 3)
                a.x = h[b + 0],
                a.y = h[b + 1],
                a.z = h[b + 2],
                k.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5));
            a = new n;
            b = new n;
            for (var c = new n, d = new n, e = new v, f = new v, l = new v, F = 0, x = 0; F < h.length; F += 9,
            x += 6) {
                a.set(h[F + 0], h[F + 1], h[F + 2]);
                b.set(h[F + 3], h[F + 4], h[F + 5]);
                c.set(h[F + 6], h[F + 7], h[F + 8]);
                e.set(k[x + 0], k[x + 1]);
                f.set(k[x + 2], k[x + 3]);
                l.set(k[x + 4], k[x + 5]);
                d.copy(a).add(b).add(c).divideScalar(3);
                var w = Math.atan2(d.z, -d.x);
                g(e, x + 0, a, w);
                g(f, x + 2, b, w);
                g(l, x + 4, c, w)
            }
            for (a = 0; a < k.length; a += 6)
                b = k[a + 0],
                c = k[a + 2],
                d = k[a + 4],
                e = Math.min(b, c, d),
                .9 < Math.max(b, c, d) && .1 > e && (.2 > b && (k[a + 0] += 1),
                .2 > c && (k[a + 2] += 1),
                .2 > d && (k[a + 4] += 1))
        }
        )();
        this.setAttribute("position", new y(h,3));
        this.setAttribute("normal", new y(h.slice(),3));
        this.setAttribute("uv", new y(k,2));
        0 === d ? this.computeVertexNormals() : this.normalizeNormals()
    }
    function Sd(a, b) {
        O.call(this);
        this.type = "TetrahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Qc(a,b));
        this.mergeVertices()
    }
    function Qc(a, b) {
        Ea.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
        this.type = "TetrahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Td(a, b) {
        O.call(this);
        this.type = "OctahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new ac(a,b));
        this.mergeVertices()
    }
    function ac(a, b) {
        Ea.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
        this.type = "OctahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Ud(a, b) {
        O.call(this);
        this.type = "IcosahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Rc(a,b));
        this.mergeVertices()
    }
    function Rc(a, b) {
        var c = (1 + Math.sqrt(5)) / 2;
        Ea.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
        this.type = "IcosahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Vd(a, b) {
        O.call(this);
        this.type = "DodecahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Sc(a,b));
        this.mergeVertices()
    }
    function Sc(a, b) {
        var c = (1 + Math.sqrt(5)) / 2
          , d = 1 / c;
        Ea.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b);
        this.type = "DodecahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Wd(a, b, c, d, e, f) {
        O.call(this);
        this.type = "TubeGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
        a = new bc(a,b,c,d,e);
        this.tangents = a.tangents;
        this.normals = a.normals;
        this.binormals = a.binormals;
        this.fromBufferGeometry(a);
        this.mergeVertices()
    }
    function bc(a, b, c, d, e) {
        function f(e) {
            l = a.getPointAt(e / b, l);
            var f = g.normals[e];
            e = g.binormals[e];
            for (u = 0; u <= d; u++) {
                var m = u / d * Math.PI * 2
                  , p = Math.sin(m);
                m = -Math.cos(m);
                k.x = m * f.x + p * e.x;
                k.y = m * f.y + p * e.y;
                k.z = m * f.z + p * e.z;
                k.normalize();
                q.push(k.x, k.y, k.z);
                h.x = l.x + c * k.x;
                h.y = l.y + c * k.y;
                h.z = l.z + c * k.z;
                r.push(h.x, h.y, h.z)
            }
        }
        B.call(this);
        this.type = "TubeBufferGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        b = b || 64;
        c = c || 1;
        d = d || 8;
        e = e || !1;
        var g = a.computeFrenetFrames(b, e);
        this.tangents = g.tangents;
        this.normals = g.normals;
        this.binormals = g.binormals;
        var h = new n, k = new n, m = new v, l = new n, p, u, r = [], q = [], t = [], F = [];
        for (p = 0; p < b; p++)
            f(p);
        f(!1 === e ? b : 0);
        for (p = 0; p <= b; p++)
            for (u = 0; u <= d; u++)
                m.x = p / b,
                m.y = u / d,
                t.push(m.x, m.y);
        (function() {
            for (u = 1; u <= b; u++)
                for (p = 1; p <= d; p++) {
                    var a = (d + 1) * u + (p - 1)
                      , c = (d + 1) * u + p
                      , e = (d + 1) * (u - 1) + p;
                    F.push((d + 1) * (u - 1) + (p - 1), a, e);
                    F.push(a, c, e)
                }
        }
        )();
        this.setIndex(F);
        this.setAttribute("position", new y(r,3));
        this.setAttribute("normal", new y(q,3));
        this.setAttribute("uv", new y(t,2))
    }
    function Xd(a, b, c, d, e, f, g) {
        O.call(this);
        this.type = "TorusKnotGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
        this.fromBufferGeometry(new Tc(a,b,c,d,e,f));
        this.mergeVertices()
    }
    function Tc(a, b, c, d, e, f) {
        function g(a, b, c, d, e) {
            var f = Math.sin(a);
            b = c / b * a;
            c = Math.cos(b);
            e.x = d * (2 + c) * .5 * Math.cos(a);
            e.y = d * (2 + c) * f * .5;
            e.z = d * Math.sin(b) * .5
        }
        B.call(this);
        this.type = "TorusKnotBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        a = a || 1;
        b = b || .4;
        c = Math.floor(c) || 64;
        d = Math.floor(d) || 8;
        e = e || 2;
        f = f || 3;
        var h = [], k = [], m = [], l = [], p, u = new n, r = new n, q = new n, t = new n, F = new n, x = new n, w = new n;
        for (p = 0; p <= c; ++p) {
            var v = p / c * e * Math.PI * 2;
            g(v, e, f, a, q);
            g(v + .01, e, f, a, t);
            x.subVectors(t, q);
            w.addVectors(t, q);
            F.crossVectors(x, w);
            w.crossVectors(F, x);
            F.normalize();
            w.normalize();
            for (v = 0; v <= d; ++v) {
                var U = v / d * Math.PI * 2
                  , Z = -b * Math.cos(U);
                U = b * Math.sin(U);
                u.x = q.x + (Z * w.x + U * F.x);
                u.y = q.y + (Z * w.y + U * F.y);
                u.z = q.z + (Z * w.z + U * F.z);
                k.push(u.x, u.y, u.z);
                r.subVectors(u, q).normalize();
                m.push(r.x, r.y, r.z);
                l.push(p / c);
                l.push(v / d)
            }
        }
        for (v = 1; v <= c; v++)
            for (p = 1; p <= d; p++)
                a = (d + 1) * v + (p - 1),
                b = (d + 1) * v + p,
                e = (d + 1) * (v - 1) + p,
                h.push((d + 1) * (v - 1) + (p - 1), a, e),
                h.push(a, b, e);
        this.setIndex(h);
        this.setAttribute("position", new y(k,3));
        this.setAttribute("normal", new y(m,3));
        this.setAttribute("uv", new y(l,2))
    }
    function Yd(a, b, c, d, e) {
        O.call(this);
        this.type = "TorusGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        this.fromBufferGeometry(new Uc(a,b,c,d,e));
        this.mergeVertices()
    }
    function Uc(a, b, c, d, e) {
        B.call(this);
        this.type = "TorusBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        a = a || 1;
        b = b || .4;
        c = Math.floor(c) || 8;
        d = Math.floor(d) || 6;
        e = e || 2 * Math.PI;
        var f = [], g = [], h = [], k = [], m = new n, l = new n, p = new n, u, r;
        for (u = 0; u <= c; u++)
            for (r = 0; r <= d; r++) {
                var q = r / d * e
                  , t = u / c * Math.PI * 2;
                l.x = (a + b * Math.cos(t)) * Math.cos(q);
                l.y = (a + b * Math.cos(t)) * Math.sin(q);
                l.z = b * Math.sin(t);
                g.push(l.x, l.y, l.z);
                m.x = a * Math.cos(q);
                m.y = a * Math.sin(q);
                p.subVectors(l, m).normalize();
                h.push(p.x, p.y, p.z);
                k.push(r / d);
                k.push(u / c)
            }
        for (u = 1; u <= c; u++)
            for (r = 1; r <= d; r++)
                a = (d + 1) * (u - 1) + r - 1,
                b = (d + 1) * (u - 1) + r,
                e = (d + 1) * u + r,
                f.push((d + 1) * u + r - 1, a, e),
                f.push(a, b, e);
        this.setIndex(f);
        this.setAttribute("position", new y(g,3));
        this.setAttribute("normal", new y(h,3));
        this.setAttribute("uv", new y(k,2))
    }
    function $h(a, b, c, d, e) {
        for (var f, g = 0, h = b, k = c - d; h < c; h += d)
            g += (a[k] - a[h]) * (a[h + 1] + a[k + 1]),
            k = h;
        if (e === 0 < g)
            for (e = b; e < c; e += d)
                f = ai(e, a[e], a[e + 1], f);
        else
            for (e = c - d; e >= b; e -= d)
                f = ai(e, a[e], a[e + 1], f);
        f && Te(f, f.next) && (Zd(f),
        f = f.next);
        return f
    }
    function Lb(a, b) {
        if (!a)
            return a;
        b || (b = a);
        do {
            var c = !1;
            if (a.steiner || !Te(a, a.next) && 0 !== Q(a.prev, a, a.next))
                a = a.next;
            else {
                Zd(a);
                a = b = a.prev;
                if (a === a.next)
                    break;
                c = !0
            }
        } while (c || a !== b);
        return b
    }
    function $d(a, b, c, d, e, f, g) {
        if (a) {
            if (!g && f) {
                var h = a
                  , k = h;
                do
                    null === k.z && (k.z = rg(k.x, k.y, d, e, f)),
                    k.prevZ = k.prev,
                    k = k.nextZ = k.next;
                while (k !== h);
                k.prevZ.nextZ = null;
                k.prevZ = null;
                h = k;
                var m, l, p, u, r = 1;
                do {
                    k = h;
                    var q = h = null;
                    for (l = 0; k; ) {
                        l++;
                        var n = k;
                        for (m = p = 0; m < r && (p++,
                        n = n.nextZ,
                        n); m++)
                            ;
                        for (u = r; 0 < p || 0 < u && n; )
                            0 !== p && (0 === u || !n || k.z <= n.z) ? (m = k,
                            k = k.nextZ,
                            p--) : (m = n,
                            n = n.nextZ,
                            u--),
                            q ? q.nextZ = m : h = m,
                            m.prevZ = q,
                            q = m;
                        k = n
                    }
                    q.nextZ = null;
                    r *= 2
                } while (1 < l)
            }
            for (h = a; a.prev !== a.next; ) {
                k = a.prev;
                n = a.next;
                if (f)
                    q = Ck(a, d, e, f);
                else
                    a: if (q = a,
                    l = q.prev,
                    p = q,
                    r = q.next,
                    0 <= Q(l, p, r))
                        q = !1;
                    else {
                        for (m = q.next.next; m !== q.prev; ) {
                            if (Vc(l.x, l.y, p.x, p.y, r.x, r.y, m.x, m.y) && 0 <= Q(m.prev, m, m.next)) {
                                q = !1;
                                break a
                            }
                            m = m.next
                        }
                        q = !0
                    }
                if (q)
                    b.push(k.i / c),
                    b.push(a.i / c),
                    b.push(n.i / c),
                    Zd(a),
                    h = a = n.next;
                else if (a = n,
                a === h) {
                    if (!g)
                        $d(Lb(a), b, c, d, e, f, 1);
                    else if (1 === g) {
                        a = Lb(a);
                        g = b;
                        h = c;
                        k = a;
                        do
                            n = k.prev,
                            q = k.next.next,
                            !Te(n, q) && bi(n, k, k.next, q) && ae(n, q) && ae(q, n) && (g.push(n.i / h),
                            g.push(k.i / h),
                            g.push(q.i / h),
                            Zd(k),
                            Zd(k.next),
                            k = a = q),
                            k = k.next;
                        while (k !== a);
                        a = Lb(k);
                        $d(a, b, c, d, e, f, 2)
                    } else if (2 === g)
                        a: {
                            g = a;
                            do {
                                for (h = g.next.next; h !== g.prev; ) {
                                    if (k = g.i !== h.i) {
                                        k = g;
                                        n = h;
                                        if (q = k.next.i !== n.i && k.prev.i !== n.i) {
                                            b: {
                                                q = k;
                                                do {
                                                    if (q.i !== k.i && q.next.i !== k.i && q.i !== n.i && q.next.i !== n.i && bi(q, q.next, k, n)) {
                                                        q = !0;
                                                        break b
                                                    }
                                                    q = q.next
                                                } while (q !== k);
                                                q = !1
                                            }
                                            q = !q
                                        }
                                        if (q) {
                                            if (q = ae(k, n) && ae(n, k)) {
                                                q = k;
                                                l = !1;
                                                p = (k.x + n.x) / 2;
                                                r = (k.y + n.y) / 2;
                                                do
                                                    q.y > r !== q.next.y > r && q.next.y !== q.y && p < (q.next.x - q.x) * (r - q.y) / (q.next.y - q.y) + q.x && (l = !l),
                                                    q = q.next;
                                                while (q !== k);
                                                q = l
                                            }
                                            q = q && (Q(k.prev, k, n.prev) || Q(k, n.prev, n)) || Te(k, n) && 0 < Q(k.prev, k, k.next) && 0 < Q(n.prev, n, n.next)
                                        }
                                        k = q
                                    }
                                    if (k) {
                                        a = ci(g, h);
                                        g = Lb(g, g.next);
                                        a = Lb(a, a.next);
                                        $d(g, b, c, d, e, f);
                                        $d(a, b, c, d, e, f);
                                        break a
                                    }
                                    h = h.next
                                }
                                g = g.next
                            } while (g !== a)
                        }
                    break
                }
            }
        }
    }
    function Ck(a, b, c, d) {
        var e = a.prev
          , f = a.next;
        if (0 <= Q(e, a, f))
            return !1;
        var g = e.x > a.x ? e.x > f.x ? e.x : f.x : a.x > f.x ? a.x : f.x
          , h = e.y > a.y ? e.y > f.y ? e.y : f.y : a.y > f.y ? a.y : f.y
          , k = rg(e.x < a.x ? e.x < f.x ? e.x : f.x : a.x < f.x ? a.x : f.x, e.y < a.y ? e.y < f.y ? e.y : f.y : a.y < f.y ? a.y : f.y, b, c, d);
        b = rg(g, h, b, c, d);
        c = a.prevZ;
        for (d = a.nextZ; c && c.z >= k && d && d.z <= b; ) {
            if (c !== a.prev && c !== a.next && Vc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= Q(c.prev, c, c.next))
                return !1;
            c = c.prevZ;
            if (d !== a.prev && d !== a.next && Vc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= Q(d.prev, d, d.next))
                return !1;
            d = d.nextZ
        }
        for (; c && c.z >= k; ) {
            if (c !== a.prev && c !== a.next && Vc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= Q(c.prev, c, c.next))
                return !1;
            c = c.prevZ
        }
        for (; d && d.z <= b; ) {
            if (d !== a.prev && d !== a.next && Vc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= Q(d.prev, d, d.next))
                return !1;
            d = d.nextZ
        }
        return !0
    }
    function Dk(a, b) {
        return a.x - b.x
    }
    function Ek(a, b) {
        var c = b
          , d = a.x
          , e = a.y
          , f = -Infinity;
        do {
            if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
                var g = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                if (g <= d && g > f) {
                    f = g;
                    if (g === d) {
                        if (e === c.y)
                            return c;
                        if (e === c.next.y)
                            return c.next
                    }
                    var h = c.x < c.next.x ? c : c.next
                }
            }
            c = c.next
        } while (c !== b);
        if (!h)
            return null;
        if (d === f)
            return h;
        b = h;
        g = h.x;
        var k = h.y
          , m = Infinity;
        c = h;
        do {
            if (d >= c.x && c.x >= g && d !== c.x && Vc(e < k ? d : f, e, g, k, e < k ? f : d, e, c.x, c.y)) {
                var l = Math.abs(e - c.y) / (d - c.x);
                var p;
                if ((p = ae(c, a)) && !(p = l < m) && (p = l === m) && !(p = c.x > h.x) && (p = c.x === h.x)) {
                    p = h;
                    var u = c;
                    p = 0 > Q(p.prev, p, u.prev) && 0 > Q(u.next, p, p.next)
                }
                p && (h = c,
                m = l)
            }
            c = c.next
        } while (c !== b);
        return h
    }
    function rg(a, b, c, d, e) {
        a = 32767 * (a - c) * e;
        b = 32767 * (b - d) * e;
        a = (a | a << 8) & 16711935;
        a = (a | a << 4) & 252645135;
        a = (a | a << 2) & 858993459;
        b = (b | b << 8) & 16711935;
        b = (b | b << 4) & 252645135;
        b = (b | b << 2) & 858993459;
        return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
    }
    function Fk(a) {
        var b = a
          , c = a;
        do {
            if (b.x < c.x || b.x === c.x && b.y < c.y)
                c = b;
            b = b.next
        } while (b !== a);
        return c
    }
    function Vc(a, b, c, d, e, f, g, h) {
        return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b - h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h)
    }
    function Q(a, b, c) {
        return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
    }
    function Te(a, b) {
        return a.x === b.x && a.y === b.y
    }
    function bi(a, b, c, d) {
        var e = Ue(Q(a, b, c))
          , f = Ue(Q(a, b, d))
          , g = Ue(Q(c, d, a))
          , h = Ue(Q(c, d, b));
        return e !== f && g !== h || 0 === e && Ve(a, c, b) || 0 === f && Ve(a, d, b) || 0 === g && Ve(c, a, d) || 0 === h && Ve(c, b, d) ? !0 : !1
    }
    function Ve(a, b, c) {
        return b.x <= Math.max(a.x, c.x) && b.x >= Math.min(a.x, c.x) && b.y <= Math.max(a.y, c.y) && b.y >= Math.min(a.y, c.y)
    }
    function Ue(a) {
        return 0 < a ? 1 : 0 > a ? -1 : 0
    }
    function ae(a, b) {
        return 0 > Q(a.prev, a, a.next) ? 0 <= Q(a, b, a.next) && 0 <= Q(a, a.prev, b) : 0 > Q(a, b, a.prev) || 0 > Q(a, a.next, b)
    }
    function ci(a, b) {
        var c = new sg(a.i,a.x,a.y)
          , d = new sg(b.i,b.x,b.y)
          , e = a.next
          , f = b.prev;
        a.next = b;
        b.prev = a;
        c.next = e;
        e.prev = c;
        d.next = c;
        c.prev = d;
        f.next = d;
        d.prev = f;
        return d
    }
    function ai(a, b, c, d) {
        a = new sg(a,b,c);
        d ? (a.next = d.next,
        a.prev = d,
        d.next.prev = a,
        d.next = a) : (a.prev = a,
        a.next = a);
        return a
    }
    function Zd(a) {
        a.next.prev = a.prev;
        a.prev.next = a.next;
        a.prevZ && (a.prevZ.nextZ = a.nextZ);
        a.nextZ && (a.nextZ.prevZ = a.prevZ)
    }
    function sg(a, b, c) {
        this.i = a;
        this.x = b;
        this.y = c;
        this.nextZ = this.prevZ = this.z = this.next = this.prev = null;
        this.steiner = !1
    }
    function di(a) {
        var b = a.length;
        2 < b && a[b - 1].equals(a[0]) && a.pop()
    }
    function ei(a, b) {
        for (var c = 0; c < b.length; c++)
            a.push(b[c].x),
            a.push(b[c].y)
    }
    function cc(a, b) {
        O.call(this);
        this.type = "ExtrudeGeometry";
        this.parameters = {
            shapes: a,
            options: b
        };
        this.fromBufferGeometry(new fb(a,b));
        this.mergeVertices()
    }
    function fb(a, b) {
        function c(a) {
            function c(a, b, c) {
                b || console.error("THREE.ExtrudeGeometry: vec does not exist");
                return b.clone().multiplyScalar(c).add(a)
            }
            function g(a, b, c) {
                var d = a.x - b.x;
                var e = a.y - b.y;
                var f = c.x - a.x;
                var g = c.y - a.y
                  , h = d * d + e * e;
                if (Math.abs(d * g - e * f) > Number.EPSILON) {
                    var k = Math.sqrt(h)
                      , m = Math.sqrt(f * f + g * g);
                    h = b.x - e / k;
                    b = b.y + d / k;
                    g = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f);
                    f = h + d * g - a.x;
                    d = b + e * g - a.y;
                    e = f * f + d * d;
                    if (2 >= e)
                        return new v(f,d);
                    e = Math.sqrt(e / 2)
                } else
                    a = !1,
                    d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0),
                    a ? (f = -e,
                    e = Math.sqrt(h)) : (f = d,
                    d = e,
                    e = Math.sqrt(h / 2));
                return new v(f / e,d / e)
            }
            function h(a, b) {
                for (K = a.length; 0 <= --K; ) {
                    var c = K;
                    var f = K - 1;
                    0 > f && (f = a.length - 1);
                    var g, h = w + 2 * y;
                    for (g = 0; g < h; g++) {
                        var k = X * g
                          , m = X * (g + 1)
                          , l = b + f + k
                          , p = b + f + m;
                        m = b + c + m;
                        q(b + c + k);
                        q(l);
                        q(m);
                        q(l);
                        q(p);
                        q(m);
                        k = e.length / 3;
                        k = D.generateSideWallUV(d, e, k - 6, k - 3, k - 2, k - 1);
                        t(k[0]);
                        t(k[1]);
                        t(k[3]);
                        t(k[1]);
                        t(k[2]);
                        t(k[3])
                    }
                }
            }
            function k(a, b, c) {
                F.push(a);
                F.push(b);
                F.push(c)
            }
            function l(a, b, c) {
                q(a);
                q(b);
                q(c);
                a = e.length / 3;
                a = D.generateTopUV(d, e, a - 3, a - 2, a - 1);
                t(a[0]);
                t(a[1]);
                t(a[2])
            }
            function q(a) {
                e.push(F[3 * a]);
                e.push(F[3 * a + 1]);
                e.push(F[3 * a + 2])
            }
            function t(a) {
                f.push(a.x);
                f.push(a.y)
            }
            var F = []
              , x = void 0 !== b.curveSegments ? b.curveSegments : 12
              , w = void 0 !== b.steps ? b.steps : 1
              , ha = void 0 !== b.depth ? b.depth : 100
              , U = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0
              , Z = void 0 !== b.bevelThickness ? b.bevelThickness : 6
              , C = void 0 !== b.bevelSize ? b.bevelSize : Z - 2
              , A = void 0 !== b.bevelOffset ? b.bevelOffset : 0
              , y = void 0 !== b.bevelSegments ? b.bevelSegments : 3
              , B = b.extrudePath
              , D = void 0 !== b.UVGenerator ? b.UVGenerator : Gk;
            void 0 !== b.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
            ha = b.amount);
            var I = !1;
            if (B) {
                var E = B.getSpacedPoints(w);
                I = !0;
                U = !1;
                var G = B.computeFrenetFrames(w, !1);
                var N = new n;
                var O = new n;
                var J = new n
            }
            U || (A = C = Z = y = 0);
            var L;
            x = a.extractPoints(x);
            a = x.shape;
            var M = x.holes;
            if (!rb.isClockWise(a)) {
                a = a.reverse();
                var fa = 0;
                for (L = M.length; fa < L; fa++) {
                    var P = M[fa];
                    rb.isClockWise(P) && (M[fa] = P.reverse())
                }
            }
            var aa = rb.triangulateShape(a, M)
              , V = a;
            fa = 0;
            for (L = M.length; fa < L; fa++)
                P = M[fa],
                a = a.concat(P);
            var W, X = a.length, T, da = aa.length;
            x = [];
            var K = 0;
            var R = V.length;
            var S = R - 1;
            for (W = K + 1; K < R; K++,
            S++,
            W++)
                S === R && (S = 0),
                W === R && (W = 0),
                x[K] = g(V[K], V[S], V[W]);
            B = [];
            var ea = x.concat();
            fa = 0;
            for (L = M.length; fa < L; fa++) {
                P = M[fa];
                var ba = [];
                K = 0;
                R = P.length;
                S = R - 1;
                for (W = K + 1; K < R; K++,
                S++,
                W++)
                    S === R && (S = 0),
                    W === R && (W = 0),
                    ba[K] = g(P[K], P[S], P[W]);
                B.push(ba);
                ea = ea.concat(ba)
            }
            for (S = 0; S < y; S++) {
                R = S / y;
                var ca = Z * Math.cos(R * Math.PI / 2);
                W = C * Math.sin(R * Math.PI / 2) + A;
                K = 0;
                for (R = V.length; K < R; K++) {
                    var Q = c(V[K], x[K], W);
                    k(Q.x, Q.y, -ca)
                }
                fa = 0;
                for (L = M.length; fa < L; fa++)
                    for (P = M[fa],
                    ba = B[fa],
                    K = 0,
                    R = P.length; K < R; K++)
                        Q = c(P[K], ba[K], W),
                        k(Q.x, Q.y, -ca)
            }
            W = C + A;
            for (K = 0; K < X; K++)
                Q = U ? c(a[K], ea[K], W) : a[K],
                I ? (O.copy(G.normals[0]).multiplyScalar(Q.x),
                N.copy(G.binormals[0]).multiplyScalar(Q.y),
                J.copy(E[0]).add(O).add(N),
                k(J.x, J.y, J.z)) : k(Q.x, Q.y, 0);
            for (R = 1; R <= w; R++)
                for (K = 0; K < X; K++)
                    Q = U ? c(a[K], ea[K], W) : a[K],
                    I ? (O.copy(G.normals[R]).multiplyScalar(Q.x),
                    N.copy(G.binormals[R]).multiplyScalar(Q.y),
                    J.copy(E[R]).add(O).add(N),
                    k(J.x, J.y, J.z)) : k(Q.x, Q.y, ha / w * R);
            for (S = y - 1; 0 <= S; S--) {
                R = S / y;
                ca = Z * Math.cos(R * Math.PI / 2);
                W = C * Math.sin(R * Math.PI / 2) + A;
                K = 0;
                for (R = V.length; K < R; K++)
                    Q = c(V[K], x[K], W),
                    k(Q.x, Q.y, ha + ca);
                fa = 0;
                for (L = M.length; fa < L; fa++)
                    for (P = M[fa],
                    ba = B[fa],
                    K = 0,
                    R = P.length; K < R; K++)
                        Q = c(P[K], ba[K], W),
                        I ? k(Q.x, Q.y + E[w - 1].y, E[w - 1].x + ca) : k(Q.x, Q.y, ha + ca)
            }
            (function() {
                var a = e.length / 3;
                if (U) {
                    var b = 0 * X;
                    for (K = 0; K < da; K++)
                        T = aa[K],
                        l(T[2] + b, T[1] + b, T[0] + b);
                    b = X * (w + 2 * y);
                    for (K = 0; K < da; K++)
                        T = aa[K],
                        l(T[0] + b, T[1] + b, T[2] + b)
                } else {
                    for (K = 0; K < da; K++)
                        T = aa[K],
                        l(T[2], T[1], T[0]);
                    for (K = 0; K < da; K++)
                        T = aa[K],
                        l(T[0] + X * w, T[1] + X * w, T[2] + X * w)
                }
                d.addGroup(a, e.length / 3 - a, 0)
            }
            )();
            (function() {
                var a = e.length / 3
                  , b = 0;
                h(V, b);
                b += V.length;
                fa = 0;
                for (L = M.length; fa < L; fa++)
                    P = M[fa],
                    h(P, b),
                    b += P.length;
                d.addGroup(a, e.length / 3 - a, 1)
            }
            )()
        }
        B.call(this);
        this.type = "ExtrudeBufferGeometry";
        this.parameters = {
            shapes: a,
            options: b
        };
        a = Array.isArray(a) ? a : [a];
        for (var d = this, e = [], f = [], g = 0, h = a.length; g < h; g++)
            c(a[g]);
        this.setAttribute("position", new y(e,3));
        this.setAttribute("uv", new y(f,2));
        this.computeVertexNormals()
    }
    function fi(a, b, c) {
        c.shapes = [];
        if (Array.isArray(a))
            for (var d = 0, e = a.length; d < e; d++)
                c.shapes.push(a[d].uuid);
        else
            c.shapes.push(a.uuid);
        void 0 !== b.extrudePath && (c.options.extrudePath = b.extrudePath.toJSON());
        return c
    }
    function be(a, b) {
        O.call(this);
        this.type = "TextGeometry";
        this.parameters = {
            text: a,
            parameters: b
        };
        this.fromBufferGeometry(new Wc(a,b));
        this.mergeVertices()
    }
    function Wc(a, b) {
        b = b || {};
        var c = b.font;
        if (!c || !c.isFont)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new O;
        a = c.generateShapes(a, b.size);
        b.depth = void 0 !== b.height ? b.height : 50;
        void 0 === b.bevelThickness && (b.bevelThickness = 10);
        void 0 === b.bevelSize && (b.bevelSize = 8);
        void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
        fb.call(this, a, b);
        this.type = "TextBufferGeometry"
    }
    function ce(a, b, c, d, e, f, g) {
        O.call(this);
        this.type = "SphereGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        this.fromBufferGeometry(new dc(a,b,c,d,e,f,g));
        this.mergeVertices()
    }
    function dc(a, b, c, d, e, f, g) {
        B.call(this);
        this.type = "SphereBufferGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        a = a || 1;
        b = Math.max(3, Math.floor(b) || 8);
        c = Math.max(2, Math.floor(c) || 6);
        d = void 0 !== d ? d : 0;
        e = void 0 !== e ? e : 2 * Math.PI;
        f = void 0 !== f ? f : 0;
        g = void 0 !== g ? g : Math.PI;
        var h = Math.min(f + g, Math.PI), k, m, l = 0, p = [], u = new n, r = new n, q = [], t = [], F = [], v = [];
        for (m = 0; m <= c; m++) {
            var w = []
              , ha = m / c
              , U = 0;
            0 == m && 0 == f ? U = .5 / b : m == c && h == Math.PI && (U = -.5 / b);
            for (k = 0; k <= b; k++) {
                var Z = k / b;
                u.x = -a * Math.cos(d + Z * e) * Math.sin(f + ha * g);
                u.y = a * Math.cos(f + ha * g);
                u.z = a * Math.sin(d + Z * e) * Math.sin(f + ha * g);
                t.push(u.x, u.y, u.z);
                r.copy(u).normalize();
                F.push(r.x, r.y, r.z);
                v.push(Z + U, 1 - ha);
                w.push(l++)
            }
            p.push(w)
        }
        for (m = 0; m < c; m++)
            for (k = 0; k < b; k++)
                a = p[m][k + 1],
                d = p[m][k],
                e = p[m + 1][k],
                g = p[m + 1][k + 1],
                (0 !== m || 0 < f) && q.push(a, d, g),
                (m !== c - 1 || h < Math.PI) && q.push(d, e, g);
        this.setIndex(q);
        this.setAttribute("position", new y(t,3));
        this.setAttribute("normal", new y(F,3));
        this.setAttribute("uv", new y(v,2))
    }
    function de(a, b, c, d, e, f) {
        O.call(this);
        this.type = "RingGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        this.fromBufferGeometry(new Xc(a,b,c,d,e,f));
        this.mergeVertices()
    }
    function Xc(a, b, c, d, e, f) {
        B.call(this);
        this.type = "RingBufferGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        a = a || .5;
        b = b || 1;
        e = void 0 !== e ? e : 0;
        f = void 0 !== f ? f : 2 * Math.PI;
        c = void 0 !== c ? Math.max(3, c) : 8;
        d = void 0 !== d ? Math.max(1, d) : 1;
        var g = [], h = [], k = [], m = [], l = a, p = (b - a) / d, u = new n, r = new v, q, t;
        for (q = 0; q <= d; q++) {
            for (t = 0; t <= c; t++)
                a = e + t / c * f,
                u.x = l * Math.cos(a),
                u.y = l * Math.sin(a),
                h.push(u.x, u.y, u.z),
                k.push(0, 0, 1),
                r.x = (u.x / b + 1) / 2,
                r.y = (u.y / b + 1) / 2,
                m.push(r.x, r.y);
            l += p
        }
        for (q = 0; q < d; q++)
            for (b = q * (c + 1),
            t = 0; t < c; t++)
                a = t + b,
                e = a + c + 1,
                f = a + c + 2,
                l = a + 1,
                g.push(a, e, l),
                g.push(e, f, l);
        this.setIndex(g);
        this.setAttribute("position", new y(h,3));
        this.setAttribute("normal", new y(k,3));
        this.setAttribute("uv", new y(m,2))
    }
    function ee(a, b, c, d) {
        O.call(this);
        this.type = "LatheGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        this.fromBufferGeometry(new Yc(a,b,c,d));
        this.mergeVertices()
    }
    function Yc(a, b, c, d) {
        B.call(this);
        this.type = "LatheBufferGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        b = Math.floor(b) || 12;
        c = c || 0;
        d = d || 2 * Math.PI;
        d = M.clamp(d, 0, 2 * Math.PI);
        var e = [], f = [], g = [], h = 1 / b, k = new n, m = new v, l;
        for (l = 0; l <= b; l++) {
            var p = c + l * h * d;
            var u = Math.sin(p)
              , r = Math.cos(p);
            for (p = 0; p <= a.length - 1; p++)
                k.x = a[p].x * u,
                k.y = a[p].y,
                k.z = a[p].x * r,
                f.push(k.x, k.y, k.z),
                m.x = l / b,
                m.y = p / (a.length - 1),
                g.push(m.x, m.y)
        }
        for (l = 0; l < b; l++)
            for (p = 0; p < a.length - 1; p++)
                c = p + l * a.length,
                h = c + a.length,
                k = c + a.length + 1,
                m = c + 1,
                e.push(c, h, m),
                e.push(h, k, m);
        this.setIndex(e);
        this.setAttribute("position", new y(f,3));
        this.setAttribute("uv", new y(g,2));
        this.computeVertexNormals();
        if (d === 2 * Math.PI)
            for (d = this.attributes.normal.array,
            e = new n,
            f = new n,
            g = new n,
            c = b * a.length * 3,
            p = l = 0; l < a.length; l++,
            p += 3)
                e.x = d[p + 0],
                e.y = d[p + 1],
                e.z = d[p + 2],
                f.x = d[c + p + 0],
                f.y = d[c + p + 1],
                f.z = d[c + p + 2],
                g.addVectors(e, f).normalize(),
                d[p + 0] = d[c + p + 0] = g.x,
                d[p + 1] = d[c + p + 1] = g.y,
                d[p + 2] = d[c + p + 2] = g.z
    }
    function ec(a, b) {
        O.call(this);
        this.type = "ShapeGeometry";
        "object" === typeof b && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
        b = b.curveSegments);
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        this.fromBufferGeometry(new fc(a,b));
        this.mergeVertices()
    }
    function fc(a, b) {
        function c(a) {
            var c, h = e.length / 3;
            a = a.extractPoints(b);
            var m = a.shape
              , l = a.holes;
            !1 === rb.isClockWise(m) && (m = m.reverse());
            a = 0;
            for (c = l.length; a < c; a++) {
                var z = l[a];
                !0 === rb.isClockWise(z) && (l[a] = z.reverse())
            }
            var n = rb.triangulateShape(m, l);
            a = 0;
            for (c = l.length; a < c; a++)
                z = l[a],
                m = m.concat(z);
            a = 0;
            for (c = m.length; a < c; a++)
                z = m[a],
                e.push(z.x, z.y, 0),
                f.push(0, 0, 1),
                g.push(z.x, z.y);
            a = 0;
            for (c = n.length; a < c; a++)
                m = n[a],
                d.push(m[0] + h, m[1] + h, m[2] + h),
                k += 3
        }
        B.call(this);
        this.type = "ShapeBufferGeometry";
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        b = b || 12;
        var d = []
          , e = []
          , f = []
          , g = []
          , h = 0
          , k = 0;
        if (!1 === Array.isArray(a))
            c(a);
        else
            for (var m = 0; m < a.length; m++)
                c(a[m]),
                this.addGroup(h, k, m),
                h += k,
                k = 0;
        this.setIndex(d);
        this.setAttribute("position", new y(e,3));
        this.setAttribute("normal", new y(f,3));
        this.setAttribute("uv", new y(g,2))
    }
    function gi(a, b) {
        b.shapes = [];
        if (Array.isArray(a))
            for (var c = 0, d = a.length; c < d; c++)
                b.shapes.push(a[c].uuid);
        else
            b.shapes.push(a.uuid);
        return b
    }
    function Zc(a, b) {
        B.call(this);
        this.type = "EdgesGeometry";
        this.parameters = {
            thresholdAngle: b
        };
        var c = [];
        b = Math.cos(M.DEG2RAD * (void 0 !== b ? b : 1));
        var d = [0, 0]
          , e = {}
          , f = ["a", "b", "c"];
        if (a.isBufferGeometry) {
            var g = new O;
            g.fromBufferGeometry(a)
        } else
            g = a.clone();
        g.mergeVertices();
        g.computeFaceNormals();
        a = g.vertices;
        g = g.faces;
        for (var h = 0, k = g.length; h < k; h++)
            for (var m = g[h], l = 0; 3 > l; l++) {
                var p = m[f[l]];
                var u = m[f[(l + 1) % 3]];
                d[0] = Math.min(p, u);
                d[1] = Math.max(p, u);
                p = d[0] + "," + d[1];
                void 0 === e[p] ? e[p] = {
                    index1: d[0],
                    index2: d[1],
                    face1: h,
                    face2: void 0
                } : e[p].face2 = h
            }
        for (p in e)
            if (d = e[p],
            void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= b)
                f = a[d.index1],
                c.push(f.x, f.y, f.z),
                f = a[d.index2],
                c.push(f.x, f.y, f.z);
        this.setAttribute("position", new y(c,3))
    }
    function gc(a, b, c, d, e, f, g, h) {
        O.call(this);
        this.type = "CylinderGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        this.fromBufferGeometry(new sb(a,b,c,d,e,f,g,h));
        this.mergeVertices()
    }
    function sb(a, b, c, d, e, f, g, h) {
        function k(c) {
            var e, f = new v, k = new n, z = 0, t = !0 === c ? a : b, w = !0 === c ? 1 : -1;
            var A = q;
            for (e = 1; e <= d; e++)
                p.push(0, F * w, 0),
                u.push(0, w, 0),
                r.push(.5, .5),
                q++;
            var y = q;
            for (e = 0; e <= d; e++) {
                var B = e / d * h + g
                  , D = Math.cos(B);
                B = Math.sin(B);
                k.x = t * B;
                k.y = F * w;
                k.z = t * D;
                p.push(k.x, k.y, k.z);
                u.push(0, w, 0);
                f.x = .5 * D + .5;
                f.y = .5 * B * w + .5;
                r.push(f.x, f.y);
                q++
            }
            for (e = 0; e < d; e++)
                f = A + e,
                k = y + e,
                !0 === c ? l.push(k, k + 1, f) : l.push(k + 1, k, f),
                z += 3;
            m.addGroup(x, z, !0 === c ? 1 : 2);
            x += z
        }
        B.call(this);
        this.type = "CylinderBufferGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        var m = this;
        a = void 0 !== a ? a : 1;
        b = void 0 !== b ? b : 1;
        c = c || 1;
        d = Math.floor(d) || 8;
        e = Math.floor(e) || 1;
        f = void 0 !== f ? f : !1;
        g = void 0 !== g ? g : 0;
        h = void 0 !== h ? h : 2 * Math.PI;
        var l = []
          , p = []
          , u = []
          , r = []
          , q = 0
          , t = []
          , F = c / 2
          , x = 0;
        (function() {
            var f, k, z = new n, v = new n, C = 0, A = (b - a) / c;
            for (k = 0; k <= e; k++) {
                var B = []
                  , y = k / e
                  , D = y * (b - a) + a;
                for (f = 0; f <= d; f++) {
                    var E = f / d
                      , G = E * h + g
                      , J = Math.sin(G);
                    G = Math.cos(G);
                    v.x = D * J;
                    v.y = -y * c + F;
                    v.z = D * G;
                    p.push(v.x, v.y, v.z);
                    z.set(J, A, G).normalize();
                    u.push(z.x, z.y, z.z);
                    r.push(E, 1 - y);
                    B.push(q++)
                }
                t.push(B)
            }
            for (f = 0; f < d; f++)
                for (k = 0; k < e; k++)
                    z = t[k + 1][f],
                    v = t[k + 1][f + 1],
                    A = t[k][f + 1],
                    l.push(t[k][f], z, A),
                    l.push(z, v, A),
                    C += 6;
            m.addGroup(x, C, 0);
            x += C
        }
        )();
        !1 === f && (0 < a && k(!0),
        0 < b && k(!1));
        this.setIndex(l);
        this.setAttribute("position", new y(p,3));
        this.setAttribute("normal", new y(u,3));
        this.setAttribute("uv", new y(r,2))
    }
    function fe(a, b, c, d, e, f, g) {
        gc.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        }
    }
    function ge(a, b, c, d, e, f, g) {
        sb.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeBufferGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        }
    }
    function he(a, b, c, d) {
        O.call(this);
        this.type = "CircleGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        this.fromBufferGeometry(new $c(a,b,c,d));
        this.mergeVertices()
    }
    function $c(a, b, c, d) {
        B.call(this);
        this.type = "CircleBufferGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        a = a || 1;
        b = void 0 !== b ? Math.max(3, b) : 8;
        c = void 0 !== c ? c : 0;
        d = void 0 !== d ? d : 2 * Math.PI;
        var e = [], f = [], g = [], h = [], k, m = new n, l = new v;
        f.push(0, 0, 0);
        g.push(0, 0, 1);
        h.push(.5, .5);
        var p = 0;
        for (k = 3; p <= b; p++,
        k += 3) {
            var u = c + p / b * d;
            m.x = a * Math.cos(u);
            m.y = a * Math.sin(u);
            f.push(m.x, m.y, m.z);
            g.push(0, 0, 1);
            l.x = (f[k] / a + 1) / 2;
            l.y = (f[k + 1] / a + 1) / 2;
            h.push(l.x, l.y)
        }
        for (k = 1; k <= b; k++)
            e.push(k, k + 1, 0);
        this.setIndex(e);
        this.setAttribute("position", new y(f,3));
        this.setAttribute("normal", new y(g,3));
        this.setAttribute("uv", new y(h,2))
    }
    function hc(a) {
        J.call(this);
        this.type = "ShadowMaterial";
        this.color = new A(0);
        this.transparent = !0;
        this.setValues(a)
    }
    function tb(a) {
        Aa.call(this, a);
        this.type = "RawShaderMaterial"
    }
    function gb(a) {
        J.call(this);
        this.defines = {
            STANDARD: ""
        };
        this.type = "MeshStandardMaterial";
        this.color = new A(16777215);
        this.roughness = 1;
        this.metalness = 0;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new A(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new v(1,1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
        this.envMapIntensity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.vertexTangents = this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function ic(a) {
        gb.call(this);
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        };
        this.type = "MeshPhysicalMaterial";
        this.clearcoat = 0;
        this.clearcoatMap = null;
        this.clearcoatRoughness = 0;
        this.clearcoatRoughnessMap = null;
        this.clearcoatNormalScale = new v(1,1);
        this.clearcoatNormalMap = null;
        this.reflectivity = .5;
        this.sheen = null;
        this.transparency = 0;
        this.setValues(a)
    }
    function Mb(a) {
        J.call(this);
        this.type = "MeshPhongMaterial";
        this.color = new A(16777215);
        this.specular = new A(1118481);
        this.shininess = 30;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new A(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new v(1,1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function jc(a) {
        J.call(this);
        this.defines = {
            TOON: ""
        };
        this.type = "MeshToonMaterial";
        this.color = new A(16777215);
        this.specular = new A(1118481);
        this.shininess = 30;
        this.lightMap = this.gradientMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new A(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new v(1,1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.alphaMap = this.specularMap = null;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function kc(a) {
        J.call(this);
        this.type = "MeshNormalMaterial";
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new v(1,1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning = this.fog = !1;
        this.setValues(a)
    }
    function lc(a) {
        J.call(this);
        this.type = "MeshLambertMaterial";
        this.color = new A(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new A(0);
        this.emissiveIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function mc(a) {
        J.call(this);
        this.defines = {
            MATCAP: ""
        };
        this.type = "MeshMatcapMaterial";
        this.color = new A(16777215);
        this.bumpMap = this.map = this.matcap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalMapType = 0;
        this.normalScale = new v(1,1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.alphaMap = null;
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function nc(a) {
        da.call(this);
        this.type = "LineDashedMaterial";
        this.scale = 1;
        this.dashSize = 3;
        this.gapSize = 1;
        this.setValues(a)
    }
    function Ka(a, b, c, d) {
        this.parameterPositions = a;
        this._cachedIndex = 0;
        this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
        this.sampleValues = b;
        this.valueSize = c
    }
    function We(a, b, c, d) {
        Ka.call(this, a, b, c, d);
        this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
    }
    function ie(a, b, c, d) {
        Ka.call(this, a, b, c, d)
    }
    function Xe(a, b, c, d) {
        Ka.call(this, a, b, c, d)
    }
    function sa(a, b, c, d) {
        if (void 0 === a)
            throw Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === b || 0 === b.length)
            throw Error("THREE.KeyframeTrack: no keyframes in track named " + a);
        this.name = a;
        this.times = ka.convertArray(b, this.TimeBufferType);
        this.values = ka.convertArray(c, this.ValueBufferType);
        this.setInterpolation(d || this.DefaultInterpolation)
    }
    function Ye(a, b, c) {
        sa.call(this, a, b, c)
    }
    function Ze(a, b, c, d) {
        sa.call(this, a, b, c, d)
    }
    function ad(a, b, c, d) {
        sa.call(this, a, b, c, d)
    }
    function $e(a, b, c, d) {
        Ka.call(this, a, b, c, d)
    }
    function je(a, b, c, d) {
        sa.call(this, a, b, c, d)
    }
    function af(a, b, c, d) {
        sa.call(this, a, b, c, d)
    }
    function bd(a, b, c, d) {
        sa.call(this, a, b, c, d)
    }
    function Pa(a, b, c, d) {
        this.name = a;
        this.tracks = c;
        this.duration = void 0 !== b ? b : -1;
        this.blendMode = void 0 !== d ? d : 2500;
        this.uuid = M.generateUUID();
        0 > this.duration && this.resetDuration()
    }
    function Hk(a) {
        switch (a.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return ad;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return bd;
        case "color":
            return Ze;
        case "quaternion":
            return je;
        case "bool":
        case "boolean":
            return Ye;
        case "string":
            return af
        }
        throw Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
    }
    function Ik(a) {
        if (void 0 === a.type)
            throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var b = Hk(a.type);
        if (void 0 === a.times) {
            var c = []
              , d = [];
            ka.flattenJSON(a.keys, c, d, "value");
            a.times = c;
            a.values = d
        }
        return void 0 !== b.parse ? b.parse(a) : new b(a.name,a.times,a.values,a.interpolation)
    }
    function tg(a, b, c) {
        var d = this
          , e = !1
          , f = 0
          , g = 0
          , h = void 0
          , k = [];
        this.onStart = void 0;
        this.onLoad = a;
        this.onProgress = b;
        this.onError = c;
        this.itemStart = function(a) {
            g++;
            if (!1 === e && void 0 !== d.onStart)
                d.onStart(a, f, g);
            e = !0
        }
        ;
        this.itemEnd = function(a) {
            f++;
            if (void 0 !== d.onProgress)
                d.onProgress(a, f, g);
            if (f === g && (e = !1,
            void 0 !== d.onLoad))
                d.onLoad()
        }
        ;
        this.itemError = function(a) {
            if (void 0 !== d.onError)
                d.onError(a)
        }
        ;
        this.resolveURL = function(a) {
            return h ? h(a) : a
        }
        ;
        this.setURLModifier = function(a) {
            h = a;
            return this
        }
        ;
        this.addHandler = function(a, b) {
            k.push(a, b);
            return this
        }
        ;
        this.removeHandler = function(a) {
            a = k.indexOf(a);
            -1 !== a && k.splice(a, 2);
            return this
        }
        ;
        this.getHandler = function(a) {
            for (var b = 0, c = k.length; b < c; b += 2) {
                var d = k[b]
                  , e = k[b + 1];
                d.global && (d.lastIndex = 0);
                if (d.test(a))
                    return e
            }
            return null
        }
    }
    function X(a) {
        this.manager = void 0 !== a ? a : hi;
        this.crossOrigin = "anonymous";
        this.resourcePath = this.path = ""
    }
    function Qa(a) {
        X.call(this, a)
    }
    function ug(a) {
        X.call(this, a)
    }
    function vg(a) {
        X.call(this, a)
    }
    function bf(a) {
        X.call(this, a)
    }
    function cd(a) {
        X.call(this, a)
    }
    function cf(a) {
        X.call(this, a)
    }
    function df(a) {
        X.call(this, a)
    }
    function G() {
        this.type = "Curve";
        this.arcLengthDivisions = 200
    }
    function La(a, b, c, d, e, f, g, h) {
        G.call(this);
        this.type = "EllipseCurve";
        this.aX = a || 0;
        this.aY = b || 0;
        this.xRadius = c || 1;
        this.yRadius = d || 1;
        this.aStartAngle = e || 0;
        this.aEndAngle = f || 2 * Math.PI;
        this.aClockwise = g || !1;
        this.aRotation = h || 0
    }
    function dd(a, b, c, d, e, f) {
        La.call(this, a, b, c, c, d, e, f);
        this.type = "ArcCurve"
    }
    function wg() {
        var a = 0
          , b = 0
          , c = 0
          , d = 0;
        return {
            initCatmullRom: function(e, f, g, h, k) {
                e = k * (g - e);
                h = k * (h - f);
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h
            },
            initNonuniformCatmullRom: function(e, f, g, h, k, m, l) {
                e = ((f - e) / k - (g - e) / (k + m) + (g - f) / m) * m;
                h = ((g - f) / m - (h - f) / (m + l) + (h - g) / l) * m;
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h
            },
            calc: function(e) {
                var f = e * e;
                return a + b * e + c * f + d * f * e
            }
        }
    }
    function pa(a, b, c, d) {
        G.call(this);
        this.type = "CatmullRomCurve3";
        this.points = a || [];
        this.closed = b || !1;
        this.curveType = c || "centripetal";
        this.tension = d || .5
    }
    function ii(a, b, c, d, e) {
        b = .5 * (d - b);
        e = .5 * (e - c);
        var f = a * a;
        return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c
    }
    function ke(a, b, c, d) {
        var e = 1 - a;
        return e * e * b + 2 * (1 - a) * a * c + a * a * d
    }
    function le(a, b, c, d, e) {
        var f = 1 - a
          , g = 1 - a;
        return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
    }
    function Wa(a, b, c, d) {
        G.call(this);
        this.type = "CubicBezierCurve";
        this.v0 = a || new v;
        this.v1 = b || new v;
        this.v2 = c || new v;
        this.v3 = d || new v
    }
    function hb(a, b, c, d) {
        G.call(this);
        this.type = "CubicBezierCurve3";
        this.v0 = a || new n;
        this.v1 = b || new n;
        this.v2 = c || new n;
        this.v3 = d || new n
    }
    function Ha(a, b) {
        G.call(this);
        this.type = "LineCurve";
        this.v1 = a || new v;
        this.v2 = b || new v
    }
    function Xa(a, b) {
        G.call(this);
        this.type = "LineCurve3";
        this.v1 = a || new n;
        this.v2 = b || new n
    }
    function Ya(a, b, c) {
        G.call(this);
        this.type = "QuadraticBezierCurve";
        this.v0 = a || new v;
        this.v1 = b || new v;
        this.v2 = c || new v
    }
    function ib(a, b, c) {
        G.call(this);
        this.type = "QuadraticBezierCurve3";
        this.v0 = a || new n;
        this.v1 = b || new n;
        this.v2 = c || new n
    }
    function Za(a) {
        G.call(this);
        this.type = "SplineCurve";
        this.points = a || []
    }
    function ub() {
        G.call(this);
        this.type = "CurvePath";
        this.curves = [];
        this.autoClose = !1
    }
    function $a(a) {
        ub.call(this);
        this.type = "Path";
        this.currentPoint = new v;
        a && this.setFromPoints(a)
    }
    function Nb(a) {
        $a.call(this, a);
        this.uuid = M.generateUUID();
        this.type = "Shape";
        this.holes = []
    }
    function S(a, b) {
        E.call(this);
        this.type = "Light";
        this.color = new A(a);
        this.intensity = void 0 !== b ? b : 1;
        this.receiveShadow = void 0
    }
    function ef(a, b, c) {
        S.call(this, a, c);
        this.type = "HemisphereLight";
        this.castShadow = void 0;
        this.position.copy(E.DefaultUp);
        this.updateMatrix();
        this.groundColor = new A(b)
    }
    function jb(a) {
        this.camera = a;
        this.bias = 0;
        this.radius = 1;
        this.mapSize = new v(512,512);
        this.mapPass = this.map = null;
        this.matrix = new P;
        this._frustum = new Ec;
        this._frameExtents = new v(1,1);
        this._viewportCount = 1;
        this._viewports = [new ca(0,0,1,1)]
    }
    function ff() {
        jb.call(this, new ba(50,1,.5,500))
    }
    function gf(a, b, c, d, e, f) {
        S.call(this, a, b);
        this.type = "SpotLight";
        this.position.copy(E.DefaultUp);
        this.updateMatrix();
        this.target = new E;
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(a) {
                this.intensity = a / Math.PI
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.angle = void 0 !== d ? d : Math.PI / 3;
        this.penumbra = void 0 !== e ? e : 0;
        this.decay = void 0 !== f ? f : 1;
        this.shadow = new ff
    }
    function xg() {
        jb.call(this, new ba(90,1,.5,500));
        this._frameExtents = new v(4,2);
        this._viewportCount = 6;
        this._viewports = [new ca(2,1,1,1), new ca(0,1,1,1), new ca(3,1,1,1), new ca(1,1,1,1), new ca(3,0,1,1), new ca(1,0,1,1)];
        this._cubeDirections = [new n(1,0,0), new n(-1,0,0), new n(0,0,1), new n(0,0,-1), new n(0,1,0), new n(0,-1,0)];
        this._cubeUps = [new n(0,1,0), new n(0,1,0), new n(0,1,0), new n(0,1,0), new n(0,0,1), new n(0,0,-1)]
    }
    function hf(a, b, c, d) {
        S.call(this, a, b);
        this.type = "PointLight";
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(a) {
                this.intensity = a / (4 * Math.PI)
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.decay = void 0 !== d ? d : 1;
        this.shadow = new xg
    }
    function ed(a, b, c, d, e, f) {
        db.call(this);
        this.type = "OrthographicCamera";
        this.zoom = 1;
        this.view = null;
        this.left = void 0 !== a ? a : -1;
        this.right = void 0 !== b ? b : 1;
        this.top = void 0 !== c ? c : 1;
        this.bottom = void 0 !== d ? d : -1;
        this.near = void 0 !== e ? e : .1;
        this.far = void 0 !== f ? f : 2E3;
        this.updateProjectionMatrix()
    }
    function jf() {
        jb.call(this, new ed(-5,5,5,-5,.5,500))
    }
    function kf(a, b) {
        S.call(this, a, b);
        this.type = "DirectionalLight";
        this.position.copy(E.DefaultUp);
        this.updateMatrix();
        this.target = new E;
        this.shadow = new jf
    }
    function lf(a, b) {
        S.call(this, a, b);
        this.type = "AmbientLight";
        this.castShadow = void 0
    }
    function mf(a, b, c, d) {
        S.call(this, a, b);
        this.type = "RectAreaLight";
        this.width = void 0 !== c ? c : 10;
        this.height = void 0 !== d ? d : 10
    }
    function nf() {
        this.coefficients = [];
        for (var a = 0; 9 > a; a++)
            this.coefficients.push(new n)
    }
    function Ra(a, b) {
        S.call(this, void 0, b);
        this.type = "LightProbe";
        this.sh = void 0 !== a ? a : new nf
    }
    function of(a) {
        X.call(this, a);
        this.textures = {}
    }
    function pf() {
        B.call(this);
        this.type = "InstancedBufferGeometry";
        this.maxInstancedCount = void 0
    }
    function qf(a, b, c, d) {
        "number" === typeof c && (d = c,
        c = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
        N.call(this, a, b, c);
        this.meshPerAttribute = d || 1
    }
    function rf(a) {
        X.call(this, a)
    }
    function sf(a) {
        X.call(this, a)
    }
    function yg(a) {
        "undefined" === typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
        "undefined" === typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
        X.call(this, a);
        this.options = void 0
    }
    function zg() {
        this.type = "ShapePath";
        this.color = new A;
        this.subPaths = [];
        this.currentPath = null
    }
    function Ag(a) {
        this.type = "Font";
        this.data = a
    }
    function Bg(a) {
        X.call(this, a)
    }
    function tf(a) {
        X.call(this, a)
    }
    function Cg(a, b, c) {
        Ra.call(this, void 0, c);
        a = (new A).set(a);
        c = (new A).set(b);
        b = new n(a.r,a.g,a.b);
        a = new n(c.r,c.g,c.b);
        c = Math.sqrt(Math.PI);
        var d = c * Math.sqrt(.75);
        this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);
        this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d)
    }
    function Dg(a, b) {
        Ra.call(this, void 0, b);
        a = (new A).set(a);
        this.sh.coefficients[0].set(a.r, a.g, a.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
    function ji() {
        this.type = "StereoCamera";
        this.aspect = 1;
        this.eyeSep = .064;
        this.cameraL = new ba;
        this.cameraL.layers.enable(1);
        this.cameraL.matrixAutoUpdate = !1;
        this.cameraR = new ba;
        this.cameraR.layers.enable(2);
        this.cameraR.matrixAutoUpdate = !1;
        this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
        }
    }
    function Eg(a) {
        this.autoStart = void 0 !== a ? a : !0;
        this.elapsedTime = this.oldTime = this.startTime = 0;
        this.running = !1
    }
    function Fg() {
        E.call(this);
        this.type = "AudioListener";
        this.context = Gg.getContext();
        this.gain = this.context.createGain();
        this.gain.connect(this.context.destination);
        this.filter = null;
        this.timeDelta = 0;
        this._clock = new Eg
    }
    function fd(a) {
        E.call(this);
        this.type = "Audio";
        this.listener = a;
        this.context = a.context;
        this.gain = this.context.createGain();
        this.gain.connect(a.getInput());
        this.autoplay = !1;
        this.buffer = null;
        this.detune = 0;
        this.loop = !1;
        this.offset = this.loopEnd = this.loopStart = 0;
        this.duration = void 0;
        this.playbackRate = 1;
        this.isPlaying = !1;
        this.hasPlaybackControl = !0;
        this.sourceType = "empty";
        this._progress = this._startedAt = 0;
        this.filters = []
    }
    function Hg(a) {
        fd.call(this, a);
        this.panner = this.context.createPanner();
        this.panner.panningModel = "HRTF";
        this.panner.connect(this.gain)
    }
    function Ig(a, b) {
        this.analyser = a.context.createAnalyser();
        this.analyser.fftSize = void 0 !== b ? b : 2048;
        this.data = new Uint8Array(this.analyser.frequencyBinCount);
        a.getOutput().connect(this.analyser)
    }
    function Jg(a, b, c) {
        this.binding = a;
        this.valueSize = c;
        switch (b) {
        case "quaternion":
            a = this._slerp;
            b = this._slerpAdditive;
            var d = this._setAdditiveIdentityQuaternion;
            this.buffer = new Float64Array(6 * c);
            this._workIndex = 5;
            break;
        case "string":
        case "bool":
            b = a = this._select;
            d = this._setAdditiveIdentityOther;
            this.buffer = Array(5 * c);
            break;
        default:
            a = this._lerp,
            b = this._lerpAdditive,
            d = this._setAdditiveIdentityNumeric,
            this.buffer = new Float64Array(5 * c)
        }
        this._mixBufferRegion = a;
        this._mixBufferRegionAdditive = b;
        this._setIdentity = d;
        this._origIndex = 3;
        this._addIndex = 4;
        this.referenceCount = this.useCount = this.cumulativeWeightAdditive = this.cumulativeWeight = 0
    }
    function ki(a, b, c) {
        c = c || ya.parseTrackName(b);
        this._targetGroup = a;
        this._bindings = a.subscribe_(b, c)
    }
    function ya(a, b, c) {
        this.path = b;
        this.parsedPath = c || ya.parseTrackName(b);
        this.node = ya.findNode(a, this.parsedPath.nodeName) || a;
        this.rootNode = a
    }
    function li() {
        this.uuid = M.generateUUID();
        this._objects = Array.prototype.slice.call(arguments);
        this.nCachedObjects_ = 0;
        var a = {};
        this._indicesByUUID = a;
        for (var b = 0, c = arguments.length; b !== c; ++b)
            a[arguments[b].uuid] = b;
        this._paths = [];
        this._parsedPaths = [];
        this._bindings = [];
        this._bindingsIndicesByPath = {};
        var d = this;
        this.stats = {
            objects: {
                get total() {
                    return d._objects.length
                },
                get inUse() {
                    return this.total - d.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return d._bindings.length
            }
        }
    }
    function mi(a, b, c, d) {
        this._mixer = a;
        this._clip = b;
        this._localRoot = c || null;
        this.blendMode = d || b.blendMode;
        a = b.tracks;
        b = a.length;
        c = Array(b);
        d = {
            endingStart: 2400,
            endingEnd: 2400
        };
        for (var e = 0; e !== b; ++e) {
            var f = a[e].createInterpolant(null);
            c[e] = f;
            f.settings = d
        }
        this._interpolantSettings = d;
        this._interpolants = c;
        this._propertyBindings = Array(b);
        this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
        this.loop = 2201;
        this._loopCount = -1;
        this._startTime = null;
        this.time = 0;
        this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
        this.repetitions = Infinity;
        this.paused = !1;
        this.enabled = !0;
        this.clampWhenFinished = !1;
        this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }
    function Kg(a) {
        this._root = a;
        this._initMemoryManager();
        this.time = this._accuIndex = 0;
        this.timeScale = 1
    }
    function uf(a, b) {
        "string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        a = b);
        this.value = a
    }
    function Lg(a, b, c) {
        qb.call(this, a, b);
        this.meshPerAttribute = c || 1
    }
    function Mg(a, b, c, d) {
        this.ray = new Wb(a,b);
        this.near = c || 0;
        this.far = d || Infinity;
        this.camera = null;
        this.layers = new Ce;
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points
                }
            }
        })
    }
    function ni(a, b) {
        return a.distance - b.distance
    }
    function Ng(a, b, c, d) {
        a.layers.test(b.layers) && a.raycast(b, c);
        if (!0 === d) {
            a = a.children;
            d = 0;
            for (var e = a.length; d < e; d++)
                Ng(a[d], b, c, !0)
        }
    }
    function oi(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.phi = void 0 !== b ? b : 0;
        this.theta = void 0 !== c ? c : 0;
        return this
    }
    function pi(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.theta = void 0 !== b ? b : 0;
        this.y = void 0 !== c ? c : 0;
        return this
    }
    function Og(a, b) {
        this.min = void 0 !== a ? a : new v(Infinity,Infinity);
        this.max = void 0 !== b ? b : new v(-Infinity,-Infinity)
    }
    function Pg(a, b) {
        this.start = void 0 !== a ? a : new n;
        this.end = void 0 !== b ? b : new n
    }
    function me(a) {
        E.call(this);
        this.material = a;
        this.render = function() {}
    }
    function gd(a, b) {
        E.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.color = b;
        a = new B;
        b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
        for (var c = 0, d = 1; 32 > c; c++,
        d++) {
            var e = c / 32 * Math.PI * 2
              , f = d / 32 * Math.PI * 2;
            b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1)
        }
        a.setAttribute("position", new y(b,3));
        b = new da({
            fog: !1,
            toneMapped: !1
        });
        this.cone = new na(a,b);
        this.add(this.cone);
        this.update()
    }
    function qi(a) {
        var b = [];
        a && a.isBone && b.push(a);
        for (var c = 0; c < a.children.length; c++)
            b.push.apply(b, qi(a.children[c]));
        return b
    }
    function oc(a) {
        for (var b = qi(a), c = new B, d = [], e = [], f = new A(0,0,1), g = new A(0,1,0), h = 0; h < b.length; h++) {
            var k = b[h];
            k.parent && k.parent.isBone && (d.push(0, 0, 0),
            d.push(0, 0, 0),
            e.push(f.r, f.g, f.b),
            e.push(g.r, g.g, g.b))
        }
        c.setAttribute("position", new y(d,3));
        c.setAttribute("color", new y(e,3));
        d = new da({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        });
        na.call(this, c, d);
        this.type = "SkeletonHelper";
        this.root = a;
        this.bones = b;
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1
    }
    function hd(a, b, c) {
        this.light = a;
        this.light.updateMatrixWorld();
        this.color = c;
        a = new dc(b,4,2);
        b = new Na({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        });
        ja.call(this, a, b);
        this.type = "PointLightHelper";
        this.matrix = this.light.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.update()
    }
    function id(a, b, c) {
        E.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.color = c;
        a = new ac(b);
        a.rotateY(.5 * Math.PI);
        this.material = new Na({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        });
        void 0 === this.color && (this.material.vertexColors = !0);
        b = a.getAttribute("position");
        b = new Float32Array(3 * b.count);
        a.setAttribute("color", new N(b,3));
        this.add(new ja(a,this.material));
        this.update()
    }
    function vf(a, b, c, d) {
        a = a || 10;
        b = b || 10;
        c = new A(void 0 !== c ? c : 4473924);
        d = new A(void 0 !== d ? d : 8947848);
        var e = b / 2
          , f = a / b
          , g = a / 2;
        a = [];
        for (var h = [], k = 0, m = 0, l = -g; k <= b; k++,
        l += f) {
            a.push(-g, 0, l, g, 0, l);
            a.push(l, 0, -g, l, 0, g);
            var p = k === e ? c : d;
            p.toArray(h, m);
            m += 3;
            p.toArray(h, m);
            m += 3;
            p.toArray(h, m);
            m += 3;
            p.toArray(h, m);
            m += 3
        }
        b = new B;
        b.setAttribute("position", new y(a,3));
        b.setAttribute("color", new y(h,3));
        c = new da({
            vertexColors: !0,
            toneMapped: !1
        });
        na.call(this, b, c);
        this.type = "GridHelper"
    }
    function wf(a, b, c, d, e, f) {
        a = a || 10;
        b = b || 16;
        c = c || 8;
        d = d || 64;
        e = new A(void 0 !== e ? e : 4473924);
        f = new A(void 0 !== f ? f : 8947848);
        var g = [], h = [], k;
        for (k = 0; k <= b; k++) {
            var m = k / b * 2 * Math.PI;
            var l = Math.sin(m) * a;
            m = Math.cos(m) * a;
            g.push(0, 0, 0);
            g.push(l, 0, m);
            var p = k & 1 ? e : f;
            h.push(p.r, p.g, p.b);
            h.push(p.r, p.g, p.b)
        }
        for (k = 0; k <= c; k++) {
            p = k & 1 ? e : f;
            var n = a - a / c * k;
            for (b = 0; b < d; b++)
                m = b / d * 2 * Math.PI,
                l = Math.sin(m) * n,
                m = Math.cos(m) * n,
                g.push(l, 0, m),
                h.push(p.r, p.g, p.b),
                m = (b + 1) / d * 2 * Math.PI,
                l = Math.sin(m) * n,
                m = Math.cos(m) * n,
                g.push(l, 0, m),
                h.push(p.r, p.g, p.b)
        }
        a = new B;
        a.setAttribute("position", new y(g,3));
        a.setAttribute("color", new y(h,3));
        g = new da({
            vertexColors: !0,
            toneMapped: !1
        });
        na.call(this, a, g);
        this.type = "PolarGridHelper"
    }
    function jd(a, b, c) {
        E.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.color = c;
        void 0 === b && (b = 1);
        a = new B;
        a.setAttribute("position", new y([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0],3));
        b = new da({
            fog: !1,
            toneMapped: !1
        });
        this.lightPlane = new Ja(a,b);
        this.add(this.lightPlane);
        a = new B;
        a.setAttribute("position", new y([0, 0, 0, 0, 0, 1],3));
        this.targetLine = new Ja(a,b);
        this.add(this.targetLine);
        this.update()
    }
    function ne(a) {
        function b(a, b, d) {
            c(a, d);
            c(b, d)
        }
        function c(a, b) {
            f.push(0, 0, 0);
            g.push(b.r, b.g, b.b);
            void 0 === h[a] && (h[a] = []);
            h[a].push(f.length / 3 - 1)
        }
        var d = new B
          , e = new da({
            color: 16777215,
            vertexColors: !0,
            toneMapped: !1
        })
          , f = []
          , g = []
          , h = {}
          , k = new A(16755200)
          , m = new A(16711680)
          , l = new A(43775)
          , p = new A(16777215)
          , n = new A(3355443);
        b("n1", "n2", k);
        b("n2", "n4", k);
        b("n4", "n3", k);
        b("n3", "n1", k);
        b("f1", "f2", k);
        b("f2", "f4", k);
        b("f4", "f3", k);
        b("f3", "f1", k);
        b("n1", "f1", k);
        b("n2", "f2", k);
        b("n3", "f3", k);
        b("n4", "f4", k);
        b("p", "n1", m);
        b("p", "n2", m);
        b("p", "n3", m);
        b("p", "n4", m);
        b("u1", "u2", l);
        b("u2", "u3", l);
        b("u3", "u1", l);
        b("c", "t", p);
        b("p", "c", n);
        b("cn1", "cn2", n);
        b("cn3", "cn4", n);
        b("cf1", "cf2", n);
        b("cf3", "cf4", n);
        d.setAttribute("position", new y(f,3));
        d.setAttribute("color", new y(g,3));
        na.call(this, d, e);
        this.type = "CameraHelper";
        this.camera = a;
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.pointMap = h;
        this.update()
    }
    function oa(a, b, c, d, e, f, g) {
        xf.set(e, f, g).unproject(d);
        a = b[a];
        if (void 0 !== a)
            for (c = c.getAttribute("position"),
            b = 0,
            d = a.length; b < d; b++)
                c.setXYZ(a[b], xf.x, xf.y, xf.z)
    }
    function vb(a, b) {
        this.object = a;
        void 0 === b && (b = 16776960);
        a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var c = new Float32Array(24)
          , d = new B;
        d.setIndex(new N(a,1));
        d.setAttribute("position", new N(c,3));
        na.call(this, d, new da({
            color: b,
            toneMapped: !1
        }));
        this.type = "BoxHelper";
        this.matrixAutoUpdate = !1;
        this.update()
    }
    function oe(a, b) {
        this.type = "Box3Helper";
        this.box = a;
        b = b || 16776960;
        a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var c = new B;
        c.setIndex(new N(a,1));
        c.setAttribute("position", new y([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],3));
        na.call(this, c, new da({
            color: b,
            toneMapped: !1
        }));
        this.type = "Box3Helper";
        this.geometry.computeBoundingSphere()
    }
    function pe(a, b, c) {
        this.plane = a;
        this.size = void 0 === b ? 1 : b;
        a = void 0 !== c ? c : 16776960;
        b = new B;
        b.setAttribute("position", new y([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],3));
        b.computeBoundingSphere();
        Ja.call(this, b, new da({
            color: a,
            toneMapped: !1
        }));
        this.type = "PlaneHelper";
        b = new B;
        b.setAttribute("position", new y([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],3));
        b.computeBoundingSphere();
        this.add(new ja(b,new Na({
            color: a,
            opacity: .2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1
        })))
    }
    function wb(a, b, c, d, e, f) {
        E.call(this);
        this.type = "ArrowHelper";
        void 0 === a && (a = new n(0,0,1));
        void 0 === b && (b = new n(0,0,0));
        void 0 === c && (c = 1);
        void 0 === d && (d = 16776960);
        void 0 === e && (e = .2 * c);
        void 0 === f && (f = .2 * e);
        void 0 === yf && (yf = new B,
        yf.setAttribute("position", new y([0, 0, 0, 0, 1, 0],3)),
        Qg = new sb(0,.5,1,5,1),
        Qg.translate(0, -.5, 0));
        this.position.copy(b);
        this.line = new Ja(yf,new da({
            color: d,
            toneMapped: !1
        }));
        this.line.matrixAutoUpdate = !1;
        this.add(this.line);
        this.cone = new ja(Qg,new Na({
            color: d,
            toneMapped: !1
        }));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(a);
        this.setLength(c, e, f)
    }
    function qe(a) {
        a = a || 1;
        var b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a];
        a = new B;
        a.setAttribute("position", new y(b,3));
        a.setAttribute("color", new y([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],3));
        b = new da({
            vertexColors: !0,
            toneMapped: !1
        });
        na.call(this, a, b);
        this.type = "AxesHelper"
    }
    function Rg(a) {
        this._renderer = a;
        this._pingPongRenderTarget = null;
        a = new Float32Array(20);
        var b = new n(0,1,0);
        a = new tb({
            defines: {
                n: 20
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: a
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: b
                },
                inputEncoding: {
                    value: kb[3E3]
                },
                outputEncoding: {
                    value: kb[3E3]
                }
            },
            vertexShader: Sg(),
            fragmentShader: "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n" + Tg() + "\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvec3 getSample(float theta, vec3 axis) {\n\tfloat cosTheta = cos(theta);\n\t// Rodrigues' axis-angle rotation\n\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\treturn bilinearCubeUV(envMap, sampleDirection, mipInt);\n}\n\nvoid main() {\n\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\tif (all(equal(axis, vec3(0.0))))\n\t\taxis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);\n\taxis = normalize(axis);\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb += weights[0] * getSample(0.0, axis);\n\tfor (int i = 1; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfloat theta = dTheta * float(i);\n\t\tgl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);\n\t\tgl_FragColor.rgb += weights[i] * getSample(theta, axis);\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
        a.type = "SphericalGaussianBlur";
        this._blurMaterial = a;
        this._cubemapShader = this._equirectShader = null;
        this._compileMaterial(this._blurMaterial)
    }
    function ri(a) {
        a = new za(3 * lb,3 * lb,a);
        a.texture.mapping = 306;
        a.texture.name = "PMREM.cubeUv";
        a.scissorTest = !0;
        return a
    }
    function Ug(a, b, c, d, e) {
        a.viewport.set(b, c, d, e);
        a.scissor.set(b, c, d, e)
    }
    function si() {
        var a = new v(1,1);
        a = new tb({
            uniforms: {
                envMap: {
                    value: null
                },
                texelSize: {
                    value: a
                },
                inputEncoding: {
                    value: kb[3E3]
                },
                outputEncoding: {
                    value: kb[3E3]
                }
            },
            vertexShader: Sg(),
            fragmentShader: "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n" + Tg() + "\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
        a.type = "EquirectangularToCubeUV";
        return a
    }
    function ti() {
        var a = new tb({
            uniforms: {
                envMap: {
                    value: null
                },
                inputEncoding: {
                    value: kb[3E3]
                },
                outputEncoding: {
                    value: kb[3E3]
                }
            },
            vertexShader: Sg(),
            fragmentShader: "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n" + Tg() + "\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
        a.type = "CubemapToCubeUV";
        return a
    }
    function Sg() {
        return "\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"
    }
    function Tg() {
        return "\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"
    }
    function ui(a) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        pa.call(this, a);
        this.type = "catmullrom";
        this.closed = !0
    }
    function vi(a) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        pa.call(this, a);
        this.type = "catmullrom"
    }
    function Vg(a) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
        pa.call(this, a);
        this.type = "catmullrom"
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
    void 0 === Number.isInteger && (Number.isInteger = function(a) {
        return "number" === typeof a && isFinite(a) && Math.floor(a) === a
    }
    );
    void 0 === Math.sign && (Math.sign = function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : +a
    }
    );
    !1 === "name"in Function.prototype && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    });
    void 0 === Object.assign && (Object.assign = function(a) {
        if (void 0 === a || null === a)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (void 0 !== d && null !== d)
                for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e])
        }
        return b
    }
    );
    Object.assign(ua.prototype, {
        addEventListener: function(a, b) {
            void 0 === this._listeners && (this._listeners = {});
            var c = this._listeners;
            void 0 === c[a] && (c[a] = []);
            -1 === c[a].indexOf(b) && c[a].push(b)
        },
        hasEventListener: function(a, b) {
            if (void 0 === this._listeners)
                return !1;
            var c = this._listeners;
            return void 0 !== c[a] && -1 !== c[a].indexOf(b)
        },
        removeEventListener: function(a, b) {
            void 0 !== this._listeners && (a = this._listeners[a],
            void 0 !== a && (b = a.indexOf(b),
            -1 !== b && a.splice(b, 1)))
        },
        dispatchEvent: function(a) {
            if (void 0 !== this._listeners) {
                var b = this._listeners[a.type];
                if (void 0 !== b) {
                    a.target = this;
                    b = b.slice(0);
                    for (var c = 0, d = b.length; c < d; c++)
                        b[c].call(this, a)
                }
            }
        }
    });
    for (var ta = [], re = 0; 256 > re; re++)
        ta[re] = (16 > re ? "0" : "") + re.toString(16);
    var M = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var a = 4294967295 * Math.random() | 0
              , b = 4294967295 * Math.random() | 0
              , c = 4294967295 * Math.random() | 0
              , d = 4294967295 * Math.random() | 0;
            return (ta[a & 255] + ta[a >> 8 & 255] + ta[a >> 16 & 255] + ta[a >> 24 & 255] + "-" + ta[b & 255] + ta[b >> 8 & 255] + "-" + ta[b >> 16 & 15 | 64] + ta[b >> 24 & 255] + "-" + ta[c & 63 | 128] + ta[c >> 8 & 255] + "-" + ta[c >> 16 & 255] + ta[c >> 24 & 255] + ta[d & 255] + ta[d >> 8 & 255] + ta[d >> 16 & 255] + ta[d >> 24 & 255]).toUpperCase()
        },
        clamp: function(a, b, c) {
            return Math.max(b, Math.min(c, a))
        },
        euclideanModulo: function(a, b) {
            return (a % b + b) % b
        },
        mapLinear: function(a, b, c, d, e) {
            return d + (a - b) * (e - d) / (c - b)
        },
        lerp: function(a, b, c) {
            return (1 - c) * a + c * b
        },
        smoothstep: function(a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a)
        },
        smootherstep: function(a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (c - b);
            return a * a * a * (a * (6 * a - 15) + 10)
        },
        randInt: function(a, b) {
            return a + Math.floor(Math.random() * (b - a + 1))
        },
        randFloat: function(a, b) {
            return a + Math.random() * (b - a)
        },
        randFloatSpread: function(a) {
            return a * (.5 - Math.random())
        },
        degToRad: function(a) {
            return a * M.DEG2RAD
        },
        radToDeg: function(a) {
            return a * M.RAD2DEG
        },
        isPowerOfTwo: function(a) {
            return 0 === (a & a - 1) && 0 !== a
        },
        ceilPowerOfTwo: function(a) {
            return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
        },
        floorPowerOfTwo: function(a) {
            return Math.pow(2, Math.floor(Math.log(a) / Math.LN2))
        },
        setQuaternionFromProperEuler: function(a, b, c, d, e) {
            var f = Math.cos
              , g = Math.sin
              , h = f(c / 2);
            c = g(c / 2);
            var k = f((b + d) / 2)
              , m = g((b + d) / 2)
              , l = f((b - d) / 2)
              , p = g((b - d) / 2);
            f = f((d - b) / 2);
            b = g((d - b) / 2);
            switch (e) {
            case "XYX":
                a.set(h * m, c * l, c * p, h * k);
                break;
            case "YZY":
                a.set(c * p, h * m, c * l, h * k);
                break;
            case "ZXZ":
                a.set(c * l, c * p, h * m, h * k);
                break;
            case "XZX":
                a.set(h * m, c * b, c * f, h * k);
                break;
            case "YXY":
                a.set(c * f, h * m, c * b, h * k);
                break;
            case "ZYZ":
                a.set(c * b, c * f, h * m, h * k);
                break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + e)
            }
        }
    };
    Object.defineProperties(v.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(a) {
                this.x = a
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(a) {
                this.y = a
            }
        }
    });
    Object.assign(v.prototype, {
        isVector2: !0,
        set: function(a, b) {
            this.x = a;
            this.y = b;
            return this
        },
        setScalar: function(a) {
            this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this
        },
        multiply: function(a) {
            this.x *= a.x;
            this.y *= a.y;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            return this
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        applyMatrix3: function(a) {
            var b = this.x
              , c = this.y;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6];
            this.y = a[1] * b + a[4] * c + a[7];
            return this
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            return this
        },
        clampScalar: function(a, b) {
            this.x = Math.max(a, Math.min(b, this.x));
            this.y = Math.max(a, Math.min(b, this.y));
            return this
        },
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y
        },
        cross: function(a) {
            return this.x * a.y - this.y * a.x
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x;
            a = this.y - a.y;
            return b * b + a * a
        },
        manhattanDistanceTo: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y)
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a)
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            return this
        },
        rotateAround: function(a, b) {
            var c = Math.cos(b);
            b = Math.sin(b);
            var d = this.x - a.x
              , e = this.y - a.y;
            this.x = d * c - e * b + a.x;
            this.y = d * b + e * c + a.y;
            return this
        },
        random: function() {
            this.x = Math.random();
            this.y = Math.random();
            return this
        }
    });
    Object.assign(xa.prototype, {
        isMatrix3: !0,
        set: function(a, b, c, d, e, f, g, h, k) {
            var m = this.elements;
            m[0] = a;
            m[1] = d;
            m[2] = g;
            m[3] = b;
            m[4] = e;
            m[5] = h;
            m[6] = c;
            m[7] = f;
            m[8] = k;
            return this
        },
        identity: function() {
            this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
            return this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            return this
        },
        extractBasis: function(a, b, c) {
            a.setFromMatrix3Column(this, 0);
            b.setFromMatrix3Column(this, 1);
            c.setFromMatrix3Column(this, 2);
            return this
        },
        setFromMatrix4: function(a) {
            a = a.elements;
            this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
            return this
        },
        multiply: function(a) {
            return this.multiplyMatrices(this, a)
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this)
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements
              , d = b.elements;
            b = this.elements;
            a = c[0];
            var e = c[3]
              , f = c[6]
              , g = c[1]
              , h = c[4]
              , k = c[7]
              , m = c[2]
              , l = c[5];
            c = c[8];
            var p = d[0]
              , n = d[3]
              , r = d[6]
              , q = d[1]
              , t = d[4]
              , v = d[7]
              , x = d[2]
              , w = d[5];
            d = d[8];
            b[0] = a * p + e * q + f * x;
            b[3] = a * n + e * t + f * w;
            b[6] = a * r + e * v + f * d;
            b[1] = g * p + h * q + k * x;
            b[4] = g * n + h * t + k * w;
            b[7] = g * r + h * v + k * d;
            b[2] = m * p + l * q + c * x;
            b[5] = m * n + l * t + c * w;
            b[8] = m * r + l * v + c * d;
            return this
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[3] *= a;
            b[6] *= a;
            b[1] *= a;
            b[4] *= a;
            b[7] *= a;
            b[2] *= a;
            b[5] *= a;
            b[8] *= a;
            return this
        },
        determinant: function() {
            var a = this.elements
              , b = a[0]
              , c = a[1]
              , d = a[2]
              , e = a[3]
              , f = a[4]
              , g = a[5]
              , h = a[6]
              , k = a[7];
            a = a[8];
            return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
        },
        getInverse: function(a, b) {
            void 0 !== b && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
            var c = a.elements;
            a = this.elements;
            b = c[0];
            var d = c[1]
              , e = c[2]
              , f = c[3]
              , g = c[4]
              , h = c[5]
              , k = c[6]
              , m = c[7];
            c = c[8];
            var l = c * g - h * m
              , p = h * k - c * f
              , n = m * f - g * k
              , r = b * l + d * p + e * n;
            if (0 === r)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            r = 1 / r;
            a[0] = l * r;
            a[1] = (e * m - c * d) * r;
            a[2] = (h * d - e * g) * r;
            a[3] = p * r;
            a[4] = (c * b - e * k) * r;
            a[5] = (e * f - h * b) * r;
            a[6] = n * r;
            a[7] = (d * k - m * b) * r;
            a[8] = (g * b - d * f) * r;
            return this
        },
        transpose: function() {
            var a = this.elements;
            var b = a[1];
            a[1] = a[3];
            a[3] = b;
            b = a[2];
            a[2] = a[6];
            a[6] = b;
            b = a[5];
            a[5] = a[7];
            a[7] = b;
            return this
        },
        getNormalMatrix: function(a) {
            return this.setFromMatrix4(a).getInverse(this).transpose()
        },
        transposeIntoArray: function(a) {
            var b = this.elements;
            a[0] = b[0];
            a[1] = b[3];
            a[2] = b[6];
            a[3] = b[1];
            a[4] = b[4];
            a[5] = b[7];
            a[6] = b[2];
            a[7] = b[5];
            a[8] = b[8];
            return this
        },
        setUvTransform: function(a, b, c, d, e, f, g) {
            var h = Math.cos(e);
            e = Math.sin(e);
            this.set(c * h, c * e, -c * (h * f + e * g) + f + a, -d * e, d * h, -d * (-e * f + h * g) + g + b, 0, 0, 1)
        },
        scale: function(a, b) {
            var c = this.elements;
            c[0] *= a;
            c[3] *= a;
            c[6] *= a;
            c[1] *= b;
            c[4] *= b;
            c[7] *= b;
            return this
        },
        rotate: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            var c = this.elements
              , d = c[0]
              , e = c[3]
              , f = c[6]
              , g = c[1]
              , h = c[4]
              , k = c[7];
            c[0] = b * d + a * g;
            c[3] = b * e + a * h;
            c[6] = b * f + a * k;
            c[1] = -a * d + b * g;
            c[4] = -a * e + b * h;
            c[7] = -a * f + b * k;
            return this
        },
        translate: function(a, b) {
            var c = this.elements;
            c[0] += a * c[2];
            c[3] += a * c[5];
            c[6] += a * c[8];
            c[1] += b * c[2];
            c[4] += b * c[5];
            c[7] += b * c[8];
            return this
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for (var c = 0; 9 > c; c++)
                if (b[c] !== a[c])
                    return !1;
            return !0
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 9 > c; c++)
                this.elements[c] = a[c + b];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            return a
        }
    });
    var kd, Ob = {
        getDataURL: function(a) {
            if ("undefined" == typeof HTMLCanvasElement)
                return a.src;
            if (!(a instanceof HTMLCanvasElement)) {
                void 0 === kd && (kd = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"));
                kd.width = a.width;
                kd.height = a.height;
                var b = kd.getContext("2d");
                a instanceof ImageData ? b.putImageData(a, 0, 0) : b.drawImage(a, 0, 0, a.width, a.height);
                a = kd
            }
            return 2048 < a.width || 2048 < a.height ? a.toDataURL("image/jpeg", .6) : a.toDataURL("image/png")
        }
    }, hj = 0;
    V.DEFAULT_IMAGE = void 0;
    V.DEFAULT_MAPPING = 300;
    V.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: V,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.name = a.name;
            this.image = a.image;
            this.mipmaps = a.mipmaps.slice(0);
            this.mapping = a.mapping;
            this.wrapS = a.wrapS;
            this.wrapT = a.wrapT;
            this.magFilter = a.magFilter;
            this.minFilter = a.minFilter;
            this.anisotropy = a.anisotropy;
            this.format = a.format;
            this.internalFormat = a.internalFormat;
            this.type = a.type;
            this.offset.copy(a.offset);
            this.repeat.copy(a.repeat);
            this.center.copy(a.center);
            this.rotation = a.rotation;
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            this.matrix.copy(a.matrix);
            this.generateMipmaps = a.generateMipmaps;
            this.premultiplyAlpha = a.premultiplyAlpha;
            this.flipY = a.flipY;
            this.unpackAlignment = a.unpackAlignment;
            this.encoding = a.encoding;
            return this
        },
        toJSON: function(a) {
            var b = void 0 === a || "string" === typeof a;
            if (!b && void 0 !== a.textures[this.uuid])
                return a.textures[this.uuid];
            var c = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                var d = this.image;
                void 0 === d.uuid && (d.uuid = M.generateUUID());
                if (!b && void 0 === a.images[d.uuid]) {
                    if (Array.isArray(d)) {
                        var e = [];
                        for (var f = 0, g = d.length; f < g; f++)
                            e.push(Ob.getDataURL(d[f]))
                    } else
                        e = Ob.getDataURL(d);
                    a.images[d.uuid] = {
                        uuid: d.uuid,
                        url: e
                    }
                }
                c.image = d.uuid
            }
            b || (a.textures[this.uuid] = c);
            return c
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(a) {
            if (300 !== this.mapping)
                return a;
            a.applyMatrix3(this.matrix);
            if (0 > a.x || 1 < a.x)
                switch (this.wrapS) {
                case 1E3:
                    a.x -= Math.floor(a.x);
                    break;
                case 1001:
                    a.x = 0 > a.x ? 0 : 1;
                    break;
                case 1002:
                    a.x = 1 === Math.abs(Math.floor(a.x) % 2) ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x)
                }
            if (0 > a.y || 1 < a.y)
                switch (this.wrapT) {
                case 1E3:
                    a.y -= Math.floor(a.y);
                    break;
                case 1001:
                    a.y = 0 > a.y ? 0 : 1;
                    break;
                case 1002:
                    a.y = 1 === Math.abs(Math.floor(a.y) % 2) ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y)
                }
            this.flipY && (a.y = 1 - a.y);
            return a
        }
    });
    Object.defineProperty(V.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.defineProperties(ca.prototype, {
        width: {
            get: function() {
                return this.z
            },
            set: function(a) {
                this.z = a
            }
        },
        height: {
            get: function() {
                return this.w
            },
            set: function(a) {
                this.w = a
            }
        }
    });
    Object.assign(ca.prototype, {
        isVector4: !0,
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d;
            return this
        },
        setScalar: function(a) {
            this.w = this.z = this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setZ: function(a) {
            this.z = a;
            return this
        },
        setW: function(a) {
            this.w = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = void 0 !== a.w ? a.w : 1;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            this.w += a.w;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            this.w += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            this.w = a.w + b.w;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            this.w += a.w * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.w -= a.w;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            this.w -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            this.w = a.w - b.w;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            this.w *= a;
            return this
        },
        applyMatrix4: function(a) {
            var b = this.x
              , c = this.y
              , d = this.z
              , e = this.w;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        setAxisAngleFromQuaternion: function(a) {
            this.w = 2 * Math.acos(a.w);
            var b = Math.sqrt(1 - a.w * a.w);
            1E-4 > b ? (this.x = 1,
            this.z = this.y = 0) : (this.x = a.x / b,
            this.y = a.y / b,
            this.z = a.z / b);
            return this
        },
        setAxisAngleFromRotationMatrix: function(a) {
            a = a.elements;
            var b = a[0];
            var c = a[4];
            var d = a[8]
              , e = a[1]
              , f = a[5]
              , g = a[9];
            var h = a[2];
            var k = a[6];
            var m = a[10];
            if (.01 > Math.abs(c - e) && .01 > Math.abs(d - h) && .01 > Math.abs(g - k)) {
                if (.1 > Math.abs(c + e) && .1 > Math.abs(d + h) && .1 > Math.abs(g + k) && .1 > Math.abs(b + f + m - 3))
                    return this.set(1, 0, 0, 0),
                    this;
                a = Math.PI;
                b = (b + 1) / 2;
                f = (f + 1) / 2;
                m = (m + 1) / 2;
                c = (c + e) / 4;
                d = (d + h) / 4;
                g = (g + k) / 4;
                b > f && b > m ? .01 > b ? (k = 0,
                c = h = .707106781) : (k = Math.sqrt(b),
                h = c / k,
                c = d / k) : f > m ? .01 > f ? (k = .707106781,
                h = 0,
                c = .707106781) : (h = Math.sqrt(f),
                k = c / h,
                c = g / h) : .01 > m ? (h = k = .707106781,
                c = 0) : (c = Math.sqrt(m),
                k = d / c,
                h = g / c);
                this.set(k, h, c, a);
                return this
            }
            a = Math.sqrt((k - g) * (k - g) + (d - h) * (d - h) + (e - c) * (e - c));
            .001 > Math.abs(a) && (a = 1);
            this.x = (k - g) / a;
            this.y = (d - h) / a;
            this.z = (e - c) / a;
            this.w = Math.acos((b + f + m - 1) / 2);
            return this
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            this.w = Math.min(this.w, a.w);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            this.w = Math.max(this.w, a.w);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            this.w = Math.max(a.w, Math.min(b.w, this.w));
            return this
        },
        clampScalar: function(a, b) {
            this.x = Math.max(a, Math.min(b, this.x));
            this.y = Math.max(a, Math.min(b, this.y));
            this.z = Math.max(a, Math.min(b, this.z));
            this.w = Math.max(a, Math.min(b, this.w));
            return this
        },
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            this.w = Math.floor(this.w);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            this.w = Math.ceil(this.w);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            this.w = Math.round(this.w);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.w = -this.w;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a)
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            this.w += (a.w - this.w) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            this.w = a[b + 3];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            a[b + 3] = this.w;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            this.w = a.getW(b);
            return this
        },
        random: function() {
            this.x = Math.random();
            this.y = Math.random();
            this.z = Math.random();
            this.w = Math.random();
            return this
        }
    });
    za.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: za,
        isWebGLRenderTarget: !0,
        setSize: function(a, b) {
            if (this.width !== a || this.height !== b)
                this.width = a,
                this.height = b,
                this.texture.image.width = a,
                this.texture.image.height = b,
                this.dispose();
            this.viewport.set(0, 0, a, b);
            this.scissor.set(0, 0, a, b)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.width = a.width;
            this.height = a.height;
            this.viewport.copy(a.viewport);
            this.texture = a.texture.clone();
            this.depthBuffer = a.depthBuffer;
            this.stencilBuffer = a.stencilBuffer;
            this.depthTexture = a.depthTexture;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Xf.prototype = Object.assign(Object.create(za.prototype), {
        constructor: Xf,
        isWebGLMultisampleRenderTarget: !0,
        copy: function(a) {
            za.prototype.copy.call(this, a);
            this.samples = a.samples;
            return this
        }
    });
    Object.assign(la, {
        slerp: function(a, b, c, d) {
            return c.copy(a).slerp(b, d)
        },
        slerpFlat: function(a, b, c, d, e, f, g) {
            var h = c[d + 0]
              , k = c[d + 1]
              , m = c[d + 2];
            c = c[d + 3];
            d = e[f + 0];
            var l = e[f + 1]
              , p = e[f + 2];
            e = e[f + 3];
            if (c !== e || h !== d || k !== l || m !== p) {
                f = 1 - g;
                var n = h * d + k * l + m * p + c * e
                  , r = 0 <= n ? 1 : -1
                  , q = 1 - n * n;
                q > Number.EPSILON && (q = Math.sqrt(q),
                n = Math.atan2(q, n * r),
                f = Math.sin(f * n) / q,
                g = Math.sin(g * n) / q);
                r *= g;
                h = h * f + d * r;
                k = k * f + l * r;
                m = m * f + p * r;
                c = c * f + e * r;
                f === 1 - g && (g = 1 / Math.sqrt(h * h + k * k + m * m + c * c),
                h *= g,
                k *= g,
                m *= g,
                c *= g)
            }
            a[b] = h;
            a[b + 1] = k;
            a[b + 2] = m;
            a[b + 3] = c
        },
        multiplyQuaternionsFlat: function(a, b, c, d, e, f) {
            var g = c[d]
              , h = c[d + 1]
              , k = c[d + 2];
            c = c[d + 3];
            d = e[f];
            var m = e[f + 1]
              , l = e[f + 2];
            e = e[f + 3];
            a[b] = g * e + c * d + h * l - k * m;
            a[b + 1] = h * e + c * m + k * d - g * l;
            a[b + 2] = k * e + c * l + g * m - h * d;
            a[b + 3] = c * e - g * d - h * m - k * l;
            return a
        }
    });
    Object.defineProperties(la.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(a) {
                this._z = a;
                this._onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(a) {
                this._w = a;
                this._onChangeCallback()
            }
        }
    });
    Object.assign(la.prototype, {
        isQuaternion: !0,
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._w = d;
            this._onChangeCallback();
            return this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(a) {
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = a.w;
            this._onChangeCallback();
            return this
        },
        setFromEuler: function(a, b) {
            if (!a || !a.isEuler)
                throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var c = a._x
              , d = a._y
              , e = a._z;
            a = a.order;
            var f = Math.cos
              , g = Math.sin
              , h = f(c / 2)
              , k = f(d / 2);
            f = f(e / 2);
            c = g(c / 2);
            d = g(d / 2);
            e = g(e / 2);
            switch (a) {
            case "XYZ":
                this._x = c * k * f + h * d * e;
                this._y = h * d * f - c * k * e;
                this._z = h * k * e + c * d * f;
                this._w = h * k * f - c * d * e;
                break;
            case "YXZ":
                this._x = c * k * f + h * d * e;
                this._y = h * d * f - c * k * e;
                this._z = h * k * e - c * d * f;
                this._w = h * k * f + c * d * e;
                break;
            case "ZXY":
                this._x = c * k * f - h * d * e;
                this._y = h * d * f + c * k * e;
                this._z = h * k * e + c * d * f;
                this._w = h * k * f - c * d * e;
                break;
            case "ZYX":
                this._x = c * k * f - h * d * e;
                this._y = h * d * f + c * k * e;
                this._z = h * k * e - c * d * f;
                this._w = h * k * f + c * d * e;
                break;
            case "YZX":
                this._x = c * k * f + h * d * e;
                this._y = h * d * f + c * k * e;
                this._z = h * k * e - c * d * f;
                this._w = h * k * f - c * d * e;
                break;
            case "XZY":
                this._x = c * k * f - h * d * e;
                this._y = h * d * f - c * k * e;
                this._z = h * k * e + c * d * f;
                this._w = h * k * f + c * d * e;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
            }
            !1 !== b && this._onChangeCallback();
            return this
        },
        setFromAxisAngle: function(a, b) {
            b /= 2;
            var c = Math.sin(b);
            this._x = a.x * c;
            this._y = a.y * c;
            this._z = a.z * c;
            this._w = Math.cos(b);
            this._onChangeCallback();
            return this
        },
        setFromRotationMatrix: function(a) {
            var b = a.elements
              , c = b[0];
            a = b[4];
            var d = b[8]
              , e = b[1]
              , f = b[5]
              , g = b[9]
              , h = b[2]
              , k = b[6];
            b = b[10];
            var m = c + f + b;
            0 < m ? (c = .5 / Math.sqrt(m + 1),
            this._w = .25 / c,
            this._x = (k - g) * c,
            this._y = (d - h) * c,
            this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b),
            this._w = (k - g) / c,
            this._x = .25 * c,
            this._y = (a + e) / c,
            this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b),
            this._w = (d - h) / c,
            this._x = (a + e) / c,
            this._y = .25 * c,
            this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f),
            this._w = (e - a) / c,
            this._x = (d + h) / c,
            this._y = (g + k) / c,
            this._z = .25 * c);
            this._onChangeCallback();
            return this
        },
        setFromUnitVectors: function(a, b) {
            var c = a.dot(b) + 1;
            1E-6 > c ? (c = 0,
            Math.abs(a.x) > Math.abs(a.z) ? (this._x = -a.y,
            this._y = a.x,
            this._z = 0) : (this._x = 0,
            this._y = -a.z,
            this._z = a.y)) : (this._x = a.y * b.z - a.z * b.y,
            this._y = a.z * b.x - a.x * b.z,
            this._z = a.x * b.y - a.y * b.x);
            this._w = c;
            return this.normalize()
        },
        angleTo: function(a) {
            return 2 * Math.acos(Math.abs(M.clamp(this.dot(a), -1, 1)))
        },
        rotateTowards: function(a, b) {
            var c = this.angleTo(a);
            if (0 === c)
                return this;
            this.slerp(a, Math.min(1, b / c));
            return this
        },
        inverse: function() {
            return this.conjugate()
        },
        conjugate: function() {
            this._x *= -1;
            this._y *= -1;
            this._z *= -1;
            this._onChangeCallback();
            return this
        },
        dot: function(a) {
            return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var a = this.length();
            0 === a ? (this._z = this._y = this._x = 0,
            this._w = 1) : (a = 1 / a,
            this._x *= a,
            this._y *= a,
            this._z *= a,
            this._w *= a);
            this._onChangeCallback();
            return this
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
        },
        premultiply: function(a) {
            return this.multiplyQuaternions(a, this)
        },
        multiplyQuaternions: function(a, b) {
            var c = a._x
              , d = a._y
              , e = a._z;
            a = a._w;
            var f = b._x
              , g = b._y
              , h = b._z;
            b = b._w;
            this._x = c * b + a * f + d * h - e * g;
            this._y = d * b + a * g + e * f - c * h;
            this._z = e * b + a * h + c * g - d * f;
            this._w = a * b - c * f - d * g - e * h;
            this._onChangeCallback();
            return this
        },
        slerp: function(a, b) {
            if (0 === b)
                return this;
            if (1 === b)
                return this.copy(a);
            var c = this._x
              , d = this._y
              , e = this._z
              , f = this._w
              , g = f * a._w + c * a._x + d * a._y + e * a._z;
            0 > g ? (this._w = -a._w,
            this._x = -a._x,
            this._y = -a._y,
            this._z = -a._z,
            g = -g) : this.copy(a);
            if (1 <= g)
                return this._w = f,
                this._x = c,
                this._y = d,
                this._z = e,
                this;
            a = 1 - g * g;
            if (a <= Number.EPSILON)
                return g = 1 - b,
                this._w = g * f + b * this._w,
                this._x = g * c + b * this._x,
                this._y = g * d + b * this._y,
                this._z = g * e + b * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this;
            a = Math.sqrt(a);
            var h = Math.atan2(a, g);
            g = Math.sin((1 - b) * h) / a;
            b = Math.sin(b * h) / a;
            this._w = f * g + this._w * b;
            this._x = c * g + this._x * b;
            this._y = d * g + this._y * b;
            this._z = e * g + this._z * b;
            this._onChangeCallback();
            return this
        },
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this._x = a[b];
            this._y = a[b + 1];
            this._z = a[b + 2];
            this._w = a[b + 3];
            this._onChangeCallback();
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._w;
            return a
        },
        fromBufferAttribute: function(a, b) {
            this._x = a.getX(b);
            this._y = a.getY(b);
            this._z = a.getZ(b);
            this._w = a.getW(b);
            return this
        },
        _onChange: function(a) {
            this._onChangeCallback = a;
            return this
        },
        _onChangeCallback: function() {}
    });
    var Wg = new n
      , wi = new la;
    Object.assign(n.prototype, {
        isVector3: !0,
        set: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this
        },
        setScalar: function(a) {
            this.z = this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setZ: function(a) {
            this.z = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this
        },
        multiply: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
                this.multiplyVectors(a, b);
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            return this
        },
        multiplyVectors: function(a, b) {
            this.x = a.x * b.x;
            this.y = a.y * b.y;
            this.z = a.z * b.z;
            return this
        },
        applyEuler: function(a) {
            a && a.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
            return this.applyQuaternion(wi.setFromEuler(a))
        },
        applyAxisAngle: function(a, b) {
            return this.applyQuaternion(wi.setFromAxisAngle(a, b))
        },
        applyMatrix3: function(a) {
            var b = this.x
              , c = this.y
              , d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6] * d;
            this.y = a[1] * b + a[4] * c + a[7] * d;
            this.z = a[2] * b + a[5] * c + a[8] * d;
            return this
        },
        applyNormalMatrix: function(a) {
            return this.applyMatrix3(a).normalize()
        },
        applyMatrix4: function(a) {
            var b = this.x
              , c = this.y
              , d = this.z;
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        },
        applyQuaternion: function(a) {
            var b = this.x
              , c = this.y
              , d = this.z
              , e = a.x
              , f = a.y
              , g = a.z;
            a = a.w;
            var h = a * b + f * d - g * c
              , k = a * c + g * b - e * d
              , m = a * d + e * c - f * b;
            b = -e * b - f * c - g * d;
            this.x = h * a + b * -e + k * -g - m * -f;
            this.y = k * a + b * -f + m * -e - h * -g;
            this.z = m * a + b * -g + h * -f - k * -e;
            return this
        },
        project: function(a) {
            return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)
        },
        unproject: function(a) {
            return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)
        },
        transformDirection: function(a) {
            var b = this.x
              , c = this.y
              , d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d;
            this.y = a[1] * b + a[5] * c + a[9] * d;
            this.z = a[2] * b + a[6] * c + a[10] * d;
            return this.normalize()
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            return this
        },
        clampScalar: function(a, b) {
            this.x = Math.max(a, Math.min(b, this.x));
            this.y = Math.max(a, Math.min(b, this.y));
            this.z = Math.max(a, Math.min(b, this.z));
            return this
        },
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a)
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        cross: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(a, b)) : this.crossVectors(this, a)
        },
        crossVectors: function(a, b) {
            var c = a.x
              , d = a.y;
            a = a.z;
            var e = b.x
              , f = b.y;
            b = b.z;
            this.x = d * b - a * f;
            this.y = a * e - c * b;
            this.z = c * f - d * e;
            return this
        },
        projectOnVector: function(a) {
            var b = a.lengthSq();
            if (0 === b)
                return this.set(0, 0, 0);
            b = a.dot(this) / b;
            return this.copy(a).multiplyScalar(b)
        },
        projectOnPlane: function(a) {
            Wg.copy(this).projectOnVector(a);
            return this.sub(Wg)
        },
        reflect: function(a) {
            return this.sub(Wg.copy(a).multiplyScalar(2 * this.dot(a)))
        },
        angleTo: function(a) {
            var b = Math.sqrt(this.lengthSq() * a.lengthSq());
            if (0 === b)
                return Math.PI / 2;
            a = this.dot(a) / b;
            return Math.acos(M.clamp(a, -1, 1))
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x
              , c = this.y - a.y;
            a = this.z - a.z;
            return b * b + c * c + a * a
        },
        manhattanDistanceTo: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z)
        },
        setFromSpherical: function(a) {
            return this.setFromSphericalCoords(a.radius, a.phi, a.theta)
        },
        setFromSphericalCoords: function(a, b, c) {
            var d = Math.sin(b) * a;
            this.x = d * Math.sin(c);
            this.y = Math.cos(b) * a;
            this.z = d * Math.cos(c);
            return this
        },
        setFromCylindrical: function(a) {
            return this.setFromCylindricalCoords(a.radius, a.theta, a.y)
        },
        setFromCylindricalCoords: function(a, b, c) {
            this.x = a * Math.sin(b);
            this.y = c;
            this.z = a * Math.cos(b);
            return this
        },
        setFromMatrixPosition: function(a) {
            a = a.elements;
            this.x = a[12];
            this.y = a[13];
            this.z = a[14];
            return this
        },
        setFromMatrixScale: function(a) {
            var b = this.setFromMatrixColumn(a, 0).length()
              , c = this.setFromMatrixColumn(a, 1).length();
            a = this.setFromMatrixColumn(a, 2).length();
            this.x = b;
            this.y = c;
            this.z = a;
            return this
        },
        setFromMatrixColumn: function(a, b) {
            return this.fromArray(a.elements, 4 * b)
        },
        setFromMatrix3Column: function(a, b) {
            return this.fromArray(a.elements, 3 * b)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            return this
        },
        random: function() {
            this.x = Math.random();
            this.y = Math.random();
            this.z = Math.random();
            return this
        }
    });
    var ld = new n
      , aa = new P
      , Jk = new n(0,0,0)
      , Kk = new n(1,1,1)
      , Pb = new n
      , zf = new n
      , Ca = new n;
    Object.assign(P.prototype, {
        isMatrix4: !0,
        set: function(a, b, c, d, e, f, g, h, k, m, l, p, n, r, q, t) {
            var z = this.elements;
            z[0] = a;
            z[4] = b;
            z[8] = c;
            z[12] = d;
            z[1] = e;
            z[5] = f;
            z[9] = g;
            z[13] = h;
            z[2] = k;
            z[6] = m;
            z[10] = l;
            z[14] = p;
            z[3] = n;
            z[7] = r;
            z[11] = q;
            z[15] = t;
            return this
        },
        identity: function() {
            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        clone: function() {
            return (new P).fromArray(this.elements)
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            b[9] = a[9];
            b[10] = a[10];
            b[11] = a[11];
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            b[15] = a[15];
            return this
        },
        copyPosition: function(a) {
            var b = this.elements;
            a = a.elements;
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            return this
        },
        extractBasis: function(a, b, c) {
            a.setFromMatrixColumn(this, 0);
            b.setFromMatrixColumn(this, 1);
            c.setFromMatrixColumn(this, 2);
            return this
        },
        makeBasis: function(a, b, c) {
            this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
            return this
        },
        extractRotation: function(a) {
            var b = this.elements
              , c = a.elements
              , d = 1 / ld.setFromMatrixColumn(a, 0).length()
              , e = 1 / ld.setFromMatrixColumn(a, 1).length();
            a = 1 / ld.setFromMatrixColumn(a, 2).length();
            b[0] = c[0] * d;
            b[1] = c[1] * d;
            b[2] = c[2] * d;
            b[3] = 0;
            b[4] = c[4] * e;
            b[5] = c[5] * e;
            b[6] = c[6] * e;
            b[7] = 0;
            b[8] = c[8] * a;
            b[9] = c[9] * a;
            b[10] = c[10] * a;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        makeRotationFromEuler: function(a) {
            a && a.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var b = this.elements
              , c = a.x
              , d = a.y
              , e = a.z
              , f = Math.cos(c);
            c = Math.sin(c);
            var g = Math.cos(d);
            d = Math.sin(d);
            var h = Math.cos(e);
            e = Math.sin(e);
            if ("XYZ" === a.order) {
                a = f * h;
                var k = f * e
                  , m = c * h
                  , l = c * e;
                b[0] = g * h;
                b[4] = -g * e;
                b[8] = d;
                b[1] = k + m * d;
                b[5] = a - l * d;
                b[9] = -c * g;
                b[2] = l - a * d;
                b[6] = m + k * d;
                b[10] = f * g
            } else
                "YXZ" === a.order ? (a = g * h,
                k = g * e,
                m = d * h,
                l = d * e,
                b[0] = a + l * c,
                b[4] = m * c - k,
                b[8] = f * d,
                b[1] = f * e,
                b[5] = f * h,
                b[9] = -c,
                b[2] = k * c - m,
                b[6] = l + a * c,
                b[10] = f * g) : "ZXY" === a.order ? (a = g * h,
                k = g * e,
                m = d * h,
                l = d * e,
                b[0] = a - l * c,
                b[4] = -f * e,
                b[8] = m + k * c,
                b[1] = k + m * c,
                b[5] = f * h,
                b[9] = l - a * c,
                b[2] = -f * d,
                b[6] = c,
                b[10] = f * g) : "ZYX" === a.order ? (a = f * h,
                k = f * e,
                m = c * h,
                l = c * e,
                b[0] = g * h,
                b[4] = m * d - k,
                b[8] = a * d + l,
                b[1] = g * e,
                b[5] = l * d + a,
                b[9] = k * d - m,
                b[2] = -d,
                b[6] = c * g,
                b[10] = f * g) : "YZX" === a.order ? (a = f * g,
                k = f * d,
                m = c * g,
                l = c * d,
                b[0] = g * h,
                b[4] = l - a * e,
                b[8] = m * e + k,
                b[1] = e,
                b[5] = f * h,
                b[9] = -c * h,
                b[2] = -d * h,
                b[6] = k * e + m,
                b[10] = a - l * e) : "XZY" === a.order && (a = f * g,
                k = f * d,
                m = c * g,
                l = c * d,
                b[0] = g * h,
                b[4] = -e,
                b[8] = d * h,
                b[1] = a * e + l,
                b[5] = f * h,
                b[9] = k * e - m,
                b[2] = m * e - k,
                b[6] = c * h,
                b[10] = l * e + a);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        makeRotationFromQuaternion: function(a) {
            return this.compose(Jk, a, Kk)
        },
        lookAt: function(a, b, c) {
            var d = this.elements;
            Ca.subVectors(a, b);
            0 === Ca.lengthSq() && (Ca.z = 1);
            Ca.normalize();
            Pb.crossVectors(c, Ca);
            0 === Pb.lengthSq() && (1 === Math.abs(c.z) ? Ca.x += 1E-4 : Ca.z += 1E-4,
            Ca.normalize(),
            Pb.crossVectors(c, Ca));
            Pb.normalize();
            zf.crossVectors(Ca, Pb);
            d[0] = Pb.x;
            d[4] = zf.x;
            d[8] = Ca.x;
            d[1] = Pb.y;
            d[5] = zf.y;
            d[9] = Ca.y;
            d[2] = Pb.z;
            d[6] = zf.z;
            d[10] = Ca.z;
            return this
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this)
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements
              , d = b.elements;
            b = this.elements;
            a = c[0];
            var e = c[4]
              , f = c[8]
              , g = c[12]
              , h = c[1]
              , k = c[5]
              , m = c[9]
              , l = c[13]
              , p = c[2]
              , n = c[6]
              , r = c[10]
              , q = c[14]
              , t = c[3]
              , v = c[7]
              , x = c[11];
            c = c[15];
            var w = d[0]
              , A = d[4]
              , B = d[8]
              , Z = d[12]
              , C = d[1]
              , y = d[5]
              , D = d[9]
              , E = d[13]
              , G = d[2]
              , I = d[6]
              , J = d[10]
              , L = d[14]
              , M = d[3]
              , N = d[7]
              , O = d[11];
            d = d[15];
            b[0] = a * w + e * C + f * G + g * M;
            b[4] = a * A + e * y + f * I + g * N;
            b[8] = a * B + e * D + f * J + g * O;
            b[12] = a * Z + e * E + f * L + g * d;
            b[1] = h * w + k * C + m * G + l * M;
            b[5] = h * A + k * y + m * I + l * N;
            b[9] = h * B + k * D + m * J + l * O;
            b[13] = h * Z + k * E + m * L + l * d;
            b[2] = p * w + n * C + r * G + q * M;
            b[6] = p * A + n * y + r * I + q * N;
            b[10] = p * B + n * D + r * J + q * O;
            b[14] = p * Z + n * E + r * L + q * d;
            b[3] = t * w + v * C + x * G + c * M;
            b[7] = t * A + v * y + x * I + c * N;
            b[11] = t * B + v * D + x * J + c * O;
            b[15] = t * Z + v * E + x * L + c * d;
            return this
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this
        },
        determinant: function() {
            var a = this.elements
              , b = a[0]
              , c = a[4]
              , d = a[8]
              , e = a[12]
              , f = a[1]
              , g = a[5]
              , h = a[9]
              , k = a[13]
              , m = a[2]
              , l = a[6]
              , p = a[10]
              , n = a[14];
            return a[3] * (+e * h * l - d * k * l - e * g * p + c * k * p + d * g * n - c * h * n) + a[7] * (+b * h * n - b * k * p + e * f * p - d * f * n + d * k * m - e * h * m) + a[11] * (+b * k * l - b * g * n - e * f * l + c * f * n + e * g * m - c * k * m) + a[15] * (-d * g * m - b * h * l + b * g * p + d * f * l - c * f * p + c * h * m)
        },
        transpose: function() {
            var a = this.elements;
            var b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        },
        setPosition: function(a, b, c) {
            var d = this.elements;
            a.isVector3 ? (d[12] = a.x,
            d[13] = a.y,
            d[14] = a.z) : (d[12] = a,
            d[13] = b,
            d[14] = c);
            return this
        },
        getInverse: function(a, b) {
            void 0 !== b && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
            b = this.elements;
            var c = a.elements;
            a = c[0];
            var d = c[1]
              , e = c[2]
              , f = c[3]
              , g = c[4]
              , h = c[5]
              , k = c[6]
              , m = c[7]
              , l = c[8]
              , p = c[9]
              , n = c[10]
              , r = c[11]
              , q = c[12]
              , t = c[13]
              , v = c[14];
            c = c[15];
            var x = p * v * m - t * n * m + t * k * r - h * v * r - p * k * c + h * n * c
              , w = q * n * m - l * v * m - q * k * r + g * v * r + l * k * c - g * n * c
              , A = l * t * m - q * p * m + q * h * r - g * t * r - l * h * c + g * p * c
              , B = q * p * k - l * t * k - q * h * n + g * t * n + l * h * v - g * p * v
              , y = a * x + d * w + e * A + f * B;
            if (0 === y)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            y = 1 / y;
            b[0] = x * y;
            b[1] = (t * n * f - p * v * f - t * e * r + d * v * r + p * e * c - d * n * c) * y;
            b[2] = (h * v * f - t * k * f + t * e * m - d * v * m - h * e * c + d * k * c) * y;
            b[3] = (p * k * f - h * n * f - p * e * m + d * n * m + h * e * r - d * k * r) * y;
            b[4] = w * y;
            b[5] = (l * v * f - q * n * f + q * e * r - a * v * r - l * e * c + a * n * c) * y;
            b[6] = (q * k * f - g * v * f - q * e * m + a * v * m + g * e * c - a * k * c) * y;
            b[7] = (g * n * f - l * k * f + l * e * m - a * n * m - g * e * r + a * k * r) * y;
            b[8] = A * y;
            b[9] = (q * p * f - l * t * f - q * d * r + a * t * r + l * d * c - a * p * c) * y;
            b[10] = (g * t * f - q * h * f + q * d * m - a * t * m - g * d * c + a * h * c) * y;
            b[11] = (l * h * f - g * p * f - l * d * m + a * p * m + g * d * r - a * h * r) * y;
            b[12] = B * y;
            b[13] = (l * t * e - q * p * e + q * d * n - a * t * n - l * d * v + a * p * v) * y;
            b[14] = (q * h * e - g * t * e - q * d * k + a * t * k + g * d * v - a * h * v) * y;
            b[15] = (g * p * e - l * h * e + l * d * k - a * p * k - g * d * n + a * h * n) * y;
            return this
        },
        scale: function(a) {
            var b = this.elements
              , c = a.x
              , d = a.y;
            a = a.z;
            b[0] *= c;
            b[4] *= d;
            b[8] *= a;
            b[1] *= c;
            b[5] *= d;
            b[9] *= a;
            b[2] *= c;
            b[6] *= d;
            b[10] *= a;
            b[3] *= c;
            b[7] *= d;
            b[11] *= a;
            return this
        },
        getMaxScaleOnAxis: function() {
            var a = this.elements;
            return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
        },
        makeTranslation: function(a, b, c) {
            this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
            return this
        },
        makeRotationX: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationY: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationZ: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationAxis: function(a, b) {
            var c = Math.cos(b);
            b = Math.sin(b);
            var d = 1 - c
              , e = a.x
              , f = a.y;
            a = a.z;
            var g = d * e
              , h = d * f;
            this.set(g * e + c, g * f - b * a, g * a + b * f, 0, g * f + b * a, h * f + c, h * a - b * e, 0, g * a - b * f, h * a + b * e, d * a * a + c, 0, 0, 0, 0, 1);
            return this
        },
        makeScale: function(a, b, c) {
            this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
            return this
        },
        makeShear: function(a, b, c) {
            this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
            return this
        },
        compose: function(a, b, c) {
            var d = this.elements
              , e = b._x
              , f = b._y
              , g = b._z
              , h = b._w
              , k = e + e
              , m = f + f
              , l = g + g;
            b = e * k;
            var p = e * m;
            e *= l;
            var n = f * m;
            f *= l;
            g *= l;
            k *= h;
            m *= h;
            h *= l;
            l = c.x;
            var r = c.y;
            c = c.z;
            d[0] = (1 - (n + g)) * l;
            d[1] = (p + h) * l;
            d[2] = (e - m) * l;
            d[3] = 0;
            d[4] = (p - h) * r;
            d[5] = (1 - (b + g)) * r;
            d[6] = (f + k) * r;
            d[7] = 0;
            d[8] = (e + m) * c;
            d[9] = (f - k) * c;
            d[10] = (1 - (b + n)) * c;
            d[11] = 0;
            d[12] = a.x;
            d[13] = a.y;
            d[14] = a.z;
            d[15] = 1;
            return this
        },
        decompose: function(a, b, c) {
            var d = this.elements
              , e = ld.set(d[0], d[1], d[2]).length()
              , f = ld.set(d[4], d[5], d[6]).length()
              , g = ld.set(d[8], d[9], d[10]).length();
            0 > this.determinant() && (e = -e);
            a.x = d[12];
            a.y = d[13];
            a.z = d[14];
            aa.copy(this);
            a = 1 / e;
            d = 1 / f;
            var h = 1 / g;
            aa.elements[0] *= a;
            aa.elements[1] *= a;
            aa.elements[2] *= a;
            aa.elements[4] *= d;
            aa.elements[5] *= d;
            aa.elements[6] *= d;
            aa.elements[8] *= h;
            aa.elements[9] *= h;
            aa.elements[10] *= h;
            b.setFromRotationMatrix(aa);
            c.x = e;
            c.y = f;
            c.z = g;
            return this
        },
        makePerspective: function(a, b, c, d, e, f) {
            void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var g = this.elements;
            g[0] = 2 * e / (b - a);
            g[4] = 0;
            g[8] = (b + a) / (b - a);
            g[12] = 0;
            g[1] = 0;
            g[5] = 2 * e / (c - d);
            g[9] = (c + d) / (c - d);
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = -(f + e) / (f - e);
            g[14] = -2 * f * e / (f - e);
            g[3] = 0;
            g[7] = 0;
            g[11] = -1;
            g[15] = 0;
            return this
        },
        makeOrthographic: function(a, b, c, d, e, f) {
            var g = this.elements
              , h = 1 / (b - a)
              , k = 1 / (c - d)
              , m = 1 / (f - e);
            g[0] = 2 * h;
            g[4] = 0;
            g[8] = 0;
            g[12] = -((b + a) * h);
            g[1] = 0;
            g[5] = 2 * k;
            g[9] = 0;
            g[13] = -((c + d) * k);
            g[2] = 0;
            g[6] = 0;
            g[10] = -2 * m;
            g[14] = -((f + e) * m);
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for (var c = 0; 16 > c; c++)
                if (b[c] !== a[c])
                    return !1;
            return !0
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 16 > c; c++)
                this.elements[c] = a[c + b];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            a[b + 9] = c[9];
            a[b + 10] = c[10];
            a[b + 11] = c[11];
            a[b + 12] = c[12];
            a[b + 13] = c[13];
            a[b + 14] = c[14];
            a[b + 15] = c[15];
            return a
        }
    });
    var xi = new P
      , yi = new la;
    Ub.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    Ub.DefaultOrder = "XYZ";
    Object.defineProperties(Ub.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this._onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this._onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(a) {
                this._z = a;
                this._onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(a) {
                this._order = a;
                this._onChangeCallback()
            }
        }
    });
    Object.assign(Ub.prototype, {
        isEuler: !0,
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._order = d || this._order;
            this._onChangeCallback();
            return this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._order = a._order;
            this._onChangeCallback();
            return this
        },
        setFromRotationMatrix: function(a, b, c) {
            var d = M.clamp
              , e = a.elements;
            a = e[0];
            var f = e[4]
              , g = e[8]
              , h = e[1]
              , k = e[5]
              , m = e[9]
              , l = e[2]
              , p = e[6];
            e = e[10];
            b = b || this._order;
            switch (b) {
            case "XYZ":
                this._y = Math.asin(d(g, -1, 1));
                .9999999 > Math.abs(g) ? (this._x = Math.atan2(-m, e),
                this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(p, k),
                this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-d(m, -1, 1));
                .9999999 > Math.abs(m) ? (this._y = Math.atan2(g, e),
                this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-l, a),
                this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(d(p, -1, 1));
                .9999999 > Math.abs(p) ? (this._y = Math.atan2(-l, e),
                this._z = Math.atan2(-f, k)) : (this._y = 0,
                this._z = Math.atan2(h, a));
                break;
            case "ZYX":
                this._y = Math.asin(-d(l, -1, 1));
                .9999999 > Math.abs(l) ? (this._x = Math.atan2(p, e),
                this._z = Math.atan2(h, a)) : (this._x = 0,
                this._z = Math.atan2(-f, k));
                break;
            case "YZX":
                this._z = Math.asin(d(h, -1, 1));
                .9999999 > Math.abs(h) ? (this._x = Math.atan2(-m, k),
                this._y = Math.atan2(-l, a)) : (this._x = 0,
                this._y = Math.atan2(g, e));
                break;
            case "XZY":
                this._z = Math.asin(-d(f, -1, 1));
                .9999999 > Math.abs(f) ? (this._x = Math.atan2(p, k),
                this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e),
                this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + b)
            }
            this._order = b;
            !1 !== c && this._onChangeCallback();
            return this
        },
        setFromQuaternion: function(a, b, c) {
            xi.makeRotationFromQuaternion(a);
            return this.setFromRotationMatrix(xi, b, c)
        },
        setFromVector3: function(a, b) {
            return this.set(a.x, a.y, a.z, b || this._order)
        },
        reorder: function(a) {
            yi.setFromEuler(this);
            return this.setFromQuaternion(yi, a)
        },
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
        },
        fromArray: function(a) {
            this._x = a[0];
            this._y = a[1];
            this._z = a[2];
            void 0 !== a[3] && (this._order = a[3]);
            this._onChangeCallback();
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._order;
            return a
        },
        toVector3: function(a) {
            return a ? a.set(this._x, this._y, this._z) : new n(this._x,this._y,this._z)
        },
        _onChange: function(a) {
            this._onChangeCallback = a;
            return this
        },
        _onChangeCallback: function() {}
    });
    Object.assign(Ce.prototype, {
        set: function(a) {
            this.mask = 1 << a | 0
        },
        enable: function(a) {
            this.mask = this.mask | 1 << a | 0
        },
        enableAll: function() {
            this.mask = -1
        },
        toggle: function(a) {
            this.mask ^= 1 << a | 0
        },
        disable: function(a) {
            this.mask &= ~(1 << a | 0)
        },
        disableAll: function() {
            this.mask = 0
        },
        test: function(a) {
            return 0 !== (this.mask & a.mask)
        }
    });
    var ij = 0
      , zi = new n
      , md = new la
      , xb = new P
      , Af = new n
      , se = new n
      , Lk = new n
      , Mk = new la
      , Ai = new n(1,0,0)
      , Bi = new n(0,1,0)
      , Ci = new n(0,0,1)
      , Nk = {
        type: "added"
    }
      , Ok = {
        type: "removed"
    };
    E.DefaultUp = new n(0,1,0);
    E.DefaultMatrixAutoUpdate = !0;
    E.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: E,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix4: function(a) {
            this.matrixAutoUpdate && this.updateMatrix();
            this.matrix.premultiply(a);
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(a) {
            this.quaternion.premultiply(a);
            return this
        },
        setRotationFromAxisAngle: function(a, b) {
            this.quaternion.setFromAxisAngle(a, b)
        },
        setRotationFromEuler: function(a) {
            this.quaternion.setFromEuler(a, !0)
        },
        setRotationFromMatrix: function(a) {
            this.quaternion.setFromRotationMatrix(a)
        },
        setRotationFromQuaternion: function(a) {
            this.quaternion.copy(a)
        },
        rotateOnAxis: function(a, b) {
            md.setFromAxisAngle(a, b);
            this.quaternion.multiply(md);
            return this
        },
        rotateOnWorldAxis: function(a, b) {
            md.setFromAxisAngle(a, b);
            this.quaternion.premultiply(md);
            return this
        },
        rotateX: function(a) {
            return this.rotateOnAxis(Ai, a)
        },
        rotateY: function(a) {
            return this.rotateOnAxis(Bi, a)
        },
        rotateZ: function(a) {
            return this.rotateOnAxis(Ci, a)
        },
        translateOnAxis: function(a, b) {
            zi.copy(a).applyQuaternion(this.quaternion);
            this.position.add(zi.multiplyScalar(b));
            return this
        },
        translateX: function(a) {
            return this.translateOnAxis(Ai, a)
        },
        translateY: function(a) {
            return this.translateOnAxis(Bi, a)
        },
        translateZ: function(a) {
            return this.translateOnAxis(Ci, a)
        },
        localToWorld: function(a) {
            return a.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function(a) {
            return a.applyMatrix4(xb.getInverse(this.matrixWorld))
        },
        lookAt: function(a, b, c) {
            a.isVector3 ? Af.copy(a) : Af.set(a, b, c);
            a = this.parent;
            this.updateWorldMatrix(!0, !1);
            se.setFromMatrixPosition(this.matrixWorld);
            this.isCamera || this.isLight ? xb.lookAt(se, Af, this.up) : xb.lookAt(Af, se, this.up);
            this.quaternion.setFromRotationMatrix(xb);
            a && (xb.extractRotation(a.matrixWorld),
            md.setFromRotationMatrix(xb),
            this.quaternion.premultiply(md.inverse()))
        },
        add: function(a) {
            if (1 < arguments.length) {
                for (var b = 0; b < arguments.length; b++)
                    this.add(arguments[b]);
                return this
            }
            if (a === this)
                return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a),
                this;
            a && a.isObject3D ? (null !== a.parent && a.parent.remove(a),
            a.parent = this,
            this.children.push(a),
            a.dispatchEvent(Nk)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
            return this
        },
        remove: function(a) {
            if (1 < arguments.length) {
                for (var b = 0; b < arguments.length; b++)
                    this.remove(arguments[b]);
                return this
            }
            b = this.children.indexOf(a);
            -1 !== b && (a.parent = null,
            this.children.splice(b, 1),
            a.dispatchEvent(Ok));
            return this
        },
        attach: function(a) {
            this.updateWorldMatrix(!0, !1);
            xb.getInverse(this.matrixWorld);
            null !== a.parent && (a.parent.updateWorldMatrix(!0, !1),
            xb.multiply(a.parent.matrixWorld));
            a.applyMatrix4(xb);
            a.updateWorldMatrix(!1, !1);
            this.add(a);
            return this
        },
        getObjectById: function(a) {
            return this.getObjectByProperty("id", a)
        },
        getObjectByName: function(a) {
            return this.getObjectByProperty("name", a)
        },
        getObjectByProperty: function(a, b) {
            if (this[a] === b)
                return this;
            for (var c = 0, d = this.children.length; c < d; c++) {
                var e = this.children[c].getObjectByProperty(a, b);
                if (void 0 !== e)
                    return e
            }
        },
        getWorldPosition: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
            a = new n);
            this.updateMatrixWorld(!0);
            return a.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
            a = new la);
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(se, a, Lk);
            return a
        },
        getWorldScale: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
            a = new n);
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(se, Mk, a);
            return a
        },
        getWorldDirection: function(a) {
            void 0 === a && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
            a = new n);
            this.updateMatrixWorld(!0);
            var b = this.matrixWorld.elements;
            return a.set(b[8], b[9], b[10]).normalize()
        },
        raycast: function() {},
        traverse: function(a) {
            a(this);
            for (var b = this.children, c = 0, d = b.length; c < d; c++)
                b[c].traverse(a)
        },
        traverseVisible: function(a) {
            if (!1 !== this.visible) {
                a(this);
                for (var b = this.children, c = 0, d = b.length; c < d; c++)
                    b[c].traverseVisible(a)
            }
        },
        traverseAncestors: function(a) {
            var b = this.parent;
            null !== b && (a(b),
            b.traverseAncestors(a))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale);
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(a) {
            this.matrixAutoUpdate && this.updateMatrix();
            if (this.matrixWorldNeedsUpdate || a)
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                this.matrixWorldNeedsUpdate = !1,
                a = !0;
            for (var b = this.children, c = 0, d = b.length; c < d; c++)
                b[c].updateMatrixWorld(a)
        },
        updateWorldMatrix: function(a, b) {
            var c = this.parent;
            !0 === a && null !== c && c.updateWorldMatrix(!0, !1);
            this.matrixAutoUpdate && this.updateMatrix();
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
            if (!0 === b)
                for (a = this.children,
                b = 0,
                c = a.length; b < c; b++)
                    a[b].updateWorldMatrix(!1, !0)
        },
        toJSON: function(a) {
            function b(b, c) {
                void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a));
                return c.uuid
            }
            function c(a) {
                var b = [], c;
                for (c in a) {
                    var d = a[c];
                    delete d.metadata;
                    b.push(d)
                }
                return b
            }
            var d = void 0 === a || "string" === typeof a
              , e = {};
            d && (a = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            },
            e.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var f = {};
            f.uuid = this.uuid;
            f.type = this.type;
            "" !== this.name && (f.name = this.name);
            !0 === this.castShadow && (f.castShadow = !0);
            !0 === this.receiveShadow && (f.receiveShadow = !0);
            !1 === this.visible && (f.visible = !1);
            !1 === this.frustumCulled && (f.frustumCulled = !1);
            0 !== this.renderOrder && (f.renderOrder = this.renderOrder);
            "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
            f.layers = this.layers.mask;
            f.matrix = this.matrix.toArray();
            !1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1);
            this.isInstancedMesh && (f.type = "InstancedMesh",
            f.count = this.count,
            f.instanceMatrix = this.instanceMatrix.toJSON());
            if (this.isMesh || this.isLine || this.isPoints) {
                f.geometry = b(a.geometries, this.geometry);
                var g = this.geometry.parameters;
                if (void 0 !== g && void 0 !== g.shapes)
                    if (g = g.shapes,
                    Array.isArray(g))
                        for (var h = 0, k = g.length; h < k; h++)
                            b(a.shapes, g[h]);
                    else
                        b(a.shapes, g)
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    g = [];
                    h = 0;
                    for (k = this.material.length; h < k; h++)
                        g.push(b(a.materials, this.material[h]));
                    f.material = g
                } else
                    f.material = b(a.materials, this.material);
            if (0 < this.children.length)
                for (f.children = [],
                h = 0; h < this.children.length; h++)
                    f.children.push(this.children[h].toJSON(a).object);
            if (d) {
                d = c(a.geometries);
                h = c(a.materials);
                k = c(a.textures);
                var m = c(a.images);
                g = c(a.shapes);
                0 < d.length && (e.geometries = d);
                0 < h.length && (e.materials = h);
                0 < k.length && (e.textures = k);
                0 < m.length && (e.images = m);
                0 < g.length && (e.shapes = g)
            }
            e.object = f;
            return e
        },
        clone: function(a) {
            return (new this.constructor).copy(this, a)
        },
        copy: function(a, b) {
            void 0 === b && (b = !0);
            this.name = a.name;
            this.up.copy(a.up);
            this.position.copy(a.position);
            this.quaternion.copy(a.quaternion);
            this.scale.copy(a.scale);
            this.matrix.copy(a.matrix);
            this.matrixWorld.copy(a.matrixWorld);
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
            this.layers.mask = a.layers.mask;
            this.visible = a.visible;
            this.castShadow = a.castShadow;
            this.receiveShadow = a.receiveShadow;
            this.frustumCulled = a.frustumCulled;
            this.renderOrder = a.renderOrder;
            this.userData = JSON.parse(JSON.stringify(a.userData));
            if (!0 === b)
                for (b = 0; b < a.children.length; b++)
                    this.add(a.children[b].clone());
            return this
        }
    });
    ob.prototype = Object.assign(Object.create(E.prototype), {
        constructor: ob,
        isScene: !0,
        copy: function(a, b) {
            E.prototype.copy.call(this, a, b);
            null !== a.background && (this.background = a.background.clone());
            null !== a.environment && (this.environment = a.environment.clone());
            null !== a.fog && (this.fog = a.fog.clone());
            null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
            this.autoUpdate = a.autoUpdate;
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            return this
        },
        toJSON: function(a) {
            var b = E.prototype.toJSON.call(this, a);
            null !== this.background && (b.object.background = this.background.toJSON(a));
            null !== this.environment && (b.object.environment = this.environment.toJSON(a));
            null !== this.fog && (b.object.fog = this.fog.toJSON());
            return b
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var yb = [new n, new n, new n, new n, new n, new n, new n, new n]
      , te = new n
      , Xg = new Sa
      , nd = new n
      , od = new n
      , pd = new n
      , Qb = new n
      , Rb = new n
      , pc = new n
      , ue = new n
      , Bf = new n
      , Cf = new n
      , Vb = new n;
    Object.assign(Sa.prototype, {
        isBox3: !0,
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        setFromArray: function(a) {
            for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.length; h < k; h += 3) {
                var m = a[h]
                  , l = a[h + 1]
                  , p = a[h + 2];
                m < b && (b = m);
                l < c && (c = l);
                p < d && (d = p);
                m > e && (e = m);
                l > f && (f = l);
                p > g && (g = p)
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this
        },
        setFromBufferAttribute: function(a) {
            for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.count; h < k; h++) {
                var m = a.getX(h)
                  , l = a.getY(h)
                  , p = a.getZ(h);
                m < b && (b = m);
                l < c && (c = l);
                p < d && (d = p);
                m > e && (e = m);
                l > f && (f = l);
                p > g && (g = p)
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for (var b = 0, c = a.length; b < c; b++)
                this.expandByPoint(a[b]);
            return this
        },
        setFromCenterAndSize: function(a, b) {
            b = te.copy(b).multiplyScalar(.5);
            this.min.copy(a).sub(b);
            this.max.copy(a).add(b);
            return this
        },
        setFromObject: function(a) {
            this.makeEmpty();
            return this.expandByObject(a)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function() {
            this.min.x = this.min.y = this.min.z = Infinity;
            this.max.x = this.max.y = this.max.z = -Infinity;
            return this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(a) {
            void 0 === a && (console.warn("THREE.Box3: .getCenter() target is now required"),
            a = new n);
            return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(a) {
            void 0 === a && (console.warn("THREE.Box3: .getSize() target is now required"),
            a = new n);
            return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min)
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        expandByObject: function(a) {
            a.updateWorldMatrix(!1, !1);
            var b = a.geometry;
            void 0 !== b && (null === b.boundingBox && b.computeBoundingBox(),
            Xg.copy(b.boundingBox),
            Xg.applyMatrix4(a.matrixWorld),
            this.union(Xg));
            a = a.children;
            b = 0;
            for (var c = a.length; b < c; b++)
                this.expandByObject(a[b]);
            return this
        },
        containsPoint: function(a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z
        },
        getParameter: function(a, b) {
            void 0 === b && (console.warn("THREE.Box3: .getParameter() target is now required"),
            b = new n);
            return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
        },
        intersectsSphere: function(a) {
            this.clampPoint(a.center, te);
            return te.distanceToSquared(a.center) <= a.radius * a.radius
        },
        intersectsPlane: function(a) {
            if (0 < a.normal.x) {
                var b = a.normal.x * this.min.x;
                var c = a.normal.x * this.max.x
            } else
                b = a.normal.x * this.max.x,
                c = a.normal.x * this.min.x;
            0 < a.normal.y ? (b += a.normal.y * this.min.y,
            c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y,
            c += a.normal.y * this.min.y);
            0 < a.normal.z ? (b += a.normal.z * this.min.z,
            c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z,
            c += a.normal.z * this.min.z);
            return b <= -a.constant && c >= -a.constant
        },
        intersectsTriangle: function(a) {
            if (this.isEmpty())
                return !1;
            this.getCenter(ue);
            Bf.subVectors(this.max, ue);
            nd.subVectors(a.a, ue);
            od.subVectors(a.b, ue);
            pd.subVectors(a.c, ue);
            Qb.subVectors(od, nd);
            Rb.subVectors(pd, od);
            pc.subVectors(nd, pd);
            a = [0, -Qb.z, Qb.y, 0, -Rb.z, Rb.y, 0, -pc.z, pc.y, Qb.z, 0, -Qb.x, Rb.z, 0, -Rb.x, pc.z, 0, -pc.x, -Qb.y, Qb.x, 0, -Rb.y, Rb.x, 0, -pc.y, pc.x, 0];
            if (!Yf(a, nd, od, pd, Bf))
                return !1;
            a = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            if (!Yf(a, nd, od, pd, Bf))
                return !1;
            Cf.crossVectors(Qb, Rb);
            a = [Cf.x, Cf.y, Cf.z];
            return Yf(a, nd, od, pd, Bf)
        },
        clampPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Box3: .clampPoint() target is now required"),
            b = new n);
            return b.copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function(a) {
            return te.copy(a).clamp(this.min, this.max).sub(a).length()
        },
        getBoundingSphere: function(a) {
            void 0 === a && console.error("THREE.Box3: .getBoundingSphere() target is now required");
            this.getCenter(a.center);
            a.radius = .5 * this.getSize(te).length();
            return a
        },
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            this.isEmpty() && this.makeEmpty();
            return this
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        applyMatrix4: function(a) {
            if (this.isEmpty())
                return this;
            yb[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(a);
            yb[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(a);
            yb[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(a);
            yb[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(a);
            yb[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(a);
            yb[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(a);
            yb[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(a);
            yb[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(a);
            this.setFromPoints(yb);
            return this
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        }
    });
    var Pk = new Sa;
    Object.assign(cb.prototype, {
        set: function(a, b) {
            this.center.copy(a);
            this.radius = b;
            return this
        },
        setFromPoints: function(a, b) {
            var c = this.center;
            void 0 !== b ? c.copy(b) : Pk.setFromPoints(a).getCenter(c);
            for (var d = b = 0, e = a.length; d < e; d++)
                b = Math.max(b, c.distanceToSquared(a[d]));
            this.radius = Math.sqrt(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.center.copy(a.center);
            this.radius = a.radius;
            return this
        },
        isEmpty: function() {
            return 0 > this.radius
        },
        makeEmpty: function() {
            this.center.set(0, 0, 0);
            this.radius = -1;
            return this
        },
        containsPoint: function(a) {
            return a.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(a) {
            return a.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(a) {
            var b = this.radius + a.radius;
            return a.center.distanceToSquared(this.center) <= b * b
        },
        intersectsBox: function(a) {
            return a.intersectsSphere(this)
        },
        intersectsPlane: function(a) {
            return Math.abs(a.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(a, b) {
            var c = this.center.distanceToSquared(a);
            void 0 === b && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
            b = new n);
            b.copy(a);
            c > this.radius * this.radius && (b.sub(this.center).normalize(),
            b.multiplyScalar(this.radius).add(this.center));
            return b
        },
        getBoundingBox: function(a) {
            void 0 === a && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
            a = new Sa);
            if (this.isEmpty())
                return a.makeEmpty(),
                a;
            a.set(this.center, this.center);
            a.expandByScalar(this.radius);
            return a
        },
        applyMatrix4: function(a) {
            this.center.applyMatrix4(a);
            this.radius *= a.getMaxScaleOnAxis();
            return this
        },
        translate: function(a) {
            this.center.add(a);
            return this
        },
        equals: function(a) {
            return a.center.equals(this.center) && a.radius === this.radius
        }
    });
    var zb = new n
      , Yg = new n
      , Df = new n
      , Sb = new n
      , Zg = new n
      , Ef = new n
      , $g = new n;
    Object.assign(Wb.prototype, {
        set: function(a, b) {
            this.origin.copy(a);
            this.direction.copy(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.origin.copy(a.origin);
            this.direction.copy(a.direction);
            return this
        },
        at: function(a, b) {
            void 0 === b && (console.warn("THREE.Ray: .at() target is now required"),
            b = new n);
            return b.copy(this.direction).multiplyScalar(a).add(this.origin)
        },
        lookAt: function(a) {
            this.direction.copy(a).sub(this.origin).normalize();
            return this
        },
        recast: function(a) {
            this.origin.copy(this.at(a, zb));
            return this
        },
        closestPointToPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
            b = new n);
            b.subVectors(a, this.origin);
            a = b.dot(this.direction);
            return 0 > a ? b.copy(this.origin) : b.copy(this.direction).multiplyScalar(a).add(this.origin)
        },
        distanceToPoint: function(a) {
            return Math.sqrt(this.distanceSqToPoint(a))
        },
        distanceSqToPoint: function(a) {
            var b = zb.subVectors(a, this.origin).dot(this.direction);
            if (0 > b)
                return this.origin.distanceToSquared(a);
            zb.copy(this.direction).multiplyScalar(b).add(this.origin);
            return zb.distanceToSquared(a)
        },
        distanceSqToSegment: function(a, b, c, d) {
            Yg.copy(a).add(b).multiplyScalar(.5);
            Df.copy(b).sub(a).normalize();
            Sb.copy(this.origin).sub(Yg);
            var e = .5 * a.distanceTo(b)
              , f = -this.direction.dot(Df)
              , g = Sb.dot(this.direction)
              , h = -Sb.dot(Df)
              , k = Sb.lengthSq()
              , m = Math.abs(1 - f * f);
            if (0 < m) {
                a = f * h - g;
                b = f * g - h;
                var l = e * m;
                0 <= a ? b >= -l ? b <= l ? (e = 1 / m,
                a *= e,
                b *= e,
                f = a * (a + f * b + 2 * g) + b * (f * a + b + 2 * h) + k) : (b = e,
                a = Math.max(0, -(f * b + g)),
                f = -a * a + b * (b + 2 * h) + k) : (b = -e,
                a = Math.max(0, -(f * b + g)),
                f = -a * a + b * (b + 2 * h) + k) : b <= -l ? (a = Math.max(0, -(-f * e + g)),
                b = 0 < a ? -e : Math.min(Math.max(-e, -h), e),
                f = -a * a + b * (b + 2 * h) + k) : b <= l ? (a = 0,
                b = Math.min(Math.max(-e, -h), e),
                f = b * (b + 2 * h) + k) : (a = Math.max(0, -(f * e + g)),
                b = 0 < a ? e : Math.min(Math.max(-e, -h), e),
                f = -a * a + b * (b + 2 * h) + k)
            } else
                b = 0 < f ? -e : e,
                a = Math.max(0, -(f * b + g)),
                f = -a * a + b * (b + 2 * h) + k;
            c && c.copy(this.direction).multiplyScalar(a).add(this.origin);
            d && d.copy(Df).multiplyScalar(b).add(Yg);
            return f
        },
        intersectSphere: function(a, b) {
            zb.subVectors(a.center, this.origin);
            var c = zb.dot(this.direction)
              , d = zb.dot(zb) - c * c;
            a = a.radius * a.radius;
            if (d > a)
                return null;
            a = Math.sqrt(a - d);
            d = c - a;
            c += a;
            return 0 > d && 0 > c ? null : 0 > d ? this.at(c, b) : this.at(d, b)
        },
        intersectsSphere: function(a) {
            return this.distanceSqToPoint(a.center) <= a.radius * a.radius
        },
        distanceToPlane: function(a) {
            var b = a.normal.dot(this.direction);
            if (0 === b)
                return 0 === a.distanceToPoint(this.origin) ? 0 : null;
            a = -(this.origin.dot(a.normal) + a.constant) / b;
            return 0 <= a ? a : null
        },
        intersectPlane: function(a, b) {
            a = this.distanceToPlane(a);
            return null === a ? null : this.at(a, b)
        },
        intersectsPlane: function(a) {
            var b = a.distanceToPoint(this.origin);
            return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
        },
        intersectBox: function(a, b) {
            var c = 1 / this.direction.x;
            var d = 1 / this.direction.y;
            var e = 1 / this.direction.z
              , f = this.origin;
            if (0 <= c) {
                var g = (a.min.x - f.x) * c;
                c *= a.max.x - f.x
            } else
                g = (a.max.x - f.x) * c,
                c *= a.min.x - f.x;
            if (0 <= d) {
                var h = (a.min.y - f.y) * d;
                d *= a.max.y - f.y
            } else
                h = (a.max.y - f.y) * d,
                d *= a.min.y - f.y;
            if (g > d || h > c)
                return null;
            if (h > g || g !== g)
                g = h;
            if (d < c || c !== c)
                c = d;
            0 <= e ? (h = (a.min.z - f.z) * e,
            a = (a.max.z - f.z) * e) : (h = (a.max.z - f.z) * e,
            a = (a.min.z - f.z) * e);
            if (g > a || h > c)
                return null;
            if (h > g || g !== g)
                g = h;
            if (a < c || c !== c)
                c = a;
            return 0 > c ? null : this.at(0 <= g ? g : c, b)
        },
        intersectsBox: function(a) {
            return null !== this.intersectBox(a, zb)
        },
        intersectTriangle: function(a, b, c, d, e) {
            Zg.subVectors(b, a);
            Ef.subVectors(c, a);
            $g.crossVectors(Zg, Ef);
            b = this.direction.dot($g);
            if (0 < b) {
                if (d)
                    return null;
                d = 1
            } else if (0 > b)
                d = -1,
                b = -b;
            else
                return null;
            Sb.subVectors(this.origin, a);
            a = d * this.direction.dot(Ef.crossVectors(Sb, Ef));
            if (0 > a)
                return null;
            c = d * this.direction.dot(Zg.cross(Sb));
            if (0 > c || a + c > b)
                return null;
            a = -d * Sb.dot($g);
            return 0 > a ? null : this.at(a / b, e)
        },
        applyMatrix4: function(a) {
            this.origin.applyMatrix4(a);
            this.direction.transformDirection(a);
            return this
        },
        equals: function(a) {
            return a.origin.equals(this.origin) && a.direction.equals(this.direction)
        }
    });
    var ah = new n
      , Qk = new n
      , Rk = new xa;
    Object.assign(Ta.prototype, {
        isPlane: !0,
        set: function(a, b) {
            this.normal.copy(a);
            this.constant = b;
            return this
        },
        setComponents: function(a, b, c, d) {
            this.normal.set(a, b, c);
            this.constant = d;
            return this
        },
        setFromNormalAndCoplanarPoint: function(a, b) {
            this.normal.copy(a);
            this.constant = -b.dot(this.normal);
            return this
        },
        setFromCoplanarPoints: function(a, b, c) {
            b = ah.subVectors(c, b).cross(Qk.subVectors(a, b)).normalize();
            this.setFromNormalAndCoplanarPoint(b, a);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.normal.copy(a.normal);
            this.constant = a.constant;
            return this
        },
        normalize: function() {
            var a = 1 / this.normal.length();
            this.normal.multiplyScalar(a);
            this.constant *= a;
            return this
        },
        negate: function() {
            this.constant *= -1;
            this.normal.negate();
            return this
        },
        distanceToPoint: function(a) {
            return this.normal.dot(a) + this.constant
        },
        distanceToSphere: function(a) {
            return this.distanceToPoint(a.center) - a.radius
        },
        projectPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Plane: .projectPoint() target is now required"),
            b = new n);
            return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)
        },
        intersectLine: function(a, b) {
            void 0 === b && (console.warn("THREE.Plane: .intersectLine() target is now required"),
            b = new n);
            var c = a.delta(ah)
              , d = this.normal.dot(c);
            if (0 === d) {
                if (0 === this.distanceToPoint(a.start))
                    return b.copy(a.start)
            } else if (d = -(a.start.dot(this.normal) + this.constant) / d,
            !(0 > d || 1 < d))
                return b.copy(c).multiplyScalar(d).add(a.start)
        },
        intersectsLine: function(a) {
            var b = this.distanceToPoint(a.start);
            a = this.distanceToPoint(a.end);
            return 0 > b && 0 < a || 0 > a && 0 < b
        },
        intersectsBox: function(a) {
            return a.intersectsPlane(this)
        },
        intersectsSphere: function(a) {
            return a.intersectsPlane(this)
        },
        coplanarPoint: function(a) {
            void 0 === a && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
            a = new n);
            return a.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function(a, b) {
            b = b || Rk.getNormalMatrix(a);
            a = this.coplanarPoint(ah).applyMatrix4(a);
            b = this.normal.applyMatrix3(b).normalize();
            this.constant = -a.dot(b);
            return this
        },
        translate: function(a) {
            this.constant -= a.dot(this.normal);
            return this
        },
        equals: function(a) {
            return a.normal.equals(this.normal) && a.constant === this.constant
        }
    });
    var ab = new n
      , Ab = new n
      , bh = new n
      , Bb = new n
      , qd = new n
      , rd = new n
      , Di = new n
      , ch = new n
      , dh = new n
      , eh = new n;
    Object.assign(wa, {
        getNormal: function(a, b, c, d) {
            void 0 === d && (console.warn("THREE.Triangle: .getNormal() target is now required"),
            d = new n);
            d.subVectors(c, b);
            ab.subVectors(a, b);
            d.cross(ab);
            a = d.lengthSq();
            return 0 < a ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0)
        },
        getBarycoord: function(a, b, c, d, e) {
            ab.subVectors(d, b);
            Ab.subVectors(c, b);
            bh.subVectors(a, b);
            a = ab.dot(ab);
            b = ab.dot(Ab);
            c = ab.dot(bh);
            var f = Ab.dot(Ab);
            d = Ab.dot(bh);
            var g = a * f - b * b;
            void 0 === e && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
            e = new n);
            if (0 === g)
                return e.set(-2, -1, -1);
            g = 1 / g;
            f = (f * c - b * d) * g;
            a = (a * d - b * c) * g;
            return e.set(1 - f - a, a, f)
        },
        containsPoint: function(a, b, c, d) {
            wa.getBarycoord(a, b, c, d, Bb);
            return 0 <= Bb.x && 0 <= Bb.y && 1 >= Bb.x + Bb.y
        },
        getUV: function(a, b, c, d, e, f, g, h) {
            this.getBarycoord(a, b, c, d, Bb);
            h.set(0, 0);
            h.addScaledVector(e, Bb.x);
            h.addScaledVector(f, Bb.y);
            h.addScaledVector(g, Bb.z);
            return h
        },
        isFrontFacing: function(a, b, c, d) {
            ab.subVectors(c, b);
            Ab.subVectors(a, b);
            return 0 > ab.cross(Ab).dot(d) ? !0 : !1
        }
    });
    Object.assign(wa.prototype, {
        set: function(a, b, c) {
            this.a.copy(a);
            this.b.copy(b);
            this.c.copy(c);
            return this
        },
        setFromPointsAndIndices: function(a, b, c, d) {
            this.a.copy(a[b]);
            this.b.copy(a[c]);
            this.c.copy(a[d]);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.a.copy(a.a);
            this.b.copy(a.b);
            this.c.copy(a.c);
            return this
        },
        getArea: function() {
            ab.subVectors(this.c, this.b);
            Ab.subVectors(this.a, this.b);
            return .5 * ab.cross(Ab).length()
        },
        getMidpoint: function(a) {
            void 0 === a && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
            a = new n);
            return a.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function(a) {
            return wa.getNormal(this.a, this.b, this.c, a)
        },
        getPlane: function(a) {
            void 0 === a && (console.warn("THREE.Triangle: .getPlane() target is now required"),
            a = new Ta);
            return a.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function(a, b) {
            return wa.getBarycoord(a, this.a, this.b, this.c, b)
        },
        getUV: function(a, b, c, d, e) {
            return wa.getUV(a, this.a, this.b, this.c, b, c, d, e)
        },
        containsPoint: function(a) {
            return wa.containsPoint(a, this.a, this.b, this.c)
        },
        isFrontFacing: function(a) {
            return wa.isFrontFacing(this.a, this.b, this.c, a)
        },
        intersectsBox: function(a) {
            return a.intersectsTriangle(this)
        },
        closestPointToPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
            b = new n);
            var c = this.a
              , d = this.b
              , e = this.c;
            qd.subVectors(d, c);
            rd.subVectors(e, c);
            ch.subVectors(a, c);
            var f = qd.dot(ch)
              , g = rd.dot(ch);
            if (0 >= f && 0 >= g)
                return b.copy(c);
            dh.subVectors(a, d);
            var h = qd.dot(dh)
              , k = rd.dot(dh);
            if (0 <= h && k <= h)
                return b.copy(d);
            var m = f * k - h * g;
            if (0 >= m && 0 <= f && 0 >= h)
                return d = f / (f - h),
                b.copy(c).addScaledVector(qd, d);
            eh.subVectors(a, e);
            a = qd.dot(eh);
            var l = rd.dot(eh);
            if (0 <= l && a <= l)
                return b.copy(e);
            f = a * g - f * l;
            if (0 >= f && 0 <= g && 0 >= l)
                return m = g / (g - l),
                b.copy(c).addScaledVector(rd, m);
            g = h * l - a * k;
            if (0 >= g && 0 <= k - h && 0 <= a - l)
                return Di.subVectors(e, d),
                m = (k - h) / (k - h + (a - l)),
                b.copy(d).addScaledVector(Di, m);
            e = 1 / (g + f + m);
            d = f * e;
            m *= e;
            return b.copy(c).addScaledVector(qd, d).addScaledVector(rd, m)
        },
        equals: function(a) {
            return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
        }
    });
    var Ei = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }
      , Da = {
        h: 0,
        s: 0,
        l: 0
    }
      , Ff = {
        h: 0,
        s: 0,
        l: 0
    };
    Object.assign(A.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(a) {
            a && a.isColor ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
            return this
        },
        setScalar: function(a) {
            this.b = this.g = this.r = a;
            return this
        },
        setHex: function(a) {
            a = Math.floor(a);
            this.r = (a >> 16 & 255) / 255;
            this.g = (a >> 8 & 255) / 255;
            this.b = (a & 255) / 255;
            return this
        },
        setRGB: function(a, b, c) {
            this.r = a;
            this.g = b;
            this.b = c;
            return this
        },
        setHSL: function(a, b, c) {
            a = M.euclideanModulo(a, 1);
            b = M.clamp(b, 0, 1);
            c = M.clamp(c, 0, 1);
            0 === b ? this.r = this.g = this.b = c : (b = .5 >= c ? c * (1 + b) : c + b - c * b,
            c = 2 * c - b,
            this.r = Zf(c, b, a + 1 / 3),
            this.g = Zf(c, b, a),
            this.b = Zf(c, b, a - 1 / 3));
            return this
        },
        setStyle: function(a) {
            function b(b) {
                void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
            }
            var c;
            if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
                var d = c[2];
                switch (c[1]) {
                case "rgb":
                case "rgba":
                    if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                        return this.r = Math.min(255, parseInt(c[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(c[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(c[3], 10)) / 255,
                        b(c[5]),
                        this;
                    if (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                        return this.r = Math.min(100, parseInt(c[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(c[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(c[3], 10)) / 100,
                        b(c[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                        d = parseFloat(c[1]) / 360;
                        var e = parseInt(c[2], 10) / 100
                          , f = parseInt(c[3], 10) / 100;
                        b(c[5]);
                        return this.setHSL(d, e, f)
                    }
                }
            } else if (c = /^#([A-Fa-f0-9]+)$/.exec(a)) {
                c = c[1];
                d = c.length;
                if (3 === d)
                    return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255,
                    this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255,
                    this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255,
                    this;
                if (6 === d)
                    return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255,
                    this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255,
                    this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255,
                    this
            }
            return a && 0 < a.length ? this.setColorName(a) : this
        },
        setColorName: function(a) {
            var b = Ei[a];
            void 0 !== b ? this.setHex(b) : console.warn("THREE.Color: Unknown color " + a);
            return this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(a) {
            this.r = a.r;
            this.g = a.g;
            this.b = a.b;
            return this
        },
        copyGammaToLinear: function(a, b) {
            void 0 === b && (b = 2);
            this.r = Math.pow(a.r, b);
            this.g = Math.pow(a.g, b);
            this.b = Math.pow(a.b, b);
            return this
        },
        copyLinearToGamma: function(a, b) {
            void 0 === b && (b = 2);
            b = 0 < b ? 1 / b : 1;
            this.r = Math.pow(a.r, b);
            this.g = Math.pow(a.g, b);
            this.b = Math.pow(a.b, b);
            return this
        },
        convertGammaToLinear: function(a) {
            this.copyGammaToLinear(this, a);
            return this
        },
        convertLinearToGamma: function(a) {
            this.copyLinearToGamma(this, a);
            return this
        },
        copySRGBToLinear: function(a) {
            this.r = $f(a.r);
            this.g = $f(a.g);
            this.b = $f(a.b);
            return this
        },
        copyLinearToSRGB: function(a) {
            this.r = ag(a.r);
            this.g = ag(a.g);
            this.b = ag(a.b);
            return this
        },
        convertSRGBToLinear: function() {
            this.copySRGBToLinear(this);
            return this
        },
        convertLinearToSRGB: function() {
            this.copyLinearToSRGB(this);
            return this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(a) {
            void 0 === a && (console.warn("THREE.Color: .getHSL() target is now required"),
            a = {
                h: 0,
                s: 0,
                l: 0
            });
            var b = this.r, c = this.g, d = this.b, e = Math.max(b, c, d), f = Math.min(b, c, d), g, h = (f + e) / 2;
            if (f === e)
                f = g = 0;
            else {
                var k = e - f;
                f = .5 >= h ? k / (e + f) : k / (2 - e - f);
                switch (e) {
                case b:
                    g = (c - d) / k + (c < d ? 6 : 0);
                    break;
                case c:
                    g = (d - b) / k + 2;
                    break;
                case d:
                    g = (b - c) / k + 4
                }
                g /= 6
            }
            a.h = g;
            a.s = f;
            a.l = h;
            return a
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(a, b, c) {
            this.getHSL(Da);
            Da.h += a;
            Da.s += b;
            Da.l += c;
            this.setHSL(Da.h, Da.s, Da.l);
            return this
        },
        add: function(a) {
            this.r += a.r;
            this.g += a.g;
            this.b += a.b;
            return this
        },
        addColors: function(a, b) {
            this.r = a.r + b.r;
            this.g = a.g + b.g;
            this.b = a.b + b.b;
            return this
        },
        addScalar: function(a) {
            this.r += a;
            this.g += a;
            this.b += a;
            return this
        },
        sub: function(a) {
            this.r = Math.max(0, this.r - a.r);
            this.g = Math.max(0, this.g - a.g);
            this.b = Math.max(0, this.b - a.b);
            return this
        },
        multiply: function(a) {
            this.r *= a.r;
            this.g *= a.g;
            this.b *= a.b;
            return this
        },
        multiplyScalar: function(a) {
            this.r *= a;
            this.g *= a;
            this.b *= a;
            return this
        },
        lerp: function(a, b) {
            this.r += (a.r - this.r) * b;
            this.g += (a.g - this.g) * b;
            this.b += (a.b - this.b) * b;
            return this
        },
        lerpHSL: function(a, b) {
            this.getHSL(Da);
            a.getHSL(Ff);
            a = M.lerp(Da.h, Ff.h, b);
            var c = M.lerp(Da.s, Ff.s, b);
            b = M.lerp(Da.l, Ff.l, b);
            this.setHSL(a, c, b);
            return this
        },
        equals: function(a) {
            return a.r === this.r && a.g === this.g && a.b === this.b
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.r = a[b];
            this.g = a[b + 1];
            this.b = a[b + 2];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.r;
            a[b + 1] = this.g;
            a[b + 2] = this.b;
            return a
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    A.NAMES = Ei;
    Object.assign(yc.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.normal.copy(a.normal);
            this.color.copy(a.color);
            this.materialIndex = a.materialIndex;
            for (var b = 0, c = a.vertexNormals.length; b < c; b++)
                this.vertexNormals[b] = a.vertexNormals[b].clone();
            b = 0;
            for (c = a.vertexColors.length; b < c; b++)
                this.vertexColors[b] = a.vertexColors[b].clone();
            return this
        }
    });
    var jj = 0;
    J.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: J,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(a) {
            if (void 0 !== a)
                for (var b in a) {
                    var c = a[b];
                    if (void 0 === c)
                        console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                    else if ("shading" === b)
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                        this.flatShading = 1 === c ? !0 : !1;
                    else {
                        var d = this[b];
                        void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = c
                    }
                }
        },
        toJSON: function(a) {
            function b(a) {
                var b = [], c;
                for (c in a) {
                    var d = a[c];
                    delete d.metadata;
                    b.push(d)
                }
                return b
            }
            var c = void 0 === a || "string" === typeof a;
            c && (a = {
                textures: {},
                images: {}
            });
            var d = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            d.uuid = this.uuid;
            d.type = this.type;
            "" !== this.name && (d.name = this.name);
            this.color && this.color.isColor && (d.color = this.color.getHex());
            void 0 !== this.roughness && (d.roughness = this.roughness);
            void 0 !== this.metalness && (d.metalness = this.metalness);
            this.sheen && this.sheen.isColor && (d.sheen = this.sheen.getHex());
            this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex());
            this.emissiveIntensity && 1 !== this.emissiveIntensity && (d.emissiveIntensity = this.emissiveIntensity);
            this.specular && this.specular.isColor && (d.specular = this.specular.getHex());
            void 0 !== this.shininess && (d.shininess = this.shininess);
            void 0 !== this.clearcoat && (d.clearcoat = this.clearcoat);
            void 0 !== this.clearcoatRoughness && (d.clearcoatRoughness = this.clearcoatRoughness);
            this.clearcoatMap && this.clearcoatMap.isTexture && (d.clearcoatMap = this.clearcoatMap.toJSON(a).uuid);
            this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (d.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(a).uuid);
            this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (d.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a).uuid,
            d.clearcoatNormalScale = this.clearcoatNormalScale.toArray());
            this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
            this.matcap && this.matcap.isTexture && (d.matcap = this.matcap.toJSON(a).uuid);
            this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
            this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid);
            this.aoMap && this.aoMap.isTexture && (d.aoMap = this.aoMap.toJSON(a).uuid,
            d.aoMapIntensity = this.aoMapIntensity);
            this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid,
            d.bumpScale = this.bumpScale);
            this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid,
            d.normalMapType = this.normalMapType,
            d.normalScale = this.normalScale.toArray());
            this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid,
            d.displacementScale = this.displacementScale,
            d.displacementBias = this.displacementBias);
            this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
            this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
            this.emissiveMap && this.emissiveMap.isTexture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
            this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid);
            this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid,
            d.reflectivity = this.reflectivity,
            d.refractionRatio = this.refractionRatio,
            void 0 !== this.combine && (d.combine = this.combine),
            void 0 !== this.envMapIntensity && (d.envMapIntensity = this.envMapIntensity));
            this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid);
            void 0 !== this.size && (d.size = this.size);
            void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
            1 !== this.blending && (d.blending = this.blending);
            !0 === this.flatShading && (d.flatShading = this.flatShading);
            0 !== this.side && (d.side = this.side);
            this.vertexColors && (d.vertexColors = !0);
            1 > this.opacity && (d.opacity = this.opacity);
            !0 === this.transparent && (d.transparent = this.transparent);
            d.depthFunc = this.depthFunc;
            d.depthTest = this.depthTest;
            d.depthWrite = this.depthWrite;
            d.stencilWrite = this.stencilWrite;
            d.stencilWriteMask = this.stencilWriteMask;
            d.stencilFunc = this.stencilFunc;
            d.stencilRef = this.stencilRef;
            d.stencilFuncMask = this.stencilFuncMask;
            d.stencilFail = this.stencilFail;
            d.stencilZFail = this.stencilZFail;
            d.stencilZPass = this.stencilZPass;
            this.rotation && 0 !== this.rotation && (d.rotation = this.rotation);
            !0 === this.polygonOffset && (d.polygonOffset = !0);
            0 !== this.polygonOffsetFactor && (d.polygonOffsetFactor = this.polygonOffsetFactor);
            0 !== this.polygonOffsetUnits && (d.polygonOffsetUnits = this.polygonOffsetUnits);
            this.linewidth && 1 !== this.linewidth && (d.linewidth = this.linewidth);
            void 0 !== this.dashSize && (d.dashSize = this.dashSize);
            void 0 !== this.gapSize && (d.gapSize = this.gapSize);
            void 0 !== this.scale && (d.scale = this.scale);
            !0 === this.dithering && (d.dithering = !0);
            0 < this.alphaTest && (d.alphaTest = this.alphaTest);
            !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
            !0 === this.wireframe && (d.wireframe = this.wireframe);
            1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth);
            "round" !== this.wireframeLinecap && (d.wireframeLinecap = this.wireframeLinecap);
            "round" !== this.wireframeLinejoin && (d.wireframeLinejoin = this.wireframeLinejoin);
            !0 === this.morphTargets && (d.morphTargets = !0);
            !0 === this.morphNormals && (d.morphNormals = !0);
            !0 === this.skinning && (d.skinning = !0);
            !1 === this.visible && (d.visible = !1);
            !1 === this.toneMapped && (d.toneMapped = !1);
            "{}" !== JSON.stringify(this.userData) && (d.userData = this.userData);
            c && (c = b(a.textures),
            a = b(a.images),
            0 < c.length && (d.textures = c),
            0 < a.length && (d.images = a));
            return d
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.name = a.name;
            this.fog = a.fog;
            this.blending = a.blending;
            this.side = a.side;
            this.flatShading = a.flatShading;
            this.vertexColors = a.vertexColors;
            this.opacity = a.opacity;
            this.transparent = a.transparent;
            this.blendSrc = a.blendSrc;
            this.blendDst = a.blendDst;
            this.blendEquation = a.blendEquation;
            this.blendSrcAlpha = a.blendSrcAlpha;
            this.blendDstAlpha = a.blendDstAlpha;
            this.blendEquationAlpha = a.blendEquationAlpha;
            this.depthFunc = a.depthFunc;
            this.depthTest = a.depthTest;
            this.depthWrite = a.depthWrite;
            this.stencilWriteMask = a.stencilWriteMask;
            this.stencilFunc = a.stencilFunc;
            this.stencilRef = a.stencilRef;
            this.stencilFuncMask = a.stencilFuncMask;
            this.stencilFail = a.stencilFail;
            this.stencilZFail = a.stencilZFail;
            this.stencilZPass = a.stencilZPass;
            this.stencilWrite = a.stencilWrite;
            var b = a.clippingPlanes
              , c = null;
            if (null !== b) {
                var d = b.length;
                c = Array(d);
                for (var e = 0; e !== d; ++e)
                    c[e] = b[e].clone()
            }
            this.clippingPlanes = c;
            this.clipIntersection = a.clipIntersection;
            this.clipShadows = a.clipShadows;
            this.shadowSide = a.shadowSide;
            this.colorWrite = a.colorWrite;
            this.precision = a.precision;
            this.polygonOffset = a.polygonOffset;
            this.polygonOffsetFactor = a.polygonOffsetFactor;
            this.polygonOffsetUnits = a.polygonOffsetUnits;
            this.dithering = a.dithering;
            this.alphaTest = a.alphaTest;
            this.premultipliedAlpha = a.premultipliedAlpha;
            this.visible = a.visible;
            this.toneMapped = a.toneMapped;
            this.userData = JSON.parse(JSON.stringify(a.userData));
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Object.defineProperty(J.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Na.prototype = Object.create(J.prototype);
    Na.prototype.constructor = Na;
    Na.prototype.isMeshBasicMaterial = !0;
    Na.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        return this
    }
    ;
    var T = new n;
    Object.defineProperty(N.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(N.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setUsage: function(a) {
            this.usage = a;
            return this
        },
        copy: function(a) {
            this.name = a.name;
            this.array = new a.array.constructor(a.array);
            this.itemSize = a.itemSize;
            this.count = a.count;
            this.normalized = a.normalized;
            this.usage = a.usage;
            return this
        },
        copyAt: function(a, b, c) {
            a *= this.itemSize;
            c *= b.itemSize;
            for (var d = 0, e = this.itemSize; d < e; d++)
                this.array[a + d] = b.array[c + d];
            return this
        },
        copyArray: function(a) {
            this.array.set(a);
            return this
        },
        copyColorsArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d),
                f = new A);
                b[c++] = f.r;
                b[c++] = f.g;
                b[c++] = f.b
            }
            return this
        },
        copyVector2sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d),
                f = new v);
                b[c++] = f.x;
                b[c++] = f.y
            }
            return this
        },
        copyVector3sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d),
                f = new n);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z
            }
            return this
        },
        copyVector4sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d),
                f = new ca);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z;
                b[c++] = f.w
            }
            return this
        },
        applyMatrix3: function(a) {
            for (var b = 0, c = this.count; b < c; b++)
                T.x = this.getX(b),
                T.y = this.getY(b),
                T.z = this.getZ(b),
                T.applyMatrix3(a),
                this.setXYZ(b, T.x, T.y, T.z);
            return this
        },
        applyMatrix4: function(a) {
            for (var b = 0, c = this.count; b < c; b++)
                T.x = this.getX(b),
                T.y = this.getY(b),
                T.z = this.getZ(b),
                T.applyMatrix4(a),
                this.setXYZ(b, T.x, T.y, T.z);
            return this
        },
        applyNormalMatrix: function(a) {
            for (var b = 0, c = this.count; b < c; b++)
                T.x = this.getX(b),
                T.y = this.getY(b),
                T.z = this.getZ(b),
                T.applyNormalMatrix(a),
                this.setXYZ(b, T.x, T.y, T.z);
            return this
        },
        transformDirection: function(a) {
            for (var b = 0, c = this.count; b < c; b++)
                T.x = this.getX(b),
                T.y = this.getY(b),
                T.z = this.getZ(b),
                T.transformDirection(a),
                this.setXYZ(b, T.x, T.y, T.z);
            return this
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this
        },
        getX: function(a) {
            return this.array[a * this.itemSize]
        },
        setX: function(a, b) {
            this.array[a * this.itemSize] = b;
            return this
        },
        getY: function(a) {
            return this.array[a * this.itemSize + 1]
        },
        setY: function(a, b) {
            this.array[a * this.itemSize + 1] = b;
            return this
        },
        getZ: function(a) {
            return this.array[a * this.itemSize + 2]
        },
        setZ: function(a, b) {
            this.array[a * this.itemSize + 2] = b;
            return this
        },
        getW: function(a) {
            return this.array[a * this.itemSize + 3]
        },
        setW: function(a, b) {
            this.array[a * this.itemSize + 3] = b;
            return this
        },
        setXY: function(a, b, c) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            return this
        },
        setXYZ: function(a, b, c, d) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            return this
        },
        setXYZW: function(a, b, c, d, e) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            this.array[a + 3] = e;
            return this
        },
        onUpload: function(a) {
            this.onUploadCallback = a;
            return this
        },
        clone: function() {
            return (new this.constructor(this.array,this.itemSize)).copy(this)
        },
        toJSON: function() {
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            }
        }
    });
    xd.prototype = Object.create(N.prototype);
    xd.prototype.constructor = xd;
    yd.prototype = Object.create(N.prototype);
    yd.prototype.constructor = yd;
    zd.prototype = Object.create(N.prototype);
    zd.prototype.constructor = zd;
    Ad.prototype = Object.create(N.prototype);
    Ad.prototype.constructor = Ad;
    Xb.prototype = Object.create(N.prototype);
    Xb.prototype.constructor = Xb;
    Bd.prototype = Object.create(N.prototype);
    Bd.prototype.constructor = Bd;
    Yb.prototype = Object.create(N.prototype);
    Yb.prototype.constructor = Yb;
    y.prototype = Object.create(N.prototype);
    y.prototype.constructor = y;
    Cd.prototype = Object.create(N.prototype);
    Cd.prototype.constructor = Cd;
    Object.assign(uh.prototype, {
        computeGroups: function(a) {
            var b = []
              , c = void 0;
            a = a.faces;
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (e.materialIndex !== c) {
                    c = e.materialIndex;
                    void 0 !== f && (f.count = 3 * d - f.start,
                    b.push(f));
                    var f = {
                        start: 3 * d,
                        materialIndex: c
                    }
                }
            }
            void 0 !== f && (f.count = 3 * d - f.start,
            b.push(f));
            this.groups = b
        },
        fromGeometry: function(a) {
            var b = a.faces
              , c = a.vertices
              , d = a.faceVertexUvs
              , e = d[0] && 0 < d[0].length
              , f = d[1] && 0 < d[1].length
              , g = a.morphTargets
              , h = g.length;
            if (0 < h) {
                var k = [];
                for (var m = 0; m < h; m++)
                    k[m] = {
                        name: g[m].name,
                        data: []
                    };
                this.morphTargets.position = k
            }
            var l = a.morphNormals
              , p = l.length;
            if (0 < p) {
                var n = [];
                for (m = 0; m < p; m++)
                    n[m] = {
                        name: l[m].name,
                        data: []
                    };
                this.morphTargets.normal = n
            }
            var r = a.skinIndices
              , q = a.skinWeights
              , t = r.length === c.length
              , F = q.length === c.length;
            0 < c.length && 0 === b.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for (m = 0; m < b.length; m++) {
                var x = b[m];
                this.vertices.push(c[x.a], c[x.b], c[x.c]);
                var w = x.vertexNormals;
                3 === w.length ? this.normals.push(w[0], w[1], w[2]) : (w = x.normal,
                this.normals.push(w, w, w));
                w = x.vertexColors;
                3 === w.length ? this.colors.push(w[0], w[1], w[2]) : (w = x.color,
                this.colors.push(w, w, w));
                !0 === e && (w = d[0][m],
                void 0 !== w ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m),
                this.uvs.push(new v, new v, new v)));
                !0 === f && (w = d[1][m],
                void 0 !== w ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", m),
                this.uvs2.push(new v, new v, new v)));
                for (w = 0; w < h; w++) {
                    var y = g[w].vertices;
                    k[w].data.push(y[x.a], y[x.b], y[x.c])
                }
                for (w = 0; w < p; w++)
                    y = l[w].vertexNormals[m],
                    n[w].data.push(y.a, y.b, y.c);
                t && this.skinIndices.push(r[x.a], r[x.b], r[x.c]);
                F && this.skinWeights.push(q[x.a], q[x.b], q[x.c])
            }
            this.computeGroups(a);
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            return this
        }
    });
    var kj = 1
      , mb = new P
      , fh = new E
      , sd = new n
      , Ma = new Sa
      , ve = new Sa
      , ea = new n;
    B.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: B,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(a) {
            Array.isArray(a) ? this.index = new (65535 < vh(a) ? Yb : Xb)(a,1) : this.index = a
        },
        getAttribute: function(a) {
            return this.attributes[a]
        },
        setAttribute: function(a, b) {
            this.attributes[a] = b;
            return this
        },
        deleteAttribute: function(a) {
            delete this.attributes[a];
            return this
        },
        addGroup: function(a, b, c) {
            this.groups.push({
                start: a,
                count: b,
                materialIndex: void 0 !== c ? c : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(a, b) {
            this.drawRange.start = a;
            this.drawRange.count = b
        },
        applyMatrix4: function(a) {
            var b = this.attributes.position;
            void 0 !== b && (b.applyMatrix4(a),
            b.needsUpdate = !0);
            b = this.attributes.normal;
            if (void 0 !== b) {
                var c = (new xa).getNormalMatrix(a);
                b.applyNormalMatrix(c);
                b.needsUpdate = !0
            }
            b = this.attributes.tangent;
            void 0 !== b && (b.transformDirection(a),
            b.needsUpdate = !0);
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            return this
        },
        rotateX: function(a) {
            mb.makeRotationX(a);
            this.applyMatrix4(mb);
            return this
        },
        rotateY: function(a) {
            mb.makeRotationY(a);
            this.applyMatrix4(mb);
            return this
        },
        rotateZ: function(a) {
            mb.makeRotationZ(a);
            this.applyMatrix4(mb);
            return this
        },
        translate: function(a, b, c) {
            mb.makeTranslation(a, b, c);
            this.applyMatrix4(mb);
            return this
        },
        scale: function(a, b, c) {
            mb.makeScale(a, b, c);
            this.applyMatrix4(mb);
            return this
        },
        lookAt: function(a) {
            fh.lookAt(a);
            fh.updateMatrix();
            this.applyMatrix4(fh.matrix);
            return this
        },
        center: function() {
            this.computeBoundingBox();
            this.boundingBox.getCenter(sd).negate();
            this.translate(sd.x, sd.y, sd.z);
            return this
        },
        setFromObject: function(a) {
            var b = a.geometry;
            if (a.isPoints || a.isLine) {
                a = new y(3 * b.vertices.length,3);
                var c = new y(3 * b.colors.length,3);
                this.setAttribute("position", a.copyVector3sArray(b.vertices));
                this.setAttribute("color", c.copyColorsArray(b.colors));
                b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new y(b.lineDistances.length,1),
                this.setAttribute("lineDistance", a.copyArray(b.lineDistances)));
                null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
                null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
            } else
                a.isMesh && b && b.isGeometry && this.fromGeometry(b);
            return this
        },
        setFromPoints: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                b.push(e.x, e.y, e.z || 0)
            }
            this.setAttribute("position", new y(b,3));
            return this
        },
        updateFromObject: function(a) {
            var b = a.geometry;
            if (a.isMesh) {
                var c = b.__directGeometry;
                !0 === b.elementsNeedUpdate && (c = void 0,
                b.elementsNeedUpdate = !1);
                if (void 0 === c)
                    return this.fromGeometry(b);
                c.verticesNeedUpdate = b.verticesNeedUpdate;
                c.normalsNeedUpdate = b.normalsNeedUpdate;
                c.colorsNeedUpdate = b.colorsNeedUpdate;
                c.uvsNeedUpdate = b.uvsNeedUpdate;
                c.groupsNeedUpdate = b.groupsNeedUpdate;
                b.verticesNeedUpdate = !1;
                b.normalsNeedUpdate = !1;
                b.colorsNeedUpdate = !1;
                b.uvsNeedUpdate = !1;
                b.groupsNeedUpdate = !1;
                b = c
            }
            !0 === b.verticesNeedUpdate && (c = this.attributes.position,
            void 0 !== c && (c.copyVector3sArray(b.vertices),
            c.needsUpdate = !0),
            b.verticesNeedUpdate = !1);
            !0 === b.normalsNeedUpdate && (c = this.attributes.normal,
            void 0 !== c && (c.copyVector3sArray(b.normals),
            c.needsUpdate = !0),
            b.normalsNeedUpdate = !1);
            !0 === b.colorsNeedUpdate && (c = this.attributes.color,
            void 0 !== c && (c.copyColorsArray(b.colors),
            c.needsUpdate = !0),
            b.colorsNeedUpdate = !1);
            b.uvsNeedUpdate && (c = this.attributes.uv,
            void 0 !== c && (c.copyVector2sArray(b.uvs),
            c.needsUpdate = !0),
            b.uvsNeedUpdate = !1);
            b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance,
            void 0 !== c && (c.copyArray(b.lineDistances),
            c.needsUpdate = !0),
            b.lineDistancesNeedUpdate = !1);
            b.groupsNeedUpdate && (b.computeGroups(a.geometry),
            this.groups = b.groups,
            b.groupsNeedUpdate = !1);
            return this
        },
        fromGeometry: function(a) {
            a.__directGeometry = (new uh).fromGeometry(a);
            return this.fromDirectGeometry(a.__directGeometry)
        },
        fromDirectGeometry: function(a) {
            var b = new Float32Array(3 * a.vertices.length);
            this.setAttribute("position", (new N(b,3)).copyVector3sArray(a.vertices));
            0 < a.normals.length && (b = new Float32Array(3 * a.normals.length),
            this.setAttribute("normal", (new N(b,3)).copyVector3sArray(a.normals)));
            0 < a.colors.length && (b = new Float32Array(3 * a.colors.length),
            this.setAttribute("color", (new N(b,3)).copyColorsArray(a.colors)));
            0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length),
            this.setAttribute("uv", (new N(b,2)).copyVector2sArray(a.uvs)));
            0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length),
            this.setAttribute("uv2", (new N(b,2)).copyVector2sArray(a.uvs2)));
            this.groups = a.groups;
            for (var c in a.morphTargets) {
                b = [];
                for (var d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
                    var g = d[e]
                      , h = new y(3 * g.data.length,3);
                    h.name = g.name;
                    b.push(h.copyVector3sArray(g.data))
                }
                this.morphAttributes[c] = b
            }
            0 < a.skinIndices.length && (c = new y(4 * a.skinIndices.length,4),
            this.setAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
            0 < a.skinWeights.length && (c = new y(4 * a.skinWeights.length,4),
            this.setAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            return this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new Sa);
            var a = this.attributes.position
              , b = this.morphAttributes.position;
            if (void 0 !== a) {
                if (this.boundingBox.setFromBufferAttribute(a),
                b) {
                    a = 0;
                    for (var c = b.length; a < c; a++)
                        Ma.setFromBufferAttribute(b[a]),
                        this.morphTargetsRelative ? (ea.addVectors(this.boundingBox.min, Ma.min),
                        this.boundingBox.expandByPoint(ea),
                        ea.addVectors(this.boundingBox.max, Ma.max),
                        this.boundingBox.expandByPoint(ea)) : (this.boundingBox.expandByPoint(Ma.min),
                        this.boundingBox.expandByPoint(Ma.max))
                }
            } else
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new cb);
            var a = this.attributes.position
              , b = this.morphAttributes.position;
            if (a) {
                var c = this.boundingSphere.center;
                Ma.setFromBufferAttribute(a);
                if (b)
                    for (var d = 0, e = b.length; d < e; d++) {
                        var f = b[d];
                        ve.setFromBufferAttribute(f);
                        this.morphTargetsRelative ? (ea.addVectors(Ma.min, ve.min),
                        Ma.expandByPoint(ea),
                        ea.addVectors(Ma.max, ve.max),
                        Ma.expandByPoint(ea)) : (Ma.expandByPoint(ve.min),
                        Ma.expandByPoint(ve.max))
                    }
                Ma.getCenter(c);
                var g = 0;
                d = 0;
                for (e = a.count; d < e; d++)
                    ea.fromBufferAttribute(a, d),
                    g = Math.max(g, c.distanceToSquared(ea));
                if (b)
                    for (d = 0,
                    e = b.length; d < e; d++) {
                        f = b[d];
                        for (var h = this.morphTargetsRelative, k = 0, m = f.count; k < m; k++)
                            ea.fromBufferAttribute(f, k),
                            h && (sd.fromBufferAttribute(a, k),
                            ea.add(sd)),
                            g = Math.max(g, c.distanceToSquared(ea))
                    }
                this.boundingSphere.radius = Math.sqrt(g);
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        },
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var a = this.index
              , b = this.attributes;
            if (b.position) {
                var c = b.position.array;
                if (void 0 === b.normal)
                    this.setAttribute("normal", new N(new Float32Array(c.length),3));
                else
                    for (var d = b.normal.array, e = 0, f = d.length; e < f; e++)
                        d[e] = 0;
                d = b.normal.array;
                var g = new n
                  , h = new n
                  , k = new n
                  , m = new n
                  , l = new n;
                if (a) {
                    var p = a.array;
                    e = 0;
                    for (f = a.count; e < f; e += 3) {
                        a = 3 * p[e + 0];
                        var u = 3 * p[e + 1];
                        var r = 3 * p[e + 2];
                        g.fromArray(c, a);
                        h.fromArray(c, u);
                        k.fromArray(c, r);
                        m.subVectors(k, h);
                        l.subVectors(g, h);
                        m.cross(l);
                        d[a] += m.x;
                        d[a + 1] += m.y;
                        d[a + 2] += m.z;
                        d[u] += m.x;
                        d[u + 1] += m.y;
                        d[u + 2] += m.z;
                        d[r] += m.x;
                        d[r + 1] += m.y;
                        d[r + 2] += m.z
                    }
                } else
                    for (e = 0,
                    f = c.length; e < f; e += 9)
                        g.fromArray(c, e),
                        h.fromArray(c, e + 3),
                        k.fromArray(c, e + 6),
                        m.subVectors(k, h),
                        l.subVectors(g, h),
                        m.cross(l),
                        d[e] = m.x,
                        d[e + 1] = m.y,
                        d[e + 2] = m.z,
                        d[e + 3] = m.x,
                        d[e + 4] = m.y,
                        d[e + 5] = m.z,
                        d[e + 6] = m.x,
                        d[e + 7] = m.y,
                        d[e + 8] = m.z;
                this.normalizeNormals();
                b.normal.needsUpdate = !0
            }
        },
        merge: function(a, b) {
            if (a && a.isBufferGeometry) {
                void 0 === b && (b = 0,
                console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var c = this.attributes, d;
                for (d in c)
                    if (void 0 !== a.attributes[d]) {
                        var e = c[d].array
                          , f = a.attributes[d]
                          , g = f.array
                          , h = f.itemSize * b;
                        f = Math.min(g.length, e.length - h);
                        for (var k = 0; k < f; k++,
                        h++)
                            e[h] = g[k]
                    }
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a)
        },
        normalizeNormals: function() {
            for (var a = this.attributes.normal, b = 0, c = a.count; b < c; b++)
                ea.x = a.getX(b),
                ea.y = a.getY(b),
                ea.z = a.getZ(b),
                ea.normalize(),
                a.setXYZ(b, ea.x, ea.y, ea.z)
        },
        toNonIndexed: function() {
            function a(a, b) {
                var c = a.array;
                a = a.itemSize;
                for (var d = new c.constructor(b.length * a), e, f = 0, g = 0, h = b.length; g < h; g++) {
                    e = b[g] * a;
                    for (var k = 0; k < a; k++)
                        d[f++] = c[e++]
                }
                return new N(d,a)
            }
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var b = new B, c = this.index.array, d = this.attributes, e;
            for (e in d) {
                var f = d[e];
                f = a(f, c);
                b.setAttribute(e, f)
            }
            var g = this.morphAttributes;
            for (e in g) {
                var h = []
                  , k = g[e];
                d = 0;
                for (var m = k.length; d < m; d++)
                    f = k[d],
                    f = a(f, c),
                    h.push(f);
                b.morphAttributes[e] = h
            }
            b.morphTargetsRelative = this.morphTargetsRelative;
            c = this.groups;
            d = 0;
            for (e = c.length; d < e; d++)
                f = c[d],
                b.addGroup(f.start, f.count, f.materialIndex);
            return b
        },
        toJSON: function() {
            var a = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            a.uuid = this.uuid;
            a.type = this.type;
            "" !== this.name && (a.name = this.name);
            0 < Object.keys(this.userData).length && (a.userData = this.userData);
            if (void 0 !== this.parameters) {
                var b = this.parameters;
                for (m in b)
                    void 0 !== b[m] && (a[m] = b[m]);
                return a
            }
            a.data = {
                attributes: {}
            };
            b = this.index;
            null !== b && (a.data.index = {
                type: b.array.constructor.name,
                array: Array.prototype.slice.call(b.array)
            });
            var c = this.attributes;
            for (m in c) {
                b = c[m];
                var d = b.toJSON();
                "" !== b.name && (d.name = b.name);
                a.data.attributes[m] = d
            }
            c = {};
            var e = !1;
            for (m in this.morphAttributes) {
                for (var f = this.morphAttributes[m], g = [], h = 0, k = f.length; h < k; h++)
                    b = f[h],
                    d = b.toJSON(),
                    "" !== b.name && (d.name = b.name),
                    g.push(d);
                0 < g.length && (c[m] = g,
                e = !0)
            }
            e && (a.data.morphAttributes = c,
            a.data.morphTargetsRelative = this.morphTargetsRelative);
            var m = this.groups;
            0 < m.length && (a.data.groups = JSON.parse(JSON.stringify(m)));
            m = this.boundingSphere;
            null !== m && (a.data.boundingSphere = {
                center: m.center.toArray(),
                radius: m.radius
            });
            return a
        },
        clone: function() {
            return (new B).copy(this)
        },
        copy: function(a) {
            var b;
            this.index = null;
            this.attributes = {};
            this.morphAttributes = {};
            this.groups = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            var c = a.index;
            null !== c && this.setIndex(c.clone());
            c = a.attributes;
            for (g in c)
                this.setAttribute(g, c[g].clone());
            var d = a.morphAttributes;
            for (g in d) {
                var e = []
                  , f = d[g];
                c = 0;
                for (b = f.length; c < b; c++)
                    e.push(f[c].clone());
                this.morphAttributes[g] = e
            }
            this.morphTargetsRelative = a.morphTargetsRelative;
            var g = a.groups;
            c = 0;
            for (b = g.length; c < b; c++)
                d = g[c],
                this.addGroup(d.start, d.count, d.materialIndex);
            g = a.boundingBox;
            null !== g && (this.boundingBox = g.clone());
            g = a.boundingSphere;
            null !== g && (this.boundingSphere = g.clone());
            this.drawRange.start = a.drawRange.start;
            this.drawRange.count = a.drawRange.count;
            this.userData = a.userData;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var Fi = new P
      , qc = new Wb
      , gh = new cb
      , Cb = new n
      , Db = new n
      , Eb = new n
      , bg = new n
      , cg = new n
      , dg = new n
      , Fe = new n
      , Ge = new n
      , He = new n
      , zc = new v
      , Ac = new v
      , Bc = new v
      , Dd = new n
      , De = new n;
    ja.prototype = Object.assign(Object.create(E.prototype), {
        constructor: ja,
        isMesh: !0,
        copy: function(a) {
            E.prototype.copy.call(this, a);
            void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice());
            void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, a.morphTargetDictionary));
            return this
        },
        updateMorphTargets: function() {
            var a = this.geometry;
            if (a.isBufferGeometry) {
                a = a.morphAttributes;
                var b = Object.keys(a);
                if (0 < b.length) {
                    var c = a[b[0]];
                    if (void 0 !== c)
                        for (this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {},
                        a = 0,
                        b = c.length; a < b; a++) {
                            var d = c[a].name || String(a);
                            this.morphTargetInfluences.push(0);
                            this.morphTargetDictionary[d] = a
                        }
                }
            } else
                a = a.morphTargets,
                void 0 !== a && 0 < a.length && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        },
        raycast: function(a, b) {
            var c = this.geometry
              , d = this.material
              , e = this.matrixWorld;
            if (void 0 !== d && (null === c.boundingSphere && c.computeBoundingSphere(),
            gh.copy(c.boundingSphere),
            gh.applyMatrix4(e),
            !1 !== a.ray.intersectsSphere(gh) && (Fi.getInverse(e),
            qc.copy(a.ray).applyMatrix4(Fi),
            null === c.boundingBox || !1 !== qc.intersectsBox(c.boundingBox))))
                if (c.isBufferGeometry) {
                    var f = c.index;
                    e = c.attributes.position;
                    var g = c.morphAttributes.position, h = c.morphTargetsRelative, k = c.attributes.uv, m = c.attributes.uv2, l = c.groups, p = c.drawRange, n, r;
                    if (null !== f)
                        if (Array.isArray(d)) {
                            var q = 0;
                            for (n = l.length; q < n; q++) {
                                var t = l[q];
                                var F = d[t.materialIndex];
                                var x = Math.max(t.start, p.start);
                                for (r = c = Math.min(t.start + t.count, p.start + p.count); x < r; x += 3) {
                                    c = f.getX(x);
                                    var w = f.getX(x + 1);
                                    var y = f.getX(x + 2);
                                    if (c = Ee(this, F, a, qc, e, g, h, k, m, c, w, y))
                                        c.faceIndex = Math.floor(x / 3),
                                        c.face.materialIndex = t.materialIndex,
                                        b.push(c)
                                }
                            }
                        } else
                            for (x = Math.max(0, p.start),
                            c = Math.min(f.count, p.start + p.count),
                            q = x,
                            n = c; q < n; q += 3) {
                                if (c = f.getX(q),
                                w = f.getX(q + 1),
                                y = f.getX(q + 2),
                                c = Ee(this, d, a, qc, e, g, h, k, m, c, w, y))
                                    c.faceIndex = Math.floor(q / 3),
                                    b.push(c)
                            }
                    else if (void 0 !== e)
                        if (Array.isArray(d))
                            for (q = 0,
                            n = l.length; q < n; q++)
                                for (t = l[q],
                                F = d[t.materialIndex],
                                x = Math.max(t.start, p.start),
                                r = c = Math.min(t.start + t.count, p.start + p.count); x < r; x += 3) {
                                    if (c = x,
                                    w = x + 1,
                                    y = x + 2,
                                    c = Ee(this, F, a, qc, e, g, h, k, m, c, w, y))
                                        c.faceIndex = Math.floor(x / 3),
                                        c.face.materialIndex = t.materialIndex,
                                        b.push(c)
                                }
                        else
                            for (x = Math.max(0, p.start),
                            c = Math.min(e.count, p.start + p.count),
                            q = x,
                            n = c; q < n; q += 3)
                                if (c = q,
                                w = q + 1,
                                y = q + 2,
                                c = Ee(this, d, a, qc, e, g, h, k, m, c, w, y))
                                    c.faceIndex = Math.floor(q / 3),
                                    b.push(c)
                } else if (c.isGeometry)
                    for (e = Array.isArray(d),
                    g = c.vertices,
                    h = c.faces,
                    c = c.faceVertexUvs[0],
                    0 < c.length && (f = c),
                    p = 0,
                    q = h.length; p < q; p++)
                        if (n = h[p],
                        c = e ? d[n.materialIndex] : d,
                        void 0 !== c && (k = g[n.a],
                        m = g[n.b],
                        l = g[n.c],
                        c = wh(this, c, a, qc, k, m, l, Dd)))
                            f && f[p] && (t = f[p],
                            zc.copy(t[0]),
                            Ac.copy(t[1]),
                            Bc.copy(t[2]),
                            c.uv = wa.getUV(Dd, k, m, l, zc, Ac, Bc, new v)),
                            c.face = n,
                            c.faceIndex = p,
                            b.push(c)
        },
        clone: function() {
            return (new this.constructor(this.geometry,this.material)).copy(this)
        }
    });
    var lj = 0
      , nb = new P
      , hh = new E
      , Gf = new n;
    O.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: O,
        isGeometry: !0,
        applyMatrix4: function(a) {
            for (var b = (new xa).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++)
                this.vertices[c].applyMatrix4(a);
            c = 0;
            for (d = this.faces.length; c < d; c++) {
                a = this.faces[c];
                a.normal.applyMatrix3(b).normalize();
                for (var e = 0, f = a.vertexNormals.length; e < f; e++)
                    a.vertexNormals[e].applyMatrix3(b).normalize()
            }
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
            return this
        },
        rotateX: function(a) {
            nb.makeRotationX(a);
            this.applyMatrix4(nb);
            return this
        },
        rotateY: function(a) {
            nb.makeRotationY(a);
            this.applyMatrix4(nb);
            return this
        },
        rotateZ: function(a) {
            nb.makeRotationZ(a);
            this.applyMatrix4(nb);
            return this
        },
        translate: function(a, b, c) {
            nb.makeTranslation(a, b, c);
            this.applyMatrix4(nb);
            return this
        },
        scale: function(a, b, c) {
            nb.makeScale(a, b, c);
            this.applyMatrix4(nb);
            return this
        },
        lookAt: function(a) {
            hh.lookAt(a);
            hh.updateMatrix();
            this.applyMatrix4(hh.matrix);
            return this
        },
        fromBufferGeometry: function(a) {
            function b(a, b, d, e) {
                var f = void 0 === h ? [] : [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()]
                  , l = void 0 === g ? [] : [(new n).fromArray(g, 3 * a), (new n).fromArray(g, 3 * b), (new n).fromArray(g, 3 * d)];
                e = new yc(a,b,d,l,f,e);
                c.faces.push(e);
                void 0 !== k && c.faceVertexUvs[0].push([(new v).fromArray(k, 2 * a), (new v).fromArray(k, 2 * b), (new v).fromArray(k, 2 * d)]);
                void 0 !== m && c.faceVertexUvs[1].push([(new v).fromArray(m, 2 * a), (new v).fromArray(m, 2 * b), (new v).fromArray(m, 2 * d)])
            }
            var c = this
              , d = null !== a.index ? a.index.array : void 0
              , e = a.attributes;
            if (void 0 === e.position)
                return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),
                this;
            var f = e.position.array
              , g = void 0 !== e.normal ? e.normal.array : void 0
              , h = void 0 !== e.color ? e.color.array : void 0
              , k = void 0 !== e.uv ? e.uv.array : void 0
              , m = void 0 !== e.uv2 ? e.uv2.array : void 0;
            void 0 !== m && (this.faceVertexUvs[1] = []);
            for (e = 0; e < f.length; e += 3)
                c.vertices.push((new n).fromArray(f, e)),
                void 0 !== h && c.colors.push((new A).fromArray(h, e));
            var l = a.groups;
            if (0 < l.length)
                for (e = 0; e < l.length; e++) {
                    f = l[e];
                    var p = f.start
                      , u = p;
                    for (p += f.count; u < p; u += 3)
                        void 0 !== d ? b(d[u], d[u + 1], d[u + 2], f.materialIndex) : b(u, u + 1, u + 2, f.materialIndex)
                }
            else if (void 0 !== d)
                for (e = 0; e < d.length; e += 3)
                    b(d[e], d[e + 1], d[e + 2]);
            else
                for (e = 0; e < f.length / 3; e += 3)
                    b(e, e + 1, e + 2);
            this.computeFaceNormals();
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            return this
        },
        center: function() {
            this.computeBoundingBox();
            this.boundingBox.getCenter(Gf).negate();
            this.translate(Gf.x, Gf.y, Gf.z);
            return this
        },
        normalize: function() {
            this.computeBoundingSphere();
            var a = this.boundingSphere.center
              , b = this.boundingSphere.radius;
            b = 0 === b ? 1 : 1 / b;
            var c = new P;
            c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
            this.applyMatrix4(c);
            return this
        },
        computeFaceNormals: function() {
            for (var a = new n, b = new n, c = 0, d = this.faces.length; c < d; c++) {
                var e = this.faces[c]
                  , f = this.vertices[e.a]
                  , g = this.vertices[e.b];
                a.subVectors(this.vertices[e.c], g);
                b.subVectors(f, g);
                a.cross(b);
                a.normalize();
                e.normal.copy(a)
            }
        },
        computeVertexNormals: function(a) {
            void 0 === a && (a = !0);
            var b;
            var c = Array(this.vertices.length);
            var d = 0;
            for (b = this.vertices.length; d < b; d++)
                c[d] = new n;
            if (a) {
                var e = new n
                  , f = new n;
                a = 0;
                for (d = this.faces.length; a < d; a++) {
                    b = this.faces[a];
                    var g = this.vertices[b.a];
                    var h = this.vertices[b.b];
                    var k = this.vertices[b.c];
                    e.subVectors(k, h);
                    f.subVectors(g, h);
                    e.cross(f);
                    c[b.a].add(e);
                    c[b.b].add(e);
                    c[b.c].add(e)
                }
            } else
                for (this.computeFaceNormals(),
                a = 0,
                d = this.faces.length; a < d; a++)
                    b = this.faces[a],
                    c[b.a].add(b.normal),
                    c[b.b].add(b.normal),
                    c[b.c].add(b.normal);
            d = 0;
            for (b = this.vertices.length; d < b; d++)
                c[d].normalize();
            a = 0;
            for (d = this.faces.length; a < d; a++)
                b = this.faces[a],
                g = b.vertexNormals,
                3 === g.length ? (g[0].copy(c[b.a]),
                g[1].copy(c[b.b]),
                g[2].copy(c[b.c])) : (g[0] = c[b.a].clone(),
                g[1] = c[b.b].clone(),
                g[2] = c[b.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var a;
            this.computeFaceNormals();
            var b = 0;
            for (a = this.faces.length; b < a; b++) {
                var c = this.faces[b];
                var d = c.vertexNormals;
                3 === d.length ? (d[0].copy(c.normal),
                d[1].copy(c.normal),
                d[2].copy(c.normal)) : (d[0] = c.normal.clone(),
                d[1] = c.normal.clone(),
                d[2] = c.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var a, b;
            var c = 0;
            for (b = this.faces.length; c < b; c++) {
                var d = this.faces[c];
                d.__originalFaceNormal ? d.__originalFaceNormal.copy(d.normal) : d.__originalFaceNormal = d.normal.clone();
                d.__originalVertexNormals || (d.__originalVertexNormals = []);
                var e = 0;
                for (a = d.vertexNormals.length; e < a; e++)
                    d.__originalVertexNormals[e] ? d.__originalVertexNormals[e].copy(d.vertexNormals[e]) : d.__originalVertexNormals[e] = d.vertexNormals[e].clone()
            }
            var f = new O;
            f.faces = this.faces;
            e = 0;
            for (a = this.morphTargets.length; e < a; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {};
                    this.morphNormals[e].faceNormals = [];
                    this.morphNormals[e].vertexNormals = [];
                    d = this.morphNormals[e].faceNormals;
                    var g = this.morphNormals[e].vertexNormals;
                    c = 0;
                    for (b = this.faces.length; c < b; c++) {
                        var h = new n;
                        var k = {
                            a: new n,
                            b: new n,
                            c: new n
                        };
                        d.push(h);
                        g.push(k)
                    }
                }
                g = this.morphNormals[e];
                f.vertices = this.morphTargets[e].vertices;
                f.computeFaceNormals();
                f.computeVertexNormals();
                c = 0;
                for (b = this.faces.length; c < b; c++)
                    d = this.faces[c],
                    h = g.faceNormals[c],
                    k = g.vertexNormals[c],
                    h.copy(d.normal),
                    k.a.copy(d.vertexNormals[0]),
                    k.b.copy(d.vertexNormals[1]),
                    k.c.copy(d.vertexNormals[2])
            }
            c = 0;
            for (b = this.faces.length; c < b; c++)
                d = this.faces[c],
                d.normal = d.__originalFaceNormal,
                d.vertexNormals = d.__originalVertexNormals
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new Sa);
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new cb);
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(a, b, c) {
            if (a && a.isGeometry) {
                var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, k = a.faces, m = this.colors, l = a.colors;
                void 0 === c && (c = 0);
                void 0 !== b && (d = (new xa).getNormalMatrix(b));
                for (var p = 0, n = g.length; p < n; p++) {
                    var r = g[p].clone();
                    void 0 !== b && r.applyMatrix4(b);
                    f.push(r)
                }
                p = 0;
                for (n = l.length; p < n; p++)
                    m.push(l[p].clone());
                p = 0;
                for (n = k.length; p < n; p++) {
                    g = k[p];
                    var q = g.vertexNormals;
                    l = g.vertexColors;
                    m = new yc(g.a + e,g.b + e,g.c + e);
                    m.normal.copy(g.normal);
                    void 0 !== d && m.normal.applyMatrix3(d).normalize();
                    b = 0;
                    for (f = q.length; b < f; b++)
                        r = q[b].clone(),
                        void 0 !== d && r.applyMatrix3(d).normalize(),
                        m.vertexNormals.push(r);
                    m.color.copy(g.color);
                    b = 0;
                    for (f = l.length; b < f; b++)
                        r = l[b],
                        m.vertexColors.push(r.clone());
                    m.materialIndex = g.materialIndex + c;
                    h.push(m)
                }
                p = 0;
                for (n = a.faceVertexUvs.length; p < n; p++)
                    for (c = a.faceVertexUvs[p],
                    void 0 === this.faceVertexUvs[p] && (this.faceVertexUvs[p] = []),
                    b = 0,
                    f = c.length; b < f; b++) {
                        d = c[b];
                        e = [];
                        h = 0;
                        for (k = d.length; h < k; h++)
                            e.push(d[h].clone());
                        this.faceVertexUvs[p].push(e)
                    }
            } else
                console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a)
        },
        mergeMesh: function(a) {
            a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(),
            this.merge(a.geometry, a.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a)
        },
        mergeVertices: function() {
            var a = {}, b = [], c = [], d = Math.pow(10, 4), e;
            var f = 0;
            for (e = this.vertices.length; f < e; f++) {
                var g = this.vertices[f];
                g = Math.round(g.x * d) + "_" + Math.round(g.y * d) + "_" + Math.round(g.z * d);
                void 0 === a[g] ? (a[g] = f,
                b.push(this.vertices[f]),
                c[f] = b.length - 1) : c[f] = c[a[g]]
            }
            a = [];
            f = 0;
            for (e = this.faces.length; f < e; f++)
                for (d = this.faces[f],
                d.a = c[d.a],
                d.b = c[d.b],
                d.c = c[d.c],
                d = [d.a, d.b, d.c],
                g = 0; 3 > g; g++)
                    if (d[g] === d[(g + 1) % 3]) {
                        a.push(f);
                        break
                    }
            for (f = a.length - 1; 0 <= f; f--)
                for (d = a[f],
                this.faces.splice(d, 1),
                c = 0,
                e = this.faceVertexUvs.length; c < e; c++)
                    this.faceVertexUvs[c].splice(d, 1);
            f = this.vertices.length - b.length;
            this.vertices = b;
            return f
        },
        setFromPoints: function(a) {
            this.vertices = [];
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                this.vertices.push(new n(d.x,d.y,d.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var a = this.faces, b = a.length, c = 0; c < b; c++)
                a[c]._id = c;
            a.sort(function(a, b) {
                return a.materialIndex - b.materialIndex
            });
            var d = this.faceVertexUvs[0], e = this.faceVertexUvs[1], f, g;
            d && d.length === b && (f = []);
            e && e.length === b && (g = []);
            for (c = 0; c < b; c++) {
                var h = a[c]._id;
                f && f.push(d[h]);
                g && g.push(e[h])
            }
            f && (this.faceVertexUvs[0] = f);
            g && (this.faceVertexUvs[1] = g)
        },
        toJSON: function() {
            function a(a, b, c) {
                return c ? a | 1 << b : a & ~(1 << b)
            }
            function b(a) {
                var b = a.x.toString() + a.y.toString() + a.z.toString();
                if (void 0 !== m[b])
                    return m[b];
                m[b] = k.length / 3;
                k.push(a.x, a.y, a.z);
                return m[b]
            }
            function c(a) {
                var b = a.r.toString() + a.g.toString() + a.b.toString();
                if (void 0 !== p[b])
                    return p[b];
                p[b] = l.length;
                l.push(a.getHex());
                return p[b]
            }
            function d(a) {
                var b = a.x.toString() + a.y.toString();
                if (void 0 !== r[b])
                    return r[b];
                r[b] = n.length / 2;
                n.push(a.x, a.y);
                return r[b]
            }
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            e.uuid = this.uuid;
            e.type = this.type;
            "" !== this.name && (e.name = this.name);
            if (void 0 !== this.parameters) {
                var f = this.parameters, g;
                for (g in f)
                    void 0 !== f[g] && (e[g] = f[g]);
                return e
            }
            f = [];
            for (g = 0; g < this.vertices.length; g++) {
                var h = this.vertices[g];
                f.push(h.x, h.y, h.z)
            }
            h = [];
            var k = []
              , m = {}
              , l = []
              , p = {}
              , n = []
              , r = {};
            for (g = 0; g < this.faces.length; g++) {
                var q = this.faces[g]
                  , t = void 0 !== this.faceVertexUvs[0][g]
                  , v = 0 < q.normal.length()
                  , x = 0 < q.vertexNormals.length
                  , w = 1 !== q.color.r || 1 !== q.color.g || 1 !== q.color.b
                  , y = 0 < q.vertexColors.length
                  , A = 0;
                A = a(A, 0, 0);
                A = a(A, 1, !0);
                A = a(A, 2, !1);
                A = a(A, 3, t);
                A = a(A, 4, v);
                A = a(A, 5, x);
                A = a(A, 6, w);
                A = a(A, 7, y);
                h.push(A);
                h.push(q.a, q.b, q.c);
                h.push(q.materialIndex);
                t && (t = this.faceVertexUvs[0][g],
                h.push(d(t[0]), d(t[1]), d(t[2])));
                v && h.push(b(q.normal));
                x && (v = q.vertexNormals,
                h.push(b(v[0]), b(v[1]), b(v[2])));
                w && h.push(c(q.color));
                y && (q = q.vertexColors,
                h.push(c(q[0]), c(q[1]), c(q[2])))
            }
            e.data = {};
            e.data.vertices = f;
            e.data.normals = k;
            0 < l.length && (e.data.colors = l);
            0 < n.length && (e.data.uvs = [n]);
            e.data.faces = h;
            return e
        },
        clone: function() {
            return (new O).copy(this)
        },
        copy: function(a) {
            var b, c, d;
            this.vertices = [];
            this.colors = [];
            this.faces = [];
            this.faceVertexUvs = [[]];
            this.morphTargets = [];
            this.morphNormals = [];
            this.skinWeights = [];
            this.skinIndices = [];
            this.lineDistances = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            var e = a.vertices;
            var f = 0;
            for (b = e.length; f < b; f++)
                this.vertices.push(e[f].clone());
            e = a.colors;
            f = 0;
            for (b = e.length; f < b; f++)
                this.colors.push(e[f].clone());
            e = a.faces;
            f = 0;
            for (b = e.length; f < b; f++)
                this.faces.push(e[f].clone());
            f = 0;
            for (b = a.faceVertexUvs.length; f < b; f++) {
                var g = a.faceVertexUvs[f];
                void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []);
                e = 0;
                for (c = g.length; e < c; e++) {
                    var h = g[e]
                      , k = [];
                    var m = 0;
                    for (d = h.length; m < d; m++)
                        k.push(h[m].clone());
                    this.faceVertexUvs[f].push(k)
                }
            }
            m = a.morphTargets;
            f = 0;
            for (b = m.length; f < b; f++) {
                d = {};
                d.name = m[f].name;
                if (void 0 !== m[f].vertices)
                    for (d.vertices = [],
                    e = 0,
                    c = m[f].vertices.length; e < c; e++)
                        d.vertices.push(m[f].vertices[e].clone());
                if (void 0 !== m[f].normals)
                    for (d.normals = [],
                    e = 0,
                    c = m[f].normals.length; e < c; e++)
                        d.normals.push(m[f].normals[e].clone());
                this.morphTargets.push(d)
            }
            m = a.morphNormals;
            f = 0;
            for (b = m.length; f < b; f++) {
                d = {};
                if (void 0 !== m[f].vertexNormals)
                    for (d.vertexNormals = [],
                    e = 0,
                    c = m[f].vertexNormals.length; e < c; e++)
                        g = m[f].vertexNormals[e],
                        h = {},
                        h.a = g.a.clone(),
                        h.b = g.b.clone(),
                        h.c = g.c.clone(),
                        d.vertexNormals.push(h);
                if (void 0 !== m[f].faceNormals)
                    for (d.faceNormals = [],
                    e = 0,
                    c = m[f].faceNormals.length; e < c; e++)
                        d.faceNormals.push(m[f].faceNormals[e].clone());
                this.morphNormals.push(d)
            }
            e = a.skinWeights;
            f = 0;
            for (b = e.length; f < b; f++)
                this.skinWeights.push(e[f].clone());
            e = a.skinIndices;
            f = 0;
            for (b = e.length; f < b; f++)
                this.skinIndices.push(e[f].clone());
            e = a.lineDistances;
            f = 0;
            for (b = e.length; f < b; f++)
                this.lineDistances.push(e[f]);
            f = a.boundingBox;
            null !== f && (this.boundingBox = f.clone());
            f = a.boundingSphere;
            null !== f && (this.boundingSphere = f.clone());
            this.elementsNeedUpdate = a.elementsNeedUpdate;
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var ih = function(a) {
        function b(b, d, e, f, g, h) {
            a.call(this);
            this.type = "BoxGeometry";
            this.parameters = {
                width: b,
                height: d,
                depth: e,
                widthSegments: f,
                heightSegments: g,
                depthSegments: h
            };
            this.fromBufferGeometry(new Fd(b,d,e,f,g,h));
            this.mergeVertices()
        }
        a && (b.__proto__ = a);
        b.prototype = Object.create(a && a.prototype);
        return b.prototype.constructor = b
    }(O)
      , Fd = function(a) {
        function b(b, d, e, f, g, h) {
            function c(a, b, c, d, e, f, g, h, k, z, v) {
                var w = f / k
                  , x = g / z
                  , y = f / 2
                  , F = g / 2
                  , A = h / 2;
                g = k + 1;
                var C = z + 1, B = f = 0, D, E, G = new n;
                for (E = 0; E < C; E++) {
                    var J = E * x - F;
                    for (D = 0; D < g; D++)
                        G[a] = (D * w - y) * d,
                        G[b] = J * e,
                        G[c] = A,
                        p.push(G.x, G.y, G.z),
                        G[a] = 0,
                        G[b] = 0,
                        G[c] = 0 < h ? 1 : -1,
                        u.push(G.x, G.y, G.z),
                        r.push(D / k),
                        r.push(1 - E / z),
                        f += 1
                }
                for (E = 0; E < z; E++)
                    for (D = 0; D < k; D++)
                        a = q + D + g * (E + 1),
                        b = q + (D + 1) + g * (E + 1),
                        c = q + (D + 1) + g * E,
                        l.push(q + D + g * E, a, c),
                        l.push(a, b, c),
                        B += 6;
                m.addGroup(t, B, v);
                t += B;
                q += f
            }
            a.call(this);
            this.type = "BoxBufferGeometry";
            this.parameters = {
                width: b,
                height: d,
                depth: e,
                widthSegments: f,
                heightSegments: g,
                depthSegments: h
            };
            var m = this;
            b = b || 1;
            d = d || 1;
            e = e || 1;
            f = Math.floor(f) || 1;
            g = Math.floor(g) || 1;
            h = Math.floor(h) || 1;
            var l = []
              , p = []
              , u = []
              , r = []
              , q = 0
              , t = 0;
            c("z", "y", "x", -1, -1, e, d, b, h, g, 0);
            c("z", "y", "x", 1, -1, e, d, -b, h, g, 1);
            c("x", "z", "y", 1, 1, b, e, d, f, h, 2);
            c("x", "z", "y", 1, -1, b, e, -d, f, h, 3);
            c("x", "y", "z", 1, -1, b, d, e, f, g, 4);
            c("x", "y", "z", -1, -1, b, d, -e, f, g, 5);
            this.setIndex(l);
            this.setAttribute("position", new y(p,3));
            this.setAttribute("normal", new y(u,3));
            this.setAttribute("uv", new y(r,2))
        }
        a && (b.__proto__ = a);
        b.prototype = Object.create(a && a.prototype);
        return b.prototype.constructor = b
    }(B)
      , Rh = {
        clone: Cc,
        merge: va
    };
    Aa.prototype = Object.create(J.prototype);
    Aa.prototype.constructor = Aa;
    Aa.prototype.isShaderMaterial = !0;
    Aa.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.fragmentShader = a.fragmentShader;
        this.vertexShader = a.vertexShader;
        this.uniforms = Cc(a.uniforms);
        this.defines = Object.assign({}, a.defines);
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.lights = a.lights;
        this.clipping = a.clipping;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        this.extensions = a.extensions;
        return this
    }
    ;
    Aa.prototype.toJSON = function(a) {
        var b = J.prototype.toJSON.call(this, a);
        b.uniforms = {};
        for (var c in this.uniforms) {
            var d = this.uniforms[c].value;
            b.uniforms[c] = d && d.isTexture ? {
                type: "t",
                value: d.toJSON(a).uuid
            } : d && d.isColor ? {
                type: "c",
                value: d.getHex()
            } : d && d.isVector2 ? {
                type: "v2",
                value: d.toArray()
            } : d && d.isVector3 ? {
                type: "v3",
                value: d.toArray()
            } : d && d.isVector4 ? {
                type: "v4",
                value: d.toArray()
            } : d && d.isMatrix3 ? {
                type: "m3",
                value: d.toArray()
            } : d && d.isMatrix4 ? {
                type: "m4",
                value: d.toArray()
            } : {
                value: d
            }
        }
        0 < Object.keys(this.defines).length && (b.defines = this.defines);
        b.vertexShader = this.vertexShader;
        b.fragmentShader = this.fragmentShader;
        a = {};
        for (var e in this.extensions)
            !0 === this.extensions[e] && (a[e] = !0);
        0 < Object.keys(a).length && (b.extensions = a);
        return b
    }
    ;
    db.prototype = Object.assign(Object.create(E.prototype), {
        constructor: db,
        isCamera: !0,
        copy: function(a, b) {
            E.prototype.copy.call(this, a, b);
            this.matrixWorldInverse.copy(a.matrixWorldInverse);
            this.projectionMatrix.copy(a.projectionMatrix);
            this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
            return this
        },
        getWorldDirection: function(a) {
            void 0 === a && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
            a = new n);
            this.updateMatrixWorld(!0);
            var b = this.matrixWorld.elements;
            return a.set(-b[8], -b[9], -b[10]).normalize()
        },
        updateMatrixWorld: function(a) {
            E.prototype.updateMatrixWorld.call(this, a);
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        updateWorldMatrix: function(a, b) {
            E.prototype.updateWorldMatrix.call(this, a, b);
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    });
    ba.prototype = Object.assign(Object.create(db.prototype), {
        constructor: ba,
        isPerspectiveCamera: !0,
        copy: function(a, b) {
            db.prototype.copy.call(this, a, b);
            this.fov = a.fov;
            this.zoom = a.zoom;
            this.near = a.near;
            this.far = a.far;
            this.focus = a.focus;
            this.aspect = a.aspect;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            this.filmGauge = a.filmGauge;
            this.filmOffset = a.filmOffset;
            return this
        },
        setFocalLength: function(a) {
            a = .5 * this.getFilmHeight() / a;
            this.fov = 2 * M.RAD2DEG * Math.atan(a);
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var a = Math.tan(.5 * M.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / a
        },
        getEffectiveFOV: function() {
            return 2 * M.RAD2DEG * Math.atan(Math.tan(.5 * M.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(a, b, c, d, e, f) {
            this.aspect = a / b;
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            });
            this.view.enabled = !0;
            this.view.fullWidth = a;
            this.view.fullHeight = b;
            this.view.offsetX = c;
            this.view.offsetY = d;
            this.view.width = e;
            this.view.height = f;
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1);
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var a = this.near
              , b = a * Math.tan(.5 * M.DEG2RAD * this.fov) / this.zoom
              , c = 2 * b
              , d = this.aspect * c
              , e = -.5 * d
              , f = this.view;
            if (null !== this.view && this.view.enabled) {
                var g = f.fullWidth
                  , h = f.fullHeight;
                e += f.offsetX * d / g;
                b -= f.offsetY * c / h;
                d *= f.width / g;
                c *= f.height / h
            }
            f = this.filmOffset;
            0 !== f && (e += a * f / this.getFilmWidth());
            this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far);
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(a) {
            a = E.prototype.toJSON.call(this, a);
            a.object.fov = this.fov;
            a.object.zoom = this.zoom;
            a.object.near = this.near;
            a.object.far = this.far;
            a.object.focus = this.focus;
            a.object.aspect = this.aspect;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            a.object.filmGauge = this.filmGauge;
            a.object.filmOffset = this.filmOffset;
            return a
        }
    });
    Dc.prototype = Object.create(E.prototype);
    Dc.prototype.constructor = Dc;
    Fb.prototype = Object.create(za.prototype);
    Fb.prototype.constructor = Fb;
    Fb.prototype.isWebGLCubeRenderTarget = !0;
    Fb.prototype.fromEquirectangularTexture = function(a, b) {
        this.texture.type = b.type;
        this.texture.format = b.format;
        this.texture.encoding = b.encoding;
        var c = new ob
          , d = new Aa({
            type: "CubemapFromEquirect",
            uniforms: Cc({
                tEquirect: {
                    value: null
                }
            }),
            vertexShader: "varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
            fragmentShader: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",
            side: 1,
            blending: 0
        });
        d.uniforms.tEquirect.value = b;
        b = new ja(new Fd(5,5,5),d);
        c.add(b);
        d = new Dc(1,10,1);
        d.renderTarget = this;
        d.renderTarget.texture.name = "CubeCameraTexture";
        d.update(a, c);
        b.geometry.dispose();
        b.material.dispose();
        return this
    }
    ;
    Zb.prototype = Object.create(V.prototype);
    Zb.prototype.constructor = Zb;
    Zb.prototype.isDataTexture = !0;
    var td = new cb
      , Hf = new n;
    Object.assign(Ec.prototype, {
        set: function(a, b, c, d, e, f) {
            var g = this.planes;
            g[0].copy(a);
            g[1].copy(b);
            g[2].copy(c);
            g[3].copy(d);
            g[4].copy(e);
            g[5].copy(f);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            for (var b = this.planes, c = 0; 6 > c; c++)
                b[c].copy(a.planes[c]);
            return this
        },
        setFromProjectionMatrix: function(a) {
            var b = this.planes
              , c = a.elements;
            a = c[0];
            var d = c[1]
              , e = c[2]
              , f = c[3]
              , g = c[4]
              , h = c[5]
              , k = c[6]
              , m = c[7]
              , l = c[8]
              , p = c[9]
              , n = c[10]
              , r = c[11]
              , q = c[12]
              , t = c[13]
              , v = c[14];
            c = c[15];
            b[0].setComponents(f - a, m - g, r - l, c - q).normalize();
            b[1].setComponents(f + a, m + g, r + l, c + q).normalize();
            b[2].setComponents(f + d, m + h, r + p, c + t).normalize();
            b[3].setComponents(f - d, m - h, r - p, c - t).normalize();
            b[4].setComponents(f - e, m - k, r - n, c - v).normalize();
            b[5].setComponents(f + e, m + k, r + n, c + v).normalize();
            return this
        },
        intersectsObject: function(a) {
            var b = a.geometry;
            null === b.boundingSphere && b.computeBoundingSphere();
            td.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);
            return this.intersectsSphere(td)
        },
        intersectsSprite: function(a) {
            td.center.set(0, 0, 0);
            td.radius = .7071067811865476;
            td.applyMatrix4(a.matrixWorld);
            return this.intersectsSphere(td)
        },
        intersectsSphere: function(a) {
            var b = this.planes
              , c = a.center;
            a = -a.radius;
            for (var d = 0; 6 > d; d++)
                if (b[d].distanceToPoint(c) < a)
                    return !1;
            return !0
        },
        intersectsBox: function(a) {
            for (var b = this.planes, c = 0; 6 > c; c++) {
                var d = b[c];
                Hf.x = 0 < d.normal.x ? a.max.x : a.min.x;
                Hf.y = 0 < d.normal.y ? a.max.y : a.min.y;
                Hf.z = 0 < d.normal.z ? a.max.z : a.min.z;
                if (0 > d.distanceToPoint(Hf))
                    return !1
            }
            return !0
        },
        containsPoint: function(a) {
            for (var b = this.planes, c = 0; 6 > c; c++)
                if (0 > b[c].distanceToPoint(a))
                    return !1;
            return !0
        }
    });
    var D = {
        common: {
            diffuse: {
                value: new A(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new xa
            },
            uv2Transform: {
                value: new xa
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new v(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 2.5E-4
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2E3
            },
            fogColor: {
                value: new A(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new A(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new xa
            }
        },
        sprite: {
            diffuse: {
                value: new A(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new v(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new xa
            }
        }
    };
    Ed.prototype = Object.create(O.prototype);
    Ed.prototype.constructor = Ed;
    $b.prototype = Object.create(B.prototype);
    $b.prototype.constructor = $b;
    var L = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    }
      , eb = {
        basic: {
            uniforms: va([D.common, D.specularmap, D.envmap, D.aomap, D.lightmap, D.fog]),
            vertexShader: L.meshbasic_vert,
            fragmentShader: L.meshbasic_frag
        },
        lambert: {
            uniforms: va([D.common, D.specularmap, D.envmap, D.aomap, D.lightmap, D.emissivemap, D.fog, D.lights, {
                emissive: {
                    value: new A(0)
                }
            }]),
            vertexShader: L.meshlambert_vert,
            fragmentShader: L.meshlambert_frag
        },
        phong: {
            uniforms: va([D.common, D.specularmap, D.envmap, D.aomap, D.lightmap, D.emissivemap, D.bumpmap, D.normalmap, D.displacementmap, D.fog, D.lights, {
                emissive: {
                    value: new A(0)
                },
                specular: {
                    value: new A(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: L.meshphong_vert,
            fragmentShader: L.meshphong_frag
        },
        standard: {
            uniforms: va([D.common, D.envmap, D.aomap, D.lightmap, D.emissivemap, D.bumpmap, D.normalmap, D.displacementmap, D.roughnessmap, D.metalnessmap, D.fog, D.lights, {
                emissive: {
                    value: new A(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: L.meshphysical_vert,
            fragmentShader: L.meshphysical_frag
        },
        toon: {
            uniforms: va([D.common, D.specularmap, D.aomap, D.lightmap, D.emissivemap, D.bumpmap, D.normalmap, D.displacementmap, D.gradientmap, D.fog, D.lights, {
                emissive: {
                    value: new A(0)
                },
                specular: {
                    value: new A(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: L.meshtoon_vert,
            fragmentShader: L.meshtoon_frag
        },
        matcap: {
            uniforms: va([D.common, D.bumpmap, D.normalmap, D.displacementmap, D.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: L.meshmatcap_vert,
            fragmentShader: L.meshmatcap_frag
        },
        points: {
            uniforms: va([D.points, D.fog]),
            vertexShader: L.points_vert,
            fragmentShader: L.points_frag
        },
        dashed: {
            uniforms: va([D.common, D.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: L.linedashed_vert,
            fragmentShader: L.linedashed_frag
        },
        depth: {
            uniforms: va([D.common, D.displacementmap]),
            vertexShader: L.depth_vert,
            fragmentShader: L.depth_frag
        },
        normal: {
            uniforms: va([D.common, D.bumpmap, D.normalmap, D.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: L.normal_vert,
            fragmentShader: L.normal_frag
        },
        sprite: {
            uniforms: va([D.sprite, D.fog]),
            vertexShader: L.sprite_vert,
            fragmentShader: L.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new xa
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: L.background_vert,
            fragmentShader: L.background_frag
        },
        cube: {
            uniforms: va([D.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: L.cube_vert,
            fragmentShader: L.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: L.equirect_vert,
            fragmentShader: L.equirect_frag
        },
        distanceRGBA: {
            uniforms: va([D.common, D.displacementmap, {
                referencePosition: {
                    value: new n
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1E3
                }
            }]),
            vertexShader: L.distanceRGBA_vert,
            fragmentShader: L.distanceRGBA_frag
        },
        shadow: {
            uniforms: va([D.lights, D.fog, {
                color: {
                    value: new A(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: L.shadow_vert,
            fragmentShader: L.shadow_frag
        }
    };
    eb.physical = {
        uniforms: va([eb.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new v(1,1)
            },
            clearcoatNormalMap: {
                value: null
            },
            sheen: {
                value: new A(0)
            },
            transparency: {
                value: 0
            }
        }]),
        vertexShader: L.meshphysical_vert,
        fragmentShader: L.meshphysical_frag
    };
    pb.prototype = Object.create(V.prototype);
    pb.prototype.constructor = pb;
    pb.prototype.isCubeTexture = !0;
    Object.defineProperty(pb.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(a) {
            this.image = a
        }
    });
    Fc.prototype = Object.create(V.prototype);
    Fc.prototype.constructor = Fc;
    Fc.prototype.isDataTexture2DArray = !0;
    Gc.prototype = Object.create(V.prototype);
    Gc.prototype.constructor = Gc;
    Gc.prototype.isDataTexture3D = !0;
    var Eh = new V
      , Hj = new Fc
      , Jj = new Gc
      , Fh = new pb
      , yh = []
      , Ah = []
      , Dh = new Float32Array(16)
      , Ch = new Float32Array(9)
      , Bh = new Float32Array(4);
    Gh.prototype.updateCache = function(a) {
        var b = this.cache;
        a instanceof Float32Array && b.length !== a.length && (this.cache = new Float32Array(a.length));
        Ia(b, a)
    }
    ;
    Hh.prototype.setValue = function(a, b, c) {
        for (var d = this.seq, e = 0, f = d.length; e !== f; ++e) {
            var g = d[e];
            g.setValue(a, b[g.id], c)
        }
    }
    ;
    var eg = /([\w\d_]+)(\])?(\[|\.)?/g;
    Gb.prototype.setValue = function(a, b, c, d) {
        b = this.map[b];
        void 0 !== b && b.setValue(a, c, d)
    }
    ;
    Gb.prototype.setOptional = function(a, b, c) {
        b = b[c];
        void 0 !== b && this.setValue(a, c, b)
    }
    ;
    Gb.upload = function(a, b, c, d) {
        for (var e = 0, f = b.length; e !== f; ++e) {
            var g = b[e]
              , h = c[g.id];
            !1 !== h.needsUpdate && g.setValue(a, h.value, d)
        }
    }
    ;
    Gb.seqWithValue = function(a, b) {
        for (var c = [], d = 0, e = a.length; d !== e; ++d) {
            var f = a[d];
            f.id in b && c.push(f)
        }
        return c
    }
    ;
    var ok = 0
      , gg = /^[ \t]*#include +<([\w\d./]+)>/gm
      , Qh = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g
      , Ph = /#pragma unroll_loop_start[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g
      , yk = 0;
    Hb.prototype = Object.create(J.prototype);
    Hb.prototype.constructor = Hb;
    Hb.prototype.isMeshDepthMaterial = !0;
    Hb.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.depthPacking = a.depthPacking;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        return this
    }
    ;
    Ib.prototype = Object.create(J.prototype);
    Ib.prototype.constructor = Ib;
    Ib.prototype.isMeshDistanceMaterial = !0;
    Ib.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.referencePosition.copy(a.referencePosition);
        this.nearDistance = a.nearDistance;
        this.farDistance = a.farDistance;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        return this
    }
    ;
    Ke.prototype = Object.assign(Object.create(ba.prototype), {
        constructor: Ke,
        isArrayCamera: !0
    });
    Jc.prototype = Object.assign(Object.create(E.prototype), {
        constructor: Jc,
        isGroup: !0
    });
    Object.assign(Le.prototype, {
        constructor: Le,
        getTargetRaySpace: function() {
            null === this._targetRay && (this._targetRay = new Jc,
            this._targetRay.matrixAutoUpdate = !1,
            this._targetRay.visible = !1);
            return this._targetRay
        },
        getGripSpace: function() {
            null === this._grip && (this._grip = new Jc,
            this._grip.matrixAutoUpdate = !1,
            this._grip.visible = !1);
            return this._grip
        },
        dispatchEvent: function(a) {
            null !== this._targetRay && this._targetRay.dispatchEvent(a);
            null !== this._grip && this._grip.dispatchEvent(a);
            return this
        },
        disconnect: function(a) {
            this.dispatchEvent({
                type: "disconnected",
                data: a
            });
            null !== this._targetRay && (this._targetRay.visible = !1);
            null !== this._grip && (this._grip.visible = !1);
            return this
        },
        update: function(a, b, c) {
            var d = null
              , e = null
              , f = this._targetRay
              , g = this._grip;
            a && (null !== f && (d = b.getPose(a.targetRaySpace, c),
            null !== d && (f.matrix.fromArray(d.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale))),
            null !== g && a.gripSpace && (e = b.getPose(a.gripSpace, c),
            null !== e && (g.matrix.fromArray(e.transform.matrix),
            g.matrix.decompose(g.position, g.rotation, g.scale))));
            null !== f && (f.visible = null !== d);
            null !== g && (g.visible = null !== e);
            return this
        }
    });
    Object.assign(Xh.prototype, ua.prototype);
    Object.assign(Me.prototype, {
        isFogExp2: !0,
        clone: function() {
            return new Me(this.color,this.density)
        },
        toJSON: function() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
    });
    Object.assign(Ne.prototype, {
        isFog: !0,
        clone: function() {
            return new Ne(this.color,this.near,this.far)
        },
        toJSON: function() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    });
    Object.defineProperty(qb.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(qb.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setUsage: function(a) {
            this.usage = a;
            return this
        },
        copy: function(a) {
            this.array = new a.array.constructor(a.array);
            this.count = a.count;
            this.stride = a.stride;
            this.usage = a.usage;
            return this
        },
        copyAt: function(a, b, c) {
            a *= this.stride;
            c *= b.stride;
            for (var d = 0, e = this.stride; d < e; d++)
                this.array[a + d] = b.array[c + d];
            return this
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(a) {
            this.onUploadCallback = a;
            return this
        }
    });
    var rc = new n;
    Object.defineProperties(Kd.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    });
    Object.assign(Kd.prototype, {
        isInterleavedBufferAttribute: !0,
        applyMatrix4: function(a) {
            for (var b = 0, c = this.data.count; b < c; b++)
                rc.x = this.getX(b),
                rc.y = this.getY(b),
                rc.z = this.getZ(b),
                rc.applyMatrix4(a),
                this.setXYZ(b, rc.x, rc.y, rc.z);
            return this
        },
        setX: function(a, b) {
            this.data.array[a * this.data.stride + this.offset] = b;
            return this
        },
        setY: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 1] = b;
            return this
        },
        setZ: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 2] = b;
            return this
        },
        setW: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 3] = b;
            return this
        },
        getX: function(a) {
            return this.data.array[a * this.data.stride + this.offset]
        },
        getY: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 1]
        },
        getZ: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 2]
        },
        getW: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 3]
        },
        setXY: function(a, b, c) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            return this
        },
        setXYZ: function(a, b, c, d) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            return this
        },
        setXYZW: function(a, b, c, d, e) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            this.data.array[a + 3] = e;
            return this
        }
    });
    Kb.prototype = Object.create(J.prototype);
    Kb.prototype.constructor = Kb;
    Kb.prototype.isSpriteMaterial = !0;
    Kb.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.rotation = a.rotation;
        this.sizeAttenuation = a.sizeAttenuation;
        return this
    }
    ;
    var Kc, we = new n, ud = new n, vd = new n, Lc = new v, Md = new v, Zh = new P, If = new n, xe = new n, Jf = new n, Gi = new v, jh = new v, Hi = new v;
    Ld.prototype = Object.assign(Object.create(E.prototype), {
        constructor: Ld,
        isSprite: !0,
        raycast: function(a, b) {
            null === a.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
            ud.setFromMatrixScale(this.matrixWorld);
            Zh.copy(a.camera.matrixWorld);
            this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse, this.matrixWorld);
            vd.setFromMatrixPosition(this.modelViewMatrix);
            a.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && ud.multiplyScalar(-vd.z);
            var c = this.material.rotation;
            if (0 !== c) {
                var d = Math.cos(c);
                var e = Math.sin(c)
            }
            c = this.center;
            Oe(If.set(-.5, -.5, 0), vd, c, ud, e, d);
            Oe(xe.set(.5, -.5, 0), vd, c, ud, e, d);
            Oe(Jf.set(.5, .5, 0), vd, c, ud, e, d);
            Gi.set(0, 0);
            jh.set(1, 0);
            Hi.set(1, 1);
            var f = a.ray.intersectTriangle(If, xe, Jf, !1, we);
            if (null === f && (Oe(xe.set(-.5, .5, 0), vd, c, ud, e, d),
            jh.set(0, 1),
            f = a.ray.intersectTriangle(If, Jf, xe, !1, we),
            null === f))
                return;
            e = a.ray.origin.distanceTo(we);
            e < a.near || e > a.far || b.push({
                distance: e,
                point: we.clone(),
                uv: wa.getUV(we, If, xe, Jf, Gi, jh, Hi, new v),
                face: null,
                object: this
            })
        },
        clone: function() {
            return (new this.constructor(this.material)).copy(this)
        },
        copy: function(a) {
            E.prototype.copy.call(this, a);
            void 0 !== a.center && this.center.copy(a.center);
            return this
        }
    });
    var Kf = new n
      , Ii = new n;
    Nd.prototype = Object.assign(Object.create(E.prototype), {
        constructor: Nd,
        isLOD: !0,
        copy: function(a) {
            E.prototype.copy.call(this, a, !1);
            for (var b = a.levels, c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                this.addLevel(e.object.clone(), e.distance)
            }
            this.autoUpdate = a.autoUpdate;
            return this
        },
        addLevel: function(a, b) {
            void 0 === b && (b = 0);
            b = Math.abs(b);
            for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++)
                ;
            c.splice(d, 0, {
                distance: b,
                object: a
            });
            this.add(a);
            return this
        },
        getCurrentLevel: function() {
            return this._currentLevel
        },
        getObjectForDistance: function(a) {
            var b = this.levels;
            if (0 < b.length) {
                for (var c = 1, d = b.length; c < d && !(a < b[c].distance); c++)
                    ;
                return b[c - 1].object
            }
            return null
        },
        raycast: function(a, b) {
            if (0 < this.levels.length) {
                Kf.setFromMatrixPosition(this.matrixWorld);
                var c = a.ray.origin.distanceTo(Kf);
                this.getObjectForDistance(c).raycast(a, b)
            }
        },
        update: function(a) {
            var b = this.levels;
            if (1 < b.length) {
                Kf.setFromMatrixPosition(a.matrixWorld);
                Ii.setFromMatrixPosition(this.matrixWorld);
                a = Kf.distanceTo(Ii) / a.zoom;
                b[0].object.visible = !0;
                for (var c = 1, d = b.length; c < d; c++)
                    if (a >= b[c].distance)
                        b[c - 1].object.visible = !1,
                        b[c].object.visible = !0;
                    else
                        break;
                for (this._currentLevel = c - 1; c < d; c++)
                    b[c].object.visible = !1
            }
        },
        toJSON: function(a) {
            a = E.prototype.toJSON.call(this, a);
            !1 === this.autoUpdate && (a.object.autoUpdate = !1);
            a.object.levels = [];
            for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                a.object.levels.push({
                    object: e.object.uuid,
                    distance: e.distance
                })
            }
            return a
        }
    });
    Pe.prototype = Object.assign(Object.create(ja.prototype), {
        constructor: Pe,
        isSkinnedMesh: !0,
        bind: function(a, b) {
            this.skeleton = a;
            void 0 === b && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            b = this.matrixWorld);
            this.bindMatrix.copy(b);
            this.bindMatrixInverse.getInverse(b)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            for (var a = new ca, b = this.geometry.attributes.skinWeight, c = 0, d = b.count; c < d; c++) {
                a.x = b.getX(c);
                a.y = b.getY(c);
                a.z = b.getZ(c);
                a.w = b.getW(c);
                var e = 1 / a.manhattanLength();
                Infinity !== e ? a.multiplyScalar(e) : a.set(1, 0, 0, 0);
                b.setXYZW(c, a.x, a.y, a.z, a.w)
            }
        },
        updateMatrixWorld: function(a) {
            ja.prototype.updateMatrixWorld.call(this, a);
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return (new this.constructor(this.geometry,this.material)).copy(this)
        },
        boneTransform: function() {
            var a = new n
              , b = new ca
              , c = new ca
              , d = new n
              , e = new P;
            return function(f, g) {
                var h = this.skeleton
                  , k = this.geometry;
                b.fromBufferAttribute(k.attributes.skinIndex, f);
                c.fromBufferAttribute(k.attributes.skinWeight, f);
                a.fromBufferAttribute(k.attributes.position, f).applyMatrix4(this.bindMatrix);
                g.set(0, 0, 0);
                for (f = 0; 4 > f; f++)
                    if (k = c.getComponent(f),
                    0 !== k) {
                        var m = b.getComponent(f);
                        e.multiplyMatrices(h.bones[m].matrixWorld, h.boneInverses[m]);
                        g.addScaledVector(d.copy(a).applyMatrix4(e), k)
                    }
                return g.applyMatrix4(this.bindMatrixInverse)
            }
        }()
    });
    var Ji = new P
      , Sk = new P;
    Object.assign(Qe.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var a = 0, b = this.bones.length; a < b; a++) {
                var c = new P;
                this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
                this.boneInverses.push(c)
            }
        },
        pose: function() {
            var a, b;
            var c = 0;
            for (b = this.bones.length; c < b; c++)
                (a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]);
            c = 0;
            for (b = this.bones.length; c < b; c++)
                if (a = this.bones[c])
                    a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld),
                    a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld),
                    a.matrix.decompose(a.position, a.quaternion, a.scale)
        },
        update: function() {
            for (var a = this.bones, b = this.boneInverses, c = this.boneMatrices, d = this.boneTexture, e = 0, f = a.length; e < f; e++)
                Ji.multiplyMatrices(a[e] ? a[e].matrixWorld : Sk, b[e]),
                Ji.toArray(c, 16 * e);
            void 0 !== d && (d.needsUpdate = !0)
        },
        clone: function() {
            return new Qe(this.bones,this.boneInverses)
        },
        getBoneByName: function(a) {
            for (var b = 0, c = this.bones.length; b < c; b++) {
                var d = this.bones[b];
                if (d.name === a)
                    return d
            }
        },
        dispose: function() {
            this.boneTexture && (this.boneTexture.dispose(),
            this.boneTexture = void 0)
        }
    });
    ng.prototype = Object.assign(Object.create(E.prototype), {
        constructor: ng,
        isBone: !0
    });
    var Ki = new P
      , Li = new P
      , Lf = []
      , ye = new ja;
    Re.prototype = Object.assign(Object.create(ja.prototype), {
        constructor: Re,
        isInstancedMesh: !0,
        getMatrixAt: function(a, b) {
            b.fromArray(this.instanceMatrix.array, 16 * a)
        },
        raycast: function(a, b) {
            var c = this.matrixWorld
              , d = this.count;
            ye.geometry = this.geometry;
            ye.material = this.material;
            if (void 0 !== ye.material)
                for (var e = 0; e < d; e++) {
                    this.getMatrixAt(e, Ki);
                    Li.multiplyMatrices(c, Ki);
                    ye.matrixWorld = Li;
                    ye.raycast(a, Lf);
                    for (var f = 0, g = Lf.length; f < g; f++) {
                        var h = Lf[f];
                        h.instanceId = e;
                        h.object = this;
                        b.push(h)
                    }
                    Lf.length = 0
                }
        },
        setMatrixAt: function(a, b) {
            b.toArray(this.instanceMatrix.array, 16 * a)
        },
        updateMorphTargets: function() {}
    });
    da.prototype = Object.create(J.prototype);
    da.prototype.constructor = da;
    da.prototype.isLineBasicMaterial = !0;
    da.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.linewidth = a.linewidth;
        this.linecap = a.linecap;
        this.linejoin = a.linejoin;
        return this
    }
    ;
    var Mi = new n
      , Ni = new n
      , Oi = new P
      , Mf = new Wb
      , ze = new cb;
    Ja.prototype = Object.assign(Object.create(E.prototype), {
        constructor: Ja,
        isLine: !0,
        computeLineDistances: function() {
            var a = this.geometry;
            if (a.isBufferGeometry)
                if (null === a.index) {
                    for (var b = a.attributes.position, c = [0], d = 1, e = b.count; d < e; d++)
                        Mi.fromBufferAttribute(b, d - 1),
                        Ni.fromBufferAttribute(b, d),
                        c[d] = c[d - 1],
                        c[d] += Mi.distanceTo(Ni);
                    a.setAttribute("lineDistance", new y(c,1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (a.isGeometry)
                for (b = a.vertices,
                c = a.lineDistances,
                c[0] = 0,
                d = 1,
                e = b.length; d < e; d++)
                    c[d] = c[d - 1],
                    c[d] += b[d - 1].distanceTo(b[d]);
            return this
        },
        raycast: function(a, b) {
            var c = this.geometry
              , d = this.matrixWorld
              , e = a.params.Line.threshold;
            null === c.boundingSphere && c.computeBoundingSphere();
            ze.copy(c.boundingSphere);
            ze.applyMatrix4(d);
            ze.radius += e;
            if (!1 !== a.ray.intersectsSphere(ze)) {
                Oi.getInverse(d);
                Mf.copy(a.ray).applyMatrix4(Oi);
                d = e / ((this.scale.x + this.scale.y + this.scale.z) / 3);
                d *= d;
                var f = new n
                  , g = new n;
                e = new n;
                var h = new n
                  , k = this && this.isLineSegments ? 2 : 1;
                if (c.isBufferGeometry) {
                    var m = c.index
                      , l = c.attributes.position.array;
                    if (null !== m) {
                        m = m.array;
                        c = 0;
                        for (var p = m.length - 1; c < p; c += k) {
                            var u = m[c + 1];
                            f.fromArray(l, 3 * m[c]);
                            g.fromArray(l, 3 * u);
                            u = Mf.distanceSqToSegment(f, g, h, e);
                            u > d || (h.applyMatrix4(this.matrixWorld),
                            u = a.ray.origin.distanceTo(h),
                            u < a.near || u > a.far || b.push({
                                distance: u,
                                point: e.clone().applyMatrix4(this.matrixWorld),
                                index: c,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                        }
                    } else
                        for (c = 0,
                        p = l.length / 3 - 1; c < p; c += k)
                            f.fromArray(l, 3 * c),
                            g.fromArray(l, 3 * c + 3),
                            u = Mf.distanceSqToSegment(f, g, h, e),
                            u > d || (h.applyMatrix4(this.matrixWorld),
                            u = a.ray.origin.distanceTo(h),
                            u < a.near || u > a.far || b.push({
                                distance: u,
                                point: e.clone().applyMatrix4(this.matrixWorld),
                                index: c,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                } else if (c.isGeometry)
                    for (f = c.vertices,
                    g = f.length,
                    c = 0; c < g - 1; c += k)
                        u = Mf.distanceSqToSegment(f[c], f[c + 1], h, e),
                        u > d || (h.applyMatrix4(this.matrixWorld),
                        u = a.ray.origin.distanceTo(h),
                        u < a.near || u > a.far || b.push({
                            distance: u,
                            point: e.clone().applyMatrix4(this.matrixWorld),
                            index: c,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
            }
        },
        clone: function() {
            return (new this.constructor(this.geometry,this.material)).copy(this)
        }
    });
    var Nf = new n
      , Of = new n;
    na.prototype = Object.assign(Object.create(Ja.prototype), {
        constructor: na,
        isLineSegments: !0,
        computeLineDistances: function() {
            var a = this.geometry;
            if (a.isBufferGeometry)
                if (null === a.index) {
                    for (var b = a.attributes.position, c = [], d = 0, e = b.count; d < e; d += 2)
                        Nf.fromBufferAttribute(b, d),
                        Of.fromBufferAttribute(b, d + 1),
                        c[d] = 0 === d ? 0 : c[d - 1],
                        c[d + 1] = c[d] + Nf.distanceTo(Of);
                    a.setAttribute("lineDistance", new y(c,1))
                } else
                    console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (a.isGeometry)
                for (b = a.vertices,
                c = a.lineDistances,
                d = 0,
                e = b.length; d < e; d += 2)
                    Nf.copy(b[d]),
                    Of.copy(b[d + 1]),
                    c[d] = 0 === d ? 0 : c[d - 1],
                    c[d + 1] = c[d] + Nf.distanceTo(Of);
            return this
        }
    });
    Se.prototype = Object.assign(Object.create(Ja.prototype), {
        constructor: Se,
        isLineLoop: !0
    });
    Va.prototype = Object.create(J.prototype);
    Va.prototype.constructor = Va;
    Va.prototype.isPointsMaterial = !0;
    Va.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.size = a.size;
        this.sizeAttenuation = a.sizeAttenuation;
        this.morphTargets = a.morphTargets;
        return this
    }
    ;
    var Pi = new P
      , pg = new Wb
      , Ae = new cb
      , Pf = new n;
    Mc.prototype = Object.assign(Object.create(E.prototype), {
        constructor: Mc,
        isPoints: !0,
        raycast: function(a, b) {
            var c = this.geometry
              , d = this.matrixWorld
              , e = a.params.Points.threshold;
            null === c.boundingSphere && c.computeBoundingSphere();
            Ae.copy(c.boundingSphere);
            Ae.applyMatrix4(d);
            Ae.radius += e;
            if (!1 !== a.ray.intersectsSphere(Ae))
                if (Pi.getInverse(d),
                pg.copy(a.ray).applyMatrix4(Pi),
                e /= (this.scale.x + this.scale.y + this.scale.z) / 3,
                e *= e,
                c.isBufferGeometry) {
                    var f = c.index;
                    c = c.attributes.position.array;
                    if (null !== f) {
                        var g = f.array;
                        f = 0;
                        for (var h = g.length; f < h; f++) {
                            var k = g[f];
                            Pf.fromArray(c, 3 * k);
                            og(Pf, k, e, d, a, b, this)
                        }
                    } else
                        for (f = 0,
                        g = c.length / 3; f < g; f++)
                            Pf.fromArray(c, 3 * f),
                            og(Pf, f, e, d, a, b, this)
                } else
                    for (c = c.vertices,
                    f = 0,
                    g = c.length; f < g; f++)
                        og(c[f], f, e, d, a, b, this)
        },
        updateMorphTargets: function() {
            var a = this.geometry;
            if (a.isBufferGeometry) {
                a = a.morphAttributes;
                var b = Object.keys(a);
                if (0 < b.length) {
                    var c = a[b[0]];
                    if (void 0 !== c)
                        for (this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {},
                        a = 0,
                        b = c.length; a < b; a++) {
                            var d = c[a].name || String(a);
                            this.morphTargetInfluences.push(0);
                            this.morphTargetDictionary[d] = a
                        }
                }
            } else
                a = a.morphTargets,
                void 0 !== a && 0 < a.length && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        },
        clone: function() {
            return (new this.constructor(this.geometry,this.material)).copy(this)
        }
    });
    qg.prototype = Object.assign(Object.create(V.prototype), {
        constructor: qg,
        isVideoTexture: !0,
        update: function() {
            var a = this.image;
            a.readyState >= a.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    });
    Nc.prototype = Object.create(V.prototype);
    Nc.prototype.constructor = Nc;
    Nc.prototype.isCompressedTexture = !0;
    Od.prototype = Object.create(V.prototype);
    Od.prototype.constructor = Od;
    Od.prototype.isCanvasTexture = !0;
    Pd.prototype = Object.create(V.prototype);
    Pd.prototype.constructor = Pd;
    Pd.prototype.isDepthTexture = !0;
    Oc.prototype = Object.create(B.prototype);
    Oc.prototype.constructor = Oc;
    Qd.prototype = Object.create(O.prototype);
    Qd.prototype.constructor = Qd;
    Pc.prototype = Object.create(B.prototype);
    Pc.prototype.constructor = Pc;
    Rd.prototype = Object.create(O.prototype);
    Rd.prototype.constructor = Rd;
    Ea.prototype = Object.create(B.prototype);
    Ea.prototype.constructor = Ea;
    Sd.prototype = Object.create(O.prototype);
    Sd.prototype.constructor = Sd;
    Qc.prototype = Object.create(Ea.prototype);
    Qc.prototype.constructor = Qc;
    Td.prototype = Object.create(O.prototype);
    Td.prototype.constructor = Td;
    ac.prototype = Object.create(Ea.prototype);
    ac.prototype.constructor = ac;
    Ud.prototype = Object.create(O.prototype);
    Ud.prototype.constructor = Ud;
    Rc.prototype = Object.create(Ea.prototype);
    Rc.prototype.constructor = Rc;
    Vd.prototype = Object.create(O.prototype);
    Vd.prototype.constructor = Vd;
    Sc.prototype = Object.create(Ea.prototype);
    Sc.prototype.constructor = Sc;
    Wd.prototype = Object.create(O.prototype);
    Wd.prototype.constructor = Wd;
    bc.prototype = Object.create(B.prototype);
    bc.prototype.constructor = bc;
    bc.prototype.toJSON = function() {
        var a = B.prototype.toJSON.call(this);
        a.path = this.parameters.path.toJSON();
        return a
    }
    ;
    Xd.prototype = Object.create(O.prototype);
    Xd.prototype.constructor = Xd;
    Tc.prototype = Object.create(B.prototype);
    Tc.prototype.constructor = Tc;
    Yd.prototype = Object.create(O.prototype);
    Yd.prototype.constructor = Yd;
    Uc.prototype = Object.create(B.prototype);
    Uc.prototype.constructor = Uc;
    var Tk = {
        triangulate: function(a, b, c) {
            c = c || 2;
            var d = b && b.length
              , e = d ? b[0] * c : a.length
              , f = $h(a, 0, e, c, !0)
              , g = [];
            if (!f || f.next === f.prev)
                return g;
            var h;
            if (d) {
                var k = c;
                d = [];
                var m;
                var l = 0;
                for (m = b.length; l < m; l++) {
                    var p = b[l] * k;
                    var n = l < m - 1 ? b[l + 1] * k : a.length;
                    p = $h(a, p, n, k, !1);
                    p === p.next && (p.steiner = !0);
                    d.push(Fk(p))
                }
                d.sort(Dk);
                for (l = 0; l < d.length; l++) {
                    k = d[l];
                    b = f;
                    if (b = Ek(k, b))
                        k = ci(b, k),
                        Lb(b, b.next),
                        Lb(k, k.next);
                    f = Lb(f, f.next)
                }
            }
            if (a.length > 80 * c) {
                var r = h = a[0];
                var q = d = a[1];
                for (k = c; k < e; k += c)
                    l = a[k],
                    b = a[k + 1],
                    l < r && (r = l),
                    b < q && (q = b),
                    l > h && (h = l),
                    b > d && (d = b);
                h = Math.max(h - r, d - q);
                h = 0 !== h ? 1 / h : 0
            }
            $d(f, g, c, r, q, h);
            return g
        }
    }
      , rb = {
        area: function(a) {
            for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)
                c += a[d].x * a[e].y - a[e].x * a[d].y;
            return .5 * c
        },
        isClockWise: function(a) {
            return 0 > rb.area(a)
        },
        triangulateShape: function(a, b) {
            var c = []
              , d = []
              , e = [];
            di(a);
            ei(c, a);
            var f = a.length;
            b.forEach(di);
            for (a = 0; a < b.length; a++)
                d.push(f),
                f += b[a].length,
                ei(c, b[a]);
            b = Tk.triangulate(c, d);
            for (a = 0; a < b.length; a += 3)
                e.push(b.slice(a, a + 3));
            return e
        }
    };
    cc.prototype = Object.create(O.prototype);
    cc.prototype.constructor = cc;
    cc.prototype.toJSON = function() {
        var a = O.prototype.toJSON.call(this);
        return fi(this.parameters.shapes, this.parameters.options, a)
    }
    ;
    fb.prototype = Object.create(B.prototype);
    fb.prototype.constructor = fb;
    fb.prototype.toJSON = function() {
        var a = B.prototype.toJSON.call(this);
        return fi(this.parameters.shapes, this.parameters.options, a)
    }
    ;
    var Gk = {
        generateTopUV: function(a, b, c, d, e) {
            a = b[3 * d];
            d = b[3 * d + 1];
            var f = b[3 * e];
            e = b[3 * e + 1];
            return [new v(b[3 * c],b[3 * c + 1]), new v(a,d), new v(f,e)]
        },
        generateSideWallUV: function(a, b, c, d, e, f) {
            a = b[3 * c];
            var g = b[3 * c + 1];
            c = b[3 * c + 2];
            var h = b[3 * d]
              , k = b[3 * d + 1];
            d = b[3 * d + 2];
            var l = b[3 * e]
              , n = b[3 * e + 1];
            e = b[3 * e + 2];
            var p = b[3 * f]
              , u = b[3 * f + 1];
            b = b[3 * f + 2];
            return .01 > Math.abs(g - k) ? [new v(a,1 - c), new v(h,1 - d), new v(l,1 - e), new v(p,1 - b)] : [new v(g,1 - c), new v(k,1 - d), new v(n,1 - e), new v(u,1 - b)]
        }
    };
    be.prototype = Object.create(O.prototype);
    be.prototype.constructor = be;
    Wc.prototype = Object.create(fb.prototype);
    Wc.prototype.constructor = Wc;
    ce.prototype = Object.create(O.prototype);
    ce.prototype.constructor = ce;
    dc.prototype = Object.create(B.prototype);
    dc.prototype.constructor = dc;
    de.prototype = Object.create(O.prototype);
    de.prototype.constructor = de;
    Xc.prototype = Object.create(B.prototype);
    Xc.prototype.constructor = Xc;
    ee.prototype = Object.create(O.prototype);
    ee.prototype.constructor = ee;
    Yc.prototype = Object.create(B.prototype);
    Yc.prototype.constructor = Yc;
    ec.prototype = Object.create(O.prototype);
    ec.prototype.constructor = ec;
    ec.prototype.toJSON = function() {
        var a = O.prototype.toJSON.call(this);
        return gi(this.parameters.shapes, a)
    }
    ;
    fc.prototype = Object.create(B.prototype);
    fc.prototype.constructor = fc;
    fc.prototype.toJSON = function() {
        var a = B.prototype.toJSON.call(this);
        return gi(this.parameters.shapes, a)
    }
    ;
    Zc.prototype = Object.create(B.prototype);
    Zc.prototype.constructor = Zc;
    gc.prototype = Object.create(O.prototype);
    gc.prototype.constructor = gc;
    sb.prototype = Object.create(B.prototype);
    sb.prototype.constructor = sb;
    fe.prototype = Object.create(gc.prototype);
    fe.prototype.constructor = fe;
    ge.prototype = Object.create(sb.prototype);
    ge.prototype.constructor = ge;
    he.prototype = Object.create(O.prototype);
    he.prototype.constructor = he;
    $c.prototype = Object.create(B.prototype);
    $c.prototype.constructor = $c;
    var qa = Object.freeze({
        __proto__: null,
        WireframeGeometry: Oc,
        ParametricGeometry: Qd,
        ParametricBufferGeometry: Pc,
        TetrahedronGeometry: Sd,
        TetrahedronBufferGeometry: Qc,
        OctahedronGeometry: Td,
        OctahedronBufferGeometry: ac,
        IcosahedronGeometry: Ud,
        IcosahedronBufferGeometry: Rc,
        DodecahedronGeometry: Vd,
        DodecahedronBufferGeometry: Sc,
        PolyhedronGeometry: Rd,
        PolyhedronBufferGeometry: Ea,
        TubeGeometry: Wd,
        TubeBufferGeometry: bc,
        TorusKnotGeometry: Xd,
        TorusKnotBufferGeometry: Tc,
        TorusGeometry: Yd,
        TorusBufferGeometry: Uc,
        TextGeometry: be,
        TextBufferGeometry: Wc,
        SphereGeometry: ce,
        SphereBufferGeometry: dc,
        RingGeometry: de,
        RingBufferGeometry: Xc,
        PlaneGeometry: Ed,
        PlaneBufferGeometry: $b,
        LatheGeometry: ee,
        LatheBufferGeometry: Yc,
        ShapeGeometry: ec,
        ShapeBufferGeometry: fc,
        ExtrudeGeometry: cc,
        ExtrudeBufferGeometry: fb,
        EdgesGeometry: Zc,
        ConeGeometry: fe,
        ConeBufferGeometry: ge,
        CylinderGeometry: gc,
        CylinderBufferGeometry: sb,
        CircleGeometry: he,
        CircleBufferGeometry: $c,
        BoxGeometry: ih,
        BoxBufferGeometry: Fd
    });
    hc.prototype = Object.create(J.prototype);
    hc.prototype.constructor = hc;
    hc.prototype.isShadowMaterial = !0;
    hc.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        return this
    }
    ;
    tb.prototype = Object.create(Aa.prototype);
    tb.prototype.constructor = tb;
    tb.prototype.isRawShaderMaterial = !0;
    gb.prototype = Object.create(J.prototype);
    gb.prototype.constructor = gb;
    gb.prototype.isMeshStandardMaterial = !0;
    gb.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.defines = {
            STANDARD: ""
        };
        this.color.copy(a.color);
        this.roughness = a.roughness;
        this.metalness = a.metalness;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.roughnessMap = a.roughnessMap;
        this.metalnessMap = a.metalnessMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.envMapIntensity = a.envMapIntensity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        this.vertexTangents = a.vertexTangents;
        return this
    }
    ;
    ic.prototype = Object.create(gb.prototype);
    ic.prototype.constructor = ic;
    ic.prototype.isMeshPhysicalMaterial = !0;
    ic.prototype.copy = function(a) {
        gb.prototype.copy.call(this, a);
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        };
        this.clearcoat = a.clearcoat;
        this.clearcoatMap = a.clearcoatMap;
        this.clearcoatRoughness = a.clearcoatRoughness;
        this.clearcoatRoughnessMap = a.clearcoatRoughnessMap;
        this.clearcoatNormalMap = a.clearcoatNormalMap;
        this.clearcoatNormalScale.copy(a.clearcoatNormalScale);
        this.reflectivity = a.reflectivity;
        this.sheen = a.sheen ? (this.sheen || new A).copy(a.sheen) : null;
        this.transparency = a.transparency;
        return this
    }
    ;
    Mb.prototype = Object.create(J.prototype);
    Mb.prototype.constructor = Mb;
    Mb.prototype.isMeshPhongMaterial = !0;
    Mb.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.specular.copy(a.specular);
        this.shininess = a.shininess;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    }
    ;
    jc.prototype = Object.create(J.prototype);
    jc.prototype.constructor = jc;
    jc.prototype.isMeshToonMaterial = !0;
    jc.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.specular.copy(a.specular);
        this.shininess = a.shininess;
        this.map = a.map;
        this.gradientMap = a.gradientMap;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    }
    ;
    kc.prototype = Object.create(J.prototype);
    kc.prototype.constructor = kc;
    kc.prototype.isMeshNormalMaterial = !0;
    kc.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    }
    ;
    lc.prototype = Object.create(J.prototype);
    lc.prototype.constructor = lc;
    lc.prototype.isMeshLambertMaterial = !0;
    lc.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    }
    ;
    mc.prototype = Object.create(J.prototype);
    mc.prototype.constructor = mc;
    mc.prototype.isMeshMatcapMaterial = !0;
    mc.prototype.copy = function(a) {
        J.prototype.copy.call(this, a);
        this.defines = {
            MATCAP: ""
        };
        this.color.copy(a.color);
        this.matcap = a.matcap;
        this.map = a.map;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalMapType = a.normalMapType;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.alphaMap = a.alphaMap;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    }
    ;
    nc.prototype = Object.create(da.prototype);
    nc.prototype.constructor = nc;
    nc.prototype.isLineDashedMaterial = !0;
    nc.prototype.copy = function(a) {
        da.prototype.copy.call(this, a);
        this.scale = a.scale;
        this.dashSize = a.dashSize;
        this.gapSize = a.gapSize;
        return this
    }
    ;
    var Uk = Object.freeze({
        __proto__: null,
        ShadowMaterial: hc,
        SpriteMaterial: Kb,
        RawShaderMaterial: tb,
        ShaderMaterial: Aa,
        PointsMaterial: Va,
        MeshPhysicalMaterial: ic,
        MeshStandardMaterial: gb,
        MeshPhongMaterial: Mb,
        MeshToonMaterial: jc,
        MeshNormalMaterial: kc,
        MeshLambertMaterial: lc,
        MeshDepthMaterial: Hb,
        MeshDistanceMaterial: Ib,
        MeshBasicMaterial: Na,
        MeshMatcapMaterial: mc,
        LineDashedMaterial: nc,
        LineBasicMaterial: da,
        Material: J
    })
      , ka = {
        arraySlice: function(a, b, c) {
            return ka.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c)
        },
        convertArray: function(a, b, c) {
            return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
        },
        isTypedArray: function(a) {
            return ArrayBuffer.isView(a) && !(a instanceof DataView)
        },
        getKeyframeOrder: function(a) {
            for (var b = a.length, c = Array(b), d = 0; d !== b; ++d)
                c[d] = d;
            c.sort(function(b, c) {
                return a[b] - a[c]
            });
            return c
        },
        sortedArray: function(a, b, c) {
            for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f)
                for (var h = c[f] * b, k = 0; k !== b; ++k)
                    e[g++] = a[h + k];
            return e
        },
        flattenJSON: function(a, b, c, d) {
            for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d]; )
                f = a[e++];
            if (void 0 !== f) {
                var g = f[d];
                if (void 0 !== g)
                    if (Array.isArray(g)) {
                        do
                            g = f[d],
                            void 0 !== g && (b.push(f.time),
                            c.push.apply(c, g)),
                            f = a[e++];
                        while (void 0 !== f)
                    } else if (void 0 !== g.toArray) {
                        do
                            g = f[d],
                            void 0 !== g && (b.push(f.time),
                            g.toArray(c, c.length)),
                            f = a[e++];
                        while (void 0 !== f)
                    } else {
                        do
                            g = f[d],
                            void 0 !== g && (b.push(f.time),
                            c.push(g)),
                            f = a[e++];
                        while (void 0 !== f)
                    }
            }
        },
        subclip: function(a, b, c, d, e) {
            e = e || 30;
            a = a.clone();
            a.name = b;
            var f = [];
            for (b = 0; b < a.tracks.length; ++b) {
                for (var g = a.tracks[b], h = g.getValueSize(), k = [], l = [], n = 0; n < g.times.length; ++n) {
                    var p = g.times[n] * e;
                    if (!(p < c || p >= d))
                        for (k.push(g.times[n]),
                        p = 0; p < h; ++p)
                            l.push(g.values[n * h + p])
                }
                0 !== k.length && (g.times = ka.convertArray(k, g.times.constructor),
                g.values = ka.convertArray(l, g.values.constructor),
                f.push(g))
            }
            a.tracks = f;
            c = Infinity;
            for (b = 0; b < a.tracks.length; ++b)
                c > a.tracks[b].times[0] && (c = a.tracks[b].times[0]);
            for (b = 0; b < a.tracks.length; ++b)
                a.tracks[b].shift(-1 * c);
            a.resetDuration();
            return a
        },
        makeClipAdditive: function(a, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = a);
            if (void 0 === d || 0 >= d)
                d = 30;
            var e = a.tracks.length;
            b /= d;
            for (d = 0; d < e; ++d) {
                var f = c.tracks[d]
                  , g = f.ValueTypeName;
                if ("bool" !== g && "string" !== g) {
                    var h = a.tracks.find(function(a) {
                        return a.name === f.name && a.ValueTypeName === g
                    });
                    if (void 0 !== h) {
                        var k = f.getValueSize()
                          , l = f.times.length - 1;
                        b <= f.times[0] ? l = ka.arraySlice(f.values, 0, f.valueSize) : b >= f.times[l] ? l = ka.arraySlice(f.values, l * k) : (l = f.createInterpolant(),
                        l.evaluate(b),
                        l = l.resultBuffer);
                        "quaternion" === g && (new la(l[0],l[1],l[2],l[3])).normalize().conjugate().toArray(l);
                        for (var n = h.times.length, p = 0; p < n; ++p) {
                            var u = p * k;
                            if ("quaternion" === g)
                                la.multiplyQuaternionsFlat(h.values, u, l, 0, h.values, u);
                            else
                                for (var r = 0; r < k; ++r)
                                    h.values[u + r] -= l[r]
                        }
                    }
                }
            }
            a.blendMode = 2501;
            return a
        }
    };
    Object.assign(Ka.prototype, {
        evaluate: function(a) {
            var b = this.parameterPositions
              , c = this._cachedIndex
              , d = b[c]
              , e = b[c - 1];
            a: {
                b: {
                    c: {
                        d: if (!(a < d)) {
                            for (var f = c + 2; ; ) {
                                if (void 0 === d) {
                                    if (a < e)
                                        break d;
                                    this._cachedIndex = c = b.length;
                                    return this.afterEnd_(c - 1, a, e)
                                }
                                if (c === f)
                                    break;
                                e = d;
                                d = b[++c];
                                if (a < d)
                                    break b
                            }
                            d = b.length;
                            break c
                        }
                        if (a >= e)
                            break a;
                        else {
                            f = b[1];
                            a < f && (c = 2,
                            e = f);
                            for (f = c - 2; ; ) {
                                if (void 0 === e)
                                    return this._cachedIndex = 0,
                                    this.beforeStart_(0, a, d);
                                if (c === f)
                                    break;
                                d = e;
                                e = b[--c - 1];
                                if (a >= e)
                                    break b
                            }
                            d = c;
                            c = 0
                        }
                    }
                    for (; c < d; )
                        e = c + d >>> 1,
                        a < b[e] ? d = e : c = e + 1;
                    d = b[c];
                    e = b[c - 1];
                    if (void 0 === e)
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, a, d);
                    if (void 0 === d)
                        return this._cachedIndex = c = b.length,
                        this.afterEnd_(c - 1, e, a)
                }
                this._cachedIndex = c;
                this.intervalChanged_(c, e, d)
            }
            return this.interpolate_(c, e, a, d)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(a) {
            var b = this.resultBuffer
              , c = this.sampleValues
              , d = this.valueSize;
            a *= d;
            for (var e = 0; e !== d; ++e)
                b[e] = c[a + e];
            return b
        },
        interpolate_: function() {
            throw Error("call to abstract method");
        },
        intervalChanged_: function() {}
    });
    Object.assign(Ka.prototype, {
        beforeStart_: Ka.prototype.copySampleValue_,
        afterEnd_: Ka.prototype.copySampleValue_
    });
    We.prototype = Object.assign(Object.create(Ka.prototype), {
        constructor: We,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(a, b, c) {
            var d = this.parameterPositions
              , e = a - 2
              , f = a + 1
              , g = d[e]
              , h = d[f];
            if (void 0 === g)
                switch (this.getSettings_().endingStart) {
                case 2401:
                    e = a;
                    g = 2 * b - c;
                    break;
                case 2402:
                    e = d.length - 2;
                    g = b + d[e] - d[e + 1];
                    break;
                default:
                    e = a,
                    g = c
                }
            if (void 0 === h)
                switch (this.getSettings_().endingEnd) {
                case 2401:
                    f = a;
                    h = 2 * c - b;
                    break;
                case 2402:
                    f = 1;
                    h = c + d[1] - d[0];
                    break;
                default:
                    f = a - 1,
                    h = b
                }
            a = .5 * (c - b);
            d = this.valueSize;
            this._weightPrev = a / (b - g);
            this._weightNext = a / (h - c);
            this._offsetPrev = e * d;
            this._offsetNext = f * d
        },
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer
              , f = this.sampleValues
              , g = this.valueSize;
            a *= g;
            var h = a - g
              , k = this._offsetPrev
              , l = this._offsetNext
              , n = this._weightPrev
              , p = this._weightNext
              , u = (c - b) / (d - b);
            c = u * u;
            d = c * u;
            b = -n * d + 2 * n * c - n * u;
            n = (1 + n) * d + (-1.5 - 2 * n) * c + (-.5 + n) * u + 1;
            u = (-1 - p) * d + (1.5 + p) * c + .5 * u;
            p = p * d - p * c;
            for (c = 0; c !== g; ++c)
                e[c] = b * f[k + c] + n * f[h + c] + u * f[a + c] + p * f[l + c];
            return e
        }
    });
    ie.prototype = Object.assign(Object.create(Ka.prototype), {
        constructor: ie,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer
              , f = this.sampleValues
              , g = this.valueSize;
            a *= g;
            var h = a - g;
            b = (c - b) / (d - b);
            c = 1 - b;
            for (d = 0; d !== g; ++d)
                e[d] = f[h + d] * c + f[a + d] * b;
            return e
        }
    });
    Xe.prototype = Object.assign(Object.create(Ka.prototype), {
        constructor: Xe,
        interpolate_: function(a) {
            return this.copySampleValue_(a - 1)
        }
    });
    Object.assign(sa, {
        toJSON: function(a) {
            var b = a.constructor;
            if (void 0 !== b.toJSON)
                b = b.toJSON(a);
            else {
                b = {
                    name: a.name,
                    times: ka.convertArray(a.times, Array),
                    values: ka.convertArray(a.values, Array)
                };
                var c = a.getInterpolation();
                c !== a.DefaultInterpolation && (b.interpolation = c)
            }
            b.type = a.ValueTypeName;
            return b
        }
    });
    Object.assign(sa.prototype, {
        constructor: sa,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(a) {
            return new Xe(this.times,this.values,this.getValueSize(),a)
        },
        InterpolantFactoryMethodLinear: function(a) {
            return new ie(this.times,this.values,this.getValueSize(),a)
        },
        InterpolantFactoryMethodSmooth: function(a) {
            return new We(this.times,this.values,this.getValueSize(),a)
        },
        setInterpolation: function(a) {
            switch (a) {
            case 2300:
                var b = this.InterpolantFactoryMethodDiscrete;
                break;
            case 2301:
                b = this.InterpolantFactoryMethodLinear;
                break;
            case 2302:
                b = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === b) {
                b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant)
                    if (a !== this.DefaultInterpolation)
                        this.setInterpolation(this.DefaultInterpolation);
                    else
                        throw Error(b);
                console.warn("THREE.KeyframeTrack:", b);
                return this
            }
            this.createInterpolant = b;
            return this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(a) {
            if (0 !== a)
                for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                    b[c] += a;
            return this
        },
        scale: function(a) {
            if (1 !== a)
                for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                    b[c] *= a;
            return this
        },
        trim: function(a, b) {
            for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a; )
                ++e;
            for (; -1 !== f && c[f] > b; )
                --f;
            ++f;
            if (0 !== e || f !== d)
                e >= f && (f = Math.max(f, 1),
                e = f - 1),
                a = this.getValueSize(),
                this.times = ka.arraySlice(c, e, f),
                this.values = ka.arraySlice(this.values, e * a, f * a);
            return this
        },
        validate: function() {
            var a = !0
              , b = this.getValueSize();
            0 !== b - Math.floor(b) && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
            a = !1);
            var c = this.times;
            b = this.values;
            var d = c.length;
            0 === d && (console.error("THREE.KeyframeTrack: Track is empty.", this),
            a = !1);
            for (var e = null, f = 0; f !== d; f++) {
                var g = c[f];
                if ("number" === typeof g && isNaN(g)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, f, g);
                    a = !1;
                    break
                }
                if (null !== e && e > g) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, f, g, e);
                    a = !1;
                    break
                }
                e = g
            }
            if (void 0 !== b && ka.isTypedArray(b))
                for (f = 0,
                c = b.length; f !== c; ++f)
                    if (d = b[f],
                    isNaN(d)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, f, d);
                        a = !1;
                        break
                    }
            return a
        },
        optimize: function() {
            for (var a = ka.arraySlice(this.times), b = ka.arraySlice(this.values), c = this.getValueSize(), d = 2302 === this.getInterpolation(), e = 1, f = a.length - 1, g = 1; g < f; ++g) {
                var h = !1
                  , k = a[g];
                if (k !== a[g + 1] && (1 !== g || k !== k[0]))
                    if (d)
                        h = !0;
                    else {
                        var l = g * c
                          , n = l - c
                          , p = l + c;
                        for (k = 0; k !== c; ++k) {
                            var u = b[l + k];
                            if (u !== b[n + k] || u !== b[p + k]) {
                                h = !0;
                                break
                            }
                        }
                    }
                if (h) {
                    if (g !== e)
                        for (a[e] = a[g],
                        h = g * c,
                        l = e * c,
                        k = 0; k !== c; ++k)
                            b[l + k] = b[h + k];
                    ++e
                }
            }
            if (0 < f) {
                a[e] = a[f];
                h = f * c;
                l = e * c;
                for (k = 0; k !== c; ++k)
                    b[l + k] = b[h + k];
                ++e
            }
            e !== a.length ? (this.times = ka.arraySlice(a, 0, e),
            this.values = ka.arraySlice(b, 0, e * c)) : (this.times = a,
            this.values = b);
            return this
        },
        clone: function() {
            var a = ka.arraySlice(this.times, 0)
              , b = ka.arraySlice(this.values, 0);
            a = new this.constructor(this.name,a,b);
            a.createInterpolant = this.createInterpolant;
            return a
        }
    });
    Ye.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: Ye,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    Ze.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: Ze,
        ValueTypeName: "color"
    });
    ad.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: ad,
        ValueTypeName: "number"
    });
    $e.prototype = Object.assign(Object.create(Ka.prototype), {
        constructor: $e,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer
              , f = this.sampleValues
              , g = this.valueSize;
            a *= g;
            b = (c - b) / (d - b);
            for (c = a + g; a !== c; a += 4)
                la.slerpFlat(e, 0, f, a - g, f, a, b);
            return e
        }
    });
    je.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: je,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(a) {
            return new $e(this.times,this.values,this.getValueSize(),a)
        },
        InterpolantFactoryMethodSmooth: void 0
    });
    af.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: af,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    bd.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: bd,
        ValueTypeName: "vector"
    });
    Object.assign(Pa, {
        parse: function(a) {
            for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)
                b.push(Ik(c[e]).scale(d));
            return new Pa(a.name,a.duration,b,a.blendMode)
        },
        toJSON: function(a) {
            var b = []
              , c = a.tracks;
            a = {
                name: a.name,
                duration: a.duration,
                tracks: b,
                uuid: a.uuid,
                blendMode: a.blendMode
            };
            for (var d = 0, e = c.length; d !== e; ++d)
                b.push(sa.toJSON(c[d]));
            return a
        },
        CreateFromMorphTargetSequence: function(a, b, c, d) {
            for (var e = b.length, f = [], g = 0; g < e; g++) {
                var h = []
                  , k = [];
                h.push((g + e - 1) % e, g, (g + 1) % e);
                k.push(0, 1, 0);
                var l = ka.getKeyframeOrder(h);
                h = ka.sortedArray(h, 1, l);
                k = ka.sortedArray(k, 1, l);
                d || 0 !== h[0] || (h.push(e),
                k.push(k[0]));
                f.push((new ad(".morphTargetInfluences[" + b[g].name + "]",h,k)).scale(1 / c))
            }
            return new Pa(a,-1,f)
        },
        findByName: function(a, b) {
            var c = a;
            Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);
            for (a = 0; a < c.length; a++)
                if (c[a].name === b)
                    return c[a];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(a, b, c) {
            for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) {
                var h = a[f]
                  , k = h.name.match(e);
                if (k && 1 < k.length) {
                    var l = k[1];
                    (k = d[l]) || (d[l] = k = []);
                    k.push(h)
                }
            }
            a = [];
            for (l in d)
                a.push(Pa.CreateFromMorphTargetSequence(l, d[l], b, c));
            return a
        },
        parseAnimation: function(a, b) {
            if (!a)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
                null;
            var c = function(a, b, c, d, e) {
                if (0 !== c.length) {
                    var f = []
                      , g = [];
                    ka.flattenJSON(c, f, g, d);
                    0 !== f.length && e.push(new a(b,f,g))
                }
            }
              , d = []
              , e = a.name || "default"
              , f = a.length || -1
              , g = a.fps || 30
              , h = a.blendMode;
            a = a.hierarchy || [];
            for (var k = 0; k < a.length; k++) {
                var l = a[k].keys;
                if (l && 0 !== l.length)
                    if (l[0].morphTargets) {
                        f = {};
                        for (var n = 0; n < l.length; n++)
                            if (l[n].morphTargets)
                                for (var p = 0; p < l[n].morphTargets.length; p++)
                                    f[l[n].morphTargets[p]] = -1;
                        for (var u in f) {
                            var r = []
                              , q = [];
                            for (p = 0; p !== l[n].morphTargets.length; ++p) {
                                var t = l[n];
                                r.push(t.time);
                                q.push(t.morphTarget === u ? 1 : 0)
                            }
                            d.push(new ad(".morphTargetInfluence[" + u + "]",r,q))
                        }
                        f = f.length * (g || 1)
                    } else
                        n = ".bones[" + b[k].name + "]",
                        c(bd, n + ".position", l, "pos", d),
                        c(je, n + ".quaternion", l, "rot", d),
                        c(bd, n + ".scale", l, "scl", d)
            }
            return 0 === d.length ? null : new Pa(e,f,d,h)
        }
    });
    Object.assign(Pa.prototype, {
        resetDuration: function() {
            for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) {
                var d = this.tracks[b];
                a = Math.max(a, d.times[d.times.length - 1])
            }
            this.duration = a;
            return this
        },
        trim: function() {
            for (var a = 0; a < this.tracks.length; a++)
                this.tracks[a].trim(0, this.duration);
            return this
        },
        validate: function() {
            for (var a = !0, b = 0; b < this.tracks.length; b++)
                a = a && this.tracks[b].validate();
            return a
        },
        optimize: function() {
            for (var a = 0; a < this.tracks.length; a++)
                this.tracks[a].optimize();
            return this
        },
        clone: function() {
            for (var a = [], b = 0; b < this.tracks.length; b++)
                a.push(this.tracks[b].clone());
            return new Pa(this.name,this.duration,a,this.blendMode)
        }
    });
    var sc = {
        enabled: !1,
        files: {},
        add: function(a, b) {
            !1 !== this.enabled && (this.files[a] = b)
        },
        get: function(a) {
            if (!1 !== this.enabled)
                return this.files[a]
        },
        remove: function(a) {
            delete this.files[a]
        },
        clear: function() {
            this.files = {}
        }
    }
      , hi = new tg;
    Object.assign(X.prototype, {
        load: function() {},
        loadAsync: function(a, b) {
            var c = this;
            return new Promise(function(d, e) {
                c.load(a, d, b, e)
            }
            )
        },
        parse: function() {},
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        },
        setResourcePath: function(a) {
            this.resourcePath = a;
            return this
        }
    });
    var bb = {};
    Qa.prototype = Object.assign(Object.create(X.prototype), {
        constructor: Qa,
        load: function(a, b, c, d) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            a = this.manager.resolveURL(a);
            var e = this
              , f = sc.get(a);
            if (void 0 !== f)
                return e.manager.itemStart(a),
                setTimeout(function() {
                    b && b(f);
                    e.manager.itemEnd(a)
                }, 0),
                f;
            if (void 0 !== bb[a])
                bb[a].push({
                    onLoad: b,
                    onProgress: c,
                    onError: d
                });
            else {
                var g = a.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (g) {
                    c = g[1];
                    var h = !!g[2];
                    g = g[3];
                    g = decodeURIComponent(g);
                    h && (g = atob(g));
                    try {
                        var k = (this.responseType || "").toLowerCase();
                        switch (k) {
                        case "arraybuffer":
                        case "blob":
                            var l = new Uint8Array(g.length);
                            for (h = 0; h < g.length; h++)
                                l[h] = g.charCodeAt(h);
                            var n = "blob" === k ? new Blob([l.buffer],{
                                type: c
                            }) : l.buffer;
                            break;
                        case "document":
                            n = (new DOMParser).parseFromString(g, c);
                            break;
                        case "json":
                            n = JSON.parse(g);
                            break;
                        default:
                            n = g
                        }
                        setTimeout(function() {
                            b && b(n);
                            e.manager.itemEnd(a)
                        }, 0)
                    } catch (u) {
                        setTimeout(function() {
                            d && d(u);
                            e.manager.itemError(a);
                            e.manager.itemEnd(a)
                        }, 0)
                    }
                } else {
                    bb[a] = [];
                    bb[a].push({
                        onLoad: b,
                        onProgress: c,
                        onError: d
                    });
                    var p = new XMLHttpRequest;
                    let urlx= a;
                    if (urlx.indexOf(".io")<= 0) {
                      urlx= urlx.replace("/all-skins", "all-skins");
                      urlx= urlx.replace("//sites/default/", "sites/default/");
                      urlx= urlx.replace("/sites/default/", "sites/default/"); 
                      urlx= urlx.replace("//billboards", "billboards");                
                    }                    
                    console.log("--fx--open--", urlx);
                    p.open("GET", urlx, !0);
                    p.addEventListener("load", function(b) {
                        var c = this.response
                          , d = bb[a];
                        delete bb[a];
                        if (200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            sc.add(a, c);
                            for (var f = 0, g = d.length; f < g; f++) {
                                var h = d[f];
                                if (h.onLoad)
                                    h.onLoad(c)
                            }
                        } else {
                            f = 0;
                            for (g = d.length; f < g; f++)
                                if (h = d[f],
                                h.onError)
                                    h.onError(b);
                            e.manager.itemError(a)
                        }
                        e.manager.itemEnd(a)
                    }, !1);
                    p.addEventListener("progress", function(b) {
                        for (var c = bb[a], d = 0, e = c.length; d < e; d++) {
                            var f = c[d];
                            if (f.onProgress)
                                f.onProgress(b)
                        }
                    }, !1);
                    p.addEventListener("error", function(b) {
                        var c = bb[a];
                        delete bb[a];
                        for (var d = 0, f = c.length; d < f; d++) {
                            var g = c[d];
                            if (g.onError)
                                g.onError(b)
                        }
                        e.manager.itemError(a);
                        e.manager.itemEnd(a)
                    }, !1);
                    p.addEventListener("abort", function(b) {
                        var c = bb[a];
                        delete bb[a];
                        for (var d = 0, f = c.length; d < f; d++) {
                            var g = c[d];
                            if (g.onError)
                                g.onError(b)
                        }
                        e.manager.itemError(a);
                        e.manager.itemEnd(a)
                    }, !1);
                    void 0 !== this.responseType && (p.responseType = this.responseType);
                    void 0 !== this.withCredentials && (p.withCredentials = this.withCredentials);
                    p.overrideMimeType && p.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                    for (h in this.requestHeader)
                        p.setRequestHeader(h, this.requestHeader[h]);
                    p.send(null)
                }
                e.manager.itemStart(a);
                return p
            }
        },
        setResponseType: function(a) {
            this.responseType = a;
            return this
        },
        setWithCredentials: function(a) {
            this.withCredentials = a;
            return this
        },
        setMimeType: function(a) {
            this.mimeType = a;
            return this
        },
        setRequestHeader: function(a) {
            this.requestHeader = a;
            return this
        }
    });
    ug.prototype = Object.assign(Object.create(X.prototype), {
        constructor: ug,
        load: function(a, b, c, d) {
            var e = this
              , f = new Qa(e.manager);
            f.setPath(e.path);
            f.load(a, function(a) {
                b(e.parse(JSON.parse(a)))
            }, c, d)
        },
        parse: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = Pa.parse(a[c]);
                b.push(d)
            }
            return b
        }
    });
    vg.prototype = Object.assign(Object.create(X.prototype), {
        constructor: vg,
        load: function(a, b, c, d) {
            function e(e) {
                k.load(a[e], function(a) {
                    a = f.parse(a, !0);
                    g[e] = {
                        width: a.width,
                        height: a.height,
                        format: a.format,
                        mipmaps: a.mipmaps
                    };
                    l += 1;
                    6 === l && (1 === a.mipmapCount && (h.minFilter = 1006),
                    h.format = a.format,
                    h.needsUpdate = !0,
                    b && b(h))
                }, c, d)
            }
            var f = this
              , g = []
              , h = new Nc;
            h.image = g;
            var k = new Qa(this.manager);
            k.setPath(this.path);
            k.setResponseType("arraybuffer");
            if (Array.isArray(a))
                for (var l = 0, n = 0, p = a.length; n < p; ++n)
                    e(n);
            else
                k.load(a, function(a) {
                    a = f.parse(a, !0);
                    if (a.isCubemap)
                        for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
                            g[d] = {
                                mipmaps: []
                            };
                            for (var e = 0; e < a.mipmapCount; e++)
                                g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]),
                                g[d].format = a.format,
                                g[d].width = a.width,
                                g[d].height = a.height
                        }
                    else
                        h.image.width = a.width,
                        h.image.height = a.height,
                        h.mipmaps = a.mipmaps;
                    1 === a.mipmapCount && (h.minFilter = 1006);
                    h.format = a.format;
                    h.needsUpdate = !0;
                    b && b(h)
                }, c, d);
            return h
        }
    });
    bf.prototype = Object.assign(Object.create(X.prototype), {
        constructor: bf,
        load: function(a, b, c, d) {
            var e = this
              , f = new Zb
              , g = new Qa(this.manager);
            g.setResponseType("arraybuffer");
            g.setPath(this.path);
            g.load(a, function(a) {
                if (a = e.parse(a))
                    void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width,
                    f.image.height = a.height,
                    f.image.data = a.data),
                    f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001,
                    f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001,
                    f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006,
                    f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1006,
                    f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1,
                    void 0 !== a.format && (f.format = a.format),
                    void 0 !== a.type && (f.type = a.type),
                    void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps,
                    f.minFilter = 1008),
                    1 === a.mipmapCount && (f.minFilter = 1006),
                    f.needsUpdate = !0,
                    b && b(f, a)
            }, c, d);
            return f
        }
    });
    cd.prototype = Object.assign(Object.create(X.prototype), {
        constructor: cd,
        load: function(a, b, c, d) {
            function e() {
                k.removeEventListener("load", e, !1);
                k.removeEventListener("error", f, !1);
                sc.add(a, this);
                b && b(this);
                g.manager.itemEnd(a)
            }
            function f(b) {
                k.removeEventListener("load", e, !1);
                k.removeEventListener("error", f, !1);
                d && d(b);
                g.manager.itemError(a);
                g.manager.itemEnd(a)
            }
            void 0 !== this.path && (a = this.path + a);
            a = this.manager.resolveURL(a);
            var g = this
              , h = sc.get(a);
            if (void 0 !== h)
                return g.manager.itemStart(a),
                setTimeout(function() {
                    b && b(h);
                    g.manager.itemEnd(a)
                }, 0),
                h;
            var k = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            k.addEventListener("load", e, !1);
            k.addEventListener("error", f, !1);
            "data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin && (k.crossOrigin = this.crossOrigin);
            g.manager.itemStart(a);
            let urlx= a.replace("//sites/", "sites/");
            console.log("--fx--src--", urlx);
            k.src = urlx;
            return k
        }
    });
    cf.prototype = Object.assign(Object.create(X.prototype), {
        constructor: cf,
        load: function(a, b, c, d) {
            function e(c) {
                g.load(a[c], function(a) {
                    f.images[c] = a;
                    h++;
                    6 === h && (f.needsUpdate = !0,
                    b && b(f))
                }, void 0, d)
            }
            var f = new pb
              , g = new cd(this.manager);
            g.setCrossOrigin(this.crossOrigin);
            g.setPath(this.path);
            var h = 0;
            for (c = 0; c < a.length; ++c)
                e(c);
            return f
        }
    });
    df.prototype = Object.assign(Object.create(X.prototype), {
        constructor: df,
        load: function(a, b, c, d) {
            var e = new V
              , f = new cd(this.manager);
            f.setCrossOrigin(this.crossOrigin);
            f.setPath(this.path);
            f.load(a, function(c) {
                e.image = c;
                c = 0 < a.search(/\.jpe?g($|\?)/i) || 0 === a.search(/^data:image\/jpeg/);
                e.format = c ? 1022 : 1023;
                e.needsUpdate = !0;
                void 0 !== b && b(e)
            }, c, d);
            return e
        }
    });
    Object.assign(G.prototype, {
        getPoint: function() {
            console.warn("THREE.Curve: .getPoint() not implemented.");
            return null
        },
        getPointAt: function(a, b) {
            a = this.getUtoTmapping(a);
            return this.getPoint(a, b)
        },
        getPoints: function(a) {
            void 0 === a && (a = 5);
            for (var b = [], c = 0; c <= a; c++)
                b.push(this.getPoint(c / a));
            return b
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 5);
            for (var b = [], c = 0; c <= a; c++)
                b.push(this.getPointAt(c / a));
            return b
        },
        getLength: function() {
            var a = this.getLengths();
            return a[a.length - 1]
        },
        getLengths: function(a) {
            void 0 === a && (a = this.arcLengthDivisions);
            if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var b = [], c = this.getPoint(0), d, e = 0;
            b.push(0);
            for (d = 1; d <= a; d++) {
                var f = this.getPoint(d / a);
                e += f.distanceTo(c);
                b.push(e);
                c = f
            }
            return this.cacheArcLengths = b
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.getLengths()
        },
        getUtoTmapping: function(a, b) {
            var c = this.getLengths()
              , d = c.length;
            b = b ? b : a * c[d - 1];
            for (var e = 0, f = d - 1, g; e <= f; )
                if (a = Math.floor(e + (f - e) / 2),
                g = c[a] - b,
                0 > g)
                    e = a + 1;
                else if (0 < g)
                    f = a - 1;
                else {
                    f = a;
                    break
                }
            a = f;
            if (c[a] === b)
                return a / (d - 1);
            e = c[a];
            return (a + (b - e) / (c[a + 1] - e)) / (d - 1)
        },
        getTangent: function(a, b) {
            var c = a - 1E-4;
            a += 1E-4;
            0 > c && (c = 0);
            1 < a && (a = 1);
            c = this.getPoint(c);
            a = this.getPoint(a);
            b = b || (c.isVector2 ? new v : new n);
            b.copy(a).sub(c).normalize();
            return b
        },
        getTangentAt: function(a, b) {
            a = this.getUtoTmapping(a);
            return this.getTangent(a, b)
        },
        computeFrenetFrames: function(a, b) {
            var c = new n, d = [], e = [], f = [], g = new n, h = new P, k;
            for (k = 0; k <= a; k++) {
                var l = k / a;
                d[k] = this.getTangentAt(l, new n);
                d[k].normalize()
            }
            e[0] = new n;
            f[0] = new n;
            k = Number.MAX_VALUE;
            l = Math.abs(d[0].x);
            var v = Math.abs(d[0].y)
              , p = Math.abs(d[0].z);
            l <= k && (k = l,
            c.set(1, 0, 0));
            v <= k && (k = v,
            c.set(0, 1, 0));
            p <= k && c.set(0, 0, 1);
            g.crossVectors(d[0], c).normalize();
            e[0].crossVectors(d[0], g);
            f[0].crossVectors(d[0], e[0]);
            for (k = 1; k <= a; k++)
                e[k] = e[k - 1].clone(),
                f[k] = f[k - 1].clone(),
                g.crossVectors(d[k - 1], d[k]),
                g.length() > Number.EPSILON && (g.normalize(),
                c = Math.acos(M.clamp(d[k - 1].dot(d[k]), -1, 1)),
                e[k].applyMatrix4(h.makeRotationAxis(g, c))),
                f[k].crossVectors(d[k], e[k]);
            if (!0 === b)
                for (c = Math.acos(M.clamp(e[0].dot(e[a]), -1, 1)),
                c /= a,
                0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c),
                k = 1; k <= a; k++)
                    e[k].applyMatrix4(h.makeRotationAxis(d[k], c * k)),
                    f[k].crossVectors(d[k], e[k]);
            return {
                tangents: d,
                normals: e,
                binormals: f
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.arcLengthDivisions = a.arcLengthDivisions;
            return this
        },
        toJSON: function() {
            var a = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            a.arcLengthDivisions = this.arcLengthDivisions;
            a.type = this.type;
            return a
        },
        fromJSON: function(a) {
            this.arcLengthDivisions = a.arcLengthDivisions;
            return this
        }
    });
    La.prototype = Object.create(G.prototype);
    La.prototype.constructor = La;
    La.prototype.isEllipseCurve = !0;
    La.prototype.getPoint = function(a, b) {
        b = b || new v;
        for (var c = 2 * Math.PI, d = this.aEndAngle - this.aStartAngle, e = Math.abs(d) < Number.EPSILON; 0 > d; )
            d += c;
        for (; d > c; )
            d -= c;
        d < Number.EPSILON && (d = e ? 0 : c);
        !0 !== this.aClockwise || e || (d = d === c ? -c : d - c);
        c = this.aStartAngle + a * d;
        a = this.aX + this.xRadius * Math.cos(c);
        var f = this.aY + this.yRadius * Math.sin(c);
        0 !== this.aRotation && (c = Math.cos(this.aRotation),
        d = Math.sin(this.aRotation),
        e = a - this.aX,
        f -= this.aY,
        a = e * c - f * d + this.aX,
        f = e * d + f * c + this.aY);
        return b.set(a, f)
    }
    ;
    La.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.aX = a.aX;
        this.aY = a.aY;
        this.xRadius = a.xRadius;
        this.yRadius = a.yRadius;
        this.aStartAngle = a.aStartAngle;
        this.aEndAngle = a.aEndAngle;
        this.aClockwise = a.aClockwise;
        this.aRotation = a.aRotation;
        return this
    }
    ;
    La.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.aX = this.aX;
        a.aY = this.aY;
        a.xRadius = this.xRadius;
        a.yRadius = this.yRadius;
        a.aStartAngle = this.aStartAngle;
        a.aEndAngle = this.aEndAngle;
        a.aClockwise = this.aClockwise;
        a.aRotation = this.aRotation;
        return a
    }
    ;
    La.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.aX = a.aX;
        this.aY = a.aY;
        this.xRadius = a.xRadius;
        this.yRadius = a.yRadius;
        this.aStartAngle = a.aStartAngle;
        this.aEndAngle = a.aEndAngle;
        this.aClockwise = a.aClockwise;
        this.aRotation = a.aRotation;
        return this
    }
    ;
    dd.prototype = Object.create(La.prototype);
    dd.prototype.constructor = dd;
    dd.prototype.isArcCurve = !0;
    var Qf = new n
      , kh = new wg
      , lh = new wg
      , mh = new wg;
    pa.prototype = Object.create(G.prototype);
    pa.prototype.constructor = pa;
    pa.prototype.isCatmullRomCurve3 = !0;
    pa.prototype.getPoint = function(a, b) {
        b = b || new n;
        var c = this.points
          , d = c.length;
        a *= d - (this.closed ? 0 : 1);
        var e = Math.floor(a);
        a -= e;
        this.closed ? e += 0 < e ? 0 : (Math.floor(Math.abs(e) / d) + 1) * d : 0 === a && e === d - 1 && (e = d - 2,
        a = 1);
        if (this.closed || 0 < e)
            var f = c[(e - 1) % d];
        else
            Qf.subVectors(c[0], c[1]).add(c[0]),
            f = Qf;
        var g = c[e % d];
        var h = c[(e + 1) % d];
        this.closed || e + 2 < d ? c = c[(e + 2) % d] : (Qf.subVectors(c[d - 1], c[d - 2]).add(c[d - 1]),
        c = Qf);
        if ("centripetal" === this.curveType || "chordal" === this.curveType) {
            var k = "chordal" === this.curveType ? .5 : .25;
            d = Math.pow(f.distanceToSquared(g), k);
            e = Math.pow(g.distanceToSquared(h), k);
            k = Math.pow(h.distanceToSquared(c), k);
            1E-4 > e && (e = 1);
            1E-4 > d && (d = e);
            1E-4 > k && (k = e);
            kh.initNonuniformCatmullRom(f.x, g.x, h.x, c.x, d, e, k);
            lh.initNonuniformCatmullRom(f.y, g.y, h.y, c.y, d, e, k);
            mh.initNonuniformCatmullRom(f.z, g.z, h.z, c.z, d, e, k)
        } else
            "catmullrom" === this.curveType && (kh.initCatmullRom(f.x, g.x, h.x, c.x, this.tension),
            lh.initCatmullRom(f.y, g.y, h.y, c.y, this.tension),
            mh.initCatmullRom(f.z, g.z, h.z, c.z, this.tension));
        b.set(kh.calc(a), lh.calc(a), mh.calc(a));
        return b
    }
    ;
    pa.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.points = [];
        for (var b = 0, c = a.points.length; b < c; b++)
            this.points.push(a.points[b].clone());
        this.closed = a.closed;
        this.curveType = a.curveType;
        this.tension = a.tension;
        return this
    }
    ;
    pa.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.points = [];
        for (var b = 0, c = this.points.length; b < c; b++)
            a.points.push(this.points[b].toArray());
        a.closed = this.closed;
        a.curveType = this.curveType;
        a.tension = this.tension;
        return a
    }
    ;
    pa.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.points = [];
        for (var b = 0, c = a.points.length; b < c; b++) {
            var d = a.points[b];
            this.points.push((new n).fromArray(d))
        }
        this.closed = a.closed;
        this.curveType = a.curveType;
        this.tension = a.tension;
        return this
    }
    ;
    Wa.prototype = Object.create(G.prototype);
    Wa.prototype.constructor = Wa;
    Wa.prototype.isCubicBezierCurve = !0;
    Wa.prototype.getPoint = function(a, b) {
        b = b || new v;
        var c = this.v0
          , d = this.v1
          , e = this.v2
          , f = this.v3;
        b.set(le(a, c.x, d.x, e.x, f.x), le(a, c.y, d.y, e.y, f.y));
        return b
    }
    ;
    Wa.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        this.v3.copy(a.v3);
        return this
    }
    ;
    Wa.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        a.v3 = this.v3.toArray();
        return a
    }
    ;
    Wa.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        this.v3.fromArray(a.v3);
        return this
    }
    ;
    hb.prototype = Object.create(G.prototype);
    hb.prototype.constructor = hb;
    hb.prototype.isCubicBezierCurve3 = !0;
    hb.prototype.getPoint = function(a, b) {
        b = b || new n;
        var c = this.v0
          , d = this.v1
          , e = this.v2
          , f = this.v3;
        b.set(le(a, c.x, d.x, e.x, f.x), le(a, c.y, d.y, e.y, f.y), le(a, c.z, d.z, e.z, f.z));
        return b
    }
    ;
    hb.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        this.v3.copy(a.v3);
        return this
    }
    ;
    hb.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        a.v3 = this.v3.toArray();
        return a
    }
    ;
    hb.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        this.v3.fromArray(a.v3);
        return this
    }
    ;
    Ha.prototype = Object.create(G.prototype);
    Ha.prototype.constructor = Ha;
    Ha.prototype.isLineCurve = !0;
    Ha.prototype.getPoint = function(a, b) {
        b = b || new v;
        1 === a ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1),
        b.multiplyScalar(a).add(this.v1));
        return b
    }
    ;
    Ha.prototype.getPointAt = function(a, b) {
        return this.getPoint(a, b)
    }
    ;
    Ha.prototype.getTangent = function(a, b) {
        a = b || new v;
        return a = a.copy(this.v2).sub(this.v1).normalize()
    }
    ;
    Ha.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this
    }
    ;
    Ha.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a
    }
    ;
    Ha.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this
    }
    ;
    Xa.prototype = Object.create(G.prototype);
    Xa.prototype.constructor = Xa;
    Xa.prototype.isLineCurve3 = !0;
    Xa.prototype.getPoint = function(a, b) {
        b = b || new n;
        1 === a ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1),
        b.multiplyScalar(a).add(this.v1));
        return b
    }
    ;
    Xa.prototype.getPointAt = function(a, b) {
        return this.getPoint(a, b)
    }
    ;
    Xa.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this
    }
    ;
    Xa.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a
    }
    ;
    Xa.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this
    }
    ;
    Ya.prototype = Object.create(G.prototype);
    Ya.prototype.constructor = Ya;
    Ya.prototype.isQuadraticBezierCurve = !0;
    Ya.prototype.getPoint = function(a, b) {
        b = b || new v;
        var c = this.v0
          , d = this.v1
          , e = this.v2;
        b.set(ke(a, c.x, d.x, e.x), ke(a, c.y, d.y, e.y));
        return b
    }
    ;
    Ya.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this
    }
    ;
    Ya.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a
    }
    ;
    Ya.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this
    }
    ;
    ib.prototype = Object.create(G.prototype);
    ib.prototype.constructor = ib;
    ib.prototype.isQuadraticBezierCurve3 = !0;
    ib.prototype.getPoint = function(a, b) {
        b = b || new n;
        var c = this.v0
          , d = this.v1
          , e = this.v2;
        b.set(ke(a, c.x, d.x, e.x), ke(a, c.y, d.y, e.y), ke(a, c.z, d.z, e.z));
        return b
    }
    ;
    ib.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.v0.copy(a.v0);
        this.v1.copy(a.v1);
        this.v2.copy(a.v2);
        return this
    }
    ;
    ib.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.v0 = this.v0.toArray();
        a.v1 = this.v1.toArray();
        a.v2 = this.v2.toArray();
        return a
    }
    ;
    ib.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.v0.fromArray(a.v0);
        this.v1.fromArray(a.v1);
        this.v2.fromArray(a.v2);
        return this
    }
    ;
    Za.prototype = Object.create(G.prototype);
    Za.prototype.constructor = Za;
    Za.prototype.isSplineCurve = !0;
    Za.prototype.getPoint = function(a, b) {
        b = b || new v;
        var c = this.points
          , d = (c.length - 1) * a;
        a = Math.floor(d);
        d -= a;
        var e = c[0 === a ? a : a - 1]
          , f = c[a]
          , g = c[a > c.length - 2 ? c.length - 1 : a + 1];
        c = c[a > c.length - 3 ? c.length - 1 : a + 2];
        b.set(ii(d, e.x, f.x, g.x, c.x), ii(d, e.y, f.y, g.y, c.y));
        return b
    }
    ;
    Za.prototype.copy = function(a) {
        G.prototype.copy.call(this, a);
        this.points = [];
        for (var b = 0, c = a.points.length; b < c; b++)
            this.points.push(a.points[b].clone());
        return this
    }
    ;
    Za.prototype.toJSON = function() {
        var a = G.prototype.toJSON.call(this);
        a.points = [];
        for (var b = 0, c = this.points.length; b < c; b++)
            a.points.push(this.points[b].toArray());
        return a
    }
    ;
    Za.prototype.fromJSON = function(a) {
        G.prototype.fromJSON.call(this, a);
        this.points = [];
        for (var b = 0, c = a.points.length; b < c; b++) {
            var d = a.points[b];
            this.points.push((new v).fromArray(d))
        }
        return this
    }
    ;
    var nh = Object.freeze({
        __proto__: null,
        ArcCurve: dd,
        CatmullRomCurve3: pa,
        CubicBezierCurve: Wa,
        CubicBezierCurve3: hb,
        EllipseCurve: La,
        LineCurve: Ha,
        LineCurve3: Xa,
        QuadraticBezierCurve: Ya,
        QuadraticBezierCurve3: ib,
        SplineCurve: Za
    });
    ub.prototype = Object.assign(Object.create(G.prototype), {
        constructor: ub,
        add: function(a) {
            this.curves.push(a)
        },
        closePath: function() {
            var a = this.curves[0].getPoint(0)
              , b = this.curves[this.curves.length - 1].getPoint(1);
            a.equals(b) || this.curves.push(new Ha(b,a))
        },
        getPoint: function(a) {
            var b = a * this.getLength()
              , c = this.getCurveLengths();
            for (a = 0; a < c.length; ) {
                if (c[a] >= b)
                    return b = c[a] - b,
                    a = this.curves[a],
                    c = a.getLength(),
                    a.getPointAt(0 === c ? 0 : 1 - b / c);
                a++
            }
            return null
        },
        getLength: function() {
            var a = this.getCurveLengths();
            return a[a.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.cacheLengths = null;
            this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)
                b += this.curves[c].getLength(),
                a.push(b);
            return this.cacheLengths = a
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 40);
            for (var b = [], c = 0; c <= a; c++)
                b.push(this.getPoint(c / a));
            this.autoClose && b.push(b[0]);
            return b
        },
        getPoints: function(a) {
            a = a || 12;
            for (var b = [], c, d = 0, e = this.curves; d < e.length; d++) {
                var f = e[d];
                f = f.getPoints(f && f.isEllipseCurve ? 2 * a : f && (f.isLineCurve || f.isLineCurve3) ? 1 : f && f.isSplineCurve ? a * f.points.length : a);
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    c && c.equals(h) || (b.push(h),
                    c = h)
                }
            }
            this.autoClose && 1 < b.length && !b[b.length - 1].equals(b[0]) && b.push(b[0]);
            return b
        },
        copy: function(a) {
            G.prototype.copy.call(this, a);
            this.curves = [];
            for (var b = 0, c = a.curves.length; b < c; b++)
                this.curves.push(a.curves[b].clone());
            this.autoClose = a.autoClose;
            return this
        },
        toJSON: function() {
            var a = G.prototype.toJSON.call(this);
            a.autoClose = this.autoClose;
            a.curves = [];
            for (var b = 0, c = this.curves.length; b < c; b++)
                a.curves.push(this.curves[b].toJSON());
            return a
        },
        fromJSON: function(a) {
            G.prototype.fromJSON.call(this, a);
            this.autoClose = a.autoClose;
            this.curves = [];
            for (var b = 0, c = a.curves.length; b < c; b++) {
                var d = a.curves[b];
                this.curves.push((new nh[d.type]).fromJSON(d))
            }
            return this
        }
    });
    $a.prototype = Object.assign(Object.create(ub.prototype), {
        constructor: $a,
        setFromPoints: function(a) {
            this.moveTo(a[0].x, a[0].y);
            for (var b = 1, c = a.length; b < c; b++)
                this.lineTo(a[b].x, a[b].y);
            return this
        },
        moveTo: function(a, b) {
            this.currentPoint.set(a, b);
            return this
        },
        lineTo: function(a, b) {
            var c = new Ha(this.currentPoint.clone(),new v(a,b));
            this.curves.push(c);
            this.currentPoint.set(a, b);
            return this
        },
        quadraticCurveTo: function(a, b, c, d) {
            a = new Ya(this.currentPoint.clone(),new v(a,b),new v(c,d));
            this.curves.push(a);
            this.currentPoint.set(c, d);
            return this
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            a = new Wa(this.currentPoint.clone(),new v(a,b),new v(c,d),new v(e,f));
            this.curves.push(a);
            this.currentPoint.set(e, f);
            return this
        },
        splineThru: function(a) {
            var b = [this.currentPoint.clone()].concat(a);
            b = new Za(b);
            this.curves.push(b);
            this.currentPoint.copy(a[a.length - 1]);
            return this
        },
        arc: function(a, b, c, d, e, f) {
            this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f);
            return this
        },
        absarc: function(a, b, c, d, e, f) {
            this.absellipse(a, b, c, c, d, e, f);
            return this
        },
        ellipse: function(a, b, c, d, e, f, g, h) {
            this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h);
            return this
        },
        absellipse: function(a, b, c, d, e, f, g, h) {
            a = new La(a,b,c,d,e,f,g,h);
            0 < this.curves.length && (b = a.getPoint(0),
            b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
            this.curves.push(a);
            a = a.getPoint(1);
            this.currentPoint.copy(a);
            return this
        },
        copy: function(a) {
            ub.prototype.copy.call(this, a);
            this.currentPoint.copy(a.currentPoint);
            return this
        },
        toJSON: function() {
            var a = ub.prototype.toJSON.call(this);
            a.currentPoint = this.currentPoint.toArray();
            return a
        },
        fromJSON: function(a) {
            ub.prototype.fromJSON.call(this, a);
            this.currentPoint.fromArray(a.currentPoint);
            return this
        }
    });
    Nb.prototype = Object.assign(Object.create($a.prototype), {
        constructor: Nb,
        getPointsHoles: function(a) {
            for (var b = [], c = 0, d = this.holes.length; c < d; c++)
                b[c] = this.holes[c].getPoints(a);
            return b
        },
        extractPoints: function(a) {
            return {
                shape: this.getPoints(a),
                holes: this.getPointsHoles(a)
            }
        },
        copy: function(a) {
            $a.prototype.copy.call(this, a);
            this.holes = [];
            for (var b = 0, c = a.holes.length; b < c; b++)
                this.holes.push(a.holes[b].clone());
            return this
        },
        toJSON: function() {
            var a = $a.prototype.toJSON.call(this);
            a.uuid = this.uuid;
            a.holes = [];
            for (var b = 0, c = this.holes.length; b < c; b++)
                a.holes.push(this.holes[b].toJSON());
            return a
        },
        fromJSON: function(a) {
            $a.prototype.fromJSON.call(this, a);
            this.uuid = a.uuid;
            this.holes = [];
            for (var b = 0, c = a.holes.length; b < c; b++) {
                var d = a.holes[b];
                this.holes.push((new $a).fromJSON(d))
            }
            return this
        }
    });
    S.prototype = Object.assign(Object.create(E.prototype), {
        constructor: S,
        isLight: !0,
        copy: function(a) {
            E.prototype.copy.call(this, a);
            this.color.copy(a.color);
            this.intensity = a.intensity;
            return this
        },
        toJSON: function(a) {
            a = E.prototype.toJSON.call(this, a);
            a.object.color = this.color.getHex();
            a.object.intensity = this.intensity;
            void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
            void 0 !== this.distance && (a.object.distance = this.distance);
            void 0 !== this.angle && (a.object.angle = this.angle);
            void 0 !== this.decay && (a.object.decay = this.decay);
            void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
            void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
            return a
        }
    });
    ef.prototype = Object.assign(Object.create(S.prototype), {
        constructor: ef,
        isHemisphereLight: !0,
        copy: function(a) {
            S.prototype.copy.call(this, a);
            this.groundColor.copy(a.groundColor);
            return this
        }
    });
    Object.assign(jb.prototype, {
        _projScreenMatrix: new P,
        _lightPositionWorld: new n,
        _lookTarget: new n,
        getViewportCount: function() {
            return this._viewportCount
        },
        getFrustum: function() {
            return this._frustum
        },
        updateMatrices: function(a) {
            var b = this.camera
              , c = this.matrix
              , d = this._projScreenMatrix
              , e = this._lookTarget
              , f = this._lightPositionWorld;
            f.setFromMatrixPosition(a.matrixWorld);
            b.position.copy(f);
            e.setFromMatrixPosition(a.target.matrixWorld);
            b.lookAt(e);
            b.updateMatrixWorld();
            d.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            this._frustum.setFromProjectionMatrix(d);
            c.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
            c.multiply(b.projectionMatrix);
            c.multiply(b.matrixWorldInverse)
        },
        getViewport: function(a) {
            return this._viewports[a]
        },
        getFrameExtents: function() {
            return this._frameExtents
        },
        copy: function(a) {
            this.camera = a.camera.clone();
            this.bias = a.bias;
            this.radius = a.radius;
            this.mapSize.copy(a.mapSize);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var a = {};
            0 !== this.bias && (a.bias = this.bias);
            1 !== this.radius && (a.radius = this.radius);
            if (512 !== this.mapSize.x || 512 !== this.mapSize.y)
                a.mapSize = this.mapSize.toArray();
            a.camera = this.camera.toJSON(!1).object;
            delete a.camera.matrix;
            return a
        }
    });
    ff.prototype = Object.assign(Object.create(jb.prototype), {
        constructor: ff,
        isSpotLightShadow: !0,
        updateMatrices: function(a) {
            var b = this.camera
              , c = 2 * M.RAD2DEG * a.angle
              , d = this.mapSize.width / this.mapSize.height
              , e = a.distance || b.far;
            if (c !== b.fov || d !== b.aspect || e !== b.far)
                b.fov = c,
                b.aspect = d,
                b.far = e,
                b.updateProjectionMatrix();
            jb.prototype.updateMatrices.call(this, a)
        }
    });
    gf.prototype = Object.assign(Object.create(S.prototype), {
        constructor: gf,
        isSpotLight: !0,
        copy: function(a) {
            S.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.angle = a.angle;
            this.penumbra = a.penumbra;
            this.decay = a.decay;
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this
        }
    });
    xg.prototype = Object.assign(Object.create(jb.prototype), {
        constructor: xg,
        isPointLightShadow: !0,
        updateMatrices: function(a, b) {
            void 0 === b && (b = 0);
            var c = this.camera
              , d = this.matrix
              , e = this._lightPositionWorld
              , f = this._lookTarget
              , g = this._projScreenMatrix;
            e.setFromMatrixPosition(a.matrixWorld);
            c.position.copy(e);
            f.copy(c.position);
            f.add(this._cubeDirections[b]);
            c.up.copy(this._cubeUps[b]);
            c.lookAt(f);
            c.updateMatrixWorld();
            d.makeTranslation(-e.x, -e.y, -e.z);
            g.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse);
            this._frustum.setFromProjectionMatrix(g)
        }
    });
    hf.prototype = Object.assign(Object.create(S.prototype), {
        constructor: hf,
        isPointLight: !0,
        copy: function(a) {
            S.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.decay = a.decay;
            this.shadow = a.shadow.clone();
            return this
        }
    });
    ed.prototype = Object.assign(Object.create(db.prototype), {
        constructor: ed,
        isOrthographicCamera: !0,
        copy: function(a, b) {
            db.prototype.copy.call(this, a, b);
            this.left = a.left;
            this.right = a.right;
            this.top = a.top;
            this.bottom = a.bottom;
            this.near = a.near;
            this.far = a.far;
            this.zoom = a.zoom;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            return this
        },
        setViewOffset: function(a, b, c, d, e, f) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            });
            this.view.enabled = !0;
            this.view.fullWidth = a;
            this.view.fullHeight = b;
            this.view.offsetX = c;
            this.view.offsetY = d;
            this.view.width = e;
            this.view.height = f;
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1);
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var a = (this.right - this.left) / (2 * this.zoom)
              , b = (this.top - this.bottom) / (2 * this.zoom)
              , c = (this.right + this.left) / 2
              , d = (this.top + this.bottom) / 2
              , e = c - a;
            c += a;
            a = d + b;
            b = d - b;
            null !== this.view && this.view.enabled && (d = (this.right - this.left) / this.view.fullWidth / this.zoom,
            b = (this.top - this.bottom) / this.view.fullHeight / this.zoom,
            e += d * this.view.offsetX,
            c = e + d * this.view.width,
            a -= b * this.view.offsetY,
            b = a - b * this.view.height);
            this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far);
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(a) {
            a = E.prototype.toJSON.call(this, a);
            a.object.zoom = this.zoom;
            a.object.left = this.left;
            a.object.right = this.right;
            a.object.top = this.top;
            a.object.bottom = this.bottom;
            a.object.near = this.near;
            a.object.far = this.far;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            return a
        }
    });
    jf.prototype = Object.assign(Object.create(jb.prototype), {
        constructor: jf,
        isDirectionalLightShadow: !0,
        updateMatrices: function(a) {
            jb.prototype.updateMatrices.call(this, a)
        }
    });
    kf.prototype = Object.assign(Object.create(S.prototype), {
        constructor: kf,
        isDirectionalLight: !0,
        copy: function(a) {
            S.prototype.copy.call(this, a);
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this
        }
    });
    lf.prototype = Object.assign(Object.create(S.prototype), {
        constructor: lf,
        isAmbientLight: !0
    });
    mf.prototype = Object.assign(Object.create(S.prototype), {
        constructor: mf,
        isRectAreaLight: !0,
        copy: function(a) {
            S.prototype.copy.call(this, a);
            this.width = a.width;
            this.height = a.height;
            return this
        },
        toJSON: function(a) {
            a = S.prototype.toJSON.call(this, a);
            a.object.width = this.width;
            a.object.height = this.height;
            return a
        }
    });
    Object.assign(nf.prototype, {
        isSphericalHarmonics3: !0,
        set: function(a) {
            for (var b = 0; 9 > b; b++)
                this.coefficients[b].copy(a[b]);
            return this
        },
        zero: function() {
            for (var a = 0; 9 > a; a++)
                this.coefficients[a].set(0, 0, 0);
            return this
        },
        getAt: function(a, b) {
            var c = a.x
              , d = a.y;
            a = a.z;
            var e = this.coefficients;
            b.copy(e[0]).multiplyScalar(.282095);
            b.addScaledVector(e[1], .488603 * d);
            b.addScaledVector(e[2], .488603 * a);
            b.addScaledVector(e[3], .488603 * c);
            b.addScaledVector(e[4], 1.092548 * c * d);
            b.addScaledVector(e[5], 1.092548 * d * a);
            b.addScaledVector(e[6], .315392 * (3 * a * a - 1));
            b.addScaledVector(e[7], 1.092548 * c * a);
            b.addScaledVector(e[8], .546274 * (c * c - d * d));
            return b
        },
        getIrradianceAt: function(a, b) {
            var c = a.x
              , d = a.y;
            a = a.z;
            var e = this.coefficients;
            b.copy(e[0]).multiplyScalar(.886227);
            b.addScaledVector(e[1], 1.023328 * d);
            b.addScaledVector(e[2], 1.023328 * a);
            b.addScaledVector(e[3], 1.023328 * c);
            b.addScaledVector(e[4], .858086 * c * d);
            b.addScaledVector(e[5], .858086 * d * a);
            b.addScaledVector(e[6], .743125 * a * a - .247708);
            b.addScaledVector(e[7], .858086 * c * a);
            b.addScaledVector(e[8], .429043 * (c * c - d * d));
            return b
        },
        add: function(a) {
            for (var b = 0; 9 > b; b++)
                this.coefficients[b].add(a.coefficients[b]);
            return this
        },
        addScaledSH: function(a, b) {
            for (var c = 0; 9 > c; c++)
                this.coefficients[c].addScaledVector(a.coefficients[c], b);
            return this
        },
        scale: function(a) {
            for (var b = 0; 9 > b; b++)
                this.coefficients[b].multiplyScalar(a);
            return this
        },
        lerp: function(a, b) {
            for (var c = 0; 9 > c; c++)
                this.coefficients[c].lerp(a.coefficients[c], b);
            return this
        },
        equals: function(a) {
            for (var b = 0; 9 > b; b++)
                if (!this.coefficients[b].equals(a.coefficients[b]))
                    return !1;
            return !0
        },
        copy: function(a) {
            return this.set(a.coefficients)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = this.coefficients, d = 0; 9 > d; d++)
                c[d].fromArray(a, b + 3 * d);
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            for (var c = this.coefficients, d = 0; 9 > d; d++)
                c[d].toArray(a, b + 3 * d);
            return a
        }
    });
    Object.assign(nf, {
        getBasisAt: function(a, b) {
            var c = a.x
              , d = a.y;
            a = a.z;
            b[0] = .282095;
            b[1] = .488603 * d;
            b[2] = .488603 * a;
            b[3] = .488603 * c;
            b[4] = 1.092548 * c * d;
            b[5] = 1.092548 * d * a;
            b[6] = .315392 * (3 * a * a - 1);
            b[7] = 1.092548 * c * a;
            b[8] = .546274 * (c * c - d * d)
        }
    });
    Ra.prototype = Object.assign(Object.create(S.prototype), {
        constructor: Ra,
        isLightProbe: !0,
        copy: function(a) {
            S.prototype.copy.call(this, a);
            this.sh.copy(a.sh);
            return this
        },
        fromJSON: function(a) {
            this.intensity = a.intensity;
            this.sh.fromArray(a.sh);
            return this
        },
        toJSON: function(a) {
            a = S.prototype.toJSON.call(this, a);
            a.object.sh = this.sh.toArray();
            return a
        }
    });
    of.prototype = Object.assign(Object.create(X.prototype), {
        constructor: of,
        load: function(a, b, c, d) {
            var e = this
              , f = new Qa(e.manager);
            f.setPath(e.path);
            f.load(a, function(a) {
                b(e.parse(JSON.parse(a)))
            }, c, d)
        },
        parse: function(a) {
            function b(a) {
                void 0 === c[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
                return c[a]
            }
            var c = this.textures
              , d = new Uk[a.type];
            void 0 !== a.uuid && (d.uuid = a.uuid);
            void 0 !== a.name && (d.name = a.name);
            void 0 !== a.color && d.color.setHex(a.color);
            void 0 !== a.roughness && (d.roughness = a.roughness);
            void 0 !== a.metalness && (d.metalness = a.metalness);
            void 0 !== a.sheen && (d.sheen = (new A).setHex(a.sheen));
            void 0 !== a.emissive && d.emissive.setHex(a.emissive);
            void 0 !== a.specular && d.specular.setHex(a.specular);
            void 0 !== a.shininess && (d.shininess = a.shininess);
            void 0 !== a.clearcoat && (d.clearcoat = a.clearcoat);
            void 0 !== a.clearcoatRoughness && (d.clearcoatRoughness = a.clearcoatRoughness);
            void 0 !== a.fog && (d.fog = a.fog);
            void 0 !== a.flatShading && (d.flatShading = a.flatShading);
            void 0 !== a.blending && (d.blending = a.blending);
            void 0 !== a.combine && (d.combine = a.combine);
            void 0 !== a.side && (d.side = a.side);
            void 0 !== a.opacity && (d.opacity = a.opacity);
            void 0 !== a.transparent && (d.transparent = a.transparent);
            void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest);
            void 0 !== a.depthTest && (d.depthTest = a.depthTest);
            void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite);
            void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite);
            void 0 !== a.stencilWrite && (d.stencilWrite = a.stencilWrite);
            void 0 !== a.stencilWriteMask && (d.stencilWriteMask = a.stencilWriteMask);
            void 0 !== a.stencilFunc && (d.stencilFunc = a.stencilFunc);
            void 0 !== a.stencilRef && (d.stencilRef = a.stencilRef);
            void 0 !== a.stencilFuncMask && (d.stencilFuncMask = a.stencilFuncMask);
            void 0 !== a.stencilFail && (d.stencilFail = a.stencilFail);
            void 0 !== a.stencilZFail && (d.stencilZFail = a.stencilZFail);
            void 0 !== a.stencilZPass && (d.stencilZPass = a.stencilZPass);
            void 0 !== a.wireframe && (d.wireframe = a.wireframe);
            void 0 !== a.wireframeLinewidth && (d.wireframeLinewidth = a.wireframeLinewidth);
            void 0 !== a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap);
            void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin);
            void 0 !== a.rotation && (d.rotation = a.rotation);
            1 !== a.linewidth && (d.linewidth = a.linewidth);
            void 0 !== a.dashSize && (d.dashSize = a.dashSize);
            void 0 !== a.gapSize && (d.gapSize = a.gapSize);
            void 0 !== a.scale && (d.scale = a.scale);
            void 0 !== a.polygonOffset && (d.polygonOffset = a.polygonOffset);
            void 0 !== a.polygonOffsetFactor && (d.polygonOffsetFactor = a.polygonOffsetFactor);
            void 0 !== a.polygonOffsetUnits && (d.polygonOffsetUnits = a.polygonOffsetUnits);
            void 0 !== a.skinning && (d.skinning = a.skinning);
            void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets);
            void 0 !== a.morphNormals && (d.morphNormals = a.morphNormals);
            void 0 !== a.dithering && (d.dithering = a.dithering);
            void 0 !== a.vertexTangents && (d.vertexTangents = a.vertexTangents);
            void 0 !== a.visible && (d.visible = a.visible);
            void 0 !== a.toneMapped && (d.toneMapped = a.toneMapped);
            void 0 !== a.userData && (d.userData = a.userData);
            void 0 !== a.vertexColors && (d.vertexColors = "number" === typeof a.vertexColors ? 0 < a.vertexColors ? !0 : !1 : a.vertexColors);
            if (void 0 !== a.uniforms)
                for (var e in a.uniforms) {
                    var f = a.uniforms[e];
                    d.uniforms[e] = {};
                    switch (f.type) {
                    case "t":
                        d.uniforms[e].value = b(f.value);
                        break;
                    case "c":
                        d.uniforms[e].value = (new A).setHex(f.value);
                        break;
                    case "v2":
                        d.uniforms[e].value = (new v).fromArray(f.value);
                        break;
                    case "v3":
                        d.uniforms[e].value = (new n).fromArray(f.value);
                        break;
                    case "v4":
                        d.uniforms[e].value = (new ca).fromArray(f.value);
                        break;
                    case "m3":
                        d.uniforms[e].value = (new xa).fromArray(f.value);
                    case "m4":
                        d.uniforms[e].value = (new P).fromArray(f.value);
                        break;
                    default:
                        d.uniforms[e].value = f.value
                    }
                }
            void 0 !== a.defines && (d.defines = a.defines);
            void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader);
            void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader);
            if (void 0 !== a.extensions)
                for (var g in a.extensions)
                    d.extensions[g] = a.extensions[g];
            void 0 !== a.shading && (d.flatShading = 1 === a.shading);
            void 0 !== a.size && (d.size = a.size);
            void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation);
            void 0 !== a.map && (d.map = b(a.map));
            void 0 !== a.matcap && (d.matcap = b(a.matcap));
            void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap));
            void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap));
            void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale);
            void 0 !== a.normalMap && (d.normalMap = b(a.normalMap));
            void 0 !== a.normalMapType && (d.normalMapType = a.normalMapType);
            void 0 !== a.normalScale && (e = a.normalScale,
            !1 === Array.isArray(e) && (e = [e, e]),
            d.normalScale = (new v).fromArray(e));
            void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap));
            void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale);
            void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias);
            void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap));
            void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap));
            void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap));
            void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity);
            void 0 !== a.specularMap && (d.specularMap = b(a.specularMap));
            void 0 !== a.envMap && (d.envMap = b(a.envMap));
            void 0 !== a.envMapIntensity && (d.envMapIntensity = a.envMapIntensity);
            void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity);
            void 0 !== a.refractionRatio && (d.refractionRatio = a.refractionRatio);
            void 0 !== a.lightMap && (d.lightMap = b(a.lightMap));
            void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity);
            void 0 !== a.aoMap && (d.aoMap = b(a.aoMap));
            void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity);
            void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap));
            void 0 !== a.clearcoatMap && (d.clearcoatMap = b(a.clearcoatMap));
            void 0 !== a.clearcoatRoughnessMap && (d.clearcoatRoughnessMap = b(a.clearcoatRoughnessMap));
            void 0 !== a.clearcoatNormalMap && (d.clearcoatNormalMap = b(a.clearcoatNormalMap));
            void 0 !== a.clearcoatNormalScale && (d.clearcoatNormalScale = (new v).fromArray(a.clearcoatNormalScale));
            return d
        },
        setTextures: function(a) {
            this.textures = a;
            return this
        }
    });
    var oh = {
        decodeText: function(a) {
            if ("undefined" !== typeof TextDecoder)
                return (new TextDecoder).decode(a);
            for (var b = "", c = 0, d = a.length; c < d; c++)
                b += String.fromCharCode(a[c]);
            try {
                return decodeURIComponent(escape(b))
            } catch (e) {
                return b
            }
        },
        extractUrlBase: function(a) {
            var b = a.lastIndexOf("/");
            return -1 === b ? "./" : a.substr(0, b + 1)
        }
    };
    pf.prototype = Object.assign(Object.create(B.prototype), {
        constructor: pf,
        isInstancedBufferGeometry: !0,
        copy: function(a) {
            B.prototype.copy.call(this, a);
            this.maxInstancedCount = a.maxInstancedCount;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var a = B.prototype.toJSON.call(this);
            a.maxInstancedCount = this.maxInstancedCount;
            a.isInstancedBufferGeometry = !0;
            return a
        }
    });
    qf.prototype = Object.assign(Object.create(N.prototype), {
        constructor: qf,
        isInstancedBufferAttribute: !0,
        copy: function(a) {
            N.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this
        },
        toJSON: function() {
            var a = N.prototype.toJSON.call(this);
            a.meshPerAttribute = this.meshPerAttribute;
            a.isInstancedBufferAttribute = !0;
            return a
        }
    });
    rf.prototype = Object.assign(Object.create(X.prototype), {
        constructor: rf,
        load: function(a, b, c, d) {
            var e = this
              , f = new Qa(e.manager);
            f.setPath(e.path);
            f.load(a, function(a) {
                b(e.parse(JSON.parse(a)))
            }, c, d)
        },
        parse: function(a) {
            var b = a.isInstancedBufferGeometry ? new pf : new B
              , c = a.data.index;
            if (void 0 !== c) {
                var d = new ph[c.type](c.array);
                b.setIndex(new N(d,1))
            }
            c = a.data.attributes;
            for (var e in c) {
                var f = c[e];
                d = new ph[f.type](f.array);
                d = new (f.isInstancedBufferAttribute ? qf : N)(d,f.itemSize,f.normalized);
                void 0 !== f.name && (d.name = f.name);
                b.setAttribute(e, d)
            }
            var g = a.data.morphAttributes;
            if (g)
                for (e in g) {
                    var h = g[e]
                      , k = [];
                    c = 0;
                    for (var l = h.length; c < l; c++)
                        f = h[c],
                        d = new ph[f.type](f.array),
                        d = new N(d,f.itemSize,f.normalized),
                        void 0 !== f.name && (d.name = f.name),
                        k.push(d);
                    b.morphAttributes[e] = k
                }
            a.data.morphTargetsRelative && (b.morphTargetsRelative = !0);
            e = a.data.groups || a.data.drawcalls || a.data.offsets;
            if (void 0 !== e)
                for (c = 0,
                f = e.length; c !== f; ++c)
                    d = e[c],
                    b.addGroup(d.start, d.count, d.materialIndex);
            c = a.data.boundingSphere;
            void 0 !== c && (e = new n,
            void 0 !== c.center && e.fromArray(c.center),
            b.boundingSphere = new cb(e,c.radius));
            a.name && (b.name = a.name);
            a.userData && (b.userData = a.userData);
            return b
        }
    });
    var ph = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    sf.prototype = Object.assign(Object.create(X.prototype), {
        constructor: sf,
        load: function(a, b, c, d) {
            var e = this
              , f = "" === this.path ? oh.extractUrlBase(a) : this.path;
            this.resourcePath = this.resourcePath || f;
            f = new Qa(e.manager);
            f.setPath(this.path);
            f.load(a, function(c) {
                var f = null;
                try {
                    f = JSON.parse(c)
                } catch (k) {
                    void 0 !== d && d(k);
                    console.error("THREE:ObjectLoader: Can't parse " + a + ".", k.message);
                    return
                }
                c = f.metadata;
                void 0 === c || void 0 === c.type || "geometry" === c.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + a) : e.parse(f, b)
            }, c, d)
        },
        parse: function(a, b) {
            var c = this.parseShape(a.shapes);
            c = this.parseGeometries(a.geometries, c);
            var d = this.parseImages(a.images, function() {
                void 0 !== b && b(e)
            });
            d = this.parseTextures(a.textures, d);
            d = this.parseMaterials(a.materials, d);
            var e = this.parseObject(a.object, c, d);
            a.animations && (e.animations = this.parseAnimations(a.animations));
            void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
            return e
        },
        parseShape: function(a) {
            var b = {};
            if (void 0 !== a)
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = (new Nb).fromJSON(a[c]);
                    b[e.uuid] = e
                }
            return b
        },
        parseGeometries: function(a, b) {
            var c = {};
            if (void 0 !== a)
                for (var d = new rf, e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    switch (g.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        var h = new qa[g.type](g.width,g.height,g.widthSegments,g.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        h = new qa[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        h = new qa[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        h = new qa[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        h = new qa[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        h = new qa[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        h = new qa[g.type](g.radius,g.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        h = new qa[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        h = new qa[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        h = new qa[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        h = new qa[g.type]((new nh[g.path.type]).fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        h = new qa[g.type](g.points,g.segments,g.phiStart,g.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        h = new qa[g.type](g.vertices,g.indices,g.radius,g.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        h = [];
                        for (var k = 0, l = g.shapes.length; k < l; k++) {
                            var n = b[g.shapes[k]];
                            h.push(n)
                        }
                        h = new qa[g.type](h,g.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        h = [];
                        k = 0;
                        for (l = g.shapes.length; k < l; k++)
                            n = b[g.shapes[k]],
                            h.push(n);
                        k = g.options.extrudePath;
                        void 0 !== k && (g.options.extrudePath = (new nh[k.type]).fromJSON(k));
                        h = new qa[g.type](h,g.options);
                        break;
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        h = d.parse(g);
                        break;
                    case "Geometry":
                        console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + g.type + '"');
                        continue
                    }
                    h.uuid = g.uuid;
                    void 0 !== g.name && (h.name = g.name);
                    !0 === h.isBufferGeometry && void 0 !== g.userData && (h.userData = g.userData);
                    c[g.uuid] = h
                }
            return c
        },
        parseMaterials: function(a, b) {
            var c = {}
              , d = {};
            if (void 0 !== a) {
                var e = new of;
                e.setTextures(b);
                b = 0;
                for (var f = a.length; b < f; b++) {
                    var g = a[b];
                    if ("MultiMaterial" === g.type) {
                        for (var h = [], k = 0; k < g.materials.length; k++) {
                            var l = g.materials[k];
                            void 0 === c[l.uuid] && (c[l.uuid] = e.parse(l));
                            h.push(c[l.uuid])
                        }
                        d[g.uuid] = h
                    } else
                        void 0 === c[g.uuid] && (c[g.uuid] = e.parse(g)),
                        d[g.uuid] = c[g.uuid]
                }
            }
            return d
        },
        parseAnimations: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c]
                  , e = Pa.parse(d);
                void 0 !== d.uuid && (e.uuid = d.uuid);
                b.push(e)
            }
            return b
        },
        parseImages: function(a, b) {
            function c(a) {
                d.manager.itemStart(a);
                return f.load(a, function() {
                    d.manager.itemEnd(a)
                }, void 0, function() {
                    d.manager.itemError(a);
                    d.manager.itemEnd(a)
                })
            }
            var d = this
              , e = {};
            if (void 0 !== a && 0 < a.length) {
                b = new tg(b);
                var f = new cd(b);
                f.setCrossOrigin(this.crossOrigin);
                b = 0;
                for (var g = a.length; b < g; b++) {
                    var h = a[b]
                      , k = h.url;
                    if (Array.isArray(k)) {
                        e[h.uuid] = [];
                        for (var l = 0, n = k.length; l < n; l++) {
                            var p = k[l];
                            p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : d.resourcePath + p;
                            e[h.uuid].push(c(p))
                        }
                    } else
                        p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : d.resourcePath + h.url,
                        e[h.uuid] = c(p)
                }
            }
            return e
        },
        parseTextures: function(a, b) {
            function c(a, b) {
                if ("number" === typeof a)
                    return a;
                console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
                return b[a]
            }
            var d = {};
            if (void 0 !== a)
                for (var e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
                    void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
                    var h = Array.isArray(b[g.image]) ? new pb(b[g.image]) : new V(b[g.image]);
                    h.needsUpdate = !0;
                    h.uuid = g.uuid;
                    void 0 !== g.name && (h.name = g.name);
                    void 0 !== g.mapping && (h.mapping = c(g.mapping, Vk));
                    void 0 !== g.offset && h.offset.fromArray(g.offset);
                    void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
                    void 0 !== g.center && h.center.fromArray(g.center);
                    void 0 !== g.rotation && (h.rotation = g.rotation);
                    void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], Qi),
                    h.wrapT = c(g.wrap[1], Qi));
                    void 0 !== g.format && (h.format = g.format);
                    void 0 !== g.type && (h.type = g.type);
                    void 0 !== g.encoding && (h.encoding = g.encoding);
                    void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Ri));
                    void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Ri));
                    void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
                    void 0 !== g.flipY && (h.flipY = g.flipY);
                    void 0 !== g.premultiplyAlpha && (h.premultiplyAlpha = g.premultiplyAlpha);
                    void 0 !== g.unpackAlignment && (h.unpackAlignment = g.unpackAlignment);
                    d[g.uuid] = h
                }
            return d
        },
        parseObject: function(a, b, c) {
            function d(a) {
                void 0 === b[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
                return b[a]
            }
            function e(a) {
                if (void 0 !== a) {
                    if (Array.isArray(a)) {
                        for (var b = [], d = 0, e = a.length; d < e; d++) {
                            var f = a[d];
                            void 0 === c[f] && console.warn("THREE.ObjectLoader: Undefined material", f);
                            b.push(c[f])
                        }
                        return b
                    }
                    void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined material", a);
                    return c[a]
                }
            }
            switch (a.type) {
            case "Scene":
                var f = new ob;
                void 0 !== a.background && Number.isInteger(a.background) && (f.background = new A(a.background));
                void 0 !== a.fog && ("Fog" === a.fog.type ? f.fog = new Ne(a.fog.color,a.fog.near,a.fog.far) : "FogExp2" === a.fog.type && (f.fog = new Me(a.fog.color,a.fog.density)));
                break;
            case "PerspectiveCamera":
                f = new ba(a.fov,a.aspect,a.near,a.far);
                void 0 !== a.focus && (f.focus = a.focus);
                void 0 !== a.zoom && (f.zoom = a.zoom);
                void 0 !== a.filmGauge && (f.filmGauge = a.filmGauge);
                void 0 !== a.filmOffset && (f.filmOffset = a.filmOffset);
                void 0 !== a.view && (f.view = Object.assign({}, a.view));
                break;
            case "OrthographicCamera":
                f = new ed(a.left,a.right,a.top,a.bottom,a.near,a.far);
                void 0 !== a.zoom && (f.zoom = a.zoom);
                void 0 !== a.view && (f.view = Object.assign({}, a.view));
                break;
            case "AmbientLight":
                f = new lf(a.color,a.intensity);
                break;
            case "DirectionalLight":
                f = new kf(a.color,a.intensity);
                break;
            case "PointLight":
                f = new hf(a.color,a.intensity,a.distance,a.decay);
                break;
            case "RectAreaLight":
                f = new mf(a.color,a.intensity,a.width,a.height);
                break;
            case "SpotLight":
                f = new gf(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);
                break;
            case "HemisphereLight":
                f = new ef(a.color,a.groundColor,a.intensity);
                break;
            case "LightProbe":
                f = (new Ra).fromJSON(a);
                break;
            case "SkinnedMesh":
                console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
            case "Mesh":
                f = d(a.geometry);
                var g = e(a.material);
                f = new ja(f,g);
                break;
            case "InstancedMesh":
                f = d(a.geometry);
                g = e(a.material);
                var h = a.instanceMatrix;
                f = new Re(f,g,a.count);
                f.instanceMatrix = new N(new Float32Array(h.array),16);
                break;
            case "LOD":
                f = new Nd;
                break;
            case "Line":
                f = new Ja(d(a.geometry),e(a.material),a.mode);
                break;
            case "LineLoop":
                f = new Se(d(a.geometry),e(a.material));
                break;
            case "LineSegments":
                f = new na(d(a.geometry),e(a.material));
                break;
            case "PointCloud":
            case "Points":
                f = new Mc(d(a.geometry),e(a.material));
                break;
            case "Sprite":
                f = new Ld(e(a.material));
                break;
            case "Group":
                f = new Jc;
                break;
            default:
                f = new E
            }
            f.uuid = a.uuid;
            void 0 !== a.name && (f.name = a.name);
            void 0 !== a.matrix ? (f.matrix.fromArray(a.matrix),
            void 0 !== a.matrixAutoUpdate && (f.matrixAutoUpdate = a.matrixAutoUpdate),
            f.matrixAutoUpdate && f.matrix.decompose(f.position, f.quaternion, f.scale)) : (void 0 !== a.position && f.position.fromArray(a.position),
            void 0 !== a.rotation && f.rotation.fromArray(a.rotation),
            void 0 !== a.quaternion && f.quaternion.fromArray(a.quaternion),
            void 0 !== a.scale && f.scale.fromArray(a.scale));
            void 0 !== a.castShadow && (f.castShadow = a.castShadow);
            void 0 !== a.receiveShadow && (f.receiveShadow = a.receiveShadow);
            a.shadow && (void 0 !== a.shadow.bias && (f.shadow.bias = a.shadow.bias),
            void 0 !== a.shadow.radius && (f.shadow.radius = a.shadow.radius),
            void 0 !== a.shadow.mapSize && f.shadow.mapSize.fromArray(a.shadow.mapSize),
            void 0 !== a.shadow.camera && (f.shadow.camera = this.parseObject(a.shadow.camera)));
            void 0 !== a.visible && (f.visible = a.visible);
            void 0 !== a.frustumCulled && (f.frustumCulled = a.frustumCulled);
            void 0 !== a.renderOrder && (f.renderOrder = a.renderOrder);
            void 0 !== a.userData && (f.userData = a.userData);
            void 0 !== a.layers && (f.layers.mask = a.layers);
            if (void 0 !== a.children)
                for (h = a.children,
                g = 0; g < h.length; g++)
                    f.add(this.parseObject(h[g], b, c));
            if ("LOD" === a.type)
                for (void 0 !== a.autoUpdate && (f.autoUpdate = a.autoUpdate),
                a = a.levels,
                h = 0; h < a.length; h++) {
                    g = a[h];
                    var k = f.getObjectByProperty("uuid", g.object);
                    void 0 !== k && f.addLevel(k, g.distance)
                }
            return f
        }
    });
    var Vk = {
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307
    }
      , Qi = {
        RepeatWrapping: 1E3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002
    }
      , Ri = {
        NearestFilter: 1003,
        NearestMipmapNearestFilter: 1004,
        NearestMipmapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipmapNearestFilter: 1007,
        LinearMipmapLinearFilter: 1008
    };
    yg.prototype = Object.assign(Object.create(X.prototype), {
        constructor: yg,
        setOptions: function(a) {
            this.options = a;
            return this
        },
        load: function(a, b, c, d) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            a = this.manager.resolveURL(a);
            var e = this
              , f = sc.get(a);
            if (void 0 !== f)
                return e.manager.itemStart(a),
                setTimeout(function() {
                    b && b(f);
                    e.manager.itemEnd(a)
                }, 0),
                f;
            fetch(a).then(function(a) {
                return a.blob()
            }).then(function(a) {
                return void 0 === e.options ? createImageBitmap(a) : createImageBitmap(a, e.options)
            }).then(function(c) {
                sc.add(a, c);
                b && b(c);
                e.manager.itemEnd(a)
            }).catch(function(b) {
                d && d(b);
                e.manager.itemError(a);
                e.manager.itemEnd(a)
            });
            e.manager.itemStart(a)
        }
    });
    Object.assign(zg.prototype, {
        moveTo: function(a, b) {
            this.currentPath = new $a;
            this.subPaths.push(this.currentPath);
            this.currentPath.moveTo(a, b);
            return this
        },
        lineTo: function(a, b) {
            this.currentPath.lineTo(a, b);
            return this
        },
        quadraticCurveTo: function(a, b, c, d) {
            this.currentPath.quadraticCurveTo(a, b, c, d);
            return this
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            this.currentPath.bezierCurveTo(a, b, c, d, e, f);
            return this
        },
        splineThru: function(a) {
            this.currentPath.splineThru(a);
            return this
        },
        toShapes: function(a, b) {
            function c(a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) {
                    var e = a[c]
                      , f = new Nb;
                    f.curves = e.curves;
                    b.push(f)
                }
                return b
            }
            function d(a, b) {
                for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
                    var g = b[e]
                      , h = b[f]
                      , k = h.x - g.x
                      , l = h.y - g.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (0 > l && (g = b[f],
                        k = -k,
                        h = b[e],
                        l = -l),
                        !(a.y < g.y || a.y > h.y))
                            if (a.y === g.y) {
                                if (a.x === g.x)
                                    return !0
                            } else {
                                e = l * (a.x - g.x) - k * (a.y - g.y);
                                if (0 === e)
                                    return !0;
                                0 > e || (d = !d)
                            }
                    } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x))
                        return !0
                }
                return d
            }
            var e = rb.isClockWise
              , f = this.subPaths;
            if (0 === f.length)
                return [];
            if (!0 === b)
                return c(f);
            b = [];
            if (1 === f.length) {
                var g = f[0];
                var h = new Nb;
                h.curves = g.curves;
                b.push(h);
                return b
            }
            var k = !e(f[0].getPoints());
            k = a ? !k : k;
            h = [];
            var l = []
              , n = []
              , p = 0;
            l[p] = void 0;
            n[p] = [];
            for (var u = 0, r = f.length; u < r; u++) {
                g = f[u];
                var q = g.getPoints();
                var t = e(q);
                (t = a ? !t : t) ? (!k && l[p] && p++,
                l[p] = {
                    s: new Nb,
                    p: q
                },
                l[p].s.curves = g.curves,
                k && p++,
                n[p] = []) : n[p].push({
                    h: g,
                    p: q[0]
                })
            }
            if (!l[0])
                return c(f);
            if (1 < l.length) {
                u = !1;
                a = [];
                e = 0;
                for (f = l.length; e < f; e++)
                    h[e] = [];
                e = 0;
                for (f = l.length; e < f; e++)
                    for (g = n[e],
                    t = 0; t < g.length; t++) {
                        k = g[t];
                        p = !0;
                        for (q = 0; q < l.length; q++)
                            d(k.p, l[q].p) && (e !== q && a.push({
                                froms: e,
                                tos: q,
                                hole: t
                            }),
                            p ? (p = !1,
                            h[q].push(k)) : u = !0);
                        p && h[e].push(k)
                    }
                0 < a.length && (u || (n = h))
            }
            u = 0;
            for (e = l.length; u < e; u++)
                for (h = l[u].s,
                b.push(h),
                a = n[u],
                f = 0,
                g = a.length; f < g; f++)
                    h.holes.push(a[f].h);
            return b
        }
    });
    Object.assign(Ag.prototype, {
        isFont: !0,
        generateShapes: function(a, b) {
            void 0 === b && (b = 100);
            var c = []
              , d = b;
            b = this.data;
            var e = Array.from ? Array.from(a) : String(a).split("");
            d /= b.resolution;
            var f = (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d;
            a = [];
            for (var g = 0, h = 0, k = 0; k < e.length; k++) {
                var l = e[k];
                if ("\n" === l)
                    g = 0,
                    h -= f;
                else {
                    var n = l;
                    l = d;
                    var p = g
                      , u = h
                      , r = b
                      , q = r.glyphs[n] || r.glyphs["?"];
                    if (q) {
                        n = new zg;
                        if (q.o) {
                            r = q._cachedOutline || (q._cachedOutline = q.o.split(" "));
                            for (var t = 0, v = r.length; t < v; )
                                switch (r[t++]) {
                                case "m":
                                    var x = r[t++] * l + p;
                                    var w = r[t++] * l + u;
                                    n.moveTo(x, w);
                                    break;
                                case "l":
                                    x = r[t++] * l + p;
                                    w = r[t++] * l + u;
                                    n.lineTo(x, w);
                                    break;
                                case "q":
                                    var y = r[t++] * l + p;
                                    var A = r[t++] * l + u;
                                    var B = r[t++] * l + p;
                                    var C = r[t++] * l + u;
                                    n.quadraticCurveTo(B, C, y, A);
                                    break;
                                case "b":
                                    y = r[t++] * l + p,
                                    A = r[t++] * l + u,
                                    B = r[t++] * l + p,
                                    C = r[t++] * l + u,
                                    x = r[t++] * l + p,
                                    w = r[t++] * l + u,
                                    n.bezierCurveTo(B, C, x, w, y, A)
                                }
                        }
                        l = {
                            offsetX: q.ha * l,
                            path: n
                        }
                    } else
                        console.error('THREE.Font: character "' + n + '" does not exists in font family ' + r.familyName + "."),
                        l = void 0;
                    g += l.offsetX;
                    a.push(l.path)
                }
            }
            b = 0;
            for (e = a.length; b < e; b++)
                Array.prototype.push.apply(c, a[b].toShapes());
            return c
        }
    });
    Bg.prototype = Object.assign(Object.create(X.prototype), {
        constructor: Bg,
        load: function(a, b, c, d) {
            var e = this
              , f = new Qa(this.manager);
            f.setPath(this.path);
            f.load(a, function(a) {
                try {
                    var c = JSON.parse(a)
                } catch (k) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    c = JSON.parse(a.substring(65, a.length - 2))
                }
                a = e.parse(c);
                b && b(a)
            }, c, d)
        },
        parse: function(a) {
            return new Ag(a)
        }
    });
    var Rf, Gg = {
        getContext: function() {
            void 0 === Rf && (Rf = new (window.AudioContext || window.webkitAudioContext));
            return Rf
        },
        setContext: function(a) {
            Rf = a
        }
    };
    tf.prototype = Object.assign(Object.create(X.prototype), {
        constructor: tf,
        load: function(a, b, c, d) {
            var e = new Qa(this.manager);
            e.setResponseType("arraybuffer");
            e.setPath(this.path);
            e.load(a, function(a) {
                a = a.slice(0);
                Gg.getContext().decodeAudioData(a, function(a) {
                    b(a)
                })
            }, c, d)
        }
    });
    Cg.prototype = Object.assign(Object.create(Ra.prototype), {
        constructor: Cg,
        isHemisphereLightProbe: !0,
        copy: function(a) {
            Ra.prototype.copy.call(this, a);
            return this
        },
        toJSON: function(a) {
            return Ra.prototype.toJSON.call(this, a)
        }
    });
    Dg.prototype = Object.assign(Object.create(Ra.prototype), {
        constructor: Dg,
        isAmbientLightProbe: !0,
        copy: function(a) {
            Ra.prototype.copy.call(this, a);
            return this
        },
        toJSON: function(a) {
            return Ra.prototype.toJSON.call(this, a)
        }
    });
    var Si = new P
      , Ti = new P;
    Object.assign(ji.prototype, {
        update: function(a) {
            var b = this._cache;
            if (b.focus !== a.focus || b.fov !== a.fov || b.aspect !== a.aspect * this.aspect || b.near !== a.near || b.far !== a.far || b.zoom !== a.zoom || b.eyeSep !== this.eyeSep) {
                b.focus = a.focus;
                b.fov = a.fov;
                b.aspect = a.aspect * this.aspect;
                b.near = a.near;
                b.far = a.far;
                b.zoom = a.zoom;
                b.eyeSep = this.eyeSep;
                var c = a.projectionMatrix.clone()
                  , d = b.eyeSep / 2
                  , e = d * b.near / b.focus
                  , f = b.near * Math.tan(M.DEG2RAD * b.fov * .5) / b.zoom;
                Ti.elements[12] = -d;
                Si.elements[12] = d;
                d = -f * b.aspect + e;
                var g = f * b.aspect + e;
                c.elements[0] = 2 * b.near / (g - d);
                c.elements[8] = (g + d) / (g - d);
                this.cameraL.projectionMatrix.copy(c);
                d = -f * b.aspect - e;
                g = f * b.aspect - e;
                c.elements[0] = 2 * b.near / (g - d);
                c.elements[8] = (g + d) / (g - d);
                this.cameraR.projectionMatrix.copy(c)
            }
            this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Ti);
            this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Si)
        }
    });
    Object.assign(Eg.prototype, {
        start: function() {
            this.oldTime = this.startTime = ("undefined" === typeof performance ? Date : performance).now();
            this.elapsedTime = 0;
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime();
            this.autoStart = this.running = !1
        },
        getElapsedTime: function() {
            this.getDelta();
            return this.elapsedTime
        },
        getDelta: function() {
            var a = 0;
            if (this.autoStart && !this.running)
                return this.start(),
                0;
            if (this.running) {
                var b = ("undefined" === typeof performance ? Date : performance).now();
                a = (b - this.oldTime) / 1E3;
                this.oldTime = b;
                this.elapsedTime += a
            }
            return a
        }
    });
    var tc = new n
      , Ui = new la
      , Wk = new n
      , uc = new n;
    Fg.prototype = Object.assign(Object.create(E.prototype), {
        constructor: Fg,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null);
            return this
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(a) {
            null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination);
            this.filter = a;
            this.gain.connect(this.filter);
            this.filter.connect(this.context.destination);
            return this
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(a) {
            this.gain.gain.setTargetAtTime(a, this.context.currentTime, .01);
            return this
        },
        updateMatrixWorld: function(a) {
            E.prototype.updateMatrixWorld.call(this, a);
            a = this.context.listener;
            var b = this.up;
            this.timeDelta = this._clock.getDelta();
            this.matrixWorld.decompose(tc, Ui, Wk);
            uc.set(0, 0, -1).applyQuaternion(Ui);
            if (a.positionX) {
                var c = this.context.currentTime + this.timeDelta;
                a.positionX.linearRampToValueAtTime(tc.x, c);
                a.positionY.linearRampToValueAtTime(tc.y, c);
                a.positionZ.linearRampToValueAtTime(tc.z, c);
                a.forwardX.linearRampToValueAtTime(uc.x, c);
                a.forwardY.linearRampToValueAtTime(uc.y, c);
                a.forwardZ.linearRampToValueAtTime(uc.z, c);
                a.upX.linearRampToValueAtTime(b.x, c);
                a.upY.linearRampToValueAtTime(b.y, c);
                a.upZ.linearRampToValueAtTime(b.z, c)
            } else
                a.setPosition(tc.x, tc.y, tc.z),
                a.setOrientation(uc.x, uc.y, uc.z, b.x, b.y, b.z)
        }
    });
    fd.prototype = Object.assign(Object.create(E.prototype), {
        constructor: fd,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "audioNode";
            this.source = a;
            this.connect();
            return this
        },
        setMediaElementSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "mediaNode";
            this.source = this.context.createMediaElementSource(a);
            this.connect();
            return this
        },
        setMediaStreamSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "mediaStreamNode";
            this.source = this.context.createMediaStreamSource(a);
            this.connect();
            return this
        },
        setBuffer: function(a) {
            this.buffer = a;
            this.sourceType = "buffer";
            this.autoplay && this.play();
            return this
        },
        play: function(a) {
            void 0 === a && (a = 0);
            if (!0 === this.isPlaying)
                console.warn("THREE.Audio: Audio is already playing.");
            else if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this._startedAt = this.context.currentTime + a,
                a = this.context.createBufferSource(),
                a.buffer = this.buffer,
                a.loop = this.loop,
                a.loopStart = this.loopStart,
                a.loopEnd = this.loopEnd,
                a.onended = this.onEnded.bind(this),
                a.start(this._startedAt, this._progress + this.offset, this.duration),
                this.isPlaying = !0,
                this.source = a,
                this.setDetune(this.detune),
                this.setPlaybackRate(this.playbackRate),
                this.connect()
        },
        pause: function() {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate,
                !0 === this.loop && (this._progress %= this.duration || this.buffer.duration),
                this.source.stop(),
                this.source.onended = null,
                this.isPlaying = !1),
                this
        },
        stop: function() {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this._progress = 0,
                this.source.stop(),
                this.source.onended = null,
                this.isPlaying = !1,
                this
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var a = 1, b = this.filters.length; a < b; a++)
                    this.filters[a - 1].connect(this.filters[a]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var a = 1, b = this.filters.length; a < b; a++)
                    this.filters[a - 1].disconnect(this.filters[a]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(a) {
            a || (a = []);
            !0 === this.isPlaying ? (this.disconnect(),
            this.filters = a,
            this.connect()) : this.filters = a;
            return this
        },
        setDetune: function(a) {
            this.detune = a;
            if (void 0 !== this.source.detune)
                return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01),
                this
        },
        getDetune: function() {
            return this.detune
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(a) {
            return this.setFilters(a ? [a] : [])
        },
        setPlaybackRate: function(a) {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this.playbackRate = a,
                !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01),
                this
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.loop
        },
        setLoop: function(a) {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this.loop = a,
                !0 === this.isPlaying && (this.source.loop = this.loop),
                this
        },
        setLoopStart: function(a) {
            this.loopStart = a;
            return this
        },
        setLoopEnd: function(a) {
            this.loopEnd = a;
            return this
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(a) {
            this.gain.gain.setTargetAtTime(a, this.context.currentTime, .01);
            return this
        }
    });
    var vc = new n
      , Vi = new la
      , Xk = new n
      , wc = new n;
    Hg.prototype = Object.assign(Object.create(fd.prototype), {
        constructor: Hg,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(a) {
            this.panner.refDistance = a;
            return this
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(a) {
            this.panner.rolloffFactor = a;
            return this
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(a) {
            this.panner.distanceModel = a;
            return this
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(a) {
            this.panner.maxDistance = a;
            return this
        },
        setDirectionalCone: function(a, b, c) {
            this.panner.coneInnerAngle = a;
            this.panner.coneOuterAngle = b;
            this.panner.coneOuterGain = c;
            return this
        },
        updateMatrixWorld: function(a) {
            E.prototype.updateMatrixWorld.call(this, a);
            if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying)
                if (this.matrixWorld.decompose(vc, Vi, Xk),
                wc.set(0, 0, 1).applyQuaternion(Vi),
                a = this.panner,
                a.positionX) {
                    var b = this.context.currentTime + this.listener.timeDelta;
                    a.positionX.linearRampToValueAtTime(vc.x, b);
                    a.positionY.linearRampToValueAtTime(vc.y, b);
                    a.positionZ.linearRampToValueAtTime(vc.z, b);
                    a.orientationX.linearRampToValueAtTime(wc.x, b);
                    a.orientationY.linearRampToValueAtTime(wc.y, b);
                    a.orientationZ.linearRampToValueAtTime(wc.z, b)
                } else
                    a.setPosition(vc.x, vc.y, vc.z),
                    a.setOrientation(wc.x, wc.y, wc.z)
        }
    });
    Object.assign(Ig.prototype, {
        getFrequencyData: function() {
            this.analyser.getByteFrequencyData(this.data);
            return this.data
        },
        getAverageFrequency: function() {
            for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++)
                a += b[c];
            return a / b.length
        }
    });
    Object.assign(Jg.prototype, {
        accumulate: function(a, b) {
            var c = this.buffer
              , d = this.valueSize;
            a = a * d + d;
            var e = this.cumulativeWeight;
            if (0 === e) {
                for (e = 0; e !== d; ++e)
                    c[a + e] = c[e];
                e = b
            } else
                e += b,
                this._mixBufferRegion(c, a, 0, b / e, d);
            this.cumulativeWeight = e
        },
        accumulateAdditive: function(a) {
            var b = this.buffer
              , c = this.valueSize
              , d = c * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity();
            this._mixBufferRegionAdditive(b, d, 0, a, c);
            this.cumulativeWeightAdditive += a
        },
        apply: function(a) {
            var b = this.valueSize
              , c = this.buffer;
            a = a * b + b;
            var d = this.cumulativeWeight
              , e = this.cumulativeWeightAdditive
              , f = this.binding;
            this.cumulativeWeightAdditive = this.cumulativeWeight = 0;
            1 > d && this._mixBufferRegion(c, a, b * this._origIndex, 1 - d, b);
            0 < e && this._mixBufferRegionAdditive(c, a, this._addIndex * b, 1, b);
            d = b;
            for (e = b + b; d !== e; ++d)
                if (c[d] !== c[d + b]) {
                    f.setValue(c, a);
                    break
                }
        },
        saveOriginalState: function() {
            var a = this.buffer
              , b = this.valueSize
              , c = b * this._origIndex;
            this.binding.getValue(a, c);
            for (var d = b; d !== c; ++d)
                a[d] = a[c + d % b];
            this._setIdentity();
            this.cumulativeWeightAdditive = this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        },
        _setAdditiveIdentityNumeric: function() {
            var a = this._addIndex * this.valueSize;
            this.buffer.fill(0, a, a + this.valueSize)
        },
        _setAdditiveIdentityQuaternion: function() {
            this._setAdditiveIdentityNumeric();
            this.buffer[4 * this._addIndex + 3] = 1
        },
        _setAdditiveIdentityOther: function() {
            this.buffer.copyWithin(this._addIndex * this.valueSize, this._origIndex * this.valueSize, this.valueSize)
        },
        _select: function(a, b, c, d, e) {
            if (.5 <= d)
                for (d = 0; d !== e; ++d)
                    a[b + d] = a[c + d]
        },
        _slerp: function(a, b, c, d) {
            la.slerpFlat(a, b, a, b, a, c, d)
        },
        _slerpAdditive: function(a, b, c, d, e) {
            e *= this._workIndex;
            la.multiplyQuaternionsFlat(a, e, a, b, a, c);
            la.slerpFlat(a, b, a, b, a, e, d)
        },
        _lerp: function(a, b, c, d, e) {
            for (var f = 1 - d, g = 0; g !== e; ++g) {
                var h = b + g;
                a[h] = a[h] * f + a[c + g] * d
            }
        },
        _lerpAdditive: function(a, b, c, d, e) {
            for (var f = 0; f !== e; ++f) {
                var g = b + f;
                a[g] += a[c + f] * d
            }
        }
    });
    var Yk = /[\[\]\.:\/]/g
      , Zk = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]"
      , $k = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]")
      , al = /(WCOD+)?/.source.replace("WCOD", Zk)
      , bl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]")
      , cl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]")
      , dl = new RegExp("^" + $k + al + bl + cl + "$")
      , el = ["material", "materials", "bones"];
    Object.assign(ki.prototype, {
        getValue: function(a, b) {
            this.bind();
            var c = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== c && c.getValue(a, b)
        },
        setValue: function(a, b) {
            for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)
                c[d].setValue(a, b)
        },
        bind: function() {
            for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
                a[b].bind()
        },
        unbind: function() {
            for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
                a[b].unbind()
        }
    });
    Object.assign(ya, {
        Composite: ki,
        create: function(a, b, c) {
            return a && a.isAnimationObjectGroup ? new ya.Composite(a,b,c) : new ya(a,b,c)
        },
        sanitizeNodeName: function(a) {
            return a.replace(/\s/g, "_").replace(Yk, "")
        },
        parseTrackName: function(a) {
            var b = dl.exec(a);
            if (!b)
                throw Error("PropertyBinding: Cannot parse trackName: " + a);
            b = {
                nodeName: b[2],
                objectName: b[3],
                objectIndex: b[4],
                propertyName: b[5],
                propertyIndex: b[6]
            };
            var c = b.nodeName && b.nodeName.lastIndexOf(".");
            if (void 0 !== c && -1 !== c) {
                var d = b.nodeName.substring(c + 1);
                -1 !== el.indexOf(d) && (b.nodeName = b.nodeName.substring(0, c),
                b.objectName = d)
            }
            if (null === b.propertyName || 0 === b.propertyName.length)
                throw Error("PropertyBinding: can not parse propertyName from trackName: " + a);
            return b
        },
        findNode: function(a, b) {
            if (!b || "" === b || "." === b || -1 === b || b === a.name || b === a.uuid)
                return a;
            if (a.skeleton) {
                var c = a.skeleton.getBoneByName(b);
                if (void 0 !== c)
                    return c
            }
            if (a.children) {
                var d = function(a) {
                    for (var c = 0; c < a.length; c++) {
                        var e = a[c];
                        if (e.name === b || e.uuid === b || (e = d(e.children)))
                            return e
                    }
                    return null
                };
                if (a = d(a.children))
                    return a
            }
            return null
        }
    });
    Object.assign(ya.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(a, b) {
            a[b] = this.node[this.propertyName]
        }
        , function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                a[b++] = c[d]
        }
        , function(a, b) {
            a[b] = this.resolvedProperty[this.propertyIndex]
        }
        , function(a, b) {
            this.resolvedProperty.toArray(a, b)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(a, b) {
            this.targetObject[this.propertyName] = a[b]
        }
        , function(a, b) {
            this.targetObject[this.propertyName] = a[b];
            this.targetObject.needsUpdate = !0
        }
        , function(a, b) {
            this.targetObject[this.propertyName] = a[b];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                c[d] = a[b++]
        }
        , function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                c[d] = a[b++];
            this.targetObject.needsUpdate = !0
        }
        , function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                c[d] = a[b++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(a, b) {
            this.resolvedProperty[this.propertyIndex] = a[b]
        }
        , function(a, b) {
            this.resolvedProperty[this.propertyIndex] = a[b];
            this.targetObject.needsUpdate = !0
        }
        , function(a, b) {
            this.resolvedProperty[this.propertyIndex] = a[b];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(a, b) {
            this.resolvedProperty.fromArray(a, b)
        }
        , function(a, b) {
            this.resolvedProperty.fromArray(a, b);
            this.targetObject.needsUpdate = !0
        }
        , function(a, b) {
            this.resolvedProperty.fromArray(a, b);
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]],
        getValue: function(a, b) {
            this.bind();
            this.getValue(a, b)
        },
        setValue: function(a, b) {
            this.bind();
            this.setValue(a, b)
        },
        bind: function() {
            var a = this.node
              , b = this.parsedPath
              , c = b.objectName
              , d = b.propertyName
              , e = b.propertyIndex;
            a || (this.node = a = ya.findNode(this.rootNode, b.nodeName) || this.rootNode);
            this.getValue = this._getValue_unavailable;
            this.setValue = this._setValue_unavailable;
            if (a) {
                if (c) {
                    var f = b.objectIndex;
                    switch (c) {
                    case "materials":
                        if (!a.material) {
                            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            return
                        }
                        if (!a.material.materials) {
                            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            return
                        }
                        a = a.material.materials;
                        break;
                    case "bones":
                        if (!a.skeleton) {
                            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            return
                        }
                        a = a.skeleton.bones;
                        for (c = 0; c < a.length; c++)
                            if (a[c].name === f) {
                                f = c;
                                break
                            }
                        break;
                    default:
                        if (void 0 === a[c]) {
                            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            return
                        }
                        a = a[c]
                    }
                    if (void 0 !== f) {
                        if (void 0 === a[f]) {
                            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, a);
                            return
                        }
                        a = a[f]
                    }
                }
                f = a[d];
                if (void 0 === f)
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a);
                else {
                    b = this.Versioning.None;
                    this.targetObject = a;
                    void 0 !== a.needsUpdate ? b = this.Versioning.NeedsUpdate : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate);
                    c = this.BindingType.Direct;
                    if (void 0 !== e) {
                        if ("morphTargetInfluences" === d) {
                            if (!a.geometry) {
                                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                                return
                            }
                            if (a.geometry.isBufferGeometry) {
                                if (!a.geometry.morphAttributes) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                    return
                                }
                                for (c = 0; c < this.node.geometry.morphAttributes.position.length; c++)
                                    if (a.geometry.morphAttributes.position[c].name === e) {
                                        e = c;
                                        break
                                    }
                            } else {
                                if (!a.geometry.morphTargets) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                    return
                                }
                                for (c = 0; c < this.node.geometry.morphTargets.length; c++)
                                    if (a.geometry.morphTargets[c].name === e) {
                                        e = c;
                                        break
                                    }
                            }
                        }
                        c = this.BindingType.ArrayElement;
                        this.resolvedProperty = f;
                        this.propertyIndex = e
                    } else
                        void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray,
                        this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray,
                        this.resolvedProperty = f) : this.propertyName = d;
                    this.getValue = this.GetterByBindingType[c];
                    this.setValue = this.SetterByBindingTypeAndVersioning[c][b]
                }
            } else
                console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null;
            this.getValue = this._getValue_unbound;
            this.setValue = this._setValue_unbound
        }
    });
    Object.assign(ya.prototype, {
        _getValue_unbound: ya.prototype.getValue,
        _setValue_unbound: ya.prototype.setValue
    });
    Object.assign(li.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._paths, f = this._parsedPaths, g = this._bindings, h = g.length, k = void 0, l = 0, n = arguments.length; l !== n; ++l) {
                var p = arguments[l]
                  , u = p.uuid
                  , r = d[u];
                if (void 0 === r) {
                    r = b++;
                    d[u] = r;
                    a.push(p);
                    u = 0;
                    for (var q = h; u !== q; ++u)
                        g[u].push(new ya(p,e[u],f[u]))
                } else if (r < c) {
                    k = a[r];
                    var t = --c;
                    q = a[t];
                    d[q.uuid] = r;
                    a[r] = q;
                    d[u] = t;
                    a[t] = p;
                    u = 0;
                    for (q = h; u !== q; ++u) {
                        var v = g[u]
                          , x = v[r];
                        v[r] = v[t];
                        void 0 === x && (x = new ya(p,e[u],f[u]));
                        v[t] = x
                    }
                } else
                    a[r] !== k && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = c
        },
        remove: function() {
            for (var a = this._objects, b = this.nCachedObjects_, c = this._indicesByUUID, d = this._bindings, e = d.length, f = 0, g = arguments.length; f !== g; ++f) {
                var h = arguments[f]
                  , k = h.uuid
                  , l = c[k];
                if (void 0 !== l && l >= b) {
                    var n = b++
                      , p = a[n];
                    c[p.uuid] = l;
                    a[l] = p;
                    c[k] = n;
                    a[n] = h;
                    h = 0;
                    for (k = e; h !== k; ++h) {
                        p = d[h];
                        var u = p[l];
                        p[l] = p[n];
                        p[n] = u
                    }
                }
            }
            this.nCachedObjects_ = b
        },
        uncache: function() {
            for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
                var k = arguments[g].uuid
                  , l = d[k];
                if (void 0 !== l)
                    if (delete d[k],
                    l < c) {
                        k = --c;
                        var n = a[k]
                          , p = --b
                          , u = a[p];
                        d[n.uuid] = l;
                        a[l] = n;
                        d[u.uuid] = k;
                        a[k] = u;
                        a.pop();
                        n = 0;
                        for (u = f; n !== u; ++n) {
                            var r = e[n]
                              , q = r[p];
                            r[l] = r[k];
                            r[k] = q;
                            r.pop()
                        }
                    } else
                        for (p = --b,
                        u = a[p],
                        d[u.uuid] = l,
                        a[l] = u,
                        a.pop(),
                        n = 0,
                        u = f; n !== u; ++n)
                            r = e[n],
                            r[l] = r[p],
                            r.pop()
            }
            this.nCachedObjects_ = c
        },
        subscribe_: function(a, b) {
            var c = this._bindingsIndicesByPath
              , d = c[a]
              , e = this._bindings;
            if (void 0 !== d)
                return e[d];
            var f = this._paths
              , g = this._parsedPaths
              , h = this._objects
              , k = this.nCachedObjects_
              , l = Array(h.length);
            d = e.length;
            c[a] = d;
            f.push(a);
            g.push(b);
            e.push(l);
            c = k;
            for (d = h.length; c !== d; ++c)
                l[c] = new ya(h[c],a,b);
            return l
        },
        unsubscribe_: function(a) {
            var b = this._bindingsIndicesByPath
              , c = b[a];
            if (void 0 !== c) {
                var d = this._paths
                  , e = this._parsedPaths
                  , f = this._bindings
                  , g = f.length - 1
                  , h = f[g];
                b[a[g]] = c;
                f[c] = h;
                f.pop();
                e[c] = e[g];
                e.pop();
                d[c] = d[g];
                d.pop()
            }
        }
    });
    Object.assign(mi.prototype, {
        play: function() {
            this._mixer._activateAction(this);
            return this
        },
        stop: function() {
            this._mixer._deactivateAction(this);
            return this.reset()
        },
        reset: function() {
            this.paused = !1;
            this.enabled = !0;
            this.time = 0;
            this._loopCount = -1;
            this._startTime = null;
            return this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(a) {
            this._startTime = a;
            return this
        },
        setLoop: function(a, b) {
            this.loop = a;
            this.repetitions = b;
            return this
        },
        setEffectiveWeight: function(a) {
            this.weight = a;
            this._effectiveWeight = this.enabled ? a : 0;
            return this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(a) {
            return this._scheduleFading(a, 0, 1)
        },
        fadeOut: function(a) {
            return this._scheduleFading(a, 1, 0)
        },
        crossFadeFrom: function(a, b, c) {
            a.fadeOut(b);
            this.fadeIn(b);
            if (c) {
                c = this._clip.duration;
                var d = a._clip.duration
                  , e = c / d;
                a.warp(1, d / c, b);
                this.warp(e, 1, b)
            }
            return this
        },
        crossFadeTo: function(a, b, c) {
            return a.crossFadeFrom(this, b, c)
        },
        stopFading: function() {
            var a = this._weightInterpolant;
            null !== a && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(a));
            return this
        },
        setEffectiveTimeScale: function(a) {
            this.timeScale = a;
            this._effectiveTimeScale = this.paused ? 0 : a;
            return this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(a) {
            this.timeScale = this._clip.duration / a;
            return this.stopWarping()
        },
        syncWith: function(a) {
            this.time = a.time;
            this.timeScale = a.timeScale;
            return this.stopWarping()
        },
        halt: function(a) {
            return this.warp(this._effectiveTimeScale, 0, a)
        },
        warp: function(a, b, c) {
            var d = this._mixer
              , e = d.time
              , f = this._timeScaleInterpolant
              , g = this.timeScale;
            null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            d[1] = e + c;
            f[0] = a / g;
            f[1] = b / g;
            return this
        },
        stopWarping: function() {
            var a = this._timeScaleInterpolant;
            null !== a && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(a));
            return this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(a, b, c, d) {
            if (this.enabled) {
                var e = this._startTime;
                if (null !== e) {
                    b = (a - e) * c;
                    if (0 > b || 0 === c)
                        return;
                    this._startTime = null;
                    b *= c
                }
                b *= this._updateTimeScale(a);
                c = this._updateTime(b);
                a = this._updateWeight(a);
                if (0 < a)
                    switch (b = this._interpolants,
                    e = this._propertyBindings,
                    this.blendMode) {
                    case 2501:
                        for (var f = 0, g = b.length; f !== g; ++f)
                            b[f].evaluate(c),
                            e[f].accumulateAdditive(a);
                        break;
                    default:
                        for (f = 0,
                        g = b.length; f !== g; ++f)
                            b[f].evaluate(c),
                            e[f].accumulate(d, a)
                    }
            } else
                this._updateWeight(a)
        },
        _updateWeight: function(a) {
            var b = 0;
            if (this.enabled) {
                b = this.weight;
                var c = this._weightInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0];
                    b *= d;
                    a > c.parameterPositions[1] && (this.stopFading(),
                    0 === d && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = b
        },
        _updateTimeScale: function(a) {
            var b = 0;
            if (!this.paused) {
                b = this.timeScale;
                var c = this._timeScaleInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0];
                    b *= d;
                    a > c.parameterPositions[1] && (this.stopWarping(),
                    0 === b ? this.paused = !0 : this.timeScale = b)
                }
            }
            return this._effectiveTimeScale = b
        },
        _updateTime: function(a) {
            var b = this.time + a
              , c = this._clip.duration
              , d = this.loop
              , e = this._loopCount
              , f = 2202 === d;
            if (0 === a)
                return -1 === e ? b : f && 1 === (e & 1) ? c - b : b;
            if (2200 === d)
                a: {
                    if (-1 === e && (this._loopCount = 0,
                    this._setEndings(!0, !0, !1)),
                    b >= c)
                        b = c;
                    else if (0 > b)
                        b = 0;
                    else {
                        this.time = b;
                        break a
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;
                    this.time = b;
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 > a ? -1 : 1
                    })
                }
            else {
                -1 === e && (0 <= a ? (e = 0,
                this._setEndings(!0, 0 === this.repetitions, f)) : this._setEndings(0 === this.repetitions, !0, f));
                if (b >= c || 0 > b) {
                    d = Math.floor(b / c);
                    b -= c * d;
                    e += Math.abs(d);
                    var g = this.repetitions - e;
                    0 >= g ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this.time = b = 0 < a ? c : 0,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 < a ? 1 : -1
                    })) : (1 === g ? (a = 0 > a,
                    this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f),
                    this._loopCount = e,
                    this.time = b,
                    this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: d
                    }))
                } else
                    this.time = b;
                if (f && 1 === (e & 1))
                    return c - b
            }
            return b
        },
        _setEndings: function(a, b, c) {
            var d = this._interpolantSettings;
            c ? (d.endingStart = 2401,
            d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402,
            d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(a, b, c) {
            var d = this._mixer
              , e = d.time
              , f = this._weightInterpolant;
            null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            f[0] = b;
            d[1] = e + a;
            f[1] = c;
            return this
        }
    });
    Kg.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: Kg,
        _bindAction: function(a, b) {
            var c = a._localRoot || this._root
              , d = a._clip.tracks
              , e = d.length
              , f = a._propertyBindings;
            a = a._interpolants;
            var g = c.uuid
              , h = this._bindingsByRootAndName
              , k = h[g];
            void 0 === k && (k = {},
            h[g] = k);
            for (h = 0; h !== e; ++h) {
                var l = d[h]
                  , n = l.name
                  , p = k[n];
                if (void 0 === p) {
                    p = f[h];
                    if (void 0 !== p) {
                        null === p._cacheIndex && (++p.referenceCount,
                        this._addInactiveBinding(p, g, n));
                        continue
                    }
                    p = new Jg(ya.create(c, n, b && b._propertyBindings[h].binding.parsedPath),l.ValueTypeName,l.getValueSize());
                    ++p.referenceCount;
                    this._addInactiveBinding(p, g, n)
                }
                f[h] = p;
                a[h].resultBuffer = p.buffer
            }
        },
        _activateAction: function(a) {
            if (!this._isActiveAction(a)) {
                if (null === a._cacheIndex) {
                    var b = (a._localRoot || this._root).uuid
                      , c = a._clip.uuid
                      , d = this._actionsByClip[c];
                    this._bindAction(a, d && d.knownActions[0]);
                    this._addInactiveAction(a, c, b)
                }
                b = a._propertyBindings;
                c = 0;
                for (d = b.length; c !== d; ++c) {
                    var e = b[c];
                    0 === e.useCount++ && (this._lendBinding(e),
                    e.saveOriginalState())
                }
                this._lendAction(a)
            }
        },
        _deactivateAction: function(a) {
            if (this._isActiveAction(a)) {
                for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
                    var e = b[c];
                    0 === --e.useCount && (e.restoreOriginalState(),
                    this._takeBackBinding(e))
                }
                this._takeBackAction(a)
            }
        },
        _initMemoryManager: function() {
            this._actions = [];
            this._nActiveActions = 0;
            this._actionsByClip = {};
            this._bindings = [];
            this._nActiveBindings = 0;
            this._bindingsByRootAndName = {};
            this._controlInterpolants = [];
            this._nActiveControlInterpolants = 0;
            var a = this;
            this.stats = {
                actions: {
                    get total() {
                        return a._actions.length
                    },
                    get inUse() {
                        return a._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return a._bindings.length
                    },
                    get inUse() {
                        return a._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return a._controlInterpolants.length
                    },
                    get inUse() {
                        return a._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(a) {
            a = a._cacheIndex;
            return null !== a && a < this._nActiveActions
        },
        _addInactiveAction: function(a, b, c) {
            var d = this._actions
              , e = this._actionsByClip
              , f = e[b];
            void 0 === f ? (f = {
                knownActions: [a],
                actionByRoot: {}
            },
            a._byClipCacheIndex = 0,
            e[b] = f) : (b = f.knownActions,
            a._byClipCacheIndex = b.length,
            b.push(a));
            a._cacheIndex = d.length;
            d.push(a);
            f.actionByRoot[c] = a
        },
        _removeInactiveAction: function(a) {
            var b = this._actions
              , c = b[b.length - 1]
              , d = a._cacheIndex;
            c._cacheIndex = d;
            b[d] = c;
            b.pop();
            a._cacheIndex = null;
            b = a._clip.uuid;
            c = this._actionsByClip;
            d = c[b];
            var e = d.knownActions
              , f = e[e.length - 1]
              , g = a._byClipCacheIndex;
            f._byClipCacheIndex = g;
            e[g] = f;
            e.pop();
            a._byClipCacheIndex = null;
            delete d.actionByRoot[(a._localRoot || this._root).uuid];
            0 === e.length && delete c[b];
            this._removeInactiveBindingsForAction(a)
        },
        _removeInactiveBindingsForAction: function(a) {
            a = a._propertyBindings;
            for (var b = 0, c = a.length; b !== c; ++b) {
                var d = a[b];
                0 === --d.referenceCount && this._removeInactiveBinding(d)
            }
        },
        _lendAction: function(a) {
            var b = this._actions
              , c = a._cacheIndex
              , d = this._nActiveActions++
              , e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _takeBackAction: function(a) {
            var b = this._actions
              , c = a._cacheIndex
              , d = --this._nActiveActions
              , e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _addInactiveBinding: function(a, b, c) {
            var d = this._bindingsByRootAndName
              , e = d[b]
              , f = this._bindings;
            void 0 === e && (e = {},
            d[b] = e);
            e[c] = a;
            a._cacheIndex = f.length;
            f.push(a)
        },
        _removeInactiveBinding: function(a) {
            var b = this._bindings
              , c = a.binding
              , d = c.rootNode.uuid;
            c = c.path;
            var e = this._bindingsByRootAndName
              , f = e[d]
              , g = b[b.length - 1];
            a = a._cacheIndex;
            g._cacheIndex = a;
            b[a] = g;
            b.pop();
            delete f[c];
            0 === Object.keys(f).length && delete e[d]
        },
        _lendBinding: function(a) {
            var b = this._bindings
              , c = a._cacheIndex
              , d = this._nActiveBindings++
              , e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _takeBackBinding: function(a) {
            var b = this._bindings
              , c = a._cacheIndex
              , d = --this._nActiveBindings
              , e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _lendControlInterpolant: function() {
            var a = this._controlInterpolants
              , b = this._nActiveControlInterpolants++
              , c = a[b];
            void 0 === c && (c = new ie(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
            c.__cacheIndex = b,
            a[b] = c);
            return c
        },
        _takeBackControlInterpolant: function(a) {
            var b = this._controlInterpolants
              , c = a.__cacheIndex
              , d = --this._nActiveControlInterpolants
              , e = b[d];
            a.__cacheIndex = d;
            b[d] = a;
            e.__cacheIndex = c;
            b[c] = e
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(a, b, c) {
            var d = b || this._root
              , e = d.uuid;
            d = "string" === typeof a ? Pa.findByName(d, a) : a;
            a = null !== d ? d.uuid : a;
            var f = this._actionsByClip[a]
              , g = null;
            void 0 === c && (c = null !== d ? d.blendMode : 2500);
            if (void 0 !== f) {
                g = f.actionByRoot[e];
                if (void 0 !== g && g.blendMode === c)
                    return g;
                g = f.knownActions[0];
                null === d && (d = g._clip)
            }
            if (null === d)
                return null;
            b = new mi(this,d,b,c);
            this._bindAction(b, g);
            this._addInactiveAction(b, a, e);
            return b
        },
        existingAction: function(a, b) {
            var c = b || this._root;
            b = c.uuid;
            c = "string" === typeof a ? Pa.findByName(c, a) : a;
            a = this._actionsByClip[c ? c.uuid : a];
            return void 0 !== a ? a.actionByRoot[b] || null : null
        },
        stopAllAction: function() {
            for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)
                a[e].reset();
            for (e = 0; e !== d; ++e)
                c[e].useCount = 0;
            return this
        },
        update: function(a) {
            a *= this.timeScale;
            for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g)
                b[g]._update(d, a, e, f);
            a = this._bindings;
            b = this._nActiveBindings;
            for (g = 0; g !== b; ++g)
                a[g].apply(f);
            return this
        },
        setTime: function(a) {
            for (var b = this.time = 0; b < this._actions.length; b++)
                this._actions[b].time = 0;
            return this.update(a)
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(a) {
            var b = this._actions;
            a = a.uuid;
            var c = this._actionsByClip
              , d = c[a];
            if (void 0 !== d) {
                d = d.knownActions;
                for (var e = 0, f = d.length; e !== f; ++e) {
                    var g = d[e];
                    this._deactivateAction(g);
                    var h = g._cacheIndex
                      , k = b[b.length - 1];
                    g._cacheIndex = null;
                    g._byClipCacheIndex = null;
                    k._cacheIndex = h;
                    b[h] = k;
                    b.pop();
                    this._removeInactiveBindingsForAction(g)
                }
                delete c[a]
            }
        },
        uncacheRoot: function(a) {
            a = a.uuid;
            var b = this._actionsByClip;
            for (d in b) {
                var c = b[d].actionByRoot[a];
                void 0 !== c && (this._deactivateAction(c),
                this._removeInactiveAction(c))
            }
            var d = this._bindingsByRootAndName[a];
            if (void 0 !== d)
                for (var e in d)
                    a = d[e],
                    a.restoreOriginalState(),
                    this._removeInactiveBinding(a)
        },
        uncacheAction: function(a, b) {
            a = this.existingAction(a, b);
            null !== a && (this._deactivateAction(a),
            this._removeInactiveAction(a))
        }
    });
    uf.prototype.clone = function() {
        return new uf(void 0 === this.value.clone ? this.value : this.value.clone())
    }
    ;
    Lg.prototype = Object.assign(Object.create(qb.prototype), {
        constructor: Lg,
        isInstancedInterleavedBuffer: !0,
        copy: function(a) {
            qb.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this
        }
    });
    Object.assign(Mg.prototype, {
        set: function(a, b) {
            this.ray.set(a, b)
        },
        setFromCamera: function(a, b) {
            b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld),
            this.ray.direction.set(a.x, a.y, .5).unproject(b).sub(this.ray.origin).normalize(),
            this.camera = b) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b),
            this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld),
            this.camera = b) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(a, b, c) {
            c = c || [];
            Ng(a, this, c, b);
            c.sort(ni);
            return c
        },
        intersectObjects: function(a, b, c) {
            c = c || [];
            if (!1 === Array.isArray(a))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                c;
            for (var d = 0, e = a.length; d < e; d++)
                Ng(a[d], this, c, b);
            c.sort(ni);
            return c
        }
    });
    Object.assign(oi.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.phi = b;
            this.theta = c;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.radius = a.radius;
            this.phi = a.phi;
            this.theta = a.theta;
            return this
        },
        makeSafe: function() {
            this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi));
            return this
        },
        setFromVector3: function(a) {
            return this.setFromCartesianCoords(a.x, a.y, a.z)
        },
        setFromCartesianCoords: function(a, b, c) {
            this.radius = Math.sqrt(a * a + b * b + c * c);
            0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a, c),
            this.phi = Math.acos(M.clamp(b / this.radius, -1, 1)));
            return this
        }
    });
    Object.assign(pi.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.theta = b;
            this.y = c;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.radius = a.radius;
            this.theta = a.theta;
            this.y = a.y;
            return this
        },
        setFromVector3: function(a) {
            return this.setFromCartesianCoords(a.x, a.y, a.z)
        },
        setFromCartesianCoords: function(a, b, c) {
            this.radius = Math.sqrt(a * a + c * c);
            this.theta = Math.atan2(a, c);
            this.y = b;
            return this
        }
    });
    var Wi = new v;
    Object.assign(Og.prototype, {
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for (var b = 0, c = a.length; b < c; b++)
                this.expandByPoint(a[b]);
            return this
        },
        setFromCenterAndSize: function(a, b) {
            b = Wi.copy(b).multiplyScalar(.5);
            this.min.copy(a).sub(b);
            this.max.copy(a).add(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function() {
            this.min.x = this.min.y = Infinity;
            this.max.x = this.max.y = -Infinity;
            return this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(a) {
            void 0 === a && (console.warn("THREE.Box2: .getCenter() target is now required"),
            a = new v);
            return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(a) {
            void 0 === a && (console.warn("THREE.Box2: .getSize() target is now required"),
            a = new v);
            return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min)
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        containsPoint: function(a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y
        },
        getParameter: function(a, b) {
            void 0 === b && (console.warn("THREE.Box2: .getParameter() target is now required"),
            b = new v);
            return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
        },
        clampPoint: function(a, b) {
            void 0 === b && (console.warn("THREE.Box2: .clampPoint() target is now required"),
            b = new v);
            return b.copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function(a) {
            return Wi.copy(a).clamp(this.min, this.max).sub(a).length()
        },
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            return this
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        }
    });
    var Xi = new n
      , Sf = new n;
    Object.assign(Pg.prototype, {
        set: function(a, b) {
            this.start.copy(a);
            this.end.copy(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.start.copy(a.start);
            this.end.copy(a.end);
            return this
        },
        getCenter: function(a) {
            void 0 === a && (console.warn("THREE.Line3: .getCenter() target is now required"),
            a = new n);
            return a.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(a) {
            void 0 === a && (console.warn("THREE.Line3: .delta() target is now required"),
            a = new n);
            return a.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(a, b) {
            void 0 === b && (console.warn("THREE.Line3: .at() target is now required"),
            b = new n);
            return this.delta(b).multiplyScalar(a).add(this.start)
        },
        closestPointToPointParameter: function(a, b) {
            Xi.subVectors(a, this.start);
            Sf.subVectors(this.end, this.start);
            a = Sf.dot(Sf);
            a = Sf.dot(Xi) / a;
            b && (a = M.clamp(a, 0, 1));
            return a
        },
        closestPointToPoint: function(a, b, c) {
            a = this.closestPointToPointParameter(a, b);
            void 0 === c && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"),
            c = new n);
            return this.delta(c).multiplyScalar(a).add(this.start)
        },
        applyMatrix4: function(a) {
            this.start.applyMatrix4(a);
            this.end.applyMatrix4(a);
            return this
        },
        equals: function(a) {
            return a.start.equals(this.start) && a.end.equals(this.end)
        }
    });
    me.prototype = Object.create(E.prototype);
    me.prototype.constructor = me;
    me.prototype.isImmediateRenderObject = !0;
    var Yi = new n;
    gd.prototype = Object.create(E.prototype);
    gd.prototype.constructor = gd;
    gd.prototype.dispose = function() {
        this.cone.geometry.dispose();
        this.cone.material.dispose()
    }
    ;
    gd.prototype.update = function() {
        this.light.updateMatrixWorld();
        var a = this.light.distance ? this.light.distance : 1E3
          , b = a * Math.tan(this.light.angle);
        this.cone.scale.set(b, b, a);
        Yi.setFromMatrixPosition(this.light.target.matrixWorld);
        this.cone.lookAt(Yi);
        void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    }
    ;
    var Tb = new n
      , Tf = new P
      , qh = new P;
    oc.prototype = Object.create(na.prototype);
    oc.prototype.constructor = oc;
    oc.prototype.isSkeletonHelper = !0;
    oc.prototype.updateMatrixWorld = function(a) {
        var b = this.bones
          , c = this.geometry
          , d = c.getAttribute("position");
        qh.getInverse(this.root.matrixWorld);
        for (var e = 0, f = 0; e < b.length; e++) {
            var g = b[e];
            g.parent && g.parent.isBone && (Tf.multiplyMatrices(qh, g.matrixWorld),
            Tb.setFromMatrixPosition(Tf),
            d.setXYZ(f, Tb.x, Tb.y, Tb.z),
            Tf.multiplyMatrices(qh, g.parent.matrixWorld),
            Tb.setFromMatrixPosition(Tf),
            d.setXYZ(f + 1, Tb.x, Tb.y, Tb.z),
            f += 2)
        }
        c.getAttribute("position").needsUpdate = !0;
        E.prototype.updateMatrixWorld.call(this, a)
    }
    ;
    hd.prototype = Object.create(ja.prototype);
    hd.prototype.constructor = hd;
    hd.prototype.dispose = function() {
        this.geometry.dispose();
        this.material.dispose()
    }
    ;
    hd.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }
    ;
    var fl = new n
      , Zi = new A
      , $i = new A;
    id.prototype = Object.create(E.prototype);
    id.prototype.constructor = id;
    id.prototype.dispose = function() {
        this.children[0].geometry.dispose();
        this.children[0].material.dispose()
    }
    ;
    id.prototype.update = function() {
        var a = this.children[0];
        if (void 0 !== this.color)
            this.material.color.set(this.color);
        else {
            var b = a.geometry.getAttribute("color");
            Zi.copy(this.light.color);
            $i.copy(this.light.groundColor);
            for (var c = 0, d = b.count; c < d; c++) {
                var e = c < d / 2 ? Zi : $i;
                b.setXYZ(c, e.r, e.g, e.b)
            }
            b.needsUpdate = !0
        }
        a.lookAt(fl.setFromMatrixPosition(this.light.matrixWorld).negate())
    }
    ;
    vf.prototype = Object.assign(Object.create(na.prototype), {
        constructor: vf,
        copy: function(a) {
            na.prototype.copy.call(this, a);
            this.geometry.copy(a.geometry);
            this.material.copy(a.material);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    });
    wf.prototype = Object.create(na.prototype);
    wf.prototype.constructor = wf;
    var aj = new n
      , Uf = new n
      , bj = new n;
    jd.prototype = Object.create(E.prototype);
    jd.prototype.constructor = jd;
    jd.prototype.dispose = function() {
        this.lightPlane.geometry.dispose();
        this.lightPlane.material.dispose();
        this.targetLine.geometry.dispose();
        this.targetLine.material.dispose()
    }
    ;
    jd.prototype.update = function() {
        aj.setFromMatrixPosition(this.light.matrixWorld);
        Uf.setFromMatrixPosition(this.light.target.matrixWorld);
        bj.subVectors(Uf, aj);
        this.lightPlane.lookAt(Uf);
        void 0 !== this.color ? (this.lightPlane.material.color.set(this.color),
        this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color),
        this.targetLine.material.color.copy(this.light.color));
        this.targetLine.lookAt(Uf);
        this.targetLine.scale.z = bj.length()
    }
    ;
    var xf = new n
      , ia = new db;
    ne.prototype = Object.create(na.prototype);
    ne.prototype.constructor = ne;
    ne.prototype.update = function() {
        var a = this.geometry
          , b = this.pointMap;
        ia.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
        oa("c", b, a, ia, 0, 0, -1);
        oa("t", b, a, ia, 0, 0, 1);
        oa("n1", b, a, ia, -1, -1, -1);
        oa("n2", b, a, ia, 1, -1, -1);
        oa("n3", b, a, ia, -1, 1, -1);
        oa("n4", b, a, ia, 1, 1, -1);
        oa("f1", b, a, ia, -1, -1, 1);
        oa("f2", b, a, ia, 1, -1, 1);
        oa("f3", b, a, ia, -1, 1, 1);
        oa("f4", b, a, ia, 1, 1, 1);
        oa("u1", b, a, ia, .7, 1.1, -1);
        oa("u2", b, a, ia, -.7, 1.1, -1);
        oa("u3", b, a, ia, 0, 2, -1);
        oa("cf1", b, a, ia, -1, 0, 1);
        oa("cf2", b, a, ia, 1, 0, 1);
        oa("cf3", b, a, ia, 0, -1, 1);
        oa("cf4", b, a, ia, 0, 1, 1);
        oa("cn1", b, a, ia, -1, 0, -1);
        oa("cn2", b, a, ia, 1, 0, -1);
        oa("cn3", b, a, ia, 0, -1, -1);
        oa("cn4", b, a, ia, 0, 1, -1);
        a.getAttribute("position").needsUpdate = !0
    }
    ;
    var Vf = new Sa;
    vb.prototype = Object.create(na.prototype);
    vb.prototype.constructor = vb;
    vb.prototype.update = function(a) {
        void 0 !== a && console.warn("THREE.BoxHelper: .update() has no longer arguments.");
        void 0 !== this.object && Vf.setFromObject(this.object);
        if (!Vf.isEmpty()) {
            a = Vf.min;
            var b = Vf.max
              , c = this.geometry.attributes.position
              , d = c.array;
            d[0] = b.x;
            d[1] = b.y;
            d[2] = b.z;
            d[3] = a.x;
            d[4] = b.y;
            d[5] = b.z;
            d[6] = a.x;
            d[7] = a.y;
            d[8] = b.z;
            d[9] = b.x;
            d[10] = a.y;
            d[11] = b.z;
            d[12] = b.x;
            d[13] = b.y;
            d[14] = a.z;
            d[15] = a.x;
            d[16] = b.y;
            d[17] = a.z;
            d[18] = a.x;
            d[19] = a.y;
            d[20] = a.z;
            d[21] = b.x;
            d[22] = a.y;
            d[23] = a.z;
            c.needsUpdate = !0;
            this.geometry.computeBoundingSphere()
        }
    }
    ;
    vb.prototype.setFromObject = function(a) {
        this.object = a;
        this.update();
        return this
    }
    ;
    vb.prototype.copy = function(a) {
        na.prototype.copy.call(this, a);
        this.object = a.object;
        return this
    }
    ;
    vb.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ;
    oe.prototype = Object.create(na.prototype);
    oe.prototype.constructor = oe;
    oe.prototype.updateMatrixWorld = function(a) {
        var b = this.box;
        b.isEmpty() || (b.getCenter(this.position),
        b.getSize(this.scale),
        this.scale.multiplyScalar(.5),
        E.prototype.updateMatrixWorld.call(this, a))
    }
    ;
    pe.prototype = Object.create(Ja.prototype);
    pe.prototype.constructor = pe;
    pe.prototype.updateMatrixWorld = function(a) {
        var b = -this.plane.constant;
        1E-8 > Math.abs(b) && (b = 1E-8);
        this.scale.set(.5 * this.size, .5 * this.size, b);
        this.children[0].material.side = 0 > b ? 1 : 0;
        this.lookAt(this.plane.normal);
        E.prototype.updateMatrixWorld.call(this, a)
    }
    ;
    var cj = new n, yf, Qg;
    wb.prototype = Object.create(E.prototype);
    wb.prototype.constructor = wb;
    wb.prototype.setDirection = function(a) {
        .99999 < a.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > a.y ? this.quaternion.set(1, 0, 0, 0) : (cj.set(a.z, 0, -a.x).normalize(),
        this.quaternion.setFromAxisAngle(cj, Math.acos(a.y)))
    }
    ;
    wb.prototype.setLength = function(a, b, c) {
        void 0 === b && (b = .2 * a);
        void 0 === c && (c = .2 * b);
        this.line.scale.set(1, Math.max(1E-4, a - b), 1);
        this.line.updateMatrix();
        this.cone.scale.set(c, b, c);
        this.cone.position.y = a;
        this.cone.updateMatrix()
    }
    ;
    wb.prototype.setColor = function(a) {
        this.line.material.color.set(a);
        this.cone.material.color.set(a)
    }
    ;
    wb.prototype.copy = function(a) {
        E.prototype.copy.call(this, a, !1);
        this.line.copy(a.line);
        this.cone.copy(a.cone);
        return this
    }
    ;
    wb.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ;
    qe.prototype = Object.create(na.prototype);
    qe.prototype.constructor = qe;
    var lb = Math.pow(2, 8)
      , dj = [.125, .215, .35, .446, .526, .582]
      , ej = 5 + dj.length
      , kb = {
        3E3: 0,
        3001: 1,
        3002: 2,
        3004: 3,
        3005: 4,
        3006: 5,
        3007: 6
    }
      , rh = new ed
      , sh = function() {
        for (var a = [], b = [], c = [], d = 8, e = 0; e < ej; e++) {
            var f = Math.pow(2, d);
            b.push(f);
            var g = 1 / f;
            4 < e ? g = dj[e - 8 + 4 - 1] : 0 == e && (g = 0);
            c.push(g);
            g = 1 / (f - 1);
            f = -g / 2;
            g = 1 + g / 2;
            var h = [f, f, g, f, g, g, f, f, g, g, f, g];
            f = new Float32Array(108);
            g = new Float32Array(72);
            for (var k = new Float32Array(36), l = 0; 6 > l; l++) {
                var n = l % 3 * 2 / 3 - 1
                  , p = 2 < l ? 0 : -1;
                f.set([n, p, 0, n + 2 / 3, p, 0, n + 2 / 3, p + 1, 0, n, p, 0, n + 2 / 3, p + 1, 0, n, p + 1, 0], 18 * l);
                g.set(h, 12 * l);
                k.set([l, l, l, l, l, l], 6 * l)
            }
            h = new B;
            h.setAttribute("position", new N(f,3));
            h.setAttribute("uv", new N(g,2));
            h.setAttribute("faceIndex", new N(k,1));
            a.push(h);
            4 < d && d--
        }
        return {
            _lodPlanes: a,
            _sizeLods: b,
            _sigmas: c
        }
    }()
      , Be = sh._lodPlanes
      , fj = sh._sizeLods
      , Wf = sh._sigmas
      , th = null
      , xc = (1 + Math.sqrt(5)) / 2
      , wd = 1 / xc
      , gj = [new n(1,1,1), new n(-1,1,1), new n(1,1,-1), new n(-1,1,-1), new n(0,xc,wd), new n(0,xc,-wd), new n(wd,0,xc), new n(-wd,0,xc), new n(xc,wd,0), new n(-xc,wd,0)];
    Rg.prototype = {
        constructor: Rg,
        fromScene: function(a, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = .1);
            void 0 === d && (d = 100);
            th = this._renderer.getRenderTarget();
            var e = this._allocateTargets();
            this._sceneToCubeUV(a, c, d, e);
            0 < b && this._blur(e, 0, 0, b);
            this._applyPMREM(e);
            this._cleanup(e);
            return e
        },
        fromEquirectangular: function(a) {
            a.magFilter = 1003;
            a.minFilter = 1003;
            a.generateMipmaps = !1;
            return this.fromCubemap(a)
        },
        fromCubemap: function(a) {
            th = this._renderer.getRenderTarget();
            var b = this._allocateTargets(a);
            this._textureToCubeUV(a, b);
            this._applyPMREM(b);
            this._cleanup(b);
            return b
        },
        compileCubemapShader: function() {
            null === this._cubemapShader && (this._cubemapShader = ti(),
            this._compileMaterial(this._cubemapShader))
        },
        compileEquirectangularShader: function() {
            null === this._equirectShader && (this._equirectShader = si(),
            this._compileMaterial(this._equirectShader))
        },
        dispose: function() {
            this._blurMaterial.dispose();
            null !== this._cubemapShader && this._cubemapShader.dispose();
            null !== this._equirectShader && this._equirectShader.dispose();
            for (var a = 0; a < Be.length; a++)
                Be[a].dispose()
        },
        _cleanup: function(a) {
            this._pingPongRenderTarget.dispose();
            this._renderer.setRenderTarget(th);
            a.scissorTest = !1;
            a.setSize(a.width, a.height)
        },
        _allocateTargets: function(a) {
            var b = void 0 === a || 1009 !== a.type ? !1 : 3E3 === a.encoding || 3001 === a.encoding || 3007 === a.encoding;
            b = {
                magFilter: 1003,
                minFilter: 1003,
                generateMipmaps: !1,
                type: 1009,
                format: 1023,
                encoding: b ? a.encoding : 3002,
                depthBuffer: !1,
                stencilBuffer: !1
            };
            var c = ri(b);
            c.depthBuffer = a ? !1 : !0;
            this._pingPongRenderTarget = ri(b);
            return c
        },
        _compileMaterial: function(a) {
            var b = new ob;
            b.add(new ja(Be[0],a));
            this._renderer.compile(b, rh)
        },
        _sceneToCubeUV: function(a, b, c, d) {
            b = new ba(90,1,b,c);
            c = [1, 1, 1, 1, -1, 1];
            var e = [1, 1, -1, -1, -1, 1]
              , f = this._renderer
              , g = f.outputEncoding
              , h = f.toneMapping
              , k = f.toneMappingExposure
              , l = f.getClearColor()
              , n = f.getClearAlpha();
            f.toneMapping = 1;
            f.toneMappingExposure = 1;
            f.outputEncoding = 3E3;
            a.scale.z *= -1;
            var p = a.background;
            if (p && p.isColor) {
                p.convertSRGBToLinear();
                var u = Math.min(Math.max(Math.ceil(Math.log2(Math.max(p.r, p.g, p.b))), -128), 127);
                p = p.multiplyScalar(Math.pow(2, -u));
                f.setClearColor(p, (u + 128) / 255);
                a.background = null
            }
            for (p = 0; 6 > p; p++)
                u = p % 3,
                0 == u ? (b.up.set(0, c[p], 0),
                b.lookAt(e[p], 0, 0)) : 1 == u ? (b.up.set(0, 0, c[p]),
                b.lookAt(0, e[p], 0)) : (b.up.set(0, c[p], 0),
                b.lookAt(0, 0, e[p])),
                Ug(d, u * lb, 2 < p ? lb : 0, lb, lb),
                f.setRenderTarget(d),
                f.render(a, b);
            f.toneMapping = h;
            f.toneMappingExposure = k;
            f.outputEncoding = g;
            f.setClearColor(l, n);
            a.scale.z *= -1
        },
        _textureToCubeUV: function(a, b) {
            var c = new ob
              , d = this._renderer;
            a.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = ti()) : null == this._equirectShader && (this._equirectShader = si());
            var e = a.isCubeTexture ? this._cubemapShader : this._equirectShader;
            c.add(new ja(Be[0],e));
            e = e.uniforms;
            e.envMap.value = a;
            a.isCubeTexture || e.texelSize.value.set(1 / a.image.width, 1 / a.image.height);
            e.inputEncoding.value = kb[a.encoding];
            e.outputEncoding.value = kb[b.texture.encoding];
            Ug(b, 0, 0, 3 * lb, 2 * lb);
            d.setRenderTarget(b);
            d.render(c, rh)
        },
        _applyPMREM: function(a) {
            var b = this._renderer
              , c = b.autoClear;
            b.autoClear = !1;
            for (var d = 1; d < ej; d++)
                this._blur(a, d - 1, d, Math.sqrt(Wf[d] * Wf[d] - Wf[d - 1] * Wf[d - 1]), gj[(d - 1) % gj.length]);
            b.autoClear = c
        },
        _blur: function(a, b, c, d, e) {
            var f = this._pingPongRenderTarget;
            this._halfBlur(a, f, b, c, d, "latitudinal", e);
            this._halfBlur(f, a, c, c, d, "longitudinal", e)
        },
        _halfBlur: function(a, b, c, d, e, f, g) {
            var h = this._renderer
              , k = this._blurMaterial;
            "latitudinal" !== f && "longitudinal" !== f && console.error("blur direction must be either latitudinal or longitudinal!");
            var l = new ob;
            l.add(new ja(Be[d],k));
            k = k.uniforms;
            var n = fj[c] - 1;
            n = isFinite(e) ? Math.PI / (2 * n) : 2 * Math.PI / 39;
            var p = e / n
              , u = isFinite(e) ? 1 + Math.floor(3 * p) : 20;
            20 < u && console.warn("sigmaRadians, " + e + ", is too large and will clip, as it requested " + u + " samples when the maximum is set to 20");
            e = [];
            for (var r = 0, q = 0; 20 > q; ++q) {
                var t = q / p;
                t = Math.exp(-t * t / 2);
                e.push(t);
                0 == q ? r += t : q < u && (r += 2 * t)
            }
            for (q = 0; q < e.length; q++)
                e[q] /= r;
            k.envMap.value = a.texture;
            k.samples.value = u;
            k.weights.value = e;
            k.latitudinal.value = "latitudinal" === f;
            g && (k.poleAxis.value = g);
            k.dTheta.value = n;
            k.mipInt.value = 8 - c;
            k.inputEncoding.value = kb[a.texture.encoding];
            k.outputEncoding.value = kb[a.texture.encoding];
            a = fj[d];
            t = 3 * Math.max(0, lb - 2 * a);
            Ug(b, t, (0 === d ? 0 : 2 * lb) + 2 * a * (4 < d ? d - 8 + 4 : 0), 3 * a, 2 * a);
            h.setRenderTarget(b);
            h.render(l, rh)
        }
    };
    G.create = function(a, b) {
        console.log("THREE.Curve.create() has been deprecated");
        a.prototype = Object.create(G.prototype);
        a.prototype.constructor = a;
        a.prototype.getPoint = b;
        return a
    }
    ;
    Object.assign(ub.prototype, {
        createPointsGeometry: function(a) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            a = this.getPoints(a);
            return this.createGeometry(a)
        },
        createSpacedPointsGeometry: function(a) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            a = this.getSpacedPoints(a);
            return this.createGeometry(a)
        },
        createGeometry: function(a) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var b = new O, c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                b.vertices.push(new n(e.x,e.y,e.z || 0))
            }
            return b
        }
    });
    Object.assign($a.prototype, {
        fromPoints: function(a) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
            return this.setFromPoints(a)
        }
    });
    ui.prototype = Object.create(pa.prototype);
    vi.prototype = Object.create(pa.prototype);
    Vg.prototype = Object.create(pa.prototype);
    Object.assign(Vg.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    });
    vf.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ;
    oc.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }
    ;
    Object.assign(X.prototype, {
        extractUrlBase: function(a) {
            console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
            return oh.extractUrlBase(a)
        }
    });
    X.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
        }
    };
    Object.assign(sf.prototype, {
        setTexturePath: function(a) {
            console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");
            return this.setResourcePath(a)
        }
    });
    Object.assign(Og.prototype, {
        center: function(a) {
            console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
            return this.getCenter(a)
        },
        empty: function() {
            console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        size: function(a) {
            console.warn("THREE.Box2: .size() has been renamed to .getSize().");
            return this.getSize(a)
        }
    });
    Object.assign(Sa.prototype, {
        center: function(a) {
            console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
            return this.getCenter(a)
        },
        empty: function() {
            console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        },
        size: function(a) {
            console.warn("THREE.Box3: .size() has been renamed to .getSize().");
            return this.getSize(a)
        }
    });
    Object.assign(cb.prototype, {
        empty: function() {
            console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        }
    });
    Ec.prototype.setFromMatrix = function(a) {
        console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().");
        return this.setFromProjectionMatrix(a)
    }
    ;
    Pg.prototype.center = function(a) {
        console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
        return this.getCenter(a)
    }
    ;
    Object.assign(M, {
        random16: function() {
            console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
            return Math.random()
        },
        nearestPowerOfTwo: function(a) {
            console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
            return M.floorPowerOfTwo(a)
        },
        nextPowerOfTwo: function(a) {
            console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
            return M.ceilPowerOfTwo(a)
        }
    });
    Object.assign(xa.prototype, {
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b)
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBufferAttribute: function(a) {
            console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    });
    Object.assign(P.prototype, {
        extractPosition: function(a) {
            console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
            return this.copyPosition(a)
        },
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b)
        },
        getPosition: function() {
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            return (new n).setFromMatrixColumn(this, 3)
        },
        setRotationFromQuaternion: function(a) {
            console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
            return this.makeRotationFromQuaternion(a)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector4: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(a) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
            a.transformDirection(this)
        },
        crossVector: function(a) {
            console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBufferAttribute: function(a) {
            console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(a, b, c, d, e, f) {
            console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
            return this.makePerspective(a, b, d, c, e, f)
        }
    });
    Ta.prototype.isIntersectionLine = function(a) {
        console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
        return this.intersectsLine(a)
    }
    ;
    la.prototype.multiplyVector3 = function(a) {
        console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)
    }
    ;
    Object.assign(Wb.prototype, {
        isIntersectionBox: function(a) {
            console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        isIntersectionPlane: function(a) {
            console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
            return this.intersectsPlane(a)
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        }
    });
    Object.assign(wa.prototype, {
        area: function() {
            console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
            return this.getArea()
        },
        barycoordFromPoint: function(a, b) {
            console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
            return this.getBarycoord(a, b)
        },
        midpoint: function(a) {
            console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
            return this.getMidpoint(a)
        },
        normal: function(a) {
            console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
            return this.getNormal(a)
        },
        plane: function(a) {
            console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
            return this.getPlane(a)
        }
    });
    Object.assign(wa, {
        barycoordFromPoint: function(a, b, c, d, e) {
            console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
            return wa.getBarycoord(a, b, c, d, e)
        },
        normal: function(a, b, c, d) {
            console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
            return wa.getNormal(a, b, c, d)
        }
    });
    Object.assign(Nb.prototype, {
        extractAllPoints: function(a) {
            console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
            return this.extractPoints(a)
        },
        extrude: function(a) {
            console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
            return new cc(this,a)
        },
        makeGeometry: function(a) {
            console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
            return new ec(this,a)
        }
    });
    Object.assign(v.prototype, {
        fromAttribute: function(a, b, c) {
            console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        },
        distanceToManhattan: function(a) {
            console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
            return this.manhattanDistanceTo(a)
        },
        lengthManhattan: function() {
            console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
            return this.manhattanLength()
        }
    });
    Object.assign(n.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
            return this.setFromMatrixPosition(a)
        },
        getScaleFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
            return this.setFromMatrixScale(a)
        },
        getColumnFromMatrix: function(a, b) {
            console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
            return this.setFromMatrixColumn(b, a)
        },
        applyProjection: function(a) {
            console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
            return this.applyMatrix4(a)
        },
        fromAttribute: function(a, b, c) {
            console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        },
        distanceToManhattan: function(a) {
            console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
            return this.manhattanDistanceTo(a)
        },
        lengthManhattan: function() {
            console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
            return this.manhattanLength()
        }
    });
    Object.assign(ca.prototype, {
        fromAttribute: function(a, b, c) {
            console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        },
        lengthManhattan: function() {
            console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
            return this.manhattanLength()
        }
    });
    Object.assign(O.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        },
        applyMatrix: function(a) {
            console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().");
            return this.applyMatrix4(a)
        }
    });
    Object.assign(E.prototype, {
        getChildByName: function(a) {
            console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
            return this.getObjectByName(a)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(a, b) {
            console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
            return this.translateOnAxis(b, a)
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        },
        applyMatrix: function(a) {
            console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().");
            return this.applyMatrix4(a)
        }
    });
    Object.defineProperties(E.prototype, {
        eulerOrder: {
            get: function() {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                return this.rotation.order
            },
            set: function(a) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                this.rotation.order = a
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    });
    Object.assign(ja.prototype, {
        setDrawMode: function() {
            console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    });
    Object.defineProperties(ja.prototype, {
        drawMode: {
            get: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");
                return 0
            },
            set: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
            }
        }
    });
    Object.defineProperties(Nd.prototype, {
        objects: {
            get: function() {
                console.warn("THREE.LOD: .objects has been renamed to .levels.");
                return this.levels
            }
        }
    });
    Object.defineProperty(Qe.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    });
    Pe.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }
    ;
    Object.defineProperty(G.prototype, "__arcLengthDivisions", {
        get: function() {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            return this.arcLengthDivisions
        },
        set: function(a) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            this.arcLengthDivisions = a
        }
    });
    ba.prototype.setLens = function(a, b) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
        void 0 !== b && (this.filmGauge = b);
        this.setFocalLength(a)
    }
    ;
    Object.defineProperties(S.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
                this.shadow.camera.fov = a
            }
        },
        shadowCameraLeft: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
                this.shadow.camera.left = a
            }
        },
        shadowCameraRight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
                this.shadow.camera.right = a
            }
        },
        shadowCameraTop: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
                this.shadow.camera.top = a
            }
        },
        shadowCameraBottom: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
                this.shadow.camera.bottom = a
            }
        },
        shadowCameraNear: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
                this.shadow.camera.near = a
            }
        },
        shadowCameraFar: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
                this.shadow.camera.far = a
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(a) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
                this.shadow.bias = a
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
                this.shadow.mapSize.width = a
            }
        },
        shadowMapHeight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
                this.shadow.mapSize.height = a
            }
        }
    });
    Object.defineProperties(N.prototype, {
        length: {
            get: function() {
                console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
                return this.array.length
            }
        },
        dynamic: {
            get: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
                return 35048 === this.usage
            },
            set: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
                this.setUsage(35048)
            }
        }
    });
    Object.assign(N.prototype, {
        setDynamic: function(a) {
            console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
            this.setUsage(!0 === a ? 35048 : 35044);
            return this
        },
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        },
        setArray: function() {
            console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
        }
    });
    Object.assign(B.prototype, {
        addIndex: function(a) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
            this.setIndex(a)
        },
        addAttribute: function(a, b, c) {
            console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
            return b && b.isBufferAttribute || b && b.isInterleavedBufferAttribute ? "index" === a ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(b),
            this) : this.setAttribute(a, b) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            this.setAttribute(a, new N(b,c)))
        },
        addDrawCall: function(a, b, c) {
            void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
            this.addGroup(a, b)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        },
        removeAttribute: function(a) {
            console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");
            return this.deleteAttribute(a)
        },
        applyMatrix: function(a) {
            console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().");
            return this.applyMatrix4(a)
        }
    });
    Object.defineProperties(B.prototype, {
        drawcalls: {
            get: function() {
                console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
                return this.groups
            }
        },
        offsets: {
            get: function() {
                console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
                return this.groups
            }
        }
    });
    Object.defineProperties(Mg.prototype, {
        linePrecision: {
            get: function() {
                console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");
                return this.params.Line.threshold
            },
            set: function(a) {
                console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");
                this.params.Line.threshold = a
            }
        }
    });
    Object.defineProperties(qb.prototype, {
        dynamic: {
            get: function() {
                console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
                return 35048 === this.usage
            },
            set: function(a) {
                console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
                this.setUsage(a)
            }
        }
    });
    Object.assign(qb.prototype, {
        setDynamic: function(a) {
            console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");
            this.setUsage(!0 === a ? 35048 : 35044);
            return this
        },
        setArray: function() {
            console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
        }
    });
    Object.assign(fb.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    });
    Object.defineProperties(uf.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
                return this
            }
        }
    });
    Object.defineProperties(J.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                console.warn("THREE.Material: .wrapRGB has been removed.");
                return new A
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(a) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
                this.flatShading = 1 === a
            }
        },
        stencilMask: {
            get: function() {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
                return this.stencilFuncMask
            },
            set: function(a) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
                this.stencilFuncMask = a
            }
        }
    });
    Object.defineProperties(Mb.prototype, {
        metal: {
            get: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
                return !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    });
    Object.defineProperties(Aa.prototype, {
        derivatives: {
            get: function() {
                console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                return this.extensions.derivatives
            },
            set: function(a) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                this.extensions.derivatives = a
            }
        }
    });
    Object.assign(mg.prototype, {
        clearTarget: function(a, b, c, d) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
            this.setRenderTarget(a);
            this.clear(b, c, d)
        },
        animate: function(a) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
            this.setAnimationLoop(a)
        },
        getCurrentRenderTarget: function() {
            console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
            return this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
            return this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
            return this.capabilities.precision
        },
        resetGLState: function() {
            console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
            return this.state.reset()
        },
        supportsFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
            return this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
            return this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
            return this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
            return this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
            return this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
            return this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
            return this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(a) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
            this.setScissorTest(a)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        },
        allocTextureUnit: function() {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
        },
        setTexture: function() {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
        },
        setTexture2D: function() {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
        },
        setTextureCube: function() {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
        },
        getActiveMipMapLevel: function() {
            console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");
            return this.getActiveMipmapLevel()
        }
    });
    Object.defineProperties(mg.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
                this.shadowMap.enabled = a
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
                this.shadowMap.type = a
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        context: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");
                return this.getContext()
            }
        },
        vr: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");
                return this.xr
            }
        },
        gammaInput: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
                return !1
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
            }
        },
        gammaOutput: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
                return !1
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
                this.outputEncoding = !0 === a ? 3001 : 3E3
            }
        }
    });
    Object.defineProperties(Uh.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    });
    Object.defineProperties(za.prototype, {
        wrapS: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                return this.texture.wrapS
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                this.texture.wrapS = a
            }
        },
        wrapT: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                return this.texture.wrapT
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                this.texture.wrapT = a
            }
        },
        magFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                return this.texture.magFilter
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                this.texture.magFilter = a
            }
        },
        minFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                return this.texture.minFilter
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                this.texture.minFilter = a
            }
        },
        anisotropy: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                return this.texture.anisotropy
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                this.texture.anisotropy = a
            }
        },
        offset: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                return this.texture.offset
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                this.texture.offset = a
            }
        },
        repeat: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                return this.texture.repeat
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                this.texture.repeat = a
            }
        },
        format: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                return this.texture.format
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                this.texture.format = a
            }
        },
        type: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                return this.texture.type
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                this.texture.type = a
            }
        },
        generateMipmaps: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                return this.texture.generateMipmaps
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                this.texture.generateMipmaps = a
            }
        }
    });
    Object.defineProperties(fd.prototype, {
        load: {
            value: function(a) {
                console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
                var b = this;
                (new tf).load(a, function(a) {
                    b.setBuffer(a)
                });
                return this
            }
        },
        startTime: {
            set: function() {
                console.warn("THREE.Audio: .startTime is now .play( delay ).")
            }
        }
    });
    Ig.prototype.getData = function() {
        console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
        return this.getFrequencyData()
    }
    ;
    Dc.prototype.updateCubeMap = function(a, b) {
        console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
        return this.update(a, b)
    }
    ;
    Ob.crossOrigin = void 0;
    Ob.loadTexture = function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var e = new df;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a
    }
    ;
    Ob.loadTextureCube = function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var e = new cf;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a
    }
    ;
    Ob.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }
    ;
    Ob.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
    ;
    "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
        detail: {
            revision: "116"
        }
    }));
    l.ACESFilmicToneMapping = 5;
    l.AddEquation = 100;
    l.AddOperation = 2;
    l.AdditiveAnimationBlendMode = 2501;
    l.AdditiveBlending = 2;
    l.AlphaFormat = 1021;
    l.AlwaysDepth = 1;
    l.AlwaysStencilFunc = 519;
    l.AmbientLight = lf;
    l.AmbientLightProbe = Dg;
    l.AnimationClip = Pa;
    l.AnimationLoader = ug;
    l.AnimationMixer = Kg;
    l.AnimationObjectGroup = li;
    l.AnimationUtils = ka;
    l.ArcCurve = dd;
    l.ArrayCamera = Ke;
    l.ArrowHelper = wb;
    l.Audio = fd;
    l.AudioAnalyser = Ig;
    l.AudioContext = Gg;
    l.AudioListener = Fg;
    l.AudioLoader = tf;
    l.AxesHelper = qe;
    l.AxisHelper = function(a) {
        console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
        return new qe(a)
    }
    ;
    l.BackSide = 1;
    l.BasicDepthPacking = 3200;
    l.BasicShadowMap = 0;
    l.BinaryTextureLoader = function(a) {
        console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
        return new bf(a)
    }
    ;
    l.Bone = ng;
    l.BooleanKeyframeTrack = Ye;
    l.BoundingBoxHelper = function(a, b) {
        console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
        return new vb(a,b)
    }
    ;
    l.Box2 = Og;
    l.Box3 = Sa;
    l.Box3Helper = oe;
    l.BoxBufferGeometry = Fd;
    l.BoxGeometry = ih;
    l.BoxHelper = vb;
    l.BufferAttribute = N;
    l.BufferGeometry = B;
    l.BufferGeometryLoader = rf;
    l.ByteType = 1010;
    l.Cache = sc;
    l.Camera = db;
    l.CameraHelper = ne;
    l.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been removed")
    }
    ;
    l.CanvasTexture = Od;
    l.CatmullRomCurve3 = pa;
    l.CineonToneMapping = 4;
    l.CircleBufferGeometry = $c;
    l.CircleGeometry = he;
    l.ClampToEdgeWrapping = 1001;
    l.Clock = Eg;
    l.ClosedSplineCurve3 = ui;
    l.Color = A;
    l.ColorKeyframeTrack = Ze;
    l.CompressedTexture = Nc;
    l.CompressedTextureLoader = vg;
    l.ConeBufferGeometry = ge;
    l.ConeGeometry = fe;
    l.CubeCamera = Dc;
    l.CubeGeometry = ih;
    l.CubeReflectionMapping = 301;
    l.CubeRefractionMapping = 302;
    l.CubeTexture = pb;
    l.CubeTextureLoader = cf;
    l.CubeUVReflectionMapping = 306;
    l.CubeUVRefractionMapping = 307;
    l.CubicBezierCurve = Wa;
    l.CubicBezierCurve3 = hb;
    l.CubicInterpolant = We;
    l.CullFaceBack = 1;
    l.CullFaceFront = 2;
    l.CullFaceFrontBack = 3;
    l.CullFaceNone = 0;
    l.Curve = G;
    l.CurvePath = ub;
    l.CustomBlending = 5;
    l.CylinderBufferGeometry = sb;
    l.CylinderGeometry = gc;
    l.Cylindrical = pi;
    l.DataTexture = Zb;
    l.DataTexture2DArray = Fc;
    l.DataTexture3D = Gc;
    l.DataTextureLoader = bf;
    l.DecrementStencilOp = 7683;
    l.DecrementWrapStencilOp = 34056;
    l.DefaultLoadingManager = hi;
    l.DepthFormat = 1026;
    l.DepthStencilFormat = 1027;
    l.DepthTexture = Pd;
    l.DirectionalLight = kf;
    l.DirectionalLightHelper = jd;
    l.DirectionalLightShadow = jf;
    l.DiscreteInterpolant = Xe;
    l.DodecahedronBufferGeometry = Sc;
    l.DodecahedronGeometry = Vd;
    l.DoubleSide = 2;
    l.DstAlphaFactor = 206;
    l.DstColorFactor = 208;
    l.DynamicBufferAttribute = function(a, b) {
        console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.");
        return (new N(a,b)).setUsage(35048)
    }
    ;
    l.DynamicCopyUsage = 35050;
    l.DynamicDrawUsage = 35048;
    l.DynamicReadUsage = 35049;
    l.EdgesGeometry = Zc;
    l.EdgesHelper = function(a, b) {
        console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
        return new na(new Zc(a.geometry),new da({
            color: void 0 !== b ? b : 16777215
        }))
    }
    ;
    l.EllipseCurve = La;
    l.EqualDepth = 4;
    l.EqualStencilFunc = 514;
    l.EquirectangularReflectionMapping = 303;
    l.EquirectangularRefractionMapping = 304;
    l.Euler = Ub;
    l.EventDispatcher = ua;
    l.ExtrudeBufferGeometry = fb;
    l.ExtrudeGeometry = cc;
    l.Face3 = yc;
    l.Face4 = function(a, b, c, d, e, f, g) {
        console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
        return new yc(a,b,c,e,f,g)
    }
    ;
    l.FaceColors = 1;
    l.FileLoader = Qa;
    l.FlatShading = 1;
    l.Float32Attribute = function(a, b) {
        console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
        return new y(a,b)
    }
    ;
    l.Float32BufferAttribute = y;
    l.Float64Attribute = function(a, b) {
        console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
        return new Cd(a,b)
    }
    ;
    l.Float64BufferAttribute = Cd;
    l.FloatType = 1015;
    l.Fog = Ne;
    l.FogExp2 = Me;
    l.Font = Ag;
    l.FontLoader = Bg;
    l.FrontFaceDirectionCCW = 1;
    l.FrontFaceDirectionCW = 0;
    l.FrontSide = 0;
    l.Frustum = Ec;
    l.GammaEncoding = 3007;
    l.Geometry = O;
    l.GeometryUtils = {
        merge: function(a, b, c) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            if (b.isMesh) {
                b.matrixAutoUpdate && b.updateMatrix();
                var d = b.matrix;
                b = b.geometry
            }
            a.merge(b, d, c)
        },
        center: function(a) {
            console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
            return a.center()
        }
    };
    l.GreaterDepth = 6;
    l.GreaterEqualDepth = 5;
    l.GreaterEqualStencilFunc = 518;
    l.GreaterStencilFunc = 516;
    l.GridHelper = vf;
    l.Group = Jc;
    l.HalfFloatType = 1016;
    l.HemisphereLight = ef;
    l.HemisphereLightHelper = id;
    l.HemisphereLightProbe = Cg;
    l.IcosahedronBufferGeometry = Rc;
    l.IcosahedronGeometry = Ud;
    l.ImageBitmapLoader = yg;
    l.ImageLoader = cd;
    l.ImageUtils = Ob;
    l.ImmediateRenderObject = me;
    l.IncrementStencilOp = 7682;
    l.IncrementWrapStencilOp = 34055;
    l.InstancedBufferAttribute = qf;
    l.InstancedBufferGeometry = pf;
    l.InstancedInterleavedBuffer = Lg;
    l.InstancedMesh = Re;
    l.Int16Attribute = function(a, b) {
        console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
        return new Ad(a,b)
    }
    ;
    l.Int16BufferAttribute = Ad;
    l.Int32Attribute = function(a, b) {
        console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
        return new Bd(a,b)
    }
    ;
    l.Int32BufferAttribute = Bd;
    l.Int8Attribute = function(a, b) {
        console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
        return new xd(a,b)
    }
    ;
    l.Int8BufferAttribute = xd;
    l.IntType = 1013;
    l.InterleavedBuffer = qb;
    l.InterleavedBufferAttribute = Kd;
    l.Interpolant = Ka;
    l.InterpolateDiscrete = 2300;
    l.InterpolateLinear = 2301;
    l.InterpolateSmooth = 2302;
    l.InvertStencilOp = 5386;
    l.JSONLoader = function() {
        console.error("THREE.JSONLoader has been removed.")
    }
    ;
    l.KeepStencilOp = 7680;
    l.KeyframeTrack = sa;
    l.LOD = Nd;
    l.LatheBufferGeometry = Yc;
    l.LatheGeometry = ee;
    l.Layers = Ce;
    l.LensFlare = function() {
        console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")
    }
    ;
    l.LessDepth = 2;
    l.LessEqualDepth = 3;
    l.LessEqualStencilFunc = 515;
    l.LessStencilFunc = 513;
    l.Light = S;
    l.LightProbe = Ra;
    l.LightShadow = jb;
    l.Line = Ja;
    l.Line3 = Pg;
    l.LineBasicMaterial = da;
    l.LineCurve = Ha;
    l.LineCurve3 = Xa;
    l.LineDashedMaterial = nc;
    l.LineLoop = Se;
    l.LinePieces = 1;
    l.LineSegments = na;
    l.LineStrip = 0;
    l.LinearEncoding = 3E3;
    l.LinearFilter = 1006;
    l.LinearInterpolant = ie;
    l.LinearMipMapLinearFilter = 1008;
    l.LinearMipMapNearestFilter = 1007;
    l.LinearMipmapLinearFilter = 1008;
    l.LinearMipmapNearestFilter = 1007;
    l.LinearToneMapping = 1;
    l.Loader = X;
    l.LoaderUtils = oh;
    l.LoadingManager = tg;
    l.LogLuvEncoding = 3003;
    l.LoopOnce = 2200;
    l.LoopPingPong = 2202;
    l.LoopRepeat = 2201;
    l.LuminanceAlphaFormat = 1025;
    l.LuminanceFormat = 1024;
    l.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    };
    l.Material = J;
    l.MaterialLoader = of;
    l.Math = M;
    l.MathUtils = M;
    l.Matrix3 = xa;
    l.Matrix4 = P;
    l.MaxEquation = 104;
    l.Mesh = ja;
    l.MeshBasicMaterial = Na;
    l.MeshDepthMaterial = Hb;
    l.MeshDistanceMaterial = Ib;
    l.MeshFaceMaterial = function(a) {
        console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
        return a
    }
    ;
    l.MeshLambertMaterial = lc;
    l.MeshMatcapMaterial = mc;
    l.MeshNormalMaterial = kc;
    l.MeshPhongMaterial = Mb;
    l.MeshPhysicalMaterial = ic;
    l.MeshStandardMaterial = gb;
    l.MeshToonMaterial = jc;
    l.MinEquation = 103;
    l.MirroredRepeatWrapping = 1002;
    l.MixOperation = 1;
    l.MultiMaterial = function(a) {
        void 0 === a && (a = []);
        console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
        a.isMultiMaterial = !0;
        a.materials = a;
        a.clone = function() {
            return a.slice()
        }
        ;
        return a
    }
    ;
    l.MultiplyBlending = 4;
    l.MultiplyOperation = 0;
    l.NearestFilter = 1003;
    l.NearestMipMapLinearFilter = 1005;
    l.NearestMipMapNearestFilter = 1004;
    l.NearestMipmapLinearFilter = 1005;
    l.NearestMipmapNearestFilter = 1004;
    l.NeverDepth = 0;
    l.NeverStencilFunc = 512;
    l.NoBlending = 0;
    l.NoColors = 0;
    l.NoToneMapping = 0;
    l.NormalAnimationBlendMode = 2500;
    l.NormalBlending = 1;
    l.NotEqualDepth = 7;
    l.NotEqualStencilFunc = 517;
    l.NumberKeyframeTrack = ad;
    l.Object3D = E;
    l.ObjectLoader = sf;
    l.ObjectSpaceNormalMap = 1;
    l.OctahedronBufferGeometry = ac;
    l.OctahedronGeometry = Td;
    l.OneFactor = 201;
    l.OneMinusDstAlphaFactor = 207;
    l.OneMinusDstColorFactor = 209;
    l.OneMinusSrcAlphaFactor = 205;
    l.OneMinusSrcColorFactor = 203;
    l.OrthographicCamera = ed;
    l.PCFShadowMap = 1;
    l.PCFSoftShadowMap = 2;
    l.PMREMGenerator = Rg;
    l.ParametricBufferGeometry = Pc;
    l.ParametricGeometry = Qd;
    l.Particle = function(a) {
        console.warn("THREE.Particle has been renamed to THREE.Sprite.");
        return new Ld(a)
    }
    ;
    l.ParticleBasicMaterial = function(a) {
        console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
        return new Va(a)
    }
    ;
    l.ParticleSystem = function(a, b) {
        console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
        return new Mc(a,b)
    }
    ;
    l.ParticleSystemMaterial = function(a) {
        console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
        return new Va(a)
    }
    ;
    l.Path = $a;
    l.PerspectiveCamera = ba;
    l.Plane = Ta;
    l.PlaneBufferGeometry = $b;
    l.PlaneGeometry = Ed;
    l.PlaneHelper = pe;
    l.PointCloud = function(a, b) {
        console.warn("THREE.PointCloud has been renamed to THREE.Points.");
        return new Mc(a,b)
    }
    ;
    l.PointCloudMaterial = function(a) {
        console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
        return new Va(a)
    }
    ;
    l.PointLight = hf;
    l.PointLightHelper = hd;
    l.Points = Mc;
    l.PointsMaterial = Va;
    l.PolarGridHelper = wf;
    l.PolyhedronBufferGeometry = Ea;
    l.PolyhedronGeometry = Rd;
    l.PositionalAudio = Hg;
    l.PropertyBinding = ya;
    l.PropertyMixer = Jg;
    l.QuadraticBezierCurve = Ya;
    l.QuadraticBezierCurve3 = ib;
    l.Quaternion = la;
    l.QuaternionKeyframeTrack = je;
    l.QuaternionLinearInterpolant = $e;
    l.REVISION = "116";
    l.RGBADepthPacking = 3201;
    l.RGBAFormat = 1023;
    l.RGBAIntegerFormat = 1033;
    l.RGBA_ASTC_10x10_Format = 37819;
    l.RGBA_ASTC_10x5_Format = 37816;
    l.RGBA_ASTC_10x6_Format = 37817;
    l.RGBA_ASTC_10x8_Format = 37818;
    l.RGBA_ASTC_12x10_Format = 37820;
    l.RGBA_ASTC_12x12_Format = 37821;
    l.RGBA_ASTC_4x4_Format = 37808;
    l.RGBA_ASTC_5x4_Format = 37809;
    l.RGBA_ASTC_5x5_Format = 37810;
    l.RGBA_ASTC_6x5_Format = 37811;
    l.RGBA_ASTC_6x6_Format = 37812;
    l.RGBA_ASTC_8x5_Format = 37813;
    l.RGBA_ASTC_8x6_Format = 37814;
    l.RGBA_ASTC_8x8_Format = 37815;
    l.RGBA_BPTC_Format = 36492;
    l.RGBA_ETC2_EAC_Format = 37496;
    l.RGBA_PVRTC_2BPPV1_Format = 35843;
    l.RGBA_PVRTC_4BPPV1_Format = 35842;
    l.RGBA_S3TC_DXT1_Format = 33777;
    l.RGBA_S3TC_DXT3_Format = 33778;
    l.RGBA_S3TC_DXT5_Format = 33779;
    l.RGBDEncoding = 3006;
    l.RGBEEncoding = 3002;
    l.RGBEFormat = 1023;
    l.RGBFormat = 1022;
    l.RGBIntegerFormat = 1032;
    l.RGBM16Encoding = 3005;
    l.RGBM7Encoding = 3004;
    l.RGB_ETC1_Format = 36196;
    l.RGB_ETC2_Format = 37492;
    l.RGB_PVRTC_2BPPV1_Format = 35841;
    l.RGB_PVRTC_4BPPV1_Format = 35840;
    l.RGB_S3TC_DXT1_Format = 33776;
    l.RGFormat = 1030;
    l.RGIntegerFormat = 1031;
    l.RawShaderMaterial = tb;
    l.Ray = Wb;
    l.Raycaster = Mg;
    l.RectAreaLight = mf;
    l.RedFormat = 1028;
    l.RedIntegerFormat = 1029;
    l.ReinhardToneMapping = 2;
    l.RepeatWrapping = 1E3;
    l.ReplaceStencilOp = 7681;
    l.ReverseSubtractEquation = 102;
    l.RingBufferGeometry = Xc;
    l.RingGeometry = de;
    l.SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
    l.SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
    l.SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
    l.SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
    l.SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
    l.SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
    l.SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
    l.SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
    l.SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
    l.SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
    l.SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
    l.SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
    l.SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
    l.SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
    l.Scene = ob;
    l.SceneUtils = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
        }
    };
    l.ShaderChunk = L;
    l.ShaderLib = eb;
    l.ShaderMaterial = Aa;
    l.ShadowMaterial = hc;
    l.Shape = Nb;
    l.ShapeBufferGeometry = fc;
    l.ShapeGeometry = ec;
    l.ShapePath = zg;
    l.ShapeUtils = rb;
    l.ShortType = 1011;
    l.Skeleton = Qe;
    l.SkeletonHelper = oc;
    l.SkinnedMesh = Pe;
    l.SmoothShading = 2;
    l.Sphere = cb;
    l.SphereBufferGeometry = dc;
    l.SphereGeometry = ce;
    l.Spherical = oi;
    l.SphericalHarmonics3 = nf;
    l.SphericalReflectionMapping = 305;
    l.Spline = Vg;
    l.SplineCurve = Za;
    l.SplineCurve3 = vi;
    l.SpotLight = gf;
    l.SpotLightHelper = gd;
    l.SpotLightShadow = ff;
    l.Sprite = Ld;
    l.SpriteMaterial = Kb;
    l.SrcAlphaFactor = 204;
    l.SrcAlphaSaturateFactor = 210;
    l.SrcColorFactor = 202;
    l.StaticCopyUsage = 35046;
    l.StaticDrawUsage = 35044;
    l.StaticReadUsage = 35045;
    l.StereoCamera = ji;
    l.StreamCopyUsage = 35042;
    l.StreamDrawUsage = 35040;
    l.StreamReadUsage = 35041;
    l.StringKeyframeTrack = af;
    l.SubtractEquation = 101;
    l.SubtractiveBlending = 3;
    l.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    };
    l.TangentSpaceNormalMap = 0;
    l.TetrahedronBufferGeometry = Qc;
    l.TetrahedronGeometry = Sd;
    l.TextBufferGeometry = Wc;
    l.TextGeometry = be;
    l.Texture = V;
    l.TextureLoader = df;
    l.TorusBufferGeometry = Uc;
    l.TorusGeometry = Yd;
    l.TorusKnotBufferGeometry = Tc;
    l.TorusKnotGeometry = Xd;
    l.Triangle = wa;
    l.TriangleFanDrawMode = 2;
    l.TriangleStripDrawMode = 1;
    l.TrianglesDrawMode = 0;
    l.TubeBufferGeometry = bc;
    l.TubeGeometry = Wd;
    l.UVMapping = 300;
    l.Uint16Attribute = function(a, b) {
        console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
        return new Xb(a,b)
    }
    ;
    l.Uint16BufferAttribute = Xb;
    l.Uint32Attribute = function(a, b) {
        console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
        return new Yb(a,b)
    }
    ;
    l.Uint32BufferAttribute = Yb;
    l.Uint8Attribute = function(a, b) {
        console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
        return new yd(a,b)
    }
    ;
    l.Uint8BufferAttribute = yd;
    l.Uint8ClampedAttribute = function(a, b) {
        console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
        return new zd(a,b)
    }
    ;
    l.Uint8ClampedBufferAttribute = zd;
    l.Uncharted2ToneMapping = 3;
    l.Uniform = uf;
    l.UniformsLib = D;
    l.UniformsUtils = Rh;
    l.UnsignedByteType = 1009;
    l.UnsignedInt248Type = 1020;
    l.UnsignedIntType = 1014;
    l.UnsignedShort4444Type = 1017;
    l.UnsignedShort5551Type = 1018;
    l.UnsignedShort565Type = 1019;
    l.UnsignedShortType = 1012;
    l.VSMShadowMap = 3;
    l.Vector2 = v;
    l.Vector3 = n;
    l.Vector4 = ca;
    l.VectorKeyframeTrack = bd;
    l.Vertex = function(a, b, c) {
        console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
        return new n(a,b,c)
    }
    ;
    l.VertexColors = 2;
    l.VideoTexture = qg;
    l.WebGLCubeRenderTarget = Fb;
    l.WebGLMultisampleRenderTarget = Xf;
    l.WebGLRenderTarget = za;
    l.WebGLRenderTargetCube = function(a, b, c) {
        console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).");
        return new Fb(a,c)
    }
    ;
    l.WebGLRenderer = mg;
    l.WebGLUtils = Wh;
    l.WireframeGeometry = Oc;
    l.WireframeHelper = function(a, b) {
        console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
        return new na(new Oc(a.geometry),new da({
            color: void 0 !== b ? b : 16777215
        }))
    }
    ;
    l.WrapAroundEnding = 2402;
    l.XHRLoader = function(a) {
        console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
        return new Qa(a)
    }
    ;
    l.ZeroCurvatureEnding = 2400;
    l.ZeroFactor = 200;
    l.ZeroSlopeEnding = 2401;
    l.ZeroStencilOp = 0;
    l.sRGBEncoding = 3001;
    Object.defineProperty(l, "__esModule", {
        value: !0
    })
});

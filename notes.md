command:
browserify src/main.ts lib/require.js lib/three.js -p [ tsify --noImplicitAny ] > bundle.js

tsc -p c:\Users\alpha\dev\divinejs\tsconfig.json --watch

watchify out/main.js lib/require.js lib/three.js -o bundle.js


https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
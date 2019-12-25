command:
browserify src/main.ts lib/require.js lib/three.js -p [ tsify --noImplicitAny ] > bundle.js

